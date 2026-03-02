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
  { measure: 'National Security Letters issued', count: '250,000+', oversight: 'Self-issued by FBI; no judicial approval required' },
  { measure: 'Warrantless FBI searches of Americans (2021)', count: '278,000', oversight: 'FISA Section 702; rubber-stamped by secret court' },
  { measure: 'No-fly list names', count: '100,000+', oversight: 'No trial, no notification, no effective appeal' },
  { measure: 'Drone kills of US citizens', count: '7+', oversight: 'Anwar al-Awlaki\'s 16-year-old son killed 2 weeks later' },
  { measure: 'Black site detainees (CIA)', count: '119+', oversight: 'Tortured using techniques the US prosecuted as war crimes at Nuremberg' },
  { measure: 'Guantánamo Bay detainees', count: '780', oversight: '731 released without charges; held for years/decades without trial' },
  { measure: 'Muslim surveillance (NYPD)', count: '250,000+', oversight: 'Mapped entire Muslim communities; zero terrorism leads' },
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
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-bold">Measure</th>
                <th className="text-left p-3 font-bold">Scale</th>
                <th className="text-left p-3 font-bold">Oversight</th>
              </tr>
            </thead>
            <tbody>
              {postPatriotAct.map((item) => (
                <tr key={item.measure} className="border-b border-stone-200">
                  <td className="p-3 text-stone-700">{item.measure}</td>
                  <td className="p-3 font-bold text-red-800">{item.count}</td>
                  <td className="p-3 text-stone-500">{item.oversight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ProtestChart />

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

      {/* Conclusion */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Permanent Emergency</h2>
        <p className="text-stone-600 mb-4">
          The United States has been in a continuous state of declared national emergency since September 14, 2001. 
          Every president has renewed it. The AUMF passed that same week remains in effect, authorizing military 
          force in countries that didn&apos;t exist when it was written. The surveillance apparatus built after 
          9/11 has never been dismantled — it has only grown.
        </p>
        <p className="text-stone-600 mb-4">
          The lesson of 227 years is unambiguous: war is the health of the state and the sickness of liberty. 
          Every war expands government power. No war has ever contracted it. The rights surrendered in fear 
          are never returned in peace — because peace never comes. There is always another threat, another 
          emergency, another reason the government needs just a little more power.
        </p>
        <p className="text-stone-600 font-semibold">
          The question is not whether the next war will erode more civil liberties. The question is which 
          ones are left to erode.
        </p>
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
          <Link href="/analysis/surveillance-state" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">The Surveillance State</h3>
            <p className="text-stone-500 text-sm">NSA collects ALL phone metadata. The 4th Amendment is dead.</p>
          </Link>
          <Link href="/analysis/undeclared-wars" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Undeclared Wars</h3>
            <p className="text-stone-500 text-sm">How presidents wage war without a vote.</p>
          </Link>
          <Link href="/analysis/911-to-forever-war" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">From 9/11 to Forever War</h3>
            <p className="text-stone-500 text-sm">How 60 words enabled 25 years of war.</p>
          </Link>
          <Link href="/analysis/media-and-war" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Manufacturing Consent</h3>
            <p className="text-stone-500 text-sm">How media sells every war.</p>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
