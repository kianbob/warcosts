import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { DeathComparisonChart, BombingChart, AwarenessChart } from './ForgottenCharts'

export const metadata: Metadata = {
  title: 'Forgotten Wars: The Conflicts Americans Don\'t Remember | WarCosts',
  description: 'The Korean War killed 36,574 Americans. The Philippine-American War killed up to 1 million Filipinos. Laos is the most bombed country per capita in history. Most Americans have never heard of them.',
  openGraph: {
    title: 'Forgotten Wars: The Conflicts Americans Don\'t Remember',
    description: 'Korean War, Philippine-American War, Banana Wars, Laotian Secret War — wars that shaped the world but disappeared from memory.',
    url: 'https://www.warcosts.org/analysis/forgotten-wars',
    type: 'article',
  },
}

const majorForgottenWars = [
  {
    name: 'The Philippine-American War',
    period: '1899–1902 (officially); guerrilla war continued to 1913',
    usDead: '4,234',
    totalDead: '200,000–1,000,000 Filipino civilians',
    cost2023: '$9.6 billion',
    summary: 'After "liberating" the Philippines from Spain in 1898, the US refused to grant independence. Filipino resistance fighters — who had been US allies against Spain — became the enemy overnight. What followed was a brutal three-year war featuring concentration camps (called "reconcentration zones"), waterboarding (called "the water cure"), scorched-earth campaigns, and explicit orders to kill everyone over the age of 10 on the island of Samar.',
    details: [
      'General Jacob Smith ordered his troops to turn Samar into "a howling wilderness" and kill anyone capable of bearing arms — defined as anyone over age 10.',
      'The US established concentration camps where Filipino civilians died of disease and starvation at catastrophic rates — 11,000+ died in reconcentration zones.',
      'Waterboarding was systematically used as an interrogation technique — the same technique the US would use again 100 years later in the War on Terror.',
      'Mark Twain was one of the few public critics, writing: "We have pacified some thousands of the islanders and buried them, destroyed their fields, burned their villages, and turned their widows and orphans out-of-doors."',
      'The war cost $600 million (1900 dollars) — equivalent to $9.6 billion today, making it proportionally more expensive than the Iraq War.',
      'US casualties were 4,234 dead and 2,818 wounded — higher than Revolutionary War casualties.',
      'The war is almost entirely absent from American textbooks. Filipino schoolchildren learn about it; American schoolchildren do not.',
    ],
    whyForgotten: 'It contradicts the narrative of American liberation. The US was the colonizer, not the liberator.',
    longTermImpact: 'Created the template for American counterinsurgency warfare. Established patterns of torture and civilian targeting that would recur in Vietnam, Iraq, and Afghanistan.',
    constitutionalIssues: 'War was never declared by Congress. McKinley claimed authority as part of Spanish-American War aftermath.',
  },
  {
    name: 'The Korean War',
    period: '1950–1953',
    usDead: '36,574',
    totalDead: '2–3 million (majority civilians)',
    cost2023: '$680 billion',
    summary: 'Called "The Forgotten War" even while it was happening, Korea saw more US deaths in three years than Iraq and Afghanistan combined over twenty. The US dropped more bombs on Korea than it had in the entire Pacific Theater of WWII. Virtually every major city in North Korea was destroyed — General Curtis LeMay estimated the US killed 20% of North Korea\'s population. The war never officially ended; the US and North Korea are still technically at war.',
    details: [
      'The US dropped 635,000 tons of bombs on Korea — more than the entire Pacific Theater in WWII (503,000 tons) — plus 32,557 tons of napalm.',
      'General Curtis LeMay: "We burned down every town in North Korea and some in South Korea, too... We killed off 20% of the population."',
      'An estimated 12-15% of North Korea\'s population was killed — proportionally one of the most devastating campaigns in modern warfare.',
      'The US considered using nuclear weapons multiple times. MacArthur wanted to drop 30-50 atomic bombs along the Chinese border.',
      'The war ended in a stalemate at roughly the same border where it started. 36,574 Americans died for a line on a map.',
      'Total cost: $680 billion in 2023 dollars — making it the 4th most expensive war in US history.',
      'There is no Korean War memorial moment in American culture. No movies. No TV shows. No cultural reckoning. Just a wall in DC that most people walk past.',
    ],
    whyForgotten: 'Sandwiched between "the Good War" (WWII) and the cultural earthquake of Vietnam, Korea had no narrative. It wasn\'t a victory, a defeat, or a protest movement. It was just carnage.',
    longTermImpact: 'Normalized presidential war powers. Truman called it a "police action" to avoid congressional declaration. Set precedent for executive-initiated conflicts.',
    constitutionalIssues: 'No congressional declaration of war. UN authorization used as substitute for congressional approval — unconstitutional precedent that continues today.',
  },
  {
    name: 'The Banana Wars',
    period: '1898–1934',
    usDead: '~300',
    totalDead: '50,000+ (mostly civilians in occupied nations)',
    cost2023: '$12 billion (estimated)',
    summary: 'For three decades, the US Marines functioned as a private army for American fruit companies, banks, and mining corporations across Central America and the Caribbean. Marines invaded and occupied Honduras (7 times), Nicaragua, Haiti, the Dominican Republic, Cuba, Panama, and more — always to protect US business interests, always under the pretense of "stability."',
    details: [
      'Marine General Smedley Butler — the most decorated Marine in history at the time — later wrote: "I was a racketeer, a gangster for capitalism... I helped make Mexico safe for American oil interests. I helped make Haiti and Cuba a decent place for the National City Bank boys to collect revenues."',
      'The US occupied Haiti from 1915 to 1934. Marines killed an estimated 15,000 Haitians. Forced labor (corvée) was reinstated — functionally re-enslaving Haitians.',
      'In Nicaragua, the US fought Augusto Sandino for six years (1926-1932). After withdrawal, the US-backed Somoza family ruled as dictators for 43 years — until the Sandinista revolution of 1979, which the US then tried to overthrow with the Contras.',
      'United Fruit Company (now Chiquita) had more political power in Central America than most governments. The company owned 3.5 million acres across 6 countries. The term "banana republic" literally describes this arrangement.',
      'US Marines were deployed to protect corporate interests: Standard Fruit, United Fruit, National City Bank, and mining companies.',
      'These interventions created the political instability that drives Central American migration today. The refugees at the border are, in a very real sense, blowback from a century of intervention.',
    ],
    whyForgotten: 'It reveals that US military force has been used to protect corporate profits — a truth that undermines the mythology of American exceptionalism.',
    longTermImpact: 'Created the dysfunctional political systems that plague Central America today. Current migration crisis directly traceable to Banana Wars interventions.',
    constitutionalIssues: 'Multiple undeclared wars. Marines used as private corporate army without congressional oversight.',
  },
  {
    name: 'The Laotian Secret War',
    period: '1964–1973',
    usDead: '~700 (mostly CIA operatives and Air America pilots)',
    totalDead: '200,000+ Laotians',
    cost2023: '$7.2 billion',
    summary: 'From 1964 to 1973, the United States conducted the most intensive bombing campaign in history against Laos — a country the US was not officially at war with. Over 580,000 bombing missions dropped 2.1 million tons of ordnance, making Laos the most bombed country per capita in human history. The campaign was entirely secret — hidden from Congress and the American public.',
    details: [
      'The US dropped an average of one planeload of bombs every 8 minutes, 24 hours a day, for 9 years straight.',
      '2.1 million tons of bombs — more than the US dropped on Germany and Japan in WWII combined (2.0 million tons).',
      'Up to 30% of the bombs didn\'t explode. 80 million unexploded cluster bombs remain in Laos today, killing an average of 50 people per year — mostly children picking up what look like tennis balls.',
      'The CIA recruited 30,000 Hmong fighters as a proxy army. After the war, the Hmong were abandoned. Those who survived faced persecution and genocide. 130,000+ became refugees.',
      'Air America — the CIA\'s private airline — flew bombing missions disguised as civilian flights. Many pilots were deniable contractors, not official military.',
      'The bombing was classified for years. When it was finally revealed in 1969, there was no public outcry — Americans had already moved on from Vietnam.',
      'Laos is still one of the poorest countries in Asia. The US did not provide significant bomb clearance funding until 2016 — 43 years after the bombing ended.',
      'Total cost: $7.2 billion in 2023 dollars — more expensive than many declared wars.',
    ],
    whyForgotten: 'It was secret by design. The CIA ran the war specifically to avoid congressional oversight and public scrutiny.',
    longTermImpact: 'Established CIA paramilitary operations as substitute for declared warfare. Template for later covert wars in Nicaragua, Afghanistan, Libya.',
    constitutionalIssues: 'Completely unconstitutional — no congressional knowledge or authorization for 9-year bombing campaign against sovereign nation.',
  },
  {
    name: 'Cambodia: The Secret Bombing',
    period: '1969–1973',
    usDead: '0 (bombing campaign)',
    totalDead: '150,000+ Cambodian civilians',
    cost2023: '$8.4 billion',
    summary: 'President Nixon and Henry Kissinger secretly bombed Cambodia for four years without congressional knowledge or authorization. Operation Menu and later Operation Freedom Deal dropped 539,129 tons of bombs on a neutral country — killing an estimated 150,000 civilians and destabilizing the country so severely that it enabled the Khmer Rouge to take power and carry out the Cambodian genocide that killed 1.5-2 million people.',
    details: [
      'Nixon ordered the bombing in secret and instructed the military to falsify records to hide the campaign from Congress. Pilots were ordered to report bombing targets in South Vietnam when they actually bombed Cambodia.',
      'Kissinger personally selected bombing targets over breakfast, choosing coordinates on maps while eating at the White House.',
      'The bombing killed 150,000+ civilians and displaced 2 million — roughly 25% of Cambodia\'s population became internal refugees.',
      'The destruction and chaos directly enabled the Khmer Rouge to recruit peasants and seize power in 1975, leading to a genocide that killed 25% of Cambodia\'s population (1.5-2 million people).',
      'Operation Menu (March 1969-May 1970): 3,875 sorties, 108,823 tons of bombs.',
      'Operation Freedom Deal (May 1970-August 1973): 16,527 sorties, 383,851 tons of bombs.',
      'Kissinger received the Nobel Peace Prize in 1973 — the same year the bombing ended. Committee member Lê Đức Thọ refused to accept, and another resigned in protest.',
      'Total cost: $8.4 billion in 2023 dollars.',
    ],
    whyForgotten: 'Nixon hid it. Kissinger denied it. By the time it was exposed, America was consumed by Watergate and Vietnam withdrawal.',
    longTermImpact: 'Directly enabled Cambodian genocide — one of the worst humanitarian disasters of the 20th century. Established precedent for secret presidential wars.',
    constitutionalIssues: 'Completely illegal — secret war against neutral country with falsified military records to deceive Congress.',
  },
]

