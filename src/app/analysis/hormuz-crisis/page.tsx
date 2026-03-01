import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The Strait of Hormuz: How One Waterway Could Crash the Global Economy',
  description: '20% of global oil and 20% of global LNG flows through a 21-mile-wide strait. Iran closed it on February 28, 2026. Oil is heading past $100. The global economy is in crisis.',
  openGraph: {
    title: 'The Strait of Hormuz: How One Waterway Could Crash the Global Economy',
    description: '21 miles wide. 20% of world oil. 20% of world LNG. Iran closed it. There is no detour.',
    url: 'https://www.warcosts.org/analysis/hormuz-crisis',
  },
}

const dependentCountries = [
  { country: 'Saudi Arabia', dailyExport: '7.4M barrels/day', percentThroughHormuz: '~90%', notes: 'Has East-West pipeline (5M bbl/day capacity) but it can\'t replace full exports' },
  { country: 'Iraq', dailyExport: '4.4M barrels/day', percentThroughHormuz: '~95%', notes: 'Almost entirely dependent — Basra terminals face Hormuz' },
  { country: 'UAE', dailyExport: '3.5M barrels/day', percentThroughHormuz: '~85%', notes: 'Habshan-Fujairah pipeline bypasses Hormuz (1.5M bbl/day) but can\'t handle full volume' },
  { country: 'Kuwait', dailyExport: '2.7M barrels/day', percentThroughHormuz: '100%', notes: 'No bypass options. Completely landlocked by the strait.' },
  { country: 'Qatar', dailyExport: '1.8M barrels + world\'s largest LNG', percentThroughHormuz: '100%', notes: 'World\'s top LNG exporter. Every drop goes through Hormuz. No alternative.' },
  { country: 'Iran', dailyExport: '1.5M barrels/day (pre-sanctions)', percentThroughHormuz: '100%', notes: 'Iran hurts its own exports — willing to accept mutual destruction' },
]

const historicalThreats = [
  { year: '1984–1988', event: 'Tanker War (Iran-Iraq War)', details: 'Iran and Iraq attacked 451 tankers and merchant ships in the Gulf. US launched Operation Earnest Will to escort Kuwaiti tankers. USS Stark hit by Iraqi missile (37 killed). USS Samuel B. Roberts hit by Iranian mine. Led to Operation Praying Mantis — largest US naval battle since WWII.' },
  { year: '1990–1991', event: 'Gulf War', details: 'Iraq invaded Kuwait, threatening Gulf shipping. Saddam set 700+ oil wells on fire. Coalition forces secured the strait but oil prices doubled from $17 to $40/barrel within months of the invasion.' },
  { year: '2008', event: 'IRGC speedboat incident', details: 'Five IRGC speedboats confronted three US Navy warships in the strait. Radio transmission: "I am coming to you. You will explode in a few minutes." Nearly triggered a shooting war.' },
  { year: '2011–2012', event: 'Sanctions escalation', details: 'Iran explicitly threatened to close Hormuz if sanctions were imposed. VP Rahimi: "Not a drop of oil will pass through the Strait of Hormuz." US moved additional carrier groups to the region.' },
  { year: '2019', event: 'Tanker attacks', details: 'Six tankers attacked in Gulf of Oman (May-June). Iran shot down US RQ-4 Global Hawk drone ($130M). Trump ordered retaliatory strike then cancelled it "10 minutes before." Iran seized British-flagged Stena Impero.' },
  { year: 'Feb 3, 2026', event: 'IRGC boarding attempt', details: 'IRGC Navy attempted to board US-flagged tanker M/V Stena Imperative. Precursor to full closure.' },
  { year: 'Feb 28, 2026', event: 'Full closure', details: 'Iran declares the Strait of Hormuz closed following Operation Epic Fury. First actual closure in history. Oil heading past $100/barrel.' },
]

