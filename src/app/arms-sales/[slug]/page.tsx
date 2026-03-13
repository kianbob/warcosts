import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

interface ArmsSaleCountry {
  country: string; slug: string; region: string; totalSince2009: number
  recentFY: number; recentAmount: number; topSystems: string[]
  note?: string; controversies?: string; relatedConflicts?: string[]
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data: ArmsSaleCountry[] = loadData('arms-sales-countries.json')
  const entry = data.find(d => d.slug === slug)
  if (!entry) return { title: 'Not Found' }
  return {
    title: `US Arms Sales to ${entry.country} — ${fmtMoney(entry.totalSince2009 * 1e6)} Since 2009`,
    description: `The US has sold ${fmtMoney(entry.totalSince2009 * 1e6)} in weapons to ${entry.country} since 2009. Top systems: ${entry.topSystems.slice(0, 3).join(', ')}.`,
  }
}

export default async function ArmsSaleCountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data: ArmsSaleCountry[] = loadData('arms-sales-countries.json')
  const entry = data.find(d => d.slug === slug)
  if (!entry) notFound()

  const maxTotal = Math.max(...data.map(d => d.totalSince2009))

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Arms Sales', href: '/arms-sales' }, { label: 'By Country', href: '/arms-sales/countries' }, { label: entry.country }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
          Arms Sales: {entry.country}
        </h1>
        <p className="text-stone-500 mt-2">{entry.region}</p>
      </div>

      <ShareButtons title={`US Arms Sales to ${entry.country}`} />

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(entry.totalSince2009 * 1e6)}</p>
          <p className="text-xs text-stone-500">Total Since 2009</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(entry.recentAmount * 1e6)}</p>
          <p className="text-xs text-stone-500">FY{entry.recentFY}</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-stone-900 font-[family-name:var(--font-heading)]">#{data.sort((a, b) => b.totalSince2009 - a.totalSince2009).findIndex(d => d.slug === slug) + 1}</p>
          <p className="text-xs text-stone-500">Buyer Rank</p>
        </div>
      </div>

      {/* Size comparison bar */}
      <div className="bg-stone-800 border border-stone-200 rounded-lg p-5 mb-8">
        <p className="text-sm text-stone-500 mb-2">Share of top buyers</p>
        <div className="w-full bg-stone-700 rounded-full h-4">
          <div className="bg-red-600 h-4 rounded-full" style={{ width: `${(entry.totalSince2009 / maxTotal) * 100}%` }} />
        </div>
      </div>

      {/* Top Weapons Systems */}
      <div className="bg-stone-800 border border-stone-200 rounded-lg p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">🔫 Top Weapons Systems Sold</h2>
        <ul className="space-y-2">
          {entry.topSystems.map((sys, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-red-700 mt-0.5">▸</span>
              <span className="text-stone-600">{sys}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Note */}
      {entry.note && (
        <div className="bg-stone-800 border border-stone-200 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">📝 Background</h2>
          <p className="text-stone-600 leading-relaxed">{entry.note}</p>
        </div>
      )}

      {/* Controversies */}
      {entry.controversies && (
        <div className="bg-red-950 border border-red-900 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-700 mb-3">⚠️ Controversies</h2>
          <p className="text-stone-600 leading-relaxed">{entry.controversies}</p>
        </div>
      )}

      {/* Related Conflicts */}
      {entry.relatedConflicts && entry.relatedConflicts.length > 0 && (
        <div className="bg-stone-800 border border-stone-200 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">⚔️ Related Conflicts</h2>
          <div className="flex flex-wrap gap-2">
            {entry.relatedConflicts.map((c, i) => (
              <Link key={i} href={`/conflicts/${c}`} className="bg-stone-700 text-stone-600 px-3 py-1 rounded-full text-sm hover:bg-stone-600 transition">
                {c}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Other Countries */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">🌍 Other Major Buyers</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {data.filter(d => d.slug !== slug).slice(0, 10).map(d => (
          <Link key={d.slug} href={`/arms-sales/${d.slug}`} className="bg-stone-800 border border-stone-200 rounded-lg px-3 py-2 text-stone-600 hover:border-red-300 hover:shadow-md transition text-sm">
            {d.country} ({fmtMoney(d.totalSince2009 * 1e6)})
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/arms-sales" className="text-red-700 hover:text-red-600 text-sm">← Back to Arms Sales Overview</Link>
      </div>

      <BackToTop />
    </div>
  )
}
