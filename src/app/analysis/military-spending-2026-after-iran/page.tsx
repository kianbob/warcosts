import { Metadata } from 'next'
import Link from 'next/link'
import FaqJsonLd from '@/components/FaqJsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'

export const metadata: Metadata = {
  title: 'US Military Spending 2026: Where the Money Goes After Iran | War Costs',
  description: '$1.1T budget + $87.6B supplemental. Lockheed\'s $35.3B missile contract. 1,000+ Tomahawks depleted. Where does post-Iran spending go?',
  openGraph: {
    title: 'US Military Spending 2026: Where the Money Goes After Iran',
    description: 'The Pentagon\'s $1.1 trillion budget request, $87.6B emergency supplemental, and $35.3B Lockheed contract to rebuild what Operation Epic Fury destroyed.',
    url: 'https://www.warcosts.org/analysis/military-spending-2026-after-iran',
  },
}

const depletedAssets = [
  { asset: 'Tomahawk cruise missiles', quantity: '1,000+', unitCost: '$2.1M each', replacementCost: '$2.1B+', timeline: '3–5 years to rebuild stockpile' },
  { asset: 'MQ-9 Reaper drones', quantity: '24 lost', unitCost: '$30M each', replacementCost: '$720M', timeline: '2–3 years per unit' },
  { asset: 'Precision-guided munitions', quantity: 'Thousands', unitCost: 'Varies', replacementCost: '$8B+', timeline: 'Lockheed $35.3B contract covers this' },
  { asset: 'Naval mines destroyed', quantity: '~7,200 Iranian mines', unitCost: 'N/A (US mine-clearing costs)', replacementCost: '$1.2B in clearance ops', timeline: 'Ongoing demining operations' },
  { asset: 'Aircraft (fixed/rotary)', quantity: '42 lost/damaged', unitCost: '$50M–$100M avg', replacementCost: '$2.1B–$4.2B', timeline: '2–4 years' },
  { asset: 'Ship damage/repair', quantity: 'Multiple vessels', unitCost: 'Varies', replacementCost: '$500M+', timeline: '6–18 months per vessel' },
]

const budgetBreakdown = [
  { item: 'Base Pentagon budget (FY2026)', amount: '$1.1T', category: 'Annual' },
  { item: 'Emergency supplemental (Iran)', amount: '$87.6B', category: 'Supplemental' },
  { item: 'Reconciliation package (pending)', amount: '$350B', category: 'Long-term' },
  { item: 'Lockheed Martin missile rebuild', amount: '$35.3B', category: 'Contract' },
  { item: 'Carrier fleet maintenance backlog', amount: '$12B+', category: 'Deferred' },
  { item: 'Veteran care (Iran war)', amount: 'TBD — est. $20B+ over 30 years', category: 'Long-term' },
]

const carrierDeployments = [
  { carrier: 'USS Gerald R. Ford (CVN-78)', deployment: '11 months', notes: 'Longest carrier deployment since Vietnam. Returned May 16. Presidential Unit Citation.' },
  { carrier: 'USS Harry S. Truman (CVN-75)', deployment: '7+ months', notes: 'Deployed to Eastern Mediterranean and Gulf region' },
  { carrier: 'USS George H.W. Bush (CVN-77)', deployment: '5+ months', notes: 'Arrived April — third carrier deployed simultaneously' },
]

const historicalPeaceDividends = [
  { era: 'Post-WWII (1945–1950)', spending: 'Dropped from 40% to 5% of GDP', result: 'Massive demobilization, but Korean War reversed cuts within 5 years' },
  { era: 'Post-Vietnam (1975–1980)', spending: 'Dropped from 8.9% to 4.7% of GDP', result: 'Brief decline, then Reagan buildup pushed it back to 6.2% by 1986' },
  { era: 'Post-Cold War (1991–2000)', spending: 'Dropped from 5.2% to 3.0% of GDP', result: 'Longest "peace dividend" — ended abruptly after 9/11' },
  { era: 'Post-Afghanistan (2021–2025)', spending: 'Rose from 3.3% to 3.5% of GDP', result: 'No peace dividend — China/Russia threats drove increases' },
  { era: 'Post-Iran (2026–?)', spending: '$1.1T+ budget (est. 4%+ of GDP)', result: 'No peace dividend expected — munitions rebuild + China focus' },
]

