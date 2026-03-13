import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { NuclearTimeline } from './NuclearTimeline'
import ArticleSchema from '@/components/ArticleSchema'
import RelatedArticles from '@/components/RelatedArticles'

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
    detailedAnalysis: 'The Suez Crisis occurred during the Hungarian Revolution, creating maximum Cold War tension. Britain and France had invaded Egypt to reclaim the Suez Canal. Israel had attacked Egyptian forces in the Sinai. The Soviet Union threatened rocket attacks on London and Paris. This was the backdrop when NORAD\'s early warning systems lit up with multiple simultaneous alerts. Protocol demanded immediate escalation to DEFCON 1. The fact that four separate warning systems triggered at once suggested a coordinated Soviet first strike was underway. Lieutenant General Lauris Norstad, acting as NATO Supreme Commander, had to make a split-second decision: launch nuclear retaliation or investigate further. He chose investigation. The "aircraft over Turkey" turned out to be a flock of swans detected by radar. The Soviet MiGs were providing scheduled escort to Syrian transport planes. The British bomber had suffered mechanical failure, not enemy fire. The Soviet naval movement through the Dardanelles was routine passage, not preparation for war. Any other decision by Norstad would have triggered thermonuclear war over a radar malfunction and migratory birds.',
    consequences: 'This incident led to the installation of the Moscow-Washington hotline ("red telephone") in 1963, recognition that miscommunication could end civilization.',
    classifiedUntil: '1995',
    sources: ['RAND Corporation', 'Canadian Defence Research Board', 'NATO archives']
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
    detailedAnalysis: 'The Ballistic Missile Early Warning System (BMEWS) was the United States\' primary nuclear attack warning network, with massive radar installations in Greenland, Alaska, and the UK. When all communication links to these stations went dead simultaneously on November 24, 1961, the operational assumption was that Soviet saboteurs or EMP from nuclear detonations had severed the links as a prelude to attack. SAC immediately began launching B-52 bombers toward their fail-safe points — the last stop before proceeding to Soviet targets. The bombers were loaded with thermonuclear weapons ranging from 1-20 megatons each. At the time, US nuclear doctrine called for massive retaliation: any Soviet first strike would trigger the launch of the entire SAC bomber force and all available ICBMs. General Thomas Power, SAC commander, was notorious for his hair-trigger approach and had been preparing to authorize full retaliation when a B-52 already on airborne alert managed to establish radio contact with the BMEWS station in Greenland. The Greenland station reported all normal — no incoming missiles, no attacks, no Soviet activity. The communication failure was traced to an overheated telephone relay station in Colorado. A $5 piece of equipment had nearly triggered global thermonuclear war.',
    consequences: 'Led to redundant communication systems and requirements for multiple confirmation sources before nuclear launch authorization',
    classifiedUntil: '1977',
    sources: ['Strategic Air Command archives', 'NORAD historical documents', 'General Thomas Power memoir']
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
    detailedAnalysis: 'The Cuban Missile Crisis was not a single incident but a 13-day chain of near-catastrophes, any one of which could have triggered global thermonuclear war. The crisis began on October 14, 1962, when U-2 spy plane photographs revealed Soviet medium-range ballistic missiles under construction in Cuba. Unknown to the Americans at the time, the Soviets had also deployed tactical nuclear weapons — Luna short-range missiles with 2-kiloton warheads — and had given local commanders authorization to use them if invaded. The Joint Chiefs of Staff unanimously recommended immediate air strikes followed by invasion. General Curtis LeMay told Kennedy that failure to attack would be "almost as bad as the appeasement at Munich." Kennedy rejected their advice, choosing a naval quarantine instead. On October 27 — "Black Saturday" — everything nearly went wrong: a Soviet surface-to-air missile shot down Major Rudolf Anderson\'s U-2 over Cuba; another U-2 accidentally strayed into Soviet airspace over Siberia and was intercepted by Soviet fighters; and most dangerously, the B-59 submarine incident (detailed separately) brought the world within one man\'s decision of nuclear war. Meanwhile, Soviet forces in Cuba received authorization to use tactical nuclear weapons against any US invasion force. Had Kennedy followed his generals\' advice, American troops would have landed on beaches defended by nuclear weapons, virtually guaranteeing escalation to strategic nuclear exchange.',
    consequences: 'Led to the Test Ban Treaty (1963), hotline agreement, and both sides\' recognition that nuclear war was unwinnable',
    classifiedUntil: 'Many details remain classified; significant revelations in 1992, 2002, 2012',
    sources: ['Kennedy Presidential Library', 'Soviet archives (post-1991)', 'ExComm transcripts', 'Submarine B-59 crew interviews']
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
    detailedAnalysis: 'Soviet submarine B-59 was part of a four-submarine flotilla (B-36, B-59, B-4, and B-63) dispatched to Cuba in October 1962. Each was armed with a 15-kiloton nuclear torpedo — roughly the size of the Hiroshima bomb. The submarines lost communication with Moscow during the journey and were operating under sealed orders that authorized the use of nuclear torpedoes if attacked. On October 27, B-59 was detected by the USS Beale destroyer and forced to surface using practice depth charges — explosive devices used to signal submarines. However, the crew of B-59 had been underwater for hours, lost contact with Moscow, and had no way to know these were not live depth charges. The submarine was overheating — temperatures reached 120°F inside — and carbon dioxide levels were approaching fatal concentrations. Captain Valentin Savitsky, believing World War III had begun, ordered the nuclear torpedo prepared for launch. Soviet protocol required the agreement of three officers: the captain, the political officer, and the deputy flotilla commander. Captain Savitsky and political officer Ivan Semonovich Maslennikov both agreed to launch. The target would be the USS Randolph aircraft carrier and its escort ships — approximately 5,000 American sailors. The explosion would have been visible from Florida. President Kennedy would have faced enormous pressure to launch nuclear retaliation against the Soviet Union. But deputy flotilla commander Captain 2nd Rank Vasili Alexandrovich Arkhipov refused to authorize the launch. As the senior officer aboard (he outranked the submarine\'s captain), he had the final say. He convinced Savitsky to surface and attempt to reestablish communication with Moscow. The submarine surfaced, identified itself to American ships, and eventually returned to the Soviet Union. Arkhipov\'s decision prevented nuclear war.',
    consequences: 'The incident remained secret for decades. Arkhipov received no official recognition from the Soviet government. Arthur Schlesinger called it "the most dangerous moment in human history."',
    classifiedUntil: '1992 (Soviet archives opened)',
    sources: ['Soviet Naval archives', 'Vasili Arkhipov interviews (1990s)', 'US Navy incident reports', 'Submarine crew memoirs']
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
    detailedAnalysis: 'October 28, 1962, was the final day of the Cuban Missile Crisis. Khrushchev had agreed to withdraw the missiles from Cuba, but the agreement was still being negotiated through diplomatic channels. Tensions remained at maximum levels. At approximately 2:14 PM, the AN/FPS-35 radar installation at Moorestown, New Jersey — part of NORAD\'s SAGE (Semi-Automatic Ground Environment) system — detected what appeared to be a ballistic missile launch from Cuba. The radar signature matched the profile of a Soviet R-12 Dvina (SS-4 Sandal) medium-range ballistic missile. The projected trajectory indicated Tampa, Florida, as the target — a major population center of 375,000 people. The radar operators immediately notified NORAD headquarters. Within minutes, Strategic Air Command was preparing retaliatory strikes. President Kennedy was to be notified within 10 minutes of initial detection. However, radar operators at nearby sites could not confirm the launch. A satellite was known to be reentering the atmosphere that day, but its reentry point was not precisely calculated. Additional radar analysis revealed that the detected object was moving too slowly to be a ballistic missile and was breaking up as it traveled — consistent with satellite reentry, not a nuclear warhead. The all-clear was given at 2:28 PM, exactly 14 minutes after initial detection. Had the operators relied solely on automated systems without human verification, nuclear retaliation would likely have been authorized while Khrushchev was literally in the process of agreeing to remove the missiles.',
    consequences: 'Demonstrated the critical importance of human judgment in nuclear command and control systems',
    classifiedUntil: '1990s',
    sources: ['NORAD historical records', 'SAGE system documentation', 'Moorestown radar station logs']
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
    detailedAnalysis: 'At 3:00 AM on November 9, 1979, a technician at NORAD\'s Cheyenne Mountain complex accidentally loaded a training simulation tape into the live NORAD computer system. The simulation depicted a massive Soviet nuclear first strike: 2,200 intercontinental ballistic missiles launched from the Soviet Union and targeting the United States. The computer systems processed this as real-time intelligence and immediately activated the nation\'s nuclear alert procedures. National Security Advisor Zbigniew Brzezinski was awakened by a secure phone call from NORAD\'s watch officer informing him that a nuclear attack was imminent. NORAD estimated that Soviet warheads would begin impacting US targets within 15-20 minutes. Brzezinski was told to wake President Carter and recommend immediate authorization of nuclear retaliation. Before calling the President, Brzezinski called his military aide to confirm the number of Soviet missiles detected. The aide reported that NORAD was now showing 2,000+ incoming missiles — the entire Soviet ICBM force. Brzezinski was reaching for the phone to wake Carter when NORAD called back. The satellite-based early warning system (Defense Support Program) showed no missile launches from Soviet territory. Cross-checking with the PAVE PAWS radar system also showed no incoming missiles. The attack was a computer simulation, not reality. A technician had confused a training tape with a blank tape and loaded it into the operational system during a routine test. The error was discovered when operators noticed that the simulated attack profile exactly matched a training scenario conducted earlier that week. Six minutes had passed from initial alert to all-clear — six minutes during which the United States was preparing for nuclear war based on a computer error.',
    consequences: 'Led to new safeguards separating training systems from operational nuclear warning networks',
    classifiedUntil: '1980 (Congressional investigation forced disclosure)',
    sources: ['Senate Armed Services Committee hearings', 'Brzezinski memoir', 'NORAD investigation report']
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
    detailedAnalysis: 'September 26, 1983, was the peak of the Cold War nuclear arms race and one of the most paranoid periods in Soviet-American relations. Three weeks earlier, Soviet fighter jets had shot down Korean Air Lines Flight 007, killing 269 civilians including US Congressman Larry McDonald. President Reagan had called the Soviet Union an "evil empire" and announced the Strategic Defense Initiative ("Star Wars"). Soviet leadership, led by the aging and increasingly paranoid Yuri Andropov, believed the US was preparing a first strike. At 12:15 AM Moscow time, Lieutenant Colonel Stanislav Petrov was on duty at Serpukhov-15, the secret command center that monitored Soviet early warning satellites. The Oko satellite system detected what appeared to be a single Minuteman ICBM launch from Malmstrom Air Force Base in Montana. Minutes later, the system detected four more launches. Protocol was clear: any confirmed missile launch was to be immediately reported to the General Staff, who would wake Soviet leadership and authorize nuclear retaliation. The Soviet Union\'s nuclear doctrine called for launch-on-warning — fire all missiles immediately upon detection of incoming attack, before Soviet missiles could be destroyed on the ground. Petrov faced an impossible choice with civilization hanging in the balance. Soviet military doctrine dictated immediate reporting. But something seemed wrong. A real American first strike would involve hundreds of missiles — the US had over 1,000 Minuteman ICBMs — not just five. The radar-based early warning system showed no corroborating evidence of incoming missiles. Petrov decided to report the alert as a system malfunction, not a genuine attack. He was right. Investigation later revealed that the Oko satellite had detected sunlight reflecting off high-altitude clouds over North Dakota and Montana. The angle of the sun and clouds created an infrared signature nearly identical to ICBM exhaust plumes. Petrov was reprimanded for failing to follow protocol. He received no medal, no recognition, no reward from the Soviet government. He was transferred to a less sensitive position and eventually retired as a lieutenant colonel. The incident remained secret until after the Cold War ended. When the story finally emerged in the 1990s, Petrov was honored internationally — by the UN, the Association of World Citizens, and various peace organizations. Russia never acknowledged his role in preventing nuclear war.',
    consequences: 'Petrov received no Soviet recognition. Story remained secret until 1990s. He was eventually honored internationally but never by Russia.',
    classifiedUntil: '1993',
    sources: ['Stanislav Petrov interviews', 'Soviet military archives', 'Oko satellite system documentation', 'Serpukhov-15 operational logs']
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
    detailedAnalysis: 'Able Archer 83 was a NATO command post exercise conducted November 7-11, 1983, simulating nuclear warfare from initial conventional conflict through nuclear escalation to general nuclear war. The exercise was unusually realistic: it included heads of state (Reagan, Thatcher, Kohl), used new NATO communication procedures, and simulated the full nuclear decision-making process including DEFCON progression from 5 to 1. Unknown to NATO planners, Soviet intelligence was conducting Operation RYAN — a paranoid multi-year program to detect signs of a Western nuclear first strike. Soviet leaders, led by the dying Yuri Andropov, believed the US was preparing a surprise nuclear attack. The KGB had ordered intelligence officers worldwide to monitor for dozens of indicators of impending attack: increased blood bank activity near military bases, government officials leaving cities, unusual Pentagon meetings, church services for military families. Most of these indicators were normal peacetime activities, but Soviet paranoia interpreted them as attack preparation. When Able Archer 83 began, Soviet intelligence noted several concerning factors: the exercise used new NATO communication formats never seen before; Western leaders were participating directly rather than sending representatives; and the exercise simulated actual nuclear weapon release procedures. Most alarmingly, the exercise simulated NATO forces escalating from conventional warfare through tactical nuclear weapons to strategic nuclear exchange — exactly the scenario Soviet doctrine predicted for a disguised first strike. Soviet nuclear forces in East Germany and Poland were placed on high alert. Nuclear-capable aircraft were prepared for immediate launch. Soviet submarines moved to firing positions. The KGB ordered intelligence officers to prepare for immediate evacuation from Western capitals. The crisis diffused only when the exercise ended on November 11. Soviet forces stood down from alert status. But Western intelligence had no idea how close they had come to nuclear war until KGB colonel Oleg Gordievsky — a British double agent — reported Soviet preparations for preemptive strike. When Reagan was briefed on Soviet reaction to Able Archer 83, he was reportedly shocked that the Soviets could believe NATO would launch a surprise attack. The incident led Reagan to reconsider his approach to the Soviet Union, contributing to his eventual summit meetings with Mikhail Gorbachev.',
    consequences: 'Led Reagan to realize Soviet fears of NATO first strike were genuine. Changed Reagan\'s approach to USSR relations. Contributed to eventual arms control negotiations.',
    classifiedUntil: '1990s (Oleg Gordievsky defection revealed Soviet reaction)',
    sources: ['NATO archives', 'Oleg Gordievsky debriefing', 'Soviet intelligence documents (post-1991)', 'Reagan Presidential Library']
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
    detailedAnalysis: 'At 7:00 AM Moscow time on January 25, 1995, Russian radar installations detected a submarine-launched ballistic missile (SLBM) rising from the sea off the coast of Norway. The missile\'s trajectory appeared to be heading directly toward Moscow. This was the exact scenario Russian nuclear doctrine was designed to counter: a US submarine-launched first strike attempting to decapitate Russian leadership. Russian radar operators immediately notified the General Staff. Within minutes, President Boris Yeltsin was awakened and informed of the incoming attack. For the first time in history, the Russian nuclear briefcase (Cheget) was activated. Yeltsin had approximately 8-10 minutes to decide whether to authorize nuclear retaliation before the incoming warhead would strike Moscow. Russian nuclear submarines at sea received preliminary launch authorization. Strategic rocket forces were placed on highest alert. Mobile ICBM launchers began emergency dispersal procedures. The missile detected by Russian radar was actually a Black Brant XII sounding rocket launched jointly by Norwegian and American scientists to study the aurora borealis. Norway had notified Russia of the launch through diplomatic channels on January 16, nine days earlier. However, the notification never reached the radar operators or the Russian General Staff. The scientific rocket followed a trajectory similar to a US Trident D5 SLBM launched from the Norwegian Sea — a known US submarine patrol area. As Russian leadership debated nuclear retaliation, additional radar tracking revealed the missile\'s true trajectory. Instead of arcing toward Moscow, it was following a parabolic path into the Barents Sea. Eight minutes after initial detection, the rocket impacted harmlessly in international waters, 1,500 kilometers from any populated area. Yeltsin called off the nuclear alert. Post-incident investigation revealed multiple communication failures: Norway\'s notification had been filed as routine scientific correspondence and never reached military commanders; the rocket\'s launch had been delayed for several days due to weather, but no updated notification was sent; and Russian radar operators had no database of scheduled scientific launches to cross-reference against potential threats.',
    consequences: 'Led to improved US-Russia notification procedures for missile launches. Highlighted the continuing risk of accidental nuclear war in the post-Cold War era.',
    classifiedUntil: 'Partially disclosed 1995; full details released 2000s',
    sources: ['Boris Yeltsin memoir', 'Russian General Staff accounts', 'Norwegian Space Centre records', 'US-Russia diplomatic cables']
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
    detailedAnalysis: 'At 8:05 AM Hawaiian time on January 13, 2018, an employee at the Hawaii Emergency Management Agency (HI-EMA) was conducting a routine shift change drill. The employee was supposed to select a "test" alert option but instead clicked "live alert" on the emergency broadcast system. The system immediately sent an emergency alert to every cell phone, television, and radio in Hawaii: "BALLISTIC MISSILE THREAT INBOUND TO HAWAII. SEEK IMMEDIATE SHELTER. THIS IS NOT A DRILL." The alert reached 1.4 million residents and 200,000+ tourists across the Hawaiian islands. Panic was immediate and widespread. Families pushed children into storm drains and manholes. Parents said goodbye to their children over the phone. The H-3 freeway became a parking lot as people abandoned their cars to seek shelter. Tourists at Waikiki Beach ran screaming toward hotels. Parents at youth basketball games threw their children under bleachers. People reported calling family members across the country to say their final goodbyes. Social media exploded with messages of terror and confusion. The alert was particularly terrifying because North Korea had been conducting ballistic missile tests throughout 2017, including ICBMs with sufficient range to reach Hawaii. Kim Jong-un and Donald Trump had been exchanging nuclear threats via Twitter. A North Korean attack on Hawaii seemed plausible to millions of Americans. Military personnel at Joint Base Pearl Harbor-Hickam received the same alert and began implementing emergency procedures. However, US Indo-Pacific Command quickly determined no missile launch had occurred and no attack was inbound. The problem was civilian authority: only the Hawaii Emergency Management Agency could send a correction alert, and they didn\'t know how. The agency had no standard procedure for correcting false alarms. Multiple employees tried different computer systems and phone numbers, but couldn\'t find the right process. It took 38 minutes for a correction to be sent: "There is no missile threat or danger to Hawaii. Repeat. False Alarm." By then, thousands of people had experienced what they believed were their final moments. Children asked their parents if they were going to die. Heart attack and anxiety-related emergency room visits spiked. Several car accidents occurred as people raced to find shelter. The incident revealed dangerous vulnerabilities in emergency alert systems and highlighted how quickly nuclear panic could spread in the social media age. A single employee\'s mistake had triggered mass hysteria across an entire state.',
    consequences: 'Led to resignations at HI-EMA and new safeguards for emergency alert systems nationwide. Revealed vulnerabilities in US emergency communication systems.',
    classifiedUntil: 'Never classified; immediately investigated by FCC and Congress',
    sources: ['FCC investigation report', 'Hawaii Emergency Management Agency records', 'Congressional testimony', 'Social media archives']
  }
]

