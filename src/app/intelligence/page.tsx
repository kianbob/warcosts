import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Intelligence Agencies — $90B, 18 Agencies, Zero Accountability | WarCosts',
  description: 'The US intelligence community: 18 agencies, $90 billion budget, 854,000 security clearances, 1,271 government organizations, 1,931 private companies. CIA coups, NSA surveillance, FBI abuses, and the intelligence-industrial complex.',
  keywords: ['intelligence agencies', 'CIA', 'NSA', 'FBI', 'intelligence budget', 'surveillance', 'MK-Ultra', 'COINTELPRO', 'black sites', 'intelligence industrial complex', 'Booz Allen', 'Palantir'],
  openGraph: {
    title: 'Intelligence Agencies — $90B, 18 Agencies, Zero Accountability',
    description: 'Secret agencies with secret budgets doing secret things. Is this compatible with democracy?',
    url: 'https://warcosts.org/intelligence',
    type: 'article',
  },
}

const agencies = [
  { name: 'Central Intelligence Agency (CIA)', budget: '~$15B (estimated)', employees: '~21,000', role: 'Human intelligence (HUMINT), covert operations, analysis', controversies: 'Coups (Iran 1953, Guatemala 1954, Chile 1973), MK-Ultra, torture/black sites post-9/11, drone strikes, Phoenix Program' },
  { name: 'National Security Agency (NSA)', budget: '~$12B (estimated)', employees: '~40,000+', role: 'Signals intelligence (SIGINT), cybersecurity, code-breaking', controversies: 'Mass domestic surveillance (Snowden revelations), PRISM, warrantless wiretapping, collecting metadata on all Americans' },
  { name: 'Defense Intelligence Agency (DIA)', budget: '~$3B (estimated)', employees: '~16,500', role: 'Military intelligence analysis, defense attachés', controversies: 'WMD intelligence failures (Iraq 2003), interrogation abuses at Guantánamo' },
  { name: 'Federal Bureau of Investigation (FBI)', budget: '$11.3B (FY2024)', employees: '~35,000', role: 'Domestic counterintelligence, counterterrorism, criminal investigations', controversies: 'COINTELPRO, surveillance of MLK, entrapment operations, January 6 informants debate' },
  { name: 'National Geospatial-Intelligence Agency (NGA)', budget: '~$3B (estimated)', employees: '~14,500', role: 'Satellite imagery analysis, mapping, geospatial intelligence', controversies: 'Enabling drone strikes, mass geographic surveillance' },
  { name: 'National Reconnaissance Office (NRO)', budget: '~$18B (estimated)', employees: '~3,000', role: 'Designs, builds, and operates spy satellites', controversies: 'Secret spending ($2B headquarters scandal), satellite surveillance capabilities' },
  { name: 'Office of the Director of National Intelligence (ODNI)', budget: '~$1.5B', employees: '~1,800', role: 'Coordinates all 18 agencies, produces National Intelligence Estimates', controversies: 'Created post-9/11 to fix coordination failures. Critics say it added another bureaucratic layer.' },
  { name: 'Department of Homeland Security (I&A)', budget: '~$600M', employees: '~800', role: 'Domestic threat intelligence, fusion centers', controversies: 'Fusion centers surveilling protesters, monitoring journalists, "see something say something" overreach' },
  { name: 'Treasury (OIA/TFI)', budget: 'Classified', employees: '~300', role: 'Financial intelligence, sanctions enforcement, terrorist financing', controversies: 'SWIFT surveillance program, financial surveillance of Americans without warrants' },
  { name: 'DEA Intelligence', budget: '~$600M', employees: '~5,000', role: 'Drug trafficking intelligence', controversies: 'Parallel construction (using NSA intercepts then hiding the source), SOD program' },
]

