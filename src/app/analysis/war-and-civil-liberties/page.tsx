import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { TimelineChart, SurveillanceChart, NoFlyListChart, ProtestChart } from './LibertiesCharts'

export const metadata: Metadata = {
  title: 'War & Civil Liberties: Every War Shrinks Freedom at Home | WarCosts',
  description: 'From the Sedition Acts to the PATRIOT Act, every American war has produced a crackdown on civil liberties. Japanese internment, McCarthyism, COINTELPRO, NSA mass surveillance — the pattern never breaks.',
  openGraph: {
    title: 'War & Civil Liberties: Every War Shrinks Freedom at Home',
    description: 'Sedition Acts, Japanese internment, PATRIOT Act, NSA surveillance — war always erodes freedom.',
    url: 'https://www.warcosts.org/analysis/war-and-civil-liberties',
    type: 'article',
  },
}

const erosions = [
  {
    era: 'Quasi-War with France (1798)',
    title: 'The Alien & Sedition Acts',
    description: 'Just seven years after the Bill of Rights was ratified, the Adams administration passed laws making it a crime to criticize the government. Newspaper editors were jailed. Immigrants were deported. The justification: national security during tensions with France. The Sedition Act expired in 1801, but the precedent was set — wartime trumps the First Amendment.',
    rights: ['Freedom of speech', 'Freedom of the press', 'Due process for immigrants'],
    keyFact: '25 people were arrested, including Benjamin Franklin\'s grandson (a newspaper editor)',
  },
  {
    era: 'Civil War (1861–1865)',
    title: 'Suspension of Habeas Corpus',
    description: 'Lincoln suspended habeas corpus without congressional authorization, allowing the military to arrest and detain civilians indefinitely without charges. An estimated 13,000-38,000 civilians were detained. The Supreme Court ruled it unconstitutional in Ex parte Merryman (1861) — Lincoln ignored the ruling. Military tribunals tried civilians. Newspapers were shut down. Dissent was treated as treason.',
    rights: ['Habeas corpus', 'Freedom of the press', 'Right to civilian trial'],
    keyFact: '13,000-38,000 civilians detained without charges; Supreme Court ruling ignored',
  },
  {
    era: 'World War I (1917–1918)',
    title: 'The Espionage & Sedition Acts',
    description: 'The Espionage Act of 1917 criminalized "disloyal" speech. The Sedition Act of 1918 went further — making it illegal to "willfully utter, print, write, or publish any disloyal, profane, scurrilous, or abusive language about the form of the Government of the United States." Eugene Debs, a presidential candidate who received nearly a million votes, was sentenced to 10 years in prison for an anti-war speech. The Postmaster General banned anti-war publications from the mail.',
    rights: ['Freedom of speech', 'Freedom of the press', 'Right to dissent'],
    keyFact: 'Eugene Debs got 10 years for a speech; over 2,000 prosecutions under the acts',
  },
  {
    era: 'World War II (1942–1945)',
    title: 'Japanese American Internment',
    description: 'Executive Order 9066 forced 120,000 Japanese Americans — 62% of them US citizens — into concentration camps. They lost their homes, businesses, and property (estimated $400 million in 1942 dollars, $6.5 billion today). The Supreme Court upheld internment in Korematsu v. United States (1944), one of the most reviled decisions in American legal history. Not a single Japanese American was ever convicted of espionage. Meanwhile, German and Italian Americans faced no comparable treatment.',
    rights: ['Due process', 'Equal protection', 'Property rights', 'Freedom of movement'],
    keyFact: '120,000 people imprisoned; 62% were US citizens; zero convicted of espionage',
  },
  {
    era: 'Cold War (1947–1991)',
    title: 'McCarthyism & COINTELPRO',
    description: 'Senator Joseph McCarthy\'s crusade destroyed thousands of careers based on unproven accusations of communist sympathies. Federal employees were fired. Hollywood writers were blacklisted. Teachers lost their jobs. Simultaneously, the FBI\'s COINTELPRO (1956-1971) conducted illegal surveillance, infiltration, and disruption of domestic political organizations — targeting Martin Luther King Jr., the Black Panthers, anti-war groups, feminist organizations, and civil rights leaders. The FBI sent King an anonymous letter urging him to commit suicide.',
    rights: ['Freedom of association', 'Due process', 'Privacy', 'Freedom from government harassment'],
    keyFact: 'FBI sent MLK a letter urging suicide; 10,000+ people lost careers to McCarthyism',
  },
  {
    era: 'Vietnam War (1965–1975)',
    title: 'COINTELPRO Expansion & Kent State',
    description: 'The FBI expanded its domestic surveillance to cover the entire anti-war movement. Operation CHAOS, run by the CIA (illegally operating domestically), monitored 300,000 Americans. On May 4, 1970, the Ohio National Guard killed four students at Kent State University during an anti-war protest. Eleven days later, police killed two students at Jackson State in Mississippi. No one was ever convicted. The message was clear: protest at your own risk.',
    rights: ['Right to protest', 'Freedom from domestic surveillance', 'Right to life'],
    keyFact: '6 students killed at Kent State and Jackson State; 300,000 Americans surveilled by CIA',
  },
  {
    era: 'War on Terror (2001–present)',
    title: 'The PATRIOT Act & Mass Surveillance',
    description: 'Passed 45 days after 9/11 with almost no debate, the USA PATRIOT Act authorized warrantless wiretaps, "sneak and peek" searches, National Security Letters (250,000+ issued), and bulk data collection. The NSA\'s PRISM program collected data from every major tech company. Section 215 was used to collect metadata on every phone call in America. The FISA Court approved 99.97% of surveillance requests. The 2012 NDAA authorized indefinite military detention of American citizens without trial.',
    rights: ['Fourth Amendment (search & seizure)', 'Due process', 'Right to privacy', 'Habeas corpus', 'Right to a trial'],
    keyFact: 'NSA collected ALL phone metadata; 250,000+ National Security Letters; FISA Court: 99.97% approval rate',
  },
]

