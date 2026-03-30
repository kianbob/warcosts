import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does a Fighter Jet Cost? From $80M to $150M | WarCosts',
  description: 'US fighter jets cost $63M to $150M each. The F-35 program alone will cost $1.7 trillion. Complete price comparison of every active US fighter jet including F-35, F-22, F/A-18, F-15EX, and F-16.',
  keywords: ['fighter jet cost', 'how much does a fighter jet cost', 'F-35 cost', 'F-22 cost', 'F-16 cost', 'military jet price', 'fighter aircraft cost'],
  openGraph: {
    title: 'How Much Does a Fighter Jet Cost? From $80M to $150M',
    description: 'US fighter jets cost $63M to $150M each. The F-35 alone will cost $1.7 trillion over its lifetime.',
    url: 'https://www.warcosts.org/how-much-does-a-fighter-jet-cost',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much does an F-35 cost?', a: 'An F-35A costs approximately $80 million per unit (2024 dollars). However, the total F-35 program — including development, procurement of 2,456 jets, and 60 years of operations — will cost $1.7 trillion, making it the most expensive weapons program in human history.' },
  { q: 'How much does an F-22 Raptor cost?', a: 'Each F-22 Raptor costs approximately $150 million per unit. Only 187 were built before production was cancelled due to extreme costs. Operating costs are $70,000 per flight hour — nearly double the F-35.' },
  { q: 'What is the cheapest US fighter jet?', a: 'The F-16 Fighting Falcon is the most affordable active US fighter at roughly $63 million per unit for new-build F-16V Block 70/72 variants. It\'s been the workhorse of the Air Force since 1978 with over 4,600 built.' },
  { q: 'How much does it cost to fly a fighter jet per hour?', a: 'Flight costs vary dramatically: F-16 costs about $27,000/hour, F/A-18 Super Hornet $30,000/hour, F-35A $36,000/hour, and F-22 Raptor $70,000/hour. These include fuel, maintenance, and wear-and-tear.' },
  { q: 'Why is the F-35 program so expensive?', a: 'The F-35\'s $1.7 trillion total cost comes from massive development overruns (originally estimated at $233B, now $400B+), three variants for different services, immature technology rushed into production, and extremely high maintenance costs ($36K/flight hour).' },
  { q: 'How many fighter jets does the US have?', a: 'The US operates approximately 2,700+ fighter and attack aircraft across the Air Force, Navy, and Marines. This includes ~1,400 F-16s, ~560 F/A-18s, ~450 F-35s (and growing), ~187 F-22s, and ~200 F-15s.' },
]

const fighterComparison = [
  { name: 'F-35A Lightning II', unitCost: '$80M', flightHour: '$36K', built: '900+', planned: '2,456', role: '5th gen multirole stealth', generation: '5th' },
  { name: 'F-22 Raptor', unitCost: '$150M', flightHour: '$70K', built: '187', planned: '187 (cancelled)', role: 'Air superiority stealth', generation: '5th' },
  { name: 'F-15EX Eagle II', unitCost: '$88M', flightHour: '$42K', built: '80+', planned: '104', role: 'Multi-role, heavy payload', generation: '4.5th' },
  { name: 'F/A-18E/F Super Hornet', unitCost: '$67M', flightHour: '$30K', built: '600+', planned: '608', role: 'Carrier-based multirole', generation: '4.5th' },
  { name: 'F-16V Fighting Falcon', unitCost: '$63M', flightHour: '$27K', built: '4,600+', planned: 'Ongoing', role: 'Light multirole', generation: '4th' },
]

const f35ProgramCosts = [
  { category: 'Research & Development', cost: '$89B', percentage: 5.2, description: 'System development and demonstration (2001-2018+)' },
  { category: 'Aircraft Procurement', cost: '$311B', percentage: 18.3, description: 'Buying 2,456 jets for US military' },
  { category: 'Operations & Sustainment', cost: '$1.3T', percentage: 76.5, description: '60 years of flying, maintaining, upgrading' },
]

