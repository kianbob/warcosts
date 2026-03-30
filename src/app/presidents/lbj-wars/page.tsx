import { Metadata } from 'next'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Lyndon Johnson: Vietnam's Architect — War Record | WarCosts",
  description:
    'LBJ escalated Vietnam from 16,000 advisors to 536,000 troops based on the fabricated Gulf of Tonkin incident. 36,000+ US killed during his presidency. The war destroyed his legacy.',
  openGraph: {
    title: "Lyndon Johnson: Vietnam's Architect",
    description: 'Gulf of Tonkin, the escalation, and the president Vietnam destroyed.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Lyndon Johnson: Vietnam's Architect",
  description: 'LBJ\'s war record: Gulf of Tonkin, Vietnam escalation, and the destruction of the Great Society.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  mainEntityOfPage: 'https://www.warcosts.org/presidents/lbj-wars',
}

const ESCALATION = [
  { year: '1963', troops: '16,300', event: 'JFK assassinated. Johnson inherits Vietnam "advisory" mission.' },
  { year: '1964', troops: '23,300', event: 'Gulf of Tonkin incident (August). Congress passes blank check resolution.' },
  { year: '1965', troops: '184,300', event: 'Operation Rolling Thunder begins. First combat troops land at Da Nang.' },
  { year: '1966', troops: '385,300', event: 'Search and destroy missions. "Body count" becomes the metric of progress.' },
  { year: '1967', troops: '485,600', event: 'Anti-war movement grows. McNamara privately concludes war is unwinnable.' },
  { year: '1968', troops: '536,100', event: 'Tet Offensive. My Lai massacre. LBJ announces he won\'t run for re-election.' },
]

const TIMELINE = [
  { year: '1964 Aug', event: 'Gulf of Tonkin "incident" — second attack almost certainly didn\'t happen.' },
  { year: '1964 Aug', event: 'Gulf of Tonkin Resolution passes Senate 88-2. Gives Johnson unlimited war authority.' },
  { year: '1965 Mar', event: 'Operation Rolling Thunder begins — sustained bombing of North Vietnam.' },
  { year: '1965 Mar', event: 'First US combat troops (3,500 Marines) land at Da Nang.' },
  { year: '1965 Jul', event: 'Johnson announces 44 battalions — doubling US forces. Escalation accelerates.' },
  { year: '1965 Nov', event: 'Battle of Ia Drang — first major US-NVA engagement. 234 Americans killed in 3 days.' },
  { year: '1966', event: 'Agent Orange spraying intensifies. 20M gallons eventually sprayed over Vietnam.' },
  { year: '1967 Oct', event: '100,000 march on the Pentagon. Anti-war movement goes mainstream.' },
  { year: '1967 Nov', event: 'McNamara resigns as Defense Secretary (privately opposes the war).' },
  { year: '1968 Jan', event: 'Tet Offensive: NVA/Viet Cong attack 100+ cities simultaneously.' },
  { year: '1968 Mar', event: 'My Lai massacre: US soldiers kill 347-504 unarmed civilians (covered up for a year).' },
  { year: '1968 Mar', event: 'LBJ announces: "I shall not seek, and I will not accept, the nomination."' },
  { year: '1968 Oct', event: 'Johnson halts bombing of North Vietnam. Peace talks begin in Paris.' },
  { year: '1969 Jan', event: 'Johnson leaves office. 36,000+ Americans dead on his watch.' },
]

