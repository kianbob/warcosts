import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { WarEconomyCharts } from './WarEconomyCharts'

export const metadata: Metadata = {
  title: 'The War Economy: How War Drives the US Economy',
  description: 'Military Keynesianism built modern America. WW2 ended the Depression. Cold War R&D gave us the internet, GPS, and microchips. $15 trillion spent since 2001. War is the economy.',
  openGraph: {
    title: 'The War Economy: How War Drives the US Economy',
    description: 'From WW2 to the War on Terror — how military spending became America\'s industrial policy.',
    url: 'https://www.warcosts.org/analysis/war-economy',
  },
}

const militaryKeynesianismTimeline = [
  { era: 'Great Depression (1933)', unemployment: '24.9%', gdpGrowth: '-1.2%', milSpending: '$8.9B (1.5% GDP)', event: 'FDR\'s New Deal begins but fails to fully end the Depression' },
  { era: 'Pre-War Buildup (1940)', unemployment: '14.6%', gdpGrowth: '+8.8%', milSpending: '$27B (1.7% GDP)', event: 'Lend-Lease begins. Factories retool for war production.' },
  { era: 'Peak War (1944)', unemployment: '1.2%', gdpGrowth: '+8.0%', milSpending: '$655B (41.9% GDP)', event: 'Full employment. Women enter workforce. GDP doubles in 4 years.' },
  { era: 'Korean War (1952)', unemployment: '3.0%', gdpGrowth: '+4.1%', milSpending: '$570B (14.2% GDP)', event: 'Permanent peacetime military established. NSC-68 doctrine.' },
  { era: 'Vietnam Peak (1968)', unemployment: '3.6%', gdpGrowth: '+4.8%', milSpending: '$548B (9.5% GDP)', event: 'Military-industrial complex at full throttle. Campus protests.' },
  { era: 'Reagan Buildup (1985)', unemployment: '7.2%', gdpGrowth: '+4.2%', milSpending: '$572B (6.1% GDP)', event: '$2.4 trillion defense buildup. "Peace through strength."' },
  { era: 'Post-9/11 Peak (2010)', unemployment: '9.6%', gdpGrowth: '+2.6%', milSpending: '$849B (4.7% GDP)', event: 'Simultaneous wars in Iraq, Afghanistan. Surge spending.' },
  { era: 'Iran Strikes (2026)', unemployment: '4.1%', gdpGrowth: '+2.0%', milSpending: '$886B+ (3.3% GDP)', event: 'New conflict cycle begins. Defense stocks hit all-time highs.' },
]

const coldWarInventions = [
  { invention: 'The Internet (ARPANET)', year: '1969', agency: 'DARPA', militaryPurpose: 'Decentralized communications network survivable after nuclear attack', civilianImpact: '$4.9 trillion global digital economy. Connects 5.3 billion people. Transformed every industry on Earth.', costToTaxpayer: '$25M initial (1969 dollars)', note: 'Bob Kahn and Vint Cerf developed TCP/IP under DARPA contracts. The private sector built on top of taxpayer-funded R&D.' },
  { invention: 'GPS (Global Positioning System)', year: '1973–1995', agency: 'US Air Force / DoD', militaryPurpose: 'Precision navigation for nuclear submarines, ICBMs, and guided munitions', civilianImpact: '$1.4 trillion in economic value (2017 NIST estimate). Ride-sharing, precision agriculture, emergency response, aviation.', costToTaxpayer: '$12B development + $1.5B/year maintenance', note: 'Clinton ordered GPS opened to civilian use in 2000. The military gave us Uber.' },
  { invention: 'Microchips / Semiconductors', year: '1958–1970s', agency: 'DoD / NASA', militaryPurpose: 'Guidance systems for Minuteman ICBMs and Apollo spacecraft', civilianImpact: '$580B semiconductor industry (2023). Every computer, phone, car, and appliance on Earth.', costToTaxpayer: 'Hundreds of billions in procurement contracts', note: 'The Pentagon was buying 100% of US chip production in the early 1960s. Military demand created the semiconductor industry.' },
  { invention: 'Jet Engines', year: '1940s–1950s', agency: 'US Army Air Forces / USAF', militaryPurpose: 'Air superiority fighters and strategic bombers', civilianImpact: 'Commercial aviation: $878B industry (2023). 4.5 billion passengers per year.', costToTaxpayer: 'Billions in R&D contracts to GE, Pratt & Whitney', note: 'Boeing\'s 707 — the first successful commercial jet — was derived from the KC-135 military tanker.' },
  { invention: 'Nuclear Energy', year: '1942–1954', agency: 'Manhattan Project → AEC', militaryPurpose: 'Atomic and hydrogen bombs', civilianImpact: '18.2% of US electricity. 440 reactors worldwide. Zero-carbon baseload power.', costToTaxpayer: '$28B Manhattan Project (2023 dollars)', note: 'Admiral Hyman Rickover adapted submarine reactors for civilian power. Atoms for Peace (1953).' },
  { invention: 'Radar', year: '1935–1945', agency: 'MIT Rad Lab / Army Signal Corps', militaryPurpose: 'Detection of enemy aircraft and ships', civilianImpact: 'Air traffic control, weather forecasting, microwave ovens, speed enforcement.', costToTaxpayer: '$3B (Rad Lab alone, 2023 dollars)', note: 'The microwave oven was discovered by accident when a Raytheon engineer\'s candy bar melted near a radar set.' },
  { invention: 'EpiPen', year: '1970s', agency: 'DoD / Survival Technology Inc.', militaryPurpose: 'Auto-injector for nerve agent antidotes on the battlefield', civilianImpact: 'Life-saving epinephrine delivery for severe allergic reactions. 3.6 million prescriptions/year.', costToTaxpayer: 'Military R&D grants', note: 'Mylan later acquired rights and raised prices 500%. Military R&D → private profit → public gouging.' },
  { invention: 'Duct Tape', year: '1943', agency: 'Revolite (for US military)', militaryPurpose: 'Waterproof sealing for ammunition cases', civilianImpact: 'Universal adhesive. $1.5B market.', costToTaxpayer: 'Minimal', note: 'Originally called "duck tape" for its waterproof properties. Soldiers discovered it fixed everything.' },
]

