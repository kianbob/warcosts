import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import DraftSimulatorClient from './DraftSimulatorClient'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Draft Simulator: Would You Be Called to Serve? | WarCosts',
  description: 'If the draft were reinstated today, would you be called? Enter your profile and see your likelihood based on historical draft patterns, income disparities, and current conflict needs.',
  keywords: ['military draft', 'draft simulator', 'selective service', 'Vietnam draft', 'draft lottery', 'conscription', 'draft inequality'],
  openGraph: {
    title: 'Draft Simulator: Would You Be Called?',
    description: 'If the draft came back today, what are your chances? Interactive tool based on historical draft patterns and class disparities.',
    url: 'https://warcosts.org/tools/draft-simulator',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Military Draft Simulator',
  description: 'Interactive tool calculating draft likelihood based on historical patterns and demographic factors.',
  url: 'https://warcosts.org/tools/draft-simulator',
  applicationCategory: 'EducationalApplication',
  publisher: {
    '@type': 'Organization',
    name: 'WarCosts.org',
    url: 'https://warcosts.org',
  },
}

export default function DraftSimulatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Hero */}
      <section className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-800 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }, { label: 'Draft Simulator' }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-stone-100 mb-6">
              Would You Be Drafted?
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 leading-relaxed max-w-3xl mx-auto">
              If the draft were reinstated today, would you be called to serve? 
              Enter your profile and see your likelihood &mdash; based on real historical data.
            </p>
          </div>
        </div>
      </section>

      {/* Simulator */}
      <section className="bg-stone-50 py-16">
        <div className="container mx-auto px-4">
          <DraftSimulatorClient />
        </div>
      </section>

      {/* The Draft Inequality */}
      <section className="bg-white py-16 border-t border-stone-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-stone-900 mb-8 text-center">
            The Draft Inequality
          </h2>
          <p className="text-lg text-stone-600 mb-8 text-center max-w-3xl mx-auto">
            Who actually fights America&rsquo;s wars? The answer hasn&rsquo;t changed in over a century: 
            the poor, the rural, and minorities &mdash; disproportionately.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-red-700 mb-2">3×</p>
              <p className="text-stone-700 font-medium">Working class served at 3× the rate of upper class in Vietnam</p>
              <p className="text-stone-500 text-sm mt-2">Source: Christian Appy, Working-Class War</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-red-700 mb-2">80%</p>
              <p className="text-stone-700 font-medium">Of Vietnam combat troops came from working-class or poor backgrounds</p>
              <p className="text-stone-500 text-sm mt-2">Source: Myra MacPherson, Long Time Passing</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-red-700 mb-2">0.5%</p>
              <p className="text-stone-700 font-medium">Of Americans served in the post-9/11 wars — from the same communities as always</p>
              <p className="text-stone-500 text-sm mt-2">Source: Pew Research Center</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-stone-600">
            <p>
              During Vietnam, the draft theoretically applied to everyone. In practice, college deferments 
              meant that upper-middle-class and wealthy young men could avoid service entirely. Harvard&rsquo;s 
              class of 1970 had only 2% of its graduates serve in Vietnam. Meanwhile, communities in 
              Appalachia, the rural South, and inner cities sent their sons in overwhelming numbers.
            </p>
            <p>
              The all-volunteer force, established in 1973, was supposed to fix this. Instead, it made the 
              inequality invisible. Without a draft, the military recruits from communities with few economic 
              options. Today&rsquo;s military is drawn disproportionately from rural areas, the South, and 
              lower-income families &mdash; the same communities that bore the burden during Vietnam.
            </p>
            <p>
              If the current conflict with Iran escalated to require a ground invasion, military planners 
              estimate a need for <strong>500,000+ additional troops</strong> &mdash; far exceeding what the 
              volunteer force can provide. A draft would become not a question of if, but when. And the question 
              of who serves would once again become a question of who has the resources to avoid it.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/who-fights" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg transition font-medium"
            >
              Explore Who Fights America&rsquo;s Wars →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-stone-900 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-playfair text-3xl font-bold text-stone-100 mb-4">
            War Is Not an Abstraction
          </h2>
          <p className="text-stone-300 text-lg mb-8">
            When politicians vote for war, they&rsquo;re voting to send someone else&rsquo;s children. 
            The draft simulator makes that real.
          </p>
          <ShareButtons url="https://warcosts.org/tools/draft-simulator" title="Draft Simulator — Would You Be Called?" />
        </div>
      </section>

      <BackToTop />
    </>
  )
}
