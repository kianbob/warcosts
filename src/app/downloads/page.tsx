import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Downloads — Raw Data Files & Data Dictionary | WarCosts',
  description: 'Download raw WarCosts data files: conflicts, military spending, foreign aid, overseas presence, arms sales, and opportunity costs. Open data for researchers.',
}

const files = [
  {
    name: 'conflicts.json', size: '~25KB',
    desc: '36 US conflicts with costs, casualties, outcomes, and analysis — every war from 1775 to present.',
    fields: [
      { name: 'id', desc: 'URL-safe slug (e.g., "iraq-war")' },
      { name: 'name / shortName', desc: 'Full and abbreviated conflict name' },
      { name: 'era', desc: 'Historical era (Founding Era, Cold War, War on Terror, etc.)' },
      { name: 'type', desc: 'war, undeclared_war, covert_operation, coup, intervention' },
      { name: 'startYear / endYear', desc: 'Conflict dates' },
      { name: 'costInflationAdjusted', desc: 'Total cost in 2023 dollars' },
      { name: 'usCasualties', desc: 'Object: { deaths, wounded, battleDeaths, missing }' },
      { name: 'civilianDeaths', desc: 'Estimated civilian deaths (conservative)' },
      { name: 'congressionalAuth', desc: 'Boolean — was Congress asked?' },
      { name: 'outcome', desc: 'Victory, Defeat, Treaty/Inconclusive, Ongoing' },
    ]
  },
  {
    name: 'military-spending.json', size: '~3KB',
    desc: 'Annual US military spending 1940–2024 with percentage of GDP by president.',
    fields: [
      { name: 'year', desc: 'Calendar year' },
      { name: 'amount', desc: 'Spending in billions (2023 dollars)' },
      { name: 'pctGdp', desc: 'Military spending as percentage of GDP' },
      { name: 'president', desc: 'President in office' },
    ]
  },
  {
    name: 'foreign-aid.json', size: '~2KB',
    desc: 'Top foreign aid recipients since 2001 with annual and cumulative totals.',
    fields: [
      { name: 'totalAnnual', desc: 'Current annual foreign aid budget' },
      { name: 'totalSince2001', desc: 'Cumulative since 2001' },
      { name: 'topRecipients[]', desc: 'country, totalSince2001, annual2023, type, note' },
    ]
  },
  {
    name: 'overseas-presence.json', size: '~2KB',
    desc: 'US military bases and troop deployments by country with costs.',
    fields: [
      { name: 'totalBases / totalCountries', desc: 'Aggregate counts' },
      { name: 'totalOverseasTroops', desc: 'Total troops stationed abroad' },
      { name: 'topDeployments[]', desc: 'country, troops, bases, since, annualCost, note' },
    ]
  },
  {
    name: 'arms-sales.json', size: '~2KB',
    desc: 'Top US arms sales buyers with totals and context notes.',
    fields: [
      { name: 'totalAnnual', desc: 'Annual arms sales volume' },
      { name: 'topBuyers[]', desc: 'country, total, since, note' },
      { name: 'topContractors[]', desc: 'company, revenue, note' },
    ]
  },
  {
    name: 'opportunity-costs.json', size: '~2KB',
    desc: 'What $8 trillion could have bought — 10 examples with unit costs.',
    fields: [
      { name: 'warOnTerrorTotal', desc: 'Total War on Terror cost ($8T)' },
      { name: 'examples[]', desc: 'item, unitCost, units, description' },
    ]
  },
  {
    name: 'stats.json', size: '~1KB',
    desc: 'Aggregate statistics: total conflicts, deaths, costs, spending rates.',
    fields: [
      { name: 'totalConflicts', desc: 'Number of conflicts tracked' },
      { name: 'totalUSDeaths / totalCivilianDeaths', desc: 'Cumulative death tolls' },
      { name: 'totalCostInflationAdjusted', desc: 'All-time total cost' },
      { name: 'currentAnnualBudget', desc: 'FY2024 defense budget' },
      { name: 'costPerSecond / costPerDay', desc: 'Spending rates' },
    ]
  },
  {
    name: 'presidents.json', size: '~2KB',
    desc: 'War costs and deaths by president.',
    fields: [
      { name: 'name', desc: 'President name' },
      { name: 'conflicts', desc: 'Array of conflict names' },
      { name: 'totalCost / totalUSDeaths', desc: 'Aggregated from conflicts' },
    ]
  },
  {
    name: 'cost-per-life.json', size: '~2KB',
    desc: 'Cost per US death and per civilian death by conflict.',
    fields: [
      { name: 'name / id', desc: 'Conflict identifier' },
      { name: 'costPerUSdeath / costPerCivilianDeath', desc: 'Calculated ratios' },
      { name: 'usDeaths / civilianDeaths / cost', desc: 'Raw inputs' },
    ]
  },
  {
    name: 'jobs-data.json', size: '~1KB',
    desc: 'Jobs created per $1 million by sector (military vs education vs healthcare).',
    fields: [
      { name: 'sectorsPerMillion[]', desc: 'sector, jobs, color' },
      { name: 'examples[]', desc: 'Shift amounts with job creation/loss projections' },
    ]
  },
]

