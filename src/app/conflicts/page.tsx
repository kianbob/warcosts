import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ConflictsClient from './ConflictsClient'

export const metadata: Metadata = {
  title: 'All US Wars & Military Conflicts',
  description: 'Complete database of all 36 American wars, military interventions, and covert operations from 1775 to present. Filter by era, type, outcome. Costs, casualties, and outcomes.',
  openGraph: {
    title: 'All US Wars & Military Conflicts',
    description: 'Complete database of every American war, military intervention, and covert operation from 1775 to present.',
  },
}

export default function ConflictsPage() {
  const conflicts = loadData('conflicts.json')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'All Conflicts' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">All US Wars & Conflicts</h1>
      <p className="text-muted mb-6">36 conflicts spanning 248 years of American military history. Filter, sort, and explore.</p>
      <ShareButtons title="All US Wars & Military Conflicts" />

      <ConflictsClient conflicts={conflicts} />

      <BackToTop />
    </div>
  )
}
