'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

// ── Types ──────────────────────────────────────────────────────────────────────
type Position = 'support' | 'oppose' | 'complicated' | 'neutral' | 'org'
type SortKey = 'country' | 'position'
type SortDir = 'asc' | 'desc'

interface CountryReaction {
  country: string
  code: string
  position: Position
  statement: string
  action: string
  lat: number
  lng: number
}

interface Protest {
  city: string
  country: string
  crowd: string
  date: string
}

interface OrgReaction {
  org: string
  position: Position
  statement: string
  action: string
}

// ── Colors ─────────────────────────────────────────────────────────────────────
const POS_COLORS: Record<Position, { fill: string; bg: string; text: string; label: string }> = {
  support:     { fill: '#22c55e', bg: 'bg-green-900/40', text: 'text-green-400', label: 'Supporting' },
  oppose:      { fill: '#ef4444', bg: 'bg-red-900/40', text: 'text-red-400', label: 'Opposing' },
  complicated: { fill: '#f59e0b', bg: 'bg-amber-900/40', text: 'text-amber-400', label: 'Complicated' },
  neutral:     { fill: '#6b7280', bg: 'bg-stone-700/40', text: 'text-stone-400', label: 'Neutral/Silent' },
  org:         { fill: '#8b5cf6', bg: 'bg-purple-900/40', text: 'text-purple-400', label: 'Int\'l Org' },
}

