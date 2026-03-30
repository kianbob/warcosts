import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does a Tank Cost? The M1 Abrams at $10M | WarCosts',
  description: 'The M1A2 SEPv3 Abrams tank costs $10 million per unit, gets 0.6 mpg, and costs $2,500 per mile to operate. Full cost breakdown of the world\'s most expensive main battle tank.',
  keywords: ['tank cost', 'how much does a tank cost', 'M1 Abrams cost', 'Abrams tank price', 'battle tank cost', 'M1A2 cost'],
  openGraph: {
    title: 'How Much Does a Tank Cost? The M1 Abrams at $10M',
    description: 'The M1A2 SEPv3 Abrams costs $10 million per tank and $2,500 per mile to operate.',
    url: 'https://www.warcosts.org/how-much-does-a-tank-cost',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much does an M1 Abrams tank cost?', a: 'The latest M1A2 SEPv3 Abrams costs approximately $10 million per tank. Earlier variants cost less: the original M1 (1980) cost $780K ($2.8M in 2024 dollars), while the M1A1 costs roughly $6 million in upgraded form.' },
  { q: 'How much does it cost to operate a tank per mile?', a: 'Operating an M1 Abrams costs approximately $2,500 per mile when you factor in fuel (0.6 mpg on a gas turbine engine), maintenance, crew, and logistics support. The tank burns 10 gallons of fuel per mile at highway speed.' },
  { q: 'How many Abrams tanks does the US have?', a: 'The US Army has approximately 2,509 M1 Abrams tanks in active service, with thousands more in storage. The total fleet includes M1A1 and M1A2 variants across active duty, National Guard, and Marine Corps units.' },
  { q: 'How does the Abrams compare to Russian tanks?', a: 'The Abrams ($10M) costs roughly 2x a Russian T-90M ($4.5M) and 4x a Chinese Type 99 ($2.5M). However, Abrams has significantly better crew survivability, sensors, and fire control. In head-to-head encounters in Iraq, Abrams destroyed T-72s with zero losses.' },
  { q: 'What happened to the Abrams sent to Ukraine?', a: 'The US sent 31 M1A1 Abrams to Ukraine in 2023-2024 at a cost of roughly $400 million. Most were damaged or destroyed by Russian drones and anti-tank missiles, leading Ukraine to withdraw them from frontline service. The $400M bought less than a year of use.' },
  { q: 'Why does the Abrams get such terrible fuel economy?', a: 'The Abrams uses a Honeywell AGT1500 gas turbine engine — essentially a jet engine. It produces 1,500 hp but drinks fuel at 0.6 miles per gallon. A single tank needs a fuel tanker truck just for itself during extended operations.' },
]

const tankComparison = [
  { name: 'M1A2 SEPv3 Abrams', country: 'USA', cost: '$10M', weight: '73.6 tons', crew: 4, engine: '1,500 hp turbine' },
  { name: 'Leopard 2A7+', country: 'Germany', cost: '$8.5M', weight: '67 tons', crew: 4, engine: '1,500 hp diesel' },
  { name: 'Challenger 3', country: 'UK', cost: '$7M', weight: '66 tons', crew: 4, engine: '1,200 hp diesel' },
  { name: 'T-90M Proryv', country: 'Russia', cost: '$4.5M', weight: '48 tons', crew: 3, engine: '1,130 hp diesel' },
  { name: 'Type 99A', country: 'China', cost: '$2.5M', weight: '58 tons', crew: 3, engine: '1,500 hp diesel' },
  { name: 'Merkava Mk 4', country: 'Israel', cost: '$6M', weight: '65 tons', crew: 4, engine: '1,500 hp diesel' },
  { name: 'K2 Black Panther', country: 'South Korea', cost: '$8.5M', weight: '55 tons', crew: 3, engine: '1,500 hp diesel' },
]

const tankHistory = [
  { era: 'WWII (1943)', tank: 'M4 Sherman', cost: '$50,000', costToday: '$850K', weight: '33 tons' },
  { era: '1950s', tank: 'M48 Patton', cost: '$200,000', costToday: '$2.2M', weight: '50 tons' },
  { era: '1960s', tank: 'M60 Patton', cost: '$480,000', costToday: '$4.2M', weight: '52 tons' },
  { era: '1980', tank: 'M1 Abrams (original)', cost: '$780,000', costToday: '$2.8M', weight: '60 tons' },
  { era: '2000s', tank: 'M1A2 SEP', cost: '$6.2M', costToday: '$8M', weight: '68 tons' },
  { era: '2020s', tank: 'M1A2 SEPv3', cost: '$10M', costToday: '$10M', weight: '73.6 tons' },
]

