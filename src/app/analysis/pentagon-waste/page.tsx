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
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
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
          <li>• DOD Office of Inspector General, Annual Financial Audit Reports (2018–2023)</li>
          <li>• GAO, &ldquo;DOD Financial Management: Significant Improvements Needed&rdquo; (2024)</li>
          <li>• GAO, &ldquo;Weapons Systems Annual Assessment&rdquo; (2024)</li>
          <li>• SIGAR, &ldquo;What We Need to Learn: Lessons from Twenty Years of Afghanistan Reconstruction&rdquo; (2021)</li>
          <li>• SIGIR, &ldquo;Hard Lessons: The Iraq Reconstruction Experience&rdquo; (2009)</li>
          <li>• Congressional Research Service, &ldquo;F-35 Joint Strike Fighter Program&rdquo; (2024)</li>
          <li>• Skidmore, Mark. &ldquo;$21 Trillion of Unauthorized Spending by US Government&rdquo; (2017)</li>
          <li>• Project On Government Oversight (POGO), DOD Contractor Database</li>
          <li>• Senate Armed Services Committee, Hearing on Pentagon Financial Management (2023)</li>
          <li>• ProPublica, &ldquo;How the Pentagon Wastes Money&rdquo; (2022)</li>
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
