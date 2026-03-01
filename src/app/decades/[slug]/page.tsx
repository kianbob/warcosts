import { PresidentSpendingChart } from '@/components/charts/PresidentSpendingChart'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

const decades = ['1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s']

const decadeNarratives: Record<string, string> = {
  '1940s': 'The 1940s were defined by World War II — the largest mobilization in American history. Military spending consumed 40% of GDP at its peak, 16 million Americans served, and 405,000 died. The war ended the Great Depression, created the military-industrial complex Eisenhower would later warn about, and launched the nuclear age. The decade ended with the beginning of the Cold War, the creation of NATO, and the national security state (CIA, NSC, Department of Defense) that would shape American military policy for the next 75 years.',
  '1950s': 'The 1950s saw the Korean War kill 36,574 Americans in three years while America built a permanent global military infrastructure. The CIA conducted its first regime-change operations in Iran (1953) and Guatemala (1954) — covert actions whose blowback continues today. Military spending remained at Cold War levels despite the Korean armistice, and the doctrine of "massive retaliation" placed nuclear weapons at the center of American defense strategy. Domestically, McCarthyism used the Red Scare to suppress dissent.',
  '1960s': 'The 1960s were America\'s most turbulent military decade since the Civil War. Vietnam escalated from 16,000 "advisors" in 1963 to 536,000 troops by 1968, tearing the country apart. The Cuban Missile Crisis brought the world to the brink of nuclear annihilation. The CIA was involved in the Dominican Republic intervention and the Chile destabilization. The anti-war movement became the largest protest movement in American history, and the decade ended with 58,000 Americans dead or dying in Southeast Asia.',
  '1970s': 'The 1970s saw the bitter end of Vietnam — the fall of Saigon in 1975 marked America\'s first clear military defeat. The Pentagon Papers revealed systematic government lying. The Church Committee exposed CIA assassination plots, domestic surveillance, and covert operations worldwide. The War Powers Resolution (1973) attempted to reassert congressional control over military deployments. Support for the Chilean coup and its aftermath demonstrated that covert warfare continued even as overt intervention became politically toxic.',
  '1980s': 'Ronald Reagan\'s military buildup defined the 1980s — defense spending surged from $144B to $303B annually. The Grenada invasion, Lebanon deployment (241 Marines killed), Iran-Contra scandal, and support for anti-Soviet guerrillas in Afghanistan all reflected a return to aggressive interventionism. The Soviet Union collapsed at decade\'s end, but the mujahideen the CIA had armed in Afghanistan would become the Taliban and al-Qaeda — the ultimate example of blowback.',
  '1990s': 'The post-Cold War decade promised a "peace dividend" that never fully materialized. Instead, the U.S. found new military missions: the Gulf War (1991), Somalia (1993), Bosnia (1995), Kosovo (1999), and cruise missile strikes on Sudan and Afghanistan. The Gulf War showcased American military superiority but left Saddam in power. Somalia\'s failure created the "Mogadishu effect," contributing to inaction during the Rwandan genocide. Kosovo established the precedent of humanitarian bombing without congressional authorization.',
  '2000s': 'September 11, 2001 launched the most expensive decade of military operations since World War II. Afghanistan and Iraq together cost over $4 trillion, killed nearly 7,000 Americans, and destabilized the entire Middle East. The decade saw the authorization of torture, warrantless surveillance, indefinite detention at Guantanamo, and the global drone campaign. The 2001 AUMF — 60 words — became the legal foundation for a permanent global war. By decade\'s end, it was clear that neither war had achieved its objectives.',
  '2010s': 'The 2010s saw the War on Terror metastasize: Libya intervention (2011), Syrian civil war involvement, the rise and fall of ISIS, drone campaigns across Africa and the Middle East, and the never-ending operations in Afghanistan and Iraq. Obama conducted more drone strikes than Bush. The Afghanistan Papers revealed systematic lying about the war\'s progress. Military spending remained at historically elevated levels despite no existential threat. The decade ended with over 800 U.S. military bases in 70+ countries.',
  '2020s': 'The 2020s opened with the chaotic Afghanistan withdrawal (2021), ending America\'s longest war — but not its military commitments. The Ukraine proxy war ($66.9B and counting), Red Sea operations against Houthis, ongoing counter-terrorism in Africa and the Middle East, and the 2026 Iran strikes demonstrate that the era of "endless wars" shows no sign of ending. Military spending has exceeded $800B annually, and the 2001 AUMF remains the legal basis for operations against groups that didn\'t exist on 9/11.',
}

