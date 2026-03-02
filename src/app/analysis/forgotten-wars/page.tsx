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

const wars = [
  {
    name: 'The Philippine-American War',
    period: '1899–1902 (officially); guerrilla war continued to 1913',
    usDead: '4,200',
    totalDead: '200,000–1,000,000 Filipino civilians',
    summary: 'After "liberating" the Philippines from Spain in 1898, the US refused to grant independence. Filipino resistance fighters — who had been US allies against Spain — became the enemy overnight. What followed was a brutal three-year war featuring concentration camps (called "reconcentration zones"), waterboarding (called "the water cure"), scorched-earth campaigns, and explicit orders to kill everyone over the age of 10 on the island of Samar.',
    details: [
      'General Jacob Smith ordered his troops to turn Samar into "a howling wilderness" and kill anyone capable of bearing arms — defined as anyone over age 10.',
      'The US established concentration camps where Filipino civilians died of disease and starvation at catastrophic rates.',
      'Waterboarding was systematically used as an interrogation technique — the same technique the US would use again 100 years later in the War on Terror.',
      'Mark Twain was one of the few public critics, writing: "We have pacified some thousands of the islanders and buried them, destroyed their fields, burned their villages, and turned their widows and orphans out-of-doors."',
      'The war is almost entirely absent from American textbooks. Filipino schoolchildren learn about it; American schoolchildren do not.',
    ],
    whyForgotten: 'It contradicts the narrative of American liberation. The US was the colonizer, not the liberator.',
  },
  {
    name: 'The Korean War',
    period: '1950–1953',
    usDead: '36,574',
    totalDead: '2–3 million (majority civilians)',
    summary: 'Called "The Forgotten War" even while it was happening, Korea saw more US deaths in three years than Iraq and Afghanistan combined over twenty. The US dropped more bombs on Korea than it had in the entire Pacific Theater of WWII. Virtually every major city in North Korea was destroyed — General Curtis LeMay estimated the US killed 20% of North Korea\'s population. The war never officially ended; the US and North Korea are still technically at war.',
    details: [
      'The US dropped 635,000 tons of bombs on Korea — more than the entire Pacific Theater in WWII — plus 32,557 tons of napalm.',
      'General Curtis LeMay: "We burned down every town in North Korea... and some in South Korea, too."',
      'An estimated 20% of North Korea\'s population was killed — proportionally one of the most devastating campaigns in modern warfare.',
      'The war ended in a stalemate at roughly the same border where it started. 36,574 Americans died for a line on a map.',
      'There is no Korean War memorial moment in American culture. No movies. No TV shows. No cultural reckoning. Just a wall in DC that most people walk past.',
    ],
    whyForgotten: 'Sandwiched between "the Good War" (WWII) and the cultural earthquake of Vietnam, Korea had no narrative. It wasn\'t a victory, a defeat, or a protest movement. It was just carnage.',
  },
  {
    name: 'The Banana Wars',
    period: '1898–1934',
    usDead: '~300',
    totalDead: '50,000+ (mostly civilians in occupied nations)',
    summary: 'For three decades, the US Marines functioned as a private army for American fruit companies, banks, and mining corporations across Central America and the Caribbean. Marines invaded and occupied Honduras (7 times), Nicaragua, Haiti, the Dominican Republic, Cuba, Panama, and more — always to protect US business interests, always under the pretense of "stability."',
    details: [
      'Marine General Smedley Butler — the most decorated Marine in history at the time — later wrote: "I was a racketeer, a gangster for capitalism... I helped make Mexico safe for American oil interests. I helped make Haiti and Cuba a decent place for the National City Bank boys to collect revenues."',
      'The US occupied Haiti from 1915 to 1934. Marines killed an estimated 15,000 Haitians. Forced labor was reinstated — functionally re-enslaving Haitians.',
      'In Nicaragua, the US fought Augusto Sandino for six years. After withdrawal, the US-backed Somoza family ruled as dictators for 43 years — until the Sandinista revolution of 1979, which the US then tried to overthrow with the Contras.',
      'United Fruit Company (now Chiquita) had more political power in Central America than most governments. The term "banana republic" literally describes this arrangement.',
      'These interventions created the political instability that drives Central American migration today. The refugees at the border are, in a very real sense, blowback from a century of intervention.',
    ],
    whyForgotten: 'It reveals that US military force has been used to protect corporate profits — a truth that undermines the mythology of American exceptionalism.',
  },
  {
    name: 'The Laotian Secret War',
    period: '1964–1973',
    usDead: '~700 (mostly CIA operatives and Air America pilots)',
    totalDead: '200,000+ Laotians',
    summary: 'From 1964 to 1973, the United States conducted the most intensive bombing campaign in history against Laos — a country the US was not officially at war with. Over 580,000 bombing missions dropped 2.1 million tons of ordnance, making Laos the most bombed country per capita in human history. The campaign was entirely secret — hidden from Congress and the American public.',
    details: [
      'The US dropped an average of one planeload of bombs every 8 minutes, 24 hours a day, for 9 years.',
      '2.1 million tons of bombs — more than the US dropped on Germany and Japan in WWII combined.',
      'Up to 30% of the bombs didn\'t explode. 80 million unexploded cluster bombs remain in Laos today, killing an average of 50 people per year — mostly children.',
      'The CIA recruited 30,000 Hmong fighters as a proxy army. After the war, the Hmong were abandoned. Those who survived faced persecution and genocide.',
      'The bombing was classified for years. When it was finally revealed, there was no public outcry — Americans had already moved on from Vietnam.',
      'Laos is still one of the poorest countries in Asia. The US did not provide significant bomb clearance funding until 2016 — 43 years after the bombing ended.',
    ],
    whyForgotten: 'It was secret by design. The CIA ran the war specifically to avoid congressional oversight and public scrutiny.',
  },
  {
    name: 'Somalia',
    period: '1992–1994 (and 2007–present)',
    usDead: '43 (1993); ongoing drone strikes since 2007',
    totalDead: '2,000+ (1993); thousands more from ongoing operations',
    summary: 'The "Black Hawk Down" incident in Mogadishu on October 3, 1993, killed 18 Americans and an estimated 1,000-2,000 Somalis. The battle — a botched special operations raid — traumatized the US military establishment and influenced the decision not to intervene in the Rwandan genocide months later. Less remembered: the US returned to Somalia in 2007 and has been conducting drone strikes and special operations raids continuously since.',
    details: [
      'The 1993 battle killed 18 Americans — but an estimated 1,000-2,000 Somalis, including many civilians. The American deaths dominated coverage; Somali deaths were barely mentioned.',
      'The images of a dead American soldier being dragged through streets led to US withdrawal — and directly influenced the decision not to intervene in Rwanda, where 800,000 people were massacred.',
      'AFRICOM has conducted hundreds of airstrikes in Somalia since 2007. Under Trump, the rules of engagement were loosened dramatically, leading to a surge in civilian casualties.',
      'As of 2025, there are approximately 900 US troops in Somalia. The war has no end date, no clear objective, and receives almost zero media coverage.',
    ],
    whyForgotten: 'Americans remember "Black Hawk Down" as a movie. They don\'t know the US has been fighting in Somalia for 18 years since.',
  },
  {
    name: 'Cambodia: The Secret Bombing',
    period: '1969–1973',
    usDead: '0 (bombing campaign)',
    totalDead: '150,000+ Cambodian civilians',
    summary: 'President Nixon and Henry Kissinger secretly bombed Cambodia for four years without congressional knowledge or authorization. Operation Menu dropped 539,129 tons of bombs on a neutral country — killing an estimated 150,000 civilians and destabilizing the country so severely that it enabled the Khmer Rouge to take power and carry out the Cambodian genocide that killed 1.5-2 million people.',
    details: [
      'Nixon ordered the bombing in secret and instructed the military to falsify records to hide the campaign from Congress.',
      'Kissinger personally selected bombing targets over breakfast, choosing coordinates on maps while eating.',
      'The bombing killed 150,000+ civilians and displaced 2 million — roughly 25% of Cambodia\'s population.',
      'The destruction and chaos directly enabled the Khmer Rouge to recruit and seize power in 1975, leading to a genocide that killed 25% of Cambodia\'s population.',
      'Kissinger received the Nobel Peace Prize in 1973 — the same year the bombing ended. The committee member who resigned in protest called it "the most devalued peace prize in history."',
    ],
    whyForgotten: 'Nixon hid it. Kissinger denied it. By the time it was exposed, America was consumed by Watergate and Vietnam withdrawal.',
  },
  {
    name: 'The Dominican Republic',
    period: '1965',
    usDead: '47',
    totalDead: '6,000+ Dominicans',
    summary: 'In April 1965, President Johnson sent 42,000 troops to the Dominican Republic to prevent a "second Cuba" — crushing a popular uprising that sought to restore democratically elected President Juan Bosch, who had been overthrown by a US-backed military coup two years earlier. The US backed the coup, then invaded to prevent the restoration of democracy.',
    details: [
      'Juan Bosch was the first democratically elected president in Dominican history. He lasted 7 months before a US-backed coup removed him.',
      'When popular forces tried to restore Bosch, Johnson sent 42,000 Marines — claiming communist infiltration with almost no evidence.',
      'An estimated 6,000 Dominicans were killed. The US installed Joaquín Balaguer, who ruled as an authoritarian for 22 of the next 31 years.',
      'The invasion was a precursor to later interventions in Grenada, Panama, and Haiti — establishing the pattern of invading small nations to install friendly governments.',
    ],
    whyForgotten: 'It was a small country, a quick war, and Vietnam was consuming all attention.',
  },
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

      <DeathComparisonChart />

      {/* Wars */}
      <section className="my-12">
        {wars.map((war, i) => (
          <div key={war.name} className="mb-14">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-1">{war.name}</h2>
            <p className="text-stone-500 text-sm mb-4">{war.period}</p>

            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-4">
                <p className="text-red-400 font-bold text-sm">US Dead</p>
                <p className="text-white text-xl font-bold">{war.usDead}</p>
              </div>
              <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-4">
                <p className="text-red-400 font-bold text-sm">Total Dead</p>
                <p className="text-white text-xl font-bold">{war.totalDead}</p>
              </div>
            </div>

            <p className="text-stone-600 mb-4 leading-relaxed">{war.summary}</p>

            <div className="bg-stone-50 rounded-lg p-5 mb-4">
              <h3 className="font-bold mb-3">Key Details</h3>
              <ul className="space-y-2">
                {war.details.map((d, j) => (
                  <li key={j} className="text-stone-600 text-sm flex gap-2">
                    <span className="text-red-800 shrink-0">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-950/20 border border-amber-900/30 rounded-lg p-4">
              <p className="text-amber-400 font-bold text-sm mb-1">Why It&apos;s Forgotten</p>
              <p className="text-stone-600 text-sm">{war.whyForgotten}</p>
            </div>

            {i < wars.length - 1 && <hr className="my-10 border-stone-200" />}
          </div>
        ))}
      </section>

      <BombingChart />
      <AwarenessChart />

      {/* Why We Forget */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Why America Forgets</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl mb-2">The Textbook Problem</h3>
            <p className="text-stone-600">
              American history textbooks cover WWII in 50+ pages and the Korean War in 2-3. The Philippine-American 
              War gets a paragraph, if that. The Banana Wars, the Laotian Secret War, and the Cambodian bombing 
              are simply absent. You cannot remember what you were never taught.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">The Narrative Problem</h3>
            <p className="text-stone-600">
              America&apos;s national mythology is built on liberation — we freed Europe, we defeated fascism, we 
              spread democracy. Wars where the US was the aggressor, the colonizer, or the destroyer of democracy 
              don&apos;t fit this story. So they get edited out.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">The Scale Problem</h3>
            <p className="text-stone-600">
              There are so many interventions — 469 by one count — that no individual one seems remarkable. When 
              military force is used every few years, each instance blurs into the next. The sheer volume of 
              American military action makes each war individually forgettable.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">The Racism Problem</h3>
            <p className="text-stone-600">
              The forgotten wars overwhelmingly targeted non-white populations. Filipino, Korean, Laotian, 
              Cambodian, Haitian, Dominican, Somali — the victims of America&apos;s forgotten wars are 
              disproportionately people whose deaths American culture simply values less. When 150,000 
              Cambodians die, it doesn&apos;t register the way 3,000 Americans dying on 9/11 does.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <blockquote className="border-l-4 border-red-800 pl-6 my-8 italic text-stone-600 text-lg">
        &ldquo;I spent 33 years in active military service... And during that period I spent most of my time 
        as a high class muscle man for Big Business, for Wall Street and the bankers. In short, I was a 
        racketeer, a gangster for capitalism.&rdquo;
        <span className="block text-sm not-italic text-stone-500 mt-2">
          — Major General Smedley Butler, USMC, two-time Medal of Honor recipient, 1935
        </span>
      </blockquote>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <div className="bg-stone-50 rounded-lg p-6 text-sm text-stone-600 space-y-2">
          <p>• <strong>Philippine-American War:</strong> Silbey, David. <em>A War of Frontier and Empire</em>; Miller, Stuart Creighton. <em>Benevolent Assimilation</em></p>
          <p>• <strong>Korean War:</strong> Cumings, Bruce. <em>The Korean War: A History</em>; DoD casualty statistics</p>
          <p>• <strong>Banana Wars:</strong> Butler, Smedley. <em>War Is a Racket</em>; Kinzer, Stephen. <em>Overthrow</em></p>
          <p>• <strong>Laotian Secret War:</strong> Kurlantzick, Joshua. <em>A Great Place to Have a War</em>; UXO Lao / COPE data</p>
          <p>• <strong>Cambodia bombing:</strong> Shawcross, William. <em>Sideshow</em>; Owen & Kiernan (Yale Cambodian Genocide Project)</p>
          <p>• <strong>Somalia:</strong> Bowden, Mark. <em>Black Hawk Down</em>; AFRICOM data; Bureau of Investigative Journalism</p>
          <p>• <strong>Bombing tonnage:</strong> USAF Historical Studies; Air University Review</p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/the-469" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">469 Military Interventions</h3>
            <p className="text-stone-500 text-sm">The full list of US armed forces deployed abroad since 1798.</p>
          </Link>
          <Link href="/analysis/allies-and-enemies" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Allies &amp; Enemies</h3>
            <p className="text-stone-500 text-sm">How America arms today&apos;s ally and fights tomorrow&apos;s enemy.</p>
          </Link>
          <Link href="/analysis/human-cost" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">The Human Cost</h3>
            <p className="text-stone-500 text-sm">Beyond the statistics — the lives destroyed.</p>
          </Link>
          <Link href="/analysis/blowback" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Blowback</h3>
            <p className="text-stone-500 text-sm">How interventions create enemies.</p>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
