import { Metadata } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import DemographicsChart from './DemographicsChart'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Who Fights America\'s Wars: Military Service Demographics & Class Divide | WarCosts',
  description: 'Only 0.5% of Americans served post-9/11. Military recruitment heavily from rural, southern, lower-income areas. Veterans are 7% of population but 14% of suicides. The class divide of war.',
  keywords: ['military demographics', 'who serves in military', 'military recruitment', 'veteran suicide', 'military class divide', 'who fights wars'],
  openGraph: {
    title: 'Who Fights America\'s Wars: The Military-Civilian Class Divide',
    description: '0.5% served post-9/11. 17 veterans die by suicide daily. Military recruitment targets rural, poor communities. The people making war decisions don\'t send their kids.',
    url: 'https://warcosts.org/who-fights',
    type: 'article',
  },
}

interface StateFootprint {
  state: string
  code: string
  total: number
}

async function getStateFootprintData(): Promise<StateFootprint[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'state-footprint.json')
    const fileContents = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error loading state footprint data:', error)
    return []
  }
}

const militaryDemographics = {
  totalPopulation: 331900000,
  veteranPopulation: 18200000,
  activeDuty: 1328000,
  reserves: 760000,
  postNinelevenVets: 2700000,
  postNinelevenServed: 1650000 // 0.5% of population
}

const veteranCrisis = [
  {
    statistic: '17 per day',
    description: 'Veterans die by suicide daily',
    details: 'Despite being only 7% of population, veterans account for 14% of all US suicides',
    source: 'VA 2022 National Veteran Suicide Prevention Annual Report'
  },
  {
    statistic: '29%',
    description: 'Iraq/Afghanistan veterans with PTSD',
    details: '500,000+ Iraq/Afghanistan veterans diagnosed with PTSD, many more undiagnosed',
    source: 'RAND Corporation study'
  },
  {
    statistic: '414,000',
    description: 'TBIs among service members (2000-2019)',
    details: 'Traumatic brain injuries from combat, training accidents, and blast exposure',
    source: 'Defense and Veterans Brain Injury Center'
  },
  {
    statistic: '40%',
    description: 'Post-9/11 veterans with disabilities',
    details: 'Over 1 million veterans receiving disability compensation for service-connected injuries',
    source: 'Veterans Benefits Administration'
  },
  {
    statistic: '2x higher',
    description: 'Veteran unemployment vs civilian rate',
    details: 'Younger veterans (18-24) have even higher unemployment rates',
    source: 'Bureau of Labor Statistics'
  },
  {
    statistic: '11%',
    description: 'Veterans experiencing homelessness',
    details: '37,000+ veterans are homeless on any given night despite representing 7% of population',
    source: 'HUD Point-in-Time Count'
  }
]

const recruitmentTargets = [
  {
    demographic: 'Rural Americans',
    percentage: '24%',
    populationShare: '19%',
    overRepresentation: '+26%',
    why: 'Limited economic opportunities, cultural tradition of service, targeted recruitment'
  },
  {
    demographic: 'Southern States',
    percentage: '44%',
    populationShare: '38%',
    overRepresentation: '+16%',
    why: 'Military culture, family traditions, economic incentives, major military bases'
  },
  {
    demographic: 'High School Only',
    percentage: '59%',
    populationShare: '38%',
    overRepresentation: '+55%',
    why: 'Military offers job training, education benefits, and economic mobility'
  },
  {
    demographic: 'Household Income <$50k',
    percentage: '48%',
    populationShare: '42%',
    overRepresentation: '+14%',
    why: 'Economic necessity drives military service as path to middle class'
  },
  {
    demographic: 'Minority Communities',
    percentage: '43%',
    populationShare: '38%',
    overRepresentation: '+13%',
    why: 'Military seen as path to economic advancement and citizenship rights'
  }
]

