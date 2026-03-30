'use client'

type Severity = 'critical' | 'high' | 'medium'

interface Target {
  name: string
  location: string
  type: string
  severity: Severity
  dateStruck: string
  significance: string
  before: string
  after: string
  humanCost: string
}

const targets: Target[] = [
  {
    name: 'Mobarakeh Steel Complex',
    location: 'Isfahan',
    type: 'Industrial',
    severity: 'critical',
    dateStruck: 'Mar 26, 2026',
    significance: "Iran's largest steel plant — 40% of national steel output",
    before: 'Major industrial hub employing 20,000+ workers. Produced 7.2M tons of steel annually, backbone of Iranian manufacturing.',
    after: 'Multiple buildings destroyed across the complex. Production completely halted. Thousands of workers displaced.',
    humanCost: 'Casualties reported among night-shift workers',
  },
  {
    name: 'Khuzestan Steel Company',
    location: 'Ahvaz, Khuzestan',
    type: 'Industrial',
    severity: 'high',
    dateStruck: 'Mar 26, 2026',
    significance: 'Major steel producer in oil-rich Khuzestan province',
    before: 'Operating steel mill in industrial zone. Key employer in the region.',
    after: 'Struck alongside national steel infrastructure campaign. Significant structural damage.',
    humanCost: 'Worker casualties reported',
  },
  {
    name: 'Arak Heavy Water Reactor',
    location: 'Arak, Markazi Province',
    type: 'Nuclear',
    severity: 'critical',
    dateStruck: 'Multiple strikes',
    significance: 'Nuclear research facility — heavy water production for plutonium pathway',
    before: 'Operational nuclear research facility. Part of Iran\'s declared nuclear program under modified JCPOA agreements.',
    after: 'Heavily damaged across multiple strike waves. Reactor and supporting facilities destroyed.',
    humanCost: 'Researchers and staff casualties',
  },
  {
    name: 'Minab School',
    location: 'Minab, Hormozgan',
    type: 'Civilian',
    severity: 'critical',
    dateStruck: 'Mar 2026',
    significance: 'Functioning primary school in residential area',
    before: 'Active school serving local community. Hundreds of students and staff.',
    after: 'Reduced to rubble. One of the deadliest single strikes of the conflict.',
    humanCost: '168 killed including children',
  },
  {
    name: 'Bandar Abbas Port',
    location: 'Bandar Abbas, Hormozgan',
    type: 'Military/Commercial',
    severity: 'critical',
    dateStruck: 'Multiple strikes',
    significance: "Major naval base and commercial port on the Strait of Hormuz. Iran's most important port.",
    before: "Iran's primary naval installation and busiest commercial port. Key to oil exports and trade.",
    after: 'Heavily struck. Port facilities, naval assets, and commercial infrastructure damaged or destroyed.',
    humanCost: 'Military and civilian port worker casualties',
  },
  {
    name: 'Iran University of Science & Technology (IUST)',
    location: 'Tehran',
    type: 'Academic/Nuclear',
    severity: 'high',
    dateStruck: 'Mar 28, 2026',
    significance: "Physics department with alleged nuclear research links. One of Iran's top universities.",
    before: 'Premier engineering university. Physics department conducting research across multiple disciplines.',
    after: 'Physics department building struck and destroyed. Research facilities leveled.',
    humanCost: 'Faculty and student casualties',
  },
  {
    name: 'Isfahan Oil Refinery',
    location: 'Isfahan',
    type: 'Energy',
    severity: 'high',
    dateStruck: 'Early Mar 2026',
    significance: "One of Iran's largest refineries — processes 370,000 barrels/day",
    before: 'Fully operational refinery supplying fuel to central Iran.',
    after: 'Struck early in campaign. Major fires and structural damage. Production halted.',
    humanCost: 'Worker casualties in initial strikes',
  },
  {
    name: 'Kharg Island Oil Terminal',
    location: 'Kharg Island, Persian Gulf',
    type: 'Energy',
    severity: 'critical',
    dateStruck: 'Mar 2026',
    significance: "Iran's main oil export terminal — handles ~90% of oil exports",
    before: "Critical oil export infrastructure. Iran's economic lifeline for crude exports.",
    after: 'Storage tanks and loading facilities struck. Oil export capacity severely degraded.',
    humanCost: 'Worker casualties; massive environmental damage to Gulf waters',
  },
  {
    name: 'Haftkel Water Reservoir',
    location: 'Haftkel, Khuzestan',
    type: 'Civilian Infrastructure',
    severity: 'high',
    dateStruck: 'Mar 28, 2026',
    significance: '10,000 cubic meter water reservoir serving local population',
    before: 'Functioning water reservoir providing clean water to surrounding communities.',
    after: 'Destroyed. Local population cut off from primary water supply.',
    humanCost: 'Water crisis for surrounding population',
  },
  {
    name: 'Sanandaj IRGC Garrison',
    location: 'Sanandaj, Kurdistan Province',
    type: 'Military',
    severity: 'medium',
    dateStruck: 'Mar 2026',
    significance: 'IRGC military garrison in Kurdish region',
    before: 'Active military installation housing IRGC forces.',
    after: 'Struck and damaged. Military assets destroyed.',
    humanCost: 'Military casualties',
  },
]