const lesserForgottenWars = [
  {
    name: 'Somalia (1992-1994, 2007-present)',
    period: '1992–1994; 2007–present',
    casualties: '43 US (1993); 2,000+ Somalis (1993); thousands more since 2007',
    details: 'Black Hawk Down incident killed 18 Americans, 1,000-2,000 Somalis. US returned in 2007 with continuous drone strikes. 900 troops currently deployed.',
  },
  {
    name: 'Dominican Republic (1965)',
    period: 'April-September 1965',
    casualties: '47 US, 6,000+ Dominicans',
    details: '42,000 troops sent to prevent "second Cuba" — crushed popular uprising to restore democratically elected president.',
  },
  {
    name: 'Lebanon (1958, 1982-1984)',
    period: '1958: 3 months; 1982-1984: 18 months',
    casualties: '1958: 1 US; 1982-1984: 241 US (Beirut barracks bombing)',
    details: 'Eisenhower sent 14,000 Marines in 1958. Reagan deployment ended after Marine barracks bombing killed 241.',
  },
  {
    name: 'Grenada (1983)',
    period: 'October 25-December 15, 1983',
    casualties: '19 US, 45 Grenadian, 24 Cuban',
    details: 'Reagan invaded to overthrow Marxist government. 7,600 troops vs. 1,500 defenders. Called "liberation" despite UN condemnation.',
  },
  {
    name: 'Panama (1989)',
    period: 'December 20, 1989 - January 31, 1990',
    casualties: '23 US, 516+ Panamanians',
    details: 'Bush Sr. invaded to arrest Noriega (former CIA asset). 27,000 troops. Civilian neighborhoods bombed.',
  },
  {
    name: 'Bosnia/Herzegovina (1995-present)',
    period: '1995–present',
    casualties: 'Minimal US casualties, ongoing deployment',
    details: 'NATO intervention without UN authorization. 60,000 NATO troops deployed. 28 years later, troops still there.',
  },
  {
    name: 'Kosovo (1999)',
    period: '78 days of bombing',
    casualties: '2 US, 489 Yugoslav civilians',
    details: '38,000 sorties, 10,484 strike sorties. No UN authorization. Set precedent for "humanitarian intervention."',
  },
  {
    name: 'Yemen (2002-present, 2015-2022)',
    period: '2002–present',
    casualties: 'Ongoing drone campaign; Saudi war support killed 377,000+ Yemenis',
    details: 'Continuous drone strikes since 2002. Supported Saudi genocide that killed 377,000 Yemenis, mostly civilians.',
  },
]