export default function TankCostPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Tank Cost' }]} />
        <ShareButtons title="How Much Does a Tank Cost?" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Does a Tank Cost?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$10 Million Per Tank</div>
            <div className="text-lg opacity-90">M1A2 SEPv3 Abrams — America&apos;s main battle tank</div>
          </div>
          <div className="bg-stone-700 text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$2,500 Per Mile to Operate</div>
            <div className="text-lg opacity-90">0.6 miles per gallon — a jet engine on tracks</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The M1A2 SEPv3 Abrams costs <strong className="text-[#dc2626]">$10 million</strong> per tank, gets
            <strong className="text-[#dc2626]"> 0.6 miles per gallon</strong>, and costs
            <strong className="text-[#dc2626]"> $2,500 per mile</strong> to operate. Tank costs have increased
            <strong className="text-[#dc2626]"> 200x</strong> since the WWII Sherman ($50K). The US maintains
            2,509 Abrams in service — and the 31 sent to Ukraine were mostly destroyed within months.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { value: '$10M', label: 'Cost per M1A2 SEPv3', detail: 'Most expensive variant of America\'s main battle tank' },
              { value: '2,509', label: 'Abrams in active service', detail: 'Plus thousands more in storage at Sierra Army Depot' },
              { value: '0.6 mpg', label: 'Fuel economy', detail: 'Gas turbine burns 10 gallons per mile' },
              { value: '73.6 tons', label: 'Combat weight', detail: 'So heavy many bridges can\'t support it' },
              { value: '$2,500/mi', label: 'Operating cost per mile', detail: 'Fuel, maintenance, crew, logistics' },
              { value: '4', label: 'Crew members', detail: 'Commander, gunner, loader, driver' },
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
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">World Tank Price Comparison</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Tank</th>
                    <th className="text-left py-3 text-white">Country</th>
                    <th className="text-right py-3 text-white">Cost</th>
                    <th className="text-right py-3 text-white">Weight</th>
                    <th className="text-center py-3 text-white">Crew</th>
                  </tr>
                </thead>
                <tbody>
                  {tankComparison.map((t, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{t.name}</td>
                      <td className="py-3 text-gray-400 text-sm">{t.country}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{t.cost}</td>
                      <td className="py-3 text-right text-gray-400">{t.weight}</td>
                      <td className="py-3 text-center text-gray-400">{t.crew}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Note: The Abrams costs 2x the T-90 and 4x the Type 99. US tanks prioritize crew survivability
              and sensor technology over cost efficiency.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Tank Costs Through History: 200x Increase</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-4">
              From the $50,000 Sherman to the $10 million Abrams — a <strong className="text-[#dc2626]">200x increase</strong> in
              nominal cost. Even adjusted for inflation, tanks have gotten 12x more expensive.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Era</th>
                    <th className="text-left py-3 text-white">Tank</th>
                    <th className="text-right py-3 text-white">Cost (then)</th>
                    <th className="text-right py-3 text-white">Cost (2024$)</th>
                    <th className="text-right py-3 text-white">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {tankHistory.map((t, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-gray-400 text-sm">{t.era}</td>
                      <td className="py-3 text-white font-semibold text-sm">{t.tank}</td>
                      <td className="py-3 text-right font-mono text-gray-400">{t.cost}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{t.costToday}</td>
                      <td className="py-3 text-right text-gray-400">{t.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Fuel Problem</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The Abrams runs on a Honeywell AGT1500 gas turbine — essentially a helicopter engine strapped
              to a tank. It produces 1,500 horsepower but drinks fuel at a catastrophic rate:
              <strong className="text-[#dc2626]"> 0.6 miles per gallon</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[
                { stat: '500 gallons', detail: 'Fuel tank capacity' },
                { stat: '300 miles', detail: 'Maximum range on a full tank' },
                { stat: '10 gal/mile', detail: 'Cross-country fuel consumption' },
                { stat: '8 gal/hour', detail: 'Fuel burned just idling' },
              ].map((item, i) => (
                <div key={i} className="bg-stone-700 rounded-lg p-4">
                  <div className="text-[#dc2626] font-bold font-mono mb-1">{item.stat}</div>
                  <div className="text-gray-400 text-sm">{item.detail}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              In practice, each Abrams needs its own fuel truck during sustained operations. An armored
              brigade of 87 tanks requires a fuel convoy that itself becomes a target. The logistics
              tail of keeping Abrams running is one of the US military&apos;s biggest vulnerabilities.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Ukraine: $400M in Destroyed Abrams</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              In 2023-2024, the US sent <strong className="text-white">31 M1A1 Abrams tanks</strong> to Ukraine
              at a cost of roughly <strong className="text-[#dc2626]">$400 million</strong>. The tanks were supposed
              to be a game-changer. Instead, they became a cautionary tale about modern warfare.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Russian FPV drones costing <strong className="text-[#dc2626]">$500-$2,000</strong> each proved devastatingly
              effective against $10 million tanks. Multiple Abrams were destroyed or damaged by drones,
              anti-tank missiles, and mines. Ukraine eventually pulled them from the front lines to preserve
              the surviving vehicles.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The lesson: a $500 drone can destroy a $10 million tank. The cost-exchange ratio — 20,000:1 in
              the drone&apos;s favor — raises fundamental questions about the future of heavy armor in warfare.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Are Tanks Obsolete?</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The wars in Ukraine and Gaza have reignited the debate about whether tanks still make sense.
              Critics point to the Abrams experience in Ukraine and the devastating losses of Israeli Merkava
              tanks in Gaza to argue that cheap drones and ATGMs have made the $10 million tank a dinosaur.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Defenders argue tanks still provide irreplaceable mobile firepower and psychological impact.
              But even the US Army is hedging its bets — the next-generation tank program
              emphasizes lighter weight, active protection systems, and optionally-manned operation.
              The era of the 70-ton behemoth may be ending.
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
              { href: '/how-much-does-a-missile-cost', label: 'Missile Costs' },
              { href: '/how-much-does-a-drone-cost', label: 'Military Drone Costs' },
              { href: '/weapons', label: 'US Weapons Systems' },
              { href: '/military-aid', label: 'US Military Aid' },
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
              <li>• Congressional Research Service — &ldquo;M1 Abrams Tank: Background and Issues&rdquo; (2024)</li>
              <li>• Government Accountability Office — Ground Combat Vehicle Cost Assessment</li>
              <li>• International Institute for Strategic Studies — The Military Balance</li>
              <li>• US Army — Abrams Program Office Data</li>
              <li>• Defense News — Ukraine Abrams Deployment Analysis</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Much Does a Tank Cost? The M1 Abrams at $10M',
              description: 'The M1A2 SEPv3 Abrams costs $10 million per tank and $2,500 per mile to operate.',
              url: 'https://www.warcosts.org/how-much-does-a-tank-cost',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
