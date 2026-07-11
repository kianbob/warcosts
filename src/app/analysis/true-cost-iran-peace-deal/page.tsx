import { Metadata } from 'next'
import Link from 'next/link'
import FaqJsonLd from '@/components/FaqJsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'

export const metadata: Metadata = {
  title: 'The True Cost of the Iran Peace Deal | War Costs',
  description: '$42B+ spent in 108 days. 15 US KIA. 3,461+ Iranians killed. 3,756+ Lebanese killed. Oil hit $126/bbl. Was the June 14 peace deal worth it?',
  openGraph: {
    title: 'The True Cost of the Iran Peace Deal',
    description: '108 days, $42B+, thousands dead. What America paid for the June 14, 2026 MOU — and what it actually achieved.',
    url: 'https://www.warcosts.org/analysis/true-cost-iran-peace-deal',
  },
}

const costBreakdown = [
  { category: 'Munitions (first 6 days)', amount: '$11.3B', notes: '1,000+ Tomahawks, precision-guided bombs, cruise missiles' },
  { category: 'Naval operations', amount: '$8.2B', notes: '3 carrier strike groups, 20+ warships, 11-month USS Ford deployment' },
  { category: 'Blockade enforcement', amount: '$6.4B', notes: '10,000+ troops, dozens of aircraft, 75+ ships redirected' },
  { category: 'Air operations', amount: '$7.1B', notes: '42 aircraft lost/damaged, 24 MQ-9 Reapers ($30M each)' },
  { category: 'Personnel & logistics', amount: '$4.8B', notes: 'Troop deployments, medical evacuations, supply chains' },
  { category: 'Intelligence & cyber', amount: '$2.5B', notes: 'Satellite tasking, signals intelligence, cyber operations' },
  { category: 'Other / classified', amount: '$1.7B+', notes: 'Special operations, allied support, base hardening' },
]

const humanCost = [
  { side: 'United States', killed: '15', wounded: '538+', other: '42 aircraft lost/damaged' },
  { side: 'Iran (total)', killed: '3,461+', wounded: '12,000+', other: '1,701 civilians (254 children)' },
  { side: 'Lebanon', killed: '3,756+', wounded: '15,000+', other: 'Massive infrastructure destruction' },
]

const dealTerms = [
  'Immediate and permanent termination of military operations on all fronts',
  'Strait of Hormuz reopens toll-free within 30 days',
  'US lifts naval blockade of Iranian ports',
  '$24B in frozen Iranian assets unfrozen',
  'Iran invites IAEA inspectors back',
  '60-day nuclear negotiations framework',
  'De-confliction cell for Lebanon ceasefire',
  'Mine removal coordination mechanism',
  'Iran can resume oil exports',
  'Prisoner/detainee exchange framework',
  'No-fly zone termination timeline',
  'Humanitarian corridor guarantees',
  'Third-party verification mechanisms',
  'Dispute resolution via Pakistan/Qatar mediation',
]

const warComparisons = [
  { war: 'Afghanistan (2001–2021)', duration: '20 years', cost: '$2.3 trillion', dailyCost: '$315M/day' },
  { war: 'Iraq (2003–2011)', duration: '8+ years', cost: '$2.1 trillion', dailyCost: '$720M/day' },
  { war: 'Syria (2014–present)', duration: '10+ years', cost: '$200B+', dailyCost: '$55M/day' },
  { war: 'Iran (2026)', duration: '108 days', cost: '$42B+', dailyCost: '$389M/day' },
]

