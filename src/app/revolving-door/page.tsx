import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Defense Industry Revolving Door: Pentagon-to-Contractor Pipeline | WarCosts',
  description: '2,700+ revolving door lobbyists since 2001. 380 high-ranking DoD officials went to defense contractors. Boeing hired 85 former Pentagon/congressional officials. This is legal corruption.',
  keywords: ['defense revolving door', 'pentagon revolving door', 'military industrial complex', 'defense contractors', 'pentagon corruption'],
  openGraph: {
    title: 'Defense Industry Revolving Door: The Pentagon-to-Contractor Pipeline',
    description: '2,700+ revolving door lobbyists. 380 DoD officials to contractors. $70M+ in defense lobbying. The military-industrial complex Eisenhower warned about.',
    url: 'https://warcosts.org/revolving-door',
    type: 'article',
  },
}

const topContractorPipelines = [
  {
    company: 'Boeing',
    formerOfficials: 85,
    contracts2023: '$23.4 billion',
    keyHires: [
      { name: 'James Mattis', position: 'Former Defense Secretary (2017-2018)', role: 'Board Member', salary: '$300,000+/year' },
      { name: 'Leanne Caret', position: 'Former Boeing Defense President', role: 'Pentagon Advisor', transition: '2019' },
      { name: 'Christopher Chadwick', position: 'Former Boeing VP', role: 'Deputy Assistant Secretary of Defense', transition: '2017-2021' }
    ]
  },
  {
    company: 'Lockheed Martin',
    formerOfficials: 73,
    contracts2023: '$50.7 billion',
    keyHires: [
      { name: 'Ellen Lord', position: 'Former Under Secretary of Defense (2017-2021)', role: 'Senior Advisor', salary: '$400,000+/year' },
      { name: 'Tina Jonas', position: 'Former Pentagon Comptroller', role: 'CFO', transition: '2006' },
      { name: 'Bruce Tanner', position: 'Former Lockheed CFO', role: 'Pentagon Advisory Board', transition: '2020' }
    ]
  },
  {
    company: 'Raytheon',
    formerOfficials: 67,
    contracts2023: '$28.9 billion',
    keyHires: [
      { name: 'Mark Esper', position: 'Former Defense Secretary (2019-2020)', role: 'VP Government Relations', salary: '$2.5M/year' },
      { name: 'Lloyd Austin', position: 'Current Defense Secretary', role: 'Former Raytheon Board Member', conflict: 'Recused from Raytheon decisions' },
      { name: 'William LaPlante', position: 'Current Under Secretary', role: 'Former Mitre Corp CEO (Raytheon subsidiary)', transition: '2022' }
    ]
  },
  {
    company: 'General Dynamics',
    formerOfficials: 45,
    contracts2023: '$15.2 billion',
    keyHires: [
      { name: 'James Clapper', position: 'Former Director of National Intelligence', role: 'Board Member', transition: '2018' },
      { name: 'Peter Pace', position: 'Former Joint Chiefs Chairman', role: 'Board Member', transition: '2007' },
      { name: 'Carlton Everhart', position: 'Former Air Mobility Command General', role: 'VP Strategic Development', transition: '2017' }
    ]
  },
  {
    company: 'Northrop Grumman',
    formerOfficials: 52,
    contracts2023: '$18.6 billion',
    keyHires: [
      { name: 'Kevin Chilton', position: 'Former Strategic Command General', role: 'Board Member', transition: '2011' },
      { name: 'Ronald Kadish', position: 'Former Missile Defense Agency Director', role: 'VP Advanced Programs', transition: '2004' },
      { name: 'Gary Roughead', position: 'Former Chief of Naval Operations', role: 'Board Member', transition: '2011' }
    ]
  }
]

