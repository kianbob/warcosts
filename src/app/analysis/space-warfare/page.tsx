import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'Space Warfare — Militarizing the Final Frontier',
  description: 'Space Force: $26B budget. ASAT tests creating thousands of debris pieces. GPS military dependency. Starlink as a weapon. X-37B secret space plane. The weaponization of orbit.',
  openGraph: {
    title: 'Space Warfare — Militarizing the Final Frontier',
    description: 'The US Space Force costs $26B/year while 42,000 bridges are structurally deficient. Welcome to the new arms race.',
    url: 'https://www.warcosts.org/analysis/space-warfare',
  },
}

const asatTests = [
  { country: 'China', year: '2007', target: 'FY-1C weather satellite (865 km altitude)', debris: '3,500+ trackable pieces', status: 'Still in orbit — worst single debris event in history. Will take decades to de-orbit. Endangered the ISS and hundreds of other satellites.' },
  { country: 'United States', year: '2008', target: 'USA-193 spy satellite (247 km altitude)', debris: '174 tracked pieces (low orbit, mostly re-entered)', status: 'Pentagon claimed it was to prevent toxic hydrazine fuel from reaching Earth. Critics called it a demonstration ASAT test disguised as safety operation.' },
  { country: 'India', year: '2019', target: 'Microsat-R test satellite (300 km altitude)', debris: '400+ pieces tracked', status: 'PM Modi announced "Mission Shakti" on live TV. Conducted at low altitude to minimize debris, but fragments still reached ISS orbit. NASA called it "terrible."' },
  { country: 'Russia', year: '2021', target: 'Cosmos 1408 (defunct Soviet satellite, 480 km altitude)', debris: '1,500+ trackable pieces', status: 'ISS crew forced to shelter in escape capsules. Debris cloud directly threatened the station. US condemned it despite own 2008 test. Debris will persist for years.' },
]

const spaceForceTimeline = [
  { year: '1957', event: 'Sputnik launches the space race', detail: 'Soviet satellite triggered panic. Eisenhower created DARPA and NASA. Military space programs began immediately — reconnaissance satellites were operational by 1960.' },
  { year: '1967', event: 'Outer Space Treaty signed', detail: '111 nations agreed: no nuclear weapons in space, no military bases on the Moon, space is for "peaceful purposes." But the treaty doesn\'t ban conventional weapons in space or ASAT weapons — a loophole nations have been exploiting ever since.' },
  { year: '1983', event: 'Reagan\'s "Star Wars" (SDI)', detail: 'Strategic Defense Initiative proposed space-based missile defense. Cost $30 billion before being shelved. Never produced a working system. But it established the precedent of massive space weapons spending.' },
  { year: '1991', event: 'GPS transforms warfare (Gulf War)', detail: 'First war where GPS-guided munitions were used. Precision strikes became the new standard. Military became utterly dependent on space assets for navigation, targeting, and communication.' },
  { year: '2007', event: 'China ASAT test shocks the world', detail: 'China destroyed its own satellite, proving it could take out US military satellites. Created 3,500+ debris pieces. The Pentagon realized space superiority was no longer guaranteed.' },
  { year: '2018', event: 'Trump announces Space Force', detail: '"It is not enough to merely have an American presence in space. We must have American DOMINANCE in space." Initially mocked, but bipartisan support emerged quickly.' },
  { year: '2019', event: 'US Space Force established', detail: '6th branch of the military. Absorbed Air Force Space Command. Initial budget: ~$15 billion. First new military branch since the Air Force in 1947.' },
  { year: '2022', event: 'Starlink proves commercial space is a weapon', detail: 'SpaceX\'s Starlink provided internet to Ukraine after Russian invasion. Musk personally controlled access. A private citizen held military-grade communication infrastructure. Pentagon started buying Starlink terminals.' },
  { year: '2024', event: 'Space Force budget hits $26B+', detail: 'Budget nearly doubled in 5 years. Classified programs make true spending unknown. Space is now the most expensive new domain of warfare.' },
]

