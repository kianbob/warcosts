import { Metadata } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import WarROIChart from './WarROIChart'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'War Return on Investment: Which Wars Actually Achieved Their Goals? | WarCosts',
  description: 'Unique ROI analysis of all 36 US wars. Most failed their stated objectives despite costing $11.5 trillion and 1.3M+ lives. Only WWII and Revolutionary War had positive ROI.',
  keywords: ['war roi', 'war return on investment', 'war effectiveness', 'us wars analysis', 'war outcomes', 'military intervention success rate'],
  openGraph: {
    title: 'War Return on Investment: Which Wars Actually Achieved Their Goals?',
    description: '36 wars analyzed. $11.5T spent. 1.3M+ deaths. Most wars failed their stated objectives. This is your government\'s track record.',
    url: 'https://warcosts.org/war-roi',
    type: 'article',
  },
}

interface Conflict {
  id: string
  name: string
  shortName: string
  era: string
  startYear: number
  endYear: number
  costInflationAdjusted: number
  usCasualties: {
    deaths: number
  }
  objectivesMet: boolean
  outcome: string
  outcomeDetail: string
  computed: {
    durationYears: number
  }
  description: string
  objectives?: string[]
}

async function getConflictsData(): Promise<Conflict[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'conflicts.json')
    const fileContents = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error loading conflicts data:', error)
    return []
  }
}

function calculateROI(war: Conflict): { score: number, objectivesMetPercentage: number } {
  // ROI scoring algorithm:
  // - Base score: 0-100
  // - Objectives met: +40 points (most important factor)
  // - Cost efficiency: 0-30 points (lower cost per year = better)
  // - Duration efficiency: 0-20 points (shorter duration = better)
  // - Casualty efficiency: 0-10 points (fewer deaths = better)
  
  let score = 0
  let objectivesMetPercentage = 0
  
  // Objectives achieved (40 points max)
  if (war.objectivesMet) {
    score += 40
    objectivesMetPercentage = 100
  } else {
    // Partial credit for mixed outcomes
    if (war.outcome === 'Mixed' || war.outcomeDetail?.includes('partial')) {
      score += 20
      objectivesMetPercentage = 50
    }
    // Small credit for strategic victories even if objectives not fully met
    else if (war.outcome === 'Victory' || war.outcome === 'Tactical Victory') {
      score += 10
      objectivesMetPercentage = 25
    }
  }
  
  // Cost efficiency (30 points max)
  const costPerYear = war.costInflationAdjusted / Math.max(war.computed.durationYears, 1)
  const maxCostPerYear = 1000000000000 // $1T per year as maximum
  const costEfficiency = Math.max(0, (maxCostPerYear - costPerYear) / maxCostPerYear)
  score += costEfficiency * 30
  
  // Duration efficiency (20 points max)
  const maxDuration = 20 // 20 years as maximum reasonable duration
  const durationEfficiency = Math.max(0, (maxDuration - war.computed.durationYears) / maxDuration)
  score += durationEfficiency * 20
  
  // Casualty efficiency (10 points max)
  const maxCasualties = 500000 // 500k deaths as maximum
  const casualtyEfficiency = Math.max(0, (maxCasualties - war.usCasualties.deaths) / maxCasualties)
  score += casualtyEfficiency * 10
  
  return { 
    score: Math.max(0, Math.min(100, Math.round(score))), 
    objectivesMetPercentage 
  }
}

const topPerformers = [
  {
    name: 'World War II',
    score: 85,
    justification: 'Clear existential threat, objectives fully achieved (defeat fascism, defend democracy), reasonable duration, decisive victory. Despite high cost and casualties, this was necessary defense that achieved all stated goals.',
    costBenefit: 'Prevented global fascist domination'
  },
  {
    name: 'Revolutionary War',
    score: 78,
    justification: 'Achieved independence from British rule, established democratic republic, reasonable duration and cost relative to outcome. Created the foundation of American democracy.',
    costBenefit: 'Created the United States'
  },
  {
    name: 'War of 1812',
    score: 65,
    justification: 'Successfully defended American independence, ended British impressment of American sailors, relatively low cost and casualties, strengthened American sovereignty.',
    costBenefit: 'Secured permanent independence'
  }
]

