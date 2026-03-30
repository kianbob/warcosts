import { Metadata } from 'next'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'FDR: Arsenal of Democracy — War Record | WarCosts',
  description:
    'Franklin Roosevelt led the US through WWII: 405,000+ US military killed, $4.1 trillion cost (2026$), Japanese internment of 120,000, the Manhattan Project, and the atomic bombs that ended the war and started the nuclear age.',
  openGraph: {
    title: 'FDR: Arsenal of Democracy',
    description: 'WWII, Pearl Harbor, D-Day, internment, and the atomic bomb.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'FDR: Arsenal of Democracy — The Full War Record',
  description: 'FDR\'s war record: WWII, Japanese internment, the Manhattan Project, and the foundation of American global military power.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  mainEntityOfPage: 'https://www.warcosts.org/presidents/fdr-wars',
}

const TIMELINE = [
  { year: '1939 Sep', event: 'Germany invades Poland. WWII begins in Europe. US officially neutral.' },
  { year: '1940 Sep', event: 'Selective Service Act — first peacetime draft in US history.' },
  { year: '1941 Mar', event: 'Lend-Lease Act: US becomes "arsenal of democracy," supplying Allies.' },
  { year: '1941 Aug', event: 'Atlantic Charter with Churchill — war aims before America is at war.' },
  { year: '1941 Dec 7', event: 'Pearl Harbor attacked. 2,403 Americans killed. "A date which will live in infamy."' },
  { year: '1941 Dec 8', event: 'Congress declares war on Japan. Vote: 82-0 Senate, 388-1 House.' },
  { year: '1941 Dec 11', event: 'Germany and Italy declare war on US. US reciprocates.' },
  { year: '1942 Feb', event: 'Executive Order 9066: Japanese internment begins. 120,000 imprisoned.' },
  { year: '1942 Jun', event: 'Battle of Midway — turning point in the Pacific.' },
  { year: '1942 Aug', event: 'Manhattan Project formally established. Race for the atomic bomb.' },
  { year: '1942 Nov', event: 'Operation Torch: US invasion of North Africa. First ground combat in Europe.' },
  { year: '1943 Sep', event: 'Allied invasion of Italy. Mussolini deposed.' },
  { year: '1944 Jun 6', event: 'D-Day: 156,000 troops storm Normandy. 4,414 Allied deaths on first day.' },
  { year: '1944 Dec', event: 'Battle of the Bulge — last major German offensive. 19,000 Americans killed.' },
  { year: '1945 Feb', event: 'Yalta Conference: FDR, Churchill, Stalin divide post-war world.' },
  { year: '1945 Apr 12', event: 'FDR dies. Truman inherits the war and the atomic bomb decision.' },
  { year: '1945 Jul', event: 'Trinity test: first nuclear detonation. Manhattan Project cost: $30B (2026$).' },
  { year: '1945 Aug 6', event: 'Hiroshima: ~80,000 killed instantly, 140,000 by end of year.' },
  { year: '1945 Aug 9', event: 'Nagasaki: ~40,000 killed instantly, 70,000 by end of year.' },
  { year: '1945 Sep 2', event: 'Japan surrenders. WWII ends. 405,399 Americans dead.' },
]

const COST_BREAKDOWN = [
  { category: 'Military Operations', amount: '$3.1T', note: 'All theaters: Europe, Pacific, North Africa' },
  { category: 'Lend-Lease Aid', amount: '$580B', note: 'Arms and supplies to Allies (UK, USSR, China, France)' },
  { category: 'Manhattan Project', amount: '$30B', note: 'Nuclear weapons development (2026$)' },
  { category: 'Veterans Benefits', amount: '$390B', note: 'GI Bill, healthcare, pensions (through present)' },
]

