import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Nuclear Weapons — $10+ Trillion and Counting | WarCosts',
  description: 'The full cost of America\'s nuclear arsenal: from the $30B Manhattan Project to the $2 trillion modernization program. 5,500 warheads, close calls, testing legacy, and the trillions spent on weapons that can never be used.',
  keywords: ['nuclear weapons cost', 'nuclear arsenal', 'nuclear modernization', 'Manhattan Project cost', 'nuclear triad', 'nuclear close calls', 'nuclear testing', 'Columbia class submarine', 'B-21 Raider', 'Sentinel ICBM'],
  openGraph: {
    title: 'Nuclear Weapons — $10+ Trillion and Counting',
    description: 'America has spent more on nuclear weapons than on education, infrastructure, and healthcare research combined.',
    url: 'https://warcosts.org/nuclear',
    type: 'article',
  },
}

const modernizationPrograms = [
  {
    name: 'Columbia-Class Submarines (SSBN)',
    replaces: 'Ohio-class SSBNs',
    quantity: '12 submarines',
    costEstimate: '$128 billion (program total)',
    perUnit: '~$10.7 billion each',
    status: 'First boat under construction, delivery expected 2027–2028',
    detail: 'Each Columbia-class sub carries 16 Trident II D5 missiles with multiple independently targetable reentry vehicles (MIRVs). A single submarine can destroy an entire nation. The program has experienced cost overruns and schedule delays — the Navy\'s own assessment calls the timeline "aggressive."',
  },
  {
    name: 'B-21 Raider (Stealth Bomber)',
    replaces: 'B-2 Spirit, partially B-52',
    quantity: 'At least 100 planned',
    costEstimate: '$80–$100+ billion (program)',
    perUnit: '~$750 million each (likely to grow)',
    status: 'First flight December 2023, testing ongoing',
    detail: 'Built by Northrop Grumman under heavy secrecy, the B-21 is the Air Force\'s new nuclear-capable stealth bomber. The per-unit cost is already classified at ~$750M in 2022 dollars, but historical precedent (B-2 Spirit went from $500M to $2.1B per plane) suggests massive growth.',
  },
  {
    name: 'Sentinel ICBM (LGM-35A)',
    replaces: 'Minuteman III ICBMs',
    quantity: '400+ missiles in 450 silos',
    costEstimate: '$131 billion+ (was $96B in 2020)',
    perUnit: '~$327 million per missile',
    status: 'Triggered Nunn-McCurdy breach (37% cost overrun). Program restructured 2024.',
    detail: 'The Sentinel program to replace 1970s-era Minuteman III missiles has become the Pentagon\'s most dramatic cost overrun. Originally estimated at $96 billion, it breached the Nunn-McCurdy threshold in 2024 with costs surging to $131 billion — and still climbing. The Air Force certified it as essential anyway. Some analysts project final costs above $160 billion.',
  },
  {
    name: 'W93 Warhead',
    replaces: 'W76 submarine warhead',
    quantity: 'Classified',
    costEstimate: '$14–$16 billion (NNSA estimate)',
    perUnit: 'Classified',
    status: 'Design phase, first production unit expected ~2034',
    detail: 'The first entirely new warhead design since the Cold War. The W93 is intended for the Navy\'s Trident II missiles aboard Columbia-class submarines. The UK is co-developing a variant. Critics note the existing W76-1 life-extended warhead is functional and reliable.',
  },
  {
    name: 'W87-1 Warhead (for Sentinel)',
    replaces: 'W78 ICBM warhead',
    quantity: 'Classified',
    costEstimate: '$15+ billion',
    perUnit: 'Classified',
    status: 'Development phase at NNSA',
    detail: 'The warhead for the new Sentinel ICBM. Being developed alongside the missile itself, compounding schedule risks. Uses insensitive high explosives for improved safety.',
  },
  {
    name: 'Long-Range Standoff Weapon (LRSO)',
    replaces: 'AGM-86B Air-Launched Cruise Missile',
    quantity: '1,000+ planned',
    costEstimate: '$10–$15 billion',
    perUnit: '~$12 million each',
    status: 'Engineering & manufacturing development',
    detail: 'A new nuclear-armed cruise missile for B-52 and B-21 bombers. The LRSO would allow bombers to launch nuclear weapons from standoff distances. Critics argue this is a destabilizing first-strike weapon.',
  },
  {
    name: 'Nuclear Command, Control & Communications (NC3)',
    replaces: 'Cold War-era systems',
    quantity: 'System-wide modernization',
    costEstimate: '$77+ billion over 10 years',
    perUnit: 'N/A',
    status: 'Ongoing — partial upgrades deployed',
    detail: 'The president\'s ability to order a nuclear launch relies on systems designed in the 1960s–1980s. Some components still use 8-inch floppy disks. Modernization includes satellite communications, early warning radars, and the "nuclear football."',
  },
]