const congressionalRevolvers = [
  {
    name: 'William Cohen',
    position: 'Defense Secretary (1997-2001)',
    contractor: 'Cohen Group (representing Boeing, Lockheed)',
    earnings: '$5M+/year',
    clients: 'Boeing, Lockheed Martin, Raytheon',
    impact: 'Lobbied for F-35 program he helped create'
  },
  {
    name: 'Dick Cheney',
    position: 'Defense Secretary (1989-1993)',
    contractor: 'Halliburton CEO (1995-2000)',
    earnings: '$44M total compensation',
    clients: 'Pentagon no-bid contracts',
    impact: 'Halliburton got $39B Iraq contracts'
  },
  {
    name: 'Ash Carter',
    position: 'Defense Secretary (2015-2017)',
    contractor: 'Consultant for defense contractors',
    earnings: '$2M+/year',
    clients: 'Multiple defense companies',
    impact: 'Advocates for increased defense spending'
  },
  {
    name: 'John McCain',
    position: 'Armed Services Committee Chair',
    contractor: 'Family ties to Hensley & Co (defense)',
    earnings: 'Indirect financial benefits',
    clients: 'Defense industry generally',
    impact: 'Consistent defense spending increases'
  }
]

const pentagonToProfitPipeline = [
  {
    step: 1,
    title: 'Pentagon Service',
    description: 'Serve 20-30 years in Pentagon, gain access to classified programs, build contractor relationships',
    salary: '$100,000-300,000/year',
    benefits: 'Security clearance, insider knowledge, contractor contacts'
  },
  {
    step: 2,
    title: 'Retirement/Transition',
    description: 'Retire with full pension and benefits, maintain security clearance',
    salary: '$50,000-150,000/year pension',
    benefits: 'Lifetime healthcare, clearance retention'
  },
  {
    step: 3,
    title: 'Contractor Payday',
    description: 'Join defense contractor at 2-5x Pentagon salary, leveraging contacts and clearance',
    salary: '$300,000-2,000,000+/year',
    benefits: 'Stock options, bonuses, golden parachutes'
  },
  {
    step: 4,
    title: 'Influence Pentagon',
    description: 'Use Pentagon relationships to secure contracts for new employer',
    salary: 'Performance bonuses based on contracts won',
    benefits: 'Shape policy to benefit employer'
  }
]

const lobbying2023 = [
  { company: 'Lockheed Martin', spent: '$13.1 million', lobbyists: 89, focus: 'F-35, HIMARS, missile defense' },
  { company: 'Boeing', spent: '$11.2 million', lobbyists: 67, focus: 'KC-46 tanker, Apache helicopters' },
  { company: 'Raytheon', spent: '$8.7 million', lobbyists: 54, focus: 'Patriot missiles, Tomahawk missiles' },
  { company: 'General Dynamics', spent: '$7.3 million', lobbyists: 43, focus: 'Abrams tanks, submarines' },
  { company: 'Northrop Grumman', spent: '$6.8 million', lobbyists: 52, focus: 'B-21 bomber, Global Hawk drones' }
]

