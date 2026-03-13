import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { CountrySpendingChart, CountryGdpChart } from '@/components/charts/CountrySpendingChart'

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  try {
    const data = loadData(`country-profiles/${slug}.json`)
    return {
      title: `${data.name} Military Spending — Global Rank #${data.rank ?? 'N/A'} | WarCosts`,
      description: `${data.name} spent $${data.latest.amountBillions}B on its military in ${data.latest.year}. ${data.pctWorld ? `${data.pctWorld}% of world military spending.` : ''} Full SIPRI data, charts, and analysis.`,
      alternates: { canonical: `https://www.warcosts.org/countries/${slug}` },
    }
  } catch {
    return { title: 'Country Not Found' }
  }
}

export default async function CountryProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let data: any
  try {
    data = loadData(`country-profiles/${slug}.json`)
  } catch {
    notFound()
  }

  const { name, rank, latest, gdpPct, pctWorld, peak, trend10yr, spending, gdp, usBases, armsSales, droneStrikes, relatedConflicts } = data

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Country Profiles', href: '/countries' }, { label: name }]} />

        {/* Hero */}
        <div className="bg-white border border-stone-200 rounded-xl p-8 mb-8 border border-stone-200">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900">{name}</h1>
          <p className="text-stone-500 mt-1 text-lg">Military Spending Profile</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {rank && (
              <div>
                <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">#{rank}</p>
                <p className="text-xs text-stone-500">Global Rank</p>
              </div>
            )}
            <div>
              <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">${latest.amountBillions}B</p>
              <p className="text-xs text-stone-500">{latest.year} Spending</p>
            </div>
            {pctWorld && (
              <div>
                <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{pctWorld}%</p>
                <p className="text-xs text-stone-500">of World Spending</p>
              </div>
            )}
            {gdpPct && (
              <div>
                <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{gdpPct}%</p>
                <p className="text-xs text-stone-500">of GDP</p>
              </div>
            )}
          </div>
        </div>

        <ShareButtons title={`${name} — Military Spending Profile`} />

        {/* Spending Chart */}
        <div className="mt-8">
          <CountrySpendingChart spending={spending} />
        </div>

        {/* GDP Chart */}
        {gdp && gdp.length > 0 && <CountryGdpChart gdp={gdp} />}

        {/* Trend & Peak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {trend10yr !== null && trend10yr !== undefined && (
            <div className="bg-white border border-stone-200 rounded-xl border border-stone-200 p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-stone-900 mb-2">10-Year Trend</h3>
              <p className={`text-3xl font-bold ${trend10yr >= 0 ? 'text-red-700' : 'text-green-700'}`}>
                {trend10yr >= 0 ? '+' : ''}{trend10yr}%
              </p>
              <p className="text-stone-500 text-sm mt-1">
                {trend10yr >= 0 ? 'Military spending has increased' : 'Military spending has decreased'} over the past decade
              </p>
            </div>
          )}
          {peak && (
            <div className="bg-white border border-stone-200 rounded-xl border border-stone-200 p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-stone-900 mb-2">Peak Spending</h3>
              <p className="text-3xl font-bold text-red-700">${peak.amountBillions}B</p>
              <p className="text-stone-500 text-sm mt-1">in {peak.year} (constant 2023 USD)</p>
            </div>
          )}
        </div>

        {/* US Bases */}
        {usBases > 0 && (
          <div className="bg-white border border-stone-200 rounded-xl border border-stone-200 p-6 mt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">🏗️ US Military Bases</h2>
            <p className="text-3xl font-bold text-red-700">{fmt(usBases)}</p>
            <p className="text-stone-500 text-sm mt-1">US military installations in {name}</p>
            <Link href={`/bases/countries/${slug}`} className="text-red-700 hover:text-red-600 text-sm mt-3 inline-block">
              → View all US bases in {name}
            </Link>
          </div>
        )}

        {/* Arms Sales */}
        {armsSales && (
          <div className="bg-white border border-stone-200 rounded-xl border border-stone-200 p-6 mt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">🔫 Arms Sales</h2>
            <p className="text-3xl font-bold text-red-700">{fmtMoney(armsSales.total * 1e6)}</p>
            {armsSales.topSystems && armsSales.topSystems.length > 0 && (
              <div className="mt-3">
                <p className="text-stone-500 text-sm font-semibold mb-1">Top Systems:</p>
                <ul className="text-stone-600 text-sm space-y-1">
                  {armsSales.topSystems.map((s: string, i: number) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>
            )}
            {armsSales.note && <p className="text-stone-500 text-sm mt-3 italic">{armsSales.note}</p>}
            <Link href="/arms-sales" className="text-red-700 hover:text-red-600 text-sm mt-3 inline-block">
              → Full arms sales data
            </Link>
          </div>
        )}

        {/* Drone Strikes */}
        {droneStrikes && (
          <div className="bg-white border border-stone-200 rounded-xl border border-stone-200 p-6 mt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">🎯 US Drone Strikes</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold text-red-700">{fmt(droneStrikes.totalStrikes)}</p>
                <p className="text-xs text-stone-500">Total Strikes</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-700">{fmt(droneStrikes.minKilled)}–{fmt(droneStrikes.maxKilled)}</p>
                <p className="text-xs text-stone-500">Estimated Killed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-600">{droneStrikes.years}</p>
                <p className="text-xs text-stone-500">Years of Strikes</p>
              </div>
            </div>
            <Link href={`/drone-strikes/${slug}`} className="text-red-700 hover:text-red-600 text-sm mt-3 inline-block">
              → Detailed drone strike data for {name}
            </Link>
          </div>
        )}

        {/* Related Conflicts */}
        {relatedConflicts && relatedConflicts.length > 0 && (
          <div className="mt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">⚔️ Related Conflicts</h2>
            <div className="space-y-2">
              {relatedConflicts.map((c: any) => (
                <Link key={c.slug} href={`/conflicts/${c.slug}`} className="block bg-white border border-stone-200 rounded-lg border border-stone-200 p-4 hover:border-red-600 transition">
                  <span className="font-semibold text-stone-900">{c.name}</span>
                  <span className="text-stone-500 text-sm ml-2">{c.years}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Cross-links */}
        <div className="mt-12 bg-white border border-stone-200 rounded-xl border border-stone-200 p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-stone-900 mb-3">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/countries" className="text-red-700 hover:text-red-600 text-sm">← All Country Profiles</Link>
            <Link href="/global-spending" className="text-red-700 hover:text-red-600 text-sm">Global Military Spending</Link>
            <Link href="/arms-sales" className="text-red-700 hover:text-red-600 text-sm">Arms Sales</Link>
            <Link href="/bases" className="text-red-700 hover:text-red-600 text-sm">Overseas Bases</Link>
          </div>
        </div>

        <BackToTop />
      </div>
    </div>
  )
}
