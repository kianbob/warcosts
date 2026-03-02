import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'
import { Top10Bar, GlobalTrends, SortableCountryTable } from './charts'

export const metadata: Metadata = {
  title: 'Military Spending by Country 2024 — Top 40 Nations Ranked | WarCosts',
  description: 'Compare military spending by country. The US spends $968B — more than the next 10 countries combined. Interactive table and charts for 40+ nations, NATO spending, and global trends.',
  keywords: ['military spending by country', 'defense spending by country', 'military budget comparison', 'global military spending', 'NATO spending', 'world military expenditure', 'SIPRI military spending'],
  openGraph: {
    title: 'Military Spending by Country — 2024 Global Rankings',
    description: 'The US spends more on its military than the next 10 countries combined. See every country ranked.',
    url: 'https://warcosts.org/military-spending-by-country',
    type: 'article',
  },
}

/* ── Static data ─────────────────────────────────────────────── */

const natoSpending = [
  { country: 'United States', amount: 968, gdpPct: 3.4 },
  { country: 'United Kingdom', amount: 77, gdpPct: 2.3 },
  { country: 'Germany', amount: 86, gdpPct: 2.1 },
  { country: 'France', amount: 64, gdpPct: 2.1 },
  { country: 'Italy', amount: 35, gdpPct: 1.6 },
  { country: 'Canada', amount: 27, gdpPct: 1.4 },
  { country: 'Turkey', amount: 25, gdpPct: 1.6 },
  { country: 'Poland', amount: 32, gdpPct: 4.2 },
  { country: 'Netherlands', amount: 18, gdpPct: 1.8 },
  { country: 'Spain', amount: 17, gdpPct: 1.3 },
]

const globalTrends = [
  { year: 2000, global: 1100, us: 390, china: 40, russia: 20 },
  { year: 2005, global: 1400, us: 610, china: 70, russia: 40 },
  { year: 2010, global: 1750, us: 750, china: 120, russia: 55 },
  { year: 2015, global: 1800, us: 610, china: 200, russia: 75 },
  { year: 2020, global: 2000, us: 740, china: 260, russia: 62 },
  { year: 2024, global: 2600, us: 968, china: 318, russia: 150 },
]

