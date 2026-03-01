import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { ForeignAidChart } from '@/components/charts/SpendingCharts'

export const metadata: Metadata = {
  title: 'US Foreign Aid — Where Your Tax Dollars Go',
  description: '$68 billion per year in foreign aid. $850 billion since 2001. See where US foreign aid goes and who receives the most.',
}

export default function ForeignAidPage() {
  const aid = loadData('foreign-aid.json')
  const chartData = aid.topRecipients.map((r: any) => ({
    country: r.country,
    amount: r.totalSince2001 / 1e9,
  }))

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Foreign Aid' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Foreign Aid</h1>
      <p className="text-muted mb-6 max-w-3xl">
        The United States sends {fmtMoney(aid.totalAnnual)} per year in foreign aid — {fmtMoney(aid.totalSince2001)} since 2001.
      </p>
      <ShareButtons title="US Foreign Aid" />

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(aid.totalAnnual)}</p>
          <p className="text-muted text-sm">Annual Foreign Aid</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(aid.totalSince2001)}</p>
          <p className="text-muted text-sm">Total Since 2001</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Top Recipients (Since 2001)</h2>
        <ForeignAidChart data={chartData} />
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm bg-white rounded-lg shadow-sm border">
          <thead>
            <tr className="border-b-2 border-stone-300 text-left">
              <th className="py-3 px-4">Country</th>
              <th className="py-3 px-4 text-right">Total Since 2001</th>
              <th className="py-3 px-4 text-right">Annual (2023)</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            {aid.topRecipients.map((r: any) => (
              <tr key={r.country} className="border-b border-stone-200">
                <td className="py-3 px-4 font-semibold">{r.country}</td>
                <td className="py-3 px-4 text-right font-semibold text-primary">{fmtMoney(r.totalSince2001)}</td>
                <td className="py-3 px-4 text-right">{fmtMoney(r.annual2023)}</td>
                <td className="py-3 px-4 text-muted">{r.type}</td>
                <td className="py-3 px-4 text-muted text-xs">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
