import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spanish-American War Cost — $12 Billion, 2,446 US Dead, Birth of American Empire | WarCosts',
  description: 'The Spanish-American War (1898) cost $12 billion in today\'s dollars, killed 2,446 Americans (only 385 in combat — disease killed the rest), and transformed the US from republic to empire. Cuba, Philippines, Puerto Rico, Guam — all seized in 113 days.',
  keywords: ['Spanish-American war cost', 'Remember the Maine', 'USS Maine', 'Spanish-American war casualties', 'American imperialism', 'Philippines 1898', 'Rough Riders', 'yellow journalism'],
  openGraph: {
    title: 'The Spanish-American War — $12B, 2,446 Dead, Empire Is Born',
    description: 'A 113-day "splendid little war" that killed more Americans by disease than combat and turned the US into a colonial empire.',
    url: 'https://warcosts.org/spanish-american-war',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Total Cost (2024$)', value: '$12 Billion' },
  { label: 'US Military Deaths', value: '2,446' },
  { label: 'US Combat Deaths', value: '385' },
  { label: 'Disease Deaths', value: '2,061' },
  { label: 'Duration', value: '113 Days' },
  { label: 'Territories Acquired', value: '4' },
]

const costBreakdown = [
  { category: 'Direct Military Operations', amount: '$6.8B', desc: 'Naval and ground operations in Cuba, Philippines, Puerto Rico, Guam' },
  { category: 'Navy Modernization', amount: '$2.5B', desc: 'Pre-war steel navy buildup that made the war possible' },
  { category: 'Occupation & Administration', amount: '$1.5B', desc: 'Military government of new territories 1898-1902' },
  { category: 'Veterans Pensions', amount: '$1.2B', desc: 'Post-war benefits for Spanish-American War veterans' },
]

const timeline = [
  { year: '1895-97', title: 'Cuban Rebellion', desc: 'Cuba revolts against Spanish colonial rule. Spain responds with brutal "reconcentration" camps — forcing civilians into fortified towns where hundreds of thousands die of disease and starvation. American newspapers, led by William Randolph Hearst and Joseph Pulitzer, compete to publish the most sensational atrocity stories. "Yellow journalism" inflames public opinion.' },
  { year: 'Feb 9, 1898', title: 'The De Lôme Letter', desc: 'A private letter from Spanish Ambassador Dupuy de Lôme calling President McKinley "weak" is published by Hearst\'s New York Journal. The insult fuels war fever. De Lôme resigns.' },
  { year: 'Feb 15, 1898', title: 'USS Maine Explodes', desc: 'The battleship USS Maine explodes in Havana Harbor, killing 266 sailors. The cause is almost certainly an accidental coal bunker fire igniting adjacent ammunition magazines. But the press screams "Spanish treachery." "Remember the Maine, to hell with Spain!" becomes the rallying cry. Modern investigations confirm Spain had no motive or means to destroy the Maine.' },
  { year: 'Mar-Apr 1898', title: 'War Fever', desc: 'McKinley, who personally opposed war, faces overwhelming public pressure. Hearst reportedly tells his illustrator in Cuba: "You furnish the pictures, I\'ll furnish the war." Congress passes a joint resolution demanding Spanish withdrawal from Cuba. Spain offers major concessions — but it\'s too late.' },
  { year: 'Apr 25, 1898', title: 'War Declared', desc: 'Congress declares war. The Teller Amendment promises the US will not annex Cuba. (No such promise is made about any other Spanish territory.) The US Navy is modern and powerful; the Spanish Navy is obsolete.' },
  { year: 'May 1, 1898', title: 'Battle of Manila Bay', desc: 'Commodore George Dewey destroys the entire Spanish Pacific fleet in Manila Bay, Philippines — without losing a single American sailor. The battle takes about seven hours. Dewey becomes an instant national hero. The Philippines, which no one in Congress had discussed as a war aim, is suddenly American.' },
  { year: 'Jun-Jul 1898', title: 'Cuba Campaign', desc: 'US forces invade Cuba. The "Rough Riders" (1st US Volunteer Cavalry) led by Theodore Roosevelt charge up San Juan Heights (actually Kettle Hill). The all-Black 9th and 10th Cavalry Regiments (Buffalo Soldiers) do much of the actual fighting — a fact Roosevelt initially credits, then later downplays. Santiago surrenders July 17.' },
  { year: 'Jul 25, 1898', title: 'Puerto Rico Invaded', desc: 'US forces land in Puerto Rico. Resistance is minimal. The entire campaign takes 19 days. Puerto Rico becomes American territory — and remains so, with no statehood or voting representation, 127 years later.' },
  { year: 'Aug 12, 1898', title: 'Armistice', desc: 'Spain agrees to a cease-fire after 113 days of war. The outcome was never in doubt — Spain\'s military was decades behind. The real question: what happens to the conquered territories?' },
  { year: 'Dec 10, 1898', title: 'Treaty of Paris', desc: 'Spain cedes Cuba (nominally independent but under US control), Puerto Rico, Guam, and the Philippines. The US pays Spain $20 million for the Philippines. Filipino independence fighters, who had been allied with the US against Spain, are betrayed — sparking the Philippine-American War.' },
]

