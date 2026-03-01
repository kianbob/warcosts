'use client'
import { useState, useEffect } from 'react'
import { fmtMoney, fmt } from '@/lib/utils'
import Link from 'next/link'

const STATE_POP: Record<string, number> = {
  'Alabama': 5024279, 'Alaska': 733391, 'Arizona': 7151502, 'Arkansas': 3011524,
  'California': 39538223, 'Colorado': 5773714, 'Connecticut': 3605944, 'Delaware': 989948,
  'Florida': 21538187, 'Georgia': 10711908, 'Hawaii': 1455271, 'Idaho': 1839106,
  'Illinois': 12812508, 'Indiana': 6732219, 'Iowa': 3190369, 'Kansas': 2937880,
  'Kentucky': 4505836, 'Louisiana': 4657757, 'Maine': 1362359, 'Maryland': 6177224,
  'Massachusetts': 7029917, 'Michigan': 10077331, 'Minnesota': 5706494, 'Mississippi': 2961279,
  'Missouri': 6154913, 'Montana': 1084225, 'Nebraska': 1961504, 'Nevada': 3104614,
  'New Hampshire': 1377529, 'New Jersey': 9288994, 'New Mexico': 2117522, 'New York': 20201249,
  'North Carolina': 10439388, 'North Dakota': 779094, 'Ohio': 11799448, 'Oklahoma': 3959353,
  'Oregon': 4237256, 'Pennsylvania': 13002700, 'Rhode Island': 1097379, 'South Carolina': 5118425,
  'South Dakota': 886667, 'Tennessee': 6910840, 'Texas': 29145505, 'Utah': 3271616,
  'Vermont': 643077, 'Virginia': 8631393, 'Washington': 7614893, 'West Virginia': 1793716,
  'Wisconsin': 5893718, 'Wyoming': 576851,
}

const US_POP = 331900000
const ANNUAL_BUDGET = 886e9
const TEACHER_SALARY = 65000
const NURSE_SALARY = 80000
const COST_PER_SECOND = 28095
const WOT_COST = 8e12
const WOT_START = 2001

// Cost per year by era (rough approximation for lifetime calc)
const ANNUAL_WAR_COST: Record<number, number> = {}
// Pre-2001: ~$30B/yr in interventions; 2001+: ~$350B/yr war on terror
for (let y = 1940; y <= 2000; y++) ANNUAL_WAR_COST[y] = 30e9
for (let y = 2001; y <= 2026; y++) ANNUAL_WAR_COST[y] = WOT_COST / 25

export default function CostCalcClient() {
  const [state, setState] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [liveCounter, setLiveCounter] = useState(0)

  const stateShare = state && STATE_POP[state]
    ? (STATE_POP[state] / US_POP) * ANNUAL_BUDGET
    : 0
  const teachersFunded = stateShare ? Math.floor(stateShare / TEACHER_SALARY) : 0
  const nursesFunded = stateShare ? Math.floor(stateShare / NURSE_SALARY) : 0

  const by = parseInt(birthYear)
  const lifetimeCost = !isNaN(by) && by >= 1940 && by <= 2026
    ? Array.from({ length: 2026 - by }, (_, i) => ANNUAL_WAR_COST[by + i] || 0).reduce((a, b) => a + b, 0)
    : 0

  useEffect(() => {
    if (!birthYear || isNaN(by) || by < 1940) return
    const startMs = new Date(by, 0, 1).getTime()
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startMs) / 1000
      setLiveCounter(elapsed * COST_PER_SECOND)
    }, 50)
    return () => clearInterval(interval)
  }, [birthYear, by])

  const states = Object.keys(STATE_POP).sort()

  return (
    <div className="space-y-12">
      {/* State section */}
      <div className="bg-white rounded-xl border p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Your State&apos;s Share</h2>
        <select
          value={state}
          onChange={e => setState(e.target.value)}
          className="w-full md:w-80 border rounded-lg px-4 py-3 text-lg mb-6"
        >
          <option value="">Select your state</option>
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        {state && stateShare > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(stateShare)}</p>
              <p className="text-muted text-sm mt-1">{state}&apos;s share of military spending per year</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(teachersFunded)}</p>
              <p className="text-muted text-sm mt-1">Teachers that money could fund</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(nursesFunded)}</p>
              <p className="text-muted text-sm mt-1">Nurses that money could fund</p>
            </div>
          </div>
        )}
      </div>

      {/* Birth year section */}
      <div className="bg-white rounded-xl border p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">War Spending In Your Lifetime</h2>
        <input
          type="number"
          placeholder="Enter your birth year (e.g. 1990)"
          value={birthYear}
          onChange={e => setBirthYear(e.target.value)}
          min={1940}
          max={2025}
          className="w-full md:w-80 border rounded-lg px-4 py-3 text-lg mb-6"
        />

        {lifetimeCost > 0 && (
          <>
            <div className="bg-stone-900 text-white rounded-xl p-8 text-center mb-6">
              <p className="text-stone-400 text-sm mb-2">Since you were born, the US has spent approximately</p>
              <p className="text-4xl md:text-6xl font-bold text-red-500 font-[family-name:var(--font-heading)]">
                {fmtMoney(lifetimeCost)}
              </p>
              <p className="text-stone-400 text-sm mt-2">on wars and military operations</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
              <p className="text-stone-600 text-sm mb-2">Live counter since your birth</p>
              <p className="text-3xl md:text-5xl font-bold text-red-700 font-[family-name:var(--font-heading)] tabular-nums">
                ${liveCounter > 0 ? Math.floor(liveCounter).toLocaleString() : '—'}
              </p>
              <p className="text-stone-500 text-xs mt-2">at {fmtMoney(COST_PER_SECOND)}/sec current military spending rate</p>
            </div>
          </>
        )}
      </div>

      {/* Context */}
      <div className="bg-stone-900 text-white rounded-xl p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Put It In Perspective</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-red-400 text-2xl font-bold font-[family-name:var(--font-heading)]">{fmtMoney(ANNUAL_BUDGET)}/year</p>
            <p className="text-stone-400 mt-1">Current annual military budget — more than the next 10 countries combined</p>
          </div>
          <div>
            <p className="text-red-400 text-2xl font-bold font-[family-name:var(--font-heading)]">{fmtMoney(COST_PER_SECOND)}/sec</p>
            <p className="text-stone-400 mt-1">Military spending never stops — not on weekends, not on holidays</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/opportunity-cost" className="text-red-400 hover:text-red-300 underline text-sm">What else could this buy? →</Link>
          <Link href="/modern-wars" className="text-red-400 hover:text-red-300 underline text-sm">See all modern wars →</Link>
          <Link href="/analysis/forever-wars" className="text-red-400 hover:text-red-300 underline text-sm">How 60 words enabled it all →</Link>
        </div>
      </div>
    </div>
  )
}