const gpsDependent = [
  { system: 'JDAM (Joint Direct Attack Munition)', dependence: 'GPS-guided bombs — the backbone of US precision strikes. 450,000+ used since 1999. Without GPS, they\'re dumb bombs.', risk: 'If GPS is jammed or satellites destroyed, precision strike capability drops by 90%+.' },
  { system: 'Tomahawk Cruise Missiles', dependence: 'GPS mid-course guidance. $1.87M per missile. Thousands deployed on Navy ships.', risk: 'Backup TERCOM (terrain matching) exists but is less accurate and doesn\'t work over water.' },
  { system: 'Military Logistics', dependence: 'Every military vehicle, ship, and aircraft uses GPS for navigation. Supply chain tracking depends on it.', risk: 'Without GPS, the US military would struggle to coordinate movements in unfamiliar territory — something no military has faced since the 1980s.' },
  { system: 'Drone Operations', dependence: 'Predator, Reaper, and other drones rely on GPS for navigation and targeting. 14,000+ strikes conducted.', risk: 'GPS jamming already affects drone operations. Russia has demonstrated effective GPS jamming in Syria and Ukraine.' },
  { system: 'Financial Systems (GPS Timing)', dependence: 'GPS provides precision timing for stock exchanges, banking transfers, cell networks, and power grids. $1 billion in transactions per day depend on GPS timing.', risk: 'Loss of GPS timing would disrupt financial markets, telecommunications, and power grid synchronization — even without a single shot fired.' },
  { system: 'Nuclear Command & Control', dependence: 'Submarine-launched ballistic missiles, ICBM targeting, and early warning systems all rely on satellite networks.', risk: 'An attack on space assets could blind nuclear early warning systems, creating a "use it or lose it" pressure on nuclear arsenals.' },
]

const starlinkUkraine = [
  { date: 'Feb 26, 2022', event: 'Ukrainian VP Mykhailo Fedorov tweets at Elon Musk asking for Starlink terminals' },
  { date: 'Feb 28, 2022', event: 'First Starlink terminals arrive in Ukraine — 48 hours after request' },
  { date: 'March 2022', event: 'Starlink becomes critical military infrastructure — Ukrainian forces coordinate via Starlink when Russian jamming disables other communications' },
  { date: 'Sept 2022', event: 'Musk refuses to extend Starlink coverage to Crimea, allegedly preventing a Ukrainian drone attack on Russian naval fleet in Sevastopol' },
  { date: 'Oct 2022', event: 'Musk proposes peace plan on Twitter, drawing fury from Ukraine. Questions emerge: should one billionaire control military communications?' },
  { date: 'June 2023', event: 'Pentagon signs contract with SpaceX for military-specific Starlink variant ("Starshield")' },
  { date: '2024', event: 'Russia develops its own Starlink-like system. China plans 13,000-satellite "GW" constellation. The satellite arms race accelerates.' },
]

