import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import Link from 'next/link'
import { DeathsByConflictChart, CostByConflictChart } from '@/components/charts/SpendingCharts'

export const metadata: Metadata = {
  title: 'US War Casualties — Deaths by Conflict',
  description: 'Over 1 million Americans and 5.2 million civilians killed in US wars. Deaths and casualties data for every conflict since 1775.',
}

export default function CasualtiesPage() {
  const conflicts = loadData('conflicts.json')
  const stats = loadData('stats.json')

  const deathData = conflicts
    .filter((c: any) => (c.usCasualties?.deaths || 0) + (c.civilianDeaths || 0) > 0)
    .sort((a: any, b: any) => (b.usCasualties?.deaths || 0) - (a.usCasualties?.deaths || 0))
    .map((c: any) => ({
      name: c.shortName || c.name,
      usDeaths: c.usCasualties?.deaths || 0,
      civilianDeaths: c.civilianDeaths || 0,
    }))

  const costData = conflicts
    .sort((a: any, b: any) => b.costInflationAdjusted - a.costInflationAdjusted)
    .slice(0, 15)
    .map((c: any) => ({
      name: c.shortName || c.name,
      cost: c.costInflationAdjusted,
    }))

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Casualty Data' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">The Human Cost of War</h1>
      <p className="text-muted mb-6">Every number on this page represents a human life.</p>
      <ShareButtons title="US War Casualties" />

      <div className="grid md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(stats.totalUSDeaths)}</p>
          <p className="text-muted text-sm">Americans Killed</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{(stats.totalCivilianDeaths / 1e6).toFixed(1)}M+</p>
          <p className="text-muted text-sm">Civilians Killed</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(stats.totalCostInflationAdjusted)}</p>
          <p className="text-muted text-sm">Total Cost</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">5:1</p>
          <p className="text-muted text-sm">Civilian to US Death Ratio</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Deaths by Conflict</h2>
        <DeathsByConflictChart data={deathData} />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Cost by Conflict (2023 Dollars)</h2>
        <CostByConflictChart data={costData} />
      </div>

      <div className="bg-stone-900 text-white rounded-xl p-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;War is a racket. It always has been. It is possibly the oldest, easily the most profitable, surely the most vicious.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Major General Smedley Butler, 1935</p>
      </div>

      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/human-cost" className="text-red-800 hover:underline">→ The Human Cost of War</Link></li>
          <li><Link href="/analysis/the-aftermath" className="text-red-800 hover:underline">→ The Aftermath — long-term costs</Link></li>
          <li><Link href="/veteran-suicide" className="text-red-800 hover:underline">→ Veteran Suicide — 17 per day</Link></li>
        </ul>
      </div>
    </div>
  )
}
