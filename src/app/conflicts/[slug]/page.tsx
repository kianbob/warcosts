import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { ConflictStatsGrid } from '@/components/charts/ConflictStatsGrid'

const ANALYSIS_LINKS = [
  { slug: 'war-on-terror', title: 'The War on Terror', keywords: ['afghanistan', 'iraq', 'war-on-terror', 'syria', 'isis'] },
  { slug: 'forever-wars', title: 'The Forever Wars', keywords: ['afghanistan', 'iraq', 'somalia', 'syria', 'yemen'] },
  { slug: 'drone-wars', title: 'Drone Wars', keywords: ['afghanistan', 'yemen', 'somalia', 'pakistan', 'drone'] },
  { slug: 'blowback', title: 'Blowback', keywords: ['iran', 'afghanistan', 'iraq', 'regime', 'covert'] },
  { slug: 'congressional-authority', title: '19 Wars Without Congress', keywords: ['undeclared', 'authorization'] },
  { slug: 'human-cost', title: 'The Human Cost', keywords: ['casualties', 'veteran', 'ptsd'] },
  { slug: 'empire-of-bases', title: 'Empire of Bases', keywords: ['bases', 'deployment'] },
  { slug: 'military-industrial-complex', title: 'The Military-Industrial Complex', keywords: ['contractors', 'spending'] },
  { slug: 'presidents-at-war', title: 'Presidents at War', keywords: ['president', 'executive'] },
  { slug: 'iran-2026', title: 'Iran 2026', keywords: ['iran'] },
  { slug: 'ukraine-proxy', title: 'America\'s Proxy War in Ukraine', keywords: ['ukraine'] },
  { slug: 'cost-per-life', title: 'The Price of a Life', keywords: ['cost', 'deaths'] },
]

// Presidential war quotes for "What They Said" section
const WAR_QUOTES: Record<string, { text: string; attribution: string }[]> = {
  'revolutionary-war': [
    { text: 'The constitution vests the power of declaring war in Congress; therefore no offensive expedition of importance can be undertaken until after they shall have deliberated upon the subject and authorized such a measure.', attribution: 'George Washington (1793)' },
  ],
  'civil-war': [
    { text: 'Both parties deprecated war; but one of them would make war rather than let the nation survive; and the other would accept war rather than let it perish. And the war came.', attribution: 'Abraham Lincoln, Second Inaugural Address (1865)' },
  ],
  'world-war-i': [
    { text: 'War is the health of the state.', attribution: 'Randolph Bourne, "The State" (1918)' },
  ],
  'world-war-ii': [
    { text: 'In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex.', attribution: 'Dwight D. Eisenhower, Farewell Address (1961)' },
  ],
  'vietnam-war': [
    { text: 'We are not about to send American boys 9 or 10 thousand miles away from home to do what Asian boys ought to be doing for themselves.', attribution: 'Lyndon B. Johnson (October 1964) — before sending 500,000 American boys to do exactly that' },
  ],
  'afghanistan': [
    { text: 'We were devoid of a fundamental understanding of Afghanistan — we didn\'t know what we were doing.', attribution: 'Douglas Lute, White House Afghanistan War Czar, Afghanistan Papers (2015)' },
  ],
  'iraq-war': [
    { text: 'Simply stated, there is no doubt that Saddam Hussein now has weapons of mass destruction.', attribution: 'Dick Cheney (August 2002) — there were no weapons of mass destruction' },
  ],
}

function getConstitutionalAnalysis(c: any): string {
  if (c.congressionalAuth) {
    if (c.id === 'world-war-i' || c.id === 'world-war-ii') {
      return `Congress formally declared war, fulfilling its constitutional role. ${c.id === 'world-war-ii' ? 'The December 8, 1941 vote was nearly unanimous — only Jeannette Rankin of Montana voted no.' : 'The April 6, 1917 vote passed 373-50 in the House and 82-6 in the Senate, with significant opposition.'} This remains one of the few conflicts where the constitutional process was followed as intended.`
    }
    if (c.id === 'gulf-war' || c.id === 'iraq-war') {
      return `Congress passed an Authorization for Use of Military Force — not a formal declaration of war, but statutory authorization. Critics argue AUMFs are a constitutional workaround that gives presidents war powers without the political accountability of a true declaration. ${c.id === 'iraq-war' ? 'The Iraq AUMF was based on intelligence about WMDs that proved false — Congress authorized war based on lies.' : ''}`
    }
    return `Congress provided authorization for this conflict. ${c.authDetail || ''}`
  }
  
  if (c.type === 'covert_operation' || c.type === 'regime_change') {
    return `This was a covert operation conducted without any congressional knowledge or authorization. The CIA operated under presidential finding, bypassing the constitutional requirement that Congress control the war power. Covert operations represent the most extreme form of executive overreach — waging secret wars that the public and their representatives know nothing about.`
  }
  
  return `This conflict was waged without congressional authorization — a violation of Article I, Section 8 of the Constitution, which vests the war power exclusively in Congress. ${c.authDetail || ''} The Founders deliberately gave Congress the war power to prevent exactly this kind of executive adventurism. As James Madison wrote: "The executive has no right, in any case, to decide the question, whether there is or is not cause for declaring war."`
}