const revolvingDoorStats = [
  { stat: '672', label: 'Senior Pentagon officials who became defense industry lobbyists/executives (2008–2023)', source: 'POGO' },
  { stat: '85%', label: 'Of top 20 defense contractors that employ former senior DoD officials', source: 'Government Accountability Office' },
  { stat: '$14.1B', label: 'Lobbying spending by defense industry since 1998', source: 'OpenSecrets' },
  { stat: '820+', label: 'Registered defense lobbyists in Washington DC (2024)', source: 'OpenSecrets' },
  { stat: '$84.5M', label: 'Defense industry contributions to congressional campaigns (2024 cycle)', source: 'OpenSecrets' },
  { stat: '2.7 years', label: 'Average time between leaving Pentagon and joining a contractor', source: 'Boston Globe investigation' },
]

const militaryTowns = [
  { city: 'Fayetteville, NC', base: 'Fort Liberty (Bragg)', personnel: '57,000 military + 11,000 civilian', economicImpact: '$28.6B annual', pctLocalEconomy: '67%', notes: 'Home of the 82nd Airborne and Special Operations Command. The city essentially exists because of the base.' },
  { city: 'Killeen, TX', base: 'Fort Cavazos (Hood)', personnel: '45,000 military + 9,000 civilian', economicImpact: '$26.2B annual', pctLocalEconomy: '73%', notes: 'The largest active-duty armored post in the US. Killeen\'s population tripled since 1980 due to base expansion.' },
  { city: 'Virginia Beach, VA', base: 'NAS Oceana / Dam Neck / Little Creek', personnel: '35,000 military', economicImpact: '$12.3B annual', pctLocalEconomy: '38%', notes: 'Navy SEALs, F/A-18 squadrons, and the Atlantic Fleet. Defense is the largest employer.' },
  { city: 'San Diego, CA', base: '16 military installations', personnel: '116,000 military', economicImpact: '$53.4B annual', pctLocalEconomy: '22%', notes: 'Largest naval fleet concentration in the world. The Navy has been in San Diego since 1846.' },
  { city: 'Colorado Springs, CO', base: 'Fort Carson / Peterson / Schriever / USAFA', personnel: '43,000 military', economicImpact: '$15.7B annual', pctLocalEconomy: '40%', notes: 'Space Force, NORAD, Air Force Academy. The Pentagon\'s eyes in space.' },
  { city: 'Huntsville, AL', base: 'Redstone Arsenal / NASA Marshall', personnel: '45,000+ workers', economicImpact: '$20.1B annual', pctLocalEconomy: '58%', notes: 'America\'s "Rocket City." Defense/aerospace R&D hub. Lockheed, Boeing, Raytheon all have major facilities.' },
  { city: 'Groton, CT', base: 'Naval Submarine Base New London', personnel: '10,000 military + 10,000 civilian', economicImpact: '$4.3B annual', pctLocalEconomy: '52%', notes: 'General Dynamics Electric Boat builds every US nuclear submarine here. The town IS submarine production.' },
]

