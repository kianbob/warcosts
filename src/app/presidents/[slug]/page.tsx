import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import dynamic from 'next/dynamic'

const PresidentSpendingChart = dynamic(
  () => import('@/components/charts/PresidentSpendingChart').then(mod => mod.PresidentSpendingChart),
  { ssr: false, loading: () => <div style={{ height: 350 }} /> }
)

// Alias map for common URL slugs that differ from slugify(name)
const slugAliases: Record<string, string> = {
  'george-w-bush': 'bush-jr',
  'george-hw-bush': 'bush-sr',
  'george-h-w-bush': 'bush-sr',
  'theodore-roosevelt': 'roosevelt',
  'lyndon-johnson': 'johnson',
  'lyndon-b-johnson': 'johnson',
  'john-f-kennedy': 'kennedy',
  'richard-nixon': 'nixon',
  'ronald-reagan': 'reagan',
  'abraham-lincoln': 'lincoln',
  'william-mckinley': 'mckinley',
  'james-madison': 'madison',
  'james-polk': 'polk',
  'george-washington': 'washington',
  'john-adams': 'adams',
  'thomas-jefferson': 'jefferson',
  'dwight-eisenhower': 'eisenhower',
  'dwight-d-eisenhower': 'eisenhower',
  'woodrow-wilson': 'wilson',
  'harry-truman': 'truman',
  'harry-s-truman': 'truman',
  'bill-clinton': 'clinton',
  'barack-obama': 'obama',
  'donald-trump': 'trump',
  'joe-biden': 'biden',
  'joseph-biden': 'biden',
}

function resolveSlug(slug: string): string {
  return slugAliases[slug] || slug
}

const partyMap: Record<string, string> = {
  'Washington': 'None', 'Adams': 'Federalist', 'Jefferson': 'Democratic-Republican',
  'Madison': 'Democratic-Republican', 'Polk': 'Democrat', 'Lincoln': 'Republican',
  'McKinley': 'Republican', 'Roosevelt': 'Republican', 'Wilson': 'Democrat',
  'Truman': 'Democrat', 'Eisenhower': 'Republican', 'Kennedy': 'Democrat',
  'Johnson': 'Democrat', 'Nixon': 'Republican', 'Reagan': 'Republican',
  'Bush Sr.': 'Republican', 'Clinton': 'Democrat', 'Bush Jr.': 'Republican',
  'Obama': 'Democrat', 'Trump': 'Republican', 'Biden': 'Democrat',
  'Continental Congress': 'N/A',
}

const presidentYears: Record<string, string> = {
  'Washington': '1789–1797', 'Adams': '1797–1801', 'Jefferson': '1801–1809',
  'Madison': '1809–1817', 'Polk': '1845–1849', 'Lincoln': '1861–1865',
  'McKinley': '1897–1901', 'Roosevelt': '1901–1909', 'Wilson': '1913–1921',
  'Truman': '1945–1953', 'Eisenhower': '1953–1961', 'Kennedy': '1961–1963',
  'Johnson': '1963–1969', 'Nixon': '1969–1974', 'Reagan': '1981–1989',
  'Bush Sr.': '1989–1993', 'Clinton': '1993–2001', 'Bush Jr.': '2001–2009',
  'Obama': '2009–2017', 'Trump': '2017–2021', 'Biden': '2021–2025',
  'Continental Congress': '1775–1789',
}

export async function generateStaticParams() {
  const presidents = loadData('presidents.json')
  const params = presidents.map((p: any) => ({ slug: slugify(p.name) }))
  // Also generate pages for common alias slugs
  for (const alias of Object.keys(slugAliases)) {
    if (!params.some((p: any) => p.slug === alias)) {
      params.push({ slug: alias })
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const presidents = loadData('presidents.json')
  const resolved = resolveSlug(slug)
  const p = presidents.find((x: any) => slugify(x.name) === resolved)
  if (!p) return { title: 'President Not Found' }
  return {
    title: `${p.name} — War Record: ${fmtMoney(p.totalCost)} Spent, ${fmt(p.totalUSDeaths)} Deaths`,
    description: `${p.name}'s war record: ${p.conflicts.length} conflicts, ${fmtMoney(p.totalCost)} total cost, ${fmt(p.totalUSDeaths)} US military deaths.`,
  }
}

export default async function PresidentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const presidents = loadData('presidents.json')
  const spending = loadData('military-spending.json')
  const conflicts = loadData('conflicts.json')
  const resolved = resolveSlug(slug)
  const p = presidents.find((x: any) => slugify(x.name) === resolved)
  if (!p) notFound()

  const party = partyMap[p.name] || '—'
  const years = presidentYears[p.name] || '—'
  const spendingData = spending.filter((s: any) => s.president === p.name)
  const totalSpending = spendingData.reduce((s: number, r: any) => s + r.amount, 0)

  // Find matching conflicts
  const presConflicts = conflicts.filter((c: any) =>
    p.conflicts.some((name: string) =>
      c.name.includes(name) || c.shortName?.includes(name) || name.includes(c.shortName || '')
    )
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Presidents at War', href: '/presidents' }, { label: p.name }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="text-stone-400 text-sm">{years}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            party === 'Republican' ? 'bg-red-600/20 text-red-400' :
            party === 'Democrat' ? 'bg-blue-600/20 text-blue-400' :
            'bg-stone-600/20 text-stone-400'
          }`}>{party}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">{p.name}</h1>
        <p className="text-stone-400 mt-2">{p.conflicts.length} conflicts · {fmtMoney(p.totalCost)} total war cost · {fmt(p.totalUSDeaths)} US deaths</p>
      </div>

      <ShareButtons title={`${p.name} — War Record`} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(p.totalCost)}</p>
          <p className="text-xs text-muted">War Cost</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(p.totalUSDeaths)}</p>
          <p className="text-xs text-muted">US Deaths</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{p.conflicts.length}</p>
          <p className="text-xs text-muted">Conflicts</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{spendingData.length > 0 ? `$${totalSpending.toFixed(0)}B` : '—'}</p>
          <p className="text-xs text-muted">Military Budget (Total $B)</p>
        </div>
      </div>

      {spendingData.length > 0 && <PresidentSpendingChart data={spendingData} />}

      <div className="mt-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Conflicts Under {p.name}</h2>
        <div className="space-y-3">
          {p.conflicts.map((name: string, i: number) => {
            const match = presConflicts.find((c: any) =>
              c.name.includes(name) || c.shortName?.includes(name) || name.includes(c.shortName || '')
            )
            return (
              <div key={i} className="bg-white rounded-lg border p-4">
                {match ? (
                  <Link href={`/conflicts/${match.id}`} className="hover:underline">
                    <h3 className="font-semibold text-primary">{match.name}</h3>
                    <p className="text-sm text-muted">{match.startYear}–{match.endYear} · {fmtMoney(match.costInflationAdjusted)} · {match.outcome}</p>
                    <p className="text-xs text-muted mt-1">{match.congressionalAuth ? '✅ Congressional Authorization' : '❌ No Congressional Authorization'} — {match.authDetail}</p>
                  </Link>
                ) : (
                  <h3 className="font-semibold">{name}</h3>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
