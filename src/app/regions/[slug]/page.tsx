import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { EraCharts } from '@/components/charts/EraCharts'

const regionMap: Record<string, string[]> = {
  'middle-east': ['Middle East'],
  'europe': ['Europe', 'Europe / Pacific / North Africa'],
  'east-asia': ['East Asia'],
  'africa': ['North Africa', 'East Africa', 'Africa'],
  'central-america': ['Central America'],
  'caribbean': ['Caribbean', 'Atlantic Ocean / Caribbean', 'Caribbean / Pacific'],
  'south-america': ['South America'],
  'southeast-asia': ['Southeast Asia'],
  'central-asia': ['Central Asia'],
  'pacific': ['Pacific'],
}

const regionNames: Record<string, string> = {
  'middle-east': 'Middle East',
  'europe': 'Europe',
  'east-asia': 'East Asia',
  'africa': 'Africa',
  'central-america': 'Central America',
  'caribbean': 'Caribbean',
  'south-america': 'South America',
  'southeast-asia': 'Southeast Asia',
  'central-asia': 'Central Asia',
  'pacific': 'Pacific',
}

const regionNarratives: Record<string, string> = {
  'middle-east': 'The Middle East has been the primary theater of American military operations since 1990, costing trillions of dollars and hundreds of thousands of lives. From the Gulf War through the Iraq invasion, Syrian civil war, Yemen support, and Iran confrontation, the U.S. has maintained a massive and growing military presence in a region that produces a declining share of American energy imports. The pattern is consistent: each intervention creates instability that justifies the next intervention, in a self-perpetuating cycle of war that benefits defense contractors and harms everyone else.',
  'europe': 'America\'s military relationship with Europe began with World War I and became permanent after World War II. Today, the U.S. maintains approximately 65,000 troops across Europe — 80 years after the original threat (Nazi Germany) was destroyed and 30+ years after the secondary threat (the Soviet Union) collapsed. The Ukraine proxy war has revitalized NATO but also demonstrated Europe\'s continued military dependence on the United States, raising the question: should American taxpayers subsidize the defense of some of the world\'s wealthiest nations?',
  'east-asia': 'East Asia has been a theater of American military operations since the Korean War, with permanent bases in Japan and South Korea housing over 80,000 troops. The Korean War\'s frozen conflict means the U.S. is technically still at war 70+ years later. The growing confrontation with China has increased military deployments and spending in the region, despite China\'s military threat being primarily to its immediate neighbors rather than to the American homeland.',
  'africa': 'U.S. military involvement in Africa has expanded dramatically since 9/11, with AFRICOM conducting operations across the continent — from Somalia to the Sahel to Libya. Most Americans are unaware their country is conducting military operations in dozens of African countries. The Sahel deployments, exposed by the 2017 Niger ambush, demonstrated that secret wars in countries most Americans can\'t locate on a map can cost American lives with no strategic benefit.',
  'central-america': 'The U.S. has intervened repeatedly in Central America since the early 20th century, supporting military coups, funding death squads, and arming rebel groups. The Guatemala coup (1954), support for Honduran contras, and involvement in the Salvadoran civil war killed hundreds of thousands of Central Americans. The resulting instability, violence, and poverty are primary drivers of migration to the United States — the very "border crisis" that intervention was supposed to prevent.',
  'caribbean': 'From the Spanish-American War through the occupations of Haiti, the Dominican Republic, Cuba, and Grenada, the Caribbean has been treated as an American lake. The Monroe Doctrine and its Roosevelt Corollary established U.S. dominance over the region. Interventions have installed and removed governments, supported dictators, and imposed economic policies — all while claiming to promote democracy. The pattern of intervention creating instability that justifies more intervention is clearly visible.',
  'south-america': 'U.S. military and intelligence involvement in South America peaked during the Cold War, with the CIA supporting coups in Chile (1973), Brazil (1964), and Argentina (1976), and backing Operation Condor — a network of South American dictatorships that assassinated political opponents across the continent. The "drug war" extended military involvement into Colombia, Bolivia, and Peru. The legacy: decades of authoritarian rule, human rights abuses, and deep anti-American sentiment.',
  'southeast-asia': 'Southeast Asia was the theater of America\'s most traumatic military experience — the Vietnam War, which killed 58,220 Americans and millions of Southeast Asians. The war expanded illegally into Cambodia (producing the Khmer Rouge genocide) and Laos (the most bombed country per capita in history). The region has largely recovered and prospered since American withdrawal — evidence that intervention was unnecessary for the outcome the U.S. wanted.',
  'central-asia': 'Afghanistan — America\'s longest war — dominates Central Asian involvement. Twenty years, $2.3 trillion, and 2,461 American deaths produced exactly nothing: the Taliban returned to power within weeks of withdrawal. The Afghanistan experience should be the definitive case study against nation-building by military force.',
  'pacific': 'The Pacific has been an American strategic priority since WWII, with bases across Guam, Hawaii, Japan, and Australia. The "pivot to Asia" has increased military deployments as tensions with China grow. The question for libertarians: does defending shipping lanes thousands of miles from America justify the enormous cost of maintaining a Pacific military empire?',
}

