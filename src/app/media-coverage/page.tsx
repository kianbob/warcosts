import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'
import MediaClient from './MediaClient'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Media Coverage Tracker — The Wars America Forgot About | WarCosts',
  description: 'Iran gets 60% of cable news coverage with 3,461 killed. Yemen gets <1% with 150,000+ dead. Ethiopia: 600,000 killed, 0.1% coverage. The media decides which deaths matter.',
  keywords: ['media coverage war', 'forgotten wars', 'Yemen war coverage', 'media bias war', 'war coverage comparison', 'Iran war media', 'Ethiopia Tigray coverage', 'Syria forgotten war'],
  openGraph: {
    title: 'Media Coverage Tracker — The Wars America Forgot About',
    description: 'Iran: 60% of coverage, 3,461 killed. Ethiopia: 0.1% of coverage, 600,000 killed. The media decides which deaths matter.',
    url: 'https://warcosts.org/media-coverage',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wars America Forgot About',
    description: '600,000 dead in Ethiopia got 0.1% of US media coverage. Iran\'s 3,461 get 60%. Why?',
  },
}

export default function MediaCoveragePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Media Coverage Tracker — The Wars America Forgot About',
        description: 'How much media coverage each conflict gets relative to casualties — exposing the absurd mismatch between attention and human suffering.',
        url: 'https://warcosts.org/media-coverage',
        publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
        datePublished: '2026-03-30',
        dateModified: '2026-03-30',
        mainEntityOfPage: 'https://warcosts.org/media-coverage',
      }) }} />

      {/* Dark Hero */}
      <section className="bg-stone-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[
            
            { label: 'Analysis', href: '/analysis' },
            { label: 'Media Coverage Tracker' },
          ]} />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold mt-6 mb-4">
            The Wars America<br />
            <span className="text-red-500">Forgot About</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 max-w-3xl mb-6">
            600,000 killed in Ethiopia. 500,000 in Syria. 150,000 in Yemen. Combined media coverage: less than 2%.
            Iran&apos;s 3,461 dead get 60%. The media doesn&apos;t report wars — it chooses which deaths count.
          </p>
          <p className="text-stone-500 text-sm">
            Coverage estimates based on cable news airtime analysis, Tyndall Report data, GDELT Project media monitoring, and academic media studies.
          </p>
          <ShareButtons title="Media Coverage Tracker — The Wars America Forgot About" />
        </div>
      </section>

      <MediaClient />

      <BackToTop />
    </>
  )
}
