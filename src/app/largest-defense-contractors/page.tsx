import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Largest Defense Contractors — Top 10 US Military Companies by Revenue',
  description:
    'The 10 largest US defense contractors received over $200 billion in Pentagon contracts in 2024 alone. Lockheed Martin, Boeing, RTX, General Dynamics, Northrop Grumman — full data on revenue, contracts, stock performance since 9/11, and the revolving door.',
  keywords: [
    'largest defense contractors',
    'top defense companies',
    'military contractors',
    'Lockheed Martin contracts',
    'defense industry',
    'military industrial complex',
    'Pentagon contractors',
  ],
  openGraph: {
    title: 'Largest Defense Contractors — Who Profits from War',
    description: 'Lockheed Martin alone received $48B in 2024. The top 5 got more than the combined budgets of Education, EPA, and NASA.',
    url: 'https://www.warcosts.org/largest-defense-contractors',
    type: 'article',
  },
}

const stockPerformance = [
  { name: 'Lockheed Martin', ticker: 'LMT', preSept11: 38, current: 480, returnPct: 1163 },
  { name: 'Northrop Grumman', ticker: 'NOC', preSept11: 45, current: 520, returnPct: 1056 },
  { name: 'General Dynamics', ticker: 'GD', preSept11: 35, current: 295, returnPct: 743 },
  { name: 'RTX (Raytheon)', ticker: 'RTX', preSept11: 28, current: 120, returnPct: 329 },
  { name: 'Boeing', ticker: 'BA', preSept11: 42, current: 175, returnPct: 317 },
  { name: 'S&P 500 (comparison)', ticker: 'SPY', preSept11: 115, current: 590, returnPct: 413 },
]

const revolvingDoor = [
  { stat: '500+', desc: 'Former senior DOD officials identified working for defense contractors (POGO)' },
  { stat: '67%', desc: 'Of defense lobbyists are former DOD or congressional staff' },
  { stat: '$131M', desc: 'Spent on lobbying by defense industry in 2022 alone' },
  { stat: '395', desc: 'Lobbyists employed by Lockheed Martin in a single year' },
  { stat: '$62M', desc: 'In campaign contributions from defense industry in 2023' },
  { stat: '45 states', desc: 'Where F-35 parts are manufactured — making it politically untouchable' },
]

