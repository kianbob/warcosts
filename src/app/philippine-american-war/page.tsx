import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Philippine-American War Cost — 4,200 US Dead, 200K-1M Filipinos Killed, America\'s Forgotten War | WarCosts',
  description: 'The Philippine-American War (1899-1902) killed 4,200 Americans and 200,000-1,000,000 Filipinos. America\'s first counterinsurgency featured water cure torture, concentration camps, and systematic civilian slaughter — then was erased from history.',
  keywords: ['Philippine-American war', 'Philippine insurrection', 'water cure torture', 'Filipino casualties', 'American imperialism Philippines', 'Balangiga massacre', 'forgotten war'],
  openGraph: {
    title: 'The Philippine-American War — 4,200 US Dead, Up to 1M Filipinos, America\'s Forgotten Atrocity',
    description: 'The war America doesn\'t teach in schools. Torture, concentration camps, and up to a million dead Filipinos — all to keep a colony the US never should have had.',
    url: 'https://warcosts.org/philippine-american-war',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'US Military Deaths', value: '4,200+' },
  { label: 'US Wounded', value: '2,900' },
  { label: 'Filipino Combatant Dead', value: '~20,000' },
  { label: 'Filipino Civilian Dead', value: '200K-1M' },
  { label: 'Duration (official)', value: '1899-1902' },
  { label: 'Duration (actual)', value: '1899-1913' },
]

const costBreakdown = [
  { category: 'Direct Military Operations', amount: '$3.2B', desc: 'Army operations against Filipino insurgents, 1899-1902' },
  { category: 'Garrison & Occupation', amount: '$1.8B', desc: 'Maintaining 70,000+ troops across 7,000 islands' },
  { category: 'Colonial Administration', amount: '$800M', desc: 'Civil government, infrastructure, "benevolent assimilation" programs' },
  { category: 'Moro Campaigns (1902-1913)', amount: '$600M', desc: 'Continued fighting against Muslim Moros in the southern Philippines' },
]

const timeline = [
  { year: 'Jun 12, 1898', title: 'Philippine Independence Declared', desc: 'Emilio Aguinaldo declares Philippine independence from Spain, establishing the First Philippine Republic — Asia\'s first constitutional democracy. Filipino forces have been fighting Spain for years with American encouragement. The US does not recognize the declaration.' },
  { year: 'Dec 1898', title: 'Treaty of Paris Betrayal', desc: 'The US purchases the Philippines from Spain for $20 million in the Treaty of Paris. Filipino representatives are not invited to the negotiations. The Philippines is sold like property between two colonial powers. Aguinaldo protests; he is ignored.' },
  { year: 'Feb 4, 1899', title: 'War Erupts', desc: 'An American sentry shoots a Filipino soldier near Manila. Fighting breaks out along the entire American line. Whether the shooting was deliberate provocation or accident is debated — but the US had been preparing for exactly this. Within days, thousands are dead.' },
  { year: 'Feb-Nov 1899', title: 'Conventional War Phase', desc: 'Aguinaldo\'s forces attempt conventional warfare against the US Army. They are outgunned, outmatched in artillery and logistics. American forces capture key cities. Filipino casualties are staggering — entire units destroyed. By November, Aguinaldo shifts to guerrilla warfare.' },
  { year: '1900', title: 'Guerrilla War', desc: 'Filipino forces adopt guerrilla tactics — ambushes, night raids, blending with civilian populations. The US responds with the same counterinsurgency methods that would define its wars for the next century: population control, collective punishment, strategic hamlets, and intelligence-driven targeting.' },
  { year: 'Sep 28, 1901', title: 'Balangiga Massacre', desc: 'Filipino guerrillas in Samar kill 48 American soldiers in a surprise attack at Balangiga. US General Jacob Smith orders retaliation: "Kill everyone over ten." He means it. The interior of Samar is turned into a "howling wilderness." Smith is later court-martialed but merely reprimanded.' },
  { year: '1901-02', title: 'Water Cure & Torture', desc: 'US forces systematically use the "water cure" — forcing water into prisoners\' stomachs until they talk or die. Congressional hearings document widespread torture. Soldiers testify openly about the practice. It is the same technique later called "waterboarding" in the War on Terror. Some things never change.' },
  { year: 'Mar 23, 1901', title: 'Aguinaldo Captured', desc: 'US forces capture Aguinaldo through an elaborate deception — American-allied Filipino scouts pretend to be guerrilla reinforcements. Aguinaldo is forced to swear allegiance to the United States and calls for surrender. Many guerrilla leaders ignore him and fight on.' },
  { year: 'Jul 4, 1902', title: 'Roosevelt Declares Victory', desc: 'President Theodore Roosevelt declares the war over on July 4, 1902. It isn\'t. Fighting continues in the southern Philippines against Moro resistance until 1913. The premature "mission accomplished" declaration — another pattern that would repeat.' },
  { year: '1902-1913', title: 'Moro Campaigns', desc: 'The Muslim Moro people of Mindanao and Sulu never accepted American rule. The Moro Campaigns (1902-1913) include the Battle of Bud Dajo (1906), where US forces kill 600-900 Moro men, women, and children trapped in a volcanic crater. Mark Twain calls it a "slaughter."' },
  { year: '1916', title: 'Jones Act', desc: 'The Jones Act promises eventual Philippine independence — "as soon as a stable government can be established." The US continues to control the Philippines for another 30 years.' },
  { year: '1946', title: 'Independence Finally Granted', desc: 'The Philippines gains full independence on July 4, 1946 — nearly 50 years after Aguinaldo first declared it. The US retains military bases (Clark, Subic Bay) for decades afterward. The scars of colonial occupation persist in Philippine politics and economics.' },
]

