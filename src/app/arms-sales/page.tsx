import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { ArmsSalesChart } from '@/components/charts/SpendingCharts'

export const metadata: Metadata = {
  title: 'US Arms Sales — Who Buys American Weapons',
  description: '$238 billion per year in arms sales. The US is the world\'s largest weapons dealer. See who buys and where they end up.',
}

export default function ArmsSalesPage() {
  const arms = loadData('arms-sales.json')
  const chartData = arms.topBuyers.map((b: any) => ({ country: b.country, amount: b.total / 1e9 }))

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Arms Sales' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Arms Sales</h1>
      <p className="text-muted mb-6">The United States is the world&apos;s largest arms dealer at {fmtMoney(arms.totalAnnual)} per year.</p>
      <ShareButtons title="US Arms Sales" />

      <div className="bg-white rounded-lg p-6 shadow-sm border my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Top Buyers</h2>
        <ArmsSalesChart data={chartData} />
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm bg-white rounded-lg shadow-sm border">
          <thead>
            <tr className="border-b-2 border-stone-300 text-left">
              <th className="py-3 px-4">Country</th>
              <th className="py-3 px-4 text-right">Total</th>
              <th className="py-3 px-4">Since</th>
              <th className="py-3 px-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            {arms.topBuyers.map((b: any) => (
              <tr key={b.country} className="border-b border-stone-200">
                <td className="py-3 px-4 font-semibold">{b.country}</td>
                <td className="py-3 px-4 text-right font-semibold text-primary">{fmtMoney(b.total)}</td>
                <td className="py-3 px-4 text-muted">{b.since}</td>
                <td className="py-3 px-4 text-muted text-xs">{b.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