// ── Country data ───────────────────────────────────────────────────────────────
const COUNTRIES: CountryReaction[] = [
  // Supporting
  { country: 'United States', code: 'US', position: 'support', statement: '"Decisive action to prevent nuclear Iran"', action: 'Launched Operation Iron Dome of Democracy; 45,000+ troops deployed', lat: 39.8, lng: -98.6 },
  { country: 'Israel', code: 'IL', position: 'support', statement: '"Existential threat neutralized — we stand with America"', action: 'Joint strikes on Hezbollah; intelligence sharing; IDF mobilization', lat: 31.0, lng: 34.9 },
  { country: 'United Kingdom', code: 'GB', position: 'support', statement: '"We support our ally, but urge proportionality"', action: 'Limited intelligence support; RAF Akrotiri logistics; Parliament divided', lat: 54.0, lng: -2.0 },
  { country: 'Australia', code: 'AU', position: 'support', statement: '"Standing with our AUKUS partners"', action: 'Naval assets to Persian Gulf; diplomatic support; no ground troops', lat: -25.3, lng: 133.8 },
  { country: 'Czech Republic', code: 'CZ', position: 'support', statement: '"Iran\'s nuclear ambitions threatened global security"', action: 'Voted against UN ceasefire resolution; diplomatic support', lat: 49.8, lng: 15.5 },

  // Opposing
  { country: 'China', code: 'CN', position: 'oppose', statement: '"Grave violation of sovereignty and international law"', action: 'Emergency UNSC session; economic sanctions on US firms; naval exercises', lat: 35.9, lng: 104.2 },
  { country: 'Russia', code: 'RU', position: 'oppose', statement: '"American imperialism at its most dangerous"', action: 'Intelligence sharing with Iran; S-400 shipments accelerated; UNSC vetoes', lat: 61.5, lng: 105.3 },
  { country: 'Iran', code: 'IR', position: 'oppose', statement: '"We will drown the invaders in a sea of fire"', action: 'Missile retaliation; Strait of Hormuz mining; regional militia activation', lat: 32.4, lng: 53.7 },
  { country: 'Syria', code: 'SY', position: 'oppose', statement: '"Solidarity with Iran against American aggression"', action: 'Allowed Iranian missile transit; militia mobilization on Golan', lat: 35.0, lng: 38.5 },
  { country: 'Iraq', code: 'IQ', position: 'oppose', statement: '"US violated Iraqi sovereignty for strikes"', action: 'Parliament voted to expel US forces; Shia militia attacks on bases', lat: 33.3, lng: 44.4 },
  { country: 'Lebanon', code: 'LB', position: 'oppose', statement: '"Our country is being destroyed as collateral"', action: 'Hezbollah rocket barrages on Israel; 102+ civilians killed', lat: 33.9, lng: 35.5 },
  { country: 'South Africa', code: 'ZA', position: 'oppose', statement: '"Another illegal war of aggression by the West"', action: 'Recalled ambassador; ICJ filing; BRICS emergency summit call', lat: -30.6, lng: 22.9 },
  { country: 'Brazil', code: 'BR', position: 'oppose', statement: '"Unilateral military action undermines the rules-based order"', action: 'UN General Assembly condemnation sponsor; recalled ambassador', lat: -14.2, lng: -51.9 },
  { country: 'Colombia', code: 'CO', position: 'oppose', statement: '"We condemn the bombing of a sovereign nation"', action: 'Suspended military cooperation with US; UNGA cosponsor', lat: 4.6, lng: -74.1 },
  { country: 'Mexico', code: 'MX', position: 'oppose', statement: '"Non-intervention is a cornerstone of international law"', action: 'Formal condemnation; offered mediation', lat: 23.6, lng: -102.6 },
  { country: 'Bolivia', code: 'BO', position: 'oppose', statement: '"US imperialism threatens all of the Global South"', action: 'Expelled US diplomats; street protests', lat: -16.3, lng: -63.6 },
  { country: 'Cuba', code: 'CU', position: 'oppose', statement: '"The empire strikes again — the world must resist"', action: 'Condemned at UN; offered medical aid to Iran', lat: 21.5, lng: -77.8 },
  { country: 'Venezuela', code: 'VE', position: 'oppose', statement: '"Maduro stands with Iran against yankee aggression"', action: 'Oil shipments to Iran; diplomatic solidarity; protests organized', lat: 6.4, lng: -66.6 },
  { country: 'Algeria', code: 'DZ', position: 'oppose', statement: '"Colonial-era tactics in the 21st century"', action: 'Closed airspace to US military flights; UNGA cosponsor', lat: 28.0, lng: 1.7 },
  { country: 'Pakistan', code: 'PK', position: 'oppose', statement: '"Deeply concerned — this threatens regional stability"', action: 'Border reinforcement; humanitarian aid to Iran; UNGA vote', lat: 30.4, lng: 69.3 },
  { country: 'Malaysia', code: 'MY', position: 'oppose', statement: '"Strongest condemnation of unprovoked aggression"', action: 'ASEAN emergency session call; trade restrictions', lat: 4.2, lng: 101.9 },
  { country: 'Indonesia', code: 'ID', position: 'oppose', statement: '"The largest Muslim nation condemns this attack"', action: 'Massive protests; UNGA sponsor; trade review', lat: -0.8, lng: 113.9 },
  { country: 'Turkey', code: 'TR', position: 'oppose', statement: '"NATO ally or not — this is unacceptable aggression"', action: 'Closed Incirlik to Iran ops; threatened NATO withdrawal; Erdogan rally', lat: 39.9, lng: 32.9 },

  // Complicated
  { country: 'Saudi Arabia', code: 'SA', position: 'complicated', statement: '"Monitoring the situation with grave concern"', action: 'Hosts US bases but refused public endorsement; back-channel to Iran', lat: 23.9, lng: 45.1 },
  { country: 'UAE', code: 'AE', position: 'complicated', statement: '"Urging all parties to exercise restraint"', action: 'Al Dhafra base used for sorties; publicly called for de-escalation', lat: 23.4, lng: 53.8 },
  { country: 'Qatar', code: 'QA', position: 'complicated', statement: '"Qatar offers to mediate"', action: 'Al Udeid base active; simultaneously hosting Iranian diplomatic channel', lat: 25.4, lng: 51.2 },
  { country: 'India', code: 'IN', position: 'complicated', statement: '"India calls for de-escalation and dialogue"', action: 'Abstained on UNSC vote; continued Iranian oil imports via rupee; evacuated 8,000 nationals', lat: 20.6, lng: 79.0 },
  { country: 'Japan', code: 'JP', position: 'complicated', statement: '"Our alliance is important, but so is energy security"', action: 'Logistical support; emergency oil reserve release; urged ceasefire', lat: 36.2, lng: 138.3 },
  { country: 'South Korea', code: 'KR', position: 'complicated', statement: '"Deeply concerned about regional stability"', action: 'Abstained at UNGA; quietly continued military cooperation; energy crisis response', lat: 35.9, lng: 127.8 },
  { country: 'Germany', code: 'DE', position: 'complicated', statement: '"Coalition deeply divided — Greens oppose, CDU cautiously supports"', action: 'Ramstein logistics allowed; Bundestag debate; arms export freeze to region', lat: 51.2, lng: 10.5 },
  { country: 'France', code: 'FR', position: 'complicated', statement: '"France calls for an immediate ceasefire"', action: 'Refused to participate; pushed EU mediation; Charles de Gaulle carrier repositioned', lat: 46.2, lng: 2.2 },
]