export default function FDRWarsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Presidents at War', href: '/presidents' },
          { label: 'Franklin D. Roosevelt', href: '/presidents/fdr' },
          { label: 'War Record' },
        ]} />

        {/* Hero */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 mt-4">
          <p className="text-red-400 font-medium text-sm uppercase tracking-wider mb-2">Presidential War Record</p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            FDR: Arsenal of Democracy
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl mb-8">
            The war that had to be fought. The war that killed 405,000 Americans and cost $4.1
            trillion. The war that imprisoned 120,000 Japanese Americans, created the atomic bomb,
            and built the military-industrial complex that Eisenhower would later warn us about.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">405,399</div>
              <div className="text-stone-400 text-sm mt-1">US Military Killed</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">$4.1T</div>
              <div className="text-stone-400 text-sm mt-1">Total Cost (2026$)</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">120,000</div>
              <div className="text-stone-400 text-sm mt-1">Japanese Americans Interned</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">210,000+</div>
              <div className="text-stone-400 text-sm mt-1">Hiroshima + Nagasaki Dead</div>
            </div>
          </div>
          <ShareButtons title="FDR: Arsenal of Democracy" />
        </div>

        {/* The Justified War */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">⚔️ The Justified War</h2>
          <div className="bg-white rounded-xl border p-6">
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                World War II is the exception that proves the rule. Nazi Germany conquered Europe and
                committed the Holocaust — the systematic murder of 6 million Jews and millions of
                others. Imperial Japan waged wars of conquest across Asia and the Pacific, committing
                atrocities from Nanjing to Manila.
              </p>
              <p>
                After Pearl Harbor, the United States had no choice but to fight. This was not a war
                of choice, not a war of empire, not a war launched on lies. It was a war of survival
                against genuine existential threats to democratic civilization.
              </p>
              <p>
                That the war was justified does not mean everything done in its prosecution was just.
                The internment of Japanese Americans, the firebombing of civilian cities, and the
                atomic bombings raise moral questions that remain unresolved 80 years later.
              </p>
            </div>
          </div>
        </section>

        {/* Cost */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">💰 The Cost: $4.1 Trillion</h2>
          <div className="space-y-4">
            {COST_BREAKDOWN.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border p-6 flex flex-wrap items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{c.category}</h3>
                  <p className="text-stone-600 text-sm">{c.note}</p>
                </div>
                <div className="text-2xl font-bold text-red-800">{c.amount}</div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
            <p className="text-amber-900">
              📊 WWII consumed 40% of US GDP at peak. The national debt rose from $49 billion to $260
              billion. The war effort employed 12 million Americans in the military and converted the
              entire civilian economy to war production. It was the largest mobilization in human history.
            </p>
          </div>
        </section>

        {/* Japanese Internment */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
            🔒 Japanese Internment: America&apos;s Shame
          </h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <blockquote className="border-l-4 border-red-700 pl-4 mb-6">
              <p className="text-xl italic">
                &ldquo;The continued retention of these innocent people in the relocation centers
                would be a blot upon the history of this country.&rdquo;
              </p>
              <footer className="text-stone-400 mt-2">— Harold Ickes, Secretary of the Interior (1943)</footer>
            </blockquote>
            <div className="space-y-4 text-stone-300">
              <p>
                On February 19, 1942, FDR signed Executive Order 9066, authorizing the forced
                relocation of 120,000 Japanese Americans — two-thirds of whom were US citizens.
                Families lost homes, businesses, and property. They were imprisoned in camps
                surrounded by barbed wire and guard towers for up to four years.
              </p>
              <p>
                No Japanese American was ever charged with espionage or sabotage. Not one. The
                internment was driven by racism, wartime hysteria, and economic opportunism —
                white farmers coveted Japanese American land.
              </p>
              <p>
                Meanwhile, the 442nd Regimental Combat Team — composed of Japanese Americans —
                became the most decorated unit in US military history, fighting in Europe while
                their families were imprisoned at home.
              </p>
              <p>
                In 1988, the US government formally apologized and paid $20,000 to each surviving
                internee. The total reparations: $1.6 billion. The moral debt: unpayable.
              </p>
            </div>
          </div>
        </section>

        {/* Manhattan Project & Atomic Bomb */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">☢️ The Atomic Bomb</h2>
          <div className="bg-white rounded-xl border p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-800">$30B</div>
                <div className="text-xs text-stone-500">Manhattan Project (2026$)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-800">130,000+</div>
                <div className="text-xs text-stone-500">Employed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-800">~140,000</div>
                <div className="text-xs text-stone-500">Hiroshima Dead (by Dec 1945)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-800">~70,000</div>
                <div className="text-xs text-stone-500">Nagasaki Dead (by Dec 1945)</div>
              </div>
            </div>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                FDR authorized the Manhattan Project in 1942 — the largest secret scientific
                project in history. He died on April 12, 1945, before the bomb was tested. The
                decision to use it fell to Truman.
              </p>
              <p>
                The debate over Hiroshima and Nagasaki continues 80 years later. The official
                justification: the bombs prevented an invasion of Japan that would have cost hundreds
                of thousands of American and Japanese lives. Critics argue Japan was already seeking
                surrender, that the bombs were primarily a demonstration of power aimed at the Soviet
                Union, and that the deliberate targeting of civilian population centers constitutes a
                war crime regardless of context.
              </p>
              <p>
                What is not debatable: the atomic bomb changed human civilization permanently. The
                nuclear age FDR initiated has brought the world to the brink of extinction multiple
                times since 1945.
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
                <div className="w-24 shrink-0 text-right">
                  <span className="text-sm font-mono font-bold text-red-800">{t.year}</span>
                </div>
                <div className="w-px bg-red-200 shrink-0" />
                <p className="text-stone-700 pb-2">{t.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Post-War Legacy */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🌍 The Post-War Order</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-3">Institutions Created</h3>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li>🏛️ <strong>United Nations</strong> (1945) — International peacekeeping</li>
                <li>🏛️ <strong>NATO</strong> (1949) — Collective defense alliance</li>
                <li>🏛️ <strong>World Bank / IMF</strong> (1944) — Bretton Woods economic order</li>
                <li>🏛️ <strong>CIA</strong> (1947) — Intelligence agency that would launch covert wars</li>
                <li>🏛️ <strong>Department of Defense</strong> (1947) — Unified military command</li>
                <li>🏛️ <strong>NSC</strong> (1947) — National Security Council</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-800 text-lg mb-3">The Military-Industrial Complex</h3>
              <p className="text-red-900 text-sm leading-relaxed">
                WWII transformed the American economy. Companies like Boeing, Lockheed, General
                Dynamics, and Raytheon grew from modest manufacturers to industrial giants dependent
                on military contracts. The &ldquo;temporary&rdquo; wartime infrastructure became
                permanent — 800+ overseas military bases, a standing army of millions, and a defense
                budget that never returned to pre-war levels. Eisenhower would warn about this in
                1961. We didn&apos;t listen.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🗽 The Assessment</h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <div className="space-y-4 text-stone-300 leading-relaxed">
              <p>
                Franklin Roosevelt led the United States through its most justified war. Nazi
                Germany and Imperial Japan posed genuine existential threats, and the Allied victory
                liberated hundreds of millions of people from fascist tyranny.
              </p>
              <p>
                But even the &ldquo;good war&rdquo; came with moral costs that demand honest
                accounting: 120,000 Japanese Americans imprisoned without charge. Civilian cities
                firebombed. Two nuclear weapons dropped on population centers. And the creation of a
                permanent military establishment that would project American power across the globe
                for the next 80 years — with consequences the founders of the republic could never
                have imagined.
              </p>
              <p>
                WWII is the war every subsequent president invokes to justify their wars. But no
                subsequent war has been WWII. No subsequent enemy has been Nazi Germany. The
                &ldquo;good war&rdquo; became the template for bad wars — and the infrastructure
                built to defeat Hitler became the infrastructure used to bomb Cambodia, invade Iraq,
                and launch drone strikes on wedding parties.
              </p>
              <p className="text-white font-medium">
                FDR built the arsenal of democracy. His successors turned it into an arsenal of empire.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <Link href="/presidents/lbj-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">Vietnam Era →</p>
            <p className="font-bold text-lg">LBJ: Vietnam&apos;s Architect</p>
            <p className="text-sm text-stone-600">The war that destroyed the Great Society</p>
          </Link>
          <Link href="/presidents/bush-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">Modern Era →</p>
            <p className="font-bold text-lg">Bush: $5.8 Trillion in War</p>
            <p className="text-sm text-stone-600">The War on Terror — built on FDR&apos;s infrastructure</p>
          </Link>
        </div>

        <BackToTop />
      </div>
    </>
  )
}
