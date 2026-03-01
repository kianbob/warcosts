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
  state: string
  abbr: string
  slug: string
  bases: number
  dodSpending: number
  directJobs: number
  pctGsp: number
}

export default function StatesIndexPage() {
  const states = loadData('state-military-index.json') as StateEntry[]
  const sorted = [...states].sort((a, b) => (b.dodSpending || 0) - (a.dodSpending || 0))

  const totalSpending = states.reduce((s, x) => s + (x.dodSpending || 0), 0)
  const totalJobs = states.reduce((s, x) => s + (x.directJobs || 0), 0)
  const totalBases = states.reduce((s, x) => s + (x.bases || 0), 0)

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'State Military Footprint' }]} />

      <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mt-4 mb-2">
        State Military Footprint
      </h1>
      <p className="text-stone-400 text-lg mb-8">
        How the Department of Defense shapes the economy of every US state and territory.
      </p>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-red-400">{fmtMoney(totalSpending * 1e9)}</div>
          <div className="text-stone-400 text-sm mt-1">Total DoD Spending</div>
        </div>
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-red-400">{fmt(totalJobs)}</div>
          <div className="text-stone-400 text-sm mt-1">Direct Defense Jobs</div>
        </div>
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-red-400">{fmt(totalBases)}</div>
          <div className="text-stone-400 text-sm mt-1">Military Installations</div>
        </div>
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-red-400">{states.length}</div>
          <div className="text-stone-400 text-sm mt-1">States & Territories</div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-stone-700 text-stone-400 text-sm">
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
              <tr key={s.slug} className="border-b border-stone-800 hover:bg-stone-800/50 transition-colors">
                <td className="py-3 pr-4 text-stone-500 text-sm">{i + 1}</td>
                <td className="py-3 pr-4">
                  <Link href={`/states/${s.slug}`} className="text-white hover:text-red-400 transition-colors font-medium">
                    {s.state}
                  </Link>
                  <span className="text-stone-500 text-sm ml-2">{s.abbr}</span>
                </td>
                <td className="py-3 pr-4 text-right text-red-400 font-medium">
                  {s.dodSpending ? fmtMoney(s.dodSpending * 1e9) : '—'}
                </td>
                <td className="py-3 pr-4 text-right text-stone-300">{s.directJobs ? fmt(s.directJobs) : '—'}</td>
                <td className="py-3 pr-4 text-right text-stone-300">{s.bases ? fmt(s.bases) : '—'}</td>
                <td className="py-3 text-right text-stone-300">{s.pctGsp ? `${s.pctGsp}%` : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 text-stone-500 text-sm">
        <p>Data sources: Department of Defense, Bureau of Economic Analysis, Defense Manpower Data Center. Spending figures in billions USD.</p>
      </div>

      <ShareButtons title="State Military Footprint" />
      <BackToTop />
    </main>
  )
}