export default function FighterJetCostPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Fighter Jet Cost' }]} />
        <ShareButtons title="How Much Does a Fighter Jet Cost?" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Does a Fighter Jet Cost?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$63 Million to $150 Million Each</div>
            <div className="text-lg opacity-90">Depending on the aircraft — F-16 to F-22</div>
          </div>
          <div className="bg-stone-700 text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$1.7 Trillion</div>
            <div className="text-lg opacity-90">Total F-35 program cost — most expensive weapon system in history</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            A modern US fighter jet costs between <strong className="text-[#dc2626]">$63 million</strong> (F-16) and
            <strong className="text-[#dc2626]"> $150 million</strong> (F-22). But the real cost is staggering: the F-35
            program alone will consume <strong className="text-[#dc2626]">$1.7 trillion</strong> over its lifetime — more
            than the GDP of Canada. One F-35 costs the same as 1,200 teacher salaries.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Fighter Jet Price Comparison</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Aircraft</th>
                    <th className="text-right py-3 text-white">Unit Cost</th>
                    <th className="text-right py-3 text-white">$/Flight Hr</th>
                    <th className="text-right py-3 text-white">Built</th>
                    <th className="text-left py-3 text-white pl-4">Gen</th>
                  </tr>
                </thead>
                <tbody>
                  {fighterComparison.map((jet, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{jet.name}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{jet.unitCost}</td>
                      <td className="py-3 text-right font-mono text-gray-400">{jet.flightHour}</td>
                      <td className="py-3 text-right text-gray-400">{jet.built}</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{jet.generation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The F-35: Most Expensive Weapon in History</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-6">
              The F-35 Lightning II program will cost <strong className="text-[#dc2626]">$1.7 trillion</strong> over
              its 60-year lifespan. Originally estimated at $233 billion, the program has seen costs
              explode by <strong className="text-[#dc2626]">630%</strong>. The Pentagon plans to buy 2,456 F-35s
              for the US military, with additional sales to allied nations.
            </p>
            <div className="space-y-4">
              {f35ProgramCosts.map((item, i) => (
                <div key={i} className="border-b border-stone-700 pb-4 last:border-b-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{item.category}</span>
                    <span className="text-[#dc2626] font-bold font-mono">{item.cost}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-stone-700 rounded-full h-2 flex-1 mr-4">
                      <div className="bg-[#dc2626] h-2 rounded-full" style={{ width: `${item.percentage * 1.3}%` }} />
                    </div>
                    <span className="text-gray-400 text-sm">{item.percentage}%</span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-300 mt-6">
              <Link href="/cost-of-f35" className="text-[#dc2626] hover:underline">→ Read our full F-35 cost breakdown</Link>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Hidden Cost: Flight Hours</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The purchase price is just the beginning. Fighter jets consume enormous resources every hour
              they fly. The F-22 Raptor costs <strong className="text-[#dc2626]">$70,000 per flight hour</strong> —
              meaning a single 4-hour training mission costs $280,000, or roughly 4 teacher salaries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                { jet: 'F-22 Raptor', hourly: '$70,000', annual: 'Pilots fly ~200 hrs/yr = $14M/year per jet' },
                { jet: 'F-35A Lightning II', hourly: '$36,000', annual: 'Pilots fly ~250 hrs/yr = $9M/year per jet' },
                { jet: 'F-15EX Eagle II', hourly: '$42,000', annual: 'Pilots fly ~200 hrs/yr = $8.4M/year per jet' },
                { jet: 'F-16V Falcon', hourly: '$27,000', annual: 'Pilots fly ~250 hrs/yr = $6.75M/year per jet' },
              ].map((item, i) => (
                <div key={i} className="bg-stone-700 rounded-lg p-4">
                  <div className="text-white font-semibold mb-1">{item.jet}</div>
                  <div className="text-[#dc2626] font-bold font-mono mb-1">{item.hourly}/hr</div>
                  <div className="text-gray-400 text-sm">{item.annual}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">One F-35 = 1,200 Teacher Salaries</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              At $80 million per jet, a single F-35A costs the same as:
            </p>
            <div className="space-y-3">
              {[
                { item: '1,200 teacher salaries', detail: 'At $65K average — enough for 60 schools' },
                { item: '800 registered nurses', detail: 'At $100K average — staffing 8 hospitals' },
                { item: '1,600 affordable housing units', detail: 'At $50K subsidy per unit' },
                { item: '16 elementary schools', detail: 'At $5M per school building' },
                { item: '2,700 four-year college scholarships', detail: 'At $30K per scholarship' },
                { item: '80,000 children\'s healthcare for a year', detail: 'At $1,000 per child via CHIP' },
              ].map((item, i) => (
                <div key={i} className="flex items-start text-gray-300">
                  <span className="text-[#dc2626] mr-2 font-bold">•</span>
                  <div>
                    <strong className="text-white">{item.item}</strong>
                    <span className="text-gray-400 text-sm ml-2">— {item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-300 mt-4">
              The US plans to buy <strong className="text-[#dc2626]">2,456 F-35s</strong>. That&apos;s the equivalent
              of 2.9 million teacher salaries, or enough teachers to staff every public school in America — twice.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">International Fighter Costs</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-4">US fighters are among the most expensive in the world:</p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Aircraft</th>
                    <th className="text-left py-3 text-white">Country</th>
                    <th className="text-right py-3 text-white">Unit Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'F-22 Raptor', country: 'USA', cost: '$150M' },
                    { name: 'F-35A Lightning II', country: 'USA', cost: '$80M' },
                    { name: 'Eurofighter Typhoon', country: 'Europe', cost: '$110M' },
                    { name: 'Dassault Rafale', country: 'France', cost: '$100M' },
                    { name: 'F-15EX Eagle II', country: 'USA', cost: '$88M' },
                    { name: 'Saab Gripen E', country: 'Sweden', cost: '$85M' },
                    { name: 'Su-57 Felon', country: 'Russia', cost: '$35-50M' },
                    { name: 'J-20 Mighty Dragon', country: 'China', cost: '$30-50M (est.)' },
                  ].map((jet, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{jet.name}</td>
                      <td className="py-3 text-gray-400 text-sm">{jet.country}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{jet.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              { href: '/cost-of-f35', label: 'Full F-35 Cost Breakdown' },
              { href: '/how-much-does-a-bomber-cost', label: 'Bomber Costs' },
              { href: '/how-much-does-a-drone-cost', label: 'Military Drone Costs' },
              { href: '/weapons', label: 'US Weapons Systems' },
              { href: '/defense-budget', label: 'US Defense Budget' },
              { href: '/cost-overruns', label: 'Pentagon Cost Overruns' },
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
              <li>• Government Accountability Office — F-35 Joint Strike Fighter Annual Report (2024)</li>
              <li>• Congressional Research Service — &ldquo;F-35 Lightning II Program&rdquo;</li>
              <li>• Department of Defense — Selected Acquisition Reports (SAR)</li>
              <li>• Air Force Magazine — Fighter Cost and Performance Data</li>
              <li>• Congressional Budget Office — Tactical Aircraft Cost Analysis</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Much Does a Fighter Jet Cost? From $80M to $150M',
              description: 'US fighter jets cost $63M to $150M each. The F-35 alone will cost $1.7 trillion.',
              url: 'https://www.warcosts.org/how-much-does-a-fighter-jet-cost',
              datePublished: '2025-01-15',
              dateModified: '2026-03-28',
              author: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.warcosts.org' },
                { '@type': 'ListItem', position: 2, name: 'Fighter Jet Cost', item: 'https://www.warcosts.org/how-much-does-a-fighter-jet-cost' },
              ],
            }),
          }}
        />
      </div>
    </main>
  )
}
