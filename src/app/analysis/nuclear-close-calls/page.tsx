import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { NuclearTimeline } from './NuclearTimeline'

export const metadata: Metadata = {
  title: 'Nuclear Close Calls: How Close We\'ve Come to the End of the World',
  description: 'Cuban Missile Crisis. Able Archer 83. Stanislav Petrov. The Norwegian rocket incident. B-59 submarine. At least 22 times, the world came within minutes of nuclear war.',
  openGraph: {
    title: 'Nuclear Close Calls: How Close We\'ve Come to the End of the World',
    description: 'At least 22 documented incidents where nuclear war was minutes away. The history no one teaches.',
    url: 'https://www.warcosts.org/analysis/nuclear-close-calls',
  },
}

const incidents = [
  {
    date: 'November 5, 1956',
    name: 'Suez Crisis False Alarm',
    severity: 7,
    minutesToMidnight: '~30 min',
    description: 'During the Suez Crisis, NORAD received four simultaneous warnings: unidentified aircraft over Turkey, 100 Soviet MiGs over Syria, a British bomber shot down over Syria, and a Soviet naval fleet moving through the Dardanelles. Any one of these could have triggered a nuclear response.',
    whatSavedUs: 'NORAD officers investigated rather than escalating. The aircraft over Turkey were swans. The MiGs were a scheduled escort. The fleet movement was routine.',
    nuclearArsenal: '~3,600 US / ~400 Soviet warheads',
    potentialDeath: 'Hundreds of millions',
  },
  {
    date: 'November 24, 1961',
    name: 'BMEWS Communication Failure',
    severity: 7,
    minutesToMidnight: '~20 min',
    description: 'All communication links between NORAD and the Ballistic Missile Early Warning System (BMEWS) stations simultaneously failed. SAC went to high alert, assuming the communication loss was caused by a Soviet first strike. B-52 bombers were readied for immediate launch.',
    whatSavedUs: 'A B-52 on airborne alert was able to reach one BMEWS site by radio and confirm no attack was underway. The communication failure was caused by a single relay station in Colorado overheating.',
    nuclearArsenal: '~23,000 US / ~2,500 Soviet warheads',
    potentialDeath: 'Hundreds of millions',
  },
  {
    date: 'October 25–28, 1962',
    name: 'Cuban Missile Crisis (General)',
    severity: 10,
    minutesToMidnight: '~minutes',
    description: 'The most dangerous moment in human history. The US discovered Soviet nuclear missiles being installed in Cuba, 90 miles from Florida. For 13 days, the world teetered on the edge of thermonuclear war. Both sides had nuclear weapons on high alert. US invasion plans were drawn up. Soviet tactical nuclear weapons in Cuba were authorized for use.',
    whatSavedUs: 'Kennedy and Khrushchev negotiated via back channels. Kennedy rejected his generals\' unanimous advice to bomb and invade Cuba. The US secretly agreed to remove Jupiter missiles from Turkey. Khrushchev withdrew the missiles from Cuba.',
    nuclearArsenal: '~27,000 US / ~3,300 Soviet warheads',
    potentialDeath: '100–500 million (immediate); civilization-ending (nuclear winter)',
  },
  {
    date: 'October 27, 1962',
    name: 'B-59 Submarine Incident',
    severity: 10,
    minutesToMidnight: '~1 min',
    description: 'Soviet submarine B-59, armed with a nuclear torpedo, was trapped underwater by US Navy depth charges during the Cuban Missile Crisis. The captain, Valentin Savitsky, believed war had already started. He ordered the nuclear torpedo armed and prepared to fire. Soviet regulations required all three senior officers aboard to agree. Two agreed.',
    whatSavedUs: 'Vasili Arkhipov, the flotilla commander and the third officer required to authorize launch, refused. He convinced the captain to surface and await orders from Moscow. One man\'s refusal to launch prevented nuclear war.',
    nuclearArsenal: 'Same as above. The torpedo would have destroyed the USS Randolph carrier group and likely triggered full nuclear exchange.',
    potentialDeath: 'Civilization-ending',
  },
  {
    date: 'October 28, 1962',
    name: 'Moorestown False Alarm',
    severity: 8,
    minutesToMidnight: '~10 min',
    description: 'During the most tense moment of the Cuban Missile Crisis, NORAD\'s radar at Moorestown, New Jersey, detected a nuclear missile launch from Cuba targeting Tampa, Florida. Officers scrambled to confirm. SAC prepared for retaliation.',
    whatSavedUs: 'The radar had tracked a satellite reentering the atmosphere over Cuba and misidentified it as a missile launch. Human judgment overrode the automated warning system.',
    nuclearArsenal: 'Same Cuban Missile Crisis arsenal',
    potentialDeath: 'Civilization-ending (had retaliation been launched)',
  },
  {
    date: 'November 9, 1979',
    name: 'NORAD Computer Error (War Game Tape)',
    severity: 8,
    minutesToMidnight: '~6 min',
    description: 'NORAD computers showed a massive Soviet nuclear strike incoming — 2,200 ICBMs heading toward the United States. Zbigniew Brzezinski (National Security Advisor) was called at 3 AM and told to prepare President Carter for immediate nuclear retaliation. He was about to call Carter when a second call came.',
    whatSavedUs: 'Someone had accidentally loaded a training tape simulating a Soviet attack into NORAD\'s live warning system. The error was caught by cross-referencing with satellite early warning systems, which showed no launches. Six minutes of panic.',
    nuclearArsenal: '~24,000 US / ~30,000 Soviet warheads',
    potentialDeath: 'Civilization-ending',
  },
  {
    date: 'September 26, 1983',
    name: 'Stanislav Petrov Incident',
    severity: 10,
    minutesToMidnight: '~5 min',
    description: 'Soviet early warning satellite system detected five US Minuteman ICBM launches heading toward the Soviet Union. Lt. Colonel Stanislav Petrov was the duty officer at Serpukhov-15 bunker, responsible for relaying the warning to Soviet leadership. Protocol required him to report it as a confirmed attack, which would have triggered Soviet retaliation — thousands of nuclear warheads.',
    whatSavedUs: 'Petrov judged that a real US first strike would involve hundreds of missiles, not five. He reported the alarm as a system malfunction. He was right — the satellite had misinterpreted sunlight reflecting off high-altitude clouds as missile exhaust. Petrov was reprimanded for not following protocol. He saved the world.',
    nuclearArsenal: '~23,000 US / ~35,000 Soviet warheads (peak of Cold War)',
    potentialDeath: 'Civilization-ending. At 58,000+ warheads combined, this was the most dangerous moment in terms of destructive potential.',
  },
  {
    date: 'November 7–11, 1983',
    name: 'Able Archer 83',
    severity: 9,
    minutesToMidnight: '~unknown (closest since Cuban Missile Crisis)',
    description: 'NATO conducted Able Archer 83, a realistic nuclear war simulation exercise involving heads of state, new communication formats, and escalation through DEFCON levels to simulated nuclear release. Soviet intelligence, already paranoid under Operation RYAN (a years-long program to detect a NATO first strike), interpreted the exercise as possible cover for an actual nuclear attack.',
    whatSavedUs: 'Soviet nuclear forces were placed on high alert. Nuclear-capable aircraft in East Germany and Poland were readied. The crisis defused only when the exercise ended on November 11. Western intelligence later learned (from double agent Oleg Gordievsky) how close the Soviets came to launching a preemptive strike. Reagan was reportedly shocked and changed his approach to the USSR.',
    nuclearArsenal: '~23,000 US / ~35,000 Soviet warheads',
    potentialDeath: 'Civilization-ending',
  },
  {
    date: 'January 25, 1995',
    name: 'Norwegian Rocket Incident',
    severity: 8,
    minutesToMidnight: '~8 min',
    description: 'Russian radar detected a rocket launched from Norway heading toward Moscow. President Boris Yeltsin activated the nuclear briefcase (Cheget) for the first time in history. Russian nuclear forces were placed on high alert. Yeltsin had 8 minutes to decide whether to launch a retaliatory strike.',
    whatSavedUs: 'The rocket was a Norwegian-American scientific sounding rocket studying the aurora borealis. Norway had notified Russia weeks earlier, but the notification never reached the radar operators. Yeltsin decided to wait. Eight minutes later, the rocket\'s trajectory showed it was heading into the sea.',
    nuclearArsenal: '~10,000 US / ~18,000 Russian warheads',
    potentialDeath: 'Civilization-ending',
  },
  {
    date: 'January 2018',
    name: 'Hawaii False Missile Alert',
    severity: 5,
    minutesToMidnight: '~38 min (no military response, but mass panic)',
    description: 'At 8:07 AM on January 13, 2018, the Hawaii Emergency Management Agency sent an alert to all cell phones in the state: "BALLISTIC MISSILE THREAT INBOUND TO HAWAII. SEEK IMMEDIATE SHELTER. THIS IS NOT A DRILL." Panic ensued. People hid in storm drains, called loved ones to say goodbye, and drove at high speed to find shelter.',
    whatSavedUs: 'It took 38 minutes for a correction to be sent. The false alarm was caused by a single employee clicking the wrong option during a shift change. While no military response was triggered, it demonstrated how easily panic could cascade in the nuclear age.',
    nuclearArsenal: '~6,800 US / ~6,500 Russian warheads',
    potentialDeath: 'No military escalation, but revealed systemic vulnerabilities.',
  },
]

