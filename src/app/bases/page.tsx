import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { BasesChart, TroopsChart } from '@/components/charts/SpendingCharts'

export const metadata: Metadata = {
  title: 'US Overseas Military Bases — 750 Bases in 80 Countries',
  description: 'The US maintains 750 military bases in 80 countries with 173,000 troops deployed overseas. Annual cost: $55 billion.',
}

export default function BasesPage() {
  const presence = loadData('overseas-presence.json')
  const basesData = presence.topDeployments.map((d: any) => ({ country: d.country, bases: d.bases }))
  const troopsData = presence.topDeployments.map((d: any) => ({ country: d.country, troops: d.troops }))

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Overseas Bases' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Overseas Military Bases</h1>
      <p className="text-muted mb-6">The United States maintains {fmt(presence.totalBases)} military bases in {presence.totalCountries} countries — more than any empire in history.</p>
      <ShareButtons title="US Overseas Military Bases" />

      <div className="grid md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmt(presence.totalBases), label: 'Overseas Bases' },
          { val: presence.totalCountries, label: 'Countries' },
          { val: `${fmt(presence.totalOverseasTroops)}`, label: 'Troops Deployed' },
          { val: fmtMoney(presence.annualBaseCost), label: 'Annual Cost' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Bases by Country</h2>
          <BasesChart data={basesData} />
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Troops by Country</h2>
          <TroopsChart data={troopsData} />
        </div>
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm bg-white rounded-lg shadow-sm border">
          <thead>
            <tr className="border-b-2 border-stone-300 text-left">
              <th className="py-3 px-4">Country</th>
              <th className="py-3 px-4 text-right">Troops</th>
              <th className="py-3 px-4 text-right">Bases</th>
              <th className="py-3 px-4">Since</th>
              <th className="py-3 px-4 text-right">Annual Cost</th>
              <th className="py-3 px-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            {presence.topDeployments.map((d: any) => (
              <tr key={d.country} className="border-b border-stone-200">
                <td className="py-3 px-4 font-semibold">{d.country}</td>
                <td className="py-3 px-4 text-right">{fmt(d.troops)}</td>
                <td className="py-3 px-4 text-right">{d.bases}</td>
                <td className="py-3 px-4 text-muted">{d.since}</td>
                <td className="py-3 px-4 text-right text-primary font-semibold">{fmtMoney(d.annualCost)}</td>
                <td className="py-3 px-4 text-muted text-xs">{d.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