const decadeCulture: Record<string, string> = {
  '1940s': 'Massive home-front mobilization — "Rosie the Riveter," victory gardens, rationing, and war bonds. Hollywood produced propaganda films. The Greatest Generation narrative emerged. Japanese internment camps held 120,000 Americans.',
  '1950s': 'McCarthyism and the Red Scare dominated domestic politics. "Duck and cover" drills in schools. The military-industrial complex grew as defense contractors became major employers. Beat Generation writers like Ginsberg questioned conformist culture.',
  '1960s': 'The anti-Vietnam War movement became the largest protest movement in American history. Draft card burnings, the March on the Pentagon, Kent State shootings. The counterculture challenged militarism. "Hey, hey, LBJ, how many kids did you kill today?"',
  '1970s': 'Post-Vietnam disillusionment. The Pentagon Papers shattered trust in government. Veterans returned to hostility rather than parades. The "Vietnam Syndrome" — public aversion to military intervention — defined the decade.',
  '1980s': 'Reagan\'s "Morning in America" narrative celebrated military strength. "Top Gun" made naval aviation cool. The Rambo films reimagined Vietnam as a winnable war. Yellow ribbons for hostages. Military spending as patriotism.',
  '1990s': 'CNN\'s "video game war" coverage of the Gulf War sanitized combat. "Black Hawk Down" shaped public understanding of Somalia. The "end of history" thesis suggested liberal democracy had permanently won. Military service rates declined.',
  '2000s': '"Support the troops" became mandatory patriotism. The Patriot Act expanded surveillance. Abu Ghraib photos shocked the world. Anti-war protests drew millions globally. "Freedom fries" and "you\'re either with us or against us."',
  '2010s': 'Drone warfare became normalized. Edward Snowden revealed mass surveillance. "Lone survivor" and "American Sniper" dominated war film. The "forever wars" narrative emerged. Veterans\' mental health crisis — 22 suicides per day.',
  '2020s': 'The chaotic Kabul withdrawal dominated headlines. "Was it worth it?" became the defining question of the Afghan war. Ukraine support became partisan. Military recruitment crisis — all services missed targets. The all-volunteer force showed signs of strain.',
}

