import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: '$116 Oil and Counting: How the Iran War Is Hitting Your Wallet | WarCosts',
  description: 'Brent crude surged from $82 pre-war to $119.50 peak. The Strait of Hormuz carries 20% of global oil. Gas prices soaring. The Iran war is the most expensive foreign policy decision since Iraq — and you\'re paying for it at the pump.',
  openGraph: {
    title: '$116 Oil and Counting: How the Iran War Is Hitting Your Wallet',
    description: 'From $82 to $119. Hormuz blocked. Gas prices soaring. Every foreign war comes home through the gas pump.',
    url: 'https://www.warcosts.org/analysis/oil-price-shock-2026',
  },
}

const oilTimeline = [
  { date: 'Pre-war', price: '$82', event: 'Brent crude baseline before Operation Epic Fury' },
  { date: 'Feb 28 (Day 1)', price: '$82→$85', event: 'War begins. Iran closes Strait of Hormuz. Markets initially slow to react.' },
  { date: 'Mar 1-2', price: '$82-85', event: 'Oil majors suspend Hormuz shipments. Insurance premiums for tankers triple. Supertanker rates hit all-time highs.' },
  { date: 'Mar 3 (Day 4)', price: '$83+', event: 'Dow drops 1,200 points at open. S&P 500 -0.7%. Gas prices up 30% to three-year high.' },
  { date: 'Mar 6 (Day 7)', price: '$80+', event: 'Near-total halt of Hormuz: zero oil shipments in 24 hours. 15M bbl/day crude stranded.' },
  { date: 'Mar 8 (Day 9)', price: '$100+', event: 'Oil passes $100/barrel for first time since 2022. Shahed drone factory struck in Isfahan.' },
  { date: 'Mar 14 (Day 15)', price: '$103-119', event: 'Brent peaks at $119.50 during the week. CSIS estimates war spending at $16.5B. IEA releases 400M barrels from strategic reserves globally.' },
  { date: 'Mar 18 (Day 19)', price: '$110', event: 'Israel strikes South Pars — world\'s largest natural gas reserve. Brent surges 6%.' },
  { date: 'Mar 19 (Day 20)', price: '$111-119', event: 'Iran retaliates by striking Qatar\'s Ras Laffan LNG terminal. 17% of Qatar\'s LNG capacity sidelined for 3-5 YEARS. European gas prices more than double. Global markets crash.' },
  { date: 'Mar 22 (Day 23)', price: '$112', event: 'Trump\'s 48-hour power plant ultimatum. IRGC threatens to strike all US-allied energy infrastructure.' },
  { date: 'Mar 23 (Day 24)', price: '$100-114', event: 'Trump postpones ultimatum. Oil briefly drops to ~$100 on ceasefire speculation, then rebounds.' },
  { date: 'Mar 26 (Day 27)', price: '$106', event: 'Israel kills IRGC Navy commander Tangsiri. Oil surges $6.10 in a day.' },
  { date: 'Mar 27 (Day 28)', price: '$108', event: 'Iran blocks CHINESE ships at Hormuz — even "friendly" nations denied. Brent up 5.7%.' },
  { date: 'Mar 29 (Day 30)', price: '$116', event: 'Current price. 41% above pre-war levels.' },
]

const historicalShocks = [
  { crisis: '1973 Arab Oil Embargo', trigger: 'OPEC embargo on US/allies over Yom Kippur War support', priceChange: '$3 → $12 (300% increase)', duration: '6 months', gasImpact: 'Lines around blocks. Rationing. 55 mph speed limit enacted.' },
  { crisis: '1979 Iranian Revolution', trigger: 'Shah overthrown, Iranian oil production collapses', priceChange: '$14 → $40 (185% increase)', duration: '~2 years', gasImpact: 'Gas lines. Odd-even rationing. Inflation hit 14.8%. Fed raised rates to 20%.' },
  { crisis: '1990 Gulf War', trigger: 'Iraq invades Kuwait, threatens Saudi fields', priceChange: '$17 → $41 (140% increase)', duration: '~7 months', gasImpact: 'Brief recession. Prices moderated quickly after coalition victory.' },
  { crisis: '2008 Oil Spike', trigger: 'Speculation + demand + geopolitical fears', priceChange: '$90 → $147 (63% increase)', duration: '~6 months', gasImpact: '$4+/gallon. Contributed to Great Recession. Auto industry collapse.' },
  { crisis: '2022 Ukraine Invasion', trigger: 'Russia invades Ukraine, sanctions on Russian oil', priceChange: '$78 → $128 (64% increase)', duration: '~4 months', gasImpact: '$5+/gallon national average. Biden releases SPR. Inflation surged to 9.1%.' },
  { crisis: '2026 Iran War', trigger: 'Operation Epic Fury + Hormuz closure', priceChange: '$82 → $119 (45% peak, settling at $116)', duration: 'Ongoing (30+ days)', gasImpact: '$3.63→$4+ nationally. CA over $5. IEA chief: "worse than 1973 and 1979 combined."' },
]