const eliteAvoidance = [
  {
    institution: 'Congress (2023)',
    members: 535,
    veterans: 95,
    percentage: '18%',
    note: 'Down from 75% in 1977. Most are older veterans from Vietnam era or before.',
    children: 'Fewer than 10 members have children currently serving in military'
  },
  {
    institution: 'Ivy League Universities',
    students: 65000,
    rotc: 1100,
    percentage: '1.7%',
    note: 'ROTC banned from many elite campuses during Vietnam, slowly returning',
    children: 'Elite college graduates rarely join military as enlisted personnel'
  },
  {
    institution: 'Fortune 500 CEOs',
    total: 500,
    veterans: 25,
    percentage: '5%',
    note: 'Business leaders increasingly have no military experience',
    children: 'Corporate executives\' children typically pursue business/finance careers'
  },
  {
    institution: 'Federal Judges',
    total: 870,
    veterans: 52,
    percentage: '6%',
    note: 'Judicial nominees increasingly have no military background',
    children: 'Federal judges\' children overwhelmingly attend elite law schools'
  },
  {
    institution: 'Top 1% Income',
    households: 1300000,
    military: 13000,
    percentage: '1%',
    note: 'Highest earners have lowest military participation rates',
    children: 'Wealthy families\' children pursue finance, tech, consulting careers'
  }
]

const historicalComparison = [
  {
    war: 'World War II',
    totalPopulation: 132000000,
    served: 16100000,
    percentage: '12.2%',
    draft: 'Yes - universal conscription',
    eliteParticipation: 'High - FDR\'s sons served, many elite families participated'
  },
  {
    war: 'Korean War',
    totalPopulation: 151000000,
    served: 5700000,
    percentage: '3.8%',
    draft: 'Yes - with college deferments',
    eliteParticipation: 'Moderate - college deferments allowed avoidance'
  },
  {
    war: 'Vietnam War',
    totalPopulation: 205000000,
    served: 8700000,
    percentage: '4.2%',
    draft: 'Yes - with extensive deferments',
    eliteParticipation: 'Low - college, medical, hardship deferments common'
  },
  {
    war: 'Post-9/11 Wars',
    totalPopulation: 331000000,
    served: 1650000,
    percentage: '0.5%',
    draft: 'No - all volunteer force',
    eliteParticipation: 'Minimal - economic segregation of military service'
  }
]

const consequencesOfSeparation = [
  {
    consequence: 'Easier War Decisions',
    description: 'Politicians can start wars without personal cost to themselves or their families',
    example: 'Iraq War supported by 77% of Congress members with no military children'
  },
  {
    consequence: 'Reduced Public Scrutiny',
    description: 'Wars continue for decades with minimal public awareness or opposition',
    example: 'Afghanistan War lasted 20 years with minimal sustained protest'
  },
  {
    consequence: 'Military-Civilian Cultural Gap',
    description: 'Growing divide between military and civilian cultures, values, and experiences',
    example: 'Only 29% of Americans know someone who served in Iraq/Afghanistan'
  },
  {
    consequence: 'Policy Disconnected from Reality',
    description: 'Leaders make military policy without understanding military life or warfare',
    example: 'Pentagon officials with no combat experience planning counterinsurgency'
  },
  {
    consequence: 'Veteran Issues Neglected',
    description: 'Political leaders have no personal stake in veteran care and benefits',
    example: 'VA healthcare scandals persist because voters don\'t know veterans'
  },
  {
    consequence: 'Perpetual War Economy',
    description: 'No political pressure to end wars because elites profit without fighting',
    example: 'Defense spending increases while veteran homelessness continues'
  }
]

