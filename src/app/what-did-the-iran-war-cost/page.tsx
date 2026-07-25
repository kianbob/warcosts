import { Metadata } from 'next'
import Link from 'next/link'
import FaqJsonLd from '@/components/FaqJsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'

export const metadata: Metadata = {
  title: 'What Did the Iran War Cost? Ongoing Accounting | OpenWar',
  description:
    'Ongoing accounting of the 2026 Iran War: $37.5B Pentagon direct military (Hegseth Jul 21), $113B independent estimate, $87.6B supplemental request. 20+ US KIA, ~8,080 total killed. Oil above $100. Houthis blockade Saudi Arabia.',
  openGraph: {
    title: 'What Did the Iran War Cost? Final Accounting',
    description:
      'The 108-day Iran War cost $42B+ in direct military spending, disrupted 21% of global oil trade, and left thousands dead. Here is the full accounting.',
    type: 'article',
  },
}

const faqs = [
  {
    question: 'How much did the Iran War cost the United States?',
    answer:
      'Pentagon says $37.5 billion in direct military costs as of July 21, 2026 (Hegseth testimony). Independent estimates put the total at $113 billion (iran-cost-ticker.com). The Pentagon has requested an $87.6 billion supplemental. Broader economic costs from oil price shocks add an estimated $100 billion+ burden on US households.',
  },
  {
    question: 'How many people were killed in the Iran War?',
    answer:
      '20+ US service members killed (Pentagon removed 4 from official count) and 553+ wounded. Iran: 3,636+ killed (HRANA), 3,468 (Foundation of Martyrs), US/Israel estimate 6,000+. 27,000 injured (Iran Health Ministry). Lebanon: 4,324+ killed, 12,221 wounded. Total across all sides: ~8,080 killed, 49,241 injured.',
  },
  {
    question: 'How long did the Iran War last?',
    answer:
      'The Iran War is ongoing. It began February 28, 2026. A peace MOU was signed June 19, 2026 but collapsed by July 8 with renewed hostilities. As of July 25, 2026, the war has lasted 148 days with no end in sight.',
  },
  {
    question: 'How did the Iran War affect oil prices?',
    answer:
      'Oil prices spiked from ~$70/barrel to a peak of $126/barrel, dropped to $83 after the MOU was signed, then surged back above $100/bbl by July 23 as the deal collapsed and Houthis blockaded Saudi Arabia. The price shock has cost US households an estimated $100 billion+ according to Moody\'s.',
  },
  {
    question: 'How does the Iran War cost compare to Iraq and Afghanistan?',
    answer:
      'The Iran War\'s $37.5B+ Pentagon direct cost (and $113B independent estimate) over 148 days is far more intense per-day than Iraq or Afghanistan. The war is ongoing and costs continue to mount. Pentagon supplemental: $87.6B. Weapons depleted — rebuilding takes 3-8 years.',
  },
  {
    question: 'What was the $87.6 billion Pentagon supplemental?',
    answer:
      'The Pentagon requested an $87.6 billion supplemental appropriation to cover direct war costs, replace expended munitions and lost aircraft, repair damaged naval vessels, and fund ongoing force posture adjustments in the region.',
  },
]