const bombingComparisons = [
  { country: 'Laos', period: '1964-1973', tonnage: 2_100_000, population: 2_900_000, tons_per_capita: 0.724, note: 'Most bombed country per capita in history' },
  { country: 'Cambodia', period: '1969-1973', tonnage: 539_129, population: 7_100_000, tons_per_capita: 0.076, note: 'Secret bombing enabled Khmer Rouge' },
  { country: 'North Korea', period: '1950-1953', tonnage: 635_000, population: 9_600_000, tons_per_capita: 0.066, note: '20% of population killed' },
  { country: 'South Vietnam', period: '1965-1973', tonnage: 4_600_000, population: 17_000_000, tons_per_capita: 0.271, note: 'Included Agent Orange chemical warfare' },
  { country: 'Germany (WWII)', period: '1942-1945', tonnage: 1_350_000, population: 69_300_000, tons_per_capita: 0.019, note: 'Total war against Nazi regime' },
  { country: 'Japan (WWII)', period: '1944-1945', tonnage: 656_400, population: 72_000_000, tons_per_capita: 0.009, note: 'Included two atomic bombs' },
  { country: 'Iraq', period: '1991, 2003-2011', tonnage: 29_000, population: 22_000_000, tons_per_capita: 0.001, note: 'Precision weapons era' },
  { country: 'Afghanistan', period: '2001-2021', tonnage: 13_800, population: 32_000_000, tons_per_capita: 0.0004, note: 'Drone warfare era' },
]

const casualtyComparisons = [
  { war: 'Civil War', years: '1861-1865', us_deaths: 620_000, enemy_deaths: 'N/A (Americans)', civilian_deaths: 50_000, ratio: 'US vs US' },
  { war: 'Korean War', years: '1950-1953', us_deaths: 36_574, enemy_deaths: 600_000, civilian_deaths: 2_500_000, ratio: '68:1 civilian:US' },
  { war: 'Vietnam War', years: '1965-1975', us_deaths: 58_220, enemy_deaths: 1_100_000, civilian_deaths: 2_000_000, ratio: '34:1 civilian:US' },
  { war: 'Philippine War', years: '1899-1913', us_deaths: 4_234, enemy_deaths: 20_000, civilian_deaths: 250_000, ratio: '59:1 civilian:US' },
  { war: 'Iraq War', years: '2003-2011', us_deaths: 4_431, enemy_deaths: 30_000, civilian_deaths: 200_000, ratio: '45:1 civilian:US' },
  { war: 'Afghanistan War', years: '2001-2021', us_deaths: 2_448, enemy_deaths: 51_000, civilian_deaths: 176_000, ratio: '72:1 civilian:US' },
  { war: 'Laotian Secret War', years: '1964-1973', us_deaths: 700, enemy_deaths: 30_000, civilian_deaths: 200_000, ratio: '286:1 civilian:US' },
  { war: 'Cambodia Bombing', years: '1969-1973', us_deaths: 0, enemy_deaths: 'Unknown', civilian_deaths: 150_000, ratio: '∞ civilian:US' },
]

const mediaMemoryAnalysis = [
  { war: 'World War II', movies: 100, tv_shows: 50, books: 1000, memorial: 'Multiple national', awareness: '95%', narrative: 'The Good War - clear victory over evil' },
  { war: 'Vietnam War', movies: 80, tv_shows: 25, books: 800, memorial: 'Vietnam Memorial', awareness: '85%', narrative: 'Tragic mistake - divide America' },
  { war: 'Korean War', movies: 3, tv_shows: 1, books: 200, memorial: 'Korean Memorial', awareness: '45%', narrative: 'The Forgotten War' },
  { war: 'Iraq War', movies: 25, tv_shows: 8, books: 300, memorial: 'None', awareness: '75%', narrative: 'Controversial - WMD lies' },
  { war: 'Afghanistan War', movies: 10, tv_shows: 5, books: 150, memorial: 'None', awareness: '65%', narrative: 'Longest war - unclear victory' },
  { war: 'Philippine War', movies: 0, tv_shows: 0, books: 20, memorial: 'None', awareness: '5%', narrative: 'Not taught in schools' },
  { war: 'Laotian Secret War', movies: 0, tv_shows: 0, books: 8, memorial: 'None', awareness: '2%', narrative: 'Classified for decades' },
  { war: 'Cambodia Bombing', movies: 1, tv_shows: 0, books: 12, memorial: 'None', awareness: '3%', narrative: 'Hidden by Nixon/Kissinger' },
]

const constitutionalErosion = [
  {
    era: 'Founding Era (1775-1815)',
    wars: 'Revolutionary War, War of 1812',
    constitutional_adherence: 'High - Congress declared wars',
    precedents: 'Constitutional war powers respected',
    violations: 'Minimal - emergency powers temporary'
  },
  {
    era: 'Expansion Era (1846-1898)',
    wars: 'Mexican War, Civil War, Spanish-American War',
    constitutional_adherence: 'Medium - some congressional bypassing',
    precedents: 'Presidential first-use of force',
    violations: 'Mexican War started without declaration'
  },
  {
    era: 'Imperial Era (1898-1941)',
    wars: 'Philippine War, Banana Wars, various interventions',
    constitutional_adherence: 'Low - presidents acted unilaterally',
    precedents: 'Military as corporate enforcement',
    violations: 'Multiple undeclared wars in Caribbean/Central America'
  },
  {
    era: 'Cold War Era (1945-1991)',
    wars: 'Korea, Vietnam, various proxy wars',
    constitutional_adherence: 'Very Low - Congress bypassed routinely',
    precedents: 'UN/NATO authority over Congress',
    violations: 'Korea, Vietnam never declared; secret wars common'
  },
  {
    era: 'War on Terror Era (2001-present)',
    wars: 'Afghanistan, Iraq, Libya, Syria, etc.',
    constitutional_adherence: 'Nearly Zero - AUMF as blank check',
    precedents: 'Perpetual war authorization',
    violations: 'Single 2001 resolution justifies wars in 19+ countries'
  }
]

