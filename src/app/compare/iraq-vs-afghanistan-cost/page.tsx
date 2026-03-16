import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Iraq vs Afghanistan War Cost — Complete Comparison | WarCosts',
  description: 'Iraq War ($2.0T) vs Afghanistan War ($2.3T): side-by-side comparison of costs, duration, casualties, troop levels, and outcomes of America\'s two longest wars.',
  keywords: ['Iraq vs Afghanistan cost', 'Iraq war vs Afghanistan war', 'compare Iraq Afghanistan', 'War on Terror cost comparison'],
  openGraph: {
    title: 'Iraq vs Afghanistan War Cost — Complete Comparison',
    description: 'Iraq War ($2.0T) vs Afghanistan War ($2.3T): side-by-side comparison.',
    url: 'https://www.warcosts.org/compare/iraq-vs-afghanistan-cost',
    type: 'article',
  },
}

const faqs = [
  { q: 'Which war was more expensive, Iraq or Afghanistan?', a: 'Afghanistan was more expensive overall at $2.3 trillion vs Iraq\'s $2.0 trillion, largely due to its 20-year duration. However, Iraq was far more expensive per year — approximately $250 billion/year at peak vs. Afghanistan\'s $115 billion/year.' },
  { q: 'How many Americans died in Iraq vs Afghanistan?', a: 'Iraq: 4,599 US military deaths over 8 years (575/year). Afghanistan: 2,461 deaths over 20 years (123/year). Iraq was nearly 5x deadlier per year of involvement.' },
  { q: 'What was the outcome of each war?', a: 'Both wars ended in strategic failure. Iraq collapsed into sectarian chaos, birthing ISIS. Afghanistan fell back to Taliban control within weeks of US withdrawal in 2021, after 20 years and $2.3 trillion spent. Neither achieved lasting strategic objectives.' },
]

const comparison = [
  { metric: 'Total Cost', iraq: '$2.0 Trillion', afghanistan: '$2.3 Trillion' },
  { metric: 'Duration', iraq: '8 years (2003-2011)', afghanistan: '20 years (2001-2021)' },
  { metric: 'US Deaths', iraq: '4,599', afghanistan: '2,461' },
  { metric: 'US Wounded', iraq: '32,226', afghanistan: '20,752' },
  { metric: 'Peak Troops', iraq: '170,000 (2007)', afghanistan: '100,000 (2011)' },
  { metric: 'Contractors Deployed', iraq: '180,000+', afghanistan: '117,000+' },
  { metric: 'Civilian Deaths (est.)', iraq: '200,000-300,000', afghanistan: '70,000-80,000' },
  { metric: 'Cost/Day (peak)', iraq: '$720M', afghanistan: '$315M' },
  { metric: 'Reconstruction Spending', iraq: '$60B', afghanistan: '$145B' },
  { metric: 'Congressional Authorization', iraq: '2002 AUMF', afghanistan: '2001 AUMF' },
  { metric: 'Initial Justification', iraq: 'WMDs (false)', afghanistan: '9/11 response' },
  { metric: 'Outcome', iraq: 'Sectarian chaos → ISIS', afghanistan: 'Taliban retook power' },
]

