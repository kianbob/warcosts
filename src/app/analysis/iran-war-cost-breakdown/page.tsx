import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'How Much Has the Iran War Cost? A Day-by-Day Breakdown — WarCosts.org',
  description: 'A detailed cost breakdown of Operation Epic Fury: $11.3B in 6 days, $16.5B through Day 12, and a $200B Pentagon request to Congress. Tomahawks, B-2 sorties, carrier groups — every dollar tracked.',
  keywords: ['iran war cost', 'how much iran war cost', 'operation epic fury cost', 'iran war spending', 'iran war budget', 'iran war military spending'],
  openGraph: {
    title: 'How Much Has the Iran War Cost? A Day-by-Day Breakdown',
    description: 'Pentagon confirmed $11.3B for the first 6 days alone. CSIS estimated $16.5B through Day 12. Now the Pentagon wants $200B from Congress.',
    url: 'https://www.warcosts.org/analysis/iran-war-cost-breakdown',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Has the Iran War Cost? A Day-by-Day Breakdown',
    description: '$1.88 billion per day. 10,000+ targets struck. The most expensive air campaign in history.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/iran-war-cost-breakdown',
  },
}

const dailyCosts = [
  { day: 1, date: 'Feb 28', cumulative: 2.5, description: 'Initial strikes on 30+ targets. 200+ Tomahawks, 50+ JASSM-ERs, B-2 sorties from Whiteman AFB.' },
  { day: 2, date: 'Mar 1', cumulative: 5.1, description: 'Expanded target list. Carrier air wings launch 300+ sorties. SM-3 intercepts of Iranian ballistic missiles.' },
  { day: 3, date: 'Mar 2', cumulative: 8.4, description: 'Three-front war: Iran, Yemen, Lebanon. Friendly fire incident. Embassy defense operations.' },
  { day: 4, date: 'Mar 3', cumulative: 12.2, description: 'Natanz strikes require bunker busters ($3.5M each). Qatar joins with F-15 sorties. AWS outage disrupts logistics.' },
  { day: 5, date: 'Mar 4', cumulative: 14.8, description: 'B-2 bunker buster campaign intensifies. 30+ Iranian naval vessels sunk.' },
  { day: 6, date: 'Mar 5', cumulative: 17.5, description: 'Pentagon confirms $11.3B spent. Mine-clearing ops in Hormuz begin ($2M/day).' },
  { day: 7, date: 'Mar 6', cumulative: 19.8, description: 'Sustained air campaign. 5,000+ targets struck total. Refueling tanker fleet at max capacity.' },
  { day: 8, date: 'Mar 7', cumulative: 22.0, description: 'Oil infrastructure strikes begin — Tondgouyan and Shahran refineries hit.' },
  { day: 9, date: 'Mar 8', cumulative: 24.5, description: 'Shahed drone factory destroyed. Precision-guided munitions stockpile declining.' },
  { day: 10, date: 'Mar 9', cumulative: 27.2, description: 'Bahrain refinery ablaze from Iranian retaliation. Force majeure declared.' },
  { day: 11, date: 'Mar 10', cumulative: 29.8, description: '16 Iranian minelayers destroyed. Minesweeping operations expand.' },
  { day: 12, date: 'Mar 11', cumulative: 32.5, description: 'CSIS estimates $16.5B in direct military costs. Basij sites in Tehran targeted.' },
  { day: 13, date: 'Mar 12', cumulative: 35.0, description: 'KC-135 crash in Iraq. Nuclear scientist targeted killings. Peace conditions issued.' },
  { day: 14, date: 'Mar 13', cumulative: 37.2, description: 'Houthi Red Sea attacks intensify — 2 carrier groups diverted.' },
  { day: 15, date: 'Mar 14', cumulative: 39.5, description: 'B-21 Raider first combat deployment (classified sortie cost est. $6M/hr).' },
  { day: 16, date: 'Mar 15', cumulative: 41.8, description: 'Hezbollah front escalates — Israel requests US missile defense support.' },
  { day: 17, date: 'Mar 16', cumulative: 44.0, description: 'Ammunition resupply flights from US mainland — C-17 fleet at surge capacity.' },
  { day: 18, date: 'Mar 17', cumulative: 46.5, description: 'Dimona damage assessment. Iron Dome / Arrow resupply to Israel ($500M package).' },
  { day: 19, date: 'Mar 18', cumulative: 49.0, description: 'Pentagon requests $200B supplemental from Congress. 10,000+ targets struck.' },
  { day: 20, date: 'Mar 19', cumulative: 51.2, description: 'Minab school massacre — 168 children killed. International condemnation.' },
]

