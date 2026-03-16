import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Intervention in Russia — Polar Bear Expedition, Siberian Expedition, 400+ Casualties (1918-1920) | WarCosts',
  description: 'The US sent 13,000 troops to Russia during the Civil War (1918-1920). The "Polar Bear Expedition" in Archangel and the Siberian Expedition. 400+ US casualties in a forgotten intervention against the Bolsheviks.',
  keywords: ['US intervention Russia', 'Polar Bear Expedition', 'Siberian Expedition', 'American Expeditionary Force Siberia', 'Archangel expedition', 'Russian Civil War', 'Bolsheviks', 'anti-Bolshevik intervention'],
  openGraph: {
    title: 'The Forgotten Invasion — US Troops in Russia (1918-1920)',
    description: '13,000 American soldiers sent to fight in the Russian Civil War. 400+ casualties. The intervention most Americans have never heard of.',
    url: 'https://warcosts.org/russian-civil-war',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'US Troops (Archangel)', value: '5,000' },
  { label: 'US Troops (Siberia)', value: '8,000' },
  { label: 'US Killed in Action', value: '~174' },
  { label: 'US Died of Disease/Other', value: '~250+' },
  { label: 'Total US Casualties', value: '400+' },
  { label: 'Duration', value: '1918-1920' },
]

const costBreakdown = [
  { category: 'Archangel (Polar Bear) Expedition', amount: '$200M', desc: '5,000 troops of the 339th Infantry, operations in Arctic conditions against Bolsheviks' },
  { category: 'Siberian Expedition (AEF Siberia)', amount: '$300M', desc: '8,000 troops of the 27th and 31st Infantry, operations across Siberia' },
  { category: 'Naval Operations', amount: '$50M', desc: 'Navy support for Arctic and Pacific supply lines' },
  { category: 'Logistics & Supply', amount: '$100M', desc: 'Maintaining forces in remote, hostile environments thousands of miles from support' },
]

const timelineArchangel = [
  { year: 'Mar 1918', title: 'Treaty of Brest-Litovsk', desc: 'Bolshevik Russia exits WWI, signing a separate peace with Germany. The Allies are furious — Russia\'s withdrawal frees German divisions for the Western Front. Massive Allied war supplies (worth billions) sit in Russian ports at Archangel and Vladivostok. The Allies fear these supplies will fall to Germany or the Bolsheviks.' },
  { year: 'Jun 1918', title: 'Decision to Intervene', desc: 'Wilson, under enormous pressure from Britain and France, agrees to send troops to Russia. The stated reasons: protect Allied war supplies, support the Czechoslovak Legion (Czech and Slovak POWs fighting their way across Siberia), and maintain an "Eastern Front" against Germany. The unstated reason: undermine the Bolshevik government. Wilson later claimed the intervention was not anti-Bolshevik. It was.' },
  { year: 'Sep 4, 1918', title: 'Polar Bears Arrive in Archangel', desc: 'The 339th Infantry Regiment (mostly draftees from Michigan) arrives in Archangel, Russia — above the Arctic Circle. They are issued Russian rifles (because American ammunition won\'t be available), placed under British command, and sent south to fight Bolshevik forces along the Northern Dvina River and railroad. Many of these soldiers have been in the Army less than four months.' },
  { year: 'Sep-Nov 1918', title: 'Combat Operations Begin', desc: 'American troops fight Bolshevik forces across a vast, frozen landscape. Engagements occur at Shenkursk, Tulgas, Kodish, and along the Vaga River. The fighting is brutal — Arctic cold, deep snow, temperatures reaching -40°F, and an enemy that knows the terrain. Morale plummets as soldiers learn that WWI has ended (November 11) but they\'re still fighting in Russia.' },
  { year: 'Jan 19, 1919', title: 'Battle of Shenkursk', desc: 'Bolshevik forces attack the American-held town of Shenkursk with overwhelming numbers. The garrison is nearly overrun. Americans retreat through deep snow in -45°F temperatures, suffering severe casualties and frostbite. It\'s the worst American defeat of the intervention and demonstrates the futility of the mission.' },
  { year: 'Mar-Jun 1919', title: 'Mutiny & Withdrawal', desc: 'As spring approaches, American soldiers refuse to advance. Several units effectively mutiny, demanding to know why they\'re still fighting in Russia when the war is over. British commanders are furious. American officers are sympathetic. The Army begins withdrawing, with the last Polar Bears leaving Archangel in late July 1919. 235 Americans are dead.' },
]

