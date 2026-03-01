import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { SpendingAreaChart } from '@/components/charts/SpendingCharts'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Military Spending — $886 Billion in 2024 | WarCosts',
  description: 'The United States spends $886 billion per year on defense — more than the next 10 countries combined. $2,600 per American. 53% of discretionary spending. Full breakdown.',
  keywords: ['us military spending', 'defense spending', 'military budget', 'pentagon budget', 'how much does us spend on military'],
  openGraph: {
    title: 'US Military Spending — $886 Billion Per Year',
    description: 'More than the next 10 countries combined.',
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
  { label: 'Operations & Maintenance', amount: 290e9, pct: 33, desc: 'Day-to-day running costs, facilities, logistics' },
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
]

export default function USMilitarySpendingPage() {
  const stats = loadData('stats.json')
  const spending = loadData('military-spending.json')

  const next10Total = globalComparison.slice(1).reduce((s, c) => s + c.amount, 0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'US Military Spending — $886 Billion Per Year',
    description: 'The United States spends more on its military than the next 10 countries combined.',
    url: 'https://warcosts.org/us-military-spending',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-01-01',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'US Military Spending' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">US Military Spending</h1>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        The United States spends <strong className="text-stone-800">{fmtMoney(stats.currentAnnualBudget)}</strong> per year
        on its military — {stats.pctGdp}% of GDP, 53% of federal discretionary spending, and more than the next 10 countries combined.
        That&apos;s <strong className="text-stone-800">{fmtMoney(stats.costPerSecond)}</strong> every second,
        <strong className="text-stone-800"> $2,640</strong> per American per year.
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

      <SpendingAreaChart data={spending} />

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
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The US &ldquo;black budget&rdquo; — classified spending on intelligence agencies and secret programs —
            is estimated at <strong>$23 billion or more per year</strong>. This figure, revealed by Edward Snowden
            in 2013, is likely higher today. It doesn&apos;t include classified DOD programs hidden within the
            larger defense budget, which could add another $50–80 billion in undisclosed spending.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Where the Money Goes</h2>
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

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Hidden Costs: Beyond $886 Billion</h2>
        <p>
          The $886 billion DOD budget dramatically understates true US military spending. The figure excludes
          multiple categories of military-related spending spread across other agencies:
        </p>
        <ul>
          <li><strong>Veterans Affairs:</strong> ~$325B/year — healthcare, disability, pensions for 18 million veterans ({fmtMoney(stats.veteranCareFutureCost)} projected through 2050)</li>
          <li><strong>Nuclear Weapons (DOE):</strong> ~$50B/year — maintained by the Department of Energy, not DOD</li>
          <li><strong>Homeland Security:</strong> ~$62B/year — created after 9/11, fundamentally a military-adjacent function</li>
          <li><strong>Intelligence Community:</strong> ~$70B/year — CIA, NSA, NRO, and 14 other agencies</li>
          <li><strong>Interest on War Debt:</strong> ~$100B+/year — the compounding cost of borrowing to fund wars</li>
          <li><strong>State Department military programs:</strong> ~$18B/year — foreign military financing, IMET</li>
        </ul>
        <p>
          When all military-related spending is included, the true annual cost exceeds <strong>$1.4 trillion</strong> —
          roughly <strong>$4,200 per American per year</strong>, or $11,500 per household.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">53% of Discretionary Spending</h2>
        <p>
          Federal spending falls into two categories: mandatory (Social Security, Medicare, Medicaid) and
          discretionary (everything Congress votes on annually). Military spending consumes approximately
          <strong> 53% of all federal discretionary spending</strong> — more than education (6%), transportation (3%),
          housing (3%), science (2%), and the environment (1%) combined.
        </p>
        <p>
          To put it differently: for every discretionary dollar Congress spends, 53 cents go to the military.
          The remaining 47 cents fund every other function of the federal government — from the FBI to national
          parks to food safety to NASA.
        </p>

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
          <li><strong>FY2024:</strong> $886B (Congress added $28B above the White House request)</li>
        </ul>
        <p>
          Notice the pattern: Congress consistently appropriates <strong>more</strong> than the President requests.
          Both parties compete to appear more pro-defense than the other. The Pentagon gets more than it asks
          for, year after year, regardless of whether America is at war or at peace.
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
          EPA budget ($12B), and repair every deficient bridge ($125B) — and still have
          <strong> $522 billion left over</strong>.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Pentagon Has Never Passed an Audit</h2>
        <p>
          Despite being required by law since 1990, the Department of Defense has <strong>never passed a
          comprehensive financial audit</strong>. It first attempted one in 2018 — and failed. It has failed
          every year since. The Pentagon cannot account for trillions of dollars in assets, cannot tell you
          where its equipment is, and cannot produce reliable financial statements.
        </p>
        <p>
          No other federal agency has this problem. If a private company operated this way, its executives
          would face criminal charges. But the Pentagon&apos;s audit failures carry no consequences — and
          Congress continues increasing its budget regardless.
        </p>

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
      </div>

      <div className="text-center my-8">
        <Link href="/war-clock" className="inline-block bg-red-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition">
          Watch It Tick → War Clock
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
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
