import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleSchema from '@/components/ArticleSchema'
import RelatedArticles from '@/components/RelatedArticles'

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
  { war: 'Afghanistan (2001–2021)', population: '38M', cost: '$2.3T', perCapita: '$60,526', duration: '20 years', enemyForce: 'Taliban insurgents (60,000–80,000 fighters)', outcome: 'Taliban retook the country in 11 days', casualties: '2,461 US KIA, 176,000+ total', lessons: 'Nation-building impossible in tribal society. Corruption destroyed legitimacy. Pakistan safe haven.' },
  { war: 'Iraq (2003–2011+)', population: '26M', cost: '$2.4T', perCapita: '$92,308', duration: '8+ years (occupation)', enemyForce: 'Iraqi Army (dissolved) → insurgents', outcome: 'ISIS emerged, Iran empowered', casualties: '4,431 US KIA, 500,000+ total', lessons: 'De-Baathification created insurgency. Sectarian civil war. Regional destabilization.' },
  { war: 'Iran (2026–?)', population: '88M', cost: '$5–10T+', perCapita: '$57,000–$114,000', duration: '??? years', enemyForce: '610,000 active military + 350,000 IRGC + 20M+ Basij militia', outcome: 'Unknown — and that\'s the terrifying part', casualties: 'TBD', lessons: 'Every war costs more than projected, lasts longer than promised, kills more than admitted.' },
]

const day1Costs = [
  { item: 'Tomahawk cruise missiles', unit: '$2M each', quantity: '500+ launched (est.)', subtotal: '$1B+', details: 'Block IV missiles from destroyers, submarines. High-value target strikes.' },
  { item: 'F-35 sorties', unit: '$42,000/flight hour', quantity: '200+ sorties (est.)', subtotal: '$50M+', details: 'Stealth fighters for IADS suppression, high-value targets.' },
  { item: 'F-22 sorties', unit: '$68,000/flight hour', quantity: '50+ sorties (est.)', subtotal: '$20M+', details: 'Air superiority missions over Iran airspace.' },
  { item: 'B-2 bomber missions', unit: '$130,000/flight hour', quantity: '12+ sorties (est.)', subtotal: '$10M+', details: 'Long-range strikes from CONUS. Bunker-busting missions.' },
  { item: 'Carrier strike groups (3)', unit: '$6.5M/day each', quantity: '3 groups × 2 days', subtotal: '$39M', details: 'USS Gerald R. Ford, USS Nimitz, USS Abraham Lincoln' },
  { item: 'Precision-guided munitions', unit: '$20K–$300K each', quantity: '3,000+ dropped (est.)', subtotal: '$200M+', details: 'JDAMs, JASSMs, bunker busters, anti-ship missiles' },
  { item: 'Aerial refueling', unit: '$25,000/hour', quantity: '100+ sorties', subtotal: '$15M+', details: 'KC-135, KC-46 tanker operations' },
  { item: 'Intelligence/surveillance', unit: 'Various', quantity: 'Continuous', subtotal: '$30M+', details: 'Satellite tasking, SIGINT, drone operations' },
  { item: 'Cyber operations', unit: 'Classified', quantity: 'Continuous', subtotal: '$50M+ (est.)', details: 'Infrastructure attacks, command disruption' },
  { item: 'Special operations', unit: '$2M/mission (est.)', quantity: '20+ missions', subtotal: '$40M+', details: 'Decapitation strikes, sabotage operations' }
]

const dailyBurnRates = [
  { phase: 'Initial Strikes (Days 1-7)', dailyCost: '$2.5B', description: 'Maximum intensity air campaign. 500+ Tomahawks/day, 200+ fighter sorties, B-2 missions from CONUS.', comparison: 'Higher than Iraq "Shock and Awe" adjusted for inflation.' },
  { phase: 'Sustained Air Campaign (Days 8-30)', dailyCost: '$800M', description: 'Continued strikes on military targets, infrastructure, leadership. Reduced sortie rate as initial targets destroyed.', comparison: '2x Kosovo campaign daily spend (1999).' },
  { phase: 'Air Campaign + Maritime (Days 31-90)', dailyCost: '$1.2B', description: 'Air operations + naval blockade + Strait of Hormuz control. Higher naval operations tempo.', comparison: '1.5x current Middle East operations.' },
  { phase: 'Limited Ground Ops (Month 4+)', dailyCost: '$1.8B', description: 'Special forces, coastal occupation, oil facility seizure. 50,000+ troops deployed.', comparison: 'Iraq 2003-2004 levels.' },
  { phase: 'Full Occupation (Year 1+)', dailyCost: '$4.5B', description: '500,000+ troops, nation-building, counterinsurgency, reconstruction.', comparison: 'Iraq/Afghanistan peak combined.' },
  { phase: 'Insurgency Phase (Years 2-10)', dailyCost: '$6B', description: 'Urban warfare, IED campaigns, Iranian guerrilla war, regional proxy conflicts.', comparison: 'No historical parallel at this scale.' }
]

