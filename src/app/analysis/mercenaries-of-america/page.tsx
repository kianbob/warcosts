import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Mercenaries of America: $160B to Contractors',
  description: '$160B+ to private military since 2001. Contractor deaths exceeded military deaths in some theaters. Zero accountability.',
  openGraph: {
    title: 'Mercenaries of America: The Privatization of War',
    description: '$160B+ to private military since 2001. Contractor deaths exceeding military in some theaters. Zero accountability.',
    url: 'https://www.warcosts.org/analysis/mercenaries-of-america',
    type: 'article',
  },
}

const keyStats = [
  { stat: '$160B+', label: 'Estimated spending on private military/security contractors since 9/11', source: 'Congressional Research Service' },
  { stat: '8,000+', label: 'Contractor deaths in Iraq and Afghanistan (2001–2021)', source: 'Department of Labor OWCP' },
  { stat: '245,000', label: 'Peak number of private contractors deployed in Iraq and Afghanistan simultaneously', source: 'CRS Report R44116' },
  { stat: '1:1', label: 'Ratio of contractors to uniformed troops at peak deployment in Iraq', source: 'DoD CENTCOM quarterly reports' },
  { stat: '0', label: 'Contractors convicted in US courts for killing Iraqi or Afghan civilians before 2008', source: 'DoJ records' },
  { stat: '$1,222/day', label: 'Average daily cost of a private security operator in Iraq — vs. $190/day for a soldier', source: 'CBO analysis, 2008' },
]

const contractorTimeline = [
  { year: '1995', event: 'MPRI trains Croatian army before Operation Storm — 200,000 Serbs displaced. Pentagon outsourcing model is born.', cost: '$400M contract' },
  { year: '1997', event: 'Erik Prince founds Blackwater USA in Moyock, North Carolina. A SEAL-turned-heir with family ties to Republican politics and the DeVos fortune.', cost: 'Private funding' },
  { year: '2001', event: 'DynCorp employees in Bosnia caught running a sex trafficking ring using minor girls. Internal whistleblower fired. No criminal charges filed.', cost: '$2B DynCorp contract' },
  { year: '2003', event: 'Invasion of Iraq. Pentagon deploys unprecedented numbers of contractors. By mid-2003, there are nearly as many contractors as troops.', cost: '$138B first-year war cost' },
  { year: '2004', event: 'Abu Ghraib prison abuse scandal. CACI International and Titan Corp interrogators involved. Military personnel prosecuted; contractors walked free.', cost: '$66M CACI contract' },
  { year: '2004', event: 'Four Blackwater contractors killed and mutilated in Fallujah — triggering the devastating First Battle of Fallujah (600+ Iraqi civilians killed).', cost: 'Political cost: incalculable' },
  { year: '2007', event: 'Nisour Square massacre: Blackwater guards kill 17 unarmed Iraqi civilians including two children. State Department initially covers it up.', cost: '$1B+ Blackwater contracts at stake' },
  { year: '2009', event: 'Blackwater rebrands to "Xe Services" after Nisour Square backlash. Contracts continue under new name.', cost: 'Contracts continued' },
  { year: '2011', event: 'Xe rebrands again to "Academi." Same company, same leadership network, third name in four years.', cost: 'Still receiving contracts' },
  { year: '2014', event: 'Four Blackwater guards finally convicted for Nisour Square — 7 years later. One gets life. Trump later pardons all four in 2020.', cost: '$0 corporate liability' },
  { year: '2020', event: 'Trump pardons all four Nisour Square Blackwater contractors on December 22. Iraqi government calls it an insult to the rule of law.', cost: 'Zero accountability' },
  { year: '2021', event: 'US withdrawal from Afghanistan. Thousands of contractors left scrambling. No organized evacuation for private workers.', cost: 'Unknown contractor deaths' },
]

