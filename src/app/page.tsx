import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import { LiveCostCounter } from '@/components/LiveCostCounter'
import ThisDayInWarHistory from '@/components/ThisDayInWarHistory'
import NewsletterSignup from '@/components/NewsletterSignup'
import { HomeSpendingChart } from '@/components/HomeCharts'

export const metadata: Metadata = {
  title: 'US War Cost Tracker — $11.3 Trillion Spent on American Wars & Counting | WarCosts',
  description: 'Track every dollar the US has spent on war. $11.3 trillion across 469 military interventions, 229 years at war. Free interactive data from Brown University, CRS, SIPRI & Pentagon reports.',
  openGraph: {
    title: 'US War Cost Tracker — $11.3 Trillion Spent on 469 Military Interventions',
    description: 'The US spends $28,095/second on defense. 229 years at war out of 249. Track every dollar, every life, every conflict with free interactive data.',
    url: 'https://warcosts.org',
    type: 'website',
    siteName: 'WarCosts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US War Cost Tracker — $28,095 Per Second on War',
    description: '$11.3 trillion spent on 469 military interventions. Track real-time US war spending with free, interactive data and analysis.',
  },
}

const IRAN_BREAKING = {
  day: 60,
  headline: '🚨 TRUMP: IRAN IN "STATE OF COLLAPSE" — UAE quits OPEC — GCC emergency summit in Jeddah — Rubio cold on Iran deal — Bessent: pumping "will collapse" — 16 Lebanon towns evacuated — Oil $111 — Lebanon: 2,509+ killed — 15 US KIA, 538 wounded',
  stats: [
    { value: '5,000+', label: 'Total Killed (Reuters)', },
    { value: '1,701+', label: 'Iranian Civilians (HRANA — unchanged since truce)' },
    { value: '15', label: 'US KIA / 538 Wounded' },
    { value: '2,509+', label: 'Killed in Lebanon' },
    { value: 'INDEFINITE', label: 'Ceasefire Extended — blockade remains' },
    { value: 'BLOCKADE', label: 'Iran Ports Still Blockaded — 34+ ships turned back' },
  ]
}

