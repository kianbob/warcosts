// @ts-nocheck
'use client'
import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const SECTORS = [
  { sector: 'Education', jobs: 13, color: '#22c55e' },
  { sector: 'Healthcare', jobs: 9, color: '#3b82f6' },
  { sector: 'Clean Energy', jobs: 8, color: '#eab308' },
  { sector: 'Infrastructure', jobs: 7, color: '#f97316' },
  { sector: 'Military', jobs: 5, color: '#991b1b' },
]

export default function JobsCalcClient() {
  const [shift, setShift] = useState(100)

  const milJobs = shift * 1000 * 5
  const eduJobs = shift * 1000 * 13
  const healthJobs = shift * 1000 * 9
  const cleanJobs = shift * 1000 * 8
  const netGain = eduJobs - milJobs

  return (
    <div className="space-y-8">
      <div className="bg-stone-100 rounded-xl p-6 border">
        <label className="block text-sm font-medium text-stone-600 mb-2">
          Shift from Military to Other Sectors
        </label>
        <input
          type="range" min={10} max={400} step={10} value={shift}
          onChange={e => setShift(Number(e.target.value))}
          className="w-full accent-red-800"
        />
        <p className="text-2xl font-bold font-[family-name:var(--font-heading)] mt-2">
          ${shift}B
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-red-950 text-white rounded-xl p-5 text-center border border-red-900">
          <p className="text-3xl font-bold font-[family-name:var(--font-heading)] text-red-400">
            -{milJobs.toLocaleString()}
          </p>
          <p className="text-stone-400 text-sm">Military Jobs Lost</p>
        </div>
        <div className="bg-green-950 text-white rounded-xl p-5 text-center border border-green-900">
          <p className="text-3xl font-bold font-[family-name:var(--font-heading)] text-green-400">
            +{eduJobs.toLocaleString()}
          </p>
          <p className="text-stone-400 text-sm">Education Jobs Gained</p>
        </div>
        <div className="bg-stone-900 text-white rounded-xl p-5 text-center border border-stone-700">
          <p className="text-3xl font-bold font-[family-name:var(--font-heading)] text-white">
            +{netGain.toLocaleString()}
          </p>
          <p className="text-stone-400 text-sm">Net Jobs Gained</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border p-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Jobs Created Per $1 Million by Sector</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={SECTORS} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="sector" type="category" width={100} />
            <Tooltip />
            <Bar dataKey="jobs" name="Jobs per $1M">
              {SECTORS.map((s, i) => (
                <rect key={i} fill={s.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-stone-50 rounded-xl border p-6 space-y-4">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">If We Moved ${shift}B to Each Sector</h2>
        {[
          { label: 'Education', jobs: eduJobs, color: 'text-green-600' },
          { label: 'Healthcare', jobs: healthJobs, color: 'text-blue-600' },
          { label: 'Clean Energy', jobs: cleanJobs, color: 'text-yellow-600' },
        ].map(s => (
          <div key={s.label} className="flex justify-between items-center">
            <span>{s.label}</span>
            <span className={`font-bold ${s.color}`}>+{s.jobs.toLocaleString()} jobs</span>
          </div>
        ))}
        <div className="flex justify-between items-center border-t pt-3">
          <span>Military (lost)</span>
          <span className="font-bold text-red-600">-{milJobs.toLocaleString()} jobs</span>
        </div>
      </div>
    </div>
  )
}
