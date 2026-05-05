import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'US Military Spending by Decade — 1940s to 2020s',
  description: 'Decade-by-decade breakdown of US military spending and active conflicts from the 1940s to today. Over $25 trillion spent since WWII in inflation-adjusted dollars.',
}

const decades = ['1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s']

const decadeContext: Record<string, { conflicts: string[]; insight: string }> = {
  '1940s': {
    conflicts: ['World War II (1941–1945)'],
    insight: 'Peak wartime mobilization. Military spending consumed 40% of GDP at its height in 1944 — a level never repeated.',
  },
  '1950s': {
    conflicts: ['Korean War (1950–1953)', 'Cold War buildup'],
    insight: 'The Korean War and nuclear arms race locked the US into permanent high military budgets for the first time in peacetime.',
  },
  '1960s': {
    conflicts: ['Vietnam War (1955–1975)', 'Bay of Pigs (1961)', 'Dominican Republic (1965)'],
    insight: 'Vietnam drove spending up while public opposition grew. The draft fueled one of America\'s largest anti-war movements.',
  },
  '1970s': {
    conflicts: ['Vietnam War (winding down)', 'Cold War détente'],
    insight: 'Post-Vietnam drawdown and détente briefly reduced spending. The all-volunteer force replaced the draft in 1973.',
  },
  '1980s': {
    conflicts: ['Cold War arms race', 'Grenada (1983)', 'Libya (1986)', 'Panama (1989)'],
    insight: 'Reagan\'s military buildup added $1.5T+ in spending. "Peace through strength" defined the era until the Berlin Wall fell.',
  },
  '1990s': {
    conflicts: ['Gulf War (1991)', 'Somalia (1993)', 'Bosnia (1995)', 'Kosovo (1999)'],
    insight: 'The "peace dividend" after the Cold War was short-lived. Spending dipped but never returned to pre-Cold War levels.',
  },
  '2000s': {
    conflicts: ['Afghanistan (2001–2021)', 'Iraq War (2003–2011)', 'War on Terror'],
    insight: 'Post-9/11 spending surge. Two simultaneous wars pushed budgets past WWII levels in inflation-adjusted terms.',
  },
  '2010s': {
    conflicts: ['Afghanistan (ongoing)', 'ISIS/Syria (2014–)', 'Libya (2011)', 'Yemen (support)'],
    insight: 'Sequestration briefly capped growth, but base budgets stayed above $600B. Drone warfare expanded dramatically.',
  },
  '2020s': {
    conflicts: ['Afghanistan withdrawal (2021)', 'Ukraine aid (2022–)', 'Iran (2026)'],
    insight: 'Budgets surpassed $900B by 2025. Great power competition with China replaced counterterrorism as the primary justification.',
  },
}

