import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US vs China Military Spending — Side-by-Side Comparison | WarCosts',
  description: 'Compare US and China military spending: $895B vs $296B. Budget trends, % of GDP, force size, nuclear arsenals, and key weapons systems compared.',
  keywords: ['US vs China military spending', 'US China defense budget comparison', 'American vs Chinese military', 'US China military comparison 2026'],
  openGraph: {
    title: 'US vs China Military Spending — Side-by-Side Comparison',
    description: 'The US spends $895B vs China\'s $296B on defense. Full comparison.',
    url: 'https://www.warcosts.org/compare/us-vs-china-military-spending',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much more does the US spend on military than China?', a: 'The US spends approximately $895 billion on defense in 2026, compared to China\'s official budget of $296 billion — roughly 3x more. However, China\'s actual spending is estimated at $350-450 billion due to unreported costs. Even so, the US spends at least 2x more.' },
  { q: 'Is China\'s military stronger than America\'s?', a: 'The US military remains significantly more capable globally, with 11 carrier strike groups, 800+ overseas bases, and decades of combat experience. China has the world\'s largest navy by hull count (370+ ships) and the largest army (2 million), but lacks global power projection capability and has not fought a war since 1979.' },
  { q: 'How does military spending compare as % of GDP?', a: 'The US spends about 3.3% of GDP on defense, while China spends about 1.6% of GDP. However, since China\'s GDP is growing faster, its defense spending is catching up in absolute terms. China\'s budget has grown roughly 7% annually for the past decade.' },
]

const comparison = [
  { metric: 'Defense Budget (2026)', us: '$895B', china: '$296B (official)', note: 'China\'s real spending est. $350-450B' },
  { metric: '% of GDP', us: '3.3%', china: '1.6%', note: 'US GDP: $27T, China GDP: $18.5T' },
  { metric: 'Active Military Personnel', us: '1.34 million', china: '2.0 million', note: 'China has world\'s largest army' },
  { metric: 'Reserve Forces', us: '800,000', china: '510,000', note: '' },
  { metric: 'Nuclear Warheads', us: '5,044', china: '~500', note: 'China rapidly expanding arsenal' },
  { metric: 'Aircraft Carriers', us: '11', china: '3', note: 'US carriers are nuclear-powered supercarriers' },
  { metric: 'Navy Ships (total)', us: '297', china: '370+', note: 'China leads by hull count, not tonnage' },
  { metric: 'Fighter Aircraft', us: '~2,700', china: '~1,500', note: 'US has stealth advantage (F-22, F-35)' },
  { metric: 'Overseas Bases', us: '750+', china: '~5', note: 'Djibouti, Cambodia, plus facilities' },
  { metric: 'Stealth Aircraft', us: '~400', china: '~150', note: 'J-20 vs F-22/F-35/B-2/B-21' },
  { metric: 'Ballistic Missiles (ICBM)', us: '400', china: '~350', note: 'China rapidly building new silos' },
  { metric: 'Combat Experience', us: 'Extensive (20+ years)', china: 'None since 1979', note: 'Last war: Vietnam border conflict' },
]

const spendingTrend = [
  { year: 2016, us: 585, china: 146 },
  { year: 2018, us: 649, china: 172 },
  { year: 2020, us: 714, china: 194 },
  { year: 2022, us: 743, china: 230 },
  { year: 2024, us: 842, china: 270 },
  { year: 2026, us: 895, china: 296 },
]

