// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, AreaChart, Area, ComposedChart,
} from 'recharts'

const oilPricesDuringWars = [
  { year: '1973', price: 11.65, event: 'Arab Oil Embargo' },
  { year: '1979', price: 31.61, event: 'Iranian Revolution' },
  { year: '1980', price: 36.83, event: 'Iran-Iraq War' },
  { year: '1990', price: 23.73, event: 'Gulf War begins' },
  { year: '1991', price: 20.00, event: 'Gulf War ends' },
  { year: '1998', price: 11.91, event: 'Pre-Iraq War low' },
  { year: '2003', price: 28.83, event: 'Iraq invasion' },
  { year: '2005', price: 54.52, event: 'Iraq insurgency' },
  { year: '2007', price: 72.34, event: 'Iraq surge' },
  { year: '2008', price: 147.00, event: 'Peak oil price (July)' },
  { year: '2011', price: 111.26, event: 'Libya intervention' },
  { year: '2014', price: 93.17, event: 'ISIS oil fields' },
  { year: '2020', price: 39.68, event: 'COVID crash' },
  { year: '2022', price: 100.28, event: 'Ukraine war' },
  { year: '2025', price: 78.00, event: 'Iran tensions' },
]

const halliburtonContracts = [
  { year: '2003', amount: 4.3 },
  { year: '2004', amount: 7.2 },
  { year: '2005', amount: 10.8 },
  { year: '2006', amount: 13.5 },
  { year: '2007', amount: 16.1 },
  { year: '2008', amount: 19.3 },
  { year: '2009', amount: 22.5 },
  { year: '2010', amount: 25.7 },
  { year: '2013', amount: 31.4 },
  { year: '2016', amount: 36.0 },
  { year: '2020', amount: 39.5 },
]

const usOilProduction = [
  { year: '1970', production: 9.6, imports: 3.4 },
  { year: '1975', production: 8.4, imports: 6.1 },
  { year: '1980', production: 8.6, imports: 6.9 },
  { year: '1985', production: 8.9, imports: 5.1 },
  { year: '1990', production: 7.4, imports: 8.0 },
  { year: '1995', production: 6.6, imports: 8.8 },
  { year: '2000', production: 5.8, imports: 11.5 },
  { year: '2005', production: 5.2, imports: 13.7 },
  { year: '2010', production: 5.5, imports: 11.8 },
  { year: '2015', production: 9.4, imports: 9.4 },
  { year: '2020', production: 11.3, imports: 7.9 },
  { year: '2024', production: 13.2, imports: 6.5 },
]

const militarySpendingVsOil = [
  { region: 'Middle East deployments', spending: 350 },
  { region: 'Fifth Fleet (Bahrain)', spending: 8 },
  { region: 'CENTCOM operations', spending: 75 },
  { region: 'Iraq War (annual avg)', spending: 140 },
  { region: 'Strait of Hormuz patrols', spending: 12 },
  { region: 'Saudi arms deals support', spending: 5 },
]

export function OilPriceChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Oil Prices During Major US Military Actions (1973–2025)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Every major US military action in the Middle East corresponds with oil price volatility. 
        Prices in USD per barrel (inflation-adjusted to 2024 dollars where applicable). Sources: EIA, World Bank.
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart data={oilPricesDuringWars}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 11 }} angle={-45} textAnchor="end" height={60} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} label={{ value: '$/barrel', angle: -90, position: 'insideLeft', fill: '#a8a29e' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`$${v}/barrel`, 'Oil Price']}
            labelFormatter={(l) => {
              const item = oilPricesDuringWars.find(d => d.year === l)
              return item ? `${l}: ${item.event}` : l
            }}
          />
          <Bar dataKey="price" fill="#991b1b" radius={[4, 4, 0, 0]} />
          <Line type="monotone" dataKey="price" stroke="#ef4444" strokeWidth={2} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export function HalliburtonChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Halliburton/KBR Cumulative Iraq Contracts ($B)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Halliburton (via subsidiary KBR) received the first no-bid contract for Iraq reconstruction. 
        Dick Cheney was Halliburton&apos;s CEO from 1995–2000. He received $34M in deferred compensation 
        while Vice President. Sources: SIGIR, DoD contract data.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={halliburtonContracts}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`$${v}B`, 'Cumulative Contracts']}
          />
          <Area type="monotone" dataKey="amount" stroke="#b91c1c" fill="#991b1b" fillOpacity={0.6} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function USProductionChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        US Oil Production vs. Imports (Million Barrels/Day)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        The US became the world&apos;s largest oil producer in 2018 thanks to fracking. It is now 
        effectively energy independent — yet still fights wars to protect oil infrastructure it 
        no longer needs. Sources: EIA.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={usOilProduction}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`${v}M bbl/day`, '']}
          />
          <Legend />
          <Line type="monotone" dataKey="production" stroke="#22c55e" name="US Production" strokeWidth={2} />
          <Line type="monotone" dataKey="imports" stroke="#ef4444" name="US Imports" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function MilitaryOilSpendingChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Annual US Military Spending to Protect Oil ($B)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Estimated annual cost of US military operations related to oil security in the Middle East. 
        This doesn&apos;t include the Iraq War&apos;s full cost ($3T+) or opportunity costs. Sources: RAND, CRS.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={militarySpendingVsOil} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="region" stroke="#a8a29e" tick={{ fontSize: 11 }} width={180} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`$${v}B/year`, '']}
          />
          <Bar dataKey="spending" fill="#b91c1c" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