// ── International Orgs ─────────────────────────────────────────────────────────
const ORGS: OrgReaction[] = [
  { org: 'UN Security Council', position: 'org', statement: 'Ceasefire resolution vetoed 3 times by US (UK abstained)', action: '3 vetoes; emergency sessions; Secretary-General "deeply alarmed"' },
  { org: 'UN General Assembly', position: 'org', statement: 'Emergency session: 143-9 vote condemning strikes (35 abstentions)', action: 'Non-binding resolution; Special Session on Iran convened' },
  { org: 'International Court of Justice', position: 'org', statement: 'South Africa & Iran filed cases alleging violations of international law', action: 'Provisional measures requested; hearings scheduled' },
  { org: 'Arab League', position: 'org', statement: '"Unanimous condemnation of aggression against a member state"', action: 'Emergency summit in Cairo; joint statement; aid coordination' },
  { org: 'African Union', position: 'org', statement: '"Africa rejects neo-colonial military interventions"', action: 'Formal condemnation; solidarity statement; humanitarian pledges' },
  { org: 'European Union', position: 'org', statement: '"EU deeply divided — Borrell calls for ceasefire"', action: 'No unified position; individual member states diverged sharply' },
  { org: 'BRICS', position: 'org', statement: '"Unilateral military action is a threat to the multipolar order"', action: 'Emergency virtual summit; joint condemnation; economic countermeasures discussed' },
  { org: 'ASEAN', position: 'org', statement: '"Grave concern over escalation in the Middle East"', action: 'Called for dialogue; joint statement; Indonesia/Malaysia strongest critics' },
]

// ── Protests ───────────────────────────────────────────────────────────────────
const PROTESTS: Protest[] = [
  { city: 'London', country: 'UK', crowd: '500,000+', date: 'Mar 3, 2026' },
  { city: 'Paris', country: 'France', crowd: '350,000+', date: 'Mar 2, 2026' },
  { city: 'Berlin', country: 'Germany', crowd: '200,000+', date: 'Mar 3, 2026' },
  { city: 'Tokyo', country: 'Japan', crowd: '80,000+', date: 'Mar 4, 2026' },
  { city: 'Jakarta', country: 'Indonesia', crowd: '1,000,000+', date: 'Mar 2, 2026' },
  { city: 'Tehran', country: 'Iran', crowd: '3,000,000+', date: 'Mar 1, 2026' },
  { city: 'Baghdad', country: 'Iraq', crowd: '500,000+', date: 'Mar 1, 2026' },
  { city: 'Beirut', country: 'Lebanon', crowd: '150,000+', date: 'Mar 2, 2026' },
  { city: 'New York City', country: 'US', crowd: '250,000+', date: 'Mar 2, 2026' },
  { city: 'Washington, DC', country: 'US', crowd: '400,000+', date: 'Mar 3, 2026' },
  { city: 'Los Angeles', country: 'US', crowd: '180,000+', date: 'Mar 2, 2026' },
  { city: 'San Francisco', country: 'US', crowd: '120,000+', date: 'Mar 2, 2026' },
  { city: 'Istanbul', country: 'Turkey', crowd: '600,000+', date: 'Mar 2, 2026' },
  { city: 'Karachi', country: 'Pakistan', crowd: '300,000+', date: 'Mar 3, 2026' },
  { city: 'São Paulo', country: 'Brazil', crowd: '150,000+', date: 'Mar 4, 2026' },
  { city: 'Cairo', country: 'Egypt', crowd: '200,000+', date: 'Mar 2, 2026' },
  { city: 'Kuala Lumpur', country: 'Malaysia', crowd: '100,000+', date: 'Mar 3, 2026' },
  { city: 'Melbourne', country: 'Australia', crowd: '75,000+', date: 'Mar 4, 2026' },
]

