import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Download US Military Data — War Costs, Spending, Casualties | WarCosts',
  description: 'Download free US military data: war costs, defense spending, foreign aid, arms sales, bases, veterans, weapons systems, and Iran War 2026. JSON format for researchers, journalists, and developers.',
  alternates: { canonical: 'https://www.warcosts.org/downloads' },
  keywords: ['us military data download', 'war cost data', 'military spending data', 'defense budget data', 'war casualties data', 'free military dataset'],
  openGraph: {
    title: 'Download US Military Data — Free JSON Datasets',
    description: 'Open data catalog: 40+ datasets covering every US war, military spending, arms sales, bases, veterans, and the Iran War 2026.',
    url: 'https://www.warcosts.org/downloads',
    siteName: 'WarCosts',
    type: 'website',
  },
}

interface DataFile {
  name: string
  size: string
  records: string
  desc: string
}

interface Category {
  title: string
  id: string
  icon: string
  files: DataFile[]
}

const categories: Category[] = [
  {
    title: 'Conflicts & Wars',
    id: 'conflicts',
    icon: '⚔️',
    files: [
      { name: 'conflicts.json', size: '1 MB', records: '36 conflicts', desc: 'Complete dataset of all US military conflicts from 1775 to present. Includes costs (inflation-adjusted), casualties, congressional authorization, outcomes, regions, and detailed analysis.' },
      { name: 'operations.json', size: '15 KB', records: '469 operations', desc: 'All documented US military interventions and operations since 1798, from CRS data. Includes dates, countries, and descriptions.' },
      { name: 'war-votes.json', size: '25 KB', records: '36 wars', desc: 'Congressional votes and authorization details for each conflict. Declaration type, vote counts, and constitutional analysis.' },
      { name: 'war-roi.json', size: '14 KB', records: '36 wars', desc: 'Return on investment analysis for each war: cost, objectives achieved, strategic outcomes, and long-term consequences.' },
      { name: 'cost-per-life.json', size: '6 KB', records: '36 wars', desc: 'Cost per US death and per civilian death by conflict. A stark metric for the economics of war.' },
      { name: 'blowback-chains.json', size: '8 KB', records: '20+ chains', desc: 'How US interventions created unintended consequences — the CIA\'s own term for when operations backfire.' },
      { name: 'constitutional-scores.json', size: '11 KB', records: '36 wars', desc: 'Constitutional compliance scoring for each conflict: congressional authorization, declaration, and war powers adherence.' },
      { name: 'revolutionary-war.json', size: '21 KB', records: '1 conflict', desc: 'Deep-dive dataset on the Revolutionary War with detailed battle data, costs, and historical context.' },
    ]
  },
  {
    title: 'Military Spending',
    id: 'spending',
    icon: '💰',
    files: [
      { name: 'military-spending.json', size: '5 KB', records: '85 years', desc: 'Annual US military spending 1940–2024 with GDP percentage and president. Inflation-adjusted to 2024 dollars.' },
      { name: 'yearly-spending.json', size: '8 KB', records: '85 years', desc: 'Detailed year-by-year defense budget breakdown with subcategories and historical context.' },
      { name: 'global-spending.json', size: '72 KB', records: '170+ countries', desc: 'Global military spending by country from SIPRI. Compare US spending to every other nation.' },
      { name: 'spending-per-capita.json', size: '12 KB', records: '50 states', desc: 'Military spending per capita by US state. Federal defense dollars flowing to each state.' },
      { name: 'opportunity-costs.json', size: '2 KB', records: '10 examples', desc: 'What $8 trillion in war spending could have bought: universal healthcare, infrastructure, education, and more.' },
      { name: 'audit-timeline.json', size: '1 KB', records: '30+ years', desc: 'Pentagon audit failures since 1991. The DoD has never passed a financial audit.' },
    ]
  },
  {
    title: 'Foreign Aid',
    id: 'aid',
    icon: '🌍',
    files: [
      { name: 'foreign-aid.json', size: '6 KB', records: '25 countries', desc: 'Top US foreign aid recipients with annual and cumulative totals since 2001. Military vs economic aid breakdown.' },
      { name: 'aid-countries-index.json', size: '5 KB', records: '25 countries', desc: 'Index of detailed country-level aid profiles with year-by-year breakdowns.' },
    ]
  },
  {
    title: 'Arms Sales',
    id: 'arms',
    icon: '🔫',
    files: [
      { name: 'arms-sales.json', size: '2 KB', records: '15 buyers', desc: 'Top US arms sales buyers with total deal values, major weapon systems, and context.' },
      { name: 'arms-sales-countries.json', size: '16 KB', records: '35 countries', desc: 'Detailed country-by-country arms sales data including deal types, weapon categories, and human rights context.' },
    ]
  },
  {
    title: 'Bases & Deployments',
    id: 'bases',
    icon: '🏗️',
    files: [
      { name: 'base-index.json', size: '337 KB', records: '1,518 bases', desc: 'Complete index of every known US military base worldwide. Locations, sizes, personnel, and costs.' },
      { name: 'base-countries.json', size: '11 KB', records: '80 countries', desc: 'US military presence by country: base counts, troop deployments, annual costs.' },
      { name: 'base-states.json', size: '9 KB', records: '50 states', desc: 'Domestic military installations by state with economic impact data.' },
      { name: 'base-components.json', size: '1 KB', records: '5 branches', desc: 'Base distribution by military branch: Army, Navy, Air Force, Marines, Space Force.' },
      { name: 'base-stats.json', size: '168 B', records: 'Aggregates', desc: 'Summary statistics for the global US base network.' },
      { name: 'overseas-presence.json', size: '3 KB', records: '20 deployments', desc: 'Top overseas troop deployments with costs and strategic context.' },
      { name: 'state-footprint.json', size: '24 KB', records: '50 states', desc: 'Complete military footprint by state: bases, personnel, contracts, VA facilities, and economic dependence.' },
      { name: 'state-military-index.json', size: '9 KB', records: '54 entries', desc: 'Index for detailed state-level military data profiles.' },
    ]
  },
  {
    title: 'Veterans',
    id: 'veterans',
    icon: '🎖️',
    files: [
      { name: 'veterans-stats.json', size: '10 KB', records: '20+ metrics', desc: 'Veteran population, VA budget, suicide rates (17/day), PTSD rates, homelessness, and healthcare wait times.' },
      { name: 'veterans-by-war.json', size: '3 KB', records: '10 wars', desc: 'Veteran populations and VA costs by conflict era. Projected lifetime care costs through 2050.' },
      { name: 'draft-analysis.json', size: '3 KB', records: '6 wars', desc: 'Military draft history: who was drafted, deferments, resistance, and demographic disparities.' },
    ]
  },
  {
    title: 'Weapons & Defense Industry',
    id: 'weapons',
    icon: '🚀',
    files: [
      { name: 'weapons.json', size: '32 KB', records: '52 systems', desc: 'Major US weapons systems: cost per unit, total program costs, contractors, capabilities, and controversies.' },
      { name: 'weapons-detail.json', size: '10 KB', records: '52 systems', desc: 'Extended weapons data with specifications, deployment history, and cost overruns.' },
      { name: 'contractors.json', size: '25 KB', records: '20 companies', desc: 'Top defense contractors: revenue, contracts, lobbying spending, revolving door personnel, and political donations.' },
      { name: 'contractor-by-war.json', size: '5 KB', records: '10 wars', desc: 'Contractor involvement and profits by conflict. Who made money from each war.' },
      { name: 'sanctions.json', size: '7 KB', records: '20+ programs', desc: 'US sanctions programs: countries targeted, economic impact, and effectiveness analysis.' },
    ]
  },
  {
    title: 'Iran War 2026',
    id: 'iran',
    icon: '🇮🇷',
    files: [
      { name: 'conflicts.json', size: '1 MB', records: 'Includes Iran 2026', desc: 'The Iran War 2026 entry in conflicts.json tracks the ongoing US-Iran conflict: costs ($11.3B confirmed in 6 days), casualties, weapons used, and daily updates.' },
      { name: 'drone-strikes.json', size: '10 KB', records: '500+ strikes', desc: 'Drone and air strike data including Iran 2026 operations. Strike counts, locations, and civilian casualty estimates.' },
    ]
  },
  {
    title: 'Presidents & Politics',
    id: 'presidents',
    icon: '🏛️',
    files: [
      { name: 'presidents.json', size: '31 KB', records: '46 presidents', desc: 'Every president\'s war record: conflicts initiated, costs incurred, deaths on their watch, and constitutional compliance.' },
      { name: 'country-profiles-index.json', size: '37 KB', records: '167 countries', desc: 'Index of country profiles with US military relationship data: aid, bases, arms sales, and interventions.' },
      { name: 'stats.json', size: '1 KB', records: 'Aggregates', desc: 'Site-wide summary statistics: total conflicts, deaths, costs, and current spending rates.' },
      { name: 'jobs-data.json', size: '1 KB', records: '6 sectors', desc: 'Jobs created per $1M by sector: military vs education vs healthcare vs clean energy. The economics of military Keynesianism.' },
    ]
  },
]

