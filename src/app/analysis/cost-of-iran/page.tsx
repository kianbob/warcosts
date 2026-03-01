import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'What Will Iran Cost? Projecting the Price of Operation Epic Fury',
  description: 'Iraq cost $2.4 trillion for 26 million people. Afghanistan cost $2.3 trillion for 38 million. Iran has 88 million people, a real military, and the Strait of Hormuz. The bill could reach $5-10 trillion.',
  openGraph: {
    title: 'What Will Iran Cost? Projecting the Price of Operation Epic Fury',
    description: 'Iraq: $2.4T. Afghanistan: $2.3T. Iran: 88M people, real military, Strait of Hormuz. Project cost: $5-10T.',
    url: 'https://www.warcosts.org/analysis/cost-of-iran',
  },
}

const warComparisons = [
  { war: 'Afghanistan (2001–2021)', population: '38M', cost: '$2.3T', perCapita: '$60,526', duration: '20 years', enemyForce: 'Taliban insurgents (60,000–80,000 fighters)', outcome: 'Taliban retook the country in 11 days' },
  { war: 'Iraq (2003–2011+)', population: '26M', cost: '$2.4T', perCapita: '$92,308', duration: '8+ years (occupation)', enemyForce: 'Iraqi Army (dissolved) → insurgents', outcome: 'ISIS rose from the wreckage' },
  { war: 'Iran (2026–?)', population: '88M', cost: '$5–10T+', perCapita: '$57,000–$114,000', duration: '??? years', enemyForce: '610,000 active military + 350,000 IRGC + 20M+ Basij militia', outcome: 'Unknown — and that\'s the terrifying part' },
]

const day1Costs = [
  { item: 'Tomahawk cruise missiles', unit: '$2M each', quantity: '500+ launched (est.)', subtotal: '$1B+' },
  { item: 'F-35 sorties', unit: '$42,000/flight hour', quantity: '200+ sorties (est.)', subtotal: '$50M+' },
  { item: 'F-22 sorties', unit: '$68,000/flight hour', quantity: '50+ sorties (est.)', subtotal: '$20M+' },
  { item: 'B-2 bomber missions', unit: '$130,000/flight hour', quantity: '12+ sorties (est.)', subtotal: '$10M+' },
  { item: 'Carrier strike groups (3)', unit: '$6.5M/day each', quantity: '3 groups × 2 days', subtotal: '$39M' },
  { item: 'Precision-guided munitions', unit: '$20K–$300K each', quantity: '3,000+ dropped (est.)', subtotal: '$200M+' },
  { item: 'Aerial refueling', unit: '$25,000/hour', quantity: '100+ sorties', subtotal: '$15M+' },
  { item: 'Intelligence/surveillance', unit: 'Various', quantity: 'Continuous', subtotal: '$30M+' },
]

const scenarios = [
  {
    name: '4-Week Air Campaign Only',
    cost: '$20–50B',
    assumptions: 'Sustained air and missile strikes, no ground troops, limited Iranian retaliation contained',
    likelihood: 'Unlikely to achieve regime change alone',
    historicalParallel: 'Kosovo 1999 — 78 days of NATO bombing cost ~$6B (in 2026 dollars ~$12B). Iran is 50x the size.',
  },
  {
    name: 'Air Campaign + Limited Ground Operations',
    cost: '$200B–500B (first year)',
    assumptions: 'Special forces, seizure of coastal areas, Khuzestan oil fields, limited occupation zones',
    likelihood: 'Possible but escalatory — Iran fights back harder on home soil',
    historicalParallel: 'Libya 2011 air campaign → ground chaos. But Iran has real military, not Libyan militia.',
  },
  {
    name: 'Full Occupation',
    cost: '$5–10T+ (over 10–20 years)',
    assumptions: '500,000+ troops needed (Army estimates), full reconstruction, counterinsurgency',
    likelihood: 'Would require a draft. Political impossibility — but mission creep is real.',
    historicalParallel: 'Iraq occupation: 150,000 troops for 26M people → still failed. Iran: 88M people, 3.4x larger.',
  },
  {
    name: 'Quagmire / Insurgency',
    cost: '$8–15T+ (over 20+ years)',
    assumptions: 'Initial victory → prolonged guerrilla war, IRGC goes underground, proxy attacks across region',
    likelihood: 'This is what happened in Iraq AND Afghanistan. It\'s the most likely long-term outcome.',
    historicalParallel: 'Afghanistan: 20 years, $2.3T, 2,461 US dead → Taliban won. Iran would be exponentially worse.',
  },
]

