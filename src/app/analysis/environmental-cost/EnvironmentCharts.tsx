// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell, AreaChart, Area, Legend, PieChart, Pie,
} from 'recharts'

const toxicSites = [
  { type: 'Burn pit locations', count: 230, fill: '#991b1b' },
  { type: 'Depleted uranium sites', count: 42, fill: '#b91c1c' },
  { type: 'Agent Orange storage', count: 32, fill: '#dc2626' },
  { type: 'Nuclear test sites', count: 67, fill: '#ef4444' },
  { type: 'PFAS contaminated bases', count: 385, fill: '#f87171' },
  { type: 'Superfund (military)', count: 141, fill: '#fca5a5' },
]

const burnPitTimeline = [
  { year: '2001', veterans: 0, bases: 2 },
  { year: '2003', veterans: 180000, bases: 18 },
  { year: '2005', veterans: 520000, bases: 42 },
  { year: '2007', veterans: 980000, bases: 68 },
  { year: '2009', veterans: 1400000, bases: 86 },
  { year: '2011', veterans: 2100000, bases: 120 },
  { year: '2013', veterans: 2700000, bases: 156 },
  { year: '2015', veterans: 3100000, bases: 182 },
  { year: '2017', veterans: 3300000, bases: 210 },
  { year: '2019', veterans: 3500000, bases: 230 },
]

const militaryEmissions = [
  { source: 'Vehicles & aircraft', co2Mt: 56, fill: '#991b1b' },
  { source: 'Installations & bases', co2Mt: 28, fill: '#b91c1c' },
  { source: 'Supply chain', co2Mt: 205, fill: '#dc2626' },
  { source: 'Weapons manufacturing', co2Mt: 42, fill: '#ef4444' },
  { source: 'Construction & maintenance', co2Mt: 18, fill: '#f87171' },
]

const agentOrangeTimeline = [
  { year: '1962', gallons: 500000, event: 'Operation Ranch Hand begins' },
  { year: '1964', gallons: 2400000, event: 'Escalation' },
  { year: '1966', gallons: 4200000, event: 'Peak spraying' },
  { year: '1968', gallons: 3800000, event: 'Continued heavy use' },
  { year: '1970', gallons: 1200000, event: 'Reduction begins' },
  { year: '1971', gallons: 0, event: 'Program ended' },
]

export function ToxicSitesChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Military Toxic Contamination Sites
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        The US military has contaminated sites across the US and the world. 385 US military bases have PFAS
        (&ldquo;forever chemical&rdquo;) contamination. 141 are on the EPA Superfund list. Sources: DOD, EPA, GAO.
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={toxicSites} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="type" stroke="#a8a29e" tick={{ fontSize: 11 }} width={160} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v.toLocaleString() + ' sites', '']}
          />
          <Bar dataKey="count" name="Sites">
            {toxicSites.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function BurnPitChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Burn Pit Exposure: Cumulative Veterans Exposed
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        3.5 million veterans were exposed to toxic burn pits at 230+ locations across Iraq and Afghanistan.
        The DOD burned everything: medical waste, batteries, tires, plastics, human waste, and unexploded ordnance.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={burnPitTimeline}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v.toLocaleString(), 'Veterans Exposed']}
          />
          <Area type="monotone" dataKey="veterans" stroke="#991b1b" fill="#991b1b" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function MilitaryEmissionsChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        US Military CO₂ Emissions by Source (Million Tonnes/Year)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        The US military&apos;s total carbon footprint — including supply chain — is approximately 350 million
        tonnes of CO₂ per year. If it were a country, it would be the 55th largest emitter on Earth.
        Sources: Brown University, DOD Sustainability Reports.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={militaryEmissions}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="source" stroke="#a8a29e" tick={{ fontSize: 11 }} />
          <YAxis stroke="#a8a29e" tickFormatter={(v) => `${v}Mt`} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [`${v} Mt CO₂`, '']}
          />
          <Bar dataKey="co2Mt" name="CO₂ (Mt)">
            {militaryEmissions.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function AgentOrangeChart() {
  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Agent Orange Sprayed in Vietnam (Gallons/Year)
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        20 million gallons of Agent Orange sprayed over 4.5 million acres of Vietnamese forest and farmland.
        The dioxin contaminant persists in soil and water for decades. Sources: VA, Operation Ranch Hand records.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={agentOrangeTimeline}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a8a29e" tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v) => [v.toLocaleString() + ' gallons', '']}
          />
          <Area type="monotone" dataKey="gallons" stroke="#15803d" fill="#15803d" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
