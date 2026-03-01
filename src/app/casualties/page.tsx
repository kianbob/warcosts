import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import { DeathsByConflictChart, CostByConflictChart } from '@/components/charts/SpendingCharts'

export const metadata: Metadata = {
  title: 'US War Casualties — Over 1M Americans, 5.2M Civilians Dead | WarCosts',
  description: 'Over 1 million Americans and 5.2 million civilians killed in US wars. The human cost by conflict, era, and the veteran aftermath.',
}

export default function CasualtiesPage() {
  const conflicts = loadData('conflicts.json')
  const stats = loadData('stats.json')

  const deathData = conflicts
    .filter((c: any) => (c.usCasualties?.deaths || 0) + (c.civilianDeaths || 0) > 0)
    .sort((a: any, b: any) => (b.usCasualties?.deaths || 0) - (a.usCasualties?.deaths || 0))
    .map((c: any) => ({
      name: c.shortName || c.name,
      usDeaths: c.usCasualties?.deaths || 0,
      civilianDeaths: c.civilianDeaths || 0,
    }))

  const costData = conflicts
    .sort((a: any, b: any) => b.costInflationAdjusted - a.costInflationAdjusted)
    .slice(0, 15)
    .map((c: any) => ({
      name: c.shortName || c.name,
      cost: c.costInflationAdjusted,
    }))

  // Era comparison
  const eraStats = conflicts.reduce((acc: any, c: any) => {
    const era = c.era || 'Unknown'
    if (!acc[era]) acc[era] = { deaths: 0, civDeaths: 0, cost: 0, count: 0 }
    acc[era].deaths += c.usCasualties?.deaths || 0
    acc[era].civDeaths += c.civilianDeaths || 0
    acc[era].cost += c.costInflationAdjusted || 0
    acc[era].count++
    return acc
  }, {})

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Casualty Data' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">The Human Cost of War</h1>
      <p className="text-muted mb-6 max-w-3xl">Every number on this page was a human being — someone&apos;s child, parent, sibling, friend. {fmt(stats.totalUSDeaths)} Americans. Over {(stats.totalCivilianDeaths/1e6).toFixed(1)} million civilians. Behind each statistic is a name that someone still mourns.</p>
      <ShareButtons title="US War Casualties — The Human Cost" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmt(stats.totalUSDeaths), label: 'Americans Killed' },
          { val: `${(stats.totalCivilianDeaths / 1e6).toFixed(1)}M+`, label: 'Civilians Killed' },
          { val: fmtMoney(stats.totalCostInflationAdjusted), label: 'Total Cost' },
          { val: '5:1', label: 'Civilian to US Death Ratio' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Narrative */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">What the Numbers Mean</h2>
        <p>{fmt(stats.totalUSDeaths)} Americans killed in war. That&apos;s more than the entire population of San Francisco. If you held a minute of silence for each American killed, you&apos;d be silent for <strong>two years straight</strong>.</p>
        <p>But American deaths are only part of the story. For every US soldier killed in Iraq, approximately <strong>65 Iraqi civilians also died</strong>. In the War on Terror broadly, the ratio of civilian to US military deaths exceeds 50:1. These civilians didn&apos;t choose war. They were farmers, teachers, children, doctors — people living their lives when American bombs fell on their neighborhoods.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Civilian Casualties: Getting Worse Over Time</h2>
        <p>Modern wars kill civilians at vastly higher rates than historical ones:</p>
        <ul>
          <li><strong>Civil War (1861-1865):</strong> ~50,000 civilian deaths. Ratio roughly 1:13 (civilian:military).</li>
          <li><strong>World War II (1941-1945):</strong> Millions of civilians, but the US homeland was untouched.</li>
          <li><strong>Vietnam (1955-1975):</strong> ~2 million Vietnamese civilians killed — 35× the US military deaths.</li>
          <li><strong>Iraq War (2003-2011):</strong> ~300,000 civilians killed — 65× the US military deaths.</li>
          <li><strong>War on Terror (2001-present):</strong> ~940,000 direct deaths, including 387,000+ civilians.</li>
        </ul>
        <p>The trend is unmistakable: as wars become more &ldquo;precise&rdquo; and technology more advanced, civilian death ratios have gotten <em>worse</em>, not better. The drone program, marketed as surgical precision, has killed an estimated 2,200 children.</p>
      </div>

      {/* Charts */}
      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Deaths by Conflict</h2>
        <DeathsByConflictChart data={deathData} />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Cost by Conflict (2023 Dollars)</h2>
        <CostByConflictChart data={costData} />
      </div>

      {/* Veteran Aftermath */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">The War Comes Home: Veteran Aftermath</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { val: '17/day', label: 'Veteran Suicides' },
            { val: '1.8M', label: 'Veterans with PTSD' },
            { val: '530K', label: 'Traumatic Brain Injuries' },
            { val: '37K+', label: 'Homeless Veterans' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-lg p-4 border text-center">
              <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
              <p className="text-muted text-xs">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="prose prose-stone max-w-none text-sm">
          <p><strong>Suicide:</strong> 17 American veterans kill themselves every day — over 6,200 per year. That&apos;s more than twice the total American combat deaths in 20 years of Afghanistan. Many waited months for VA mental health appointments. The VA budget for mental health is a fraction of the cost of a single aircraft carrier ($13B).</p>
          <p><strong>PTSD:</strong> Among Iraq and Afghanistan veterans, PTSD rates range from 11% to 29%. An estimated 1.8 million US veterans live with PTSD. Many self-medicate with alcohol and drugs, leading to addiction, family breakdown, and homelessness.</p>
          <p><strong>Traumatic Brain Injury:</strong> Over 530,000 post-9/11 service members have been diagnosed with TBI, often from IED blasts. Long-term effects include memory loss, personality changes, depression, and early-onset dementia. Many cases go undiagnosed.</p>
          <p><strong>Homelessness:</strong> On any given night, over 37,000 veterans are homeless. They served their country and now sleep under bridges. The VA estimates that 1.4 million veterans are at risk of homelessness.</p>
        </div>
      </div>

      {/* Era Comparison */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Deaths by Era</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-2 px-3">Era</th>
                <th className="py-2 px-3 text-right">US Deaths</th>
                <th className="py-2 px-3 text-right">Civilian Deaths</th>
                <th className="py-2 px-3 text-right">Total Cost</th>
                <th className="py-2 px-3 text-right">Conflicts</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(eraStats).map(([era, s]: [string, any]) => (
                <tr key={era} className="border-b border-stone-200">
                  <td className="py-2 px-3 font-semibold">{era}</td>
                  <td className="py-2 px-3 text-right">{fmt(s.deaths)}</td>
                  <td className="py-2 px-3 text-right text-red-600">{s.civDeaths > 0 ? fmt(s.civDeaths) : '—'}</td>
                  <td className="py-2 px-3 text-right text-primary">{fmtMoney(s.cost)}</td>
                  <td className="py-2 px-3 text-right">{s.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;War is a racket. It always has been. It is possibly the oldest, easily the most profitable, surely the most vicious. It is the only one in which the profits are reckoned in dollars and the losses in lives.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Major General Smedley Butler, 1935</p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• More veterans have died by suicide since 2001 than were killed in combat during the entire War on Terror.</li>
          <li>• The War on Terror has displaced <strong>38 million people</strong> — more than any conflict since WWII.</li>
          <li>• The US military counts &ldquo;military-age males&rdquo; killed in drone strikes as combatants by default — artificially lowering civilian death counts.</li>
          <li>• Agent Orange, used in Vietnam, continues to cause <strong>birth defects in Vietnamese children today</strong> — 50 years later.</li>
          <li>• Depleted uranium munitions used in Iraq are linked to a <strong>38× increase in leukemia</strong> rates in Fallujah.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/human-cost" className="text-red-800 hover:underline">→ The Human Cost of War — beyond the numbers</Link></li>
          <li><Link href="/analysis/the-aftermath" className="text-red-800 hover:underline">→ The Aftermath — long-term costs</Link></li>
          <li><Link href="/veteran-suicide" className="text-red-800 hover:underline">→ Veteran Suicide — 17 per day</Link></li>
        </ul>
      </div>
    </div>
  )
}
