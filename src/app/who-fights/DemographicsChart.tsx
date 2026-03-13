'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'

interface StateData {
  state: string
  code: string
  total: number
  population?: number
  medianIncome?: number
  ruralPercentage?: number
  recruitmentRate?: number
}

interface DemographicsChartProps {
  stateData?: StateData[]
}

export default function DemographicsChart({ stateData = [] }: DemographicsChartProps) {
  const [view, setView] = useState<'income' | 'rural' | 'bases' | 'recruitment'>('income')

  // Mock data for demonstration since we don't have all the demographic data
  const mockStateData = [
    { state: 'Mississippi', code: 'MS', bases: 4, medianIncome: 45792, ruralPercentage: 51.0, recruitmentRate: 0.8 },
    { state: 'Alabama', code: 'AL', bases: 8, medianIncome: 51734, ruralPercentage: 41.0, recruitmentRate: 0.7 },
    { state: 'South Carolina', code: 'SC', bases: 9, medianIncome: 56227, ruralPercentage: 33.7, recruitmentRate: 0.6 },
    { state: 'West Virginia', code: 'WV', bases: 2, medianIncome: 48850, ruralPercentage: 51.3, recruitmentRate: 0.5 },
    { state: 'Arkansas', code: 'AR', bases: 3, medianIncome: 48952, ruralPercentage: 43.8, recruitmentRate: 0.5 },
    { state: 'Tennessee', code: 'TN', bases: 3, medianIncome: 56071, ruralPercentage: 33.6, recruitmentRate: 0.4 },
    { state: 'Oklahoma', code: 'OK', bases: 6, medianIncome: 54449, ruralPercentage: 33.8, recruitmentRate: 0.4 },
    { state: 'Kentucky', code: 'KY', bases: 4, medianIncome: 52295, ruralPercentage: 41.6, recruitmentRate: 0.4 },
    { state: 'Georgia', code: 'GA', bases: 11, medianIncome: 61980, ruralPercentage: 24.9, recruitmentRate: 0.4 },
    { state: 'North Carolina', code: 'NC', bases: 10, medianIncome: 57341, ruralPercentage: 33.9, recruitmentRate: 0.4 },
    { state: 'Texas', code: 'TX', bases: 15, medianIncome: 64034, ruralPercentage: 15.3, recruitmentRate: 0.3 },
    { state: 'Florida', code: 'FL', bases: 21, medianIncome: 59227, ruralPercentage: 8.8, recruitmentRate: 0.3 },
    { state: 'Virginia', code: 'VA', bases: 27, medianIncome: 76398, ruralPercentage: 25.4, recruitmentRate: 0.3 },
    { state: 'California', code: 'CA', bases: 79, medianIncome: 84097, ruralPercentage: 5.0, recruitmentRate: 0.2 },
    { state: 'New York', code: 'NY', bases: 6, medianIncome: 70249, ruralPercentage: 12.0, recruitmentRate: 0.1 },
    { state: 'Massachusetts', code: 'MA', bases: 2, medianIncome: 85843, ruralPercentage: 8.0, recruitmentRate: 0.1 },
    { state: 'Connecticut', code: 'CT', bases: 1, medianIncome: 78833, ruralPercentage: 12.0, recruitmentRate: 0.1 }
  ]

  const educationData = [
    { level: 'No High School', percentage: 18, militaryRate: 1.2 },
    { level: 'High School Only', percentage: 35, militaryRate: 0.8 },
    { level: 'Some College', percentage: 28, militaryRate: 0.4 },
    { level: 'College Degree', percentage: 19, militaryRate: 0.2 }
  ]

  const raceData = [
    { race: 'White', percentage: 69.4, militaryPercentage: 70.8 },
    { race: 'Black', percentage: 12.4, militaryPercentage: 16.8 },
    { race: 'Hispanic', percentage: 16.3, militaryPercentage: 12.4 },
    { race: 'Asian', percentage: 5.9, militaryPercentage: 2.2 },
    { race: 'Other', percentage: 6.0, militaryPercentage: 7.8 }
  ]

  const incomeData = [
    { bracket: 'Under $25k', percentage: 23.2, militaryRate: 0.9 },
    { bracket: '$25k-$50k', percentage: 24.1, militaryRate: 0.7 },
    { bracket: '$50k-$75k', percentage: 16.5, militaryRate: 0.5 },
    { bracket: '$75k-$100k', percentage: 12.3, militaryRate: 0.3 },
    { bracket: 'Over $100k', percentage: 23.9, militaryRate: 0.2 }
  ]

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-slate-800 border border-stone-600 rounded-lg p-4 shadow-lg">
          <h3 className="font-bold text-stone-200 mb-2">{label}</h3>
          {data.medianIncome && <p className="text-stone-600 text-sm">Median Income: ${data.medianIncome.toLocaleString()}</p>}
          {data.ruralPercentage && <p className="text-stone-600 text-sm">Rural: {data.ruralPercentage}%</p>}
          {data.recruitmentRate && <p className="text-stone-600 text-sm">Military Rate: {data.recruitmentRate}%</p>}
          {data.bases && <p className="text-stone-600 text-sm">Military Bases: {data.bases}</p>}
        </div>
      )
    }
    return null
  }

  const chartData = mockStateData.map(state => ({
    name: state.state,
    income: state.medianIncome,
    rural: state.ruralPercentage,
    recruitment: state.recruitmentRate * 100,
    bases: state.bases
  }))

  const getDataKey = () => {
    switch (view) {
      case 'income': return 'income'
      case 'rural': return 'rural'
      case 'bases': return 'bases'
      case 'recruitment': return 'recruitment'
      default: return 'income'
    }
  }

  const getYAxisLabel = () => {
    switch (view) {
      case 'income': return 'Median Household Income ($)'
      case 'rural': return 'Rural Population (%)'
      case 'bases': return 'Number of Military Bases'
      case 'recruitment': return 'Military Recruitment Rate (%)'
      default: return 'Median Household Income ($)'
    }
  }

  const COLORS = ['#DC2626', '#F97316', '#EAB308', '#22C55E', '#3B82F6']

  return (
    <div className="space-y-8">
      {/* Military Service by Income */}
      <div className="bg-slate-800/50 border border-stone-200 rounded-lg p-6">
        <h3 className="font-bold text-stone-200 text-xl mb-4">Military Service by Income Level</h3>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart data={incomeData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="bracket" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Bar dataKey="militaryRate" fill="#DC2626" name="Military Service Rate (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-stone-400 text-sm mt-4">
          Lower-income Americans are significantly more likely to serve in the military. 
          Military service rate is inversely correlated with household income.
        </p>
      </div>

      {/* Military Service by Education */}
      <div className="bg-slate-800/50 border border-stone-200 rounded-lg p-6">
        <h3 className="font-bold text-stone-200 text-xl mb-4">Military Service by Education Level</h3>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart data={educationData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="level" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Bar dataKey="militaryRate" fill="#DC2626" name="Military Service Rate (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-stone-400 text-sm mt-4">
          Americans without college degrees are much more likely to serve in the military. 
          The military serves as a path to economic opportunity for those with fewer alternatives.
        </p>
      </div>

      {/* State Demographics Chart */}
      <div className="bg-slate-800/50 border border-stone-200 rounded-lg p-6">
        <h3 className="font-bold text-stone-200 text-xl mb-4">State-Level Military Demographics</h3>
        
        {/* Controls */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { key: 'income', label: 'Median Income' },
            { key: 'rural', label: 'Rural %' },
            { key: 'recruitment', label: 'Military Rate' },
            { key: 'bases', label: 'Military Bases' }
          ].map((option) => (
            <button
              key={option.key}
              onClick={() => setView(option.key as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === option.key 
                  ? 'bg-red-600 text-stone-900' 
                  : 'bg-slate-700 text-stone-600 hover:bg-slate-600'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div style={{ width: '100%', height: 500 }}>
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
                height={80}
                stroke="#9CA3AF"
                fontSize={10}
              />
              <YAxis 
                stroke="#9CA3AF"
                label={{ value: getYAxisLabel(), angle: -90, position: 'insideLeft', style: { fill: '#9CA3AF' } }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey={getDataKey()} fill="#DC2626" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <p className="text-stone-400 text-sm mt-4">
          Southern and rural states with lower median incomes have higher military recruitment rates. 
          Notice the inverse relationship between income and military service.
        </p>
      </div>

      {/* Racial Demographics Pie Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 border border-stone-200 rounded-lg p-6">
          <h3 className="font-bold text-stone-200 text-xl mb-4">US Population by Race</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={raceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                  label={({ name, value }: any) => `${name}: ${value}%`}
                >
                  {raceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-stone-200 rounded-lg p-6">
          <h3 className="font-bold text-stone-200 text-xl mb-4">Military by Race</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={raceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="militaryPercentage"
                  label={({ name, value }: any) => `${name}: ${value}%`}
                >
                  {raceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}