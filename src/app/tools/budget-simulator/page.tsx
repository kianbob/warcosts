'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const TOTAL_BUDGET = 6100 // billions

const DEFAULT_CATEGORIES = [
  { id: 'military', label: 'Military / Defense', default: 968, color: 'bg-red-500', barColor: 'bg-red-600' },
  { id: 'healthcare', label: 'Healthcare', default: 1700, color: 'bg-emerald-500', barColor: 'bg-emerald-600' },
  { id: 'social_security', label: 'Social Security', default: 1400, color: 'bg-blue-500', barColor: 'bg-blue-600' },
  { id: 'education', label: 'Education', default: 80, color: 'bg-amber-500', barColor: 'bg-amber-600' },
  { id: 'infrastructure', label: 'Infrastructure', default: 150, color: 'bg-purple-500', barColor: 'bg-purple-600' },
  { id: 'foreign_aid', label: 'Foreign Aid', default: 68, color: 'bg-teal-500', barColor: 'bg-teal-600' },
  { id: 'veterans', label: 'Veterans Affairs', default: 325, color: 'bg-orange-500', barColor: 'bg-orange-600' },
  { id: 'other', label: 'Everything Else', default: 1409, color: 'bg-stone-500', barColor: 'bg-stone-600' },
]

const IMPACT_PER_BILLION = {
  education: {
    teachers: 14000,
    schools: 5,
    freeCollege: 45000, // students per $1B
  },
  healthcare: {
    insured: 100000,
    hospitals: 2,
  },
  infrastructure: {
    bridges: 30,
    milesRoad: 200,
    waterSystems: 15,
  },
  foreign_aid: {
    fedPeople: 5000000,
    vaccinations: 20000000,
  },
}

