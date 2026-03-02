import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { CiviliansByConflictChart, DroneStrikesChart } from '@/components/charts/CivilianCasualtyCharts'

export const metadata: Metadata = {
  title: 'Civilian Casualties in US Wars — Over 4.5 Million Dead | WarCosts',
  description: 'Civilian deaths in US conflicts: Korea (2.5M+), Vietnam (2M+), Iraq (200K+), Afghanistan (70K+). Drone strikes, hospital bombings, and the methodology of counting the dead.',
  openGraph: {
    title: 'Civilian Casualties in US Wars — Over 4.5 Million Dead',
    description: 'The dead don\'t count themselves. How millions of civilians died in American wars.',
    url: 'https://warcosts.org/civilian-casualties',
    type: 'article',
  },
}

const conflictData = [
  { conflict: 'Korean War', years: '1950–1953', lowEstimate: 2000000, highEstimate: 3000000, methodology: 'Population studies, UN reports', details: 'US carpet-bombed every city in North Korea. General Curtis LeMay: "We burned down every town in North Korea." 635,000 tons of bombs plus 32,557 tons of napalm — more than the entire Pacific theater of WWII.', sources: 'Cumings (2010), Korean War Encyclopedia' },
  { conflict: 'Vietnam War', years: '1955–1975', lowEstimate: 2000000, highEstimate: 3400000, methodology: 'Vietnamese government census, demographic analysis', details: 'Operation Rolling Thunder: 864,000 tons of bombs on North Vietnam. More bombs dropped on Laos (2M tons) than all of WWII combined. Agent Orange sprayed over 4.5M acres. Phoenix Program assassinated 20,000–40,000 suspected Viet Cong.', sources: 'Hirschman et al. (1995), Vietnam government, Turse (2013)' },
  { conflict: 'Cambodia', years: '1969–1975', lowEstimate: 100000, highEstimate: 600000, methodology: 'Bombing tonnage analysis, refugee surveys', details: 'Operation Menu (secret): 3,875 B-52 bombing sorties. Total: 2.7 million tons of bombs. Destabilized Cambodia, contributing to the rise of the Khmer Rouge.', sources: 'Owen & Kiernan (2006), Yale Cambodian Genocide Program' },
  { conflict: 'Gulf War', years: '1991', lowEstimate: 3500, highEstimate: 12000, methodology: 'Iraq Body Count, NGO estimates', details: '"Highway of Death": retreating Iraqi soldiers and civilians bombed for 10 hours. Depleted uranium munitions used extensively. Sanctions that followed killed an estimated 500,000 Iraqi children (UNICEF).', sources: 'Hurd (2015), UNICEF (1999)' },
  { conflict: 'Iraq War', years: '2003–2011', lowEstimate: 185000, highEstimate: 600000, methodology: 'Iraq Body Count (documented), Lancet survey, ORB survey', details: 'Iraq Body Count: 185,000+ documented violent civilian deaths. Lancet study (2006): ~655,000 excess deaths. ORB survey (2007): 1.2 million. "Shock and Awe" hit Baghdad with 1,700 air sorties in the first day. Fallujah was besieged twice, with white phosphorus used.', sources: 'Iraq Body Count, Lancet (2006), ORB (2007)' },
  { conflict: 'Afghanistan', years: '2001–2021', lowEstimate: 46319, highEstimate: 70000, methodology: 'UNAMA, Costs of War Project, Airwars', details: 'UNAMA documented civilian casualties annually from 2009. The Kunduz hospital strike (2015) killed 42 patients and staff at an MSF facility — the US called it a "mistake." Night raids terrorized villages for 20 years.', sources: 'UNAMA, Costs of War (Brown U), MSF' },
  { conflict: 'Pakistan (drone strikes)', years: '2004–2018', lowEstimate: 424, highEstimate: 969, methodology: 'Bureau of Investigative Journalism, Airwars', details: 'CIA drone program in FATA/Waziristan. Obama expanded strikes dramatically. "Signature strikes" targeted behavior patterns, not identified individuals. "Double-tap" strikes hit rescuers.', sources: 'Bureau of Investigative Journalism, Reprieve' },
  { conflict: 'Yemen', years: '2002–present', lowEstimate: 8983, highEstimate: 12000, methodology: 'Yemen Data Project, ACLED, Airwars', details: 'US drone strikes + support for Saudi coalition. School bus bombing (2018) killed 40 children with a US-made bomb. UN called Yemen the world\'s worst humanitarian crisis. 150,000+ total conflict deaths.', sources: 'Yemen Data Project, ACLED, UN OCHA' },
  { conflict: 'Somalia', years: '2007–present', lowEstimate: 1200, highEstimate: 3000, methodology: 'Airwars, Amnesty International', details: 'AFRICOM conducted 200+ airstrikes under Trump (expanded from ~35 under Obama). Amnesty documented cases where entire families were killed in strikes targeting al-Shabaab.', sources: 'Airwars, Amnesty International (2019, 2020)' },
  { conflict: 'Syria (US operations)', years: '2014–present', lowEstimate: 8000, highEstimate: 13000, methodology: 'Airwars, CENTCOM investigations', details: 'Battle of Raqqa (2017): US-led coalition destroyed 80% of the city. NYT investigation found Pentagon vastly undercounted civilian deaths. Airwars documented 8,000+ likely civilian deaths from coalition strikes.', sources: 'Airwars, NYT (Azmat Khan investigation, 2021)' },
  { conflict: 'Libya', years: '2011', lowEstimate: 1100, highEstimate: 2500, methodology: 'Human Rights Watch, UN', details: 'NATO air campaign: 9,658 strike sorties. Destroyed Libya\'s government and infrastructure. Country descended into civil war, slave markets emerged. Obama called it his "worst mistake."', sources: 'HRW, UN Commission of Inquiry' },
]

