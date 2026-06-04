import { Metadata } from 'next'
import Link from 'next/link'
import FaqJsonLd from '@/components/FaqJsonLd'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ConflictsClient from './ConflictsClient'

export const metadata: Metadata = {
  title: 'List of All US Wars & Military Conflicts | WarCosts',
  description: 'Complete database of 469 US wars and military interventions from 1775 to 2026. Filter by era, cost, casualties, and outcome.',
  alternates: { canonical: 'https://www.warcosts.org/conflicts' },
  openGraph: {
    title: 'All US Wars & Military Conflicts',
    description: 'Complete database of every American war, military intervention, and covert operation from 1775 to present.',
  },
}

interface Conflict {
  id: string; name: string; shortName?: string; era: string; type: string;
  startYear: number; endYear?: number; costInflationAdjusted: number;
  usCasualties?: { deaths?: number; wounded?: number }; civilianDeaths?: number;
  outcome?: string; troopsDeployed?: number; computed?: { durationYears?: number };
  region?: string; congressionalAuth?: boolean;
}

const ERA_GROUPS = [
  { label: 'Founding & Early Republic', eras: ['Founding Era', 'Early Republic'], icon: '🏛️', color: 'bg-amber-900/20 border-amber-800/30' },
  { label: 'Expansion & Civil War', eras: ['Expansion Era', 'Civil War'], icon: '⚔️', color: 'bg-red-900/20 border-red-800/30' },
  { label: 'Imperial Era', eras: ['Imperial Era'], icon: '🌐', color: 'bg-blue-900/20 border-blue-800/30' },
  { label: 'World Wars', eras: ['World Wars'], icon: '💣', color: 'bg-stone-800/20 border-stone-700/30' },
  { label: 'Cold War', eras: ['Cold War'], icon: '☢️', color: 'bg-purple-900/20 border-purple-800/30' },
  { label: 'Post-Cold War & War on Terror', eras: ['Post-Cold War', 'War on Terror'], icon: '🛩️', color: 'bg-orange-900/20 border-orange-800/30' },
]

