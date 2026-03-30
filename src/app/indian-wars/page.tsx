import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'American Indian Wars — 148 Years of Conflict, Millions of Lives, A Continent Taken (1776-1924) | WarCosts',
  description: 'The American Indian Wars (1776-1924) encompassed hundreds of conflicts across 148 years. From the Northwest Indian War to Wounded Knee, the cost was measured not in dollars but in nations destroyed, treaties broken, and a continent dispossessed.',
  keywords: ['Indian Wars', 'American Indian Wars', 'Trail of Tears', 'Wounded Knee', 'Sand Creek Massacre', 'Little Bighorn', 'Seminole Wars', 'Native American genocide', 'Indian Removal Act', 'Manifest Destiny'],
  openGraph: {
    title: 'The American Indian Wars — 148 Years, Hundreds of Conflicts, A Continent Taken',
    description: 'The longest and most consequential series of conflicts in American history. Hundreds of wars, broken treaties, forced removals, and massacres that took a continent from its original inhabitants.',
    url: 'https://warcosts.org/indian-wars',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Duration', value: '148 Years' },
  { label: 'Period', value: '1776-1924' },
  { label: 'Named Conflicts', value: '40+' },
  { label: 'Individual Engagements', value: '1,500+' },
  { label: 'Native Population (1492)', value: '5-15 Million' },
  { label: 'Native Population (1900)', value: '~237,000' },
]

const costData = [
  { category: 'Direct Military Spending', amount: '$25B+', desc: 'Army frontier operations, fort construction, campaigns, and militia operations over 148 years (2024 dollars)' },
  { category: 'Reservation System', amount: '$10B+', desc: 'Bureau of Indian Affairs, treaty annuities, agency operations, and forced assimilation programs' },
  { category: 'Land Taken', amount: '1.5 Billion Acres', desc: 'Virtually the entire continental United States — from 1.5 billion acres of Native land to 56 million acres of reservations' },
  { category: 'Broken Treaties', amount: '370+', desc: 'The US signed over 370 treaties with Native nations and broke virtually all of them' },
]

