import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Did WW2 Cost? $4.1 Trillion (2024 Dollars) | WarCosts',
  description: 'World War II cost the United States $4.1 trillion in inflation-adjusted dollars — the most expensive war in American history. Full breakdown by category, year, and comparison.',
  keywords: ['WW2 cost', 'World War 2 cost', 'how much did WW2 cost', 'WWII spending', 'World War II cost adjusted for inflation'],
  openGraph: {
    title: 'How Much Did WW2 Cost? $4.1 Trillion (2024 Dollars)',
    description: 'World War II cost the United States $4.1 trillion in inflation-adjusted dollars — the most expensive war in American history.',
    url: 'https://www.warcosts.org/how-much-did-ww2-cost',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much did WW2 cost the United States?', a: 'World War II cost the United States approximately $296 billion in period dollars, equivalent to $4.1 trillion when adjusted for inflation to 2024. This makes it the most expensive conflict in American history by a significant margin.' },
  { q: 'How much did WW2 cost per day?', a: 'At its peak in 1945, the US was spending roughly $2.8 billion per day in inflation-adjusted dollars on the war effort. Over the full 1941-1945 period, average daily spending was about $2.7 billion in 2024 dollars.' },
  { q: 'What percentage of GDP did the US spend on WW2?', a: 'At its peak in 1945, the US devoted approximately 40% of GDP to the war effort — by far the highest share in American history. By comparison, the War on Terror never exceeded 4.7% of GDP.' },
  { q: 'How was WW2 paid for?', a: 'WW2 was financed through a combination of war bonds ($186 billion sold), higher taxes (top marginal rate of 94%), and borrowing. The national debt grew from $49 billion in 1941 to $259 billion by 1945.' },
  { q: 'How does WW2 cost compare to the War on Terror?', a: 'WW2 cost $4.1 trillion inflation-adjusted vs. the War on Terror\'s estimated $8 trillion total. However, WW2 was concentrated over just 4 years while the War on Terror stretched over 20+ years. WW2 consumed 40% of GDP vs. less than 5% for the War on Terror.' },
  { q: 'What was the total global cost of WW2?', a: 'The total global cost of WW2 is estimated at $4-5 trillion in period dollars, or roughly $60-70 trillion adjusted for inflation. The Soviet Union, Germany, UK, and Japan each spent hundreds of billions. Physical destruction across Europe and Asia was incalculable.' },
]

const costBreakdown = [
  { category: 'Army & Ground Forces', amount: 1640, percentage: 40, description: 'Personnel, equipment, operations for 11 million soldiers' },
  { category: 'Navy & Marine Corps', amount: 1025, percentage: 25, description: 'Pacific fleet, amphibious operations, Atlantic convoys' },
  { category: 'Army Air Forces', amount: 820, percentage: 20, description: 'Strategic bombing, air superiority, transport' },
  { category: 'Manhattan Project', amount: 33, percentage: 1, description: 'Nuclear weapons development ($2B period, ~$33B adjusted)' },
  { category: 'Lend-Lease Aid', amount: 410, percentage: 10, description: 'Military aid to USSR, UK, China, and other Allies' },
  { category: 'Other & Intelligence', amount: 172, percentage: 4, description: 'OSS, civilian defense, research, war agencies' },
]

const yearlySpending = [
  { year: 1941, amount: 182, gdpPct: 7.5, event: 'Pearl Harbor — war mobilization begins' },
  { year: 1942, amount: 614, gdpPct: 24, event: 'Full industrial conversion, Midway' },
  { year: 1943, amount: 943, gdpPct: 36, event: 'Peak production, North Africa & Italy' },
  { year: 1944, amount: 1100, gdpPct: 38, event: 'D-Day, Pacific island-hopping' },
  { year: 1945, amount: 1260, gdpPct: 40, event: 'Victory in Europe, atomic bombs, V-J Day' },
]

