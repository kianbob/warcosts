'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface Weapon {
  name: string
  costOverrun: number
  unitCost: number
  totalCost: number
  originalEstimate?: number
  status: string
  contractor: string
  service: string
}

interface CostOverrunsChartProps {
  weapons: Weapon[]
}

export default function CostOverrunsChart({ weapons }: CostOverrunsChartProps) {
  const [sortBy, setSortBy] = useState<'overrun' | 'total' | 'waste'>('overrun')
  const [showCount, setShowCount] = useState(20)

  const processedWeapons = weapons
    .filter(w => w.costOverrun > 0)
    .map(weapon => {
      const originalEstimate = weapon.originalEstimate || (weapon.totalCost / (1 + weapon.costOverrun / 100))
      const wasteAmount = weapon.totalCost - originalEstimate
      
      return {
        ...weapon,
        originalEstimate,
        wasteAmount,
        displayName: weapon.name.length > 25 ? weapon.name.substring(0, 25) + '...' : weapon.name
      }
    })
    .sort((a, b) => {
      if (sortBy === 'overrun') return b.costOverrun - a.costOverrun
      if (sortBy === 'total') return b.totalCost - a.totalCost
      return b.wasteAmount - a.wasteAmount
    })
    .slice(0, showCount)

  const chartData = processedWeapons.map(weapon => ({
    name: weapon.displayName,
    original: weapon.originalEstimate / 1000, // Convert to billions
    actual: weapon.totalCost / 1000,
    overrun: weapon.costOverrun,
    waste: weapon.wasteAmount / 1000,
    contractor: weapon.contractor
  }))

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-slate-800 border border-stone-600 rounded-lg p-4 shadow-lg">
          <h3 className="font-bold text-stone-200 mb-2">{label}</h3>
          <p className="text-stone-300 text-sm mb-1">Contractor: {data.contractor}</p>
          <p className="text-green-400 text-sm">Original: ${data.original.toFixed(1)}B</p>
          <p className="text-red-400 text-sm">Actual: ${data.actual.toFixed(1)}B</p>
          <p className="text-orange-400 text-sm">Overrun: {data.overrun}%</p>
          <p className="text-red-300 text-sm font-bold">Waste: ${data.waste.toFixed(1)}B</p>
        </div>
      )
    }
    return null
  }

  const totalWaste = processedWeapons.reduce((sum, weapon) => sum + weapon.wasteAmount, 0)

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSortBy('overrun')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sortBy === 'overrun' 
                ? 'bg-red-600 text-white' 
                : 'bg-slate-700 text-stone-300 hover:bg-slate-600'
            }`}
          >
            Sort by % Overrun
          </button>
          <button
            onClick={() => setSortBy('total')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sortBy === 'total' 
                ? 'bg-red-600 text-white' 
                : 'bg-slate-700 text-stone-300 hover:bg-slate-600'
            }`}
          >
            Sort by Total Cost
          </button>
          <button
            onClick={() => setSortBy('waste')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sortBy === 'waste' 
                ? 'bg-red-600 text-white' 
                : 'bg-slate-700 text-stone-300 hover:bg-slate-600'
            }`}
          >
            Sort by $ Wasted
          </button>
        </div>

        <select
          value={showCount}
          onChange={(e) => setShowCount(Number(e.target.value))}
          className="px-3 py-2 bg-slate-700 border border-stone-600 rounded-lg text-stone-300"
        >
          <option value={10}>Top 10</option>
          <option value={20}>Top 20</option>
          <option value={30}>Top 30</option>
          <option value={48}>All Weapons</option>
        </select>
      </div>

      {/* Total Waste Stat */}
      <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-red-400 mb-2">
            ${(totalWaste / 1000).toFixed(0)}B
          </div>
          <div className="text-stone-300">Total Taxpayer Waste (Top {showCount} weapons)</div>
          <div className="text-stone-500 text-sm mt-2">
            Money lost to cost overruns that could have funded schools, infrastructure, or been returned to taxpayers
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
        <h3 className="font-bold text-stone-200 mb-4">Original Estimate vs Actual Cost</h3>
        <div style={{ width: '100%', height: 600 }}>
          <ResponsiveContainer>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="name" 
                angle={-45}
                textAnchor="end"
                height={100}
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                label={{ value: 'Cost (Billions $)', angle: -90, position: 'insideLeft', style: { fill: '#9CA3AF' } }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="original" fill="#22C55E" name="Original Estimate" />
              <Bar dataKey="actual" fill="#DC2626" name="Actual Cost" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-stone-300">Original Estimate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-600 rounded"></div>
            <span className="text-stone-300">Actual Cost</span>
          </div>
        </div>
      </div>
    </div>
  )
}