const closeCalls = [
  {
    year: 1962,
    event: 'Cuban Missile Crisis',
    detail: 'Soviet missiles in Cuba brought the world to the brink. What the public didn\'t know: a Soviet submarine commander, Vasili Arkhipov, single-handedly prevented a nuclear torpedo launch when his submarine was depth-charged by the US Navy. He was the only one of three senior officers who refused to authorize the launch. One man stopped nuclear war.',
    minutesToMidnight: '~1 minute (closest ever)',
  },
  {
    year: 1979,
    event: 'NORAD Computer Error',
    detail: 'NORAD\'s early warning system displayed a massive Soviet first strike — 2,200 incoming missiles. Fighter jets scrambled, nuclear bombers taxied for takeoff. It was a training tape accidentally loaded into the live system. The error lasted 6 minutes before being identified.',
    minutesToMidnight: '~6 minutes',
  },
  {
    year: 1980,
    event: 'Faulty Computer Chip',
    detail: 'A failed 46-cent computer chip in a NORAD early warning system showed random numbers of Soviet missile launches. National Security Advisor Zbigniew Brzezinski was woken at 3 AM and told the US was under attack. He was about to call President Carter when the error was caught.',
    minutesToMidnight: '~3 minutes',
  },
  {
    year: 1983,
    event: 'Stanislav Petrov Incident',
    detail: 'Soviet satellite early-warning system reported five US Minuteman ICBM launches. Lt. Colonel Stanislav Petrov, the duty officer, judged it a false alarm and did not report it up the chain of command. He was correct — the satellites had misidentified sunlight reflecting off high-altitude clouds. Had he followed protocol, Soviet doctrine called for immediate retaliatory launch.',
    minutesToMidnight: '~5 minutes',
  },
  {
    year: 1983,
    event: 'Able Archer 83',
    detail: 'A NATO nuclear war exercise was so realistic that Soviet leadership believed it was cover for an actual first strike. The KGB put its forces on high alert. Soviet nuclear-armed aircraft in East Germany were loaded and placed on runway alert. Western intelligence didn\'t learn how close it came until a KGB defector revealed the details years later.',
    minutesToMidnight: 'Unknown — potentially minutes',
  },
  {
    year: 1995,
    event: 'Norwegian Rocket Incident',
    detail: 'A Norwegian scientific rocket launched to study the Northern Lights was detected by Russian early warning radar and misidentified as a US Trident submarine-launched ballistic missile. President Yeltsin\'s nuclear briefcase was activated for the first time in history. Russian nuclear forces went to high alert. The rocket\'s trajectory was eventually recognized as non-threatening with minutes to spare.',
    minutesToMidnight: '~8 minutes',
  },
  {
    year: 2018,
    event: 'Hawaii False Missile Alert',
    detail: 'Hawaiian residents received an official emergency alert on their phones: "BALLISTIC MISSILE THREAT INBOUND TO HAWAII. SEEK IMMEDIATE SHELTER. THIS IS NOT A DRILL." It took 38 minutes to send a correction. An employee had clicked the wrong option in a dropdown menu. Panic was widespread; people put children in storm drains.',
    minutesToMidnight: '38 minutes of terror (false alarm)',
  },
]

const testingSites = [
  {
    site: 'Marshall Islands (Pacific Proving Grounds)',
    tests: 67,
    years: '1946–1958',
    detail: 'The US detonated 67 nuclear weapons in the Marshall Islands, including Castle Bravo (1954) — the largest US nuclear test at 15 megatons, 1,000× Hiroshima. The Bikini and Enewetak atolls were rendered uninhabitable. Marshallese people were exposed to catastrophic fallout, suffering cancers, birth defects, and forced relocations. The Runit Dome on Enewetak, a concrete cap over radioactive waste, is now cracking and leaking into the Pacific.',
    legacy: 'Ongoing contamination. Compensation claims largely denied. Some islands still uninhabitable 70+ years later.',
  },
  {
    site: 'Nevada Test Site',
    tests: 928,
    years: '1951–1992',
    detail: 'The Nevada Test Site (now the Nevada National Security Site) hosted 928 nuclear tests — 100 atmospheric and 828 underground. Downwinder communities in Utah, Nevada, and Arizona were exposed to radioactive fallout, particularly from atmospheric tests in the 1950s. The federal government knew about the risks and failed to warn or evacuate residents.',
    legacy: 'The Radiation Exposure Compensation Act (RECA) has paid ~$2.6 billion to downwinders, but many claims were denied. Cancer clusters persist in downwind communities.',
  },
  {
    site: 'Amchitka Island, Alaska',
    tests: 3,
    years: '1965–1971',
    detail: 'Three underground nuclear tests on this Aleutian Island, including Cannikin (1971) — the largest underground nuclear test in US history at 5 megatons. The tests triggered earthquakes, created a mile-wide lake, and contaminated groundwater. The environmental outcry helped inspire the founding of Greenpeace.',
    legacy: 'Radioactive contamination of groundwater. The DOE monitors the site but has no cleanup plan.',
  },
  {
    site: 'Various atmospheric tests (global)',
    tests: 210,
    years: '1945–1963',
    detail: 'Before the Partial Test Ban Treaty (1963), the US conducted 210 atmospheric nuclear tests — in the Pacific, Nevada, the Atlantic, and over the open ocean. These tests injected massive amounts of radioactive fallout into the global atmosphere, exposing the entire world population to increased radiation.',
    legacy: 'Global increase in background radiation. Strontium-90 found in baby teeth worldwide in the 1950s–60s. The "Baby Tooth Survey" helped drive the test ban treaty.',
  },
]

