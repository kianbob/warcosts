import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { PresidentSpendingChart } from '@/components/charts/PresidentSpendingChart'

const decades = ['1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s']

export async function generateStaticParams() {
  return decades.map(d => ({ slug: d }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  if (!decades.includes(slug)) return { title: 'Decade Not Found' }
  return {
    title: `The ${slug} — US Military Spending & Conflicts`,
    description: `US military spending, active conflicts, and key events of the ${slug}. Decade-by-decade analysis of American war costs.`,
  }
}

export default async function DecadeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!decades.includes(slug)) notFound()

  const decadeStart = parseInt(slug)
  const decadeEnd = decadeStart + 9

  const spending = loadData('military-spending.json')
  const conflicts = loadData('conflicts.json')
  const presidents = loadData('presidents.json')

  const decadeSpending = spending.filter((s: any) => s.year >= decadeStart && s.year <= decadeEnd)
  const totalSpending = decadeSpending.reduce((s: number, r: any) => s + r.amount, 0)

  const activeConflicts = conflicts.filter((c: any) =>
    c.startYear <= decadeEnd && c.endYear >= decadeStart
  )
  const totalCost = activeConflicts.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalDeaths = activeConflicts.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)

  const decadePresidents = [...new Set(decadeSpending.map((s: any) => s.president))] as string[]

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Decades', href: '/decades' }, { label: `The ${slug}` }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">The {slug}</h1>
        <p className="text-stone-400 mt-2">{activeConflicts.length} active conflicts · {decadePresidents.length > 0 ? decadePresidents.join(', ') : 'N/A'}</p>
      </div>

      <ShareButtons title={`The ${slug} — US Military Spending`} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">${totalSpending.toFixed(0)}B</p>
          <p className="text-xs text-muted">Military Budget (Total)</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{activeConflicts.length}</p>
          <p className="text-xs text-muted">Active Conflicts</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</p>
          <p className="text-xs text-muted">War Cost</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(totalDeaths)}</p>
          <p className="text-xs text-muted">US Deaths</p>
        </div>
      </div>

      {decadeSpending.length > 0 && <PresidentSpendingChart data={decadeSpending} />}

      {decadePresidents.length > 0 && (
        <div className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Presidents</h2>
          <div className="flex flex-wrap gap-3">
            {decadePresidents.map((name: string) => (
              <Link key={name} href={`/presidents/${slugify(name)}`} className="bg-white rounded-lg border px-4 py-2 hover:shadow-md transition font-semibold">
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Active Conflicts</h2>
        <div className="space-y-3">
          {activeConflicts.map((c: any) => (
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

      {activeConflicts.some((c: any) => c.keyEvents?.length > 0) && (
        <div className="mt-8 bg-white rounded-lg border p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Key Events</h2>
          <ul className="space-y-2">
            {activeConflicts.flatMap((c: any) =>
              (c.keyEvents || []).filter((e: string) => {
                const yearMatch = e.match(/\((\d{4})\)/)
                if (!yearMatch) return false
                const y = parseInt(yearMatch[1])
                return y >= decadeStart && y <= decadeEnd
              })
            ).map((e: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▸</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
