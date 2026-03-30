import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does a Missile Cost? $120K to $15M Each | WarCosts',
  description: 'US missiles cost $120K (Stinger) to $15M (SM-3) each. Tomahawk cruise missiles: $2M. Patriot interceptors: $4M. Full breakdown of every major US missile with costs, quantities, and what they destroy.',
  keywords: ['missile cost', 'how much does a missile cost', 'Tomahawk missile cost', 'Patriot missile cost', 'Javelin cost', 'Stinger missile cost', 'THAAD cost'],
  openGraph: {
    title: 'How Much Does a Missile Cost? $120K to $15M Each',
    description: 'US missiles cost $120K to $15M each. 800 Tomahawks = $1.6 billion = 24,600 teacher salaries.',
    url: 'https://www.warcosts.org/how-much-does-a-missile-cost',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much does a Tomahawk cruise missile cost?', a: 'A Tomahawk cruise missile costs approximately $2 million per unit. The US has fired thousands in conflicts from the Gulf War to the 2026 Iran strikes. Each Tomahawk can travel 1,000+ miles to hit a precise target.' },
  { q: 'How much does a Patriot missile cost?', a: 'A Patriot PAC-3 interceptor missile costs approximately $4 million each. The Patriot system itself (launcher + radar + control) costs around $1 billion per battery. The US has used Patriots extensively in the Middle East.' },
  { q: 'How much does a Javelin missile cost?', a: 'A Javelin anti-tank missile costs approximately $240,000 per missile, plus $200,000 for the reusable Command Launch Unit (CLU). Thousands were sent to Ukraine, where they proved devastating against Russian armor.' },
  { q: 'How much does a Stinger missile cost?', a: 'A Stinger shoulder-fired anti-aircraft missile costs approximately $120,000 per unit. Originally designed to shoot down Soviet helicopters in Afghanistan, Stingers remain in service worldwide.' },
  { q: 'What is the most expensive US missile?', a: 'The SM-3 Block IIA interceptor costs approximately $15 million per missile. Designed to shoot down ballistic missiles in space, it\'s the most expensive individual missile in the US arsenal. THAAD interceptors cost $12 million each.' },
  { q: 'How many missiles were fired in the Iran war?', a: 'In the first 30 days of the 2026 Iran strikes, the US expended an estimated $33 billion in munitions — including thousands of Tomahawks, JASSMs, and precision-guided bombs. This is roughly equivalent to the annual education budget of 10 US states.' },
]

const missileCategories = {
  cruise: [
    { name: 'Tomahawk (BGM-109)', cost: '$2M', range: '1,000+ mi', role: 'Land-attack cruise missile', platform: 'Ships, subs' },
    { name: 'JASSM-ER (AGM-158B)', cost: '$1.4M', range: '575+ mi', role: 'Stealth air-launched cruise', platform: 'B-1B, F-15, F-16' },
    { name: 'LRASM (AGM-158C)', cost: '$3.5M', range: '200+ mi', role: 'Anti-ship cruise missile', platform: 'B-1B, F/A-18' },
  ],
  airDefense: [
    { name: 'SM-3 Block IIA', cost: '$15M', range: '1,350+ mi', role: 'Ballistic missile intercept (exo)', platform: 'Aegis ships' },
    { name: 'THAAD Interceptor', cost: '$12M', range: '125 mi', role: 'Terminal ballistic missile defense', platform: 'THAAD battery' },
    { name: 'Patriot PAC-3 MSE', cost: '$4M', range: '40+ mi', role: 'Air & missile defense', platform: 'Patriot battery' },
    { name: 'SM-6 (RIM-174)', cost: '$4.3M', range: '250+ mi', role: 'Anti-air/anti-ship/BMD', platform: 'Aegis ships' },
  ],
  tactical: [
    { name: 'Javelin (FGM-148)', cost: '$240K', range: '2.5 mi', role: 'Anti-tank', platform: 'Infantry, vehicle' },
    { name: 'Hellfire (AGM-114)', cost: '$150K', range: '5 mi', role: 'Anti-armor/precision strike', platform: 'Apache, drones' },
    { name: 'Stinger (FIM-92)', cost: '$120K', range: '3 mi', role: 'Man-portable anti-aircraft', platform: 'Infantry, vehicle' },
    { name: 'JDAM Kit (GBU-31)', cost: '$25K', range: '15 mi', role: 'GPS guidance kit for dumb bombs', platform: 'Any fighter/bomber' },
  ],
}