const alternativeSpending = [
  { item: 'Fix every structurally deficient bridge in America', cost: '$40B', source: 'ASCE Infrastructure Report Card' },
  { item: 'Provide universal pre-K for 4 years', cost: '$40B/year', source: 'CBO estimate' },
  { item: 'Eliminate the IRS backlog and modernize tax systems', cost: '$25B', source: 'Treasury estimate' },
  { item: 'Build 200,000 affordable housing units', cost: '$40B', source: 'HUD average per-unit cost' },
  { item: 'Tax refund of ~$320 per US household', cost: '$42B', source: '131M households' },
  { item: 'Fund NASA for 2 full years', cost: '$25.4B/year', source: 'FY2026 NASA budget' },
]

const faqs = [
  { q: 'How much is the US military budget in 2026?', a: 'The Pentagon\'s base budget request for FY2026 is approximately $1.1 trillion. On top of that, the Pentagon requested an $87.6 billion emergency supplemental specifically for Iran war costs, and a $350 billion reconciliation package for longer-term rebuilding. Total military-related spending could exceed $1.5 trillion.' },
  { q: 'What munitions were depleted in the Iran war?', a: 'The US used over 1,000 Tomahawk cruise missiles ($2.1M each), lost 24 MQ-9 Reaper drones ($30M each), and expended thousands of precision-guided munitions. 42 aircraft were lost or damaged. Lockheed Martin received a $35.3 billion contract to rebuild depleted missile stockpiles, with full replenishment expected to take 3–5 years.' },
  { q: 'What was the USS Ford\'s deployment length during the Iran war?', a: 'The USS Gerald R. Ford was deployed for 11 months — the longest carrier deployment since the Vietnam War. The Ford Carrier Strike Group 12 was awarded the Presidential Unit Citation upon return to Naval Station Norfolk on May 16, 2026. At the peak, three carrier strike groups were deployed simultaneously.' },
  { q: 'Will military spending decrease after the Iran peace deal?', a: 'No. Historical patterns show that post-conflict "peace dividends" rarely materialize in modern America. After Afghanistan, spending actually increased due to China and Russia threats. Post-Iran, massive munitions rebuilding costs, carrier maintenance backlogs, and the pivot to China competition will keep spending at or above current levels for years.' },
  { q: 'How did the Iran war affect NATO?', a: 'The US pulled 5,000 troops from Germany for the Iran deployment, creating a significant NATO rift. European allies refused to participate in the Hormuz operation or naval blockade. The Pentagon even threatened to suspend Spain from NATO. Post-war, rebuilding NATO relationships while replenishing European-theater forces will be a major challenge.' },
  { q: 'What could $42 billion have been spent on instead?', a: 'The $42B+ spent on the Iran war could have fixed every structurally deficient bridge in America ($40B), provided universal pre-K for a year ($40B), built 200,000 affordable housing units ($40B), or refunded ~$320 to every US household. These comparisons highlight the opportunity cost of military spending.' },
]