const budgetHistory = [
  { year: '1997', total: '$26.6B', note: 'First year the aggregate budget was officially disclosed' },
  { year: '2001', total: '$30B (est.)', note: 'Pre-9/11 baseline' },
  { year: '2004', total: '$40B (est.)', note: 'Post-9/11 surge' },
  { year: '2007', total: '$43.5B', note: 'Officially disclosed again' },
  { year: '2010', total: '$80.1B', note: 'Peak spending (NIP + MIP combined)' },
  { year: '2013', total: '$72.4B', note: 'Snowden year — first detailed budget leak' },
  { year: '2018', total: '$81.5B', note: 'Trump-era increase' },
  { year: '2023', total: '$90.5B', note: 'NIP $67.1B + MIP $23.4B. All-time high.' },
  { year: '2024', total: '$92B+ (est.)', note: 'Requested. Actual classified.' },
]

const ciaCoups = [
  { year: 1953, country: 'Iran', operation: 'Operation TPAJAX', detail: 'Overthrew democratically elected PM Mohammad Mosaddegh to protect British oil interests and prevent perceived Soviet influence. Installed Shah Pahlavi, whose brutal SAVAK secret police ruled for 26 years.', blowback: 'The 1979 Islamic Revolution, the Iran hostage crisis, and 45 years of US-Iran hostility trace directly back to this coup.' },
  { year: 1954, country: 'Guatemala', operation: 'Operation PBSUCCESS', detail: 'Overthrew democratically elected President Jacobo Árbenz, who had implemented modest land reforms that affected the United Fruit Company. Replaced him with military dictator Carlos Castillo Armas.', blowback: 'Triggered 36 years of civil war that killed 200,000 people, mostly indigenous Mayans. Guatemala remains one of the most violent and unequal countries in the Western Hemisphere.' },
  { year: 1961, country: 'Congo', operation: 'Assassination of Patrice Lumumba', detail: 'The CIA helped orchestrate the overthrow and assassination of Congo\'s first democratically elected PM. Replaced him with dictator Mobutu Sese Seko.', blowback: 'Mobutu\'s 32-year kleptocracy devastated the Congo. The instability he created led to the Congo Wars (1996–2003), which killed 5.4 million people — the deadliest conflict since WWII.' },
  { year: 1964, country: 'Brazil', operation: 'Support for military coup', detail: 'CIA provided support, planning, and assurances to Brazilian military officers who overthrew President João Goulart.', blowback: '21 years of military dictatorship with torture, disappearances, and censorship.' },
  { year: 1973, country: 'Chile', operation: 'Overthrow of Salvador Allende', detail: 'After years of covert economic destabilization, the CIA supported General Augusto Pinochet\'s military coup against democratically elected President Salvador Allende, who died in the presidential palace.', blowback: 'Pinochet\'s 17-year dictatorship killed 3,000+, tortured 30,000+, and "disappeared" thousands. Operation Condor spread state terror across South America.' },
  { year: 1979, country: 'Afghanistan', operation: 'Operation Cyclone', detail: 'The CIA armed and funded the Afghan mujahideen to fight the Soviet invasion, funneling $3+ billion through Pakistan\'s ISI. Among the recipients: networks that later formed the Taliban and allies of Osama bin Laden.', blowback: 'The Taliban takeover. Al-Qaeda. September 11, 2001. The 20-year War in Afghanistan that cost $2.3 trillion and ended with the Taliban back in power.' },
  { year: 2003, country: 'Iraq', operation: 'WMD Intelligence Failure', detail: 'CIA Director George Tenet told President Bush that the case for Iraqi WMDs was a "slam dunk." It wasn\'t. The intelligence was based on fabricated sources (notably "Curveball"), cherry-picked data, and political pressure to justify a predetermined policy.', blowback: 'The Iraq War: 4,500+ American dead, 190,000+ Iraqi dead, $2+ trillion in direct costs, the rise of ISIS, and the destabilization of the entire Middle East.' },
  { year: 2011, country: 'Libya', operation: 'Support for regime change', detail: 'CIA provided arms, intelligence, and special operations support to rebels fighting Muammar Gaddafi, complementing NATO\'s bombing campaign.', blowback: 'Libya collapsed into a failed state with rival governments, open-air slave markets, and became a transit point for weapons flowing to extremists across North Africa and the Sahel.' },
]

