import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'
import FaqJsonLd from '@/components/FaqJsonLd'

export const metadata: Metadata = {
  title: 'Sources — Data References & Bibliography',
  description: 'Complete list of all data sources used by WarCosts, including Brown Costs of War, CRS, SIPRI, DMDC, USAID, DoD reports, and more. Every number on the site can be traced to a primary source.',
  keywords: ['warcosts sources', 'military spending data sources', 'war cost sources', 'defense data bibliography', 'SIPRI data', 'Brown University costs of war', 'CRS military reports'],
  alternates: { canonical: 'https://www.warcosts.org/sources' },
  openGraph: {
    title: 'Sources — Complete Data Bibliography | WarCosts',
    description: 'Every number on WarCosts is traceable to a primary source. Our complete bibliography of government, academic, and investigative sources.',
    url: 'https://www.warcosts.org/sources',
    type: 'website',
  },
}

const primarySources = [
  { name: 'Brown University Costs of War Project', url: 'https://watson.brown.edu/costsofwar/', desc: 'The most comprehensive accounting of post-9/11 war costs, casualties, and displacement. Run by the Watson Institute for International and Public Affairs. Principal investigators: Neta Crawford and Catherine Lutz.', dataUsed: 'Total War on Terror costs ($8T+), post-9/11 casualty estimates, displacement figures, veteran care projections, interest on war debt calculations.' },
  { name: 'Congressional Research Service (CRS)', url: 'https://crsreports.congress.gov/', desc: 'The research arm of the United States Congress. Produces authoritative, nonpartisan reports on defense policy, military operations, and spending.', dataUsed: 'US military casualties (RL32492), costs of major wars (RL33110), military operations histories, defense budget analysis, constitutional war powers analysis.' },
  { name: 'SIPRI Military Expenditure Database', url: 'https://www.sipri.org/databases/milex', desc: 'Stockholm International Peace Research Institute tracks global military expenditures since 1949. The gold standard for international military spending comparison.', dataUsed: 'Annual military spending by country, GDP share calculations, global spending comparisons, trend data.' },
  { name: 'SIPRI Arms Transfers Database', url: 'https://www.sipri.org/databases/armstransfers', desc: 'Tracks international transfers of major conventional weapons. Uses Trend Indicator Values (TIVs) for consistent comparison.', dataUsed: 'US arms sales data, weapons transfer volumes by country and region.' },
  { name: 'Defense Manpower Data Center (DMDC)', url: 'https://dwp.dmdc.osd.mil/dwp/app/dod-data-reports/cas', desc: 'The official source for US military casualty records, maintained by the Department of Defense.', dataUsed: 'Battle deaths, total military deaths, wounded figures for all conflicts. The most authoritative source for US military casualty data.' },
]

