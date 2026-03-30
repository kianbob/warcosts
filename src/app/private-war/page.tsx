import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { ContractorTroopRatioChart, ContractorSpendingChart, IncidentTimelineChart } from './PrivateWarCharts'

export const metadata: Metadata = {
  title: 'The Contractors\' War: When Profit Meets Combat — WarCosts.org',
  description: 'Private military contractors outnumber US troops in combat zones. From Blackwater\'s Nisour Square massacre to $370B+ in contracts — the privatization of American warfare.',
  keywords: ['private military contractors', 'Blackwater', 'Academi', 'Nisour Square', 'mercenaries', 'DynCorp', 'KBR burn pits', 'CACI Abu Ghraib', 'contractor deaths Iraq', 'Erik Prince'],
  alternates: { canonical: 'https://www.warcosts.org/private-war' },
  openGraph: {
    title: 'The Contractors\' War: When Profit Meets Combat',
    description: 'Private military contractors outnumber troops. $370B+ spent. Zero accountability.',
    url: 'https://warcosts.org/private-war',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Contractors\' War: When Profit Meets Combat',
    description: '190,000 contractors vs 60,000 troops at peak. The privatization of war.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Contractors\' War: When Profit Meets Combat',
  description: 'Private military contractors in US war zones — from Blackwater to burn pits.',
  url: 'https://www.warcosts.org/private-war',
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
}

interface CompanyProfile {
  name: string
  formerNames?: string[]
  founded: string
  revenue: string
  notableIncidents: string[]
  keyFacts: string[]
  revolvingDoor: string
}

const companies: CompanyProfile[] = [
  {
    name: 'Academi (formerly Blackwater)',
    formerNames: ['Blackwater USA', 'Blackwater Worldwide', 'Xe Services'],
    founded: '1997 by Erik Prince',
    revenue: '$2B+ in government contracts (2001–2010)',
    notableIncidents: [
      'Nisour Square Massacre (Sept 16, 2007): Blackwater guards opened fire on Iraqi civilians in a Baghdad traffic circle, killing 17 and wounding 20. Victims included Ali Kinani, a 9-year-old boy shot in the head. An FBI investigation concluded at least 14 of the 17 killings were unjustified.',
      'Four guards were convicted in 2014 (one of murder, three of manslaughter). In December 2020, President Trump pardoned all four — described by the UN as an "affront to justice."',
      'Fallujah ambush (March 2004): Four Blackwater contractors were killed, and their bodies were burned and hung from a bridge. This event directly triggered the First Battle of Fallujah.',
      'Multiple incidents of shooting at Iraqi civilians from moving vehicles, described internally as "ichiban" (Japanese for "number one") — a running joke among some contractors.',
    ],
    keyFacts: [
      'Erik Prince, founder, is the brother of former Education Secretary Betsy DeVos',
      'Prince proposed a private army to replace US troops in Afghanistan in 2017',
      'Blackwater renamed itself twice to escape its reputation — to Xe Services (2009), then Academi (2011)',
      'Prince is now involved in private military operations in Africa and reportedly has ties to Chinese and Russian intelligence contacts',
      'At peak, Blackwater had 1,000+ operators in Iraq guarding State Department officials',
    ],
    revolvingDoor: 'Blackwater recruited heavily from Navy SEALs, Army Special Forces, and CIA. Cofer Black, former CIA counterterrorism chief, served as Blackwater\'s VP.',
  },
  {
    name: 'DynCorp',
    founded: '1946 (as California Eastern Airways)',
    revenue: '$3B+ per year at peak',
    notableIncidents: [
      'Bosnia sex trafficking scandal (1999–2000): DynCorp employees were found to be buying and selling women and girls as young as 12 for sex. Whistleblower Kathryn Bolkovac was fired for reporting it. No DynCorp employee was criminally prosecuted.',
      'Afghanistan police training failures: DynCorp was paid $2B+ to train Afghan police. Inspectors General found the training was so poor that graduates couldn\'t use weapons safely. Some trainees were "ghost police" who didn\'t exist — but DynCorp billed for them.',
      'Bacha bazi incident (2010): A DynCorp-funded party in Afghanistan featured young boys dressed as women dancing for Afghan police trainees. Internal cables (released by WikiLeaks) showed the State Department tried to cover it up.',
    ],
    keyFacts: [
      'Primary contractor for State Department air wing (crop spraying, transport)',
      'Over $14B in government contracts since 2001',
      'Used to eradicate coca crops in Colombia — accused of spraying populated areas with herbicides',
      'Acquired by Amentum in 2020, effectively dissolving the DynCorp brand',
    ],
    revolvingDoor: 'Multiple former military generals served on DynCorp\'s board. The company was a top donor to congressional defense committees.',
  },
  {
    name: 'CACI International',
    founded: '1962',
    revenue: '$6.7B (FY2024)',
    notableIncidents: [
      'Abu Ghraib torture scandal (2003–2004): CACI interrogators were directly implicated in the torture and abuse of Iraqi detainees at Abu Ghraib prison. The Taguba Report and Fay Report identified CACI employees as participants in or facilitators of abuse.',
      'Steven Stefanowicz, a CACI contractor, was specifically named in the Taguba Report for directing soldiers to abuse detainees. He was never criminally charged.',
      'CACI sued journalists and organizations that reported on its role at Abu Ghraib, using litigation as a weapon against accountability.',
      'In 2023, a federal jury in Virginia found CACI liable for conspiracy to commit torture — after 15 years of legal battles. The company appealed.',
    ],
    keyFacts: [
      'Despite Abu Ghraib, CACI continued receiving billions in government contracts',
      'Provides intelligence, surveillance, and interrogation services',
      'The company\'s stock price was unaffected by the Abu Ghraib revelations',
      'CACI spent $3.8M on lobbying in 2023',
    ],
    revolvingDoor: 'CACI\'s board has included multiple former military and intelligence officials. CEO John Mengucci is a former defense executive.',
  },
  {
    name: 'KBR (formerly Kellogg Brown & Root)',
    founded: '1998 (spun off from Halliburton)',
    revenue: '$7.3B (FY2023)',
    notableIncidents: [
      'Burn pits: KBR operated open-air burn pits on US bases across Iraq and Afghanistan, burning everything from medical waste to munitions to human waste. An estimated 3.5 million service members were exposed to toxic fumes. The PACT Act (2022) acknowledges burn pit exposure causes cancer and respiratory disease.',
      'Electrocution deaths: At least 18 service members were electrocuted in KBR-maintained facilities in Iraq due to faulty wiring. Staff Sgt. Ryan Maseth died in his shower in 2008 from electrocution. KBR was found to have known about the electrical hazards.',
      'LOGCAP overcharging: KBR charged the government $45 per case of soda, billed for meals never served, and submitted $100M+ in unsupported costs under the Logistics Civil Augmentation Program.',
      'KBR/Halliburton received the Iraq logistics contract through a no-bid process. VP Dick Cheney was Halliburton\'s CEO from 1995–2000 and still held stock options while in office.',
    ],
    keyFacts: [
      'Over $40B in Iraq/Afghanistan contracts — the single largest contractor',
      'Originally part of Halliburton; spun off in 2007 amid scandal',
      'Dick Cheney\'s Halliburton received $7B in no-bid Iraq contracts',
      'Multiple fraud convictions for employees; company paid $579M in fines',
    ],
    revolvingDoor: 'The Cheney–Halliburton connection is the textbook example of the military-industrial revolving door. Cheney received $34M from Halliburton before becoming VP, then steered contracts to his former company.',
  },
  {
    name: 'Triple Canopy (now Constellis)',
    founded: '2003 by Special Forces veterans',
    revenue: '$1B+ at peak',
    notableIncidents: [
      'Iraqi civilian shootings: In 2006, two Triple Canopy supervisors were accused of shooting at Iraqi civilians for sport from their armored vehicles. A lawsuit alleged they fired on civilian vehicles "ichiban-style" to relieve boredom. The company settled the case.',
      'Third-country national exploitation: Triple Canopy recruited guards from Uganda, Peru, and Fiji, paying them $800–1,500/month for the same work American contractors received $10,000+/month.',
      'Merged with Academi in 2014 under the Constellis Holdings umbrella — concentrating multiple scandal-ridden companies under one corporate parent.',
    ],
    keyFacts: [
      'Founded by former Delta Force operators',
      'Guarded the Green Zone in Baghdad and US Embassy',
      'Acquired Academi (Blackwater) in 2014 — merging two of the most controversial PMCs',
      'Now part of Constellis, which also owns Edinburgh International and other security firms',
    ],
    revolvingDoor: 'Founded by former Army Special Operations personnel. Leadership drawn entirely from military special operations community.',
  },
]

const incidents = [
  { year: '2003', event: 'Iraq invasion begins', detail: 'Private contractors deploy alongside troops. Halliburton/KBR receives $7B no-bid logistics contract.' },
  { year: '2004', event: 'Blackwater Fallujah', detail: 'Four Blackwater contractors killed and hung from bridge, triggering the First Battle of Fallujah. Abu Ghraib torture photos emerge; CACI interrogators implicated.' },
  { year: '2005', event: 'Aegis Defence trophy video', detail: 'Video surfaces of Aegis Defence contractors shooting at Iraqi civilian vehicles set to Elvis Presley music. No charges filed.' },
  { year: '2006', event: 'Triple Canopy shootings', detail: 'Supervisors accused of shooting at Iraqi civilians for sport. Contractor numbers in Iraq pass 100,000.' },
  { year: '2007', event: 'Nisour Square Massacre', detail: 'Blackwater guards kill 17 Iraqi civilians in Baghdad. Peak contractor presence: 190,000 in Iraq and Afghanistan combined, outnumbering troops.' },
  { year: '2008', event: 'KBR electrocution deaths', detail: 'Staff Sgt. Ryan Maseth electrocuted in KBR-maintained shower. DOD investigation finds 18 electrocution deaths from contractor negligence.' },
  { year: '2009', event: 'Blackwater rebrands to Xe', detail: 'Blackwater changes name amid scandal. Iraq orders Blackwater out of the country. Erik Prince moves to Abu Dhabi.' },
  { year: '2010', event: 'DynCorp bacha bazi scandal', detail: 'WikiLeaks cables reveal DynCorp-funded party with child dancers for Afghan police recruits. State Department suppressed the report.' },
  { year: '2011', event: 'Xe becomes Academi', detail: 'Second rebrand. Contractor deaths in Iraq surpass 1,500 — more than UK military losses.' },
  { year: '2014', event: 'Blackwater convictions', detail: 'Four Blackwater guards convicted for Nisour Square. One receives life sentence for murder. Triple Canopy acquires Academi, forming Constellis.' },
  { year: '2020', event: 'Trump pardons', detail: 'President Trump pardons all four Nisour Square shooters. UN calls it "an affront to justice and to the victims." Families of the dead express devastation.' },
  { year: '2022', event: 'PACT Act', detail: 'Congress passes PACT Act acknowledging burn pit exposure (largely KBR-operated) causes cancer. $280B authorized for affected veterans.' },
  { year: '2023', event: 'CACI found liable', detail: 'Federal jury finds CACI liable for conspiracy to commit torture at Abu Ghraib — 19 years after the abuse occurred.' },
  { year: '2026', event: 'Iran conflict contractors', detail: 'Private contractors deployed to Gulf states for base security, logistics, and intelligence support. Estimated 95,000 contractors in the theater.' },
]

const keyStats = [
  { label: 'Total spent on PMCs since 2001', value: '$370B+', source: 'CBO/POGO estimates' },
  { label: 'Peak contractors in theater', value: '190,000', source: 'CENTCOM quarterly reports, 2011' },
  { label: 'Contractor deaths (Iraq/Afghanistan)', value: '1,800+', source: 'DOL Defense Base Act data' },
  { label: 'Contractors who are foreign nationals', value: '~70%', source: 'CRS Report, 2017' },
  { label: 'Contractors criminally prosecuted', value: '<12', source: 'DOJ records' },
  { label: 'Revenue of top 5 PMCs combined', value: '$20B+/yr', source: 'Company filings' },
]

export default function PrivateWarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'The Contractors\' War' }]} dark />
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Contractors&apos; War
          </h1>
          <p className="text-2xl md:text-3xl text-stone-300 font-[family-name:var(--font-playfair)] italic mb-6">
            When Profit Meets Combat
          </p>
          <p className="text-lg text-stone-400 max-w-3xl leading-relaxed">
            At peak, private military contractors outnumbered US troops in war zones 3 to 1.
            They earned $370 billion. They killed civilians with near-total impunity. They are
            the hidden workforce of American warfare — and most Americans don&apos;t know they exist.
          </p>
          <ShareButtons title="The Contractors' War: When Profit Meets Combat" />
        </div>
      </section>

      <section className="bg-stone-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {keyStats.map((s, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                <p className="text-2xl md:text-3xl font-bold text-red-700">{s.value}</p>
                <p className="text-sm text-stone-600 mt-1">{s.label}</p>
                <p className="text-xs text-stone-400 mt-1">{s.source}</p>
              </div>
            ))}
          </div>

          {/* Note distinguishing from /contractors */}
          <div className="bg-stone-100 border-l-4 border-red-600 p-6 rounded-r-lg mb-12">
            <p className="text-stone-700 leading-relaxed">
              <strong>Note:</strong> This page focuses on <em>private military and security contractors</em> in combat
              zones — the armed operators, interrogators, and logistics workers deployed alongside (and often instead of)
              US troops. For an overview of defense industry corporations and their government contracts, see{' '}
              <Link href="/contractors" className="text-red-700 underline hover:text-red-900">Top Defense Contractors</Link>.
            </p>
          </div>

          {/* Charts */}
          <div className="space-y-8 mb-12">
            <ContractorTroopRatioChart />
            <ContractorSpendingChart />
          </div>

          {/* Who are the contractors? */}
          <section className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 md:p-8 mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900 mb-6">
              Who Are the Contractors?
            </h2>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                The term &ldquo;military contractor&rdquo; conjures images of burly American ex-Special Forces operators
                earning $1,000 a day. That&apos;s the minority. <strong>Approximately 70% of military contractors in
                Iraq and Afghanistan were foreign nationals</strong> — &ldquo;third-country nationals&rdquo; (TCNs)
                recruited from Uganda, Colombia, Nepal, Fiji, Peru, the Philippines, and Sierra Leone.
              </p>
              <p>
                These workers — guards, cooks, drivers, translators, mechanics — were paid <strong>$800 to $2,000 per
                month</strong> for work that American contractors received $10,000–$15,000/month to do, and that US
                soldiers received $3,500+/month in base pay (plus combat pay, benefits, and future VA care).
              </p>
              <p>
                TCNs were often recruited through labor brokers who charged fees of $2,000–$5,000, creating debt
                bondage. Some had passports confiscated upon arrival. The Department of Labor recorded deaths among
                these workers but the military did not count them in casualty statistics.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-stone-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-red-700">$1,000–$1,500/day</p>
                  <p className="text-sm text-stone-600 mt-1">American ex-Special Forces contractor</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-stone-700">$3,500+/mo</p>
                  <p className="text-sm text-stone-600 mt-1">US soldier base pay + benefits + VA</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-stone-400">$800–$2,000/mo</p>
                  <p className="text-sm text-stone-600 mt-1">Ugandan/Nepalese/Colombian contractor</p>
                </div>
              </div>
            </div>
          </section>

          {/* No accountability */}
          <section className="bg-stone-900 text-white p-8 md:p-12 rounded-xl mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6">
              The Accountability Gap
            </h2>
            <div className="space-y-4 text-stone-300 leading-relaxed">
              <p>
                Private military contractors exist in a legal gray zone designed to shield them from consequences:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold shrink-0">1.</span>
                  <span><strong className="text-white">Not subject to the UCMJ.</strong> The Uniform Code of Military Justice governs soldiers. Contractors are civilians, so military law doesn&apos;t apply (except under MEJA, which is rarely used).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold shrink-0">2.</span>
                  <span><strong className="text-white">CPA Order 17.</strong> In 2004, Coalition Provisional Authority Order 17 granted contractors immunity from Iraqi law. They literally could not be prosecuted in the country where they operated.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold shrink-0">3.</span>
                  <span><strong className="text-white">Jurisdiction problems.</strong> US federal prosecutors must prove jurisdiction under MEJA (Military Extraterritorial Jurisdiction Act). Most cases are declined. Of hundreds of documented incidents, fewer than 12 contractors have ever been federally prosecuted.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold shrink-0">4.</span>
                  <span><strong className="text-white">Sovereign immunity claims.</strong> Companies argue they were acting as agents of the US government and therefore share sovereign immunity. Courts have sometimes agreed.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold shrink-0">5.</span>
                  <span><strong className="text-white">Classification.</strong> Many contractor operations are classified, making oversight by Congress or the public nearly impossible.</span>
                </li>
              </ul>
              <p className="text-white font-semibold text-lg mt-6">
                The result: a workforce of 190,000 people authorized to carry weapons and use lethal force,
                with effectively no legal accountability to anyone.
              </p>
            </div>
          </section>

          {/* Company profiles */}
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900 mb-8">
            Company Profiles
          </h2>

          {companies.map((co, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 md:p-8 mb-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900 mb-1">
                {co.name}
              </h3>
              {co.formerNames && (
                <p className="text-sm text-stone-500 mb-2">
                  Formerly: {co.formerNames.join(' → ')}
                </p>
              )}
              <div className="flex flex-wrap gap-4 text-sm text-stone-600 mb-4">
                <span>Founded: {co.founded}</span>
                <span>·</span>
                <span>Revenue: {co.revenue}</span>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-red-700 text-sm uppercase tracking-wide mb-2">Notable Incidents</h4>
                <ul className="space-y-3">
                  {co.notableIncidents.map((incident, j) => (
                    <li key={j} className="flex gap-2 text-sm text-stone-700 leading-relaxed">
                      <span className="text-red-600 mt-1 shrink-0">▸</span>
                      <span>{incident}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-stone-800 text-sm uppercase tracking-wide mb-2">Key Facts</h4>
                <ul className="space-y-2">
                  {co.keyFacts.map((fact, j) => (
                    <li key={j} className="flex gap-2 text-sm text-stone-600">
                      <span className="text-stone-400 shrink-0">·</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 p-4 rounded-lg">
                <h4 className="font-semibold text-stone-800 text-sm mb-1">🔄 Revolving Door</h4>
                <p className="text-sm text-stone-700">{co.revolvingDoor}</p>
              </div>
            </div>
          ))}

          {/* Incident timeline */}
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900 mb-8">
              Incident Timeline
            </h2>
            <IncidentTimelineChart />
            <div className="mt-8 space-y-0">
              {incidents.map((inc, i) => (
                <div key={i} className="flex gap-4 pb-6 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-red-600 shrink-0 mt-1.5" />
                    {i < incidents.length - 1 && <div className="w-0.5 flex-1 bg-stone-300 mt-1" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-sm font-bold text-red-700">{inc.year}</p>
                    <p className="font-semibold text-stone-900">{inc.event}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{inc.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Revolving Door */}
          <section className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 md:p-8 mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900 mb-4">
              The Revolving Door: Pentagon → Boardroom → Congress
            </h2>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                The pipeline is well-worn: a general retires from the Pentagon, joins a contractor&apos;s board,
                and uses their connections to lobby Congress for more contracts. This isn&apos;t corruption in the
                traditional sense — it&apos;s the system working as designed.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-stone-900 mb-2">The Path</h4>
                  <div className="space-y-2 text-sm">
                    <p>1. <strong>Military career</strong> — build relationships with defense industry</p>
                    <p>2. <strong>Senior Pentagon role</strong> — influence procurement decisions</p>
                    <p>3. <strong>Retirement</strong> — 1-year cooling-off period (easily circumvented)</p>
                    <p>4. <strong>Contractor board seat</strong> — $200K–$500K/year for attending meetings</p>
                    <p>5. <strong>Lobbying</strong> — use former colleagues to secure contracts</p>
                  </div>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-stone-900 mb-2">Notable Examples</h4>
                  <ul className="space-y-2 text-sm">
                    <li>· <strong>Dick Cheney:</strong> Halliburton CEO → VP → $7B no-bid contract to Halliburton</li>
                    <li>· <strong>James Mattis:</strong> CENTCOM commander → General Dynamics board → SecDef → returned to board</li>
                    <li>· <strong>Lloyd Austin:</strong> Raytheon board member → Secretary of Defense (2021)</li>
                    <li>· <strong>Cofer Black:</strong> CIA counterterrorism → Blackwater VP</li>
                    <li>· <strong>Keith Alexander:</strong> NSA Director → cybersecurity contractor ($600K/mo consulting)</li>
                  </ul>
                </div>
              </div>
              <p>
                A 2021 POGO (Project on Government Oversight) study found that <strong>over 1,700 former senior
                government officials</strong> had gone to work for the top 20 defense contractors. The line between
                the government that awards contracts and the companies that receive them has effectively dissolved.
              </p>
            </div>
          </section>

          {/* Iran 2026 section */}
          <section className="bg-red-50 border border-red-200 rounded-xl p-6 md:p-8 mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-red-900 mb-4">
              Iran 2026: The Contractors Return
            </h2>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                The current conflict with Iran has seen a massive resurgence in contractor deployment. An estimated
                <strong> 95,000 private contractors</strong> are now operating in the Gulf theater, providing:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-red-600">▸</span> Base security at US installations in Bahrain, Qatar, UAE, and Kuwait</li>
                <li className="flex gap-2"><span className="text-red-600">▸</span> Logistics and supply chain management for deployed forces</li>
                <li className="flex gap-2"><span className="text-red-600">▸</span> Intelligence analysis and signals intelligence support</li>
                <li className="flex gap-2"><span className="text-red-600">▸</span> Drone maintenance and operation support (General Atomics contractors)</li>
                <li className="flex gap-2"><span className="text-red-600">▸</span> Cybersecurity operations and electronic warfare support</li>
                <li className="flex gap-2"><span className="text-red-600">▸</span> Maritime security in the Strait of Hormuz</li>
              </ul>
              <p>
                The same companies that profited from Iraq and Afghanistan — now rebranded and reorganized — are
                collecting billions in new contracts. The same accountability gaps remain. The lessons of Nisour Square
                and Abu Ghraib have produced reforms on paper but little change in practice.
              </p>
            </div>
          </section>

          {/* Sources */}
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900 mb-4">
              Sources
            </h2>
            <ul className="space-y-2 text-sm text-stone-600">
              <li>· Congressional Research Service, &ldquo;Department of Defense Contractor and Troop Levels in Afghanistan and Iraq&rdquo; (multiple editions)</li>
              <li>· CENTCOM quarterly contractor census reports (2008–present)</li>
              <li>· Project on Government Oversight (POGO), contractor oversight reports</li>
              <li>· Department of Labor, Defense Base Act statistics</li>
              <li>· Commission on Wartime Contracting, &ldquo;Transforming Wartime Contracting&rdquo; (2011)</li>
              <li>· Jeremy Scahill, &ldquo;Blackwater: The Rise of the World&apos;s Most Powerful Mercenary Army&rdquo; (2007)</li>
              <li>· Senate Armed Services Committee hearings on contractor oversight</li>
              <li>· FBI investigation and DOJ prosecution records, Nisour Square case</li>
              <li>· Taguba Report and Fay Report on Abu Ghraib abuse (2004)</li>
              <li>· UN Working Group on Mercenaries reports</li>
            </ul>
          </section>

          {/* Related */}
          <section className="bg-stone-100 p-8 rounded-xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900 mb-4">
              Related Pages
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/contractors" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">Defense Contractors</h3>
                <p className="text-sm text-stone-600 mt-1">The corporations that profit from war</p>
              </Link>
              <Link href="/the-other-side" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">The Other Side</h3>
                <p className="text-sm text-stone-600 mt-1">Voices from the countries we bombed</p>
              </Link>
              <Link href="/allied-costs" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">Allied Costs</h3>
                <p className="text-sm text-stone-600 mt-1">The bill for America&apos;s allies</p>
              </Link>
            </div>
          </section>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