export default async function WhoFightsPage() {
  const stateFootprint = await getStateFootprintData()
  
  return (
    <div className="min-h-screen bg-slate-900 text-stone-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            name: 'Who Fights America\'s Wars: Military Demographics & Class Divide',
            description: 'Analysis of who serves in America\'s military, veteran crisis statistics, and the growing class divide between those who fight and those who decide on war.',
            url: 'https://warcosts.org/who-fights',
            publisher: {
              '@type': 'Organization',
              name: 'WarCosts',
              url: 'https://warcosts.org'
            },
            datePublished: '2024-01-15',
            dateModified: new Date().toISOString().split('T')[0],
            keywords: 'military demographics, veteran suicide, military recruitment, class divide'
          }),
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Breadcrumbs items={[{ label: 'Who Fights America\'s Wars' }]} />
        
        <header className="mb-12">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-red-400 mb-4 leading-tight">
            Who Fights <span className="text-red-600">America's Wars</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-6">
            Only 0.5% of Americans served post-9/11. Military recruitment heavily targets rural, southern, lower-income communities.
          </p>
          <p className="text-lg text-stone-400 mb-8">
            The class divide: those who make war decisions don't send their kids to fight. 
            Those who fight have no voice in war decisions.
          </p>
          <ShareButtons title="Who Fights America's Wars: Military Demographics & Class Divide" />
        </header>

        {/* Key Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">0.5%</div>
              <div className="text-sm text-stone-300">Americans Served Post-9/11</div>
              <div className="text-xs text-stone-500 mt-2">{militaryDemographics.postNinelevenServed.toLocaleString()} of {(militaryDemographics.totalPopulation/1000000).toFixed(0)}M people</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">17</div>
              <div className="text-sm text-stone-300">Veterans Die by Suicide Daily</div>
              <div className="text-xs text-stone-500 mt-2">14% of all US suicides</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">29%</div>
              <div className="text-sm text-stone-300">Iraq/Afghanistan Vets with PTSD</div>
              <div className="text-xs text-stone-500 mt-2">500,000+ diagnosed</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">414K</div>
              <div className="text-sm text-stone-300">Service Member TBIs (2000-2019)</div>
              <div className="text-xs text-stone-500 mt-2">Traumatic brain injuries</div>
            </div>
          </div>
        </section>

        {/* The Volunteer Divide */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The All-Volunteer Divide</h2>
          <p className="text-lg text-stone-300 mb-8">
            Since ending the draft in 1973, America has created a professional military class increasingly 
            separate from civilian society. Only 0.5% of Americans have served in post-9/11 wars, 
            compared to 12% who served in World War II.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
              <h3 className="font-bold text-stone-200 text-xl mb-4">Then: World War II</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-stone-300">Population Served:</span>
                  <span className="text-green-400 font-bold">12.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-300">Total Served:</span>
                  <span className="text-stone-400">16.1 million</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-300">Conscription:</span>
                  <span className="text-stone-400">Universal draft</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-300">Elite Participation:</span>
                  <span className="text-green-400">High</span>
                </div>
              </div>
              <p className="text-stone-400 text-sm mt-4">
                President Roosevelt's four sons all served. Elite families participated alongside working class.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
              <h3 className="font-bold text-stone-200 text-xl mb-4">Now: Post-9/11 Wars</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-stone-300">Population Served:</span>
                  <span className="text-red-400 font-bold">0.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-300">Total Served:</span>
                  <span className="text-stone-400">1.65 million</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-300">Conscription:</span>
                  <span className="text-stone-400">All volunteer</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-300">Elite Participation:</span>
                  <span className="text-red-400">Minimal</span>
                </div>
              </div>
              <p className="text-stone-400 text-sm mt-4">
                Fewer than 10 Congress members have children currently serving. Elite families pursue other careers.
              </p>
            </div>
          </div>

          <div className="bg-red-900/20 border border-slate-700 rounded-lg p-6">
            <h3 className="font-bold text-red-300 mb-3">The Result:</h3>
            <p className="text-stone-300">
              America now has a warrior class that fights and a civilian class that watches. 
              The people who decide whether to go to war have no skin in the game. Their children won't be fighting. 
              Their families won't sacrifice. This makes war easier to start and harder to end.
            </p>
          </div>
        </section>

        {/* Who Gets Recruited */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">Who Gets Recruited</h2>
          <p className="text-lg text-stone-300 mb-8">
            Military recruitment isn't random. It systematically targets specific demographics: 
            rural communities, southern states, lower-income families, and people without college degrees. 
            This isn't coincidence — it's strategy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recruitmentTargets.map((target, index) => (
              <div key={index} className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
                <h3 className="font-bold text-stone-200 text-lg mb-3">{target.demographic}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-stone-400 text-sm">Military:</span>
                    <span className="text-red-400 font-bold">{target.percentage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400 text-sm">Population:</span>
                    <span className="text-stone-400">{target.populationShare}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400 text-sm">Over-represented:</span>
                    <span className="text-orange-400 font-bold">{target.overRepresentation}</span>
                  </div>
                </div>
                <p className="text-stone-300 text-sm">{target.why}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-slate-800/50 border border-stone-700 rounded-lg">
            <h3 className="font-bold text-stone-200 text-xl mb-4">The Recruitment Machine</h3>
            <p className="text-stone-300 mb-4">
              The military spends $15+ billion annually on recruitment, with sophisticated targeting 
              of high schools in lower-income areas. Recruiters focus on schools where students have 
              limited college prospects and economic opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-400 mb-1">$15B+</div>
                <div className="text-sm text-stone-300">Annual recruitment spending</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-400 mb-1">8,000+</div>
                <div className="text-sm text-stone-300">Military recruiters nationwide</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-400 mb-1">22,000+</div>
                <div className="text-sm text-stone-300">High schools with recruiters</div>
              </div>
            </div>
          </div>
        </section>

        {/* Demographics Charts */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The Demographics of Service</h2>
          <p className="text-lg text-stone-300 mb-8">
            These charts reveal the systematic class and geographic divides in military service. 
            Notice the clear patterns: lower income correlates with higher military service, 
            rural areas provide disproportionate recruits, and the South carries a heavier burden.
          </p>
          <DemographicsChart stateData={stateFootprint} />
        </section>

        {/* The Veteran Crisis */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The Veteran Crisis</h2>
          <p className="text-lg text-stone-300 mb-8">
            Veterans are 7% of the population but bear a disproportionate burden of America's wars. 
            They suffer higher rates of suicide, PTSD, traumatic brain injury, unemployment, and homelessness. 
            This is the cost of outsourcing war to a warrior class.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {veteranCrisis.map((crisis, index) => (
              <div key={index} className="bg-red-900/20 border border-slate-700 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-red-400 mb-2">{crisis.statistic}</div>
                  <h3 className="font-bold text-stone-200 text-lg">{crisis.description}</h3>
                </div>
                <p className="text-stone-300 text-sm mb-3">{crisis.details}</p>
                <div className="text-xs text-stone-500 border-t border-stone-600 pt-2">
                  Source: {crisis.source}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-8 bg-red-900/30 border border-red-700 rounded-lg">
            <h3 className="font-bold text-red-300 text-xl mb-4">22 Veterans Die by Suicide Every Day</h3>
            <p className="text-stone-300 mb-4">
              That's one veteran suicide every 65 minutes. Veterans are 1.5 times more likely to die by suicide 
              than non-veterans, even after adjusting for age and sex. Female veterans are 2.2 times more likely 
              to die by suicide than civilian women.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-400 mb-1">6,261</div>
                <div className="text-sm text-stone-300">Veteran suicides in 2019</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-400 mb-1">1.5x</div>
                <div className="text-sm text-stone-300">Higher rate than civilians</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-400 mb-1">57%</div>
                <div className="text-sm text-stone-300">Used firearms</div>
              </div>
            </div>
            <p className="text-red-300 font-medium mt-4">
              These aren't statistics — they're human beings destroyed by wars that achieved nothing.
            </p>
          </div>
        </section>

        {/* Elite Avoidance */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">How Elites Avoid Military Service</h2>
          <p className="text-lg text-stone-300 mb-8">
            America's political, business, and cultural elites have largely withdrawn from military service. 
            The people who make war decisions — politicians, judges, CEOs, academics — have no personal stake in the outcome.
          </p>

          <div className="space-y-6">
            {eliteAvoidance.map((elite, index) => (
              <div key={index} className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="font-bold text-stone-200 text-xl">{elite.institution}</h3>
                  <div className="text-red-400 font-bold text-lg">{elite.percentage} veterans</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-stone-400">Total:</span>
                    <span className="text-stone-300 ml-2">{elite.total?.toLocaleString() || elite.students?.toLocaleString() || elite.households?.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-stone-400">Veterans:</span>
                    <span className="text-stone-300 ml-2">{elite.veterans?.toLocaleString() || elite.rotc?.toLocaleString() || elite.military?.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-stone-400">Percentage:</span>
                    <span className="text-red-400 ml-2 font-bold">{elite.percentage}</span>
                  </div>
                </div>
                <p className="text-stone-300 text-sm mb-3">{elite.note}</p>
                <div className="bg-red-900/20 border border-slate-700 rounded-lg p-3">
                  <span className="font-semibold text-red-300">Their Children: </span>
                  <span className="text-stone-300 text-sm">{elite.children}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-900/30 border border-red-700 rounded-lg">
            <h3 className="font-bold text-red-300 mb-3 text-xl">The Yellow Ribbon Hypocrisy</h3>
            <p className="text-stone-300 mb-3">
              Elite Americans love to "support the troops" with yellow ribbon magnets and patriotic rhetoric. 
              But when it comes to actual military service — for themselves or their children — they find other priorities. 
              Their kids go to Harvard, not Helmand Province.
            </p>
            <p className="text-red-300 font-medium">
              This isn't patriotism — it's outsourcing. The wealthy outsource military service to the working class 
              the same way they outsource manufacturing to China. Cheap, convenient, and out of sight.
            </p>
          </div>
        </section>

        {/* The Consequences of Separation */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The Consequences of Military-Civilian Separation</h2>
          <p className="text-lg text-stone-300 mb-8">
            When political elites have no personal stake in military outcomes, wars become easier to start and harder to end. 
            The costs fall on others while the benefits flow to defense contractors and geopolitical strategists.
          </p>

          <div className="space-y-6">
            {consequencesOfSeparation.map((consequence, index) => (
              <div key={index} className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
                <h3 className="font-bold text-red-400 text-xl mb-3">{consequence.consequence}</h3>
                <p className="text-stone-300 mb-4">{consequence.description}</p>
                <div className="bg-red-900/20 border border-slate-700 rounded-lg p-4">
                  <span className="font-semibold text-red-300">Example: </span>
                  <span className="text-stone-300 text-sm">{consequence.example}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-8 bg-red-900/30 border border-red-700 rounded-lg">
            <h3 className="font-bold text-red-300 text-xl mb-4">The Military-Industrial-Academic Complex</h3>
            <p className="text-stone-300 mb-4">
              America's foreign policy establishment — politicians, think tanks, academics, contractors — 
              has created a self-perpetuating system that profits from war while avoiding its costs. 
              They design the wars, others fight them, and they profit from the outcomes.
            </p>
            <p className="text-stone-300 mb-4">
              This separation allows for remarkable intellectual dishonesty. The same people who advocate 
              "humanitarian intervention" would never send their own children to die for humanitarian causes. 
              The same politicians who vote for war ensure their kids get college deferments or join the National Guard.
            </p>
            <p className="text-red-300 font-medium">
              Until America's decision-makers have personal stakes in military outcomes — their children, their futures, 
              their wealth — they will continue to treat war as a video game played with other people's lives.
            </p>
          </div>
        </section>

        {/* Historical Context */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">Historical Context: How We Got Here</h2>
          
          <div className="space-y-6">
            {historicalComparison.map((period, index) => (
              <div key={index} className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
                <h3 className="font-bold text-stone-200 text-xl mb-4">{period.war}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">{period.percentage}</div>
                    <div className="text-xs text-stone-400">Population Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-stone-300">{(period.served/1000000).toFixed(1)}M</div>
                    <div className="text-xs text-stone-400">Total Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-stone-300">{period.draft.split(' - ')[0]}</div>
                    <div className="text-xs text-stone-400">Draft Status</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold ${period.eliteParticipation.includes('High') ? 'text-green-400' : 
                      period.eliteParticipation.includes('Moderate') ? 'text-yellow-400' : 'text-red-400'}`}>
                      {period.eliteParticipation.split(' - ')[0]}
                    </div>
                    <div className="text-xs text-stone-400">Elite Participation</div>
                  </div>
                </div>
                <p className="text-stone-300 text-sm">{period.eliteParticipation}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-slate-800/50 border border-stone-700 rounded-lg">
            <h3 className="font-bold text-stone-200 text-xl mb-4">The Turning Point: 1973</h3>
            <p className="text-stone-300 mb-4">
              The end of the draft in 1973 fundamentally changed American civil-military relations. 
              What was sold as "professional military" became class-based military service. 
              The volunteer force solved the political problem of an unpopular war (Vietnam) 
              by removing middle-class families from the equation.
            </p>
            <p className="text-red-300 font-medium">
              Since 1973, America has fought longer wars with less public scrutiny. 
              The all-volunteer force didn't make military more professional — it made war more politically sustainable 
              by exempting the middle and upper classes from its costs.
            </p>
          </div>
        </section>

        {/* Editorial: The Moral Hazard of Elite Exemption */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">
            The Moral Hazard of Elite Exemption
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              America has created a moral hazard in military affairs: the people who decide whether to go to war 
              face none of its costs. Their children won't fight. Their communities won't sacrifice. 
              Their investments often profit from defense contracts. This makes war too easy to choose.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Consider the human cost of this separation: 17 veterans die by suicide every day. 
              That's more American deaths than most terrorist attacks, happening every single day, 
              year after year. Yet because these veterans come disproportionately from rural, southern, 
              lower-income communities, their deaths barely register in elite consciousness.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              The geographic concentration of military service creates entire regions that bear the burden 
              of America's wars while other regions remain untouched. Drive through rural Georgia, Alabama, 
              or Mississippi and you'll see the cost in broken families, disabled veterans, and military cemeteries. 
              Drive through Manhattan's Upper East Side and you'll see none of it.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              This isn't sustainable morally or politically. A democracy cannot indefinitely ask some citizens 
              to fight and die for policies designed by other citizens who risk nothing. Eventually, 
              the warrior class will question why they should sacrifice for a society that won't sacrifice for them.
            </p>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-8">
              <p className="text-lg text-red-300 font-medium">
                The solution isn't to abolish the volunteer military — it's to ensure that war decisions 
                affect all classes equally. This could mean universal service, war taxes that hit the wealthy, 
                or constitutional requirements that Congress members' children serve before voting for war. 
                The key is skin in the game.
              </p>
            </div>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              The Founders understood this principle. They feared standing armies partly because they knew 
              professional soldiers could be used by elites to fight wars that benefited few at the cost of many. 
              Their solution was citizen-soldiers and militia — military service as civic duty, not class destiny.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed">
              Until America returns to that principle — until military service and its costs are shared across 
              all classes — we will continue to fight unnecessary wars that enrich defense contractors, 
              empower foreign policy elites, and destroy the lives of working-class volunteers who believed 
              they were serving their country, not subsidizing other people's geopolitical ambitions.
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">Related Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/war-roi" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">War Return on Investment</h3>
              <p className="text-stone-400 text-sm">Analysis of which wars achieved their objectives vs. human costs</p>
            </Link>
            <Link href="/us-wars-list" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Complete US Wars List</h3>
              <p className="text-stone-400 text-sm">Every American war and military intervention since 1776</p>
            </Link>
            <Link href="/revolving-door" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Defense Revolving Door</h3>
              <p className="text-stone-400 text-sm">Pentagon officials who profit from military-industrial complex</p>
            </Link>
            <Link href="/tools/cost-calculator" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Military Spending Calculator</h3>
              <p className="text-stone-400 text-sm">Calculate what military budgets could buy instead</p>
            </Link>
          </div>
        </section>

        <BackToTop />
      </div>
    </div>
  )
}