export default function ForgottenWarsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Forgotten Wars' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Forgotten Wars
        </h1>
        <p className="text-xl text-stone-300 mb-4">The Conflicts Americans Don&apos;t Remember</p>
        <p className="text-stone-400 text-lg">
          The Korean War killed 36,574 Americans — more than Iraq and Afghanistan combined. The 
          Philippine-American War killed up to one million Filipinos. The US dropped more bombs on 
          Laos than on Germany and Japan in WWII combined. Most Americans have never heard of any 
          of this. These aren&apos;t ancient history — they shaped the world we live in. But they 
          don&apos;t fit the narrative, so they disappeared.
        </p>
      </div>

      <ShareButtons title="Forgotten Wars: The Conflicts Americans Don't Remember" />

      {/* Summary Stats */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">The Scale of What We&apos;ve Forgotten</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">2.1M</span>
            <p className="text-stone-400 text-sm">Tons of bombs dropped on Laos</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">36,574</span>
            <p className="text-stone-400 text-sm">Americans killed in Korea</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">1M+</span>
            <p className="text-stone-400 text-sm">Filipino civilians killed</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">3M+</span>
            <p className="text-stone-400 text-sm">Total civilian deaths in forgotten wars</p>
          </div>
        </div>
        <p className="text-stone-500 text-sm mt-4 italic">
          These numbers represent massive human tragedies that have largely vanished from American collective memory.
        </p>
      </div>

      <blockquote className="border-l-4 border-red-700 pl-6 my-8 text-xl text-stone-400 italic">
        &ldquo;A nation that does not remember its past is condemned to repeat it. A nation that systematically forgets its wars is condemned to perpetual war.&rdquo;
        <span className="block text-sm text-stone-500 mt-2 not-italic">— Historian William Appleman Williams</span>
      </blockquote>

      <DeathComparisonChart />

      {/* Major Forgotten Wars - Enhanced */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-8">The Major Forgotten Wars</h2>
        {majorForgottenWars.map((war, i) => (
          <div key={war.name} className="mb-14">
            <div className="bg-stone-800 rounded-lg p-6 mb-6">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-2">{war.name}</h3>
              <p className="text-stone-400 text-sm mb-4">{war.period}</p>

              <div className="grid md:grid-cols-4 gap-3 mb-4">
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-3">
                  <p className="text-red-400 font-bold text-xs uppercase">US Dead</p>
                  <p className="text-white text-lg font-bold">{war.usDead}</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-3">
                  <p className="text-red-400 font-bold text-xs uppercase">Total Dead</p>
                  <p className="text-white text-lg font-bold">{war.totalDead}</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-3">
                  <p className="text-red-400 font-bold text-xs uppercase">Cost (2023$)</p>
                  <p className="text-white text-lg font-bold">{war.cost2023}</p>
                </div>
                <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-lg p-3">
                  <p className="text-yellow-400 font-bold text-xs uppercase">Awareness</p>
                  <p className="text-white text-lg font-bold">{war.name.includes('Korean') ? '45%' : war.name.includes('Philippine') ? '5%' : '2%'}</p>
                </div>
              </div>

              <p className="text-stone-300 mb-4 leading-relaxed">{war.summary}</p>

              <div className="bg-stone-700 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-white mb-3">Key Details</h4>
                <ul className="space-y-2">
                  {war.details.map((d, j) => (
                    <li key={j} className="text-stone-300 text-sm flex gap-2">
                      <span className="text-red-400 shrink-0">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-950/30 border border-amber-900/50 rounded-lg p-4">
                  <p className="text-amber-400 font-bold text-sm mb-2">Why It&apos;s Forgotten</p>
                  <p className="text-stone-300 text-sm">{war.whyForgotten}</p>
                </div>
                <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4">
                  <p className="text-blue-400 font-bold text-sm mb-2">Constitutional Issues</p>
                  <p className="text-stone-300 text-sm">{war.constitutionalIssues}</p>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-4">
                <p className="text-red-400 font-bold text-sm mb-2">Long-term Impact</p>
                <p className="text-stone-300 text-sm">{war.longTermImpact}</p>
              </div>
            </div>

            {i < majorForgottenWars.length - 1 && <hr className="my-10 border-stone-700" />}
          </div>
        ))}
      </section>

      {/* Lesser Known Wars */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-6">The Lesser-Known Interventions</h2>
        <p className="text-stone-400 mb-6">Beyond the major forgotten wars are dozens of smaller interventions that most Americans have never heard of:</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {lesserForgottenWars.map((war, i) => (
            <div key={i} className="bg-stone-700 rounded-lg p-4">
              <h4 className="text-white font-bold mb-1">{war.name}</h4>
              <p className="text-stone-400 text-sm mb-2">{war.period}</p>
              <p className="text-red-400 text-sm font-semibold mb-2">Casualties: {war.casualties}</p>
              <p className="text-stone-300 text-sm">{war.details}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-lg p-4 mt-6">
          <p className="text-yellow-400 font-bold mb-2">The Pattern</p>
          <p className="text-stone-300 text-sm">
            Each follows the same template: US intervention justified by protecting Americans, fighting communism, 
            or restoring order. Local populations pay the price. Americans forget within a generation. The cycle repeats.
          </p>
        </div>
      </div>

      {/* Bombing Analysis */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Bombs per Person: The Scale of Forgotten Destruction</h2>
        <p className="text-stone-400 mb-6">
          Tonnage of bombs dropped per capita reveals the intensity of America&apos;s forgotten bombing campaigns:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-600">
                <th className="text-left py-2 pr-4 text-stone-400">Country</th>
                <th className="text-center py-2 pr-4 text-stone-400">Period</th>
                <th className="text-right py-2 pr-4 text-stone-400">Total Tonnage</th>
                <th className="text-right py-2 pr-4 text-stone-400">Population</th>
                <th className="text-right py-2 pr-4 text-stone-400">Tons per Person</th>
                <th className="text-left py-2 text-stone-400">Note</th>
              </tr>
            </thead>
            <tbody>
              {bombingComparisons.map((bombing, i) => (
                <tr key={i} className="border-b border-stone-700">
                  <td className="py-2 pr-4 text-white font-medium">{bombing.country}</td>
                  <td className="py-2 pr-4 text-center text-stone-300">{bombing.period}</td>
                  <td className="py-2 pr-4 text-right text-red-400 font-mono">{bombing.tonnage.toLocaleString()}</td>
                  <td className="py-2 pr-4 text-right text-stone-300 font-mono">{bombing.population.toLocaleString()}</td>
                  <td className="py-2 pr-4 text-right text-white font-bold">{bombing.tons_per_capita.toFixed(3)}</td>
                  <td className="py-2 text-stone-400 text-xs">{bombing.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h4 className="text-red-400 font-bold mb-2">The Laotian Anomaly</h4>
            <p className="text-stone-300 text-sm">
              Laos received 0.724 tons of bombs per person — nearly 1,500 pounds for every man, woman, and child. 
              For comparison, Germany in WWII received 0.019 tons per person. Laos was bombed 38 times more intensively 
              than Nazi Germany.
            </p>
          </div>
          <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-lg p-4">
            <h4 className="text-yellow-400 font-bold mb-2">The Precision Illusion</h4>
            <p className="text-stone-300 text-sm">
              Modern "precision" weapons create less tonnage but more lethality. Iraq and Afghanistan show lower tons per capita 
              but still devastating results. The shift from carpet bombing to targeted killing doesn&apos;t reduce suffering — 
              it just makes it more precise.
            </p>
          </div>
        </div>
      </div>

      <BombingChart />

      {/* Casualty Analysis */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Civilian Cost: Hidden Death Tolls</h2>
        <p className="text-stone-400 mb-6">
          American military casualties get counted and memorialized. Civilian casualties in forgotten wars get estimated and ignored:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-600">
                <th className="text-left py-2 pr-4 text-stone-400">War</th>
                <th className="text-center py-2 pr-3 text-stone-400">Duration</th>
                <th className="text-right py-2 pr-3 text-stone-400">US Deaths</th>
                <th className="text-right py-2 pr-3 text-stone-400">Enemy Deaths</th>
                <th className="text-right py-2 pr-3 text-stone-400">Civilian Deaths</th>
                <th className="text-center py-2 text-stone-400">Civilian:US Ratio</th>
              </tr>
            </thead>
            <tbody>
              {casualtyComparisons.map((casualty, i) => (
                <tr key={i} className="border-b border-stone-700">
                  <td className="py-2 pr-4 text-white font-medium">{casualty.war}</td>
                  <td className="py-2 pr-3 text-center text-stone-300">{casualty.years}</td>
                  <td className="py-2 pr-3 text-right text-red-400 font-mono">{casualty.us_deaths.toLocaleString()}</td>
                  <td className="py-2 pr-3 text-right text-stone-300 font-mono">{casualty.enemy_deaths.toLocaleString()}</td>
                  <td className="py-2 pr-3 text-right text-white font-bold">{casualty.civilian_deaths.toLocaleString()}</td>
                  <td className="py-2 text-center text-yellow-400 font-bold text-xs">{casualty.ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-4">
          <h4 className="text-red-400 font-bold mb-2">The Forgotten Millions</h4>
          <p className="text-stone-300 text-sm mb-2">
            In the major forgotten wars alone, over 3 million civilians died — more than ten times American military deaths. 
            These are conservative estimates; the true toll is likely much higher.
          </p>
          <ul className="text-stone-300 text-sm space-y-1 list-disc list-inside">
            <li><strong>Korean War:</strong> 2.5M civilians (68:1 ratio)</li>
            <li><strong>Philippine War:</strong> 250K+ civilians (59:1 ratio)</li>
            <li><strong>Vietnam War:</strong> 2M civilians (34:1 ratio)</li>
            <li><strong>Laotian Secret War:</strong> 200K civilians (286:1 ratio)</li>
            <li><strong>Cambodia Bombing:</strong> 150K civilians (infinite ratio — 0 US deaths)</li>
          </ul>
        </div>
      </div>

      {/* Media Memory Analysis */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Memory Hole: Media Coverage Analysis</h2>
        <p className="text-stone-400 mb-6">
          Wars that support American exceptionalism get movies, books, and memorials. Wars that contradict it disappear:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-600">
                <th className="text-left py-2 pr-4 text-stone-400">War</th>
                <th className="text-center py-2 pr-3 text-stone-400">Movies</th>
                <th className="text-center py-2 pr-3 text-stone-400">TV Shows</th>
                <th className="text-center py-2 pr-3 text-stone-400">Books</th>
                <th className="text-center py-2 pr-3 text-stone-400">Memorial</th>
                <th className="text-center py-2 pr-3 text-stone-400">Awareness</th>
                <th className="text-left py-2 text-stone-400">Cultural Narrative</th>
              </tr>
            </thead>
            <tbody>
              {mediaMemoryAnalysis.map((media, i) => (
                <tr key={i} className="border-b border-stone-700">
                  <td className="py-2 pr-4 text-white font-medium">{media.war}</td>
                  <td className="py-2 pr-3 text-center text-stone-300">{media.movies}</td>
                  <td className="py-2 pr-3 text-center text-stone-300">{media.tv_shows}</td>
                  <td className="py-2 pr-3 text-center text-stone-300">{media.books}</td>
                  <td className="py-2 pr-3 text-center text-stone-300 text-xs">{media.memorial}</td>
                  <td className="py-2 pr-3 text-center text-white font-bold">{media.awareness}</td>
                  <td className="py-2 text-stone-400 text-xs">{media.narrative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-lg p-4 mt-4">
          <h4 className="text-yellow-400 font-bold mb-2">The Pattern is Clear</h4>
          <p className="text-stone-300 text-sm">
            Wars with positive narratives (WWII: &ldquo;Good War&rdquo;) get extensive cultural reinforcement. 
            Wars with negative narratives (Vietnam: &ldquo;Noble cause corrupted&rdquo;) get some coverage but focus on American suffering. 
            Wars that undermine American exceptionalism (Philippines, Laos, Cambodia) simply disappear from memory.
          </p>
        </div>
      </div>

      <AwarenessChart />

      {/* Constitutional Erosion Timeline */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">How Forgotten Wars Destroyed the Constitution</h2>
        <p className="text-stone-300 mb-6">
          Each forgotten war established precedents that eroded constitutional war powers. The pattern accelerated until Congress became irrelevant:
        </p>
        
        <div className="space-y-4">
          {constitutionalErosion.map((era, i) => (
            <div key={i} className="bg-stone-800 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-bold">{era.era}</h4>
                <span className={`text-xs px-2 py-1 rounded ${
                  era.constitutional_adherence.includes('High') ? 'bg-green-900/50 text-green-400' :
                  era.constitutional_adherence.includes('Medium') ? 'bg-yellow-900/50 text-yellow-400' :
                  era.constitutional_adherence.includes('Low') ? 'bg-orange-900/50 text-orange-400' :
                  'bg-red-900/50 text-red-400'
                }`}>
                  {era.constitutional_adherence}
                </span>
              </div>
              <p className="text-stone-400 text-sm mb-1"><strong>Wars:</strong> {era.wars}</p>
              <p className="text-stone-400 text-sm mb-1"><strong>Precedents set:</strong> {era.precedents}</p>
              <p className="text-red-400 text-sm"><strong>Major violations:</strong> {era.violations}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-6">
          <h4 className="text-red-400 font-bold mb-2">The Ratchet Effect</h4>
          <p className="text-stone-300 text-sm">
            Each war expanded presidential power beyond previous limits. Powers granted &ldquo;temporarily&rdquo; became permanent. 
            The Constitution&apos;s requirement that Congress declare war has been effectively nullified. Since Korea (1950), 
            presidents have initiated major military operations without congressional declarations over 200 times. The forgotten 
            wars weren&apos;t just forgotten by the public — they were forgotten by the Constitution.
          </p>
        </div>
      </div>

      {/* Enhanced Why We Forget */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-6">Why America Forgets</h2>
        <div className="space-y-8">
          
          <div className="bg-stone-800 rounded-lg p-6">
            <h3 className="font-bold text-xl text-white mb-3">The Textbook Problem</h3>
            <p className="text-stone-300 mb-3">
              American history textbooks allocate pages based on narrative importance, not historical impact. The result is massive distortion:
            </p>
            <div className="bg-stone-700 rounded p-4">
              <ul className="text-stone-300 text-sm space-y-1">
                <li>• <strong>WWII:</strong> 50+ pages, portrayed as &ldquo;Good War&rdquo;</li>
                <li>• <strong>Korean War:</strong> 2-3 pages, mentioned as Cold War footnote</li>
                <li>• <strong>Philippine War:</strong> 1 paragraph, if mentioned at all</li>
                <li>• <strong>Banana Wars:</strong> Completely absent from most texts</li>
                <li>• <strong>Secret bombing campaigns:</strong> Not taught in any K-12 curriculum</li>
              </ul>
            </div>
            <p className="text-stone-400 text-sm mt-3">
              You cannot remember what you were never taught. Most Americans graduate high school having never heard 
              of wars that killed millions and shaped current geopolitics.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-6">
            <h3 className="font-bold text-xl text-white mb-3">The Narrative Problem</h3>
            <p className="text-stone-300 mb-3">
              America&apos;s national mythology requires liberation narratives — we freed Europe, defeated fascism, spread democracy. 
              Wars where the US was aggressor, colonizer, or democracy-destroyer don&apos;t fit the story:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-950/30 border border-green-900/50 rounded p-4">
                <h4 className="text-green-400 font-semibold mb-2">Remembered Wars</h4>
                <ul className="text-stone-300 text-sm space-y-1">
                  <li>• Support American exceptionalism</li>
                  <li>• Clear good vs evil narrative</li>
                  <li>• Americans as liberators</li>
                  <li>• Victory validates intervention</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded p-4">
                <h4 className="text-red-400 font-semibold mb-2">Forgotten Wars</h4>
                <ul className="text-stone-300 text-sm space-y-1">
                  <li>• Undermine exceptionalism myths</li>
                  <li>• Morally ambiguous or negative</li>
                  <li>• Americans as aggressors</li>
                  <li>• Failure exposes intervention costs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-stone-800 rounded-lg p-6">
            <h3 className="font-bold text-xl text-white mb-3">The Scale Problem</h3>
            <p className="text-stone-300 mb-3">
              The Congressional Research Service counts 469 overseas military deployments since 1798. That&apos;s one every six months 
              for 225 years. When military force is routine, individual wars become forgettable:
            </p>
            <div className="bg-stone-700 rounded p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-red-400">469</p>
                  <p className="text-stone-400 text-xs">Total deployments</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-400">2.1</p>
                  <p className="text-stone-400 text-xs">Per year average</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-400">91%</p>
                  <p className="text-stone-400 text-xs">Years at war</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-400">23</p>
                  <p className="text-stone-400 text-xs">Years of peace</p>
                </div>
              </div>
            </div>
            <p className="text-stone-400 text-sm mt-3">
              Perpetual war makes each individual war unmemorable. Americans have intervention fatigue even before learning about most interventions.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-6">
            <h3 className="font-bold text-xl text-white mb-3">The Racism Problem</h3>
            <p className="text-stone-300 mb-3">
              The forgotten wars overwhelmingly targeted non-white populations. American culture systematically devalues non-white lives:
            </p>
            <div className="bg-slate-800 border border-slate-700 rounded p-4">
              <h4 className="text-red-400 font-semibold mb-2">The Death Value Hierarchy</h4>
              <ul className="text-stone-300 text-sm space-y-1">
                <li>• <strong>3,000 Americans die on 9/11:</strong> Global war on terror, $8T spent, memorialized annually</li>
                <li>• <strong>150,000 Cambodians die from bombing:</strong> Barely mentioned in history books</li>
                <li>• <strong>250,000 Filipinos die in colonial war:</strong> Not taught in American schools</li>
                <li>• <strong>2.5M Koreans die in war:</strong> Called &ldquo;police action,&rdquo; quickly forgotten</li>
                <li>• <strong>200,000 Laotians die in secret war:</strong> Classified for decades, still unknown to most Americans</li>
              </ul>
            </div>
            <p className="text-stone-400 text-sm mt-3">
              When 150,000 Cambodians die from American bombs, it doesn&apos;t register emotionally the way American casualties do. 
              This isn&apos;t conscious racism — it&apos;s systematic dehumanization through selective memory.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-6">
            <h3 className="font-bold text-xl text-white mb-3">The Classification Problem</h3>
            <p className="text-stone-300 mb-3">
              Many forgotten wars were secret by design, hidden from Congress and public for decades:
            </p>
            <div className="space-y-3">
              <div className="bg-stone-700 rounded p-3">
                <p className="text-white font-semibold text-sm">Cambodia (1969-1973)</p>
                <p className="text-stone-400 text-sm">Bombing hidden from Congress for 4 years. Records falsified. Not revealed until 1973.</p>
              </div>
              <div className="bg-stone-700 rounded p-3">
                <p className="text-white font-semibold text-sm">Laos (1964-1973)</p>
                <p className="text-stone-400 text-sm">Entire war classified. CIA operation with deniable contractors. Public didn&apos;t know for years.</p>
              </div>
              <div className="bg-stone-700 rounded p-3">
                <p className="text-white font-semibold text-sm">Various covert operations</p>
                <p className="text-stone-400 text-sm">Iran (1953), Guatemala (1954), Congo (1961), Chile (1973) — decades before declassification.</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm mt-3">
              You can&apos;t remember what was deliberately hidden. The national security state creates institutional amnesia.
            </p>
          </div>

          <div className="bg-stone-800 rounded-lg p-6">
            <h3 className="font-bold text-xl text-white mb-3">The Economic Incentive Problem</h3>
            <p className="text-stone-300 mb-3">
              Powerful interests benefit from forgetting America&apos;s failed interventions. Memory would threaten profitable patterns:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-950/30 border border-green-900/50 rounded p-3">
                <h4 className="text-green-400 font-semibold text-sm mb-1">Defense Contractors</h4>
                <p className="text-stone-300 text-xs">$400B annual revenue depends on threats requiring military solutions</p>
              </div>
              <div className="bg-blue-950/30 border border-blue-900/50 rounded p-3">
                <h4 className="text-blue-400 font-semibold text-sm mb-1">Think Tanks</h4>
                <p className="text-stone-300 text-xs">Funded by defense industry to provide intellectual justification for intervention</p>
              </div>
              <div className="bg-purple-950/30 border border-purple-900/50 rounded p-3">
                <h4 className="text-purple-400 font-semibold text-sm mb-1">Media</h4>
                <p className="text-stone-300 text-xs">Defense advertising revenue incentivizes pro-military coverage</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm mt-3">
              Remembering failure threatens the business model of perpetual intervention. Forgetting ensures the cycle continues.
            </p>
          </div>
        </div>
      </section>

      {/* The Cost of Forgetting */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Cost of Forgetting</h2>
        <p className="text-stone-300 mb-4">
          Forgetting these wars isn&apos;t harmless nostalgia — it enables repetition. Each forgotten war creates precedents for the next:
        </p>
        
        <div className="space-y-4">
          <div className="bg-stone-800 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-2">Constitutional Precedents</h4>
            <p className="text-stone-300 text-sm">
              Korea established presidential war without congressional declaration. Vietnam expanded it. The secret wars 
              normalized completely hidden operations. Today&apos;s presidents cite these precedents to wage war anywhere, 
              anytime, without oversight.
            </p>
          </div>
          
          <div className="bg-stone-800 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-2">Tactical Precedents</h4>
            <p className="text-stone-300 text-sm">
              Waterboarding in the Philippines (1902) returned in Iraq (2003). Concentration camps in the Philippines became 
              &ldquo;strategic hamlets&rdquo; in Vietnam. Civilian targeting in Korea normalized &ldquo;body counts&rdquo; in Vietnam. 
              Each forgotten atrocity enables the next.
            </p>
          </div>
          
          <div className="bg-stone-800 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-2">Strategic Precedents</h4>
            <p className="text-stone-300 text-sm">
              Preventive war, regime change, nation-building, humanitarian intervention — all justified by selective 
              memory of past successes while forgetting massive failures. We remember D-Day, forget the Philippines. 
              We remember the Berlin Airlift, forget Cambodia.
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-lg p-4 mt-4">
          <p className="text-yellow-400 font-bold mb-2">The Cycle Continues</p>
          <p className="text-stone-300 text-sm">
            Iran 2026 follows the exact same pattern as every forgotten war: presidential initiation, congressional bypass, 
            civilian casualties, eventual failure, and institutional amnesia. In 20 years, most Americans won&apos;t remember 
            Operation Epic Fury. The next war will be justified by forgetting this one.
          </p>
        </div>
      </div>

      {/* Quote - Smedley Butler */}
      <blockquote className="border-l-4 border-red-800 pl-6 my-8 italic text-stone-400 text-lg">
        &ldquo;I spent 33 years in active military service... And during that period I spent most of my time 
        as a high class muscle man for Big Business, for Wall Street and the bankers. In short, I was a 
        racketeer, a gangster for capitalism.&rdquo;
        <span className="block text-sm not-italic text-stone-500 mt-2">
          — Major General Smedley Butler, USMC, two-time Medal of Honor recipient, 1935
        </span>
      </blockquote>

      {/* Breaking the Cycle */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Breaking the Cycle of Forgetting</h2>
        <p className="text-stone-300 mb-4">
          Remembering forgotten wars isn&apos;t about guilt or shame — it&apos;s about learning. A republic that doesn&apos;t learn from its mistakes is condemned to repeat them:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-green-400 font-semibold mb-3">What We Can Do</h4>
            <ul className="text-stone-300 text-sm space-y-2">
              <li>• <strong>Teach the full history</strong> — Including wars that contradict national mythology</li>
              <li>• <strong>Count all casualties</strong> — Foreign civilian deaths matter as much as American military deaths</li>
              <li>• <strong>Demand constitutional process</strong> — Congress must declare war, not presidents</li>
              <li>• <strong>Question intervention narratives</strong> — Ask who benefits from military action</li>
              <li>• <strong>Remember the costs</strong> — Financial, human, constitutional, and moral</li>
            </ul>
          </div>
          <div>
            <h4 className="text-red-400 font-semibold mb-3">What We Must Avoid</h4>
            <ul className="text-stone-300 text-sm space-y-2">
              <li>• <strong>Selective memory</strong> — Remembering victories, forgetting failures</li>
              <li>• <strong>Exceptional thinking</strong> — &ldquo;This time is different&rdquo; justifications</li>
              <li>• <strong>Classified solutions</strong> — Secret wars avoid democratic oversight</li>
              <li>• <strong>Corporate influence</strong> — Defense profits shouldn&apos;t drive policy</li>
              <li>• <strong>Institutional amnesia</strong> — Each generation learning the same lessons</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mt-4">
          <p className="text-blue-400 font-bold mb-2">The Choice is Ours</p>
          <p className="text-stone-300 text-sm">
            We can continue the cycle of intervention, failure, forgetting, and repetition. Or we can break it by remembering 
            the full cost of America&apos;s forgotten wars. The choice is ours — but only if we remember we have one.
          </p>
        </div>
      </div>

      {/* Enhanced Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Sources & Further Reading</h2>
        <div className="bg-stone-800 rounded-lg p-6 text-sm text-stone-300 space-y-3">
          <div>
            <p className="text-white font-semibold mb-1">Philippine-American War</p>
            <p>• Silbey, David. <em>A War of Frontier and Empire: The Philippine-American War, 1899-1902</em></p>
            <p>• Miller, Stuart Creighton. <em>Benevolent Assimilation: The American Conquest of the Philippines, 1899-1903</em></p>
            <p>• Karnow, Stanley. <em>In Our Image: America&apos;s Empire in the Philippines</em></p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Korean War</p>
            <p>• Cumings, Bruce. <em>The Korean War: A History</em></p>
            <p>• Halberstam, David. <em>The Coldest Winter: America and the Korean War</em></p>
            <p>• Department of Defense casualty statistics</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Banana Wars</p>
            <p>• Butler, Smedley. <em>War Is a Racket</em> (1935)</p>
            <p>• Kinzer, Stephen. <em>Overthrow: America&apos;s Century of Regime Change</em></p>
            <p>• Langley, Lester. <em>The Banana Wars: United States Intervention in the Caribbean, 1898-1934</em></p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Laotian Secret War</p>
            <p>• Kurlantzick, Joshua. <em>A Great Place to Have a War: America in Laos and the Birth of a Military CIA</em></p>
            <p>• Castle, Timothy. <em>At War in the Shadow of Vietnam: U.S. Military Aid to the Royal Lao Government 1955-1975</em></p>
            <p>• UXO Lao and COPE (Cooperative Orthotic and Prosthetic Enterprise) data on unexploded ordnance</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Cambodia Secret Bombing</p>
            <p>• Shawcross, William. <em>Sideshow: Kissinger, Nixon, and the Destruction of Cambodia</em></p>
            <p>• Owen, Taylor & Kiernan, Ben. &ldquo;Bombs over Cambodia&rdquo; (Yale Cambodian Genocide Project)</p>
            <p>• Kissinger, Henry. <em>White House Years</em> (for administration perspective)</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Somalia</p>
            <p>• Bowden, Mark. <em>Black Hawk Down: A Story of Modern War</em></p>
            <p>• AFRICOM public data on Somalia operations 2007-present</p>
            <p>• Bureau of Investigative Journalism drone strike database</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">General Sources</p>
            <p>• Congressional Research Service reports on military deployments</p>
            <p>• US Air Force Historical Studies on bombing tonnage</p>
            <p>• Watson Institute &ldquo;Costs of War&rdquo; project (Brown University)</p>
            <p>• National Security Archive (George Washington University)</p>
          </div>
        </div>
      </section>

      {/* Enhanced Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/the-469" className="bg-stone-800 rounded-lg border border-stone-700 p-5 hover:bg-stone-700 transition">
            <h3 className="font-bold text-white mb-1">469 Military Interventions</h3>
            <p className="text-stone-400 text-sm">The complete list of US armed forces deployed abroad since 1798 — most forgotten within a generation.</p>
          </Link>
          <Link href="/analysis/allies-and-enemies" className="bg-stone-800 rounded-lg border border-stone-700 p-5 hover:bg-stone-700 transition">
            <h3 className="font-bold text-white mb-1">Allies &amp; Enemies</h3>
            <p className="text-stone-400 text-sm">How America arms today&apos;s ally and fights tomorrow&apos;s enemy — the revolving door of interventions.</p>
          </Link>
          <Link href="/analysis/undeclared-wars" className="bg-stone-800 rounded-lg border border-stone-700 p-5 hover:bg-stone-700 transition">
            <h3 className="font-bold text-white mb-1">Undeclared Wars</h3>
            <p className="text-stone-400 text-sm">How forgotten wars destroyed congressional war powers and created the imperial presidency.</p>
          </Link>
          <Link href="/analysis/blowback" className="bg-stone-800 rounded-lg border border-stone-700 p-5 hover:bg-stone-700 transition">
            <h3 className="font-bold text-white mb-1">Blowback</h3>
            <p className="text-stone-400 text-sm">How forgotten interventions create tomorrow&apos;s enemies and justify new interventions.</p>
          </Link>
          <Link href="/analysis/americas-wars-by-the-numbers" className="bg-stone-800 rounded-lg border border-stone-700 p-5 hover:bg-stone-700 transition">
            <h3 className="font-bold text-white mb-1">America&apos;s Wars by the Numbers</h3>
            <p className="text-stone-400 text-sm">Statistical analysis of all US wars — including the ones we try to forget.</p>
          </Link>
          <Link href="/analysis/cost-of-secrecy" className="bg-stone-800 rounded-lg border border-stone-700 p-5 hover:bg-stone-700 transition">
            <h3 className="font-bold text-white mb-1">The Cost of Secrecy</h3>
            <p className="text-stone-400 text-sm">How classification and state secrets enable forgotten wars and prevent democratic oversight.</p>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}