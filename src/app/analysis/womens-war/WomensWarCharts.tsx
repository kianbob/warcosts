// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, AreaChart, Area,
} from 'recharts'

const mstData = [
  { year: '2004', reports: 2374, prevalenceWomen: 22, prevalenceMen: 1.2 },
  { year: '2006', reports: 2947, prevalenceWomen: 24, prevalenceMen: 1.2 },
  { year: '2008', reports: 2908, prevalenceWomen: 25, prevalenceMen: 1.3 },
  { year: '2010', reports: 3158, prevalenceWomen: 23, prevalenceMen: 1.2 },
  { year: '2012', reports: 3374, prevalenceWomen: 26, prevalenceMen: 1.4 },
  { year: '2014', reports: 6131, prevalenceWomen: 25, prevalenceMen: 1.3 },
  { year: '2016', reports: 6172, prevalenceWomen: 24, prevalenceMen: 1.2 },
  { year: '2018', reports: 6053, prevalenceWomen: 24, prevalenceMen: 1.3 },
  { year: '2020', reports: 6290, prevalenceWomen: 25, prevalenceMen: 1.2 },
  { year: '2022', reports: 8942, prevalenceWomen: 26, prevalenceMen: 1.4 },
  { year: '2024', reports: 9200, prevalenceWomen: 26, prevalenceMen: 1.5 },
]

const womenInMilitary = [
  { year: '1973', percent: 2.5, total: 42000 },
  { year: '1980', percent: 8.5, total: 171000 },
  { year: '1990', percent: 11.0, total: 227000 },
  { year: '2000', percent: 14.4, total: 200000 },
  { year: '2005', percent: 15.1, total: 212000 },
  { year: '2010', percent: 15.6, total: 214000 },
  { year: '2015', percent: 16.8, total: 205000 },
  { year: '2020', percent: 17.3, total: 228000 },
  { year: '2025', percent: 18.1, total: 238000 },
]

const sexualViolenceConflict = [
  { conflict: 'Bosnia (1992-95)', estimatedVictims: 50000, perpetrators: 'Serb forces', recognized: 'Yes (ICTY)' },
  { conflict: 'Rwanda (1994)', estimatedVictims: 250000, perpetrators: 'Hutu militia', recognized: 'Yes (ICTR)' },
  { conflict: 'DRC (ongoing)', estimatedVictims: 200000, perpetrators: 'Multiple militias', recognized: 'Partially' },
  { conflict: 'Iraq (ISIS, 2014-17)', estimatedVictims: 7000, perpetrators: 'ISIS', recognized: 'Partially' },
  { conflict: 'Syria (2011-present)', estimatedVictims: 14000, perpetrators: 'Assad regime/ISIS', recognized: 'Limited' },
  { conflict: 'Ethiopia/Tigray (2020-22)', estimatedVictims: 120000, perpetrators: 'Ethiopian/Eritrean forces', recognized: 'UN investigation' },
]

export function MSTChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Military Sexual Assault Reports (DOD)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Reports nearly quadrupled after the military improved reporting channels — suggesting the true rate was always far higher than reported.
        The 2014 spike followed Senator Gillibrand&apos;s reform push. Sources: DOD SAPRO Annual Reports.
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={mstData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v.toLocaleString(), 'Reports']}
          />
          <Bar dataKey="reports" fill="#991b1b" name="Sexual Assault Reports" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function MSTPrevalenceChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        MST Prevalence Rate by Gender (%)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        1 in 4 women and 1 in 100 men report military sexual trauma to the VA. Due to the military&apos;s gender ratio, there are actually more male MST survivors by total count. Sources: VA MST screening data.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={mstData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tickFormatter={(v) => `${v}%`} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`${v}%`, '']}
          />
          <Legend />
          <Line type="monotone" dataKey="prevalenceWomen" stroke="#ef4444" name="Women %" strokeWidth={2} />
          <Line type="monotone" dataKey="prevalenceMen" stroke="#60a5fa" name="Men %" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function WomenInMilitaryChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Women in the US Military (1973–2025)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Women went from 2.5% of the force to 18.1% — but still face systemic barriers, assault, and exclusion. Combat roles only opened in 2015. Sources: DOD Demographics Reports.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={womenInMilitary}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tickFormatter={(v) => `${v}%`} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`${v}%`, 'Women %']}
          />
          <Area type="monotone" dataKey="percent" stroke="#b91c1c" fill="#b91c1c" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function ConflictSexualViolenceTable() {
  return (
    <div className="my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
        Sexual Violence as a Weapon of War
      </h3>
      <p className="text-stone-600 mb-4">
        Conservative estimates of wartime sexual violence victims. Actual numbers are believed to be far higher.
        Sources: UN Women, ICTY, ICTR, Physicians for Human Rights.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
          <thead className="bg-stone-900 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Conflict</th>
              <th className="px-4 py-3 text-right">Estimated Victims</th>
              <th className="px-4 py-3 text-left">Perpetrators</th>
              <th className="px-4 py-3 text-left">Accountability</th>
            </tr>
          </thead>
          <tbody>
            {sexualViolenceConflict.map((row) => (
              <tr key={row.conflict} className="border-t border-stone-200 even:bg-stone-50">
                <td className="px-4 py-3 font-medium">{row.conflict}</td>
                <td className="px-4 py-3 text-right font-bold text-red-800">{row.estimatedVictims.toLocaleString()}+</td>
                <td className="px-4 py-3">{row.perpetrators}</td>
                <td className="px-4 py-3">{row.recognized}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
