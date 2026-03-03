import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import { AmericasWarsCharts } from './AmericasWarsCharts'

export const metadata: Metadata = {
  title: "America's Wars By The Numbers: A Complete Statistical Breakdown",
  description: 'Every US war ranked by cost, deaths, and duration. Total statistics on American military conflicts from 1775 to 2026. The definitive data reference.',
  openGraph: {
    title: "America's Wars By The Numbers",
    description: 'Every US war ranked by cost, deaths, duration. The definitive statistical reference.',
    url: 'https://www.warcosts.org/analysis/americas-wars-by-the-numbers',
  },
}

interface Conflict {
  id: string
  name: string
  shortName?: string
  era: string
  startYear: number
  endYear: number | null
  costInflationAdjusted: number
  usCasualties: { deaths: number; wounded: number; battleDeaths: number }
  civilianDeaths: number | null
  troopsDeployed: number | null
  outcome: string
  computed: {
    durationYears: number
    costPerUSdeath: number
  }
}

export default function AmericasWarsByTheNumbersPage() {
  const conflicts: Conflict[] = loadData('conflicts.json')

  const totalCost = conflicts.reduce((s, c) => s + (c.costInflationAdjusted || 0), 0)
  const totalUSDeaths = conflicts.reduce((s, c) => s + (c.usCasualties?.deaths || 0), 0)
  const totalCivilianDeaths = conflicts.reduce((s, c) => s + (c.civilianDeaths || 0), 0)
  const totalWounded = conflicts.reduce((s, c) => s + (c.usCasualties?.wounded || 0), 0)
  const totalConflicts = conflicts.length

  const bySpending = [...conflicts].filter(c => c.costInflationAdjusted > 0).sort((a, b) => b.costInflationAdjusted - a.costInflationAdjusted)
  const byDeaths = [...conflicts].filter(c => c.usCasualties?.deaths > 0).sort((a, b) => b.usCasualties.deaths - a.usCasualties.deaths)
  const byDuration = [...conflicts].filter(c => c.computed?.durationYears > 0).sort((a, b) => b.computed.durationYears - a.computed.durationYears)
  const byCostPerDeath = [...conflicts].filter(c => c.computed?.costPerUSdeath > 0).sort((a, b) => b.computed.costPerUSdeath - a.computed.costPerUSdeath)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Wars By The Numbers' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Definitive Reference</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          America&apos;s Wars By The Numbers
        </h1>
        <p className="text-xl text-stone-300 mb-4">A Complete Statistical Breakdown</p>
        <p className="text-stone-400 text-lg">
          Every US military conflict from the Revolutionary War to Iran 2026, ranked by cost,
          casualties, and duration. {totalConflicts} conflicts. {fmtMoney(totalCost)} spent.
          {' '}{fmt(totalUSDeaths)} American lives lost.
        </p>
      </div>

      <ShareButtons title="America's Wars By The Numbers: A Complete Statistical Breakdown" />

      {/* Summary Stats */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">📊</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">Summary — 250 Years of American War</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">{totalConflicts}</span>
            <p className="text-stone-400 text-sm">Total Conflicts</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">{fmtMoney(totalCost)}</span>
            <p className="text-stone-400 text-sm">Total Cost (2023 $)</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">{fmt(totalUSDeaths)}</span>
            <p className="text-stone-400 text-sm">US Deaths</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">{fmt(totalCivilianDeaths)}</span>
            <p className="text-stone-400 text-sm">Civilian Deaths</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">{fmt(totalWounded)}</span>
            <p className="text-stone-400 text-sm">US Wounded</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-red-400">
              {conflicts[0]?.startYear}–{new Date().getFullYear()}
            </span>
            <p className="text-stone-400 text-sm">Timespan</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <AmericasWarsCharts conflicts={conflicts as any} />

      {/* COMPLETE TABLE */}
      <div className="bg-stone-800 rounded-lg p-6 my-8 overflow-x-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Complete Wars Table</h2>
        <p className="text-stone-400 text-sm mb-4">All {totalConflicts} conflicts, sorted by date. Costs in 2023 inflation-adjusted dollars.</p>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-stone-700">
              <th className="py-2 pr-2 text-stone-400">Conflict</th>
              <th className="py-2 pr-2 text-stone-400">Years</th>
              <th className="py-2 pr-2 text-stone-400">Duration</th>
              <th className="py-2 pr-2 text-stone-400">Cost (2023$)</th>
              <th className="py-2 pr-2 text-stone-400">US Deaths</th>
              <th className="py-2 pr-2 text-stone-400">Civilian Deaths</th>
              <th className="py-2 text-stone-400">Cost/US Death</th>
            </tr>
          </thead>
          <tbody>
            {conflicts.map(c => (
              <tr key={c.id} className="border-b border-stone-700/50 hover:bg-stone-700/30">
                <td className="py-2 pr-2">
                  <Link href={`/conflicts/${c.id}`} className="text-red-400 hover:underline text-xs">
                    {c.shortName || c.name}
                  </Link>
                </td>
                <td className="py-2 pr-2 text-stone-300 text-xs">{c.startYear}–{c.endYear || 'present'}</td>
                <td className="py-2 pr-2 text-stone-300 text-xs">{c.computed?.durationYears || '–'}y</td>
                <td className="py-2 pr-2 text-red-400 text-xs font-mono">{c.costInflationAdjusted ? fmtMoney(c.costInflationAdjusted) : '–'}</td>
                <td className="py-2 pr-2 text-white text-xs font-mono">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) : '–'}</td>
                <td className="py-2 pr-2 text-stone-300 text-xs font-mono">{c.civilianDeaths ? fmt(c.civilianDeaths) : '–'}</td>
                <td className="py-2 text-stone-300 text-xs font-mono">{c.computed?.costPerUSdeath ? fmtMoney(c.computed.costPerUSdeath) : '–'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RANKED: Most Expensive */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">🏆 Most Expensive Wars</h2>
        <div className="space-y-2">
          {bySpending.slice(0, 10).map((c, i) => (
            <div key={c.id} className="flex justify-between items-center border-b border-stone-700/50 pb-2">
              <div className="flex items-center gap-3">
                <span className="text-red-400 font-bold w-6">{i + 1}.</span>
                <Link href={`/conflicts/${c.id}`} className="text-white hover:text-red-400">
                  {c.shortName || c.name}
                </Link>
                <span className="text-stone-500 text-xs">{c.startYear}–{c.endYear || 'present'}</span>
              </div>
              <span className="text-red-400 font-bold font-mono">{fmtMoney(c.costInflationAdjusted)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RANKED: Deadliest */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">💀 Deadliest Wars (US Deaths)</h2>
        <div className="space-y-2">
          {byDeaths.slice(0, 10).map((c, i) => (
            <div key={c.id} className="flex justify-between items-center border-b border-stone-700/50 pb-2">
              <div className="flex items-center gap-3">
                <span className="text-red-400 font-bold w-6">{i + 1}.</span>
                <Link href={`/conflicts/${c.id}`} className="text-white hover:text-red-400">
                  {c.shortName || c.name}
                </Link>
                <span className="text-stone-500 text-xs">{c.startYear}–{c.endYear || 'present'}</span>
              </div>
              <span className="text-red-400 font-bold font-mono">{fmt(c.usCasualties.deaths)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RANKED: Longest */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">⏱️ Longest Wars</h2>
        <div className="space-y-2">
          {byDuration.slice(0, 10).map((c, i) => (
            <div key={c.id} className="flex justify-between items-center border-b border-stone-700/50 pb-2">
              <div className="flex items-center gap-3">
                <span className="text-red-400 font-bold w-6">{i + 1}.</span>
                <Link href={`/conflicts/${c.id}`} className="text-white hover:text-red-400">
                  {c.shortName || c.name}
                </Link>
                <span className="text-stone-500 text-xs">{c.startYear}–{c.endYear || 'present'}</span>
              </div>
              <span className="text-red-400 font-bold font-mono">{c.computed.durationYears} years</span>
            </div>
          ))}
        </div>
      </div>

      {/* RANKED: Most Expensive Per Death */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">💰 Highest Cost Per US Death</h2>
        <p className="text-stone-400 text-sm mb-3">How much each American life &ldquo;cost&rdquo; in inflation-adjusted dollars — a grim measure of the rising price of war.</p>
        <div className="space-y-2">
          {byCostPerDeath.slice(0, 10).map((c, i) => (
            <div key={c.id} className="flex justify-between items-center border-b border-stone-700/50 pb-2">
              <div className="flex items-center gap-3">
                <span className="text-red-400 font-bold w-6">{i + 1}.</span>
                <Link href={`/conflicts/${c.id}`} className="text-white hover:text-red-400">
                  {c.shortName || c.name}
                </Link>
              </div>
              <span className="text-red-400 font-bold font-mono">{fmtMoney(c.computed.costPerUSdeath)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Insights */}
      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Key Patterns in the Data</h2>

        <h3 className="font-[family-name:var(--font-heading)]">Wars Are Getting More Expensive, Not Less</h3>
        <p>
          The cost per American death has risen from approximately $96,000 in the Revolutionary War to over $935 million
          in Afghanistan — a nearly 10,000× increase even after adjusting for inflation. Modern wars cost exponentially more
          per casualty because of precision-guided munitions, advanced logistics, force protection, and the long tail of
          veteran care. We spend more per death but achieve less per dollar.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">The Civil War Remains the Deadliest</h3>
        <p>
          With over 620,000 American deaths, the Civil War killed more Americans than all other US wars combined through
          Vietnam. It remains the only US conflict where American casualties exceeded 2% of the total population. To match
          that ratio today would require over 6.6 million deaths.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">Post-9/11 Wars: Maximum Cost, Minimal Result</h3>
        <p>
          The post-9/11 wars (Afghanistan, Iraq, and related operations) represent the most expensive sustained military
          campaign in US history at over $8 trillion. Yet they achieved arguably the least: Afghanistan is back under Taliban
          control, Iraq is destabilized and Iranian-influenced, ISIS emerged from the chaos, and the global terrorist threat
          has dispersed rather than diminished.
        </p>

        <h3 className="font-[family-name:var(--font-heading)]">Civilian Deaths Dwarf Military Deaths in Modern Wars</h3>
        <p>
          In World War I, civilians accounted for roughly 10% of deaths. By World War II, it was approximately 50%.
          In the post-9/11 wars, civilian deaths outnumber US military deaths by ratios of 100:1 or more. The Korean War
          killed an estimated 2–3 million Korean civilians. The Vietnam War killed an estimated 2 million Vietnamese civilians.
          Modern &ldquo;precision&rdquo; warfare has not solved the civilian casualty problem — it has merely made it less visible to Americans.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Methodology</h2>
        <p>
          All cost figures are adjusted to 2023 dollars using the CPI-U index. US casualty figures are from the Department of
          Defense, Congressional Research Service, and the National Archives. Civilian casualty estimates draw from the Watson
          Institute at Brown University, the Iraq Body Count project, and academic studies. Where ranges exist, we use
          conservative (lower-bound) estimates. Duration is calculated from the first year of US military involvement to the
          last year of significant operations.
        </p>
        <p>
          Data source: <Link href="/conflicts">WarCosts Conflicts Database</Link> — our comprehensive dataset of all US military
          conflicts, available for <Link href="/downloads">download</Link>.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/cost-per-life">The Price of a Life</Link></li>
          <li><Link href="/analysis/cost-of-doing-nothing">What If We&apos;d Done Nothing?</Link></li>
          <li><Link href="/analysis/what-could-we-buy">What $11.6 Trillion Could Have Bought</Link></li>
          <li><Link href="/analysis/war-on-terror">The War on Terror: $8 Trillion Later</Link></li>
          <li><Link href="/analysis/forever-wars">The Forever Wars</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
