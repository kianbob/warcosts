// @ts-nocheck
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'
import { fmtMoney, fmt, slugify } from '@/lib/utils'

const DID_YOU_KNOW = [
  "James K. Polk promised to serve one term and started a war that seized half of Mexico. He kept his promise — then died 103 days after leaving office.",
  "Jimmy Carter is the only president since WWII who didn't send US troops into a new armed conflict.",
  "Abraham Lincoln suspended habeas corpus, jailed 13,000 political prisoners, and shut down 300 newspapers during the Civil War — all without congressional approval.",
  "George W. Bush's 'War on Terror' has cost more (inflation-adjusted) than World War II, but Congress never formally declared war.",
  "Dwight Eisenhower, the supreme Allied commander of WWII, warned America about the 'military-industrial complex' in his farewell address.",
  "Harry Truman sent 1.8 million troops to Korea without asking Congress, calling it a 'police action' — setting the precedent for every undeclared war since.",
  "Richard Nixon secretly bombed Cambodia for 14 months, dropping more bombs than were dropped on Japan in all of WWII, without telling Congress.",
  "Thomas Jefferson sent the Navy to fight the Barbary Pirates without congressional authorization — the first presidential war power grab.",
]

const ERA_GROUPS = [
  { label: 'Founding Era (1789–1849)', filter: (d: any) => d.number >= 1 && d.number <= 11 },
  { label: 'Civil War & Reconstruction (1849–1881)', filter: (d: any) => d.number >= 12 && d.number <= 19 },
  { label: 'Imperial & World Wars (1881–1953)', filter: (d: any) => d.number >= 20 && d.number <= 33 },
  { label: 'Cold War (1953–1993)', filter: (d: any) => d.number >= 34 && d.number <= 41 },
  { label: 'Modern Era (1993–Present)', filter: (d: any) => d.number >= 42 },
]

