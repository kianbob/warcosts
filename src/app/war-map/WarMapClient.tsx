'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'

// ── Types ──────────────────────────────────────────────────────────────────────
type MarkerCategory = 'combat' | 'base' | 'naval' | 'covert'

interface MapMarker {
  id: string
  name: string
  lat: number
  lng: number
  category: MarkerCategory
  details: string
  troops?: string
  cost?: string
  duration?: string
  link?: string
  size?: number
}

// ── Color config ───────────────────────────────────────────────────────────────
const COLORS: Record<MarkerCategory, { fill: string; label: string; glow: string }> = {
  combat:  { fill: '#dc2626', label: 'Active Combat Zones', glow: 'rgba(220,38,38,0.4)' },
  base:    { fill: '#f59e0b', label: 'US Military Bases', glow: 'rgba(245,158,11,0.3)' },
  naval:   { fill: '#3b82f6', label: 'Naval Deployments', glow: 'rgba(59,130,246,0.4)' },
  covert:  { fill: '#a855f7', label: 'Covert Operations', glow: 'rgba(168,85,247,0.4)' },
}

// ── Marker data ────────────────────────────────────────────────────────────────
const MARKERS: MapMarker[] = [
  // Active Combat Zones (RED)
  { id: 'iran', name: 'Iran', lat: 32.4, lng: 53.7, category: 'combat', details: 'Active combat operations since March 2026. Airstrikes on nuclear & military facilities.', troops: '45,000+', cost: '$2.4B/day', duration: 'Since Mar 2026', link: '/iran-war-2026' },
  { id: 'syria', name: 'Syria', lat: 35.0, lng: 38.5, category: 'combat', details: 'Ongoing operations against ISIS remnants. ~900 troops in eastern Syria.', troops: '~900', cost: '$1.2B/yr', duration: 'Since 2014', link: '/syria-intervention', size: 0.8 },
  { id: 'iraq', name: 'Iraq', lat: 33.3, lng: 44.4, category: 'combat', details: 'Counter-ISIS advisory mission. Multiple bases.', troops: '2,500', cost: '$1.5B/yr', duration: 'Since 2003', link: '/iraq-war', size: 0.8 },
  { id: 'yemen', name: 'Yemen', lat: 15.5, lng: 48.5, category: 'combat', details: 'Strikes against Houthi forces. Red Sea defense operations.', troops: '~1,000', cost: '$500M/yr', duration: 'Since 2015', link: '/conflicts/yemen-civil-war', size: 0.8 },
  { id: 'somalia', name: 'Somalia', lat: 5.2, lng: 46.2, category: 'combat', details: 'Ongoing strikes against Al-Shabaab.', troops: '~500', cost: '$300M/yr', duration: 'Since 2007', link: '/conflicts/somalia-war-on-terror', size: 0.7 },
  { id: 'lebanon', name: 'Lebanon', lat: 33.9, lng: 35.5, category: 'combat', details: 'Strikes on Hezbollah targets in coordination with Israel.', troops: 'Classified', cost: '$800M+', duration: 'Since 2026', link: '/analysis/lebanon-burns', size: 0.7 },

  // Major US Base Clusters (AMBER)
  { id: 'japan-bases', name: 'Japan', lat: 35.7, lng: 139.7, category: 'base', details: '87 installations. Largest overseas concentration.', troops: '54,000', cost: '$6.5B/yr', link: '/bases/countries' },
  { id: 'germany-bases', name: 'Germany', lat: 50.1, lng: 8.7, category: 'base', details: '79 installations. Ramstein AFB = key logistics hub.', troops: '35,000', cost: '$5.2B/yr', link: '/bases/countries' },
  { id: 'korea-bases', name: 'South Korea', lat: 37.6, lng: 127.0, category: 'base', details: '60 installations. Deterrence against DPRK.', troops: '28,500', cost: '$4.5B/yr', link: '/bases/countries' },
  { id: 'italy-bases', name: 'Italy', lat: 41.9, lng: 12.5, category: 'base', details: '30 installations. Naval Station Naples, Aviano AFB.', troops: '12,000', cost: '$2.1B/yr', link: '/bases/countries', size: 0.7 },
  { id: 'uk-bases', name: 'United Kingdom', lat: 52.4, lng: -1.5, category: 'base', details: '17 installations. RAF Lakenheath, Menwith Hill.', troops: '9,400', cost: '$1.8B/yr', link: '/bases/countries', size: 0.7 },
  { id: 'bahrain-base', name: 'Bahrain', lat: 26.2, lng: 50.6, category: 'base', details: 'Naval Support Activity. 5th Fleet HQ.', troops: '7,000', cost: '$800M/yr', link: '/bases/countries', size: 0.6 },
  { id: 'qatar-base', name: 'Qatar', lat: 25.3, lng: 51.5, category: 'base', details: 'Al Udeid Air Base. CENTCOM forward HQ.', troops: '10,000', cost: '$1.2B/yr', link: '/bases/countries', size: 0.7 },
  { id: 'kuwait-base', name: 'Kuwait', lat: 29.4, lng: 47.9, category: 'base', details: '10 installations. Camp Arifjan, Ali Al Salem.', troops: '13,000', cost: '$1.5B/yr', link: '/bases/countries', size: 0.7 },
  { id: 'turkey-bases', name: 'Turkey', lat: 39.9, lng: 32.9, category: 'base', details: '10 installations. Incirlik AFB (nuclear weapons storage).', troops: '1,700', cost: '$400M/yr', link: '/bases/countries', size: 0.6 },
  { id: 'djibouti-base', name: 'Djibouti', lat: 11.6, lng: 43.1, category: 'base', details: 'Camp Lemonnier. Only permanent US base in Africa.', troops: '4,000', cost: '$600M/yr', link: '/bases/countries', size: 0.6 },
  { id: 'guam-base', name: 'Guam', lat: 13.4, lng: 144.8, category: 'base', details: '33 installations. Andersen AFB. Pacific power projection.', troops: '6,000', cost: '$1.1B/yr', link: '/bases/countries', size: 0.7 },
  { id: 'diego-garcia', name: 'Diego Garcia', lat: -7.3, lng: 72.4, category: 'base', details: 'Strategic Indian Ocean base. Bomber staging.', troops: '3,000', cost: '$500M/yr', link: '/bases/countries', size: 0.5 },
  { id: 'australia-bases', name: 'Australia', lat: -25.3, lng: 133.8, category: 'base', details: '7 installations. Pine Gap, Darwin rotation.', troops: '2,500', cost: '$400M/yr', link: '/bases/countries', size: 0.6 },
  { id: 'spain-bases', name: 'Spain', lat: 40.4, lng: -3.7, category: 'base', details: 'Rota Naval Station. Morón Air Base.', troops: '3,300', cost: '$350M/yr', link: '/bases/countries', size: 0.5 },
  { id: 'cuba-base', name: 'Guantánamo Bay', lat: 20.0, lng: -75.1, category: 'base', details: 'GTMO Naval Station. Detention facility.', troops: '6,000', cost: '$500M/yr', link: '/bases/countries', size: 0.5 },
  { id: 'honduras-base', name: 'Honduras', lat: 14.1, lng: -87.2, category: 'base', details: 'Soto Cano Air Base. Counter-narcotics.', troops: '500', cost: '$100M/yr', link: '/bases/countries', size: 0.4 },
  { id: 'poland-base', name: 'Poland', lat: 52.2, lng: 21.0, category: 'base', details: 'Permanent garrison. Aegis Ashore missile defense.', troops: '4,700', cost: '$600M/yr', link: '/bases/countries', size: 0.5 },
  { id: 'romania-base', name: 'Romania', lat: 44.4, lng: 26.1, category: 'base', details: 'Deveselu Aegis missile defense. Mihail Kogălniceanu.', troops: '1,000', cost: '$200M/yr', link: '/bases/countries', size: 0.4 },
  { id: 'philippines-base', name: 'Philippines', lat: 14.6, lng: 121.0, category: 'base', details: '8 EDCA sites. Counter-China positioning.', troops: '~500 rotational', cost: '$200M/yr', link: '/bases/countries', size: 0.5 },
  { id: 'niger-base', name: 'Niger', lat: 13.5, lng: 2.1, category: 'base', details: 'Air Base 201. Drone operations in Sahel.', troops: '~800', cost: '$280M/yr', link: '/bases/countries', size: 0.5 },
  { id: 'kenya-base', name: 'Kenya', lat: -1.3, lng: 36.8, category: 'base', details: 'Camp Simba, Manda Bay. Counter-terror ops.', troops: '~500', cost: '$150M/yr', link: '/bases/countries', size: 0.4 },
  { id: 'greenland-base', name: 'Greenland', lat: 76.5, lng: -68.7, category: 'base', details: 'Pituffik Space Base (Thule). Arctic early warning.', troops: '600', cost: '$200M/yr', link: '/bases/countries', size: 0.4 },
  { id: 'iceland-base', name: 'Iceland', lat: 64.1, lng: -21.9, category: 'base', details: 'Keflavik. NATO Atlantic surveillance.', troops: '~100', cost: '$50M/yr', link: '/bases/countries', size: 0.3 },
  { id: 'singapore-base', name: 'Singapore', lat: 1.35, lng: 103.8, category: 'base', details: 'Logistics hub. LCS rotational deployment.', troops: '~200', cost: '$100M/yr', link: '/bases/countries', size: 0.4 },
  { id: 'kosovo-base', name: 'Kosovo', lat: 42.6, lng: 21.2, category: 'base', details: 'Camp Bondsteel. KFOR mission.', troops: '650', cost: '$200M/yr', link: '/bases/countries', size: 0.4 },

  // Naval Deployments (BLUE)
  { id: 'red-sea', name: 'Red Sea / Bab el-Mandeb', lat: 13.0, lng: 42.5, category: 'naval', details: 'Operation Prosperity Guardian. Anti-Houthi naval patrols.', troops: '~3,000 sailors', cost: '$1.5B/yr', duration: 'Since Dec 2023', link: '/analysis/hormuz-crisis' },
  { id: 'strait-hormuz', name: 'Strait of Hormuz', lat: 26.6, lng: 56.3, category: 'naval', details: 'Carrier Strike Groups. 20% of world oil transits.', troops: '~8,000 sailors', cost: '$2.5B/yr', duration: 'Permanent presence', link: '/analysis/hormuz-crisis' },
  { id: 'persian-gulf', name: 'Persian Gulf', lat: 27.0, lng: 51.0, category: 'naval', details: '5th Fleet operations. Mine countermeasures.', troops: '~5,000', cost: '$1.8B/yr', duration: 'Since 1995', size: 0.8 },
  { id: 'med-sea', name: 'Eastern Mediterranean', lat: 34.5, lng: 30.0, category: 'naval', details: '6th Fleet. Carrier operations supporting Iran strikes.', troops: '~6,000 sailors', cost: '$1.2B/yr', duration: 'Permanent', link: '/analysis/iran-regional-war' },
  { id: 'south-china-sea', name: 'South China Sea', lat: 14.5, lng: 114.0, category: 'naval', details: 'Freedom of navigation ops. Carrier patrols. China deterrence.', troops: '~7,000 sailors', cost: '$2B/yr', duration: 'Ongoing', link: '/analysis/china-pivot' },
  { id: 'west-pacific', name: 'Western Pacific', lat: 30.0, lng: 140.0, category: 'naval', details: '7th Fleet. Largest forward-deployed fleet.', troops: '~20,000 sailors', cost: '$5B/yr', duration: 'Since 1943', size: 0.9 },
  { id: 'atlantic', name: 'North Atlantic', lat: 50.0, lng: -30.0, category: 'naval', details: '2nd Fleet. NATO deterrence. Sub patrols.', troops: '~4,000', cost: '$1.5B/yr', duration: 'Since 1950', size: 0.7 },
  { id: 'indian-ocean', name: 'Indian Ocean', lat: -5.0, lng: 65.0, category: 'naval', details: 'Counter-piracy, power projection from Diego Garcia.', troops: '~2,000', cost: '$800M/yr', duration: 'Ongoing', size: 0.6 },

  // Covert Operations (PURPLE)
  { id: 'covert-libya', name: 'Libya', lat: 26.3, lng: 17.2, category: 'covert', details: 'CIA & JSOC operations. Counter-ISIS, political influence.', troops: 'Classified', cost: 'Classified', duration: 'Since 2011', link: '/analysis/shadow-wars' },
  { id: 'covert-pakistan', name: 'Pakistan', lat: 30.4, lng: 69.3, category: 'covert', details: 'Drone strikes (reduced). Cross-border operations.', troops: 'Classified', cost: 'Classified', duration: 'Since 2004', link: '/drone-strikes' },
  { id: 'covert-sahel', name: 'Sahel Region', lat: 17.6, lng: 8.0, category: 'covert', details: 'JSOC operations across Mali, Burkina Faso, Chad.', troops: 'Classified', cost: 'Classified', duration: 'Since 2013', link: '/analysis/shadow-wars', size: 0.7 },
  { id: 'covert-ukraine', name: 'Ukraine', lat: 48.4, lng: 31.2, category: 'covert', details: 'Intelligence support, training, weapons pipeline.', troops: 'Classified', cost: '$66.9B+ total aid', duration: 'Since 2022', link: '/analysis/ukraine-proxy' },
  { id: 'covert-philippines2', name: 'Philippines (Mindanao)', lat: 7.2, lng: 124.2, category: 'covert', details: 'Counter-terror advisory. Abu Sayyaf operations.', troops: 'Classified', cost: 'Classified', duration: 'Since 2002', link: '/analysis/shadow-wars', size: 0.5 },
  { id: 'covert-niger2', name: 'West Africa', lat: 10.0, lng: -2.0, category: 'covert', details: 'Expanding drone & JSOC footprint.', troops: 'Classified', cost: 'Classified', duration: 'Since 2013', link: '/analysis/shadow-wars', size: 0.6 },
  { id: 'covert-cyber', name: 'Cyberspace (Global)', lat: 38.9, lng: -77.0, category: 'covert', details: 'NSA/Cyber Command. Offensive cyber ops worldwide.', troops: '~6,200 (Cyber Command)', cost: '$10.5B/yr', duration: 'Since 2009', link: '/analysis/cyber-warfare', size: 0.7 },
]