export default function WW2CostPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'WW2 Cost' }]} />
        <ShareButtons title="How Much Did WW2 Cost? $4.1 Trillion (2024 Dollars)" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Did World War II Cost?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$4.1 Trillion</div>
            <div className="text-lg opacity-90">Inflation-adjusted to 2024 dollars</div>
          </div>
          <div className="bg-stone-700 text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$296 Billion</div>
            <div className="text-lg opacity-90">Period dollars (1941-1945)</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            World War II remains the <strong className="text-[#dc2626]">most expensive conflict in American history</strong>. 
            Between 1941 and 1945, the United States spent $296 billion — equivalent to <strong className="text-[#dc2626]">$4.1 trillion in 2024 dollars</strong>. 
            At its peak, the war consumed <strong className="text-[#dc2626]">40% of the nation&apos;s GDP</strong>, a level of mobilization 
            never seen before or since. The entire economy was restructured around the war effort, with automobile factories 
            producing tanks and housewives building bombers.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Key Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { value: '$4.1T', label: 'Total cost (2024 $)', detail: 'Most expensive US war ever' },
              { value: '40%', label: 'Peak share of GDP', detail: '1945 — highest in US history' },
              { value: '405,399', label: 'US military deaths', detail: 'Plus 12,000+ civilian deaths' },
              { value: '$2.8B/day', label: 'Peak daily spending', detail: 'In 2024 inflation-adjusted dollars' },
            ].map((stat, i) => (
              <div key={i} className="bg-stone-800 rounded-lg p-6 border border-stone-700">
                <div className="text-2xl font-bold text-[#dc2626] mb-2">{stat.value}</div>
                <div className="text-white text-lg mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Where the Money Went</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-6">
              The $4.1 trillion was spread across every branch of the military, with ground forces taking the largest share.
              The Manhattan Project, while historically famous, represented just 1% of total war spending.
            </p>
            <div className="space-y-4">
              {costBreakdown.map((item, i) => (
                <div key={i} className="border-b border-stone-700 pb-4 last:border-b-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{item.category}</span>
                    <span className="text-[#dc2626] font-bold">${item.amount}B</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-stone-700 rounded-full h-2 flex-1 mr-4">
                      <div className="bg-[#dc2626] h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                    </div>
                    <span className="text-gray-400 text-sm">{item.percentage}%</span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Spending by Year</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-6">
              US war spending grew exponentially after Pearl Harbor, peaking in 1945 at 40% of GDP. The speed
              of mobilization was extraordinary — military spending increased <strong className="text-white">10x in just two years</strong>.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Year</th>
                    <th className="text-right py-3 text-white">Cost (2024 $)</th>
                    <th className="text-right py-3 text-white">% of GDP</th>
                    <th className="text-left py-3 text-white pl-4">Events</th>
                  </tr>
                </thead>
                <tbody>
                  {yearlySpending.map(y => (
                    <tr key={y.year} className="border-b border-stone-700">
                      <td className="py-2 text-gray-300">{y.year}</td>
                      <td className="py-2 text-right font-mono text-[#dc2626]">${y.amount}B</td>
                      <td className="py-2 text-right font-mono text-white">{y.gdpPct}%</td>
                      <td className="py-2 text-gray-400 text-sm pl-4">{y.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">How WW2 Was Financed</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-6">
              Unlike modern wars financed entirely by debt, WW2 used a three-pronged approach that asked Americans
              to directly sacrifice. This stands in stark contrast to the Iraq and Afghanistan wars, where 
              Americans were told to &ldquo;go shopping.&rdquo;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#dc2626] mb-3">War Bonds</h3>
                <p className="text-gray-300">$186 billion raised through 8 bond drives. Celebrities toured the country urging citizens to buy. 85 million Americans purchased bonds.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#dc2626] mb-3">Taxes</h3>
                <p className="text-gray-300">Top marginal tax rate raised to 94%. The number of Americans paying income tax grew from 4 million to 43 million. Corporate taxes tripled.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#dc2626] mb-3">Borrowing</h3>
                <p className="text-gray-300">National debt rose from $49B (1941) to $259B (1945). Debt-to-GDP peaked at 119% in 1946 — a level not matched until 2024.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">WW2 vs. Other US Wars</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Conflict</th>
                    <th className="text-right py-3 text-white">Cost (2024 $)</th>
                    <th className="text-right py-3 text-white">US Deaths</th>
                    <th className="text-right py-3 text-white">Peak % GDP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'World War II', cost: '$4.1T', deaths: '405,399', gdp: '40%', highlight: true },
                    { name: 'War on Terror (total)', cost: '$8.0T', deaths: '7,074', gdp: '4.7%', highlight: false },
                    { name: 'Iraq War', cost: '$2.0T', deaths: '4,599', gdp: '3.5%', highlight: false },
                    { name: 'Vietnam War', cost: '$1.0T', deaths: '58,220', gdp: '9.5%', highlight: false },
                    { name: 'Korean War', cost: '$389B', deaths: '36,574', gdp: '14.2%', highlight: false },
                    { name: 'World War I', cost: '$380B', deaths: '116,516', gdp: '16%', highlight: false },
                    { name: 'Civil War (Union)', cost: '$80B', deaths: '364,511', gdp: '11.3%', highlight: false },
                  ].map((war, i) => (
                    <tr key={i} className={`border-b border-stone-700 ${war.highlight ? 'bg-stone-700' : ''}`}>
                      <td className={`py-3 font-semibold ${war.highlight ? 'text-[#dc2626]' : 'text-white'}`}>{war.name}</td>
                      <td className={`py-3 text-right font-mono ${war.highlight ? 'text-[#dc2626]' : 'text-white'}`}>{war.cost}</td>
                      <td className="py-3 text-right text-gray-300">{war.deaths}</td>
                      <td className="py-3 text-right text-gray-300">{war.gdp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Libertarian Perspective</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              World War II is often cited as the &ldquo;good war&rdquo; — and there is a strong case that stopping Nazi Germany and 
              Imperial Japan was a legitimate defensive necessity. But the war also transformed the American government in ways 
              that never fully reversed.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The national security state born from WW2 — the CIA (1947), the Department of Defense (1947), the permanent 
              military-industrial complex Eisenhower later warned about — became the infrastructure for every questionable 
              intervention that followed. Korea, Vietnam, Iraq, and the forever wars all flowed from institutional momentum 
              created during the &ldquo;good war.&rdquo;
            </p>
            <p className="text-gray-300 leading-relaxed">
              The $4.1 trillion price tag was perhaps justifiable. What came after — <Link href="/cost-of-war" className="text-[#dc2626] hover:underline">$15+ trillion in subsequent wars</Link> — 
              was not. The lesson isn&apos;t that WW2 was wrong. It&apos;s that the permanent war footing it created 
              became the template for empire.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-stone-800 rounded-lg p-6 border border-stone-700">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <FaqJsonLd faqs={faqs} />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: '/us-military-deaths-by-war', label: 'US Military Deaths by War' },
              { href: '/cost-of-war-by-president', label: 'Cost of War by President' },
              { href: '/compare/all-wars-cost', label: 'All Wars Ranked by Cost' },
              { href: '/how-much-did-the-iraq-war-cost', label: 'How Much Did the Iraq War Cost?' },
              { href: '/how-many-wars-has-the-us-been-in', label: 'How Many Wars Has the US Been In?' },
              { href: '/us-military-budget-2026', label: '2026 Military Budget' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-stone-800 hover:bg-stone-700 rounded-lg p-4 border border-stone-700 hover:border-[#dc2626] text-gray-300 hover:text-red-500 transition-colors">
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Sources</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <ul className="text-gray-300 space-y-2">
              <li>• Congressional Research Service — &ldquo;Costs of Major U.S. Wars&rdquo; (2010)</li>
              <li>• Bureau of Labor Statistics CPI Inflation Calculator</li>
              <li>• US Treasury — Historical Debt Outstanding Reports</li>
              <li>• National WWII Museum — War Production Statistics</li>
              <li>• Office of Management and Budget — Historical Tables</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Much Did WW2 Cost? $4.1 Trillion (2024 Dollars)',
              description: 'World War II cost the United States $4.1 trillion in inflation-adjusted dollars — the most expensive war in American history.',
              url: 'https://www.warcosts.org/how-much-did-ww2-cost',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
