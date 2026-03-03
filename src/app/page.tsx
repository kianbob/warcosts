import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import { LiveCostCounter } from '@/components/LiveCostCounter'

export const metadata: Metadata = {
  title: 'WarCosts — The True Cost of American Wars | $11.3 Trillion & Counting',
  description: 'The US has spent $11.3 trillion on war, killed 1 million of its own soldiers, and intervened militarily 469 times. $28,095 per second. 229 years at war. Free, ad-free data from Brown University, CRS, SIPRI & Pentagon reports.',
  openGraph: {
    title: 'WarCosts — $11.3 Trillion Spent. 1 Million Americans Killed. 469 Interventions.',
    description: 'The US spends $28,095/second on defense. 229 years at war out of 249. Every dollar, every life, every conflict — exposed with data. Free. No ads. No paywall.',
    url: 'https://warcosts.org',
    type: 'website',
    siteName: 'WarCosts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WarCosts — $28,095/Second on War',
    description: '$11.3 trillion spent. 1M Americans killed. 469 interventions. The data the defense industry doesn\'t want you to see.',
  },
}

export default function HomePage() {
  const stats = loadData('stats.json')
  const conflicts = loadData('conflicts.json')
  const opCosts = loadData('opportunity-costs.json')

  const featured = ['vietnam-war', 'afghanistan', 'iraq-war', 'korean-war', 'world-war-ii', 'gulf-war']
  const featuredConflicts = featured.map(id => conflicts.find((c: any) => c.id === id)).filter(Boolean)
  const ongoingConflicts = conflicts.filter((c: any) => !c.endYear)
  const iranConflict = conflicts.find((c: any) => c.id === 'iran-2026')

  return (
    <>
      {/* Breaking: Iran 2026 */}
      {iranConflict && (
        <section className="bg-red-900 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 rounded-full bg-red-600 font-semibold animate-pulse">● DEVELOPING</span>
              <span className="font-[family-name:var(--font-heading)] font-bold">Iran 2026 — Day 4: 787+ killed, 6 US troops dead, Strait of Hormuz closed, war spreading to Lebanon</span>
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/conflicts/iran-2026" className="text-red-200 hover:text-white underline">Conflict Data →</Link>
              <Link href="/analysis/iran-2026" className="text-red-200 hover:text-white underline">Full Analysis →</Link>
            </div>
          </div>
        </section>
      )}

      {/* Latest Developments */}
      {iranConflict && (
        <section className="bg-stone-950 text-white py-6 border-b border-red-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs px-2 py-1 rounded-full bg-red-600 font-semibold animate-pulse">● LIVE</span>
              <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold">Latest Developments</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-3">
              {[
                { time: 'Day 4', text: 'Strait of Hormuz closed — oil prices surge past $130/barrel', link: '/analysis/iran-2026' },
                { time: 'Day 3', text: 'Hezbollah launches rockets into northern Israel; IDF retaliates in Lebanon', link: '/conflicts/iran-2026' },
                { time: 'Day 2', text: '6 US service members killed in Iranian ballistic missile counterattack', link: '/conflicts/iran-2026' },
                { time: 'Day 1', text: 'US strikes Iranian nuclear & military sites — no congressional vote', link: '/analysis/iran-2026' },
              ].map((d, i) => (
                <Link key={i} href={d.link} className="bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 transition">
                  <span className="text-red-400 text-xs font-bold">{d.time}</span>
                  <p className="text-sm text-stone-300 mt-1">{d.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hero */}
      <section className="bg-stone-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            The Price of <span className="text-red-600">American Empire</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            Every US war, intervention, and military action — the cost in dollars, lives, and liberty.
          </p>
          <p className="text-stone-500 text-sm max-w-2xl mx-auto mb-2">
            WarCosts is a free, data-driven transparency platform. No ads. No paywall. No defense industry
            sponsors. Just the numbers — sourced from Brown University, CRS, SIPRI, and the Pentagon&apos;s
            own reports.
          </p>
          <p className="text-stone-600 text-xs mb-12">Last updated: March 3, 2026</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{fmtMoney(stats.totalCostInflationAdjusted)}</p>
              <p className="text-stone-400 text-sm mt-1">Total Cost</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{stats.totalUSDeaths >= 1e6 ? `${(stats.totalUSDeaths / 1e6).toFixed(1)}M+` : `${Math.round(stats.totalUSDeaths / 1e3).toLocaleString()}K+`}</p>
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

          <div className="max-w-md mx-auto mb-12">
            <LiveCostCounter costPerSecond={stats.costPerSecond} />
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

      {/* Quick Facts Strip */}
      <section className="bg-red-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <span><strong>${fmt(stats.costPerSecond)}</strong>/second on defense</span>
            <span><strong>229</strong> years at war (of 249)</span>
            <span><strong>{stats.veteranSuicidePerDay}</strong> veteran suicides/day</span>
            <span><strong>{fmt(stats.overseasBases)}</strong> overseas bases</span>
            <span><strong>0</strong> Pentagon audits passed</span>
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

      {/* Start Exploring Pathways */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">Start Exploring</h2>
        <p className="text-stone-500 mb-8">Choose your entry point into the data.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/us-military-spending', icon: '💰', title: 'US Military Spending', desc: '$886B/year — more than the next 10 countries combined' },
            { href: '/cost-of-war', icon: '📊', title: 'Cost of War', desc: '$11.3 trillion since 1776. $8T since 9/11 alone.' },
            { href: '/us-wars-list', icon: '⚔️', title: 'Every US War', desc: '36 wars, 469 interventions, 5 declared by Congress' },
            { href: '/veteran-suicide', icon: '🎗️', title: 'Veteran Suicide', desc: '17 per day. More than die in combat.' },
            { href: '/modern-wars', icon: '🔥', title: 'Modern Wars', desc: 'The forever wars — 1995 to present' },
            { href: '/defense-budget', icon: '🏛️', title: 'Defense Budget', desc: 'Where every dollar goes. Never audited.' },
            { href: '/tools/tax-receipt', icon: '🧾', title: 'Your Tax Receipt', desc: 'How much of YOUR money funds the military' },
            { href: '/tools/cost-calculator', icon: '🧮', title: 'Your War Cost', desc: 'Lifetime military spending in your name' },
          ].map(p => (
            <Link key={p.href} href={p.href} className="bg-white rounded-lg border p-6 hover:shadow-md transition">
              <span className="text-3xl block mb-2">{p.icon}</span>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-1">{p.title}</h3>
              <p className="text-stone-500 text-sm">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* War on Terror callout */}
      <section className="bg-red-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl font-bold mb-2">
            Since 2001, the US has spent {fmtMoney(stats.warOnTerrorCost)} and lost {fmt(stats.warOnTerrorDeaths)} lives
          </p>
          <p className="text-red-200 text-lg mb-1">in the War on Terror</p>
          <p className="text-red-300 text-sm mb-6">{stats.counterterrorCountries} countries. {(stats.warOnTerrorDisplaced / 1e6).toFixed(0)} million displaced. {stats.ongoing} operations still ongoing.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/modern-wars" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2 rounded-lg font-semibold transition text-sm">
              Modern Wars →
            </Link>
            <Link href="/analysis/forever-wars" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2 rounded-lg font-semibold transition text-sm">
              How 60 Words Enabled It →
            </Link>
          </div>
        </div>
      </section>

      {/* Ongoing Operations */}
      {ongoingConflicts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700 font-semibold animate-pulse">● ONGOING</span>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{ongoingConflicts.length} Active Operations</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ongoingConflicts.map((c: any) => (
              <Link key={c.id} href={`/conflicts/${c.id}`} className="bg-white rounded-lg border border-red-200 p-4 hover:shadow-md transition">
                <h3 className="font-[family-name:var(--font-heading)] font-bold">{c.shortName || c.name}</h3>
                <p className="text-muted text-sm">{c.startYear}–Present · {c.region}</p>
                <p className="font-bold text-primary text-sm mt-1">{fmtMoney(c.costInflationAdjusted)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

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

      {/* Data Sources - Social Proof */}
      <section className="bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 text-center">Our Data Sources</h2>
          <p className="text-stone-500 text-center mb-8 max-w-2xl mx-auto">
            Every number on this site is sourced from official government reports, peer-reviewed academic research,
            and established investigative organizations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { name: 'Brown University', sub: 'Costs of War Project' },
              { name: 'Congressional Research Service', sub: 'CRS Reports' },
              { name: 'SIPRI', sub: 'Military Expenditure Database' },
              { name: 'Dept. of Defense', sub: 'DMDC, Base Structure Reports' },
              { name: 'OMB', sub: 'Historical Budget Tables' },
              { name: 'Bureau of Labor Statistics', sub: 'CPI Inflation Data' },
            ].map(s => (
              <div key={s.name} className="bg-white rounded-lg p-4 border">
                <p className="font-bold text-sm">{s.name}</p>
                <p className="text-stone-500 text-xs">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/sources" className="text-primary font-semibold hover:underline text-sm">View All Sources →</Link>
            <span className="mx-2 text-stone-300">|</span>
            <Link href="/methodology" className="text-primary font-semibold hover:underline text-sm">Our Methodology →</Link>
          </div>
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

      {/* Why This Site Exists */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">Why This Site Exists</h2>
          <p className="text-stone-600 text-lg mb-4">
            The Founders believed that a free people must understand what their government does in their name —
            especially when it comes to war. James Madison warned that &ldquo;of all the enemies to public liberty,
            war is, perhaps, the most to be dreaded.&rdquo;
          </p>
          <p className="text-stone-600 mb-4">
            WarCosts exists to make the costs of American military power visible, measurable, and undeniable.
            Not through opinion or ideology, but through data — sourced from the government&apos;s own reports,
            peer-reviewed academic research, and established investigative organizations.
          </p>
          <p className="text-stone-500 text-sm mb-8">
            Free. No ads. No paywall. No defense industry sponsors. A <Link href="https://thedataproject.ai" className="text-primary hover:underline">TheDataProject.ai</Link> platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="text-primary font-semibold hover:underline">About Us →</Link>
            <Link href="/methodology" className="text-primary font-semibold hover:underline">Our Methodology →</Link>
            <Link href="/sources" className="text-primary font-semibold hover:underline">Data Sources →</Link>
            <Link href="/faq" className="text-primary font-semibold hover:underline">FAQ →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
