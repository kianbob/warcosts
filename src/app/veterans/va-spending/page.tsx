import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { VASpendingChart } from '../VeteransCharts'

export const metadata: Metadata = {
  title: 'VA Spending Over Time — $47B to $400B in 25 Years',
  description: 'The VA budget has grown 8.5x since 2000, from $47 billion to over $400 billion. Breakdown by discretionary healthcare and mandatory benefits. Per-veteran spending analysis.',
  keywords: ['VA budget', 'VA spending', 'veterans affairs budget', 'VA healthcare spending', 'veteran benefits cost'],
  alternates: { canonical: 'https://www.warcosts.org/veterans/va-spending' },
  openGraph: {
    title: 'VA Spending — $400B+ and Growing',
    description: 'The VA budget has grown 8.5x in 25 years. Where does it all go?',
    url: 'https://warcosts.org/veterans/va-spending',
    type: 'article',
  },
}

export default function VASpendingPage() {
  const vetStats = loadData('veterans-stats.json')
  const budget = vetStats.vaBudget

  const latest = budget[budget.length - 1]
  const earliest = budget[0]
  const growthMultiple = (latest.totalBillions / earliest.totalBillions).toFixed(1)

  // Per-veteran calculation: ~17.4 million veterans in 2025
  const veteranPop = 17400000
  const perVeteran = Math.round((latest.totalBillions * 1e9) / veteranPop)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Veterans', href: '/veterans' }, { label: 'VA Spending' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">VA Spending Over Time</h1>
      <p className="text-red-800 font-bold text-xl mb-4">From $47 billion to $400+ billion in 25 years.</p>
      <p className="text-stone-500 mb-6 max-w-3xl text-lg">
        The Department of Veterans Affairs budget has grown {growthMultiple}x since 2000 — from ${earliest.totalBillions}B to ${latest.totalBillions}B.
        It is now the second-largest federal department by budget, after the Department of Defense. Yet veterans still wait months for care,
        disability claims take 130+ days, and 33,000+ sleep on the streets.
      </p>
      <ShareButtons title="VA Spending Over Time — $400B+ and Growing" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { value: `$${latest.totalBillions}B`, label: `FY${latest.year} Total Budget` },
          { value: `${growthMultiple}x`, label: 'Growth since 2000' },
          { value: `$${(perVeteran / 1000).toFixed(1)}K`, label: 'Per veteran (FY2025)' },
          { value: '412,000+', label: 'VA employees' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-600 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <VASpendingChart data={budget} />

      <div className="prose max-w-3xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Where the Money Goes</h2>
        <p>The VA budget has two main components:</p>

        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-white rounded-xl p-6 border">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">${latest.mandatoryBillions}B</p>
            <p className="font-bold text-stone-800">Mandatory Spending (66%)</p>
            <ul className="text-stone-500 text-sm mt-2 space-y-1">
              <li>• Disability compensation</li>
              <li>• Pension payments</li>
              <li>• Education benefits (GI Bill)</li>
              <li>• Readjustment benefits</li>
              <li>• Insurance programs</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">${latest.discretionaryBillions}B</p>
            <p className="font-bold text-stone-800">Discretionary Spending (34%)</p>
            <ul className="text-stone-500 text-sm mt-2 space-y-1">
              <li>• VA healthcare system</li>
              <li>• 171 VA Medical Centers</li>
              <li>• 1,138 outpatient clinics</li>
              <li>• Medical research</li>
              <li>• Construction & IT</li>
            </ul>
          </div>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The PACT Act Surge</h2>
        <p>
          The 2022 PACT Act — which expanded benefits for 3.5 million veterans exposed to burn pits and other toxins — is
          the primary driver of recent budget growth. The law authorized $280 billion in new spending over 10 years,
          adding millions of newly eligible veterans to the disability compensation rolls.
        </p>
        <p>
          In FY2024 alone, mandatory spending jumped $56 billion — almost entirely due to PACT Act-related disability
          claims. By FY2025, mandatory spending exceeded $265 billion, more than doubling from just five years earlier.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Per-Veteran Spending</h2>
        <p>
          With approximately 17.4 million living veterans and a $400B+ budget, the VA spends roughly
          <strong> ${(perVeteran).toLocaleString()} per veteran per year</strong>. But this average obscures enormous variation:
        </p>
        <ul>
          <li>Only <strong>9.1 million</strong> veterans are enrolled in VA healthcare — less than half</li>
          <li><strong>6.3 million</strong> receive monthly disability compensation</li>
          <li><strong>1.8 million</strong> are rated 100% disabled, receiving $3,938/month</li>
          <li>Millions of veterans receive no VA benefits at all</li>
        </ul>

        <div className="not-prose bg-stone-900 text-white rounded-xl p-6 my-8">
          <p className="text-lg italic leading-relaxed">
            &ldquo;The VA budget is larger than the GDP of 170 countries. It employs more people than Amazon.
            And yet, veterans wait months for appointments, claims take years to process, and 33,000+ sleep on
            the streets. This is not a funding problem — it is a monopoly problem. When one bureaucracy controls
            all veteran care, accountability becomes optional and inefficiency becomes structural.&rdquo;
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">VA Budget vs Defense Budget</h2>
        <p>
          Despite the VA&apos;s dramatic growth, it still represents a fraction of what we spend creating new veterans.
          The FY2025 defense budget is <strong>$886 billion</strong> — more than twice the VA budget. For every dollar
          spent caring for veterans, we spend $2.20 on the military that creates them.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 The Libertarian Argument</p>
          <p className="text-amber-800">
            If the true cost of war included adequate veteran care — not just weapons and deployment — the
            public would demand fewer wars. By separating the cost of creating veterans (DOD budget) from the
            cost of caring for them (VA budget), Congress makes war appear cheaper than it is. Every war authorization
            should come with a binding VA funding commitment for the next 50 years.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Budget Growth by Year</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-stone-300">
              <th className="text-left py-2 px-3">Year</th>
              <th className="text-right py-2 px-3">Total</th>
              <th className="text-right py-2 px-3">Discretionary</th>
              <th className="text-right py-2 px-3">Mandatory</th>
              <th className="text-right py-2 px-3">YoY Change</th>
            </tr>
          </thead>
          <tbody>
            {budget.map((row: any, i: number) => {
              const prev = i > 0 ? budget[i - 1] : null
              const change = prev ? ((row.totalBillions - prev.totalBillions) / prev.totalBillions * 100).toFixed(1) : '—'
              return (
                <tr key={row.year} className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="py-2 px-3 font-medium">{row.year}</td>
                  <td className="py-2 px-3 text-right font-bold text-red-800">${row.totalBillions}B</td>
                  <td className="py-2 px-3 text-right text-stone-600">${row.discretionaryBillions}B</td>
                  <td className="py-2 px-3 text-right text-stone-600">${row.mandatoryBillions}B</td>
                  <td className="py-2 px-3 text-right text-stone-500">{change === '—' ? '—' : `+${change}%`}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Sources</h2>
        <ul className="text-sm">
          <li>VA Budget in Brief (FY2001–FY2026 requests)</li>
          <li>USASpending.gov — Department of Veterans Affairs outlays</li>
          <li>Congressional Research Service — VA Appropriations reports</li>
          <li>VA FY2025 Agency Financial Report</li>
          <li>Bureau of Labor Statistics — veteran population estimates</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Related</h2>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {[
            { href: '/veterans', label: 'Veterans Crisis Hub', desc: 'The full picture: suicides, homelessness, betrayals' },
            { href: '/veterans/disability-claims', label: 'Disability Claims Backlog', desc: 'Wait times, approval rates, top conditions' },
            { href: '/veteran-suicide', label: 'Veteran Suicide', desc: '17 per day. America\'s hidden war.' },
            { href: '/spending', label: 'Military Spending', desc: 'Where the defense budget goes' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="block bg-white rounded-lg p-4 border hover:shadow-md transition">
              <p className="font-semibold text-blue-800">{link.label}</p>
              <p className="text-stone-500 text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
