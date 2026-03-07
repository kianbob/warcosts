import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'The Surveillance State — How the War on Terror Destroyed the 4th Amendment',
  description: 'NSA collects ALL phone metadata. PRISM. XKeyscore. 278,000 warrantless FBI searches. $80B+ intelligence budget. 854,000 top secret clearances. The 4th Amendment is dead.',
  openGraph: {
    title: 'The Surveillance State — How the War on Terror Destroyed the 4th Amendment',
    description: 'The War on Terror built a domestic surveillance empire that monitors every American. Ben Franklin warned us.',
    url: 'https://www.warcosts.org/analysis/surveillance-state',
  },
}

const nsaPrograms = [
  {
    name: 'PRISM',
    revealed: 'June 6, 2013 (Snowden)',
    description: 'Direct access to servers of Google, Apple, Facebook, Microsoft, Yahoo, AOL, Skype, YouTube, and PalTalk. NSA could request emails, chat logs, stored data, VoIP, file transfers, video/voice chat, photos, and social networking details of any non-US person — and inevitably collected vast amounts of US person data.',
    scale: 'Tens of thousands of selectors (email addresses, phone numbers) targeted. 117,675 active surveillance targets under PRISM in 2012.',
    legal: 'Section 702 of FISA Amendments Act (2008). Rubber-stamped by the FISA Court, which approved 99.97% of government surveillance requests between 1979–2012.',
  },
  {
    name: 'UPSTREAM',
    revealed: 'June 2013 (Snowden)',
    description: 'Collection of communications directly from fiber optic cables and internet backbone infrastructure. The NSA tapped into the cables that carry global internet traffic — physically splicing into AT&T and other telecom providers\' fiber optic lines at facilities like Room 641A at AT&T\'s San Francisco switching center.',
    scale: 'Collected an estimated 250 million internet communications per year. Captured "about" communications — messages that merely mentioned a surveillance target, sweeping in millions of unrelated communications.',
    legal: 'Section 702 FISA. AT&T, Verizon, and other telecoms granted retroactive immunity for their participation by the FISA Amendments Act of 2008.',
  },
  {
    name: 'XKeyscore',
    revealed: 'July 31, 2013 (Snowden)',
    description: 'The NSA\'s Google. A search engine for surveillance data that allows analysts to search through emails, browsing history, chat logs, and virtually all online activity in real-time. An analyst could type in an email address or name and access a person\'s entire online history without prior authorization.',
    scale: 'Processed over 20 terabytes of data per day from 700+ servers at 150+ sites worldwide. NSA training slides boasted it collected "nearly everything a typical user does on the internet."',
    legal: 'No individual warrant required for non-US persons. For US persons, the system had "minimization procedures" that were routinely circumvented.',
  },
  {
    name: 'Bulk Phone Metadata (Section 215)',
    revealed: 'June 5, 2013 (Snowden — first revelation)',
    description: 'The NSA collected metadata for every phone call made in the United States — who called whom, when, for how long, and from where. Not the content of calls, but the metadata, which can reveal intimate details of a person\'s life: their doctor, lawyer, lover, AA sponsor, political affiliations.',
    scale: 'Every phone call in America. Billions of records per day. The database contained records going back 5 years.',
    legal: 'Section 215 of the USA PATRIOT Act, as interpreted by the FISA Court in a secret ruling. The law says the government can collect business records "relevant" to an investigation. The FISA Court ruled that ALL phone records were "relevant" because the relevant ones might be in there somewhere.',
  },
  {
    name: 'MUSCULAR',
    revealed: 'October 2013 (Snowden)',
    description: 'NSA and GCHQ (UK) tapped into the private fiber optic cables connecting Google and Yahoo data centers worldwide. Unlike PRISM (which went through the front door with legal orders), MUSCULAR went through the back door — intercepting data as it moved between company servers.',
    scale: 'Collected 181 million records in one 30-day period. Google and Yahoo were not informed.',
    legal: 'Conducted overseas to avoid US legal restrictions. The NSA exploited the fact that data traveling between US companies\' foreign data centers wasn\'t protected by US law.',
  },
  {
    name: 'CO-TRAVELER',
    revealed: '2013 (Snowden)',
    description: 'Collected location data from 5 billion cell phone records per day worldwide, tracking the movements of hundreds of millions of people. Used to identify associates of surveillance targets by analyzing who traveled together.',
    scale: '5 billion records per day. Global cell tower location data. Could track any cell phone on Earth.',
    legal: 'Executive Order 12333. Collected overseas, so US privacy laws were deemed not to apply — even though many Americans\' location data was inevitably collected.',
  },
]

