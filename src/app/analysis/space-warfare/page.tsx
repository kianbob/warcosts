import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'
import RelatedArticles from '@/components/RelatedArticles'

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
  { country: 'China', year: '2007', target: 'FY-1C weather satellite (865 km altitude)', debris: '3,500+ trackable pieces', status: 'Still in orbit — worst single debris event in history. Will take decades to de-orbit. Endangered the ISS and hundreds of other satellites.', weapon: 'SC-19 kinetic kill vehicle launched from mobile platform' },
  { country: 'United States', year: '2008', target: 'USA-193 spy satellite (247 km altitude)', debris: '174 tracked pieces (low orbit, mostly re-entered)', status: 'Pentagon claimed it was to prevent toxic hydrazine fuel from reaching Earth. Critics called it a demonstration ASAT test disguised as safety operation.', weapon: 'SM-3 missile launched from USS Lake Erie' },
  { country: 'India', year: '2019', target: 'Microsat-R test satellite (300 km altitude)', debris: '400+ pieces tracked', status: 'PM Modi announced "Mission Shakti" on live TV. Conducted at low altitude to minimize debris, but fragments still reached ISS orbit. NASA called it "terrible."', weapon: 'PDV Mk-II ground-based interceptor' },
  { country: 'Russia', year: '2021', target: 'Cosmos 1408 (defunct Soviet satellite, 480 km altitude)', debris: '1,500+ trackable pieces', status: 'ISS crew forced to shelter in escape capsules. Debris cloud directly threatened the station. US condemned it despite own 2008 test. Debris will persist for years.', weapon: 'Nudol/PL-19 ground-based missile' },
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
  { system: 'JDAM (Joint Direct Attack Munition)', dependence: 'GPS-guided bombs — the backbone of US precision strikes. 450,000+ used since 1999. Without GPS, they\'re dumb bombs.', risk: 'If GPS is jammed or satellites destroyed, precision strike capability drops by 90%+.', cost: '$25,000 per guidance kit' },
  { system: 'Tomahawk Cruise Missiles', dependence: 'GPS mid-course guidance. $1.87M per missile. Thousands deployed on Navy ships.', risk: 'Backup TERCOM (terrain matching) exists but is less accurate and doesn\'t work over water.', cost: '$1.87M per missile' },
  { system: 'Military Logistics', dependence: 'Every military vehicle, ship, and aircraft uses GPS for navigation. Supply chain tracking depends on it.', risk: 'Without GPS, the US military would struggle to coordinate movements in unfamiliar territory — something no military has faced since the 1980s.', cost: 'Logistics is 70% of military operations' },
  { system: 'Drone Operations', dependence: 'Predator, Reaper, and other drones rely on GPS for navigation and targeting. 14,000+ strikes conducted.', risk: 'GPS jamming already affects drone operations. Russia has demonstrated effective GPS jamming in Syria and Ukraine.', cost: '$17M per Reaper drone' },
  { system: 'Financial Systems (GPS Timing)', dependence: 'GPS provides precision timing for stock exchanges, banking transfers, cell networks, and power grids. $1 billion in transactions per day depend on GPS timing.', risk: 'Loss of GPS timing would disrupt financial markets, telecommunications, and power grid synchronization — even without a single shot fired.', cost: '$1 trillion daily financial transactions at risk' },
  { system: 'Nuclear Command & Control', dependence: 'Submarine-launched ballistic missiles, ICBM targeting, and early warning systems all rely on satellite networks.', risk: 'An attack on space assets could blind nuclear early warning systems, creating a "use it or lose it" pressure on nuclear arsenals.', cost: '$44B nuclear modernization annually' },
]

const starlinkUkraine = [
  { date: 'Feb 26, 2022', event: 'Ukrainian VP Mykhailo Fedorov tweets at Elon Musk asking for Starlink terminals', details: '"@elonmusk, while you try to colonize Mars — Russia try to occupy Ukraine! While your rockets successfully land from space — Russian rockets attack Ukrainian civil people! We ask you to provide Ukraine with Starlink stations."' },
  { date: 'Feb 28, 2022', event: 'First Starlink terminals arrive in Ukraine — 48 hours after request', details: 'SpaceX delivers terminals faster than most government aid programs. Musk becomes a player in the war.' },
  { date: 'March 2022', event: 'Starlink becomes critical military infrastructure', details: 'Ukrainian forces coordinate via Starlink when Russian jamming disables other communications. Artillery targeting, drone operations, command & control — all depend on a private network.' },
  { date: 'Sept 2022', event: 'Musk refuses to extend Starlink coverage to Crimea', details: 'Allegedly prevented a Ukrainian drone attack on Russian naval fleet in Sevastopol. Musk later said he feared nuclear escalation. A private citizen made a nuclear risk assessment.' },
  { date: 'Oct 2022', event: 'Musk proposes peace plan on Twitter', details: 'Suggests Ukraine hold UN-supervised elections in annexed territories, recognize Crimea as Russian, adopt neutral status. Ukraine\'s ambassador tells Musk to "f*** off." Questions emerge: should one billionaire influence war strategy?' },
  { date: 'June 2023', event: 'Pentagon signs contract with SpaceX for military Starshield', details: 'Classified variant of Starlink for exclusive military use. Costs unknown but likely hundreds of millions. Government paying for what it initially got free.' },
  { date: '2024', event: 'Satellite arms race accelerates', details: 'Russia developing its own Starlink-like system. China plans 13,000-satellite "GW" constellation. Every major power wants their own space internet — and the ability to deny it to others.' },
]

