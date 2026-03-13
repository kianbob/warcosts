'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

const arsenalOverview = [
  { label: 'Total Warheads', value: '5,500' },
  { label: 'Deployed Strategic', value: '1,744' },
  { label: 'Reserve/Stockpile', value: '1,964' },
  { label: 'Retired (awaiting dismantlement)', value: '1,792' },
  { label: 'Modernization Cost (30yr)', value: '$1.7 Trillion' },
  { label: 'Annual Nuclear Budget', value: '$60.7B' },
  { label: 'Total Tests Conducted', value: '1,054' },
  { label: 'Doomsday Clock (2024)', value: '90 seconds' },
]

const triadData = [
  { name: 'ICBMs (Minuteman III)', warheads: 400, type: 'Land', desc: '400 missiles in silos across MT, WY, ND, NE, CO. Being replaced by Sentinel ($96B+).', cost: 96 },
  { name: 'SLBMs (Trident II)', warheads: 944, type: 'Sea', desc: '14 Ohio-class submarines carrying up to 20 missiles each. Being replaced by Columbia-class ($132B).', cost: 132 },
  { name: 'Bombers (B-2, B-52)', warheads: 400, type: 'Air', desc: '46 B-52s + 20 B-2 Spirits. B-21 Raider ($203B program) replacing B-2. B-52 flying since 1955.', cost: 203 },
]

const triadChartData = triadData.map(t => ({ name: t.name.split(' (')[0], Warheads: t.warheads, 'Cost ($B)': t.cost }))

const stockpileHistory = [
  { year: 1945, us: 6, ussr: 0 },
  { year: 1950, us: 369, ussr: 5 },
  { year: 1955, us: 3057, ussr: 200 },
  { year: 1960, us: 20434, ussr: 1605 },
  { year: 1965, us: 31139, ussr: 6129 },
  { year: 1970, us: 26119, ussr: 11643 },
  { year: 1975, us: 27052, ussr: 19055 },
  { year: 1980, us: 24304, ussr: 30062 },
  { year: 1985, us: 23317, ussr: 39197 },
  { year: 1990, us: 21392, ussr: 37000 },
  { year: 1995, us: 10953, ussr: 18000 },
  { year: 2000, us: 10577, ussr: 12000 },
  { year: 2005, us: 8360, ussr: 8000 },
  { year: 2010, us: 5113, ussr: 6000 },
  { year: 2015, us: 4717, ussr: 4500 },
  { year: 2020, us: 5550, ussr: 6375 },
  { year: 2024, us: 5500, ussr: 6257 },
]

const testTimeline = [
  { year: 1945, tests: 3, event: 'Trinity test + Hiroshima & Nagasaki' },
  { year: 1946, tests: 2, event: 'Operation Crossroads (Bikini Atoll)' },
  { year: 1951, tests: 16, event: 'Nevada Test Site opens' },
  { year: 1952, tests: 10, event: 'First hydrogen bomb (Ivy Mike)' },
  { year: 1954, tests: 6, event: 'Castle Bravo — largest US test (15 MT)' },
  { year: 1958, tests: 77, event: 'Record year before moratorium' },
  { year: 1961, tests: 10, event: 'Testing resumes after Soviet break' },
  { year: 1962, tests: 96, event: 'Peak testing year (Cuban Missile Crisis)' },
  { year: 1963, tests: 47, event: 'Partial Test Ban Treaty signed' },
  { year: 1968, tests: 56, event: 'Underground testing continues' },
  { year: 1970, tests: 39, event: 'NPT enters into force' },
  { year: 1980, tests: 14, event: 'Reagan-era buildup' },
  { year: 1992, tests: 6, event: 'Last US nuclear test (Sept 23)' },
]

const doomsdayClock = [
  { year: 1947, minutes: 7, event: 'Clock created' },
  { year: 1949, minutes: 3, event: 'Soviet atomic bomb' },
  { year: 1953, minutes: 2, event: 'US & USSR test H-bombs' },
  { year: 1960, minutes: 7, event: 'Scientific cooperation' },
  { year: 1963, minutes: 12, event: 'Partial Test Ban Treaty' },
  { year: 1968, minutes: 7, event: 'Vietnam, China bomb' },
  { year: 1972, minutes: 12, event: 'SALT I & ABM Treaty' },
  { year: 1984, minutes: 3, event: 'Arms race escalation' },
  { year: 1991, minutes: 17, event: 'Cold War ends (safest)' },
  { year: 1995, minutes: 14, event: 'Post-Soviet optimism' },
  { year: 2007, minutes: 5, event: 'Nuclear ambitions, climate' },
  { year: 2015, minutes: 3, event: 'Climate + modernization' },
  { year: 2020, minutes: 1.67, event: '100 seconds' },
  { year: 2023, minutes: 1.5, event: '90 seconds — closest ever' },
  { year: 2024, minutes: 1.5, event: '90 seconds maintained' },
]

