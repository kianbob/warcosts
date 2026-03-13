import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does the US Spend on Military? $968B in 2024',
  description:
    'The United States spent $968 billion on its military in 2024 — 3.4% of GDP and 38% of all global military spending. Full breakdown by category with historical trends, global comparisons, and where every dollar goes.',
  keywords: [
    'how much does the US spend on military',
    'US military spending',
    'defense budget 2024',
    'military spending by country',
    'pentagon budget breakdown',
  ],
  openGraph: {
    title: 'How Much Does the US Spend on Military? $968 Billion in 2024',
    description:
      '3.4% of GDP. 38% of world total. More than China, Russia, India, UK, Saudi Arabia, Germany, France, Japan, and South Korea combined.',
    url: 'https://www.warcosts.org/how-much-does-us-spend-on-military',
    type: 'article',
  },
}

const budgetBreakdown = [
  { label: 'Operations & Maintenance', amount: 318e9, pct: 33, desc: 'Day-to-day costs, logistics, contractor services, facility upkeep' },
  { label: 'Military Personnel', amount: 184e9, pct: 19, desc: 'Pay and benefits for 1.3M active duty troops and 800K reserves' },
  { label: 'Procurement', amount: 168e9, pct: 17, desc: 'Weapons systems, vehicles, ships, and aircraft purchases' },
  { label: 'Research & Development', amount: 145e9, pct: 15, desc: 'Next-gen weapons, hypersonics, AI, cyber, and space programs' },
  { label: 'Military Construction', amount: 18e9, pct: 2, desc: 'Base construction, housing, and facility upgrades' },
  { label: 'Other / Classified', amount: 135e9, pct: 14, desc: 'Black budget programs, nuclear weapons (DOE), intelligence' },
]

const globalComparison = [
  { country: '🇺🇸 United States', amount: 968e9, pctWorld: 38 },
  { country: '🇨🇳 China', amount: 318e9, pctWorld: 12 },
  { country: '🇷🇺 Russia', amount: 151e9, pctWorld: 6 },
  { country: '🇮🇳 India', amount: 95e9, pctWorld: 4 },
  { country: '🇸🇦 Saudi Arabia', amount: 80e9, pctWorld: 3 },
  { country: '🇬🇧 United Kingdom', amount: 75e9, pctWorld: 3 },
  { country: '🇩🇪 Germany', amount: 67e9, pctWorld: 3 },
  { country: '🇫🇷 France', amount: 60e9, pctWorld: 2 },
  { country: '🇯🇵 Japan', amount: 55e9, pctWorld: 2 },
  { country: '🇰🇷 South Korea', amount: 49e9, pctWorld: 2 },
]

