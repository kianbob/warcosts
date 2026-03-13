import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Whose War Is This? The Iran Conflict Nobody Asked For',
  description: 'Operation Epic Fury Day 13: 8 US troops dead. 1,348+ Iranians killed. 17,000 injured. $11.3B in 6 days. 5,000+ targets struck. Hormuz mined. Oil past $100. KC-135 crashed. 12 countries under fire. Who benefits?',
  openGraph: {
    title: 'Whose War Is This? The Iran Conflict Nobody Asked For',
    description: 'Operation Epic Fury launched without congressional approval. Who benefits? Not the American people.',
    url: 'https://www.warcosts.org/analysis/iran-2026',
  },
}

const timeline = [
  { date: 'Oct 7, 2023', event: 'Hamas attacks Israel. Israel begins devastating 16-month campaign in Gaza, killing 40,000+ Palestinians. US provides intelligence and weapons throughout.' },
  { date: '2024', event: 'Israel and Iran exchange strikes twice (April and October). Israel systematically dismantles Hezbollah leadership and Hamas command structure.' },
  { date: 'June 2025', event: 'Operation Midnight Hammer: US conducts 37-hour strike campaign against Iran\'s nuclear facilities. Cost: $2.25 billion for less than 2 days.' },
  { date: 'Late Dec 2025', event: 'Massive anti-government protests erupt across 100+ Iranian cities — the largest since 1979. Driven by economic collapse and the rial\'s crash.' },
  { date: 'Jan 8-10, 2026', event: 'Iranian government massacres protesters. IRGC and Basij use live ammunition, mounted machine guns, and drones against civilians. Death toll estimates: 3,117 (govt), 7,000 (HRANA), 32,000 (Trump), 43,000 (Int\'l Centre for Human Rights). At least 26,541 detained.' },
  { date: 'Jan 13', event: 'Trump tells Iranians to "keep protesting" and "take over your institutions." Adds: "help is on its way."' },
  { date: 'Jan 23', event: 'Trump announces US "armada" heading to Middle East — USS Abraham Lincoln + USS Gerald R. Ford carrier strike groups + guided-missile destroyers. Largest buildup since 2003 Iraq invasion.' },
  { date: 'Feb 3', event: 'IRGC Navy attempts to board US-flagged tanker M/V Stena Imperative in Strait of Hormuz.' },
  { date: 'Feb 6', event: 'US-Iran indirect nuclear negotiations begin in Muscat, Oman. Iran says "progress depends on consultations." Second round scheduled for Geneva.' },
  { date: 'Feb 11', event: '47th anniversary of 1979 revolution marked by pro-government rallies and strong anti-American rhetoric.' },
  { date: 'Feb 13', event: 'Trump states regime change in Iran would be "the best thing that could happen."' },
  { date: 'Feb 24', event: 'Trump envoy Witkoff speaks at AIPAC conference. AIPAC has spent $221 million on US political campaigns since 2021.' },
  { date: 'Feb 26-27', event: 'Witkoff and Kushner meet Iranian delegation in Geneva. Araghchi says "good progress." Oman says talks will resume in Vienna. Americans say nothing. USS Gerald R. Ford arrives in Haifa — armada at full complement.' },
  { date: 'Feb 27', event: 'CENTCOM commander and Joint Chiefs chair brief Trump on military options. US ambassador in Israel tells staff to leave the country immediately.' },
  { date: 'Feb 27 (eve)', event: 'Oman\'s foreign minister Badr Albusaidi makes urgent trip to Washington, meets VP Vance, pleads for more time for diplomacy. Rejected.' },
  { date: 'Feb 28, 9:15am Tehran', event: 'Bombs start falling in broad daylight. Not at night — in the morning, after workers arrived at their desks and children arrived at school. Deliberate timing for a decapitation strike.' },
  { date: 'Feb 28, 10:30am', event: 'Two rounds of explosions along Pasteur Street — Iran\'s government zone. Supreme leader\'s compound, president\'s office, national security HQ all hit. Satellite photos show Khamenei\'s compound as "dark grey mess of dust and ash."' },
  { date: 'Feb 28', event: 'Mossad posts Farsi message on Telegram calling for uprising: "Our Iranian brothers and sisters, you are not alone! Together we will return Iran to its glorious days."' },
  { date: 'Feb 28', event: '168 people killed when Israeli strike hits Shajareh Tayyebeh girls\' elementary school in Minab, Hormozgan province (initial reports said 108, later revised to 168). 158 students ages 7-12 were attending morning classes. IRGC base nearby may have been the target.' },
  { date: 'Feb 28, 2:30am DC', event: 'Trump posts 8-minute video on Truth Social announcing "major combat operations in Iran" — Operation Epic Fury. Tells Iranians: "When we are finished, take over your government. This will be, probably, your only chance for generations."' },
  { date: 'Feb 28', event: 'Iran retaliates with missiles and drones across the entire region: Israel, Bahrain, Kuwait, Jordan, Qatar, Iraq, Saudi Arabia, UAE, Syria. Dubai\'s Fairmont hotel on Palm Jumeirah set ablaze. Airports in Dubai and Abu Dhabi hit. British bases in Cyprus targeted.' },
  { date: 'Feb 28', event: 'Iran closes the Strait of Hormuz — 20% of global oil and 20% of global LNG flows through it. Bloomberg warns of major oil price spike. Cannot be replaced.' },
  { date: 'Feb 28', event: 'Houthis announce resumption of Red Sea attacks.' },
  { date: 'Mar 1', event: 'Iranian state media confirms Khamenei is dead. 40 days of mourning declared. Iran\'s parliament security chair warns: "You have started down a path that is beyond your control."' },
  { date: 'Mar 1', event: 'Tucker Carlson calls the attack "absolutely disgusting and evil." Rand Paul and Tim Kaine co-sponsor War Powers resolution. MAGA base fractures.' },
  { date: 'Mar 1', event: 'US and Israel launch second wave of intensive strikes across Iran. CENTCOM announces 1,000+ targets hit. Trump says 48 Iranian leaders killed and 9 Iranian naval vessels sunk.' },
  { date: 'Mar 1', event: 'Pentagon confirms 3 US service members killed in action, at least 5 seriously wounded — the first American combat casualties of Operation Epic Fury.' },
  { date: 'Mar 1', event: 'Iran\'s IRGC announces sixth wave of "extensive missile and drone" attacks targeting Israeli military assets and 27 US bases across the Middle East. Blasts heard in Dubai, Doha, Erbil. Beit Shemesh (Israel) hit — 9 killed, 3 injured.' },
  { date: 'Mar 1', event: 'Trump tells CNBC operations are "ahead of schedule" and estimates the campaign will take "four weeks or less." Says he\'s "willing to talk" to new Iranian leadership.' },
  { date: 'Mar 1', event: 'Senate votes 53-47 AGAINST Kaine-Paul War Powers Resolution. Rand Paul is the only Republican to vote yes. The war continues without congressional authorization.' },
  { date: 'Mar 1', event: 'Oil majors and top trading houses suspend crude shipments through Strait of Hormuz. Analysts warn oil could exceed $100/barrel. Insurance premiums for tankers triple. Thousands of flights cancelled across the Middle East.' },
  { date: 'Mar 1 (eve)', event: 'Trump posts evening video vowing to "avenge" fallen service members. Says "there will likely be more" US casualties. Iran\'s FM: "We will resist as long as it takes." No end in sight.' },
  { date: 'Mar 2', event: '6 US service members now confirmed killed (ground forces in Kuwait), 18 injured. 3 US F-15E jets shot down by Kuwaiti air defenses (friendly fire) — all 6 crew ejected safely.' },
  { date: 'Mar 2', event: 'Iranian Red Crescent: 555+ Iranians killed (later revised to 787+). Hengaw (Norway-based human rights org): 1,500+ dead including 200 civilians and 1,300 Iranian forces.' },
  { date: 'Mar 2', event: '168 killed in Minab school strike (updated from 108). Rescue operations ongoing.' },
  { date: 'Mar 2', event: 'Hezbollah launches attacks on Israel from Lebanon in revenge for Khamenei killing. Israel responds with strikes killing 31+ in Lebanon. Lebanon bans Hezbollah military actions, trying to avoid being drawn in. Israeli strikes kill 52 in Lebanon total, displace 30,000+.' },
  { date: 'Mar 2', event: 'Iran claims it targeted 500 US/Israeli sites, hit 3 US/UK oil tankers in Gulf. US embassy in Riyadh hit by 2 drones — fire at compound, embassy closed. Saudi Ras Tanura refinery hit by drone, operations halted. QatarEnergy halts LNG production.' },
  { date: 'Mar 2', event: 'Oil hits $82/barrel, European diesel up 20%, analysts warning $100+. State Dept urges Americans to "DEPART NOW" from 14 Middle Eastern countries.' },
  { date: 'Mar 2', event: 'Trump says war will last "4-5 weeks" but has "capability to go far longer." Doesn\'t rule out boots on ground.' },
  { date: 'Mar 2', event: 'Rubio admits US attacked "pre-emptively" — "We knew Israel was going to strike... we knew that would precipitate an attack against American forces." Rubio: "The hardest hits are yet to come."' },
  { date: 'Mar 2', event: 'White House: 49 senior Iranian leaders killed in strikes. Iran: "We will not negotiate with the United States" (Ali Larijani). Iran FM Araghchi: "We left Geneva with understanding that we\'d seal a deal... Mr. Trump ordered bombing of the negotiating table."' },
  { date: 'Mar 2', event: 'US military says it destroyed all Iranian ships in Gulf of Oman, sunk 11 warships total. US struck 1,250+ targets in Iran since operations began. Iran says it shot down a US F-15, fired 15 cruise missiles at Ali al-Salem base in Kuwait.' },
  { date: 'Mar 2', event: 'Australian airbase in UAE hit by Iranian drones. RAF Akrotiri (Cyprus) targeted — 2 drones intercepted. Iran-backed militias in Iraq fire at US base in Erbil, drone attack on Baghdad airport. Saudi Arabia intercepts 8 drones near Riyadh and Al-Kharj.' },
  { date: 'Mar 2', event: 'Netanyahu says war won\'t be "endless" — "quick and decisive." Says Iran\'s nuclear bunkers would have been "immune within months." UK PM Starmer: UK "doesn\'t believe in regime change from the skies."' },
  { date: 'Mar 3', event: 'Iran death toll tops 787 per Red Crescent (Hengaw says 1,500+). Israeli air force attacks Tehran and Beirut SIMULTANEOUSLY — "extensive strikes" against Iranian regime and Hezbollah.' },
  { date: 'Mar 3', event: 'IRIB (state broadcaster) complex struck in Tehran. Historic Golestan Palace (UNESCO World Heritage Site) damaged. IAEA confirms Natanz fuel enrichment plant entrance buildings damaged.' },
  { date: 'Mar 3', event: 'Netanyahu and Katz approve Israeli GROUND INCURSION into southern Lebanon. Israel issues "urgent" evacuation orders for 59 areas in Lebanon. IDF says "all options on table."' },
  { date: 'Mar 3', event: 'UAE: 186 missiles and 812 drones sent toward country since start of conflict. Two ports in Oman targeted in drone strikes.' },
  { date: 'Mar 3', event: 'Qatar intercepts dozens of Iranian missiles/drones; 2 missiles hit Al Udeid Air Base; Qatar air force shoots down 2 Iranian jets — QATAR STRIKES IRAN in retaliation (first Gulf state to directly engage).' },
  { date: 'Mar 3', event: 'US embassies in BOTH Saudi Arabia and Kuwait fully closed. US embassy in Jordan (Amman) temporarily evacuated all staff. Multiple countries organizing citizen evacuations — Spain, Italy, Germany, France, UK.' },
  { date: 'Mar 3', event: 'Iran Revolutionary Guards threaten to "burn any ship" in Strait of Hormuz. US CENTCOM disputes — says strait is not fully closed.' },
  { date: 'Mar 3', event: 'Trump denies Israel pulled US into war — says he "might have forced Israel\'s hand." Says most people US had in mind to lead post-regime Iran "are dead." Trump: campaign "was our last, best chance to strike."' },
  { date: 'Mar 3', event: 'Israel says it "dismantled" Iranian regime\'s headquarters. Israel bolsters forces in southern Lebanon.' },
  { date: 'Mar 3', event: 'Brent crude tops $83/barrel. US gas prices poised to jump to $3.35/gallon (from ~$3.10). Oil supertanker rates hit ALL-TIME HIGHS. Insurers dropping war risk coverage entirely.' },
  { date: 'Mar 3', event: 'Amazon Web Services: multiple data centers knocked OFFLINE by drone attacks in Middle East — disrupting cloud services globally.' },
  { date: 'Mar 3', event: 'Sen. Mark Warner: "We have seen the goals change four or five times." Europe told of Iran strikes just "minutes" before they started.' },
  { date: 'Mar 3', event: 'US military says more forces headed to region, declines to say how long war could last. Shifting justifications exposed: nuclear weapons → ballistic missiles → regime change → sinking Iranian fleet. No coherent strategy.' },
  { date: 'Mar 4 (Day 5)', event: 'US/Israeli campaign transitions to Phase 2: targeting Iranian defense industrial assets and missile production facilities. Rubio announces strikes will "increase in intensity." CENTCOM reports 2,000 targets destroyed, 19 ships sunk, 1 submarine disabled.' },
  { date: 'Mar 4', event: 'IDF F-35I "Adir" shoots down Russian-made Iranian Yak-130 fighter jet over Tehran — first stealth fighter air-to-air kill in history. Israeli strikes hit Basij headquarters, missile launch pads, and supply logistics directorate.' },
  { date: 'Mar 4', event: 'US submarine sinks Iranian warship IRIS Dena off the coast of Sri Lanka, killing 87 crew — the ship was returning from an international fleet review in India. A second warship (Soleimani-class corvette) sunk at Bandar Abbas the same day.' },
  { date: 'Mar 4', event: 'Iran has now fired 500+ ballistic/naval missiles and ~2,000 drones since Feb 28. 40% aimed at Israel, 60% at US targets in the Gulf. Rate of Iranian launches declining — analysts cite depletion of missile stocks and rationing for a longer war.' },
  { date: 'Mar 4', event: 'IRGC Navy claims it blew up 10 commercial vessels attempting to transit the Strait of Hormuz, plus one near Port Muscat. Iran attacks Azerbaijan with drones — striking Nakhchivan airport terminal — marking the 11th country under Iranian fire. NATO shoots down an Iranian missile over Hatay, Turkey.' },
  { date: 'Mar 4', event: 'Kurdish rebellion emerges in Iranian Kurdistan. Kurdish fighters seize opportunities as IRGC forces are diverted. Iran strikes Kurdish militia positions in Iraq. Ali Larijani warns "secessionist groups" of severe consequences.' },
  { date: 'Mar 4', event: 'Mojtaba Khamenei — son of the assassinated Supreme Leader — emerges as frontrunner for succession, backed by the IRGC. Iran International reports he has been selected, but official announcement delayed until after funeral (which itself has been postponed due to ongoing strikes).' },
  { date: 'Mar 5 (Day 6)', event: 'Israel launches "broad-scale wave of strikes" on key regime infrastructure in Tehran capital. IDF chief says Israel has carried out 2,500 strikes with more than 6,000 weapons. Claims 80% of Iran\'s air defenses destroyed — near-complete air superiority.' },
  { date: 'Mar 5', event: 'B-2 bombers drop dozens of 2,000-lb penetrator bombs targeting deeply buried ballistic missile launchers. Result: 90% DROP in Iranian ballistic missile attacks. Pentagon also targeting missile production facilities — Phase 2 of the air campaign.' },
  { date: 'Mar 5', event: '30+ Iranian naval vessels sunk or neutralized. Iranian drone carrier reportedly on fire. Combined US-Israeli naval dominance in the Gulf near-total.' },
  { date: 'Mar 5', event: 'Hezbollah escalation: 38 attacks on Israel in the past day. IDF responds with massive strikes on Beirut\'s southern suburbs (Dahiyeh) and the Beqaa Valley. IDF chief says forces will "push deeper into Lebanon." 80,000+ displaced in Lebanon.' },
  { date: 'Mar 5', event: 'Massive damage to Bahrain oil refinery from Iranian strike. State of emergency declared in Bahrain; Khalifa bin Salman Port operations halted. Iran strikes Qatar with biggest barrage yet. UAE struck at Jabal Ali Port (Dubai) and Zayed Port (Abu Dhabi).' },
  { date: 'Mar 5', event: 'Trump rejects Mojtaba Khamenei as successor — tells Axios "Khamenei\'s son is a lightweight" and calls it "unacceptable." Israel vows to target any new Supreme Leader. Trump insists the US should have a role in selecting Iran\'s next leader.' },
  { date: 'Mar 5', event: 'European warships deploying to Eastern Mediterranean. France, UK, Greece, Italy, Netherlands, Spain participating in defensive operations. EU expands Operation Aspides. Greece deploys frigates and F-16s to defend Cyprus.' },
  { date: 'Mar 6 (Day 7)', event: 'Israeli strike hits area near Mehrabad Airport in Tehran — Iran\'s primary international civilian hub. Residents report "giant ball of fire and smoke." CNN reporter in Tehran: heavy smoke and plumes visible across the capital.' },
  { date: 'Mar 6', event: 'BOMBSHELL: Russia is providing Iran with real-time intelligence on the locations of US military assets — including warships, aircraft, and troop positions — according to Washington Post, NYT, CNN, and NBC citing US officials. Putin and Pezeshkian speak by phone. One source calls it "a pretty comprehensive effort."' },
  { date: 'Mar 6', event: 'Trump demands Iran\'s "UNCONDITIONAL SURRENDER." Iran FM Araghchi responds: "confident" Iran can resist a ground invasion, no negotiations. Tehran warns Europe to "stay out" or face "retaliation."' },
  { date: 'Mar 6', event: 'Strait of Hormuz: near-total halt — zero oil shipments in 24 hours. Oil prices surging: Brent crude jumped from ~$70 pre-war to $80+. Gas prices up 30% to three-year high. Dow dropped 1,200 points at open on Mar 3, closed -400; S&P 500 -0.7%.' },
  { date: 'Mar 6', event: 'US DFC announces $20 billion insurance plan for American businesses\' overseas losses. Combined strikes on Esteghlal Industrial Zone in Tehran Province — defense companies linked to Iran\'s missile program.' },
  { date: 'Mar 6', event: 'Iranian death toll: 1,230-1,332+ (Red Crescent / HRANA figures). Minab school airstrike death toll confirmed at 168 (revised from initial 108). US casualties stable at 6 killed, 18-20 injured. Internet blackout continues in Iran — now 7+ days offline.' },
  { date: 'Mar 6', event: 'IAEA confirms: no nuclear material damage from strikes. Azerbaijan\'s security service claims to have foiled Iranian terror plots against the Baku-Tbilisi-Ceyhan pipeline, Israeli embassy, and Jewish community targets.' },
  { date: 'Mar 6', event: 'Iran is now attacking 11+ countries. The war has expanded every single day. One week in, there is no ceasefire, no negotiations, no exit strategy, and no end in sight.' },
]

