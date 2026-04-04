'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, Legend, Cell, ComposedChart,
  ScatterChart, Scatter, ZAxis,
} from 'recharts'
import ShareButtons from '@/components/ShareButtons'

const conflicts = [
  { name: 'Iran 2026', coverage: 60, casualties: 3519, color: '#dc2626', status: 'Active — Day 35', usTroops: true },
  { name: 'Ukraine', coverage: 15, casualties: 500000, color: '#f59e0b', status: 'Ongoing since 2022', usTroops: false },
  { name: 'Yemen', coverage: 0.8, casualties: 150000, color: '#6b7280', status: 'Ongoing since 2014', usTroops: false },
  { name: 'Syria', coverage: 0.9, casualties: 500000, color: '#6b7280', status: '2011–present', usTroops: false },
  { name: 'Somalia', coverage: 0.4, casualties: 50000, color: '#6b7280', status: 'Ongoing 16+ years', usTroops: true },
  { name: 'Ethiopia/Tigray', coverage: 0.1, casualties: 600000, color: '#374151', status: '2020–2022', usTroops: false },
]

const attentionIndex = conflicts.map(c => ({
  name: c.name,
  casualtiesPerPctCoverage: Math.round(c.casualties / c.coverage),
  coverage: c.coverage,
  casualties: c.casualties,
})).sort((a, b) => b.casualtiesPerPctCoverage - a.casualtiesPerPctCoverage)

const coverageDeclinePattern = [
  { month: 'Month 1', iran2026: 60, afghanistan2001: 70, iraq2003: 65 },
  { month: 'Month 3', iran2026: 45, afghanistan2001: 50, iraq2003: 55 },
  { month: 'Month 6', iran2026: 25, afghanistan2001: 30, iraq2003: 35 },
  { month: 'Year 1', iran2026: 12, afghanistan2001: 15, iraq2003: 20 },
  { month: 'Year 2', iran2026: 5, afghanistan2001: 8, iraq2003: 10 },
  { month: 'Year 3', iran2026: 2, afghanistan2001: 4, iraq2003: 5 },
  { month: 'Year 5', iran2026: 1, afghanistan2001: 2, iraq2003: 3 },
  { month: 'Year 10', iran2026: 0.3, afghanistan2001: 0.5, iraq2003: 0.8 },
]

const ifIranGotYemenCoverage = [
  { topic: 'Civilian casualties', wouldKnow: true, yemenReality: '150,000+ killed including 85,000 children starved', iranCoverage: '24/7 updates with names and faces' },
  { topic: 'US weapons used on civilians', wouldKnow: true, yemenReality: 'US-made bombs hit school buses, weddings, hospitals', iranCoverage: 'Detailed reporting on every strike' },
  { topic: 'Humanitarian crisis', wouldKnow: true, yemenReality: 'Worst humanitarian crisis on Earth (UN)', iranCoverage: 'Constant fundraising drives' },
  { topic: 'Children starving', wouldKnow: true, yemenReality: '2.2 million children acutely malnourished', iranCoverage: 'Would dominate news if in Iran' },
  { topic: 'Cholera epidemic', wouldKnow: false, yemenReality: '2.5 million cases — largest in modern history', iranCoverage: 'Americans have never heard of it' },
  { topic: 'US role in blockade', wouldKnow: false, yemenReality: 'US-backed Saudi blockade starving millions', iranCoverage: 'Zero mainstream coverage of US complicity' },
]