const testSites = [
  { name: 'Nevada Test Site', location: 'Nye County, NV', tests: 928, years: '1951–1992', note: 'Primary US test site. Downwinders suffered cancer rates 2-10x normal.' },
  { name: 'Marshall Islands', location: 'Pacific Ocean', tests: 67, years: '1946–1958', note: 'Bikini & Enewetak Atolls. Islanders displaced, still can\'t return. Castle Bravo contaminated 7,000 sq mi.' },
  { name: 'Christmas Island', location: 'Pacific Ocean', tests: 24, years: '1962', note: 'Joint US-UK tests during Operation Dominic.' },
  { name: 'Johnston Atoll', location: 'Pacific Ocean', tests: 12, years: '1958–1962', note: 'High-altitude nuclear tests, including Starfish Prime (EMP test).' },
  { name: 'Amchitka Island', location: 'Alaska', tests: 3, years: '1965–1971', note: 'Underground tests. Cannikin (1971) was the largest US underground test at 5 MT.' },
]

const COLORS = ['#991b1b', '#b91c1c', '#dc2626', '#ef4444', '#f87171']

const sections = ['overview', 'triad', 'stockpile', 'tests', 'doomsday', 'modernization'] as const
type Section = typeof sections[number]

export default function NuclearArsenalPage() {
  const [activeSection, setActiveSection] = useState<Section>('overview')

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Nuclear Arsenal' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-2">
        The US Nuclear Arsenal
      </h1>
      <p className="text-stone-500 mb-6 max-w-3xl">
        5,500 warheads. A $1.7 trillion modernization program. The power to end civilization — maintained and upgraded every year, with almost no public debate.
      </p>
      <ShareButtons title="The US nuclear arsenal: 5,500 warheads, $1.7T in modernization, and the Doomsday Clock at 90 seconds. Explore the data:" />

      {/* Nav */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-800 pb-4">
        {[
          { id: 'overview' as Section, label: 'Overview' },
          { id: 'triad' as Section, label: 'Nuclear Triad' },
          { id: 'stockpile' as Section, label: 'Stockpile History' },
          { id: 'tests' as Section, label: 'Nuclear Tests' },
          { id: 'doomsday' as Section, label: 'Doomsday Clock' },
          { id: 'modernization' as Section, label: 'Modernization' },
        ].map(s => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeSection === s.id ? 'bg-red-900 text-white' : 'bg-white border border-stone-200 text-stone-500 hover:text-red-700'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {activeSection === 'overview' && (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {arsenalOverview.map(s => (
              <div key={s.label} className="bg-stone-900 rounded-xl p-4">
                <div className="text-xl font-bold text-red-700">{s.value}</div>
                <div className="text-stone-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-stone-900 rounded-xl p-6 mb-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">What 5,500 Warheads Means</h2>
            <div className="space-y-3 text-stone-600 text-sm">
              <p>• A single modern warhead (W76-2, 100kt) has 6.7x the destructive power of the Hiroshima bomb.</p>
              <p>• The US arsenal could destroy every city on Earth with a population over 100,000 — and still have warheads left over.</p>
              <p>• Nuclear winter from even a &quot;limited&quot; exchange of 100 warheads would cause global famine killing an estimated 2 billion people.</p>
              <p>• The US and Russia together hold 89% of all nuclear weapons on Earth.</p>
              <p>• A president can order a nuclear launch in under 4 minutes. There is no legal requirement for anyone else to approve.</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'triad' && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Nuclear Triad</h2>
          <p className="text-stone-500 text-sm mb-6">
            The US maintains three independent delivery systems — land, sea, and air — ensuring that no first strike could eliminate all retaliatory capability. Each leg is being modernized at enormous cost.
          </p>

          <div className="bg-stone-900 rounded-xl p-4 mb-6">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={triadChartData}>
                <XAxis dataKey="name" tick={{ fill: '#a8a29e', fontSize: 11 }} />
                <YAxis tick={{ fill: '#a8a29e', fontSize: 11 }} />
                <Tooltip contentStyle={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }} />
                <Bar dataKey="Warheads" fill="#991b1b" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Cost ($B)" fill="#b91c1c" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            {triadData.map((t, i) => (
              <div key={i} className="bg-stone-900 rounded-xl p-5 border-l-4" style={{ borderColor: COLORS[i] }}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">{t.name}</h3>
                  <span className="text-red-700 font-mono text-sm">{t.warheads} warheads</span>
                </div>
                <p className="text-stone-500 text-sm">{t.desc}</p>
                <p className="text-stone-500 text-xs mt-2">Replacement program cost: ${t.cost}B+</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'stockpile' && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Stockpile History: US vs Russia</h2>
          <p className="text-stone-500 text-sm mb-6">
            At the peak in 1986, the US and USSR held over 70,000 warheads combined — enough to destroy civilization many times over. Arms control treaties have reduced numbers, but modernization makes each remaining weapon more lethal.
          </p>

          <div className="bg-stone-900 rounded-xl p-4 mb-6">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={stockpileHistory}>
                <XAxis dataKey="year" tick={{ fill: '#a8a29e', fontSize: 11 }} />
                <YAxis tick={{ fill: '#a8a29e', fontSize: 11 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
                <Tooltip contentStyle={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }} formatter={(v) => (v as number).toLocaleString()} />
                <Area type="monotone" dataKey="us" name="United States" fill="#991b1b" fillOpacity={0.3} stroke="#991b1b" />
                <Area type="monotone" dataKey="ussr" name="Russia/USSR" fill="#44403c" fillOpacity={0.3} stroke="#78716c" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-5 text-sm text-stone-600 space-y-2">
            <p>• <strong>1986 Peak:</strong> US held 23,317 and USSR held 45,000 warheads. Combined yield exceeded 1 million Hiroshimas.</p>
            <p>• <strong>Arms Control:</strong> START I (1991), Moscow Treaty (2002), and New START (2010) reduced deployed weapons, but Russia suspended participation in 2023.</p>
            <p>• <strong>Today:</strong> Numbers are lower but weapons are more accurate, stealthier, and harder to intercept. A smaller arsenal is not necessarily a safer world.</p>
          </div>
        </div>
      )}

      {activeSection === 'tests' && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Nuclear Testing: 1,054 Detonations</h2>
          <p className="text-stone-500 text-sm mb-6">
            From 1945 to 1992, the US detonated 1,054 nuclear devices — 216 atmospheric, 838 underground. The human and environmental toll is still being counted.
          </p>

          {/* Timeline */}
          <div className="bg-stone-900 rounded-xl p-4 mb-6">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={testTimeline}>
                <XAxis dataKey="year" tick={{ fill: '#a8a29e', fontSize: 10 }} />
                <YAxis tick={{ fill: '#a8a29e', fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }}
                  formatter={(v) => `${v} tests`}
                  labelFormatter={(l) => `${l}`}
                />
                <Bar dataKey="tests" fill="#991b1b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Key events */}
          <div className="space-y-2 mb-6">
            {testTimeline.map((t, i) => (
              <div key={i} className="flex gap-3 items-start text-sm">
                <span className="font-mono text-stone-500 w-12 shrink-0">{t.year}</span>
                <div className="w-2 h-2 rounded-full bg-red-700 mt-1.5 shrink-0" />
                <div>
                  <span className="text-white font-medium">{t.tests} tests</span>
                  <span className="text-stone-500 ml-2">{t.event}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Test sites */}
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Test Sites</h3>
          <div className="space-y-3">
            {testSites.map((site, i) => (
              <div key={i} className="bg-stone-900 rounded-xl p-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-white text-sm">{site.name}</h4>
                  <span className="text-red-700 text-xs font-mono">{site.tests} tests</span>
                </div>
                <p className="text-stone-500 text-xs">{site.location} • {site.years}</p>
                <p className="text-stone-500 text-xs mt-1">{site.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'doomsday' && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Doomsday Clock</h2>
          <p className="text-stone-500 text-sm mb-6">
            Since 1947, the Bulletin of the Atomic Scientists has maintained the Doomsday Clock as a symbol of existential risk. Midnight represents global catastrophe. We are now closer than ever.
          </p>

          <div className="bg-stone-900 rounded-xl p-4 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={doomsdayClock}>
                <XAxis dataKey="year" tick={{ fill: '#a8a29e', fontSize: 11 }} />
                <YAxis
                  tick={{ fill: '#a8a29e', fontSize: 11 }}
                  reversed
                  domain={[0, 18]}
                  tickFormatter={(v) => `${v}m`}
                  label={{ value: '← Closer to midnight', angle: -90, position: 'insideLeft', style: { fill: '#78716c', fontSize: 10 } }}
                />
                <Tooltip
                  contentStyle={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: 8 }}
                  formatter={(v) => `${v} min to midnight`}
                />
                <Line type="stepAfter" dataKey="minutes" stroke="#991b1b" strokeWidth={2} dot={{ fill: '#991b1b', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2">
            {doomsdayClock.map((d, i) => (
              <div key={i} className="flex gap-3 items-start text-sm">
                <span className="font-mono text-stone-500 w-12 shrink-0">{d.year}</span>
                <div
                  className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: d.minutes <= 3 ? '#dc2626' : d.minutes <= 7 ? '#f59e0b' : '#22c55e' }}
                />
                <div>
                  <span className="text-white font-medium">{d.minutes < 2 ? `${Math.round(d.minutes * 60)} seconds` : `${d.minutes} minutes`}</span>
                  <span className="text-stone-500 ml-2">{d.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'modernization' && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The $1.7 Trillion Modernization</h2>
          <p className="text-stone-500 text-sm mb-6">
            The US is replacing every leg of the nuclear triad simultaneously — the most expensive nuclear weapons program since the Manhattan Project. By the time it&apos;s done, every warhead, missile, submarine, and bomber will be new.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { name: 'Sentinel ICBM', cost: '$96B+', desc: 'Replacing Minuteman III. Already 37% over budget before a single missile is built. GAO flagged "critical" cost breach in 2024.', status: 'Over budget' },
              { name: 'Columbia-class Submarines', cost: '$132B', desc: '12 subs replacing 14 Ohio-class. Each carrying 16 Trident II missiles with up to 8 warheads each.', status: 'In production' },
              { name: 'B-21 Raider Bomber', cost: '$203B', desc: 'Stealth bomber by Northrop Grumman. Classified cost per unit — estimated $750M each. Can deliver nuclear or conventional.', status: 'Testing' },
              { name: 'W93 Warhead', cost: '$14B+', desc: 'New warhead for submarine missiles. First new warhead design in decades. UK is co-funding development.', status: 'Design phase' },
              { name: 'Long Range Standoff Weapon', cost: '$10B+', desc: 'Nuclear-armed cruise missile for bombers. Replacing AGM-86B (designed in 1970s).', status: 'Development' },
              { name: 'NC3 (Command & Control)', cost: '$77B', desc: 'Modernizing nuclear command infrastructure. Includes satellites, ground stations, and the "nuclear football."', status: 'Ongoing' },
            ].map((p, i) => (
              <div key={i} className="bg-stone-900 rounded-xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">{p.name}</h3>
                  <span className="text-red-700 font-mono text-sm">{p.cost}</span>
                </div>
                <p className="text-stone-500 text-sm mb-2">{p.desc}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  p.status === 'Over budget' ? 'bg-red-900/50 text-red-600' :
                  p.status === 'In production' ? 'bg-yellow-900/50 text-yellow-300' :
                  'bg-white border border-stone-200 text-stone-500'
                }`}>{p.status}</span>
              </div>
            ))}
          </div>

          <div className="bg-red-900/20 border border-slate-700 rounded-xl p-5 text-sm text-stone-600">
            <h3 className="font-semibold text-red-700 mb-2">What $1.7 Trillion Could Buy Instead</h3>
            <div className="grid grid-cols-2 gap-2">
              <p>• Universal pre-K for 50 years</p>
              <p>• Eliminate all student loan debt (2x over)</p>
              <p>• Clean water for every human on Earth</p>
              <p>• 100% renewable energy grid</p>
              <p>• 10 million affordable housing units</p>
              <p>• End homelessness for 85 years</p>
            </div>
          </div>
        </div>
      )}

      <BackToTop />
    </div>
  )
}