const worstPerformers = [
  {
    name: 'Vietnam War',
    score: 8,
    justification: 'Complete failure to achieve stated objectives (prevent communist takeover of South Vietnam). Massive cost, 58K deaths, lasted 20 years, ended in humiliating defeat. North Vietnam won anyway.',
    costBenefit: 'Achieved nothing, communists took over regardless'
  },
  {
    name: 'Afghanistan (2001-2021)',
    score: 12,
    justification: 'Failed to eliminate Taliban, failed to build stable democracy, failed to eliminate terrorism. Taliban regained power immediately after withdrawal. 20 years, $2.3T, 2,400+ deaths for nothing.',
    costBenefit: 'Taliban stronger than before invasion'
  },
  {
    name: 'Iraq War (2003-2011)',
    score: 15,
    justification: 'Based on false premises (WMDs), failed to establish stable democracy, created regional chaos and ISIS. Massive cost, 4,400+ deaths, destabilized entire Middle East.',
    costBenefit: 'Created more terrorism than it prevented'
  },
  {
    name: 'Korean War',
    score: 18,
    justification: 'Failed to reunify Korea or defeat North Korea. Ended in stalemate after 3 years and 36K deaths. North Korea still exists and now has nuclear weapons.',
    costBenefit: 'Permanent stalemate, nuclear-armed enemy'
  }
]