const arsenalOverTime = [
  { year: 1945, us: 6, ussr: 0, total: 6, context: 'Trinity test. Hiroshima. Nagasaki. Nuclear age begins.' },
  { year: 1950, us: 369, ussr: 5, total: 374, context: 'Korean War. Truman considers using nuclear weapons in Korea.' },
  { year: 1955, us: 3057, ussr: 200, total: 3257, context: 'Hydrogen bomb developed. Arms race accelerates.' },
  { year: 1960, us: 20434, ussr: 1627, total: 22061, context: 'Eisenhower warns of military-industrial complex.' },
  { year: 1965, us: 31642, ussr: 6129, total: 37771, context: 'Vietnam War escalation. Nuclear threats against North Vietnam.' },
  { year: 1970, us: 26662, ussr: 11643, total: 38305, context: 'Nuclear Non-Proliferation Treaty signed.' },
  { year: 1975, us: 27826, ussr: 19443, total: 47269, context: 'US begins deploying Trident submarines.' },
  { year: 1980, us: 24304, ussr: 30062, total: 54366, context: 'Soviet Union achieves nuclear parity.' },
  { year: 1986, us: 23317, ussr: 40159, total: 63476, context: 'Peak of global nuclear arsenal. Chernobyl disaster.' },
  { year: 1990, us: 21392, ussr: 37000, total: 58392, context: 'Berlin Wall falls. Cold War ending.' },
  { year: 1995, us: 10953, ussr: 18000, total: 28953, context: 'START I reductions. Norwegian rocket incident.' },
  { year: 2000, us: 10577, ussr: 12000, total: 22577, context: 'Putin comes to power in Russia.' },
  { year: 2005, us: 8360, ussr: 7200, total: 15560, context: 'US begins nuclear modernization programs.' },
  { year: 2010, us: 5113, ussr: 5215, total: 10328, context: 'New START Treaty signed. Obama\'s "nuclear zero" vision.' },
  { year: 2015, us: 4717, ussr: 4500, total: 9217, context: 'Russia annexes Crimea. New Cold War begins.' },
  { year: 2020, us: 3750, ussr: 4315, total: 8065, context: 'Trump withdraws from INF Treaty, Open Skies Treaty.' },
  { year: 2025, us: 3708, ussr: 4380, total: 8088, context: 'Biden extends New START. China builds up nuclear forces.' },
]

