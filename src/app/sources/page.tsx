import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Sources — Data References & Bibliography',
  description: 'Full list of data sources used by WarCosts, including Brown Costs of War, CRS, SIPRI, DMDC, USAID, and DoD reports.',
}

const sources = [
  { name: 'Brown University Costs of War Project', url: 'https://watson.brown.edu/costsofwar/', desc: 'Comprehensive accounting of post-9/11 war costs, casualties, and displacement.' },
  { name: 'Congressional Research Service (CRS)', url: 'https://crsreports.congress.gov/', desc: 'Official reports on American casualties, military operations, and defense policy.' },
  { name: 'SIPRI Military Expenditure Database', url: 'https://www.sipri.org/databases/milex', desc: 'Global military spending data since 1949.' },
  { name: 'SIPRI Arms Transfers Database', url: 'https://www.sipri.org/databases/armstransfers', desc: 'International arms sales and transfers data.' },
  { name: 'Defense Manpower Data Center (DMDC)', url: 'https://dwp.dmdc.osd.mil/dwp/app/dod-data-reports/cas', desc: 'Official US military casualty records.' },
  { name: 'USAID Foreign Aid Explorer', url: 'https://explorer.usaid.gov/', desc: 'US foreign aid disbursements by country, year, and sector.' },
  { name: 'DoD Base Structure Report', url: 'https://www.acq.osd.mil/eie/BSI/BEI_Library.html', desc: 'Official inventory of US military installations worldwide.' },
  { name: 'USASpending.gov', url: 'https://www.usaspending.gov/', desc: 'Federal spending data including defense contracts.' },
  { name: 'Office of Management and Budget (OMB)', url: 'https://www.whitehouse.gov/omb/budget/historical-tables/', desc: 'Historical federal budget data including defense spending.' },
  { name: 'Bureau of Investigative Journalism', url: 'https://www.thebureauinvestigates.com/projects/drone-war', desc: 'Drone strike casualty tracking.' },
  { name: 'Iraq Body Count', url: 'https://www.iraqbodycount.org/', desc: 'Documented civilian deaths from violence in Iraq.' },
  { name: 'Airwars', url: 'https://airwars.org/', desc: 'Civilian harm tracking from international airstrikes.' },
  { name: 'David Vine, American University', url: 'https://dfrlab.org/', desc: 'Research on US overseas military bases.' },
  { name: 'BLS CPI Inflation Calculator', url: 'https://www.bls.gov/data/inflation_calculator.htm', desc: 'Used for all inflation adjustments to 2023 dollars.' },
]

export default function SourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Sources' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-8">Sources</h1>

      <div className="space-y-4">
        {sources.map(s => (
          <div key={s.name} className="bg-white rounded-lg border p-5">
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">{s.name}</a>
            <p className="text-muted text-sm mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
