import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { EraCharts } from '@/components/charts/EraCharts'

const eraContext: Record<string, string> = {
  'Founding Era': 'The birth of American military power. The Revolutionary War established the nation, but also set the precedent for citizen-soldiers and suspicion of standing armies that would define early American defense policy.',
  'Early Republic': 'The young nation flexed its muscles against Barbary pirates and the British Empire again in 1812. These conflicts established American naval power and solidified national sovereignty.',
  'Expansion Era': 'Manifest Destiny drove the United States westward through wars of conquest against Mexico and prolonged campaigns against Native American nations. These wars dramatically expanded US territory at enormous human cost.',
  'Civil War': 'The deadliest conflict in American history tore the nation apart over slavery and states\' rights. The Civil War killed more Americans than all other US wars combined up to that point.',
  'Imperial Era': 'The Spanish-American War marked America\'s emergence as a global imperial power. The acquisition of the Philippines, Puerto Rico, and Guam launched decades of overseas military intervention.',
  'World Wars': 'Two global conflicts transformed the United States from a regional power into the world\'s dominant military force. The scale of mobilization and spending reshaped American society permanently.',
  'Cold War': 'Four decades of confrontation with the Soviet Union produced hot wars in Korea and Vietnam, covert operations across the globe, and a nuclear arsenal capable of ending civilization.',
  'Post-Cold War': 'With the Soviet threat gone, the US military found new missions: humanitarian intervention, drug wars, and policing a "new world order." The peace dividend never fully materialized.',
  'War on Terror': 'The September 11 attacks launched an era of permanent war. Afghanistan, Iraq, drone campaigns, and global surveillance operations have cost trillions and continue with no clear end.',
}

const eraAnalysis: Record<string, string> = {
  'Founding Era': 'The Founders\' deep suspicion of standing armies and executive war powers was born from direct experience. They vested the war power in Congress for a reason — and their warnings about military establishments have proven prophetic. Yet even they couldn\'t resist military adventurism when it suited their purposes.',
  'Early Republic': 'The early conflicts established two dangerous patterns: presidents waging undeclared wars (the Quasi-War) and using military force to protect commercial interests abroad (the Barbary Wars). Both patterns would be repeated for the next two centuries. The War of 1812 demonstrated that wars of choice often achieve nothing at enormous cost.',
  'Expansion Era': 'Manifest Destiny was empire-building dressed up in patriotic language. The Mexican-American War was a war of conquest based on a presidential lie — the exact scenario the Founders tried to prevent by giving Congress the war power. The territory seized reignited the slavery crisis, leading directly to the Civil War. Wars of expansion always have unintended consequences.',
  'Civil War': 'The Civil War presents libertarians with their hardest case: ending slavery required an enormous expansion of federal power, suspension of civil liberties, and unprecedented bloodshed. Yet the war\'s aftermath — Reconstruction\'s failure, Jim Crow, and the expansion of the surveillance state — demonstrates that even the most justified wars create lasting distortions in the relationship between the state and the individual.',
  'Imperial Era': 'The imperial turn of 1898 represents the point where the American republic began its transformation into a global empire. The Spanish-American War, sold as humanitarian intervention in Cuba, became the pretext for colonizing the Philippines. The Anti-Imperialist League\'s warnings that empire would corrupt the republic have been vindicated by every decade since.',
  'World Wars': 'The World Wars created the permanent warfare state. WWII was the last "good war" — the conflict with the clearest moral justification. But even WWII produced Japanese internment, strategic bombing of civilians, and the atomic bomb. The military-industrial complex born in this era became self-perpetuating, ensuring that America would remain on a war footing long after the original threats disappeared.',
  'Cold War': 'The Cold War produced the most dangerous concentration of executive military power in American history. Presidents waged wars in Korea and Vietnam without declarations, the CIA overthrew governments worldwide, and the nuclear arsenal placed civilization\'s survival in the hands of a single individual. The era\'s covert operations — Iran 1953, Guatemala 1954, Chile 1973 — produced blowback that continues to shape global politics.',
  'Post-Cold War': 'The post-Cold War era proved that America\'s military establishment had become self-perpetuating. Without the Soviet threat, the military found new missions — humanitarian intervention, drug wars, nation-building. Each intervention created new problems requiring new interventions. The "peace dividend" was consumed by a military that had become too politically powerful to downsize.',
  'War on Terror': 'The War on Terror represents the culmination of every dangerous trend in American military history: wars without end, executive power without limit, spending without accountability, and surveillance without restraint. A 60-word authorization passed in the shock of 9/11 became the legal basis for permanent global war. The Founders\' worst fears about military power have been realized.',
}

