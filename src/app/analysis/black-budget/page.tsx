import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'The Black Budget: $90 Billion in Secret Spending the Government Won\'t Explain',
  description: 'The US intelligence community spends $90+ billion per year on classified programs. The CIA, NSA, and NRO operate with minimal oversight. Snowden revealed the scope. Congress barely blinks.',
  openGraph: {
    title: 'The Black Budget: America\'s $90 Billion Secret',
    description: '$90B+ in classified spending. 18 intelligence agencies. No meaningful oversight. What the government hides from the people who pay for it.',
    url: 'https://www.warcosts.org/analysis/black-budget',
    type: 'article',
  },
}

const keyStats = [
  { stat: '$90.5B', label: 'Combined intelligence budget (NIP + MIP) — FY2024 request', source: 'ODNI Budget Release' },
  { stat: '18', label: 'Intelligence agencies in the US Intelligence Community', source: 'Intelligence.gov' },
  { stat: '100,000+', label: 'Estimated intelligence community employees (exact number classified)', source: 'Federation of American Scientists' },
  { stat: '$23T', label: 'Pentagon transactions that failed audit — $23 trillion unaccounted', source: 'DoD Inspector General' },
  { stat: '6', label: 'Consecutive failed Pentagon audits since mandatory auditing began in 2018', source: 'GAO' },
  { stat: '50M+', label: 'Classification decisions per year — the secrecy machine runs itself', source: 'ISOO Annual Report' },
]

const budgetHistory = [
  { year: 1997, nip: '$26.6B', mip: 'N/A', total: '$26.6B', notes: 'First year the NIP was disclosed (under pressure from Tice lawsuit)' },
  { year: 2001, nip: '$30B (est)', mip: '$10B (est)', total: '~$40B', notes: 'Pre-9/11 level. About to explode.' },
  { year: 2005, nip: '$44B', mip: '$17B', total: '~$61B', notes: 'Post-9/11 surge. NRO, CIA, and NSA budgets roughly doubled.' },
  { year: 2010, nip: '$53.1B', mip: '$27B', total: '~$80B', notes: 'Peak War on Terror intelligence spending. 1,271 government organizations created since 9/11.' },
  { year: 2013, nip: '$52.6B', mip: '$23.2B', total: '$75.8B', notes: 'Snowden year. First time detailed budget breakdown leaked.' },
  { year: 2017, nip: '$54.6B', mip: '$21.5B', total: '$76.1B', notes: 'Sequestration squeeze. Cyber and SIGINT continue to grow.' },
  { year: 2020, nip: '$62.7B', mip: '$23.1B', total: '$85.8B', notes: 'COVID-era. Intelligence spending immune to pandemic cuts.' },
  { year: 2024, nip: '$67.1B', mip: '$23.4B', total: '$90.5B', notes: 'China and AI priorities. New record. Still growing.' },
]

const agencyBreakdown = [
  { agency: 'CIA (Central Intelligence Agency)', budget: '$15.3B (est)', employees: '~21,000', mission: 'Human intelligence (HUMINT), covert operations, drone strikes, regime change', oversight: 'Senate/House Intelligence Committees — but CIA routinely lies to them' },
  { agency: 'NSA (National Security Agency)', budget: '$12.5B (est)', employees: '~40,000', mission: 'Signals intelligence (SIGINT), mass surveillance, code-breaking, cyber operations', oversight: 'FISA Court (rubber-stamps 99.97% of requests), Intelligence Committees' },
  { agency: 'NRO (National Reconnaissance Office)', budget: '$17.5B (est)', employees: '~3,500', mission: 'Spy satellites, imagery intelligence. Existence was classified until 1992.', oversight: 'Minimal. NRO budget wasn\'t disclosed until the Snowden leaks.' },
  { agency: 'NGA (National Geospatial-Intelligence Agency)', budget: '$5.2B (est)', employees: '~14,500', mission: 'Mapping, satellite imagery analysis, geospatial intelligence', oversight: 'One of the most secretive agencies. Most Americans have never heard of it.' },
  { agency: 'DIA (Defense Intelligence Agency)', budget: '$5.8B (est)', employees: '~16,500', mission: 'Military intelligence, threat assessment, foreign military analysis', oversight: 'Reports to SecDef. Congress gets sanitized summaries.' },
  { agency: 'FBI (Intelligence Branch)', budget: '$3.1B (est)', employees: '~35,000 (total FBI)', mission: 'Domestic intelligence, counterterrorism, counterintelligence, domestic surveillance', oversight: 'Conducted 278,000 warrantless searches of Americans\' data in FY2020-21' },
  { agency: 'Cyber Command', budget: '$7.5B (est)', employees: '~6,200', mission: 'Offensive and defensive cyber operations, critical infrastructure protection', oversight: 'Dual-hatted with NSA director. Virtually no public reporting.' },
]