const spaceWeapons = [
  { type: 'Kinetic Kill Vehicles', description: 'Ground-launched missiles that ram satellites at high speed', examples: 'China SC-19, US SM-3, Russia Nudol', pros: 'Proven technology, relatively cheap', cons: 'Creates massive debris fields, obvious attack', cost: '$10-50M per missile' },
  { type: 'Co-orbital ASAT', description: 'Satellites that approach target satellites and explode or disable them', examples: 'Russia Cosmos 2504 (suspected), China SJ-17 rendezvous tests', pros: 'Hard to detect, can masquerade as civilian satellites', cons: 'Expensive, long development time', cost: '$100M+ per satellite' },
  { type: 'Directed Energy Weapons', description: 'Ground or space-based lasers that damage satellite sensors or solar panels', examples: 'Russia Peresvet laser system, China ground-based lasers', pros: 'No debris, plausible deniability, reversible damage', cons: 'Atmospheric limitations, power requirements', cost: '$500M+ for space-based systems' },
  { type: 'Electronic Warfare', description: 'Jamming, spoofing, or hacking satellite communications and navigation', examples: 'Russian Krasukha-4 GPS jammers, Iranian GPS spoofing', pros: 'Reversible, hard to attribute, relatively cheap', cons: 'Limited range, countermeasures possible', cost: '$1-10M per jammer' },
  { type: 'Cyber Weapons', description: 'Hacking satellite control systems, uploading malware, stealing data', examples: 'Suspected attacks on Inmarsat, ViaSat during Ukraine conflict', pros: 'Attribution difficult, low cost, high impact', cons: 'Requires extensive intelligence, may be temporary', cost: '$1-100M for sophisticated programs' },
  { type: 'Nuclear EMP', description: 'High-altitude nuclear detonation creates electromagnetic pulse affecting all satellites in region', examples: 'US Starfish Prime test (1962), Soviet K-3 project', pros: 'Affects large areas, proven devastating effects', cons: 'Escalatory, affects own satellites, violates Outer Space Treaty', cost: '$1B+ including delivery system' },
]

const militarySpaceContractors = [
  { company: 'SpaceX', contracts: '$15B+ military contracts since 2008', services: 'Launch services, Starlink military variant, Dragon crew transport', notable: 'Only company capable of heavy-lift at competitive prices. Vertical integration model.' },
  { company: 'Boeing', contracts: '$20B+ space contracts since 2000', services: 'X-37B space plane, Starliner crew vehicle, satellite manufacturing', notable: 'Traditional defense contractor. Cost-plus culture. SLS rocket billions over budget.' },
  { company: 'Lockheed Martin', contracts: '$25B+ space contracts since 2000', services: 'Military satellites, missile defense, GPS satellites', notable: 'Builds GPS III satellites ($5.5B contract). Major missile defense contractor.' },
  { company: 'Northrop Grumman', contracts: '$10B+ space contracts since 2000', services: 'Military satellites, missile defense interceptors, space telescopes', notable: 'Acquired Orbital ATK (2018). Major supplier of solid rocket motors.' },
  { company: 'ULA (Boeing/Lockheed JV)', contracts: '$50B+ since 2006', services: 'Atlas V and Delta IV launches for military/intelligence', notable: 'Monopoly on military launches until SpaceX. $1B+ per launch vs SpaceX $60M.' },
  { company: 'Raytheon', contracts: '$8B+ space/missile defense', services: 'Missile defense radars, interceptor missiles, satellite communications', notable: 'Patriot missile system uses satellite networks. Major GPS military receiver contractor.' },
]

const spaceBudgetBreakdown = [
  { category: 'Space Force Total Budget (FY24)', amount: '$29.4B', details: 'Includes military personnel, operations, procurement, R&D. Fastest growing military branch.' },
  { category: 'Launch Services', amount: '$2.8B', details: 'SpaceX Falcon Heavy, ULA Atlas V/Delta IV, some commercial contracts. Launch costs dropping due to reusability.' },
  { category: 'Satellite Procurement', amount: '$4.1B', details: 'GPS III satellites, protected military satcom, missile warning satellites. Each GPS satellite costs ~$500M.' },
  { category: 'Ground Systems', amount: '$3.2B', details: 'Satellite control, ground terminals, GPS monitoring stations worldwide. Often overlooked but critical.' },
  { category: 'Space-Based Missile Defense', amount: '$1.5B', details: 'Sensor satellites for missile tracking. Part of $20B+ annual missile defense spending.' },
  { category: 'Classified Programs', amount: '$8B+ (estimated)', details: 'National Reconnaissance Office, CIA satellites, NSA space programs. True amount unknown.' },
  { category: 'Research & Development', amount: '$4.2B', details: 'Next-gen satellites, space weapons research, quantum communications. Much is classified.' },
  { category: 'Operations & Maintenance', amount: '$5.6B', details: 'Satellite operations, cybersecurity, personnel training. Growing as constellation size increases.' },
]

