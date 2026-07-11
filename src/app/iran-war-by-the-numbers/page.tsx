import { Metadata } from 'next'
import Link from 'next/link'
import FaqJsonLd from '@/components/FaqJsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'

export const metadata: Metadata = {
  title: 'Iran War by the Numbers — Final Accounting | OpenWar',
  description:
    'Every statistic from the 2026 Iran War: day-by-day costs, weapons expended, aircraft losses, casualty figures, oil price timeline, and comparison to Iraq and Afghanistan.',
  openGraph: {
    title: 'Iran War by the Numbers — Final Accounting',
    description:
      '1,000+ Tomahawks fired, 42 aircraft lost, $42B+ spent in 108 days. The complete statistical breakdown of the 2026 Iran War.',
    type: 'article',
  },
}

const faqs = [
  {
    question: 'How many Tomahawk missiles were fired in the Iran War?',
    answer:
      'Over 1,000 Tomahawk cruise missiles were launched during the Iran War, primarily during the opening six-day bombing campaign. At approximately $2 million per missile, Tomahawks alone accounted for over $2 billion in costs.',
  },
  {
    question: 'How many US aircraft were lost in the Iran War?',
    answer:
      '42 US aircraft were lost or damaged during the conflict, including 24 MQ-9 Reaper drones destroyed by Iranian air defenses, 6 F-16s, 4 F/A-18s, 3 F-15Es, 2 F-35s, and 3 other aircraft. Total replacement cost is estimated at $8.7 billion.',
  },
  {
    question: 'How many carrier strike groups were deployed?',
    answer:
      'Three carrier strike groups (CSGs) were deployed: the USS Eisenhower (CVN-69), USS Harry S. Truman (CVN-75), and USS Ronald Reagan (CVN-76) groups, representing the largest US naval concentration in the Persian Gulf since 2003.',
  },
  {
    question: 'What was the daily cost of the Iran War?',
    answer:
      'The Iran War cost approximately $389 million per day on average over its 108-day duration, making it the most expensive per-day US military operation in history.',
  },
  {
    question: 'Did Congress authorize the Iran War?',
    answer:
      'The administration conducted operations under the 2001 AUMF and Article II executive authority. A specific Iran AUMF was introduced but never voted on. The War Powers Resolution 60-day clock expired without congressional action, creating a constitutional gray area.',
  },
  {
    question: 'How does the Iran War compare to Iraq and Afghanistan in cost?',
    answer:
      'The Iran War\'s $42B+ over 108 days was far more intense per-day ($389M) than Iraq ($355M/day over 8.5 years, $1.1T total) or Afghanistan ($315M/day over 20 years, $2.3T total). However, total cumulative spending was much lower due to the shorter duration.',
  },
]

