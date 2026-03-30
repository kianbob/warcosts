// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'

const US_POPULATION = 334233854
const TOTAL_WAR_COST = 8_000_000_000_000 // $8 trillion post-9/11
const TOTAL_MILITARY_DEATHS = 7074 // post-9/11
const ROAD_COST_PER_MILE = 1_500_000
const HEALTHCARE_COST_PER_PERSON = 8500

interface StateData {
  code: string
  name: string
  population: number
  households: number
  taxpayers: number
  militaryDeaths: number
  activeDuty: number
  veterans: number
  avgTeacherSalary: number
  medianHomePrice: number
  avgTuition: number
  enlistmentRate: number
  defenseJobs: number
  baseEconomicImpact: number
  warTaxReturn: number
}

interface BaseData {
  state: string
  code: string
  total: number
}

function fmt(n: number): string {
  if (n >= 1_000_000_000_000) return `$${(n / 1_000_000_000_000).toFixed(1)}T`
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1000) return `$${Math.round(n).toLocaleString()}`
  return `$${n.toFixed(0)}`
}

function num(n: number): string {
  return Math.round(n).toLocaleString()
}

export default function StateImpactClient() {
  const [states, setStates] = useState<StateData[]>([])
  const [bases, setBases] = useState<BaseData[]>([])
  const [selected, setSelected] = useState('')

  useEffect(() => {
    fetch('/data/state-war-impact.json').then(r => r.json()).then(setStates)
    fetch('/data/base-states.json').then(r => r.json()).then(setBases).catch(() => {})
  }, [])

  const state = states.find(s => s.code === selected)
  const stateBases = bases.find(b => b.code === selected)

  const share = state ? state.population / US_POPULATION : 0
  const stateWarCost = TOTAL_WAR_COST * share
  const perTaxpayer = state ? stateWarCost / state.taxpayers : 0
  const perHousehold = state ? stateWarCost / state.households : 0

  const teachers = state ? Math.round(stateWarCost / state.avgTeacherSalary) : 0
  const homes = state ? Math.round(stateWarCost / state.medianHomePrice) : 0
  const tuitions = state ? Math.round(stateWarCost / state.avgTuition) : 0
  const roads = Math.round(stateWarCost / ROAD_COST_PER_MILE)
  const healthcare = Math.round(stateWarCost / HEALTHCARE_COST_PER_PERSON)

  return (
    <div className="mt-8">
      {/* State Selector */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 mb-8 text-white">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">
          Find Your State&apos;s War Bill
        </h2>
        <p className="text-stone-400 mb-6">Select your state to see personalized war cost data.</p>
        <select
          value={selected}
          onChange={e => setSelected(e.target.value)}
          className="w-full max-w-md px-4 py-3 rounded-lg bg-stone-700 text-white border border-stone-600 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">— Select your state —</option>
          {states.sort((a, b) => a.name.localeCompare(b.name)).map(s => (
            <option key={s.code} value={s.code}>{s.name}</option>
          ))}
        </select>
      </div>

      {state && (
        <div className="space-y-8 animate-in fade-in duration-500">
          {/* War Bill */}
          <section>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">💰</span> {state.name}&apos;s War Bill
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card color="red" label="State Share of War Spending" value={fmt(stateWarCost)} sub={`${(share * 100).toFixed(1)}% of $8 trillion`} />
              <Card color="red" label="Per Taxpayer Cost" value={fmt(perTaxpayer)} sub={`Over ${state.name} taxpayer's lifetime`} />
              <Card color="red" label="Per Household Cost" value={fmt(perHousehold)} sub={`Per ${state.name} household`} />
            </div>
          </section>

          {/* Sacrifice */}
          <section>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🎖️</span> {state.name}&apos;s Sacrifice
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card color="amber" label="Military Deaths (Post-9/11)" value={num(state.militaryDeaths)} sub="Service members killed" />
              <Card color="amber" label="Active Duty Personnel" value={num(state.activeDuty)} sub="Currently serving" />
              <Card color="amber" label="Veterans" value={num(state.veterans)} sub={`Living in ${state.name}`} />
              <Card color="amber" label="Military Bases" value={stateBases ? num(stateBases.total) : '—'} sub={`Installations in ${state.name}`} />
            </div>
          </section>

          {/* Opportunity Cost */}
          <section>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🏫</span> What {state.name} Could&apos;ve Had Instead
            </h3>
            <p className="text-stone-500 text-sm mb-4">
              Based on {state.name}&apos;s {fmt(stateWarCost)} share of war spending:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card color="green" label="Teachers Hired" value={num(teachers)} sub={`At ${fmt(state.avgTeacherSalary)} avg salary`} />
              <Card color="green" label="Homes Built" value={num(homes)} sub={`At ${fmt(state.medianHomePrice)} median price`} />
              <Card color="blue" label="College Tuitions Paid" value={num(tuitions)} sub={`At ${fmt(state.avgTuition)} avg tuition`} />
              <Card color="blue" label="Miles of Roads Repaired" value={num(roads)} sub="At $1.5M per mile" />
              <Card color="purple" label="People Covered (Healthcare)" value={num(healthcare)} sub="Annual coverage at $8,500/person" />
            </div>
          </section>

          {/* Defense Economy */}
          <section>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🏭</span> {state.name}&apos;s Defense Economy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card color="stone" label="Defense Contractor Jobs" value={num(state.defenseJobs)} sub={`Jobs tied to military contracts`} />
              <Card color="stone" label="Base Economic Impact" value={fmt(state.baseEconomicImpact)} sub="Annual impact on state economy" />
              <Card
                color={state.warTaxReturn >= 1 ? 'green' : 'red'}
                label="War Tax Return Rate"
                value={`$${state.warTaxReturn.toFixed(2)}`}
                sub={`Back for every $1 in war taxes — ${state.warTaxReturn >= 1 ? 'net beneficiary' : 'net payer'}`}
              />
            </div>
          </section>

          {/* Source note */}
          <p className="text-stone-400 text-xs mt-8">
            Sources: Brown University Costs of War Project, Census Bureau, Bureau of Labor Statistics,
            Department of Defense, National Priorities Project. Military death estimates based on state
            enlistment rates and DoD casualty data. All figures are estimates for educational purposes.
          </p>
        </div>
      )}
    </div>
  )
}

function Card({ color, label, value, sub }: { color: string; label: string; value: string; sub: string }) {
  const colors: Record<string, string> = {
    red: 'bg-red-50 border-red-200',
    amber: 'bg-amber-50 border-amber-200',
    green: 'bg-green-50 border-green-200',
    blue: 'bg-blue-50 border-blue-200',
    purple: 'bg-purple-50 border-purple-200',
    stone: 'bg-stone-50 border-stone-200',
  }
  const textColors: Record<string, string> = {
    red: 'text-red-900',
    amber: 'text-amber-900',
    green: 'text-green-900',
    blue: 'text-blue-900',
    purple: 'text-purple-900',
    stone: 'text-stone-900',
  }
  return (
    <div className={`rounded-xl border p-5 ${colors[color] || colors.stone}`}>
      <p className="text-stone-500 text-xs font-medium uppercase tracking-wide mb-1">{label}</p>
      <p className={`text-2xl font-bold ${textColors[color] || textColors.stone}`}>{value}</p>
      <p className="text-stone-500 text-xs mt-1">{sub}</p>
    </div>
  )
}
