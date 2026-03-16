import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { ClaimsBacklogChart } from '../VeteransCharts'

export const metadata: Metadata = {
  title: 'VA Disability Claims Backlog — 574K Pending, Veterans Die Waiting',
  description: 'Over 574,000 VA disability claims pending. 99,000+ backlogged beyond 125 days. Average wait: 132 days. Top conditions, approval rates, and the human cost of bureaucratic failure.',
  keywords: ['VA disability claims', 'VA claims backlog', 'VA disability wait time', 'VA disability approval rate', 'PACT Act claims'],
  alternates: { canonical: 'https://www.warcosts.org/veterans/disability-claims' },
  openGraph: {
    title: 'VA Disability Claims — 574K Pending',
    description: 'Veterans die waiting for disability claims. The data behind the backlog.',
    url: 'https://warcosts.org/veterans/disability-claims',
    type: 'article',
  },
}

export default function DisabilityClaimsPage() {
  const vetStats = loadData('veterans-stats.json')
  const claims = vetStats.disabilityClaims
  const topConditions = vetStats.topDisabilityConditions
  const latest = claims[claims.length - 1]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Veterans', href: '/veterans' }, { label: 'Disability Claims' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">VA Disability Claims</h1>
      <p className="text-red-800 font-bold text-xl mb-4">574,000 pending. 99,000 backlogged. Veterans die waiting.</p>
      <p className="text-stone-500 mb-6 max-w-3xl text-lg">
        The VA disability claims system is the gateway to benefits earned through military service. When it fails,
        veterans suffer — financially, medically, and psychologically. An estimated 1,500+ veterans die per month
        with unresolved disability claims.
      </p>
      <ShareButtons title="VA Disability Claims Backlog — Veterans Die Waiting" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { value: '574K', label: 'Pending claims (Feb 2026)' },
          { value: '99K', label: 'Backlogged (125+ days)' },
          { value: '132', label: 'Avg days to process' },
          { value: '2.2M+', label: 'Claims completed (FY2025)' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-600 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: '6.3M', label: 'Veterans receiving disability pay' },
          { value: '1.8M', label: 'Rated 100% disabled' },
          { value: '$173B', label: 'Compensation paid (2024)' },
          { value: '17%', label: 'Claims with errors' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-4 shadow-sm border text-center">
            <p className="text-2xl font-bold text-stone-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <ClaimsBacklogChart data={claims} />

      <div className="prose max-w-3xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The PACT Act Effect</h2>
        <p>
          The 2022 PACT Act expanded eligibility for 3.5 million veterans exposed to burn pits and other toxins.
          This created an unprecedented surge in claims — pending inventory peaked at 900,000+ in 2023. The VA
          responded by hiring thousands of claims processors and has made significant progress:
        </p>
        <ul>
          <li>Claims inventory dropped from <strong>900,000+</strong> (2023) to <strong>574,000</strong> (Feb 2026)</li>
          <li>Backlogged claims fell from <strong>380,000</strong> to <strong>99,000</strong> — the lowest since May 2020</li>
          <li>The VA processed over <strong>3 million</strong> benefit claims in FY2025 — a 19% increase</li>
          <li>Average processing time improved from 155 days to 132 days</li>
        </ul>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Attorney Representation Matters</p>
          <p className="text-amber-800">
            VA claims filed with attorney representation are completed in <strong>80.5 days on average</strong> vs
            <strong> 89 days</strong> for self-filed claims. On appeal, veterans with attorneys win <strong>41%</strong> of
            the time — the highest rate — vs <strong>29%</strong> for unrepresented veterans. VA-accredited attorneys
            charge nothing unless they win additional benefits.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Most Common Disability Conditions</h2>
        <p>
          These are the conditions most frequently rated by the VA for disability compensation. The top two — tinnitus and
          hearing loss — reflect decades of noise exposure from weapons, vehicles, and equipment.
        </p>
      </div>

      {/* Top conditions */}
      <div className="space-y-2 my-8">
        {topConditions.map((c: any, i: number) => {
          const maxClaims = topConditions[0].claims
          const widthPct = (c.claims / maxClaims * 100).toFixed(0)
          return (
            <div key={c.condition} className="bg-white rounded-lg border p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-stone-800">
                  <span className="text-stone-400 mr-2">#{i + 1}</span>
                  {c.condition}
                </span>
                <span className="text-red-800 font-bold font-[family-name:var(--font-heading)]">{(c.claims / 1000000).toFixed(1)}M</span>
              </div>
              <div className="bg-stone-100 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: `${widthPct}%` }} />
              </div>
            </div>
          )
        })}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-6 my-8">
          <p className="font-bold text-red-900 font-[family-name:var(--font-heading)] text-lg mb-2">⚠️ 1.76 Million Veterans with PTSD</p>
          <p className="text-red-800">
            Nearly <strong>1.76 million veterans</strong> currently receive VA disability compensation for PTSD — making it
            the third most common rated condition. Yet researchers estimate the true prevalence is much higher, as many
            veterans never file claims or receive other-than-honorable discharges that bar them from VA benefits.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Wait Times by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {vetStats.vaWaitTimes.map((wt: any) => (
          <div key={wt.category} className="bg-white rounded-lg border p-5">
            <p className="font-bold text-stone-800 font-[family-name:var(--font-heading)]">{wt.category}</p>
            <div className="grid grid-cols-3 gap-4 mt-3 text-center">
              <div>
                <p className="text-2xl font-bold text-red-800">{wt.days2014}</p>
                <p className="text-stone-400 text-xs">2014 (scandal)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-700">{wt.days2020}</p>
                <p className="text-stone-400 text-xs">2020</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-700">{wt.days2024}</p>
                <p className="text-stone-400 text-xs">2024</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Appeals Nightmare</h2>
        <p>
          When claims are denied — which happens frequently — veterans face an appeals process that can take
          years. The Board of Veterans&apos; Appeals (BVA) handles over 100,000 appeals annually:
        </p>
        <ul>
          <li>Average appeal resolution: <strong>1.5–4 years</strong></li>
          <li>Overall appeal success rate: <strong>33.6%</strong> (2023)</li>
          <li>With attorney representation: <strong>41%</strong> success rate</li>
          <li>Without representation: <strong>29%</strong> success rate</li>
          <li>Many veterans give up before their appeal is resolved</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Claims Backlog History</h2>
      </div>

      {/* Claims history table */}
      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-stone-300">
              <th className="text-left py-2 px-3">Year</th>
              <th className="text-right py-2 px-3">Pending</th>
              <th className="text-right py-2 px-3">Backlogged</th>
              <th className="text-right py-2 px-3">Completed</th>
              <th className="text-right py-2 px-3">Avg Days</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((row: any) => (
              <tr key={row.year} className="border-b border-stone-200 hover:bg-stone-50">
                <td className="py-2 px-3 font-medium">{row.year}</td>
                <td className="py-2 px-3 text-right">{(row.pending / 1000).toFixed(0)}K</td>
                <td className="py-2 px-3 text-right text-red-800 font-bold">{(row.backlogged / 1000).toFixed(0)}K</td>
                <td className="py-2 px-3 text-right text-green-700">{(row.completed / 1000000).toFixed(1)}M</td>
                <td className="py-2 px-3 text-right">{row.avgDays} days</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-stone-900 text-white rounded-xl p-6 my-8">
          <p className="text-lg italic leading-relaxed">
            &ldquo;A system that requires a wounded veteran to wait 132 days for a disability decision — and up to
            4 years on appeal — is not a system designed to help veterans. It is a system designed to protect a
            bureaucracy. The libertarian solution: give every veteran a disability determination within 30 days.
            If the VA can&apos;t do it, contract it out. The veteran earned these benefits with their body and their
            service. Making them beg a bureaucracy for years is a second injury.&rdquo;
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Sources</h2>
        <ul className="text-sm">
          <li>VA Benefits Administration Weekly Reports (benefits.va.gov)</li>
          <li>VA FY2025 Agency Financial Report</li>
          <li>Board of Veterans&apos; Appeals Annual Report (2023)</li>
          <li>VA 2024 Annual Report — Claims processing statistics</li>
          <li>DisabilityApprovalGuide.com monthly analysis</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Related</h2>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {[
            { href: '/veterans', label: 'Veterans Crisis Hub', desc: 'The full picture of veteran suffering' },
            { href: '/veterans/va-spending', label: 'VA Spending', desc: '$400B+ budget breakdown' },
            { href: '/veteran-suicide', label: 'Veteran Suicide', desc: '17 per day — claims delays are a factor' },
            { href: '/analysis/veterans-betrayed', label: 'Veterans Betrayed', desc: 'A century of broken promises' },
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