const sevConfig: Record<Severity, { bg: string; text: string; label: string }> = {
  critical: { bg: 'bg-red-500/20', text: 'text-red-400', label: 'CRITICAL' },
  high: { bg: 'bg-amber-500/20', text: 'text-amber-400', label: 'HIGH' },
  medium: { bg: 'bg-stone-500/20', text: 'text-stone-400', label: 'MEDIUM' },
}

const typeColors: Record<string, string> = {
  Industrial: 'text-orange-400',
  Nuclear: 'text-purple-400',
  Civilian: 'text-red-400',
  'Military/Commercial': 'text-blue-400',
  'Academic/Nuclear': 'text-purple-400',
  Energy: 'text-yellow-400',
  'Civilian Infrastructure': 'text-cyan-400',
  Military: 'text-stone-400',
}

export default function DestructionClient() {
  const criticalCount = targets.filter((t) => t.severity === 'critical').length
  const civilianKilled = 168 // Minab school alone

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-stone-100 mb-2">
        Iran Infrastructure Destruction
      </h1>
      <p className="text-stone-400 mb-8 max-w-3xl">
        Documenting what has been struck and destroyed during the 2026 US-Iran war. Before &amp; after accounts based on reports from journalists, satellite imagery analysis, and official statements.
      </p>

      {/* Stats bar */}
      <div className="flex flex-wrap gap-4 mb-10">
        <div className="bg-stone-800/80 border border-stone-700 rounded-lg px-5 py-3">
          <p className="text-2xl font-bold text-red-400 tabular-nums">{targets.length}</p>
          <p className="text-stone-500 text-xs uppercase tracking-wider">Targets Struck</p>
        </div>
        <div className="bg-stone-800/80 border border-stone-700 rounded-lg px-5 py-3">
          <p className="text-2xl font-bold text-amber-400 tabular-nums">{criticalCount}</p>
          <p className="text-stone-500 text-xs uppercase tracking-wider">Critical Sites</p>
        </div>
        <div className="bg-stone-800/80 border border-stone-700 rounded-lg px-5 py-3">
          <p className="text-2xl font-bold text-red-500 tabular-nums">{civilianKilled}+</p>
          <p className="text-stone-500 text-xs uppercase tracking-wider">Civilians Killed</p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {targets.map((t) => {
          const sev = sevConfig[t.severity]
          return (
            <div
              key={t.name}
              className="bg-stone-800/60 border border-stone-700 rounded-xl overflow-hidden hover:border-stone-600 transition-colors"
            >
              {/* Header */}
              <div className="p-5 pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-stone-100">{t.name}</h3>
                    <p className="text-stone-500 text-sm">{t.location}</p>
                  </div>
                  <span className={`${sev.bg} ${sev.text} text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shrink-0`}>
                    {sev.label}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs mb-3">
                  <span className={typeColors[t.type] || 'text-stone-400'}>{t.type}</span>
                  <span className="text-stone-600">•</span>
                  <span className="text-stone-500">{t.dateStruck}</span>
                </div>
                <p className="text-stone-400 text-sm">{t.significance}</p>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 border-t border-stone-700">
                <div className="p-4 border-r border-stone-700">
                  <p className="text-[10px] uppercase tracking-wider text-stone-500 mb-1">Before</p>
                  <p className="text-stone-400 text-xs leading-relaxed">{t.before}</p>
                </div>
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-wider text-red-500 mb-1">After</p>
                  <p className="text-stone-400 text-xs leading-relaxed">{t.after}</p>
                </div>
              </div>

              {/* Human cost */}
              <div className="px-5 py-3 bg-stone-900/50 border-t border-stone-700">
                <p className="text-xs">
                  <span className="text-red-400/70">Human cost:</span>{' '}
                  <span className="text-stone-400">{t.humanCost}</span>
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-stone-600 text-xs mt-10 text-center">
        Data compiled from multiple sources including wire reports, satellite analysis, and official statements.
        Last updated March 29, 2026.
      </p>
    </div>
  )
}
