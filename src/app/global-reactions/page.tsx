import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ReactionsClient from './ReactionsClient'

export const metadata: Metadata = {
  title: 'Global Reactions Map — How the World Responded to the Iran War',
  description: 'Interactive map and tracker of global reactions to the 2026 US-Iran war. 87+ countries condemned strikes, 3 UN resolutions vetoed, 12M+ protested worldwide. See who supports, opposes, or stays neutral.',
  openGraph: {
    title: 'Global Reactions Map — The World Responds to the Iran War',
    description: '87+ countries condemned. 12M+ protested. 3 UN vetoes. Track every nation\'s response to the 2026 Iran war — support, opposition, and silence.',
    url: 'https://www.warcosts.org/global-reactions',
    siteName: 'WarCosts',
    type: 'website',
  },
  alternates: { canonical: 'https://www.warcosts.org/global-reactions' },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Reactions Map — The World Is Watching',
    description: '87+ countries condemned. 12M+ protested. 3 UN vetoes by the US. Every nation\'s response to the Iran war, mapped.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Global Reactions Map — World Response to the 2026 Iran War',
  description: 'Interactive visualization of how every country and international organization responded to the US-Iran war of 2026.',
  url: 'https://www.warcosts.org/global-reactions',
  isPartOf: { '@type': 'WebSite', name: 'WarCosts', url: 'https://www.warcosts.org' },
  about: {
    '@type': 'Thing',
    name: 'International reactions to the 2026 Iran war',
    description: 'Global diplomatic reactions, protests, UN votes, and policy positions on the US military intervention in Iran.',
  },
}

export default function GlobalReactionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-stone-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Breadcrumbs items={[{ label: 'Global Reactions' }]} dark />
          <BreadcrumbSchema items={[{ label: 'Global Reactions', href: '/global-reactions' }]} />
        </div>
        <ReactionsClient />
      </div>
    </>
  )
}
