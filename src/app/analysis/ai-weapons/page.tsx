import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'AI Weapons — Autonomous Killing Machines With No Accountability',
  description: 'Project Maven, Israel\'s Lavender AI targeting system, Kargu-2 autonomous drones, the Replicator initiative. Machines deciding who dies with no due process.',
  openGraph: {
    title: 'AI Weapons — Autonomous Killing Machines With No Accountability',
    description: 'When algorithms decide who lives and who dies, who is accountable? Nobody.',
    url: 'https://www.warcosts.org/analysis/ai-weapons',
  },
}

const aiWeaponsSystems = [
  {
    name: 'Project Maven',
    developer: 'Pentagon / Google (2017), then Palantir, Microsoft, Amazon',
    status: 'Active and expanding',
    description: 'Officially the "Algorithmic Warfare Cross-Functional Team," Project Maven uses AI to analyze drone surveillance footage — identifying people, vehicles, buildings, and patterns of behavior. It was the Pentagon\'s first major AI initiative and the template for military AI integration.',
    controversy: 'In 2018, Google employees discovered their company was working on Project Maven. Over 4,000 Google employees signed a petition demanding the company withdraw. A dozen engineers resigned. Google allowed the contract to expire — but the Pentagon simply moved to other contractors. The AI continued; only the logo changed.',
    implications: 'Maven demonstrated that AI could process surveillance data faster and more comprehensively than humans. It also showed the Pentagon that Silicon Valley\'s ethical objections were a speed bump, not a roadblock.',
  },
  {
    name: 'Lavender',
    developer: 'Israel Defense Forces',
    status: 'Used in Gaza (2023–present)',
    description: 'An AI targeting system that generates kill lists of suspected Hamas and Palestinian Islamic Jihad operatives. According to +972 Magazine and Local Call investigations based on Israeli intelligence sources, Lavender marked approximately 37,000 Palestinians as suspected militants for potential assassination.',
    controversy: 'Sources revealed that the IDF accepted a casualty ratio of 15–20 civilian deaths per suspected low-ranking militant target. For senior commanders, the acceptable ratio was even higher — potentially 100+ civilians. The AI system generated targets; human review was perfunctory, typically under 20 seconds per target.',
    implications: 'Lavender represents the automation of mass killing. A machine generates a kill list. A human rubber-stamps it in seconds. Bombs flatten apartment buildings. The AI produces a new list. The cycle continues.',
  },
  {
    name: 'Gospel (Habsora)',
    developer: 'Israel Defense Forces',
    status: 'Used in Gaza (2023–present)',
    description: 'A companion system to Lavender, Gospel generates recommendations for physical targets — buildings, structures, and infrastructure associated with suspected militants. It dramatically accelerated the pace of target generation, producing targets faster than any previous system.',
    controversy: 'Former Israeli intelligence officials told +972 Magazine that Gospel was a "mass assassination factory." The system produced 100 targets per day — compared to roughly 50 per year in previous operations. This unprecedented pace of targeting contributed to the destruction of over 70% of northern Gaza\'s residential buildings.',
    implications: 'Gospel transformed war from a series of deliberate decisions into an industrial process. The bottleneck was no longer intelligence analysis but bomb supply and aircraft availability.',
  },
  {
    name: 'Kargu-2 Autonomous Drone',
    developer: 'STM (Turkish defense company)',
    status: 'Deployed in Libya (2020), combat use confirmed',
    description: 'A small rotary-wing drone designed to autonomously locate and attack targets using facial recognition and AI. Weighing just 7 kg, it can be launched by hand, fly autonomously to a target area, identify targets matching pre-programmed parameters, and attack without human intervention.',
    controversy: 'A March 2021 UN Panel of Experts report on Libya documented that Kargu-2 drones "were programmed to attack targets without requiring data connectivity between the operator and the munition: in effect, a true \'fire, forget and find\' capability." If confirmed, this represents the first known instance of an autonomous weapon killing without human input.',
    implications: 'The Kargu-2 incident may have crossed the Rubicon. A machine may have independently decided to kill a human being. No international law governs this. No accountability framework exists.',
  },
  {
    name: 'Replicator Initiative',
    developer: 'US Department of Defense',
    status: 'Launched August 2023, deployment ongoing',
    description: 'Deputy Secretary of Defense Kathleen Hicks announced the Replicator initiative to field "multiple thousands" of small, cheap, autonomous drones and unmanned systems within 18–24 months to counter China\'s military mass. The goal: overwhelm adversaries with swarms of AI-enabled disposable systems.',
    controversy: 'Replicator explicitly embraces quantity over quality — flooding battlefields with cheap autonomous systems that can overwhelm air defenses and military formations through sheer numbers. The program envisions AI-coordinated drone swarms acting as a unified force with minimal human oversight.',
    implications: 'Replicator represents the industrialization of autonomous warfare. Thousands of AI-enabled kill vehicles, produced cheaply and deployed en masse. The logical endpoint is a world where lethal autonomous weapons are as ubiquitous and uncontrollable as small arms.',
  },
  {
    name: 'DARPA AI Programs',
    developer: 'Defense Advanced Research Projects Agency',
    status: 'Multiple active programs',
    description: 'DARPA funds dozens of AI-related military programs: OFFSET (swarm tactics for 250+ drones), ACE (AI-controlled fighter jets — successfully flew an AI F-16 in combat maneuvers, 2024), ALIAS (autonomous aircraft systems), MCS (AI-assisted military decision-making), and many classified programs.',
    controversy: 'In February 2024, DARPA\'s X-62A VISTA (a modified F-16) flew AI-controlled dogfighting maneuvers against a human pilot — the first time AI controlled a tactical aircraft in flight. Air Force Secretary Frank Kendall flew in the AI-piloted jet to demonstrate confidence in the system.',
    implications: 'DARPA is systematically removing humans from every aspect of warfare — targeting, piloting, decision-making, logistics. The vision is clear: AI-driven warfare where machines fight machines, with humans increasingly marginalized from the loop.',
  },
]

