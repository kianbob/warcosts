import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'The Cost of the Korean War: $389 Billion, 36,000 Dead & a 70-Year Occupation',
  description: 'The Korean War cost $389 billion in 2024 dollars, killed 36,574 Americans, and created a frozen conflict that still costs $13 billion per year to maintain. The war Congress never declared and America never ended.',
  openGraph: {
    title: 'The Cost of the Korean War: The Forgotten War That Never Ended',
    description: '$389B adjusted cost. 36,574 US dead. 70+ years of occupation. A war that America forgot but never stopped paying for.',
    url: 'https://www.warcosts.org/analysis/cost-of-korean-war',
    type: 'article',
  },
}

const keyStats = [
  { stat: '$389B', label: 'Total cost in 2024 dollars — more than the entire New Deal', source: 'Congressional Research Service' },
  { stat: '36,574', label: 'American service members killed in just 3 years', source: 'Department of Defense' },
  { stat: '103,284', label: 'Americans wounded — many permanently disabled', source: 'VA Records' },
  { stat: '2.5M+', label: 'Korean civilians killed — mostly in the North', source: 'Encyclopedia Britannica' },
  { stat: '28,500', label: 'US troops still stationed in South Korea today', source: 'DoD Personnel Report, 2024' },
  { stat: '$13.4B', label: 'Annual cost of US forces in Korea — every year for 70+ years', source: 'RAND Corporation' },
]

const warPhases = [
  { phase: 'Phase 1: North Korean Invasion', dates: 'June 25 – Sept 15, 1950', description: 'North Korea crosses the 38th parallel with 75,000 troops. South Korean and US forces pushed to Pusan Perimeter. Near total collapse.', usCasualties: '~6,000 killed', cost: '$12B (2024)' },
  { phase: 'Phase 2: Inchon & UN Advance', dates: 'Sept 15 – Nov 25, 1950', description: 'MacArthur\'s brilliant Inchon landing. UN forces push north past 38th parallel toward Yalu River. Hubris takes hold.', usCasualties: '~4,000 killed', cost: '$28B (2024)' },
  { phase: 'Phase 3: Chinese Intervention', dates: 'Nov 25, 1950 – Jan 24, 1951', description: '300,000 Chinese "volunteers" pour across the Yalu. Chosin Reservoir. The longest retreat in US Marine Corps history. Complete reversal.', usCasualties: '~8,000 killed', cost: '$45B (2024)' },
  { phase: 'Phase 4: Stalemate & Attrition', dates: 'Jan 1951 – July 27, 1953', description: 'Two and a half years of grinding trench warfare along the 38th parallel. Negotiations drag on while soldiers die for hills with numbers, not names.', usCasualties: '~18,500 killed', cost: '$304B (2024)' },
]

const costBreakdown = [
  { category: 'Direct Military Operations (1950-53)', amount: '$341B', percent: '87.7%', notes: 'Troop deployment, ammunition, naval operations, air campaigns' },
  { category: 'Equipment & Materiel Lost', amount: '$18.2B', percent: '4.7%', notes: '2,834 tanks, 8,700 vehicles, 1,986 aircraft destroyed' },
  { category: 'Veterans Benefits (1950s-60s)', amount: '$14.6B', percent: '3.8%', notes: 'Initial disability claims, GI Bill for Korean War veterans' },
  { category: 'POW/MIA Recovery Operations', amount: '$3.1B', percent: '0.8%', notes: '7,747 Americans still listed as MIA — search operations continue today' },
  { category: 'Korean War Memorial & Commemoration', amount: '$0.4B', percent: '0.1%', notes: 'DC memorial, state memorials, annual ceremonies' },
  { category: 'Reconstruction Aid to South Korea', amount: '$11.7B', percent: '3.0%', notes: 'Economic and military aid to rebuild a devastated peninsula' },
]

const ongoingCosts = [
  { item: 'US Forces Korea (USFK) Operations', annualCost: '$4.5B', since: 1953, totalEstimate: '$320B+', notes: '28,500 troops, Camp Humphreys ($11B base), air and naval assets' },
  { item: 'Korean War Veterans Benefits', annualCost: '$2.8B', since: 1953, totalEstimate: '$195B+', notes: 'Declining as veterans die — avg age now 91' },
  { item: 'Military Exercises & Readiness', annualCost: '$1.2B', since: 1953, totalEstimate: '$85B+', notes: 'Annual exercises like Freedom Shield, Ulchi Freedom Guardian' },
  { item: 'Intelligence & Surveillance', annualCost: '$2.1B', since: 1953, totalEstimate: '$150B+', notes: 'NSA, CIA, DIA operations focused on North Korea' },
  { item: 'Missile Defense (THAAD)', annualCost: '$1.8B', since: 2016, totalEstimate: '$14B+', notes: 'THAAD battery deployment and upgrades' },
  { item: 'Nuclear Deterrence Allocation', annualCost: '$1.0B', since: 1958, totalEstimate: '$65B+', notes: 'Share of US nuclear umbrella costs allocated to Korean defense' },
]