const postPatriotAct = [
  { measure: 'National Security Letters issued', count: '250,000+', oversight: 'Self-issued by FBI; no judicial approval required', details: 'Can demand records from banks, ISPs, employers. Permanent gag orders. $10,000/day fines for disclosure.' },
  { measure: 'Warrantless FBI searches of Americans (2021)', count: '278,000', oversight: 'FISA Section 702; rubber-stamped by secret court', details: 'Up from 40,000 in 2020. FBI queries NSA database without warrants for "foreign intelligence" pretext.' },
  { measure: 'No-fly list names', count: '100,000+', oversight: 'No trial, no notification, no effective appeal', details: 'Includes dead people, children, senators. Takes years to get removed if ever possible.' },
  { measure: 'Drone kills of US citizens', count: '7+', oversight: 'Anwar al-Awlaki\'s 16-year-old son killed 2 weeks later', details: '16-year-old Abdulrahman al-Awlaki killed at barbecue. Obama admin: "should have had more responsible father."' },
  { measure: 'Black site detainees (CIA)', count: '119+', oversight: 'Tortured using techniques the US prosecuted as war crimes at Nuremberg', details: 'Waterboarded 183 times (Khalid Sheikh Mohammed), rectal feeding, wall slamming, sleep deprivation for 180 hours.' },
  { measure: 'Guantánamo Bay detainees', count: '780', oversight: '731 released without charges; held for years/decades without trial', details: '30 still detained as of 2025. Some held 23+ years without trial. Suicide attempts: 100+. Cost: $540M/year.' },
  { measure: 'Muslim surveillance (NYPD)', count: '250,000+', oversight: 'Mapped entire Muslim communities; zero terrorism leads', details: 'Demographics Unit infiltrated mosques, restaurants, bookstores. Zero actionable intelligence produced.' },
  { measure: 'Phone metadata collection (NSA)', count: 'Every American', oversight: 'FISC approval based on "relevant" interpretation', details: 'Every call, text, email metadata stored. "Three hops" rule captured entire networks of contacts.' },
  { measure: 'Internet communications collected (NSA)', count: '56,000 per year (2011)', oversight: 'FISC retroactive approval; 99.97% success rate', details: 'PRISM program: direct access to Google, Facebook, Apple, Microsoft servers. XKeyscore: search anyone\'s internet activity.' },
  { measure: 'Watchlist database entries', count: '1.2 million+', oversight: 'Classified criteria; no due process to remove', details: 'Terrorist Screening Database includes children, elderly, people with similar names. Error rate unknown.' },
]

const constitutionalViolations = [
  { amendment: '1st Amendment - Free Speech', wartime: 'Sedition Acts (1798, 1918)', current: 'Espionage Act prosecutions of journalists/whistleblowers', impact: 'Eugene Debs: 10 years for speech. Julian Assange: guilty plea for journalism.' },
  { amendment: '1st Amendment - Free Press', wartime: 'Newspaper closures (WWI, Civil War)', current: 'Espionage Act against publishers; seizure of reporter notes', impact: '23 journalists prosecuted under Espionage Act since Obama. Press freedom rank: #42 globally.' },
  { amendment: '1st Amendment - Assembly', wartime: 'Anti-war protests banned/broken up', current: 'Protest permits; "free speech zones"; mass arrests', impact: 'J20 inauguration: 234 protesters charged with felony rioting for attending protest.' },
  { amendment: '4th Amendment - Search/Seizure', wartime: '"Sneak and peek" searches; NSA mass collection', current: 'Warrantless surveillance; National Security Letters', impact: '278,000 warrantless searches of Americans (2021). NSA collects all phone/internet metadata.' },
  { amendment: '5th Amendment - Due Process', wartime: 'Military tribunals for civilians', current: 'Indefinite detention without trial (NDAA 2012)', impact: 'Guantanamo: 30 people held 23+ years without trial. NDAA authorizes military detention of citizens.' },
  { amendment: '6th Amendment - Right to Trial', wartime: 'Military tribunals; secret evidence', current: 'FISA courts; classified evidence; National Security Letters', impact: 'FISA Court: 99.97% approval rate. Secret evidence routine in terrorism cases.' },
  { amendment: '8th Amendment - Cruel Punishment', wartime: 'Japanese internment; POW abuse', current: 'Torture at black sites; solitary confinement', impact: 'CIA tortured 119+ detainees. Chelsea Manning: 11 months solitary confinement for whistleblowing.' },
  { amendment: '14th Amendment - Equal Protection', wartime: 'Racial profiling; Japanese internment', current: 'Muslim surveillance; airport discrimination', impact: 'NYPD mapped all Muslim communities. TSA "randomly" selects Middle Eastern passengers 9x more often.' },
]