const eraConstitutional: Record<string, string> = {
  'Founding Era': 'The Revolutionary War predated the Constitution. The war power debate was central to the Constitutional Convention — the Founders deliberately gave Congress the power to "declare" war, changing Madison\'s original draft from "make" war to ensure the legislature controlled this most consequential decision.',
  'Early Republic': 'The Quasi-War established the dangerous precedent of undeclared presidential warfare. The Barbary Wars saw Jefferson use force overseas without clear congressional authorization, despite his strict-constructionist philosophy. The War of 1812 is one of the few conflicts where Congress properly exercised its war power.',
  'Expansion Era': 'Polk manufactured the Mexican-American War by placing troops in disputed territory and lying to Congress. Lincoln, then a congressman, challenged this deception with his "Spot Resolutions." The precedent of presidential provocation leading to congressional rubber-stamping was established here.',
  'Civil War': 'Lincoln operated in genuinely unprecedented territory — an internal rebellion didn\'t fit neatly into the constitutional framework for foreign wars. His expansive use of executive power (suspension of habeas corpus, military tribunals, emancipation by proclamation) set precedents that every subsequent wartime president has cited.',
  'Imperial Era': 'Congress declared war on Spain in 1898, but the subsequent Philippine-American War was conducted entirely under executive authority. The imperial era demonstrated that Congress could be manipulated into authorizing wars through manufactured outrage (Remember the Maine!) while losing control of their scope and duration.',
  'World Wars': 'Both World Wars received formal declarations — the constitutional process working as intended. But WWII also produced the most sweeping exercises of executive war power: Japanese internment, wartime censorship, atomic weapons development, and the creation of the national security state that would increasingly bypass congressional oversight.',
  'Cold War': 'The Cold War shattered congressional war power. Truman\'s "police action" in Korea, the CIA\'s covert regime changes, and the Gulf of Tonkin Resolution\'s rubber-stamping of Vietnam all demonstrated that Congress had been sidelined. The War Powers Resolution (1973) attempted to reassert control but has been largely ignored by every president since.',
  'Post-Cold War': 'The Gulf War received congressional authorization (barely), but Bosnia, Kosovo, Somalia, and various cruise missile strikes did not. Clinton\'s Kosovo campaign — 78 days of bombing without congressional approval — established that presidents could conduct sustained military campaigns through executive power alone.',
  'War on Terror': 'The 2001 AUMF and 2002 Iraq AUMF represent Congress delegating its war power rather than exercising it. The 2001 AUMF has been stretched to justify operations in 22+ countries against groups that didn\'t exist on 9/11. Congress has effectively abandoned its constitutional role in war-making.',
}

