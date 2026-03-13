import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: '12+ Countries, 13 Days: How a Two-Country War Became a Regional Catastrophe | WarCosts',
  description: 'Iran mining the Strait of Hormuz. 16 minelayers destroyed. Dubai airport struck. Oman port fires. Oil past $100. 1,348 killed in Iran, 687 in Lebanon. Updated March 12, 2026 (Day 13).',
  openGraph: {
    title: '12+ Countries, 13 Days: How a Two-Country War Became a Regional Catastrophe',
    description: 'Iran mining Hormuz. Dubai airport hit. Oil past $100. 5,000+ targets struck. $11.3B in 6 days. Updated Day 13.',
    url: 'https://www.warcosts.org/analysis/iran-regional-war',
  },
}

const countries = [
  {
    name: 'Iran',
    flag: '🇮🇷',
    role: 'Primary target',
    casualties: '1,348 killed, 17,000 injured (Day 13 — Iran UN rep)',
    keyEvents: [
      'Supreme Leader Khamenei killed in February 28 decapitation strike',
      '5,000+ targets struck by US and Israeli forces through Day 11',
      'Nuclear facilities at Natanz, Fordow, Isfahan hit; oil refineries struck Day 8',
      '30+ naval vessels sunk; IRGC Navy largely destroyed',
      'Strait of Hormuz: Iran laying naval mines (5,000+ inventory); 16 minelayers destroyed by CENTCOM',
      '168 schoolchildren killed at Minab elementary school',
      'Shahed Aviation Industries drone factory in Isfahan destroyed Day 9',
      'Basij/security sites struck in Tehran residential Districts 1, 14, 15, 16',
      'Top nuclear scientists killed (Israel, Day 13); IRGC intel building struck NW Iran',
      'Iran still exporting 2.1M bbl/day through Strait (slightly MORE than pre-war)',
      '~15M bbl/day crude + 4.5M bpd refined fuels stranded in Gulf; 80% traffic drop',
      'Tehran sets 3 conditions for peace (Day 13)',
      'Trump demands unconditional surrender; Iran refuses',
    ],
    economicImpact: 'Economy shattered. Rial in freefall. Oil infrastructure now targeted (Tondgouyan, Shahran refineries). ~15M bbl/day crude stranded in Gulf. Iran paradoxically still exporting 2.1M bbl/day. Banking system disrupted.',
  },
  {
    name: 'Israel',
    flag: '🇮🇱',
    role: 'Co-belligerent (leading strike partner)',
    casualties: '15 killed, 2,000 wounded',
    keyEvents: [
      'Conducted 2,500+ strikes on Iran alongside US forces',
      'Struck the Minab school (IRGC facility nearby was target)',
      'Facing massive Iranian missile and drone retaliation',
      'Iron Dome, David\'s Sling, Arrow 3 intercepting hundreds of incoming',
      'Approved ground incursion into Lebanon after Hezbollah joins war',
      'Beit Shemesh hit — 9 killed, 3 injured',
      'Ben Gurion Airport closed intermittently',
      'Mossad posted Farsi message calling Iranians to revolt',
    ],
    economicImpact: 'Tourism collapsed. Reservist call-up straining economy. Tel Aviv Stock Exchange down 15%+ since Feb 28.',
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    role: 'Co-belligerent (initiated strikes)',
    casualties: '8 killed (7 KIA + 1 health incident), 18 wounded',
    keyEvents: [
      'Launched Operation Epic Fury Feb 28 without congressional authorization',
      'Two carrier strike groups deployed (Ford + Lincoln)',
      'B-2 bombers flying 30+ hour missions from Whiteman AFB, Missouri',
      'Senate voted 53-47 against War Powers Resolution',
      'CENTCOM: 5,000+ targets struck; destroyed 16 Iranian minelayers near Hormuz',
      'Pentagon told Congress: first 6 days cost $11.3 BILLION ($1.88B/day)',
      'KC-135 Stratotanker crashed in western Iraq (Day 13) — rescue ongoing',
      '7 service members KIA + 1 died of health incident in Kuwait = 8 total dead',
    ],
    economicImpact: 'Gas prices surging. Oil past $100/barrel. Stock market volatile. Defense stocks rallying. Pentagon admits $11.3B cost in 6 days. Stagflation fears.',
  },
  {
    name: 'Lebanon',
    flag: '🇱🇧',
    role: 'Drawn in via Hezbollah',
    casualties: '687 killed (98 children), 1,500 injured',
    keyEvents: [
      'Hezbollah launched rockets into northern Israel within hours of US strikes on Iran',
      'Israel conducting retaliatory strikes in southern Lebanon and Beirut suburbs',
      'IDF approved ground incursion — echoing 2006 Lebanon War',
      'Lebanese Army staying out of fighting; Hezbollah operating independently',
      'Civilian displacement from southern Lebanon — hundreds of thousands flee north',
      '52 killed in first week across Lebanon',
    ],
    economicImpact: 'Already in economic collapse since 2019. New war devastating what remained of tourism and commerce. Beirut port still not rebuilt from 2020 explosion.',
  },
  {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    role: 'Targeted by Iranian retaliation',
    casualties: 'Multiple killed and injured from missile/drone strikes',
    keyEvents: [
      'UAE intercepted 241 of 262 ballistic missiles (92% rate) through Day 11',
      'Dubai Fairmont Hotel on Palm Jumeirah set ablaze',
      '2 Iranian drones struck near Dubai International Airport (4 injured, Day 12)',
      'Dubai and Abu Dhabi airports hit or forced to close multiple times',
      'Al Dhafra Air Base (US F-35s stationed here) targeted',
      'UAE stock exchanges closed due to conflict',
      'UAE did not participate in strikes but hosts US forces — became target by association',
    ],
    economicImpact: 'Dubai real estate market freezing. Foreign companies reconsidering regional HQs. Emirates/Etihad cancelling flights. Insurance costs skyrocketing.',
  },
  {
    name: 'Qatar',
    flag: '🇶🇦',
    role: 'Struck by Iran → then struck back',
    casualties: 'Unknown',
    keyEvents: [
      'Al Udeid Air Base (largest US base in Middle East, 10,000+ personnel) hit by Iranian missiles',
      'Qatar retaliated with strikes against Iran — first Qatari offensive military action in modern history',
      'Hosts US CENTCOM forward HQ — making it automatic target',
      'Had been mediating between US and Iran prior to war',
    ],
    economicImpact: 'LNG exports (Qatar is world\'s largest exporter) completely halted by Hormuz closure. Hundreds of billions in lost revenue projected.',
  },
  {
    name: 'Bahrain',
    flag: '🇧🇭',
    role: 'Targeted by Iranian retaliation',
    casualties: '2 killed, dozens injured',
    keyEvents: [
      'US 5th Fleet HQ located in Bahrain — primary target',
      'Iranian missile set Bahrain oil refinery ablaze (Day 10) — force majeure declared on oil shipments',
      '29-year-old woman killed when projectile struck residential building in Manama (Day 12)',
      'Iranian missiles and drones targeted naval facilities',
      'Bahrain\'s Shia majority population creates internal tension',
    ],
    economicImpact: 'Oil refinery ablaze, force majeure declared. Small island economy completely disrupted.',
  },
  {
    name: 'Kuwait',
    flag: '🇰🇼',
    role: 'Targeted by Iranian retaliation',
    casualties: '6 killed, dozens injured',
    keyEvents: [
      'Multiple US military facilities in Kuwait targeted',
      'Camp Arifjan (largest US Army base in Middle East) struck',
      '1 US service member died of "health incident" in Kuwait',
      'Kuwait unable to export oil — 100% dependent on Hormuz',
    ],
    economicImpact: 'Oil exports completely halted. Kuwait\'s entire economy depends on oil. Facing fiscal crisis within weeks.',
  },
  {
    name: 'Iraq',
    flag: '🇮🇶',
    role: 'Caught between US and Iranian-backed militias',
    casualties: 'Unknown',
    keyEvents: [
      'Iranian-backed militias in Iraq activating against US bases',
      'Erbil (Kurdistan) hit by Iranian missiles targeting US consulate area',
      'Al Asad Air Base targeted (scene of 2020 Iranian missile strike)',
      'Iraqi government called for "restraint" — powerless to influence events',
      'Iraq\'s southern oil exports through Hormuz halted',
    ],
    economicImpact: 'Oil exports (95% dependent on Hormuz) halted. Budget crisis imminent. Dinar under pressure.',
  },
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    role: 'Targeted by Iranian retaliation',
    casualties: 'Unknown',
    keyEvents: [
      'Iranian missiles targeted Saudi oil infrastructure and US bases',
      'Saudi Arabia notably not participating in strikes against Iran',
      'Attempting to stay neutral while hosting US military assets',
      'Oil exports through Hormuz disrupted (East-West pipeline provides partial bypass)',
    ],
    economicImpact: 'Oil exports partially disrupted. East-West pipeline handling 5M bbl/day but cannot replace full 7.4M bbl/day exports.',
  },
  {
    name: 'Oman',
    flag: '🇴🇲',
    role: 'Neutral country struck by Iranian drones',
    casualties: 'Unknown — fires at port facility',
    keyEvents: [
      'Iranian drone struck gasoline storage at Port of Salalah (Day 12), starting fires',
      'Oman had brokered US-Iran nuclear negotiations in Muscat',
      'Oman\'s Foreign Minister flew to Washington Feb 27 to beg for more time for diplomacy — rejected',
      'Two ports targeted by Iranian drone strikes earlier in conflict',
      'Oman is a neutral state that maintains relations with both US and Iran',
    ],
    economicImpact: 'Port of Salalah gasoline storage fires. Oman\'s role as neutral mediator destroyed by the conflict it tried to prevent.',
  },
  {
    name: 'Cyprus',
    flag: '🇨🇾',
    role: 'British bases targeted',
    casualties: 'Unknown',
    keyEvents: [
      'RAF Akrotiri (British sovereign base) targeted by Iranian missiles/drones',
      'British bases used for intelligence gathering and potential staging',
      'Cyprus is EU territory — Iranian strikes on EU soil escalate the conflict\'s legal dimension',
      'First attack on European sovereign territory by a Middle Eastern state in decades',
    ],
    economicImpact: 'Tourism sector disrupted. Flight cancellations to Eastern Mediterranean.',
  },
  {
    name: 'Azerbaijan',
    flag: '🇦🇿',
    role: 'Iranian intelligence operations foiled',
    casualties: 'None reported',
    keyEvents: [
      'Iranian intelligence plots foiled in Azerbaijan',
      'Azerbaijan has close relationship with Israel (arms purchases, intelligence sharing)',
      'Iran has historically viewed Azerbaijan\'s Israel ties with suspicion',
      'Potential northern front if conflict escalates',
    ],
    economicImpact: 'Oil exports via non-Hormuz routes relatively unaffected. Regional instability threatening investment.',
  },
]

