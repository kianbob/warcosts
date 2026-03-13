import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { SecrecyCharts } from './SecrecyCharts'

export const metadata: Metadata = {
  title: 'The Black Budget: $23 Trillion in Unaccounted Pentagon Spending',
  description: 'The Pentagon has failed 6 consecutive audits. $23 trillion in unaccounted transactions. A $90B+ black budget. CIA black sites. Classification as a weapon against accountability.',
  openGraph: {
    title: 'The Black Budget: $23 Trillion in Unaccounted Pentagon Spending',
    description: 'Failed audits, black budgets, and $23T in unaccountable spending. The cost of secrecy.',
    url: 'https://www.warcosts.org/analysis/cost-of-secrecy',
  },
}

const auditFailures = [
  { year: 2018, result: 'Failed', finding: 'First-ever comprehensive audit. The Pentagon could not account for $21 trillion in transactions. 1,200 auditors from independent firms found pervasive problems across every branch.', assets: 'Could not account for ~$2.7T in assets', quote: '"We failed the audit. But we never expected to pass it." — Deputy Secretary Patrick Shanahan' },
  { year: 2019, result: 'Failed', finding: 'Second consecutive failure. 25 of 27 reporting entities received disclaimers or adverse opinions. Marine Corps showed slight improvement. Navy and Army remained unauditable.', assets: 'Still could not account for ~$2.9T in assets', quote: 'Progress "incremental" according to GAO.' },
  { year: 2020, result: 'Failed', finding: 'Third failure. COVID disruptions cited as factor but problems were systemic. Missing documentation, unreconciled accounts, unsupported transactions numbering in the millions.', assets: '~$3.1T in unaccountable assets', quote: 'Pentagon Comptroller acknowledged "a long way to go."' },
  { year: 2021, result: 'Failed', finding: 'Fourth failure. Only 7 of 27 entities received clean opinions. The Defense Logistics Agency alone manages $42B in inventory and could not account for a significant portion.', assets: '~$3.5T in unaccountable assets', quote: '"We\'re making progress but not enough." — Pentagon Comptroller Mike McCord' },
  { year: 2022, result: 'Failed', finding: 'Fifth consecutive failure. Slight improvement: 7 entities passed (up from 7). But the largest entities — Army, Navy, Air Force — remained unauditable. $220M spent on audit process alone.', assets: '~$3.5T in unaccountable assets', quote: 'Marine Corps passed for the first time — one bright spot in systemic failure.' },
  { year: 2023, result: 'Failed', finding: 'Sixth consecutive failure. The Pentagon has now spent over $1B on audits it has failed every time. 28 separate reporting entities; only 7 received clean opinions. The department manages $3.8 trillion in assets and could not adequately account for them.', assets: '~$3.8T in unaccountable assets', quote: '"We\'re on an irreversible path toward a clean audit opinion." — Pentagon Comptroller (said every year)' },
]

const blackBudgetItems = [
  { agency: 'CIA (Central Intelligence Agency)', estimatedBudget: '$15.3B (2023 disclosed)', actualBudget: 'Unknown — likely $20B+', role: 'Human intelligence, covert operations, drone strikes, paramilitary activities, rendition, "enhanced interrogation"', notable: 'Operated global network of secret prisons (black sites) for interrogation of terror suspects. Budget was classified until Snowden leaks.' },
  { agency: 'NSA (National Security Agency)', estimatedBudget: '$11.5B (2023 disclosed)', actualBudget: 'Unknown — likely $15B+', role: 'Signals intelligence, global surveillance, cyber operations, code-breaking', notable: 'PRISM program collected data from Google, Facebook, Apple, Microsoft. Bulk collection of ALL American phone metadata. Budget for XKeyscore alone was hundreds of millions.' },
  { agency: 'NRO (National Reconnaissance Office)', estimatedBudget: '$17.4B (2023 disclosed)', actualBudget: 'Unknown', role: 'Spy satellites, overhead reconnaissance', notable: 'Its very existence was classified until 1992 — 31 years after it was created. Operates the most expensive satellites in the world ($1-5B each).' },
  { agency: 'DIA (Defense Intelligence Agency)', estimatedBudget: '$3.7B (estimated)', actualBudget: 'Unknown', role: 'Military intelligence analysis, clandestine operations', notable: 'Grew dramatically post-9/11. Runs clandestine intelligence operations parallel to CIA.' },
  { agency: 'NGA (National Geospatial-Intelligence Agency)', estimatedBudget: '$3.2B (estimated)', actualBudget: 'Unknown', role: 'Geospatial intelligence, mapping, targeting', notable: 'Built a $1.75B headquarters in Springfield, VA — the third-largest government building ever constructed.' },
  { agency: 'Special Access Programs (SAPs)', estimatedBudget: 'Unknown', actualBudget: 'Estimated $30-50B', role: 'Classified weapons development, covert operations, intelligence programs', notable: 'Congress is only partially briefed. Some SAPs are "waived" — meaning even the normal Gang of Eight oversight is bypassed. The existence of these programs is itself classified.' },
  { agency: 'Consolidated Cryptologic Program', estimatedBudget: '$5.2B (estimated)', actualBudget: 'Unknown', role: 'Military signals intelligence across all branches', notable: 'Separate from NSA\'s civilian intelligence budget. The military\'s own signals intelligence apparatus.' },
]

