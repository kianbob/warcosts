import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt, slugify } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import {
  WarCostRankChart,
  CasualtiesRankChart,
  ConflictsCountChart,
  WarPeacePieChart,
  SpendingBubbleChart,
} from './PresidentsWarCharts'

export const metadata: Metadata = {
  title: 'Every President Ranked by War Record',
  description:
    'Data-driven ranking of every US president by wars started, military spending, casualties, and executive war powers.',
}

export default function PresidentsWarRecordPage() {
  const presidents = loadData('presidents.json')

  // Compute rankings
  const byCost = [...presidents]
    .filter((p: any) => p.warCostAdjusted2024 > 0)
    .sort((a: any, b: any) => b.warCostAdjusted2024 - a.warCostAdjusted2024)

  const byDeaths = [...presidents]
    .filter((p: any) => p.totalUSDeaths > 0)
    .sort((a: any, b: any) => b.totalUSDeaths - a.totalUSDeaths)

  const byConflicts = [...presidents]
    .filter((p: any) => p.conflicts.length > 0)
    .sort((a: any, b: any) => b.conflicts.length - a.conflicts.length)

  const peacetimePresidents = presidents.filter((p: any) => p.conflicts.length === 0)
  const wartimePresidents = presidents.filter((p: any) => p.conflicts.length > 0)

  const totalCost = presidents.reduce((s: number, p: any) => s + (p.warCostAdjusted2024 || 0), 0)
  const totalDeaths = presidents.reduce((s: number, p: any) => s + p.totalUSDeaths, 0)

  const costChartData = byCost.slice(0, 15).map((p: any) => ({
    name: p.fullName || p.name,
    costT: p.warCostAdjusted2024 / 1e12,
  }))

  const deathChartData = byDeaths.slice(0, 12).map((p: any) => ({
    name: p.fullName || p.name,
    deaths: p.totalUSDeaths,
  }))

  const conflictChartData = byConflicts.slice(0, 12).map((p: any) => ({
    name: p.fullName || p.name,
    count: p.conflicts.length,
  }))

  const bubbleData = wartimePresidents.map((p: any) => ({
    name: p.fullName || p.name,
    conflicts: p.conflicts.length,
    costT: (p.warCostAdjusted2024 || 0) / 1e12,
    deaths: p.totalUSDeaths,
  }))

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Presidents & War Record' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-2">Deep Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold leading-tight mb-4">
          Every President Ranked by War
        </h1>
        <p className="text-stone-400 text-lg max-w-3xl">
          Who fought the most wars? Who spent the most? Who kept the peace? A data-driven
          analysis of every commander-in-chief from Washington to the present — ranked by
          conflicts, costs, casualties, and executive war powers.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div>
            <p className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</p>
            <p className="text-stone-500 text-sm">Total War Cost (2024$)</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{fmt(totalDeaths)}</p>
            <p className="text-stone-500 text-sm">Total US War Deaths</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{wartimePresidents.length}/{presidents.length}</p>
            <p className="text-stone-500 text-sm">Presidents Who Waged War</p>
          </div>
        </div>
      </div>

      <ShareButtons title="Every President Ranked by War — Data Analysis" />

      {/* Table of Contents */}
      <div className="bg-white border rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">📋 Contents</h2>
        <ul className="space-y-1 text-sm">
          <li><a href="#overview" className="text-red-700 hover:underline">1. Overview: A Nation Almost Always at War</a></li>
          <li><a href="#cost-ranking" className="text-red-700 hover:underline">2. Ranked by War Cost (Inflation-Adjusted)</a></li>
          <li><a href="#casualties-ranking" className="text-red-700 hover:underline">3. Ranked by US Military Deaths</a></li>
          <li><a href="#conflicts-ranking" className="text-red-700 hover:underline">4. Ranked by Number of Conflicts</a></li>
          <li><a href="#executive-power" className="text-red-700 hover:underline">5. Executive War Powers: Who Bypassed Congress?</a></li>
          <li><a href="#peacetime" className="text-red-700 hover:underline">6. Presidents Who Kept the Peace</a></li>
          <li><a href="#warmakers" className="text-red-700 hover:underline">7. The Warmakers: Presidents Who Expanded Conflict</a></li>
          <li><a href="#era-analysis" className="text-red-700 hover:underline">8. War by Era: How Presidential War-Making Changed</a></li>
          <li><a href="#party-analysis" className="text-red-700 hover:underline">9. War by Party: Do Democrats or Republicans Wage More War?</a></li>
          <li><a href="#complete-ranking" className="text-red-700 hover:underline">10. Complete Presidential War Ranking</a></li>
          <li><a href="#conclusion" className="text-red-700 hover:underline">11. Conclusion: The Imperial Pattern</a></li>
        </ul>
      </div>

      {/* Section 1: Overview */}
      <section id="overview" className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
          1. Overview: A Nation Almost Always at War
        </h2>
        <p className="text-stone-700 leading-relaxed mb-4">
          The United States has been at war or engaged in significant military conflict for
          approximately 225 of its 249 years of existence — over 90% of the time. Of the
          {' '}{presidents.length} presidents and governing bodies in our dataset,
          {' '}<strong>{wartimePresidents.length}</strong> presided over military conflicts while
          only <strong>{peacetimePresidents.length}</strong> served without major military engagement.
        </p>
        <p className="text-stone-700 leading-relaxed mb-4">
          The total cost of American wars, adjusted for inflation to 2024 dollars, exceeds
          {' '}<strong>{fmtMoney(totalCost)}</strong>. These wars have cost <strong>{fmt(totalDeaths)}</strong>{' '}
          American military lives — and millions more civilian lives abroad.
        </p>
        <p className="text-stone-700 leading-relaxed mb-6">
          This analysis ranks every president across four dimensions: war cost (inflation-adjusted),
          US military casualties, number of conflicts, and use of executive war powers without
          congressional authorization. The data tells a story of steadily expanding presidential
          war-making power and a Congress increasingly unable or unwilling to assert its
          constitutional authority.
        </p>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Wartime vs. Peacetime Presidents</h3>
          <WarPeacePieChart wartime={wartimePresidents.length} peacetime={peacetimePresidents.length} />
        </div>
      </section>

      {/* Section 2: Cost Ranking */}
      <section id="cost-ranking" className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
          2. Ranked by War Cost (Inflation-Adjusted to 2024)
        </h2>
        <p className="text-stone-700 leading-relaxed mb-4">
          When adjusted for inflation, the most expensive presidencies in terms of war spending
          paint a clear picture: the two world wars and the post-9/11 conflicts dominate.
          George W. Bush&apos;s War on Terror has become the most expensive military undertaking in
          American history when accounting for long-term costs including veteran care and interest
          on war debt.
        </p>

        <div className="bg-white border rounded-lg p-6 mb-6">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Top 15 Presidents by War Cost (2024 Trillions)</h3>
          <WarCostRankChart data={costChartData} />
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-2 pr-4">Rank</th>
                <th className="py-2 pr-4">President</th>
                <th className="py-2 pr-4">Years</th>
                <th className="py-2 pr-4 text-right">War Cost (2024$)</th>
                <th className="py-2 pr-4">Key Conflicts</th>
              </tr>
            </thead>
            <tbody>
              {byCost.slice(0, 15).map((p: any, i: number) => (
                <tr key={p.name} className="border-b border-stone-200">
                  <td className="py-2 pr-4 font-bold text-red-700">{i + 1}</td>
                  <td className="py-2 pr-4">
                    <Link href={`/presidents/${slugify(p.name)}`} className="text-primary hover:underline font-medium">
                      {p.fullName || p.name}
                    </Link>
                  </td>
                  <td className="py-2 pr-4 text-stone-500 text-xs">{p.years}</td>
                  <td className="py-2 pr-4 text-right font-bold text-red-800">{fmtMoney(p.warCostAdjusted2024)}</td>
                  <td className="py-2 text-xs text-stone-500">{p.conflicts.slice(0, 2).join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <p className="text-sm text-red-800">
            <strong>Key Insight:</strong> The top 5 most expensive war presidencies — Bush Jr.
            (War on Terror), FDR (WWII), Wilson (WWI), Reagan (Cold War buildup), and Truman
            (WWII/Korea) — account for over 85% of all war spending in American history.
            The concentration of war costs in a few presidencies reflects the industrialization
            of warfare and the dramatic expansion of the military-industrial complex after 1940.
          </p>
        </div>
      </section>

      {/* Section 3: Casualties Ranking */}
      <section id="casualties-ranking" className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
          3. Ranked by US Military Deaths
        </h2>
        <p className="text-stone-700 leading-relaxed mb-4">
          The human cost of presidential war-making is measured in lives. The Civil War
          under Lincoln remains the deadliest American conflict, followed by WWII under
          FDR and Truman, WWI under Wilson, and Vietnam under Johnson and Nixon.
        </p>

        <div className="bg-white border rounded-lg p-6 mb-6">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Top 12 Presidents by US Military Deaths</h3>
          <CasualtiesRankChart data={deathChartData} />
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-2 pr-4">Rank</th>
                <th className="py-2 pr-4">President</th>
                <th className="py-2 pr-4 text-right">US Deaths</th>
                <th className="py-2 pr-4 text-right">Wounded</th>
                <th className="py-2 pr-4">Primary Conflict</th>
              </tr>
            </thead>
            <tbody>
              {byDeaths.slice(0, 15).map((p: any, i: number) => (
                <tr key={p.name} className="border-b border-stone-200">
                  <td className="py-2 pr-4 font-bold text-red-700">{i + 1}</td>
                  <td className="py-2 pr-4">
                    <Link href={`/presidents/${slugify(p.name)}`} className="text-primary hover:underline font-medium">
                      {p.fullName || p.name}
                    </Link>
                  </td>
                  <td className="py-2 pr-4 text-right font-bold text-red-800">{fmt(p.totalUSDeaths)}</td>
                  <td className="py-2 pr-4 text-right text-stone-500">{p.casualties?.wounded ? fmt(p.casualties.wounded) : '—'}</td>
                  <td className="py-2 text-xs text-stone-500">{p.conflicts[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-5">
          <p className="text-sm text-stone-300">
            <strong className="text-white">The Pattern:</strong> Note the dramatic decline
            in American military deaths after Vietnam. This doesn&apos;t mean less war — it means
            American war-making shifted to strategies that minimize US casualties while
            maximizing foreign civilian casualties: drone strikes, air campaigns, proxy wars,
            and special operations. The body count simply moved to other nations.
          </p>
        </div>
      </section>

      {/* Section 4: Conflicts Ranking */}
      <section id="conflicts-ranking" className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
          4. Ranked by Number of Conflicts
        </h2>
        <p className="text-stone-700 leading-relaxed mb-4">
          Some presidents inherited conflicts; others created them. The number of simultaneous
          military engagements has grown dramatically since WWII, as the national security state
          enabled presidents to conduct multiple operations worldwide without formal declarations of war.
        </p>

        <div className="bg-white border rounded-lg p-6 mb-6">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Presidents by Number of Conflicts</h3>
          <ConflictsCountChart data={conflictChartData} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold mb-2 text-red-700">Most Conflicts</h3>
            <ol className="space-y-1 text-sm">
              {byConflicts.slice(0, 8).map((p: any, i: number) => (
                <li key={p.name} className="flex justify-between">
                  <span>{i + 1}. <Link href={`/presidents/${slugify(p.name)}`} className="text-primary hover:underline">{p.fullName || p.name}</Link></span>
                  <span className="font-bold">{p.conflicts.length}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold mb-2 text-green-700">Most Destructive Conflicts</h3>
            <p className="text-sm text-stone-600 mb-2">
              Number of conflicts alone doesn&apos;t tell the full story. Wilson had 5 conflicts
              but only one (WWI) was catastrophic. Bush Jr. had 3, but two of them — Afghanistan
              and Iraq — cost more than $7 trillion combined.
            </p>
            <p className="text-sm text-stone-600">
              The scatter chart below shows the relationship between number of conflicts,
              total cost, and casualties.
            </p>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Conflicts vs. Cost vs. Deaths</h3>
          <p className="text-xs text-stone-500 mb-3">Bubble size = casualties. X-axis = number of conflicts. Y-axis = cost in trillions.</p>
          <SpendingBubbleChart data={bubbleData} />
        </div>
      </section>

      {/* Section 5: Executive War Powers */}
      <section id="executive-power" className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
          5. Executive War Powers: Who Bypassed Congress?
        </h2>
        <p className="text-stone-700 leading-relaxed mb-4">
          The Constitution gives Congress — not the president — the power to declare war.
          Yet the last formal declaration of war was in 1941. Since then, every president
          has used military force through executive authority, authorizations short of
          declarations, or outright unilateral action.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold text-red-700 mb-3">The Expansion of Executive War Powers</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">1789–1845</span>
                <p className="text-stone-700">Early presidents generally sought congressional authorization. Madison asked for a declaration for the War of 1812. Jefferson stretched authority for the Barbary Wars but Congress retroactively approved.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">1846</span>
                <p className="text-stone-700"><strong>Polk provokes Mexico</strong> — manufactures a crisis, then pressures Congress for a declaration. Sets the template for presidential war provocation.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">1861–1865</span>
                <p className="text-stone-700"><strong>Lincoln&apos;s wartime powers</strong> — suspends habeas corpus, imposes blockade, raises army, all before Congress reconvenes. The Civil War establishes that wartime presidents can claim virtually unlimited authority.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">1898–1909</span>
                <p className="text-stone-700"><strong>McKinley &amp; Roosevelt</strong> — the imperial presidency begins. Military operations in the Philippines, Caribbean, and Central America conducted with minimal congressional input.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">1950</span>
                <p className="text-stone-700"><strong>Truman&apos;s Korean War</strong> — calls it a &ldquo;police action,&rdquo; never asks Congress for a declaration. Establishes that presidents can wage full-scale war by simply not calling it war. 36,574 Americans die.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">1964</span>
                <p className="text-stone-700"><strong>Gulf of Tonkin</strong> — Johnson uses a fabricated attack to get a blank-check authorization. Congress surrenders its war power. 58,220 Americans die.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">1969–1974</span>
                <p className="text-stone-700"><strong>Nixon&apos;s secret wars</strong> — bombs Cambodia for 14 months without telling Congress. Demonstrates that presidents can wage entire campaigns in secret.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">1973</span>
                <p className="text-stone-700"><strong>War Powers Resolution</strong> — Congress attempts to reclaim its authority. Every subsequent president ignores it.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">1983–1989</span>
                <p className="text-stone-700"><strong>Reagan&apos;s interventions</strong> — Grenada, Lebanon, Libya, Iran-Contra. Military operations without authorization become routine. Iran-Contra proves Congress can be circumvented even when it explicitly prohibits action.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">1999</span>
                <p className="text-stone-700"><strong>Clinton&apos;s Kosovo War</strong> — 78 days of bombing without congressional authorization. Establishes that presidents can conduct sustained aerial campaigns unilaterally.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">2001</span>
                <p className="text-stone-700"><strong>The 2001 AUMF</strong> — 60 words that authorize war everywhere, forever. Used in 22+ countries across 4 administrations. Still in effect.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">2011</span>
                <p className="text-stone-700"><strong>Obama&apos;s Libya</strong> — wages war while calling it &ldquo;kinetic military action.&rdquo; Overrules his own Office of Legal Counsel. No consequences.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">2020</span>
                <p className="text-stone-700"><strong>Trump kills Soleimani</strong> — assassinates an Iranian general without congressional approval, risking full-scale war. Congress passes a resolution opposing further action; Trump ignores it.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-stone-400 w-24 shrink-0">2022–2024</span>
                <p className="text-stone-700"><strong>Biden&apos;s proxy war</strong> — commits $66.9 billion to Ukraine and conducts strikes against Houthis without specific authorization. The largest proxy war since the Cold War.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <p className="text-sm text-red-800">
            <strong>The Verdict:</strong> The trajectory is unmistakable. Presidential war power
            has expanded continuously from 1789 to the present. Congress has been unable or
            unwilling to stop this trend despite the War Powers Resolution and occasional
            rebukes. The Constitution&apos;s war power clause — Article I, Section 8 — is
            effectively a dead letter.
          </p>
        </div>
      </section>

      {/* Section 6: Peacetime Presidents */}
      <section id="peacetime" className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
          6. Presidents Who Kept the Peace
        </h2>
        <p className="text-stone-700 leading-relaxed mb-4">
          In a nation that has been at war for 90% of its existence, keeping the peace is
          itself a notable achievement. These presidents served without major military conflict:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {peacetimePresidents.map((p: any) => (
            <div key={p.name} className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <Link href={`/presidents/${slugify(p.name)}`} className="font-bold text-green-800 hover:underline">
                    {p.fullName || p.name}
                  </Link>
                  <p className="text-xs text-green-600">{p.years} · {p.party}</p>
                </div>
                <span className="text-green-600 text-lg">🕊️</span>
              </div>
              {p.majorDecisions && p.majorDecisions.length > 0 && (
                <p className="text-xs text-stone-500 mt-2">{p.majorDecisions[0]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white border rounded-lg p-5">
          <h3 className="font-bold mb-2">A Note on &ldquo;Peacetime&rdquo;</h3>
          <p className="text-sm text-stone-600">
            &ldquo;Peacetime&rdquo; is relative. Some of these presidents — like Pierce and Buchanan —
            presided over escalating sectional violence that would erupt into civil war.
            Others, like Garfield and W.H. Harrison, died before they could start wars.
            Cleveland actively <em>chose</em> peace by refusing to annex Hawaii and opposing
            imperial expansion. J.Q. Adams articulated the philosophy of non-intervention.
            The distinction matters: some kept the peace by choice, others by circumstance.
          </p>
        </div>
      </section>

      {/* Section 7: Warmakers */}
      <section id="warmakers" className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
          7. The Warmakers: Presidents Who Expanded Conflict
        </h2>
        <p className="text-stone-700 leading-relaxed mb-6">
          Some presidents inherited wars. Others started them. This distinction matters
          enormously for historical accountability. Here are the presidents who most
          clearly chose to expand American military engagement:
        </p>

        <div className="space-y-4">
          {/* War Starters */}
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold text-red-700 mb-3">🔴 Wars of Choice — Started by the President</h3>
            <div className="space-y-3 text-sm">
              <div className="border-b border-stone-100 pb-3">
                <Link href="/presidents/polk" className="font-bold text-primary hover:underline">James K. Polk</Link>
                <span className="text-stone-500"> — Mexican-American War (1846)</span>
                <p className="text-stone-600 mt-1">Manufactured the border provocation. Lied to Congress. Seized half of Mexico. The clearest case of a presidential war of aggression.</p>
              </div>
              <div className="border-b border-stone-100 pb-3">
                <Link href="/presidents/mckinley" className="font-bold text-primary hover:underline">William McKinley</Link>
                <span className="text-stone-500"> — Spanish-American War (1898)</span>
                <p className="text-stone-600 mt-1">Rode yellow journalism into war. Spain had agreed to virtually every demand. Chose empire: Philippines, Puerto Rico, Guam.</p>
              </div>
              <div className="border-b border-stone-100 pb-3">
                <Link href="/presidents/johnson" className="font-bold text-primary hover:underline">Lyndon B. Johnson</Link>
                <span className="text-stone-500"> — Vietnam escalation (1964–1968)</span>
                <p className="text-stone-600 mt-1">Used the fabricated Gulf of Tonkin incident to escalate from 23,000 advisors to 536,000 troops. 58,220 Americans died.</p>
              </div>
              <div className="border-b border-stone-100 pb-3">
                <Link href="/presidents/bush-jr" className="font-bold text-primary hover:underline">George W. Bush</Link>
                <span className="text-stone-500"> — Iraq War (2003)</span>
                <p className="text-stone-600 mt-1">Invaded Iraq based on false WMD claims. The war cost $2 trillion, killed 4,599 Americans and 185,000+ Iraqi civilians, and destabilized the entire Middle East.</p>
              </div>
              <div>
                <Link href="/presidents/nixon" className="font-bold text-primary hover:underline">Richard Nixon</Link>
                <span className="text-stone-500"> — Cambodia bombing (1969–1973)</span>
                <p className="text-stone-600 mt-1">Secretly expanded the Vietnam War into Cambodia and Laos. The bombing killed tens of thousands of civilians and contributed to the Khmer Rouge genocide.</p>
              </div>
            </div>
          </div>

          {/* War Inheritors */}
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold text-yellow-700 mb-3">🟡 Wars Inherited — Escalated or Continued</h3>
            <div className="space-y-3 text-sm">
              <div className="border-b border-stone-100 pb-3">
                <Link href="/presidents/truman" className="font-bold text-primary hover:underline">Harry Truman</Link>
                <span className="text-stone-500"> — Inherited WWII, started Korean War</span>
                <p className="text-stone-600 mt-1">Made the decision to drop atomic bombs. Started the Korean War without congressional authorization, establishing the modern template for presidential war-making.</p>
              </div>
              <div className="border-b border-stone-100 pb-3">
                <Link href="/presidents/obama" className="font-bold text-primary hover:underline">Barack Obama</Link>
                <span className="text-stone-500"> — Inherited Iraq/Afghanistan, expanded drone wars</span>
                <p className="text-stone-600 mt-1">Inherited two wars but added Libya and expanded drone strikes by 10x. The anti-war candidate became a war president.</p>
              </div>
              <div>
                <Link href="/presidents/reagan" className="font-bold text-primary hover:underline">Ronald Reagan</Link>
                <span className="text-stone-500"> — Cold War escalation, multiple interventions</span>
                <p className="text-stone-600 mt-1">Grenada, Lebanon, Libya, Iran-Contra, Central America. The largest peacetime military buildup in history.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Era Analysis */}
      <section id="era-analysis" className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
          8. War by Era: How Presidential War-Making Changed
        </h2>

        <div className="space-y-6">
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold mb-2">🏛️ The Constitutional Era (1789–1860)</h3>
            <p className="text-sm text-stone-600 mb-2">
              Presidents generally sought congressional authorization. Wars were declared.
              The War of 1812 and Mexican-American War both had formal declarations — though
              Polk manipulated Congress into the latter. This era shows the system working
              roughly as designed.
            </p>
            <p className="text-xs text-stone-400">
              Presidents: Washington, Adams, Jefferson, Madison, Monroe, J.Q. Adams, Jackson,
              Van Buren, Harrison, Tyler, Polk, Taylor, Fillmore, Pierce, Buchanan
            </p>
          </div>

          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold mb-2">⚔️ The Civil War &amp; Expansion (1861–1900)</h3>
            <p className="text-sm text-stone-600 mb-2">
              Lincoln&apos;s wartime powers dramatically expanded presidential authority. After the
              Civil War, the Indian Wars continued without congressional oversight, and the
              Spanish-American War launched American imperialism. Presidents began to view
              military power as a tool of national expansion.
            </p>
            <p className="text-xs text-stone-400">
              Presidents: Lincoln, A. Johnson, Grant, Hayes, Garfield, Arthur, Cleveland,
              B. Harrison, McKinley
            </p>
          </div>

          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold mb-2">🌍 The World Wars (1901–1945)</h3>
            <p className="text-sm text-stone-600 mb-2">
              Two world wars created the modern American military state. Wilson and FDR
              operated with congressional declarations but also dramatically expanded executive
              authority (Espionage Act, Japanese internment). The period culminated in the
              atomic bomb — the ultimate presidential weapon.
            </p>
            <p className="text-xs text-stone-400">
              Presidents: T. Roosevelt, Taft, Wilson, Harding, Coolidge, Hoover, FDR
            </p>
          </div>

          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold mb-2">🔒 The Cold War (1945–1991)</h3>
            <p className="text-sm text-stone-600 mb-2">
              The national security state (CIA, NSC, Pentagon) gave presidents permanent
              institutions for waging war. Korea, Vietnam, and dozens of covert operations
              were conducted without formal declarations. The War Powers Resolution (1973)
              was supposed to restore congressional authority — it failed completely.
            </p>
            <p className="text-xs text-stone-400">
              Presidents: Truman, Eisenhower, Kennedy, Johnson, Nixon, Ford, Carter, Reagan, Bush Sr.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold mb-2">🛩️ The Post-Cold War &amp; War on Terror (1991–Present)</h3>
            <p className="text-sm text-stone-600 mb-2">
              After 9/11, the 2001 AUMF created a permanent state of war authorization.
              Presidents now wage war by drone, proxy, and special operations with minimal
              congressional oversight. The distinction between war and peace has effectively
              disappeared — the United States is in a state of permanent, low-level,
              worldwide military engagement.
            </p>
            <p className="text-xs text-stone-400">
              Presidents: Clinton, Bush Jr., Obama, Trump, Biden
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Party Analysis */}
      <section id="party-analysis" className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
          9. War by Party: Do Democrats or Republicans Wage More War?
        </h2>
        <p className="text-stone-700 leading-relaxed mb-4">
          The partisan framing of war — Republicans as hawks, Democrats as doves — is
          largely mythical. Both parties have produced major warmakers and both have
          produced presidents who kept the peace (or tried to).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-bold text-blue-800 mb-2">Democratic War Presidents</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Polk</strong> — Mexican-American War (war of conquest)</li>
              <li>• <strong>Wilson</strong> — World War I (reversed neutrality promise)</li>
              <li>• <strong>FDR</strong> — World War II (most expensive war in history)</li>
              <li>• <strong>Truman</strong> — Korea (first undeclared war)</li>
              <li>• <strong>Kennedy/Johnson</strong> — Vietnam (fabricated justification)</li>
              <li>• <strong>Clinton</strong> — Kosovo (78 days, no authorization)</li>
              <li>• <strong>Obama</strong> — Libya, drone wars (executive war-making)</li>
              <li>• <strong>Biden</strong> — Ukraine proxy war, Houthi strikes</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h3 className="font-bold text-red-800 mb-2">Republican War Presidents</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Lincoln</strong> — Civil War (most American deaths)</li>
              <li>• <strong>McKinley</strong> — Spanish-American War (empire begins)</li>
              <li>• <strong>T. Roosevelt</strong> — Philippines, Big Stick policy</li>
              <li>• <strong>Eisenhower</strong> — Iran/Guatemala coups (CIA wars)</li>
              <li>• <strong>Nixon</strong> — Cambodia bombing (secret war)</li>
              <li>• <strong>Reagan</strong> — Grenada, Lebanon, Iran-Contra</li>
              <li>• <strong>Bush Sr.</strong> — Panama, Gulf War</li>
              <li>• <strong>Bush Jr.</strong> — Afghanistan, Iraq (most expensive)</li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-5">
          <p className="text-sm text-stone-300">
            <strong className="text-white">The Conclusion:</strong> War is bipartisan.
            Democrats started the Mexican-American War, World War I, Vietnam, and the
            Korean War. Republicans started the Spanish-American War, the Iraq War, and
            conducted the secret bombing of Cambodia. Both parties have expanded executive
            war powers. Both have bypassed Congress. The military-industrial complex has
            no party affiliation.
          </p>
        </div>
      </section>

      {/* Section 10: Complete Ranking */}
      <section id="complete-ranking" className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
          10. Complete Presidential War Ranking
        </h2>
        <p className="text-stone-700 leading-relaxed mb-4">
          Every president ranked by total war impact — combining cost, casualties, and
          number of conflicts. Presidents with no military conflicts are listed separately.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-2 pr-2">#</th>
                <th className="py-2 pr-3">President</th>
                <th className="py-2 pr-2">Party</th>
                <th className="py-2 pr-2">Years</th>
                <th className="py-2 pr-2 text-right">War Cost</th>
                <th className="py-2 pr-2 text-right">Deaths</th>
                <th className="py-2 pr-2 text-center">Conflicts</th>
                <th className="py-2">Key Conflicts</th>
              </tr>
            </thead>
            <tbody>
              {byCost.map((p: any, i: number) => (
                <tr key={p.name} className={`border-b border-stone-100 ${i < 5 ? 'bg-red-50' : ''}`}>
                  <td className="py-2 pr-2 font-bold text-red-700">{i + 1}</td>
                  <td className="py-2 pr-3">
                    <Link href={`/presidents/${slugify(p.name)}`} className="text-primary hover:underline font-medium">
                      {p.fullName || p.name}
                    </Link>
                  </td>
                  <td className="py-2 pr-2 text-stone-500">{p.party}</td>
                  <td className="py-2 pr-2 text-stone-400">{p.years}</td>
                  <td className="py-2 pr-2 text-right font-bold text-red-800">{fmtMoney(p.warCostAdjusted2024)}</td>
                  <td className="py-2 pr-2 text-right">{p.totalUSDeaths > 0 ? fmt(p.totalUSDeaths) : '—'}</td>
                  <td className="py-2 pr-2 text-center">{p.conflicts.length}</td>
                  <td className="py-2 text-stone-500">{p.conflicts.slice(0, 2).join(', ')}{p.conflicts.length > 2 ? ` +${p.conflicts.length - 2}` : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {peacetimePresidents.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-800 mb-2">🕊️ Peacetime Presidents (No Major Conflicts)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              {peacetimePresidents.map((p: any) => (
                <Link key={p.name} href={`/presidents/${slugify(p.name)}`} className="text-green-700 hover:underline">
                  {p.fullName || p.name} ({p.years})
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Section 11: Conclusion */}
      <section id="conclusion" className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
          11. Conclusion: The Imperial Pattern
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed">
          <p>
            The data reveals a clear pattern: presidential war-making power has expanded
            relentlessly from 1789 to the present. What began as a system requiring
            congressional declarations of war has evolved into one where a single person
            can order military strikes, launch drone campaigns, fund proxy wars, and
            commit billions in military aid — all without a vote.
          </p>
          <p>
            The Founders understood the danger. Madison wrote that &ldquo;the executive has no right,
            in any case, to decide the question, whether there is or is not cause for declaring
            war.&rdquo; Washington warned against &ldquo;entangling alliances.&rdquo; John Quincy Adams declared
            that America should not go abroad &ldquo;in search of monsters to destroy.&rdquo;
          </p>
          <p>
            Every one of these warnings has been ignored. The United States now maintains
            750+ military bases in 80 countries, conducts military operations on every
            continent, and has been at war continuously since 2001 under a single 60-word
            authorization passed three days after 9/11.
          </p>
          <p>
            The cost: <strong>{fmtMoney(totalCost)}</strong> in treasure.
            <strong> {fmt(totalDeaths)}</strong> American lives. And millions more lives abroad.
          </p>
          <p>
            The question for the future is whether the imperial pattern can be broken — or
            whether it is simply the nature of the American presidency to wage war.
          </p>
        </div>

        <blockquote className="border-l-4 border-red-800 pl-4 mt-8 mb-4">
          <p className="text-stone-600 italic leading-relaxed">
            &ldquo;Of all the enemies to public liberty war is, perhaps, the most to be dreaded,
            because it comprises and develops the germ of every other. War is the parent of
            armies; from these proceed debts and taxes; and armies, and debts, and taxes are
            the known instruments for bringing the many under the domination of the few.&rdquo;
          </p>
          <footer className="text-stone-500 mt-2">— James Madison, &ldquo;Political Observations&rdquo; (1795)</footer>
        </blockquote>
      </section>

      {/* Related Links */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/presidents" className="bg-stone-800 rounded-lg p-4 hover:bg-stone-700 transition">
            <h3 className="font-bold text-sm">Presidents at War</h3>
            <p className="text-stone-400 text-xs mt-1">Browse all {presidents.length} presidents with war data</p>
          </Link>
          <Link href="/war-votes" className="bg-stone-800 rounded-lg p-4 hover:bg-stone-700 transition">
            <h3 className="font-bold text-sm">Congressional War Votes</h3>
            <p className="text-stone-400 text-xs mt-1">Every major war authorization vote since 1812</p>
          </Link>
          <Link href="/analysis/congressional-authority" className="bg-stone-800 rounded-lg p-4 hover:bg-stone-700 transition">
            <h3 className="font-bold text-sm">Congressional War Authority</h3>
            <p className="text-stone-400 text-xs mt-1">How Congress lost the power to declare war</p>
          </Link>
        </div>
      </div>

      
      <RelatedArticles articles={[{"slug":"congressional-authority","title":"Death of War Powers","desc":"19 wars without Congress."},{"slug":"iran-war-no-authorization","title":"Iran: No Authorization","desc":"The war Congress never authorized."},{"slug":"presidents-at-war","title":"Presidents at War","desc":"Every war president ranked."},{"slug":"undeclared-wars","title":"America's Undeclared Wars","desc":"Wars since 1942 without declarations."}]} />
      <BackToTop />
    </div>
  )
}
