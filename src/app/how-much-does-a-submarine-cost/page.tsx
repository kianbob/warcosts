import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does a Submarine Cost? Up to $8.5 Billion | WarCosts',
  description: 'US submarines cost $3.4 billion (Virginia-class) to $8.5 billion (Columbia-class). The Navy operates 68 subs. Full cost breakdown including the $368 billion AUKUS deal.',
  keywords: ['submarine cost', 'how much does a submarine cost', 'Virginia class cost', 'Columbia class cost', 'nuclear submarine cost', 'Ohio class cost', 'AUKUS submarine'],
  openGraph: {
    title: 'How Much Does a Submarine Cost? Up to $8.5 Billion',
    description: 'US nuclear submarines cost $3.4B to $8.5B each. The Columbia-class SSBN costs more than the GDP of 40 countries.',
    url: 'https://www.warcosts.org/how-much-does-a-submarine-cost',
    type: 'article',
  },
}

const faqs = [
  { q: 'How much does a Virginia-class submarine cost?', a: 'A Virginia-class fast attack submarine costs approximately $3.4 billion per boat. The newest Block V variant with the Virginia Payload Module (VPM) costs about $3.8 billion, adding the ability to carry 28 additional Tomahawk missiles.' },
  { q: 'How much does a Columbia-class submarine cost?', a: 'The Columbia-class ballistic missile submarine (SSBN) costs approximately $8.5 billion per boat. Twelve are planned at a total program cost of $132 billion. Each carries 16 Trident II D5 missiles with nuclear warheads — enough to destroy an entire country.' },
  { q: 'How many submarines does the US Navy have?', a: 'The US Navy operates approximately 68 submarines: 14 Ohio-class SSBNs (nuclear deterrent), 4 Ohio-class SSGNs (guided missile), and about 50 Virginia and Los Angeles-class fast attack submarines.' },
  { q: 'What is the AUKUS submarine deal?', a: 'AUKUS is a trilateral deal (US, UK, Australia) to provide Australia with nuclear-powered submarines. The estimated cost is $368 billion over 30 years — making it the most expensive defense procurement in Australian history.' },
  { q: 'How long can a nuclear submarine stay underwater?', a: 'A nuclear submarine can stay submerged for months at a time — limited only by food supplies, typically 90 days. The nuclear reactor doesn\'t need refueling for 20-30 years. Crew endurance, not technology, is the limiting factor.' },
  { q: 'How many nuclear weapons does an Ohio-class submarine carry?', a: 'Each Ohio-class SSBN carries 20 Trident II D5 missiles, each capable of carrying up to 8 nuclear warheads (W76 or W88). A single Ohio-class submarine can carry up to 160 nuclear warheads — enough to destroy every major city in any country on Earth.' },
]

const subClasses = [
  { class: 'Columbia-class SSBN', cost: '$8.5B', quantity: '12 planned', role: 'Nuclear deterrent (replacing Ohio)', missiles: '16 Trident II D5', status: 'Under construction' },
  { class: 'Virginia-class SSN (Block V)', cost: '$3.8B', quantity: '66 planned', role: 'Fast attack, land strike', missiles: '40 Tomahawk + torpedoes', status: 'In production' },
  { class: 'Virginia-class SSN (Block IV)', cost: '$3.4B', quantity: '10 built', role: 'Fast attack, surveillance', missiles: '12 Tomahawk + torpedoes', status: 'Active' },
  { class: 'Ohio-class SSBN', cost: '$2B', quantity: '14 active', role: 'Nuclear deterrent', missiles: '20 Trident II D5', status: 'Active (retiring 2030s)' },
  { class: 'Ohio-class SSGN', cost: '$800M (converted)', quantity: '4 active', role: 'Guided missile, special ops', missiles: '154 Tomahawk', status: 'Active' },
  { class: 'Los Angeles-class SSN', cost: '$1.5B', quantity: '28 active', role: 'Fast attack (retiring)', missiles: '12 Tomahawk + torpedoes', status: 'Retiring' },
]

