import { loadData } from '@/lib/server-utils'
import ExplorerClient from './ExplorerClient'
import type { Metadata } from 'next'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Data Explorer — All US Conflicts',
  description: 'Interactive sortable and filterable table of every US war, intervention, and military action. Search by name, era, type, or outcome.',
  keywords: ['US wars data', 'military conflict database', 'war data explorer', 'US military history data'],
}

export default function ExplorerPage() {
  const conflicts = loadData('conflicts.json')
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] text-stone-100 mb-2">
        Data Explorer
      </h1>
      <p className="text-stone-400 mb-8 max-w-2xl">
        Every US war, intervention, and military action — sortable by cost, casualties, duration, and outcome.
      </p>
      <ShareButtons title="Data Explorer — All US Conflicts" />
      <ExplorerClient conflicts={conflicts} />
    </main>
  )
}
