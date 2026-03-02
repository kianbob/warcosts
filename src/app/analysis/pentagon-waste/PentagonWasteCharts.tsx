// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell, LineChart, Line, Legend,
} from 'recharts'

const failedAudits = [
  { year: '2018', result: 'Failed', findings: 1300, note: 'First-ever full audit. Massive failures.' },
  { year: '2019', result: 'Failed', findings: 1200, note: 'No improvement.' },
  { year: '2020', result: 'Failed', findings: 1100, note: 'COVID cited as excuse.' },
  { year: '2021', result: 'Failed', findings: 900, note: '"Progress" claimed. Still failed.' },
  { year: '2022', result: 'Failed', findings: 800, note: '6th consecutive failure.' },
  { year: '2023', result: 'Failed', findings: 750, note: '"Close to passing." Still failed.' },
]

const wasteExamples = [
  { item: 'F-35 Program (lifetime)', cost: 1700000000000, budgeted: 233000000000, overrun: '629%', status: 'Still not fully operational' },
  { item: 'Zumwalt Destroyer (3 ships)', cost: 22500000000, budgeted: 9800000000, overrun: '130%', status: 'Guns canceled — no ammo ($800K/round)' },
  { item: 'Littoral Combat Ship (LCS)', cost: 30000000000, budgeted: 12000000000, overrun: '150%', status: '4 ships retired early after <5 years' },
  { item: 'Future Combat Systems (Army)', cost: 18100000000, budgeted: 92000000000, overrun: 'N/A', status: 'Canceled. $18.1B spent. Nothing delivered.' },
  { item: 'VA Electronic Health Records', cost: 16000000000, budgeted: 10000000000, overrun: '60%', status: 'Paused in 2023 after patient safety issues' },
  { item: 'SBInet Border Fence (Boeing)', cost: 1000000000, budgeted: 7600000000, overrun: 'N/A', status: 'Canceled. $1B spent. 53 miles of "virtual fence."' },
]

const afghanistanWaste = [
  { category: 'Afghan security forces', amount: 88300000000, note: 'Collapsed in 11 days in Aug 2021' },
  { category: 'Reconstruction projects', amount: 36200000000, note: 'Schools, roads, dams — many now destroyed or abandoned' },
  { category: 'Counter-narcotics', amount: 9600000000, note: 'Opium production increased 40x during US presence' },
  { category: 'Governance programs', amount: 5200000000, note: 'Government collapsed immediately' },
  { category: 'Economic development', amount: 3700000000, note: 'Afghanistan remains one of poorest countries on Earth' },
]

const absurdPurchases = [
  { item: 'Toilet seat cover (C-5 aircraft)', price: '$640', civilian: '~$15', year: '1985' },
  { item: 'Coffee maker (Air Force)', price: '$7,622', civilian: '~$50', year: '2018' },
  { item: 'Trash can (Air Force)', price: '$1,280', civilian: '~$30', year: '2018' },
  { item: 'Cup (helmet-mounted)', price: '$1,280', civilian: 'N/A', year: '2019' },
  { item: 'Wrench (custom spec)', price: '$9,609', civilian: '~$40', year: '2019' },
  { item: 'Shower curtain (US Embassy Kabul)', price: '$8,600', civilian: '~$25', year: '2015' },
  { item: 'Gas station (Afghanistan)', price: '$43,000,000', civilian: '~$500K', year: '2014' },
  { item: 'Soccer fields (Guantanamo)', price: '$750,000', civilian: '~$100K', year: '2012' },
]

export function AuditChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Pentagon Audit Results: 6 Consecutive Failures
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        The Pentagon is the only federal agency that has never passed an audit. It manages $3.8 trillion in
        assets and $886 billion in annual spending with no verified accounting. Sources: DOD OIG, GAO.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={failedAudits}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v.toLocaleString(), 'Audit Findings']}
          />
          <Bar dataKey="findings" fill="#991b1b" name="Audit Findings" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function AfghanWasteChart() {
  const data = afghanistanWaste.map(d => ({ ...d, billions: Math.round(d.amount / 1e9) }))
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Afghanistan Reconstruction Spending ($145B Total)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        $145 billion spent on &ldquo;reconstruction&rdquo; — more than the Marshall Plan (inflation-adjusted).
        The Afghan government collapsed in 11 days. Sources: SIGAR Quarterly Reports.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" stroke="#a8a29e" tickFormatter={(v) => `$${v}B`} tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="category" stroke="#a8a29e" tick={{ fontSize: 11 }} width={160} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`$${v}B`, '']}
          />
          <Bar dataKey="billions" fill="#b91c1c" name="Billions Spent" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function WeaponOverrunsChart() {
  const data = wasteExamples.slice(0, 4).map(d => ({
    name: d.item.split(' (')[0],
    budgeted: Math.round(d.budgeted / 1e9),
    actual: Math.round(d.cost / 1e9),
  }))
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Major Weapons Programs: Budget vs. Actual Cost (Billions)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Defense contractors face no consequences for cost overruns. The incentive structure rewards failure:
        the more a program costs, the more profit the contractor makes. Sources: GAO Weapons Systems Annual Assessment.
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="name" stroke="#a8a29e" tick={{ fontSize: 11 }} />
          <YAxis stroke="#a8a29e" tickFormatter={(v) => `$${v}B`} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`$${v}B`, '']}
          />
          <Legend />
          <Bar dataKey="budgeted" fill="#60a5fa" name="Original Budget" />
          <Bar dataKey="actual" fill="#991b1b" name="Actual Cost" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
