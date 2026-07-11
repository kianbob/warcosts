import { Metadata } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import VeteransVoicesClient from './VeteransVoicesClient'
import FaqJsonLd from '@/components/FaqJsonLd'

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

      {/* Context: The Numbers Behind the Voices */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold text-stone-900 mb-6">The Numbers Behind the Voices</h2>
          <p className="text-stone-600 mb-8 text-lg">
            These stories represent a fraction of the millions who have served. Here is the scale of what America
            has asked of its citizens:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { stat: '41 Million', label: 'Americans who served in wartime', note: 'Since 1917' },
              { stat: '1.1 Million', label: 'Killed in action', note: 'All US wars' },
              { stat: '1.5 Million', label: 'Wounded in action', note: 'Documented' },
              { stat: '18 Million', label: 'Living veterans today', note: 'VA enrolled' },
            ].map((s, i) => (
              <div key={i} className="bg-stone-50 border rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-red-700 font-playfair">{s.stat}</div>
                <div className="text-sm text-stone-600 mt-1">{s.label}</div>
                <div className="text-xs text-stone-400 mt-1">{s.note}</div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-amber-900 mb-2">⚠️ If You or Someone You Know Is in Crisis</h3>
            <p className="text-stone-700 text-sm">
              <strong>Veterans Crisis Line:</strong> Call <strong>988</strong> (then press 1), text 838255, or chat at
              <a href="https://www.veteranscrisisline.net/" className="text-red-700 hover:underline ml-1" target="_blank" rel="noopener noreferrer">VeteransCrisisLine.net</a>.
              You are not alone. Help is available 24/7.
            </p>
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              The veteran experience doesn&apos;t end when the uniform comes off. <strong>17 veterans die by suicide every day</strong> —
              more than all combat deaths in the War on Terror combined, every single year. An estimated
              <strong> 11-20% of post-9/11 veterans</strong> suffer from PTSD. Over <strong>37,000 veterans</strong> are
              homeless on any given night.
            </p>
            <p>
              These quotes come from memoirs, interviews, congressional testimony, oral histories, and published accounts.
              They span 80+ years of American warfare — from soldiers who stormed Normandy to those who flew drones
              over Afghanistan to those who served in Iran in 2026. The weapons change. The wars change.
              What soldiers feel doesn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* The Cost of Silence */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold text-stone-900 mb-6">The Cost of Silence</h2>
          <div className="space-y-4 text-stone-700">
            <p>
              For decades, veterans were expected to come home and be silent about what they experienced.
              &ldquo;Suck it up.&rdquo; &ldquo;Be a man.&rdquo; &ldquo;Don&apos;t talk about it.&rdquo;
              The result has been catastrophic:
            </p>
            <div className="grid md:grid-cols-3 gap-4 my-6">
              {[
                { stat: '17/day', label: 'Veteran suicides', detail: 'More than all combat deaths annually' },
                { stat: '37,000', label: 'Homeless veterans', detail: 'On any given night in America' },
                { stat: '1 in 3', label: 'Vietnam vets with PTSD', detail: 'Lifetime prevalence rate' },
              ].map((s, i) => (
                <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-red-700 font-playfair">{s.stat}</div>
                  <div className="text-sm text-stone-600 mt-1">{s.label}</div>
                  <div className="text-xs text-stone-400 mt-1">{s.detail}</div>
                </div>
              ))}
            </div>
            <p>
              These quotes break the silence. They show what war actually does to the people who fight it —
              not the sanitized version from Pentagon briefings or Hollywood movies, but the real, raw,
              uncomfortable truth. Listening to veterans is the minimum we owe them.
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="bg-stone-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold text-stone-900 mb-6">Essential Veteran Literature</h2>
          <p className="text-stone-600 mb-6">
            If these quotes moved you, the full works will change how you see war forever:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'The Things They Carried', author: 'Tim O\'Brien', conflict: 'Vietnam', note: 'The definitive literary account of Vietnam. Fiction that tells more truth than any history book.' },
              { title: 'Redeployment', author: 'Phil Klay', conflict: 'Iraq', note: 'National Book Award winner. Short stories from Iraq veterans — raw, honest, unforgettable.' },
              { title: 'War Is a Racket', author: 'Smedley Butler', conflict: 'Multiple', note: 'Written by the most decorated Marine in history. Two-time Medal of Honor recipient turned anti-war advocate.' },
              { title: 'Matterhorn', author: 'Karl Marlantes', conflict: 'Vietnam', note: '30 years in the writing. A novel about a Marine company in Vietnam that defines the modern war novel.' },
              { title: 'What It Is Like to Go to War', author: 'Karl Marlantes', conflict: 'Vietnam', note: 'Non-fiction companion to Matterhorn. A veteran\'s attempt to make sense of combat experience.' },
              { title: 'Thank You for Your Service', author: 'David Finkel', conflict: 'Iraq', note: 'Following soldiers home from Iraq. The war after the war — PTSD, broken families, the VA.' },
            ].map((book, i) => (
              <div key={i} className="bg-white border rounded-xl p-5">
                <h3 className="font-bold text-stone-900">{book.title}</h3>
                <p className="text-stone-500 text-sm">{book.author} • {book.conflict}</p>
                <p className="text-stone-600 text-sm mt-2">{book.note}</p>
              </div>
            ))}
          </div>
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
            Their voices deserve to be heard. The least we can do is listen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/who-fights" className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg transition font-medium">
              Who Fights America&rsquo;s Wars
            </Link>
            <Link href="/casualties" className="px-6 py-3 bg-stone-700 hover:bg-stone-600 text-white rounded-lg transition font-medium">
              The Casualty Count
            </Link>
            <Link href="/cost-of-war" className="px-6 py-3 bg-stone-700 hover:bg-stone-600 text-white rounded-lg transition font-medium">
              Cost of War
            </Link>
          </div>
          <div className="mt-8">
            <ShareButtons title="Veterans' Voices — Real Stories from America's Wars" />
          </div>

          {/* Related Links */}
          <div className="mt-8 text-left bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="font-bold text-white mb-3">Related Pages</h3>
            <ul className="space-y-2 text-stone-300 text-sm">
              <li><Link href="/analysis/aftermath" className="text-red-400 hover:underline">→ Aftermath — The human cost of war beyond the battlefield</Link></li>
              <li><Link href="/analysis/if-we-stopped-today" className="text-red-400 hover:underline">→ If We Stopped Today — The costs that keep coming</Link></li>
              <li><Link href="/iran-war-2026" className="text-red-400 hover:underline">→ Iran War 2026 — The latest conflict</Link></li>
              <li><Link href="/share" className="text-red-400 hover:underline">→ Share — Shareable stat cards</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conflict-by-Conflict Context */}
      <section className="bg-stone-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-playfair text-2xl font-bold text-stone-900 mb-4">Understanding Each Era</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { era: 'WWII (1941–45)', note: 'The "Good War" — but even the just war left deep scars. 405,000 Americans killed. An entire generation marked by combat trauma before PTSD had a name.' },
              { era: 'Korea (1950–53)', note: 'The "Forgotten War." 36,000 Americans killed. Veterans came home to no parades, no GI Bill equivalent for many, and no public recognition.' },
              { era: 'Vietnam (1955–75)', note: '58,000 killed. Veterans returned to hostility, not gratitude. Decades of denied Agent Orange claims. The war that broke America\'s trust in its government.' },
              { era: 'Gulf War (1990–91)', note: 'Quick victory, but Gulf War Syndrome affected 250,000+ veterans. DoD denied the condition for years.' },
              { era: 'Afghanistan/Iraq (2001–2021)', note: '7,000+ killed. Millions deployed. PTSD, TBI, and burn pit exposure define this generation\'s wounds.' },
              { era: 'Iran 2026', note: 'The newest chapter. Stories are still being written. 15 US KIA in 108 days. The long-term impact on veterans is yet to come.' },
            ].map((e, i) => (
              <div key={i} className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-stone-900 mb-1">{e.era}</h3>
                <p className="text-stone-600 text-sm">{e.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Help */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-playfair text-2xl font-bold text-stone-900 mb-4">How You Can Help</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-stone-50 border rounded-lg p-5">
              <h3 className="font-bold text-stone-900 mb-2">📞 Veterans Crisis Line</h3>
              <p className="text-stone-600 text-sm">Call 988 (press 1), text 838255, or chat online. Available 24/7 for veterans in crisis.</p>
            </div>
            <div className="bg-stone-50 border rounded-lg p-5">
              <h3 className="font-bold text-stone-900 mb-2">🤝 Volunteer</h3>
              <p className="text-stone-600 text-sm">Organizations like Team Red White & Blue, The Mission Continues, and local VA hospitals welcome volunteers.</p>
            </div>
            <div className="bg-stone-50 border rounded-lg p-5">
              <h3 className="font-bold text-stone-900 mb-2">📣 Share</h3>
              <p className="text-stone-600 text-sm">Share these stories. The most powerful thing you can do is listen — and make sure others listen too.</p>
            </div>
          </div>
        </div>
      </section>

      <FaqJsonLd faqs={[
        { q: 'What is the Veterans\' Voices collection?', a: 'Veterans\' Voices is a curated collection of 40+ real quotes from American veterans spanning every major conflict from WWII to the Iran War 2026. Each quote includes the veteran\'s name, rank, branch, conflict, and source citation.' },
        { q: 'How many veterans die by suicide each day?', a: 'According to the VA National Suicide Data Report, approximately 17 veterans die by suicide every day in the United States. This exceeds all post-9/11 combat deaths combined on an annual basis.' },
        { q: 'What percentage of veterans suffer from PTSD?', a: 'An estimated 11-20% of post-9/11 veterans suffer from PTSD, according to the VA. For Vietnam veterans, the lifetime prevalence is estimated at about 30%. Actual rates may be higher due to underreporting and stigma.' },
        { q: 'How many Americans have served in wartime?', a: 'Over 41 million Americans have served in wartime since 1917. Approximately 18 million veterans are alive today, and over 1.1 million have been killed in action across all US wars.' },
      ]} />

      <BackToTop />
    </>
  )
}