const faqs = [
  {
    q: 'Which country spends the most on military?',
    a: 'The United States spends the most on its military by a wide margin — approximately $968 billion in 2024. This is more than the next 10 countries combined. China is second at roughly $318 billion, followed by Russia at $150 billion.',
  },
  {
    q: 'How much does the world spend on military?',
    a: 'Global military spending reached approximately $2.6 trillion in 2024, an all-time record. This represents roughly 2.3% of global GDP. The United States accounts for approximately 37% of all global military expenditure.',
  },
  {
    q: 'What percentage of GDP does the US spend on military?',
    a: 'The US spends approximately 3.4% of GDP on defense. This is above the NATO target of 2% but below Cold War levels (which peaked at 14% during Korea and 9% during Vietnam). Some countries, like Saudi Arabia, spend 6-8% of GDP.',
  },
  {
    q: 'Do NATO countries meet the 2% GDP target?',
    a: 'As of 2024, roughly 23 of 31 NATO members meet or exceed the 2% GDP spending target, up from just 3 in 2014. The US (3.4%), Poland (4.2%), Greece (3.0%), and the Baltic states exceed it significantly. Major economies like Germany (2.1%) recently crossed the threshold, partly due to the Ukraine war.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function MilitarySpendingByCountryPage() {
  const countries = loadData('country-profiles-index.json') as {
    name: string; slug: string; rank: number | null; amount: number;
    amountBillions: number; gdpPct: number | null; pctWorld: number | null;
    trend10yr: number | null; dataYears: number; usBases: number;
  }[]

  // Filter to ranked countries with real data, top 40
  const ranked = countries
    .filter((c) => c.rank != null && c.rank > 0 && c.amount > 0)
    .sort((a, b) => (a.rank ?? 999) - (b.rank ?? 999))
    .slice(0, 40)

  const top10 = ranked.slice(0, 10)
  const usAmount = ranked[0]?.amountBillions ?? 968
  const restTop10 = top10.slice(1).reduce((s, c) => s + c.amountBillions, 0)

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Military Spending by Country' }]} />
        <ShareButtons title="Military Spending by Country — 2024 Global Rankings" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            Military Spending by Country
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            The world spent <strong className="text-[#991b1b]">$2.6 trillion</strong> on military in 2024.
            The United States alone accounts for <strong className="text-[#991b1b]">37%</strong> of the global total —
            more than the next 10 countries combined.
          </p>
        </header>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Global Total', value: '$2.6T' },
            { label: 'US Share', value: '37%' },
            { label: 'Countries Tracked', value: String(ranked.length) },
            { label: 'US vs Next 10', value: `$${usAmount.toFixed(0)}B vs $${restTop10.toFixed(0)}B` },
          ].map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Top 10 Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Top 10 Military Spenders
          </h2>
          <Top10Bar data={top10.map((c) => ({ name: c.name, amount: c.amountBillions }))} />
          <p className="text-sm text-stone-500 mt-3">
            Source: SIPRI Military Expenditure Database, 2024 figures. All amounts in current US dollars (billions).
          </p>
        </section>

        {/* US vs World */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The US Spends More Than the Next 10 Combined
          </h2>
          <p className="text-stone-700 mb-4">
            This is not a close competition. US military spending dwarfs every other nation on Earth.
            To put it in perspective:
          </p>
          <ul className="list-disc pl-6 text-stone-700 space-y-2 mb-4">
            <li>The US spends <strong>3x more</strong> than China</li>
            <li>The US spends <strong>6x more</strong> than Russia</li>
            <li>The US spends <strong>12x more</strong> than India</li>
            <li>The entire EU combined spends about <strong>$300 billion</strong> — less than a third of the US</li>
            <li>The US has <strong>750+ military bases</strong> in 80+ countries. No other nation comes close.</li>
          </ul>
        </section>

        {/* Global Trends */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Global Military Spending Trends (2000–2024)
          </h2>
          <p className="text-stone-700 mb-6">
            Global military spending has surged since 2000, driven by the War on Terror, Russia&apos;s invasion of Ukraine,
            and US-China competition. The world is now spending more on military than at any point since WWII (in real terms).
          </p>
          <GlobalTrends data={globalTrends} />
        </section>

        {/* NATO */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            NATO Spending: The 2% Target
          </h2>
          <p className="text-stone-700 mb-6">
            NATO members pledged to spend 2% of GDP on defense by 2024. The US far exceeds this target,
            while many European allies have historically fallen short. Russia&apos;s invasion of Ukraine has
            accelerated European defense spending.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Country</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Spending</th>
                  <th className="text-right py-2 font-semibold text-stone-800">% of GDP</th>
                  <th className="text-center py-2 font-semibold text-stone-800">Meets 2%?</th>
                </tr>
              </thead>
              <tbody>
                {natoSpending.map((n) => (
                  <tr key={n.country} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{n.country}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b]">${n.amount}B</td>
                    <td className="py-2 text-right font-mono text-stone-600">{n.gdpPct}%</td>
                    <td className="py-2 text-center">{n.gdpPct >= 2 ? '✅' : '❌'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Full Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Top 40 Countries — Full Rankings
          </h2>
          <p className="text-stone-700 mb-6">
            Click column headers to sort. All amounts in current US dollars (millions).
          </p>
          <SortableCountryTable
            data={ranked.map((c) => ({
              rank: c.rank ?? 0,
              name: c.name,
              slug: c.slug,
              amountBillions: c.amountBillions,
              pctWorld: c.pctWorld,
              trend10yr: c.trend10yr,
              usBases: c.usBases,
            }))}
          />
        </section>

        {/* FAQ with JSON-LD */}
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/us-military-budget', label: 'US Military Budget 2025 — Full Breakdown' },
              { href: '/us-military-spending', label: 'US Military Spending — Historical Analysis' },
              { href: '/global-spending', label: 'Global Military Spending Dashboard' },
              { href: '/countries', label: 'Country Profiles' },
              { href: '/analysis/cost-of-empire', label: 'The Cost of Empire' },
              { href: '/us-military-bases-around-the-world', label: 'US Military Bases Around the World' },
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
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>Stockholm International Peace Research Institute (SIPRI) Military Expenditure Database</li>
            <li>NATO — Defence Expenditure of NATO Countries (2014-2024)</li>
            <li>International Institute for Strategic Studies (IISS) — The Military Balance 2024</li>
            <li>World Bank — Military expenditure (% of GDP)</li>
          </ul>
        </section>

        <BackToTop />
      </div>
    </main>
  )
}