const majorConflicts = [
  { name: 'Northwest Indian War', period: '1785-1795', dead: '1,000+ US', desc: 'The first major conflict of the new republic. A confederation of Native nations inflicted the worst defeat in US Army history at the Battle of the Wabash (1791) — 630 soldiers killed, worse than Little Bighorn. General "Mad Anthony" Wayne finally defeated the confederation at Fallen Timbers (1794). The Treaty of Greenville opened Ohio to settlement.' },
  { name: 'Tecumseh\'s War', period: '1811-1813', dead: 'Thousands', desc: 'Shawnee leader Tecumseh built the most formidable Native confederacy since King Philip\'s War. His vision: a united Native nation from the Great Lakes to the Gulf of Mexico. William Henry Harrison destroyed Tecumseh\'s capital at Tippecanoe (1811). Tecumseh allied with Britain in the War of 1812 and was killed at the Battle of the Thames (1813). His death ended the dream of organized Eastern resistance.' },
  { name: 'Creek War', period: '1813-1814', dead: '3,000+ Creek', desc: 'Andrew Jackson crushed the Red Stick Creek faction at the Battle of Horseshoe Bend (1814), killing 800 warriors. The Treaty of Fort Jackson forced the Creek Nation — including Creek allies who had fought alongside Jackson — to cede 23 million acres (half of present-day Alabama and part of Georgia). Jackson punished his allies and enemies equally.' },
  { name: 'First Seminole War', period: '1817-1818', dead: 'Hundreds', desc: 'Jackson invaded Spanish Florida to pursue Seminole warriors and escaped slaves. He exceeded his orders, captured Spanish forts, and executed two British subjects. The "invasion" pressured Spain into selling Florida to the US (Adams-Onís Treaty, 1819). Jackson\'s disregard for orders, international law, and executive authority foreshadowed his presidency.' },
  { name: 'Indian Removal (Trail of Tears)', period: '1830-1850', dead: '15,000-20,000+', desc: 'Jackson\'s Indian Removal Act (1830) forced the "Five Civilized Tribes" — Cherokee, Chickasaw, Choctaw, Creek, and Seminole — from their ancestral lands in the Southeast to Indian Territory (Oklahoma). The Cherokee Trail of Tears (1838-1839) killed an estimated 4,000 of 15,000 people. Total deaths across all removals: 15,000-20,000+. The Supreme Court ruled in Worcester v. Georgia (1832) that Georgia had no authority over Cherokee lands. Jackson allegedly replied: "John Marshall has made his decision; now let him enforce it."' },
  { name: 'Second Seminole War', period: '1835-1842', dead: '1,500+ US, 3,000+ Seminole', desc: 'The longest and most expensive Indian War. The Seminoles, led by Osceola, fought a guerrilla war in the Florida swamps that cost $30-40 million (roughly $1 billion today) and 1,500 US soldiers\' lives. Osceola was captured under a flag of truce — one of the most dishonorable acts in US military history. The war ended inconclusively; some Seminoles were never removed and remain in Florida today.' },
  { name: 'Third Seminole War', period: '1855-1858', dead: 'Dozens', desc: 'A final attempt to remove the remaining Seminoles from Florida. Largely inconclusive — approximately 100 Seminoles remained in the Everglades and were never formally defeated or removed. They are the ancestors of today\'s Seminole Tribe of Florida.' },
  { name: 'Dakota War of 1862', period: '1862', dead: '77 US soldiers, 450-800+ settlers & Dakota', desc: 'Dakota Sioux, starving because the US government failed to deliver promised annuity payments, attacked settlements in Minnesota. After the uprising was suppressed, 303 Dakota men were sentenced to death in mass trials lasting minutes each. Lincoln commuted most sentences but approved 38 executions — the largest mass execution in US history (December 26, 1862). 1,600 Dakota were imprisoned; hundreds died in confinement.' },
  { name: 'Colorado War / Sand Creek Massacre', period: '1864-1865', dead: '230+ Cheyenne & Arapaho', desc: 'On November 29, 1864, Colonel John Chivington led 675 Colorado militia against a peaceful Cheyenne and Arapaho encampment at Sand Creek. Chief Black Kettle was flying an American flag and a white flag of peace. Chivington\'s men killed approximately 230 people — two-thirds women, children, and elderly. Soldiers mutilated bodies and took scalps as trophies. A Congressional investigation called it a "foul and dastardly massacre." Chivington was never prosecuted.' },
  { name: 'Red Cloud\'s War', period: '1866-1868', dead: '100+ US', desc: 'Lakota Sioux leader Red Cloud fought the only Indian War that the US explicitly lost. His warriors closed the Bozeman Trail and destroyed the garrison at Fort Phil Kearny (Fetterman Fight, December 1866 — 81 soldiers killed). The Treaty of Fort Laramie (1868) closed the trail and established the Great Sioux Reservation — a treaty the US would break within a decade when gold was discovered in the Black Hills.' },
  { name: 'Great Sioux War', period: '1876-1877', dead: '300+ US (including Custer)', desc: 'Gold in the Black Hills (sacred Lakota land, guaranteed by treaty) triggered the final great Plains Indian war. On June 25, 1876, Lieutenant Colonel George Armstrong Custer and 268 soldiers of the 7th Cavalry were annihilated by Lakota, Northern Cheyenne, and Arapaho warriors at the Battle of the Little Bighorn. It was a devastating Native victory — and guaranteed devastating retribution. Within a year, the Sioux were defeated and confined to reservations. Sitting Bull fled to Canada.' },
  { name: 'Nez Perce War', period: '1877', dead: '127 US, 120+ Nez Perce', desc: 'Chief Joseph led 800 Nez Perce men, women, and children on a 1,170-mile fighting retreat from Oregon toward the Canadian border. Pursued by 2,000 US soldiers, the Nez Perce won or fought to draws in multiple engagements. They were finally surrounded just 40 miles from Canada. Joseph\'s surrender speech: "From where the sun now stands, I will fight no more forever." He was never allowed to return home.' },
  { name: 'Apache Wars', period: '1849-1886', dead: 'Thousands on both sides', desc: 'The longest-running Indian conflict. Cochise, Mangas Coloradas, Victorio, and Geronimo led Apache resistance for nearly four decades. Geronimo\'s final band of 35 warriors tied down 5,000 US soldiers and 500 Apache scouts. His 1886 surrender ended major Native armed resistance in the American West. The Apache prisoners of war were held in captivity for 27 years — until 1913.' },
  { name: 'Wounded Knee Massacre', period: 'Dec 29, 1890', dead: '250-300+ Lakota', desc: 'The 7th Cavalry (Custer\'s old regiment) surrounded a band of Miniconjou Lakota at Wounded Knee Creek, South Dakota, to disarm them. A shot was fired — accounts differ on who fired first. The soldiers opened fire with rifles and four Hotchkiss mountain guns. Between 250 and 300 Lakota were killed, including women and children fleeing the camp. Bodies were found up to two miles away. Twenty soldiers received the Medal of Honor. Wounded Knee is generally considered the end of the Indian Wars — and a massacre, not a battle.' },
]

