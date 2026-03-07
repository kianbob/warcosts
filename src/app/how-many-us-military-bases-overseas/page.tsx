import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import RelatedArticles from '@/components/RelatedArticles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Many US Military Bases Are Overseas? 750+ in 80 Countries | WarCosts',
  description: 'The US operates 750+ military bases in 80+ countries worldwide. Complete database of overseas bases, personnel, and costs of America\'s global military empire.',
  keywords: ['US military bases overseas', 'American military bases abroad', 'US overseas bases', 'how many military bases does US have', 'US military presence worldwide'],
  openGraph: {
    title: 'How Many US Military Bases Are Overseas? 750+ in 80 Countries',
    description: 'The US operates 750+ military bases in 80+ countries worldwide — more than any empire in history.',
    url: 'https://warcosts.org/how-many-us-military-bases-overseas',
    type: 'article',
  },
}

/* ── Data ─────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'How many US military bases are there overseas?',
    a: 'The US operates approximately 750+ military bases in over 80 countries worldwide. This includes major installations, forward operating bases, and smaller facilities. The exact number varies depending on classification and operational status.',
  },
  {
    q: 'Which country has the most US military bases?',
    a: 'Germany hosts the most US bases with 40+ installations, followed by Japan (32), South Korea (15), and Italy (12). This reflects Cold War positioning and ongoing alliance commitments in these strategic regions.',
  },
  {
    q: 'How many US troops are stationed overseas?',
    a: 'Approximately 173,000 US military personnel are permanently stationed overseas as of 2024. This includes 34,500 in Germany, 54,000 in Japan, 28,500 in South Korea, and smaller deployments in 80+ other countries.',
  },
  {
    q: 'How much does it cost to maintain overseas bases?',
    a: 'The US spends approximately $50-70 billion annually to maintain overseas bases and deploy forces abroad. This includes base operations, construction, personnel costs, and transportation of equipment and supplies.',
  },
  {
    q: 'Why does the US have so many overseas bases?',
    a: 'US overseas bases serve multiple purposes: power projection, alliance commitments, deterring adversaries, protecting trade routes, and rapid deployment capabilities. Critics argue they\'re expensive remnants of Cold War strategy.',
  },
  {
    q: 'How does US overseas presence compare to other countries?',
    a: 'No other country comes close to US overseas military presence. Russia has ~10 foreign bases, China has 4, France has 8, and the UK has 7. The US has more overseas bases than all other countries combined.',
  },
]

const topBaseCountries = [
  { country: 'Germany', bases: 40, personnel: 34500, region: 'Europe', keyBases: 'Ramstein, Grafenwöhr, Stuttgart', purpose: 'NATO command, Europe operations' },
  { country: 'Japan', bases: 32, personnel: 54000, region: 'Asia-Pacific', keyBases: 'Yokosuka, Kadena, Futenma', purpose: 'China deterrence, Asia pivot' },
  { country: 'South Korea', bases: 15, personnel: 28500, region: 'Asia-Pacific', keyBases: 'Osan, Yongsan, Camp Humphreys', purpose: 'North Korea deterrence' },
  { country: 'Italy', bases: 12, personnel: 12300, region: 'Europe', keyBases: 'Aviano, Sigonella, Naples', purpose: 'Mediterranean, Africa operations' },
  { country: 'United Kingdom', bases: 10, personnel: 9300, region: 'Europe', keyBases: 'RAF Lakenheath, Mildenhall', purpose: 'Europe operations, intelligence' },
  { country: 'Turkey', bases: 8, personnel: 1800, region: 'Middle East', keyBases: 'Incirlik, Izmir', purpose: 'Middle East operations' },
  { country: 'Bahrain', bases: 3, personnel: 7000, region: 'Middle East', keyBases: 'Naval Support Activity', purpose: '5th Fleet headquarters' },
  { country: 'Qatar', bases: 2, personnel: 8000, region: 'Middle East', keyBases: 'Al Udeid', purpose: 'CENTCOM forward HQ' },
]

const regionBreakdown = [
  { region: 'Europe', bases: 90, personnel: 64000, keyCountries: 'Germany, Italy, UK, Spain', rationale: 'NATO commitments, Russia deterrence' },
  { region: 'Asia-Pacific', bases: 85, personnel: 89000, keyCountries: 'Japan, South Korea, Australia', rationale: 'China containment, alliance support' },
  { region: 'Middle East', bases: 65, personnel: 54000, keyCountries: 'Kuwait, Qatar, Bahrain, UAE', rationale: 'Oil protection, Iran containment' },
  { region: 'Africa', bases: 29, personnel: 6000, keyCountries: 'Djibouti, Niger, Somalia', rationale: 'Counterterrorism, great power competition' },
  { region: 'Latin America', bases: 12, personnel: 2000, keyCountries: 'Honduras, Colombia', rationale: 'Drug interdiction, China competition' },
]

const relatedArticles = [
  { slug: 'cost-of-empire', title: 'The Cost of American Empire', desc: 'How global military presence drains the homeland' },
  { slug: 'base-nation', title: 'America as a Base Nation', desc: 'The hidden costs and consequences of overseas bases' },
  { slug: 'imperial-overstretch', title: 'Imperial Overstretch', desc: 'When global commitments exceed resources' },
  { slug: 'china-containment', title: 'The New Cold War with China', desc: 'How military encirclement escalates tensions' },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function USMilitaryBasesOverseasPage() {
  const stats = loadData('stats.json') as {
    overseasBases: number
    overseasCountries: number
    overseasTroops: number
    [key: string]: any
  }

  const baseStats = loadData('base-stats.json') as {
    totalBases: number
    overseasBases: number
    totalCountries: number
  } || { totalBases: 750, overseasBases: 750, totalCountries: 80 }

  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'US Military Bases Overseas' }]} />
        <ShareButtons title="How Many US Military Bases Are Overseas? 750+ in 80 Countries" />

        {/* Hero Answer - Featured Snippet Target */}
        <header className="mb-12 bg-[#1a202c] rounded-lg p-8 border border-[#2d3748]">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Many US Military Bases Are Overseas?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">750+ Bases</div>
            <div className="text-lg opacity-90">In 80+ countries worldwide</div>
          </div>
          <div className="bg-[#991b1b] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">173,000</div>
            <div className="text-lg opacity-90">US troops stationed overseas</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The United States operates <strong className="text-[#dc2626]">over 750 military bases in 80+ countries</strong> 
            worldwide — the largest overseas military presence in human history. This <strong className="text-[#dc2626]">global empire of bases</strong> 
            costs $50-70 billion annually and stations 173,000 troops permanently abroad.
          </p>
        </header>

        {/* Key Statistics */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Global Military Presence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748] text-center">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">750+</div>
              <div className="text-white text-sm">Overseas Bases</div>
              <div className="text-gray-400 text-xs mt-1">All installations</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748] text-center">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">80+</div>
              <div className="text-white text-sm">Countries</div>
              <div className="text-gray-400 text-xs mt-1">With US presence</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748] text-center">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">173K</div>
              <div className="text-white text-sm">Troops Abroad</div>
              <div className="text-gray-400 text-xs mt-1">Permanent stations</div>
            </div>
            <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748] text-center">
              <div className="text-2xl font-bold text-[#dc2626] mb-2">$65B</div>
              <div className="text-white text-sm">Annual Cost</div>
              <div className="text-gray-400 text-xs mt-1">Operations &amp; maintenance</div>
            </div>
          </div>
        </section>

        {/* Top Countries with US Bases */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Countries with Most US Bases</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              Germany and Japan host the largest US overseas military presence, reflecting Cold War positioning 
              and ongoing strategic partnerships. These bases serve as regional command centers and logistics hubs.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Country</th>
                    <th className="text-center py-3 text-white">Bases</th>
                    <th className="text-center py-3 text-white">Personnel</th>
                    <th className="text-left py-3 text-white">Key Installations</th>
                    <th className="text-left py-3 text-white">Primary Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {topBaseCountries.map((country, index) => (
                    <tr key={country.country} className="border-b border-[#2d3748]">
                      <td className="py-3 text-white font-semibold">{country.country}</td>
                      <td className="py-3 text-center font-mono text-[#dc2626]">{country.bases}</td>
                      <td className="py-3 text-center font-mono text-gray-300">{country.personnel.toLocaleString()}</td>
                      <td className="py-3 text-gray-300 text-sm">{country.keyBases}</td>
                      <td className="py-3 text-gray-400 text-sm">{country.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Regional Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">US Military Presence by Region</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              US bases are strategically distributed across five major regions, each serving different geopolitical objectives 
              and threat assessments in America's global strategy.
            </p>
            <div className="space-y-6">
              {regionBreakdown.map((region, index) => (
                <div key={region.region} className="border-b border-[#2d3748] pb-4 last:border-b-0">
                  <div className="flex flex-wrap items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{region.region}</h3>
                    <div className="flex gap-4 text-sm">
                      <span className="text-[#dc2626]">{region.bases} bases</span>
                      <span className="text-gray-300">{region.personnel.toLocaleString()} personnel</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-400 text-sm">Key Countries: </span>
                      <span className="text-gray-300 text-sm">{region.keyCountries}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Strategic Rationale: </span>
                      <span className="text-gray-300 text-sm">{region.rationale}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Historical Context */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">From WWII to Global Empire</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="space-y-6">
              <div className="border-l-4 border-[#dc2626] pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">1945-1950: Liberation to Occupation</h3>
                <p className="text-gray-300 text-sm">
                  US troops stationed in defeated Axis powers (Germany, Japan, Italy) never left. "Temporary" 
                  occupation became permanent presence as Cold War tensions emerged.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">1950-1990: Cold War Expansion</h3>
                <p className="text-gray-300 text-sm">
                  NATO alliance and containment strategy led to base proliferation. Korean War (1950) and 
                  Vietnam War (1960s) established permanent Asian presence.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">1991-2001: Missed Opportunity</h3>
                <p className="text-gray-300 text-sm">
                  Soviet collapse offered chance for base reduction and "peace dividend." Instead, bases 
                  remained and new missions emerged: humanitarian intervention, NATO expansion.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">2001-Present: War on Terror &amp; Great Power Competition</h3>
                <p className="text-gray-300 text-sm">
                  9/11 triggered new base construction in Middle East and Africa. "Pivot to Asia" and 
                  Russia tensions now drive further expansion despite Afghan withdrawal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Major Base Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Types of US Overseas Bases</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-[#2d3748] rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Major Installations (50+)</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Large permanent bases with families</li>
                    <li>• Full infrastructure and services</li>
                    <li>• Regional command centers</li>
                    <li>• Examples: Ramstein, Kadena, Osan</li>
                  </ul>
                </div>
                <div className="bg-[#2d3748] rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Forward Operating Bases (200+)</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Smaller tactical installations</li>
                    <li>• Rapid deployment platforms</li>
                    <li>• Often shared with host nation</li>
                    <li>• Examples: Al Udeid, Sigonella</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#2d3748] rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Special Purpose Facilities (300+)</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Intelligence stations</li>
                    <li>• Communications facilities</li>
                    <li>• Logistics and supply depots</li>
                    <li>• Examples: Pine Gap, Diego Garcia</li>
                  </ul>
                </div>
                <div className="bg-[#2d3748] rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Lily Pad Bases (200+)</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Minimal permanent presence</li>
                    <li>• Pre-positioned equipment</li>
                    <li>• Crisis response platforms</li>
                    <li>• Examples: African drone bases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Cost of Empire */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Financial Cost</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              Maintaining 750+ overseas bases costs $50-70 billion annually — roughly equal to the entire 
              State Department budget. This doesn't include combat operations or weapons procurement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Annual Costs</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Base Operations</span>
                    <span className="text-[#dc2626]">$25B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Personnel Overseas Pay</span>
                    <span className="text-[#dc2626]">$18B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Military Construction</span>
                    <span className="text-[#dc2626]">$12B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equipment Transportation</span>
                    <span className="text-[#dc2626]">$8B</span>
                  </div>
                  <div className="flex justify-between border-t border-[#2d3748] pt-2 font-semibold">
                    <span className="text-white">Total Annual Cost</span>
                    <span className="text-[#dc2626]">$63B</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">What $63B Could Buy Instead</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Free college for 1.6 million students</li>
                  <li>• Universal broadband for rural America</li>
                  <li>• 630,000 teachers' annual salaries</li>
                  <li>• Entire EPA budget for 7 years</li>
                  <li>• 12.6 gigawatts of renewable energy</li>
                  <li>• Complete water infrastructure for Flint (630x over)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparing Global Military Presence */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">US vs Other Global Powers</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              No other country comes close to US overseas military presence. The scale difference is so vast 
              that the US has more bases than all other countries combined.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Country</th>
                    <th className="text-center py-3 text-white">Overseas Bases</th>
                    <th className="text-center py-3 text-white">Countries</th>
                    <th className="text-left py-3 text-white">Notable Locations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2d3748] bg-[#2d3748]">
                    <td className="py-3 text-[#dc2626] font-bold">🇺🇸 United States</td>
                    <td className="py-3 text-center font-mono text-[#dc2626] font-bold">750+</td>
                    <td className="py-3 text-center font-mono text-[#dc2626] font-bold">80+</td>
                    <td className="py-3 text-[#dc2626] text-sm">Germany, Japan, Korea, Middle East</td>
                  </tr>
                  <tr className="border-b border-[#2d3748]">
                    <td className="py-3 text-white">🇷🇺 Russia</td>
                    <td className="py-3 text-center font-mono text-gray-300">~10</td>
                    <td className="py-3 text-center font-mono text-gray-300">8</td>
                    <td className="py-3 text-gray-400 text-sm">Syria, Belarus, Armenia, Central Asia</td>
                  </tr>
                  <tr className="border-b border-[#2d3748]">
                    <td className="py-3 text-white">🇫🇷 France</td>
                    <td className="py-3 text-center font-mono text-gray-300">8</td>
                    <td className="py-3 text-center font-mono text-gray-300">7</td>
                    <td className="py-3 text-gray-400 text-sm">Africa (Mali, Chad, Ivory Coast)</td>
                  </tr>
                  <tr className="border-b border-[#2d3748]">
                    <td className="py-3 text-white">🇬🇧 United Kingdom</td>
                    <td className="py-3 text-center font-mono text-gray-300">7</td>
                    <td className="py-3 text-center font-mono text-gray-300">6</td>
                    <td className="py-3 text-gray-400 text-sm">Cyprus, Falklands, Gibraltar</td>
                  </tr>
                  <tr className="border-b border-[#2d3748]">
                    <td className="py-3 text-white">🇨🇳 China</td>
                    <td className="py-3 text-center font-mono text-gray-300">4</td>
                    <td className="py-3 text-center font-mono text-gray-300">3</td>
                    <td className="py-3 text-gray-400 text-sm">Djibouti, Cambodia (disputed)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Historical Context:</strong> At its peak, the British Empire 
                had ~100 major overseas installations. The Roman Empire never exceeded 50 foreign bases. 
                The US today has more overseas bases than every empire in history combined.
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Questions */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Strategic Questions</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Do 750+ bases make America safer?</h3>
                <p className="text-gray-300 text-sm">
                  Supporters argue bases deter aggression and protect allies. Critics note they create anti-American 
                  resentment, costly commitments, and entangle the US in regional conflicts. The 9/11 Commission 
                  identified US military presence in Saudi Arabia as a key Al-Qaeda grievance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Could technology replace overseas presence?</h3>
                <p className="text-gray-300 text-sm">
                  Modern weapons, satellite surveillance, and long-range strike capabilities may reduce the need 
                  for forward-deployed forces. However, the Pentagon continues expanding overseas presence citing 
                  "great power competition."
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">What would base closure save?</h3>
                <p className="text-gray-300 text-sm">
                  A 50% reduction in overseas bases could save $30+ billion annually — enough to rebuild US 
                  infrastructure, fund education, or reduce the deficit. However, alliance commitments and 
                  strategic inertia make major reductions politically difficult.
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
              { href: '/bases', label: 'Interactive Base Map' },
              { href: '/how-much-does-the-us-spend-on-military', label: 'US Military Spending' },
              { href: '/us-military-spending-vs-other-countries', label: 'US vs World Military Spending' },
              { href: '/how-many-wars-has-the-us-been-in', label: 'Complete List of US Wars' },
              { href: '/military-spending-by-country', label: 'Global Military Spending' },
              { href: '/pentagon-budget-breakdown', label: 'Pentagon Budget Breakdown' },
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
              <li>• Department of Defense - Base Structure Report (Annual)</li>
              <li>• Congressional Research Service - "Overseas Basing of U.S. Military Forces"</li>
              <li>• David Vine - "Base Nation: How U.S. Military Bases Abroad Harm America"</li>
              <li>• Stockholm International Peace Research Institute (SIPRI)</li>
              <li>• Government Accountability Office - Base Cost Analysis Reports</li>
              <li>• Quincy Institute - "Ending Endless War" Research Series</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}