import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Timeline of US Wars & Interventions — 248 Years of Conflict',
  description: 'Every American war, military intervention, and covert operation from 1775 to present. 248 years, 28+ conflicts, 1M+ Americans dead.',
}

const eraColors: Record<string, string> = {
  'Founding Era': 'border-amber-600 bg-amber-50',
  'Early Republic': 'border-yellow-600 bg-yellow-50',
  'Expansion Era': 'border-orange-600 bg-orange-50',
  'Civil War': 'border-red-800 bg-red-50',
  'Imperial Era': 'border-purple-600 bg-purple-50',
  'World Wars': 'border-blue-700 bg-blue-50',
  'Cold War': 'border-slate-600 bg-slate-50',
  'Post-Cold War': 'border-teal-600 bg-teal-50',
  'War on Terror': 'border-red-600 bg-red-50',
}

const eraDotColors: Record<string, string> = {
  'Founding Era': 'bg-amber-600',
  'Early Republic': 'bg-yellow-600',
  'Expansion Era': 'bg-orange-600',
  'Civil War': 'bg-red-800',
  'Imperial Era': 'bg-purple-600',
  'World Wars': 'bg-blue-700',
  'Cold War': 'bg-slate-600',
  'Post-Cold War': 'bg-teal-600',
  'War on Terror': 'bg-red-600',
}

const eraDescriptions: Record<string, string> = {
  'Founding Era': 'The war that created America — fought for self-governance and individual liberty against imperial taxation and control.',
  'Early Republic': 'The young nation tested its military power, fighting pirates in the Mediterranean and defending its borders against former colonial powers.',
  'Expansion Era': 'Manifest destiny drove westward expansion through wars against Mexico, Native peoples, and internal conflict over slavery. American territory grew — at enormous human cost.',
  'Civil War': 'The bloodiest conflict in American history. More Americans died in the Civil War than in all other US wars combined until Vietnam.',
  'Imperial Era': 'America became an overseas empire, seizing territories from Spain, occupying Latin American nations, and entering the global stage as a military power.',
  'World Wars': 'Two global conflicts that transformed the United States from a regional power into the world\'s dominant military and economic force. 500,000+ Americans killed.',
  'Cold War': 'Four decades of proxy wars, nuclear brinksmanship, CIA coups, and interventions — all justified by the fight against communism. Vietnam alone killed 58,000 Americans and 2 million Vietnamese civilians.',
  'Post-Cold War': 'With the Soviet threat gone, new justifications emerged: humanitarian intervention, peacekeeping, and the "new world order." The wars grew smaller but more numerous.',
  'War on Terror': 'The longest and most expensive era of American warfare. Triggered by 9/11, the "War on Terror" expanded to 80+ countries, cost $8 trillion, killed 940,000+ people, and displaced 38 million. It continues today.',
}