const timelineSiberia = [
  { year: 'Aug 1918', title: 'AEF Siberia Arrives', desc: 'The 27th and 31st Infantry Regiments (8,000 troops) under General William Graves arrive in Vladivostok, Siberia. Graves has orders from Wilson to remain neutral in the Russian Civil War — protect the Czech Legion and Allied supplies, nothing more. This puts him in an impossible position: the Japanese (who send 70,000 troops) and White Russian forces expect American support for anti-Bolshevik operations.' },
  { year: '1918-1919', title: 'Guarding the Railroad', desc: 'American troops guard sections of the Trans-Siberian Railroad, protect Allied supplies, and try to remain neutral while surrounded by warring factions. They face attacks from both Bolshevik partisans and Cossack bandits loyal to White Russian warlords. General Graves becomes increasingly alarmed by White Russian atrocities — mass executions, village burnings, and the terrorizing of civilians.' },
  { year: '1919', title: 'Japanese Expansionism', desc: 'Japan deploys 70,000 troops to Siberia — far more than any other intervening power. Japan\'s goal is transparently imperial: controlling Siberian resources and expanding into Manchuria. Graves realizes that one purpose of the American presence is to check Japanese expansion — but Wilson never explicitly says so. The US and Japan engage in a shadow competition across Siberia.' },
  { year: 'Nov 1919', title: 'Kolchak\'s Collapse', desc: 'Admiral Alexander Kolchak, the leading White Russian commander in Siberia (recognized by Allied powers as "Supreme Ruler of Russia"), is defeated by the Red Army. His government collapses. The White Russian cause in Siberia is lost. Kolchak is captured and executed in February 1920. The rationale for the American presence evaporates.' },
  { year: 'Apr 1, 1920', title: 'Withdrawal Complete', desc: 'The last American troops leave Vladivostok. Japan stays until 1922. The Siberian intervention has cost approximately 189 American lives and achieved nothing. General Graves later wrote that his mission had been "non-interference in Russian affairs" — a characterization the Bolsheviks did not share.' },
]

const keyFigures = [
  { name: 'Woodrow Wilson', role: 'President', desc: 'Reluctantly agreed to intervention under Allied pressure. His aide-mémoire of July 1918 listed limited objectives (protect supplies, support Czechs) but the reality was anti-Bolshevik intervention. Wilson\'s ambiguity left American commanders in impossible situations with contradictory orders. The intervention contradicted Wilson\'s own rhetoric about self-determination.' },
  { name: 'William Graves', role: 'General, AEF Siberia', desc: 'Commanded 8,000 American troops in Siberia with orders to remain neutral. One of the most principled American generals of the era — he refused to support White Russian forces despite enormous pressure from Allies and his own War Department. His memoir, "America\'s Siberian Adventure," is a damning account of the intervention\'s futility.' },
  { name: 'Winston Churchill', role: 'British War Secretary', desc: 'The most aggressive proponent of anti-Bolshevik intervention. Churchill wanted to "strangle Bolshevism in its cradle" and pressured the US to commit more forces. He envisioned a full-scale Allied war against the Bolsheviks — a vision Wilson rejected but partially enabled through the interventions he approved.' },
  { name: 'The Czech Legion', role: 'Czechoslovak Forces', desc: 'Approximately 70,000 Czech and Slovak former POWs fighting their way across Siberia to Vladivostok for evacuation. Their conflict with Bolshevik forces along the Trans-Siberian Railroad was the stated justification for intervention. The Czech Legion eventually evacuated through Vladivostok — but not before becoming entangled in the Russian Civil War themselves.' },
]

