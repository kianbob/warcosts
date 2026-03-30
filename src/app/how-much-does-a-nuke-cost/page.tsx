import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does a Nuclear Weapon Cost? The $756 Billion Question | WarCosts',
  description: 'The US will spend $756 billion on nuclear weapons over the next decade. Each W88 warhead costs ~$10M. Trident missiles: $30M each. Sentinel ICBM: $96B and 81% over budget. Full nuclear cost breakdown.',
  keywords: ['nuclear weapon cost', 'how much does a nuke cost', 'nuclear warhead cost', 'Trident missile cost', 'Sentinel ICBM cost', 'nuclear arsenal cost', 'W88 warhead cost'],
  openGraph: {
    title: 'How Much Does a Nuclear Weapon Cost? The $756 Billion Question',
    description: 'The US spends $52 billion/year on nuclear weapons — enough to destroy civilization 10x over.',
    url: 'https://www.warcosts.org/how-much-does-a-nuke-cost',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much does a nuclear warhead cost?', a: 'A W88 thermonuclear warhead costs approximately $10 million each. The US maintains roughly 1,700 deployed warheads and 5,044 total. Newer warhead designs like the W93 are expected to cost significantly more due to manufacturing complexity and infrastructure rebuilding.' },
  { q: 'How much does a Trident missile cost?', a: 'A Trident II D5 submarine-launched ballistic missile costs approximately $30 million each. Each can carry up to 8 nuclear warheads and has a range of 7,000+ miles. The Navy maintains a stockpile of approximately 280 Trident missiles.' },
  { q: 'How much does the US spend on nuclear weapons per year?', a: 'The US spends approximately $52 billion per year on nuclear weapons maintenance, modernization, and operations. The Congressional Budget Office estimates $756 billion over the next decade (2025-2034), averaging $75.6 billion per year as modernization ramps up.' },
  { q: 'How much does the Sentinel ICBM cost?', a: 'The Sentinel ICBM program (replacing Minuteman III) is estimated at $96 billion — 81% over its original $53 billion estimate. This cost overrun triggered a Nunn-McCurdy breach, requiring Congressional recertification. Some analysts expect final costs to exceed $130 billion.' },
  { q: 'How many nuclear weapons does the US have?', a: 'The US has approximately 5,044 nuclear warheads total, of which roughly 1,700 are deployed on strategic delivery systems (ICBMs, submarine missiles, and bomber weapons). The remaining warheads are in reserve or awaiting dismantlement.' },
  { q: 'Could the US maintain deterrence with fewer nukes?', a: 'Many experts argue yes. A few hundred warheads on submarines — virtually undetectable — could guarantee devastating retaliation against any attacker. The current arsenal of 5,044 warheads is a Cold War relic that costs tens of billions annually to maintain. Even 500 warheads could destroy every major city in Russia or China.' },
]

const nuclearComponents = [
  { component: 'W88 Warhead (sub-launched)', cost: '~$10M each', quantity: '~400 deployed', delivery: 'Trident II D5 missile' },
  { component: 'W76-1/2 Warhead (sub-launched)', cost: '~$7M each', quantity: '~1,000 deployed', delivery: 'Trident II D5 missile' },
  { component: 'W87-1 Warhead (ICBM, new)', cost: '~$15M each (est.)', quantity: '400 planned', delivery: 'Sentinel ICBM' },
  { component: 'W80-4 Warhead (cruise missile)', cost: '~$12M each (est.)', quantity: '~500 planned', delivery: 'LRSO cruise missile' },
  { component: 'B61-12 Bomb (gravity)', cost: '~$28M each', quantity: '~400', delivery: 'B-2, B-21, F-35' },
  { component: 'Trident II D5 Missile', cost: '$30M each', quantity: '~280 missiles', delivery: 'Ohio/Columbia-class subs' },
]

