import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'US Covert Operations & Regime Changes — CIA Coups, Secret Wars',
  description: 'CIA coups, covert operations, and secret wars — from Iran 1953 to the global drone campaign. The hidden costs of empire.',
}

const narratives: Record<string, string> = {
  'iran-1953': 'Operation TPAJAX: The CIA and MI6 overthrew Iran\'s democratically elected Prime Minister Mohammad Mossadegh after he nationalized British oil interests. The coup installed Shah Pahlavi, whose brutal 26-year dictatorship created the conditions for the 1979 Islamic Revolution — and 45+ years of US-Iran hostility. The entire modern Middle East crisis traces partly back to this single covert operation.',
  'guatemala-1954': 'Operation PBSUCCESS: The CIA overthrew Guatemala\'s democratically elected President Jacobo Árbenz because his land reform threatened United Fruit Company profits. The coup installed a military dictatorship that began a 36-year civil war, killing 200,000 people — mostly indigenous Maya — in what a UN truth commission later called genocide.',
  'bay-of-pigs': 'The CIA trained and armed 1,400 Cuban exiles to invade Cuba and overthrow Fidel Castro. The invasion was a catastrophic failure — most invaders were captured within 72 hours. The humiliation pushed Cuba closer to the Soviet Union, directly leading to the 1962 Missile Crisis that brought the world to the brink of nuclear war.',
  'chile-1973': 'The CIA supported the military coup that overthrew Chile\'s democratically elected President Salvador Allende. General Augusto Pinochet seized power and ruled for 17 years — 3,200 people were murdered, 40,000 tortured, and 200,000 exiled. Declassified documents confirm extensive CIA involvement in destabilizing Allende\'s government.',
  'congo-1961': 'The CIA was involved in the plot to assassinate Patrice Lumumba, the first democratically elected leader of the Congo. His murder paved the way for the dictator Mobutu Sese Seko, who ruled for 32 years, embezzled $5 billion, and left the country in ruins. The Congo has never recovered.',
}

export default function CovertPage() {
  const conflicts = loadData('conflicts.json')
  const covert = conflicts.filter((c: any) => c.type === 'covert_operation' || c.type === 'coup')
  const totalCost = covert.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalCivDeaths = covert.reduce((s: number, c: any) => s + (c.civilianDeaths || 0), 0)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Covert Operations' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Covert Operations</h1>
      <p className="text-muted mb-6 max-w-3xl">Secret wars, CIA coups, and covert campaigns — none authorized by Congress, most hidden from the American public for decades. These are the operations that toppled democracies, installed dictators, and created the enemies America would later spend trillions fighting.</p>
      <ShareButtons title="US Covert Operations & Regime Changes" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: String(covert.length), label: 'Covert Operations' },
          { val: fmtMoney(totalCost), label: 'Total Cost' },
          { val: totalCivDeaths > 0 ? fmt(totalCivDeaths) + '+' : 'Unknown', label: 'Civilian Deaths' },
          { val: '$15B+/yr', label: 'Est. CIA Budget' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;We have about 50% of the world&apos;s wealth but only 6.3% of its population... Our real task in the coming period is to maintain this position of disparity without positive detriment to our national security.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— George Kennan, US State Department Policy Planning Staff, 1948 (Classified memo PPS/23, declassified 1974)</p>
      </div>

      {/* Context */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Pattern</h2>
        <p>The pattern is remarkably consistent: a foreign government acts against American corporate interests or aligns with the &ldquo;wrong&rdquo; side in the Cold War. The CIA engineers a coup, installs a friendly dictator, and the new regime opens its economy to American business. Decades later, the blowback arrives — revolution, civil war, terrorism, or migration — and America spends trillions dealing with the consequences of its own covert actions.</p>
        <p>The 1975 <strong>Church Committee</strong> investigation revealed the scope of CIA covert operations for the first time: assassination plots against foreign leaders, domestic surveillance of American citizens, drug experiments on unwitting subjects, and covert wars in countries most Americans couldn&apos;t find on a map.</p>
        <p>The CIA&apos;s budget is classified, but estimates place it at <strong>$15 billion+ per year</strong>. Former CIA Director William Colby testified that the agency had conducted over 900 major covert operations and several thousand smaller ones between 1961 and 1975 alone.</p>
      </div>

      {/* Operations */}
      <div className="space-y-6">
        {covert.map((c: any) => (
          <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-lg border p-6 hover:shadow-md transition">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">{c.name}</h2>
              <span className="text-sm text-muted">{c.startYear}{c.endYear !== c.startYear ? `–${c.endYear}` : ''}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">No Authorization</span>
            </div>
            <p className="text-muted mb-3">{c.description}</p>
            {narratives[c.id] && (
              <p className="text-sm text-stone-600 mb-3 bg-stone-50 rounded p-3">{narratives[c.id]}</p>
            )}
            <div className="flex gap-6 text-sm">
              <span><strong className="text-primary">{fmtMoney(c.costInflationAdjusted)}</strong> cost</span>
              {c.civilianDeaths > 0 && <span><strong className="text-primary">{fmt(c.civilianDeaths)}</strong> civilian deaths</span>}
              <span>Outcome: <strong>{c.outcome}</strong></span>
            </div>
            {c.libertarianNote && <p className="text-sm italic text-muted mt-3">{c.libertarianNote}</p>}
          </Link>
        ))}
      </div>

      {/* CIA Admissions */}
      <div className="bg-amber-50 rounded-xl p-8 mt-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">🗣️ In Their Own Words</h2>
        <div className="space-y-6">
          <div>
            <blockquote className="text-sm italic text-stone-700">&ldquo;It is an act of insanity and national humiliation to have a law prohibiting the President from ordering assassination.&rdquo;</blockquote>
            <p className="text-xs text-muted mt-1">— Henry Kissinger, National Security Advisor</p>
          </div>
          <div>
            <blockquote className="text-sm italic text-stone-700">&ldquo;We&apos;ll know our disinformation program is complete when everything the American public believes is false.&rdquo;</blockquote>
            <p className="text-xs text-muted mt-1">— William Casey, CIA Director (reportedly, 1981)</p>
          </div>
          <div>
            <blockquote className="text-sm italic text-stone-700">&ldquo;I never would have agreed to the formulation of the Central Intelligence Agency back in forty-seven, if I had known it would become the American Gestapo.&rdquo;</blockquote>
            <p className="text-xs text-muted mt-1">— Harry Truman, 1961 (the president who created the CIA)</p>
          </div>
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The CIA funded the Mujahideen in Afghanistan with <strong>$3+ billion</strong> in the 1980s. Those weapons and fighters later formed the Taliban and Al-Qaeda.</li>
          <li>• The term <strong>&ldquo;blowback&rdquo;</strong> was coined by the CIA itself in a classified report on the 1953 Iran coup.</li>
          <li>• The Church Committee found that the CIA had opened over <strong>200,000 pieces of Americans&apos; mail</strong> and maintained files on 1.5 million citizens.</li>
          <li>• Operation Mockingbird: the CIA cultivated relationships with over <strong>400 American journalists</strong> to plant propaganda in US media.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/blowback" className="text-red-800 hover:underline">→ Blowback — how US interventions create future enemies</Link></li>
          <li><Link href="/analysis/congressional-authority" className="text-red-800 hover:underline">→ 19 Wars Without Congress</Link></li>
          <li><Link href="/timeline" className="text-red-800 hover:underline">→ Timeline of All US Wars & Interventions</Link></li>
        </ul>
      </div>
    </div>
  )
}