const internationalSpaceForces = [
  { country: 'China', force: 'People\'s Liberation Army Strategic Support Force Space Systems Department', budget: '$8-12B estimated', capabilities: 'ASAT weapons, quantum satellites, lunar base plans, 13,000-satellite constellation planned', concern: 'Rapidly closing technology gap. Anti-access/area denial in space.' },
  { country: 'Russia', force: 'Russian Space Forces (under Aerospace Forces)', budget: '$3-5B estimated', capabilities: 'ASAT weapons, electronic warfare, co-orbital interceptors, nuclear space tugs', concern: 'Willing to create debris. Cyber attacks on satellites. Partnership with China.' },
  { country: 'France', force: 'Space and Air Force Space Command', budget: '$700M', capabilities: 'Military satellites, space situational awareness, small ASAT capability', concern: 'EU independence from US GPS. Galileo constellation has military applications.' },
  { country: 'India', force: 'Defence Space Agency', budget: '$1.5B', capabilities: 'ASAT demonstrated, indigenous satellite navigation, lunar/Mars missions', concern: 'Regional power with global space ambitions. ASAT test created debris.' },
  { country: 'Japan', force: 'Japan Self-Defense Forces Space Operations Squadron', budget: '$500M', capabilities: 'Space situational awareness, electronic warfare capabilities', concern: 'Close US ally but seeks independent capabilities. Potential ASAT development.' },
  { country: 'Israel', force: 'Israeli Space Directorate', budget: '$300M', capabilities: 'Intelligence satellites, missile defense integration', concern: 'Advanced technology. Jericho missiles could deliver ASAT payloads.' },
]

