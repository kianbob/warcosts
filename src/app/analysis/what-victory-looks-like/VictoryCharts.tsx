// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Legend, Cell,
} from 'recharts'

const warOutcomes = [
  { war: 'Iraq (2003-2011)', cost: 3000, usDead: 4600, civilianDead: 500000, statedGoal: 'Remove WMDs / Democracy', actualResult: 'ISIS emerged, Iran empowered, 500K dead', goalAchieved: 0 },
  { war: 'Afghanistan (2001-2021)', cost: 2300, usDead: 2461, civilianDead: 176000, statedGoal: 'Defeat Taliban / Democracy', actualResult: 'Taliban back in power after 20 years', goalAchieved: 0 },
  { war: 'Libya (2011)', cost: 2, usDead: 0, civilianDead: 30000, statedGoal: 'Protect civilians / Remove Gaddafi', actualResult: 'Failed state, slave markets, ISIS affiliate', goalAchieved: 0 },
  { war: 'Vietnam (1965-1975)', cost: 1000, usDead: 58220, civilianDead: 2000000, statedGoal: 'Stop communism', actualResult: 'Unified under communism anyway', goalAchieved: 0 },
  { war: 'Korea (1950-1953)', cost: 341, usDead: 36574, civilianDead: 2000000, statedGoal: 'Unify Korea / Stop communism', actualResult: '70-year frozen conflict, nuclear NK', goalAchieved: 10 },
]

const costVsResultData = [
  { war: 'Iraq', costBillions: 3000, successScore: 5 },
  { war: 'Afghanistan', costBillions: 2300, successScore: 3 },
  { war: 'Libya', costBillions: 2, successScore: 8 },
  { war: 'Vietnam', costBillions: 1000, successScore: 2 },
  { war: 'Korea', costBillions: 341, successScore: 25 },
]

const beforeAfter = [
  { metric: 'Iraq: Terrorist Groups', before: 1, after: 12 },
  { metric: 'Afghanistan: Taliban Control %', before: 90, after: 100 },
  { metric: 'Libya: Functioning Govt', before: 1, after: 0 },
  { metric: 'Iraq: Iranian Influence (1-10)', before: 2, after: 9 },
  { metric: 'Region: Refugees (Millions)', before: 2, after: 38 },
]

const isisTimeline = [
  { year: '2003', strength: 0, label: 'Iraq invaded, Saddam removed' },
  { year: '2004', strength: 5, label: 'AQI forms (Zarqawi)' },
  { year: '2006', strength: 15, label: 'ISI declared' },
  { year: '2007', strength: 10, label: 'US surge' },
  { year: '2009', strength: 5, label: 'ISI weakened' },
  { year: '2011', strength: 8, label: 'US withdraws, Syria war begins' },
  { year: '2013', strength: 25, label: 'ISIS expands into Syria' },
  { year: '2014', strength: 50, label: 'ISIS declares caliphate, captures Mosul' },
  { year: '2015', strength: 45, label: 'Paris attacks, global terror' },
  { year: '2017', strength: 15, label: 'Mosul/Raqqa recaptured' },
  { year: '2019', strength: 5, label: 'Caliphate collapsed' },
  { year: '2024', strength: 8, label: 'ISIS-K active in Afghanistan, Africa' },
]

const spendingVsOutcome = [
  { country: 'Iraq', spent: 3000, outcome: 'ISIS, civil war, Iran empowered' },
  { country: 'Afghanistan', spent: 2300, outcome: 'Taliban retook power in 11 days' },
  { country: 'Libya', spent: 2, outcome: 'Failed state, slave markets' },
  { country: 'Vietnam', spent: 1000, outcome: 'Unified under communism' },
  { country: 'Korea', spent: 341, outcome: '70-year frozen conflict' },
  { country: 'Somalia', spent: 30, outcome: 'Still a failed state (1993-present)' },
  { country: 'Syria', spent: 20, outcome: 'Assad still in power (at time of intervention)' },
]

export function WarOutcomesChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Cost of &ldquo;Victory&rdquo; ($Billions)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Total estimated cost of each war vs. whether the stated objective was achieved. Spoiler: it wasn&apos;t.
        Sources: Brown University Costs of War, CRS.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={costVsResultData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="war" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v, name) => {
              if (name === 'costBillions') return [`$${v}B`, 'Cost']
              return [`${v}/100`, 'Success Score']
            }}
          />
          <Legend />
          <Bar dataKey="costBillions" fill="#991b1b" name="Cost ($B)" />
          <Bar dataKey="successScore" fill="#525252" name="Success Score (0-100)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function ISISTimelineChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        The Rise of ISIS: A Direct Consequence of the Iraq War
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        ISIS did not exist before the Iraq invasion. It grew directly from the chaos of occupation, 
        de-Baathification, and the Syrian civil war. Relative strength index (estimated). Sources: CRS, Brookings, CSIS.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={isisTimeline}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 11 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v, 'Strength Index']}
            labelFormatter={(l) => {
              const item = isisTimeline.find(d => d.year === l)
              return item ? `${l}: ${item.label}` : l
            }}
          />
          <Bar dataKey="strength" fill="#ef4444" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function BeforeAfterChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Before vs. After US Intervention
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Key metrics before and after US military intervention. In every case, the situation is worse 
        on the metrics that were used to justify the war.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={beforeAfter} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="metric" stroke="#a8a29e" tick={{ fontSize: 10 }} width={200} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v, '']}
          />
          <Legend />
          <Bar dataKey="before" fill="#525252" name="Before Intervention" />
          <Bar dataKey="after" fill="#ef4444" name="After Intervention" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function SpendingOutcomeChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Spending vs. Outcome: The Return on Investment
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Total US spending on each intervention and what it achieved. The ROI on American wars 
        is spectacularly negative.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={spendingVsOutcome}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="country" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v}B`} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`$${v}B`, 'Cost']}
            labelFormatter={(l) => {
              const item = spendingVsOutcome.find(d => d.country === l)
              return item ? `${l}: ${item.outcome}` : l
            }}
          />
          <Bar dataKey="spent" radius={[4, 4, 0, 0]}>
            {spendingVsOutcome.map((entry, i) => (
              <Cell key={entry.country} fill={entry.spent > 500 ? '#ef4444' : '#991b1b'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
