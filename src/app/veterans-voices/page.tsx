import { Metadata } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import VeteransVoicesClient from './VeteransVoicesClient'

export const metadata: Metadata = {
  title: "Veterans' Voices: Real Stories from America's Wars | WarCosts",
  description: 'Curated quotes and stories from veterans of every major US conflict — from WWII to Iran 2026. Real words from those who fought, in their own voices.',
  keywords: ['veteran stories', 'war quotes', 'PTSD', 'veteran voices', 'combat memoirs', 'anti-war', 'veteran testimony', 'war literature'],
  openGraph: {
    title: "Veterans' Voices: The Words They Brought Home",
    description: '40+ real quotes from veterans of every major US conflict. The war stories America needs to hear.',
    url: 'https://warcosts.org/veterans-voices',
    type: 'article',
  },
}

interface VeteranStory {
  id: number
  name: string
  rank: string
  branch: string
  conflict: string
  year: number
  quote: string
  source: string
  context: string
}

async function getStories(): Promise<VeteranStory[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'veteran-stories.json')
    const fileContents = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error loading veteran stories:', error)
    return []
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: "Veterans' Voices: Real Stories from America's Wars",
  description: 'Curated quotes and stories from veterans of every major US conflict.',
  url: 'https://warcosts.org/veterans-voices',
  publisher: {
    '@type': 'Organization',
    name: 'WarCosts.org',
    url: 'https://warcosts.org',
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Veteran Stories Collection',
    numberOfItems: 40,
  },
}

export default async function VeteransVoicesPage() {
  const stories = await getStories()

  const conflicts = ['WWII', 'Korea', 'Vietnam', 'Gulf War', 'Afghanistan', 'Iraq', 'War on Terror', 'Iran 2026']

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-800 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Veterans' Voices" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-stone-100 mb-6">
              Veterans&rsquo; Voices
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 leading-relaxed max-w-3xl mx-auto">
              The words they brought home. Real quotes from the men and women who fought America&rsquo;s wars &mdash; 
              from the beaches of Normandy to the mountains of Iran.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-stone-400 text-sm">
              <span>{stories.length} stories</span>
              <span>·</span>
              <span>{conflicts.length} conflicts</span>
              <span>·</span>
              <span>Their words, unfiltered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-stone-50 py-16">
        <div className="container mx-auto px-4">
          <VeteransVoicesClient stories={stories} conflicts={conflicts} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-stone-900 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-playfair text-3xl font-bold text-stone-100 mb-4">
            These Are Not Statistics
          </h2>
          <p className="text-stone-300 text-lg mb-8">
            Behind every number on this site is a person &mdash; someone who served, suffered, and lived with the consequences.
            Their voices deserve to be heard.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/who-fights" className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg transition font-medium">
              Who Fights America&rsquo;s Wars
            </a>
            <a href="/casualties" className="px-6 py-3 bg-stone-700 hover:bg-stone-600 text-white rounded-lg transition font-medium">
              The Casualty Count
            </a>
          </div>
          <div className="mt-8">
            <ShareButtons title="Veterans' Voices — Real Stories from America's Wars" />
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
