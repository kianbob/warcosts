import { Metadata } from 'next'
import Link from 'next/link'
import FaqJsonLd from '@/components/FaqJsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'

export const metadata: Metadata = {
  title: 'Hormuz Crisis Impact on Global Economy | OpenWar',
  description:
    'How the 2026 Strait of Hormuz crisis disrupted 21% of global oil trade, spiked oil to $126/bbl, and cost US households $100 billion. Full economic analysis.',
  openGraph: {
    title: 'Hormuz Crisis Impact on Global Economy',
    description:
      'The mining and blockade of the Strait of Hormuz during the 2026 Iran War triggered the worst oil shock since 1973. Here is the full economic impact.',
    type: 'article',
  },
}

const faqs = [
  {
    question: 'How much oil flows through the Strait of Hormuz?',
    answer:
      'Approximately 20.5 million barrels per day flow through the Strait of Hormuz, representing about 21% of global oil trade and roughly one-third of all seaborne oil shipments worldwide.',
  },
  {
    question: 'How high did oil prices go during the Hormuz crisis?',
    answer:
      'Brent crude peaked at $126.40 per barrel on April 17, 2026, an 80% increase from the pre-crisis level of approximately $70 per barrel. US gasoline prices exceeded $5.40/gallon nationally.',
  },
  {
    question: 'How much did the Hormuz crisis cost US households?',
    answer:
      'Moody\'s Analytics estimated the total cost to US households at approximately $100 billion in higher energy, transportation, and consumer goods costs over the duration of the crisis.',
  },
  {
    question: 'Which countries were most affected by the Hormuz crisis?',
    answer:
      'Japan, South Korea, India, and China were the most affected, as they rely heavily on Persian Gulf oil imports transiting the strait. Japan sources 80%+ of its oil through Hormuz, South Korea 70%+, and India 60%+.',
  },
  {
    question: 'How long did it take for oil prices to recover after the peace deal?',
    answer:
      'Oil prices dropped from $126/bbl to $94.50/bbl on the day the peace deal was signed (June 14, 2026) and continued declining to ~$82/bbl by July 1. Full normalization to pre-crisis levels is expected to take 6-12 months as mine-clearing operations continue.',
  },
  {
    question: 'How many mines did Iran place in the Strait of Hormuz?',
    answer:
      'Iran deployed an estimated 2,000+ naval mines in and around the Strait of Hormuz, including contact mines, influence mines, and advanced rocket-propelled rising mines. Clearing operations are ongoing and expected to take the full 90-day window specified in the peace agreement.',
  },
]

