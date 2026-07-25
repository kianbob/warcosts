import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Hormuz and the Global Economy: The War\'s Hidden Cost',
  description: 'The Strait of Hormuz carried 21M barrels/day. Now it\'s down to ~10 transits. Oil hit $126. The IEA called it the biggest energy security threat in history.',
  keywords: ['strait of hormuz', 'hormuz oil', 'iran war oil prices', 'hormuz blockade', 'oil price shock 2026', 'energy crisis iran war'],
  openGraph: {
    title: 'Hormuz and the Global Economy: The War\'s Hidden Cost',
    description: 'From 90+ transits/day to 10. Oil at $126. The IEA called it the biggest energy security threat in history.',
    url: 'https://www.warcosts.org/analysis/hormuz-global-economy',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hormuz and the Global Economy',
    description: '21M barrels/day bottleneck. ~10 transits now. $126 oil. The war\'s hidden cost is at the gas pump.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/hormuz-global-economy',
  },
}

const oilPriceTimeline = [
  { date: 'Feb 27', price: 75, event: 'Pre-war baseline' },
  { date: 'Feb 28', price: 89, event: 'War begins — immediate spike' },
  { date: 'Mar 5', price: 98, event: 'Iran mines Hormuz — partial closure' },
  { date: 'Mar 12', price: 108, event: 'Full Hormuz closure' },
  { date: 'Mar 28', price: 118, event: 'Saudi production cuts compound shortage' },
  { date: 'Apr 15', price: 126, event: 'Peak — insurance markets freeze' },
  { date: 'May 10', price: 115, event: 'SPR releases + demand destruction' },
  { date: 'Jun 19', price: 104, event: 'MOU signed — markets optimistic' },
  { date: 'Jun 25', price: 83, event: 'Hormuz partially reopens' },
  { date: 'Jul 8', price: 95, event: 'MOU collapses — Hormuz re-closed' },
  { date: 'Jul 9', price: 113, event: '+$18 single-day surge' },
  { date: 'Jul 20', price: 108, event: 'Houthi Saudi blockade begins' },
  { date: 'Jul 25', price: 102, event: 'Current — elevated baseline' },
]

