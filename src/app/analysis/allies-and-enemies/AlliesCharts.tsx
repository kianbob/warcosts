// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, Cell, ScatterChart, Scatter, ZAxis,
} from 'recharts'

const allyToEnemyTimeline = [
  { name: 'Iran (Shah)', allyStart: 1953, allyEnd: 1979, enemyStart: 1979, type: 'Coup → Revolution', aidGiven: 28, cost: 0 },
  { name: 'Saddam Hussein', allyStart: 1980, allyEnd: 1990, enemyStart: 1990, type: 'CIA asset → Invaded', aidGiven: 5.1, cost: 1100 },
  { name: 'Bin Laden / Mujahideen', allyStart: 1979, allyEnd: 1989, enemyStart: 2001, type: 'Funded → Hunted', aidGiven: 3.3, cost: 5800 },
  { name: 'Noriega (Panama)', allyStart: 1966, allyEnd: 1988, enemyStart: 1989, type: 'CIA payroll → Invaded', aidGiven: 0.3, cost: 1.5 },
  { name: 'Taliban', allyStart: 1994, allyEnd: 1998, enemyStart: 2001, type: 'Armed → Fought 20yrs', aidGiven: 0.1, cost: 2300 },
  { name: 'Gaddafi (Libya)', allyStart: 2003, allyEnd: 2011, enemyStart: 2011, type: 'Rehabilitated → Bombed', aidGiven: 0.05, cost: 2.2 },
]

const yearsAsAlly = allyToEnemyTimeline.map(d => ({
  name: d.name,
  allyYears: d.allyEnd - d.allyStart,
  enemyYears: 2025 - d.enemyStart,
}))

const blowbackCost = allyToEnemyTimeline.map(d => ({
  name: d.name,
  aidGiven: d.aidGiven,
  costToFight: d.cost,
  ratio: d.cost > 0 ? Math.round(d.cost / d.aidGiven) : 0,
}))

const patternData = [
  { decade: '1950s', coupsBacked: 3, blowbacks: 1 },
  { decade: '1960s', coupsBacked: 5, blowbacks: 2 },
  { decade: '1970s', coupsBacked: 4, blowbacks: 2 },
  { decade: '1980s', coupsBacked: 6, blowbacks: 3 },
  { decade: '1990s', coupsBacked: 2, blowbacks: 4 },
  { decade: '2000s', coupsBacked: 1, blowbacks: 5 },
  { decade: '2010s', coupsBacked: 2, blowbacks: 4 },
  { decade: '2020s', coupsBacked: 0, blowbacks: 3 },
]

const usArmsSales = [
  { year: '1980', toFutureEnemies: 4.2, toCurrentAllies: 12.1 },
  { year: '1985', toFutureEnemies: 6.8, toCurrentAllies: 18.3 },
  { year: '1990', toFutureEnemies: 2.1, toCurrentAllies: 22.5 },
  { year: '1995', toFutureEnemies: 0.8, toCurrentAllies: 28.1 },
  { year: '2000', toFutureEnemies: 1.2, toCurrentAllies: 31.4 },
  { year: '2005', toFutureEnemies: 0.5, toCurrentAllies: 38.2 },
  { year: '2010', toFutureEnemies: 0.3, toCurrentAllies: 44.1 },
  { year: '2015', toFutureEnemies: 0.1, toCurrentAllies: 47.8 },
  { year: '2020', toFutureEnemies: 0.2, toCurrentAllies: 52.3 },
]

const COLORS = ['#991b1b', '#b91c1c', '#dc2626', '#ef4444', '#f87171', '#fca5a5']

export function AllyEnemyTimelineChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Years as Ally vs. Years as Enemy</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={yearsAsAlly} layout="vertical" margin={{ left: 120 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis type="number" stroke="#a8a29e" label={{ value: 'Years', position: 'insideBottom', offset: -5, fill: '#a8a29e' }} />
          <YAxis type="category" dataKey="name" stroke="#a8a29e" tick={{ fontSize: 12 }} width={115} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `${v} years`}
          />
          <Legend />
          <Bar dataKey="allyYears" name="Years as US Ally" fill="#22c55e" />
          <Bar dataKey="enemyYears" name="Years as US Enemy" fill="#991b1b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function BlowbackCostChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Aid Given vs. Cost to Fight (Billions $)</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={blowbackCost} layout="vertical" margin={{ left: 120 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis type="number" stroke="#a8a29e" />
          <YAxis type="category" dataKey="name" stroke="#a8a29e" tick={{ fontSize: 12 }} width={115} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `$${v}B`}
          />
          <Legend />
          <Bar dataKey="aidGiven" name="Aid Given ($B)" fill="#22c55e" />
          <Bar dataKey="costToFight" name="Cost to Fight ($B)" fill="#991b1b" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        The US spent $3.3B arming the Afghan mujahideen. The War on Terror cost $5.8 trillion. Return on investment: -175,657%.
      </p>
    </div>
  )
}

export function PatternChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Coups Backed vs. Blowback Events by Decade</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={patternData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="decade" stroke="#a8a29e" />
          <YAxis stroke="#a8a29e" />
          <Tooltip contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }} />
          <Legend />
          <Line type="monotone" dataKey="coupsBacked" name="Coups/Regime Changes Backed" stroke="#22c55e" strokeWidth={2} dot={{ r: 5 }} />
          <Line type="monotone" dataKey="blowbacks" name="Blowback Events" stroke="#991b1b" strokeWidth={2} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        As coups decreased, blowback increased — the consequences of earlier interventions catching up.
      </p>
    </div>
  )
}

export function ArmsSalesChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">US Arms Sales: To Future Enemies vs. Current Allies ($B)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={usArmsSales}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="year" stroke="#a8a29e" />
          <YAxis stroke="#a8a29e" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `$${v}B`}
          />
          <Legend />
          <Bar dataKey="toFutureEnemies" name="To Future Enemies" fill="#991b1b" />
          <Bar dataKey="toCurrentAllies" name="To Current Allies" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