const keyFigures = [
  { name: 'Andrew Jackson', role: 'General / President', desc: 'More than any single person, Jackson shaped the Indian Wars. He fought the Creek War, invaded Florida, and as president signed the Indian Removal Act — directly causing the Trail of Tears. He defied the Supreme Court to do it. For Native Americans, Jackson is the face of ethnic cleansing.' },
  { name: 'Tecumseh', role: 'Shawnee Leader', desc: 'The most visionary Native leader. Built a confederacy spanning from the Great Lakes to the Gulf. Had he succeeded, the map of North America would look very different. His death at the Battle of the Thames (1813) ended the last realistic hope of a sovereign Native nation east of the Mississippi.' },
  { name: 'Sitting Bull', role: 'Hunkpapa Lakota Leader', desc: 'Spiritual and political leader who united the Lakota, Cheyenne, and Arapaho at Little Bighorn. Fled to Canada after the US Army\'s retaliatory campaigns. Returned in 1881. Killed by Indian police during the Ghost Dance crisis in 1890, two weeks before Wounded Knee.' },
  { name: 'Chief Joseph', role: 'Nez Perce Leader', desc: 'Led the epic 1,170-mile fighting retreat of 1877. A brilliant tactician and deeply humane leader who tried to protect women and children throughout. His surrender speech is one of the most eloquent statements in American history. He spent the rest of his life in exile from his homeland.' },
  { name: 'Geronimo', role: 'Apache War Leader', desc: 'The last major Native leader to resist. His 35 warriors evaded 5,000 soldiers for months. After surrender in 1886, he was held as a prisoner of war for 23 years until his death in 1909. Never allowed to return to his homeland. Became a celebrity in captivity — appearing at the 1904 World\'s Fair and Theodore Roosevelt\'s 1905 inauguration.' },
  { name: 'Red Cloud', role: 'Oglala Lakota Leader', desc: 'Won Red Cloud\'s War (1866-1868) — the only Indian War the US explicitly lost by treaty. The Fort Laramie Treaty closed the Bozeman Trail and guaranteed the Black Hills to the Sioux. The US broke the treaty within a decade. Red Cloud spent his later years on the reservation, negotiating for his people\'s survival.' },
]

const brokenTreaties = [
  { treaty: 'Treaty of Fort Laramie (1851)', broken: 'Guaranteed vast territory to Plains tribes. Violated within years as settlers moved through and gold was discovered.' },
  { treaty: 'Treaty of Fort Laramie (1868)', broken: 'Established the Great Sioux Reservation including the Black Hills. Broken when gold was found in the Black Hills in 1874. The US seized the Black Hills in 1877. In 1980, the Supreme Court ruled the seizure was illegal and awarded $105 million in compensation. The Sioux refused the money (now worth over $1 billion) — they want their land back.' },
  { treaty: 'Treaty of New Echota (1835)', broken: 'Signed by a minority faction of Cherokee, not authorized by the Cherokee government. Used to justify the Trail of Tears despite Cherokee protests and a Supreme Court ruling in their favor.' },
  { treaty: 'Treaty of Fort Jackson (1814)', broken: 'Punished Creek allies and enemies alike, seizing 23 million acres from the entire Creek Nation — including those who fought alongside the US.' },
  { treaty: 'Medicine Lodge Treaty (1867)', broken: 'Confined Southern Plains tribes to reservations in exchange for food and supplies. The government consistently failed to deliver promised provisions, contributing to continued conflict.' },
]