const privateCompanies = [
  { name: 'Palantir Technologies', founder: 'Peter Thiel', valuation: '$50B+ (2024)', role: 'Gotham platform used by CIA, NSA, ICE, military. Provides AI-driven intelligence analysis, targeting support, and surveillance. CEO Alex Karp has explicitly embraced the military mission: "We believe the most effective way to protect civil liberties is to make sure the good guys win."' },
  { name: 'Anduril Industries', founder: 'Palmer Luckey (Oculus VR)', valuation: '$14B+ (2024)', role: 'AI-powered autonomous drones (Altius, Ghost), surveillance towers (Lattice AI), counter-drone systems. Explicitly founded to be the "next great defense company." Lattice AI creates autonomous mesh networks of sensors and weapons.' },
  { name: 'Shield AI', founder: 'Brandon Tseng (Navy SEAL)', valuation: '$2.7B+ (2023)', role: 'Autonomous military drones that can fly and fight without GPS or communications. V-BAT (autonomous vertical takeoff drone) and Hivemind (AI pilot). Demonstrated autonomous building-clearing operations.' },
  { name: 'Scale AI', founder: 'Alexandr Wang', valuation: '$14B+ (2024)', role: 'Provides AI training data for Pentagon programs. The "picks and shovels" of military AI — training the algorithms that power autonomous weapons. Major contracts with DOD, intelligence community.' },
  { name: 'OpenAI', founder: 'Sam Altman', valuation: '$157B+ (2025)', role: 'Quietly dropped its ban on military use in January 2024. Now works with the Pentagon and defense contractors. The company that once warned AI could be "an existential threat to humanity" is now helping build military AI systems.' },
  { name: 'Microsoft', founder: 'Bill Gates', valuation: '$3T+', role: 'IVAS (Integrated Visual Augmentation System) for Army: $21.9B contract for AR combat goggles. Azure Government cloud for classified workloads. Nuance AI for military communications. HoloLens combat systems.' },
]