export default function PresidentsPage() {
  const [data, setData] = useState<any[]>([])
  const [filter, setFilter] = useState<'all' | 'wartime' | 'peacetime'>('all')

  useEffect(() => {
    document.title = 'Presidents at War — Every Commander-in-Chief Ranked'
    if (!document.querySelector('meta[name="description"]')) { const m = document.createElement('meta'); m.name = 'description'; m.content = 'All 46 presidents ranked by wars, military spending, casualties, and war cost. From Washington to the present — who spent the most on war?'; document.head.appendChild(m); }
    fetch('/data/presidents.json').then(r => r.json()).then(setData)
  }, [])

  const filtered = data.filter(d => {
    if (filter === 'wartime') return d.conflicts.length > 0
    if (filter === 'peacetime') return d.conflicts.length === 0
    return true
  })

  const chartData = [...data]
    .filter(d => d.totalCost > 0)
    .sort((a, b) => b.warCostAdjusted2024 - a.warCostAdjusted2024)
    .slice(0, 12)
    .map(d => ({ name: d.name, costB: (d.warCostAdjusted2024 || d.totalCost) / 1e9 }))

  const totalDeaths = data.reduce((s, d) => s + d.totalUSDeaths, 0)
  const totalCost = data.reduce((s, d) => s + (d.warCostAdjusted2024 || d.totalCost), 0)
  const wartimePresidents = data.filter(d => d.conflicts.length > 0).length
  const peacetimePresidents = data.filter(d => d.conflicts.length === 0).length
  const totalConflicts = data.reduce((s, d) => s + d.conflicts.length, 0)

  const mostWarlike = [...data].filter(d => d.conflicts.length > 0).sort((a, b) => b.conflicts.length - a.conflicts.length).slice(0, 5)
  const mostExpensive = [...data].filter(d => d.warCostAdjusted2024 > 0).sort((a, b) => (b.warCostAdjusted2024 || b.totalCost) - (a.warCostAdjusted2024 || a.totalCost)).slice(0, 5)
  const maxConflicts = mostWarlike[0]?.conflicts.length || 1
  const maxPresidentCost = mostExpensive[0]?.warCostAdjusted2024 || 1

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Presidents at War' }]} />

        {/* Dark Hero */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 mt-4">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            Presidents at War
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl mb-8">
            Every commander-in-chief from Washington to the present — ranked by wars fought,
            money spent, and American lives lost. Who kept the peace, and who chose war?
          </p>

          {data.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{wartimePresidents}</div>
                <div className="text-stone-400 text-sm mt-1">Wartime Presidents</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 font-[family-name:var(--font-heading)]">{peacetimePresidents}</div>
                <div className="text-stone-400 text-sm mt-1">Peacetime Presidents</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{totalConflicts}</div>
                <div className="text-stone-400 text-sm mt-1">Total Conflicts</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(totalDeaths)}</div>
                <div className="text-stone-400 text-sm mt-1">US War Deaths</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</div>
                <div className="text-stone-400 text-sm mt-1">Total War Cost (2024$)</div>
              </div>
            </div>
          )}
          <ShareButtons title="Presidents at War — Every Commander-in-Chief Ranked" />
        </div>

        {/* Rankings side by side */}
        {data.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Most Warlike */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">⚔️ Most Warlike Presidents</h2>
              <p className="text-stone-500 text-sm mb-3">Ranked by number of conflicts entered.</p>
              <div className="space-y-3">
                {mostWarlike.map((d, i) => {
                  const pct = (d.conflicts.length / maxConflicts) * 100
                  return (
                    <Link key={d.name} href={`/presidents/${slugify(d.name)}`} className="block group">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-stone-400 font-mono text-lg w-8">#{i + 1}</span>
                        <span className="font-medium text-stone-900 group-hover:text-red-700 transition-colors flex-1">
                          {d.fullName || d.name}
                        </span>
                        <span className="text-red-700 font-bold">{d.conflicts.length} conflicts</span>
                      </div>
                      <div className="ml-11 bg-stone-100 rounded-full h-3 overflow-hidden">
                        <div className="bg-red-700 h-full rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <div className="ml-11 text-stone-400 text-xs mt-1">{d.conflicts.join(', ')}</div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Most Expensive */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">💰 Most Expensive Presidencies</h2>
              <p className="text-stone-500 text-sm mb-3">By total war cost (inflation-adjusted).</p>
              <div className="space-y-3">
                {mostExpensive.map((d, i) => {
                  const cost = d.warCostAdjusted2024 || d.totalCost
                  const pct = (cost / maxPresidentCost) * 100
                  return (
                    <Link key={d.name} href={`/presidents/${slugify(d.name)}`} className="block group">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-stone-400 font-mono text-lg w-8">#{i + 1}</span>
                        <span className="font-medium text-stone-900 group-hover:text-red-700 transition-colors flex-1">
                          {d.fullName || d.name}
                        </span>
                        <span className="text-red-700 font-bold">{fmtMoney(cost)}</span>
                      </div>
                      <div className="ml-11 bg-stone-100 rounded-full h-3 overflow-hidden">
                        <div className="bg-stone-800 h-full rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Did You Know */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">💡 Did You Know?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DID_YOU_KNOW.map((fact, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold text-lg mt-0.5">•</span>
                <p className="text-stone-700 text-sm leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chart */}
        {chartData.length > 0 && (
          <div className="bg-white rounded-xl border p-6 my-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">War Cost by President — Inflation-Adjusted (2024 Billions)</h2>
            <ResponsiveContainer width="100%" height={450}>
              <BarChart data={chartData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={v => `$${v}B`} />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip formatter={v => `$${Number(v).toLocaleString()}B`} />
                <Bar dataKey="costB" fill="#991b1b" name="War Cost (2024$)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Era Groupings */}
        {data.length > 0 && (
          <div className="mb-10">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">By Era</h2>
            <div className="space-y-4">
              {ERA_GROUPS.map(era => {
                const eraData = data.filter(d => d.number > 0 && era.filter(d))
                const eraCost = eraData.reduce((s, d) => s + (d.warCostAdjusted2024 || d.totalCost || 0), 0)
                const eraDeaths = eraData.reduce((s, d) => s + (d.totalUSDeaths || 0), 0)
                const eraConflicts = eraData.reduce((s, d) => s + d.conflicts.length, 0)
                return (
                  <div key={era.label} className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      <h3 className="font-bold text-stone-900 md:w-72">{era.label}</h3>
                      <div className="flex gap-6 text-sm flex-wrap">
                        <div><span className="text-stone-500">Presidents:</span> <span className="font-medium">{eraData.length}</span></div>
                        <div><span className="text-stone-500">Conflicts:</span> <span className="font-medium text-red-700">{eraConflicts}</span></div>
                        <div><span className="text-stone-500">Cost:</span> <span className="font-medium text-red-700">{fmtMoney(eraCost)}</span></div>
                        <div><span className="text-stone-500">US Deaths:</span> <span className="font-medium">{fmt(eraDeaths)}</span></div>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                      {eraData.map(d => (
                        <Link key={d.name} href={`/presidents/${slugify(d.name)}`}
                          className={`text-sm hover:text-red-700 transition-colors ${d.conflicts.length > 0 ? 'text-stone-700' : 'text-stone-400'}`}>
                          {d.name} {d.conflicts.length > 0 && <span className="text-red-700">({d.conflicts.length})</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">All Presidents</h2>
        <div className="flex gap-2 my-4">
          {(['all', 'wartime', 'peacetime'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === f ? 'bg-stone-900 text-white' : 'bg-white border text-stone-600 hover:bg-stone-100'
              }`}
            >
              {f === 'all' ? `All (${data.length})` : f === 'wartime' ? `Wartime (${wartimePresidents})` : `Peacetime (${peacetimePresidents})`}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-3 pr-2 w-8">#</th>
                <th className="py-3 pr-4">President</th>
                <th className="py-3 pr-4">Party</th>
                <th className="py-3 pr-4">Years</th>
                <th className="py-3 pr-4">Conflicts</th>
                <th className="py-3 pr-4 text-right">War Cost (2024$)</th>
                <th className="py-3 text-right">US Deaths</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(d => (
                <tr key={d.name} className={`border-b border-stone-200 hover:bg-stone-50 ${d.conflicts.length === 0 ? 'text-stone-400' : ''}`}>
                  <td className="py-3 pr-2 text-stone-400 text-xs">{d.number || '—'}</td>
                  <td className="py-3 pr-4 font-medium">
                    <a href={`/presidents/${slugify(d.name)}`} className="text-primary hover:underline">{d.fullName || d.name}</a>
                  </td>
                  <td className="py-3 pr-4 text-stone-500">{d.party || '—'}</td>
                  <td className="py-3 pr-4 text-stone-500 text-xs">{d.years || '—'}</td>
                  <td className="py-3 pr-4">{d.conflicts.length > 0 ? d.conflicts.join(', ') : <span className="text-green-600 text-xs">No major conflicts</span>}</td>
                  <td className="py-3 pr-4 text-right font-bold text-red-800">{d.warCostAdjusted2024 ? fmtMoney(d.warCostAdjusted2024) : d.totalCost > 0 ? fmtMoney(d.totalCost) : '—'}</td>
                  <td className="py-3 text-right">{d.totalUSDeaths > 0 ? fmt(d.totalUSDeaths) : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Deep Dive War Records */}
        <div className="my-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">📖 Presidential War Records — Deep Dives</h2>
          <p className="text-stone-500 text-sm mb-6">Detailed analysis of America&apos;s most consequential war presidents — costs, casualties, civil liberties, and legacy.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/presidents/fdr-wars', name: 'FDR', subtitle: 'Arsenal of Democracy', stat: '405K killed · $4.1T' },
              { href: '/presidents/lbj-wars', name: 'LBJ', subtitle: "Vietnam's Architect", stat: '36K killed · 536K troops' },
              { href: '/presidents/nixon-wars', name: 'Nixon', subtitle: 'Secret Wars', stat: '21K killed · Cambodia' },
              { href: '/presidents/reagan-wars', name: 'Reagan', subtitle: 'Covert Commander', stat: '$2.8T defense · Iran-Contra' },
              { href: '/presidents/bush-wars', name: 'Bush', subtitle: '$5.8 Trillion in War', stat: '7K killed · Iraq/Afghanistan' },
              { href: '/presidents/obama-wars', name: 'Obama', subtitle: 'The Drone President', stat: '563 strikes · 7 countries' },
              { href: '/presidents/trump-wars', name: 'Trump', subtitle: '"End the Wars" to Iran', stat: '$18B+ Iran · no Congress vote' },
              { href: '/presidents/biden-wars', name: 'Biden', subtitle: "Afghanistan's End", stat: '$175B+ Ukraine aid' },
            ].map(p => (
              <Link key={p.href} href={p.href} className="bg-white rounded-xl border p-4 hover:shadow-md hover:border-red-200 transition group">
                <p className="font-bold text-stone-900 group-hover:text-red-700 transition-colors">{p.name}</p>
                <p className="text-sm text-stone-600">{p.subtitle}</p>
                <p className="text-xs text-red-700 mt-1 font-medium">{p.stat}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Analysis Link */}
        <div className="bg-stone-900 text-white rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">📊 Deep Analysis: Presidents &amp; War</h2>
          <p className="text-stone-400 mb-4">Which presidents expanded conflict vs. kept the peace? Ranked by wars started, military spending, casualties, and executive war powers used.</p>
          <a href="/analysis/presidents-war-record" className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-medium transition">Read the Full Analysis →</a>
        </div>

        <blockquote className="border-l-4 border-red-800 pl-4 italic text-stone-400 my-8">
          &ldquo;The executive has no right, in any case, to decide the question, whether there is or is not
          cause for declaring war.&rdquo;
          <br /><span className="not-italic text-stone-500">— James Madison</span>
        </blockquote>

        <BackToTop />
      </div>
    </>
  )
}
