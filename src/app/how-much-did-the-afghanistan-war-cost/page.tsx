import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import RelatedArticles from '@/components/RelatedArticles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Did the Afghanistan War Cost? $2.3 Trillion Over 20 Years | WarCosts',
  description: 'The Afghanistan War cost $2.3 trillion from 2001-2021, making it America\'s longest war. Complete breakdown of costs, casualties, and outcomes from Operation Enduring Freedom.',
  keywords: ['Afghanistan War cost', 'cost of Afghanistan War', 'Operation Enduring Freedom cost', 'Afghanistan War spending', 'how much did Afghanistan War cost'],
  openGraph: {
    title: 'How Much Did the Afghanistan War Cost? $2.3 Trillion Over 20 Years',
    description: 'The Afghanistan War cost $2.3 trillion from 2001-2021, making it America\'s longest war.',
    url: 'https://warcosts.org/how-much-did-the-afghanistan-war-cost',
    type: 'article',
  },
}

/* ── Data ─────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'How much did the Afghanistan War cost in total?',
    a: 'The Afghanistan War cost approximately $2.3 trillion over 20 years (2001-2021). This includes direct military operations, reconstruction aid, veteran medical care, and interest on borrowed money used to finance the war.',
  },
  {
    q: 'How much did the US spend per day in Afghanistan?',
    a: 'Over the 20-year conflict, the Afghanistan War cost approximately $315 million per day. At its peak during the Obama surge (2009-2011), daily spending reached over $500 million including all related costs.',
  },
  {
    q: 'What did the US spend money on in Afghanistan?',
    a: 'Major expenditures included military operations (60%), reconstruction and aid programs ($145 billion), training Afghan security forces ($83 billion), and counter-narcotics efforts ($9 billion). Private contractors received over $500 billion.',
  },
  {
    q: 'How does Afghanistan compare to other US wars?',
    a: 'Afghanistan was America\'s longest war at 20 years, costing $2.3 trillion. By comparison, Iraq cost $2.4 trillion over 8 years, and Vietnam cost $823 billion (inflation-adjusted) over 11 years.',
  },
  {
    q: 'What happened to the money spent in Afghanistan?',
    a: 'Much of the reconstruction spending was wasted or stolen. The Special Inspector General for Afghanistan Reconstruction (SIGAR) documented billions in fraud, unused facilities, and failed programs. The Taliban regained control in 2021.',
  },
  {
    q: 'How many Americans served in Afghanistan?',
    a: 'Approximately 800,000 US service members deployed to Afghanistan over 20 years. 2,461 were killed and 20,744 wounded. An estimated 30,177 veterans have died by suicide since returning home.',
  },
]

const costBreakdown = [
  { category: 'Military Operations', amount: 933, percentage: 41, description: 'Combat operations, bases, equipment, transportation' },
  { category: 'Personnel Costs', amount: 456, percentage: 20, description: 'Military pay, benefits, combat bonuses, family support' },
  { category: 'Private Contractors', amount: 412, percentage: 18, description: 'Security, logistics, construction, support services' },
  { category: 'Reconstruction Aid', amount: 145, percentage: 6, description: 'Infrastructure, governance, economic development programs' },
  { category: 'Afghan Security Forces', amount: 83, percentage: 4, description: 'Training, equipping, and supporting Afghan military and police' },
  { category: 'Intelligence & Special Ops', amount: 89, percentage: 4, description: 'CIA operations, special forces, drone programs' },
  { category: 'Veteran Care (Future)', amount: 296, percentage: 13, description: 'Lifetime medical care and disability payments for veterans' },
]

const majorMilestones = [
  { year: 2001, event: 'Operation Enduring Freedom begins', spending: 15, troops: 10000 },
  { year: 2003, event: 'Iraq War starts, Afghanistan attention shifts', spending: 35, troops: 13000 },
  { year: 2007, event: 'Taliban resurgence grows', spending: 67, troops: 25000 },
  { year: 2009, event: 'Obama surge begins', spending: 104, troops: 100000 },
  { year: 2011, event: 'Bin Laden killed, surge peaks', spending: 118, troops: 100000 },
  { year: 2014, event: 'Combat mission formally ends', spending: 89, troops: 38000 },
  { year: 2017, event: 'Trump increases troops again', spending: 45, troops: 14000 },
  { year: 2020, event: 'Taliban peace deal signed', spending: 42, troops: 8600 },
  { year: 2021, event: 'Chaotic withdrawal, Taliban victory', spending: 13, troops: 0 },
]

const relatedArticles = [
  { slug: 'graveyard-of-empires', title: 'Afghanistan: Graveyard of Empires', desc: 'Why superpowers always fail in Afghanistan' },
  { slug: 'war-profiteering', title: 'War Profiteering in Afghanistan', desc: 'How contractors got rich off America\'s longest war' },
  { slug: 'cost-of-empire', title: 'The Cost of American Empire', desc: 'How global interventions drain the homeland' },
  { slug: 'blowback-911', title: 'How US Foreign Policy Created 9/11', desc: 'The roots of the War on Terror' },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function AfghanistanWarCostPage() {
  const conflicts = loadData('conflicts.json') as Array<{
    id: string
    name: string
    costInflationAdjusted: number
    usCasualties: { deaths: number; wounded: number }
    startYear: number
    endYear: number
    troopsDeployed: number
  }>

  const afghanWar = conflicts.find(c => c.id === 'afghanistan')
  const stats = loadData('stats.json') as {
    warOnTerrorCost: number
    warOnTerrorDeaths: number
    veteranSuicidePerDay: number
    [key: string]: any
  }

  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Afghanistan War Cost' }]} />
        <ShareButtons title="How Much Did the Afghanistan War Cost? $2.3 Trillion Over 20 Years" />

        {/* Hero Answer - Featured Snippet Target */}
        <header className="mb-12 bg-[#1a202c] rounded-lg p-8 border border-[#2d3748]">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Did the Afghanistan War Cost?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$2.3 Trillion</div>
            <div className="text-lg opacity-90">Total cost (2001-2021)</div>
          </div>
          <div className="bg-[#991b1b] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">20 Years</div>
            <div className="text-lg opacity-90">America's longest war</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The Afghanistan War (2001-2021) cost <strong className="text-[#dc2626]">$2.3 trillion over 20 years</strong>, 
            making it America's longest and one of its most expensive conflicts. Despite the massive investment, 
            the <strong className="text-[#dc2626]">Taliban regained control</strong> within months of US withdrawal, 
            raising questions about what the money accomplished.
          </p>
        </header>

        {/* Key Facts */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Key Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">$315M</div>
              <div className="text-white text-lg mb-1">Average daily cost</div>
              <div className="text-gray-400 text-sm">Over 20-year conflict period</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">$7,300</div>
              <div className="text-white text-lg mb-1">Cost per US citizen</div>
              <div className="text-gray-400 text-sm">Based on 2021 population</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">800K</div>
              <div className="text-white text-lg mb-1">US troops deployed</div>
              <div className="text-gray-400 text-sm">Total over 20 years</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">2,461</div>
              <div className="text-white text-lg mb-1">US military deaths</div>
              <div className="text-gray-400 text-sm">Plus 20,744 wounded</div>
            </div>
          </div>
        </section>

        {/* The Surge and Peak Spending */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Obama Surge (2009-2011)</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              President Obama tripled troop levels to 100,000 in an attempt to defeat the Taliban and stabilize Afghanistan. 
              This surge period represented the most expensive years of the conflict.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#2d3748] rounded-lg p-4">
                <div className="text-[#dc2626] font-bold text-2xl mb-2">$104B</div>
                <div className="text-white">Annual spending in 2009</div>
                <div className="text-gray-400 text-sm">Peak year cost</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-4">
                <div className="text-[#dc2626] font-bold text-2xl mb-2">100,000</div>
                <div className="text-white">Peak troop level</div>
                <div className="text-gray-400 text-sm">Up from 34,000 in 2008</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-4">
                <div className="text-[#dc2626] font-bold text-2xl mb-2">$285M</div>
                <div className="text-white">Daily surge cost</div>
                <div className="text-gray-400 text-sm">Including all operations</div>
              </div>
            </div>
            <p className="text-gray-300 mt-6">
              Despite the massive investment, the surge failed to achieve lasting victory. The Taliban simply 
              waited out the American presence, resuming their offensive once troops began withdrawing.
            </p>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Where the Money Went</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The $2.3 trillion was distributed across military operations, reconstruction programs, and long-term 
              veteran care. Private contractors received unprecedented payments for logistical support.
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

        {/* Timeline of Major Events and Costs */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Timeline: 20 Years of War</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="space-y-6">
              {majorMilestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center gap-4 border-b border-[#2d3748] pb-4 last:border-b-0">
                  <div className="md:w-20 flex-shrink-0">
                    <div className="text-[#dc2626] font-bold text-xl">{milestone.year}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold mb-1">{milestone.event}</div>
                    <div className="text-gray-400 text-sm">
                      Annual spending: ${milestone.spending}B | Troops: {milestone.troops.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Reconstruction Failure */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The $145 Billion Reconstruction Failure</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The US spent $145 billion on Afghan reconstruction — more than the entire Marshall Plan that 
              rebuilt Europe after WWII. Yet Afghanistan remained one of the world's poorest countries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Major Projects</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• $7.8B for counter-narcotics (opium production increased)</li>
                  <li>• $4.9B for governance programs (government collapsed)</li>
                  <li>• $3.9B for economic development (economy shrank)</li>
                  <li>• $2.4B for infrastructure (much abandoned or destroyed)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">What Went Wrong</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Corruption diverted billions to warlords</li>
                  <li>• Projects built without Afghan input or needs</li>
                  <li>• Lack of security made maintenance impossible</li>
                  <li>• Cultural misunderstanding led to failed programs</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Inspector General Finding:</strong> "The extraordinary 
                amount of money that flowed from USAID to implementers and subcontractors created an 
                environment ripe for fraud."
              </p>
            </div>
          </div>
        </section>

        {/* Human Cost */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Human Cost</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#2d3748] rounded-lg p-4 text-center">
                <div className="text-[#dc2626] font-bold text-3xl mb-2">2,461</div>
                <div className="text-white">US Military Deaths</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-4 text-center">
                <div className="text-[#dc2626] font-bold text-3xl mb-2">170,000+</div>
                <div className="text-white">Afghan Civilian Deaths</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-4 text-center">
                <div className="text-[#dc2626] font-bold text-3xl mb-2">30,177</div>
                <div className="text-white">Veteran Suicides</div>
              </div>
            </div>
            <div className="bg-[#2d3748] rounded-lg p-4">
              <p className="text-gray-300">
                <strong className="text-[#dc2626]">Veterans Crisis:</strong> An estimated 30,177 post-9/11 veterans 
                have died by suicide — more than 10 times the number killed in combat. The VA projects spending 
                $296 billion on Afghanistan veteran medical care over their lifetimes.
              </p>
            </div>
          </div>
        </section>

        {/* What Could Have Been Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">What $2.3 Trillion Could Have Built in America</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Infrastructure</div>
                  <div className="text-white">Complete US broadband network for rural areas</div>
                </div>
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Education</div>
                  <div className="text-white">Free community college for 20 years</div>
                </div>
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Healthcare</div>
                  <div className="text-white">Build 2,300 hospitals nationwide</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Climate</div>
                  <div className="text-white">460 gigawatts of renewable energy</div>
                </div>
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Housing</div>
                  <div className="text-white">11.5 million affordable homes</div>
                </div>
                <div className="bg-[#2d3748] rounded p-4">
                  <div className="text-[#dc2626] font-bold mb-1">Research</div>
                  <div className="text-white">Fully fund cancer research for 100+ years</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Was Accomplished? */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">What Was Accomplished for $2.3 Trillion?</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 text-green-400">Achievements</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Disrupted Al-Qaeda operations (initially)</li>
                  <li>• Removed Taliban from power (temporarily)</li>
                  <li>• Increased girls' school enrollment</li>
                  <li>• Improved some healthcare access</li>
                  <li>• Killed Osama bin Laden (in Pakistan)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 text-[#dc2626]">Ultimate Outcomes</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Taliban regained full control in 2021</li>
                  <li>• Women banned from school/work again</li>
                  <li>• Afghan government completely collapsed</li>
                  <li>• Al-Qaeda may be rebuilding presence</li>
                  <li>• Chaotic withdrawal damaged US credibility</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 italic">
                "After 20 years and $2.3 trillion, the Taliban achieved in three months what they could not 
                accomplish in two decades of fighting." — Military analyst assessment, August 2021
              </p>
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
              { href: '/conflicts/afghanistan', label: 'Afghanistan War: Complete Analysis' },
              { href: '/how-much-did-the-iraq-war-cost', label: 'Iraq War Cost' },
              { href: '/cost-of-war-on-terror', label: 'War on Terror Total Cost' },
              { href: '/how-many-veterans-are-there', label: 'US Veterans Statistics' },
              { href: '/us-drone-strikes', label: 'US Drone Strike Database' },
              { href: '/pentagon-budget-breakdown', label: 'Pentagon Budget Breakdown' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[#1a202c] hover:bg-[#2d3748] rounded-lg p-4 border border-[#2d3748] hover:border-[#dc2626] text-gray-300 hover:text-red-700 transition-colors"
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
              <li>• Brown University Costs of War Project</li>
              <li>• Special Inspector General for Afghanistan Reconstruction (SIGAR)</li>
              <li>• Congressional Budget Office - Afghanistan War Cost Estimates</li>
              <li>• Department of Defense Financial Management Reports</li>
              <li>• Veterans Administration Budget Justifications</li>
              <li>• Watson Institute for International Affairs - Cost of War Database</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}