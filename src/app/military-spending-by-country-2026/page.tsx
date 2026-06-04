import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Military Spending by Country 2026 — Global Defense Budgets Ranked | WarCosts',
  description: 'Military spending by country in 2026: the US leads at $1 trillion+, followed by China ($340B+) and Russia. Global defense spending hits record $2.9 trillion. Full rankings, NATO data, and analysis.',
  keywords: ['military spending by country 2026', 'defense budget 2026', 'global military spending 2026', 'world military expenditure 2026', 'NATO spending 2026', 'US military budget 2026', 'China military budget 2026', 'military spending comparison'],
  openGraph: {
    title: 'Military Spending by Country 2026 — Record $2.9 Trillion Globally',
    description: 'Every nation ranked. The US spends more than the next 10 combined. See the full 2026 data.',
    url: 'https://warcosts.org/military-spending-by-country-2026',
    type: 'article',
  },
}

/* ── Static data ─────────────────────────────────────────────── */

const top40Countries = [
  { rank: 1, country: 'United States', amount: 1010, gdpPct: 3.5, pctWorld: 35.0, change5yr: '+28%', region: 'North America' },
  { rank: 2, country: 'China', amount: 340, gdpPct: 1.7, pctWorld: 11.8, change5yr: '+42%', region: 'Asia-Pacific' },
  { rank: 3, country: 'Russia', amount: 155, gdpPct: 5.5, pctWorld: 5.4, change5yr: '+65%', region: 'Europe/Asia' },
  { rank: 4, country: 'India', amount: 88, gdpPct: 2.4, pctWorld: 3.1, change5yr: '+35%', region: 'Asia-Pacific' },
  { rank: 5, country: 'Saudi Arabia', amount: 80, gdpPct: 6.8, pctWorld: 2.8, change5yr: '+18%', region: 'Middle East' },
  { rank: 6, country: 'United Kingdom', amount: 82, gdpPct: 2.5, pctWorld: 2.8, change5yr: '+22%', region: 'Europe' },
  { rank: 7, country: 'Germany', amount: 95, gdpPct: 2.4, pctWorld: 3.3, change5yr: '+75%', region: 'Europe' },
  { rank: 8, country: 'France', amount: 68, gdpPct: 2.2, pctWorld: 2.4, change5yr: '+20%', region: 'Europe' },
  { rank: 9, country: 'Japan', amount: 65, gdpPct: 1.5, pctWorld: 2.3, change5yr: '+50%', region: 'Asia-Pacific' },
  { rank: 10, country: 'South Korea', amount: 55, gdpPct: 2.8, pctWorld: 1.9, change5yr: '+25%', region: 'Asia-Pacific' },
  { rank: 11, country: 'Australia', amount: 38, gdpPct: 2.3, pctWorld: 1.3, change5yr: '+30%', region: 'Asia-Pacific' },
  { rank: 12, country: 'Italy', amount: 38, gdpPct: 1.8, pctWorld: 1.3, change5yr: '+28%', region: 'Europe' },
  { rank: 13, country: 'Poland', amount: 45, gdpPct: 4.7, pctWorld: 1.6, change5yr: '+120%', region: 'Europe' },
  { rank: 14, country: 'Israel', amount: 35, gdpPct: 6.5, pctWorld: 1.2, change5yr: '+45%', region: 'Middle East' },
  { rank: 15, country: 'Turkey', amount: 28, gdpPct: 1.8, pctWorld: 1.0, change5yr: '+35%', region: 'Europe/Middle East' },
  { rank: 16, country: 'Canada', amount: 30, gdpPct: 1.6, pctWorld: 1.0, change5yr: '+32%', region: 'North America' },
  { rank: 17, country: 'Brazil', amount: 22, gdpPct: 1.1, pctWorld: 0.8, change5yr: '+12%', region: 'South America' },
  { rank: 18, country: 'Spain', amount: 20, gdpPct: 1.4, pctWorld: 0.7, change5yr: '+40%', region: 'Europe' },
  { rank: 19, country: 'Netherlands', amount: 22, gdpPct: 2.1, pctWorld: 0.8, change5yr: '+55%', region: 'Europe' },
  { rank: 20, country: 'Taiwan', amount: 20, gdpPct: 2.6, pctWorld: 0.7, change5yr: '+40%', region: 'Asia-Pacific' },
  { rank: 21, country: 'UAE', amount: 24, gdpPct: 4.5, pctWorld: 0.8, change5yr: '+15%', region: 'Middle East' },
  { rank: 22, country: 'Sweden', amount: 15, gdpPct: 2.4, pctWorld: 0.5, change5yr: '+80%', region: 'Europe' },
  { rank: 23, country: 'Norway', amount: 12, gdpPct: 2.3, pctWorld: 0.4, change5yr: '+45%', region: 'Europe' },
  { rank: 24, country: 'Greece', amount: 10, gdpPct: 3.2, pctWorld: 0.3, change5yr: '+20%', region: 'Europe' },
  { rank: 25, country: 'Singapore', amount: 13, gdpPct: 3.0, pctWorld: 0.5, change5yr: '+18%', region: 'Asia-Pacific' },
  { rank: 26, country: 'Romania', amount: 10, gdpPct: 2.5, pctWorld: 0.3, change5yr: '+85%', region: 'Europe' },
  { rank: 27, country: 'Denmark', amount: 9, gdpPct: 2.4, pctWorld: 0.3, change5yr: '+70%', region: 'Europe' },
  { rank: 28, country: 'Finland', amount: 8, gdpPct: 2.5, pctWorld: 0.3, change5yr: '+95%', region: 'Europe' },
  { rank: 29, country: 'Pakistan', amount: 11, gdpPct: 3.5, pctWorld: 0.4, change5yr: '+22%', region: 'Asia-Pacific' },
  { rank: 30, country: 'Colombia', amount: 8, gdpPct: 2.1, pctWorld: 0.3, change5yr: '+15%', region: 'South America' },
  { rank: 31, country: 'Indonesia', amount: 10, gdpPct: 0.7, pctWorld: 0.3, change5yr: '+28%', region: 'Asia-Pacific' },
  { rank: 32, country: 'Egypt', amount: 8, gdpPct: 1.3, pctWorld: 0.3, change5yr: '+10%', region: 'Middle East/Africa' },
  { rank: 33, country: 'Belgium', amount: 9, gdpPct: 1.5, pctWorld: 0.3, change5yr: '+55%', region: 'Europe' },
  { rank: 34, country: 'Czech Republic', amount: 7, gdpPct: 2.1, pctWorld: 0.2, change5yr: '+65%', region: 'Europe' },
  { rank: 35, country: 'Mexico', amount: 7, gdpPct: 0.5, pctWorld: 0.2, change5yr: '+8%', region: 'North America' },
  { rank: 36, country: 'Philippines', amount: 6, gdpPct: 1.2, pctWorld: 0.2, change5yr: '+35%', region: 'Asia-Pacific' },
  { rank: 37, country: 'Algeria', amount: 9, gdpPct: 4.8, pctWorld: 0.3, change5yr: '+20%', region: 'Africa' },
  { rank: 38, country: 'Iraq', amount: 8, gdpPct: 3.0, pctWorld: 0.3, change5yr: '+25%', region: 'Middle East' },
  { rank: 39, country: 'Portugal', amount: 5, gdpPct: 1.6, pctWorld: 0.2, change5yr: '+40%', region: 'Europe' },
  { rank: 40, country: 'Ukraine', amount: 45, gdpPct: 26.0, pctWorld: 1.6, change5yr: '+600%+', region: 'Europe' },
]