const domesticAbuses = [
  {
    program: 'MK-Ultra (1953–1973)',
    agency: 'CIA',
    detail: 'A secret mind control program that conducted experiments on unwitting American citizens, including LSD administration, sensory deprivation, electroshock, and psychological torture. Experiments were conducted at 80+ institutions including universities, hospitals, and prisons. Subjects included mental patients, prisoners, drug addicts, and sex workers — people considered expendable. CIA Director Richard Helms ordered most MK-Ultra records destroyed in 1973.',
    exposed: 'Church Committee (1975). Most records were destroyed, so the full scope is unknown.',
  },
  {
    program: 'COINTELPRO (1956–1971)',
    agency: 'FBI',
    detail: 'The FBI\'s secret program to "disrupt, misdirect, discredit, and neutralize" domestic political organizations deemed subversive. Targets included civil rights leaders (Martin Luther King Jr., whom the FBI tried to blackmail into suicide), anti-war activists, the Black Panther Party, the American Indian Movement, and feminist organizations. Tactics included infiltration, wiretapping, planting false evidence, spreading disinformation, and inciting violence between groups.',
    exposed: 'Citizens\' Commission to Investigate the FBI (1971 break-in) and Church Committee (1975).',
  },
  {
    program: 'NSA Mass Surveillance (2001–present)',
    agency: 'NSA',
    detail: 'Following 9/11, the NSA built the most comprehensive surveillance apparatus in human history. Programs revealed by Edward Snowden in 2013 included: PRISM (direct access to Google, Facebook, Apple, Microsoft servers), bulk collection of all American phone metadata, XKEYSCORE (searching virtually all internet traffic), and surveillance of allied world leaders. The NSA collected information on millions of Americans with no connection to terrorism.',
    exposed: 'Edward Snowden (2013). The NSA\'s own internal audits found thousands of privacy violations per year.',
  },
  {
    program: 'CIA Torture Program (2002–2009)',
    agency: 'CIA',
    detail: 'After 9/11, the CIA operated a network of secret "black site" prisons in countries including Poland, Romania, Thailand, Lithuania, and Afghanistan. Detainees were subjected to "enhanced interrogation techniques" — a euphemism for torture that included waterboarding, rectal feeding, sleep deprivation (up to 180 hours), confinement in coffin-sized boxes, ice water baths, and mock executions. At least 119 individuals were detained in the program. At least one detainee, Gul Rahman, died of hypothermia in a CIA black site.',
    exposed: 'Senate Intelligence Committee Torture Report (2014). The 6,700-page report (only 525-page summary declassified) concluded the program was more brutal than the CIA represented, produced no unique intelligence, and the CIA lied to Congress about it.',
  },
  {
    program: 'Operation CHAOS (1967–1974)',
    agency: 'CIA',
    detail: 'Domestic surveillance program targeting the anti-Vietnam War movement. The CIA compiled files on 7,200 Americans and indexed 300,000 names in its database. The operation violated the CIA\'s charter, which prohibits domestic intelligence activities.',
    exposed: 'Seymour Hersh (1974) and Church Committee (1975).',
  },
  {
    program: 'Parallel Construction / SOD (2000s–present)',
    agency: 'DEA/NSA',
    detail: 'The DEA\'s Special Operations Division (SOD) receives intelligence from NSA surveillance and then instructs agents to recreate the investigative trail using conventional methods — hiding the true source of the information from defendants, defense attorneys, and even judges. This systematically undermines the constitutional right to know the evidence against you.',
    exposed: 'Reuters investigation (2013). The practice reportedly continues.',
  },
]