const faqs = [
  { q: 'How much did the Iran war cost before the peace deal?', a: 'Operation Epic Fury cost over $42 billion in 108 days (February 28 – June 14, 2026). The Pentagon requested an additional $87.6 billion emergency supplemental and a $350 billion reconciliation package, meaning total costs will far exceed the initial $42B figure.' },
  { q: 'What were the terms of the June 14, 2026 peace deal?', a: 'The 14-point MOU included immediate cessation of hostilities, Strait of Hormuz reopening within 30 days (toll-free), lifting of the US naval blockade, $24 billion in frozen Iranian assets unfrozen, IAEA inspector access, and a 60-day framework for nuclear negotiations. Pakistan PM Sharif and Army Chief Munir mediated.' },
  { q: 'How many people died in the Iran war?', a: 'At least 15 US service members were killed and 538+ wounded. Iran suffered 3,461+ killed including 1,701 civilians and 254 children. Lebanon saw 3,756+ killed. Total deaths across all parties exceeded 7,200.' },
  { q: 'How did the Iran war compare in cost to Afghanistan and Iraq?', a: 'Iran cost $42B+ in 108 days ($389M/day). Afghanistan cost $2.3 trillion over 20 years ($315M/day). Iraq cost $2.1 trillion over 8+ years ($720M/day). Iran was the most expensive per-day conflict since World War II, but far shorter than either predecessor.' },
  { q: 'What was the economic impact of the Strait of Hormuz closure?', a: 'Oil prices hit $126/barrel at their peak, up from ~$70 pre-war. US gas prices exceeded $4/gallon nationally. The IEA called it "the biggest energy security threat in history." Global GDP impact estimates ranged from $500 billion to $1 trillion. 1,500+ ships were stranded at the peak of the crisis.' },
  { q: 'Who mediated the Iran peace deal?', a: 'Pakistan played the central mediating role, with PM Shehbaz Sharif and Army Chief General Asim Munir facilitating talks in Islamabad and beyond. Qatar also participated in quadrilateral negotiations. The final deal was announced on June 14, 2026, with a signing ceremony planned for Switzerland.' },
]

