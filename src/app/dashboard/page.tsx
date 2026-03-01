import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { SpendingAreaChart, CostByConflictChart, DeathsByConflictChart, BasesChart } from '@/components/charts/SpendingCharts'

export const metadata: Metadata = {
  title: 'Dashboard — US War Data Overview',
  description: 'Visual overview of US military data: spending over time, casualties by conflict, costs, and overseas bases.',
}

export default function DashboardPage() {
  const stats = loadData('stats.json')
  const spending = loadData('military-spending.json')
  const conflicts = loadData('conflicts.json')
  const presence = loadData('overseas-presence.json')

  const costData = conflicts.sort((a: any, b: any) => b.costInflationAdjusted - a.costInflationAdjusted).slice(0, 12).map((c: any) => ({ name: c.shortName || c.name, cost: c.costInflationAdjusted }))
  const deathData = conflicts.filter((c: any) => (c.usCasualties?.deaths || 0) > 100).sort((a: any, b: any) => b.usCasualties.deaths - a.usCasualties.deaths).map((c: any) => ({ name: c.shortName || c.name, usDeaths: c.usCasualties.deaths, civilianDeaths: c.civilianDeaths || 0 }))
  const basesData = presence.topDeployments.map((d: any) => ({ country: d.country, bases: d.bases }))

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Dashboard' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-2">Dashboard</h1>
      <p className="text-muted mb-4 max-w-3xl">A high-level overview of America&apos;s military footprint — spending, casualties, overseas presence, and the true cost of empire.</p>
      <ShareButtons title="Dashboard — WarCosts" />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[
          { val: fmtMoney(stats.totalCostInflationAdjusted), label: 'Total Cost' },
          { val: fmt(stats.totalUSDeaths), label: 'US Deaths' },
          { val: `${(stats.totalCivilianDeaths/1e6).toFixed(1)}M+`, label: 'Civilian Deaths' },
          { val: fmt(stats.overseasBases), label: 'Overseas Bases' },
          { val: fmtMoney(stats.currentAnnualBudget), label: 'Annual Budget' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-4 shadow-sm border text-center">
            <p className="text-xl md:text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Military Spending (Billions $)</h2>
          <SpendingAreaChart data={spending} />
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Overseas Bases by Country</h2>
          <BasesChart data={basesData} />
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Cost by Conflict</h2>
          <CostByConflictChart data={costData} />
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Deaths by Conflict</h2>
          <DeathsByConflictChart data={deathData} />
        </div>
      </div>
    </div>
  )
}