const snowdenRevelations = [
  { program: 'PRISM', detail: 'Direct access to servers of Google, Facebook, Apple, Microsoft, Yahoo. NSA could search emails, chats, videos, photos of any user.', cost: '$20M/year', impact: 'Proved the government was surveilling all Americans, not just suspects.' },
  { program: 'UPSTREAM', detail: 'Tapping undersea fiber optic cables to collect internet traffic in bulk. All data flowing through major internet exchange points.', cost: 'Classified', impact: 'The entire internet was being monitored. Not targeted — everything.' },
  { program: 'XKEYSCORE', detail: 'Search engine for NSA analysts to query virtually any internet activity by anyone. Email, browsing history, chat, social media.', cost: 'Classified', impact: 'Any NSA analyst could search anyone\'s internet activity without a warrant.' },
  { program: 'BULLRUN', detail: 'NSA effort to break or weaken encryption standards. Deliberately weakened security for everyone to make surveillance easier.', cost: '$250M/year', impact: 'Made all Americans less safe to make surveillance easier.' },
  { program: 'Stellar Wind (predecessor)', detail: 'Warrantless wiretapping program authorized by Bush post-9/11. Collected phone metadata of every American.', cost: 'Classified', impact: 'Continued for years after being declared illegal by DOJ lawyers.' },
  { program: 'Budget Document', detail: 'Snowden leaked the complete FY2013 "black budget" — $52.6B across 16 agencies. First time the public saw the breakdown.', cost: '$52.6B', impact: 'Revealed NSA and CIA budgets for the first time in history.' },
]

const oversightFailures = [
  { failure: 'CIA Lied About Torture', detail: 'CIA told the Intelligence Committee its "enhanced interrogation" program was effective. The Senate Torture Report (2014) proved it was useless — zero useful intelligence from torture. CIA also spied on the Senate committee investigating it.' },
  { failure: 'NSA Lied About Mass Surveillance', detail: 'James Clapper (DNI) told Congress under oath that the NSA did "not wittingly" collect data on millions of Americans. Snowden proved this was a lie. Clapper was never prosecuted for perjury.' },
  { failure: 'Iran-Contra', detail: 'The CIA sold weapons to Iran (under embargo) to fund Nicaraguan rebels (Congress had banned it). When caught, Reagan said he couldn\'t recall. Oliver North shredded documents. Nobody went to prison.' },
  { failure: 'WMD Intelligence Failure', detail: 'The CIA told Bush (and Congress) that Iraq had WMDs with "slam dunk" confidence. It was wrong. 4,431 Americans died because intelligence was wrong — or was manipulated.' },
  { failure: 'FISA Court Rubber Stamp', detail: 'The Foreign Intelligence Surveillance Court approved 99.97% of requests between 1979 and 2023. Out of 45,795 applications, only 12 were denied outright. It\'s a court in name only.' },
  { failure: 'Gang of Eight Briefings', detail: 'Only 8 members of Congress are briefed on the most sensitive programs. They can\'t take notes, can\'t tell colleagues, and can\'t consult staff. Oversight by 8 people who can\'t talk is not oversight.' },
]

