import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import LastUpdated from '@/components/LastUpdated'
import FaqJsonLd from '@/components/FaqJsonLd'
import { SpendingAreaChart } from '@/components/charts/SpendingCharts'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Military Spending — $886 Billion in 2024',
  description: 'The United States spends $886 billion per year on defense — more than the next 10 countries combined. $2,600 per American. 53% of discretionary spending. Full breakdown with historical data, hidden costs, and global comparisons.',
  keywords: ['us military spending', 'defense spending', 'military budget', 'pentagon budget', 'how much does us spend on military', 'military spending by country', 'defense budget breakdown'],
  openGraph: {
    title: 'US Military Spending — $886 Billion Per Year',
    description: 'More than the next 10 countries combined. 53% of discretionary spending. Never audited.',
    url: 'https://warcosts.org/us-military-spending',
    type: 'article',
  },
}

const globalComparison = [
  { country: '🇺🇸 United States', amount: 886e9, perCapita: 2640 },
  { country: '🇨🇳 China', amount: 293e9, perCapita: 200 },
  { country: '🇷🇺 Russia', amount: 109e9, perCapita: 750 },
  { country: '🇮🇳 India', amount: 83e9, perCapita: 58 },
  { country: '🇸🇦 Saudi Arabia', amount: 75e9, perCapita: 2070 },
  { country: '🇬🇧 United Kingdom', amount: 69e9, perCapita: 1010 },
  { country: '🇩🇪 Germany', amount: 56e9, perCapita: 670 },
  { country: '🇫🇷 France', amount: 54e9, perCapita: 790 },
  { country: '🇯🇵 Japan', amount: 50e9, perCapita: 400 },
  { country: '🇰🇷 South Korea', amount: 46e9, perCapita: 890 },
  { country: '🇦🇺 Australia', amount: 32e9, perCapita: 1220 },
]

const budgetBreakdown = [
  { label: 'Operations & Maintenance', amount: 290e9, pct: 33, desc: 'Day-to-day running costs, facilities, logistics, contractor services' },
  { label: 'Military Personnel', amount: 170e9, pct: 19, desc: 'Pay and benefits for 1.3M active duty + reserves' },
  { label: 'Procurement', amount: 150e9, pct: 17, desc: 'Weapons, vehicles, ships, aircraft' },
  { label: 'Research & Development', amount: 140e9, pct: 16, desc: 'Next-gen weapons, hypersonics, AI, space' },
  { label: 'Military Construction', amount: 15e9, pct: 2, desc: 'Bases, facilities, housing' },
  { label: 'Other / Classified', amount: 121e9, pct: 13, desc: 'Black budget, intelligence, nuclear' },
]

const alternativeUses = [
  { item: 'Eliminate all US medical debt', cost: 195e9, note: '100% of the $195B in collections' },
  { item: 'Make all public universities free', cost: 79e9, note: 'Annual tuition for every student' },
  { item: 'End homelessness in America', cost: 20e9, note: 'HUD estimate for permanent housing' },
  { item: 'Fund Medicare for All (net new cost)', cost: 300e9, note: 'Annual net federal increase (some estimates)' },
  { item: 'Repair every US bridge rated deficient', cost: 125e9, note: 'ASCE estimate, 42,000 bridges' },
  { item: 'Universal pre-K for all 3-4 year olds', cost: 34e9, note: 'Annual cost per CBO estimates' },
  { item: 'Double the EPA budget', cost: 12e9, note: 'Current EPA budget: $12.1B' },
  { item: 'Triple the NIH research budget', cost: 94e9, note: 'From $47B to $141B' },
  { item: 'Provide clean water to every American', cost: 45e9, note: 'EPA estimate for water infrastructure' },
  { item: 'Fund 10 years of wildfire prevention', cost: 50e9, note: 'USFS recommended investment' },
]

