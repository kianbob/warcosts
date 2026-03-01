import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { ConflictStatsGrid } from '@/components/charts/ConflictStatsGrid'

export async function generateStaticParams() {
  const conflicts = loadData('conflicts.json')
  return conflicts.map((c: any) => ({ slug: c.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const conflicts = loadData('conflicts.json')
  const c = conflicts.find((x: any) => x.id === slug)
  if (!c) return { title: 'Conflict Not Found' }
  return {
    title: `${c.name} — Cost, Casualties & Analysis`,
    description: `${c.name} (${c.startYear}–${c.endYear}): ${fmtMoney(c.costInflationAdjusted)} cost, ${c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) + ' US deaths' : 'covert operation'}. ${c.description}`,
  }
}

export default async function ConflictPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const conflicts = loadData('conflicts.json')
  const c = conflicts.find((x: any) => x.id === slug)
  if (!c) notFound()

  const related = conflicts.filter((x: any) => x.era === c.era && x.id !== c.id)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Conflicts', href: '/conflicts' }, { label: c.shortName || c.name }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="text-stone-400 text-sm">{c.era} · {c.type.replace(/_/g, ' ')}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            c.outcome?.includes('Victory') ? 'bg-green-600/20 text-green-400' :
            c.outcome?.includes('Defeat') ? 'bg-red-600/20 text-red-400' :
            'bg-yellow-600/20 text-yellow-400'
          }`}>{c.outcome}</span>
          {!c.congressionalAuth && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-red-600/20 text-red-400">No Congressional Authorization</span>
          )}
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-2">{c.name}</h1>
        <p className="text-stone-400">{c.startYear}–{c.endYear} · {c.region} · {c.countries?.join(', ')}</p>
        <p className="text-stone-300 mt-3">{c.description}</p>
      </div>

      <ShareButtons title={c.name} />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(c.costInflationAdjusted)}</p>
          <p className="text-xs text-muted">Cost (2023 dollars)</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) : '—'}</p>
          <p className="text-xs text-muted">US Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{c.civilianDeaths ? fmt(c.civilianDeaths) : 'Unknown'}</p>
          <p className="text-xs text-muted">Civilian Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{c.troopsDeployed ? fmt(c.troopsDeployed) : '—'}</p>
          <p className="text-xs text-muted">Troops Deployed</p>
        </div>
      </div>

      {/* Computed Stats */}
      {c.computed && <ConflictStatsGrid computed={c.computed} />}

      {/* Additional casualty data */}
      {(c.usCasualties?.wounded > 0 || c.usCasualties?.battleDeaths > 0) && (
        <div className="bg-stone-50 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Casualty Breakdown</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {c.usCasualties.battleDeaths > 0 && <div><strong>{fmt(c.usCasualties.battleDeaths)}</strong> <span className="text-muted">battle deaths</span></div>}
            {c.usCasualties.deaths > 0 && <div><strong>{fmt(c.usCasualties.deaths)}</strong> <span className="text-muted">total deaths</span></div>}
            {c.usCasualties.wounded > 0 && <div><strong>{fmt(c.usCasualties.wounded)}</strong> <span className="text-muted">wounded</span></div>}
            {c.usCasualties.missing > 0 && <div><strong>{fmt(c.usCasualties.missing)}</strong> <span className="text-muted">missing</span></div>}
          </div>
        </div>
      )}

      {/* Outcome */}
      <div className="bg-white rounded-lg p-6 mb-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Outcome</h2>
        <p className="font-semibold text-lg mb-2">{c.outcome}</p>
        <p className="text-muted">{c.outcomeDetail}</p>
      </div>

      {/* Congressional Authorization */}
      <div className={`rounded-lg p-6 mb-8 border ${c.congressionalAuth ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
          Congressional Authorization: {c.congressionalAuth ? '✅ Yes' : '❌ No'}
        </h2>
        <p className="text-muted">{c.authDetail}</p>
      </div>

      {/* Key Events */}
      {c.keyEvents?.length > 0 && (
        <div className="bg-white rounded-lg p-6 mb-8 border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Key Events</h2>
          <ul className="space-y-2">
            {c.keyEvents.map((e: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Objectives */}
      {c.objectives?.length > 0 && (
        <div className="bg-white rounded-lg p-6 mb-8 border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
            Objectives {c.objectivesMet ? <span className="text-green-600 text-sm">(Met)</span> : <span className="text-red-600 text-sm">(Not Met / Partially Met)</span>}
          </h2>
          <ul className="space-y-1">
            {c.objectives.map((o: string, i: number) => (
              <li key={i} className="flex items-center gap-2">
                <span>{c.objectivesMet ? '✅' : '❌'}</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Libertarian Perspective */}
      {c.libertarianNote && (
        <div className="bg-stone-900 text-white rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Perspective</h2>
          <p className="text-stone-300 italic">{c.libertarianNote}</p>
        </div>
      )}

      {/* Related Conflicts */}
      {related.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Other {c.era} Conflicts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {related.map((r: any) => (
              <Link key={r.id} href={`/conflicts/${r.id}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
                <h3 className="font-semibold">{r.shortName || r.name}</h3>
                <p className="text-muted text-sm">{r.startYear}–{r.endYear} · {fmtMoney(r.costInflationAdjusted)}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