const totalFiles = categories.reduce((sum, c) => sum + c.files.length, 0)

export default function DownloadsPage() {
  const datasetJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DataCatalog',
    name: 'WarCosts Open Data Catalog',
    description: 'Free, open datasets on US military spending, war costs, casualties, bases, arms sales, and veterans.',
    url: 'https://www.warcosts.org/downloads',
    creator: {
      '@type': 'Organization',
      name: 'WarCosts / TheDataProject.ai',
      url: 'https://www.warcosts.org',
    },
    dataset: categories.flatMap(cat =>
      cat.files.map(f => ({
        '@type': 'Dataset',
        name: f.name,
        description: f.desc,
        url: `https://www.warcosts.org/data/${f.name}`,
        encodingFormat: 'application/json',
        license: 'https://creativecommons.org/licenses/by/4.0/',
        creator: { '@type': 'Organization', name: 'WarCosts' },
      }))
    ),
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Downloads' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Data Downloads</h1>
      <p className="text-stone-500 text-lg mb-2 max-w-3xl">
        {totalFiles} open datasets covering every US war, military spending, arms sales, bases, veterans, and more. All data is free to use — we ask only for attribution: <strong>Source: warcosts.org</strong>
      </p>
      <p className="text-stone-400 text-sm mb-8">All files are JSON format. Costs in 2024 inflation-adjusted USD unless noted.</p>

      {/* Category Quick Nav */}
      <div className="bg-stone-50 rounded-lg border p-4 mb-8">
        <p className="font-bold text-sm mb-3">Jump to category:</p>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <a key={cat.id} href={`#${cat.id}`} className="bg-white px-3 py-1.5 rounded border text-sm hover:bg-stone-100 transition">
              {cat.icon} {cat.title}
            </a>
          ))}
        </div>
      </div>

      {/* Stats Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Datasets', value: totalFiles.toString() },
          { label: 'Conflicts Tracked', value: '36' },
          { label: 'Military Bases', value: '1,518' },
          { label: 'Countries Covered', value: '170+' },
        ].map(s => (
          <div key={s.label} className="bg-white border rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-primary">{s.value}</p>
            <p className="text-stone-500 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Suggested Uses */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">📊 Use This Data For</h3>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-stone-700">
          <p>• <strong>Academic research</strong> — cross-reference costs with outcomes</p>
          <p>• <strong>Journalism</strong> — fact-check military spending claims</p>
          <p>• <strong>Education</strong> — teach the economics of war</p>
          <p>• <strong>Data visualization</strong> — build charts and maps</p>
          <p>• <strong>Policy analysis</strong> — compare military vs civilian spending</p>
          <p>• <strong>App development</strong> — integrate via direct JSON URLs</p>
        </div>
      </div>

      {/* Categories */}
      {categories.map(cat => (
        <section key={cat.id} id={cat.id} className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 border-b border-stone-200 pb-2">
            {cat.icon} {cat.title}
          </h2>
          <div className="space-y-3">
            {cat.files.map(f => (
              <div key={f.name} className="bg-white rounded-lg border p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <code className="text-sm font-mono font-semibold text-primary">{f.name}</code>
                    <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded">JSON</span>
                    <span className="text-xs text-stone-400">{f.size}</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{f.desc}</p>
                  <p className="text-stone-400 text-xs mt-1">{f.records}</p>
                </div>
                <a
                  href={`/data/${f.name}`}
                  download
                  className="shrink-0 inline-flex items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-900 transition"
                >
                  ↓ Download
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* API Access */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mt-8">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Direct API Access</h3>
        <p className="text-stone-300 text-sm mb-4">All files are accessible directly via URL. No API key required.</p>
        <code className="block text-sm text-green-400 bg-stone-800 px-4 py-3 rounded-lg mb-4">
          https://www.warcosts.org/data/conflicts.json
        </code>
        <p className="text-stone-400 text-sm">CORS-enabled. Use directly in your applications, notebooks, or scripts.</p>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/methodology" className="text-red-800 hover:underline">→ Methodology — how we compile and adjust data</Link></li>
          <li><Link href="/sources" className="text-red-800 hover:underline">→ Sources — complete bibliography</Link></li>
          <li><Link href="/faq" className="text-red-800 hover:underline">→ FAQ — common questions about our data</Link></li>
          <li><Link href="/about" className="text-red-800 hover:underline">→ About WarCosts</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
