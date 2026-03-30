import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mexican-American War Cost — $2.4 Billion, 13,283 US Dead, Half of Mexico Seized | WarCosts',
  description: 'The Mexican-American War (1846-1848) cost $2.4 billion in today\'s dollars, killed 13,283 Americans (mostly from disease), and seized half of Mexico\'s territory. Manifest Destiny\'s bloodiest expression and the war that made the Civil War inevitable.',
  keywords: ['Mexican-American war cost', 'Mexican-American war casualties', 'Treaty of Guadalupe Hidalgo', 'Manifest Destiny', 'Mexican Cession', 'Polk war', 'US Mexico war 1846'],
  openGraph: {
    title: 'The Mexican-American War — $2.4B, 13K Dead, Half a Nation Stolen',
    description: 'America\'s first war of territorial conquest. President Polk manufactured a border incident, Congress rubber-stamped a war, and the US seized 525,000 square miles of Mexican territory.',
    url: 'https://warcosts.org/mexican-american-war',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Total Cost (2024$)', value: '$2.4 Billion' },
  { label: 'US Military Deaths', value: '13,283' },
  { label: 'US Combat Deaths', value: '1,733' },
  { label: 'US Wounded', value: '4,152' },
  { label: 'Mexican Dead (est.)', value: '25,000+' },
  { label: 'Territory Seized', value: '525,000 sq mi' },
]

const costBreakdown = [
  { category: 'Direct Military Operations', amount: '$1.1B', desc: 'Army and Navy operations across multiple fronts, 1846-1848' },
  { category: 'Troop Pay & Provisions', amount: '$600M', desc: 'Volunteer army of 73,000+ required full equipping and pay' },
  { category: 'Treaty of Guadalupe Hidalgo Payment', amount: '$550M', desc: '$15 million paid to Mexico plus $3.25M in assumed claims (2024 dollars)' },
  { category: 'Pensions & Veterans Benefits', amount: '$150M', desc: 'Post-war veteran pensions extending through early 1900s' },
]

const timeline = [
  { year: '1836', title: 'Texas Independence', desc: 'Texas declares independence from Mexico after the Battle of San Jacinto. Mexico never recognizes the Republic of Texas and considers it a rebellious province. The disputed border — Rio Grande vs. Nueces River — becomes the flashpoint.' },
  { year: '1845', title: 'Texas Annexation', desc: 'The US annexes Texas as the 28th state, an act Mexico considers a declaration of war. President James K. Polk, an aggressive expansionist elected on a Manifest Destiny platform, immediately eyes California and New Mexico as well.' },
  { year: 'Jan 1846', title: 'Polk Provokes a War', desc: 'Polk orders General Zachary Taylor to march 3,500 troops to the Rio Grande — into territory both nations claim. Taylor builds Fort Texas directly across from the Mexican city of Matamoros. This is the 19th-century equivalent of parking tanks on someone\'s lawn and waiting for them to react.' },
  { year: 'Apr 25, 1846', title: 'The Thornton Affair', desc: 'Mexican cavalry attacks a US patrol north of the Rio Grande, killing 11 soldiers. Polk declares that Mexico has "shed American blood upon American soil." This is debatable — the territory was disputed. Congressman Abraham Lincoln demands Polk identify the exact "spot" where blood was shed (the "Spot Resolutions").' },
  { year: 'May 13, 1846', title: 'Congress Declares War', desc: 'Congress votes for war: 174-14 in the House, 40-2 in the Senate. The vote is rushed through with war appropriations attached — vote against the war and you vote against funding the troops already in harm\'s way. A familiar tactic.' },
  { year: 'May 1846', title: 'Battles of Palo Alto & Resaca de la Palma', desc: 'Taylor wins the first major engagements using superior artillery. American forces push into northern Mexico. Meanwhile, Colonel Stephen Kearny marches west to seize New Mexico and California.' },
  { year: 'Jun-Jul 1846', title: 'Bear Flag Revolt & California', desc: 'American settlers in California revolt against Mexican authority (the Bear Flag Revolt). The US Navy seizes Monterey. Kearny\'s Army of the West occupies Santa Fe without a fight. California and New Mexico fall quickly.' },
  { year: 'Sep 1846', title: 'Battle of Monterrey', desc: 'Taylor captures the fortified Mexican city of Monterrey after three days of brutal house-to-house fighting. He grants the Mexican garrison an eight-week armistice — Polk is furious and considers it too generous.' },
  { year: 'Feb 1847', title: 'Battle of Buena Vista', desc: 'Taylor, with 4,800 troops, defeats Santa Anna\'s 15,000-man army at Buena Vista. The victory makes Taylor a national hero and future president. Polk, a Democrat, is dismayed — Taylor is a Whig.' },
  { year: 'Mar 1847', title: 'Scott\'s Invasion — Veracruz', desc: 'General Winfield Scott executes the largest amphibious landing in US history to that point: 12,000 troops at Veracruz. After a brutal bombardment that kills hundreds of civilians, the city surrenders. Scott begins the march inland to Mexico City.' },
  { year: 'Apr-Aug 1847', title: 'March to Mexico City', desc: 'Scott fights through Cerro Gordo, Contreras, Churubusco, and Molino del Rey. At Chapultepec Castle (September 13), the "Niños Héroes" — teenage Mexican military cadets — fight to the death rather than surrender. They remain national heroes in Mexico.' },
  { year: 'Sep 14, 1847', title: 'Fall of Mexico City', desc: 'US forces capture Mexico City. The American flag flies over the National Palace — the "Halls of Montezuma" referenced in the Marine Corps Hymn. Mexico\'s government collapses. Guerrilla resistance continues but cannot reverse the outcome.' },
  { year: 'Feb 2, 1848', title: 'Treaty of Guadalupe Hidalgo', desc: 'Mexico cedes 525,000 square miles — present-day California, Nevada, Utah, Arizona, New Mexico, Colorado, and Wyoming. The US pays $15 million (about $550 million in 2024 dollars). Mexico loses 55% of its national territory. The treaty is negotiated by Nicholas Trist, whom Polk had already recalled — Trist ignored the recall and negotiated anyway.' },
]

