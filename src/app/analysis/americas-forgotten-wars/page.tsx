import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: "America's Forgotten Wars — The Conflicts Most Americans Never Heard Of | WarCosts",
  description:
    'From the Quasi-War to the Banana Wars, Boxer Rebellion to the Russian Civil War intervention — dozens of US military actions that cost billions, killed thousands, and shaped the world. A comprehensive accounting of wars erased from public memory.',
  keywords: [
    'forgotten wars', 'Quasi-War', 'Barbary Wars', 'Banana Wars', 'Boxer Rebellion',
    'Russian Civil War intervention', 'Punitive Expedition', 'undeclared wars',
    'US military history', 'hidden wars', 'secret wars', 'minor conflicts',
  ],
  openGraph: {
    title: "America's Forgotten Wars — Billions Spent, Thousands Killed, Zero Memory",
    description:
      'The US has fought dozens of wars most citizens can\'t name. Combined cost: hundreds of billions. Combined deaths: tens of thousands. Here\'s what we forgot.',
    url: 'https://warcosts.org/analysis/americas-forgotten-wars',
    type: 'article',
  },
}

/* ── JSON-LD ─────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "America's Forgotten Wars — The Conflicts Most Americans Never Heard Of",
  description:
    'A comprehensive accounting of the dozens of US military actions erased from public memory — from the Quasi-War through the Banana Wars and beyond.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
  datePublished: '2026-03-16',
  dateModified: '2026-03-16',
  url: 'https://warcosts.org/analysis/americas-forgotten-wars',
  mainEntityOfPage: 'https://warcosts.org/analysis/americas-forgotten-wars',
  keywords: ['forgotten wars', 'Quasi-War', 'Barbary Wars', 'Banana Wars', 'Boxer Rebellion'],
}

/* ── Forgotten War Data ──────────────────────────────────────── */
const forgottenWars = [
  {
    name: 'The Quasi-War',
    years: '1798–1800',
    opponent: 'France',
    region: 'Atlantic Ocean / Caribbean',
    cost2024: '$200M+',
    casualties: '~82 killed',
    summary:
      'America\'s first undeclared war. After the French began seizing US merchant ships, President Adams launched an undeclared naval war without Congressional approval. The US Navy captured 85+ French vessels. It established the precedent that presidents could wage war without formally declaring it — a pattern that would define American military action for the next 225 years.',
    legacy: 'Created the Department of the Navy. Proved a president could wage war without a declaration. Led to the Alien and Sedition Acts.',
    link: '/quasi-war',
  },
  {
    name: 'First Barbary War',
    years: '1801–1805',
    opponent: 'Tripoli / Barbary States',
    region: 'North Africa / Mediterranean',
    cost2024: '$300M+',
    casualties: '~35 killed',
    summary:
      'When the Pasha of Tripoli declared war on the US for not paying enough tribute, Jefferson sent the Navy 5,000 miles to blockade North Africa. The Marines\' famous march "to the shores of Tripoli" comes from this war. William Eaton led a ragtag army across the Libyan desert to capture the city of Derna — the first time the US flag was raised in conquest on foreign soil.',
    legacy: 'First US overseas military victory. Established the Marines\' reputation. "Shores of Tripoli" in the Marine hymn.',
    link: '/barbary-wars',
  },
  {
    name: 'Second Barbary War',
    years: '1815',
    opponent: 'Algeria / Barbary States',
    region: 'North Africa / Mediterranean',
    cost2024: '$50M+',
    casualties: '~4 killed',
    summary:
      'While the US was busy with the War of 1812, Algeria resumed attacking American shipping. After the war ended, Madison sent a naval squadron that forced Algeria, Tunis, and Tripoli to sign treaties ending tribute payments permanently. The entire campaign lasted just three months.',
    legacy: 'Ended 30+ years of tribute payments. Established permanent US naval presence in the Mediterranean.',
    link: '/barbary-wars',
  },
  {
    name: 'First Sumatran Expedition',
    years: '1832',
    opponent: 'Malay pirates / Kuala Batee',
    region: 'Southeast Asia (Sumatra)',
    cost2024: '$15M+',
    casualties: '2 killed',
    summary:
      'After Malay warriors attacked the American merchant ship Friendship, President Jackson sent the frigate USS Potomac to bombard the town of Kuala Batee without Congressional knowledge or approval. The Marines stormed ashore and burned the town. Jackson didn\'t even inform Congress until after the fact.',
    legacy: 'One of the first US military actions in Southeast Asia. Established pattern of presidential military action without Congressional approval.',
  },
  {
    name: 'Second Sumatran Expedition',
    years: '1838–1839',
    opponent: 'Malay forces / Muckie',
    region: 'Southeast Asia (Sumatra)',
    cost2024: '$10M+',
    casualties: 'Minimal',
    summary:
      'After another attack on American traders, a US naval force returned to Sumatra to bombard and destroy the town of Muckie. Two ships and 360 Marines participated. The expedition was part of a growing pattern of using naval power to protect American commercial interests anywhere on the globe.',
    legacy: 'Reinforced the pattern of gunboat diplomacy to protect commercial interests.',
  },
  {
    name: 'Fiji Expeditions',
    years: '1855 & 1858',
    opponent: 'Fijian islanders',
    region: 'South Pacific',
    cost2024: '$10M+',
    casualties: 'Minimal',
    summary:
      'After the murder of American traders, the US Navy bombarded and burned Fijian villages on two separate occasions. Marines went ashore to destroy property and enforce payment of reparations. The 1858 expedition involved shelling the island of Waya and demanding an indemnity.',
    legacy: 'Early example of US military power projection in the Pacific — decades before formal Pacific expansion.',
  },
  {
    name: 'Opening of Japan',
    years: '1853–1854',
    opponent: 'Tokugawa Shogunate',
    region: 'East Asia (Japan)',
    cost2024: '$100M+',
    casualties: 'None (gunboat diplomacy)',
    summary:
      'Commodore Matthew Perry sailed four warships into Tokyo Bay uninvited and essentially threatened to bombard Japan unless they opened to American trade. The "Black Ships" carried more than 100 cannons. Perry returned the next year with nine ships. Japan, facing the choice between trade or war against a technologically superior force, signed the Treaty of Kanagawa.',
    legacy: 'Ended 200+ years of Japanese isolation. Triggered the Meiji Restoration. Set Japan on the path that led to Pearl Harbor 87 years later.',
  },
  {
    name: 'Bombardment of Greytown (Nicaragua)',
    years: '1854',
    opponent: 'Greytown / San Juan del Norte',
    region: 'Central America',
    cost2024: '$20M+',
    casualties: 'None (US side)',
    summary:
      'When a Nicaraguan mob injured an American diplomat, the USS Cyane bombarded and completely destroyed the town of Greytown. A court later ruled the president could order such attacks without Congressional approval, establishing a critical precedent for executive war-making.',
    legacy: 'Court ruling affirmed presidential power to use military force without Congress — a precedent cited for 170+ years.',
  },
  {
    name: 'Paraguay Expedition',
    years: '1858–1859',
    opponent: 'Paraguay',
    region: 'South America',
    cost2024: '$50M+',
    casualties: '1 killed (prior incident)',
    summary:
      'After Paraguay fired on a US Navy survey ship, President Buchanan sent a massive fleet of 19 warships and 2,500 men — the largest US naval force deployed to the Southern Hemisphere up to that time — to extract an apology, an indemnity, and a trade treaty.',
    legacy: 'Demonstrated willingness to project massive military power deep into South America for relatively minor incidents.',
  },
  {
    name: 'Korean Expedition (Shinmiyangyo)',
    years: '1871',
    opponent: 'Joseon Korea',
    region: 'East Asia',
    cost2024: '$30M+',
    casualties: '3 killed',
    summary:
      'After Korea fired on US ships conducting an unauthorized survey, the Navy retaliated by landing 650 Marines who stormed and captured five Korean forts, killing an estimated 243 Korean soldiers. Korea still refused to open to trade, making the expedition a military success but a diplomatic failure.',
    legacy: 'First American military action in Korea — 79 years before the Korean War. Five Congressional Medals of Honor awarded.',
  },
  {
    name: 'Bombardment of Shimonoseki',
    years: '1863–1864',
    opponent: 'Chōshū Domain (Japan)',
    region: 'East Asia (Japan)',
    cost2024: '$20M+',
    casualties: '~5 killed',
    summary:
      'When the Chōshū domain fired on American merchant ships in the Straits of Shimonoseki, the USS Wyoming steamed in alone and attacked, sinking two ships. A year later, a combined fleet of American, British, French, and Dutch warships bombarded the Chōshū fortifications, destroying them completely.',
    legacy: 'First US joint military operation with European powers in Asia. Accelerated Japan\'s modernization.',
  },
  {
    name: 'Formosa (Taiwan) Expedition',
    years: '1867',
    opponent: 'Paiwan aborigines (Taiwan)',
    region: 'East Asia',
    cost2024: '$10M+',
    casualties: '1 killed',
    summary:
      'After Paiwan aborigines killed the crew of a wrecked American bark, 181 Marines landed on Taiwan to punish them. The expedition was repulsed — one of the few times in the 19th century that a US punitive expedition failed in its objective.',
    legacy: 'Early US military involvement in Taiwan — a region that remains a geopolitical flashpoint 159 years later.',
  },
  {
    name: 'The Boxer Rebellion',
    years: '1899–1901',
    opponent: 'Boxer militia / Qing China',
    region: 'East Asia (China)',
    cost2024: '$500M+',
    casualties: '~53 killed',
    summary:
      'When Chinese nationalists besieged foreign embassies in Beijing, the US sent 5,000 troops as part of an eight-nation coalition that fought its way from the coast to the capital. American troops participated in the capture and looting of Beijing. China was forced to pay a $333 million indemnity (over $12 billion today).',
    legacy: 'Established US military presence in China. The indemnity funds were later used to send Chinese students to American universities — an early form of soft power.',
    link: '/boxer-rebellion',
  },
  {
    name: 'The Banana Wars (Collective)',
    years: '1898–1934',
    opponent: 'Multiple Latin American nations',
    region: 'Caribbean / Central America',
    cost2024: '$5B+',
    casualties: '~500+ killed',
    summary:
      'A 36-year series of occupations, interventions, and regime changes across Latin America — all to protect American corporate interests, especially the United Fruit Company. The US occupied Cuba (1898–1902, 1906–1909, 1917–1922), Honduras (7 times), Nicaragua (1912–1933), Haiti (1915–1934), Dominican Republic (1916–1924), Panama (carved from Colombia in 1903), and more.',
    legacy: 'Created deep anti-American sentiment across Latin America that persists today. Marine General Smedley Butler later denounced his role: "I was a racketeer, a gangster for capitalism."',
    link: '/banana-wars',
  },
  {
    name: 'Occupation of Nicaragua',
    years: '1912–1933',
    opponent: 'Nicaraguan rebels / Augusto Sandino',
    region: 'Central America',
    cost2024: '$1.5B+',
    casualties: '~130 killed',
    summary:
      'The US occupied Nicaragua for 21 years, propping up friendly governments and fighting a guerrilla war against Augusto Sandino and his nationalist forces. Marines were deployed to protect American mining and banking interests. When the US finally withdrew, it left behind the Somoza dictatorship.',
    legacy: 'Created the Somoza dynasty that ruled until 1979. Spawned the Sandinista movement. Led directly to the Iran-Contra scandal of the 1980s.',
  },
  {
    name: 'Occupation of Haiti',
    years: '1915–1934',
    opponent: 'Haitian resistance / Cacos rebels',
    region: 'Caribbean',
    cost2024: '$2B+',
    casualties: '~148 killed',
    summary:
      'After political instability threatened American banking interests, Marines occupied Haiti for 19 years. They dissolved the Haitian parliament at gunpoint, rewrote the constitution to allow foreign land ownership, imposed forced labor (corvée), and killed an estimated 15,000 Haitians. Marine Sergeant Faustin Wirkus actually crowned himself "King of La Gonâve."',
    legacy: 'Devastated Haiti\'s economy and governance. Created structural problems that persist to this day. One of the most shameful chapters in US military history.',
  },
  {
    name: 'Occupation of the Dominican Republic',
    years: '1916–1924',
    opponent: 'Dominican resistance',
    region: 'Caribbean',
    cost2024: '$1B+',
    casualties: '~25 killed',
    summary:
      'Marines occupied the Dominican Republic for eight years, imposed martial law, censored the press, and fought a guerrilla war in the eastern provinces. The occupation established the Dominican National Guard, which was later used by Rafael Trujillo to seize power and rule as dictator for 31 years.',
    legacy: 'Created the Trujillo dictatorship. The US intervened again in 1965.',
  },
  {
    name: 'Pancho Villa Expedition (Punitive Expedition)',
    years: '1916–1917',
    opponent: 'Pancho Villa / Mexican forces',
    region: 'Mexico',
    cost2024: '$2B+',
    casualties: '~65 killed',
    summary:
      'After Pancho Villa raided Columbus, New Mexico, killing 18 Americans, President Wilson sent 10,000 troops under General Pershing deep into Mexico. The expedition used airplanes in combat for the first time in US history, deployed trucks and motorized vehicles at scale, and lasted 11 months — but never caught Villa. It nearly triggered a full-scale war with Mexico.',
    legacy: 'First US military use of aircraft in combat. Served as a training ground for officers who would lead in WWI. Pershing became famous enough to lead the American Expeditionary Force.',
  },
  {
    name: 'Russian Civil War Intervention',
    years: '1918–1920',
    opponent: 'Bolshevik Russia',
    region: 'Northern Russia / Siberia',
    cost2024: '$2B+',
    casualties: '~424 killed',
    summary:
      'The US sent 13,000 troops to Russia to intervene in the civil war — 5,000 to Archangel in northern Russia and 8,000 to Vladivostok in Siberia. The "Polar Bear Expedition" fought pitched battles against Bolshevik forces in Arctic conditions. Troops endured -40°F temperatures and had no clear mission. Congress was barely informed.',
    legacy: 'Soviet leaders never forgot the intervention. It poisoned US-Russian relations for decades and was used as propaganda throughout the Cold War. Putin still references it.',
    link: '/russian-civil-war',
  },
  {
    name: 'Occupation of Veracruz',
    years: '1914',
    opponent: 'Mexico',
    region: 'Mexico',
    cost2024: '$500M+',
    casualties: '22 killed',
    summary:
      'After Mexican authorities arrested US sailors in Tampico, President Wilson ordered the Navy to seize the port of Veracruz. 800 Marines and sailors stormed the city, fighting street-by-street against Mexican cadets and civilians. The US held Veracruz for seven months.',
    legacy: 'United Mexican factions against the US. Earned nine Medals of Honor. Demonstrated how quickly a minor diplomatic incident could escalate to invasion.',
  },
  {
    name: 'Lebanon Crisis',
    years: '1958',
    opponent: 'Lebanese rebels / regional tensions',
    region: 'Middle East',
    cost2024: '$1B+',
    casualties: '4 killed (non-combat)',
    summary:
      'President Eisenhower sent 14,000 Marines and Army troops to Lebanon after the Iraqi revolution raised fears of communist expansion in the Middle East. It was the first application of the Eisenhower Doctrine. Troops landed on beaches full of sunbathers and bikini-clad tourists.',
    legacy: 'First large-scale US military deployment to the Middle East. Established the pattern of intervening in Lebanon that would lead to the 1983 barracks bombing.',
  },
  {
    name: 'Dominican Republic Intervention',
    years: '1965–1966',
    opponent: 'Dominican constitutionalists',
    region: 'Caribbean',
    cost2024: '$2B+',
    casualties: '47 killed',
    summary:
      'When a constitutionalist rebellion threatened to restore the democratically elected president, LBJ sent 42,000 troops claiming a communist threat. It was the largest US military intervention in Latin America since the Banana Wars era.',
    legacy: 'Demonstrated that the US would use massive force to prevent even democratic movements if they were perceived as left-leaning.',
  },
  {
    name: 'Invasion of Grenada',
    years: '1983',
    opponent: 'Grenada / Cuban forces',
    region: 'Caribbean',
    cost2024: '$500M+',
    casualties: '19 killed',
    summary:
      'Reagan invaded the tiny island of Grenada (population 91,000) after a Marxist coup, claiming 600 American medical students were in danger. 7,600 US troops overwhelmed token resistance from Grenadian and Cuban forces. The invasion lasted just a few days.',
    legacy: 'First post-Vietnam US military victory. Restored confidence in the use of force. Heavily criticized internationally — the UN General Assembly condemned it 108-9.',
  },
  {
    name: 'Invasion of Panama',
    years: '1989–1990',
    opponent: 'Panama / Noriega forces',
    region: 'Central America',
    cost2024: '$1.5B+',
    casualties: '23 killed',
    summary:
      'Bush Sr. invaded Panama with 27,684 troops to overthrow Manuel Noriega — a former CIA asset turned liability. Operation Just Cause was the largest US military action since Vietnam. The El Chorrillo neighborhood was devastated, with estimates of 200-4,000 Panamanian civilian casualties.',
    legacy: 'Noriega was captured and imprisoned. Civilian casualty counts remain disputed. Demonstrated post-Cold War willingness to use overwhelming force for regime change.',
  },
  {
    name: 'Intervention in Somalia',
    years: '1992–1995',
    opponent: 'Somali warlords / Mohamed Farrah Aidid',
    region: 'East Africa',
    cost2024: '$3B+',
    casualties: '43 killed',
    summary:
      'What began as a humanitarian mission to deliver food became a manhunt for warlord Aidid. The Battle of Mogadishu ("Black Hawk Down") killed 18 US soldiers and an estimated 1,000-3,000 Somalis in a single day. The images of a dead American soldier dragged through the streets caused the US to withdraw.',
    legacy: 'Made Clinton reluctant to intervene in Rwanda, contributing to inaction during the genocide. "Black Hawk Down" shaped US military doctrine for a decade.',
  },
  {
    name: 'Intervention in Yugoslavia / Kosovo',
    years: '1995 & 1999',
    opponent: 'Serbia / Yugoslavia',
    region: 'Europe (Balkans)',
    cost2024: '$10B+',
    casualties: '0 killed (in combat)',
    summary:
      'NATO, led by the US, bombed Bosnian Serb positions in 1995 (Operation Deliberate Force) and Serbia itself for 78 days in 1999 (Operation Allied Force) to stop ethnic cleansing. The 1999 campaign dropped 23,000 bombs. No US combat deaths, but hundreds of Serbian civilians were killed, including the bombing of the Chinese embassy.',
    legacy: 'Established "humanitarian intervention" as justification for war. NATO expansion. Set precedent for Libya 2011.',
  },
  {
    name: 'Philippine-American War',
    years: '1899–1902 (to 1913)',
    opponent: 'Philippine Republic',
    region: 'Southeast Asia',
    cost2024: '$10B+',
    casualties: '~4,200 killed',
    summary:
      'After "liberating" the Philippines from Spain, the US fought a brutal war against Filipino independence forces. 125,000 US troops were deployed. The war featured concentration camps, water torture, and the burning of entire villages. An estimated 200,000-1,000,000 Filipino civilians died. The Moro Rebellion continued until 1913.',
    legacy: 'America\'s first overseas counterinsurgency. Established the Philippines as a US colony until 1946. Tactics later used in Vietnam.',
    link: '/philippine-american-war',
  },
  {
    name: 'Occupation of Cuba',
    years: '1898–1902, 1906–1909, 1917–1922',
    opponent: 'Cuba',
    region: 'Caribbean',
    cost2024: '$3B+',
    casualties: '~100+ killed',
    summary:
      'The US occupied Cuba three separate times after the Spanish-American War. The Platt Amendment gave the US the right to intervene in Cuban affairs at will and established the Guantánamo Bay naval base (which the US still holds). American corporations came to dominate Cuba\'s economy.',
    legacy: 'Created the conditions for the Cuban Revolution of 1959. Guantánamo Bay remains US territory to this day — the longest-running occupation in the Western Hemisphere.',
  },
  {
    name: 'China Station / Yangtze Patrol',
    years: '1854–1941',
    opponent: 'Various Chinese forces',
    region: 'East Asia (China)',
    cost2024: '$5B+',
    casualties: '~100+ killed',
    summary:
      'For 87 years, the US Navy maintained a permanent armed presence on China\'s rivers and coasts. Gunboats patrolled the Yangtze River 1,300 miles inland. Marines were stationed in Beijing, Shanghai, and Tianjin. The US participated in the suppression of the Taiping Rebellion, the Boxer Rebellion, and numerous smaller interventions.',
    legacy: 'Nearly a century of uninvited military presence in China. Chinese leaders still reference this era. Influenced China\'s deep suspicion of Western military presence in Asia.',
  },
  {
    name: 'Bombing of Libya',
    years: '1986',
    opponent: 'Libya / Gaddafi',
    region: 'North Africa',
    cost2024: '$500M+',
    casualties: '2 killed (aircrew)',
    summary:
      'Reagan ordered airstrikes on Tripoli and Benghazi in retaliation for the Berlin disco bombing. F-111s from Britain and carrier aircraft struck military and government targets. Gaddafi\'s adopted daughter was killed. France refused overflight rights, forcing bombers on a 14-hour round trip.',
    legacy: 'First direct US attack on a head of state\'s residence. Gaddafi funded the Lockerbie bombing in retaliation.',
  },
]