// ── Equirectangular projection helpers ─────────────────────────────────────────
const MAP_W = 1000
const MAP_H = 500

function project(lat: number, lng: number): [number, number] {
  const x = ((lng + 180) / 360) * MAP_W
  const y = ((90 - lat) / 180) * MAP_H
  return [x, y]
}

// ── Simplified world outline paths (major landmasses) ──────────────────────────
// Rough equirectangular coordinate outlines
const WORLD_PATHS = [
  // North America
  'M55,95 L75,75 L90,65 L120,60 L160,55 L180,62 L200,68 L210,75 L225,80 L240,100 L250,115 L260,120 L270,130 L275,145 L270,160 L255,170 L240,180 L230,185 L210,190 L195,195 L185,200 L170,195 L155,185 L140,165 L130,150 L115,140 L100,130 L90,120 L75,110 L65,105 Z',
  // South America
  'M225,215 L240,205 L255,210 L270,215 L280,225 L285,240 L290,260 L292,280 L288,300 L280,320 L270,340 L258,360 L245,375 L235,370 L228,350 L225,330 L220,310 L218,290 L220,270 L222,250 L220,230 Z',
  // Europe
  'M440,60 L460,55 L480,58 L500,55 L515,58 L520,65 L530,72 L535,80 L530,88 L520,92 L510,100 L500,105 L490,108 L480,110 L465,108 L455,105 L445,100 L438,92 L435,82 L437,70 Z',
  // Africa
  'M440,145 L460,140 L480,142 L500,145 L520,148 L540,155 L550,170 L555,190 L558,210 L555,230 L548,250 L540,270 L530,290 L518,305 L505,315 L490,318 L478,310 L470,295 L462,275 L455,255 L448,235 L442,215 L438,195 L435,175 L437,160 Z',
  // Asia (main mass)
  'M530,55 L560,48 L590,45 L620,42 L660,40 L700,38 L740,42 L770,48 L800,55 L820,60 L840,68 L850,78 L845,90 L835,100 L820,108 L800,115 L780,120 L760,125 L740,128 L720,130 L700,128 L680,125 L660,120 L640,115 L620,110 L600,105 L580,100 L565,92 L555,82 L540,72 Z',
  // Middle East / India
  'M555,110 L575,108 L595,112 L615,118 L635,125 L650,135 L660,148 L665,160 L660,170 L648,175 L635,172 L620,165 L605,158 L590,152 L575,148 L562,140 L555,130 L552,120 Z',
  // Southeast Asia / Indonesia
  'M700,148 L720,145 L740,148 L758,155 L770,165 L778,178 L772,185 L760,188 L745,185 L730,180 L718,172 L708,162 L702,155 Z',
  // Australia
  'M748,265 L770,255 L795,252 L820,255 L840,262 L855,275 L858,290 L852,305 L838,315 L820,320 L800,318 L780,312 L765,300 L755,288 L750,275 Z',
  // Japan / Korean peninsula
  'M808,78 L815,72 L822,68 L828,72 L830,80 L826,88 L820,92 L812,88 L808,82 Z',
  // UK / Ireland
  'M445,60 L452,55 L458,58 L455,65 L448,68 L443,65 Z',
]