export default function WhatDidTheIranWarCostPage() {
  return (
    <>
      <ArticleSchema
        title="What Did the Iran War Cost? Final Accounting"
        description="Comprehensive final accounting of the 2026 Iran War including direct military costs, human toll, economic impact, and comparison to prior US conflicts."
        datePublished="2026-07-10"
        dateModified="2026-07-10"
        slug="what-did-the-iran-war-cost"
      />
      <FaqJsonLd faqs={faqs} />

      <main className="min-h-screen bg-gray-950 text-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'What Did the Iran War Cost?' },
            ]}
          />

          <article className="mt-8">
            <header className="mb-10">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                What Did the Iran War Cost? Final Accounting
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                Updated July 25, 2026 — 148 days and counting. Pentagon: $37.5B direct military. Independent estimate: $113B total. 20+ US KIA. ~8,080 total killed. Houthis blockade Saudi Arabia. Oil above $100. The war continues.
              </p>
              <ShareButtons title="What Did the Iran War Cost? Final Accounting" />
            </header>

            {/* Executive Summary */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Executive Summary</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                The 2026 Iran War — beginning February 28, 2026 and still ongoing — is the most expensive
                per-day military operation in American history. Over 148+ days, the Pentagon reports
                <strong className="text-white">$37.5 billion</strong> in direct military costs (Hegseth testimony Jul 21),
                while independent estimates put the total at <strong className="text-white">$113 billion</strong>.
                The <strong className="text-white">$87.6 billion</strong> Pentagon supplemental request remains pending,
                and the oil price shock has cost American households an estimated{' '}
                <strong className="text-white">$100 billion+</strong> in higher energy costs.
              </p>
              <p className="mb-4 text-gray-300 leading-relaxed">
                The human toll continues to mount: 20+ US service members killed (Pentagon removed 4 from
                official count), 553+ wounded, and 3,636+ Iranians killed (HRANA) — with the Iran Foundation
                of Martyrs reporting 3,468 and US/Israel estimating 6,000+. Total across all sides: ~8,080
                killed, 49,241 injured. Lebanon: 4,324+ killed, 12,221 wounded. Israel: 72 killed, 7,834+ wounded.
                Associated operations in Lebanon killed an additional 3,756 people. The conflict saw 42
                US aircraft lost or damaged and 24 MQ-9 Reaper drones destroyed.
              </p>
              <p className="text-gray-300 leading-relaxed">
                A peace deal was signed on June 14, 2026, ending active hostilities. But the full cost of
                this war — in dollars, lives, and geopolitical consequences — will be tallied for years to come.
                For a detailed breakdown of the peace deal&apos;s terms and costs, see our{' '}
                <Link href="/analysis/true-cost-iran-peace-deal" className="text-blue-400 underline hover:text-blue-300">
                  True Cost of the Iran Peace Deal
                </Link>{' '}
                analysis.
              </p>
            </section>

            {/* Direct Military Costs */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Direct Military Costs: $42B+ Breakdown</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                The Department of Defense has disclosed partial cost figures, with independent analysts filling
                in gaps. The direct military expenditure exceeded $42 billion across the following categories:
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Category</th>
                      <th className="px-4 py-3 font-semibold text-right">Cost (Billions)</th>
                      <th className="px-4 py-3 font-semibold text-right">% of Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Munitions</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$11.3B</td>
                      <td className="px-4 py-3 text-right text-gray-400">26.9%</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Naval Operations</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$8.2B</td>
                      <td className="px-4 py-3 text-right text-gray-400">19.5%</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Air Operations</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$7.1B</td>
                      <td className="px-4 py-3 text-right text-gray-400">16.9%</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Naval Blockade</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$6.4B</td>
                      <td className="px-4 py-3 text-right text-gray-400">15.2%</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Personnel &amp; Deployment</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$4.8B</td>
                      <td className="px-4 py-3 text-right text-gray-400">11.4%</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Intelligence &amp; Cyber Operations</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$2.5B</td>
                      <td className="px-4 py-3 text-right text-gray-400">6.0%</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Other (logistics, medical, misc.)</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$1.7B+</td>
                      <td className="px-4 py-3 text-right text-gray-400">4.0%+</td>
                    </tr>
                    <tr className="bg-gray-800 font-bold">
                      <td className="px-4 py-3 text-white">Total Direct Military Cost</td>
                      <td className="px-4 py-3 text-right font-mono text-red-300">$42.0B+</td>
                      <td className="px-4 py-3 text-right text-white">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Source: DoD partial disclosures, CBO estimates, and CSIS independent analysis. Figures
                rounded. Some categories overlap; total is approximate.
              </p>
            </section>

            {/* Munitions Deep Dive */}
            <section className="mb-12">
              <h3 className="mb-4 text-xl font-bold text-gray-200">Munitions: $11.3 Billion</h3>
              <p className="mb-4 text-gray-300 leading-relaxed">
                The single largest cost category was munitions — the bombs, missiles, and precision-guided
                weapons expended during the opening six-day bombing campaign and subsequent sustained
                strikes. The US fired over 1,000 Tomahawk cruise missiles at approximately $2 million each,
                hundreds of JASSM-ER standoff missiles, and thousands of JDAMs and SDBs from fighter and
                bomber aircraft.
              </p>
              <p className="mb-4 text-gray-300 leading-relaxed">
                The munitions bill alone exceeded the entire annual procurement budget of most NATO allies.
                Pentagon officials warned Congress that the rate of expenditure had drawn down strategic
                reserves to &ldquo;concerning levels,&rdquo; prompting emergency orders to Raytheon, Lockheed
                Martin, and Boeing for accelerated production.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For a complete weapons-by-weapons breakdown, see our{' '}
                <Link href="/iran-war-by-the-numbers" className="text-blue-400 underline hover:text-blue-300">
                  Iran War by the Numbers
                </Link>{' '}
                page.
              </p>
            </section>

            {/* Naval Operations */}
            <section className="mb-12">
              <h3 className="mb-4 text-xl font-bold text-gray-200">Naval Operations: $8.2 Billion</h3>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Three carrier strike groups were deployed to the Persian Gulf and Arabian Sea — the USS
                Eisenhower, USS Harry S. Truman, and USS Ronald Reagan groups. Operating a single CSG costs
                approximately $6.5 million per day; running three simultaneously for over 100 days generated
                enormous fuel, maintenance, and operational costs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Naval forces also conducted extensive mine-clearing operations in the Strait of Hormuz after
                Iran seeded the waterway with an estimated 2,000+ naval mines. Four US Navy minesweepers and
                multiple unmanned underwater vehicles were deployed. Two Arleigh Burke-class destroyers
                sustained damage from Iranian anti-ship missile strikes, with repair costs estimated at
                $400–600 million each.
              </p>
            </section>

            {/* Blockade */}
            <section className="mb-12">
              <h3 className="mb-4 text-xl font-bold text-gray-200">Naval Blockade: $6.4 Billion</h3>
              <p className="text-gray-300 leading-relaxed">
                The US-led naval blockade of Iranian ports was one of the most resource-intensive naval
                operations since World War II. Over 45 warships from the US and coalition partners maintained
                a continuous cordon, boarding and inspecting hundreds of vessels. The blockade effectively
                shut down Iran&apos;s oil exports but also disrupted shipping lanes critical to global trade,
                contributing to the oil price spike. Costs included ship deployment, fuel, personnel hazard
                pay, and coordination with allied navies. For more on the Hormuz disruption, see our{' '}
                <Link href="/analysis/hormuz-crisis" className="text-blue-400 underline hover:text-blue-300">
                  Hormuz Crisis analysis
                </Link>.
              </p>
            </section>

            {/* Pentagon Supplemental */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">The $87.6 Billion Pentagon Supplemental</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                On May 19, 2026, the Pentagon submitted a supplemental appropriations request to Congress
                totaling $87.6 billion — more than double the direct cost of combat operations. The request
                covered:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
                <li><strong className="text-white">$42B+</strong> — Reimbursement for direct war costs already incurred</li>
                <li><strong className="text-white">$18.4B</strong> — Munitions replenishment and accelerated production</li>
                <li><strong className="text-white">$8.7B</strong> — Aircraft replacement (42 lost/damaged airframes)</li>
                <li><strong className="text-white">$6.2B</strong> — Naval vessel repairs and drone replacement</li>
                <li><strong className="text-white">$5.8B</strong> — Ongoing force posture in CENTCOM AOR</li>
                <li><strong className="text-white">$3.9B</strong> — Medical care for wounded service members</li>
                <li><strong className="text-white">$2.6B</strong> — Intelligence and cyber capability reconstitution</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                As of this writing, the supplemental remains under debate in Congress, with some members
                questioning the lack of prior authorization for the conflict and others pushing for a
                larger package that includes regional stabilization funding.
              </p>
            </section>

            {/* Human Cost */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">The Human Cost</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Behind every dollar figure is a human life destroyed or forever changed. The Iran War&apos;s
                casualty toll, while lower than Iraq or Afghanistan in absolute numbers, was devastating
                relative to the conflict&apos;s short duration.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Category</th>
                      <th className="px-4 py-3 font-semibold text-right">Count</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">US Killed in Action</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">15</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">US Wounded</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">538+</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Iranian Military Killed</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">1,760+</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Iranian Civilians Killed</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">1,701</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200 pl-8">— of which children</td>
                      <td className="px-4 py-3 text-right font-mono text-orange-400">254</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Total Iranians Killed</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">3,461+</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Lebanese Killed (associated ops)</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">3,756+</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">US Aircraft Lost / Damaged</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">42</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">MQ-9 Reapers Destroyed</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-gray-300 leading-relaxed">
                The 538+ US wounded include traumatic brain injuries from Iranian ballistic missile strikes
                on US bases in Iraq and the Gulf states, burns from naval engagements, and shrapnel wounds.
                Many face years of rehabilitation. The VA has already projected $12–18 billion in long-term
                care costs for Iran War veterans over the next two decades.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Iranian civilian casualties were concentrated in the opening bombing campaign and in areas
                near dual-use infrastructure — power plants, communications hubs, and transportation nodes
                that served both military and civilian purposes. International human rights organizations
                have called for independent investigations into at least 17 specific strikes that caused
                disproportionate civilian harm.
              </p>
            </section>

            {/* Oil Price Shock */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Oil Price Shock &amp; Economic Impact</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Perhaps the most widely felt consequence of the Iran War was the oil price shock. The Strait
                of Hormuz carries approximately 21% of global oil trade — roughly 20.5 million barrels per
                day. When Iran mined the strait and the US imposed a naval blockade, global oil markets
                convulsed.
              </p>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Brent crude surged from approximately $70/barrel in early February to a peak of{' '}
                <strong className="text-white">$126/barrel</strong> in April 2026 — an 80% increase. US
                gasoline prices averaged over $5.40/gallon nationally, with some California stations
                exceeding $7.00/gallon.
              </p>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Moody&apos;s Analytics estimated the total cost to US households at{' '}
                <strong className="text-white">$100 billion</strong> in higher energy, transportation, and
                goods costs over the duration of the conflict. Lower-income households were
                disproportionately affected, spending up to 12% of their income on fuel versus 3% for
                upper-income households.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Shipping insurance premiums for vessels transiting the Persian Gulf surged by over 600%,
                effectively halting commercial traffic through the strait for weeks. For a deep dive on
                the economic fallout, see our{' '}
                <Link href="/hormuz-crisis-global-economy" className="text-blue-400 underline hover:text-blue-300">
                  Hormuz Crisis &amp; Global Economy
                </Link>{' '}
                analysis.
              </p>
            </section>

            {/* Comparison to Prior Wars */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">How It Compares: Iran vs. Iraq vs. Afghanistan</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Metric</th>
                      <th className="px-4 py-3 font-semibold text-right">Iran (2026)</th>
                      <th className="px-4 py-3 font-semibold text-right">Iraq (2003–2011)</th>
                      <th className="px-4 py-3 font-semibold text-right">Afghanistan (2001–2021)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Duration</td>
                      <td className="px-4 py-3 text-right text-gray-300">108 days</td>
                      <td className="px-4 py-3 text-right text-gray-300">~8.5 years</td>
                      <td className="px-4 py-3 text-right text-gray-300">~20 years</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Direct Military Cost</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$42B+</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$1.1T</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$2.3T</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Cost per Day</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$389M</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$355M</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$315M</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">US KIA</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">15</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">4,431</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">2,461</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">US Wounded</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">538+</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">31,994</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">20,752</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Ground Invasion</td>
                      <td className="px-4 py-3 text-right text-gray-300">No</td>
                      <td className="px-4 py-3 text-right text-gray-300">Yes</td>
                      <td className="px-4 py-3 text-right text-gray-300">Yes</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Oil Price Impact</td>
                      <td className="px-4 py-3 text-right text-red-400">+80%</td>
                      <td className="px-4 py-3 text-right text-gray-400">+35%</td>
                      <td className="px-4 py-3 text-right text-gray-400">Minimal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed">
                The Iran War was uniquely expensive on a per-day basis — $389 million daily — reflecting the
                capital-intensive nature of naval and air warfare versus ground operations. The absence of a
                ground invasion kept US casualties low but drove munitions and platform costs far higher per
                engagement. The economic disruption via oil markets was the most severe of any US conflict
                since the 1973 Arab oil embargo.
              </p>
            </section>

            {/* Peace Deal */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">The Peace Deal: June 14, 2026</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                After 108 days of combat, a peace agreement was signed on June 14, 2026, brokered with
                the involvement of Oman, Qatar, and indirect Chinese mediation. Key terms included:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
                <li>Immediate cessation of hostilities and withdrawal of US naval blockade</li>
                <li>Iran to clear all mines from the Strait of Hormuz within 90 days</li>
                <li>Resumption of IAEA inspections with expanded access</li>
                <li>Mutual prisoner exchange</li>
                <li>Sanctions framework renegotiation timeline</li>
                <li>US force drawdown from forward positions over 180 days</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                For complete analysis of the peace deal and its long-term costs, see{' '}
                <Link href="/analysis/true-cost-iran-peace-deal" className="text-blue-400 underline hover:text-blue-300">
                  The True Cost of the Iran Peace Deal
                </Link>.
              </p>
            </section>

            {/* Long-term Costs */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Long-Term Costs Still Mounting</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                The $42 billion direct cost and $87.6 billion supplemental are only the beginning. History
                shows that the long-term costs of war far exceed initial spending:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
                <li><strong className="text-white">Veterans&apos; care:</strong> The VA projects $12–18B in long-term medical and disability costs</li>
                <li><strong className="text-white">Equipment replacement:</strong> Full munitions restocking will take 3–5 years</li>
                <li><strong className="text-white">Interest on war debt:</strong> Estimated $8–15B over the next decade</li>
                <li><strong className="text-white">Regional force posture:</strong> Sustained elevated deployments cost ~$5B/year</li>
                <li><strong className="text-white">Diplomatic costs:</strong> Strained alliances and increased regional instability</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Brown University&apos;s Costs of War Project estimates the total long-term cost of the Iran
                War could reach $150–200 billion when all factors are included — a figure that will continue
                to grow as veterans age and interest accrues on the debt used to finance the conflict.
              </p>
            </section>

            {/* Timeline */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Key Timeline</h2>
              <div className="space-y-4 border-l-2 border-gray-700 pl-6">
                <div>
                  <p className="text-sm font-semibold text-red-400">February 26, 2026</p>
                  <p className="text-gray-300">US begins strikes on Iranian nuclear and military facilities</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-400">February 26 – March 3</p>
                  <p className="text-gray-300">Six-day opening bombing campaign; $11.3B in munitions expended</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-400">Early March</p>
                  <p className="text-gray-300">Iran mines Strait of Hormuz; oil prices begin surging</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-400">March–April</p>
                  <p className="text-gray-300">Naval blockade established; sustained air operations continue</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-400">April 2026</p>
                  <p className="text-gray-300">Oil hits $126/bbl peak; global economic disruption intensifies</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-400">May 19, 2026</p>
                  <p className="text-gray-300">Pentagon submits $87.6B supplemental request to Congress</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-400">June 14, 2026</p>
                  <p className="text-gray-300">Peace deal signed; ceasefire takes effect</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-red-400">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-lg border border-gray-700 bg-gray-900 p-6">
                    <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related */}
            <section className="mb-12">
              <RelatedArticles
                articles={[
                  { title: 'Iran War 2026: Full Timeline', href: '/iran-war-2026' },
                  { title: 'Iran War Cost Breakdown', href: '/analysis/iran-war-cost-breakdown' },
                  { title: 'True Cost of the Iran Peace Deal', href: '/analysis/true-cost-iran-peace-deal' },
                  { title: 'Hormuz Crisis Analysis', href: '/analysis/hormuz-crisis' },
                  { title: 'Iran War by the Numbers', href: '/iran-war-by-the-numbers' },
                  { title: 'Hormuz Crisis & Global Economy', href: '/hormuz-crisis-global-economy' },
                ]}
              />
            </section>

            <BackToTop />
          </article>
        </div>
      </main>
    </>
  )
}