const majorContractors = [
  { name: 'Blackwater / Xe / Academi', revenue: '$2B+ (2003–2011)', employees: '~20,000 deployed', speciality: 'Armed security, diplomatic protection, special operations', controversy: 'Nisour Square massacre (17 civilians killed), arms smuggling investigations, CIA assassination program participation' },
  { name: 'KBR (Kellogg, Brown & Root)', revenue: '$39.5B (2003–2013)', employees: '~50,000 at peak', speciality: 'Base construction, logistics, food services (LOGCAP contract)', controversy: 'Electrocuted soldiers in faulty showers (at least 18 deaths), $553M in overcharges, contaminated water supply at Camp Ramadi' },
  { name: 'DynCorp International', revenue: '$25B+ (2001–2021)', employees: '~14,000', speciality: 'Police training, aviation, base operations, drug eradication', controversy: 'Bosnia sex trafficking scandal, $1B Afghan police training failure, overbilling on multiple contracts' },
  { name: 'CACI International', revenue: '$6.4B (defense segment, 2001–2021)', employees: '~22,000', speciality: 'Intelligence analysis, interrogation, IT services', controversy: 'Abu Ghraib interrogators, no employees prosecuted despite involvement in torture' },
  { name: 'Triple Canopy (now Constellis)', revenue: '$4B+ (2003–2021)', employees: '~10,000', speciality: 'Armed security, embassy protection, base security', controversy: 'Employees filmed shooting at civilian cars for sport in Iraq. Company fined but kept contracts.' },
  { name: 'L3 Technologies (now L3Harris)', revenue: '$12B+ (defense, 2001–2021)', employees: '~47,000', speciality: 'Intelligence, surveillance, translation, electronic warfare', controversy: 'Provided translators who were later implicated in intelligence failures and detainee abuse' },
  { name: 'Booz Allen Hamilton', revenue: '$8B+ (defense/intel, 2001–2021)', employees: '~29,000', speciality: 'Intelligence analysis, cybersecurity, consulting', controversy: 'Edward Snowden was a Booz Allen employee when he leaked NSA surveillance programs. Company kept all contracts.' },
]

const contractorVsMilitary = [
  { theater: 'Iraq (2008)', contractors: 163590, military: 152275, ratio: '1.07:1', contractorDeaths: 1350, militaryDeaths: 314 },
  { theater: 'Afghanistan (2012)', contractors: 117227, military: 68000, ratio: '1.72:1', contractorDeaths: 289, militaryDeaths: 310 },
  { theater: 'Afghanistan (2016)', contractors: 26922, military: 9800, ratio: '2.75:1', contractorDeaths: 28, militaryDeaths: 9 },
  { theater: 'Afghanistan (2019)', contractors: 53000, military: 14000, ratio: '3.79:1', contractorDeaths: 22, militaryDeaths: 21 },
  { theater: 'Iraq + Afghan combined (2001–2021)', contractors: 0, military: 0, ratio: 'N/A', contractorDeaths: 8000, militaryDeaths: 7057 },
]