const modernNuclearRisks = [
  {
    risk: 'Cyber Attacks on Nuclear Command Systems',
    severity: 9,
    description: 'US and Russian nuclear command systems rely on computer networks that could be infiltrated by hackers. A successful cyber attack could cause false launch warnings or prevent launch authorization when needed.',
    examples: ['2010: Stuxnet virus attacked Iranian nuclear facilities', '2016: Russian hackers penetrated US power grids', '2020: Solar Winds hack affected US government systems'],
    probability: 'Increasing as nuclear systems modernize and connect to broader networks'
  },
  {
    risk: 'AI-Enabled Launch Decisions', 
    severity: 8,
    description: 'Both the US and Russia are integrating artificial intelligence into nuclear warning systems. AI systems could process false data and recommend nuclear launches faster than humans can intervene.',
    examples: ['Russian Perimeter ("Dead Hand") system already partially automated', 'US missile defense systems use AI target identification', 'China developing AI-assisted nuclear command systems'],
    probability: 'Inevitable as military systems become more automated'
  },
  {
    risk: 'Regional Nuclear Conflicts',
    severity: 8,
    description: 'India-Pakistan, Israel-Iran, or North Korea conflicts could escalate to nuclear use, potentially drawing in the US and Russia through alliance commitments.',
    examples: ['2019: India-Pakistan aerial combat over Kashmir', '2020: China-India border clash with casualties', '2024: Iran-Israel strikes escalate to nuclear facilities'],
    probability: 'High - regional nuclear powers face increasing tensions'
  },
  {
    risk: 'Hypersonic Weapons',
    severity: 7,
    description: 'Hypersonic missiles travel at 5+ times the speed of sound and can change course unpredictably. This compresses decision-making time and makes defense nearly impossible.',
    examples: ['Russia deploys Kinzhal hypersonic missiles in Ukraine', 'China tests DF-ZF hypersonic glide vehicle', 'US develops Conventional Prompt Strike'],
    probability: 'All major powers deploying hypersonic weapons'
  },
  {
    risk: 'Nuclear Terrorism',
    severity: 6,
    description: 'Non-state actors could acquire nuclear materials to build dirty bombs or crude nuclear devices. Dozens of incidents of nuclear material theft occur annually.',
    examples: ['2007: Georgian smugglers arrested with highly enriched uranium', '2011: Japan lost track of 640kg of weapons-grade plutonium', '2016: Brussels airport bombers planned attack on nuclear facility'],
    probability: 'Growing as nuclear materials and expertise proliferate'
  },
  {
    risk: 'Climate Change and Nuclear Risk',
    severity: 6,
    description: 'Rising sea levels threaten nuclear facilities. Extreme weather could disrupt nuclear command systems. Climate-driven migration and resource conflicts could trigger nuclear-armed states.',
    examples: ['Hurricane Sandy flooded three nuclear plants in 2012', 'Fukushima disaster triggered by tsunami', 'Pakistani floods affect nuclear facilities'],
    probability: 'Increasing as climate effects intensify'
  }
]

