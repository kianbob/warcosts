import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Military Budget 2026: $895 Billion — Full Breakdown | WarCosts',
  description: 'The 2026 US military budget is $895 billion — the largest in history. Breakdown by category, comparison to past years, and what it means for taxpayers.',
  keywords: ['US military budget 2026', '2026 defense budget', 'military spending 2026', 'Pentagon budget 2026', 'defense spending 2026'],
  openGraph: {
    title: 'US Military Budget 2026: $895 Billion — Full Breakdown',
    description: 'The 2026 US military budget is $895 billion — the largest in history.',
    url: 'https://www.warcosts.org/us-military-budget-2026',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much is the US military budget for 2026?', a: 'The US military budget for fiscal year 2026 is approximately $895 billion for the Department of Defense alone. Including other defense-related spending (DOE nuclear weapons, VA, Homeland Security), total national security spending exceeds $1.1 trillion.' },
  { q: 'How much does the US spend on military per day in 2026?', a: 'At $895 billion per year, the US spends approximately $2.45 billion per day on the Pentagon budget alone. Including all national security spending, the daily figure exceeds $3 billion.' },
  { q: 'How does the 2026 budget compare to other countries?', a: 'The US military budget is larger than the next 10 countries combined. China spends an estimated $296 billion, Russia approximately $109 billion, and the entire EU combined about $310 billion.' },
  { q: 'What is the biggest item in the 2026 military budget?', a: 'Personnel costs (military pay, benefits, healthcare) are the largest single category at roughly $180 billion. Operations & maintenance is the largest overall account at approximately $310 billion.' },
  { q: 'How much does the average American pay for the military?', a: 'Based on the $895 billion DoD budget and approximately 131 million taxpaying households, the average American household pays roughly $6,830 per year for the military — about $570 per month.' },
]

const budgetBreakdown = [
  { category: 'Operations & Maintenance', amount: 310, percentage: 35, description: 'Day-to-day military operations, training, readiness' },
  { category: 'Military Personnel', amount: 180, percentage: 20, description: 'Pay, benefits, healthcare for 1.3M active duty' },
  { category: 'Procurement', amount: 175, percentage: 20, description: 'Weapons, vehicles, ships, aircraft purchases' },
  { category: 'Research & Development', amount: 145, percentage: 16, description: 'New weapons, AI, hypersonics, space systems' },
  { category: 'Military Construction', amount: 35, percentage: 4, description: 'Base construction, family housing' },
  { category: 'Other & Classified', amount: 50, percentage: 5, description: 'Revolving funds, classified programs' },
]

const historicalBudgets = [
  { year: 2016, amount: 585, event: 'Obama final year' },
  { year: 2017, amount: 606, event: 'Trump Year 1' },
  { year: 2018, amount: 649, event: 'Budget caps lifted' },
  { year: 2019, amount: 686, event: 'Continued buildup' },
  { year: 2020, amount: 714, event: 'COVID year' },
  { year: 2021, amount: 704, event: 'Biden Year 1' },
  { year: 2022, amount: 743, event: 'Ukraine war begins' },
  { year: 2023, amount: 797, event: 'Inflation + Ukraine aid' },
  { year: 2024, amount: 842, event: 'NDAA passed' },
  { year: 2025, amount: 868, event: 'Iran tensions escalate' },
  { year: 2026, amount: 895, event: 'Iran operations + Pacific buildup' },
]

