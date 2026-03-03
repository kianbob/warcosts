import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Timeline of US Wars & Interventions — 248 Years of Conflict',
  description: 'Every American war, military intervention, and covert operation from 1775 to present. 248 years, 28+ conflicts, 1M+ Americans dead.',
  alternates: { canonical: 'https://www.warcosts.org/timeline' },
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
  'Founding Era': 'The war that created America — fought for self-governance and individual liberty against imperial taxation and control. The last time America fought a truly defensive war on its own soil.',
  'Early Republic': 'The young nation tested its military power, fighting pirates in the Mediterranean and defending its borders against former colonial powers. The War of 1812 saw the British burn Washington, DC.',
  'Expansion Era': 'Manifest destiny drove westward expansion through wars against Mexico, Native peoples, and internal conflict over slavery. The Mexican-American War (1846-48) added California, Texas, and the Southwest — Abraham Lincoln called it unconstitutional.',
  'Civil War': 'The bloodiest conflict in American history. More Americans died in the Civil War than in all other US wars combined until Vietnam. The war ended slavery but left scars that persist today. Military spending: $80B in 2023 dollars.',
  'Imperial Era': 'America became an overseas empire, seizing territories from Spain, occupying Latin American nations, and entering the global stage as a military power. The Spanish-American War (1898) gave the US control of Puerto Rico, Guam, and the Philippines — where the US fought a brutal counter-insurgency that killed 200,000+ Filipinos.',
  'World Wars': 'Two global conflicts that transformed the United States from a regional power into the world\'s dominant military and economic force. 500,000+ Americans killed. WWII ended with nuclear weapons — and the permanent war economy began. Spending peaked at 41.9% of GDP.',
  'Cold War': 'Four decades of proxy wars, nuclear brinksmanship, CIA coups, and interventions — all justified by the fight against communism. Vietnam alone killed 58,000 Americans and 2 million Vietnamese civilians. The nuclear arsenal peaked at 31,000 warheads. Defense spending averaged 7% of GDP — creating the military-industrial complex Eisenhower warned about.',
  'Post-Cold War': 'With the Soviet threat gone, new justifications emerged: humanitarian intervention, peacekeeping, and the "new world order." The wars grew smaller but more numerous. The "peace dividend" was brief — defense budgets only fell 25% before 9/11 ratcheted them back up.',
  'War on Terror': 'The longest and most expensive era of American warfare. Triggered by 9/11, the "War on Terror" expanded to 80+ countries, cost $8 trillion, killed 940,000+ people, and displaced 38 million. No congressional declaration of war. The 2001 AUMF — 60 words — authorized 20+ years of war in 22 countries. It continues today.',
}