const spendingComparisons = [
  { category: 'US Military Spending (2025)', amount: '$886 billion', comparison: 'More than the next 10 countries combined' },
  { category: 'Post-9/11 War Costs (total)', amount: '$8+ trillion', comparison: 'Could have eliminated student debt 4 times over' },
  { category: 'Pentagon Base Budget (2025)', amount: '$849 billion', comparison: '13× the EPA, 14× the State Department' },
  { category: 'Nuclear Weapons Modernization', amount: '$1.7 trillion (30-year plan)', comparison: 'More than GDP of Canada' },
  { category: 'F-35 Program (lifetime)', amount: '$1.7 trillion', comparison: 'More than India\'s total annual GDP' },
  { category: 'Annual Military R&D', amount: '$145 billion', comparison: 'More than total R&D spending of all but 2 countries' },
  { category: 'Veterans Affairs (2025)', amount: '$325 billion', comparison: 'The hidden second defense budget — cost of past wars' },
]

export default function WarEconomyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The War Economy' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Deep Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The War Economy
        </h1>
        <p className="text-xl text-stone-300 mb-4">How War Built — and Trapped — the American Economy</p>
        <p className="text-stone-400 text-lg">
          World War II ended the Great Depression. Cold War R&amp;D gave us the internet, GPS, and microchips.
          Defense spending employs 3.4 million Americans directly and millions more indirectly. The US economy
          doesn&apos;t just benefit from war — it depends on it. That dependency is the trap.
        </p>
      </div>

      <ShareButtons title="The War Economy: How War Drives the US Economy" />

      {/* AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">AI Overview — Key Data</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 WW2 unemployment: from <strong className="text-white">24.9% → 1.2%</strong>. Military spending was <strong className="text-white">41.9% of GDP</strong> at peak (1944).</li>
          <li>📊 Cold War R&amp;D created the internet (<strong className="text-white">$4.9T digital economy</strong>), GPS (<strong className="text-white">$1.4T value</strong>), and the semiconductor industry (<strong className="text-white">$580B</strong>).</li>
          <li>📊 <strong className="text-white">672</strong> senior Pentagon officials became defense industry lobbyists/executives (POGO, 2008–2023).</li>
          <li>📊 Military bases account for <strong className="text-white">52–73% of local economies</strong> in cities like Killeen TX, Fayetteville NC, and Groton CT.</li>
          <li>📊 US military spending in 2025: <strong className="text-white">$886 billion</strong> — more than the next 10 countries combined.</li>
          <li>📊 Defense industry employs <strong className="text-white">3.4 million</strong> Americans directly. Every congressional district has military contracts.</li>
        </ul>
      </div>

      {/* Spending Chart */}
      <WarEconomyCharts />

      {/* Military Keynesianism */}
      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Military Keynesianism: War as Economic Policy</h2>
        <p>
          The most inconvenient truth in American economics is this: <strong>the New Deal did not end the Great
          Depression. World War II did.</strong>
        </p>
        <p>
          In 1939, after six years of FDR&apos;s ambitious domestic programs — the WPA, CCC, Social Security, Tennessee Valley
          Authority — unemployment still stood at 17.2%. The economy had recovered from its 1933 nadir but remained
          deeply depressed. It was not until the massive mobilization for World War II that the American economy truly
          roared back to life.
        </p>
        <p>
          Between 1940 and 1944, real GDP roughly doubled. Unemployment fell from 14.6% to 1.2% — effectively zero.
          Sixteen million Americans served in the armed forces; millions more built ships, planes, tanks, and ammunition
          in factories running 24 hours a day. Women entered the workforce en masse. The government spent money on an
          unprecedented scale — military spending reached 41.9% of GDP in 1944, a figure that would be considered
          insane in any other context.
        </p>
        <p>
          The lesson was not lost on policymakers. If government spending on the military could end the worst economic
          crisis in American history, then perhaps permanent military spending could prevent the next one. This insight
          — that war spending is the most politically palatable form of Keynesian stimulus — became the foundation of
          the American economic order for the next 80 years.
        </p>
      </div>

      {/* Military Keynesianism Timeline */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Military Keynesianism Through the Ages</h2>
        <p className="text-stone-400 text-sm mb-4">How military spending has tracked with economic conditions across eight decades.</p>
        <div className="space-y-3">
          {militaryKeynesianismTimeline.map(row => (
            <div key={row.era} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{row.era}</h3>
                <span className="text-red-400 font-bold text-sm">{row.milSpending}</span>
              </div>
              <div className="flex gap-4 mt-1 text-sm">
                <span className="text-stone-400">Unemployment: <span className="text-white">{row.unemployment}</span></span>
                <span className="text-stone-400">GDP Growth: <span className="text-white">{row.gdpGrowth}</span></span>
              </div>
              <p className="text-stone-400 text-sm mt-2">{row.event}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">NSC-68: The Document That Made War Permanent</h2>
        <p>
          In 1950, Paul Nitze authored NSC-68, a classified National Security Council document that would become the
          blueprint for American military spending for the next 75 years. The document argued that the Soviet threat
          required a permanent, massive military establishment — not just in wartime, but in peacetime. It explicitly
          invoked Keynesian economics, arguing that military spending would <em>stimulate</em> the economy rather
          than drain it.
        </p>
        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;The United States could achieve a substantial absolute increase in output and could increase the
          allocation of resources to a build-up of the economic and military strength... One of the most significant
          lessons of our World War II experience was that the American economy, when it operates at a level approaching
          full efficiency, can provide enormous resources for purposes other than civilian consumption while
          simultaneously providing a high standard of living.&rdquo;</p>
          <footer>— NSC-68 (1950), declassified 1975</footer>
        </blockquote>
        <p>
          Translation: We can spend massively on the military and still grow the economy. War spending is not a
          sacrifice — it&apos;s stimulus. This argument won the day. Truman tripled the defense budget. It never came back
          down. Before Korea, defense spending was about 5% of GDP. After Korea, it never fell below 3%, even in the
          most peaceful years. The permanent war economy was born.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Cold War R&amp;D: The Military Gave Us the Modern World</h2>
        <p>
          The strongest argument for military spending as economic policy is the extraordinary list of technologies
          that originated in military R&amp;D and transformed civilian life. The digital revolution — the internet,
          GPS, microchips, touchscreens, voice recognition — was substantially funded by the Department of Defense
          and its research arm, DARPA.
        </p>
        <p>
          This is not an accident. During the Cold War, the Pentagon was the largest single funder of R&amp;D in the
          world. Military contracts sustained entire industries. The semiconductor industry was literally created by
          military demand — the Pentagon was buying 100% of American chip production in the early 1960s for missile
          guidance systems. Without those purchases, Silicon Valley might not exist.
        </p>
      </div>

      {/* Cold War Inventions */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">What the Military Gave Us</h2>
        <p className="text-stone-400 text-sm mb-4">Technologies developed with military R&amp;D funding that transformed civilian life.</p>
        <div className="space-y-4">
          {coldWarInventions.map(inv => (
            <div key={inv.invention} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{inv.invention}</h3>
                <span className="text-stone-400 text-sm">{inv.year}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                <div>
                  <span className="text-stone-400 text-sm">Military Purpose</span>
                  <p className="text-stone-300 text-sm">{inv.militaryPurpose}</p>
                </div>
                <div>
                  <span className="text-stone-400 text-sm">Civilian Impact</span>
                  <p className="text-red-400 text-sm">{inv.civilianImpact}</p>
                </div>
              </div>
              <p className="text-stone-500 text-sm mt-2 italic">{inv.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Counter-Argument: Could We Have Done It Without War?</h2>
        <p>
          The military-funded-everything narrative is powerful, but it raises an uncomfortable question: did we need
          to route R&amp;D through the Pentagon? Could civilian agencies have produced the same innovations at lower cost
          and without the weapons attached?
        </p>
        <p>
          Economist Seymour Melman argued in <em>The Permanent War Economy</em> (1974) that military spending actually
          <em>harms</em> the civilian economy by diverting the best engineers, scientists, and capital away from
          productive uses. While the US was building ICBMs, Japan and Germany were building cars and consumer electronics.
          By the 1980s, those countries had higher-quality manufacturing and faster productivity growth — precisely
          because their engineers were building things people could use, not weapons they hoped never to fire.
        </p>
        <p>
          The internet could have been developed by a civilian research agency. GPS could have been a civilian navigation
          project. The fact that these technologies came through the military says more about American political culture —
          where military spending is easy to approve and civilian R&amp;D is not — than about any inherent military
          advantage in innovation.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Revolving Door: Personnel as Policy</h2>
        <p>
          The war economy is sustained not just by contracts and spending, but by people. The revolving door between
          the Pentagon and the defense industry is the mechanism that ensures military spending never decreases, weapons
          programs are never cancelled, and the definition of &ldquo;threat&rdquo; always expands to justify larger budgets.
        </p>
      </div>

      {/* Revolving Door Stats */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Revolving Door by the Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {revolvingDoorStats.map(s => (
            <div key={s.label} className="border border-stone-700 rounded-lg p-4">
              <span className="text-3xl font-bold text-red-400">{s.stat}</span>
              <p className="text-stone-300 text-sm mt-1">{s.label}</p>
              <p className="text-stone-500 text-xs mt-1">Source: {s.source}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <p>
          The pattern is systematic. A general or admiral retires from the Pentagon, waits the legally required one year
          (sometimes less with a waiver), and joins a defense contractor at 5–10× their government salary. They bring
          with them relationships, insider knowledge, and the ability to shape future procurement. The contractor gets
          access. The official gets wealth. The taxpayer gets the bill.
        </p>
        <p>
          This isn&apos;t corruption in the traditional sense — there are no suitcases of cash. It&apos;s structural corruption.
          The system is designed so that the people who decide how to spend $886 billion per year have a personal
          financial interest in spending more, not less. It&apos;s a feature, not a bug.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Company Towns: When the Base IS the Economy</h2>
        <p>
          The political power of military spending is concentrated in specific communities where the military base or
          defense plant is the dominant employer. These towns are, functionally, company towns — except the company is
          the Department of Defense, and the product is war.
        </p>
        <p>
          When a senator from Texas votes against closing a military base, they&apos;re not making a strategic assessment
          of national defense needs. They&apos;re protecting the 45,000 military and 9,000 civilian jobs at Fort Cavazos
          that account for 73% of Killeen&apos;s economy. When a representative from Connecticut defends submarine
          procurement, they&apos;re protecting the 10,000 General Dynamics jobs in Groton that account for 52% of the
          local economy.
        </p>
      </div>

      {/* Military Towns */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Military Company Towns</h2>
        <p className="text-stone-400 text-sm mb-4">Cities where the military dominates the local economy — making base closures and spending cuts politically impossible.</p>
        <div className="space-y-3">
          {militaryTowns.map(town => (
            <div key={town.city} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{town.city}</h3>
                  <span className="text-red-400 text-sm">{town.base}</span>
                </div>
                <span className="text-red-400 font-bold text-xl">{town.pctLocalEconomy}</span>
              </div>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="text-stone-400">Personnel: <span className="text-white">{town.personnel}</span></span>
                <span className="text-stone-400">Impact: <span className="text-white">{town.economicImpact}</span></span>
              </div>
              <p className="text-stone-400 text-sm mt-2">{town.notes}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">BRAC: The Impossible Politics of Cutting</h2>
        <p>
          The Base Realignment and Closure (BRAC) process was invented specifically because Congress could not bring
          itself to close military bases on its own. The process — where an independent commission recommends closures
          and Congress must vote on the entire package, no cherry-picking — was the only way to overcome the political
          impossibility of each member protecting their own bases.
        </p>
        <p>
          Even so, BRAC rounds have been extraordinarily painful. The 2005 BRAC round was the last one completed.
          Congress has refused to authorize a new round for 20 years, despite the Pentagon repeatedly requesting one.
          The reason is simple: every base closure means lost jobs, and no member of Congress wants to explain to
          constituents why they voted to eliminate the town&apos;s largest employer.
        </p>
        <p>
          The result is that the US maintains bases it doesn&apos;t need, in locations chosen for political rather than
          strategic reasons, at a cost of billions per year. The war economy doesn&apos;t just grow — it calcifies. Once
          military spending is embedded in a community, removing it becomes politically impossible.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Scale of It</h2>
        <p>
          To understand the war economy, you have to understand the scale. The United States spends more on its military
          than the next 10 countries combined. This is not an exaggeration — it is arithmetic.
        </p>
      </div>

      {/* Spending Comparisons */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Putting It In Perspective</h2>
        <div className="space-y-3">
          {spendingComparisons.map(c => (
            <div key={c.category} className="flex justify-between items-start border-b border-stone-700 pb-3">
              <div>
                <span className="text-white font-semibold">{c.category}</span>
                <p className="text-stone-400 text-sm">{c.comparison}</p>
              </div>
              <span className="text-red-400 font-bold shrink-0 ml-4">{c.amount}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Trap</h2>
        <p>
          The war economy is a trap because it works just well enough to be politically unassailable. Military spending
          does create jobs. It does fund R&amp;D. It does sustain communities. These are real benefits with real
          beneficiaries who will fight to protect them.
        </p>
        <p>
          But military spending is also the <em>least efficient</em> form of government stimulus. According to the
          Political Economy Research Institute at UMass Amherst, $1 billion in military spending creates approximately
          11,200 jobs. The same $1 billion spent on education creates 26,700 jobs. Healthcare: 17,200 jobs. Clean
          energy: 16,800 jobs. Infrastructure: 17,000 jobs.
        </p>
        <p>
          For every dollar spent on war, we get fewer jobs, less economic growth, and less public benefit than if that
          dollar were spent on almost anything else. But military spending has one advantage that no other form of
          government spending possesses: bipartisan support. Try getting Congress to spend $886 billion on education.
          Try getting Congress to spend $886 billion on healthcare. Try getting Congress to spend $886 billion on
          infrastructure. You can&apos;t. But military spending? Rubber-stamped every year, often with increases beyond
          what the Pentagon even requests.
        </p>
        <p>
          This is the trap. The United States has built an economy that depends on military spending not because
          military spending is the best use of resources, but because it is the only form of large-scale government
          investment that American political culture permits. We don&apos;t have an industrial policy — we have a
          defense budget. We don&apos;t have a technology strategy — we have DARPA. We don&apos;t have a jobs program — we
          have military bases in every state.
        </p>
        <p>
          Eisenhower saw it coming. In his 1961 farewell address, he warned of the &ldquo;military-industrial complex&rdquo;
          and its &ldquo;unwarranted influence.&rdquo; He was right. But he was also part of the system that created it.
          The highway system he championed was justified as the National Defense Highway System. The science education
          boom he oversaw after Sputnik was framed as a national security imperative. Even Eisenhower, who saw the
          danger, could only get things done by routing them through the military.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense,
          a theft from those who hunger and are not fed, those who are cold and are not clothed. This world in arms
          is not spending money alone. It is spending the sweat of its laborers, the genius of its scientists, the
          hopes of its children.&rdquo;</p>
          <footer>— President Dwight D. Eisenhower, &ldquo;Chance for Peace&rdquo; speech, April 16, 1953</footer>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line</h2>
        <p>
          The American economy is addicted to war spending. The addiction started with the genuine emergency of World
          War II, was institutionalized by the Cold War, and has become self-perpetuating in the War on Terror era.
          Every community with a military base, every worker at a defense plant, every engineer at a contractor, every
          member of Congress with military facilities in their district has a personal interest in the continuation of
          high military spending — regardless of whether there is a genuine threat to justify it.
        </p>
        <p>
          The war economy doesn&apos;t need enemies. It creates them. When the Soviet Union collapsed, the military budget
          barely dipped before 9/11 provided a new justification. When the War on Terror wound down, the &ldquo;pivot to
          Asia&rdquo; and &ldquo;great power competition&rdquo; with China emerged. Now Iran. There will always be a next
          threat, because the economy requires one.
        </p>
        <p>
          The question is not whether military spending benefits some Americans — it clearly does. The question is
          whether there is a better way to create jobs, fund R&amp;D, and sustain communities that doesn&apos;t require
          building weapons and finding enemies to use them on. The answer is obviously yes. The political will to do
          it is obviously absent. And so the war economy rolls on.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/military-industrial-complex">The Military-Industrial Complex</Link></li>
          <li><Link href="/analysis/war-profiteering">War Is a Racket: Who Gets Rich</Link></li>
          <li><Link href="/analysis/jobs-vs-war">Jobs vs. War: Military Spending Creates Fewer Jobs</Link></li>
          <li><Link href="/analysis/what-could-we-buy">What $11.6 Trillion Could Have Bought Instead</Link></li>
          <li><Link href="/analysis/cost-of-secrecy">The Black Budget and Classified Spending</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