const accountabilityGaps = [
  { gap: 'Military Extraterritorial Jurisdiction Act (MEJA)', detail: 'Passed in 2000 to allow prosecution of contractors overseas. In 20+ years, fewer than a dozen cases have been brought. The DOJ has shown virtually no interest in enforcing it.', impact: 'Contractors operate in a legal gray zone where US law rarely reaches and host country law is unenforceable.' },
  { gap: 'Uniform Code of Military Justice (UCMJ)', detail: 'Does not apply to civilian contractors. A 2006 amendment theoretically extended UCMJ to contractors "in contingency operations," but it has never been tested in court.', impact: 'Soldiers face courts-martial for misconduct. Contractors face nothing.' },
  { gap: 'Status of Forces Agreements (SOFAs)', detail: 'The US negotiated immunity from local prosecution for all US personnel, including contractors. CPA Order 17 in Iraq granted blanket immunity from Iraqi law.', impact: 'Iraqi courts could not prosecute Blackwater guards who killed Iraqi civilians. Sovereignty was meaningless.' },
  { gap: 'Lack of Congressional Oversight', detail: 'Contractor numbers, casualties, and costs are not regularly reported to Congress. The DoD has repeatedly failed to maintain accurate counts of deployed contractors.', impact: 'Congress literally does not know how many contractors are deployed, how many have died, or how much they cost.' },
  { gap: 'Whistleblower Retaliation', detail: 'Contractor employees who report fraud or abuse are routinely fired. DynCorp employee Ben Johnston was terminated after reporting sex trafficking in Bosnia. Others have faced worse.', impact: 'The few accountability mechanisms that exist are undermined by retaliation against those who use them.' },
  { gap: 'Corporate Name Changes', detail: 'Blackwater became Xe became Academi became part of Constellis Group. Each rebrand distances the company from its past while maintaining the same contracts and networks.', impact: 'Corporate rebranding is used as a substitute for accountability. Same people, same practices, new letterhead.' },
]

const deathsByYear = [
  { year: 2001, contractor: 0, military: 12, theater: 'Afghanistan' },
  { year: 2002, contractor: 17, military: 49, theater: 'Afghanistan' },
  { year: 2003, contractor: 116, military: 534, theater: 'Iraq + Afghanistan' },
  { year: 2004, contractor: 348, military: 900, theater: 'Iraq + Afghanistan' },
  { year: 2005, contractor: 428, military: 946, theater: 'Iraq + Afghanistan' },
  { year: 2006, contractor: 549, military: 920, theater: 'Iraq + Afghanistan' },
  { year: 2007, contractor: 730, military: 1021, theater: 'Iraq + Afghanistan' },
  { year: 2008, contractor: 538, military: 469, theater: 'Iraq + Afghanistan' },
  { year: 2009, contractor: 498, military: 466, theater: 'Iraq + Afghanistan' },
  { year: 2010, contractor: 573, military: 559, theater: 'Iraq + Afghanistan' },
  { year: 2011, contractor: 430, military: 418, theater: 'Iraq + Afghanistan' },
  { year: 2012, contractor: 289, military: 310, theater: 'Iraq + Afghanistan' },
  { year: 2013, contractor: 213, military: 161, theater: 'Iraq + Afghanistan' },
  { year: 2014, contractor: 176, military: 93, theater: 'Iraq + Afghanistan' },
  { year: 2015, contractor: 129, military: 41, theater: 'Iraq + Afghanistan' },
  { year: 2016, contractor: 98, military: 28, theater: 'Iraq + Afghanistan' },
  { year: 2017, contractor: 74, military: 37, theater: 'Iraq + Afghanistan + Syria' },
  { year: 2018, contractor: 57, military: 35, theater: 'Iraq + Afghanistan + Syria' },
  { year: 2019, contractor: 44, military: 42, theater: 'Iraq + Afghanistan + Syria' },
  { year: 2020, contractor: 36, military: 23, theater: 'Iraq + Afghanistan + Syria' },
  { year: 2021, contractor: 29, military: 13, theater: 'Afghanistan withdrawal' },
]

