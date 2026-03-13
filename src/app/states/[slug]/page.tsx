import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

interface StateData {
  state: string
  abbr: string
  slug: string
  totalBases: number
  activeBases: number
  byBranch: Record<string, number>
  defense: {
    totalSpending: number
    directJobs: number
    contractValue: number
    pctGsp: number
  } | null
  majorInstallations: { name: string; slug: string; branch: string }[]
}

export function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  try {
    const data = loadData(`state-military/${slug}.json`) as StateData
    const spending = data.defense?.totalSpending ? `$${data.defense.totalSpending}B` : ''
    return {
      title: `${data.state} Military Footprint — ${spending ? spending + ' DoD Spending | ' : ''}WarCosts`,
      description: `Explore ${data.state}'s military footprint: ${data.totalBases} bases${spending ? `, ${spending} in defense spending` : ''}, and the economic impact of the Pentagon on ${data.abbr}.`,
      alternates: { canonical: `https://www.warcosts.org/states/${slug}` },
    }
  } catch {
    return { title: 'State Military Footprint | WarCosts' }
  }
}

export default async function StateFootprintPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = loadData(`state-military/${slug}.json`) as StateData
  const def = data.defense
  const branches = Object.entries(data.byBranch || {}).sort((a, b) => b[1] - a[1])

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        
        { label: 'State Military Footprint', href: '/states' },
        { label: data.state },
      ]} />

      {/* Hero */}
      <div className="mt-4 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-stone-900 mb-3">
          {data.state}
        </h1>
        <p className="text-stone-400 text-lg">
          Military-economic footprint of {data.state} ({data.abbr})
        </p>
        {def && (
          <div className="flex flex-wrap gap-6 mt-4 text-lg">
            {def.totalSpending > 0 && (
              <span className="text-red-700 font-bold">{fmtMoney(def.totalSpending * 1e9)} DoD spending</span>
            )}
            {def.directJobs > 0 && (
              <span className="text-stone-600">{fmt(def.directJobs)} direct jobs</span>
            )}
            {def.pctGsp > 0 && (
              <span className="text-stone-600">{def.pctGsp}% of state economy</span>
            )}
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <StatCard label="Total Bases" value={fmt(data.totalBases)} />
        <StatCard label="Active Bases" value={fmt(data.activeBases)} />
        <StatCard label="Contract Value" value={def?.contractValue ? fmtMoney(def.contractValue * 1e9) : '—'} />
        <StatCard label="Direct Jobs" value={def?.directJobs ? fmt(def.directJobs) : '—'} />
      </div>

      {/* Defense Spending Context */}
      {def && def.pctGsp > 0 && (
        <section className="bg-white border border-stone-200 rounded-lg p-6 mb-10">
          <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-stone-900 mb-3">
            Defense Spending as % of State Economy
          </h2>
          <div className="flex items-center gap-4 mb-3">
            <div className="text-4xl font-bold text-red-700">{def.pctGsp}%</div>
            <div className="text-stone-400">
              of {data.state}&apos;s gross state product comes from Department of Defense activity
            </div>
          </div>
          <div className="w-full bg-stone-200 rounded-full h-3">
            <div
              className="bg-red-600 h-3 rounded-full"
              style={{ width: `${Math.min(def.pctGsp * 5, 100)}%` }}
            />
          </div>
          <p className="text-stone-500 text-sm mt-3">
            {def.pctGsp >= 5
              ? `${data.state} is heavily dependent on defense spending, making it one of the most militarized state economies in the country.`
              : def.pctGsp >= 2
                ? `Defense spending is a significant factor in ${data.state}'s economy.`
                : `Defense spending is a relatively small share of ${data.state}'s economy.`}
          </p>
        </section>
      )}

      {/* By Branch */}
      {branches.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-stone-900 mb-4">
            Bases by Branch
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {branches.map(([branch, count]) => (
              <div key={branch} className="bg-white border border-stone-200 rounded-lg p-4">
                <div className="text-red-700 text-2xl font-bold">{count}</div>
                <div className="text-stone-600 text-sm mt-1">{branch}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Major Installations */}
      {data.majorInstallations?.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-stone-900 mb-4">
            Major Installations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.majorInstallations.map((inst) => (
              <Link
                key={inst.slug}
                href={`/bases/${inst.slug}`}
                className="bg-white border border-stone-200 hover:bg-stone-50 border border-stone-200 rounded-lg p-4 transition-colors"
              >
                <div className="text-stone-900 font-medium">{inst.name}</div>
                <div className="text-stone-400 text-sm mt-1">{inst.branch}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Cross-links */}
      <section className="flex flex-wrap gap-4 mb-10">
        <Link
          href={`/bases/states/${data.abbr?.toLowerCase() || data.slug}`}
          className="bg-red-600 hover:bg-red-700 text-stone-900 px-5 py-3 rounded-lg font-medium transition-colors"
        >
          View all bases in {data.state} →
        </Link>
        <Link
          href="/states"
          className="bg-white border border-stone-200 hover:bg-stone-100 text-stone-900 px-5 py-3 rounded-lg font-medium transition-colors"
        >
          Compare all states
        </Link>
      </section>

      <ShareButtons title={`${data.state} Military Footprint`} />
      <BackToTop />
    </main>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
      <div className="text-2xl md:text-3xl font-bold text-red-700">{value}</div>
      <div className="text-stone-400 text-sm mt-1">{label}</div>
    </div>
  )
}
