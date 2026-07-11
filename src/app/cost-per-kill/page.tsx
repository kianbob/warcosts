// @ts-nocheck
import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { CostPerKillChart } from './CostPerKillChart'
import FaqJsonLd from '@/components/FaqJsonLd'

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
      <FaqJsonLd faqs={[
        { q: 'How much does it cost the US to kill one enemy combatant?', a: 'The cost per enemy killed has skyrocketed: $18,000 in the Civil War, $1.4 million in WWII, $4.7 million in Vietnam, $46 million in Afghanistan, and $63 million in Iraq.' },
        { q: 'Why is modern warfare so expensive per casualty?', a: 'Modern warfare costs more per kill due to expensive precision weapons, advanced technology, massive logistics chains, contractor costs, and force protection measures.' },
        { q: 'What was the most cost-efficient US war?', a: 'By cost per enemy killed, the Civil War was the most cost-efficient at roughly $18,000 per kill (inflation-adjusted). Every subsequent war has been dramatically more expensive.' },
        { q: 'How much did the Iraq War cost per enemy killed?', a: 'The Iraq War cost approximately $63 million per enemy combatant killed — the highest of any US war. The total war cost of $1.9 trillion divided by roughly 30,000 enemy killed yields this figure.' },
      ]} />
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

          {/* What the Numbers Don't Show */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-12">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-900 mb-3">What These Numbers Don&apos;t Show</h2>
            <div className="space-y-3 text-stone-700 text-sm">
              <p>
                The cost per kill metric, disturbing as it is, dramatically <em>understates</em> the true cost because it counts
                only enemy combatants killed. It excludes:
              </p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Civilian casualties:</strong> In Iraq, civilian deaths outnumber combatant deaths by at least 5:1. Include civilians and the &ldquo;cost per person killed&rdquo; drops, but the moral cost skyrockets.</li>
                <li>• <strong>Long-term costs:</strong> The table uses direct war costs. Include VA care, disability, and interest on war debt, and Afghanistan&apos;s cost per kill nearly doubles.</li>
                <li>• <strong>Indirect deaths:</strong> Brown University estimates 3.8 million indirect deaths from post-9/11 wars. Include these and the cost per death drops to thousands — making modern war not expensive per death, but devastatingly efficient at killing indirectly.</li>
                <li>• <strong>Enemy recruitment:</strong> If each kill generates 10 new enemies (a ratio commonly cited by US intelligence), then each $63M kill in Iraq also purchased $630M in future opponents.</li>
              </ul>
            </div>
          </div>

          {/* Comparison to Other Spending */}
          <div className="mt-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">$63 Million: What Else Could It Buy?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { item: '1,260 teachers', note: 'One year salary at $50K each' },
                { item: '252 homes', note: 'At median US price of $250K' },
                { item: '6,300 students', note: 'Full 4-year college scholarships' },
                { item: '1 hospital', note: 'Small community hospital' },
                { item: '63,000 people', note: 'Yearly health insurance' },
                { item: '2.1M meals', note: 'School lunch program' },
              ].map((o, i) => (
                <div key={i} className="bg-white border rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-red-700">{o.item}</div>
                  <div className="text-stone-500 text-sm mt-1">{o.note}</div>
                </div>
              ))}
            </div>
            <p className="text-stone-500 text-sm mt-4 italic">
              Each box represents what the $63 million cost of killing one Iraqi insurgent could have purchased instead.
            </p>
          </div>

          {/* The Iran War Question */}
          <div className="mt-12 bg-stone-900 text-white rounded-xl p-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Iran Question</h2>
            <div className="space-y-3 text-stone-300 text-sm">
              <p>
                The Iran War 2026 is still in its early phase, but the pattern is already visible. The initial cost
                per enemy killed ($9.5M) is relatively &ldquo;efficient&rdquo; by modern standards — because the opening
                phase relied heavily on cruise missiles and standoff weapons hitting fixed targets.
              </p>
              <p>
                If the conflict escalates to ground operations, the cost per kill will skyrocket. Afghanistan started
                with efficient aerial strikes; by 2010, counter-insurgency operations pushed costs to $46M per kill.
                Iraq followed the same pattern.
              </p>
              <p className="text-red-400 font-bold">
                The question is not how much it costs to kill one Iranian soldier. The question is whether any amount
                of money can purchase the outcome the United States claims to want. History suggests the answer is no.
              </p>
            </div>
          </div>

          {/* Related */}
          <div className="mt-12 bg-white rounded-lg p-6 border">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related</h3>
            <ul className="space-y-2">
              <li><Link href="/the-receipt" className="text-red-800 hover:underline">→ The $32 Trillion Receipt</Link></li>
              <li><Link href="/war-calendar" className="text-red-800 hover:underline">→ War Calendar — 229 years at war</Link></li>
              <li><Link href="/analysis/if-we-stopped-today" className="text-red-800 hover:underline">→ If We Stopped Today — What we&apos;d still owe</Link></li>
              <li><Link href="/cost-of-war" className="text-red-800 hover:underline">→ Cost of War — $11.3 trillion and counting</Link></li>
              <li><Link href="/iran-war-2026" className="text-red-800 hover:underline">→ Iran War 2026 — Latest data</Link></li>
              <li><Link href="/opportunity-cost" className="text-red-800 hover:underline">→ Opportunity Cost — What else could this money buy?</Link></li>
              <li><Link href="/veterans-voices" className="text-red-800 hover:underline">→ Veterans&apos; Voices — The human side</Link></li>
            </ul>
          </div>

          {/* Sources & Methodology Note */}
          <div className="mt-8 text-stone-500 text-xs border-t pt-4">
            <p>
              <strong>Sources & Methodology:</strong> Total war costs from Congressional Research Service, Brown
              University Costs of War Project, and OMB historical tables. All figures adjusted to 2026 dollars
              using BLS CPI-U. Enemy killed figures are estimates from military historians, CRS reports (RL32492),
              and Pentagon after-action assessments. &ldquo;Enemy killed&rdquo; includes only combatants, not
              civilian casualties. Civilian casualty data is tracked separately using figures from Iraq Body Count,
              Airwars, and Brown University. The cost-per-kill metric is calculated as total war cost divided by
              estimated enemy combatants killed.
            </p>
            <p className="mt-2">
              <strong>Acknowledgment:</strong> We recognize the term &ldquo;cost per kill&rdquo; is itself
              morally fraught. We use it deliberately — not to normalize violence, but to expose the
              industrial logic of modern warfare, where human lives are reduced to line items in a budget.
              The discomfort this metric provokes is the point.
            </p>
            <p className="mt-2">
              <strong>Important caveat:</strong> These figures are inherently imprecise. Enemy killed estimates
              vary widely by source, and &ldquo;total war cost&rdquo; depends on which costs are included.
              Our figures use the Brown University comprehensive methodology (including veteran care and interest),
              which produces higher cost-per-kill ratios than Pentagon-only accounting.
            </p>
          </div>
        </div>
      </section>

      {/* Share This Analysis */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-stone-50 border rounded-lg p-6 text-center">
          <p className="text-stone-600 text-sm mb-3">
            This analysis is one of the most shared pages on WarCosts. If these numbers disturbed you — good.
            That&apos;s the appropriate response. Share the data:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/share" className="px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-semibold hover:bg-red-800 transition">
              Shareable Stats →
            </Link>
            <Link href="/downloads" className="px-4 py-2 bg-stone-700 text-white rounded-lg text-sm font-semibold hover:bg-stone-800 transition">
              Download Data →
            </Link>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
