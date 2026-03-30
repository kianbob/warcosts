import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'State Military Footprint — Defense Spending & Jobs by State | WarCosts',
  description: 'Explore DoD spending, defense jobs, military bases, and economic impact across all 54 US states and territories. See how the military-industrial complex shapes your state.',
  alternates: { canonical: 'https://www.warcosts.org/states' },
}

interface StateEntry {
  state: string; abbr: string; slug: string; bases: number;
  dodSpending: number; directJobs: number; pctGsp: number;
}

export default function StatesIndexPage() {
  const states = loadData('state-military-index.json') as StateEntry[]
  const sorted = [...states].sort((a, b) => (b.dodSpending || 0) - (a.dodSpending || 0))

  const totalSpending = states.reduce((s, x) => s + (x.dodSpending || 0), 0)
  const totalJobs = states.reduce((s, x) => s + (x.directJobs || 0), 0)
  const totalBases = states.reduce((s, x) => s + (x.bases || 0), 0)

  const topSpenders = sorted.slice(0, 10)
  const maxSpend = topSpenders[0]?.dodSpending || 1
  const topMilitarized = [...states].filter(s => s.pctGsp > 0).sort((a, b) => b.pctGsp - a.pctGsp).slice(0, 10)
  const maxPct = topMilitarized[0]?.pctGsp || 1
  const topBases = [...states].sort((a, b) => (b.bases || 0) - (a.bases || 0)).slice(0, 5)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"ItemList","name":"State Military Footprint","description":"Defense spending, jobs, and military bases across all US states and territories.","url":"https://www.warcosts.org/states"}) }} />    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'State Military Footprint' }]} />

      {/* Dark Hero */}
      <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 mt-4">
        <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
          The Defense Economy, State by State
        </h1>
        <p className="text-stone-400 text-lg max-w-3xl mb-8">
          The defense industry isn&apos;t spread evenly. A handful of states receive the lion&apos;s share
          of Pentagon contracts, host the most bases, and depend on military spending for their economies.
          This is how the military-industrial complex keeps Congress voting for war budgets.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmtMoney(totalSpending * 1e9)}</div>
            <div className="text-stone-400 text-sm mt-1">Total DoD Spending</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(totalJobs)}</div>
            <div className="text-stone-400 text-sm mt-1">Direct Defense Jobs</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(totalBases)}</div>
            <div className="text-stone-400 text-sm mt-1">Military Installations</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{states.length}</div>
            <div className="text-stone-400 text-sm mt-1">States & Territories</div>
          </div>
        </div>
        <ShareButtons title="State Military Footprint" />
      </div>

      {/* Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Biggest Spenders */}
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">💰 Biggest Defense Spenders</h2>
          <div className="space-y-3">
            {topSpenders.map((s, i) => {
              const pct = (s.dodSpending / maxSpend) * 100
              return (
                <Link key={s.slug} href={`/states/${s.slug}`} className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-stone-400 font-mono text-lg w-8">#{i + 1}</span>
                    <span className="font-medium text-stone-900 group-hover:text-red-700 transition-colors flex-1">
                      {s.state} <span className="text-stone-400 text-sm">{s.abbr}</span>
                    </span>
                    <span className="text-red-700 font-bold">{fmtMoney(s.dodSpending * 1e9)}</span>
                  </div>
                  <div className="ml-11 bg-stone-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-red-700 h-full rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Most Militarized */}
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🎯 Most Militarized (% of GSP)</h2>
          <p className="text-stone-500 text-sm mb-3">States most economically dependent on Pentagon spending.</p>
          <div className="space-y-3">
            {topMilitarized.map((s, i) => {
              const pct = (s.pctGsp / maxPct) * 100
              return (
                <Link key={s.slug} href={`/states/${s.slug}`} className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-stone-400 font-mono text-lg w-8">#{i + 1}</span>
                    <span className="font-medium text-stone-900 group-hover:text-red-700 transition-colors flex-1">
                      {s.state} <span className="text-stone-400 text-sm">{s.abbr}</span>
                    </span>
                    <span className="text-red-700 font-bold">{s.pctGsp}%</span>
                  </div>
                  <div className="ml-11 bg-stone-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-purple-700 h-full rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Most Bases */}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-10">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">🏗️ Most Military Installations</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {topBases.map((s, i) => (
            <Link key={s.slug} href={`/states/${s.slug}`} className="text-center hover:text-red-700 transition-colors">
              <div className="text-3xl font-bold text-stone-900 font-[family-name:var(--font-heading)]">{s.bases}</div>
              <div className="text-sm text-stone-500">{s.state}</div>
              <div className="text-xs text-stone-400">#{i + 1}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Context callout */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-10">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">🗺️ Why It&apos;s Not Even</h2>
        <p className="text-stone-400 leading-relaxed">
          Defense spending is concentrated by design. Powerful senators and representatives steer contracts
          to their districts, creating a feedback loop: defense jobs create voters who support defense spending,
          which creates more defense jobs. This is why the F-35 has parts manufactured in 45 states —
          it&apos;s not engineering efficiency, it&apos;s political insurance. Every congressional district with
          a defense plant has a representative who will vote against cutting the program.
        </p>
        <div className="flex gap-3 mt-4 flex-wrap">
          <Link href="/analysis/military-industrial-complex" className="text-red-400 hover:text-red-300 text-sm underline">Military-Industrial Complex →</Link>
          <Link href="/contractors" className="text-red-400 hover:text-red-300 text-sm underline">Defense Contractors →</Link>
          <Link href="/spending" className="text-red-400 hover:text-red-300 text-sm underline">Military Spending →</Link>
        </div>
      </div>

      {/* Full Table */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">All States & Territories</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-stone-200 text-stone-400 text-sm">
              <th className="py-3 pr-4">#</th>
              <th className="py-3 pr-4">State</th>
              <th className="py-3 pr-4 text-right">DoD Spending</th>
              <th className="py-3 pr-4 text-right">Jobs</th>
              <th className="py-3 pr-4 text-right">Bases</th>
              <th className="py-3 text-right">% of GSP</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((s, i) => (
              <tr key={s.slug} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
                <td className="py-3 pr-4 text-stone-500 text-sm">{i + 1}</td>
                <td className="py-3 pr-4">
                  <Link href={`/states/${s.slug}`} className="text-stone-900 hover:text-red-700 transition-colors font-medium">
                    {s.state}
                  </Link>
                  <span className="text-stone-500 text-sm ml-2">{s.abbr}</span>
                </td>
                <td className="py-3 pr-4 text-right text-red-700 font-medium">
                  {s.dodSpending ? fmtMoney(s.dodSpending * 1e9) : '—'}
                </td>
                <td className="py-3 pr-4 text-right text-stone-600">{s.directJobs ? fmt(s.directJobs) : '—'}</td>
                <td className="py-3 pr-4 text-right text-stone-600">{s.bases ? fmt(s.bases) : '—'}</td>
                <td className="py-3 text-right text-stone-600">{s.pctGsp ? `${s.pctGsp}%` : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 text-stone-500 text-sm">
        <p>Data sources: Department of Defense, Bureau of Economic Analysis, Defense Manpower Data Center. Spending figures in billions USD.</p>
      </div>

      <BackToTop />
    </main>
    </>  )
}
