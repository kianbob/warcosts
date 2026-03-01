import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'

export default function HomePage() {
  const stats = loadData('stats.json')
  const conflicts = loadData('conflicts.json')
  const opCosts = loadData('opportunity-costs.json')

  const featured = ['vietnam-war', 'afghanistan', 'iraq-war', 'korean-war', 'world-war-ii', 'gulf-war']
  const featuredConflicts = featured.map(id => conflicts.find((c: any) => c.id === id)).filter(Boolean)

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            The Price of <span className="text-red-600">American Empire</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Every US war, intervention, and military action — the cost in dollars, lives, and liberty.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{fmtMoney(stats.totalCostInflationAdjusted)}</p>
              <p className="text-stone-400 text-sm mt-1">Total Cost</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{fmt(stats.totalUSDeaths)}</p>
              <p className="text-stone-400 text-sm mt-1">Americans Killed</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{(stats.totalCivilianDeaths / 1e6).toFixed(1)}M+</p>
              <p className="text-stone-400 text-sm mt-1">Civilians Killed</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{stats.totalConflicts}</p>
              <p className="text-stone-400 text-sm mt-1">Major Conflicts</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12 text-sm">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmt(stats.totalInterventions)}</p>
              <p className="text-stone-400">Military interventions since 1798</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{fmtMoney(stats.costPerSecond)}/sec</p>
              <p className="text-stone-400">Current military spending rate</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{stats.victories}W–{stats.defeats}L–{stats.inconclusive}I</p>
              <p className="text-stone-400">Win/Loss/Inconclusive record</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{stats.undeclaredWars} of {stats.totalConflicts}</p>
              <p className="text-stone-400">Wars without Congress</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/timeline" className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Explore the Timeline →
            </Link>
            <Link href="/opportunity-cost" className="border border-stone-600 hover:border-stone-400 text-white px-6 py-3 rounded-lg font-semibold transition">
              What Else Could This Buy?
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { label: 'Undeclared Wars', value: `${stats.undeclaredWars} of ${stats.totalConflicts}`, sub: 'No congressional authorization' },
            { label: 'Overseas Bases', value: fmt(stats.overseasBases), sub: `In ${stats.overseasCountries} countries` },
            { label: 'Annual Budget', value: fmtMoney(stats.currentAnnualBudget), sub: `${stats.pctGdp}% of GDP` },
            { label: 'War on Terror', value: fmtMoney(stats.warOnTerrorCost), sub: `${fmt(stats.warOnTerrorDeaths)} killed` },
            { label: 'Foreign Aid', value: fmtMoney(stats.foreignAidAnnual), sub: 'Per year' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-2xl md:text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.value}</p>
              <p className="font-semibold text-sm mt-1">{s.label}</p>
              <p className="text-muted text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Conflicts */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">Major Conflicts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredConflicts.map((c: any) => (
            <Link key={c.id} href={`/conflicts/${c.id}`} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{c.shortName || c.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  c.outcome?.includes('Victory') ? 'bg-green-100 text-green-700' :
                  c.outcome?.includes('Defeat') ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>{c.outcome}</span>
              </div>
              <p className="text-muted text-sm mb-3">{c.startYear}–{c.endYear} · {c.region}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="font-bold text-primary">{fmtMoney(c.costInflationAdjusted)}</p>
                  <p className="text-xs text-muted">Cost</p>
                </div>
                <div>
                  <p className="font-bold text-primary">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) : '—'}</p>
                  <p className="text-xs text-muted">US Deaths</p>
                </div>
                <div>
                  <p className="font-bold text-primary">{c.civilianDeaths ? fmt(c.civilianDeaths) : '—'}</p>
                  <p className="text-xs text-muted">Civilian Deaths</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/conflicts" className="text-primary font-semibold hover:underline">View All {stats.totalConflicts} Conflicts →</Link>
          <span className="mx-3 text-stone-300">|</span>
          <Link href="/analysis/the-469" className="text-primary font-semibold hover:underline">The {fmt(stats.totalInterventions)} Interventions →</Link>
        </div>
      </section>

      {/* Opportunity Cost Preview */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">What Else Could {fmtMoney(opCosts.warOnTerrorTotal)} Buy?</h2>
          <p className="text-stone-400 mb-8">The War on Terror alone cost {fmtMoney(opCosts.warOnTerrorTotal)}. Here&apos;s what that money could have done instead.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {opCosts.examples.slice(0, 6).map((e: any) => (
              <div key={e.item} className="bg-stone-800 rounded-lg p-5 border border-stone-700">
                <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{e.units >= 1e6 ? `${(e.units/1e6).toFixed(0)}M` : fmt(e.units)}×</p>
                <p className="font-semibold mt-1">{e.item}</p>
                <p className="text-stone-400 text-sm mt-1">{e.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/opportunity-cost" className="text-red-400 font-semibold hover:underline">See All Comparisons →</Link>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <blockquote className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl italic text-stone-700">
          &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, a theft from those who hunger and are not fed.&rdquo;
        </blockquote>
        <p className="text-muted mt-4">— Dwight D. Eisenhower, 1953</p>
      </section>

      {/* Analysis Preview */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">Analysis</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'The War on Terror: $8 Trillion Later', href: '/analysis/war-on-terror', desc: '929,000 dead. Four countries destabilized. Was it worth it?' },
            { title: '19 Wars Without Congress', href: '/analysis/congressional-authority', desc: 'How presidents bypassed the Constitution to wage war.' },
            { title: 'Blowback', href: '/analysis/blowback', desc: 'How US interventions created the enemies of tomorrow.' },
            { title: 'The Military-Industrial Complex', href: '/analysis/military-industrial-complex', desc: 'Eisenhower warned us. We didn\'t listen.' },
            { title: 'The Human Cost', href: '/analysis/human-cost', desc: '17 veterans take their own lives every day.' },
            { title: 'Empire of Bases', href: '/analysis/empire-of-bases', desc: '750 bases in 80 countries. Why?' },
          ].map(a => (
            <Link key={a.href} href={a.href} className="bg-white rounded-lg border p-6 hover:shadow-md transition">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">{a.title}</h3>
              <p className="text-muted text-sm">{a.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
