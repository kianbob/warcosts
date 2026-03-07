'use client'

import { useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts'

interface War {
  id: string
  name: string
  shortName: string
  era: string
  startYear: number
  endYear: number
  costInflationAdjusted: number
  usCasualties: {
    deaths: number
  }
  objectivesMet: boolean
  outcome: string
  computed: {
    durationYears: number
  }
  roiScore: number
  objectivesMetPercentage: number
}

interface WarROIChartProps {
  wars: War[]
}

export default function WarROIChart({ wars }: WarROIChartProps) {
  const [view, setView] = useState<'roi' | 'cost' | 'deaths' | 'duration'>('roi')
  const [sortBy, setSortBy] = useState<'roi' | 'cost' | 'casualties' | 'duration'>('roi')

  const sortedWars = [...wars].sort((a, b) => {
    switch (sortBy) {
      case 'roi':
        return b.roiScore - a.roiScore
      case 'cost':
        return b.costInflationAdjusted - a.costInflationAdjusted
      case 'casualties':
        return b.usCasualties.deaths - a.usCasualties.deaths
      case 'duration':
        return b.computed.durationYears - a.computed.durationYears
      default:
        return b.roiScore - a.roiScore
    }
  })

  const chartData = sortedWars.map(war => ({
    name: war.shortName.length > 20 ? war.shortName.substring(0, 20) + '...' : war.shortName,
    fullName: war.name,
    roi: war.roiScore,
    cost: war.costInflationAdjusted / 1000000000, // Convert to billions
    deaths: war.usCasualties.deaths,
    duration: war.computed.durationYears,
    objectivesMet: war.objectivesMet ? 'Yes' : 'No',
    outcome: war.outcome,
    era: war.era,
    years: `${war.startYear}–${war.endYear}`
  }))

  const getBarColor = (roi: number) => {
    if (roi >= 70) return '#22C55E' // Green for good ROI
    if (roi >= 40) return '#EAB308' // Yellow for mediocre ROI
    if (roi >= 20) return '#F97316' // Orange for poor ROI
    return '#DC2626' // Red for terrible ROI
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-slate-800 border border-stone-600 rounded-lg p-4 shadow-lg max-w-xs">
          <h3 className="font-bold text-stone-200 mb-2">{data.fullName}</h3>
          <p className="text-stone-300 text-sm mb-1">{data.years} ({data.duration} years)</p>
          <p className="text-stone-300 text-sm mb-1">Era: {data.era}</p>
          <p className="text-stone-300 text-sm mb-1">Cost: ${data.cost.toFixed(1)}B (2024$)</p>
          <p className="text-stone-300 text-sm mb-1">US Deaths: {data.deaths.toLocaleString()}</p>
          <p className="text-stone-300 text-sm mb-1">Objectives Met: {data.objectivesMet}</p>
          <p className="text-stone-300 text-sm mb-1">Outcome: {data.outcome}</p>
          <p className={`text-sm font-bold ${
            data.roi >= 70 ? 'text-green-400' :
            data.roi >= 40 ? 'text-yellow-400' :
            data.roi >= 20 ? 'text-orange-400' :
            'text-red-400'
          }`}>
            ROI Score: {data.roi}/100
          </p>
        </div>
      )
    }
    return null
  }

  const getDataKey = () => {
    switch (view) {
      case 'roi': return 'roi'
      case 'cost': return 'cost'
      case 'deaths': return 'deaths'
      case 'duration': return 'duration'
      default: return 'roi'
    }
  }

  const getYAxisLabel = () => {
    switch (view) {
      case 'roi': return 'ROI Score (0-100)'
      case 'cost': return 'Cost (Billions 2024$)'
      case 'deaths': return 'US Military Deaths'
      case 'duration': return 'Duration (Years)'
      default: return 'ROI Score (0-100)'
    }
  }

  const averageROI = wars.reduce((sum, war) => sum + war.roiScore, 0) / wars.length
  const successfulWars = wars.filter(war => war.objectivesMet).length
  const totalCost = wars.reduce((sum, war) => sum + war.costInflationAdjusted, 0)
  const totalDeaths = wars.reduce((sum, war) => sum + war.usCasualties.deaths, 0)

  return (
    <div className="space-y-6">
      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{averageROI.toFixed(0)}</div>
          <div className="text-sm text-stone-300">Average ROI Score</div>
        </div>
        <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{successfulWars}/{wars.length}</div>
          <div className="text-sm text-stone-300">Wars Met Objectives</div>
        </div>
        <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-400">${(totalCost / 1000000000000).toFixed(1)}T</div>
          <div className="text-sm text-stone-300">Total Cost</div>
        </div>
        <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{totalDeaths.toLocaleString()}</div>
          <div className="text-sm text-stone-300">Total US Deaths</div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h3 className="font-semibold text-stone-200 mb-2">View Data:</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'roi', label: 'ROI Score' },
              { key: 'cost', label: 'Cost' },
              { key: 'deaths', label: 'Deaths' },
              { key: 'duration', label: 'Duration' }
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setView(option.key as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  view === option.key 
                    ? 'bg-red-600 text-white' 
                    : 'bg-slate-700 text-stone-300 hover:bg-slate-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-stone-200 mb-2">Sort By:</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 bg-slate-700 border border-stone-600 rounded-lg text-stone-300"
          >
            <option value="roi">ROI Score</option>
            <option value="cost">Total Cost</option>
            <option value="casualties">US Casualties</option>
            <option value="duration">Duration</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
        <h3 className="font-bold text-stone-200 mb-4">
          War Return on Investment Analysis
          {view === 'roi' && ' (Higher scores = better outcomes relative to costs)'}
        </h3>
        <div style={{ width: '100%', height: 600 }}>
          <ResponsiveContainer>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="name" 
                angle={-45}
                textAnchor="end"
                height={120}
                stroke="#9CA3AF"
                fontSize={11}
              />
              <YAxis 
                stroke="#9CA3AF"
                label={{ value: getYAxisLabel(), angle: -90, position: 'insideLeft', style: { fill: '#9CA3AF' } }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey={getDataKey()}
                fill="#DC2626"
                name={getYAxisLabel()}
              >
                {sortedWars.map((entry: any, idx: number) => (
                  <Cell key={idx} fill={view === 'roi' ? getBarColor(entry.roi) : '#DC2626'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {view === 'roi' && (
          <div className="flex justify-center gap-6 mt-4 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-stone-300">Excellent ROI (70+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-stone-300">Good ROI (40-69)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-stone-300">Poor ROI (20-39)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              <span className="text-stone-300">Terrible ROI (0-19)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}