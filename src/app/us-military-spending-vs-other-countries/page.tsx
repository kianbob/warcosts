import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import RelatedArticles from '@/components/RelatedArticles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Military Spending vs Other Countries: US = Next 10 Combined | WarCosts',
  description: 'The US spends $886B on military — more than the next 10 countries combined. Compare US defense spending to China ($318B), Russia ($150B), and other nations.',
  keywords: ['US military spending vs other countries', 'US vs China military spending', 'defense spending comparison', 'military budget comparison by country', 'global military spending'],
  openGraph: {
    title: 'US Military Spending vs Other Countries: US = Next 10 Combined',
    description: 'The US spends more on military than the next 10 countries combined.',
    url: 'https://warcosts.org/us-military-spending-vs-other-countries',
    type: 'article',
  },
}

/* ── Data ─────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'How does US military spending compare to other countries?',
    a: 'The US spends $886 billion on military — more than the next 10 countries combined. China is second at $318B, Russia third at $150B. The US accounts for 37% of all global military spending despite having only 4% of world population.',
  },
  {
    q: 'How much more does the US spend than China on military?',
    a: 'The US spends 2.8 times more than China on military: $886B vs $318B in 2024. However, China\'s military costs are lower due to cheaper labor and manufacturing, so the capability gap may be smaller than the spending gap suggests.',
  },
  {
    q: 'Which countries spend the most on military as percentage of GDP?',
    a: 'By GDP percentage: Saudi Arabia (6.8%), Israel (4.5%), Russia (4.1%), US (3.4%), Ukraine (3.2%). The US ranks 4th globally in military spending as a share of its economy.',
  },
  {
    q: 'How much do US allies spend on military?',
    a: 'Major US allies\' 2024 military spending: UK ($68B), Germany ($86B), France ($64B), Japan ($50B), South Korea ($48B). Combined, all NATO allies except the US spend roughly $380 billion — less than half of US spending.',
  },
  {
    q: 'Has the gap between US and other countries grown?',
    a: 'Yes, the gap has widened. In 2000, the US spent $390B vs China\'s $40B (10:1 ratio). By 2024, it\'s $886B vs $318B (2.8:1 ratio). China has closed the gap significantly, but the US absolute advantage has grown.',
  },
  {
    q: 'Why does the US spend so much more than everyone else?',
    a: 'Reasons include: global military presence (750+ overseas bases), higher personnel costs, expensive weapons systems, military-industrial complex lobbying, and political consensus that America must maintain military dominance worldwide.',
  },
]

const topSpenders2024 = [
  { rank: 1, country: 'United States', flag: '🇺🇸', spending: 886, gdpPct: 3.4, population: 335, perCapita: 2644, change: 2.8 },
  { rank: 2, country: 'China', flag: '🇨🇳', spending: 318, gdpPct: 1.8, population: 1412, perCapita: 225, change: 5.2 },
  { rank: 3, country: 'Russia', flag: '🇷🇺', spending: 150, gdpPct: 4.1, population: 144, perCapita: 1042, change: 12.1 },
  { rank: 4, country: 'India', flag: '🇮🇳', spending: 76, gdpPct: 2.4, population: 1428, perCapita: 53, change: 4.8 },
  { rank: 5, country: 'Saudi Arabia', flag: '🇸🇦', spending: 69, gdpPct: 6.8, population: 35, perCapita: 1971, change: -8.2 },
  { rank: 6, country: 'United Kingdom', flag: '🇬🇧', spending: 68, gdpPct: 2.3, population: 67, perCapita: 1015, change: 3.1 },
  { rank: 7, country: 'Germany', flag: '🇩🇪', spending: 66, gdpPct: 1.5, population: 84, perCapita: 786, change: 8.9 },
  { rank: 8, country: 'Ukraine', flag: '🇺🇦', spending: 65, gdpPct: 28.1, population: 38, perCapita: 1711, change: 51.2 },
  { rank: 9, country: 'France', flag: '🇫🇷', spending: 64, gdpPct: 2.1, population: 68, perCapita: 941, change: 2.9 },
  { rank: 10, country: 'Japan', flag: '🇯🇵', spending: 50, gdpPct: 1.2, population: 124, perCapita: 403, change: 7.2 },
]

const historicalComparison = [
  { year: 2000, us: 390, china: 40, russia: 20, others: 650, usShare: 35.5 },
  { year: 2005, us: 610, china: 70, russia: 40, others: 780, usShare: 40.7 },
  { year: 2010, us: 750, china: 120, russia: 55, others: 825, usShare: 42.9 },
  { year: 2015, us: 610, china: 200, russia: 75, others: 915, usShare: 33.9 },
  { year: 2020, us: 740, china: 260, russia: 62, others: 938, usShare: 37.0 },
  { year: 2024, us: 886, china: 318, russia: 150, others: 1246, usShare: 37.1 },
]

const allianceComparisons = [
  {
    alliance: 'NATO (without US)',
    countries: ['UK', 'Germany', 'France', 'Italy', 'Canada', 'Turkey', 'Poland', 'Spain', 'Netherlands', 'Other NATO'],
    totalSpending: 380,
    largestSpender: 'Germany ($66B)',
    meetTarget: 23,
    totalCountries: 31,
    avgGdpPct: 1.8
  },
  {
    alliance: 'US + Major Allies',
    countries: ['US', 'UK', 'Germany', 'France', 'Japan', 'South Korea', 'Australia', 'Canada'],
    totalSpending: 1298,
    largestSpender: 'United States ($886B)',
    meetTarget: 5,
    totalCountries: 8,
    avgGdpPct: 2.9
  },
  {
    alliance: 'US Adversaries',
    countries: ['Russia', 'China', 'Iran', 'North Korea'],
    totalSpending: 485,
    largestSpender: 'China ($318B)',
    meetTarget: 4,
    totalCountries: 4,
    avgGdpPct: 3.1
  }
]

const regionSpending = [
  { region: 'North America', spending: 920, countries: ['US', 'Canada', 'Mexico'], largestShare: 'US (96.3%)' },
  { region: 'Europe', spending: 420, countries: ['Germany', 'UK', 'France', 'Russia', 'Italy'], largestShare: 'Russia (35.7%)' },
  { region: 'Asia-Pacific', spending: 580, countries: ['China', 'India', 'Japan', 'South Korea', 'Australia'], largestShare: 'China (54.8%)' },
  { region: 'Middle East', spending: 190, countries: ['Saudi Arabia', 'Israel', 'Turkey', 'Iran', 'UAE'], largestShare: 'Saudi Arabia (36.3%)' },
  { region: 'Africa', spending: 45, countries: ['Algeria', 'Morocco', 'South Africa', 'Egypt'], largestShare: 'Algeria (22.2%)' },
  { region: 'Latin America', spending: 65, countries: ['Brazil', 'Colombia', 'Chile', 'Argentina'], largestShare: 'Brazil (36.9%)' },
]

const relatedArticles = [
  { slug: 'arms-race-china', title: 'The New Arms Race with China', desc: 'How military competition escalates tensions and costs' },
  { slug: 'nato-burden-sharing', title: 'NATO Burden Sharing Myth', desc: 'Why the 2% target doesn\'t tell the whole story' },
  { slug: 'military-keynesianism', title: 'Military Keynesianism', desc: 'How defense spending props up the US economy' },
  { slug: 'imperial-overstretch', title: 'Imperial Overstretch', desc: 'When global commitments exceed resources' },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function USMilitarySpendingComparisonPage() {
  const globalTotal = topSpenders2024.reduce((sum, country) => sum + country.spending, 0) + 870 // Estimated remaining countries
  const usShare = (topSpenders2024[0].spending / 2600) * 100 // Global total ~$2.6T
  const next10Total = topSpenders2024.slice(1, 11).reduce((sum, country) => sum + country.spending, 0)

  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'US vs World Military Spending' }]} />
        <ShareButtons title="US Military Spending vs Other Countries: US = Next 10 Combined" />

        {/* Hero Answer - Featured Snippet Target */}
        <header className="mb-12 bg-[#1a202c] rounded-lg p-8 border border-[#2d3748]">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            US Military Spending vs Other Countries
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$886 Billion</div>
            <div className="text-lg opacity-90">US military spending (2024)</div>
          </div>
          <div className="bg-[#991b1b] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">&gt; Next 10 Combined</div>
            <div className="text-lg opacity-90">US spends more than #2-#11 countries</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#2d3748] rounded p-3 text-center">
              <div className="text-[#dc2626] font-bold text-lg">37%</div>
              <div className="text-white text-xs">Global share</div>
            </div>
            <div className="bg-[#2d3748] rounded p-3 text-center">
              <div className="text-[#dc2626] font-bold text-lg">2.8x</div>
              <div className="text-white text-xs">More than China</div>
            </div>
            <div className="bg-[#2d3748] rounded p-3 text-center">
              <div className="text-[#dc2626] font-bold text-lg">5.9x</div>
              <div className="text-white text-xs">More than Russia</div>
            </div>
            <div className="bg-[#2d3748] rounded p-3 text-center">
              <div className="text-[#dc2626] font-bold text-lg">12x</div>
              <div className="text-white text-xs">More than India</div>
            </div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The United States spends <strong className="text-[#dc2626]">$886 billion on military</strong> — 
            more than the next 10 countries combined and <strong className="text-[#dc2626]">37% of all global military spending</strong>. 
            China is second at $318B, Russia third at $150B, making the US the dominant military spender by far.
          </p>
        </header>

        {/* Top 10 Countries Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Top 10 Military Spenders (2024)</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Rank</th>
                    <th className="text-left py-3 text-white">Country</th>
                    <th className="text-right py-3 text-white">Spending</th>
                    <th className="text-right py-3 text-white">% GDP</th>
                    <th className="text-right py-3 text-white">Per Capita</th>
                    <th className="text-right py-3 text-white">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {topSpenders2024.map((country, index) => (
                    <tr key={country.country} className={`border-b border-[#2d3748] ${index === 0 ? 'bg-[#2d3748]' : ''}`}>
                      <td className="py-3 text-center font-mono text-gray-300">{country.rank}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{country.flag}</span>
                          <span className={`font-semibold ${index === 0 ? 'text-[#dc2626]' : 'text-white'}`}>
                            {country.country}
                          </span>
                        </div>
                      </td>
                      <td className={`py-3 text-right font-mono font-bold ${index === 0 ? 'text-[#dc2626]' : 'text-white'}`}>
                        ${country.spending}B
                      </td>
                      <td className="py-3 text-right font-mono text-gray-300">{country.gdpPct}%</td>
                      <td className="py-3 text-right font-mono text-gray-300">${country.perCapita}</td>
                      <td className={`py-3 text-right font-mono text-sm ${country.change > 0 ? 'text-red-400' : 'text-green-400'}`}>
                        {country.change > 0 ? '+' : ''}{country.change}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#2d3748] rounded p-4">
                <div className="text-[#dc2626] font-bold text-lg mb-1">US vs Next 9</div>
                <div className="text-white">${topSpenders2024[0].spending}B vs ${next10Total - topSpenders2024[0].spending}B</div>
                <div className="text-gray-400 text-xs">US advantage: $${topSpenders2024[0].spending - (next10Total - topSpenders2024[0].spending)}B</div>
              </div>
              <div className="bg-[#2d3748] rounded p-4">
                <div className="text-[#dc2626] font-bold text-lg mb-1">Global Share</div>
                <div className="text-white">37% of world total</div>
                <div className="text-gray-400 text-xs">With 4% of world population</div>
              </div>
              <div className="bg-[#2d3748] rounded p-4">
                <div className="text-[#dc2626] font-bold text-lg mb-1">Per Capita Leader</div>
                <div className="text-white">${topSpenders2024[0].perCapita} per American</div>
                <div className="text-gray-400 text-xs">5x higher than China</div>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Trends */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Historical Trends (2000-2024)</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The US has maintained military spending dominance for decades, though China has significantly 
              closed the gap since 2000. Russia's spending spiked after 2014 due to Ukraine tensions.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Year</th>
                    <th className="text-right py-3 text-white">United States</th>
                    <th className="text-right py-3 text-white">China</th>
                    <th className="text-right py-3 text-white">Russia</th>
                    <th className="text-right py-3 text-white">US Share</th>
                    <th className="text-right py-3 text-white">US:China Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  {historicalComparison.map((year) => (
                    <tr key={year.year} className="border-b border-[#2d3748]">
                      <td className="py-3 text-white font-semibold">{year.year}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">${year.us}B</td>
                      <td className="py-3 text-right font-mono text-gray-300">${year.china}B</td>
                      <td className="py-3 text-right font-mono text-gray-300">${year.russia}B</td>
                      <td className="py-3 text-right font-mono text-yellow-400">{year.usShare}%</td>
                      <td className="py-3 text-right font-mono text-gray-300">{(year.us / year.china).toFixed(1)}:1</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Key Trend:</strong> China has grown from spending 10% 
                of the US amount in 2000 to 36% in 2024. However, the US absolute advantage has actually 
                grown from $350B to $568B due to increased American spending.
              </p>
            </div>
          </div>
        </section>

        {/* Regional Comparisons */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Military Spending by Region</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              North America (dominated by the US) accounts for 35% of global military spending. 
              The next largest regions are Asia-Pacific and Europe, each around 16-18%.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regionSpending.map((region, index) => (
                <div key={region.region} className="border border-[#2d3748] rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-white">{region.region}</h3>
                    <span className="text-[#dc2626] font-mono font-bold">${region.spending}B</span>
                  </div>
                  <div className="text-gray-400 text-sm mb-2">
                    <strong>Largest spender:</strong> {region.largestShare}
                  </div>
                  <div className="text-gray-300 text-xs">
                    Key countries: {region.countries.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alliance Comparisons */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Military Alliances &amp; Blocs</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              NATO allies (excluding the US) spend $380B combined — less than half of US spending alone. 
              US adversaries (China + Russia + Iran + North Korea) spend $485B combined.
            </p>
            <div className="space-y-6">
              {allianceComparisons.map((alliance, index) => (
                <div key={alliance.alliance} className="border border-[#2d3748] rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-white">{alliance.alliance}</h3>
                    <span className="text-[#dc2626] font-mono font-bold">${alliance.totalSpending}B</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Countries:</span>
                      <div className="text-gray-300">{alliance.totalCountries}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Largest spender:</span>
                      <div className="text-gray-300">{alliance.largestSpender}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Avg % GDP:</span>
                      <div className="text-gray-300">{alliance.avgGdpPct}%</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Meet 2% target:</span>
                      <div className="text-gray-300">{alliance.meetTarget}/{alliance.totalCountries}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why the US Spends So Much */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Why Does the US Spend So Much More?</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Structural Factors</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• <strong>Global presence:</strong> 750+ bases in 80+ countries</li>
                  <li>• <strong>Higher costs:</strong> US personnel earn 3-5x more than Chinese</li>
                  <li>• <strong>All-volunteer force:</strong> Must pay competitive wages</li>
                  <li>• <strong>Advanced technology:</strong> Expensive cutting-edge weapons</li>
                  <li>• <strong>Contractor profits:</strong> 50%+ goes to private companies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Political Factors</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• <strong>Military-industrial complex:</strong> Powerful lobbying</li>
                  <li>• <strong>Bipartisan support:</strong> Few politicians oppose increases</li>
                  <li>• <strong>Regional interests:</strong> Defense jobs in every state</li>
                  <li>• <strong>Threat inflation:</strong> Exaggerating foreign dangers</li>
                  <li>• <strong>Imperial strategy:</strong> Goal of global dominance</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <h4 className="text-white font-semibold mb-2">The Cost of Being #1</h4>
              <p className="text-gray-300 text-sm">
                Maintaining global military dominance is expensive. The US operates like a global police force, 
                with commitments to defend allies worldwide. This strategy requires massive spending but offers 
                diminishing security returns as regional powers like China and Russia challenge US hegemony.
              </p>
            </div>
          </div>
        </section>

        {/* Does More Spending = More Security? */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Does More Spending Equal More Security?</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 text-green-400">Arguments For</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Deters potential adversaries from aggression</li>
                  <li>• Protects allies and maintains alliance system</li>
                  <li>• Enables rapid response to global crises</li>
                  <li>• Maintains technological military superiority</li>
                  <li>• Supports global trade and economic stability</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 text-[#dc2626]">Arguments Against</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Creates arms races and regional tensions</li>
                  <li>• Generates anti-American resentment globally</li>
                  <li>• Diverts resources from domestic priorities</li>
                  <li>• Encourages military solutions to political problems</li>
                  <li>• Most threats don't require massive military spending</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-[#2d3748] rounded-lg">
                <h4 className="text-white font-semibold mb-2">Historical Evidence</h4>
                <p className="text-gray-300 text-sm">
                  The US has been the world's largest military spender since 1945, yet has fought more wars 
                  than any other nation. Countries with much smaller militaries (Switzerland, Singapore, 
                  Costa Rica) enjoy greater security and prosperity relative to their military spending.
                </p>
              </div>
              <div className="p-4 bg-[#2d3748] rounded-lg">
                <h4 className="text-white font-semibold mb-2">Diminishing Returns</h4>
                <p className="text-gray-300 text-sm">
                  Economic research suggests military spending has diminishing security returns. The first 
                  $100B buys significant capability; the difference between $500B and $900B is often marginal 
                  for actual defense needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: '/how-much-does-the-us-spend-on-military', label: 'US Military Spending Breakdown' },
              { href: '/pentagon-budget-breakdown', label: 'Pentagon Budget Analysis' },
              { href: '/military-spending-by-country', label: 'Global Military Spending Rankings' },
              { href: '/how-many-us-military-bases-overseas', label: 'US Military Bases Worldwide' },
              { href: '/cost-of-f35', label: 'F-35 Program Costs' },
              { href: '/cost-of-nuclear-weapons', label: 'Nuclear Weapons Spending' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[#1a202c] hover:bg-[#2d3748] rounded-lg p-4 border border-[#2d3748] hover:border-[#dc2626] text-gray-300 hover:text-white transition-colors"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        <RelatedArticles articles={relatedArticles} />

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Sources</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <ul className="text-gray-300 space-y-2">
              <li>• Stockholm International Peace Research Institute (SIPRI) Military Expenditure Database</li>
              <li>• International Institute for Strategic Studies (IISS) — The Military Balance 2024</li>
              <li>• NATO — Defence Expenditure of NATO Countries (2014-2024)</li>
              <li>• World Bank — Military expenditure data by country</li>
              <li>• Department of Defense - National Defense Budget Estimates</li>
              <li>• Congressional Research Service - Defense Spending Comparisons</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}