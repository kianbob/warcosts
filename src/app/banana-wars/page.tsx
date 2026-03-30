import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Banana Wars — US Military Interventions in Latin America 1898-1934, War is a Racket | WarCosts',
  description: 'The Banana Wars (1898-1934): decades of US military interventions in Cuba, Honduras, Nicaragua, Haiti, Dominican Republic, and Panama. Smedley Butler\'s "War is a Racket." United Fruit Company. Marine occupations that shaped a hemisphere.',
  keywords: ['Banana Wars', 'US interventions Latin America', 'Smedley Butler', 'War is a Racket', 'United Fruit Company', 'Marine occupations', 'Haiti occupation', 'Nicaragua intervention', 'gunboat diplomacy'],
  openGraph: {
    title: 'The Banana Wars — When the Marines Worked for United Fruit',
    description: 'How the US military occupied half of Latin America for decades, protecting corporate profits while claiming to spread democracy. Smedley Butler called it a "racket."',
    url: 'https://warcosts.org/banana-wars',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Period', value: '1898-1934' },
  { label: 'Countries Invaded', value: '7+' },
  { label: 'US Military Occupations', value: '6' },
  { label: 'Longest Occupation', value: '19 Years (Haiti)' },
  { label: 'US Military Deaths', value: '~500+' },
  { label: 'Latin American Deaths', value: 'Tens of Thousands' },
]

const interventions = [
  {
    country: 'Cuba',
    period: '1898-1902, 1906-09, 1912, 1917-22',
    desc: 'The Spanish-American War "liberated" Cuba — then the Platt Amendment (1901) gave the US the right to intervene in Cuban affairs, control its foreign policy, and maintain a naval base at Guantánamo Bay (still operating). US troops occupied Cuba four times. The Platt Amendment wasn\'t repealed until 1934. Cuba\'s resentment of decades of American domination is essential context for understanding the Cuban Revolution of 1959.',
    deaths: 'Thousands (across occupations)',
    cost: '$500M+',
  },
  {
    country: 'Panama',
    period: '1903-1914, 1918-20, 1925',
    desc: 'When Colombia refused to lease the Panama Canal Zone on US terms, Roosevelt backed a Panamanian "revolution" (orchestrated by a French engineer and Wall Street speculators). The US recognized Panama within hours and secured the Canal Zone. The Hay-Bunau-Varilla Treaty gave the US control of a 10-mile-wide strip "in perpetuity." Marines intervened repeatedly to suppress strikes and political unrest. The Canal Zone wasn\'t returned until 1999.',
    deaths: 'Hundreds',
    cost: '$8B+ (canal construction)',
  },
  {
    country: 'Honduras',
    period: '1903, 1907, 1911, 1912, 1919, 1924, 1925',
    desc: 'The original "banana republic." Honduras was so thoroughly controlled by United Fruit Company and Standard Fruit that the US military intervened seven times in 22 years — always to protect American business interests. Sam Zemurray, the "Banana Man," literally hired mercenaries to overthrow the Honduran government in 1911 when it threatened his concessions. The term "banana republic" was coined by O. Henry to describe Honduras.',
    deaths: 'Unknown — poorly documented',
    cost: 'Minimal military, massive corporate',
  },
  {
    country: 'Nicaragua',
    period: '1909-10, 1912-33',
    desc: 'Marines occupied Nicaragua almost continuously from 1912 to 1933 — 21 years. The US installed compliant presidents, ran elections, and fought a guerrilla war against Augusto César Sandino, whose resistance movement gave its name to the Sandinistas. The US trained the Nicaraguan National Guard under Anastasio Somoza, who seized power in 1936 and founded a brutal dynastic dictatorship that lasted until 1979. FDR reportedly said of Somoza: "He may be a son of a bitch, but he\'s our son of a bitch."',
    deaths: 'Thousands (Sandino\'s war)',
    cost: '$200M+',
  },
  {
    country: 'Haiti',
    period: '1915-1934',
    desc: 'The longest Banana Wars occupation. Marines invaded after political chaos and stayed 19 years. The US dissolved the Haitian legislature at gunpoint, imposed a new constitution (written by Franklin Roosevelt as Assistant Secretary of the Navy), reintroduced forced labor (corvée) that resembled slavery, and killed thousands of Haitian rebels (the Caco Wars). The occupation did build infrastructure — roads, hospitals, telephone systems — but primarily to facilitate American business operations and debt collection.',
    deaths: '3,000-15,000+ Haitians (Caco Wars)',
    cost: '$300M+',
  },
  {
    country: 'Dominican Republic',
    period: '1903, 1904, 1914, 1916-24',
    desc: 'Marines occupied the Dominican Republic for eight years (1916-1924), establishing military government, censoring the press, disarming the population, and fighting guerrilla resistance in the east. The US trained the Dominican constabulary under Rafael Trujillo, who used it to seize power in 1930 and establish one of Latin America\'s most brutal dictatorships — lasting until his assassination in 1961.',
    deaths: 'Thousands',
    cost: '$200M+',
  },
  {
    country: 'Mexico (Punitive Expedition)',
    period: '1916-1917',
    desc: 'After Pancho Villa raided Columbus, New Mexico (killing 18 Americans), President Wilson sent 10,000 troops under General John J. Pershing into Mexico. The expedition chased Villa for 11 months across 350 miles of Mexican desert, never caught him, and nearly started a full-scale war with Mexico (the Battle of Carrizal). The expedition trained officers — including Pershing, Patton, and others — who would lead the American Expeditionary Force in WWI.',
    deaths: '~25 US, hundreds of Mexicans',
    cost: '$200M+',
  },
]

