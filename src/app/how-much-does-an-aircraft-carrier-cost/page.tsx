import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does an Aircraft Carrier Cost? $13 Billion (and Counting) | WarCosts',
  description: 'A single Gerald R. Ford-class aircraft carrier costs $13.3 billion to build and $25+ billion over its 50-year lifespan. Full breakdown of aircraft carrier costs, crew, aircraft, and what else that money could buy.',
  keywords: ['aircraft carrier cost', 'how much does an aircraft carrier cost', 'Gerald R Ford class cost', 'USS Ford cost', 'carrier strike group cost', 'navy carrier cost'],
  openGraph: {
    title: 'How Much Does an Aircraft Carrier Cost? $13 Billion (and Counting)',
    description: 'A single aircraft carrier costs $13.3 billion to build — and $25+ billion over its lifetime.',
    url: 'https://www.warcosts.org/how-much-does-an-aircraft-carrier-cost',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much does an aircraft carrier cost to build?', a: 'The newest Gerald R. Ford-class aircraft carrier costs approximately $13.3 billion to build. The previous Nimitz-class carriers cost about $8.5 billion each (in 2024 dollars). These are the most expensive warships ever constructed.' },
  { q: 'How much does it cost to operate an aircraft carrier per year?', a: 'Operating an aircraft carrier costs approximately $4.5 billion per year, including crew salaries, fuel, aircraft operations, maintenance, and support ships. Over a 50-year lifespan, total lifecycle cost exceeds $25 billion per carrier.' },
  { q: 'How many aircraft carriers does the US have?', a: 'The US Navy operates 11 aircraft carriers — 10 Nimitz-class and 1 Ford-class (USS Gerald R. Ford). This is more than every other country combined. The next largest carrier fleet is the UK with 2.' },
  { q: 'How many people serve on an aircraft carrier?', a: 'A Ford-class carrier has a crew of about 4,500 sailors, including the ship\'s company (~2,600) and the air wing (~1,800). It\'s essentially a floating city with its own hospital, post office, and power plant.' },
  { q: 'What aircraft does a carrier carry?', a: 'A modern US carrier typically carries 75+ aircraft, including F/A-18 Super Hornets, F-35C Lightning IIs, EA-18G Growlers (electronic warfare), E-2D Hawkeyes (early warning), and MH-60 helicopters.' },
  { q: 'What is a carrier strike group?', a: 'A carrier strike group (CSG) includes the carrier plus 5-7 escort vessels: 1-2 cruisers, 2-3 destroyers, a submarine, and a supply ship. The total cost of a CSG exceeds $25 billion in ships alone, plus $10+ billion annually to operate.' },
]

const carrierHistory = [
  { era: 'WWII (1943)', class: 'Essex-class', cost: '$70M', costToday: '$1.2B', crew: '3,400', aircraft: '90-100' },
  { era: '1950s', class: 'Forrestal-class', cost: '$218M', costToday: '$2.4B', crew: '4,100', aircraft: '80-90' },
  { era: '1960s', class: 'Kitty Hawk-class', cost: '$265M', costToday: '$2.6B', crew: '4,600', aircraft: '80' },
  { era: '1970s', class: 'Nimitz-class (early)', cost: '$1.8B', costToday: '$5.0B', crew: '5,600', aircraft: '85-90' },
  { era: '2000s', class: 'Nimitz-class (late)', cost: '$6.2B', costToday: '$8.5B', crew: '5,200', aircraft: '85-90' },
  { era: '2017', class: 'Gerald R. Ford-class', cost: '$13.3B', costToday: '$13.3B', crew: '4,500', aircraft: '75+' },
]

const strikeGroupComposition = [
  { vessel: 'Aircraft Carrier', quantity: '1', cost: '$13.3B', role: 'Air power projection, 75+ aircraft' },
  { vessel: 'Ticonderoga-class Cruiser', quantity: '1-2', cost: '$1.8B each', role: 'Air defense, Aegis missile system' },
  { vessel: 'Arleigh Burke-class Destroyer', quantity: '2-3', cost: '$2.2B each', role: 'Multi-mission: anti-air, anti-sub, strike' },
  { vessel: 'Virginia-class Submarine', quantity: '1', cost: '$3.4B', role: 'Anti-submarine warfare, intelligence' },
  { vessel: 'Supply Ship', quantity: '1', cost: '$700M', role: 'Fuel, ammunition, provisions' },
]