const natoSpending2026 = [
  { country: 'United States', amount: 1010, gdpPct: 3.5, meetsTarget: true },
  { country: 'Poland', amount: 45, gdpPct: 4.7, meetsTarget: true },
  { country: 'Greece', amount: 10, gdpPct: 3.2, meetsTarget: true },
  { country: 'United Kingdom', amount: 82, gdpPct: 2.5, meetsTarget: true },
  { country: 'Germany', amount: 95, gdpPct: 2.4, meetsTarget: true },
  { country: 'France', amount: 68, gdpPct: 2.2, meetsTarget: true },
  { country: 'Netherlands', amount: 22, gdpPct: 2.1, meetsTarget: true },
  { country: 'Czech Republic', amount: 7, gdpPct: 2.1, meetsTarget: true },
  { country: 'Italy', amount: 38, gdpPct: 1.8, meetsTarget: false },
  { country: 'Turkey', amount: 28, gdpPct: 1.8, meetsTarget: false },
  { country: 'Canada', amount: 30, gdpPct: 1.6, meetsTarget: false },
  { country: 'Belgium', amount: 9, gdpPct: 1.5, meetsTarget: false },
  { country: 'Spain', amount: 20, gdpPct: 1.4, meetsTarget: false },
]

const globalTrends = [
  { year: 2016, global: 1800, us: 640, china: 215, russia: 70, europe: 270 },
  { year: 2017, global: 1850, us: 660, china: 230, russia: 66, europe: 280 },
  { year: 2018, global: 1900, us: 680, china: 250, russia: 62, europe: 290 },
  { year: 2019, global: 1950, us: 700, china: 265, russia: 65, europe: 300 },
  { year: 2020, global: 2000, us: 740, china: 280, russia: 62, europe: 310 },
  { year: 2021, global: 2100, us: 770, china: 295, russia: 72, europe: 330 },
  { year: 2022, global: 2250, us: 820, china: 305, russia: 95, europe: 370 },
  { year: 2023, global: 2450, us: 870, china: 315, russia: 125, europe: 420 },
  { year: 2024, global: 2600, us: 920, china: 325, russia: 140, europe: 460 },
  { year: 2025, global: 2750, us: 968, china: 332, russia: 148, europe: 500 },
  { year: 2026, global: 2900, us: 1010, china: 340, russia: 155, europe: 540 },
]