const historicalEras = [
  { era: 'Founding Era (1789–1860)', spending: '$5–10M/year', pctGdp: '~1%', note: 'Small standing army per Founders\' wishes. Jefferson reduced the military; Monroe expanded the Navy.' },
  { era: 'Civil War (1861–1865)', spending: '$1.3B total (nominal)', pctGdp: '~11% peak', note: 'Massive expansion; Union spent $3.2B (2024$: ~$80B). First income tax created to fund the war.' },
  { era: 'Gilded Age (1866–1897)', spending: '$30–50M/year', pctGdp: '<1%', note: 'Rapid demobilization. Army fell from 1M to 25,000. Indian Wars were the primary military activity.' },
  { era: 'Imperial Expansion (1898–1916)', spending: '$100–200M/year', pctGdp: '~1%', note: 'Spanish-American War, Philippine-American War. US acquires global territories and naval bases.' },
  { era: 'World War I (1917–1918)', spending: '$32B total (nominal)', pctGdp: '~15% peak', note: 'Rapid buildup from 100K to 4.7M troops. First mass draft since the Civil War.' },
  { era: 'Interwar Period (1919–1940)', spending: '$600M–$1.7B/year', pctGdp: '~1–2%', note: 'Steep drawdown. Army shrank to 187,000 by 1939. Isolationist sentiment dominated.' },
  { era: 'World War II (1941–1945)', spending: '$4.7T total (2024$)', pctGdp: '~42% peak (1944)', note: 'The most expensive war in US history. GDP more than doubled. 16M Americans served.' },
  { era: 'Early Cold War (1946–1960)', spending: '$100–300B/year (2024$)', pctGdp: '~5–14%', note: 'Korea, nuclear arms race, NATO creation. Eisenhower warned of the military-industrial complex.' },
  { era: 'Vietnam Era (1961–1975)', spending: '$350–550B/year (2024$)', pctGdp: '~6–9%', note: 'Peak Cold War spending. Vietnam cost $843B (2024$). Draft fueled massive antiwar movement.' },
  { era: 'Reagan Buildup (1981–1989)', spending: '$400–600B/year (2024$)', pctGdp: '~5–6%', note: '600-ship Navy, SDI/Star Wars, stealth technology. Defense spending increased 40% in real terms.' },
  { era: 'Peace Dividend (1990–2000)', spending: '$350–450B/year (2024$)', pctGdp: '~3–4%', note: 'Brief drawdown after Cold War ended. Active duty fell from 2.1M to 1.4M. Gulf War was short.' },
  { era: 'War on Terror (2001–2021)', spending: '$600–850B/year (2024$)', pctGdp: '~3.5–5%', note: 'Post-9/11 surge. Afghanistan + Iraq. OCO slush fund. Annual budgets nearly doubled in a decade.' },
  { era: 'Great Power Competition (2022–Present)', spending: '$850–886B/year', pctGdp: '~3.4%', note: 'Pivot to China/Russia. Ukraine support. Record peacetime budgets. AI and space warfare investments.' },
]

const hiddenCosts = [
  { category: 'Veterans Affairs', amount: '$325B/year', note: 'Healthcare, disability, pensions for 18 million veterans' },
  { category: 'Nuclear Weapons (DOE)', amount: '$50B/year', note: 'Maintained by Dept. of Energy, not counted in DOD budget' },
  { category: 'Homeland Security', amount: '$62B/year', note: 'Created post-9/11 as military-adjacent function' },
  { category: 'Intelligence Community', amount: '$90B+/year', note: 'CIA, NSA, NRO, DIA, and 14 other agencies' },
  { category: 'Interest on War Debt', amount: '$100B+/year', note: 'Compounding cost of borrowing to fund wars' },
  { category: 'State Dept Military Programs', amount: '$18B/year', note: 'Foreign military financing, IMET, peacekeeping' },
  { category: 'NASA Military Programs', amount: '$5B+/year', note: 'Space Force-related R&D, classified payloads' },
  { category: 'FBI Counterterrorism', amount: '$3B+/year', note: 'Domestic counterterrorism is military-adjacent spending' },
]

const stateSpending = [
  { state: 'Virginia', amount: '$67.1B', note: 'Pentagon, CIA, defense contractors HQ (Northrop, General Dynamics)' },
  { state: 'California', amount: '$65.3B', note: 'Naval bases, Edwards AFB, defense tech sector, shipbuilding' },
  { state: 'Texas', amount: '$58.9B', note: 'Fort Cavazos, Fort Bliss, Lockheed Martin F-35, NASA Johnson' },
  { state: 'Maryland', amount: '$35.1B', note: 'NSA, Fort Meade, Naval Academy, defense contractors' },
  { state: 'Connecticut', amount: '$28.7B', note: 'Electric Boat submarines, Pratt & Whitney engines, Sikorsky' },
  { state: 'Alabama', amount: '$21.4B', note: 'Redstone Arsenal, Marshall Space Flight Center, missile defense' },
  { state: 'Florida', amount: '$20.8B', note: 'MacDill AFB (CENTCOM), Patrick SFB, Naval Station Mayport' },
  { state: 'Washington', amount: '$19.5B', note: 'Boeing, Joint Base Lewis-McChord, Naval Base Kitsap' },
  { state: 'Missouri', amount: '$17.2B', note: 'Boeing defense, Whiteman AFB (B-2 bombers), Fort Leonard Wood' },
  { state: 'Georgia', amount: '$16.8B', note: 'Fort Eisenhower, Robins AFB, Lockheed F-35 assembly, Kings Bay' },
]

