import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Blowback Map — Interactive Map of U.S. Intervention Consequences',
  description: 'Visualize the unintended consequences of American interventions. From Iran 1953 → 1979 Revolution to Afghanistan mujahideen → Taliban → Al-Qaeda. Interactive map of blowback.',
  openGraph: {
    title: 'Blowback Map — The Consequences of U.S. Interventions',
    description: 'Interactive map showing how U.S. interventions created tomorrow\'s enemies. Iran 1953 → 1979. Afghanistan → Taliban → Al-Qaeda. Libya → ISIS. The pattern revealed.',
    url: 'https://www.warcosts.org/blowback-map',
    siteName: 'WarCosts',
    type: 'website',
  },
  alternates: { canonical: 'https://www.warcosts.org/blowback-map' },
}

export default function BlowbackMapPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Blowback Map' }]} />
      <BreadcrumbSchema items={[{ label: 'Blowback Map' }]} />
      
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">
        Blowback Map
      </h1>
      <p className="text-stone-500 text-lg mb-8">
        Interactive map of U.S. intervention consequences — how yesterday&apos;s allies became today&apos;s enemies.
      </p>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-800 mb-3">
          🗺️ Interactive Map Coming Soon
        </h2>
        <p className="text-red-700 mb-4">
          We&apos;re building an interactive world map that visualizes the connections between U.S. interventions 
          and their unintended consequences. Features will include:
        </p>
        <ul className="text-red-700 space-y-2 list-disc list-inside">
          <li>Clickable countries showing intervention history and consequences</li>
          <li>Timeline slider to see blowback develop over decades</li>
          <li>Connection lines showing cause-and-effect relationships</li>
          <li>Detailed case studies for major blowback examples</li>
          <li>Cost calculations for interventions vs. their consequences</li>
          <li>Filterable by intervention type, region, and time period</li>
        </ul>
      </div>

      {/* The Concept of Blowback */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Is Blowback?</h2>
        <div className="bg-white border rounded-lg p-6">
          <p className="text-stone-600 mb-4">
            &ldquo;Blowback&rdquo; is a CIA term for the unintended consequences of covert operations. 
            When the U.S. intervenes abroad — whether through coups, proxy wars, arms sales, or invasions — 
            it often creates new enemies, destabilizes regions, and generates long-term security threats.
          </p>
          <blockquote className="border-l-4 border-stone-300 pl-4 italic text-stone-600 mb-4">
            &ldquo;They hate us for our freedom.&rdquo; — George W. Bush<br/>
            <span className="text-sm not-italic mt-1 block">
              Reality: They hate us for our interventions.
            </span>
          </blockquote>
          <p className="text-stone-600">
            The pattern is consistent: short-term tactical gains lead to long-term strategic disasters. 
            Today&apos;s ally becomes tomorrow&apos;s enemy. The cure becomes the disease.
          </p>
        </div>
      </section>

      {/* Major Blowback Examples */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Classic Blowback Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Iran: 1953 → 1979',
              intervention: 'CIA overthrows democratically elected Mossadegh (1953)',
              blowback: 'Islamic Revolution creates anti-American theocracy (1979)',
              impact: '45+ years of hostility, proxy conflicts, now open war (2026)',
              cost: 'Trillions in military spending, thousands of lives'
            },
            {
              title: 'Afghanistan: 1979 → 2001',
              intervention: 'CIA arms mujahideen against Soviets (1979-89)',
              blowback: 'Mujahideen become Taliban, harbor Al-Qaeda',
              impact: '9/11 attacks, 20-year Afghanistan War',
              cost: '$2.4T Afghanistan War, 3,000 killed on 9/11'
            },
            {
              title: 'Iraq: 2003 → 2014',
              intervention: 'U.S. invades Iraq, dismantles government (2003)',
              blowback: 'Power vacuum creates ISIS',
              impact: 'Regional destabilization, genocide, global terrorism',
              cost: '$2.4T Iraq War, ongoing ISIS conflicts'
            },
            {
              title: 'Libya: 2011 → Present',
              intervention: 'NATO bombing campaign overthrows Gaddafi (2011)',
              blowback: 'Failed state, slave markets, arms trafficking',
              impact: 'Regional weapons proliferation, migration crisis',
              cost: 'Ongoing instability, European refugee crisis'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-lg p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-3">{item.title}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-green-700">Intervention:</span>
                  <p className="text-stone-600">{item.intervention}</p>
                </div>
                <div>
                  <span className="font-semibold text-red-700">Blowback:</span>
                  <p className="text-stone-600">{item.blowback}</p>
                </div>
                <div>
                  <span className="font-semibold text-blue-700">Impact:</span>
                  <p className="text-stone-600">{item.impact}</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Cost:</span>
                  <p className="text-stone-600">{item.cost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Pattern */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Pattern</h2>
        <div className="bg-white border rounded-lg p-6">
          <div className="grid md:grid-cols-5 gap-4 text-center">
            {[
              { step: 1, title: 'Crisis', desc: 'Real or manufactured threat appears', color: 'bg-yellow-100 text-yellow-800' },
              { step: 2, title: 'Intervention', desc: 'U.S. intervenes with "solution"', color: 'bg-blue-100 text-blue-800' },
              { step: 3, title: 'Short-term Success', desc: 'Problem appears solved', color: 'bg-green-100 text-green-800' },
              { step: 4, title: 'Unintended Consequences', desc: 'New problems emerge', color: 'bg-orange-100 text-orange-800' },
              { step: 5, title: 'Blowback', desc: 'Bigger crisis than original', color: 'bg-red-100 text-red-800' }
            ].map((step) => (
              <div key={step.step} className={`rounded-lg p-4 ${step.color}`}>
                <div className="text-2xl font-bold mb-1">{step.step}</div>
                <div className="font-semibold text-sm mb-1">{step.title}</div>
                <div className="text-xs">{step.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 text-stone-600">
              <span className="text-2xl">🔄</span>
              <span className="text-sm font-semibold">Repeat indefinitely</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Interactive Features (Coming Soon)</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: '🗺️',
              title: 'World Map View',
              desc: 'Click any country to see intervention history and consequences'
            },
            {
              icon: '⏱️',
              title: 'Timeline Slider',
              desc: 'Watch blowback develop over decades with animated timeline'
            },
            {
              icon: '🔗',
              title: 'Connection Lines',
              desc: 'Visualize cause-and-effect relationships between interventions'
            },
            {
              icon: '💰',
              title: 'Cost Calculator',
              desc: 'Compare intervention costs vs. blowback consequences'
            },
            {
              icon: '📊',
              title: 'Filter & Sort',
              desc: 'Filter by region, type, era, or severity of consequences'
            },
            {
              icon: '📚',
              title: 'Case Studies',
              desc: 'Deep dives into major blowback examples with detailed analysis'
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white border rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold mb-1">{feature.title}</h3>
              <p className="text-stone-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Analysis */}
      <section>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/blowback" className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <h3 className="font-[family-name:var(--font-heading)] font-bold mb-2">Blowback: How Interventions Create Enemies</h3>
            <p className="text-stone-600 text-sm">The CIA&apos;s term for unintended consequences of covert operations</p>
          </Link>
          <Link href="/analysis/allies-and-enemies" className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <h3 className="font-[family-name:var(--font-heading)] font-bold mb-2">Allies & Enemies</h3>
            <p className="text-stone-600 text-sm">How America arms its future wars</p>
          </Link>
          <Link href="/covert" className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <h3 className="font-[family-name:var(--font-heading)] font-bold mb-2">Covert Operations</h3>
            <p className="text-stone-600 text-sm">CIA interventions around the world</p>
          </Link>
          <Link href="/analysis/the-469" className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <h3 className="font-[family-name:var(--font-heading)] font-bold mb-2">The 469 Interventions</h3>
            <p className="text-stone-600 text-sm">Every U.S. military intervention since 1798</p>
          </Link>
        </div>
      </section>
    </div>
  )
}