export default function HowMuchDoesUSSpendOnMilitary() {
  const spending = loadData('yearly-spending.json') as { year: number; amountBillions: number; president: string; war?: string }[]
  const recent = spending.filter((s) => s.year >= 2000)

  return (
    <div className="bg-stone-900 min-h-screen text-stone-600 -mt-4 -mx-4 px-4 pt-4">
      <div className="max-w-5xl mx-auto py-8">
        <Breadcrumbs items={[{ label: 'Spending', href: '/spending' }, { label: 'How Much Does the US Spend on Military' }]} />

        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          How Much Does the US Spend on Military?
        </h1>

        <p className="text-lg text-stone-600 max-w-3xl mb-4">
          In 2024, the United States spent <strong className="text-red-700">$968 billion</strong> on its military — according to
          SIPRI, the Stockholm International Peace Research Institute. That&apos;s{' '}
          <strong className="text-white">3.4% of GDP</strong>, <strong className="text-white">38% of all global military
          spending</strong>, and more than the next 10 countries combined. Every second, the Pentagon
          spends roughly <strong className="text-red-700">$30,700</strong>.
        </p>

        <ShareButtons title="How Much Does the US Spend on Military? $968 Billion in 2024" />

        {/* Hero stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          {[
            { label: '2024 Military Spending', value: '$968B' },
            { label: '% of GDP', value: '3.4%' },
            { label: '% of World Total', value: '38%' },
            { label: 'Per American / Year', value: '$2,870' },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-stone-200 rounded-lg shadow-sm p-5 text-center border border-stone-200">
              <p className="text-2xl md:text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.value}</p>
              <p className="text-stone-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Quick answer box */}
        <div className="bg-stone-800 border border-red-600/30 rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">
            The Short Answer
          </h2>
          <p className="text-stone-600">
            The US spent <strong className="text-red-700">$968 billion</strong> on defense in 2024 (SIPRI estimate including
            supplemental spending). The official DoD base budget was $886 billion, but when you add nuclear weapons
            managed by the Department of Energy, veterans&apos; care, intelligence agencies, and interest on war debt,
            the true national security budget exceeds <strong className="text-red-700">$1.4 trillion</strong> — roughly{' '}
            <strong className="text-white">$4,200 per American per year</strong>.
          </p>
        </div>

        {/* Historical trend */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mt-12 mb-6">
          US Military Spending Since 2000
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-800">
              <tr>
                <th className="text-left p-3 text-stone-500 font-[family-name:var(--font-heading)]">Year</th>
                <th className="text-right p-3 text-stone-500 font-[family-name:var(--font-heading)]">Amount (2024$)</th>
                <th className="text-left p-3 text-stone-500 font-[family-name:var(--font-heading)]">President</th>
                <th className="text-left p-3 text-stone-500 font-[family-name:var(--font-heading)]">Context</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((s) => (
                <tr key={s.year} className="border-t border-stone-200/50">
                  <td className="p-3 font-medium text-white">{s.year}</td>
                  <td className="p-3 text-red-700 font-semibold text-right">{fmtMoney(s.amountBillions * 1e9)}</td>
                  <td className="p-3 text-stone-500">{s.president}</td>
                  <td className="p-3 text-stone-500 text-xs">{s.war || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Global comparison */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mt-12 mb-6">
          How Does US Spending Compare to Other Countries?
        </h2>
        <p className="text-stone-600 mb-6 max-w-3xl">
          The US spends more on its military than China, Russia, India, Saudi Arabia, the UK, Germany,
          France, Japan, and South Korea <strong className="text-white">combined</strong>. China — the next highest
          spender — allocates roughly $318 billion, about a third of the US figure. Russia spends $151 billion.
        </p>
        <div className="space-y-3 mb-8">
          {globalComparison.map((c, i) => {
            const maxAmount = globalComparison[0].amount
            const widthPct = Math.max((c.amount / maxAmount) * 100, 2)
            return (
              <div key={c.country}>
                <div className="flex justify-between text-sm mb-1">
                  <span className={i === 0 ? 'font-bold text-stone-900' : 'text-stone-600'}>{c.country}</span>
                  <span className="font-medium text-stone-600">{fmtMoney(c.amount)} · {c.pctWorld}% of world</span>
                </div>
                <div className="h-4 bg-stone-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${i === 0 ? 'bg-red-600' : 'bg-stone-500'}`}
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
              </div>
            )
          })}
          <p className="text-stone-500 text-xs mt-2">Source: SIPRI Military Expenditure Database, 2024 estimates.</p>
        </div>

        {/* Budget breakdown */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mt-12 mb-6">
          Where Does the Money Go?
        </h2>
        <p className="text-stone-600 mb-6 max-w-3xl">
          The Pentagon&apos;s budget is divided into major categories. Operations &amp; Maintenance is the
          largest at $318 billion — this includes the massive cost of private contractors, who now cost
          the DoD more than uniformed personnel. Research &amp; Development at $145 billion funds
          hypersonic missiles, AI warfare, cyber operations, and classified programs.
        </p>
        <div className="space-y-4 mb-8">
          {budgetBreakdown.map((b) => (
            <div key={b.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-stone-600">{b.label}</span>
                <span className="font-medium text-red-700">{fmtMoney(b.amount)} ({b.pct}%)</span>
              </div>
              <div className="h-4 bg-stone-700 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 rounded-full" style={{ width: `${b.pct * 1.5}%` }} />
              </div>
              <p className="text-stone-500 text-xs mt-1">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Context / what it means */}
        <div className="bg-stone-800 border border-stone-200 rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">
            What Does $968 Billion Actually Mean?
          </h2>
          <ul className="space-y-3 text-stone-600">
            <li>• <strong className="text-white">$2.65 billion per day</strong> — more than the annual GDP of many small nations</li>
            <li>• <strong className="text-white">$110 million per hour</strong> — enough to fund 2,200 teachers for a year, every hour</li>
            <li>• <strong className="text-white">$30,700 per second</strong> — the median American salary, spent every second on defense</li>
            <li>• <strong className="text-white">53% of discretionary spending</strong> — more than education, health, housing, energy, and EPA combined</li>
            <li>• The Pentagon has <strong className="text-red-700">never passed a financial audit</strong> despite being required by law since 1990</li>
          </ul>
        </div>

        {/* FAQ-style content for SEO */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mt-12 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-5 border border-stone-200">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-stone-900 mb-2">
              Why is US military spending so high?
            </h3>
            <p className="text-stone-600 text-sm">
              The US maintains 750+ overseas military bases in 80+ countries, 11 aircraft carrier strike groups,
              a nuclear triad, and the world&apos;s most advanced weapons systems. The military-industrial complex —
              led by contractors like <Link href="/contractors" className="text-red-700 hover:underline">Lockheed Martin,
              Boeing, and RTX</Link> — spends over $100 million per year lobbying Congress to increase budgets.
              Defense spending has increased virtually every year under both parties since 9/11.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-5 border border-stone-200">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-stone-900 mb-2">
              Is US military spending going up or down?
            </h3>
            <p className="text-stone-600 text-sm">
              Up — consistently. The FY2024 defense budget of $886 billion was a record. Congress added $44 billion
              more than the White House requested. FY2025 is projected to exceed $900 billion. In inflation-adjusted
              terms, the US now spends more on defense than at the peak of the Vietnam War or the Reagan buildup.
              Only WWII spending was higher.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-5 border border-stone-200">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-stone-900 mb-2">
              Does $968B include veterans and nuclear weapons?
            </h3>
            <p className="text-stone-600 text-sm">
              The SIPRI figure of $968 billion includes some supplemental spending beyond the base DoD budget.
              However, it does <em>not</em> include veterans&apos; care ($325B), nuclear weapons managed by the
              Department of Energy ($50B), the intelligence community ($90B+), Homeland Security ($62B), or
              interest on war debt ($100B+). When all national-security-related spending is included, the true
              figure exceeds <strong className="text-red-700">$1.4 trillion per year</strong>. See our full{' '}
              <Link href="/spending/2024" className="text-red-700 hover:underline">2024 spending breakdown</Link>.
            </p>
          </div>
        </div>

        {/* Related links */}
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-6 border border-stone-200 mt-12">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-stone-900 mb-4">Explore More</h3>
          <ul className="space-y-2">
            <li><Link href="/spending" className="text-red-700 hover:underline">→ Historical Military Spending (1949–Present)</Link></li>
            <li><Link href="/spending/2024" className="text-red-700 hover:underline">→ 2024 Defense Budget Breakdown</Link></li>
            <li><Link href="/global-spending" className="text-red-700 hover:underline">→ Global Military Spending by Country</Link></li>
            <li><Link href="/contractors" className="text-red-700 hover:underline">→ Top Defense Contractors — Who Gets the Money</Link></li>
            <li><Link href="/opportunity-cost" className="text-red-700 hover:underline">→ What $968 Billion Could Buy Instead</Link></li>
          </ul>
        </div>

        <BackToTop />
      </div>
    </div>
  )
}