export default function IranRegionalWarPage() {
  const crumbs = [
    { label: 'Analysis', href: '/analysis' },
    { label: 'Iran: Regional War', href: '/analysis/iran-regional-war' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={crumbs} />

      <div className="mb-6 flex items-center gap-3">
        <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● LIVE CONFLICT</span>
        <span className="text-sm text-stone-500">Updated March 12, 2026 (Day 13)</span>
      </div>

      <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
        12+ Countries, 13 Days
      </h1>
      <p className="text-xl text-stone-600 mb-2">How a Two-Country War Became a Regional Catastrophe</p>
      <p className="text-stone-500 mb-8">
        Operation Epic Fury was launched against Iran. Within hours, missiles were falling on a dozen countries.
        By Day 13, Iran is laying mines in the Strait of Hormuz, oil is above $100/barrel, Dubai International Airport
        has been struck, gasoline storage in Oman is ablaze, and 2,100+ people are dead across the region.
        The Pentagon admits it cost $11.3 billion in the first 6 days alone.
      </p>

      <ShareButtons title="11 Countries, 7 Days: How a Two-Country War Became a Regional Catastrophe" />

      {/* Overview Map Stats */}
      <section className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 text-center">The Spread: Day 13 (March 12)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-red-500">12+</div>
            <div className="text-stone-400 text-sm">Countries under fire</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">5,000+</div>
            <div className="text-stone-400 text-sm">Targets struck by US/Israel</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">17</div>
            <div className="text-stone-400 text-sm">Maritime incidents (UKMTO)</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">2,100+</div>
            <div className="text-stone-400 text-sm">Total dead (all countries)</div>
          </div>
        </div>
      </section>

      {/* The Escalation Logic */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">How Wars Spread: The Escalation Logic</h2>
      <p className="mb-4">
        This war did not spread accidentally. It spread because of three structural features of American military posture in the Middle East:
      </p>
      <div className="space-y-3 mb-8">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">1. The Base Network</h3>
          <p className="text-sm text-stone-600">
            The US operates military facilities in at least 11 Middle Eastern countries. When you attack Iran, Iran doesn&apos;t need to reach
            the US mainland to hit America — it just needs to hit the nearest US base. Every base host country becomes a battlefield.
            This is the structural vulnerability of &quot;forward deployment&quot;: your military footprint determines your attack surface.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">2. The Proxy Network</h3>
          <p className="text-sm text-stone-600">
            Iran&apos;s &quot;Axis of Resistance&quot; — Hezbollah (Lebanon), various Iraqi militias, the Houthis (Yemen), and Hamas — provides
            Iran with retaliatory capacity across the entire region. An attack on Iran activates this entire network simultaneously.
            This was entirely predictable; it was predicted, publicly, by every serious analyst. And it was ignored.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">3. The Economic Chokepoint</h3>
          <p className="text-sm text-stone-600">
            The Strait of Hormuz closure doesn&apos;t just affect Iran — it affects every country that depends on Gulf oil and LNG.
            That&apos;s virtually the entire global economy. Countries that had nothing to do with the US-Iran conflict —
            Japan, South Korea, India, China, the EU — are now suffering severe economic consequences.
            See: <Link href="/analysis/hormuz-crisis" className="text-red-600 hover:underline">Hormuz: The $80 Billion Chokepoint</Link>
          </p>
        </div>
      </div>

      {/* Country-by-Country */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Country by Country</h2>

      <div className="space-y-6 mb-8">
        {countries.map((c, i) => (
          <div key={i} className="bg-white border rounded-lg overflow-hidden" id={c.name.toLowerCase().replace(/\s+/g, '-')}>
            <div className="bg-stone-100 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{c.flag}</span>
                <span className="font-bold text-lg">{c.name}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-stone-200 text-stone-600">{c.role}</span>
              </div>
              <span className="text-sm text-red-700 font-semibold">{c.casualties}</span>
            </div>
            <div className="p-4">
              <ul className="space-y-1 mb-3">
                {c.keyEvents.map((e, j) => (
                  <li key={j} className="text-sm text-stone-700 flex gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-stone-50 rounded p-3">
                <p className="text-xs text-stone-600"><strong>Economic Impact:</strong> {c.economicImpact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Historical Comparison */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Historical Parallels</h2>
      <div className="space-y-4 mb-8">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">World War I: How Alliances Drag Nations In</h3>
          <p className="text-sm text-stone-600">
            The assassination of Archduke Franz Ferdinand in Sarajevo was supposed to be a localized Austro-Serbian crisis.
            Within weeks, alliance obligations and mobilization timetables had drawn in Russia, Germany, France, Britain, and the Ottoman Empire.
            The lesson: in a region with interlocking alliances and obligations, no conflict stays contained.
            The Middle East in 2026 is structurally similar — a web of alliances, base-hosting agreements, and proxy relationships
            that transform any bilateral conflict into a regional one.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">Iraq 2003: The Promised Quick War</h3>
          <p className="text-sm text-stone-600">
            Dick Cheney told Meet the Press the Iraq invasion would take &quot;weeks rather than months.&quot; Donald Rumsfeld said troops
            would be home by Christmas. The war lasted 8 years, cost $3 trillion, killed 4,500 Americans and 200,000+ Iraqis,
            destabilized the entire region, and created ISIS. Trump has promised this campaign will take &quot;four weeks or less.&quot;
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-bold mb-1">The 1980s Tanker War: Hormuz Has Been Here Before</h3>
          <p className="text-sm text-stone-600">
            During the Iran-Iraq War, both sides attacked 451 tankers and merchant ships in the Persian Gulf.
            The US launched Operation Earnest Will to escort Kuwaiti tankers. USS Stark was hit by an Iraqi missile (37 killed).
            USS Samuel B. Roberts hit an Iranian mine. The US responded with Operation Praying Mantis — the largest US naval battle since WWII.
            A localized war escalated step by step into direct US-Iran naval combat. The pattern is repeating.
          </p>
        </div>
      </div>

      {/* Section: The Proxy Network */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Axis of Resistance: Iran&apos;s Proxy Network Activates
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          For 45 years, Iran has been building what it calls the <strong>&ldquo;Axis of Resistance&rdquo;</strong> — 
          a network of allied militias, political movements, and state actors designed to give Iran strategic depth 
          and retaliatory capacity across the Middle East. When the US struck Iran, this entire network activated 
          simultaneously. This wasn&apos;t spontaneous — it was the execution of decades-old contingency plans.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Network: By Numbers</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Hezbollah (Lebanon)</h4>
              <ul className="text-stone-700 text-sm space-y-1">
                <li>• <strong>150,000+ rockets and missiles</strong> — more than most European armies</li>
                <li>• 100,000 trained fighters (estimates)</li>
                <li>• Controls southern Lebanon and Bekaa Valley</li>
                <li>• Annual budget: $700M+ from Iran</li>
                <li>• Precision missiles can hit any target in Israel</li>
                <li>• Has been preparing for this war since 2006</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Iraqi Militias</h4>
              <ul className="text-stone-700 text-sm space-y-1">
                <li>• <strong>Popular Mobilization Forces:</strong> 140,000 fighters</li>
                <li>• Officially part of Iraqi security forces</li>
                <li>• Kata&apos;ib Hezbollah, Asa&apos;ib Ahl al-Haq leading attacks</li>
                <li>• Target US bases in Iraq with rockets/drones</li>
                <li>• Iraqi government powerless to control them</li>
                <li>• Receive $2B+ annually from Iran</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Houthis (Yemen)</h4>
              <ul className="text-stone-700 text-sm space-y-1">
                <li>• Control northern Yemen (70% of population)</li>
                <li>• Anti-ship missiles threaten Red Sea shipping</li>
                <li>• Drone and missile strikes on Saudi Arabia/UAE</li>
                <li>• Survived 9 years of Saudi bombing campaign</li>
                <li>• Iran provides missiles, drones, training</li>
                <li>• Motto: &ldquo;Death to America, Death to Israel&rdquo;</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Syria (Assad)</h4>
              <ul className="text-stone-700 text-sm space-y-1">
                <li>• Hosts Iranian forces and Hezbollah</li>
                <li>• Iranian weapons factories on Syrian territory</li>
                <li>• Russia also backing Assad — complicates US response</li>
                <li>• Israeli strikes on Iranian targets in Syria routine</li>
                <li>• Syrian territory used as transit for weapons to Lebanon</li>
                <li>• Iran spent $15B+ keeping Assad in power</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          This network gives Iran what military strategists call <strong>&ldquo;escalation dominance&rdquo;</strong> — 
          the ability to impose costs on the United States and its allies that are higher than the costs Iran pays. 
          The US can bomb Iran, but Iran can shut down global oil supplies, attack US forces in multiple countries, 
          and turn Lebanon into a killing field for Israeli soldiers. Iran has more ways to escalate than America 
          has ways to contain the escalation.
        </p>
      </section>

      {/* Section: Oil Market Impact */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          $180 Oil: The Economic Weapon
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Iran&apos;s most powerful weapon isn&apos;t missiles — it&apos;s geography. The Strait of Hormuz is 21 miles 
          wide at its narrowest point. <strong>20% of global oil</strong> and <strong>25% of global LNG</strong> passes 
          through it daily. On Day 2 of the conflict, Iran announced the strait was closed to all traffic. Oil prices 
          immediately spiked to $180/barrel — a 125% increase that sent global markets into freefall.
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">Hormuz by the Numbers</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3 text-stone-300">
              <div>
                <p><span className="text-white font-bold">Daily oil transit:</span> 21.5 million barrels</p>
              </div>
              <div>
                <p><span className="text-white font-bold">Daily LNG transit:</span> 13 billion cubic feet</p>
              </div>
              <div>
                <p><span className="text-white font-bold">Global oil supply impact:</span> 20% offline</p>
              </div>
              <div>
                <p><span className="text-white font-bold">Countries 100% dependent on Hormuz:</span> Japan, South Korea, India</p>
              </div>
            </div>
            <div className="space-y-3 text-stone-300">
              <div>
                <p><span className="text-white font-bold">Insurance costs:</span> Increased 2,000% for Persian Gulf shipping</p>
              </div>
              <div>
                <p><span className="text-white font-bold">Alternative routes:</span> Suez Canal at capacity, months-long delays</p>
              </div>
              <div>
                <p><span className="text-white font-bold">Economic impact:</span> $2.7 trillion in lost global GDP (estimated)</p>
              </div>
              <div>
                <p><span className="text-white font-bold">Mining capability:</span> Iran can mine the strait in 72 hours</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          The closure has created a cascading global crisis. <strong>China&apos;s manufacturing</strong> is grinding to 
          a halt — 70% of its oil imports transit Hormuz. <strong>European energy prices</strong> have tripled, triggering 
          rationing and industrial shutdowns. <strong>India&apos;s economy</strong> faces collapse — 85% of its oil comes 
          through the strait. Japan has implemented emergency fuel conservation measures not seen since WWII.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Historical Precedent: The 1973 Oil Embargo</h3>
          <p className="text-stone-700 mb-3">
            During the 1973 Arab-Israeli War, Arab oil producers cut production by 5% and embargoed oil exports 
            to the US and Netherlands. Oil prices quadrupled from $3 to $12/barrel. The embargo lasted 5 months 
            and triggered a global recession, fuel rationing, and the collapse of several governments.
          </p>
          <p className="text-stone-700">
            The current crisis is potentially worse. The 1973 embargo cut global supply by 5%. The Hormuz closure 
            cuts supply by 20%. The 1973 embargo was voluntary — producers could resume exports at any time. The 
            Hormuz closure is military — it requires defeating Iran to reopen. Every day the strait remains closed 
            costs the global economy an estimated $15 billion.
          </p>
        </div>
      </section>

      {/* Section: Military Strategy */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Asymmetric Warfare: Iran&apos;s A2/AD Strategy
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Iran cannot match American military power conventional force-on-force. Instead, it has spent 45 years 
          developing an <strong>&ldquo;Anti-Access/Area Denial&rdquo;</strong> (A2/AD) strategy designed to make 
          American operations in the Persian Gulf prohibitively expensive. The strategy is working exactly as designed.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Iran&apos;s Military Doctrine</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-stone-800">Layer 1: Missiles &amp; Drones</h4>
              <p className="text-stone-700 text-sm">
                Iran has the largest missile force in the Middle East — over 3,000 ballistic and cruise missiles. 
                Ranges up to 2,000km cover all US bases in the region. Precision guidance allows targeting of 
                specific buildings. Mix of liquid and solid fuel makes launches difficult to predict and interdict.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800">Layer 2: Naval Warfare</h4>
              <p className="text-stone-700 text-sm">
                Iran&apos;s Revolutionary Guard Navy operates hundreds of small, fast attack craft designed for 
                &ldquo;swarm&rdquo; tactics. Mini-submarines, naval mines, and anti-ship missiles threaten large 
                US vessels in the confined waters of the Persian Gulf. The goal: make it too risky for US carriers to operate.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800">Layer 3: Proxy Forces</h4>
              <p className="text-stone-700 text-sm">
                The proxy network provides strategic depth and escalation options. If the US bombs Iranian territory, 
                Iranian proxies can attack US forces in Iraq, Lebanon, Yemen, and Syria. Every proxy activation 
                forces the US to divert resources and attention from the primary conflict.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800">Layer 4: Economic Warfare</h4>
              <p className="text-stone-700 text-sm">
                The Hormuz closure imposes immediate, massive economic costs on US allies and the global economy. 
                Every day the strait remains closed increases pressure for a ceasefire. Iran weaponizes interdependence.
              </p>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          The US military is optimized for <strong>&ldquo;force projection&rdquo;</strong> — delivering overwhelming 
          firepower anywhere in the world. But Iran&apos;s strategy is specifically designed to neutralize American 
          advantages. Large aircraft carriers become targets, not assets, in the confined Persian Gulf. Precision-guided 
          munitions are neutralized by mobile launchers that shoot and scoot. Advanced aircraft are vulnerable to 
          surface-to-air missiles and must operate from bases that are themselves under attack.
        </p>
      </section>

      {/* Section: Intelligence Warfare */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Shadow War: Intelligence Operations
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          While missiles and bombs dominate headlines, a parallel intelligence war is being fought across multiple 
          domains. Both sides are conducting cyber attacks, disinformation operations, and covert actions designed 
          to degrade enemy capabilities and domestic support for the war.
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">Cyber Warfare Escalation</h3>
          <div className="space-y-3 text-stone-300">
            <div>
              <p><span className="text-white font-bold">US Operations:</span> Power grid attacks causing rolling blackouts across Iran</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Iranian Retaliation:</span> Attacks on US financial systems, water treatment facilities</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Critical Infrastructure:</span> Both sides targeting civilian infrastructure (power, water, internet)</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Economic Targets:</span> Banking systems, stock exchanges, cryptocurrency networks</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Collateral Damage:</span> Attacks affecting neutral countries&apos; systems</p>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          Iran&apos;s intelligence services are conducting operations far beyond the Middle East. <strong>Sleeper cells 
          in Europe and North America</strong> have been activated to conduct surveillance on Iranian dissidents, Israeli 
          facilities, and US military personnel. The FBI has arrested 14 people in the US on charges related to Iranian 
          intelligence activities since the conflict began.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Assassination and Sabotage</h3>
          <p className="text-stone-700 mb-3">
            The conflict has also featured targeted killings and sabotage operations. Israel&apos;s assassination of 
            Supreme Leader Khamenei on February 28 was followed by Iranian attempts to kill Israeli officials abroad. 
            <strong>Two Iranian agents were arrested</strong> in Vienna attempting to plant a bomb at the Israeli embassy. 
            Another cell was disrupted in Argentina.
          </p>
          <p className="text-stone-700">
            Both sides are also conducting industrial sabotage. Iranian agents have attempted to sabotage weapons 
            shipments to Israel. Israeli/US intelligence has reportedly sabotaged Iranian weapons factories and missile 
            production facilities. The shadow war extends the battlefield to every country where both sides have assets.
          </p>
        </div>
      </section>

      {/* Section: Humanitarian Crisis */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Civilian Cost: Schools, Hospitals, and Markets
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Despite claims of &ldquo;precision strikes&rdquo; and &ldquo;military targets only,&rdquo; the civilian casualty 
          toll continues to mount. The most devastating single incident was the destruction of the Minab Elementary School 
          in southern Iran, where <strong>168 schoolchildren</strong> were killed when a US munition struck the building. 
          The Pentagon maintains the strike was targeting an adjacent IRGC facility.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Civilian Infrastructure Under Attack</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Iran</h4>
              <ul className="text-stone-700 text-sm space-y-1">
                <li>• Minab Elementary School: 168 children killed</li>
                <li>• Tehran Grand Bazaar: Partially destroyed, historic sections damaged</li>
                <li>• Golestan Palace: UNESCO World Heritage site damaged</li>
                <li>• Power grid: 40% degraded, rolling blackouts nationwide</li>
                <li>• Water treatment: 6 facilities offline, affecting 2M people</li>
                <li>• Hospitals: 12 medical facilities struck or damaged</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Regional</h4>
              <ul className="text-stone-700 text-sm space-y-1">
                <li>• UAE: Dubai Fairmont Hotel destroyed by missile</li>
                <li>• Lebanon: 52 civilians killed in first week</li>
                <li>• Israel: Beit Shemesh residential area hit</li>
                <li>• Cyprus: Civilian airport operations disrupted</li>
                <li>• Saudi Arabia: Oil facilities targeted, minimal damage</li>
                <li>• Iraq: Erbil government buildings struck</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          The humanitarian situation is being complicated by the breakdown of normal aid and medical supply chains. 
          International sanctions make it difficult to deliver medical supplies to Iran. The Hormuz closure has disrupted 
          food imports to the Gulf states. UNRWA operations in Lebanon have been suspended due to the security situation. 
          An estimated <strong>2.3 million people</strong> have been displaced across the region in the first week.
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">Refugee Crisis Developing</h3>
          <div className="space-y-3 text-stone-300">
            <div>
              <p><span className="text-white font-bold">Southern Lebanon:</span> 850,000 civilians fleeing north as Israel prepares ground invasion</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Northern Iran:</span> 400,000 displaced from bombing in Tehran, Tabriz, Isfahan provinces</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Gulf States:</span> Mass evacuation of foreign workers — 200,000+ Indians, Pakistanis, Filipinos</p>
            </div>
            <div>
              <p><span className="text-white font-bold">International Response:</span> UNHCR requesting $2.4B in emergency funding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: International Response */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          International Response: Paralysis and Profit
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The international community&apos;s response has been characterized by <strong>diplomatic paralysis</strong> 
          and economic opportunism. The UN Security Council held an emergency session on March 1 but could reach 
          no consensus. Russia and China blocked a US-sponsored resolution calling for Iranian de-escalation. 
          France and Britain backed the US position. The result: no international action to stop the escalation.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Global Response by Region</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-stone-800">Europe</h4>
              <p className="text-stone-700 text-sm">
                The EU is split. Germany and France support de-escalation and have called for immediate ceasefire talks. 
                Eastern European countries (Poland, Baltic states) back the US position. Italy and Greece, heavily 
                dependent on energy imports, are pushing for immediate Hormuz reopening. EU energy prices have tripled, 
                triggering industrial shutdowns and public protests.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800">China</h4>
              <p className="text-stone-700 text-sm">
                China is Iran&apos;s largest oil customer and has called for immediate ceasefire. Chinese President Xi 
                Jinping spoke with Iranian leaders and offered to mediate. However, China is also quietly benefiting — 
                purchasing discounted Iranian oil through back-channel deals while publicly calling for peace. Chinese 
                manufacturing is suffering from oil shortages, but the government is using the crisis to accelerate 
                renewable energy deployment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800">India</h4>
              <p className="text-stone-700 text-sm">
                India imports 85% of its oil through Hormuz and faces economic catastrophe. Prime Minister Modi has 
                personally called Trump and Israeli PM to urge restraint. India is activating emergency oil reserves 
                (90-day supply) and implementing fuel rationing. Indian naval forces have been deployed to escort 
                Indian-flagged tankers, raising the possibility of direct Indian-Iranian naval confrontation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800">Russia</h4>
              <p className="text-stone-700 text-sm">
                Russia is the war&apos;s biggest beneficiary. Oil prices at $180/barrel mean massive windfall profits 
                for Russian energy exports. Putin has offered to mediate but is privately encouraging Iranian resistance. 
                Intelligence reports suggest Russia is providing advanced surface-to-air missiles to Iran through Syrian 
                airspace. Russian naval forces in the Mediterranean have increased activity.
              </p>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          Meanwhile, <strong>defense contractors are celebrating</strong>. Lockheed Martin stock is up 23% since the 
          conflict began. Raytheon is up 31%. Boeing defense division is up 18%. The companies that manufacture the 
          weapons destroying the region are profiting from every escalation. War is good for business — which is why 
          it&apos;s so hard to stop.
        </p>
      </section>

      {/* The Question of Containment */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-4">Can This Be Contained?</h2>
      <p className="mb-4">
        As of Day 7, the war shows no signs of de-escalation. Iran&apos;s Supreme Leader is dead, but no successor has been named.
        Iran continues missile and drone attacks. Hezbollah has opened a second front in Lebanon. Israel has approved a ground
        incursion. The Houthis have resumed Red Sea attacks. Oil prices are surging. Trump is demanding unconditional surrender.
      </p>
      <p className="mb-4">
        Every escalation makes de-escalation harder. Every country drawn in creates new grievances and new domestic political
        pressures to retaliate. Every civilian killed creates new recruits for resistance movements. This is the escalation spiral
        that every military strategist warned about — and every political leader ignored.
      </p>
      <p className="mb-8">
        The question is no longer whether this war will spread. It has already spread. The question is whether anyone has the
        political will and diplomatic skill to stop it before it consumes the entire region.
      </p>
      
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-400">The Bottom Line</h3>
        <p className="text-stone-300 text-lg mb-4">
          This war was entirely predictable and entirely preventable. Every think tank in Washington had war-gamed this scenario. 
          Every military strategist knew that striking Iran would activate the proxy network. Every economist knew that closing 
          Hormuz would crash the global economy. Every diplomat knew that decapitation strikes make negotiation impossible.
        </p>
        <p className="text-stone-300 text-lg mb-4">
          The politicians launched the war anyway. They ignored the experts, dismissed the warnings, and chose escalation over 
          de-escalation at every decision point. Now 11 countries are at war, oil is at $180, and 1,300+ people are dead in 
          the first week. The bill for this strategic stupidity will be paid in blood and treasure for decades.
        </p>
        <p className="text-stone-300 text-lg">
          The question Americans should be asking is simple: <strong>How does this make us safer?</strong> Every missile fired 
          creates new enemies. Every ally drawn into conflict creates new vulnerabilities. Every day this war continues makes 
          America less secure, not more. This is not deterrence — it&apos;s destruction. And it&apos;s not working.
        </p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-red-900 mb-2">What Comes Next?</h3>
        <p className="text-sm text-red-800">
          If current trajectories hold, the conflict is likely to expand further. Potential escalation pathways include:
          (1) Israeli ground invasion of Lebanon triggering a full Hezbollah war,
          (2) Iranian mining of the Strait of Hormuz requiring US minesweeping operations under fire,
          (3) Houthi attacks on commercial shipping requiring renewed naval operations in the Red Sea,
          (4) Iranian-backed militia attacks on US forces in Iraq and Syria,
          (5) Russian provision of advanced weapons systems to Iran (S-400, anti-ship missiles).
          Each pathway draws in additional countries and resources. Each makes the exit harder to find.
        </p>
      </div>

      {/* Sources */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mt-12 mb-4">Sources</h2>
      <div className="bg-stone-50 rounded-lg p-4 mb-8 text-sm text-stone-600">
        <ul className="space-y-1 list-disc list-inside">
          <li>CENTCOM press briefings (Feb 28 – Mar 6, 2026)</li>
          <li>ISW (Institute for the Study of War) — daily Iran-Israel special reports</li>
          <li>Alma Research Center — daily war situation reports</li>
          <li>Reuters, AP, Al Jazeera — country-specific reporting</li>
          <li>UAE Ministry of Defense — statement on missile/drone attacks (186 missiles, 812 drones)</li>
          <li>Roan Capital Partners — Situation Report: Epic Fury (Mar 6)</li>
          <li>Richard Haass (Substack) — "The War at One Week"</li>
          <li>Chatham House — "How will the Iran war affect the global economy?"</li>
          <li>Congressional Research Service — US Military Facilities in the Middle East (2024)</li>
        </ul>
      </div>

      {/* Cross-links */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/analysis/lebanon-burns" className="bg-red-50 rounded-lg border border-red-200 p-4 hover:shadow-md transition">
          <h3 className="font-semibold text-red-800">While Lebanon Burns: America&apos;s $22B Blank Check →</h3>
          <p className="text-stone-500 text-sm">$21.7B in US aid funded the destruction of a country already in collapse. 4,681+ killed. The Lebanon front deserves its own deep-dive.</p>
        </Link>
        <Link href="/analysis/iran-2026" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026: The Full Story →</h3>
          <p className="text-stone-500 text-sm">Day-by-day account of Operation Epic Fury</p>
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
          <p className="text-stone-500 text-sm">What the strait closure means globally</p>
        </Link>
        <Link href="/analysis/iran-russia-shadow-war" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Russia&apos;s Shadow War →</h3>
          <p className="text-stone-500 text-sm">Moscow is helping Iran kill Americans</p>
        </Link>
        <Link href="/us-military-bases-around-the-world" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">US Military Bases Worldwide →</h3>
          <p className="text-stone-500 text-sm">750+ bases that define America&apos;s attack surface</p>
        </Link>
      </div>

      <BackToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '11 Countries, 7 Days: How a Two-Country War Became a Regional Catastrophe',
            description: 'Every country drawn into Operation Epic Fury — what each has suffered and why containment has failed.',
            datePublished: '2026-03-06',
            dateModified: '2026-03-12',
            publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            mainEntityOfPage: 'https://www.warcosts.org/analysis/iran-regional-war',
          }),
        }}
      />
    </div>
  )
}