export default function AIWeaponsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd title="AI Weapons — Autonomous Killing Machines With No Accountability" description="Project Maven, Israel's Lavender AI, Kargu-2 autonomous drones. When algorithms decide who lives and dies, accountability disappears." slug="ai-weapons" />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'AI Weapons' }]} />
      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          AI Weapons
        </h1>
        <p className="text-xl text-stone-300 mb-4">Autonomous Killing Machines With No Accountability</p>
        <p className="text-stone-400 text-lg">
          In Gaza, an AI system called Lavender generated a list of 37,000 Palestinians marked for assassination.
          Human &ldquo;review&rdquo; of each target took approximately 20 seconds. The acceptable civilian
          casualty ratio: 15–20 dead civilians per suspected low-ranking militant. In Libya, a Turkish-made
          autonomous drone may have killed a human being without any human giving the order — the first time
          in history a machine independently decided to end a human life. In Silicon Valley, OpenAI quietly
          dropped its ban on military use. The future of war is here, and it has no conscience, no due process,
          and no accountability.
        </p>
      </div>

      <ShareButtons title="AI Weapons — Autonomous Killing Machines" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '37,000', label: 'Palestinians Flagged by Lavender AI', sub: 'For potential assassination' },
          { val: '20 sec', label: 'Human Review Per Target', sub: 'Rubber-stamping machine decisions' },
          { val: '$1.8B+', label: 'Pentagon AI Spending (FY2024)', sub: 'Official — real number higher' },
          { val: '0', label: 'International Laws on AI Weapons', sub: 'No treaty, no convention, no rules' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* AI weapons systems */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">AI Weapons Systems</h2>
        <div className="space-y-6">
          {aiWeaponsSystems.map(system => (
            <div key={system.name} className="border rounded-lg p-5">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-bold text-lg">{system.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">{system.developer}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">{system.status}</span>
              </div>
              <p className="text-sm text-stone-600 mb-3">{system.description}</p>
              <div className="bg-red-50 rounded p-3 mb-3">
                <p className="text-[10px] text-red-400 uppercase font-semibold">Controversy</p>
                <p className="text-sm text-red-800">{system.controversy}</p>
              </div>
              <p className="text-sm text-stone-600"><strong>Implications:</strong> {system.implications}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lavender deep dive */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Lavender: The AI That Chose Who Dies in Gaza</h2>
        <p className="text-stone-300 mb-4">
          In April 2024, +972 Magazine and Local Call published a devastating investigation based on
          interviews with six Israeli intelligence officers who worked with the Lavender system during
          the Gaza war. Their revelations are among the most disturbing documents in the history of
          automated warfare.
        </p>
        <p className="text-stone-300 mb-4">
          <strong>How Lavender works:</strong> The system analyzes surveillance data — phone records,
          social media activity, location data, communication patterns, group affiliations — and assigns
          each person in Gaza a numerical score from 1 to 100 indicating the probability they are a
          militant. Anyone above a certain threshold is automatically added to the kill list.
        </p>
        <p className="text-stone-300 mb-4">
          <strong>The human rubber stamp:</strong> Sources described the &ldquo;human review&rdquo; process
          as a formality. An officer would verify that the target was male and that the system hadn&apos;t
          flagged any obvious errors. This process took approximately <strong>20 seconds per target</strong>.
          One source said: <em>&ldquo;I would invest 20 seconds for each target at this stage, and do
          dozens of them every day.&rdquo;</em>
        </p>
        <p className="text-stone-300 mb-4">
          <strong>The civilian cost:</strong> Intelligence sources revealed the IDF accepted that for
          every low-ranking Hamas operative killed, up to <strong>15–20 civilians</strong> could be killed
          as &ldquo;collateral damage.&rdquo; For senior commanders, the ratio was even higher. One source
          said the policy was to bomb suspected militants in their homes — at night, when their families
          were present — because it was easier to locate them there.
        </p>
        <p className="text-stone-300">
          <strong>The error rate:</strong> Sources estimated Lavender had an error rate of approximately
          <strong>10%</strong> — meaning roughly 1 in 10 people flagged as militants were misidentified
          civilians. With 37,000 targets, that means approximately 3,700 people were marked for death
          by mistake. The system&apos;s errors were considered acceptable.
        </p>
      </div>

      {/* Technical Deep Dive */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How AI Killing Machines Actually Work</h2>
        <p className="text-stone-300 mb-4">
          AI weapons systems are not science fiction — they are operational today and built on commercially 
          available technologies. Understanding how they work reveals both their capabilities and their dangers.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-white font-semibold mb-2">Step 1: Data Collection (Surveillance Layer)</h3>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Sources:</strong> Satellite imagery, drone cameras, cell phone intercepts, social media scraping, 
              financial transaction monitoring, facial recognition databases, vehicle tracking, communication metadata
            </p>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Volume:</strong> The US intelligence community processes 20+ petabytes of data daily — equivalent 
              to the entire Library of Congress every 14.4 seconds
            </p>
            <p className="text-stone-400 text-xs">
              This creates what military analysts call "the tyranny of data" — so much information that human analysis 
              is impossible, necessitating AI filtering and prioritization
            </p>
          </div>

          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-white font-semibold mb-2">Step 2: Pattern Recognition (Analysis Layer)</h3>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Behavioral Analysis:</strong> AI identifies "patterns of life" — when someone wakes up, 
              where they go, who they meet, how they communicate. Deviations from normal patterns trigger alerts.
            </p>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Association Networks:</strong> Machine learning algorithms map relationships between people 
              based on communication, co-location, financial transactions. If you talk to a militant, the AI flags you.
            </p>
            <p className="text-stone-400 text-xs">
              The Lavender system reportedly analyzed features like: being in a WhatsApp group with known militants, 
              changing phones frequently, changing sleeping locations
            </p>
          </div>

          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-white font-semibold mb-2">Step 3: Scoring and Ranking (Targeting Layer)</h3>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Risk Scoring:</strong> AI assigns numerical probability scores (0-100) indicating likelihood 
              someone is a combatant. Scores above threshold automatically generate targeting recommendations.
            </p>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Priority Ranking:</strong> System ranks targets by strategic value, accessibility, and collateral 
              damage estimates. High-value targets get priority regardless of civilian casualties.
            </p>
            <p className="text-stone-400 text-xs">
              Sources told +972 that human reviewers became "quality assurance" rather than decision-makers — 
              verifying the target was male and the system hadn't made obvious errors
            </p>
          </div>

          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-white font-semibold mb-2">Step 4: Autonomous Execution (Weapons Layer)</h3>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Platform Selection:</strong> AI chooses optimal weapons platform (drone, missile, artillery) 
              based on target location, weather, air defenses, and civilian density.
            </p>
            <p className="text-stone-300 text-sm mb-2">
              <strong>Timing Algorithm:</strong> System determines optimal strike time, often selecting moments 
              when target is home with family to ensure positive identification and eliminate escape.
            </p>
            <p className="text-stone-400 text-xs">
              The Gospel system reportedly recommended striking targets in their homes at night, when entire 
              families would be present, because it was easier to locate them
            </p>
          </div>
        </div>

        <div className="bg-red-950/30 border border-red-900/30 rounded p-4">
          <h4 className="text-red-400 font-semibold mb-2">The Error Cascade Problem</h4>
          <p className="text-stone-300 text-sm">
            Each layer in the AI kill chain amplifies errors from the previous layer. Bad surveillance data leads 
            to bad pattern recognition. Bad patterns lead to bad targeting. Bad targeting leads to dead civilians. 
            <strong>A 10% error rate</strong> at each stage compounds to a <strong>34% error rate</strong> in the 
            final targeting decision. With 37,000 targets, that means over 12,000 potential misidentifications.
          </p>
        </div>
      </div>

      {/* International AI Weapons Programs */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">The Global AI Weapons Race</h2>
        <p className="text-stone-700 mb-4">
          While the US and Israel dominate headlines, AI weapons development is a global phenomenon. 
          At least 30 countries are developing some form of lethal autonomous weapons, and the technology 
          is proliferating rapidly.
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="text-red-800 font-semibold text-lg">China: The Swarm Leader</h3>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Programs:</strong> Sharp Sword stealth combat drone, WZ-8 hypersonic reconnaissance drone, 
              swarm systems demonstrated with 200+ coordinated drones
            </p>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Strategy:</strong> "Intelligentized warfare" doctrine envisions AI-controlled systems operating 
              at speeds no human can match. Focus on overwhelming US defenses with cheap, expendable autonomous systems.
            </p>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Exports:</strong> China is the world's largest drone exporter, selling AI-enabled systems to 
              Pakistan, Nigeria, Saudi Arabia, UAE, and others. No human rights restrictions on sales.
            </p>
            <p className="text-stone-600 text-xs">
              In 2019, China's Ziyan Blowfish A3 demonstrated autonomous target identification and tracking. 
              The promotional video showed it hunting and killing without human input.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-blue-800 font-semibold text-lg">Russia: The Kalashnikov of Killer Robots</h3>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Programs:</strong> Poseidon autonomous nuclear torpedo, Lancet loitering munitions 
              (extensively used in Ukraine), S-70 Okhotnik stealth combat drone
            </p>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Combat Use:</strong> Lancet drones in Ukraine operate with increasing autonomy, 
              using AI to identify and attack Ukrainian armor with minimal human oversight.
            </p>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Exports:</strong> Russia sells autonomous systems to allies including Iran, Syria, 
              and Wagner mercenaries. No export controls or ethical guidelines.
            </p>
            <p className="text-stone-600 text-xs">
              Kalashnikov Concern, maker of the AK-47, now manufactures AI-enabled weapons. Their motto: 
              "Protecting peace through strength." The AK-47 killed more people than any weapon in history.
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-4">
            <h3 className="text-purple-800 font-semibold text-lg">South Korea: The DMZ Testing Ground</h3>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Programs:</strong> SGR-A1 autonomous sentry guns deployed along DMZ, KAIST AI combat systems, 
              KAI KUS-FC autonomous fighter concept
            </p>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Rationale:</strong> Facing North Korea's 1.2 million-man army, South Korea sees AI weapons 
              as force multipliers. Autonomous systems can respond faster than human soldiers.
            </p>
            <p className="text-stone-600 text-xs">
              The SGR-A1 sentry guns can autonomously detect, track, and engage human targets up to 3km away. 
              They are reportedly configured for "human in the loop" operation — but the loop can be removed.
            </p>
          </div>

          <div className="border-l-4 border-green-600 pl-4">
            <h3 className="text-green-800 font-semibold text-lg">India: The Border AI War</h3>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Programs:</strong> Autonomous Border Surveillance System along Pakistan/China borders, 
              DRDO swarm drone development, AI-enabled missile defense systems
            </p>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Deployment:</strong> AI surveillance systems along the Line of Actual Control with China 
              automatically detect troop movements and recommend responses.
            </p>
            <p className="text-stone-600 text-xs">
              India's border AI systems have triggered multiple false alarms, nearly escalating tensions 
              with nuclear-armed neighbors. Machines don't understand diplomacy.
            </p>
          </div>

          <div className="border-l-4 border-orange-600 pl-4">
            <h3 className="text-orange-800 font-semibold text-lg">Turkey: Export Success Story</h3>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Programs:</strong> Bayraktar TB2 combat drones (semi-autonomous), Kargu loitering munitions, 
              ALPAGU micro attack drones
            </p>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Combat Record:</strong> Turkish drones devastated Syrian/Russian forces (2020), Armenian forces 
              in Nagorno-Karabakh (2020), and have been used in Libya, Ethiopia, and Ukraine.
            </p>
            <p className="text-stone-700 text-sm mb-2">
              <strong>Business Model:</strong> Turkey sells advanced drones to countries excluded from US/European 
              arms markets. No human rights conditions, competitive prices, proven effectiveness.
            </p>
            <p className="text-stone-600 text-xs">
              The Kargu-2 used in Libya may be the first confirmed kill by a fully autonomous weapon. 
              Turkey neither confirms nor denies this historic moment.
            </p>
          </div>
        </div>
      </div>

      {/* The Economics of AI Death */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Economics of AI Death</h2>
        <p className="text-stone-300 mb-4">
          Autonomous weapons represent the ultimate economic disruption: they make killing cheaper, 
          faster, and scalable. This economic logic drives adoption regardless of ethical concerns.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-red-400 font-semibold mb-2">Cost Comparison: Human vs. Machine</h3>
            <div className="space-y-2 text-stone-300 text-sm">
              <div className="flex justify-between">
                <span>US soldier (full lifecycle cost)</span>
                <span className="text-red-400">$4.2M</span>
              </div>
              <div className="flex justify-between">
                <span>Chinese Ziyan Blowfish drone</span>
                <span className="text-green-400">$15,000</span>
              </div>
              <div className="flex justify-between">
                <span>Turkish Kargu-2 loitering munition</span>
                <span className="text-green-400">$70,000</span>
              </div>
              <div className="flex justify-between">
                <span>Ratio advantage</span>
                <span className="text-yellow-400">280:1</span>
              </div>
            </div>
            <p className="text-stone-400 text-xs mt-2">
              One soldier's cost could buy 280 autonomous weapons. The math is compelling for defense ministers.
            </p>
          </div>

          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-red-400 font-semibold mb-2">Speed Comparison: Analysis to Strike</h3>
            <div className="space-y-2 text-stone-300 text-sm">
              <div className="flex justify-between">
                <span>Traditional targeting cycle</span>
                <span className="text-red-400">Hours-Days</span>
              </div>
              <div className="flex justify-between">
                <span>Human-supervised AI</span>
                <span className="text-yellow-400">Minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Fully autonomous system</span>
                <span className="text-green-400">Seconds</span>
              </div>
              <div className="flex justify-between">
                <span>Speed advantage</span>
                <span className="text-yellow-400">1,000x+</span>
              </div>
            </div>
            <p className="text-stone-400 text-xs mt-2">
              In high-intensity conflicts, speed equals survival. Humans are too slow for modern warfare.
            </p>
          </div>
        </div>

        <div className="bg-red-950/30 border border-red-900/30 rounded p-4">
          <h3 className="text-red-400 font-semibold mb-2">Market Size: The AI Death Economy</h3>
          <div className="grid md:grid-cols-3 gap-4 text-stone-300 text-sm">
            <div>
              <p><strong>Global Military AI Market:</strong> $18.8B (2024) → $45.5B (2030)</p>
              <p><strong>Growth Rate:</strong> 15.8% CAGR</p>
            </div>
            <div>
              <p><strong>Autonomous Weapons Segment:</strong> $4.1B (2024) → $18.7B (2030)</p>
              <p><strong>Growth Rate:</strong> 29.1% CAGR</p>
            </div>
            <div>
              <p><strong>Key Players:</strong> Northrop Grumman, Lockheed Martin, BAE Systems, Raytheon, Thales</p>
              <p><strong>New Entrants:</strong> Palantir, Anduril, Shield AI, etc.</p>
            </div>
          </div>
          <p className="text-stone-400 text-xs mt-3">
            Stock analysts describe autonomous weapons as the defense industry's "next growth vector." 
            Death is profitable, especially when it's scalable.
          </p>
        </div>
      </div>

      {/* Philosophical and Ethical Framework */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">The Moral Calculus of Machine Killing</h2>
        <p className="text-stone-700 mb-4">
          The introduction of autonomous weapons forces us to confront fundamental questions about the 
          nature of killing, moral agency, and human dignity that philosophy has grappled with for centuries.
        </p>

        <div className="space-y-6">
          <div className="bg-stone-50 rounded p-4">
            <h3 className="text-stone-800 font-semibold mb-2">The Kantian Objection: Instrumentalization</h3>
            <p className="text-stone-700 text-sm mb-2">
              Immanuel Kant's categorical imperative holds that humans must never be treated merely as means 
              to an end, but always as ends in themselves. When an AI system reduces human life to a probability 
              score and decides to kill based on algorithmic calculations, it treats humans as objects to be 
              processed rather than moral agents deserving respect.
            </p>
            <p className="text-stone-600 text-xs">
              A human soldier, even in killing, recognizes the humanity of their target through the act of 
              moral choice. A machine has no capacity for such recognition.
            </p>
          </div>

          <div className="bg-stone-50 rounded p-4">
            <h3 className="text-stone-800 font-semibold mb-2">The Utilitarian Defense: Precision Killing</h3>
            <p className="text-stone-700 text-sm mb-2">
              Defenders argue AI weapons could reduce civilian casualties by making more precise targeting 
              decisions than emotional, stressed, or biased human soldiers. If an AI can distinguish combatants 
              from civilians better than humans, utilitarian logic suggests autonomous weapons could save lives.
            </p>
            <p className="text-stone-600 text-xs">
              This argument collapses when confronted with actual deployment: Lavender's 10% error rate 
              and acceptance of 15-20 civilian deaths per militant target shows precision is subordinated 
              to operational tempo.
            </p>
          </div>

          <div className="bg-stone-50 rounded p-4">
            <h3 className="text-stone-800 font-semibold mb-2">The Just War Problem: Discrimination and Proportionality</h3>
            <p className="text-stone-700 text-sm mb-2">
              Just War Theory requires combatants to distinguish between legitimate military targets and protected 
              persons (civilians). It also requires proportionality — that military advantage gained must outweigh 
              harm to civilians. AI systems like Lavender systematically violate both principles by accepting 
              high error rates and predetermined casualty ratios.
            </p>
            <p className="text-stone-600 text-xs">
              Traditional soldiers can show mercy, recognize surrender, or abort attacks when civilians are present. 
              Current AI systems lack this capacity for moral judgment.
            </p>
          </div>

          <div className="bg-stone-50 rounded p-4">
            <h3 className="text-stone-800 font-semibold mb-2">The Rights-Based Objection: Right to Life</h3>
            <p className="text-stone-700 text-sm mb-2">
              If there is a fundamental human right to life, does that right include being killed only by another 
              human being capable of moral judgment? Many philosophers and legal scholars argue that the right to 
              life includes the right not to be killed by a machine programmed by someone else.
            </p>
            <p className="text-stone-600 text-xs">
              This principle is recognized in domestic law — no country allows robots to execute criminals — 
              but ignored in warfare where human rights protections are weaker.
            </p>
          </div>
        </div>
      </div>

      {/* The accountability gap */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">The Accountability Gap: When a Machine Kills, Who Is Guilty?</h2>
        <p className="text-stone-700 mb-4">
          When a soldier kills a civilian, there is a chain of accountability: the soldier, their
          commanding officer, the rules of engagement, the political leadership. When an AI system
          selects a target and a drone autonomously executes the strike, who is responsible?
        </p>
        <p className="text-stone-700 mb-4">
          <strong>The programmer?</strong> They wrote the code but didn&apos;t choose the target.
          <strong> The commander?</strong> They authorized the system but didn&apos;t make the specific
          decision. <strong>The AI?</strong> It has no moral agency, no capacity for guilt, no understanding
          of what it means to kill.
        </p>
        <p className="text-stone-700 mb-4">
          This is the <strong>&ldquo;accountability gap&rdquo;</strong> — and it is by design. Autonomous
          weapons diffuse responsibility across so many actors and algorithms that no single person can be
          held accountable. The military calls this &ldquo;human in the loop,&rdquo; but when &ldquo;the
          loop&rdquo; consists of 20 seconds of rubber-stamping machine decisions, the human is a fig
          leaf, not a safeguard.
        </p>
        
        <div className="bg-stone-100 rounded p-4 my-4">
          <h3 className="text-stone-800 font-semibold mb-2">The Accountability Chain Breakdown</h3>
          <div className="space-y-2 text-stone-700 text-sm">
            <div><strong>AI Developer:</strong> "We built a tool, we didn't choose targets"</div>
            <div><strong>Military Commander:</strong> "We authorized the system, not specific strikes"</div>
            <div><strong>Human Operator:</strong> "I followed the AI's recommendations"</div>
            <div><strong>Political Leader:</strong> "We authorized force, not individual decisions"</div>
            <div><strong>Legal System:</strong> "No clear jurisdiction or precedent for AI killings"</div>
          </div>
          <p className="text-stone-600 text-xs mt-2">
            <strong>Result:</strong> Everyone is responsible, therefore no one is responsible.
          </p>
        </div>

        <p className="text-stone-700">
          The International Committee of the Red Cross has warned that autonomous weapons create an
          <strong>&ldquo;accountability vacuum&rdquo;</strong> incompatible with international humanitarian
          law. Under the laws of war, someone must be responsible for every use of lethal force. If no
          one is responsible, then the killing is by definition unlawful. But no court has ever prosecuted
          an AI-enabled killing. No government has acknowledged the problem. The machines keep killing.
        </p>
      </div>

      {/* Proliferation and Future Scenarios */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Proliferation Problem: When Everyone Has Killer Robots</h2>
        <p className="text-stone-300 mb-4">
          The most dangerous aspect of AI weapons isn't their current capabilities — it's their inevitable 
          proliferation. Unlike nuclear weapons, which require rare materials and complex infrastructure, 
          AI weapons are built from commercial technologies that are rapidly becoming ubiquitous.
        </p>

        <div className="space-y-4">
          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-red-400 font-semibold mb-2">Scenario 1: The Terrorist Swarm (2027-2030)</h3>
            <p className="text-stone-300 text-sm mb-2">
              A terrorist organization purchases 100 commercial drones ($50,000 total), adds facial recognition 
              software (open source), explosive payloads ($500 each), and AI coordination systems (commercially available). 
              The swarm attacks a music festival, using facial recognition to target specific ethnic groups.
            </p>
            <p className="text-stone-400 text-xs">
              <strong>Prevention:</strong> Nearly impossible. All components are legal and commercially available. 
              Detection requires sophisticated counter-AI systems that don't exist.
            </p>
          </div>

          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-red-400 font-semibold mb-2">Scenario 2: The Proxy War Escalation (2025-2028)</h3>
            <p className="text-stone-300 text-sm mb-2">
              China provides autonomous weapons to Iran, which deploys them against US forces in Iraq. 
              The US retaliates by giving autonomous systems to Taiwan. Each side escalates with more 
              advanced AI weapons until human control is completely removed from the conflict cycle.
            </p>
            <p className="text-stone-400 text-xs">
              <strong>Risk:</strong> Autonomous systems fighting at machine speed can escalate conflicts faster 
              than humans can de-escalate them.
            </p>
          </div>

          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-red-400 font-semibold mb-2">Scenario 3: The Authoritarian Control System (2030+)</h3>
            <p className="text-stone-300 text-sm mb-2">
              Governments deploy autonomous weapons domestically for "security." AI systems continuously monitor 
              populations, automatically identifying "dissidents" based on behavioral patterns, and deploying 
              lethal force without human authorization. Protest becomes impossible.
            </p>
            <p className="text-stone-400 text-xs">
              <strong>Precedent:</strong> China's Xinjiang surveillance system already uses AI to monitor Uyghurs. 
              Adding weapons is a software upgrade.
            </p>
          </div>

          <div className="bg-stone-800/50 rounded p-4">
            <h3 className="text-red-400 font-semibold mb-2">Scenario 4: The Flash War (2030+)</h3>
            <p className="text-stone-300 text-sm mb-2">
              Two nations' AI defense systems misinterpret each other's actions as hostile. Autonomous weapons 
              engage automatically to "defend" against perceived threats. A full-scale war begins and ends 
              before human leaders can intervene — decided entirely by machines in minutes.
            </p>
            <p className="text-stone-400 text-xs">
              <strong>Historical parallel:</strong> In 1995, Russia nearly launched nuclear weapons after mistaking 
              a scientific rocket for a US submarine-launched ballistic missile. Only human hesitation prevented war.
            </p>
          </div>
        </div>
      </div>

      {/* LAWS debate */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The LAWS Debate: Why There Are No Rules</h2>
        <p className="text-stone-700 mb-4">
          Since 2014, the UN Convention on Certain Conventional Weapons (CCW) has been debating
          Lethal Autonomous Weapons Systems (LAWS). After a decade of discussion, the result has
          been <strong>nothing</strong>. No treaty. No binding regulations. No agreed-upon definitions.
          Not even a shared understanding of what &ldquo;autonomous&rdquo; means.
        </p>
        <p className="text-stone-700 mb-4">
          The reason is simple: the countries developing AI weapons don&apos;t want rules. The United
          States, Russia, Israel, China, the UK, South Korea, and Turkey have all blocked meaningful
          progress on LAWS regulation. The US position, articulated in DOD Directive 3000.09, requires
          &ldquo;appropriate levels of human judgment&rdquo; in autonomous weapons — but doesn&apos;t
          define what &ldquo;appropriate&rdquo; means, and the directive is policy, not law.
        </p>
        <p className="text-stone-700 mb-4">
          Over 100 countries have called for some form of regulation. Nobel Peace laureates, AI researchers
          (including Geoffrey Hinton, Yoshua Bengio, and Stuart Russell), and organizations like the
          International Committee of the Red Cross have warned of the dangers. In 2023, the Campaign
          to Stop Killer Robots — a coalition of 250+ organizations in 70 countries — called for a
          preemptive ban on autonomous weapons. The major military powers dismissed it.
        </p>
        <p className="text-stone-700">
          The historical parallel is chilling. Before World War I, some argued that machine guns were
          too terrible to use. Before WWII, some argued that bombing cities was beyond the pale. Before
          the atomic age, some argued that nuclear weapons would never be built. In each case, the
          weapons were built, deployed, and normalized before meaningful regulation was attempted.
          The same pattern is playing out with AI weapons — and this time, the weapons improve themselves.
        </p>
      </div>

      {/* Silicon Valley's military turn */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Silicon Valley&apos;s Military Turn</h2>
        <p className="text-stone-700 mb-6">
          The tech industry&apos;s brief flirtation with ethical boundaries is over. After Google&apos;s
          Project Maven controversy in 2018, the industry appeared to be drawing lines. Five years later,
          those lines have been erased. Every major tech company is now competing for Pentagon contracts,
          and a new generation of &ldquo;defense tech&rdquo; startups has emerged with no ethical qualms
          whatsoever.
        </p>
        <div className="space-y-4">
          {privateCompanies.map(company => (
            <div key={company.name} className="border rounded-lg p-4">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-bold text-lg">{company.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">Founded by {company.founder}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">{company.valuation}</span>
              </div>
              <p className="text-sm text-stone-600">{company.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* OpenAI reversal */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2 text-amber-800">💡 Did You Know: OpenAI&apos;s Military Ban Reversal</h3>
        <p className="text-stone-700 mb-3">
          OpenAI was founded in 2015 with an explicit mission to ensure AI benefits &ldquo;all of
          humanity.&rdquo; Its usage policies originally prohibited military applications. Then,
          quietly, in January 2024, OpenAI updated its terms of service to remove the ban on
          &ldquo;military and warfare&rdquo; use.
        </p>
        <p className="text-stone-700 mb-3">
          The company now works with the Pentagon and defense contractors. An OpenAI spokesperson
          clarified that the company still prohibits using its tools to &ldquo;develop or use weapons&rdquo;
          or &ldquo;harm others&rdquo; — but military applications like intelligence analysis,
          logistics, and communications support are now permitted.
        </p>
        <p className="text-stone-700">
          The irony is staggering: the company whose CEO, Sam Altman, has testified before Congress
          about the &ldquo;existential risk&rdquo; of AI and called for government regulation is now
          providing AI tools to the world&apos;s most powerful military. The company that warned AI
          could destroy humanity is helping build military AI systems. The profit motive won.
        </p>
      </div>

      {/* Drone swarms */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Drone Swarms: The Future of War Is Cheap and Disposable</h2>
        <p className="text-stone-300 mb-4">
          The Pentagon&apos;s Replicator initiative represents a paradigm shift in military thinking. Instead
          of expensive, exquisite platforms like $100M F-35s and $13B aircraft carriers, the future of war
          may be <strong>thousands of cheap, AI-enabled, disposable autonomous systems</strong> — drone swarms
          that overwhelm defenses through sheer numbers.
        </p>
        <p className="text-stone-300 mb-4">
          The concept is simple: a $2 billion aircraft carrier can be sunk by a swarm of 1,000 drones costing
          $10,000 each ($10 million total). An air defense system designed to track and engage dozens of
          targets is overwhelmed by hundreds of autonomous drones attacking simultaneously from different
          directions. The economics of defense collapse.
        </p>
        <p className="text-stone-300 mb-4">
          China is leading in drone swarm technology. In 2022, the PLA demonstrated a swarm of 200+
          drones operating autonomously — sharing targeting data, coordinating attacks, and adapting
          to losses without human intervention. The US Replicator initiative is explicitly designed to
          counter this capability with American swarms.
        </p>
        <p className="text-stone-300">
          The result is an autonomous weapons arms race with no rules, no treaties, and no brakes. Both
          sides are developing AI-controlled swarms of lethal autonomous weapons, each driving the other
          to remove human oversight in the name of speed. In a swarm-vs-swarm engagement, the side with
          a &ldquo;human in the loop&rdquo; loses because human decision-making is too slow. The logic
          of competition drives both sides toward full autonomy — machines fighting machines, at machine
          speed, with human life as collateral.
        </p>
      </div>

      {/* Peter Thiel and the ideology */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Ideology of Autonomous Killing</h2>
        <p className="text-stone-700 mb-4">
          The new defense tech industry is driven by a specific ideology — one that views AI-powered warfare
          as not just inevitable but desirable. Peter Thiel, whose Palantir provides AI surveillance tools
          to the CIA and military, has argued that technology companies have a moral obligation to work
          with the defense establishment. Palmer Luckey, founder of Anduril, explicitly set out to create
          the &ldquo;next great defense company&rdquo; because he believed Silicon Valley&apos;s reluctance
          to work with the military was naive.
        </p>
        <p className="text-stone-700 mb-4">
          The argument goes: if the US doesn&apos;t develop AI weapons, China will, and a world where
          Chinese AI dominates is worse than a world where American AI dominates. This is the exact logic
          of every arms race in history — and it always leads to the same place: proliferation,
          escalation, and catastrophe.
        </p>
        <p className="text-stone-700">
          The defense tech founders present themselves as patriotic disruptors. But their companies are
          building tools of unprecedented lethality with minimal oversight, selling them to governments
          with poor human rights records, and generating enormous profits in the process. Anduril&apos;s
          surveillance towers, deployed on the US-Mexico border, use the same AI technology sold to
          foreign militaries. Palantir&apos;s Gotham platform, used by ICE for immigration enforcement,
          uses the same algorithms used for military targeting. The line between domestic surveillance
          and foreign killing is becoming invisible.
        </p>
      </div>

      {/* Libertarian analysis */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Libertarian Case: No Algorithm Has Due Process</h2>
        <p className="text-stone-300 mb-4">
          The Fifth Amendment to the United States Constitution states: <em>&ldquo;No person shall be...
          deprived of life, liberty, or property, without due process of law.&rdquo;</em> An AI system
          that generates kill lists based on phone records and behavioral patterns is the antithesis of
          due process. There is no trial, no defense, no jury, no appeal. An algorithm assigns a number,
          a human rubber-stamps it in 20 seconds, and a bomb falls.
        </p>
        <p className="text-stone-300 mb-4">
          The government claims these protections don&apos;t apply to foreign nationals in war zones.
          But the US killed American citizens Anwar al-Awlaki and his 16-year-old son by drone strike
          with no trial. The legal reasoning — that &ldquo;due process&rdquo; doesn&apos;t require
          &ldquo;judicial process&rdquo; — is an Orwellian destruction of the concept. If the executive
          branch can unilaterally decide that due process has been satisfied, then the right is meaningless.
        </p>
        <p className="text-stone-300 mb-4">
          AI weapons accelerate this erosion. When a human decided to kill someone, there was at least
          the possibility of moral reflection, doubt, mercy. When a machine generates a target list of
          37,000 people and a human spends 20 seconds &ldquo;reviewing&rdquo; each one, the decision
          to kill has been outsourced to an algorithm. The human is decoration.
        </p>
        <p className="text-stone-300 mb-4">
          The libertarian principle is clear: <strong>no government should have the power to kill people
          based on algorithmic predictions</strong>. Not foreign governments, and certainly not our own.
          If a person cannot be arrested, charged, tried, and convicted through a transparent legal
          process, they should not be killed. Full stop. There is no exception in the Bill of Rights for
          &ldquo;but the computer said so.&rdquo;
        </p>
        <p className="text-stone-300">
          Furthermore, the concentration of AI weapons development in a handful of private companies —
          funded by the Pentagon, insulated from competition by classified contracts, and subject to
          minimal oversight — is the military-industrial complex on steroids. Eisenhower warned of the
          &ldquo;unwarranted influence&rdquo; of the defense industry. He could not have imagined a
          world where private companies build autonomous killing machines that governments deploy
          with no accountability to anyone.
        </p>
      </div>

      {/* What comes next */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Comes Next</h2>
        <p className="text-stone-700 mb-4">
          The trajectory is clear and accelerating. Within a decade, autonomous weapons will be
          ubiquitous on the battlefield. AI will select targets, plan operations, coordinate attacks,
          and make life-or-death decisions at speeds no human can match. The &ldquo;human in the
          loop&rdquo; will become a &ldquo;human on the loop&rdquo; (monitoring but not controlling)
          and eventually a &ldquo;human out of the loop&rdquo; entirely.
        </p>
        <p className="text-stone-700 mb-4">
          The risks are existential. An AI arms race creates pressure to remove safeguards in the
          name of speed. Autonomous weapons lower the barrier to conflict — it&apos;s easier to start
          a war when your own soldiers don&apos;t die. Proliferation is inevitable — today&apos;s
          cutting-edge military AI will be tomorrow&apos;s consumer drone with a payload. And the
          concentration of lethal AI in the hands of governments and corporations creates a power
          asymmetry that threatens the foundations of individual liberty.
        </p>
        <p className="text-stone-700">
          The choice is not between AI weapons and no AI weapons — that ship has sailed. The choice is
          between a world where autonomous killing is regulated, transparent, and accountable, and a
          world where it is secret, unaccountable, and unlimited. Right now, we are sprinting toward
          the latter.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources</h2>
        <ul className="text-xs text-stone-600 space-y-1">
          <li>• +972 Magazine / Local Call, &ldquo;&apos;Lavender&apos;: The AI Machine Directing Israel&apos;s Bombing Spree in Gaza&rdquo; (April 2024)</li>
          <li>• UN Panel of Experts on Libya, Final Report S/2021/229 (March 2021)</li>
          <li>• DOD Directive 3000.09, &ldquo;Autonomy in Weapon Systems&rdquo; (updated 2023)</li>
          <li>• Congressional Research Service, &ldquo;Defense Primer: US Policy on Lethal Autonomous Weapon Systems&rdquo; (2024)</li>
          <li>• International Committee of the Red Cross, &ldquo;Autonomous Weapon Systems: Technical, Military, Legal and Humanitarian Aspects&rdquo; (2014)</li>
          <li>• Paul Scharre, <em>Army of None: Autonomous Weapons and the Future of War</em> (2018)</li>
          <li>• Paul Scharre, <em>Four Battlegrounds: Power in the Age of Artificial Intelligence</em> (2023)</li>
          <li>• Campaign to Stop Killer Robots reports and briefings</li>
          <li>• DARPA program announcements and budget justifications</li>
          <li>• OpenAI usage policy changes (January 2024)</li>
          <li>• Deputy Secretary of Defense Kathleen Hicks, Replicator Initiative announcement (August 2023)</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-12 pt-8 border-t">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { slug: 'drone-wars', title: 'Drone Wars', desc: '14,000+ strikes. The precursor to autonomous killing.' },
            { slug: 'silicon-valley-pentagon', title: 'Silicon Valley & the Pentagon', desc: 'How Big Tech merged with the military-industrial complex.' },
            { slug: 'surveillance-state', title: 'The Surveillance State', desc: 'The same AI that targets militants abroad surveils citizens at home.' },
          ].map(a => (
            <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">{a.title}</h3>
              <p className="text-sm text-muted">{a.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