export default function LBJWarsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Presidents at War', href: '/presidents' },
          { label: 'Lyndon B. Johnson', href: '/presidents/johnson' },
          { label: 'War Record' },
        ]} />

        {/* Hero */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 mt-4">
          <p className="text-red-400 font-medium text-sm uppercase tracking-wider mb-2">Presidential War Record</p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            Lyndon Johnson: Vietnam&apos;s Architect
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl mb-8">
            He passed the Civil Rights Act, created Medicare, and launched the Great Society.
            Then he destroyed it all in the jungles of Vietnam — escalating a war based on a lie,
            sending 536,000 Americans to fight, and breaking the country&apos;s trust in
            government for a generation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">36,000+</div>
              <div className="text-stone-400 text-sm mt-1">US Killed (LBJ era)</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">536,100</div>
              <div className="text-stone-400 text-sm mt-1">Peak US Troops</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">16,300</div>
              <div className="text-stone-400 text-sm mt-1">Troops When He Started</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">88–2</div>
              <div className="text-stone-400 text-sm mt-1">Tonkin Resolution Vote</div>
            </div>
          </div>
          <ShareButtons title="Lyndon Johnson: Vietnam's Architect" />
        </div>

        {/* Gulf of Tonkin */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🎭 The Gulf of Tonkin Lie</h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <blockquote className="border-l-4 border-red-700 pl-4 mb-6">
              <p className="text-xl italic">
                &ldquo;Hell, those dumb, stupid sailors were just shooting at flying fish!&rdquo;
              </p>
              <footer className="text-stone-400 mt-2">
                — Lyndon Johnson, privately, about the Gulf of Tonkin &ldquo;second attack&rdquo;
              </footer>
            </blockquote>
            <div className="space-y-4 text-stone-300">
              <p>
                On August 2, 1964, North Vietnamese torpedo boats attacked the USS Maddox in the
                Gulf of Tonkin. This was real — though the Maddox was conducting intelligence
                operations in support of South Vietnamese raids.
              </p>
              <p>
                On August 4, a &ldquo;second attack&rdquo; was reported. Johnson used it to push the
                Gulf of Tonkin Resolution through Congress in two days, with virtually no debate.
                The vote: 88–2 in the Senate, 416–0 in the House.
              </p>
              <p>
                The second attack almost certainly never happened. The crew of the Maddox itself
                expressed doubts within hours. Declassified NSA documents confirmed in 2005 that the
                intelligence was deliberately falsified.
              </p>
              <p>
                The Gulf of Tonkin Resolution gave Johnson unlimited authority to wage war without a
                declaration. It became the legal foundation for the entire Vietnam War. Congress had
                given away its war power based on a lie.
              </p>
            </div>
          </div>
        </section>

        {/* The Escalation */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">📈 The Escalation</h2>
          <div className="space-y-3">
            {ESCALATION.map((e, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold text-stone-500 w-12">{e.year}</span>
                <div className="flex-1">
                  <div className="bg-stone-100 rounded-full h-8 overflow-hidden">
                    <div
                      className="bg-red-700 h-full rounded-full flex items-center justify-end pr-3"
                      style={{ width: `${(parseInt(e.troops.replace(/,/g, '')) / 536100) * 100}%` }}
                    >
                      <span className="text-white text-xs font-bold">{e.troops}</span>
                    </div>
                  </div>
                  <p className="text-stone-600 text-xs mt-1">{e.event}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
            <p className="text-amber-900">
              📊 In October 1964, LBJ told voters: &ldquo;We are not about to send American boys 9 or
              10 thousand miles away from home to do what Asian boys ought to be doing for
              themselves.&rdquo; Five months later, he sent combat troops. By 1968, there were 536,100.
            </p>
          </div>
        </section>

        {/* Guns and Butter */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">💰 Guns and Butter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-800 text-lg mb-3">The Great Society</h3>
              <ul className="space-y-2 text-green-900 text-sm">
                <li>✅ Civil Rights Act (1964)</li>
                <li>✅ Voting Rights Act (1965)</li>
                <li>✅ Medicare &amp; Medicaid (1965)</li>
                <li>✅ Head Start, food stamps, housing</li>
                <li>✅ Immigration reform (ended national quotas)</li>
                <li>✅ Environmental protection, consumer safety</li>
              </ul>
              <p className="text-green-700 text-sm mt-4 italic">
                The most ambitious domestic agenda since the New Deal.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-800 text-lg mb-3">Vietnam Consumed It All</h3>
              <ul className="space-y-2 text-red-900 text-sm">
                <li>💣 $168B spent on Vietnam ($1.4T in 2026$)</li>
                <li>💣 36,000+ Americans killed on his watch</li>
                <li>💣 War inflation undermined economic programs</li>
                <li>💣 Anti-war movement tore the country apart</li>
                <li>💣 Great Society funding gutted to pay for war</li>
                <li>💣 Destroyed public trust in government</li>
              </ul>
              <p className="text-red-700 text-sm mt-4 italic">
                Johnson wanted to be the greatest domestic president. Vietnam made him the most tragic.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">📅 Timeline</h2>
          <div className="space-y-4">
            {TIMELINE.map((t, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-20 shrink-0 text-right">
                  <span className="text-sm font-mono font-bold text-red-800">{t.year}</span>
                </div>
                <div className="w-px bg-red-200 shrink-0" />
                <p className="text-stone-700 pb-2">{t.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* "I Shall Not Seek" */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
            🎙️ &ldquo;I Shall Not Seek...&rdquo;
          </h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <blockquote className="border-l-4 border-red-700 pl-4 mb-6">
              <p className="text-xl italic">
                &ldquo;I shall not seek, and I will not accept, the nomination of my party for
                another term as your President.&rdquo;
              </p>
              <footer className="text-stone-400 mt-2">— Lyndon B. Johnson, March 31, 1968</footer>
            </blockquote>
            <p className="text-stone-300 leading-relaxed">
              Vietnam destroyed Johnson. The Tet Offensive in January 1968 — though a military
              failure for North Vietnam — shattered the administration&apos;s credibility. When
              Walter Cronkite declared the war &ldquo;mired in stalemate,&rdquo; Johnson reportedly
              said, &ldquo;If I&apos;ve lost Cronkite, I&apos;ve lost Middle America.&rdquo; Two
              months later, he withdrew from the presidential race. He died four years later, at 64,
              a broken man.
            </p>
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🗽 The Assessment</h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <div className="space-y-4 text-stone-300 leading-relaxed">
              <p>
                Lyndon Johnson is the most tragic figure in the history of the American presidency.
                His domestic achievements — civil rights, Medicare, the War on Poverty — changed
                millions of lives. His Vietnam escalation destroyed millions more.
              </p>
              <p>
                He knew the war was likely unwinnable. His own defense secretary told him so.
                His intelligence agencies told him so. But he escalated anyway — afraid of being the
                president who &ldquo;lost Vietnam,&rdquo; afraid of the political consequences of
                withdrawal, trapped by the logic of credibility and domino theory.
              </p>
              <p>
                The Gulf of Tonkin Resolution — passed on fabricated evidence — gave a single man
                the authority to send 536,000 Americans to war. No declaration of war. No honest
                debate. No accountability until it was too late.
              </p>
              <p className="text-white font-medium">
                Johnson proved that a president can be a great domestic leader and a catastrophic
                war president at the same time — and that the war always wins.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <Link href="/presidents/fdr-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">← WWII Era</p>
            <p className="font-bold text-lg">FDR: Arsenal of Democracy</p>
            <p className="text-sm text-stone-600">The war that created the military-industrial complex</p>
          </Link>
          <Link href="/presidents/nixon-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">Next →</p>
            <p className="font-bold text-lg">Nixon: Secret Wars and &ldquo;Peace with Honor&rdquo;</p>
            <p className="text-sm text-stone-600">Inherited LBJ&apos;s war, expanded it into Cambodia</p>
          </Link>
        </div>

        <BackToTop />
      </div>
    </>
  )
}
