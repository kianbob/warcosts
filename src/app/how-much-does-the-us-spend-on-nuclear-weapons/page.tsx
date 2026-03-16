import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does the US Spend on Nuclear Weapons? $60+ Billion/Year | WarCosts',
  description: 'The US spends over $60 billion annually on nuclear weapons — maintaining 5,044 warheads, building new ICBMs, submarines, and bombers. Full cost breakdown of the nuclear arsenal.',
  keywords: ['US nuclear weapons cost', 'nuclear arsenal spending', 'nuclear weapons budget', 'how much do nuclear weapons cost', 'Sentinel ICBM cost', 'nuclear triad cost'],
  openGraph: {
    title: 'How Much Does the US Spend on Nuclear Weapons? $60+ Billion/Year',
    description: 'The US spends over $60 billion annually on nuclear weapons.',
    url: 'https://www.warcosts.org/how-much-does-the-us-spend-on-nuclear-weapons',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much does the US spend on nuclear weapons per year?', a: 'The US spends approximately $60-65 billion per year on nuclear weapons as of 2026. This includes the Department of Energy\'s National Nuclear Security Administration (NNSA) budget (~$25 billion), Pentagon nuclear delivery systems (~$30 billion), and nuclear command and control (~$7 billion).' },
  { q: 'How many nuclear weapons does the US have?', a: 'The US maintains approximately 5,044 nuclear warheads as of 2026, of which roughly 1,700 are deployed on strategic delivery systems. The remaining warheads are in storage or awaiting dismantlement.' },
  { q: 'How much will the nuclear modernization cost in total?', a: 'The 30-year nuclear modernization program (2020-2050) is estimated to cost $1.5-2 trillion in total. This includes new Sentinel ICBMs ($141B), Columbia-class submarines ($132B), B-21 bombers ($80B+), and new warhead designs.' },
  { q: 'What is the most expensive nuclear weapons program?', a: 'The Sentinel ICBM (replacing Minuteman III) is the most expensive single program at $141 billion, up from original estimates of $96 billion — a 46% cost overrun that breached the Nunn-McCurdy threshold. The Columbia-class submarine program is close behind at $132 billion for 12 boats.' },
  { q: 'How does US nuclear spending compare to other countries?', a: 'The US spends more on nuclear weapons than all other nuclear powers combined. Russia spends an estimated $10-15 billion, China $15 billion, the UK $8 billion, and France $6 billion annually. The US has 5,044 warheads vs. Russia\'s 5,580.' },
]

const spendingBreakdown = [
  { category: 'Warhead production & maintenance (NNSA)', amount: 25, percentage: 39, description: 'Designing, building, and maintaining nuclear warheads at Los Alamos, Sandia, Y-12, Pantex' },
  { category: 'Submarine force (Columbia-class + Ohio)', amount: 14, percentage: 22, description: 'Building new Columbia-class SSBNs and operating existing Ohio-class' },
  { category: 'ICBM force (Sentinel + Minuteman)', amount: 12, percentage: 19, description: 'Sentinel development + maintaining 400 Minuteman III missiles' },
  { category: 'Bomber force (B-21 + B-52)', amount: 7, percentage: 11, description: 'B-21 Raider production + B-52 upgrades for nuclear mission' },
  { category: 'Nuclear command & control (NC3)', amount: 4, percentage: 6, description: 'Satellite systems, early warning, presidential command links' },
  { category: 'Environmental cleanup', amount: 2, percentage: 3, description: 'Cleaning up contaminated Cold War production sites' },
]

const modernizationPrograms = [
  { program: 'Sentinel ICBM (LGM-35A)', cost: 141, replacing: 'Minuteman III', timeline: '2029-2075', status: 'Over budget, under review' },
  { program: 'Columbia-class SSBN', cost: 132, replacing: 'Ohio-class', timeline: '2031-2085', status: 'First hull under construction' },
  { program: 'B-21 Raider', cost: 80, replacing: 'B-2 Spirit', timeline: '2026-2070', status: 'Flight testing' },
  { program: 'W93 Warhead', cost: 15, replacing: 'W76', timeline: '2034+', status: 'Design phase' },
  { program: 'W87-1 Warhead', cost: 14, replacing: 'W78', timeline: '2030+', status: 'Development' },
  { program: 'Long-Range Standoff Weapon', cost: 10, replacing: 'ALCM', timeline: '2030+', status: 'Development' },
]

