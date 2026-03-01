import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt, fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import dynamic from 'next/dynamic'

const TroopsChart = dynamic(
  () => import('@/components/charts/SpendingCharts').then(mod => mod.TroopsChart),
  { ssr: false, loading: () => <div style={{ height: 400 }} /> }
)

export const metadata: Metadata = {
  title: 'US Troop Deployments Worldwide — 173,000 Troops in 80 Countries',
  description: '173,000 US troops stationed in 80 countries across 750 bases. Where they are, how long they\'ve been there, and what it costs.',
}

const regionGroups: Record<string, string[]> = {
  'East Asia & Pacific': ['Japan', 'South Korea', 'Australia', 'Diego Garcia'],
  'Europe': ['Germany', 'Italy', 'United Kingdom', 'Spain', 'Turkey', 'Poland'],
  'Middle East': ['Bahrain', 'Kuwait', 'Qatar', 'Djibouti'],
}

export default function DeploymentsPage() {
  const presence = loadData('overseas-presence.json')
  const stats = loadData('stats.json')
  const chartData = presence.topDeployments.map((d: any) => ({ country: d.country, troops: d.troops }))
  const totalCost = presence.topDeployments.reduce((s: number, d: any) => s + (d.annualCost || 0), 0)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Troop Deployments' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Troop Deployments</h1>
      <p className="text-muted mb-6 max-w-3xl">The United States stations {fmt(presence.totalOverseasTroops)} service members across {presence.totalCountries} countries — a permanent global military presence with no parallel in human history. No other nation has troops in more than a handful of foreign countries. America has them in 80.</p>
      <ShareButtons title="US Troop Deployments Worldwide" />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmt(presence.totalOverseasTroops), label: 'Overseas Troops' },
          { val: fmt(presence.totalBases), label: 'Military Bases' },
          { val: String(presence.totalCountries), label: 'Countries' },
          { val: fmtMoney(presence.annualBaseCost) + '/yr', label: 'Annual Cost' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;Our military forces are committed around the world... in approximately 750 base sites in 80 foreign countries and colonies. We are the new Rome.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Chalmers Johnson, <em>The Sorrows of Empire</em>, 2004</p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Troops by Country</h2>
        <TroopsChart data={chartData} />
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• <strong>Japan hosts 120 US military bases</strong> — more than any other country. 70% are crammed onto the island of Okinawa, which is just 0.6% of Japan&apos;s land area. Okinawans have protested for decades.</li>
          <li>• <strong>Germany still hosts 119 US bases</strong> — 80 years after WWII ended. American troops have been in Germany longer than most Germans have been alive.</li>
          <li>• <strong>No other country on earth has military bases in 80 countries.</strong> Russia has ~15. China has 1. France has ~10. The UK has ~16.</li>
          <li>• The US spends <strong>{fmtMoney(presence.annualBaseCost)} per year</strong> just maintaining overseas bases — more than the entire budget of the EPA, NASA, and the Department of Education combined.</li>
          <li>• US troops have been in <strong>South Korea since 1953</strong> — the Korean War never officially ended.</li>
        </ul>
      </div>

      {/* Deployment Cards */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Deployment Details</h2>
      <div className="space-y-4">
        {presence.topDeployments.map((d: any) => {
          const yearsPresent = 2025 - d.since
          return (
            <div key={d.country} className="bg-white rounded-lg border p-5 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">{d.country}</h3>
                  <p className="text-muted text-sm">Since {d.since} · <strong>{yearsPresent} years</strong> · {d.bases} base{d.bases > 1 ? 's' : ''}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{fmt(d.troops)} troops</p>
                  <p className="text-muted text-sm">{fmtMoney(d.annualCost)}/yr</p>
                </div>
              </div>
              <p className="text-muted text-sm mt-2">{d.note}</p>
              {yearsPresent > 50 && (
                <p className="text-xs text-red-600 mt-2 font-semibold">⚠️ US troops have been here for {yearsPresent} years. The original conflict ended long ago.</p>
              )}
            </div>
          )
        })}
      </div>

      {/* Comparison */}
      <div className="bg-stone-50 rounded-xl p-8 mt-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">No Empire Compares</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>At the height of the <strong>British Empire</strong> — the largest in history — Britain maintained military garrisons in about 36 countries. The <strong>Roman Empire</strong> at its peak had legions across roughly 25 regions. The <strong>Soviet Union</strong> at the height of the Cold War had bases in about 10 countries.</p>
          <p>The United States today has troops in <strong>80 countries</strong> and military installations in most of them. This is not a temporary wartime presence. It&apos;s a permanent infrastructure of global military dominance — maintained for decades after the conflicts that created it.</p>
          <p>The question is not whether America needs a strong defense. It&apos;s whether it needs soldiers stationed in countries where the original threat disappeared generations ago.</p>
        </div>
      </div>

      {/* Related Links */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/bases" className="text-red-800 hover:underline">→ Overseas Bases — 750 installations worldwide</Link></li>
          <li><Link href="/analysis/empire-of-bases" className="text-red-800 hover:underline">→ Empire of Bases — why does America need bases in 80 countries?</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Military Spending — $886B/yr</Link></li>
        </ul>
      </div>
    </div>
  )
}
