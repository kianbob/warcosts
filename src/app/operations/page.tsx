import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Named Military Operations — US Wars & Conflicts',
  description: 'Explore 14 named US military operations from WWII to the War on ISIS. Costs, casualties, troop deployments, and outcomes for every major operation.',
  openGraph: {
    title: 'Named Military Operations — US Wars & Conflicts',
    description: '14 named US military operations from D-Day to the War on ISIS.',
  },
}

interface Operation {
  name: string
  slug: string
  conflict: string
  year: number
  duration: string
  cost: number
  troops: number
  casualties: number
  civilianDeaths: number
  description: string
  outcome: string
  keyFact: string
}

export default function OperationsPage() {
  const operations: Operation[] = loadData('operations.json')
  const sorted = [...operations].sort((a, b) => a.year - b.year)
  const totalCost = operations.reduce((s, o) => s + o.cost * 1_000_000, 0)
  const totalCasualties = operations.reduce((s, o) => s + o.casualties, 0)
  const totalCivilian = operations.reduce((s, o) => s + o.civilianDeaths, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Named Operations' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Named Military Operations</h1>
      <p className="text-stone-300 mb-6">14 named US military operations spanning 80 years of American warfare — from the beaches of Normandy to the deserts of Iraq.</p>
      <ShareButtons title="Named Military Operations — US Wars & Conflicts" />

      {/* Summary stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-stone-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{operations.length}</div>
          <div className="text-stone-400 text-sm">Operations</div>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{fmtMoney(totalCost)}</div>
          <div className="text-stone-400 text-sm">Total Cost</div>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{fmt(totalCasualties)}</div>
          <div className="text-stone-400 text-sm">US Casualties</div>
        </div>
        <div className="bg-stone-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{fmt(totalCivilian)}</div>
          <div className="text-stone-400 text-sm">Civilian Deaths</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-red-600 ml-4 md:ml-8 space-y-8 mt-12">
        {sorted.map((op) => (
          <div key={op.slug} className="relative pl-8 md:pl-12">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-red-600 border-2 border-stone-900" />

            <Link href={`/operations/${op.slug}`} className="block group">
              <div className="bg-stone-800 rounded-lg p-5 hover:bg-stone-700 transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-red-400 font-bold text-lg">{op.year}</span>
                  <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold group-hover:text-red-400 transition-colors">{op.name}</h2>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-stone-400 mb-3">
                  <span>⏱ {op.duration}</span>
                  <span>💰 {fmtMoney(op.cost * 1_000_000)}</span>
                  <span>⚔️ {fmt(op.casualties)} US casualties</span>
                  {op.troops > 0 && <span>🪖 {fmt(op.troops)} troops</span>}
                </div>
                <p className="text-stone-300 text-sm line-clamp-2">{op.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <BackToTop />
    </div>
  )
}
