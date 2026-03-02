// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, AreaChart, Area, Cell,
} from 'recharts'

const civilLibertyErosions = [
  { year: '1798', event: 'Alien & Sedition Acts', severity: 6, war: 'Quasi-War with France' },
  { year: '1861', event: 'Habeas corpus suspended', severity: 8, war: 'Civil War' },
  { year: '1917', event: 'Espionage Act', severity: 7, war: 'World War I' },
  { year: '1918', event: 'Sedition Act of 1918', severity: 8, war: 'World War I' },
  { year: '1942', event: 'Japanese internment', severity: 10, war: 'World War II' },
  { year: '1950', event: 'McCarran Internal Security Act', severity: 7, war: 'Cold War' },
  { year: '1956', event: 'COINTELPRO begins', severity: 8, war: 'Cold War' },
  { year: '1971', event: 'War on Drugs begins', severity: 6, war: 'Domestic' },
  { year: '2001', event: 'PATRIOT Act', severity: 9, war: 'War on Terror' },
  { year: '2002', event: 'DHS / TSA created', severity: 7, war: 'War on Terror' },
  { year: '2008', event: 'FISA Amendments Act', severity: 8, war: 'War on Terror' },
  { year: '2011', event: 'NDAA indefinite detention', severity: 9, war: 'War on Terror' },
  { year: '2013', event: 'NSA mass surveillance exposed', severity: 10, war: 'War on Terror' },
]

const surveillanceGrowth = [
  { year: '1975', nsaBudget: 3.0, fbiSurveillance: 0.5, warrants: 500 },
  { year: '1980', nsaBudget: 4.2, fbiSurveillance: 0.7, warrants: 600 },
  { year: '1985', nsaBudget: 5.8, fbiSurveillance: 1.0, warrants: 700 },
  { year: '1990', nsaBudget: 7.1, fbiSurveillance: 1.2, warrants: 850 },
  { year: '1995', nsaBudget: 8.5, fbiSurveillance: 1.5, warrants: 1000 },
  { year: '2000', nsaBudget: 10.2, fbiSurveillance: 2.0, warrants: 1012 },
  { year: '2005', nsaBudget: 22.0, fbiSurveillance: 5.5, warrants: 2072 },
  { year: '2010', nsaBudget: 30.5, fbiSurveillance: 8.2, warrants: 1579 },
  { year: '2015', nsaBudget: 35.0, fbiSurveillance: 9.8, warrants: 1457 },
  { year: '2020', nsaBudget: 38.0, fbiSurveillance: 11.0, warrants: 451 },
  { year: '2024', nsaBudget: 42.0, fbiSurveillance: 12.5, warrants: 523 },
]

const noFlyList = [
  { year: '2001', count: 16 },
  { year: '2003', count: 16000 },
  { year: '2005', count: 44000 },
  { year: '2007', count: 71000 },
  { year: '2009', count: 81000 },
  { year: '2011', count: 21000 },
  { year: '2013', count: 47000 },
  { year: '2015', count: 64000 },
  { year: '2017', count: 81000 },
  { year: '2019', count: 90000 },
  { year: '2024', count: 100000 },
]

const protestCrackdowns = [
  { era: 'WWI\n(1917-18)', arrests: 2000 },
  { era: 'Red Scare\n(1919-20)', arrests: 10000 },
  { era: 'McCarthyism\n(1950s)', arrests: 500 },
  { era: 'Vietnam\n(1965-72)', arrests: 12000 },
  { era: 'Post-9/11\n(2001-05)', arrests: 3500 },
  { era: 'BLM\n(2020)', arrests: 14000 },
  { era: 'Palestine\n(2024)', arrests: 3100 },
]

export function TimelineChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Civil Liberty Erosions by Year (Severity 1-10)</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={civilLibertyErosions}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="year" stroke="#a8a29e" angle={-45} textAnchor="end" height={60} tick={{ fontSize: 11 }} />
          <YAxis stroke="#a8a29e" domain={[0, 10]} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `${v}/10 severity`}
            labelFormatter={(label) => {
              const item = civilLibertyErosions.find(d => d.year === label)
              return item ? `${item.event} (${item.war})` : label
            }}
          />
          <Bar dataKey="severity" name="Severity" fill="#991b1b">
            {civilLibertyErosions.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.severity >= 9 ? '#991b1b' : entry.severity >= 7 ? '#b91c1c' : '#dc2626'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">Every major war produced a major civil liberties crackdown. No exceptions.</p>
    </div>
  )
}

export function SurveillanceChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Intelligence Budget Growth ($B) — Before and After 9/11</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={surveillanceGrowth}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="year" stroke="#a8a29e" />
          <YAxis stroke="#a8a29e" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `$${v}B`}
          />
          <Legend />
          <Area type="monotone" dataKey="nsaBudget" name="NSA/Intel Budget ($B)" fill="#991b1b" stroke="#991b1b" fillOpacity={0.3} />
          <Area type="monotone" dataKey="fbiSurveillance" name="FBI Surveillance ($B)" fill="#b91c1c" stroke="#b91c1c" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        Intelligence spending more than tripled after 9/11. FISA warrants became largely irrelevant after the PATRIOT Act.
      </p>
    </div>
  )
}

export function NoFlyListChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">No-Fly List Growth: 16 Names → 100,000+</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={noFlyList}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="year" stroke="#a8a29e" />
          <YAxis stroke="#a8a29e" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `${v.toLocaleString()} names`}
          />
          <Line type="monotone" dataKey="count" name="Names on No-Fly List" stroke="#991b1b" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        Before 9/11, 16 people were on the no-fly list. No trial, no evidence required. No way to know why you&apos;re on it.
      </p>
    </div>
  )
}

export function ProtestChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Protest-Related Arrests by Era</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={protestCrackdowns}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="era" stroke="#a8a29e" tick={{ fontSize: 10 }} interval={0} />
          <YAxis stroke="#a8a29e" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => `${v.toLocaleString()} arrests`}
          />
          <Bar dataKey="arrests" name="Arrests" fill="#991b1b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
