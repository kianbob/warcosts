// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, AreaChart, Area, ComposedChart, Cell,
} from 'recharts'

const contractorGrowth = [
  { year: '1990', contractors: 9200, soldiers: 500000, ratio: '1:54' },
  { year: '1996', contractors: 15000, soldiers: 20000, ratio: '1:1.3' },
  { year: '2003', contractors: 25000, soldiers: 150000, ratio: '1:6' },
  { year: '2005', contractors: 100000, soldiers: 160000, ratio: '1:1.6' },
  { year: '2007', contractors: 160000, soldiers: 170000, ratio: '1:1.1' },
  { year: '2008', contractors: 190000, soldiers: 157000, ratio: '1.2:1' },
  { year: '2010', contractors: 207000, soldiers: 175000, ratio: '1.2:1' },
  { year: '2012', contractors: 137000, soldiers: 68000, ratio: '2:1' },
  { year: '2016', contractors: 29000, soldiers: 9800, ratio: '3:1' },
  { year: '2020', contractors: 22000, soldiers: 3500, ratio: '6.3:1' },
  { year: '2024', contractors: 8000, soldiers: 2500, ratio: '3.2:1' },
]

const costComparison = [
  { role: 'Army Private (E-1)', annual: 45000, label: 'Base pay + benefits' },
  { role: 'Army Sergeant (E-5)', annual: 68000, label: 'Base pay + benefits' },
  { role: 'Blackwater Operator', annual: 600, label: 'Daily rate: $600-$1,200/day' },
  { role: 'Private Security (avg)', annual: 200000, label: 'Typical contractor salary' },
  { role: 'DynCorp Mechanic', annual: 120000, label: 'In Iraq/Afghanistan' },
  { role: 'KBR Truck Driver', annual: 100000, label: 'In Iraq/Afghanistan' },
]

const contractorDeaths = [
  { year: '2003', deaths: 56 },
  { year: '2004', deaths: 293 },
  { year: '2005', deaths: 428 },
  { year: '2006', deaths: 647 },
  { year: '2007', deaths: 1001 },
  { year: '2008', deaths: 538 },
  { year: '2009', deaths: 410 },
  { year: '2010', deaths: 469 },
  { year: '2011', deaths: 430 },
  { year: '2012', deaths: 310 },
  { year: '2013', deaths: 200 },
  { year: '2014', deaths: 176 },
  { year: '2015', deaths: 141 },
  { year: '2016', deaths: 108 },
  { year: '2017', deaths: 82 },
  { year: '2018', deaths: 67 },
  { year: '2019', deaths: 45 },
  { year: '2020', deaths: 34 },
]

const contractSpending = [
  { year: '2002', amount: 15 },
  { year: '2004', amount: 42 },
  { year: '2006', amount: 85 },
  { year: '2008', amount: 178 },
  { year: '2010', amount: 206 },
  { year: '2012', amount: 160 },
  { year: '2014', amount: 135 },
  { year: '2016', amount: 118 },
  { year: '2018', amount: 125 },
  { year: '2020', amount: 140 },
  { year: '2022', amount: 155 },
  { year: '2024', amount: 170 },
]

const topContractors = [
  { name: 'KBR/Halliburton', value: 39.5 },
  { name: 'DynCorp', value: 7.4 },
  { name: 'Blackwater/Academi', value: 2.4 },
  { name: 'L3 Technologies', value: 5.1 },
  { name: 'CACI International', value: 3.2 },
  { name: 'Titan Corporation', value: 2.1 },
  { name: 'Fluor Corporation', value: 4.8 },
  { name: 'AECOM', value: 3.6 },
]

export function ContractorGrowthChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Contractor vs. Military Personnel in Iraq/Afghanistan
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        By 2008, contractors outnumbered soldiers in Iraq. By 2020, the ratio was 6:1 in Afghanistan. 
        The US privatized war and nobody noticed. Sources: CRS, CENTCOM quarterly reports.
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart data={contractorGrowth}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v.toLocaleString(), '']}
          />
          <Legend />
          <Bar dataKey="contractors" fill="#991b1b" name="Contractors" />
          <Bar dataKey="soldiers" fill="#525252" name="Military Personnel" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export function CostComparisonChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Annual Cost: Soldier vs. Contractor
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        A Blackwater operator earned $600-$1,200/day — up to 10x what a soldier earned for the same 
        work. Contractors cost more, operate without oversight, and don&apos;t count in casualty figures.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={costComparison} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" stroke="#a8a29e" tick={{ fontSize: 12 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
          <YAxis type="category" dataKey="role" stroke="#a8a29e" tick={{ fontSize: 10 }} width={150} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`$${v.toLocaleString()}`, 'Annual Cost']}
          />
          <Bar dataKey="annual" radius={[0, 4, 4, 0]}>
            {costComparison.map((entry, i) => (
              <Cell key={entry.role} fill={i < 2 ? '#525252' : '#991b1b'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function ContractorDeathsChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Contractor Deaths in Iraq &amp; Afghanistan (2003–2020)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Over 8,000 contractors died in Iraq and Afghanistan — excluded from official US casualty counts.
        Their names don&apos;t appear on memorials. Many were third-country nationals from Uganda, Nepal, 
        and the Philippines. Sources: DoL Defense Base Act data, ProPublica.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={contractorDeaths}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v, 'Deaths']}
          />
          <Area type="monotone" dataKey="deaths" stroke="#ef4444" fill="#991b1b" fillOpacity={0.6} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function ContractSpendingChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        DoD Contractor Spending in War Zones ($B)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Annual Pentagon spending on private military and security contractors in Iraq, Afghanistan, 
        and other CENTCOM areas. Peaked at $206B in 2010. Sources: SIPRI, DoD budget data.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={contractSpending}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`$${v}B`, '']}
          />
          <Bar dataKey="amount" fill="#b91c1c" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function TopContractorsChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Top Private Military Contractors: Iraq/Afghanistan Revenue ($B)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        KBR/Halliburton dwarfs all competitors with $39.5B in Iraq contracts alone. Most were no-bid 
        or limited competition. Sources: SIGIR, SIGAR, DoD contract data.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={topContractors} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="name" stroke="#a8a29e" tick={{ fontSize: 11 }} width={140} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`$${v}B`, 'Revenue']}
          />
          <Bar dataKey="value" fill="#991b1b" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
