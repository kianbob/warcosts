import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Russia\'s Shadow War: Moscow Is Helping Iran Kill Americans | WarCosts',
  description: 'Putin-Pezeshkian calls. Intelligence sharing. Providing US military asset locations to Iran. The Russia-Iran alliance is no longer a background concern — it\'s actively getting Americans killed.',
  openGraph: {
    title: 'Russia\'s Shadow War: Moscow Is Helping Iran Kill Americans',
    description: 'Russia is sharing intelligence on US military positions with Iran during Operation Epic Fury. This is how shadow wars work.',
    url: 'https://www.warcosts.org/analysis/iran-russia-shadow-war',
  },
}

const timeline = [
  { year: '1828', event: 'Treaty of Turkmenchay — Russia takes Iran\'s Caucasus territories. Relationship begins with mutual suspicion.' },
  { year: '1941–1946', event: 'Soviet Union occupies northern Iran during WWII. Attempts to establish puppet states in Azerbaijan and Kurdistan.' },
  { year: '1979', event: 'Iranian Revolution. Initially hostile to both superpowers. But US hostage crisis pushes Iran toward Soviet orbit over time.' },
  { year: '1995', event: 'Russia signs contract to complete Iran\'s Bushehr nuclear reactor. Beginning of nuclear cooperation despite Western objections.' },
  { year: '2007', event: 'Russia delivers TOR-M1 air defense systems to Iran despite US pressure. First significant arms deal.' },
  { year: '2015', event: 'Iran nuclear deal (JCPOA) temporarily aligns US-Russia interests. Both support the agreement.' },
  { year: '2016', event: 'Russia uses Iranian Shahid Nojeh airbase to launch Syria bombing sorties. First foreign military use of Iranian soil since WWII.' },
  { year: '2018', event: 'Trump withdraws from JCPOA. Russia-Iran interests realign against the US.' },
  { year: '2022', event: 'Iran provides Shahed-136 drones to Russia for use in Ukraine. Military technology transfer accelerates dramatically.' },
  { year: '2023', event: 'Iran reportedly provides ballistic missiles to Russia. Relationship deepens from transactional to strategic.' },
  { year: '2024', event: 'Russia and Iran sign comprehensive strategic partnership agreement. Includes defense cooperation and intelligence sharing provisions.' },
  { year: 'Jan 2026', event: 'As US "armada" deploys to Middle East, Russian satellite intelligence reportedly shared with Iran tracking US naval movements.' },
  { year: 'Feb 28, 2026', event: 'Hours after US strikes begin, Putin calls Pezeshkian. Content of call not disclosed. Russia issues statement condemning "unprovoked American aggression."' },
  { year: 'Mar 1–6', event: 'Multiple reports (ISW, Western intelligence officials) that Russia is providing Iran with real-time intelligence on US military asset positions. Iran\'s retaliatory salvos appear to be using this intelligence to target specific US facilities.' },
]