const scenarios = [
  {
    name: '4-Week Air Campaign Only',
    cost: '$20–50B',
    probability: '15%',
    assumptions: 'Sustained air and missile strikes, no ground troops, limited Iranian retaliation contained, regime collapse or surrender',
    likelihood: 'Unlikely to achieve regime change alone. Iran has extensive underground facilities, mobile assets.',
    historicalParallel: 'Kosovo 1999 — 78 days of NATO bombing cost ~$6B (in 2026 dollars ~$12B). Iran is 50x the size with real air defenses.',
    keyRisks: [
      'Iranian missile strikes on Gulf allies could trigger Article 5 equivalent',
      'Strait of Hormuz closure causes global recession',
      'Iran goes nuclear quickly with existing enriched uranium',
      'Russia/China provide advanced air defense systems'
    ],
    exitStrategy: 'Iran agrees to ceasefire, nuclear program elimination. Unlikely given regime survival at stake.'
  },
  {
    name: 'Air Campaign + Limited Ground Operations',
    cost: '$200B–500B (first year)',
    probability: '35%',
    assumptions: 'Special forces, seizure of coastal areas, Khuzestan oil fields, limited occupation zones, Iranian military degraded but functional',
    likelihood: 'Possible but escalatory — Iran fights back harder on home soil. Regional war likely.',
    historicalParallel: 'Libya 2011 air campaign → ground chaos. But Iran has real military, not Libyan militia.',
    keyRisks: [
      'Iran activates Hezbollah (150,000+ rockets) against Israel',
      'Iraqi Shia militias attack US forces in Iraq',
      'Houthis escalate Red Sea attacks, close Suez Canal',
      'Regional oil infrastructure becomes targets'
    ],
    exitStrategy: 'Limited goals achieved, Iranian nuclear program destroyed, regime weakened but survives.'
  },
  {
    name: 'Full Occupation',
    cost: '$5–10T+ (over 10–20 years)',
    probability: '25%',
    assumptions: '500,000+ troops needed (Army estimates), full reconstruction, counterinsurgency, Iran partitioned',
    likelihood: 'Would require a draft. Political impossibility — but mission creep is real.',
    historicalParallel: 'Iraq occupation: 150,000 troops for 26M people → still failed. Iran: 88M people, 3.4x larger, mountainous terrain.',
    keyRisks: [
      'Draft implementation triggers domestic unrest',
      'Chinese/Russian military aid to Iranian resistance',
      'Nuclear weapons smuggled to insurgent groups',
      'US military stretched beyond breaking point'
    ],
    exitStrategy: 'None. Occupation would be permanent or result in failed state.'
  },
  {
    name: 'Quagmire / Insurgency',
    cost: '$8–15T+ (over 20+ years)',
    probability: '25%',
    assumptions: 'Initial victory → prolonged guerrilla war, IRGC goes underground, proxy attacks across region, Iran becomes Syria/Iraq hybrid',
    likelihood: 'This is what happened in Iraq AND Afghanistan. It\'s the most likely long-term outcome.',
    historicalParallel: 'Afghanistan: 20 years, $2.3T, 2,461 US dead → Taliban won. Iran would be exponentially worse.',
    keyRisks: [
      'Iran\'s 88M population vs Iraq\'s 26M in 2003',
      'Persian nationalism vs artificial Iraqi state',
      'Shia theocracy with regional proxies',
      'Chinese/Russian great power competition'
    ],
    exitStrategy: 'Strategic defeat and withdrawal after 10-20 years, Iran returns to regional power status.'
  }
]

const hormuzEconomicImpact = [
  { metric: 'Oil transit', daily: '21M barrels/day', percentage: '20% of global supply', value: '$2.1B/day at current prices', impact: 'Closure adds $30-50/barrel premium' },
  { metric: 'LNG transit', daily: '100M cubic feet/day', percentage: '20% of global LNG', value: '$500M/day', impact: 'Winter heating costs spike 50-100%' },
  { metric: 'Global GDP impact', daily: '$400B lost output', percentage: '1.2% of global GDP annually', value: 'Recession if closure >90 days', impact: 'Synchronized global slowdown' },
  { metric: 'US gasoline', daily: '$2M additional cost', percentage: '$4-5/gallon national avg', value: '$150B annually in consumer costs', impact: '2% drag on consumer spending' },
  { metric: 'Shipping insurance', daily: 'Market paralysis', percentage: 'Premiums increase 10x', value: 'Many insurers exit market', impact: 'Physical supply disruption' },
  { metric: 'Strategic reserves', daily: '1M barrels released (US)', percentage: '90-day supply at current pace', value: 'Reserves depleted in 3 months', impact: 'No buffer for extended conflict' }
]

const occupationMath = [
  { metric: 'Population', iran: '88M', iraq: '26M', afghanistan: '38M', multiplier: '2.3x Iraq + Afghanistan combined' },
  { metric: 'Area (sq km)', iran: '1,648,000', iraq: '438,000', afghanistan: '652,000', multiplier: '1.5x Iraq + Afghanistan combined' },
  { metric: 'Troops needed (20:1000 ratio)', iran: '1,760,000', iraq: '520,000', afghanistan: '760,000', multiplier: '1.4x total US active duty military' },
  { metric: 'Troops needed (6.5:1000 ratio)', iran: '572,000', iraq: '169,000', afghanistan: '247,000', multiplier: '1.4x total US Army' },
  { metric: 'Annual cost per soldier', iran: '$1.5M', iraq: '$1.5M', afghanistan: '$1.5M', multiplier: 'Includes logistics, support, equipment' },
  { metric: 'Total annual personnel cost', iran: '$858B (6.5:1000)', iraq: '$254B', afghanistan: '$371B', multiplier: '1.4x total DoD budget' }
]