const warCrimes = [
  { name: 'Water Cure', desc: 'Prisoners were held down while water was forced into their stomachs through a funnel, then jumped on to expel it. The process was repeated until the prisoner talked or died. Congressional testimony confirmed widespread use. Identical to "waterboarding" used at Guantánamo Bay a century later.' },
  { name: 'Concentration Zones', desc: 'US forces herded Filipino civilians into "protected zones" — concentration camps in everything but name. Those found outside the zones were considered enemy combatants and killed. Disease and starvation in the zones killed tens of thousands.' },
  { name: 'Kill Everyone Over Ten', desc: 'General Jacob Smith\'s order on Samar after Balangiga: make the island a "howling wilderness," kill everyone capable of bearing arms (age ten and above). While Smith was court-martialed, he received only a reprimand. The message was clear.' },
  { name: 'Scorched Earth', desc: 'Entire provinces were subjected to crop destruction, livestock killing, and village burning. The strategy — destroying the civilian infrastructure that sustained guerrillas — created famine conditions that killed far more than combat.' },
  { name: 'Bud Dajo Massacre', desc: 'In March 1906, US forces attacked 600-900 Moro men, women, and children who had taken refuge in the crater of Bud Dajo volcano. Virtually all were killed. The Army initially reported a battle; it was a massacre.' },
]

const keyFigures = [
  { name: 'Emilio Aguinaldo', role: 'President, First Philippine Republic', desc: 'Led the fight for independence against Spain, then against the US. Captured in 1901 and forced to swear allegiance to America. Lived until 1964 — long enough to see genuine Philippine independence.' },
  { name: 'Arthur MacArthur Jr.', role: 'Military Governor', desc: 'Father of Douglas MacArthur. Oversaw the counterinsurgency campaign including the concentration zone policy. His son would later "return" to the Philippines in WWII to liberate it from Japan.' },
  { name: 'General Jacob Smith', role: 'Commander, Samar Campaign', desc: '"Kill everyone over ten." Court-martialed for the order but only given a reprimand. Retired with full pension. Accountability in war has always been optional for American officers.' },
  { name: 'Mark Twain', role: 'Anti-Imperialist League', desc: 'Became the war\'s most prominent critic. Vice President of the Anti-Imperialist League. Wrote savage satire of the Philippine campaign, including "To the Person Sitting in Darkness" (1901).' },
  { name: 'William Howard Taft', role: 'Civil Governor', desc: 'First civil governor of the Philippines (1901-1904). Later became President. Called Filipinos "our little brown brothers" — a phrase that captures the era\'s combination of paternalism and racism.' },
]

