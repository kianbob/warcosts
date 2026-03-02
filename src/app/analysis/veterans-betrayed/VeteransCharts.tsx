// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, AreaChart, Area, Cell,
} from 'recharts'

const suicideTimeline = [
  { year: '2001', perDay: 14.0, total: 5110 },
  { year: '2005', perDay: 15.2, total: 5548 },
  { year: '2008', perDay: 16.1, total: 5877 },
  { year: '2010', perDay: 16.8, total: 6132 },
  { year: '2012', perDay: 17.1, total: 6242 },
  { year: '2014', perDay: 17.6, total: 6424 },
  { year: '2016', perDay: 17.1, total: 6243 },
  { year: '2018', perDay: 17.6, total: 6435 },
  { year: '2020', perDay: 17.2, total: 6278 },
  { year: '2022', perDay: 17.5, total: 6392 },
  { year: '2024', perDay: 17.3, total: 6315 },
]

const homelessData = [
  { year: '2009', count: 75609 },
  { year: '2011', count: 67495 },
  { year: '2013', count: 57849 },
  { year: '2015', count: 47725 },
  { year: '2017', count: 40056 },
  { year: '2019', count: 37085 },
  { year: '2021', count: 37252 },
  { year: '2023', count: 35574 },
  { year: '2025', count: 37000 },
]

const vaWaitTimes = [
  { category: 'Primary care', days2014: 115, days2024: 34 },
  { category: 'Mental health', days2014: 84, days2024: 42 },
  { category: 'Specialty care', days2014: 120, days2024: 51 },
  { category: 'Disability claims', days2014: 262, days2024: 152 },
  { category: 'Appeals', days2014: 1460, days2024: 540 },
]

const denialTimelines = [
  { condition: 'Agent Orange', yearsOfDenial: 20, yearExposed: 1962, yearRecognized: 1991, affectedVets: '2.6M' },
  { condition: 'Gulf War Syndrome', yearsOfDenial: 17, yearExposed: 1991, yearRecognized: 2008, affectedVets: '250K' },
  { condition: 'Burn Pits', yearsOfDenial: 21, yearExposed: 2001, yearRecognized: 2022, affectedVets: '3.5M' },
  { condition: 'Camp Lejeune Water', yearsOfDenial: 42, yearExposed: 1953, yearRecognized: 2022, affectedVets: '1M' },
  { condition: 'Atomic Veterans', yearsOfDenial: 42, yearExposed: 1946, yearRecognized: 1988, affectedVets: '400K' },
]

export function SuicideChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Veteran Suicides Per Day (2001–2024)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        The veteran suicide rate has remained stubbornly around 17 per day for over a decade — despite
        billions spent on prevention programs. That&apos;s 6,000+ veterans per year. Sources: VA National Suicide Data Reports.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={suicideTimeline}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" domain={[12, 20]} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v, '']}
            labelFormatter={(l) => `Year: ${l}`}
          />
          <Legend />
          <Line type="monotone" dataKey="perDay" stroke="#ef4444" name="Suicides/Day" strokeWidth={2} dot={{ fill: '#ef4444' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function HomelessChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Homeless Veterans (Point-in-Time Count)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Progress stalled around 37,000 and began rising again in 2021. The actual number is believed
        to be significantly higher — many homeless veterans are uncounted. Sources: HUD Annual Homeless Assessment.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={homelessData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v.toLocaleString(), 'Homeless Veterans']}
          />
          <Area type="monotone" dataKey="count" stroke="#991b1b" fill="#991b1b" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function WaitTimesChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        VA Wait Times: 2014 Scandal vs. 2024
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        The 2014 VA scandal revealed veterans dying while waiting for appointments. Wait times have improved
        but remain far above acceptable levels — especially for mental health and disability claims.
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={vaWaitTimes}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="category" stroke="#a8a29e" tick={{ fontSize: 11 }} />
          <YAxis stroke="#a8a29e" tickFormatter={(v) => `${v}d`} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`${v} days`, '']}
          />
          <Legend />
          <Bar dataKey="days2014" fill="#ef4444" name="2014 (Scandal)" />
          <Bar dataKey="days2024" fill="#60a5fa" name="2024 (Current)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function DenialTimelineChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Years of Government Denial Before Recognition
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        The pattern is always the same: veterans get sick, the VA denies the link, veterans die waiting,
        decades pass, Congress finally acts. Thousands die in the gap.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={denialTimelines} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" stroke="#a8a29e" tick={{ fontSize: 12 }} tickFormatter={(v) => `${v} yrs`} />
          <YAxis type="category" dataKey="condition" stroke="#a8a29e" tick={{ fontSize: 11 }} width={140} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`${v} years of denial`, '']}
          />
          <Bar dataKey="yearsOfDenial" fill="#991b1b" name="Years of Denial" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