const regimeChangeHistory = [
  { country: 'Iran', year: '1953', method: 'CIA coup (Operation Ajax)', result: 'Installed Shah → brutal 26-year dictatorship → 1979 Islamic Revolution → 45 years of hostility → current conflict. The regime we\'re bombing exists because of the last time we did this.', success: false },
  { country: 'Guatemala', year: '1954', method: 'CIA coup (Operation PBSUCCESS)', result: '36-year civil war, 200,000 dead (mostly indigenous civilians), ongoing instability and migration crisis to this day.', success: false },
  { country: 'Chile', year: '1973', method: 'CIA-backed military coup', result: '17-year Pinochet dictatorship, 3,000+ killed, 30,000 tortured. Democracy restored only after Pinochet left voluntarily.', success: false },
  { country: 'Iraq', year: '2003', method: 'Full military invasion (150,000 troops)', result: '$2.4T cost, 300,000+ dead, destroyed civil society, created ISIS, Iran GAINED regional influence. 20 years later Iraq is still broken.', success: false },
  { country: 'Libya', year: '2011', method: 'NATO air campaign + rebel support', result: 'Failed state, civil war, open slave markets, weapons flooded across Sahel fueling African insurgencies. Obama called it the "worst mistake" of his presidency.', success: false },
  { country: 'Syria', year: '2011–present', method: 'Armed rebel support + airstrikes', result: '500,000 dead, 13 million displaced (half the population), Russia and Iran gained ground, ISIS rose and fell, Assad stayed until 2025.', success: false },
  { country: 'Venezuela', year: '2026', method: 'Naval blockade + special operations + regime capture', result: 'Maduro captured and extracted. But 700+ political prisoners still held, Cabello controls security forces, armed gangs run streets. Trump already threatening new leader. "Tell me how this ends."', success: false },
]