export default function IranWarCostBreakdownPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How Much Has the Iran War Cost? A Day-by-Day Breakdown',
            description: 'A detailed cost breakdown of Operation Epic Fury — the most expensive air campaign in American history.',
            datePublished: '2026-03-10T00:00:00Z',
            dateModified: '2026-03-27T22:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/iran-war-cost-breakdown' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Iran War Cost Breakdown' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Cost Analysis — Updated March 27, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          How Much Has the Iran War Cost?
        </h1>
        <p className="text-xl text-stone-300 mb-4">A Day-by-Day Breakdown of Operation Epic Fury</p>
        <p className="text-stone-400 text-lg">
          The Pentagon confirmed $11.3 billion spent in the first 6 days — $1.88 billion per day. CSIS estimated
          $16.5 billion through Day 12. On Day 19, the Pentagon requested $200 billion from Congress.
          This is the most expensive air campaign in American history.
        </p>
      </div>

      <ShareButtons title="How Much Has the Iran War Cost? A Day-by-Day Breakdown" />

      {/* Key Numbers */}
      <div className="bg-stone-900 border border-red-900/60 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3 mb-5">
          <span className="text-2xl">💰</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">The Numbers — 28 Days In</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$51.2B+</div>
            <div className="text-stone-400 text-sm">Total Spent (Est.)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$1.88B</div>
            <div className="text-stone-400 text-sm">Per Day (Pentagon)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$200B</div>
            <div className="text-stone-400 text-sm">Requested from Congress</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">10,000+</div>
            <div className="text-stone-400 text-sm">Targets Struck</div>
          </div>
        </div>
        <p className="text-stone-500 text-xs mt-4">Sources: Pentagon press briefing (Mar 5), CSIS cost estimate (Mar 11), Congressional Budget Office preliminary assessment</p>
      </div>

      {/* What Things Cost */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          What Things Cost: A Weapons Price List
        </h2>
        <p className="text-stone-600 mb-6">
          Every missile, every sortie, every interceptor has a price tag. Here&apos;s what the US military is spending
          per unit in Operation Epic Fury — and how fast those costs add up when you&apos;re firing hundreds per day.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">Tomahawk Cruise Missile (Block V)</h3>
              <span className="text-red-600 font-bold text-lg">$2.5M each</span>
            </div>
            <p className="text-stone-600 text-sm">
              The workhorse of the opening salvo. The Navy fired 200+ Tomahawks on Day 1 alone — that&apos;s
              <strong> $500 million in missiles in 24 hours</strong>. Block V variants include the Maritime Strike
              Tomahawk for anti-ship missions. Manufacturer: Raytheon. Current inventory estimated at 4,000 — the
              Pentagon is burning through stockpiles faster than they can be replaced.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: Congressional Research Service, &quot;Tomahawk Cruise Missile Program&quot; (2025)</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">JASSM-ER (Joint Air-to-Surface Standoff Missile)</h3>
              <span className="text-red-600 font-bold text-lg">$1.5M each</span>
            </div>
            <p className="text-stone-600 text-sm">
              Extended-range stealth cruise missile launched from B-2s, B-1Bs, and F-15Es. Range of 575+ miles
              allows launch from outside Iranian air defense range. Estimated 50+ fired on Day 1 with B-2 strikes
              from Whiteman AFB. Manufacturer: Lockheed Martin. Stockpile concerns emerged by Day 10.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: USAF Weapons Program Office; Lockheed Martin FY2025 delivery data</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">B-2 Spirit Stealth Bomber Sortie</h3>
              <span className="text-red-600 font-bold text-lg">$4.5M/flight hour</span>
            </div>
            <p className="text-stone-600 text-sm">
              Each B-2 round-trip from Whiteman AFB, Missouri to Iran is approximately 30+ hours with aerial
              refueling — putting each sortie at <strong>$135 million or more</strong>. The USAF has only 19 operational
              B-2s. Multiple sorties were flown in the first week to deliver GBU-57 Massive Ordnance Penetrators
              ($3.5M each) against Natanz and Fordow nuclear facilities.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: USAF cost-per-flight-hour data (FY2025); GAO bomber sustainment report</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">SM-3 Block IIA Interceptor</h3>
              <span className="text-red-600 font-bold text-lg">$36M each</span>
            </div>
            <p className="text-stone-600 text-sm">
              Used to intercept Iranian ballistic missiles targeting US bases and Gulf allies. The Navy fired
              multiple SM-3s on Day 2 during Iran&apos;s retaliatory missile barrage. At $36 million per shot,
              <strong> a single salvo of 10 interceptors costs $360 million</strong> — and Iran has thousands of
              ballistic missiles. This is the math that keeps defense planners awake at night.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: Missile Defense Agency FY2025 budget; Raytheon/Aerojet Rocketdyne contract data</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">Carrier Strike Group Operations</h3>
              <span className="text-red-600 font-bold text-lg">$15M/day per group</span>
            </div>
            <p className="text-stone-600 text-sm">
              The US deployed 3 carrier strike groups to the region: USS Eisenhower (CVN-69), USS Lincoln (CVN-72),
              and USS Truman (CVN-75). Each group includes the carrier, a cruiser, destroyers, a submarine, and a
              supply ship. At $15M/day each, that&apos;s <strong>$45 million daily just to keep three carrier groups
              on station</strong> — before a single weapon is fired. Over 28 days: $1.26 billion in carrier ops alone.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: CBO, &quot;The Cost of the Navy&apos;s Ship Plan&quot; (2025); Navy budget justification documents</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">GBU-57 Massive Ordnance Penetrator</h3>
              <span className="text-red-600 font-bold text-lg">$3.5M each</span>
            </div>
            <p className="text-stone-600 text-sm">
              The 30,000-pound bunker buster — the only conventional weapon capable of reaching Iran&apos;s deeply
              buried Fordow enrichment facility. Only the B-2 can carry it (2 per aircraft). Each strike requires
              a $135M+ B-2 sortie plus the $3.5M bomb. The US has approximately 20 MOPs in inventory.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: USAF munitions program; Boeing defense contract filings</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-stone-900 text-lg">F-35A Lightning II Sortie</h3>
              <span className="text-red-600 font-bold text-lg">$42,000/flight hour</span>
            </div>
            <p className="text-stone-600 text-sm">
              The Pentagon&apos;s most advanced fighter, used for SEAD (Suppression of Enemy Air Defenses) and
              strike missions. Hundreds of F-35 sorties flown from Al Udeid (Qatar) and Al Dhafra (UAE).
              At 6-8 hour missions, each sortie costs $250,000-$336,000 — before weapons are added. The F-35&apos;s
              maintenance burden means every flight hour requires 30+ hours of maintenance.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: GAO F-35 sustainment report (2025); DOD Selected Acquisition Report</p>
          </div>
        </div>
      </section>

      {/* Daily Cost Timeline */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Day-by-Day Cost Tracker
        </h2>
        <p className="text-stone-600 mb-6">
          The following estimates combine Pentagon confirmed figures, CSIS analysis, and WarCosts.org projections
          based on known sortie rates, munitions expenditure, and operational tempo. Pentagon confirmed the $11.3B
          figure on Day 6; CSIS published $16.5B through Day 12. All other figures are estimates.
        </p>

        <div className="space-y-3">
          {dailyCosts.map((entry) => (
            <div key={entry.day} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-bold text-stone-900">Day {entry.day}</span>
                  <span className="text-stone-500 ml-2 text-sm">{entry.date}</span>
                </div>
                <span className="text-red-600 font-bold">${entry.cumulative}B cumulative</span>
              </div>
              <p className="text-stone-600 text-sm">{entry.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
          <p className="text-amber-800 text-sm">
            <strong>Note:</strong> These are estimates based on available data. The Pentagon has classified
            detailed cost breakdowns. The $11.3B figure for 6 days and $16.5B for 12 days are the only
            independently confirmed numbers. Daily estimates between confirmed data points are interpolated
            based on known operational tempo.
          </p>
        </div>
      </section>

      {/* Hidden Costs */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Hidden Costs Nobody&apos;s Counting
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-2">🔧 Munitions Replacement</h3>
            <p className="text-stone-600">
              The US has fired an estimated 1,000+ Tomahawks, 300+ JASSM-ERs, and hundreds of other precision-guided
              munitions. Replacing these stockpiles will cost <strong>$8-12 billion</strong> and take 3-5 years.
              Raytheon produces roughly 400 Tomahawks per year. At current expenditure rates, the US is consuming
              a year&apos;s production in weeks. This &quot;munitions deficit&quot; was already a concern before the war — the
              Ukraine conflict had drawn down reserves significantly.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: CSIS Missile Defense Project; Raytheon annual production data</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-2">⛽ Fuel Costs</h3>
            <p className="text-stone-600">
              The US military is the world&apos;s single largest institutional consumer of fuel. A carrier strike
              group burns approximately 100,000 gallons of fuel per day. With 3 groups plus hundreds of daily
              aircraft sorties, estimated fuel consumption is <strong>500,000+ gallons per day</strong> at
              elevated wartime prices. The irony: a war partly about oil is consuming massive quantities of it.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: DOD Operational Energy Strategy; Defense Logistics Agency fuel data</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-2">🏥 Long-term Veterans&apos; Care</h3>
            <p className="text-stone-600">
              With 303 US service members wounded in 28 days, the long-term medical and disability costs are
              already building. The Costs of War Project at Brown University estimates that veterans&apos; care
              for Iraq and Afghanistan will ultimately cost <strong>$2.2 trillion</strong>. Even with limited
              casualties so far, blast injuries, PTSD, and toxic exposure claims from Iran will add billions
              over the next 40 years.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: Brown University Costs of War Project; VA budget projections</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-2">📉 Economic Disruption</h3>
            <p className="text-stone-600">
              Oil prices have surged from ~$60 to $108+ per barrel — an 80% increase. Every $10 increase in oil
              prices costs the US economy approximately <strong>$70 billion per year</strong> in reduced GDP.
              A $48 increase means roughly <strong>$336 billion in annual economic drag</strong> on the US economy
              alone. The S&amp;P 500 has lost over $3 trillion in market capitalization since the war began.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: Federal Reserve economic models; EIA price impact analysis; S&amp;P market data</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 text-lg mb-2">🌍 Allied Support &amp; Reconstruction</h3>
            <p className="text-stone-600">
              The US is providing emergency missile defense to Israel ($500M package on Day 18), logistical
              support to Gulf allies, and naval escort operations for commercial shipping. When the war ends,
              reconstruction costs for Iran could dwarf Iraq&apos;s $60 billion reconstruction. With 70,000 homes
              damaged, 300 health facilities hit, and 600 schools destroyed, the eventual bill could exceed
              <strong>$100 billion</strong>.
            </p>
            <p className="text-stone-500 text-xs mt-2">Source: SIGAR Iraq reconstruction reports (for comparison); UN damage assessment methodology</p>
          </div>
        </div>
      </section>

      {/* Comparison to Iraq */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          How Does This Compare to Iraq and Afghanistan?
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="text-left p-3 text-sm">Metric</th>
                <th className="text-left p-3 text-sm">Iran (First Month)</th>
                <th className="text-left p-3 text-sm">Iraq (First Month)</th>
                <th className="text-left p-3 text-sm">Afghanistan (First Month)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="p-3 text-sm font-medium text-stone-900">Total Cost</td>
                <td className="p-3 text-sm text-red-600 font-bold">$51.2B+</td>
                <td className="p-3 text-sm text-stone-600">~$9B</td>
                <td className="p-3 text-sm text-stone-600">~$3.8B</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 text-sm font-medium text-stone-900">Daily Burn Rate</td>
                <td className="p-3 text-sm text-red-600 font-bold">$1.88B/day</td>
                <td className="p-3 text-sm text-stone-600">~$300M/day</td>
                <td className="p-3 text-sm text-stone-600">~$125M/day</td>
              </tr>
              <tr>
                <td className="p-3 text-sm font-medium text-stone-900">Targets Struck</td>
                <td className="p-3 text-sm text-red-600 font-bold">10,000+</td>
                <td className="p-3 text-sm text-stone-600">~1,700</td>
                <td className="p-3 text-sm text-stone-600">~500</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 text-sm font-medium text-stone-900">Cruise Missiles Fired</td>
                <td className="p-3 text-sm text-red-600 font-bold">1,000+</td>
                <td className="p-3 text-sm text-stone-600">802</td>
                <td className="p-3 text-sm text-stone-600">~50</td>
              </tr>
              <tr>
                <td className="p-3 text-sm font-medium text-stone-900">Carrier Groups</td>
                <td className="p-3 text-sm text-red-600 font-bold">3</td>
                <td className="p-3 text-sm text-stone-600">5</td>
                <td className="p-3 text-sm text-stone-600">2</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="p-3 text-sm font-medium text-stone-900">Congressional Vote</td>
                <td className="p-3 text-sm text-red-600 font-bold">None</td>
                <td className="p-3 text-sm text-stone-600">Yes (296-133)</td>
                <td className="p-3 text-sm text-stone-600">Yes (AUMF, 420-1)</td>
              </tr>
              <tr>
                <td className="p-3 text-sm font-medium text-stone-900">Oil Price Impact</td>
                <td className="p-3 text-sm text-red-600 font-bold">+80% ($108)</td>
                <td className="p-3 text-sm text-stone-600">+35% ($37)</td>
                <td className="p-3 text-sm text-stone-600">+15%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-stone-500 text-xs mt-3">
          Sources: CBO war cost reports; DOD budget justifications; EIA historical oil price data.
          Iraq first-month estimate based on CBO &quot;Estimated Costs of a Potential Conflict With Iraq&quot; (2003).
          Afghanistan data from DOD &quot;Cost of War&quot; quarterly reports.
        </p>
      </section>

      {/* The $200B Request */}
      <section className="my-12">
        <div className="bg-red-950 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
            The $200 Billion Request
          </h2>
          <p className="text-stone-300 mb-4">
            On Day 19 (March 18), the Pentagon submitted a <strong className="text-red-400">$200 billion
            supplemental funding request</strong> to Congress — the largest single wartime funding request
            in American history. For context:
          </p>
          <ul className="space-y-3 text-stone-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>The entire annual budget of the Department of Education is <strong>$90 billion</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>The annual budget for all US infrastructure spending is <strong>$110 billion</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Total US spending on cancer research is <strong>$7 billion per year</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>$200 billion could fund <strong>free school lunches for every American child for 25 years</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>It equals roughly <strong>$600 for every person in America</strong></span>
            </li>
          </ul>
          <p className="text-stone-500 text-xs mt-4">Sources: OMB FY2026 budget; USDA school lunch program data; NIH budget office</p>
        </div>
      </section>

      {/* Projected Costs */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Where Does This End? Projected Costs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-stone-200 rounded-lg p-5 text-center">
            <div className="text-sm text-stone-500 mb-2">If war ends in 3 months</div>
            <div className="text-3xl font-bold text-stone-900">$150-200B</div>
            <div className="text-sm text-stone-600 mt-2">Air campaign only, no ground invasion</div>
          </div>
          <div className="bg-white border border-amber-300 rounded-lg p-5 text-center">
            <div className="text-sm text-amber-600 mb-2">If war lasts 1 year</div>
            <div className="text-3xl font-bold text-stone-900">$500B-$1T</div>
            <div className="text-sm text-stone-600 mt-2">Sustained operations + economic costs</div>
          </div>
          <div className="bg-white border border-red-300 rounded-lg p-5 text-center">
            <div className="text-sm text-red-600 mb-2">If ground troops deploy</div>
            <div className="text-3xl font-bold text-stone-900">$2-3T+</div>
            <div className="text-sm text-stone-600 mt-2">Iran is 4x the size of Iraq</div>
          </div>
        </div>

        <p className="text-stone-600 mt-6">
          For reference, the Iraq War cost <strong>$1.1 trillion</strong> in direct spending over 8 years, and
          an estimated <strong>$3 trillion</strong> including long-term veterans&apos; care and interest on war debt
          (per Nobel laureate economist Joseph Stiglitz). Afghanistan cost <strong>$2.3 trillion</strong> over 20 years.
          Iran, with a military 3x the size of Saddam&apos;s Iraq and a country 4x larger, could make both look cheap.
        </p>
        <p className="text-stone-500 text-xs mt-2">
          Sources: CBO cumulative war cost reports; Stiglitz &amp; Bilmes, &quot;The Three Trillion Dollar War&quot; (2008);
          Brown University Costs of War Project
        </p>
      </section>

      {/* Who Profits */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Who Profits From a $200 Billion War?
        </h2>
        <p className="text-stone-600 mb-6">
          Defense contractor stocks surged in the days following the start of Operation Epic Fury.
          Every Tomahawk fired is a Raytheon sale. Every B-2 sortie is Boeing maintenance revenue.
          Every interceptor launched is money for Lockheed Martin.
        </p>

        <div className="space-y-3">
          <div className="bg-white border border-stone-200 rounded-lg p-4 flex justify-between items-center">
            <div>
              <span className="font-bold text-stone-900">Raytheon Technologies (RTX)</span>
              <span className="text-stone-500 text-sm ml-2">Tomahawk, SM-3, Patriot</span>
            </div>
            <span className="text-green-600 font-bold">↑ 18% since Feb 28</span>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 flex justify-between items-center">
            <div>
              <span className="font-bold text-stone-900">Lockheed Martin (LMT)</span>
              <span className="text-stone-500 text-sm ml-2">F-35, JASSM, THAAD</span>
            </div>
            <span className="text-green-600 font-bold">↑ 22% since Feb 28</span>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 flex justify-between items-center">
            <div>
              <span className="font-bold text-stone-900">Northrop Grumman (NOC)</span>
              <span className="text-stone-500 text-sm ml-2">B-2, B-21, GBU-57</span>
            </div>
            <span className="text-green-600 font-bold">↑ 15% since Feb 28</span>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 flex justify-between items-center">
            <div>
              <span className="font-bold text-stone-900">General Dynamics (GD)</span>
              <span className="text-stone-500 text-sm ml-2">Submarines, munitions</span>
            </div>
            <span className="text-green-600 font-bold">↑ 12% since Feb 28</span>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 flex justify-between items-center">
            <div>
              <span className="font-bold text-stone-900">L3Harris Technologies (LHX)</span>
              <span className="text-stone-500 text-sm ml-2">ISR, communications</span>
            </div>
            <span className="text-green-600 font-bold">↑ 10% since Feb 28</span>
          </div>
        </div>
        <p className="text-stone-500 text-xs mt-3">Source: NYSE/NASDAQ market data as of March 27, 2026</p>
      </section>

      {/* Bottom Line */}
      <section className="my-12">
        <div className="bg-stone-100 border-l-4 border-red-600 rounded-r-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">The Bottom Line</h2>
          <p className="text-stone-700">
            In 28 days, Operation Epic Fury has cost more than the entire first year of the Iraq War. At $1.88 billion
            per day, the US is spending more on this war every 53 seconds than the median American household earns in
            a year ($75,000). The $200 billion supplemental request — which hasn&apos;t even been voted on yet — would
            make this the most expensive military authorization in history, surpassing the $190 billion FY2008 Iraq/Afghanistan
            supplemental. And there is no end date, no exit strategy, and no congressional authorization.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/iran-day-by-day" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran 2026: Day by Day →</div>
            <div className="text-stone-500 text-sm">Complete timeline of Operation Epic Fury</div>
          </Link>
          <Link href="/analysis/iran-vs-iraq-war" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Iran War vs Iraq War →</div>
            <div className="text-stone-500 text-sm">Side-by-side comparison of America&apos;s two biggest Middle East wars</div>
          </Link>
          <Link href="/analysis/hormuz-economic-impact" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">Strait of Hormuz Crisis →</div>
            <div className="text-stone-500 text-sm">The global economic fallout from closing the world&apos;s oil chokepoint</div>
          </Link>
          <Link href="/analysis/iran-war-no-authorization" className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
            <div className="font-bold text-stone-900">The War Congress Never Authorized →</div>
            <div className="text-stone-500 text-sm">Constitutional crisis of an unauthorized $200B war</div>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
