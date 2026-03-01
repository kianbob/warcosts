// @ts-nocheck
'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts'

const strikeData = [
  { president: 'Bush', strikes: 57 },
  { president: 'Obama', strikes: 563 },
]

export function DroneStrikesChart() {
  return (
    <div>
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Drone Strikes by President</h3>
      <p className="text-stone-500 text-sm mb-4">Obama authorized 10× more strikes than Bush</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={strikeData} margin={{ top: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="president" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="strikes" fill="#991b1b">
            <LabelList dataKey="strikes" position="top" className="font-bold" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-6 bg-red-50 rounded-xl p-5 border border-red-200 text-center">
        <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">~1,700</p>
        <p className="text-stone-600 text-sm">Officially acknowledged civilian deaths</p>
        <p className="text-stone-400 text-xs mt-1">Independent estimates: 10,000–17,000</p>
      </div>
    </div>
  )
}