const faqs = [
  {
    q: 'Why did the US invade Russia?',
    a: 'The official reasons were: (1) protect Allied war supplies at Archangel and Vladivostok from falling to Germany or the Bolsheviks, (2) support the Czechoslovak Legion fighting across Siberia, and (3) maintain a nominal "Eastern Front" against Germany. The unofficial reason was to undermine the Bolshevik government and support anti-Bolshevik (White Russian) forces. Wilson publicly denied anti-Bolshevik intent, but the effect of the intervention was to prolong the Russian Civil War and establish deep Soviet distrust of the United States.',
  },
  {
    q: 'How many US troops were sent to Russia?',
    a: 'Approximately 13,000 total: 5,000 to Archangel (the "Polar Bear Expedition," primarily the 339th Infantry Regiment from Michigan) and 8,000 to Siberia (the American Expeditionary Force Siberia, primarily the 27th and 31st Infantry Regiments). The Archangel force fought under British command; the Siberian force under American General William Graves.',
  },
  {
    q: 'How many Americans died in Russia?',
    a: 'Approximately 400+ total casualties. About 174 were killed in combat, with the remainder dying from disease (the 1918-1919 influenza pandemic was especially deadly), accidents, and exposure to Arctic conditions. The Archangel expedition suffered approximately 235 deaths; the Siberian expedition approximately 189. Many Polar Bear bodies were not recovered until 1929 — and some remain in Russia.',
  },
  {
    q: 'What was the Polar Bear Expedition?',
    a: 'The "Polar Bear Expedition" refers to the 5,000 American soldiers (primarily Michigan draftees of the 339th Infantry) sent to Archangel, Russia, in September 1918. Placed under British command, they fought Bolshevik forces in Arctic conditions through the winter of 1918-1919. The name comes from their shoulder patch — a polar bear — adopted during the mission. Morale collapsed when WWI ended but they were kept fighting. Near-mutinies occurred in 1919. They withdrew in July 1919.',
  },
  {
    q: 'Did the Russian intervention cause the Cold War?',
    a: 'It contributed significantly. The interventions confirmed Bolshevik suspicions that Western capitalist powers would try to destroy the Soviet state. Lenin and Stalin both cited the 1918-1920 interventions as proof of Western hostility. Soviet propaganda used the interventions for decades. While the Cold War had many causes — ideological, geopolitical, nuclear — the 1918 intervention established a pattern of mutual distrust that persisted for 70 years. Americans forgot they invaded Russia. The Russians never did.',
  },
  {
    q: 'Why don\'t Americans know about the Russian intervention?',
    a: 'Several reasons: (1) It was overshadowed by WWI, which ended just as the intervention began. (2) It failed — achieving none of its objectives — and nations prefer to forget failed wars. (3) During the Cold War, acknowledging that the US had invaded Russia first was inconvenient for the narrative of Soviet aggression. (4) The intervention was never formally declared by Congress, making it easier to exclude from official war histories. It remains one of the most consequential forgotten episodes in American military history.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function RussianCivilWarPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Russian Civil War Intervention' }]} />
        <ShareButtons title="US Troops in Russia — The Forgotten Intervention (1918-1920)" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            US Intervention in the Russian Civil War
          </h1>
          <p className="text-lg text-stone-500 mb-2">1918–1920 · The Forgotten Invasion</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            <strong className="text-[#991b1b]">13,000 American troops</strong> sent to Russia.{' '}
            <strong className="text-[#991b1b]">400+ casualties</strong>. Fighting in Arctic conditions,
            through a Russian winter, in a civil war that wasn&apos;t theirs, for objectives no one
            could clearly define. The &ldquo;Polar Bear Expedition&rdquo; to Archangel and the Siberian
            Expedition — the interventions that helped launch the Cold War before it had a name.
          </p>
        </header>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {keyStats.map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl md:text-2xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Cost: $650M for a Generation of Distrust
          </h2>
          <p className="text-stone-700 mb-6">
            The financial cost was modest by wartime standards. The strategic cost was incalculable.
            The interventions failed to overthrow the Bolsheviks, failed to protect Allied supplies
            (which were largely irrelevant after WWI ended), and succeeded only in confirming Soviet
            suspicion of Western intent — a suspicion that fueled 70 years of Cold War.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount (2024$)</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">{r.amount}</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Context: Revolution, Betrayal, and Intervention
          </h2>
          <p className="text-stone-700 mb-4">
            When the Bolsheviks seized power in November 1917, they inherited a nation devastated by
            three years of war. Lenin&apos;s first act was to sue for peace with Germany — fulfilling
            his promise to end the war. The Treaty of Brest-Litovsk (March 1918) withdrew Russia from
            WWI, ceding massive territory to Germany.
          </p>
          <p className="text-stone-700 mb-4">
            The Allies were apoplectic. Russia&apos;s withdrawal freed 50+ German divisions for the
            Western Front at the most critical moment of the war. Billions in Allied war supplies sat
            in Russian ports. And a revolutionary government explicitly dedicated to the overthrow of
            capitalism now controlled the world&apos;s largest country.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-700 text-sm">
              Fourteen nations ultimately intervened in the Russian Civil War: Britain, France, the US,
              Japan, Canada, Australia, Italy, Greece, Romania, Serbia, China, Poland, Finland, and
              Estonia. The intervention was the largest multinational military operation between WWI and
              WWII — and it failed completely. The Bolsheviks won the civil war despite (or perhaps
              partly because of) foreign intervention, which allowed them to rally nationalist sentiment
              against the invaders.
            </p>
          </div>
        </section>

        {/* Archangel Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            The Polar Bear Expedition: Archangel (1918-1919)
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
            <div className="space-y-6">
              {timelineArchangel.map((event) => (
                <div key={event.year} className="relative pl-10">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#991b1b]" />
                  <div className="text-sm font-mono text-[#991b1b] mb-1">{event.year}</div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-1">{event.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Siberia Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            The Siberian Expedition: AEF Siberia (1918-1920)
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
            <div className="space-y-6">
              {timelineSiberia.map((event) => (
                <div key={event.year} className="relative pl-10">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#991b1b]" />
                  <div className="text-sm font-mono text-[#991b1b] mb-1">{event.year}</div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-1">{event.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Figures */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Key Figures
          </h2>
          <div className="space-y-4">
            {keyFigures.map((f) => (
              <div key={f.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="font-semibold text-stone-800">{f.name} <span className="text-sm text-stone-500 font-normal">— {f.role}</span></div>
                <p className="text-sm text-stone-600 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What It Was Like */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            What It Was Like: Fighting in the Arctic
          </h2>
          <p className="text-stone-700 mb-4">
            The Polar Bear soldiers endured conditions no American army had faced since Valley Forge.
            Temperatures dropped to -50°F. The sun disappeared for weeks. Supply lines stretched across
            frozen rivers and through dense forests. Men fought in snowshoes. Rifles froze. Machine guns
            jammed. Wounded soldiers faced hours of evacuation across frozen terrain.
          </p>
          <p className="text-stone-700 mb-4">
            Worst of all was the morale crisis. These soldiers had been drafted to fight Germany. The
            Armistice ended that war on November 11, 1918. Yet they were still fighting — and dying —
            in Russia, for objectives their own officers couldn&apos;t explain. Letters home were
            desperate: &ldquo;Why are we still here?&rdquo; The question was never adequately answered.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-700 text-sm">
              When the Polar Bears finally returned to Michigan in July 1919, they discovered that most
              Americans had no idea they had been in Russia at all. The intervention received minimal
              press coverage. There were no parades. The bodies of many fallen Polar Bears remained in
              Russia until a privately funded expedition recovered 86 of them in 1929. Some remain
              unrecovered to this day.
            </p>
          </div>
        </section>

        {/* Editorial */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: Seeds of the Cold War
          </h2>
          <p className="text-stone-700 mb-4">
            The Russian intervention is perhaps the most consequential forgotten episode in American
            military history. It achieved none of its stated objectives. The Bolsheviks consolidated
            power despite the intervention. Allied supplies were not protected. The Czech Legion
            eventually evacuated through Vladivostok regardless. The White Russian cause collapsed.
          </p>
          <p className="text-stone-700 mb-4">
            What the intervention did achieve was a legacy of distrust that poisoned US-Soviet relations
            for generations. Lenin, Stalin, and every subsequent Soviet leader cited the 1918 intervention
            as proof that Western capitalism was inherently hostile to the Soviet state. When Americans
            wondered why the Soviets were so paranoid about Western intentions, the answer was simple:
            the West had invaded them.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-1">
              &ldquo;I was in command of the US troops sent to Siberia and I must admit, I do not know
              what the US was trying to do.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— General William Graves, America&apos;s Siberian Adventure (1931)</p>
          </div>
          <p className="text-stone-700">
            The intervention also set a template for American Cold War behavior: supporting anti-communist
            forces regardless of their democratic credentials, intervening in civil wars with unclear
            objectives, and expecting that military force could achieve political outcomes in foreign
            societies the interveners didn&apos;t understand. The Russian Civil War intervention was
            Vietnam before Vietnam, Afghanistan before Afghanistan — the first American war fought not
            against a nation, but against an ideology. It would not be the last.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-stone-200 pb-4">
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/world-war-1', label: 'World War I — The War That Started It' },
              { href: '/boxer-rebellion', label: 'Boxer Rebellion — Another Multinational Intervention' },
              { href: '/banana-wars', label: 'Banana Wars — Intervention Everywhere' },
              { href: '/analysis/americas-forgotten-wars', label: 'America\'s Forgotten Wars' },
              { href: '/analysis/timeline-of-american-empire', label: 'Timeline of American Empire' },
              { href: '/korean-war', label: 'Korean War — The Cold War Turns Hot' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-stone-50 hover:bg-stone-100 rounded-lg p-3 border border-stone-200 text-stone-700 hover:text-[#991b1b] transition-colors text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>William Graves — America&apos;s Siberian Adventure, 1918-1920 (1931)</li>
            <li>Robert Willett — Russian Sideshow: America&apos;s Undeclared War, 1918-1920 (2003)</li>
            <li>Dennis Gordon — Quartered in Hell: The Story of the American North Russia Expeditionary Force (1982)</li>
            <li>David Foglesong — America&apos;s Secret War Against Bolshevism (1995)</li>
            <li>Army Center of Military History — The US Army in the World War, 1917-1919</li>
            <li>Polar Bear Memorial Association — Historical Records</li>
          </ul>
        </section>

        <BackToTop />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'US Intervention in the Russian Civil War (1918-1920)',
            description: 'The Polar Bear Expedition and Siberian Expedition — 13,000 American troops sent to Russia in a forgotten intervention that helped seed the Cold War.',
            url: 'https://warcosts.org/russian-civil-war',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-16',
            dateModified: '2025-03-16',
          }),
        }}
      />
    </main>
  )
}