const territoryGained = [
  { territory: 'California', modernValue: 'GDP: $3.6 trillion (5th largest economy in the world)' },
  { territory: 'Nevada', modernValue: 'Mining, Las Vegas, Nellis AFB, nuclear test site' },
  { territory: 'Utah', modernValue: 'Mormon settlement, military testing grounds' },
  { territory: 'Arizona', modernValue: 'Copper mining, military bases, border state' },
  { territory: 'New Mexico', modernValue: 'Los Alamos, Sandia Labs, White Sands — the nuclear weapons complex' },
  { territory: 'Parts of Colorado & Wyoming', modernValue: 'Mining, ranching, military installations' },
  { territory: 'Texas (confirmed)', modernValue: 'Oil, military bases, $2T GDP' },
]

const casualtyBreakdown = [
  { category: 'Combat Deaths', us: '1,733', mexican: '~5,000' },
  { category: 'Disease Deaths', us: '11,550', mexican: '~8,000-12,000' },
  { category: 'Wounded', us: '4,152', mexican: '~8,000+' },
  { category: 'Civilian Deaths', us: 'N/A', mexican: '~5,000-10,000+' },
]

const keyFigures = [
  { name: 'James K. Polk', role: 'President', desc: 'The architect of the war and Manifest Destiny. Manufactured the border crisis, pushed for war, and achieved his territorial goals. Died three months after leaving office, exhausted.' },
  { name: 'Zachary Taylor', role: 'General / Future President', desc: 'Hero of Buena Vista. His military fame propelled him to the presidency in 1848. A Whig who had opposed the war\'s expansion — the irony of war making presidents.' },
  { name: 'Winfield Scott', role: 'General-in-Chief', desc: 'Executed the brilliant Mexico City campaign. "Old Fuss and Feathers" fought the most successful campaign in the war but was denied the presidency.' },
  { name: 'Antonio López de Santa Anna', role: 'Mexican President/General', desc: 'The on-again, off-again dictator of Mexico. Lost Texas, lost the war, lost half the country. Remarkably, he returned to power again afterward.' },
  { name: 'Abraham Lincoln', role: 'Congressman (Whig-IL)', desc: 'Freshman congressman who challenged Polk\'s war justification with the "Spot Resolutions," demanding proof that American blood was shed on American soil.' },
  { name: 'Henry David Thoreau', role: 'Writer/Philosopher', desc: 'Went to jail rather than pay taxes supporting the war. Wrote "Civil Disobedience" — a text that would later influence Gandhi and Martin Luther King Jr.' },
  { name: 'Ulysses S. Grant', role: 'Lieutenant', desc: 'Served in the war but later called it "one of the most unjust ever waged by a stronger against a weaker nation." The experience shaped his Civil War generalship.' },
]