export default function IraqVsAfghanistanPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Compare', href: '/tools/compare-wars' }, { label: 'Iraq vs Afghanistan' }]} />
        <ShareButtons title="Iraq vs Afghanistan War Cost" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            Iraq vs Afghanistan: War Cost Comparison
          </h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-orange-900/40 text-white p-6 rounded-lg text-center">
              <div className="text-sm opacity-70 mb-1">Iraq War</div>
              <div className="text-3xl font-bold">$2.0T</div>
              <div className="text-sm opacity-70">8 years • 4,599 dead</div>
            </div>
            <div className="bg-amber-900/40 text-white p-6 rounded-lg text-center">
              <div className="text-sm opacity-70 mb-1">Afghanistan War</div>
              <div className="text-3xl font-bold">$2.3T</div>
              <div className="text-sm opacity-70">20 years • 2,461 dead</div>
            </div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Together, Iraq and Afghanistan cost America <strong className="text-[#dc2626]">$4.3 trillion and 7,060 lives</strong> — 
            the two pillars of the War on Terror. One was a war of choice based on lies. The other began as 
            a legitimate response to 9/11 and became the longest war in American history. Both ended in failure.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Side-by-Side</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="text-left py-3 text-white">Metric</th>
                  <th className="text-right py-3 text-orange-400">🇮🇶 Iraq</th>
                  <th className="text-right py-3 text-amber-400">🇦🇫 Afghanistan</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-stone-700">
                    <td className="py-3 text-gray-300 text-sm">{row.metric}</td>
                    <td className="py-3 text-right text-white text-sm">{row.iraq}</td>
                    <td className="py-3 text-right text-white text-sm">{row.afghanistan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Spending Over Time</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            {[
              { year: '2001-02', iraq: 0, afghan: 38, event: 'Initial invasion of Afghanistan' },
              { year: '2003-04', iraq: 120, afghan: 45, event: 'Iraq invasion begins' },
              { year: '2005-06', iraq: 180, afghan: 55, event: 'Iraq insurgency explodes' },
              { year: '2007-08', iraq: 250, afghan: 70, event: 'Iraq surge, Afghan buildup' },
              { year: '2009-10', iraq: 140, afghan: 100, event: 'Obama Afghanistan surge' },
              { year: '2011-12', iraq: 45, afghan: 115, event: 'Iraq withdrawal, Afghan peak' },
              { year: '2013-16', iraq: 10, afghan: 65, event: 'Afghan drawdown, ISIS emerges' },
              { year: '2017-20', iraq: 5, afghan: 45, event: 'Minimal presence' },
              { year: '2021', iraq: 0, afghan: 15, event: 'Chaotic Afghanistan withdrawal' },
            ].map((y, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-semibold">{y.year}</span>
                  <span className="text-gray-400">{y.event}</span>
                </div>
                <div className="flex gap-1">
                  <div className="flex items-center gap-1 flex-1">
                    <span className="text-orange-400 text-xs w-12">Iraq</span>
                    <div className="bg-stone-700 rounded h-2 flex-1">
                      <div className="bg-orange-500 h-2 rounded" style={{ width: `${(y.iraq / 250) * 100}%` }} />
                    </div>
                    <span className="text-xs text-gray-400 w-12 text-right">{y.iraq > 0 ? `$${y.iraq}B` : '—'}</span>
                  </div>
                  <div className="flex items-center gap-1 flex-1">
                    <span className="text-amber-400 text-xs w-12">Afgh</span>
                    <div className="bg-stone-700 rounded h-2 flex-1">
                      <div className="bg-amber-500 h-2 rounded" style={{ width: `${(y.afghan / 250) * 100}%` }} />
                    </div>
                    <span className="text-xs text-gray-400 w-12 text-right">${y.afghan}B</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Two Failures, Different Lessons</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-3">Iraq: The War of Choice</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Iraq was the <Link href="/analysis/lies-that-started-wars" className="text-[#dc2626] hover:underline">purest example of a manufactured war</Link> in 
                  modern American history. The WMD claims were false. The connection to 9/11 was nonexistent. 
                  The war created the very terrorism it claimed to prevent, birthing ISIS from the chaos of 
                  sectarian civil war. $2 trillion spent, 4,599 Americans and 200,000+ Iraqis dead, for nothing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-3">Afghanistan: The Forever War</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Afghanistan began with genuine purpose after 9/11 — but the mission crept from capturing bin Laden 
                  to &ldquo;nation building&rdquo; in a country that had defeated every invader for centuries. Twenty years, 
                  $2.3 trillion, and $145 billion in reconstruction later, the Taliban reconquered the country 
                  in 11 days. The <Link href="/afghanistan-war" className="text-[#dc2626] hover:underline">Afghan papers</Link> revealed 
                  officials knew the war was unwinnable for years.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Combined Cost: $4.3 Trillion</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The combined $4.3 trillion cost of Iraq and Afghanistan could have:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Eliminated all US student loan debt ($1.7T) — twice',
                'Funded universal pre-K for 100+ years',
                'Built 21 million affordable housing units',
                'Doubled NASA\'s budget for 85 years',
                'Provided clean water to every person on Earth',
                'Funded Medicare for All for 4+ years',
              ].map((item, i) => (
                <div key={i} className="bg-stone-700 rounded p-3">
                  <p className="text-gray-300 text-sm">• {item}</p>
                </div>
              ))}
            </div>
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
              { href: '/how-much-did-the-iraq-war-cost', label: 'Iraq War Cost' },
              { href: '/how-much-did-the-afghanistan-war-cost', label: 'Afghanistan War Cost' },
              { href: '/cost-of-war-on-terror', label: 'Total War on Terror Cost' },
              { href: '/compare/all-wars-cost', label: 'All Wars Ranked by Cost' },
              { href: '/us-military-deaths-by-war', label: 'US Deaths by War' },
              { href: '/analysis/forever-wars', label: 'The Forever Wars' },
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
              <li>• Brown University Costs of War Project</li>
              <li>• Congressional Research Service — War Costs Reports</li>
              <li>• SIGAR — Quarterly Reports to Congress</li>
              <li>• SIGIR — Iraq Reconstruction Lessons Learned</li>
              <li>• Defense Casualty Analysis System (DCAS)</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Iraq vs Afghanistan War Cost — Complete Comparison',
              description: 'Iraq War ($2.0T) vs Afghanistan War ($2.3T): side-by-side comparison.',
              url: 'https://www.warcosts.org/compare/iraq-vs-afghanistan-cost',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