const forgottenFacts = [
  { fact: 'Congress Never Declared War', detail: 'Truman called it a "police action" — setting the precedent for every undeclared war since. Korea was the template for Vietnam, Iraq, Afghanistan, and beyond.' },
  { fact: 'MacArthur Wanted to Nuke China', detail: 'General MacArthur requested 34 atomic bombs to create a "belt of radioactive cobalt" across the Korean-Chinese border. Truman fired him. The world got lucky.' },
  { fact: 'The US Bombed Every City in North Korea', detail: 'General Curtis LeMay: "We burned down every town in North Korea." The Air Force ran out of targets. 85% of buildings in the North were destroyed. More bombs than the entire Pacific theater of WWII.' },
  { fact: 'North Korean Civilian Deaths Exceeded WWII Proportions', detail: 'An estimated 12-15% of North Korea\'s population was killed — a higher proportion than any country suffered in World War II, including the Soviet Union or Poland.' },
  { fact: 'Turkey Lost More Soldiers Per Capita Than Any Other UN Ally', detail: 'Turkey sent 15,000 troops and suffered 966 killed — the highest casualty rate per troops deployed of any allied nation besides the US and South Korea.' },
  { fact: 'The War Created Modern North Korea', detail: 'The devastation of US bombing radicalized North Korean leadership, justified the Kim dynasty\'s militarism, and created the siege mentality that persists today. America built the enemy it now fears.' },
]

const dmzCosts = [
  { element: 'DMZ Physical Infrastructure', cost: '$340M', detail: '154-mile demilitarized zone, guard posts, fencing, minefields (~1 million mines), surveillance equipment' },
  { element: 'Joint Security Area (JSA)', cost: '$45M annually', detail: 'Panmunjom, the iconic blue buildings, round-the-clock guard rotations, diplomatic facilities' },
  { element: 'Tunnel Detection & Counter-Tunneling', cost: '$120M', detail: 'Four infiltration tunnels discovered since 1974, continuous seismic monitoring, new detection systems' },
  { element: 'Mine Clearance Operations', cost: '$890M estimated', detail: '~1 million landmines remain. At current pace, full clearance would take 100+ years' },
  { element: 'Environmental Monitoring', cost: '$28M annually', detail: 'The DMZ is an accidental nature preserve — home to endangered species found nowhere else' },
]

const comparisonToOtherWars = [
  { war: 'Korean War', cost: '$389B', usDead: '36,574', duration: '3 years', costPerDay: '$355M', outcome: 'Armistice — same border as before' },
  { war: 'Vietnam War', cost: '$1T', usDead: '58,220', duration: '19 years', costPerDay: '$144M', outcome: 'Communist victory — total US defeat' },
  { war: 'Gulf War (1991)', cost: '$102B', usDead: '383', duration: '7 months', costPerDay: '$486M', outcome: 'Saddam stayed in power' },
  { war: 'Iraq War', cost: '$3T+', usDead: '4,431', duration: '8 years', costPerDay: '$1.03B', outcome: 'ISIS, civil war, Iranian influence' },
  { war: 'Afghanistan', cost: '$2.3T', usDead: '2,461', duration: '20 years', costPerDay: '$315M', outcome: 'Taliban back in 11 days' },
]

const whatKoreaCouldHaveBought = [
  { item: 'Free public college for every American for 10 years', cost: '$380B', icon: '🎓' },
  { item: 'Clean drinking water infrastructure for the entire US', cost: '$300B', icon: '💧' },
  { item: 'Housing for every homeless person in America — for 50 years', cost: '$390B', icon: '🏠' },
  { item: 'Complete US interstate highway system (built over 35 years)', cost: '$370B', icon: '🛣️' },
  { item: 'NASA\'s entire budget from 1958 to 2024', cost: '$370B', icon: '🚀' },
]

const powMiaData = [
  { category: 'Americans taken POW', count: '7,140', fate: '2,701 died in captivity — 38% death rate vs 1% in WWII European theater' },
  { category: 'Still listed as MIA', count: '7,573', fate: 'Remains recovery ongoing — 82 identified in last 5 years' },
  { category: 'Unrepatriated remains in North Korea', count: '~5,300', fate: 'North Korea has used remains as bargaining chips in nuclear negotiations' },
  { category: 'South Korean POWs never returned', count: '~50,000', fate: 'Forced to work in North Korean mines and factories for decades' },
]

