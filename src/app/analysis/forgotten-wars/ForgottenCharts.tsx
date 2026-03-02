// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Legend, Cell,
} from 'recharts'

const forgottenWarDeaths = [
  { war: 'Philippine-American War', usDead: 4200, civilianDead: 600000, year: '1899-1902', known: 15 },
  { war: 'Banana Wars', usDead: 300, civilianDead: 50000, year: '1898-1934', known: 8 },
  { war: 'Korean War', usDead: 36574, civilianDead: 2000000, year: '1950-1953', known: 42 },
  { war: 'Laotian Secret War', usDead: 700, civilianDead: 200000, year: '1964-1973', known: 12 },
  { war: 'Cambodian Bombing', usDead: 0, civilianDead: 150000, year: '1969-1973', known: 18 },
  { war: 'Somalia', usDead: 43, civilianDead: 2000, year: '1993', known: 35 },
  { war: 'Haiti Interventions', usDead: 150, civilianDead: 15000, year: '1915-1934', known: 5 },
  { war: 'Dominican Republic', usDead: 47, civilianDead: 6000, year: '1965', known: 10 },
]

const bombingData = [
  { country: 'Laos', tonsDropped: 2093100, perCapita: 0.84, yearsOfBombing: 9 },
  { country: 'Cambodia', tonsDropped: 539129, perCapita: 0.08, yearsOfBombing: 4 },
  { country: 'Vietnam', tonsDropped: 7078032, perCapita: 0.18, yearsOfBombing: 10 },
  { country: 'Germany (WWII)', tonsDropped: 1613000, perCapita: 0.02, yearsOfBombing: 5 },
  { country: 'Japan (WWII)', tonsDropped: 160000, perCapita: 0.002, yearsOfBombing: 1 },
  { country: 'Iraq (2003+)', tonsDropped: 29200, perCapita: 0.001, yearsOfBombing: 8 },
]

const publicAwareness = forgottenWarDeaths.map(d => ({
  war: d.war,
  deaths: d.usDead + d.civilianDead,
  awareness: d.known,
}))

export function DeathComparisonChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Civilian Deaths in America&apos;s Forgotten Wars</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={forgottenWarDeaths} layout="vertical" margin={{ left: 140 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis type="number" stroke="#a8a29e" />
          <YAxis type="category" dataKey="war" stroke="#a8a29e" tick={{ fontSize: 11 }} width={135} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `${Number(v).toLocaleString()}`}
          />
          <Legend />
          <Bar dataKey="usDead" name="US Military Deaths" fill="#b91c1c" />
          <Bar dataKey="civilianDead" name="Civilian Deaths" fill="#991b1b" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        The Philippine-American War killed up to 1 million Filipinos. Most Americans have never heard of it.
      </p>
    </div>
  )
}

export function BombingChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Tons of Bombs Dropped — Laos vs. Other Campaigns</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={bombingData} layout="vertical" margin={{ left: 120 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis type="number" stroke="#a8a29e" />
          <YAxis type="category" dataKey="country" stroke="#a8a29e" tick={{ fontSize: 11 }} width={115} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `${Number(v).toLocaleString()} tons`}
          />
          <Bar dataKey="tonsDropped" name="Tons of Bombs" fill="#991b1b">
            {bombingData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.country === 'Laos' ? '#dc2626' : '#991b1b'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        Laos is the most bombed country per capita in history. The US dropped more bombs on Laos than on Germany and Japan in WWII combined.
      </p>
    </div>
  )
}

export function AwarenessChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Total Deaths vs. Public Awareness (%)</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={publicAwareness} layout="vertical" margin={{ left: 140 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis type="number" stroke="#a8a29e" />
          <YAxis type="category" dataKey="war" stroke="#a8a29e" tick={{ fontSize: 11 }} width={135} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `${v}%`}
          />
          <Bar dataKey="awareness" name="% of Americans Who Know About It" fill="#b91c1c" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        Awareness based on survey data estimates. The deadliest wars are often the least remembered.
      </p>
    </div>
  )
}
