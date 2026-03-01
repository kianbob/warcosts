import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Modern Warfare Tactics — Invisible Wars, Zero Accountability | WarCosts',
  description: 'How war changed: no declarations, no frontlines, no rules. Cyber warfare, economic sanctions, information operations, AI weapons, private military contractors, drone warfare, space militarization, and hybrid warfare.',
  keywords: ['modern warfare', 'cyber warfare', 'drone warfare', 'sanctions', 'information warfare', 'hybrid warfare', 'AI weapons', 'private military contractors', 'PMC', 'space warfare', 'proxy wars'],
  openGraph: {
    title: 'Modern Warfare — Invisible Wars, Zero Accountability',
    description: 'War didn\'t end. It became invisible. That\'s the point.',
    url: 'https://warcosts.org/modern-tactics',
    type: 'article',
  },
}

const warfareDomains = [
  {
    name: 'Cyber Warfare',
    icon: '💻',
    budget: '$20B+ annually (US Cyber Command + NSA offensive)',
    keyFacts: [
      'US Cyber Command has 6,200+ military and civilian personnel',
      'Stuxnet (2010): US/Israel destroyed 1,000+ Iranian centrifuges with malware — the first cyber weapon to cause physical destruction',
      'The US conducts "persistent engagement" — continuous offensive cyber operations against adversaries',
      'China\'s Unit 61398 and Russia\'s GRU conduct daily cyber operations against US infrastructure',
      'Colonial Pipeline (2021): A ransomware attack shut down the largest US fuel pipeline for 6 days',
      'SolarWinds (2020): Russian intelligence compromised 18,000+ organizations including Treasury, Commerce, and DHS',
      'The line between espionage, sabotage, and warfare in cyberspace is undefined — there are no Geneva Conventions for cyber',
    ],
    libertarianAngle: 'Cyber warfare operates entirely without congressional oversight or public debate. No declaration of war, no authorization for use of force. The government conducts offensive operations against other nations\' infrastructure and collects data on millions of Americans — all in secret.',
    link: null,
  },
  {
    name: 'Economic Sanctions',
    icon: '💰',
    budget: 'Cost to targets: hundreds of billions. Cost to US economy: tens of billions.',
    keyFacts: [
      'The US currently sanctions 12,000+ entities across 30+ countries',
      'OFAC (Treasury) administers 30+ active sanctions programs',
      'Iran sanctions: cost Iran an estimated $150B+ in lost oil revenue since 2012',
      'Russia sanctions (2022+): the most comprehensive sanctions regime ever imposed, freezing $300B in central bank reserves',
      'North Korea: the most sanctioned country on Earth, yet nuclear program continues to advance',
      'Cuba: 60+ years of sanctions have failed to change the regime but impoverished 11 million people',
      'Secondary sanctions force third countries to choose between trading with the US or the sanctioned country — weaponizing the dollar',
      'Studies show sanctions succeed in changing behavior only 20–30% of the time (Peterson Institute)',
    ],
    libertarianAngle: 'Sanctions are economic warfare against civilian populations. They cause humanitarian crises — medicine shortages, food insecurity, economic collapse — while rarely affecting regime leaders. They\'re imposed by executive order without meaningful congressional debate, weaponize the global financial system, and accelerate de-dollarization as countries seek alternatives to US financial control.',
    link: null,
  },
  {
    name: 'Information & Psychological Warfare',
    icon: '📡',
    budget: '$1B+ (Global Engagement Center, military PSYOP, VOA/RFE/RL)',
    keyFacts: [
      'The Pentagon\'s information operations budget exceeds $1 billion annually',
      'US military PSYOP units are now called "Military Information Support Operations" (MISO)',
      'The Global Engagement Center (State Dept) was established to counter foreign propaganda',
      'Russia\'s Internet Research Agency (IRA) spent ~$1.25M/month on US social media operations (2016 election)',
      'China\'s "50 Cent Army" employs an estimated 2 million people to shape online discourse',
      'The Pentagon was caught running fake social media accounts targeting foreign audiences (Stanford/Meta 2022)',
      'The line between "countering disinformation" and censorship is increasingly blurred domestically',
    ],
    libertarianAngle: 'When the government decides what is "disinformation" and what is truth, it becomes the arbiter of acceptable speech. The same apparatus built to counter foreign propaganda is inevitably turned inward. The Pentagon running fake social media accounts is government-produced disinformation by another name.',
    link: null,
  },
  {
    name: 'Drone Warfare',
    icon: '🎯',
    budget: '$10B+ annually (procurement + operations)',
    keyFacts: [
      'The US has conducted 14,000+ drone strikes since 2001 (Bureau of Investigative Journalism)',
      'Countries targeted: Afghanistan, Pakistan, Yemen, Somalia, Iraq, Syria, Libya, and others',
      'Civilian casualties: independent estimates range from 1,000 to 2,200+ killed (BIJ). The government claims far fewer.',
      'The "disposition matrix" — the kill list — is maintained by the National Counterterrorism Center',
      'Presidents personally approve some strike targets in "Terror Tuesday" meetings',
      '"Double tap" strikes target rescuers who respond to initial strikes',
      'Signature strikes target patterns of behavior, not identified individuals — meaning the CIA kills people without knowing who they are',
      'The Reaper drone costs ~$32M each; the US has 300+',
      'AI-assisted targeting is accelerating — Project Maven and others use machine learning to identify targets',
    ],
    libertarianAngle: 'Drone warfare allows the government to kill people — including American citizens (Anwar al-Awlaki, 2011) — without charge, trial, or due process. The kill list is compiled in secret, reviewed in secret, and executed in secret. There is no accountability for civilian deaths. The low political cost of drones (no American casualties) removes the democratic check on war: public opposition.',
    link: '/analysis/drone-wars',
  },
  {
    name: 'Space Militarization',
    icon: '🛰️',
    budget: '$30B+ (Space Force + NRO + classified programs)',
    keyFacts: [
      'The US Space Force was established December 2019 as the 6th military branch',
      'Space Force budget: $30B (FY2024) — more than NASA ($25.4B)',
      'The NRO operates the world\'s most capable spy satellite fleet',
      'GPS is a military system that the US can selectively degrade or deny to adversaries',
      'Anti-satellite (ASAT) weapons: China (2007), India (2019), and Russia (2021) have tested kinetic ASAT weapons; the US tested one in 2008',
      'Space debris from ASAT tests threatens all satellites — Kessler Syndrome could render orbits unusable',
      'The Outer Space Treaty (1967) prohibits nuclear weapons in space but doesn\'t ban conventional weapons',
      'Classified space programs are estimated at $10–15B additional beyond the disclosed budget',
    ],
    libertarianAngle: 'The Space Force exists to project military dominance into a domain that was supposed to be the "province of all mankind." The weaponization of space is driven by the same military-industrial complex that drives terrestrial arms races — and now has an entirely new domain to justify budgets. The classified portion of the space budget may exceed the public one.',
    link: null,
  },
  {
    name: 'Artificial Intelligence & Autonomous Weapons',
    icon: '🤖',
    budget: '$2B+ dedicated AI/ML military spending (growing rapidly)',
    keyFacts: [
      'The DOD AI budget has grown from $600M (2016) to $2B+ (2024)',
      'Project Maven (2017): Google\'s AI used to analyze drone surveillance footage. Google employees protested; Google withdrew. The contract moved to other companies.',
      'JADC2 (Joint All-Domain Command and Control): AI-enabled system to connect all sensors, shooters, and commanders across all domains',
      'Autonomous drone swarms are in development — hundreds of coordinated drones operating without human control',
      'The "killer robot" debate: 30+ countries have called for a ban on fully autonomous weapons. The US opposes a ban.',
      'China is investing heavily in AI warfare — the "AI arms race" is a central Pentagon concern',
      'AI targeting systems can identify and recommend strikes faster than human decision-making — but with unknown error rates',
      'The DOD\'s AI ethics principles include "human in the loop" — but the loop is getting smaller and faster',
    ],
    libertarianAngle: 'Autonomous weapons represent the ultimate removal of human judgment — and human accountability — from the decision to kill. When an algorithm decides who lives and dies, who is responsible for errors? The AI arms race creates pressure to remove humans from the loop entirely, because the side with slower decision-making loses. This is an existential risk being driven by military competition.',
    link: null,
  },
  {
    name: 'Private Military Contractors (PMCs)',
    icon: '🏴',
    budget: '$150B+ annually (all DOD contracted services)',
    keyFacts: [
      'At peak, contractors outnumbered US troops in Iraq and Afghanistan',
      'Iraq (2008): 163,000 contractors vs. 150,000 troops',
      'Afghanistan (2019): 53,000 contractors vs. 14,000 troops',
      'Blackwater (now Academi): employees killed 17 Iraqi civilians at Nisour Square (2007). Four were convicted, then pardoned by Trump.',
      'Erik Prince (Blackwater founder) proposed privatizing the Afghanistan war entirely',
      'KBR/Halliburton: $40B+ in Iraq/Afghanistan contracts, including the burn pits that sickened 3.5 million service members',
      'Wagner Group (Russia): Russian PMC deployed in Syria, Libya, Mali, Central African Republic. Wagner\'s leader Prigozhin died in a suspicious plane crash after his 2023 mutiny.',
      'Contractor deaths are not included in official casualty counts — over 8,000 US contractors died in Iraq and Afghanistan',
    ],
    libertarianAngle: 'Private military contractors allow governments to wage war while hiding the true cost in human lives and dollars. Contractor casualties aren\'t counted in official tolls. Contractor spending is buried in complex procurement. And when contractors commit crimes — as at Nisour Square — accountability is nearly impossible. PMCs are not the free market at work; they are government monopoly money financing private armies.',
    link: null,
  },
  {
    name: 'Hybrid & Gray Zone Warfare',
    icon: '🌫️',
    budget: 'Impossible to isolate — embedded across all budgets',
    keyFacts: [
      'Hybrid warfare combines conventional military, cyber, information, economic, and covert operations simultaneously',
      'Russia\'s annexation of Crimea (2014) is the textbook hybrid warfare example: "little green men," cyber attacks, media manipulation, and political subversion',
      'China\'s "Three Warfares" strategy: psychological warfare, media warfare, and legal warfare (lawfare)',
      'Iran\'s proxy network: Hezbollah, Hamas, Houthis, Iraqi Shia militias — conducting hybrid warfare across the Middle East',
      'The US conducts hybrid warfare through special operations, CIA covert action, sanctions, cyber operations, and information operations',
      'Gray zone operations are designed to stay below the threshold of armed conflict — achieving strategic objectives without triggering a military response',
      'Attribution is deliberately ambiguous — this is the point',
    ],
    libertarianAngle: 'Hybrid warfare is designed to evade accountability. By staying below the threshold of "war," governments avoid the constitutional requirement for congressional authorization. The entire concept is built to circumvent democratic oversight. If the public doesn\'t know it\'s a war, the public can\'t object.',
    link: null,
  },
  {
    name: 'Shadow Wars & Special Operations',
    icon: '🗡️',
    budget: '$13.6B (SOCOM FY2024) + CIA covert action (classified)',
    keyFacts: [
      'US Special Operations Command (SOCOM) operates in 80+ countries',
      'Special operations forces (SOF): ~70,000 personnel across all branches',
      'SOCOM budget has tripled since 9/11',
      'Section 127e authority allows SOF to partner with and direct foreign forces with minimal congressional notification',
      'The US has conducted counterterrorism operations in at least 85 countries since 9/11 (Costs of War Project)',
      'Many of these operations are unknown to the American public and most members of Congress',
      'SOF casualties since 9/11: 600+ killed in action (higher per-capita rate than conventional forces)',
      'Joint Special Operations Command (JSOC) operates as a secret army with direct presidential authority',
    ],
    libertarianAngle: 'Special operations forces now operate as a global shadow military, conducting raids, strikes, and "advise and assist" missions in 80+ countries with minimal congressional oversight. The 2001 AUMF has been used to justify operations against groups that didn\'t exist on 9/11, in countries that have no connection to 9/11. This is permanent, global war with no democratic authorization.',
    link: null,
  },
  {
    name: 'Mass Surveillance & Signals Intelligence',
    icon: '👁️',
    budget: '$15B+ (NSA + related programs)',
    keyFacts: [
      'NSA collects billions of communications records daily from around the world',
      'PRISM: direct access to servers of Google, Apple, Microsoft, Facebook, Yahoo, and others',
      'XKEYSCORE: searches virtually all internet activity worldwide',
      'Upstream collection: NSA taps fiber optic cables carrying internet traffic in and out of the US',
      'Section 702 (FISA): allows warrantless surveillance of foreign targets, but sweeps up enormous amounts of American communications "incidentally"',
      'FBI conducts thousands of "backdoor searches" of Americans\' communications collected under Section 702 without warrants',
      'Five Eyes alliance (US, UK, Canada, Australia, New Zealand) shares surveillance globally — countries spy on each other\'s citizens to circumvent domestic restrictions',
      'Local police access surveillance tools (Stingrays, Clearview AI, social media monitoring) often purchased with DHS grants',
    ],
    libertarianAngle: 'Mass surveillance is the most direct assault on individual liberty in the modern era. The Fourth Amendment was written specifically to prevent the government from conducting the kinds of general searches that the NSA now performs routinely on every American. When the government can read your emails, track your phone, and analyze your social connections without a warrant, the concept of a "free society" becomes a polite fiction.',
    link: '/intelligence',
  },
]

