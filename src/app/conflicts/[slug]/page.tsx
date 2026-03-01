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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Conflicts', href: '/conflicts' }, { label: c.shortName || c.name }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <Link href={`/eras/${slugify(c.era)}`} className="text-stone-400 text-sm hover:text-white">{c.era}</Link>
          <span className="text-stone-400 text-sm">· {c.type.replace(/_/g, ' ')}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            c.outcome?.includes('Victory') ? 'bg-green-600/20 text-green-400' :
            c.outcome?.includes('Defeat') ? 'bg-red-600/20 text-red-400' :
            c.outcome?.includes('Ongoing') || c.outcome?.includes('Developing') ? 'bg-orange-600/20 text-orange-400' :
            'bg-yellow-600/20 text-yellow-400'
          }`}>{c.outcome || 'Developing'}</span>
          {!c.endYear && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-orange-600/20 text-orange-400 animate-pulse">● Ongoing</span>
          )}
          {!c.congressionalAuth && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-red-600/20 text-red-400">No Congressional Authorization</span>
          )}
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-2">{c.name}</h1>
        <p className="text-stone-400">{c.startYear}–{c.endYear || 'Present'}{c.computed?.durationYears ? ` (${c.computed.durationYears} years)` : ''} · {c.region} · {c.countries?.map((co: string, i: number) => <span key={co}>{i > 0 && ', '}<Link href={`/countries/${slugify(co)}`} className="hover:text-white">{co}</Link></span>)}</p>
        <p className="text-stone-300 mt-3">{c.description}</p>
      </div>

      <ShareButtons title={c.name} />

      {/* AI Overview */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-blue-900 mb-3">🧠 Key Insights</h3>
        <ul className="space-y-2 text-sm text-blue-900">
          {costPerTaxpayer > 0 && (
            <li>• <strong>This conflict cost ${fmt(costPerTaxpayer)} per taxpayer</strong> — {fmtMoney(c.costInflationAdjusted)} in total (2023 dollars){c.usCasualties?.deaths > 0 ? `, or ${fmtMoney(Math.round(c.costInflationAdjusted / c.usCasualties.deaths))} per American life lost` : ''}.</li>
          )}
          {c.civilianDeaths > 0 && c.usCasualties?.deaths > 0 && (
            <li>• <strong>For every American soldier killed, approximately {Math.round(c.civilianDeaths / c.usCasualties.deaths)} civilians died</strong> — {fmt(c.civilianDeaths)} civilian deaths vs. {fmt(c.usCasualties.deaths)} US deaths.</li>
          )}
          {c.computed?.durationYears > 0 && (
            <li>• <strong>This conflict lasted {c.computed.durationYears} year{c.computed.durationYears !== 1 ? 's' : ''}</strong>{c.usCasualties?.deaths > 0 ? ` — approximately ${fmt(Math.round(c.usCasualties.deaths / c.computed.durationYears))} American deaths per year` : ''}.</li>
          )}
          {!c.congressionalAuth && (
            <li>• <strong>This conflict was waged without congressional authorization</strong> — a violation of Article I, Section 8 of the Constitution, which vests the war power exclusively in Congress.</li>
          )}
          {!c.endYear && (
            <li>• <strong>This conflict is still ongoing</strong> — with no defined end state, no exit strategy, and continuing costs to American taxpayers and service members.</li>
          )}
        </ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(c.costInflationAdjusted)}</p>
          <p className="text-xs text-muted">Cost (2023 dollars)</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) : '—'}</p>
          <p className="text-xs text-muted">US Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{c.civilianDeaths ? fmt(c.civilianDeaths) : 'Unknown'}</p>
          <p className="text-xs text-muted">Civilian Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{c.troopsDeployed ? fmt(c.troopsDeployed) : '—'}</p>
          <p className="text-xs text-muted">Troops Deployed</p>
        </div>
      </div>

      {/* Computed Stats */}
      {c.computed && <ConflictStatsGrid computed={c.computed} />}

      {/* What Led to This — Narrative */}
      {c.narrative && (
        <div className="bg-white rounded-lg p-6 mb-8 border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">📖 What Led to This</h2>
          <div className="prose prose-stone max-w-none space-y-4">
            {(c.narrative as string).split('\n\n').map((p: string, i: number) => (
              <p key={i} className="text-stone-700 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      )}

      {/* Key Quote */}
      {c.keyQuote && (
        <div className="bg-stone-900 rounded-lg p-6 mb-8">
          <blockquote className="border-l-4 border-red-700 pl-6">
            <p className="text-white text-lg italic leading-relaxed">&ldquo;{(c.keyQuote as any).text}&rdquo;</p>
            <footer className="text-stone-400 mt-3 text-sm">— {(c.keyQuote as any).attribution}</footer>
          </blockquote>
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

      {/* What It Cost You */}
      {costPerTaxpayer > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-amber-900">💸 What It Cost You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-700">{fmtMoney(c.costInflationAdjusted)}</p>
              <p className="text-xs text-amber-600">Total Cost (2023 $)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-700">${fmt(costPerTaxpayer)}</p>
              <p className="text-xs text-amber-600">Per Taxpayer</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-700">{c.usCasualties?.deaths > 0 ? fmtMoney(Math.round(c.costInflationAdjusted / c.usCasualties.deaths)) : '—'}</p>
              <p className="text-xs text-amber-600">Cost Per US Death</p>
            </div>
          </div>
          {c.costBreakdown && (
            <div className="mt-4 pt-4 border-t border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">Where the Money Went</h3>
              <p className="text-amber-800 text-sm leading-relaxed">{c.costBreakdown}</p>
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

      {/* Congressional Authorization / Constitutional Analysis */}
      <div className={`rounded-lg p-6 mb-8 border ${c.congressionalAuth ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
          ⚖️ Constitutional Analysis: {c.congressionalAuth ? '✅ Authorized' : '❌ No Congressional Authorization'}
        </h2>
        <p className="text-muted mb-3">{c.authDetail}</p>
        <div className={`text-sm leading-relaxed ${c.congressionalAuth ? 'text-green-800' : 'text-red-800'}`}>
          {getConstitutionalAnalysis(c)}
        </div>
      </div>

      {/* Key Events */}
      {c.keyEvents?.length > 0 && (
        <div className="bg-white rounded-lg p-6 mb-8 border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">📅 Key Events</h2>
          <ul className="space-y-2">
            {c.keyEvents.map((e: any, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>{typeof e === 'string' ? e : <><strong className="text-stone-700">{e.year}</strong> — {e.event}</>}</span>
              </li>
            ))}
          </ul>
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

      {/* Did You Know? */}
      {c.didYouKnow && (c.didYouKnow as string[]).length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-amber-900">💡 Did You Know?</h2>
          <ul className="space-y-3">
            {(c.didYouKnow as string[]).map((fact: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-amber-600 font-bold mt-0.5">•</span>
                <span className="text-amber-900">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Figures */}
      {c.keyFigures && (c.keyFigures as any[]).length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">👤 Key Figures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(c.keyFigures as any[]).map((fig: any, i: number) => (
              <div key={i} className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-stone-900">{fig.name}</h3>
                <p className="text-sm text-muted">{fig.role}</p>
                <p className="text-sm text-stone-600 mt-1">{fig.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Controversies */}
      {c.controversies && (c.controversies as string[]).length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">⚡ Controversies</h2>
          <div className="space-y-3">
            {(c.controversies as string[]).map((item: string, i: number) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* What They Said — Multiple Quotes */}
      {additionalQuotes.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">🗣️ What They Said</h2>
          <div className="space-y-4">
            {additionalQuotes.map((q, i) => (
              <div key={i} className="bg-stone-100 rounded-lg p-5 border-l-4 border-stone-400">
                <p className="text-stone-800 italic leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                <p className="text-stone-500 mt-2 text-sm">— {q.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Legacy & Impact */}
      {c.legacyImpact && (
        <div className="bg-stone-50 rounded-lg p-6 mb-8 border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">🏛️ Legacy &amp; Impact</h2>
          <p className="text-stone-700 leading-relaxed">{c.legacyImpact}</p>
        </div>
      )}

      {/* The Libertarian Case */}
      <div className="bg-stone-900 text-white rounded-lg p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">🗽 The Libertarian Case</h2>
        <p className="text-stone-300 italic leading-relaxed">{getLibertarianCase(c)}</p>
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

      {/* Explore More */}
      <div className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">🔗 Explore More</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href={`/eras/${slugify(c.era)}`} className="bg-white rounded-lg border p-3 hover:shadow-md transition text-center">
            <p className="text-sm font-semibold text-primary">{c.era}</p>
            <p className="text-xs text-muted">View Era →</p>
          </Link>
          <Link href={`/regions/${slugify(c.region)}`} className="bg-white rounded-lg border p-3 hover:shadow-md transition text-center">
            <p className="text-sm font-semibold text-primary">{c.region}</p>
            <p className="text-xs text-muted">View Region →</p>
          </Link>
          {c.countries?.slice(0, 2).map((co: string) => (
            <Link key={co} href={`/countries/${slugify(co)}`} className="bg-white rounded-lg border p-3 hover:shadow-md transition text-center">
              <p className="text-sm font-semibold text-primary">{co}</p>
              <p className="text-xs text-muted">View Country →</p>
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
  )
}