const debtImpact = [
  { metric: 'Current national debt', amount: '$38T', trend: 'Increasing $1T/year', context: '120% of GDP' },
  { metric: 'Annual interest payments', amount: '$1T+', trend: 'Exceeds defense spending', context: 'Fastest growing budget item' },
  { metric: 'Interest rate impact', amount: '1% increase = $380B/year', trend: 'Fed fighting inflation', context: 'War spending inflationary' },
  { metric: 'Iran war financing', amount: 'All borrowed money', trend: 'No war taxes proposed', context: 'Same as Iraq/Afghanistan' },
  { metric: 'Total interest cost (20-year)', amount: '$8T+ (Iran alone)', trend: 'Compounds at 4-6%', context: 'Doubles actual war cost' },
  { metric: 'Fiscal sustainability', amount: 'Breaking point', trend: 'Debt spiral begins', context: 'Dollar reserve status at risk' }
]

const hiddenCosts = [
  {
    category: 'Veteran Healthcare',
    immediate: '$0',
    lifetime: '$2.5T+',
    description: 'VA medical care for Iran veterans over 40+ years. Current post-9/11 veterans have 44% disability rating.',
    details: 'Iran casualties likely higher due to real military opposition, chemical weapons, urban warfare.'
  },
  {
    category: 'Disability Compensation',
    immediate: '$0',
    lifetime: '$1.5T+',
    description: 'Monthly disability payments for wounded veterans. Average rating 70%, $1,500/month for life.',
    details: 'Based on 500K deployed, 15% casualty rate, 40-year average lifespan post-service.'
  },
  {
    category: 'Equipment Replacement',
    immediate: '$500B',
    lifetime: '$500B',
    description: 'Vehicles, aircraft destroyed or worn out. Iran has advanced anti-tank/anti-air weapons.',
    details: 'Iraq/Afghanistan destroyed $500B+ in equipment. Iran war would be far more intensive.'
  },
  {
    category: 'Gold Star Benefits',
    immediate: '$5B',
    lifetime: '$50B',
    description: 'Death gratuity, survivor benefits for 10,000+ estimated KIA.',
    details: 'Based on Iraq casualty rates scaled for Iranian military capability.'
  },
  {
    category: 'Reconstruction',
    immediate: '$100B',
    lifetime: '$2T+',
    description: 'Rebuilding Iranian infrastructure destroyed in air campaign. Iran more developed than Iraq/Afghanistan.',
    details: 'Marshall Plan cost $130B (2024 dollars). Iran has 88M people vs 16M in Marshall Plan countries.'
  },
  {
    category: 'Opportunity Cost',
    immediate: '$∞',
    lifetime: '$∞',
    description: 'Infrastructure, education, healthcare not built while money spent on war.',
    details: 'US has $4.6T infrastructure gap. Iran war would consume funds for domestic needs.'
  }
]

const historicalCostErrors = [
  { war: 'Iraq War', projected: '$50B (Rumsfeld)', actual: '$2.4T', error: '4,800%', quote: '"We\'re talking about a country that can really finance its own reconstruction." - Paul Wolfowitz' },
  { war: 'Afghanistan', projected: 'No long-term estimate given', actual: '$2.3T', error: 'N/A', quote: '"We will finish the work that needs to be done." - Bush, 2002' },
  { war: 'Vietnam War', projected: '$500M/year (1965)', actual: '$120B/year (peak)', error: '24,000%', quote: '"Light at the end of the tunnel" - General Westmoreland' },
  { war: 'Korean War', projected: '"Home by Christmas" (MacArthur)', actual: '3 years, $30B', error: '∞%', quote: '"The war in Korea has already been won." - MacArthur, Nov 1950' },
  { war: 'World War I', projected: '"Over by Christmas" (all sides)', actual: '4 years, $208B+', error: '∞%', quote: '"You will be home before the leaves have fallen." - Kaiser Wilhelm II' },
  { war: 'Iran War', projected: '"Four weeks or less" (Trump)', actual: '$5-10T+ (projected)', error: 'TBD', quote: '"Iran knows that if they do anything bad, they\'ll pay a price like few countries have ever paid." - Trump' }
]

const regionWideImpacts = [
  {
    country: 'Saudi Arabia',
    population: '35M',
    impact: 'Iranian missiles target oil facilities. Production drops 50%. Royal family considers nuclear program.',
    economicCost: '$500B in lost oil revenue',
    refugees: 'Shia minority (10-15%) faces persecution'
  },
  {
    country: 'UAE',
    population: '10M',
    impact: 'Dubai financial center bombed. Banking system disrupted. Expatriate population flees.',
    economicCost: '$1T in capital flight',
    refugees: '2M+ expatriates evacuated'
  },
  {
    country: 'Iraq',
    population: '44M',
    impact: 'Shia militias attack US bases. Civil war resumes. Country partitions.',
    economicCost: '$200B in renewed conflict',
    refugees: '5M+ internal displacement'
  },
  {
    country: 'Syria',
    population: '23M',
    impact: 'Israeli strikes on Iranian forces escalate. Russian forces targeted. Regional war spreads.',
    economicCost: '$100B in renewed conflict',
    refugees: '3M+ additional refugees'
  },
  {
    country: 'Lebanon',
    population: '5M',
    impact: 'Hezbollah fires 150,000 rockets at Israel. Country destroyed in Israeli retaliation.',
    economicCost: '$50B+ reconstruction needed',
    refugees: '2M+ flee to Syria/Europe'
  },
  {
    country: 'Israel',
    population: '9M',
    impact: 'Under sustained rocket/missile attack. Northern cities evacuated. Considering nuclear response.',
    economicCost: '$200B in war costs/damage',
    refugees: '1M+ internal displacement'
  },
  {
    country: 'Pakistan',
    population: '240M',
    impact: 'Border tensions with Iran. Taliban infiltration from Afghanistan. Nuclear weapons at risk.',
    economicCost: '$100B+ in instability',
    refugees: '5M+ Afghan refugees return'
  },
  {
    country: 'Turkey',
    population: '85M',
    impact: 'Kurdish independence movements. Russian relationship strained. NATO Article 5 pressure.',
    economicCost: '$200B+ in regional instability',
    refugees: '2M+ from Syria/Iraq conflicts'
  }
]