export default function LargestDefenseContractors() {
  const contractors = loadData('contractors.json') as {
    name: string; slug: string; amount: number; rank: number;
    yearly: Record<string, number>
  }[]

  const top10 = contractors.slice(0, 10)
  const totalTop10 = top10.reduce((s, c) => s + c.amount, 0)

  return (
    <div className="bg-stone-900 min-h-screen text-stone-600 -mt-4 -mx-4 px-4 pt-4">
      <div className="max-w-5xl mx-auto py-8">
        <Breadcrumbs items={[{ label: 'Contractors', href: '/contractors' }, { label: 'Largest Defense Contractors' }]} />

        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          Largest Defense Contractors
        </h1>

        <p className="text-lg text-stone-600 max-w-3xl mb-4">
          The top 10 US defense contractors received over <strong className="text-red-700">{fmtMoney(totalTop10)}</strong> in
          Pentagon contracts in FY2024 alone. <strong className="text-stone-900">Lockheed Martin</strong> — the world&apos;s
          largest arms manufacturer — received {fmtMoney(top10[0]?.amount || 0)}, more than the entire budget of the
          State Department. These companies spend hundreds of millions lobbying Congress to keep the money flowing,
          while 500+ former Pentagon officials work for them through the revolving door.
        </p>

        <ShareButtons title="Largest Defense Contractors — Top 10 US Military Companies" />

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          {[
            { label: 'Top 10 Total (FY2024)', value: fmtMoney(totalTop10) },
            { label: '#1 Lockheed Martin', value: fmtMoney(top10[0]?.amount || 0) },
            { label: 'Annual Lobbying Spend', value: '$131M' },
            { label: 'Revolving Door Officials', value: '500+' },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-stone-200 rounded-lg shadow-sm p-5 text-center border border-stone-200">
              <p className="text-2xl md:text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.value}</p>
              <p className="text-stone-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Top 10 table */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mt-12 mb-6">
          Top 10 Defense Contractors by Pentagon Contracts (FY2024)
        </h2>
        <div className="space-y-3 mb-8">
          {top10.map((c, i) => {
            const maxAmount = top10[0].amount
            const widthPct = Math.max((c.amount / maxAmount) * 100, 3)
            return (
              <div key={c.slug}>
                <div className="flex justify-between text-sm mb-1">
                  <Link href={`/contractors/${c.slug}`} className="hover:text-red-700">
                    <span className="text-stone-500 font-mono mr-2">#{i + 1}</span>
                    <span className={i < 3 ? 'font-bold text-stone-900' : 'text-stone-600'}>{c.name}</span>
                  </Link>
                  <span className="font-medium text-red-700">{fmtMoney(c.amount)}</span>
                </div>
                <div className="h-4 bg-stone-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${i < 3 ? 'bg-red-600' : 'bg-red-400/60'}`}
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* 5-year trend table */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mt-12 mb-6">
          Contract Awards Over 5 Years
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-white border border-stone-200">
              <tr>
                <th className="text-left p-3 text-stone-500 font-[family-name:var(--font-heading)]">Contractor</th>
                {['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'].map((fy) => (
                  <th key={fy} className="text-right p-3 text-stone-500 font-[family-name:var(--font-heading)]">{fy}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {top10.slice(0, 5).map((c) => (
                <tr key={c.slug} className="border-t border-stone-200/50">
                  <td className="p-3 font-medium text-stone-900">{c.name}</td>
                  {['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'].map((fy) => (
                    <td key={fy} className="p-3 text-red-700 text-right text-xs">
                      {c.yearly[fy] ? fmtMoney(c.yearly[fy]) : '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stock performance since 9/11 */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mt-12 mb-6">
          Stock Performance Since 9/11
        </h2>
        <p className="text-stone-600 mb-6 max-w-3xl">
          The War on Terror was the greatest wealth-creation event in the history of the defense industry.
          Since September 10, 2001, defense stocks have dramatically outperformed the market. Lockheed Martin
          shareholders have seen <strong className="text-red-700">1,163% returns</strong> — nearly 3× the S&amp;P 500.
          Every war, every conflict, every crisis sends these stocks higher.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-white border border-stone-200">
              <tr>
                <th className="text-left p-3 text-stone-500 font-[family-name:var(--font-heading)]">Company</th>
                <th className="text-left p-3 text-stone-500 font-[family-name:var(--font-heading)]">Ticker</th>
                <th className="text-right p-3 text-stone-500 font-[family-name:var(--font-heading)]">Sep 10, 2001</th>
                <th className="text-right p-3 text-stone-500 font-[family-name:var(--font-heading)]">Today (approx)</th>
                <th className="text-right p-3 text-stone-500 font-[family-name:var(--font-heading)]">Return</th>
              </tr>
            </thead>
            <tbody>
              {stockPerformance.map((s, i) => (
                <tr key={s.ticker} className={`border-t border-stone-200/50 ${i === stockPerformance.length - 1 ? 'bg-slate-800' : ''}`}>
                  <td className="p-3 font-medium text-stone-900">{s.name}</td>
                  <td className="p-3 text-stone-500">{s.ticker}</td>
                  <td className="p-3 text-stone-500 text-right">${s.preSept11}</td>
                  <td className="p-3 text-stone-900 text-right">${s.current}</td>
                  <td className={`p-3 text-right font-bold ${s.returnPct > 500 ? 'text-red-700' : 'text-stone-600'}`}>
                    +{fmt(s.returnPct)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-stone-500 text-xs mt-2">
            Approximate values. Adjusted for splits. Source: market data. War is profitable — for shareholders.
          </p>
        </div>

        {/* Revolving door */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mt-12 mb-6">
          The Revolving Door
        </h2>
        <p className="text-stone-600 mb-6 max-w-3xl">
          The defense industry&apos;s power comes not just from lobbying dollars, but from the &ldquo;revolving
          door&rdquo; — the constant flow of personnel between the Pentagon, Congress, and defense contractors.
          Generals retire on Friday and start at Lockheed on Monday. Congressional staffers who write defense
          bills become lobbyists for the companies those bills fund. The people who decide how to spend the
          money are the same people who profit from it.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {revolvingDoor.map((r) => (
            <div key={r.stat} className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 border border-stone-200 text-center">
              <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{r.stat}</p>
              <p className="text-stone-500 text-xs mt-1">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Eisenhower quote */}
        <div className="bg-white border border-stone-200 border border-red-600/30 rounded-xl p-6 my-8">
          <blockquote className="text-stone-600 italic text-lg">
            &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence,
            whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise
            of misplaced power exists and will persist.&rdquo;
          </blockquote>
          <p className="text-stone-500 text-sm mt-3">— President Dwight D. Eisenhower, Farewell Address, January 17, 1961</p>
        </div>

        {/* FAQ */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mt-12 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 mb-8">
          <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-5 border border-stone-200">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-stone-900 mb-2">
              Who is the biggest defense contractor?
            </h3>
            <p className="text-stone-600 text-sm">
              <strong className="text-stone-900">Lockheed Martin</strong> is the world&apos;s largest defense contractor by
              revenue, receiving {fmtMoney(top10[0]?.amount || 0)} in Pentagon contracts in FY2024. They manufacture
              the F-35 fighter jet (lifetime cost: $1.7 trillion), Black Hawk helicopters, Aegis combat systems, and
              Trident missiles. Their parts are manufactured across 45 states, making the F-35 program virtually
              impossible for Congress to cancel.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-5 border border-stone-200">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-stone-900 mb-2">
              How much do defense contractors spend on lobbying?
            </h3>
            <p className="text-stone-600 text-sm">
              The defense industry spent <strong className="text-red-700">$131 million on lobbying</strong> in 2022 and
              $62 million in campaign contributions in 2023. This is a remarkable return on investment — for every
              $1 spent on lobbying, defense companies receive roughly $1,000 in government contracts. The industry
              employs more lobbyists than there are members of Congress.
            </p>
          </div>
        </div>

        {/* Related links */}
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-6 border border-stone-200 mt-12">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-stone-900 mb-4">Explore More</h3>
          <ul className="space-y-2">
            <li><Link href="/contractors" className="text-red-700 hover:underline">→ All Defense Contractors — Full Database</Link></li>
            <li><Link href="/contractors/directory" className="text-red-700 hover:underline">→ Contractor Directory — Search by Name</Link></li>
            <li><Link href="/analysis/military-industrial-complex" className="text-red-700 hover:underline">→ The Military-Industrial Complex — Deep Analysis</Link></li>
            <li><Link href="/spending" className="text-red-700 hover:underline">→ Where the Pentagon&apos;s Money Goes</Link></li>
            <li><Link href="/opportunity-cost" className="text-red-700 hover:underline">→ What Defense Spending Could Buy Instead</Link></li>
          </ul>
        </div>

        <BackToTop />
      </div>
    </div>
  )
}
