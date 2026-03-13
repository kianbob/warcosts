import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Congressional War Votes — Every Major Authorization in US History',
  description: 'Every major congressional war vote from 1812 to today. House and Senate tallies, who voted how, and the consequences of each authorization.',
}

interface WarVote {
  name: string; slug: string; year: number; conflict: string; type: string
  houseVote: string; senateVote: string; result: string; notes?: string
}

export default function WarVotesPage() {
  const votes: WarVote[] = loadData('war-votes.json')

  const declarations = votes.filter(v => v.type === 'declaration')
  const authorizations = votes.filter(v => v.type !== 'declaration')

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'War Votes' }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
          Congressional War Votes
        </h1>
        <p className="text-stone-500 mt-2">
          {votes.length} major votes from 1812 to present. Congress has formally declared war only 5 times — but authorized military action many more.
        </p>
      </div>

      <ShareButtons title="Congressional War Votes — Complete History" />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{declarations.length}</p>
          <p className="text-xs text-stone-500">Formal Declarations</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{authorizations.length}</p>
          <p className="text-xs text-stone-500">Authorizations / Other</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-4 text-center border border-stone-200">
          <p className="text-2xl font-bold text-stone-900 font-[family-name:var(--font-heading)]">{votes[votes.length - 1]?.year || '—'}</p>
          <p className="text-xs text-stone-500">Most Recent</p>
        </div>
      </div>

      {/* Timeline */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-6">📜 Complete Timeline</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-700" />
        <div className="space-y-6">
          {votes.map(v => (
            <Link key={v.slug} href={`/war-votes/${v.slug}`} className="block relative pl-10 group">
              <div className="absolute left-2.5 top-3 w-3 h-3 rounded-full bg-red-600 border-2 border-stone-900 group-hover:bg-red-400 transition" />
              <div className="bg-stone-800 border border-stone-200 rounded-lg p-5 group-hover:border-red-300 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-red-700 font-bold font-[family-name:var(--font-heading)]">{v.year}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    v.type === 'declaration' ? 'bg-red-900 text-red-600' : 'bg-stone-700 text-stone-600'
                  }`}>{v.type}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    v.result === 'Passed' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-600'
                  }`}>{v.result}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{v.name}</h3>
                <div className="flex gap-6 text-sm text-stone-500">
                  <span>🏛️ House: {v.houseVote}</span>
                  <span>🏛️ Senate: {v.senateVote}</span>
                </div>
                {v.notes && <p className="text-sm text-stone-500 mt-2 line-clamp-2">{v.notes}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Context */}
      <div className="bg-stone-800 border border-stone-200 rounded-lg p-6 mt-10 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">📖 Why This Matters</h2>
        <p className="text-stone-600 leading-relaxed">
          The Constitution gives Congress the sole power to declare war. Yet the last formal declaration was in 1942. Since then, presidents have used &ldquo;authorizations for use of military force&rdquo; (AUMFs), executive orders, and creative legal interpretations to wage wars without declarations. The 2001 AUMF — just 60 words — has been used to justify military operations in at least 22 countries over two decades.
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
