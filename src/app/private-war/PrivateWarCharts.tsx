'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area,
} from 'recharts'

const ratioData = [
  { year: '2001', troops: 5200, contractors: 3000 },
  { year: '2003', troops: 150000, contractors: 50000 },
  { year: '2005', troops: 160000, contractors: 100000 },
  { year: '2007', troops: 170000, contractors: 160000 },
  { year: '2009', troops: 130000, contractors: 155000 },
  { year: '2010', troops: 100000, contractors: 175000 },
  { year: '2011', troops: 95000, contractors: 190000 },
  { year: '2013', troops: 60000, contractors: 110000 },
  { year: '2015', troops: 10000, contractors: 40000 },
  { year: '2017', troops: 15000, contractors: 50000 },
  { year: '2019', troops: 14000, contractors: 53000 },
  { year: '2021', troops: 2500, contractors: 18000 },
  { year: '2024', troops: 35000, contractors: 45000 },
  { year: '2026', troops: 80000, contractors: 95000 },
]

const spendingData = [
  { year: '2002', spending: 10 },
  { year: '2004', spending: 25 },
  { year: '2006', spending: 40 },
  { year: '2008', spending: 55 },
  { year: '2010', spending: 50 },
  { year: '2012', spending: 42 },
  { year: '2014', spending: 30 },
  { year: '2016', spending: 25 },
  { year: '2018', spending: 28 },
  { year: '2020', spending: 32 },
  { year: '2022', spending: 35 },
  { year: '2024', spending: 38 },
  { year: '2026', spending: 45 },
]

const incidentData = [
  { year: '2003', incidents: 2 },
  { year: '2004', incidents: 8 },
  { year: '2005', incidents: 12 },
  { year: '2006', incidents: 15 },
  { year: '2007', incidents: 22 },
  { year: '2008', incidents: 18 },
  { year: '2009', incidents: 14 },
  { year: '2010', incidents: 10 },
  { year: '2011', incidents: 8 },
  { year: '2012', incidents: 5 },
  { year: '2013', incidents: 4 },
  { year: '2014', incidents: 6 },
  { year: '2015', incidents: 3 },
]

export function ContractorTroopRatioChart() {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-stone-200">
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-stone-900 mb-2">
        Contractors vs. Troops in Conflict Zones
      </h3>
      <p className="text-sm text-stone-500 mb-4">Total personnel in Iraq, Afghanistan, and Gulf region combined</p>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={ratioData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d6d3d1" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
          <Tooltip
            formatter={(value: number, name: string) => [value.toLocaleString(), name === 'troops' ? 'Military Troops' : 'Private Contractors']}
            contentStyle={{ borderRadius: '8px', border: '1px solid #d6d3d1' }}
          />
          <Legend />
          <Area type="monotone" dataKey="troops" stackId="1" fill="#1e3a5f" stroke="#1e3a5f" name="Military Troops" />
          <Area type="monotone" dataKey="contractors" stackId="1" fill="#dc2626" stroke="#dc2626" name="Private Contractors" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function ContractorSpendingChart() {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-stone-200">
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-stone-900 mb-2">
        Annual Spending on Private Military/Security Contractors
      </h3>
      <p className="text-sm text-stone-500 mb-4">Billions USD per year (estimated)</p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={spendingData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d6d3d1" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} label={{ value: 'Billions $', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }} />
          <Tooltip
            formatter={(value: number) => [`$${value}B`, 'Contractor Spending']}
            contentStyle={{ borderRadius: '8px', border: '1px solid #d6d3d1' }}
          />
          <Bar dataKey="spending" fill="#dc2626" name="Contractor Spending" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function IncidentTimelineChart() {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-stone-200">
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-stone-900 mb-2">
        Documented Contractor Misconduct Incidents
      </h3>
      <p className="text-sm text-stone-500 mb-4">Major reported incidents per year (Iraq & Afghanistan)</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={incidentData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d6d3d1" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #d6d3d1' }} />
          <Line type="monotone" dataKey="incidents" stroke="#dc2626" strokeWidth={2} dot={{ r: 4, fill: '#dc2626' }} name="Incidents" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