export default function SpaceWarfarePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd
        title="Space Warfare — Militarizing the Final Frontier"
        description="Space Force: $26B budget. ASAT tests. GPS dependency. The weaponization of orbit."
        slug="space-warfare"
      />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Space Warfare' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          Space Warfare
        </h1>
        <p className="text-xl text-stone-300 mb-4">Militarizing the Final Frontier</p>
        <p className="text-stone-400 text-lg">
          The US Space Force — the newest branch of the military — has a budget exceeding{' '}
          <strong className="text-white">$26 billion per year</strong>. Meanwhile, 42,000 American bridges are
          structurally deficient, 2.2 million Americans lack running water, and the national debt exceeds $34 trillion.
          But sure — we need to dominate space. China shot down one of its own satellites in 2007, creating 3,500
          pieces of debris that will orbit for decades. Russia did the same in 2021, forcing ISS astronauts to
          shelter in escape pods. We are racing to weaponize the one place that still belonged to everyone.
        </p>
      </div>

      <ShareButtons title="Space Warfare — Militarizing the Final Frontier" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '$26B+', label: 'Space Force Budget', sub: '2024 — nearly doubled since 2019' },
          { val: '5,400+', label: 'Active Satellites', sub: 'In orbit — military, commercial, and civilian' },
          { val: '3,500+', label: 'Debris from China Test', sub: 'Still orbiting from 2007 ASAT test' },
          { val: '$100B+', label: 'US Military Satellite Investment', sub: 'GPS, comms, spy, early warning' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
          The Militarization of Space: A Timeline
        </h2>
        <div className="space-y-6">
          {spaceForceTimeline.map(item => (
            <div key={item.year} className="border-l-4 border-red-600 pl-4">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-red-700 font-bold font-[family-name:var(--font-heading)] text-lg">{item.year}</span>
                <h3 className="font-bold text-stone-900">{item.event}</h3>
              </div>
              <p className="text-stone-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ASAT Tests */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Anti-Satellite Weapons: Shooting Down the Future
        </h2>
        <p className="text-stone-700 mb-4">
          Four countries have demonstrated the ability to destroy satellites in orbit. Each test creates
          a cloud of debris that threatens every other object in orbit — including the International Space
          Station and the satellites that make GPS, weather forecasting, and global communications possible.
        </p>
        <div className="space-y-4">
          {asatTests.map(test => (
            <div key={`${test.country}-${test.year}`} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-bold text-stone-900">{test.country} ({test.year})</h3>
                <span className="text-red-700 font-bold text-sm">{test.debris}</span>
              </div>
              <p className="text-stone-700 text-sm mb-1"><strong>Target:</strong> {test.target}</p>
              <p className="text-stone-600 text-sm">{test.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kessler Syndrome */}
      <div className="bg-red-50 rounded-xl border border-red-200 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-900">
          Kessler Syndrome: The Nightmare Scenario
        </h2>
        <p className="text-stone-700 mb-4">
          In 1978, NASA scientist Donald Kessler proposed a terrifying scenario: if enough debris accumulates
          in orbit, collisions create more debris, which causes more collisions, in an unstoppable chain
          reaction. Eventually, entire orbital bands become unusable — not for years, but for <em>centuries</em>.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Current Debris Count</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• <strong>36,500+</strong> objects larger than 10cm tracked by US Space Surveillance</li>
              <li>• <strong>1,000,000+</strong> objects 1-10cm (too small to track, large enough to destroy)</li>
              <li>• <strong>130,000,000+</strong> objects smaller than 1cm</li>
              <li>• ISS has maneuvered <strong>32 times</strong> since 1999 to avoid debris</li>
              <li>• Debris travels at <strong>17,500 mph</strong> — a paint fleck can crack a window</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">What We&apos;d Lose</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• <strong>GPS navigation</strong> — every phone, car, plane, and ship</li>
              <li>• <strong>Weather forecasting</strong> — modern prediction requires satellites</li>
              <li>• <strong>Global communications</strong> — internet, phone, financial networks</li>
              <li>• <strong>Earth observation</strong> — climate monitoring, disaster response</li>
              <li>• <strong>Precision agriculture</strong> — GPS-guided farming feeds billions</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700 text-sm">
          Every ASAT test brings us closer to Kessler syndrome. The 2007 Chinese test alone increased
          trackable debris by 25%. A single space war — even a brief one — could make low Earth orbit
          unusable for generations. The military powers racing to weaponize space are risking the infrastructure
          that modern civilization depends on.
        </p>
      </div>

      {/* GPS Dependency */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          GPS: The Military&apos;s Greatest Dependency
        </h2>
        <p className="text-stone-700 mb-6">
          The Global Positioning System was built by the US military and remains operated by the Space Force.
          The 31-satellite constellation was made available for civilian use by Reagan in 1983 (after the
          Soviet shootdown of Korean Air Lines Flight 007). Today, the entire US military — and much of modern
          civilization — depends on it absolutely.
        </p>
        <div className="space-y-4">
          {gpsDependent.map(item => (
            <div key={item.system} className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 mb-1">{item.system}</h3>
              <p className="text-stone-700 text-sm mb-2">{item.dependence}</p>
              <p className="text-red-700 text-sm"><strong>Risk:</strong> {item.risk}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Starlink in Ukraine */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Starlink in Ukraine: When a Billionaire Controls the Battlefield
        </h2>
        <p className="text-stone-700 mb-4">
          The Ukraine conflict demonstrated something unprecedented: a private company&apos;s satellite
          constellation became critical military infrastructure, and a single billionaire could decide when
          and where it operated. This raises profound questions about the privatization of space warfare.
        </p>
        <div className="space-y-3">
          {starlinkUkraine.map(item => (
            <div key={item.date} className="flex gap-4 items-start">
              <span className="text-red-700 font-bold text-sm whitespace-nowrap min-w-[100px]">{item.date}</span>
              <p className="text-stone-700 text-sm">{item.event}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <p className="text-stone-800 text-sm">
            <strong>The precedent:</strong> Elon Musk — unelected, unaccountable, driven by personal judgment —
            made decisions that directly affected military operations in an active war. He later admitted to
            refusing Starlink extension to Crimea because he feared it could trigger nuclear escalation. A
            private citizen made a nuclear risk assessment that would normally require a national security council.
          </p>
        </div>
      </div>

      {/* X-37B */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          X-37B: The Secret Space Plane
        </h2>
        <p className="text-stone-700 mb-4">
          The Boeing X-37B is an unmanned spaceplane operated by the Space Force. It looks like a miniature
          Space Shuttle and has completed six missions since 2010. Its purposes are classified. Here&apos;s
          what we know:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Known Facts</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• 6 missions completed (OTV-1 through OTV-6)</li>
              <li>• OTV-6 spent <strong>908 days</strong> in orbit (2.5 years)</li>
              <li>• Orbital altitude: varies, can maneuver between orbits</li>
              <li>• Payload bay: 7 ft × 4 ft — room for experiments or...</li>
              <li>• Cost: classified. Estimated $1-2 billion per mission</li>
              <li>• Two vehicles exist — both operational</li>
            </ul>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Suspected Capabilities</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• Satellite inspection — approaching and photographing adversary satellites</li>
              <li>• Sensor testing — deploying classified surveillance payloads</li>
              <li>• Weapons testing — payload bay could carry ASAT or directed-energy weapons</li>
              <li>• Orbital maneuvering — demonstrated ability to change orbits, making it hard to track</li>
              <li>• China developed its own version (Shenlong) — first flight 2023</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-500 text-sm">
          The secrecy surrounding the X-37B is itself revealing. The Space Force won&apos;t say what it
          does, but it keeps flying for years at a time. The payload bay is the right size for a space
          weapon. And the ability to maneuver between orbits means it could approach any satellite in orbit.
        </p>
      </div>

      {/* Space Force vs Space Command */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Space Force vs. Space Command: Bureaucratic Bloat in Orbit
        </h2>
        <p className="text-stone-700 mb-4">
          In typical Pentagon fashion, the US now has two overlapping space organizations:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">US Space Force (USSF)</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• <strong>Type:</strong> Military branch (like Army, Navy)</li>
              <li>• <strong>Created:</strong> December 20, 2019</li>
              <li>• <strong>Personnel:</strong> ~16,000 "Guardians"</li>
              <li>• <strong>Budget:</strong> $26B+ (FY2024)</li>
              <li>• <strong>Role:</strong> Organize, train, and equip space forces</li>
              <li>• <strong>HQ:</strong> Pentagon (under Dept. of Air Force)</li>
            </ul>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">US Space Command (USSPACECOM)</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• <strong>Type:</strong> Combatant command (like CENTCOM)</li>
              <li>• <strong>Re-established:</strong> August 29, 2019</li>
              <li>• <strong>Personnel:</strong> ~1,400 (draws from all branches)</li>
              <li>• <strong>Budget:</strong> Included in overall DoD</li>
              <li>• <strong>Role:</strong> Plan and execute space operations</li>
              <li>• <strong>HQ:</strong> Peterson SFB, Colorado (controversial — Alabama lobbied hard)</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-600 text-sm">
          The distinction between a force that &quot;organizes and equips&quot; versus one that &quot;plans and
          executes&quot; is the kind of bureaucratic hair-splitting that lets the Pentagon employ thousands of
          administrators while claiming it needs more money. The Space Force HQ battle between Colorado and
          Alabama became a political fight that had nothing to do with national security and everything to do
          with congressional pork.
        </p>
      </div>

      {/* Outer Space Treaty */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Outer Space Treaty: A Paper Shield
        </h2>
        <p className="text-stone-700 mb-4">
          The 1967 Outer Space Treaty, signed by 111 nations including the US, Russia, and China, was supposed
          to keep space peaceful. But its loopholes are enormous:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h3 className="font-bold text-green-900 mb-2">What It Bans</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• Nuclear weapons or WMDs in orbit or on celestial bodies</li>
              <li>• Military bases on the Moon or other celestial bodies</li>
              <li>• National sovereignty claims over celestial bodies</li>
              <li>• Military maneuvers on celestial bodies</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h3 className="font-bold text-red-900 mb-2">What It Doesn&apos;t Ban</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• Conventional weapons in space</li>
              <li>• Anti-satellite weapons (ground or space-based)</li>
              <li>• Military satellites (reconnaissance, communication, GPS)</li>
              <li>• Kinetic bombardment from orbit (&quot;rods from God&quot;)</li>
              <li>• Directed-energy weapons (lasers) in space</li>
              <li>• Cyber attacks on space assets</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700 text-sm">
          The treaty was written for a Cold War era when only two nations could reach orbit. Today, 90+ countries
          operate satellites and a dozen have launch capability. The treaty has no enforcement mechanism, no
          verification regime, and loopholes large enough to fly an X-37B through.
        </p>
      </div>

      {/* Cost comparison */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          $26 Billion in Space vs. What It Could Buy on Earth
        </h2>
        <p className="text-stone-700 mb-4">
          The Space Force budget alone — not counting classified programs, Space Command, or military satellite
          programs in other branches — exceeds $26 billion per year. Here&apos;s what that money could fund:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { item: 'End veteran homelessness', cost: '$2.5B/year', ratio: 'Could fund 10× over' },
            { item: 'Clean water for all Americans', cost: '$4.5B/year (EPA estimate)', ratio: 'Could fund 5× over' },
            { item: 'Repair all structurally deficient bridges', cost: '$26B total (over 10 years)', ratio: 'One year of Space Force = all bridges fixed' },
            { item: 'Free community college for all', cost: '$9.5B/year', ratio: 'Could fund nearly 3× over' },
            { item: 'Double NASA\'s science budget', cost: '$8B increase', ratio: 'Could fund 3× over with change left' },
            { item: 'End childhood hunger in America', cost: '$3.5B/year (USDA estimate)', ratio: 'Could fund 7× over' },
          ].map(item => (
            <div key={item.item} className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 text-sm">{item.item}</h3>
              <p className="text-red-700 font-bold text-sm">{item.cost}</p>
              <p className="text-stone-500 text-xs">{item.ratio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Libertarian Analysis */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-900">
          The Libertarian Case: Militarizing the Commons
        </h2>
        <div className="space-y-4 text-stone-700">
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Space Is the Ultimate Commons</h3>
            <p className="text-sm">
              The Outer Space Treaty declared space the &quot;province of all mankind.&quot; It&apos;s a commons —
              like the oceans, the atmosphere, or the electromagnetic spectrum. When the US creates a Space Force,
              China builds ASAT weapons, and Russia tests satellite killers, they&apos;re enclosing the commons.
              The military-industrial complex isn&apos;t content with dominating the land, sea, and air. It needs
              space too — not because it&apos;s threatened, but because new domains mean new budgets.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">The Threat Is Manufactured</h3>
            <p className="text-sm">
              Yes, China and Russia are developing space weapons. But who started the arms race? The US has operated
              military satellites since 1960. GPS was a military system first. The X-37B has been flying classified
              missions since 2010. Every other nation&apos;s space weapon program is a response to American space
              dominance. Now the Pentagon uses those responses to justify even more spending. It&apos;s the same
              arms-race logic that gave us 70,000 nuclear weapons during the Cold War.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Bridges Crumble While We Weaponize Orbit</h3>
            <p className="text-sm">
              The American Society of Civil Engineers gives US infrastructure a C- grade. 42,000 bridges are
              structurally deficient. Water systems are failing from Flint to Jackson. The power grid is vulnerable
              to extreme weather. But we can afford $26 billion for a Space Force? This is the libertarian objection
              to military spending in its purest form: the government takes money from productive citizens to spend
              on threats that may never materialize, while the infrastructure those citizens actually use falls apart.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Privatization Without Accountability</h3>
            <p className="text-sm">
              The Starlink-Ukraine episode shows the danger of the public-private space nexus. SpaceX receives
              billions in government contracts. Musk personally decides where Starlink works in a war zone.
              The Pentagon depends on commercial satellites it doesn&apos;t control. This isn&apos;t free market
              capitalism — it&apos;s crony capitalism in orbit, where taxpayer money flows to private companies
              that then make unilateral decisions about war and peace.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-stone-300 mb-4">
          Space warfare isn&apos;t science fiction — it&apos;s happening now. The US has a $26 billion Space
          Force. Four nations have demonstrated satellite-killing weapons. Every ASAT test creates debris that
          threatens the satellites modern civilization depends on.
        </p>
        <p className="text-stone-300 mb-4">
          The Kessler syndrome — a cascading chain reaction of collisions that makes orbit unusable — is no
          longer theoretical. We&apos;re adding debris faster than it de-orbits. A single space conflict could
          destroy GPS, weather forecasting, and global communications for generations.
        </p>
        <p className="text-stone-300">
          The Outer Space Treaty was supposed to keep space peaceful. Instead, every major power is racing to
          weaponize it while exploiting the treaty&apos;s loopholes. The commons that belongs to all of humanity
          is being enclosed by the same military-industrial interests that Eisenhower warned about — just at a
          higher altitude.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Sources &amp; Further Reading</h2>
        <ul className="space-y-1 text-stone-600 text-sm">
          <li>• US Space Force FY2024 Budget Request</li>
          <li>• Secure World Foundation, Global Counterspace Capabilities Report (2024)</li>
          <li>• NASA Orbital Debris Program Office</li>
          <li>• European Space Agency, Space Debris by the Numbers (2024)</li>
          <li>• Walter Isaacson, &quot;Elon Musk&quot; — Starlink/Ukraine chapters (2023)</li>
          <li>• Union of Concerned Scientists Satellite Database</li>
          <li>• Congressional Research Service, &quot;Space Force: Issues for Congress&quot; (2024)</li>
          <li>• Kessler &amp; Cour-Palais, &quot;Collision Frequency of Artificial Satellites&quot; (1978)</li>
          <li>• UN Office for Outer Space Affairs, Outer Space Treaty (1967)</li>
          <li>• CSIS Aerospace Security Project, Space Threat Assessment (2024)</li>
        </ul>
      </div>

      <div className="text-center text-stone-500 text-sm mt-8 mb-4">
        <p>
          <Link href="/analysis/information-warfare" className="text-red-600 hover:underline">← Information Warfare</Link>
          {' · '}
          <Link href="/analysis" className="text-red-600 hover:underline">All Analysis</Link>
          {' · '}
          <Link href="/analysis/private-armies" className="text-red-600 hover:underline">Private Armies →</Link>
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