export default function HomePage() {
  const stats = loadData('stats.json')
  const conflicts = loadData('conflicts.json')
  const opCosts = loadData('opportunity-costs.json')
  const yearlySpending = loadData('yearly-spending.json')

  const featured = ['vietnam-war', 'afghanistan', 'iraq-war', 'korean-war', 'world-war-ii', 'gulf-war']
  const featuredConflicts = featured.map(id => conflicts.find((c: any) => c.id === id)).filter(Boolean)
  const ongoingConflicts = conflicts.filter((c: any) => !c.endYear)
  const iranConflict = conflicts.find((c: any) => c.id === 'iran-2026')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'WarCosts',
        url: 'https://www.warcosts.org',
        description: 'The cost of American empire: every war, every dollar, every life. Free, data-driven transparency platform.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.warcosts.org/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }) }} />
      {/* Breaking: Iran 2026 — Ceasefire */}
      {iranConflict && (
        <section className="bg-amber-800 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 rounded-full bg-red-700 font-semibold">⚓ BLOCKADE</span>
              <span className="font-[family-name:var(--font-heading)] font-bold">Iran 2026 — Day {IRAN_BREAKING.day}: {IRAN_BREAKING.headline}</span>
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/analysis/iran-2026" className="text-amber-200 hover:text-amber-100 underline">Full Coverage →</Link>
              <Link href="/analysis/iran-cost-per-second" className="text-amber-200 hover:text-amber-100 underline">Cost Tracker →</Link>
              <Link href="/conflicts/iran-2026" className="text-amber-200 hover:text-amber-100 underline">Data →</Link>
            </div>
          </div>
        </section>
      )}

      {/* Iran War Hub — Latest Developments */}
      {iranConflict && (
        <section className="bg-stone-950 text-white py-8 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4">
            {/* Key Stats Bar */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
              {IRAN_BREAKING.stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg md:text-xl font-bold text-amber-400">{s.value}</div>
                  <div className="text-xs text-stone-500">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs px-2 py-1 rounded-full bg-red-700 font-semibold">⚓ BLOCKADE</span>
              <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold">Latest Developments — Day {IRAN_BREAKING.day}</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-3 mb-6">
              {[
                { time: 'Day 54', text: 'TRUMP EXTENDS CEASEFIRE INDEFINITELY — BLOCKADE REMAINS — IRAN SEIZES 2 SHIPS: Trump extends ceasefire "until such time as their leaders can come up with a unified proposal." Blockade remains — Iran FM calls it "act of war." Iran seizes 2 ships in Hormuz. CENTCOM: 29 ships turned back. 400 US wounded. Graham: blockade "could become global." US intel: Iran retains ~50% missiles, ~60% navy. Lebanon: 2,454 killed. Trump approval: 33%.', link: '/analysis/iran-2026' },
                { time: 'Day 55', text: 'TRUMP: "SHOOT AND KILL" BOATS LAYING MINES — IRGC SEIZES 2 MORE SHIPS — ISRAEL "WAITING FOR GREEN LIGHT": Trump orders Navy to "shoot and kill any boat" laying mines in Hormuz. IRGC seizes 2 foreign vessels, fires on third. US seizes tanker Majestic X. CENTCOM: 31 ships turned back. Israel defense minister: "waiting for green light" to resume war. Senate kills 5th War Powers vote 46-51. Navy Secretary fired. Oil ~$103/barrel. Lebanon: 2,454 killed. No talks scheduled.', link: '/analysis/iran-2026' },
                { time: 'Day 56', text: 'HEGSETH: BLOCKADE "GROWING AND GOING GLOBAL" — 3RD CARRIER — LEBANON CEASEFIRE EXTENDED 3 WEEKS: Hegseth says blockade will last "as long as it takes." 3rd carrier arrives. 34 ships turned back. Lebanon ceasefire extended 3 weeks — Hezbollah: "meaningless." Iran FM heading to Islamabad. Pentagon threatens suspending Spain from NATO. US used 1,000+ Tomahawks — threatens Taiwan readiness. Oil ~$107.', link: '/analysis/iran-2026' },
                { time: 'Day 58', text: 'PAKISTAN TALKS STALL — LEBANON TOLL RISES: Araghchi makes 5-hour Islamabad stopover, meets Pakistan Army Chief, departs for Russia. No face-to-face with US envoys. Speaks with French FM and Qatari PM. Lebanon: 2,509 killed, 7,755 wounded. Israel-Hezbollah trade ceasefire violation accusations. Chevron CEO: Hormuz impacts "will be with us for some time." Only 5 ships through Hormuz. Oil: Brent $107.75.', link: '/analysis/iran-2026' },
                { time: 'Day 59', text: 'IRAN OFFERS HORMUZ-FOR-PEACE — ARAGHCHI MEETS PUTIN — $5B BASE DAMAGE: Iran proposes Hormuz reopening if US lifts blockade and ends war — nuclear talks postponed (AP). Araghchi meets Putin. Germany slams US: "no strategy." UN rejects Hormuz tolls. $5B damage to US bases revealed. US troops face food shortages. Israel kills 6 in Lebanon despite ceasefire. Brent $108.', link: '/analysis/iran-2026' },
                { time: 'Day 53', text: 'CEASEFIRE EXPIRES — TRUMP WON\'T EXTEND — TANKER SEIZED — TALKS IN LIMBO: Trump tells CNBC he does NOT want to extend ceasefire, military "raring to go." Navy SEALs board MT Tifani oil tanker (~2M barrels) near Sri Lanka. Vance\'s Pakistan departure delayed. Iran undecided on Round 2. Xi demands Hormuz open. IEA: "biggest energy crisis in history." Oil $95.75/bbl.', link: '/analysis/iran-2026' },
                { time: 'Day 52', text: 'USS Spruance seizes Iranian cargo ship Touska — Marines searching 5,000 containers. Iran calls it piracy. Both sides planning Islamabad talks. Only 3 ships crossed Hormuz Monday.', link: '/analysis/iran-2026' },
                { time: 'Day 50', text: 'IRAN RE-CLOSES HORMUZ: Iran reverses Hormuz opening after US refuses to lift blockade. IRGC gunboats fire on tanker 20 NM NE of Oman — no warning. Indian-flagged vessel also attacked. Ships reverse course, hundreds waiting. Only ~8 tankers passed in brief window. Oil rebounds. Israel: 1 soldier killed, 9 wounded in south Lebanon. IDF establishes "Yellow Line" demarcation.', link: '/analysis/iran-2026' },
                { time: 'Day 49', text: 'IRAN OPENS HORMUZ — OIL CRASHES 13%: Iran FM declares Hormuz "completely open" for ceasefire duration. Oil plunges to ~$86/bbl. Trump bans Israel from bombing Lebanon: "PROHIBITED by the U.S.A." Progress on 3-page MOU — $20B cash-for-uranium deal. Trump: "very close to a deal." Lebanon: 2,294 killed. US blockade remains. Ceasefire expires Apr 21 — 4 days left.', link: '/analysis/iran-2026' },
                { time: 'Day 48', text: 'Israel-Lebanon 10-day ceasefire starts. Senate kills War Powers resolution 47-52 (4th time). USS Ford breaks post-Vietnam deployment record (295 days). IEA: 6 weeks of jet fuel left. Hegseth: US "locked and loaded" on Iran power plants.', link: '/analysis/iran-2026' },
                { time: 'Day 47', text: 'TRUMP DECLARES WAR "OVER" — SENDS MORE TROOPS: Trump says war is "over" on Fox — then sends 6,000 troops + USS George HW Bush. Blockade "completely halted" Iran trade — 9 ships turned back in 48 hrs. Iran threatens Red Sea expansion. Harvard: $1 trillion war. Lebanon: 2,124 killed.', link: '/analysis/iran-2026' },
                { time: 'Day 46', text: 'BLOCKADE DAY 1: No enforcement incidents. Oil falls to $97.66/bbl on hopes of resumed talks. IMF warns of recession. Italy suspends Israel defense pact. France-UK Hormuz summit Friday. Israel-Lebanon direct talks in Washington.', link: '/analysis/iran-2026' },
                { time: 'Day 44', text: 'TALKS COLLAPSE: After 21 hours of marathon negotiations in Islamabad, Vance departs with no deal. Iran says they were "inches away" but encountered "maximalism." Trump announces blockade of Iranian ports.', link: '/analysis/iran-2026' },
                { time: 'Day 43', text: 'HISTORIC: VP Vance meets Iran\'s Ghalibaf face-to-face in Islamabad — highest-level US-Iran contact since 1979 Revolution. Pakistan mediating. Ceasefire brittle. Oil ~$98/bbl.', link: '/analysis/iran-2026' },
                { time: 'Day 39', text: 'CEASEFIRE ANNOUNCED: Trump announces 2-week pause via Truth Social at 6:32 PM ET. Pakistan PM Sharif and Army Chief Munir mediated. 5,000+ killed across nearly a dozen countries.', link: '/analysis/iran-2026' },
              ].map((d, i) => (
                <Link key={i} href={d.link} className="bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 transition">
                  <span className="text-red-400 text-xs font-bold">{d.time}</span>
                  <p className="text-sm text-stone-300 mt-1">{d.text}</p>
                </Link>
              ))}
            </div>

            {/* Analysis Hub Links */}
            <div className="border-t border-white/10 pt-4">
              <h3 className="text-xs text-stone-500 uppercase tracking-wide mb-3">Iran War 2026 — Analysis & Data</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {[
                  { title: 'Full Timeline', href: '/analysis/iran-2026', icon: '📋' },
                  { title: 'Cost Breakdown', href: '/analysis/iran-cost-per-second', icon: '💰' },
                  { title: 'Civilian Toll', href: '/analysis/iran-civilian-cost', icon: '🏥' },
                  { title: 'Regional Spread', href: '/analysis/iran-regional-war', icon: '🗺️' },
                  { title: 'Russia\'s Role', href: '/analysis/iran-russia-shadow-war', icon: '🕵️' },
                  { title: 'Hormuz Crisis', href: '/analysis/hormuz-crisis', icon: '⛽' },
                  { title: 'Lebanon Front', href: '/analysis/lebanon-burns', icon: '🇱🇧' },
                  { title: 'Day-by-Day', href: '/analysis/iran-day-by-day', icon: '📅' },
                ].map((a, i) => (
                  <Link key={i} href={a.href} className="bg-white/5 hover:bg-white/10 rounded px-3 py-2 text-sm text-stone-300 hover:text-red-700 transition flex items-center gap-2">
                    <span>{a.icon}</span>
                    <span>{a.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trending Now */}
      <section className="bg-stone-900 border-b border-stone-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2 py-1 rounded-full bg-orange-600 text-white font-semibold">🔥 TRENDING</span>
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">Trending Now</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-3">
            {[
              { title: 'Hormuz Open — Oil Crashes 13%', href: '/analysis/iran-2026', tag: 'BREAKING', tagColor: 'bg-red-600' },
              { title: 'MOU Progress: $20B Uranium Deal', href: '/analysis/iran-2026', tag: 'DEAL', tagColor: 'bg-orange-600' },
              { title: 'Trump Bans Israel from Bombing Lebanon', href: '/analysis/iran-2026', tag: 'CEASEFIRE', tagColor: 'bg-green-700' },
              { title: 'Lebanon: 2,509 Killed', href: '/analysis/iran-civilian-cost', tag: 'CASUALTIES', tagColor: 'bg-purple-700' },
              { title: 'US Blockade of Iran Ports Continues', href: '/analysis/iran-2026', tag: 'BLOCKADE', tagColor: 'bg-blue-700' },
              { title: 'Ceasefire Extended Indefinitely — Blockade Remains', href: '/analysis/iran-2026', tag: 'CEASEFIRE', tagColor: 'bg-green-700' },
              { title: 'FY2025 Budget to Exceed $900B', href: '/defense-budget', tag: 'BUDGET', tagColor: 'bg-yellow-700' },
              { title: 'Pentagon Audit #7: Failed Again', href: '/pentagon-audit', tag: 'ACCOUNTABILITY', tagColor: 'bg-stone-600' },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 transition">
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${item.tagColor} text-white font-bold`}>{item.tag}</span>
                <p className="text-sm text-stone-200 mt-1 font-medium">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-stone-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Live Ticking War Cost Counter — front and center */}
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-stone-500 text-xs uppercase tracking-widest mb-3">Total US War Spending Since 9/11</p>
            <LiveCostCounter
              costPerSecond={5787}
              label=""
            />
            <p className="text-stone-600 text-xs mt-2">~$500M/day · Based on Brown University Costs of War ($8.1T base)</p>
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            The Price of <span className="text-red-600">American Empire</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            Every US war, intervention, and military action — the cost in dollars, lives, and liberty.
          </p>
          <p className="text-stone-500 text-sm max-w-2xl mx-auto mb-2">
            WarCosts is a free, data-driven transparency platform. No ads. No paywall. No defense industry
            sponsors. Just the numbers — sourced from Brown University, CRS, SIPRI, and the Pentagon&apos;s
            own reports.
          </p>
          <p className="text-stone-600 text-xs mb-12">Last updated: March 12, 2026</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{fmtMoney(stats.totalCostInflationAdjusted)}</p>
              <p className="text-stone-400 text-sm mt-1">Total Cost</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{stats.totalUSDeaths >= 1e6 ? `${(stats.totalUSDeaths / 1e6).toFixed(1)}M+` : `${Math.round(stats.totalUSDeaths / 1e3).toLocaleString()}K+`}</p>
              <p className="text-stone-400 text-sm mt-1">Americans Killed</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{(stats.totalCivilianDeaths / 1e6).toFixed(1)}M+</p>
              <p className="text-stone-400 text-sm mt-1">Civilians Killed</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{stats.totalConflicts}</p>
              <p className="text-stone-400 text-sm mt-1">Major Conflicts</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12 text-sm">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(stats.totalInterventions)}</p>
              <p className="text-stone-400">Military interventions since 1798</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmtMoney(stats.costPerSecond)}/sec</p>
              <p className="text-stone-400">Current military spending rate</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{stats.victories}W–{stats.defeats}L–{stats.inconclusive}I</p>
              <p className="text-stone-400">Win/Loss/Inconclusive record</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{stats.undeclaredWars} of {stats.totalConflicts}</p>
              <p className="text-stone-400">Wars without Congress</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/timeline" className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Explore the Timeline →
            </Link>
            <Link href="/opportunity-cost" className="border border-stone-600 hover:border-stone-400 text-white px-6 py-3 rounded-lg font-semibold transition">
              What Else Could This Buy?
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Facts Strip */}
      <section className="bg-red-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <span><strong>${fmt(stats.costPerSecond)}</strong>/second on defense</span>
            <span><strong>229</strong> years at war (of 249)</span>
            <span><strong>{stats.veteranSuicidePerDay}</strong> veteran suicides/day</span>
            <span><strong>{fmt(stats.overseasBases)}</strong> overseas bases</span>
            <span><strong>0</strong> Pentagon audits passed</span>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { label: 'Undeclared Wars', value: `${stats.undeclaredWars} of ${stats.totalConflicts}`, sub: 'No congressional authorization' },
            { label: 'Overseas Bases', value: fmt(stats.overseasBases), sub: `In ${stats.overseasCountries} countries` },
            { label: 'Annual Budget', value: fmtMoney(stats.currentAnnualBudget), sub: `${stats.pctGdp}% of GDP` },
            { label: 'War on Terror', value: fmtMoney(stats.warOnTerrorCost), sub: `${fmt(stats.warOnTerrorDeaths)} killed` },
            { label: 'Foreign Aid', value: fmtMoney(stats.foreignAidAnnual), sub: 'Per year' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-2xl md:text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.value}</p>
              <p className="font-semibold text-sm mt-1">{s.label}</p>
              <p className="text-muted text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Military Spending Over Time — Interactive Chart */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">US Military Spending: 1949–2024</h2>
          <p className="text-stone-500 text-sm mb-6">Inflation-adjusted billions. Peaks during Korea, Vietnam, Reagan buildup, and the War on Terror.</p>
          <div className="bg-stone-900 rounded-xl p-4 md:p-6">
            <HomeSpendingChart data={yearlySpending} />
          </div>
          <p className="text-stone-400 text-xs mt-2 text-center">Source: OMB Historical Budget Tables, adjusted to 2023 dollars via BLS CPI</p>
        </div>
      </section>

      {/* Start Exploring Pathways */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">Start Exploring</h2>
        <p className="text-stone-500 mb-8">Choose your entry point into the data.</p>
        
        {/* This Day in War History */}
        <div className="mb-8">
          <ThisDayInWarHistory />
        </div>
        
        {/* Featured New Tools */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-red-800 mb-4">🆕 New Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/pentagon-audit', icon: '🔍', title: 'Pentagon Audit Tracker', desc: '6 failed audits. $23T unaccounted. Track the money.' },
              { href: '/revolving-door', icon: '🚪', title: 'Revolving Door', desc: 'Pentagon to contractor pipelines exposed' },
              { href: '/war-roi', icon: '📈', title: 'War ROI Rankings', desc: 'Which wars delivered "bang for buck"?' },
              { href: '/blowback-map', icon: '🗺️', title: 'Blowback Map', desc: 'Interactive map of intervention consequences' },
            ].map(p => (
              <Link key={p.href} href={p.href} className="bg-white rounded-lg border border-red-200 p-4 hover:shadow-md transition">
                <span className="text-2xl block mb-2">{p.icon}</span>
                <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold mb-1">{p.title}</h4>
                <p className="text-stone-500 text-xs">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/us-military-spending', icon: '💰', title: 'US Military Spending', desc: '$886B/year — more than the next 10 countries combined' },
            { href: '/cost-of-war', icon: '📊', title: 'Cost of War', desc: '$11.3 trillion since 1776. $8T since 9/11 alone.' },
            { href: '/us-wars-list', icon: '⚔️', title: 'Every US War', desc: '36 wars, 469 interventions, 5 declared by Congress' },
            { href: '/veteran-suicide', icon: '🎗️', title: 'Veteran Suicide', desc: '17 per day. More than die in combat.' },
            { href: '/modern-wars', icon: '🔥', title: 'Modern Wars', desc: 'The forever wars — 1995 to present' },
            { href: '/defense-budget', icon: '🏛️', title: 'Defense Budget', desc: 'Where every dollar goes. Never audited.' },
            { href: '/who-fights', icon: '👥', title: 'Who Fights Our Wars?', desc: 'The demographics of those who die for America' },
            { href: '/cost-overruns', icon: '📈', title: 'Cost Overruns Database', desc: 'F-35: $1.7T and counting. Every boondoggle documented.' },
            { href: '/tools/tax-receipt', icon: '🧾', title: 'Your Tax Receipt', desc: 'How much of YOUR money funds the military' },
            { href: '/tools/cost-calculator', icon: '🧮', title: 'Your War Cost', desc: 'Lifetime military spending in your name' },
            { href: '/glossary', icon: '📚', title: 'Military Glossary', desc: 'Decode the acronyms: JSOC, CENTCOM, MIC, and more' },
            { href: '/timeline', icon: '📅', title: 'Interactive Timeline', desc: 'Every war, intervention, and covert op since 1776' },
          ].map(p => (
            <Link key={p.href} href={p.href} className="bg-white rounded-lg border p-6 hover:shadow-md transition">
              <span className="text-3xl block mb-2">{p.icon}</span>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-1">{p.title}</h3>
              <p className="text-stone-500 text-sm">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* War on Terror callout */}
      <section className="bg-red-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl font-bold mb-2">
            Since 2001, the US has spent {fmtMoney(stats.warOnTerrorCost)} and lost {fmt(stats.warOnTerrorDeaths)} lives
          </p>
          <p className="text-red-200 text-lg mb-1">in the War on Terror</p>
          <p className="text-red-300 text-sm mb-6">{stats.counterterrorCountries} countries. {(stats.warOnTerrorDisplaced / 1e6).toFixed(0)} million displaced. {stats.ongoing} operations still ongoing.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/modern-wars" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2 rounded-lg font-semibold transition text-sm">
              Modern Wars →
            </Link>
            <Link href="/analysis/forever-wars" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2 rounded-lg font-semibold transition text-sm">
              How 60 Words Enabled It →
            </Link>
          </div>
        </div>
      </section>

      {/* Ongoing Operations */}
      {ongoingConflicts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700 font-semibold animate-pulse">● ONGOING</span>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{ongoingConflicts.length} Active Operations</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ongoingConflicts.map((c: any) => (
              <Link key={c.id} href={`/conflicts/${c.id}`} className="bg-white rounded-lg border border-red-200 p-4 hover:shadow-md transition">
                <h3 className="font-[family-name:var(--font-heading)] font-bold">{c.shortName || c.name}</h3>
                <p className="text-muted text-sm">{c.startYear}–Present · {c.region}</p>
                <p className="font-bold text-primary text-sm mt-1">{fmtMoney(c.costInflationAdjusted)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Featured Conflicts */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">Major Conflicts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredConflicts.map((c: any) => (
            <Link key={c.id} href={`/conflicts/${c.id}`} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{c.shortName || c.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  c.outcome?.includes('Victory') ? 'bg-green-100 text-green-700' :
                  c.outcome?.includes('Defeat') ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>{c.outcome}</span>
              </div>
              <p className="text-muted text-sm mb-3">{c.startYear}–{c.endYear} · {c.region}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="font-bold text-primary">{fmtMoney(c.costInflationAdjusted)}</p>
                  <p className="text-xs text-muted">Cost</p>
                </div>
                <div>
                  <p className="font-bold text-primary">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) : '—'}</p>
                  <p className="text-xs text-muted">US Deaths</p>
                </div>
                <div>
                  <p className="font-bold text-primary">{c.civilianDeaths ? fmt(c.civilianDeaths) : '—'}</p>
                  <p className="text-xs text-muted">Civilian Deaths</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/conflicts" className="text-primary font-semibold hover:underline">View All {stats.totalConflicts} Conflicts →</Link>
          <span className="mx-3 text-stone-300">|</span>
          <Link href="/analysis/the-469" className="text-primary font-semibold hover:underline">The {fmt(stats.totalInterventions)} Interventions →</Link>
        </div>
      </section>

      {/* Data Sources - Social Proof */}
      <section className="bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 text-center">Our Data Sources</h2>
          <p className="text-stone-500 text-center mb-8 max-w-2xl mx-auto">
            Every number on this site is sourced from official government reports, peer-reviewed academic research,
            and established investigative organizations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { name: 'Brown University', sub: 'Costs of War Project' },
              { name: 'Congressional Research Service', sub: 'CRS Reports' },
              { name: 'SIPRI', sub: 'Military Expenditure Database' },
              { name: 'Dept. of Defense', sub: 'DMDC, Base Structure Reports' },
              { name: 'OMB', sub: 'Historical Budget Tables' },
              { name: 'Bureau of Labor Statistics', sub: 'CPI Inflation Data' },
            ].map(s => (
              <div key={s.name} className="bg-white rounded-lg p-4 border">
                <p className="font-bold text-sm">{s.name}</p>
                <p className="text-stone-500 text-xs">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/sources" className="text-primary font-semibold hover:underline text-sm">View All Sources →</Link>
            <span className="mx-2 text-stone-300">|</span>
            <Link href="/methodology" className="text-primary font-semibold hover:underline text-sm">Our Methodology →</Link>
          </div>
        </div>
      </section>

      {/* Opportunity Cost Preview */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">What Else Could {fmtMoney(opCosts.warOnTerrorTotal)} Buy?</h2>
          <p className="text-stone-400 mb-8">The War on Terror alone cost {fmtMoney(opCosts.warOnTerrorTotal)}. Here&apos;s what that money could have done instead.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {opCosts.examples.slice(0, 6).map((e: any) => (
              <div key={e.item} className="bg-stone-800 rounded-lg p-5 border border-stone-700">
                <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{e.units >= 1e6 ? `${(e.units/1e6).toFixed(0)}M` : fmt(e.units)}×</p>
                <p className="font-semibold mt-1">{e.item}</p>
                <p className="text-stone-400 text-sm mt-1">{e.description}</p>
              </div>
            ))}
          </div>
          {/* Extra vivid comparisons */}
          <div className="border-t border-stone-700 pt-6">
            <h3 className="text-stone-500 text-xs uppercase tracking-wide mb-4">Put another way…</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: '🏠', stat: '53 Million', desc: 'Homes at median US price ($150K)' },
                { icon: '🏥', stat: '800 Years', desc: 'Of Medicare for All ($10T/decade)' },
                { icon: '🚀', stat: '296 Apollo Programs', desc: 'At $27B each (2023 dollars)' },
                { icon: '🌎', stat: 'End World Hunger', desc: 'For 228 years ($35B/yr, UN est.)' },
                { icon: '🔋', stat: '160× US Solar Grid', desc: 'Full renewable conversion ($50B each)' },
                { icon: '🎓', stat: 'Cancel All Student Debt', desc: '4.7 times over ($1.7T total)' },
                { icon: '💊', stat: 'Cure Cancer Research', desc: 'Fund NIH for 1,333 years ($6B/yr)' },
                { icon: '🚰', stat: 'Replace Every Lead Pipe', desc: 'In America 160 times ($50B est.)' },
              ].map((c, i) => (
                <div key={i} className="bg-stone-800/50 border border-stone-700 rounded-lg p-3 text-center">
                  <span className="text-2xl">{c.icon}</span>
                  <p className="text-lg font-bold text-red-400 font-[family-name:var(--font-heading)] mt-1">{c.stat}</p>
                  <p className="text-stone-400 text-xs">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/opportunity-cost" className="text-red-400 font-semibold hover:underline">See All Comparisons →</Link>
          </div>
        </div>
      </section>

      {/* Featured Analysis */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">Featured Analysis</h2>
        <p className="text-stone-500 mb-8">Our most impactful investigations into the cost of American military power.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'The Lies That Started Wars', href: '/analysis/lies-that-started-wars', desc: 'Gulf of Tonkin. WMDs. Incubator babies. A pattern of deception that cost millions of lives.' },
            { title: 'The Cost of Secrecy', href: '/analysis/cost-of-secrecy', desc: '$18.5B/year on classification. What are they hiding and what does it cost us?' },
            { title: 'Empire of Bases', href: '/analysis/empire-of-bases', desc: '750 bases in 80 countries. No other empire in history has maintained this kind of global footprint.' },
            { title: 'Veterans Betrayed', href: '/analysis/veterans-betrayed', desc: 'We send them to war, then abandon them. The VA crisis in numbers.' },
            { title: 'The War Economy', href: '/analysis/war-economy', desc: 'How defense spending shapes — and distorts — the American economy.' },
            { title: 'Allies and Enemies', href: '/analysis/allies-and-enemies', desc: 'We armed the Mujahideen, then fought them. We backed Saddam, then toppled him. The pattern repeats.' },
          ].map(a => (
            <Link key={a.href} href={a.href} className="bg-white rounded-lg border border-stone-200 p-6 hover:shadow-md hover:border-red-200 transition">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2 text-stone-900">{a.title}</h3>
              <p className="text-stone-500 text-sm">{a.desc}</p>
              <span className="text-red-600 text-sm font-semibold mt-3 inline-block">Read →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Share Stats CTA */}
      <section className="bg-stone-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">Share the Truth</h2>
          <p className="text-stone-500 mb-6">Pre-designed stat cards you can screenshot and share on social media.</p>
          <Link href="/share" className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition inline-block">
            View Shareable Stats →
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <NewsletterSignup />
      </section>

      {/* Quote */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <blockquote className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl italic text-stone-700">
          &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, a theft from those who hunger and are not fed.&rdquo;
        </blockquote>
        <p className="text-muted mt-4">— Dwight D. Eisenhower, 1953</p>
      </section>

      {/* Iran 2026 Analysis — Featured */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700 font-semibold">NEW</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Iran War 2026 — Deep Analysis</h2>
        </div>
        <p className="text-stone-500 mb-8">The most comprehensive coverage of Operation Epic Fury&apos;s costs, casualties, and consequences.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Whose War Is This?', href: '/analysis/iran-2026', desc: 'The full Day 1–7 timeline. How diplomacy failed and bombs started falling.' },
            { title: 'The $28,095-Per-Second War', href: '/analysis/iran-cost-per-second', desc: 'Every Tomahawk ($2.5M), B-2 sortie ($4.5M), and SM-3 interceptor ($36M) — priced and sourced.' },
            { title: 'The Civilian Cost', href: '/analysis/iran-civilian-cost', desc: '180 schoolgirls. Grand Bazaar destroyed. Golestan Palace in rubble. What "precision" looks like.' },
            { title: '11 Countries, 7 Days', href: '/analysis/iran-regional-war', desc: 'How a two-country war engulfed Iran, Israel, Lebanon, UAE, Qatar, Bahrain, Kuwait, Iraq, Saudi Arabia, Cyprus, Azerbaijan.' },
            { title: 'Russia\'s Shadow War', href: '/analysis/iran-russia-shadow-war', desc: 'Moscow is sharing US military positions with Iran. Americans are dying with Russian help.' },
            { title: 'Hormuz: The $80B Chokepoint', href: '/analysis/hormuz-crisis', desc: '21 miles wide. 20% of global oil. Iran closed it. There is no detour.' },
          ].map(a => (
            <Link key={a.href} href={a.href} className="bg-white rounded-lg border border-red-200 p-6 hover:shadow-md transition">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">{a.title}</h3>
              <p className="text-muted text-sm">{a.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Analysis Preview */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">More Analysis</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'The War on Terror: $8 Trillion Later', href: '/analysis/war-on-terror', desc: '929,000 dead. Four countries destabilized. Was it worth it?' },
            { title: '19 Wars Without Congress', href: '/analysis/congressional-authority', desc: 'How presidents bypassed the Constitution to wage war.' },
            { title: 'Blowback', href: '/analysis/blowback', desc: 'How US interventions created the enemies of tomorrow.' },
            { title: 'The Military-Industrial Complex', href: '/analysis/military-industrial-complex', desc: 'Eisenhower warned us. We didn\'t listen.' },
            { title: 'The Human Cost', href: '/analysis/human-cost', desc: '17 veterans take their own lives every day.' },
            { title: 'Empire of Bases', href: '/analysis/empire-of-bases', desc: '750 bases in 80 countries. Why?' },
          ].map(a => (
            <Link key={a.href} href={a.href} className="bg-white rounded-lg border p-6 hover:shadow-md transition">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">{a.title}</h3>
              <p className="text-muted text-sm">{a.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why This Site Exists */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">Why This Site Exists</h2>
          <p className="text-stone-600 text-lg mb-4">
            The Founders believed that a free people must understand what their government does in their name —
            especially when it comes to war. James Madison warned that &ldquo;of all the enemies to public liberty,
            war is, perhaps, the most to be dreaded.&rdquo;
          </p>
          <p className="text-stone-600 mb-4">
            WarCosts exists to make the costs of American military power visible, measurable, and undeniable.
            Not through opinion or ideology, but through data — sourced from the government&apos;s own reports,
            peer-reviewed academic research, and established investigative organizations.
          </p>
          <p className="text-stone-500 text-sm mb-8">
            Free. No ads. No paywall. No defense industry sponsors. A <Link href="https://thedataproject.ai" className="text-primary hover:underline">TheDataProject.ai</Link> platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="text-primary font-semibold hover:underline">About Us →</Link>
            <Link href="/methodology" className="text-primary font-semibold hover:underline">Our Methodology →</Link>
            <Link href="/sources" className="text-primary font-semibold hover:underline">Data Sources →</Link>
            <Link href="/faq" className="text-primary font-semibold hover:underline">FAQ →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
