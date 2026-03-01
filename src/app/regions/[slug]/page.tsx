import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { EraCharts } from '@/components/charts/EraCharts'

const regionMap: Record<string, string[]> = {
  'middle-east': ['Middle East'],
  'europe': ['Europe', 'Europe / Pacific / North Africa'],
  'east-asia': ['East Asia'],
  'africa': ['North Africa', 'East Africa', 'Africa'],
  'central-america': ['Central America'],
  'caribbean': ['Caribbean', 'Atlantic Ocean / Caribbean', 'Caribbean / Pacific'],
  'south-america': ['South America'],
  'southeast-asia': ['Southeast Asia'],
  'central-asia': ['Central Asia'],
  'pacific': ['Pacific'],
}

const regionNames: Record<string, string> = {
  'middle-east': 'Middle East',
  'europe': 'Europe',
  'east-asia': 'East Asia',
  'africa': 'Africa',
  'central-america': 'Central America',
  'caribbean': 'Caribbean',
  'south-america': 'South America',
  'southeast-asia': 'Southeast Asia',
  'central-asia': 'Central Asia',
  'pacific': 'Pacific',
}

export async function generateStaticParams() {
  return Object.keys(regionMap).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const name = regionNames[slug]
  if (!name) return { title: 'Region Not Found' }
  return {
    title: `${name} — US Military Involvement`,
    description: `All US military conflicts, bases, and deployments in ${name}. Cost, casualty, and historical analysis.`,
  }
}

export default async function RegionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const name = regionNames[slug]
  const matchRegions = regionMap[slug]
  if (!name || !matchRegions) notFound()

  const conflicts = loadData('conflicts.json')
  const presence = loadData('overseas-presence.json')

  const regionConflicts = conflicts.filter((c: any) =>
    matchRegions.some((r: string) => c.region?.includes(r))
  )
  const totalCost = regionConflicts.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalDeaths = regionConflicts.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)
  const civDeaths = regionConflicts.reduce((s: number, c: any) => s + (c.civilianDeaths || 0), 0)

  // Find deployments in this region (approximate by country matching)
  const regionDeployments = presence.topDeployments?.filter((d: any) => {
    const countryRegionMap: Record<string, string> = {
      'Japan': 'east-asia', 'South Korea': 'east-asia', 'Germany': 'europe', 'Italy': 'europe',
      'United Kingdom': 'europe', 'Bahrain': 'middle-east', 'Qatar': 'middle-east', 'Kuwait': 'middle-east',
      'Turkey': 'middle-east', 'Iraq': 'middle-east', 'Syria': 'middle-east', 'Afghanistan': 'central-asia',
      'Djibouti': 'africa', 'Honduras': 'central-america', 'Cuba': 'caribbean', 'Australia': 'pacific',
      'Guam': 'pacific', 'Diego Garcia': 'pacific',
    }
    return countryRegionMap[d.country] === slug
  }) || []

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Regions' }, { label: name }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">{name}</h1>
        <p className="text-stone-400 mt-2">{regionConflicts.length} conflicts · {fmtMoney(totalCost)} total cost</p>
      </div>

      <ShareButtons title={`${name} — US Military Involvement`} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</p>
          <p className="text-xs text-muted">Total Cost</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(totalDeaths)}</p>
          <p className="text-xs text-muted">US Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{civDeaths > 0 ? fmt(civDeaths) : '—'}</p>
          <p className="text-xs text-muted">Civilian Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{regionConflicts.length}</p>
          <p className="text-xs text-muted">Conflicts</p>
        </div>
      </div>

      {regionConflicts.length > 0 && <EraCharts conflicts={regionConflicts} />}

      <div className="mt-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Conflicts in {name}</h2>
        <div className="space-y-3">
          {regionConflicts.map((c: any) => (
            <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-lg border p-4 hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">{c.name}</h3>
                <span className="text-xs text-muted">{c.era}</span>
              </div>
              <p className="text-sm text-muted">{c.startYear}–{c.endYear} · {fmtMoney(c.costInflationAdjusted)} · {c.outcome}</p>
            </Link>
          ))}
        </div>
      </div>

      {regionDeployments.length > 0 && (
        <div className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Current US Military Presence</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {regionDeployments.map((d: any) => (
              <Link key={d.country} href={`/countries/${slugify(d.country)}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
                <h3 className="font-semibold">{d.country}</h3>
                <p className="text-sm text-muted">{fmt(d.troops)} troops · {d.bases} bases · {fmtMoney(d.annualCost)}/yr</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
