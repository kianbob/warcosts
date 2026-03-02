// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line, AreaChart, Area,
} from 'recharts'

const trueCostBreakdown = [
  { category: 'DoD Base Budget', amount: 886, color: '#991b1b' },
  { category: 'Overseas Operations', amount: 45, color: '#b91c1c' },
  { category: 'Nuclear Weapons (DOE)', amount: 37, color: '#dc2626' },
  { category: 'Veterans Affairs', amount: 325, color: '#ef4444' },
  { category: 'Homeland Security', amount: 62, color: '#f87171' },
  { category: 'Intelligence (est.)', amount: 90, color: '#fca5a5' },
  { category: 'Military Retirement', amount: 48, color: '#7f1d1d' },
  { category: 'Debt Interest (military share)', amount: 156, color: '#450a0a' },
]

const basesByRegion = [
  { region: 'Europe', bases: 194, troops: 80000 },
  { region: 'East Asia/Pacific', bases: 173, troops: 85000 },
  { region: 'Middle East', bases: 65, troops: 45000 },
  { region: 'Africa', bases: 44, troops: 7000 },
  { region: 'Latin America', bases: 32, troops: 4000 },
  { region: 'Central/South Asia', bases: 12, troops: 3000 },
  { region: 'Other', bases: 230, troops: 26000 },
]

const vsOtherNations = [
  { country: 'United States (true cost)', spending: 1349 },
  { country: 'China', spending: 318 },
  { country: 'Russia', spending: 151 },
  { country: 'India', spending: 84 },
  { country: 'Saudi Arabia', spending: 78 },
  { country: 'UK', spending: 75 },
  { country: 'Germany', spending: 86 },
  { country: 'France', spending: 64 },
  { country: 'Japan', spending: 53 },
  { country: 'South Korea', spending: 49 },
]

const opportunityCosts = [
  { item: 'Free public college (4yr, all students)', cost: 80, militaryEquiv: '9% of DoD budget' },
  { item: 'End homelessness', cost: 20, militaryEquiv: '2% of DoD budget' },
  { item: 'Universal pre-K', cost: 35, militaryEquiv: '4% of DoD budget' },
  { item: 'Clean water infrastructure', cost: 45, militaryEquiv: '5% of DoD budget' },
  { item: 'Universal broadband', cost: 65, militaryEquiv: '7% of DoD budget' },
  { item: 'Medicare for All (net new cost)', cost: 300, militaryEquiv: '34% of DoD budget' },
]

const opportunityChart = opportunityCosts.map(d => ({
  name: d.item,
  cost: d.cost,
}))

const empireCostHistory = [
  { year: '1950', bases: 450, trueCost: 320 },
  { year: '1960', bases: 750, trueCost: 450 },
  { year: '1970', bases: 900, trueCost: 580 },
  { year: '1980', bases: 850, trueCost: 520 },
  { year: '1990', bases: 800, trueCost: 650 },
  { year: '2000', bases: 700, trueCost: 580 },
  { year: '2005', bases: 740, trueCost: 920 },
  { year: '2010', bases: 750, trueCost: 1150 },
  { year: '2015', bases: 750, trueCost: 1050 },
  { year: '2020', bases: 750, trueCost: 1100 },
  { year: '2024', bases: 750, trueCost: 1349 },
]

const COLORS = ['#991b1b', '#b91c1c', '#dc2626', '#ef4444', '#f87171', '#fca5a5', '#7f1d1d', '#450a0a']

export function TrueCostChart() {
  const total = trueCostBreakdown.reduce((s, d) => s + d.amount, 0)
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">True Military Spending: ${total}B/year (FY2024)</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={trueCostBreakdown} layout="vertical" margin={{ left: 150 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis type="number" stroke="#a8a29e" />
          <YAxis type="category" dataKey="category" stroke="#a8a29e" tick={{ fontSize: 11 }} width={145} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `$${v}B`}
          />
          <Bar dataKey="amount" name="$ Billions" fill="#991b1b">
            {trueCostBreakdown.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        The official DoD budget is $886B. The true cost of military spending exceeds $1.3 trillion when all related spending is included.
      </p>
    </div>
  )
}

export function BasesChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">US Military Bases and Troops by Region</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={basesByRegion}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="region" stroke="#a8a29e" tick={{ fontSize: 11 }} />
          <YAxis stroke="#a8a29e" yAxisId="left" />
          <YAxis stroke="#a8a29e" yAxisId="right" orientation="right" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="bases" name="Bases" fill="#991b1b" />
          <Bar yAxisId="right" dataKey="troops" name="Troops Deployed" fill="#b91c1c" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function VsWorldChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">True US Military Spending vs. Other Nations ($B)</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={vsOtherNations} layout="vertical" margin={{ left: 160 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis type="number" stroke="#a8a29e" />
          <YAxis type="category" dataKey="country" stroke="#a8a29e" tick={{ fontSize: 11 }} width={155} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `$${v}B`}
          />
          <Bar dataKey="spending" name="Annual Military Budget ($B)" fill="#991b1b">
            {vsOtherNations.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? '#991b1b' : '#a8a29e'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        When you include all military-related spending, the US spends more than the next 15 nations combined.
      </p>
    </div>
  )
}

export function OpportunityCostChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">What Could We Buy Instead? (Annual Cost in $B)</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={opportunityChart} layout="vertical" margin={{ left: 180 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis type="number" stroke="#a8a29e" />
          <YAxis type="category" dataKey="name" stroke="#a8a29e" tick={{ fontSize: 11 }} width={175} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `$${v}B/year`}
          />
          <Bar dataKey="cost" name="Annual Cost ($B)" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        Free college, ending homelessness, universal pre-K, clean water, and broadband combined cost $245B — less than VA spending alone.
      </p>
    </div>
  )
}

export function EmpireGrowthChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">The Growth of Empire: Bases &amp; True Cost Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={empireCostHistory}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="year" stroke="#a8a29e" />
          <YAxis stroke="#a8a29e" yAxisId="left" />
          <YAxis stroke="#a8a29e" yAxisId="right" orientation="right" />
          <Tooltip contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }} />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="bases" name="Overseas Bases" stroke="#b91c1c" strokeWidth={2} />
          <Line yAxisId="right" type="monotone" dataKey="trueCost" name="True Cost ($B)" stroke="#991b1b" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
