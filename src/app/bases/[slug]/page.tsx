import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import fs from 'fs'
import path from 'path'

interface Base {
  name: string; slug: string; country: string; countrySlug: string; state: string | null;
  stateCode: string | null; component: string | null; status: string; type: string;
  lat: number | null; lng: number | null; notes: string;
}

function loadBase(slug: string): Base | null {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'bases', `${slug}.json`)
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch { return null }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const base = loadBase(slug)
  if (!base) return { title: 'Base Not Found — WarCosts' }
  const loc = base.state ? `${base.state}` : base.country
  return {
    title: `${base.name} — Military Installation in ${loc} | WarCosts`,
    description: `${base.name} is a ${base.status.toLowerCase()} ${base.component || 'military'} installation in ${loc}. Part of the ${base.type === 'domestic' ? 'domestic' : 'overseas'} US military base network.`,
    alternates: { canonical: `https://www.warcosts.org/bases/${slug}` },
  }
}

export function generateStaticParams() {
  const index = loadData('base-index.json') as Base[]
  // Pre-render top 200 bases, rest on-demand
  return index.slice(0, 200).map(b => ({ slug: b.slug }))
}

export const dynamicParams = true

const typeLabels: Record<string, string> = {
  domestic: 'Domestic Installation',
  base: 'Overseas Base',
  'lily-pad': 'Lily Pad / Small Outpost',
  'us-funded': 'US-Funded Host Nation Base',
}

const componentDescriptions: Record<string, string> = {
  'U.S. Navy': 'The US Navy operates bases for fleet support, naval aviation, submarine operations, and power projection across the world\'s oceans.',
  'U.S. Army': 'Army installations support training, readiness, and deployment of ground forces. They include forts, camps, arsenals, and proving grounds.',
  'U.S. Air Force': 'Air Force bases house fighter wings, bomber squadrons, tanker units, and space operations. They are the backbone of US air superiority.',
  'U.S. Marine Corps': 'Marine Corps bases support amphibious operations, expeditionary warfare, and rapid-response deployment capability.',
  'Army National Guard': 'National Guard armories and training centers support the citizen-soldier force that serves both state and federal missions.',
  'Air National Guard': 'Air National Guard bases operate fighter interceptors, tankers, and airlift aircraft in support of homeland defense and overseas operations.',
}

export default async function BaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const base = loadBase(slug)
  if (!base) notFound()

  const location = base.state ? `${base.state}, United States` : base.country
  const isOverseas = base.type !== 'domestic'
  const typeLabel = typeLabels[base.type] || 'Military Installation'

  // Find nearby bases (same state or country)
  const index = loadData('base-index.json') as Base[]
  const nearby = index
    .filter(b => b.slug !== slug && (base.state ? b.state === base.state : b.country === base.country))
    .slice(0, 12)

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Bases', href: '/bases' },
        ...(isOverseas ? [{ label: base.country, href: `/bases/countries/${base.countrySlug}` }] : []),
        ...(base.state ? [{ label: base.state, href: `/bases/states/${base.stateCode?.toLowerCase()}` }] : []),
        { label: base.name },
      ]} />

      <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mt-4 mb-2">
        {base.name}
      </h1>

      <p className="text-stone-400 text-lg mb-6">
        {typeLabel} · {location}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4">
          <div className="text-xs text-stone-400 uppercase tracking-wider">Status</div>
          <div className={`text-lg font-bold ${base.status === 'Active' ? 'text-green-400' : base.status === 'Closed' ? 'text-red-400' : 'text-yellow-400'}`}>
            {base.status}
          </div>
        </div>
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4">
          <div className="text-xs text-stone-400 uppercase tracking-wider">Type</div>
          <div className="text-lg font-bold text-white">{typeLabel.split('/')[0].trim()}</div>
        </div>
        {base.component && (
          <div className="bg-stone-800 border border-stone-700 rounded-lg p-4">
            <div className="text-xs text-stone-400 uppercase tracking-wider">Branch</div>
            <div className="text-lg font-bold text-white">{base.component}</div>
          </div>
        )}
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4">
          <div className="text-xs text-stone-400 uppercase tracking-wider">Location</div>
          <div className="text-lg font-bold text-white">{isOverseas ? 'Overseas' : 'Domestic'}</div>
        </div>
      </div>

      {base.notes && (
        <div className="bg-stone-800/50 border border-stone-700 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-2">About This Installation</h2>
          <p className="text-stone-300 leading-relaxed">{base.notes}</p>
        </div>
      )}

      {base.component && componentDescriptions[base.component] && (
        <div className="prose mb-8">
          <h2 className="text-xl font-bold text-white mb-3">{base.component}</h2>
          <p className="text-stone-300 leading-relaxed">{componentDescriptions[base.component]}</p>
        </div>
      )}

      {isOverseas && (
        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-red-400 mb-2">💡 Why Does This Matter?</h2>
          <p className="text-stone-300 leading-relaxed mb-3">
            The United States maintains approximately 750 military bases in over 80 countries — more than any nation in world history.
            The annual cost of maintaining overseas bases exceeds <strong className="text-white">$55 billion</strong>.
          </p>
          <p className="text-stone-300 leading-relaxed">
            Critics argue that many overseas bases are Cold War relics that increase tensions, provoke &quot;blowback,&quot; and drain resources from domestic needs.
            Supporters say they deter aggression and protect allies. {base.name} in {base.country} is one of these installations.
          </p>
          <div className="flex gap-3 mt-4 flex-wrap">
            <Link href="/analysis/empire-of-bases" className="text-red-400 hover:text-red-300 text-sm underline">Read: Empire of Bases →</Link>
            <Link href="/opportunity-cost" className="text-red-400 hover:text-red-300 text-sm underline">What Else Could This Buy? →</Link>
          </div>
        </div>
      )}

      {base.lat && base.lng && (
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-4 mb-8">
          <h2 className="text-lg font-bold text-white mb-2">📍 Coordinates</h2>
          <p className="text-stone-300">
            {base.lat.toFixed(4)}°N, {base.lng.toFixed(4)}°E ·{' '}
            <a href={`https://www.google.com/maps?q=${base.lat},${base.lng}`} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline">
              View on Google Maps →
            </a>
          </p>
        </div>
      )}

      {nearby.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">
            Other Bases in {base.state || base.country} ({nearby.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {nearby.map(b => (
              <Link key={b.slug} href={`/bases/${b.slug}`} className="bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-lg p-3 transition-colors">
                <div className="text-white font-medium">{b.name}</div>
                <div className="text-stone-400 text-sm">{b.component || b.type} · {b.status}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-8">
        <Link href="/bases" className="text-red-400 hover:text-red-300 text-sm">← All Bases</Link>
        <Link href="/bases/directory" className="text-red-400 hover:text-red-300 text-sm">Base Directory</Link>
        {isOverseas && <Link href={`/bases/countries/${base.countrySlug}`} className="text-red-400 hover:text-red-300 text-sm">Bases in {base.country}</Link>}
        {base.state && <Link href={`/bases/states/${base.stateCode?.toLowerCase()}`} className="text-red-400 hover:text-red-300 text-sm">Bases in {base.state}</Link>}
        <Link href="/spending" className="text-red-400 hover:text-red-300 text-sm">Military Spending</Link>
        <Link href="/analysis/empire-of-bases" className="text-red-400 hover:text-red-300 text-sm">Empire of Bases Analysis</Link>
      </div>

      <ShareButtons title={`${base.name} — US Military Base`} />
      <BackToTop />
    </main>
  )
}
