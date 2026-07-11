import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import FaqJsonLd from '@/components/FaqJsonLd'

export const metadata: Metadata = {
  title: 'State Military Footprint — Defense Spending & Jobs by State | WarCosts',
  description: 'Explore DoD spending, defense jobs, military bases, and economic impact across all 54 US states and territories. See how the military-industrial complex shapes your state.',
  alternates: { canonical: 'https://www.warcosts.org/states' },
}

interface StateEntry {
  state: string; abbr: string; slug: string; bases: number;
  dodSpending: number; directJobs: number; pctGsp: number;
}

export default function StatesIndexPage() {
  const states = loadData('state-military-index.json') as StateEntry[]
  const sorted = [...states].sort((a, b) => (b.dodSpending || 0) - (a.dodSpending || 0))

  const totalSpending = states.reduce((s, x) => s + (x.dodSpending || 0), 0)
  const totalJobs = states.reduce((s, x) => s + (x.directJobs || 0), 0)
  const totalBases = states.reduce((s, x) => s + (x.bases || 0), 0)

  const topSpenders = sorted.slice(0, 10)
  const maxSpend = topSpenders[0]?.dodSpending || 1
  const topMilitarized = [...states].filter(s => s.pctGsp > 0).sort((a, b) => b.pctGsp - a.pctGsp).slice(0, 10)
  const maxPct = topMilitarized[0]?.pctGsp || 1
  const topBases = [...states].sort((a, b) => (b.bases || 0) - (a.bases || 0)).slice(0, 5)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"ItemList","name":"State Military Footprint","description":"Defense spending, jobs, and military bases across all US states and territories.","url":"https://www.warcosts.org/states"}) }} />    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'State Military Footprint' }]} />

      {/* Dark Hero */}
      <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 mt-4">
        <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
          The Defense Economy, State by State
        </h1>
        <p className="text-stone-400 text-lg max-w-3xl mb-8">
          The defense industry isn&apos;t spread evenly. A handful of states receive the lion&apos;s share
          of Pentagon contracts, host the most bases, and depend on military spending for their economies.
          This is how the military-industrial complex keeps Congress voting for war budgets.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmtMoney(totalSpending * 1e9)}</div>
            <div className="text-stone-400 text-sm mt-1">Total DoD Spending</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(totalJobs)}</div>
            <div className="text-stone-400 text-sm mt-1">Direct Defense Jobs</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(totalBases)}</div>
            <div className="text-stone-400 text-sm mt-1">Military Installations</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{states.length}</div>
            <div className="text-stone-400 text-sm mt-1">States & Territories</div>
          </div>
        </div>
        <ShareButtons title="State Military Footprint" />
      </div>

      {/* Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Biggest Spenders */}
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">💰 Biggest Defense Spenders</h2>
          <div className="space-y-3">
            {topSpenders.map((s, i) => {
              const pct = (s.dodSpending / maxSpend) * 100
              return (
                <Link key={s.slug} href={`/states/${s.slug}`} className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-stone-400 font-mono text-lg w-8">#{i + 1}</span>
                    <span className="font-medium text-stone-900 group-hover:text-red-700 transition-colors flex-1">
                      {s.state} <span className="text-stone-400 text-sm">{s.abbr}</span>
                    </span>
                    <span className="text-red-700 font-bold">{fmtMoney(s.dodSpending * 1e9)}</span>
                  </div>
                  <div className="ml-11 bg-stone-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-red-700 h-full rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Most Militarized */}
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🎯 Most Militarized (% of GSP)</h2>
          <p className="text-stone-500 text-sm mb-3">States most economically dependent on Pentagon spending.</p>
          <div className="space-y-3">
            {topMilitarized.map((s, i) => {
              const pct = (s.pctGsp / maxPct) * 100
              return (
                <Link key={s.slug} href={`/states/${s.slug}`} className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-stone-400 font-mono text-lg w-8">#{i + 1}</span>
                    <span className="font-medium text-stone-900 group-hover:text-red-700 transition-colors flex-1">
                      {s.state} <span className="text-stone-400 text-sm">{s.abbr}</span>
                    </span>
                    <span className="text-red-700 font-bold">{s.pctGsp}%</span>
                  </div>
                  <div className="ml-11 bg-stone-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-purple-700 h-full rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Most Bases */}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-10">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">🏗️ Most Military Installations</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {topBases.map((s, i) => (
            <Link key={s.slug} href={`/states/${s.slug}`} className="text-center hover:text-red-700 transition-colors">
              <div className="text-3xl font-bold text-stone-900 font-[family-name:var(--font-heading)]">{s.bases}</div>
              <div className="text-sm text-stone-500">{s.state}</div>
              <div className="text-xs text-stone-400">#{i + 1}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Context callout */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-10">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">🗺️ Why It&apos;s Not Even</h2>
        <p className="text-stone-400 leading-relaxed">
          Defense spending is concentrated by design. Powerful senators and representatives steer contracts
          to their districts, creating a feedback loop: defense jobs create voters who support defense spending,
          which creates more defense jobs. This is why the F-35 has parts manufactured in 45 states —
          it&apos;s not engineering efficiency, it&apos;s political insurance. Every congressional district with
          a defense plant has a representative who will vote against cutting the program.
        </p>
        <div className="flex gap-3 mt-4 flex-wrap">
          <Link href="/analysis/military-industrial-complex" className="text-red-400 hover:text-red-300 text-sm underline">Military-Industrial Complex →</Link>
          <Link href="/contractors" className="text-red-400 hover:text-red-300 text-sm underline">Defense Contractors →</Link>
          <Link href="/spending" className="text-red-400 hover:text-red-300 text-sm underline">Military Spending →</Link>
        </div>
      </div>

      {/* Full Table */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">All States & Territories</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-stone-200 text-stone-400 text-sm">
              <th className="py-3 pr-4">#</th>
              <th className="py-3 pr-4">State</th>
              <th className="py-3 pr-4 text-right">DoD Spending</th>
              <th className="py-3 pr-4 text-right">Jobs</th>
              <th className="py-3 pr-4 text-right">Bases</th>
              <th className="py-3 text-right">% of GSP</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((s, i) => (
              <tr key={s.slug} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
                <td className="py-3 pr-4 text-stone-500 text-sm">{i + 1}</td>
                <td className="py-3 pr-4">
                  <Link href={`/states/${s.slug}`} className="text-stone-900 hover:text-red-700 transition-colors font-medium">
                    {s.state}
                  </Link>
                  <span className="text-stone-500 text-sm ml-2">{s.abbr}</span>
                </td>
                <td className="py-3 pr-4 text-right text-red-700 font-medium">
                  {s.dodSpending ? fmtMoney(s.dodSpending * 1e9) : '—'}
                </td>
                <td className="py-3 pr-4 text-right text-stone-600">{s.directJobs ? fmt(s.directJobs) : '—'}</td>
                <td className="py-3 pr-4 text-right text-stone-600">{s.bases ? fmt(s.bases) : '—'}</td>
                <td className="py-3 text-right text-stone-600">{s.pctGsp ? `${s.pctGsp}%` : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* How the System Works */}
      <section className="mt-10">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How the Defense Pork Barrel Works</h2>
        <div className="space-y-4 text-stone-600 text-sm max-w-3xl">
          <p>
            The geographic distribution of defense spending is not accidental. It&apos;s a carefully engineered political
            strategy that ensures every member of Congress has a financial stake in the defense budget:
          </p>
          <ul className="space-y-2 ml-4">
            <li>• <strong>The F-35 has parts in 45 states</strong> — not for engineering efficiency, but to create 45 senators who will vote against cutting the program</li>
            <li>• <strong>Base Realignment and Closure (BRAC)</strong> commissions were needed because Congress wouldn&apos;t close bases voluntarily — each base is a jobs program for its district</li>
            <li>• <strong>Defense contractors spread subcontracts</strong> across as many districts as possible, then provide those members with campaign contributions</li>
            <li>• <strong>The revolving door</strong>: over 1,700 former senior Pentagon officials now work for defense contractors, and vice versa</li>
          </ul>
          <p>
            The result: every defense budget passes with bipartisan supermajorities, even as other government spending
            faces fierce partisan opposition. When every district benefits from military spending, no one wants to cut it.
          </p>
        </div>
      </section>

      {/* Your State's War Cost */}
      <section className="mt-10 bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-red-900">Calculate Your State&apos;s War Cost</h2>
        <p className="text-stone-700 text-sm mb-4">
          Want to see what your state&apos;s share of $8 trillion in war spending could have bought in local schools,
          hospitals, and infrastructure? Try our interactive State Impact Calculator.
        </p>
        <Link href="/tools/state-impact" className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition text-sm">
          State Impact Calculator →
        </Link>
      </section>

      {/* Related Pages */}
      <section className="mt-10 bg-stone-50 border rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/tools/state-impact" className="text-red-800 hover:underline">→ State Impact Calculator — Your state&apos;s war cost</Link></li>
          <li><Link href="/contractors" className="text-red-800 hover:underline">→ Defense Contractors — Who profits</Link></li>
          <li><Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline">→ Military-Industrial Complex — How it works</Link></li>
          <li><Link href="/us-military-spending" className="text-red-800 hover:underline">→ US Military Spending — $886B breakdown</Link></li>
          <li><Link href="/tools/tax-receipt" className="text-red-800 hover:underline">→ Tax Receipt Calculator — Your personal military tax burden</Link></li>
        </ul>
      </section>

      <div className="mt-10 text-stone-500 text-sm">
        <p>Data sources: Department of Defense, Bureau of Economic Analysis, Defense Manpower Data Center. Spending figures in billions USD.</p>
      </div>

      {/* The Political Economy of Defense */}
      <section className="mt-10">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Political Economy of Defense Spending</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">💵 Campaign Contributions</h3>
            <p className="text-stone-600 text-sm">
              The top 5 defense contractors (Lockheed Martin, Boeing, Raytheon, General Dynamics, Northrop Grumman)
              contribute millions annually to congressional campaigns. Members on the Armed Services and Appropriations
              committees receive the most. This creates a direct financial incentive to maintain or increase defense spending.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">🔄 The Revolving Door</h3>
            <p className="text-stone-600 text-sm">
              Over 1,700 former senior Pentagon officials now work for defense contractors, and many contractor
              executives rotate into Pentagon positions. This revolving door ensures institutional alignment between
              the military and the industry that profits from military spending.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">🏭 Base Closure Politics</h3>
            <p className="text-stone-600 text-sm">
              The BRAC (Base Realignment and Closure) process was created because Congress wouldn&apos;t close
              unneeded bases voluntarily — every base is a jobs program for its district. There hasn&apos;t been
              a BRAC round since 2005 despite the Pentagon requesting one.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">📊 The Jobs Argument</h3>
            <p className="text-stone-600 text-sm">
              Defense spending creates jobs — but fewer per dollar than any other category. UMass PERI found $1B
              in military spending creates ~5,000 jobs vs. 13,000 in education and 9,000 in healthcare. The &ldquo;jobs
              argument&rdquo; is the industry&apos;s most effective lobbying tool despite the economics.
            </p>
          </div>
        </div>
      </section>

      <FaqJsonLd faqs={[
        { q: 'Which US state receives the most military spending?', a: `${sorted[0]?.state || 'Virginia'} receives the most Department of Defense spending, followed by ${sorted[1]?.state || 'California'} and ${sorted[2]?.state || 'Texas'}. The top 10 states receive the majority of all defense dollars.` },
        { q: 'Which state is most economically dependent on the military?', a: `${topMilitarized[0]?.state || 'Virginia'} has the highest military spending as a percentage of its Gross State Product at ${topMilitarized[0]?.pctGsp || 0}%, meaning its economy is most dependent on Pentagon spending.` },
        { q: 'How many military bases are in the United States?', a: `There are approximately ${fmt(totalBases)} military installations across all US states and territories, employing ${fmt(totalJobs)} direct defense workers and receiving ${fmtMoney(totalSpending * 1e9)} in DoD spending.` },
        { q: 'Why is defense spending concentrated in certain states?', a: 'Defense spending is concentrated by design. Powerful members of Congress steer contracts to their districts, and defense contractors spread subcontracts across many states to create political support. The F-35 has parts in 45 states specifically to ensure broad congressional backing.' },
        { q: 'How can I see my state\'s military impact?', a: 'Use our State Impact Calculator at warcosts.org/tools/state-impact to see your state\'s share of $8 trillion in war spending, local military casualties, and what that money could have funded in your community.' },
      ]} />

      {/* Data Note */}
      <div className="mt-6 border-t pt-4">
        <p className="text-stone-400 text-xs">
          <strong>Methodology:</strong> DoD spending includes procurement contracts, payroll, operations, and
          R&D allocated by state. &ldquo;% of GSP&rdquo; measures defense spending as a share of Gross State Product,
          indicating economic dependency on military spending. Job figures include active duty military, civilian
          DoD employees, and direct defense contractor employees but exclude indirect employment (suppliers,
          services around bases). Base counts include major installations and do not count small
          recruitment offices or reserve centers.
        </p>
      </div>

      <BackToTop />
    </main>
    </>  )
}