const faqs = [
  {
    q: 'How much did the Mexican-American War cost?',
    a: 'The Mexican-American War cost approximately $2.4 billion in 2024 dollars, including $1.1 billion in direct military operations, $600 million in troop pay and provisions, $550 million for the Treaty of Guadalupe Hidalgo payment, and $150 million in veteran pensions. However, the real "cost" to Mexico was 55% of its national territory — land now worth trillions.',
  },
  {
    q: 'How many people died in the Mexican-American War?',
    a: 'Approximately 13,283 US soldiers died — but only 1,733 in combat. The remaining 11,550 died from disease, primarily dysentery, yellow fever, and smallpox. Disease killed nearly 7 Americans for every 1 killed in battle. Mexican military and civilian deaths are estimated at 25,000 or more, though exact figures are uncertain.',
  },
  {
    q: 'What territory did the US gain from the Mexican-American War?',
    a: 'Through the Treaty of Guadalupe Hidalgo (1848), the US acquired approximately 525,000 square miles — present-day California, Nevada, Utah, most of Arizona, and parts of New Mexico, Colorado, and Wyoming. This was 55% of Mexico\'s national territory. The US paid $15 million (about $550 million in 2024 dollars) — roughly $28.50 per square mile.',
  },
  {
    q: 'Was the Mexican-American War justified?',
    a: 'Even many Americans at the time said no. Abraham Lincoln challenged the war\'s justification in Congress. Ulysses S. Grant later called it "one of the most unjust ever waged by a stronger against a weaker nation." Henry David Thoreau went to jail rather than pay taxes supporting it. The war was essentially a land grab dressed up as self-defense — President Polk deliberately provoked an incident to justify a conflict he had already decided to wage.',
  },
  {
    q: 'How did the Mexican-American War lead to the Civil War?',
    a: 'The massive territory acquired reignited the slavery debate with devastating force. The Wilmot Proviso (1846) attempted to ban slavery in new territories. The Compromise of 1850 and Kansas-Nebraska Act (1854) tried to manage the question. They failed. The Mexican Cession made the slavery question unavoidable, and the nation split apart 13 years later. Grant called the Civil War divine punishment for the Mexican War.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function MexicanAmericanWarPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Mexican-American War' }]} />
        <ShareButtons title="Mexican-American War — $2.4B, 13K Dead, Half of Mexico Seized" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Mexican-American War
          </h1>
          <p className="text-lg text-stone-500 mb-2">1846–1848 · Manifest Destiny&apos;s Bloody Price</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            President Polk manufactured a border crisis, Congress rubber-stamped a war, and the United States
            seized <strong className="text-[#991b1b]">525,000 square miles</strong> of Mexican territory —{' '}
            <strong className="text-[#991b1b]">55% of Mexico&apos;s nation</strong>. The cost:{' '}
            <strong className="text-[#991b1b]">$2.4 billion</strong> and{' '}
            <strong className="text-[#991b1b]">13,283 American lives</strong>, most killed by disease, not battle.
            Even Ulysses S. Grant called it &ldquo;one of the most unjust ever waged.&rdquo;
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
            The Cost: $2.4 Billion for Half a Continent
          </h2>
          <p className="text-stone-700 mb-6">
            The Mexican-American War was cheap by modern standards — but the &ldquo;purchase price&rdquo; of $15 million
            paid to Mexico in the Treaty of Guadalupe Hidalgo was roughly $28.50 per square mile. California alone
            now generates $3.6 trillion in annual GDP. It was the greatest real estate heist in history.
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

        {/* Territory Gained */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            What Was Stolen: The Mexican Cession
          </h2>
          <p className="text-stone-700 mb-6">
            The Treaty of Guadalupe Hidalgo transferred territory that today comprises some of the most
            valuable real estate on Earth. Mexico lost its most resource-rich and strategically important lands.
            The US paid less for California than what a single block of San Francisco is worth today.
          </p>
          <div className="space-y-3">
            {territoryGained.map((t) => (
              <div key={t.territory} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="font-semibold text-stone-800">{t.territory}</div>
                <div className="text-sm text-stone-500 mt-1">{t.modernValue}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Casualties */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Casualties: Disease Was the Real Enemy
          </h2>
          <p className="text-stone-700 mb-6">
            Of 13,283 American deaths, only 1,733 were killed in combat. The remaining 11,550 — nearly 87% — died
            from disease: dysentery, yellow fever, smallpox, and malaria. For every American killed by a Mexican
            bullet, seven were killed by bacteria. Mexican casualties were far higher but poorly documented —
            a recurring pattern in American wars.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">US</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Mexico (est.)</th>
                </tr>
              </thead>
              <tbody>
                {casualtyBreakdown.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b]">{r.us}</td>
                    <td className="py-2 text-right font-mono text-stone-600">{r.mexican}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline: From Provocation to Conquest
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

        {/* Editorial: Legacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: The Template for American Imperialism
          </h2>
          <p className="text-stone-700 mb-4">
            The Mexican-American War established a pattern that would repeat for the next 175 years:
            manufacture a crisis, rush Congress into authorizing force, seize territory or regime change,
            and rewrite history to make it seem inevitable and justified.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-1">
              &ldquo;For myself, I was bitterly opposed to the measure, and to this day regard the war which
              resulted as one of the most unjust ever waged by a stronger against a weaker nation.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— Ulysses S. Grant, Personal Memoirs (1885)</p>
          </div>
          <p className="text-stone-700 mb-4">
            The war also made the Civil War inevitable. The massive territory acquired reignited the slavery debate
            with existential intensity. The Wilmot Proviso, Compromise of 1850, Kansas-Nebraska Act, and Bleeding
            Kansas all trace directly to the question of whether slavery would expand into the Mexican Cession.
            Within 13 years of the Treaty of Guadalupe Hidalgo, America was at war with itself.
          </p>
          <p className="text-stone-700 mb-4">
            For Mexico, the consequences were catastrophic and permanent. Losing 55% of its territory reshaped
            the nation&apos;s identity, economy, and politics for generations. The border that resulted from this
            war remains one of the most contentious in the world — a constant reminder that today&apos;s political
            boundaries were drawn by military conquest, not natural law.
          </p>
          <p className="text-stone-700">
            Thoreau&apos;s response was perhaps the most enduring. His night in jail for refusing to pay taxes
            supporting the war produced &ldquo;Civil Disobedience&rdquo; — an essay that influenced Leo Tolstoy,
            Mahatma Gandhi, and Martin Luther King Jr. The moral case against unjust wars outlasted the war itself.
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
              { href: '/civil-war', label: 'Civil War — The War Mexico Made Inevitable' },
              { href: '/spanish-american-war', label: 'Spanish-American War — The Next Imperial Step' },
              { href: '/us-wars-list', label: 'Complete List of US Wars' },
              { href: '/analysis/lies-that-started-wars', label: 'Lies That Started Wars' },
              { href: '/analysis/cost-of-empire', label: 'The Cost of Empire' },
              { href: '/decades/1840s', label: 'The 1840s — Manifest Destiny' },
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
            <li>Congressional Research Service — Costs of Major US Wars (2010)</li>
            <li>National Archives — Mexican War and After, 1846-1848</li>
            <li>Personal Memoirs of Ulysses S. Grant (1885)</li>
            <li>A Wicked War: Polk, Clay, Lincoln, and the 1846 US Invasion of Mexico — Amy S. Greenberg</li>
            <li>So Far from God: The US War with Mexico — John S.D. Eisenhower</li>
            <li>Henry David Thoreau — &ldquo;Civil Disobedience&rdquo; (1849)</li>
            <li>Treaty of Guadalupe Hidalgo — National Archives</li>
          </ul>
        </section>

        <BackToTop />
      </div>

      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Mexican-American War: $2.4 Billion, 13,283 Dead, Half of Mexico Seized',
            description: 'Comprehensive analysis of the Mexican-American War (1846-1848) — costs, casualties, timeline, and the territorial conquest that made the Civil War inevitable.',
            url: 'https://warcosts.org/mexican-american-war',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-15',
            dateModified: '2025-03-15',
          }),
        }}
      />
    </main>
  )
}