const totalCostBreakdown = [
  { category: 'Manhattan Project (1942–1946)', cost: '$30 billion', note: '$2B in 1945 dollars. Employed 125,000 people across 30 sites. The most expensive weapons program in history at the time.' },
  { category: 'Nuclear weapons production (1947–1989)', cost: '$750 billion+', note: 'Building the arsenal from ~0 to a peak of 31,255 warheads in 1967. Thousands of warhead designs, massive production complexes.' },
  { category: 'Delivery systems (bombers, missiles, subs)', cost: '$1.5 trillion+', note: 'B-52, B-1, B-2 bombers; Minuteman, Peacekeeper ICBMs; Polaris, Poseidon, Trident SLBMs; Atlas, Titan missiles.' },
  { category: 'Nuclear testing (1,054 tests)', cost: '$100+ billion', note: 'Atmospheric and underground tests, plus cleanup and monitoring costs that continue today.' },
  { category: 'Command & control / early warning', cost: '$750+ billion', note: 'NORAD, satellite systems, BMEWS, PAVE PAWS, Looking Glass airborne command, nuclear submarines on patrol 24/7.' },
  { category: 'Environmental remediation', cost: '$450+ billion', note: 'Hanford, Rocky Flats, Savannah River, Oak Ridge, Nevada Test Site. Cleanup at many sites will take decades more.' },
  { category: 'Dismantlement & arms control', cost: '$50+ billion', note: 'Reducing the arsenal from 31,255 to ~5,500. START treaty verification, warhead dismantlement, HEU downblending.' },
  { category: 'Health costs (workers, downwinders, veterans)', cost: '$200+ billion', note: 'Compensation programs, healthcare for nuclear workers and downwinder communities, veteran exposure claims.' },
  { category: 'Nuclear modernization (2020–2050)', cost: '$1.5–2 trillion (projected)', note: 'The current 30-year modernization program. Columbia subs, B-21 bombers, Sentinel ICBMs, new warheads, NC3.' },
  { category: 'TOTAL ESTIMATED COST', cost: '$5.5–10+ trillion', note: 'The wide range reflects disagreement over indirect costs, opportunity costs, and how to account for inflation. The Brookings Institution estimated $5.5 trillion through 1996; adding subsequent decades and modernization brings the total well above $10 trillion.' },
]

const currentArsenal = [
  { leg: 'Land-Based ICBMs', system: 'LGM-30G Minuteman III', quantity: '400 deployed (450 silos)', warheads: '400 W78/W87 warheads', location: 'Montana, Wyoming, North Dakota, Colorado, Nebraska', note: 'Missiles on 24/7 alert since 1970. The president has ~10 minutes to decide to launch after warning of incoming attack.' },
  { leg: 'Submarine-Launched (SLBMs)', system: 'UGM-133 Trident II D5', quantity: '14 Ohio-class SSBNs (to be replaced by 12 Columbia-class)', warheads: '~960 deployed warheads', location: 'Kings Bay, GA and Bangor, WA. 4–5 subs on patrol at all times.', note: 'The most survivable leg of the triad. Each Ohio-class sub carries 20 Trident missiles with multiple warheads. A single sub can hit 80+ targets.' },
  { leg: 'Strategic Bombers', system: 'B-52H Stratofortress, B-2A Spirit (soon B-21 Raider)', quantity: '46 nuclear-capable B-52H, 20 B-2A', warheads: 'B61 gravity bombs, ALCMs, LRSO (future)', location: 'Minot AFB (ND), Whiteman AFB (MO), Barksdale AFB (LA)', note: 'The B-52 has been in service since 1955. It is expected to serve until the 2050s — nearly 100 years. The B-21 Raider will begin replacing the B-2 in the late 2020s.' },
]

