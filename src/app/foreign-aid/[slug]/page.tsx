import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  try {
    const data = loadData(`aid-countries/${slug}.json`)
    return {
      title: `US Foreign Aid to ${data.country} — ${fmtMoney(data.totalSince2001 * 1e6)} Since 2001 | WarCosts`,
      description: `The US has sent ${fmtMoney(data.totalSince2001 * 1e6)} to ${data.country} since 2001. ${data.militaryPct}% military aid. Annual: ${fmtMoney(data.annual2024 * 1e6)}.`,
      alternates: { canonical: `https://www.warcosts.org/foreign-aid/${slug}` },
    }
  } catch {
    return { title: 'Country Not Found' }
  }
}

const TEACHER_SALARY = 65000
const SCHOOL_COST = 40_000_000
const HOSPITAL_COST = 500_000_000
const HOME_COST = 350_000

export default async function AidCountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let data: any
  try {
    data = loadData(`aid-countries/${slug}.json`)
  } catch {
    notFound()
  }

  const { country, region, totalSince2001, annual2024, militaryPct, type, population, gdpPerCapita, note, controversies } = data
  const totalDollars = totalSince2001 * 1e6
  const annualDollars = annual2024 * 1e6
  const aidPerCapita = population > 0 ? totalDollars / (population * 1e6) : 0

  const teachers = Math.floor(totalDollars / TEACHER_SALARY)
  const schools = Math.floor(totalDollars / SCHOOL_COST)
  const hospitals = Math.floor(totalDollars / HOSPITAL_COST)
  const homes = Math.floor(totalDollars / HOME_COST)

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Foreign Aid', href: '/foreign-aid' }, { label: 'By Country', href: '/foreign-aid/countries' }, { label: country }]} />

        {/* Hero */}
        <div className="bg-stone-800 rounded-xl p-8 mb-8 border border-stone-200">
          <p className="text-stone-500 text-sm uppercase tracking-wider mb-1">{region} · {type}</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900">US Foreign Aid to {country}</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div>
              <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(totalDollars)}</p>
              <p className="text-xs text-stone-500">Total Since 2001</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(annualDollars)}</p>
              <p className="text-xs text-stone-500">Annual (2024)</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{militaryPct}%</p>
              <p className="text-xs text-stone-500">Military Aid</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-stone-600 font-[family-name:var(--font-heading)]">{type}</p>
              <p className="text-xs text-stone-500">Aid Type</p>
            </div>
          </div>
        </div>

        <ShareButtons title={`US Foreign Aid to ${country} — WarCosts`} />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-stone-800 rounded-xl border border-stone-200 p-6">
            <p className="text-2xl font-bold text-red-700">{fmtMoney(totalDollars)}</p>
            <p className="text-xs text-stone-500">Total Aid Since 2001</p>
          </div>
          <div className="bg-stone-800 rounded-xl border border-stone-200 p-6">
            <p className="text-2xl font-bold text-red-700">{fmtMoney(annualDollars)}</p>
            <p className="text-xs text-stone-500">Annual Aid (2024)</p>
          </div>
          <div className="bg-stone-800 rounded-xl border border-stone-200 p-6">
            <p className="text-2xl font-bold text-red-700">{militaryPct}%</p>
            <p className="text-xs text-stone-500">Military Percentage</p>
          </div>
          <div className="bg-stone-800 rounded-xl border border-stone-200 p-6">
            <p className="text-2xl font-bold text-stone-600">{fmt(population)}M</p>
            <p className="text-xs text-stone-500">Population</p>
          </div>
          <div className="bg-stone-800 rounded-xl border border-stone-200 p-6">
            <p className="text-2xl font-bold text-stone-600">{fmtMoney(gdpPerCapita)}</p>
            <p className="text-xs text-stone-500">GDP Per Capita</p>
          </div>
          <div className="bg-stone-800 rounded-xl border border-stone-200 p-6">
            <p className="text-2xl font-bold text-red-700">{fmtMoney(aidPerCapita)}</p>
            <p className="text-xs text-stone-500">US Aid Per Capita (Total)</p>
          </div>
        </div>

        {/* Note */}
        {note && (
          <div className="bg-stone-800 rounded-xl border border-stone-200 p-6 mt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">📋 Context & Background</h2>
            <p className="text-stone-600 leading-relaxed">{note}</p>
          </div>
        )}

        {/* Controversies */}
        {controversies && (
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-700 mb-3">⚠️ Controversies</h2>
            <p className="text-stone-600 leading-relaxed">{controversies}</p>
          </div>
        )}

        {/* What This Money Could Buy Instead */}
        <div className="bg-stone-800 rounded-xl border border-stone-200 p-6 mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">💡 What {fmtMoney(totalDollars)} Could Buy Instead</h2>
          <p className="text-stone-500 text-sm mb-4">The total US aid sent to {country} since 2001 could have funded:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-700">{fmt(teachers)}</p>
              <p className="text-xs text-stone-500">Teacher Salaries</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-700">{fmt(schools)}</p>
              <p className="text-xs text-stone-500">New Schools</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-700">{fmt(hospitals)}</p>
              <p className="text-xs text-stone-500">Hospitals</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-700">{fmt(homes)}</p>
              <p className="text-xs text-stone-500">Affordable Homes</p>
            </div>
          </div>
        </div>

        {/* Cross-links */}
        <div className="mt-8 bg-stone-800 rounded-xl border border-stone-200 p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-stone-900 mb-3">Explore More on {country}</h2>
          <div className="flex flex-wrap gap-3">
            <Link href={`/countries/${slug}`} className="text-red-700 hover:text-red-600 text-sm">🌍 Military Spending Profile</Link>
            <Link href={`/arms-sales/${slug}`} className="text-red-700 hover:text-red-600 text-sm">🔫 Arms Sales</Link>
            <Link href={`/bases/countries/${slug}`} className="text-red-700 hover:text-red-600 text-sm">🏗️ US Bases</Link>
            <Link href="/foreign-aid/countries" className="text-red-700 hover:text-red-600 text-sm">← All Aid Recipients</Link>
            <Link href="/foreign-aid" className="text-red-700 hover:text-red-600 text-sm">📊 Foreign Aid Overview</Link>
          </div>
        </div>

        <BackToTop />
      </div>
    </div>
  )
}