const intelligenceIndustrialComplex = [
  { company: 'Booz Allen Hamilton', revenue: '$8.4B (FY2023)', clearances: '27,000+ cleared employees', detail: 'The world\'s most profitable spy organization that isn\'t a government agency. 97% of revenue comes from government contracts. Edward Snowden was a Booz Allen contractor when he leaked NSA documents. The company was barely affected.' },
  { company: 'Leidos (formerly SAIC)', revenue: '$15.4B (FY2023)', clearances: '36,000+ cleared employees', detail: 'One of the largest IT and intelligence contractors. Operates major NSA and DIA programs. The company split from SAIC in 2013 after a scandal involving a $1.2 billion overbilling on a NYC emergency system.' },
  { company: 'Palantir Technologies', revenue: '$2.2B (FY2023)', clearances: 'Thousands', detail: 'Founded with CIA venture capital (In-Q-Tel). Provides data analysis platforms used by the CIA, NSA, DIA, FBI, and military. Also used by ICE for immigration enforcement. CEO Alex Karp openly advocates for AI-powered surveillance.' },
  { company: 'Raytheon (RTX) Intelligence', revenue: 'Part of $68.9B (RTX total)', clearances: 'Tens of thousands', detail: 'Major signals intelligence and cyber operations contractor. Builds surveillance systems, radar, and electronic warfare platforms used by the intelligence community.' },
  { company: 'Northrop Grumman (Intelligence)', revenue: 'Part of $39.3B (total)', clearances: 'Tens of thousands', detail: 'Builds spy satellites for the NRO, cyber warfare capabilities, and intelligence analysis systems. The NRO\'s satellite fleet is built almost entirely by Northrop and Lockheed.' },
  { company: 'General Dynamics IT', revenue: '$11.7B (GDIT)', clearances: '30,000+ cleared employees', detail: 'Operates IT infrastructure for multiple intelligence agencies. Manages classified networks and communications systems.' },
  { company: 'CACI International', revenue: '$7.7B (FY2023)', clearances: '22,000+ cleared employees', detail: 'Intelligence analysis and IT services. CACI employees were involved in the Abu Ghraib prisoner abuse scandal — none were prosecuted.' },
  { company: 'ManTech International', revenue: 'Acquired by Carlyle Group (2022)', clearances: '10,000+', detail: 'Provides cyber operations, intelligence analysis, and IT services to the IC. Acquired by private equity firm Carlyle Group for $4.2B — further removing intelligence contracting from public accountability.' },
]

