import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SearchClient from './SearchClient'

export const metadata: Metadata = {
  title: 'Search — Find Wars, Spending Data, Analysis & Tools | WarCosts',
  description: 'Search across 36 US conflicts, 167 country profiles, military spending data, analysis articles, interactive tools, and the complete WarCosts database.',
  alternates: { canonical: 'https://www.warcosts.org/search' },
  keywords: ['search war data', 'find military spending', 'war costs search', 'military conflict database'],
  openGraph: {
    title: 'Search WarCosts — Wars, Spending, Analysis & Tools',
    description: 'Search 36 conflicts, 167 countries, 52 weapons systems, 1,500+ bases, and decades of military spending data.',
    url: 'https://www.warcosts.org/search',
    siteName: 'WarCosts',
    type: 'website',
  },
}

export default function SearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Search' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-2">Search WarCosts</h1>
      <p className="text-stone-500 mb-6">Find conflicts, analysis, tools, country profiles, weapons, and more.</p>
      <SearchClient />
    </div>
  )
}