const droneData = [
  { country: 'Pakistan', strikes: 430, civilianDeaths: 969 },
  { country: 'Yemen', strikes: 374, civilianDeaths: 1200 },
  { country: 'Somalia', strikes: 252, civilianDeaths: 600 },
  { country: 'Afghanistan', strikes: 13072, civilianDeaths: 4000 },
  { country: 'Iraq/Syria', strikes: 35000, civilianDeaths: 13000 },
]

const methodologyIssues = [
  { issue: '"Military-Age Males"', details: 'Under Obama, the US counted all military-age males in a strike zone as combatants unless proven innocent posthumously. This systematically undercounted civilian deaths.' },
  { issue: 'Self-Investigation', details: 'The US military investigates its own strikes. CENTCOM initially claimed 1,417 civilian deaths in Syria/Iraq (2014–2021). Airwars documented 8,000+. NYT investigation forced acknowledgment of undercounting.' },
  { issue: 'Body Count vs. Estimates', details: 'Iraq Body Count tallies only documented, media-reported deaths (185K+). The Lancet epidemiological survey estimated 655K excess deaths. The gap between "counted" and "estimated" is enormous.' },
  { issue: 'Indirect Deaths', details: 'War destroys hospitals, water systems, food supply. Indirect deaths (disease, starvation, lack of medical care) often exceed direct violence. These are rarely counted in "civilian casualty" figures.' },
  { issue: 'Classification Games', details: 'A "precision strike" that kills 3 civilians and 1 militant is counted as a success. The dead civilians become "collateral damage" — regrettable but not a violation. The framing makes mass killing invisible.' },
]

