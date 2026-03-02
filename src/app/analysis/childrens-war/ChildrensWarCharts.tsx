// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, PieChart, Pie, Cell,
} from 'recharts'

const childDeathsByConflict = [
  { conflict: 'Afghanistan', deaths: 46000, fill: '#991b1b' },
  { conflict: 'Iraq', deaths: 186000, fill: '#b91c1c' },
  { conflict: 'Syria', deaths: 55000, fill: '#dc2626' },
  { conflict: 'Yemen', deaths: 85000, fill: '#ef4444' },
  { conflict: 'Pakistan', deaths: 18000, fill: '#f87171' },
  { conflict: 'Somalia', deaths: 12000, fill: '#fca5a5' },
]

const childSoldiersData = [
  { region: 'Africa', estimated: 120000, fill: '#991b1b' },
  { region: 'Asia', estimated: 75000, fill: '#b91c1c' },
  { region: 'Middle East', estimated: 30000, fill: '#dc2626' },
  { region: 'Americas', estimated: 12000, fill: '#ef4444' },
  { region: 'Europe', estimated: 3000, fill: '#f87171' },
]

const ptsdInChildren = [
  { country: 'Gaza', ptsdRate: 72, sampleSize: '2,000 children', source: 'Save the Children (2023)' },
  { country: 'Syria', ptsdRate: 65, sampleSize: '3,500 children', source: 'UNICEF (2022)' },
  { country: 'Iraq', ptsdRate: 56, sampleSize: '1,800 children', source: 'WHO (2021)' },
  { country: 'Yemen', ptsdRate: 61, sampleSize: '1,200 children', source: 'UNICEF (2023)' },
  { country: 'Afghanistan', ptsdRate: 53, sampleSize: '2,100 children', source: 'MSF (2022)' },
  { country: 'Ukraine', ptsdRate: 48, sampleSize: '4,000 children', source: 'WHO (2023)' },
  { country: 'US (civilian)', ptsdRate: 5, sampleSize: 'National avg', source: 'CDC (2023)' },
]

const droneStrikeChildren = [
  { year: '2004', childrenKilled: 12 },
  { year: '2006', childrenKilled: 28 },
  { year: '2008', childrenKilled: 45 },
  { year: '2010', childrenKilled: 89 },
  { year: '2012', childrenKilled: 67 },
  { year: '2014', childrenKilled: 38 },
  { year: '2016', childrenKilled: 52 },
  { year: '2018', childrenKilled: 41 },
  { year: '2020', childrenKilled: 29 },
  { year: '2022', childrenKilled: 18 },
  { year: '2024', childrenKilled: 14 },
]

export function ChildDeathsChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Estimated Child Deaths in Post-9/11 Wars
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Brown University&apos;s Costs of War Project estimates 400,000+ children killed directly and indirectly.
        These numbers include deaths from violence, infrastructure destruction, and preventable disease.
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={childDeathsByConflict}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="conflict" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v.toLocaleString() + ' children', 'Estimated Deaths']}
          />
          <Bar dataKey="deaths" name="Child Deaths">
            {childDeathsByConflict.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function ChildSoldiersChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Estimated Child Soldiers by Region
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        An estimated 250,000–300,000 children serve as soldiers worldwide. Many are under 15.
        Sources: UN Office of the Special Representative for Children and Armed Conflict.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={childSoldiersData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" stroke="#a8a29e" tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="region" stroke="#a8a29e" tick={{ fontSize: 12 }} width={100} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v.toLocaleString(), 'Estimated Children']}
          />
          <Bar dataKey="estimated" name="Child Soldiers">
            {childSoldiersData.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function PTSDChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        PTSD Rates in War Zone Children vs. US Civilian Children
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Children in active war zones show PTSD rates 10–14x higher than US civilian children.
        These are not &ldquo;resilient&rdquo; children — they are traumatized children with no access to care.
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={ptsdInChildren}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="country" stroke="#a8a29e" tick={{ fontSize: 11 }} />
          <YAxis stroke="#a8a29e" tickFormatter={(v) => `${v}%`} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`${v}%`, 'PTSD Rate']}
          />
          <Bar dataKey="ptsdRate" fill="#991b1b" name="PTSD Rate %" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function DroneChildrenChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Children Killed in US Drone Strikes (Estimated)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Estimates based on Bureau of Investigative Journalism, Airwars, and New America Foundation data.
        The US classifies all military-age males in strike zones as &ldquo;combatants&rdquo; — children are the only
        category universally acknowledged as civilian.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={droneStrikeChildren}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v, 'Children Killed']}
          />
          <Line type="monotone" dataKey="childrenKilled" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