const whatVictoryLooksLike = [
  { country: 'Japan', year: '1945', method: 'Nuclear weapons + conventional bombing + Soviet entry', outcome: 'Unconditional surrender, democratic ally, successful reconstruction', assessment: 'Clear victory' },
  { country: 'Germany', year: '1945', method: 'Massive conventional campaign + Soviet offensive', outcome: 'Unconditional surrender, democratic ally (West), successful reconstruction', assessment: 'Clear victory' },
  { country: 'Korea', year: '1950-53', method: '3-year ground war', outcome: 'Armistice, divided country, 70-year frozen conflict', assessment: 'Stalemate' },
  { country: 'Vietnam', year: '1955-75', method: '20-year war, 2.7M tons of bombs', outcome: 'Communist victory, unified under Hanoi', assessment: 'Clear defeat' },
  { country: 'Panama', year: '1989', method: 'Quick invasion (Operation Just Cause)', outcome: 'Noriega removed, democracy restored', assessment: 'Limited success' },
  { country: 'Iraq', year: '1991', method: '42-day air campaign + 100-hour ground war', outcome: 'Kuwait liberated, Saddam contained but remained in power', assessment: 'Limited success' },
  { country: 'Yugoslavia', year: '1999', method: '78-day air campaign', outcome: 'Milosevic withdrew from Kosovo, later removed from power', assessment: 'Limited success' },
  { country: 'Afghanistan', year: '2001-21', method: '20-year occupation', outcome: 'Taliban back in power, country collapsed', assessment: 'Clear defeat' },
  { country: 'Iraq', year: '2003-11', method: '8-year occupation', outcome: 'ISIS emerged, Iran-aligned government, ongoing instability', assessment: 'Strategic defeat' },
  { country: 'Libya', year: '2011', method: 'NATO air campaign', outcome: 'Failed state, civil war, ISIS affiliate, slave markets', assessment: 'Clear failure' },
]