const nisourSquareDetail = [
  { time: '12:08 PM', event: 'Blackwater convoy (callsign Raven 23) enters Nisour Square traffic circle in armored vehicles. They are not under fire.' },
  { time: '12:10 PM', event: 'Without provocation, Blackwater guards open fire on a white Kia sedan. Dr. Ibrahim Abid (medical student) and his mother are killed instantly.' },
  { time: '12:12 PM', event: 'Guards continue firing into crowded traffic circle with M4 rifles, M240 machine guns, and an MK19 grenade launcher. Civilians cannot flee.' },
  { time: '12:15 PM', event: 'Ali Kinani, age 9, is shot in the head while sitting in his father&apos;s car. He dies later that day.' },
  { time: '12:18 PM', event: 'An Iraqi traffic police officer waves his arms and screams at Blackwater guards to stop. They continue firing.' },
  { time: '12:20 PM', event: 'Firing stops after approximately 12 minutes. 17 Iraqi civilians are dead. 20+ are wounded. No evidence of hostile fire is ever found.' },
  { time: 'After', event: 'State Department Diplomatic Security initially reports "a justified escalation of force." Internal Blackwater communications show guards knew they had fired on unarmed civilians.' },
  { time: '7 years', event: 'It takes until 2014 for a US court to convict four guards. Nicholas Slatten receives a life sentence. Three others get 30 years.' },
  { time: '2020', event: 'President Trump pardons all four Blackwater guards on December 22, 2020. Iraqi Prime Minister calls it "a blow to justice and humanity."' },
]

