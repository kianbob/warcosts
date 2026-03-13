import { Metadata } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import CostOverrunsChart from './CostOverrunsChart'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Weapons Cost Overruns: Defense Contractors\' Taxpayer Ripoff | WarCosts',
  description: 'Interactive leaderboard of weapons cost overruns. F-35: $1.7T lifetime cost. Track how defense contractors systematically exceed budgets by hundreds of billions.',
  keywords: ['weapons cost overruns', 'defense cost overruns', 'military spending waste', 'f-35 cost', 'pentagon waste'],
  openGraph: {
    title: 'Weapons Cost Overruns: The Defense Industry\'s Taxpayer Ripoff',
    description: 'F-35: $1.7T lifetime cost. Gerald R. Ford: $15B each. Interactive tracker of the biggest cost overruns in military history.',
    url: 'https://warcosts.org/cost-overruns',
    type: 'article',
  },
}

interface Weapon {
  name: string
  slug: string
  category: string
  service: string
  contractor: string
  unitCost: number
  totalCost: number
  costOverrun: number
  units: number
  delivered: number
  description: string
  lifetimeCost: string
  status: string
  startYear: number
  iocYear?: number
  notes: string
  costBillions: number
  costOverrunLabel: string
}

async function getWeaponsData(): Promise<Weapon[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'weapons.json')
    const fileContents = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error loading weapons data:', error)
    return []
  }
}

const worstOverruns = [
  {
    name: 'F-35 Lightning II',
    contractor: 'Lockheed Martin',
    originalEstimate: 233000000000, // $233B
    actualCost: 1700000000000, // $1.7T lifetime
    overrun: 630,
    status: 'In Production',
    problems: [
      'Software doesn\'t work properly',
      'Can\'t fly in lightning (ironic for "Lightning II")',
      'Engine fires and cracks',
      'Helmet display issues cause pilot disorientation',
      'Can\'t carry full weapons load',
      'Maintenance requires 30+ hours per flight hour'
    ],
    impact: 'Most expensive weapon in human history. Each aircraft costs more than most countries\' annual GDP.'
  },
  {
    name: 'Gerald R. Ford Class Carrier',
    contractor: 'Newport News Shipbuilding',
    originalEstimate: 10500000000, // $10.5B
    actualCost: 15000000000, // $15B each
    overrun: 43,
    status: 'In Production',
    problems: [
      'Electromagnetic catapults don\'t work reliably',
      'Advanced arresting gear fails regularly',
      'Weapons elevators break down constantly',
      'Power systems overload and fail',
      'Software integration nightmares',
      'First ship still not fully operational after 6 years'
    ],
    impact: 'Navy plans to build 10 carriers. Cost overruns will exceed $45 billion total.'
  },
  {
    name: 'Littoral Combat Ship',
    contractor: 'Lockheed Martin / Austal USA',
    originalEstimate: 220000000, // $220M each
    actualCost: 584000000, // $584M each
    overrun: 165,
    status: 'Cancelled',
    problems: [
      'Hull cracks in rough seas',
      'Engines break down constantly',
      'Mission modules don\'t work',
      'Can\'t survive combat',
      'Called "Little Crappy Ship" by sailors',
      'Navy cancelling program early'
    ],
    impact: '35 ships built before Navy admitted failure. $30+ billion wasted on ships that don\'t work.'
  },
  {
    name: 'KC-46 Pegasus Tanker',
    contractor: 'Boeing',
    originalEstimate: 35000000000, // $35B program
    actualCost: 44000000000, // $44B+
    overrun: 26,
    status: 'Troubled Production',
    problems: [
      'Remote vision system causes crashes',
      'Fuel system contamination',
      'Cargo floor cracks',
      'Boom scrapes aircraft being refueled',
      'Foreign object debris problems',
      'Still can\'t refuel some aircraft types'
    ],
    impact: 'Air Force forced to accept defective aircraft while Boeing fixes problems at taxpayer expense.'
  }
]

const alternativeSpending = [
  { item: 'Eliminate homelessness in America permanently', cost: 30, comparison: 'F-35 overrun alone: $1.47 trillion' },
  { item: 'Free college tuition for every American for 21 years', cost: 80, comparison: 'F-35 lifetime cost: $1.7 trillion' },
  { item: 'Repair every "structurally deficient" bridge in America', cost: 164, comparison: 'F-35 overrun alone: $1.47 trillion' },
  { item: 'Build 50 new hospitals', cost: 15, comparison: 'One Ford-class carrier: $15 billion' },
  { item: 'Fund NASA for 78 years at current levels', cost: 1700, comparison: 'F-35 lifetime cost: $1.7 trillion' },
  { item: 'Give every American family $13,077 in cash', cost: 1700, comparison: 'F-35 lifetime cost: $1.7 trillion' },
  { item: 'Build 170,000 affordable housing units', cost: 17, comparison: 'Ford carrier cost overrun: $4.5B per ship' },
  { item: 'Provide clean drinking water for 500 million people globally', cost: 150, comparison: 'F-35 cost overrun: $1.47 trillion' }
]

