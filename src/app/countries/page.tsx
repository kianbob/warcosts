import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Country Military Spending Profiles — 167 Countries | WarCosts',
  description: 'Military spending data for 167 countries. Rankings, trends, GDP percentages, and historical data from SIPRI.',
  alternates: { canonical: 'https://www.warcosts.org/countries' },
}

export default function CountriesPage() {
  const countries: any[] = loadData('country-profiles-index.json')

  // Filter to ranked countries for stats, keep all for table
  const ranked = countries.filter((c: any) => c.rank !== null)
  const worldTotal = ranked.reduce((s: number, c: any) => s + (c.amountBillions || 0), 0)
  const usEntry = countries.find((c: any) => c.slug === 'united-states')
  const usShare = usEntry ? ((usEntry.amountBillions / worldTotal) * 100).toFixed(1) : '—'

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Country Profiles' }]} />

        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Country Military Spending Profiles</h1>
        <p className="text-stone-400 mb-8 max-w-3xl">
          Military spending data for {countries.length} countries based on SIPRI data. Constant 2023 USD.
        </p>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-stone-800 rounded-xl border border-stone-700 p-4 text-center">
            <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{countries.length}</p>
            <p className="text-xs text-stone-400">Countries</p>
          </div>
          <div className="bg-stone-800 rounded-xl border border-stone-700 p-4 text-center">
            <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">${worldTotal.toFixed(0)}B</p>
            <p className="text-xs text-stone-400">World Total Spending</p>
          </div>
          <div className="bg-stone-800 rounded-xl border border-stone-700 p-4 text-center">
            <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{usShare}%</p>
            <p className="text-xs text-stone-400">US Share</p>
          </div>
          <div className="bg-stone-800 rounded-xl border border-stone-700 p-4 text-center">
            <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{ranked.length}</p>
            <p className="text-xs text-stone-400">Ranked Countries</p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-600 text-left text-stone-400">
                <th className="py-3 pr-4">Rank</th>
                <th className="py-3 pr-4">Country</th>
                <th className="py-3 pr-4 text-right">Spending</th>
                <th className="py-3 pr-4 text-right">% GDP</th>
                <th className="py-3 pr-4 text-right">% World</th>
                <th className="py-3 pr-4 text-right">10yr Trend</th>
                <th className="py-3 text-right">US Bases</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((c: any) => (
                <tr key={c.slug} className="border-b border-stone-800 hover:bg-slate-800">
                  <td className="py-3 pr-4 text-stone-400">{c.rank ?? '—'}</td>
                  <td className="py-3 pr-4">
                    <Link href={`/countries/${c.slug}`} className="font-medium text-red-400 hover:text-red-300 hover:underline">
                      {c.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-4 text-right text-stone-300">${c.amountBillions}B</td>
                  <td className="py-3 pr-4 text-right text-stone-300">{c.gdpPct ? `${c.gdpPct}%` : '—'}</td>
                  <td className="py-3 pr-4 text-right text-stone-300">{c.pctWorld ? `${c.pctWorld}%` : '—'}</td>
                  <td className="py-3 pr-4 text-right">
                    {c.trend10yr !== null && c.trend10yr !== undefined ? (
                      <span className={c.trend10yr >= 0 ? 'text-red-400' : 'text-green-400'}>
                        {c.trend10yr >= 0 ? '+' : ''}{c.trend10yr}%
                      </span>
                    ) : '—'}
                  </td>
                  <td className="py-3 text-right text-stone-300">{c.usBases || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <BackToTop />
      </div>
    </div>
  )
}