const alternativeRoutes = [
  { name: 'East-West Pipeline (Petroline)', country: 'Saudi Arabia', capacity: '5M bbl/day', limitation: 'Only handles ~70% of Saudi exports. Takes months to ramp up. Vulnerable to Houthi drone/missile attacks — which have already resumed.' },
  { name: 'Habshan-Fujairah Pipeline', country: 'UAE', capacity: '1.5M bbl/day', limitation: 'Handles less than half of UAE exports. Fujairah port has limited tanker capacity.' },
  { name: 'Iraq-Turkey Pipeline (Kirkuk-Ceyhan)', country: 'Iraq', capacity: '1.6M bbl/day (theoretical)', limitation: 'Offline since March 2023 due to Turkey-Iraq-Kurdistan disputes. Even at capacity, handles less than half of Iraq\'s exports.' },
  { name: 'Suez Canal / SUMED Pipeline', country: 'Egypt', capacity: '6.5M bbl/day combined', limitation: 'These handle traffic AFTER Hormuz. If oil can\'t get out of the Gulf, there\'s nothing to send through Suez.' },
]

const consumerImpact = [
  { item: 'Gasoline', current: '$3.20/gallon avg', projected: '$4.50–6.00/gallon', timeline: 'Within 2-4 weeks', mechanism: 'Direct oil price passthrough + panic buying + refinery margin expansion' },
  { item: 'Diesel/Trucking', current: '$3.80/gallon avg', projected: '$5.00–7.00/gallon', timeline: 'Within 1-2 weeks', mechanism: 'Diesel tracks crude more directly. Every product shipped by truck gets more expensive.' },
  { item: 'Food', current: 'CPI food +2.1% YoY', projected: '+15-25% within 60 days', timeline: '30-90 days', mechanism: 'Diesel-dependent supply chains. Fertilizer prices spike (natural gas feedstock). Farm equipment fuel costs.' },
  { item: 'Electricity', current: 'LNG spot ~$3.50/MMBtu', projected: '$8-15/MMBtu', timeline: 'Immediate', mechanism: '20% of global LNG transits Hormuz. Power plants burning gas face immediate price shocks.' },
  { item: 'Flights', current: 'Jet fuel $2.60/gallon', projected: '$4.00-5.50/gallon', timeline: 'Within weeks', mechanism: 'Airlines will pass costs through. Expect surcharges, route cancellations, and fare increases of 20-40%.' },
  { item: 'Heating', current: 'Varies by region', projected: '+30-50%', timeline: 'Next heating season', mechanism: 'Natural gas and heating oil both spike. Northeast and Midwest hit hardest.' },
]