const whoBenefits = [
  {
    who: '🇮🇱 Israel / Netanyahu',
    benefit: 'Eliminates its self-described "existential" rival. Netanyahu called it "historic" and thanked Trump for his "leadership." Israel named the operation "Roaring Lion" and even designed a logo. Netanyahu gets political relief from domestic legal troubles, Gaza criticism, and corruption charges. Israel lobbied against the JCPOA, lobbied against the Oman negotiations, and pushed for exactly this outcome for decades. The US has given Israel $174 billion in cumulative aid.',
    americanBenefit: false,
  },
  {
    who: '🏛️ AIPAC & the Israel Lobby',
    benefit: 'AIPAC has spent $221 million on US political campaigns since 2021 (FEC filings via AP). Spent $45.2 million in 2024 alone to defeat two progressive legislators critical of Israel (Jamaal Bowman and Cori Bush). Spent $20 million to kill the JCPOA — the nuclear deal that was actually working. Trump\'s envoy Witkoff spoke at the AIPAC conference 4 days before the bombs fell. This is the return on that investment.',
    americanBenefit: false,
  },
  {
    who: '🏭 Defense Contractors',
    benefit: 'Lockheed Martin ($65B revenue), RTX/Raytheon ($69B), Boeing ($67B), Northrop Grumman ($39B), General Dynamics ($42B). Every Tomahawk costs $2M. Every F-35 sortie costs $42,000/hr. Operation Midnight Hammer (37 hours, 2025) cost $2.25 billion. Epic Fury is open-ended. Defense stocks surge on war.',
    americanBenefit: false,
  },
  {
    who: '🛢️ Oil Speculators & Energy Companies',
    benefit: 'Iran has shut down the Strait of Hormuz — zero oil shipments in 24 hours by Day 7. 20% of global oil AND 20% of global LNG. Oil surging from $70 pre-war to $80+, heading to $100-150+ if prolonged. Gas prices up 30%. Supertanker rates at all-time highs. IRGC blew up 10 commercial vessels. Energy traders make billions. American families pay more at every pump and for every grocery delivery.',
    americanBenefit: false,
  },
  {
    who: '🇨🇳 China / 🇷🇺 Russia',
    benefit: 'US distracted from Indo-Pacific strategy again. Chatham House: "Every recent US president has tried to redirect attention beyond the Middle East. To Asia. To the Western Hemisphere. None has succeeded." China fills the vacuum, continues building. Russia is ACTIVELY providing Iran with intelligence to target US forces. Both exploit the distraction — and one is now an active participant against us.',
    americanBenefit: false,
  },
]

const whoLoses = [
  { who: 'American Taxpayers', how: 'Operation Midnight Hammer cost $2.25B for 37 hours. Epic Fury is open-ended. Iraq cost $2.4T over 8 years. Afghanistan cost $2.3T over 20 years. Iran is bigger than both combined (88M people, 2.5x Iraq\'s size). National debt: $38 trillion. Interest alone: $1T/year. We literally cannot afford this.' },
  { who: 'American Troops', how: 'Iran fired missiles at 27+ US bases across Bahrain, Kuwait, Jordan, Qatar, Iraq, Saudi Arabia, UAE, and more. 6 US service members killed, 18-20 injured by Day 7. 3 US F-15E jets shot down by Kuwaiti air defenses (friendly fire). And now Russia is providing Iran with real-time intelligence on the locations of US warships, aircraft, and troop positions (WaPo, NYT, CNN, NBC — March 6). Our troops are being targeted with Russian satellite imagery. Trump says "there will likely be more." Troops are in harm\'s way for a war Congress never authorized.' },
  { who: 'Iranian Children', how: '168 killed at Shajareh Tayyebeh girls\' elementary school in Minab (revised up from initial 108 reports) — 158 students ages 7-12 were in morning classes when the missile struck. IRGC base nearby may have been the target, but the decision to bomb at 9:15am — after children arrived at school — made this inevitable.' },
  { who: 'Iranian Civilians', how: 'Iran Red Crescent: 1,332+ killed by Day 7. HRANA (Human Rights Activists in Iran): 1,168 civilians killed. Non-military sites hit across Tehran, Isfahan, Qom, Karaj, Kermanshah, Tabriz, Lorestan, Bushehr. IRIB complex, Golestan Palace (UNESCO World Heritage Site), Grand Bazaar, hospitals all damaged. Strikes near Mehrabad Airport — Tehran\'s main civilian hub. Iran has been offline for 7+ days — no internet, no communication with the outside world. Food distribution disrupted. Iran banned food exports. Many of these people were protesting their own government just weeks ago.' },
  { who: 'The Entire Gulf Region', how: '11+ countries under Iranian fire — the widest regional war since the 1980s. 72 killed in Lebanon, 437 injured, 80,000+ displaced. 12 killed in Israel, 777 injured. Bahrain oil refinery devastated, state of emergency declared. UAE: hundreds of missiles and drones. Dubai\'s Jabal Ali Port and Abu Dhabi\'s Zayed Port struck. Qatar hit with biggest barrage of the war. Azerbaijan drone-struck; terror plots against Baku pipeline foiled. Turkey targeted (missile shot down by NATO over Hatay). Israel invading Lebanon. European warships deploying.' },
  { who: 'Global Economy', how: 'Strait of Hormuz at NEAR-TOTAL HALT — zero oil shipments in 24 hours. 20% of world oil, 20% of world LNG. Cannot be replaced. Oil surging from $70 pre-war to $80+, analysts warning $100-150+. Gas prices up 30% to three-year high. Dow dropped 1,200 points at open on Mar 3, closed -400. S&P 500 -0.7%. US DFC announces $20B insurance plan for overseas losses. War-risk insurance premiums tripled. Supertanker rates at ALL-TIME HIGHS. Every American pays at the pump, the grocery store, and in the national debt.' },
  { who: 'The Constitution', how: 'Another war launched without congressional authorization. Congress was briefed by Rubio to the "gang of eight" on Tuesday — 4 days before the bombs fell. When Kaine and Paul forced a War Powers vote, the Senate killed it 53-47. Jack Reed: "Against the clear wishes of the American people, President Trump has thrust our nation into a major war with Iran — one he never made a case for, never sought congressional authority for, and for which he has no endgame." Trump now says the campaign will last "four weeks or less" — the same timeframe promised for every war that became a decade.' },
  { who: 'The MAGA Movement', how: 'Trump ran on ending forever wars. His own base is fracturing. Tucker Carlson: "Absolutely disgusting and evil." Rand Paul co-sponsors War Powers resolution to block it. The Libertarian Alliance: "There is no good reason to sacrifice American soldiers and sailors in a war on Iran." This wasn\'t what they voted for.' },
]

