import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

interface StateSummary { state: string; code: string; slug: string; total: number; byComponent: Record<string, number> }
interface Base { name: string; slug: string; country: string; state: string | null; stateCode: string | null; component: string | null; status: string; type: string }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const states = loadData('base-states.json') as StateSummary[]
  const s = states.find(x => x.slug === slug || x.code?.toLowerCase() === slug)
  if (!s) return { title: 'State Not Found — WarCosts' }
  return {
    title: `Military Bases in ${s.state} — ${s.total} Installations | WarCosts`,
    description: `${s.state} hosts ${s.total} military installations. Browse every base, camp, station, and training area in ${s.state}.`,
    alternates: { canonical: `https://www.warcosts.org/bases/states/${slug}` },
  }
}

export function generateStaticParams() {
  const states = loadData('base-states.json') as StateSummary[]
  return states.map(s => ({ slug: s.code?.toLowerCase() || s.slug }))
}

export default async function StateBasesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const states = loadData('base-states.json') as StateSummary[]
  const s = states.find(x => x.slug === slug || x.code?.toLowerCase() === slug)
  if (!s) notFound()

  const index = loadData('base-index.json') as Base[]
  const stateBases = index.filter(b => b.state === s.state).sort((a, b) => a.name.localeCompare(b.name))

  const byComponent = Object.entries(s.byComponent).sort((a, b) => b[1] - a[1])

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Bases', href: '/bases' }, { label: 'By State', href: '/bases/states' }, { label: s.state }]} />

      <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mt-4 mb-2">
        Military Bases in {s.state}
      </h1>
      <p className="text-stone-500 text-lg mb-6">{fmt(s.total)} installations</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-stone-200 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-red-700">{fmt(s.total)}</div><div className="text-xs text-stone-500">Total Installations</div></div>
        {byComponent.slice(0, 3).map(([comp, count]) => (
          <div key={comp} className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-stone-900">{count}</div>
            <div className="text-xs text-stone-500">{comp}</div>
          </div>
        ))}
      </div>

      {byComponent.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-stone-900 mb-3">By Branch</h2>
          <div className="space-y-2">
            {byComponent.map(([comp, count]) => (
              <div key={comp} className="flex items-center gap-3">
                <div className="text-stone-600 text-sm w-48">{comp}</div>
                <div className="flex-1 bg-white border border-stone-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-red-600 h-full rounded-full" style={{ width: `${(count / s.total) * 100}%` }} />
                </div>
                <div className="text-white text-sm font-mono w-8 text-right">{count}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <h2 className="text-xl font-bold text-stone-900 mb-3">All Installations ({stateBases.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8">
        {stateBases.map(b => (
          <Link key={b.slug} href={`/bases/${b.slug}`} className="bg-white border border-stone-200 hover:border-red-300 hover:shadow-md border border-stone-200 rounded-lg p-3 transition-colors">
            <div className="text-white font-medium text-sm">{b.name}</div>
            <div className="text-stone-500 text-xs">{b.component || 'Military'} · {b.status}</div>
          </Link>
        ))}
      </div>

      <ShareButtons title={`Military Bases in ${s.state}`} />
      <BackToTop />
    </main>
  )
}