const faqItems = [
  {
    question: 'Why does every war cost more than projected?',
    answer: 'Political incentives. Leaders need wars to start, so they lowball costs to get Congressional approval. Once troops are deployed, it\'s politically impossible to stop funding them - "support the troops" becomes the only argument that matters. Military contractors have incentives to extend conflicts to maximize profits. Mission creep expands objectives beyond initial goals. Enemy adaptation forces more expensive responses.'
  },
  {
    question: 'Could the US afford a $10 trillion war?',
    answer: 'No. The US is already borrowing $1 trillion annually just to pay interest on existing debt. A $10T war would require either massive tax increases (political suicide), massive money printing (hyperinflation), or cuts to Social Security/Medicare (political suicide). The dollar\'s reserve currency status would be at risk if debt reached 200%+ of GDP.'
  },
  {
    question: 'How does the Strait of Hormuz closure compare to other economic shocks?',
    answer: 'Worse than the 1973 oil embargo (5 million barrels/day disrupted vs 21 million), worse than the 2008 financial crisis (which cost $13T globally), comparable only to COVID-19 pandemic in terms of simultaneous supply and demand destruction. Unlike those crises, this one is intentionally maintained by military action.'
  },
  {
    question: 'What would happen to oil prices?',
    answer: 'Strategic Petroleum Reserve releases could moderate prices temporarily, but reserves would be exhausted in 90 days. Without Strait of Hormuz, oil could reach $150-200/barrel. At $150/barrel, US gasoline averages $6-7/gallon, diesel hits $8/gallon, heating oil/jet fuel spike proportionally. This would trigger recession larger than 2008.'
  },
  {
    question: 'Why can\'t the US just reopen the Strait?',
    answer: 'Iran has thousands of anti-ship missiles, naval mines, small boat swarms, coastal artillery, and submarine threats across 21 miles of water. The US Navy estimates it would take 30+ days of continuous operations to clear the Strait, assuming Iran doesn\'t continuously re-mine it. During those 30 days, oil markets would be in panic mode.'
  },
  {
    question: 'Would Iran really be harder than Iraq and Afghanistan?',
    answer: 'Exponentially harder. Iraq had 26M people, a conscript army that collapsed immediately, flat desert terrain, and was weakened by a decade of sanctions. Afghanistan had 38M people but no real military, just guerrilla fighters. Iran has 88M people, a real military with advanced weapons, mountainous terrain, nationalist cohesion, and no sanctions-weakened infrastructure to collapse quickly.'
  },
  {
    question: 'Could the US withdraw quickly if things went badly?',
    answer: 'No. The same factors that make it hard to win make it hard to leave. Iran would see US withdrawal as victory and increase regional aggression. Gulf allies would lose confidence in US protection and might pursue their own nuclear programs. Withdrawal under fire would be seen as strategic defeat worse than Afghanistan, damaging US credibility globally.'
  },
  {
    question: 'Who would pay for an Iran war?',
    answer: 'American taxpayers, through debt. No war taxes have been proposed. The last time the US raised taxes to pay for war was World War II. Iraq and Afghanistan were entirely debt-financed. Iran would be the same - borrowing money to bomb another country, with the bill sent to future generations.'
  }
]