const casualtyAnalysis = {
  totalDead: 2446,
  combatDead: 385,
  diseaseDead: 2061,
  diseasePercentage: '84.3%',
  mainDiseases: ['Typhoid fever (caused by contaminated water/food)', 'Yellow fever (mosquito-borne)', 'Malaria (mosquito-borne)', 'Dysentery (contaminated water)'],
  worstIncident: 'The Army camp at Chickamauga, Georgia, saw more typhoid deaths than the entire combat campaign. Medical incompetence and unsanitary conditions killed more Americans than Spanish bullets by a ratio of 5 to 1.',
}

const keyFigures = [
  { name: 'William McKinley', role: 'President', desc: 'Personally opposed the war but bowed to public pressure and yellow journalism. Later decided to keep the Philippines after reportedly praying about it — God told him to "educate" and "Christianize" the Filipinos (most were already Catholic).' },
  { name: 'Theodore Roosevelt', role: 'Asst. Secretary of the Navy / Rough Rider', desc: 'Aggressive war hawk who maneuvered the Navy into position before war was declared. Led the Rough Riders at San Juan Heights. Used his war fame to become Governor, Vice President, then President. Embodied the muscular imperialism of the era.' },
  { name: 'William Randolph Hearst', role: 'Publisher, NY Journal', desc: 'Perhaps more responsible for the war than any politician. His sensationalist coverage ("yellow journalism") manufactured public outrage. Hearst personally traveled to Cuba to cover "his" war. The original media-industrial complex.' },
  { name: 'George Dewey', role: 'Admiral', desc: 'Destroyed the Spanish fleet at Manila Bay in hours. The victory — America\'s first major foreign naval triumph — announced the US as a Pacific power. The Philippines would remain an American concern for the next century.' },
  { name: 'Emilio Aguinaldo', role: 'Filipino Revolutionary', desc: 'Led the Philippine independence movement against Spain. Allied with the US during the war, expecting independence. Was betrayed when the US decided to keep the Philippines as a colony. Led the subsequent Philippine-American War.' },
]

const territoriesAcquired = [
  { name: 'Cuba', status: 'Nominally independent', detail: 'The Platt Amendment (1901) gave the US the right to intervene in Cuban affairs and established Guantánamo Bay naval base (still operating). Cuba was effectively a US protectorate until 1934.' },
  { name: 'Philippines', status: 'Colony until 1946', detail: 'Purchased from Spain for $20 million. Filipino resistance led to the Philippine-American War (1899-1902), which killed 200,000-1,000,000 Filipinos. Full independence granted 1946.' },
  { name: 'Puerto Rico', status: 'US Territory (still)', detail: 'Acquired in 1898, still a territory 127 years later. Puerto Ricans are US citizens but cannot vote in presidential elections and have no voting representation in Congress. Colonial status persists.' },
  { name: 'Guam', status: 'US Territory (still)', detail: 'Strategic Pacific island. Now hosts major US military installations including Andersen Air Force Base. Population has no Electoral College votes.' },
]

