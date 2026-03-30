import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does a Bomber Cost? The B-2\'s $2.1 Billion Price Tag | WarCosts',
  description: 'The B-2 Spirit stealth bomber costs $2.1 billion each — the most expensive aircraft ever built. The new B-21 Raider: $700M. B-52: still flying after 70 years. Full bomber cost comparison.',
  keywords: ['bomber cost', 'how much does a bomber cost', 'B-2 Spirit cost', 'B-21 Raider cost', 'B-52 cost', 'stealth bomber cost', 'B-1B cost'],
  openGraph: {
    title: 'How Much Does a Bomber Cost? The B-2\'s $2.1 Billion Price Tag',
    description: 'The B-2 stealth bomber costs $2.1 billion each. The B-52 has been flying since 1952 and will serve until 2050+.',
    url: 'https://www.warcosts.org/how-much-does-a-bomber-cost',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much does a B-2 Spirit bomber cost?', a: 'The B-2 Spirit stealth bomber costs approximately $2.1 billion per aircraft (in 2024 dollars), making it the most expensive aircraft ever built. Only 21 were produced. At $130,000 per flight hour, a single B-2 mission costs $500,000+ in fuel and maintenance.' },
  { q: 'How much does the new B-21 Raider cost?', a: 'The B-21 Raider is estimated at $700 million per aircraft, with 100+ planned. The total program cost is expected to exceed $80 billion. It\'s designed to replace both the B-2 and eventually supplement the B-1B.' },
  { q: 'How much does a B-52 Stratofortress cost?', a: 'A B-52 originally cost $84 million (in 2024 dollars) when built in the 1950s-60s. Today, the Air Force spends billions upgrading them with new engines, radar, and weapons. The B-52 is expected to serve until the 2050s — a 100-year lifespan.' },
  { q: 'How much does it cost to fly a B-2 per hour?', a: 'The B-2 Spirit costs approximately $130,000 per flight hour — the most expensive aircraft to fly in the US inventory. A typical 10-hour mission costs $1.3 million just in operating expenses. This is why the Air Force flies B-2s sparingly.' },
  { q: 'Why were only 21 B-2 bombers built?', a: 'The original plan called for 132 B-2s, but the end of the Cold War and the aircraft\'s extreme cost ($2.1B each) led Congress to cap production at 21. At the planned quantity, each would have cost about $500M — still expensive but far more justifiable.' },
  { q: 'How long will the B-52 serve?', a: 'The B-52 Stratofortress is expected to serve until at least the 2050s, giving it a service life of approximately 100 years. The last B-52H was built in 1962. The Air Force is re-engining the entire fleet with new Rolls-Royce engines to extend their life.' },
]

const bomberComparison = [
  { name: 'B-2 Spirit', cost: '$2.1B', flightHour: '$130K', built: 21, payload: '40,000 lbs', range: '6,000 mi', year: 1997, status: 'Active (retiring 2030s)' },
  { name: 'B-21 Raider', cost: '$700M', flightHour: 'TBD', built: 6, payload: '30,000 lbs (est.)', range: '5,500+ mi (est.)', year: 2023, status: 'Flight testing' },
  { name: 'B-1B Lancer', cost: '$283M', flightHour: '$62K', built: 100, payload: '75,000 lbs', range: '5,600 mi', year: 1986, status: 'Active (retiring)' },
  { name: 'B-52H Stratofortress', cost: '$84M', flightHour: '$52K', built: 744, payload: '70,000 lbs', range: '8,800 mi', year: 1955, status: 'Active until 2050s' },
]