const domesticSurveillance = [
  {
    name: 'Section 702 FISA — Warrantless FBI Searches',
    details: 'Section 702 authorizes NSA to target non-US persons abroad. But the collected data includes millions of Americans\' communications. The FBI can then search this database for American citizens\' communications WITHOUT a warrant. In 2021, the FBI conducted 3.4 million warrantless searches of Americans\' data. After a FISA Court rebuke, the number was "reduced" to 278,000 in 2022 — still 278,000 warrantless searches of Americans\' private communications.',
    scale: '278,000 warrantless FBI searches of Americans\' data in one year (2022)',
  },
  {
    name: 'Stingray / IMSI Catchers',
    details: 'Cell-site simulators that impersonate cell towers, forcing all nearby phones to connect to them. Used by FBI, DEA, ICE, IRS, US Marshals, and at least 75 local police departments. Intercepts calls, texts, and location data of everyone in range — not just the target. Police departments signed NDAs with the FBI agreeing to drop criminal cases rather than reveal Stingray use in court.',
    scale: 'Used by 75+ federal, state, and local law enforcement agencies. Intercepts data from all phones in range — hundreds to thousands of people.',
  },
  {
    name: 'Fusion Centers',
    details: 'A network of 80+ intelligence-sharing centers across the US, created after 9/11 to facilitate information sharing between federal, state, and local law enforcement. A 2012 Senate investigation found they had produced "no useful intelligence." Instead, they tracked anti-war protesters, Occupy Wall Street activists, Ron Paul supporters, and people buying MREs.',
    scale: '80+ centers across all 50 states. $1.4 billion federal funding. Senate found "no useful intelligence" produced.',
  },
  {
    name: 'Facial Recognition',
    details: 'The FBI\'s Next Generation Identification system contains over 640 million face photos — including 21 states\' driver\'s license databases searched without consent. Clearview AI scraped 30+ billion photos from social media and sold facial recognition to 3,100+ government agencies. GAO found that 6 federal agencies used facial recognition without required privacy assessments.',
    scale: '640 million+ face photos in FBI database. 30+ billion photos scraped by Clearview AI. Used by 3,100+ government agencies.',
  },
  {
    name: 'Pegasus Spyware',
    details: 'Developed by Israeli company NSO Group, Pegasus can turn any smartphone into a complete surveillance device — accessing camera, microphone, messages, calls, emails, location, passwords, and encrypted communications. Sold to governments including Saudi Arabia (used to target Jamal Khashoggi\'s associates), Mexico, UAE, India, Hungary, and others. In 2021, Apple notified US State Department employees that their iPhones had been compromised by Pegasus.',
    scale: 'Sold to 45+ government clients in 36+ countries. Targets included journalists, human rights activists, opposition politicians, and lawyers.',
  },
  {
    name: 'Total Information Awareness (TIA)',
    details: 'DARPA program (2002) designed to create a massive surveillance database integrating financial records, medical records, travel records, communications, and biometric data for every person in America. When exposed, Congress "defunded" it in 2003 — but its component programs were simply moved to the NSA and other classified programs under different names. The concept was fully realized by the NSA programs Snowden revealed a decade later.',
    scale: 'Designed to monitor every American. "Defunded" by Congress but components survived and expanded under classified programs.',
  },
]

const intelligenceBudget = [
  {
    year: '2001',
    totalBudget: '$29.5B',
    nip: '$26.6B',
    mip: '$12.2B',
    programs: 'Pre-9/11 baseline. Focus on traditional nation-state threats (Russia, China, North Korea).',
    personnel: '854,000 people with security clearances',
  },
  {
    year: '2005',
    totalBudget: '$44.0B',
    nip: '$38.8B',
    mip: '$15.5B',
    programs: 'Massive expansion post-9/11. Creation of DHS, DNI. PATRIOT Act authorities implemented.',
    personnel: '1.2M+ people with security clearances',
  },
  {
    year: '2010',
    totalBudget: '$81.7B',
    nip: '$53.1B',
    mip: '$23.5B',
    programs: 'Peak War on Terror spending. Drone program expansion. Bulk metadata collection operational.',
    personnel: '1.4M+ people with security clearances',
  },
  {
    year: '2013',
    totalBudget: '$67.9B',
    nip: '$52.6B',
    mip: '$20.4B',
    programs: 'Snowden revelations year. Sequestration cuts. Public backlash to surveillance programs.',
    personnel: '1.4M+ people with security clearances',
  },
  {
    year: '2016',
    totalBudget: '$69.0B',
    nip: '$54.0B',
    mip: '$18.4B',
    programs: 'Obama-era reforms to Section 215. FISA Amendments Act reauthorization fights.',
    personnel: '1.3M+ people with security clearances',
  },
  {
    year: '2020',
    totalBudget: '$84.1B',
    nip: '$62.3B',
    mip: '$25.2B',
    programs: 'Trump expansion. "Great power competition" focus while maintaining domestic surveillance.',
    personnel: '1.25M+ people with security clearances',
  },
  {
    year: '2023',
    totalBudget: '$98.2B',
    nip: '$71.7B',
    mip: '$26.6B',
    programs: 'Biden continuation. AI and quantum computing. China threat buildup. Surveillance infrastructure intact.',
    personnel: '1.3M+ people with security clearances',
  },
]

const techCompanyCompliance = [
  {
    company: 'Google',
    prismParticipant: true,
    startDate: 'January 2009',
    dataTypes: 'Gmail, YouTube, Google Drive, search data, location data, contacts, calendar',
    compliance: 'Provided data to 30,000+ NSA requests (2008-2013). Built custom systems for government access.',
    resistance: 'Challenged some requests in court. Increased encryption after Snowden revelations.',
    currentStatus: 'Still participates in PRISM under Section 702. Publishes transparency reports.',
  },
  {
    company: 'Microsoft',
    prismParticipant: true,
    startDate: 'February 2007',
    dataTypes: 'Outlook, Skype, OneDrive, Xbox Live data, enterprise Office 365',
    compliance: 'Gave NSA access to encrypted Outlook.com emails. Provided Skype video/audio.',
    resistance: 'Initially cooperated fully. Increased legal challenges after public exposure.',
    currentStatus: 'Continues Section 702 compliance. Cloud Act enables foreign government access.',
  },
  {
    company: 'Apple',
    prismParticipant: true,
    startDate: 'October 2012',
    dataTypes: 'iCloud data, FaceTime metadata, iMessage metadata (not content due to encryption)',
    compliance: 'Late PRISM joiner. Provided iCloud backups, photos, contacts, calendars.',
    resistance: 'Refused to unlock San Bernardino shooter\'s iPhone (2016). Increased device encryption.',
    currentStatus: 'Still provides iCloud data under legal orders. Cannot decrypt modern devices.',
  },
  {
    company: 'Facebook/Meta',
    prismParticipant: true,
    startDate: 'June 2009',
    dataTypes: 'Posts, messages, photos, friend lists, WhatsApp metadata, Instagram data',
    compliance: 'Comprehensive access to user data, relationships, communications patterns.',
    resistance: 'Challenged some overbroad requests. Added end-to-end encryption to WhatsApp.',
    currentStatus: 'Continues compliance. Messenger not fully encrypted. Vast data collection intact.',
  },
  {
    company: 'Amazon',
    prismParticipant: 'No (publicly)',
    startDate: 'N/A',
    dataTypes: 'Alexa recordings, AWS cloud data, purchase history, location data',
    compliance: 'Provides data under individual warrants. $600M CIA cloud contract (AWS).',
    resistance: 'Fought some Ring doorbell data requests. Publishes transparency reports.',
    currentStatus: 'Major government contractor. CIA\'s primary cloud provider.',
  },
  {
    company: 'Twitter/X',
    prismParticipant: 'No (publicly)',
    startDate: 'N/A',
    dataTypes: 'Tweets, DMs, user data, relationship graphs, location data',
    compliance: 'Provides data under warrants. Resisted some bulk data requests.',
    resistance: 'Previously more resistant to government requests than other platforms.',
    currentStatus: 'Under Musk ownership, policy changes unclear. Still subject to legal orders.',
  },
  {
    company: 'AT&T',
    prismParticipant: false,
    startDate: '1985 (voluntary)',
    dataTypes: 'All phone calls, text messages, internet traffic, location data, customer records',
    compliance: 'Most cooperative telecom. Room 641A NSA facility. "Hemisphere" program with DEA.',
    resistance: 'Minimal. Known as most surveillance-friendly major telecom.',
    currentStatus: 'Continues extensive cooperation. Major NSA contractor and data provider.',
  },
]

