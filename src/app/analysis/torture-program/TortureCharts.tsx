// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, PieChart, Pie, Cell,
} from 'recharts'

const detaineeNumbers = [
  { site: 'Guantánamo Bay', detainees: 780 },
  { site: 'Abu Ghraib', detainees: 7000 },
  { site: 'Bagram', detainees: 3000 },
  { site: 'CIA Black Sites', detainees: 119 },
  { site: 'Secret Prisons (est.)', detainees: 14000 },
]

const tortureTimeline = [
  { year: '2001', events: 1, label: 'CIA program authorized' },
  { year: '2002', events: 4, label: 'Yoo/Bybee memos, waterboarding begins' },
  { year: '2003', events: 6, label: 'Abu Ghraib abuse at peak' },
  { year: '2004', events: 3, label: 'Abu Ghraib photos leak' },
  { year: '2005', events: 2, label: 'Detainee Treatment Act' },
  { year: '2006', events: 2, label: 'Military Commissions Act' },
  { year: '2007', events: 1, label: 'CIA destroys interrogation tapes' },
  { year: '2008', events: 1, label: 'Bush vetoes waterboarding ban' },
  { year: '2009', events: 2, label: 'Obama EO banning torture' },
  { year: '2012', events: 1, label: 'Senate investigation completes' },
  { year: '2014', events: 1, label: 'Senate Torture Report released' },
]

const techniqueData = [
  { technique: 'Waterboarding', instances: 266, detainees: 3 },
  { technique: 'Sleep Deprivation', instances: 1000, detainees: 50 },
  { technique: 'Stress Positions', instances: 2000, detainees: 100 },
  { technique: 'Wall Slamming', instances: 500, detainees: 30 },
  { technique: 'Rectal Feeding', instances: 5, detainees: 5 },
  { technique: 'Mock Burial', instances: 12, detainees: 4 },
  { technique: 'Ice Water Bath', instances: 50, detainees: 15 },
]

const accountabilityData = [
  { name: 'Prosecuted', value: 0 },
  { name: 'Fired', value: 0 },
  { name: 'Promoted/No Action', value: 100 },
]

const COLORS = ['#ef4444', '#f59e0b', '#6b7280']

const blackSites = [
  { country: 'Thailand', codename: 'Cat\'s Eye', years: '2002-2003', detainees: 2 },
  { country: 'Poland', codename: 'Quartz', years: '2002-2003', detainees: 8 },
  { country: 'Romania', codename: 'Bright Light', years: '2003-2005', detainees: 20 },
  { country: 'Lithuania', codename: 'Violet', years: '2005-2006', detainees: 7 },
  { country: 'Afghanistan', codename: 'Salt Pit/Cobalt', years: '2002-2004', detainees: 40 },
  { country: 'Diego Garcia', codename: 'Unknown', years: '2002-2003', detainees: 2 },
  { country: 'Morocco', codename: 'Unknown', years: '2002-2004', detainees: 15 },
]

export function DetaineeChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Detainees by Facility
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Estimated number of detainees held at major US detention facilities in the War on Terror.
        The true number remains classified. Sources: ACLU, Senate Intelligence Committee.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={detaineeNumbers} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="site" stroke="#a8a29e" tick={{ fontSize: 11 }} width={140} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v.toLocaleString(), 'Detainees']}
          />
          <Bar dataKey="detainees" fill="#991b1b" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function TortureTimelineChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Timeline of the Torture Program (2001–2014)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Key events from authorization to the Senate Torture Report. Thirteen years from first waterboarding 
        to partial accountability. Zero prosecutions.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={tortureTimeline}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v, 'Major events']}
            labelFormatter={(l) => `Year: ${l}`}
          />
          <Bar dataKey="events" fill="#b91c1c" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function TechniqueChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        &ldquo;Enhanced Interrogation&rdquo; Techniques: Documented Instances
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Khalid Sheikh Mohammed was waterboarded 183 times. Abu Zubaydah 83 times. The CIA called this 
        &ldquo;enhanced interrogation.&rdquo; The rest of the world calls it torture.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={techniqueData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="technique" stroke="#a8a29e" tick={{ fontSize: 11 }} width={130} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v.toLocaleString(), '']}
          />
          <Legend />
          <Bar dataKey="instances" fill="#ef4444" name="Documented Instances" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function AccountabilityChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Accountability for Torture: Senior Officials
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Zero senior officials prosecuted. Zero fired. Many promoted. Gina Haspel ran a black site 
        and became CIA Director. This is what accountability looks like in America.
      </p>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={accountabilityData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {accountabilityData.map((entry, i) => (
              <Cell key={entry.name} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`${v}%`, '']}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export function BlackSitesTable() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8 overflow-x-auto">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">
        Known CIA Black Sites
      </h3>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-stone-700 text-stone-400">
            <th className="py-2 pr-4">Country</th>
            <th className="py-2 pr-4">Codename</th>
            <th className="py-2 pr-4">Years Active</th>
            <th className="py-2">Est. Detainees</th>
          </tr>
        </thead>
        <tbody>
          {blackSites.map((site) => (
            <tr key={site.country} className="border-b border-stone-700/50 text-stone-300">
              <td className="py-2 pr-4 font-medium text-white">{site.country}</td>
              <td className="py-2 pr-4">{site.codename}</td>
              <td className="py-2 pr-4">{site.years}</td>
              <td className="py-2">{site.detainees}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-stone-500 text-xs mt-3">
        Sources: Senate Intelligence Committee Torture Report, Open Society Justice Initiative (2013), 
        ECHR rulings against Poland, Romania, and Lithuania.
      </p>
    </div>
  )
}