export default function MilitaryBudget2026Page() {
  const maxBudget = Math.max(...historicalBudgets.map(b => b.amount))

  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: '2026 Military Budget' }]} />
        <ShareButtons title="US Military Budget 2026: $895 Billion" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            US Military Budget 2026
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$895 Billion</div>
            <div className="text-lg opacity-90">Department of Defense — FY2026</div>
          </div>
          <div className="bg-stone-700 text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$1.1+ Trillion</div>
            <div className="text-lg opacity-90">Total national security spending (incl. DOE, VA, DHS)</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The United States will spend <strong className="text-[#dc2626]">$895 billion</strong> on the Pentagon in 
            fiscal year 2026 — the <strong className="text-[#dc2626]">largest military budget in history</strong>, 
            both in nominal and inflation-adjusted terms. That&apos;s <strong className="text-[#dc2626]">$2.45 billion per day</strong>, 
            or roughly $6,830 per taxpaying household. The increase is driven by Iran operations, 
            Pacific deterrence against China, and continued modernization of the nuclear arsenal.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">At a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { value: '$2.45B', label: 'Per day', detail: 'More than most countries\' annual budgets' },
              { value: '$6,830', label: 'Per household/year', detail: 'Based on 131M taxpaying households' },
              { value: '3.3%', label: 'Share of GDP', detail: 'Up from 3.1% in 2024' },
              { value: '#1', label: 'In the world', detail: 'More than next 10 countries combined' },
            ].map((stat, i) => (
              <div key={i} className="bg-stone-800 rounded-lg p-6 border border-stone-700">
                <div className="text-2xl font-bold text-[#dc2626] mb-2">{stat.value}</div>
                <div className="text-white text-lg mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Budget Breakdown</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="space-y-4">
              {budgetBreakdown.map((item, i) => (
                <div key={i} className="border-b border-stone-700 pb-4 last:border-b-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{item.category}</span>
                    <span className="text-[#dc2626] font-bold">${item.amount}B</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-stone-700 rounded-full h-2 flex-1 mr-4">
                      <div className="bg-[#dc2626] h-2 rounded-full" style={{ width: `${item.percentage * 2.5}%` }} />
                    </div>
                    <span className="text-gray-400 text-sm">{item.percentage}%</span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">10-Year Trend</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-6">
              The military budget has grown <strong className="text-white">53% since 2016</strong>, from $585 billion to $895 billion.
              Both parties have consistently voted for increases — the military-industrial complex is truly bipartisan.
            </p>
            <div className="space-y-3">
              {historicalBudgets.map((b, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className={`font-semibold ${b.year === 2026 ? 'text-[#dc2626]' : 'text-white'}`}>{b.year}</span>
                    <span className={`font-mono font-bold ${b.year === 2026 ? 'text-[#dc2626]' : 'text-gray-300'}`}>${b.amount}B</span>
                  </div>
                  <div className="bg-stone-700 rounded-full h-2 mb-1">
                    <div className={`h-2 rounded-full ${b.year === 2026 ? 'bg-[#dc2626]' : 'bg-stone-500'}`} style={{ width: `${(b.amount / maxBudget) * 100}%` }} />
                  </div>
                  <p className="text-gray-500 text-xs">{b.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">What&apos;s Driving the 2026 Increase</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#dc2626] mb-3">Iran Operations</h3>
                <p className="text-gray-300">The <Link href="/iran-war-2026" className="text-[#dc2626] hover:underline">2026 Iran conflict</Link> is adding billions in operational costs — naval deployments, air strikes, Strait of Hormuz protection, and regional force posture.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#dc2626] mb-3">Pacific Deterrence</h3>
                <p className="text-gray-300">The Pacific Deterrence Initiative is receiving $14.7 billion to counter China, including new bases in Guam, the Philippines, and Japan.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#dc2626] mb-3">Nuclear Modernization</h3>
                <p className="text-gray-300">The nuclear triad modernization — new ICBMs (Sentinel), Columbia-class subs, B-21 bombers — costs <Link href="/how-much-does-the-us-spend-on-nuclear-weapons" className="text-[#dc2626] hover:underline">$60+ billion annually</Link>.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#dc2626] mb-3">Personnel Costs</h3>
                <p className="text-gray-300">A 4.5% military pay raise plus recruitment bonuses and expanded benefits to address the ongoing recruiting crisis.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Real Number Is Higher</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The $895 billion figure is just the Department of Defense. True national security spending includes:
            </p>
            <div className="space-y-3">
              {[
                { label: 'Department of Defense', amount: 895 },
                { label: 'DOE Nuclear Weapons (NNSA)', amount: 33 },
                { label: 'Veterans Affairs', amount: 135 },
                { label: 'Homeland Security', amount: 62 },
                { label: 'Intelligence Community (est.)', amount: 75 },
                { label: 'State Dept. military aid', amount: 18 },
                { label: 'Interest on war debt', amount: 50 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between border-b border-stone-700 pb-2 last:border-b-0">
                  <span className="text-gray-300">{item.label}</span>
                  <span className="text-white font-mono">${item.amount}B</span>
                </div>
              ))}
              <div className="flex justify-between pt-2 border-t-2 border-[#dc2626]">
                <span className="text-white font-bold">Total National Security</span>
                <span className="text-[#dc2626] font-mono font-bold">~$1,268B</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-stone-800 rounded-lg p-6 border border-stone-700">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <FaqJsonLd faqs={faqs} />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: '/pentagon-budget-breakdown', label: 'Pentagon Budget Breakdown' },
              { href: '/compare/us-vs-china-military-spending', label: 'US vs China Military Spending' },
              { href: '/how-much-does-the-us-spend-on-nuclear-weapons', label: 'US Nuclear Weapons Spending' },
              { href: '/how-many-wars-is-the-us-in-right-now', label: 'Active US Wars & Deployments' },
              { href: '/cost-of-war-by-president', label: 'Cost of War by President' },
              { href: '/compare/us-vs-russia-military', label: 'US vs Russia Military' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-stone-800 hover:bg-stone-700 rounded-lg p-4 border border-stone-700 hover:border-[#dc2626] text-gray-300 hover:text-red-500 transition-colors">
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Sources</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <ul className="text-gray-300 space-y-2">
              <li>• Department of Defense — FY2026 Budget Request</li>
              <li>• Congressional Budget Office — National Defense Budget Estimates</li>
              <li>• Office of Management and Budget — Historical Tables</li>
              <li>• SIPRI Military Expenditure Database</li>
              <li>• Project on Government Oversight (POGO)</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'US Military Budget 2026: $895 Billion',
              description: 'The 2026 US military budget is $895 billion — the largest in history.',
              url: 'https://www.warcosts.org/us-military-budget-2026',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