const regionGeopolitics: Record<string, string> = {
  'middle-east': 'The U.S. maintains approximately 45,000 troops across the Middle East, with major bases in Qatar (Al Udeid), Bahrain (Fifth Fleet HQ), Kuwait, Iraq, and Syria. The carrier strike groups rotating through the region cost billions annually. The stated rationale — protecting oil supplies — is increasingly dubious as the U.S. becomes energy independent.',
  'europe': 'NATO\'s 32 member nations collectively spend over $1 trillion on defense, with the U.S. providing roughly 70% of the alliance\'s military capability. U.S. bases in Germany (Ramstein, Landstuhl), Italy (Aviano, Sigonella), and the UK (Lakenheath, Mildenhall) form the backbone of American power projection into Africa and the Middle East.',
  'east-asia': 'The U.S. maintains the world\'s largest overseas military concentrations in Japan (54,000 troops, 120+ facilities) and South Korea (28,500 troops). These forward-deployed forces are the centerpiece of the Indo-Pacific strategy, but they also serve as tripwires that could drag the U.S. into conflicts over issues that don\'t directly threaten American security.',
  'africa': 'AFRICOM, established in 2007, oversees U.S. military operations across 53 African countries from its headquarters in Stuttgart, Germany (notably, no African country would host it). Operations span counterterrorism in Somalia and the Sahel, training missions, and the $110 million drone base in Niger that was handed to Russian-aligned forces after the 2023 coup.',
}

export async function generateStaticParams() {
  return Object.keys(regionMap).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const name = regionNames[slug]
  if (!name) return { title: 'Region Not Found' }
  return {
    title: `${name} — US Military Involvement`,
    description: `All US military conflicts, bases, and deployments in ${name}. Cost, casualty, and historical analysis.`,
  }
}

