import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Total Cost of All US Wars — From the Revolution to Today | WarCosts',
  description: 'Every US war ranked by cost: from the $4.1 trillion War on Terror to the $4.1 trillion (2026$) cost of WW2. Total: over $20 trillion in inflation-adjusted dollars.',
  keywords: ['cost of all US wars', 'total cost of American wars', 'most expensive US wars', 'how much have US wars cost', 'war spending by conflict'],
  openGraph: {
    title: 'Total Cost of All US Wars — From the Revolution to Today',
    description: 'Every American war ranked by cost. Total: over $20 trillion (2026 dollars).',
    url: 'https://www.warcosts.org/compare/all-wars-cost',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much have all US wars cost in total?', a: 'In inflation-adjusted 2026 dollars, all major US wars have cost an estimated $20-22 trillion. This includes direct military spending, veterans\' care, interest on war debt, and homeland security costs. The War on Terror alone accounts for roughly $8 trillion when including long-term veterans\' costs.' },
  { q: 'What was the most expensive US war?', a: 'World War II was the most expensive single conflict at approximately $4.1 trillion in 2026 dollars. However, the post-9/11 War on Terror (Afghanistan, Iraq, Syria, and related operations) has cost an estimated $8+ trillion when including veterans\' care and interest on war debt — making it the most expensive military undertaking in US history when measured comprehensively.' },
  { q: 'How much did the War on Terror cost?', a: 'The Costs of War Project at Brown University estimates the total cost of the post-9/11 wars at $8 trillion through 2026, including: $2.3 trillion for Afghanistan/Pakistan, $1.9 trillion for Iraq/Syria, $1.1 trillion for homeland security, and $2.2 trillion for veterans\' care and interest on war borrowing.' },
]

const wars = [
  { name: 'War on Terror (2001-present)', cost: 8100, costLabel: '$8.1T', deaths: '7,074', deathsLabel: 'US military', civilianDeaths: '900,000+', note: 'Brown U. Costs of War estimate; includes veterans care & interest' },
  { name: 'World War II (1941-1945)', cost: 4100, costLabel: '$4.1T', deaths: '405,399', deathsLabel: 'US military', civilianDeaths: '50-80 million worldwide', note: 'Peak spending: 40% of GDP' },
  { name: 'Vietnam War (1955-1975)', cost: 1000, costLabel: '$1.0T', deaths: '58,220', deathsLabel: 'US military', civilianDeaths: '2-3 million Vietnamese', note: 'Includes economic disruption costs' },
  { name: 'Korean War (1950-1953)', cost: 530, costLabel: '$530B', deaths: '36,574', deathsLabel: 'US military', civilianDeaths: '2-3 million Korean', note: 'Often called "the Forgotten War"' },
  { name: 'World War I (1917-1918)', cost: 400, costLabel: '$400B', deaths: '116,516', deathsLabel: 'US military', civilianDeaths: '15-22 million worldwide', note: 'US involvement: 19 months' },
  { name: 'Cold War (1947-1991)', cost: 5500, costLabel: '$5.5T', deaths: 'N/A', deathsLabel: 'deterrence era', civilianDeaths: 'Proxy wars: millions', note: 'Nuclear buildup, proxy wars, Space Race' },
  { name: 'Civil War (1861-1865)', cost: 300, costLabel: '$300B', deaths: '620,000+', deathsLabel: 'both sides', civilianDeaths: '50,000+', note: 'Deadliest US conflict by military deaths' },
  { name: 'Gulf War (1990-1991)', cost: 116, costLabel: '$116B', deaths: '383', deathsLabel: 'US military', civilianDeaths: '20,000-35,000 Iraqi', note: 'Allied nations paid ~$54B' },
  { name: 'Revolutionary War (1775-1783)', cost: 50, costLabel: '$50B', deaths: '25,000', deathsLabel: 'US military', civilianDeaths: 'Unknown', note: 'Adjusted from ~$2.4 billion original' },
  { name: 'War of 1812 (1812-1815)', cost: 25, costLabel: '$25B', deaths: '15,000', deathsLabel: 'US military', civilianDeaths: 'Unknown', note: '' },
  { name: 'Mexican-American War (1846-1848)', cost: 30, costLabel: '$30B', deaths: '13,283', deathsLabel: 'US military', civilianDeaths: '25,000+ Mexican', note: 'Most deaths from disease' },
  { name: 'Spanish-American War (1898)', cost: 15, costLabel: '$15B', deaths: '2,446', deathsLabel: 'US military', civilianDeaths: '200,000+ Filipino (subsequent war)', note: 'Led to Philippine-American War' },
]