// ── Map helpers ────────────────────────────────────────────────────────────────
const MAP_W = 1000
const MAP_H = 500

function project(lat: number, lng: number): [number, number] {
  const x = ((lng + 180) / 360) * MAP_W
  const y = ((90 - lat) / 180) * MAP_H
  return [x, y]
}

const WORLD_PATHS = [
  'M55,95 L75,75 L90,65 L120,60 L160,55 L180,62 L200,68 L210,75 L225,80 L240,100 L250,115 L260,120 L270,130 L275,145 L270,160 L255,170 L240,180 L230,185 L210,190 L195,195 L185,200 L170,195 L155,185 L140,165 L130,150 L115,140 L100,130 L90,120 L75,110 L65,105 Z',
  'M225,215 L240,205 L255,210 L270,215 L280,225 L285,240 L290,260 L292,280 L288,300 L280,320 L270,340 L258,360 L245,375 L235,370 L228,350 L225,330 L220,310 L218,290 L220,270 L222,250 L220,230 Z',
  'M440,60 L460,55 L480,58 L500,55 L515,58 L520,65 L530,72 L535,80 L530,88 L520,92 L510,100 L500,105 L490,108 L480,110 L465,108 L455,105 L445,100 L438,92 L435,82 L437,70 Z',
  'M440,145 L460,140 L480,142 L500,145 L520,148 L540,155 L550,170 L555,190 L558,210 L555,230 L548,250 L540,270 L530,290 L518,305 L505,315 L490,318 L478,310 L470,295 L462,275 L455,255 L448,235 L442,215 L438,195 L435,175 L437,160 Z',
  'M530,55 L560,48 L590,45 L620,42 L660,40 L700,38 L740,42 L770,48 L800,55 L820,60 L840,68 L850,78 L845,90 L835,100 L820,108 L800,115 L780,120 L760,125 L740,128 L720,130 L700,128 L680,125 L660,120 L640,115 L620,110 L600,105 L580,100 L565,92 L555,82 L540,72 Z',
  'M555,110 L575,108 L595,112 L615,118 L635,125 L650,135 L660,148 L665,160 L660,170 L648,175 L635,172 L620,165 L605,158 L590,152 L575,148 L562,140 L555,130 L552,120 Z',
  'M700,148 L720,145 L740,148 L758,155 L770,165 L778,178 L772,185 L760,188 L745,185 L730,180 L718,172 L708,162 L702,155 Z',
  'M748,265 L770,255 L795,252 L820,255 L840,262 L855,275 L858,290 L852,305 L838,315 L820,320 L800,318 L780,312 L765,300 L755,288 L750,275 Z',
  'M808,78 L815,72 L822,68 L828,72 L830,80 L826,88 L820,92 L812,88 L808,82 Z',
  'M445,60 L452,55 L458,58 L455,65 L448,68 L443,65 Z',
]

