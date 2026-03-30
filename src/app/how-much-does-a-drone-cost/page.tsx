import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does a Military Drone Cost? $5M to $131M | WarCosts',
  description: 'Military drones cost $5M (MQ-9 Reaper) to $131M (RQ-4 Global Hawk). Small kamikaze drones: $6K-$50K. Iran\'s Shahed-136: $20K vs $2M US interceptor. Full drone cost breakdown.',
  keywords: ['military drone cost', 'how much does a drone cost', 'MQ-9 Reaper cost', 'Global Hawk cost', 'Switchblade drone cost', 'Shahed drone cost', 'drone warfare cost'],
  openGraph: {
    title: 'How Much Does a Military Drone Cost? $5M to $131M',
    description: 'Military drones range from $6K Switchblades to $131M Global Hawks. The asymmetric economics of drone warfare.',
    url: 'https://www.warcosts.org/how-much-does-a-drone-cost',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much does an MQ-9 Reaper drone cost?', a: 'An MQ-9 Reaper costs approximately $32 million per aircraft (including sensors and ground control). It can fly for 27 hours, carry Hellfire missiles and JDAMs, and has been the primary US strike drone since 2007. Operating cost is about $4,700 per flight hour.' },
  { q: 'How much does a Global Hawk drone cost?', a: 'The RQ-4 Global Hawk surveillance drone costs approximately $131 million per aircraft — more expensive than an F-35. It flies at 60,000 feet for 32+ hours, providing wide-area surveillance. It\'s the most expensive drone in the US inventory.' },
  { q: 'How much does a Switchblade drone cost?', a: 'The Switchblade 300 loitering munition costs approximately $6,000 per unit, while the larger Switchblade 600 (anti-armor) costs about $50,000. Thousands have been sent to Ukraine. They\'re essentially kamikaze drones — single-use weapons.' },
  { q: 'How much does Iran\'s Shahed drone cost?', a: 'Iran\'s Shahed-136 kamikaze drone costs an estimated $20,000-$50,000 per unit. This creates a devastating cost asymmetry: a $20K Shahed can force the enemy to fire a $2-4 million interceptor missile, a 100:1 cost ratio in the attacker\'s favor.' },
  { q: 'Do drone operators get PTSD?', a: 'Yes. Studies show drone operators experience PTSD at rates comparable to combat pilots — roughly 4-17%. Despite operating from bases thousands of miles away, operators watch targets for days before strikes, witness the aftermath in high definition, then go home to their families. The psychological toll is real and significant.' },
  { q: 'How much does the MQ-25 Stingray cost?', a: 'The MQ-25 Stingray carrier-based drone costs approximately $170 million per aircraft. It\'s designed primarily as an aerial refueling tanker for carrier aircraft, extending the range of F/A-18s and F-35Cs. Seven are planned initially.' },
]

const largeDrones = [
  { name: 'MQ-25 Stingray', cost: '$170M', role: 'Carrier-based tanker/ISR', endurance: '~15 hrs', platform: 'Aircraft carriers' },
  { name: 'RQ-4 Global Hawk', cost: '$131M', role: 'High-altitude surveillance', endurance: '32+ hrs', platform: 'Air Force' },
  { name: 'MQ-9 Reaper', cost: '$32M', role: 'Strike/surveillance', endurance: '27 hrs', platform: 'Air Force, allies' },
  { name: 'MQ-1C Gray Eagle', cost: '$21M', role: 'Army ISR/strike', endurance: '25 hrs', platform: 'Army' },
  { name: 'MQ-1 Predator (retired)', cost: '$5M', role: 'Strike/surveillance (legacy)', endurance: '24 hrs', platform: 'Retired 2018' },
]

const smallDrones = [
  { name: 'Switchblade 600', cost: '$50K', type: 'Loitering munition (anti-armor)', weight: '50 lbs', range: '40+ km' },
  { name: 'Coyote Block 3', cost: '$12K', type: 'Counter-drone interceptor', weight: '13 lbs', range: '~10 km' },
  { name: 'Switchblade 300', cost: '$6K', type: 'Loitering munition (anti-personnel)', weight: '5.5 lbs', range: '10 km' },
  { name: 'Puma 3 AE', cost: '$250K', type: 'Reconnaissance (hand-launched)', weight: '15 lbs', range: '20 km' },
  { name: 'RQ-20 Puma', cost: '$250K', type: 'Small ISR', weight: '14 lbs', range: '20 km' },
]