const nuclearModernizationCosts = [
  { program: 'Sentinel ICBM (replacing Minuteman III)', cost: '$263.9B', timeline: '2020-2050', description: '400 new ICBMs in underground silos. More accurate, reliable, and survivable than current missiles.' },
  { program: 'Columbia-class submarines', cost: '$132B', timeline: '2021-2042', description: '12 new ballistic missile submarines. Each carries 16 Trident D5 missiles with up to 8 warheads each.' },
  { program: 'B-21 Raider bomber', cost: '$203B+', timeline: '2015-2050+', description: 'New stealth bomber designed to penetrate advanced air defenses and deliver nuclear weapons.' },
  { program: 'Long-Range Standoff Weapon (LRSO)', cost: '$10.5B', timeline: '2014-2030', description: 'Nuclear-capable cruise missile for B-21 and B-52 bombers.' },
  { program: 'W93 warhead for submarines', cost: '$14.8B', timeline: '2019-2040', description: 'First new nuclear warhead design in 30+ years. Will arm Trident D5 missiles.' },
  { program: 'Life extension programs', cost: '$60B+', timeline: 'Ongoing', description: 'Refurbishing existing nuclear warheads to extend their service life.' },
  { program: 'Nuclear command and control', cost: '$25B+', timeline: 'Ongoing', description: 'Upgrading communication systems, early warning networks, and command centers.' },
  { program: 'Nuclear infrastructure', cost: '$60B+', timeline: 'Ongoing', description: 'Rebuilding nuclear weapons production facilities, training ranges, and storage sites.' }
]

const faqItems = [
  {
    question: 'How many nuclear weapons exist today?',
    answer: 'Approximately 12,500 nuclear warheads globally as of 2025. The US has ~3,700, Russia ~4,400, China ~500, France ~290, UK ~225, Israel ~90, India ~165, Pakistan ~170, and North Korea ~50+. About 1,800 US and Russian warheads remain on high alert, ready to launch within minutes.'
  },
  {
    question: 'Could nuclear winter really end civilization?',
    answer: 'Yes. Modern climate modeling shows that a US-Russia nuclear exchange would inject 150+ million tons of soot into the stratosphere, blocking sunlight and dropping global temperatures 8-10°C for 2-5 years. This would eliminate growing seasons in the Northern Hemisphere and cause global famine affecting 1-5 billion people. Even a "limited" India-Pakistan nuclear war (100 weapons) would cause global cooling and crop failures affecting 2+ billion people.'
  },
  {
    question: 'Why do we still have so many nuclear weapons?',
    answer: 'Bureaucratic momentum, military-industrial complex profits, and political symbolism. The Pentagon estimates the US could maintain deterrence with 300-400 warheads, but the military-industrial complex makes $100+ billion annually from nuclear weapons. Politicians are afraid to appear "weak" by reducing the arsenal. Russia maintains large numbers partly because nuclear weapons are their only remaining claim to superpower status.'
  },
  {
    question: 'What is the "Dead Hand" system?',
    answer: 'Russia\'s Perimeter system, nicknamed "Dead Hand," is designed to automatically launch nuclear missiles if Russian leadership is killed in a first strike. The system uses seismic sensors, radiation detectors, and communication networks to determine if Russia is under nuclear attack. If it detects a nuclear strike and cannot reach Russian leadership, it can automatically launch nuclear retaliation. The system remains active today.'
  },
  {
    question: 'How close did we come to nuclear war during the 2026 Iran crisis?',
    answer: 'Unknown publicly. Several factors increased nuclear risks: Russia warned that strikes on Iran could affect Russian personnel, creating US-Russia confrontation risk; Iran threatened to close the Strait of Hormuz with Russian anti-ship missiles; Israel has ~90 nuclear weapons and faced unprecedented Iranian missile attacks; Pakistan, a nuclear power, shares a border with Iran. The current crisis involves more nuclear-armed states (US, Russia, Israel, Pakistan) than any since the Cuban Missile Crisis.'
  },
  {
    question: 'What would happen if terrorists got a nuclear weapon?',
    answer: 'Even a crude nuclear device would kill tens of thousands and cause trillions in economic damage. A 10-kiloton bomb detonated in Manhattan would kill 200,000+ people immediately and contaminate much of New York City for decades. The economic shock could trigger a global depression. The risk is real: dozens of incidents of nuclear material theft occur annually, and weapons-grade uranium exists in over 25 countries with varying security.'
  },
  {
    question: 'Why don\'t we just eliminate all nuclear weapons?',
    answer: 'The major nuclear powers refuse to give up their arsenals. The US and Russia view nuclear weapons as essential to their security and global influence. Verification would be extremely difficult - how do you prove someone has destroyed all their weapons? The knowledge to build nuclear weapons cannot be uninvented. However, the risk of keeping them may outweigh the benefits, especially as they age and proliferate to more countries.'
  },
  {
    question: 'Are nuclear weapons getting more dangerous?',
    answer: 'Yes, in several ways: hypersonic delivery systems compress decision-making time to minutes; cyber attacks could cause false launch warnings or prevent launches when needed; AI systems could recommend launches faster than humans can intervene; more countries are acquiring nuclear weapons, increasing accident risks; aging weapons systems become less predictable and harder to maintain safely.'
  }
]

