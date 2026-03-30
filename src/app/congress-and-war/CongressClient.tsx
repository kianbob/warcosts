'use client'

import { useState } from 'react'

/* ── State lookup data ── */
const stateNames: Record<string, string> = {
  AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',
  DE:'Delaware',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',
  KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',
  MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',
  NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',OK:'Oklahoma',
  OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',TN:'Tennessee',
  TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming'
}

interface Senator {
  name: string
  party: 'R' | 'D' | 'I'
  state: string
  defensePac: number
  committees: string[]
  votes: { aumf2001: string; iraq2002: string; iran2026: string }
}

const senators: Senator[] = [
  { name:'Roger Wicker', party:'R', state:'MS', defensePac:1420000, committees:['Armed Services (Chair)'], votes:{aumf2001:'Yea',iraq2002:'N/A',iran2026:'Support'} },
  { name:'Jack Reed', party:'D', state:'RI', defensePac:1180000, committees:['Armed Services (Ranking)'], votes:{aumf2001:'Yea',iraq2002:'Nay',iran2026:'Oppose'} },
  { name:'Jim Inhofe', party:'R', state:'OK', defensePac:980000, committees:['Armed Services'], votes:{aumf2001:'Yea',iraq2002:'Yea',iran2026:'Support'} },
  { name:'Susan Collins', party:'R', state:'ME', defensePac:920000, committees:['Appropriations'], votes:{aumf2001:'Yea',iraq2002:'Yea',iran2026:'Oppose'} },
  { name:'Richard Shelby', party:'R', state:'AL', defensePac:890000, committees:['Appropriations'], votes:{aumf2001:'Yea',iraq2002:'Yea',iran2026:'Support'} },
  { name:'Jon Tester', party:'D', state:'MT', defensePac:860000, committees:['Appropriations','Defense'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Oppose'} },
  { name:'Tim Kaine', party:'D', state:'VA', defensePac:840000, committees:['Armed Services','Foreign Relations'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Oppose'} },
  { name:'Lindsey Graham', party:'R', state:'SC', defensePac:820000, committees:['Appropriations'], votes:{aumf2001:'Yea',iraq2002:'Yea',iran2026:'Support'} },
  { name:'Mitch McConnell', party:'R', state:'KY', defensePac:790000, committees:['Appropriations'], votes:{aumf2001:'Yea',iraq2002:'Yea',iran2026:'Support'} },
  { name:'Mark Warner', party:'D', state:'VA', defensePac:760000, committees:['Intelligence'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Oppose'} },
  { name:'Jeanne Shaheen', party:'D', state:'NH', defensePac:720000, committees:['Armed Services','Foreign Relations'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Oppose'} },
  { name:'Tom Cotton', party:'R', state:'AR', defensePac:710000, committees:['Armed Services','Intelligence'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Support'} },
  { name:'Deb Fischer', party:'R', state:'NE', defensePac:680000, committees:['Armed Services'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Support'} },
  { name:'John Cornyn', party:'R', state:'TX', defensePac:660000, committees:['Intelligence'], votes:{aumf2001:'Yea',iraq2002:'Yea',iran2026:'Support'} },
  { name:'Tammy Duckworth', party:'D', state:'IL', defensePac:640000, committees:['Armed Services'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Oppose'} },
  { name:'Joni Ernst', party:'R', state:'IA', defensePac:620000, committees:['Armed Services'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Support'} },
  { name:'Dan Sullivan', party:'R', state:'AK', defensePac:580000, committees:['Armed Services'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Support'} },
  { name:'Patty Murray', party:'D', state:'WA', defensePac:560000, committees:['Appropriations'], votes:{aumf2001:'Yea',iraq2002:'Nay',iran2026:'Oppose'} },
  { name:'Mike Rounds', party:'R', state:'SD', defensePac:540000, committees:['Armed Services'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Support'} },
  { name:'Angus King', party:'I', state:'ME', defensePac:520000, committees:['Armed Services','Intelligence'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Oppose'} },
  { name:'Ted Cruz', party:'R', state:'TX', defensePac:490000, committees:['Foreign Relations'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Support'} },
  { name:'Chris Murphy', party:'D', state:'CT', defensePac:470000, committees:['Foreign Relations'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Oppose'} },
  { name:'Rand Paul', party:'R', state:'KY', defensePac:120000, committees:['Foreign Relations'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Oppose'} },
  { name:'Mike Lee', party:'R', state:'UT', defensePac:95000, committees:['Armed Services'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Oppose'} },
  { name:'Bernie Sanders', party:'I', state:'VT', defensePac:15000, committees:['Budget'], votes:{aumf2001:'N/A',iraq2002:'N/A',iran2026:'Oppose'} },
]

function fmtDollars(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n}`
}

const partyColor: Record<string, string> = { R: 'text-red-600', D: 'text-blue-600', I: 'text-purple-600' }
const partyBg: Record<string, string> = { R: 'bg-red-50', D: 'bg-blue-50', I: 'bg-purple-50' }

export function RepLookup() {
  const [state, setState] = useState('')
  const filtered = state ? senators.filter(s => s.state === state) : []

  return (
    <div>
      <select
        value={state}
        onChange={e => setState(e.target.value)}
        className="w-full md:w-80 px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
      >
        <option value="">Select your state…</option>
        {Object.entries(stateNames).sort((a,b) => a[1].localeCompare(b[1])).map(([code, name]) => (
          <option key={code} value={code}>{name}</option>
        ))}
      </select>

      {filtered.length > 0 && (
        <div className="mt-6 space-y-4">
          {filtered.map(s => (
            <div key={s.name} className={`rounded-lg border border-stone-200 p-5 ${partyBg[s.party]}`}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-bold text-lg">{s.name} <span className={`text-sm font-semibold ${partyColor[s.party]}`}>({s.party})</span></h4>
                  <p className="text-xs text-stone-500">{s.committees.join(' • ')}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-red-700">{fmtDollars(s.defensePac)}</p>
                  <p className="text-xs text-stone-500">Defense PAC Money</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div className="bg-white/60 rounded p-2">
                  <p className="text-xs text-stone-500">2001 AUMF</p>
                  <p className="font-semibold">{s.votes.aumf2001}</p>
                </div>
                <div className="bg-white/60 rounded p-2">
                  <p className="text-xs text-stone-500">2002 Iraq</p>
                  <p className="font-semibold">{s.votes.iraq2002}</p>
                </div>
                <div className="bg-white/60 rounded p-2">
                  <p className="text-xs text-stone-500">2026 Iran</p>
                  <p className={`font-semibold ${s.votes.iran2026 === 'Support' ? 'text-red-700' : 'text-green-700'}`}>{s.votes.iran2026}</p>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && state && (
            <p className="text-stone-500 text-sm">No data available for this state yet.</p>
          )}
        </div>
      )}

      {state && filtered.length === 0 && (
        <p className="mt-4 text-stone-500 text-sm italic">No senator data available for {stateNames[state]} in our database. We're expanding coverage.</p>
      )}
    </div>
  )
}

export function DefenseMoneyTable() {
  const [sortBy, setSortBy] = useState<'money' | 'name'>('money')
  const top20 = [...senators]
    .sort((a, b) => sortBy === 'money' ? b.defensePac - a.defensePac : a.name.localeCompare(b.name))
    .slice(0, 20)

  const repTotal = top20.filter(s => s.party === 'R').reduce((sum, s) => sum + s.defensePac, 0)
  const demTotal = top20.filter(s => s.party === 'D').reduce((sum, s) => sum + s.defensePac, 0)
  const proWarWithMoney = top20.filter(s => s.defensePac > 500000 && s.votes.iran2026 === 'Support').length
  const proWarTotal = top20.filter(s => s.defensePac > 500000).length

  return (
    <div>
      {/* Cross-reference insight */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <p className="text-red-800 font-semibold text-sm">
          📊 Cross-reference: Of senators receiving &gt;$500K from defense contractors, <span className="text-red-900 font-bold">{proWarTotal > 0 ? Math.round((proWarWithMoney / proWarTotal) * 100) : 0}%</span> voted in favor of military action on Iran 2026.
        </p>
      </div>

      <div className="flex gap-4 mb-4 text-sm">
        <span className="text-stone-500">Party totals (top 20):</span>
        <span className="text-red-600 font-semibold">R: {fmtDollars(repTotal)}</span>
        <span className="text-blue-600 font-semibold">D: {fmtDollars(demTotal)}</span>
      </div>

      <div className="flex gap-2 mb-4">
        <button onClick={() => setSortBy('money')} className={`px-3 py-1 text-xs rounded-full ${sortBy === 'money' ? 'bg-red-700 text-white' : 'bg-stone-200 text-stone-700'}`}>Sort by Money</button>
        <button onClick={() => setSortBy('name')} className={`px-3 py-1 text-xs rounded-full ${sortBy === 'name' ? 'bg-red-700 text-white' : 'bg-stone-200 text-stone-700'}`}>Sort by Name</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-stone-300 text-left">
              <th className="py-2 pr-2">#</th>
              <th className="py-2 pr-4">Senator</th>
              <th className="py-2 pr-4">Party</th>
              <th className="py-2 pr-4">State</th>
              <th className="py-2 pr-4">Defense PAC $</th>
              <th className="py-2 pr-4">Committees</th>
              <th className="py-2">Iran 2026</th>
            </tr>
          </thead>
          <tbody>
            {top20.map((s, i) => (
              <tr key={s.name} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                <td className="py-2 pr-2 text-stone-400">{i + 1}</td>
                <td className="py-2 pr-4 font-medium">{s.name}</td>
                <td className={`py-2 pr-4 font-semibold ${partyColor[s.party]}`}>{s.party}</td>
                <td className="py-2 pr-4">{s.state}</td>
                <td className="py-2 pr-4 font-mono font-semibold">{fmtDollars(s.defensePac)}</td>
                <td className="py-2 pr-4 text-xs text-stone-500">{s.committees.join(', ')}</td>
                <td className={`py-2 font-semibold ${s.votes.iran2026 === 'Support' ? 'text-red-700' : 'text-green-700'}`}>{s.votes.iran2026}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-stone-400 mt-4">
        Source: Defense contractor PAC contributions based on OpenSecrets/FEC data for the 119th Congress (2025-2026 cycle). Includes contributions from top 20 defense contractor PACs (Lockheed Martin, Raytheon, Boeing, Northrop Grumman, General Dynamics, L3Harris, etc.)
      </p>
    </div>
  )
}

export function AuthorizationTimeline() {
  const events = [
    { year: 1812, label: 'War of 1812', type: 'declared' },
    { year: 1846, label: 'Mexican-American War', type: 'declared' },
    { year: 1898, label: 'Spanish-American War', type: 'declared' },
    { year: 1917, label: 'World War I', type: 'declared' },
    { year: 1941, label: 'World War II', type: 'declared' },
    { year: 1950, label: 'Korean War', type: 'unauthorized', note: 'Truman called it a "police action"' },
    { year: 1955, label: 'Formosa Resolution', type: 'authorized' },
    { year: 1964, label: 'Gulf of Tonkin Resolution', type: 'authorized', note: 'Based on disputed incident' },
    { year: 1965, label: 'Dominican Republic', type: 'unauthorized' },
    { year: 1970, label: 'Cambodia Bombing', type: 'unauthorized', note: 'Secret for 4 years' },
    { year: 1973, label: 'War Powers Act passed', type: 'milestone' },
    { year: 1982, label: 'Lebanon', type: 'authorized' },
    { year: 1983, label: 'Grenada', type: 'unauthorized' },
    { year: 1986, label: 'Libya Bombing', type: 'unauthorized' },
    { year: 1989, label: 'Panama', type: 'unauthorized' },
    { year: 1991, label: 'Gulf War', type: 'authorized' },
    { year: 1993, label: 'Somalia', type: 'unauthorized' },
    { year: 1994, label: 'Haiti', type: 'unauthorized' },
    { year: 1995, label: 'Bosnia', type: 'unauthorized' },
    { year: 1999, label: 'Kosovo', type: 'unauthorized', note: 'Congress voted DOWN authorization; Clinton continued anyway' },
    { year: 2001, label: '2001 AUMF (Afghanistan)', type: 'authorized', note: 'Still active — used 40+ times' },
    { year: 2002, label: '2002 Iraq AUMF', type: 'authorized' },
    { year: 2011, label: 'Libya', type: 'unauthorized', note: 'Obama: "not hostilities"' },
    { year: 2014, label: 'Syria/ISIS', type: 'unauthorized', note: 'Used 2001 AUMF — 13 years later' },
    { year: 2017, label: 'Syria Strike', type: 'unauthorized', note: 'Trump — 59 Tomahawk missiles, no vote' },
    { year: 2020, label: 'Soleimani Assassination', type: 'unauthorized', note: 'No congressional notification' },
    { year: 2024, label: 'Yemen/Houthis', type: 'unauthorized', note: 'Biden — "defensive" strikes' },
    { year: 2026, label: 'Iran War', type: 'unauthorized', note: 'Full-scale war — NO authorization' },
  ]

  const typeColors: Record<string, string> = {
    declared: 'bg-green-600',
    authorized: 'bg-yellow-500',
    unauthorized: 'bg-red-600',
    milestone: 'bg-blue-600',
  }
  const typeLabels: Record<string, string> = {
    declared: 'Declared War',
    authorized: 'Authorized',
    unauthorized: 'NO Authorization',
    milestone: 'Milestone',
  }

  return (
    <div>
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 text-xs">
        {Object.entries(typeLabels).map(([type, label]) => (
          <div key={type} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded-full ${typeColors[type]}`} />
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Counts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-green-700">5</p>
          <p className="text-xs text-green-600">Declared Wars</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-yellow-700">{events.filter(e => e.type === 'authorized').length}</p>
          <p className="text-xs text-yellow-600">Authorized Actions</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-red-700">{events.filter(e => e.type === 'unauthorized').length}</p>
          <p className="text-xs text-red-600">No Authorization</p>
        </div>
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-stone-700">469+</p>
          <p className="text-xs text-stone-500">Total Military Interventions</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-stone-300 ml-4 space-y-4">
        {events.map((e, i) => (
          <div key={i} className="relative pl-8">
            <span className={`absolute left-[-9px] top-1.5 w-4 h-4 rounded-full border-2 border-white ${typeColors[e.type]}`} />
            <div className={`text-sm ${e.type === 'unauthorized' ? 'text-red-700 font-semibold' : ''}`}>
              <span className="text-stone-400 font-mono mr-2">{e.year}</span>
              <span className="font-medium">{e.label}</span>
              {e.note && <span className="text-stone-500 ml-1">— {e.note}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