const notableIncidents = [
  { name: 'No Gun Ri Massacre', year: 1950, conflict: 'Korea', deaths: '250–300 refugees', details: 'US troops fired on South Korean refugees at No Gun Ri bridge over three days. Classified and denied for 49 years until AP investigation (1999).' },
  { name: 'My Lai Massacre', year: 1968, conflict: 'Vietnam', deaths: '347–504 civilians', details: 'US soldiers killed unarmed villagers including women, children, and elderly. Covered up for a year. Lt. Calley convicted, served 3.5 years of house arrest.' },
  { name: 'Highway of Death', year: 1991, conflict: 'Gulf War', deaths: '200–1,000+', details: 'US aircraft bombed retreating Iraqi military and civilian vehicles on Highway 80 for 10 hours. Images were suppressed from US media.' },
  { name: 'Amiriyah Shelter Bombing', year: 1991, conflict: 'Gulf War', deaths: '408 civilians', details: 'US bombed a civilian air-raid shelter in Baghdad, killing 408 people — mostly women and children. The US claimed it was a military communications center.' },
  { name: 'Haditha Massacre', year: 2005, conflict: 'Iraq', deaths: '24 civilians', details: 'Marines killed 24 Iraqi civilians including women and children in retaliation for an IED attack. One Marine convicted — sentenced to no jail time.' },
  { name: 'Kunduz Hospital Strike', year: 2015, conflict: 'Afghanistan', deaths: '42 (MSF staff & patients)', details: 'US AC-130 gunship attacked an MSF trauma hospital for over an hour despite being given coordinates. No criminal charges. US paid $6,000 per death in "condolence payments."' },
  { name: 'Raqqa Destruction', year: 2017, conflict: 'Syria', deaths: '1,600+ civilians', details: 'US-led coalition destroyed 80% of Raqqa to defeat ISIS. Amnesty International called it a "war of annihilation." Mass graves still being discovered.' },
  { name: 'Baghuz Strike', year: 2019, conflict: 'Syria', deaths: '70+ (mostly women/children)', details: 'US F-15 dropped a 2,000-lb bomb on a crowd that included women and children. Military covered it up. Revealed by NYT investigation in 2021. No accountability.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Civilian Casualties in US Wars — Over 4.5 Million Dead',
  description: 'Comprehensive data on civilian deaths in US conflicts from Korea to the War on Terror.',
  author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  datePublished: '2026-03-01',
  mainEntityOfPage: 'https://warcosts.org/civilian-casualties',
}

export default function CivilianCasualtiesPage() {
  const totalLow = conflictData.reduce((s, c) => s + c.lowEstimate, 0)
  const totalHigh = conflictData.reduce((s, c) => s + c.highEstimate, 0)

  const chartData = conflictData
    .filter(c => c.lowEstimate >= 1000)
    .sort((a, b) => b.highEstimate - a.highEstimate)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Civilian Casualties' }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">The Human Cost</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Civilian Casualties in US Wars
        </h1>
        <p className="text-stone-400 text-lg">
          Between {(totalLow / 1e6).toFixed(1)} and {(totalHigh / 1e6).toFixed(1)} million civilians have been killed in US military operations since 1950.
          These are the people who didn&apos;t sign up, didn&apos;t fight, and didn&apos;t have a choice.
        </p>
      </div>

      <ShareButtons title="Civilian Casualties in US Wars — Over 4.5 Million Dead" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{(totalLow / 1e6).toFixed(1)}M+</p>
          <p className="text-sm text-stone-500">Low Estimate</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{(totalHigh / 1e6).toFixed(1)}M+</p>
          <p className="text-sm text-stone-500">High Estimate</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{conflictData.length}</p>
          <p className="text-sm text-stone-500">Conflicts Tracked</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">38M</p>
          <p className="text-sm text-stone-500">Displaced (since 2001)</p>
        </div>
      </div>

      {/* Chart */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Civilian Deaths by Conflict</h2>
        <CiviliansByConflictChart data={chartData.map(c => ({ conflict: c.conflict, lowEstimate: c.lowEstimate, highEstimate: c.highEstimate }))} />
      </section>

      {/* Conflict Breakdown */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Conflict-by-Conflict Breakdown</h2>
        <div className="space-y-6">
          {conflictData.map(c => (
            <div key={c.conflict} className="bg-stone-50 border border-stone-200 rounded-xl p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-lg font-bold text-stone-800">{c.conflict}</h3>
                <span className="text-xs text-stone-500">{c.years}</span>
                <span className="ml-auto text-red-700 font-bold text-sm">{(c.lowEstimate / 1e3).toFixed(0)}K – {c.highEstimate >= 1e6 ? `${(c.highEstimate / 1e6).toFixed(1)}M` : `${(c.highEstimate / 1e3).toFixed(0)}K`}</span>
              </div>
              <p className="text-sm text-stone-700 mb-2">{c.details}</p>
              <p className="text-xs text-stone-400">Methodology: {c.methodology} · Sources: {c.sources}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Drone Strikes */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Drone Strikes — Death from Above</h2>
        <DroneStrikesChart data={droneData} />
      </section>

      {/* Methodology Challenges */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How They Hide the Numbers</h2>
        <div className="space-y-4">
          {methodologyIssues.map(m => (
            <div key={m.issue} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-bold text-amber-800 mb-1">{m.issue}</h3>
              <p className="text-sm text-stone-700">{m.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Notable Incidents */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Notable Incidents</h2>
        <div className="space-y-4">
          {notableIncidents.map(n => (
            <div key={n.name} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-lg font-bold text-red-700 font-[family-name:var(--font-heading)]">{n.year}</span>
                <h3 className="font-bold text-stone-800">{n.name}</h3>
                <span className="text-xs text-stone-500">{n.conflict}</span>
                <span className="ml-auto text-red-700 text-sm font-medium">{n.deaths}</span>
              </div>
              <p className="text-sm text-stone-700">{n.details}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/casualties" className="text-red-700 hover:underline">→ Full Casualty Data</Link>
        <Link href="/war-powers" className="text-red-700 hover:underline">→ War Powers</Link>
        <Link href="/analysis/drone-wars" className="text-red-700 hover:underline">→ Drone Wars Analysis</Link>
      </div>

      <BackToTop />
    </div>
  )
}
