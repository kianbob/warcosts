import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'The $113 Billion War Nobody Voted For — Iran War Cost Analysis',
  description: 'Pentagon says $37.5B. Independent trackers say $113B. Harvard estimates $1 trillion in total economic impact. 148 days, zero congressional votes.',
  keywords: ['iran war cost', '113 billion war', 'iran war spending', 'operation epic fury cost', 'iran war no authorization', 'war powers act iran'],
  openGraph: {
    title: 'The $113 Billion War Nobody Voted For',
    description: 'Pentagon says $37.5B. Independent trackers say $113B. Harvard estimates $1 trillion. Zero congressional votes.',
    url: 'https://www.warcosts.org/analysis/113-billion-war',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The $113 Billion War Nobody Voted For',
    description: '$113B and counting. No congressional authorization. The most expensive unauthorized military action in US history.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/113-billion-war',
  },
}

export default function OneHundredThirteenBillionWarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The $113 Billion War Nobody Voted For',
            description: 'A comprehensive cost analysis of the Iran War — from Pentagon budgets to oil shocks to the economic toll on American households.',
            datePublished: '2026-07-25T00:00:00Z',
            dateModified: '2026-07-25T00:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/113-billion-war' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The $113 Billion War' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Cost Analysis — July 25, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The $113 Billion War Nobody Voted For
        </h1>
        <p className="text-xl text-stone-300 mb-4">148 Days. Zero Congressional Votes. One Massive Bill.</p>
        <p className="text-stone-400 text-lg">
          The Pentagon says the Iran war has cost $37.5 billion. Independent analysts say $113 billion.
          Harvard economists estimate the total economic impact will exceed $1 trillion. Congress never authorized
          any of it — and now the Pentagon wants $87.6 billion more.
        </p>
      </div>

      <ShareButtons title="The $113 Billion War Nobody Voted For" />

      {/* Key Numbers */}
      <div className="bg-stone-900 border border-red-900/60 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3 mb-5">
          <span className="text-2xl">💰</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">The Cost Gap</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$37.5B</div>
            <div className="text-stone-400 text-sm">Pentagon Direct Cost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$113B</div>
            <div className="text-stone-400 text-sm">Independent Estimate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$87.6B</div>
            <div className="text-stone-400 text-sm">Pentagon Supplemental</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$1T+</div>
            <div className="text-stone-400 text-sm">Harvard Total Impact</div>
          </div>
        </div>
        <p className="text-stone-500 text-xs mt-4">Sources: SecDef Hegseth testimony (Jul 21, 2026), iran-cost-ticker.com, Harvard Kennedy School economic assessment</p>
      </div>

      {/* The Two Numbers */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Pentagon Number vs. Reality
        </h2>
        <p className="text-stone-600 mb-4">
          On July 21, 2026, Defense Secretary Pete Hegseth testified before the Senate Armed Services Committee
          that Operation Epic Fury had cost $37.5 billion in &quot;direct military expenditures.&quot; That number
          covers munitions fired, fuel burned, operational tempo, and deployed personnel costs.
        </p>
        <p className="text-stone-600 mb-4">
          What it doesn&apos;t cover is everything else — and everything else is where the real cost lives.
        </p>
        <p className="text-stone-600 mb-4">
          The independent tracker iran-cost-ticker.com, which aggregates Pentagon disclosures, economic data,
          and oil market impacts, puts the total at <strong>$113 billion and climbing</strong>. That figure includes
          the direct military spend, but also factors in the <Link href="/analysis/hormuz-crisis" className="text-red-600 hover:text-red-800 underline">Strait of Hormuz disruption</Link>,
          oil price shocks, insurance premium spikes, diverted shipping routes, and economic ripple effects.
        </p>
        <p className="text-stone-600 mb-6">
          The gap — roughly $75 billion — isn&apos;t fraud. It&apos;s accounting scope. The Pentagon counts what it
          spends. It doesn&apos;t count what the war costs.
        </p>

        <div className="bg-white border border-stone-200 rounded-lg overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead className="bg-stone-100">
              <tr>
                <th className="text-left p-4 font-semibold text-stone-700">Cost Category</th>
                <th className="text-right p-4 font-semibold text-stone-700">Pentagon Figure</th>
                <th className="text-right p-4 font-semibold text-stone-700">Independent Estimate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="p-4 text-stone-700">Munitions expended</td>
                <td className="p-4 text-right text-stone-700">$8.2B</td>
                <td className="p-4 text-right text-stone-700">$8.2B</td>
              </tr>
              <tr>
                <td className="p-4 text-stone-700">Aircraft lost/damaged (42 aircraft)</td>
                <td className="p-4 text-right text-stone-700">$12.1B</td>
                <td className="p-4 text-right text-stone-700">$29B (CRS estimate)</td>
              </tr>
              <tr>
                <td className="p-4 text-stone-700">Operational tempo &amp; personnel</td>
                <td className="p-4 text-right text-stone-700">$14.5B</td>
                <td className="p-4 text-right text-stone-700">$14.5B</td>
              </tr>
              <tr>
                <td className="p-4 text-stone-700">Missile defense (THAAD, SM-3)</td>
                <td className="p-4 text-right text-stone-700">$2.7B</td>
                <td className="p-4 text-right text-stone-700">$2.7B</td>
              </tr>
              <tr>
                <td className="p-4 text-stone-700">Oil price shock &amp; energy costs</td>
                <td className="p-4 text-right text-stone-700">—</td>
                <td className="p-4 text-right text-stone-700">$38B+</td>
              </tr>
              <tr>
                <td className="p-4 text-stone-700">Shipping &amp; insurance disruption</td>
                <td className="p-4 text-right text-stone-700">—</td>
                <td className="p-4 text-right text-stone-700">$12B+</td>
              </tr>
              <tr>
                <td className="p-4 text-stone-700">Global economic ripple effects</td>
                <td className="p-4 text-right text-stone-700">—</td>
                <td className="p-4 text-right text-stone-700">$8B+</td>
              </tr>
              <tr className="bg-stone-50 font-bold">
                <td className="p-4 text-stone-900">Total</td>
                <td className="p-4 text-right text-red-600">$37.5B</td>
                <td className="p-4 text-right text-red-600">$113B+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cost Per Day */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          $765 Million Per Day — At Peak
        </h2>
        <p className="text-stone-600 mb-4">
          During the most intense phase of Operation Epic Fury — the opening three weeks — the United States
          was spending an estimated <strong>$765 million per day</strong> on direct military operations alone.
          That figure comes from CSIS&apos;s real-time cost tracker, which logged munitions expenditure rates,
          sortie costs, and naval deployment expenses.
        </p>
        <p className="text-stone-600 mb-4">
          To put that in perspective: the entire annual budget of the Department of Education is $68 billion.
          The Iran war burned through more than 1% of that — every single day — at peak intensity.
        </p>
        <p className="text-stone-600 mb-6">
          Even as operations have settled into a lower tempo, the daily cost remains substantial. Carrier strike
          groups in the Persian Gulf cost approximately $6.5 million per day to operate. With three groups deployed
          for most of the conflict, naval presence alone runs nearly $20 million daily.
        </p>
      </section>

      {/* Historical Comparison */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          How It Compares: America&apos;s Wars by Cost
        </h2>
        <p className="text-stone-600 mb-6">
          The Iran war is already more expensive than most American military engagements — and it&apos;s only
          148 days old. Here&apos;s how it stacks up against the first year of other conflicts, adjusted
          where possible for inflation.
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">Libya (2011) — Total Cost</h3>
              <span className="text-stone-600 font-bold text-lg">$1.5B</span>
            </div>
            <p className="text-stone-600 text-sm">
              Seven months of NATO air operations. No ground troops. No occupation. The Iran war surpassed
              Libya&apos;s total cost in approximately <strong>48 hours</strong>.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">Iraq War (2003) — First Year</h3>
              <span className="text-stone-600 font-bold text-lg">$53B</span>
            </div>
            <p className="text-stone-600 text-sm">
              The Iraq invasion, ground war, and initial occupation cost $53 billion in the first 12 months.
              The Iran war has spent more than double that in less than five months — without putting a single
              boot on the ground. The difference: precision munitions are expensive, and Iran has the ability to
              fight back in ways Iraq couldn&apos;t.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">Afghanistan (2001-2021) — Total Cost</h3>
              <span className="text-stone-600 font-bold text-lg">$2.3T</span>
            </div>
            <p className="text-stone-600 text-sm">
              Twenty years of war, occupation, and nation-building. At the Iran war&apos;s current trajectory,
              Harvard economists estimate the total economic impact — including oil disruption, inflation effects,
              and rebuilding costs — could approach <strong>$1 trillion within the first year alone</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* The Supplemental */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The $87.6 Billion Supplemental Request
        </h2>
        <p className="text-stone-600 mb-4">
          The Pentagon&apos;s supplemental funding request — $87.6 billion — is the largest single wartime
          supplemental since the Iraq surge in 2007. It covers three categories:
        </p>
        <div className="space-y-4 mb-6">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Munitions Replacement — $35.3B</h3>
            <p className="text-stone-600 text-sm">
              Lockheed Martin was awarded a <strong>$35.3 billion contract</strong> to rebuild depleted Tomahawk,
              JASSM-ER, and THAAD interceptor stockpiles. Current rebuilding timeline: 3-8 years. The contract
              is the largest single munitions deal in Pentagon history. See our full analysis of the{' '}
              <Link href="/analysis/weapons-stockpile-crisis" className="text-red-600 hover:text-red-800 underline">weapons stockpile crisis</Link>.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Ongoing Operations — $31.8B</h3>
            <p className="text-stone-600 text-sm">
              Sustained air operations, naval presence in the Persian Gulf and Red Sea, mine-clearing operations
              in the Strait of Hormuz, and force protection at US bases across the Middle East.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Force Reconstitution — $20.5B</h3>
            <p className="text-stone-600 text-sm">
              Aircraft replacement (42 lost/damaged), equipment repairs, medical costs for 553+ wounded
              service members, and base infrastructure repairs in the Gulf region.
            </p>
          </div>
        </div>
        <p className="text-stone-600 mb-4">
          Congress has not yet voted on the supplemental. Multiple War Powers resolutions have been defeated.
          The irony is thick: Congress won&apos;t vote to authorize the war, but will eventually have to vote
          to pay for it.
        </p>
      </section>

      {/* Impact on Households */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          What It Costs You: The Household Impact
        </h2>
        <p className="text-stone-600 mb-4">
          Moody&apos;s Analytics estimated that the Iran war has cost American households approximately
          <strong> $100 billion</strong> through higher gas prices, increased shipping costs passed to consumers,
          and inflationary pressure. That works out to roughly <strong>$770 per household</strong> — so far.
        </p>
        <p className="text-stone-600 mb-4">
          The most visible impact is at the gas pump. Oil prices surged from $75 per barrel before the war
          to a peak of $126 — a 68% increase. Even after the brief dip during the{' '}
          <Link href="/analysis/ceasefire-collapse" className="text-red-600 hover:text-red-800 underline">ceasefire window</Link>,
          crude remains above $100. The national average for regular gasoline has risen accordingly, with
          some states seeing prices above $6 per gallon.
        </p>
        <p className="text-stone-600 mb-6">
          Beyond gas, the{' '}
          <Link href="/analysis/hormuz-global-economy" className="text-red-600 hover:text-red-800 underline">Hormuz disruption</Link>{' '}
          has rippled through global supply chains. Container shipping rates from Asia to North America have
          increased 40-60%, and those costs get passed directly to consumers in the form of higher prices on
          everything from electronics to groceries.
        </p>
      </section>

      {/* No Vote */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          148 Days Without a Vote
        </h2>
        <p className="text-stone-600 mb-4">
          The Iran war is now the most expensive military operation ever conducted without congressional
          authorization. The War Powers Resolution of 1973 requires the president to withdraw forces within
          60 days without congressional approval — a deadline that passed on April 29, 2026.
        </p>
        <p className="text-stone-600 mb-4">
          Multiple War Powers resolutions have been introduced and defeated. The administration has argued
          that existing Authorizations for Use of Military Force (AUMFs) — specifically the 2001 AUMF targeting
          groups connected to 9/11 and the 2002 Iraq AUMF — provide sufficient legal authority. Legal scholars
          across the political spectrum have disputed this interpretation.
        </p>
        <p className="text-stone-600 mb-4">
          The cost implications are significant. Without a formal authorization, the war is being funded through
          executive discretion — drawing from existing Pentagon budgets, emergency authorities, and the expectation
          that Congress will eventually pass a supplemental. It&apos;s a $113 billion bet that the legislature will
          rubber-stamp the bill after the fact.
        </p>
        <p className="text-stone-600 mb-6">
          For more on the authorization debate, see our{' '}
          <Link href="/analysis/cost-of-iran" className="text-red-600 hover:text-red-800 underline">full Iran war cost tracker</Link>{' '}
          and the{' '}
          <Link href="/iran-war-2026" className="text-red-600 hover:text-red-800 underline">Iran War 2026 overview</Link>.
        </p>
      </section>

      {/* The Trillion Dollar Question */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Trillion-Dollar Question
        </h2>
        <p className="text-stone-600 mb-4">
          Harvard Kennedy School&apos;s Belfer Center published a preliminary estimate in July 2026 projecting
          the total economic impact of the Iran war at <strong>more than $1 trillion</strong>. Their model includes:
        </p>
        <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-6">
          <li><strong>Direct military costs:</strong> $113B+ (and growing)</li>
          <li><strong>Oil market disruption:</strong> $200-300B in global GDP impact</li>
          <li><strong>Supply chain disruption:</strong> $80-120B (Hormuz, Red Sea rerouting)</li>
          <li><strong>Long-term veterans&apos; care:</strong> $50-100B (based on Iraq/Afghanistan patterns)</li>
          <li><strong>Weapons stockpile rebuilding:</strong> $100-150B over 5-8 years</li>
          <li><strong>Diplomatic and strategic costs:</strong> Difficult to quantify but substantial</li>
        </ul>
        <p className="text-stone-600 mb-6">
          The lesson from Iraq and Afghanistan is clear: the direct military cost is always a fraction of the total.
          The Iraq war cost $815 billion in direct military spending — but Brown University&apos;s Costs of War
          project put the total at $2.4 trillion when you include veterans&apos; care, interest on borrowing, and
          economic disruption. The Iran war appears to be following the same pattern, but on an accelerated timeline.
        </p>
      </section>

      {/* Defense Contractor Profits */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Who Profits: The Defense Contractor Windfall
        </h2>
        <p className="text-stone-600 mb-4">
          While American households absorb the economic blow, defense contractors are posting record results.
          Lockheed Martin&apos;s $35.3 billion restocking contract is the crown jewel, but it&apos;s far from the
          only windfall:
        </p>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center bg-white border border-stone-200 rounded-lg p-4">
            <span className="text-stone-700 font-medium">Lockheed Martin — Munitions restocking</span>
            <span className="text-red-600 font-bold">$35.3B</span>
          </div>
          <div className="flex justify-between items-center bg-white border border-stone-200 rounded-lg p-4">
            <span className="text-stone-700 font-medium">Raytheon — Tomahawk replacement</span>
            <span className="text-red-600 font-bold">$8.1B</span>
          </div>
          <div className="flex justify-between items-center bg-white border border-stone-200 rounded-lg p-4">
            <span className="text-stone-700 font-medium">Northrop Grumman — B-21 surge production</span>
            <span className="text-red-600 font-bold">$6.2B</span>
          </div>
          <div className="flex justify-between items-center bg-white border border-stone-200 rounded-lg p-4">
            <span className="text-stone-700 font-medium">General Dynamics — Naval vessel repairs</span>
            <span className="text-red-600 font-bold">$3.8B</span>
          </div>
          <div className="flex justify-between items-center bg-white border border-stone-200 rounded-lg p-4">
            <span className="text-stone-700 font-medium">Boeing — F-15EX replacement orders</span>
            <span className="text-red-600 font-bold">$4.5B</span>
          </div>
        </div>
        <p className="text-stone-600 mb-6">
          For a full breakdown of defense contractor spending, see our{' '}
          <Link href="/spending" className="text-red-600 hover:text-red-800 underline">spending tracker</Link>{' '}
          and{' '}
          <Link href="/largest-defense-contractors" className="text-red-600 hover:text-red-800 underline">largest defense contractors</Link>{' '}
          page.
        </p>
      </section>

      {/* Bottom Line */}
      <section className="my-12">
        <div className="bg-red-950 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-stone-300 mb-4">
            The United States has spent somewhere between $37.5 billion and $113 billion on a war that
            Congress never authorized. The Pentagon wants $87.6 billion more. Harvard says the total tab
            could hit $1 trillion. American households are paying $770 each and counting.
          </p>
          <p className="text-stone-300 mb-4">
            Every previous major American conflict — Korea, Vietnam, the Gulf War, Iraq, Afghanistan — had
            some form of congressional authorization, however flawed. The Iran war has none. It is both the
            most expensive and the least democratically accountable military operation in American history.
          </p>
          <p className="text-stone-300">
            The money is already spent. The question is whether anyone will ever vote on it.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">Sources</h2>
        <ul className="text-stone-500 text-sm space-y-2">
          <li>Secretary of Defense Pete Hegseth, testimony before Senate Armed Services Committee, July 21, 2026</li>
          <li>iran-cost-ticker.com, independent cost tracker, accessed July 25, 2026</li>
          <li>Harvard Kennedy School Belfer Center, &quot;Preliminary Economic Impact Assessment: Operation Epic Fury,&quot; July 2026</li>
          <li>Moody&apos;s Analytics, &quot;Household Economic Impact of Middle East Conflict,&quot; June 2026</li>
          <li>Congressional Research Service, &quot;Iran Conflict: Munitions Expenditure Report,&quot; July 2026</li>
          <li>CSIS, &quot;Real-Time Cost Tracker: Operation Epic Fury,&quot; ongoing</li>
          <li>Brown University Costs of War Project, historical cost comparisons</li>
          <li>Congressional Budget Office, preliminary cost assessment, 2026</li>
          <li>Pentagon supplemental funding request, submitted to Congress, July 2026</li>
        </ul>
      </section>

      <RelatedArticles
        articles={[
          { href: '/analysis/cost-of-iran', title: 'Iran War Cost Tracker', description: 'Real-time tracking of all Iran war costs' },
          { href: '/analysis/weapons-stockpile-crisis', title: 'The Weapons Stockpile Crisis', description: 'America\'s depleted arsenal and the 3-8 year rebuild' },
          { href: '/analysis/hormuz-global-economy', title: 'Hormuz and the Global Economy', description: 'The hidden economic cost of the strait closure' },
          { href: '/analysis/ceasefire-collapse', title: 'Ceasefire Collapse', description: 'What went wrong with the June MOU' },
          { href: '/defense-budget', title: 'US Defense Budget', description: 'Track where Pentagon dollars go' },
        ]}
      />

      <BackToTop />
    </div>
  )
}