const faqs = [
  {
    q: 'How many people died in the Philippine-American War?',
    a: 'Approximately 4,200 US soldiers died and 2,900 were wounded. Filipino military casualties were around 20,000 killed. Civilian deaths are estimated between 200,000 and 1,000,000 — the wide range reflects the chaotic conditions, disease epidemics, and famine caused by US military operations. The cholera epidemic of 1902, exacerbated by the war\'s disruption, alone killed over 200,000. Some estimates of total Filipino deaths (military and civilian combined) reach 1.5 million.',
  },
  {
    q: 'Why is it called "America\'s forgotten war"?',
    a: 'The Philippine-American War is largely absent from American history education. It contradicts the national narrative of liberation and democracy — the US fought to suppress a democracy, used torture and concentration camps, and killed hundreds of thousands of civilians. The war was controversial even at the time, with Mark Twain and the Anti-Imperialist League opposing it. But it was quickly overshadowed by World War I and has remained largely invisible in American consciousness.',
  },
  {
    q: 'What was the water cure?',
    a: 'The water cure was a torture technique used by US forces against Filipino prisoners. The victim was pinned down and water was forced into their mouth and nose (sometimes through a funnel) until their stomach was distended. Soldiers would then press or jump on the stomach to expel the water, and repeat. Congressional hearings in 1902 confirmed its widespread use. The technique is functionally identical to "waterboarding" used at CIA black sites and Guantánamo Bay during the War on Terror — over a century later.',
  },
  {
    q: 'Was the Philippine-American War legal?',
    a: 'The war was never formally declared by Congress. It was fought under the authority of the President as Commander-in-Chief, with funding appropriations from Congress serving as implicit authorization. Sound familiar? The same constitutional ambiguity would be exploited in Korea, Vietnam, and the post-9/11 wars. The Philippines was treated as an "insurrection" against US authority rather than a war — because calling it a war would have granted Filipinos rights under international law.',
  },
  {
    q: 'How does it compare to later US counterinsurgencies?',
    a: 'The Philippine-American War established the template for every subsequent US counterinsurgency: strategic hamlets (Vietnam), enhanced interrogation (War on Terror), collective punishment (Iraq), and the fundamental problem of fighting a population that doesn\'t want you there. The same tactics, the same failures, the same civilian toll — repeated in Vietnam, Iraq, and Afghanistan. The US military has been fighting the same war for 125 years.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function PhilippineAmericanWarPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Philippine-American War' }]} />
        <ShareButtons title="Philippine-American War — 4,200 US Dead, Up to 1M Filipinos, America's Forgotten War" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Philippine-American War
          </h1>
          <p className="text-lg text-stone-500 mb-2">1899–1902 (officially) · 1899–1913 (actually) · America&apos;s Forgotten War</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            The United States helped the Philippines fight for independence from Spain — then took the country
            for itself. <strong className="text-[#991b1b]">4,200 Americans</strong> and up to{' '}
            <strong className="text-[#991b1b]">1 million Filipinos</strong> died in a war featuring torture,
            concentration camps, and a &ldquo;kill everyone over ten&rdquo; order. Then America erased it from
            the history books.
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
            The Cost: Buying an Empire, Fighting to Keep It
          </h2>
          <p className="text-stone-700 mb-6">
            The US paid Spain $20 million for the Philippines — then spent billions fighting the people who
            already lived there. The total cost of acquiring and holding the Philippines far exceeded any
            economic benefit. Empire, as always, is a losing investment for the public — and a profitable
            one for the connected.
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

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline: From Ally to Colony
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

        {/* War Crimes */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Atrocities: The War Crimes America Doesn&apos;t Teach
          </h2>
          <p className="text-stone-700 mb-6">
            The Philippine-American War featured systematic atrocities that were documented by Congress,
            reported in newspapers, and then forgotten. Every technique used in the War on Terror had a
            predecessor in the Philippines a century earlier.
          </p>
          <div className="space-y-4">
            {warCrimes.map((w) => (
              <div key={w.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <h3 className="font-semibold text-[#991b1b] mb-1">{w.name}</h3>
                <p className="text-sm text-stone-600">{w.desc}</p>
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

        {/* Casualty Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Filipino Death Toll: Why the Range Is So Wide
          </h2>
          <p className="text-stone-700 mb-4">
            Estimates of Filipino deaths range from 200,000 to over 1 million. This uncertainty is itself
            an indictment — when the killing power doesn&apos;t bother counting the dead, the dead become
            statistics rather than people.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-700 text-sm">
              The low estimate (200,000) counts primarily direct combat and documented massacre deaths.
              The high estimate (1 million+) includes deaths from war-induced famine, cholera epidemics
              exacerbated by concentration zones, and ongoing Moro Campaign casualties through 1913.
              Census data shows a significant population decline in war-affected provinces, supporting
              the higher estimates.
            </p>
          </div>
          <p className="text-stone-700">
            For context: the Philippines had approximately 7.5 million people in 1900. Even the conservative
            estimate of 200,000 deaths represents 2.7% of the population. The higher estimates approach
            genocide-level proportions — 10-13% of the entire population.
          </p>
        </section>

        {/* Editorial */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: The War That Wrote the Playbook
          </h2>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-1">
              &ldquo;We have pacified some thousands of the islanders and buried them; destroyed their fields;
              burned their villages, and turned their widows and orphans out-of-doors... And so, by these
              Providences of God — and the phrase is the government&apos;s, not mine — we are a World Power.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— Mark Twain, "To the Person Sitting in Darkness" (1901)</p>
          </div>
          <p className="text-stone-700 mb-4">
            The Philippine-American War was America&apos;s first counterinsurgency — and it established every pattern
            that would repeat for the next 125 years. Torture? Check. Concentration camps? Check. Collective
            punishment? Check. Premature "mission accomplished"? Check. Decades of occupation? Check.
            Forgotten by the public? Check.
          </p>
          <p className="text-stone-700 mb-4">
            The war also revealed a fundamental contradiction in American identity that remains unresolved:
            how can a nation founded on self-determination deny it to others? The answer, then and now,
            is a combination of racial paternalism (&ldquo;they&apos;re not ready for self-governance&rdquo;),
            strategic interest (&ldquo;we need those bases&rdquo;), and willful amnesia (&ldquo;what war?&rdquo;).
          </p>
          <p className="text-stone-700">
            The Philippines finally gained independence in 1946, nearly half a century after Aguinaldo first
            declared it. Today, the US maintains a military presence through the Visiting Forces Agreement
            and Enhanced Defense Cooperation Agreement. The shadow of 1899 never quite lifts.
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
              { href: '/spanish-american-war', label: 'Spanish-American War — How It Started' },
              { href: '/vietnam-war', label: 'Vietnam War — The Same Counterinsurgency, 60 Years Later' },
              { href: '/afghanistan-war', label: 'Afghanistan War — The Same Counterinsurgency, 100 Years Later' },
              { href: '/analysis/torture-program', label: 'The Torture Program — Water Cure to Waterboarding' },
              { href: '/analysis/forgotten-wars', label: 'America\'s Forgotten Wars' },
              { href: '/civilian-casualties', label: 'Civilian Casualties Across All Wars' },
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
            <li>Congressional Record — Senate Hearings on the Philippines (1902)</li>
            <li>National Archives — Philippine Insurrection Records</li>
            <li>Benevolent Assimilation: The American Conquest of the Philippines — Stuart Creighton Miller</li>
            <li>In Our Image: America&apos;s Empire in the Philippines — Stanley Karnow</li>
            <li>A People&apos;s History of the United States — Howard Zinn</li>
            <li>Mark Twain — &ldquo;To the Person Sitting in Darkness&rdquo; (1901)</li>
            <li>Philippine-American War Centennial Initiative — University of Michigan</li>
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
            headline: 'The Philippine-American War: 4,200 US Dead, Up to 1M Filipinos, America\'s Forgotten War',
            description: 'Comprehensive analysis of the Philippine-American War (1899-1913) — costs, casualties, war crimes, and the counterinsurgency template that shaped American warfare.',
            url: 'https://warcosts.org/philippine-american-war',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-15',
            dateModified: '2025-03-15',
          }),
        }}
      />
    </main>
  )
}