const fmt = (n: number) => {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`
  return n.toLocaleString()
}

export default function MediaClient() {
  const [selectedConflict, setSelectedConflict] = useState<string | null>(null)

  return (
    <>
      {/* Core Mismatch Visualization */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            Coverage vs. Casualties
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            The size of the bar should match the tragedy. It doesn&apos;t.
          </p>

          {/* Side by Side: Coverage % and Casualties */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-stone-900 mb-4">US Cable News Coverage (%)</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conflicts} layout="vertical" margin={{ left: 10, right: 20 }}>
                    <XAxis type="number" domain={[0, 70]} tickFormatter={(v) => `${v}%`} />
                    <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 13 }} />
                    <Tooltip formatter={(v: any) => `${v}%`} />
                    <Bar dataKey="coverage" radius={[0, 6, 6, 0]}>
                      {conflicts.map((c, i) => (
                        <Cell key={i} fill={c.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900 mb-4">Estimated Casualties</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conflicts} layout="vertical" margin={{ left: 10, right: 20 }}>
                    <XAxis type="number" tickFormatter={(v) => fmt(v)} />
                    <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 13 }} />
                    <Tooltip formatter={(v: any) => v.toLocaleString()} />
                    <Bar dataKey="casualties" radius={[0, 6, 6, 0]}>
                      {conflicts.map((c, i) => (
                        <Cell key={i} fill={c.casualties > 100000 ? '#991b1b' : c.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {conflicts.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedConflict(selectedConflict === c.name ? null : c.name)}
                className={`text-left rounded-xl p-4 border transition-all ${
                  selectedConflict === c.name
                    ? 'border-red-500 bg-red-50 shadow-md'
                    : 'border-stone-200 bg-white hover:border-stone-400'
                }`}
              >
                <div className="text-2xl font-bold font-[family-name:var(--font-heading)]" style={{ color: c.color }}>{c.coverage}%</div>
                <div className="text-sm font-semibold text-stone-900">{c.name}</div>
                <div className="text-xs text-stone-500">{fmt(c.casualties)} killed</div>
                <div className="text-xs text-stone-400 mt-1">{c.status}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Attention Index */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            The Attention Index
          </h2>
          <p className="text-stone-600 mb-2 max-w-2xl">
            Casualties per 1% of media coverage. Higher = more forgotten. The conflicts at the top are where
            people die in silence.
          </p>
          <p className="text-stone-500 text-sm mb-8">
            Formula: Total casualties ÷ % of US cable news coverage
          </p>

          <div className="space-y-3">
            {attentionIndex.map((c, i) => {
              const maxVal = attentionIndex[0].casualtiesPerPctCoverage
              const width = (c.casualtiesPerPctCoverage / maxVal) * 100
              return (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-36 text-sm font-semibold text-stone-900 text-right">{c.name}</div>
                  <div className="flex-1 bg-stone-100 rounded-full h-8 overflow-hidden">
                    <div
                      className="h-full rounded-full flex items-center justify-end px-3 text-xs font-bold text-white transition-all"
                      style={{
                        width: `${Math.max(width, 3)}%`,
                        backgroundColor: width > 80 ? '#991b1b' : width > 40 ? '#dc2626' : width > 15 ? '#f59e0b' : '#6b7280',
                      }}
                    >
                      {fmt(c.casualtiesPerPctCoverage)} deaths per 1%
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 bg-stone-50 border border-stone-200 rounded-xl p-6">
            <p className="text-stone-700">
              <strong className="text-red-700">Translation:</strong> For every 1% of cable news airtime Iran receives,
              {' '}<strong>~{Math.round(conflicts[0].casualties / conflicts[0].coverage).toLocaleString()}</strong> people have been killed.
              For that same 1% of coverage, Ethiopia had <strong>~{(600000 / 0.1).toLocaleString()}</strong> deaths.
              That&apos;s a <strong>{Math.round((600000 / 0.1) / (conflicts[0].casualties / conflicts[0].coverage))}x</strong> disparity in whose deaths
              the American public hears about.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Decline Timeline */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            The Forgetting Curve
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Every war follows the same pattern: saturation coverage → rapid decline → total amnesia.
            Iran 2026 is projected to follow the exact same trajectory as Afghanistan and Iraq.
          </p>

          <div className="bg-white rounded-xl border border-stone-200 p-4 md:p-8">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={coverageDeclinePattern} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tickFormatter={(v) => `${v}%`} />
                  <Tooltip formatter={(v: any) => `${v}%`} />
                  <Legend />
                  <Line type="monotone" dataKey="iran2026" stroke="#dc2626" strokeWidth={3} name="Iran 2026 (projected)" dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="afghanistan2001" stroke="#f59e0b" strokeWidth={2} name="Afghanistan 2001" strokeDasharray="5 5" dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="iraq2003" stroke="#6b7280" strokeWidth={2} name="Iraq 2003" strokeDasharray="5 5" dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-stone-500 mt-4 text-center">
              By Year 5, Afghanistan coverage had dropped to ~2% of its peak. Iran is projected to follow the same path — 
              while casualties continue for decades.
            </p>
          </div>
        </div>
      </section>

      {/* If Iran Got Yemen's Coverage */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            If Iran Got Yemen&apos;s Coverage
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            What would Americans know about Iran if it received less than 1% of cable news airtime — 
            the same coverage Yemen gets despite 150,000+ dead?
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-stone-300">
                  <th className="py-3 px-4 text-stone-900 font-bold">Topic</th>
                  <th className="py-3 px-4 text-stone-900 font-bold">What Iran Gets (60% coverage)</th>
                  <th className="py-3 px-4 text-stone-900 font-bold">What Yemen Gets (&lt;1% coverage)</th>
                </tr>
              </thead>
              <tbody>
                {ifIranGotYemenCoverage.map((row, i) => (
                  <tr key={i} className={`border-b border-stone-200 ${i % 2 === 0 ? 'bg-stone-50' : 'bg-white'}`}>
                    <td className="py-3 px-4 font-medium text-stone-900">{row.topic}</td>
                    <td className="py-3 px-4 text-stone-700">{row.iranCoverage}</td>
                    <td className="py-3 px-4 text-red-700">{row.yemenReality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6">
            <p className="text-red-900 font-semibold text-lg mb-2">The uncomfortable truth:</p>
            <p className="text-red-800">
              If Iran received Yemen&apos;s level of coverage, most Americans would not know we are at war. They would not know about the 3,461 dead,
              the 228+ children killed, or the $200B Pentagon request. The difference between a &quot;major war&quot; and a &quot;forgotten conflict&quot; is not
              the body count — it&apos;s the camera count.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-stone-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-3">
            Why It Matters
          </h2>
          <p className="text-stone-400 text-xl mb-8 max-w-3xl">
            Media drives public opinion. Public opinion drives policy. Policy drives war.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-stone-900 rounded-xl p-6 border border-stone-700">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-heading)]">Media Chooses</h3>
              <p className="text-stone-400">
                Networks decide which wars to cover based on US involvement, geopolitics, race of victims, and ratings potential.
                African and Middle Eastern conflicts with no US troops get virtually zero coverage regardless of death toll.
              </p>
            </div>
            <div className="bg-stone-900 rounded-xl p-6 border border-stone-700">
              <div className="text-4xl mb-4">🗳️</div>
              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-heading)]">Public Reacts</h3>
              <p className="text-stone-400">
                Americans can only oppose wars they know about. 72% of Americans supported invading Iraq when media coverage was saturated.
                Only 23% could find Yemen on a map — despite US weapons killing Yemeni children for 10 years.
              </p>
            </div>
            <div className="bg-stone-900 rounded-xl p-6 border border-stone-700">
              <div className="text-4xl mb-4">💣</div>
              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-heading)]">Policy Follows</h3>
              <p className="text-stone-400">
                Wars without coverage have no political cost. Congress can fund weapons for Saudi Arabia&apos;s Yemen campaign
                with zero public backlash — because the public doesn&apos;t know. Invisible wars are permanent wars.
              </p>
            </div>
          </div>

          <div className="bg-stone-900 border border-stone-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-heading)]">The Coverage-to-Policy Pipeline</h3>
            <div className="flex flex-wrap items-center gap-3 text-lg">
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">Media covers war</span>
              <span className="text-red-500">→</span>
              <span className="bg-stone-800 text-white px-4 py-2 rounded-lg">Public becomes aware</span>
              <span className="text-red-500">→</span>
              <span className="bg-stone-800 text-white px-4 py-2 rounded-lg">Public forms opinion</span>
              <span className="text-red-500">→</span>
              <span className="bg-stone-800 text-white px-4 py-2 rounded-lg">Politicians respond</span>
              <span className="text-red-500">→</span>
              <span className="bg-red-800 text-white px-4 py-2 rounded-lg font-bold">Policy changes</span>
            </div>
            <p className="text-stone-500 mt-4 text-sm">
              Reverse it: No coverage → No awareness → No opinion → No political cost → War continues indefinitely.
              This is why Yemen has been bombed for 10 years with American weapons and most Americans don&apos;t know.
            </p>
          </div>

          <div className="text-center">
            <p className="text-stone-400 mb-6 max-w-xl mx-auto">
              The greatest power of the media isn&apos;t what it tells you — it&apos;s what it doesn&apos;t.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/casualties" className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
                All Casualty Data →
              </Link>
              <Link href="/iran-war-2026" className="px-6 py-3 bg-stone-800 text-white rounded-lg font-semibold hover:bg-stone-700 transition-colors">
                Iran 2026 Coverage →
              </Link>
              <Link href="/cost-of-war" className="px-6 py-3 bg-stone-800 text-white rounded-lg font-semibold hover:bg-stone-700 transition-colors">
                Total Cost of War →
              </Link>
            </div>
            <ShareButtons title="The Wars America Forgot About — Media Coverage Tracker" />
          </div>
        </div>
      </section>
    </>
  )
}
