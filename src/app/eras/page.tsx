import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'US Wars by Era — From Revolution to War on Terror',
  description: 'American military conflicts organized by historical era. See how US war-making evolved from founding to global empire.',
}

export default function ErasPage() {
  const conflicts = loadData('conflicts.json')
  const eras: Record<string, any[]> = {}
  conflicts.forEach((c: any) => { if (!eras[c.era]) eras[c.era] = []; eras[c.era].push(c) })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'By Era' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Conflicts by Era</h1>

      {(() => { const stats = loadData('stats.json'); return (
        <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg">
          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
            <p className="text-2xl font-bold text-green-700 font-[family-name:var(--font-heading)]">{stats.victories}</p>
            <p className="text-xs text-stone-500">Victories</p>
          </div>
          <div className="bg-red-50 rounded-lg p-3 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{stats.defeats}</p>
            <p className="text-xs text-stone-500">Defeats</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-3 text-center border border-yellow-200">
            <p className="text-2xl font-bold text-yellow-700 font-[family-name:var(--font-heading)]">{stats.inconclusive}</p>
            <p className="text-xs text-stone-500">Inconclusive</p>
          </div>
        </div>
      )})()}

      <div className="space-y-8">
        {Object.entries(eras).map(([era, items]) => {
          const totalCost = items.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
          const totalDeaths = items.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)
          const civDeaths = items.reduce((s: number, c: any) => s + (c.civilianDeaths || 0), 0)
          const yearRange = `${Math.min(...items.map((c:any)=>c.startYear))}–${Math.max(...items.map((c:any)=>c.endYear))}`

          return (
            <div key={era} className="bg-white rounded-lg border shadow-sm p-6">
              <div className="flex flex-wrap items-baseline gap-4 mb-4">
                <Link href={`/eras/${slugify(era)}`} className="hover:underline">
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{era}</h2>
                </Link>
                <span className="text-muted text-sm">{yearRange} · {items.length} conflict{items.length !== 1 ? 's' : ''}</span>
                <Link href={`/eras/${slugify(era)}`} className="text-xs text-primary hover:underline ml-auto">View Era →</Link>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div><p className="text-xl font-bold text-primary">{fmtMoney(totalCost)}</p><p className="text-xs text-muted">Total Cost</p></div>
                <div><p className="text-xl font-bold text-primary">{fmt(totalDeaths)}</p><p className="text-xs text-muted">US Deaths</p></div>
                <div><p className="text-xl font-bold text-primary">{civDeaths > 0 ? fmt(civDeaths) : '—'}</p><p className="text-xs text-muted">Civilian Deaths</p></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((c: any) => (
                  <Link key={c.id} href={`/conflicts/${c.id}`} className="bg-stone-50 rounded p-3 hover:bg-stone-100 transition">
                    <p className="font-semibold">{c.shortName || c.name}</p>
                    <p className="text-xs text-muted">{c.startYear}–{c.endYear} · {fmtMoney(c.costInflationAdjusted)} · {c.outcome}</p>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