export default function IranWarByTheNumbersPage() {
  return (
    <>
      <ArticleSchema
        title="Iran War by the Numbers — Final Accounting"
        description="Complete statistical breakdown of the 2026 Iran War: costs, weapons, casualties, oil prices, and comparisons."
        datePublished="2026-07-10"
        dateModified="2026-07-10"
        slug="iran-war-by-the-numbers"
      />
      <FaqJsonLd faqs={faqs} />

      <main className="min-h-screen bg-gray-950 text-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Iran War by the Numbers' },
            ]}
          />

          <article className="mt-8">
            <header className="mb-10">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Iran War by the Numbers — Final Accounting
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                Updated July 10, 2026 — Every key statistic from 108 days of conflict, from munitions
                expended to oil price spikes. The data tells the story.
              </p>
              <ShareButtons title="Iran War by the Numbers — Final Accounting" />
            </header>

            {/* Top-line Numbers */}
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-red-400">At a Glance</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {[
                  { label: 'Duration', value: '108 days' },
                  { label: 'Direct Cost', value: '$42B+' },
                  { label: 'Supplemental', value: '$87.6B' },
                  { label: 'Cost/Day', value: '$389M' },
                  { label: 'US KIA', value: '15' },
                  { label: 'US Wounded', value: '538+' },
                  { label: 'Iranians Killed', value: '3,461+' },
                  { label: 'Lebanese Killed', value: '3,756+' },
                  { label: 'Aircraft Lost', value: '42' },
                  { label: 'Reapers Destroyed', value: '24' },
                  { label: 'Oil Peak', value: '$126/bbl' },
                  { label: 'CSGs Deployed', value: '3' },
                ].map((stat, i) => (
                  <div key={i} className="rounded-lg border border-gray-700 bg-gray-900 p-4 text-center">
                    <p className="text-2xl font-bold text-red-400">{stat.value}</p>
                    <p className="mt-1 text-xs text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Day-by-Day Cost Breakdown */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Day-by-Day Cost Breakdown</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Costs were heavily front-loaded, with the six-day opening bombing campaign consuming over
                a quarter of total direct costs. Here is the phased breakdown:
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Phase</th>
                      <th className="px-4 py-3 font-semibold">Dates</th>
                      <th className="px-4 py-3 font-semibold text-right">Days</th>
                      <th className="px-4 py-3 font-semibold text-right">Cost</th>
                      <th className="px-4 py-3 font-semibold text-right">$/Day</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Opening Strikes</td>
                      <td className="px-4 py-3 text-gray-400">Feb 26 – Mar 3</td>
                      <td className="px-4 py-3 text-right text-gray-300">6</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$11.3B</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$1.88B</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Sustained Air Campaign</td>
                      <td className="px-4 py-3 text-gray-400">Mar 4 – Mar 31</td>
                      <td className="px-4 py-3 text-right text-gray-300">28</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$10.8B</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$386M</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Blockade &amp; Attrition</td>
                      <td className="px-4 py-3 text-gray-400">Apr 1 – Apr 30</td>
                      <td className="px-4 py-3 text-right text-gray-300">30</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$9.4B</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$313M</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Pressure &amp; Negotiation</td>
                      <td className="px-4 py-3 text-gray-400">May 1 – May 31</td>
                      <td className="px-4 py-3 text-right text-gray-300">31</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$7.2B</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$232M</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Wind-Down &amp; Ceasefire</td>
                      <td className="px-4 py-3 text-gray-400">Jun 1 – Jun 14</td>
                      <td className="px-4 py-3 text-right text-gray-300">14</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$3.3B</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$236M</td>
                    </tr>
                    <tr className="bg-gray-800 font-bold">
                      <td className="px-4 py-3 text-white">Total</td>
                      <td className="px-4 py-3 text-gray-300">Feb 26 – Jun 14</td>
                      <td className="px-4 py-3 text-right text-white">108</td>
                      <td className="px-4 py-3 text-right font-mono text-red-300">$42.0B+</td>
                      <td className="px-4 py-3 text-right font-mono text-red-300">$389M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Weapons Used */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Weapons Expended</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                The Iran War consumed vast quantities of precision munitions, drawing down US strategic
                stockpiles to levels the Pentagon described as &ldquo;operationally concerning.&rdquo;
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Weapon System</th>
                      <th className="px-4 py-3 font-semibold text-right">Qty Fired</th>
                      <th className="px-4 py-3 font-semibold text-right">Unit Cost</th>
                      <th className="px-4 py-3 font-semibold text-right">Total Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Tomahawk (TLAM) Cruise Missiles</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">1,024</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$2.0M</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$2.05B</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">JASSM-ER Standoff Missiles</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">412</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$1.36M</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$560M</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">JDAM GPS-Guided Bombs</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">6,800+</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$25K</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$170M</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Small Diameter Bombs (SDB I/II)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">4,200+</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$40K–$250K</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$380M</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">AGM-88 HARM Anti-Radar Missiles</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">340</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$870K</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$296M</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">SM-6 / SM-3 Interceptors</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">187</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$4.3M–$12M</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$1.2B</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">GBU-28 Bunker Busters</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">86</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$145K</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$12.5M</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">GBU-57 MOP (Massive Ordnance Penetrator)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">20</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$3.5M</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$70M</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Hellfire / JAGM Missiles</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">1,850+</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$150K</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$278M</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Other Munitions &amp; Expendables</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">—</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">—</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$6.3B+</td>
                    </tr>
                    <tr className="bg-gray-800 font-bold">
                      <td className="px-4 py-3 text-white">Total Munitions Cost</td>
                      <td className="px-4 py-3 text-right text-white">—</td>
                      <td className="px-4 py-3 text-right text-white">—</td>
                      <td className="px-4 py-3 text-right font-mono text-red-300">$11.3B</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Aircraft Losses */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Aircraft Losses &amp; Damage</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Iran&apos;s integrated air defense network — bolstered by Russian-supplied S-300 systems and
                indigenous Bavar-373 systems — inflicted the heaviest US aircraft losses since Vietnam. A
                total of 42 aircraft were lost or damaged beyond immediate field repair.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Aircraft Type</th>
                      <th className="px-4 py-3 font-semibold text-right">Lost</th>
                      <th className="px-4 py-3 font-semibold text-right">Damaged</th>
                      <th className="px-4 py-3 font-semibold text-right">Unit Cost</th>
                      <th className="px-4 py-3 font-semibold text-right">Replacement Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">MQ-9 Reaper (drone)</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">24</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">0</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$32M</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$768M</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">F-16C/D Fighting Falcon</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">4</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">2</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$63M</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$252M</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">F/A-18E/F Super Hornet</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">2</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">2</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$67M</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$134M</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">F-15E Strike Eagle</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">2</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">1</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$88M</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$176M</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">F-35A Lightning II</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">1</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">1</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$80M</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$80M</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">MQ-4C Triton / RQ-4 Global Hawk</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">2</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">0</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$131M</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$262M</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Other (helos, ISR, tankers)</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">1</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">0</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">varies</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">~$45M</td>
                    </tr>
                    <tr className="bg-gray-800 font-bold">
                      <td className="px-4 py-3 text-white">Total</td>
                      <td className="px-4 py-3 text-right font-mono text-red-300">36</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-300">6</td>
                      <td className="px-4 py-3 text-right text-white">—</td>
                      <td className="px-4 py-3 text-right font-mono text-red-300">~$1.72B</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Note: Replacement costs reflect flyaway unit costs and do not include associated systems,
                sensors, or training pipeline impacts. Full aircraft reconstitution is estimated at $8.7B
                in the Pentagon supplemental.
              </p>
            </section>

            {/* Carrier Strike Groups */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Carrier Strike Groups Deployed</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">CSG</th>
                      <th className="px-4 py-3 font-semibold">Carrier</th>
                      <th className="px-4 py-3 font-semibold">AOR</th>
                      <th className="px-4 py-3 font-semibold text-right">Ships</th>
                      <th className="px-4 py-3 font-semibold text-right">Aircraft</th>
                      <th className="px-4 py-3 font-semibold text-right">Personnel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">CSG-2</td>
                      <td className="px-4 py-3 text-gray-300">USS Eisenhower (CVN-69)</td>
                      <td className="px-4 py-3 text-gray-400">Arabian Sea</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">9</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">75+</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">7,500</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">CSG-10</td>
                      <td className="px-4 py-3 text-gray-300">USS Harry S. Truman (CVN-75)</td>
                      <td className="px-4 py-3 text-gray-400">Persian Gulf</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">8</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">72+</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">7,200</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">CSG-5</td>
                      <td className="px-4 py-3 text-gray-300">USS Ronald Reagan (CVN-76)</td>
                      <td className="px-4 py-3 text-gray-400">Gulf of Oman</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">7</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">70+</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">6,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Combined, the three CSGs put over 21,500 sailors and Marines at sea with 217+ aircraft and
                24 escort warships. Daily operating cost for all three groups: approximately $19.5 million
                in fuel, food, and maintenance alone — before a single weapon was fired.
              </p>
            </section>

            {/* Personnel */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Personnel Deployed</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Component</th>
                      <th className="px-4 py-3 font-semibold text-right">Estimated Personnel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Navy (afloat)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">28,000</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Air Force (regional bases)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">18,500</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Army (force protection, AD, logistics)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">12,000</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Marines</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">6,500</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Special Operations</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">2,200</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Intelligence / Cyber</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">3,800</td>
                    </tr>
                    <tr className="bg-gray-800 font-bold">
                      <td className="px-4 py-3 text-white">Total Deployed (peak)</td>
                      <td className="px-4 py-3 text-right font-mono text-red-300">~71,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Casualties by Category */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Casualty Figures by Category</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Category</th>
                      <th className="px-4 py-3 font-semibold text-right">Killed</th>
                      <th className="px-4 py-3 font-semibold text-right">Wounded</th>
                      <th className="px-4 py-3 font-semibold text-right">Missing</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">US Military</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">15</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">538+</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">0</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Iranian Military (IRGC + Artesh)</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">1,760+</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">4,200+ (est.)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">Unknown</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Iranian Civilians</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">1,701</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">5,900+ (est.)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">Unknown</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200 pl-8">— Children</td>
                      <td className="px-4 py-3 text-right font-mono text-orange-400">254</td>
                      <td className="px-4 py-3 text-right font-mono text-orange-400">800+ (est.)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">—</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Lebanese (all categories)</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">3,756+</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">8,400+ (est.)</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">Unknown</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Oil Price Timeline */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Oil Price Timeline (Brent Crude)</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Date</th>
                      <th className="px-4 py-3 font-semibold text-right">Brent ($/bbl)</th>
                      <th className="px-4 py-3 font-semibold">Event</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">Feb 25</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">$70.40</td>
                      <td className="px-4 py-3 text-gray-400">Pre-war baseline</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-300">Feb 27</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">$89.20</td>
                      <td className="px-4 py-3 text-gray-400">Day after strikes begin</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">Mar 5</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">$97.80</td>
                      <td className="px-4 py-3 text-gray-400">Iran mines Hormuz</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-300">Mar 14</td>
                      <td className="px-4 py-3 text-right font-mono text-orange-400">$108.50</td>
                      <td className="px-4 py-3 text-gray-400">Blockade announced</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">Apr 2</td>
                      <td className="px-4 py-3 text-right font-mono text-orange-400">$118.30</td>
                      <td className="px-4 py-3 text-gray-400">Tanker attacks reported</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-300">Apr 17</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$126.40</td>
                      <td className="px-4 py-3 text-gray-400 font-semibold">Peak price</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">May 10</td>
                      <td className="px-4 py-3 text-right font-mono text-orange-400">$112.70</td>
                      <td className="px-4 py-3 text-gray-400">SPR release + OPEC increase</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-300">Jun 14</td>
                      <td className="px-4 py-3 text-right font-mono text-yellow-400">$94.50</td>
                      <td className="px-4 py-3 text-gray-400">Peace deal signed</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-300">Jul 1</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-300">$82.10</td>
                      <td className="px-4 py-3 text-gray-400">Partial normalization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed">
                The 80% price spike from $70 to $126/bbl was the sharpest oil shock since the 1990 Gulf
                War. For detailed economic analysis, see{' '}
                <Link href="/hormuz-crisis-global-economy" className="text-blue-400 underline hover:text-blue-300">
                  Hormuz Crisis &amp; Global Economy
                </Link>.
              </p>
            </section>

            {/* Iran vs Iraq vs Afghanistan Comparison */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Comparison: Iran vs. Iraq vs. Afghanistan</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Metric</th>
                      <th className="px-4 py-3 font-semibold text-right">Iran 2026</th>
                      <th className="px-4 py-3 font-semibold text-right">Iraq 2003–11</th>
                      <th className="px-4 py-3 font-semibold text-right">Afghanistan 2001–21</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Duration</td>
                      <td className="px-4 py-3 text-right text-red-400">108 days</td>
                      <td className="px-4 py-3 text-right text-gray-400">3,100+ days</td>
                      <td className="px-4 py-3 text-right text-gray-400">7,300+ days</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Total Cost</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$42B+</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$1.1T</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$2.3T</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Cost per Day</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$389M</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$355M</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">$315M</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Peak Troops</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">71,000</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">170,000</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">100,000</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">US KIA</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">15</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">4,431</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">2,461</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">US Wounded</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">538+</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">31,994</td>
                      <td className="px-4 py-3 text-right font-mono text-gray-400">20,752</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Ground Invasion</td>
                      <td className="px-4 py-3 text-right text-green-400">No</td>
                      <td className="px-4 py-3 text-right text-red-400">Yes</td>
                      <td className="px-4 py-3 text-right text-red-400">Yes</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">AUMF Passed</td>
                      <td className="px-4 py-3 text-right text-yellow-400">No</td>
                      <td className="px-4 py-3 text-right text-gray-400">Yes</td>
                      <td className="px-4 py-3 text-right text-gray-400">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Congressional Authorization */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">Congressional Authorization Status</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                The Iran War was conducted without a specific Authorization for Use of Military Force
                (AUMF). The administration cited the 2001 AUMF (targeting al-Qaeda and associated forces)
                and Article II constitutional authority as the legal basis for operations.
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
                <li>
                  <strong className="text-white">War Powers notification:</strong> Submitted to Congress
                  February 27, 2026 — 48 hours after strikes began
                </li>
                <li>
                  <strong className="text-white">60-day clock:</strong> Expired April 27, 2026 without
                  congressional action
                </li>
                <li>
                  <strong className="text-white">Iran AUMF (S.3847):</strong> Introduced May 2, 2026;
                  never brought to floor vote
                </li>
                <li>
                  <strong className="text-white">War Powers Resolution challenge:</strong> Filed by 38
                  senators; ruled non-justiciable by courts
                </li>
                <li>
                  <strong className="text-white">$87.6B supplemental:</strong> Submitted May 19; still
                  under committee review
                </li>
              </ul>
            </section>

            {/* Supplemental Breakdown */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-red-400">$87.6 Billion Supplemental Breakdown</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Line Item</th>
                      <th className="px-4 py-3 font-semibold text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">War cost reimbursement</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$42.0B</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Munitions replenishment</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$18.4B</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Aircraft replacement</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$8.7B</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Naval vessel repairs &amp; drones</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$6.2B</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Sustained force posture (CENTCOM)</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$5.8B</td>
                    </tr>
                    <tr className="bg-gray-950">
                      <td className="px-4 py-3 text-gray-200">Medical care &amp; veteran support</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$3.9B</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="px-4 py-3 text-gray-200">Intel &amp; cyber reconstitution</td>
                      <td className="px-4 py-3 text-right font-mono text-red-400">$2.6B</td>
                    </tr>
                    <tr className="bg-gray-800 font-bold">
                      <td className="px-4 py-3 text-white">Total Supplemental Request</td>
                      <td className="px-4 py-3 text-right font-mono text-red-300">$87.6B</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-red-400">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-lg border border-gray-700 bg-gray-900 p-6">
                    <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <RelatedArticles
                articles={[
                  { title: 'What Did the Iran War Cost?', href: '/what-did-the-iran-war-cost' },
                  { title: 'Iran War 2026: Full Timeline', href: '/iran-war-2026' },
                  { title: 'Iran War Cost Breakdown', href: '/analysis/iran-war-cost-breakdown' },
                  { title: 'True Cost of the Iran Peace Deal', href: '/analysis/true-cost-iran-peace-deal' },
                  { title: 'Hormuz Crisis & Global Economy', href: '/hormuz-crisis-global-economy' },
                  { title: 'Hormuz Crisis Analysis', href: '/analysis/hormuz-crisis' },
                ]}
              />
            </section>

            <BackToTop />
          </article>
        </div>
      </main>
    </>
  )
}