const opportunityCost = [
  { item: 'Teacher salaries', quantity: '200,000', detail: 'Enough teachers for every school in California — for a year' },
  { item: 'Homes built', quantity: '32,000', detail: 'At $400K average, an entire city\'s worth of housing' },
  { item: 'Full college scholarships', quantity: '260,000', detail: 'At $50K per scholarship' },
  { item: 'Clean water projects', quantity: '1,300', detail: 'Providing water to 130 million people globally' },
  { item: 'Community health centers', quantity: '5,300', detail: 'At $2.5M each, transforming rural healthcare' },
]

export default function AircraftCarrierCostPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Aircraft Carrier Cost' }]} />
        <ShareButtons title="How Much Does an Aircraft Carrier Cost?" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Does an Aircraft Carrier Cost?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$13.3 Billion Per Ship</div>
            <div className="text-lg opacity-90">Gerald R. Ford-class — the most expensive warship ever built</div>
          </div>
          <div className="bg-stone-700 text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$25+ Billion Lifecycle Cost</div>
            <div className="text-lg opacity-90">Total cost per carrier over a 50-year lifespan</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            A single US aircraft carrier costs <strong className="text-[#dc2626]">$13.3 billion</strong> to build and
            over <strong className="text-[#dc2626]">$25 billion</strong> across its 50-year lifespan. The Navy
            operates <strong className="text-[#dc2626]">11 carriers</strong> — more than every other country combined.
            These are floating cities of war, each carrying 4,500 sailors and 75+ aircraft. One carrier costs
            the same as 200,000 teacher salaries or 32,000 homes.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { value: '$13.3B', label: 'Cost to build (Ford-class)', detail: 'Originally estimated at $10.5B — 27% over budget' },
              { value: '$4.5B/yr', label: 'Annual operating cost', detail: 'Crew, fuel, aircraft, maintenance, escorts' },
              { value: '4,500+', label: 'Crew members', detail: 'Ship\'s company + air wing personnel' },
              { value: '75+', label: 'Aircraft carried', detail: 'Fighters, electronic warfare, early warning, helos' },
              { value: '11', label: 'Active US carriers', detail: 'More than all other nations combined' },
              { value: '50 years', label: 'Expected lifespan', detail: '$25B+ total lifecycle cost per carrier' },
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
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">History of Carrier Costs</h2>
          <p className="text-gray-300 mb-4">
            Aircraft carrier costs have increased <strong className="text-[#dc2626]">190x</strong> since World War II —
            from $70 million for an Essex-class to $13.3 billion for the Ford-class. Even adjusted for inflation,
            costs have risen over 10x.
          </p>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Era</th>
                    <th className="text-left py-3 text-white">Class</th>
                    <th className="text-right py-3 text-white">Cost (then)</th>
                    <th className="text-right py-3 text-white">Cost (2024$)</th>
                    <th className="text-right py-3 text-white">Crew</th>
                  </tr>
                </thead>
                <tbody>
                  {carrierHistory.map((c, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-gray-400 text-sm">{c.era}</td>
                      <td className="py-3 text-white font-semibold text-sm">{c.class}</td>
                      <td className="py-3 text-right font-mono text-gray-400">{c.cost}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{c.costToday}</td>
                      <td className="py-3 text-right text-gray-400">{c.crew}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">What&apos;s in a Carrier Strike Group?</h2>
          <p className="text-gray-300 mb-4">
            An aircraft carrier never sails alone. It&apos;s the centerpiece of a <strong className="text-white">carrier strike group (CSG)</strong> —
            a flotilla of 5-7 warships that together represent over <strong className="text-[#dc2626]">$25 billion</strong> in
            hardware and cost <strong className="text-[#dc2626]">$10+ billion per year</strong> to operate.
          </p>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Vessel</th>
                    <th className="text-center py-3 text-white">Qty</th>
                    <th className="text-right py-3 text-white">Unit Cost</th>
                    <th className="text-left py-3 text-white pl-4">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {strikeGroupComposition.map((v, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{v.vessel}</td>
                      <td className="py-3 text-center text-gray-400">{v.quantity}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{v.cost}</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{v.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Floating Cities of War</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              A Ford-class carrier is a <strong className="text-white">self-contained city</strong>. At 1,106 feet long
              and displacing 100,000 tons, it&apos;s one of the largest moving objects humans have ever built. It has:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Two nuclear reactors — enough power for a small city, never needs refueling for 25+ years',
                'A hospital with operating rooms, dental clinic, and ICU',
                'A post office, barbershop, and ship\'s store',
                'Dining facilities serving 18,000+ meals per day',
                'An electromagnetic aircraft launch system (EMALS)',
                'Capacity for 75+ aircraft on a 4.5-acre flight deck',
                'Desalination plants producing 400,000 gallons of fresh water daily',
                'Over 4,000 phone lines and its own TV station',
              ].map((fact, i) => (
                <div key={i} className="text-gray-300 text-sm flex items-start">
                  <span className="text-[#dc2626] mr-2 mt-0.5">•</span>
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">What $13.3 Billion Could Buy Instead</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-4">
              The cost of building a single aircraft carrier — not operating it, just building it —
              could alternatively fund:
            </p>
            <div className="space-y-4">
              {opportunityCost.map((item, i) => (
                <div key={i} className="border-b border-stone-700 pb-4 last:border-b-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-semibold">{item.item}</span>
                    <span className="text-[#dc2626] font-bold font-mono">{item.quantity}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Gerald R. Ford Debacle</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The USS Gerald R. Ford (CVN-78) was originally estimated to cost <strong className="text-white">$10.5 billion</strong>.
              It was delivered at <strong className="text-[#dc2626]">$13.3 billion</strong> — 27% over budget and years late.
              The ship was commissioned in 2017 but wasn&apos;t declared combat-ready until 2022 due to problems with
              its new electromagnetic launch system (EMALS), advanced weapons elevators, and dual-band radar.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Of the 11 advanced weapons elevators promised, only 4 were working at delivery. The remaining 7
              took years of additional work. The EMALS catapult system — replacing proven steam catapults —
              experienced reliability issues that grounded flight operations repeatedly during testing.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Despite these problems, the Navy is building more Ford-class carriers. CVN-79 (USS John F. Kennedy)
              is estimated at <strong className="text-[#dc2626]">$12.3 billion</strong>, and CVN-80 and CVN-81 were
              ordered together for a combined <strong className="text-[#dc2626]">$24 billion</strong>.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Are Carriers Obsolete?</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              Military analysts increasingly question whether $13 billion carriers are survivable in an era of
              advanced anti-ship missiles. China&apos;s DF-21D &ldquo;carrier killer&rdquo; ballistic missile costs roughly
              <strong className="text-[#dc2626]"> $10 million</strong> per shot — meaning a $13 billion carrier could
              theoretically be sunk by a weapon costing 0.075% of its price.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Hypersonic anti-ship missiles, autonomous drone swarms, and advanced submarine torpedoes all
              threaten the carrier&apos;s dominance. Critics argue the Navy is spending $100+ billion on Ford-class
              carriers that may be too vulnerable to risk in a major conflict — the scenario they&apos;re designed for.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Proponents counter that carriers provide unmatched power projection, diplomatic presence, and
              flexibility. But the cost-exchange ratio — billions to build vs. millions to threaten — is
              increasingly unfavorable. As one defense analyst put it: &ldquo;We&apos;re building $13 billion targets.&rdquo;
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
              { href: '/how-much-does-a-fighter-jet-cost', label: 'Fighter Jet Costs' },
              { href: '/how-much-does-a-submarine-cost', label: 'Submarine Costs' },
              { href: '/defense-budget', label: 'US Defense Budget' },
              { href: '/cost-overruns', label: 'Pentagon Cost Overruns' },
              { href: '/weapons', label: 'US Weapons Systems' },
              { href: '/opportunity-cost', label: 'Opportunity Cost of War' },
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
              <li>• Congressional Research Service — &ldquo;Navy Ford-Class Aircraft Carrier Program&rdquo; (2024)</li>
              <li>• Government Accountability Office — CVN-78 Cost Assessment</li>
              <li>• Congressional Budget Office — &ldquo;Costs of the Navy&apos;s New Aircraft Carrier&rdquo;</li>
              <li>• US Navy — Carrier Strike Group Composition and Operations</li>
              <li>• Naval History and Heritage Command — Historical Carrier Data</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Much Does an Aircraft Carrier Cost? $13 Billion (and Counting)',
              description: 'A single Gerald R. Ford-class aircraft carrier costs $13.3 billion to build and $25+ billion over its lifetime.',
              url: 'https://www.warcosts.org/how-much-does-an-aircraft-carrier-cost',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