const arsenalOverTime = [
  { year: 1945, us: 6, ussr: 0, total: 6 },
  { year: 1950, us: 369, ussr: 5, total: 374 },
  { year: 1955, us: 3057, ussr: 200, total: 3257 },
  { year: 1960, us: 20434, ussr: 1627, total: 22061 },
  { year: 1965, us: 31642, ussr: 6129, total: 37771 },
  { year: 1970, us: 26662, ussr: 11643, total: 38305 },
  { year: 1975, us: 27826, ussr: 19443, total: 47269 },
  { year: 1980, us: 24304, ussr: 30062, total: 54366 },
  { year: 1986, us: 23317, ussr: 40159, total: 63476 },
  { year: 1990, us: 21392, ussr: 37000, total: 58392 },
  { year: 1995, us: 10953, ussr: 18000, total: 28953 },
  { year: 2000, us: 10577, ussr: 12000, total: 22577 },
  { year: 2005, us: 8360, ussr: 7200, total: 15560 },
  { year: 2010, us: 5113, ussr: 5215, total: 10328 },
  { year: 2015, us: 4717, ussr: 4500, total: 9217 },
  { year: 2020, us: 3750, ussr: 4315, total: 8065 },
  { year: 2025, us: 3708, ussr: 4380, total: 8088 },
]