const classificationStats = [
  { stat: '55.2 million', label: 'Classification decisions made in FY2022', source: 'ISOO Annual Report' },
  { stat: '$18.5 billion', label: 'Annual cost of the classification system itself', source: 'ISOO (government estimate)' },
  { stat: '4.2 million', label: 'People with security clearances (includes 1.3M Top Secret)', source: 'ODNI' },
  { stat: '50+ years', label: 'Documents routinely classified beyond their useful life', source: 'Multiple declassification reviews' },
  { stat: '90%', label: 'Of classified documents are over-classified, per multiple government reviews', source: 'Moynihan Commission (1997), subsequent reviews' },
  { stat: '$23.1 trillion', label: 'In unaccounted Pentagon transactions (2008 Reuters/DoD IG)', source: 'Reuters analysis of DoD Inspector General reports' },
]

const blackSites = [
  { location: 'Salt Pit (Afghanistan)', period: '2002–2004', detail: 'CIA "black site" near Kabul. Gul Rahman died of hypothermia after being stripped, chained to a wall in near-freezing temperatures. No one was charged.' },
  { location: 'Stare Kiejkuty (Poland)', period: '2002–2003', detail: 'Former intelligence training facility used for CIA interrogations. Khalid Sheikh Mohammed and Abu Zubaydah were held here. Poland fined by European Court of Human Rights for complicity.' },
  { location: 'Cat\'s Eye / Bright Light (Thailand)', period: '2002–2003', detail: 'First CIA black site. Abu Zubaydah waterboarded 83 times in one month. CIA tapes of interrogations were destroyed in 2005.' },
  { location: 'Guantánamo Bay (Cuba)', period: '2002–present', detail: 'Not technically a "black site" but operates in a legal black hole. 780 detainees have passed through; 30 remain as of 2024. Most were never charged. Estimated cost: $13M per detainee per year.' },
  { location: 'Diego Garcia (Indian Ocean)', period: 'Alleged 2002+', detail: 'UK/US military base. Despite denials, flight records and testimony suggest it was used as a CIA transit point for rendition flights.' },
  { location: 'Romania', period: '2003–2005', detail: 'CIA operated "Detention Site Black" near Bucharest. Multiple high-value detainees held and interrogated. Romania fined by ECHR.' },
  { location: 'Lithuania', period: '2005–2006', detail: 'CIA operated "Detention Site Violet." Lithuania initially denied involvement; European investigation confirmed it.' },
]

