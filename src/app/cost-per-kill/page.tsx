// @ts-nocheck
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { CostPerKillChart } from './CostPerKillChart'

export const metadata: Metadata = {
  title: 'Cost Per Kill — The Price of a Life in Every US War | WarCosts',
  description: 'How much does it cost the US to kill one enemy combatant? From $18K in the Civil War to $63M in Iraq. Technology makes war more expensive per kill, not less.',
  keywords: ['cost per kill', 'war efficiency', 'military spending per casualty', 'cost per enemy killed', 'war economics'],
  openGraph: {
    title: 'The Price of a Life: Cost Per Enemy Killed in Every US War',
    description: 'Civil War: $18K per kill. Iraq: $63M per kill. The "efficiency paradox" of modern warfare.',
    url: 'https://warcosts.org/cost-per-kill',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cost Per Kill — $18K in 1865. $63M in 2011.',
    description: 'Technology makes war more expensive per kill, not less. The data.',
  },
}

const wars = [
  { war: 'Revolutionary War', years: '1775–1783', totalCost: '$2.4B', enemyKilled: '10,000', costPerKill: '$240,000', costNum: 240000 },
  { war: 'Civil War', years: '1861–1865', totalCost: '$5.2B', enemyKilled: '290,000', costPerKill: '$18,000', costNum: 18000 },
  { war: 'World War I', years: '1917–1918', totalCost: '$5.5T', enemyKilled: '2,000,000', costPerKill: '$2.75M', costNum: 2750000 },
  { war: 'World War II', years: '1941–1945', totalCost: '$6.2T', enemyKilled: '4,500,000', costPerKill: '$1.4M', costNum: 1400000 },
  { war: 'Korean War', years: '1950–1953', totalCost: '$4.1T', enemyKilled: '600,000', costPerKill: '$6.8M', costNum: 6800000 },
  { war: 'Vietnam War', years: '1955–1975', totalCost: '$5.2T', enemyKilled: '1,100,000', costPerKill: '$4.7M', costNum: 4700000 },
  { war: 'Gulf War', years: '1990–1991', totalCost: '$250B', enemyKilled: '25,000', costPerKill: '$10M', costNum: 10000000 },
  { war: 'Afghanistan', years: '2001–2021', totalCost: '$2.3T', enemyKilled: '50,000', costPerKill: '$46M', costNum: 46000000 },
  { war: 'Iraq War', years: '2003–2011', totalCost: '$1.9T', enemyKilled: '30,000', costPerKill: '$63M', costNum: 63000000 },
  { war: 'Iran 2026', years: '2026–', totalCost: '$18B+', enemyKilled: '~1,900', costPerKill: '$9.5M', costNum: 9500000 },
]