export default function HormuzCrisisGlobalEconomyPage() {
  return (
    <>
      <ArticleSchema
        title="Hormuz Crisis Impact on Global Economy"
        description="Economic analysis of the 2026 Strait of Hormuz crisis: oil price shock, shipping disruption, global GDP impact, and recovery timeline."
        datePublished="2026-07-10"
        dateModified="2026-07-10"
        slug="hormuz-crisis-global-economy"
      />
      <FaqJsonLd faqs={faqs} />

      <main className="min-h-screen bg-gray-950 text-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Hormuz Crisis & Global Economy' },
            ]}
          />

          <article className="mt-8">
            <header className="mb-10">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Hormuz Crisis Impact on Global Economy
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                Updated July 10, 2026 — The mining and blockade of the Strait of Hormuz during the Iran
                War disrupted 21% of global oil trade, triggering the worst energy crisis since 1973.
              </p>
              <ShareButtons title="Hormuz Crisis Impact on Global Economy" />
            </header>

            {/* Overview */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">The Chokepoint That Shook the World</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                The Strait of Hormuz is a narrow waterway between Iran and Oman, just 21 nautical miles
                wide at its narrowest point. Through this slender passage flows approximately{' '}
                <strong className="text-white">20.5 million barrels of oil per day</strong> — about 21% of
                all global petroleum consumption and roughly one-third of all seaborne oil trade.
              </p>
              <p className="mb-4 text-gray-300 leading-relaxed">
                When the 2026 Iran War began on February 26, Iran responded to US strikes by mining the
                strait with an estimated 2,000+ naval mines and deploying fast attack craft, anti-ship
                cruise missiles, and coastal defense batteries to deny passage. The US countered with a
                naval blockade of Iranian ports. The combined effect was catastrophic for global energy
                markets.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Oil prices surged 80% in weeks. Shipping insurance premiums skyrocketed over 600%. Countries
                from Japan to India scrambled for alternative supplies. The ripple effects touched every
                corner of the global economy — from factory floors in Guangzhou to gas pumps in Topeka.
              </p>
            </section>

            {/* Oil Trade Through Hormuz */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">What Flows Through Hormuz</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                The strait is the world&apos;s most critical oil chokepoint. Here is what transited daily
                before the crisis:
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Commodity</th>
                      <th className="px-4 py-3 font-semibold text-right">Daily Volume</th>
                      <th className="px-4 py-3 font-semibold text-right">% of Global Trade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Crude Oil</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">17.0M bbl/day</td>
                      <td className="px-4 py-3 text-right text-red-400">~21%</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Liquefied Natural Gas (LNG)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">3.5M bbl/day equiv.</td>
                      <td className="px-4 py-3 text-right text-red-400">~25%</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Refined Products</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">2.1M bbl/day</td>
                      <td className="px-4 py-3 text-right text-red-400">~8%</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Other Cargo (non-energy)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">$1.2B/day value</td>
                      <td className="px-4 py-3 text-right text-gray-400">Significant</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Key exporting countries whose oil transits Hormuz include Saudi Arabia, Iraq, UAE, Kuwait,
                Qatar, and Iran itself. When the strait closed, the world lost access to one-fifth of its
                oil supply virtually overnight.
              </p>
            </section>

            {/* Oil Price Shock */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">The Oil Price Shock</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                The price of Brent crude — the global benchmark — rocketed from $70/barrel in late February
                to a peak of $126.40/barrel on April 17, 2026. This 80% surge was the fastest sustained
                oil price increase since the 1990 Iraqi invasion of Kuwait.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Date</th>
                      <th className="px-4 py-3 font-semibold text-right">Brent ($/bbl)</th>
                      <th className="px-4 py-3 font-semibold text-right">Change</th>
                      <th className="px-4 py-3 font-semibold">Catalyst</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">Feb 25</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">$70.40</td>
                      <td className="px-4 py-3 text-right text-gray-500">—</td>
                      <td className="px-4 py-3 text-gray-400">Baseline</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-300">Feb 27</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">$89.20</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+26.7%</td>
                      <td className="px-4 py-3 text-gray-400">US strikes begin</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">Mar 5</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">$97.80</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+38.9%</td>
                      <td className="px-4 py-3 text-gray-400">Iran mines strait</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-300">Mar 14</td>
                      <td className="px-4 py-3 text-right font-mono text-orange-400">$108.50</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+54.1%</td>
                      <td className="px-4 py-3 text-gray-400">US blockade announced</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">Mar 28</td>
                      <td className="px-4 py-3 text-right font-mono text-orange-400">$114.90</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+63.2%</td>
                      <td className="px-4 py-3 text-gray-400">First tanker struck by mine</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-300">Apr 2</td>
                      <td className="px-4 py-3 text-right font-mono text-orange-400">$118.30</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+68.0%</td>
                      <td className="px-4 py-3 text-gray-400">Multiple tanker attacks</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">Apr 17</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$126.40</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+79.5%</td>
                      <td className="px-4 py-3 text-gray-400 font-bold">Peak — Iran threatens to sink tankers</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-300">May 1</td>
                      <td className="px-4 py-3 text-right font-mono text-orange-400">$119.60</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+69.9%</td>
                      <td className="px-4 py-3 text-gray-400">US SPR release (30M bbls)</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">May 10</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">$112.70</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+60.1%</td>
                      <td className="px-4 py-3 text-gray-400">OPEC+ emergency increase</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-300">Jun 1</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">$101.20</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+43.8%</td>
                      <td className="px-4 py-3 text-gray-400">Ceasefire talks announced</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">Jun 14</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">$94.50</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+34.2%</td>
                      <td className="px-4 py-3 text-gray-400">Peace deal signed</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-300">Jul 1</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">$82.10</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">+16.6%</td>
                      <td className="px-4 py-3 text-gray-400">Partial strait reopening</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Shipping & Insurance */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Shipping Insurance &amp; War Risk Premiums</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Beyond the price of oil itself, the crisis devastated the maritime insurance market. War
                risk premiums for vessels transiting the Persian Gulf surged by over{' '}
                <strong className="text-white">600%</strong>, effectively making commercial passage
                economically unviable for most operators.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Insurance Metric</th>
                      <th className="px-4 py-3 font-semibold text-right">Pre-Crisis</th>
                      <th className="px-4 py-3 font-semibold text-right">Peak</th>
                      <th className="px-4 py-3 font-semibold text-right">Change</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">War Risk Premium (% hull value)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">0.05%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">3.5%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+6,900%</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">VLCC charter rate ($/day)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$35,000</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$185,000</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+429%</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Tanker spot rate (Ras Tanura → Yokohama)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">WS 55</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">WS 340</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">+518%</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Container shipping surcharge (Gulf)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$0</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$2,800/TEU</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Lloyd&apos;s of London designated the entire Persian Gulf as a &ldquo;war risk zone&rdquo; on
                March 8, 2026. By mid-March, most major shipping companies had suspended transit through
                the strait entirely, diverting tankers around the Cape of Good Hope — adding 10–15 days
                and $500,000–$1 million per voyage in additional fuel costs.
              </p>
            </section>

            {/* Countries Most Affected */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Countries Most Affected</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                The crisis hit Asian economies hardest, as they are the primary destinations for Persian
                Gulf crude. Countries with limited strategic petroleum reserves or alternative supply
                options faced the most acute disruption.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Country</th>
                      <th className="px-4 py-3 font-semibold text-right">Oil via Hormuz</th>
                      <th className="px-4 py-3 font-semibold text-right">% of Imports</th>
                      <th className="px-4 py-3 font-semibold text-right">Est. GDP Impact</th>
                      <th className="px-4 py-3 font-semibold">Strategic Reserve</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Japan</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">2.8M bbl/day</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">80%+</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">-1.2%</td>
                      <td className="px-4 py-3 text-gray-400">~200 days</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">South Korea</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">2.1M bbl/day</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">70%+</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">-1.4%</td>
                      <td className="px-4 py-3 text-gray-400">~90 days</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">India</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">3.2M bbl/day</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">60%+</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">-0.9%</td>
                      <td className="px-4 py-3 text-gray-400">~65 days</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">China</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">4.5M bbl/day</td>
                      <td className="px-4 py-3 text-right font-mono text-orange-400">45%</td>
                      <td className="px-4 py-3 text-right font-mono text-orange-400">-0.6%</td>
                      <td className="px-4 py-3 text-gray-400">~80 days</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">European Union</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">2.4M bbl/day</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">18%</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">-0.4%</td>
                      <td className="px-4 py-3 text-gray-400">~90 days (IEA req.)</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">United States</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">0.5M bbl/day</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">~5%</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">-0.3%</td>
                      <td className="px-4 py-3 text-gray-400">~400 days (SPR)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Japan declared an energy emergency on March 12, activating its strategic reserve for the
                first time since 2011. South Korea and India followed within days. China quietly increased
                purchases from Russia and drew on its strategic reserves without formal announcement.
              </p>
            </section>

            {/* Global GDP Impact */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Global GDP Impact</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                The IMF issued an emergency revision to its World Economic Outlook in April 2026, cutting
                global GDP growth by 0.7 percentage points for the year. The crisis was estimated to have
                reduced global GDP by approximately{' '}
                <strong className="text-white">$680 billion</strong> in 2026.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Region</th>
                      <th className="px-4 py-3 font-semibold text-right">Pre-Crisis GDP Growth</th>
                      <th className="px-4 py-3 font-semibold text-right">Revised GDP Growth</th>
                      <th className="px-4 py-3 font-semibold text-right">Reduction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Global</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">3.2%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">2.5%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">-0.7pp</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">United States</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">2.3%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">2.0%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">-0.3pp</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Euro Area</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">1.0%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">-0.4pp</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Japan</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">1.8%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">0.6%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">-1.2pp</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">China</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">4.8%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">4.2%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">-0.6pp</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">India</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">6.5%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">5.6%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">-0.9pp</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">South Korea</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">2.2%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">0.8%</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">-1.4pp</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Supply Chain Disruptions */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Supply Chain Disruptions</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                The Hormuz crisis rippled far beyond energy markets. Petrochemical feedstocks — the building
                blocks of plastics, fertilizers, and pharmaceuticals — were severely disrupted. Qatar, the
                world&apos;s largest LNG exporter, saw its shipments effectively halted for weeks.
              </p>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Key downstream impacts included:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
                <li><strong className="text-white">Fertilizer prices:</strong> Surged 45% globally, threatening food security in developing nations</li>
                <li><strong className="text-white">Plastics &amp; chemicals:</strong> Ethylene and propylene prices doubled in Asian markets</li>
                <li><strong className="text-white">Air freight:</strong> Jet fuel costs drove 25% increases in air cargo rates</li>
                <li><strong className="text-white">Aluminum smelting:</strong> Gulf-based smelters (10% of global capacity) curtailed operations</li>
                <li><strong className="text-white">Desalination:</strong> Gulf states faced water supply concerns as energy-intensive desalination costs soared</li>
              </ul>
            </section>

            {/* US Consumer Impact */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">US Consumer Impact: $100 Billion</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Despite producing more oil than it consumes, the United States was not insulated from the
                price shock. Oil is a globally priced commodity — when Brent surges, US prices follow.
                Moody&apos;s Analytics calculated the total burden on American households at approximately{' '}
                <strong className="text-white">$100 billion</strong>.
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Category</th>
                      <th className="px-4 py-3 font-semibold text-right">Est. Cost to Households</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Gasoline &amp; diesel</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$58B</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Home heating &amp; electricity</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$18B</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Higher consumer goods prices</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$14B</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Air travel surcharges</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$6B</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Food price increases (transport + fertilizer)</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$4B</td>
                    </tr>
                    <tr className="bg-gray-800 font-bold">
                      <td className="px-4 py-3 text-white">Total</td>
                      <td className="px-4 py-3 text-right font-mono text-red-300">~$100B</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Low-income households were hit hardest, spending up to 12% of income on energy versus 3% for
                upper-income households. The national average gas price peaked at $5.42/gallon, with
                California stations exceeding $7.00. Use our{' '}
                <Link href="/tools/hormuz-calculator" className="text-blue-400 underline hover:text-blue-300">
                  Hormuz Impact Calculator
                </Link>{' '}
                to estimate the cost to your household.
              </p>
            </section>

            {/* Historical Context */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Historical Context: Past Hormuz Crises</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                The 2026 crisis was not the first time the Strait of Hormuz has been threatened, but it was
                by far the most severe disruption in the waterway&apos;s history.
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Year</th>
                      <th className="px-4 py-3 font-semibold">Event</th>
                      <th className="px-4 py-3 font-semibold text-right">Oil Impact</th>
                      <th className="px-4 py-3 font-semibold text-right">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">1984–88</td>
                      <td className="px-4 py-3 text-gray-200">Tanker War (Iran–Iraq)</td>
                      <td className="px-4 py-3 text-right text-yellow-400">Moderate</td>
                      <td className="px-4 py-3 text-right text-gray-400">~4 years</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-300">1987–88</td>
                      <td className="px-4 py-3 text-gray-200">Operation Earnest Will (US tanker escorts)</td>
                      <td className="px-4 py-3 text-right text-yellow-400">Low–Moderate</td>
                      <td className="px-4 py-3 text-right text-gray-400">~14 months</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">2011–12</td>
                      <td className="px-4 py-3 text-gray-200">Iran closure threats (nuclear tensions)</td>
                      <td className="px-4 py-3 text-right text-yellow-400">Low (threats only)</td>
                      <td className="px-4 py-3 text-right text-gray-400">~6 months</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-300">2019</td>
                      <td className="px-4 py-3 text-gray-200">Tanker seizures &amp; limpet mine attacks</td>
                      <td className="px-4 py-3 text-right text-orange-400">Moderate</td>
                      <td className="px-4 py-3 text-right text-gray-400">~4 months</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300 font-bold">2026</td>
                      <td className="px-4 py-3 text-gray-200 font-bold">Iran War — full mining &amp; blockade</td>
                      <td className="px-4 py-3 text-right text-red-400 font-bold">Severe (+80%)</td>
                      <td className="px-4 py-3 text-right text-red-400 font-bold">~108 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Mining & Blockade Details */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Mining of the Strait &amp; Naval Blockade</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Iran deployed an estimated 2,000+ naval mines in the Strait of Hormuz and approaches,
                using a combination of conventional contact mines, modern influence mines triggered by
                acoustic or magnetic signatures, and advanced rocket-propelled rising mines capable of
                engaging vessels in deeper waters.
              </p>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Mines were laid by Iranian Navy frigates, IRGC fast boats, commercial dhows, and even
                civilian fishing vessels — making interdiction extremely difficult. Three commercial
                tankers and one US Navy minesweeper struck mines during the conflict.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The US-led blockade involved 45+ warships maintaining a continuous cordon around Iranian
                ports. Coalition partners contributing vessels included the UK, France, Australia, and
                Bahrain. The blockade halted Iran&apos;s 1.5M bbl/day of oil exports but also complicated
                navigation for all vessels in the region. For detailed analysis, see our{' '}
                <Link href="/analysis/hormuz-crisis" className="text-blue-400 underline hover:text-blue-300">
                  Hormuz Crisis
                </Link>{' '}
                and{' '}
                <Link href="/analysis/hormuz-economic-impact" className="text-blue-400 underline hover:text-blue-300">
                  Hormuz Economic Impact
                </Link>{' '}
                pages.
              </p>
            </section>

            {/* Recovery Timeline */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Recovery Timeline</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                The peace deal signed June 14, 2026 included a 90-day deadline for Iran to clear all mines
                from the strait, with US and coalition naval forces assisting. Recovery is proceeding but
                remains incomplete:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
                <li><strong className="text-white">Week 1 post-deal (Jun 14–21):</strong> Oil drops to $94.50; limited escort convoys resume</li>
                <li><strong className="text-white">Week 2–3 (Jun 22 – Jul 4):</strong> Western shipping lane partially cleared; oil falls to $82</li>
                <li><strong className="text-white">July 2026 (current):</strong> ~40% of mines cleared; convoys transit under escort; insurance premiums remain 200%+ above pre-crisis</li>
                <li><strong className="text-white">Target: Sep 12, 2026:</strong> Full mine clearance deadline per peace agreement</li>
                <li><strong className="text-white">Projected: Q4 2026:</strong> Full commercial traffic normalization; insurance premiums to normalize</li>
                <li><strong className="text-white">Projected: Q1 2027:</strong> Oil prices expected to return to ~$70–75/bbl range</li>
              </ul>
            </section>

            {/* Current Status */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Current Status (July 2026)</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                As of early July 2026, the Strait of Hormuz remains partially restricted. Key current
                conditions:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
                <li>Brent crude at ~$82/bbl — still 17% above pre-crisis levels</li>
                <li>One of two shipping lanes cleared and operational under naval escort</li>
                <li>~800 of 2,000+ mines cleared (40%); 4 US Navy minesweepers plus 6 coalition vessels active</li>
                <li>War risk premiums at 200% above normal — down from 6,900% peak but still elevated</li>
                <li>Lloyd&apos;s war risk zone designation remains in effect</li>
                <li>Iran cooperating with clearance per peace deal terms</li>
                <li>SPR drawdown of 30M barrels being replenished</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Track real-time oil price impacts with our{' '}
                <Link href="/analysis/oil-price-shock-2026" className="text-blue-400 underline hover:text-blue-300">
                  Oil Price Shock 2026
                </Link>{' '}
                tracker.
              </p>
            </section>

            {/* FAQ */}
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

            <section className="mb-12">
              <RelatedArticles
                articles={[
                  { title: 'What Did the Iran War Cost?', href: '/what-did-the-iran-war-cost' },
                  { title: 'Iran War by the Numbers', href: '/iran-war-by-the-numbers' },
                  { title: 'Hormuz Crisis Analysis', href: '/analysis/hormuz-crisis' },
                  { title: 'Hormuz Economic Impact', href: '/analysis/hormuz-economic-impact' },
                  { title: 'Hormuz Impact Calculator', href: '/tools/hormuz-calculator' },
                  { title: 'Oil Price Shock 2026', href: '/analysis/oil-price-shock-2026' },
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