export default async function RegionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const name = regionNames[slug]
  const matchRegions = regionMap[slug]
  if (!name || !matchRegions) notFound()

  const conflicts = loadData('conflicts.json')
  const presence = loadData('overseas-presence.json')

  const regionConflicts = conflicts.filter((c: any) =>
    matchRegions.some((r: string) => c.region?.includes(r))
  )
  const totalCost = regionConflicts.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalDeaths = regionConflicts.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)
  const civDeaths = regionConflicts.reduce((s: number, c: any) => s + (c.civilianDeaths || 0), 0)
  const authorizedCount = regionConflicts.filter((c: any) => c.congressionalAuth).length
  const unauthorizedCount = regionConflicts.filter((c: any) => !c.congressionalAuth).length

  // Find all unique countries in this region's conflicts
  const regionCountries = [...new Set(regionConflicts.flatMap((c: any) => c.countries || []))].sort() as string[]

  // Find deployments in this region
  const countryRegionMap: Record<string, string> = {
    'Japan': 'east-asia', 'South Korea': 'east-asia', 'Germany': 'europe', 'Italy': 'europe',
    'United Kingdom': 'europe', 'Bahrain': 'middle-east', 'Qatar': 'middle-east', 'Kuwait': 'middle-east',
    'Turkey': 'middle-east', 'Iraq': 'middle-east', 'Syria': 'middle-east', 'Afghanistan': 'central-asia',
    'Djibouti': 'africa', 'Honduras': 'central-america', 'Cuba': 'caribbean', 'Australia': 'pacific',
    'Guam': 'pacific', 'Diego Garcia': 'pacific',
  }
  const regionDeployments = presence.topDeployments?.filter((d: any) => countryRegionMap[d.country] === slug) || []
  const totalTroops = regionDeployments.reduce((s: number, d: any) => s + (d.troops || 0), 0)
  const totalBases = regionDeployments.reduce((s: number, d: any) => s + (d.bases || 0), 0)
  const totalAnnualCost = regionDeployments.reduce((s: number, d: any) => s + (d.annualCost || 0), 0)

  const narrative = regionNarratives[slug] || ''
  const geopolitics = regionGeopolitics[slug] || ''

  // Sort conflicts by cost
  const sortedByCost = [...regionConflicts].sort((a: any, b: any) => (b.costInflationAdjusted || 0) - (a.costInflationAdjusted || 0))

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Regions' }, { label: name }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">{name}</h1>
        <p className="text-stone-400 mt-2">{regionConflicts.length} conflicts · {fmtMoney(totalCost)} total cost{totalTroops > 0 ? ` · ${fmt(totalTroops)} troops stationed` : ''}</p>
      </div>

      <ShareButtons title={`${name} — US Military Involvement`} />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</p>
          <p className="text-xs text-muted">Total Cost</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(totalDeaths)}</p>
          <p className="text-xs text-muted">US Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{civDeaths > 0 ? fmt(civDeaths) : '—'}</p>
          <p className="text-xs text-muted">Civilian Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{regionConflicts.length}</p>
          <p className="text-xs text-muted">Conflicts</p>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div className="bg-green-50 rounded-lg p-3 border border-green-200 text-center">
          <p className="text-lg font-bold text-green-700">{authorizedCount}</p>
          <p className="text-xs text-green-600">Authorized</p>
        </div>
        <div className="bg-red-50 rounded-lg p-3 border border-red-200 text-center">
          <p className="text-lg font-bold text-red-700">{unauthorizedCount}</p>
          <p className="text-xs text-red-600">Unauthorized</p>
        </div>
        {totalTroops > 0 && (
          <div className="bg-white rounded-lg p-3 border text-center">
            <p className="text-lg font-bold text-primary">{fmt(totalTroops)}</p>
            <p className="text-xs text-muted">Current Troops</p>
          </div>
        )}
        {totalBases > 0 && (
          <div className="bg-white rounded-lg p-3 border text-center">
            <p className="text-lg font-bold text-primary">{totalBases}</p>
            <p className="text-xs text-muted">Military Bases</p>
          </div>
        )}
      </div>

      {/* Regional Narrative */}
      {narrative && (
        <div className="bg-white rounded-lg p-6 mb-8 border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">📖 Pattern of US Intervention in {name}</h2>
          <p className="text-stone-700 leading-relaxed">{narrative}</p>
        </div>
      )}

      {/* Charts */}
      {regionConflicts.length > 0 && <EraCharts conflicts={regionConflicts} />}

      {/* Geopolitical Analysis */}
      {geopolitics && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-amber-900">🌍 Current US Military Footprint</h2>
          <p className="text-amber-900 leading-relaxed">{geopolitics}</p>
          {totalAnnualCost > 0 && (
            <p className="text-amber-800 font-semibold mt-3">Current annual cost of maintaining bases in {name}: {fmtMoney(totalAnnualCost)}</p>
          )}
        </div>
      )}

      {/* Countries */}
      {regionCountries.length > 0 && (
        <div className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🗺️ Countries</h2>
          <div className="flex flex-wrap gap-3">
            {regionCountries.map((co: string) => (
              <Link key={co} href={`/countries/${slugify(co)}`} className="bg-white rounded-lg border px-4 py-2 hover:shadow-md transition">
                <span className="font-semibold">{co}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Conflicts sorted by cost */}
      <div className="mt-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">⚔️ Conflicts in {name}</h2>
        <div className="space-y-3">
          {sortedByCost.map((c: any) => (
            <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-lg border p-4 hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">{c.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  c.outcome?.includes('Victory') ? 'bg-green-100 text-green-700' :
                  c.outcome?.includes('Defeat') ? 'bg-red-100 text-red-700' :
                  c.outcome?.includes('Ongoing') ? 'bg-orange-100 text-orange-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>{c.outcome}</span>
                <span className="text-xs text-muted">{c.era}</span>
              </div>
              <p className="text-sm text-muted">{c.startYear}–{c.endYear || 'Present'} · {fmtMoney(c.costInflationAdjusted)} · {c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) + ' US deaths' : 'Covert'}</p>
              <p className="text-xs text-muted mt-1 line-clamp-2">{c.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Current Military Presence */}
      {regionDeployments.length > 0 && (
        <div className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🏗️ Current US Military Presence</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {regionDeployments.map((d: any) => (
              <Link key={d.country} href={`/countries/${slugify(d.country)}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
                <h3 className="font-semibold">{d.country}</h3>
                <p className="text-sm text-muted">{fmt(d.troops)} troops · {d.bases} bases · {fmtMoney(d.annualCost)}/yr</p>
                <p className="text-xs text-muted mt-1">Since {d.since}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Key Quotes from region's conflicts */}
      {regionConflicts.some((c: any) => c.keyQuote) && (
        <div className="mt-8 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">🗣️ Voices from {name}</h2>
          <div className="space-y-3">
            {regionConflicts.filter((c: any) => c.keyQuote).slice(0, 3).map((c: any) => (
              <div key={c.id} className="bg-stone-100 rounded-lg p-4 border-l-4 border-stone-400">
                <p className="text-stone-800 italic">&ldquo;{(c.keyQuote as any).text.substring(0, 150)}{(c.keyQuote as any).text.length > 150 ? '...' : ''}&rdquo;</p>
                <p className="text-stone-500 mt-1 text-sm">— {(c.keyQuote as any).attribution} <span className="text-stone-400">({c.shortName || c.name})</span></p>
              </div>
            ))}
          </div>
        </div>
      )}

      <BackToTop />
    </div>
  )
}