export default function CostOfIranPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Cost of Iran' }]} />
      <ArticleSchema 
        title="What Will Iran Cost? Projecting the Price of Operation Epic Fury" 
        description="Iraq cost $2.4 trillion for 26 million people. Afghanistan cost $2.3 trillion for 38 million. Iran has 88 million people, a real military, and the Strait of Hormuz." 
        url="/analysis/cost-of-iran" 
      />
      
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
          ballistic missiles, and control of the Strait of Hormuz. The pattern never changes: politicians lowball
          the costs to start wars, then claim they can&apos;t stop funding them because we must &ldquo;support the troops.&rdquo;
          Every war costs more than projected, lasts longer than promised, and kills more people than anyone admits.
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
          <li>📊 Pentagon confirmed to Congress: first 6 days cost <strong className="text-white">$11.3 billion</strong> — $1.88 billion per day, $21,800 per second. Through Day 13: estimated <strong className="text-white">~$24.5 billion</strong></li>
          <li>📊 Iran&apos;s population (88M) exceeds Iraq (26M) + Afghanistan (38M) combined — occupation would require <strong className="text-white">572,000+ troops</strong></li>
          <li>📊 Strait of Hormuz closure costs global economy <strong className="text-white">$400B/day</strong> in lost output, oil at $150+/barrel</li>
          <li>📊 Projected total cost ranges from <strong className="text-white">$20B (air only)</strong> to <strong className="text-white">$5–15T+ (occupation/insurgency)</strong></li>
          <li>📊 National debt stands at <strong className="text-white">$38T</strong> with <strong className="text-white">$1T/year</strong> in interest — America is borrowing to bomb</li>
          <li>📊 Historical error rate: wars cost <strong className="text-white">50-240x</strong> more than initial projections</li>
          <li>📊 Hidden lifetime costs: <strong className="text-white">$6T+</strong> in veteran care, disability, reconstruction over 40+ years</li>
        </ul>
      </div>

      {/* War Comparisons */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">War Cost Comparisons: Iran vs. Recent Conflicts</h2>
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
              <div className="mt-3 grid md:grid-cols-2 gap-3">
                <div>
                  <p className="text-stone-400 text-sm"><strong>Outcome:</strong> {w.outcome}</p>
                  <p className="text-stone-400 text-sm"><strong>Casualties:</strong> {w.casualties}</p>
                </div>
                <div>
                  <p className="text-stone-400 text-sm"><strong>Key Lessons:</strong> {w.lessons}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Most Expensive First 48 Hours in Military History</h2>
        <p>
          Operation Epic Fury launched at 9:15 AM Tehran time on February 28, 2026. Within 48 hours, CENTCOM announced
          over 1,000 targets struck, 48 Iranian leaders killed, and 9 Iranian naval vessels sunk. This was the most
          intensive opening strike campaign since "Shock and Awe" in Iraq — and it was exponentially more expensive.
        </p>
        <p>
          Every Tomahawk cruise missile costs $2 million. Every hour an F-35 flies costs $42,000. Every B-2 bomber
          mission from Missouri to Iran costs $130,000 per flight hour — and the round trip takes 20+ hours.
          The United States burned through more money in 48 hours than most countries spend on defense in a year.
        </p>
      </div>

      {/* Day 1-2 Cost Breakdown */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Operation Epic Fury: Days 1-2 Cost Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left text-white pb-2">Item</th>
                <th className="text-center text-white pb-2">Unit Cost</th>
                <th className="text-center text-white pb-2">Quantity</th>
                <th className="text-right text-white pb-2">Subtotal</th>
                <th className="text-left text-stone-400 pb-2">Details</th>
              </tr>
            </thead>
            <tbody className="text-stone-300">
              {day1Costs.map(c => (
                <tr key={c.item} className="border-b border-stone-800">
                  <td className="py-2 font-semibold">{c.item}</td>
                  <td className="text-center py-2">{c.unit}</td>
                  <td className="text-center py-2">{c.quantity}</td>
                  <td className="text-right py-2 font-bold text-red-400">{c.subtotal}</td>
                  <td className="py-2 text-xs">{c.details}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-stone-600 font-bold">
                <td className="py-3 text-white text-lg">Estimated Day 1-2 Total</td>
                <td className="text-center py-3"></td>
                <td className="text-center py-3"></td>
                <td className="text-right py-3 text-red-400 text-lg">$2.5–3.5B</td>
                <td className="py-3 text-xs"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-red-950/30 border border-red-900/50 rounded-lg">
          <p className="text-red-400 font-semibold text-sm mb-2">⚠️ This excludes:</p>
          <ul className="text-stone-300 text-sm space-y-1">
            <li>• Classified programs (cyber operations, special operations, intelligence)</li>
            <li>• Economic damage from Strait of Hormuz closure ($400B+ daily)</li>
            <li>• Oil price spike costs passed to consumers</li>
            <li>• Losses from Iranian retaliation (damaged bases, ships, aircraft)</li>
            <li>• Coalition partner expenses</li>
            <li>• Interest on borrowed money to fund operations</li>
          </ul>
          <p className="text-stone-300 text-sm mt-3">
            The true Day 1-2 cost to the American economy is likely <strong className="text-red-400">$50-100+ billion</strong> when economic disruption is included.
          </p>
        </div>
      </div>

      {/* Daily Burn Rates */}
      <div className="bg-stone-900 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Daily Military Spending by Phase</h2>
        <div className="space-y-4">
          {dailyBurnRates.map((phase, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-semibold">{phase.phase}</h3>
                <span className="text-red-400 font-bold text-xl">{phase.dailyCost}</span>
              </div>
              <p className="text-stone-300 text-sm mb-2">{phase.description}</p>
              <p className="text-stone-500 text-xs"><strong>Historical comparison:</strong> {phase.comparison}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-stone-800 rounded-lg">
          <p className="text-white font-semibold mb-2">Cumulative Cost Projections:</p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-stone-400">30-day air campaign: <span className="text-red-400 font-bold">$30-40B</span></p>
              <p className="text-stone-400">90-day limited ops: <span className="text-red-400 font-bold">$100-150B</span></p>
              <p className="text-stone-400">1-year occupation: <span className="text-red-400 font-bold">$1.6T</span></p>
            </div>
            <div>
              <p className="text-stone-400">5-year insurgency: <span className="text-red-400 font-bold">$11T</span></p>
              <p className="text-stone-400">10-year quagmire: <span className="text-red-400 font-bold">$22T</span></p>
              <p className="text-stone-400">20-year disaster: <span className="text-red-400 font-bold">$44T</span></p>
            </div>
          </div>
        </div>
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
          hours of the first strike. This isn&apos;t just an American war anymore. It&apos;s a global economic catastrophe.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;Every war costs more than projected, lasts longer than promised, and kills more people than anyone admits. There
          are no exceptions in American history. Not one.&rdquo;</p>
        </blockquote>
      </div>

      {/* Strait of Hormuz Economic Impact */}
      <div className="bg-red-950/20 border border-red-900/50 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Strait of Hormuz: Economic Weapon of Mass Destruction</h2>
        <p className="text-stone-300 mb-4">
          Even if Operation Epic Fury lasted only one week, the economic damage from the Strait of Hormuz closure would
          dwarf the direct military costs. This 21-mile chokepoint is the jugular vein of the global economy.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-red-900/50">
                <th className="text-left text-white pb-2">Metric</th>
                <th className="text-center text-white pb-2">Daily Volume</th>
                <th className="text-center text-white pb-2">% of Global</th>
                <th className="text-right text-white pb-2">Daily Value</th>
                <th className="text-left text-stone-300 pb-2">Closure Impact</th>
              </tr>
            </thead>
            <tbody className="text-stone-300">
              {hormuzEconomicImpact.map((item, i) => (
                <tr key={i} className="border-b border-red-900/30">
                  <td className="py-2 font-semibold">{item.metric}</td>
                  <td className="text-center py-2">{item.daily}</td>
                  <td className="text-center py-2">{item.percentage}</td>
                  <td className="text-right py-2 text-red-400 font-semibold">{item.value}</td>
                  <td className="py-2 text-xs">{item.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-red-900/20 rounded-lg">
          <h3 className="text-red-400 font-semibold mb-2">Cascading Effects</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-stone-300 mb-1"><strong>30 days:</strong> Global recession likely</p>
              <p className="text-stone-300 mb-1"><strong>90 days:</strong> Strategic reserves exhausted</p>
              <p className="text-stone-300 mb-1"><strong>180 days:</strong> Industrial production collapses</p>
            </div>
            <div>
              <p className="text-stone-300 mb-1"><strong>US impact:</strong> $6-7/gal gasoline, 3%+ inflation</p>
              <p className="text-stone-300 mb-1"><strong>EU impact:</strong> Rationing, industrial shutdowns</p>
              <p className="text-stone-300 mb-1"><strong>Asia impact:</strong> Manufacturing supply chains break</p>
            </div>
          </div>
        </div>
      </div>

      {/* Four Scenarios */}
      <div className="bg-stone-900 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Four Scenarios — All of Them Expensive</h2>
        <p className="text-stone-300 mb-4">
          Trump told CNBC the campaign would take "four weeks or less." This is what every president says. Bush said
          Iraq would be "weeks, not months." Rumsfeld said it would cost $50 billion. It cost $2.4 trillion.
        </p>
        <div className="space-y-4">
          {scenarios.map(s => (
            <details key={s.name} className="border border-stone-700 rounded-lg">
              <summary className="p-4 cursor-pointer hover:bg-stone-800/50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">{s.name}</h3>
                    <p className="text-stone-400 text-sm">Probability: {s.probability}</p>
                  </div>
                  <span className="text-red-400 font-bold text-xl">{s.cost}</span>
                </div>
              </summary>
              <div className="px-4 pb-4 space-y-3">
                <div>
                  <p className="text-stone-300 mb-2"><strong>Assumptions:</strong> {s.assumptions}</p>
                  <p className="text-stone-300 mb-2"><strong>Likelihood:</strong> {s.likelihood}</p>
                  <p className="text-stone-400 text-sm"><strong>Historical parallel:</strong> {s.historicalParallel}</p>
                </div>
                <div className="bg-red-950/30 rounded p-3">
                  <h4 className="text-red-400 font-semibold text-sm mb-2">Key Escalation Risks:</h4>
                  <ul className="text-stone-300 text-sm space-y-1">
                    {s.keyRisks.map((risk, i) => (
                      <li key={i}>• {risk}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-stone-800 rounded p-3">
                  <p className="text-stone-400 text-sm"><strong>Exit Strategy:</strong> {s.exitStrategy}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Occupation Math: Why Iran Would Break the US Military</h2>
        <p>
          The US Army&apos;s own counterinsurgency doctrine (FM 3-24, co-authored by General Petraeus) recommends a minimum
          of 20 security personnel per 1,000 inhabitants for successful stabilization. For Iran&apos;s 88 million people,
          that&apos;s <strong>1.76 million troops</strong>. The entire US active-duty military is 1.3 million.
        </p>
      </div>

      {/* Occupation Mathematics */}
      <div className="bg-stone-900 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">Occupation Requirements: The Impossible Math</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left text-white pb-2">Metric</th>
                <th className="text-center text-white pb-2">Iran</th>
                <th className="text-center text-white pb-2">Iraq (2003)</th>
                <th className="text-center text-white pb-2">Afghanistan</th>
                <th className="text-right text-white pb-2">Multiplier</th>
              </tr>
            </thead>
            <tbody className="text-stone-300">
              {occupationMath.map((item, i) => (
                <tr key={i} className="border-b border-stone-800">
                  <td className="py-2 font-semibold">{item.metric}</td>
                  <td className="text-center py-2">{item.iran}</td>
                  <td className="text-center py-2">{item.iraq}</td>
                  <td className="text-center py-2">{item.afghanistan}</td>
                  <td className="text-right py-2 text-red-400 font-semibold">{item.multiplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-red-950/30 border border-red-900/50 rounded-lg">
          <h3 className="text-red-400 font-semibold mb-2">The Bottom Line</h3>
          <p className="text-stone-300 text-sm">
            Even using the lower 6.5:1000 ratio (which failed in Iraq), occupying Iran would require <strong>572,000 troops</strong> — 
            more than the entire US Army (485,000 active duty). At $1.5M per soldier per year, that&apos;s 
            <strong>$858 billion annually</strong> just for personnel costs, before equipment, operations, or reconstruction.
          </p>
          <p className="text-stone-300 text-sm mt-2">
            This would require either a draft (political impossibility), NATO allies providing hundreds of thousands of troops 
            (they won&apos;t), or accepting strategic failure (most likely outcome).
          </p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The National Debt Time Bomb: Borrowing to Bomb</h2>
        <p>
          America&apos;s national debt stands at <strong>$38 trillion</strong>. Annual interest payments have crossed
          <strong> $1 trillion</strong> — more than the entire defense budget. The US is already spending more on debt
          service than on Medicare, education, or veterans&apos; benefits.
        </p>
        <p>
          The wars in Iraq and Afghanistan were entirely financed with borrowed money. Not a single war tax was enacted.
          The result: those $4.7 trillion in direct costs will ultimately cost $8+ trillion when interest is included.
          We are still paying for wars that ended (or didn&apos;t end) years ago.
        </p>
      </div>

      {/* Debt Impact Analysis */}
      <div className="bg-red-950/20 border border-red-900/50 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">Debt Crisis: The Hidden Cost of War</h2>
        <div className="space-y-3">
          {debtImpact.map((item, i) => (
            <div key={i} className="flex justify-between items-center bg-stone-900/50 rounded p-3">
              <div>
                <p className="text-white font-semibold text-sm">{item.metric}</p>
                <p className="text-stone-400 text-xs">{item.context}</p>
              </div>
              <div className="text-right">
                <p className="text-red-400 font-bold">{item.amount}</p>
                <p className="text-stone-500 text-xs">{item.trend}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-red-900/20 rounded-lg">
          <h3 className="text-red-400 font-semibold mb-2">The Iran War Debt Spiral</h3>
          <p className="text-stone-300 text-sm mb-2">
            A $10 trillion Iran war would push US debt to over $50 trillion — 150%+ of GDP. At current interest rates, 
            annual debt service would exceed $2 trillion, consuming 40%+ of the federal budget.
          </p>
          <p className="text-stone-300 text-sm">
            This would force either: (1) Massive tax increases, (2) Cuts to Social Security/Medicare, or (3) Money printing 
            leading to hyperinflation. All three options would destroy the American middle class to pay for bombing Iran.
          </p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;The question isn&apos;t whether we can afford to go to war with Iran. The question is whether we can afford to
          survive it. At $38 trillion in debt and $1 trillion a year in interest, we are already drowning. Iran would be
          the anchor that pulls us under.&rdquo;</p>
        </blockquote>
      </div>

      {/* Hidden Costs Analysis */}
      <div className="bg-stone-900 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">The Hidden Costs: What They Don&apos;t Tell You</h2>
        <p className="text-stone-300 text-sm mb-4">
          Direct military spending is only the beginning. The true costs emerge over decades, like a financial time bomb
          exploding in slow motion across generations.
        </p>
        <div className="space-y-4">
          {hiddenCosts.map((cost, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-semibold">{cost.category}</h3>
                <div className="text-right">
                  <p className="text-stone-400 text-xs">Immediate</p>
                  <p className="text-red-400 font-bold">{cost.immediate}</p>
                  <p className="text-stone-400 text-xs">Lifetime</p>
                  <p className="text-red-400 font-bold">{cost.lifetime}</p>
                </div>
              </div>
              <p className="text-stone-300 text-sm mb-2">{cost.description}</p>
              <p className="text-stone-500 text-xs">{cost.details}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-red-950/30 rounded-lg">
          <p className="text-red-400 font-semibold">Total Hidden Costs: $6+ trillion over 40 years</p>
          <p className="text-stone-300 text-sm">This doesn&apos;t include opportunity costs — the infrastructure, schools, hospitals, and research that won&apos;t be built because the money was spent on war.</p>
        </div>
      </div>

      {/* Historical Cost Errors */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">What History Actually Tells Us: The Track Record of War Predictions</h2>
        <p className="text-stone-300 text-sm mb-4">Every major American war has cost exponentially more than projected. The pattern is so consistent it should be considered fraud.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left text-white pb-2">War</th>
                <th className="text-center text-white pb-2">Projected</th>
                <th className="text-center text-white pb-2">Actual</th>
                <th className="text-center text-white pb-2">Error</th>
                <th className="text-left text-stone-400 pb-2">Quote</th>
              </tr>
            </thead>
            <tbody className="text-stone-300">
              {historicalCostErrors.map((war, i) => (
                <tr key={i} className="border-b border-stone-800">
                  <td className="py-2 font-semibold">{war.war}</td>
                  <td className="text-center py-2">{war.projected}</td>
                  <td className="text-center py-2">{war.actual}</td>
                  <td className="text-center py-2 text-red-400 font-bold">{war.error}</td>
                  <td className="py-2 text-xs italic">&ldquo;{war.quote}&rdquo;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-red-950/30 rounded-lg">
          <p className="text-red-400 font-semibold text-sm mb-1">Pattern Recognition:</p>
          <p className="text-stone-300 text-sm">
            Every administration lowballs war costs to get Congressional approval, then claims they can&apos;t stop funding 
            once troops are deployed. The Iran war projection of "four weeks or less" follows the exact same script as 
            Iraq, Afghanistan, Vietnam, and Korea.
          </p>
        </div>
      </div>

      {/* Regional War Impact */}
      <div className="bg-stone-900 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">Regional Catastrophe: The Middle East Burns</h2>
        <p className="text-stone-300 text-sm mb-4">
          An Iran war wouldn&apos;t stay confined to Iran. The entire Middle East would explode, creating the largest 
          refugee crisis in human history and economic costs that dwarf the direct military spending.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {regionWideImpacts.map((country, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-3">
              <h3 className="text-white font-semibold text-sm mb-1">{country.country}</h3>
              <p className="text-stone-400 text-xs mb-2">Population: {country.population}</p>
              <p className="text-stone-300 text-xs mb-2">{country.impact}</p>
              <div className="space-y-1">
                <p className="text-red-400 text-xs"><strong>Economic:</strong> {country.economicCost}</p>
                <p className="text-red-400 text-xs"><strong>Refugees:</strong> {country.refugees}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-red-950/30 rounded-lg">
          <h3 className="text-red-400 font-semibold mb-2">Regional War Totals</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div><p className="text-stone-300">Economic damage: <strong className="text-red-400">$2+ trillion</strong></p></div>
            <div><p className="text-stone-300">Refugees created: <strong className="text-red-400">20+ million</strong></p></div>
            <div><p className="text-stone-300">Countries destabilized: <strong className="text-red-400">8+</strong></p></div>
          </div>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Libertarian Reality Check</h2>
        <p>
          Here&apos;s what they won&apos;t tell you: the American people never voted for a war with Iran. Congress 
          hasn&apos;t declared war since 1942. The Authorization for Use of Military Force (AUMF) from 2001 — 
          passed to fight al-Qaeda after 9/11 — is being stretched to justify bombing a country that had nothing 
          to do with 9/11. This is taxation without representation on a trillion-dollar scale.
        </p>
        <p>
          The same defense contractors who got rich off Iraq and Afghanistan are salivating over Iran. Lockheed Martin, 
          Raytheon, Boeing, and Northrop Grumman stock prices have surged since the Iran strikes began. War profiteering 
          isn&apos;t a side effect of the system — it <em>is</em> the system.
        </p>
        <p>
          Every dollar spent bombing Iran is a dollar not spent on American infrastructure, schools, hospitals, or 
          paying down debt. We have bridges collapsing, a $4.6 trillion infrastructure gap, and cities with 
          contaminated water supplies. But we can find unlimited money to destroy another country on the other side 
          of the world.
        </p>
        <p>
          The Iran war represents everything wrong with American governance: unaccountable executives starting wars 
          without Congressional approval, military contractors profiting off taxpayer misery, politicians lying about 
          costs to start wars they won&apos;t have to fight, and the bill sent to future generations who never consented 
          to any of it.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, 
          a theft from those who hunger and are not fed, those who are cold and are not clothed. This world in arms 
          is not spending money alone. It is spending the sweat of its laborers, the genius of its scientists, 
          the hopes of its children.&rdquo;</p>
          <footer>— Dwight D. Eisenhower, 1953</footer>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line: A Bill We Can&apos;t Pay</h2>
        <p>
          Here is the range of what Iran will cost American taxpayers, based on historical precedent and current
          operational reality:
        </p>
      </div>

      {/* Final Cost Summary */}
      <div className="bg-stone-900 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">Iran War: Final Cost Projections</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-sm mb-1">Best Case</p>
            <p className="text-red-400 font-bold text-2xl">$20–50B</p>
            <p className="text-stone-500 text-xs">4-week air campaign</p>
            <p className="text-stone-500 text-xs">15% probability</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-sm mb-1">Likely Case</p>
            <p className="text-red-400 font-bold text-2xl">$500B–2T</p>
            <p className="text-stone-500 text-xs">1–3 year limited ops</p>
            <p className="text-stone-500 text-xs">35% probability</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-sm mb-1">Bad Case</p>
            <p className="text-red-400 font-bold text-2xl">$5–10T</p>
            <p className="text-stone-500 text-xs">5–10 year occupation</p>
            <p className="text-stone-500 text-xs">25% probability</p>
          </div>
          <div className="bg-stone-800 rounded-lg p-4">
            <p className="text-stone-400 text-sm mb-1">Worst Case</p>
            <p className="text-red-400 font-bold text-2xl">$15–30T</p>
            <p className="text-stone-500 text-xs">10–20 year quagmire</p>
            <p className="text-stone-500 text-xs">25% probability</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-stone-300">Direct military costs (conservative):</span>
            <span className="text-red-400 font-bold">$2–8T</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-stone-300">Economic damage (Hormuz closure):</span>
            <span className="text-red-400 font-bold">$2–5T</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-stone-300">Hidden/lifetime costs:</span>
            <span className="text-red-400 font-bold">$3–8T</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-stone-300">Interest on borrowed money:</span>
            <span className="text-red-400 font-bold">$5–15T</span>
          </div>
          <div className="border-t border-stone-700 pt-2 flex justify-between items-center">
            <span className="text-white font-bold text-lg">Total Cost to America:</span>
            <span className="text-red-400 font-bold text-2xl">$12–36T</span>
          </div>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <p>
          Add the regional economic damage, refugee crisis costs, and opportunity costs, and the true price tag approaches
          the entire US economy. This is what they don&apos;t tell you when they say "four weeks or less." This is the 
          bill that arrives after the flags stop waving and the cameras go home. And it&apos;s a bill that your children 
          and grandchildren will still be paying when you&apos;re dead.
        </p>
        <p>
          The Iran war isn&apos;t just another military adventure. It&apos;s economic suicide dressed up as foreign policy.
          The only winners will be defense contractors and politicians who get to sound tough on TV. The losers will be
          every American taxpayer for the next 50 years.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-stone-900 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <details key={i} className="border-b border-stone-700 pb-4">
              <summary className="cursor-pointer text-white font-semibold hover:text-red-400">
                {item.question}
              </summary>
              <p className="text-stone-300 text-sm mt-2 pl-4">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Related Articles */}
      <RelatedArticles articles={[
        {slug: "iran-civilian-cost", title: "The Civilian Cost", desc: "Schools, hospitals, and the Grand Bazaar."},
        {slug: "nuclear-close-calls", title: "Nuclear Close Calls", desc: "How close we've come to the end of the world."},
        {slug: "lies-that-started-wars", title: "Lies That Started Wars", desc: "The pattern from USS Maine to WMDs."}
      ]} />

      <BackToTop />
    </div>
  )
}