export default function HormuzGlobalEconomyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Hormuz and the Global Economy: The War\'s Hidden Cost',
            description: 'How the closure of the Strait of Hormuz has reshaped global energy markets and pushed the world toward recession.',
            datePublished: '2026-07-25T00:00:00Z',
            dateModified: '2026-07-25T00:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/hormuz-global-economy' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Hormuz and the Global Economy' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Economic Analysis — July 25, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Hormuz and the Global Economy
        </h1>
        <p className="text-xl text-stone-300 mb-4">The War&apos;s Hidden Cost</p>
        <p className="text-stone-400 text-lg">
          The Strait of Hormuz normally handles 21 million barrels of oil per day — roughly 20% of global supply.
          Since the Iran war began, transits have dropped from 90-100+ per day to approximately 10. Oil hit $126.
          The IEA called it &quot;the biggest energy security threat in history.&quot; The Philippines declared a
          national energy emergency. And the Houthis just opened a second front.
        </p>
      </div>

      <ShareButtons title="Hormuz and the Global Economy: The War's Hidden Cost" />

      {/* Key Numbers */}
      <div className="bg-stone-900 border border-red-900/60 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3 mb-5">
          <span className="text-2xl">⛽</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">The Energy Crisis in Numbers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$126</div>
            <div className="text-stone-400 text-sm">Peak Oil ($/bbl)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">~10</div>
            <div className="text-stone-400 text-sm">Daily Transits (was 90+)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">21M</div>
            <div className="text-stone-400 text-sm">Bbl/Day Normally</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">2x</div>
            <div className="text-stone-400 text-sm">European Gas Prices</div>
          </div>
        </div>
        <p className="text-stone-500 text-xs mt-4">Sources: IEA, EIA, Lloyd&apos;s List Intelligence, European Energy Exchange</p>
      </div>

      {/* The Chokepoint */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The World&apos;s Most Important Chokepoint
        </h2>
        <p className="text-stone-600 mb-4">
          The Strait of Hormuz is a 21-mile-wide passage between Iran and Oman. At its narrowest navigable point,
          the shipping lanes are just 2 miles wide in each direction. Through this bottleneck flows approximately
          one-fifth of the world&apos;s daily oil consumption — 21 million barrels per day, plus significant
          quantities of liquefied natural gas.
        </p>
        <p className="text-stone-600 mb-4">
          Before the war, the strait saw 90-100+ commercial transits per day. That number has collapsed to
          approximately 10, with most of the remaining traffic consisting of vessels willing to pay astronomical
          insurance premiums or operating under military escort.
        </p>
        <p className="text-stone-600 mb-6">
          The result is the largest disruption to global energy supply since the 1973 Arab oil embargo — and
          arguably worse, because the 1973 embargo was a policy choice that could be reversed. The Hormuz
          closure is an active war zone that can&apos;t be resolved with a phone call.
        </p>
      </section>

      {/* Oil Price Journey */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Oil Price Rollercoaster
        </h2>
        <p className="text-stone-600 mb-6">
          Oil prices have told the story of this war more clearly than any battlefield report. From a pre-war
          baseline of $75 per barrel, crude has been on a wild ride driven by military operations, diplomatic
          hopes, and their collapse.
        </p>

        <div className="bg-white border border-stone-200 rounded-lg overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead className="bg-stone-100">
              <tr>
                <th className="text-left p-4 font-semibold text-stone-700">Date</th>
                <th className="text-right p-4 font-semibold text-stone-700">Price ($/bbl)</th>
                <th className="text-left p-4 font-semibold text-stone-700">Event</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {oilPriceTimeline.map((item, i) => (
                <tr key={i} className={item.price >= 120 ? 'bg-red-50' : item.price <= 85 ? 'bg-green-50' : ''}>
                  <td className="p-4 text-stone-700 font-medium">{item.date}</td>
                  <td className={`p-4 text-right font-bold ${item.price >= 120 ? 'text-red-600' : item.price <= 85 ? 'text-green-600' : 'text-stone-700'}`}>
                    ${item.price}
                  </td>
                  <td className="p-4 text-stone-600">{item.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-stone-600 mb-4">
          The most damaging moment wasn&apos;t the peak — it was the{' '}
          <Link href="/analysis/ceasefire-collapse" className="text-red-600 hover:text-red-800 underline">ceasefire collapse</Link>.
          When the MOU was signed on June 19, markets priced in peace. Oil dropped from $104 to $83 as Hormuz
          partially reopened. When the deal collapsed on July 8, the $18 single-day surge was more economically
          destructive than the original war spike, because companies and governments had already begun unwinding
          their hedging positions.
        </p>
      </section>

      {/* Global Impact */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Global Ripple Effects
        </h2>

        <div className="space-y-4 mb-8">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-xl">🇪🇺</span>
              <h3 className="font-bold text-stone-900 text-lg">Europe: Gas Prices Doubled</h3>
            </div>
            <p className="text-stone-600 text-sm">
              European natural gas prices have doubled since the war began. The continent, still recovering from
              the Russia-Ukraine energy shock, now faces a second energy crisis in four years. The European TTF
              benchmark hit levels not seen since the winter of 2022. Germany has reactivated two mothballed coal
              plants. The EU is discussing emergency energy rationing for the first time since COVID.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-xl">🇵🇭</span>
              <h3 className="font-bold text-stone-900 text-lg">Philippines: National Energy Emergency</h3>
            </div>
            <p className="text-stone-600 text-sm">
              The Philippines declared a National Energy Emergency in April 2026, the first such declaration in
              the country&apos;s history. The island nation imports 90% of its oil, much of it routed through the
              Strait of Hormuz. Fuel rationing has been implemented, public transport fares have doubled, and
              rolling blackouts have returned to Manila for the first time in a decade.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-xl">🚢</span>
              <h3 className="font-bold text-stone-900 text-lg">Shipping: Insurance and Rerouting</h3>
            </div>
            <p className="text-stone-600 text-sm">
              War-risk insurance premiums for vessels transiting the Persian Gulf have increased by 5,000% since
              February. Lloyd&apos;s of London has designated the entire Persian Gulf as a &quot;war risk zone.&quot;
              Most major shipping companies have rerouted around the Cape of Good Hope, adding 10-14 days to
              Asia-Europe routes. Container shipping rates have increased 40-60%, costs that flow directly to consumers.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-xl">📉</span>
              <h3 className="font-bold text-stone-900 text-lg">IMF: Recession Warnings</h3>
            </div>
            <p className="text-stone-600 text-sm">
              The IMF has revised its 2026 global growth forecast down by 0.8 percentage points, citing the
              Hormuz disruption as the primary driver. The fund warned that a prolonged closure could push
              multiple economies into recession, particularly in South and Southeast Asia. India, Japan, and
              South Korea — all major importers of Persian Gulf oil — have been hardest hit.
            </p>
          </div>
        </div>
      </section>

      {/* The Houthi Escalation */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Second Chokepoint: Houthi Blockade of Saudi Arabia
        </h2>
        <p className="text-stone-600 mb-4">
          As if one closed strait weren&apos;t enough, the Houthis began blockading Saudi Arabian ports on
          July 20, threatening a second critical chokepoint: the Bab el-Mandeb Strait at the southern entrance
          to the Red Sea.
        </p>
        <p className="text-stone-600 mb-4">
          The Bab el-Mandeb handles approximately 10% of global trade and 4.8 million barrels of oil per day.
          The Houthis had already been attacking commercial shipping in the Red Sea since late 2023, but the
          direct blockade of Saudi ports represents a significant escalation — targeting not just transit traffic
          but Saudi Arabia&apos;s ability to export its own crude.
        </p>
        <p className="text-stone-600 mb-4">
          Saudi Arabia is the world&apos;s largest oil exporter. If the Houthi blockade succeeds in significantly
          disrupting Saudi exports, the combined effect with the Hormuz closure could remove up to 30% of
          global seaborne oil trade from the market simultaneously.
        </p>
        <p className="text-stone-600 mb-6">
          Energy analysts have begun using the term &quot;double chokepoint crisis&quot; — a scenario that was
          considered so unlikely it barely appeared in pre-war risk models. It&apos;s now reality.
        </p>
      </section>

      {/* The IEA Assessment */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          &quot;Biggest Energy Security Threat in History&quot;
        </h2>
        <p className="text-stone-600 mb-4">
          The International Energy Agency&apos;s characterization of the Hormuz closure as the &quot;biggest energy
          security threat in history&quot; was not hyperbole. Previous energy crises — the 1973 embargo, the 1979
          Iranian Revolution, the 1990 Gulf War, the 2022 Russia-Ukraine crisis — all disrupted energy markets
          significantly. None simultaneously closed the world&apos;s most important oil chokepoint while a second
          was under threat.
        </p>
        <p className="text-stone-600 mb-4">
          The key difference: previous crises involved supply restrictions that could be compensated by other
          producers. The Hormuz closure is a physical blockade that removes transit capacity itself. Even if
          Saudi Arabia, the UAE, and other Gulf states wanted to pump more oil, they can&apos;t ship it through
          the strait.
        </p>
        <p className="text-stone-600 mb-6">
          Saudi Arabia does have a limited pipeline bypass (the East-West Pipeline) that can move approximately
          5 million barrels per day to Red Sea terminals — but with the Houthis now threatening those terminals too,
          even this backup route is compromised.
        </p>
      </section>

      {/* What It Means for Americans */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          What It Means for Americans
        </h2>
        <p className="text-stone-600 mb-4">
          The United States is a net energy exporter and less directly dependent on Persian Gulf oil than it was
          in 1973. But oil is a global commodity — when global prices rise, American prices rise too.
        </p>
        <p className="text-stone-600 mb-4">
          The average American household is paying approximately <strong>$2,400 more per year</strong> in energy
          costs since the war began, according to the EIA. That includes higher gasoline, heating, and electricity
          costs. For households in the bottom income quintile, energy costs now consume over 20% of income.
        </p>
        <p className="text-stone-600 mb-6">
          Beyond energy, the shipping disruption is driving up costs of imported goods. Companies that route
          through Asia — electronics, clothing, auto parts — are passing along 40-60% higher shipping costs.
          Inflation, which had been trending toward the Fed&apos;s 2% target, has re-accelerated to 4.8%.
        </p>
        <p className="text-stone-600 mb-6">
          For the full economic impact analysis, see{' '}
          <Link href="/analysis/113-billion-war" className="text-red-600 hover:text-red-800 underline">The $113 Billion War Nobody Voted For</Link>.
        </p>
      </section>

      {/* Strategic Petroleum Reserves */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Strategic Reserves: The Last Buffer
        </h2>
        <p className="text-stone-600 mb-4">
          The US Strategic Petroleum Reserve (SPR) was created after the 1973 oil crisis for exactly this
          scenario. It currently holds approximately 370 million barrels — down from 700 million in 2010
          after years of drawdowns under multiple administrations.
        </p>
        <p className="text-stone-600 mb-4">
          The Biden and Trump administrations released SPR oil in spring 2026 to dampen the price spike,
          contributing to the decline from $126 to $115 in May. But at the current rate of drawdown, the SPR
          provides only limited breathing room. At 4 million barrels per day of releases — the maximum
          sustainable rate — current reserves would last approximately 90 days.
        </p>
        <p className="text-stone-600 mb-4">
          Other countries have less cushion. Japan holds 145 days of reserves, South Korea 90 days, and
          most European countries 90 days under IEA requirements. India has just 9.5 days of strategic reserves.
          If the Hormuz closure persists through autumn, smaller nations will face genuine fuel shortages.
        </p>
        <p className="text-stone-600 mb-6">
          The coordinated IEA reserve release in April was the fourth in the agency&apos;s 50-year history —
          joining releases after the Gulf War (1991), Hurricane Katrina (2005), and the Libya conflict (2011).
          But it was by far the largest, at 120 million barrels. Another release of that scale would reduce
          member reserves to levels the IEA considers dangerously low.
        </p>
      </section>

      {/* Alternative Routes */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Pipeline Bypasses and Alternative Routes
        </h2>
        <p className="text-stone-600 mb-4">
          Gulf oil producers have invested in pipeline infrastructure to reduce Hormuz dependence, but
          none of these alternatives come close to replacing the strait&apos;s capacity:
        </p>
        <div className="space-y-3 mb-6">
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-stone-900">Saudi East-West Pipeline (Petroline)</h3>
              <span className="text-stone-600 font-medium">5M bbl/day</span>
            </div>
            <p className="text-stone-600 text-sm">Connects Eastern Province to Yanbu on the Red Sea. Partially operational but now threatened by Houthi attacks on Red Sea terminals.</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-stone-900">UAE Habshan-Fujairah Pipeline</h3>
              <span className="text-stone-600 font-medium">1.5M bbl/day</span>
            </div>
            <p className="text-stone-600 text-sm">Bypasses Hormuz entirely, connecting Abu Dhabi fields to the Fujairah export terminal on the Gulf of Oman. Operating at capacity since March.</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-stone-900">Iraq-Turkey Pipeline (Kirkuk-Ceyhan)</h3>
              <span className="text-stone-600 font-medium">0.5M bbl/day</span>
            </div>
            <p className="text-stone-600 text-sm">Routes Iraqi crude to Mediterranean. Operating intermittently due to security concerns and political disputes with Turkey.</p>
          </div>
        </div>
        <p className="text-stone-600 mb-6">
          Combined, these alternatives can move roughly 7 million barrels per day — about one-third of Hormuz&apos;s
          normal capacity. The remaining 14 million barrels per day has no bypass. That&apos;s the fundamental
          problem: there is no infrastructure solution to the Hormuz closure. Only diplomacy or military victory
          can reopen the strait.
        </p>
      </section>

      {/* Bottom Line */}
      <section className="my-12">
        <div className="bg-red-950 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-stone-300 mb-4">
            The Strait of Hormuz has been the global economy&apos;s most critical vulnerability for decades.
            Energy analysts, military planners, and policymakers have warned about this exact scenario since
            the 1980s. It&apos;s now happening — and it&apos;s worse than most models predicted because of the
            simultaneous Houthi threat to the Bab el-Mandeb.
          </p>
          <p className="text-stone-300 mb-4">
            The economic damage — higher oil prices, doubled shipping costs, IMF recession warnings, national
            energy emergencies — is the war&apos;s hidden cost. It doesn&apos;t appear in Pentagon budgets or
            casualty reports, but it&apos;s felt by billions of people worldwide every time they fill a gas tank,
            turn on a light, or buy groceries.
          </p>
          <p className="text-stone-300">
            Until Hormuz reopens — and stays open — the global economy is operating with a tourniquet on one of
            its most critical arteries.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">Sources</h2>
        <ul className="text-stone-500 text-sm space-y-2">
          <li>International Energy Agency, &quot;Global Energy Security Assessment,&quot; May 2026</li>
          <li>US Energy Information Administration, oil price data and household energy cost estimates</li>
          <li>Lloyd&apos;s List Intelligence, vessel transit data for Strait of Hormuz</li>
          <li>Lloyd&apos;s of London, war-risk insurance designations, 2026</li>
          <li>International Monetary Fund, World Economic Outlook Update, July 2026</li>
          <li>European Energy Exchange, TTF natural gas benchmark data</li>
          <li>Philippines Office of the President, National Energy Emergency Declaration, April 2026</li>
          <li>Reuters, Houthi blockade reporting, July 20-25, 2026</li>
          <li>Moody&apos;s Analytics, &quot;Household Economic Impact of Middle East Conflict,&quot; June 2026</li>
        </ul>
      </section>

      <RelatedArticles
        articles={[
          { href: '/analysis/hormuz-crisis', title: 'Hormuz Crisis', description: 'The military situation in the strait' },
          { href: '/analysis/oil-price-shock-2026', title: 'Oil Price Shock 2026', description: 'Detailed oil market analysis' },
          { href: '/analysis/113-billion-war', title: 'The $113 Billion War', description: 'Full cost analysis of the conflict' },
          { href: '/analysis/ceasefire-collapse', title: 'Ceasefire Collapse', description: 'How the MOU fell apart and oil re-spiked' },
          { href: '/iran-war-2026', title: 'Iran War 2026', description: 'Complete conflict overview' },
        ]}
      />

      <BackToTop />
    </div>
  )
}