const regionalSpending = [
  { region: 'North America', amount: 1040, pctGlobal: 35.9, dominantSpender: 'United States (97%)' },
  { region: 'Europe', amount: 540, pctGlobal: 18.6, dominantSpender: 'Germany, UK, France, Poland' },
  { region: 'Asia-Pacific', amount: 620, pctGlobal: 21.4, dominantSpender: 'China (55%), India, Japan' },
  { region: 'Middle East', amount: 210, pctGlobal: 7.2, dominantSpender: 'Saudi Arabia, Israel, UAE' },
  { region: 'Russia/CIS', amount: 175, pctGlobal: 6.0, dominantSpender: 'Russia (89%)' },
  { region: 'Africa', amount: 55, pctGlobal: 1.9, dominantSpender: 'Algeria, South Africa, Egypt' },
  { region: 'South America', amount: 55, pctGlobal: 1.9, dominantSpender: 'Brazil (40%), Colombia' },
]

const keyDrivers = [
  {
    driver: 'Russia-Ukraine War',
    impact: 'European defense spending surge. Germany\'s €100B special fund. Finland and Sweden join NATO. Poland becomes Europe\'s largest land army.',
    regions: 'Europe, Russia',
    spendingImpact: '+$250B/year above pre-2022 trends',
  },
  {
    driver: 'US-China Competition',
    impact: 'Indo-Pacific arms race. Japan doubles defense spending. Taiwan increases military budget 40%. AUKUS submarine deal. Philippines rearms.',
    regions: 'Asia-Pacific',
    spendingImpact: '+$100B/year above pre-2020 trends',
  },
  {
    driver: 'Middle East Instability',
    impact: 'Israel-Hamas war drives Israeli spending to 6.5% of GDP. Iran tensions. Saudi-Iran competition continues. US naval deployments.',
    regions: 'Middle East',
    spendingImpact: '+$30B/year above 2022 levels',
  },
  {
    driver: 'US Base Budget Growth',
    impact: 'Pentagon budget crosses $1 trillion for the first time. Bipartisan consensus on military spending growth. No political constituency for cuts.',
    regions: 'United States',
    spendingImpact: '$1T+ baseline (was $300B in 2000)',
  },
  {
    driver: 'AI & Autonomous Weapons',
    impact: 'Every major military invests in AI, drones, and autonomous systems. US Replicator initiative. China drone swarm programs. Arms race in military AI.',
    regions: 'Global',
    spendingImpact: 'Estimated $50B+ globally in military AI R&D',
  },
]

