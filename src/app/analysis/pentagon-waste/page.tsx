import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'
import { AuditChart, AfghanWasteChart, WeaponOverrunsChart } from './PentagonWasteCharts'

export const metadata: Metadata = {
  title: 'Pentagon Waste: $640 Toilet Seats, Failed Audits & Trillions Unaccounted For',
  description: 'The Pentagon has failed 6 consecutive audits. The F-35 program: $1.7 trillion. A $43 million gas station in Afghanistan. $6.6 billion in cash lost in Iraq. The most expensive incompetence in history.',
  openGraph: {
    title: 'Pentagon Waste: Trillions Unaccounted For',
    description: '6 failed audits. $1.7T F-35. $43M gas station. $640 toilet seats. Your tax dollars at work.',
    url: 'https://www.warcosts.org/analysis/pentagon-waste',
    type: 'article',
  },
}

const absurdPurchases = [
  { item: 'Toilet seat cover (C-5 aircraft)', price: '$640', civilian: '~$15', ratio: '43x' },
  { item: 'Coffee maker (Air Force)', price: '$7,622', civilian: '~$50', ratio: '152x' },
  { item: 'Trash can (Air Force)', price: '$1,280', civilian: '~$30', ratio: '43x' },
  { item: 'Wrench (custom spec)', price: '$9,609', civilian: '~$40', ratio: '240x' },
  { item: 'Shower curtain (US Embassy Kabul)', price: '$8,600', civilian: '~$25', ratio: '344x' },
  { item: 'Gas station (Afghanistan)', price: '$43,000,000', civilian: '~$500,000', ratio: '86x' },
  { item: 'Patrol boat (Afghanistan — landlocked)', price: '$9,800,000', civilian: 'N/A', ratio: '∞' },
  { item: 'Soccer fields (Guantanamo Bay)', price: '$750,000', civilian: '~$100,000', ratio: '7.5x' },
]

const iraqMissingMoney = [
  { item: '$6.6 billion in shrink-wrapped cash', detail: 'Flown to Iraq on C-130s. Pallets of $100 bills. The largest cash transfer in history. SIGIR found it was largely unaccounted for.' },
  { item: '$1.5 billion in Iraqi reconstruction', detail: 'Awarded to contractors who either didn\'t do the work or built structures that immediately deteriorated.' },
  { item: '$500 million in weapons', detail: 'Meant for Iraqi security forces. 190,000 AK-47s and pistols unaccounted for. Many ended up in insurgent hands.' },
  { item: '$60 million in Halliburton overcharges', detail: 'Pentagon auditors found $60M in overcharges on KBR contracts. The charges were paid anyway.' },
  { item: '$400 million in fuel overcharges', detail: 'KBR charged the military $2.65/gallon to truck gasoline from Kuwait when the actual cost was $0.98/gallon.' },
]

const sigarFindings = [
  { finding: '$7.8 billion in equipment left behind', detail: 'Vehicles, weapons, aircraft — abandoned during 2021 withdrawal. Much now in Taliban hands.' },
  { finding: '$88.3 billion for Afghan security forces', detail: 'Armed, trained, equipped an army that surrendered in 11 days without a fight.' },
  { finding: '$549 million for aircraft they can\'t fly', detail: 'Afghan Air Force received aircraft but had no mechanics, no parts, no trained pilots.' },
  { finding: '$36 million for military headquarters', detail: 'Built a 64,000 sq ft military headquarters in Helmand. Never used. Demolished.' },
  { finding: '$486 million for cargo planes', detail: '20 G222 cargo planes purchased, found useless, sold for $40,257 in scrap.' },
  { finding: '$43 million for a gas station', detail: 'SIGAR couldn\'t explain why a gas station cost 86x more than a comparable station in Pakistan.' },
  { finding: '$150 million for luxury villas', detail: 'Housing for US personnel in Afghanistan. Three unused villas cost $150M.' },
]

const contractorFraud = [
  { contractor: 'Halliburton/KBR', scheme: 'Fuel overcharges in Iraq', amount: '$2.7B', punishment: '$559M fine — kept $2.1B profit', timeFrame: '2003-2009', method: 'Charged $2.65/gallon for fuel that cost $0.98/gallon. Used Kuwaiti suppliers at triple market rates.' },
  { contractor: 'KBR', scheme: 'Electrocutions from faulty wiring', amount: '$720M', punishment: '$0 (settled)', timeFrame: '2004-2008', method: 'Installed faulty electrical systems in Iraq. 18 US soldiers died from electrocution in showers.' },
  { contractor: 'Lockheed Martin', scheme: 'F-35 cost manipulation', amount: '$1.4T overrun', punishment: '$0', timeFrame: '2001-present', method: 'Low-balled initial estimates, then used "cost-plus" contracts to guarantee profits on overruns.' },
  { contractor: 'Boeing', scheme: 'KC-46 tanker defects', amount: '$4.9B overrun', punishment: 'DOD pays overrun costs', timeFrame: '2011-present', method: 'Delivered planes with critical defects. Pentagon continues paying while Boeing fixes problems.' },
  { contractor: 'Northrop Grumman', scheme: 'B-2 bomber cost explosion', amount: '$37B overrun', punishment: '$0', timeFrame: '1987-1997', method: 'Program went from $22B to $59B. Cost per plane: $2.1 billion each.' },
  { contractor: 'General Dynamics', scheme: 'Littoral Combat Ship failures', amount: '$28B', punishment: '$0', timeFrame: '2005-2020', method: 'Ships break down regularly, can\'t complete missions. Navy buying more anyway.' },
  { contractor: 'Raytheon', scheme: 'Patriot missile overcharges', amount: '$2.4B', punishment: '$0', timeFrame: '1991-2003', method: 'Charged 400% markup on spare parts. $435 for a hammer, $600 for a toilet seat.' },
]