const spaceDebrisStats = [
  { category: 'Objects &gt;10cm (trackable)', count: '36,500+', details: 'US Space Surveillance Network tracks objects this size. Any one could destroy a satellite on impact.' },
  { category: 'Objects 1-10cm (lethal but untrackable)', count: '1,000,000+', details: 'Too small to track reliably, large enough to catastrophically damage satellites. Statistical threat.' },
  { category: 'Objects &lt;1cm (paint flecks, etc)', count: '130,000,000+', details: 'Can damage solar panels, crack windows. ISS windows regularly replaced due to micrometeorite damage.' },
  { category: 'ISS debris avoidance maneuvers', count: '32 since 1999', details: 'Station has thrusters to dodge large debris. Crew sometimes evacuates to escape capsules.' },
  { category: 'Satellite collisions', count: '10+ confirmed', details: 'Cebreros-2009 collision created 2,000+ new debris pieces. Rate increasing with satellite density.' },
  { category: 'Debris velocity in LEO', count: '17,500 mph average', details: 'Kinetic energy: 1cm object = exploding hand grenade. 10cm object = medium artillery shell.' },
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
          <strong className="text-white">$29 billion per year</strong>. Meanwhile, 42,000 American bridges are
          structurally deficient, 2.2 million Americans lack running water, and the national debt exceeds $34 trillion.
          But sure — we need to dominate space. China shot down one of its own satellites in 2007, creating 3,500
          pieces of debris that will orbit for decades. Russia did the same in 2021, forcing ISS astronauts to
          shelter in escape pods. We are racing to weaponize the one place that still belonged to everyone.
          The final frontier has become another battlefield — and the consequences will echo in orbit for centuries.
        </p>
      </div>

      <ShareButtons title="Space Warfare — Militarizing the Final Frontier" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '$29.4B', label: 'Space Force Budget', sub: '2024 — nearly doubled since 2019' },
          { val: '8,100+', label: 'Active Satellites', sub: 'In orbit — military, commercial, civilian' },
          { val: '36,500+', label: 'Tracked Debris Objects', sub: '&gt;10cm, each potentially destructive' },
          { val: '$150B+', label: 'Military Space Investment', sub: 'GPS, comms, spy, early warning systems' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]" dangerouslySetInnerHTML={{__html: s.val}}></p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1" dangerouslySetInnerHTML={{__html: s.sub}}></p>
          </div>
        ))}
      </div>

      {/* Space Force Budget Breakdown */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Space Force: $29.4 Billion to Dominate the Heavens
        </h2>
        <p className="text-stone-700 mb-4">
          The Space Force budget has nearly doubled since its creation in 2019. Here&apos;s where the money goes —
          at least the unclassified portion. True military space spending likely exceeds $50 billion annually
          when including intelligence agencies and classified programs.
        </p>
        <div className="space-y-4">
          {spaceBudgetBreakdown.map(item => (
            <div key={item.category} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-bold text-stone-900">{item.category}</h3>
                <span className="text-red-700 font-bold">{item.amount}</span>
              </div>
              <p className="text-stone-600 text-sm">{item.details}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <p className="text-stone-800 text-sm">
            <strong>Hidden costs:</strong> These figures don&apos;t include NASA&apos;s military-related programs,
            intelligence satellites (NRO/CIA), or research at national labs. The Pentagon&apos;s own space spending
            is spread across multiple budget lines. True military space spending is likely $50+ billion annually —
            making it one of the world&apos;s largest space programs.
          </p>
        </div>
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
        <div className="overflow-x-auto my-6">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Country</th>
                <th className="px-4 py-3 text-left">Year</th>
                <th className="px-4 py-3 text-left">Weapon System</th>
                <th className="px-4 py-3 text-left">Target</th>
                <th className="px-4 py-3 text-left">Debris Created</th>
              </tr>
            </thead>
            <tbody>
              {asatTests.map(test => (
                <tr key={`${test.country}-${test.year}`} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{test.country}</td>
                  <td className="px-4 py-3">{test.year}</td>
                  <td className="px-4 py-3 text-sm">{test.weapon}</td>
                  <td className="px-4 py-3 text-sm">{test.target}</td>
                  <td className="px-4 py-3 text-red-800 font-bold">{test.debris}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-4">
          {asatTests.map(test => (
            <div key={`${test.country}-${test.year}-details`} className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 mb-1">{test.country} ({test.year})</h3>
              <p className="text-stone-600 text-sm">{test.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Space Weapons Spectrum */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Space Weapons Spectrum: From Jamming to Nuclear EMP
        </h2>
        <p className="text-stone-700 mb-4">
          Space warfare isn&apos;t just about blowing up satellites. The spectrum of space weapons ranges from
          reversible electronic attacks to civilization-ending nuclear EMP detonations that could destroy
          every satellite in orbit.
        </p>
        <div className="space-y-4">
          {spaceWeapons.map(weapon => (
            <div key={weapon.type} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-bold text-stone-900">{weapon.type}</h3>
                <span className="text-red-700 font-bold text-sm">{weapon.cost}</span>
              </div>
              <p className="text-stone-700 text-sm mb-2">{weapon.description}</p>
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-stone-600"><strong>Examples:</strong> {weapon.examples}</p>
                  <p className="text-green-700"><strong>Pros:</strong> {weapon.pros}</p>
                </div>
                <div>
                  <p className="text-red-700"><strong>Cons:</strong> {weapon.cons}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-800 mb-2">The Escalation Ladder</h3>
          <p className="text-stone-800 text-sm">
            Space weapons create an escalation ladder from nuisance to civilization-ending. Electronic warfare
            is reversible and hard to attribute. Kinetic weapons create permanent debris. Nuclear EMP weapons
            would destroy hundreds of satellites simultaneously and violate the Outer Space Treaty. The challenge:
            in a crisis, the incentive is to escalate quickly before the other side acts first.
          </p>
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
        <div className="overflow-x-auto my-6">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Debris Category</th>
                <th className="px-4 py-3 text-left">Count</th>
                <th className="px-4 py-3 text-left">Threat Level</th>
              </tr>
            </thead>
            <tbody>
              {spaceDebrisStats.map((debris, index) => (
                <tr key={index} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium" dangerouslySetInnerHTML={{__html: debris.category}}></td>
                  <td className="px-4 py-3 text-red-800 font-bold">{debris.count}</td>
                  <td className="px-4 py-3 text-sm">{debris.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">What We&apos;d Lose</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• <strong>GPS navigation</strong> — every phone, car, plane, ship</li>
              <li>• <strong>Weather forecasting</strong> — modern prediction requires satellites</li>
              <li>• <strong>Global communications</strong> — internet, phone, financial networks</li>
              <li>• <strong>Earth observation</strong> — climate monitoring, disaster response</li>
              <li>• <strong>Precision agriculture</strong> — GPS-guided farming feeds billions</li>
              <li>• <strong>Financial systems</strong> — timing synchronization, transaction processing</li>
              <li>• <strong>Military capabilities</strong> — precision weapons, reconnaissance, communications</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">The Physics of Destruction</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• Objects in LEO travel at <strong>17,500 mph</strong></li>
              <li>• 1cm paint fleck = exploding hand grenade energy</li>
              <li>• 10cm bolt = medium artillery shell energy</li>
              <li>• Collision doubles the debris (both objects destroyed)</li>
              <li>• Debris stays in orbit for decades or centuries</li>
              <li>• Chain reaction becomes self-sustaining</li>
              <li>• Recovery time: 50-100 years minimum</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700 text-sm">
          Every ASAT test brings us closer to Kessler syndrome. The 2007 Chinese test alone increased
          trackable debris by 25%. A single space war — even a brief one — could make low Earth orbit
          unusable for generations. We&apos;re conducting an experiment with civilization&apos;s space
          infrastructure that has only one outcome if it goes wrong: centuries of darkness.
        </p>
      </div>

      {/* GPS Dependency */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          GPS: The Military&apos;s Greatest Vulnerability
        </h2>
        <p className="text-stone-700 mb-6">
          The Global Positioning System consists of 31 satellites operated by the Space Force. The US military
          has become utterly dependent on GPS for navigation, timing, and precision weapons. Losing GPS would
          cripple American military capability more than losing an entire carrier battle group.
        </p>
        <div className="space-y-4">
          {gpsDependent.map(item => (
            <div key={item.system} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-1">
                <h3 className="font-bold text-stone-900">{item.system}</h3>
                <span className="text-red-700 font-bold text-sm">{item.cost}</span>
              </div>
              <p className="text-stone-700 text-sm mb-2">{item.dependence}</p>
              <p className="text-red-700 text-sm"><strong>Risk:</strong> {item.risk}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-50 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-900 mb-2">The GPS Paradox</h3>
          <p className="text-stone-700 text-sm mb-3">
            GPS made the US military the most precise fighting force in history. But that precision came at
            the cost of vulnerability. Consider the paradox:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• <strong>Pre-GPS (1980s):</strong> US military trained for operations without satellite navigation. Backup systems everywhere.</li>
            <li>• <strong>Post-GPS (2000s):</strong> Entire military doctrine assumes GPS availability. Backup systems atrophied.</li>
            <li>• <strong>Today:</strong> GPS jamming affects operations from Syria to Ukraine. But military can&apos;t un-learn GPS dependency.</li>
            <li>• <strong>Result:</strong> The system that made America militarily dominant also created its greatest single point of failure.</li>
          </ul>
          <p className="text-stone-700 text-sm mt-3">
            Russia has demonstrated effective GPS jamming in Syria and Ukraine. China is developing GPS-denial
            capabilities. Iran has successfully spoofed GPS signals. The military&apos;s greatest force
            multiplier has become its Achilles heel.
          </p>
        </div>
      </div>

      {/* Military-Industrial Space Complex */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Military-Industrial Space Complex
        </h2>
        <p className="text-stone-700 mb-4">
          Six companies dominate military space contracts, combining for $100+ billion in government business
          since 2000. The same defense contractors that built nuclear weapons and fighter jets now control
          access to space — with predictably inflated costs and schedule delays.
        </p>
        <div className="space-y-4">
          {militarySpaceContractors.map(company => (
            <div key={company.company} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-bold text-stone-900">{company.company}</h3>
                <span className="text-red-700 font-bold">{company.contracts}</span>
              </div>
              <p className="text-stone-700 text-sm mb-1"><strong>Services:</strong> {company.services}</p>
              <p className="text-stone-600 text-sm">{company.notable}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-50 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-900 mb-2">The SpaceX Disruption</h3>
          <p className="text-stone-700 text-sm mb-3">
            SpaceX broke the cozy oligopoly of cost-plus space contracts. Compare launch prices:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• <strong>ULA Atlas V:</strong> $153M per launch (government price)</li>
            <li>• <strong>ULA Delta IV Heavy:</strong> $1.4B for three launches ($460M each)</li>
            <li>• <strong>SpaceX Falcon 9:</strong> $67M government price, $60M commercial</li>
            <li>• <strong>SpaceX Falcon Heavy:</strong> $150M government price (3× payload of Atlas V)</li>
          </ul>
          <p className="text-stone-700 text-sm mt-3">
            But SpaceX&apos;s disruption came with strings attached. Elon Musk now controls critical military
            infrastructure (Starlink) and makes unilateral decisions about war and peace. The Pentagon traded
            one dependency for another.
          </p>
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
          {starlinkUkraine.map((item, index) => (
            <div key={index} className="bg-stone-50 rounded-lg p-4">
              <div className="flex gap-4 items-start">
                <span className="text-red-700 font-bold text-sm whitespace-nowrap min-w-[100px]">{item.date}</span>
                <div>
                  <p className="text-stone-700 text-sm font-medium">{item.event}</p>
                  {item.details && <p className="text-stone-600 text-xs mt-1">{item.details}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-800 mb-2">The Dangerous Precedent</h3>
          <p className="text-stone-800 text-sm mb-3">
            Elon Musk — unelected, unaccountable, driven by personal judgment — made decisions that directly
            affected military operations in an active war. Consider the implications:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• Private citizen controlled critical military communications</li>
            <li>• Refused Ukrainian operations he personally disagreed with</li>
            <li>• Made nuclear risk assessments normally requiring NSC approval</li>
            <li>• Proposed peace terms on social media during active conflict</li>
            <li>• Pentagon ultimately paid for what it initially got for free</li>
          </ul>
          <p className="text-stone-800 text-sm mt-3">
            The precedent is terrifying: as space becomes militarized and commercialized, private companies
            will control the infrastructure that armies depend on. Democracy requires civilian control of the
            military — not billionaire control of warfare.
          </p>
        </div>
      </div>

      {/* International Space Competition */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Global Space Arms Race
        </h2>
        <p className="text-stone-700 mb-4">
          Every major power is now building military space capabilities. The US response to potential threats
          has been to accelerate the arms race rather than seek agreements to prevent it. Space warfare
          capabilities are spreading faster than nuclear weapons did in the 1960s.
        </p>
        <div className="space-y-4">
          {internationalSpaceForces.map(country => (
            <div key={country.country} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-bold text-stone-900">{country.country}</h3>
                <span className="text-red-700 font-bold text-sm">{country.budget}</span>
              </div>
              <p className="text-stone-700 text-sm mb-1"><strong>Organization:</strong> {country.force}</p>
              <p className="text-stone-700 text-sm mb-2"><strong>Capabilities:</strong> {country.capabilities}</p>
              <p className="text-red-700 text-sm"><strong>US Concern:</strong> {country.concern}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-50 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-900 mb-2">The China Challenge</h3>
          <p className="text-stone-700 text-sm">
            China represents the most serious challenge to US space dominance. With a $12+ billion annual
            space budget, proven ASAT capabilities, and ambitious plans for a 13,000-satellite constellation,
            China is building comprehensive space warfare capabilities. The Pentagon&apos;s response has been
            to accelerate military space spending and plan for "space superiority" operations — essentially
            guaranteeing a space arms race with the world&apos;s second-largest economy.
          </p>
        </div>
      </div>

      {/* X-37B */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          X-37B: The Secret Space Weapon
        </h2>
        <p className="text-stone-700 mb-4">
          The Boeing X-37B is an unmanned spaceplane that has completed six classified missions since 2010.
          It looks like a miniature Space Shuttle and can stay in orbit for years. The Pentagon won&apos;t
          say what it does — which is itself revealing.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Known Facts</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• <strong>Missions completed:</strong> 6 (OTV-1 through OTV-6)</li>
              <li>• <strong>Record duration:</strong> OTV-5 flew 908 days (2.5 years)</li>
              <li>• <strong>Altitude:</strong> Classified, but can maneuver between orbits</li>
              <li>• <strong>Payload bay:</strong> 7 ft × 4 ft — large enough for weapons</li>
              <li>• <strong>Cost:</strong> Classified, estimated $1-2B per mission</li>
              <li>• <strong>Fleet size:</strong> Two operational vehicles</li>
            </ul>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Suspected Capabilities</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• <strong>Satellite inspection:</strong> Approaching and photographing adversary satellites</li>
              <li>• <strong>Sensor testing:</strong> Deploying classified surveillance payloads</li>
              <li>• <strong>Weapons delivery:</strong> Payload bay could carry ASAT weapons</li>
              <li>• <strong>Orbital warfare:</strong> Maneuvering makes tracking difficult</li>
              <li>• <strong>Space control:</strong> Denying adversary access to specific orbits</li>
              <li>• <strong>Nuclear detection:</strong> Monitoring adversary nuclear activities</li>
            </ul>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-stone-800 mb-2">The Secrecy Problem</h3>
          <p className="text-stone-800 text-sm">
            The extreme secrecy surrounding the X-37B undermines space stability. Other nations don&apos;t
            know what it&apos;s doing, so they assume the worst. China has developed its own space plane
            (Shenlong) in response. The secrecy that&apos;s supposed to provide security actually accelerates
            the arms race by forcing adversaries to prepare for unknown capabilities.
          </p>
        </div>
      </div>

      {/* Outer Space Treaty */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Outer Space Treaty: A Paper Shield Against Nuclear War
        </h2>
        <p className="text-stone-700 mb-4">
          The 1967 Outer Space Treaty, signed by 111 nations including the US, Russia, and China, was supposed
          to keep space peaceful. But it was written for a bipolar Cold War world. Today&apos;s multipolar
          space environment has exposed the treaty&apos;s fatal flaws.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h3 className="font-bold text-green-900 mb-2">What It Prohibits</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• Nuclear weapons or WMDs in orbit</li>
              <li>• Nuclear weapons on Moon or celestial bodies</li>
              <li>• Military bases on Moon or celestial bodies</li>
              <li>• National sovereignty claims over celestial bodies</li>
              <li>• Military maneuvers on Moon or celestial bodies</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h3 className="font-bold text-red-900 mb-2">What It Allows</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• Conventional weapons in space</li>
              <li>• Anti-satellite weapons (ground or space-based)</li>
              <li>• Military satellites for reconnaissance, communication</li>
              <li>• Kinetic bombardment from orbit</li>
              <li>• Directed-energy weapons (lasers) in space</li>
              <li>• Cyber attacks on space assets</li>
            </ul>
          </div>
        </div>
        <div className="bg-stone-50 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-900 mb-2">Why the Treaty Is Failing</h3>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• <strong>No enforcement mechanism:</strong> No international space police or penalties for violations</li>
            <li>• <strong>No verification regime:</strong> No inspections, monitoring, or data sharing requirements</li>
            <li>• <strong>Dual-use loophole:</strong> Military satellites can masquerade as civilian ones</li>
            <li>• <strong>Self-defense exception:</strong> Any attack can be justified as defensive</li>
            <li>• <strong>Outdated scope:</strong> Written when only two countries could reach orbit</li>
            <li>• <strong>Commercial space gap:</strong> Private companies not directly bound by treaty</li>
          </ul>
        </div>
      </div>

      {/* Cost comparison */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          $29 Billion in Space vs. What America Actually Needs
        </h2>
        <p className="text-stone-700 mb-4">
          The Space Force budget alone — not counting classified programs, Space Command, or military satellite
          programs in other branches — exceeds $29 billion per year. Here&apos;s what that money could fund instead:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { item: 'End veteran homelessness', cost: '$2.5B/year', ratio: 'Could fund 11× over', detail: '37,000 homeless veterans could be housed permanently' },
            { item: 'Clean water for all Americans', cost: '$4.5B/year (EPA estimate)', ratio: 'Could fund 6× over', detail: '2.2M Americans lack running water, 44M drink unsafe water' },
            { item: 'Repair all structurally deficient bridges', cost: '$26B total', ratio: '1 year = all bridges fixed', detail: '42,000 bridges are structurally deficient nationwide' },
            { item: 'Free community college for all', cost: '$9.5B/year', ratio: 'Could fund 3× over', detail: '6M students could attend community college free' },
            { item: 'Double NASA\'s science budget', cost: '$8B increase needed', ratio: 'Could fund 3× over', detail: 'Mars missions, climate research, asteroid defense' },
            { item: 'End childhood hunger in America', cost: '$3.5B/year (USDA)', ratio: 'Could fund 8× over', detail: '13M children face food insecurity' },
            { item: 'Fix Flint-style water crises nationwide', cost: '$8B total', ratio: 'Could fund 3× over', detail: '9-12M lead service lines need replacement' },
            { item: 'Rural broadband for all', cost: '$20B total', ratio: 'Could fund with $9B leftover', detail: '21M Americans lack broadband access' },
          ].map(item => (
            <div key={item.item} className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 text-sm mb-1">{item.item}</h3>
              <p className="text-red-700 font-bold text-sm">{item.cost}</p>
              <p className="text-green-700 text-xs font-semibold">{item.ratio}</p>
              <p className="text-stone-500 text-xs mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-50 rounded-lg p-4 mt-4">
          <p className="text-stone-700 text-sm">
            <strong>The opportunity cost:</strong> Every dollar spent on space warfare is a dollar not spent
            on the infrastructure, education, healthcare, and research that actually make America stronger.
            While we build weapons to dominate an empty vacuum, our bridges crumble, our water systems fail,
            and our children go hungry. This is the madness of military Keynesianism.
          </p>
        </div>
      </div>

      {/* Libertarian Analysis */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-900">
          The Libertarian Case: Don&apos;t Militarize the Commons
        </h2>
        <div className="space-y-4 text-stone-700">
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Space Is the Ultimate Global Commons</h3>
            <p className="text-sm">
              The Outer Space Treaty declared space the "province of all mankind." It&apos;s a commons —
              like the oceans or the electromagnetic spectrum — that belongs to everyone. When the US creates
              a Space Force, China builds ASAT weapons, and Russia tests satellite killers, they&apos;re
              enclosing the commons for national advantage. The tragedy of the commons applies in reverse:
              when everyone militarizes space, everyone becomes less secure.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">The Threat Is Largely Self-Created</h3>
            <p className="text-sm">
              Yes, China and Russia are developing space weapons. But who militarized space first? The US
              has operated military satellites since 1960. GPS was a military system from the start. The
              Pentagon has flown classified X-37B missions for over a decade. Every other nation&apos;s space
              weapon program is a response to decades of American space militarization. The "space gap" is
              manufactured hysteria designed to justify more spending.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Infrastructure Crumbles While We Weaponize Orbit</h3>
            <p className="text-sm">
              America&apos;s infrastructure gets a C- grade from civil engineers. 42,000 bridges are structurally
              deficient. 2.2 million Americans lack running water. The electrical grid fails during every
              major storm. But we can afford $29 billion to dominate space? This is the libertarian objection
              to military spending in its purest form: the government robs productive citizens to spend on
              hypothetical future threats while the infrastructure we use every day falls apart.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Crony Capitalism in the Heavens</h3>
            <p className="text-sm">
              The space-industrial complex combines the worst of both worlds: government funding with private
              profit. SpaceX disrupted launch costs but now controls military communications infrastructure.
              Boeing gets cost-plus contracts for the X-37B. Lockheed Martin builds GPS satellites for $500
              million each. These companies privatize profits and socialize costs — taking taxpayer money to
              build capabilities they then rent back to the government.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">The Democratic Deficit in Space Policy</h3>
            <p className="text-sm">
              Space Force was created by executive decree with minimal Congressional debate. The Pentagon&apos;s
              space doctrine is classified. Citizens have no idea what weapons their tax dollars are funding
              or against what threats. The Starlink-Ukraine episode showed how a single billionaire can make
              war-and-peace decisions without democratic accountability. Space warfare policy is made in
              secret by unelected officials and private contractors.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Market Solutions Over Military Ones</h3>
            <p className="text-sm">
              The market has made space cheaper and more accessible than government programs ever did. SpaceX
              cut launch costs by 90%. Private satellite companies provide better communications than military
              systems. Commercial space ventures create wealth; military space spending destroys it. The
              solution to space security isn&apos;t more weapons — it&apos;s more commerce, cooperation, and
              peaceful competition.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">The Long-Term Cost of Short-Term Thinking</h3>
            <p className="text-sm">
              Space warfare could make entire orbital bands unusable for centuries through Kessler syndrome.
              The economic value of space — GPS, communications, weather forecasting, Earth observation —
              exceeds $400 billion annually. Military space spending risks destroying far more value than it
              protects. It&apos;s like burning down your house to prevent a robbery. The libertarian approach:
              defend what matters through private property rights, liability rules, and peaceful conflict
              resolution — not through an arms race that could end space civilization.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-stone-300 mb-4">
          Space warfare isn&apos;t science fiction — it&apos;s happening now. The US has a $29 billion Space
          Force and classified space weapons programs worth billions more. Four nations have demonstrated
          satellite-killing weapons. Every ASAT test creates debris clouds that threaten the satellites
          modern civilization depends on.
        </p>
        <p className="text-stone-300 mb-4">
          The Global Positioning System — originally a military project — now provides navigation for billions
          of people, timing for financial systems, and guidance for precision agriculture that feeds the world.
          A space war that destroyed GPS would be an economic catastrophe exceeding most terrestrial conflicts.
          Yet the military&apos;s response to potential GPS threats is to accelerate the space arms race rather
          than seek agreements to prevent it.
        </p>
        <p className="text-stone-300 mb-4">
          The Kessler syndrome — a cascading chain reaction of collisions — is no longer theoretical. We&apos;re
          adding debris faster than it naturally de-orbits. The 2007 Chinese ASAT test created 3,500 trackable
          debris pieces that will threaten spacecraft for decades. A brief space conflict could make low Earth
          orbit unusable for generations, ending the space age before it truly began.
        </p>
        <p className="text-stone-300">
          The Outer Space Treaty declared space the "province of all mankind." Instead, we&apos;re racing to
          weaponize it. Every major power is building ASAT weapons, cyber attack capabilities, and orbital
          warfare platforms. The commons that belongs to all of humanity is being enclosed by the same
          military-industrial interests that gave us 70,000 nuclear warheads. Eisenhower warned about the
          military-industrial complex in 1961. Now it&apos;s reaching for the stars.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Sources &amp; Further Reading</h2>
        <div className="grid md:grid-cols-2 gap-4 text-stone-600 text-sm">
          <div>
            <h3 className="font-bold text-stone-800 mb-2">Government Sources</h3>
            <ul className="space-y-1">
              <li>• US Space Force FY2024 Budget Request and Justification</li>
              <li>• Congressional Research Service, "Space Force: Issues for Congress" (2024)</li>
              <li>• GAO, "Space Force: Actions Needed to Improve Acquisition Oversight" (2024)</li>
              <li>• DoD Space Strategy (2020)</li>
              <li>• National Space Policy (2020)</li>
              <li>• NASA Orbital Debris Program Office, Quarterly Reports</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-stone-800 mb-2">Research Organizations</h3>
            <ul className="space-y-1">
              <li>• Secure World Foundation, "Global Counterspace Capabilities Report" (2024)</li>
              <li>• Union of Concerned Scientists, "UCS Satellite Database" (2024)</li>
              <li>• CSIS Aerospace Security Project, "Space Threat Assessment" (2024)</li>
              <li>• Center for Strategic and International Studies space reports</li>
              <li>• European Space Agency, "Space Debris by the Numbers" (2024)</li>
              <li>• Aerospace Corporation technical reports</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-stone-800 mb-2">Academic &amp; Technical</h3>
            <ul className="space-y-1">
              <li>• Kessler &amp; Cour-Palais, "Collision Frequency of Artificial Satellites" (1978)</li>
              <li>• Journal of Space Policy, space warfare articles</li>
              <li>• MIT Technology Review space security coverage</li>
              <li>• SpaceNews industry reporting</li>
              <li>• Aviation Week &amp; Space Technology military space coverage</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-stone-800 mb-2">Books &amp; Investigative</h3>
            <ul className="space-y-1">
              <li>• Walter Isaacson, "Elon Musk" — Starlink/Ukraine chapters (2023)</li>
              <li>• Joan Johnson-Freese, "Space Warfare in the 21st Century" (2017)</li>
              <li>• Brian Harvey, "The New Space Race" (2024)</li>
              <li>• Defense News space warfare reporting</li>
              <li>• Breaking Defense space security coverage</li>
            </ul>
          </div>
        </div>
      </div>

      <RelatedArticles 
        articles={[
          {
            slug: 'economic-warfare',
            title: 'Economic Warfare',
            desc: 'Sanctions, SWIFT, and the weaponized dollar in the new Cold War'
          },
          {
            slug: 'china-pivot',
            title: 'The China Pivot',
            desc: 'Pacific militarization, AUKUS, Taiwan risk, and Cold War 2.0 costs'
          },
          {
            slug: 'war-profiteering',
            title: 'War Profiteering',
            desc: 'Defense contractor profits and stock prices during major conflicts'
          }
        ]}
      />

      <div className="text-center text-stone-500 text-sm mt-8 mb-4">
        <p>
          <Link href="/analysis/environmental-cost" className="text-red-600 hover:underline">← Environmental Cost</Link>
          {' · '}
          <Link href="/analysis" className="text-red-600 hover:underline">All Analysis</Link>
          {' · '}
          <Link href="/analysis/allies-and-enemies" className="text-red-600 hover:underline">Allies &amp; Enemies →</Link>
        </p>
      </div>

      <BackToTop />
    </div>
  )
}