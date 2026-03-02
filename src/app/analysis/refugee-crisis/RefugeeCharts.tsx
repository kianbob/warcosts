// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'

const displacementData = [
  { name: 'Syria', displaced: 13.5, admitted: 0.021 },
  { name: 'Iraq', displaced: 9.2, admitted: 0.145 },
  { name: 'Afghanistan', displaced: 5.9, admitted: 0.089 },
  { name: 'Yemen', displaced: 4.5, admitted: 0.004 },
  { name: 'Pakistan', displaced: 3.7, admitted: 0.022 },
  { name: 'Somalia', displaced: 2.9, admitted: 0.078 },
  { name: 'Libya', displaced: 1.2, admitted: 0.005 },
]

const burdenData = [
  { country: 'Lebanon', pct: 27.3 },
  { country: 'Jordan', pct: 6.8 },
  { country: 'Turkey', pct: 4.2 },
  { country: 'Germany', pct: 2.5 },
  { country: 'Pakistan', pct: 0.7 },
  { country: 'USA', pct: 0.1 },
]

export function RefugeeCharts() {
  return (
    <div className="space-y-8 my-8">
      <div className="bg-stone-800 rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
          Displaced vs. Admitted to US (Millions)
        </h3>
        <p className="text-stone-400 text-sm mb-4">
          The red bars show millions displaced. The thin bars (barely visible) show how many the US admitted. The gap is the hypocrisy.
        </p>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={displacementData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
            <XAxis type="number" stroke="#a8a29e" tickFormatter={(v: number) => `${v}M`} tick={{ fontSize: 12 }} />
            <YAxis dataKey="name" type="category" width={100} stroke="#a8a29e" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
              formatter={(v: number) => [`${v}M`]}
            />
            <Legend />
            <Bar dataKey="displaced" name="Displaced (Millions)" fill="#991b1b" />
            <Bar dataKey="admitted" name="Admitted to US (Millions)" fill="#166534" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-stone-800 rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
          Refugee Burden: % of Population
        </h3>
        <p className="text-stone-400 text-sm mb-4">
          Lebanon hosts refugees equal to 27% of its population. The US: 0.1%. The countries that caused the crises bear the least burden.
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={burdenData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
            <XAxis type="number" stroke="#a8a29e" tickFormatter={(v: number) => `${v}%`} tick={{ fontSize: 12 }} />
            <YAxis dataKey="country" type="category" width={80} stroke="#a8a29e" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
              formatter={(v: number) => [`${v}%`, 'Refugees as % of population']}
            />
            <Bar dataKey="pct" name="Refugees as % of Population" fill="#b91c1c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