const usVsWorld = [
  { comparison: 'US vs China', usAmount: 1010, otherAmount: 340, ratio: '3:1', note: 'China\'s actual spending may be 40-50% higher than reported' },
  { comparison: 'US vs Russia', usAmount: 1010, otherAmount: 155, ratio: '6.5:1', note: 'Russia spends 5.5% of GDP — unsustainable long-term' },
  { comparison: 'US vs Next 10', usAmount: 1010, otherAmount: 950, ratio: '1.06:1', note: 'The US still outspends the next 10 nations combined' },
  { comparison: 'US vs All NATO Allies', usAmount: 1010, otherAmount: 470, ratio: '2.1:1', note: 'US accounts for 68% of total NATO spending' },
  { comparison: 'US vs EU Total', usAmount: 1010, otherAmount: 380, ratio: '2.7:1', note: 'EU spending growing but still dwarfed by US' },
  { comparison: 'US vs Russia + China', usAmount: 1010, otherAmount: 495, ratio: '2:1', note: 'Even combined, Russia + China spend half of the US' },
]

const fastestGrowing = [
  { country: 'Ukraine', change: '+600%+', reason: 'Full-scale war with Russia since 2022' },
  { country: 'Poland', change: '+120%', reason: 'Frontline NATO state, largest European land army goal' },
  { country: 'Finland', change: '+95%', reason: 'NATO membership, 830-mile border with Russia' },
  { country: 'Romania', change: '+85%', reason: 'Black Sea security, NATO eastern flank' },
  { country: 'Sweden', change: '+80%', reason: 'NATO membership after 200 years of neutrality' },
  { country: 'Germany', change: '+75%', reason: '€100B special defense fund, Zeitenwende policy shift' },
  { country: 'Denmark', change: '+70%', reason: 'Arctic security, NATO commitment post-Ukraine' },
  { country: 'Russia', change: '+65%', reason: 'War economy, estimated 30% of federal budget on defense' },
  { country: 'Netherlands', change: '+55%', reason: 'NATO target compliance, Ukraine support' },
  { country: 'Japan', change: '+50%', reason: 'China threat, doubling defense budget by 2027' },
]

const perCapitaSpending = [
  { country: 'United States', perCapita: 3030, population: '333M' },
  { country: 'Israel', perCapita: 3500, population: '10M' },
  { country: 'Saudi Arabia', perCapita: 2190, population: '37M' },
  { country: 'Singapore', perCapita: 2200, population: '6M' },
  { country: 'Norway', perCapita: 2200, population: '5.5M' },
  { country: 'Australia', perCapita: 1440, population: '26M' },
  { country: 'United Kingdom', perCapita: 1210, population: '68M' },
  { country: 'South Korea', perCapita: 1060, population: '52M' },
  { country: 'France', perCapita: 1000, population: '68M' },
  { country: 'Germany', perCapita: 1130, population: '84M' },
  { country: 'China', perCapita: 240, population: '1.4B' },
  { country: 'Russia', perCapita: 1070, population: '145M' },
  { country: 'India', perCapita: 62, population: '1.4B' },
]