export default function IntelligencePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Intelligence Agencies — $90B, 18 Agencies, Zero Accountability',
    description: 'The US intelligence community: secret agencies with secret budgets doing secret things.',
    url: 'https://warcosts.org/intelligence',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-03-01',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Intelligence Agencies' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">Intelligence Agencies</h1>
      <p className="text-red-800 font-bold text-xl mb-4">18 agencies. $90 billion. Zero accountability.</p>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        The United States operates the largest, most expensive, and most powerful intelligence apparatus in human history.
        Eighteen agencies, a $90+ billion annual budget, 854,000 people with security clearances, 1,271 government
        organizations, and 1,931 private companies — all operating largely in secret, beyond meaningful democratic oversight.
      </p>
      <ShareButtons title="Intelligence Agencies — $90B, 18 Agencies, Zero Accountability" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { value: '18', label: 'Intelligence agencies' },
          { value: '$90B+', label: 'Annual budget' },
          { value: '854K', label: 'Security clearances' },
          { value: '1,931', label: 'Private contractors' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
            <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-600 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: '1,271', label: 'Government IC organizations' },
          { value: '3×', label: 'Budget increase since 9/11' },
          { value: '100K+', label: 'IC contractor employees' },
          { value: '50,000+', label: 'Top Secret clearances' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-4 shadow-sm border text-center">
            <p className="text-2xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Libertarian framing */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-10">
        <p className="text-lg italic leading-relaxed">
          &ldquo;Secret agencies with secret budgets, conducting secret operations, reviewed by secret courts under
          secret interpretations of the law — this is not a feature of a free republic. It is the architecture of a
          surveillance state. The intelligence community has overthrown democracies, tortured prisoners, spied on
          its own citizens, lied to Congress, and destroyed evidence — and has never been held accountable in any
          meaningful way. The question is not whether we need intelligence. The question is whether a democracy can
          survive institutions that are, by design, beyond democratic control.&rdquo;
        </p>
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Intelligence Community: A Primer</h2>
        <p>
          The US Intelligence Community (IC) consists of 18 agencies and organizations, coordinated (in theory) by the
          Director of National Intelligence (DNI). The IC&rsquo;s budget is divided into two parts: the National Intelligence
          Program (NIP), which covers agencies like the CIA and NSA, and the Military Intelligence Program (MIP), which
          covers defense intelligence. Combined: over <strong>$90 billion per year</strong>.
        </p>
        <p>
          To put that in perspective: the US intelligence budget alone is larger than the <strong>entire military budget</strong> of
          every country on Earth except China ($225B) and potentially Russia ($109B). America spends more on <em>spying</em> than
          most nations spend on their entire defense.
        </p>
      </div>

      {/* Agency cards */}
      <div className="space-y-4 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-800">Major Agencies</h3>
        {agencies.map(agency => (
          <div key={agency.name} className="bg-white rounded-xl shadow-sm border p-6">
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-stone-800 mb-2">{agency.name}</h4>
            <div className="grid grid-cols-2 gap-3 text-sm mb-3">
              <div><span className="font-semibold text-stone-700">Budget:</span> <span className="text-red-700 font-bold">{agency.budget}</span></div>
              <div><span className="font-semibold text-stone-700">Employees:</span> {agency.employees}</div>
            </div>
            <p className="text-stone-600 text-sm mb-2"><span className="font-semibold">Role:</span> {agency.role}</p>
            <p className="text-red-700 text-sm"><span className="font-semibold">Known controversies:</span> {agency.controversies}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 The Other 8 Agencies</p>
          <p className="text-amber-800">
            Beyond the major agencies, the IC includes: Army Intelligence (G-2), Navy Intelligence (ONI), Air Force
            Intelligence (A2), Marine Corps Intelligence, Space Force Intelligence, Coast Guard Intelligence, State
            Department (INR), and Energy Department (OICI). Each has its own budget, staff, and mission. The
            proliferation of agencies creates redundancy, turf wars, and coordination failures — exactly the problems
            that led to the 9/11 intelligence failures.
          </p>
        </div>

        {/* Budget history */}
        <h2 className="font-[family-name:var(--font-heading)]">Follow the Money: $90 Billion and Growing</h2>
        <p>
          The intelligence budget was classified until 2007, when Congress required disclosure of the aggregate
          NIP figure. Even now, the breakdown by agency remains classified. What we know comes largely from the
          Snowden documents and occasional congressional disclosures.
        </p>
      </div>

      <div className="space-y-2 my-8">
        {budgetHistory.map(item => (
          <div key={item.year} className="bg-white rounded-lg p-4 border flex items-center gap-4">
            <span className="font-mono font-bold text-stone-800 w-12">{item.year}</span>
            <span className="font-bold text-red-700 font-[family-name:var(--font-heading)] w-24">{item.total}</span>
            <span className="text-stone-500 text-sm">{item.note}</span>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-6 my-8">
          <p className="font-bold text-red-900 font-[family-name:var(--font-heading)] text-lg mb-2">⚠️ The Real Budget Is Higher</p>
          <p className="text-red-800">
            The $90 billion figure only includes the NIP and MIP. It does <strong>not</strong> include: intelligence
            activities funded through the defense budget&rsquo;s operations and maintenance accounts, intelligence-related
            activities by DHS, the FBI&rsquo;s counterintelligence budget (which is part of DOJ, not NIP), state and local
            intelligence fusion centers (77 nationwide), or the intelligence components of special operations. The
            true annual cost of American intelligence activities likely exceeds <strong>$100 billion</strong>.
          </p>
        </div>

        {/* CIA Coups */}
        <h2 className="font-[family-name:var(--font-heading)]">CIA Covert Operations: Overthrowing Democracies</h2>
        <p>
          Since its founding in 1947, the CIA has conducted covert operations to overthrow governments, assassinate
          leaders, arm insurgencies, and manipulate elections in dozens of countries. Many of these operations
          targeted <em>democratically elected</em> governments. The pattern is consistent: short-term geopolitical
          gain followed by long-term catastrophe.
        </p>
      </div>

      {/* Coups timeline */}
      <div className="space-y-4 my-8">
        {ciaCoups.map(coup => (
          <div key={coup.operation} className="bg-white rounded-xl shadow-sm border-l-4 border-red-500 p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-red-100 text-red-800 text-sm font-bold px-3 py-1 rounded-full">{coup.year}</span>
              <span className="bg-stone-100 text-stone-700 text-sm px-2 py-1 rounded">{coup.country}</span>
              <h4 className="font-[family-name:var(--font-heading)] font-bold text-stone-800">{coup.operation}</h4>
            </div>
            <p className="text-stone-600 text-sm mb-2">{coup.detail}</p>
            <p className="text-red-700 text-sm font-semibold">Blowback: {coup.blowback}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-stone-900 text-white rounded-xl p-6 my-8">
          <p className="text-lg italic leading-relaxed">
            &ldquo;The CIA has overthrown more democracies than it has protected. It armed the mujahideen who became
            the Taliban and Al-Qaeda. It provided the intelligence that justified the Iraq War based on fabricated
            sources. It operated torture chambers in secret prisons. And through it all, the American people were told
            this was being done to protect freedom and democracy. The irony would be funny if millions hadn&rsquo;t died.&rdquo;
          </p>
        </div>

        {/* Domestic Abuses */}
        <h2 className="font-[family-name:var(--font-heading)]">Domestic Abuses: Spying on Americans</h2>
        <p>
          The intelligence community was not supposed to target American citizens. The CIA&rsquo;s charter explicitly
          prohibits domestic intelligence activities. The Fourth Amendment protects against unreasonable searches.
          The FISA Court was created to provide judicial oversight. None of these safeguards have worked.
        </p>
      </div>

      {/* Domestic abuses */}
      <div className="space-y-4 my-8">
        {domesticAbuses.map(abuse => (
          <div key={abuse.program} className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-stone-800 text-white text-sm font-bold px-3 py-1 rounded">{abuse.agency}</span>
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-stone-800">{abuse.program}</h4>
            </div>
            <p className="text-stone-600 text-sm mb-2">{abuse.detail}</p>
            <p className="text-blue-700 text-sm">Exposed by: {abuse.exposed}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-6 my-8">
          <p className="font-bold text-red-900 font-[family-name:var(--font-heading)] text-lg mb-2">⚠️ The FISA Court: A Rubber Stamp</p>
          <p className="text-red-800">
            The Foreign Intelligence Surveillance Court (FISC) was created in 1978 to provide judicial oversight of
            intelligence surveillance. In practice, it has approved <strong>99.97%</strong> of all government requests.
            Between 1979 and 2023, the FISA Court approved over 45,000 surveillance orders and denied approximately
            <strong>12</strong>. The court operates in secret, hears only the government&rsquo;s side, publishes almost no
            opinions, and has no adversarial process. It is, functionally, a rubber stamp that provides a veneer of
            legality to mass surveillance.
          </p>
        </div>

        {/* Intelligence-Industrial Complex */}
        <h2 className="font-[family-name:var(--font-heading)]">The Intelligence-Industrial Complex</h2>
        <p>
          In 2010, the Washington Post&rsquo;s &ldquo;Top Secret America&rdquo; investigation revealed the staggering scale
          of intelligence outsourcing. Key findings:
        </p>
        <ul>
          <li><strong>1,931 private companies</strong> perform intelligence work for the government</li>
          <li><strong>1,271 government organizations</strong> work on counterterrorism, homeland security, and intelligence</li>
          <li><strong>854,000 people</strong> hold Top Secret security clearances</li>
          <li>An estimated <strong>70% of the intelligence budget</strong> goes to private contractors</li>
          <li>Contractors perform virtually every intelligence function, including analysis, collection, and even some covert operations</li>
          <li>The system is so complex that <strong>no one — not even the DNI — knows how much is spent or how many programs exist</strong></li>
        </ul>
      </div>

      {/* Contractor cards */}
      <div className="space-y-4 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-800">Key Intelligence Contractors</h3>
        {intelligenceIndustrialComplex.map(company => (
          <div key={company.company} className="bg-white rounded-xl shadow-sm border p-6">
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-stone-800 mb-2">{company.company}</h4>
            <div className="grid grid-cols-2 gap-3 text-sm mb-3">
              <div><span className="font-semibold text-stone-700">Revenue:</span> <span className="text-red-700 font-bold">{company.revenue}</span></div>
              <div><span className="font-semibold text-stone-700">Cleared employees:</span> {company.clearances}</div>
            </div>
            <p className="text-stone-600 text-sm">{company.detail}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 The Revolving Door</p>
          <p className="text-amber-800">
            The intelligence-industrial complex runs on a revolving door between government and industry. Senior
            intelligence officials routinely retire and take executive positions at the contractors they oversaw.
            CIA directors have joined private equity firms that own intelligence contractors. NSA directors have
            joined cybersecurity firms that sell to the NSA. This revolving door ensures that the contractors&rsquo;
            interests are always represented at the highest levels of government — and that the intelligence
            budget never shrinks.
          </p>
        </div>

        {/* Intelligence Failures */}
        <h2 className="font-[family-name:var(--font-heading)]">The Track Record: Expensive Failure</h2>
        <p>
          For $90+ billion per year, what has the intelligence community delivered? The record of major intelligence
          failures is as expensive as the budget itself:
        </p>
        <ul>
          <li><strong>9/11 (2001):</strong> Despite spending $30B/year, 13 intelligence agencies failed to prevent the worst terrorist attack in US history. The CIA and FBI had intelligence on several hijackers but failed to share it. The 9/11 Commission found &ldquo;a failure of imagination.&rdquo;</li>
          <li><strong>Iraq WMDs (2003):</strong> The intelligence community&rsquo;s &ldquo;high confidence&rdquo; assessment that Iraq possessed WMDs was catastrophically wrong. The National Intelligence Estimate relied on fabricated sources, and dissenting views were buried. Cost of the resulting war: $2+ trillion and hundreds of thousands of lives.</li>
          <li><strong>Arab Spring (2011):</strong> The IC was caught flat-footed by the wave of revolutions across the Middle East. Billions spent on regional intelligence failed to predict the most significant geopolitical event in the region in decades.</li>
          <li><strong>ISIS Rise (2013–2014):</strong> Despite massive intelligence presence in Iraq, the IC failed to predict the rapid rise and territorial conquests of ISIS. President Obama infamously referred to ISIS as the &ldquo;JV team&rdquo; based on intelligence assessments.</li>
          <li><strong>Afghanistan Collapse (2021):</strong> Intelligence assessments said the Afghan government could hold for months after US withdrawal. It collapsed in 11 days. Twenty years and billions in intelligence spending produced a fundamental misunderstanding of the country.</li>
          <li><strong>Russia/Ukraine (mixed):</strong> The IC correctly predicted Russia&rsquo;s 2022 invasion of Ukraine — a notable success. But it also overestimated Russia&rsquo;s military capabilities and underestimated Ukraine&rsquo;s resistance.</li>
        </ul>

        <div className="not-prose bg-stone-900 text-white rounded-xl p-6 my-8">
          <p className="text-lg italic leading-relaxed">
            &ldquo;The intelligence community has had one primary job since 9/11: prevent another 9/11. To do this,
            they asked for — and received — virtually unlimited money, unprecedented surveillance powers, secret
            prisons, and freedom from accountability. They got everything they asked for. And what did we get?
            The Iraq War based on fabricated intelligence. Mass surveillance of American citizens. Torture in
            secret prisons. The rise of ISIS. The collapse of Afghanistan. The intelligence community&rsquo;s failures
            have cost more American lives and treasure than the threats they were supposed to prevent.&rdquo;
          </p>
        </div>

        {/* Oversight: The Illusion */}
        <h2 className="font-[family-name:var(--font-heading)]">Oversight: The Illusion of Accountability</h2>
        <p>
          In theory, the intelligence community is subject to oversight by:
        </p>
        <ul>
          <li><strong>Congressional Intelligence Committees:</strong> The Senate and House intelligence committees are supposed to provide oversight. In practice, they are often co-opted — members become defenders of the agencies they oversee (a phenomenon known as &ldquo;regulatory capture&rdquo;). Committee members cannot discuss classified briefings publicly, making accountability impossible.</li>
          <li><strong>The FISA Court:</strong> Approves 99.97% of requests. No adversarial process. Secret opinions.</li>
          <li><strong>Inspectors General:</strong> Each agency has an IG, but IGs lack enforcement power and their reports can be classified. Whistleblowers who go to IGs instead of the press have historically been retaliated against.</li>
          <li><strong>The President:</strong> The president oversees the IC through the National Security Council. But presidents have strong incentives to use intelligence capabilities, not restrain them.</li>
        </ul>
        <p>
          The result is a system where the overseen effectively control their overseers. When the CIA lied to the
          Senate Intelligence Committee about its torture program, the Committee investigated — and the CIA spied
          on the Committee&rsquo;s computers. No one was prosecuted.
        </p>

        {/* The Libertarian Case */}
        <h2 className="font-[family-name:var(--font-heading)]">The Libertarian Case for Intelligence Reform</h2>
        <ul>
          <li><strong>Secret government is incompatible with self-governance.</strong> Citizens cannot make informed decisions about foreign policy, war, and civil liberties when the government operates in secret. Classification is used not to protect sources and methods, but to hide embarrassments, crimes, and failures.</li>
          <li><strong>Mass surveillance violates the Fourth Amendment.</strong> The Founders wrote the Fourth Amendment specifically to prevent the kind of &ldquo;general warrants&rdquo; that the NSA now issues at scale. Collecting the communications metadata of every American is the definition of an unreasonable search.</li>
          <li><strong>Covert operations bypass democratic deliberation.</strong> When the CIA overthrows a government or arms a rebel group, it is making foreign policy — an act that should require congressional authorization and public debate, not a secret presidential finding.</li>
          <li><strong>The contractor model is a grift.</strong> Paying private companies $60+ billion per year to do intelligence work that government employees could do creates a permanent lobby for expanding intelligence activities, regardless of whether they serve the national interest.</li>
          <li><strong>Accountability is non-existent.</strong> No CIA officer has been prosecuted for torture. No NSA official has been prosecuted for mass surveillance. No intelligence official has been prosecuted for lying to Congress about either. The only person imprisoned was the whistleblower.</li>
        </ul>

        <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-6 my-8">
          <p className="font-bold text-red-900 font-[family-name:var(--font-heading)] text-lg mb-2">⚠️ Who Watches the Watchers?</p>
          <p className="text-red-800">
            Senator Frank Church, after his committee investigated CIA and NSA abuses in 1975, warned: &ldquo;If this
            government ever became a tyranny, the technological capacity that the intelligence community has given
            the government could enable it to impose total tyranny. There would be no way to fight back because the
            most careful effort to combine together in resistance to the government would be within the reach of the
            government to know.&rdquo; That was 1975. The surveillance capabilities Church warned about have increased
            by orders of magnitude since then.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Sources</h2>
        <ul className="text-sm">
          <li>Washington Post, &ldquo;Top Secret America&rdquo; (2010)</li>
          <li>Office of the Director of National Intelligence, budget disclosures (2007–2024)</li>
          <li>Senate Select Committee on Intelligence, Torture Report (2014)</li>
          <li>Church Committee Reports (1975–1976)</li>
          <li>Edward Snowden documents, published by The Guardian and Washington Post (2013–2014)</li>
          <li>Tim Weiner, <em>Legacy of Ashes: The History of the CIA</em> (2007)</li>
          <li>Dana Priest and William Arkin, <em>Top Secret America</em> (2011)</li>
          <li>Congressional Research Service, intelligence budget reports</li>
          <li>FISA Court, annual reports to Congress</li>
          <li>Government Accountability Office, intelligence community workforce reports</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Related Pages</h2>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {[
            { href: '/covert', label: 'Covert Operations', desc: 'The full history of US covert action' },
            { href: '/regime-changes', label: 'Regime Changes', desc: 'Every government the US has overthrown' },
            { href: '/contractors', label: 'Defense Contractors', desc: 'The companies profiting from intelligence' },
            { href: '/spending', label: 'Military Spending', desc: 'Where the $900B goes' },
            { href: '/modern-tactics', label: 'Modern Warfare', desc: 'How intelligence shapes invisible wars' },
            { href: '/nuclear', label: 'Nuclear Weapons', desc: 'The secrecy state built for the bomb' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="block bg-white rounded-lg p-4 border hover:shadow-md transition">
              <p className="font-semibold text-blue-800">{link.label}</p>
              <p className="text-stone-500 text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
