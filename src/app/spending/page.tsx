import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import dynamic from 'next/dynamic'

const SpendingAreaChart = dynamic(
  () => import('@/components/charts/SpendingCharts').then(mod => mod.SpendingAreaChart),
  { ssr: false, loading: () => <div style={{ height: 400 }} /> }
)
const GdpChart = dynamic(
  () => import('@/components/charts/SpendingCharts').then(mod => mod.GdpChart),
  { ssr: false, loading: () => <div style={{ height: 400 }} /> }
)

export const metadata: Metadata = {
  title: 'US Military Spending — $886B/Year, More Than Next 10 Countries Combined',
  description: 'Track US military spending from WWII to today. Currently $886 billion per year — more than the next 10 countries combined. Pentagon never passed an audit.',
}

const globalComparison = [
  { country: 'United States', amount: 886, color: 'bg-red-600' },
  { country: 'China', amount: 292, color: 'bg-red-400' },
  { country: 'Russia', amount: 109, color: 'bg-stone-400' },
  { country: 'India', amount: 83, color: 'bg-stone-300' },
  { country: 'Saudi Arabia', amount: 75, color: 'bg-stone-300' },
  { country: 'UK', amount: 75, color: 'bg-stone-300' },
  { country: 'Germany', amount: 68, color: 'bg-stone-300' },
  { country: 'France', amount: 56, color: 'bg-stone-200' },
  { country: 'Japan', amount: 50, color: 'bg-stone-200' },
  { country: 'South Korea', amount: 46, color: 'bg-stone-200' },
  { country: 'Australia', amount: 32, color: 'bg-stone-200' },
]

