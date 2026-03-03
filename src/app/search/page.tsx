import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SearchClient from './SearchClient'

export const metadata: Metadata = {
  title: 'Search Conflicts',
  description: 'Search all US wars, military interventions, and covert operations by name, country, or era.',
  alternates: { canonical: 'https://www.warcosts.org/search' },
}

export default function SearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Search' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-6">Search Conflicts</h1>
      <SearchClient />
    </div>
  )
}