const eraContext: Record<string, string[]> = {
  'Founding Era': [
    'Domestic context: A new nation experimenting with democracy. Population: 2.5 million. No standing army — exactly as the Founders intended.',
    'Constitutional note: This was the last era in which the war power was exercised as the Founders envisioned — by citizen militias, for territorial defense.',
  ],
  'Early Republic': [
    'Domestic context: Westward expansion begins. Louisiana Purchase (1803) doubled the nation\'s size. Debate over standing armies vs. citizen militias.',
    'The War of 1812: Often called "the forgotten war." Britain burned the White House and Capitol. Neither side gained territory. But the war established American nationalism.',
  ],
  'Expansion Era': [
    'Domestic context: Manifest Destiny. Trail of Tears (1830s). Gold Rush (1849). Slavery debate tears the nation apart.',
    'The Mexican-American War was opposed by many — including Congressman Abraham Lincoln and Henry David Thoreau, who went to jail rather than pay taxes for an unjust war. Thoreau\'s "Civil Disobedience" was written in response.',
    'The Indian Wars (1776-1924): The US fought over 40 wars against Native peoples, resulting in the deaths of tens of thousands and the destruction of indigenous civilizations across the continent.',
  ],
  'Civil War': [
    'Domestic context: 620,000 Americans dead — more than all other US wars combined until Vietnam. Draft riots in New York. The Emancipation Proclamation.',
    'Military spending peaked at ~12% of GDP. Both sides borrowed heavily. The war debt shaped federal finance for decades.',
    'The war demonstrated total war: Sherman\'s March, siege warfare, mass conscription. These lessons were applied globally in the 20th century.',
  ],
  'Imperial Era': [
    'Domestic context: Industrialization, labor unrest, waves of immigration. The Gilded Age of extreme wealth inequality.',
    'The Spanish-American War (1898) lasted 4 months and gave the US Puerto Rico, Guam, and the Philippines. Mark Twain and the Anti-Imperialist League opposed the war.',
    'The Philippine-American War (1899-1913): Often omitted from textbooks. US forces killed an estimated 200,000-1,000,000 Filipinos. Waterboarding was first widely used by American soldiers here — and condemned as torture.',
    'Banana Wars (1898-1934): US Marines repeatedly invaded Central America and the Caribbean to protect corporate interests. Smedley Butler later called himself "a high-class muscle man for Big Business."',
  ],
  'World Wars': [
    'Domestic context: WWI — Espionage and Sedition Acts criminalized dissent. Anti-German hysteria. Spanish flu killed more Americans than the war.',
    'WWII — Japanese internment. Women entered the workforce. GI Bill transformed American society. Defense spending hit 41.9% of GDP — true total mobilization.',
    'The atomic bombings of Hiroshima and Nagasaki: 200,000+ killed. Debate continues over whether they were necessary or a demonstration of power aimed at the Soviet Union.',
    'Constitutional note: WWII was the LAST time Congress formally declared war. Every conflict since has been fought under executive authority or vague authorizations.',
  ],
  'Cold War': [
    'Domestic context: McCarthyism. Civil rights movement. Vietnam protests. Watergate. The space race. Rock and roll.',
    'Nuclear brinksmanship: The Cuban Missile Crisis (1962) brought humanity to the brink of extinction. Kennedy and Khrushchev had minutes to make decisions that could have ended civilization.',
    'Vietnam shattered the consensus: 58,220 Americans dead. 2 million Vietnamese civilians killed. Draft resistance. Pentagon Papers. Kent State massacre. Public trust in government collapsed — and never recovered.',
    'CIA coups during this era (Iran, Guatemala, Congo, Chile, Indonesia, Brazil) are now declassified. Each created long-term instability.',
    'Defense spending averaged 7% of GDP — creating millions of jobs dependent on military contracts and making cuts politically impossible.',
  ],
  'Post-Cold War': [
    'Domestic context: The "end of history." Budget surpluses. Tech boom. Monica Lewinsky.',
    'The "peace dividend" was real but brief: defense spending fell from $420B (1991) to $340B (1999) — a 19% cut. But military actions continued: Somalia, Haiti, Bosnia, Kosovo, Iraq (no-fly zones).',
    'Rwanda genocide (1994): 800,000 killed in 100 days. The US refused to intervene or call it genocide — because doing so would have required action under the Genocide Convention.',
    'The 1990s base closure rounds (BRAC) closed 350+ installations and saved $12B/yr — the last successful effort to reduce military overhead.',
  ],
  'War on Terror': [
    'Domestic context: 9/11 trauma. Patriot Act. Mass surveillance. TSA. Color-coded threat levels. "You\'re either with us or against us." Deepening political polarization.',
    'The 2001 AUMF (Authorization for Use of Military Force) is 60 words long, has no expiration date, and has been used to justify military operations in at least 22 countries. It was passed 3 days after 9/11 with a single dissenting vote (Barbara Lee, D-CA).',
    'Iraq WMD fabrication: The Bush administration knew intelligence was dubious. The Downing Street Memo showed intelligence was "fixed around the policy." No one was held accountable.',
    'The "forever wars" label stuck: 20 years in Afghanistan ended with the Taliban retaking power in 11 days. $2.3 trillion spent. 176,000+ dead. Nothing changed.',
    'Constitutional erosion: Presidents now claim authority to wage war, conduct drone assassinations, and deploy special forces globally — without congressional authorization.',
    'The drone campaign has killed thousands, including American citizens (Anwar al-Awlaki and his 16-year-old son), without trial or due process.',
  ],
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
        <p>This timeline reveals two patterns the government doesn&apos;t want you to notice:</p>
        <ol>
          <li><strong>War is the norm, not the exception.</strong> There has been no 25-year period in American history without a military conflict.</li>
          <li><strong>Each war creates the conditions for the next.</strong> The CIA&apos;s Cold War coups created the enemies of the War on Terror. Iraq created ISIS. Afghanistan created the Taliban. Blowback is not an accident — it&apos;s a feature.</li>
        </ol>
      </div>

      {/* Total Statistics */}
      <div className="bg-stone-50 rounded-xl p-6 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Full Toll</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {[
            { val: String(stats.totalConflicts), label: 'Major Conflicts' },
            { val: fmt(stats.totalUSDeaths), label: 'Americans Killed' },
            { val: `${(stats.totalCivilianDeaths / 1e6).toFixed(1)}M+`, label: 'Civilians Killed' },
            { val: fmtMoney(stats.totalCostInflationAdjusted), label: 'Total Cost (2023$)' },
            { val: '5', label: 'Declared Wars' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-lg p-3 border">
              <p className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
              <p className="text-muted text-xs">{s.label}</p>
            </div>
          ))}
        </div>
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
        <p className="text-sm text-stone-600">The 2001 Authorization for Use of Military Force (AUMF) — a 60-word resolution passed three days after 9/11 — has been used to justify military operations in at least 22 countries. It has no expiration date and has never been repealed. Only one member of Congress voted against it: <strong>Barbara Lee (D-CA)</strong>, who warned it was a &ldquo;blank check for the use of military force.&rdquo; She was right.</p>
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;Of all the enemies to public liberty, war is perhaps the most to be dreaded, because it comprises and develops the germ of every other.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— James Madison, &ldquo;Political Observations,&rdquo; 1795</p>
      </div>

      {/* Spending Through Time */}
      <div className="bg-amber-50 rounded-xl p-6 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-amber-800">📊 Defense Spending Through Time</h2>
        <div className="space-y-2 text-sm">
          {[
            { era: 'Pre-WWII', pctGdp: '~1.5%', note: 'Small standing military. Founders warned against it.' },
            { era: 'WWII Peak (1945)', pctGdp: '41.9%', note: 'Total economic mobilization. 16 million in uniform.' },
            { era: 'Korean War (1953)', pctGdp: '14.2%', note: 'Cold War begins. "Never again" returning to pre-war levels.' },
            { era: 'Vietnam Peak (1968)', pctGdp: '9.4%', note: '549,000 troops in Vietnam. Massive anti-war movement.' },
            { era: 'Reagan Buildup (1987)', pctGdp: '6.1%', note: '"Peace through strength." National debt tripled.' },
            { era: 'Post-Cold War Low (1999)', pctGdp: '3.0%', note: 'The brief "peace dividend." Already being eroded.' },
            { era: 'War on Terror Peak (2010)', pctGdp: '4.7%', note: 'Two simultaneous wars. Budget nearly doubled since 2001.' },
            { era: 'Current (2024)', pctGdp: '3.4%', note: '$886B — all-time nominal high. No declared wars.' },
          ].map(s => (
            <div key={s.era} className="flex items-center gap-3 bg-white rounded-lg p-2 border">
              <span className="w-44 font-medium text-xs">{s.era}</span>
              <div className="flex-1 bg-amber-100 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-amber-600 rounded-full" style={{ width: `${(parseFloat(s.pctGdp) / 42) * 100}%` }} />
              </div>
              <span className="w-16 text-right font-bold text-xs">{s.pctGdp}</span>
            </div>
          ))}
        </div>
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
                <p className="text-sm text-muted ml-7 mb-3">{eraDescriptions[era]}</p>
              )}

              {/* Era Context Notes */}
              {eraContext[era] && (
                <div className="ml-7 mb-4 space-y-1">
                  {eraContext[era].map((note, i) => (
                    <p key={i} className="text-xs text-stone-500 bg-stone-50 rounded p-2 border-l-2 border-stone-300">{note}</p>
                  ))}
                </div>
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
                        <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">⚠ No Declaration</span>
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
            <li><strong>1846 — Mexican-American War:</strong> Polk provoked Mexico by sending troops to disputed territory, then asked Congress to ratify a war already underway. Lincoln called it unconstitutional.</li>
            <li><strong>1950 — Korea:</strong> Truman sends troops without congressional approval, calling it a &ldquo;police action.&rdquo; Sets precedent for executive war. 36,574 Americans die.</li>
            <li><strong>1964 — Gulf of Tonkin:</strong> A likely fabricated incident is used to pass a resolution giving LBJ blank-check authority for Vietnam. 58,220 Americans die.</li>
            <li><strong>1973 — War Powers Resolution:</strong> Passed to reassert Congress&apos;s role. Every president since has called it unconstitutional and ignored it.</li>
            <li><strong>1986 — Libya bombing:</strong> Reagan orders strikes without congressional authorization. Sets precedent for unilateral military action.</li>
            <li><strong>1999 — Kosovo:</strong> Clinton wages 78-day bombing campaign without congressional authorization. When Congress votes to deny authorization, he continues bombing anyway.</li>
            <li><strong>2001 — AUMF:</strong> 60 words passed in the shock of 9/11 become the legal basis for wars in 22+ countries for 20+ years. One dissenting vote (Barbara Lee).</li>
            <li><strong>2011 — Libya:</strong> Obama argues that regime change bombing isn&apos;t &ldquo;hostilities&rdquo; under the War Powers Resolution. His own legal counsel disagreed.</li>
            <li><strong>Today:</strong> The President can order drone strikes, deploy special forces to 134 countries, and conduct cyber operations with no congressional vote. The war power has been fully transferred to the executive.</li>
          </ul>
          <p>James Madison warned in 1793: &ldquo;The executive is the department of power most distinguished by its propensity to war: hence it is the practice of all states, in proportion as they are free, to disarm this propensity of its influence.&rdquo; America has done the opposite.</p>
        </div>
      </div>

      {/* The Founders on War */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Founders on War & Standing Armies</h2>
        <div className="space-y-4">
          <div>
            <blockquote className="text-sm italic text-stone-300">&ldquo;Of all the enemies to public liberty, war is perhaps the most to be dreaded, because it comprises and develops the germ of every other. War is the parent of armies; from these proceed debts and taxes; and armies, debts, and taxes are the known instruments for bringing the many under the domination of the few.&rdquo;</blockquote>
            <p className="text-xs text-stone-500 mt-1">— James Madison, 1795</p>
          </div>
          <div>
            <blockquote className="text-sm italic text-stone-300">&ldquo;Peace, commerce, and honest friendship with all nations — entangling alliances with none.&rdquo;</blockquote>
            <p className="text-xs text-stone-500 mt-1">— Thomas Jefferson, First Inaugural Address, 1801</p>
          </div>
          <div>
            <blockquote className="text-sm italic text-stone-300">&ldquo;Overgrown military establishments are, under any form of government, inauspicious to liberty.&rdquo;</blockquote>
            <p className="text-xs text-stone-500 mt-1">— George Washington, Farewell Address, 1796</p>
          </div>
          <div>
            <blockquote className="text-sm italic text-stone-300">&ldquo;America does not go abroad in search of monsters to destroy. She is the well-wisher to the freedom and independence of all. She is the champion and vindicator only of her own.&rdquo;</blockquote>
            <p className="text-xs text-stone-500 mt-1">— John Quincy Adams, 1821</p>
          </div>
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The US has been at war for <strong>225 of its 248 years</strong> — 91% of its existence.</li>
          <li>• Congress has formally declared war only <strong>5 times</strong>. The last was 1942 (WWII). Every conflict since has been undeclared.</li>
          <li>• The 2001 AUMF was <strong>60 words</strong>. It authorized wars in <strong>22 countries</strong> for <strong>20+ years</strong>.</li>
          <li>• Only <strong>one person</strong> voted against the 2001 AUMF: Barbara Lee (D-CA). She received death threats.</li>
          <li>• The Civil War killed more Americans than <strong>all other US wars combined</strong> until Vietnam.</li>
          <li>• The US has never lost a war... if you only count the wars the government acknowledges as defeats (zero). If you count wars that didn&apos;t achieve their objectives: <strong>Vietnam, Afghanistan, Iraq, Somalia, Libya, War on Drugs, War on Terror...</strong></li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/congressional-authority" className="text-red-800 hover:underline">→ 19 Wars Without Congress</Link></li>
          <li><Link href="/casualties" className="text-red-800 hover:underline">→ Casualty Data — the human cost</Link></li>
          <li><Link href="/covert" className="text-red-800 hover:underline">→ Covert Operations — the secret wars</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Military Spending — the ratchet effect</Link></li>
          <li><Link href="/analysis/forever-wars" className="text-red-800 hover:underline">→ Forever Wars — why they never end</Link></li>
        </ul>
      </div>
    </div>
  )
}
