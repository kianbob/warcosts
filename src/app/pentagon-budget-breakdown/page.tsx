import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import RelatedArticles from '@/components/RelatedArticles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pentagon Budget Breakdown 2024: Where $886 Billion Goes | WarCosts',
  description: 'Complete breakdown of the $886 billion Pentagon budget: 30% operations, 25% personnel, 20% procurement, 15% R&D, 10% construction. See where every dollar goes.',
  keywords: ['Pentagon budget breakdown', 'defense budget breakdown', 'military budget breakdown', 'where does Pentagon money go', 'defense spending breakdown 2024'],
  openGraph: {
    title: 'Pentagon Budget Breakdown 2024: Where $886 Billion Goes',
    description: 'Complete breakdown of the $886 billion Pentagon budget and where every dollar goes.',
    url: 'https://warcosts.org/pentagon-budget-breakdown',
    type: 'article',
  },
}

/* ── Data ─────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'How is the Pentagon budget broken down?',
    a: 'The $886 billion Pentagon budget breaks down into five main categories: Operations & Maintenance (30%, $266B), Personnel (25%, $221B), Procurement (20%, $177B), Research & Development (15%, $133B), and Military Construction (10%, $89B).',
  },
  {
    q: 'What is the largest category in the Pentagon budget?',
    a: 'Operations & Maintenance is the largest category at $266 billion (30% of budget). This covers day-to-day operations including training, fuel, equipment maintenance, facility operations, and contracted services.',
  },
  {
    q: 'How much does the Pentagon spend on weapons?',
    a: 'The Pentagon spends approximately $310 billion annually on weapons and equipment: $177B on procurement (buying new weapons) and $133B on R&D (developing future weapons). This represents 35% of the total defense budget.',
  },
  {
    q: 'How much does the Pentagon spend on contractors?',
    a: 'Private contractors receive over 50% of Pentagon spending, approximately $450+ billion annually. This includes weapons manufacturing, services, logistics, IT systems, and maintenance contracts.',
  },
  {
    q: 'What does Pentagon personnel spending cover?',
    a: 'The $221 billion personnel budget covers active duty pay and benefits (1.3M troops), reserve pay (800K), military healthcare, housing allowances, family benefits, and retirement contributions.',
  },
  {
    q: 'How has the Pentagon budget changed over time?',
    a: 'The Pentagon budget has grown from $390B in 2000 to $886B in 2024. Major increases occurred during the Iraq/Afghanistan wars (2001-2011) and the current "great power competition" buildup (2018-present).',
  },
]

const budgetCategories2024 = [
  {
    category: 'Operations & Maintenance',
    amount: 266,
    percentage: 30,
    description: 'Day-to-day operations, training, fuel, equipment maintenance',
    subcategories: [
      { name: 'Base Operations', amount: 89, description: 'Running military bases worldwide' },
      { name: 'Equipment Maintenance', amount: 67, description: 'Keeping weapons systems operational' },
      { name: 'Training & Exercises', amount: 45, description: 'Military training and war games' },
      { name: 'Fuel & Energy', amount: 32, description: 'Fuel for vehicles, aircraft, ships' },
      { name: 'Contracted Services', amount: 33, description: 'Private contractor services' },
    ]
  },
  {
    category: 'Personnel',
    amount: 221,
    percentage: 25,
    description: 'Military pay, benefits, healthcare, housing',
    subcategories: [
      { name: 'Active Duty Pay', amount: 78, description: '1.3M active duty service members' },
      { name: 'Military Healthcare', amount: 56, description: 'TRICARE and military medicine' },
      { name: 'Reserve & Guard Pay', amount: 34, description: '800K reserve component troops' },
      { name: 'Housing & Subsistence', amount: 28, description: 'BAH, BAS, family housing' },
      { name: 'Retirement Benefits', amount: 25, description: 'Military retirement system contributions' },
    ]
  },
  {
    category: 'Procurement',
    amount: 177,
    percentage: 20,
    description: 'Buying new weapons, vehicles, equipment',
    subcategories: [
      { name: 'Aircraft', amount: 78, description: 'Fighter jets, helicopters, cargo planes' },
      { name: 'Ships & Submarines', amount: 34, description: 'Navy vessels and maintenance' },
      { name: 'Vehicles & Equipment', amount: 28, description: 'Tanks, trucks, communications gear' },
      { name: 'Missiles & Ammunition', amount: 23, description: 'Weapons and munitions' },
      { name: 'Other Equipment', amount: 14, description: 'Various military equipment' },
    ]
  },
  {
    category: 'Research & Development',
    amount: 133,
    percentage: 15,
    description: 'Developing new weapons and military technology',
    subcategories: [
      { name: 'Next-Gen Aircraft', amount: 45, description: 'Future fighter and bomber programs' },
      { name: 'Space & Cyber', amount: 28, description: 'Space Force and cyber warfare' },
      { name: 'Nuclear Weapons', amount: 22, description: 'Nuclear modernization programs' },
      { name: 'Hypersonics & AI', amount: 19, description: 'Advanced weapons technologies' },
      { name: 'Other R&D', amount: 19, description: 'Various research programs' },
    ]
  },
  {
    category: 'Military Construction',
    amount: 89,
    percentage: 10,
    description: 'Building and upgrading military facilities',
    subcategories: [
      { name: 'Base Infrastructure', amount: 34, description: 'Barracks, facilities, utilities' },
      { name: 'Family Housing', amount: 22, description: 'On-base housing for military families' },
      { name: 'Overseas Construction', amount: 18, description: 'Building facilities abroad' },
      { name: 'Special Projects', amount: 15, description: 'Classified and special facilities' },
    ]
  }
]

const majorPrograms = [
  { program: 'F-35 Fighter Jet', totalCost: 1700, annualCost: 78, status: 'Ongoing production', issues: 'Massive cost overruns, technical problems' },
  { program: 'Columbia-Class Submarines', totalCost: 132, annualCost: 14, status: 'Under construction', issues: 'Consuming entire Navy shipbuilding budget' },
  { program: 'B-21 Bomber', totalCost: 203, annualCost: 25, status: 'First flight 2023', issues: 'Costs rising, reduced quantities' },
  { program: 'Ground Based Strategic Deterrent', totalCost: 96, annualCost: 12, status: 'Development phase', issues: 'Nuclear weapon costs hidden from public' },
  { program: 'KC-46 Tanker', totalCost: 49, annualCost: 8, status: 'Problematic delivery', issues: 'Fuel system defects, Boeing issues' },
]

const contractorSpending = [
  { company: 'Lockheed Martin', amount: 78, percentage: 8.8, primaryProducts: 'F-35, missiles, space systems' },
  { company: 'Boeing', amount: 45, percentage: 5.1, primaryProducts: 'Aircraft, helicopters, weapons' },
  { company: 'Raytheon Technologies', amount: 43, percentage: 4.9, primaryProducts: 'Missiles, radar, electronics' },
  { company: 'General Dynamics', amount: 38, percentage: 4.3, primaryProducts: 'Ships, submarines, vehicles' },
  { company: 'Northrop Grumman', amount: 35, percentage: 4.0, primaryProducts: 'B-21 bomber, cyber, space' },
  { company: 'Other Contractors', amount: 247, percentage: 27.9, primaryProducts: 'Services, IT, logistics, maintenance' },
]

const relatedArticles = [
  { slug: 'pentagon-waste', title: 'Pentagon Waste: $60 Billion Annually', desc: 'How the military-industrial complex burns money' },
  { slug: 'revolving-door', title: 'The Military-Industrial Revolving Door', desc: 'How contractors capture Pentagon spending' },
  { slug: 'cost-plus-contracts', title: 'Cost-Plus Contracts: Guaranteed Profits', desc: 'Why defense contractors never lose money' },
  { slug: 'pentagon-audit-failure', title: 'The Pentagon Has Never Passed an Audit', desc: 'Trillions in unaccounted spending' },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function PentagonBudgetBreakdownPage() {
  const yearlySpending = loadData('yearly-spending.json') as Array<{
    year: number
    amountBillions: number
    president: string
  }>

  const recentYears = yearlySpending.slice(-10)
  const budgetGrowth = ((recentYears[recentYears.length - 1].amountBillions - recentYears[0].amountBillions) / recentYears[0].amountBillions * 100).toFixed(1)

  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Pentagon Budget Breakdown' }]} />
        <ShareButtons title="Pentagon Budget Breakdown 2024: Where $886 Billion Goes" />

        {/* Hero Answer - Featured Snippet Target */}
        <header className="mb-12 bg-[#1a202c] rounded-lg p-8 border border-[#2d3748]">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            Pentagon Budget Breakdown 2024
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$886 Billion</div>
            <div className="text-lg opacity-90">Total Pentagon budget for 2024</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
            <div className="bg-[#991b1b] text-white p-3 rounded text-center">
              <div className="text-lg font-bold">30%</div>
              <div className="text-xs">Operations</div>
            </div>
            <div className="bg-[#991b1b] text-white p-3 rounded text-center">
              <div className="text-lg font-bold">25%</div>
              <div className="text-xs">Personnel</div>
            </div>
            <div className="bg-[#991b1b] text-white p-3 rounded text-center">
              <div className="text-lg font-bold">20%</div>
              <div className="text-xs">Procurement</div>
            </div>
            <div className="bg-[#991b1b] text-white p-3 rounded text-center">
              <div className="text-lg font-bold">15%</div>
              <div className="text-xs">R&amp;D</div>
            </div>
            <div className="bg-[#991b1b] text-white p-3 rounded text-center">
              <div className="text-lg font-bold">10%</div>
              <div className="text-xs">Construction</div>
            </div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The Pentagon's <strong className="text-[#dc2626]">$886 billion budget</strong> breaks down into five main categories: 
            <strong className="text-[#dc2626]">Operations & Maintenance (30%)</strong>, Personnel (25%), Procurement (20%), 
            Research & Development (15%), and Military Construction (10%). Over half goes to <strong className="text-[#dc2626]">private contractors</strong>.
          </p>
        </header>

        {/* Budget Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Budget Categories Overview</h2>
          <div className="space-y-6">
            {budgetCategories2024.map((category, index) => (
              <div key={category.category} className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                  <div className="flex gap-4 text-sm">
                    <span className="text-[#dc2626] font-bold">${category.amount}B</span>
                    <span className="text-gray-300">{category.percentage}%</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="bg-[#2d3748] rounded-full h-3">
                    <div
                      className="bg-[#dc2626] h-3 rounded-full"
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.subcategories.map((sub, subIndex) => (
                    <div key={subIndex} className="bg-[#2d3748] rounded p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white text-sm font-semibold">{sub.name}</span>
                        <span className="text-[#dc2626] text-sm font-mono">${sub.amount}B</span>
                      </div>
                      <p className="text-gray-400 text-xs">{sub.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Major Weapon Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Major Weapon Programs</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              These massive programs consume hundreds of billions over their lifetimes. Most experience 
              significant cost overruns and schedule delays, but are "too big to cancel" once started.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Program</th>
                    <th className="text-right py-3 text-white">Total Cost</th>
                    <th className="text-right py-3 text-white">Annual</th>
                    <th className="text-center py-3 text-white">Status</th>
                    <th className="text-left py-3 text-white">Issues</th>
                  </tr>
                </thead>
                <tbody>
                  {majorPrograms.map((program, index) => (
                    <tr key={program.program} className="border-b border-[#2d3748]">
                      <td className="py-3 text-white font-semibold">{program.program}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">${program.totalCost}B</td>
                      <td className="py-3 text-right font-mono text-gray-300">${program.annualCost}B</td>
                      <td className="py-3 text-center text-gray-300 text-sm">{program.status}</td>
                      <td className="py-3 text-gray-400 text-sm">{program.issues}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Cost Growth Pattern:</strong> Major weapons programs 
                typically exceed their original budgets by 20-50%. The F-35 alone has grown from $233B 
                to $1.7T lifetime cost — a 630% increase from initial estimates.
              </p>
            </div>
          </div>
        </section>

        {/* Contractor Spending */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Where the Money Goes: Top Contractors</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              Over 50% of the Pentagon budget flows to private contractors. The top 5 defense contractors 
              alone receive over $240 billion annually — more than most countries' entire government budgets.
            </p>
            <div className="space-y-4">
              {contractorSpending.map((contractor, index) => (
                <div key={contractor.company} className="border-b border-[#2d3748] pb-4 last:border-b-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{contractor.company}</span>
                    <div className="flex gap-4">
                      <span className="text-[#dc2626] font-mono">${contractor.amount}B</span>
                      <span className="text-gray-400 text-sm">{contractor.percentage}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-[#2d3748] rounded-full h-2 flex-1 mr-4">
                      <div
                        className="bg-[#dc2626] h-2 rounded-full"
                        style={{ width: `${contractor.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{contractor.primaryProducts}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <h4 className="text-white font-semibold mb-2">The Revolving Door</h4>
              <p className="text-gray-300 text-sm">
                Over 500 former Pentagon officials now work for defense contractors, while 400+ contractor 
                executives have taken Pentagon jobs. This "revolving door" ensures continued spending growth 
                regardless of national security needs.
              </p>
            </div>
          </div>
        </section>

        {/* Budget Growth Over Time */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Pentagon Budget Growth (2015-2024)</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              Pentagon spending has grown by {budgetGrowth}% over the past decade, far exceeding inflation. 
              This growth is driven by "great power competition" with China and Russia, plus continued War on Terror operations.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d3748]">
                    <th className="text-left py-3 text-white">Year</th>
                    <th className="text-right py-3 text-white">Budget</th>
                    <th className="text-right py-3 text-white">Change</th>
                    <th className="text-left py-3 text-white">President</th>
                    <th className="text-left py-3 text-white">Key Drivers</th>
                  </tr>
                </thead>
                <tbody>
                  {recentYears.map((year, index) => {
                    const prevYear = index > 0 ? recentYears[index - 1] : null
                    const change = prevYear ? 
                      ((year.amountBillions - prevYear.amountBillions) / prevYear.amountBillions * 100).toFixed(1) : 
                      '0.0'
                    
                    const drivers = year.year === 2015 ? 'ISIS operations' :
                                  year.year === 2016 ? 'Modernization begins' :
                                  year.year === 2017 ? 'Trump military buildup' :
                                  year.year === 2018 ? 'Great power competition' :
                                  year.year === 2019 ? 'Space Force creation' :
                                  year.year === 2020 ? 'China/Russia competition' :
                                  year.year === 2021 ? 'Afghan withdrawal costs' :
                                  year.year === 2022 ? 'Ukraine support' :
                                  year.year === 2023 ? 'Inflation, China buildup' :
                                  year.year === 2024 ? 'Record peacetime spending' : ''
                    
                    return (
                      <tr key={year.year} className="border-b border-[#2d3748]">
                        <td className="py-2 text-white">{year.year}</td>
                        <td className="py-2 text-right font-mono text-[#dc2626]">${year.amountBillions}B</td>
                        <td className={`py-2 text-right font-mono text-sm ${parseFloat(change) > 0 ? 'text-red-400' : 'text-green-400'}`}>
                          {parseFloat(change) > 0 ? '+' : ''}{change}%
                        </td>
                        <td className="py-2 text-gray-300 text-sm">{year.president}</td>
                        <td className="py-2 text-gray-400 text-sm">{drivers}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Hidden Costs */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Hidden Military Budget</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <p className="text-gray-300 mb-6">
              The $886 billion Pentagon budget doesn't include all military-related spending. When including 
              nuclear weapons, veteran care, homeland security, and war debt interest, total military spending 
              approaches $1.4 trillion annually.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Pentagon Budget</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Base Defense Budget</span>
                    <span className="text-[#dc2626]">$842B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Overseas Operations</span>
                    <span className="text-[#dc2626]">$44B</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t border-[#2d3748] pt-2">
                    <span className="text-white">Pentagon Total</span>
                    <span className="text-[#dc2626]">$886B</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Other Military Costs</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Veterans Affairs</span>
                    <span className="text-gray-300">$325B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Homeland Security</span>
                    <span className="text-gray-300">$88B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nuclear Weapons (DOE)</span>
                    <span className="text-gray-300">$51B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>War Debt Interest</span>
                    <span className="text-gray-300">$85B</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t border-[#2d3748] pt-2">
                    <span className="text-white">True Military Total</span>
                    <span className="text-[#dc2626]">~$1.4T</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pentagon Waste */}
        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Pentagon Waste &amp; Audit Failures</h2>
          <div className="bg-[#1a202c] rounded-lg p-6 border border-[#2d3748]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Audit Failures</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Pentagon has <strong>never passed an audit</strong></li>
                  <li>• Failed its 6th consecutive audit in 2023</li>
                  <li>• $3.8 trillion in "unsupported" adjustments since 1998</li>
                  <li>• Cannot account for 60% of its assets</li>
                  <li>• 1,600+ internal auditors cannot track spending</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Notable Waste Examples</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• $43 million for a gas station in Afghanistan</li>
                  <li>• $640 toilet seats and $435 hammers (1980s)</li>
                  <li>• $28 million for camouflage that doesn't work</li>
                  <li>• $1.2 billion for canceled programs annually</li>
                  <li>• $60+ billion estimated annual waste</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#2d3748] rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#dc2626]">Accountability Crisis:</strong> The Pentagon is the only major 
                federal agency that cannot pass an audit. Congressional attempts to impose fiscal discipline are 
                routinely ignored, with cost overruns treated as normal business practice.
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
              { href: '/how-much-does-the-us-spend-on-military', label: 'US Military Spending Overview' },
              { href: '/cost-of-f35', label: 'F-35 Fighter Program Costs' },
              { href: '/us-military-spending-vs-other-countries', label: 'US vs World Military Spending' },
              { href: '/contractors', label: 'Defense Contractor Database' },
              { href: '/cost-of-nuclear-weapons', label: 'Nuclear Weapons Spending' },
              { href: '/military-spending-by-country', label: 'Global Military Spending' },
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
              <li>• Department of Defense - Financial Management and Budget Reports</li>
              <li>• Government Accountability Office - Defense Budget Analysis</li>
              <li>• Congressional Budget Office - "The Budget and Economic Outlook"</li>
              <li>• National Defense Authorization Acts (2020-2024)</li>
              <li>• Defense Contract Audit Agency Reports</li>
              <li>• Project on Government Oversight (POGO) - Defense Contractor Analysis</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}