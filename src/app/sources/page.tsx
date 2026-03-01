import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Sources — Data References & Bibliography | WarCosts',
  description: 'Complete list of all data sources used by WarCosts, including Brown Costs of War, CRS, SIPRI, DMDC, USAID, DoD reports, and more. Every number on the site can be traced to a primary source.',
  keywords: ['warcosts sources', 'military spending data sources', 'war cost sources', 'defense data bibliography'],
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

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/methodology" className="text-red-800 hover:underline">→ Methodology — How we process and present this data</Link></li>
          <li><Link href="/downloads" className="text-red-800 hover:underline">→ Downloads — Raw data files for your research</Link></li>
          <li><Link href="/about" className="text-red-800 hover:underline">→ About WarCosts — Mission and perspective</Link></li>
          <li><Link href="/faq" className="text-red-800 hover:underline">→ FAQ — Common questions</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