const modernizationPrograms = [
  { program: 'Sentinel ICBM (LGM-35A)', cost: '$96B', original: '$53B', overrun: '81%', status: 'Nunn-McCurdy breach, under review' },
  { program: 'Columbia-class SSBN (12 subs)', cost: '$132B', original: '$100B', overrun: '32%', status: 'First hull under construction' },
  { program: 'B-21 Raider (nuclear-capable)', cost: '$80B+', original: '$55B', overrun: '45%+', status: 'Flight testing' },
  { program: 'Long-Range Standoff Weapon (LRSO)', cost: '$10B', original: '$7B', overrun: '43%', status: 'Development' },
  { program: 'W93 Warhead', cost: '$15B (est.)', original: 'TBD', overrun: 'N/A', status: 'Early design' },
  { program: 'NC3 Modernization', cost: '$20B+', original: 'N/A', overrun: 'N/A', status: 'Ongoing' },
]

export default function NukeCostPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Nuclear Weapon Cost' }]} />
        <ShareButtons title="How Much Does a Nuclear Weapon Cost?" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Does a Nuclear Weapon Cost?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$756 Billion Over the Next Decade</div>
            <div className="text-lg opacity-90">Congressional Budget Office estimate for US nuclear forces (2025-2034)</div>
          </div>
          <div className="bg-stone-700 text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$52 Billion Per Year</div>
            <div className="text-lg opacity-90">Annual cost just to keep the nuclear arsenal ready</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            A single nuclear warhead costs roughly <strong className="text-[#dc2626]">$10 million</strong>. A Trident
            missile to deliver it: <strong className="text-[#dc2626]">$30 million</strong>. The submarine that
            carries it: <strong className="text-[#dc2626]">$8.5 billion</strong>. Keeping the entire arsenal
            ready to destroy civilization costs <strong className="text-[#dc2626]">$52 billion per year</strong> —
            and it&apos;s going up. Enough to destroy everything, 10 times over.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { value: '$756B', label: 'Next decade (CBO estimate)', detail: 'Nuclear forces cost 2025-2034' },
              { value: '$52B/yr', label: 'Annual maintenance cost', detail: 'Keeping 5,044 warheads and delivery systems ready' },
              { value: '~1,700', label: 'Deployed warheads', detail: 'On ICBMs, submarines, and bomber bases' },
              { value: '5,044', label: 'Total warheads', detail: 'Deployed + reserve + awaiting dismantlement' },
              { value: '$96B', label: 'Sentinel ICBM program', detail: '81% over original budget — and climbing' },
              { value: '~$10M', label: 'Cost per W88 warhead', detail: 'Each one can destroy a city' },
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
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">What&apos;s in a Nuclear Weapon?</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-4">
              A &ldquo;nuclear weapon&rdquo; is really a system: warhead + delivery vehicle + submarine/silo/bomber.
              Here&apos;s what each component costs:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Component</th>
                    <th className="text-right py-3 text-white">Unit Cost</th>
                    <th className="text-center py-3 text-white">Quantity</th>
                    <th className="text-left py-3 text-white pl-4">Delivery System</th>
                  </tr>
                </thead>
                <tbody>
                  {nuclearComponents.map((c, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{c.component}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{c.cost}</td>
                      <td className="py-3 text-center text-gray-400 text-sm">{c.quantity}</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{c.delivery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Modernization: Over Budget, As Usual</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-6">
              The US is replacing its entire nuclear triad simultaneously — every ICBM, every submarine,
              every bomber. Every program is over budget.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Program</th>
                    <th className="text-right py-3 text-white">Current Est.</th>
                    <th className="text-right py-3 text-white">Original Est.</th>
                    <th className="text-right py-3 text-white">Overrun</th>
                    <th className="text-left py-3 text-white pl-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {modernizationPrograms.map((p, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{p.program}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{p.cost}</td>
                      <td className="py-3 text-right font-mono text-gray-400">{p.original}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{p.overrun}</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{p.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Sentinel ICBM Debacle</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The Sentinel ICBM — meant to replace the aging Minuteman III — is the poster child for
              nuclear cost overruns. Originally estimated at <strong className="text-white">$53 billion</strong>,
              the program ballooned to <strong className="text-[#dc2626]">$96 billion</strong> — an
              <strong className="text-[#dc2626]"> 81% overrun</strong> that triggered a Nunn-McCurdy breach,
              requiring the Secretary of Defense to personally recertify the program.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Many defense analysts expect the final cost to exceed <strong className="text-[#dc2626]">$130 billion</strong>.
              The program requires rebuilding 450 missile silos, new command centers, and thousands of miles
              of underground cables — all in remote areas of Montana, Wyoming, North Dakota, Nebraska, and Colorado.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Critics argue the entire land-based ICBM leg is unnecessary. Submarine-launched missiles are
              virtually undetectable and guarantee second-strike capability. Fixed silos, by contrast, are
              known targets that could be destroyed in a first strike — making them &ldquo;use it or lose it&rdquo;
              weapons that increase the risk of accidental nuclear war.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Enough to Destroy Civilization 10x Over</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The US maintains <strong className="text-[#dc2626]">5,044 nuclear warheads</strong>. Experts estimate
              that detonating just <strong className="text-white">100 warheads</strong> on major cities would trigger
              a nuclear winter that could collapse global agriculture and kill billions through famine.
              The current arsenal could destroy human civilization many times over.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              At <strong className="text-[#dc2626]">$52 billion per year</strong>, maintaining this arsenal costs:
            </p>
            <div className="space-y-3 mb-4">
              {[
                { item: 'More than the Department of Education budget', detail: '$82 billion (DOE) vs $52 billion (nukes)' },
                { item: 'More than the EPA, NASA, and FEMA combined', detail: '$12B + $25B + $9B = $46B vs $52B for nukes' },
                { item: '800,000 teacher salaries', detail: 'At $65K average — every year' },
                { item: 'Universal pre-K for every American child', detail: 'Estimated at $30-40 billion per year' },
                { item: 'Clean water for every person on Earth', detail: 'WHO estimates $28B/year needed globally' },
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
            <p className="text-gray-300 leading-relaxed">
              We spend $52 billion a year on weapons we can never use, designed to destroy a world we claim
              to be protecting. That&apos;s the nuclear paradox — and the nuclear price tag.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Full Cost Stack</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-4">
              What does it actually cost to put a nuclear warhead on target? Let&apos;s add it up for a
              submarine-launched weapon:
            </p>
            <div className="space-y-3">
              {[
                { item: 'W88 Warhead', cost: '$10M' },
                { item: 'Trident II D5 Missile', cost: '$30M' },
                { item: 'Share of Ohio-class submarine (1/20 missiles)', cost: '$100M' },
                { item: 'Share of annual sub operating costs', cost: '$15M' },
                { item: 'Share of NC3 command & control', cost: '$5M' },
                { item: 'Share of warhead maintenance (NNSA)', cost: '$3M/yr' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-stone-700 pb-2 last:border-b-0">
                  <span className="text-gray-300 text-sm">{item.item}</span>
                  <span className="text-[#dc2626] font-bold font-mono">{item.cost}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2 border-t border-stone-600">
                <span className="text-white font-bold">Total per deployed warhead</span>
                <span className="text-[#dc2626] font-bold font-mono text-lg">~$163M+</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              And that&apos;s just one warhead on one submarine. Multiply by 1,700 deployed warheads.
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
              { href: '/how-much-does-the-us-spend-on-nuclear-weapons', label: 'US Nuclear Weapons Spending' },
              { href: '/how-much-does-a-submarine-cost', label: 'Submarine Costs' },
              { href: '/how-much-does-a-bomber-cost', label: 'Bomber Costs' },
              { href: '/nuclear-arsenal', label: 'US Nuclear Arsenal' },
              { href: '/cost-overruns', label: 'Pentagon Cost Overruns' },
              { href: '/defense-budget', label: 'US Defense Budget' },
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
              <li>• Congressional Budget Office — &ldquo;Projected Costs of U.S. Nuclear Forces, 2025-2034&rdquo;</li>
              <li>• Government Accountability Office — Sentinel ICBM Nunn-McCurdy Review</li>
              <li>• National Nuclear Security Administration — FY2026 Budget Justification</li>
              <li>• Federation of American Scientists — Nuclear Notebook (2024)</li>
              <li>• Arms Control Association — US Nuclear Weapons Spending Factsheet</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Much Does a Nuclear Weapon Cost? The $756 Billion Question',
              description: 'The US will spend $756 billion on nuclear weapons over the next decade. Full cost breakdown.',
              url: 'https://www.warcosts.org/how-much-does-a-nuke-cost',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
