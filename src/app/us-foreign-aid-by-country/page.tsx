import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Foreign Aid by Country — $68 Billion in Annual Aid',
  description:
    'The United States provides $68 billion in annual foreign aid across 200+ countries. Israel is the largest cumulative recipient. See the full breakdown by country: military vs economic aid, top 10 recipients, and where your tax dollars go.',
  keywords: [
    'US foreign aid by country',
    'foreign aid spending',
    'US aid to Israel',
    'military aid by country',
    'economic aid',
    'USAID budget',
  ],
  openGraph: {
    title: 'US Foreign Aid by Country — Who Gets What',
    description: '$68B in annual aid. Israel: $3.8B/yr military. Ukraine: $8B in 2024. Full country-by-country data.',
    url: 'https://www.warcosts.org/us-foreign-aid-by-country',
    type: 'article',
  },
}

export default function USForeignAidByCountry() {
  const aidCountries = loadData('aid-countries-index.json') as {
    country: string; slug: string; region: string; totalSince2001: number;
    annual2024: number; militaryPct: number; population: number
  }[]

  const top10 = aidCountries.slice(0, 10)
  const totalAnnual2024 = aidCountries.reduce((s, c) => s + c.annual2024, 0)
  const totalSince2001 = aidCountries.reduce((s, c) => s + c.totalSince2001, 0)

  return (
    <div className="bg-stone-900 min-h-screen text-stone-300 -mt-4 -mx-4 px-4 pt-4">
      <div className="max-w-5xl mx-auto py-8">
        <Breadcrumbs items={[{ label: 'Foreign Aid', href: '/foreign-aid' }, { label: 'US Foreign Aid by Country' }]} />

        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-4">
          US Foreign Aid by Country
        </h1>

        <p className="text-lg text-stone-300 max-w-3xl mb-4">
          The United States is the world&apos;s largest provider of foreign aid, distributing approximately{' '}
          <strong className="text-red-400">{fmtMoney(totalAnnual2024 * 1e6)}</strong> across 200+ countries in 2024.
          Since 2001, the US has provided over <strong className="text-white">{fmtMoney(totalSince2001 * 1e6)}</strong> in
          total aid. But where does the money actually go — and how much is really &ldquo;aid&rdquo; versus subsidies
          for the US defense industry?
        </p>

        <ShareButtons title="US Foreign Aid by Country — $68 Billion in Annual Aid" />

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          {[
            { label: 'Annual Foreign Aid (2024)', value: fmtMoney(totalAnnual2024 * 1e6) },
            { label: 'Total Since 2001', value: fmtMoney(totalSince2001 * 1e6) },
            { label: '% That Is Military', value: '~37%' },
            { label: 'Countries Receiving Aid', value: '200+' },
          ].map((s) => (
            <div key={s.label} className="bg-stone-800 rounded-lg p-5 text-center border border-stone-700">
              <p className="text-2xl md:text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{s.value}</p>
              <p className="text-stone-400 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Military vs Economic explainer */}
        <div className="bg-stone-800 border border-red-600/30 rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">
            Military Aid vs. Economic Aid
          </h2>
          <p className="text-stone-300 mb-3">
            A significant portion of US &ldquo;foreign aid&rdquo; is actually <strong className="text-white">military
            assistance</strong> — weapons, training, and defense equipment provided to allied governments. This money
            often flows directly back to US defense contractors. For example, Israel&apos;s $3.8 billion in annual
            military aid must be spent on American-made weapons — it&apos;s effectively a subsidy to Lockheed Martin,
            Boeing, and RTX routed through Tel Aviv.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-stone-700/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">~37%</p>
              <p className="text-stone-400 text-xs">Military / Security Aid</p>
              <p className="text-stone-500 text-xs mt-1">Weapons, training, equipment, counter-terrorism</p>
            </div>
            <div className="bg-stone-700/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-stone-300 font-[family-name:var(--font-heading)]">~63%</p>
              <p className="text-stone-400 text-xs">Economic / Development Aid</p>
              <p className="text-stone-500 text-xs mt-1">Health, education, governance, humanitarian relief</p>
            </div>
          </div>
        </div>

        {/* Top 10 recipients */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">
          Top 10 Recipients of US Foreign Aid
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-stone-700 rounded-lg overflow-hidden">
            <thead className="bg-stone-800">
              <tr>
                <th className="text-left p-3 text-stone-400 font-[family-name:var(--font-heading)]">#</th>
                <th className="text-left p-3 text-stone-400 font-[family-name:var(--font-heading)]">Country</th>
                <th className="text-right p-3 text-stone-400 font-[family-name:var(--font-heading)]">2024 Aid</th>
                <th className="text-right p-3 text-stone-400 font-[family-name:var(--font-heading)]">Total Since 2001</th>
                <th className="text-right p-3 text-stone-400 font-[family-name:var(--font-heading)]">% Military</th>
                <th className="text-left p-3 text-stone-400 font-[family-name:var(--font-heading)]">Region</th>
              </tr>
            </thead>
            <tbody>
              {top10.map((c, i) => (
                <tr key={c.slug} className="border-t border-stone-700/50">
                  <td className="p-3 text-stone-500 font-mono">{i + 1}</td>
                  <td className="p-3">
                    <Link href={`/foreign-aid/countries/${c.slug}`} className="text-white font-medium hover:text-red-400">
                      {c.country}
                    </Link>
                  </td>
                  <td className="p-3 text-red-400 font-semibold text-right">{fmtMoney(c.annual2024 * 1e6)}</td>
                  <td className="p-3 text-stone-300 text-right">{fmtMoney(c.totalSince2001 * 1e6)}</td>
                  <td className="p-3 text-right">
                    <span className={c.militaryPct >= 70 ? 'text-red-400 font-semibold' : 'text-stone-400'}>
                      {c.militaryPct}%
                    </span>
                  </td>
                  <td className="p-3 text-stone-500 text-xs">{c.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-stone-500 text-xs mt-2">
            Sources: USAID, State Department, SIPRI, Congressional Research Service. Figures in millions USD.
          </p>
        </div>

        {/* Bar chart visual for top 10 */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">
          Cumulative Aid Since 2001
        </h2>
        <div className="space-y-3 mb-8">
          {top10.map((c, i) => {
            const maxTotal = top10[0].totalSince2001
            const widthPct = Math.max((c.totalSince2001 / maxTotal) * 100, 2)
            return (
              <div key={c.slug}>
                <div className="flex justify-between text-sm mb-1">
                  <span className={i === 0 ? 'font-bold text-white' : 'text-stone-300'}>{c.country}</span>
                  <span className="font-medium text-stone-300">{fmtMoney(c.totalSince2001 * 1e6)}</span>
                </div>
                <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${c.militaryPct >= 70 ? 'bg-red-600' : 'bg-red-400/60'}`}
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
              </div>
            )
          })}
          <p className="text-stone-500 text-xs mt-2">Red bars = predominantly military aid (70%+ military). Lighter bars = mixed or mostly economic.</p>
        </div>

        {/* Context */}
        <div className="bg-stone-800 border border-stone-700 rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">
            How Big Is $68 Billion in Context?
          </h2>
          <ul className="space-y-2 text-stone-300 text-sm">
            <li>• Foreign aid is approximately <strong className="text-white">1% of the federal budget</strong> — yet polls show Americans think it&apos;s 25%</li>
            <li>• The entire foreign aid budget is less than what the Pentagon spends in <strong className="text-white">3 weeks</strong></li>
            <li>• <strong className="text-red-400">Lockheed Martin alone</strong> received more in DoD contracts ($48B in FY2024) than the top 5 aid recipients combined</li>
            <li>• The US ranks <strong className="text-white">last among major developed nations</strong> in aid as a percentage of GDP (0.18% vs the UN target of 0.7%)</li>
          </ul>
        </div>

        {/* FAQ */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 mb-8">
          <div className="bg-stone-800 rounded-lg p-5 border border-stone-700">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-white mb-2">
              Which country receives the most US foreign aid?
            </h3>
            <p className="text-stone-300 text-sm">
              Cumulatively since 2001, <strong className="text-white">Israel</strong> has received the most US foreign aid
              at over $158 billion — virtually all of it military. In 2024, <strong className="text-white">Ukraine</strong> received
              the most at approximately $8 billion due to the ongoing war with Russia. Israel receives a guaranteed $3.8
              billion annually under a 10-year agreement signed in 2016.
            </p>
          </div>
          <div className="bg-stone-800 rounded-lg p-5 border border-stone-700">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-white mb-2">
              Does US foreign aid actually help?
            </h3>
            <p className="text-stone-300 text-sm">
              It depends on the type. Health programs like PEPFAR (HIV/AIDS) have saved an estimated 25 million lives
              and are widely considered successful. Economic development aid has a mixed record. Military aid often
              props up authoritarian regimes — Egypt receives $1.3 billion annually despite systematic human rights
              abuses. The money frequently benefits US contractors more than the recipient population.
            </p>
          </div>
        </div>

        {/* Related links */}
        <div className="bg-stone-800 rounded-lg p-6 border border-stone-700 mt-12">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Explore More</h3>
          <ul className="space-y-2">
            <li><Link href="/foreign-aid" className="text-red-400 hover:underline">→ Foreign Aid Overview — Full Analysis</Link></li>
            <li><Link href="/foreign-aid/countries" className="text-red-400 hover:underline">→ All Countries — Complete Aid Database</Link></li>
            <li><Link href="/spending" className="text-red-400 hover:underline">→ US Military Spending Over Time</Link></li>
            <li><Link href="/contractors" className="text-red-400 hover:underline">→ Defense Contractors — Who Profits from Military Aid</Link></li>
            <li><Link href="/opportunity-cost" className="text-red-400 hover:underline">→ What Foreign Aid Could Buy at Home</Link></li>
          </ul>
        </div>

        <BackToTop />
      </div>
    </div>
  )
}
