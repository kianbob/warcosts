import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ConflictsClient from './ConflictsClient'

export const metadata: Metadata = {
  title: 'All US Wars & Military Conflicts',
  description: 'Complete database of all 36 American wars, military interventions, and covert operations from 1775 to present. Filter by era, type, outcome. Costs, casualties, and outcomes.',
  alternates: { canonical: 'https://www.warcosts.org/conflicts' },
  openGraph: {
    title: 'All US Wars & Military Conflicts',
    description: 'Complete database of every American war, military intervention, and covert operation from 1775 to present.',
  },
}

export default function ConflictsPage() {
  const conflicts = loadData('conflicts.json')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BreadcrumbSchema items={[{ label: 'All Conflicts' }]} />
      <Breadcrumbs items={[{ label: 'All Conflicts' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">All US Wars & Conflicts</h1>
      <p className="text-muted mb-6">36 conflicts spanning 248 years of American military history. Filter, sort, and explore.</p>
      <ShareButtons title="All US Wars & Military Conflicts" />

      <ConflictsClient conflicts={conflicts} />

      {/* Data Sources */}
      <div className="mt-12 bg-stone-50 rounded-lg p-6 border">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Data Sources</h2>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>• Congressional Research Service (CRS) — &ldquo;Instances of Use of United States Armed Forces Abroad&rdquo; (updated annually)</li>
          <li>• Department of Defense (DoD) — Defense Casualty Analysis System (DCAS)</li>
          <li>• Brown University Costs of War Project — war cost and casualty estimates</li>
          <li>• National Archives — official war declarations and authorizations</li>
          <li>• Government Accountability Office (GAO) — war cost reports</li>
          <li>• Special Inspector General for Afghanistan Reconstruction (SIGAR)</li>
          <li>• Special Inspector General for Iraq Reconstruction (SIGIR)</li>
        </ul>
      </div>

      {/* Related Analysis */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><a href="/analysis/war-on-terror" className="text-red-800 hover:underline">→ The War on Terror: $8 Trillion Later</a></li>
          <li><a href="/analysis/forever-wars" className="text-red-800 hover:underline">→ The Forever Wars</a></li>
          <li><a href="/analysis/undeclared-wars" className="text-red-800 hover:underline">→ Undeclared Wars</a></li>
          <li><a href="/analysis/what-victory-looks-like" className="text-red-800 hover:underline">→ What Victory Looks Like</a></li>
          <li><a href="/casualties" className="text-red-800 hover:underline">→ Casualty Data</a></li>
        </ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'All US Wars & Military Conflicts',
          description: 'Complete database of all 36 American wars, military interventions, and covert operations from 1775 to present.',
          url: 'https://www.warcosts.org/conflicts',
          publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
        }) }}
      />

      <BackToTop />
    </div>
  )
}