const faqs = [
  {
    q: 'Which country has the highest military spending in 2026?',
    a: 'The United States has the highest military spending in 2026, with a defense budget exceeding $1 trillion for the first time in history. This is approximately $1,010 billion, representing about 35% of total global military expenditure. China is second at roughly $340 billion.',
  },
  {
    q: 'How much does the world spend on military in 2026?',
    a: 'Global military spending in 2026 is estimated at approximately $2.9 trillion, an all-time record. This is driven by the Russia-Ukraine war (which has triggered massive European rearmament), US-China competition in the Indo-Pacific, and Middle East instability. Global spending has increased roughly 45% since 2020.',
  },
  {
    q: 'Which countries are increasing military spending the fastest?',
    a: 'The fastest-growing military budgets in 2026 are in Europe, driven by the Ukraine war. Poland (+120%), Finland (+95%), Romania (+85%), and Sweden (+80%) lead in percentage growth over 5 years. Germany has increased 75% with its €100B special defense fund. Japan (+50%) is also rapidly rearming due to the China threat.',
  },
  {
    q: 'Does the US still spend more than the next 10 countries combined?',
    a: 'Approximately yes. US military spending ($1,010B) is roughly equal to or slightly exceeds the combined spending of countries #2-#11 ($950B). This has been true for decades, though the gap is narrowing as China, European nations, and other powers increase their budgets.',
  },
  {
    q: 'How does NATO spending compare to Russia in 2026?',
    a: 'NATO member nations collectively spend approximately $1,480 billion on defense in 2026, compared to Russia\'s $155 billion. That\'s roughly a 9.5:1 spending advantage. However, Russia dedicates over 5% of GDP to defense and benefits from lower labor and equipment costs, making direct dollar comparisons somewhat misleading.',
  },
  {
    q: 'What percentage of GDP does each country spend on military?',
    a: 'Military spending as a percentage of GDP varies widely: Ukraine leads at 26%+ (wartime), followed by Saudi Arabia (6.8%), Israel (6.5%), Russia (5.5%), Poland (4.7%), the US (3.5%), and most NATO nations at 1.5-2.5%. The NATO target is 2% of GDP, with about 25 of 32 members expected to meet it by 2026.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function MilitarySpending2026Page() {
  const totalGlobal = top40Countries.reduce((s, c) => s + c.amount, 0)
  const usAmount = top40Countries[0].amount
  const next10 = top40Countries.slice(1, 11).reduce((s, c) => s + c.amount, 0)

  return (
    <main className="min-h-screen bg-white">
      <FaqJsonLd faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Military Spending by Country', href: '/military-spending-by-country' }, { label: '2026 Rankings' }]} />
        <ShareButtons title="Military Spending by Country 2026 — Global Defense Budgets Ranked" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            Military Spending by Country 2026
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Global military spending hits a record{' '}
            <strong className="text-[#991b1b]">$2.9 trillion</strong> in 2026. The United States crosses{' '}
            <strong className="text-[#991b1b]">$1 trillion</strong> for the first time. Europe is rearming
            at a pace not seen since the Cold War. The world is spending more on weapons than ever before
            in human history.
          </p>
        </header>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Global Total', value: '$2.9T' },
            { label: 'US Spending', value: '$1.01T' },
            { label: 'US Share of Global', value: '35%' },
            { label: 'Countries Tracked', value: '40' },
          ].map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* US vs World */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The United States vs. Everyone Else
          </h2>
          <p className="text-stone-700 mb-6">
            In 2026, the US crosses the $1 trillion threshold — a number that would have been unthinkable
            just 25 years ago when the defense budget was $300 billion. To put this in context:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Comparison</th>
                  <th className="text-right py-2 font-semibold text-stone-800">US</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Other</th>
                  <th className="text-center py-2 font-semibold text-stone-800">Ratio</th>
                </tr>
              </thead>
              <tbody>
                {usVsWorld.map((r) => (
                  <tr key={r.comparison} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.comparison}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b]">${r.usAmount}B</td>
                    <td className="py-2 text-right font-mono text-stone-600">${r.otherAmount}B</td>
                    <td className="py-2 text-center font-mono text-stone-700">{r.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-500">
            Note: China&apos;s actual military spending may be 40-50% higher than officially reported due to
            off-budget items, military-civil fusion programs, and subsidized procurement. SIPRI and IISS
            estimates attempt to account for this.
          </p>
        </section>

        {/* Full Rankings */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Top 40 Countries — 2026 Military Spending Rankings
          </h2>
          <p className="text-stone-700 mb-6">
            Complete rankings of the world&apos;s top 40 military spenders in 2026, including budget amounts,
            GDP percentages, share of global spending, and 5-year growth rates.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">#</th>
                  <th className="text-left py-2 font-semibold text-stone-800">Country</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Budget</th>
                  <th className="text-right py-2 font-semibold text-stone-800">% GDP</th>
                  <th className="text-right py-2 font-semibold text-stone-800">% World</th>
                  <th className="text-right py-2 font-semibold text-stone-800">5yr Change</th>
                </tr>
              </thead>
              <tbody>
                {top40Countries.map((c) => (
                  <tr key={c.country} className={`border-b border-stone-100 ${c.rank <= 3 ? 'bg-stone-50' : ''}`}>
                    <td className="py-1.5 text-stone-500 text-xs">{c.rank}</td>
                    <td className="py-1.5 text-stone-700">{c.country}</td>
                    <td className="py-1.5 text-right font-mono text-[#991b1b]">${c.amount}B</td>
                    <td className="py-1.5 text-right font-mono text-stone-600">{c.gdpPct}%</td>
                    <td className="py-1.5 text-right font-mono text-stone-600">{c.pctWorld}%</td>
                    <td className="py-1.5 text-right font-mono text-stone-600">{c.change5yr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-500">
            Sources: SIPRI Military Expenditure Database (projected), IISS Military Balance 2025/2026,
            national budget documents. All amounts in current US dollars (billions). Some 2026 figures
            are estimates based on announced budgets and growth trajectories.
          </p>
        </section>

        {/* Fastest Growing */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Fastest-Growing Military Budgets (2021–2026)
          </h2>
          <p className="text-stone-700 mb-6">
            The Russia-Ukraine war triggered the largest peacetime military buildup in Europe since the Cold War.
            Countries bordering Russia have seen the most dramatic increases, while Asia-Pacific nations are
            also rapidly rearming in response to China&apos;s military expansion.
          </p>
          <div className="space-y-3 mb-4">
            {fastestGrowing.map((c) => (
              <div key={c.country} className="bg-stone-50 rounded-lg p-4 border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-stone-800">{c.country}</span>
                  <p className="text-xs text-stone-500 mt-1">{c.reason}</p>
                </div>
                <div className="text-lg font-bold text-[#991b1b] ml-4 whitespace-nowrap">{c.change}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Military Spending by Region
          </h2>
          <p className="text-stone-700 mb-6">
            North America (essentially the United States) and Asia-Pacific account for over half of global
            military spending. Europe&apos;s share is growing rapidly, rising from 14% in 2020 to an estimated
            18.6% in 2026.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Region</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Spending</th>
                  <th className="text-right py-2 font-semibold text-stone-800">% Global</th>
                  <th className="text-left py-2 font-semibold text-stone-800 pl-4">Dominant Spender(s)</th>
                </tr>
              </thead>
              <tbody>
                {regionalSpending.map((r) => (
                  <tr key={r.region} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.region}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b]">${r.amount}B</td>
                    <td className="py-2 text-right font-mono text-stone-600">{r.pctGlobal}%</td>
                    <td className="py-2 text-stone-500 text-xs pl-4">{r.dominantSpender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* NATO */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            NATO Spending in 2026: The 2% Target
          </h2>
          <p className="text-stone-700 mb-6">
            The NATO 2% of GDP spending target, long ignored by most European members, has become a political
            imperative since Russia&apos;s invasion of Ukraine. By 2026, an estimated 25 of 32 NATO members meet
            or exceed the target — up from just 3 in 2014. Some members now argue the target should be raised to 3%.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Country</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Spending</th>
                  <th className="text-right py-2 font-semibold text-stone-800">% GDP</th>
                  <th className="text-center py-2 font-semibold text-stone-800">Meets 2%?</th>
                </tr>
              </thead>
              <tbody>
                {natoSpending2026.map((n) => (
                  <tr key={n.country} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{n.country}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b]">${n.amount}B</td>
                    <td className="py-2 text-right font-mono text-stone-600">{n.gdpPct}%</td>
                    <td className="py-2 text-center">{n.meetsTarget ? '✅' : '❌'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Per Capita */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Military Spending Per Person
          </h2>
          <p className="text-stone-700 mb-6">
            Absolute spending numbers favor large economies. Per capita figures tell a different story — how much
            each citizen effectively &quot;pays&quot; for defense. Israel, the US, and several Gulf states lead.
            China and India, despite large total budgets, spend relatively little per person due to their massive populations.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Country</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Per Capita</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Population</th>
                </tr>
              </thead>
              <tbody>
                {perCapitaSpending
                  .sort((a, b) => b.perCapita - a.perCapita)
                  .map((c) => (
                    <tr key={c.country} className="border-b border-stone-100">
                      <td className="py-2 text-stone-700">{c.country}</td>
                      <td className="py-2 text-right font-mono text-[#991b1b]">${c.perCapita.toLocaleString()}</td>
                      <td className="py-2 text-right font-mono text-stone-600">{c.population}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-700">
            The average American pays <strong className="text-[#991b1b]">$3,030 per year</strong> toward
            military spending — roughly <strong>$58 per week</strong>. That&apos;s before veteran care,
            homeland security, and intelligence spending are included, which would push the figure to ~$4,500.
          </p>
        </section>

        {/* Key Drivers */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            What&apos;s Driving the 2026 Arms Buildup
          </h2>
          <p className="text-stone-700 mb-6">
            The current global military spending surge is driven by multiple overlapping crises. Unlike the
            Cold War&apos;s single axis of competition (US vs. USSR), today&apos;s landscape involves simultaneous
            confrontations across Europe, the Indo-Pacific, and the Middle East.
          </p>
          <div className="space-y-4 mb-4">
            {keyDrivers.map((d) => (
              <div key={d.driver} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <h3 className="font-semibold text-stone-800 mb-1">{d.driver}</h3>
                <p className="text-sm text-stone-600 mb-2">{d.impact}</p>
                <div className="flex gap-4 text-xs text-stone-500">
                  <span>Regions: {d.regions}</span>
                  <span>Impact: {d.spendingImpact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Global Military Spending Trends (2016–2026)
          </h2>
          <p className="text-stone-700 mb-6">
            The last decade has seen a dramatic acceleration in global military spending, with the sharpest
            increases occurring after Russia&apos;s 2022 invasion of Ukraine. European defense spending has nearly
            doubled in four years. China&apos;s military budget has grown by 60% in a decade. Only Latin America
            and parts of Africa have avoided the global arms buildup.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Year</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Global</th>
                  <th className="text-right py-2 font-semibold text-stone-800">US</th>
                  <th className="text-right py-2 font-semibold text-stone-800">China</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Russia</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Europe</th>
                </tr>
              </thead>
              <tbody>
                {globalTrends.map((y) => (
                  <tr key={y.year} className={`border-b border-stone-100 ${y.year === 2026 ? 'bg-stone-50 font-semibold' : ''}`}>
                    <td className="py-1.5 text-stone-700 font-mono">{y.year}</td>
                    <td className="py-1.5 text-right font-mono text-stone-700">${y.global}B</td>
                    <td className="py-1.5 text-right font-mono text-[#991b1b]">${y.us}B</td>
                    <td className="py-1.5 text-right font-mono text-stone-600">${y.china}B</td>
                    <td className="py-1.5 text-right font-mono text-stone-600">${y.russia}B</td>
                    <td className="py-1.5 text-right font-mono text-stone-600">${y.europe}B</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-500">
            All amounts in current US dollars (billions). 2026 figures are estimates based on announced budgets,
            SIPRI projections, and national defense plans. Source: SIPRI, IISS, national budget documents.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-stone-200 pb-4">
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/military-spending-by-country', label: 'Military Spending by Country — 2024 Data' },
              { href: '/us-military-budget-2026', label: 'US Military Budget 2026 — Full Breakdown' },
              { href: '/us-military-spending-vs-other-countries', label: 'US Military Spending vs Other Countries' },
              { href: '/global-spending', label: 'Global Military Spending Dashboard' },
              { href: '/countries', label: 'Country Profiles' },
              { href: '/us-military-bases-around-the-world', label: 'US Military Bases Around the World' },
              { href: '/total-cost-of-us-wars-since-2001', label: 'Total Cost of US Wars Since 2001' },
              { href: '/defense-budget', label: 'Defense Budget — Historical Analysis' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-stone-50 hover:bg-stone-100 rounded-lg p-3 border border-stone-200 text-stone-700 hover:text-[#991b1b] transition-colors text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources & Methodology</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>Stockholm International Peace Research Institute (SIPRI) Military Expenditure Database</li>
            <li>International Institute for Strategic Studies (IISS) — The Military Balance 2025/2026</li>
            <li>NATO — Defence Expenditure of NATO Countries (2014-2026)</li>
            <li>World Bank — Military expenditure (% of GDP)</li>
            <li>National budget documents and defense white papers (US DOD, UK MOD, German BMVg, etc.)</li>
            <li>Congressional Research Service — Global Defense Spending Trends</li>
          </ul>
          <p className="text-sm text-stone-500 mt-4">
            <strong>Methodology note:</strong> 2026 figures combine confirmed budget allocations with SIPRI/IISS
            projections. China&apos;s figure uses SIPRI estimates that attempt to include off-budget military spending.
            Russia&apos;s figure reflects wartime spending levels. Exchange rate fluctuations affect year-over-year
            comparisons for non-USD budgets. All figures are in current US dollars unless otherwise noted.
          </p>
        </section>

        <BackToTop />
      </div>
    </main>
  )
}