export default async function CostOverrunsPage() {
  const weapons = await getWeaponsData()
  const weaponsWithOverruns = weapons.filter(w => w.costOverrun > 0)
  const totalWasteEstimate = weaponsWithOverruns.reduce((sum, weapon) => {
    const originalEstimate = weapon.totalCost / (1 + weapon.costOverrun / 100)
    return sum + (weapon.totalCost - originalEstimate)
  }, 0)

  return (
    <div className="min-h-screen bg-slate-900 text-stone-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name: 'Weapons Cost Overruns Database',
            description: 'Comprehensive database of US military weapons programs with cost overruns. Tracks original estimates vs actual costs for major defense programs.',
            url: 'https://warcosts.org/cost-overruns',
            publisher: {
              '@type': 'Organization',
              name: 'WarCosts',
              url: 'https://warcosts.org'
            },
            datePublished: '2024-01-15',
            dateModified: new Date().toISOString().split('T')[0],
            keywords: 'weapons cost overruns, defense spending waste, military cost overruns'
          }),
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumbs items={[{ label: 'Weapons Cost Overruns' }]} />
        
        <header className="mb-12">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-red-400 mb-4 leading-tight">
            Weapons Cost <span className="text-red-600">Overruns</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-6">
            The defense industry's systematic taxpayer ripoff. Interactive leaderboard of the biggest cost overruns in military history.
          </p>
          <p className="text-lg text-stone-400 mb-8">
            F-35: $1.7 trillion lifetime cost. Ford carriers: $15 billion each. These aren't "estimates" — they're legalized theft.
          </p>
          <ShareButtons title="Weapons Cost Overruns: Defense Contractors' Taxpayer Ripoff" />
        </header>

        {/* Key Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">${(totalWasteEstimate / 1000).toFixed(0)}B</div>
              <div className="text-sm text-stone-300">Total Waste from Overruns</div>
              <div className="text-xs text-stone-500 mt-2">Conservative estimate</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">{weaponsWithOverruns.length}</div>
              <div className="text-sm text-stone-300">Weapons with Overruns</div>
              <div className="text-xs text-stone-500 mt-2">Out of {weapons.length} tracked</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">630%</div>
              <div className="text-sm text-stone-300">F-35 Lifetime Overrun</div>
              <div className="text-xs text-stone-500 mt-2">$1.47T over original estimate</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">0</div>
              <div className="text-sm text-stone-300">Executives Prosecuted</div>
              <div className="text-xs text-stone-500 mt-2">For any cost overrun</div>
            </div>
          </div>
        </section>

        {/* Interactive Chart */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">Interactive Cost Overrun Leaderboard</h2>
          <p className="text-lg text-stone-300 mb-8">
            Explore the biggest cost overruns in military history. Green bars show original estimates. 
            Red bars show actual costs. The gap between them is your money disappearing into contractor bank accounts.
          </p>
          <CostOverrunsChart weapons={weapons} />
        </section>

        {/* The Hall of Shame */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The Hall of Shame</h2>
          <p className="text-lg text-stone-300 mb-8">
            These are the worst offenders — weapons that don't work, cost billions more than promised, 
            and somehow still get funded year after year.
          </p>

          <div className="space-y-8">
            {worstOverruns.map((weapon, index) => (
              <div key={index} className="bg-slate-800/50 border border-red-800/30 rounded-lg p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="md:flex-1">
                    <h3 className="font-bold text-stone-200 text-2xl mb-2">{weapon.name}</h3>
                    <div className="text-stone-400 mb-4">Contractor: {weapon.contractor}</div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center md:text-left">
                        <div className="text-green-400 text-lg font-bold">
                          ${(weapon.originalEstimate / 1000000000).toFixed(1)}B
                        </div>
                        <div className="text-sm text-stone-400">Original Estimate</div>
                      </div>
                      <div className="text-center md:text-left">
                        <div className="text-red-400 text-lg font-bold">
                          ${(weapon.actualCost / 1000000000).toFixed(1)}B
                        </div>
                        <div className="text-sm text-stone-400">Actual Cost</div>
                      </div>
                      <div className="text-center md:text-left">
                        <div className="text-orange-400 text-lg font-bold">+{weapon.overrun}%</div>
                        <div className="text-sm text-stone-400">Cost Overrun</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 md:ml-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      weapon.status === 'Cancelled' ? 'bg-red-900/50 text-red-300' :
                      weapon.status === 'Troubled Production' ? 'bg-orange-900/50 text-orange-300' :
                      'bg-yellow-900/50 text-yellow-300'
                    }`}>
                      {weapon.status}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-red-300 mb-3">Problems:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {weapon.problems.map((problem, problemIndex) => (
                      <li key={problemIndex} className="text-stone-300 text-sm">
                        • {problem}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
                  <h4 className="font-bold text-red-300 mb-2">Taxpayer Impact:</h4>
                  <p className="text-stone-300 text-sm">{weapon.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* F-35: The Ultimate Ripoff */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">
            F-35: The Ultimate Taxpayer Ripoff
          </h2>
          
          <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-700 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-red-300 text-xl mb-4">The Numbers</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-300">Original Estimate (2001):</span>
                    <span className="text-green-400 font-bold">$233 billion</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-300">Current Lifetime Cost:</span>
                    <span className="text-red-400 font-bold">$1.7 trillion</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-300">Cost Overrun:</span>
                    <span className="text-orange-400 font-bold">630% (+$1.47 trillion)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-300">Cost per Aircraft:</span>
                    <span className="text-red-400 font-bold">$80-120 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-300">Years in Development:</span>
                    <span className="text-stone-400">24 years (2001-2025)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-red-300 text-xl mb-4">Still Doesn't Work</h3>
                <ul className="space-y-2 text-stone-300 text-sm">
                  <li>• Can't fly in lightning storms (it's called "Lightning II")</li>
                  <li>• Software crashes constantly, endangering pilots</li>
                  <li>• Helmet display causes disorientation and neck strain</li>
                  <li>• Can't carry full weapons load</li>
                  <li>• Requires 30+ maintenance hours per flight hour</li>
                  <li>• Engine fires and cracks discovered in 2023</li>
                  <li>• Still missing critical combat capabilities</li>
                  <li>• Pilots call it "the most expensive mistake ever made"</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-900/50 border border-red-600 rounded-lg p-6">
              <h3 className="font-bold text-red-300 mb-3 text-xl">Put $1.7 Trillion in Perspective:</h3>
              <p className="text-stone-300 mb-4">
                The F-35's lifetime cost of $1.7 trillion is more than the entire GDP of most countries. 
                It's enough to give every American family $13,077 in cash. Or fund NASA for 78 years. 
                Or eliminate homelessness in America 56 times over.
              </p>
              <p className="text-red-300 font-medium">
                Instead, we're spending it on aircraft that don't work, can't fight, and endanger the pilots who fly them. 
                This is what happens when cost-plus contracts eliminate any incentive for contractors to control costs.
              </p>
            </div>
          </div>
        </section>

        {/* What This Money Could Have Bought Instead */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">
            What This Money Could Have Bought Instead
          </h2>
          <p className="text-lg text-stone-300 mb-8">
            The money wasted on cost overruns could have transformed America. Here's what we could have done 
            with just the F-35's $1.47 trillion overrun alone:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {alternativeSpending.map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
                <h3 className="font-semibold text-stone-200 mb-3">{item.item}</h3>
                <div className="text-green-400 font-bold text-lg mb-2">${item.cost}B needed</div>
                <div className="text-red-400 text-sm">{item.comparison}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-900/20 border border-slate-700 rounded-lg">
            <h3 className="font-bold text-red-300 mb-3">The Choice We Made:</h3>
            <p className="text-stone-300">
              Instead of investing in education, infrastructure, healthcare, or returning money to taxpayers, 
              we chose to enrich defense contractors with weapons that don't work. The F-35 alone could have 
              provided free college for every American for two decades. Instead, we got aircraft that can't fly in storms.
            </p>
          </div>
        </section>

        {/* Why Do Cost Overruns Keep Happening? */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">
            Why Do Cost Overruns Keep Happening?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
              <h3 className="font-bold text-red-300 mb-4 text-xl">Cost-Plus Contracts</h3>
              <p className="text-stone-300 mb-4">
                Most defense contracts are "cost-plus" — contractors get paid their costs plus a guaranteed profit. 
                This eliminates any incentive to control costs. In fact, higher costs mean higher profits.
              </p>
              <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
                <p className="text-red-300 text-sm">
                  <strong>Result:</strong> Contractors have every incentive to increase costs and no incentive to finish on time or on budget.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
              <h3 className="font-bold text-red-300 mb-4 text-xl">No Competition</h3>
              <p className="text-stone-300 mb-4">
                Defense contracting is dominated by 5 major companies. Once a contractor wins a program, 
                cancellation becomes "too expensive" due to sunk costs, creating permanent monopolies.
              </p>
              <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
                <p className="text-red-300 text-sm">
                  <strong>Result:</strong> Contractors can raise prices with impunity because there's nowhere else for the Pentagon to go.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
              <h3 className="font-bold text-red-300 mb-4 text-xl">Revolving Door</h3>
              <p className="text-stone-300 mb-4">
                Pentagon officials who approve overruns know their next job will likely be with the same contractors. 
                This creates massive conflicts of interest and incentives to approve inflated budgets.
              </p>
              <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
                <p className="text-red-300 text-sm">
                  <strong>Result:</strong> Officials approve overruns to curry favor with future employers, at taxpayer expense.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
              <h3 className="font-bold text-red-300 mb-4 text-xl">Political Protection</h3>
              <p className="text-stone-300 mb-4">
                Defense programs are deliberately spread across multiple states and congressional districts. 
                This creates political constituencies that defend programs regardless of cost or performance.
              </p>
              <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
                <p className="text-red-300 text-sm">
                  <strong>Result:</strong> Failed programs become "too big to cancel" due to political considerations, not merit.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-8 bg-red-900/30 border border-red-700 rounded-lg">
            <h3 className="font-bold text-red-300 mb-4 text-xl">The System Is Working Exactly as Designed</h3>
            <p className="text-stone-300 mb-4">
              Cost overruns aren't accidents or failures of oversight — they're features of a system designed 
              to transfer taxpayer money to defense contractors with minimal accountability. Every incentive 
              encourages higher costs, longer timelines, and reduced performance.
            </p>
            <p className="text-red-300 font-medium">
              Until we eliminate cost-plus contracts, break up defense monopolies, ban the revolving door, and 
              remove political protection for failed programs, cost overruns will continue indefinitely. 
              The contractors are getting rich. The taxpayers are getting robbed.
            </p>
          </div>
        </section>

        {/* Editorial: The Real Cost */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">
            The Real Cost of Defense Contractor Greed
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Every dollar wasted on cost overruns is a dollar stolen from American taxpayers. These aren't 
              accounting errors or honest miscalculations — they're the predictable result of a system 
              designed to enrich contractors at public expense.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Consider what we've lost: The F-35's $1.47 trillion cost overrun alone could have provided 
              free college education for every American for two decades. The Ford carrier's overruns could 
              have built 300 new hospitals. The KC-46's overruns could have eliminated homelessness three times over.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Instead, we got weapons that don't work, ships that break down, and aircraft that endanger their pilots. 
              The F-35 can't fly in lightning. The Ford's elevators don't work. The Littoral Combat Ship cracks in rough seas. 
              Yet somehow, the contractors got paid billions for these failures.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              This isn't capitalism — it's crony capitalism. In a real market, companies that deliver late, 
              over-budget products that don't work would go bankrupt. In the defense industry, they get bigger contracts. 
              Boeing fails with the KC-46, so they get awarded the T-7 trainer. Lockheed fails with the F-35, 
              so they get the B-21 bomber backup contracts.
            </p>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-8">
              <p className="text-lg text-red-300 font-medium">
                The defense industry has perfected the art of privatized profits and socialized losses. 
                When programs succeed (rare), contractors keep the profits. When they fail (common), 
                taxpayers eat the losses while contractors get new contracts to "fix" their previous failures.
              </p>
            </div>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              The human cost of this corruption extends far beyond wasted money. When the military gets 
              unreliable weapons, American service members die. When F-35s crash due to software failures 
              or engine fires, pilots die. When ships' systems fail in combat, sailors die. 
              Contractor greed literally kills people.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed">
              Until Americans demand real accountability — criminal prosecution of executives who defraud taxpayers, 
              elimination of cost-plus contracts, and actual consequences for failure — this theft will continue. 
              The contractors will keep getting richer, the weapons will keep failing, and taxpayers will keep 
              funding the biggest corporate welfare program in human history.
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">Related Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/pentagon-audit" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Pentagon Audit Failures</h3>
              <p className="text-stone-400 text-sm">8 consecutive failed audits, $3.8T in unaccounted assets</p>
            </Link>
            <Link href="/revolving-door" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Defense Revolving Door</h3>
              <p className="text-stone-400 text-sm">How Pentagon officials cash out with contractors who cause overruns</p>
            </Link>
            <Link href="/contractors" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Top Defense Contractors</h3>
              <p className="text-stone-400 text-sm">The companies profiting from cost overruns and failures</p>
            </Link>
            <Link href="/tools/cost-calculator" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Military Spending Calculator</h3>
              <p className="text-stone-400 text-sm">Calculate what overrun money could buy instead</p>
            </Link>
          </div>
        </section>

        <BackToTop />
      </div>
    </div>
  )
}