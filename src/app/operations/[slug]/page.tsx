import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

interface Operation {
  name: string
  slug: string
  conflict: string
  year: number
  duration: string
  cost: number
  troops: number
  casualties: number
  civilianDeaths: number
  description: string
  outcome: string
  keyFact: string
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const operations: Operation[] = loadData('operations.json')
  const op = operations.find((o) => o.slug === slug)
  if (!op) return { title: 'Operation Not Found' }
  return {
    title: `${op.name} (${op.year}) — Cost, Casualties & Outcome`,
    description: `${op.name}: ${op.duration}, ${fmtMoney(op.cost * 1_000_000)} cost, ${fmt(op.casualties)} US casualties. ${op.description.slice(0, 120)}...`,
    openGraph: {
      title: `${op.name} — Named Military Operation`,
      description: op.description.slice(0, 200),
    },
  }
}

export default async function OperationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const operations: Operation[] = loadData('operations.json')
  const op = operations.find((o) => o.slug === slug)
  if (!op) notFound()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Named Operations', href: '/operations' }, { label: op.name }]} />

      {/* Hero */}
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-2">{op.name}</h1>
        <div className="flex flex-wrap gap-4 text-stone-500 text-sm">
          <span>Conflict: <Link href={`/conflicts/${op.conflict}`} className="text-red-700 hover:underline">{op.conflict.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</Link></span>
          <span>Year: {op.year}</span>
          <span>Duration: {op.duration}</span>
        </div>
      </div>

      <ShareButtons title={`${op.name} — Named Military Operation`} />

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center">
          <div className="text-2xl font-bold text-red-700">{fmtMoney(op.cost * 1_000_000)}</div>
          <div className="text-stone-500 text-sm">Cost</div>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center">
          <div className="text-2xl font-bold text-red-700">{op.troops > 0 ? fmt(op.troops) : 'Air only'}</div>
          <div className="text-stone-500 text-sm">Troops Deployed</div>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center">
          <div className="text-2xl font-bold text-red-700">{fmt(op.casualties)}</div>
          <div className="text-stone-500 text-sm">US Casualties</div>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center">
          <div className="text-2xl font-bold text-red-700">{fmt(op.civilianDeaths)}</div>
          <div className="text-stone-500 text-sm">Civilian Deaths</div>
        </div>
      </div>

      {/* Description */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">Overview</h2>
        <p className="text-stone-600 leading-relaxed">{op.description}</p>
      </section>

      {/* Outcome */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">Outcome</h2>
        <p className="text-stone-600 leading-relaxed">{op.outcome}</p>
      </section>

      {/* Key Fact */}
      <section className="mb-8 bg-red-600/10 border border-red-600/30 rounded-lg p-5">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-red-700 mb-2">Key Fact</h2>
        <p className="text-stone-600">{op.keyFact}</p>
      </section>

      {/* Cross-links */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Related</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/conflicts/${op.conflict}`} className="bg-white border border-stone-200 hover:border-red-300 hover:shadow-md rounded-lg px-4 py-2 text-red-700 text-sm transition-colors">
            ← {op.conflict.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
          </Link>
          <Link href="/operations" className="bg-white border border-stone-200 hover:border-red-300 hover:shadow-md rounded-lg px-4 py-2 text-red-700 text-sm transition-colors">
            All Operations →
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
