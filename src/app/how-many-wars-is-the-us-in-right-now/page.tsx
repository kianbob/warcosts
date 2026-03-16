import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Many Wars Is the US In Right Now? Active Conflicts in 2026 | WarCosts',
  description: 'The US is actively involved in at least 7 conflicts and military operations in 2026, including Iran, anti-ISIS operations, Somalia, and more. Full list with costs and troop levels.',
  keywords: ['US wars right now', 'current US military operations', 'how many wars is America in', 'US conflicts 2026', 'active US wars', 'Iran war 2026'],
  openGraph: {
    title: 'How Many Wars Is the US In Right Now? Active Conflicts in 2026',
    description: 'The US is actively involved in at least 7 conflicts and military operations in 2026.',
    url: 'https://www.warcosts.org/how-many-wars-is-the-us-in-right-now',
    type: 'article',
  },
}

const faqs = [
  { q: 'How many wars is the US in right now?', a: 'As of 2026, the US is actively involved in at least 7 military operations and conflicts: the Iran confrontation (air/naval strikes), anti-ISIS operations in Iraq and Syria, counterterrorism in Somalia, support operations in Yemen, drone strikes in multiple countries, and ongoing military aid to Ukraine and Israel. None have formal Congressional declarations of war.' },
  { q: 'Is the US at war with Iran?', a: 'The US has been conducting military operations against Iran since early 2026, including air strikes on Iranian nuclear and military facilities, naval operations in the Strait of Hormuz, and regional deployments. While the administration has not sought a formal declaration of war, by any practical definition, the US is at war with Iran.' },
  { q: 'How many US troops are deployed overseas in 2026?', a: 'Approximately 170,000+ US military personnel are deployed overseas, including about 50,000 in the Middle East (up from 35,000 due to Iran), 28,500 in South Korea, 54,000 in Japan, and smaller deployments across Africa, Europe, and Central Asia.' },
  { q: 'Has Congress declared war for any current US operation?', a: 'No. The last formal Congressional declaration of war was in 1942 against Axis powers. All current operations are conducted under the 2001 AUMF (against al-Qaeda), the 2002 Iraq AUMF (repealed 2023 but replaced), or Article II presidential authority. This is precisely the constitutional crisis the founders warned about.' },
]

const activeConflicts = [
  {
    name: 'Iran 2026',
    status: 'Active combat',
    troops: '~45,000 in region',
    annualCost: 11.3,
    authority: 'Article II / pending AUMF',
    description: 'Air and naval strikes against Iranian military and nuclear facilities. Strait of Hormuz operations. Regional force posture across Gulf states.',
    link: '/iran-war-2026',
  },
  {
    name: 'Anti-ISIS (Iraq & Syria)',
    status: 'Active operations',
    troops: '~2,500 Iraq, ~900 Syria',
    annualCost: 5.2,
    authority: '2001 AUMF',
    description: 'Ongoing counter-ISIS operations, advisory missions, air strikes against ISIS remnants. 11+ years and counting.',
    link: '/conflicts/isis-iraq-syria',
  },
  {
    name: 'Somalia (AFRICOM)',
    status: 'Active combat',
    troops: '~500',
    annualCost: 1.2,
    authority: '2001 AUMF',
    description: 'Counterterrorism operations against al-Shabaab. Drone strikes, special operations raids, partner force training.',
    link: '/conflicts/somalia-ongoing',
  },
  {
    name: 'Red Sea / Houthi Operations',
    status: 'Active naval combat',
    troops: '~3,000 naval',
    annualCost: 2.1,
    authority: 'Article II',
    description: 'Naval operations protecting shipping from Houthi missile and drone attacks. Strikes on Houthi launch sites in Yemen.',
    link: '/conflicts/red-sea-houthis',
  },
  {
    name: 'Ukraine Military Aid',
    status: 'Non-combat support',
    troops: '~200 advisory',
    annualCost: 12.5,
    authority: 'Congressional appropriation',
    description: 'Weapons, intelligence, training support for Ukraine against Russia. No US combat troops but extensive CIA presence.',
    link: '/conflicts/ukraine-support',
  },
  {
    name: 'Global Drone Program',
    status: 'Ongoing strikes',
    troops: 'Classified',
    annualCost: 3.0,
    authority: '2001 AUMF / Title 50',
    description: 'CIA and JSOC drone strikes across Yemen, Somalia, Pakistan, Libya, and other countries. Kill list operations.',
    link: '/drone-strikes',
  },
  {
    name: 'Global War on Terror (other)',
    status: 'Ongoing',
    troops: '~5,000+ across Africa/Asia',
    annualCost: 8.0,
    authority: '2001 AUMF',
    description: 'Special operations in 80+ countries, counterterrorism training missions, intelligence operations.',
    link: '/analysis/forever-wars',
  },
]