// ── Component ──────────────────────────────────────────────────────────────────
export default function ReactionsClient() {
  const [filter, setFilter] = useState<Position | 'all'>('all')
  const [sortKey, setSortKey] = useState<SortKey>('country')
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<CountryReaction | null>(null)

  const filtered = useMemo(() => {
    let list = filter === 'all' ? COUNTRIES : COUNTRIES.filter(c => c.position === filter)
    list = [...list].sort((a, b) => {
      const va = sortKey === 'country' ? a.country : a.position
      const vb = sortKey === 'country' ? b.country : b.position
      return sortDir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va)
    })
    return list
  }, [filter, sortKey, sortDir])

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const counts = {
    support: COUNTRIES.filter(c => c.position === 'support').length,
    oppose: COUNTRIES.filter(c => c.position === 'oppose').length,
    complicated: COUNTRIES.filter(c => c.position === 'complicated').length,
    neutral: COUNTRIES.filter(c => c.position === 'neutral').length,
  }

  return (
    <div className="pb-16">
      {/* Hero stats */}
      <div className="border-b border-stone-700 bg-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400">87+</div>
              <div className="text-stone-400 text-sm">Countries Condemned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">3</div>
              <div className="text-stone-400 text-sm">UN Resolutions Vetoed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">12M+</div>
              <div className="text-stone-400 text-sm">Protested Worldwide</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">↑ 34%</div>
              <div className="text-stone-400 text-sm">Anti-American Sentiment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-4">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-2">
          The World Is Watching
        </h1>
        <p className="text-stone-400 text-lg max-w-3xl">
          How every nation responded to the 2026 Iran war. Support, opposition, silence — mapped and documented.
        </p>
      </div>

      {/* Legend / Filters */}
      <div className="max-w-7xl mx-auto px-4 pb-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${filter === 'all' ? 'border-white text-white bg-white/10' : 'border-stone-600 text-stone-500'}`}
          >
            All ({COUNTRIES.length})
          </button>
          {(['support', 'oppose', 'complicated', 'neutral'] as Position[]).map(pos => {
            const cfg = POS_COLORS[pos]
            const count = counts[pos]
            return (
              <button
                key={pos}
                onClick={() => setFilter(filter === pos ? 'all' : pos)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${filter === pos ? 'text-white' : 'border-stone-600 text-stone-500'}`}
                style={filter === pos ? { backgroundColor: cfg.fill + '22', borderColor: cfg.fill, color: cfg.fill } : {}}
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: filter === pos ? cfg.fill : '#57534e' }} />
                {cfg.label} ({count})
              </button>
            )
          })}
        </div>
      </div>

      {/* SVG Map */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="relative bg-stone-800/50 border border-stone-700 rounded-xl overflow-hidden">
          <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="w-full h-auto" style={{ minHeight: 280 }}>
            {/* Grid */}
            {[0, 1, 2, 3, 4].map(i => (
              <line key={`h${i}`} x1={0} y1={i * 125} x2={MAP_W} y2={i * 125} stroke="#44403c" strokeWidth={0.3} />
            ))}
            {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <line key={`v${i}`} x1={i * 142.8} y1={0} x2={i * 142.8} y2={MAP_H} stroke="#44403c" strokeWidth={0.3} />
            ))}
            <line x1={0} y1={MAP_H / 2} x2={MAP_W} y2={MAP_H / 2} stroke="#57534e" strokeWidth={0.5} strokeDasharray="4,4" />

            {/* Land */}
            {WORLD_PATHS.map((d, i) => (
              <path key={i} d={d} fill="#292524" stroke="#57534e" strokeWidth={0.5} />
            ))}

            {/* Country dots */}
            {COUNTRIES.map(c => {
              const [cx, cy] = project(c.lat, c.lng)
              const cfg = POS_COLORS[c.position]
              const isFiltered = filter !== 'all' && c.position !== filter
              const isHovered = hoveredCountry === c.code
              const isSelected = selectedCountry?.code === c.code
              return (
                <g
                  key={c.code}
                  onClick={() => setSelectedCountry(selectedCountry?.code === c.code ? null : c)}
                  onMouseEnter={() => setHoveredCountry(c.code)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className="cursor-pointer"
                  opacity={isFiltered ? 0.15 : 1}
                >
                  <circle cx={cx} cy={cy} r={isHovered || isSelected ? 8 : 5} fill={cfg.fill + '33'} />
                  <circle cx={cx} cy={cy} r={isHovered || isSelected ? 5 : 3.5} fill={cfg.fill} stroke={isSelected ? '#fff' : 'none'} strokeWidth={1} />
                  {isHovered && (
                    <text x={cx} y={cy - 9} textAnchor="middle" fill="#e7e5e4" fontSize={7} fontWeight="bold" className="pointer-events-none">
                      {c.country}
                    </text>
                  )}
                </g>
              )
            })}
          </svg>

          {/* Popover */}
          {selectedCountry && (
            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-stone-800 border border-stone-600 rounded-lg shadow-2xl p-5 z-10">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: POS_COLORS[selectedCountry.position].fill }} />
                  <h3 className="text-white font-bold text-lg">{selectedCountry.country}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${POS_COLORS[selectedCountry.position].bg} ${POS_COLORS[selectedCountry.position].text}`}>
                    {POS_COLORS[selectedCountry.position].label}
                  </span>
                </div>
                <button onClick={() => setSelectedCountry(null)} className="text-stone-400 hover:text-white text-xl leading-none">&times;</button>
              </div>
              <p className="text-stone-300 text-sm italic mb-2">{selectedCountry.statement}</p>
              <p className="text-stone-400 text-sm">{selectedCountry.action}</p>
            </div>
          )}
        </div>
      </div>

      {/* Country Reaction Table */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">
          Country Reactions
        </h2>
        <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200">
                  <th className="text-left px-4 py-3 font-semibold text-stone-700 cursor-pointer hover:text-stone-900" onClick={() => toggleSort('country')}>
                    Country {sortKey === 'country' && (sortDir === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-stone-700 cursor-pointer hover:text-stone-900" onClick={() => toggleSort('position')}>
                    Position {sortKey === 'position' && (sortDir === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-stone-700">Key Statement</th>
                  <th className="text-left px-4 py-3 font-semibold text-stone-700">Action Taken</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(c => {
                  const cfg = POS_COLORS[c.position]
                  return (
                    <tr key={c.code} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-stone-900">{c.country}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.text}`}>
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cfg.fill }} />
                          {cfg.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-stone-600 italic max-w-xs">{c.statement}</td>
                      <td className="px-4 py-3 text-stone-600 max-w-sm">{c.action}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* International Organizations */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">
          International Organizations
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {ORGS.map(o => (
            <div key={o.org} className="bg-white rounded-xl border border-stone-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <h3 className="font-bold text-stone-900">{o.org}</h3>
              </div>
              <p className="text-stone-600 italic text-sm mb-2">{o.statement}</p>
              <p className="text-stone-500 text-sm">{o.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* UN Voting Record */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">
          UN General Assembly Emergency Session
        </h2>
        <div className="bg-white rounded-xl border border-stone-200 p-6">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-stone-900 mb-1">Resolution ES-12/1</div>
            <div className="text-stone-500">&quot;Demanding immediate cessation of military operations against Iran&quot;</div>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center mb-6">
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="text-3xl font-bold text-green-700">143</div>
              <div className="text-green-600 text-sm font-medium">In Favour</div>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <div className="text-3xl font-bold text-red-700">9</div>
              <div className="text-red-600 text-sm font-medium">Against</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <div className="text-3xl font-bold text-amber-700">35</div>
              <div className="text-amber-600 text-sm font-medium">Abstentions</div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold text-stone-700 mb-1">Against (9):</div>
              <div className="text-stone-500">US, Israel, Czech Republic, Austria, Guatemala, Hungary, Marshall Islands, Micronesia, Nauru</div>
            </div>
            <div>
              <div className="font-semibold text-stone-700 mb-1">Notable Abstentions:</div>
              <div className="text-stone-500">UK, Australia, Japan, South Korea, India, Germany, Canada, Netherlands, Poland, Ukraine</div>
            </div>
            <div>
              <div className="font-semibold text-stone-700 mb-1">UNSC Vetoes (3):</div>
              <div className="text-stone-500">Mar 2 — US vetoed ceasefire call<br />Mar 10 — US vetoed humanitarian corridor<br />Mar 22 — US vetoed arms embargo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Protests */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">
          Global Anti-War Protests
        </h2>
        <p className="text-stone-400 mb-4">
          The largest global protest movement since the 2003 Iraq War. An estimated 12 million+ people took to the streets worldwide in the first week alone.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {PROTESTS.sort((a, b) => {
            const parseNum = (s: string) => parseInt(s.replace(/[^0-9]/g, ''))
            return parseNum(b.crowd) - parseNum(a.crowd)
          }).map(p => (
            <div key={p.city} className="bg-white rounded-lg border border-stone-200 p-4">
              <div className="font-bold text-stone-900">{p.city}</div>
              <div className="text-stone-500 text-xs">{p.country} · {p.date}</div>
              <div className="text-red-600 font-bold text-lg mt-1">{p.crowd}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Source note */}
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-stone-500 text-xs">
          Data compiled from UN voting records, official government statements, diplomatic cables, Reuters, Al Jazeera, and open-source reporting.
          Protest estimates from local authorities and media reports. Positions may evolve as the conflict continues.
          See <Link href="/methodology" className="text-red-400 hover:underline">methodology</Link> and{' '}
          <Link href="/sources" className="text-red-400 hover:underline">sources</Link> for details.
        </p>
      </div>
    </div>
  )
}
