import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The Strait of Hormuz Crisis: Global Economic Fallout — WarCosts.org',
  description: 'How Iran\'s closure of the Strait of Hormuz is devastating the global economy. 20% of world oil, 20% of LNG, oil at $108+, gas past $5 in California. The worst energy crisis since 1973.',
  keywords: ['strait of hormuz crisis', 'hormuz economic impact', 'oil price iran war', 'hormuz oil', 'iran oil crisis', 'energy crisis 2026'],
  openGraph: {
    title: 'The Strait of Hormuz Crisis: Global Economic Fallout',
    description: '21 miles wide. 20% of global oil. Oil at $108+. The IEA chief says it\'s worse than 1973 and 1979 combined.',
    url: 'https://www.warcosts.org/analysis/hormuz-economic-impact',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Strait of Hormuz Crisis',
    description: '21 miles wide. 20% of world oil. Oil at $108. Gas past $5/gal in CA. The worst energy crisis in 50 years.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/hormuz-economic-impact',
  },
}

export default function HormuzEconomicImpactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Strait of Hormuz Crisis: Global Economic Fallout',
            description: 'How the closure of the Strait of Hormuz is devastating the global economy — oil, gas, food, and trade.',
            datePublished: '2026-03-08T00:00:00Z',
            dateModified: '2026-03-27T22:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/hormuz-economic-impact' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Strait of Hormuz Crisis' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Energy Crisis — Updated March 27, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Strait of Hormuz Crisis
        </h1>
        <p className="text-xl text-stone-300 mb-4">Global Economic Fallout From the World&apos;s Most Important Chokepoint</p>
        <p className="text-stone-400 text-lg">
          Twenty-one miles wide. Twenty percent of the world&apos;s oil. Twenty percent of global LNG. Thirty percent
          of fertilizer shipments. When Iran closed the Strait of Hormuz on Day 2 of Operation Epic Fury,
          the IEA chief called it &quot;worse than 1973 and 1979 combined.&quot; He wasn&apos;t exaggerating.
        </p>
      </div>

      <ShareButtons title="The Strait of Hormuz Crisis: Global Economic Fallout" />

      {/* Key Numbers */}
      <div className="bg-stone-900 border border-red-900/60 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3 mb-5">
          <span className="text-2xl">⛽</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">The Numbers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$108+</div>
            <div className="text-stone-400 text-sm">Oil per Barrel</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">+80%</div>
            <div className="text-stone-400 text-sm">Price Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">20%</div>
            <div className="text-stone-400 text-sm">Global Oil Through Hormuz</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$5+</div>
            <div className="text-stone-400 text-sm">Gas/Gal (California)</div>
          </div>
        </div>
        <p className="text-stone-500 text-xs mt-4">Sources: EIA crude oil spot prices; AAA gas price tracker; IEA World Energy Outlook</p>
      </div>

      {/* What Is Hormuz */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          What Is the Strait of Hormuz?
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-6 mb-6">
          <p className="text-stone-700 mb-4">
            The Strait of Hormuz is a narrow waterway between Iran and Oman connecting the Persian Gulf to the
            Gulf of Oman and the open ocean. At its narrowest, it is just <strong>21 miles wide</strong>, with
            shipping lanes only 2 miles wide in each direction. It is the single most important energy chokepoint
            on Earth.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 mb-2">What Flows Through Hormuz</h3>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span><strong>~21 million barrels of oil per day</strong> — 20% of global supply</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span><strong>~20% of global LNG</strong> (liquefied natural gas) — critical for Asia and Europe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span><strong>~30% of global fertilizer shipments</strong> — food security for billions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span><strong>$1.2 billion in goods per day</strong> — raw trade value</span>
                </li>
              </ul>
              <p className="text-stone-500 text-xs mt-2">Source: EIA, &quot;World Oil Transit Chokepoints&quot;; IEA; UN COMTRADE</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 mb-2">Countries Most Dependent</h3>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span><strong>Japan:</strong> 80% of oil imports through Hormuz</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span><strong>South Korea:</strong> 70% of oil imports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span><strong>India:</strong> 60% of oil imports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span><strong>China:</strong> 40% of oil imports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span><strong>EU:</strong> 25% of oil imports</span>
                </li>
              </ul>
              <p className="text-stone-500 text-xs mt-2">Source: IEA import dependency data; national energy ministry reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oil Price Timeline */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Oil Price Timeline: From $60 to $108 in 28 Days
        </h2>

        <div className="space-y-3">
          {[
            { date: 'Jan 1, 2026', price: '$60.12', event: 'Pre-war baseline', change: '—' },
            { date: 'Feb 28 (Day 1)', price: '$67.40', event: 'Strikes begin — markets close before reaction', change: '+12%' },
            { date: 'Mar 1 (Day 2)', price: '$82.50', event: 'Iran closes Hormuz. Oil spikes 22% in one day.', change: '+37%' },
            { date: 'Mar 3 (Day 4)', price: '$89.70', event: 'Multi-front war. Bahrain refinery attacked.', change: '+49%' },
            { date: 'Mar 7 (Day 8)', price: '$94.30', event: 'US strikes Iranian oil infrastructure.', change: '+57%' },
            { date: 'Mar 8 (Day 9)', price: '$100.20', event: 'Oil breaks $100 for first time since 2022.', change: '+67%' },
            { date: 'Mar 11 (Day 12)', price: '$101.80', event: 'US crude (WTI) also passes $101.', change: '+69%' },
            { date: 'Mar 18 (Day 19)', price: '$105.40', event: 'Iran begins "toll booth" regime in Hormuz.', change: '+75%' },
            { date: 'Mar 27 (Day 28)', price: '$108.20', event: 'Brent crude at $108+. No ceiling in sight.', change: '+80%' },
          ].map((entry) => (
            <div key={entry.date} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-stone-900 text-sm">{entry.date}</span>
                <div className="text-right">
                  <span className="text-red-600 font-bold">{entry.price}</span>
                  <span className="text-stone-400 text-xs ml-2">{entry.change}</span>
                </div>
              </div>
              <p className="text-stone-600 text-sm">{entry.event}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-xs mt-3">Source: EIA spot prices; Bloomberg commodity data; Reuters market reports</p>
      </section>

      {/* Gas Prices */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          At the Pump: What Americans Are Paying
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <p className="text-stone-700 mb-6">
            Every $10 increase in crude oil prices adds approximately <strong>$0.25 per gallon</strong> at the pump.
            With oil up $48 from pre-war levels, Americans are paying roughly $1.20 more per gallon — and it&apos;s
            still climbing.
          </p>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-stone-100 pb-3">
              <span className="text-stone-700 font-medium">California</span>
              <span className="text-red-600 font-bold text-lg">$5.40+/gal</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-100 pb-3">
              <span className="text-stone-700 font-medium">Hawaii</span>
              <span className="text-red-600 font-bold text-lg">$5.15+/gal</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-100 pb-3">
              <span className="text-stone-700 font-medium">Washington State</span>
              <span className="text-red-600 font-bold text-lg">$4.90+/gal</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-100 pb-3">
              <span className="text-stone-700 font-medium">National Average</span>
              <span className="text-red-600 font-bold text-lg">$4.15+/gal</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-700 font-medium">Pre-War National Average</span>
              <span className="text-stone-500 font-bold text-lg">$3.05/gal</span>
            </div>
          </div>
          <p className="text-stone-500 text-xs mt-4">Source: AAA Fuel Gauge Report; GasBuddy daily tracker</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
          <p className="text-amber-800 text-sm">
            <strong>The math for a typical American family:</strong> The average US household uses ~1,200 gallons
            of gas per year. At $1.20/gallon more, that&apos;s <strong>$1,440 per year in additional fuel costs</strong> —
            before accounting for higher food and goods prices from increased transportation costs.
          </p>
        </div>
      </section>

      {/* Iran's Toll Booth */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Iran&apos;s &quot;Toll Booth&quot;: Extortion at Sea
        </h2>

        <div className="bg-red-950 text-white rounded-xl p-8">
          <p className="text-stone-300 mb-4">
            Around Day 19, Iran shifted strategy. Rather than completely blocking the Strait, the IRGC Navy began
            operating what analysts are calling a <strong className="text-red-400">&quot;toll booth&quot; regime</strong> —
            selectively allowing commercial vessels to pass in exchange for payments of millions of dollars per transit.
          </p>

          <ul className="space-y-3 text-stone-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>IRGC fast boats intercept commercial vessels attempting to transit the Strait</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Payments of <strong>$2-5 million per vessel</strong> demanded for safe passage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>US-flagged and US-allied vessels are denied passage entirely</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Chinese and Russian-flagged vessels are allowed free passage — creating a two-tier system</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Lloyd&apos;s of London has classified the entire Persian Gulf as a &quot;war risk zone&quot; — insurance
              premiums have increased <strong>10-15x</strong></span>
            </li>
          </ul>

          <p className="text-stone-400 mt-4">
            The toll booth strategy is generating an estimated <strong className="text-red-400">$50-100 million
            per day</strong> for Iran while allowing it to claim it hasn&apos;t &quot;completely&quot; closed the Strait —
            a distinction with enormous legal and diplomatic implications.
          </p>
          <p className="text-stone-500 text-xs mt-3">Source: Lloyd&apos;s List; Maritime security advisories; Tanker Trackers satellite data</p>
        </div>
      </section>

      {/* Global Impact */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Global Shockwaves: Country by Country
        </h2>

        <div className="space-y-4">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-2">🇵🇭 Philippines — National Energy Emergency</h3>
            <p className="text-stone-600">
              President Marcos Jr. declared a national energy emergency on Day 10. The Philippines imports 97% of
              its oil, much of it routed through or sourced from the Persian Gulf. Rolling blackouts have begun in
              Manila. Public transport strikes erupted as jeepney and bus operators can&apos;t afford fuel. The
              government is rationing diesel for fishing boats — threatening the food supply of 115 million people.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: Philippine Department of Energy; Reuters Manila bureau</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-2">🇰🇷 South Korea — Conservation Mandates</h3>
            <p className="text-stone-600">
              South Korea gets 70% of its oil through Hormuz. The government has imposed emergency conservation
              measures: shorter public showers, restricted EV charging during peak hours, reduced heating in
              government buildings, and highway speed limits reduced to 100 km/h. Samsung and Hyundai have warned
              of production slowdowns. The won has dropped 8% against the dollar.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: Korea Energy Economics Institute; Yonhap News Agency</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-2">🇪🇸 Spain — €5 Billion Emergency Package</h3>
            <p className="text-stone-600">
              Spain announced a €5 billion emergency aid package including fuel subsidies, a rent freeze, and
              emergency payments for low-income households. Spain imports 60% of its natural gas from Algeria —
              but the global LNG crunch caused by Hormuz&apos;s closure has spiked prices across all suppliers.
              Spanish electricity prices have doubled since February.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: Spanish Ministry of Finance; Eurostat energy price index</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-2">🇩🇪 Germany &amp; 🇵🇱 Poland — Fuel Price Controls</h3>
            <p className="text-stone-600">
              Both Germany and Poland have imposed emergency fuel price controls — the first such measures since
              the 2022 Russian gas crisis. Germany&apos;s &quot;Energiepreisbremse 2.0&quot; caps petrol at €2.00/liter.
              Poland&apos;s government has temporarily eliminated fuel excise taxes. Europe was already fragile from
              the Russia-Ukraine energy decoupling — the Hormuz crisis hit an economy with no buffer.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: German Federal Ministry for Economic Affairs; Polish Ministry of Finance</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-2">🇮🇳 India — Fertilizer &amp; Food Crisis</h3>
            <p className="text-stone-600">
              India is facing a dual crisis. First, 60% of its oil imports come through Hormuz, spiking fuel prices.
              Second — and potentially more devastating — <strong>30% of global fertilizer shipments transit Hormuz</strong>.
              India, the world&apos;s second-largest consumer of fertilizer, is facing shortages during the critical
              Rabi crop season. The government has doubled fertilizer subsidies to ₹2.5 trillion ($30B) but supplies
              are physically unavailable.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: Indian Ministry of Chemicals and Fertilizers; FAO food price monitoring</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-2">🇯🇵 Japan — Strategic Reserve Release</h3>
            <p className="text-stone-600">
              Japan — 80% dependent on Hormuz oil — has released strategic petroleum reserves for the first time
              since 2022. The government has authorized release of 15 million barrels (about 10 days of imports)
              but admits this is a stopgap. Japanese refiners are scrambling for alternative supplies from the
              Americas, but shipping logistics and contracts take months to redirect. Toyota, Honda, and Nissan
              have all announced production cuts.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: Japan Ministry of Economy, Trade and Industry; Reuters Tokyo bureau</p>
          </div>
        </div>
      </section>

      {/* Historical Comparison */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Historical Context: The Three Great Oil Crises
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-stone-200 rounded-lg overflow-hidden text-sm">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="text-left p-3">Crisis</th>
                <th className="text-left p-3">Price Impact</th>
                <th className="text-left p-3">Supply Disrupted</th>
                <th className="text-left p-3">Duration</th>
                <th className="text-left p-3">GDP Impact (US)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="p-3 font-medium text-stone-900">1973 Arab Embargo</td>
                <td className="p-3 text-stone-600">+300% ($3 → $12)</td>
                <td className="p-3 text-stone-600">~5% of global supply</td>
                <td className="p-3 text-stone-600">6 months</td>
                <td className="p-3 text-stone-600">-3.2% recession</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 font-medium text-stone-900">1979 Iranian Revolution</td>
                <td className="p-3 text-stone-600">+150% ($14 → $35)</td>
                <td className="p-3 text-stone-600">~7% of global supply</td>
                <td className="p-3 text-stone-600">~2 years</td>
                <td className="p-3 text-stone-600">-2.2% recession</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-red-600 font-bold">2026 Hormuz Crisis</td>
                <td className="p-3 text-red-600 font-bold">+80% ($60 → $108+)</td>
                <td className="p-3 text-red-600 font-bold">~20% of global supply</td>
                <td className="p-3 text-red-600 font-bold">28 days (ongoing)</td>
                <td className="p-3 text-red-600 font-bold">TBD (est. -2 to -4%)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 border-l-4 border-red-600 rounded-r-lg p-6 mt-6">
          <p className="text-stone-700">
            <strong>Why the IEA chief said &quot;worse than 1973 and 1979 combined&quot;:</strong> The 1973 embargo
            removed ~5% of global oil. The 1979 revolution removed ~7%. The Hormuz closure threatens <strong>20%</strong>.
            The percentage increase in price is lower (so far) because the global economy is less oil-intensive than
            in the 1970s — but the absolute volume of disrupted supply is unprecedented. And unlike 1973, there is
            no OPEC spare capacity to compensate. Saudi Arabia&apos;s own infrastructure has been targeted.
          </p>
          <p className="text-stone-500 text-xs mt-2">Source: IEA press conference (Mar 10, 2026); historical data from EIA, Federal Reserve</p>
        </div>
      </section>

      {/* The 2019 Preview */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          2019: The Preview Nobody Heeded
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <p className="text-stone-700 mb-4">
            In June 2019, Iran shot down a US RQ-4A Global Hawk drone over the Strait. In September 2019,
            drone and missile attacks (attributed to Iran) struck Saudi Aramco facilities at Abqaiq and Khurais,
            temporarily removing <strong>5.7 million barrels per day</strong> — about 5% of global supply.
            Oil spiked 15% in one day.
          </p>
          <p className="text-stone-700 mb-4">
            Those incidents were warnings. Analysts at the time wrote papers titled &quot;What If Hormuz
            Actually Closes?&quot; The answer was always the same: global economic catastrophe. But the question
            seemed theoretical. Nobody expected a US president to start a war that <em>guaranteed</em>
            Hormuz would close.
          </p>
          <p className="text-stone-700">
            In 2019, oil spiked 15% from a partial, temporary disruption. In 2026, oil has risen 80% from a
            near-total, ongoing disruption. The 2019 incident was a tremor. The 2026 crisis is the earthquake.
          </p>
          <p className="text-stone-500 text-xs mt-3">Source: EIA; Saudi Aramco damage assessment; DIA intelligence timeline</p>
        </div>
      </section>

      {/* Food Crisis */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Coming Food Crisis
        </h2>

        <div className="bg-red-950 text-white rounded-xl p-8">
          <p className="text-stone-300 mb-4">
            Hormuz isn&apos;t just about oil. <strong className="text-red-400">30% of global fertilizer shipments</strong>
            transit the Strait — primarily potash and phosphates from the Gulf states. The disruption is hitting
            the global food system at its foundation:
          </p>

          <ul className="space-y-3 text-stone-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span><strong>Fertilizer prices up 45%</strong> since February — approaching 2022 peaks
              (when Russia-Ukraine disrupted supply)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span><strong>US farmers &quot;begging for relief&quot;</strong> — spring planting season coincides
              with the price spike, threatening the 2026 harvest</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span><strong>FAO Food Price Index up 18%</strong> in March — fastest monthly increase since 2022</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span><strong>WFP warns of &quot;cascading hunger crisis&quot;</strong> in already-fragile regions:
              Yemen, East Africa, South Asia</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>The cruel irony: <strong>Yemen, already facing famine, is being further starved</strong> by a
              Strait closure that its own Houthi allies helped provoke</span>
            </li>
          </ul>
          <p className="text-stone-500 text-xs mt-4">Source: FAO; WFP; USDA fertilizer price index; American Farm Bureau Federation</p>
        </div>
      </section>

      {/* Market Impact */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Financial Markets: Five Weeks of Bleeding
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-sm text-stone-500 mb-1">S&amp;P 500</div>
              <div className="text-3xl font-bold text-red-600">-12.4%</div>
              <div className="text-sm text-stone-500">Since Feb 28</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-stone-500 mb-1">NASDAQ</div>
              <div className="text-3xl font-bold text-red-600">-15.8%</div>
              <div className="text-sm text-stone-500">Since Feb 28</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-stone-500 mb-1">Dow Jones</div>
              <div className="text-3xl font-bold text-red-600">-10.2%</div>
              <div className="text-sm text-stone-500">Since Feb 28</div>
            </div>
          </div>

          <p className="text-stone-700 mb-4">
            US equity markets have posted <strong>5 consecutive weeks of losses</strong> — the longest losing streak
            since the COVID crash of March 2020. The S&amp;P 500 has shed over <strong>$5 trillion in market
            capitalization</strong>. The VIX (fear index) has averaged above 30 for 4 straight weeks.
          </p>
          <p className="text-stone-700">
            The only sectors in the green: defense contractors (+15-22%), oil companies (+30-40%), and gold
            miners (+25%). Everyone else is getting hammered. Airlines, shipping companies, and consumer
            discretionary stocks have been hit hardest.
          </p>
          <p className="text-stone-500 text-xs mt-3">Source: S&amp;P Global; NASDAQ; Bloomberg terminal data</p>
        </div>
      </section>

      {/* What Comes Next */}
      <section className="my-12">
        <div className="bg-stone-100 border-l-4 border-red-600 rounded-r-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">What Comes Next?</h2>
          <p className="text-stone-700 mb-4">
            The longer Hormuz remains disrupted, the worse every metric gets. Goldman Sachs projects oil at
            <strong> $130-150/barrel</strong> if the crisis extends through Q2 2026. The IMF has warned of a
            <strong> global recession</strong> if the Strait isn&apos;t reopened within 60 days. And there is no
            diplomatic pathway to reopening it while bombs are still falling on Iran.
          </p>
          <p className="text-stone-700">
            The fundamental contradiction of Operation Epic Fury: the US went to war partly to secure
            energy stability, and in doing so created the worst energy crisis in 50 years. The Strait of
            Hormuz is Iran&apos;s ultimate weapon — and the US handed them the reason to use it.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/iran-war-world-impact" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Global Impact: Countries Not Fighting →</div>
            <div className="text-stone-500 text-sm">How the Iran war is breaking countries that aren&apos;t involved</div>
          </Link>
          <Link href="/analysis/iran-war-cost-breakdown" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran War Cost Breakdown →</div>
            <div className="text-stone-500 text-sm">$51.2B in 28 days — every dollar tracked</div>
          </Link>
          <Link href="/analysis/oil-and-war" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Oil and War →</div>
            <div className="text-stone-500 text-sm">The long history of American wars and energy</div>
          </Link>
          <Link href="/analysis/iran-day-by-day" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran 2026: Day by Day →</div>
            <div className="text-stone-500 text-sm">Complete timeline of Operation Epic Fury</div>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