const unaccountedMoney = [
  { item: '$35 trillion in undocumentable DoD transactions (1998–2015)', source: 'DoD Inspector General reports compiled by MSU economists', detail: 'Professors Mark Skidmore and Catherine Austin Fitts analyzed DoD IG reports and found $35 trillion in "unsupported journal voucher adjustments" — accounting entries with no documentation.' },
  { item: '$23.1 trillion in unaccounted transactions (1998–2008)', source: 'Reuters (2013)', detail: 'Reuters reported that the Pentagon had $8.5 trillion in "unsupported adjustments" in a single year (FY2010). Cumulative total through 2008: $23.1 trillion.' },
  { item: '$21 trillion in undocumentable adjustments (1998–2015)', source: 'DoD IG / Michigan State University', detail: 'The Army alone had $6.5 trillion in adjustments in FY2015 — a sum greater than the Army\'s entire budget history. The adjustments represent transactions that cannot be traced to any source document.' },
  { item: '$2.3 trillion missing (announced Sep 10, 2001)', source: 'Secretary Rumsfeld press conference', detail: 'Donald Rumsfeld announced on September 10, 2001, that the Pentagon could not account for $2.3 trillion. The next day, the section of the Pentagon hit by the hijacked plane housed many of the financial records.' },
  { item: '$3.8 trillion in unaccountable assets (2023)', source: 'Pentagon audit', detail: 'The most recent failed audit revealed the Pentagon cannot adequately account for approximately half of its $3.8 trillion in assets — buildings, equipment, inventory, and financial instruments.' },
]

const nsaSurveillance = [
  { program: 'PRISM', cost: 'Classified (est. $100M+/year)', scope: 'Direct access to servers of Google, Facebook, Apple, Microsoft, Yahoo, Skype, YouTube, AOL, PalTalk', revealed: 'Snowden (2013)', status: 'Modified but core capabilities retained under FISA Section 702' },
  { program: 'Upstream Collection', cost: 'Classified', scope: 'Tapping fiber optic cables at internet backbone. Collecting data in transit — emails, web browsing, chat.', revealed: 'Snowden (2013)', status: 'Continues under modified legal authority' },
  { program: 'Phone Metadata (Section 215)', cost: 'Classified (est. $50M+/year)', scope: 'Bulk collection of ALL American phone call records — who called whom, when, for how long, from where', revealed: 'Snowden (2013)', status: 'Officially ended 2020 (USA Freedom Act), but NSA retains capability' },
  { program: 'XKeyscore', cost: 'Classified (est. hundreds of millions)', scope: 'Search engine for NSA\'s collected data. Analysts could search anyone\'s emails, chats, browsing history in real time, often without a warrant.', revealed: 'Snowden (2013)', status: 'Still operational' },
  { program: 'MUSCULAR', cost: 'Classified', scope: 'Tapping data links between Google and Yahoo data centers — collecting hundreds of millions of records per day', revealed: 'Snowden (2013)', status: 'Companies encrypted internal links in response. NSA likely found workarounds.' },
  { program: 'Tailored Access Operations (TAO)', cost: 'Classified (est. $500M+/year)', scope: 'NSA\'s hacking unit. Implants in routers, servers, and hardware shipped worldwide. Can compromise virtually any system.', revealed: 'Snowden/Spiegel (2013)', status: 'Renamed, but capabilities expanded' },
]