export default function DownloadsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Downloads' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Downloads</h1>
      <p className="text-muted mb-8 max-w-3xl">All WarCosts data is freely available for download. Use it in your research, journalism, teaching, or projects. We ask for attribution if used in published work: <strong>Source: warcosts.org</strong></p>

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;Information is the currency of democracy.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Thomas Jefferson</p>
      </div>

      {/* Suggested Uses */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">📊 Suggested Uses for This Data</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• <strong>Academic research:</strong> Cross-reference conflict costs with policy outcomes, economic impacts, or public opinion data</li>
          <li>• <strong>Journalism:</strong> Fact-check military spending claims, visualize deployment data, analyze aid flows</li>
          <li>• <strong>Education:</strong> Create lesson plans about the economics of war, constitutional authority, or opportunity costs</li>
          <li>• <strong>Data visualization:</strong> Build your own charts, maps, and interactive explorations</li>
          <li>• <strong>Policy analysis:</strong> Compare military spending to alternative investments, analyze base closure economics</li>
        </ul>
      </div>

      {/* File Downloads */}
      <div className="space-y-6">
        {files.map(f => (
          <div key={f.name} className="bg-white rounded-lg border p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <a href={`/data/${f.name}`} download className="text-lg font-semibold text-primary hover:underline">{f.name}</a>
                <p className="text-muted text-sm mt-1">{f.desc}</p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <p className="text-muted text-sm">{f.size}</p>
                <a href={`/data/${f.name}`} download className="text-primary text-sm font-semibold hover:underline">Download ↓</a>
              </div>
            </div>
            {f.fields && (
              <div className="mt-3 bg-stone-50 rounded p-3">
                <p className="text-xs font-semibold text-muted uppercase mb-2">Key Fields</p>
                <div className="grid gap-1 text-xs">
                  {f.fields.map(field => (
                    <div key={field.name} className="flex gap-2">
                      <code className="text-primary font-mono shrink-0">{field.name}</code>
                      <span className="text-muted">— {field.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* API Note */}
      <div className="bg-stone-50 rounded-lg p-6 mt-8 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Direct Access</h3>
        <p className="text-sm text-muted mb-2">All files are also accessible directly via URL:</p>
        <code className="text-sm text-primary bg-white px-3 py-1 rounded border">https://warcosts.org/data/conflicts.json</code>
        <p className="text-sm text-muted mt-3">Data is updated periodically as new information becomes available. All costs in 2023 USD unless noted.</p>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/methodology" className="text-red-800 hover:underline">→ Methodology — how we compile and adjust data</Link></li>
          <li><Link href="/about" className="text-red-800 hover:underline">→ About WarCosts</Link></li>
        </ul>
      </div>
    </div>
  )
}
