import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import RelatedArticles from '@/components/RelatedArticles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Many Wars Has the US Been In? 36+ Major Conflicts Since 1775 | WarCosts',
  description: 'The United States has been involved in 36+ major wars and conflicts since 1775. Complete list of US military interventions, casualties, costs, and outcomes.',
  keywords: ['how many wars has US been in', 'list of US wars', 'American wars list', 'US military conflicts', 'United States wars history', 'American military interventions'],
  openGraph: {
    title: 'How Many Wars Has the US Been In? 36+ Major Conflicts Since 1775',
    description: 'The US has been involved in 36+ major wars and conflicts since 1775, with only 22 years of peace.',
    url: 'https://warcosts.org/how-many-wars-has-the-us-been-in',
    type: 'article',
  },
}

/* ── Data ─────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'How many wars has the United States been in?',
    a: 'The United States has been involved in 36+ major wars and military conflicts since independence in 1775. This includes declared wars, major military interventions, and prolonged combat operations lasting multiple years.',
  },
  {
    q: 'How many years has the US been at peace?',
    a: 'The US has been at peace for only 22 years out of its 249-year existence (as of 2024). America has been involved in military conflict for roughly 91% of its history, making it one of the most war-prone nations in modern history.',
  },
  {
    q: 'What was America\'s longest war?',
    a: 'The Afghanistan War (2001-2021) was America\'s longest conflict at 20 years. However, if counting ongoing operations, the "War on Terror" has lasted 23+ years since 2001 and continues today.',
  },
  {
    q: 'How many people have died in US wars?',
    a: 'Approximately 1.35 million Americans have died in all US wars combined. This includes 405,000 in WWII, 116,000 in WWI, 58,000 in Vietnam, and 7,000+ in Iraq/Afghanistan. Civilian deaths in US wars exceed 5 million globally.',
  },
  {
    q: 'Which US wars were declared by Congress?',
    a: 'Only 5 US wars were formally declared by Congress: War of 1812, Mexican-American War, Spanish-American War, WWI, and WWII. The other 31+ conflicts were fought without formal declarations, including Korea, Vietnam, Iraq, and Afghanistan.',
  },
  {
    q: 'What has been the most expensive US war?',
    a: 'WWII was the most expensive at $4.1 trillion (inflation-adjusted). However, the "War on Terror" (2001-2021) cost $8+ trillion total, making it the most expensive when including long-term costs like veteran care.',
  },
]

const eraBreakdown = [
  { era: 'Founding Era (1775-1848)', wars: 8, years: 73, atWar: 35, percentage: 48, keyWars: 'Revolutionary War, War of 1812, Mexican-American War' },
  { era: 'Civil War Era (1849-1898)', wars: 4, years: 50, atWar: 8, percentage: 16, keyWars: 'Civil War, Indian Wars' },
  { era: 'Imperial Era (1899-1941)', wars: 7, years: 43, atWar: 28, percentage: 65, keyWars: 'Spanish-American, WWI, Banana Wars' },
  { era: 'World War Era (1942-1991)', wars: 6, years: 50, atWar: 44, percentage: 88, keyWars: 'WWII, Korea, Vietnam, Cold War' },
  { era: 'Post-Cold War (1992-2024)', wars: 11, years: 33, atWar: 32, percentage: 97, keyWars: 'Gulf War, Iraq, Afghanistan, War on Terror' },
]

const declaredWars = [
  { war: 'War of 1812', years: '1812-1815', declared: true, outcome: 'Draw', cost: 89, deaths: 15000 },
  { war: 'Mexican-American War', years: '1846-1848', declared: true, outcome: 'Victory', cost: 71, deaths: 13283 },
  { war: 'Spanish-American War', years: '1898', declared: true, outcome: 'Victory', cost: 9, deaths: 2446 },
  { war: 'World War I', years: '1917-1918', declared: true, outcome: 'Victory', cost: 334, deaths: 116000 },
  { war: 'World War II', years: '1941-1945', declared: true, outcome: 'Victory', cost: 4100, deaths: 405000 },
]

const undeclaredWars = [
  { war: 'Korean War', years: '1950-1953', rationale: 'UN Police Action', outcome: 'Stalemate', cost: 341, deaths: 36500 },
  { war: 'Vietnam War', years: '1964-1975', rationale: 'Gulf of Tonkin Resolution', outcome: 'Defeat', cost: 823, deaths: 58200 },
  { war: 'Gulf War', years: '1991', rationale: 'UN Authorization', outcome: 'Victory', cost: 102, deaths: 383 },
  { war: 'Iraq War', years: '2003-2011', rationale: 'AUMF (2002)', outcome: 'Mixed', cost: 2400, deaths: 4431 },
  { war: 'Afghanistan War', years: '2001-2021', rationale: 'AUMF (2001)', outcome: 'Defeat', cost: 2300, deaths: 2461 },
]

const relatedArticles = [
  { slug: 'permanent-war-economy', title: 'America\'s Permanent War Economy', desc: 'How continuous conflict became the economic norm' },
  { slug: 'war-powers-act', title: 'The Broken War Powers Act', desc: 'How presidents bypassed Congress on war' },
  { slug: 'military-industrial-complex', title: 'The Military-Industrial Complex', desc: 'Eisenhower\'s warning about endless war' },
  { slug: 'blowback-theory', title: 'Blowback: How Wars Create Future Enemies', desc: 'The unintended consequences of military intervention' },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function USWarsListPage() {
  const conflicts = loadData('conflicts.json') as Array<{
    id: string
    name: string
    shortName: string
    startYear: number
    endYear: number
    era: string
    type: string
    outcome: string
    costInflationAdjusted: number
    usCasualties: { deaths: number; wounded: number }
    congressionalAuth: boolean
    region: string
  }>

  const stats = loadData('stats.json') as {
    totalConflicts: number
    totalUSDeaths: number
    totalCostInflationAdjusted: number
    victories: number
    defeats: number
    inconclusive: number
    [key: string]: any
  }

  // Filter for major wars (not just interventions)
  const majorWars = conflicts.filter(c => c.type === 'war' && c.usCasualties?.deaths > 100)
  const declaredWarsList = conflicts.filter(c => c.congressionalAuth === true)
  const undeclaredWarsList = conflicts.filter(c => c.congressionalAuth === false && c.type === 'war')

  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'US Wars List' }]} />
        <ShareButtons title="How Many Wars Has the US Been In? 36+ Major Conflicts Since 1775" />

        {/* Hero Answer - Featured Snippet Target */}
        <header className="mb-12 bg-[#1a202c] rounded-lg p-8 border border-[#2d3748]">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Many Wars Has the US Been In?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">36+ Major Conflicts</div>
            <div className="text-lg opacity-90">Since independence in 1775</div>
          </div>
          <div className="bg-[#991b1b] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">22 Years of Peace</div>
            <div className="text-lg opacity-90">Out of 249 years of existence</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The United States has been involved in <strong className="text-[#dc2626]">36+ major wars and military conflicts</strong> 
            since independence in 1775. America has been at peace for only <strong className="text-[#dc2626]">22 years</strong> 
            out of its 249-year existence — meaning the US has been at war for <strong className="text-[#dc2626]">91% of its history</strong>.
          </p>
        </header>

        {/* War Statistics Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">War Statistics Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748] text-center">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">{stats.totalConflicts}</div>
              <div className="text-white text-sm">Total Conflicts</div>
              <div className="text-gray-400 text-xs mt-1">Major wars &amp; interventions</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748] text-center">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">1.35M</div>
              <div className="text-white text-sm">US Deaths</div>
              <div className="text-gray-400 text-xs mt-1">All wars combined</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748] text-center">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">$11.5T</div>
              <div className="text-white text-sm">Total Cost</div>
              <div className="text-gray-400 text-xs mt-1">Inflation-adjusted</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748] text-center">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">5</div>
              <div className="text-white text-sm">Declared Wars</div>
              <div className="text-gray-400 text-xs mt-1">By Congress</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1a202c] rounded-lg p-4 border border-[#2d3748] text-center">
              <div className="text-xl font-bold text-green-400 mb-1">{stats.victories}</div>
              <div className="text-white text-sm">Victories</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-4 border border-[#2d3748] text-center">
              <div className="text-xl font-bold text-[#dc2626] mb-1">{stats.defeats}</div>
              <div className="text-white text-sm">Defeats</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-4 border border-[#2d3748] text-center">
              <div className="text-xl font-bold text-yellow-400 mb-1">{stats.inconclusive}</div>
              <div className="text-white text-sm">Inconclusive</div>
            </div>
          </div>
        </section>

        {/* Wars by Era */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">US Wars by Historical Era</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              America's war frequency has accelerated dramatically over time. The early republic fought occasionally 
              for territory and trade. The modern US fights continuously for global dominance.
            </p>
            <div className="space-y-6">
              {eraBreakdown.map((era, index) => (
                <div key={era.era} className="border-b border-[#2d3748] pb-4 last:border-b-0">
                  <div className="flex flex-wrap items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{era.era}</h3>
                    <div className="flex gap-4 text-sm">
                      <span className="text-[#dc2626]">{era.wars} wars</span>
                      <span className="text-gray-300">{era.atWar}/{era.years} years at war</span>
                      <span className="text-yellow-400">{era.percentage}% wartime</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="bg-[#2d3748] rounded-full h-2">
                      <div
                        className="bg-[#dc2626] h-2 rounded-full"
                        style={{ width: `${era.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{era.keyWars}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Declared vs Undeclared Wars */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Declared vs Undeclared Wars</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The Constitution gives Congress sole power to declare war. However, only 5 of America's 36+ wars 
              were formally declared. Presidents have increasingly bypassed Congress using authorizations, 
              UN resolutions, and "police actions."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Declared Wars (5)</h3>
                <div className="space-y-3">
                  {declaredWars.map((war, index) => (
                    <div key={war.war} className="bg-[#2d3748] rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-white font-semibold">{war.war}</div>
                        <div className="text-xs text-gray-400">{war.years}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-gray-300">Cost: ${war.cost}B</div>
                        <div className="text-gray-300">Deaths: {war.deaths.toLocaleString()}</div>
                        <div className={`${war.outcome === 'Victory' ? 'text-green-400' : 
                                       war.outcome === 'Defeat' ? 'text-red-400' : 'text-yellow-400'}`}>
                          {war.outcome}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Major Undeclared Wars (5 of 31+)</h3>
                <div className="space-y-3">
                  {undeclaredWars.map((war, index) => (
                    <div key={war.war} className="bg-[#2d3748] rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-white font-semibold">{war.war}</div>
                        <div className="text-xs text-gray-400">{war.years}</div>
                      </div>
                      <div className="text-xs text-gray-400 mb-2">{war.rationale}</div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-gray-300">Cost: ${war.cost}B</div>
                        <div className="text-gray-300">Deaths: {war.deaths.toLocaleString()}</div>
                        <div className={`${war.outcome === 'Victory' ? 'text-green-400' : 
                                       war.outcome === 'Defeat' ? 'text-red-400' : 'text-yellow-400'}`}>
                          {war.outcome}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 p-3 bg-[#2d3748] rounded-lg">
                  <div className="text-gray-300 text-sm">
                    <strong className="text-[#dc2626]">+26 more undeclared conflicts:</strong> Lebanon (1958, 1982), 
                    Dominican Republic (1965), Grenada (1983), Panama (1989), Somalia (1992), Bosnia (1995), 
                    Kosovo (1999), Libya (2011), Syria (2014-present), and many others.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Longest and Most Costly Wars */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Record-Breaking Wars</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Longest Wars</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Afghanistan War</span>
                    <span className="text-[#dc2626] font-mono">20 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Vietnam War</span>
                    <span className="text-gray-300 font-mono">11 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Iraq War</span>
                    <span className="text-gray-300 font-mono">8 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Revolutionary War</span>
                    <span className="text-gray-300 font-mono">8 years</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Most Expensive Wars</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">World War II</span>
                    <span className="text-[#dc2626] font-mono">$4.1T</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Iraq War</span>
                    <span className="text-gray-300 font-mono">$2.4T</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Afghanistan War</span>
                    <span className="text-gray-300 font-mono">$2.3T</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Vietnam War</span>
                    <span className="text-gray-300 font-mono">$823B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Pattern of Endless War */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Pattern of Endless War</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              America's 91% wartime rate is unprecedented in modern history. No other major power has maintained 
              such continuous military conflict. This pattern has accelerated since WWII.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Pre-WWII (1775-1941)</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• 166 years of existence</li>
                  <li>• 19 major conflicts</li>
                  <li>• 74 years at war (45%)</li>
                  <li>• Average: 1 war per 8.7 years</li>
                  <li>• Longest peace: 1935-1941 (6 years)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Post-WWII (1945-2024)</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• 79 years of existence</li>
                  <li>• 17+ major conflicts</li>
                  <li>• 76 years at war (96%)</li>
                  <li>• Average: 1 new war per 4.6 years</li>
                  <li>• Longest peace: 1976-1979 (3 years)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#2d3748] rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">The "Peace Myth"</h3>
              <p className="text-gray-300 text-sm">
                Americans often believe the US is a peaceful nation that only fights when attacked. The data tells 
                a different story: America has initiated most of its conflicts and been at war almost continuously 
                since WWII. Only 22 years of total peace in 249 years of existence.
              </p>
            </div>
          </div>
        </section>

        {/* Complete Wars List Preview */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Complete List of Major US Wars</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-4">
              Here are all 36+ major US military conflicts, organized by era. This includes declared wars, 
              major interventions, and extended combat operations.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-2 text-white">War/Conflict</th>
                    <th className="text-center py-2 text-white">Years</th>
                    <th className="text-center py-2 text-white">Duration</th>
                    <th className="text-center py-2 text-white">US Deaths</th>
                    <th className="text-center py-2 text-white">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {majorWars.slice(0, 15).map((war) => {
                    const duration = war.endYear ? war.endYear - war.startYear + 1 : 
                                   new Date().getFullYear() - war.startYear + 1;
                    const outcomeColor = war.outcome === 'Victory' ? 'text-green-400' :
                                       war.outcome === 'Defeat' ? 'text-[#dc2626]' : 'text-yellow-400';
                    
                    return (
                      <tr key={war.id} className="border-b border-[#2d3748]">
                        <td className="py-2">
                          <Link href={`/conflicts/${war.id}`} className="text-white hover:text-[#dc2626]">
                            {war.shortName || war.name}
                          </Link>
                        </td>
                        <td className="py-2 text-center text-gray-300">
                          {war.startYear}{war.endYear ? `-${war.endYear}` : '-present'}
                        </td>
                        <td className="py-2 text-center font-mono text-gray-300">
                          {duration} yr{duration !== 1 ? 's' : ''}
                        </td>
                        <td className="py-2 text-center font-mono text-gray-300">
                          {(war.usCasualties?.deaths || 0).toLocaleString()}
                        </td>
                        <td className={`py-2 text-center text-xs ${outcomeColor}`}>
                          {war.outcome}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 text-center">
              <Link href="/us-wars-list" className="text-[#dc2626] hover:text-white transition-colors">
                → View complete list of all {stats.totalConflicts} conflicts
              </Link>
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
              { href: '/us-wars-list', label: 'Complete List of All US Wars' },
              { href: '/cost-of-war-on-terror', label: 'War on Terror Total Cost' },
              { href: '/how-much-does-the-us-spend-on-military', label: 'US Military Spending' },
              { href: '/how-many-us-military-bases-overseas', label: 'US Military Bases Worldwide' },
              { href: '/how-many-died-in-the-vietnam-war', label: 'Vietnam War Casualties' },
              { href: '/conflicts', label: 'Interactive Conflicts Database' },
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
              <li>• Congressional Research Service - "Instances of Use of United States Armed Forces Abroad"</li>
              <li>• Department of Veterans Affairs - America's Wars Factsheet</li>
              <li>• Naval History and Heritage Command - US Naval Aviation Combat Statistics</li>
              <li>• Sarkees & Wayman - "Resort to War: Data on Intra-state Wars" (2010)</li>
              <li>• Uppsala Conflict Data Program - Armed Conflict Dataset</li>
              <li>• Correlates of War Project - Interstate War Data</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}