function fmtB(n: number) {
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}T`
  return `$${n}B`
}

export default function BudgetSimulatorPage() {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(DEFAULT_CATEGORIES.map(c => [c.id, c.default]))
  )

  const total = useMemo(() => Object.values(values).reduce((s, v) => s + v, 0), [values])
  const diff = total - TOTAL_BUDGET

  const militaryDelta = values.military - 968
  const educationDelta = values.education - 80
  const healthcareDelta = values.healthcare - 1700
  const infraDelta = values.infrastructure - 150
  const aidDelta = values.foreign_aid - 68

  const handleChange = (id: string, newVal: number) => {
    setValues(prev => ({ ...prev, [id]: Math.max(0, Math.min(TOTAL_BUDGET, newVal)) }))
  }

  const resetAll = () => {
    setValues(Object.fromEntries(DEFAULT_CATEGORIES.map(c => [c.id, c.default])))
  }

  // Auto-balance: take from "other" to match
  const autoBalance = () => {
    const nonOther = Object.entries(values).filter(([k]) => k !== 'other').reduce((s, [, v]) => s + v, 0)
    const otherVal = TOTAL_BUDGET - nonOther
    if (otherVal >= 0) setValues(prev => ({ ...prev, other: otherVal }))
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <nav className="text-sm text-stone-500 mb-4">
        <Link href="/" className="hover:text-stone-900">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/tools" className="hover:text-stone-900">Tools</Link>
        <span className="mx-2">›</span>
        <span className="text-stone-900 font-medium">Budget Simulator</span>
      </nav>

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
        Redesign the <span className="text-red-400">Federal Budget</span>
      </h1>
      <p className="text-stone-600 text-lg mb-2 max-w-3xl">
        The US federal budget is ~$6.1 trillion. Drag the sliders to redesign it.
        What would you prioritize?
      </p>
      <p className="text-stone-500 text-sm mb-8">
        Current (FY2025) allocations shown as defaults. Move money between categories to see what&apos;s possible.
      </p>

      {/* Budget status bar */}
      <div className={`rounded-lg border p-4 mb-8 ${
        Math.abs(diff) < 5 ? 'bg-emerald-500/10 border-emerald-500/30' :
        diff > 0 ? 'bg-red-500/10 border-red-500/30' : 'bg-amber-500/10 border-amber-500/30'
      }`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-stone-400 text-sm">Total Budget:</span>
            <span className="text-stone-900 font-bold text-xl ml-2">{fmtB(total)}</span>
            <span className="text-stone-400 ml-2">/ {fmtB(TOTAL_BUDGET)} target</span>
          </div>
          <div className="flex gap-2">
            <button onClick={autoBalance} className="text-sm px-3 py-1 bg-stone-100 border border-stone-300 rounded hover:bg-stone-200 text-stone-600 transition">
              Auto-balance
            </button>
            <button onClick={resetAll} className="text-sm px-3 py-1 bg-stone-100 border border-stone-300 rounded hover:bg-stone-200 text-stone-600 transition">
              Reset
            </button>
          </div>
        </div>
        {Math.abs(diff) >= 5 && (
          <p className={`text-sm mt-2 ${diff > 0 ? 'text-red-400' : 'text-amber-400'}`}>
            {diff > 0 ? `$${diff}B over budget — you need to cut somewhere` : `$${Math.abs(diff)}B unallocated`}
          </p>
        )}
      </div>

      {/* Sliders */}
      <div className="space-y-6 mb-10">
        {DEFAULT_CATEGORIES.map(cat => {
          const val = values[cat.id]
          const defaultVal = cat.default
          const delta = val - defaultVal
          return (
            <div key={cat.id}>
              <div className="flex items-center justify-between mb-1">
                <label className="text-stone-900 font-medium">{cat.label}</label>
                <div className="flex items-center gap-3">
                  {delta !== 0 && (
                    <span className={`text-xs font-mono ${delta > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {delta > 0 ? '+' : ''}{fmtB(delta)}
                    </span>
                  )}
                  <span className="text-stone-900 font-mono font-bold w-16 text-right">{fmtB(val)}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={0}
                  max={2500}
                  step={5}
                  value={val}
                  onChange={e => handleChange(cat.id, Number(e.target.value))}
                  className="flex-1 h-2 rounded-full appearance-none cursor-pointer accent-red-500"
                  style={{ background: `linear-gradient(to right, var(--tw-gradient-from, #ef4444) ${(val / 2500) * 100}%, #d6d3d1 ${(val / 2500) * 100}%)` }}
                />
                <input
                  type="number"
                  min={0}
                  max={2500}
                  value={val}
                  onChange={e => handleChange(cat.id, Number(e.target.value))}
                  className="w-20 bg-stone-100 border border-stone-300 rounded px-2 py-1 text-stone-900 text-sm text-right"
                />
              </div>
              {/* Default marker */}
              <div className="relative h-1 mt-1">
                <div className="absolute w-0.5 h-3 bg-stone-500 -top-1"
                  style={{ left: `${(defaultVal / 2500) * 100}%` }}
                  title={`Current: ${fmtB(defaultVal)}`} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Visual comparison */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Your Budget vs. Current</h2>
      <div className="space-y-3 mb-10">
        {DEFAULT_CATEGORIES.map(cat => {
          const val = values[cat.id]
          const defaultVal = cat.default
          const maxVal = Math.max(val, defaultVal, 100)
          return (
            <div key={cat.id}>
              <div className="text-sm text-stone-400 mb-1">{cat.label}</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-500 w-14">Current</span>
                  <div className="flex-1 h-4 bg-stone-200 rounded-full overflow-hidden">
                    <div className={`h-full ${cat.barColor} opacity-50 rounded-full`}
                      style={{ width: `${(defaultVal / maxVal) * 100}%` }} />
                  </div>
                  <span className="text-xs text-stone-500 w-14 text-right">{fmtB(defaultVal)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-900 w-14">Yours</span>
                  <div className="flex-1 h-4 bg-stone-200 rounded-full overflow-hidden">
                    <div className={`h-full ${cat.barColor} rounded-full`}
                      style={{ width: `${(val / maxVal) * 100}%` }} />
                  </div>
                  <span className="text-xs text-stone-900 w-14 text-right">{fmtB(val)}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Impact analysis */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
        What Your Changes <span className="text-red-400">Mean</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {militaryDelta !== 0 && (
          <div className={`rounded-lg border p-5 ${militaryDelta < 0 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
            <h3 className="font-bold text-stone-900 mb-2">🎖️ Military {militaryDelta < 0 ? 'Cut' : 'Increase'}</h3>
            <p className="text-stone-600 text-sm">
              {militaryDelta < 0
                ? `Cutting ${fmtB(Math.abs(militaryDelta))} from defense. The US would still spend more than the next ${Math.max(1, Math.round(8 - (Math.abs(militaryDelta) / 100)))} countries combined.`
                : `Adding ${fmtB(militaryDelta)} to an already record-breaking military budget.`}
            </p>
          </div>
        )}

        {educationDelta > 0 && (
          <div className="rounded-lg border p-5 bg-amber-500/10 border-amber-500/30">
            <h3 className="font-bold text-stone-900 mb-2">📚 Education Boost</h3>
            <p className="text-stone-600 text-sm">
              +{fmtB(educationDelta)} = {(educationDelta * IMPACT_PER_BILLION.education.teachers).toLocaleString()} new teachers,{' '}
              {(educationDelta * IMPACT_PER_BILLION.education.schools).toLocaleString()} new schools, and{' '}
              {(educationDelta * IMPACT_PER_BILLION.education.freeCollege).toLocaleString()} students with free college tuition.
            </p>
          </div>
        )}

        {healthcareDelta > 0 && (
          <div className="rounded-lg border p-5 bg-emerald-500/10 border-emerald-500/30">
            <h3 className="font-bold text-stone-900 mb-2">🏥 Healthcare Expansion</h3>
            <p className="text-stone-600 text-sm">
              +{fmtB(healthcareDelta)} = {(healthcareDelta * IMPACT_PER_BILLION.healthcare.insured).toLocaleString()} more people insured and{' '}
              {(healthcareDelta * IMPACT_PER_BILLION.healthcare.hospitals).toLocaleString()} new hospitals.
            </p>
          </div>
        )}

        {infraDelta > 0 && (
          <div className="rounded-lg border p-5 bg-purple-500/10 border-purple-500/30">
            <h3 className="font-bold text-stone-900 mb-2">🏗️ Infrastructure Investment</h3>
            <p className="text-stone-600 text-sm">
              +{fmtB(infraDelta)} = {(infraDelta * IMPACT_PER_BILLION.infrastructure.bridges).toLocaleString()} bridges repaired,{' '}
              {(infraDelta * IMPACT_PER_BILLION.infrastructure.milesRoad).toLocaleString()} miles of road rebuilt, and{' '}
              {(infraDelta * IMPACT_PER_BILLION.infrastructure.waterSystems).toLocaleString()} clean water systems.
            </p>
          </div>
        )}

        {aidDelta > 0 && (
          <div className="rounded-lg border p-5 bg-teal-500/10 border-teal-500/30">
            <h3 className="font-bold text-stone-900 mb-2">🌍 Foreign Aid Increase</h3>
            <p className="text-stone-600 text-sm">
              +{fmtB(aidDelta)} = {(aidDelta * IMPACT_PER_BILLION.foreign_aid.fedPeople / 1e6).toFixed(0)} million people fed and{' '}
              {(aidDelta * IMPACT_PER_BILLION.foreign_aid.vaccinations / 1e6).toFixed(0)} million vaccinations.
            </p>
          </div>
        )}

        {militaryDelta < 0 && educationDelta > 0 && (
          <div className="rounded-lg border p-5 bg-blue-500/10 border-blue-500/30 md:col-span-2">
            <h3 className="font-bold text-stone-900 mb-2">💡 The Trade-Off</h3>
            <p className="text-stone-600 text-sm">
              Moving {fmtB(Math.abs(militaryDelta))} from defense to education would hire{' '}
              <strong className="text-stone-900">{(Math.abs(militaryDelta) * IMPACT_PER_BILLION.education.teachers).toLocaleString()} teachers</strong> and build{' '}
              <strong className="text-stone-900">{(Math.abs(militaryDelta) * IMPACT_PER_BILLION.education.schools).toLocaleString()} schools</strong>.
              That&apos;s {Math.abs(militaryDelta) > 200 ? 'more teachers than currently exist in most states combined' : 'a transformative investment in the next generation'}.
            </p>
          </div>
        )}
      </div>

      {/* Context */}
      <div className="bg-stone-100 rounded-xl border border-stone-300 p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">For Context</h3>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li>• The US spends more on its military than the next <strong className="text-stone-900">10 countries combined</strong></li>
          <li>• Universal pre-K for all American children would cost ~<strong className="text-stone-900">$30B/year</strong></li>
          <li>• Eliminating all student loan debt: ~<strong className="text-stone-900">$1.7T one-time</strong></li>
          <li>• Clean water for every human on Earth: ~<strong className="text-stone-900">$150B total</strong></li>
          <li>• The F-35 program alone costs <strong className="text-stone-900">$1.7T lifetime</strong> — more than most categories above</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-stone-400 hover:text-stone-900 transition">
          ↑ Back to top
        </button>
      </div>
    </div>
  )
}