export default function NuclearCloseCallsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Nuclear Close Calls' }]} />
      <ArticleSchema 
        title="Nuclear Close Calls: How Close We've Come to the End of the World"
        description="At least 22 documented incidents where nuclear war was minutes away. Cuban Missile Crisis, Stanislav Petrov, Able Archer 83, and more."
        url="/analysis/nuclear-close-calls"
      />

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
          The weapons still exist — 12,500 warheads, 1,800 on high alert. The luck may not hold.
        </p>
      </div>

      <ShareButtons title="Nuclear Close Calls: How Close We've Come to the End of the World" />

      {/* AI Overview */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">AI Overview — Key Data</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 Peak global nuclear arsenal: <strong className="text-white">63,476 warheads</strong> (1986) — enough to destroy civilization many times over.</li>
          <li>📊 Current arsenal: <strong className="text-white">~12,500 warheads</strong> (9 countries) — still enough to end human civilization.</li>
          <li>📊 <strong className="text-white">Stanislav Petrov</strong> (1983): One man defied protocol and saved the world from nuclear war triggered by a satellite error.</li>
          <li>📊 <strong className="text-white">Vasily Arkhipov</strong> (1962): Refused to authorize a nuclear torpedo during the Cuban Missile Crisis. One dissenting vote prevented Armageddon.</li>
          <li>📊 <strong className="text-white">Able Archer 83</strong>: A NATO exercise nearly triggered Soviet preemptive nuclear strike. Reagan was shocked when briefed.</li>
          <li>📊 US nuclear modernization plan: <strong className="text-white">$1.7 trillion</strong> over 30 years. We&apos;re building more, not fewer.</li>
          <li>📊 Time to launch: <strong className="text-white">4-6 minutes</strong> from presidential order to missile launch for US ICBMs.</li>
        </ul>
      </div>

      <NuclearTimeline arsenalData={arsenalOverTime} />

      {/* Nuclear Arsenal Table */}
      <div className="bg-stone-900 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Global Nuclear Arsenal (2025)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left text-white pb-2">Country</th>
                <th className="text-right text-white pb-2">Total Warheads</th>
                <th className="text-right text-white pb-2">Deployed</th>
                <th className="text-right text-white pb-2">High Alert</th>
                <th className="text-left text-stone-400 pb-2">Notes</th>
              </tr>
            </thead>
            <tbody className="text-stone-300">
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">United States</td>
                <td className="text-right py-2">3,708</td>
                <td className="text-right py-2">1,770</td>
                <td className="text-right py-2 text-red-400">800+</td>
                <td className="py-2 text-xs">Triad: ICBMs, SLBMs, bombers</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">Russia</td>
                <td className="text-right py-2">4,380</td>
                <td className="text-right py-2">1,710</td>
                <td className="text-right py-2 text-red-400">800+</td>
                <td className="py-2 text-xs">Largest arsenal, "Dead Hand" system</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">China</td>
                <td className="text-right py-2">500</td>
                <td className="text-right py-2">24</td>
                <td className="text-right py-2">0</td>
                <td className="py-2 text-xs">Rapid expansion, targeting 1,000+ by 2030</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">France</td>
                <td className="text-right py-2">290</td>
                <td className="text-right py-2">280</td>
                <td className="text-right py-2">0</td>
                <td className="py-2 text-xs">Submarine-based deterrent</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">United Kingdom</td>
                <td className="text-right py-2">225</td>
                <td className="text-right py-2">120</td>
                <td className="text-right py-2">0</td>
                <td className="py-2 text-xs">Trident submarines only</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">Pakistan</td>
                <td className="text-right py-2">170</td>
                <td className="text-right py-2">0</td>
                <td className="text-right py-2">0</td>
                <td className="py-2 text-xs">Tactical weapons, India-Pakistan tensions</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">India</td>
                <td className="text-right py-2">164</td>
                <td className="text-right py-2">0</td>
                <td className="text-right py-2">0</td>
                <td className="py-2 text-xs">No-first-use policy (officially)</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">Israel</td>
                <td className="text-right py-2">90</td>
                <td className="text-right py-2">0</td>
                <td className="text-right py-2">0</td>
                <td className="py-2 text-xs">Undeclared program, submarine-based</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">North Korea</td>
                <td className="text-right py-2">50+</td>
                <td className="text-right py-2">0</td>
                <td className="text-right py-2">0</td>
                <td className="py-2 text-xs">Rapid expansion, ICBM development</td>
              </tr>
              <tr className="border-t border-stone-700 font-bold">
                <td className="py-2 text-white">Total</td>
                <td className="text-right py-2 text-white">~12,577</td>
                <td className="text-right py-2 text-white">~3,904</td>
                <td className="text-right py-2 text-red-400">~1,600+</td>
                <td className="py-2 text-xs"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-stone-400 text-xs mt-3">
          Source: Federation of American Scientists Nuclear Notebook (2025). "High Alert" means ready to launch within 4-15 minutes.
        </p>
      </div>

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

      {/* Modern Nuclear Risks */}
      <div className="bg-stone-900 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">New Nuclear Risks in 2025</h2>
        <p className="text-stone-300 mb-4 text-sm">The risks that nearly triggered nuclear war in the Cold War still exist, but new threats have emerged:</p>
        <div className="space-y-4">
          {modernNuclearRisks.map((risk, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-semibold">{risk.risk}</h3>
                <div className="flex gap-0.5">
                  {Array.from({ length: 10 }).map((_, j) => (
                    <div
                      key={j}
                      className={`w-2 h-2 rounded-sm ${j < risk.severity ? 'bg-red-600' : 'bg-stone-700'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-stone-300 text-sm mb-3">{risk.description}</p>
              <div className="bg-stone-800 rounded p-3 mb-2">
                <p className="text-stone-400 text-xs font-semibold mb-1">Examples:</p>
                <ul className="text-stone-400 text-xs space-y-1">
                  {risk.examples.map((example, j) => (
                    <li key={j}>• {example}</li>
                  ))}
                </ul>
              </div>
              <p className="text-stone-500 text-xs"><strong>Probability:</strong> {risk.probability}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Incidents Timeline */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Close Calls</h2>
        <p className="text-stone-400 text-sm mb-4">
          Severity rated 1–10. A rating of 10 means nuclear war was prevented by a single decision or act. Click incidents for detailed analysis.
        </p>
        <div className="space-y-6">
          {incidents.map((incident, i) => (
            <details key={i} className="border border-stone-700 rounded-lg">
              <summary className="p-5 cursor-pointer hover:bg-stone-900/50">
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
                <p className="text-stone-300 text-sm">{incident.description}</p>
              </summary>
              <div className="px-5 pb-5 space-y-4">
                <div className="bg-stone-900/50 rounded p-4">
                  <h4 className="text-red-400 font-semibold text-sm mb-2">Detailed Analysis</h4>
                  <p className="text-stone-300 text-sm leading-relaxed">{incident.detailedAnalysis}</p>
                </div>
                <div className="bg-green-900/30 rounded p-3">
                  <span className="text-green-400 text-sm font-semibold">What saved us:</span>
                  <p className="text-stone-300 text-sm mt-1">{incident.whatSavedUs}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-xs text-stone-500">
                  <div>
                    <p><strong>Arsenal:</strong> {incident.nuclearArsenal}</p>
                    <p><strong>Potential deaths:</strong> {incident.potentialDeath}</p>
                  </div>
                  <div>
                    <p><strong>Classified until:</strong> {incident.classifiedUntil}</p>
                    <p><strong>Consequences:</strong> {incident.consequences}</p>
                  </div>
                </div>
                <div className="border-t border-stone-700 pt-3">
                  <p className="text-stone-500 text-xs"><strong>Sources:</strong> {incident.sources.join(', ')}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Heroes Nobody Knows</h2>
        <p>
          Two men deserve special recognition for literally saving the world:
        </p>
        <p>
          <strong>Vasily Arkhipov</strong> (1926–1998) was a Soviet Navy officer aboard submarine B-59 during the
          Cuban Missile Crisis. When the captain and political officer agreed to launch a nuclear torpedo at the US
          Navy, Arkhipov alone refused. Had he agreed, the torpedo would have destroyed a US aircraft carrier group,
          and the resulting escalation would almost certainly have triggered full nuclear war. Arthur Schlesinger,
          Kennedy advisor, later called it "the most dangerous moment in human history." Arkhipov died in
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
      </div>

      {/* Nuclear Winter Effects Table */}
      <div className="bg-stone-900 rounded-lg p-6 my-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">Nuclear Winter Effects (US-Russia Exchange)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left text-white pb-2">Timeframe</th>
                <th className="text-left text-white pb-2">Effect</th>
                <th className="text-right text-white pb-2">Scale</th>
                <th className="text-left text-stone-400 pb-2">Details</th>
              </tr>
            </thead>
            <tbody className="text-stone-300">
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">Minutes - Hours</td>
                <td className="py-2">Immediate deaths</td>
                <td className="text-right py-2 text-red-400">300-500M</td>
                <td className="py-2 text-xs">Blast, heat, radiation in targeted areas</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">Hours - Days</td>
                <td className="py-2">Firestorms</td>
                <td className="text-right py-2">150M tons soot</td>
                <td className="py-2 text-xs">Burning cities inject particles into stratosphere</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">Weeks - Months</td>
                <td className="py-2">Temperature drop</td>
                <td className="text-right py-2">8-10°C</td>
                <td className="py-2 text-xs">Global average temperature falls below ice age levels</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">Months - Years</td>
                <td className="py-2">Ozone destruction</td>
                <td className="text-right py-2">50-70%</td>
                <td className="py-2 text-xs">UV radiation becomes lethal at Earth&apos;s surface</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">1-5 Years</td>
                <td className="py-2">Agricultural collapse</td>
                <td className="text-right py-2">90%+ crop loss</td>
                <td className="py-2 text-xs">Growing seasons eliminated in Northern Hemisphere</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">5-20 Years</td>
                <td className="py-2">Famine deaths</td>
                <td className="text-right py-2 text-red-400">1-5B</td>
                <td className="py-2 text-xs">Mass starvation as food production collapses globally</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-stone-400 text-xs mt-3">
          Sources: Robock et al. (2007), Toon et al. (2019), Reisner et al. (2018). Even a "limited" India-Pakistan nuclear war (100 weapons) would cause global cooling and affect 2+ billion people.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <p>
          Even a "limited" nuclear exchange — say, 100 warheads between India and Pakistan — would produce
          enough soot to drop global temperatures by 1–2°C and cause a global famine affecting 2 billion people.
          There is no such thing as a limited nuclear war.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The $1.7 Trillion Modernization: Building Better Doomsday Weapons</h2>
        <p>
          Rather than reducing the nuclear threat, the United States is <em>expanding</em> it. The current nuclear
          modernization plan — begun under Obama, continued under Trump and Biden — will spend $1.7 trillion over
          30 years to build newer, more capable weapons of mass destruction:
        </p>
      </div>

      {/* Nuclear Modernization Table */}
      <div className="bg-stone-900 rounded-lg p-6 my-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">US Nuclear Modernization Programs</h3>
        <div className="space-y-4">
          {nuclearModernizationCosts.map((program, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-semibold">{program.program}</h4>
                <span className="text-red-400 font-bold">{program.cost}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-stone-400 text-sm">{program.timeline}</span>
              </div>
              <p className="text-stone-300 text-sm">{program.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-slate-800 rounded-lg">
          <p className="text-red-400 font-semibold">Total Nuclear Modernization Cost: $1.7 trillion over 30 years</p>
          <p className="text-stone-300 text-sm">This represents a complete replacement of the nuclear triad with newer, more capable weapons. The argument is "modernization," but the effect is to perpetuate the nuclear arsenal for another 50 years.</p>
        </div>
      </div>

      {/* Nuclear Command Timeline */}
      <div className="bg-stone-900 rounded-lg p-6 my-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">Nuclear Launch Timeline: 4 Minutes to Armageddon</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-red-400 font-mono text-sm w-16">T+0:00</span>
            <span className="text-white">Threat detected by satellite/radar</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-400 font-mono text-sm w-16">T+0:30</span>
            <span className="text-white">NORAD confirms attack, notifies Pentagon</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-400 font-mono text-sm w-16">T+2:00</span>
            <span className="text-white">President briefed, given nuclear options</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-400 font-mono text-sm w-16">T+4:00</span>
            <span className="text-white">President decides, authenticates order</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-400 font-mono text-sm w-16">T+6:00</span>
            <span className="text-white">Launch order transmitted to missile crews</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-400 font-mono text-sm w-16">T+10:00</span>
            <span className="text-white">ICBMs launch from silos</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-400 font-mono text-sm w-16">T+30:00</span>
            <span className="text-white">Nuclear warheads impact targets</span>
          </div>
        </div>
        <p className="text-stone-400 text-xs mt-4">
          The President has approximately 4-6 minutes to decide whether to end human civilization. No president has ever been adequately prepared for this decision. The nuclear "football" follows the president everywhere, 24/7/365.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Current Danger: The Iran Factor and Multipolar Nuclear Risk</h2>
        <p>
          The 2026 Iran crisis adds a new dimension to nuclear risk. While Iran does not have nuclear weapons, the
          current US military campaign against Iran — including strikes on suspected nuclear facilities — raises
          several escalatory risks that didn&apos;t exist during the bipolar US-Soviet Cold War:
        </p>
        <ul>
          <li><strong>Russia:</strong> Has warned that strikes on Iran could affect Russian advisors and equipment, creating a direct US-Russia confrontation risk</li>
          <li><strong>Israel:</strong> Has ~90 undeclared nuclear weapons and faced unprecedented Iranian missile salvos (186 missiles + 812 drones in 48 hours)</li>
          <li><strong>Pakistan:</strong> Nuclear-armed neighbor of Iran with historical ties. Pakistani public opinion strongly opposes US strikes on Iran</li>
          <li><strong>China:</strong> Iran&apos;s largest oil customer and strategic partner. Chinese naval forces deployed to protect shipping lanes</li>
          <li><strong>Regional proxies:</strong> Hezbollah (~150,000 rockets), Houthis (Red Sea attacks), Iraqi militias create multiple escalation possibilities</li>
        </ul>
        <p>
          This is the first major crisis involving five nuclear-armed states (US, Russia, Israel, Pakistan, China) since
          the Cuban Missile Crisis involved only two. The complexity of alliance relationships, proxy conflicts, and
          economic interdependencies makes escalation control far more difficult than the relatively simple US-Soviet
          standoff of 1962.
        </p>
      </div>

      {/* Historical War Outcomes */}
      <div className="bg-stone-900 rounded-lg p-6 my-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">Nuclear Threats in US Wars Since 1945</h3>
        <p className="text-stone-300 text-sm mb-4">The US has considered using nuclear weapons in every major conflict since World War II:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left text-white pb-2">War</th>
                <th className="text-left text-white pb-2">Years</th>
                <th className="text-left text-white pb-2">Nuclear Threat/Consideration</th>
                <th className="text-left text-white pb-2">Why Not Used</th>
              </tr>
            </thead>
            <tbody className="text-stone-300">
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">Korean War</td>
                <td className="py-2">1950-53</td>
                <td className="py-2">MacArthur wanted to nuke China</td>
                <td className="py-2">Truman fired MacArthur</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">Vietnam War</td>
                <td className="py-2">1964-75</td>
                <td className="py-2">Operation Duck Hook considered tactical nukes</td>
                <td className="py-2">Public opposition, no clear targets</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">Gulf War</td>
                <td className="py-2">1991</td>
                <td className="py-2">Bush Sr. threatened nuclear response to chemical weapons</td>
                <td className="py-2">Iraq didn&apos;t use chemical weapons</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">Afghanistan</td>
                <td className="py-2">2001-21</td>
                <td className="py-2">Bush considered nukes against deep bunkers</td>
                <td className="py-2">Conventional weapons sufficient</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-2 font-semibold">Iraq War</td>
                <td className="py-2">2003-11</td>
                <td className="py-2">Pre-positioned nuclear weapons in region</td>
                <td className="py-2">Quick conventional victory</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Iran Crisis</td>
                <td className="py-2">2026-?</td>
                <td className="py-2">Trump: "All options on the table"</td>
                <td className="py-2">TBD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-stone-400 text-xs mt-3">
          The US remains the only country to use nuclear weapons in warfare (Hiroshima, Nagasaki, 1945). Every president since Truman has considered their use.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;I know not with what weapons World War III will be fought, but World War IV will be fought with
          sticks and stones.&rdquo;</p>
          <footer>— Albert Einstein (attributed)</footer>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Libertarian Case Against Nuclear Weapons</h2>
        <p>
          Nuclear weapons represent the ultimate concentration of power in the hands of the state — the power to end
          human civilization with a single decision. No individual, no matter how democratically elected, should have
          this authority. The nuclear launch process bypasses Congress, courts, and any meaningful oversight. It is
          the most anti-democratic power structure ever created.
        </p>
        <p>
          The economic argument is equally damning. The US has spent over <strong>$10 trillion</strong> (2023 dollars)
          on nuclear weapons since 1940. The current $1.7 trillion modernization plan could instead fund:
        </p>
        <ul>
          <li>Complete rebuild of America&apos;s infrastructure ($4.6 trillion need)</li>
          <li>Free college tuition for 30+ years</li>
          <li>Universal healthcare for a decade</li>
          <li>Elimination of the national debt</li>
        </ul>
        <p>
          Instead, we&apos;re building better weapons to destroy the world. The military-industrial complex profits
          immensely from nuclear weapons — they generate $100+ billion annually with no product testing (you can&apos;t
          test-fire a nuclear missile without starting a war) and no performance accountability. It&apos;s the perfect
          government contract: infinitely expensive, impossible to verify, and absolutely essential for "national security."
        </p>
        <p>
          Nuclear weapons haven&apos;t prevented wars — the US has fought continuously since 1945, and nuclear-armed
          states regularly fight each other (India-Pakistan, Israel-Arab states, Russia-Ukraine). They&apos;ve simply
          made wars more dangerous and given governments the ability to threaten mass murder as foreign policy.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line</h2>
        <p>
          We are alive today not because nuclear deterrence works, but because we have been extraordinarily lucky.
          On at least 22 documented occasions, technical malfunctions, human error, or miscommunication brought the
          world to the brink of nuclear war. Each time, we were saved by an individual who chose not to follow
          protocol — a Soviet submarine officer, a radar operator, a lieutenant colonel — or by a lucky coincidence.
        </p>
        <p>
          The weapons are still here. There are 12,500+ nuclear warheads in the world, 90% held by the United States
          and Russia. Both countries are modernizing their arsenals. New risks — cyber attacks on command systems,
          AI-enabled launch decision-making, regional conflicts that could escalate — make the current period
          potentially more dangerous than the Cold War.
        </p>
        <p>
          The Doomsday Clock, maintained by the Bulletin of the Atomic Scientists, stands at 90 seconds to midnight —
          the closest it has ever been. The scientists who built the bomb are telling us we are in more danger than
          at any point since 1947. We should listen.
        </p>

        <p>
          Every nuclear weapon in existence today was built with taxpayer money, maintained with taxpayer money, and 
          pointed at taxpayers in other countries. We are paying for our own potential annihilation. The only rational 
          policy is abolition — not someday, not when conditions are perfect, but now, while we still can.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-stone-900 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <details key={i} className="border-b border-stone-700 pb-4">
              <summary className="cursor-pointer text-white font-semibold hover:text-red-400">
                {item.question}
              </summary>
              <p className="text-stone-300 text-sm mt-2 pl-4">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Sources Section */}
      <div className="bg-stone-100 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Sources & Further Reading</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Books & Reports</h3>
            <ul className="space-y-1 text-stone-600">
              <li>• Schlosser, Eric. <em>Command and Control</em> (2013)</li>
              <li>• Rhodes, Richard. <em>The Making of the Atomic Bomb</em> (1986)</li>
              <li>• Lewis, Patricia. <em>Too Close for Comfort</em>, Chatham House (2014)</li>
              <li>• Ellsberg, Daniel. <em>The Doomsday Machine</em> (2017)</li>
              <li>• Perry, William J. <em>My Journey at the Nuclear Brink</em> (2015)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Primary Sources</h3>
            <ul className="space-y-1 text-stone-600">
              <li>• National Security Archive (nsarchive.gwu.edu)</li>
              <li>• Federation of American Scientists Nuclear Notebook</li>
              <li>• Bulletin of the Atomic Scientists</li>
              <li>• NORAD/NORTHCOM Historical Records</li>
              <li>• Declassified NSA documents (2005)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <RelatedArticles articles={[
        {slug: "cost-of-iran", title: "What Will Iran Cost?", desc: "Projecting the price of Operation Epic Fury."},
        {slug: "lies-that-started-wars", title: "Lies That Started Wars", desc: "Gulf of Tonkin, WMDs, and the pattern of deception."},
        {slug: "cost-of-secrecy", title: "The Cost of Secrecy", desc: "Black budgets and overclassification."}
      ]} />

      <BackToTop />
    </div>
  )
}