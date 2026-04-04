import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'How the Iran War Is Breaking Countries That Aren\'t Fighting — WarCosts.org',
  description: 'The Iran war\'s global collateral damage: Philippines energy emergency, South Korea rationing, Spain €5B bailout, India food crisis, US farmers begging for relief. WTO says worst trade disruptions in 80 years.',
  keywords: ['iran war global impact', 'iran war world economy', 'iran war economic impact', 'hormuz global crisis', 'iran war food crisis'],
  openGraph: {
    title: 'How the Iran War Is Breaking Countries That Aren\'t Fighting',
    description: 'Philippines: energy emergency. South Korea: shorter showers. Spain: €5B bailout. India: food crisis. The war everyone is paying for.',
    url: 'https://www.warcosts.org/analysis/iran-war-world-impact',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Iran War Is Breaking Countries That Aren\'t Fighting',
    description: 'Oil up 75%. 5 weeks of stock losses. WTO: worst trade disruptions in 80 years. The global fallout.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/iran-war-world-impact',
  },
}

export default function IranWarWorldImpactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How the Iran War Is Breaking Countries That Aren\'t Fighting',
            description: 'The global economic and humanitarian fallout of Operation Epic Fury on non-combatant nations.',
            datePublished: '2026-03-18T00:00:00Z',
            dateModified: '2026-03-27T22:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/iran-war-world-impact' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Iran War World Impact' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Global Impact — Updated March 27, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          How the Iran War Is Breaking Countries That Aren&apos;t Fighting
        </h1>
        <p className="text-xl text-stone-300 mb-4">The Collateral Damage No One Voted For</p>
        <p className="text-stone-400 text-lg">
          The Philippines declared an energy emergency. South Korea is rationing showers. Spain passed a €5 billion
          bailout. India faces a fertilizer crisis. American farmers are begging for relief. The WTO calls it the
          &quot;worst trade disruption in 80 years.&quot; This is what happens when you close the world&apos;s most
          important oil chokepoint.
        </p>
      </div>

      <ShareButtons title="How the Iran War Is Breaking Countries That Aren't Fighting" />

      {/* Global Dashboard */}
      <div className="bg-stone-900 border border-red-900/60 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3 mb-5">
          <span className="text-2xl">🌍</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">Global Dashboard — Day 35</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">+75%</div>
            <div className="text-stone-400 text-sm">Oil Since January</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">5 wks</div>
            <div className="text-stone-400 text-sm">Consecutive Market Losses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">80 yrs</div>
            <div className="text-stone-400 text-sm">Worst Trade Disruption (WTO)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">30%</div>
            <div className="text-stone-400 text-sm">Fertilizer Ships via Hormuz</div>
          </div>
        </div>
        <p className="text-stone-500 text-xs mt-4">Sources: EIA; S&amp;P Global; WTO Director-General statement (Mar 22); IFA fertilizer trade data</p>
      </div>

      {/* Country by Country */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Country by Country: The Damage Report
        </h2>

        <div className="space-y-6">
          {/* Philippines */}
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">🇵🇭</span>
              <div>
                <h3 className="font-bold text-stone-900 text-xl">Philippines — National Energy Emergency</h3>
                <p className="text-red-600 text-sm font-medium">Severity: Critical</p>
              </div>
            </div>
            <p className="text-stone-600 mb-4">
              The Philippines imports <strong>97% of its oil</strong>, much of it sourced from or routed through
              the Persian Gulf. President Marcos Jr. declared a national energy emergency on March 9 — the first
              since Typhoon Haiyan in 2013.
            </p>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Rolling blackouts</strong> in Manila and Cebu — 4-6 hours per day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Transport strikes</strong> — jeepney and bus operators can&apos;t afford diesel. Manila commuters stranded.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Fishing fleet grounded</strong> — diesel rationed for fishing boats, threatening protein supply for 115M people</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Peso down 11%</strong> against the dollar — worst depreciation since the 1997 Asian financial crisis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span>Government redirecting education and health funds to emergency fuel subsidies</span>
              </li>
            </ul>
            <p className="text-stone-500 text-xs mt-3">Source: Philippine Department of Energy; Bangko Sentral ng Pilipinas; Reuters Manila</p>
          </div>

          {/* South Korea */}
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">🇰🇷</span>
              <div>
                <h3 className="font-bold text-stone-900 text-xl">South Korea — Conservation Emergency</h3>
                <p className="text-red-600 text-sm font-medium">Severity: High</p>
              </div>
            </div>
            <p className="text-stone-600 mb-4">
              South Korea gets <strong>70% of its oil imports through Hormuz</strong>. The government has imposed
              the most aggressive energy conservation measures since the 1973 oil crisis.
            </p>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Public shower time limits</strong> — government facilities restricted to 5 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>EV charging restricted</strong> during peak hours (10am-6pm) to conserve grid power</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Government building heating reduced</strong> to 18°C (64°F)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Highway speed limits reduced</strong> to 100 km/h to save fuel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Samsung and Hyundai warn of production slowdowns</strong> — semiconductor and auto manufacturing at risk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Won down 8%</strong> against the dollar</span>
              </li>
            </ul>
            <p className="text-stone-500 text-xs mt-3">Source: Korea Energy Economics Institute; Yonhap; Korea Times</p>
          </div>

          {/* Spain */}
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">🇪🇸</span>
              <div>
                <h3 className="font-bold text-stone-900 text-xl">Spain — €5 Billion Emergency Package</h3>
                <p className="text-amber-600 text-sm font-medium">Severity: High</p>
              </div>
            </div>
            <p className="text-stone-600 mb-4">
              Spain announced its largest emergency economic package since COVID-19 — <strong>€5 billion</strong>
              in direct aid to cushion the energy shock.
            </p>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Fuel subsidies</strong> of €0.20/liter for all drivers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Rent freeze</strong> — landlords prohibited from raising rents for 12 months</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Emergency payments</strong> of €400/month for low-income households</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Electricity prices doubled</strong> since February — despite Spain&apos;s high renewable share</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span>The global LNG crunch has spiked prices for all gas suppliers, not just Hormuz-dependent ones</span>
              </li>
            </ul>
            <p className="text-stone-500 text-xs mt-3">Source: Spanish Ministry of Finance; Eurostat; El País</p>
          </div>

          {/* India */}
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">🇮🇳</span>
              <div>
                <h3 className="font-bold text-stone-900 text-xl">India — Fertilizer &amp; Food Emergency</h3>
                <p className="text-red-600 text-sm font-medium">Severity: Critical</p>
              </div>
            </div>
            <p className="text-stone-600 mb-4">
              India faces a dual crisis: <strong>60% of its oil</strong> and a critical share of its fertilizer
              imports transit the Strait of Hormuz. The timing is devastating — the crisis hit during the
              Rabi crop harvesting and Kharif planting preparation season.
            </p>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Fertilizer shortages</strong> — physical supply unavailable regardless of subsidies. Government doubled subsidies to ₹2.5T ($30B)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Food price inflation at 14%</strong> — worst since 2013. Onion and cooking oil prices doubled.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Fuel prices hiked</strong> — petrol past ₹120/liter in Mumbai (~$5.80/gallon)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Rupee down 6%</strong> against the dollar — RBI burning foreign reserves to defend currency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span>Modi government quietly increasing Russian oil purchases — political strain with Washington</span>
              </li>
            </ul>
            <p className="text-stone-500 text-xs mt-3">Source: Indian Ministry of Chemicals and Fertilizers; RBI; FAO India food price monitoring</p>
          </div>

          {/* Germany & Poland */}
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">🇩🇪🇵🇱</span>
              <div>
                <h3 className="font-bold text-stone-900 text-xl">Germany &amp; Poland — Fuel Price Controls</h3>
                <p className="text-amber-600 text-sm font-medium">Severity: High</p>
              </div>
            </div>
            <p className="text-stone-600 mb-4">
              Europe was already fragile from the 2022-2024 Russia energy decoupling. The Hormuz crisis hit an
              economy with no buffer left.
            </p>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Germany: &quot;Energiepreisbremse 2.0&quot;</strong> — petrol capped at €2.00/liter; diesel at €1.90/liter</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Poland: fuel excise tax suspended</strong> entirely — estimated €2.3B revenue loss</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span>German industrial production down 3.2% in March — recession fears intensifying</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span>BASF, Europe&apos;s largest chemical company, announced production cuts at Ludwigshafen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span>Scholz warned of &quot;de-industrialization&quot; if crisis continues beyond Q2</span>
              </li>
            </ul>
            <p className="text-stone-500 text-xs mt-3">Source: German Federal Ministry for Economic Affairs; Polish Ministry of Finance; Destatis; Eurostat</p>
          </div>

          {/* United States */}
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">🇺🇸</span>
              <div>
                <h3 className="font-bold text-stone-900 text-xl">United States — Farmers &amp; Markets Reeling</h3>
                <p className="text-amber-600 text-sm font-medium">Severity: High</p>
              </div>
            </div>
            <p className="text-stone-600 mb-4">
              The US is both the architect of the war and a major victim of its economic consequences.
            </p>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>American farmers &quot;begging for relief&quot;</strong> — fertilizer prices up 45%, diesel up 40%,
                during spring planting season. Farm Bureau warns of 15-20% planting reduction.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Gas prices</strong>: national average $4.15+, California past $5.40. Every $0.01 increase
                costs US consumers $1.4 billion annually.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>S&amp;P 500 down 12.4%</strong> since Feb 28. NASDAQ down 15.8%. Five consecutive
                weeks of losses — worst streak since COVID crash.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Consumer confidence</strong> at lowest level since June 2022 (Conference Board)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Trucking industry</strong> reporting 20% cost increase — will cascade through every consumer good</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">▸</span>
                <span><strong>Airlines cutting routes</strong> — jet fuel up 55%. Ticket prices rising 15-25% for summer.</span>
              </li>
            </ul>
            <p className="text-stone-500 text-xs mt-3">Source: American Farm Bureau Federation; AAA; S&amp;P Global; Conference Board; American Trucking Association</p>
          </div>
        </div>
      </section>

      {/* Trade Disruptions */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          &quot;Worst Trade Disruptions in 80 Years&quot;
        </h2>

        <div className="bg-red-950 text-white rounded-xl p-8">
          <p className="text-stone-300 mb-4">
            WTO Director-General Ngozi Okonjo-Iweala said on March 22 that the Hormuz crisis represents the
            <strong className="text-red-400"> &quot;worst trade disruptions in 80 years&quot;</strong> — worse than
            COVID supply chain chaos, worse than the Suez Canal blockage, worse than any single event since World War II.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-bold text-red-400 mb-3">What&apos;s Disrupted</h3>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">▸</span>
                  <span><strong>20% of global oil</strong> — no chokepoint has ever been this disrupted</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">▸</span>
                  <span><strong>20% of global LNG</strong> — Europe and Asia competing for limited supply</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">▸</span>
                  <span><strong>30% of fertilizer shipments</strong> — food production at risk globally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">▸</span>
                  <span><strong>Container shipping</strong> — rerouting around Africa adds 10-14 days and $1M+ per voyage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">▸</span>
                  <span><strong>Insurance premiums</strong> — Lloyd&apos;s war risk zone means 10-15x higher shipping insurance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-red-400 mb-3">Cascading Effects</h3>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">▸</span>
                  <span>Global GDP growth forecast <strong>cut from 3.1% to 1.8%</strong> (IMF revision)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">▸</span>
                  <span>Inflation <strong>re-accelerating</strong> after 2 years of progress — US CPI forecast revised up to 5.5%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">▸</span>
                  <span>Fed <strong>rate cut expectations evaporated</strong> — markets now pricing in rate HIKES</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">▸</span>
                  <span><strong>Emerging market debt crisis</strong> brewing — countries borrowing dollars to buy oil</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">▸</span>
                  <span><strong>Global recession</strong> probable if crisis extends beyond 60 days (IMF warning)</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-stone-500 text-xs mt-4">Source: WTO; IMF World Economic Outlook revision (Mar 2026); Federal Reserve; Lloyd&apos;s of London</p>
        </div>
      </section>

      {/* Food Crisis */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Food Crisis Nobody Saw Coming
        </h2>

        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <p className="text-stone-700 mb-4">
            When people hear &quot;Strait of Hormuz,&quot; they think oil. But <strong>30% of global fertilizer
            shipments</strong> also transit the Strait — potash and phosphates from the Gulf states that feed
            the world&apos;s crops. The disruption is creating a slow-motion food crisis:
          </p>

          <div className="space-y-4 mt-6">
            <div className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 mb-2">Fertilizer Prices: +45%</h3>
              <p className="text-stone-600 text-sm">
                DAP (diammonium phosphate) has risen from $520/ton to $755/ton since February. Urea is up 38%.
                Potash is up 52%. These increases rival the 2022 spike caused by the Russia-Ukraine war —
                but this time, the physical supply is disrupted, not just the market price.
              </p>
              <p className="text-stone-500 text-xs mt-2">Source: World Bank Commodity Price Data; Green Markets fertilizer index</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 mb-2">US Farmers: Spring Planting at Risk</h3>
              <p className="text-stone-600 text-sm">
                The American Farm Bureau Federation warned that farmers face a &quot;perfect storm&quot;: fertilizer
                prices up 45%, diesel up 40%, and financing costs elevated from high interest rates. An
                estimated <strong>15-20% reduction in planted acreage</strong> is expected for the 2026 season —
                which means less food in 2027. The Farm Bureau president said farmers are &quot;begging for
                relief that isn&apos;t coming.&quot;
              </p>
              <p className="text-stone-500 text-xs mt-2">Source: American Farm Bureau Federation; USDA planting intentions survey</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 mb-2">FAO Warning: Global Food Prices Surging</h3>
              <p className="text-stone-600 text-sm">
                The FAO Food Price Index rose <strong>18% in March 2026</strong> — the fastest monthly increase
                since March 2022 (when the Ukraine war spiked food prices). Cooking oil, cereals, and dairy
                are the hardest hit categories. The World Food Programme warns that <strong>45 million people
                in 37 countries</strong> are &quot;one step from famine&quot; — and the Hormuz crisis is pushing
                them over the edge.
              </p>
              <p className="text-stone-500 text-xs mt-2">Source: FAO; WFP; IFPRI food security monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Markets */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Financial Markets: Five Weeks of Pain
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <h3 className="font-bold text-stone-900 mb-3">Winners</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-stone-600 text-sm">Defense contractors (RTX, LMT, NOC)</span>
                <span className="text-green-600 font-bold">↑ 15-22%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-600 text-sm">Oil majors (XOM, CVX, BP)</span>
                <span className="text-green-600 font-bold">↑ 30-40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-600 text-sm">Gold</span>
                <span className="text-green-600 font-bold">↑ 18%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-600 text-sm">Gold miners (NEM, GOLD)</span>
                <span className="text-green-600 font-bold">↑ 25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-600 text-sm">US Treasury bonds (flight to safety)</span>
                <span className="text-green-600 font-bold">↑ yields down</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <h3 className="font-bold text-stone-900 mb-3">Losers</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-stone-600 text-sm">S&amp;P 500</span>
                <span className="text-red-600 font-bold">↓ 12.4%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-600 text-sm">NASDAQ</span>
                <span className="text-red-600 font-bold">↓ 15.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-600 text-sm">Airlines (DAL, UAL, AAL)</span>
                <span className="text-red-600 font-bold">↓ 25-35%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-600 text-sm">Cruise lines (CCL, RCL)</span>
                <span className="text-red-600 font-bold">↓ 30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-600 text-sm">Emerging market currencies</span>
                <span className="text-red-600 font-bold">↓ 5-15%</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-stone-600 mt-6">
          The S&amp;P 500 has lost over <strong>$5 trillion in market capitalization</strong> since February 28.
          For context, that&apos;s more than the entire GDP of Japan. The average American 401(k) has lost
          approximately $15,000-$25,000 in value — a hidden cost of war that doesn&apos;t appear in any Pentagon
          budget request.
        </p>
        <p className="text-stone-500 text-xs mt-2">Source: S&amp;P Global; Bloomberg; Vanguard 401(k) balance tracker</p>
      </section>

      {/* The Bigger Picture */}
      <section className="my-12">
        <div className="bg-stone-100 border-l-4 border-red-600 rounded-r-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">
            The War Tax Nobody Voted For
          </h2>
          <p className="text-stone-700 mb-4">
            Operation Epic Fury was launched without congressional authorization. But every person on Earth
            is paying for it. Higher gas prices are a war tax. Higher food prices are a war tax. Falling
            retirement accounts are a war tax. Energy emergencies in the Philippines are a war tax.
          </p>
          <p className="text-stone-700 mb-4">
            The direct military cost of the war is $51.2 billion in 28 days. The economic cost to the
            global economy is already <strong>orders of magnitude larger</strong>. The S&amp;P 500 alone has
            lost $5 trillion. Global oil price increases are costing the world economy an estimated
            $3.4 trillion per year in reduced GDP. Fertilizer and food inflation is threatening the
            nutrition of hundreds of millions.
          </p>
          <p className="text-stone-700">
            This is what it means to close the Strait of Hormuz. Not just an oil crisis — a <em>everything</em> crisis.
            And it was entirely predictable. Every war game, every think tank report, every intelligence
            assessment for the past 20 years said the same thing: a war with Iran means Hormuz closes,
            and when Hormuz closes, the world breaks.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/hormuz-economic-impact" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Strait of Hormuz Deep Dive →</div>
            <div className="text-stone-500 text-sm">The chokepoint that controls the global economy</div>
          </Link>
          <Link href="/analysis/iran-war-cost-breakdown" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran War Cost Breakdown →</div>
            <div className="text-stone-500 text-sm">The military spending — $51.2B and counting</div>
          </Link>
          <Link href="/analysis/iran-vs-iraq-war" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran War vs Iraq War →</div>
            <div className="text-stone-500 text-sm">Side-by-side comparison of two Middle East wars</div>
          </Link>
          <Link href="/analysis/iran-war-no-authorization" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">The War Congress Never Authorized →</div>
            <div className="text-stone-500 text-sm">No vote, no debate, no exit strategy</div>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