export default function AllWarsCostPage() {
  const totalCost = wars.reduce((sum, w) => sum + w.cost, 0)
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Compare', href: '/tools/compare-wars' }, { label: 'All Wars Cost' }]} />
        <ShareButtons title="Total Cost of All US Wars" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            Total Cost of All US Wars
          </h1>
          <div className="bg-red-900/30 text-white p-6 rounded-lg text-center mb-6 border border-red-800/50">
            <div className="text-sm opacity-70 mb-1">Estimated Total (2026 dollars)</div>
            <div className="text-5xl font-bold text-[#dc2626]">${(totalCost / 1000).toFixed(1)} Trillion</div>
            <div className="text-sm opacity-70 mt-2">From the Revolution through the War on Terror</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            From Lexington and Concord to the mountains of Afghanistan, the United States has spent over 
            <strong className="text-[#dc2626]"> $20 trillion</strong> (in 2026 dollars) waging war. The costs go far 
            beyond the battlefield — veterans&apos; care, interest on war debt, and economic disruption multiply the 
            price tag for generations. This is the full accounting that Congress never votes on.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Every War, Ranked by Cost</h2>
          <div className="space-y-4">
            {wars.sort((a, b) => b.cost - a.cost).map((war, i) => (
              <div key={i} className="bg-stone-800 rounded-lg p-6 border border-stone-700">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{war.name}</h3>
                    <div className="bg-stone-700 rounded-full h-4 mb-3">
                      <div 
                        className="bg-[#dc2626] h-4 rounded-full" 
                        style={{ width: `${Math.max((war.cost / 8100) * 100, 2)}%` }} 
                      />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Cost (2026$):</span>
                        <div className="text-white font-mono font-bold">{war.costLabel}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">US Deaths:</span>
                        <div className="text-white font-mono">{war.deaths}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Civilian Deaths:</span>
                        <div className="text-white font-mono">{war.civilianDeaths}</div>
                      </div>
                    </div>
                    {war.note && <p className="text-gray-500 text-xs mt-2">{war.note}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Hidden Costs</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The numbers above are enormous — but they&apos;re still incomplete. War costs extend far beyond 
              the Pentagon&apos;s budget:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Veterans&apos; Care</h3>
                <p className="text-gray-300 text-sm">
                  The US will spend an estimated <strong className="text-white">$2.2 trillion</strong> caring for 
                  post-9/11 veterans through 2050. After Vietnam, veterans&apos; costs peaked 40 years after the 
                  war ended. We are still paying for every American war.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Interest on War Debt</h3>
                <p className="text-gray-300 text-sm">
                  The post-9/11 wars were funded entirely by borrowing. Interest payments on that debt will total 
                  an estimated <strong className="text-white">$1.1 trillion</strong> through 2030 — money paid to 
                  bondholders instead of invested in America.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Economic Disruption</h3>
                <p className="text-gray-300 text-sm">
                  Wars divert productive capacity, spike energy prices, displace populations, and create refugee 
                  crises. The Iraq War contributed to oil prices tripling, costing the US economy hundreds of 
                  billions in lost growth.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Opportunity Cost</h3>
                <p className="text-gray-300 text-sm">
                  The $8 trillion spent on the War on Terror could have funded{' '}
                  <Link href="/analysis/what-could-we-buy" className="text-[#dc2626] hover:underline">free college for every American for 50 years</Link>, 
                  or eliminated student debt 5 times over, or rebuilt every bridge and road in the country.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Cost Per Taxpayer</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              With approximately 150 million US taxpayers, the post-9/11 wars alone have cost each taxpayer 
              roughly <strong className="text-white">$53,000</strong>. The total cost of all US wars represents 
              approximately <strong className="text-white">$140,000 per current taxpayer</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              For a family of four, the War on Terror alone has cost over <strong className="text-white">$200,000</strong> — 
              money that was borrowed in their name, will be repaid through their taxes, and was spent primarily to 
              make defense contractors wealthy while achieving none of the stated objectives.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Afghanistan fell to the Taliban 20 years and $2.3 trillion after the US invaded. Iraq is an Iranian-allied 
              failed state. Libya is a war zone. Syria is destroyed. The War on Terror created more terrorists than 
              it killed. Yet nobody in Washington has been held accountable for the most expensive strategic failure 
              in American history.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Pattern</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              Every war follows the same playbook: underestimate the cost, overestimate the threat, promise a quick 
              victory, and then escalate. The Iraq War was supposed to cost $50-60 billion and &ldquo;pay for 
              itself&rdquo; with oil revenue. The final tab: <Link href="/how-much-did-the-iraq-war-cost" className="text-[#dc2626] hover:underline">$1.9 trillion and counting</Link>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Afghanistan was supposed to be a quick strike against al-Qaeda. Twenty years and $2.3 trillion later, 
              the Taliban controls the country. Vietnam was going to be won in months. It lasted a decade and cost 
              58,220 American lives.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The Founders understood this pattern — which is why they gave Congress, not the President, the power 
              to declare war. That safeguard has been systematically circumvented since 1950. As{' '}
              <Link href="/analysis/congressional-authority" className="text-[#dc2626] hover:underline">congressional war powers</Link> have 
              eroded, the costs have skyrocketed. This is not a coincidence.
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
              { href: '/cost-of-war-by-president', label: 'Cost of War by President' },
              { href: '/us-military-deaths-by-war', label: 'US Military Deaths by War' },
              { href: '/compare/iraq-vs-afghanistan-cost', label: 'Iraq vs Afghanistan Cost' },
              { href: '/analysis/americas-wars-by-the-numbers', label: 'America\'s Wars by the Numbers' },
              { href: '/analysis/what-could-we-buy', label: 'What Could We Buy Instead?' },
              { href: '/cost-of-war', label: 'Cost of War Dashboard' },
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
              <li>• Costs of War Project, Watson Institute, Brown University (2024)</li>
              <li>• Congressional Research Service — Costs of Major US Wars (2021)</li>
              <li>• Department of Veterans Affairs — Budget Projections</li>
              <li>• Congressional Budget Office — Long-Term Costs of Operations in Afghanistan and Iraq</li>
              <li>• National Priorities Project — Cost of War to the United States</li>
              <li>• Stephen Daggett, CRS — &ldquo;Costs of Major U.S. Wars&rdquo; (2010)</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Total Cost of All US Wars — From the Revolution to Today',
              description: 'Every US war ranked by cost. Total: over $20 trillion in inflation-adjusted 2026 dollars.',
              url: 'https://www.warcosts.org/compare/all-wars-cost',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
