import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'US Military Spending by Decade — 1940s to 2020s',
  description: 'Decade-by-decade breakdown of US military spending and active conflicts from the 1940s to today.',
}

const decades = ['1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s']

export default function DecadesPage() {
  const spending = loadData('military-spending.json')
  const conflicts = loadData('conflicts.json')

  const decadeData = decades.map(d => {
    const start = parseInt(d)
    const end = start + 9
    const ds = spending.filter((s: any) => s.year >= start && s.year <= end)
    const total = ds.reduce((s: number, r: any) => s + r.amount, 0)
    const active = conflicts.filter((c: any) => c.startYear <= end && c.endYear >= start)
    const deaths = active.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)
    return { decade: d, total, conflicts: active.length, deaths }
  })

  const maxSpending = Math.max(...decadeData.map(d => d.total))

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Decades' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Military Spending by Decade</h1>
      <p className="text-stone-500 mb-8 max-w-3xl">A visual timeline of American military spending and conflicts from the 1940s to today.</p>

      <div className="space-y-4">
        {decadeData.map(d => (
          <Link key={d.decade} href={`/decades/${d.decade}`} className="block bg-white rounded-lg border p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{d.decade}</h2>
              <div className="flex gap-6 text-sm">
                <span><strong className="text-primary">${d.total.toFixed(0)}B</strong> spent</span>
                <span><strong>{d.conflicts}</strong> conflicts</span>
                <span><strong>{fmt(d.deaths)}</strong> deaths</span>
              </div>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-4">
              <div className="bg-primary h-4 rounded-full transition-all" style={{ width: `${(d.total / maxSpending) * 100}%` }} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