export default function CostOfKoreanWarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The Cost of the Korean War: $389 Billion, 36,000 Dead & a 70-Year Occupation',
        description: 'The Korean War cost $389 billion in 2024 dollars, killed 36,574 Americans, and created a frozen conflict that still costs $13 billion per year.',
        url: 'https://www.warcosts.org/analysis/cost-of-korean-war',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-15',
        dateModified: '2026-03-15'
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Cost of the Korean War' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Forgotten War That Never Ended
        </h1>
        <p className="text-xl text-stone-300 mb-4">$389 Billion. 36,574 Dead. 70 Years of Occupation. No Peace Treaty.</p>
        <p className="text-stone-400 text-lg">
          Americans call Korea &ldquo;the Forgotten War.&rdquo; They forget the 36,574 Americans who died there. 
          They forget the 2.5 million Korean civilians killed. They forget that the United States bombed every 
          city in North Korea until there was nothing left to bomb. They forget that 28,500 American troops are 
          <em> still there</em>, 70 years later, defending a border that exists in almost exactly the same place 
          it was before the first shot was fired. Most of all, they forget that the war never actually ended. 
          There is no peace treaty. Just an armistice — a pause in hostilities that has lasted seven decades 
          and cost hundreds of billions more. Korea wasn&apos;t just a forgotten war. It was the template for 
          every undeclared, unwinnable, unending American war that followed.
        </p>
      </div>

      <ShareButtons title="The Cost of the Korean War: $389 Billion & Still Counting" />

      {/* Key Numbers */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">By the Numbers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {keyStats.map((item) => (
            <div key={item.label} className="flex gap-3">
              <span className="text-2xl font-bold text-white whitespace-nowrap">{item.stat}</span>
              <div>
                <p className="text-stone-300 text-sm">{item.label}</p>
                <p className="text-stone-500 text-xs">{item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How the War Unfolded */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          How the War Unfolded: Four Phases, $389 Billion
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The Korean War was not one war but four distinct phases, each with its own character. It began as a 
          desperate retreat, became a triumphant advance, turned into a catastrophic rout, and settled into a 
          grinding stalemate that consumed the most money and the most lives. The stalemate phase — two and a 
          half years of fighting for hills that changed hands dozens of times — accounted for <strong>78% of 
          total war costs</strong> and half of all American deaths.
        </p>

        <div className="space-y-4">
          {warPhases.map((phase) => (
            <div key={phase.phase} className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <h3 className="font-bold text-stone-900">{phase.phase}</h3>
                <span className="text-stone-500 text-sm">{phase.dates}</span>
              </div>
              <p className="text-stone-700 text-sm mb-3">{phase.description}</p>
              <div className="flex gap-6 text-sm">
                <span className="text-red-600 font-semibold">{phase.usCasualties}</span>
                <span className="text-stone-500">Cost: {phase.cost}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
          <h3 className="font-bold text-red-800 text-lg mb-2">The Stalemate Paradox</h3>
          <p className="text-stone-700 text-sm">
            For more than two years, American soldiers fought and died for positions along the 38th parallel — 
            the same line that divided Korea before the war started. Heartbreak Ridge, Pork Chop Hill, Old 
            Baldy, the Punchbowl — names that meant everything to the men who fought there and nothing to the 
            American public. <strong>More Americans died during the &ldquo;peace&rdquo; negotiations than during the 
            initial North Korean invasion.</strong> Truce talks began in July 1951. The armistice wasn&apos;t signed 
            until July 1953. In those two years, 18,500 Americans were killed while diplomats argued about the 
            shape of the negotiating table.
          </p>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Where the Money Went
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Category</th>
                <th className="text-right py-3 font-semibold text-stone-900">Amount (2024$)</th>
                <th className="text-right py-3 font-semibold text-stone-900">Share</th>
              </tr>
            </thead>
            <tbody>
              {costBreakdown.map((row) => (
                <tr key={row.category} className="border-b border-stone-100">
                  <td className="py-3">
                    <span className="font-medium text-stone-900">{row.category}</span>
                    <br />
                    <span className="text-stone-500 text-xs">{row.notes}</span>
                  </td>
                  <td className="text-right py-3 font-semibold text-red-600">{row.amount}</td>
                  <td className="text-right py-3 text-stone-500">{row.percent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ongoing Costs */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The War That Never Stopped Costing: $13.4 Billion Per Year
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The armistice was signed on July 27, 1953. That was 71 years ago. In every single one of those 
          years, the United States has spent billions maintaining a military presence on the Korean peninsula. 
          The total post-war cost — <strong>over $830 billion in 2024 dollars</strong> — now exceeds the cost 
          of the war itself more than twice over. The &ldquo;forgotten war&rdquo; may have been cheap to fight, 
          but the occupation has been extraordinarily expensive.
        </p>

        <div className="space-y-3">
          {ongoingCosts.map((item) => (
            <div key={item.item} className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-bold text-stone-900">{item.item}</h3>
                  <p className="text-stone-600 text-sm">{item.notes}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="text-red-600 font-bold">{item.annualCost}/yr</span>
                  <br />
                  <span className="text-stone-500 text-xs">Total since {item.since}: {item.totalEstimate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-950/5 border border-red-200 rounded-lg p-6 mt-6">
          <p className="text-stone-700 font-semibold text-lg">
            Combined total cost of the Korean War (combat + 70 years of occupation): <span className="text-red-600">~$1.2 trillion</span>
          </p>
          <p className="text-stone-500 text-sm mt-2">
            And there is still no peace treaty. The war is technically ongoing. The meter is still running.
          </p>
        </div>
      </section>

      {/* The DMZ */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The DMZ: The Most Expensive Border on Earth
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The Korean Demilitarized Zone is 154 miles long and 2.5 miles wide. It is the most heavily 
          fortified border on the planet — bristling with mines, razor wire, guard towers, artillery 
          positions, and surveillance equipment on both sides. Paradoxically, the strip of land between 
          the fences has become one of the most pristine nature preserves in Asia, home to endangered 
          Asiatic black bears, red-crowned cranes, and Amur leopards.
        </p>

        <div className="space-y-3">
          {dmzCosts.map((item) => (
            <div key={item.element} className="flex gap-4 items-start bg-stone-50 border border-stone-200 rounded-lg p-4">
              <div className="flex-1">
                <h3 className="font-bold text-stone-900">{item.element}</h3>
                <p className="text-stone-600 text-sm">{item.detail}</p>
              </div>
              <span className="text-red-600 font-bold whitespace-nowrap">{item.cost}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Things Americans Don't Know */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          What Americans Don&apos;t Know About the Korean War
        </h2>
        <div className="space-y-4">
          {forgottenFacts.map((item) => (
            <div key={item.fact} className="bg-stone-50 border-l-4 border-red-600 p-5">
              <h3 className="font-bold text-stone-900 mb-2">{item.fact}</h3>
              <p className="text-stone-700 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POW/MIA */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Prisoners &amp; Missing: 7,573 Americans Still Unaccounted For
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          More than 7,500 Americans remain missing from the Korean War — more than from Vietnam, Iraq, 
          and Afghanistan combined. North Korea has periodically returned remains as diplomatic leverage, 
          most notably in 2018 when 55 boxes of remains were returned as part of the Trump-Kim summit process. 
          Of those, only 6 have been positively identified.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Category</th>
                <th className="text-right py-3 font-semibold text-stone-900">Count</th>
                <th className="text-left py-3 font-semibold text-stone-900 pl-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {powMiaData.map((row) => (
                <tr key={row.category} className="border-b border-stone-100">
                  <td className="py-3 text-stone-900">{row.category}</td>
                  <td className="text-right py-3 font-bold text-red-600">{row.count}</td>
                  <td className="py-3 text-stone-600 text-xs pl-4">{row.fate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Comparison */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Korea vs. Other American Wars
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">War</th>
                <th className="text-right py-3 font-semibold text-stone-900">Cost (2024$)</th>
                <th className="text-right py-3 font-semibold text-stone-900">US Dead</th>
                <th className="text-right py-3 font-semibold text-stone-900">Duration</th>
                <th className="text-left py-3 font-semibold text-stone-900 pl-4">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {comparisonToOtherWars.map((row) => (
                <tr key={row.war} className={`border-b border-stone-100 ${row.war === 'Korean War' ? 'bg-red-50' : ''}`}>
                  <td className="py-3 font-medium text-stone-900">{row.war}</td>
                  <td className="text-right py-3 text-red-600 font-semibold">{row.cost}</td>
                  <td className="text-right py-3">{row.usDead}</td>
                  <td className="text-right py-3 text-stone-500">{row.duration}</td>
                  <td className="py-3 text-stone-600 text-xs pl-4">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Opportunity Cost */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          What $389 Billion Could Have Built
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {whatKoreaCouldHaveBought.map((item) => (
            <div key={item.item} className="bg-stone-50 border border-stone-200 rounded-lg p-4 flex gap-3 items-start">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-stone-900 font-medium text-sm">{item.item}</p>
                <p className="text-stone-500 text-xs">{item.cost}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Template */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Template: How Korea Broke the Constitution
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Korea was the first war the United States fought without a congressional declaration. Truman called 
          it a &ldquo;police action&rdquo; under United Nations authority. Congress grumbled but went along. 
          That precedent — the president can wage war without congressional approval — has defined American 
          military policy ever since.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          Vietnam? No declaration. Grenada? No declaration. Panama? No. Somalia? No. Kosovo? No. Afghanistan 
          was authorized under the 2001 AUMF — not a declaration. Iraq in 2003 was authorized under a separate 
          AUMF — not a declaration. Libya? The president didn&apos;t even bother asking. Syria? Same. Every one 
          of these presidential wars traces its constitutional genealogy back to Korea.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          Korea also established the template for the &ldquo;limited war&rdquo; — a war fought not to win but 
          to contain. The United States chose not to use nuclear weapons. It chose not to invade China. It chose 
          to fight for a draw. This was strategically rational. It was also politically unsustainable. The 
          American public, accustomed to the total victory of World War II, couldn&apos;t understand why their 
          sons were dying for a stalemate. The result: Korea became the first American war that the public 
          simply chose to forget.
        </p>

        <div className="bg-stone-900 text-white rounded-lg p-6 mt-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">The Legacy</h3>
          <p className="text-stone-300">
            Korea established every pattern that would define American military policy for the next seven decades: 
            undeclared wars, presidential unilateralism, limited objectives, open-ended commitments, permanent 
            overseas garrisons, and public amnesia. Vietnam, Iraq, Afghanistan — they&apos;re all Korea&apos;s children. 
            The &ldquo;forgotten war&rdquo; shaped everything that came after it. Americans just don&apos;t remember.
          </p>
        </div>
      </section>

      {/* North Korea Today */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          North Korea Today: The Blowback That Keeps on Giving
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The Korean War created modern North Korea. The total devastation of US bombing — which killed roughly 
          15% of the population and destroyed 85% of all buildings — gave the Kim dynasty the founding myth it 
          needed: America is an existential threat, and only the party can protect the people. Every North Korean 
          school teaches the bombing. Every museum commemorates it. The regime&apos;s legitimacy rests on the 
          memory of American bombs.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          North Korea now has an estimated <strong>40-60 nuclear warheads</strong>, ICBMs theoretically capable 
          of reaching the US mainland, and one of the largest conventional militaries on Earth (1.2 million active 
          troops). The cost of deterring this threat — which the United States helped create — runs $13.4 billion 
          per year and climbing.
        </p>
        <p className="text-stone-700 text-lg">
          The &ldquo;police action&rdquo; of 1950 has become the most expensive unfinished business in American 
          military history. The war that was supposed to be quick and decisive is now in its eighth decade. The 
          border is in the same place. The enemy is still there. The troops are still deployed. And the bill 
          keeps growing.
        </p>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>Congressional Research Service, &ldquo;Costs of Major U.S. Wars&rdquo; (2024)</li>
          <li>Department of Defense, Korean War Casualty Statistics</li>
          <li>RAND Corporation, &ldquo;The Cost of the U.S. Military Presence in Korea&rdquo;</li>
          <li>Defense POW/MIA Accounting Agency, Korean War Accounting</li>
          <li>Bruce Cumings, <em>The Korean War: A History</em> (Modern Library, 2010)</li>
          <li>Max Hastings, <em>The Korean War</em> (Simon & Schuster, 1987)</li>
          <li>U.S. Forces Korea, Annual Budget Justification Documents</li>
          <li>Federation of American Scientists, North Korea Nuclear Weapons Program</li>
          <li>DoD Personnel Report, &ldquo;Active Duty Military Personnel by Region/Country&rdquo; (2024)</li>
          <li>VA National Cemetery Administration, Korean War Memorial Data</li>
        </ul>
      </section>

      {/* Related */}
      <RelatedArticles articles={[
        { slug: 'forgotten-wars', title: 'Forgotten Wars', desc: 'The conflicts Americans don\'t remember — including Korea.' },
        { slug: 'americas-wars-by-the-numbers', title: 'America\'s Wars By the Numbers', desc: 'Every US war ranked by cost, deaths, and duration.' },
        { slug: 'cost-of-empire', title: 'The Cost of Empire', desc: '750+ bases, $1.3T/year — including 28,500 troops in Korea.' },
        { slug: 'congressional-authority', title: '19 Wars Without Congress', desc: 'Korea set the precedent. Every war since has followed it.' },
      ]} />

      <BackToTop />
    </div>
  )
}
