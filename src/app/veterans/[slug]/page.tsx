import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

interface VetWar {
  war: string; slug: string; years: string; served: number; deaths: number
  wounded: number; missing?: number; veteransAlive2024: number; peakTroops?: number
  pctPopulation?: number; medianAge2024?: number; benefits?: string; ptsd?: string
  draftees?: number; draftDodgers?: number; agentOrangeExposed?: number
  stories?: string[]
}

export async function generateStaticParams() {
  const data: VetWar[] = loadData('veterans-by-war.json')
  return data.map(v => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data: VetWar[] = loadData('veterans-by-war.json')
  const war = data.find(v => v.slug === slug)
  if (!war) return { title: 'Not Found' }
  return {
    title: `${war.war} Veterans — ${fmt(war.served)} Served, ${fmt(war.deaths)} Died`,
    description: `${fmt(war.served)} Americans served in the ${war.war} (${war.years}). ${fmt(war.deaths)} killed, ${fmt(war.wounded)} wounded. ${fmt(war.veteransAlive2024)} veterans still alive.`,
  }
}

export default async function VeteranWarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data: VetWar[] = loadData('veterans-by-war.json')
  const war = data.find(v => v.slug === slug)
  if (!war) notFound()

  const deathRate = ((war.deaths / war.served) * 100).toFixed(2)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Veterans', href: '/veterans' }, { label: war.war }]} />

      <div className="bg-stone-50 text-stone-900 rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
          {war.war} Veterans
        </h1>
        <p className="text-stone-500 mt-2">{war.years}</p>
      </div>

      <ShareButtons title={`${war.war} Veterans`} />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-stone-900 font-[family-name:var(--font-heading)]">{fmt(war.served)}</p>
          <p className="text-xs text-stone-500">Served</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(war.deaths)}</p>
          <p className="text-xs text-stone-500">Deaths</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmt(war.wounded)}</p>
          <p className="text-xs text-stone-500">Wounded</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-stone-900 font-[family-name:var(--font-heading)]">{fmt(war.veteransAlive2024)}</p>
          <p className="text-xs text-stone-500">Still Alive (2024)</p>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {war.peakTroops && (
          <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-3 text-center border border-stone-200">
            <p className="text-lg font-bold text-stone-900">{fmt(war.peakTroops)}</p>
            <p className="text-xs text-stone-500">Peak Deployed</p>
          </div>
        )}
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-3 text-center border border-stone-200">
          <p className="text-lg font-bold text-red-700">{deathRate}%</p>
          <p className="text-xs text-stone-500">Death Rate</p>
        </div>
        {war.missing != null && war.missing > 0 && (
          <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-3 text-center border border-stone-200">
            <p className="text-lg font-bold text-red-700">{fmt(war.missing)}</p>
            <p className="text-xs text-stone-500">Missing/POW</p>
          </div>
        )}
        {war.medianAge2024 && (
          <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-3 text-center border border-stone-200">
            <p className="text-lg font-bold text-stone-900">{war.medianAge2024}</p>
            <p className="text-xs text-stone-500">Median Age (2024)</p>
          </div>
        )}
      </div>

      {/* Draft Info */}
      {(war.draftees || war.draftDodgers || war.agentOrangeExposed) && (
        <div className="bg-white border border-stone-200 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">📋 Additional Data</h2>
          <div className="space-y-2 text-stone-600">
            {war.draftees && <p>🎖️ <strong>{fmt(war.draftees)}</strong> were drafted</p>}
            {war.draftDodgers && <p>🏃 <strong>{fmt(war.draftDodgers)}</strong> evaded the draft</p>}
            {war.agentOrangeExposed && <p>☠️ <strong>{fmt(war.agentOrangeExposed)}</strong> exposed to Agent Orange</p>}
            {war.pctPopulation && <p>📊 <strong>{war.pctPopulation}%</strong> of the US population served</p>}
          </div>
        </div>
      )}

      {/* PTSD */}
      {war.ptsd && (
        <div className="bg-red-950 border border-red-900 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-700 mb-3">🧠 PTSD & Mental Health</h2>
          <p className="text-stone-600 leading-relaxed">{war.ptsd}</p>
        </div>
      )}

      {/* Benefits */}
      {war.benefits && (
        <div className="bg-white border border-stone-200 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">🏥 Veterans Benefits</h2>
          <p className="text-stone-600 leading-relaxed">{war.benefits}</p>
        </div>
      )}

      {/* Other Wars */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">⚔️ Veterans of Other Wars</h2>
      <div className="flex flex-wrap gap-3 mb-8">
        {data.filter(v => v.slug !== slug).map(v => (
          <Link key={v.slug} href={`/veterans/${v.slug}`} className="bg-white border border-stone-200 rounded-lg px-4 py-2 text-stone-600 hover:border-red-300 hover:shadow-md transition text-sm">
            {v.war} ({fmt(v.served)} served)
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/veterans" className="text-red-700 hover:text-red-600 text-sm">← Back to Veterans Overview</Link>
      </div>

      <BackToTop />
    </div>
  )
}