export default function OilPriceShockPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '$116 Oil and Counting: How the Iran War Is Hitting Your Wallet',
        description: 'Brent crude surged from $82 to $119.50. Hormuz blocked. Gas prices soaring. The economic cost of the Iran war.',
        url: 'https://www.warcosts.org/analysis/oil-price-shock-2026',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-29',
        dateModified: '2026-03-29'
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Oil Price Shock' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● ACTIVE CONFLICT</span>
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Economic Analysis</span>
          <span className="text-xs px-2 py-1 rounded-full bg-stone-700 text-stone-300">Updated Mar 29, 2026 — Day 30</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          $116 Oil and Counting
        </h1>
        <p className="text-xl text-stone-300 mb-4">How the Iran War Is Hitting Your Wallet</p>
        <p className="text-stone-400 text-lg mb-4">
          Before the first bomb fell on Iran, Brent crude was trading at <strong className="text-white">$82
          per barrel</strong>. Thirty days later, it&apos;s at <strong className="text-red-400">$116</strong> —
          after peaking at <strong className="text-red-400">$119.50</strong>. That&apos;s a 41% increase that
          touches every American household through gas prices, grocery bills, heating costs, and the price
          of everything that moves by truck, ship, or plane.
        </p>
        <p className="text-stone-400 text-lg">
          The IEA chief called it &ldquo;worse than 1973 and 1979 combined.&rdquo; The Strait of Hormuz —
          through which 20% of the world&apos;s oil and 20% of its liquefied natural gas flows — is
          effectively blocked. And the war shows no signs of ending. Foreign wars always come home.
          This one came home through the gas pump.
        </p>
      </div>

      <ShareButtons title="$116 Oil and Counting: How the Iran War Is Hitting Your Wallet" />

      {/* Opening Quote */}
      <blockquote className="border-l-4 border-red-700 pl-6 my-8 text-xl text-stone-600 italic">
        &ldquo;Worse than 1973 and 1979 combined.&rdquo;
        <span className="block text-sm text-stone-500 mt-2 not-italic">— IEA Executive Director, March 23, 2026</span>
      </blockquote>

      {/* Key Numbers */}
      <div className="grid md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Pre-War Oil</p>
          <p className="text-2xl font-bold text-stone-700 font-[family-name:var(--font-heading)]">$82/bbl</p>
          <p className="text-xs text-stone-500">Brent crude, Feb 27</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Peak Price</p>
          <p className="text-2xl font-bold text-[#dc2626] font-[family-name:var(--font-heading)]">$119.50</p>
          <p className="text-xs text-stone-500">+46% in 15 days</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Current Price</p>
          <p className="text-2xl font-bold text-[#dc2626] font-[family-name:var(--font-heading)]">$116/bbl</p>
          <p className="text-xs text-stone-500">+41% from pre-war</p>
        </div>
        <div className="bg-red-50 border-red-200 rounded-lg p-5 border text-center">
          <p className="text-sm text-red-700 mb-1">US Gas Avg</p>
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$4.00+</p>
          <p className="text-xs text-red-600">CA: $5+/gallon</p>
        </div>
      </div>

      {/* Section 1: The Strait of Hormuz */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Strait of Hormuz: The World&apos;s Most Dangerous Chokepoint
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The Strait of Hormuz is a 21-mile-wide passage between Iran and Oman at the mouth of the
            Persian Gulf. It is, by virtually any measure, the single most important piece of water on Earth
            for the global economy.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            <div className="bg-stone-50 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-[#dc2626] font-[family-name:var(--font-heading)]">20%</p>
              <p className="text-sm font-semibold">of global oil</p>
              <p className="text-xs text-stone-500 mt-1">~20 million barrels per day pass through Hormuz</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-[#dc2626] font-[family-name:var(--font-heading)]">20%</p>
              <p className="text-sm font-semibold">of global LNG</p>
              <p className="text-xs text-stone-500 mt-1">Qatar, the world&apos;s largest LNG exporter, ships through Hormuz</p>
            </div>
          </div>
          <p>
            On February 28, 2026 — the first day of Operation Epic Fury — <strong>Iran closed the Strait
            of Hormuz</strong>. The IRGC Navy deployed mines, cruise missiles, drone boats, and coastal
            defense systems to enforce the blockade. Oil majors immediately suspended shipments. Insurance
            companies tripled premiums. By Day 7, there were <strong>zero oil shipments</strong> through
            the strait in a 24-hour period.
          </p>
          <p>
            The closure cannot be replaced. There is no pipeline or alternative route capable of handling
            20 million barrels per day. The Strategic Petroleum Reserve releases — 172 million barrels from
            the US, 400 million globally — bought weeks, not months. They are a tourniquet, not a cure.
          </p>
          <p>
            By Day 28, Iran had begun blocking even <strong>Chinese-owned ships</strong> — previously
            considered &ldquo;friendly&rdquo; traffic. Iran is formalizing a &ldquo;toll booth&rdquo;
            regime, charging ships millions for safe passage. The IRGC commander responsible for the
            blockade, Alireza Tangsiri, was killed by an Israeli airstrike on Day 27. The blockade
            continued without him.
          </p>
        </div>
      </div>

      {/* Section 2: Oil Price Timeline */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          30 Days of Oil Chaos
        </h2>
        <div className="space-y-3">
          {oilTimeline.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="text-sm font-mono text-red-600 shrink-0 w-28">{item.date}</div>
              <div className="text-sm font-bold text-stone-800 shrink-0 w-20">{item.price}</div>
              <div className="text-stone-700 text-sm">{item.event}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Impact on Americans */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">
          What It Means at the Pump
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The average American household drives approximately 22,000 miles per year and uses roughly
            1,100 gallons of gasoline. Every $0.50 increase in gas prices costs the average family
            <strong> $550 per year</strong>. But the pain doesn&apos;t stop at the pump.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            <div className="bg-white rounded-lg p-4 border">
              <p className="font-semibold text-red-800 mb-2">🛢️ At the Pump</p>
              <ul className="space-y-1 text-sm">
                <li>• National average: <strong>$4.00+/gallon</strong> (up from ~$3.10 pre-war)</li>
                <li>• California: <strong>$5.00+/gallon</strong></li>
                <li>• Year-over-year increase: <strong>+$0.55</strong> per gallon</li>
                <li>• Cost per household: <strong>+$600-1,000/year</strong></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border">
              <p className="font-semibold text-red-800 mb-2">🏪 At the Grocery Store</p>
              <ul className="space-y-1 text-sm">
                <li>• Fertilizer: 30% ships through Hormuz — prices surging</li>
                <li>• Food transport: diesel up 20%+</li>
                <li>• India facing fertilizer shortages</li>
                <li>• US corn/soy farmers &ldquo;begging Trump for relief&rdquo;</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border">
              <p className="font-semibold text-red-800 mb-2">🏠 At Home</p>
              <ul className="space-y-1 text-sm">
                <li>• Natural gas prices up (heating, cooking, electricity)</li>
                <li>• European gas prices more than doubled</li>
                <li>• Electricity rates rising as utilities pass costs through</li>
                <li>• Everything shipped by truck costs more</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border">
              <p className="font-semibold text-red-800 mb-2">📉 Markets</p>
              <ul className="space-y-1 text-sm">
                <li>• Dow dropped 1,200 points on Day 4</li>
                <li>• Nikkei -3.4%, FTSE -2.3% on Day 20</li>
                <li>• WTO warns -0.5% global trade growth</li>
                <li>• Philippines declared national energy emergency</li>
              </ul>
            </div>
          </div>
          <p>
            The impact is regressive — hitting lower-income Americans hardest. A family earning $40,000/year
            that spends $3,000 on gas sees a 20% increase eat $600 from their budget. For a family earning
            $200,000, the same increase is a rounding error. War taxes the poor through the gas pump.
          </p>
        </div>
      </div>

      {/* Section 4: Historical Comparison */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          How This Compares to Every Other Oil Shock
        </h2>
        <div className="space-y-4 text-stone-700">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-stone-300">
                  <th className="text-left py-3 pr-3 font-semibold text-stone-600">Crisis</th>
                  <th className="text-left py-3 pr-3 font-semibold text-stone-600">Trigger</th>
                  <th className="text-left py-3 pr-3 font-semibold text-stone-600">Price Change</th>
                  <th className="text-left py-3 pr-3 font-semibold text-stone-600">Gas Impact</th>
                </tr>
              </thead>
              <tbody>
                {historicalShocks.map((row, i) => (
                  <tr key={i} className={`border-b border-stone-200 ${row.crisis === '2026 Iran War' ? 'bg-red-50 font-semibold' : ''}`}>
                    <td className="py-3 pr-3 font-medium text-xs">{row.crisis}</td>
                    <td className="py-3 pr-3 text-xs">{row.trigger}</td>
                    <td className="py-3 pr-3 text-[#dc2626] font-bold text-xs">{row.priceChange}</td>
                    <td className="py-3 pr-3 text-xs">{row.gasImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            The 2026 oil shock is unique in several ways. Unlike 1973 (embargo by choice) or 2022
            (sanctions by choice), the Hormuz closure is an <strong>active military blockade</strong> by
            a nation at war. It cannot be resolved through diplomacy alone — it requires either military
            reopening of the strait or an end to the war itself.
          </p>
          <p>
            Unlike previous shocks, this one also targets <strong>LNG infrastructure</strong>. Iran&apos;s
            strike on Qatar&apos;s Ras Laffan terminal — sidelining 17% of Qatar&apos;s LNG capacity for
            3-5 years — means the natural gas market will feel this shock long after the oil market recovers.
            Europe, which pivoted to LNG after cutting Russian pipeline gas, is especially vulnerable.
          </p>
        </div>
      </div>

      {/* Section 5: The Ras Laffan Strike */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Ras Laffan Strike: 3-5 Years of Damage in One Attack
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            On March 19, Iran struck <strong>Ras Laffan Industrial City</strong> in Qatar — the world&apos;s
            largest LNG export terminal — with missiles. The strike sidelined 12.8 million tons of annual
            LNG capacity, approximately 17% of Qatar&apos;s total output.
          </p>
          <p>
            QatarEnergy estimated the damage would take <strong>3 to 5 years</strong> to repair. This single
            attack will cost the global energy market more than most entire wars. European natural gas prices
            immediately more than doubled from pre-war levels, hitting a 3-year high. Brent crude spiked to
            $119/barrel intraday.
          </p>
          <p>
            The Ras Laffan strike was retaliation for Israel&apos;s attack on <strong>South Pars</strong> —
            the world&apos;s largest natural gas reserve, shared between Iran and Qatar — the day before.
            The energy infrastructure war escalated from zero to catastrophic in 48 hours, with both sides
            targeting the other&apos;s most critical assets.
          </p>
          <p>
            Qatar — which had been trying to mediate between the US and Iran — condemned the Israeli South
            Pars strike as a &ldquo;dangerous and irresponsible step.&rdquo; Then Iran struck Qatar&apos;s
            own LNG terminal. The Gulf states are paying the price for a war they didn&apos;t start, with
            energy infrastructure they spent decades building.
          </p>
        </div>
      </div>

      {/* Section 6: The Fertilizer Crisis */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Beyond Oil: The Global Food Crisis
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The oil price shock gets the headlines, but the war&apos;s impact on global food supply may
            prove more devastating in the long run.
          </p>
          <p>
            <strong>30% of the world&apos;s fertilizer</strong> is shipped through the Strait of Hormuz.
            With the strait effectively blocked, fertilizer supply chains have collapsed. The consequences
            are cascading:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">•</span>
              <strong>India</strong> — facing critical fertilizer shortages; dependent on Gulf imports for
              agricultural inputs that feed 1.4 billion people
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">•</span>
              <strong>US farmers</strong> — corn and soy producers &ldquo;begging Trump for relief&rdquo;
              as fertilizer prices surge and planting season approaches
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">•</span>
              <strong>China</strong> — has restricted fertilizer exports to protect domestic supply
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">•</span>
              <strong>Australia</strong> — farmers planting less due to fertilizer costs and uncertainty
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">•</span>
              <strong>WTO</strong> — warns of worst trade disruptions in 80 years
            </li>
          </ul>
          <p>
            Iran itself suspended gas flow to Iraq to shore up domestic supplies. Iraq shut port
            operations. The war is not just disrupting energy markets — it&apos;s threatening the food
            security of billions of people in countries that have nothing to do with the conflict.
          </p>
        </div>
      </div>

      {/* Section 7: Who's Paying? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Who&apos;s Paying for This War?
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The financial cost of Operation Epic Fury is staggering — and it&apos;s being paid by American
            taxpayers and consumers from multiple directions simultaneously:
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            <div className="bg-stone-50 rounded-lg p-4">
              <p className="font-semibold text-stone-800 mb-2">Direct Military Cost</p>
              <p className="text-sm">Pentagon&apos;s first 6 days: <strong className="text-[#dc2626]">$11.3 billion</strong> ($1.88B/day).
              CSIS estimate through Day 12: <strong className="text-[#dc2626]">$16.5 billion</strong>.
              Pentagon has requested <strong className="text-[#dc2626]">$200 billion</strong> supplemental from Congress.</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4">
              <p className="font-semibold text-stone-800 mb-2">Gas Price Tax</p>
              <p className="text-sm">Average increase of ~$0.90/gallon nationally. For 140 million US
              households consuming ~1,100 gallons/year: <strong className="text-[#dc2626]">~$140 billion/year</strong> in
              additional fuel costs — a stealth tax on every American.</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4">
              <p className="font-semibold text-stone-800 mb-2">Strategic Reserve Depletion</p>
              <p className="text-sm">US released <strong>172 million barrels</strong> from the SPR. At ~$80/bbl replacement
              cost, that&apos;s <strong className="text-[#dc2626]">$13.8 billion</strong> in strategic assets consumed —
              assets meant for national emergencies, not optional wars.</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4">
              <p className="font-semibold text-stone-800 mb-2">Inflation & Economic Drag</p>
              <p className="text-sm">Every 10% oil increase adds ~0.3-0.5% to CPI. With oil up 41%, expect
              <strong> 1-2% additional inflation</strong>. WTO projects -0.5% global trade growth. Stock
              markets have lost trillions.</p>
            </div>
          </div>
          <p>
            Add it up: $200 billion in direct military spending requested. $140 billion/year in higher
            fuel costs. $13.8 billion in SPR depletion. Trillions in market losses and economic drag.
            This is the <strong>most expensive foreign policy decision since the Iraq War</strong> —
            and it&apos;s being made without a congressional authorization for the use of military force.
          </p>
        </div>
      </div>

      {/* Section 8: Energy Independence */}
      <div className="bg-stone-100 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Energy Independence Argument
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            Some will argue that the US is now a net energy exporter and therefore immune to Middle East
            oil shocks. This is a comforting myth — and the last 30 days have demolished it completely.
          </p>
          <p>
            Yes, the US produces approximately 13 million barrels of oil per day and is technically a
            net exporter. But <strong>oil is a global commodity priced on global markets</strong>. When
            20% of global supply is threatened, the price rises for everyone — including American producers
            who sell at world prices. US energy independence does not mean US price independence.
          </p>
          <p>
            More importantly, US &ldquo;energy independence&rdquo; is built on a foundation of global
            stability. American oil companies need functioning global markets, shipping lanes, and
            financial systems. When the Strait of Hormuz closes, it doesn&apos;t matter that the US
            doesn&apos;t import much Gulf oil directly — the entire pricing structure shifts.
          </p>
          <p>
            The deeper question is this: if the US is energy independent, <strong>why are we fighting a
            war over the Strait of Hormuz?</strong> If we don&apos;t need Middle East oil, why are 50,000+
            American troops deployed to protect shipping lanes that primarily serve China, Japan, South Korea,
            and Europe?
          </p>
          <p>
            The libertarian answer is straightforward: <strong>we shouldn&apos;t be</strong>. If other
            nations depend on Gulf oil, they should secure their own shipping lanes. Trump himself made
            this argument when he called NATO &ldquo;cowards&rdquo; for refusing to send warships to
            Hormuz. But then he started the war that closed it.
          </p>
          <p>
            True energy independence would mean that events in the Strait of Hormuz don&apos;t affect
            American gas prices. We&apos;re not there — and fighting wars in the Middle East ensures
            we never will be.
          </p>
        </div>
      </div>

      {/* Section 9: The Desperation Moves */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Desperation Playbook
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The administration&apos;s response to the oil crisis has been a series of increasingly desperate
            measures — each one an implicit admission that the war is causing more economic damage than
            anyone anticipated:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">1.</span>
              <span><strong>Strategic Petroleum Reserve release</strong> — 172 million barrels from the US,
              400 million globally through the IEA. A temporary measure that depletes reserves meant for
              genuine emergencies.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">2.</span>
              <span><strong>Relaxing sanctions on Iranian oil</strong> — Treasury Secretary Bessent relaxed
              sanctions to allow ~140 million barrels of Iranian oil already at sea to be sold. An extraordinary
              admission: the war is causing more economic damage than the sanctions it was meant to enforce.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">3.</span>
              <span><strong>Jones Act waiver</strong> — Trump waived the Jones Act for 60 days to allow
              foreign-flagged tankers to move oil between US ports. A measure normally reserved for hurricanes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">4.</span>
              <span><strong>Pressuring allies</strong> — Trump called on China, France, UK, Japan, and South Korea
              to send warships to reopen Hormuz. Called NATO &ldquo;cowards&rdquo; when they refused. Called UK
              ships &ldquo;toys.&rdquo;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">5.</span>
              <span><strong>48-hour ultimatum (postponed twice)</strong> — Trump threatened to destroy Iran&apos;s
              power plants if Hormuz wasn&apos;t opened. Extended the deadline to April 6 after markets panicked.
              The threat itself caused oil to spike.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">6.</span>
              <span><strong>$20 billion DFC insurance</strong> — Announced a $20 billion insurance plan for
              American businesses&apos; overseas losses. Taxpayer-funded insurance for damage caused by a
              taxpayer-funded war.</span>
            </li>
          </ul>
          <p>
            Each measure is a Band-Aid on a gunshot wound. The only thing that will restore oil prices to
            pre-war levels is ending the war and reopening the Strait of Hormuz. Everything else is theater.
          </p>
        </div>
      </div>

      {/* Section 10: The Global Fallout */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Global Fallout
        </h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The economic damage extends far beyond the United States:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">🇵🇭</span>
              <strong>Philippines</strong> — First country to declare a national energy emergency over the war.
              Imports 90% of its fuel. Turning to Russia and China for supply.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">🇰🇷</span>
              <strong>South Korea</strong> — Urging citizens to take shorter showers and avoid charging EVs at night.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">🇪🇸</span>
              <strong>Spain</strong> — €5 billion aid package + rent freeze. PM Sánchez: &ldquo;We don&apos;t
              support this war.&rdquo; Increasing Algerian gas imports.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">🇩🇪🇵🇱</span>
              <strong>Germany &amp; Poland</strong> — Passed fuel price controls to protect consumers.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">🇷🇴🇭🇺</span>
              <strong>Romania &amp; Hungary</strong> — Capping fuel prices.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 shrink-0 font-bold">🌍</span>
              <strong>Global</strong> — AWS data centers knocked offline by Middle East drone attacks,
              disrupting cloud services worldwide. Amazon, a company that runs 32% of global cloud
              infrastructure, is now a casualty of war.
            </li>
          </ul>
          <p>
            The war has transformed the global economic order in 30 days. Countries are hoarding energy,
            restricting exports, imposing price controls, and scrambling for alternative suppliers. The
            liberal international economic order — built on free trade and open shipping lanes — is fraying
            in real time.
          </p>
        </div>
      </div>

      {/* Section 11: The Libertarian Case */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-400">
          Foreign Wars Always Come Home Through the Gas Pump
        </h2>
        <div className="space-y-4 text-stone-300">
          <p>
            Every major US military intervention in the Middle East has produced an oil price shock.
            Every single one. The 1973 embargo. The 1979 revolution. The 1990 Gulf War. The 2003 Iraq
            invasion. The 2022 Ukraine sanctions. And now the 2026 Iran war.
          </p>
          <p>
            The pattern is so consistent it should be treated as a law of geopolitics: <strong className="text-white">
            when America fights in the Middle East, Americans pay more for gas.</strong> The only
            question is how much.
          </p>
          <p>
            The libertarian critique is simple. The government spent $200 billion (requested) on a war
            that raised gas prices by $0.90/gallon. The government then spent $13.8 billion depleting
            the Strategic Petroleum Reserve to partially offset the damage from the war it started. The
            government then relaxed sanctions on Iranian oil — sanctions the government imposed — to ease
            the price pressure from the war the government launched to enforce those sanctions.
          </p>
          <p>
            It&apos;s a self-licking ice cream cone. The government creates the problem, spends taxpayer
            money to partially address the problem it created, and then demands more taxpayer money to
            continue creating the problem.
          </p>
          <p>
            The alternative was always available: <strong className="text-white">don&apos;t start the war</strong>.
            Don&apos;t close the strait. Don&apos;t spike oil prices. Don&apos;t deplete strategic reserves.
            Don&apos;t crash global markets. Don&apos;t cause a fertilizer crisis. Don&apos;t force the
            Philippines to declare a national emergency.
          </p>
          <p>
            $82 oil was fine. $116 oil is a choice. A choice made in Washington, paid for in Peoria.
          </p>
        </div>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Sources &amp; Citations</h2>
        <ul className="space-y-2 text-sm text-stone-600">
          <li>• <strong>Bloomberg / Reuters / CNBC</strong> — Brent crude pricing data ($82 pre-war → $119.50 peak → $116 current)</li>
          <li>• <strong>IEA</strong> — Strategic Petroleum Reserve release (400M barrels globally, 172M from US)</li>
          <li>• <strong>CSIS</strong> — War spending estimate ($16.5B through Day 12)</li>
          <li>• <strong>Pentagon / CENTCOM</strong> — First 6 days cost $11.3B; $200B supplemental request</li>
          <li>• <strong>QatarEnergy</strong> — Ras Laffan damage assessment (12.8M tons, 3-5 year repair)</li>
          <li>• <strong>WTO</strong> — Global trade impact warning (-0.5% growth; worst disruptions in 80 years)</li>
          <li>• <strong>EIA / AAA</strong> — US gas price data ($3.63+ average, CA $5+)</li>
          <li>• <strong>UKMTO</strong> — Maritime incident tracking (17 incidents Feb 28–Mar 11)</li>
          <li>• <strong>Treasury Department</strong> — Sanctions relaxation on Iranian oil; DFC $20B insurance plan</li>
          <li>• <strong>NYT / AP / CNN</strong> — Hormuz blockade reporting, Chinese ship denials, toll booth regime</li>
          <li>• <strong>MarineTraffic</strong> — COSCO ship tracking data at Hormuz</li>
          <li>• <strong>BBC / Reuters</strong> — Philippines national energy emergency declaration</li>
          <li>• <strong>Financial Times</strong> — Trump NATO criticism and allied responses</li>
          <li>• <strong>NPR / PBS / Marist</strong> — Poll: 56% of Americans oppose the war</li>
          <li>• <strong>Fortune / CNBC</strong> — Daily oil price tracking and market analysis</li>
        </ul>
      </div>

      <RelatedArticles
        articles={[
          { slug: 'iran-2026', title: 'Whose War Is This? The Iran Conflict Nobody Asked For' },
          { slug: 'civilian-toll-iran-2026', title: '3,461 Dead in 30 Days: The Human Cost' },
          { slug: 'hormuz-economic-impact', title: 'The Hormuz Crisis: Economic Impact' },
          { slug: 'oil-and-war', title: 'Oil & War: Every Middle East War Is About Oil' },
        ]}
      />

      <BackToTop />
    </div>
  )
}