const keyFigures = [
  { name: 'Smedley Butler', role: 'USMC Major General', desc: 'The most decorated Marine in US history (at the time of his death). Fought in virtually every Banana War. After retirement, wrote "War is a Racket" (1935), exposing how his military career had been spent protecting corporate profits. His confession is the most devastating insider critique of American interventionism ever written. "I spent most of my time as a high class muscle man for Big Business, for Wall Street and the bankers."' },
  { name: 'Theodore Roosevelt', role: 'President', desc: 'The architect of the Banana Wars era. His "Roosevelt Corollary" to the Monroe Doctrine (1904) asserted the US right to intervene in any Latin American country to maintain "order." He orchestrated Panama\'s independence, built the canal, and established the template of gunboat diplomacy that his successors followed for three decades.' },
  { name: 'Woodrow Wilson', role: 'President', desc: 'Despite his rhetoric about self-determination, Wilson ordered more Latin American interventions than any president. He occupied Haiti, the Dominican Republic, and Veracruz (Mexico), and sent Pershing into Mexico. He believed in spreading democracy — by force, if necessary, and without consulting the people being "democratized."' },
  { name: 'Augusto César Sandino', role: 'Nicaraguan Guerrilla Leader', desc: 'Fought the US Marine occupation of Nicaragua from 1927 to 1933 — the only Banana Wars resistance leader the US never defeated. His tactics inspired guerrilla movements across Latin America. Murdered by Somoza\'s National Guard in 1934. The Sandinista revolution of 1979 took his name.' },
  { name: 'Sam Zemurray', role: 'United Fruit Company', desc: 'The "Banana Man" who rose from a fruit peddler to control United Fruit Company. Personally financed the 1911 coup in Honduras. United Fruit owned more land in Latin America than some countries\' governments. The company\'s political influence was so total that "banana republic" became a permanent addition to the English language.' },
]