/* ── Summary Stats ───────────────────────────────────────────── */
const totalEstimatedCost = '$50+ Billion'
const totalEstimatedDeaths = '6,000+'
const totalInterventions = '30+'
const spanYears = '228 Years'

export default function AmericasForgottenWarsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Analysis', href: '/analysis' },
            { label: "America's Forgotten Wars" },
          ]}
        />

        {/* Hero */}
        <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
          <p className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-2">
            Deep Analysis
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold leading-tight mb-4">
            America&apos;s Forgotten Wars
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl">
            The United States has fought dozens of wars that most Americans can&apos;t name. The
            Quasi-War. The Banana Wars. The Punitive Expedition. The Polar Bear Expedition.
            Combined, they cost tens of billions, killed thousands of Americans, and shaped the
            modern world. Here&apos;s what we forgot.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Estimated Total Cost (2024$)', value: totalEstimatedCost },
              { label: 'US Service Members Killed', value: totalEstimatedDeaths },
              { label: 'Separate Interventions', value: totalInterventions },
              { label: 'Spanning', value: spanYears },
            ].map((s) => (
              <div key={s.label} className="bg-stone-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500">{s.value}</div>
                <div className="text-stone-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <section className="prose prose-stone max-w-none mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">
            The Wars History Forgot
          </h2>
          <p>
            Ask any American to name the wars their country has fought and you&apos;ll get the
            usual list: the Revolution, the Civil War, both World Wars, Korea, Vietnam,
            Afghanistan, Iraq. Maybe the War of 1812 if they paid attention in school.
          </p>
          <p>
            But this list barely scratches the surface. The United States has launched{' '}
            <strong>hundreds</strong> of military actions since its founding — bombarding foreign
            ports, occupying sovereign nations for decades, fighting guerrilla wars on three
            continents, and sending Marines to overthrow governments that threatened American
            business interests.
          </p>
          <p>
            The Congressional Research Service identifies over{' '}
            <strong>400 instances</strong> of US armed forces deployed abroad since 1798. Most
            Americans know about a dozen. The rest have been quietly erased from the national
            memory — despite costing billions of dollars, killing thousands of American service
            members, and shaping the geopolitical landscape we live in today.
          </p>
          <p>
            This is an accounting of the wars America forgot.
          </p>
        </section>

        {/* Smedley Butler Quote */}
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-12">
          <blockquote className="text-stone-800 text-lg italic">
            &ldquo;I spent 33 years and four months in active military service and during that
            period I spent most of my time as a high class muscle man for Big Business, for Wall
            Street and the bankers. In short, I was a racketeer, a gangster for capitalism.&rdquo;
          </blockquote>
          <p className="text-stone-600 mt-3 font-semibold">
            — Major General Smedley Butler, USMC
            <br />
            <span className="font-normal text-sm">
              Two-time Medal of Honor recipient. Most decorated Marine in US history at the time
              of his death.
            </span>
          </p>
        </div>

        {/* The Pattern Section */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">
            The Pattern: Incident → Escalation → Occupation
          </h2>
          <div className="bg-stone-100 rounded-xl p-6">
            <p className="text-stone-700 mb-4">
              Nearly every forgotten war follows the same pattern:
            </p>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'The Incident',
                  desc: 'American merchants, missionaries, or sailors are attacked, insulted, or have their property damaged. Sometimes the provocation is genuine; sometimes it\'s manufactured or wildly exaggerated.',
                },
                {
                  step: '2',
                  title: 'The Demand',
                  desc: 'The US demands an apology, indemnity, trade concessions, or regime change. The demand is usually designed to be impossible to fully meet.',
                },
                {
                  step: '3',
                  title: 'The Escalation',
                  desc: 'When demands aren\'t met, the president sends the Navy. Ports are blockaded, towns are bombarded, Marines go ashore. Congress is informed after the fact — if at all.',
                },
                {
                  step: '4',
                  title: 'The Occupation',
                  desc: 'What was supposed to be a brief punitive action becomes a multi-year occupation. American businesses move in. A friendly government is installed.',
                },
                {
                  step: '5',
                  title: 'The Forgetting',
                  desc: 'The war is too small to make the textbooks, too embarrassing to celebrate, or too complicated to explain. Within a generation, it\'s forgotten.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">{item.title}</h3>
                    <p className="text-stone-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Each Forgotten War */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-6">
            The Complete Catalog
          </h2>
          <p className="text-stone-600 mb-8">
            Below is every major US military action that most Americans have never heard of —
            organized roughly chronologically. Each one reshaped borders, toppled governments,
            or established precedents that echo to this day.
          </p>

          <div className="space-y-6">
            {forgottenWars.map((war, i) => (
              <div
                key={i}
                className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900">
                      {war.link ? (
                        <Link href={war.link} className="hover:text-red-600 transition-colors">
                          {war.name}
                        </Link>
                      ) : (
                        war.name
                      )}
                    </h3>
                    <p className="text-stone-500 text-sm">
                      {war.years} · {war.opponent} · {war.region}
                    </p>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">
                      {war.cost2024}
                    </span>
                    <span className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full">
                      {war.casualties}
                    </span>
                  </div>
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-3">{war.summary}</p>
                <div className="bg-stone-50 rounded-lg p-3">
                  <p className="text-stone-600 text-sm">
                    <span className="font-semibold text-stone-800">Legacy:</span> {war.legacy}
                  </p>
                </div>
                {war.link && (
                  <Link
                    href={war.link}
                    className="inline-block mt-3 text-red-600 text-sm font-semibold hover:underline"
                  >
                    Read full analysis →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Not Listed Section */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">
            And That&apos;s Not Even All of Them
          </h2>
          <p className="text-stone-600 mb-4">
            The list above covers the major forgotten wars. But there are dozens more that don&apos;t
            even merit individual entries — interventions so small, so brief, or so poorly
            documented that they exist only in naval logs and diplomatic archives:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Ivory Coast intervention (1842)',
              'Bombardment of San Juan del Norte (1854)',
              'Occupation of Greytown, Nicaragua (1854)',
              'Walker\'s Filibuster in Nicaragua (1856–1857)',
              'Navassa Island occupation (1857–1858)',
              'Wrangel bombardment, China (1856)',
              'Uruguay intervention (1858)',
              'Angola intervention (1860)',
              'Japanese intervention (1863–1864)',
              'Mexico — various border incidents (1870s–1910s)',
              'Samoan Crisis (1887–1889)',
              'Hawaiian overthrow (1893)',
              'Occupation of Wake Island (1899)',
              'Occupation of Guam (1899–present)',
              'Moro Rebellion, Philippines (1899–1913)',
              'Honduras interventions (1903, 1907, 1911, 1912, 1919, 1924, 1925)',
              'Chinese Revolution intervention (1912)',
              'Siberian intervention (1918–1920)',
              'Guatemala — CIA coup (1954)',
              'Bay of Pigs, Cuba (1961)',
              'Laos — Secret War (1964–1973)',
              'Cambodia — Secret bombing (1969–1973)',
              'Iran — Operation Eagle Claw (1980)',
              'Beirut deployment (1982–1984)',
              'Tanker War — Persian Gulf (1987–1988)',
            ].map((item) => (
              <div
                key={item}
                className="bg-stone-50 rounded-lg p-3 text-sm text-stone-700 border border-stone-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* By The Numbers */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">
            By the Numbers
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                stat: '400+',
                label: 'Military Deployments Abroad',
                detail: 'Since 1798, per Congressional Research Service',
              },
              {
                stat: '5',
                label: 'Declared Wars',
                detail: 'War of 1812, Mexican-American, Spanish-American, WWI, WWII',
              },
              {
                stat: '~395',
                label: 'Undeclared Military Actions',
                detail: 'Every other deployment — authorized by executive order, not Congress',
              },
              {
                stat: '84%',
                label: 'Years at War',
                detail: 'The US has been at peace for only ~16 of its 250 years',
              },
              {
                stat: '70+',
                label: 'Countries Bombed or Invaded',
                detail: 'Since independence — roughly one-third of all nations on Earth',
              },
              {
                stat: '$50B+',
                label: 'Cost of "Minor" Wars (2024$)',
                detail: 'Adjusted total of just the wars on this page',
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-white border border-stone-200 rounded-xl p-5 text-center"
              >
                <div className="text-3xl font-bold text-red-600">{item.stat}</div>
                <div className="text-stone-900 font-semibold mt-1">{item.label}</div>
                <div className="text-stone-500 text-sm mt-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Are They Forgotten */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">
            Why Are They Forgotten?
          </h2>
          <div className="prose prose-stone max-w-none">
            <p>
              American wars don&apos;t get forgotten by accident. They get forgotten because
              remembering them would challenge fundamental narratives about American identity:
            </p>
            <div className="space-y-4 mt-4">
              <div className="bg-white border-l-4 border-stone-300 p-4 rounded-r-lg">
                <h3 className="font-semibold text-stone-900 mb-1">
                  They contradict the &ldquo;reluctant warrior&rdquo; myth
                </h3>
                <p className="text-stone-600 text-sm">
                  Americans like to believe the US only fights when provoked — that we&apos;re
                  reluctant warriors dragged into conflict by others&apos; aggression. The record of
                  hundreds of offensive military actions, many launched for commercial interests,
                  tells a different story.
                </p>
              </div>
              <div className="bg-white border-l-4 border-stone-300 p-4 rounded-r-lg">
                <h3 className="font-semibold text-stone-900 mb-1">
                  They reveal economic motives
                </h3>
                <p className="text-stone-600 text-sm">
                  The Banana Wars were fought for the United Fruit Company. The Boxer Rebellion
                  opened Chinese markets. Perry&apos;s expedition opened Japan. When the stated
                  reason is protecting American &ldquo;commercial interests,&rdquo; it&apos;s hard
                  to frame the intervention as noble.
                </p>
              </div>
              <div className="bg-white border-l-4 border-stone-300 p-4 rounded-r-lg">
                <h3 className="font-semibold text-stone-900 mb-1">
                  They make the &ldquo;world police&rdquo; role look imperial
                </h3>
                <p className="text-stone-600 text-sm">
                  Occupying Haiti for 19 years. Patrolling China&apos;s rivers for 87 years.
                  Overthrowing Central American governments for fruit companies. These actions look
                  less like a &ldquo;city on a hill&rdquo; and more like a 19th-century colonial
                  empire with better PR.
                </p>
              </div>
              <div className="bg-white border-l-4 border-stone-300 p-4 rounded-r-lg">
                <h3 className="font-semibold text-stone-900 mb-1">
                  They&apos;re individually small
                </h3>
                <p className="text-stone-600 text-sm">
                  No single forgotten war killed enough Americans to demand a national memorial. No
                  single intervention cost enough to require a war tax. They slip through the cracks
                  of history not because they don&apos;t matter, but because they only matter in
                  aggregate — and in aggregate, the pattern is damning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Real Cost */}
        <section className="mb-12">
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              The Real Cost of Forgetting
            </h2>
            <p className="text-stone-400 mb-4">
              The cost of these forgotten wars isn&apos;t just measured in dollars and deaths.
              It&apos;s measured in consequences:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Anti-Americanism',
                  desc: 'Every occupation created enemies. Latin America\'s distrust of the US traces directly to the Banana Wars. China\'s wariness traces to 87 years of gunboat diplomacy.',
                },
                {
                  title: 'Precedent',
                  desc: 'Each undeclared war made the next one easier. The Quasi-War proved a president could fight without Congress. By the 21st century, congressional war authority was essentially dead.',
                },
                {
                  title: 'Dictatorships',
                  desc: 'US occupations created Trujillo in the Dominican Republic, Somoza in Nicaragua, and countless other strongmen. "He may be a bastard, but he\'s our bastard."',
                },
                {
                  title: 'Blowback',
                  desc: 'The Russian intervention soured relations for 70 years. The Latin American occupations fueled revolution. The pattern of intervention creates the crises that justify the next intervention.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-stone-800/50 rounded-lg p-4">
                  <h3 className="text-red-500 font-semibold mb-1">{item.title}</h3>
                  <p className="text-stone-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline CTA */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">
            Want the Full Picture?
          </h2>
          <p className="text-stone-600 mb-4">
            This page covers the wars America forgot. But to understand the full scope of American
            military history — including the wars everyone knows — explore these resources:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Timeline of American Empire',
                desc: 'Every US military action from 1776 to present, in chronological order.',
                href: '/analysis/timeline-of-american-empire',
              },
              {
                title: 'Presidents & War Record',
                desc: 'Every president ranked by wars fought, spending, and casualties.',
                href: '/analysis/presidents-war-record',
              },
              {
                title: 'Complete US Wars List',
                desc: 'All US conflicts with costs, casualties, and analysis.',
                href: '/us-wars-list',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white border border-stone-200 rounded-xl p-5 hover:border-red-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-stone-900 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
                <span className="text-red-600 text-sm font-semibold mt-2 inline-block">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">
            Sources &amp; Methodology
          </h2>
          <div className="bg-stone-50 rounded-xl p-6 text-sm text-stone-600 space-y-2">
            <p>
              Cost figures are estimates adjusted to 2024 dollars using the Bureau of Labor
              Statistics CPI calculator. Original cost data drawn from:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Congressional Research Service, &ldquo;Instances of Use of United States Armed Forces Abroad, 1798-2024&rdquo;</li>
              <li>Department of Defense Historical Office records</li>
              <li>Stephen Kinzer, <em>Overthrow: America&apos;s Century of Regime Change</em> (2006)</li>
              <li>Smedley Butler, <em>War Is a Racket</em> (1935)</li>
              <li>Max Boot, <em>The Savage Wars of Peace: Small Wars and the Rise of American Power</em> (2002)</li>
              <li>Neta Crawford, &ldquo;Costs of War&rdquo; project, Brown University</li>
              <li>Naval History and Heritage Command records</li>
              <li>William Blum, <em>Killing Hope: US Military and CIA Interventions Since World War II</em> (2003)</li>
            </ul>
            <p className="mt-2">
              Casualty figures reflect US service member deaths unless otherwise noted. Civilian
              and foreign combatant casualties are significantly higher in most cases.
            </p>
          </div>
        </section>

        {/* Share + Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200 pt-8">
          <ShareButtons
            title="America's Forgotten Wars — The Conflicts Most Americans Never Heard Of"
          />
          <Link
            href="/analysis"
            className="text-stone-500 hover:text-red-600 transition-colors text-sm"
          >
            ← Back to Analysis
          </Link>
        </div>

        <BackToTop />
      </div>
    </>
  )
}