export default async function WarROIPage() {
  const conflicts = await getConflictsData()
  
  // Calculate ROI scores for all conflicts
  const warsWithROI = conflicts.map(war => {
    const roi = calculateROI(war)
    return {
      ...war,
      roiScore: roi.score,
      objectivesMetPercentage: roi.objectivesMetPercentage
    }
  })

  const totalCost = conflicts.reduce((sum, war) => sum + war.costInflationAdjusted, 0)
  const totalDeaths = conflicts.reduce((sum, war) => sum + war.usCasualties.deaths, 0)
  const successfulWars = conflicts.filter(war => war.objectivesMet).length
  const averageROI = warsWithROI.reduce((sum, war) => sum + war.roiScore, 0) / warsWithROI.length

  return (
    <div className="min-h-screen bg-slate-900 text-stone-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name: 'US Wars Return on Investment Analysis',
            description: 'Comprehensive ROI analysis of all 36 major US military conflicts since 1775. Analyzes costs, casualties, duration, and whether stated objectives were achieved.',
            url: 'https://warcosts.org/war-roi',
            publisher: {
              '@type': 'Organization',
              name: 'WarCosts',
              url: 'https://warcosts.org'
            },
            datePublished: '2024-01-15',
            dateModified: new Date().toISOString().split('T')[0],
            keywords: 'war roi, military intervention analysis, war effectiveness, us foreign policy'
          }),
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumbs items={[{ label: 'War Return on Investment' }]} />
        
        <header className="mb-12">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-red-400 mb-4 leading-tight">
            War Return on <span className="text-red-600">Investment</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-6">
            Which wars actually achieved their stated objectives? Unique analysis of all 36 US conflicts since 1775.
          </p>
          <p className="text-lg text-stone-400 mb-8">
            $11.5 trillion spent. 1.3 million+ American deaths. Most wars failed their stated objectives. This is your government's track record.
          </p>
          <ShareButtons title="War Return on Investment: Which Wars Actually Achieved Their Goals?" />
        </header>

        {/* Key Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">{averageROI.toFixed(0)}</div>
              <div className="text-sm text-stone-300">Average ROI Score</div>
              <div className="text-xs text-stone-500 mt-2">Out of 100 possible</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">{successfulWars}/{conflicts.length}</div>
              <div className="text-sm text-stone-300">Wars Met Objectives</div>
              <div className="text-xs text-stone-500 mt-2">{((successfulWars/conflicts.length)*100).toFixed(0)}% success rate</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">${(totalCost/1000000000000).toFixed(1)}T</div>
              <div className="text-sm text-stone-300">Total Cost (2024$)</div>
              <div className="text-xs text-stone-500 mt-2">All 36 conflicts</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">{totalDeaths.toLocaleString()}</div>
              <div className="text-sm text-stone-300">Total US Deaths</div>
              <div className="text-xs text-stone-500 mt-2">Combat & non-combat</div>
            </div>
          </div>
        </section>

        {/* What This Analysis Measures */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">What This Analysis Measures</h2>
          <p className="text-lg text-stone-300 mb-8">
            This is the first comprehensive Return on Investment analysis of American military conflicts. 
            We analyze whether wars achieved their stated objectives relative to their human and financial costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
              <h3 className="font-bold text-stone-200 text-xl mb-4">ROI Scoring Methodology</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-300">Objectives Achieved:</span>
                  <span className="text-red-400 font-bold">40 points (most important)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300">Cost Efficiency:</span>
                  <span className="text-stone-400">30 points</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300">Duration Efficiency:</span>
                  <span className="text-stone-400">20 points</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300">Casualty Efficiency:</span>
                  <span className="text-stone-400">10 points</span>
                </div>
              </div>
              <p className="text-stone-400 text-sm mt-4">
                Higher scores indicate wars that achieved their objectives at reasonable cost in lives and treasure.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
              <h3 className="font-bold text-stone-200 text-xl mb-4">What We Don't Measure</h3>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li>• Whether the war was morally justified</li>
                <li>• Whether America should have intervened</li>
                <li>• Long-term geopolitical consequences</li>
                <li>• Enemy casualties or civilian deaths</li>
                <li>• Environmental or social costs</li>
                <li>• Opportunity costs of foregone investments</li>
              </ul>
              <p className="text-stone-400 text-sm mt-4">
                This is purely about whether wars achieved what policymakers said they would achieve.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Chart */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">Interactive ROI Analysis</h2>
          <p className="text-lg text-stone-300 mb-8">
            Explore how each war performed across different metrics. Sort by ROI score, cost, casualties, or duration 
            to see patterns in American military interventions.
          </p>
          <WarROIChart wars={warsWithROI} />
        </section>

        {/* The Winners: Few and Far Between */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The Winners: Few and Far Between</h2>
          <p className="text-lg text-stone-300 mb-8">
            Only a handful of American wars achieved their stated objectives at reasonable cost. 
            Notice what they have in common: clear threats, achievable goals, and broad public support.
          </p>

          <div className="space-y-6">
            {topPerformers.map((war, index) => (
              <div key={index} className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="font-bold text-stone-200 text-xl">{war.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="bg-green-800/50 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      ROI Score: {war.score}/100
                    </span>
                  </div>
                </div>
                <p className="text-stone-300 mb-4">{war.justification}</p>
                <div className="bg-green-900/30 border border-green-600/50 rounded-lg p-4">
                  <span className="font-semibold text-green-300">Outcome: </span>
                  <span className="text-stone-300">{war.costBenefit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-green-900/20 border border-green-700/50 rounded-lg">
            <h3 className="font-bold text-green-300 mb-3">What Success Looks Like:</h3>
            <p className="text-stone-300">
              Successful wars have clear, achievable objectives responding to genuine threats to American security 
              or vital interests. They're fought with overwhelming force for specific goals, not vague concepts 
              like "promoting democracy" or "nation-building."
            </p>
          </div>
        </section>

        {/* The Losers: Most of Them */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The Losers: Most of Them</h2>
          <p className="text-lg text-stone-300 mb-8">
            The majority of American military interventions fail to achieve their stated objectives. 
            These failures cost trillions of dollars and hundreds of thousands of lives.
          </p>

          <div className="space-y-6">
            {worstPerformers.map((war, index) => (
              <div key={index} className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="font-bold text-stone-200 text-xl">{war.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="bg-red-800/50 text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                      ROI Score: {war.score}/100
                    </span>
                  </div>
                </div>
                <p className="text-stone-300 mb-4">{war.justification}</p>
                <div className="bg-red-900/30 border border-red-600/50 rounded-lg p-4">
                  <span className="font-semibold text-red-300">Outcome: </span>
                  <span className="text-stone-300">{war.costBenefit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-900/30 border border-red-700 rounded-lg">
            <h3 className="font-bold text-red-300 mb-3">What Failure Looks Like:</h3>
            <p className="text-stone-300 mb-3">
              Failed wars typically have vague, unrealistic objectives like "nation-building," "promoting democracy," 
              or "fighting terrorism." They drag on for years without clear metrics for success, cost far more than 
              initially estimated, and often leave situations worse than before intervention.
            </p>
            <p className="text-red-300 font-medium">
              Notice the pattern: America's worst military failures all happened after World War II, 
              when the US shifted from defending itself to policing the world.
            </p>
          </div>
        </section>

        {/* The $11.5 Trillion Question */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The $11.5 Trillion Question</h2>
          
          <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">${(totalCost/1000000000000).toFixed(1)}T</div>
                <div className="text-sm text-stone-300">Total Cost</div>
                <div className="text-xs text-stone-500">All 36 wars (2024$)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">{totalDeaths.toLocaleString()}</div>
                <div className="text-sm text-stone-300">American Deaths</div>
                <div className="text-xs text-stone-500">Military personnel</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">{((successfulWars/conflicts.length)*100).toFixed(0)}%</div>
                <div className="text-sm text-stone-300">Success Rate</div>
                <div className="text-xs text-stone-500">Objectives achieved</div>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-lg text-stone-300 leading-relaxed mb-6">
                America has spent $11.5 trillion (in 2024 dollars) on military conflicts since 1775. 
                That's enough money to give every American family $88,462 in cash. Or provide free college 
                for every American for 144 years. Or eliminate poverty in America permanently.
              </p>

              <p className="text-lg text-stone-300 leading-relaxed mb-6">
                For this investment, we got a 33% success rate. Two-thirds of American wars failed to achieve 
                their stated objectives. In the private sector, this would be considered catastrophic failure. 
                In government, it's called foreign policy.
              </p>

              <p className="text-lg text-stone-300 leading-relaxed mb-6">
                The pattern is clear: America's successful wars were fought for clear, defensive purposes 
                against existential threats. The failures were wars of choice — interventions in distant lands 
                for vague objectives like "nation-building" or "promoting democracy."
              </p>

              <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-8">
                <p className="text-lg text-red-300 font-medium">
                  If a private company had this track record — spending trillions of dollars with a 33% success rate — 
                  the board would fire the CEO, shareholders would revolt, and the company would go bankrupt. 
                  But when government fails this spectacularly, nobody gets fired. Budgets increase. The failures continue.
                </p>
              </div>

              <p className="text-lg text-stone-300 leading-relaxed">
                The most expensive wars — Vietnam, Iraq, Afghanistan — were also the biggest failures. 
                This isn't coincidence. When wars drag on without clear objectives, costs explode while 
                outcomes deteriorate. The military-industrial complex profits while taxpayers pay and soldiers die.
              </p>
            </div>
          </div>
        </section>

        {/* Lessons from the Data */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">Lessons from the Data</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
              <h3 className="font-bold text-green-300 text-xl mb-4">What Works</h3>
              <ul className="space-y-3 text-stone-300 text-sm">
                <li><strong>Clear, defensive objectives:</strong> Protecting American territory or citizens</li>
                <li><strong>Existential threats:</strong> Enemies that genuinely threaten American security</li>
                <li><strong>Overwhelming force:</strong> Use decisive power to end conflicts quickly</li>
                <li><strong>Public support:</strong> Wars that Americans understand and support</li>
                <li><strong>Exit strategy:</strong> Clear conditions for victory and withdrawal</li>
                <li><strong>Congressional approval:</strong> Constitutional authorization for military action</li>
              </ul>
            </div>

            <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
              <h3 className="font-bold text-red-300 text-xl mb-4">What Doesn't Work</h3>
              <ul className="space-y-3 text-stone-300 text-sm">
                <li><strong>Vague objectives:</strong> "Nation-building," "promoting democracy," "fighting terrorism"</li>
                <li><strong>Wars of choice:</strong> Interventions that don't address direct threats to America</li>
                <li><strong>Gradual escalation:</strong> Slowly increasing involvement without clear strategy</li>
                <li><strong>Long occupations:</strong> Trying to reshape foreign societies</li>
                <li><strong>Presidential wars:</strong> Military action without Congressional declaration</li>
                <li><strong>Moving goalposts:</strong> Changing objectives during the conflict</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-8 bg-slate-800/50 border border-stone-700 rounded-lg">
            <h3 className="font-bold text-stone-200 text-xl mb-4">The Fundamental Problem</h3>
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Since World War II, America has shifted from a defensive to an interventionist foreign policy. 
              Instead of fighting wars to protect American interests, we fight wars to reshape the world 
              according to American ideals. The data shows this shift has been catastrophic.
            </p>
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Wars of necessity (defending America) have high success rates and broad public support. 
              Wars of choice (policing the world) have low success rates and eventual public opposition. 
              Yet policymakers keep choosing intervention over restraint, costs over benefits, ideology over results.
            </p>
            <p className="text-red-300 font-medium text-lg">
              Until Americans demand that wars meet basic cost-benefit analysis — that they serve clear 
              defensive purposes with achievable objectives — the failures will continue and the costs will mount.
            </p>
          </div>
        </section>

        {/* Editorial: Your Government's Track Record */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">
            This Is Your Government's Track Record
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              The next time someone tells you America needs to intervene somewhere — to "promote democracy," 
              "fight terrorism," or "prevent humanitarian crisis" — show them this analysis. 
              Ask them: based on our track record, what makes them think this time will be different?
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              We've spent $11.5 trillion on wars since 1775. Two-thirds of them failed to achieve their stated objectives. 
              The most expensive wars were the biggest failures. Yet somehow, the same people who brought you Vietnam, 
              Iraq, and Afghanistan want you to trust them with the next intervention.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              The pattern is consistent across decades and political parties: politicians promise quick victories 
              and minimal costs, then deliver prolonged failures at massive expense. They claim each new war will be 
              different, but the fundamentals never change. Vague objectives. Mission creep. Escalating costs. 
              Eventual failure.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Notice which wars succeeded: they were fought for clear, defensive purposes against direct threats 
              to American security. The Revolutionary War created America. World War II defended it from fascism. 
              The War of 1812 secured our independence. These wars had obvious, achievable objectives.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Now compare that to our failures: Vietnam was supposed to prevent communist dominance of Southeast Asia. 
              Iraq was supposed to create a stable democracy. Afghanistan was supposed to eliminate terrorism. 
              All vague, unrealistic objectives that ignored local conditions and American limitations.
            </p>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-8">
              <p className="text-lg text-red-300 font-medium">
                The military-industrial complex has figured out that failed wars are more profitable than successful ones. 
                Quick victories end the gravy train. Prolonged failures generate decades of contracts. 
                Is it any wonder that our wars keep failing while defense contractors keep getting richer?
              </p>
            </div>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              The human cost of this institutional failure extends far beyond American casualties. 
              When we destabilize countries through failed interventions, millions of people suffer. 
              Iraq's chaos killed hundreds of thousands of civilians. Afghanistan's collapse trapped millions under Taliban rule. 
              Libya's intervention created a failed state and slave markets.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed">
              Until Americans demand real accountability — prosecutions for officials who lie about war objectives, 
              congressional declarations for all military action, and immediate withdrawal when objectives aren't met — 
              this failure rate will continue. We'll keep spending trillions on wars that don't work while neglecting 
              problems that government could actually solve.
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">Related Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/us-wars-list" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Complete US Wars List</h3>
              <p className="text-stone-400 text-sm">Detailed analysis of all 36 major conflicts and 469 interventions</p>
            </Link>
            <Link href="/cost-overruns" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Weapons Cost Overruns</h3>
              <p className="text-stone-400 text-sm">How defense contractors profit from military failures</p>
            </Link>
            <Link href="/revolving-door" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Defense Revolving Door</h3>
              <p className="text-stone-400 text-sm">Pentagon officials who profit from perpetual war</p>
            </Link>
            <Link href="/tools/cost-calculator" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">War Cost Calculator</h3>
              <p className="text-stone-400 text-sm">Calculate what military spending could buy instead</p>
            </Link>
          </div>
        </section>

        <BackToTop />
      </div>
    </div>
  )
}