const faqs = [
  {
    q: 'What were the Banana Wars?',
    a: 'The Banana Wars (1898-1934) were a series of US military interventions and occupations in Latin America and the Caribbean. The US invaded or occupied Cuba, Panama, Honduras, Nicaragua, Haiti, the Dominican Republic, and Mexico, primarily to protect American business interests (especially United Fruit Company), collect debts, and maintain political "stability" favorable to US corporations. The term "Banana Wars" reflects the role of fruit companies in driving interventions.',
  },
  {
    q: 'How much did the Banana Wars cost?',
    a: 'The direct military cost of the Banana Wars is difficult to calculate precisely due to their overlapping nature and long duration, but conservative estimates place the total at $1-2 billion in 2024 dollars. The economic exploitation of the occupied countries — in land, resources, labor, and trade advantages — was worth many times more. The long-term costs include the dictatorships installed during these occupations, several of which persisted for decades.',
  },
  {
    q: 'What is "War is a Racket"?',
    a: '"War is a Racket" is a 1935 book by Major General Smedley Butler, the most decorated Marine of his era. Butler argued that his military career had been spent protecting corporate profits rather than national security. He wrote: "I helped make Mexico safe for American oil interests. I helped make Haiti and Cuba a decent place for the National City Bank boys to collect revenues. I helped in the raping of half a dozen Central American republics for the benefit of Wall Street." The book remains one of the most powerful anti-war statements by a military insider.',
  },
  {
    q: 'What is a "banana republic"?',
    a: 'The term "banana republic" was coined by American writer O. Henry in his 1904 novel "Cabbages and Kings," based on his experiences in Honduras. It describes a politically unstable country whose economy depends on a single export commodity, controlled by foreign corporations. Honduras and other Central American nations were so thoroughly dominated by United Fruit Company that the company controlled more land, infrastructure, and political power than the national governments.',
  },
  {
    q: 'Did the Banana Wars create Latin American dictatorships?',
    a: 'Yes, directly. The US military occupations of Nicaragua, the Dominican Republic, and Haiti all included training local military/police forces that subsequently produced dictators: Somoza in Nicaragua (dynasty 1936-1979), Trujillo in the Dominican Republic (ruled 1930-1961), and a series of authoritarian governments in Haiti. The pattern — train a "national guard" during occupation, withdraw, watch the guard\'s commander seize power — repeated with devastating consistency.',
  },
  {
    q: 'How do the Banana Wars relate to modern Latin American politics?',
    a: 'The Banana Wars established patterns that persisted throughout the 20th century: the 1954 CIA coup in Guatemala (on behalf of United Fruit), the Bay of Pigs, support for the Contras in Nicaragua, the invasion of Panama (1989), and ongoing tensions with Cuba, Venezuela, and other nations. Latin American distrust of US intentions is rooted in decades of direct military occupation. As Smedley Butler noted, these interventions served corporate interests while creating lasting anti-American sentiment throughout the hemisphere.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function BananaWarsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Banana Wars' }]} />
        <ShareButtons title="The Banana Wars — When the Marines Worked for United Fruit" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Banana Wars
          </h1>
          <p className="text-lg text-stone-500 mb-2">1898–1934 · &ldquo;War Is a Racket&rdquo;</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            Three decades of US military invasions and occupations across Latin America and the Caribbean.{' '}
            <strong className="text-[#991b1b]">7+ countries invaded</strong>. Occupations lasting up to{' '}
            <strong className="text-[#991b1b]">19 years</strong>. Dictatorships installed. Corporate profits
            protected. The most decorated Marine in history later called it a{' '}
            <strong className="text-[#991b1b]">&ldquo;racket&rdquo;</strong> — muscle work for Wall Street and
            the banana companies.
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

        {/* Butler Quote */}
        <section className="mb-12">
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-6 rounded-r-lg">
            <p className="text-stone-800 italic mb-2 text-lg leading-relaxed">
              &ldquo;I spent 33 years and four months in active military service and during that period I spent most
              of my time as a high class muscle man for Big Business, for Wall Street and the bankers. In short,
              I was a racketeer, a gangster for capitalism.&rdquo;
            </p>
            <p className="text-stone-800 italic mb-2">
              &ldquo;I helped make Mexico and especially Tampico safe for American oil interests in 1914. I helped
              make Haiti and Cuba a decent place for the National City Bank boys to collect revenues in. I helped
              in the raping of half a dozen Central American republics for the benefit of Wall Street.&rdquo;
            </p>
            <p className="text-stone-800 italic mb-2">
              &ldquo;I helped purify Nicaragua for the International Banking House of Brown Brothers in 1902-1912.
              I brought light to the Dominican Republic for the American sugar interests in 1916. I helped make
              Honduras right for the American fruit companies in 1903.&rdquo;
            </p>
            <p className="text-stone-500 text-sm mt-3">
              — Major General Smedley D. Butler, USMC, two-time Medal of Honor recipient, &ldquo;War Is a Racket&rdquo; (1935)
            </p>
          </div>
        </section>

        {/* Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Context: The Roosevelt Corollary
          </h2>
          <p className="text-stone-700 mb-4">
            The legal framework for the Banana Wars was Theodore Roosevelt&apos;s 1904 Corollary to the Monroe
            Doctrine. While the original Monroe Doctrine (1823) warned European powers against intervention in
            the Americas, Roosevelt flipped it: the US would now intervene in Latin American nations that
            showed &ldquo;chronic wrongdoing&rdquo; or an &ldquo;inability to maintain order.&rdquo;
          </p>
          <p className="text-stone-700 mb-4">
            In practice, &ldquo;chronic wrongdoing&rdquo; meant threatening American business interests.
            &ldquo;Inability to maintain order&rdquo; meant any political instability that might affect
            debt payments to US banks. The Corollary transformed the Monroe Doctrine from a defensive
            shield into a license for intervention — a blank check the Marines would cash for three decades.
          </p>
          <p className="text-stone-700">
            The policy was also called &ldquo;Dollar Diplomacy&rdquo; (under Taft) and &ldquo;Gunboat
            Diplomacy&rdquo; — names that accurately described the relationship between financial interests
            and military force. The Marines went where the money needed protection.
          </p>
        </section>

        {/* Country-by-Country */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Country by Country: The Interventions
          </h2>
          <div className="space-y-6">
            {interventions.map((inv) => (
              <div key={inv.country} className="border-b border-stone-200 pb-6">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-stone-800">{inv.country}</h3>
                  <span className="text-sm font-mono text-[#991b1b]">{inv.period}</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-2">{inv.desc}</p>
                <div className="flex gap-4 text-xs text-stone-500">
                  <span>Deaths: {inv.deaths}</span>
                  <span>Est. Cost (2024$): {inv.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* United Fruit */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            United Fruit Company: The Corporation Behind the Wars
          </h2>
          <p className="text-stone-700 mb-4">
            No single corporation has influenced US foreign policy more directly than the United Fruit Company
            (now Chiquita Brands International). At its peak, United Fruit owned:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              '3.5 million acres across six Central American countries — more land than some of these nations\' governments controlled.',
              'Railroads, ports, telegraph systems, and the only shipping lines connecting Central America to US markets.',
              'Company towns with their own schools, hospitals, and commissaries — parallel governments accountable to shareholders, not citizens.',
              'The "Great White Fleet" — the largest private navy in the world, with more ships than most Latin American countries\' navies.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-stone-700">
                <span className="text-[#991b1b] font-bold mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-stone-700 mb-4">
            United Fruit didn&apos;t just benefit from US military interventions — it drove them. The company
            maintained a network of lobbyists, intelligence operatives, and media contacts in Washington.
            When a Latin American government threatened its concessions — through land reform, labor laws,
            or taxation — United Fruit called in the Marines.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-700 text-sm">
              The most notorious example came after the Banana Wars period: in 1954, the CIA overthrew the
              democratically elected government of Guatemala at United Fruit&apos;s behest. President Jacobo
              Árbenz had begun land reform that affected United Fruit&apos;s unused land holdings. CIA Director
              Allen Dulles and Secretary of State John Foster Dulles were both former United Fruit attorneys.
              The resulting coup triggered a 36-year civil war that killed 200,000 Guatemalans.
            </p>
          </div>
        </section>

        {/* The Dictators We Created */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Dictators We Created
          </h2>
          <p className="text-stone-700 mb-4">
            The most enduring legacy of the Banana Wars is the dictatorships that followed. The pattern was
            consistent: occupy a country, train a local military force, withdraw, watch the military
            commander seize power.
          </p>
          <div className="space-y-4">
            {[
              { name: 'Anastasio Somoza García', country: 'Nicaragua', period: 'Dynasty: 1936-1979', desc: 'Commander of the US-trained National Guard. Seized power after the Marines withdrew. The Somoza family ruled Nicaragua for 43 years through corruption, repression, and unwavering loyalty to the US. Overthrown by the Sandinistas in 1979.' },
              { name: 'Rafael Trujillo', country: 'Dominican Republic', period: 'Ruled: 1930-1961', desc: 'Rose through the US-trained Dominican constabulary. Ruled for 31 years as one of Latin America\'s most brutal dictators. Responsible for the Parsley Massacre (1937) — the slaughter of an estimated 20,000-30,000 Haitians. Assassinated in 1961 with CIA knowledge.' },
              { name: 'François "Papa Doc" Duvalier', country: 'Haiti', period: 'Dynasty: 1957-1986', desc: 'While not directly installed by the US, the security apparatus left behind by the 19-year American occupation created the conditions for Duvalier\'s rise. His Tonton Macoutes terrorized Haiti for nearly three decades. His son "Baby Doc" continued until overthrown in 1986.' },
            ].map((d) => (
              <div key={d.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="font-semibold text-stone-800">{d.name}</span>
                  <span className="text-sm text-[#991b1b]">{d.country}</span>
                  <span className="text-xs text-stone-500">{d.period}</span>
                </div>
                <p className="text-sm text-stone-600">{d.desc}</p>
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
            Legacy: Why Latin America Doesn&apos;t Trust Us
          </h2>
          <p className="text-stone-700 mb-4">
            Americans often wonder why Latin American nations are suspicious of US intentions. The Banana Wars
            are the answer. For three decades, the US military invaded, occupied, and dominated its neighbors —
            not to spread democracy (it installed dictators), not to protect human rights (it imposed forced
            labor in Haiti), and not for national security (Honduras was never a threat). It did so to protect
            corporate profits and collect debts.
          </p>
          <p className="text-stone-700 mb-4">
            The Banana Wars are the original sin of US-Latin American relations. Every subsequent intervention —
            Guatemala (1954), Cuba (1961), Chile (1973), Nicaragua (1980s), Panama (1989) — operates in their
            shadow. When Latin American leaders invoke &ldquo;Yankee imperialism,&rdquo; they&apos;re not
            speaking in abstractions. They&apos;re speaking from memory.
          </p>
          <p className="text-stone-700">
            Smedley Butler understood this better than anyone. The man who earned two Medals of Honor protecting
            banana company profits spent his final years trying to warn Americans about the military-industrial
            complex — decades before Eisenhower coined the phrase. His words remain the most honest assessment
            of American interventionism ever spoken by someone who carried it out: &ldquo;War is a racket. It
            always has been. It is possibly the oldest, easily the most profitable, surely the most vicious.&rdquo;
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
              { href: '/spanish-american-war', label: 'Spanish-American War — Where It Began' },
              { href: '/analysis/americas-forgotten-wars', label: 'America\'s Forgotten Wars' },
              { href: '/analysis/timeline-of-american-empire', label: 'Timeline of American Empire' },
              { href: '/analysis/regime-changes', label: 'US Regime Changes' },
              { href: '/boxer-rebellion', label: 'Boxer Rebellion — Intervention in China' },
              { href: '/russian-civil-war', label: 'Russian Civil War Intervention' },
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
            <li>Smedley D. Butler — War Is a Racket (1935)</li>
            <li>Lester Langley — The Banana Wars: United States Intervention in the Caribbean (1983)</li>
            <li>Peter Chapman — Bananas: How the United Fruit Company Shaped the World (2007)</li>
            <li>Mary Renda — Taking Haiti: Military Occupation and the Culture of US Imperialism (2001)</li>
            <li>Michel Gobat — Confronting the American Dream: Nicaragua Under US Imperial Rule (2005)</li>
            <li>Congressional Research Service — Instances of Use of US Armed Forces Abroad</li>
            <li>Hans Schmidt — The United States Occupation of Haiti, 1915-1934 (1971)</li>
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
            headline: 'The Banana Wars: US Military Interventions in Latin America (1898-1934)',
            description: 'Comprehensive analysis of the Banana Wars — US military occupations of Cuba, Haiti, Nicaragua, Dominican Republic, Honduras, Panama, and Mexico.',
            url: 'https://warcosts.org/banana-wars',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-16',
            dateModified: '2025-03-16',
          }),
        }}
      />
    </main>
  )
}
