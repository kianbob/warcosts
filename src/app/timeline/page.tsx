import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Timeline of US Wars & Interventions',
  description: 'Interactive timeline of every American war, military intervention, and covert operation from 1775 to present.',
}

const eraColors: Record<string, string> = {
  'Founding Era': 'border-amber-600 bg-amber-50',
  'Early Republic': 'border-yellow-600 bg-yellow-50',
  'Expansion Era': 'border-orange-600 bg-orange-50',
  'Civil War': 'border-red-800 bg-red-50',
  'Imperial Era': 'border-purple-600 bg-purple-50',
  'World Wars': 'border-blue-700 bg-blue-50',
  'Cold War': 'border-slate-600 bg-slate-50',
  'Post-Cold War': 'border-teal-600 bg-teal-50',
  'War on Terror': 'border-red-600 bg-red-50',
}

const eraDotColors: Record<string, string> = {
  'Founding Era': 'bg-amber-600',
  'Early Republic': 'bg-yellow-600',
  'Expansion Era': 'bg-orange-600',
  'Civil War': 'bg-red-800',
  'Imperial Era': 'bg-purple-600',
  'World Wars': 'bg-blue-700',
  'Cold War': 'bg-slate-600',
  'Post-Cold War': 'bg-teal-600',
  'War on Terror': 'bg-red-600',
}

export default function TimelinePage() {
  const conflicts = loadData('conflicts.json')

  // Group by era
  const eras: Record<string, any[]> = {}
  conflicts.forEach((c: any) => {
    if (!eras[c.era]) eras[c.era] = []
    eras[c.era].push(c)
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Timeline' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Timeline of American Wars</h1>
      <p className="text-muted mb-8">248 years. 28 conflicts. {'>'}1 million Americans dead. {'>'}5 million civilians killed.</p>

      <ShareButtons title="Timeline of US Wars & Interventions" />

      <div className="mt-8 space-y-12">
        {Object.entries(eras).map(([era, items]) => {
          const totalCost = items.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
          const totalDeaths = items.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)

          return (
            <div key={era}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-4 h-4 rounded-full ${eraDotColors[era] || 'bg-stone-400'}`} />
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{era}</h2>
                <span className="text-muted text-sm">· {fmtMoney(totalCost)} · {fmt(totalDeaths)} US deaths</span>
              </div>

              <div className="border-l-2 border-stone-300 ml-2 pl-6 space-y-4">
                {items.map((c: any) => (
                  <Link key={c.id} href={`/conflicts/${c.id}`}
                    className={`block border-l-4 ${eraColors[era] || 'border-stone-400 bg-stone-50'} rounded-r-lg p-4 hover:shadow-md transition`}>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-sm font-mono text-muted">{c.startYear}{c.endYear !== c.startYear ? `–${c.endYear}` : ''}</span>
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">{c.shortName || c.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        c.outcome?.includes('Victory') ? 'bg-green-100 text-green-700' :
                        c.outcome?.includes('Defeat') ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>{c.outcome}</span>
                      {!c.congressionalAuth && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">No Authorization</span>
                      )}
                    </div>
                    <p className="text-sm text-muted">{c.description}</p>
                    <div className="flex gap-6 mt-2 text-sm">
                      <span><strong className="text-primary">{fmtMoney(c.costInflationAdjusted)}</strong> cost</span>
                      {c.usCasualties?.deaths > 0 && <span><strong className="text-primary">{fmt(c.usCasualties.deaths)}</strong> US deaths</span>}
                      {c.civilianDeaths && <span><strong className="text-primary">{fmt(c.civilianDeaths)}</strong> civilian deaths</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