export default function DecadesPage() {
  const spending = loadData('military-spending.json')
  const conflicts = loadData('conflicts.json')

  const decadeData = decades.map(d => {
    const start = parseInt(d)
    const end = start + 9
    const ds = spending.filter((s: any) => s.year >= start && s.year <= end)
    const total = ds.reduce((s: number, r: any) => s + r.amount, 0)
    const active = conflicts.filter((c: any) => c.startYear <= end && c.endYear >= start)
    const deaths = active.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)
    return { decade: d, total, conflicts: active.length, deaths }
  })

  const maxSpending = Math.max(...decadeData.map(d => d.total))
  const grandTotal = decadeData.reduce((s, d) => s + d.total, 0)
  const peakDecade = decadeData.reduce((a, b) => a.total > b.total ? a : b)
  const totalDeaths = decadeData.reduce((s, d) => s + d.deaths, 0)
  const totalConflicts = new Set(conflicts.map((c: any) => c.name)).size

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Decades' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Military Spending by Decade</h1>
      <p className="text-stone-500 mb-4 max-w-3xl">
        A visual timeline of American military spending and conflicts from the 1940s to today.
        These figures represent Department of Defense budget authority in inflation-adjusted 2024 dollars,
        compiled from OMB historical tables and SIPRI data.
      </p>
      <p className="text-stone-500 mb-8 max-w-3xl">
        What the data shows is striking: the United States has never returned to pre-WWII spending levels.
        Each major conflict ratchets spending up, and the &quot;peace dividend&quot; after each war recovers only a fraction.
        The baseline keeps rising — from $150B/year in the 1950s to over $900B today.
      </p>
      <ShareButtons title="US Military Spending by Decade" />

      {/* Summary Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 mt-6">
        <div className="bg-stone-100 rounded-lg p-4 border">
          <div className="text-2xl font-bold text-primary">${(grandTotal / 1000).toFixed(1)}T</div>
          <div className="text-sm text-stone-500">Total Since 1940</div>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 border">
          <div className="text-2xl font-bold text-primary">{peakDecade.decade}</div>
          <div className="text-sm text-stone-500">Peak Spending Decade</div>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 border">
          <div className="text-2xl font-bold text-primary">{fmt(totalDeaths)}</div>
          <div className="text-sm text-stone-500">US Service Members Killed</div>
        </div>
        <div className="bg-stone-100 rounded-lg p-4 border">
          <div className="text-2xl font-bold text-primary">{totalConflicts}</div>
          <div className="text-sm text-stone-500">Distinct Conflicts</div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-amber-900 mb-3">Key Insights</h2>
        <ul className="space-y-2 text-sm text-amber-800">
          <li>📈 <strong>The ratchet effect:</strong> After every major war, spending drops — but never back to pre-war levels. Each conflict permanently raises the baseline.</li>
          <li>💰 <strong>Cost per decade is accelerating:</strong> The 2000s cost more in real terms than the entire 1940s, despite WWII being a far larger mobilization.</li>
          <li>⚔️ <strong>Permanent war footing:</strong> The US has not had a single decade without active military operations since the 1930s.</li>
          <li>📊 <strong>GDP share declined but dollars surged:</strong> Military spending fell from 40% of GDP (1944) to ~3.5% today, but absolute spending is at all-time highs.</li>
        </ul>
      </div>

      {/* Decade Cards */}
      <div className="space-y-4">
        {decadeData.map(d => {
          const ctx = decadeContext[d.decade]
          return (
            <Link key={d.decade} href={`/decades/${d.decade}`} className="block bg-white rounded-lg border p-6 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{d.decade}</h2>
                <div className="flex gap-6 text-sm">
                  <span><strong className="text-primary">${d.total.toFixed(0)}B</strong> spent</span>
                  <span><strong>{d.conflicts}</strong> conflicts</span>
                  <span><strong>{fmt(d.deaths)}</strong> deaths</span>
                </div>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-4 mb-3">
                <div className="bg-primary h-4 rounded-full transition-all" style={{ width: `${(d.total / maxSpending) * 100}%` }} />
              </div>
              {ctx && (
                <>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {ctx.conflicts.map(c => (
                      <span key={c} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded">{c}</span>
                    ))}
                  </div>
                  <p className="text-sm text-stone-500">{ctx.insight}</p>
                </>
              )}
            </Link>
          )
        })}
      </div>

      {/* What This Means */}
      <section className="mt-12 border-t pt-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What This Means</h2>
        <div className="space-y-4 text-stone-600 max-w-3xl">
          <p>
            The United States has spent over <strong>${(grandTotal / 1000).toFixed(1)} trillion</strong> on
            its military since the 1940s (in 2024 dollars). To put that in perspective, that&apos;s more than
            the combined GDP of every country in Africa and South America. It&apos;s enough to fund Medicare
            for 30+ years or eliminate student loan debt 15 times over.
          </p>
          <p>
            This isn&apos;t an argument for zero military spending — it&apos;s a call for context. When policymakers
            say &quot;we can&apos;t afford&quot; healthcare, infrastructure, or education, the data shows where the money
            actually went. Every dollar has an opportunity cost, and the opportunity cost of $25+ trillion
            is staggering.
          </p>
          <p>
            The pattern is also clear: spending surges during conflicts but never fully recedes. The post-WWII
            baseline became the Cold War baseline. The post-Cold War &quot;peace dividend&quot; became the War on Terror
            baseline. Each generation inherits a higher floor. Understanding this ratchet effect is essential
            to any honest conversation about the federal budget.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mt-8 border-t pt-6">
        <p className="text-xs text-stone-400">
          Sources: Office of Management and Budget Historical Tables (Table 3.1), Stockholm International Peace Research Institute (SIPRI)
          Military Expenditure Database, Congressional Research Service reports, and Department of Defense budget justification documents.
          All figures in constant 2024 USD.
        </p>
      </section>
    </div>
  )
}
