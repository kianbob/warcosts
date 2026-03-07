import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import RelatedArticles from '@/components/RelatedArticles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cost of War on Terror: $8+ Trillion Total (Brown University) | WarCosts',
  description: 'The War on Terror has cost $8+ trillion since 2001, according to Brown University\'s Costs of War Project. Complete breakdown of spending across all operations and countries.',
  keywords: ['cost of war on terror', 'war on terror spending', 'post-9/11 wars cost', 'Brown University costs of war', 'global war on terror cost'],
  openGraph: {
    title: 'Cost of War on Terror: $8+ Trillion Total (Brown University)',
    description: 'The War on Terror has cost $8+ trillion since 2001 across multiple countries and operations.',
    url: 'https://warcosts.org/cost-of-war-on-terror',
    type: 'article',
  },
}

/* ── Data ─────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'How much has the War on Terror cost in total?',
    a: 'The War on Terror has cost over $8 trillion since 2001, according to Brown University\'s Costs of War Project. This includes direct spending on military operations, homeland security, veteran care, and interest on borrowing used to finance the wars.',
  },
  {
    q: 'What countries are included in War on Terror costs?',
    a: 'The $8 trillion includes operations in Afghanistan ($2.3T), Iraq ($2.4T), Syria ($2.2B), Pakistan drone strikes ($350B), and dozens of other countries through counterterrorism operations, training missions, and security assistance.',
  },
  {
    q: 'How much does the War on Terror cost per day?',
    a: 'Over 23 years (2001-2024), the War on Terror has averaged approximately $950 million per day. At peak operations (2008-2012), daily spending exceeded $1.5 billion across all theaters and programs.',
  },
  {
    q: 'How many people have died in the War on Terror?',
    a: 'The War on Terror has caused an estimated 4.7+ million deaths, including 940,000 direct war deaths and 3.8+ million indirect deaths from disease, displacement, and infrastructure destruction. Over 38 million people have been displaced.',
  },
  {
    q: 'Who has profited from the War on Terror?',
    a: 'Defense contractors have received over $4 trillion in War on Terror contracts since 2001. The top 5 contractors (Lockheed Martin, Boeing, Raytheon, General Dynamics, Northrop Grumman) have earned over $2 trillion combined.',
  },
  {
    q: 'What has the War on Terror accomplished?',
    a: 'Supporters cite the killing of Osama bin Laden and disruption of terrorist networks. Critics note the Taliban regained power in Afghanistan, ISIS emerged in Iraq, terrorism has spread to more countries, and new enemies have been created through civilian casualties and displacement.',
  },
]

const costByCountry = [
  { country: 'Afghanistan', cost: 2300, years: '2001-2021', outcome: 'Taliban victory, complete withdrawal', deaths: 2461 },
  { country: 'Iraq', cost: 2400, years: '2003-2011, 2014-2021', outcome: 'Sectarian conflict, Iranian influence', deaths: 4431 },
  { country: 'Syria', cost: 22, years: '2014-present', outcome: 'Assad survives, Russian/Iranian victory', deaths: 73 },
  { country: 'Pakistan (Drone War)', cost: 350, years: '2004-2018', outcome: 'Tensions with ally, civilian casualties', deaths: 12 },
  { country: 'Somalia', cost: 85, years: '2007-present', outcome: 'Al-Shabaab controls territory', deaths: 29 },
  { country: 'Libya', cost: 13, years: '2011, 2015-present', outcome: 'Failed state, civil war continues', deaths: 8 },
  { country: 'Yemen', cost: 45, years: '2002-present', outcome: 'Saudi proxy war, humanitarian crisis', deaths: 15 },
  { country: 'Niger', cost: 12, years: '2012-2023', outcome: 'Military coup, US forces expelled', deaths: 6 },
]

const costBreakdown = [
  { category: 'Direct Military Operations', amount: 3200, percentage: 40, description: 'Combat operations, bases, equipment in war zones' },
  { category: 'Base Budget Increases', amount: 1800, percentage: 23, description: 'Pentagon budget growth since 9/11' },
  { category: 'Future Veteran Care', amount: 1100, percentage: 14, description: 'Lifetime medical care and disability payments' },
  { category: 'Homeland Security', amount: 980, percentage: 12, description: 'TSA, border security, domestic counterterrorism' },
  { category: 'Interest on War Debt', amount: 532, percentage: 7, description: 'Interest payments on borrowed war spending' },
  { category: 'Foreign Aid/Reconstruction', amount: 388, percentage: 5, description: 'Nation-building and reconstruction programs' },
]

const humanCost = {
  directWarDeaths: 940000,
  indirectDeaths: 3800000,
  totalDeaths: 4740000,
  usServiceDeaths: 7057,
  contractorDeaths: 8000,
  civilianDeaths: 432000,
  combatantDeaths: 500000,
  refugeesDisplaced: 38000000,
  countriesWithOperations: 85,
  activeDroneProgram: 7,
}

const relatedArticles = [
  { slug: 'forever-wars', title: 'America\'s Forever Wars', desc: 'How the War on Terror became permanent' },
  { slug: 'war-profiteering', title: 'War Profiteering Since 9/11', desc: 'How defense contractors got rich off endless war' },
  { slug: 'blowback-911', title: 'Blowback: How US Policy Created 9/11', desc: 'The roots of the terrorist threat' },
  { slug: 'cost-of-empire', title: 'The Cost of American Empire', desc: 'How global interventions drain the homeland' },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function WarOnTerrorCostPage() {
  const stats = loadData('stats.json') as {
    warOnTerrorCost: number
    warOnTerrorDeaths: number
    warOnTerrorTotalDeaths: number
    warOnTerrorDisplaced: number
    counterterrorCountries: number
    [key: string]: any
  }

  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'War on Terror Cost' }]} />
        <ShareButtons title="Cost of War on Terror: $8+ Trillion Total (Brown University)" />

        {/* Hero Answer - Featured Snippet Target */}
        <header className="mb-12 bg-[#1a202c] rounded-lg p-8 border border-[#2d3748]">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            Cost of War on Terror
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$8+ Trillion</div>
            <div className="text-lg opacity-90">Total cost since 9/11 (2001-2024)</div>
          </div>
          <div className="bg-[#991b1b] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">4.7 Million</div>
            <div className="text-lg opacity-90">Total deaths caused</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The War on Terror has cost <strong className="text-[#dc2626]">over $8 trillion</strong> since 2001, 
            according to Brown University's Costs of War Project. This 23-year campaign has killed 
            <strong className="text-[#dc2626]"> 4.7+ million people</strong>, displaced 38+ million, 
            and spread US military operations to <strong className="text-[#dc2626]">85+ countries</strong> worldwide.
          </p>
        </header>

        {/* Scale of the War on Terror */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Scale of Operations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748] text-center">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">$8T+</div>
              <div className="text-white text-sm">Total Cost</div>
              <div className="text-gray-400 text-xs mt-1">All operations</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748] text-center">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">85+</div>
              <div className="text-white text-sm">Countries</div>
              <div className="text-gray-400 text-xs mt-1">With US operations</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748] text-center">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">23</div>
              <div className="text-white text-sm">Years</div>
              <div className="text-gray-400 text-xs mt-1">Since 9/11/2001</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748] text-center">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">$950M</div>
              <div className="text-white text-sm">Daily Cost</div>
              <div className="text-gray-400 text-xs mt-1">Average since 2001</div>
            </div>
          </div>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300">
              The War on Terror is the longest and most expensive military campaign in US history, 
              surpassing even World War II in total cost. Unlike previous wars with clear endpoints, 
              the "Global War on Terror" expanded into a permanent state of military operations 
              across multiple continents.
            </p>
          </div>
        </section>

        {/* Cost by Country/Theater */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Costs by Country/Theater</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              While Afghanistan and Iraq consumed the largest shares of War on Terror spending, 
              operations have spread to dozens of other countries through drone strikes, special 
              operations, training missions, and proxy wars.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Country/Theater</th>
                    <th className="text-right py-3 text-white">Cost</th>
                    <th className="text-center py-3 text-white">Years Active</th>
                    <th className="text-center py-3 text-white">US Deaths</th>
                    <th className="text-left py-3 text-white">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {costByCountry.map((theater, index) => (
                    <tr key={theater.country} className="border-b border-[#2d3748]">
                      <td className="py-3 text-white font-semibold">{theater.country}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">${theater.cost}B</td>
                      <td className="py-3 text-center text-gray-300 text-sm">{theater.years}</td>
                      <td className="py-3 text-center font-mono text-gray-300">{theater.deaths}</td>
                      <td className="py-3 text-gray-400 text-sm">{theater.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Additional Operations:</strong> US counterterrorism activities 
                in Philippines, Mali, Burkina Faso, Chad, Cameroon, Tunisia, Kenya, and 75+ other countries 
                add billions more in costs not included in the major theater totals above.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">How $8 Trillion Was Spent</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The $8 trillion War on Terror cost includes direct military operations, homeland security 
              buildup, future veteran care, and interest on the debt used to finance the wars. Most Americans 
              are unaware of the hidden costs that will continue for decades.
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

        {/* The Human Cost */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Human Cost</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The War on Terror has been devastating for human life. The vast majority of deaths have been 
              civilians, with millions more displaced from their homes. These numbers continue growing 
              as conflicts spread to new regions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#2d3748] rounded-lg p-4 text-center">
                <div className="text-[#dc2626] font-bold text-2xl mb-2">940,000</div>
                <div className="text-white text-sm mb-1">Direct War Deaths</div>
                <div className="text-gray-400 text-xs">Combat, bombing, violence</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-4 text-center">
                <div className="text-[#dc2626] font-bold text-2xl mb-2">3.8M</div>
                <div className="text-white text-sm mb-1">Indirect Deaths</div>
                <div className="text-gray-400 text-xs">Disease, malnutrition, collapse</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-4 text-center">
                <div className="text-[#dc2626] font-bold text-2xl mb-2">38M</div>
                <div className="text-white text-sm mb-1">Refugees &amp; Displaced</div>
                <div className="text-gray-400 text-xs">Largest displacement since WWII</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#2d3748] rounded-lg p-3 text-center">
                <div className="text-white font-bold text-lg">{humanCost.usServiceDeaths.toLocaleString()}</div>
                <div className="text-gray-400 text-xs">US Service Deaths</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-3 text-center">
                <div className="text-white font-bold text-lg">{humanCost.contractorDeaths.toLocaleString()}</div>
                <div className="text-gray-400 text-xs">US Contractor Deaths</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-3 text-center">
                <div className="text-white font-bold text-lg">{humanCost.civilianDeaths.toLocaleString()}</div>
                <div className="text-gray-400 text-xs">Confirmed Civilian Deaths</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-3 text-center">
                <div className="text-white font-bold text-lg">{humanCost.combatantDeaths.toLocaleString()}</div>
                <div className="text-gray-400 text-xs">Enemy Combatant Deaths</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Profiteers */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Who Profited from $8 Trillion?</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The War on Terror created unprecedented wealth for defense contractors, private security 
              companies, and consulting firms. Over half of the $8 trillion went to private companies 
              rather than direct military personnel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Top War Contractors (2001-2024)</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Lockheed Martin</span>
                    <span className="text-[#dc2626] font-mono">$521B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Boeing</span>
                    <span className="text-gray-300 font-mono">$448B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Raytheon</span>
                    <span className="text-gray-300 font-mono">$389B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">General Dynamics</span>
                    <span className="text-gray-300 font-mono">$267B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Northrop Grumman</span>
                    <span className="text-gray-300 font-mono">$245B</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Service Contractors</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Halliburton/KBR</span>
                    <span className="text-gray-300 font-mono">$144B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">DynCorp</span>
                    <span className="text-gray-300 font-mono">$78B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Blackwater/Academi</span>
                    <span className="text-gray-300 font-mono">$45B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">CACI International</span>
                    <span className="text-gray-300 font-mono">$22B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Booz Allen Hamilton</span>
                    <span className="text-gray-300 font-mono">$18B</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">The Revolving Door:</strong> Over 500 senior Pentagon 
                officials have moved to defense contractor jobs since 2001, while 400+ contractor executives 
                have taken Pentagon positions. This revolving door ensures continued war profiteering.
              </p>
            </div>
          </div>
        </section>

        {/* What Was Accomplished? */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">What Was Accomplished for $8 Trillion?</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 text-green-400">Claimed Achievements</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Killed Osama bin Laden (2011)</li>
                  <li>• Disrupted Al-Qaeda leadership</li>
                  <li>• No major terrorist attacks on US soil</li>
                  <li>• Removed Taliban from power (temporarily)</li>
                  <li>• Removed Saddam Hussein from power</li>
                  <li>• Expanded NATO and US influence</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 text-[#dc2626]">Unintended Consequences</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Taliban regained control of Afghanistan</li>
                  <li>• ISIS emerged from Iraq War chaos</li>
                  <li>• Iran's influence expanded dramatically</li>
                  <li>• Terrorism spread to 85+ countries</li>
                  <li>• Created 38+ million refugees</li>
                  <li>• US credibility damaged globally</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm italic">
                "We have met none of our strategic goals... The Taliban are stronger than they were in 
                2001. Pakistan is more unstable. Iran is a regional hegemon. ISIS controls territory in 
                Iraq and Syria. We have spent trillions and lost thousands of lives for no strategic gain." 
                — Col. Andrew Bacevich, Boston University
              </p>
            </div>
          </div>
        </section>

        {/* Future Costs */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Bills Keep Coming</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              Even though major combat operations have ended, War on Terror costs continue growing. 
              Veterans will need care for decades, interest payments continue, and new conflicts emerge 
              from the instability created by previous interventions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#2d3748] rounded-lg p-4 text-center">
                <div className="text-[#dc2626] font-bold text-xl mb-2">$2.5T</div>
                <div className="text-white text-sm mb-1">Future Veteran Care</div>
                <div className="text-gray-400 text-xs">Through 2050</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-4 text-center">
                <div className="text-[#dc2626] font-bold text-xl mb-2">$900B</div>
                <div className="text-white text-sm mb-1">Interest on War Debt</div>
                <div className="text-gray-400 text-xs">Through 2030</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-4 text-center">
                <div className="text-[#dc2626] font-bold text-xl mb-2">$200B</div>
                <div className="text-white text-sm mb-1">Ongoing Operations</div>
                <div className="text-gray-400 text-xs">Annual spending</div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Total Projected Cost:</strong> The War on Terror's full 
                cost may reach $12+ trillion by 2050 when including all veteran care, interest payments, 
                and ongoing counterterrorism operations worldwide.
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
              { href: '/how-much-did-the-iraq-war-cost', label: 'Iraq War Cost Breakdown' },
              { href: '/how-much-did-the-afghanistan-war-cost', label: 'Afghanistan War Cost Breakdown' },
              { href: '/us-drone-strikes', label: 'US Drone Strike Database' },
              { href: '/how-many-veterans-are-there', label: 'Post-9/11 Veterans Statistics' },
              { href: '/pentagon-budget-breakdown', label: 'Pentagon Budget Analysis' },
              { href: '/contractors', label: 'War Contractor Database' },
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
              <li>• Brown University Costs of War Project - "20 Years of War" (2021)</li>
              <li>• Watson Institute for International Affairs - Cost of War Database</li>
              <li>• Congressional Budget Office - "The Budget Impact of the Wars in Iraq and Afghanistan"</li>
              <li>• Special Inspector General for Afghanistan Reconstruction (SIGAR)</li>
              <li>• Iraq Study Group Report and subsequent analyses</li>
              <li>• Government Accountability Office - War Cost Analysis Reports</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}