export default function SpendingPage() {
  const spending = loadData('military-spending.json')
  const stats = loadData('stats.json')
  const restTotal = globalComparison.slice(1).reduce((s, c) => s + c.amount, 0)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Military Spending' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Military Spending</h1>
      <p className="text-muted mb-6 max-w-3xl">
        The United States spends {fmtMoney(stats.currentAnnualBudget)} per year on defense — {stats.pctGdp}% of GDP, more than the next 10 countries combined, and ${fmt(stats.costPerSecond)} every single second. The Pentagon has never passed an audit.
      </p>
      <ShareButtons title="US Military Spending — $886B/Year" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmtMoney(stats.currentAnnualBudget), label: 'Annual Budget (FY2024)' },
          { val: stats.pctGdp + '%', label: 'Percentage of GDP' },
          { val: '$' + fmt(stats.costPerSecond) + '/sec', label: 'Cost Per Second' },
          { val: '#1', label: 'Global Military Spender' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* More than next 10 combined */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">More Than the Next 10 Countries Combined</h2>
        <div className="space-y-2">
          {globalComparison.map(c => {
            const pct = (c.amount / 886) * 100
            return (
              <div key={c.country} className="flex items-center gap-3">
                <span className="w-28 text-sm font-medium text-right">{c.country}</span>
                <div className="flex-1 bg-stone-100 rounded-full h-6 overflow-hidden">
                  <div className={`h-full rounded-full ${c.color}`} style={{ width: `${pct}%` }} />
                </div>
                <span className="w-16 text-sm text-right font-semibold">${c.amount}B</span>
              </div>
            )
          })}
        </div>
        <p className="text-sm text-muted mt-4 text-center">US: ${globalComparison[0].amount}B vs. next 10 combined: ${restTotal}B</p>
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Dwight D. Eisenhower, Farewell Address, 1961</p>
      </div>

      {/* Charts */}
      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Military Spending Over Time (Billions $)</h2>
        <SpendingAreaChart data={spending} />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Spending as % of GDP</h2>
        <GdpChart data={spending} />
      </div>

      {/* Where the money goes */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Where the Money Goes</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            { cat: 'Operations & Maintenance', pct: '35%', amt: '$310B', note: 'Day-to-day operations, fuel, supplies, maintenance' },
            { cat: 'Military Personnel', pct: '25%', amt: '$222B', note: 'Pay and benefits for 1.3M active duty, 800K reserve' },
            { cat: 'Procurement', pct: '22%', amt: '$195B', note: 'Weapons, vehicles, ships, aircraft purchases' },
            { cat: 'Research & Development', pct: '11%', amt: '$97B', note: 'Next-gen weapons, AI, hypersonics, space' },
            { cat: 'Military Construction', pct: '2%', amt: '$18B', note: 'Base construction and renovation' },
            { cat: 'Other', pct: '5%', amt: '$44B', note: 'Nuclear weapons (DOE), defense agencies' },
          ].map(c => (
            <div key={c.cat} className="bg-white rounded-lg p-4 border">
              <div className="flex justify-between">
                <h4 className="font-bold">{c.cat}</h4>
                <span className="text-primary font-bold">{c.pct} · {c.amt}</span>
              </div>
              <p className="text-muted text-xs mt-1">{c.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Per Capita */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">Per Capita Military Spending</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            { country: 'United States', amount: '$2,650/person' },
            { country: 'Saudi Arabia', amount: '$2,100/person' },
            { country: 'Israel', amount: '$2,400/person' },
            { country: 'Russia', amount: '$750/person' },
            { country: 'China', amount: '$205/person' },
            { country: 'UK', amount: '$1,100/person' },
            { country: 'India', amount: '$60/person' },
            { country: 'World Average', amount: '$280/person' },
          ].map(c => (
            <div key={c.country} className="bg-white rounded-lg p-3 border">
              <p className={`font-bold ${c.country === 'United States' ? 'text-red-700 text-lg' : 'text-stone-700'}`}>{c.amount}</p>
              <p className="text-muted text-xs">{c.country}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted mt-4 text-center">Every American man, woman, and child effectively pays $2,650/yr for defense — nearly 10× the global average.</p>
      </div>

      {/* Pentagon Audit */}
      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-red-800">📊 Pentagon Has Never Passed an Audit</h3>
        <p className="text-sm text-stone-600">The Department of Defense is the only federal agency that has never passed a comprehensive financial audit. It has failed every year since audits became mandatory in 2018 — <strong>seven consecutive failures</strong>. The Pentagon manages $3.8 trillion in assets but cannot account for where the money goes. If any other organization failed an audit 7 years in a row, there would be consequences. The Pentagon gets a budget increase.</p>
      </div>

      {/* Historical Narrative */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Ratchet Effect</h2>
        <p>Military spending follows a pattern: it spikes during wars, then never fully returns to pre-war levels. WWII saw spending reach 40% of GDP. After the war, it fell — but only to Cold War levels 10× the pre-WWII baseline. After the Cold War ended, the &ldquo;peace dividend&rdquo; lasted less than a decade before 9/11 ratcheted spending back up. The War on Terror added $2T+ beyond baseline budgets. Even as those wars wound down, the budget continued to climb.</p>
        <p>Each crisis creates a new baseline. Each baseline becomes the floor for the next increase. The Pentagon is the world&apos;s largest employer with 3.2 million employees, and every one of those jobs is a constituency that makes cuts politically dangerous.</p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The US spends more on defense than China, Russia, India, Saudi Arabia, UK, Germany, France, Japan, South Korea, and Australia <strong>combined</strong>.</li>
          <li>• Military spending accounts for roughly <strong>half of all federal discretionary spending</strong>.</li>
          <li>• The Pentagon spends roughly <strong>{fmtMoney(stats.costPerDay)} per day</strong> — about {fmtMoney(stats.costPerHour)} per hour.</li>
          <li>• WWII peak spending was over $1 trillion in today&apos;s dollars (41.9% of GDP).</li>
          <li>• The F-35 program alone will cost <strong>$1.7 trillion</strong> over its lifetime — more than the GDP of Canada.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline">→ The Military-Industrial Complex</Link></li>
          <li><Link href="/contractors" className="text-red-800 hover:underline">→ Defense Contractors — who profits</Link></li>
          <li><Link href="/analysis/jobs-vs-war" className="text-red-800 hover:underline">→ Jobs vs. War — military spending creates the fewest jobs</Link></li>
          <li><Link href="/opportunity-cost" className="text-red-800 hover:underline">→ What else could $8 trillion buy?</Link></li>
        </ul>
      </div>
    </div>
  )
}
