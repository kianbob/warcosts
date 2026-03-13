import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import RelatedArticles from '@/components/RelatedArticles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Many Died in the Vietnam War? 58,220 US + 3.1 Million Vietnamese | WarCosts',
  description: 'Vietnam War deaths: 58,220 Americans killed, 3.1+ million Vietnamese deaths. Complete breakdown of casualties, missing in action, and long-term impacts.',
  keywords: ['Vietnam War deaths', 'Vietnam War casualties', 'how many died Vietnam War', 'Vietnam War fatalities', 'Vietnam Wall names', 'Vietnamese casualties'],
  openGraph: {
    title: 'How Many Died in the Vietnam War? 58,220 US + 3.1 Million Vietnamese',
    description: 'The Vietnam War killed 58,220 Americans and an estimated 3.1+ million Vietnamese civilians and combatants.',
    url: 'https://warcosts.org/how-many-died-in-the-vietnam-war',
    type: 'article',
  },
}

/* ── Data ─────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'How many Americans died in the Vietnam War?',
    a: '58,220 American service members died in the Vietnam War between 1955-1975. This includes 47,434 deaths from hostile action and 10,786 non-hostile deaths. An additional 303,704 were wounded, and 1,584 remain missing in action (MIA).',
  },
  {
    q: 'How many Vietnamese died in the Vietnam War?',
    a: 'Estimates range from 1.5 to 3.8 million total Vietnamese deaths. The most commonly cited figure is 3.1 million, including 2+ million civilians. North Vietnamese estimates claim 1.1 million military deaths, while South Vietnamese forces lost approximately 200,000-300,000.',
  },
  {
    q: 'What was the deadliest year of the Vietnam War?',
    a: '1968 was the deadliest year for US forces with 16,899 American deaths, largely due to the Tet Offensive. The peak monthly death toll was May 1968 with 2,415 American casualties. For Vietnamese, the entire period 1965-1972 saw massive civilian casualties.',
  },
  {
    q: 'How many names are on the Vietnam Veterans Memorial Wall?',
    a: 'The Vietnam Veterans Memorial Wall in Washington DC lists 58,320 names. This includes the 58,220 confirmed deaths plus 100+ who died later from war-related causes. Names continue to be added as deaths are verified as service-connected.',
  },
  {
    q: 'How do Vietnam War deaths compare to other US wars?',
    a: 'Vietnam was the 4th deadliest US conflict: WWII (405,000 deaths), Civil War (365,000+ Union deaths), WWI (116,000), Vietnam (58,220), Korea (36,500), Iraq (4,400), Afghanistan (2,400).',
  },
  {
    q: 'How many Vietnam veterans have died since the war?',
    a: 'An estimated 150,000+ Vietnam veterans have died by suicide since returning home — nearly 3x the number killed in combat. Veterans continue dying from Agent Orange-related cancers, PTSD, and other service-connected conditions at high rates.',
  },
]

const casualties = {
  us: {
    totalDeaths: 58220,
    hostileDeaths: 47434,
    nonHostileDeaths: 10786,
    wounded: 303704,
    missing: 1584,
    captured: 725,
  },
  vietnamese: {
    totalEstimate: 3100000,
    civilianDeaths: 2000000,
    northVietnamese: 1100000,
    southVietnamese: 250000,
    vietCong: 200000,
  },
  other: {
    southKorean: 5099,
    australian: 521,
    thai: 351,
    newZealand: 37,
  }
}

const deadliestBattles = [
  { battle: 'Tet Offensive', year: '1968', duration: '30 days', usDeath: 2800, description: 'Coordinated NVA/VC attacks on 100+ cities' },
  { battle: 'Operation Junction City', year: '1967', duration: '72 days', usDeath: 2728, description: 'Largest airborne operation since WWII' },
  { battle: 'Battle of Khe Sanh', year: '1968', duration: '77 days', usDeath: 730, description: '77-day siege of Marine base' },
  { battle: 'Battle of Dak To', year: '1967', duration: '22 days', usDeath: 376, description: 'Hill fighting near Cambodian border' },
  { battle: 'Battle of Ia Drang', year: '1965', duration: '4 days', usDeath: 305, description: 'First major helicopter assault' },
]

const yearlyDeaths = [
  { year: 1959, deaths: 2, description: 'First US advisors killed' },
  { year: 1960, deaths: 5, description: 'Advisor mission expands' },
  { year: 1961, deaths: 16, description: 'Kennedy increases advisors' },
  { year: 1962, deaths: 53, description: 'First helicopter units arrive' },
  { year: 1963, deaths: 122, description: 'Diem assassination' },
  { year: 1964, deaths: 216, description: 'Gulf of Tonkin incident' },
  { year: 1965, deaths: 1928, description: 'Major combat units deployed' },
  { year: 1966, deaths: 6350, description: 'Troop buildup accelerates' },
  { year: 1967, deaths: 11363, description: 'Peak troop strength' },
  { year: 1968, deaths: 16899, description: 'Tet Offensive, bloodiest year' },
  { year: 1969, deaths: 11780, description: 'Nixon begins withdrawal' },
  { year: 1970, deaths: 6173, description: 'Cambodia invasion' },
  { year: 1971, deaths: 2414, description: 'Laos incursion' },
  { year: 1972, deaths: 759, description: 'Easter Offensive' },
  { year: 1973, deaths: 68, description: 'Paris Peace Accords' },
  { year: 1974, deaths: 1, description: 'Last US combat death' },
  { year: 1975, deaths: 62, description: 'Saigon evacuation' },
]

const relatedArticles = [
  { slug: 'vietnam-war-analysis', title: 'Why America Lost the Vietnam War', desc: 'Strategic failures and lessons never learned' },
  { slug: 'agent-orange', title: 'Agent Orange: America\'s Chemical War Crime', desc: 'The toxic legacy that continues killing' },
  { slug: 'vietnam-syndrome', title: 'Vietnam Syndrome and American Power', desc: 'How defeat changed US military doctrine' },
  { slug: 'my-lai-massacre', title: 'My Lai Massacre: When GIs Became War Criminals', desc: 'The atrocity that shocked America' },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function VietnamWarDeathsPage() {
  const conflicts = loadData('conflicts.json') as Array<{
    id: string
    name: string
    costInflationAdjusted: number
    usCasualties: { deaths: number; wounded: number }
    civilianDeaths: number | null
    startYear: number
    endYear: number
    troopsDeployed: number
  }>

  const vietnamWar = conflicts.find(c => c.id === 'vietnam-war')
  const veteransData = loadData('veterans-by-war.json') as Array<{
    war: string
    deaths: number
    suicideEstimate: number | null
    served: number
    livingVeterans: number
  }>

  const vietnamVeterans = veteransData.find(v => v.war === 'Vietnam War')

  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Vietnam War Deaths' }]} />
        <ShareButtons title="How Many Died in the Vietnam War? 58,220 US + 3.1 Million Vietnamese" />

        {/* Hero Answer - Featured Snippet Target */}
        <header className="mb-12 bg-[#1a202c] rounded-lg p-8 border border-[#2d3748]">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Many Died in the Vietnam War?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">58,220</div>
            <div className="text-lg opacity-90">American service members killed</div>
          </div>
          <div className="bg-[#991b1b] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">3.1 Million</div>
            <div className="text-lg opacity-90">Vietnamese deaths (estimated)</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The Vietnam War killed <strong className="text-[#dc2626]">58,220 American service members</strong> 
            and wounded 303,704 more between 1955-1975. Vietnamese casualties were far higher, with estimates 
            of <strong className="text-[#dc2626]">3.1+ million deaths</strong> including over 2 million civilians. 
            An estimated <strong className="text-[#dc2626]">150,000+ Vietnam veterans</strong> have since died by suicide.
          </p>
        </header>

        {/* Casualty Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Casualty Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
              <h3 className="text-xl font-semibold text-white mb-4">American Casualties</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Killed in Action</span>
                  <span className="text-[#dc2626] font-mono">{casualties.us.hostileDeaths.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Non-Hostile Deaths</span>
                  <span className="text-gray-300 font-mono">{casualties.us.nonHostileDeaths.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-t border-[#2d3748] pt-2 font-semibold">
                  <span className="text-white">Total Deaths</span>
                  <span className="text-[#dc2626] font-mono">{casualties.us.totalDeaths.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Wounded</span>
                  <span className="text-yellow-400 font-mono">{casualties.us.wounded.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Missing in Action</span>
                  <span className="text-orange-400 font-mono">{casualties.us.missing.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Captured/POW</span>
                  <span className="text-gray-300 font-mono">{casualties.us.captured.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
              <h3 className="text-xl font-semibold text-white mb-4">Vietnamese &amp; Allied Casualties</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Civilians</span>
                  <span className="text-[#dc2626] font-mono">{casualties.vietnamese.civilianDeaths.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">North Vietnamese Army</span>
                  <span className="text-gray-300 font-mono">{casualties.vietnamese.northVietnamese.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">South Vietnamese Army</span>
                  <span className="text-gray-300 font-mono">{casualties.vietnamese.southVietnamese.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Viet Cong</span>
                  <span className="text-gray-300 font-mono">{casualties.vietnamese.vietCong.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-t border-[#2d3748] pt-2 font-semibold">
                  <span className="text-white">Total Vietnamese</span>
                  <span className="text-[#dc2626] font-mono">{casualties.vietnamese.totalEstimate.toLocaleString()}</span>
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  Vietnamese casualty figures are estimates from multiple sources and remain disputed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deaths by Year */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">American Deaths by Year</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              US deaths escalated dramatically after 1965 when major combat units were deployed. 
              The bloodiest year was 1968, coinciding with the Tet Offensive and peak US troop strength.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {yearlyDeaths.slice(0, 9).map((year) => (
                  <div key={year.year} className="flex items-center justify-between p-2 rounded bg-[#2d3748]">
                    <div className="flex items-center gap-4">
                      <span className="text-white font-mono w-12">{year.year}</span>
                      <span className="text-[#dc2626] font-mono w-16 text-right">{year.deaths.toLocaleString()}</span>
                    </div>
                    <span className="text-gray-400 text-sm flex-1 ml-4">{year.description}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {yearlyDeaths.slice(9).map((year) => (
                  <div key={year.year} className="flex items-center justify-between p-2 rounded bg-[#2d3748]">
                    <div className="flex items-center gap-4">
                      <span className="text-white font-mono w-12">{year.year}</span>
                      <span className="text-[#dc2626] font-mono w-16 text-right">{year.deaths.toLocaleString()}</span>
                    </div>
                    <span className="text-gray-400 text-sm flex-1 ml-4">{year.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Peak Period:</strong> 1967-1969 accounted for 40,042 deaths 
                (69% of total), when US troop strength peaked at 543,000 and major battles intensified. 
                The war's escalation pattern shows how quickly "limited" interventions can spiral.
              </p>
            </div>
          </div>
        </section>

        {/* Deadliest Battles */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Deadliest Battles for US Forces</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              Vietnam featured prolonged battles and operations rather than single decisive engagements. 
              The Tet Offensive was particularly devastating, despite being a strategic defeat for North Vietnam.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Battle/Operation</th>
                    <th className="text-center py-3 text-white">Year</th>
                    <th className="text-center py-3 text-white">Duration</th>
                    <th className="text-center py-3 text-white">US Deaths</th>
                    <th className="text-left py-3 text-white">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {deadliestBattles.map((battle, index) => (
                    <tr key={battle.battle} className="border-b border-[#2d3748]">
                      <td className="py-3 text-white font-semibold">{battle.battle}</td>
                      <td className="py-3 text-center text-gray-300">{battle.year}</td>
                      <td className="py-3 text-center text-gray-300">{battle.duration}</td>
                      <td className="py-3 text-center font-mono text-[#dc2626]">{battle.usDeath.toLocaleString()}</td>
                      <td className="py-3 text-gray-400 text-sm">{battle.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Note:</strong> These figures represent major named operations. 
                Daily combat, ambushes, and smaller engagements accounted for the majority of casualties throughout 
                the war. Average monthly deaths during peak years (1967-1968) exceeded 1,000.
              </p>
            </div>
          </div>
        </section>

        {/* The Vietnam Veterans Memorial */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Vietnam Veterans Memorial Wall</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">By the Numbers</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Names on the Wall</span>
                    <span className="text-[#dc2626] font-mono">58,320</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Panels</span>
                    <span className="text-gray-300 font-mono">144</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Youngest Age</span>
                    <span className="text-gray-300 font-mono">16</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Oldest Age</span>
                    <span className="text-gray-300 font-mono">62</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Average Age</span>
                    <span className="text-gray-300 font-mono">23.1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Women Killed</span>
                    <span className="text-gray-300 font-mono">8</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Demographics</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• 88% were white, 10.5% Black, 1.5% other</li>
                  <li>• 76% were from working-class families</li>
                  <li>• 25% were draftees, 75% volunteers</li>
                  <li>• 86% were enlisted, 14% officers</li>
                  <li>• 30% were married when killed</li>
                  <li>• 61% of deaths were ages 18-21</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">The Wall's Impact:</strong> Dedicated in 1982, the Vietnam Veterans 
                Memorial becomes the most visited memorial in Washington DC, with over 5 million visitors annually. 
                Names continue to be added as deaths are verified as service-connected, including recent additions 
                for Agent Orange-related cancers.
              </p>
            </div>
          </div>
        </section>

        {/* The Hidden Casualty: Veteran Suicides */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Hidden Casualty: Veteran Suicides</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              More Vietnam veterans have died by suicide since the war than were killed in combat. 
              This ongoing tragedy reflects the war's psychological toll and society's failure to support returning veterans.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#2d3748] rounded-lg p-4 text-center">
                <div className="text-[#dc2626] font-bold text-2xl mb-2">58,220</div>
                <div className="text-white text-sm mb-1">Combat Deaths</div>
                <div className="text-gray-400 text-xs">In Vietnam (1955-1975)</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-4 text-center">
                <div className="text-[#dc2626] font-bold text-2xl mb-2">150K+</div>
                <div className="text-white text-sm mb-1">Veteran Suicides</div>
                <div className="text-gray-400 text-xs">Since returning home</div>
              </div>
              <div className="bg-[#2d3748] rounded-lg p-4 text-center">
                <div className="text-[#dc2626] font-bold text-2xl mb-2">30%</div>
                <div className="text-white text-sm mb-1">PTSD Rate</div>
                <div className="text-gray-400 text-xs">Vietnam veterans</div>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-[#2d3748] rounded-lg">
                <h4 className="text-white font-semibold mb-2">Why So Many Suicides?</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Hostile homecoming and social rejection</li>
                  <li>• PTSD was not recognized or treated properly</li>
                  <li>• Agent Orange health effects and cancers</li>
                  <li>• Economic struggles and employment discrimination</li>
                  <li>• Guilt over surviving when others died</li>
                </ul>
              </div>
              <div className="p-4 bg-[#2d3748] rounded-lg">
                <p className="text-gray-300 text-sm italic">
                  "We have a 22-a-day problem" — referring to the average number of veteran suicides daily. 
                  For Vietnam veterans specifically, the rate has been consistently higher than the general population 
                  for decades. Many families consider these deaths as much war casualties as those who died in combat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Orange Legacy */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Agent Orange: The War That Continues</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The US sprayed 20 million gallons of herbicides, including Agent Orange, over Vietnam. 
              This chemical warfare continues killing Americans and Vietnamese decades after the war ended.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">US Veteran Deaths</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• 40,000+ veterans have died from Agent Orange cancers</li>
                  <li>• 300,000+ are receiving disability compensation</li>
                  <li>• 15 types of cancer are now service-connected</li>
                  <li>• Birth defects in veterans' children documented</li>
                  <li>• Names continue being added to Vietnam Memorial</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Vietnamese Impact</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• 400,000+ Vietnamese deaths from Agent Orange</li>
                  <li>• 500,000+ children born with birth defects</li>
                  <li>• 3 million Vietnamese still affected by dioxin</li>
                  <li>• Contamination persists in soil and water</li>
                  <li>• US has paid minimal compensation to Vietnam</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Chemical Warfare Legacy:</strong> The Agent Orange catastrophe 
                demonstrates how modern warfare's effects persist for generations. What began as a "defoliation 
                program" became one of the worst chemical disasters in human history, affecting millions on both sides.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
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

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: '/conflicts/vietnam-war', label: 'Vietnam War: Complete Analysis' },
              { href: '/how-many-wars-has-the-us-been-in', label: 'Complete List of US Wars' },
              { href: '/how-many-veterans-are-there', label: 'US Veterans Statistics' },
              { href: '/cost-of-war-on-terror', label: 'War on Terror Casualties' },
              { href: '/casualties', label: 'US War Casualties Database' },
              { href: '/how-much-did-ww2-cost', label: 'World War II Deaths' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[#1a202c] hover:bg-[#2d3748] rounded-lg p-4 border border-[#2d3748] hover:border-[#dc2626] text-gray-300 hover:text-red-700 transition-colors"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        <RelatedArticles articles={relatedArticles} />

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Sources</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <ul className="text-gray-300 space-y-2">
              <li>• National Archives - Vietnam War Casualty Statistics</li>
              <li>• Vietnam Veterans Memorial Fund - The Wall Database</li>
              <li>• Department of Veterans Affairs - Vietnam War Fact Sheet</li>
              <li>• Naval History and Heritage Command - Vietnam Casualty Statistics</li>
              <li>• Stockholm International Peace Research Institute</li>
              <li>• Thayer, Thomas C. - "War Without Fronts: The American Experience in Vietnam"</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}