import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { CountryTimelineChart } from '@/components/charts/CountryTimelineChart'

function getAllCountries() {
  const conflicts = loadData('conflicts.json')
  const aid = loadData('foreign-aid.json')
  const arms = loadData('arms-sales.json')
  const presence = loadData('overseas-presence.json')
  const countries = new Set<string>()
  conflicts.forEach((c: any) => c.countries?.forEach((co: string) => countries.add(co)))
  aid.topRecipients?.forEach((r: any) => countries.add(r.country))
  arms.topBuyers?.forEach((b: any) => countries.add(b.country))
  presence.topDeployments?.forEach((d: any) => countries.add(d.country))
  return [...countries].sort()
}

export async function generateStaticParams() {
  return getAllCountries().map(c => ({ slug: slugify(c) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const country = getAllCountries().find(c => slugify(c) === slug)
  if (!country) return { title: 'Country Not Found' }
  return {
    title: `${country} — US Military Involvement, Aid & Arms`,
    description: `Complete history of US military involvement with ${country}: wars, foreign aid, arms sales, and troop deployments.`,
  }
}

export default async function CountryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const allCountries = getAllCountries()
  const country = allCountries.find(c => slugify(c) === slug)
  if (!country) notFound()

  const conflicts = loadData('conflicts.json')
  const aid = loadData('foreign-aid.json')
  const arms = loadData('arms-sales.json')
  const presence = loadData('overseas-presence.json')

  const countryConflicts = conflicts.filter((c: any) => c.countries?.includes(country))
  const aidData = aid.topRecipients?.find((r: any) => r.country === country)
  const armsData = arms.topBuyers?.find((b: any) => b.country === country)
  const presenceData = presence.topDeployments?.find((d: any) => d.country === country)

  const totalWarCost = countryConflicts.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalAid = aidData?.totalSince2001 || 0
  const totalArms = armsData?.total || 0
  const totalBaseCost = presenceData?.annualCost || 0
  const totalSpending = totalWarCost + totalAid + totalArms

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Countries', href: '/countries' }, { label: country }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">{country}</h1>
        <p className="text-stone-400 mt-2">
          {countryConflicts.length > 0 && `${countryConflicts.length} conflicts`}
          {aidData && ` · ${fmtMoney(totalAid)} in aid`}
          {armsData && ` · ${fmtMoney(totalArms)} in arms`}
          {presenceData && ` · ${fmt(presenceData.troops)} troops stationed`}
        </p>
      </div>

      <ShareButtons title={`${country} — US Military Involvement`} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{totalSpending > 0 ? fmtMoney(totalSpending) : '—'}</p>
          <p className="text-xs text-muted">Total US Spending</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{countryConflicts.length}</p>
          <p className="text-xs text-muted">Conflicts</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{presenceData ? fmt(presenceData.troops) : '—'}</p>
          <p className="text-xs text-muted">Troops Stationed</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{presenceData ? presenceData.bases : '—'}</p>
          <p className="text-xs text-muted">Military Bases</p>
        </div>
      </div>

      {countryConflicts.length > 0 && (
        <>
          <CountryTimelineChart conflicts={countryConflicts} />
          <div className="mt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Conflicts</h2>
            <div className="space-y-3">
              {countryConflicts.map((c: any) => (
                <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-lg border p-4 hover:shadow-md transition">
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-sm text-muted">{c.startYear}–{c.endYear} · {fmtMoney(c.costInflationAdjusted)} · {c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) + ' US deaths' : 'Covert'}</p>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {aidData && (
        <div className="mt-8 bg-white rounded-lg border p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">Foreign Aid</h2>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div><p className="text-xl font-bold text-primary">{fmtMoney(aidData.totalSince2001)}</p><p className="text-xs text-muted">Total Since 2001</p></div>
            <div><p className="text-xl font-bold text-primary">{fmtMoney(aidData.annual2023)}</p><p className="text-xs text-muted">Annual (2023)</p></div>
          </div>
          <p className="text-sm text-muted">{aidData.type} — {aidData.note}</p>
          <Link href="/foreign-aid" className="text-sm text-primary hover:underline mt-2 inline-block">→ Full Foreign Aid Data</Link>
        </div>
      )}

      {armsData && (
        <div className="mt-8 bg-white rounded-lg border p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">Arms Sales</h2>
          <p className="text-xl font-bold text-primary mb-2">{fmtMoney(armsData.total)}</p>
          <p className="text-sm text-muted">Since {armsData.since} — {armsData.note}</p>
          <Link href="/arms-sales" className="text-sm text-primary hover:underline mt-2 inline-block">→ Full Arms Sales Data</Link>
        </div>
      )}

      {presenceData && (
        <div className="mt-8 bg-white rounded-lg border p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">US Military Presence</h2>
          <div className="grid grid-cols-3 gap-4 mb-3">
            <div><p className="text-xl font-bold text-primary">{fmt(presenceData.troops)}</p><p className="text-xs text-muted">Troops</p></div>
            <div><p className="text-xl font-bold text-primary">{presenceData.bases}</p><p className="text-xs text-muted">Bases</p></div>
            <div><p className="text-xl font-bold text-primary">{fmtMoney(presenceData.annualCost)}</p><p className="text-xs text-muted">Annual Cost</p></div>
          </div>
          <p className="text-sm text-muted">US presence since {presenceData.since} — {presenceData.note}</p>
          <Link href="/bases" className="text-sm text-primary hover:underline mt-2 inline-block">→ Full Overseas Bases Data</Link>
        </div>
      )}
    </div>
  )
}