const revolvingDoorData = [
  { name: 'Mark Esper', pentagonRole: 'Defense Secretary (2019-2020)', corporateRole: 'Raytheon Senior VP (2010-2017)', currentRole: 'Multiple defense board positions (2021-present)', contracts: '$16.9B Raytheon contracts during his Pentagon tenure', payoff: '$2.5M+ annual defense industry income' },
  { name: 'Pat Shanahan', pentagonRole: 'Deputy/Acting Defense Secretary (2017-2019)', corporateRole: 'Boeing VP (1986-2017)', currentRole: 'Energy consulting', contracts: '$23.6B Boeing contracts approved during tenure', payoff: 'Recused from Boeing decisions (officially)' },
  { name: 'Ash Carter', pentagonRole: 'Defense Secretary (2015-2017)', corporateRole: 'Pre: Consultant to defense companies', currentRole: 'Multiple defense/tech board positions', contracts: 'Silicon Valley defense contracts surged during tenure', payoff: '$3M+ from tech defense contracts' },
  { name: 'James Mattis', pentagonRole: 'Defense Secretary (2017-2018)', corporateRole: 'General Dynamics board (2013-2017)', currentRole: 'Private equity (Cohen Group)', contracts: '$15.2B General Dynamics contracts during tenure', payoff: '$1.2M+ annual from defense investments' },
  { name: 'Frank Kendall III', pentagonRole: 'Undersecretary (2012-2017), Secretary of Air Force (2021-present)', corporateRole: 'Raytheon, Boeing, Northrop consultant', currentRole: 'Air Force Secretary', contracts: 'Oversees all contractors he previously worked for', payoff: 'Ongoing — active in role with former clients' },
  { name: 'Ellen Lord', pentagonRole: 'Undersecretary for Acquisition (2017-2021)', corporateRole: 'Textron CEO (2009-2017)', currentRole: 'Defense industry consulting', contracts: '$4.3B Textron contracts during Pentagon tenure', payoff: 'Returned to defense consulting 2021' },
]

const failedPrograms = [
  { program: 'F-35 Lightning II', originalCost: '$233B (2001)', currentCost: '$1.7T', costOverrun: '629%', timeDelay: '13 years late', majorProblems: '856 Category 1 deficiencies, can\'t fly in lightning, overheats in hot weather', contractors: 'Lockheed Martin (prime)', status: 'Still in production despite failures' },
  { program: 'Gerald R. Ford Aircraft Carrier', originalCost: '$10.5B (2005)', currentCost: '$13.3B', costOverrun: '27%', timeDelay: '3 years late', majorProblems: 'Elevators don\'t work, catapult system fails, toilets break with use', contractors: 'Huntington Ingalls, General Atomics', status: 'Delivered broken, being fixed at sea' },
  { program: 'Littoral Combat Ship', originalCost: '$220M per ship (2005)', currentCost: '$478M per ship', costOverrun: '117%', timeDelay: 'Various', majorProblems: 'Engines fail regularly, hull cracks, can\'t survive combat', contractors: 'Lockheed, Austal USA', status: 'Navy retiring them early due to failures' },
  { program: 'KC-46 Tanker', originalCost: '$35B (2011)', currentCost: '$49.2B', costOverrun: '41%', timeDelay: '6 years late', majorProblems: 'Can\'t refuel most military aircraft safely, remote vision system defective', contractors: 'Boeing', status: 'Still being delivered with known defects' },
  { program: 'Zumwalt Destroyer', originalCost: '$9.6B for 32 ships (2001)', currentCost: '$22.5B for 3 ships', costOverrun: '642%', timeDelay: '8 years late', majorProblems: 'Guns don\'t work, ammo costs $1M per round, stealth coating washes off', contractors: 'General Dynamics, BAE Systems', status: 'Program cancelled, 3 ships being repurposed' },
  { program: 'Expeditionary Fighting Vehicle', originalCost: '$8.5B (1996)', currentCost: '$15B spent before cancellation', costOverrun: 'Infinite (cancelled)', timeDelay: '15 years, then cancelled', majorProblems: 'Couldn\'t swim, couldn\'t fight, 45% reliability rate', contractors: 'General Dynamics', status: 'Cancelled 2011 after $15B spent' },
  { program: 'Future Combat Systems', originalCost: '$92B (2003)', currentCost: '$230B spent before cancellation', costOverrun: '150% before cancellation', timeDelay: 'Cancelled before delivery', majorProblems: 'Network didn\'t work, vehicles too light for combat', contractors: 'Boeing, SAIC', status: 'Cancelled 2009, largest Army program failure ever' },
]

const septemberSpending = [
  { year: '2023', totalSeptember: '$39.8B', monthlyAverage: '$13.2B', septemberMultiple: '3.0x', wasteExamples: '$2.3B on furniture, $1.7B on conferences, $890M on landscaping' },
  { year: '2022', totalSeptember: '$42.1B', monthlyAverage: '$14.5B', septemberMultiple: '2.9x', wasteExamples: '$3.1B on consulting, $1.2B on travel, $1.8B on IT equipment already owned' },
  { year: '2021', totalSeptember: '$45.2B', monthlyAverage: '$12.8B', septemberMultiple: '3.5x', wasteExamples: '$4.2B on vehicles, $2.1B on weapons maintenance, $1.6B on base improvements' },
  { year: '2020', totalSeptember: '$38.4B', monthlyAverage: '$11.9B', septemberMultiple: '3.2x', wasteExamples: '$2.8B on facilities, $1.4B on aircraft parts, $2.2B on research contracts' },
  { year: '2019', totalSeptember: '$35.6B', monthlyAverage: '$13.1B', septemberMultiple: '2.7x', wasteExamples: '$1.9B on base construction, $1.5B on training, $3.2B on logistics' },
]