const surveillancePrograms = [
  { program: 'PRISM (2007-present)', agencies: 'NSA, FBI', scope: 'Direct access to tech companies', cost: '$20M/year', revealed: 'Edward Snowden (2013)', companies: 'Google, Facebook, Apple, Microsoft, Yahoo, Skype, YouTube, PalTalk, AOL' },
  { program: 'XKeyscore (2008-present)', agencies: 'NSA, CIA, FBI', scope: 'Search anyone\'s internet activity', cost: 'Classified', revealed: 'Edward Snowden (2013)', companies: 'Global internet infrastructure; undersea cables; satellite communications' },
  { program: 'Stellar Wind (2001-2011)', agencies: 'NSA', scope: 'Warrantless wiretapping', cost: '$1.5B+', revealed: 'New York Times (2005)', companies: 'AT&T, Verizon, Sprint (initially AT&T only)' },
  { program: 'MYSTIC (2009-present)', agencies: 'NSA, DEA', scope: 'Record ALL phone calls in target countries', cost: 'Classified', revealed: 'Edward Snowden (2014)', companies: 'Entire countries\' phone networks (Bahamas confirmed)' },
  { program: 'DISHFIRE (2012-present)', agencies: 'NSA, GCHQ', scope: 'Collect ALL text messages globally', cost: 'Classified', revealed: 'Edward Snowden (2014)', companies: '194 billion text messages collected in 2011 alone' },
  { program: 'Boundless Informant (2010-present)', agencies: 'NSA', scope: 'Map all global surveillance', cost: 'Classified', revealed: 'Edward Snowden (2013)', companies: 'Metadata analysis of ALL NSA programs globally' },
  { program: 'Hemisphere (2007-present)', agencies: 'DEA, NSA', scope: 'AT&T provides all call records to DEA', cost: '$10M/year to AT&T', revealed: 'New York Times (2013)', companies: 'AT&T (exclusive partnership)' },
  { program: 'StingRay/IMSI Catchers', agencies: 'FBI, ICE, DEA, local police', scope: 'Fake cell towers; collect all phone data in area', cost: '$400K per device', revealed: 'ACLU litigation (2014)', companies: 'Harris Corporation (manufacturer); used by 1,800+ law enforcement agencies' },
]

const modernThreats = [
  { threat: 'Facial Recognition Surveillance', description: 'FBI\'s Next Generation Identification system has 640 million photos. TSA, CBP, ICE use facial recognition at airports, borders. Local police deploy in protests.', impact: 'Constant identification eliminates anonymity in public spaces.', year: '2008-present' },
  { threat: 'Location Tracking', description: 'Cell phone location data purchased by DHS, IRS, FBI from data brokers. No warrant required. Tracks everyone near protests, mosques, clinics.', impact: 'Government knows where everyone goes without any legal process.', year: '2017-present' },
  { threat: 'Automatic License Plate Readers', description: '2.5 billion license plate scans annually by DHS. Tracks movements of every car. Data shared with ICE for deportations.', impact: 'Creates detailed movement patterns of every American driver.', year: '2008-present' },
  { threat: 'Financial Surveillance', description: 'Treasury Department FinCEN database tracks all transactions >$10,000. Banks file 15 million Suspicious Activity Reports annually.', impact: 'Government monitors all significant financial transactions.', year: '1970-present (expanded post-9/11)' },
  { threat: 'Social Media Monitoring', description: 'DHS monitors social media for "threats." FBI creates fake accounts to infiltrate groups. ICE uses social media to track immigrants.', impact: 'Chills free speech online. Creates surveillance of political dissent.', year: '2010-present' },
  { threat: 'Predictive Policing AI', description: 'Chicago\'s "heat list" ranks citizens by likelihood to commit crimes. NYPD uses IBM software to predict protests.', impact: 'Pre-crime surveillance creates presumption of guilt.', year: '2013-present' },
]