export async function generateStaticParams() {
  const conflicts = loadData('conflicts.json')
  const eras = [...new Set(conflicts.map((c: any) => c.era))] as string[]
  return eras.map(era => ({ slug: slugify(era) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const conflicts = loadData('conflicts.json')
  const eras = [...new Set(conflicts.map((c: any) => c.era))] as string[]
  const era = eras.find(e => slugify(e) === slug)
  if (!era) return { title: 'Era Not Found' }
  const items = conflicts.filter((c: any) => c.era === era)
  const totalCost = items.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  return {
    title: `${era} — ${items.length} US Conflicts, ${fmtMoney(totalCost)} Total Cost`,
    description: `All US military conflicts during the ${era}: ${items.length} wars costing ${fmtMoney(totalCost)}. Detailed cost, casualty, and historical analysis.`,
  }
}

export default async function EraDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const conflicts = loadData('conflicts.json')
  const presidents = loadData('presidents.json')
  const eras = [...new Set(conflicts.map((c: any) => c.era))] as string[]
  const era = eras.find(e => slugify(e) === slug)
  if (!era) notFound()

  const items = conflicts.filter((c: any) => c.era === era)
  const totalCost = items.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalDeaths = items.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)
  const civDeaths = items.reduce((s: number, c: any) => s + (c.civilianDeaths || 0), 0)
  const yearRange = `${Math.min(...items.map((c: any) => c.startYear))}–${Math.max(...items.map((c: any) => c.endYear || 2026))}`
  const authorizedCount = items.filter((c: any) => c.congressionalAuth).length
  const unauthorizedCount = items.filter((c: any) => !c.congressionalAuth).length

  // Find presidents active in this era
  const eraPresidents = presidents.filter((p: any) =>
    p.conflicts.some((name: string) =>
      items.some((c: any) => c.name.includes(name) || c.shortName?.includes(name) || name.includes(c.shortName || ''))
    )
  )

  // Era index for navigation
  const eraIdx = eras.indexOf(era)
  const prevEra = eraIdx > 0 ? eras[eraIdx - 1] : null
  const nextEra = eraIdx < eras.length - 1 ? eras[eraIdx + 1] : null

  // Costliest conflict
  const costliest = [...items].sort((a: any, b: any) => (b.costInflationAdjusted || 0) - (a.costInflationAdjusted || 0))[0]
  const deadliest = [...items].sort((a: any, b: any) => (b.usCasualties?.deaths || 0) - (a.usCasualties?.deaths || 0))[0]

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'By Era', href: '/eras' }, { label: era }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <span className="text-stone-400 text-sm">{yearRange} · {items.length} conflicts</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mt-2">{era}</h1>
        <p className="text-stone-600 mt-3">{eraContext[era] || ''}</p>
      </div>

      <ShareButtons title={`${era} — US Wars`} />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</p>
          <p className="text-xs text-muted">Total Cost (2023 $)</p>
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
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{items.length}</p>
          <p className="text-xs text-muted">Conflicts</p>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div className="bg-green-50 rounded-lg p-3 border border-green-200 text-center">
          <p className="text-lg font-bold text-green-700">{authorizedCount}</p>
          <p className="text-xs text-green-600">Authorized by Congress</p>
        </div>
        <div className="bg-red-50 rounded-lg p-3 border border-red-200 text-center">
          <p className="text-lg font-bold text-red-700">{unauthorizedCount}</p>
          <p className="text-xs text-red-600">No Authorization</p>
        </div>
        {costliest && (
          <div className="bg-white rounded-lg p-3 border text-center">
            <p className="text-sm font-bold text-primary">{fmtMoney(costliest.costInflationAdjusted)}</p>
            <p className="text-xs text-muted">Costliest: {costliest.shortName || costliest.name}</p>
          </div>
        )}
        {deadliest && deadliest.usCasualties?.deaths > 0 && (
          <div className="bg-white rounded-lg p-3 border text-center">
            <p className="text-sm font-bold text-primary">{fmt(deadliest.usCasualties.deaths)}</p>
            <p className="text-xs text-muted">Deadliest: {deadliest.shortName || deadliest.name}</p>
          </div>
        )}
      </div>

      {/* Charts */}
      <EraCharts conflicts={items} />

      {/* Libertarian Analysis */}
      {eraAnalysis[era] && (
        <div className="bg-stone-900 text-white rounded-lg p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">🗽 Libertarian Analysis</h2>
          <p className="text-stone-600 italic leading-relaxed">{eraAnalysis[era]}</p>
        </div>
      )}

      {/* Constitutional Analysis */}
      {eraConstitutional[era] && (
        <div className={`rounded-lg p-6 mb-8 border ${unauthorizedCount > authorizedCount ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">⚖️ Constitutional Authority</h2>
          <p className={`leading-relaxed ${unauthorizedCount > authorizedCount ? 'text-red-800' : 'text-green-800'}`}>{eraConstitutional[era]}</p>
        </div>
      )}

      {/* Presidents Active in Era */}
      {eraPresidents.length > 0 && (
        <div className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🏛️ Presidents</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {eraPresidents.map((p: any) => (
              <Link key={p.name} href={`/presidents/${slugify(p.name)}`} className="bg-white rounded-lg border px-4 py-3 hover:shadow-md transition">
                <p className="font-semibold">{p.name}</p>
                <p className="text-xs text-muted">{fmtMoney(p.totalCost)} · {fmt(p.totalUSDeaths)} deaths</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Conflicts */}
      <div className="mt-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">⚔️ Conflicts in This Era</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((c: any) => (
            <Link key={c.id} href={`/conflicts/${c.id}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">{c.shortName || c.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  c.outcome?.includes('Victory') ? 'bg-green-100 text-green-700' :
                  c.outcome?.includes('Defeat') ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>{c.outcome}</span>
              </div>
              <p className="text-sm text-muted">{c.startYear}–{c.endYear || 'Present'} · {c.region}</p>
              <p className="text-sm mt-1"><span className="font-bold text-primary">{fmtMoney(c.costInflationAdjusted)}</span> · {c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) + ' US deaths' : 'Covert'}</p>
              <p className="text-xs text-muted mt-1 line-clamp-2">{c.description}</p>
              {c.keyQuote && (
                <p className="text-xs italic text-stone-400 mt-2 border-l-2 border-stone-200 pl-2">&ldquo;{(c.keyQuote as any).text.substring(0, 80)}...&rdquo;</p>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Era Navigation */}
      <div className="flex justify-between mt-8 mb-8">
        {prevEra ? (
          <Link href={`/eras/${slugify(prevEra)}`} className="bg-white rounded-lg border px-4 py-3 hover:shadow-md transition">
            <p className="text-xs text-muted">← Previous</p>
            <p className="font-semibold">{prevEra}</p>
          </Link>
        ) : <div />}
        {nextEra ? (
          <Link href={`/eras/${slugify(nextEra)}`} className="bg-white rounded-lg border px-4 py-3 hover:shadow-md transition text-right">
            <p className="text-xs text-muted">Next →</p>
            <p className="font-semibold">{nextEra}</p>
          </Link>
        ) : <div />}
      </div>

      <BackToTop />
    </div>
  )
}