function getLibertarianCase(c: any): string {
  if (c.libertarianNote) return c.libertarianNote
  
  const cost = c.costInflationAdjusted || 0
  const deaths = c.usCasualties?.deaths || 0
  const civDeaths = c.civilianDeaths || 0
  
  let analysis = ''
  if (!c.congressionalAuth) {
    analysis += 'This conflict was waged without the consent of the people\'s representatives — the most fundamental violation of republican governance. '
  }
  if (cost > 100000000000) {
    analysis += `At ${fmtMoney(cost)}, this conflict consumed resources that could have been used for tax reduction, infrastructure, or simply left in the pockets of American families. `
  }
  if (civDeaths > 1000) {
    analysis += `An estimated ${fmt(civDeaths)} civilians died — people who posed no threat to the United States. `
  }
  analysis += 'Every war expands government power, increases debt, and erodes civil liberties. The question is always: was this conflict truly necessary for the defense of American lives and liberty?'
  return analysis
}

export async function generateStaticParams() {
  const conflicts = loadData('conflicts.json')
  return conflicts.map((c: any) => ({ slug: c.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const conflicts = loadData('conflicts.json')
  const c = conflicts.find((x: any) => x.id === slug)
  if (!c) return { title: 'Conflict Not Found' }
  return {
    title: `${c.name} — Cost, Casualties & Analysis`,
    description: `${c.name} (${c.startYear}–${c.endYear || 'Present'}): ${fmtMoney(c.costInflationAdjusted)} cost, ${c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) + ' US deaths' : 'covert operation'}. ${c.description}`,
  }
}

export default async function ConflictPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const conflicts = loadData('conflicts.json')
  const presidents = loadData('presidents.json')
  const c = conflicts.find((x: any) => x.id === slug)
  if (!c) notFound()

  const related = conflicts.filter((x: any) => x.era === c.era && x.id !== c.id).slice(0, 3)
  const regionRelated = conflicts.filter((x: any) => x.region === c.region && x.id !== c.id && !related.some((r: any) => r.id === x.id)).slice(0, 3 - related.length)
  const allRelated = [...related, ...regionRelated].slice(0, 3)

  const relevantArticles = ANALYSIS_LINKS.filter(a =>
    a.keywords.some(k => c.id.includes(k) || c.name.toLowerCase().includes(k) || (c.countries || []).some((co: string) => co.toLowerCase().includes(k)))
  ).slice(0, 4)

  // Find presidents associated with this conflict
  const conflictPresidents = presidents.filter((p: any) =>
    p.conflicts.some((name: string) =>
      c.name.includes(name) || c.shortName?.includes(name) || name.includes(c.shortName || '') || name.includes(c.name)
    )
  )

  // Per-taxpayer cost calculation
  const taxpayerPopulations: Record<string, number> = {
    'Founding Era': 2500000, 'Early Republic': 5300000, 'Expansion Era': 23000000,
    'Civil War': 31000000, 'Imperial Era': 76000000, 'World Wars': 130000000,
    'Cold War': 180000000, 'Post-Cold War': 260000000, 'War on Terror': 330000000,
  }
  const pop = taxpayerPopulations[c.era] || 330000000
  const taxpayerCount = Math.round(pop * 0.45) // rough taxpayer ratio
  const costPerTaxpayer = c.costInflationAdjusted ? Math.round(c.costInflationAdjusted / taxpayerCount) : 0

  // Additional quotes
  const additionalQuotes = WAR_QUOTES[c.id] || []

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${c.name} — Cost, Casualties & Analysis`,
            description: `Analysis of ${c.name} (${c.startYear}–${c.endYear || 'Present'}): ${fmtMoney(c.costInflationAdjusted)} cost, ${c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) + ' US deaths' : 'covert operation'}. Constitutional and historical analysis.`,
            author: {
              "@type": "Organization",
              name: "OpenWar",
            },
            publisher: {
              "@type": "Organization", 
              name: "OpenWar",
            },
            datePublished: new Date().toISOString(),
            dateModified: new Date().toISOString(),
            url: `https://openwar.vercel.app/conflicts/${c.id}`,
            image: `https://openwar.vercel.app/api/og/conflict?name=${encodeURIComponent(c.name)}&cost=${c.costInflationAdjusted}&deaths=${c.usCasualties?.deaths || 0}`,
            keywords: [
              c.name,
              c.shortName,
              c.era,
              c.region,
              ...(c.countries || []),
              "war costs",
              "military spending",
              "casualties",
              "constitutional analysis",
              "libertarian analysis"
            ].filter(Boolean).join(", "),
            about: [
              {
                "@type": "Thing",
                name: c.name,
                description: c.description
              }
            ],
            mainEntity: {
              "@type": "Event", 
              name: c.name,
              startDate: `${c.startYear}-01-01`,
              ...(c.endYear && { endDate: `${c.endYear}-12-31` }),
              location: {
                "@type": "Place",
                name: c.region
              }
            }
          })
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Conflicts', href: '/conflicts' }, { label: c.shortName || c.name }]} />

        {/* Hero Section - Enhanced */}
        <div className="bg-slate-900 text-white rounded-xl p-8 mb-8 border border-slate-700 shadow-2xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link href={`/eras/${slugify(c.era)}`} className="text-slate-400 text-sm hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-slate-800">
              📅 {c.era}
            </Link>
            <span className="text-slate-400 text-sm">· {c.type.replace(/_/g, ' ')}</span>
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${
              c.outcome?.includes('Victory') ? 'bg-green-600/20 text-green-400 border border-green-600/30' :
              c.outcome?.includes('Defeat') ? 'bg-red-600/20 text-red-400 border border-red-600/30' :
              c.outcome?.includes('Ongoing') || c.outcome?.includes('Developing') ? 'bg-orange-600/20 text-orange-400 border border-orange-600/30' :
              'bg-yellow-600/20 text-yellow-400 border border-yellow-600/30'
            }`}>{c.outcome || 'Developing'}</span>
            {!c.endYear && (
              <span className="text-xs px-3 py-1 rounded-full bg-orange-600/20 text-orange-400 animate-pulse border border-orange-600/30">● Ongoing</span>
            )}
            {!c.congressionalAuth && (
              <span className="text-xs px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-600/30">⚖️ Unconstitutional</span>
            )}
          </div>
          
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {c.name}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-slate-400 mb-2">
                <span className="font-semibold text-white">{c.startYear}–{c.endYear || 'Present'}</span>
                {c.computed?.durationYears && (
                  <span className="ml-2 text-sm">({c.computed.durationYears} years)</span>
                )}
              </p>
              <p className="text-slate-400 mb-2">
                🌍 <span className="text-white">{c.region}</span> · 
                {c.countries?.map((co: string, i: number) => (
                  <span key={co}>
                    {i > 0 && ', '}
                    <Link href={`/countries/${slugify(co)}`} className="hover:text-white transition-colors underline decoration-slate-500 hover:decoration-white">
                      {co}
                    </Link>
                  </span>
                ))}
              </p>
            </div>
            <div className="text-right">
              {c.troopsDeployed && (
                <p className="text-slate-400 mb-2">
                  👥 <span className="text-white font-semibold">{fmt(c.troopsDeployed)}</span> troops deployed
                </p>
              )}
              {c.computed?.durationDays && (
                <p className="text-slate-400 text-sm">
                  📅 {fmt(c.computed.durationDays)} days of conflict
                </p>
              )}
            </div>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-200 text-lg leading-relaxed">{c.description}</p>
          </div>
        </div>

        <ShareButtons title={c.name} />

      {/* AI Overview - Enhanced Data-Driven Insights */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 my-8 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">AI</span>
          </div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-blue-900">Data-Driven Insights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {costPerTaxpayer > 0 && (
              <div className="bg-white/50 rounded-lg p-4 border border-blue-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💸</span>
                  <h4 className="font-semibold text-blue-900">Taxpayer Burden</h4>
                </div>
                <p className="text-sm text-blue-800">
                  This conflict cost <strong>${fmt(costPerTaxpayer)} per taxpayer</strong> — {fmtMoney(c.costInflationAdjusted)} total
                  {c.usCasualties?.deaths > 0 ? `, or ${fmtMoney(Math.round(c.costInflationAdjusted / c.usCasualties.deaths))} per American life lost` : ''}.
                </p>
              </div>
            )}
            {c.computed?.costPerDay > 0 && (
              <div className="bg-white/50 rounded-lg p-4 border border-blue-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📅</span>
                  <h4 className="font-semibold text-blue-900">Daily Cost</h4>
                </div>
                <p className="text-sm text-blue-800">
                  <strong>{fmtMoney(c.computed.costPerDay)} per day</strong> for {c.computed.durationYears} years — enough to fund {fmt(Math.round(c.computed.costPerDay / 50000))} teachers' salaries daily.
                </p>
              </div>
            )}
          </div>
          <div className="space-y-3">
            {c.civilianDeaths > 0 && c.usCasualties?.deaths > 0 && (
              <div className="bg-white/50 rounded-lg p-4 border border-blue-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">⚱️</span>
                  <h4 className="font-semibold text-blue-900">Casualty Ratio</h4>
                </div>
                <p className="text-sm text-blue-800">
                  For every American soldier killed, approximately <strong>{Math.round(c.civilianDeaths / c.usCasualties.deaths)} civilians died</strong> — {fmt(c.civilianDeaths)} civilian deaths vs. {fmt(c.usCasualties.deaths)} US deaths.
                </p>
              </div>
            )}
            {!c.congressionalAuth && (
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">⚖️</span>
                  <h4 className="font-semibold text-red-900">Constitutional Violation</h4>
                </div>
                <p className="text-sm text-red-800">
                  Waged <strong>without congressional authorization</strong> — violating Article I, Section 8 of the Constitution, which grants the war power exclusively to Congress.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Stats Dashboard */}
      <div className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 text-center">📊 By The Numbers</h2>
        
        {/* Primary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6 shadow-lg border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">💰</span>
              <div className={`text-xs px-2 py-1 rounded-full ${c.costInflationAdjusted > 1000000000000 ? 'bg-red-600/20 text-red-300' : c.costInflationAdjusted > 100000000000 ? 'bg-yellow-600/20 text-yellow-300' : 'bg-green-600/20 text-green-300'}`}>
                {c.costInflationAdjusted > 1000000000000 ? 'Extreme' : c.costInflationAdjusted > 100000000000 ? 'High' : 'Moderate'}
              </div>
            </div>
            <p className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-1">{fmtMoney(c.costInflationAdjusted)}</p>
            <p className="text-xs text-slate-400">Total Cost (2023 dollars)</p>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 text-white rounded-xl p-6 shadow-lg border border-red-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">🪖</span>
              <div className={`text-xs px-2 py-1 rounded-full ${(c.usCasualties?.deaths || 0) > 50000 ? 'bg-red-300/20 text-red-200' : (c.usCasualties?.deaths || 0) > 1000 ? 'bg-yellow-300/20 text-yellow-200' : 'bg-green-300/20 text-green-200'}`}>
                {(c.usCasualties?.deaths || 0) > 50000 ? 'Severe' : (c.usCasualities?.deaths || 0) > 1000 ? 'High' : 'Low'}
              </div>
            </div>
            <p className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-1">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) : '—'}</p>
            <p className="text-xs text-red-200">US Military Deaths</p>
          </div>

          <div className="bg-gradient-to-br from-orange-900 to-orange-800 text-white rounded-xl p-6 shadow-lg border border-orange-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">👥</span>
              <div className={`text-xs px-2 py-1 rounded-full ${(c.civilianDeaths || 0) > 100000 ? 'bg-red-300/20 text-red-200' : (c.civilianDeaths || 0) > 1000 ? 'bg-yellow-300/20 text-yellow-200' : 'bg-green-300/20 text-green-200'}`}>
                {(c.civilianDeaths || 0) > 100000 ? 'Catastrophic' : (c.civilianDeaths || 0) > 1000 ? 'High' : 'Low'}
              </div>
            </div>
            <p className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-1">{c.civilianDeaths ? fmt(c.civilianDeaths) : 'Unknown'}</p>
            <p className="text-xs text-orange-200">Civilian Deaths</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-6 shadow-lg border border-blue-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">⏰</span>
              <div className={`text-xs px-2 py-1 rounded-full ${(c.computed?.durationYears || 0) > 10 ? 'bg-red-300/20 text-red-200' : (c.computed?.durationYears || 0) > 5 ? 'bg-yellow-300/20 text-yellow-200' : 'bg-green-300/20 text-green-200'}`}>
                {(c.computed?.durationYears || 0) > 10 ? 'Forever War' : (c.computed?.durationYears || 0) > 5 ? 'Long' : 'Short'}
              </div>
            </div>
            <p className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-1">{c.computed?.durationYears || '—'}</p>
            <p className="text-xs text-blue-200">Years Duration</p>
          </div>
        </div>

        {/* Secondary Stats Row */}
        {(c.computed?.costPerDay || c.computed?.costPerUSdeath || c.computed?.costPerCivilianDeath || costPerTaxpayer > 0) && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.computed?.costPerDay && (
              <div className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-2xl font-bold text-slate-900 font-[family-name:var(--font-heading)]">{fmtMoney(c.computed.costPerDay)}</p>
                <p className="text-xs text-slate-600">Cost Per Day</p>
              </div>
            )}
            {costPerTaxpayer > 0 && (
              <div className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-2xl font-bold text-slate-900 font-[family-name:var(--font-heading)]">${fmt(costPerTaxpayer)}</p>
                <p className="text-xs text-slate-600">Per Taxpayer</p>
              </div>
            )}
            {c.computed?.costPerUSdeath && c.computed.costPerUSdeath > 0 && (
              <div className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-2xl font-bold text-red-600 font-[family-name:var(--font-heading)]">{fmtMoney(c.computed.costPerUSdeath)}</p>
                <p className="text-xs text-slate-600">Cost Per US Death</p>
              </div>
            )}
            {c.troopsDeployed && (
              <div className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-2xl font-bold text-slate-900 font-[family-name:var(--font-heading)]">{fmt(c.troopsDeployed)}</p>
                <p className="text-xs text-slate-600">Troops Deployed</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Computed Stats */}
      {c.computed && <ConflictStatsGrid computed={c.computed} />}

      {/* Enhanced Narrative Section */}
      {c.narrative && (
        <div className="bg-white rounded-xl p-8 mb-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">📖</span>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">The Full Story</h2>
              <p className="text-slate-600 text-sm">How this conflict unfolded</p>
            </div>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <div className="first-letter:text-6xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:font-[family-name:var(--font-heading)]">
              {(c.narrative as string).split('\n\n').map((paragraph: string, i: number) => (
                <p key={i} className={`text-slate-800 leading-relaxed mb-6 ${i === 0 ? 'text-lg' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Key Quote */}
      {c.keyQuote && (
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-8 mb-8 shadow-2xl border border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">💬</span>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">Key Quote</h2>
              <p className="text-slate-400 text-sm">Words that defined this conflict</p>
            </div>
          </div>
          
          <div className="relative">
            {/* Quote marks decoration */}
            <div className="absolute -top-4 -left-4 text-6xl text-red-600/20 font-serif">"</div>
            <div className="absolute -bottom-8 -right-4 text-6xl text-red-600/20 font-serif rotate-180">"</div>
            
            <blockquote className="relative border-l-4 border-red-600 pl-8 py-4">
              <p className="text-white text-xl md:text-2xl italic leading-relaxed font-[family-name:var(--font-heading)]">
                {(c.keyQuote as any).text}
              </p>
              <footer className="text-slate-300 mt-6 text-lg border-t border-slate-700 pt-4">
                <cite className="not-italic">— {(c.keyQuote as any).attribution}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      )}

      {/* The Human Cost */}
      {(c.usCasualties?.deaths > 0 || c.civilianDeaths > 0) && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-red-900">💀 The Human Cost</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
            {c.usCasualties?.battleDeaths > 0 && <div className="text-center"><p className="text-2xl font-bold text-red-700">{fmt(c.usCasualties.battleDeaths)}</p><p className="text-red-600 text-xs">Battle Deaths</p></div>}
            {c.usCasualties?.deaths > 0 && <div className="text-center"><p className="text-2xl font-bold text-red-700">{fmt(c.usCasualties.deaths)}</p><p className="text-red-600 text-xs">Total US Deaths</p></div>}
            {c.usCasualties?.wounded > 0 && <div className="text-center"><p className="text-2xl font-bold text-red-700">{fmt(c.usCasualties.wounded)}</p><p className="text-red-600 text-xs">Wounded</p></div>}
            {c.civilianDeaths > 0 && <div className="text-center"><p className="text-2xl font-bold text-red-700">{fmt(c.civilianDeaths)}</p><p className="text-red-600 text-xs">Civilian Deaths</p></div>}
          </div>
          {c.usCasualties?.deaths > 0 && c.computed?.durationYears > 0 && (
            <p className="text-red-800 text-sm">
              That&apos;s approximately <strong>{fmt(Math.round(c.usCasualties.deaths / c.computed.durationYears))}</strong> American deaths per year, or <strong>{fmt(Math.round(c.usCasualties.deaths / (c.computed.durationYears * 365)))}</strong> per day for {c.computed.durationYears} years.
            </p>
          )}
          {c.civilianDeaths > 0 && c.usCasualties?.deaths > 0 && (
            <p className="text-red-800 text-sm mt-2">
              For every American soldier killed, approximately <strong>{Math.round(c.civilianDeaths / c.usCasualties.deaths)}</strong> civilians died.
            </p>
          )}
        </div>
      )}

      {/* Enhanced Cost Analysis Section */}
      {costPerTaxpayer > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">💰</span>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">The Financial Cost</h2>
              <p className="text-slate-600 text-sm">What this conflict cost American taxpayers</p>
            </div>
          </div>

          {/* Cost Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">🏦</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Total</span>
              </div>
              <p className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-2">{fmtMoney(c.costInflationAdjusted)}</p>
              <p className="text-green-100 text-sm">Total Cost (2023 dollars)</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">👤</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Per Person</span>
              </div>
              <p className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-2">${fmt(costPerTaxpayer)}</p>
              <p className="text-orange-100 text-sm">Per Taxpayer</p>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">💀</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Per Life</span>
              </div>
              <p className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-2">
                {c.usCasualties?.deaths > 0 ? fmtMoney(Math.round(c.costInflationAdjusted / c.usCasualties.deaths)) : '—'}
              </p>
              <p className="text-red-100 text-sm">Cost Per US Death</p>
            </div>
          </div>

          {/* Cost Context */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
              <span>🔍</span>
              Putting This In Perspective
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-amber-800 mb-2">
                  <strong>Could have funded:</strong>
                </p>
                <ul className="text-amber-700 space-y-1">
                  <li>• {fmt(Math.round(c.costInflationAdjusted / 50000))} teacher salaries for a year</li>
                  <li>• {fmt(Math.round(c.costInflationAdjusted / 100000))} full college scholarships</li>
                  <li>• {fmt(Math.round(c.costInflationAdjusted / 250000))} small businesses</li>
                </ul>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-amber-800 mb-2">
                  <strong>Daily spending:</strong>
                </p>
                <ul className="text-amber-700 space-y-1">
                  {c.computed?.costPerDay && (
                    <li>• {fmtMoney(c.computed.costPerDay)} per day</li>
                  )}
                  {c.computed?.costPerDay && (
                    <li>• {fmtMoney(Math.round(c.computed.costPerDay / 24))} per hour</li>
                  )}
                  {c.computed?.costPerDay && (
                    <li>• {fmtMoney(Math.round(c.computed.costPerDay / (24 * 60)))} per minute</li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          {c.costBreakdown && (
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4 flex items-center gap-2">
                <span>📊</span>
                Where The Money Went
              </h3>
              <div className="prose prose-slate max-w-none">
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <p className="text-slate-800 leading-relaxed">{c.costBreakdown}</p>
                </div>
              </div>
              
              {/* Financial Impact Indicators */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                  <div className="text-red-600 text-2xl mb-1">📈</div>
                  <p className="text-xs text-red-700 font-medium">Debt Impact</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
                  <div className="text-yellow-600 text-2xl mb-1">💸</div>
                  <p className="text-xs text-yellow-700 font-medium">Inflation Risk</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                  <div className="text-blue-600 text-2xl mb-1">🏗️</div>
                  <p className="text-xs text-blue-700 font-medium">Opportunity Cost</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
                  <div className="text-purple-600 text-2xl mb-1">👶</div>
                  <p className="text-xs text-purple-700 font-medium">Future Burden</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Outcome */}
      <div className="bg-white rounded-lg p-6 mb-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Outcome</h2>
        <p className="font-semibold text-lg mb-2">{c.outcome || 'Developing — Too Early to Tell'}</p>
        <p className="text-muted">{c.outcomeDetail || 'This conflict is ongoing or too recent to assess outcomes.'}</p>
      </div>

      {/* Enhanced Constitutional Analysis */}
      <div className={`rounded-xl p-8 mb-8 border-2 shadow-lg ${
        c.congressionalAuth 
          ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300' 
          : 'bg-gradient-to-br from-red-50 to-rose-50 border-red-300'
      }`}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${
            c.congressionalAuth ? 'bg-green-600' : 'bg-red-600'
          }`}>
            <span className="text-white text-2xl">⚖️</span>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
              Constitutional Analysis
            </h2>
            <div className={`text-lg font-semibold flex items-center gap-2 ${
              c.congressionalAuth ? 'text-green-700' : 'text-red-700'
            }`}>
              <span>{c.congressionalAuth ? '✅' : '❌'}</span>
              <span>{c.congressionalAuth ? 'Properly Authorized' : 'Unconstitutional War'}</span>
            </div>
          </div>
        </div>

        {/* Authority Details */}
        <div className="bg-white/70 rounded-lg p-5 mb-6 border border-white/50">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-lg">📜</span>
            Congressional Authorization Status
          </h3>
          <p className={`leading-relaxed mb-4 ${c.congressionalAuth ? 'text-green-800' : 'text-red-800'}`}>
            {c.authDetail}
          </p>
          
          {!c.congressionalAuth && (
            <div className="bg-red-100 border border-red-200 rounded-lg p-4">
              <p className="text-red-900 font-semibold text-sm mb-2">🚨 Constitutional Violation</p>
              <p className="text-red-800 text-sm leading-relaxed">
                Article I, Section 8 of the Constitution grants Congress the exclusive power to declare war. 
                This conflict proceeded without proper authorization, violating the separation of powers.
              </p>
            </div>
          )}
        </div>

        {/* Detailed Analysis */}
        <div className="prose prose-slate max-w-none">
          <div className={`bg-white/50 rounded-lg p-6 border ${
            c.congressionalAuth ? 'border-green-200' : 'border-red-200'
          }`}>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4 flex items-center gap-2">
              <span>🏛️</span>
              Constitutional Context
            </h3>
            <div className={`text-sm leading-relaxed ${
              c.congressionalAuth ? 'text-green-800' : 'text-red-800'
            }`}>
              <p>{getConstitutionalAnalysis(c)}</p>
            </div>
          </div>
        </div>

        {/* Founders' Intent Box */}
        <div className="mt-6 bg-slate-900 text-white rounded-lg p-6">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 flex items-center gap-2">
            <span>👥</span>
            What the Founders Said
          </h3>
          <blockquote className="italic text-slate-300 text-sm leading-relaxed mb-3">
            "The executive has no right, in any case, to decide the question, whether there is or is not cause for declaring war."
          </blockquote>
          <p className="text-xs text-slate-400">— James Madison, Father of the Constitution</p>
        </div>
      </div>

      {/* Enhanced Timeline Section */}
      {c.keyEvents?.length > 0 && (
        <div className="bg-slate-50 rounded-xl p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">⏰</span>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Timeline of Events</h2>
              <p className="text-slate-600 text-sm">Key moments that shaped this conflict</p>
            </div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-slate-300 to-red-500"></div>
            
            <div className="space-y-8">
              {c.keyEvents.map((e: any, i: number) => {
                const isString = typeof e === 'string'
                const eventText = isString ? e : e.event
                const eventYear = isString ? null : e.year
                const isLeft = i % 2 === 0
                
                return (
                  <div key={i} className={`flex items-start ${isLeft ? '' : 'flex-row-reverse'} gap-8`}>
                    {/* Timeline Dot */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 relative ${
                        i === 0 ? 'bg-green-500' :
                        i === c.keyEvents.length - 1 ? 'bg-red-500' :
                        'bg-blue-500'
                      }`}></div>
                      {eventYear && (
                        <div className={`absolute -top-8 ${isLeft ? 'left-1/2 -translate-x-1/2' : 'right-1/2 translate-x-1/2'} text-xs font-bold text-slate-600 bg-white px-2 py-1 rounded shadow-sm border`}>
                          {eventYear}
                        </div>
                      )}
                    </div>
                    
                    {/* Event Card */}
                    <div className={`flex-1 max-w-md ${isLeft ? '' : 'text-right'}`}>
                      <div className={`bg-white rounded-lg p-4 shadow-md border border-slate-200 ${
                        isLeft ? 'mr-auto' : 'ml-auto'
                      }`}>
                        <div className={`flex items-start gap-3 ${isLeft ? '' : 'flex-row-reverse'}`}>
                          <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-sm">
                              {i === 0 ? '🚀' : 
                               i === c.keyEvents.length - 1 ? '🏁' :
                               i === Math.floor(c.keyEvents.length / 2) ? '⚔️' : 
                               '📍'}
                            </span>
                          </div>
                          <div className={`${isLeft ? '' : 'text-right'}`}>
                            {eventYear && !isString && (
                              <p className="text-sm font-bold text-blue-600 mb-1">{eventYear}</p>
                            )}
                            <p className="text-slate-800 leading-snug">{eventText}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Objectives */}
      {c.objectives?.length > 0 && (
        <div className="bg-white rounded-lg p-6 mb-8 border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
            🎯 Objectives {c.objectivesMet === true ? <span className="text-green-600 text-sm">(Met)</span> : c.objectivesMet === false ? <span className="text-red-600 text-sm">(Not Met / Partially Met)</span> : <span className="text-yellow-600 text-sm">(Too Early to Tell)</span>}
          </h2>
          <ul className="space-y-1">
            {c.objectives.map((o: string, i: number) => (
              <li key={i} className="flex items-center gap-2">
                <span>{c.objectivesMet === true ? '✅' : c.objectivesMet === false ? '❌' : '⏳'}</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Enhanced Did You Know Section */}
      {c.didYouKnow && (c.didYouKnow as string[]).length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">💡</span>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Surprising Facts</h2>
              <p className="text-slate-600 text-sm">Things that might surprise you</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(c.didYouKnow as string[]).map((fact: string, i: number) => (
              <div key={i} className="group">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-500 text-white rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold group-hover:bg-yellow-600 transition-colors">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-amber-900 leading-relaxed text-sm">{fact}</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Key Figures Section */}
      {c.keyFigures && (c.keyFigures as any[]).length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">👥</span>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Key Figures</h2>
              <p className="text-slate-600 text-sm">The people who shaped this conflict</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(c.keyFigures as any[]).map((fig: any, i: number) => (
              <div key={i} className="group">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center mb-4 mx-auto text-white text-xl font-bold">
                    {fig.name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {fig.name}
                    </h3>
                    
                    <div className="bg-slate-100 rounded-full px-3 py-1 inline-block mb-3">
                      <p className="text-sm font-medium text-slate-700">{fig.role}</p>
                    </div>
                    
                    <p className="text-sm text-slate-600 leading-relaxed">{fig.note}</p>
                  </div>
                  
                  {/* Role indicator */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                      <div className={`w-2 h-2 rounded-full ${
                        fig.role?.toLowerCase().includes('general') || fig.role?.toLowerCase().includes('commander') ? 'bg-red-400' :
                        fig.role?.toLowerCase().includes('president') || fig.role?.toLowerCase().includes('leader') ? 'bg-blue-400' :
                        fig.role?.toLowerCase().includes('diplomat') || fig.role?.toLowerCase().includes('ambassador') ? 'bg-green-400' :
                        'bg-gray-400'
                      }`}></div>
                      <span className="font-medium">
                        {fig.role?.toLowerCase().includes('general') || fig.role?.toLowerCase().includes('commander') ? 'Military' :
                         fig.role?.toLowerCase().includes('president') || fig.role?.toLowerCase().includes('leader') ? 'Political' :
                         fig.role?.toLowerCase().includes('diplomat') || fig.role?.toLowerCase().includes('ambassador') ? 'Diplomatic' :
                         'Other'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Controversies Section */}
      {c.controversies && (c.controversies as string[]).length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">⚡</span>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Controversies & Debates</h2>
              <p className="text-slate-600 text-sm">The contentious aspects of this conflict</p>
            </div>
          </div>

          <div className="space-y-4">
            {(c.controversies as string[]).map((item: string, i: number) => (
              <details key={i} className="group" open={i === 0}>
                <summary className="cursor-pointer bg-red-50 hover:bg-red-100 border border-red-200 rounded-t-lg p-4 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </div>
                      <h3 className="font-semibold text-red-900">
                        Controversy #{i + 1}
                      </h3>
                    </div>
                    <div className="text-red-600 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </summary>
                
                <div className="bg-white border-l border-r border-b border-red-200 rounded-b-lg p-6">
                  <div className="prose prose-red max-w-none">
                    <p className="text-red-900 leading-relaxed">{item}</p>
                  </div>
                  
                  {/* Visual indicator */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-red-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Historical debate</span>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced What They Said Section */}
      {additionalQuotes.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🗣️</span>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">What They Said</h2>
              <p className="text-slate-600 text-sm">Voices from the time</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {additionalQuotes.map((q, i) => (
              <div key={i} className="group">
                <div className="bg-gradient-to-r from-slate-50 to-indigo-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-indigo-300">
                  <div className="flex items-start gap-4">
                    {/* Quote icon */}
                    <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-serif group-hover:bg-indigo-600 transition-colors">
                      "
                    </div>
                    
                    <div className="flex-1">
                      <blockquote className="mb-4">
                        <p className="text-slate-800 text-lg italic leading-relaxed">
                          "{q.text}"
                        </p>
                      </blockquote>
                      
                      <footer className="flex items-center gap-3">
                        <div className="h-px bg-slate-300 flex-1"></div>
                        <cite className="text-slate-600 font-medium not-italic bg-white px-3 py-1 rounded-full text-sm border">
                          {q.attribution}
                        </cite>
                        <div className="h-px bg-slate-300 flex-1"></div>
                      </footer>
                    </div>
                  </div>

                  {/* Context indicator */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>Historical record</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Collection Note */}
          <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <p className="text-indigo-800 text-sm text-center italic">
              These quotes capture the perspectives and justifications of key figures during this conflict.
            </p>
          </div>
        </div>
      )}

      {/* Enhanced Legacy & Impact */}
      {c.legacyImpact && (
        <div className="bg-gradient-to-br from-slate-50 to-stone-50 rounded-xl p-8 mb-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🏛️</span>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Legacy & Long-Term Impact</h2>
              <p className="text-slate-600 text-sm">How this conflict shaped America and the world</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="bg-white/70 rounded-xl p-6 border border-white/50 shadow-sm">
              <p className="text-slate-800 leading-relaxed text-lg first-line:font-semibold first-line:text-slate-900">
                {c.legacyImpact}
              </p>
            </div>
          </div>

          {/* Impact Categories */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <div className="text-blue-600 text-xl mb-1">🌍</div>
              <p className="text-xs text-blue-700 font-medium">Global Impact</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <div className="text-green-600 text-xl mb-1">🏛️</div>
              <p className="text-xs text-green-700 font-medium">Political Legacy</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
              <div className="text-purple-600 text-xl mb-1">👥</div>
              <p className="text-xs text-purple-700 font-medium">Social Change</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-center">
              <div className="text-orange-600 text-xl mb-1">💡</div>
              <p className="text-xs text-orange-700 font-medium">Lessons Learned</p>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Libertarian Analysis */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl p-8 mb-8 shadow-2xl border border-slate-700">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center">
            <span className="text-slate-900 text-2xl font-bold">🗽</span>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
              The Libertarian Perspective
            </h2>
            <p className="text-slate-300 text-sm">Liberty, limited government, and the costs of war</p>
          </div>
        </div>

        {/* Main Analysis */}
        <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700">
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-200 text-lg leading-relaxed italic">
              {c.libertarianNote || getLibertarianCase(c)}
            </p>
          </div>
        </div>

        {/* Key Libertarian Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-400 text-xl">⚖️</span>
              <h3 className="font-semibold text-white">Constitutional Limits</h3>
            </div>
            <p className="text-slate-300 text-sm">
              {c.congressionalAuth 
                ? "This conflict followed proper constitutional procedures, respecting the separation of powers." 
                : "Executive war-making violates the Constitution and concentrates dangerous power in one person."}
            </p>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-400 text-xl">💰</span>
              <h3 className="font-semibold text-white">Economic Impact</h3>
            </div>
            <p className="text-slate-300 text-sm">
              War spending diverts resources from productive uses, increases debt, and burdens future generations with costs they never agreed to pay.
            </p>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-400 text-xl">🕊️</span>
              <h3 className="font-semibold text-white">Human Cost</h3>
            </div>
            <p className="text-slate-300 text-sm">
              Every war involves the loss of human life and liberty. The question is always: was this truly necessary for defense?
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-6 pt-6 border-t border-slate-700">
          <blockquote className="text-center">
            <p className="text-slate-300 italic text-lg">
              "War is the health of the State. It automatically sets in motion throughout society those irresistible forces for uniformity, for passionate cooperation with the Government."
            </p>
            <footer className="text-slate-400 mt-3 text-sm">— Randolph Bourne</footer>
          </blockquote>
        </div>
      </div>

      {/* Presidents Involved */}
      {conflictPresidents.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">🏛️ Presidents Involved</h2>
          <div className="flex flex-wrap gap-3">
            {conflictPresidents.map((p: any) => (
              <Link key={p.name} href={`/presidents/${slugify(p.name)}`} className="bg-white rounded-lg border px-4 py-3 hover:shadow-md transition">
                <p className="font-semibold text-primary">{p.name}</p>
                <p className="text-xs text-muted">{p.conflicts.length} total conflicts</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Further Reading */}
      {relevantArticles.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">📖 Further Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relevantArticles.map(a => (
              <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-stone-50 rounded-lg border p-4 hover:shadow-md transition">
                <h3 className="font-semibold text-primary">{a.title}</h3>
                <p className="text-muted text-sm">Analysis →</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Cross-Links Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">🔗</span>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Related Analysis & Tools</h2>
            <p className="text-slate-600 text-sm">Dive deeper into the data and context</p>
          </div>
        </div>

        {/* Analysis Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Link href="/tools/cost-per-life" className="group bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                <span className="text-white text-lg">💀</span>
              </div>
              <div>
                <h3 className="font-bold text-red-900">Cost Per Life Analysis</h3>
                <p className="text-red-700 text-xs">Compare the human cost across conflicts</p>
              </div>
            </div>
            <p className="text-red-800 text-sm">
              See how {c.shortName || c.name} compares to other conflicts in terms of cost per life lost →
            </p>
          </Link>

          <Link href="/tools/compare-wars" className="group bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <span className="text-white text-lg">⚖️</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-900">War Comparison Tool</h3>
                <p className="text-blue-700 text-xs">Side-by-side conflict analysis</p>
              </div>
            </div>
            <p className="text-blue-800 text-sm">
              Compare {c.shortName || c.name} directly with other conflicts →
            </p>
          </Link>

          <Link href="/presidents" className="group bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                <span className="text-white text-lg">🏛️</span>
              </div>
              <div>
                <h3 className="font-bold text-purple-900">Presidents at War</h3>
                <p className="text-purple-700 text-xs">Presidential war records</p>
              </div>
            </div>
            <p className="text-purple-800 text-sm">
              See which presidents were involved in this and other conflicts →
            </p>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href={`/eras/${slugify(c.era)}`} className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md hover:border-slate-300 transition text-center group">
            <div className="w-8 h-8 bg-slate-100 group-hover:bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-2 transition-colors">
              <span className="text-slate-600 text-sm">📅</span>
            </div>
            <p className="text-sm font-semibold text-slate-900">{c.era}</p>
            <p className="text-xs text-slate-500">View Era →</p>
          </Link>
          
          <Link href={`/regions/${slugify(c.region)}`} className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md hover:border-slate-300 transition text-center group">
            <div className="w-8 h-8 bg-slate-100 group-hover:bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-2 transition-colors">
              <span className="text-slate-600 text-sm">🌍</span>
            </div>
            <p className="text-sm font-semibold text-slate-900">{c.region}</p>
            <p className="text-xs text-slate-500">View Region →</p>
          </Link>

          {c.countries?.slice(0, 2).map((co: string) => (
            <Link key={co} href={`/countries/${slugify(co)}`} className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md hover:border-slate-300 transition text-center group">
              <div className="w-8 h-8 bg-slate-100 group-hover:bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-2 transition-colors">
                <span className="text-slate-600 text-sm">🏴</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">{co}</p>
              <p className="text-xs text-slate-500">View Country →</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Related Conflicts */}
      {allRelated.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Conflicts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allRelated.map((r: any) => (
              <Link key={r.id} href={`/conflicts/${r.id}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
                <h3 className="font-semibold">{r.shortName || r.name}</h3>
                <p className="text-muted text-sm">{r.startYear}–{r.endYear || 'Present'}</p>
                <p className="text-primary font-bold text-sm mt-1">{fmtMoney(r.costInflationAdjusted)}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

        <BackToTop />
      </div>
    </>
  )
}
