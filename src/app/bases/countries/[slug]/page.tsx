import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

interface CountrySummary { country: string; slug: string; bases: number; lilyPads: number; usFunded: number; domestic: number; total: number }
interface Base { name: string; slug: string; country: string; countrySlug: string; state: string | null; component: string | null; status: string; type: string }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const countries = loadData('base-countries.json') as CountrySummary[]
  const c = countries.find(x => x.slug === slug)
  if (!c) return { title: 'Country Not Found — WarCosts' }
  return {
    title: `US Military Bases in ${c.country} — ${c.total} Installations | WarCosts`,
    description: `The United States maintains ${c.total} military installations in ${c.country}, including ${c.bases} bases and ${c.lilyPads} lily pads. Explore every installation.`,
    alternates: { canonical: `https://www.warcosts.org/bases/countries/${slug}` },
  }
}

export function generateStaticParams() {
  const countries = loadData('base-countries.json') as CountrySummary[]
  return countries.filter(c => c.total >= 5).map(c => ({ slug: c.slug }))
}

export const dynamicParams = true

export default async function CountryBasesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const countries = loadData('base-countries.json') as CountrySummary[]
  const c = countries.find(x => x.slug === slug)
  if (!c) notFound()

  const index = loadData('base-index.json') as Base[]
  const countryBases = index.filter(b => b.country === c.country)
  const bases = countryBases.filter(b => b.type === 'base')
  const lilyPads = countryBases.filter(b => b.type === 'lily-pad')
  const usFunded = countryBases.filter(b => b.type === 'us-funded')
  const domestic = countryBases.filter(b => b.type === 'domestic')

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Bases', href: '/bases' }, { label: 'By Country', href: '/bases/countries' }, { label: c.country }]} />

      <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mt-4 mb-2">
        US Military Bases in {c.country}
      </h1>
      <p className="text-stone-400 text-lg mb-6">{fmt(c.total)} total installations</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {c.bases > 0 && <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-red-400">{fmt(c.bases)}</div><div className="text-xs text-stone-400">Major Bases</div></div>}
        {c.lilyPads > 0 && <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-yellow-400">{fmt(c.lilyPads)}</div><div className="text-xs text-stone-400">Lily Pads</div></div>}
        {c.usFunded > 0 && <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-blue-400">{fmt(c.usFunded)}</div><div className="text-xs text-stone-400">US-Funded</div></div>}
        {c.domestic > 0 && <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-green-400">{fmt(c.domestic)}</div><div className="text-xs text-stone-400">Domestic</div></div>}
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-white">{fmt(c.total)}</div><div className="text-xs text-stone-400">Total</div></div>
      </div>

      {[{ title: 'Major Bases', items: bases, color: 'red' }, { title: 'Lily Pads & Small Outposts', items: lilyPads, color: 'yellow' }, { title: 'US-Funded Host Nation Bases', items: usFunded, color: 'blue' }, { title: 'Domestic Installations', items: domestic, color: 'green' }].map(section => section.items.length > 0 && (
        <div key={section.title} className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">{section.title} ({section.items.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {section.items.map(b => (
              <Link key={b.slug} href={`/bases/${b.slug}`} className="bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-lg p-3 transition-colors">
                <div className="text-white font-medium text-sm">{b.name}</div>
                <div className="text-stone-400 text-xs">{b.component || b.type} · {b.status}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-red-400 mb-2">The Cost of Empire</h2>
        <p className="text-stone-300 leading-relaxed">
          Maintaining {fmt(c.total)} military installations in {c.country} costs American taxpayers billions of dollars annually.
          The Pentagon&apos;s annual Base Structure Report often understates the true number of bases.
        </p>
        <div className="flex gap-3 mt-3 flex-wrap">
          <Link href="/analysis/empire-of-bases" className="text-red-400 hover:text-red-300 text-sm underline">Empire of Bases →</Link>
          <Link href="/spending" className="text-red-400 hover:text-red-300 text-sm underline">Military Spending →</Link>
          <Link href="/opportunity-cost" className="text-red-400 hover:text-red-300 text-sm underline">What Else Could This Buy? →</Link>
        </div>
      </div>

      <ShareButtons title={`US Military Bases in ${c.country}`} />
      <BackToTop />
    </main>
  )
}