const lobbyingData = [
  { year: '2019', lobbying: '$126M', contributions: '$56M', revolvingDoor: '67% of lobbyists are former DOD/Hill staff' },
  { year: '2020', lobbying: '$118M', contributions: '$52M', revolvingDoor: 'Top 5 contractors spent $60M on lobbying alone' },
  { year: '2021', lobbying: '$121M', contributions: '$48M', revolvingDoor: '380+ former senior DOD officials work for contractors' },
  { year: '2022', lobbying: '$131M', contributions: '$54M', revolvingDoor: 'Lockheed Martin: 395 lobbyists, $13M spent' },
  { year: '2023', lobbying: '$70M (H1)', contributions: '$62M', revolvingDoor: '500+ revolving door officials identified by POGO' },
]

const discretionaryComparison = [
  { category: 'Military / Defense', amount: 886e9, pct: 53 },
  { category: 'Health & Human Services', amount: 120e9, pct: 7 },
  { category: 'Education', amount: 79e9, pct: 5 },
  { category: 'Veterans Affairs', amount: 135e9, pct: 8 },
  { category: 'Homeland Security', amount: 62e9, pct: 4 },
  { category: 'State Department', amount: 58e9, pct: 3 },
  { category: 'Housing & Urban Dev.', amount: 50e9, pct: 3 },
  { category: 'Energy', amount: 47e9, pct: 3 },
  { category: 'NASA', amount: 25e9, pct: 2 },
  { category: 'EPA', amount: 12e9, pct: 1 },
  { category: 'All Other', amount: 200e9, pct: 12 },
]

