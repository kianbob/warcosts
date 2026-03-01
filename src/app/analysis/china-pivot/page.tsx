import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The China Trap: How the Middle East Keeps Derailing the Pivot to Asia | WarCosts',
  description: 'Every president since Obama tried to pivot to Asia. All failed. China built $1T in trade infrastructure while the US spent $8T bombing the Middle East.',
  alternates: { canonical: 'https://www.warcosts.org/analysis/china-pivot' },
}

const pivotAttempts = [
  { president: 'Obama', year: '2011-2016', promise: '"Pivot to Asia" — the centerpiece of Obama\'s foreign policy', derailed: 'Libya (2011), Syria civil war, ISIS caliphate (2014), Ukraine/Crimea (2014). Each crisis pulled attention and resources back to the Middle East and Europe.', result: 'Trans-Pacific Partnership negotiated but never ratified. China launched Belt and Road ($1T) and built 3,200 acres of artificial islands while Obama bombed Libya.' },
  { president: 'Trump (1st term)', year: '2017-2021', promise: 'Trade war with China, "America First," withdrawal from Middle East', derailed: 'Assassinated Soleimani (Jan 2020), nearly started Iran war, maintained 70,000+ troops in Middle East. Trade war cost American consumers $80B in tariffs.', result: 'China trade deficit grew. China signed RCEP (world\'s largest trade deal) without the US. US withdrew from TPP — gift to China.' },
  { president: 'Biden', year: '2021-2025', promise: '"Competition with China is the defining challenge of the 21st century"', derailed: 'Afghanistan withdrawal chaos, Ukraine ($175B), Israel-Gaza, Red Sea/Houthis. CENTCOM consumed attention while INDOPACOM needed resources.', result: 'AUKUS signed ($368B), Quad strengthened, but China expanded influence across Global South while US was distracted by Ukraine and Gaza.' },
  { president: 'Trump (2nd term)', year: '2025-present', promise: '"Biggest deal-maker," end wars, focus on domestic agenda', derailed: 'Venezuela operation (Jan 2026), Operation Midnight Hammer (June 2025), Operation Epic Fury against Iran (Feb 2026). Now fighting another Middle East war.', result: 'Iran war is the ultimate distraction. China is watching and building while America burns through another trillion dollars in the Middle East.' },
]

const chinaVsUs = [
  { category: 'Infrastructure investment abroad', us: '$8T on Middle East wars', china: '$1T Belt and Road (150+ countries)', winner: 'China' },
  { category: 'Trade agreements', us: 'Withdrew from TPP, no new deals', china: 'RCEP (world\'s largest), 30+ FTAs', winner: 'China' },
  { category: 'Naval shipbuilding (2020-24)', us: '9 combatant ships/year', china: '23 combatant ships/year', winner: 'China' },
  { category: 'Diplomatic missions opened (decade)', us: 'Closed consulates, reduced staff', china: '30+ new embassies/missions', winner: 'China' },
  { category: 'Rare earth processing', us: '0% → 4% domestic capacity', china: '90% of global processing', winner: 'China' },
  { category: 'Global 5G infrastructure', us: 'Banned Huawei, no alternative offered', china: 'Huawei in 170+ countries', winner: 'China' },
  { category: 'High-speed rail (km)', us: '0 km operational', china: '45,000 km (more than rest of world combined)', winner: 'China' },
  { category: 'Manufacturing output', us: 'Declined from 28% to 16% of global', china: 'Rose from 6% to 31% of global', winner: 'China' },
]