const governmentSources = [
  { name: 'Department of Defense Budget Documents', url: 'https://comptroller.defense.gov/Budget-Materials/', desc: 'Annual budget justification documents, including service-level breakdowns, procurement plans, and R&D budgets.', dataUsed: 'Detailed budget breakdowns by category, service branch, and program.' },
  { name: 'Office of Management and Budget (OMB)', url: 'https://www.whitehouse.gov/omb/budget/historical-tables/', desc: 'Historical federal budget data dating back to 1940, including defense outlays as a share of GDP and total spending.', dataUsed: 'Historical defense spending trends, GDP share calculations, discretionary spending comparisons.' },
  { name: 'USAID Foreign Aid Explorer', url: 'https://explorer.usaid.gov/', desc: 'Comprehensive database of US foreign aid disbursements by country, year, sector, and type.', dataUsed: 'Military vs. economic aid breakdowns, foreign military financing data, country-level aid figures.' },
  { name: 'DoD Base Structure Report', url: 'https://www.acq.osd.mil/eie/BSI/BEI_Library.html', desc: 'Official annual inventory of US military installations worldwide, including size, personnel, and replacement value.', dataUsed: 'Overseas base counts, installation data, global military footprint.' },
  { name: 'USASpending.gov', url: 'https://www.usaspending.gov/', desc: 'The official source for federal spending data, including defense contracts, grants, and direct payments.', dataUsed: 'Defense contractor spending data, contract values by company, procurement spending.' },
  { name: 'Bureau of Labor Statistics', url: 'https://www.bls.gov/data/inflation_calculator.htm', desc: 'Publishes the CPI-U (Consumer Price Index for All Urban Consumers), used for all inflation adjustments.', dataUsed: 'All inflation adjustments throughout the site use BLS CPI-U data.' },
  { name: 'VA National Veteran Suicide Prevention Annual Report', url: 'https://www.mentalhealth.va.gov/suicide_prevention/', desc: 'The VA\'s annual report on veteran suicide, including rates by age, gender, era, and method.', dataUsed: 'Veteran suicide statistics, trend data, demographic breakdowns.' },
  { name: 'Government Accountability Office (GAO)', url: 'https://www.gao.gov/', desc: 'Congressional watchdog that audits federal agencies and programs, including extensive DOD oversight.', dataUsed: 'Pentagon audit findings, weapons program cost overruns, waste and fraud data.' },
  { name: 'DOD Inspector General', url: 'https://www.dodig.mil/', desc: 'Internal watchdog for the Department of Defense. Produces audits, investigations, and evaluations.', dataUsed: 'Audit failure data, accounting adjustment figures, waste and fraud documentation.' },
  { name: 'Special Inspector General for Afghanistan Reconstruction (SIGAR)', url: 'https://www.sigar.mil/', desc: 'Oversaw US reconstruction spending in Afghanistan. Documented billions in waste, fraud, and abuse.', dataUsed: 'Afghanistan reconstruction costs, waste examples, lessons learned reports.' },
]

const academicSources = [
  { name: 'David Vine — American University', url: 'https://www.american.edu/cas/faculty/vine.cfm', desc: 'Professor of anthropology and author of "Base Nation: How U.S. Military Bases Abroad Harm America and the World." Leading researcher on overseas basing.', dataUsed: 'Overseas base counts (broader definition), base impact analysis.' },
  { name: 'Political Economy Research Institute (PERI) — UMass Amherst', url: 'https://peri.umass.edu/', desc: 'Research on employment effects of government spending by sector. Key study: "The U.S. Employment Effects of Military and Domestic Spending Priorities."', dataUsed: 'Jobs per billion dollars by sector (military vs. education vs. healthcare), used in Jobs Calculator.' },
  { name: 'National Priorities Project', url: 'https://www.nationalpriorities.org/', desc: 'Analyzes the federal budget with a focus on how military spending compares to other priorities. Produces the annual "Trade-Offs" analysis.', dataUsed: 'Discretionary spending breakdowns, opportunity cost calculations, tax receipt methodology.' },
  { name: 'War Resisters League', url: 'https://www.warresisters.org/', desc: 'Produces the annual "Where Your Income Tax Money Really Goes" pie chart, which includes military-related spending across all agencies.', dataUsed: 'Alternative military spending share calculations (including hidden costs).' },
]

const investigativeSources = [
  { name: 'Bureau of Investigative Journalism', url: 'https://www.thebureauinvestigates.com/projects/drone-war', desc: 'London-based investigative journalism organization. Runs the most comprehensive drone strike casualty database.', dataUsed: 'Drone strike counts and casualty figures by country (Pakistan, Yemen, Somalia, Afghanistan).' },
  { name: 'Iraq Body Count', url: 'https://www.iraqbodycount.org/', desc: 'Maintains a database of documented civilian deaths from violence in Iraq since 2003. Uses cross-referenced media reports, hospital records, and official data.', dataUsed: 'Iraqi civilian death counts — the most rigorous documented count available.' },
  { name: 'Airwars', url: 'https://airwars.org/', desc: 'Tracks civilian harm from international airstrikes across multiple conflicts. Uses incident-level documentation.', dataUsed: 'Civilian casualties from US and coalition airstrikes in Iraq, Syria, Libya, Somalia, and Yemen.' },
  { name: 'Project On Government Oversight (POGO)', url: 'https://www.pogo.org/', desc: 'Investigates government waste, corruption, and abuse of power, with extensive coverage of defense spending.', dataUsed: 'Revolving door data, contractor waste and fraud, weapons program failures.' },
  { name: 'OpenSecrets', url: 'https://www.opensecrets.org/', desc: 'Tracks money in US politics, including defense industry lobbying and campaign contributions.', dataUsed: 'Defense lobbying spending, campaign contributions by defense contractors, revolving door data.' },
]