export default function DroneCostPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Military Drone Cost' }]} />
        <ShareButtons title="How Much Does a Military Drone Cost?" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Does a Military Drone Cost?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$5 Million to $131 Million</div>
            <div className="text-lg opacity-90">From the retired MQ-1 Predator to the RQ-4 Global Hawk</div>
          </div>
          <div className="bg-stone-700 text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$6,000 — Switchblade 300</div>
            <div className="text-lg opacity-90">Kamikaze drones are rewriting the economics of warfare</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            US military drones range from <strong className="text-[#dc2626]">$6,000</strong> (Switchblade 300) to
            <strong className="text-[#dc2626]"> $131 million</strong> (Global Hawk) — and they&apos;re transforming
            warfare. Iran&apos;s <strong className="text-[#dc2626]">$20,000 Shahed</strong> drones force enemies to
            fire <strong className="text-[#dc2626]">$2-4 million</strong> interceptors, creating a devastating
            cost asymmetry. Cheaper to fly — but not cheaper psychologically.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Large Combat & Surveillance Drones</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Drone</th>
                    <th className="text-right py-3 text-white">Cost</th>
                    <th className="text-right py-3 text-white">Endurance</th>
                    <th className="text-left py-3 text-white pl-4">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {largeDrones.map((d, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{d.name}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{d.cost}</td>
                      <td className="py-3 text-right text-gray-400">{d.endurance}</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{d.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Small Drones & Loitering Munitions</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-4">
              The real revolution in drone warfare isn&apos;t the big expensive platforms — it&apos;s the
              small, cheap, expendable ones that are changing the cost calculus of combat.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Drone</th>
                    <th className="text-right py-3 text-white">Cost</th>
                    <th className="text-left py-3 text-white pl-4">Type</th>
                    <th className="text-right py-3 text-white">Range</th>
                  </tr>
                </thead>
                <tbody>
                  {smallDrones.map((d, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{d.name}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{d.cost}</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{d.type}</td>
                      <td className="py-3 text-right text-gray-400">{d.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Asymmetric Economics of Drone Warfare</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              Iran&apos;s Shahed-136 kamikaze drone costs an estimated <strong className="text-[#dc2626]">$20,000-$50,000</strong>.
              To shoot it down, a defender must fire an interceptor costing <strong className="text-[#dc2626]">$400,000 to
              $4 million</strong>. This creates a devastating economic equation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[
                { attack: 'Shahed-136 ($20K)', defense: 'Patriot PAC-3 ($4M)', ratio: '200:1 attacker advantage' },
                { attack: 'FPV drone ($500)', defense: 'M1 Abrams tank ($10M)', ratio: '20,000:1 attacker advantage' },
                { attack: 'Shahed swarm (100 × $20K = $2M)', defense: '100 × interceptors ($400M)', ratio: '200:1 attacker advantage' },
                { attack: 'Switchblade 300 ($6K)', defense: 'Infantry squad (priceless)', ratio: 'Asymmetric by nature' },
              ].map((item, i) => (
                <div key={i} className="bg-stone-700 rounded-lg p-4">
                  <div className="text-gray-400 text-xs mb-1">Attack</div>
                  <div className="text-white text-sm mb-2">{item.attack}</div>
                  <div className="text-gray-400 text-xs mb-1">Defense cost</div>
                  <div className="text-[#dc2626] text-sm mb-2">{item.defense}</div>
                  <div className="text-gray-400 text-xs">{item.ratio}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              This cost imbalance is why drones are called the &ldquo;poor man&apos;s air force.&rdquo; A country with
              a $10 billion defense budget can produce enough cheap drones to exhaust the interceptor supply
              of a country spending $800 billion. The economics of warfare are being rewritten.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Ukraine: The Drone War Laboratory</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The Ukraine war has been the world&apos;s first large-scale drone war. Both sides use thousands of
              FPV (first-person view) drones — essentially modified racing drones with grenades attached —
              costing as little as <strong className="text-[#dc2626]">$500 each</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ukraine has destroyed billions of dollars worth of Russian equipment with drones costing a
              tiny fraction of their targets: $500 drones destroying $4.5 million T-90 tanks, $50K
              naval drones damaging $750 million warships. Russia has fired hundreds of Iranian Shahed
              drones at Ukrainian cities and infrastructure.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The lesson is clear: cheap drones are the most cost-effective weapons in modern warfare.
              The US is scrambling to adapt, investing in autonomous drone swarms, counter-drone
              technology, and the Replicator initiative to mass-produce cheap autonomous systems.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Cheaper to Fly, Not Cheaper Psychologically</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              Drones are sold as a &ldquo;cheaper&rdquo; way to wage war — no pilot risk, lower operating costs,
              precision strikes. But the human cost isn&apos;t zero.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Drone operators at bases in Nevada and New Mexico watch targets for days or weeks through
              high-definition cameras — learning their routines, watching them play with their children —
              before firing a Hellfire missile. Then they watch the aftermath in detail. Then they drive
              home to have dinner with their own families.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Studies show drone operators experience PTSD at rates of <strong className="text-[#dc2626]">4-17%</strong>,
              comparable to combat pilots. The moral injury of killing by remote control — the cognitive
              dissonance of war-then-suburb, repeated daily for years — creates a unique form of psychological
              damage that the military is only beginning to understand.
            </p>
            <p className="text-gray-300 leading-relaxed">
              As one former Reaper pilot testified: &ldquo;The most dangerous thing about drone warfare is that
              it makes killing too easy. Not for the drone — for the politicians who order it.&rdquo;
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
              { href: '/drone-strikes', label: 'US Drone Strikes' },
              { href: '/how-much-does-a-missile-cost', label: 'Missile Costs' },
              { href: '/how-much-does-a-fighter-jet-cost', label: 'Fighter Jet Costs' },
              { href: '/weapons-exposed', label: 'Weapons Cost Database' },
              { href: '/defense-budget', label: 'US Defense Budget' },
              { href: '/civilian-casualties', label: 'Civilian Casualties' },
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
              <li>• Congressional Research Service — &ldquo;Unmanned Aircraft Systems: Current and Future Programs&rdquo; (2024)</li>
              <li>• Government Accountability Office — MQ-9 Reaper Program Cost Assessment</li>
              <li>• RAND Corporation — &ldquo;The Drone Age: How Drone Technology Will Change War and Peace&rdquo;</li>
              <li>• International Institute for Strategic Studies — Drone Warfare Cost Analysis</li>
              <li>• Department of Defense — Replicator Initiative Documentation</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Much Does a Military Drone Cost? $5M to $131M',
              description: 'Military drones range from $6K to $131M. The asymmetric economics of drone warfare explained.',
              url: 'https://www.warcosts.org/how-much-does-a-drone-cost',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