export default function ConflictsPage() {
  const conflicts = loadData('conflicts.json') as Conflict[]

  const totalCost = conflicts.reduce((s, c) => s + (c.costInflationAdjusted || 0), 0)
  const totalUSDeaths = conflicts.reduce((s, c) => s + (c.usCasualties?.deaths || 0), 0)
  const totalCivilianDeaths = conflicts.reduce((s, c) => s + (c.civilianDeaths || 0), 0)
  const ongoing = conflicts.filter(c => !c.endYear)

  const costliest = [...conflicts].sort((a, b) => (b.costInflationAdjusted || 0) - (a.costInflationAdjusted || 0)).slice(0, 5)
  const deadliest = [...conflicts].sort((a, b) => (b.usCasualties?.deaths || 0) - (a.usCasualties?.deaths || 0)).slice(0, 5)
  const maxCost = costliest[0]?.costInflationAdjusted || 1
  const maxDeaths = deadliest[0]?.usCasualties?.deaths || 1

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <FaqJsonLd faqs={[
        { q: 'How many wars has the United States fought?', a: 'The United States has been involved in 469 wars and military interventions from 1775 to 2026, including declared wars, undeclared conflicts, covert operations, and military deployments.' },
        { q: 'How many times has Congress declared war?', a: 'Congress has formally declared war only 11 times in US history, covering 5 conflicts: the War of 1812, Mexican-American War, Spanish-American War, World War I, and World War II. Every major conflict since has been fought without a formal declaration.' },
        { q: 'What is the most expensive war in US history?', a: 'World War II is the most expensive war in US history at over $4 trillion in inflation-adjusted dollars. The post-9/11 wars in Iraq and Afghanistan combined have cost over $8 trillion when including long-term veteran care and interest on war debt.' },
        { q: 'How many Americans have died in all US wars?', a: 'Over 1.3 million Americans have died in wars, with the Civil War being the deadliest (approximately 620,000 deaths), followed by World War II (405,000), World War I (116,000), and the Vietnam War (58,000).' },
      ]} />
      <BreadcrumbSchema items={[{ label: 'All Conflicts' }]} />
      <Breadcrumbs items={[{ label: 'All Conflicts' }]} />

      {/* Dark Hero */}
      <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
          248 Years of American War
        </h1>
        <p className="text-stone-400 text-lg max-w-3xl mb-8">
          From the Revolutionary War to today&apos;s drone campaigns, the United States has been at war for over 225 of its 248 years of existence.
          Every conflict has a cost — in dollars, in lives, and in what it does to a republic.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{conflicts.length}</div>
            <div className="text-stone-400 text-sm mt-1">Wars & Conflicts</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</div>
            <div className="text-stone-400 text-sm mt-1">Total Cost (2024$)</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(totalUSDeaths)}</div>
            <div className="text-stone-400 text-sm mt-1">US Military Deaths</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(totalCivilianDeaths)}</div>
            <div className="text-stone-400 text-sm mt-1">Civilian Deaths</div>
          </div>
        </div>
        <ShareButtons title="All US Wars & Military Conflicts" />
      </div>

      {/* Ongoing Conflicts */}
      {ongoing.length > 0 && (
        <div className="bg-red-950/30 border border-red-800/40 rounded-xl p-6 mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-1">
            🔴 Ongoing Conflicts ({ongoing.length})
          </h2>
          <p className="text-stone-500 text-sm mb-4">Active US military operations right now.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {ongoing.map(c => (
              <Link key={c.id} href={`/conflicts/${c.id}`}
                className="bg-white border border-stone-200 rounded-lg p-4 hover:bg-stone-50 transition-colors">
                <div className="font-medium text-stone-900">{c.shortName || c.name}</div>
                <div className="text-stone-500 text-sm">{c.startYear}–present · {c.era}</div>
                <div className="text-red-700 text-sm font-medium mt-1">
                  {c.costInflationAdjusted ? fmtMoney(c.costInflationAdjusted) : '—'}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Rankings side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Costliest Wars */}
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">💰 Costliest Wars</h2>
          <div className="space-y-3">
            {costliest.map((c, i) => {
              const pct = ((c.costInflationAdjusted || 0) / maxCost) * 100
              return (
                <Link key={c.id} href={`/conflicts/${c.id}`} className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-stone-400 font-mono text-lg w-8">#{i + 1}</span>
                    <span className="font-medium text-stone-900 group-hover:text-red-700 transition-colors flex-1">
                      {c.shortName || c.name}
                    </span>
                    <span className="text-red-700 font-bold">{fmtMoney(c.costInflationAdjusted)}</span>
                  </div>
                  <div className="ml-11 bg-stone-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-red-700 h-full rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Deadliest Wars */}
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">💀 Deadliest Wars (US Deaths)</h2>
          <div className="space-y-3">
            {deadliest.map((c, i) => {
              const pct = ((c.usCasualties?.deaths || 0) / maxDeaths) * 100
              return (
                <Link key={c.id} href={`/conflicts/${c.id}`} className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-stone-400 font-mono text-lg w-8">#{i + 1}</span>
                    <span className="font-medium text-stone-900 group-hover:text-red-700 transition-colors flex-1">
                      {c.shortName || c.name}
                    </span>
                    <span className="text-red-700 font-bold">{fmt(c.usCasualties?.deaths || 0)}</span>
                  </div>
                  <div className="ml-11 bg-stone-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-stone-800 h-full rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Era Breakdown */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">By Era</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {ERA_GROUPS.map(group => {
          const eraConflicts = conflicts.filter(c => group.eras.includes(c.era))
          const eraCost = eraConflicts.reduce((s, c) => s + (c.costInflationAdjusted || 0), 0)
          const eraDeaths = eraConflicts.reduce((s, c) => s + (c.usCasualties?.deaths || 0), 0)
          return (
            <div key={group.label} className={`${group.color} border rounded-xl p-5`}>
              <div className="text-2xl mb-1">{group.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-stone-900 text-lg">{group.label}</h3>
              <div className="text-stone-500 text-sm mb-3">{eraConflicts.length} conflicts</div>
              <div className="flex gap-4 text-sm">
                <div>
                  <div className="text-red-700 font-bold">{fmtMoney(eraCost)}</div>
                  <div className="text-stone-500">Cost</div>
                </div>
                <div>
                  <div className="text-stone-900 font-bold">{fmt(eraDeaths)}</div>
                  <div className="text-stone-500">US Deaths</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                {eraConflicts.slice(0, 4).map(c => (
                  <Link key={c.id} href={`/conflicts/${c.id}`} className="block text-sm text-stone-600 hover:text-red-700 truncate">
                    {c.shortName || c.name} ({c.startYear})
                  </Link>
                ))}
                {eraConflicts.length > 4 && (
                  <div className="text-xs text-stone-400">+{eraConflicts.length - 4} more</div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Callout */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-10">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">📊 The Numbers Don&apos;t Lie</h2>
        <p className="text-stone-400 leading-relaxed">
          The US has been at peace for fewer than 20 years in its entire history. Since 1945,
          the country has bombed or invaded over 30 nations without a single formal declaration of war.
          The &ldquo;War on Terror&rdquo; alone has cost over $8 trillion — more than the entire New Deal,
          Marshall Plan, and Apollo program combined, adjusted for inflation.
        </p>
        <div className="flex gap-3 mt-4 flex-wrap">
          <Link href="/analysis/war-on-terror" className="text-red-400 hover:text-red-300 text-sm underline">War on Terror Analysis →</Link>
          <Link href="/analysis/undeclared-wars" className="text-red-400 hover:text-red-300 text-sm underline">Undeclared Wars →</Link>
          <Link href="/analysis/what-victory-looks-like" className="text-red-400 hover:text-red-300 text-sm underline">What Victory Looks Like →</Link>
        </div>
      </div>

      {/* Existing client filter component */}
      <ConflictsClient conflicts={conflicts as any} />

      {/* Data Sources */}
      <div className="mt-12 bg-stone-50 rounded-lg p-6 border">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Data Sources</h2>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>• Congressional Research Service (CRS) — &ldquo;Instances of Use of United States Armed Forces Abroad&rdquo; (updated annually)</li>
          <li>• Department of Defense (DoD) — Defense Casualty Analysis System (DCAS)</li>
          <li>• Brown University Costs of War Project — war cost and casualty estimates</li>
          <li>• National Archives — official war declarations and authorizations</li>
          <li>• Government Accountability Office (GAO) — war cost reports</li>
          <li>• Special Inspector General for Afghanistan Reconstruction (SIGAR)</li>
          <li>• Special Inspector General for Iraq Reconstruction (SIGIR)</li>
        </ul>
      </div>

      {/* Related Analysis */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><a href="/analysis/war-on-terror" className="text-red-800 hover:underline">→ The War on Terror: $8 Trillion Later</a></li>
          <li><a href="/analysis/forever-wars" className="text-red-800 hover:underline">→ The Forever Wars</a></li>
          <li><a href="/analysis/undeclared-wars" className="text-red-800 hover:underline">→ Undeclared Wars</a></li>
          <li><a href="/analysis/what-victory-looks-like" className="text-red-800 hover:underline">→ What Victory Looks Like</a></li>
          <li><a href="/casualties" className="text-red-800 hover:underline">→ Casualty Data</a></li>
        </ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'All US Wars & Military Conflicts',
          description: 'Complete database of all 37 American wars, military interventions, and covert operations from 1775 to present.',
          url: 'https://www.warcosts.org/conflicts',
          publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
        }) }}
      />

      <BackToTop />
    </div>
  )
}