const faqs = [
  {
    q: 'How much did the Spanish-American War cost?',
    a: 'The Spanish-American War cost approximately $12 billion in 2024 dollars, including $6.8 billion in direct military operations, $2.5 billion in pre-war Navy modernization, $1.5 billion in occupation costs, and $1.2 billion in veteran pensions. The financial cost was modest — but the political cost was the end of the American republic as a non-imperial nation.',
  },
  {
    q: 'Did Spain blow up the USS Maine?',
    a: 'Almost certainly not. Modern investigations (most notably a 1976 study by Admiral Hyman Rickover and a 1998 National Geographic study) concluded that the explosion was most likely caused by a fire in a coal bunker that ignited adjacent ammunition magazines — an internal accident, not a Spanish attack. Spain had every reason to avoid provoking the US. But yellow journalism needed a villain, and the truth didn\'t sell newspapers.',
  },
  {
    q: 'How many Americans died in the Spanish-American War?',
    a: 'A total of 2,446 US military personnel died. Only 385 were killed in combat — the remaining 2,061 (84.3%) died from disease, primarily typhoid fever, yellow fever, and malaria. The disease death ratio was worse than the Mexican-American War. Medical incompetence and unsanitary camp conditions killed five Americans for every one killed by Spanish forces.',
  },
  {
    q: 'Why is the Spanish-American War important?',
    a: 'The Spanish-American War (1898) marks the moment the United States became an imperial power. In 113 days, America acquired Cuba, the Philippines, Puerto Rico, and Guam — its first overseas colonies. It sparked the Philippine-American War, established the US as a Pacific power, and set the template for 20th-century interventionism. Secretary of State John Hay called it "a splendid little war." For the Filipinos who died in the war that followed, it was anything but.',
  },
  {
    q: 'What role did yellow journalism play?',
    a: 'Yellow journalism — sensationalist, often fabricated reporting by newspapers like Hearst\'s New York Journal and Pulitzer\'s New York World — was instrumental in driving the US to war. Papers competed to publish the most outrageous stories of Spanish atrocities (some real, many exaggerated). After the Maine explosion, newspapers declared Spanish guilt with zero evidence. It was the first American war substantially manufactured by the media.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function SpanishAmericanWarPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Spanish-American War' }]} />
        <ShareButtons title="Spanish-American War — $12B, 2,446 Dead, Birth of American Empire" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Spanish-American War
          </h1>
          <p className="text-lg text-stone-500 mb-2">1898 · The &ldquo;Splendid Little War&rdquo; That Built an Empire</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            In <strong className="text-[#991b1b]">113 days</strong>, a manufactured crisis turned the American
            republic into an empire. <strong className="text-[#991b1b]">2,446 Americans</strong> died — only{' '}
            <strong className="text-[#991b1b]">385 in combat</strong>. Disease killed the rest. Yellow journalism
            sold the war, the USS Maine provided the pretext, and the US acquired{' '}
            <strong className="text-[#991b1b]">four territories</strong> it still hasn&apos;t fully let go of.
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

        {/* Cost Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Cost: $12 Billion for an Empire
          </h2>
          <p className="text-stone-700 mb-6">
            The Spanish-American War was relatively cheap in dollars — the real price was paid in principles.
            The nation that was founded in revolution against colonial rule became a colonial power itself.
            The financial cost was a bargain; the moral cost is still being calculated.
          </p>
          <div className="overflow-x-auto mb-6">
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

        {/* Casualty Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Casualties: Disease Killed 5x More Than Combat
          </h2>
          <p className="text-stone-700 mb-4">
            The Spanish-American War&apos;s death toll reveals a stunning reality: the US military was far more
            dangerous to its own soldiers than the enemy was. Of {casualtyAnalysis.totalDead} deaths,
            only {casualtyAnalysis.combatDead} were killed in action. The remaining{' '}
            <strong className="text-[#991b1b]">{casualtyAnalysis.diseaseDead}</strong> ({casualtyAnalysis.diseasePercentage})
            died from preventable diseases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">Primary Killers</h3>
              <ul className="text-sm text-stone-600 space-y-1">
                {casualtyAnalysis.mainDiseases.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The Worst Example</h3>
              <p className="text-sm text-stone-600">{casualtyAnalysis.worstIncident}</p>
            </div>
          </div>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-700 text-sm">
              The &ldquo;embalmed beef&rdquo; scandal exposed how the Army fed troops contaminated, chemically treated
              meat. A post-war commission found widespread negligence. The scandal helped fuel the Pure Food and Drug
              Act of 1906 — proving that sometimes the only good thing to come from war is outrage over how badly
              we treat our own soldiers.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline: From Yellow Journalism to Empire
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
            <div className="space-y-6">
              {timeline.map((event) => (
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

        {/* Territories */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Spoils: Four Territories, One Empire
          </h2>
          <p className="text-stone-700 mb-6">
            The Treaty of Paris transformed the United States from a continental republic into a global colonial
            power. Some of these territories remain under US control 127 years later — the longest-running
            colonial arrangement in the Western Hemisphere.
          </p>
          <div className="space-y-4">
            {territoriesAcquired.map((t) => (
              <div key={t.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-stone-800">{t.name}</span>
                  <span className="text-xs bg-[#991b1b]/10 text-[#991b1b] px-2 py-0.5 rounded">{t.status}</span>
                </div>
                <p className="text-sm text-stone-600">{t.detail}</p>
              </div>
            ))}
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

        {/* Editorial */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: The Republic Becomes an Empire
          </h2>
          <p className="text-stone-700 mb-4">
            The Spanish-American War was the inflection point. Before 1898, the United States was a continental
            power with isolationist tendencies. After 1898, it was a global empire with colonies, protectorates,
            and military bases spanning the Pacific.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-1">
              &ldquo;It has been a splendid little war, begun with the highest motives, carried on with magnificent
              intelligence and spirit, favored by that Fortune which loves the brave.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— Secretary of State John Hay, 1898</p>
          </div>
          <p className="text-stone-700 mb-4">
            &ldquo;Splendid&rdquo; for whom? Not for the 2,061 Americans who died of disease in their own camps.
            Not for the Filipinos who fought for independence only to get a new colonial master. Not for Puerto
            Ricans who became US citizens without representation — a status that persists to this day.
          </p>
          <p className="text-stone-700 mb-4">
            The war demonstrated how easily a democracy could be manipulated into conflict through media
            sensationalism and manufactured outrage. The pattern — media hysteria, dubious casus belli,
            quick military victory, unforeseen consequences — would replay throughout the 20th and 21st centuries.
            From the Gulf of Tonkin to Iraqi WMDs, the playbook written in 1898 still works.
          </p>
          <p className="text-stone-700">
            Mark Twain, who initially supported the war, became one of its fiercest critics after the Philippine
            conquest: &ldquo;We have gone there to conquer, not to redeem.&rdquo; He proposed redesigning the American
            flag with &ldquo;the white stripes painted black and the stars replaced by the skull and cross-bones.&rdquo;
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
              { href: '/philippine-american-war', label: 'Philippine-American War — The War That Followed' },
              { href: '/mexican-american-war', label: 'Mexican-American War — The First Conquest' },
              { href: '/analysis/lies-that-started-wars', label: 'Lies That Started Wars' },
              { href: '/analysis/media-and-war', label: 'Media and War: Manufacturing Consent' },
              { href: '/us-wars-list', label: 'Complete List of US Wars' },
              { href: '/analysis/cost-of-empire', label: 'The Cost of Empire' },
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
            <li>Congressional Research Service — Costs of Major US Wars</li>
            <li>National Archives — Spanish-American War Records</li>
            <li>Admiral Hyman Rickover — How the Battleship Maine Was Destroyed (1976)</li>
            <li>The War Lovers — Evan Thomas (2010)</li>
            <li>A People&apos;s History of the United States — Howard Zinn</li>
            <li>The Imperial Cruise — James Bradley</li>
            <li>National Geographic — USS Maine Investigation (1998)</li>
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
            headline: 'The Spanish-American War: $12 Billion, 2,446 Dead, Birth of American Empire',
            description: 'Comprehensive analysis of the Spanish-American War (1898) — costs, casualties, yellow journalism, and the birth of American imperialism.',
            url: 'https://warcosts.org/spanish-american-war',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-15',
            dateModified: '2025-03-15',
          }),
        }}
      />
    </main>
  )
}
