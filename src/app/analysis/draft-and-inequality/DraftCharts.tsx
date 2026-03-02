// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line, AreaChart, Area,
} from 'recharts'

const vietnamDraftByClass = [
  { group: 'Poor/Working Class', percent: 80, color: '#991b1b' },
  { group: 'Middle Class', percent: 15, color: '#b91c1c' },
  { group: 'Upper Class', percent: 5, color: '#dc2626' },
]

const vietnamDeferments = [
  { type: 'College deferment', count: 15410000, desc: 'Available to those who could afford college' },
  { type: 'National Guard/Reserves', count: 1040000, desc: 'Connections helped — George W. Bush, Dan Quayle' },
  { type: 'Medical deferment', count: 6420000, desc: 'Private doctors wrote notes for wealthy families' },
  { type: 'Conscientious objector', count: 170000, desc: 'Required resources to navigate legal system' },
  { type: 'Fled to Canada', count: 125000, desc: 'Required means to relocate internationally' },
]

const project100000 = [
  { category: 'KIA rate', project100k: 5.2, regularEnlistee: 2.5 },
  { category: 'WIA rate', project100k: 18.4, regularEnlistee: 10.1 },
  { category: 'Dishonorable discharge %', project100k: 33.0, regularEnlistee: 8.0 },
  { category: 'Post-service unemployment %', project100k: 42.0, regularEnlistee: 18.0 },
]

const modernRecruitment = [
  { source: 'Rural areas (< 25K pop)', recruitRate: 44, populationShare: 15 },
  { source: 'Suburban areas', recruitRate: 35, populationShare: 55 },
  { source: 'Urban centers (>500K)', recruitRate: 21, populationShare: 30 },
]

const incomeRecruitment = [
  { bracket: 'Bottom 20%', enlistmentShare: 25, populationShare: 20 },
  { bracket: 'Lower-middle 20%', enlistmentShare: 29, populationShare: 20 },
  { bracket: 'Middle 20%', enlistmentShare: 22, populationShare: 20 },
  { bracket: 'Upper-middle 20%', enlistmentShare: 16, populationShare: 20 },
  { bracket: 'Top 20%', enlistmentShare: 8, populationShare: 20 },
]

const racialData = [
  { group: 'White', militaryPct: 56, populationPct: 59 },
  { group: 'Black', militaryPct: 17, populationPct: 13 },
  { group: 'Hispanic', militaryPct: 18, populationPct: 19 },
  { group: 'Asian', militaryPct: 4, populationPct: 6 },
  { group: 'Other', militaryPct: 5, populationPct: 3 },
]

const contractorGrowth = [
  { year: '1990', military: 2065000, contractors: 50000 },
  { year: '1995', military: 1518000, contractors: 80000 },
  { year: '2000', military: 1384000, contractors: 120000 },
  { year: '2005', military: 1389000, contractors: 180000 },
  { year: '2008', military: 1401000, contractors: 260000 },
  { year: '2010', military: 1431000, contractors: 207000 },
  { year: '2015', military: 1313000, contractors: 180000 },
  { year: '2020', military: 1346000, contractors: 155000 },
  { year: '2024', military: 1328000, contractors: 140000 },
]

const congressKids = [
  { era: 'WWII', membersWithKidsServing: 823, totalMembers: 531, pct: 88 },
  { era: 'Korea', membersWithKidsServing: 291, totalMembers: 531, pct: 55 },
  { era: 'Vietnam', membersWithKidsServing: 56, totalMembers: 535, pct: 10 },
  { era: 'Gulf War', membersWithKidsServing: 8, totalMembers: 535, pct: 1.5 },
  { era: 'Iraq/Afghanistan', membersWithKidsServing: 5, totalMembers: 535, pct: 1 },
]

const COLORS = ['#991b1b', '#b91c1c', '#dc2626', '#ef4444', '#f87171']

export function VietnamDraftChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Vietnam War Combatants by Economic Class</h3>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={vietnamDraftByClass} dataKey="percent" nameKey="group" cx="50%" cy="50%" outerRadius={100} label={({ group, percent }) => `${group}: ${percent}%`}>
              {vietnamDraftByClass.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }} formatter={(v) => `${v}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-stone-400 text-sm mt-3">80% of those who served in Vietnam came from poor or working-class families.</p>
    </div>
  )
}

export function Project100kChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">McNamara&apos;s Project 100,000: Outcomes vs. Regular Enlistees (%)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={project100000}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="category" stroke="#a8a29e" tick={{ fontSize: 11 }} />
          <YAxis stroke="#a8a29e" />
          <Tooltip contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }} formatter={(v) => `${v}%`} />
          <Legend />
          <Bar dataKey="project100k" name="Project 100,000" fill="#991b1b" />
          <Bar dataKey="regularEnlistee" name="Regular Enlistees" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        354,000 men with low test scores were drafted under Project 100,000. They died at twice the rate of regular enlistees.
      </p>
    </div>
  )
}

export function GeographicChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Military Recruitment: Geography vs. Population</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={modernRecruitment}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="source" stroke="#a8a29e" tick={{ fontSize: 11 }} />
          <YAxis stroke="#a8a29e" />
          <Tooltip contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }} formatter={(v) => `${v}%`} />
          <Legend />
          <Bar dataKey="recruitRate" name="% of Recruits" fill="#991b1b" />
          <Bar dataKey="populationShare" name="% of Population" fill="#a8a29e" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        Rural areas produce 44% of military recruits despite being just 15% of the population.
      </p>
    </div>
  )
}

export function IncomeChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Enlistment by Household Income Quintile</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={incomeRecruitment}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="bracket" stroke="#a8a29e" tick={{ fontSize: 11 }} />
          <YAxis stroke="#a8a29e" />
          <Tooltip contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }} formatter={(v) => `${v}%`} />
          <Legend />
          <Bar dataKey="enlistmentShare" name="% of Enlistees" fill="#991b1b" />
          <Bar dataKey="populationShare" name="% of Population" fill="#a8a29e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function CongressKidsChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">% of Congress Members with Children in the Military</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={congressKids}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="era" stroke="#a8a29e" />
          <YAxis stroke="#a8a29e" />
          <Tooltip contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }} formatter={(v) => `${v}%`} />
          <Bar dataKey="pct" name="% with Kids Serving" fill="#991b1b">
            {congressKids.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.pct < 10 ? '#991b1b' : '#22c55e'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        In WWII, 88% of Congress had children serving. During Iraq/Afghanistan: less than 1%. Those who vote for war don&apos;t fight it.
      </p>
    </div>
  )
}

export function ContractorChart() {
  return (
    <div className="bg-stone-900 rounded-lg p-6 my-8">
      <h3 className="text-white font-bold text-lg mb-4">Military Personnel vs. Private Contractors</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={contractorGrowth}>
          <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
          <XAxis dataKey="year" stroke="#a8a29e" />
          <YAxis stroke="#a8a29e" />
          <Tooltip contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }} formatter={(v) => Number(v).toLocaleString()} />
          <Legend />
          <Line type="monotone" dataKey="military" name="Active Duty Military" stroke="#22c55e" strokeWidth={2} />
          <Line type="monotone" dataKey="contractors" name="Private Contractors" stroke="#991b1b" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-stone-400 text-sm mt-3">
        At the peak of the Iraq War, contractors outnumbered troops. They aren&apos;t counted in casualty figures.
      </p>
    </div>
  )
}