export default function USvsChinaPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Compare', href: '/tools/compare-countries' }, { label: 'US vs China' }]} />
        <ShareButtons title="US vs China Military Spending" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            US vs China Military Spending
          </h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-900/50 text-white p-6 rounded-lg text-center">
              <div className="text-sm opacity-70 mb-1">United States</div>
              <div className="text-3xl font-bold">$895B</div>
            </div>
            <div className="bg-red-900/50 text-white p-6 rounded-lg text-center">
              <div className="text-sm opacity-70 mb-1">China</div>
              <div className="text-3xl font-bold">$296B</div>
            </div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The United States outspends China <strong className="text-[#dc2626]">3-to-1</strong> on defense — yet Washington 
            insists it needs <em>more</em> to counter the &ldquo;China threat.&rdquo; The Pacific Deterrence Initiative alone 
            is receiving $14.7 billion in 2026. But does spending parity matter when the US already has 11 carrier 
            strike groups to China&apos;s 3 and 750 overseas bases to China&apos;s 5?
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Side-by-Side Comparison</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="text-left py-3 text-white">Metric</th>
                  <th className="text-right py-3 text-blue-400">🇺🇸 US</th>
                  <th className="text-right py-3 text-red-400">🇨🇳 China</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-stone-700">
                    <td className="py-3 text-gray-300 text-sm">
                      {row.metric}
                      {row.note && <div className="text-xs text-gray-500">{row.note}</div>}
                    </td>
                    <td className="py-3 text-right font-mono text-white text-sm">{row.us}</td>
                    <td className="py-3 text-right font-mono text-white text-sm">{row.china}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Spending Trend (2016-2026)</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="space-y-4">
              {spendingTrend.map((y, i) => (
                <div key={i}>
                  <div className="text-white font-semibold mb-1">{y.year}</div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-400 text-xs w-8">US</span>
                    <div className="bg-stone-700 rounded-full h-3 flex-1">
                      <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${(y.us / 895) * 100}%` }} />
                    </div>
                    <span className="text-white font-mono text-xs w-16 text-right">${y.us}B</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-xs w-8">CN</span>
                    <div className="bg-stone-700 rounded-full h-3 flex-1">
                      <div className="bg-red-500 h-3 rounded-full" style={{ width: `${(y.china / 895) * 100}%` }} />
                    </div>
                    <span className="text-white font-mono text-xs w-16 text-right">${y.china}B</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Real Question</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              China&apos;s military buildup is real — but the framing in Washington is dishonest. The &ldquo;China 
              threat&rdquo; narrative ignores that China is a <em>regional</em> military power building a military 
              appropriate to defend its neighborhood. The US is a <em>global</em> military empire maintaining 
              dominance over China&apos;s backyard, 7,000 miles from American shores.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              China has <strong className="text-white">5 overseas military facilities</strong>. The US has 
              <strong className="text-white"> 750+</strong>. China hasn&apos;t fought a war since 1979. The US has been 
              at war continuously since 2001. China has <strong className="text-white">~500 nuclear warheads</strong>. 
              The US has <strong className="text-white">5,044</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The question isn&apos;t whether China is building a military. It&apos;s whether the US needs to spend 
              $895 billion — <Link href="/us-military-budget-2026" className="text-[#dc2626] hover:underline">more than the next 10 countries combined</Link> — to 
              address it. The answer from the defense industry is always yes. The answer from common sense may differ.
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
              { href: '/compare/us-vs-russia-military', label: 'US vs Russia Military' },
              { href: '/us-military-budget-2026', label: '2026 Military Budget' },
              { href: '/military-spending-by-country', label: 'Military Spending by Country' },
              { href: '/analysis/china-pivot', label: 'The Pacific Pivot' },
              { href: '/us-military-bases-around-the-world', label: 'US Military Bases Worldwide' },
              { href: '/weapons', label: 'US Weapons Systems' },
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
              <li>• SIPRI Military Expenditure Database (2024)</li>
              <li>• Department of Defense — Annual Report on China&apos;s Military Power</li>
              <li>• Federation of American Scientists — Nuclear Notebook</li>
              <li>• IISS — The Military Balance 2025/2026</li>
              <li>• Congressional Research Service — China Naval Modernization</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'US vs China Military Spending — Side-by-Side Comparison',
              description: 'Compare US and China military spending: $895B vs $296B.',
              url: 'https://www.warcosts.org/compare/us-vs-china-military-spending',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