const classificationAbuse = [
  { stat: '50 million', label: 'New classification decisions per year', context: 'More secrets are created each year than any person could read in a lifetime' },
  { stat: '$18.5B', label: 'Annual cost of the classification system itself', context: 'Keeping secrets costs more than the budgets of many entire agencies' },
  { stat: '4.2 million', label: 'People with security clearances in the US', context: 'More people have clearances than live in Los Angeles' },
  { stat: '1.3 million', label: 'People with Top Secret clearance', context: 'If 1.3 million people know a "secret," it\'s not really a secret' },
  { stat: '5.1 billion', label: 'Pages of classified documents over 25 years old (estimated)', context: 'Much of this is classified to hide embarrassment, not protect security' },
]

const blackSites = [
  { name: 'Salt Pit (Afghanistan)', period: '2002-2004', detail: 'CIA "dark prison." Gul Rahman froze to death in November 2002. The CIA officer responsible was recommended for a cash bonus.' },
  { name: 'Stare Kiejkuty (Poland)', period: '2002-2003', detail: 'CIA black site on a Polish military base. Khalid Sheikh Mohammed waterboarded 183 times here.' },
  { name: 'Cat\'s Eye (Thailand)', period: '2002-2003', detail: 'First CIA black site. Abu Zubaydah tortured here. CIA destroyed 92 videotapes of the interrogations.' },
  { name: 'Bright Light (Romania)', period: '2003-2006', detail: 'CIA facility in Bucharest. Multiple detainees held and interrogated. Romania denied it for years before admitting.' },
  { name: 'Diego Garcia (Indian Ocean)', period: '2002-present', detail: 'UK-owned island leased to US military. Used for rendition flights. Both US and UK governments deny it.' },
]

const pentagonAuditFailures = [
  { year: 2018, result: 'Failed', detail: 'First-ever mandatory DoD audit. 1,200 auditors across the department. Failed across every metric.' },
  { year: 2019, result: 'Failed', detail: 'No improvement. DoD unable to account for $35.4 trillion in accounting adjustments.' },
  { year: 2020, result: 'Failed', detail: 'COVID used as excuse for poor record-keeping. 25 of 27 sub-audits failed.' },
  { year: 2021, result: 'Failed', detail: 'Marine Corps passed for first time. Every other branch failed. DoD as a whole: failed.' },
  { year: 2022, result: 'Failed', detail: '7 of 27 sub-audits passed. Progress from 2018, but still a failing grade overall.' },
  { year: 2023, result: 'Failed', detail: 'Sixth consecutive failure. Comptroller says a clean audit is "years away."' },
]

