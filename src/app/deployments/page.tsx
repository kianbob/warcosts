import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmt, fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import { TroopsChart } from '@/components/charts/SpendingCharts'

export const metadata: Metadata = {
  title: 'US Troop Deployments Worldwide',
  description: '173,000 US troops stationed in 80 countries. Where they are, how long they\'ve been there, and what it costs.',
}

export default function DeploymentsPage() {
  const presence = loadData('overseas-presence.json')
  const chartData = presence.topDeployments.map((d: any) => ({ country: d.country, troops: d.troops }))

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Troop Deployments' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Troop Deployments</h1>
      <p className="text-muted mb-6">{fmt(presence.totalOverseasTroops)} American service members stationed across {presence.totalCountries} countries.</p>

      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Troops by Country</h2>
        <TroopsChart data={chartData} />
      </div>

      <div className="space-y-4">
        {presence.topDeployments.map((d: any) => (
          <div key={d.country} className="bg-white rounded-lg border p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">{d.country}</h3>
                <p className="text-muted text-sm">Since {d.since} · {d.bases} bases</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">{fmt(d.troops)} troops</p>
                <p className="text-muted text-sm">{fmtMoney(d.annualCost)}/yr</p>
              </div>
            </div>
            <p className="text-muted text-sm mt-2">{d.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
