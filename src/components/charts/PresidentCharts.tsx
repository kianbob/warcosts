// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function PresidentCostChart() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/data/presidents.json')
      .then(r => r.json())
      .then(d => setData(d.map((p: any) => ({
        name: p.name,
        cost: p.totalCost,
        deaths: p.totalUSDeaths,
        conflicts: p.conflicts.join(', '),
      })).sort((a: any, b: any) => b.cost - a.cost)))
  }, [])

  if (!data.length) return null

  const fmtCost = (v: number) => {
    if (v >= 1e12) return `$${(v / 1e12).toFixed(1)}T`
    if (v >= 1e9) return `$${(v / 1e9).toFixed(0)}B`
    return `$${(v / 1e6).toFixed(0)}M`
  }

  return (
    <div>
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Total War Cost by President</h3>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data} layout="vertical" margin={{ left: 100 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickFormatter={fmtCost} />
          <YAxis type="category" dataKey="name" width={90} tick={{ fontSize: 12 }} />
          <Tooltip formatter={(v: number) => [fmtCost(v), 'Cost']} />
          <Bar dataKey="cost" fill="#991b1b" />
        </BarChart>
      </ResponsiveContainer>

      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mt-8 mb-4">Presidents, Wars, Cost & Deaths</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-stone-300">
              <th className="text-left py-2 pr-4">President</th>
              <th className="text-left py-2 pr-4">Conflicts</th>
              <th className="text-right py-2 pr-4">Cost</th>
              <th className="text-right py-2">US Deaths</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p: any) => (
              <tr key={p.name} className="border-b border-stone-200">
                <td className="py-2 pr-4 font-semibold">{p.name}</td>
                <td className="py-2 pr-4 text-stone-500 text-xs">{p.conflicts}</td>
                <td className="py-2 pr-4 text-right text-red-800 font-bold">{fmtCost(p.cost)}</td>
                <td className="py-2 text-right">{p.deaths.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