export default function CostOfSecrecyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Cost of Secrecy' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Deep Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Black Budget
        </h1>
        <p className="text-xl text-stone-300 mb-4">$23 Trillion in Unaccounted Pentagon Spending</p>
        <p className="text-stone-400 text-lg">
          The Pentagon has failed six consecutive financial audits. $23 trillion in transactions cannot be traced to
          source documents. A $90+ billion intelligence &ldquo;black budget&rdquo; funds programs Congress is barely
          briefed on. Classification has become not a tool of national security, but a weapon against accountability.
        </p>
      </div>

      <ShareButtons title="The Black Budget: $23 Trillion in Unaccounted Pentagon Spending" />

      {/* AI Overview */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">AI Overview — Key Data</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 Pentagon has <strong className="text-white">failed 6 consecutive audits</strong> (2018–2023) — cannot account for ~$3.8 trillion in assets.</li>
          <li>📊 <strong className="text-white">$23.1 trillion</strong> in unaccounted Pentagon transactions (Reuters, DoD IG reports).</li>
          <li>📊 Intelligence &ldquo;black budget&rdquo;: <strong className="text-white">$90+ billion/year</strong> across 17 agencies.</li>
          <li>📊 <strong className="text-white">55.2 million</strong> classification decisions per year. Cost of classification system: $18.5B/year.</li>
          <li>📊 <strong className="text-white">90%</strong> of classified documents are over-classified (Moynihan Commission finding).</li>
          <li>📊 Donald Rumsfeld announced <strong className="text-white">$2.3 trillion missing</strong> from the Pentagon — on September 10, 2001.</li>
        </ul>
      </div>

      <SecrecyCharts />

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Pentagon Has Never Passed an Audit</h2>
        <p>
          The Department of Defense is the only federal agency that has <strong>never passed a financial audit</strong>.
          Not once. In 1990, Congress passed the Chief Financial Officers Act, requiring all major federal agencies to
          produce auditable financial statements. Every agency has complied — the Social Security Administration, NASA,
          the Department of Energy, even the Department of Homeland Security. Every agency except one.
        </p>
        <p>
          The Pentagon didn&apos;t even <em>attempt</em> a comprehensive audit until 2018, 28 years after the law
          required it. When it finally did, the result was a spectacular failure. Across 27 reporting entities, only
          a handful received clean opinions. The rest received disclaimers — the accounting equivalent of saying
          &ldquo;we cannot form an opinion because the records are so bad.&rdquo;
        </p>
        <p>
          The Pentagon has now failed six consecutive audits, spending over $1 billion on audit firms in the process.
          The department manages $3.8 trillion in assets — buildings, equipment, inventory, weapons systems, financial
          instruments — and cannot adequately account for roughly half of them.
        </p>
      </div>

      {/* Audit Failures */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Six Consecutive Failures</h2>
        <div className="space-y-4">
          {auditFailures.map(a => (
            <div key={a.year} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">FY{a.year}</h3>
                <span className="bg-red-900 text-red-200 text-sm px-2 py-0.5 rounded">{a.result}</span>
              </div>
              <p className="text-stone-300 text-sm mt-2">{a.finding}</p>
              <p className="text-red-400 text-sm mt-1">{a.assets}</p>
              <p className="text-stone-500 text-sm mt-2 italic">{a.quote}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">$23 Trillion: The Missing Money</h2>
        <p>
          In 2013, Reuters published a devastating investigation into Pentagon accounting. The report found that the
          Defense Finance and Accounting Service (DFAS) — the Pentagon&apos;s accounting arm — routinely produced
          &ldquo;unsupported journal voucher adjustments&rdquo; to make its books balance. These adjustments had no
          supporting documentation — they were simply made-up numbers inserted to plug the gap between what the
          Pentagon reported and what it could actually document.
        </p>
        <p>
          The scale was staggering. In a single fiscal year (FY2010), the Army alone had $6.5 trillion in unsupported
          adjustments. The Army&apos;s entire budget that year was approximately $250 billion. The adjustments were
          26 times the actual budget.
        </p>
      </div>

      {/* Unaccounted Money */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Missing Trillions</h2>
        <div className="space-y-4">
          {unaccountedMoney.map((item, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <h3 className="text-red-400 font-bold text-sm">{item.item}</h3>
              <p className="text-stone-300 text-sm mt-1">{item.detail}</p>
              <p className="text-stone-500 text-xs mt-1">Source: {item.source}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Rumsfeld Coincidence</h2>
        <p>
          On September 10, 2001, Secretary of Defense Donald Rumsfeld held a press conference at the Pentagon. His
          message was startling: the Pentagon could not account for $2.3 trillion in transactions.
        </p>
        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;According to some estimates, we cannot track $2.3 trillion in transactions. We cannot share
          information from floor to floor in this building because it&apos;s stored on dozens of technological systems
          that are inaccessible or incompatible.&rdquo;</p>
          <footer>— Secretary of Defense Donald Rumsfeld, September 10, 2001</footer>
        </blockquote>
        <p>
          The next morning, American Airlines Flight 77 struck the Pentagon. The area hit — the newly renovated
          Wedge 1 — housed the Army&apos;s financial management offices and many of the personnel working on the
          accounting discrepancies. The $2.3 trillion story disappeared from the news cycle. It has never been resolved.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Black Budget: What We Know</h2>
        <p>
          The United States intelligence community operates on a &ldquo;black budget&rdquo; — funding for classified
          programs that are hidden within the broader defense budget or carried in separate, classified appropriations.
          The total intelligence budget was itself classified until 2007, when Congress required disclosure of the
          top-line number (but not the breakdown).
        </p>
        <p>
          In 2013, Edward Snowden leaked the complete FY2013 black budget: $52.6 billion for the National Intelligence
          Program alone, plus additional tens of billions for the Military Intelligence Program. The total intelligence
          budget now exceeds $90 billion per year — larger than the entire military budget of most countries.
        </p>
      </div>

      {/* Black Budget */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Intelligence Black Budget</h2>
        <div className="space-y-4">
          {blackBudgetItems.map(item => (
            <div key={item.agency} className="border border-stone-700 rounded-lg p-4">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{item.agency}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                <div>
                  <span className="text-stone-400 text-sm">Disclosed Budget</span>
                  <p className="text-stone-300 text-sm">{item.estimatedBudget}</p>
                </div>
                <div>
                  <span className="text-stone-400 text-sm">Estimated Actual</span>
                  <p className="text-red-400 text-sm">{item.actualBudget}</p>
                </div>
              </div>
              <p className="text-stone-400 text-sm mt-2">{item.role}</p>
              <p className="text-stone-500 text-sm mt-1 italic">{item.notable}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">CIA Black Sites: Secret Prisons, No Accountability</h2>
        <p>
          After 9/11, the CIA operated a global network of secret detention facilities — &ldquo;black sites&rdquo; —
          where suspected terrorists were held without charge, without legal representation, and without oversight.
          Detainees were subjected to &ldquo;enhanced interrogation techniques&rdquo; — the government&apos;s euphemism
          for torture — including waterboarding, stress positions, sleep deprivation, and confinement in coffin-sized
          boxes.
        </p>
        <p>
          The program was exposed by investigative journalists, the 2014 Senate Intelligence Committee report
          (the &ldquo;Torture Report&rdquo;), and European court investigations. The findings were damning: the
          techniques produced no actionable intelligence that couldn&apos;t have been obtained through legal methods;
          the CIA systematically misled Congress about the program; and multiple detainees were later found to have
          been innocent.
        </p>
      </div>

      {/* Black Sites */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Known CIA Black Sites</h2>
        <div className="space-y-3">
          {blackSites.map((site, i) => (
            <div key={i} className="border-l-4 border-red-600 pl-4 py-2">
              <div className="flex justify-between items-start">
                <h3 className="text-white font-bold">{site.location}</h3>
                <span className="text-stone-500 text-sm">{site.period}</span>
              </div>
              <p className="text-stone-400 text-sm mt-1">{site.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-4 italic">
          The full extent of the black site network is still classified. The Senate Torture Report was 6,700 pages;
          only a 525-page executive summary was released. The full report remains classified.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">NSA: The Surveillance Budget</h2>
        <p>
          The Snowden revelations of 2013 exposed the scale of NSA surveillance — and the enormous budget required
          to sustain it. The NSA operates a global surveillance apparatus that collects data from undersea cables,
          satellite links, internet backbone infrastructure, and direct partnerships with technology companies.
        </p>
      </div>

      {/* NSA Programs */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">NSA Surveillance Programs</h2>
        <div className="space-y-4">
          {nsaSurveillance.map(prog => (
            <div key={prog.program} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{prog.program}</h3>
                <span className="text-red-400 text-sm">{prog.cost}</span>
              </div>
              <p className="text-stone-300 text-sm mt-2">{prog.scope}</p>
              <div className="flex flex-wrap gap-4 mt-2 text-xs text-stone-500">
                <span>Revealed: {prog.revealed}</span>
                <span>Status: {prog.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Classification as a Weapon</h2>
        <p>
          The classification system was designed to protect genuine national security secrets — troop movements, weapons
          capabilities, intelligence sources. But it has metastasized into a system that primarily protects the
          government from embarrassment and accountability.
        </p>
      </div>

      {/* Classification Stats */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Classification Machine</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {classificationStats.map(s => (
            <div key={s.label} className="border border-stone-700 rounded-lg p-4">
              <span className="text-3xl font-bold text-red-400">{s.stat}</span>
              <p className="text-stone-300 text-sm mt-1">{s.label}</p>
              <p className="text-stone-500 text-xs mt-1">Source: {s.source}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <p>
          In 1997, Senator Daniel Patrick Moynihan chaired the Commission on Protecting and Reducing Government
          Secrecy. The commission found that <strong>90% of classified documents were over-classified</strong> — given
          a higher classification level than their content warranted. The commission concluded that over-classification
          was not an accident but a cultural norm: when in doubt, classify. The cost is borne by democracy.
        </p>
        <p>
          The examples are illuminating. The CIA classified the fact that it spied on the Senate Intelligence Committee
          — the committee charged with overseeing the CIA. The Pentagon classified civilian casualty data from drone
          strikes. The NSA classified the legal interpretation it used to justify bulk surveillance. In each case,
          the classified information was not a genuine security secret — it was evidence of government misconduct.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Whistleblower Paradox</h2>
        <p>
          The classification system creates a paradox: the only people who know about government misconduct are those
          with security clearances, and those people are legally prohibited from revealing what they know. The
          &ldquo;proper channels&rdquo; for reporting — inspectors general, congressional committees — have repeatedly
          proven ineffective or compromised.
        </p>
        <ul>
          <li><strong>Daniel Ellsberg</strong> (Pentagon Papers, 1971): Leaked evidence that the government had systematically lied about Vietnam for years. Charged under the Espionage Act; charges dropped due to government misconduct.</li>
          <li><strong>Thomas Drake</strong> (NSA waste/surveillance, 2010): Reported billions in waste and illegal surveillance through proper channels. Was ignored. Later charged under the Espionage Act; charges eventually reduced.</li>
          <li><strong>Chelsea Manning</strong> (Iraq/Afghanistan war logs, 2010): Leaked evidence of civilian casualties, including the Collateral Murder video. Sentenced to 35 years; commuted by Obama after 7 years.</li>
          <li><strong>Edward Snowden</strong> (NSA global surveillance, 2013): Revealed the most extensive surveillance apparatus in human history. Charged under the Espionage Act. Lives in exile in Russia.</li>
          <li><strong>Reality Winner</strong> (Russian election interference, 2017): Leaked NSA report on Russian interference in 2016 election. Sentenced to 5 years — the longest sentence ever for an unauthorized leak to media.</li>
          <li><strong>Daniel Hale</strong> (Drone program, 2021): Leaked evidence that 90% of drone strike victims in one period were not the intended targets. Sentenced to 45 months.</li>
        </ul>
        <p>
          The pattern is clear: those who reveal government wrongdoing are punished. Those who committed the wrongdoing
          are not. Classification is the mechanism that makes this possible.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;The very word &#39;secrecy&#39; is repugnant in a free and open society; and we are as a people
          inherently and historically opposed to secret societies, to secret oaths and to secret proceedings.&rdquo;</p>
          <footer>— President John F. Kennedy, April 27, 1961</footer>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line</h2>
        <p>
          The United States government spends $886 billion per year on defense and cannot tell the public where the
          money goes. The Pentagon has failed six consecutive audits. Trillions of dollars in transactions cannot be
          traced to source documents. A $90+ billion black budget funds intelligence programs that Congress is barely
          briefed on. The classification system — originally designed to protect secrets — has become a tool for
          protecting the powerful from accountability.
        </p>
        <p>
          This is not a conspiracy theory. These are findings from the Pentagon&apos;s own inspector general, from
          Reuters, from the Senate Intelligence Committee, from the Government Accountability Office. The information
          is publicly available. The trillions are publicly documented as missing. And nothing happens.
        </p>
        <p>
          A country that cannot account for its military spending is not a democracy exercising oversight of its armed
          forces. It is a blank check drawn on the public treasury, signed by officials who will never be held
          accountable, classified so the public will never know.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/surveillance-state">The Surveillance State</Link></li>
          <li><Link href="/analysis/war-profiteering">War Is a Racket: Who Gets Rich</Link></li>
          <li><Link href="/analysis/military-industrial-complex">The Military-Industrial Complex</Link></li>
          <li><Link href="/analysis/war-economy">The War Economy</Link></li>
          <li><Link href="/analysis/congressional-authority">19 Wars Without Congress</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