const costComparison = [
  { item: 'Annual salary of US Army E-5 Sergeant', cost: '$36,000', notes: 'Base pay. With benefits: ~$72,000 total compensation.' },
  { item: 'Annual cost of Blackwater security operator', cost: '$445,000', notes: 'Billed rate to State Department. Operator received ~$150K; rest went to Blackwater.' },
  { item: 'Daily cost of Army soldier in Iraq', cost: '$190', notes: 'All-in cost including equipment, food, housing, benefits.' },
  { item: 'Daily cost of private security contractor', cost: '$1,222', notes: 'CBO estimate. 6.4x the cost of a soldier for equivalent work.' },
  { item: 'Annual KBR logistics contract (LOGCAP)', cost: '$5.8B', notes: 'Largest single contract in Iraq. Cost-plus structure incentivized waste.' },
  { item: 'Cost of feeding one soldier per day (KBR)', cost: '$28–45', notes: 'KBR charged $28 per meal. Pentagon found $100M in overbilling in food services alone.' },
  { item: 'Blackwater armored vehicle', cost: '$320,000', notes: 'Billed to US government. Comparable military MRAP: $500K but reusable and maintained.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mercenaries of America: $160 Billion to Private Military Contractors Since 9/11',
  description: 'From Blackwater to Academi, the privatization of American warfare created a shadow military with more personnel than some NATO armies, virtually zero accountability, and a $160 billion price tag.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2025-03-15',
  url: 'https://www.warcosts.org/analysis/mercenaries-of-america',
}

export default function MercenariesOfAmerica() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumbs items={[
        
        { label: 'Analysis', href: '/analysis' },
        { label: 'Mercenaries of America' },
      ]} />

      {/* Dark Hero Section */}
      <section className="bg-stone-900 text-white rounded-lg p-8 mb-8 -mx-4 md:mx-0">
        <div className="max-w-3xl">
          <span className="text-red-400 text-sm font-bold uppercase tracking-wider">Analysis</span>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-2 mb-4">
            Mercenaries of America
          </h1>
          <p className="text-stone-300 text-xl mb-6">
            The United States has spent over $160 billion on private military contractors since September 11, 2001. 
            At peak deployment, there were more contractors than troops in both Iraq and Afghanistan. Over 8,000 
            contractors have died — more than the number of US service members killed. Almost no one has been held 
            accountable for anything.
          </p>
          <p className="text-stone-400 text-base">
            The privatization of American warfare created a shadow army that fights, kills, and dies outside the 
            chain of command, beyond the reach of military justice, and invisible to the American public. This is 
            the story of how the United States outsourced its wars — and lost control of them.
          </p>
        </div>
      </section>

      <ShareButtons title="Mercenaries of America: $160B to Private Military Contractors" />

      {/* Key Statistics */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          By the Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyStats.map((item) => (
            <div key={item.label} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="text-3xl font-bold text-red-600 mb-1">{item.stat}</div>
              <p className="text-stone-700 text-sm mb-1">{item.label}</p>
              <p className="text-stone-400 text-xs">{item.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Rise of Private War */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Rise of Private War: A Timeline
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The privatization of American warfare didn&apos;t begin with 9/11 — but 9/11 turned it into a 
          trillion-dollar industry. The Pentagon, facing two simultaneous wars with an all-volunteer force 
          that was too small, turned to private companies to fill every gap: security, logistics, intelligence, 
          interrogation, base construction, food services, and even combat operations. What started as a 
          stopgap became a permanent feature of American war-making.
        </p>

        <div className="space-y-4">
          {contractorTimeline.map((item) => (
            <div key={item.year + item.event.slice(0, 20)} className="flex gap-4 bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex-shrink-0">
                <span className="text-red-600 font-bold text-lg">{item.year}</span>
                <div className="text-stone-400 text-xs mt-1">{item.cost}</div>
              </div>
              <p className="text-stone-700 text-sm">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Major Contractors */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Major Players: Who Got Paid
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          A handful of companies captured the lion&apos;s share of private military spending. Many were 
          founded or led by former military and intelligence officials who used their government connections 
          to secure contracts worth billions. The revolving door between the Pentagon and these companies 
          spun so fast it created its own weather system.
        </p>

        <div className="space-y-4">
          {majorContractors.map((c) => (
            <div key={c.name} className="bg-white border border-stone-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-bold text-stone-900 text-lg">{c.name}</h3>
                <span className="text-red-600 font-bold">{c.revenue}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-3">
                <div><span className="text-stone-500">Employees:</span> <span className="text-stone-700">{c.employees}</span></div>
                <div><span className="text-stone-500">Specialty:</span> <span className="text-stone-700">{c.speciality}</span></div>
              </div>
              <p className="text-stone-600 text-sm"><span className="font-semibold text-stone-800">Controversy:</span> {c.controversy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contractors vs. Military */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Shadow Army: Contractors vs. Troops
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          In every major US military operation since 2003, private contractors have equaled or outnumbered 
          uniformed troops. By the end of the Afghanistan war, the ratio was nearly 4 contractors for every 
          1 soldier. This isn&apos;t an army with contractor support — it&apos;s a contractor force with 
          military support.
        </p>

        <div className="space-y-3">
          {contractorVsMilitary.map((row) => (
            <div key={row.theater} className="bg-white border border-stone-200 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 mb-2">{row.theater}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                {row.contractors > 0 && (
                  <>
                    <div>
                      <span className="text-stone-500 block">Contractors</span>
                      <span className="text-stone-900 font-bold">{row.contractors.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Military</span>
                      <span className="text-stone-900 font-bold">{row.military.toLocaleString()}</span>
                    </div>
                  </>
                )}
                <div>
                  <span className="text-stone-500 block">Contractor Deaths</span>
                  <span className="text-red-600 font-bold">{row.contractorDeaths.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Military Deaths</span>
                  <span className="text-red-600 font-bold">{row.militaryDeaths.toLocaleString()}</span>
                </div>
              </div>
              {row.ratio !== 'N/A' && (
                <p className="text-stone-500 text-xs mt-2">Contractor-to-military ratio: {row.ratio}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Deaths by Year */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Invisible Dead: Contractor Casualties by Year
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          When a US soldier dies, flags are lowered. The President mentions it. The hometown newspaper runs 
          a story. When a contractor dies, nothing happens. No flag ceremony. No Pentagon press release. No 
          entry in the Congressional Record. Their deaths are tracked — when they&apos;re tracked at all — by 
          the Department of Labor&apos;s workers&apos; compensation program, the same system that handles 
          workplace injuries at factories and offices.
        </p>

        <div className="overflow-x-auto">
          <div className="space-y-2">
            {deathsByYear.map((row) => (
              <div key={row.year} className="flex items-center gap-3 text-sm">
                <span className="text-stone-900 font-bold w-12">{row.year}</span>
                <div className="flex-1 flex items-center gap-2">
                  <div className="bg-red-600 rounded h-4" style={{ width: `${Math.max(row.contractor / 8, 1)}%` }} />
                  <span className="text-red-600 font-bold w-12 text-right">{row.contractor}</span>
                  <span className="text-stone-400 text-xs">contractors</span>
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <div className="bg-stone-600 rounded h-4" style={{ width: `${Math.max(row.military / 12, 1)}%` }} />
                  <span className="text-stone-700 font-bold w-12 text-right">{row.military}</span>
                  <span className="text-stone-400 text-xs">military</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-stone-500 text-sm mt-4">
          Note: From 2008 onward, contractor deaths frequently exceeded military deaths. The total contractor 
          death toll (8,000+) exceeds total US military deaths (7,057) across both wars combined.
        </p>
      </section>

      {/* Nisour Square */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          September 16, 2007: The Nisour Square Massacre
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The single event that came to define everything wrong with private military contracting happened 
          on a sunny Sunday morning in Baghdad. It lasted twelve minutes. It killed seventeen people. 
          It took seven years to produce a conviction — and three years after that, a presidential pardon 
          erased even that small measure of justice.
        </p>

        <div className="space-y-3">
          {nisourSquareDetail.map((item) => (
            <div key={item.time} className="flex gap-4 bg-white border border-stone-200 rounded-lg p-4">
              <span className="text-red-600 font-bold text-sm w-20 flex-shrink-0">{item.time}</span>
              <p className="text-stone-700 text-sm">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Price Tag: Contractors vs. Soldiers
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The Pentagon&apos;s rationale for contractors was that they would be cheaper and more flexible than 
          maintaining a larger standing army. The opposite turned out to be true. The Congressional Budget Office 
          found that private security contractors cost 6.4 times more per person than uniformed military personnel. 
          The &ldquo;cost savings&rdquo; of privatization were a myth from the beginning.
        </p>

        <div className="space-y-3">
          {costComparison.map((item) => (
            <div key={item.item} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-semibold text-stone-900 text-sm">{item.item}</h3>
                <span className="text-red-600 font-bold">{item.cost}</span>
              </div>
              <p className="text-stone-500 text-xs">{item.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accountability Gaps */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Accountability Void
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Private military contractors operate in a legal no-man&apos;s-land. They are not subject to military 
          law. They are largely immune from host-country law. US civilian courts have jurisdiction in theory but 
          almost never prosecute. The result is a fighting force of hundreds of thousands that operates with 
          less oversight than a local police department.
        </p>

        <div className="space-y-4">
          {accountabilityGaps.map((item) => (
            <div key={item.gap} className="bg-white border border-stone-200 rounded-lg p-5">
              <h3 className="font-bold text-stone-900 mb-2">{item.gap}</h3>
              <p className="text-stone-700 text-sm mb-2">{item.detail}</p>
              <p className="text-red-700 text-sm font-medium">{item.impact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KBR Section */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          KBR: The Company That Electrocuted American Soldiers
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Kellogg, Brown &amp; Root — a former Halliburton subsidiary that Dick Cheney helped build into a 
          defense behemoth during his time as CEO — received the single largest contract in Iraq: LOGCAP III, 
          worth $39.5 billion. KBR built bases, ran dining facilities, managed water treatment, and handled 
          logistics for the entire theater.
        </p>
        <p className="text-stone-700 text-lg mb-6">
          They also killed American soldiers through negligence. Staff Sergeant Ryan Maseth, a decorated 
          Green Beret, was electrocuted in his shower at a KBR-maintained base in Baghdad in January 2008. 
          The DoD Inspector General found that KBR had been warned repeatedly about faulty electrical wiring 
          and done nothing. At least 18 service members died from electrocution in KBR-maintained facilities.
        </p>
        <p className="text-stone-700 text-lg mb-6">
          KBR was also caught serving contaminated water to troops at Camp Ramadi, overbilling by hundreds 
          of millions of dollars, and maintaining a corporate culture where cost overruns were features, not 
          bugs — the cost-plus contract structure meant that the more KBR spent, the more profit it made.
        </p>
        <div className="bg-stone-100 border border-stone-200 rounded-lg p-5">
          <h3 className="font-bold text-stone-900 mb-2">The Cost-Plus Problem</h3>
          <p className="text-stone-700 text-sm mb-2">
            Under cost-plus contracts, the government reimburses all expenses plus a guaranteed profit 
            margin (typically 1–7%). This means there is zero incentive to reduce costs and every incentive 
            to inflate them. If KBR spent $1 billion on base construction, it got $1 billion back plus 
            $50–70 million in profit. If it spent $2 billion on the same work, it got $2 billion back plus 
            $100–140 million in profit.
          </p>
          <p className="text-stone-700 text-sm">
            The Pentagon&apos;s own auditors found $553 million in questioned costs on KBR contracts in Iraq. 
            The company was never debarred, never lost a contract, and continued receiving billions in new awards.
          </p>
        </div>
      </section>

      {/* The DynCorp Scandal */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          DynCorp: Sex Trafficking and Billion-Dollar Failures
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          In 2001, DynCorp employees working in Bosnia under a State Department contract were discovered to 
          be participating in a sex trafficking ring involving minors. Employees purchased women and girls, 
          some as young as 12, from local traffickers. Company supervisors were aware and participated.
        </p>
        <p className="text-stone-700 text-lg mb-6">
          Ben Johnston, a DynCorp aircraft mechanic, reported the trafficking to his supervisors and then to 
          Army Criminal Investigation Command. He was fired. DynCorp did not report the crimes to authorities. 
          No DynCorp employee was ever criminally charged. The company settled Johnston&apos;s wrongful 
          termination lawsuit and continued receiving government contracts worth billions.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          DynCorp later received over $1 billion to train the Afghan National Police — a program that the 
          Special Inspector General for Afghanistan Reconstruction (SIGAR) called a &ldquo;total failure.&rdquo; 
          Many of the police trainees were illiterate, drug-addicted, or never existed at all (ghost soldiers 
          whose pay was collected by corrupt Afghan officials). The program continued for years after it was 
          known to be worthless.
        </p>
      </section>

      {/* Erik Prince */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Erik Prince: The Mercenary Mogul
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Erik Prince, the founder of Blackwater, is the son of Edgar Prince, a Michigan auto parts billionaire, 
          and the brother of Betsy DeVos, who served as Donald Trump&apos;s Secretary of Education. A former 
          Navy SEAL, Prince founded Blackwater in 1997 with family money and turned it into the most notorious 
          private military company in American history.
        </p>
        <p className="text-stone-700 text-lg mb-6">
          After the Nisour Square massacre forced Blackwater to rebrand (twice), Prince moved to the United 
          Arab Emirates, where he built a private army for the crown prince of Abu Dhabi — a force composed 
          of Colombian and South African mercenaries trained to suppress internal dissent. He later attempted 
          to build a private air force for hire and proposed replacing US troops in Afghanistan with a private 
          force under his command.
        </p>
        <p className="text-stone-700 text-lg mb-6">
          In 2017, Prince met with a Russian intermediary at a Seychelles resort in what was later investigated 
          as a potential back channel between the Trump transition team and Moscow. Prince told Congress he was 
          there for a &ldquo;chance meeting.&rdquo; Multiple witnesses contradicted him. He was never charged 
          with lying to Congress.
        </p>
        <p className="text-stone-700 text-lg">
          Prince has also been investigated for potential violations of arms export laws, money laundering, and 
          his involvement in a plan to infiltrate progressive organizations on behalf of Project Veritas. In 
          every case, no charges were filed. Erik Prince is perhaps the perfect symbol of the private military 
          industry: wealthy, connected, and untouchable.
        </p>
      </section>

      {/* The Libertarian Case */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">
            The Case Against Mercenary Warfare
          </h2>
          <p className="text-stone-300 mb-4">
            The free market works when consumers can choose, when prices are transparent, and when bad actors 
            face consequences. Private military contracting fails every one of these tests. The &ldquo;consumer&rdquo; 
            is the government, spending other people&apos;s money. Prices are classified, cost-plus, or both. 
            And bad actors face no consequences — not prosecution, not debarment, not even loss of future contracts.
          </p>
          <p className="text-stone-300 mb-4">
            This is not the free market. This is crony capitalism in body armor. The same companies that 
            electrocuted soldiers, trafficked children, and massacred civilians continue to receive billions 
            in government contracts because they employ the right lobbyists and donate to the right campaigns. 
            The revolving door between the Pentagon and the contracting industry ensures that the people awarding 
            contracts will one day work for the companies receiving them.
          </p>
          <p className="text-stone-300 mb-4">
            The Founders were deeply suspicious of standing armies. They would have been horrified by a private 
            one — an armed force that answers not to the Constitution, not to Congress, not to the people, but 
            to a corporate board of directors and quarterly earnings reports. The framers understood that the 
            power to wage war must be subject to democratic accountability. Private military companies exist 
            precisely to evade that accountability.
          </p>
          <p className="text-stone-300">
            Over 8,000 American contractors have died in wars that most Americans cannot find on a map, fighting 
            for companies that most Americans have never heard of, under rules of engagement that no one can 
            explain. Their names do not appear on any memorial. Their deaths do not count toward the official 
            toll. They are the invisible dead of America&apos;s invisible wars — and that invisibility is not 
            an accident. It is the entire point.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>Congressional Research Service, &ldquo;Department of Defense Contractor and Troop Levels in Afghanistan and Iraq&rdquo; (R44116)</li>
          <li>Congressional Budget Office, &ldquo;Contractors&apos; Support of U.S. Operations in Iraq&rdquo; (2008)</li>
          <li>Department of Labor, Office of Workers&apos; Compensation Programs — Defense Base Act data</li>
          <li>Special Inspector General for Iraq Reconstruction (SIGIR), Final Report (2013)</li>
          <li>Special Inspector General for Afghanistan Reconstruction (SIGAR), Quarterly Reports</li>
          <li>Jeremy Scahill, <em>Blackwater: The Rise of the World&apos;s Most Powerful Mercenary Army</em> (Nation Books, 2007)</li>
          <li>Commission on Wartime Contracting in Iraq and Afghanistan, Final Report (2011)</li>
          <li>DoD Inspector General, Reports on Contractor Oversight</li>
          <li>US District Court for the District of Columbia, <em>United States v. Slatten et al.</em> (Nisour Square case)</li>
          <li>Senate Armed Services Committee, &ldquo;Inquiry into the Role and Oversight of Private Security Contractors in Afghanistan&rdquo; (2010)</li>
          <li>Pratap Chatterjee, <em>Halliburton&apos;s Army</em> (Nation Books, 2009)</li>
          <li>DoD CENTCOM, Quarterly Contractor Census Reports (2008–2021)</li>
        </ul>
      </section>

      <RelatedArticles articles={[
        { slug: 'private-military', title: 'The Private Military Industry', desc: 'How the Pentagon outsourced war to corporations.' },
        { slug: 'war-profiteering', title: 'War Profiteering', desc: 'Who gets rich when America goes to war.' },
        { slug: 'pentagon-waste', title: 'Pentagon Waste', desc: '6 failed audits. $1.7T F-35. $43M gas station.' },
        { slug: 'lies-that-started-wars', title: 'Lies That Started Wars', desc: 'From the Gulf of Tonkin to Iraqi WMDs.' },
      ]} />

      <BackToTop />
    </div>
  )
}