export default function TrueCostIranPeaceDealPage() {
  return (
    <div className="bg-stone-900 text-stone-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'True Cost of the Iran Peace Deal' }]} />
        <ArticleSchema
          title="The True Cost of the Iran Peace Deal"
          description="108 days, $42B+, thousands dead. What America paid for the June 14, 2026 MOU — and what it actually achieved."
          url="/analysis/true-cost-iran-peace-deal"
        />
        <FaqJsonLd faqs={faqs} />

        {/* Hero */}
        <div className="not-prose bg-stone-800 border border-stone-700 rounded-xl p-8 md:p-12 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Post-War Analysis</span>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-4">
            The True Cost of the Iran Peace Deal
          </h1>
          <p className="text-xl text-stone-300 mb-4">
            108 days. $42 billion. 7,200+ dead. One 14-point memo.
          </p>
          <p className="text-stone-400 text-lg">
            On June 14, 2026, Pakistan PM Shehbaz Sharif announced that the United States and Iran had reached a peace deal — ending
            Operation Epic Fury after 108 days of war. Oil prices crashed. Markets rallied. The Strait of Hormuz would reopen.
            But at what cost? And was it worth it?
          </p>
        </div>

        <ShareButtons title="The True Cost of the Iran Peace Deal" />

        {/* AI Overview */}
        <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">💡</span>
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">Key Numbers</h2>
          </div>
          <ul className="space-y-2 text-stone-300">
            <li>💰 <strong className="text-white">$42B+</strong> spent in 108 days — <strong className="text-white">$389 million per day</strong></li>
            <li>🇺🇸 <strong className="text-white">15 US KIA</strong>, 538+ wounded, 42 aircraft lost or damaged</li>
            <li>🇮🇷 <strong className="text-white">3,461+ Iranians killed</strong> — 1,701 civilians, 254 children</li>
            <li>🇱🇧 <strong className="text-white">3,756+ killed in Lebanon</strong> — war expanded far beyond Iran</li>
            <li>⛽ Oil hit <strong className="text-white">$126/barrel</strong> — US gas exceeded <strong className="text-white">$4/gallon</strong></li>
            <li>📄 <strong className="text-white">14-point MOU</strong> — Hormuz reopens in 30 days, $24B unfrozen, 60-day nuclear talks</li>
            <li>🇵🇰 Pakistan mediated — PM <strong className="text-white">Sharif</strong> and Army Chief <strong className="text-white">Munir</strong> brokered the deal</li>
          </ul>
        </div>

        <div className="prose prose-invert prose-stone max-w-none">
          <h2 className="font-[family-name:var(--font-heading)] text-white">What $42 Billion Bought</h2>
          <p>
            Operation Epic Fury began on February 28, 2026, when the United States launched a massive strike campaign against
            Iran&apos;s military infrastructure, nuclear facilities, and government targets. In the first six days alone, the
            US expended <strong>$11.3 billion in munitions</strong> — over 1,000 Tomahawk cruise missiles, thousands of
            precision-guided bombs, and hundreds of drone strikes. It was the most intensive opening salvo since the 2003
            invasion of Iraq.
          </p>
          <p>
            By the time the 14-point MOU was signed 108 days later, the Pentagon had burned through more than $42 billion.
            That figure doesn&apos;t include the <strong>$87.6 billion emergency supplemental</strong> the Pentagon requested
            from Congress, or the <strong>$350 billion reconciliation package</strong> still being debated. The true long-term
            cost — including veteran care, equipment replacement, and economic damage — will dwarf the initial number.
          </p>
        </div>

        {/* Cost Breakdown Table */}
        <div className="not-prose my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">Cost Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="text-left py-3 px-4 text-stone-400 font-semibold">Category</th>
                  <th className="text-right py-3 px-4 text-stone-400 font-semibold">Cost</th>
                  <th className="text-left py-3 px-4 text-stone-400 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((item) => (
                  <tr key={item.category} className="border-b border-stone-800">
                    <td className="py-3 px-4 text-white font-medium">{item.category}</td>
                    <td className="py-3 px-4 text-right text-red-400 font-bold">{item.amount}</td>
                    <td className="py-3 px-4 text-stone-400 text-xs">{item.notes}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-stone-600">
                  <td className="py-3 px-4 text-white font-bold">TOTAL</td>
                  <td className="py-3 px-4 text-right text-red-400 font-bold text-lg">$42B+</td>
                  <td className="py-3 px-4 text-stone-400 text-xs">Direct costs only — long-term costs far higher</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose prose-invert prose-stone max-w-none">
          <h2 className="font-[family-name:var(--font-heading)] text-white">The Human Cost</h2>
          <p>
            Numbers on a spreadsheet don&apos;t bleed. But people do. The Iran war killed at least <strong>7,232 people</strong> across
            multiple countries in just over three months.
          </p>
        </div>

        {/* Human Cost Table */}
        <div className="not-prose my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="text-left py-3 px-4 text-stone-400 font-semibold">Side</th>
                  <th className="text-right py-3 px-4 text-stone-400 font-semibold">Killed</th>
                  <th className="text-right py-3 px-4 text-stone-400 font-semibold">Wounded</th>
                  <th className="text-left py-3 px-4 text-stone-400 font-semibold">Other</th>
                </tr>
              </thead>
              <tbody>
                {humanCost.map((row) => (
                  <tr key={row.side} className="border-b border-stone-800">
                    <td className="py-3 px-4 text-white font-medium">{row.side}</td>
                    <td className="py-3 px-4 text-right text-red-400 font-bold">{row.killed}</td>
                    <td className="py-3 px-4 text-right text-orange-400">{row.wounded}</td>
                    <td className="py-3 px-4 text-stone-400 text-xs">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-2">
            * Iranian casualty figures from Iran Red Crescent and independent media. US figures from CENTCOM.
            Lebanon figures from Lebanon Ministry of Health.
          </p>
        </div>

        <div className="prose prose-invert prose-stone max-w-none">
          <p>
            Fifteen American families received a knock on the door. 538 more got phone calls about wounded sons
            and daughters. In Iran, 254 children never came home from school. In Lebanon, entire neighborhoods
            were reduced to rubble in a war they didn&apos;t start and couldn&apos;t stop.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-white">The Economic Shockwave</h2>
          <p>
            The <Link href="/analysis/hormuz-crisis" className="text-blue-400 hover:text-blue-300">Strait of Hormuz closure</Link> was
            the war&apos;s most devastating economic weapon. When Iran began mining the strait on Day 11, oil prices
            surged from ~$70/barrel pre-war to a peak of <strong>$126/barrel</strong>. American gas prices crossed $4/gallon
            nationally. The IEA called it &quot;the biggest energy security threat in history.&quot;
          </p>
          <p>
            At the peak of the crisis, <strong>1,500+ ships</strong> were stranded in the Persian Gulf. 20,000 seafarers
            were trapped on vessels with dwindling supplies. Global supply chains that depend on Gulf oil — which is to say,
            nearly all of them — ground to a halt. The Philippines declared a national energy emergency. South Korea told
            citizens to take shorter showers. Panama Canal transit prices surged by $4 million.
          </p>
          <p>
            Harvard estimated the total economic impact at <strong>$1 trillion</strong>. The IEA reported the steepest
            quarterly oil demand decline since COVID. And the pain wasn&apos;t distributed equally — developing nations
            that import 90%+ of their fuel were hit hardest.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-white">The Deal</h2>
          <p>
            The 14-point MOU, mediated primarily by Pakistan with Qatar&apos;s participation, promised a framework for
            ending the conflict. Its key provisions:
          </p>
        </div>

        {/* Deal Terms */}
        <div className="not-prose my-8 bg-stone-800 border border-stone-700 rounded-lg p-6">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">14-Point MOU — Key Terms</h3>
          <ol className="space-y-2">
            {dealTerms.map((term, i) => (
              <li key={i} className="flex gap-3 text-stone-300">
                <span className="text-stone-500 font-mono text-sm shrink-0">{String(i + 1).padStart(2, '0')}.</span>
                <span>{term}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="prose prose-invert prose-stone max-w-none">
          <p>
            The deal unfroze <strong>$24 billion</strong> in Iranian assets — a major concession. It gave Iran 60 days to
            begin nuclear negotiations, without requiring an immediate halt to enrichment. And it allowed Iran to resume
            oil exports, providing the regime with desperately needed revenue.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-white">Was It Worth It?</h2>
          <p>
            This is the question that will define the historical judgment of Operation Epic Fury. The answer depends
            on what you think the war was supposed to achieve.
          </p>
          <p>
            <strong>If the goal was to destroy Iran&apos;s nuclear program:</strong> The war damaged nuclear facilities but
            didn&apos;t eliminate Iran&apos;s enrichment capability. The MOU kicks nuclear negotiations 60 days down the road.
            Iran&apos;s Supreme Leader declared enriched uranium &quot;must not leave Iran.&quot; The nuclear question remains unresolved.
          </p>
          <p>
            <strong>If the goal was to degrade Iran&apos;s military:</strong> The US destroyed significant military infrastructure —
            90% of Iran&apos;s 8,000 naval mines, dozens of missile sites, air defense systems. But US intelligence assessed
            Iran retained ~50% of ballistic missiles, ~60% of IRGC Navy, and ~66% of air force capability. Iran regained
            access to 30 of 33 missile sites along Hormuz.
          </p>
          <p>
            <strong>If the goal was regime change:</strong> The regime survived. Iran&apos;s new Supreme Leader Mojtaba Khamenei
            consolidated power during the war. The IRGC emerged as national heroes. Anti-American sentiment hardened.
          </p>
          <p>
            <strong>If the goal was to secure the Strait of Hormuz:</strong> The strait was closed for 108 days — the first
            closure in history. The economic damage exceeded anything Iran had previously achieved through threats alone.
            The MOU promises reopening within 30 days, but Iran demonstrated it can close the world&apos;s most critical
            chokepoint whenever it chooses.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-white">Historical Comparison</h2>
          <p>
            Context matters. How does the Iran war&apos;s cost compare to America&apos;s other 21st-century conflicts?
          </p>
        </div>

        {/* War Comparison Table */}
        <div className="not-prose my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="text-left py-3 px-4 text-stone-400 font-semibold">Conflict</th>
                  <th className="text-right py-3 px-4 text-stone-400 font-semibold">Duration</th>
                  <th className="text-right py-3 px-4 text-stone-400 font-semibold">Total Cost</th>
                  <th className="text-right py-3 px-4 text-stone-400 font-semibold">Daily Cost</th>
                </tr>
              </thead>
              <tbody>
                {warComparisons.map((war) => (
                  <tr key={war.war} className="border-b border-stone-800">
                    <td className="py-3 px-4 text-white font-medium">{war.war}</td>
                    <td className="py-3 px-4 text-right text-stone-300">{war.duration}</td>
                    <td className="py-3 px-4 text-right text-red-400 font-bold">{war.cost}</td>
                    <td className="py-3 px-4 text-right text-orange-400">{war.dailyCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-2">
            Afghanistan and Iraq costs include long-term veteran care and interest. Iran figure is direct costs only — final total will be significantly higher.
          </p>
        </div>

        <div className="prose prose-invert prose-stone max-w-none">
          <p>
            Afghanistan cost $2.3 trillion over 20 years. Iraq cost $2.1 trillion over 8+ years. Iran cost $42 billion
            in 108 days. On a per-day basis, Iran was the most expensive American conflict since World War II. And when
            the supplemental spending, equipment replacement, and long-term veteran care are factored in, the total will
            likely exceed <strong>$150 billion</strong>.
          </p>
          <p>
            The critical difference: Afghanistan and Iraq were long occupations with mounting costs. Iran was a short,
            intense conflict with concentrated spending. Whether &quot;short and expensive&quot; is better than &quot;long and
            expensive&quot; depends on whether the outcomes justify the price.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-white">What Comes Next</h2>
          <p>
            The MOU is signed. The blockade is lifted. Oil prices are falling. But the peace deal is a framework,
            not a resolution. The 60-day nuclear talks haven&apos;t started. Israel is still bombing Lebanon. The Strait
            of Hormuz is technically reopening, but traffic remains a fraction of pre-war levels.
          </p>
          <p>
            The <Link href="/analysis/iran-war-cost-breakdown" className="text-blue-400 hover:text-blue-300">full cost breakdown</Link> will
            take years to calculate. The <Link href="/analysis/iran-civilian-cost" className="text-blue-400 hover:text-blue-300">civilian
            toll</Link> will take longer to reckon with. And the strategic question — did $42 billion and 7,200+ lives
            buy anything that couldn&apos;t have been achieved through diplomacy — will be debated for decades.
          </p>
          <p>
            For now, the numbers speak for themselves. $42 billion. 108 days. 7,200+ dead. One memo of understanding.
            The most expensive 14-point document in American history.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="not-prose my-12 bg-stone-800 border border-stone-700 rounded-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-stone-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="not-prose my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">Related Analysis</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { href: '/iran-war-2026', title: 'Iran War 2026: Live Tracker →', desc: 'Real-time costs, casualties, and timeline' },
              { href: '/analysis/iran-war-cost-breakdown', title: 'Iran War Cost Breakdown →', desc: 'Every dollar accounted for' },
              { href: '/analysis/hormuz-crisis', title: 'The Hormuz Crisis →', desc: 'How one waterway held the global economy hostage' },
              { href: '/analysis/iran-civilian-cost', title: 'The Civilian Cost →', desc: 'Schools, hospitals, and the human price' },
              { href: '/spending', title: 'US Military Spending →', desc: 'Where your tax dollars go' },
              { href: '/analysis/what-could-we-buy', title: 'What $42B Could Have Bought →', desc: 'Opportunity costs of war' },
            ].map(a => (
              <Link key={a.href} href={a.href} className="bg-stone-800 border border-stone-700 rounded-lg p-4 hover:bg-stone-750 transition">
                <h3 className="font-bold text-white mb-1">{a.title}</h3>
                <p className="text-stone-500 text-sm">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <RelatedArticles articles={[
          { slug: 'iran-war-cost-breakdown', title: 'Iran War Cost Breakdown', desc: 'Every dollar of Operation Epic Fury.' },
          { slug: 'hormuz-crisis', title: 'The Hormuz Crisis', desc: 'How one waterway crashed the global economy.' },
          { slug: 'iran-civilian-cost', title: 'The Civilian Cost', desc: 'Schools, hospitals, and 254 children.' },
        ]} />

        <BackToTop />
      </div>
    </div>
  )
}
