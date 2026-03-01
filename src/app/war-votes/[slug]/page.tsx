import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

interface WarVote {
  name: string; slug: string; year: number; conflict: string; type: string
  houseVote: string; senateVote: string; result: string; notes?: string
  consequences?: string; context?: string; keyFigures?: string[]
}

export async function generateStaticParams() {
  const data: WarVote[] = loadData('war-votes.json')
  return data.map(v => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data: WarVote[] = loadData('war-votes.json')
  const vote = data.find(v => v.slug === slug)
  if (!vote) return { title: 'Not Found' }
  return {
    title: `${vote.name} (${vote.year}) — Congressional War Vote`,
    description: `${vote.name}: House ${vote.houseVote}, Senate ${vote.senateVote}. ${vote.notes || ''}`,
  }
}

function parseVote(voteStr: string): { yea: number; nay: number } | null {
  const m = voteStr.match(/(\d+)\s*-\s*(\d+)/)
  if (!m) return null
  return { yea: parseInt(m[1]), nay: parseInt(m[2]) }
}

export default async function WarVoteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data: WarVote[] = loadData('war-votes.json')
  const vote = data.find(v => v.slug === slug)
  if (!vote) notFound()

  const idx = data.indexOf(vote)
  const prev = idx > 0 ? data[idx - 1] : null
  const next = idx < data.length - 1 ? data[idx + 1] : null

  const house = parseVote(vote.houseVote)
  const senate = parseVote(vote.senateVote)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'War Votes', href: '/war-votes' }, { label: vote.name }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-red-400 font-bold text-lg font-[family-name:var(--font-heading)]">{vote.year}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            vote.type === 'declaration' ? 'bg-red-900 text-red-300' : 'bg-stone-700 text-stone-300'
          }`}>{vote.type}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            vote.result === 'Passed' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
          }`}>{vote.result}</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl font-bold">{vote.name}</h1>
        <p className="text-stone-400 mt-2">Conflict: {vote.conflict}</p>
      </div>

      <ShareButtons title={vote.name} />

      {/* Vote Tallies */}
      <div className="grid grid-cols-2 gap-4 my-8">
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-6">
          <h3 className="text-sm text-stone-400 mb-2">🏛️ House of Representatives</h3>
          <p className="text-3xl font-bold text-white font-[family-name:var(--font-heading)]">{vote.houseVote}</p>
          {house && (
            <div className="mt-3">
              <div className="flex gap-1 h-4 rounded-full overflow-hidden">
                <div className="bg-green-600" style={{ width: `${(house.yea / (house.yea + house.nay)) * 100}%` }} />
                <div className="bg-red-600" style={{ width: `${(house.nay / (house.yea + house.nay)) * 100}%` }} />
              </div>
              <div className="flex justify-between text-xs text-stone-400 mt-1">
                <span>Yea: {house.yea}</span>
                <span>Nay: {house.nay}</span>
              </div>
            </div>
          )}
        </div>
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-6">
          <h3 className="text-sm text-stone-400 mb-2">🏛️ Senate</h3>
          <p className="text-3xl font-bold text-white font-[family-name:var(--font-heading)]">{vote.senateVote}</p>
          {senate && (
            <div className="mt-3">
              <div className="flex gap-1 h-4 rounded-full overflow-hidden">
                <div className="bg-green-600" style={{ width: `${(senate.yea / (senate.yea + senate.nay)) * 100}%` }} />
                <div className="bg-red-600" style={{ width: `${(senate.nay / (senate.yea + senate.nay)) * 100}%` }} />
              </div>
              <div className="flex justify-between text-xs text-stone-400 mt-1">
                <span>Yea: {senate.yea}</span>
                <span>Nay: {senate.nay}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Notes */}
      {vote.notes && (
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">📝 Details</h2>
          <p className="text-stone-300 leading-relaxed">{vote.notes}</p>
        </div>
      )}

      {/* Context */}
      {vote.context && (
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">📖 Historical Context</h2>
          <p className="text-stone-300 leading-relaxed">{vote.context}</p>
        </div>
      )}

      {/* Consequences */}
      {vote.consequences && (
        <div className="bg-red-950 border border-red-900 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">⚡ Consequences</h2>
          <p className="text-stone-300 leading-relaxed">{vote.consequences}</p>
        </div>
      )}

      {/* Key Figures */}
      {vote.keyFigures && vote.keyFigures.length > 0 && (
        <div className="bg-stone-800 border border-stone-700 rounded-lg p-6 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">👤 Key Figures</h2>
          <ul className="space-y-1">
            {vote.keyFigures.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-red-400">▸</span>
                <span className="text-stone-300">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8 mb-8">
        {prev ? (
          <Link href={`/war-votes/${prev.slug}`} className="bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 hover:bg-stone-700 transition">
            <p className="text-xs text-stone-400">← Previous</p>
            <p className="font-semibold text-white text-sm">{prev.year}: {prev.name.substring(0, 40)}...</p>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/war-votes/${next.slug}`} className="bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 hover:bg-stone-700 transition text-right">
            <p className="text-xs text-stone-400">Next →</p>
            <p className="font-semibold text-white text-sm">{next.year}: {next.name.substring(0, 40)}...</p>
          </Link>
        ) : <div />}
      </div>

      <div className="text-center">
        <Link href="/war-votes" className="text-red-400 hover:text-red-300 text-sm">← Back to All War Votes</Link>
      </div>

      <BackToTop />
    </div>
  )
}