// ── Component ──────────────────────────────────────────────────────────────────
export default function WarMapClient() {
  const [filters, setFilters] = useState<Record<MarkerCategory, boolean>>({
    combat: true, base: true, naval: true, covert: true,
  })
  const [selected, setSelected] = useState<MapMarker | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const toggleFilter = useCallback((cat: MarkerCategory) => {
    setFilters(f => ({ ...f, [cat]: !f[cat] }))
  }, [])

  const visibleMarkers = MARKERS.filter(m => filters[m.category])

  return (
    <div className="pb-12">
      {/* Stats Bar */}
      <div className="border-b border-stone-700 bg-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <span className="text-red-400 font-bold">6 Active Wars</span>
          <span className="text-stone-500">•</span>
          <span className="text-amber-400 font-bold">750+ Bases</span>
          <span className="text-stone-500">•</span>
          <span className="text-blue-400 font-bold">170,000+ Troops Deployed</span>
          <span className="text-stone-500">•</span>
          <span className="text-purple-400 font-bold">$886B Annual Budget</span>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-4">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-2">
          Global War Map
        </h1>
        <p className="text-stone-400 text-lg max-w-3xl">
          Every active U.S. military operation, base, naval deployment, and covert operation — on one map.
          Click any marker for details.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 pb-4">
        <div className="flex flex-wrap gap-2">
          {(Object.entries(COLORS) as [MarkerCategory, typeof COLORS.combat][]).map(([cat, cfg]) => (
            <button
              key={cat}
              onClick={() => toggleFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                filters[cat]
                  ? 'border-transparent text-white'
                  : 'border-stone-600 text-stone-500 bg-transparent'
              }`}
              style={filters[cat] ? { backgroundColor: cfg.fill + '22', borderColor: cfg.fill, color: cfg.fill } : {}}
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: filters[cat] ? cfg.fill : '#57534e' }} />
              {cfg.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative bg-stone-800/50 border border-stone-700 rounded-xl overflow-hidden">
          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="w-full h-auto"
            style={{ minHeight: 300 }}
          >
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map(i => (
              <line key={`h${i}`} x1={0} y1={i * 125} x2={MAP_W} y2={i * 125} stroke="#44403c" strokeWidth={0.3} />
            ))}
            {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <line key={`v${i}`} x1={i * 142.8} y1={0} x2={i * 142.8} y2={MAP_H} stroke="#44403c" strokeWidth={0.3} />
            ))}

            {/* Equator */}
            <line x1={0} y1={MAP_H / 2} x2={MAP_W} y2={MAP_H / 2} stroke="#57534e" strokeWidth={0.5} strokeDasharray="4,4" />

            {/* World land outlines */}
            {WORLD_PATHS.map((d, i) => (
              <path key={i} d={d} fill="#292524" stroke="#57534e" strokeWidth={0.5} />
            ))}

            {/* Animated pulse rings for combat zones */}
            {visibleMarkers.filter(m => m.category === 'combat').map(m => {
              const [cx, cy] = project(m.lat, m.lng)
              return (
                <circle key={`pulse-${m.id}`} cx={cx} cy={cy} r={12} fill="none" stroke="#dc2626" strokeWidth={0.8} opacity={0.6}>
                  <animate attributeName="r" from="6" to="18" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
              )
            })}

            {/* Markers */}
            {visibleMarkers.map(m => {
              const [cx, cy] = project(m.lat, m.lng)
              const r = (m.size ?? 1) * 5
              const cfg = COLORS[m.category]
              const isHovered = hoveredId === m.id
              const isSelected = selected?.id === m.id
              return (
                <g
                  key={m.id}
                  onClick={() => setSelected(selected?.id === m.id ? null : m)}
                  onMouseEnter={() => setHoveredId(m.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="cursor-pointer"
                >
                  {/* Glow */}
                  <circle cx={cx} cy={cy} r={r + 3} fill={cfg.glow} opacity={isHovered || isSelected ? 0.8 : 0.3} />
                  {/* Dot */}
                  <circle cx={cx} cy={cy} r={r} fill={cfg.fill} stroke={isSelected ? '#fff' : cfg.fill} strokeWidth={isSelected ? 1.5 : 0.5} opacity={0.9} />
                  {/* Label on hover */}
                  {isHovered && (
                    <text x={cx} y={cy - r - 4} textAnchor="middle" fill="#e7e5e4" fontSize={8} fontWeight="bold" className="pointer-events-none">
                      {m.name}
                    </text>
                  )}
                </g>
              )
            })}
          </svg>

          {/* Popover */}
          {selected && (
            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-stone-800 border border-stone-600 rounded-lg shadow-2xl p-5 z-10">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[selected.category].fill }} />
                  <h3 className="text-white font-bold text-lg">{selected.name}</h3>
                </div>
                <button onClick={() => setSelected(null)} className="text-stone-400 hover:text-white text-xl leading-none">&times;</button>
              </div>
              <p className="text-stone-300 text-sm mb-3">{selected.details}</p>
              <div className="grid grid-cols-3 gap-3 text-center mb-3">
                {selected.troops && (
                  <div>
                    <div className="text-xs text-stone-500 uppercase">Troops</div>
                    <div className="text-white font-bold text-sm">{selected.troops}</div>
                  </div>
                )}
                {selected.cost && (
                  <div>
                    <div className="text-xs text-stone-500 uppercase">Cost</div>
                    <div className="text-red-400 font-bold text-sm">{selected.cost}</div>
                  </div>
                )}
                {selected.duration && (
                  <div>
                    <div className="text-xs text-stone-500 uppercase">Duration</div>
                    <div className="text-stone-300 font-bold text-sm">{selected.duration}</div>
                  </div>
                )}
              </div>
              {selected.link && (
                <Link href={selected.link} className="block text-center bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">
                  View Full Details →
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(Object.entries(COLORS) as [MarkerCategory, typeof COLORS.combat][]).map(([cat, cfg]) => {
            const count = MARKERS.filter(m => m.category === cat).length
            return (
              <div key={cat} className="bg-stone-800/50 border border-stone-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: cfg.fill }} />
                  <span className="text-white font-medium text-sm">{cfg.label}</span>
                </div>
                <div className="text-stone-400 text-xs">{count} locations shown</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Source note */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <p className="text-stone-500 text-xs">
          Data compiled from Department of Defense Base Structure Reports, Congressional Research Service, and open-source intelligence.
          Troop counts and costs are approximate. Covert operation details are based on publicly reported information.
          See <Link href="/methodology" className="text-red-400 hover:underline">methodology</Link> and{' '}
          <Link href="/sources" className="text-red-400 hover:underline">sources</Link> for details.
        </p>
      </div>
    </div>
  )
}