export default function USMilitarySpendingPage() {
  const stats = loadData('stats.json')
  const spending = loadData('military-spending.json')

  const next10Total = globalComparison.slice(1).reduce((s, c) => s + c.amount, 0)
  const hiddenTotal = 325e9 + 50e9 + 62e9 + 90e9 + 100e9 + 18e9 + 5e9 + 3e9

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'US Military Spending — $886 Billion Per Year',
    description: 'The United States spends more on its military than the next 10 countries combined. Comprehensive breakdown of where the money goes.',
    url: 'https://warcosts.org/us-military-spending',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-01-01',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FaqJsonLd faqs={[
        { q: 'How much does the US spend on military?', a: 'The US spends $886 billion per year on defense (FY2024), more than the next 10 countries combined. When hidden costs like veterans care, intelligence, and nuclear weapons are included, the true figure exceeds $1.4 trillion.' },
        { q: 'How much does the US spend on military per second?', a: 'The US spends approximately $28,095 per second on defense, or $1.69 million per minute, $101 million per hour, and $2.43 billion per day.' },
        { q: 'What percentage of the US budget goes to military?', a: 'Defense spending accounts for about 53% of federal discretionary spending and 3.4% of GDP. It is the largest single category of discretionary spending.' },
        { q: 'How does US military spending compare to other countries?', a: 'The US spends more on its military than the next 10 countries combined, including China ($292B), Russia ($109B), India ($83B), and Saudi Arabia ($75B).' },
        { q: 'Has the Pentagon ever passed an audit?', a: 'No. The Pentagon has failed every audit since mandatory audits began in 2018 — 7 consecutive failures. It is the only federal agency that has never passed an audit.' },
      ]} />
      <Breadcrumbs items={[{ label: 'US Military Spending' }]} />
      <LastUpdated />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">US Military Spending</h1>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        The United States spends <strong className="text-stone-800">{fmtMoney(stats.currentAnnualBudget)}</strong> per year
        on its military — {stats.pctGdp}% of GDP, 53% of federal discretionary spending, and more than the next 10 countries combined.
        That&apos;s <strong className="text-stone-800">{fmtMoney(stats.costPerSecond)}</strong> every second,
        <strong className="text-stone-800"> $2,640</strong> per American per year. When hidden costs are included — veterans&apos;
        care, nuclear weapons, intelligence, and interest on war debt — the true figure exceeds <strong className="text-stone-800">$1.4 trillion</strong>.
      </p>
      <ShareButtons title="US Military Spending — $886 Billion Per Year" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8">
        {[
          { label: 'Annual Budget (FY2024)', value: fmtMoney(stats.currentAnnualBudget) },
          { label: '% of GDP', value: `${stats.pctGdp}%` },
          { label: '% Discretionary Budget', value: '53%' },
          { label: 'Per American / Year', value: '$2,640' },
          { label: 'Per Second', value: fmtMoney(stats.costPerSecond) },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl md:text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Additional stat row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'True National Security Cost', value: '$1.4T+' },
          { label: 'Per Household / Year', value: '$11,500' },
          { label: 'Per Day', value: fmtMoney(stats.costPerDay) },
          { label: 'Pentagon Audits Passed', value: '0' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 border border-red-200 text-center">
            <p className="text-xl md:text-2xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <SpendingAreaChart data={spending} />

      {/* Historical Overview */}
      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">A History of Military Spending: From Militia to Empire</h2>
        <p>
          The story of US military spending is the story of America&apos;s transformation from a small republic
          that feared standing armies into the largest military power in human history. The Founders were explicit:
          a large permanent military was a threat to liberty. James Madison warned that &ldquo;a standing military
          force, with an overgrown Executive, will not long be safe companions to liberty.&rdquo; George Washington
          counseled that &ldquo;overgrown military establishments are under any form of government inauspicious to
          liberty, and are to be regarded as particularly hostile to republican liberty.&rdquo;
        </p>
        <p>
          For the first century, America largely heeded this warning. The peacetime army was tiny — rarely more than
          25,000 troops. Wars were fought by mobilizing citizen-soldiers and then rapidly demobilizing. After the
          Civil War, the Union Army went from over 1 million to 25,000 in two years. After World War I, the Army
          shrank from 4.7 million to 140,000. This pattern — mobilize, fight, demobilize — was the American way
          of war for 170 years.
        </p>
        <p>
          World War II changed everything. For the first time, America maintained a large permanent military after
          the war ended. The Cold War made the &ldquo;temporary&rdquo; military-industrial complex permanent. And
          after the Cold War ended, the apparatus didn&apos;t shrink — it found new enemies, new missions, and new
          justifications. The Founders&apos; nightmare came true: a permanent military establishment that consumes
          more wealth than any empire in history.
        </p>
      </div>

      {/* Historical Eras */}
      <div className="max-w-3xl mx-auto my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Military Spending by Era</h2>
        <div className="space-y-3">
          {historicalEras.map(e => (
            <div key={e.era} className="bg-white rounded-lg border p-4">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm">{e.era}</h3>
                <div className="flex gap-3 text-sm">
                  <span className="text-red-800 font-bold">{e.spending}</span>
                  <span className="text-stone-500">{e.pctGdp} of GDP</span>
                </div>
              </div>
              <p className="text-stone-500 text-xs">{e.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">More Than the Next 10 Countries Combined</h2>
        <p>
          The United States spends <strong>{fmtMoney(stats.currentAnnualBudget)}</strong> on defense. The next
          10 highest-spending nations — China, Russia, India, Saudi Arabia, the UK, Germany, France, Japan,
          South Korea, and Australia — spend a combined <strong>{fmtMoney(next10Total)}</strong>. The US alone
          accounts for approximately <strong>39% of all global military spending</strong>.
        </p>
        <p>
          But raw totals only tell part of the story. Per capita, the US spends <strong>$2,640</strong> per
          citizen per year on defense. A Chinese citizen&apos;s share is approximately <strong>$200</strong>.
          An Indian citizen&apos;s: <strong>$58</strong>. Americans spend 13 times more per person on their
          military than Chinese citizens — despite facing no existential military threat.
        </p>
        <p>
          Even as a percentage of GDP, the US spends more than most allies. NATO members are supposed to
          spend 2% of GDP on defense — a target most don&apos;t meet. The US spends 3.4%. Japan spends
          about 1.1% (though rising). Germany spent just 1.5% until the 2022 Ukraine crisis prompted a
          commitment to 2%. America doesn&apos;t just lead the alliance — it subsidizes it, spending more
          so its allies can spend less on defense and more on their own citizens.
        </p>
      </div>

      {/* Global comparison */}
      <div className="max-w-3xl mx-auto my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Global Military Spending Comparison</h2>
        <div className="space-y-3">
          {globalComparison.map((c, i) => {
            const maxAmount = globalComparison[0].amount
            const widthPct = Math.max((c.amount / maxAmount) * 100, 2)
            return (
              <div key={c.country}>
                <div className="flex justify-between text-sm mb-1">
                  <span className={i === 0 ? 'font-bold' : ''}>{c.country}</span>
                  <span className="font-medium">{fmtMoney(c.amount)} · ${fmt(c.perCapita)}/person</span>
                </div>
                <div className="h-4 bg-stone-200 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${i === 0 ? 'bg-red-800' : 'bg-stone-400'}`}
                    style={{ width: `${widthPct}%` }} />
                </div>
              </div>
            )
          })}
        </div>
        <p className="text-stone-500 text-xs mt-4">Source: SIPRI Military Expenditure Database, 2023 figures. China&apos;s actual spending may be 1.5–2× the reported figure.</p>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The US &ldquo;black budget&rdquo; — classified spending on intelligence agencies and secret programs —
            is estimated at <strong>$23 billion or more per year</strong>. This figure, revealed by Edward Snowden
            in 2013, is likely higher today. It doesn&apos;t include classified DOD programs hidden within the
            larger defense budget, which could add another $50–80 billion in undisclosed spending. The total
            intelligence community budget is approximately <strong>$90 billion per year</strong> — larger than
            the entire military budget of most countries.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Where the Money Goes</h2>
        <p>
          The $886 billion DOD budget is divided into six major categories. The largest — Operations &amp;
          Maintenance at $290 billion — includes the ballooning cost of private military contractors, who
          now cost the Pentagon more than its own uniformed personnel. The second-largest is military pay
          and benefits at $170 billion, covering 1.3 million active-duty troops, 800,000 reservists, and
          750,000 civilian employees.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 my-8">
        {budgetBreakdown.map(b => (
          <div key={b.label}>
            <div className="flex justify-between text-sm mb-1">
              <span>{b.label}</span>
              <span className="font-medium">{fmtMoney(b.amount)} ({b.pct}%)</span>
            </div>
            <div className="h-4 bg-stone-200 rounded-full overflow-hidden">
              <div className="h-full bg-red-800 rounded-full" style={{ width: `${b.pct}%` }} />
            </div>
            <p className="text-stone-500 text-xs mt-1">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* Hidden costs section */}
      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Hidden Costs: The True $1.4 Trillion National Security Budget</h2>
        <p>
          The $886 billion DOD budget dramatically understates true US military spending. The figure excludes
          multiple categories of military-related spending spread across other agencies. When economists and
          security analysts calculate the <strong>total national security budget</strong>, the number is
          staggering:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 my-8 max-w-3xl mx-auto">
        {hiddenCosts.map(h => (
          <div key={h.category} className="bg-stone-50 rounded-lg p-4 border">
            <p className="font-bold text-red-800 font-[family-name:var(--font-heading)] text-lg">{h.amount}</p>
            <p className="font-medium text-stone-800 text-sm">{h.category}</p>
            <p className="text-stone-500 text-xs mt-1">{h.note}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto my-6 bg-red-50 border border-red-200 rounded-xl p-6 text-center">
        <p className="text-stone-500 text-sm mb-1">DOD Budget + All Hidden Military Costs</p>
        <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{fmtMoney(886e9 + hiddenTotal)}</p>
        <p className="text-stone-600 text-sm mt-2">
          Approximately <strong>$4,200 per American per year</strong> · <strong>$11,500 per household</strong>
        </p>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">53% of Discretionary Spending</h2>
        <p>
          Federal spending falls into two categories: mandatory (Social Security, Medicare, Medicaid) and
          discretionary (everything Congress votes on annually). Military spending consumes approximately
          <strong> 53% of all federal discretionary spending</strong> — more than education (5%), health (7%),
          housing (3%), NASA (2%), and the environment (1%) combined.
        </p>
        <p>
          To put it differently: for every discretionary dollar Congress spends, 53 cents go to the military.
          The remaining 47 cents fund every other function of the federal government — from the FBI to national
          parks to food safety to NASA to education to environmental protection.
        </p>
      </div>

      {/* Discretionary comparison */}
      <div className="max-w-3xl mx-auto my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Federal Discretionary Spending Breakdown</h2>
        <div className="space-y-3">
          {discretionaryComparison.map((c, i) => (
            <div key={c.category}>
              <div className="flex justify-between text-sm mb-1">
                <span className={i === 0 ? 'font-bold' : ''}>{c.category}</span>
                <span className="font-medium">{fmtMoney(c.amount)} ({c.pct}%)</span>
              </div>
              <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${i === 0 ? 'bg-red-800' : 'bg-stone-400'}`}
                  style={{ width: `${c.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The defense budget has increased every year under both parties. Even after the Cold War ended, the
            &ldquo;peace dividend&rdquo; lasted less than a decade before 9/11 sent spending soaring past Cold War
            levels. In inflation-adjusted terms, the US now spends more on defense than it did at the peak of the
            Vietnam War, the Korean War, or the Reagan military buildup. The only period with higher spending was
            World War II.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The Pentagon Has Never Passed an Audit</h2>
        <p>
          Despite being required by law since 1990, the Department of Defense has <strong>never passed a
          comprehensive financial audit</strong>. It first attempted one in 2018 — and failed. It has failed
          every year since. In 2023, its sixth consecutive audit failure, the Pentagon still could not account
          for <strong>$3.8 trillion in assets</strong>.
        </p>
        <p>
          The Pentagon manages 2,300+ financial software systems, many of which cannot communicate with each
          other. Some date to the 1960s. The DOD Inspector General found in 2016 that the Army made
          <strong> $6.5 trillion in accounting adjustments</strong> in a single year — more than the entire
          federal budget — just to make the books &ldquo;balance.&rdquo; These weren&apos;t real transactions;
          they were plug numbers with no supporting documentation.
        </p>
        <p>
          No other federal agency has this problem. If a private company operated this way, its executives
          would face criminal charges. But the Pentagon&apos;s audit failures carry no consequences — and
          Congress continues increasing its budget regardless. The Pentagon says it may achieve a &ldquo;clean
          audit&rdquo; by 2028. Nobody believes it.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Budget Always Grows</h2>
        <p>
          One of the most remarkable features of US military spending is its political immunity. Regardless of
          the party in power, the global security environment, or the fiscal situation, the defense budget almost
          never shrinks:
        </p>
        <ul>
          <li><strong>FY2015:</strong> $586B (Obama — supposed &ldquo;sequestration&rdquo; era)</li>
          <li><strong>FY2018:</strong> $700B (Trump — blew through spending caps)</li>
          <li><strong>FY2021:</strong> $740B (Biden transition)</li>
          <li><strong>FY2023:</strong> $858B (Biden — $45B more than he requested)</li>
          <li><strong>FY2024:</strong> $886B (Congress added $44B above the White House request)</li>
          <li><strong>FY2025:</strong> $895B requested (Congress will likely add more)</li>
        </ul>
        <p>
          Notice the pattern: Congress consistently appropriates <strong>more</strong> than the President requests.
          Both parties compete to appear more pro-defense than the other. The Pentagon gets more than it asks
          for, year after year, regardless of whether America is at war or at peace.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Budget Tricks: OCO, Supplementals, and Base Budget Manipulation</h2>
        <p>
          The Pentagon has developed sophisticated techniques for circumventing budget limits:
        </p>
        <ul>
          <li><strong>Overseas Contingency Operations (OCO):</strong> For years, the Pentagon maintained a separate
          &ldquo;war fund&rdquo; that didn&apos;t count against budget caps. At its peak, OCO added $160+ billion
          per year. The Pentagon routinely stuffed non-war base budget items into OCO to evade the Budget Control
          Act caps. OCO was formally eliminated in FY2022 — the spending was simply absorbed into the base budget,
          which promptly surged past $800 billion.</li>
          <li><strong>Supplemental Appropriations:</strong> Emergency funding bills that bypass normal budget
          scrutiny. Iraq and Afghanistan war costs were funded through supplementals for years, keeping them
          &ldquo;off the books&rdquo; of the regular defense budget.</li>
          <li><strong>Unfunded Priorities Lists:</strong> Each service chief submits a &ldquo;wish list&rdquo; of
          items not in the President&apos;s budget. Congress uses these lists to add billions in spending the
          Pentagon didn&apos;t officially request — providing political cover (&ldquo;the generals asked for it&rdquo;)
          while funneling money to favored districts.</li>
          <li><strong>Multi-year Procurement:</strong> Committing to buy weapons over multiple years locks in
          future spending and makes cancellation politically painful. Once a weapons program starts, it becomes
          nearly impossible to kill because jobs are distributed across dozens of states and hundreds of
          congressional districts.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">State-by-State Defense Spending</h2>
        <p>
          Defense spending is deliberately distributed across as many states and congressional districts as
          possible. This is by design — it makes the defense budget politically untouchable because every
          member of Congress has defense jobs in their district. The F-35 alone provides jobs in
          <strong> 45 states</strong>. The top 10 states for defense spending:
        </p>
      </div>

      <div className="max-w-3xl mx-auto my-8 space-y-3">
        {stateSpending.map((s, i) => (
          <div key={s.state} className="bg-white rounded-lg border p-4 flex justify-between items-center">
            <div>
              <span className="text-stone-400 text-sm font-mono mr-2">#{i + 1}</span>
              <span className="font-bold">{s.state}</span>
              <p className="text-stone-500 text-xs mt-1">{s.note}</p>
            </div>
            <span className="text-red-800 font-bold font-[family-name:var(--font-heading)] text-lg">{s.amount}</span>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <p>
          These ten states alone account for over <strong>$350 billion</strong> in annual defense contracts and
          spending — creating a powerful constituency of workers, companies, and elected officials whose
          livelihoods depend on the military budget growing. This is precisely the &ldquo;military-industrial
          complex&rdquo; that Eisenhower warned about in 1961.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Who Benefits: The Defense Lobbying Machine</h2>
        <p>
          The defense industry spends lavishly to ensure the budget keeps growing. The top five defense
          contractors — Lockheed Martin, Boeing, Raytheon (RTX), General Dynamics, and Northrop Grumman —
          received <strong>{fmtMoney(stats.pentagonContractors2020_2024)}</strong> in Pentagon contracts from
          2020–2024. They reinvest a fraction of those profits into lobbying and campaign contributions to
          ensure the cycle continues:
        </p>
      </div>

      <div className="overflow-x-auto my-8 max-w-3xl mx-auto">
        <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
          <thead className="bg-stone-100">
            <tr>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Year</th>
              <th className="text-right p-3 font-[family-name:var(--font-heading)]">Lobbying</th>
              <th className="text-right p-3 font-[family-name:var(--font-heading)]">Campaign $</th>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Revolving Door</th>
            </tr>
          </thead>
          <tbody>
            {lobbyingData.map(l => (
              <tr key={l.year} className="border-t border-stone-200">
                <td className="p-3 font-medium">{l.year}</td>
                <td className="p-3 text-red-800 font-semibold text-right">{l.lobbying}</td>
                <td className="p-3 text-stone-600 text-right">{l.contributions}</td>
                <td className="p-3 text-stone-500 text-xs">{l.revolvingDoor}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-stone-500 text-xs mt-2">Source: OpenSecrets, Project On Government Oversight (POGO)</p>
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <p>
          The &ldquo;revolving door&rdquo; between the Pentagon and defense contractors is the engine of this
          system. Over <strong>{fmt(stats.revolvingDoorOfficials)}</strong> former senior DOD officials have
          been identified working for defense contractors. Generals retire on Friday and start consulting for
          Lockheed Martin on Monday. Congressional staffers who write defense authorization bills leave to
          become lobbyists for the companies those bills fund. The system is self-reinforcing: the people who
          decide how to spend the money are the same people who profit from it.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            In FY2024, the five largest defense contractors received more in Pentagon contracts than the combined
            budgets of the State Department ($58B), EPA ($12B), NASA ($25B), and the Department of Education ($79B).
            Lockheed Martin alone received <strong>$75+ billion</strong> — more than the entire foreign aid budget
            of the United States. The F-35 program&apos;s lifetime cost of <strong>{fmtMoney(stats.f35LifetimeCost)}</strong> exceeds
            the GDP of all but 10 countries.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Per Capita Comparison: What Other Countries Spend on Citizens Instead</h2>
        <p>
          While the US spends $2,640 per person on defense, other nations invest differently:
        </p>
        <ul>
          <li><strong>Denmark</strong> spends $900/person on defense — and provides free healthcare, free university education, and a year of paid parental leave</li>
          <li><strong>Japan</strong> spends $400/person on defense — and has universal healthcare, a life expectancy 5 years higher than the US, and the world&apos;s best rail system</li>
          <li><strong>Germany</strong> spends $670/person on defense — and provides free university education, universal healthcare, and 30 days mandatory paid vacation</li>
          <li><strong>Canada</strong> spends $580/person on defense — and provides universal single-payer healthcare and a year of paid parental leave</li>
        </ul>
        <p>
          Americans pay more for defense per capita than any of these nations, yet rank lower in life expectancy,
          healthcare outcomes, education, and infrastructure quality. The money spent on missiles and carriers
          cannot simultaneously be spent on schools and hospitals. This is the <Link href="/opportunity-cost">opportunity cost</Link> of empire.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What $886 Billion Could Fund Instead</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 my-8 max-w-3xl mx-auto">
        {alternativeUses.map((a, i) => (
          <div key={i} className="bg-stone-50 rounded-lg p-4 border">
            <p className="font-bold text-red-800 font-[family-name:var(--font-heading)]">{fmtMoney(a.cost)}</p>
            <p className="text-stone-800 font-medium text-sm">{a.item}</p>
            <p className="text-stone-500 text-xs">{a.note}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <p>
          The $886B defense budget could simultaneously make all public universities free ($79B), end
          homelessness ($20B), provide universal pre-K ($34B), triple the NIH budget ($94B), double the
          EPA budget ($12B), repair every deficient bridge ($125B), eliminate all medical debt ($195B),
          and provide clean water infrastructure ($45B) — and still have
          <strong> $282 billion left over</strong>. That remaining amount would still be larger than the
          military budget of any country on Earth except China.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Libertarian Case Against Military Overspending</h2>
        <p>
          From a classical liberal and libertarian perspective, the current level of military spending
          represents a profound failure of limited government principles:
        </p>
        <ul>
          <li><strong>Constitutional overreach:</strong> The Founders envisioned a small defensive military, not
          a global empire with 750 bases in 80 countries. Article I gives Congress the war power, yet the
          executive now wages war at will.</li>
          <li><strong>Taxation as confiscation:</strong> Every dollar spent on an unneeded weapons system is a
          dollar taken from a citizen by force. Military spending is the largest single category of federal
          discretionary expenditure — and the least accountable.</li>
          <li><strong>Crony capitalism:</strong> The defense industry is the purest example of corporate welfare.
          Cost-plus contracts reward inefficiency. The revolving door ensures insiders profit. Competition is
          limited or nonexistent for major weapons programs.</li>
          <li><strong>Threat inflation:</strong> The national security establishment systematically overstates
          threats to justify spending. Russia&apos;s GDP is smaller than Italy&apos;s. China&apos;s military
          budget is one-third of America&apos;s. Yet the US spends as if facing an existential threat.</li>
          <li><strong>Debt and future burden:</strong> Military spending, especially war spending, is financed
          through borrowing — transferring the cost to future generations who had no voice in the decision.
          This is taxation without representation across time.</li>
        </ul>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence,
          whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise
          of misplaced power exists and will persist.&rdquo;
          <br />— Dwight D. Eisenhower, Farewell Address, January 17, 1961
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense,
          a theft from those who hunger and are not fed, those who are cold and are not clothed.&rdquo;
          <br />— Dwight D. Eisenhower, &ldquo;Chance for Peace&rdquo; speech, 1953
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;Of all the enemies to public liberty, war is, perhaps, the most to be dreaded, because it
          comprises and develops the germ of every other. War is the parent of armies; from these proceed debts
          and taxes; and armies, and debts, and taxes are the known instruments for bringing the many under the
          domination of the few.&rdquo;
          <br />— James Madison, &ldquo;Political Observations,&rdquo; 1795
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;War is a racket. It always has been. It is possibly the oldest, easily the most profitable,
          surely the most vicious. It is the only one international in scope. It is the only one in which the
          profits are reckoned in dollars and the losses in lives.&rdquo;
          <br />— Major General Smedley Butler, USMC (two-time Medal of Honor recipient), 1935
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">Jobs: Military Spending Creates the Fewest</h2>
        <p>
          One common defense of military spending is &ldquo;it creates jobs.&rdquo; This is true — but it creates
          <strong> fewer jobs per dollar than any other major category of government spending</strong>. Research by
          the Political Economy Research Institute at UMass Amherst found that $1 billion in military spending
          creates approximately:
        </p>
        <ul>
          <li><strong>5,000 jobs</strong> in the military sector</li>
          <li>Versus <strong>13,000 jobs</strong> in education</li>
          <li>Versus <strong>9,000 jobs</strong> in healthcare</li>
          <li>Versus <strong>8,000 jobs</strong> in clean energy</li>
          <li>Versus <strong>7,000 jobs</strong> in infrastructure</li>
        </ul>
        <p>
          Redirecting even $100 billion from military to education spending would create a net gain of
          approximately <strong>800,000 jobs</strong>. Military spending is the least efficient form of
          economic stimulus — the high cost of weapons systems means most money goes to capital-intensive
          manufacturing, not labor. Try our <Link href="/tools/jobs-calculator">Jobs Calculator</Link> to
          see the impact of redirecting military dollars.
        </p>
      </div>

      <div className="text-center my-8 flex flex-wrap justify-center gap-4">
        <Link href="/war-clock" className="inline-block bg-red-800 text-stone-900 px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition">
          Watch It Tick → War Clock
        </Link>
        <Link href="/tools/tax-receipt" className="inline-block bg-white border border-stone-200 text-stone-900 px-6 py-3 rounded-lg font-bold hover:bg-stone-100 transition">
          Your Personal Tax Receipt →
        </Link>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border max-w-3xl mx-auto">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related</h3>
        <ul className="space-y-2">
          <li><Link href="/defense-budget" className="text-red-800 hover:underline">→ Defense Budget — Where every dollar goes</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Historical Military Spending</Link></li>
          <li><Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline">→ The Military-Industrial Complex</Link></li>
          <li><Link href="/contractors" className="text-red-800 hover:underline">→ Top Defense Contractors</Link></li>
          <li><Link href="/opportunity-cost" className="text-red-800 hover:underline">→ Opportunity Cost — What war money could buy</Link></li>
          <li><Link href="/cost-of-war" className="text-red-800 hover:underline">→ Total Cost of War Since 1776</Link></li>
          <li><Link href="/tools/jobs-calculator" className="text-red-800 hover:underline">→ Jobs Calculator — Military vs civilian jobs</Link></li>
          <li><Link href="/tools/tax-receipt" className="text-red-800 hover:underline">→ Your Military Tax Receipt</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
