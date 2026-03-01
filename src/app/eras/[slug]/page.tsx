import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { EraCharts } from '@/components/charts/EraCharts'

const eraContext: Record<string, string> = {
  'Founding Era': 'The birth of American military power. The Revolutionary War established the nation, but also set the precedent for citizen-soldiers and suspicion of standing armies that would define early American defense policy.',
  'Early Republic': 'The young nation flexed its muscles against Barbary pirates and the British Empire again in 1812. These conflicts established American naval power and solidified national sovereignty.',
  'Expansion Era': 'Manifest Destiny drove the United States westward through wars of conquest against Mexico and prolonged campaigns against Native American nations. These wars dramatically expanded US territory at enormous human cost.',
  'Civil War': 'The deadliest conflict in American history tore the nation apart over slavery and states\' rights. The Civil War killed more Americans than all other US wars combined up to that point.',
  'Imperial Era': 'The Spanish-American War marked America\'s emergence as a global imperial power. The acquisition of the Philippines, Puerto Rico, and Guam launched decades of overseas military intervention.',
  'World Wars': 'Two global conflicts transformed the United States from a regional power into the world\'s dominant military force. The scale of mobilization and spending reshaped American society permanently.',
  'Cold War': 'Four decades of confrontation with the Soviet Union produced hot wars in Korea and Vietnam, covert operations across the globe, and a nuclear arsenal capable of ending civilization.',
  'Post-Cold War': 'With the Soviet threat gone, the US military found new missions: humanitarian intervention, drug wars, and policing a "new world order." The peace dividend never fully materialized.',
  'War on Terror': 'The September 11 attacks launched an era of permanent war. Afghanistan, Iraq, drone campaigns, and global surveillance operations have cost trillions and continue with no clear end.',
}

export async function generateStaticParams() {
  const conflicts = loadData('conflicts.json')
  const eras = [...new Set(conflicts.map((c: any) => c.era))] as string[]
  return eras.map(era => ({ slug: slugify(era) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const conflicts = loadData('conflicts.json')
  const eras = [...new Set(conflicts.map((c: any) => c.era))] as string[]
  const era = eras.find(e => slugify(e) === slug)
  if (!era) return { title: 'Era Not Found' }
  const items = conflicts.filter((c: any) => c.era === era)
  const totalCost = items.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  return {
    title: `${era} — ${items.length} US Conflicts, ${fmtMoney(totalCost)} Total Cost`,
    description: `All US military conflicts during the ${era}: ${items.length} wars costing ${fmtMoney(totalCost)}. Detailed cost, casualty, and historical analysis.`,
  }
}

export default async function EraDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const conflicts = loadData('conflicts.json')
  const eras = [...new Set(conflicts.map((c: any) => c.era))] as string[]
  const era = eras.find(e => slugify(e) === slug)
  if (!era) notFound()

  const items = conflicts.filter((c: any) => c.era === era)
  const totalCost = items.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalDeaths = items.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)
  const civDeaths = items.reduce((s: number, c: any) => s + (c.civilianDeaths || 0), 0)
  const yearRange = `${Math.min(...items.map((c: any) => c.startYear))}–${Math.max(...items.map((c: any) => c.endYear))}`

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'By Era', href: '/eras' }, { label: era }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <span className="text-stone-400 text-sm">{yearRange} · {items.length} conflicts</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mt-2">{era}</h1>
        <p className="text-stone-300 mt-3">{eraContext[era] || ''}</p>
      </div>

      <ShareButtons title={`${era} — US Wars`} />

      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</p>
          <p className="text-xs text-muted">Total Cost (2023 $)</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(totalDeaths)}</p>
          <p className="text-xs text-muted">US Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{civDeaths > 0 ? fmt(civDeaths) : '—'}</p>
          <p className="text-xs text-muted">Civilian Deaths</p>
        </div>
      </div>

      <EraCharts conflicts={items} />

      <div className="mt-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Conflicts in This Era</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((c: any) => (
            <Link key={c.id} href={`/conflicts/${c.id}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">{c.shortName || c.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  c.outcome?.includes('Victory') ? 'bg-green-100 text-green-700' :
                  c.outcome?.includes('Defeat') ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>{c.outcome}</span>
              </div>
              <p className="text-sm text-muted">{c.startYear}–{c.endYear} · {c.region}</p>
              <p className="text-sm mt-1"><span className="font-bold text-primary">{fmtMoney(c.costInflationAdjusted)}</span> · {c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) + ' US deaths' : 'Covert'}</p>
              <p className="text-xs text-muted mt-1 line-clamp-2">{c.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