export async function generateStaticParams() {
  return decades.map(d => ({ slug: d }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  if (!decades.includes(slug)) return { title: 'Decade Not Found' }
  return {
    title: `The ${slug} — US Military Spending & Conflicts`,
    description: `US military spending, active conflicts, and key events of the ${slug}. Decade-by-decade analysis of American war costs.`,
  }
}

export default async function DecadeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!decades.includes(slug)) notFound()

  const decadeStart = parseInt(slug)
  const decadeEnd = decadeStart + 9

  const spending = loadData('military-spending.json')
  const conflicts = loadData('conflicts.json')
  const presidents = loadData('presidents.json')

  const decadeSpending = spending.filter((s: any) => s.year >= decadeStart && s.year <= decadeEnd)
  const totalSpending = decadeSpending.reduce((s: number, r: any) => s + r.amount, 0)
  const avgSpending = decadeSpending.length > 0 ? totalSpending / decadeSpending.length : 0
  const maxSpending = decadeSpending.length > 0 ? Math.max(...decadeSpending.map((s: any) => s.amount)) : 0
  const minSpending = decadeSpending.length > 0 ? Math.min(...decadeSpending.map((s: any) => s.amount)) : 0

  const activeConflicts = conflicts.filter((c: any) =>
    c.startYear <= decadeEnd && (c.endYear >= decadeStart || !c.endYear)
  )
  const startedConflicts = conflicts.filter((c: any) => c.startYear >= decadeStart && c.startYear <= decadeEnd)
  const endedConflicts = conflicts.filter((c: any) => c.endYear >= decadeStart && c.endYear <= decadeEnd)

  const totalCost = activeConflicts.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalDeaths = activeConflicts.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)
  const totalCivDeaths = activeConflicts.reduce((s: number, c: any) => s + (c.civilianDeaths || 0), 0)
  const authorizedCount = activeConflicts.filter((c: any) => c.congressionalAuth).length
  const unauthorizedCount = activeConflicts.filter((c: any) => !c.congressionalAuth).length

  const decadePresidents = [...new Set(decadeSpending.map((s: any) => s.president))] as string[]
  const narrative = decadeNarratives[slug] || ''
  const culture = decadeCulture[slug] || ''

  // Decade index for navigation
  const decadeIdx = decades.indexOf(slug)
  const prevDecade = decadeIdx > 0 ? decades[decadeIdx - 1] : null
  const nextDecade = decadeIdx < decades.length - 1 ? decades[decadeIdx + 1] : null

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Decades', href: '/decades' }, { label: `The ${slug}` }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">The {slug}</h1>
        <p className="text-stone-400 mt-2">{activeConflicts.length} active conflicts · {decadePresidents.length > 0 ? decadePresidents.join(', ') : 'N/A'}</p>
        {startedConflicts.length > 0 && <p className="text-stone-500 text-sm mt-1">{startedConflicts.length} conflict{startedConflicts.length > 1 ? 's' : ''} started · {endedConflicts.length} ended</p>}
      </div>

      <ShareButtons title={`The ${slug} — US Military Spending`} />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">${totalSpending.toFixed(0)}B</p>
          <p className="text-xs text-muted">Military Budget (Total)</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{activeConflicts.length}</p>
          <p className="text-xs text-muted">Active Conflicts</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</p>
          <p className="text-xs text-muted">War Cost</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(totalDeaths)}</p>
          <p className="text-xs text-muted">US Deaths</p>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
        <div className="bg-white rounded-lg p-3 shadow-sm border text-center">
          <p className="text-lg font-bold text-primary">${avgSpending.toFixed(0)}B</p>
          <p className="text-xs text-muted">Avg/Year</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border text-center">
          <p className="text-lg font-bold text-primary">${maxSpending.toFixed(0)}B</p>
          <p className="text-xs text-muted">Peak Year</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border text-center">
          <p className="text-lg font-bold text-primary">${minSpending.toFixed(0)}B</p>
          <p className="text-xs text-muted">Low Year</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border text-center">
          <p className="text-lg font-bold text-red-700">{totalCivDeaths > 0 ? fmt(totalCivDeaths) : '—'}</p>
          <p className="text-xs text-muted">Civilian Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border text-center">
          <p className="text-lg font-bold text-green-700">{authorizedCount}</p>
          <p className="text-xs text-muted">Authorized</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border text-center">
          <p className="text-lg font-bold text-red-700">{unauthorizedCount}</p>
          <p className="text-xs text-muted">Unauthorized</p>
        </div>
      </div>

      {/* Decade Narrative */}
      {narrative && (
        <div className="bg-white rounded-lg p-6 mb-8 border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">📖 The {slug} in Context</h2>
          <p className="text-stone-700 leading-relaxed">{narrative}</p>
        </div>
      )}

      {/* Spending Chart */}
      {decadeSpending.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">📊 Military Spending Trend</h2>
          <PresidentSpendingChart data={decadeSpending} />
          {maxSpending > minSpending * 2 && (
            <p className="text-sm text-muted mt-3">
              Spending ranged from ${minSpending.toFixed(0)}B to ${maxSpending.toFixed(0)}B — a {((maxSpending / minSpending - 1) * 100).toFixed(0)}% variation reflecting wartime surges and peacetime drawdowns.
            </p>
          )}
        </div>
      )}

      {/* Cultural Context */}
      {culture && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-amber-900">🎭 Cultural Context</h2>
          <p className="text-amber-900 leading-relaxed">{culture}</p>
        </div>
      )}

      {/* Presidents */}
      {decadePresidents.length > 0 && (
        <div className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🏛️ Presidents</h2>
          <div className="flex flex-wrap gap-3">
            {decadePresidents.map((name: string) => {
              const pres = presidents.find((p: any) => p.name === name)
              return (
                <Link key={name} href={`/presidents/${slugify(name)}`} className="bg-white rounded-lg border px-4 py-3 hover:shadow-md transition">
                  <p className="font-semibold">{name}</p>
                  {pres && <p className="text-xs text-muted">{pres.conflicts.length} conflicts · {fmtMoney(pres.totalCost)}</p>}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Conflicts Started This Decade */}
      {startedConflicts.length > 0 && (
        <div className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🔥 Conflicts Started</h2>
          <div className="space-y-3">
            {startedConflicts.map((c: any) => (
              <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-lg border p-4 hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{c.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    c.congressionalAuth ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>{c.congressionalAuth ? '✅' : '❌'}</span>
                  <span className="text-xs text-muted">{c.era}</span>
                </div>
                <p className="text-sm text-muted">{c.startYear}–{c.endYear || 'Present'} · {fmtMoney(c.costInflationAdjusted)} · {c.outcome}</p>
                {c.keyQuote && <p className="text-xs italic text-stone-400 mt-1">&ldquo;{(c.keyQuote as any).text.substring(0, 100)}...&rdquo;</p>}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Active Conflicts */}
      <div className="mt-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">⚔️ All Active Conflicts</h2>
        <div className="space-y-3">
          {activeConflicts.map((c: any) => (
            <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-lg border p-4 hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">{c.name}</h3>
                <span className="text-xs text-muted">{c.era}</span>
              </div>
              <p className="text-sm text-muted">{c.startYear}–{c.endYear || 'Present'} · {fmtMoney(c.costInflationAdjusted)} · {c.outcome}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Key Events */}
      {activeConflicts.some((c: any) => c.keyEvents?.length > 0) && (
        <div className="mt-8 bg-white rounded-lg border p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">📅 Key Events</h2>
          <ul className="space-y-2">
            {activeConflicts.flatMap((c: any) =>
              (c.keyEvents || []).filter((e: any) => {
                const y = typeof e === 'object' ? e.year : null
                if (!y) return false
                return y >= decadeStart && y <= decadeEnd
              }).map((e: any) => ({ ...(typeof e === 'object' ? e : { event: e }), conflict: c.shortName || c.name }))
            ).sort((a: any, b: any) => (a.year || 0) - (b.year || 0))
            .map((e: any, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>{e.year && <strong className="text-stone-700">{e.year}</strong>} {e.event} <span className="text-stone-400 text-sm">— {e.conflict}</span></span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Decade Navigation */}
      <div className="flex justify-between mt-8 mb-8">
        {prevDecade ? (
          <Link href={`/decades/${prevDecade}`} className="bg-white rounded-lg border px-4 py-3 hover:shadow-md transition">
            <p className="text-xs text-muted">← Previous</p>
            <p className="font-semibold">The {prevDecade}</p>
          </Link>
        ) : <div />}
        {nextDecade ? (
          <Link href={`/decades/${nextDecade}`} className="bg-white rounded-lg border px-4 py-3 hover:shadow-md transition text-right">
            <p className="text-xs text-muted">Next →</p>
            <p className="font-semibold">The {nextDecade}</p>
          </Link>
        ) : <div />}
      </div>

      <BackToTop />
    </div>
  )
}
