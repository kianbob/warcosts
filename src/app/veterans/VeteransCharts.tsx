// @ts-nocheck
'use client'

import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'

export function VASpendingChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white rounded-xl border p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">VA Budget Over Time (Billions)</h3>
      <p className="text-stone-500 text-sm mb-4">From $47B in 2000 to $400B+ in 2025 — an 8.5x increase in 25 years.</p>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(v: number) => `$${v}B`} />
          <Tooltip formatter={(v: number) => [`$${v}B`, '']} />
          <Legend />
          <Area type="monotone" dataKey="mandatoryBillions" name="Mandatory (Benefits)" stackId="1" fill="#dc2626" stroke="#dc2626" fillOpacity={0.6} />
          <Area type="monotone" dataKey="discretionaryBillions" name="Discretionary (Healthcare)" stackId="1" fill="#991b1b" stroke="#991b1b" fillOpacity={0.6} />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-xs mt-2">Source: VA Budget in Brief, USASpending.gov</p>
    </div>
  )
}

export function SuicideTrendChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white rounded-xl border p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Veteran Suicides Per Day (2001–2023)</h3>
      <p className="text-stone-500 text-sm mb-4">Despite billions spent on prevention, the daily rate has remained stubbornly high.</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis domain={[13, 19]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="perDay" name="Suicides per day" stroke="#dc2626" strokeWidth={3} dot={{ fill: '#dc2626', r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-xs mt-2">Source: VA National Veteran Suicide Prevention Annual Report (2024)</p>
    </div>
  )
}

export function ClaimsBacklogChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white rounded-xl border p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">VA Disability Claims: Pending vs Backlogged</h3>
      <p className="text-stone-500 text-sm mb-4">The PACT Act surge in 2022-2023 overwhelmed the system before recent progress.</p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K`} />
          <Tooltip formatter={(v: number) => [v.toLocaleString(), '']} />
          <Legend />
          <Bar dataKey="pending" name="Total Pending" fill="#78716c" />
          <Bar dataKey="backlogged" name="Backlogged (125+ days)" fill="#dc2626" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-xs mt-2">Source: VA Benefits Administration Weekly Reports</p>
    </div>
  )
}

export function HomelessnessChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white rounded-xl border p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Veteran Homelessness (Point-in-Time Count)</h3>
      <p className="text-stone-500 text-sm mb-4">Down 55%+ since 2009 — one of the few success stories in veteran care.</p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K`} />
          <Tooltip formatter={(v: number) => [v.toLocaleString(), '']} />
          <Legend />
          <Area type="monotone" dataKey="sheltered" name="Sheltered" stackId="1" fill="#78716c" stroke="#78716c" fillOpacity={0.5} />
          <Area type="monotone" dataKey="unsheltered" name="Unsheltered" stackId="1" fill="#dc2626" stroke="#dc2626" fillOpacity={0.5} />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-xs mt-2">Source: HUD Point-in-Time Count (2009–2024)</p>
    </div>
  )
}

export function UnemploymentChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white rounded-xl border p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Veteran vs Civilian Unemployment Rate</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(v: number) => `${v}%`} />
          <Tooltip formatter={(v: number) => [`${v}%`, '']} />
          <Legend />
          <Line type="monotone" dataKey="veteranRate" name="Veterans" stroke="#dc2626" strokeWidth={2} />
          <Line type="monotone" dataKey="civilianRate" name="Civilians" stroke="#78716c" strokeWidth={2} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-xs mt-2">Source: Bureau of Labor Statistics, Employment Situation of Veterans</p>
    </div>
  )
}