const faqs = [
  {
    q: 'How many Native Americans died in the Indian Wars?',
    a: 'The exact number is unknown and will never be known. Combat deaths are estimated at 30,000-45,000 over the full period of the Indian Wars. However, combat deaths are a fraction of total mortality. Disease (smallpox, cholera, measles), starvation, exposure during forced relocations, and the destruction of food sources (particularly the deliberate extermination of buffalo herds) killed far more. The Native American population declined from an estimated 5-15 million at European contact to approximately 237,000 by 1900 — a 95-98% decline. While much of this decline preceded the United States\' existence, the Indian Wars accelerated and completed the dispossession.',
  },
  {
    q: 'How much did the Indian Wars cost?',
    a: 'Direct military spending on the Indian Wars totaled an estimated $25 billion or more in 2024 dollars, spread across 148 years. The Second Seminole War alone cost approximately $1 billion (adjusted). But the true "cost" is the 1.5 billion acres of Native land taken — virtually the entire continental United States — which is, in a very real sense, priceless. The US government signed over 370 treaties with Native nations and broke virtually all of them.',
  },
  {
    q: 'What was the Trail of Tears?',
    a: 'The Trail of Tears refers to the forced relocation of approximately 60,000 Native Americans from the southeastern United States to Indian Territory (present-day Oklahoma) between 1830 and 1850. Authorized by Andrew Jackson\'s Indian Removal Act (1830), the removals affected the Cherokee, Chickasaw, Choctaw, Creek, and Seminole nations. An estimated 15,000-20,000 people died from exposure, disease, and starvation during the forced marches. The Cherokee removal of 1838-1839, during which approximately 4,000 of 15,000 people died, is the most well-known.',
  },
  {
    q: 'What happened at Wounded Knee?',
    a: 'On December 29, 1890, soldiers of the 7th Cavalry attempted to disarm a band of Miniconjou Lakota at Wounded Knee Creek, South Dakota. A shot was fired, and soldiers opened fire with rifles and Hotchkiss mountain guns. Between 250 and 300 Lakota were killed, including many women and children who were shot while fleeing. Bodies were found up to two miles from the camp. Twenty soldiers received the Medal of Honor — awards that remain controversial and have been the subject of Congressional revocation efforts. Wounded Knee is widely considered the last major engagement of the Indian Wars and is classified by most historians as a massacre, not a battle.',
  },
  {
    q: 'Was what happened to Native Americans genocide?',
    a: 'This is a subject of ongoing scholarly and legal debate. The UN Genocide Convention (1948) defines genocide as acts committed with "intent to destroy, in whole or in part, a national, ethnical, racial or religious group." Many specific events — Sand Creek, the Trail of Tears, the deliberate destruction of buffalo herds, forced assimilation through boarding schools — meet elements of this definition. The overall pattern of dispossession, forced relocation, cultural destruction, and population decline is consistent with what scholars call settler colonialism. Whether the totality constitutes "genocide" under international law depends partly on demonstrating centralized intent versus a pattern of individual acts. Many historians and Indigenous scholars use the term; others prefer "ethnic cleansing" or "colonial violence." The human reality is the same regardless of the legal label.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function IndianWarsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'American Indian Wars' }]} />
        <ShareButtons title="The American Indian Wars — 148 Years, A Continent Taken" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The American Indian Wars
          </h1>
          <p className="text-lg text-stone-500 mb-2">1776–1924 · 148 Years of Conflict</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            The longest series of conflicts in American history. <strong className="text-[#991b1b]">Hundreds of wars</strong>,{' '}
            <strong className="text-[#991b1b]">370+ broken treaties</strong>,{' '}
            <strong className="text-[#991b1b]">1.5 billion acres</strong> taken. A population reduced from
            millions to 237,000. This is the war that built the country — and the one most Americans
            would rather not think about.
          </p>
        </header>

        {/* Note */}
        <div className="bg-stone-100 border border-stone-300 rounded-lg p-4 mb-12">
          <p className="text-sm text-stone-700">
            <strong>A note on language:</strong> This page uses terms like &ldquo;Indian Wars&rdquo; because
            that is the historical designation used by the US government and military. We recognize that
            Indigenous peoples have their own names for these conflicts and that the framing of these events
            as &ldquo;wars&rdquo; can obscure what were often massacres, ethnic cleansing, and forced removals
            of civilian populations. We strive for historical accuracy and sensitivity throughout.
          </p>
        </div>

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
            The Cost: Measured in Land, Lives, and Nations
          </h2>
          <p className="text-stone-700 mb-6">
            The Indian Wars cannot be reduced to a dollar figure. The &ldquo;cost&rdquo; is a continent
            taken, hundreds of nations destroyed or diminished, and a population decline of 95% or more.
            But even the financial figures tell a story of relentless, systematic dispossession.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {costData.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold whitespace-nowrap">{r.amount}</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Population Decline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Population: The Numbers Tell the Story
          </h2>
          <div className="space-y-3 mb-4">
            {[
              { year: '1492', pop: '5-15 Million', note: 'Estimated Native population of present-day United States at European contact' },
              { year: '1800', pop: '~600,000', note: 'After three centuries of European colonization, disease, and warfare' },
              { year: '1850', pop: '~400,000', note: 'Indian Removal, Trail of Tears, and continued westward expansion' },
              { year: '1890', pop: '~248,000', note: 'Post-Plains Wars, reservation confinement, buffalo extermination' },
              { year: '1900', pop: '~237,000', note: 'The nadir. Boarding schools, assimilation policies, land allotment' },
              { year: '2020', pop: '~9.7 Million', note: 'Census count of those identifying as American Indian / Alaska Native (alone or in combination)' },
            ].map((row) => (
              <div key={row.year} className="flex items-center gap-4 bg-stone-50 rounded-lg p-3 border border-stone-200">
                <div className="text-sm font-mono text-[#991b1b] font-bold w-12">{row.year}</div>
                <div className="font-semibold text-stone-800 w-28">{row.pop}</div>
                <div className="text-sm text-stone-600 flex-1">{row.note}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-700 text-sm">
              The population decline from an estimated 5-15 million to 237,000 represents a 95-98% reduction.
              While disease — particularly smallpox, which preceded US independence — was the primary killer,
              the Indian Wars period (1776-1924) saw deliberate policies that accelerated the decline: forced
              relocation, destruction of food sources, confinement to reservations, and cultural destruction
              through boarding schools where the explicit goal was to &ldquo;kill the Indian, save the man.&rdquo;
            </p>
          </div>
        </section>

        {/* Major Conflicts */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Major Conflicts
          </h2>
          <div className="space-y-6">
            {majorConflicts.map((c) => (
              <div key={c.name} className="border-b border-stone-200 pb-6">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-stone-800">{c.name}</h3>
                  <span className="text-sm font-mono text-[#991b1b]">{c.period}</span>
                  <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded">{c.dead} dead</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Broken Treaties */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            370+ Broken Treaties
          </h2>
          <p className="text-stone-700 mb-6">
            The United States signed over 370 treaties with Native nations. These were not suggestions
            or guidelines — they were legally binding agreements, ratified by the Senate, with the
            full force of federal law. The US broke virtually every one. The pattern was consistent:
            sign a treaty guaranteeing Native lands, then break it when those lands became desirable
            for settlement, mining, or railroads.
          </p>
          <div className="space-y-4">
            {brokenTreaties.map((t) => (
              <div key={t.treaty} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="font-semibold text-stone-800 text-sm mb-1">{t.treaty}</div>
                <p className="text-sm text-stone-600">{t.broken}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Buffalo */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Buffalo: Destroying a Way of Life
          </h2>
          <p className="text-stone-700 mb-4">
            The deliberate destruction of the buffalo herds was perhaps the most effective weapon in
            the Indian Wars. An estimated 30-60 million buffalo roamed North America at the start of
            the 19th century. By 1889, fewer than 1,000 remained.
          </p>
          <p className="text-stone-700 mb-4">
            The buffalo provided Plains Indians with food, clothing, shelter, tools, and spiritual
            meaning. Destroying the herds destroyed their ability to resist. Military and political
            leaders understood this explicitly:
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-1">
              &ldquo;Every buffalo dead is an Indian gone.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— Colonel Richard Irving Dodge, 1867</p>
          </div>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-1">
              &ldquo;Send them powder and lead, if you will; but for the sake of a lasting peace,
              let them kill, skin, and sell until the buffaloes are exterminated.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— General Philip Sheridan to the Texas Legislature, 1875</p>
          </div>
          <p className="text-stone-700">
            The Army actively facilitated buffalo hunting, providing free ammunition to hunters and
            protecting them from Native retaliation. Congress twice passed bills to protect the
            remaining buffalo; President Grant pocket-vetoed them. The extinction of the buffalo
            was US government policy — a deliberate act of ecological and cultural warfare.
          </p>
        </section>

        {/* Boarding Schools */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            &ldquo;Kill the Indian, Save the Man&rdquo;: Boarding Schools
          </h2>
          <p className="text-stone-700 mb-4">
            When military conquest was complete, cultural destruction continued through the Indian
            boarding school system. Beginning with the Carlisle Indian Industrial School in 1879,
            the US government forcibly removed tens of thousands of Native children from their families
            and placed them in distant boarding schools designed to eradicate Native languages, cultures,
            and identities.
          </p>
          <p className="text-stone-700 mb-4">
            Captain Richard Henry Pratt, Carlisle&apos;s founder, stated the philosophy explicitly:
            &ldquo;Kill the Indian in him, and save the man.&rdquo; Children were forbidden from
            speaking their languages, practicing their religions, or wearing traditional clothing.
            They were given English names, dressed in uniforms, and subjected to military-style
            discipline. Physical and sexual abuse were widespread.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-700 text-sm">
              A 2022 Interior Department investigation identified over 400 federal Indian boarding
              schools across 37 states. At least 500 children died at these institutions — a number
              that is almost certainly a vast undercount, as many schools kept poor records and
              unmarked burial grounds continue to be discovered. The boarding school system operated
              from 1819 to 1969, with some schools continuing into the 1990s. Canada has formally
              recognized its similar residential school system as cultural genocide. The United States
              has not.
            </p>
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
            Legacy: The Foundation Beneath Everything
          </h2>
          <p className="text-stone-700 mb-4">
            The Indian Wars are not a chapter of American history — they <em>are</em> American history.
            Every acre of the continental United States was once Native land. Every city, every farm,
            every military base sits on territory that was taken through a combination of treaty, purchase,
            fraud, and force. The wars that accomplished this transfer lasted longer than the Roman
            conquest of Gaul, the Crusades, and the Hundred Years&apos; War combined.
          </p>
          <p className="text-stone-700 mb-4">
            The consequences are not historical — they are present. Native Americans on reservations
            experience poverty rates of 25-30%, life expectancy 5.5 years below the national average,
            and the highest rates of suicide, substance abuse, and violent crime of any demographic
            group in the United States. These outcomes are not coincidental; they are the direct
            legacy of 148 years of warfare, broken treaties, forced removal, cultural destruction,
            and confinement.
          </p>
          <p className="text-stone-700 mb-4">
            The Indian Wars also established patterns that shaped all subsequent American conflicts:
            the dehumanization of the enemy, the gap between stated ideals and actual policy, the
            use of starvation and cultural destruction as weapons, the breaking of agreements, and
            the abandonment of allies. The frontier was America&apos;s first laboratory for warfare —
            and the lessons learned there were exported worldwide.
          </p>
          <p className="text-stone-700">
            Most Americans can name major battles of the Civil War, World War II, and Vietnam. Few
            can name Sand Creek, the Wabash, or Bear River. The Indian Wars have been erased from
            popular memory not because they were minor, but because remembering them honestly would
            require reckoning with the foundation upon which the entire country was built. That
            reckoning remains undone.
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
              { href: '/war-of-1812', label: 'War of 1812 — Tecumseh\'s Last Stand' },
              { href: '/mexican-american-war', label: 'Mexican-American War — Continental Expansion' },
              { href: '/analysis/americas-forgotten-wars', label: 'America\'s Forgotten Wars' },
              { href: '/analysis/timeline-of-american-empire', label: 'Timeline of American Empire' },
              { href: '/us-wars-list', label: 'Complete List of US Wars' },
              { href: '/casualties', label: 'Total US War Casualties' },
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
            <li>Dee Brown — Bury My Heart at Wounded Knee (1970)</li>
            <li>Peter Cozzens — The Earth Is Weeping: The Epic Story of the Indian Wars for the American West (2016)</li>
            <li>Claudio Saunt — Unworthy Republic: The Dispossession of Native Americans (2020)</li>
            <li>Roxanne Dunbar-Ortiz — An Indigenous Peoples&apos; History of the United States (2014)</li>
            <li>US Department of the Interior — Federal Indian Boarding School Initiative Report (2022)</li>
            <li>National Archives — Records of Indian Treaties</li>
            <li>Congressional Research Service — American Indian Policy Overview</li>
            <li>David Treuer — The Heartbeat of Wounded Knee: Native America from 1890 to the Present (2019)</li>
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
            headline: 'The American Indian Wars: 148 Years of Conflict (1776-1924)',
            description: 'Comprehensive overview of the American Indian Wars — from the Northwest Indian War to Wounded Knee. Costs, casualties, broken treaties, and the dispossession of a continent.',
            url: 'https://warcosts.org/indian-wars',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-16',
            dateModified: '2025-03-16',
          }),
        }}
      />
    </main>
  )
}