export default function ChinaPivotPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The China Trap' }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Strategic Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mt-3 mb-4">
          The China Trap
        </h1>
        <p className="text-xl text-stone-300 mb-4">How the Middle East Keeps Derailing the Pivot to Asia</p>
        <p className="text-stone-400 text-lg">
          Every president since Obama has declared that competition with China is America&apos;s defining challenge.
          Every one of them got sucked back into the Middle East. China built $1 trillion in global trade infrastructure
          while the US spent $8 trillion bombing countries that posed no existential threat. The Middle East is quicksand
          — and America keeps walking into it.
        </p>
      </div>

      <ShareButtons title="The China Trap: How the Middle East Keeps Derailing the Pivot to Asia" />

      <blockquote className="border-l-4 border-red-700 pl-6 my-8 text-xl text-stone-400 italic">
        &ldquo;Every recent US president has tried to redirect attention beyond the Middle East. To Asia. To the Western Hemisphere.
        None has succeeded.&rdquo;
        <span className="block text-sm text-stone-500 mt-2 not-italic">— Chatham House, February 2026</span>
      </blockquote>

      {/* Score card */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Scoreboard: US vs China (2001-2026)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-600">
                <th className="text-left py-2 text-stone-400">Category</th>
                <th className="text-left py-2 text-stone-400">United States</th>
                <th className="text-left py-2 text-stone-400">China</th>
                <th className="text-center py-2 text-stone-400">Winner</th>
              </tr>
            </thead>
            <tbody>
              {chinaVsUs.map((row, i) => (
                <tr key={i} className="border-b border-stone-700">
                  <td className="py-3 text-stone-300 font-medium">{row.category}</td>
                  <td className="py-3 text-stone-400">{row.us}</td>
                  <td className="py-3 text-stone-400">{row.china}</td>
                  <td className="py-3 text-center">
                    <span className={`text-xs px-2 py-1 rounded-full ${row.winner === 'China' ? 'bg-red-900/50 text-red-400' : 'bg-green-900/50 text-green-400'}`}>
                      {row.winner === 'China' ? '🇨🇳 China' : '🇺🇸 US'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-stone-500 text-sm mt-4">China: 8. United States: 0. And we wonder why the &ldquo;pivot to Asia&rdquo; hasn&apos;t worked.</p>
      </div>

      {/* Pivot attempts */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">Four Presidents, Four Failures</h2>
      <div className="space-y-6">
        {pivotAttempts.map((p, i) => (
          <div key={i} className="bg-stone-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-red-400 font-bold text-lg">{p.president}</span>
              <span className="text-stone-500 text-sm">{p.year}</span>
            </div>
            <p className="text-stone-300 mb-2"><strong className="text-white">Promise:</strong> {p.promise}</p>
            <p className="text-stone-300 mb-2"><strong className="text-red-400">Derailed by:</strong> {p.derailed}</p>
            <p className="text-stone-400"><strong className="text-stone-300">Result:</strong> {p.result}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-none mt-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">The Numbers Don&apos;t Lie</h2>

        <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
          <div className="bg-stone-800 rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">$8T+</p>
            <p className="text-stone-400 text-sm">US spent on Middle East wars since 2001</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">$1T</p>
            <p className="text-stone-400 text-sm">China invested in Belt and Road</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">8:1</p>
            <p className="text-stone-400 text-sm">US war spending vs China trade investment</p>
          </div>
        </div>

        <p className="text-stone-300">While the US was spending $8 trillion bombing countries with a combined GDP smaller than Florida&apos;s, China was building
        the largest infrastructure network in human history. Belt and Road now spans 150+ countries. China is the top trading
        partner of 120 countries. The US is the top trading partner of... fewer every year.</p>

        <p className="text-stone-300">China builds ports. America builds forward operating bases. China builds high-speed rail. America builds detention
        facilities. China signs trade deals. America signs arms deals. The contrast is not subtle.</p>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">The Naval Gap Is Real</h2>

        <p className="text-stone-300">China now has the world&apos;s largest navy by number of ships (370+ vs America&apos;s 295). China builds 23 combatant ships
        per year. The US builds 9. At this rate, China&apos;s numerical advantage widens every year.</p>

        <p className="text-stone-300">But here&apos;s the kicker: while China focuses its entire navy on the Western Pacific, the US Navy is spread across
        every ocean. The Fifth Fleet is in Bahrain guarding oil. The Sixth Fleet is in the Mediterranean. Carrier strike groups
        rotate through the Middle East at $6.5 million per day. Every carrier in the Persian Gulf is a carrier NOT in the Pacific.</p>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">Iran: The Latest Distraction</h2>

        <p className="text-stone-300">Operation Epic Fury is the ultimate example. Two carrier strike groups are now fighting Iran instead of deterring
        China. The Strait of Hormuz is closed — the oil disruption will strengthen China (which gets Iranian oil at discounted
        prices anyway). The US is burning through precision munitions that would be needed in a Taiwan scenario. And China is
        watching all of this, taking notes on US tactics, weapons performance, and political willingness to sustain casualties.</p>

        <p className="text-stone-300">Every Tomahawk fired at Iran is a Tomahawk not available for Taiwan. Every F-35 sortie hour over Tehran is an hour
        not available over the Pacific. The opportunity cost is staggering — and China knows it.</p>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-8">Bin Laden&apos;s Final Victory</h2>

        <p className="text-stone-300">Osama bin Laden&apos;s stated strategy was to draw the US into endless Middle East conflicts that would bleed the treasury,
        exhaust the military, and distract from actual strategic threats. Twenty-five years and $8 trillion later, with American
        bombs falling on yet another Middle Eastern country, it&apos;s hard to argue he didn&apos;t succeed.</p>
      </div>

      {/* AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-3">💡 AI Overview: Key Insights</h3>
        <ul className="space-y-2 text-sm text-stone-300">
          <li>• <strong>$8T vs $1T</strong> — US spent 8x more on Middle East wars than China invested in global trade infrastructure</li>
          <li>• <strong>4 for 4</strong> — Every president since 2011 promised to pivot to Asia, every one got dragged back to the Middle East</li>
          <li>• <strong>China builds 23 warships/year vs US 9</strong> — Naval gap widening while US carriers patrol the Persian Gulf</li>
          <li>• <strong>China is top trading partner of 120 countries</strong> — while US focused on arms sales and military bases</li>
          <li>• <strong>Operation Epic Fury diverts 2 carrier groups from Pacific</strong> — Every carrier in the Gulf is a carrier not deterring China</li>
        </ul>
      </div>

      {/* Cross-links */}
      <div className="bg-stone-800 rounded-lg p-6 mt-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-3">Related</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/analysis/iran-2026" className="text-red-400 hover:text-red-300">→ Iran 2026: Whose War Is This?</a></li>
          <li><a href="/analysis/cost-of-iran" className="text-red-400 hover:text-red-300">→ What Will Iran Cost?</a></li>
          <li><a href="/global-spending" className="text-red-400 hover:text-red-300">→ Global Military Spending Comparison</a></li>
          <li><a href="/countries/china" className="text-red-400 hover:text-red-300">→ China Military Spending Profile</a></li>
          <li><a href="/analysis/what-could-we-buy" className="text-red-400 hover:text-red-300">→ What $11.6 Trillion Could Have Bought Instead</a></li>
        </ul>
      </div>

      <BackToTop />
    </main>
  )
}
