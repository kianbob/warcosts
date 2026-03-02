// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, Cell,
} from 'recharts'

const lieToWarTimeline = [
  { year: '1898', war: 'Spanish-American War', lie: 'USS Maine explosion', yearsToTruth: 73, deaths: 3500 },
  { year: '1915', war: 'World War I entry', lie: 'Lusitania as civilian ship', yearsToTruth: 93, deaths: 116516 },
  { year: '1964', war: 'Vietnam escalation', lie: 'Gulf of Tonkin incident', yearsToTruth: 7, deaths: 58220 },
  { year: '1990', war: 'Gulf War', lie: 'Nayirah testimony', yearsToTruth: 2, deaths: 383 },
  { year: '2003', war: 'Iraq War', lie: 'WMDs in Iraq', yearsToTruth: 1, deaths: 4600 },
]

const truthDelay = [
  { lie: 'USS Maine (1898)', years: 73 },
  { lie: 'Lusitania munitions (1915)', years: 93 },
  { lie: 'Gulf of Tonkin (1964)', years: 7 },
  { lie: 'Nayirah testimony (1990)', years: 2 },
  { lie: 'Iraq WMDs (2003)', years: 1 },
  { lie: 'Domino theory (1950s)', years: 30 },
  { lie: 'Jessica Lynch rescue (2003)', years: 0.5 },
  { lie: 'Tillman friendly fire (2004)', years: 1 },
]

const deathsByLie = [
  { lie: 'Gulf of Tonkin → Vietnam', deaths: 3400000 },
  { lie: 'WMDs → Iraq War', deaths: 500000 },
  { lie: 'Domino Theory → Vietnam/Korea/etc', deaths: 4000000 },
  { lie: 'USS Maine → Spanish-American', deaths: 3500 },
  { lie: 'Nayirah testimony → Gulf War', deaths: 100000 },
  { lie: 'Lusitania → WWI entry', deaths: 116516 },
]

const mediaComplicity = [
  { outlet: 'NY Times (Judith Miller)', wmds: 12, corrections: 1 },
  { outlet: 'Washington Post', wmds: 27, corrections: 3 },
  { outlet: 'CNN', wmds: 45, corrections: 2 },
  { outlet: 'Fox News', wmds: 65, corrections: 0 },
  { outlet: 'NBC/MSNBC', wmds: 38, corrections: 2 },
  { outlet: 'CBS', wmds: 22, corrections: 1 },
]

export function TruthDelayChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Years Between the Lie and the Truth
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        How long it took for the official lie to be definitively debunked. The USS Maine&apos;s actual 
        cause wasn&apos;t confirmed until 1976 — 73 years after the war it started. The pattern: start 
        war first, discover truth decades later. Sources: CRS, declassified documents.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={truthDelay} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" stroke="#a8a29e" tick={{ fontSize: 12 }} label={{ value: 'Years', position: 'insideBottom', fill: '#a8a29e', offset: -5 }} />
          <YAxis type="category" dataKey="lie" stroke="#a8a29e" tick={{ fontSize: 10 }} width={180} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`${v} years`, 'Time to truth']}
          />
          <Bar dataKey="years" fill="#991b1b" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function DeathsByLieChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Deaths Resulting from Each Lie
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Total estimated deaths (military + civilian, all sides) resulting from wars started or 
        escalated by fabricated pretexts. Gulf of Tonkin alone led to 3.4 million deaths. Sources: 
        Brown University Costs of War, various historical estimates.
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={deathsByLie} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" stroke="#a8a29e" tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
          <YAxis type="category" dataKey="lie" stroke="#a8a29e" tick={{ fontSize: 10 }} width={200} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v.toLocaleString(), 'Deaths']}
          />
          <Bar dataKey="deaths" radius={[0, 4, 4, 0]}>
            {deathsByLie.map((entry, i) => (
              <Cell key={entry.lie} fill={entry.deaths > 1000000 ? '#ef4444' : '#991b1b'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function MediaComplicityChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Media WMD Coverage: Pro-War Stories vs. Corrections (2002–2003)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Major US outlets published dozens of stories supporting the WMD narrative. Corrections came 
        years later, buried on inside pages. The NY Times eventually apologized — in 2004, after the 
        war had been raging for a year. Sources: FAIR media study, Columbia Journalism Review.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={mediaComplicity}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="outlet" stroke="#a8a29e" tick={{ fontSize: 10 }} angle={-20} textAnchor="end" height={60} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v, '']}
          />
          <Legend />
          <Bar dataKey="wmds" fill="#ef4444" name="Pro-WMD Stories" />
          <Bar dataKey="corrections" fill="#525252" name="Corrections/Retractions" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function LieTimelineChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Timeline: Lies That Started Wars (1898–2003)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Over 100 years of fabricated pretexts. The pattern never changes: incident (real or fabricated) → 
        media amplification → public outrage → war → truth revealed too late → no accountability.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={lieToWarTimeline}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v, name) => {
              if (name === 'deaths') return [v.toLocaleString(), 'US Military Deaths']
              return [`${v} years`, 'Years to Truth']
            }}
            labelFormatter={(l) => {
              const item = lieToWarTimeline.find(d => d.year === l)
              return item ? `${l}: ${item.lie}` : l
            }}
          />
          <Legend />
          <Bar dataKey="yearsToTruth" fill="#b91c1c" name="Years to Truth" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