export default function TimelinePage() {
  const conflicts = loadData('conflicts.json')
  const stats = loadData('stats.json')

  const eras: Record<string, any[]> = {}
  conflicts.forEach((c: any) => {
    if (!eras[c.era]) eras[c.era] = []
    eras[c.era].push(c)
  })

  const post2001 = conflicts.filter((c: any) => c.startYear >= 2001)
  const post2001Cost = post2001.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const post2001Deaths = post2001.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Timeline' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Timeline of American Wars</h1>
      <p className="text-muted mb-4 max-w-3xl">248 years as a nation. {stats.totalConflicts} major conflicts. Over {fmt(stats.totalUSDeaths)} Americans dead. Over {(stats.totalCivilianDeaths/1e6).toFixed(1)} million civilians killed. This is the complete record.</p>
      <ShareButtons title="Timeline of US Wars & Interventions" />

      {/* Intro narrative */}
      <div className="prose prose-stone max-w-none my-8">
        <p>The United States has been at war for roughly <strong>225 of its 248 years</strong> of existence. Since WWII, none of these wars have been in response to an attack on American soil (with the partial exception of 9/11, which led to wars in countries that had nothing to do with the attack). The Constitution gives Congress the sole power to declare war — yet Congress has formally declared war only 5 times. Every conflict since WWII has been fought under executive authority, broad authorizations, or in secret.</p>
      </div>

      {/* Since 2001 */}
      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-red-800">🔴 Since September 11, 2001</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {[
            { val: String(post2001.length), label: 'Conflicts Launched' },
            { val: fmtMoney(post2001Cost), label: 'Total Cost' },
            { val: '940K+', label: 'People Killed' },
            { val: '38M', label: 'People Displaced' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-lg p-3 border text-center">
              <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
              <p className="text-muted text-xs">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-stone-600">The 2001 Authorization for Use of Military Force (AUMF) — a 60-word resolution passed three days after 9/11 — has been used to justify military operations in at least 22 countries. It has no expiration date and has never been repealed.</p>
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;Of all the enemies to public liberty, war is perhaps the most to be dreaded, because it comprises and develops the germ of every other.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— James Madison, &ldquo;Political Observations,&rdquo; 1795</p>
      </div>

      {/* Timeline */}
      <div className="mt-8 space-y-12">
        {Object.entries(eras).map(([era, items]) => {
          const totalCost = items.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
          const totalDeaths = items.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)

          return (
            <div key={era}>
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-4 h-4 rounded-full ${eraDotColors[era] || 'bg-stone-400'}`} />
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{era}</h2>
                <span className="text-muted text-sm">· {fmtMoney(totalCost)} · {fmt(totalDeaths)} US deaths</span>
              </div>

              {eraDescriptions[era] && (
                <p className="text-sm text-muted ml-7 mb-4">{eraDescriptions[era]}</p>
              )}

              <div className="border-l-2 border-stone-300 ml-2 pl-6 space-y-4">
                {items.map((c: any) => (
                  <Link key={c.id} href={`/conflicts/${c.id}`}
                    className={`block border-l-4 ${eraColors[era] || 'border-stone-400 bg-stone-50'} rounded-r-lg p-4 hover:shadow-md transition`}>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-sm font-mono text-muted">{c.startYear}{c.endYear !== c.startYear ? `–${c.endYear}` : ''}</span>
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">{c.shortName || c.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        c.outcome?.includes('Victory') ? 'bg-green-100 text-green-700' :
                        c.outcome?.includes('Defeat') ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>{c.outcome}</span>
                      {!c.congressionalAuth && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">No Authorization</span>
                      )}
                    </div>
                    <p className="text-sm text-muted">{c.description}</p>
                    <div className="flex gap-6 mt-2 text-sm">
                      <span><strong className="text-primary">{fmtMoney(c.costInflationAdjusted)}</strong> cost</span>
                      {c.usCasualties?.deaths > 0 && <span><strong className="text-primary">{fmt(c.usCasualties.deaths)}</strong> US deaths</span>}
                      {c.civilianDeaths && <span><strong className="text-primary">{fmt(c.civilianDeaths)}</strong> civilian deaths</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Constitutional Erosion */}
      <div className="bg-amber-50 rounded-xl p-8 mt-12 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">📜 The Constitutional Erosion</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>The Constitution explicitly grants Congress — not the President — the power to declare war. The Founders had seen what happened when a single executive could drag a nation into conflict. Yet over 248 years, this safeguard has been systematically eroded:</p>
          <ul>
            <li><strong>1950 — Korea:</strong> Truman sends troops without congressional approval, calling it a &ldquo;police action.&rdquo; Sets precedent for executive war.</li>
            <li><strong>1964 — Gulf of Tonkin:</strong> A likely fabricated incident is used to pass a resolution giving LBJ blank-check authority for Vietnam.</li>
            <li><strong>1973 — War Powers Resolution:</strong> Passed to reassert Congress&apos;s role. Every president since has called it unconstitutional and ignored it.</li>
            <li><strong>2001 — AUMF:</strong> 60 words passed in the shock of 9/11 become the legal basis for wars in 22+ countries for 20+ years.</li>
            <li><strong>Today:</strong> The President can order drone strikes, deploy special forces, and conduct cyber operations with no congressional vote.</li>
          </ul>
        </div>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/congressional-authority" className="text-red-800 hover:underline">→ 19 Wars Without Congress</Link></li>
          <li><Link href="/casualties" className="text-red-800 hover:underline">→ Casualty Data — the human cost</Link></li>
          <li><Link href="/covert" className="text-red-800 hover:underline">→ Covert Operations — the secret wars</Link></li>
        </ul>
      </div>
    </div>
  )
}