export default function WarAndCivilLibertiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'War & Civil Liberties' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          War &amp; Civil Liberties
        </h1>
        <p className="text-xl text-stone-300 mb-4">Every War Shrinks Freedom at Home</p>
        <p className="text-stone-400 text-lg">
          There is no exception to this rule in American history: every war produces a domestic crackdown 
          on civil liberties. The Sedition Acts. Japanese internment. McCarthyism. COINTELPRO. The PATRIOT Act. 
          NSA mass surveillance. Each time, the government says the restrictions are temporary. Each time, 
          most of them become permanent. The Fourth Amendment didn&apos;t survive the War on Terror. The 
          First Amendment barely survived World War I. The ratchet only turns one way.
        </p>
      </div>

      <ShareButtons title="War & Civil Liberties: Every War Shrinks Freedom at Home" />

      <TimelineChart />

      {/* Key Stat */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <h2 className="text-red-400 font-bold text-lg mb-3">The Ratchet Effect</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-3xl font-bold text-white">0</p>
            <p className="text-stone-400 text-sm">Major wartime civil liberty restrictions that were fully repealed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">227</p>
            <p className="text-stone-400 text-sm">Years of using &ldquo;national security&rdquo; to justify repression (1798-2025)</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">99.97%</p>
            <p className="text-stone-400 text-sm">FISA Court surveillance approval rate — a rubber stamp</p>
          </div>
        </div>
      </div>

      {/* Timeline of Erosions */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">A History of Erosion</h2>

        {erosions.map((era, i) => (
          <div key={era.era} className="mb-10">
            <div className="flex items-start gap-4 mb-3">
              <span className="bg-red-900 text-white text-sm px-3 py-1 rounded-full whitespace-nowrap">{era.era}</span>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">{era.title}</h3>
            <p className="text-stone-600 mb-4 leading-relaxed">{era.description}</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-4">
                <h4 className="text-red-400 font-bold text-sm mb-2">Rights Violated</h4>
                <ul className="text-stone-600 text-sm space-y-1">
                  {era.rights.map(r => <li key={r}>• {r}</li>)}
                </ul>
              </div>
              <div className="bg-stone-100 rounded-lg p-4">
                <h4 className="font-bold text-sm mb-2">Key Fact</h4>
                <p className="text-stone-600 text-sm">{era.keyFact}</p>
              </div>
            </div>

            {i < erosions.length - 1 && <hr className="my-8 border-stone-200" />}
          </div>
        ))}
      </section>

      <SurveillanceChart />
      <NoFlyListChart />

      {/* Post-PATRIOT Act Measures */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Post-9/11 Surveillance State</h2>
        <p className="text-stone-600 mb-6">
          The War on Terror created the most comprehensive surveillance apparatus in human history. 
          Edward Snowden&apos;s 2013 revelations confirmed what civil libertarians had feared: the 
          government was collecting everything.
        </p>
        
        <div className="space-y-4">
          {postPatriotAct.map((item) => (
            <div key={item.measure} className="bg-red-950/20 border border-red-900/30 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{item.measure}</h3>
                <span className="text-red-400 font-bold text-xl">{item.count}</span>
              </div>
              <p className="text-stone-400 text-sm mb-2">{item.oversight}</p>
              <p className="text-stone-300 text-sm">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <ProtestChart />

      {/* Constitutional Violations by Amendment */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">War vs. the Constitution: Amendment by Amendment</h2>
        <p className="text-stone-600 mb-6">
          The Bill of Rights was written by men who had experienced tyranny firsthand. They knew that governments use crisis
          to expand power. Yet every war has found new ways to circumvent constitutional protections. Here&apos;s how war
          has violated each amendment:
        </p>
        <div className="space-y-4">
          {constitutionalViolations.map((violation) => (
            <div key={violation.amendment} className="bg-stone-800 rounded-lg p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">{violation.amendment}</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-stone-400 font-semibold">Historical Wartime Violations:</span>
                  <p className="text-stone-300 mt-1">{violation.wartime}</p>
                </div>
                <div>
                  <span className="text-stone-400 font-semibold">Current War on Terror Violations:</span>
                  <p className="text-stone-300 mt-1">{violation.current}</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-950/30 rounded">
                <span className="text-red-400 font-semibold text-sm">Impact: </span>
                <span className="text-red-300 text-sm">{violation.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Surveillance Programs Breakdown */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Surveillance State: Program by Program</h2>
        <p className="text-stone-600 mb-6">
          Edward Snowden revealed that the US government operates dozens of mass surveillance programs. Most were authorized
          in secret by the FISA Court. Most are still operational. Here are the major programs targeting Americans:
        </p>
        <div className="space-y-4">
          {surveillancePrograms.map((program) => (
            <div key={program.program} className="bg-stone-100 border rounded-lg p-5">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900">{program.program}</h3>
                <span className="text-stone-500 text-sm">{program.cost}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                <div>
                  <span className="text-stone-600 font-semibold">Agencies:</span>
                  <p className="text-stone-800">{program.agencies}</p>
                </div>
                <div>
                  <span className="text-stone-600 font-semibold">Revealed by:</span>
                  <p className="text-stone-800">{program.revealed}</p>
                </div>
              </div>
              <div className="mb-3">
                <span className="text-stone-600 font-semibold">Scope:</span>
                <p className="text-stone-800 text-sm">{program.scope}</p>
              </div>
              <div className="bg-red-50 p-3 rounded">
                <span className="text-red-800 font-semibold text-sm">Target/Partners: </span>
                <span className="text-red-700 text-sm">{program.companies}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Threats */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Next Generation: AI, Facial Recognition, and Predictive Policing</h2>
        <p className="text-stone-600 mb-6">
          The surveillance state isn&apos;t static. New technologies enable new forms of monitoring and control. 
          AI-powered surveillance can track everyone, predict behavior, and identify dissidents before they act.
          The Fourth Amendment was written for a world of physical searches. It provides no protection against
          algorithmic oppression.
        </p>
        <div className="space-y-4">
          {modernThreats.map((threat) => (
            <div key={threat.threat} className="bg-red-950/20 border border-red-900/30 rounded-lg p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{threat.threat}</h3>
                <span className="text-stone-400 text-sm">{threat.year}</span>
              </div>
              <p className="text-stone-300 text-sm mb-3">{threat.description}</p>
              <div className="bg-red-900/30 p-3 rounded">
                <span className="text-red-400 font-semibold text-sm">Impact: </span>
                <span className="text-red-300 text-sm">{threat.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Espionage Act Today */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Espionage Act: 1917&apos;s Law, Today&apos;s Weapon</h2>
        <p className="text-stone-600 mb-4">
          The same Espionage Act used to jail Eugene Debs in 1918 is still in use today. It has been 
          weaponized against whistleblowers — the very people who expose government abuse:
        </p>
        <div className="space-y-4">
          {[
            { name: 'Daniel Ellsberg', year: '1971', act: 'Leaked the Pentagon Papers, exposing that the government lied about Vietnam for decades', result: 'Charges dropped due to government misconduct' },
            { name: 'Thomas Drake', year: '2010', act: 'NSA whistleblower who exposed waste and illegal surveillance', result: 'Pled to a misdemeanor; career destroyed' },
            { name: 'Chelsea Manning', year: '2013', act: 'Released evidence of war crimes including the "Collateral Murder" video', result: '35 years (commuted after 7); re-jailed for refusing to testify' },
            { name: 'Edward Snowden', year: '2013', act: 'Revealed NSA mass surveillance of American citizens', result: 'In exile in Russia; facing 30+ years if returned' },
            { name: 'Reality Winner', year: '2017', act: 'Leaked evidence of Russian election interference', result: '5 years in prison' },
            { name: 'Julian Assange', year: '2019', act: 'Published leaked documents exposing US war crimes', result: '5+ years in UK prison; pled guilty to Espionage Act charge' },
          ].map(ws => (
            <div key={ws.name} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="font-bold">{ws.name}</h3>
                <span className="text-stone-500 text-sm">({ws.year})</span>
              </div>
              <p className="text-stone-600 text-sm mb-1">{ws.act}</p>
              <p className="text-red-800 text-sm font-semibold">{ws.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Pattern */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Pattern</h2>
        <div className="space-y-4">
          {[
            { step: '1. Crisis', desc: 'A war begins or a threat is identified (real or exaggerated).' },
            { step: '2. Fear', desc: 'The government and media amplify fear. Dissent is framed as disloyalty.' },
            { step: '3. Legislation', desc: 'New laws pass with near-unanimous support. Critics are silenced or ignored.' },
            { step: '4. Expansion', desc: 'Powers granted for the specific crisis are expanded to other contexts.' },
            { step: '5. Normalization', desc: 'The "temporary" measures become permanent. No one votes to repeal them.' },
            { step: '6. Repeat', desc: 'The next crisis arrives, and the ratchet tightens further.' },
          ].map(s => (
            <div key={s.step} className="flex gap-4 items-start bg-red-950/20 border border-red-900/30 rounded-lg p-5">
              <div>
                <h3 className="font-bold">{s.step}</h3>
                <p className="text-stone-600 text-sm mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <blockquote className="border-l-4 border-red-800 pl-6 my-8 italic text-stone-600 text-lg">
        &ldquo;Those who would give up essential Liberty, to purchase a little temporary Safety, deserve neither Liberty nor Safety.&rdquo;
        <span className="block text-sm not-italic text-stone-500 mt-2">— Benjamin Franklin, 1755</span>
      </blockquote>

      {/* The Cost of Security Theater */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Security Theater: $100 Billion for 95% Failure Rate</h2>
        <p className="text-stone-600 mb-4">
          The Transportation Security Administration (TSA) was created 69 days after 9/11. Cost since 2001: <strong>over $100 billion</strong>.
          Red team testing (where federal agents try to sneak weapons past TSA) shows a <strong>95% failure rate</strong>.
          In 2015, undercover agents successfully smuggled fake bombs and weapons through checkpoints 67 out of 70 times.
        </p>
        <p className="text-stone-600 mb-4">
          Meanwhile, TSA agents have been arrested for theft (500+ cases), sexual assault, and drug trafficking. The agency that
          gropes children and searches grandmothers has never stopped a single terrorist attack. Yet removing shoes, limiting
          liquids, and enduring body scans has become normalized. We traded dignity and billions of dollars for theater.
        </p>
        <div className="bg-stone-100 rounded-lg p-4 my-4">
          <h3 className="font-bold mb-2">TSA by the Numbers (2001-2025)</h3>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>• Total cost: <strong>$100+ billion</strong></li>
            <li>• Terrorist attacks prevented: <strong>0 (confirmed)</strong></li>
            <li>• Weapons detection failure rate: <strong>95%</strong> (DHS testing)</li>
            <li>• Employee arrests (2003-2020): <strong>500+</strong></li>
            <li>• Complaints of inappropriate touching: <strong>3,000+ annually</strong></li>
            <li>• Items confiscated annually: <strong>15+ million</strong> (mostly harmless)</li>
          </ul>
        </div>
      </section>

      {/* The Normalization Process */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">How Tyranny Becomes Normal</h2>
        <p className="text-stone-600 mb-4">
          The most insidious aspect of wartime civil liberties erosion is how quickly the abnormal becomes normal.
          In 2001, the idea that the government could listen to phone calls without warrants would have outraged most Americans.
          By 2013, when Edward Snowden revealed the NSA was doing exactly that, the most common response was: "So what? 
          I have nothing to hide."
        </p>
        <p className="text-stone-600 mb-4">
          This normalization follows a predictable pattern:
        </p>
        <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">The Normalization Process</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">1.</span>
              <div>
                <strong className="text-white">Crisis:</strong>
                <p className="text-stone-300 text-sm">A attack, war, or threat emerges (or is amplified)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">2.</span>
              <div>
                <strong className="text-white">Emergency Measures:</strong>
                <p className="text-stone-300 text-sm">"Temporary" laws pass with little debate amid fear and patriotic fervor</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">3.</span>
              <div>
                <strong className="text-white">Scope Creep:</strong>
                <p className="text-stone-300 text-sm">Powers granted for terrorism are used for drug crimes, immigration, protest surveillance</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">4.</span>
              <div>
                <strong className="text-white">Generational Change:</strong>
                <p className="text-stone-300 text-sm">Young people grow up thinking surveillance and restrictions are normal</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">5.</span>
              <div>
                <strong className="text-white">Institutional Capture:</strong>
                <p className="text-stone-300 text-sm">Agencies, contractors, and politicians become invested in maintaining the system</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">6.</span>
              <div>
                <strong className="text-white">New Baseline:</strong>
                <p className="text-stone-300 text-sm">What was once unthinkable becomes the starting point for the next expansion</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-stone-600 mb-4">
          Today&apos;s college students have never lived in a America without mass surveillance, warrantless wiretapping,
          indefinite detention, and security theater at every airport. To them, the Fourth Amendment is a historical
          curiosity, not a living protection. This is how republics die: not in a single dramatic moment, but through
          the slow erosion of norms until tyranny seems normal.
        </p>
      </section>

      {/* Case Studies in Abuse */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Case Studies in Government Abuse</h2>
        <p className="text-stone-600 mb-6">
          Abstract discussions of civil liberties miss the human cost. Here are specific cases where the post-9/11
          surveillance state destroyed innocent lives:
        </p>
        <div className="space-y-6">
          {[
            {
              name: 'Brandon Mayfield',
              year: '2004',
              case: 'FBI arrested Oregon lawyer based on faulty fingerprint match linking him to Madrid train bombing. Held for 2 weeks as "material witness." House searched, computers seized.',
              outcome: 'FBI admitted error after real bomber caught. Mayfield awarded $2M settlement.',
              lesson: 'Federal agents can destroy your life based on incompetent analysis with no accountability.'
            },
            {
              name: 'Maher Arar',
              year: '2002',
              case: 'Canadian citizen detained at JFK airport, shipped to Syria for torture by US officials. Spent 374 days in 3×6-foot cell, tortured with cables and beaten.',
              outcome: 'Released without charges. Canada awarded him $10.5M. US refused to apologize or compensate.',
              lesson: 'US government will torture innocent people and refuse accountability when caught.'
            },
            {
              name: 'Latif Mehsud',
              year: '2013',
              case: 'Pakistani man kidnapped by US forces while meeting with Afghan officials. Held at Bagram prison for 2 years without trial or charges.',
              outcome: 'Released quietly after Pakistan protested. No apology, no compensation.',
              lesson: 'US operates black site prisons where people disappear for years without due process.'
            },
            {
              name: 'Yassin Kadi',
              year: '2001',
              case: 'Saudi businessman added to terrorism blacklist based on false information. All assets frozen, life destroyed, family unable to buy food or medicine.',
              outcome: 'Removed from list after 9-year legal battle. Never compensated for losses.',
              lesson: 'Government can financially destroy anyone based on secret evidence.'
            },
            {
              name: 'Khaled el-Masri',
              year: '2003',
              case: 'German citizen kidnapped by CIA in Macedonia, flown to Afghanistan, tortured for 4 months in "Salt Pit" prison. Case of mistaken identity.',
              outcome: 'Released when CIA realized error. US courts dismissed lawsuit claiming "state secrets."',
              lesson: 'CIA tortures innocent people and courts protect them from accountability.'
            }
          ].map((caseStudy) => (
            <div key={caseStudy.name} className="bg-stone-100 border-l-4 border-red-600 p-5 rounded-r-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">{caseStudy.name}</h3>
                <span className="text-stone-500 text-sm">{caseStudy.year}</span>
              </div>
              <p className="text-stone-600 text-sm mb-2"><strong>Case:</strong> {caseStudy.case}</p>
              <p className="text-stone-600 text-sm mb-3"><strong>Outcome:</strong> {caseStudy.outcome}</p>
              <div className="bg-red-100 p-3 rounded">
                <p className="text-red-800 text-sm font-semibold"><strong>Lesson:</strong> {caseStudy.lesson}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* International Comparisons */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">How Other Democracies Respond to Terrorism</h2>
        <p className="text-stone-600 mb-6">
          The United States is unique among democratic nations in how dramatically it expanded surveillance and restricted
          civil liberties after 9/11. Other countries faced terrorism for decades without shredding their constitutions:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              country: '🇬🇧 United Kingdom',
              threat: 'IRA bombing campaign (1970s-1990s)',
              response: 'Prevention of Terrorism Acts; internment without trial (1971-1975)',
              lessons: 'Internment increased IRA recruitment 10x. Abandoned after public backlash. Northern Ireland peace process succeeded through negotiation, not repression.',
              current: 'Still has extensive surveillance but with more judicial oversight than US.'
            },
            {
              country: '🇩🇪 Germany',
              threat: 'Red Army Faction terrorism (1970s-1980s)',
              response: 'Enhanced police powers; limited surveillance expansion',
              lessons: 'Maintained strong privacy protections due to Nazi/Stasi history. Defeated terrorism through good policing, not mass surveillance.',
              current: 'Stronger privacy laws than US. Constitutional court regularly strikes down surveillance overreach.'
            },
            {
              country: '🇮🇱 Israel',
              threat: 'Constant terrorism since founding (1948-present)',
              response: 'Extensive security measures but limited domestic surveillance of citizens',
              lessons: 'High security with more targeted approach. Emergency powers sunset automatically. Supreme Court provides meaningful oversight.',
              current: 'High security, but Israeli citizens have more privacy protections than Americans.'
            },
            {
              country: '🇨🇦 Canada',
              threat: 'FLQ terrorism (1970s); Air India bombing (1985)',
              response: 'War Measures Act (1970) briefly suspended civil liberties; later Anti-terrorism Act (2001)',
              lessons: 'War Measures Act was deeply unpopular and quickly repealed. Post-9/11 laws included sunset clauses.',
              current: 'Less surveillance overreach than US. Courts more willing to limit government power.'
            }
          ].map((comparison) => (
            <div key={comparison.country} className="bg-stone-100 rounded-lg p-5">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">{comparison.country}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-stone-700">Threat:</span>
                  <p className="text-stone-600">{comparison.threat}</p>
                </div>
                <div>
                  <span className="font-semibold text-stone-700">Response:</span>
                  <p className="text-stone-600">{comparison.response}</p>
                </div>
                <div>
                  <span className="font-semibold text-stone-700">Lessons:</span>
                  <p className="text-stone-600">{comparison.lessons}</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <span className="font-semibold text-green-800">Current:</span>
                  <p className="text-green-700 text-sm">{comparison.current}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Iran War Impact */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">What War with Iran Will Do to Civil Liberties</h2>
        <p className="text-stone-600 mb-4">
          Every war brings new restrictions. Iran will be no different. Based on the historical pattern, here&apos;s what
          Americans can expect if the war expands:
        </p>
        <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-6">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Probable New Restrictions</h3>
          <div className="space-y-3 text-stone-300 text-sm">
            <div className="flex gap-3">
              <span className="text-red-400">•</span>
              <p><strong>Enhanced surveillance of Iranian-Americans</strong> — Similar to WWII Japanese-Americans, Korea War Chinese-Americans, Cold War Russian-Americans</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400">•</span>
              <p><strong>Expanded no-fly lists</strong> — Anyone who protests the war, donates to peace groups, or speaks at anti-war rallies</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400">•</span>
              <p><strong>Social media monitoring</strong> — AI analysis of all posts for "Iranian propaganda" or "anti-American sentiment"</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400">•</span>
              <p><strong>Protest restrictions</strong> — "Free speech zones" far from government buildings, pre-emptive arrests, felony rioting charges</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400">•</span>
              <p><strong>Financial surveillance</strong> — All transactions monitored for connections to Iran, peace groups, or humanitarian aid</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400">•</span>
              <p><strong>Academic freedom restrictions</strong> — Iranian students deported, professors fired for anti-war speech, research censored</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400">•</span>
              <p><strong>Border security theater</strong> — Enhanced screenings, biometric collection, indefinite detention for questioning</p>
            </div>
          </div>
        </div>
        <p className="text-stone-600 mt-4">
          <Link href="/analysis/undeclared-wars" className="text-red-600 hover:text-red-700">The president can start this war</Link> without 
          congressional approval. <Link href="/analysis/war-profiteering" className="text-red-600 hover:text-red-700">Defense contractors will profit</Link> enormously. 
          <Link href="/analysis/aipac-war-machine" className="text-red-600 hover:text-red-700">AIPAC will push for expansion</Link>. 
          And Americans will lose more rights they will never get back.
        </p>
      </section>

      {/* Conclusion */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Permanent Emergency</h2>
        <p className="text-stone-600 mb-4">
          The United States has been in a continuous state of declared national emergency since September 14, 2001. 
          Every president has renewed it. <Link href="/analysis/undeclared-wars" className="text-red-600 hover:text-red-700">The AUMF passed that same week</Link> remains 
          in effect, authorizing military force in countries that didn&apos;t exist when it was written. The surveillance 
          apparatus built after 9/11 has never been dismantled — it has only grown.
        </p>
        <p className="text-stone-600 mb-4">
          The lesson of 227 years is unambiguous: <strong>war is the health of the state and the sickness of liberty</strong>. 
          Every war expands government power. No war has ever contracted it. The rights surrendered in fear 
          are never returned in peace — because peace never comes. There is always another threat, another 
          emergency, another reason the government needs just a little more power.
        </p>
        <p className="text-stone-600 mb-4">
          <Link href="/analysis/cost-of-empire" className="text-red-600 hover:text-red-700">The cost of maintaining empire</Link> is not just 
          financial. It is constitutional. Every foreign intervention creates domestic surveillance. Every overseas base
          requires homeland security. Every war abroad means less freedom at home.
        </p>
        <p className="text-stone-600 font-semibold">
          The question is not whether the next war will erode more civil liberties. The question is which 
          ones are left to erode.
        </p>
        
        <div className="bg-stone-900 border border-stone-700 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">💡 The Bottom Line</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📜</span>
              <div>
                <p className="text-stone-300">
                  <strong className="text-white">227 years of precedent:</strong> Every American war has produced a crackdown
                  on civil liberties. The restrictions are always "temporary." They never are.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👁️</span>
              <div>
                <p className="text-stone-300">
                  <strong className="text-white">Current surveillance state:</strong> NSA collects all phone/internet metadata.
                  FBI conducts 278,000 warrantless searches annually. FISA Court rubber-stamps 99.97% of requests.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <p className="text-stone-300">
                  <strong className="text-white">Constitution in crisis:</strong> 4th Amendment dead. 1st Amendment under attack.
                  5th Amendment suspended for "national security." The Bill of Rights is now the Bill of Suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <div className="bg-stone-50 rounded-lg p-6 text-sm text-stone-600 space-y-2">
          <p>• <strong>Alien & Sedition Acts:</strong> Library of Congress; Stone, Geoffrey. <em>Perilous Times: Free Speech in Wartime</em></p>
          <p>• <strong>Japanese internment:</strong> Commission on Wartime Relocation and Internment of Civilians (1983)</p>
          <p>• <strong>COINTELPRO:</strong> Church Committee Final Report (1976); FBI declassified documents</p>
          <p>• <strong>PATRIOT Act:</strong> ACLU analysis; Electronic Frontier Foundation; Congressional Research Service</p>
          <p>• <strong>NSA surveillance:</strong> Snowden documents; Glenn Greenwald, <em>No Place to Hide</em>; ODNI transparency reports</p>
          <p>• <strong>No-fly list:</strong> ACLU litigation documents; DHS Inspector General reports</p>
          <p>• <strong>FISA Court:</strong> Foreign Intelligence Surveillance Court annual reports</p>
          <p>• <strong>Protest arrests:</strong> ACLU reports; Amnesty International; academic research on political repression</p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/undeclared-wars" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Undeclared Wars</h3>
            <p className="text-stone-500 text-sm">How presidents bypass Congress to wage war.</p>
          </Link>
          <Link href="/analysis/war-profiteering" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">War Profiteering</h3>
            <p className="text-stone-500 text-sm">Who gets rich from surveillance and war.</p>
          </Link>
          <Link href="/analysis/cost-of-empire" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Cost of Empire</h3>
            <p className="text-stone-500 text-sm">$1.3T/year for global domination.</p>
          </Link>
          <Link href="/analysis/aipac-war-machine" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">AIPAC & War Machine</h3>
            <p className="text-stone-500 text-sm">How lobbying drives America to war.</p>
          </Link>
          <Link href="/analysis/draft-and-inequality" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Draft & Inequality</h3>
            <p className="text-stone-500 text-sm">Class warfare in military conscription.</p>
          </Link>
          <Link href="/analysis/base-nation" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Base Nation</h3>
            <p className="text-stone-500 text-sm">800+ military bases spanning the globe.</p>
          </Link>
          <Link href="/analysis/refugee-crisis" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Refugee Crisis</h3>
            <p className="text-stone-500 text-sm">38 million displaced by US wars.</p>
          </Link>
          <Link href="/conflicts/" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Conflicts Database</h3>
            <p className="text-stone-500 text-sm">Every US war since 1775.</p>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