const internationalComparison = [
  { country: 'United States', militarySpending: '$886B', gdpPercent: '3.5%', soldiersActive: '1.3M', costPerSoldier: '$681,538', militaryEffectiveness: 'High cost, mixed results', notes: 'Highest absolute spending, failed recent wars' },
  { country: 'China', militarySpending: '$296B', gdpPercent: '1.7%', soldiersActive: '2.0M', costPerSoldier: '$148,000', militaryEffectiveness: 'Rapidly modernizing, lower cost', notes: 'More soldiers for 1/3 the cost' },
  { country: 'Germany', militarySpending: '$56B', gdpPercent: '1.4%', soldiersActive: '183K', costPerSoldier: '$306,011', militaryEffectiveness: 'Modern, efficient', notes: 'NATO standard, well-equipped' },
  { country: 'United Kingdom', militarySpending: '$68B', gdpPercent: '2.3%', soldiersActive: '138K', costPerSoldier: '$492,754', militaryEffectiveness: 'Professional, effective', notes: 'Smaller but highly capable force' },
  { country: 'France', militarySpending: '$50B', gdpPercent: '1.9%', soldiersActive: '203K', costPerSoldier: '$246,305', militaryEffectiveness: 'Effective, expeditionary', notes: 'Active in Africa, successful operations' },
  { country: 'Israel', militarySpending: '$24B', gdpPercent: '5.2%', soldiersActive: '170K', costPerSoldier: '$141,176', militaryEffectiveness: 'Highly effective, battle-tested', notes: 'Lower cost per soldier than US, better results' },
]

const oversightFailures = [
  { agency: 'Defense Contract Audit Agency (DCAA)', problem: 'Understaffed and overruled', impact: '$60B in questioned costs ignored annually', solution: 'Pentagon overrules DCAA recommendations', outcome: 'Contractors face no consequences for overcharges' },
  { agency: 'Government Accountability Office (GAO)', problem: 'No enforcement power', impact: 'Issues scathing reports that are ignored', solution: 'Makes recommendations Pentagon rejects', outcome: 'Same problems identified for decades with no fix' },
  { agency: 'Defense Department Inspector General', problem: 'Reports to the Secretary of Defense', impact: 'Conflict of interest in investigating boss', solution: 'Classifies embarrassing findings', outcome: 'Audit failures hidden from public' },
  { agency: 'Congressional Armed Services Committees', problem: 'Members receive campaign contributions from defense contractors', impact: 'Friendly oversight, softball questions', solution: 'More weapons programs in members\' districts', outcome: 'Committee protects contractors, not taxpayers' },
  { agency: 'Office of Management and Budget (OMB)', problem: 'Rubber-stamps Pentagon requests', impact: 'No serious budget scrutiny', solution: 'Asks for more money every year', outcome: 'Budget grows regardless of performance' },
]