export default function CostPerKillPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[{ label: 'Cost Per Kill' }]} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The Price of a Life: Cost Per Enemy Killed in Every US War',
        description: 'How much does it cost the US to kill one enemy combatant? From $18K in the Civil War to $63M in Iraq.',
        url: 'https://www.warcosts.org/cost-per-kill',
        datePublished: '2026-03-30',
        dateModified: '2026-03-30',
        publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
      }) }} />

      {/* Hero */}
      <section className="bg-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Cost Per Kill' }]} dark />
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
            The Price of a Life
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            Cost per enemy killed in every major US war — adjusted to 2026 dollars.
            Technology makes war more expensive per kill, not less.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-stone-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ShareButtons title="Cost Per Kill — The Price of a Life in Every US War" />

          <p className="text-stone-600 my-6 text-lg">
            This is the metric no one wants to discuss. How much money does the United States spend to kill
            a single enemy combatant? The answer reveals a disturbing paradox: as military technology advances,
            the cost per kill doesn&apos;t decrease — it <strong>skyrockets</strong>.
          </p>

          {/* Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-red-800">
                  <th className="py-3 pr-4 font-[family-name:var(--font-heading)] text-stone-900">War</th>
                  <th className="py-3 pr-4 text-stone-500 text-sm">Years</th>
                  <th className="py-3 pr-4 text-stone-500 text-sm">Total Cost (2026$)</th>
                  <th className="py-3 pr-4 text-stone-500 text-sm">Enemy KIA</th>
                  <th className="py-3 pr-4 text-stone-500 text-sm font-bold text-red-800">Cost Per Kill</th>
                </tr>
              </thead>
              <tbody>
                {wars.map((w, i) => (
                  <tr key={w.war} className={`border-b border-stone-200 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
                    <td className="py-3 pr-4 font-semibold text-stone-900">{w.war}</td>
                    <td className="py-3 pr-4 text-stone-500 text-sm">{w.years}</td>
                    <td className="py-3 pr-4 text-stone-700">{w.totalCost}</td>
                    <td className="py-3 pr-4 text-stone-700">{w.enemyKilled}</td>
                    <td className="py-3 pr-4 font-bold text-red-800 text-lg">{w.costPerKill}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-400 text-sm italic mb-8">
            All costs inflation-adjusted to 2026 dollars. Enemy killed figures are estimates from military historians,
            CRS, and Pentagon after-action reports. &ldquo;Enemy killed&rdquo; includes only combatants, not civilian casualties.
          </p>

          {/* Chart */}
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mt-12 mb-4">
            Visualized: The Exponential Rise
          </h2>
          <CostPerKillChart data={wars.map(w => ({ war: w.war, costPerKill: w.costNum }))} />

          {/* The Efficiency Paradox */}
          <div className="prose max-w-none mt-12 text-stone-600">
            <h2 className="font-[family-name:var(--font-heading)] text-stone-900">The Efficiency Paradox</h2>
            <p>
              Conventional wisdom suggests that technological advancement should make warfare more
              &ldquo;efficient&rdquo; — fewer resources to achieve objectives. The data tells the opposite story.
            </p>
            <p>
              In the Civil War, killing one Confederate soldier cost the Union roughly <strong>$18,000</strong> in
              today&apos;s dollars. A musket, some ammunition, a uniform, food. Simple. Brutal. Cheap.
            </p>
            <p>
              By Iraq, killing one insurgent cost <strong>$63 million</strong>. That single kill required
              satellite surveillance, drone operations, intelligence analysts, encrypted communications, armored
              vehicles, precision-guided munitions, medevac helicopters, base infrastructure, contractor support,
              and a vast logistics chain stretching across oceans.
            </p>
            <p>
              The cost per kill increased by a factor of <strong>3,500x</strong> from the Civil War to Iraq.
              This isn&apos;t efficiency. This is a system optimized not for winning wars, but for spending money.
            </p>

            <h2 className="font-[family-name:var(--font-heading)] text-stone-900">Why It Gets More Expensive</h2>
            <ul>
              <li><strong>Force protection:</strong> Modern militaries spend enormous sums keeping their own soldiers alive — armor, medevac, MRAP vehicles. Each American life saved costs millions in infrastructure.</li>
              <li><strong>Precision weapons:</strong> A JDAM costs $25,000. A Tomahawk cruise missile costs $2 million. Precision is expensive.</li>
              <li><strong>Intelligence overhead:</strong> Before pulling a trigger, the modern military conducts satellite passes, drone surveillance, signals intelligence, human intelligence, and legal review.</li>
              <li><strong>Contractor bloat:</strong> In Afghanistan, there were more private contractors than uniformed military. They cost 2-5x more than soldiers.</li>
              <li><strong>Asymmetric enemies:</strong> Fighting insurgents with a $800B/year military is like using a fire hose to kill a mosquito.</li>
            </ul>

            <h2 className="font-[family-name:var(--font-heading)] text-stone-900">The Ethical Question</h2>
            <p>
              We present this data not to suggest war should be made &ldquo;cheaper&rdquo; or more &ldquo;efficient.&rdquo;
              The cost per kill is obscene precisely because <strong>killing is obscene</strong>. Every number in the
              table above represents a human being — someone&apos;s child, parent, sibling.
            </p>
            <p>
              The question this data raises isn&apos;t &ldquo;how do we kill more cheaply?&rdquo; It&apos;s:
              <strong> if it costs $63 million to kill one person, and the war creates ten new enemies for every
              one killed, what exactly are we buying?</strong>
            </p>
            <p>
              The Iraq War cost $1.9 trillion and killed an estimated 30,000 insurgents. It also created ISIS,
              destabilized the entire region, displaced 9 million people, and killed hundreds of thousands of
              civilians. By any cost-benefit analysis — even a coldly militaristic one — it was a catastrophic
              investment.
            </p>

            <blockquote className="border-l-4 border-red-800">
              &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final
              sense, a theft from those who hunger and are not fed, those who are cold and are not clothed.&rdquo;
              <br />— Dwight D. Eisenhower, 1953
            </blockquote>
          </div>

          {/* Related */}
          <div className="mt-12 bg-white rounded-lg p-6 border">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related</h3>
            <ul className="space-y-2">
              <li><a href="/the-receipt" className="text-red-800 hover:underline">→ The $32 Trillion Receipt</a></li>
              <li><a href="/war-calendar" className="text-red-800 hover:underline">→ War Calendar — 229 years at war</a></li>
              <li><a href="/analysis/if-we-stopped-today" className="text-red-800 hover:underline">→ If We Stopped Today — What we&apos;d still owe</a></li>
              <li><a href="/cost-of-war" className="text-red-800 hover:underline">→ Cost of War — $11.3 trillion and counting</a></li>
            </ul>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