const spendingShifts = [
  { category: 'Cyber operations', fy2010: '$3B', fy2024: '$20B+', change: '+567%' },
  { category: 'Special operations (SOCOM)', fy2010: '$9.8B', fy2024: '$13.6B', change: '+39%' },
  { category: 'Intelligence community', fy2010: '$80B', fy2024: '$92B+', change: '+15%' },
  { category: 'Drone procurement & ops', fy2010: '$5B', fy2024: '$10B+', change: '+100%' },
  { category: 'AI/ML military programs', fy2010: '~$0', fy2024: '$2B+', change: 'New' },
  { category: 'Space Force', fy2010: '$0 (part of AF)', fy2024: '$30B', change: 'New branch' },
  { category: 'PMC contracted services', fy2010: '$150B+', fy2024: '$150B+', change: 'Steady' },
  { category: 'Conventional ground forces', fy2010: 'Peak (Iraq/Afghan surge)', fy2024: 'Reduced', change: '↓' },
]

export default function ModernTacticsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Modern Warfare Tactics — Invisible Wars, Zero Accountability',
    description: 'How war changed: cyber, drones, sanctions, AI, PMCs, and hybrid warfare. No declarations, no frontlines, no accountability.',
    url: 'https://warcosts.org/modern-tactics',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-03-01',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Modern Warfare Tactics' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">Modern Warfare</h1>
      <p className="text-red-800 font-bold text-xl mb-4">War didn&rsquo;t end. It became invisible. That&rsquo;s the point.</p>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        The United States hasn&rsquo;t formally declared war since 1942. But it hasn&rsquo;t stopped fighting.
        War has evolved from armies on battlefields to cyber attacks, drone strikes, economic sanctions,
        information operations, AI-enabled targeting, private military contractors, and shadow special
        operations in 80+ countries. Modern warfare is designed to be invisible — to the public, to Congress,
        and to the constitutional requirement for democratic authorization.
      </p>
      <ShareButtons title="Modern Warfare — Invisible Wars, Zero Accountability" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { value: '0', label: 'War declarations since 1942' },
          { value: '85+', label: 'Countries with US operations' },
          { value: '$250B+', label: 'Annual unconventional warfare' },
          { value: '14,000+', label: 'Drone strikes since 2001' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
            <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-600 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: '70,000', label: 'Special operations forces' },
          { value: '12,000+', label: 'Sanctioned entities' },
          { value: '6,200+', label: 'Cyber Command personnel' },
          { value: '1,931', label: 'Private intel companies' },
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
          &ldquo;The genius of modern warfare, from the state&rsquo;s perspective, is that it has been made invisible.
          There are no declarations, no frontlines, no body bags on the evening news, no draft notices, no war bonds.
          The government conducts military operations in 85+ countries, kills people with drones in nations we&rsquo;re
          not at war with, wages cyber attacks against foreign infrastructure, and imposes sanctions that starve
          civilian populations — all without a vote in Congress, without public debate, and often without public
          knowledge. This is not an accident. Invisible wars require no democratic consent. That is the entire point.&rdquo;
        </p>
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">How War Changed</h2>
        <p>
          The transformation of warfare since World War II has been radical and deliberate. The key shifts:
        </p>
        <ul>
          <li><strong>No declarations:</strong> The last formal declaration of war was 1942. Since then: Korea, Vietnam, Grenada, Panama, Gulf War, Somalia, Bosnia, Kosovo, Afghanistan, Iraq, Libya, Syria, and dozens of smaller operations — all without a declaration of war.</li>
          <li><strong>No frontlines:</strong> Modern warfare happens everywhere and nowhere. Cyber attacks from NSA headquarters in Maryland. Drone strikes controlled from Creech AFB in Nevada. Sanctions imposed from Treasury in Washington. Special operations in 80+ countries.</li>
          <li><strong>No rules:</strong> The laws of war were written for state-on-state conflict. Cyber warfare, autonomous weapons, economic warfare, and information operations exist in legal gray zones with no binding international framework.</li>
          <li><strong>No accountability:</strong> When war is invisible, there is no political cost. No draft means no universal sacrifice. No casualties (on our side) means no public opposition. No congressional vote means no political accountability.</li>
          <li><strong>No end:</strong> The 2001 Authorization for Use of Military Force has been used to justify operations for 23+ years, in countries and against groups that didn&rsquo;t exist when it was passed. Modern war is permanent by design.</li>
        </ul>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 The 60-Word War</p>
          <p className="text-amber-800">
            The 2001 Authorization for Use of Military Force (AUMF) is 60 words long. It authorizes the president to
            use force against those who &ldquo;planned, authorized, committed, or aided&rdquo; the 9/11 attacks. These 60 words
            have been used to justify military operations in at least <strong>22 countries</strong> against groups including
            ISIS, al-Shabaab, and others that had no connection to 9/11. It is the most elastic grant of war power
            in American history — and it has never been repealed or updated.
          </p>
        </div>
      </div>

      {/* Warfare domains */}
      <div className="space-y-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-stone-800">The New Domains of War</h2>
        {warfareDomains.map(domain => (
          <div key={domain.name} className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{domain.icon}</span>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-800">{domain.name}</h3>
                <p className="text-sm text-red-700 font-semibold">{domain.budget}</p>
              </div>
            </div>

            <ul className="space-y-1 mb-4">
              {domain.keyFacts.map((fact, i) => (
                <li key={i} className="text-stone-600 text-sm flex items-start gap-2">
                  <span className="text-stone-400 mt-1">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>

            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <p className="text-sm font-semibold text-stone-700 mb-1">Libertarian Perspective:</p>
              <p className="text-stone-600 text-sm">{domain.libertarianAngle}</p>
            </div>

            {domain.link && (
              <Link href={domain.link} className="inline-block mt-3 text-blue-700 text-sm font-semibold hover:underline">
                Read full analysis →
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        {/* Spending shifts */}
        <h2 className="font-[family-name:var(--font-heading)]">Where the Money Is Moving</h2>
        <p>
          Defense spending is shifting from conventional forces to the new warfare domains. This table shows the trend:
        </p>
      </div>

      <div className="my-8 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left p-3 font-semibold text-stone-700">Category</th>
              <th className="text-right p-3 font-semibold text-stone-700">FY2010</th>
              <th className="text-right p-3 font-semibold text-stone-700">FY2024</th>
              <th className="text-right p-3 font-semibold text-stone-700">Change</th>
            </tr>
          </thead>
          <tbody>
            {spendingShifts.map(row => (
              <tr key={row.category} className="border-b border-stone-100">
                <td className="p-3 text-stone-700">{row.category}</td>
                <td className="p-3 text-right text-stone-500">{row.fy2010}</td>
                <td className="p-3 text-right font-bold text-red-700">{row.fy2024}</td>
                <td className="p-3 text-right text-stone-600">{row.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-6 my-8">
          <p className="font-bold text-red-900 font-[family-name:var(--font-heading)] text-lg mb-2">⚠️ The Accountability Gap</p>
          <p className="text-red-800">
            Traditional warfare had built-in accountability mechanisms: Congress had to declare war, the public could
            see casualties, voters could punish leaders for failed wars. Modern warfare has systematically eliminated
            every one of these checks. Cyber operations are classified. Drone strikes happen in secret. Sanctions
            are imposed by executive order. Special operations are conducted under presidential authority. Private
            contractors aren&rsquo;t counted in casualty figures. The 2001 AUMF provides permanent, global war authorization.
            The result is a permanent war machine that operates beyond democratic control.
          </p>
        </div>

        <div className="not-prose bg-stone-900 text-white rounded-xl p-6 my-8">
          <p className="text-lg italic leading-relaxed">
            &ldquo;The Founders didn&rsquo;t give the war power to Congress because they trusted Congress more than
            the president. They gave it to Congress because they wanted war to be <em>hard</em> — to require debate,
            deliberation, and democratic consent. Modern warfare has circumvented this design entirely. The president
            now wages war through drones, cyber weapons, sanctions, special forces, and intelligence agencies — all
            without a vote. The constitutional war power is dead. It was killed not by amendment but by innovation.&rdquo;
          </p>
        </div>

        {/* Key insight */}
        <h2 className="font-[family-name:var(--font-heading)]">The Key Insight: Invisibility Is the Strategy</h2>
        <p>
          Modern warfare wasn&rsquo;t made invisible by accident. Every innovation in 21st-century warfare has the
          same design feature: it reduces the political cost of violence. Drones eliminate American casualties.
          Contractors hide the true troop count. Cyber weapons are deniable. Sanctions don&rsquo;t look like war.
          Special operations happen in classified spaces. AI removes human decision-makers.
        </p>
        <p>
          Each of these innovations solves a problem — not a military problem, but a <em>political</em> problem.
          The problem they solve is democracy. If the public doesn&rsquo;t know about the war, they can&rsquo;t oppose it.
          If there are no American casualties, there&rsquo;s no anti-war movement. If there&rsquo;s no congressional vote,
          there&rsquo;s no political accountability. Modern warfare is optimized for permanence by minimizing democratic friction.
        </p>
        <p>
          This is the world we live in: a world of permanent, invisible war. The US government is conducting military
          operations in 85+ countries, spending $250+ billion per year on unconventional warfare, and doing so largely
          without the knowledge or consent of the American people. The question is not whether this is effective.
          The question is whether this is compatible with a free society.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Sources</h2>
        <ul className="text-sm">
          <li>Stephanie Savell, &ldquo;United States Counterterrorism Operations,&rdquo; Costs of War Project, Brown University (2023)</li>
          <li>Congressional Research Service, reports on AUMF, cyber operations, SOCOM, drones</li>
          <li>Bureau of Investigative Journalism, drone strike database</li>
          <li>Government Accountability Office, DOD contracting and AI spending reports</li>
          <li>Peterson Institute for International Economics, sanctions effectiveness research</li>
          <li>Washington Post, &ldquo;Top Secret America&rdquo; (2010)</li>
          <li>DOD budget requests (FY2010–FY2024)</li>
          <li>US Cyber Command and Space Force public reports</li>
          <li>Stanford Internet Observatory, platform manipulation reports</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Related Pages</h2>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {[
            { href: '/intelligence', label: 'Intelligence Agencies', desc: '$90B secret empire' },
            { href: '/analysis/drone-wars', label: 'Drone Wars', desc: '14,000+ strikes, minimal accountability' },
            { href: '/covert', label: 'Covert Operations', desc: 'The history of shadow warfare' },
            { href: '/contractors', label: 'Defense Contractors', desc: 'Who profits from invisible wars' },
            { href: '/spending', label: 'Military Spending', desc: '$900B annual defense budget' },
            { href: '/nuclear', label: 'Nuclear Weapons', desc: 'The ultimate government weapon' },
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