export default function SubmarineCostPage() {
  return (
    <main className="min-h-screen bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Submarine Cost' }]} />
        <ShareButtons title="How Much Does a Submarine Cost?" />

        <header className="mb-12 bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
            How Much Does a Submarine Cost?
          </h1>
          <div className="bg-[#dc2626] text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$3.4 Billion to $8.5 Billion Each</div>
            <div className="text-lg opacity-90">Virginia-class to Columbia-class — the most expensive vessels afloat</div>
          </div>
          <div className="bg-stone-700 text-white p-6 rounded-lg mb-6">
            <div className="text-3xl font-bold mb-2">$132 Billion</div>
            <div className="text-lg opacity-90">Total Columbia-class program — 12 submarines to replace Ohio-class</div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            A single Columbia-class nuclear submarine costs <strong className="text-[#dc2626]">$8.5 billion</strong> —
            more than the GDP of 40 countries. It&apos;s a mobile nuclear apocalypse, carrying
            <strong className="text-[#dc2626]"> 16 Trident missiles</strong> capable of destroying an entire nation.
            The US Navy operates <strong className="text-[#dc2626]">68 submarines</strong>, and is building
            the most expensive submarine fleet in history.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">US Submarine Fleet</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="text-left py-3 text-white">Class</th>
                    <th className="text-right py-3 text-white">Cost</th>
                    <th className="text-center py-3 text-white">Qty</th>
                    <th className="text-left py-3 text-white pl-4">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {subClasses.map((sub, i) => (
                    <tr key={i} className="border-b border-stone-700">
                      <td className="py-3 text-white font-semibold text-sm">{sub.class}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626]">{sub.cost}</td>
                      <td className="py-3 text-center text-gray-400 text-sm">{sub.quantity}</td>
                      <td className="py-3 text-gray-400 text-sm pl-4">{sub.role}</td>
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
              { value: '68', label: 'Total US submarines', detail: 'More than any other nation except possibly China' },
              { value: '$8.5B', label: 'Columbia-class cost', detail: 'Each one costs more than GDP of Belize, Bhutan, or Samoa' },
              { value: '160', label: 'Warheads per Ohio SSBN', detail: '20 Trident missiles × up to 8 warheads each' },
              { value: '$132B', label: 'Columbia program total', detail: '12 boats to replace the Ohio-class fleet' },
              { value: '90 days', label: 'Typical patrol duration', detail: 'Limited by food, not fuel — reactor lasts decades' },
              { value: '$368B', label: 'AUKUS submarine deal', detail: 'Selling nuclear sub technology to Australia' },
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
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Columbia Class: A Mobile Nuclear Apocalypse</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The Columbia-class SSBN is the most expensive and destructive weapon system ever built. Each
              boat costs <strong className="text-[#dc2626]">$8.5 billion</strong> and carries
              <strong className="text-[#dc2626]"> 16 Trident II D5 missiles</strong>, each capable of carrying
              up to 8 thermonuclear warheads. That&apos;s up to 128 nuclear warheads per submarine — enough
              to destroy every major city in any country on Earth.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Columbia class is designed to be virtually undetectable. Its nuclear reactor won&apos;t need
              refueling for the submarine&apos;s entire 42-year service life. It will patrol silently beneath
              the oceans, ready to launch civilization-ending strikes within minutes of receiving orders.
            </p>
            <p className="text-gray-300 leading-relaxed">
              One Columbia-class submarine — at <strong className="text-[#dc2626]">$8.5 billion</strong> — costs
              more than the entire annual GDP of countries like Barbados, Bermuda, Bhutan, or Belize.
              It costs more than NASA&apos;s annual planetary science budget. It costs more than the combined
              budgets of the Peace Corps, AmeriCorps, and the National Endowment for the Arts for the
              next 50 years.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Ohio Class: Current Nuclear Deterrent</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The 14 Ohio-class SSBNs form the backbone of America&apos;s nuclear deterrent. At any given time,
              several are on patrol — invisible, untraceable, and carrying enough nuclear weapons to end
              civilization. Each Ohio carries <strong className="text-white">20 Trident II D5 missiles</strong> with
              up to <strong className="text-[#dc2626]">160 warheads</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Built at roughly <strong className="text-[#dc2626]">$2 billion each</strong> (in 2024 dollars),
              the Ohio class has been in service since 1981. They&apos;re approaching the end of their service
              lives, which is driving the $132 billion Columbia-class program.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Four former SSBNs were converted to SSGNs (guided missile submarines), each carrying
              <strong className="text-white"> 154 Tomahawk cruise missiles</strong> — the Navy&apos;s most potent
              conventional strike platform.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The AUKUS Deal: $368 Billion</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              In 2023, the US, UK, and Australia announced the AUKUS submarine deal — a plan to provide
              Australia with nuclear-powered attack submarines. The estimated cost:
              <strong className="text-[#dc2626]"> $368 billion over 30 years</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Australia will first receive 3-5 Virginia-class submarines from the US ($3.4B each), then
              build a new SSN-AUKUS design jointly with the UK. It&apos;s the largest defense procurement in
              Australian history and one of the largest arms deals ever.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Critics argue that $368 billion for 8 submarines is grotesque — that&apos;s $46 billion per boat
              when you include infrastructure, training, and support. Australia could alternatively fund
              its entire public hospital system for 15 years.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-6">The Industrial Base Crisis</h2>
          <div className="bg-stone-800 rounded-lg p-6 border border-stone-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              The US submarine industrial base is in crisis. The Navy wants to build 2 Virginia-class subs
              per year plus Columbia-class boats, but shipyards are delivering only 1.2-1.4 Virginia subs
              per year. There aren&apos;t enough skilled welders, pipefitters, and nuclear-trained workers.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Submarines are already being delivered <strong className="text-[#dc2626]">2-3 years late</strong> and
              over budget. Adding AUKUS deliveries on top threatens to stretch an already strained
              industrial base to the breaking point. The Pentagon has invested $2.4 billion in shipyard
              improvements, but results are years away.
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
              { href: '/how-much-does-a-nuke-cost', label: 'Nuclear Weapon Costs' },
              { href: '/how-much-does-an-aircraft-carrier-cost', label: 'Aircraft Carrier Costs' },
              { href: '/how-much-does-the-us-spend-on-nuclear-weapons', label: 'Nuclear Weapons Spending' },
              { href: '/nuclear-arsenal', label: 'US Nuclear Arsenal' },
              { href: '/defense-budget', label: 'US Defense Budget' },
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
              <li>• Congressional Research Service — &ldquo;Navy Virginia-Class Submarine Program&rdquo; (2024)</li>
              <li>• Congressional Research Service — &ldquo;Navy Columbia-Class Submarine Program&rdquo; (2024)</li>
              <li>• Congressional Budget Office — Navy Shipbuilding Plan Cost Assessment</li>
              <li>• Government Accountability Office — Submarine Industrial Base Report</li>
              <li>• Australian Strategic Policy Institute — AUKUS Cost Analysis</li>
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Much Does a Submarine Cost? Up to $8.5 Billion',
              description: 'US nuclear submarines cost $3.4B to $8.5B each. Full breakdown of Virginia, Columbia, and Ohio class costs.',
              url: 'https://www.warcosts.org/how-much-does-a-submarine-cost',
              publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            }),
          }}
        />
      </div>
    </main>
  )
}