export default function CostOfIranPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Cost of Iran' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Cost Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          What Will Iran Cost?
        </h1>
        <p className="text-xl text-stone-300 mb-4">Projecting the Price of Operation Epic Fury</p>
        <p className="text-stone-400 text-lg">
          Iraq cost {fmtMoney(2_400_000_000_000)} for 26 million people. Afghanistan cost {fmtMoney(2_300_000_000_000)} for
          38 million. Iran has 88 million people — more than Iraq and Afghanistan combined — a real military with
          ballistic missiles, and control of the Strait of Hormuz. Every war costs more than projected, lasts longer
          than promised, and kills more people than anyone admits.
        </p>
      </div>

      <ShareButtons title="What Will Iran Cost?" />

      {/* AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">AI Overview — Key Data</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 Day 1-2 of strikes cost an estimated <strong className="text-white">$1.5–2.5 billion</strong> in munitions, fuel, and operations alone</li>
          <li>📊 Iran&apos;s population (88M) exceeds Iraq (26M) + Afghanistan (38M) combined — occupation would require <strong className="text-white">500,000+ troops</strong></li>
          <li>📊 Strait of Hormuz closure has already triggered oil price spikes toward <strong className="text-white">$100+/barrel</strong>, costing every American household</li>
          <li>📊 Projected total cost ranges from <strong className="text-white">$20B (air only)</strong> to <strong className="text-white">$5–10T+ (occupation)</strong></li>
          <li>📊 National debt stands at <strong className="text-white">$38T</strong> with <strong className="text-white">$1T/year</strong> in interest — America is borrowing to bomb</li>
        </ul>
      </div>

      {/* War Comparisons */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">War Cost Comparisons</h2>
        <div className="space-y-4">
          {warComparisons.map(w => (
            <div key={w.war} className="border border-stone-700 rounded-lg p-4">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{w.war}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                <div><span className="text-stone-400 text-sm">Population</span><br /><span className="text-white font-semibold">{w.population}</span></div>
                <div><span className="text-stone-400 text-sm">Total Cost</span><br /><span className="text-red-400 font-semibold">{w.cost}</span></div>
                <div><span className="text-stone-400 text-sm">Cost Per Capita</span><br /><span className="text-white font-semibold">{w.perCapita}</span></div>
                <div><span className="text-stone-400 text-sm">Duration</span><br /><span className="text-white font-semibold">{w.duration}</span></div>
                <div className="col-span-2"><span className="text-stone-400 text-sm">Enemy Force</span><br /><span className="text-white">{w.enemyForce}</span></div>
              </div>
              <p className="text-stone-400 text-sm mt-2"><em>Outcome: {w.outcome}</em></p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Most Expensive First Two Days in Military History</h2>
        <p>
          Operation Epic Fury launched at 9:15 AM Tehran time on February 28, 2026. Within 48 hours, CENTCOM announced
          over 1,000 targets struck, 48 Iranian leaders killed, and 9 Iranian naval vessels sunk. This was the most
          intensive opening strike campaign since &ldquo;Shock and Awe&rdquo; in Iraq — and it was larger.
        </p>
        <p>
          But &ldquo;Shock and Awe&rdquo; is a euphemism. What it means in financial terms is the United States burned through
          billions of dollars in the first 48 hours of combat. Every Tomahawk cruise missile costs $2 million. Every hour an
          F-35 flies costs $42,000. Every day a carrier strike group operates costs $6.5 million — and we had three of them.
        </p>
      </div>

      {/* Day 1-2 Cost Breakdown */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Estimated Day 1-2 Costs</h2>
        <div className="space-y-3">
          {day1Costs.map(c => (
            <div key={c.item} className="flex justify-between items-center border-b border-stone-700 pb-2">
              <div>
                <span className="text-white font-semibold">{c.item}</span>
                <span className="text-stone-400 text-sm ml-2">({c.unit} × {c.quantity})</span>
              </div>
              <span className="text-red-400 font-bold">{c.subtotal}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-2">
            <span className="text-white font-bold text-lg">Conservative Day 1-2 Total</span>
            <span className="text-red-400 font-bold text-lg">$1.5–2.5B</span>
          </div>
        </div>
        <p className="text-stone-400 text-sm mt-4">
          Note: This does not include classified programs, cyber operations, intelligence costs, or the economic damage
          from Strait of Hormuz closure. The true Day 1-2 cost to the American economy is likely an order of magnitude higher.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Iran Is Not Iraq. Iran Is Not Afghanistan.</h2>
        <p>
          The most dangerous assumption in Washington right now is that Iran will be like Iraq — a quick campaign followed
          by a grateful population welcoming American liberation. This assumption was wrong about Iraq. It was wrong about
          Afghanistan. It will be catastrophically wrong about Iran.
        </p>
        <p>
          Iran has <strong>88 million people</strong> — more than Iraq and Afghanistan combined. It is <strong>2.5 times the
          physical size of Iraq</strong>, with terrain that ranges from desert to mountain ranges exceeding 18,000 feet. The
          Zagros Mountains alone would make ground operations a nightmare that makes the Hindu Kush look manageable.
        </p>
        <p>
          More critically, Iran has a <strong>real military</strong>. Not a hollowed-out conscript army like Saddam&apos;s, and not
          a guerrilla insurgency like the Taliban. Iran fields 610,000 active-duty troops, 350,000 IRGC personnel, and
          can mobilize up to 20 million Basij militia members. They have ballistic missiles capable of reaching every US
          base in the Middle East — and they proved it on Day 1, firing at 27 American installations across 7 countries.
        </p>
        <p>
          Iran also has something neither Iraq nor Afghanistan had: <strong>the ability to crash the global economy</strong>.
          The Strait of Hormuz — 21 miles wide, carrying 20% of the world&apos;s oil and 20% of its LNG — was closed within
          hours of the first strike. Oil is heading past $100 a barrel. Every American pays for this at the pump, at the
          grocery store, and in their heating bills.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;Every war costs more than projected, lasts longer than promised, and kills more people than anyone admits. There
          are no exceptions in American history. Not one.&rdquo;</p>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Strait of Hormuz: The $100 Billion Side Effect</h2>
        <p>
          Even if Operation Epic Fury lasted only one week, the economic damage from the Strait of Hormuz closure would
          dwarf the direct military costs. Twenty percent of global oil and twenty percent of global LNG flows through this
          21-mile chokepoint. Iran closed it on February 28, and there is no timeline for reopening.
        </p>
        <p>
          Oil majors and top trading houses have already suspended crude shipments. Insurance premiums for tankers have tripled.
          Analysts warn oil could exceed $100 per barrel in the near term and $150 if the closure persists. For the average
          American household, this translates to:
        </p>
        <ul>
          <li><strong>Gas prices:</strong> Heading above $4/gallon nationally, $5+ in California and the Northeast</li>
          <li><strong>Food prices:</strong> 15-25% increase in food costs within 60 days (diesel-dependent supply chains)</li>
          <li><strong>Heating:</strong> LNG prices spiking globally, hitting consumers before summer cooling season</li>
          <li><strong>Inflation:</strong> CPI could jump 2-3 percentage points, reversing years of Fed tightening</li>
          <li><strong>Stock market:</strong> Markets already in correction territory; prolonged closure could trigger recession</li>
        </ul>
        <p>
          A 2023 Federal Reserve analysis estimated that every $10 increase in oil prices reduces US GDP by approximately
          0.1%. A sustained move from $70 to $120 would cut GDP by half a percentage point — roughly $130 billion in lost
          economic output annually. And that&apos;s just the direct oil effect, not accounting for the cascading impact on
          shipping, manufacturing, and consumer confidence.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Four Scenarios — All of Them Expensive</h2>
        <p>
          Trump told CNBC the campaign would take &ldquo;four weeks or less.&rdquo; This is what every president says. Bush said
          Iraq would be &ldquo;weeks, not months.&rdquo; Rumsfeld said it would cost $50 billion. It cost $2.4 trillion. Let&apos;s look
          at what Iran actually could cost under different scenarios.
        </p>
      </div>

      {/* Scenarios */}
      <div className="space-y-4 my-6">
        {scenarios.map(s => (
          <div key={s.name} className="bg-stone-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">{s.name}</h3>
              <span className="text-red-400 font-bold text-xl">{s.cost}</span>
            </div>
            <p className="text-stone-300 mb-2"><strong>Assumptions:</strong> {s.assumptions}</p>
            <p className="text-stone-300 mb-2"><strong>Likelihood:</strong> {s.likelihood}</p>
            <p className="text-stone-400 text-sm"><strong>Historical parallel:</strong> {s.historicalParallel}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Occupation Math</h2>
        <p>
          The US Army&apos;s own counterinsurgency doctrine (FM 3-24, co-authored by General Petraeus) recommends a minimum
          of 20 security personnel per 1,000 inhabitants for successful stabilization. For Iran&apos;s 88 million people,
          that&apos;s <strong>1.76 million troops</strong>. The entire US active-duty military is 1.3 million.
        </p>
        <p>
          Even at the lower ratio used in Iraq (about 6.5 per 1,000), you&apos;d need 572,000 troops dedicated to Iran alone.
          That&apos;s roughly the entire US Army. It would require either a massive buildup over years, a coalition that
          doesn&apos;t exist (no NATO ally has signed on), or — the unthinkable — reinstatement of the draft.
        </p>
        <p>
          The cost of maintaining one US soldier overseas averages $1.5 million per year when you include logistics,
          equipment, housing, medical care, and support personnel. At 500,000 troops, that&apos;s <strong>$750 billion per
          year</strong> just for personnel — before a single bullet is fired, a single building is rebuilt, or a single
          government institution is established.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The National Debt Time Bomb</h2>
        <p>
          America&apos;s national debt stands at <strong>$38 trillion</strong>. Annual interest payments have crossed
          <strong> $1 trillion</strong> — more than the entire defense budget. The US is already spending more on debt
          service than on Medicare, education, or veterans&apos; benefits.
        </p>
        <p>
          The wars in Iraq and Afghanistan were largely financed with borrowed money. Not a single war tax was enacted.
          The result: those $4.7 trillion in direct costs will ultimately cost $8+ trillion when interest is included,
          according to Brown University&apos;s Costs of War Project. We are still paying for wars that ended (or didn&apos;t end)
          years ago.
        </p>
        <p>
          Now add Iran. If Operation Epic Fury escalates to even a fraction of Iraq&apos;s cost — say, $3 trillion over
          a decade — the interest burden alone would add another $1.5 trillion over 30 years. That&apos;s money that can&apos;t go
          to infrastructure, healthcare, education, or Social Security. It&apos;s money extracted from future Americans
          to pay for a war their parents and grandparents never voted for.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;The question isn&apos;t whether we can afford to go to war with Iran. The question is whether we can afford to
          survive it. At $38 trillion in debt and $1 trillion a year in interest, we are already drowning. Iran would be
          the anchor.&rdquo;</p>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Hidden Costs Nobody Talks About</h2>
        <p>
          Direct military spending is only part of the bill. The wars in Iraq and Afghanistan taught us that the true
          costs emerge over decades:
        </p>
        <ul>
          <li><strong>Veteran healthcare:</strong> The VA estimates $2.5 trillion in future healthcare costs for post-9/11
          veterans. Iran would add millions more claims over 40+ years.</li>
          <li><strong>Disability compensation:</strong> 44% of post-9/11 veterans have a service-connected disability rating.
          Lifetime disability payments could exceed $1 trillion for Iran veterans alone.</li>
          <li><strong>Mental health:</strong> 17 veterans die by suicide every day. PTSD rates for combat veterans exceed 20%.
          The psychological toll is incalculable but the treatment costs are real.</li>
          <li><strong>Equipment replacement:</strong> Iraq and Afghanistan destroyed or wore out $500+ billion in vehicles,
          aircraft, and equipment. Iran&apos;s anti-ship missiles have already sunk/damaged vessels in the Gulf.</li>
          <li><strong>Diplomatic costs:</strong> Allies alienated, alliances strained, soft power destroyed. The Iraq War
          cost the US immeasurable diplomatic capital. Iran is even more controversial internationally.</li>
          <li><strong>Opportunity cost:</strong> Every dollar spent on war is a dollar not spent on infrastructure, education,
          healthcare, or climate. The US has a $4.6 trillion infrastructure gap (ASCE). Iran could cost more than fixing it.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">What History Actually Tells Us</h2>
        <p>
          Every major American war has cost more than projected. Every single one.
        </p>
        <ul>
          <li><strong>Iraq:</strong> Rumsfeld projected $50 billion. Actual cost: $2.4 trillion (48x over).</li>
          <li><strong>Afghanistan:</strong> No one projected 20 years. Actual cost: $2.3 trillion.</li>
          <li><strong>Vietnam:</strong> Kennedy sent &ldquo;advisors.&rdquo; 58,281 Americans came home in body bags.</li>
          <li><strong>Korea:</strong> MacArthur said the boys would be home by Christmas. The war lasted 3 years; 36,574 Americans died.</li>
        </ul>
        <p>
          Trump says Iran will take &ldquo;four weeks or less.&rdquo; History doesn&apos;t believe him. History has never
          believed any president who said that.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line</h2>
        <p>
          Here is the range of what Iran will cost American taxpayers:
        </p>
      </div>

      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-stone-400 text-sm">Best Case (4 weeks)</p>
            <p className="text-red-400 font-bold text-2xl">$20–50B</p>
            <p className="text-stone-500 text-xs">Air campaign only</p>
          </div>
          <div>
            <p className="text-stone-400 text-sm">Likely Case (1–3 years)</p>
            <p className="text-red-400 font-bold text-2xl">$500B–2T</p>
            <p className="text-stone-500 text-xs">Limited ground ops</p>
          </div>
          <div>
            <p className="text-stone-400 text-sm">Bad Case (5–10 years)</p>
            <p className="text-red-400 font-bold text-2xl">$3–5T</p>
            <p className="text-stone-500 text-xs">Occupation attempt</p>
          </div>
          <div>
            <p className="text-stone-400 text-sm">Worst Case (10–20 years)</p>
            <p className="text-red-400 font-bold text-2xl">$8–15T</p>
            <p className="text-stone-500 text-xs">Insurgency quagmire</p>
          </div>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <p>
          Add the economic damage from Strait of Hormuz closure — potentially hundreds of billions in GDP lost — and the
          true cost to America is staggering regardless of the military outcome.
        </p>
        <p>
          This is what they don&apos;t tell you when they say &ldquo;four weeks or less.&rdquo; This is the bill that arrives
          after the flags stop waving and the cameras go home. And it&apos;s a bill that your children and grandchildren
          will still be paying.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/iran-2026">Iran 2026: Another Undeclared War?</Link></li>
          <li><Link href="/analysis/hormuz-crisis">The Strait of Hormuz Crisis</Link></li>
          <li><Link href="/analysis/what-could-we-buy">What $11.6 Trillion Could Have Bought Instead</Link></li>
          <li><Link href="/analysis/war-profiteering">War Is a Racket: Who Gets Rich</Link></li>
          <li><Link href="/analysis/forever-wars">The Forever Wars</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