export default function HormuzCrisisPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Hormuz Crisis' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● ACTIVE CRISIS</span>
          <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Energy Security</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Strait of Hormuz
        </h1>
        <p className="text-xl text-stone-300 mb-4">How One Waterway Could Crash the Global Economy</p>
        <p className="text-stone-400 text-lg">
          Twenty-one miles wide. Twenty percent of the world&apos;s oil. Twenty percent of its liquefied natural gas.
          Six countries&apos; entire economies depend on it. On February 28, 2026 — hours after the first American bombs fell
          on Tehran — Iran closed it. For the first time in history, the most important chokepoint on Earth is shut.
          There is no detour. There is no Plan B. And every American is about to feel it.
        </p>
      </div>

      <ShareButtons title="The Strait of Hormuz Crisis" />

      {/* AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">AI Overview — Key Data</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 <strong className="text-white">20-21 million barrels/day</strong> of oil and <strong className="text-white">~15% of global LNG</strong> transit the Strait of Hormuz — closed for the first time ever on Feb 28, 2026</li>
          <li>📊 Oil prices heading toward <strong className="text-white">$100+/barrel</strong>; tanker insurance premiums have <strong className="text-white">tripled</strong></li>
          <li>📊 American gas prices projected to hit <strong className="text-white">$4.50–6.00/gallon</strong> within weeks; food prices up <strong className="text-white">15-25%</strong> within 60 days</li>
          <li>📊 Alternative pipelines can only handle <strong className="text-white">~30%</strong> of normal Hormuz traffic — and most are already at or near capacity</li>
          <li>📊 The Strait has been <strong className="text-white">threatened 7 times</strong> since 1984 but never actually closed until now — every threat caused price spikes</li>
        </ul>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Most Important 21 Miles on Earth</h2>
        <p>
          The Strait of Hormuz is a narrow passage between Iran and Oman connecting the Persian Gulf to the Gulf of Oman
          and the open ocean. At its narrowest, it is just 21 miles wide. The shipping lanes are even narrower — two
          2-mile-wide channels separated by a 2-mile buffer zone. Every tanker, every LNG carrier, every cargo vessel
          serving the Gulf states must pass through these lanes.
        </p>
        <p>
          To understand why this matters, consider the numbers: approximately 20-21 million barrels of oil pass through
          the strait every day. That&apos;s roughly 20% of global oil consumption. Additionally, Qatar — the world&apos;s largest
          LNG exporter — ships virtually all of its natural gas through Hormuz. So does a significant portion of UAE
          and Omani LNG production.
        </p>
        <p>
          There is no comparable chokepoint anywhere on Earth. The Suez Canal handles about 5-6 million barrels per day.
          The Panama Canal handles less than 1 million. The Strait of Malacca handles about 16 million barrels — but
          has alternative routes. Hormuz is unique in that it is both the largest energy chokepoint and the one with
          the fewest alternatives.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;You can&apos;t replace the Strait of Hormuz. It&apos;s not a road with a detour. It&apos;s the only door
          out of a room that holds a fifth of the world&apos;s energy. When someone locks that door, everyone inside suffocates.&rdquo;</p>
          <footer>— Former CENTCOM energy security analyst</footer>
        </blockquote>
      </div>

      {/* Who Depends On It */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Who Depends on the Strait</h2>
        <div className="space-y-4">
          {dependentCountries.map(c => (
            <div key={c.country} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{c.country}</h3>
                <span className="text-red-400 font-bold">{c.percentThroughHormuz} via Hormuz</span>
              </div>
              <p className="text-stone-300 mt-1">Exports: {c.dailyExport}</p>
              <p className="text-stone-400 text-sm mt-1">{c.notes}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">February 28, 2026: The Day It Actually Happened</h2>
        <p>
          For decades, Iran threatened to close the Strait of Hormuz. Analysts debated whether they would. Whether they could.
          Whether the US Navy would prevent it. Whether it was a bluff.
        </p>
        <p>
          On February 28, 2026 — within hours of Operation Epic Fury&apos;s opening strikes — Iran declared the strait closed.
          IRGC naval forces deployed mines, fast attack boats, and anti-ship missile batteries along the Iranian coastline.
          Iran&apos;s shore-based cruise missiles — including the Noor, Qader, and Khalij Fars systems — can cover the entire
          width of the strait from hardened positions in the mountains overlooking the water.
        </p>
        <p>
          The response from the shipping industry was immediate. Oil majors and top trading houses suspended crude shipments.
          Lloyd&apos;s of London and other maritime insurers tripled war-risk premiums overnight. Thousands of flights across
          the Middle East were cancelled. Bloomberg warned of &ldquo;major oil price disruption.&rdquo;
        </p>
        <p>
          This was not a drill. This was not a threat. For the first time in the modern era, the world&apos;s most critical
          energy chokepoint was shut.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Historical Context: Seven Times the World Held Its Breath</h2>
        <p>
          The February 28 closure didn&apos;t happen in a vacuum. The Strait of Hormuz has been a flashpoint for four decades.
          Every previous threat — even without actual closure — sent oil prices surging and markets into panic.
        </p>
      </div>

      {/* Historical Timeline */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Hormuz Crisis Timeline</h2>
        <div className="space-y-4">
          {historicalThreats.map(h => (
            <div key={h.year} className="border-l-2 border-red-600 pl-4">
              <div className="flex items-center gap-2">
                <span className="text-red-400 font-bold">{h.year}</span>
                <span className="text-white font-semibold">{h.event}</span>
              </div>
              <p className="text-stone-400 text-sm mt-1">{h.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Why the US Navy Can&apos;t Just &ldquo;Reopen&rdquo; It</h2>
        <p>
          The instinctive response from Washington is that the US Navy — the most powerful naval force in history — can
          simply force the strait open. This fundamentally misunderstands the geography and the threat.
        </p>
        <p>
          Iran&apos;s strategy is not about naval superiority. It&apos;s about <strong>area denial</strong>. The Iranian coastline
          overlooking Hormuz is mountainous terrain riddled with hardened bunkers, tunnel systems, and mobile missile
          launchers. Iran has deployed thousands of anti-ship cruise missiles — many in positions that are extremely
          difficult to locate and destroy from the air.
        </p>
        <p>
          Additionally, Iran has the world&apos;s largest fleet of fast attack craft — hundreds of small, fast boats armed
          with missiles, torpedoes, and mines. In the confined waters of the strait, these swarm tactics can overwhelm
          even sophisticated naval defenses. The US Navy&apos;s own war games (Millennium Challenge 2002) demonstrated
          that swarm attacks in confined waters could sink a carrier battle group.
        </p>
        <p>
          Then there are mines. Iran has an estimated 5,000+ naval mines of various types, from simple contact mines
          to sophisticated influence mines that detect a ship&apos;s magnetic or acoustic signature. Clearing a minefield
          in the strait — while under fire — could take weeks or months. During the Tanker War, a single Iranian mine
          nearly sank the USS Samuel B. Roberts.
        </p>
        <p>
          The reality is that &ldquo;reopening&rdquo; the Strait of Hormuz against a determined Iranian defense is not a
          weekend operation. It&apos;s a major military campaign in itself — one that would likely cost ships, aircraft,
          and lives, and could take weeks even under the best circumstances.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Alternative Routes: The Detours That Don&apos;t Exist</h2>
        <p>
          Whenever Hormuz is discussed, someone inevitably asks about alternative routes. The answer is stark:
          alternatives exist, but they are grossly insufficient.
        </p>
      </div>

      {/* Alternative Routes */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Alternative Pipeline Routes</h2>
        <div className="space-y-4">
          {alternativeRoutes.map(r => (
            <div key={r.name} className="border border-stone-700 rounded-lg p-4">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{r.name}</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div><span className="text-stone-400 text-sm">Country</span><br /><span className="text-white">{r.country}</span></div>
                <div><span className="text-stone-400 text-sm">Capacity</span><br /><span className="text-red-400 font-semibold">{r.capacity}</span></div>
              </div>
              <p className="text-stone-400 text-sm mt-2"><strong>Limitation:</strong> {r.limitation}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          Combined maximum bypass capacity: ~8M bbl/day (theoretical). Normal Hormuz traffic: 20-21M bbl/day.
          Gap: <strong className="text-red-400">12+ million barrels per day</strong> with no alternative.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">What Americans Will Pay</h2>
        <p>
          The Strait of Hormuz might seem like a distant waterway with an unfamiliar name. But every American interacts
          with it every day — at the gas pump, at the grocery store, in their utility bills. Here&apos;s what the closure
          means for your wallet:
        </p>
      </div>

      {/* Consumer Impact */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Impact on American Consumers</h2>
        <div className="space-y-4">
          {consumerImpact.map(c => (
            <div key={c.item} className="border border-stone-700 rounded-lg p-4">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{c.item}</h3>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div><span className="text-stone-400 text-sm">Current</span><br /><span className="text-stone-300">{c.current}</span></div>
                <div><span className="text-stone-400 text-sm">Projected</span><br /><span className="text-red-400 font-bold">{c.projected}</span></div>
                <div><span className="text-stone-400 text-sm">Timeline</span><br /><span className="text-white">{c.timeline}</span></div>
              </div>
              <p className="text-stone-400 text-sm mt-2">{c.mechanism}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <p>
          For the average American household spending $2,500/year on gasoline and $10,000/year on food, the Hormuz
          closure could mean <strong>$3,000-5,000 in additional annual costs</strong>. That&apos;s not a tax you voted for.
          It&apos;s not a stimulus that comes back. It&apos;s money extracted from your family to pay for the consequences of a
          war you were never asked about.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Global Ripple Effect</h2>
        <p>
          The impact extends far beyond the United States. Asian economies — particularly Japan, South Korea, India, and
          China — are even more dependent on Gulf oil than the US. Japan imports 88% of its oil from the Middle East.
          South Korea imports 70%. India imports 60%.
        </p>
        <p>
          If the closure persists, these countries will begin hoarding available supply, bidding up prices further.
          CNBC reports that Asian strategic petroleum reserves could be drawn down rapidly. Japan has about 150 days
          of reserves. South Korea has about 90 days. India has about 65 days. After that, rationing.
        </p>
        <p>
          Europe faces a different crisis. The EU has been shifting from Russian pipeline gas to LNG — much of it from
          Qatar, which ships entirely through Hormuz. A prolonged closure would force Europe back toward Russian gas
          or face energy shortages heading into the next winter. Putin couldn&apos;t have designed a better scenario.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Recession Trigger</h2>
        <p>
          Economists have long identified oil price spikes as reliable recession triggers. The 1973 oil embargo caused
          the deepest recession since the Great Depression. The 1979 oil crisis triggered stagflation and the Volcker
          shock. The 2008 oil spike to $147/barrel preceded the financial crisis by months.
        </p>
        <p>
          A sustained move to $100+ oil in 2026 — combined with already-elevated interest rates — creates a toxic
          combination. The Fed would face an impossible choice: raise rates to fight oil-driven inflation (crushing
          the economy further) or cut rates to support growth (letting inflation spiral). There is no good option.
        </p>
        <p>
          Goldman Sachs estimated in 2024 that a full Hormuz closure lasting three months would reduce global GDP by
          approximately 3-5% — equivalent to the 2008 financial crisis. For the US economy, that translates to
          $800 billion to $1.3 trillion in lost output. In a single quarter.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;The Strait of Hormuz is the jugular vein of the global economy. You don&apos;t cut a jugular and apply a
          Band-Aid. When it bleeds, everything bleeds.&rdquo;</p>
          <footer>— Energy security analyst, Chatham House</footer>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">How Long Can Iran Keep It Closed?</h2>
        <p>
          The critical question is duration. A 48-hour closure is a market shock. A 2-week closure is a crisis. A
          2-month closure is a global recession. A 6-month closure is an economic catastrophe with geopolitical
          consequences that reshape the world order.
        </p>
        <p>
          Iran has the capability to maintain closure for an extended period. Their mine-laying capacity alone could
          take months to clear. Their mobile anti-ship missile launchers are extremely difficult to neutralize — the
          mountainous Iranian coastline provides natural concealment, and Iran has spent decades building hardened
          tunnel systems specifically for this scenario.
        </p>
        <p>
          Even after military suppression of Iranian defenses, the psychological effect on shipping would persist.
          Insurance companies would maintain elevated war-risk premiums. Ship captains and crews would be reluctant
          to transit. It could take months after the military threat is eliminated before commercial traffic returns
          to normal levels.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line</h2>
        <p>
          The Strait of Hormuz is the single greatest vulnerability in the global energy system. Iran has exploited it.
          There is no quick fix, no bypass, no alternative that can replace 20 million barrels a day of oil and
          massive LNG flows. The economic consequences will be felt by every American — at the pump, at the store,
          in their heating bills, in their retirement accounts.
        </p>
        <p>
          When the architects of Operation Epic Fury planned their strike campaign, they knew Iran would close Hormuz.
          They launched anyway. The cost of that decision will be measured not just in military spending, but in the
          economic pain of 330 million Americans and billions of people worldwide.
        </p>
        <p>
          You can&apos;t replace the Strait of Hormuz. It&apos;s not a road with a detour. And now it&apos;s closed.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/cost-of-iran">What Will Iran Cost?</Link></li>
          <li><Link href="/analysis/iran-2026">Iran 2026: Another Undeclared War?</Link></li>
          <li><Link href="/analysis/economic-warfare">Economic Warfare</Link></li>
          <li><Link href="/analysis/what-could-we-buy">What $11.6 Trillion Could Have Bought Instead</Link></li>
          <li><Link href="/analysis/war-profiteering">War Is a Racket: Who Gets Rich</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
