'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'

const data = [
  { country: 'United Kingdom', afghanistan: 30, iraq: 15, libya: 2 },
  { country: 'Germany', afghanistan: 20, iraq: 0.5, libya: 0.3 },
  { country: 'Canada', afghanistan: 18, iraq: 0, libya: 0.4 },
  { country: 'Australia', afghanistan: 7, iraq: 3.5, libya: 0.2 },
  { country: 'France', afghanistan: 4, iraq: 0, libya: 3.5 },
  { country: 'Italy', afghanistan: 8, iraq: 3, libya: 1.5 },
  { country: 'Poland', afghanistan: 3.5, iraq: 1.5, libya: 0 },
  { country: 'Netherlands', afghanistan: 5, iraq: 1, libya: 0.3 },
]

export function AlliedSpendingChart() {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-stone-200">
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-stone-900 mb-2">
        Allied Military Spending by War (Billions USD)
      </h3>
      <p className="text-sm text-stone-500 mb-4">Estimated total spending by major coalition partners</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d6d3d1" />
          <XAxis dataKey="country" tick={{ fontSize: 12 }} angle={-20} textAnchor="end" height={60} />
          <YAxis tick={{ fontSize: 12 }} label={{ value: 'Billions $', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }} />
          <Tooltip
            formatter={(value: any, name: any) => [`$${value}B`, name.charAt(0).toUpperCase() + name.slice(1)]}
            contentStyle={{ borderRadius: '8px', border: '1px solid #d6d3d1' }}
          />
          <Legend />
          <Bar dataKey="afghanistan" stackId="a" fill="#dc2626" name="Afghanistan" />
          <Bar dataKey="iraq" stackId="a" fill="#991b1b" name="Iraq" />
          <Bar dataKey="libya" stackId="a" fill="#f87171" name="Libya" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