const fiveEyesData = [
  {
    country: 'United States',
    agencies: 'NSA, CIA, FBI',
    specialties: 'SIGINT, global surveillance, bulk collection',
    facilities: 'Fort Meade, Utah Data Center, Pine Gap (Australia)',
    contribution: 'Global internet monitoring, satellite surveillance, PRISM data',
  },
  {
    country: 'United Kingdom',
    agencies: 'GCHQ, MI5, MI6',
    specialties: 'Cable tapping, financial surveillance, HUMINT',
    facilities: 'Cheltenham, Menwith Hill, Tempora program',
    contribution: 'Transatlantic cable access, financial messaging (SWIFT) surveillance',
  },
  {
    country: 'Canada',
    agencies: 'CSE, CSIS, RCMP',
    specialties: 'Arctic surveillance, G7/G20 intelligence',
    facilities: 'Ottawa, Leitrim',
    contribution: 'Surveillance of international summits, northern border monitoring',
  },
  {
    country: 'Australia',
    agencies: 'ASD, ASIS, ASIO',
    specialties: 'Asia-Pacific SIGINT, satellite ground stations',
    facilities: 'Pine Gap (with US), Geraldton, Shoal Bay',
    contribution: 'Chinese communications intercepts, Pacific region monitoring',
  },
  {
    country: 'New Zealand',
    agencies: 'GCSB, NZSIS',
    specialties: 'Pacific island surveillance, Antarctica monitoring',
    facilities: 'Waihopai, Tangimoana',
    contribution: 'Pacific communications intercepts, diplomatic intelligence',
  },
]

const surveillanceTimeline = [
  {
    year: 1975,
    event: 'Church Committee exposes NSA domestic surveillance',
    details: 'Senate investigation reveals NSA "SHAMROCK" and "MINARET" programs intercepting Americans\' international communications without warrants.',
  },
  {
    year: 1978,
    event: 'Foreign Intelligence Surveillance Act (FISA) passed',
    details: 'Creates FISA Court to oversee surveillance. Requires warrants for domestic surveillance, permits warrantless surveillance of foreign targets abroad.',
  },
  {
    year: '1995-2001',
    event: 'Clipper Chip and Crypto Wars I',
    details: 'Government attempts to mandate backdoors in encryption. Tech industry and privacy advocates resist successfully.',
  },
  {
    year: 'September 11, 2001',
    event: '9/11 attacks',
    details: 'Terrorist attacks kill 2,977 people. Used to justify massive expansion of surveillance powers.',
  },
  {
    year: 'October 26, 2001',
    event: 'USA PATRIOT Act signed',
    details: 'Expands surveillance powers dramatically. Section 215 allows bulk collection of "business records" with minimal oversight.',
  },
  {
    year: 2002,
    event: 'Total Information Awareness (TIA) program launched',
    details: 'DARPA program to create comprehensive surveillance database. Public opposition leads to official cancellation, but components continue under other programs.',
  },
  {
    year: 2005,
    event: 'NSA warrantless wiretapping program exposed',
    details: 'New York Times reveals President Bush authorized NSA to monitor Americans\' communications without FISA warrants.',
  },
  {
    year: 2008,
    event: 'FISA Amendments Act passed',
    details: 'Legalizes much of Bush\'s warrantless surveillance program. Creates Section 702 authority. Grants retroactive immunity to telecoms.',
  },
  {
    year: 2013,
    event: 'Edward Snowden revelations begin',
    details: 'NSA contractor reveals extent of mass surveillance programs. Global shock and limited reforms follow.',
  },
  {
    year: 2015,
    event: 'USA FREEDOM Act passed',
    details: 'Limited reforms to Section 215. Ends bulk phone metadata collection by NSA, transfers program to telecoms with case-by-case requests.',
  },
  {
    year: 2020,
    event: 'Section 215 temporarily expires',
    details: 'Congressional gridlock allows some PATRIOT Act authorities to lapse. Most surveillance continues under other authorities.',
  },
  {
    year: 2023,
    event: 'Section 702 reauthorization battle',
    details: 'Intelligence agencies seek clean reauthorization of warrantless surveillance. Privacy advocates push for warrant requirements.',
  },
]