export default function BomberCostPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Bomber Cost' }]} />
        <ShareButtons title="How Much Does a Bomber Cost?" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Does a Bomber Cost?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$2.1 Billion — B-2 Spirit</div>
            <div className="text-lg opacity-90">The most expensive aircraft ever built — only 21 made</div>
          </div>
          <div className="bg-stone-700 text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$700 Million — B-21 Raider</div>
            <div className="text-lg opacity-90">The new stealth bomber, 100+ planned at $80B+ total</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The B-2 Spirit stealth bomber costs <strong className="text-[#dc2626]">$2.1 billion per aircraft</strong> —
            the most expensive plane ever built. Its replacement, the B-21 Raider, costs
            <strong className="text-[#dc2626]"> $700 million each</strong>. Meanwhile, the B-52 — built in the 1950s for
            <strong className="text-[#dc2626]"> $84 million</strong> — is still flying and will serve until the 2050s,
            approaching a <strong className="text-[#dc2626]">100-year lifespan</strong>.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">US Bomber Fleet Comparison</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Bomber</th>
                    <th className="text-right py-3 text-white">Unit Cost</th>
                    <th className="text-right py-3 text-white">$/Flight Hr</th>
                    <th className="text-right py-3 text-white">Built</th>
                    <th className="text-left py-3 text-white pl-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bomberComparison.map((b, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{b.name}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{b.cost}</td>
                      <td className="py-3 text-right font-mono text-gray-400">{b.flightHour}</td>
                      <td className="py-3 text-right text-gray-400">{b.built}</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{b.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { value: '$2.1B', label: 'B-2 Spirit (per aircraft)', detail: 'Most expensive aircraft in history — only 21 built' },
              { value: '$130K/hr', label: 'B-2 flight hour cost', detail: 'A 10-hour mission costs $1.3 million' },
              { value: '21', label: 'B-2s built (of 132 planned)', detail: 'Cold War end + extreme cost killed production' },
              { value: '100+', label: 'B-21 Raiders planned', detail: 'At $700M each — $80B+ total program' },
              { value: '70+ years', label: 'B-52 service life (so far)', detail: 'Built 1952-1962, flying until 2050s+' },
              { value: '744', label: 'B-52s originally built', detail: '76 still in service after 7 decades' },
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
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The B-2 Spirit: $2.1 Billion Flying Wing</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The B-2 Spirit is a technological marvel and a financial catastrophe. Originally planned at
              132 aircraft for $22 billion ($167M each), the program was slashed to 21 bombers after the
              Cold War ended — but development costs stayed the same. The result:
              <strong className="text-[#dc2626]"> $2.1 billion per plane</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Each B-2 requires its own climate-controlled hangar. The stealth coating must be meticulously
              maintained after every flight. At <strong className="text-[#dc2626]">$130,000 per flight hour</strong>,
              a single round-trip bombing mission to Iran — approximately 30 hours — costs over
              <strong className="text-[#dc2626]"> $4 million</strong> in operating expenses alone, before counting
              the munitions dropped.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The Air Force lost one B-2 in a 2008 crash in Guam — a <strong className="text-[#dc2626]">$1.4 billion</strong> loss,
              the most expensive aircraft accident in history. With only 20 remaining, each one represents
              approximately <strong className="text-white">5% of America&apos;s stealth bomber capability</strong>.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The B-21 Raider: Next Generation</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The B-21 Raider is Northrop Grumman&apos;s replacement for the B-2, with at least 100 planned.
              At an estimated <strong className="text-[#dc2626]">$700 million each</strong>, it&apos;s cheaper than the
              B-2 — but the total program will still exceed <strong className="text-[#dc2626]">$80 billion</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The B-21 made its first flight in November 2023. Six test aircraft have been built.
              The Air Force claims costs are &ldquo;on track&rdquo; — a rare achievement for a major weapons program.
              But independent analysts note that production costs typically rise 20-40% from estimates,
              which could push the per-unit cost above $1 billion.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The B-21 is designed to penetrate advanced air defenses, operate with or without a crew
              (optionally manned), and deliver both conventional and nuclear weapons. It will be the
              backbone of the Air Force&apos;s bomber fleet through the 2070s.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The B-52: 100 Years of Bombing</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The B-52 Stratofortress first flew in <strong className="text-white">1952</strong>. The last one was built
              in <strong className="text-white">1962</strong>. It&apos;s expected to serve until at least
              <strong className="text-[#dc2626]"> 2050</strong> — giving it a nearly <strong className="text-[#dc2626]">100-year
              service life</strong>. No other weapon system in history comes close.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The B-52 has been used in every major US conflict since Vietnam. Originally designed to drop
              nuclear bombs on the Soviet Union, it&apos;s been adapted to fire cruise missiles, drop precision-guided
              bombs, lay naval mines, and serve as a standoff weapons platform. Its cavernous bomb bay and
              long range make it endlessly adaptable.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              At <strong className="text-[#dc2626]">$52,000 per flight hour</strong>, the B-52 is the cheapest bomber
              to operate — less than half the B-1B and a fraction of the B-2. This economy, combined with
              its massive payload (70,000 lbs), is why the Air Force keeps investing in upgrades.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The current re-engining program will replace all 8 engines on each B-52 with new Rolls-Royce
              F130 engines — a <strong className="text-[#dc2626]">$11.8 billion</strong> program that will improve
              fuel efficiency by 20-30% and extend the airframe life for decades more.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">One B-2 Mission to Iran</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              A single B-2 bombing mission from Whiteman Air Force Base, Missouri to Iran and back
              involves roughly <strong className="text-white">30+ hours of flight time</strong>, typically with
              aerial refueling. The costs break down approximately:
            </p>
            <div className="space-y-3">
              {[
                { item: 'Flight operations (30 hrs × $130K)', cost: '$3.9M' },
                { item: 'Aerial refueling (KC-135/KC-46)', cost: '$300K' },
                { item: 'Munitions (16× JDAM or 16× JASSM)', cost: '$400K-$22M' },
                { item: 'Pre/post-mission maintenance', cost: '$200K' },
                { item: 'Intelligence/planning support', cost: '$100K+' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-stone-700 pb-2 last:border-b-0">
                  <span className="text-gray-300 text-sm">{item.item}</span>
                  <span className="text-[#dc2626] font-bold font-mono">{item.cost}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2 border-t border-stone-600">
                <span className="text-white font-bold">Total per mission</span>
                <span className="text-[#dc2626] font-bold font-mono text-lg">$5M-$27M</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The B-1B: Retiring Workhorse</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The B-1B Lancer — the &ldquo;Bone&rdquo; — was built as a supersonic nuclear bomber but found its calling
              as a conventional strike platform. At <strong className="text-[#dc2626]">$283 million each</strong> and
              carrying <strong className="text-white">75,000 lbs</strong> of ordnance (the most of any US bomber),
              it became the backbone of air campaigns in Afghanistan, Iraq, and Syria.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The B-1B fleet is now being retired as B-21s arrive. Originally 100 were built; the fleet has
              shrunk to about 45 active aircraft. They&apos;ve been ridden hard — some airframes have accumulated
              so much stress from heavy use in the War on Terror that they&apos;re structurally worn out.
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
              { href: '/how-much-does-a-drone-cost', label: 'Military Drone Costs' },
              { href: '/how-much-does-a-nuke-cost', label: 'Nuclear Weapon Costs' },
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
              <li>• Congressional Research Service — &ldquo;B-21 Raider Long-Range Strike Bomber&rdquo; (2024)</li>
              <li>• Government Accountability Office — B-2 Program Cost Assessment</li>
              <li>• Air Force Magazine — Bomber Fleet Status and Modernization</li>
              <li>• Congressional Budget Office — Long-Range Bomber Cost Analysis</li>
              <li>• Department of the Air Force — B-52 Commercial Engine Replacement Program</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Much Does a Bomber Cost? The B-2\'s $2.1 Billion Price Tag',
              description: 'The B-2 stealth bomber costs $2.1 billion each. The B-52 has been flying since 1952.',
              url: 'https://www.warcosts.org/how-much-does-a-bomber-cost',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