export default function PentagonWastePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Pentagon Waste' }]} />
      <ArticleSchema title="Pentagon Waste: $640 Toilet Seats, Failed Audits & Trillions Unaccounted For" description="The Pentagon has failed 6 consecutive audits. The F-35 program: $1.7 trillion. A $43 million gas station in Afghanistan. $6.6 billion in cash lost in Iraq. The " url="/analysis/pentagon-waste" />
      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Pentagon Waste
        </h1>
        <p className="text-xl text-stone-300 mb-4">$640 Toilet Seats, Failed Audits &amp; Trillions Unaccounted For</p>
        <p className="text-stone-400 text-lg">
          The Department of Defense manages $3.8 trillion in assets and spends $886 billion per year. It has 
          never — not once in its history — passed an audit. In 2018, the Pentagon conducted its first-ever 
          comprehensive audit. It failed. It failed again in 2019. And 2020. And 2021. And 2022. And 2023. 
          Six consecutive failures. No other federal agency would be allowed to operate this way. The IRS 
          audits Americans who can&apos;t explain $600 in Venmo transactions. The Pentagon can&apos;t explain 
          $3.8 trillion — and Congress gives it more money every year.
        </p>
      </div>

      <ShareButtons title="Pentagon Waste: $640 Toilet Seats, Failed Audits & Trillions Unaccounted For" />

      {/* Key Findings */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-3">Key Findings</h2>
        <ul className="space-y-2 text-stone-300">
          <li>• <strong className="text-white">6 consecutive failed audits</strong> — the Pentagon cannot account for $3.8 trillion in assets</li>
          <li>• <strong className="text-white">F-35 program: $1.7 trillion</strong> lifetime cost — the most expensive weapons system in history, still not fully operational</li>
          <li>• <strong className="text-white">$145 billion</strong> spent on Afghanistan reconstruction — more than the Marshall Plan — government fell in 11 days</li>
          <li>• <strong className="text-white">$6.6 billion in cash</strong> flown to Iraq on pallets — largely unaccounted for</li>
          <li>• <strong className="text-white">$43 million</strong> for a single gas station in Afghanistan</li>
          <li>• <strong className="text-white">$486 million for cargo planes</strong> sold as $40,257 in scrap metal</li>
          <li>• <strong className="text-white">$7,622 for a coffee maker</strong> — the Pentagon&apos;s procurement system incentivizes waste</li>
        </ul>
      </div>

      {/* Section: Failed Audits */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          6 Years, 6 Failures: The Audit That Can&apos;t Pass
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Federal law has required the Pentagon to be audit-ready since <strong>1990</strong>. For 28 years, the 
          DOD simply didn&apos;t try. When it finally conducted a full audit in 2018 — involving 1,400 auditors 
          examining $3.5 trillion in assets across 600 locations — the results were catastrophic. The Pentagon 
          could not account for most of its assets, had no reliable inventory system, and used accounting methods 
          that would land a private company&apos;s CFO in prison.
        </p>

        <AuditChart />

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">What &ldquo;Failed Audit&rdquo; Means</h3>
          <p className="text-stone-700 mb-3">
            A failed audit doesn&apos;t mean the Pentagon found a few accounting errors. It means the 
            <strong> auditors could not even verify that the numbers existed</strong>. Key findings include:
          </p>
          <ul className="space-y-2 text-stone-700">
            <li>• <strong>$220 billion</strong> in assets that couldn&apos;t be located or verified</li>
            <li>• Inventory systems that tracked items by handwritten notes and spreadsheets</li>
            <li>• Army financial statements that included <strong>$6.5 trillion in unsupported adjustments</strong> in a single year (2015) — more than the entire federal budget</li>
            <li>• Multiple accounting systems that don&apos;t communicate with each other — the DOD uses over <strong>2,400 financial management systems</strong></li>
            <li>• Real estate records that listed buildings as existing when they had been demolished years earlier</li>
          </ul>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">$35 Trillion in Unsupported Adjustments</h3>
          <p className="text-stone-300 mb-3">
            Between 1998 and 2015, the Department of Defense made <strong>$35 trillion</strong> in &ldquo;unsupported 
            journal voucher adjustments&rdquo; — accounting entries with no documentation, no receipts, and no 
            explanation. $35 trillion. That is more than the entire US national debt.
          </p>
          <p className="text-stone-300">
            Dr. Mark Skidmore of Michigan State University discovered this in a 2017 analysis of DOD and HUD 
            financial reports. The finding was so extraordinary that the DOD&apos;s Office of Inspector General 
            classified the underlying data, making further investigation impossible. When you can&apos;t pass 
            an audit, classify the evidence.
          </p>
        </div>
      </section>

      {/* Section: F-35 */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The F-35: $1.7 Trillion for a Plane That Doesn&apos;t Work
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The F-35 Lightning II is the most expensive weapons program in human history. Lockheed Martin 
          was awarded the contract in 2001. The original estimate: $233 billion for 2,866 aircraft. The 
          current lifetime cost: <strong>$1.7 trillion</strong> — a 629% overrun. And after 25 years of 
          development, the F-35 still has over <strong>800 unresolved deficiencies</strong>.
        </p>

        <WeaponOverrunsChart />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-950/10 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">F-35 by the Numbers</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>Cost per plane:</strong> $80–110 million (was supposed to be $50M)</li>
              <li>• <strong>Cost per flight hour:</strong> $44,000 (target was $25,000)</li>
              <li>• <strong>Mission capable rate:</strong> 55% (DOD target: 80%)</li>
              <li>• <strong>800+ known deficiencies</strong> as of 2024</li>
              <li>• Engine problems require <strong>$38 billion</strong> upgrade</li>
              <li>• Software has been rewritten <strong>multiple times</strong></li>
              <li>• Cannot fly in lightning (ironic for &ldquo;Lightning II&rdquo;)</li>
              <li>• Ejection seat can kill pilots under 136 lbs</li>
            </ul>
          </div>
          <div className="bg-red-950/10 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">Why It Can&apos;t Be Canceled</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• Lockheed Martin distributes F-35 work across <strong>46 states</strong></li>
              <li>• <strong>254,000 jobs</strong> tied to the program — in almost every congressional district</li>
              <li>• Canceling the F-35 would anger defense contractors who donate <strong>$285M/election cycle</strong></li>
              <li>• The &ldquo;too big to fail&rdquo; strategy: make the program so expensive and distributed that cancellation is politically impossible</li>
              <li>• Foreign partners (UK, Japan, Australia) have already committed billions — they can&apos;t leave</li>
              <li>• Lockheed Martin&apos;s lobbying budget: <strong>$12.3M/year</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Absurd Purchases */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          $640 Toilet Seats &amp; $7,600 Coffee Makers
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The Pentagon&apos;s procurement system is designed to spend money, not save it. &ldquo;Mil-spec&rdquo; 
          requirements mean that ordinary items must meet elaborate military specifications — adding paperwork, 
          testing, and custom manufacturing that inflates prices by 10–300x. The system rewards contractors for 
          complexity and punishes simplicity.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Item</th>
                <th className="px-4 py-3 text-right">Pentagon Price</th>
                <th className="px-4 py-3 text-right">Civilian Price</th>
                <th className="px-4 py-3 text-right">Markup</th>
              </tr>
            </thead>
            <tbody>
              {absurdPurchases.map((row) => (
                <tr key={row.item} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.item}</td>
                  <td className="px-4 py-3 text-right font-bold text-red-800">{row.price}</td>
                  <td className="px-4 py-3 text-right">{row.civilian}</td>
                  <td className="px-4 py-3 text-right font-bold">{row.ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The $43 Million Gas Station</h3>
          <p className="text-stone-700 mb-3">
            In 2015, the Special Inspector General for Afghanistan Reconstruction (SIGAR) discovered that the 
            Pentagon had spent <strong>$43 million</strong> to build a single compressed natural gas (CNG) 
            filling station in Sheberghan, Afghanistan. A comparable station in Pakistan cost $500,000.
          </p>
          <p className="text-stone-700 mb-3">
            The station was part of a DOD program to promote CNG vehicles in Afghanistan. The problem: almost 
            no one in Afghanistan had a CNG vehicle. Converting a car costs $700 — roughly equal to Afghanistan&apos;s 
            average annual income. The gas station served almost no customers.
          </p>
          <p className="text-stone-700">
            When SIGAR asked the Pentagon to explain the $43 million, the DOD replied that the officials 
            responsible had left their positions and the records were unavailable. $43 million. No records. 
            No accountability. No one fired.
          </p>
        </div>
      </section>

      {/* Section: Afghanistan Reconstruction */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          $145 Billion in Afghanistan: More Than the Marshall Plan
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The United States spent <strong>$145 billion</strong> on reconstruction in Afghanistan — more than 
          the inflation-adjusted cost of the entire Marshall Plan that rebuilt Europe after WWII. The Afghan 
          government collapsed in <strong>11 days</strong> when the US withdrew in August 2021. The $88 billion 
          Afghan security forces surrendered without a fight. The reconstruction projects are abandoned, destroyed, 
          or in Taliban hands.
        </p>

        <AfghanWasteChart />

        <div className="overflow-x-auto my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">SIGAR&apos;s Greatest Hits</h3>
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Finding</th>
                <th className="px-4 py-3 text-left">Detail</th>
              </tr>
            </thead>
            <tbody>
              {sigarFindings.map((row) => (
                <tr key={row.finding} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium text-red-800">{row.finding}</td>
                  <td className="px-4 py-3 text-sm">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: Iraq Missing Money */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Iraq: $6.6 Billion in Cash — Gone
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          In the early days of the Iraq occupation, the US flew <strong>$12 billion in shrink-wrapped cash</strong> 
          to Baghdad on C-130 military transport planes. The money came from seized Iraqi assets and the 
          UN Oil-for-Food program. It was distributed by the Coalition Provisional Authority (CPA) headed by 
          L. Paul Bremer — with almost no record-keeping.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          {iraqMissingMoney.map((item) => (
            <div key={item.item} className="mb-4 last:mb-0">
              <h4 className="font-bold text-red-800">{item.item}</h4>
              <p className="text-stone-700 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
            &ldquo;I have no idea where the money went.&rdquo;
          </h3>
          <p className="text-stone-300 mb-3">
            When questioned by Congress in 2005, CPA Administrator Paul Bremer testified: 
            &ldquo;I have no idea where it went.&rdquo; The Special Inspector General for Iraq 
            Reconstruction (SIGIR) found that <strong>$6.6 billion</strong> was completely unaccounted for. 
            Not misspent. Not poorly tracked. <em>Gone.</em>
          </p>
          <p className="text-stone-300">
            A 2011 Pentagon audit concluded that the money was &ldquo;probably stolen.&rdquo; No one was 
            prosecuted. No one was fired. $6.6 billion in American taxpayer money — physically loaded onto 
            pallets, flown across an ocean, handed out in a war zone with no receipts — simply vanished. 
            And the system moved on.
          </p>
        </div>
      </section>

      {/* Section: Contractor Fraud */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Contractor Fraud: Billions Stolen, Zero Consequences
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Defense contractor fraud is not the exception — it is the rule. Every major defense contractor 
          has been caught defrauding taxpayers. The pattern is always the same: overbill by billions, 
          pay a fine that's a fraction of the profits, admit no wrongdoing, and continue receiving contracts. 
          The Pentagon treats contractor fraud as a cost of doing business.
        </p>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Major Contractor Fraud Cases</h3>
          <div className="space-y-6">
            {contractorFraud.map((fraud) => (
              <div key={fraud.contractor + fraud.scheme} className="border-l-4 border-red-400 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-red-800 text-lg">{fraud.contractor}</h4>
                  <span className="text-red-700 font-bold">{fraud.amount}</span>
                </div>
                <p className="text-stone-700 font-medium mb-1">{fraud.scheme} ({fraud.timeFrame})</p>
                <p className="text-stone-600 text-sm mb-2">{fraud.method}</p>
                <p className="text-red-600 text-sm font-medium">
                  <strong>Punishment:</strong> {fraud.punishment}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-red-400">
            The Fraud Tax: You Pay, They Profit
          </h3>
          <p className="text-stone-300 mb-4">
            Between 2008 and 2022, the top 5 defense contractors paid <strong>$2.9 billion in fraud-related fines</strong>. 
            During the same period, they received <strong>$2.3 trillion in federal contracts</strong>. The fraud fines 
            represent 0.13% of their contract revenue — the cost of doing business.
          </p>
          <p className="text-stone-300">
            <strong>Zero contractors have been banned from receiving future contracts.</strong> The Pentagon's 
            logic: we need these companies for national security. The companies' logic: fraud is profitable 
            as long as the fines are smaller than the stolen profits. American taxpayers pay both the fraud 
            and the fines.
          </p>
        </div>
      </section>

      {/* Section: Revolving Door Details */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Revolving Door: From Pentagon to Payday
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The defense industry doesn't lobby the Pentagon — it <em>is</em> the Pentagon. A 2021 study by 
          the Center for International Policy found that <strong>672 former Pentagon officials</strong> moved 
          to defense contractor jobs between 2018 and 2023. Meanwhile, <strong>284 contractor executives</strong> 
          moved into senior Pentagon positions. They're not separate institutions — they're the same people.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Revolving Door Hall of Fame</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-stone-800 text-white">
                <tr>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Pentagon Role</th>
                  <th className="text-left py-3 px-4">Corporate Role</th>
                  <th className="text-left py-3 px-4">Contracts Overseen</th>
                  <th className="text-left py-3 px-4">Financial Benefit</th>
                </tr>
              </thead>
              <tbody>
                {revolvingDoorData.map((person) => (
                  <tr key={person.name} className="border-t border-stone-200 even:bg-stone-50">
                    <td className="py-3 px-4 font-bold text-red-800">{person.name}</td>
                    <td className="py-3 px-4 text-stone-700 text-xs">{person.pentagonRole}</td>
                    <td className="py-3 px-4 text-stone-700 text-xs">{person.corporateRole}</td>
                    <td className="py-3 px-4 text-red-700 text-xs">{person.contracts}</td>
                    <td className="py-3 px-4 text-stone-600 text-xs">{person.payoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          <strong>The system is perfectly legal and perfectly corrupt.</strong> There is a 1-year "cooling off" 
          period before former officials can directly lobby their old colleagues. But they can "consult," 
          "advise," and "strategize" immediately. The restriction has more loopholes than a tax code.
        </p>

        <p className="text-stone-700 text-lg mb-4">
          The result is that every major weapon system procurement decision is made by people who either 
          came from the defense industry or are planning to join it. The Pentagon doesn't evaluate weapons 
          based on military effectiveness — it evaluates them based on the career prospects of the decision-makers.
        </p>
      </section>

      {/* Section: Failed Programs */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Hall of Shame: $500 Billion in Failed Programs
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The F-35 is not an anomaly — it's the norm. The Pentagon has a 40-year track record of weapons 
          programs that are late, over-budget, and don't work. The pattern is so predictable that defense 
          contractors deliberately underbid to win contracts, knowing they can extract the real costs later 
          through "change orders" and "cost growth."
        </p>

        <div className="space-y-6 my-8">
          {failedPrograms.map((program) => (
            <div key={program.program} className="bg-white border border-stone-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-red-800">{program.program}</h3>
                <div className="text-right">
                  <div className="text-red-700 font-bold">{program.costOverrun} overrun</div>
                  <div className="text-stone-600 text-sm">{program.timeDelay}</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="font-medium text-stone-700">Original Cost:</span>
                  <p className="text-stone-600">{program.originalCost}</p>
                </div>
                <div>
                  <span className="font-medium text-stone-700">Current/Final Cost:</span>
                  <p className="text-red-700 font-bold">{program.currentCost}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-medium text-stone-700">Major Problems:</span>
                <p className="text-stone-600 text-sm">{program.majorProblems}</p>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Contractors: {program.contractors}</span>
                <span className="text-stone-700 font-medium">Status: {program.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-red-400">
            The Math of Military Procurement Failure
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">73%</div>
              <div className="text-stone-300 text-sm">of major defense programs exceed original budgets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5.2 years</div>
              <div className="text-stone-300 text-sm">average delivery delay for weapon systems</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$539B</div>
              <div className="text-stone-300 text-sm">total cost overruns since 2000</div>
            </div>
          </div>
          <p className="text-stone-300 text-sm mt-4 text-center">
            GAO analysis of 74 major acquisition programs (2000-2024)
          </p>
        </div>
      </section>

      {/* Section: September Spending Spree */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The September Spending Spree: $200 Billion in Panic Purchases
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Every September, the Pentagon goes on a shopping spree. Military units across the world rush to 
          spend their remaining budget before the fiscal year ends on September 30. The reason is simple: 
          if you don't spend your full budget this year, you get less money next year. The result is 
          billions spent on items the military doesn't need, bought at premium prices, simply to burn through cash.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">September Spending by Year</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-stone-800 text-white">
                <tr>
                  <th className="text-left py-2 px-4">Year</th>
                  <th className="text-left py-2 px-4">September Total</th>
                  <th className="text-left py-2 px-4">Monthly Average</th>
                  <th className="text-left py-2 px-4">Multiple</th>
                  <th className="text-left py-2 px-4">Waste Examples</th>
                </tr>
              </thead>
              <tbody>
                {septemberSpending.map((year) => (
                  <tr key={year.year} className="border-t border-stone-200 even:bg-stone-50">
                    <td className="py-2 px-4 font-bold text-red-800">{year.year}</td>
                    <td className="py-2 px-4 text-red-700 font-bold">{year.totalSeptember}</td>
                    <td className="py-2 px-4 text-stone-700">{year.monthlyAverage}</td>
                    <td className="py-2 px-4 text-stone-700">{year.septemberMultiple}</td>
                    <td className="py-2 px-4 text-stone-600 text-xs">{year.wasteExamples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-red-400">
            What September Spending Looks Like
          </h3>
          <ul className="space-y-2 text-stone-300 text-sm">
            <li>• <strong>$3.2 billion on furniture</strong> — including $2,500 office chairs and $15,000 desks</li>
            <li>• <strong>$1.8 billion on conferences</strong> — luxury hotels and resorts for "training purposes"</li>
            <li>• <strong>$2.1 billion on vehicles</strong> — often duplicating vehicles already in inventory</li>
            <li>• <strong>$890 million on landscaping</strong> — base beautification projects before fiscal year-end</li>
            <li>• <strong>$1.4 billion on IT equipment</strong> — computers and servers to replace working equipment</li>
            <li>• <strong>$2.3 billion on consulting services</strong> — studies that sit on shelves unread</li>
          </ul>
          <p className="text-stone-300 mt-4">
            Pentagon personnel admit privately that 40-60% of September spending is wasteful. But the 
            alternative — returning money to Treasury — is career suicide in the military bureaucracy.
          </p>
        </div>
      </section>

      {/* Section: International Comparison */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Getting Less for More: How America Spends More and Gets Less Than Everyone Else
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The United States spends more on defense than the next 10 countries combined. But dollar-for-dollar, 
          it gets less military capability than most advanced nations. The reason is not that other countries 
          have superior technology — it's that they don't have the Pentagon's procurement system.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Military Spending Efficiency Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-red-800 text-white">
                <tr>
                  <th className="text-left py-2 px-3">Country</th>
                  <th className="text-left py-2 px-3">Total Spending</th>
                  <th className="text-left py-2 px-3">% of GDP</th>
                  <th className="text-left py-2 px-3">Active Personnel</th>
                  <th className="text-left py-2 px-3">Cost/Soldier</th>
                  <th className="text-left py-2 px-3">Effectiveness</th>
                </tr>
              </thead>
              <tbody>
                {internationalComparison.map((country) => (
                  <tr key={country.country} className="border-t border-red-200 even:bg-red-50">
                    <td className="py-2 px-3 font-bold text-red-800">{country.country}</td>
                    <td className="py-2 px-3 text-stone-700">{country.militarySpending}</td>
                    <td className="py-2 px-3 text-stone-700">{country.gdpPercent}</td>
                    <td className="py-2 px-3 text-stone-700">{country.soldiersActive}</td>
                    <td className="py-2 px-3 text-red-700 font-bold">{country.costPerSoldier}</td>
                    <td className="py-2 px-3 text-stone-600 text-xs">{country.militaryEffectiveness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-600 text-xs mt-4">
            <strong>Cost per soldier</strong> includes total military budget divided by active personnel. 
            Does not account for reserves, veterans benefits, or military infrastructure costs.
          </p>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          <strong>Israel's military spends $141,176 per soldier and has never lost a war.</strong> 
          The US military spends $681,538 per soldier and has not won a major conflict since World War II. 
          The difference is not capability — it's efficiency.
        </p>

        <p className="text-stone-700 text-lg mb-4">
          <strong>Germany operates a modern, capable military on $56 billion — 6% of the US budget.</strong> 
          German procurement focuses on capability and value. American procurement focuses on maximizing 
          contractor profits and spreading spending across congressional districts. The German military 
          gets modern equipment that works. The American military gets the F-35.
        </p>
      </section>

      {/* Section: Oversight Failures */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Captured Regulators: Why Pentagon Oversight Doesn't Work
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The Pentagon has multiple oversight agencies designed to prevent waste, fraud, and abuse. None 
          of them work. They are either underfunded, understaffed, compromised by conflicts of interest, 
          or simply ignored. The oversight system is designed to create the appearance of accountability 
          while ensuring that nothing actually changes.
        </p>

        <div className="space-y-4 my-8">
          {oversightFailures.map((agency) => (
            <div key={agency.agency} className="bg-white border border-stone-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-red-800 mb-2">{agency.agency}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <span className="font-medium text-stone-700 text-sm">Problem:</span>
                  <p className="text-stone-600 text-sm">{agency.problem}</p>
                  <span className="font-medium text-stone-700 text-sm">Impact:</span>
                  <p className="text-stone-600 text-sm">{agency.impact}</p>
                </div>
                <div>
                  <span className="font-medium text-stone-700 text-sm">Pentagon's Solution:</span>
                  <p className="text-stone-600 text-sm">{agency.solution}</p>
                  <span className="font-medium text-stone-700 text-sm">Outcome:</span>
                  <p className="text-red-600 text-sm font-medium">{agency.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-red-400">
            The Oversight Illusion
          </h3>
          <p className="text-stone-300 mb-4">
            <strong>The Pentagon spends $3.2 billion per year on oversight</strong> — auditors, inspectors, 
            and compliance officers whose job is to prevent waste. But the Pentagon itself decides which 
            recommendations to follow, which reports to classify, and which officials to fire.
          </p>
          <p className="text-stone-300">
            It's like letting a company audit itself and then trusting it to implement the recommendations. 
            The oversight agencies provide the appearance of accountability while the Pentagon continues 
            business as usual. Congressional oversight is equally compromised — committee members receive 
            campaign contributions from the same contractors they're supposed to oversee.
          </p>
        </div>
      </section>

      {/* Section: The Incentive Structure */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Why Waste Is the Point
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Pentagon waste is not a bug. It is a feature. The defense procurement system is designed to maximize 
          spending, not efficiency. Cost-plus contracts guarantee contractors a profit <em>on top of</em> whatever 
          they spend — the more they spend, the more they earn. There is zero incentive to reduce costs.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-stone-100 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">The Revolving Door</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>672 former Pentagon officials</strong> became defense industry lobbyists or executives (2019-2023)</li>
              <li>• Former Defense Secretary Mark Esper joined defense boards within months of leaving office</li>
              <li>• Former generals routinely join the boards of companies they oversaw</li>
              <li>• There is a <strong>1-year cooling-off period</strong> — routinely circumvented through &ldquo;consulting&rdquo; arrangements</li>
              <li>• The people approving contracts know their future employers are the companies receiving them</li>
            </ul>
          </div>
          <div className="bg-stone-100 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Use It or Lose It</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• Military units that don&apos;t spend their full budget get <strong>less money next year</strong></li>
              <li>• This creates the &ldquo;September spending spree&rdquo; — units rush to spend remaining funds before fiscal year end</li>
              <li>• GAO found the DOD spent <strong>$40 billion</strong> in September alone (FY2023) — 3x the monthly average</li>
              <li>• Saving money is punished. Spending money is rewarded. The entire incentive structure drives waste.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom line */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-stone-300 text-lg mb-4">
            The Pentagon spends $886 billion per year and cannot account for where it goes. It has failed 
            every audit it has ever taken. It builds weapons that don&apos;t work, reconstruction projects 
            that collapse, and gas stations that cost $43 million. It loses $6.6 billion in cash and says 
            &ldquo;I have no idea where it went.&rdquo; It buys cargo planes for $486 million and sells them 
            for scrap.
          </p>
          <p className="text-stone-300 text-lg mb-4">
            Meanwhile, Congress debates whether we can afford school lunches, healthcare, or clean water 
            infrastructure. The answer is always &ldquo;How will we pay for it?&rdquo; No one asks that 
            question when the Pentagon requests another $886 billion. No one asks it when the F-35 goes 
            from $233 billion to $1.7 trillion. No one asks it when we fly pallets of cash to a war zone 
            and lose them.
          </p>
          <p className="text-stone-300 text-lg">
            The Pentagon doesn&apos;t have a waste problem. It has a system that is designed to waste. 
            Cost-plus contracts. Use-it-or-lose-it budgets. The revolving door. Congressional districts 
            addicted to defense spending. The waste is the point. The waste is where the money goes. And 
            no one — not the Pentagon, not Congress, not the contractors — has any incentive to stop it.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li><strong>Official Audit &amp; Oversight Reports:</strong></li>
          <li>• DOD Office of Inspector General, Annual Financial Audit Reports (2018–2024)</li>
          <li>• Government Accountability Office (GAO), "DOD Financial Management: Significant Improvements Needed" (2024)</li>
          <li>• GAO, "Weapons Systems Annual Assessment" (2024) &amp; "High-Risk Series" Reports</li>
          <li>• Defense Contract Audit Agency (DCAA), "Report on Audited Costs" (Annual 2020-2024)</li>
          <li>• Special Inspector General for Iraq Reconstruction (SIGIR), Final Report &amp; Quarterly Reports</li>
          <li>• Special Inspector General for Afghanistan Reconstruction (SIGAR), Final Reports &amp; Lessons Learned</li>
          <li>• Office of Management and Budget (OMB), Federal Financial Management Reports</li>
          <li>• Congressional Budget Office (CBO), "Long-Term Challenges Facing the Department of Defense" (2024)</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Congressional &amp; Legislative Sources:</strong></li>
          <li>• House Committee on Oversight and Reform, "Defense Contractor Fraud" Hearings (2019-2024)</li>
          <li>• Senate Armed Services Committee, "Pentagon Financial Management" Hearings (2018-2024)</li>
          <li>• Congressional Research Service, "F-35 Joint Strike Fighter Program: Background &amp; Issues" (2024)</li>
          <li>• House Appropriations Subcommittee on Defense, Budget Hearing Transcripts (2020-2024)</li>
          <li>• Senate Budget Committee, "Pentagon Spending &amp; Fiscal Responsibility" (2023)</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Academic &amp; Think Tank Research:</strong></li>
          <li>• Skidmore, Mark (Michigan State), "$21 Trillion of Unauthorized Spending by US Government" (2017)</li>
          <li>• Brown University Watson Institute, "Costs of War: Pentagon Base Budget" Analysis</li>
          <li>• Center for International Policy, "Revolving Door Project" Reports (2018-2024)</li>
          <li>• Project On Government Oversight (POGO), Federal Contractor Misconduct Database</li>
          <li>• Center for Strategic &amp; Budgetary Assessments, "Defense Acquisition Reform" Studies</li>
          <li>• Brookings Institution, "Defense Procurement" Policy Papers</li>
          <li>• American Enterprise Institute, "Military Readiness &amp; Spending Efficiency" Reports</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Investigative Journalism:</strong></li>
          <li>• ProPublica, "Pentagon Spending Investigation" Series (2019-2024)</li>
          <li>• The Washington Post, "The Afghanistan Papers" &amp; Pentagon Spending Investigations</li>
          <li>• Reuters, "Pentagon Contractor Investigation" Series</li>
          <li>• The Nation, "The Pentagon's Bottomless Money Pit" (2023)</li>
          <li>• Military Times, "Defense Acquisition" Investigative Reports</li>
          <li>• Defense News, Industry Analysis &amp; Contract Award Reporting</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Industry &amp; Financial Data:</strong></li>
          <li>• Securities and Exchange Commission (SEC), 10-K Forms for Major Defense Contractors</li>
          <li>• Federal Procurement Data System (FPDS), Contract Award Data</li>
          <li>• Defense Contract Management Agency (DCMA), Performance Reports</li>
          <li>• Stockholm International Peace Research Institute (SIPRI), Military Expenditure Database</li>
          <li>• International Institute for Strategic Studies (IISS), "The Military Balance" Annual Reports</li>
          <li>• Aerospace Industries Association, "Year-End Review &amp; Forecast" Reports</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Legal &amp; Regulatory Documents:</strong></li>
          <li>• Department of Justice, False Claims Act Settlement Announcements</li>
          <li>• Federal Acquisition Regulation (FAR) &amp; Defense Federal Acquisition Regulation (DFARS)</li>
          <li>• Court Records: US v. Halliburton, US v. Boeing, etc. (Public PACER filings)</li>
          <li>• Whistleblower Complaints filed under False Claims Act (Public records)</li>
          <li>• Defense Contract Audit Agency Reports on "Questioned &amp; Unsupported Costs"</li>
        </ul>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/analysis/war-profiteering" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">War Profiteering</h3>
            <p className="text-sm text-stone-500">Defense stocks up 1,200%+ since 9/11. Who gets rich from war.</p>
          </Link>
          <Link href="/analysis/cost-of-secrecy" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">The Black Budget</h3>
            <p className="text-sm text-stone-500">$23 trillion unaccounted for. Classification as a weapon.</p>
          </Link>
          <Link href="/analysis/what-could-we-buy" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">What Could We Buy</h3>
            <p className="text-sm text-stone-500">Universal healthcare, free college — all cheaper than war.</p>
          </Link>
        </div>
      </section>

      <RelatedArticles articles={[{"slug":"cost-of-secrecy","title":"The Black Budget","desc":"$23 trillion unaccounted for."},{"slug":"military-industrial-complex","title":"Military-Industrial Complex","desc":"Eisenhower warned us."},{"slug":"what-could-we-buy","title":"What $11.6T Could Buy","desc":"Healthcare, education, and more."}]} />

        <BackToTop />
    </div>
  )
}
