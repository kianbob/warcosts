import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Price of a Life — Cost Per Death in Every US War | WarCosts',
  description: 'From $96K in the Revolution to $935M in Afghanistan. The cost per American death has risen 10,000×. What does it mean when war becomes too expensive to notice?',
  openGraph: {
    title: 'The Price of a Life — Cost Per Death in Every US War',
    description: '$96K in the Revolution. $935M in Afghanistan. The economics of death.',
    url: 'https://warcosts.org/analysis/cost-per-life',
    type: 'article',
  },
}

export default function AnalysisCostPerLifePage() {
  const cplData = loadData('cost-per-life.json')
  const stats = loadData('stats.json')

  // Sort by cost per US death descending
  const sorted = [...cplData].sort((a: any, b: any) => b.costPerUSdeath - a.costPerUSdeath)

  const alternativeUses = [
    { item: 'Malaria bed nets', costPer: 3000, saves: 'one life', ratio: '' },
    { item: 'Clean water access (developing world)', costPer: 5000, saves: 'one life', ratio: '' },
    { item: 'Childhood vaccination (global)', costPer: 1500, saves: 'one life', ratio: '' },
    { item: 'Deworming treatments', costPer: 100, saves: 'one DALY (disability-adjusted life year)', ratio: '' },
    { item: 'US military death (Afghanistan)', costPer: 935000000, saves: 'the war that took it', ratio: '' },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Price of a Life — Cost Per Death in Every US War',
    description: 'The cost per American death has risen from $96K to $935M. A deep analysis of the economics of death.',
    author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-03-01',
    dateModified: '2026-03-01',
    mainEntityOfPage: 'https://warcosts.org/analysis/cost-per-life',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Price of a Life' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Price of a Life
        </h1>
        <p className="text-stone-400 text-lg">
          In the Revolutionary War, each American death cost the equivalent of <strong className="text-white">$96,000</strong>.
          In Afghanistan, <strong className="text-white">$935 million</strong>. A nearly 10,000-fold increase.
          This page is deeply uncomfortable. It should be.
        </p>
      </div>

      <ShareButtons title="The Price of a Life — Cost Per Death in Every US War" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{cplData.length}</p>
          <p className="text-muted text-sm">Conflicts analyzed</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">10,000×</p>
          <p className="text-muted text-sm">Cost increase per death</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$935M</p>
          <p className="text-muted text-sm">Per death (Afghanistan)</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$3,000</p>
          <p className="text-muted text-sm">To save a life (malaria net)</p>
        </div>
      </div>

      {/* Full ranking table */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Cost Per American Death — All {cplData.length} Conflicts</h2>
        <p className="text-muted text-sm mb-4">Ranked from highest to lowest cost per US military death. All costs inflation-adjusted to 2025 dollars.</p>
        <div className="space-y-2">
          {sorted.map((c: any, i: number) => {
            const maxCost = sorted[0].costPerUSdeath
            const pct = (c.costPerUSdeath / maxCost) * 100
            return (
              <div key={c.id} className="group">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted w-6 text-right">{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <Link href={`/conflicts/${c.id}`} className="text-sm font-semibold hover:text-red-800 transition">
                        {c.name}
                      </Link>
                      <span className="text-sm font-bold text-red-800">{fmtMoney(c.costPerUSdeath)}/death</span>
                    </div>
                    <div className="bg-stone-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-red-700 h-full rounded-full" style={{ width: `${Math.max(pct, 0.5)}%` }} />
                    </div>
                    <div className="flex justify-between text-xs text-muted mt-0.5">
                      <span>{fmt(c.usDeaths)} US deaths</span>
                      <span>{fmt(c.civilianDeaths)} civilian deaths</span>
                      <span>Total: {fmtMoney(c.cost)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* The American vs civilian disparity */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Disparity: American vs. Foreign Lives</h2>
        <p className="text-stone-400 mb-6">
          The most disturbing pattern in the data isn&apos;t the cost per American death — it&apos;s the
          gap between what the US spends per American death vs. per foreign civilian death:
        </p>
        <div className="space-y-3">
          {sorted.filter((c: any) => c.civilianDeaths > 1000).slice(0, 8).map((c: any) => (
            <div key={c.id} className="grid grid-cols-3 gap-4 items-center border-b border-stone-700 pb-2">
              <span className="font-semibold text-sm">{c.name}</span>
              <div className="text-center">
                <p className="text-red-400 font-bold">{fmtMoney(c.costPerUSdeath)}</p>
                <p className="text-stone-500 text-xs">per US death</p>
              </div>
              <div className="text-center">
                <p className="text-stone-400 font-bold">{fmtMoney(c.costPerCivilianDeath)}</p>
                <p className="text-stone-500 text-xs">per civilian death</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-6">
          In every conflict, the cost per civilian death is a fraction of the cost per American death.
          In Yemen, the US spent roughly <strong>$67,000 per civilian death</strong> vs. <strong>$5 billion
          per American death</strong>. The implicit message: foreign lives cost less. The math is
          grotesque — and it&apos;s built into the system.
        </p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">Why the Cost Has Skyrocketed</h2>
        <p>
          Three factors explain the 10,000× increase in cost per death from the Revolutionary War to
          Afghanistan:
        </p>
        <h3 className="font-[family-name:var(--font-heading)]">1. Technology</h3>
        <p>
          A musket in 1776 cost the equivalent of a few hundred dollars. A single F-35 costs $80 million.
          A Tomahawk cruise missile costs $1.87 million. A single B-2 bomber costs $2.1 billion. The
          technology of killing has become staggeringly expensive. An airstrike that kills one enemy
          combatant may cost millions of dollars in fuel, munitions, intelligence, and support.
        </p>
        <h3 className="font-[family-name:var(--font-heading)]">2. Force Protection</h3>
        <p>
          Modern militaries spend enormous sums keeping their own soldiers alive. Body armor that stops
          rifle rounds. MRAP vehicles designed to survive IED blasts ($500K-$1M each, thousands deployed).
          Medevac helicopters that can reach a wounded soldier within the &ldquo;golden hour.&rdquo; Field
          hospitals with surgical capability. The result: the survival rate for wounded soldiers in
          Afghanistan was 90% — compared to 76% in Vietnam. Fewer deaths means higher cost per death.
        </p>
        <h3 className="font-[family-name:var(--font-heading)]">3. The Long Tail</h3>
        <p>
          Veterans require decades of care after the fighting ends. The Afghanistan generation will need
          an estimated {fmtMoney(stats.veteranCareFutureCost)} in lifetime care — disability compensation,
          healthcare, mental health services, rehabilitation. This cost is typically not counted in
          &ldquo;war cost&rdquo; figures but represents the majority of the true cost of modern conflict.
        </p>
      </div>

      {/* The paradox */}
      <div className="bg-red-50 border-l-4 border-red-700 rounded-r-xl p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-red-800">The Paradox: Expensive War Is Easy War</h2>
        <p className="text-stone-700">
          Here&apos;s the deeply uncomfortable truth: as war becomes more &ldquo;humane&rdquo; for
          American soldiers — fewer deaths, better medical care — it becomes <em>more affordable
          politically</em>. Low American casualties make it easier to sustain wars indefinitely.
          Afghanistan lasted 20 years partly because the cost in American lives was low enough to
          tolerate. The cost in money was astronomical. The cost in foreign civilian lives was
          catastrophic. But those costs are invisible to most Americans.
        </p>
        <p className="text-stone-700 mt-4">
          The implication is disturbing: <strong>making war more expensive per death actually makes
          war more likely</strong>, because it reduces the political cost that historically constrained
          military action. When war meant mass American casualties, the public demanded an end. When
          war means drones and special forces and $935 million per American death, the public barely
          notices.
        </p>
      </div>

      {/* What those dollars could save */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What $935 Million Could Save Instead</h2>
        <p className="text-stone-400 mb-6">
          For the cost of one American death in Afghanistan, the US could have:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-stone-800 rounded-lg p-4 border border-stone-700">
            <p className="text-3xl font-bold text-green-400 font-[family-name:var(--font-heading)]">311,667</p>
            <p className="text-stone-400">Lives saved via malaria bed nets ($3,000 each)</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-4 border border-stone-700">
            <p className="text-3xl font-bold text-green-400 font-[family-name:var(--font-heading)]">187,000</p>
            <p className="text-stone-400">Lives saved via clean water access ($5,000 each)</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-4 border border-stone-700">
            <p className="text-3xl font-bold text-green-400 font-[family-name:var(--font-heading)]">623,333</p>
            <p className="text-stone-400">Children vaccinated ($1,500 each)</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-4 border border-stone-700">
            <p className="text-3xl font-bold text-green-400 font-[family-name:var(--font-heading)]">18,700</p>
            <p className="text-stone-400">Four-year college scholarships ($50,000 each)</p>
          </div>
        </div>
        <p className="text-stone-500 text-sm mt-6">
          The US spends roughly <strong>$886 billion per year</strong> on defense and <strong>$68
          billion per year</strong> on foreign aid. For every dollar spent saving lives abroad through
          development, America spends $13 on the capacity to take them. The math is a moral indictment.
        </p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Moral Calculus</h2>
        <p>
          Economists and ethicists have long debated the &ldquo;value of a statistical life&rdquo; —
          the implicit price societies place on preventing one death. The US Department of Transportation
          uses roughly $12.5 million. The EPA uses about $10 million. These figures guide regulations:
          if a safety rule costs less than $10 million per life saved, it&apos;s considered cost-effective.
        </p>
        <p>
          By this standard, the Afghanistan war spent <strong>125 times the government&apos;s own
          valuation per life</strong> — not to save lives, but in the process of losing them. If the
          same resources had been directed at domestic safety improvements, healthcare access, or global
          health programs, the number of lives saved would be orders of magnitude higher.
        </p>
        <p>
          This isn&apos;t a hypothetical trolley problem. It&apos;s real money, real deaths, real
          choices. Every dollar spent on a Tomahawk missile is a dollar not spent on malaria prevention.
          Every billion spent on force protection in Afghanistan is a billion not spent on VA mental
          health services. The opportunity cost of war is measured in lives that could have been saved
          but weren&apos;t.
        </p>
      </div>

      {/* How cost has changed over time */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Trajectory: Cost Per Death Over Time</h2>
        <div className="space-y-3">
          {[
            { era: 'Revolutionary War (1775)', cost: 96000, label: '$96K' },
            { era: 'Civil War (1861)', cost: 219000, label: '$219K' },
            { era: 'World War I (1917)', cost: 3300000, label: '$3.3M' },
            { era: 'World War II (1941)', cost: 11800000, label: '$11.8M' },
            { era: 'Korean War (1950)', cost: 14500000, label: '$14.5M' },
            { era: 'Vietnam (1964)', cost: 17200000, label: '$17.2M' },
            { era: 'Gulf War (1991)', cost: 355000000, label: '$355M' },
            { era: 'Iraq War (2003)', cost: 435000000, label: '$435M' },
            { era: 'Afghanistan (2001)', cost: 935000000, label: '$935M' },
          ].map((e, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm text-muted w-40 shrink-0">{e.era}</span>
              <div className="flex-1 bg-stone-100 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-red-700 h-full rounded-full flex items-center justify-end pr-2"
                  style={{ width: `${Math.max((Math.log10(e.cost) / Math.log10(935000000)) * 100, 5)}%` }}
                >
                  <span className="text-white text-xs font-bold">{e.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted text-sm mt-4">
          Note: logarithmic scale. The jump from WWII to the Gulf War represents the shift to
          high-tech, low-casualty warfare — fewer American deaths but astronomically higher cost per death.
        </p>
      </div>

      {/* The question */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Question We Don&apos;t Ask</h2>
        <p>
          The cost-per-life data forces an uncomfortable question: <strong>is this the best use of
          these resources?</strong> Not &ldquo;is war sometimes necessary?&rdquo; — but specifically,
          given that we have finite resources, is spending $935 million per American military death
          the optimal allocation?
        </p>
        <p>
          The effective altruism movement has demonstrated that lives can be saved for as little as
          $3,000-$5,000 through proven interventions like malaria nets, deworming, and vitamin A
          supplementation. The cost of one Afghanistan death could save over 300,000 lives.
        </p>
        <p>
          The total cost of the War on Terror — {fmtMoney(stats.warOnTerrorCost)} — could have funded
          global malaria eradication (estimated at $100 billion), clean water access for every person
          on earth ($150 billion), universal childhood vaccination ($50 billion), and still had
          <strong> $7.7 trillion left over</strong>.
        </p>
        <p>
          Instead, we spent it on wars that killed {fmt(stats.warOnTerrorDeaths)} people, displaced
          {(stats.warOnTerrorDisplaced / 1e6).toFixed(0)} million, destabilized an entire region, and
          created the conditions for the next generation of conflict. The cost-per-life analysis isn&apos;t
          just an academic exercise. It&apos;s an indictment.
        </p>
      </div>

      <div className="bg-stone-100 rounded-xl p-6 my-8 border">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
          &ldquo;I spent 33 years and four months in active military service, and during that period
          I spent most of my time as a high-class muscle man for Big Business, for Wall Street and
          the bankers. In short, I was a racketeer, a gangster for capitalism.&rdquo;
        </blockquote>
        <p className="text-muted mt-3">— Major General Smedley Butler, USMC, two-time Medal of Honor recipient, <em>War Is a Racket</em>, 1935</p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The cost per American death has increased <strong>nearly 10,000×</strong> from the Revolutionary War ($96K) to Afghanistan ($935M).</li>
          <li>• For the cost of <strong>one American death in Afghanistan</strong>, you could save 311,000 lives through malaria bed nets.</li>
          <li>• The US spends <strong>$13 on defense</strong> for every $1 on foreign development aid.</li>
          <li>• The survival rate for wounded soldiers in Afghanistan was <strong>90%</strong>, vs. 76% in Vietnam — meaning fewer deaths but higher cost per death.</li>
          <li>• The Pentagon values a &ldquo;statistical life&rdquo; at $7.5M for policy purposes. Afghanistan spent <strong>125× that amount per actual death</strong>.</li>
          <li>• The total War on Terror cost ({fmtMoney(stats.warOnTerrorCost)}) could have funded malaria eradication, universal clean water, global vaccination, and still had <strong>$7.7 trillion left over</strong>.</li>
          <li>• In Yemen, the US effectively spent <strong>$67,000 per civilian death</strong> vs. $5 billion per American death — a 75,000× disparity in the implicit value of a life.</li>
          <li>• Making war &ldquo;cheaper&rdquo; in lives actually makes it <strong>more likely</strong> — low American casualties remove the political constraint that historically ended wars.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <Link href="/cost-per-life" className="text-red-800 hover:underline block">→ Full cost-per-life data table</Link>
          <Link href="/casualties" className="text-red-800 hover:underline block">→ Casualty data by conflict</Link>
          <Link href="/analysis/human-cost" className="text-red-800 hover:underline block">→ The Human Cost of War</Link>
          <Link href="/tools/cost-calculator" className="text-red-800 hover:underline block">→ War Cost Calculator</Link>
          <Link href="/analysis/the-aftermath" className="text-red-800 hover:underline block">→ The Aftermath — what happens after</Link>
          <Link href="/analysis/forever-wars" className="text-red-800 hover:underline block">→ The Forever Wars</Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
