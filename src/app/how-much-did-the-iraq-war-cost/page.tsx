import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import RelatedArticles from '@/components/RelatedArticles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Did the Iraq War Cost? $2.4 Trillion Direct, $3+ Trillion Total | WarCosts',
  description: 'The Iraq War cost $2.4 trillion in direct spending, with total costs exceeding $3 trillion when including interest and veteran care. Complete breakdown of costs from 2003-2011.',
  keywords: ['Iraq War cost', 'cost of Iraq War', 'Iraq War spending', 'Iraq War total cost', 'how much did Iraq War cost', 'Operation Iraqi Freedom cost'],
  openGraph: {
    title: 'How Much Did the Iraq War Cost? $2.4 Trillion Direct, $3+ Trillion Total',
    description: 'The Iraq War cost $2.4 trillion in direct spending, with total costs exceeding $3 trillion when including interest and veteran care.',
    url: 'https://warcosts.org/how-much-did-the-iraq-war-cost',
    type: 'article',
  },
}

/* ── Data ─────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'How much did the Iraq War cost in total?',
    a: 'The Iraq War cost approximately $2.4 trillion in direct spending from 2003-2011. When including interest on war borrowing and future veteran care costs, the total exceeds $3 trillion according to Harvard\'s Linda Bilmes and Columbia\'s Joseph Stiglitz.',
  },
  {
    q: 'How much did the US spend per day on the Iraq War?',
    a: 'At its peak in 2008, the Iraq War cost approximately $300 million per day. Over the entire conflict (2003-2011), daily spending averaged about $720 million when combining direct military operations with reconstruction and support costs.',
  },
  {
    q: 'What was the most expensive part of the Iraq War?',
    a: 'Military operations and personnel costs were the largest expense, accounting for roughly 65% of total spending. Reconstruction efforts cost $60+ billion, while private contractors received over $138 billion in Iraq-related contracts.',
  },
  {
    q: 'How does Iraq War cost compare to other conflicts?',
    a: 'The Iraq War was the second most expensive conflict in US history after World War II. It cost more than the entire Vietnam War ($120 billion in period dollars, $823 billion inflation-adjusted) and the Revolutionary War through WWI combined.',
  },
  {
    q: 'Who paid for the Iraq War?',
    a: 'The Iraq War was financed entirely through borrowing, making it the first major US war not paid for through tax increases. China held approximately $1.4 trillion in US debt during the peak war years, effectively helping finance the conflict.',
  },
  {
    q: 'What could $2.4 trillion have bought instead?',
    a: 'The Iraq War\'s cost could have funded: Universal pre-K for every American child for 80+ years, rebuilt US infrastructure twice over, provided full college tuition for 60 million students, or doubled NIH medical research funding for 120 years.',
  },
]

const costBreakdown = [
  { category: 'Military Operations', amount: 815, percentage: 34, description: 'Combat operations, equipment, fuel' },
  { category: 'Personnel & Benefits', amount: 735, percentage: 31, description: 'Soldier pay, combat bonuses, family benefits' },
  { category: 'Private Contractors', amount: 382, percentage: 16, description: 'Security, logistics, reconstruction contractors' },
  { category: 'Equipment & Vehicles', amount: 240, percentage: 10, description: 'Humvees, armor, weapons, replacement gear' },
  { category: 'Reconstruction Aid', amount: 138, percentage: 6, description: 'Infrastructure, governance, economic development' },
  { category: 'Intelligence & Special Ops', amount: 90, percentage: 3, description: 'CIA operations, special forces, classified programs' },
]

const relatedArticles = [
  { slug: 'cost-of-empire', title: 'The True Cost of American Empire', desc: 'How military spending props up global dominance at home expense' },
  { slug: 'war-profiteering', title: 'War Profiteering in Iraq and Afghanistan', desc: 'How defense contractors got rich off endless war' },
  { slug: 'opportunity-cost', title: 'The Opportunity Cost of War', desc: 'What America could have built with $8 trillion in war spending' },
  { slug: 'blowback-theory', title: 'Blowback Theory Explained', desc: 'How American interventions create future enemies' },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function IraqWarCostPage() {
  const conflicts = loadData('conflicts.json') as Array<{
    id: string
    name: string
    costInflationAdjusted: number
    usCasualties: { deaths: number; wounded: number }
    startYear: number
    endYear: number
    troopsDeployed: number
  }>

  const iraqWar = conflicts.find(c => c.id === 'iraq-war')
  const yearlySpending = loadData('yearly-spending.json') as Array<{
    year: number
    amountBillions: number
    war?: string
  }>

  const iraqYears = yearlySpending.filter(y => y.year >= 2003 && y.year <= 2011 && y.war?.includes('Terror'))

  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Iraq War Cost' }]} />
        <ShareButtons title="How Much Did the Iraq War Cost? $2.4 Trillion Direct, $3+ Trillion Total" />

        {/* Hero Answer - Featured Snippet Target */}
        <header className="mb-12 bg-[#1a202c] rounded-lg p-8 border border-[#2d3748]">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Did the Iraq War Cost?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$2.4 Trillion</div>
            <div className="text-lg opacity-90">Direct spending (2003-2011)</div>
          </div>
          <div className="bg-[#991b1b] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$3+ Trillion</div>
            <div className="text-lg opacity-90">Total cost including interest &amp; veteran care</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The Iraq War (2003-2011) cost <strong className="text-[#dc2626]">$2.4 trillion in direct spending</strong>, 
            making it the second most expensive conflict in US history after WWII. When including interest on war borrowing 
            and long-term veteran healthcare, economists estimate the <strong className="text-[#dc2626]">total cost exceeds $3 trillion</strong>.
          </p>
        </header>

        {/* Key Facts */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Key Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">$720M</div>
              <div className="text-white text-lg mb-1">Average daily cost</div>
              <div className="text-gray-400 text-sm">Over 8-year conflict period</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">$4,800</div>
              <div className="text-white text-lg mb-1">Cost per US citizen</div>
              <div className="text-gray-400 text-sm">Based on 2011 population</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">100%</div>
              <div className="text-white text-lg mb-1">Financed by debt</div>
              <div className="text-gray-400 text-sm">No tax increases to pay for war</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">2nd</div>
              <div className="text-white text-lg mb-1">Most expensive US war</div>
              <div className="text-gray-400 text-sm">After World War II</div>
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Where the Money Went</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The $2.4 trillion was spent across six main categories. Military operations and personnel costs 
              dominated spending, while private contractors received unprecedented payments.
            </p>
            <div className="space-y-4">
              {costBreakdown.map((item, index) => (
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

        {/* Yearly Spending */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Spending by Year</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              Iraq War spending peaked in 2008 during the "Surge" strategy. Costs remained high even as combat 
              operations wound down due to ongoing security and reconstruction needs.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Year</th>
                    <th className="text-right py-3 text-white">Total Defense</th>
                    <th className="text-right py-3 text-white">Est. Iraq Share</th>
                    <th className="text-left py-3 text-white">Events</th>
                  </tr>
                </thead>
                <tbody>
                  {iraqYears.map((year) => {
                    const iraqShare = year.year >= 2003 && year.year <= 2007 ? 0.4 : 
                                    year.year >= 2008 && year.year <= 2010 ? 0.3 : 0.2
                    const events = year.year === 2003 ? 'Invasion begins' :
                                 year.year === 2004 ? 'Abu Ghraib scandal' :
                                 year.year === 2005 ? 'Iraqi elections' :
                                 year.year === 2006 ? 'Sectarian violence peaks' :
                                 year.year === 2007 ? 'Surge begins' :
                                 year.year === 2008 ? 'Surge peak' :
                                 year.year === 2009 ? 'Drawdown begins' :
                                 year.year === 2010 ? 'Combat operations end' :
                                 year.year === 2011 ? 'Final withdrawal' : ''
                    
                    return (
                      <tr key={year.year} className="border-b border-[#2d3748]">
                        <td className="py-2 text-gray-300">{year.year}</td>
                        <td className="py-2 text-right font-mono text-white">${year.amountBillions}B</td>
                        <td className="py-2 text-right font-mono text-[#dc2626]">~${Math.round(year.amountBillions * iraqShare)}B</td>
                        <td className="py-2 text-gray-400 text-sm">{events}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Hidden Costs */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Hidden Costs</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The $2.4 trillion figure only captures direct appropriations. The true cost is much higher when 
              accounting for long-term consequences and opportunity costs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Interest on War Borrowing</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• $600+ billion in interest payments already made</li>
                  <li>• $400+ billion more expected by 2050</li>
                  <li>• Average interest rate of 3-4% on war debt</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Veteran Healthcare</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• $500+ billion in future VA disability payments</li>
                  <li>• $200+ billion for PTSD and TBI treatment</li>
                  <li>• 32,000+ Iraq veterans have died since returning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunity Cost */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">What $2.4 Trillion Could Have Built</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Education</div>
                  <div className="text-white">Free college for 60 million students</div>
                </div>
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Infrastructure</div>
                  <div className="text-white">Rebuild entire US road system twice</div>
                </div>
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Healthcare</div>
                  <div className="text-white">Universal healthcare for 10+ years</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Clean Energy</div>
                  <div className="text-white">480 gigawatts of solar power</div>
                </div>
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Research</div>
                  <div className="text-white">Double NIH budget for 120 years</div>
                </div>
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Housing</div>
                  <div className="text-white">12 million affordable homes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison with Other Wars */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Cost Comparison</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Conflict</th>
                    <th className="text-right py-3 text-white">Cost (2024 $)</th>
                    <th className="text-right py-3 text-white">Duration</th>
                    <th className="text-right py-3 text-white">Daily Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2d3748]">
                    <td className="py-3 text-white font-semibold">World War II</td>
                    <td className="py-3 text-right font-mono text-white">$4.1T</td>
                    <td className="py-3 text-right text-gray-300">4 years</td>
                    <td className="py-3 text-right font-mono text-gray-300">$2.8B</td>
                  </tr>
                  <tr className="border-b border-[#2d3748] bg-[#2d3748]">
                    <td className="py-3 text-[#dc2626] font-bold">Iraq War</td>
                    <td className="py-3 text-right font-mono text-[#dc2626]">$2.4T</td>
                    <td className="py-3 text-right text-[#dc2626]">8 years</td>
                    <td className="py-3 text-right font-mono text-[#dc2626]">$720M</td>
                  </tr>
                  <tr className="border-b border-[#2d3748]">
                    <td className="py-3 text-white">Afghanistan War</td>
                    <td className="py-3 text-right font-mono text-white">$2.3T</td>
                    <td className="py-3 text-right text-gray-300">20 years</td>
                    <td className="py-3 text-right font-mono text-gray-300">$315M</td>
                  </tr>
                  <tr className="border-b border-[#2d3748]">
                    <td className="py-3 text-white">Vietnam War</td>
                    <td className="py-3 text-right font-mono text-white">$823B</td>
                    <td className="py-3 text-right text-gray-300">11 years</td>
                    <td className="py-3 text-right font-mono text-gray-300">$205M</td>
                  </tr>
                  <tr className="border-b border-[#2d3748]">
                    <td className="py-3 text-white">Korean War</td>
                    <td className="py-3 text-right font-mono text-white">$341B</td>
                    <td className="py-3 text-right text-gray-300">3 years</td>
                    <td className="py-3 text-right font-mono text-gray-300">$311M</td>
                  </tr>
                </tbody>
              </table>
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
              { href: '/conflicts/iraq-war', label: 'Iraq War: Complete Analysis' },
              { href: '/how-much-did-the-afghanistan-war-cost', label: 'Afghanistan War Cost' },
              { href: '/cost-of-war-on-terror', label: 'War on Terror Total Cost' },
              { href: '/how-many-died-in-the-vietnam-war', label: 'Vietnam War Casualties' },
              { href: '/us-military-spending-vs-other-countries', label: 'US vs World Military Spending' },
              { href: '/pentagon-budget-breakdown', label: 'Pentagon Budget Breakdown' },
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
              <li>• Congressional Budget Office - "The Budget and Economic Outlook" (2012-2024)</li>
              <li>• Stiglitz & Bilmes - "The Three Trillion Dollar War" (2008)</li>
              <li>• Brown University Costs of War Project</li>
              <li>• Department of Defense Financial Management and Budget Reports</li>
              <li>• Special Inspector General for Iraq Reconstruction (SIGIR)</li>
              <li>• Veterans Administration Budget Justification Reports</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}