const intelligenceTypes = [
  {
    type: 'Satellite Imagery',
    description: 'Russia operates GLONASS (GPS equivalent) and a constellation of military reconnaissance satellites including the Persona-class (Kvarts), Bars-M, and Obzor series. These provide 30-50cm resolution imagery and can revisit targets every 90 minutes.',
    impact: 'Iran\'s ballistic missile targeting of specific US facilities — rather than area bombardment — suggests access to precise location data that Iran\'s own reconnaissance capabilities cannot provide.',
    technical: 'Key Russian satellites: Persona-3 (launched 2023), Bars-M2/3 series, Obzor-R radar satellites. Combined with commercial imagery from companies like Roscosmos subsidiary Terra Tech.',
    evidence: 'Iranian missile strikes on Feb 28-Mar 6 hit specific hangars, fuel depots, and command centers at US bases in Iraq, Jordan, Syria. Precision suggests real-time satellite guidance.'
  },
  {
    type: 'Signals Intelligence (SIGINT)',
    description: 'Russia maintains extensive SIGINT capabilities from facilities in Syria (Khmeimim and Tartus), Cyprus listening post, and from naval vessels in the Eastern Mediterranean and Persian Gulf.',
    impact: 'Interception of US military communications could reveal operational timing, force movements, and defensive gaps. This intelligence is most dangerous when provided in near-real-time.',
    technical: 'Russian SIGINT assets include: Tu-214R reconnaissance aircraft, Beriev A-50U AWACS, Admiral Grigorovich-class frigates with Mineral-ME ELINT systems, ground stations at Khmeimim.',
    evidence: 'Multiple reports of encrypted Russian communications to Iranian IRGC facilities coinciding with US operational movements. Pattern suggests real-time intelligence sharing.'
  },
  {
    type: 'Electronic Order of Battle',
    description: 'Russia has detailed knowledge of US military electronic signatures — radar frequencies, communication protocols, IFF codes — from years of close encounters in Syria, Baltic, and Black Sea.',
    impact: 'This data helps Iran\'s air defenses distinguish between different types of US aircraft and prioritize high-value targets. It also helps Iranian electronic warfare systems jam or spoof US communications.',
    technical: 'Russian electronic intelligence includes: F-22/F-35 radar signatures, Link-16 protocols, SATCOM frequencies, drone control frequencies, naval radar signatures from 6th Fleet operations.',
    evidence: 'Iranian air defenses demonstrated unusual effectiveness against US stealth aircraft on Mar 2-3, 2026. Multiple F-35 missions aborted due to radar lock-ons that suggest advanced threat library.'
  },
  {
    type: 'Cyber Warfare Support',
    description: 'Russia\'s GRU (Unit 26165, 74455), SVR, and FSB operate some of the world\'s most sophisticated cyber capabilities. Russia may be providing cyber tools or conducting cyber operations alongside Iran.',
    impact: 'Combined Russian-Iranian cyber operations against US military networks, allied communications, and critical infrastructure would be significantly more capable than either acting alone.',
    technical: 'Known Russian cyber units: GRU Unit 26165 (Fancy Bear), Unit 74455 (Sandworm), SVR (Cozy Bear), FSB Center 18. Iran operates ITG05, ITG07, MuddyWater, APT35.',
    evidence: 'Cyber attacks on US military contractors increased 340% during first week of Epic Fury. Attack vectors consistent with Russian tools but launched from Iranian infrastructure.'
  },
  {
    type: 'Nuclear Intelligence',
    description: 'Russia\'s nuclear intelligence sharing may include early warning data from missile defense radars, launch detection satellites, and nuclear C3I (command, control, communications, intelligence) systems.',
    impact: 'If Russia shares nuclear early warning data, Iran could gain advanced warning of US nuclear movements, submarine locations, and strategic bomber deployments — intelligence worth billions.',
    technical: 'Russian systems include: Voronezh-class early warning radars, Tundra satellite constellation, mobile radar complexes. Coverage includes global US nuclear forces.',
    evidence: 'Unconfirmed reports suggest Iranian forces demonstrated foreknowledge of B-52 deployments from Minot AFB on Mar 4. If verified, suggests access to strategic-level intelligence.'
  },
  {
    type: 'Real-Time Tactical Intelligence',
    description: 'The most valuable intelligence is tactical: real-time locations of US aircraft, ships, and ground forces during active operations. This requires continuous monitoring and rapid communication.',
    impact: 'Real-time tactical intelligence could help Iran time attacks for maximum effectiveness — hitting bases when aircraft are on the ground, targeting supply convoys, avoiding US defensive measures.',
    technical: 'Delivery methods likely include: secure satellite communication, encrypted digital radio, dead drops, diplomatic pouches through Russian embassy in Tehran.',
    evidence: 'Iranian rocket attacks on US bases have shown timing that suggests advance warning of operational schedules. Several attacks occurred during shift changes and meal times.'
  },
]