export default function NuclearPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Nuclear Weapons — $10+ Trillion and Counting',
    description: 'The full cost of America\'s nuclear arsenal from the Manhattan Project to today\'s $2 trillion modernization.',
    url: 'https://warcosts.org/nuclear',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-03-01',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Nuclear Weapons' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">Nuclear Weapons</h1>
      <p className="text-red-800 font-bold text-xl mb-4">$10+ trillion on weapons that can never be used.</p>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        The United States has spent more money on nuclear weapons than on any other single endeavor in human history.
        From the Manhattan Project to today&rsquo;s $2 trillion modernization program, America has built, tested,
        deployed, and maintained an arsenal capable of ending civilization multiple times over — and the bill
        keeps growing.
      </p>
      <ShareButtons title="Nuclear Weapons — $10+ Trillion and Counting" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { value: '5,500', label: 'Current US warheads' },
          { value: '$10T+', label: 'Total cost since 1942' },
          { value: '1,054', label: 'Nuclear tests conducted' },
          { value: '$2T', label: '30-year modernization cost' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
            <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-600 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: '31,255', label: 'Peak warheads (1967)' },
          { value: '7', label: 'Known close calls' },
          { value: '$50B+', label: 'Annual nuclear spending' },
          { value: '~10 min', label: 'Presidential launch decision time' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-4 shadow-sm border text-center">
            <p className="text-2xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Libertarian framing */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-10">
        <p className="text-lg italic leading-relaxed">
          &ldquo;The nuclear arsenal is the ultimate expression of government power unchecked by any rational cost-benefit analysis.
          We have spent more than $10 trillion on weapons whose only purpose is to never be used — and yet we are told
          we cannot afford schools, roads, or healthcare. The nuclear state operates in permanent secrecy, beyond democratic
          accountability, with the power to end civilization on a single person&rsquo;s order. No libertarian, no lover of
          limited government, no believer in individual rights can look at this apparatus and call it anything but
          the most dangerous concentration of state power in human history.&rdquo;
        </p>
      </div>

      <div className="prose max-w-3xl text-stone-600">
        {/* Manhattan Project */}
        <h2 className="font-[family-name:var(--font-heading)]">The Manhattan Project: Where It Began</h2>
        <p>
          In 1942, the United States launched the most expensive weapons program in history. The Manhattan Project
          employed <strong>125,000 people</strong> across 30 secret sites, cost <strong>$2 billion in 1945 dollars</strong> (~$30 billion today),
          and produced the two atomic bombs dropped on Hiroshima and Nagasaki in August 1945.
        </p>
        <p>
          The project was conducted in total secrecy. Congress appropriated the funds without knowing what they were for.
          Vice President Truman didn&rsquo;t learn about the bomb until he became president. The workers at Oak Ridge, Tennessee,
          didn&rsquo;t know they were enriching uranium. This pattern — nuclear weapons decisions made in secrecy, outside
          democratic oversight — has continued for 80 years.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            At its peak, the Manhattan Project consumed <strong>1/7th of all US electricity production</strong> just
            for uranium enrichment at Oak Ridge. The project&rsquo;s budget was hidden inside the War Department&rsquo;s accounts.
            When Senator Harry Truman (before becoming VP) tried to investigate the mysterious spending, Secretary of War
            Stimson personally asked him to stop. He did.
          </p>
        </div>

        <h3 className="font-[family-name:var(--font-heading)]">The Bombings of Hiroshima and Nagasaki</h3>
        <p>
          On August 6, 1945, the B-29 <em>Enola Gay</em> dropped &ldquo;Little Boy&rdquo; on Hiroshima, killing an estimated
          <strong>80,000 people instantly</strong> and up to 140,000 by year&rsquo;s end. Three days later, &ldquo;Fat Man&rdquo; was dropped
          on Nagasaki, killing 40,000 instantly and up to 80,000 total. The vast majority of victims were civilians.
        </p>
        <p>
          The necessity of the bombings remains one of history&rsquo;s most contested questions. Many senior military leaders
          at the time — including Eisenhower, MacArthur, Leahy, and Arnold — stated or implied the bombs were unnecessary
          for Japan&rsquo;s surrender. Declassified documents suggest Japan was seeking surrender terms before the bombings,
          and that the Soviet declaration of war on August 8 may have been the decisive factor.
        </p>

        {/* Arsenal growth */}
        <h2 className="font-[family-name:var(--font-heading)]">The Arms Race: Building Armageddon</h2>
        <p>
          After the Soviet Union tested its first atomic bomb in 1949, the nuclear arms race began in earnest.
          The US arsenal grew at a staggering pace:
        </p>
        <ul>
          <li><strong>1945:</strong> 2 weapons (the only two ever used in war)</li>
          <li><strong>1950:</strong> 299 weapons</li>
          <li><strong>1955:</strong> 2,422 weapons</li>
          <li><strong>1960:</strong> 18,638 weapons</li>
          <li><strong>1967:</strong> 31,255 weapons (all-time peak)</li>
          <li><strong>1985:</strong> 23,368 weapons</li>
          <li><strong>2000:</strong> 10,577 weapons</li>
          <li><strong>2010:</strong> 5,066 weapons</li>
          <li><strong>2024:</strong> ~5,500 weapons (of which ~1,700 deployed)</li>
        </ul>
        <p>
          At peak, the combined US and Soviet arsenals held enough nuclear weapons to destroy every major city on Earth
          multiple times over — a concept known as &ldquo;overkill.&rdquo; The explosive yield of the US arsenal alone was equivalent
          to roughly <strong>1.4 million Hiroshima bombs</strong>.
        </p>

        {/* Nuclear Triad */}
        <h2 className="font-[family-name:var(--font-heading)]">The Nuclear Triad: Three Ways to End the World</h2>
        <p>
          Since the 1960s, US nuclear strategy has rested on the &ldquo;triad&rdquo; — three independent delivery systems designed
          to ensure that no enemy first strike could eliminate America&rsquo;s ability to retaliate. The logic of
          &ldquo;mutually assured destruction&rdquo; (MAD) requires that retaliation is always possible.
        </p>
      </div>

      {/* Triad cards */}
      <div className="space-y-4 my-8">
        {currentArsenal.map(leg => (
          <div key={leg.leg} className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-800 mb-1">{leg.leg}</h3>
            <p className="text-sm text-stone-500 mb-2">{leg.system}</p>
            <div className="grid grid-cols-2 gap-4 text-sm mb-3">
              <div><span className="font-semibold text-stone-700">Quantity:</span> {leg.quantity}</div>
              <div><span className="font-semibold text-stone-700">Warheads:</span> {leg.warheads}</div>
              <div className="col-span-2"><span className="font-semibold text-stone-700">Location:</span> {leg.location}</div>
            </div>
            <p className="text-stone-600 text-sm">{leg.note}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-6 my-8">
          <p className="font-bold text-red-900 font-[family-name:var(--font-heading)] text-lg mb-2">⚠️ Launch Authority</p>
          <p className="text-red-800">
            The president of the United States has <strong>sole authority</strong> to order a nuclear launch. There is no
            requirement for congressional approval, cabinet consent, or military agreement. The president can order the
            destruction of entire nations in minutes. The &ldquo;two-man rule&rdquo; applies only at the launch level — it requires
            two officers to turn the keys, but they cannot refuse a lawful order. From presidential decision to missile
            launch takes approximately <strong>4 minutes</strong> for land-based ICBMs.
          </p>
        </div>

        {/* Modernization */}
        <h2 className="font-[family-name:var(--font-heading)]">The $2 Trillion Modernization</h2>
        <p>
          The United States is currently undertaking a complete overhaul of its nuclear arsenal — every warhead, every
          missile, every bomber, every submarine, every command-and-control system. The Congressional Budget Office
          estimates the 30-year cost at <strong>$1.5–2 trillion</strong>, or roughly <strong>$50–67 billion per year</strong>.
        </p>
        <p>
          This is not maintenance. This is building an entirely new nuclear arsenal from scratch while maintaining the
          old one. Every leg of the triad is being replaced simultaneously, creating what arms control experts call
          the most ambitious — and expensive — nuclear weapons program since the Cold War.
        </p>
      </div>

      {/* Modernization programs */}
      <div className="space-y-4 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-800">Major Modernization Programs</h3>
        {modernizationPrograms.map(prog => (
          <div key={prog.name} className="bg-white rounded-xl shadow-sm border p-6">
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-stone-800 mb-1">{prog.name}</h4>
            <p className="text-xs text-stone-400 mb-2">Replaces: {prog.replaces}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm mb-3">
              <div><span className="font-semibold text-stone-700">Quantity:</span> {prog.quantity}</div>
              <div><span className="font-semibold text-stone-700">Cost:</span> <span className="text-red-700 font-bold">{prog.costEstimate}</span></div>
              <div><span className="font-semibold text-stone-700">Per unit:</span> {prog.perUnit}</div>
            </div>
            <p className="text-xs text-blue-700 mb-2">Status: {prog.status}</p>
            <p className="text-stone-600 text-sm">{prog.detail}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 The Sentinel Disaster</p>
          <p className="text-amber-800">
            The Sentinel ICBM program is a case study in military-industrial complex dysfunction. Northrop Grumman
            won the contract in 2020 at $96 billion. By 2024, costs had surged 37% to $131 billion — triggering the
            Nunn-McCurdy breach, which requires the Pentagon to justify continuing the program. The Air Force certified
            it as essential, arguing there is &ldquo;no viable alternative.&rdquo; Translation: the contractor has the government
            locked in. Independent analysts project the final cost could exceed <strong>$160 billion</strong> — for missiles
            that many strategists argue are the <em>least necessary</em> leg of the triad.
          </p>
        </div>

        {/* Close Calls */}
        <h2 className="font-[family-name:var(--font-heading)]">Close Calls: When the System Almost Failed</h2>
        <p>
          Nuclear deterrence theory assumes rational actors, perfect information, and flawless systems. The historical
          record shows none of these assumptions hold. The world has come terrifyingly close to nuclear war multiple
          times — often due to technical glitches, miscommunication, or individual human judgment under pressure.
        </p>
      </div>

      {/* Close calls timeline */}
      <div className="space-y-4 my-8">
        {closeCalls.map(call => (
          <div key={call.event} className="bg-white rounded-xl shadow-sm border-l-4 border-red-500 p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-red-100 text-red-800 text-sm font-bold px-3 py-1 rounded-full">{call.year}</span>
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-stone-800">{call.event}</h4>
            </div>
            <p className="text-stone-600 text-sm mb-2">{call.detail}</p>
            <p className="text-red-700 text-xs font-semibold">Distance from catastrophe: {call.minutesToMidnight}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-stone-900 text-white rounded-xl p-6 my-8">
          <p className="text-lg italic leading-relaxed">
            &ldquo;We survived the Cold War not because deterrence worked perfectly, but because we got lucky.
            Again and again, the system failed — and each time, it was the judgment of a single individual,
            often a low-ranking officer, that prevented catastrophe. Our nuclear strategy literally depends on
            luck and the courage of individuals to disobey.&rdquo;
          </p>
        </div>

        {/* Nuclear Testing */}
        <h2 className="font-[family-name:var(--font-heading)]">Nuclear Testing: 1,054 Explosions</h2>
        <p>
          Between 1945 and 1992, the United States conducted <strong>1,054 nuclear tests</strong> — more than any other
          nation. These tests were conducted in the Pacific (primarily the Marshall Islands), the Nevada desert,
          Alaska, Colorado, Mississippi, and New Mexico. The human and environmental costs are staggering and ongoing.
        </p>
      </div>

      {/* Testing sites */}
      <div className="space-y-4 my-8">
        {testingSites.map(site => (
          <div key={site.site} className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-stone-800">{site.site}</h4>
              <span className="bg-stone-100 text-stone-700 text-sm font-mono px-3 py-1 rounded-full">{site.tests} tests</span>
            </div>
            <p className="text-xs text-stone-400 mb-2">{site.years}</p>
            <p className="text-stone-600 text-sm mb-3">{site.detail}</p>
            <p className="text-red-700 text-sm font-semibold">Legacy: {site.legacy}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-6 my-8">
          <p className="font-bold text-red-900 font-[family-name:var(--font-heading)] text-lg mb-2">⚠️ The Downwinders</p>
          <p className="text-red-800">
            An estimated <strong>hundreds of thousands</strong> of Americans living downwind of the Nevada Test Site were
            exposed to radioactive fallout from atmospheric nuclear tests in the 1950s and early 1960s. The government
            knew about the contamination and chose not to warn residents. Communities in southern Utah, northern Arizona,
            and eastern Nevada experienced dramatically elevated rates of leukemia, thyroid cancer, and other cancers.
            The Radiation Exposure Compensation Act (RECA) has paid approximately <strong>$2.6 billion</strong> in compensation,
            but many affected communities — including those in New Mexico, Idaho, Montana, and Guam — were excluded
            from the original legislation. RECA expired in June 2024 after Congress failed to renew and expand it.
          </p>
        </div>

        {/* Total cost */}
        <h2 className="font-[family-name:var(--font-heading)]">The Total Bill: $5.5–10+ Trillion</h2>
        <p>
          The total cost of America&rsquo;s nuclear weapons program — from the Manhattan Project through the current
          modernization — is almost impossible to calculate precisely. The Brookings Institution&rsquo;s landmark 1998 study
          estimated <strong>$5.5 trillion through 1996</strong> (in 1996 dollars). Adjusted for inflation and adding the
          subsequent three decades of maintenance, dismantlement, cleanup, and the new modernization program, the total
          easily exceeds <strong>$10 trillion</strong>.
        </p>
      </div>

      {/* Cost breakdown */}
      <div className="space-y-3 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-800">Cost Breakdown</h3>
        {totalCostBreakdown.map(item => (
          <div key={item.category} className={`rounded-lg p-4 border ${item.category === 'TOTAL ESTIMATED COST' ? 'bg-red-50 border-red-300' : 'bg-white'}`}>
            <div className="flex justify-between items-center mb-1">
              <span className={`font-semibold ${item.category === 'TOTAL ESTIMATED COST' ? 'text-red-900 text-lg' : 'text-stone-800'}`}>{item.category}</span>
              <span className={`font-bold font-[family-name:var(--font-heading)] ${item.category === 'TOTAL ESTIMATED COST' ? 'text-red-800 text-xl' : 'text-red-700'}`}>{item.cost}</span>
            </div>
            <p className="text-stone-500 text-xs">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        {/* What else could we have bought */}
        <h2 className="font-[family-name:var(--font-heading)]">What $10 Trillion Could Have Built</h2>
        <p>
          The opportunity cost of nuclear weapons spending is staggering. With $10 trillion, the United States could have:
        </p>
        <ul>
          <li>Eliminated student loan debt <strong>6 times over</strong> ($1.77T outstanding)</li>
          <li>Funded universal pre-K for <strong>100+ years</strong></li>
          <li>Rebuilt every bridge in America <strong>40 times</strong> ($250B estimated need)</li>
          <li>Provided clean water to <strong>every person on Earth</strong> for decades ($150B/year)</li>
          <li>Funded NASA at current levels for <strong>370 years</strong></li>
          <li>Cured diseases: the entire NIH budget since its founding is roughly <strong>$1 trillion</strong></li>
          <li>Paid off <strong>1/3 of the national debt</strong></li>
        </ul>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Daily Context</p>
          <p className="text-amber-800">
            At <strong>$50+ billion per year</strong>, the nuclear modernization program costs American taxpayers roughly
            <strong> $137 million per day</strong> — or $5.7 million per hour. For reference, the entire annual budget of
            the National Endowment for the Arts is $207 million — less than two days of nuclear weapons spending.
          </p>
        </div>

        {/* Environmental legacy */}
        <h2 className="font-[family-name:var(--font-heading)]">Environmental Devastation</h2>
        <p>
          The nuclear weapons complex has left a trail of environmental destruction across the United States:
        </p>
        <ul>
          <li><strong>Hanford, Washington:</strong> The most contaminated site in the Western Hemisphere. 56 million gallons of radioactive waste in aging tanks, some of which are leaking into the Columbia River. Cleanup estimated at $300–600 billion over 50+ years.</li>
          <li><strong>Rocky Flats, Colorado:</strong> Plutonium production plant that experienced multiple fires and contamination incidents. Now a &ldquo;wildlife refuge&rdquo; — but plutonium is still in the soil. Workers and neighboring communities suffered elevated cancer rates.</li>
          <li><strong>Savannah River, South Carolina:</strong> Produced plutonium and tritium for decades. Contaminated groundwater with tritium and other radioactive materials. 35 million gallons of radioactive waste remain on-site.</li>
          <li><strong>Oak Ridge, Tennessee:</strong> Mercury and uranium contamination from Manhattan Project-era operations. East Fork Poplar Creek remains contaminated. Cleanup is ongoing decades later.</li>
          <li><strong>Idaho National Laboratory:</strong> Stored and reprocessed nuclear waste for decades. Contamination of the Snake River Plain Aquifer — the sole water source for much of southern Idaho — remains a concern.</li>
        </ul>

        {/* Nuclear doctrine */}
        <h2 className="font-[family-name:var(--font-heading)]">Current Nuclear Doctrine</h2>
        <p>
          US nuclear doctrine is outlined in the classified <em>Nuclear Posture Review</em> (NPR), most recently updated in
          2022. Key elements include:
        </p>
        <ul>
          <li><strong>No First Use:</strong> The US has <em>not</em> adopted a no-first-use policy. Current doctrine reserves the right to use nuclear weapons first in &ldquo;extreme circumstances,&rdquo; including in response to non-nuclear attacks.</li>
          <li><strong>Launch on Warning:</strong> US ICBMs can be launched within minutes of detecting incoming missiles — before enemy warheads arrive. This &ldquo;use them or lose them&rdquo; posture creates enormous pressure to launch quickly and leaves almost no time for verification.</li>
          <li><strong>Sole Presidential Authority:</strong> The president alone decides. There is no constitutional requirement for any other approval.</li>
          <li><strong>Flexible Response:</strong> Doctrine includes options for &ldquo;limited&rdquo; nuclear strikes — the idea that nuclear war can be fought in a controlled way. Most experts consider this a dangerous fantasy.</li>
          <li><strong>Extended Deterrence:</strong> The US nuclear umbrella covers NATO allies, Japan, South Korea, and Australia. This means the US has committed to starting nuclear war on behalf of other nations.</li>
        </ul>

        <div className="not-prose bg-stone-900 text-white rounded-xl p-6 my-8">
          <p className="text-lg italic leading-relaxed">
            &ldquo;The idea that a single human being — any human being — should have the unchecked power to launch
            weapons that can kill hundreds of millions of people in minutes is incompatible with every principle of
            limited government, checks and balances, and individual liberty that the American republic was founded upon.
            The nuclear presidency is the most monarchical power ever invested in a democratic leader. The Founders
            would be horrified.&rdquo;
          </p>
        </div>

        {/* Global context */}
        <h2 className="font-[family-name:var(--font-heading)]">Global Nuclear Arsenal (2024)</h2>
        <p>
          Nine countries possess nuclear weapons. The US and Russia hold approximately 90% of the world&rsquo;s total:
        </p>
        <ul>
          <li><strong>Russia:</strong> ~6,257 warheads (largest arsenal)</li>
          <li><strong>United States:</strong> ~5,500 warheads</li>
          <li><strong>China:</strong> ~500 warheads (rapidly expanding)</li>
          <li><strong>France:</strong> ~290 warheads</li>
          <li><strong>United Kingdom:</strong> ~225 warheads</li>
          <li><strong>Pakistan:</strong> ~170 warheads</li>
          <li><strong>India:</strong> ~172 warheads</li>
          <li><strong>Israel:</strong> ~90 warheads (undeclared)</li>
          <li><strong>North Korea:</strong> ~50 warheads (estimated)</li>
        </ul>
        <p>
          Total global arsenal: approximately <strong>12,500 warheads</strong>. A fraction of this is enough to cause
          a &ldquo;nuclear winter&rdquo; that could end agriculture worldwide and kill billions through starvation.
        </p>

        {/* Arms control */}
        <h2 className="font-[family-name:var(--font-heading)]">Arms Control: Unraveling</h2>
        <p>
          The arms control framework that reduced arsenals from Cold War peaks is collapsing:
        </p>
        <ul>
          <li><strong>ABM Treaty (1972):</strong> US withdrew in 2002 under George W. Bush. This treaty had limited missile defense systems — its collapse enabled a new arms race in hypersonic weapons and missile defense.</li>
          <li><strong>INF Treaty (1987):</strong> US withdrew in 2019 under Trump, citing Russian violations. This treaty had banned intermediate-range nuclear missiles in Europe.</li>
          <li><strong>Open Skies Treaty (2002):</strong> US withdrew in 2020. Russia followed. This treaty had allowed mutual aerial surveillance flights to build confidence.</li>
          <li><strong>New START (2010):</strong> The last remaining US-Russia nuclear arms control treaty. Limits deployed strategic warheads to 1,550 each. Russia suspended participation in 2023. The treaty expires in 2026 with no successor negotiated.</li>
          <li><strong>JCPOA / Iran Deal (2015):</strong> US withdrew in 2018. Iran subsequently expanded uranium enrichment beyond agreed limits.</li>
        </ul>
        <p>
          For the first time since the 1960s, there may soon be <strong>no limits</strong> on the nuclear arsenals of the
          world&rsquo;s two largest nuclear powers. The new arms race is already underway.
        </p>

        {/* The libertarian case */}
        <h2 className="font-[family-name:var(--font-heading)]">The Libertarian Case Against the Nuclear State</h2>
        <p>
          The nuclear weapons complex represents the most extreme concentration of unchecked government power in American history:
        </p>
        <ul>
          <li><strong>No democratic oversight:</strong> Nuclear weapons policy is made in secret. Congress rubber-stamps funding without meaningful debate. The public has no say in the single most consequential government program.</li>
          <li><strong>Sole launch authority:</strong> One person can end civilization. There are no checks, no balances, no appeals. This is the antithesis of constitutional governance.</li>
          <li><strong>Permanent secrecy state:</strong> The classification system built for nuclear weapons has metastasized into a secrecy apparatus that shields all military and intelligence activities from scrutiny.</li>
          <li><strong>Captured by contractors:</strong> Nuclear weapons are built by private corporations — Northrop Grumman, Lockheed Martin, Bechtel, Honeywell — that lobby for bigger budgets and newer weapons. The Sentinel ICBM cost overrun is not a bug; it is the system working as designed.</li>
          <li><strong>Trillions in opportunity cost:</strong> Every dollar spent on nuclear weapons is a dollar taken from taxpayers and denied to productive uses. The $10 trillion spent on nuclear weapons represents the single largest government expenditure in history.</li>
          <li><strong>Environmental destruction:</strong> Nuclear weapons production has contaminated vast areas of the American landscape, with cleanup costs in the hundreds of billions — all paid by taxpayers, while the companies that caused the contamination profited.</li>
        </ul>

        <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-6 my-8">
          <p className="font-bold text-red-900 font-[family-name:var(--font-heading)] text-lg mb-2">⚠️ The Ultimate Government Failure Mode</p>
          <p className="text-red-800">
            Nuclear weapons represent the one scenario in which government failure is not recoverable. A failed
            education policy can be reformed. A failed economic policy can be reversed. A failed nuclear launch decision
            destroys civilization. There is no undo button, no appeals court, no constitutional remedy. The nuclear state
            asks citizens to trust that a system run by fallible humans, decaying technology, and perverse incentives
            will <em>never</em> fail — for the rest of time. The historical record of close calls suggests this faith is
            profoundly misplaced.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Sources</h2>
        <ul className="text-sm">
          <li>Brookings Institution, <em>Atomic Audit: The Costs and Consequences of U.S. Nuclear Weapons Since 1940</em> (1998)</li>
          <li>Congressional Budget Office, <em>Projected Costs of U.S. Nuclear Forces, 2023 to 2032</em> (2023)</li>
          <li>Federation of American Scientists, Nuclear Notebook (2024)</li>
          <li>Arms Control Association, factsheets on nuclear modernization programs</li>
          <li>Government Accountability Office, Sentinel ICBM Nunn-McCurdy breach report (2024)</li>
          <li>Union of Concerned Scientists, nuclear weapons and close calls research</li>
          <li>National Nuclear Security Administration (NNSA), Stockpile Stewardship reports</li>
          <li>Department of Energy, Environmental Management cleanup reports</li>
          <li>Bulletin of the Atomic Scientists, Doomsday Clock and nuclear risk analysis</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Related Pages</h2>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {[
            { href: '/spending', label: 'Military Spending', desc: 'The $900B annual defense budget' },
            { href: '/contractors', label: 'Defense Contractors', desc: 'Who profits from nuclear weapons' },
            { href: '/opportunity-cost', label: 'Opportunity Cost', desc: 'What else $10 trillion could buy' },
            { href: '/veterans', label: 'Veterans Crisis', desc: 'The human cost of military service' },
            { href: '/intelligence', label: 'Intelligence Agencies', desc: 'The secrecy state built for nuclear weapons' },
            { href: '/modern-tactics', label: 'Modern Warfare', desc: 'How war changed in the nuclear age' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="block bg-white rounded-lg p-4 border hover:shadow-md transition">
              <p className="font-semibold text-blue-800">{link.label}</p>
              <p className="text-stone-500 text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