export default function NuclearWeaponsCostPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Nuclear Weapons Cost' }]} />
        <ShareButtons title="How Much Does the US Spend on Nuclear Weapons?" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Does the US Spend on Nuclear Weapons?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$60+ Billion / Year</div>
            <div className="text-lg opacity-90">Annual nuclear weapons spending (2026)</div>
          </div>
          <div className="bg-stone-700 text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$1.5-2 Trillion</div>
            <div className="text-lg opacity-90">30-year modernization cost (2020-2050)</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The United States spends over <strong className="text-[#dc2626]">$60 billion every year</strong> to maintain 
            and modernize its nuclear arsenal of <strong className="text-[#dc2626]">5,044 warheads</strong>. This includes 
            building entirely new ICBMs, submarines, and bombers in a modernization program estimated at 
            <strong className="text-[#dc2626]"> $1.5-2 trillion over 30 years</strong>. That&apos;s the cost of maintaining 
            the ability to destroy human civilization several times over.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { value: '5,044', label: 'Total warheads', detail: '1,700 deployed, rest in storage' },
              { value: '400', label: 'ICBMs (Minuteman III)', detail: 'In silos across MT, WY, ND, NE, CO' },
              { value: '14', label: 'Ballistic missile subs', detail: 'Ohio-class SSBNs, each with 20 Trident missiles' },
              { value: '46', label: 'Nuclear-capable bombers', detail: 'B-2 Spirit and B-52 Stratofortress' },
            ].map((stat, i) => (
              <div key={i} className="bg-stone-800 rounded-lg p-6 border border-stone-700">
                <div className="text-2xl font-bold text-[#dc2626] mb-2">{stat.value}</div>
                <div className="text-white text-lg mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Annual Spending Breakdown</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="space-y-4">
              {spendingBreakdown.map((item, i) => (
                <div key={i} className="border-b border-stone-700 pb-4 last:border-b-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-sm">{item.category}</span>
                    <span className="text-[#dc2626] font-bold">${item.amount}B</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-stone-700 rounded-full h-2 flex-1 mr-4">
                      <div className="bg-[#dc2626] h-2 rounded-full" style={{ width: `${item.percentage * 2.5}%` }} />
                    </div>
                    <span className="text-gray-400 text-sm">{item.percentage}%</span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Major Modernization Programs</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-6">
              The US is replacing all three legs of its nuclear triad simultaneously — the most expensive 
              nuclear undertaking since the Manhattan Project.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Program</th>
                    <th className="text-right py-3 text-white">Est. Cost</th>
                    <th className="text-left py-3 text-white pl-4">Replaces</th>
                    <th className="text-left py-3 text-white pl-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {modernizationPrograms.map((p, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{p.program}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">${p.cost}B</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{p.replacing}</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{p.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Case Against</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              Does America need 5,044 nuclear warheads? Experts across the political spectrum have argued that 
              a few hundred warheads — enough to guarantee devastating retaliation — provide the same deterrence 
              as thousands. The current arsenal could destroy every major city on Earth multiple times.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The $1.5-2 trillion modernization program is being built on Cold War assumptions about needing 
              a massive triad. A submarine-based deterrent alone — virtually undetectable — could provide 
              nuclear deterrence at a fraction of the cost. The Sentinel ICBM program alone is <Link href="/cost-overruns" className="text-[#dc2626] hover:underline">$45 billion over budget</Link> and 
              arguably unnecessary when submarines already guarantee second-strike capability.
            </p>
            <p className="text-gray-300 leading-relaxed">
              At $60+ billion per year, the nuclear arsenal costs more than the entire budgets of the 
              Department of Education ($82B), EPA ($12B), and NASA ($25B) combined. 
              That&apos;s the price of maintaining weapons we can never use.
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
              { href: '/nuclear-arsenal', label: 'US Nuclear Arsenal' },
              { href: '/us-military-budget-2026', label: '2026 Military Budget' },
              { href: '/compare/us-vs-russia-military', label: 'US vs Russia Military' },
              { href: '/cost-overruns', label: 'Pentagon Cost Overruns' },
              { href: '/analysis/nuclear-close-calls', label: 'Nuclear Close Calls' },
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
              <li>• Congressional Budget Office — &ldquo;Projected Costs of U.S. Nuclear Forces&rdquo; (2024)</li>
              <li>• National Nuclear Security Administration — FY2026 Budget Request</li>
              <li>• Federation of American Scientists — Nuclear Notebook</li>
              <li>• Arms Control Association — US Nuclear Weapons Factsheet</li>
              <li>• Government Accountability Office — Sentinel ICBM Cost Review</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Much Does the US Spend on Nuclear Weapons? $60+ Billion/Year',
              description: 'The US spends over $60 billion annually on nuclear weapons.',
              url: 'https://www.warcosts.org/how-much-does-the-us-spend-on-nuclear-weapons',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