export default function SourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Sources' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Sources</h1>
      <p className="text-stone-500 mb-8 max-w-3xl">
        Every number on WarCosts can be traced to a primary source. We use official government reports,
        peer-reviewed academic research, and established investigative organizations. Below is the complete
        list of sources, organized by type, with descriptions of what data each provides.
      </p>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Primary Data Sources</h2>
      <p className="text-stone-500 text-sm mb-4">These are the core sources that provide the majority of our data.</p>
      <div className="space-y-4 mb-12">
        {primarySources.map(s => (
          <div key={s.name} className="bg-white rounded-lg border p-5">
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-red-800 hover:underline text-lg">{s.name}</a>
            <p className="text-stone-600 text-sm mt-1">{s.desc}</p>
            <p className="text-stone-500 text-xs mt-2"><strong>Data used:</strong> {s.dataUsed}</p>
          </div>
        ))}
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Government Sources</h2>
      <p className="text-stone-500 text-sm mb-4">Official US government reports, databases, and budget documents.</p>
      <div className="space-y-4 mb-12">
        {governmentSources.map(s => (
          <div key={s.name} className="bg-white rounded-lg border p-5">
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-red-800 hover:underline">{s.name}</a>
            <p className="text-stone-600 text-sm mt-1">{s.desc}</p>
            <p className="text-stone-500 text-xs mt-2"><strong>Data used:</strong> {s.dataUsed}</p>
          </div>
        ))}
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Academic Sources</h2>
      <p className="text-stone-500 text-sm mb-4">Peer-reviewed research and academic institutions.</p>
      <div className="space-y-4 mb-12">
        {academicSources.map(s => (
          <div key={s.name} className="bg-white rounded-lg border p-5">
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-red-800 hover:underline">{s.name}</a>
            <p className="text-stone-600 text-sm mt-1">{s.desc}</p>
            <p className="text-stone-500 text-xs mt-2"><strong>Data used:</strong> {s.dataUsed}</p>
          </div>
        ))}
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Investigative & Advocacy Sources</h2>
      <p className="text-stone-500 text-sm mb-4">Established investigative organizations with documented methodologies.</p>
      <div className="space-y-4 mb-12">
        {investigativeSources.map(s => (
          <div key={s.name} className="bg-white rounded-lg border p-5">
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-red-800 hover:underline">{s.name}</a>
            <p className="text-stone-600 text-sm mt-1">{s.desc}</p>
            <p className="text-stone-500 text-xs mt-2"><strong>Data used:</strong> {s.dataUsed}</p>
          </div>
        ))}
      </div>

      <div className="bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Source Hierarchy</h3>
        <p className="text-stone-600 text-sm mb-3">When sources conflict, we prioritize:</p>
        <ol className="list-decimal list-inside space-y-1 text-stone-600 text-sm">
          <li><strong>Official government records</strong> (DoD, CRS, OMB) — most authoritative for US data</li>
          <li><strong>Peer-reviewed academic research</strong> (Brown, SIPRI) — most comprehensive analysis</li>
          <li><strong>Established investigative organizations</strong> (IBC, Airwars, TBIJ) — best civilian data</li>
          <li><strong>Investigative journalism</strong> (major outlets with documented sourcing)</li>
        </ol>
      </div>

      {/* International & Media Sources */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 mt-12">International & Media Sources</h2>
      <p className="text-stone-500 text-sm mb-4">Additional sources used for context, verification, and international data.</p>
      <div className="space-y-4 mb-12">
        {[
          { name: 'United Nations Office for the Coordination of Humanitarian Affairs (OCHA)', url: 'https://www.unocha.org/', desc: 'UN humanitarian data on displacement, casualties, and aid requirements in conflict zones.', dataUsed: 'Refugee and displacement figures, humanitarian impact data.' },
          { name: 'International Committee of the Red Cross (ICRC)', url: 'https://www.icrc.org/', desc: 'International humanitarian law expertise and conflict impact data.', dataUsed: 'Laws of war context, humanitarian impact assessments.' },
          { name: 'Congressional Budget Office (CBO)', url: 'https://www.cbo.gov/', desc: 'Nonpartisan budget analysis for Congress, including defense spending projections.', dataUsed: 'Long-term defense budget projections, fiscal impact analysis.' },
          { name: 'Federation of American Scientists (FAS)', url: 'https://fas.org/', desc: 'Nuclear weapons data, intelligence budget analysis, and government secrecy research.', dataUsed: 'Nuclear arsenal data, intelligence budget estimates, classified program analysis.' },
          { name: 'Costs of War Researcher Network', url: 'https://watson.brown.edu/costsofwar/', desc: 'Academic network of 50+ scholars studying the costs and consequences of post-9/11 wars.', dataUsed: 'Peer-reviewed research on indirect deaths, displacement, civil liberties impacts.' },
        ].map(s => (
          <div key={s.name} className="bg-white rounded-lg border p-5">
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-red-800 hover:underline">{s.name}</a>
            <p className="text-stone-600 text-sm mt-1">{s.desc}</p>
            <p className="text-stone-500 text-xs mt-2"><strong>Data used:</strong> {s.dataUsed}</p>
          </div>
        ))}
      </div>

      {/* Data Integrity Principles */}
      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Data Integrity Principles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border p-5">
            <h3 className="font-bold text-stone-900 mb-2">🎯 Conservative Estimates</h3>
            <p className="text-stone-600 text-sm">When sources provide ranges, we typically use the lower or midpoint estimate. We prefer undercounting to overcounting. For civilian casualties especially, documented counts (like Iraq Body Count) are almost certainly lower than actual figures.</p>
          </div>
          <div className="bg-white rounded-lg border p-5">
            <h3 className="font-bold text-stone-900 mb-2">💱 Inflation Adjustment</h3>
            <p className="text-stone-600 text-sm">All historical dollar amounts are adjusted to 2024 dollars using BLS CPI-U (Consumer Price Index for All Urban Consumers). For each conflict, we use the midpoint year or year of peak spending as the base year for adjustment.</p>
          </div>
          <div className="bg-white rounded-lg border p-5">
            <h3 className="font-bold text-stone-900 mb-2">✅ Cross-Referencing</h3>
            <p className="text-stone-600 text-sm">Major figures are cross-referenced across multiple sources. If CRS reports different casualty numbers than DMDC, we note the discrepancy and explain which figure we use and why. Transparency about uncertainty is part of our methodology.</p>
          </div>
          <div className="bg-white rounded-lg border p-5">
            <h3 className="font-bold text-stone-900 mb-2">🔄 Regular Updates</h3>
            <p className="text-stone-600 text-sm">Data is updated on different schedules: Iran War data daily, SIPRI data annually (April publication), CRS reports as published, and historical data when new research emerges. Last comprehensive update: March 2026.</p>
          </div>
        </div>
      </section>

      {/* What We Don't Include */}
      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What We Don&apos;t Include (And Why)</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <ul className="space-y-3 text-stone-700 text-sm">
            <li><strong>Classified programs:</strong> Black budget programs (~$30B/yr) are acknowledged but cannot be sourced in detail. We use aggregate figures from DNI public disclosures.</li>
            <li><strong>Indirect economic costs:</strong> War disrupts trade, raises oil prices, and redirects capital. These macroeconomic effects are real but difficult to attribute precisely, so we exclude them from headline figures.</li>
            <li><strong>Psychological costs:</strong> PTSD prevalence and intergenerational trauma are documented but not monetized in our cost figures. The VA spending figures capture treatment costs but not the full human toll.</li>
            <li><strong>Environmental damage abroad:</strong> Depleted uranium contamination, burn pit pollution, and infrastructure destruction cause long-term health effects. We note these qualitatively but don&apos;t assign dollar values.</li>
            <li><strong>Opportunity costs:</strong> What $11.3 trillion could have purchased in education, healthcare, or infrastructure is explored in our <Link href="/opportunity-cost" className="text-red-800 hover:underline">Opportunity Cost</Link> analysis but not included in war cost totals.</li>
          </ul>
        </div>
      </section>

      {/* Sources We Considered But Don't Use */}
      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources We Don&apos;t Use (And Why)</h2>
        <div className="bg-stone-50 border rounded-lg p-6 text-stone-600 text-sm space-y-3">
          <p><strong>Think tank reports with undisclosed defense industry funding:</strong> Many Washington think tanks receive significant funding from defense contractors. We note this when referencing their work and prefer independent academic sources.</p>
          <p><strong>Social media and unverified reports:</strong> We don&apos;t use casualty figures from social media, unverified claims, or single-source reports without corroboration.</p>
          <p><strong>Leaked classified documents:</strong> While potentially valuable, we restrict our sources to publicly available, legally obtained data to maintain credibility and legal standing.</p>
          <p><strong>Self-reported government figures without independent verification:</strong> When governments (including the US) report their own casualty inflictions or program successes, we cross-reference with independent sources before using the figures.</p>
        </div>
      </section>

      {/* How to Verify */}
      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How to Verify Our Data</h2>
        <div className="bg-white rounded-lg border p-6 text-stone-600 text-sm space-y-3">
          <p>Every figure on WarCosts can be independently verified. Here&apos;s how:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Check the source citation</strong> — Every data point includes its source. Click through to the original document.</li>
            <li><strong>Download our raw data</strong> — Our <Link href="/downloads" className="text-red-800 hover:underline">Downloads page</Link> provides JSON files with source references for every figure.</li>
            <li><strong>Cross-reference with primary sources</strong> — Visit CRS, SIPRI, Brown University, or DoD directly. Our figures should match or be conservative compared to their published data.</li>
            <li><strong>Check our methodology</strong> — Our <Link href="/methodology" className="text-red-800 hover:underline">Methodology page</Link> explains every calculation, adjustment, and assumption.</li>
            <li><strong>Report discrepancies</strong> — Found an error? We want to know. Accuracy is our highest priority.</li>
          </ol>
        </div>
      </section>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/methodology" className="text-red-800 hover:underline">→ Methodology — How we process and present this data</Link></li>
          <li><Link href="/downloads" className="text-red-800 hover:underline">→ Downloads — Raw data files for your research</Link></li>
          <li><Link href="/about" className="text-red-800 hover:underline">→ About WarCosts — Mission and perspective</Link></li>
          <li><Link href="/faq" className="text-red-800 hover:underline">→ FAQ — Common questions</Link></li>
          <li><Link href="/glossary" className="text-red-800 hover:underline">→ Glossary — Military terminology decoded</Link></li>
        </ul>
      </div>

      {/* Methodology Quick Reference */}
      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Methodology Quick Reference</h2>
        <div className="bg-white rounded-lg border p-6 text-stone-600 text-sm space-y-3">
          <p><strong>War costs:</strong> We follow the Brown University Costs of War methodology, which includes direct appropriations, DOD base budget increases, veteran care (current and projected), interest on war borrowing, Homeland Security costs, and State Department war-related spending.</p>
          <p><strong>Casualty figures:</strong> US military casualties from DMDC (most authoritative). Civilian casualties from IBC, Airwars, and Brown University (documented, conservative counts).</p>
          <p><strong>Military spending:</strong> Annual figures from SIPRI and OMB. Historical data from CRS. All adjusted to 2024 dollars using BLS CPI-U.</p>
          <p><strong>Arms transfers:</strong> SIPRI Arms Transfers Database using Trend Indicator Values (TIVs) for consistent cross-country comparison.</p>
          <p><strong>Foreign aid:</strong> USAID Foreign Aid Explorer for disbursement data; CRS for policy analysis.</p>
          <p>For complete methodology, see our <Link href="/methodology" className="text-red-800 hover:underline">Methodology page</Link>.</p>
        </div>
      </section>

      <FaqJsonLd faqs={[
        { q: 'Where does WarCosts get its data?', a: 'WarCosts compiles data from official government sources (DoD, CRS, SIPRI, OMB, BLS, USAID), peer-reviewed academic research (Brown University Costs of War Project), and established investigative organizations (Airwars, Iraq Body Count, Bureau of Investigative Journalism). Every figure is traceable to a primary source.' },
        { q: 'How does WarCosts handle conflicting data sources?', a: 'When sources conflict, we prioritize: (1) official government records for US-specific data, (2) peer-reviewed academic research for comprehensive analysis, (3) established investigative organizations for civilian casualty data, and (4) investigative journalism with documented sourcing.' },
        { q: 'Are WarCosts casualty figures accurate?', a: 'Casualty estimates are inherently uncertain and almost certainly undercount the true toll. We use conservative, documented figures from credible organizations like Brown University, Iraq Body Count, and DMDC. We note uncertainty ranges where available.' },
        { q: 'How often is WarCosts data updated?', a: 'Update frequency varies: Iran War 2026 data updates daily, SIPRI military spending data updates annually in April, CRS reports update as published, and historical data updates when new research emerges.' },
        { q: 'Can I download WarCosts data for my own research?', a: 'Yes! All aggregated data is freely available in JSON format on our Downloads page. We ask for attribution ("Source: WarCosts.org") if used in published work. The raw source data belongs to the original publishers (CRS, SIPRI, Brown University, etc.).' },
      ]} />

      {/* Citation Guide */}
      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How to Cite WarCosts Data</h2>
        <div className="bg-white rounded-lg border p-6 text-stone-600 text-sm space-y-4">
          <div>
            <h3 className="font-bold text-stone-900 mb-1">For Academic Papers (APA)</h3>
            <code className="block bg-stone-50 p-3 rounded text-xs">WarCosts. (2026). [Dataset title]. WarCosts.org. https://warcosts.org/[page]. Data compiled from [primary source].</code>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">For Journalism</h3>
            <code className="block bg-stone-50 p-3 rounded text-xs">According to WarCosts.org, which compiles data from [CRS/SIPRI/Brown University], [statistic].</code>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">For Social Media</h3>
            <code className="block bg-stone-50 p-3 rounded text-xs">Source: WarCosts.org | Data from [primary source]</code>
          </div>
          <p className="text-stone-400 text-xs">
            We strongly encourage citing the underlying primary source alongside WarCosts. Our value is
            aggregation and presentation; the data belongs to the original researchers and institutions.
          </p>
        </div>
      </section>

      {/* Open Data Commitment */}
      <section className="mt-12 bg-stone-900 text-white rounded-xl p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Our Open Data Commitment</h2>
        <div className="space-y-3 text-stone-300 text-sm">
          <p>
            WarCosts is committed to making military spending data freely accessible. We believe that
            information about how public money is spent should never be behind a paywall, require a login,
            or demand payment.
          </p>
          <p>
            All of our aggregated datasets are available for download in JSON format on our
            <Link href="/downloads" className="text-red-400 hover:underline"> Downloads page</Link>.
            The data is CORS-enabled for direct API access from web applications.
            No registration, no API key, no terms of service beyond simple attribution.
          </p>
          <p>
            We particularly welcome use by: academic researchers studying defense policy,
            journalists investigating military spending, educators teaching about government budgets,
            developers building data-driven applications, and any citizen who wants to understand
            where their tax dollars go.
          </p>
        </div>
      </section>

      {/* Final Note */}
      <div className="mt-8 border-t pt-6">
        <p className="text-stone-400 text-xs">
          This page was last updated in July 2026. Sources are reviewed quarterly and updated as new
          data becomes available. If you are aware of a data source we should include, or if you find
          a discrepancy between our data and a primary source, please let us know. Accuracy is our
          highest priority — above narrative, above impact, above everything else.
        </p>
        <p className="text-stone-400 text-xs mt-2">
          WarCosts is a project of <a href="https://thedataproject.ai" className="text-red-800 hover:underline">TheDataProject.ai</a>.
          All aggregated data is freely available on our <Link href="/downloads" className="text-red-800 hover:underline">Downloads page</Link>.
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
