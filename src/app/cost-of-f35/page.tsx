import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import RelatedArticles from '@/components/RelatedArticles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cost of F-35 Fighter Program: $1.7 Trillion Lifetime | WarCosts',
  description: 'The F-35 Lightning II program will cost $1.7 trillion over its lifetime, making it the most expensive weapons program in history. Complete breakdown of costs and problems.',
  keywords: ['F-35 cost', 'F-35 program cost', 'F-35 fighter jet cost', 'F-35 Lightning II cost', 'most expensive weapons program', 'F-35 problems'],
  openGraph: {
    title: 'Cost of F-35 Fighter Program: $1.7 Trillion Lifetime',
    description: 'The F-35 program will cost $1.7 trillion over its lifetime — the most expensive weapons program ever.',
    url: 'https://warcosts.org/cost-of-f35',
    type: 'article',
  },
}

/* ── Data ─────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'How much does the F-35 program cost in total?',
    a: 'The F-35 Lightning II program will cost approximately $1.7 trillion over its 60-year lifetime (2001-2088). This includes $400B for development and procurement, plus $1.3T for operations and maintenance. It\'s the most expensive weapons program in history.',
  },
  {
    q: 'How much does each F-35 fighter jet cost?',
    a: 'F-35A costs $110 million per aircraft, F-35B costs $135 million, and F-35C costs $137 million (2024 prices). Including development costs, each jet represents roughly $300 million in total program investment.',
  },
  {
    q: 'Why is the F-35 so expensive?',
    a: 'The F-35 is expensive due to: massive cost overruns (630% over original budget), technical complexity, "concurrency" (building while still designing), contractor profit margins, and operational costs 2-3x higher than older fighters.',
  },
  {
    q: 'What problems has the F-35 had?',
    a: 'Major F-35 problems include: software glitches, ejection seat failures, engine fires, radar issues, maintenance difficulties, low mission readiness rates (50-70%), and helmet display problems. Over 800 technical deficiencies remain unresolved.',
  },
  {
    q: 'How does F-35 cost compare to other fighters?',
    a: 'The F-35 costs 2-3x more than alternatives: F-35A ($110M) vs F-16 ($35M), F-18 Super Hornet ($75M), or Gripen ($85M). Lifetime operating costs are also significantly higher due to complex maintenance requirements.',
  },
  {
    q: 'Could the F-35 program be cancelled?',
    a: 'The F-35 is considered "too big to fail" with production across 45+ states, international partnerships with 8 countries, and over 800 aircraft already delivered. Cancellation would cost tens of billions in penalties and leave capability gaps.',
  },
]

const costBreakdown = {
  totalLifetime: 1700,
  development: 89,
  procurement: 311,
  operations: 1300,
  breakdown: [
    { category: 'Development & Testing', cost: 89, percentage: 5.2, description: 'System development, testing, and evaluation (2001-2018)' },
    { category: 'Aircraft Procurement', cost: 311, percentage: 18.3, description: 'Purchasing 2,456 aircraft for US forces' },
    { category: 'Operations & Maintenance', cost: 1300, percentage: 76.5, description: 'Flying, maintaining, and upgrading jets over 60 years' },
  ]
}

const variants = [
  { 
    variant: 'F-35A (Air Force)', 
    unitCost: 110, 
    planned: 1763, 
    totalCost: 194, 
    features: 'Conventional takeoff/landing, internal gun',
    users: 'USAF, allies'
  },
  { 
    variant: 'F-35B (Marines)', 
    unitCost: 135, 
    planned: 353, 
    totalCost: 48, 
    features: 'Short takeoff/vertical landing (STOVL)',
    users: 'USMC, UK, Italy'
  },
  { 
    variant: 'F-35C (Navy)', 
    unitCost: 137, 
    planned: 340, 
    totalCost: 47, 
    features: 'Carrier-based, larger wings, stronger landing gear',
    users: 'USN, USMC'
  },
]

const costGrowth = [
  { year: 2001, estimate: 233, description: 'Original program estimate' },
  { year: 2005, estimate: 276, description: 'Early cost growth' },
  { year: 2010, estimate: 380, description: 'Major restructure' },
  { year: 2015, estimate: 1100, description: 'Lifetime costs included' },
  { year: 2020, estimate: 1600, description: 'Sustainment costs rise' },
  { year: 2024, estimate: 1700, description: 'Current estimate (30% over 2020)' },
]

const problemsIssues = [
  { category: 'Technical', issues: ['800+ unresolved deficiencies', 'Software crashes and reboots', 'Ejection seat failures', 'Engine fires and failures', 'Radar and sensor malfunctions'] },
  { category: 'Operational', issues: ['50-70% mission readiness rates', '2-3x higher operating costs', 'Complex maintenance requirements', 'Spare parts shortages', 'Training delays'] },
  { category: 'Safety', issues: ['Pilot oxygen system failures', 'Helmet display problems', 'Lightning strike restrictions', 'Cold weather limitations', 'Night landing difficulties'] },
  { category: 'Schedule', issues: ['14+ years behind original schedule', 'IOC delayed repeatedly', 'Block upgrades late', 'International deliveries delayed', 'Testing incomplete'] },
]

const alternativeComparison = [
  { aircraft: 'F-35A Lightning II', cost: 110, manufacturer: 'Lockheed Martin', capabilities: 'Stealth, advanced sensors, multirole', issues: '800+ deficiencies, high costs' },
  { aircraft: 'F-16 Fighting Falcon', cost: 35, manufacturer: 'Lockheed Martin', capabilities: 'Proven, reliable, widely used', issues: 'Not stealth, aging design' },
  { aircraft: 'F-18 Super Hornet', cost: 75, manufacturer: 'Boeing', capabilities: 'Naval capable, reliable, upgradeable', issues: 'Not stealth, limited range' },
  { aircraft: 'Gripen E', cost: 85, manufacturer: 'Saab', capabilities: 'Modern, efficient, NATO compatible', issues: 'Smaller, less payload capacity' },
  { aircraft: 'Eurofighter Typhoon', cost: 124, manufacturer: 'BAE/Airbus', capabilities: 'Excellent air-to-air, European', issues: 'Limited ground attack, expensive' },
]

const internationalPartners = [
  { country: 'United Kingdom', investment: 2.5, aircraft: 138, role: 'Level 1 partner, major components' },
  { country: 'Italy', investment: 1.0, aircraft: 90, role: 'Level 2 partner, final assembly' },
  { country: 'Netherlands', investment: 0.8, aircraft: 52, role: 'Level 2 partner, components' },
  { country: 'Australia', investment: 0.6, aircraft: 72, role: 'Level 3 partner, components' },
  { country: 'Norway', investment: 0.5, aircraft: 52, role: 'Level 3 partner, components' },
  { country: 'Canada', investment: 0.4, aircraft: 88, role: 'Level 3 partner (withdrew 2022)' },
  { country: 'Denmark', investment: 0.3, aircraft: 27, role: 'Level 3 partner, components' },
  { country: 'Turkey', investment: 1.4, aircraft: 0, role: 'Ejected from program 2019' },
]

const relatedArticles = [
  { slug: 'military-industrial-complex', title: 'The Military-Industrial Complex', desc: 'How defense contractors capture Pentagon spending' },
  { slug: 'cost-plus-contracts', title: 'Cost-Plus Contracts: Guaranteed Profits', desc: 'Why defense programs always cost more than estimated' },
  { slug: 'pentagon-waste', title: 'Pentagon Waste: $60 Billion Annually', desc: 'How the Defense Department burns taxpayer money' },
  { slug: 'too-big-to-fail-weapons', title: 'Too Big to Fail: Weapons Edition', desc: 'Why bad military programs never get canceled' },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function F35CostPage() {
  const originalEstimate = costGrowth[0].estimate
  const currentEstimate = costGrowth[costGrowth.length - 1].estimate
  const costIncrease = ((currentEstimate - originalEstimate) / originalEstimate * 100).toFixed(0)

  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'F-35 Fighter Cost' }]} />
        <ShareButtons title="Cost of F-35 Fighter Program: $1.7 Trillion Lifetime" />

        {/* Hero Answer - Featured Snippet Target */}
        <header className="mb-12 bg-[#1a202c] rounded-lg p-8 border border-[#2d3748]">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            Cost of F-35 Fighter Program
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$1.7 Trillion</div>
            <div className="text-lg opacity-90">Total lifetime cost (2001-2088)</div>
          </div>
          <div className="bg-[#991b1b] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">630% Over Budget</div>
            <div className="text-lg opacity-90">From $233B to $1.7T estimate</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#2d3748] rounded p-3 text-center">
              <div className="text-[#dc2626] font-bold text-lg">$110M</div>
              <div className="text-white text-xs">Per F-35A</div>
            </div>
            <div className="bg-[#2d3748] rounded p-3 text-center">
              <div className="text-[#dc2626] font-bold text-lg">2,456</div>
              <div className="text-white text-xs">Total aircraft</div>
            </div>
            <div className="bg-[#2d3748] rounded p-3 text-center">
              <div className="text-[#dc2626] font-bold text-lg">800+</div>
              <div className="text-white text-xs">Deficiencies</div>
            </div>
            <div className="bg-[#2d3748] rounded p-3 text-center">
              <div className="text-[#dc2626] font-bold text-lg">60%</div>
              <div className="text-white text-xs">Avg readiness</div>
            </div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The F-35 Lightning II will cost <strong className="text-[#dc2626]">$1.7 trillion over its lifetime</strong> — 
            the most expensive weapons program in history. Originally estimated at $233B, costs have grown 
            <strong className="text-[#dc2626]"> 630%</strong> while the program suffers from <strong className="text-[#dc2626]">800+ unresolved technical problems</strong>.
          </p>
        </header>

        {/* Cost Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Where $1.7 Trillion Goes</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The F-35's staggering cost comes from development overruns, expensive production, and especially 
              the massive long-term costs of operating and maintaining these complex aircraft over 60+ years.
            </p>
            <div className="space-y-4">
              {costBreakdown.breakdown.map((item, index) => (
                <div key={index} className="border-b border-[#2d3748] pb-4 last:border-b-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{item.category}</span>
                    <div className="flex gap-4">
                      <span className="text-[#dc2626] font-bold">${item.cost}B</span>
                      <span className="text-gray-400 text-sm">{item.percentage}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-[#2d3748] rounded-full h-2 flex-1 mr-4">
                      <div
                        className="bg-[#dc2626] h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Hidden Truth:</strong> The Pentagon often quotes only 
                procurement costs ($311B) to downplay the program's true expense. The $1.3 trillion in 
                operations and maintenance — 76% of total cost — is rarely mentioned in public debates.
              </p>
            </div>
          </div>
        </section>

        {/* F-35 Variants */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">F-35 Variants &amp; Costs</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The F-35 comes in three variants for different services. The Marine Corps variant (F-35B) 
              is the most expensive due to its complex vertical landing capability.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Variant</th>
                    <th className="text-right py-3 text-white">Unit Cost</th>
                    <th className="text-center py-3 text-white">Planned Qty</th>
                    <th className="text-right py-3 text-white">Total Cost</th>
                    <th className="text-left py-3 text-white">Special Features</th>
                  </tr>
                </thead>
                <tbody>
                  {variants.map((variant, index) => (
                    <tr key={variant.variant} className="border-b border-[#2d3748]">
                      <td className="py-3 text-white font-semibold">{variant.variant}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">${variant.unitCost}M</td>
                      <td className="py-3 text-center font-mono text-gray-300">{variant.planned.toLocaleString()}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">${variant.totalCost}B</td>
                      <td className="py-3 text-gray-400 text-sm">{variant.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Why Three Variants?</strong> The Pentagon wanted one 
                aircraft for all services to save money. Instead, creating three variants increased complexity, 
                compromised performance, and raised costs. A classic case of trying to do too much with one design.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Growth Over Time */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Great F-35 Cost Explosion</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The F-35 program showcases how Pentagon cost estimates bear no resemblance to reality. 
              What started as a $233 billion program in 2001 has grown to $1.7 trillion — and climbing.
            </p>
            <div className="space-y-4">
              {costGrowth.map((estimate, index) => (
                <div key={estimate.year} className="flex items-center justify-between p-3 rounded bg-[#2d3748]">
                  <div className="flex items-center gap-4">
                    <span className="text-white font-mono w-12">{estimate.year}</span>
                    <span className="text-[#dc2626] font-mono font-bold w-20">${estimate.estimate}B</span>
                    {index > 0 && (
                      <span className="text-red-400 text-sm">
                        +{(((estimate.estimate - costGrowth[index-1].estimate) / costGrowth[index-1].estimate) * 100).toFixed(0)}%
                      </span>
                    )}
                  </div>
                  <span className="text-gray-400 text-sm flex-1 ml-4">{estimate.description}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-lg font-semibold">Total Cost Growth</span>
                <span className="text-[#dc2626] text-xl font-bold">{costIncrease}%</span>
              </div>
              <p className="text-gray-300 text-sm">
                From $233B in 2001 to $1.7T in 2024. This is what happens when Congress and Pentagon 
                leaders don't hold contractors accountable for their promises.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Problems */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">F-35 Problems &amp; Failures</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              Despite costing $1.7 trillion, the F-35 suffers from hundreds of unresolved problems. 
              Many issues stem from the Pentagon's "concurrency" strategy — building aircraft while 
              still designing and testing them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problemsIssues.map((category, index) => (
                <div key={category.category} className="border border-[#2d3748] rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">{category.category} Issues</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    {category.issues.map((issue, issueIndex) => (
                      <li key={issueIndex}>• {issue}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Mission Readiness Crisis:</strong> F-35s are mission-ready 
                only 50-70% of the time vs 80%+ for older fighters. Complex maintenance requirements mean 
                pilots can't fly as much as needed, reducing combat effectiveness.
              </p>
            </div>
          </div>
        </section>

        {/* Alternative Aircraft Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">What Else Could $1.7 Trillion Buy?</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              For $1.7 trillion, the US could buy many alternative fighter fleets, or invest in completely 
              different priorities. The opportunity cost of the F-35 is massive.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Alternative Fighter Aircraft</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#2d3748]">
                      <th className="text-left py-3 text-white">Aircraft</th>
                      <th className="text-right py-3 text-white">Unit Cost</th>
                      <th className="text-right py-3 text-white">Quantity for $1.7T</th>
                      <th className="text-left py-3 text-white">Capabilities</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alternativeComparison.map((aircraft, index) => (
                      <tr key={aircraft.aircraft} className={`border-b border-[#2d3748] ${index === 0 ? 'bg-[#2d3748]' : ''}`}>
                        <td className="py-2 text-white font-semibold">{aircraft.aircraft}</td>
                        <td className={`py-2 text-right font-mono ${index === 0 ? 'text-[#dc2626]' : 'text-gray-300'}`}>
                          ${aircraft.cost}M
                        </td>
                        <td className="py-2 text-right font-mono text-gray-300">
                          {Math.floor(1700000 / aircraft.cost).toLocaleString()}
                        </td>
                        <td className="py-2 text-gray-400 text-xs">{aircraft.capabilities}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Military Alternatives</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• 4,857 F-16s (entire USAF fighter fleet 3x over)</li>
                  <li>• 2,266 F-18 Super Hornets (entire Navy fleet 10x over)</li>
                  <li>• 85 aircraft carriers (entire world's carriers 2x over)</li>
                  <li>• 566 Virginia-class submarines</li>
                  <li>• Complete nuclear weapons modernization 5x over</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Civilian Alternatives</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Free college tuition for 42 million students</li>
                  <li>• 8.5 million affordable homes</li>
                  <li>• Universal healthcare for 85 million Americans</li>
                  <li>• 340 gigawatts of renewable energy</li>
                  <li>• Entire US infrastructure rebuilt twice</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* International Partners */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">International F-35 Partners</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              Eight countries joined the F-35 program as partners, investing billions upfront in exchange 
              for aircraft orders and industrial participation. Several have reduced orders due to costs.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Country</th>
                    <th className="text-right py-3 text-white">Investment</th>
                    <th className="text-center py-3 text-white">Aircraft</th>
                    <th className="text-left py-3 text-white">Role/Status</th>
                  </tr>
                </thead>
                <tbody>
                  {internationalPartners.map((partner, index) => (
                    <tr key={partner.country} className="border-b border-[#2d3748]">
                      <td className="py-3 text-white font-semibold">{partner.country}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">${partner.investment}B</td>
                      <td className="py-3 text-center font-mono text-gray-300">{partner.aircraft}</td>
                      <td className="py-3 text-gray-400 text-sm">{partner.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Partners Souring:</strong> Turkey was ejected in 2019 
                over S-400 missile system purchases. Canada withdrew in 2022. Other partners have reduced 
                orders due to cost growth and persistent problems.
              </p>
            </div>
          </div>
        </section>

        {/* Too Big to Fail */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Too Big to Fail?</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Why F-35 Can't Be Cancelled</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Production across 45+ states creates political shield</li>
                  <li>• Lockheed Martin employs 100,000+ workers on program</li>
                  <li>• International partners have invested $7+ billion</li>
                  <li>• Cancellation penalties would cost tens of billions</li>
                  <li>• No alternative ready for production</li>
                  <li>• Pentagon committed to program publicly</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">The Sunk Cost Fallacy</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• $200+ billion already spent on development</li>
                  <li>• "We've come too far to turn back now"</li>
                  <li>• Admitting failure would be politically damaging</li>
                  <li>• Contractor jobs in key congressional districts</li>
                  <li>• Military services reluctant to admit mistakes</li>
                  <li>• Media often accepts Pentagon spin</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Political Engineering:</strong> Lockheed Martin deliberately 
                spread F-35 production across maximum congressional districts to make cancellation politically 
                impossible. This is how defense contractors ensure bad programs survive regardless of performance.
              </p>
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
              { href: '/pentagon-budget-breakdown', label: 'Pentagon Budget Breakdown' },
              { href: '/how-much-does-the-us-spend-on-military', label: 'US Military Spending' },
              { href: '/contractors', label: 'Defense Contractor Database' },
              { href: '/us-military-spending-vs-other-countries', label: 'US vs World Military Spending' },
              { href: '/cost-of-nuclear-weapons', label: 'Nuclear Weapons Costs' },
              { href: '/military-spending-by-country', label: 'Global Military Spending' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[#1a202c] hover:bg-[#2d3748] rounded-lg p-4 border border-[#2d3748] hover:border-[#dc2626] text-gray-300 hover:text-red-700 transition-colors"
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
              <li>• Government Accountability Office - F-35 Joint Strike Fighter Program Reports</li>
              <li>• Department of Defense - Selected Acquisition Reports (SARs)</li>
              <li>• Congressional Budget Office - F-35 Cost Analysis</li>
              <li>• Project on Government Oversight (POGO) - F-35 Investigations</li>
              <li>• Defense News - F-35 Program Coverage and Analysis</li>
              <li>• Lockheed Martin Corporation - Annual Reports and SEC Filings</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}