export default function NuclearCloseCallsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Nuclear Close Calls' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Deep Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Minutes from Midnight
        </h1>
        <p className="text-xl text-stone-300 mb-4">How Close We&apos;ve Come to Nuclear War</p>
        <p className="text-stone-400 text-lg">
          On at least 22 documented occasions, the world has come within minutes of nuclear war. A Soviet officer
          defied orders. A US president ignored his generals. A radar mistook geese for bombers. A training tape was
          loaded into a live system. Each time, we survived by luck, courage, or the judgment of a single individual.
          The weapons still exist. The luck may not hold.
        </p>
      </div>

      <ShareButtons title="Nuclear Close Calls: How Close We've Come to the End of the World" />

      {/* AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">AI Overview — Key Data</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 Peak global nuclear arsenal: <strong className="text-white">63,476 warheads</strong> (1986) — enough to destroy civilization many times over.</li>
          <li>📊 Current arsenal: <strong className="text-white">~12,500 warheads</strong> (US + Russia) — still enough to end human civilization.</li>
          <li>📊 <strong className="text-white">Stanislav Petrov</strong> (1983): One man defied protocol and saved the world from nuclear war triggered by a satellite error.</li>
          <li>📊 <strong className="text-white">Vasili Arkhipov</strong> (1962): Refused to authorize a nuclear torpedo during the Cuban Missile Crisis. One dissenting vote prevented Armageddon.</li>
          <li>📊 <strong className="text-white">Able Archer 83</strong>: A NATO exercise nearly triggered Soviet preemptive nuclear strike. Reagan was shocked when briefed.</li>
          <li>📊 US nuclear modernization plan: <strong className="text-white">$1.7 trillion</strong> over 30 years. We&apos;re building more, not fewer.</li>
        </ul>
      </div>

      <NuclearTimeline arsenalData={arsenalOverTime} />

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">We Have Been Lucky, Not Safe</h2>
        <p>
          The history of nuclear weapons is not a story of deterrence working. It is a story of deterrence
          <em> almost failing</em>, repeatedly, and being saved by luck, individual courage, or technical flukes.
          Every incident below represents a moment when the normal functioning of nuclear command and control systems
          pointed toward launch — and something outside the system prevented it.
        </p>
        <p>
          These incidents are not hypothetical scenarios or war games. They are documented events, many declassified
          decades after they occurred. In several cases, the public only learned how close we came to nuclear war
          years or decades later. The question is not whether the system has nearly failed — it has, repeatedly.
          The question is whether it will hold the next time.
        </p>
      </div>

      {/* Incidents Timeline */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Close Calls</h2>
        <p className="text-stone-400 text-sm mb-4">
          Severity rated 1–10. A rating of 10 means nuclear war was prevented by a single decision or act.
        </p>
        <div className="space-y-6">
          {incidents.map((incident, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-5">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <div>
                  <span className="text-red-400 text-sm font-mono">{incident.date}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">{incident.name}</h3>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <span className="text-stone-400 text-xs">Severity:</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 10 }).map((_, j) => (
                        <div
                          key={j}
                          className={`w-3 h-3 rounded-sm ${j < incident.severity ? 'bg-red-600' : 'bg-stone-700'}`}
                        />
                      ))}
                    </div>
                    <span className="text-red-400 font-bold ml-1">{incident.severity}/10</span>
                  </div>
                  <span className="text-stone-500 text-xs">{incident.minutesToMidnight} to launch</span>
                </div>
              </div>
              <p className="text-stone-300 text-sm mb-3">{incident.description}</p>
              <div className="bg-stone-900 rounded p-3">
                <span className="text-green-400 text-sm font-semibold">What saved us:</span>
                <p className="text-stone-300 text-sm mt-1">{incident.whatSavedUs}</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-3 text-xs text-stone-500">
                <span>Arsenal: {incident.nuclearArsenal}</span>
                <span>Potential: {incident.potentialDeath}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Heroes Nobody Knows</h2>
        <p>
          Two men deserve special recognition for literally saving the world:
        </p>
        <p>
          <strong>Vasili Arkhipov</strong> (1926–1998) was a Soviet Navy officer aboard submarine B-59 during the
          Cuban Missile Crisis. When the captain and political officer agreed to launch a nuclear torpedo at the US
          Navy, Arkhipov alone refused. Had he agreed, the torpedo would have destroyed a US aircraft carrier group,
          and the resulting escalation would almost certainly have triggered full nuclear war. Arthur Schlesinger,
          Kennedy advisor, later called it &ldquo;the most dangerous moment in human history.&rdquo; Arkhipov died in
          obscurity in 1998. His story only became widely known after Soviet archives were opened.
        </p>
        <p>
          <strong>Stanislav Petrov</strong> (1939–2017) was a Soviet Air Defense Forces officer who, on September 26,
          1983, received a satellite warning that the United States had launched five ICBMs toward the Soviet Union.
          His training and protocol required him to report the warning as genuine, which would have triggered an
          immediate Soviet retaliatory launch. Instead, he judged it was a false alarm — reasoning that a real first
          strike would involve hundreds of missiles, not five — and reported it as a malfunction.
        </p>
        <p>
          He was right. The satellite system had misidentified sunlight reflecting off high-altitude clouds as missile
          exhaust. Petrov was reprimanded for not following protocol. He received no award or recognition from the
          Soviet government. He was eventually honored internationally — the United Nations, the Dresden Peace Prize —
          but never by Russia. He died in a small apartment outside Moscow in 2017.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Nuclear Winter: What Would Actually Happen</h2>
        <p>
          A full-scale nuclear exchange between the United States and Russia would involve approximately 4,000–6,000
          warheads. Modern climate models (Robock et al., 2007; Toon et al., 2019) estimate the consequences:
        </p>
        <ul>
          <li><strong>Immediate deaths:</strong> 300–500 million from blast, heat, and radiation</li>
          <li><strong>Firestorms:</strong> would inject 150+ million tons of soot into the stratosphere</li>
          <li><strong>Temperature drop:</strong> global average temperature would fall 8–10°C (nuclear winter)</li>
          <li><strong>Agricultural collapse:</strong> growing seasons eliminated for 2–5 years in Northern Hemisphere</li>
          <li><strong>Famine deaths:</strong> 1–5 billion over the following decade</li>
          <li><strong>Ozone destruction:</strong> 50–70% of ozone layer destroyed; lethal UV radiation levels</li>
          <li><strong>Civilization:</strong> effectively ended. Recovery timeline: decades to centuries, if ever</li>
        </ul>
        <p>
          Even a &ldquo;limited&rdquo; nuclear exchange — say, 100 warheads between India and Pakistan — would produce
          enough soot to drop global temperatures by 1–2°C and cause a global famine affecting 2 billion people.
          There is no such thing as a limited nuclear war.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The $1.7 Trillion Modernization</h2>
        <p>
          Rather than reducing the nuclear threat, the United States is <em>expanding</em> it. The current nuclear
          modernization plan — begun under Obama, continued under Trump and Biden — will spend $1.7 trillion over
          30 years to build:
        </p>
        <ul>
          <li><strong>Sentinel ICBM:</strong> Replacing Minuteman III. 400 new missiles in underground silos. Cost: $264B+.</li>
          <li><strong>Columbia-class submarines:</strong> 12 new ballistic missile subs. Cost: $128B+.</li>
          <li><strong>B-21 Raider:</strong> New stealth bomber capable of carrying nuclear weapons. Cost: $203B+ lifetime.</li>
          <li><strong>W93 warhead:</strong> New warhead design for submarine-launched missiles.</li>
          <li><strong>Long-Range Standoff Weapon:</strong> New nuclear-capable cruise missile. Cost: $10B+.</li>
        </ul>
        <p>
          This represents a complete replacement of the nuclear triad — land, sea, and air delivery systems — with
          newer, more capable weapons. The argument is &ldquo;modernization,&rdquo; but the effect is to perpetuate the
          nuclear arsenal for another 50 years.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Current Danger: The Iran Factor</h2>
        <p>
          The 2026 Iran crisis adds a new dimension to nuclear risk. While Iran does not have nuclear weapons, the
          current US military campaign against Iran — including strikes on suspected nuclear facilities — raises
          several escalatory risks:
        </p>
        <ul>
          <li>Russia has warned that strikes on Iran could affect Russian advisors and equipment, creating a direct US-Russia confrontation risk</li>
          <li>Iran&apos;s proxy network (Hezbollah, Houthis, Iraqi militias) creates multiple flashpoints for unintended escalation</li>
          <li>Pakistan, a nuclear-armed neighbor of Iran with historical ties, faces pressure from both sides</li>
          <li>Israel&apos;s undeclared nuclear arsenal (~90 warheads) adds another variable to regional escalation dynamics</li>
        </ul>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;I know not with what weapons World War III will be fought, but World War IV will be fought with
          sticks and stones.&rdquo;</p>
          <footer>— Albert Einstein (attributed)</footer>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line</h2>
        <p>
          We are alive today not because nuclear deterrence works, but because we have been extraordinarily lucky.
          On at least 22 documented occasions, technical malfunctions, human error, or miscommunication brought the
          world to the brink of nuclear war. Each time, we were saved by an individual who chose not to follow
          protocol — a Soviet submarine officer, a radar operator, a lieutenant colonel — or by a lucky coincidence.
        </p>
        <p>
          The weapons are still here. There are 12,500 nuclear warheads in the world, 90% held by the United States
          and Russia. Both countries are modernizing their arsenals. New risks — cyber attacks on command systems,
          AI-enabled launch decision-making, regional conflicts that could escalate — make the current period
          potentially more dangerous than the Cold War.
        </p>
        <p>
          The Doomsday Clock, maintained by the Bulletin of the Atomic Scientists, stands at 90 seconds to midnight —
          the closest it has ever been. The scientists who built the bomb are telling us we are in more danger than
          at any point since 1947. We should listen.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/iran-2026">Iran 2026: Another Undeclared War?</Link></li>
          <li><Link href="/analysis/cost-of-iran">What Will Iran Cost?</Link></li>
          <li><Link href="/analysis/human-cost">The Human Cost of War</Link></li>
          <li><Link href="/analysis/ai-weapons">AI Weapons: Autonomous Killing Machines</Link></li>
          <li><Link href="/analysis/cost-of-secrecy">The Black Budget and Classified Spending</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
