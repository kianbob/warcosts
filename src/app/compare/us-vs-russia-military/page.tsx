import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US vs Russia Military Comparison — Spending, Nukes & Forces | WarCosts',
  description: 'Compare US and Russia military power: $895B vs $109B budgets, 5,044 vs 5,580 nuclear warheads, force size, weapons systems, and global reach.',
  keywords: ['US vs Russia military', 'US Russia defense spending comparison', 'American vs Russian military', 'US Russia nuclear comparison'],
  openGraph: {
    title: 'US vs Russia Military Comparison — Spending, Nukes & Forces',
    description: 'The US outspends Russia 8-to-1 on defense. Full military comparison.',
    url: 'https://www.warcosts.org/compare/us-vs-russia-military',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much more does the US spend on military than Russia?', a: 'The US spends approximately $895 billion on defense in 2026, compared to Russia\'s estimated $109 billion — roughly 8 times more. However, Russia\'s purchasing power parity (PPP) adjusted spending is estimated at $200-250 billion because labor, equipment, and operations cost far less in Russia. Even so, the US massively outspends Russia.' },
  { q: 'Does Russia have more nuclear weapons than the US?', a: 'Russia maintains the world\'s largest nuclear arsenal with approximately 5,580 warheads compared to the US arsenal of 5,044. Both nations have roughly 1,550 deployed strategic warheads under New START limits, though that treaty expired in February 2026. Russia also has a larger tactical nuclear arsenal estimated at 1,558 warheads.' },
  { q: 'Which military is stronger, US or Russia?', a: 'The US military is significantly stronger in conventional capabilities: more aircraft carriers (11 vs 1), more advanced fighter jets, better global logistics, and 750+ overseas bases. Russia\'s advantages are in nuclear weapons quantity, hypersonic missiles, air defense systems (S-400/S-500), and the ability to fight a large land war on its borders. The Ukraine war has exposed significant weaknesses in Russian logistics, equipment maintenance, and morale.' },
  { q: 'How has the Ukraine war affected Russia\'s military strength?', a: 'Russia has lost an estimated 350,000+ casualties (killed and wounded), 10,000+ armored vehicles, 300+ aircraft and helicopters, and its Black Sea Fleet flagship. The war has consumed massive stockpiles of precision munitions and forced Russia to rely on Iranian drones and North Korean artillery shells. However, Russia has also gained valuable combat experience and ramped up defense production significantly.' },
]

const comparison = [
  { metric: 'Defense Budget (2026)', us: '$895B', russia: '$109B', note: 'PPP-adjusted: ~$200-250B' },
  { metric: '% of GDP', us: '3.3%', russia: '6.1%', note: 'Russia\'s highest since Soviet era' },
  { metric: 'Active Military Personnel', us: '1.34 million', russia: '1.32 million', note: 'Russia mobilized 300K+ for Ukraine' },
  { metric: 'Reserve Forces', us: '800,000', russia: '2.0 million', note: 'Many Russian reserves poorly trained' },
  { metric: 'Nuclear Warheads (total)', us: '5,044', russia: '5,580', note: 'Russia has world\'s largest arsenal' },
  { metric: 'Deployed Strategic Warheads', us: '~1,550', russia: '~1,550', note: 'New START limits (expired Feb 2026)' },
  { metric: 'Tactical Nuclear Weapons', us: '~200', russia: '~1,558', note: 'Russia has 8x more tactical nukes' },
  { metric: 'Aircraft Carriers', us: '11', russia: '1', note: 'Kuznetsov often in drydock' },
  { metric: 'Submarines (total)', us: '68', russia: '58', note: 'Both have nuclear-armed sub fleets' },
  { metric: 'Fighter/Attack Aircraft', us: '~2,700', russia: '~1,500', note: 'Many Russian jets are aging Soviet-era' },
  { metric: 'Tanks', us: '~6,000', russia: '~12,500', note: 'Many in storage; thousands lost in Ukraine' },
  { metric: 'Overseas Bases', us: '750+', russia: '~25', note: 'Syria, Central Asia, Africa' },
  { metric: 'Hypersonic Missiles', us: 'In development', russia: 'Deployed (Kinzhal, Avangard, Zircon)', note: 'Russia leads in hypersonics' },
  { metric: 'Air Defense Systems', us: 'Patriot, THAAD', russia: 'S-400, S-500, S-300', note: 'Russia considered best in air defense' },
  { metric: 'Combat Experience (recent)', us: '20+ years (GWOT)', russia: 'Syria, Ukraine (ongoing)', note: '' },
]