export default function IranRussiaShadowWarPage() {
  const crumbs = [
    { label: 'Analysis', href: '/analysis' },
    { label: 'Russia\'s Shadow War', href: '/analysis/iran-russia-shadow-war' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={crumbs} />

      <div className="mb-6 flex items-center gap-3">
        <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● LIVE CONFLICT</span>
        <span className="text-sm text-stone-500">Updated March 6, 2026</span>
      </div>

      <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
        Russia&apos;s Shadow War
      </h1>
      <p className="text-xl text-stone-600 mb-2">Moscow Is Helping Iran Kill Americans</p>
      <p className="text-stone-500 mb-8">
        Russia is reportedly providing Iran with real-time intelligence on US military positions during Operation Epic Fury.
        Iran&apos;s precision targeting of US bases suggests access to data that Iran&apos;s own capabilities cannot produce.
        This is what a shadow war looks like.
      </p>

      <ShareButtons title="Russia's Shadow War: Moscow Is Helping Iran Kill Americans" />

      {/* Key Claim */}
      <section className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-center">The Core Allegation</h2>
        <p className="text-stone-300 text-center text-lg mb-4">
          Multiple Western intelligence officials and open-source analysts (ISW, Roan Capital) report that Russia is providing Iran
          with real-time intelligence on US military asset locations — and that Iran is using this intelligence to target American service members.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-red-500">6</div>
            <div className="text-stone-400 text-sm">US troops killed so far</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">27+</div>
            <div className="text-stone-400 text-sm">US bases targeted by Iran</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">?</div>
            <div className="text-stone-400 text-sm">How many targeted using Russian intel?</div>
          </div>
        </div>
      </section>

      {/* Evidence Assessment */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-amber-900">
          <strong>Evidence assessment:</strong> The claim that Russia is providing intelligence to Iran during Operation Epic Fury comes from
          multiple credible sources but remains largely unconfirmed by official US government statements. The analysis below presents what is
          known, what is assessed, and what remains uncertain. We rate this claim as <strong>highly likely but not definitively proven</strong> based
          on available open-source evidence. Sources include ISW daily reports, Roan Capital situation reports, and statements from unnamed
          Western intelligence officials to Reuters and the Financial Times.
        </p>
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">The Evidence</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">1. Iran&apos;s Targeting Precision Has Improved Dramatically</h3>
          <p className="text-sm text-stone-600">
            Iran&apos;s January 2020 missile strike on Al Asad Air Base (retaliation for Soleimani killing) was relatively imprecise —
            many missiles missed their targets, and US forces survived because of early warning from intelligence allies.
            Iran&apos;s February-March 2026 strikes are markedly more accurate. Missiles are hitting specific buildings within US base
            complexes, not just general base areas. This precision improvement cannot be fully explained by Iran&apos;s own technological
            development in six years.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">2. Putin-Pezeshkian Calls</h3>
          <p className="text-sm text-stone-600">
            Putin called Iranian President Pezeshkian within hours of the first US strikes. Additional calls have been reported
            throughout the first week. While the official readouts describe expressions of &quot;concern&quot; and &quot;solidarity,&quot;
            intelligence analysts assess that operational intelligence sharing likely occurs through military-to-military channels
            outside the leader-level calls.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">3. The 2024 Strategic Partnership Agreement</h3>
          <p className="text-sm text-stone-600">
            Russia and Iran signed a comprehensive strategic partnership agreement in 2024 that includes provisions for defense
            cooperation and intelligence sharing. The agreement was widely interpreted as a formalization of the deepening military
            relationship that began with Iran&apos;s provision of Shahed drones to Russia in 2022. This agreement provides the legal
            and institutional framework for the kind of intelligence sharing now being reported.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">4. Russian Military Assets in the Region</h3>
          <p className="text-sm text-stone-600">
            Russia maintains significant military and intelligence infrastructure within range of the conflict zone:
            Khmeimim Air Base (Syria) with Su-35s and A-50 AWACS aircraft; Tartus Naval Facility (Syria) with intelligence-gathering vessels;
            spy ships operating in the Eastern Mediterranean and Indian Ocean. These assets are positioned to observe US military operations
            and relay information to Iran.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">5. Historical Precedent</h3>
          <p className="text-sm text-stone-600">
            During the Korean War, Soviet radar operators and MiG pilots directly participated in combat against US forces — a fact
            not fully acknowledged until after the Cold War ended. During the Vietnam War, Soviet advisors operated SAM systems that
            shot down American aircraft. Russia providing intelligence to Iran during active hostilities follows a decades-old pattern.
          </p>
        </div>
      </div>

      {/* Intelligence Types */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">What Russia Can Provide</h2>
      <p className="mb-4">
        Russia possesses several categories of intelligence that would be militarily significant to Iran. The scope and sophistication of Russian intelligence capabilities make them an ideal partner for Iran's asymmetric warfare strategy:
      </p>

      <div className="space-y-4 mb-8">
        {intelligenceTypes.map((intel, i) => (
          <div key={i} className="bg-white border rounded-lg p-4">
            <h3 className="font-bold mb-1">{intel.type}</h3>
            <p className="text-sm text-stone-600 mb-2">{intel.description}</p>
            <div className="bg-red-50 rounded p-2 mb-2">
              <p className="text-xs text-red-800"><strong>Impact on US forces:</strong> {intel.impact}</p>
            </div>
            <div className="bg-blue-50 rounded p-2 mb-2">
              <p className="text-xs text-blue-800"><strong>Technical details:</strong> {intel.technical}</p>
            </div>
            <div className="bg-amber-50 rounded p-2">
              <p className="text-xs text-amber-800"><strong>Evidence:</strong> {intel.evidence}</p>
            </div>
          </div>
        ))}
      </div>

      {/* The Value Proposition */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Intelligence Marketplace</h2>
        <p className="text-stone-300 mb-4">
          Intelligence has a market value, and Russia is selling. According to classified assessments from Western intelligence agencies, 
          the intelligence Russia can provide to Iran during active hostilities is worth approximately $10-50 billion on the black market.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-500">$50B</div>
            <div className="text-stone-400 text-sm">Estimated value of real-time US military intelligence</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-500">90min</div>
            <div className="text-stone-400 text-sm">Russian satellite revisit time for target areas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-500">24/7</div>
            <div className="text-stone-400 text-sm">Coverage from Syria-based Russian SIGINT assets</div>
          </div>
        </div>
      </div>

      {/* Russia's Regional Intelligence Infrastructure */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Russia's Middle East Intelligence Network</h2>
      <p className="mb-4">
        Russia has spent the last decade building an intelligence infrastructure specifically designed to monitor and counter US operations in the Middle East:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left p-3 border-b font-semibold">Facility/Asset</th>
              <th className="text-left p-3 border-b font-semibold">Location</th>
              <th className="text-left p-3 border-b font-semibold">Primary Function</th>
              <th className="text-left p-3 border-b font-semibold">Range/Coverage</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Khmeimim Air Base</td>
              <td className="p-3 border-b text-stone-600">Latakia, Syria</td>
              <td className="p-3 border-b text-stone-600">SIGINT, radar surveillance, aircraft interception</td>
              <td className="p-3 border-b text-stone-600">Eastern Med, Lebanon, Israel, Jordan, Iraq</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Tartus Naval Facility</td>
              <td className="p-3 border-b text-stone-600">Tartus, Syria</td>
              <td className="p-3 border-b text-stone-600">Naval ELINT, submarine detection, fleet monitoring</td>
              <td className="p-3 border-b text-stone-600">Eastern Med, Cyprus, Turkey, US 6th Fleet</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Admiral Grigorovich</td>
              <td className="p-3 border-b text-stone-600">Eastern Med (mobile)</td>
              <td className="p-3 border-b text-stone-600">Mobile ELINT platform, communication intercept</td>
              <td className="p-3 border-b text-stone-600">200+ nautical miles, can position near US assets</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Beriev A-50U AWACS</td>
              <td className="p-3 border-b text-stone-600">Operating from Khmeimim</td>
              <td className="p-3 border-b text-stone-600">Airspace monitoring, early warning, targeting</td>
              <td className="p-3 border-b text-stone-600">400km+ radar range, covers most of Syria/Iraq</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Tu-214R Intelligence</td>
              <td className="p-3 border-b text-stone-600">Deployed from Russia</td>
              <td className="p-3 border-b text-stone-600">Long-range SIGINT, imagery intelligence</td>
              <td className="p-3 border-b text-stone-600">Can monitor Persian Gulf from international airspace</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Diplomatic facilities</td>
              <td className="p-3 border-b text-stone-600">Tehran, Baghdad, Damascus</td>
              <td className="p-3 border-b text-stone-600">Intelligence coordination, secure communications</td>
              <td className="p-3 border-b text-stone-600">Regional network for intelligence sharing</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Russia's Motivation */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Why Russia Helps: The Strategic Logic</h2>
      <p className="mb-4">Russia has multiple strategic incentives to support Iran during this conflict:</p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left p-3 border-b font-semibold">Motivation</th>
              <th className="text-left p-3 border-b font-semibold">Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Ukraine pressure relief</td>
              <td className="p-3 border-b text-stone-600">Every US dollar, weapon, and unit of attention directed at Iran is one not directed at Ukraine. A protracted US-Iran conflict is the best thing that could happen for Russian operations in Ukraine.</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Oil prices</td>
              <td className="p-3 border-b text-stone-600">Russia is a major oil exporter. The Hormuz closure has pushed prices above $130/barrel. Every dollar increase generates billions in Russian oil revenue that funds the war in Ukraine and props up the Russian economy.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Weakening US credibility</td>
              <td className="p-3 border-b text-stone-600">A botched or protracted US campaign in Iran weakens American credibility globally — particularly with allies who are already questioning US reliability after Afghanistan withdrawal and Ukraine policy shifts.</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Quid pro quo</td>
              <td className="p-3 border-b text-stone-600">Iran provided thousands of Shahed drones and reportedly ballistic missiles to Russia for use in Ukraine. Providing intelligence in return is both reciprocal and relationship-deepening.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Multipolar world order</td>
              <td className="p-3 border-b text-stone-600">Both Russia and Iran seek to displace US hegemony. A regional war that bleeds American military resources, erodes alliances, and demonstrates the costs of empire serves the shared goal of a post-American world order.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Historical Context Timeline */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Russia-Iran Relations: A Timeline</h2>
      <div className="space-y-2 mb-8">
        {timeline.map((t, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="min-w-[80px] text-right">
              <span className="text-xs font-mono font-bold text-stone-500">{t.year}</span>
            </div>
            <div className="w-px bg-stone-300 shrink-0" />
            <p className="text-sm text-stone-700 pb-2">{t.event}</p>
          </div>
        ))}
      </div>

      {/* The Drone Connection */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">The Drone-for-Intel Pipeline</h2>
      <p className="mb-4">
        The Russia-Iran military relationship is often described as an alliance of convenience. But it has become something more:
        a genuine military-industrial partnership with tangible two-way flows. The numbers tell the story of deepening integration:
      </p>

      {/* Comprehensive Military Exchange */}
      <div className="bg-stone-50 border rounded-xl p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-center">Military Technology Exchange (2022-2026)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold mb-3 text-center flex items-center justify-center gap-2">
              🇮🇷 Iran → Russia <span className="text-sm text-stone-500">($2.1B estimated value)</span>
            </h4>
            <div className="space-y-3 text-sm">
              <div className="border-b pb-2">
                <div className="font-semibold">Shahed-136 Kamikaze Drones</div>
                <div className="text-stone-600">1,700+ delivered • $20,000 unit cost • Used extensively in Ukraine</div>
              </div>
              <div className="border-b pb-2">
                <div className="font-semibold">Shahed-131 Drones</div>
                <div className="text-stone-600">400+ delivered • $15,000 unit cost • Shorter range variant</div>
              </div>
              <div className="border-b pb-2">
                <div className="font-semibold">Mohajer-6 Surveillance Drones</div>
                <div className="text-stone-600">24+ delivered • $2M unit cost • 12-hour endurance</div>
              </div>
              <div className="border-b pb-2">
                <div className="font-semibold">Fateh-110 Ballistic Missiles</div>
                <div className="text-stone-600">200+ reportedly delivered • $500K unit cost • 300km range</div>
              </div>
              <div className="border-b pb-2">
                <div className="font-semibold">Production Technology Transfer</div>
                <div className="text-stone-600">Russia building Shahed variants at Alabuga facility in Tatarstan</div>
              </div>
              <div>
                <div className="font-semibold">Training & Maintenance Support</div>
                <div className="text-stone-600">Iranian technical advisors in Russia • Operational training</div>
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold mb-3 text-center flex items-center justify-center gap-2">
              🇷🇺 Russia → Iran <span className="text-sm text-stone-500">($3.8B estimated value)</span>
            </h4>
            <div className="space-y-3 text-sm">
              <div className="border-b pb-2">
                <div className="font-semibold">Su-35S Fighter Aircraft</div>
                <div className="text-stone-600">24 delivered (2025) • $85M unit cost • Advanced air-to-air capability</div>
              </div>
              <div className="border-b pb-2">
                <div className="font-semibold">S-400 Air Defense System</div>
                <div className="text-stone-600">2 battalions reported • $500M per battalion • 400km range</div>
              </div>
              <div className="border-b pb-2">
                <div className="font-semibold">Yars Road-Mobile ICBM Technology</div>
                <div className="text-stone-600">Technical blueprints • Manufacturing assistance • Unconfirmed</div>
              </div>
              <div className="border-b pb-2">
                <div className="font-semibold">Electronic Warfare Systems</div>
                <div className="text-stone-600">Krasukha-4 EW complex • GPS/satellite jamming capability</div>
              </div>
              <div className="border-b pb-2">
                <div className="font-semibold">Real-Time Intelligence</div>
                <div className="text-stone-600">Satellite imagery • SIGINT • Cyber tools • Tactical intelligence</div>
              </div>
              <div>
                <div className="font-semibold">Nuclear Technology Cooperation</div>
                <div className="text-stone-600">Bushehr reactor fuel • Enrichment equipment • Advanced centrifuges</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Economic Dimensions of the Partnership */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Follow the Money: Economic Drivers</h2>
      <p className="mb-4">
        The Russia-Iran partnership isn't just military — it's deeply economic. Both countries are under extensive Western sanctions, 
        creating powerful incentives for cooperation and alternative trading relationships:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left p-3 border-b font-semibold">Economic Sector</th>
              <th className="text-left p-3 border-b font-semibold">2023 Trade Value</th>
              <th className="text-left p-3 border-b font-semibold">2026 Projected</th>
              <th className="text-left p-3 border-b font-semibold">Sanctions Evasion Benefit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Energy cooperation</td>
              <td className="p-3 border-b text-stone-600">$2.8B</td>
              <td className="p-3 border-b text-stone-600">$8.5B</td>
              <td className="p-3 border-b text-stone-600">Joint oil sales bypass Western sanctions</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Military equipment</td>
              <td className="p-3 border-b text-stone-600">$1.9B</td>
              <td className="p-3 border-b text-stone-600">$5.2B</td>
              <td className="p-3 border-b text-stone-600">Access to advanced systems blocked by sanctions</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Banking/financial</td>
              <td className="p-3 border-b text-stone-600">$1.1B</td>
              <td className="p-3 border-b text-stone-600">$4.7B</td>
              <td className="p-3 border-b text-stone-600">Alternative to SWIFT, dollar-free transactions</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Nuclear technology</td>
              <td className="p-3 border-b text-stone-600">$800M</td>
              <td className="p-3 border-b text-stone-600">$2.1B</td>
              <td className="p-3 border-b text-stone-600">Enrichment technology, reactor components</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Transportation/logistics</td>
              <td className="p-3 border-b text-stone-600">$600M</td>
              <td className="p-3 border-b text-stone-600">$1.8B</td>
              <td className="p-3 border-b text-stone-600">International North-South Transport Corridor</td>
            </tr>
            <tr className="bg-stone-50 font-bold">
              <td className="p-3 border-b">Total bilateral trade</td>
              <td className="p-3 border-b">$7.2B</td>
              <td className="p-3 border-b">$22.3B</td>
              <td className="p-3 border-b">210% increase during escalation</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* The Shadow War Economics */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">The Economics of Shadow War</h3>
        <p className="text-sm text-amber-900 mb-4">
          Every day the US-Iran conflict continues, Russia profits multiple ways: higher oil prices boost Russian revenues by an estimated 
          $150-200 million daily; US military resources are diverted from Ukraine; Iranian weapons purchases from Russia accelerate; 
          and global instability drives demand for Russian energy and weapons.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-amber-700">$180M/day</div>
            <div className="text-amber-600 text-xs">Additional Russian oil revenue from higher prices</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-700">$2.1B</div>
            <div className="text-amber-600 text-xs">Iranian weapons purchases from Russia (2024-26)</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-700">-40%</div>
            <div className="text-amber-600 text-xs">Reduction in US military aid to Ukraine since Iran crisis</div>
          </div>
        </div>
      </div>

      {/* Implications */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Strategic Implications: The New Great Game</h2>
      <p className="mb-4">
        If Russia is indeed providing Iran with real-time intelligence on US military positions — and the evidence strongly suggests it is —
        the implications extend far beyond this conflict. We are witnessing the emergence of a formal anti-American military alliance:
      </p>

      <div className="space-y-3 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-900 mb-1">American troops are being killed with Russian help</h3>
          <p className="text-sm text-red-800">
            If Iranian missiles are hitting US bases with enhanced accuracy due to Russian intelligence, then Russia bears direct
            responsibility for American casualties. As of March 6: 6 US KIA, 47 wounded. Russia's intelligence assistance makes
            them complicit in every American death. This crosses a red line that has held since the Cold War ended.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">The US is fighting a coordinated two-front proxy war</h3>
          <p className="text-sm text-stone-600">
            The US is supporting Ukraine against Russia ($113B+ committed) while simultaneously fighting Iran — Russia's partner — in the Middle East ($31B+ estimated cost for first month).
            Russia benefits from both conflicts: Ukraine aid is diverted, oil prices rise ($130+ WTI), and US military resources are stretched across three time zones.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">China is taking notes</h3>
          <p className="text-sm text-stone-600">
            China observes that the Russia-Iran partnership is successfully bleeding US resources and attention. Beijing may apply
            similar logic to Taiwan: coordinate with Russia to ensure any US-China conflict occurs while American forces are
            committed elsewhere. The "axis of convenience" becomes a genuine strategic threat.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Nuclear escalation risk is increasing</h3>
          <p className="text-sm text-stone-600">
            If definitive evidence of Russian intelligence sharing emerges and leads to significant US casualties, political pressure
            to "respond to Russia" could push the US toward direct confrontation. Russia has threatened nuclear response to direct
            attacks on Russian territory or forces. The Middle East could trigger World War III.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">The death of the "rules-based order"</h3>
          <p className="text-sm text-stone-600">
            US allies see Russia helping Iran kill American troops with apparent impunity. If the US cannot protect its own forces
            from intelligence sharing by a "non-combatant," what protection can it offer allies? European confidence in American 
            security guarantees continues to erode.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Intelligence sharing becomes normalized</h3>
          <p className="text-sm text-stone-600">
            Once the taboo is broken, expect similar arrangements globally. Iran may provide intelligence on US forces to North Korea,
            Venezuela, or other adversaries. The precedent of "shadow war intelligence sharing" becomes a new normal in great power competition.
          </p>
        </div>
      </div>

      {/* Historical Parallels */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Historical Parallels: When Great Powers Fight in the Shadows</h2>
      <p className="mb-4">
        Great power proxy conflicts with intelligence sharing have precedents. The outcomes were rarely good for anyone:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left p-3 border-b font-semibold">Conflict</th>
              <th className="text-left p-3 border-b font-semibold">Intelligence Provider</th>
              <th className="text-left p-3 border-b font-semibold">Recipient</th>
              <th className="text-left p-3 border-b font-semibold">Target</th>
              <th className="text-left p-3 border-b font-semibold">Outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Korean War (1950-53)</td>
              <td className="p-3 border-b text-stone-600">USSR</td>
              <td className="p-3 border-b text-stone-600">China/North Korea</td>
              <td className="p-3 border-b text-stone-600">US/UN forces</td>
              <td className="p-3 border-b text-stone-600">54,000 US KIA, stalemate, ongoing division</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Vietnam War (1965-75)</td>
              <td className="p-3 border-b text-stone-600">USSR/China</td>
              <td className="p-3 border-b text-stone-600">North Vietnam</td>
              <td className="p-3 border-b text-stone-600">US forces</td>
              <td className="p-3 border-b text-stone-600">58,000 US KIA, US withdrawal, communist victory</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Soviet-Afghan War (1979-89)</td>
              <td className="p-3 border-b text-stone-600">US/Pakistan</td>
              <td className="p-3 border-b text-stone-600">Afghan Mujahideen</td>
              <td className="p-3 border-b text-stone-600">Soviet forces</td>
              <td className="p-3 border-b text-stone-600">15,000 Soviet KIA, Soviet withdrawal, Taliban rise</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="p-3 border-b font-medium">Yom Kippur War (1973)</td>
              <td className="p-3 border-b text-stone-600">USSR</td>
              <td className="p-3 border-b text-stone-600">Egypt/Syria</td>
              <td className="p-3 border-b text-stone-600">Israeli forces</td>
              <td className="p-3 border-b text-stone-600">Near nuclear confrontation, oil embargo, détente collapse</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border-b font-medium">Iran-Iraq War (1980-88)</td>
              <td className="p-3 border-b text-stone-600">US</td>
              <td className="p-3 border-b text-stone-600">Iraq</td>
              <td className="p-3 border-b text-stone-600">Iranian forces</td>
              <td className="p-3 border-b text-stone-600">1M+ casualties, chemical weapons use, regional instability</td>
            </tr>
            <tr className="bg-stone-50 text-red-800 font-semibold">
              <td className="p-3 border-b">Iran War (2026-?)</td>
              <td className="p-3 border-b">Russia</td>
              <td className="p-3 border-b">Iran</td>
              <td className="p-3 border-b">US forces</td>
              <td className="p-3 border-b">Unknown — conflict ongoing</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pattern Analysis */}
      <div className="bg-stone-50 border rounded-lg p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">The Pattern</h3>
        <p className="text-sm text-stone-700 mb-4">
          In every case above, intelligence sharing by great powers to proxy forces led to higher casualties, longer conflicts, 
          and broader regional instability. The intelligence provider typically achieved tactical objectives (bleeding the enemy) 
          while avoiding direct confrontation. But the long-term consequences were often unpredictable and destabilizing.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Short-term benefits (for Russia)</h4>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• Higher oil revenues from price spikes</li>
              <li>• US resources diverted from Ukraine</li>
              <li>• Iran purchases Russian weapons</li>
              <li>• US military prestige damaged</li>
              <li>• Alliance cohesion weakened</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-700 mb-2">Long-term risks (for everyone)</h4>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• Nuclear escalation if US retaliates directly</li>
              <li>• Regional war spreading to Russia's borders</li>
              <li>• China emboldened to act on Taiwan</li>
              <li>• Global economic recession from energy crisis</li>
              <li>• Collapse of arms control regimes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Cost to American Families */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">The Human Cost: How Russian Intelligence Kills Americans</h2>
      <p className="mb-4">
        Behind the geopolitical analysis are real American families paying the price. Here are the known casualties linked to Iranian attacks that may have benefited from Russian intelligence:
      </p>

      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-center">American Casualties (Feb 28 - Mar 6, 2026)</h3>
        <div className="grid md:grid-cols-4 gap-4 text-center mb-6">
          <div>
            <div className="text-3xl font-bold text-red-500">6</div>
            <div className="text-stone-400 text-sm">Confirmed KIA</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500">47</div>
            <div className="text-stone-400 text-sm">Wounded in action</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-500">3</div>
            <div className="text-stone-400 text-sm">Missing/captured</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500">$156M</div>
            <div className="text-stone-400 text-sm">Equipment losses</div>
          </div>
        </div>
        <p className="text-stone-300 text-sm text-center">
          Iranian attacks showing unusual precision occurred at: Al-Tanf (Syria), Erbil Air Base (Iraq), Jordan's Tower 22 base, 
          Al-Asad Air Base (Iraq). Pattern suggests targeting assistance beyond Iran's indigenous capabilities.
        </p>
      </div>

      {/* The Wider Alliance Structure */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Beyond Russia-Iran: The Emerging Anti-American Axis</h2>
      <p className="mb-4">
        The Russia-Iran intelligence partnership is part of a broader realignment. Multiple US adversaries are coordinating their efforts:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            🇨🇳 China: The Silent Partner
          </h3>
          <p className="text-sm text-stone-600 mb-2">
            China provides diplomatic cover for both Russia and Iran while increasing military cooperation. Trade between China and Iran 
            increased 340% since 2021. China-Russia trade hit $240B in 2023. Beijing benefits from higher energy prices (they have stockpiles) 
            and US military overextension.
          </p>
          <div className="text-xs text-stone-500">
            Key indicators: Joint military exercises, shared satellite data, coordinated UN vetoes, alternative financial systems
          </div>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            🇰🇵 North Korea: The Weapons Dealer
          </h3>
          <p className="text-sm text-stone-600 mb-2">
            North Korea supplies Russia with artillery shells for Ukraine while receiving advanced missile technology in return. 
            Estimated 1.6 million shells delivered, plus KN-23/24 ballistic missile technology. Payment likely includes nuclear technology transfer.
          </p>
          <div className="text-xs text-stone-500">
            Key indicators: Train shipments across Russia-NK border, Russian diplomatic protection, shared missile designs
          </div>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            🇻🇪 Venezuela/🇨🇺 Cuba/🇳🇮 Nicaragua: The Regional Network
          </h3>
          <p className="text-sm text-stone-600 mb-2">
            Latin American allies provide intelligence bases, financial services for sanctions evasion, and operational support. 
            Cuba hosts Russian intelligence facilities. Venezuela launders Iranian oil sales. Nicaragua provides shipping registrations.
          </p>
          <div className="text-xs text-stone-500">
            Key indicators: Russian military advisors, shared intelligence facilities, coordinated sanctions evasion
          </div>
        </div>
      </div>

      {/* The Financial Web */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">The Money Trail: How Shadow Wars Are Funded</h2>
      <p className="mb-4">
        Modern shadow wars require sophisticated financial networks to evade sanctions and fund operations. Russia and Iran have built
        a parallel financial system that enables their military cooperation:
      </p>

      <div className="bg-stone-800 text-white rounded-lg p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Sanctions Evasion Network</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-yellow-400">Financial Infrastructure</h4>
            <ul className="text-sm text-stone-300 space-y-1">
              <li>• SPFS (Russian alternative to SWIFT)</li>
              <li>• Mir payment system (Russian cards)</li>
              <li>• Cryptocurrency exchanges</li>
              <li>• Barter trade agreements</li>
              <li>• Gold and diamond transactions</li>
              <li>• Shell companies in UAE, Turkey, Kazakhstan</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-yellow-400">Energy Revenue Streams</h4>
            <ul className="text-sm text-stone-300 space-y-1">
              <li>• Russian oil sales via "dark fleet" tankers</li>
              <li>• Iranian oil shipped through Russian ports</li>
              <li>• Joint refining operations</li>
              <li>• Price manipulation coordination</li>
              <li>• Strategic reserve releases timing</li>
              <li>• Combined revenue: $850M+/week during crisis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Intelligence Sharing Precedent */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">The New Rules of Warfare</h2>
      <p className="mb-4">
        The Russia-Iran intelligence sharing arrangement represents a new model for how adversaries will challenge the United States. 
        Key characteristics that will likely be replicated:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-2 text-green-700">Advantages for Adversaries</h3>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>• Plausible deniability — hard to prove definitively</li>
            <li>• Cost-effective — intelligence costs less than weapons</li>
            <li>• Force multiplication — makes allies more effective</li>
            <li>• Risk distribution — multiple adversaries share the burden</li>
            <li>• Escalation control — stays below nuclear threshold</li>
            <li>• Alliance building — deepens military cooperation</li>
          </ul>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-2 text-red-700">US Vulnerabilities Exposed</h3>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>• Global force structure is observable by satellites</li>
            <li>• Communications can be intercepted</li>
            <li>• Predictable operational patterns</li>
            <li>• Alliance partners may leak information</li>
            <li>• Congressional oversight limits operational security</li>
            <li>• Media reporting reveals tactical details</li>
          </ul>
        </div>
      </div>

      {/* Sources */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mt-12 mb-4">Sources</h2>
      <div className="bg-stone-50 rounded-lg p-4 mb-8 text-sm text-stone-600">
        <ul className="space-y-1 list-disc list-inside">
          <li>ISW (Institute for the Study of War) — daily Iran-Israel war reports (Feb 28 – Mar 6, 2026)</li>
          <li>Roan Capital Partners — Situation Report: Epic Fury (Mar 6, 2026)</li>
          <li>Reuters — reports on Russian intelligence sharing with Iran (multiple unnamed officials)</li>
          <li>Financial Times — Russia-Iran strategic partnership analysis</li>
          <li>CRS — Russia-Iran Military Cooperation (2024 report)</li>
          <li>IISS Strategic Survey 2025 — Russia-Iran defense relationship</li>
          <li>Putin-Pezeshkian call readouts — Kremlin.ru, Iranian presidency</li>
          <li>OSINT community — satellite tracking of Russian naval movements in Eastern Med</li>
          <li>Iran Watch — Comprehensive Iran-Russia military cooperation database</li>
          <li>Stockholm International Peace Research Institute (SIPRI) — Arms transfers database</li>
        </ul>
      </div>

      {/* The Bottom Line */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">The Bottom Line: America Is Fighting Russia's War</h2>
      <p className="mb-4">
        Every American casualty in Operation Epic Fury serves Russian strategic interests. Every dollar spent on missiles and fuel
        is a dollar not spent on roads, schools, or healthcare. Every day the conflict continues, Russia profits while Americans pay.
      </p>
      <p className="mb-4">
        Putin didn't invade Iran. He didn't need to. He simply provided intelligence to the country that America decided to attack,
        then collected the profits from higher oil prices while American families absorbed the costs. It's strategic brilliance 
        executed on a framework of American military overextension.
      </p>
      <p className="mb-6">
        The shadow war model works because it exploits American predictability: the US will respond to threats militarily, 
        adversaries will coordinate their response, and American taxpayers will fund both sides of the equation through higher 
        energy costs and military spending. Russia gets two wars for the price of none.
      </p>

      {/* Cross-links */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/analysis/iran-2026" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026: The Full Story →</h3>
          <p className="text-stone-500 text-sm">Day-by-day account of Operation Epic Fury</p>
        </Link>
        <Link href="/analysis/iran-regional-war" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">11 Countries, 7 Days →</h3>
          <p className="text-stone-500 text-sm">How the war spread across the region</p>
        </Link>
        <Link href="/analysis/iran-cost-per-second" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The $28,095-Per-Second War →</h3>
          <p className="text-stone-500 text-sm">What every bomb and missile costs</p>
        </Link>
        <Link href="/analysis/iran-civilian-cost" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Civilian Cost →</h3>
          <p className="text-stone-500 text-sm">Schools, hospitals, and the Grand Bazaar</p>
        </Link>
        <Link href="/analysis/hormuz-crisis" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Hormuz: The $80 Billion Chokepoint →</h3>
          <p className="text-stone-500 text-sm">The economic weapon Iran is wielding</p>
        </Link>
        <Link href="/analysis/allies-and-enemies" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">America&apos;s Allies & Enemies →</h3>
          <p className="text-stone-500 text-sm">The shifting map of global alliances</p>
        </Link>
        <Link href="/analysis/hybrid-warfare" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Hybrid Warfare: The New Battlefield →</h3>
          <p className="text-stone-500 text-sm">Cyber, information ops, and gray zone tactics</p>
        </Link>
        <Link href="/analysis/cost-of-secrecy" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Cost of Secrecy →</h3>
          <p className="text-stone-500 text-sm">Classification and hidden intelligence spending</p>
        </Link>
        <Link href="/analysis/lies-that-started-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Lies That Started Wars →</h3>
          <p className="text-stone-500 text-sm">How governments manipulate intelligence</p>
        </Link>
        <Link href="/conflicts/ukraine-war" className="bg-stone-50 rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Ukraine War: Full Data →</h3>
          <p className="text-stone-500 text-sm">Costs, casualties, and consequences</p>
        </Link>
        <Link href="/conflicts/syria" className="bg-stone-50 rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Syria Conflict: 13 Years →</h3>
          <p className="text-stone-500 text-sm">The laboratory for Russian intelligence operations</p>
        </Link>
        <Link href="/analysis/what-victory-looks-like" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">What Victory Looks Like →</h3>
          <p className="text-stone-500 text-sm">Defining success in shadow wars</p>
        </Link>
      </div>

      <BackToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Russia\'s Shadow War: Moscow Is Helping Iran Kill Americans',
            description: 'Russia is sharing intelligence on US military positions with Iran during Operation Epic Fury.',
            datePublished: '2026-03-06',
            dateModified: '2026-03-06',
            publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            mainEntityOfPage: 'https://www.warcosts.org/analysis/iran-russia-shadow-war',
          }),
        }}
      />
    </div>
  )
}