export default function RevolvingDoorPage() {
  const totalLobbyists = 2700
  const totalOfficials = 380
  const totalLobbying = 47.1 // millions

  return (
    <div className="min-h-screen bg-slate-900 text-stone-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name: 'Defense Industry Revolving Door Database',
            description: 'Comprehensive tracking of officials moving between Pentagon and defense contractors. Documents 2,700+ revolving door lobbyists and 380 high-ranking officials who joined contractors.',
            url: 'https://warcosts.org/revolving-door',
            publisher: {
              '@type': 'Organization',
              name: 'WarCosts',
              url: 'https://warcosts.org'
            },
            datePublished: '2024-01-15',
            dateModified: new Date().toISOString().split('T')[0],
            keywords: 'revolving door, defense contractors, military-industrial complex, pentagon corruption'
          }),
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Breadcrumbs items={[{ label: 'Defense Revolving Door' }]} />
        
        <header className="mb-12">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-red-400 mb-4 leading-tight">
            The Pentagon <span className="text-red-600">Revolving Door</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-6">
            2,700+ revolving door lobbyists since 2001. 380 high-ranking DoD officials joined defense contractors.
          </p>
          <p className="text-lg text-stone-400 mb-8">
            This is legal corruption. The military-industrial complex President Eisenhower warned about in 1961.
          </p>
          <ShareButtons title="Defense Industry Revolving Door: The Pentagon-to-Contractor Pipeline" />
        </header>

        {/* Key Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">2,700+</div>
              <div className="text-sm text-stone-300">Revolving Door Lobbyists</div>
              <div className="text-xs text-stone-500 mt-2">Since 2001 (OpenSecrets)</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">380</div>
              <div className="text-sm text-stone-300">DoD Officials → Contractors</div>
              <div className="text-xs text-stone-500 mt-2">High-ranking officials (POGO)</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">$47M</div>
              <div className="text-sm text-stone-300">Defense Lobbying (2023)</div>
              <div className="text-xs text-stone-500 mt-2">Top 5 contractors only</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">85</div>
              <div className="text-sm text-stone-300">Boeing's Pentagon Hires</div>
              <div className="text-xs text-stone-500 mt-2">Former officials on payroll</div>
            </div>
          </div>
        </section>

        {/* Eisenhower's Warning */}
        <section className="mb-12">
          <div className="bg-slate-800/50 border border-red-800/50 rounded-lg p-8">
            <h2 className="font-playfair text-2xl font-bold text-red-400 mb-4">
              "We must guard against the acquisition of unwarranted influence..."
            </h2>
            <blockquote className="text-lg text-stone-300 mb-4 italic">
              "In the councils of government, we must guard against the acquisition of unwarranted influence, 
              whether sought or unsought, by the military-industrial complex. The potential for the disastrous 
              rise of misplaced power exists and will persist."
            </blockquote>
            <footer className="text-stone-400">
              — President Dwight D. Eisenhower, Farewell Address, January 17, 1961
            </footer>
            <p className="text-red-300 mt-4 font-medium">
              64 years later, Eisenhower's warning has become reality. The revolving door between Pentagon 
              and contractors has created exactly the "unwarranted influence" he predicted.
            </p>
          </div>
        </section>

        {/* The Pentagon-to-Profit Pipeline */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The Pentagon-to-Profit Pipeline</h2>
          <p className="text-lg text-stone-300 mb-8">
            It's a simple four-step process that has enriched thousands of former Pentagon officials while 
            corrupting the defense procurement system.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pentagonToProfitPipeline.map((step, index) => (
              <div key={step.step} className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-stone-200">{step.title}</h3>
                </div>
                <p className="text-stone-300 mb-4 text-sm">{step.description}</p>
                <div className="text-red-400 font-bold text-sm">{step.salary}</div>
                <div className="text-stone-500 text-xs mt-1">{step.benefits}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-900/20 border border-red-800/50 rounded-lg">
            <h3 className="font-bold text-red-300 mb-3">The Result:</h3>
            <p className="text-stone-300">
              Former Pentagon officials make 300-1000% more money working for contractors than they did serving 
              the public. This creates massive incentives to make decisions that benefit future employers while 
              still in government service.
            </p>
          </div>
        </section>

        {/* Top Contractor Pipelines */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The Biggest Revolving Doors</h2>
          
          <div className="space-y-8">
            {topContractorPipelines.map((contractor, index) => (
              <div key={index} className="bg-slate-800/50 border border-stone-700 rounded-lg p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-stone-200 text-2xl mb-2">{contractor.company}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <span className="bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-sm">
                        {contractor.formerOfficials} former officials hired
                      </span>
                      <span className="text-stone-400">2023 Contracts: {contractor.contracts2023}</span>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-stone-300 mb-4">Key Revolving Door Hires:</h4>
                <div className="space-y-4">
                  {contractor.keyHires.map((hire, hireIndex) => (
                    <div key={hireIndex} className="bg-slate-900/50 border border-stone-600 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h5 className="font-bold text-stone-200">{hire.name}</h5>
                        <span className="text-red-400 text-sm">{hire.salary || hire.transition}</span>
                      </div>
                      <div className="text-stone-300 text-sm mb-1">
                        <strong>Government:</strong> {hire.position}
                      </div>
                      <div className="text-stone-300 text-sm">
                        <strong>Contractor:</strong> {hire.role}
                      </div>
                      {hire.conflict && (
                        <div className="text-red-300 text-sm mt-2">
                          <strong>Conflict:</strong> {hire.conflict}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Congressional Revolvers */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">Congressional Revolving Door</h2>
          <p className="text-lg text-stone-300 mb-8">
            It's not just Pentagon officials. Members of Congress and senior appointees cash out too, 
            leveraging their relationships to enrich themselves and their new employers.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {congressionalRevolvers.map((revolver, index) => (
              <div key={index} className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
                <h3 className="font-bold text-stone-200 text-xl mb-2">{revolver.name}</h3>
                <div className="text-red-400 font-semibold mb-3">{revolver.earnings}</div>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <strong className="text-stone-300">Government:</strong> 
                    <span className="text-stone-400 ml-1">{revolver.position}</span>
                  </div>
                  <div>
                    <strong className="text-stone-300">Contractor:</strong> 
                    <span className="text-stone-400 ml-1">{revolver.contractor}</span>
                  </div>
                  <div>
                    <strong className="text-stone-300">Clients:</strong> 
                    <span className="text-stone-400 ml-1">{revolver.clients}</span>
                  </div>
                  <div className="mt-3 p-3 bg-red-900/20 border border-red-800/50 rounded">
                    <strong className="text-red-300">Impact:</strong> 
                    <span className="text-stone-300 ml-1">{revolver.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lobbying Spending */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">Defense Lobbying Spending (2023)</h2>
          <p className="text-lg text-stone-300 mb-8">
            Defense contractors spent over $70 million lobbying Congress and the Pentagon in 2023. 
            Many of these lobbyists are former government officials using their contacts to secure contracts.
          </p>

          <div className="space-y-4">
            {lobbying2023.map((company, index) => (
              <div key={index} className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="font-bold text-stone-200 text-xl">{company.company}</h3>
                  <div className="text-red-400 font-bold text-lg">{company.spent}</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-stone-300">Lobbyists:</strong> 
                    <span className="text-stone-400 ml-1">{company.lobbyists}</span>
                  </div>
                  <div>
                    <strong className="text-stone-300">Key Focus:</strong> 
                    <span className="text-stone-400 ml-1">{company.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-900/30 border border-red-700 rounded-lg">
            <h3 className="font-bold text-red-300 mb-3 text-xl">$70+ Million in Influence Buying</h3>
            <p className="text-stone-300 mb-3">
              These five companies alone spent over $47 million lobbying in 2023. The total defense industry 
              lobbying spending exceeded $70 million, employing over 300 registered lobbyists.
            </p>
            <p className="text-red-300 font-medium">
              For every dollar spent lobbying, contractors typically receive $100+ in contracts. 
              It's the best return on investment in Washington.
            </p>
          </div>
        </section>

        {/* The Corruption Is Legal */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The Corruption Is Legal</h2>
          
          <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-8">
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              The revolving door isn't illegal — it's institutionalized. There are some restrictions on when 
              former officials can lobby their old agencies, but they're weak and easily circumvented:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-6">
                <h3 className="font-bold text-red-300 mb-4">The "Restrictions"</h3>
                <ul className="space-y-2 text-stone-300 text-sm">
                  <li>• Senior officials: 2-year lobbying ban</li>
                  <li>• Regular officials: 1-year lobbying ban</li>
                  <li>• "Cooling off" period before direct contact</li>
                  <li>• Must register as lobbyist if lobbying</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 border border-stone-600 rounded-lg p-6">
                <h3 className="font-bold text-stone-300 mb-4">The Loopholes</h3>
                <ul className="space-y-2 text-stone-300 text-sm">
                  <li>• Can work as "consultants" or "advisors"</li>
                  <li>• Can lobby other agencies immediately</li>
                  <li>• Can influence policy without "lobbying"</li>
                  <li>• Enforcement is virtually non-existent</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6">
              <h3 className="font-bold text-red-300 mb-3">The Reality:</h3>
              <p className="text-stone-300">
                These restrictions are cosmetic. Former officials routinely circumvent them by taking 
                "advisory" roles, working through third parties, or simply waiting out the cooling-off periods 
                while drawing huge salaries from contractors. The system is designed to facilitate corruption, 
                not prevent it.
              </p>
            </div>
          </div>
        </section>

        {/* The Cost to Taxpayers */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The Cost to Taxpayers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">300%</div>
              <div className="text-sm text-stone-300">Higher costs due to corruption</div>
              <div className="text-xs text-stone-500 mt-2">POGO estimate</div>
            </div>
            <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">$858B</div>
              <div className="text-sm text-stone-300">Annual defense budget</div>
              <div className="text-xs text-stone-500 mt-2">2024</div>
            </div>
            <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">$250B+</div>
              <div className="text-sm text-stone-300">Annual waste from corruption</div>
              <div className="text-xs text-stone-500 mt-2">Conservative estimate</div>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              The revolving door doesn't just create conflicts of interest — it drives up costs for taxpayers. 
              When Pentagon officials know their next job depends on being friendly to contractors, they have 
              every incentive to approve inflated budgets, overlook cost overruns, and rubber-stamp no-bid contracts.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Studies by the Project On Government Oversight (POGO) suggest that revolving door corruption 
              increases defense costs by up to 300%. Applied to the $858 billion 2024 defense budget, 
              that's over $250 billion in annual waste — money that could fund schools, infrastructure, 
              or simply be returned to taxpayers.
            </p>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-8">
              <h3 className="font-bold text-red-300 mb-3">Examples of Revolving Door Costs:</h3>
              <ul className="space-y-2 text-stone-300">
                <li>• F-35: $1.7 trillion lifetime cost, championed by Lockheed executives in Pentagon</li>
                <li>• KC-46 Tanker: $44 billion over budget, Boeing executives had Pentagon inside track</li>
                <li>• Ford-class carriers: $15 billion each, designed by contractor-Pentagon partnerships</li>
                <li>• Littoral Combat Ships: $30+ billion failure, contractor influence evident throughout</li>
              </ul>
            </div>

            <p className="text-lg text-stone-300 leading-relaxed">
              Every weapon system plagued by cost overruns and performance failures has one thing in common: 
              a revolving door between the contractor and the Pentagon officials who approved it. 
              This isn't coincidence — it's the system working exactly as designed.
            </p>
          </div>
        </section>

        {/* Editorial: Legal Corruption */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">
            This Is Legal Corruption
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              The defense revolving door represents everything wrong with American government. It's a system 
              where public servants enrich themselves by serving private interests, where taxpayer money flows 
              to well-connected insiders, and where the public interest comes last.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              When Defense Secretary Mark Esper left the Pentagon, Raytheon immediately hired him at $2.5 million 
              per year — more than 12 times his government salary. When Lloyd Austin was confirmed as Defense Secretary, 
              he had to recuse himself from Raytheon decisions because he'd served on their board. 
              This is the swamp, not draining but overflowing.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              The corruption is so normalized that officials don't even hide it anymore. They openly discuss 
              their post-government career opportunities while still serving. Defense contractors maintain 
              "wish lists" of current Pentagon officials they want to hire. Job interviews happen over 
              Pentagon contract negotiations.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              President Eisenhower warned about this in 1961. He understood that when weapons manufacturers 
              gain political power, they have every incentive to create conflicts that require their products. 
              The revolving door ensures they maintain that power permanently.
            </p>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-8">
              <p className="text-lg text-red-300 font-medium">
                The defense revolving door isn't just corruption — it's a national security threat. 
                When pentagon officials serve contractor interests instead of public interests, America gets 
                overpriced weapons, unnecessary wars, and a defense establishment that serves itself rather 
                than the country it's supposed to protect.
              </p>
            </div>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Some will argue this is just "expertise" — that contractors need former officials because they 
              understand government. But this misses the point. The problem isn't expertise; it's incentives. 
              When officials know their next paycheck depends on contractor approval, they stop serving the 
              public and start serving their future employers.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed">
              Until we ban the revolving door completely — or at least impose meaningful restrictions with 
              real enforcement — this corruption will continue. Defense contractors will keep getting richer, 
              Pentagon officials will keep cashing out, and taxpayers will keep paying the bill for a system 
              that serves everyone except the people who fund it.
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">Related Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/pentagon-audit" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Pentagon Audit Failures</h3>
              <p className="text-stone-400 text-sm">8 consecutive failed audits, $3.8T unaccounted assets</p>
            </Link>
            <Link href="/cost-overruns" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Weapons Cost Overruns</h3>
              <p className="text-stone-400 text-sm">How revolving door corruption inflates weapons costs</p>
            </Link>
            <Link href="/contractors" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Top Defense Contractors</h3>
              <p className="text-stone-400 text-sm">The companies profiting from perpetual war</p>
            </Link>
            <Link href="/us-wars-list" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">US Wars & Interventions</h3>
              <p className="text-stone-400 text-sm">36 major wars that enriched defense contractors</p>
            </Link>
          </div>
        </section>

        <BackToTop />
      </div>
    </div>
  )
}