export default function CurrentWarsPage() {
  const totalCost = activeConflicts.reduce((sum, c) => sum + c.annualCost, 0)

  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Current US Wars' }]} />
        <ShareButtons title="How Many Wars Is the US In Right Now?" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Many Wars Is the US In Right Now?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">At Least 7</div>
            <div className="text-lg opacity-90">Active military operations in 2026</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            As of 2026, the United States is actively engaged in <strong className="text-[#dc2626]">at least 7 military 
            operations</strong> across the globe, at a combined annual cost of over <strong className="text-[#dc2626]">${totalCost.toFixed(1)} billion</strong>. 
            <strong className="text-white"> None have a formal Congressional declaration of war.</strong> US Special Operations 
            forces are deployed in <strong className="text-[#dc2626]">80+ countries</strong>. The 2001 Authorization for Use of 
            Military Force — passed to fight al-Qaeda after 9/11 — is still being used 25 years later to justify 
            operations against groups that didn&apos;t exist when it was written.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Active Operations</h2>
          <div className="space-y-6">
            {activeConflicts.map((conflict, i) => (
              <div key={i} className="bg-stone-800 rounded-lg p-6 border border-stone-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <Link href={conflict.link} className="text-xl font-semibold text-[#dc2626] hover:underline">
                    {conflict.name}
                  </Link>
                  <span className="text-white font-mono font-bold">${conflict.annualCost}B/year</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
                  <div className="text-sm"><span className="text-gray-400">Status:</span> <span className="text-white">{conflict.status}</span></div>
                  <div className="text-sm"><span className="text-gray-400">Troops:</span> <span className="text-white">{conflict.troops}</span></div>
                  <div className="text-sm"><span className="text-gray-400">Authority:</span> <span className="text-white">{conflict.authority}</span></div>
                </div>
                <p className="text-gray-300 text-sm">{conflict.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Combined Cost</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="space-y-3">
              {activeConflicts.map((c, i) => (
                <div key={i} className="flex justify-between border-b border-stone-700 pb-2 last:border-b-0">
                  <span className="text-gray-300">{c.name}</span>
                  <span className="text-white font-mono">${c.annualCost}B</span>
                </div>
              ))}
              <div className="flex justify-between pt-2 border-t-2 border-[#dc2626]">
                <span className="text-white font-bold">Total Annual Cost</span>
                <span className="text-[#dc2626] font-mono font-bold">${totalCost.toFixed(1)}B</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Note: These are direct operational costs only. They do not include base Pentagon budget, 
              long-term veteran care, or interest on war borrowing.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Constitutional Crisis</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The Constitution is unambiguous: <strong className="text-white">&ldquo;Congress shall have Power... 
              To declare War.&rdquo;</strong> (Article I, Section 8). The last time Congress formally declared 
              war was 1942. Every conflict since — Korea, Vietnam, Iraq, Afghanistan, Libya, Syria, Iran — 
              has been fought on presidential authority or vague authorizations.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The <Link href="/war-powers" className="text-[#dc2626] hover:underline">War Powers Resolution</Link> of 
              1973 was supposed to fix this. It hasn&apos;t. Presidents of both parties have ignored it, 
              and Congress has lacked the political will to enforce it.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The result: a permanent state of undeclared war where the executive branch can commit American 
              lives and trillions of dollars with minimal accountability. The founders would be horrified.
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
              { href: '/iran-war-2026', label: 'Iran War 2026' },
              { href: '/analysis/forever-wars', label: 'The Forever Wars' },
              { href: '/war-powers', label: 'War Powers & the Constitution' },
              { href: '/us-military-budget-2026', label: '2026 Military Budget' },
              { href: '/drone-strikes', label: 'US Drone Strikes' },
              { href: '/analysis/undeclared-wars', label: 'Undeclared Wars' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-stone-800 hover:bg-stone-700 rounded-lg p-4 border border-stone-700 hover:border-[#dc2626] text-gray-300 hover:text-red-500 transition-colors">
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Related Analysis</h2>
          <div className="flex flex-col gap-3 bg-stone-800 rounded-lg p-6 border border-stone-700">
            <Link href="/analysis/forever-wars" className="text-[#dc2626] hover:underline">→ The Forever Wars</Link>
            <Link href="/analysis/shadow-wars" className="text-[#dc2626] hover:underline">→ America&apos;s Shadow Wars</Link>
            <Link href="/analysis/undeclared-wars" className="text-[#dc2626] hover:underline">→ Undeclared Wars</Link>
            <Link href="/analysis/congressional-authority" className="text-[#dc2626] hover:underline">→ 19 Wars Without Congress</Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">Sources</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <ul className="text-gray-300 space-y-2">
              <li>• Congressional Research Service — &ldquo;Instances of Use of United States Armed Forces Abroad&rdquo;</li>
              <li>• Brown University Costs of War Project</li>
              <li>• Department of Defense — Quarterly Cost of War Reports</li>
              <li>• Smithberger &amp; Hartung — &ldquo;The Costs of War&rdquo;</li>
              <li>• Military Times — Deployment Tracker</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Many Wars Is the US In Right Now? Active Conflicts in 2026',
              description: 'The US is actively involved in at least 7 conflicts and military operations in 2026.',
              url: 'https://www.warcosts.org/how-many-wars-is-the-us-in-right-now',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