export default function SurveillanceStatePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd title="The Surveillance State — How the War on Terror Destroyed the 4th Amendment" description="NSA collects ALL phone metadata. 278K warrantless FBI searches. $80B+ intelligence budget. 854,000 people with top secret clearances. The 4th Amendment is dead." slug="surveillance-state" />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Surveillance State' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          The Surveillance State
        </h1>
        <p className="text-xl text-stone-300 mb-4">How the War on Terror Destroyed the 4th Amendment</p>
        <p className="text-stone-400 text-lg">
          On June 5, 2013, a 29-year-old NSA contractor named Edward Snowden changed the world. The documents
          he leaked revealed that the US government was conducting mass surveillance on a scale that would
          have been unimaginable to the Founders — collecting <em>every</em> phone call record in America,
          tapping directly into the servers of Google, Apple, and Facebook, and building a global surveillance
          infrastructure capable of monitoring the communications of virtually every person on Earth.
          <em>&ldquo;Those who would give up essential Liberty, to purchase a little temporary Safety,
          deserve neither Liberty nor Safety.&rdquo;</em> Benjamin Franklin wrote those words in 1755.
          Two hundred and fifty years later, America traded both.
        </p>
      </div>

      <ShareButtons title="The Surveillance State" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '$98.2B', label: 'Intelligence Budget (2023)', sub: '233% increase since 9/11' },
          { val: '1.3M', label: 'Top Secret Clearances', sub: 'More than Rhode Island population' },
          { val: '1,271', label: 'Government Spy Orgs', sub: 'Created or reorganized post-9/11' },
          { val: '278,000', label: 'Warrantless FBI Searches', sub: 'Of Americans\' data (2022 alone)' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Intelligence Budget Growth */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">The Surveillance Economy: $98.2 Billion Annual Budget</h2>
        <p className="text-stone-300 mb-6">
          The intelligence community has grown into a massive bureaucracy consuming nearly $100 billion
          annually — more than most countries&apos; entire defense budgets. This money funds the
          surveillance apparatus watching every American, and employs 1.3+ million people with security
          clearances — more than the population of Rhode Island.
        </p>
        <div className="space-y-4">
          {intelligenceBudget.map(year => (
            <div key={year.year} className="flex gap-4 items-start border-l-2 border-red-400 pl-4">
              <div className="shrink-0">
                <span className="text-lg font-bold text-red-400 font-[family-name:var(--font-heading)]">{year.year}</span>
                <div className="text-xs text-stone-400 mt-1">
                  <div>Total: {year.totalBudget}</div>
                  <div>NIP: {year.nip}</div>
                  <div>MIP: {year.mip}</div>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-stone-300 mb-1">{year.programs}</p>
                <p className="text-xs text-stone-400">{year.personnel}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 bg-stone-800 rounded-lg p-4">
          <div className="text-center">
            <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">233%</p>
            <p className="text-xs text-stone-400">Budget growth since 9/11</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">1.3M</p>
            <p className="text-xs text-stone-400">People with top secret clearances</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">18</p>
            <p className="text-xs text-stone-400">Intelligence agencies</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">$300</p>
            <p className="text-xs text-stone-400">Surveillance cost per American</p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-red-900/50 rounded-lg">
          <p className="text-sm text-stone-300">
            <strong>Classified spending:</strong> The $98.2B figure represents only disclosed intelligence spending.
            Additional classified programs are funded through "black budgets" hidden within other agencies.
            The true cost of the surveillance state is unknowable by design. Related analysis: 
            <Link href="/analysis/shadow-wars" className="text-red-400 underline"> Shadow Wars</Link>.
          </p>
        </div>
      </div>

      {/* The scale */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Scale of Surveillance</h2>
        <p className="text-stone-700 mb-4">
          In 2010, the Washington Post published &ldquo;Top Secret America,&rdquo; a two-year
          investigation that mapped the post-9/11 intelligence apparatus. What they found was staggering:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h4 className="font-bold text-sm text-red-800 mb-2">The Intelligence-Industrial Complex</h4>
            <ul className="text-xs text-stone-700 space-y-1">
              <li>• <strong>1,271</strong> government organizations working on counterterrorism, intelligence, and homeland security</li>
              <li>• <strong>1,931</strong> private companies doing top-secret intelligence work</li>
              <li>• <strong>854,000</strong> people holding top-secret security clearances</li>
              <li>• <strong>33</strong> building complexes for top-secret intelligence work built or under construction since 9/11 — equivalent to 3 Pentagons</li>
              <li>• <strong>50,000+</strong> intelligence reports published each year — so many that no one can read them all</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h4 className="font-bold text-sm text-red-800 mb-2">The Budget</h4>
            <ul className="text-xs text-stone-700 space-y-1">
              <li>• <strong>$80+ billion</strong> combined intelligence budget (FY2023)</li>
              <li>• <strong>$71.7 billion</strong> National Intelligence Program (DNI)</li>
              <li>• <strong>$26.6 billion</strong> Military Intelligence Program</li>
              <li>• NSA budget alone: <strong>$10.8 billion</strong> (2013, Snowden docs)</li>
              <li>• <strong>18 intelligence agencies</strong> in the US Intelligence Community</li>
              <li>• Budget has <strong>tripled</strong> since pre-9/11 levels (~$26B in 2001)</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700">
          This is a surveillance apparatus larger than the intelligence services of most countries combined.
          It employs more people with top-secret clearances than the entire population of San Francisco.
          It spends more money than the GDP of most nations. And it has proven, again and again, that
          mass surveillance does not make America safer — it just makes America less free.
        </p>
      </div>

      {/* NSA programs */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">What the NSA Is Doing: The Snowden Revelations</h2>
        <p className="text-stone-500 text-sm mb-6">Sources: Documents provided by Edward Snowden to The Guardian, The Washington Post, The Intercept, Der Spiegel, and others (2013–present).</p>
        <div className="space-y-6">
          {nsaPrograms.map(prog => (
            <div key={prog.name} className="border rounded-lg p-5">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-bold text-lg">{prog.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">Revealed: {prog.revealed}</span>
              </div>
              <p className="text-sm text-stone-600 mb-3">{prog.description}</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-stone-50 rounded p-3">
                  <p className="text-[10px] text-stone-400 uppercase font-semibold">Scale</p>
                  <p className="text-sm text-stone-700">{prog.scale}</p>
                </div>
                <div className="bg-stone-50 rounded p-3">
                  <p className="text-[10px] text-stone-400 uppercase font-semibold">Legal Basis</p>
                  <p className="text-sm text-stone-700">{prog.legal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The FISA Court */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The FISA Court: A Rubber Stamp for Tyranny</h2>
        <p className="text-stone-300 mb-4">
          The Foreign Intelligence Surveillance Court (FISC), created in 1978, was supposed to be a check on
          government surveillance power. Instead, it became its enabler. Between 1979 and 2012, the FISA
          Court approved <strong>33,942 out of 33,949 government surveillance requests — a 99.97% approval
          rate</strong>. It rejected 11 requests in 33 years.
        </p>
        <p className="text-stone-300 mb-4">
          The court operates in total secrecy. Its proceedings are classified. Only the government argues
          before it — there is no adversarial process, no defense attorney, no one to challenge the
          government&apos;s claims. The judges are appointed by the Chief Justice of the Supreme Court alone,
          with no Senate confirmation. For decades, a majority of FISA judges were Republican appointees
          of a single Chief Justice (John Roberts).
        </p>
        <p className="text-stone-300 mb-4">
          The FISA Court issued secret legal opinions that effectively rewrote surveillance law. In the most
          extreme example, the court ruled that the NSA could collect <em>all</em> phone metadata in America
          because it was &ldquo;relevant&rdquo; to terrorism investigations — interpreting the word
          &ldquo;relevant&rdquo; to mean &ldquo;everything.&rdquo; This secret reinterpretation of law
          was binding but hidden from the public and from most members of Congress.
        </p>
        <p className="text-stone-300">
          As Senator Ron Wyden (D-OR), a member of the Intelligence Committee, warned for years before
          the Snowden revelations: the government was operating under a &ldquo;secret interpretation of
          the law&rdquo; that would shock Americans if they knew about it. He was right — but he
          couldn&apos;t tell anyone because the interpretation itself was classified.
        </p>
      </div>

      {/* Domestic surveillance */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">The Domestic Surveillance Arsenal</h2>
        <div className="space-y-5">
          {domesticSurveillance.map(prog => (
            <div key={prog.name} className="border rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">{prog.name}</h3>
              <p className="text-sm text-stone-600 mb-3">{prog.details}</p>
              <div className="bg-red-50 rounded p-3">
                <p className="text-[10px] text-red-400 uppercase font-semibold">Scale</p>
                <p className="text-sm text-red-800">{prog.scale}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Five Eyes */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Five Eyes: The Surveillance Alliance</h2>
        <p className="text-stone-700 mb-4">
          The Five Eyes alliance — the US, UK, Canada, Australia, and New Zealand — is the most powerful
          intelligence-sharing partnership in history, dating back to World War II. Under this arrangement,
          each nation conducts surveillance on the others&apos; citizens and shares the results — a
          convenient workaround for domestic spying restrictions.
        </p>
        <p className="text-stone-700 mb-4">
          The UK&apos;s GCHQ operates the <strong>Tempora</strong> program, which taps directly into
          transatlantic fiber optic cables, collecting the content (not just metadata) of communications
          flowing between the US and Europe. This data is shared with the NSA. Because it&apos;s
          collected by a foreign government on foreign soil, it bypasses US legal protections entirely.
        </p>
        <p className="text-stone-700 mb-4">
          Australia&apos;s ASD, Canada&apos;s CSE, and New Zealand&apos;s GCSB perform similar functions —
          each nation spies on the others&apos; citizens and shares intelligence, allowing all five
          governments to claim they&apos;re not spying on their own people while having access to the
          exact same data.
        </p>
        <p className="text-stone-700">
          Snowden documents revealed the full extent: Five Eyes agencies share raw intelligence data,
          coordinate collection priorities, and jointly operate surveillance infrastructure across the
          globe. The alliance extends to additional rings: Nine Eyes (adding Denmark, France, Netherlands,
          Norway) and Fourteen Eyes (adding Germany, Belgium, Italy, Spain, Sweden). The surveillance
          web covers the entire Western world.
        </p>
      </div>

      {/* Section 702 */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">Section 702: The Backdoor to the 4th Amendment</h2>
        <p className="text-stone-700 mb-4">
          Section 702 of the FISA Amendments Act is the legal foundation for the most expansive surveillance
          of Americans&apos; communications in history. Here&apos;s how the backdoor works:
        </p>
        <ol className="text-sm text-stone-700 space-y-3 mb-4">
          <li className="flex gap-2"><span className="font-bold text-red-700 shrink-0">1.</span> The NSA is authorized to target <em>non-US persons abroad</em> (no warrant needed).</li>
          <li className="flex gap-2"><span className="font-bold text-red-700 shrink-0">2.</span> In doing so, it &ldquo;incidentally&rdquo; collects enormous volumes of Americans&apos; communications — every email, call, or message that touches a foreign target.</li>
          <li className="flex gap-2"><span className="font-bold text-red-700 shrink-0">3.</span> This data is stored in searchable databases accessible to the NSA, CIA, FBI, and NCTC.</li>
          <li className="flex gap-2"><span className="font-bold text-red-700 shrink-0">4.</span> The FBI can search this database for Americans&apos; communications <strong>without a warrant</strong> — using Americans&apos; names, email addresses, or phone numbers as search terms.</li>
          <li className="flex gap-2"><span className="font-bold text-red-700 shrink-0">5.</span> The FBI conducted <strong>278,000 warrantless searches</strong> of Americans&apos; data in 2022 alone.</li>
        </ol>
        <p className="text-stone-700 mb-4">
          This is the &ldquo;backdoor search&rdquo; loophole. The government collects Americans&apos;
          communications under the pretext of foreign intelligence, then searches that data for domestic
          law enforcement purposes — all without a warrant, without probable cause, and without the
          target ever knowing.
        </p>
        <p className="text-stone-700">
          In April 2024, Congress reauthorized Section 702 for two more years — over the objections of civil
          liberties groups from across the political spectrum. An amendment requiring a warrant for FBI
          searches of Americans&apos; data was defeated by a single vote in the House (212-212). The
          surveillance state&apos;s most powerful tool was preserved by one vote.
        </p>
      </div>

      {/* Tech Company Compliance */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Big Tech&apos;s Surveillance Partnership</h2>
        <p className="text-stone-300 mb-6">
          The surveillance state couldn&apos;t exist without willing corporate partners. Every major
          tech company participates in government surveillance programs, providing user data, building
          backdoors, and designing systems for intelligence access. The public sees their marketing
          about privacy — intelligence agencies see their cooperation.
        </p>
        <div className="space-y-4">
          {techCompanyCompliance.map(company => (
            <div key={company.company} className="border border-stone-700 rounded-lg p-4">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-bold text-lg text-red-400">{company.company}</h3>
                {company.prismParticipant && (
                  <span className="text-xs px-2 py-1 bg-red-900 text-red-300 rounded-full">PRISM Participant</span>
                )}
                {company.startDate && (
                  <span className="text-xs px-2 py-1 bg-stone-700 text-stone-300 rounded">Since {company.startDate}</span>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-sm">
                <div>
                  <p className="text-stone-400 text-xs uppercase font-semibold">Data Provided</p>
                  <p className="text-stone-300">{company.dataTypes}</p>
                </div>
                <div>
                  <p className="text-stone-400 text-xs uppercase font-semibold">Current Status</p>
                  <p className="text-stone-300">{company.currentStatus}</p>
                </div>
              </div>
              <p className="text-sm text-stone-300 mb-1"><strong>Compliance:</strong> {company.compliance}</p>
              <p className="text-sm text-stone-400"><strong>Resistance efforts:</strong> {company.resistance}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-stone-800 rounded-lg">
          <h3 className="font-bold text-red-400 mb-2">The Cooperation Paradox</h3>
          <p className="text-sm text-stone-300">
            Tech companies publicly oppose government surveillance while privately enabling it. They
            challenge individual requests in court for PR purposes while building systematic access
            for intelligence agencies. They encrypt data in transit while providing decrypted copies
            to the NSA. They publish transparency reports that reveal almost nothing due to classification
            restrictions. The business model requires both user trust and government compliance.
            Related: <Link href="/analysis/silicon-valley-pentagon" className="text-red-400 underline">Silicon Valley and the Pentagon</Link>.
          </p>
        </div>
      </div>

      {/* What surveillance hasn't prevented */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2 text-amber-800">💡 Did You Know: Mass Surveillance Doesn&apos;t Work</h3>
        <p className="text-stone-700 mb-3">
          Despite the most extensive surveillance apparatus in human history, the US intelligence community
          has repeatedly failed to prevent major attacks — while claiming that mass surveillance is essential
          for national security.
        </p>
        <div className="grid md:grid-cols-2 gap-3 mb-3">
          <div className="bg-white rounded-lg p-3 border">
            <h4 className="font-bold text-sm mb-1">Failures</h4>
            <ul className="text-xs text-stone-700 space-y-1">
              <li>• 9/11: NSA had intercepted calls from hijackers but didn&apos;t share intelligence</li>
              <li>• Boston Marathon bombing (2013): Russia warned FBI about Tamerlan Tsarnaev twice</li>
              <li>• Fort Hood shooting (2009): NSA intercepted Nidal Hasan&apos;s emails with Al-Awlaki</li>
              <li>• Pulse nightclub (2016): FBI investigated Omar Mateen twice, closed the case</li>
              <li>• San Bernardino (2015): Attackers communicated openly on social media</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-3 border">
            <h4 className="font-bold text-sm mb-1">The Evidence</h4>
            <ul className="text-xs text-stone-700 space-y-1">
              <li>• Obama&apos;s own review board (2013): found bulk phone metadata collection &ldquo;was not essential to preventing attacks&rdquo;</li>
              <li>• Privacy and Civil Liberties Oversight Board (2014): found &ldquo;no instance in which the program directly contributed to the discovery of a previously unknown terrorist plot&rdquo;</li>
              <li>• NSA internal review: only 1 of 54 claimed successes involved Section 215 bulk collection — and that was a $8,500 wire transfer to a Somali group</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700">
          The pattern is clear: the government has <em>too much</em> data, not too little. The problem
          is not collection — it&apos;s analysis. Collecting everything from everyone creates a haystack
          so large that finding the needles becomes impossible. Mass surveillance doesn&apos;t prevent
          terrorism; it prevents effective intelligence analysis.
        </p>
      </div>

      {/* Chilling effect */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Chilling Effect: Surveillance Kills Free Speech</h2>
        <p className="text-stone-700 mb-4">
          The damage of mass surveillance extends far beyond the government reading your emails. The
          <strong> knowledge</strong> that you might be monitored changes behavior — a phenomenon called
          the &ldquo;chilling effect.&rdquo;
        </p>
        <p className="text-stone-700 mb-4">
          A 2016 study by PEN America found that 1 in 6 writers self-censored after learning about NSA
          surveillance — avoiding topics, not researching certain subjects online, and refraining from
          communicating with sources in monitored countries. A study published in the <em>Berkeley
          Technology Law Journal</em> found that Wikipedia traffic to articles about terrorism, Al-Qaeda,
          and other surveilled topics dropped 20% after the Snowden revelations — people were afraid to
          even <em>read</em> about certain subjects.
        </p>
        <p className="text-stone-700 mb-4">
          Journalists report difficulty protecting sources. Lawyers report clients unwilling to discuss
          sensitive matters by phone or email. Activists report self-censorship. Muslim Americans report
          being afraid to donate to charities, attend mosques, or express political views. The surveillance
          state doesn&apos;t need to actively persecute dissent — the mere possibility of monitoring is
          enough to suppress it.
        </p>
        <p className="text-stone-700">
          As Snowden himself said: <em>&ldquo;Arguing that you don&apos;t care about the right to privacy
          because you have nothing to hide is no different than saying you don&apos;t care about free speech
          because you have nothing to say.&rdquo;</em>
        </p>
      </div>

      {/* Edward Snowden */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Edward Snowden: Traitor or Patriot?</h2>
        <p className="text-stone-300 mb-4">
          Edward Snowden was a 29-year-old NSA contractor working for Booz Allen Hamilton in Hawaii when
          he made the most consequential decision in the history of American whistleblowing. Over several
          months, he copied approximately 1.5 million classified documents detailing the NSA&apos;s global
          surveillance programs — and gave them to journalists Glenn Greenwald, Laura Poitras, and
          Barton Gellman.
        </p>
        <p className="text-stone-300 mb-4">
          The US government charged Snowden with espionage and theft of government property. He fled to
          Hong Kong, then to Moscow, where he was stranded when the State Department revoked his passport.
          He has lived in Russia since 2013 and was granted Russian citizenship in 2022.
        </p>
        <p className="text-stone-300 mb-4">
          The government says Snowden endangered national security. But his revelations led to: the USA
          FREEDOM Act (2015), which ended bulk phone metadata collection; major tech companies implementing
          end-to-end encryption; public awareness of surveillance that polls show the majority of Americans
          oppose; and the only meaningful public debate about government surveillance in American history.
        </p>
        <p className="text-stone-300 mb-4">
          Snowden could not have used official whistleblower channels — they don&apos;t protect intelligence
          community contractors, and previous NSA whistleblowers (Thomas Drake, William Binney, J. Kirk
          Wiebe, Ed Loomis) who went through official channels were prosecuted, harassed, or had their
          lives destroyed. The system is designed to prevent exactly the kind of disclosure Snowden made.
        </p>
        <p className="text-stone-300">
          The question is not whether Snowden broke the law — he did. The question is whether the
          government should have the power to conduct mass surveillance on its own citizens in secret,
          shield that surveillance behind classification, and prosecute anyone who tells the public
          what their government is doing to them. The Founders would have had a clear answer.
        </p>
      </div>

      {/* Libertarian analysis */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Libertarian Case: The 4th Amendment Is Dead</h2>
        <p className="text-stone-300 mb-4">
          The Fourth Amendment to the United States Constitution:
          <em>&ldquo;The right of the people to be secure in their persons, houses, papers, and effects,
          against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue,
          but upon probable cause, supported by Oath or affirmation, and particularly describing the place
          to be searched, and the persons or things to be seized.&rdquo;</em>
        </p>
        <p className="text-stone-300 mb-4">
          Read that again. Now consider: the NSA collected <em>every</em> phone record in America without
          a warrant. The FBI searches Americans&apos; communications 278,000 times per year without a
          warrant. The government taps into the servers of every major tech company. Police use fake cell
          towers to intercept communications of everyone in a neighborhood. Facial recognition databases
          contain photos of half the adult population.
        </p>
        <p className="text-stone-300 mb-4">
          The Fourth Amendment doesn&apos;t have a &ldquo;national security&rdquo; exception. It doesn&apos;t
          have a &ldquo;terrorism&rdquo; exception. It doesn&apos;t have a &ldquo;metadata&rdquo; exception.
          It says &ldquo;no warrants shall issue but upon probable cause&rdquo; — not &ldquo;unless the
          FISA Court says it&apos;s okay&rdquo; and not &ldquo;unless it&apos;s really important.&rdquo;
        </p>
        <p className="text-stone-300 mb-4">
          Benjamin Franklin&apos;s warning — <em>&ldquo;Those who would give up essential Liberty, to
          purchase a little temporary Safety, deserve neither Liberty nor Safety&rdquo;</em> — has been
          proven prophetic. We gave up the liberty. We didn&apos;t get the safety. The intelligence
          community&apos;s own reviews found that mass surveillance was &ldquo;not essential&rdquo; to
          preventing attacks. The Boston bombers, the Fort Hood shooter, the Pulse nightclub attacker —
          all were known to the FBI before they struck. The haystack was too large to find the needles.
        </p>
        <p className="text-stone-300 mb-4">
          The surveillance state is not a bug of the War on Terror — it is its primary product. The
          trillions spent, the hundreds of thousands killed, the countries destroyed — all of that would
          be horrifying enough. But the most lasting damage may be what was built at home: a surveillance
          infrastructure that treats every American as a suspect, collects their most intimate data
          without their knowledge or consent, and operates behind a wall of classification that makes
          accountability impossible.
        </p>
        <p className="text-stone-300">
          The infrastructure built to fight terrorists will long outlast the War on Terror. It will be
          turned — it is already being turned — on domestic protesters, journalists, political dissidents,
          and ordinary Americans. The technology doesn&apos;t care who the target is. And a government
          that has tasted unlimited surveillance power will never voluntarily give it up. As
          Senator Frank Church warned in 1975, after investigating the NSA&apos;s predecessor programs:
          <em>&ldquo;That capability at any time could be turned around on the American people, and
          no American would have any privacy left... There would be no place to hide.&rdquo;</em>
          He was right. We are there.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources & Further Reading</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-sm mb-2">Snowden Documents & Reporting</h3>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• Glenn Greenwald, <em>No Place to Hide: Edward Snowden, the NSA, and the US Surveillance State</em> (2014)</li>
              <li>• Barton Gellman, <em>Dark Mirror: Edward Snowden and the American Surveillance State</em> (2020)</li>
              <li>• The Guardian, NSA Files archive (2013–present)</li>
              <li>• The Intercept, "The Snowden Archive" complete collection</li>
              <li>• The Washington Post, NSA revelations and ongoing coverage</li>
              <li>• Der Spiegel, European surveillance partnership reporting</li>
              <li>• Laura Poitras, <em>Citizenfour</em> documentary (2014)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-2">Government Reports & Documents</h3>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• Privacy and Civil Liberties Oversight Board, "Report on the Telephone Records Program" (2014)</li>
              <li>• President's Review Group on Intelligence, "Liberty and Security in a Changing World" (2013)</li>
              <li>• FISA Court annual reports and declassified opinions (2013–2024)</li>
              <li>• Congressional Research Service, "Section 702 of FISA" (2024)</li>
              <li>• DOJ Inspector General, "Review of Four FISA Applications" (2019)</li>
              <li>• NSA Inspector General, "Working Draft" on email and internet metadata collection (2009)</li>
              <li>• Senate Intelligence Committee, "Russian Active Measures Campaigns and Interference" (2020)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-sm mb-2">Academic & Legal Analysis</h3>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• PEN America, "Chilling Effects: NSA Surveillance Drives US Writers to Self-Censor" (2013)</li>
              <li>• Berkeley Technology Law Journal, "Government Surveillance and Internet Search Behavior" (2016)</li>
              <li>• Columbia Law Review, "The NSA's Metadata Collection Programs" (2014)</li>
              <li>• Harvard Law Review, "The Emerging Constitutional Law of Surveillance" (2015)</li>
              <li>• Yale Law Journal, "Programmatic Surveillance" (2016)</li>
              <li>• Brennan Center for Justice, "What the Government Does with Americans' Data" (2024)</li>
              <li>• Electronic Frontier Foundation, ongoing surveillance litigation and FOIA documents</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-2">Historical Context & Investigation</h3>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• Washington Post, "Top Secret America" investigation (2010)</li>
              <li>• Church Committee (Senate Select Committee to Study Intelligence Activities), final reports (1975)</li>
              <li>• GAO, "Facial Recognition Technology: Current and Planned Uses by Federal Agencies" (2021)</li>
              <li>• Senate Homeland Security Committee, "Federal Support for and Involvement in State and Local Fusion Centers" (2012)</li>
              <li>• American Civil Liberties Union, "A License to Kill: What Lurks Behind the Predator Drone Program" (2020)</li>
              <li>• Cato Institute, "Surveillance State" policy analysis series</li>
              <li>• Reason Foundation, "NSA Surveillance and the Fourth Amendment" (2014)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded-lg">
          <h3 className="font-bold text-amber-800 mb-2">🔐 Classified Programs</h3>
          <p className="text-sm text-stone-700">
            Many surveillance programs remain classified. The Snowden revelations represented only a fraction
            of NSA operations — an estimated 1% of the documents he accessed. Current programs under authorities
            like Executive Order 12333, classified Section 702 targeting procedures, and "black budget" operations
            remain largely unknown to the public and Congress.
          </p>
        </div>
      </div>

      {/* Related Analysis */}
      <div className="mt-12 pt-8 border-t">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { slug: 'shadow-wars', title: 'Shadow Wars', desc: 'Secret operations and surveillance in 134+ countries.' },
            { slug: 'torture-program', title: 'Torture Program', desc: 'Black sites, enhanced interrogation, and zero accountability.' },
            { slug: 'silicon-valley-pentagon', title: 'Silicon Valley & Pentagon', desc: 'How tech companies became surveillance partners.' },
          ].map(a => (
            <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">{a.title}</h3>
              <p className="text-sm text-muted">{a.desc}</p>
            </Link>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { slug: 'congressional-authority', title: '19 Wars Without Congress', desc: 'How presidents stole the war power from Congress.' },
            { slug: 'private-armies', title: 'Private Armies', desc: 'Contractors and mercenaries in the surveillance state.' },
            { slug: 'cost-per-life', title: 'Cost Per Life', desc: 'The financial cost of America\'s global surveillance apparatus.' },
          ].map(a => (
            <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">{a.title}</h3>
              <p className="text-sm text-muted">{a.desc}</p>
            </Link>
          ))}
        </div>

        <div className="p-4 bg-stone-100 rounded-lg">
          <h3 className="font-bold text-stone-800 mb-2">🌍 Explore Specific Conflicts & Programs</h3>
          <p className="text-sm text-stone-700 mb-3">
            For detailed analysis of surveillance in specific contexts and real-time cost tracking:
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link href="/analysis/iran-cost-per-second" className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">Iran Cost Tracker</Link>
            <Link href="/analysis/pentagon-climate" className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200">Pentagon Climate</Link>
            <Link href="/analysis/israel-lobby" className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Israel Lobby</Link>
            <Link href="/analysis/sanctions-warfare" className="px-2 py-1 bg-purple-100 text-purple-700 rounded hover:bg-purple-200">Sanctions Warfare</Link>
            <Link href="/conflicts/afghanistan" className="px-2 py-1 bg-orange-100 text-orange-700 rounded hover:bg-orange-200">Afghanistan War</Link>
            <Link href="/analysis/ukraine-proxy" className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">Ukraine Proxy War</Link>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