export default function MissileCostPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Missile Cost' }]} />
        <ShareButtons title="How Much Does a Missile Cost?" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Does a Missile Cost?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$120,000 to $15 Million Each</div>
            <div className="text-lg opacity-90">From shoulder-fired Stingers to ballistic missile interceptors</div>
          </div>
          <div className="bg-stone-700 text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">~$33 Billion in 30 Days</div>
            <div className="text-lg opacity-90">Estimated munitions cost in the first month of Iran strikes (2026)</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            The US military fires missiles that cost between <strong className="text-[#dc2626]">$120,000</strong> (Stinger)
            and <strong className="text-[#dc2626]">$15 million</strong> (SM-3 interceptor) each. A single Tomahawk
            cruise missile costs <strong className="text-[#dc2626]">$2 million</strong>. In the first 30 days of
            the Iran campaign, the US expended an estimated <strong className="text-[#dc2626]">$33 billion</strong> in
            munitions — money that evaporates in smoke and fire.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Cruise Missiles</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-4">
              Cruise missiles are the workhorses of modern US strike warfare. Each one is a self-guided,
              jet-powered weapon that flies hundreds of miles to hit a precise target.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Missile</th>
                    <th className="text-right py-3 text-white">Cost</th>
                    <th className="text-right py-3 text-white">Range</th>
                    <th className="text-left py-3 text-white pl-4">Platform</th>
                  </tr>
                </thead>
                <tbody>
                  {missileCategories.cruise.map((m, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{m.name}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{m.cost}</td>
                      <td className="py-3 text-right text-gray-400">{m.range}</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{m.platform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Air & Missile Defense</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-4">
              Interceptor missiles are some of the most expensive because they must hit a target traveling
              at thousands of miles per hour — often in space. You&apos;re spending millions to destroy something
              that may have cost the enemy a fraction of that.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Interceptor</th>
                    <th className="text-right py-3 text-white">Cost</th>
                    <th className="text-right py-3 text-white">Range</th>
                    <th className="text-left py-3 text-white pl-4">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {missileCategories.airDefense.map((m, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{m.name}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{m.cost}</td>
                      <td className="py-3 text-right text-gray-400">{m.range}</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{m.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Tactical Missiles & Guided Munitions</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 mb-4">
              Smaller tactical missiles are &ldquo;cheaper&rdquo; per unit — but fired in enormous quantities.
              The US sent over 7,000 Javelins to Ukraine alone, at $240K each.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Weapon</th>
                    <th className="text-right py-3 text-white">Cost</th>
                    <th className="text-right py-3 text-white">Range</th>
                    <th className="text-left py-3 text-white pl-4">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {missileCategories.tactical.map((m, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{m.name}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{m.cost}</td>
                      <td className="py-3 text-right text-gray-400">{m.range}</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{m.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Missile Math</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-6">
              Here&apos;s what missile spending looks like in human terms:
            </p>
            <div className="space-y-6">
              {[
                { scenario: '800 Tomahawks (a typical large strike)', cost: '$1.6 Billion', equals: '24,600 teacher salaries for a year' },
                { scenario: '100 Patriot PAC-3 interceptors', cost: '$400 Million', equals: '8,000 affordable housing units' },
                { scenario: '1,000 Javelins (sent to Ukraine)', cost: '$240 Million', equals: '4,800 full college scholarships' },
                { scenario: '50 SM-3 interceptors', cost: '$750 Million', equals: '15 community hospitals' },
                { scenario: 'First 30 days of Iran munitions', cost: '$33 Billion', equals: 'Annual education budget of 10 states' },
              ].map((item, i) => (
                <div key={i} className="border-b border-stone-700 pb-4 last:border-b-0">
                  <div className="text-white font-semibold mb-1">{item.scenario}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#dc2626] font-bold font-mono">{item.cost}</span>
                    <span className="text-gray-400 text-sm">= {item.equals}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Interceptor Paradox</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              One of the most troubling equations in modern warfare: a $4 million Patriot interceptor shooting down
              a $50,000 drone. Or a $15 million SM-3 intercepting a $500,000 ballistic missile. The math favors
              the attacker every time.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Iran&apos;s Shahed-136 kamikaze drones cost an estimated <strong className="text-[#dc2626]">$20,000-$50,000</strong> each.
              US interceptors to shoot them down cost <strong className="text-[#dc2626]">$400,000 to $4 million</strong>.
              An adversary can exhaust a defender&apos;s missile supply at a fraction of the cost — the
              definition of asymmetric economics.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This cost imbalance is why the Pentagon is urgently developing cheaper interceptors, directed-energy
              weapons (lasers), and electronic warfare to break the attacker&apos;s economic advantage.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Replenishment Problem</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The US can fire missiles far faster than it can build them. Tomahawk production is roughly
              <strong className="text-white"> 400 per year</strong>. In the Iran strikes, the Navy fired hundreds
              in the first week. JASSM production is around <strong className="text-white">525 per year</strong>.
              Patriot interceptors: <strong className="text-white">500 per year</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A sustained conflict could deplete missile stocks in weeks — stocks that take years to rebuild.
              This &ldquo;missile gap&rdquo; is one of the Pentagon&apos;s most pressing concerns, driving billions in
              new production line investments.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <p className="text-gray-300">
            <Link href="/weapons-exposed" className="text-[#dc2626] hover:underline text-lg font-semibold">
              → See our full weapons cost database at /weapons-exposed
            </Link>
          </p>
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
              { href: '/weapons-exposed', label: 'Full Weapons Cost Database' },
              { href: '/how-much-does-a-fighter-jet-cost', label: 'Fighter Jet Costs' },
              { href: '/how-much-does-a-nuke-cost', label: 'Nuclear Weapon Costs' },
              { href: '/iran-war-2026', label: '2026 Iran War' },
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
              <li>• Department of Defense — Selected Acquisition Reports (2024)</li>
              <li>• Congressional Research Service — &ldquo;Navy Tomahawk Cruise Missile Program&rdquo;</li>
              <li>• Missile Defense Agency — Budget and Acquisition Data</li>
              <li>• Government Accountability Office — Missile Defense Cost Assessment</li>
              <li>• Center for Strategic and International Studies — Missile Threat Database</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Much Does a Missile Cost? $120K to $15M Each',
              description: 'US missiles cost $120K to $15M each. Full breakdown of Tomahawk, Patriot, Javelin, and more.',
              url: 'https://www.warcosts.org/how-much-does-a-missile-cost',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
