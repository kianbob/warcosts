import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import RelatedArticles from '@/components/RelatedArticles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does the US Spend on Military? $886 Billion in 2024 | WarCosts',
  description: 'The US spends $886 billion on military in 2024 — more than the next 10 countries combined. Complete breakdown of Pentagon budget, historical trends, and comparisons.',
  keywords: ['US military spending', 'Pentagon budget', 'defense spending', 'military budget 2024', 'how much does US spend on military', 'defense budget breakdown'],
  openGraph: {
    title: 'How Much Does the US Spend on Military? $886 Billion in 2024',
    description: 'The US spends $886 billion on military in 2024 — more than the next 10 countries combined.',
    url: 'https://warcosts.org/how-much-does-the-us-spend-on-military',
    type: 'article',
  },
}

/* ── Data ─────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'How much does the US spend on military per year?',
    a: 'The United States spends approximately $886 billion on military and defense in 2024. This includes the Pentagon base budget ($842B), overseas contingency operations, nuclear weapons maintenance, and military construction.',
  },
  {
    q: 'How much does the US spend per day on military?',
    a: 'The US spends approximately $2.4 billion per day on military and defense. This breaks down to about $100 million per hour, $1.7 million per minute, and $28,000 per second.',
  },
  {
    q: 'How does US military spending compare to other countries?',
    a: 'US military spending exceeds the next 10 countries combined. The US spends roughly 3x more than China ($318B), 6x more than Russia ($150B), and 12x more than India ($76B). Total global military spending is $2.6 trillion.',
  },
  {
    q: 'What percentage of the federal budget is military spending?',
    a: 'Military spending represents approximately 15% of total federal spending and 3.4% of GDP. However, if including veteran care, interest on war debt, and homeland security, defense-related spending approaches 25% of the federal budget.',
  },
  {
    q: 'Has US military spending increased or decreased?',
    a: 'US military spending has generally increased over decades. From $300B in 2000 to $886B in 2024. It spiked during the Iraq/Afghanistan wars, declined briefly 2011-2015, then rose again due to "great power competition" with China and Russia.',
  },
  {
    q: 'What does the US military budget pay for?',
    a: 'Major categories: Personnel costs (25%), operations & maintenance (30%), procurement of weapons (20%), research & development (15%), and military construction (10%). Private contractors receive over 50% of Pentagon spending.',
  },
]

const budgetBreakdown2024 = [
  { category: 'Operations & Maintenance', amount: 266, percentage: 30, description: 'Day-to-day operations, training, fuel, maintenance' },
  { category: 'Personnel', amount: 221, percentage: 25, description: 'Military pay, benefits, healthcare, housing' },
  { category: 'Procurement', amount: 177, percentage: 20, description: 'Weapons, vehicles, equipment purchases' },
  { category: 'Research & Development', amount: 133, percentage: 15, description: 'New weapons development, tech innovation' },
  { category: 'Military Construction', amount: 89, percentage: 10, description: 'Bases, facilities, infrastructure' },
]

const historicalSpending = [
  { decade: '1950s', avgSpending: 350, wars: 'Korean War, Cold War buildup', gdpPct: 9.5 },
  { decade: '1960s', avgSpending: 560, wars: 'Vietnam War peak', gdpPct: 8.2 },
  { decade: '1970s', avgSpending: 420, wars: 'Vietnam wind-down', gdpPct: 5.8 },
  { decade: '1980s', avgSpending: 650, wars: 'Reagan military buildup', gdpPct: 6.0 },
  { decade: '1990s', avgSpending: 380, wars: 'Peace dividend', gdpPct: 3.5 },
  { decade: '2000s', avgSpending: 620, wars: 'War on Terror', gdpPct: 4.0 },
  { decade: '2010s', avgSpending: 780, wars: 'Iraq/Afghan winds down', gdpPct: 3.5 },
  { decade: '2020s', avgSpending: 920, wars: 'Great power competition', gdpPct: 3.4 },
]

const relatedArticles = [
  { slug: 'pentagon-waste', title: 'Pentagon Waste: $60 Billion Annually', desc: 'How the military-industrial complex burns taxpayer money' },
  { slug: 'cost-of-empire', title: 'The Cost of American Empire', desc: 'How global military presence drains resources' },
  { slug: 'opportunity-cost-military', title: 'The Opportunity Cost of Military Spending', desc: 'What America could build instead' },
  { slug: 'revolving-door', title: 'The Military-Industrial Revolving Door', desc: 'How contractors influence Pentagon spending' },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function USMilitarySpendingPage() {
  const yearlySpending = loadData('yearly-spending.json') as Array<{
    year: number
    amountBillions: number
    gdpPct: number
    president: string
    war?: string
  }>

  const recent5Years = yearlySpending.slice(-5)
  const stats = loadData('stats.json') as {
    currentAnnualBudget: number
    pctGdp: number
    costPerSecond: number
    costPerMinute: number
    costPerHour: number
    costPerDay: number
    [key: string]: any
  }

  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'US Military Spending' }]} />
        <ShareButtons title="How Much Does the US Spend on Military? $886 Billion in 2024" />

        {/* Hero Answer - Featured Snippet Target */}
        <header className="mb-12 bg-[#1a202c] rounded-lg p-8 border border-[#2d3748]">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Does the US Spend on Military?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$886 Billion</div>
            <div className="text-lg opacity-90">Annual military spending (2024)</div>
          </div>
          <div className="bg-[#991b1b] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">3.4% of GDP</div>
            <div className="text-lg opacity-90">Share of national economy</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The United States spends <strong className="text-[#dc2626]">$886 billion annually on military and defense</strong> 
            — more than the next 10 countries combined. This represents <strong className="text-[#dc2626]">3.4% of GDP</strong> 
            and <strong className="text-[#dc2626]">$2.4 billion per day</strong>, making America by far the world's largest military spender.
          </p>
        </header>

        {/* Real-Time Cost Counter */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Military Spending Right Now</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-[#dc2626] font-bold text-2xl mb-1">$28,095</div>
                <div className="text-gray-300 text-sm">Per Second</div>
              </div>
              <div className="text-center">
                <div className="text-[#dc2626] font-bold text-2xl mb-1">$1.7M</div>
                <div className="text-gray-300 text-sm">Per Minute</div>
              </div>
              <div className="text-center">
                <div className="text-[#dc2626] font-bold text-2xl mb-1">$101M</div>
                <div className="text-gray-300 text-sm">Per Hour</div>
              </div>
              <div className="text-center">
                <div className="text-[#dc2626] font-bold text-2xl mb-1">$2.4B</div>
                <div className="text-gray-300 text-sm">Per Day</div>
              </div>
            </div>
            <p className="text-gray-400 text-center mt-4">
              This spending runs 24/7, including weekends and holidays
            </p>
          </div>
        </section>

        {/* Recent 5 Years */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Recent Military Spending (2020-2024)</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Year</th>
                    <th className="text-right py-3 text-white">Amount</th>
                    <th className="text-right py-3 text-white">% GDP</th>
                    <th className="text-left py-3 text-white">President</th>
                    <th className="text-left py-3 text-white">Major Events</th>
                  </tr>
                </thead>
                <tbody>
                  {recent5Years.map((year, index) => {
                    const events = year.year === 2020 ? 'COVID pandemic, China tensions' :
                                  year.year === 2021 ? 'Afghanistan withdrawal' :
                                  year.year === 2022 ? 'Ukraine war begins' :
                                  year.year === 2023 ? 'Ukraine aid continues' :
                                  year.year === 2024 ? 'Red Sea operations, China buildup' : ''
                    
                    return (
                      <tr key={year.year} className="border-b border-[#2d3748]">
                        <td className="py-3 text-white">{year.year}</td>
                        <td className="py-3 text-right font-mono text-[#dc2626]">${year.amountBillions}B</td>
                        <td className="py-3 text-right text-gray-300">{year.gdpPct}%</td>
                        <td className="py-3 text-gray-300">{year.president}</td>
                        <td className="py-3 text-gray-400 text-sm">{events}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Military spending has remained remarkably stable at ~3.4% of GDP despite major geopolitical changes
            </p>
          </div>
        </section>

        {/* Budget Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Where the $886 Billion Goes</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The Pentagon budget is divided into five major categories. Operations & maintenance consumes the largest share, 
              while personnel costs have grown significantly due to rising benefits and healthcare.
            </p>
            <div className="space-y-4">
              {budgetBreakdown2024.map((item, index) => (
                <div key={index} className="border-b border-[#2d3748] pb-4 last:border-b-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{item.category}</span>
                    <span className="text-[#dc2626] font-bold">${item.amount}B</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-[#2d3748] rounded-full h-2 flex-1 mr-4">
                      <div
                        className="bg-[#dc2626] h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-400 text-sm">{item.percentage}%</span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">US vs The World</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              US military spending dwarfs every other nation. This dominance has persisted for decades and shows no signs of decreasing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Top Military Spenders (2024)</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">🇺🇸 United States</span>
                    <span className="text-[#dc2626] font-mono">$886B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">🇨🇳 China</span>
                    <span className="text-gray-400 font-mono">$318B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">🇷🇺 Russia</span>
                    <span className="text-gray-400 font-mono">$150B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">🇮🇳 India</span>
                    <span className="text-gray-400 font-mono">$76B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">🇬🇧 United Kingdom</span>
                    <span className="text-gray-400 font-mono">$68B</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Key Comparisons</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• US spends <strong className="text-[#dc2626]">2.8x more</strong> than China</li>
                  <li>• US spends <strong className="text-[#dc2626]">5.9x more</strong> than Russia</li>
                  <li>• US spends <strong className="text-[#dc2626]">37%</strong> of global military total</li>
                  <li>• Next 10 countries combined: <strong className="text-[#dc2626]">$850B</strong></li>
                  <li>• NATO without US: <strong className="text-[#dc2626]">$380B</strong></li>
                </ul>
              </div>
            </div>
            <div className="bg-[#2d3748] rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Historical Context:</strong> The US has maintained military spending 
                dominance since WWII. Even during the "peace dividend" of the 1990s, US spending exceeded most 
                countries' entire government budgets.
              </p>
            </div>
          </div>
        </section>

        {/* Historical Trends */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Historical Spending by Decade</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              US military spending has fluctuated with wars and geopolitical tensions, but has generally trended upward 
              in absolute terms while remaining relatively stable as a percentage of GDP.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Decade</th>
                    <th className="text-right py-3 text-white">Avg Spending</th>
                    <th className="text-right py-3 text-white">% GDP</th>
                    <th className="text-left py-3 text-white">Context</th>
                  </tr>
                </thead>
                <tbody>
                  {historicalSpending.map((period) => (
                    <tr key={period.decade} className="border-b border-[#2d3748]">
                      <td className="py-3 text-white">{period.decade}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">${period.avgSpending}B</td>
                      <td className="py-3 text-right text-gray-300">{period.gdpPct}%</td>
                      <td className="py-3 text-gray-400 text-sm">{period.wars}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* The Hidden Costs */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Hidden Military Budget</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The $886 billion Pentagon budget doesn't tell the whole story. Many military-related expenses are 
              scattered across other agencies and departments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Pentagon Budget</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Base Defense Budget</span>
                    <span className="text-[#dc2626]">$842B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Overseas Operations</span>
                    <span className="text-[#dc2626]">$44B</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Additional Military Costs</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Nuclear Weapons (DOE)</span>
                    <span className="text-[#dc2626]">$51B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Veterans Care (VA)</span>
                    <span className="text-[#dc2626]">$325B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Homeland Security</span>
                    <span className="text-[#dc2626]">$88B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest on War Debt</span>
                    <span className="text-[#dc2626]">$85B</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-white text-lg font-semibold">True Military Spending Total</span>
                <span className="text-[#dc2626] text-xl font-bold">~$1.4 Trillion</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Including veterans, nuclear weapons, homeland security, and war debt interest
              </p>
            </div>
          </div>
        </section>

        {/* Opportunity Cost */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">What Else $886 Billion Could Buy</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              To put the scale of US military spending in perspective, here's what the annual $886 billion could purchase instead:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Education</div>
                  <div className="text-white">Free college tuition for 22 million students</div>
                </div>
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Healthcare</div>
                  <div className="text-white">Universal healthcare coverage for 44 million Americans</div>
                </div>
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Infrastructure</div>
                  <div className="text-white">Rebuild 22,000 miles of highways annually</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Climate</div>
                  <div className="text-white">177 gigawatts of solar power installation</div>
                </div>
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Housing</div>
                  <div className="text-white">4.4 million affordable homes</div>
                </div>
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Research</div>
                  <div className="text-white">20x the entire NIH budget for medical research</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
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
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: '/pentagon-budget-breakdown', label: 'Pentagon Budget Breakdown' },
              { href: '/us-military-spending-vs-other-countries', label: 'US vs World Military Spending' },
              { href: '/cost-of-f35', label: 'F-35 Fighter Jet Program Cost' },
              { href: '/how-many-us-military-bases-overseas', label: 'US Military Bases Worldwide' },
              { href: '/cost-of-nuclear-weapons', label: 'Nuclear Weapons Cost' },
              { href: '/military-spending-by-country', label: 'Global Military Spending Rankings' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[#1a202c] hover:bg-[#2d3748] rounded-lg p-4 border border-[#2d3748] hover:border-[#dc2626] text-gray-300 hover:text-white transition-colors"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        <RelatedArticles articles={relatedArticles} />

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Sources</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <ul className="text-gray-300 space-y-2">
              <li>• Department of Defense - Financial Management and Budget Reports</li>
              <li>• Congressional Budget Office - "The Budget and Economic Outlook"</li>
              <li>• Stockholm International Peace Research Institute (SIPRI)</li>
              <li>• Office of Management and Budget - Historical Tables</li>
              <li>• Government Accountability Office - Defense Budget Analysis</li>
              <li>• National Defense Authorization Acts (2020-2024)</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}