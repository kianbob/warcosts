import type { Metadata } from 'next'
import DestructionClient from './DestructionClient'

export const metadata: Metadata = {
  title: 'Iran Infrastructure Destruction Tracker — Before & After',
  description: 'Documenting what has been destroyed in Iran during the 2026 US-Iran war. Before and after accounts of strikes on steel plants, nuclear facilities, schools, ports, and civilian infrastructure.',
  keywords: ['Iran war destruction', 'Iran infrastructure strikes', 'Iran before after', 'Iran civilian casualties', 'US Iran war damage'],
  openGraph: {
    title: 'Iran Infrastructure Destruction Tracker',
    description: 'Before & After: Documenting the destruction of Iranian infrastructure in the 2026 war.',
    type: 'article',
  },
}

export default function IranDestructionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Iran Infrastructure Destruction Tracker — Before & After',
    description: 'Documenting strikes on Iranian infrastructure during the 2026 US-Iran war.',
    datePublished: '2026-03-29',
    dateModified: '2026-03-29',
    author: { '@type': 'Organization', name: 'WarCosts.org' },
    publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-6xl mx-auto px-4 py-8 bg-stone-900 min-h-screen">
        {/* Breadcrumbs */}
        <nav className="text-sm text-stone-400 mb-6">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="mx-2">›</span>
          <a href="/iran" className="hover:text-white transition-colors">Iran War</a>
          <span className="mx-2">›</span>
          <span className="text-stone-300">Infrastructure Destruction</span>
        </nav>

        <DestructionClient />
      </main>
    </>
  )
}