export default function MilitarySpending2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Military Spending 2026' }]} />
      <ArticleSchema
        title="US Military Spending 2026: Where the Money Goes After Iran"
        description="The Pentagon\'s $1.1 trillion budget, $87.6B emergency supplemental, and the massive cost of rebuilding what Operation Epic Fury depleted."
        url="/analysis/military-spending-2026-after-iran"
      />
      <FaqJsonLd faqs={faqs} />

      {/* Hero */}
      <div className="not-prose bg-white border border-stone-200 rounded-xl p-8 md:p-12 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-stone-600 text-sm font-semibold uppercase tracking-wider">Budget Analysis</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-stone-900 mb-4">
          US Military Spending 2026
        </h1>
        <p className="text-xl text-stone-600 mb-2">Where the Money Goes After Iran</p>
        <p className="text-stone-500 text-lg">
          The war is over. The bill is just arriving. Between munitions rebuilding, carrier maintenance, veteran care,
          and the pivot back to China, the post-Iran military budget is the largest in American history — and there&apos;s
          no peace dividend in sight.
        </p>
      </div>

      <ShareButtons title="US Military Spending 2026: Where the Money Goes After Iran" />

      {/* Key Numbers */}
      <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900">Key Numbers</h2>
        </div>
        <ul className="space-y-2 text-stone-700">
          <li>💰 <strong>$1.1 trillion</strong> base Pentagon budget + <strong>$87.6B</strong> emergency supplemental</li>
          <li>🏭 <strong>$35.3B</strong> Lockheed Martin contract to rebuild depleted missile stockpiles</li>
          <li>🚀 <strong>1,000+ Tomahawks</strong> used — 3–5 years to rebuild stockpile</li>
          <li>✈️ <strong>42 aircraft</strong> lost or damaged, <strong>24 MQ-9 Reapers</strong> destroyed ($30M each)</li>
          <li>🚢 USS Ford: <strong>11-month deployment</strong> — longest since Vietnam</li>
          <li>🇪🇺 <strong>5,000 US troops</strong> pulled from Germany — NATO rift persists</li>
        </ul>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Arsenal Is Empty</h2>
        <p>
          Operation Epic Fury burned through America&apos;s weapons stockpiles at a rate not seen since World War II. In
          just 108 days, the US military expended over <strong>1,000 Tomahawk cruise missiles</strong> — roughly a quarter
          of the entire inventory. Each Tomahawk costs $2.1 million. Twenty-four MQ-9 Reaper drones were destroyed at
          $30 million apiece. Forty-two manned aircraft were lost or damaged.
        </p>
        <p>
          The immediate concern isn&apos;t the money — it&apos;s the time. Modern precision munitions take <strong>3 to 5
          years</strong> to manufacture. The defense industrial base can&apos;t simply surge production overnight. As the
          Wall Street Journal reported during the war, the Tomahawk depletion &quot;threatens Taiwan readiness&quot; — if China
          moved on Taiwan tomorrow, the US would fight with a significantly diminished missile arsenal.
        </p>
        <p>
          Lockheed Martin&apos;s <strong>$35.3 billion contract</strong> to rebuild depleted stockpiles is the largest single
          munitions contract since the Cold War. It covers Tomahawk replacements, JASSM-ER cruise missiles, precision-guided
          bomb kits, and drone replacement. But even with accelerated production, full replenishment won&apos;t happen before 2030.
        </p>
      </div>

      {/* Depleted Assets Table */}
      <div className="not-prose my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Depleted Assets</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300 bg-stone-50">
                <th className="text-left py-3 px-4 font-semibold">Asset</th>
                <th className="text-right py-3 px-4 font-semibold">Quantity</th>
                <th className="text-right py-3 px-4 font-semibold">Unit Cost</th>
                <th className="text-right py-3 px-4 font-semibold">Replacement</th>
                <th className="text-left py-3 px-4 font-semibold">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {depletedAssets.map((item) => (
                <tr key={item.asset} className="border-b border-stone-200">
                  <td className="py-3 px-4 font-medium">{item.asset}</td>
                  <td className="py-3 px-4 text-right text-red-600 font-bold">{item.quantity}</td>
                  <td className="py-3 px-4 text-right text-stone-500">{item.unitCost}</td>
                  <td className="py-3 px-4 text-right text-red-600 font-bold">{item.replacementCost}</td>
                  <td className="py-3 px-4 text-stone-500 text-xs">{item.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Budget: $1.1 Trillion and Counting</h2>
        <p>
          The Pentagon&apos;s base budget request for FY2026 is approximately <strong>$1.1 trillion</strong> — already the
          largest in history before the Iran supplemental. On top of that, the Pentagon requested an <strong>$87.6 billion
          emergency supplemental</strong> specifically for Iran war costs. And Congress is debating a <strong>$350 billion
          reconciliation package</strong> for longer-term rebuilding.
        </p>
        <p>
          Add it up and the total military-related spending in 2026 could exceed <strong>$1.5 trillion</strong> — more
          than the GDP of Australia. For perspective, the entire federal budget for education is $90 billion.
          The Iran supplemental alone is nearly equal to the entire NASA budget.
        </p>
      </div>

      {/* Budget Breakdown */}
      <div className="not-prose my-8 bg-stone-50 border border-stone-200 rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">2026 Military Spending</h3>
        <div className="space-y-3">
          {budgetBreakdown.map((item) => (
            <div key={item.item} className="flex justify-between items-center">
              <div>
                <span className="font-medium">{item.item}</span>
                <span className="text-xs text-stone-400 ml-2 bg-stone-200 px-2 py-0.5 rounded">{item.category}</span>
              </div>
              <span className="font-bold text-red-600">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Three Carriers, 11 Months, and a NATO Rift</h2>
        <p>
          At the peak of Operation Epic Fury, the US had <strong>three carrier strike groups</strong> deployed simultaneously
          to the Middle East — the Ford, the Truman, and the Bush. The USS Gerald R. Ford&apos;s <strong>11-month deployment</strong> was
          the longest for any carrier since the Vietnam War. The crew was awarded the Presidential Unit Citation.
        </p>
      </div>

      {/* Carrier Table */}
      <div className="not-prose my-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300 bg-stone-50">
                <th className="text-left py-3 px-4 font-semibold">Carrier</th>
                <th className="text-right py-3 px-4 font-semibold">Deployment</th>
                <th className="text-left py-3 px-4 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {carrierDeployments.map((c) => (
                <tr key={c.carrier} className="border-b border-stone-200">
                  <td className="py-3 px-4 font-medium">{c.carrier}</td>
                  <td className="py-3 px-4 text-right font-bold text-stone-700">{c.deployment}</td>
                  <td className="py-3 px-4 text-stone-500 text-xs">{c.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <p>
          The carrier deployments came at a direct cost to other commitments. The US pulled <strong>5,000 troops
          from Germany</strong> to support the Iran operation, creating a significant rift within NATO. European allies
          — already angry about being excluded from decision-making — refused to participate in either the Hormuz
          operation or the naval blockade. The Pentagon even threatened to suspend Spain from NATO over its refusal
          to contribute.
        </p>
        <p>
          Post-war, rebuilding those relationships while simultaneously replenishing European-theater forces and
          maintaining readiness in the Pacific will stretch the military to its limits.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The &quot;Peace Dividend&quot; That Won&apos;t Come</h2>
        <p>
          After every major American conflict, there&apos;s talk of a &quot;peace dividend&quot; — redirecting military spending
          toward domestic priorities. Historically, it has sometimes materialized — and sometimes not.
        </p>
      </div>

      {/* Historical Peace Dividends */}
      <div className="not-prose my-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300 bg-stone-50">
                <th className="text-left py-3 px-4 font-semibold">Era</th>
                <th className="text-left py-3 px-4 font-semibold">Spending Trend</th>
                <th className="text-left py-3 px-4 font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {historicalPeaceDividends.map((era) => (
                <tr key={era.era} className="border-b border-stone-200">
                  <td className="py-3 px-4 font-medium">{era.era}</td>
                  <td className="py-3 px-4 text-stone-600">{era.spending}</td>
                  <td className="py-3 px-4 text-stone-500 text-xs">{era.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <p>
          The post-Cold War era (1991–2000) produced the most significant peace dividend in modern history — defense
          spending dropped from 5.2% to 3.0% of GDP. But that required the collapse of America&apos;s primary adversary.
          No such collapse has occurred. China is ascending. Russia remains aggressive. Iran has demonstrated it can
          close the world&apos;s most important shipping lane. North Korea continues developing ICBMs.
        </p>
        <p>
          There will be no peace dividend after Iran. The munitions rebuild alone will cost <strong>$35.3 billion</strong> and
          take 3–5 years. Carrier maintenance backlogs exceed <strong>$12 billion</strong>. Veteran care for the 538+
          wounded — many with traumatic brain injuries and PTSD — will cost tens of billions over the next three decades.
          And the &quot;pivot to China&quot; that was supposed to define American strategy is now competing with Middle East
          rebuilding for budget dollars.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Ongoing Costs Nobody Talks About</h2>
        <p>
          The $42B+ direct war cost is just the tip. Here&apos;s what&apos;s still accumulating:
        </p>
        <ul>
          <li><strong>Blockade wind-down:</strong> Even after the MOU, demining operations, naval redeployments, and ongoing maritime security require thousands of personnel and billions in continued spending.</li>
          <li><strong>Veteran care:</strong> The <Link href="/spending">long-term cost of caring for veterans</Link> of Iraq and Afghanistan has already exceeded $300 billion. Iran war veterans — even from a 108-day conflict — will need decades of medical and mental health support.</li>
          <li><strong>Equipment lifecycle:</strong> Ships, aircraft, and vehicles used in combat age faster than peacetime projections. The Ford&apos;s 11-month deployment alone shaved years off its maintenance schedule.</li>
          <li><strong>Deterrence costs:</strong> Iran demonstrated that a mid-power nation can close a critical chokepoint for months. Deterring future attempts requires permanent force posture investments in the Gulf region.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">What $42 Billion Could Have Bought Instead</h2>
        <p>
          Opportunity cost is the quietest casualty of war. Every dollar spent on Tomahawks is a dollar not
          spent on bridges, schools, or tax cuts. Here&apos;s what <strong>$42 billion</strong> could have funded:
        </p>
      </div>

      {/* Alternative Spending */}
      <div className="not-prose my-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-green-900 mb-4">What $42B Could Have Bought</h3>
        <div className="space-y-4">
          {alternativeSpending.map((item) => (
            <div key={item.item} className="flex justify-between items-start gap-4">
              <div>
                <span className="font-medium text-stone-800">{item.item}</span>
                <span className="text-xs text-stone-400 block">{item.source}</span>
              </div>
              <span className="font-bold text-green-700 shrink-0">{item.cost}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <p>
          These aren&apos;t hypotheticals — they&apos;re the real trade-offs taxpayers made when the first Tomahawk left
          its tube. Whether those trade-offs were worth it depends on whether the Iran war achieved its objectives.
          The <Link href="/analysis/true-cost-iran-peace-deal">peace deal analysis</Link> suggests the jury is still out.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Comparison</h2>
        <p>
          America has spent <strong>$11.6 trillion on war since 2001</strong>. Afghanistan: $2.3 trillion over 20 years.
          Iraq: $2.1 trillion over 8+ years. Syria: $200 billion and counting. And now Iran: $42 billion in 108 days,
          with long-term costs that could push the total past $150 billion.
        </p>
        <p>
          The Iran war was shorter than any of its predecessors. But it was the most expensive per day, the most
          munitions-intensive, and the most economically disruptive. And unlike Afghanistan — where the US could
          argue (however dubiously) that 20 years of occupation prevented another 9/11 — the Iran war&apos;s outcomes
          are still unfolding.
        </p>
        <p>
          The <Link href="/us-military-budget-2026">full 2026 budget breakdown</Link> shows where every dollar is
          allocated. The <Link href="/defense-budget">historical defense budget tracker</Link> puts it in context.
          And the <Link href="/analysis/pentagon-waste">Pentagon waste analysis</Link> asks whether the money
          that <em>is</em> spent is being spent wisely.
        </p>
        <p>
          The war is over. The spending is not.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="not-prose my-12 bg-stone-50 border border-stone-200 rounded-lg p-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-stone-500 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related */}
      <div className="not-prose my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { href: '/iran-war-2026', title: 'Iran War 2026: Live Tracker →', desc: 'Real-time costs, casualties, and timeline' },
            { href: '/defense-budget', title: 'US Defense Budget →', desc: 'Historical military spending data' },
            { href: '/spending', title: 'Where Your Tax Dollars Go →', desc: 'Federal spending breakdown' },
            { href: '/analysis/what-could-we-buy', title: 'What Could We Buy Instead? →', desc: 'Opportunity costs of military spending' },
            { href: '/analysis/pentagon-waste', title: 'Pentagon Waste →', desc: 'Failed audits and missing trillions' },
            { href: '/us-military-budget-2026', title: '2026 Military Budget →', desc: 'Full budget breakdown and analysis' },
          ].map(a => (
            <Link key={a.href} href={a.href} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">{a.title}</h3>
              <p className="text-stone-500 text-sm">{a.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <RelatedArticles articles={[
        { slug: 'true-cost-iran-peace-deal', title: 'The True Cost of the Iran Peace Deal', desc: '108 days, $42B+, 7,200+ dead.' },
        { slug: 'what-could-we-buy', title: 'What Could We Buy Instead?', desc: 'Opportunity costs of permanent war.' },
        { slug: 'pentagon-waste', title: 'Pentagon Waste', desc: 'Failed audits and missing trillions.' },
      ]} />

      <BackToTop />
    </div>
  )
}
