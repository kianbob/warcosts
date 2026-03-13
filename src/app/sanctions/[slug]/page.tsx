import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

interface Sanction {
  name: string
  slug: string
  target: string
  startYear: number
  status: string
  estimatedCost: number
  description: string
  impact: string
  keyFact: string
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const sanctions: Sanction[] = loadData('sanctions.json')
  const s = sanctions.find((r) => r.slug === slug)
  if (!s) return { title: 'Sanctions Not Found' }
  return {
    title: `${s.name} — US Sanctions on ${s.target}`,
    description: `US sanctions on ${s.target} since ${s.startYear}. Status: ${s.status}. ${s.description.slice(0, 120)}...`,
    openGraph: {
      title: `${s.name} — US Sanctions Regime`,
      description: s.description.slice(0, 200),
    },
  }
}

export default async function SanctionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const sanctions: Sanction[] = loadData('sanctions.json')
  const s = sanctions.find((r) => r.slug === slug)
  if (!s) notFound()

  const targetSlug = slugify(s.target.split('&')[0].trim())
  const yearsActive = new Date().getFullYear() - s.startYear

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'US Sanctions', href: '/sanctions' }, { label: s.name }]} />

      {/* Hero */}
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-2">{s.name}</h1>
        <div className="flex flex-wrap gap-4 text-stone-500 text-sm">
          <span>Target: {s.target}</span>
          <span>Since {s.startYear} ({yearsActive} years)</span>
          <span className="text-red-700">{s.status}</span>
        </div>
      </div>

      <ShareButtons title={`${s.name} — US Sanctions on ${s.target}`} />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center">
          <div className="text-2xl font-bold text-red-700">{fmtMoney(s.estimatedCost * 1_000_000)}</div>
          <div className="text-stone-500 text-sm">Est. Economic Impact</div>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center">
          <div className="text-2xl font-bold text-red-700">{s.startYear}</div>
          <div className="text-stone-500 text-sm">First Imposed</div>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center">
          <div className="text-2xl font-bold text-red-700">{yearsActive} yrs</div>
          <div className="text-stone-500 text-sm">Active Duration</div>
        </div>
      </div>

      {/* Description */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">Overview</h2>
        <p className="text-stone-600 leading-relaxed">{s.description}</p>
      </section>

      {/* Impact */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">Impact</h2>
        <p className="text-stone-600 leading-relaxed">{s.impact}</p>
      </section>

      {/* Key Fact */}
      <section className="mb-8 bg-red-600/10 border border-red-600/30 rounded-lg p-5">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-red-700 mb-2">Key Fact</h2>
        <p className="text-stone-600">{s.keyFact}</p>
      </section>

      {/* Cross-links */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Related</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/countries/${targetSlug}`} className="bg-white border border-stone-200 hover:border-red-300 hover:shadow-md rounded-lg px-4 py-2 text-red-700 text-sm transition-colors">
            {s.target} Country Profile
          </Link>
          <Link href={`/arms-sales/${targetSlug}`} className="bg-white border border-stone-200 hover:border-red-300 hover:shadow-md rounded-lg px-4 py-2 text-red-700 text-sm transition-colors">
            Arms Sales → {s.target}
          </Link>
          <Link href={`/foreign-aid/${targetSlug}`} className="bg-white border border-stone-200 hover:border-red-300 hover:shadow-md rounded-lg px-4 py-2 text-red-700 text-sm transition-colors">
            Foreign Aid → {s.target}
          </Link>
          <Link href="/sanctions" className="bg-white border border-stone-200 hover:border-red-300 hover:shadow-md rounded-lg px-4 py-2 text-red-700 text-sm transition-colors">
            All Sanctions →
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