export default function Iran2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Iran 2026' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-red-600 text-white font-semibold animate-pulse">● ACTIVE CONFLICT</span>
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
          <span className="text-xs px-2 py-1 rounded-full bg-stone-700 text-stone-300">Updated Mar 12, 2026 — Day 13</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Whose War Is This?
        </h1>
        <p className="text-xl text-stone-300 mb-4">The Iran Conflict Nobody Asked For</p>
        <p className="text-stone-400 text-lg mb-4">
          On February 28, 2026, the United States and Israel launched &ldquo;Operation Epic Fury&rdquo; — a massive
          joint strike campaign against Iran aimed at regime change. They assassinated the Supreme Leader.
          They bombed 5 cities in broad daylight — after workers arrived at their desks and children arrived at school.
          168 schoolchildren were killed at an elementary school. Iran closed the Strait of Hormuz and fired missiles at
          27 US bases across 7+ countries. Dubai&apos;s Fairmont hotel is on fire. The Gulf is ablaze.
          By Day 13: 8 US troops dead. 1,348+ Iranians killed. 17,000 injured. 5,000+ targets struck. Pentagon admits $11.3 billion spent in first 6 days alone.
          Iran is mining the Strait of Hormuz. Oil past $100/barrel. A KC-135 tanker crashed in Iraq. Oil refineries burning.
          Dubai airport struck twice. 687 killed in Lebanon. 12 countries under fire. Iran&apos;s nuclear scientists assassinated.
          Tehran sets three conditions for peace. Trump demands unconditional surrender. No exit strategy. No end in sight.
        </p>
        <p className="text-stone-400 text-lg">
          No congressional vote. No declaration of war. No exit strategy. No clear American interest.
          Trump ran on ending forever wars. His own ally Tucker Carlson calls this &ldquo;absolutely disgusting and evil.&rdquo;
          The only question that matters: <em className="text-white">whose war is this?</em>
        </p>
      </div>

      <ShareButtons title="Whose War Is This? The Iran Conflict Nobody Asked For" />

      {/* Oman diplomat quote */}
      <blockquote className="border-l-4 border-red-700 pl-6 my-8 text-xl text-stone-600 italic">
        &ldquo;Active and serious negotiations have yet again been undermined. Neither the interests of the United States
        nor the cause of global peace are well served by this. And I pray for the innocents who will suffer.
        I urge the United States not to get sucked in further. <strong>This is not your war.</strong>&rdquo;
        <span className="block text-sm text-stone-500 mt-2 not-italic">— Badr Albusaidi, Oman&apos;s Foreign Minister, who brokered the US-Iran nuclear talks. He flew to Washington on Feb 27 to beg for more time for diplomacy. He was turned away. The bombs started the next morning.</span>
      </blockquote>

      {/* Cost comparison */}
      <div className="grid md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Iraq War (8 yrs)</p>
          <p className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(2.4e12)}</p>
          <p className="text-xs text-stone-500">Pop: 26M</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">Afghanistan (20 yrs)</p>
          <p className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(2.3e12)}</p>
          <p className="text-xs text-stone-500">Pop: 38M</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm border text-center">
          <p className="text-sm text-stone-500 mb-1">37-hr Iran strikes (2025)</p>
          <p className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(2.25e9)}</p>
          <p className="text-xs text-stone-500">Just 37 hours</p>
        </div>
        <div className="bg-red-50 border-red-200 rounded-lg p-5 border text-center">
          <p className="text-sm text-red-700 mb-1">Iran could cost</p>
          <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(3e12)}+</p>
          <p className="text-xs text-red-600">Pop: 88M (2.5x Iraq)</p>
        </div>
      </div>

      {/* What happened section */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Happened</h2>
        <div className="space-y-4 text-stone-700">
          <p>
            The bombs started falling on Tehran at 9:15am local time — in broad daylight, after the working day had started
            and the streets were full. As The Guardian reported: <em>&ldquo;Bombing campaigns in the modern era usually start
            at night, to heighten the target&apos;s sense of disorientation and minimise the effectiveness of air defence.
            This time was different.&rdquo;</em>
          </p>
          <p>
            The daytime attack was deliberate — a decapitation strike designed to hit government officials at their desks.
            Plumes of smoke rose from Pasteur Street, where Iran&apos;s government buildings are clustered: the supreme
            leader&apos;s compound, the president&apos;s office, the national security headquarters, and the assembly of experts.
            Satellite photos showed Khamenei&apos;s compound as &ldquo;a dark grey mess of dust and ash.&rdquo;
          </p>
          <p>
            But waiting for officials to arrive at their desks also means children have arrived at school.
          </p>
        </div>
      </div>

      {/* Minab school section */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">180 Killed at a Girls&apos; Elementary School</h2>
        <div className="space-y-3 text-stone-700">
          <p>
            An Israeli strike hit the <strong>Shajareh Tayyebeh girls&apos; elementary school</strong> in Minab, Hormozgan province,
            southern Iran. 170 students between the ages of <strong>7 and 12</strong> were attending morning classes when the missile
            struck. At least <strong>168 people were killed</strong> (revised up from initial reports of 108), according to the Minab public prosecutor&apos;s office
            (Al Jazeera, BBC, Washington Post, The Guardian, Drop Site News all confirmed).
          </p>
          <p>
            The Guardian reported rescue workers and local residents searching the wreckage, with one man holding up
            a child&apos;s knapsack. The IRGC has a military base in the city, which may have been the actual target —
            but the decision to bomb during morning school hours made this tragedy inevitable.
          </p>
          <p>
            Iran&apos;s ambassador to the United Nations said the strike killed &ldquo;more than 100 children.&rdquo; The death toll was later revised upward to 180.
          </p>
          <p className="text-sm text-red-700 italic">
            Drop Site News headline: <em>&ldquo;Small Children Who Knew Nothing of Politics or Wars.&rdquo;</em>
          </p>
        </div>
      </div>

      {/* Retaliation section */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Retaliation: The Gulf Is on Fire</h2>
        <div className="space-y-3 text-stone-700">
          <p>
            Within hours, Iran unleashed its entire missile and drone arsenal across the region:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🚀</span> <strong>Israel:</strong> Missiles fired. 1 civilian killed, 121 injured.</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🚀</span> <strong>Dubai (UAE):</strong> Fairmont hotel on Palm Jumeirah set ablaze. Burj Al Arab hit. Airports in Dubai and Abu Dhabi struck. 1 killed in Abu Dhabi from debris. 4 injured in Palm Jumeirah.</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🚀</span> <strong>Bahrain:</strong> US naval base south of Manama hit. Area evacuated.</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🚀</span> <strong>Kuwait:</strong> 3 soldiers injured, 12 total injured.</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🚀</span> <strong>Jordan, Qatar, Saudi Arabia, Iraq, Syria:</strong> All hit by Iranian missiles targeting US and allied bases.</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🚀</span> <strong>Cyprus:</strong> British military bases targeted.</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🚀</span> <strong>6 US service members killed, 18-20 injured</strong> across the region by Day 7. 3 US F-15E jets shot down by Kuwaiti air defenses (friendly fire).</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🚀</span> <strong>Azerbaijan:</strong> Drone strikes on Nakhchivan airport terminal. Iran-backed terror plots against Baku-Tbilisi-Ceyhan pipeline foiled. 11th country under fire.</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🚀</span> <strong>Turkey:</strong> Iranian missile shot down by NATO over Hatay province. Iran also targeted NATO assets.</li>
          </ul>
          <p className="mt-4">
            <strong>Iran closed the Strait of Hormuz</strong> — the narrow waterway through which <strong>20% of the world&apos;s
            oil and 20% of global LNG exports</strong> flow. By Day 7, there have been <strong>zero oil shipments through the strait
            in 24 hours</strong> — a near-total halt. Iran didn&apos;t need a naval blockade; it used drones and threats to shut
            down shipping entirely. The IRGC blew up 10 commercial vessels attempting to transit. Oil tankers Stena Imperative
            and Athe Nova were struck. 150+ freight ships stalled. Bloomberg warns prices could exceed $100/barrel.
            The Houthis resumed Red Sea attacks.
          </p>
          <p>
            By Day 7, <strong>eleven countries</strong> are under fire. 30+ Iranian warships have been sunk. 2,500+ Israeli strikes
            have been launched. 80% of Iran&apos;s air defenses are destroyed. B-2 bombers have crushed buried missile launchers,
            causing a 90% drop in Iranian missile output. But Iran keeps firing. Russia is feeding Tehran the locations of
            US military assets. The Strait of Hormuz is shut. And there is no ceasefire, no negotiation, and no end in sight.
          </p>
        </div>
      </div>

      {/* Section: What is the objective? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Is the Objective?</h2>
        <p className="text-stone-700 mb-4">
          The stated objectives have already shifted multiple times. The CFR called this &ldquo;a profound change in
          stated Israeli and U.S. goals: while the fall of the regime has long been wished for, it has never been the
          objective of a joint military campaign.&rdquo;
        </p>
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold shrink-0">1.</span>
            <div>
              <p className="font-semibold">Trump (2:30am video):</p>
              <p className="text-stone-600">&ldquo;Defend the American people by eliminating imminent threats from the Iranian regime.&rdquo;</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold shrink-0">2.</span>
            <div>
              <p className="font-semibold">Also Trump:</p>
              <p className="text-stone-600">&ldquo;When we are finished, take over your government. It will be yours to take. This will be, probably, your only chance for generations.&rdquo; That&apos;s regime change.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold shrink-0">3.</span>
            <div>
              <p className="font-semibold">Netanyahu:</p>
              <p className="text-stone-600">&ldquo;Eliminate the existential threat posed by the terrorist regime in Iran.&rdquo; <strong>Israel&apos;s</strong> existential threat. Not America&apos;s.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold shrink-0">4.</span>
            <div>
              <p className="font-semibold">Mossad (Farsi Telegram post):</p>
              <p className="text-stone-600">&ldquo;Our Iranian brothers and sisters, you are not alone! Together we will return Iran to its glorious days.&rdquo;</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold shrink-0">5.</span>
            <div>
              <p className="font-semibold">Pentagon:</p>
              <p className="text-stone-600">Suppress air defenses, degrade retaliatory capabilities, disrupt command-and-control, destroy missile and military capabilities, prevent nuclear weapons.</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-amber-800 font-semibold mb-2">🚩 The problem with all of this</p>
          <p className="text-stone-700 mb-2">
            As The Atlantic noted: Iran is <strong>2.5 times the size of Iraq</strong>. America has exactly one openly
            declared ally in this. No serious armed rebel force exists. No coalition of nations is assembling to march
            into Tehran. And the Stimson Center warns: <em>&ldquo;Air strikes alone cannot topple a government, and Iran
            in 2026 is likely to emerge battered but not broken — a costly example of American hubris and the limits
            of airpower.&rdquo;</em>
          </p>
          <p className="text-stone-700">
            The BBC: <em>&ldquo;There is no precedent for regime change happening just because of air strikes.&rdquo;</em>
            Saddam required 150,000 ground troops. Gaddafi required NATO + armed rebels. What&apos;s the plan here?
          </p>
        </div>
      </div>

      {/* Section: Has this ever worked? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Has US Regime Change Ever Worked?</h2>
        <p className="text-stone-700 mb-2">
          The United States has attempted regime change dozens of times since WWII. The track record is catastrophic.
          As Axios noted, historians point out that previous successful overthrows (Germany, Japan) &ldquo;were done
          with future government infrastructure in mind — which is less clear in the Iran crisis so far.&rdquo;
        </p>
        <p className="text-stone-700 mb-4 italic">
          As General David Petraeus said at the start of the Iraq War: <strong>&ldquo;Tell me how this ends.&rdquo;</strong>
        </p>
        <div className="space-y-4">
          {regimeChangeHistory.map((r, i) => (
            <div key={i} className="border-l-4 border-red-200 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-primary">{r.country}</span>
                <span className="text-stone-500 text-sm">({r.year})</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">{r.country === 'Venezuela' ? 'Unstable' : 'Failed'}</span>
              </div>
              <p className="text-sm text-stone-500 mb-1"><strong>Method:</strong> {r.method}</p>
              <p className="text-sm text-stone-700"><strong>Result:</strong> {r.result}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-100 rounded-lg p-4 mt-6">
          <p className="text-stone-700">
            <strong>The pattern is 100%:</strong> Topple government → power vacuum → chaos or worse →
            spend trillions → leave → region more unstable than before. And now we&apos;re doing it in a country
            three times the size of France, with 88 million people, a real military, real ballistic missiles,
            and no ground forces, no rebel army, and no plan for the day after. The Foreign Affairs headline:
            <em> &ldquo;The U.S. and Israel Have Set a High Bar for Success in Their War on Iran.&rdquo;</em>
          </p>
        </div>
      </div>

      {/* The irony section */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">The Supreme Irony</h2>
        <p className="text-stone-700 mb-3">
          The current Iranian regime exists <strong>because of the last time America tried regime change in Iran</strong>.
        </p>
        <p className="text-stone-700 mb-3">
          In 1953, the CIA overthrew Iran&apos;s <em>democratically elected</em> Prime Minister Mossadegh and installed
          the Shah. The Shah&apos;s 26-year authoritarian rule — propped up by American money and weapons — created the
          conditions for the 1979 Islamic Revolution. That revolution produced the very regime we just spent $2.25 billion
          bombing in 2025 and are now bombing again in 2026.
        </p>
        <p className="text-stone-700 mb-3">
          And the nuclear program? Iran accelerated enrichment to 60% (near weapons-grade) <em>after</em> Trump withdrew
          from the JCPOA nuclear deal in 2018. The deal was working — Iran was in compliance. We destroyed the diplomatic
          solution, then used the resulting threat as justification for war.
        </p>
        <p className="text-stone-700 font-semibold">
          We created this enemy. We destroyed the diplomatic solution. And now we&apos;re bombing them for the
          problem we created. This isn&apos;t a strategy. It&apos;s a cycle.
        </p>
      </div>

      {/* Section: Did Israel drag us into this? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Did Israel Drag Us Into This?</h2>
        <p className="text-stone-700 mb-4">
          Follow the timeline, follow the money, follow the lobbying:
        </p>
        <ul className="space-y-3 text-stone-700 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0 font-bold">$174B</span>
            <span>Total US aid to Israel since 1948 — making Israel <strong>the largest cumulative recipient of US foreign aid in history</strong> (Congressional Research Service).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0 font-bold">$221M</span>
            <span>AIPAC spending on US political campaigns from Dec 2021 to Jan 2026 (AP/FEC filings). $100 million in 2024 alone across 389 races. $45.2 million to defeat just two progressive Israel critics.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0 font-bold">$20M</span>
            <span>AIPAC spending to <strong>kill the JCPOA nuclear deal</strong> — the last diplomatic solution. It worked. Trump withdrew in 2018. Iran enriched uranium. Now we&apos;re at war.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Israel <strong>&ldquo;strongly opposed&rdquo;</strong> the US-Iran negotiations, lobbying against diplomatic efforts and threatening unilateral military action (Wikipedia, citing multiple sources).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Trump&apos;s envoy Witkoff spoke at the <strong>AIPAC conference</strong> 4 days before the strikes.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Israeli military officials confirmed the two countries&apos; militaries <strong>&ldquo;worked hand in glove for months&rdquo;</strong> to prepare the joint attack (The Guardian).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>The operation is codenamed <strong>&ldquo;Roaring Lion&rdquo;</strong> by Israel. They designed a logo — the Star of David with a roaring lion. They <em>branded</em> this war.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Mossad posted a <strong>Farsi Telegram message</strong> during the bombing calling for Iranians to revolt. Israel&apos;s spy agency is running regime-change operations using US military power.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Netanyahu called the war an effort to &ldquo;eliminate the existential threat&rdquo; — <strong>Israel&apos;s</strong> existential threat — and thanked Trump for his &ldquo;historic leadership.&rdquo;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Even Israeli analysts admit Netanyahu uses war for <strong>political relief</strong> — from corruption charges, Gaza criticism, and domestic troubles (Al Jazeera).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 shrink-0">→</span>
            <span>Oman&apos;s foreign minister — who brokered the talks — flew to Washington to beg for more time for diplomacy. Met Vance. <strong>Was turned away.</strong> Bombs fell the next morning.</span>
          </li>
        </ul>
        <div className="bg-stone-100 rounded-lg p-4">
          <p className="text-stone-700">
            <strong>The question isn&apos;t whether Israel influenced this decision.</strong> The evidence is overwhelming
            and publicly documented. The question is: <em>is there any American interest being served that
            couldn&apos;t have been achieved through the diplomatic channels that were actively sabotaged?</em>
          </p>
          <p className="text-stone-700 mt-2">
            Iran was at the negotiating table. Araghchi said &ldquo;good progress&rdquo; was made. Oman said
            talks would continue. Witkoff and Kushner reportedly told Trump it would be &ldquo;difficult,
            if not impossible&rdquo; to reach a deal. Was that an honest assessment — or the desired outcome
            after months of planning a joint military operation?
          </p>
        </div>
      </div>

      {/* Who benefits */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Who Benefits?</h2>
        <p className="text-stone-700 mb-6">
          Follow the money and the motives. Ask <em>cui bono</em> — who benefits?
        </p>
        <div className="space-y-6">
          {whoBenefits.map((b, i) => (
            <div key={i} className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">{b.who}</h3>
              <p className="text-stone-700 text-sm">{b.benefit}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-900 text-white rounded-lg p-4 mt-6">
          <p className="font-semibold">Notice who&apos;s NOT on this list?</p>
          <p className="text-stone-300 mt-1">
            The American people. American taxpayers. American families paying for gas and groceries.
            American troops stationed in 7 countries now under missile fire. None of them benefit. All of them pay.
          </p>
        </div>
      </div>

      {/* Who loses */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Who Loses?</h2>
        <div className="space-y-4">
          {whoLoses.map((l, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-red-600 text-xl shrink-0">✕</span>
              <div>
                <p className="font-semibold">{l.who}</p>
                <p className="text-stone-600 text-sm">{l.how}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How does this benefit America? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How Does This Benefit America?</h2>
        <p className="text-stone-700 mb-4">
          Let&apos;s examine every claimed benefit honestly:
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-stone-300 pl-4">
            <p className="font-semibold">&ldquo;Prevent Iran from getting nuclear weapons&rdquo;</p>
            <p className="text-stone-600 text-sm">
              The JCPOA was doing exactly that. Iran was in compliance. AIPAC spent $20 million killing it.
              Trump withdrew in 2018. Since then, Iran enriched uranium to 60% — closer to weapons-grade
              than ever before. In 2025, the US struck nuclear facilities (Operation Midnight Hammer, $2.25B).
              Now we&apos;re bombing again. <strong>We destroyed the solution, then bombed the resulting problem.</strong>
            </p>
          </div>
          <div className="border-l-4 border-stone-300 pl-4">
            <p className="font-semibold">&ldquo;Eliminate threats to American forces&rdquo;</p>
            <p className="text-stone-600 text-sm">
              American forces are in the region because of previous interventions. Iran has now fired
              500+ ballistic missiles and 2,000+ drones at targets across <strong>11+ countries</strong>. 6 US service members
              are dead. Russia is providing Iran with the locations of US warships and aircraft. Our troops are
              <em> less</em> safe than before the strikes. The threat was escalated, not eliminated.
            </p>
          </div>
          <div className="border-l-4 border-stone-300 pl-4">
            <p className="font-semibold">&ldquo;Free the Iranian people&rdquo;</p>
            <p className="text-stone-600 text-sm">
              The Iranian people were already protesting — the largest demonstrations since 1979, across 100+ cities.
              Their own government massacred thousands. But bombing a country historically rallies populations
              <em> around</em> their government, not against it. And the first victims of this &ldquo;liberation&rdquo;
              were 168 children at an elementary school in Minab.
            </p>
          </div>
          <div className="border-l-4 border-stone-300 pl-4">
            <p className="font-semibold">&ldquo;Stabilize the Middle East&rdquo;</p>
            <p className="text-stone-600 text-sm">
              11+ countries are under missile attack. The Strait of Hormuz is shut — zero oil shipments.
              Bahrain refinery devastated. Dubai ports struck. Airports bombed across the Gulf.
              80,000+ displaced in Lebanon. European warships deploying. NATO shooting down Iranian missiles.
              The Houthis resuming Red Sea attacks. This is the literal opposite of stability. <strong>The Gulf
              hasn&apos;t seen this level of conflict since the Iran-Iraq War of the 1980s.</strong>
            </p>
          </div>
          <div className="border-l-4 border-stone-300 pl-4">
            <p className="font-semibold">&ldquo;Defend against imminent threats&rdquo;</p>
            <p className="text-stone-600 text-sm">
              Congress was briefed by Rubio on Tuesday. The bombs didn&apos;t fall until Saturday. If the
              threat was &ldquo;imminent,&rdquo; why wait 4 days? And why was Oman still mediating negotiations
              on Thursday? The &ldquo;imminent threat&rdquo; justification is the same one used for every
              unconstitutional war since 9/11.
            </p>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
          <p className="text-red-800 font-semibold">
            There is no honest case for how this war benefits ordinary Americans. Gas prices rise.
            Taxes rise. Debt rises. Troops die. And when it&apos;s over, history tells us the region will
            be <em>more</em> unstable, not less — and we&apos;ll have created the next generation of enemies.
          </p>
        </div>
      </div>

      {/* Full Timeline */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Complete Timeline: From October 7 to Epic Fury</h2>
        <p className="text-stone-500 mb-4 text-sm">How a post-October 7 escalation, a sabotaged negotiation, and an AIPAC-funded political ecosystem produced a war.</p>
        <div className="space-y-3">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-start gap-4 border-l-2 border-red-200 pl-4">
              <span className="text-red-700 font-bold font-[family-name:var(--font-heading)] shrink-0 w-28 text-xs">{t.date}</span>
              <p className="text-stone-700 text-sm">{t.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Constitution */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Constitution Is Clear</h2>
        <blockquote className="border-l-4 border-red-500 pl-4 mb-4 text-stone-300 italic">
          &ldquo;The Congress shall have Power To ... declare War.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Article I, Section 8, United States Constitution</span>
        </blockquote>
        <p className="text-stone-300 mb-4">
          Congress was not asked to vote before Operation Epic Fury. They were briefed by Rubio — on Tuesday, 4 days
          before bombs fell. Senator Jack Reed: <em>&ldquo;Against the clear wishes of the American people, President
          Trump has thrust our nation into a major war with Iran — one he never made a case for, never sought
          congressional authority for, and for which he has no endgame.&rdquo;</em>
        </p>
        <p className="text-stone-300 mb-4">
          Constitutional law experts told TIME: <em>&ldquo;If Congress did nothing, that would be a sign that
          Congress didn&apos;t approve an act of war, and so it would be illegal.&rdquo;</em>
        </p>
        <p className="text-stone-300 mb-4">
          <strong>Bipartisan opposition:</strong> Senator Rand Paul (R-KY) and Senator Tim Kaine (D-VA) have
          co-sponsored a War Powers resolution to block the strikes. Rep. Thomas Massie (R-KY) and Rep. Ro Khanna
          (D-CA) have introduced a companion resolution in the House. Paul — a libertarian who frequently clashes
          with Trump — said on X that he does not support the strikes, based on constitutional principles (NBC News).
        </p>
        <p className="text-stone-300">
          This is not a partisan issue. This is the Constitution being ignored — again — for someone else&apos;s war.
        </p>
      </div>

      {/* MAGA fracture */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Trump&apos;s Own Base Is Fracturing</h2>
        <blockquote className="border-l-4 border-red-700 pl-4 mb-4 text-xl text-stone-700 italic">
          &ldquo;Absolutely disgusting and evil.&rdquo;
          <span className="block text-sm text-stone-500 mt-2 not-italic">— Tucker Carlson, on the Iran strikes, to ABC&apos;s Jonathan Karl. February 28, 2026.</span>
        </blockquote>
        <div className="space-y-3 text-stone-700">
          <p>
            Tucker Carlson — perhaps Trump&apos;s most influential media ally — didn&apos;t just disagree.
            He called the attack <strong>&ldquo;absolutely disgusting and evil&rdquo;</strong> (ABC News, Daily Mail,
            Mediaite, The Independent all confirmed). He had previously described escalating conflicts with Iran as
            &ldquo;a reckless effort to serve the interests of Tel Aviv.&rdquo;
          </p>
          <p>
            Rand Paul doesn&apos;t support it. Thomas Massie doesn&apos;t support it. The Libertarian Alliance published
            an essay days before the strikes: <em>&ldquo;There is no good reason to sacrifice American soldiers and
            sailors in a war on Iran. No justice in killing Iranian civilians.&rdquo;</em>
          </p>
          <p>
            Trump ran on ending forever wars. He promised to bring troops home. He was the president who
            <em> didn&apos;t</em> start a new war in his first term. His base voted for that. Instead, they got the
            largest US military operation since the 2003 invasion of Iraq — launched alongside a foreign government,
            for that government&apos;s security priorities, without asking anyone.
          </p>
          <p className="font-semibold">
            This is not what 74 million Americans voted for.
          </p>
        </div>
      </div>

      {/* Russia involvement */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">Russia Is Helping Iran Target American Troops</h2>
        <div className="space-y-3 text-stone-700">
          <p>
            On March 6, 2026 — Day 7 of the war — the Washington Post, New York Times, CNN, and NBC News
            simultaneously reported, citing US intelligence officials, that <strong>Russia is providing Iran with
            real-time intelligence on the locations of American military assets</strong>, including warships, aircraft,
            radar systems, and troop positions across the Middle East.
          </p>
          <p>
            The intelligence includes satellite imagery showing where US military personnel are deployed.
            One source described it as &ldquo;a pretty comprehensive effort.&rdquo; Russian President Putin
            spoke with Iranian President Pezeshkian by phone the same day.
          </p>
          <p>
            This means American service members — already fighting a war they never voted for, that Congress
            never authorized — are being targeted using Russian satellite data. The same Russia that Trump
            has called a &ldquo;friend&rdquo; and spent years defending. The same Russia that Trump froze
            Ukraine aid for. Russia is now actively helping Iran kill Americans.
          </p>
          <p className="font-semibold text-red-800">
            Iran fires the missiles. Russia tells them where to aim. American troops pay the price.
            And this is the war that&apos;s supposed to make us safer?
          </p>
        </div>
      </div>

      {/* European escalation */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Europe Gets Dragged In</h2>
        <div className="space-y-3 text-stone-700">
          <p>
            The war is no longer a US-Israel-Iran conflict. It&apos;s going global:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🇬🇧</span> <strong>UK:</strong> RAF Akrotiri in Cyprus struck by Iranian drones. UK allowing bases for &ldquo;defensive&rdquo; operations. UK deploying warships. Ukrainian specialists aiding Gulf drone defense.</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🇫🇷</span> <strong>France:</strong> French naval base Camp de la Paix in Abu Dhabi struck. France deploying warships to Eastern Mediterranean.</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🇬🇷</span> <strong>Greece:</strong> Deploying frigates and F-16s to defend Cyprus from further Iranian strikes.</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🇪🇺</span> <strong>EU:</strong> Expanded Operation Aspides. E3 (UK, France, Germany) backing &ldquo;proportionate military defensive measures.&rdquo; Italy, Netherlands, Spain also participating.</li>
            <li className="flex items-start gap-2"><span className="text-red-600 shrink-0">🇹🇷</span> <strong>Turkey/NATO:</strong> NATO air defenses shot down an Iranian missile over Hatay, Turkey. Iran now attacking a NATO member.</li>
          </ul>
          <p className="mt-3">
            Tehran has warned Europe to &ldquo;stay out or face retaliation.&rdquo; But European nations are already
            under fire — their bases, their ships, their citizens. The IRGC threatened to strike Cyprus &ldquo;with
            such intensity that the Americans will be forced to leave.&rdquo;
          </p>
          <p className="font-semibold">
            A war that was supposed to be a quick, decisive strike is now pulling in NATO allies,
            threatening European territory, and testing the limits of Article 5. This is what escalation looks like.
          </p>
        </div>
      </div>

      {/* Succession crisis */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Succession Crisis: Who Rules Iran Now?</h2>
        <div className="space-y-3 text-stone-700">
          <p>
            The assassination of Khamenei didn&apos;t produce regime collapse. It produced a succession crisis
            that the US and Israel are now trying — and failing — to control:
          </p>
          <ul className="space-y-2 ml-4">
            <li><strong>Mojtaba Khamenei</strong> — the dead Supreme Leader&apos;s son — is the frontrunner, backed by the IRGC. He reportedly &ldquo;miraculously survived&rdquo; the same missile strike that killed his father.</li>
            <li><strong>Trump rejects him:</strong> &ldquo;Khamenei&apos;s son is a lightweight,&rdquo; Trump told Axios. Called it &ldquo;unacceptable&rdquo; and insisted the US should have a role in selecting Iran&apos;s next leader.</li>
            <li><strong>Israel threatens to kill him:</strong> Israel vowed to target any new Supreme Leader — meaning the succession itself has become a military target.</li>
            <li><strong>The funeral was postponed</strong> — because the strikes on Tehran are ongoing and it&apos;s too dangerous to hold a public ceremony.</li>
            <li><strong>An Interim Leadership Council</strong> has been established under Ali Larijani, with President Pezeshkian transferring presidential authority to provincial governors.</li>
          </ul>
          <p className="mt-3">
            The regime hasn&apos;t collapsed. It&apos;s fractured but functioning — exactly what the Stimson Center
            predicted: &ldquo;battered but not broken.&rdquo; Iran continues launching missiles. The IRGC is setting
            up checkpoints in cities. The Kurdish rebellion is growing. And now the US president is demanding a say
            in who rules a country of 88 million people — the same colonial impulse that produced the 1953 coup,
            the Shah, the revolution, and the very regime we just bombed.
          </p>
        </div>
      </div>

      {/* What It's Costing — Economic Impact (Day 7) */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What It&apos;s Costing: The Economic Devastation</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-sm text-red-700 mb-1">Oil (Brent Crude)</p>
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$70 → $80+</p>
            <p className="text-xs text-red-600">Analysts warn $100-150 if prolonged</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-sm text-red-700 mb-1">Gas Prices</p>
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">+30%</p>
            <p className="text-xs text-red-600">Three-year high</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-sm text-red-700 mb-1">Dow Jones</p>
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">-1,200 pts</p>
            <p className="text-xs text-red-600">At open Mar 3; closed -400</p>
          </div>
        </div>
        <div className="space-y-3 text-stone-700">
          <p>
            The Strait of Hormuz — through which <strong>20% of global oil and 20% of global LNG</strong> flow — has seen
            <strong> zero oil shipments in 24 hours</strong> as of Day 7. Iran didn&apos;t need submarines or mines; it used
            drones and threats. The IRGC blew up 10 commercial vessels trying to transit. Supertanker charter rates hit
            all-time highs. War-risk insurance premiums tripled. Insurers are dropping coverage entirely.
          </p>
          <p>
            The S&amp;P 500 fell 0.7%. The Dow plunged 1,200 points at the open on March 3 before recovering to close
            down 400. Defense stocks surged — Lockheed Martin, RTX/Raytheon, Northrop Grumman all up. Energy
            companies up. Everyone else: down.
          </p>
          <p>
            The US Development Finance Corporation (DFC) announced a <strong>$20 billion insurance plan</strong> for
            American businesses facing overseas losses — an acknowledgment that this war is destroying American
            economic interests abroad.
          </p>
          <p>
            QatarEnergy halted LNG production after Iranian strikes. Saudi Aramco&apos;s Ras Tanura refinery hit
            repeatedly. Bahrain&apos;s refinery devastated. Amazon Web Services data centers knocked offline in the
            UAE and Bahrain. Dubai&apos;s Jabal Ali Port — one of the world&apos;s busiest — struck. Abu Dhabi&apos;s
            Zayed Port hit. The economic infrastructure of the Gulf is being systematically degraded.
          </p>
          <p className="font-semibold">
            Every American family is paying for this war right now — at the gas pump, at the grocery store,
            in their retirement accounts. And it&apos;s only been one week.
          </p>
        </div>
      </div>

      {/* Long-term effects */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Long-Term Consequences</h2>
        <p className="text-stone-700 mb-4">
          History doesn&apos;t just rhyme here — it repeats word for word:
        </p>
        <div className="space-y-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">💰 Financial Black Hole</h3>
            <p className="text-stone-700 text-sm">
              37 hours of strikes in 2025 cost $2.25 billion (Forbes). Epic Fury is open-ended — Trump said bombing
              will continue &ldquo;as long as necessary.&rdquo; Iraq lasted 8 years ($2.4T). Afghanistan lasted 20 years
              ($2.3T). Iran is bigger, more sophisticated, and more capable than either. The Stimson Center:
              <em> &ldquo;Iran in 2026 is likely to emerge battered but not broken — a costly example of American hubris
              and the limits of airpower.&rdquo;</em> The national debt is $38 trillion. Interest costs: $1T/year.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">🔥 Regional Conflagration (11+ Countries Under Fire)</h3>
            <p className="text-stone-700 text-sm">
              By Day 7: 11+ countries under Iranian fire — Israel, Bahrain, Kuwait, UAE, Qatar, Saudi Arabia, Iraq,
              Jordan, Oman, Azerbaijan, Turkey (via NATO interception). Plus Cyprus (UK base struck). 72 dead in Lebanon,
              80,000+ displaced. Hezbollah launching 38 attacks per day. Israel invading Lebanon. Kurdish rebellion in
              Iranian Kurdistan. Bahrain under state of emergency. European warships deploying. NATO shooting down
              Iranian missiles. This isn&apos;t contained. It&apos;s expanding every day.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">⛽ Energy Crisis (Already Here)</h3>
            <p className="text-stone-700 text-sm">
              The Strait of Hormuz has seen zero oil shipments in 24 hours as of Day 7 — a near-total halt.
              20% of global oil, 20% of global LNG. Oil jumped from $70 to $80+ in one week. Gas prices up 30% to a
              three-year high. Supertanker rates at all-time highs. Insurers dropping coverage entirely. The IRGC blew up
              10 commercial vessels. QatarEnergy halted LNG production. Saudi Aramco&apos;s Ras Tanura refinery hit.
              Bahrain refinery devastated. If this continues, analysts project $100-150+/barrel. This isn&apos;t a
              prediction anymore — it&apos;s happening.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">🔄 Generational Blowback</h3>
            <p className="text-stone-700 text-sm">
              The 1953 coup produced 1979. The Iraq War produced ISIS. The Libya intervention produced failed states
              and weapons flooding across Africa. What will killing 168 schoolchildren produce? What will bombing
              88 million people — many of whom were protesting their own government — produce? A generation of
              Iranians who blame America for their children&apos;s deaths. The next cycle of blowback.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">🌏 Strategic Catastrophe</h3>
            <p className="text-stone-700 text-sm">
              Chatham House: <em>&ldquo;Every recent US president has tried to redirect attention beyond the Middle East.
              To Asia. To the Western Hemisphere. None has succeeded.&rdquo;</em> While we bomb Iran, China grows.
              While we spend trillions, the debt grows. While we fight Israel&apos;s war, the actual problems
              facing Americans — healthcare, infrastructure, housing, wages — go unsolved.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">🪖 No Exit Strategy. No Plan. No End.</h3>
            <p className="text-stone-700 text-sm">
              &ldquo;Tell me how this ends,&rdquo; General Petraeus asked at the start of the Iraq War.
              Nobody answered. 20 years and $2.4 trillion later, Iraq is still broken. Now: regime change
              with no ground force, no coalition, no rebel army, no plan for governance, and a country of
              88 million people with real ballistic missiles and a region already on fire. How does this end?
            </p>
          </div>
        </div>
      </div>

      {/* Does it make sense? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Does Any of This Make Sense?</h2>
        <div className="space-y-4 text-stone-700">
          <p>
            We withdrew from a working nuclear deal. Iran enriched uranium. We call that a threat.
            We bomb them for the threat we created by withdrawing from the deal that was preventing
            the threat. And we do it without asking Congress.
          </p>
          <p>
            We spent $8 trillion on the War on Terror. It produced ISIS, failed states across the
            Middle East, 900,000+ dead, and no measurable increase in American security. Now we&apos;re
            doing it again — in a country three times the size of Iraq, with a real military,
            real ballistic missiles, and real allies who are already retaliating across 7 countries.
          </p>
          <p>
            Iran was at the negotiating table. Their foreign minister said &ldquo;good progress&rdquo; was made.
            Oman&apos;s foreign minister — who brokered the talks — says Iran had agreed to never stockpile
            enriched uranium and to full IAEA verification. He said peace was &ldquo;within reach.&rdquo;
            He flew to Washington to beg for more time. He was turned away. The next morning, 180 children
            were dead in a school in Minab.
          </p>
          <p>
            One week in, Russia is feeding Iran the locations of American warships. Trump is demanding Iran&apos;s
            &ldquo;unconditional surrender&rdquo; while insisting on choosing their next leader. European nations
            are being dragged into a war they didn&apos;t ask for. The president who promised to end forever wars
            just started the biggest one since Iraq. His own strongest media ally calls it &ldquo;absolutely
            disgusting and evil.&rdquo; The primary beneficiary is a foreign government that spent $221 million
            buying influence in American elections and branded this war with a logo.
          </p>
        </div>
      </div>

      {/* Closing */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <blockquote className="border-l-4 border-red-500 pl-4 mb-6 text-stone-300 italic">
          &ldquo;Of all the enemies to public liberty, war is, perhaps, the most to be dreaded,
          because it comprises and develops the germ of every other.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— James Madison, 1795</span>
        </blockquote>
        <p className="text-stone-300 mb-4">
          Two weeks in. 1,348+ Iranians dead. 17,000 injured. 168 schoolchildren dead. 8 Americans dead. 12 countries
          under fire. The Strait of Hormuz shut. Oil surging. Gas prices up 30%. The Dow crashing. Russia
          feeding Iran the locations of American warships. European nations dragged in. A succession crisis
          with no resolution. Trump demanding &ldquo;unconditional surrender&rdquo; while insisting on choosing
          Iran&apos;s next leader. And the war expanding every single day.
        </p>
        <p className="text-stone-300 mb-4">
          This is not America&apos;s war. This is a war fought for Israel&apos;s security priorities —
          planned for months, branded with a logo, enabled by $221 million in political spending, and
          launched after diplomacy was actively sabotaged. Oman&apos;s foreign minister said a nuclear
          deal was &ldquo;within reach&rdquo; — Iran had agreed to full IAEA verification. He was turned away.
          The bombs fell the next morning.
        </p>
        <p className="text-stone-300 mb-4">
          Tucker Carlson is right. This is disgusting and evil. Rand Paul is right. This is unconstitutional.
          The Omani foreign minister is right. <strong>This is not our war.</strong>
        </p>
        <p className="text-white font-semibold text-lg">
          Whose war is it? Follow the money. Follow the lobbying. Follow the $174 billion.
          The answer has never been clearer.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources</h2>
        <p className="text-stone-500 text-sm mb-3">All facts in this article are sourced from mainstream, reputable outlets — published February 28-March 12, 2026:</p>
        <ul className="text-sm text-stone-600 space-y-1 columns-1 md:columns-2">
          <li>The Guardian — War timeline, school bombing, Gulf retaliation, Fairmont hotel</li>
          <li>BBC — School bombing, regime change precedent analysis</li>
          <li>Al Jazeera — School bombing, war powers, AIPAC</li>
          <li>Washington Post — School bombing, casualties</li>
          <li>CNN — Operation Epic Fury announcement</li>
          <li>NPR — Congressional authorization, oil impact</li>
          <li>NBC News — Rand Paul, bipartisan War Powers resolution</li>
          <li>New York Times — Congressional War Powers votes</li>
          <li>PBS — War Powers demands</li>
          <li>ABC News — Tucker Carlson quote</li>
          <li>AP/FEC filings — AIPAC spending ($221M)</li>
          <li>Congressional Research Service — US aid to Israel ($174B)</li>
          <li>Council on Foreign Relations — Strike impact analysis</li>
          <li>Chatham House — Expert analysis</li>
          <li>The Atlantic — Regime change gamble analysis</li>
          <li>Stimson Center — Limits of airpower</li>
          <li>Foreign Policy — High bar for success</li>
          <li>Forbes — Operation Midnight Hammer cost ($2.25B)</li>
          <li>Bloomberg — Strait of Hormuz closure</li>
          <li>CNBC — Oil/LNG impact</li>
          <li>TIME — Constitutional law analysis</li>
          <li>Axios — Regime change history comparison</li>
          <li>Drop Site News — Minab school investigation</li>
          <li>Wikipedia — Compiled timeline, casualties, crisis background</li>
          <li>Libertarian Alliance — Anti-war analysis</li>
          <li>Washington Post — Russia providing Iran intelligence on US targets (Mar 6)</li>
          <li>New York Times — Russia-Iran intelligence sharing, Mehrabad Airport strike</li>
          <li>CNN — Russia aiding Iran targeting, Day 7 summary</li>
          <li>NBC News — Russia intelligence to Iran</li>
          <li>Reuters — B-2 bomber strikes on buried launchers, Trump wants say on Iran leader</li>
          <li>ISW (Institute for the Study of War) — Daily morning/evening special reports</li>
          <li>Alma Research Center — Daily war reports</li>
          <li>Roan Capital Partners — Situation Report: Epic Fury (Mar 6)</li>
          <li>TIME — Iran delays naming new Supreme Leader</li>
          <li>The Guardian — Mojtaba Khamenei succession, Tehran warns Europe</li>
          <li>Al Jazeera — Who is Mojtaba Khamenei</li>
          <li>Euronews — Trump demands unconditional surrender, Azerbaijan plots foiled</li>
          <li>Oxford Economics — Initial economic impact analysis</li>
          <li>Chatham House — How will the Iran war affect the global economy</li>
          <li>NPR — Strait of Hormuz traffic dried up</li>
          <li>Richard Haass (Substack) — The War at One Week</li>
        </ul>
      </div>

      {/* Cross-links */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Iran War 2026 — Deep Dives</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <Link href="/analysis/iran-cost-per-second" className="bg-red-50 rounded-lg border border-red-200 p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The $28,095-Per-Second War →</h3>
          <p className="text-stone-500 text-sm">Every Tomahawk, B-2 sortie, and interceptor — priced and sourced. $3.6B in Week 1.</p>
        </Link>
        <Link href="/analysis/iran-civilian-cost" className="bg-red-50 rounded-lg border border-red-200 p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Civilian Cost: Schools, Hospitals, Grand Bazaar →</h3>
          <p className="text-stone-500 text-sm">168 schoolchildren killed. UNESCO sites destroyed. What &quot;precision strikes&quot; look like.</p>
        </Link>
        <Link href="/analysis/iran-regional-war" className="bg-red-50 rounded-lg border border-red-200 p-4 hover:shadow-md transition">
          <h3 className="font-semibold">11 Countries, 7 Days →</h3>
          <p className="text-stone-500 text-sm">How a two-country war became a regional catastrophe. Every country mapped.</p>
        </Link>
        <Link href="/analysis/iran-russia-shadow-war" className="bg-red-50 rounded-lg border border-red-200 p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Russia&apos;s Shadow War →</h3>
          <p className="text-stone-500 text-sm">Moscow is sharing US military positions with Iran. Americans are dying with Russian help.</p>
        </Link>
        <Link href="/analysis/hormuz-crisis" className="bg-red-50 rounded-lg border border-red-200 p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Hormuz: The $80 Billion Chokepoint →</h3>
          <p className="text-stone-500 text-sm">21 miles wide. 20% of global oil. Iran closed it. There is no detour.</p>
        </Link>
        <Link href="/conflicts/iran-2026" className="bg-red-50 rounded-lg border border-red-200 p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026 — Conflict Data →</h3>
          <p className="text-stone-500 text-sm">Raw numbers: costs, casualties, key events timeline</p>
        </Link>
      </div>
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 mt-8">Related</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/conflicts/iran-1953" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 1953 — The Original Sin →</h3>
          <p className="text-stone-500 text-sm">CIA overthrow of Mossadegh started all of this</p>
        </Link>
        <Link href="/analysis/blowback" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Blowback →</h3>
          <p className="text-stone-500 text-sm">How interventions create the next generation of enemies</p>
        </Link>
        <Link href="/analysis/forever-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Forever Wars →</h3>
          <p className="text-stone-500 text-sm">How 60 words enabled 25 years of undeclared war</p>
        </Link>
        <Link href="/analysis/congressional-authority" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Who Decides? →</h3>
          <p className="text-stone-500 text-sm">The erosion of congressional war powers</p>
        </Link>
        <Link href="/analysis/military-industrial-complex" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Military-Industrial Complex →</h3>
          <p className="text-stone-500 text-sm">Who profits from permanent war</p>
        </Link>
        <Link href="/tools/tax-receipt" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Your Tax Receipt →</h3>
          <p className="text-stone-500 text-sm">See how much of your taxes fund war</p>
        </Link>
        <Link href="/analysis/war-on-terror" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The War on Terror →</h3>
          <p className="text-stone-500 text-sm">$8 trillion and counting</p>
        </Link>
        <Link href="/analysis/the-469" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">469 Military Interventions →</h3>
          <p className="text-stone-500 text-sm">Iran 2026 is intervention #470</p>
        </Link>
        <Link href="/analysis/cost-per-life" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Price of a Life →</h3>
          <p className="text-stone-500 text-sm">What each death costs in every US war</p>
        </Link>
        <Link href="/analysis/presidents-at-war" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Presidents at War →</h3>
          <p className="text-stone-500 text-sm">Every war president ranked</p>
        </Link>
        <Link href="/analysis/ukraine-proxy" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Ukraine — $175B Proxy War →</h3>
          <p className="text-stone-500 text-sm">Another war without an endgame</p>
        </Link>
        <Link href="/analysis/silicon-valley-pentagon" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Silicon Valley &amp; Pentagon →</h3>
          <p className="text-stone-500 text-sm">The tech powering the new wars</p>
        </Link>
        <Link href="/analysis/pentagon-climate" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Pentagon&apos;s Carbon Bootprint →</h3>
          <p className="text-stone-500 text-sm">War&apos;s environmental cost</p>
        </Link>
        <Link href="/analysis/jobs-vs-war" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Jobs vs War →</h3>
          <p className="text-stone-500 text-sm">Military spending creates the fewest jobs</p>
        </Link>
      </div>

      <RelatedArticles articles={[{"slug":"iran-day-by-day","title":"Iran Day-by-Day","desc":"Verified casualties and events — updated daily."},{"slug":"iran-cost-per-second","title":"The $28,095/Second War","desc":"Every dollar broken down."},{"slug":"hormuz-crisis","title":"The Hormuz Crisis","desc":"21M barrels/day halted."},{"slug":"iran-civilian-cost","title":"The Civilian Cost","desc":"Schools, hospitals, neighborhoods destroyed."}]} />

        <BackToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Whose War Is This? The Iran Conflict Nobody Asked For',
            description: 'Operation Epic Fury Day 7: 1,348 dead. 168 schoolchildren killed. Russia feeding Iran US troop locations. Strait of Hormuz halted. Oil surging. 11+ countries under fire. Trump demands unconditional surrender. Who benefits?',
            datePublished: '2026-03-01',
            dateModified: '2026-03-06',
            publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
            mainEntityOfPage: 'https://www.warcosts.org/analysis/iran-2026',
          }),
        }}
      />
    </div>
  )
}