const spendingTrend = [
  { year: 2016, us: 585, russia: 70 },
  { year: 2018, us: 649, russia: 62 },
  { year: 2020, us: 714, russia: 66 },
  { year: 2022, us: 743, russia: 86 },
  { year: 2024, us: 842, russia: 95 },
  { year: 2026, us: 895, russia: 109 },
]

const nuclearComparison = [
  { category: 'Strategic Warheads (deployed)', us: '~1,550', russia: '~1,550' },
  { category: 'Strategic Warheads (reserve)', us: '~1,938', russia: '~2,670' },
  { category: 'Tactical Nuclear Weapons', us: '~200', russia: '~1,558' },
  { category: 'ICBMs', us: '400 (Minuteman III)', russia: '~320 (Topol, Yars, Sarmat)' },
  { category: 'SLBMs (submarine-launched)', us: '280 (Trident II)', russia: '~176 (Bulava, Sineva)' },
  { category: 'Strategic Bombers', us: '66 (B-52, B-2, B-21)', russia: '68 (Tu-95, Tu-160)' },
]

export default function USvsRussiaPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Compare', href: '/tools/compare-countries' }, { label: 'US vs Russia' }]} />
        <ShareButtons title="US vs Russia Military Comparison" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            US vs Russia Military Comparison
          </h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-900/50 text-white p-6 rounded-lg text-center">
              <div className="text-sm opacity-70 mb-1">United States</div>
              <div className="text-3xl font-bold">$895B</div>
              <div className="text-sm opacity-70 mt-1">5,044 warheads</div>
            </div>
            <div className="bg-red-900/50 text-white p-6 rounded-lg text-center">
              <div className="text-sm opacity-70 mb-1">Russia</div>
              <div className="text-3xl font-bold">$109B</div>
              <div className="text-sm opacity-70 mt-1">5,580 warheads</div>
            </div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The US outspends Russia <strong className="text-[#dc2626]">8-to-1</strong> on defense — yet Washington treats Moscow 
            as an existential threat justifying ever-larger budgets. Russia&apos;s military is bogged down in Ukraine, its 
            economy is the size of Italy&apos;s, and its conventional forces have proven far less capable than feared. The one 
            area where Russia matches America is nuclear weapons — which is precisely why conventional spending comparisons 
            are misleading on both sides.
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
                  <th className="text-right py-3 text-red-400">🇷🇺 Russia</th>
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
                    <td className="py-3 text-right font-mono text-white text-sm">{row.russia}</td>
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
                    <span className="text-red-400 text-xs w-8">RU</span>
                    <div className="bg-stone-700 rounded-full h-3 flex-1">
                      <div className="bg-red-500 h-3 rounded-full" style={{ width: `${(y.russia / 895) * 100}%` }} />
                    </div>
                    <span className="text-white font-mono text-xs w-16 text-right">${y.russia}B</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Nuclear Arsenal Comparison</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="text-left py-3 text-white">Category</th>
                  <th className="text-right py-3 text-blue-400">🇺🇸 US</th>
                  <th className="text-right py-3 text-red-400">🇷🇺 Russia</th>
                </tr>
              </thead>
              <tbody>
                {nuclearComparison.map((row, i) => (
                  <tr key={i} className="border-b border-stone-700">
                    <td className="py-3 text-gray-300 text-sm">{row.category}</td>
                    <td className="py-3 text-right font-mono text-white text-sm">{row.us}</td>
                    <td className="py-3 text-right font-mono text-white text-sm">{row.russia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Both nations maintain enough nuclear weapons to destroy civilization multiple times over. This mutual 
            assured destruction makes conventional military comparisons largely academic — no direct US-Russia 
            conflict could remain conventional for long.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Ukraine Factor</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              Russia&apos;s invasion of Ukraine has reshaped military analysis worldwide. The Russian military — long 
              considered a near-peer competitor to the US — proved far less capable than intelligence assessments 
              suggested. Logistics failures, equipment shortages, poor morale, and corruption plagued the initial 
              invasion and continue to hamper operations.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Estimated Russian losses (through early 2026):</strong>
            </p>
            <ul className="text-gray-300 space-y-2 mb-4 list-disc list-inside">
              <li>350,000+ total casualties (killed and wounded)</li>
              <li>10,000+ armored vehicles lost (tanks, APCs, IFVs)</li>
              <li>300+ aircraft and helicopters destroyed</li>
              <li>Multiple warships sunk, including the Black Sea Fleet flagship <em>Moskva</em></li>
              <li>Massive depletion of precision-guided munitions</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Yet the US has used Ukraine as justification to <em>increase</em> military spending. The Pentagon budget 
              grew from $743B in 2022 to $895B in 2026 — a 20% increase — even as Russia 
              demonstrated it cannot defeat Ukraine, let alone threaten NATO directly. The defense industry wins 
              regardless of whether the threat is real or imagined.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Where Russia Leads</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Nuclear Arsenal</h3>
                <p className="text-gray-300 text-sm">Russia maintains the world&apos;s largest nuclear arsenal, including ~1,558 tactical nuclear weapons — 8x more than the US. Russia&apos;s nuclear doctrine is more permissive, explicitly allowing first use against conventional threats.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Hypersonic Missiles</h3>
                <p className="text-gray-300 text-sm">Russia deployed the Kinzhal air-launched ballistic missile, Avangard hypersonic glide vehicle, and Zircon ship-launched cruise missile before the US fielded comparable systems. These can potentially defeat current missile defenses.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Air Defense Systems</h3>
                <p className="text-gray-300 text-sm">The S-400 and S-500 are considered among the world&apos;s best air defense systems. Russia has invested heavily in anti-access/area denial (A2/AD) capabilities to offset US air superiority.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Arctic Military Capability</h3>
                <p className="text-gray-300 text-sm">Russia has reopened and expanded Soviet-era Arctic bases, deploying specialized brigades, icebreakers, and missile systems. Its Arctic military infrastructure far exceeds any other nation&apos;s.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Real Question</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The US spends <strong className="text-white">$895 billion</strong> a year to counter a country that 
              spends <strong className="text-white">$109 billion</strong> and can&apos;t decisively defeat Ukraine. 
              Russia&apos;s GDP is roughly $2 trillion — smaller than Texas. Its economy is under comprehensive 
              Western sanctions. Its best scientists and engineers have fled in droves since 2022.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Russia is a nuclear-armed regional power with a declining economy and a military bleeding out in 
              Ukraine. The idea that this requires the US to spend more than the <Link href="/us-military-budget-2026" className="text-[#dc2626] hover:underline">next 10 countries combined</Link> is 
              not a strategic assessment — it&apos;s a business plan for defense contractors.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The nuclear parity is real and demands serious diplomacy. But the conventional military gap is so 
              vast that using Russia as justification for $895 billion in annual spending is fundamentally dishonest. 
              As <Link href="/analysis/cost-of-empire" className="text-[#dc2626] hover:underline">the cost of empire</Link> continues 
              to grow, Americans should ask: who actually benefits from this threat inflation?
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
              { href: '/compare/us-vs-china-military-spending', label: 'US vs China Military Spending' },
              { href: '/us-military-budget-2026', label: '2026 Military Budget' },
              { href: '/nuclear-arsenal', label: 'US Nuclear Arsenal' },
              { href: '/analysis/ukraine-proxy', label: 'Ukraine: America\'s Proxy War' },
              { href: '/military-spending-by-country', label: 'Military Spending by Country' },
              { href: '/analysis/nuclear-close-calls', label: 'Nuclear Close Calls' },
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
              <li>• Federation of American Scientists — Nuclear Notebook: Russia (2025)</li>
              <li>• IISS — The Military Balance 2025/2026</li>
              <li>• UK Ministry of Defence — Intelligence Updates on Ukraine</li>
              <li>• Congressional Research Service — Russia&apos;s War in Ukraine</li>
              <li>• Oryx — Visually Confirmed Equipment Losses</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'US vs Russia Military Comparison — Spending, Nukes & Forces',
              description: 'Compare US and Russia military power: $895B vs $109B budgets, nuclear arsenals, and forces.',
              url: 'https://www.warcosts.org/compare/us-vs-russia-military',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