export default function BlackBudgetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The Black Budget: $90 Billion in Secret Spending the Government Won\'t Explain',
        description: 'The US intelligence community spends $90+ billion per year on classified programs with minimal oversight.',
        url: 'https://www.warcosts.org/analysis/black-budget',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-15',
        dateModified: '2026-03-15'
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Black Budget' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Black Budget
        </h1>
        <p className="text-xl text-stone-300 mb-4">$90 Billion Per Year. 18 Agencies. Zero Accountability.</p>
        <p className="text-stone-400 text-lg">
          The United States spends over $90 billion per year on its intelligence community — the CIA, NSA, 
          NRO, and 15 other agencies whose budgets were, until Edward Snowden, entirely secret. The total 
          has roughly tripled since 9/11. Congress is nominally responsible for oversight, but the Intelligence 
          Committees are briefed on a need-to-know basis, can&apos;t share what they learn with colleagues, 
          and have repeatedly been lied to by the agencies they oversee. The FISA Court, created to check NSA 
          surveillance, has approved 99.97% of government requests. The Pentagon has failed six consecutive 
          audits, with $23 trillion in transactions it cannot explain. This is not oversight. This is a $90 
          billion annual exercise in trust — trust that has been violated, repeatedly, by the very agencies 
          asking for it.
        </p>
      </div>

      <ShareButtons title="The Black Budget: $90B in Secret Government Spending" />

      {/* Key Numbers */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">By the Numbers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {keyStats.map((item) => (
            <div key={item.label} className="flex gap-3">
              <span className="text-2xl font-bold text-white whitespace-nowrap">{item.stat}</span>
              <div>
                <p className="text-stone-300 text-sm">{item.label}</p>
                <p className="text-stone-500 text-xs">{item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Budget History */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Budget: From $26 Billion to $90 Billion
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The intelligence budget was entirely classified until 1997, when a lawsuit forced disclosure of 
          the top-line number. The detailed breakdown remained secret until Snowden leaked it in 2013. 
          What we know: spending has tripled since 9/11 and shows no signs of declining.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Year</th>
                <th className="text-right py-3 font-semibold text-stone-900">NIP</th>
                <th className="text-right py-3 font-semibold text-stone-900">MIP</th>
                <th className="text-right py-3 font-semibold text-stone-900">Total</th>
                <th className="text-left py-3 font-semibold text-stone-900 pl-4">Notes</th>
              </tr>
            </thead>
            <tbody>
              {budgetHistory.map((row) => (
                <tr key={row.year} className="border-b border-stone-100">
                  <td className="py-3 font-medium text-stone-900">{row.year}</td>
                  <td className="text-right py-3">{row.nip}</td>
                  <td className="text-right py-3">{row.mip}</td>
                  <td className="text-right py-3 text-red-600 font-semibold">{row.total}</td>
                  <td className="py-3 text-stone-600 text-xs pl-4">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Agency Breakdown */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          18 Agencies, $90 Billion: Who Spends What
        </h2>
        <div className="space-y-4">
          {agencyBreakdown.map((agency) => (
            <div key={agency.agency} className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-bold text-stone-900">{agency.agency}</h3>
                <span className="text-red-600 font-bold">{agency.budget}</span>
              </div>
              <p className="text-stone-700 text-sm mb-2">{agency.mission}</p>
              <p className="text-stone-500 text-xs"><strong>Oversight:</strong> {agency.oversight}</p>
              <p className="text-stone-400 text-xs">Employees: {agency.employees}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Snowden */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          What Snowden Revealed
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          In June 2013, Edward Snowden — an NSA contractor — leaked thousands of classified documents 
          revealing the scope of US surveillance. The programs he exposed showed that the NSA was collecting 
          data on virtually every American, without warrants, without meaningful oversight, and in direct 
          contradiction to what intelligence officials had told Congress under oath.
        </p>

        <div className="space-y-4">
          {snowdenRevelations.map((item) => (
            <div key={item.program} className="bg-stone-50 border-l-4 border-red-600 p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-bold text-stone-900">{item.program}</h3>
                {item.cost !== 'Classified' && <span className="text-red-600 font-bold text-sm">{item.cost}</span>}
              </div>
              <p className="text-stone-700 text-sm mb-1">{item.detail}</p>
              <p className="text-stone-500 text-xs">{item.impact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Oversight Failures */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Congressional Oversight: A Polite Fiction
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The Constitution gives Congress the &ldquo;power of the purse&rdquo; — the authority to decide 
          how the government spends money. In theory, intelligence agencies are subject to congressional 
          oversight through the Intelligence Committees. In practice, the agencies lie to the committees, 
          the committees can&apos;t share information with other members of Congress, and the FISA Court 
          approves virtually everything.
        </p>

        <div className="space-y-4">
          {oversightFailures.map((item) => (
            <div key={item.failure} className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">{item.failure}</h3>
              <p className="text-stone-700 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Classification Abuse */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Classification Machine: 50 Million New Secrets Per Year
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Classification exists to protect national security. But in practice, it&apos;s used to hide 
          embarrassment, prevent accountability, and maintain bureaucratic power. The system creates 
          50 million new classified decisions per year — a volume so absurd that the distinction between 
          &ldquo;secret&rdquo; and &ldquo;public&rdquo; has become meaningless.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {classificationAbuse.map((item) => (
            <div key={item.label} className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <span className="text-red-600 font-bold text-xl">{item.stat}</span>
              <p className="font-medium text-stone-900 text-sm">{item.label}</p>
              <p className="text-stone-500 text-xs">{item.context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Black Sites */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Where the Money Goes: CIA Black Sites
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Part of the black budget funded the CIA&apos;s &ldquo;enhanced interrogation&rdquo; program — 
          a network of secret prisons around the world where detainees were tortured. The program cost 
          an estimated $300 million and produced zero useful intelligence, according to the Senate&apos;s 
          own investigation.
        </p>

        <div className="space-y-3">
          {blackSites.map((site) => (
            <div key={site.name} className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-bold text-stone-900">{site.name}</h3>
                <span className="text-stone-500 text-sm">{site.period}</span>
              </div>
              <p className="text-stone-700 text-sm">{site.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pentagon Audit */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Pentagon&apos;s $23 Trillion Accounting Black Hole
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The Pentagon is the only federal agency that has never passed an audit. Since mandatory auditing 
          began in 2018, it has failed every single year. The DoD Inspector General identified $23 trillion 
          in accounting adjustments that could not be traced or explained. That&apos;s not $23 trillion in 
          missing money — it&apos;s $23 trillion in transactions where the paperwork is so bad that auditors 
          can&apos;t determine what happened.
        </p>

        <div className="space-y-3">
          {pentagonAuditFailures.map((item) => (
            <div key={item.year} className="flex gap-4 items-center bg-stone-50 border border-stone-200 rounded-lg p-4">
              <span className="text-stone-900 font-bold text-lg w-12">{item.year}</span>
              <span className="text-red-600 font-bold w-16">{item.result}</span>
              <p className="text-stone-700 text-sm flex-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Libertarian Case */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">
            The Case Against the Black Budget
          </h2>
          <p className="text-stone-300 mb-4">
            The Founders were explicit: Congress controls the purse. Article I, Section 9: &ldquo;No Money 
            shall be drawn from the Treasury, but in Consequence of Appropriations made by Law; and a 
            regular Statement and Account of the Receipts and Expenditures of all public Money shall be 
            published from time to time.&rdquo;
          </p>
          <p className="text-stone-300 mb-4">
            The intelligence community violates this provision every day. $90 billion per year is spent 
            on programs that most members of Congress cannot learn about, that courts cannot review, and 
            that the public cannot debate. The agencies have lied to Congress, tortured prisoners, surveilled 
            citizens, and overthrown governments — all funded by money that cannot be traced.
          </p>
          <p className="text-stone-300">
            The question is not whether America needs intelligence agencies. It does. The question is whether 
            a democracy can survive when $90 billion per year is spent in the dark — when the people writing 
            the checks can&apos;t see the receipts, and the people cashing them have a documented history of 
            lying about what they do. The Founders had a word for that kind of government. They called it 
            tyranny.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>Office of the Director of National Intelligence, Annual Budget Release (FY2024)</li>
          <li>Washington Post, &ldquo;The Black Budget&rdquo; (based on Snowden documents, 2013)</li>
          <li>Federation of American Scientists, Intelligence Budget Data</li>
          <li>Senate Select Committee on Intelligence, &ldquo;Committee Study of the CIA&apos;s Detention and Interrogation Program&rdquo; (2014)</li>
          <li>DoD Inspector General, Annual Audit Reports (2018-2023)</li>
          <li>ISOO (Information Security Oversight Office), Annual Reports on Classification</li>
          <li>FISA Court Annual Reports, Published by the Administrative Office of US Courts</li>
          <li>Tim Weiner, <em>Legacy of Ashes: The History of the CIA</em> (Doubleday, 2007)</li>
          <li>James Bamford, <em>The Shadow Factory</em> (Anchor, 2009)</li>
          <li>Glenn Greenwald, <em>No Place to Hide</em> (Metropolitan Books, 2014)</li>
        </ul>
      </section>

      <RelatedArticles articles={[
        { slug: 'surveillance-state', title: 'The Surveillance State', desc: 'NSA collects all phone metadata. 278K warrantless FBI searches.' },
        { slug: 'cost-of-secrecy', title: 'The Black Budget: $23 Trillion Unaccounted', desc: '6 failed audits. $23T in missing transactions.' },
        { slug: 'pentagon-waste', title: 'Pentagon Waste', desc: '6 failed audits. $1.7T F-35. $43M gas station.' },
        { slug: 'torture-program', title: 'America\'s Torture Program', desc: '119+ detainees in CIA black sites. Zero useful intelligence.' },
      ]} />

      <BackToTop />
    </div>
  )
}
