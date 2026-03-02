// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts'

const auditData = [
  { year: 'FY2018', passed: 7, failed: 20 },
  { year: 'FY2019', passed: 7, failed: 20 },
  { year: 'FY2020', passed: 7, failed: 20 },
  { year: 'FY2021', passed: 7, failed: 20 },
  { year: 'FY2022', passed: 7, failed: 20 },
  { year: 'FY2023', passed: 7, failed: 21 },
]

const blackBudgetPie = [
  { name: 'CIA', value: 15.3 },
  { name: 'NSA', value: 11.5 },
  { name: 'NRO', value: 17.4 },
  { name: 'DIA', value: 3.7 },
  { name: 'NGA', value: 3.2 },
  { name: 'Other/SAPs', value: 40 },
]

const COLORS = ['#991b1b', '#b91c1c', '#dc2626', '#ef4444', '#f87171', '#525252']

export function SecrecyCharts() {
  return (
    <div className="space-y-8 my-8">
      <div className="bg-stone-800 rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
          Pentagon Audit Results: Entities Passed vs. Failed
        </h3>
        <p className="text-stone-400 text-sm mb-4">
          Six consecutive years of failure. Only 7 of ~27 entities pass each year.
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={auditData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
            <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
            <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            />
            <Legend />
            <Bar dataKey="passed" name="Passed" fill="#166534" />
            <Bar dataKey="failed" name="Failed" fill="#991b1b" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-stone-800 rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
          Intelligence Black Budget Breakdown ($B, estimated)
        </h3>
        <p className="text-stone-400 text-sm mb-4">
          Total: $90+ billion/year. Much of it classified even from Congress.
        </p>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={blackBudgetPie}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
              label={({ name, value }: { name: string; value: number }) => `${name}: $${value}B`}
              labelLine
            >
              {blackBudgetPie.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
              formatter={(v: number) => [`$${v}B`]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
