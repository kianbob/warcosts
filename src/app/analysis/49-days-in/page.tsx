import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: '49 Days In: The Cost of the Iran War',
  description: '$92B+ spent in 49 days. $1.5T defense budget proposed. Oil at $150/barrel. Gas at $4/gallon. The cost of Operation Epic Fury.',
  keywords: ['iran war cost', 'iran war 49 days', 'operation epic fury cost', 'iran war total cost 2026', 'iran war spending april 2026'],
  openGraph: {
    title: '49 Days In: What the Iran War Has Cost America',
    description: '$92B+ in direct military spending. $1.5T defense budget proposed. $150/barrel oil. Gas at $4/gallon. The ceasefire hasn\'t stopped the bleeding.',
    url: 'https://www.warcosts.org/analysis/49-days-in',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '49 Days In: What the Iran War Has Cost America',
    description: '$92B+ spent. $1.5T defense budget proposed. Oil near $150/barrel. And the ceasefire expires in 5 days.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/49-days-in',
  },
}

export default function FortyNineDaysInPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '49 Days In: What the Iran War Has Cost America',
            description: 'A comprehensive cost breakdown of Operation Epic Fury at Day 49.',
            datePublished: '2026-04-17T00:00:00Z',
            dateModified: '2026-04-17T00:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/49-days-in' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: '49 Days In' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Cost Analysis — April 17, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          49 Days In: What the Iran War Has Cost America
        </h1>
        <p className="text-xl text-stone-300 mb-4">
          The ceasefire paused the bombs. It didn&apos;t pause the bill.
        </p>
        <p className="text-stone-400 text-lg">
          From February 28 to April 17, 2026 — Operation Epic Fury has become the most expensive
          air campaign in American history. Here&apos;s every dollar we can track.
        </p>
      </div>

      <ShareButtons title="49 Days In: What the Iran War Has Cost America" />

      {/* Key Numbers */}
      <div className="bg-stone-900 border border-red-900/60 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3 mb-5">
          <span className="text-2xl">💰</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">The Bill — 49 Days In</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$92B+</div>
            <div className="text-stone-400 text-sm">Direct Military Cost (Est.)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$1.88B</div>
            <div className="text-stone-400 text-sm">Per Day (Pentagon)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$1.5T</div>
            <div className="text-stone-400 text-sm">Proposed FY2027 Defense Budget</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$150/bbl</div>
            <div className="text-stone-400 text-sm">Peak Oil Price</div>
          </div>
        </div>
        <p className="text-stone-500 text-xs mt-4">Sources: Pentagon briefings, CSIS estimates, IEA oil market report (Apr 14), Trump FY2027 budget proposal (Apr 3)</p>
      </div>

      {/* Direct Military Costs */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Direct Military Costs: $92 Billion and Counting
        </h2>
        <p className="text-stone-600 mb-6">
          The Pentagon confirmed $11.3 billion spent in the first 6 days. CSIS estimated $16.5 billion through Day 12.
          At the confirmed burn rate of $1.88 billion per day during active combat operations (Days 1–39, before the
          April 8 ceasefire), direct military expenditures have reached an estimated <strong>$92 billion</strong>.
          Even during the ceasefire, carrier groups remain on station, aircraft fly patrols, and minesweeping
          continues in the Strait of Hormuz — at an estimated $400–600 million per day.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">Munitions Expended</h3>
              <span className="text-red-600 font-bold text-lg">$18B+ est.</span>
            </div>
            <p className="text-stone-600 text-sm">
              Over 2,500 targets struck in the first 6 days alone, with 10,000+ total by Day 20.
              The Guardian reported $5.5 billion in offensive strike munitions through Day 6. Tomahawk
              stockpiles have been significantly drawn down. FY2026 production cannot fully replace what&apos;s
              been fired — CSIS warns this &quot;creates risks in other theaters such as Ukraine and the
              western Pacific.&quot;
            </p>
            <p className="text-stone-500 text-xs mt-2">Sources: Guardian interactive (Mar 19), CSIS cost estimate (Mar 13), Pentagon press briefings</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">Air Defense & Interceptors</h3>
              <span className="text-red-600 font-bold text-lg">$12B+ est.</span>
            </div>
            <p className="text-stone-600 text-sm">
              Iran launched 2,500 drones and missiles by Day 3 alone. US forces shot down roughly
              half, with coalition partners handling the rest. SM-3 Block IIA interceptors cost $36 million
              each. SM-6 interceptors run $4.8 million. THAAD interceptors cost $12 million per shot.
              CSIS assumed a &quot;shoot-look-shoot&quot; doctrine for most engagements, but the sheer volume
              of Iranian launches drove costs into the billions.
            </p>
            <p className="text-stone-500 text-xs mt-2">Sources: CSIS methodology notes, Missile Defense Agency FY2026 budget</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">Naval Operations</h3>
              <span className="text-red-600 font-bold text-lg">$8B+ est.</span>
            </div>
            <p className="text-stone-600 text-sm">
              Two carrier strike groups on station since Day 1 at roughly $13 million per day combined.
              Mine-clearing operations in the Strait of Hormuz running $2 million per day since Day 6.
              30+ Iranian naval vessels sunk by Day 5. The Navy&apos;s operational tempo is the highest since
              the 2003 Iraq invasion.
            </p>
            <p className="text-stone-500 text-xs mt-2">Sources: Congressional Research Service carrier cost data, Pentagon Hormuz briefings</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">B-2 and B-21 Stealth Bomber Operations</h3>
              <span className="text-red-600 font-bold text-lg">$6B+ est.</span>
            </div>
            <p className="text-stone-600 text-sm">
              B-2 Spirit round-trips from Whiteman AFB, Missouri cost an estimated $135 million per sortie.
              The B-21 Raider saw its first combat deployment on Day 15 — classified sortie costs estimated
              at $6 million per hour. GBU-57 Massive Ordnance Penetrators ($3.5M each) were used against
              Natanz and Fordow nuclear facilities, some of the most expensive individual strikes in history.
            </p>
            <p className="text-stone-500 text-xs mt-2">Sources: USAF cost-per-flight-hour data, GAO bomber sustainment reports</p>
          </div>
        </div>
      </section>

      {/* The Budget Response */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Budget Response: $1.5 Trillion for Defense
        </h2>
        <p className="text-stone-600 mb-6">
          On April 3, the White House released its FY2027 budget proposal: <strong>$1.5 trillion for defense</strong> —
          a 40% surge from the roughly $1 trillion FY2026 level. The proposal includes a 5–7% pay raise for
          military personnel while cutting domestic programs by 10%.
        </p>
        <p className="text-stone-600 mb-6">
          To put that in perspective: the entire federal discretionary budget for non-defense spending is about
          $900 billion. The Pentagon alone would get nearly double that. Military Times reported the proposal
          came &quot;at a time when thousands of service members are actively deployed&quot; — making it politically
          difficult to oppose.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 my-6">
          <p className="text-amber-800 font-semibold mb-2">💡 What $1.5 Trillion Looks Like</p>
          <ul className="text-stone-600 text-sm space-y-1">
            <li>• More than the GDP of Australia, South Korea, or Spain</li>
            <li>• $4,400 per American — every man, woman, and child</li>
            <li>• 10× Russia&apos;s entire military budget</li>
            <li>• Enough to fund universal pre-K for 75 years</li>
          </ul>
        </div>
      </section>

      {/* Economic Costs */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Cost You&apos;re Already Paying: Oil, Gas, and Inflation
        </h2>
        <p className="text-stone-600 mb-6">
          The direct military bill is just the beginning. Iran closed the Strait of Hormuz — the chokepoint
          for 20% of global oil supply — and the economic shockwave hit every American household.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Oil Prices</h3>
            <p className="text-stone-600 text-sm">
              Brent crude surged from ~$70 pre-war to $80–82 by Day 2, then to a peak near
              <strong> $150 per barrel</strong> as Hormuz disruptions compounded. The IMF raised its 2026
              base-case forecast by 30% to $82/barrel. The IEA warned the oil shock will cut supply
              and shrink demand simultaneously.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Gas Prices</h3>
            <p className="text-stone-600 text-sm">
              Gas hit <strong>$4.00 per gallon</strong> by March 31 — a 30% surge. For the average American
              household driving 24,000 miles per year, that&apos;s roughly <strong>$960 in additional annual
              fuel costs</strong>. Lower-income families spending 8–10% of income on gas are hit hardest.
            </p>
          </div>
        </div>

        <p className="text-stone-600 mb-6">
          Reuters reported on April 16 that the war has &quot;shattered oil&apos;s price compass&quot; — analysts can&apos;t
          agree whether prices will stabilize or spike further. The ceasefire helped, but it expires on
          April 22. If fighting resumes and Hormuz closes again, Goldman Sachs projects $170+ per barrel.
        </p>
      </section>

      {/* Public Opinion */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          What Americans Think: The Polls
        </h2>
        <p className="text-stone-600 mb-6">
          Americans are not enthusiastic about this war — and they&apos;re getting less so by the week.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Only 24% Say It&apos;s Worth It</h3>
            <p className="text-stone-600 text-sm">
              An Ipsos/Reuters survey released April 14 found just <strong>24% of Americans</strong> think
              the war has been worth the costs. 51% say it has <strong>not</strong> been worthwhile.
              That&apos;s faster erosion than Iraq — which took years to reach majority opposition.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: NYT/Ipsos (Apr 14, 2026)</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">41% Say It Makes Us Less Safe</h3>
            <p className="text-stone-600 text-sm">
              When asked about long-term impact on US security, <strong>41% think military action in Iran
              will make US security worse</strong>. Only 26% think it improves security. 29% say no impact.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: Ipsos (Apr 14, 2026)</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">68% Don&apos;t Think It Will Be Over Soon</h3>
            <p className="text-stone-600 text-sm">
              Only 32% believe the war will be over in a couple of months. 41% disagree, and 28%
              aren&apos;t sure. Americans have learned from 20 years of &quot;mission accomplished&quot; moments.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: Ipsos global tracking poll (Apr 8–9, 2026)</p>
          </div>
        </div>
      </section>

      {/* The Ceasefire Clock */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Ceasefire Clock: 5 Days Left
        </h2>
        <p className="text-stone-600 mb-6">
          On April 8, the US and Iran agreed to a two-week ceasefire mediated by Pakistan. It expires
          on <strong>April 22</strong> — five days from now. The Guardian reports indirect talks are underway
          to extend it. But ISW reported on April 15 that Trump told ABC News he is &quot;not considering
          extending the ceasefire.&quot;
        </p>
        <p className="text-stone-600 mb-6">
          Meanwhile, ISW warns Iran is &quot;exploiting the current ceasefire to reorganize and regenerate
          its ballistic missile forces.&quot; A separate Lebanon-Israel ceasefire went into effect on April 16.
          Iran declared the Strait of Hormuz &quot;completely open&quot; in line with the ceasefire — but that
          could reverse overnight.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-6">
          <p className="text-red-800 font-semibold mb-2">⚠️ What Happens If the Ceasefire Expires?</p>
          <ul className="text-stone-600 text-sm space-y-1">
            <li>• Hormuz likely closes again — immediate oil price spike</li>
            <li>• Military burn rate returns to $1.88B/day</li>
            <li>• Munitions stockpiles already depleted — resupply is months behind</li>
            <li>• Lebanon ceasefire could collapse in tandem</li>
            <li>• Congress faces pressure for a formal war authorization vote</li>
          </ul>
        </div>
      </section>

      {/* The Full Tab */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Full Tab: Direct + Indirect Costs
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-stone-300">
                <th className="text-left py-3 pr-4 text-stone-900 font-bold">Category</th>
                <th className="text-right py-3 pl-4 text-stone-900 font-bold">Estimated Cost</th>
              </tr>
            </thead>
            <tbody className="text-stone-600">
              <tr className="border-b border-stone-200">
                <td className="py-3 pr-4">Direct military operations (49 days)</td>
                <td className="py-3 pl-4 text-right font-semibold">$92B+</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-3 pr-4">Munitions replacement backlog</td>
                <td className="py-3 pl-4 text-right font-semibold">$20–30B</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-3 pr-4">Israel missile defense resupply</td>
                <td className="py-3 pl-4 text-right font-semibold">$2–5B</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-3 pr-4">Oil price shock (US consumer cost, annualized)</td>
                <td className="py-3 pl-4 text-right font-semibold">$200–300B</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-3 pr-4">GDP drag from energy disruption</td>
                <td className="py-3 pl-4 text-right font-semibold">$150–250B</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-3 pr-4">Veterans&apos; healthcare (long-term, projected)</td>
                <td className="py-3 pl-4 text-right font-semibold">$50–100B</td>
              </tr>
              <tr className="border-b-2 border-stone-300 font-bold text-stone-900">
                <td className="py-3 pr-4">Total (conservative range)</td>
                <td className="py-3 pl-4 text-right text-red-600">$500B – $800B+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-stone-500 text-xs mt-4">
          Note: These are preliminary estimates. The Watson Institute found that post-9/11 wars ultimately cost
          5–10× initial estimates when long-term obligations are included. If the Iran war follows similar patterns,
          total costs could exceed $1 trillion.
        </p>
      </section>

      {/* Bottom Line */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-stone-300 text-lg mb-4">
            In 49 days, the United States has spent more on the Iran war than the entire annual budget of the
            Department of Education ($90B). The proposed $1.5 trillion defense budget would be larger than
            the GDP of all but 12 countries. Oil prices have hit levels not seen since the 2008 financial crisis.
            And 76% of Americans don&apos;t think it was worth it.
          </p>
          <p className="text-stone-300 text-lg">
            The ceasefire expires in 5 days. The next chapter of this bill is still being written.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { slug: 'iran-war-cost-breakdown', title: 'Iran War Cost: Day-by-Day Breakdown', desc: 'The original cost tracker — $11.3B in 6 days.' },
            { slug: 'iran-vs-iraq-afghanistan-comparison', title: 'Iran vs Iraq & Afghanistan at Day 49', desc: 'How this war compares to its predecessors.' },
            { slug: 'ceasefire-economy', title: 'The Ceasefire Economy', desc: 'Oil, markets, and the cost of peace.' },
          ].map(a => (
            <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-white border border-stone-200 rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-stone-900 text-sm mb-1">{a.title}</h3>
              <p className="text-stone-500 text-xs">{a.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
