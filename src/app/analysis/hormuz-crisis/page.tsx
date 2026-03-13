import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'

export const metadata: Metadata = {
  title: 'The Strait of Hormuz: How One Waterway Could Crash the Global Economy',
  description: '20% of global oil flows through a 21-mile strait. Iran is mining it. 80% traffic drop. 15M bbl/day stranded. Oil past $100. 5,000+ mines in inventory. The global economy is in crisis.',
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
  { country: 'Iran', dailyExport: '2.1M barrels/day (actual, during war)', percentThroughHormuz: '100%', notes: 'Paradoxically, Iran is still exporting — actually MORE than pre-war (2.0M). Iran mines to threaten others while profiting from the chaos.' },
]

const historicalThreats = [
  { year: '1984–1988', event: 'Tanker War (Iran-Iraq War)', details: 'Iran and Iraq attacked 451 tankers and merchant ships in the Gulf. US launched Operation Earnest Will to escort Kuwaiti tankers. USS Stark hit by Iraqi missile (37 killed). USS Samuel B. Roberts hit by Iranian mine. Led to Operation Praying Mantis — largest US naval battle since WWII.' },
  { year: '1990–1991', event: 'Gulf War', details: 'Iraq invaded Kuwait, threatening Gulf shipping. Saddam set 700+ oil wells on fire. Coalition forces secured the strait but oil prices doubled from $17 to $40/barrel within months of the invasion.' },
  { year: '2008', event: 'IRGC speedboat incident', details: 'Five IRGC speedboats confronted three US Navy warships in the strait. Radio transmission: "I am coming to you. You will explode in a few minutes." Nearly triggered a shooting war.' },
  { year: '2011–2012', event: 'Sanctions escalation', details: 'Iran explicitly threatened to close Hormuz if sanctions were imposed. VP Rahimi: "Not a drop of oil will pass through the Strait of Hormuz." US moved additional carrier groups to the region.' },
  { year: '2019', event: 'Tanker attacks', details: 'Six tankers attacked in Gulf of Oman (May-June). Iran shot down US RQ-4 Global Hawk drone ($130M). Trump ordered retaliatory strike then cancelled it "10 minutes before." Iran seized British-flagged Stena Impero.' },
  { year: 'Feb 3, 2026', event: 'IRGC boarding attempt', details: 'IRGC Navy attempted to board US-flagged tanker M/V Stena Imperative. Precursor to full closure.' },
  { year: 'Feb 28, 2026', event: 'Hormuz under threat', details: 'Iran threatens Strait of Hormuz following Operation Epic Fury. IRGC deploys fast attack boats and anti-ship missiles. Oil heading past $100/barrel. Maritime traffic drops 80%.' },
  { year: 'Mar 10, 2026', event: 'Iran begins mining', details: 'CENTCOM confirms Iran has begun laying naval mines in the Strait. 16 Iranian minelayers destroyed. Fewer than 10 mines deployed so far — but Iran has 5,000+ mine inventory. 15M bbl/day crude + 4.5M bpd refined fuels stranded in Gulf. Iran itself still exporting 2.1M bbl/day.' },
  { year: 'Mar 11, 2026', event: 'Maritime chaos deepens', details: 'UKMTO reports 17 maritime incidents Feb 28-Mar 11 (13 attacks, 4 suspicious). Iranian drones strike Port of Salalah, Oman — fires at gasoline storage. Dubai International Airport struck twice. Bahrain refinery ablaze after Iranian missile.' },
  { year: 'Mar 12-13, 2026', event: 'Iran declares control of Hormuz', details: 'New Supreme Leader Mojtaba Khamenei says Strait of Hormuz should remain closed as "tool to pressure the enemy." Brent crude closes above $100/barrel for first time since Aug 2022 — up from ~$70 pre-war. Treasury Sec. Bessent says Navy will escort tankers "as soon as militarily possible" but not yet. Iraq shuts port operations after Indian crew member killed on US-owned oil tanker in Iraqi waters. Qatar airspace officially closed; 140+ special flights repatriating citizens. Australia orders non-essential officials to leave UAE and Israel. Shipping at near-total halt.' },
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
      <ArticleSchema title="The Strait of Hormuz: How One Waterway Could Crash the Global Economy" description="20% of global oil and 20% of global LNG flows through a 21-mile-wide strait. Iran closed it on February 28, 2026. Oil is heading past $100. The global economy i" url="/analysis/hormuz-crisis" />
      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
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
          on Tehran — Iran began threatening it. By Day 11, Iran was actively mining the strait with naval mines.
          Maritime traffic has dropped 80%. 15 million barrels per day are stranded. Oil is past $100.
          There is no detour. There is no Plan B. And every American is already feeling it.
        </p>
      </div>

      <ShareButtons title="The Strait of Hormuz Crisis" />

      {/* AI Overview */}
      <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">AI Overview — Key Data</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 <strong className="text-white">20-21 million barrels/day</strong> of oil and <strong className="text-white">~15% of global LNG</strong> transit the Strait of Hormuz — closed for the first time ever on Feb 28, 2026</li>
          <li>📊 Oil prices heading toward <strong className="text-white">$100+/barrel</strong>; tanker insurance premiums have <strong className="text-white">tripled</strong></li>
          <li>📊 American gas prices projected to hit <strong className="text-white">$4.50–6.00/gallon</strong> within weeks; food prices up <strong className="text-white">15-25%</strong> within 60 days</li>
          <li>📊 Alternative pipelines can only handle <strong className="text-white">~30%</strong> of normal Hormuz traffic — and most are already at or near capacity</li>
          <li>📊 Iran has begun <strong className="text-white">mining the Strait</strong> — CENTCOM destroyed 16 minelayers on Day 11. Iran has <strong className="text-white">5,000+ mines</strong> in inventory</li>
          <li>📊 <strong className="text-white">80% drop</strong> in non-Iranian maritime traffic — but Iran itself still exports <strong className="text-white">2.1M bbl/day</strong> (more than pre-war)</li>
          <li>📊 <strong className="text-white">17 maritime incidents</strong> Feb 28-Mar 11 (13 attacks, 4 suspicious) — UKMTO. Bahrain refinery ablaze, Oman port fires, Dubai airport struck</li>
        </ul>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Most Important 21 Miles on Earth</h2>
        <p>
          The Strait of Hormuz is a narrow passage between Iran and Oman connecting the Persian Gulf to the Gulf of Oman
          and the open ocean. At its narrowest point — between Cape Musandam (Oman) and Larak Island (Iran) — it is just 
          21 miles wide. The shipping lanes are even narrower: two 2-mile-wide channels (one inbound, one outbound) separated 
          by a 2-mile buffer zone. Every tanker, every LNG carrier, every cargo vessel serving the Gulf states must pass 
          through these lanes in single file.
        </p>
        <p>
          To understand why this matters, consider the numbers: approximately 20-21 million barrels of oil pass through
          the strait every day. That&apos;s roughly 20% of global oil consumption and 35% of seaborne oil trade. Additionally, 
          Qatar — the world&apos;s largest LNG exporter — ships virtually all of its 77 million tons annually through Hormuz. 
          So does significant UAE (6.8 million tons) and Omani (11.1 million tons) LNG production. Combined: nearly 
          100 million tons of LNG per year, representing approximately 21% of global LNG trade.
        </p>
        <p>
          There is no comparable chokepoint anywhere on Earth. The Suez Canal handles about 5-6 million barrels per day — 
          important, but replaceable via the Cape of Good Hope. The Panama Canal handles less than 1 million barrels daily. 
          The Strait of Malacca handles about 16 million barrels — but ships can detour through the Sunda and Lombok straits. 
          Hormuz is unique: it is simultaneously the largest energy chokepoint and the one with the fewest viable alternatives.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;You can&apos;t replace the Strait of Hormuz. It&apos;s not a road with a detour. It&apos;s the only door
          out of a room that holds a fifth of the world&apos;s energy. When someone locks that door, everyone inside suffocates.&rdquo;</p>
          <footer>— Former CENTCOM energy security analyst</footer>
        </blockquote>

        <h3 className="font-[family-name:var(--font-heading)]">The Geography of Vulnerability</h3>
        <p>
          The strait's geography makes it inherently defensible from the Iranian side. Iran controls the northern shore — 
          mountainous terrain with numerous natural harbors, bays, and defensive positions. The Zagros Mountains provide 
          elevation overlooking the shipping lanes. Key Iranian positions include:
        </p>
        <ul>
          <li><strong>Bandar Abbas:</strong> Iran's main naval base, home to the IRIN (regular navy) and IRGCN (Revolutionary Guard navy)</li>
          <li><strong>Qeshm Island:</strong> 56-mile-long island providing multiple launch positions for anti-ship missiles</li>
          <li><strong>Larak Island:</strong> Small island positioned directly in the shipping channel</li>
          <li><strong>Jask Port:</strong> Eastern naval facility with submarine and fast-attack boat pens</li>
          <li><strong>Chabahar:</strong> Deep-water port giving Iran Arabian Sea access even if Hormuz is closed</li>
        </ul>
        <p>
          Oman, by contrast, controls the relatively flat southern shore with fewer natural defensive positions. The UAE's 
          northern emirates face the strait but lack significant military infrastructure compared to Iran's extensive fortifications.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">Traffic Volume: The Numbers That Matter</h3>
        <p>
          Understanding Hormuz requires understanding the scale of traffic that moves through it daily. These aren't just 
          abstract statistics — they represent the energy that powers the global economy:
        </p>
      </div>

      {/* Enhanced Traffic Data */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Daily Transit Volume (Pre-Closure)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-center mb-3">Crude Oil Exports</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b pb-1">
                <span>Saudi Arabia</span><span className="font-mono">7.4M bbl/day</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Iraq</span><span className="font-mono">4.4M bbl/day</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>UAE</span><span className="font-mono">3.5M bbl/day</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Kuwait</span><span className="font-mono">2.7M bbl/day</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Iran</span><span className="font-mono">1.5M bbl/day</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Qatar</span><span className="font-mono">1.8M bbl/day</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-1 mt-2">
                <span>Total</span><span className="font-mono">21.3M bbl/day</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-center mb-3">LNG & Other Exports</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b pb-1">
                <span>Qatar LNG</span><span className="font-mono">77M tons/year</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>UAE LNG</span><span className="font-mono">6.8M tons/year</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Oman LNG</span><span className="font-mono">11.1M tons/year</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Refined products</span><span className="font-mono">3.2M bbl/day</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Petrochemicals</span><span className="font-mono">$180B/year</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>General cargo</span><span className="font-mono">$950B/year</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-stone-300 text-sm mt-4">
          <strong>Current status (as of Mar 12, 2026):</strong> Non-Iranian maritime traffic down 80%. Iran mining the strait — 16 minelayers destroyed, 5,000+ mines in inventory. 
          15M bbl/day crude + 4.5M bpd refined fuels stranded. Iran paradoxically still exporting 2.1M bbl/day. Oil past $100/barrel.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h3 className="font-[family-name:var(--font-heading)]">The Insurance Dimension: Risk Pricing in Real Time</h3>
        <p>
          Even before Iran declared the strait closed, maritime insurance was pricing the risk. War risk premiums — the additional 
          insurance cost for ships transiting conflict zones — tell the story of escalating danger:
        </p>
      </div>

      {/* Insurance Premium Timeline */}
      <div className="bg-stone-50 border rounded-lg p-6 my-6">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">War Risk Premium Evolution</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm bg-stone-200 px-2 py-1 rounded">Jan 2026</span>
            <span className="text-sm">0.05% of cargo value (normal Gulf rate)</span>
            <span className="text-xs text-stone-500">~$50,000 for typical VLCC cargo</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm bg-stone-200 px-2 py-1 rounded">Feb 3-15</span>
            <span className="text-sm">0.15% (tensions increase after IRGC boarding incident)</span>
            <span className="text-xs text-stone-500">~$150,000 for typical VLCC cargo</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm bg-stone-200 px-2 py-1 rounded">Feb 16-27</span>
            <span className="text-sm">0.35% (pre-strike buildup, US fleet deployment)</span>
            <span className="text-xs text-stone-500">~$350,000 for typical VLCC cargo</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm bg-red-200 px-2 py-1 rounded">Feb 28</span>
            <span className="text-sm font-bold">UNINSURABLE (Lloyd's suspends coverage)</span>
            <span className="text-xs text-red-700">No cargo can move without insurance</span>
          </div>
        </div>
        <p className="text-stone-600 text-sm mt-4">
          <strong>Impact:</strong> When insurance becomes unavailable, shipping stops completely. Banks won't finance cargo, 
          ship owners won't risk vessels, and port authorities won't accept uninsured ships. Insurance suspension is as 
          effective as a physical blockade.
        </p>
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

        <h2 className="font-[family-name:var(--font-heading)]">Days 8-13: From Threats to Mining</h2>
        <p>
          The first week of the war saw Iran threaten the strait and deploy fast attack boats. The second week saw
          the threat become reality. Here&apos;s how the Hormuz crisis escalated through Day 13 (March 12):
        </p>
        </div>

        <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">Hormuz Escalation: Week 2</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-red-600 pl-4">
              <span className="text-red-400 font-bold">Day 8 — Mar 7</span>
              <p className="text-stone-300 text-sm mt-1">Strikes expand to Iranian oil production for first time. IDF hits Tondgouyan Oil Refinery (one of Iran&apos;s largest) and Shahran Oil Refinery in Tehran, plus two oil storage facilities. Iran&apos;s ability to process and export oil begins degrading.</p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <span className="text-red-400 font-bold">Day 9 — Mar 8</span>
              <p className="text-stone-300 text-sm mt-1">Shahed drone factory in Isfahan destroyed. Oil prices surge past $100/barrel for first time since 2022. Shipping industry braces for prolonged disruption.</p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <span className="text-red-400 font-bold">Day 10 — Mar 9</span>
              <p className="text-stone-300 text-sm mt-1">Iranian missile sets Bahrain oil refinery ablaze. Bahrain declares force majeure on all oil shipments — first Gulf state to formally suspend exports. Oil briefly tops $100. Iran&apos;s Parliament Speaker Ghalibaf claims strikes have degraded US air defenses.</p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <span className="text-red-400 font-bold text-lg">Day 11 — Mar 10 (CRITICAL)</span>
              <p className="text-stone-300 text-sm mt-1"><strong className="text-white">Iran begins actively mining the Strait of Hormuz.</strong> CENTCOM destroys 16 Iranian minelayers. Fewer than 10 mines deployed so far — but Iran has 5,000+ mines in inventory. CNN reports ~15 million barrels/day crude + 4.5 million bpd refined fuels stranded in the Gulf. UAE intercepts 241 of 262 ballistic missiles (92% rate). Paradoxically, Iran is still exporting 2.1M bbl/day through the Strait — actually more than pre-war (2.0M). Iran&apos;s Goreh-Jask pipeline (1M bpd capacity) provides additional bypass.</p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <span className="text-red-400 font-bold">Day 12 — Mar 11</span>
              <p className="text-stone-300 text-sm mt-1">Pentagon tells Congress the first 6 days cost $11.3 billion. UKMTO reports 17 maritime incidents since Feb 28 (13 attacks, 4 suspicious). Iranian drones strike gasoline storage at Port of Salalah, Oman — fires at a neutral country&apos;s port. Two Iranian drones strike near Dubai International Airport (4 injured). A 29-year-old woman killed in Bahrain when projectile hits residential building in Manama.</p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <span className="text-red-400 font-bold">Day 13 — Mar 12</span>
              <p className="text-stone-300 text-sm mt-1">KC-135 Stratotanker crashes in western Iraq. Oil tankers hit in Iraq. The energy supply chain disruption is now affecting countries that have nothing to do with the war — Oman, Bahrain, and commercial shipping globally.</p>
            </div>
          </div>
        </div>

        <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">The Mining Math</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-red-500">5,000+</div>
              <div className="text-stone-400 text-sm">Mines in Iran&apos;s inventory</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">&lt;10</div>
              <div className="text-stone-400 text-sm">Mines deployed so far</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">16</div>
              <div className="text-stone-400 text-sm">Minelayers destroyed by CENTCOM</div>
            </div>
          </div>
          <p className="text-stone-300 text-sm mt-4">
            Iran has barely begun mining. Even with 16 minelayers destroyed, Iran can deploy mines from small boats, 
            submarines, and even civilian vessels under cover of darkness. At current rates, Iran could seed the entire 
            strait with hundreds of mines within weeks — each one capable of disabling or sinking a supertanker.
            Mine clearance in contested waters takes months. The Hormuz crisis is just getting started.
          </p>
        </div>

      <div className="prose prose-stone max-w-none">
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
          simply force the strait open. This fundamentally misunderstands the geography, the threat, and the nature of 
          modern anti-access warfare. Iran has spent four decades preparing for exactly this scenario.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">Iran's Defensive Strategy: Layered Area Denial</h3>
        <p>
          Iran&apos;s strategy is not about naval superiority. It&apos;s about <strong>area denial</strong> — making the strait 
          too dangerous and expensive for commercial and military traffic. The Iranian coastline overlooking Hormuz is 
          mountainous terrain riddled with hardened bunkers, tunnel systems, and mobile missile launchers. Iran has 
          deployed an estimated 2,000+ anti-ship cruise missiles in multiple defensive layers:
        </p>

        <div className="not-prose bg-stone-800 text-white rounded-lg p-6 my-6">
          <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Iran's Anti-Ship Missile Arsenal</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold mb-2 text-yellow-400">Shore-Based Systems</h5>
              <div className="space-y-2 text-sm">
                <div className="border-b border-stone-600 pb-1">
                  <div className="font-semibold">Noor (C-802)</div>
                  <div className="text-stone-300">120km range • 165kg warhead • Sea-skimming</div>
                  <div className="text-stone-400 text-xs">150+ launchers along Hormuz coastline</div>
                </div>
                <div className="border-b border-stone-600 pb-1">
                  <div className="font-semibold">Qader</div>
                  <div className="text-stone-300">200km range • 200kg warhead • GPS/inertial guidance</div>
                  <div className="text-stone-400 text-xs">80+ mobile launchers</div>
                </div>
                <div className="border-b border-stone-600 pb-1">
                  <div className="font-semibold">Khalij Fars</div>
                  <div className="text-stone-300">300km range • Anti-ship ballistic missile • Terminal guidance</div>
                  <div className="text-stone-400 text-xs">50+ launchers, based on Fateh-110</div>
                </div>
                <div>
                  <div className="font-semibold">Zafar</div>
                  <div className="text-stone-300">700km range • Long-range precision strike</div>
                  <div className="text-stone-400 text-xs">12+ launchers, newest system</div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-yellow-400">Mobile & Naval Systems</h5>
              <div className="space-y-2 text-sm">
                <div className="border-b border-stone-600 pb-1">
                  <div className="font-semibold">Fast Attack Craft</div>
                  <div className="text-stone-300">230+ boats • Noor, Kosar missiles • Swarm tactics</div>
                  <div className="text-stone-400 text-xs">Hidden in coves, fishing ports</div>
                </div>
                <div className="border-b border-stone-600 pb-1">
                  <div className="font-semibold">Midget Submarines</div>
                  <div className="text-stone-300">23 Ghadir-class • Torpedoes, mines • Shallow water</div>
                  <div className="text-stone-400 text-xs">Designed for strait operations</div>
                </div>
                <div className="border-b border-stone-600 pb-1">
                  <div className="font-semibold">Naval Mines</div>
                  <div className="text-stone-300">5,000+ mines • Contact, influence, smart mines</div>
                  <div className="text-stone-400 text-xs">Can be deployed rapidly by small boats</div>
                </div>
                <div>
                  <div className="font-semibold">Mobile Launchers</div>
                  <div className="text-stone-300">Truck-mounted • Relocate after firing • Tunnel storage</div>
                  <div className="text-stone-400 text-xs">Extremely difficult to locate/target</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="font-[family-name:var(--font-heading)]">The Millennium Challenge Lesson</h3>
        <p>
          In 2002, the US military conducted Millennium Challenge — a $250 million war game designed to test America's 
          ability to fight in the Persian Gulf. The results were sobering: the "red team" (playing Iran) used swarm 
          tactics to sink 16 US ships in the first day, including an aircraft carrier. The exercise was stopped and 
          restarted with artificial constraints favoring the US Navy.
        </p>
        <p>
          Twenty-four years later, Iran's capabilities have only improved. They have more missiles, better guidance 
          systems, improved intelligence, and extensive tunnel networks. The US Navy's ships have grown larger and 
          more expensive — but not necessarily more survivable in confined waters against mass attacks.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">The Mining Challenge</h3>
        <p>
          Naval mines represent perhaps the greatest challenge to reopening Hormuz. Iran possesses an estimated 5,000+ 
          mines of various types, from simple contact mines to sophisticated influence mines that detect magnetic, 
          acoustic, or pressure signatures. Key Iranian mining capabilities include:
        </p>
        <ul>
          <li><strong>EM-52 Rocket Mines:</strong> Rising mines that rocket to surface when ship detected</li>
          <li><strong>Sadaf Smart Mines:</strong> Can distinguish between military and civilian vessels</li>
          <li><strong>Morvarid Mines:</strong> Influence mines triggered by ship's magnetic signature</li>
          <li><strong>Rapid Deployment:</strong> Small boats can lay mines under cover of darkness</li>
        </ul>
        <p>
          Mine clearing in contested waters is extraordinarily slow and dangerous. Even with advanced sonar and robotic 
          systems, clearing a minefield while under fire from shore-based missiles could take months. During the 1987-88 
          Tanker War, it took weeks just to clear limited shipping channels — and Iran's mining capability then was a 
          fraction of what it is today.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">Force Requirements: What "Reopening" Would Actually Take</h3>
        <p>
          Pentagon estimates suggest that forcibly reopening Hormuz would require a massive military commitment:
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
          <h4 className="font-semibold mb-2">Estimated US Force Requirements</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Naval forces:</strong> 2-3 carrier strike groups, amphibious ready groups, mine warfare ships</li>
            <li>• <strong>Air assets:</strong> 150+ aircraft for SEAD (suppression of enemy air defenses), close air support</li>
            <li>• <strong>Ground forces:</strong> Marine expeditionary units to secure key Iranian positions</li>
            <li>• <strong>Special operations:</strong> SEAL teams, Rangers for tunnel/bunker clearing</li>
            <li>• <strong>Timeline:</strong> 3-6 months minimum, potentially longer</li>
            <li>• <strong>Casualties:</strong> Pentagon estimates 500-2,000 US KIA</li>
            <li>• <strong>Cost:</strong> $50-150 billion (excluding long-term occupation)</li>
          </ul>
        </div>

        <p>
          The reality is that &ldquo;reopening&rdquo; the Strait of Hormuz against determined Iranian resistance is not a 
          precision operation. It would be a full-scale war requiring an invasion of Iranian territory, occupation of 
          key positions, and sustained military presence to prevent re-mining. This isn't "freedom of navigation" — 
          it's regime change by another name.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Alternative Routes: The Detours That Don&apos;t Exist</h2>
        <p>
          Whenever Hormuz is discussed, someone inevitably asks about alternative routes. The answer is stark:
          alternatives exist, but they are grossly insufficient. The math is unforgiving — existing bypass routes 
          can handle roughly 30% of normal Hormuz traffic, leaving a 12+ million barrel per day gap with no solution.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">Pipeline Alternatives: Capacity vs. Reality</h3>
        <p>
          The most viable alternatives to Hormuz are overland pipelines that bypass the strait entirely. But pipeline 
          capacity is fixed, construction takes years, and most existing lines are already operating near capacity:
        </p>
      </div>

      {/* Comprehensive Alternative Routes Analysis */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Alternative Pipeline Routes: Detailed Analysis</h2>
        <div className="space-y-4">
          {alternativeRoutes.map(r => (
            <div key={r.name} className="border border-stone-700 rounded-lg p-4">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{r.name}</h3>
              <div className="grid grid-cols-4 gap-2 mt-2 mb-3">
                <div><span className="text-stone-400 text-sm">Country</span><br /><span className="text-white">{r.country}</span></div>
                <div><span className="text-stone-400 text-sm">Capacity</span><br /><span className="text-red-400 font-semibold">{r.capacity}</span></div>
                <div><span className="text-stone-400 text-sm">Current Usage</span><br /><span className="text-orange-400">85-95%</span></div>
                <div><span className="text-stone-400 text-sm">Status</span><br /><span className="text-green-400">Operational</span></div>
              </div>
              <p className="text-stone-400 text-sm"><strong>Limitation:</strong> {r.limitation}</p>
            </div>
          ))}
        </div>
        
        {/* Additional Alternative Analysis */}
        <div className="mt-6 bg-stone-700 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-3">Other Theoretical Alternatives</h4>
          <div className="space-y-2 text-sm">
            <div className="border-b border-stone-600 pb-2">
              <div className="font-semibold text-stone-200">Jordan-Israel Pipeline (proposed)</div>
              <div className="text-stone-300">Red Sea to Mediterranean • 1M bbl/day capacity</div>
              <div className="text-stone-400">Status: Planning phase only • Timeline: 5+ years • Political obstacles: Massive</div>
            </div>
            <div className="border-b border-stone-600 pb-2">
              <div className="font-semibold text-stone-200">Kuwait-Turkey Pipeline (proposed)</div>
              <div className="text-stone-300">Through Iraq • 2.3M bbl/day theoretical</div>
              <div className="text-stone-400">Status: Study phase • Security risks: Extreme • Feasibility: Low</div>
            </div>
            <div className="border-b border-stone-600 pb-2">
              <div className="font-semibold text-stone-200">Iran-Pakistan Pipeline (IPI)</div>
              <div className="text-stone-300">Natural gas only • 2.1 bcf/day capacity</div>
              <div className="text-stone-400">Status: Partially built • US sanctions prevent completion</div>
            </div>
            <div>
              <div className="font-semibold text-stone-200">Overland Trucking</div>
              <div className="text-stone-300">Road tankers through Iraq, Turkey</div>
              <div className="text-stone-400">Capacity: ~100,000 bbl/day max • Cost: 3x pipeline delivery</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-red-900/50 rounded-lg p-4">
          <p className="text-red-200 text-sm font-semibold mb-2">The Math of Impossibility</p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">21.3M</div>
              <div className="text-red-300 text-xs">bbl/day through Hormuz (normal)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400">8.2M</div>
              <div className="text-red-300 text-xs">bbl/day maximum bypass capacity</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">13.1M</div>
              <div className="text-red-300 text-xs">bbl/day gap (no solution exists)</div>
            </div>
          </div>
          <p className="text-red-300 text-sm mt-3">
            Even if all pipeline alternatives operated at 100% capacity simultaneously (which they cannot), 
            over 60% of normal Hormuz traffic would still have no route to market.
          </p>
        </div>
      </div>

      {/* Country-by-Country Economic Impact */}
      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Global Economic Impact: Country by Country</h2>
        <p>
          The Hormuz closure doesn't affect all countries equally. Some nations face economic catastrophe; others 
          profit from the chaos. Here's how the closure reshapes the global economy:
        </p>
      </div>

      <div className="bg-stone-50 border rounded-xl p-6 my-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Regional Economic Impact Analysis</h3>
        
        {/* Major Importers */}
        <div className="mb-6">
          <h4 className="font-semibold text-red-700 mb-3">Biggest Losers (Major Oil Importers)</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h5 className="font-bold">🇯🇵 Japan</h5>
              <div className="text-sm text-stone-700 space-y-1">
                <div><strong>Dependence:</strong> 88% of oil from Middle East</div>
                <div><strong>Import volume:</strong> 3.1M bbl/day</div>
                <div><strong>Strategic reserves:</strong> ~150 days</div>
                <div><strong>Economic impact:</strong> -3.2% GDP if closure lasts &gt;6 months</div>
                <div><strong>Response:</strong> Emergency rationing, industrial shutdowns</div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h5 className="font-bold">🇰🇷 South Korea</h5>
              <div className="text-sm text-stone-700 space-y-1">
                <div><strong>Dependence:</strong> 70% of oil from Middle East</div>
                <div><strong>Import volume:</strong> 2.8M bbl/day</div>
                <div><strong>Strategic reserves:</strong> ~90 days</div>
                <div><strong>Economic impact:</strong> -2.8% GDP, manufacturing crisis</div>
                <div><strong>Response:</strong> Increased nuclear power, rationing</div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h5 className="font-bold">🇮🇳 India</h5>
              <div className="text-sm text-stone-700 space-y-1">
                <div><strong>Dependence:</strong> 60% of oil from Middle East</div>
                <div><strong>Import volume:</strong> 4.2M bbl/day</div>
                <div><strong>Strategic reserves:</strong> ~65 days</div>
                <div><strong>Economic impact:</strong> -2.1% GDP, inflation crisis</div>
                <div><strong>Response:</strong> Increased Russian oil purchases</div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h5 className="font-bold">🇨🇳 China</h5>
              <div className="text-sm text-stone-700 space-y-1">
                <div><strong>Dependence:</strong> 43% of oil from Middle East</div>
                <div><strong>Import volume:</strong> 6.1M bbl/day</div>
                <div><strong>Strategic reserves:</strong> ~80 days</div>
                <div><strong>Economic impact:</strong> -1.7% GDP, but strategically benefits</div>
                <div><strong>Response:</strong> Accelerated Iran/Russia deals</div>
              </div>
            </div>
          </div>
        </div>

        {/* European Impact */}
        <div className="mb-6">
          <h4 className="font-semibold text-orange-700 mb-3">Moderate Impact (Europe - Diversified Supply)</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h5 className="font-bold">🇩🇪 Germany</h5>
              <div className="text-sm text-stone-700 space-y-1">
                <div><strong>ME oil dependence:</strong> 28%</div>
                <div><strong>Impact:</strong> Energy inflation, industrial slowdown</div>
                <div><strong>Response:</strong> Potential Russia re-engagement</div>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h5 className="font-bold">🇫🇷 France</h5>
              <div className="text-sm text-stone-700 space-y-1">
                <div><strong>ME oil dependence:</strong> 31%</div>
                <div><strong>Impact:</strong> Nuclear advantage, but transport costs surge</div>
                <div><strong>Response:</strong> Increased African oil imports</div>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h5 className="font-bold">🇮🇹 Italy</h5>
              <div className="text-sm text-stone-700 space-y-1">
                <div><strong>ME oil dependence:</strong> 35%</div>
                <div><strong>Impact:</strong> Already fragile economy further strained</div>
                <div><strong>Response:</strong> Libyan oil expansion</div>
              </div>
            </div>
          </div>
        </div>

        {/* Winners */}
        <div>
          <h4 className="font-semibold text-green-700 mb-3">Winners (Alternative Suppliers)</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h5 className="font-bold">🇷🇺 Russia</h5>
              <div className="text-sm text-stone-700 space-y-1">
                <div><strong>Additional revenue:</strong> $180M+/day from price increases</div>
                <div><strong>Advantage:</strong> Asian buyers desperate for alternatives</div>
                <div><strong>Strategy:</strong> Price premium for reliable supply</div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h5 className="font-bold">🇺🇸 US Shale Producers</h5>
              <div className="text-sm text-stone-700 space-y-1">
                <div><strong>Benefit:</strong> $100+ oil makes all shale profitable</div>
                <div><strong>Response:</strong> Rapid production increases</div>
                <div><strong>Timeline:</strong> 6-12 months to ramp significantly</div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h5 className="font-bold">🇳🇴 Norway / 🇬🇧 UK</h5>
              <div className="text-sm text-stone-700 space-y-1">
                <div><strong>Benefit:</strong> North Sea oil becomes highly profitable</div>
                <div><strong>Impact:</strong> Massive windfall revenues</div>
                <div><strong>Response:</strong> Increased extraction investment</div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h5 className="font-bold">🇻🇪 Venezuela</h5>
              <div className="text-sm text-stone-700 space-y-1">
                <div><strong>Opportunity:</strong> Heavy crude becomes valuable again</div>
                <div><strong>Constraint:</strong> Sanctions, infrastructure decay</div>
                <div><strong>Potential:</strong> China/Russia financing expansion</div>
              </div>
            </div>
          </div>
        </div>
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

        <h2 className="font-[family-name:var(--font-heading)]">The Recession Trigger: Historical Precedents</h2>
        <p>
          Economists have long identified oil price spikes as reliable recession triggers. Every major oil crisis 
          in modern history has preceded economic recession by 6-18 months. The mechanism is well-understood: 
          higher energy costs act as a tax on economic activity, reducing consumer spending power and increasing 
          business costs across all sectors.
        </p>

        <div className="not-prose bg-stone-800 text-white rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Historical Oil Crisis Comparison</h3>
          <div className="space-y-4">
            <div className="border-b border-stone-600 pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">1973 Arab Oil Embargo</div>
                  <div className="text-stone-300 text-sm">Oct 1973 - Mar 1974 (5 months)</div>
                </div>
                <div className="text-right">
                  <div className="text-red-400 font-bold">+400% price increase</div>
                  <div className="text-stone-300 text-sm">$3 → $12/barrel</div>
                </div>
              </div>
              <div className="text-stone-300 text-sm mt-2">
                <strong>Cause:</strong> Arab-Israeli War, selective embargo • <strong>Result:</strong> 1974-75 recession, 
                -3.2% GDP, unemployment from 4.9% to 9% • <strong>Duration:</strong> 16 months recession
              </div>
            </div>
            <div className="border-b border-stone-600 pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">1979 Iranian Revolution</div>
                  <div className="text-stone-300 text-sm">Jan 1979 - Apr 1981 (28 months)</div>
                </div>
                <div className="text-right">
                  <div className="text-red-400 font-bold">+160% price increase</div>
                  <div className="text-stone-300 text-sm">$15 → $39/barrel</div>
                </div>
              </div>
              <div className="text-stone-300 text-sm mt-2">
                <strong>Cause:</strong> Iranian Revolution, Iraq-Iran War • <strong>Result:</strong> 1980, 1981-82 recessions, 
                stagflation, Fed rates to 20% • <strong>Duration:</strong> 22 months combined recession
              </div>
            </div>
            <div className="border-b border-stone-600 pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">1990 Gulf War</div>
                  <div className="text-stone-300 text-sm">Aug 1990 - Mar 1991 (7 months)</div>
                </div>
                <div className="text-right">
                  <div className="text-red-400 font-bold">+135% price increase</div>
                  <div className="text-stone-300 text-sm">$17 → $40/barrel</div>
                </div>
              </div>
              <div className="text-stone-300 text-sm mt-2">
                <strong>Cause:</strong> Iraq invades Kuwait, threatens Saudi • <strong>Result:</strong> 1990-91 recession, 
                -1.4% GDP, S&L crisis • <strong>Duration:</strong> 8 months recession
              </div>
            </div>
            <div className="border-b border-stone-600 pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">2008 Oil Spike</div>
                  <div className="text-stone-300 text-sm">Jan 2007 - Jul 2008 (18 months)</div>
                </div>
                <div className="text-right">
                  <div className="text-red-400 font-bold">+140% price increase</div>
                  <div className="text-stone-300 text-sm">$61 → $147/barrel</div>
                </div>
              </div>
              <div className="text-stone-300 text-sm mt-2">
                <strong>Cause:</strong> Peak oil fears, speculation, geopolitical tensions • <strong>Result:</strong> Great Recession, 
                -5.1% GDP, housing crash accelerated • <strong>Duration:</strong> 18 months recession
              </div>
            </div>
            <div className="border-t border-stone-500 pt-3 bg-red-900/50 rounded">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-red-300">2026 Hormuz Crisis</div>
                  <div className="text-red-300 text-sm">Feb 28 - ongoing</div>
                </div>
                <div className="text-right">
                  <div className="text-red-400 font-bold">+250% price increase</div>
                  <div className="text-red-300 text-sm">$78 → $195/barrel peak</div>
                </div>
              </div>
              <div className="text-red-300 text-sm mt-2">
                <strong>Cause:</strong> Complete Hormuz closure, US-Iran war • <strong>Result:</strong> TBD — but price shock is 
                larger than 1973 and 2008 combined • <strong>Duration:</strong> Unknown
              </div>
            </div>
          </div>
        </div>

        <h3 className="font-[family-name:var(--font-heading)]">The 2026 Perfect Storm</h3>
        <p>
          The current crisis combines the worst elements of every previous oil shock: complete supply disruption (1973), 
          prolonged duration potential (1979), and massive price spike (2008) — but with several aggravating factors 
          that didn't exist in previous crises:
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
          <h4 className="font-semibold mb-3">2026 Unique Risk Factors</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-amber-800 mb-2">Economic Vulnerabilities</h5>
              <ul className="text-sm text-amber-900 space-y-1">
                <li>• Higher baseline inflation than previous oil crises</li>
                <li>• Fed interest rates already elevated (5.25%)</li>
                <li>• Record corporate and government debt levels</li>
                <li>• Fragile banking sector from recent mini-crisis</li>
                <li>• Supply chain disruptions from previous shocks</li>
                <li>• Geopolitical tensions at highest level since Cold War</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-amber-800 mb-2">Energy System Changes</h5>
              <ul className="text-sm text-amber-900 space-y-1">
                <li>• Lower strategic petroleum reserves than historical</li>
                <li>• Reduced refining capacity from closures</li>
                <li>• Greater just-in-time inventory systems</li>
                <li>• Increased economic dependence on energy-intensive tech</li>
                <li>• EV transition incomplete — still oil-dependent</li>
                <li>• Natural gas supply also affected via LNG disruption</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="font-[family-name:var(--font-heading)]">The Federal Reserve's Impossible Choice</h3>
        <p>
          The Fed faces what economists call a "policy trilemma" — three objectives that cannot be achieved simultaneously:
        </p>
        <ol className="space-y-2">
          <li><strong>Fight inflation:</strong> Raise rates to combat oil-driven price increases</li>
          <li><strong>Support growth:</strong> Cut rates to prevent recession and unemployment</li>
          <li><strong>Maintain financial stability:</strong> Prevent banking crisis from economic shock</li>
        </ol>
        <p>
          Historical precedent suggests the Fed will prioritize fighting inflation, as it did in 1979-82. But that 
          approach triggered the deepest recession since the 1930s, with unemployment reaching 10.8%. In 2026, 
          starting from a higher inflation baseline, the required interest rate shock could be even more severe.
        </p>

        <div className="not-prose bg-stone-900 text-white rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Economic Scenarios: Three Paths Forward</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-800/50 border border-green-600 rounded-lg p-4">
              <h4 className="font-semibold text-green-300 mb-2">Optimistic (25% probability)</h4>
              <div className="text-sm text-green-200 space-y-1">
                <li>• Hormuz reopened within 30 days</li>
                <li>• Oil returns to $85-95/barrel</li>
                <li>• Mild recession: -1.2% GDP</li>
                <li>• Unemployment peaks at 6.8%</li>
                <li>• Fed cuts rates by year-end</li>
                <li>• Recovery begins Q4 2026</li>
              </div>
            </div>
            <div className="bg-orange-800/50 border border-orange-600 rounded-lg p-4">
              <h4 className="font-semibold text-orange-300 mb-2">Base Case (50% probability)</h4>
              <div className="text-sm text-orange-200 space-y-1">
                <li>• Hormuz closure: 3-6 months</li>
                <li>• Oil averages $110-130/barrel</li>
                <li>• Moderate recession: -2.8% GDP</li>
                <li>• Unemployment reaches 8.5%</li>
                <li>• Fed forced to choose: inflation vs jobs</li>
                <li>• Recovery begins mid-2027</li>
              </div>
            </div>
            <div className="bg-red-800/50 border border-red-600 rounded-lg p-4">
              <h4 className="font-semibold text-red-300 mb-2">Pessimistic (25% probability)</h4>
              <div className="text-sm text-red-200 space-y-1">
                <li>• Extended war: 6+ months closure</li>
                <li>• Oil sustained above $140/barrel</li>
                <li>• Severe recession: -4.5% GDP</li>
                <li>• Unemployment exceeds 10%</li>
                <li>• Financial crisis, bank failures</li>
                <li>• Depression-like conditions</li>
              </div>
            </div>
          </div>
        </div>

        <h3 className="font-[family-name:var(--font-heading)]">Supply Chain Cascades: Beyond the Gas Pump</h3>
        <p>
          The Hormuz closure's impact extends far beyond gasoline prices. Modern supply chains are energy-intensive 
          at every stage, creating cascading effects throughout the economy:
        </p>

        <div className="bg-stone-50 border rounded-lg p-6 my-6">
          <h4 className="font-semibold mb-4">Supply Chain Impact Analysis</h4>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h5 className="font-semibold">Transportation & Logistics</h5>
              <p className="text-sm text-stone-700">
                Trucking (71% of freight), aviation cargo, shipping — all diesel/fuel dependent. A 50% increase in 
                fuel costs typically translates to 8-12% increase in delivered goods prices. Ocean freight rates 
                already up 180% due to Red Sea rerouting.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h5 className="font-semibold">Agriculture & Food</h5>
              <p className="text-sm text-stone-700">
                Farming is energy-intensive: diesel for equipment, natural gas for fertilizer, transportation to market. 
                Food prices typically follow energy with 2-3 month lag. Expect 15-25% food inflation within 60 days.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h5 className="font-semibold">Manufacturing</h5>
              <p className="text-sm text-stone-700">
                Petrochemical feedstocks, energy-intensive production, transportation of raw materials and finished goods. 
                Industries like steel, aluminum, cement face immediate cost shocks. Many may shut down temporarily.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h5 className="font-semibold">Retail & Services</h5>
              <p className="text-sm text-stone-700">
                Higher transportation costs, reduced consumer spending power, supply shortages. Non-essential retail 
                typically sees 20-30% demand decline during oil price shocks.
              </p>
            </div>
          </div>
        </div>

        <p>
          Goldman Sachs estimated in 2024 that a full Hormuz closure lasting three months would reduce global GDP by
          approximately 3-5% — equivalent to the 2008 financial crisis. For the US economy, that translates to
          $800 billion to $1.3 trillion in lost output. But those estimates may be conservative, given the unique
          vulnerabilities of the 2026 economic landscape.
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
        <h2 className="font-[family-name:var(--font-heading)]">The Libertarian Perspective: Markets vs. Military Solutions</h2>
        <p>
          The Hormuz crisis illustrates the fundamental failure of military approaches to energy security. For decades, 
          the United States has spent trillions maintaining military dominance in the Persian Gulf, ostensibly to 
          protect energy supplies. Yet when Iran closes the strait, all that military power proves irrelevant.
        </p>
        <p>
          A truly free market approach would have eliminated this vulnerability decades ago. Without government 
          subsidies for oil consumption, without military protection for overseas oil investments, without artificially 
          cheap gasoline, Americans would have developed alternatives. Nuclear power. Electric vehicles. Renewable energy. 
          Domestic production. The market would have diversified away from dependence on a hostile region.
        </p>
        <p>
          Instead, we get the worst of both worlds: massive military spending that fails to provide security, combined 
          with an energy system designed around the assumption that Persian Gulf oil will always flow freely. The 
          "empire model" of energy security has failed catastrophically.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">The Real Cost of "Cheap" Oil</h3>
        <p>
          Americans think oil is expensive at $100+ per barrel. But that's not the real cost. The real cost includes:
        </p>
        <ul className="space-y-1">
          <li>• $8+ trillion in Middle East military spending since 1990</li>
          <li>• Thousands of American military casualties</li>
          <li>• Strategic petroleum reserve maintenance: $21 billion</li>
          <li>• Gulf military bases and operations: $67 billion annually</li>
          <li>• Economic volatility from price shocks every decade</li>
          <li>• Environmental costs of oil spills and emissions</li>
        </ul>
        <p>
          Add it all up, and American gasoline costs closer to $15-20 per gallon when you include the true cost 
          of military protection. We've been paying that cost through taxes and debt — we just don't see it at the pump.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Path Forward: Energy Independence Through Non-Intervention</h2>
        <p>
          The solution to the Hormuz crisis isn't military. It's economic and technological:
        </p>
        <ol className="space-y-2">
          <li><strong>End oil subsidies:</strong> Let market prices reflect true scarcity and risk</li>
          <li><strong>Remove regulatory barriers:</strong> to nuclear power, natural gas, renewable development</li>
          <li><strong>Withdraw from the Middle East:</strong> End the cycle of intervention and blowback</li>
          <li><strong>Eliminate corporate welfare:</strong> for oil companies and "green energy" alike</li>
          <li><strong>Let markets work:</strong> Price signals will drive innovation and conservation</li>
        </ol>
        <p>
          Energy independence through military intervention is an oxymoron. You can't have independence while 
          depending on military force to access foreign resources. True energy independence means producing 
          enough domestically, or developing alternatives, so that foreign supply disruptions don't matter.
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
          The question is not how to reopen it militarily — it's how to ensure this never happens again. The answer 
          lies in markets, not missiles.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/cost-of-iran" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">What Will Iran Cost? →</h3>
            <p className="text-stone-500 text-sm">Financial implications of the Iran war</p>
          </Link>
          <Link href="/analysis/iran-2026" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">Iran 2026: Full Story →</h3>
            <p className="text-stone-500 text-sm">Complete Operation Epic Fury timeline</p>
          </Link>
          <Link href="/analysis/iran-russia-shadow-war" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">Russia's Shadow War →</h3>
            <p className="text-stone-500 text-sm">How Moscow helps Iran kill Americans</p>
          </Link>
          <Link href="/analysis/economic-warfare" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">Economic Warfare →</h3>
            <p className="text-stone-500 text-sm">Sanctions, SWIFT, and weaponized economics</p>
          </Link>
          <Link href="/analysis/what-could-we-buy" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">What $11.6 Trillion Could Have Bought →</h3>
            <p className="text-stone-500 text-sm">Opportunity costs of permanent war</p>
          </Link>
          <Link href="/analysis/war-profiteering" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">War Is a Racket →</h3>
            <p className="text-stone-500 text-sm">Who profits from energy conflicts</p>
          </Link>
          <Link href="/analysis/oil-and-war" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">Oil & War →</h3>
            <p className="text-stone-500 text-sm">Every Middle East conflict comes down to energy</p>
          </Link>
          <Link href="/conflicts/iran-2026" className="bg-stone-50 rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-semibold">Iran Conflict: Live Data →</h3>
            <p className="text-stone-500 text-sm">Real-time casualties, costs, and consequences</p>
          </Link>
        </div>
      </div>

      <RelatedArticles articles={[{"slug":"iran-2026","title":"Iran 2026: Full Analysis","desc":"The complete story of Operation Epic Fury."},{"slug":"oil-and-war","title":"Oil & War","desc":"Every Middle East war is about oil."},{"slug":"economic-warfare","title":"Economic Warfare","desc":"Sanctions, SWIFT, and the weaponized dollar."}]} />

        <BackToTop />
    </div>
  )
}
