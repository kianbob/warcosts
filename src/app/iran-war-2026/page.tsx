import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import IranWarDashboard from '@/components/IranWarDashboard'

export const metadata: Metadata = {
  title: 'Iran War 2026 — Operation Epic Fury: Live Tracker | WarCosts',
  description:
    'Live dashboard tracking Operation Epic Fury. Day count, casualties, cost ticker, oil prices, Strait of Hormuz status. The one page to bookmark for the Iran war.',
  keywords: [
    'Iran war 2026',
    'Operation Epic Fury',
    'Iran conflict tracker',
    'US Iran war',
    'Strait of Hormuz closed',
    'Iran war cost',
    'Iran war timeline',
    'Iran war live',
  ],
  openGraph: {
    title: 'Iran War 2026 — Live Tracker | Operation Epic Fury',
    description: 'Live cost counter, casualties, timeline, and analysis. The one page to follow the Iran war.',
    url: 'https://www.warcosts.org/iran-war-2026',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Iran War 2026 — Operation Epic Fury: Live Tracker',
  description: 'Live dashboard tracking the US war on Iran. Cost, casualties, timeline, and analysis.',
  url: 'https://www.warcosts.org/iran-war-2026',
  datePublished: '2026-02-28',
  dateModified: '2026-04-19',
  publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
}

const timeline = [
  { date: 'Feb 28, 9:15am Tehran', event: 'Bombs begin falling in broad daylight. Decapitation strikes hit Khamenei\'s compound, presidential offices, and national security HQ along Pasteur Street.' },
  { date: 'Feb 28, 10:30am', event: 'Second wave of strikes. Satellite imagery shows Khamenei\'s compound as "dark grey mess of dust and ash." Israeli strikes hit targets across Iran simultaneously.' },
  { date: 'Feb 28', event: '168 killed when Israeli strike hits Shajareh Tayyebeh girls\' elementary school in Minab. 158 students ages 7–12 were attending morning classes.' },
  { date: 'Feb 28, 2:30am DC', event: 'Trump posts 8-minute video on Truth Social announcing "major combat operations in Iran" — Operation Epic Fury. No congressional authorization.' },
  { date: 'Feb 28', event: 'Iran retaliates with massive missile and drone barrages targeting Israel, Bahrain, Kuwait, Jordan, Qatar, Iraq, Saudi Arabia, UAE, Syria, and British bases in Cyprus.' },
  { date: 'Feb 28', event: 'Iran closes the Strait of Hormuz — 20% of global oil and 20% of global LNG transit. Oil prices surge.' },
  { date: 'Mar 1', event: 'Iranian state media confirms Khamenei is dead. 40 days of mourning declared.' },
  { date: 'Mar 1', event: '1,000+ total targets hit. Trump claims 48 Iranian leaders killed and 9 naval vessels sunk.' },
  { date: 'Mar 1', event: 'Pentagon confirms 3 US service members killed in action, at least 5 seriously wounded.' },
  { date: 'Mar 1', event: 'Senate votes 53–47 AGAINST the Kaine-Paul War Powers Resolution. Rand Paul is the only Republican yes.' },
  { date: 'Mar 2', event: 'Iran\'s IRGC announces sixth wave of attacks targeting Israeli military assets and 27 US bases.' },
  { date: 'Mar 3', event: 'Oil majors suspend crude shipments through Hormuz. Insurance premiums triple. Thousands of flights cancelled.' },
  { date: 'Mar 4', event: 'Qatar strikes Iran after Al Udeid base hit — first Qatari offensive action ever. 11+ countries now under fire.' },
  { date: 'Mar 5', event: '30+ Iranian warships sunk. Iran\'s navy effectively destroyed. Oil surges past $130.' },
  { date: 'Mar 6', event: 'B-2 bombers strike buried missile launchers. Mehrabad Airport hit. Russia reportedly sharing US positions with Iran.' },
  { date: 'Mar 7', event: 'Strikes expand to oil production: IDF hits Tondgouyan and Shahran refineries in Tehran. Khojir Military Complex destroyed.' },
  { date: 'Mar 8', event: 'Shahed drone factory in Isfahan destroyed. Oil surges past $100/barrel for first time since 2022.' },
  { date: 'Mar 9', event: 'Iranian missile sets Bahrain refinery ablaze. Bahrain declares force majeure on oil shipments.' },
  { date: 'Mar 10', event: 'Iran mining Strait of Hormuz — CENTCOM destroys 16 minelayers. 15M bbl/day stranded. Hezbollah and Iran launch coordinated cluster munition strikes on Israel.' },
  { date: 'Mar 11', event: 'Pentagon tells Congress: first 6 days cost $11.3 BILLION ($1.88B/day). Israeli jets strike Basij sites in Tehran residential districts. Dubai airport struck by drones.' },
  { date: 'Mar 13', event: 'All 6 KC-135 crew confirmed dead — US death toll 13+. New Supreme Leader Mojtaba Khamenei vows continued attacks. 15,000+ targets struck. Iran: 1,444 killed, 18,551 injured. 250+ US orgs demand Congress halt funding. Israel strikes Tehran and Shiraz.' },
  { date: 'Mar 12', event: 'KC-135 tanker crashes in Iraq. Israel claims top nuclear scientists killed. Tehran sets 3 conditions for peace. 1,348 killed, 17,000 injured in Iran.' },
  { date: 'Mar 14', event: 'US strikes 90 military targets on KHARG ISLAND — Iran\'s oil export hub. Trump threatens oil infrastructure if Hormuz stays closed. IRGC threatens UAE. 2,500 Marines + USS Tripoli deploying from Japan. Israel hits Iranian Space Agency. Explosion at Quds Day rally in Tehran. Mojtaba Khamenei "likely disfigured." Brent crude: $103.14. CSIS: $16.5B spent through Day 12. 3.2M Iranians displaced. 56% of Americans oppose war.' },
  { date: 'Mar 14 (eve)', event: 'Missile strikes helipad inside US Embassy compound in Baghdad — Kataib Hezbollah claims responsibility. US Embassy orders ALL Americans to leave Iraq immediately ("Do not travel to Iraq for any reason. Leave now."). Trump declares US has "completely decimated" Iran, calls for allied "team effort" to secure Hormuz. IDF hits 400th wave of strikes — 200+ military sites hit in one day. CENTCOM: 6,000+ targets struck, 60+ ships and 30+ minelayers destroyed. Fujairah (UAE) oil facility ablaze. Bahrain reports intercepting 203 drones and 124 missiles since Feb 28. UN Security Council passes Bahrain-led resolution condemning Iranian attacks — 130+ countries support. Iran deploying explosive "suicide skiffs" disguised as fishing boats in Hormuz. Iran moves hundreds of millions in crypto during internet blackout (IRGC-linked wallets).' },
  { date: 'Mar 15', event: 'Trump pressures NATO/China to send warships to Hormuz — little traction. Iran FM Araghchi: "We never asked for a cease-fire." Brent crude past $106/barrel. California gas exceeds $5/gallon.' },
  { date: 'Mar 16', event: 'Israel expands ground operation in southern Lebanon. Airstrikes hit Tehran near airport. Dubai airport drone-struck. Baghdad airport hit. Mojtaba Khamenei appoints former IRGC chief Rezaei as military adviser. Lebanon: 850+ killed, 830K displaced.' },
  { date: 'Mar 17', event: 'US wounded surges to ~200 (CENTCOM). Dozen MQ-9 drones destroyed. 7,000+ targets struck in Iran. Israel strikes Tehran (Saadabad Palace) and Beirut simultaneously. Senior officials Larijani and Basij chief targeted. Amnesty confirms US responsible for Minab school attack. NATO rejects Hormuz mission. Lebanon: 886+ killed, 1M+ displaced. Trump delays China trip, calls Iran "paper tiger."' },
  { date: 'Mar 18', event: 'Israel strikes SOUTH PARS gas field — world\'s largest, shared with Qatar — biggest attack on energy production. Oil nears $110/barrel. Israel kills intelligence minister Khatib — 3rd senior official in 48hrs. Defense minister Nasirzadeh also confirmed killed. Iran retaliates with cluster munitions on Tel Aviv — 2 killed in Ramat Gan. Ben-Gurion Airport and train station damaged. Central Beirut struck WITHOUT WARNING — 10+ killed. HRANA: 3,114 killed in Iran (1,354 civilians, 207 children). Lebanon: 900+ killed. CIA: war will take 4-6 weeks. Trump "not afraid" to put troops on ground.' },
  { date: 'Mar 19', event: 'Iran strikes Qatar\'s RAS LAFFAN — world\'s largest LNG terminal — 17% capacity sidelined for 3-5 years. Oil hits $119/barrel intraday. Pentagon demands $200B from Congress. Hegseth: "largest strike package yet." 5,000-lb penetrators on underground sites. Trump says he "knew nothing" about Israel\'s South Pars strike. Threatens to "massively blow up" South Pars if Iran attacks Qatar. Lebanon crosses 1,001 dead. Global markets crash. Bessent considers suspending Iranian oil sanctions. No end in sight. Day 20.' },
  { date: 'Mar 20', event: 'Day 21 — Nowruz under bombs. USS Boxer departs San Diego with 2,200+ Marines for Middle East. Trump calls NATO "cowards" for not helping reopen Hormuz. Netanyahu signals "ground component" needed. US F-35 emergency landing after Iran combat mission — possibly first American jet struck. Iran warns "zero restraint" on energy targets. Mojtaba Khamenei issues Nowruz message — "enemy defeated" — still hasn\'t appeared in public. Poland evacuates troops from Iraq. Spain announces €5B aid package + rent freeze. UAE arrests 5 Iran/Hezbollah operatives. Saudi intercepts 10+ drones. Bahrain: 139 missiles and 238 drones intercepted total. Iran questions Germany\'s Ramstein Air Base role. Macron to consult UNSC on Hormuz framework. Oil settles at $107/barrel. Trump invokes Pearl Harbor to Japanese PM\'s face. Hegseth: no timeframe. 7,800+ strikes in Iran. The war enters its fourth week.' },
  { date: 'Mar 21', event: 'Day 22 — Trump signals "winding down" — Israel vows ESCALATION. Trump posts he is considering "winding down" operations, says "getting very close to meeting our objectives." Hours later, Israel defense minister Katz says strikes will "escalate significantly" next week — public split between allies. Iran fires missiles at Diego Garcia (US-UK base, Indian Ocean, 2,500 miles away) — farthest Iranian strike of the war — unsuccessful. Natanz nuclear site struck again; no radioactive leakage. Treasury eases oil sanctions, allowing ~140M barrels at sea to be sold. 22 countries (including UAE) pledge Hormuz safe passage. CENTCOM: 8,000+ targets struck, 130 vessels destroyed — "Their Navy is not sailing, their fighters not flying." Eid under bombs: Israeli strikes pound Beirut before dawn. IDF kills 4 Hezbollah fighters. Lebanon: 1,000+ killed, 2,600+ wounded, 1M+ displaced. Iranian cluster munition hits empty kindergarten in Rishon LeZion. UAE intercepts 3 missiles + 8 drones. Bahrain: 143 missiles, 242 drones intercepted total. Saudi intercepts dozens of drones. Drone kills officer at Iraqi intelligence HQ in Baghdad. Iran FM Araghchi: not seeking ceasefire but "complete end to war." Iranian man charged trying to enter UK nuclear submarine base at Faslane. HRANA: 1,394 civilians killed in Iran. US death toll: 13. No ceasefire. Allies diverging.' },
  { date: 'Mar 22', event: 'Day 23 — TRUMP\'S 48-HOUR ULTIMATUM. Trump threatens to "obliterate" Iran\'s power plants if Hormuz not reopened within 48 hours. IRGC warns of "irreversible damage" — threatens all US-linked energy infrastructure in region. Iranian missiles break through Israeli defenses at DIMONA and ARAD — 100+ wounded near nuclear research center. Israeli military admits defense systems FAILED. Netanyahu visits crater, vows to pursue IRGC commanders "personally." Israel: 4,292 wounded total. Israel intensifies Lebanon demolitions — defense minister orders stepped-up destruction of bridges and houses. Iran death toll: 1,500+ (state media), 3,230 (HRANA — 1,406 civilians, 210+ children), 20,984 injured. Saudi expels Iranian diplomatic staff (persona non grata). Saudi intercepts ~60 drones + 3 ballistic missiles. Turkey FM Fidan meets Iran/Egypt/EU/US to discuss ending war — first multi-party diplomatic push. Islamic Resistance in Iraq: 21 attacks on US bases in 24 hours. 3 drones intercepted near Erbil. IRGC claims it shot down Israeli fighter (3rd such claim). Iran intercepts US-Israeli drone over Tehran. UAE/Bahrain/UK/France/Germany joint statement condemning Iran\'s "de facto closure" of Hormuz. CBS poll: most Americans say war NOT going well, call it "war of choice." Pezeshkian calls on BRICS to halt aggressions. Oil surges to ~$112/barrel. No ceasefire. The ultimatum clock starts.' },
  { date: 'Mar 23', event: 'Day 24 — TRUMP BLINKS. Postpones 48-hour power plant ultimatum by 5 DAYS — claims "very strong talks" with Iran via Kushner and Witkoff. Iran IMMEDIATELY DISPUTES — foreign ministry says Trump\'s claims are a ploy to "reduce energy prices and buy time for implementing his military plans." Oil drops from $114 to ~$100 on the news. But bombs keep falling: Israel/US carry out "unprecedented" strikes across Iran — 6 killed in Tabriz homes, child killed in Khorramabad residential building (Fars). Fire at defense ministry-affiliated building in Tehran. 8,000+ combat flights flown (CENTCOM). IRGC claims possible F-35 shootdown — Al Jazeera investigates. Iran warns Hormuz "completely closed" if power plants hit. Oman FM working on "safe passage arrangements" — first concrete diplomatic mechanism. IDF strikes Dallafa Bridge in southern Lebanon; IDF chief says campaign "only just begun," preparing to push deeper. IDF orders accelerated demolition of Lebanese homes near border (Reuters). 2,000+ killed across all theaters since Feb 28 (NYT). 180+ injured in Iranian missile strikes on southern Israel over weekend. US death toll: 13. IEA chief calls energy crisis "worse than 1973 and 1979 combined." The ultimatum is paused. The bombs are not.' },
  { date: 'Mar 24', event: 'Day 25 — IRAN STILL HITTING, WORLD BREAKING. Iranian missiles strike Tel Aviv — 3+ residential buildings extensively damaged, 6+ injured (NYT/AP). Six ballistic missiles hit Kurdish Iraq — 6 Kurdish fighters killed, 30 wounded. Iranian missile kills Moroccan contractor in Bahrain, injures 5 Emirati soldiers (UAE MoD). Despite 9,000+ US strikes (CENTCOM), Iran\'s missile capability demonstrably intact. Lebanon EXPELS Iranian ambassador — persona non grata, must leave by Mar 29 (AP). Defense Minister Katz announces permanent Israeli "security zone" up to Litani River — 30km deep (Haaretz). MBS secretly pushing Trump to continue war — sees "historic opportunity" to remake Middle East (NYT). Philippines becomes FIRST country to declare national energy emergency over the war (Reuters/BBC). South Korea urges shorter showers, restricts EV charging (NYT). Iran names hardliner IRGC general Zolghadr as top security chief replacing killed Larijani — war has consolidated military control over Iran (NYT). US strike pause applies ONLY to energy sites — all other strikes continue (Reuters/Semafor). Rubio heading to G7 in France Friday. Pakistan offers to mediate, favoring Vance (Guardian). Oil rebounds to ~$103 as Iran disputes talks. The war is now breaking countries that aren\'t even fighting in it.' },
  { date: 'Mar 25', event: 'Day 26 — CEASEFIRE REJECTED. Iran dismisses US 15-point ceasefire plan, issues counterproposal. Trump threatens to "hit harder." Iran shuns Witkoff/Kushner — prefers VP Vance as intermediary (CNN). Pentagon orders 2,000+ 82nd Airborne troops to Middle East (NYT), plus 3,000-4,000 more expected (Reuters). Strikes kill 12 in south Tehran. HRANA: 664 attacks in 28 provinces. Filmmaker Abbas Kiarostami\'s house damaged. Iran claims targeting US F-18. Updated casualties — Iran: 1,937 killed, 24,800 injured. Israel: 18 killed, 5,045 wounded. Lebanon: 1,072+ killed. Oil dips to ~$100 on ceasefire talk, then rebounds.' },
  { date: 'Mar 26', event: 'Day 27 — HORMUZ COMMANDER KILLED. Israel kills IRGC Navy commander Alireza Tangsiri — architect of the Strait of Hormuz blockade (NYT/ABC). Trump warns Iran to accept deal "before it is too late." Says Iran "begging to make a deal, not me." White House: Trump prepared to "unleash hell." Speaker Johnson claims "Epic Fury is almost done." Iran fires more missiles at Israel and Gulf states overnight. Israeli strikes kill 5 in Lebanon (Guardian). Oil surges to $106/barrel — up $6 in one day (Fortune/NYT). Pakistan army chief emerges as key mediator between US and Iran (NYT). Lebanon: 1,094 killed (121 children), 3,119 wounded. Israel: 19 killed, 5,229 wounded. No ceasefire. The blockade commander is dead but the blockade continues.' },
  { date: 'Mar 27', event: 'Day 28 — IRAN BLOCKS CHINESE SHIPS — INDUSTRIAL WAR ESCALATION. Iran turns back 2 COSCO-owned Chinese ships at Hormuz — blocking even "friendly" nations for first time (NYT/CNBC). Iran formalizing "toll booth" regime — charging ships millions for passage (NBC/AP). Trump extends power-plant deadline a SECOND time to April 6. Trump: "3,554 targets left" — CENTCOM has struck 10,000+ military targets. Rubio at G7: "war will end in weeks, not months," no ground troops needed. Israel shifts to ECONOMIC TARGETING — strikes Mobarakeh Steel Complex in Isfahan (1 killed, 15 injured) and Khuzestan Steel Industries (16 injured). Israel also strikes Khondab/Arak heavy water complex (nuclear, no casualties) and weapons production site in Yazd (missile/sea mine factory). Iran threatens retaliatory strikes on steel factories in Israel + 5 other countries. Several Americans injured at Prince Sultan Air Base in Saudi Arabia — US wounded now 303 (NBC). Iran-linked hackers (Handala) breach FBI Director Kash Patel\'s personal email. Brent crude $108/bbl — US crude $101+ (up 7% on day, 50% since war, 75% since Jan). S&P/Nasdaq 5th consecutive week of losses. G7 calls for "immediate cessation of attacks against civilians and civilian infrastructure." 70,000+ residential units damaged, 300 health facilities, 600 schools across Iran. 120+ cultural/heritage sites damaged (Tehran city council). Houthis threaten "direct military intervention" if more countries join. Russia sends 313 tons medical supplies to Iran. Ghalibaf mocks US ground troop capability. Lebanon: pregnant woman killed in Al-Bazaliyeh. NRC: "highest price" paid by civilians, millions could flee. Philippines transport worker strike in Manila over fuel. HRANA: 3,300+ killed (1,492+ civilians, 210+ children). Germany/Poland pass fuel price controls. WTO: "worst trade disruptions in 80 years." No ceasefire.' },
  { date: 'Mar 28', event: 'Day 29 — WEEK 5. One month since Khamenei killed in Israeli bunker strike (confirmed Mar 1). HRANA: 3,461 killed in Iran (1,551 civilians, 228+ children), 3,229+ wounded, 1M+ displaced. Lebanon: 102+ killed, 400+ Hezbollah fighters dead (Reuters), 638 wounded. Oil at $116/bbl — Brent hit $119.50 intraday earlier in week. Pentagon: $11.3B first 6 days → $18B by Day 19 → now requesting $200B from Congress. US: 15 dead, 303+ wounded. Israel: 19 civilians killed, 5,768 injured. Iran threatens complete Hormuz closure. Houthis threaten intervention. Massive global anti-war protests.' },
  { date: 'Mar 29', event: 'Day 30 — BANDAR KHAMIR BOMBED. US/Israeli strikes hit Bandar Khamir port on Iran\'s southern coast. Israel strikes IUST Physics Dept in Tehran — nuclear scientist killed. 12,000+ targets struck, 150+ vessels destroyed. Brent crude $116/bbl. HRANA: 3,461+ killed. Lebanon: 102+ killed, 400+ Hezbollah dead. US: 15 dead, 303+ wounded. Iran warns of "complete and permanent" Hormuz closure. No ceasefire. No negotiations. Day 30.' },
  { date: 'Mar 30', event: 'Day 31 — KUWAITI TANKER ABLAZE OFF DUBAI. Iranian drone sets fully loaded Al Salmi tanker on fire off Dubai port (~2M barrels, $200M+). 24 crew safe, no spill. Dozens of tankers flee area. Trump threatens to seize Kharg Island and Iran\'s oil, tells European allies "Go get your own oil!" Iran rejects ceasefire as "unrealistic," approves Hormuz toll regime. US crude above $100/bbl. Iranian strike wounds US personnel, hits jets at Saudi base (NPR). Pentagon preparing weeks of ground operations (WaPo). 3 Israeli soldiers killed in Lebanon. Lebanon: 1,200+ killed. 13,000 targets struck total. Trump reportedly willing to end war with Hormuz still closed.' },
  { date: 'Mar 31', event: 'Day 32 — HEGSETH: "LOWEST ENEMY FIRE" — OIL HITS $118. Pentagon holds first briefing in 2 weeks. Hegseth: lowest missiles/drones in 24 hours, Iranian military "demoralized" with "widespread desertions." 200 dynamic strikes overnight. Isfahan ammo depot hit with 2,000-lb bunker busters. All Iranian frigates destroyed (150+ ships total). Brent crude surges above $118/bbl — record 59% monthly gain. US gas $4/gallon. Israel to destroy "all houses" near Lebanon border. Wave of attacks in central Israel. China confirms 3 ships through Hormuz. IMF warns of higher prices, slower growth. No ceasefire. Day 32.' },
  { date: 'Apr 1', event: 'Day 33 — PENTAGON HIDING CASUALTY NUMBERS. Intercept reports Pentagon hiding US casualty numbers — sent outdated statements resulting in undercounts. One unnamed US soldier died in non-combat death. Iran-Oman talks on Hormuz monitoring reported. Day 33.' },
  { date: 'Apr 2', event: 'Day 34 — MAJOR ESCALATION: TEHRAN BRIDGE & PASTEUR INSTITUTE DESTROYED. Trump strikes Tehran highway Bridge B-1, Pasteur Institute (leading public health institution) destroyed. Trump vows to take Iran "back to the Stone Ages." Stocks drop 1.5%, partially recover on Iran-Oman Hormuz talk rumors. Brent $111.69. Day 34.' },
  { date: 'Apr 3', event: 'Day 35 — F-15E SHOT DOWN OVER IRAN. F-15E Strike Eagle (494th FS, likely RAF Lakenheath) shot down over western Iran — first US manned aircraft downed by Iran. Pilot rescued via CSAR, WSO still missing. Iran offers $60K reward. A-10 crashes near Hormuz, pilot rescued. Black Hawk hit during rescue. 7 manned aircraft lost. Italy sends naval forces to Gulf. Pentagon requests $1.1T budget + $350B reconciliation. Heaviest Tehran bombardment since war began. Brent $112.42. Day 35.' },
  { date: 'Apr 4', event: 'Day 36 — BUSHEHR NUCLEAR PLANT HIT — INDUSTRIAL ESCALATION. Projectile strikes Bushehr nuclear plant perimeter — 1 killed, IAEA says no radiation increase. Araghchi: Bushehr "bombed four times." Mahshahr petrochemical zone struck. Strikes expand to steel, cement, petrochemical. US intel: Iran rebuilds bombed missile silos within HOURS. Iran fires at Dimona/Arad — 116 wounded (7 serious). Trump renews Hormuz ultimatum (3rd extension). 2 Turkish ships transit Hormuz (first since war). UNSC postpones Hormuz vote. IDF strikes Quds Force command centers in Beirut. Tyre civilians killed. Brent ~$109/bbl. Day 36.' },
  { date: 'Apr 5', event: 'Day 37 — WSO RESCUED FROM IRAN. Missing F-15E weapons officer rescued from mountain crevice in southwestern Iran after 2-day CSAR operation — 170+ aircraft, hundreds of troops. Both crew now safe. 5 killed in strikes on Mahshahr petrochemical hub. Iran calls Trump "unstable, delusional." 14 killed in Israeli strikes across Lebanon. France and South Korea agree to cooperate on reopening Hormuz. Brent ~$111/bbl.' },
  { date: 'Apr 6', event: 'Day 38 — COORDINATED IRAN-HEZBOLLAH-HOUTHI ATTACK. First confirmed three-way joint strike on Israel. Iranian missile hits residential building in Haifa — 4 killed. Israel strikes "regime targets" in Tehran — 25 killed. IDF hits Hezbollah\'s Imam Hussein Division HQ. Israeli strikes expand into Christian suburb Ain Saadeh east of Beirut — deepening sectarian fissures. 15 US troops wounded at Ali Al Salem Air Base (Kuwait). Saudi intercepts 18 drones + 7 ballistic missiles. King Fahd Causeway (Bahrain-Saudi) CLOSED indefinitely. Iran rejects ceasefire, issues 10-point counterproposal. Trump: "not good enough." 3rd Turkish ship transits Hormuz. Lebanon: 1,461+ killed, 1.1M+ displaced. Brent ~$110/bbl.' },
  { date: 'Apr 7', event: 'Day 39 — CEASEFIRE ANNOUNCED. Israel kills IRGC intelligence chief Maj Gen Majid Khademi at dawn. Strikes on 3 Tehran airports. Israel hits South Pars gas field power units — "huge escalation." Kharg Island struck again. Trump threatened "a whole civilization will die tonight" ahead of 8 PM ET deadline. Then at 6:32 PM ET, Trump announces 2-WEEK CEASEFIRE via Truth Social. Pakistan PM Shehbaz Sharif and Army Chief Asim Munir mediated the deal. Iran FM Araghchi confirms: safe passage through Hormuz will resume. Ceasefire includes Lebanon. Negotiations begin Apr 10 in Islamabad. Iran\'s 10-point counterproposal forms basis for talks. BUT: missiles STILL launched from Iran after ceasefire took effect at 8 PM ET. Israel still attacking Iran even as White House said Tel Aviv accepted. IAEA warns strikes near Bushehr "could cause severe radiological accident." Reuters: 5,000+ killed across nearly a dozen countries, 1,600+ civilians in Iran.' },
  { date: 'Apr 8', event: 'Day 40 — CEASEFIRE FRACTURING ON DAY 1. Oil crashes 15% to ~$95/bbl. S&P 500 futures jump 2.2%. But Israel pounds Lebanon with HEAVIEST strikes since war began — dozens killed, hundreds wounded (Reuters). Netanyahu declares ceasefire "does not include Lebanon" (AP). Hezbollah pauses attacks; Israel escalates. Iran\'s Tasnim reports Tehran considering backing out of ceasefire over Lebanon. Kuwait engages 28 Iranian drones, Qatar hit by 7 missiles despite truce. Lavan Island refinery struck. Only 2 ships cross Hormuz; 400+ stranded. Iran\'s 10-point counterproposal leaked: non-aggression, enrichment acceptance, sanctions lifted, US base withdrawal, compensation. Trump: "no enrichment." HRANA: 1,665 civilians killed in Iran (244 children). Lebanon: 1,500+ killed. Islamabad talks confirmed for Apr 10. Whether the ceasefire survives the week is deeply uncertain.' },
  { date: 'Apr 9', event: 'Day 41 — CEASEFIRE TEETERING. Israel\'s Apr 8 Lebanon strikes confirmed deadliest day of war: 254 killed, 1,100+ wounded (Reuters). 100+ targets hit in 10 minutes. Israel killed personal secretary to Hezbollah leader Qassem. Hezbollah retaliates with rockets. Iran RE-CLOSES Strait of Hormuz over Lebanon strikes (AP). Ghalibaf: ceasefire "unreasonable" — accuses US of 3 violations. ADNOC CEO: "Hormuz is NOT open." EU/UK/Germany demand Lebanon included in truce. Oil rebounds to $98/bbl. VP Vance to lead US delegation to Islamabad Saturday with Witkoff & Kushner. Iranian delegation arriving Thursday night. HRANA: no new casualties in Iran since ceasefire. 40th-day Khamenei mourning in Tehran. Lebanon: 1,750+ killed total. The ceasefire survives — barely — but only because talks are days away.' },
  { date: 'Apr 10', event: 'Day 42 — DELEGATIONS CONVERGE. Iranian delegation (Ghalibaf + FM Araghchi) arrives Islamabad. Vance departs Washington. Pakistan PM Sharif: "make or break." BBC: only 19 ships through Hormuz since ceasefire — near standstill. Iran can\'t locate all its own mines (NYT). Lebanon: 1,953 killed, 6,303 wounded (health ministry). Israel stopped striking Beirut since Apr 8 but continues in south Lebanon. Oil $97.78/bbl.' },
  { date: 'Apr 11', event: 'Day 43 — HISTORIC: VANCE MEETS GHALIBAF — highest-level US-Iran meeting since 1979 Revolution. Face-to-face talks in Islamabad, mediated by Pakistan. US: Vance, Witkoff, Kushner. Iran: Ghalibaf, Araghchi. Vance: "I think it\'s going to be positive" — warns Iran not to "try to play us." Sticking points: nuclear enrichment, Lebanon, Hormuz. Israel continues strikes in south Lebanon Saturday. Ceasefire holding but brittle. Oil ~$98/bbl.' },
  { date: 'Apr 12', event: 'Day 44 — TALKS COLLAPSE. After 21 hours of marathon negotiations, Vance departs Islamabad with NO DEAL (NYT/NPR/Al Jazeera). Iran says they were "inches away" from agreement but encountered "maximalism and shifting goalposts." Trump: "I don\'t care if they come back or not." Then announces US will BLOCKADE Iranian ports starting Apr 13 at 10 AM ET. WSJ: Trump considering restarting limited strikes. NATO blasted as "paper tiger." Lebanon Red Cross paramedic killed by Israeli strike. Lebanon: 2,020+ killed.' },
  { date: 'Apr 13', event: 'Day 45 — US NAVAL BLOCKADE BEGINS. CENTCOM confirms blockade of all ships entering/departing Iranian ports now in effect. Trump: ships approaching will be "immediately eliminated." Brent crude surges 7% to $102/bbl. UK refuses to participate. Spain: blockade "makes no sense." Iran warns "no port in the Gulf will be safe." Netanyahu: ceasefire "could end at any moment." IDF encircles and raids Bint Jbeil in southern Lebanon — historic Hezbollah stronghold. Russian oil sanctions waiver expires. Australia PM seeking alternative fuel in SE Asia. Ceasefire technically holds but blockade is massive escalation.' },
  { date: 'Apr 14', event: 'Day 46 — BLOCKADE DAY 1: No enforcement incidents. Oil falls to $97.66/bbl on hopes of resumed talks. IMF cuts global growth, warns of recession. Italy suspends Israel defense pact. France-UK summit Friday on Hormuz plan. Israel-Lebanon direct talks in Washington (Rubio attending). First humanitarian aid reaches Iran overland. Ceasefire holding — 1 week left.' },
  { date: 'Apr 15', event: 'Day 47 — TRUMP DECLARES WAR "OVER" — SENDS MORE TROOPS — IRAN THREATENS RED SEA: Trump tells Fox News war is "over" (Apr 14 evening), then on Fox Business says "very close to being over" — attacks could continue "as long as needed." 6,000 more troops + USS George HW Bush carrier ordered to region. CENTCOM: US has "completely halted" Iran trade by sea — 9 ships turned back in 48 hours, 10,000+ troops enforcing blockade. Iran Maj Gen Abdollahi threatens to expand control to Persian Gulf, Sea of Oman AND Red Sea. Pakistan Army Chief Munir arrives in Tehran for talks. State Dept announces Israel-Lebanon "launch direct negotiations" — but Hezbollah condemns. Israel kills 3 medics attacking rescue teams at Mayfadoun. Several killed in Ansariya strikes. Harvard: war will cost $1 trillion (CNBC). IEA: "demand destruction" underway — steepest quarterly demand decline since COVID. Iran Red Crescent: 7,200+ rescued from rubble. Iran damage: $300B-$1T. Lebanon: 2,124 killed (health ministry). Oil ~$97-98/bbl. HRANA: 1,701 civilians (254 children) — unchanged since ceasefire. Ceasefire expires Apr 21 — 6 days left. No timetable for new talks.' },
  { date: 'Apr 16', event: 'Israel and Lebanon agree to 10-day ceasefire starting 5 PM ET (AP/Trump). Senate rejects War Powers resolution 47-52 (4th time) + arms sales halt to Israel (40-59, 36-63). USS Gerald R. Ford breaks post-Vietnam deployment record at 295 days. IEA: Europe has ~6 weeks of jet fuel left — "largest energy crisis we have ever faced." 60-day War Powers deadline looms end of April — GOP senators signal authorization vote needed. Blockade Day 4. Ceasefire expires Apr 21 — 5 days left.' },
  { date: 'Apr 17', event: 'Day 49 — IRAN OPENS HORMUZ — OIL CRASHES 13% — TRUMP BANS ISRAEL BOMBING LEBANON: Iran FM Araghchi declares Hormuz "completely open" for all commercial vessels for ceasefire duration (Reuters). Oil plunges 13% to ~$86/bbl — lowest since Mar 10. Trump: Iran agreed to "never close Hormuz again," removing sea mines. Trump on Truth Social: "Israel will not be bombing Lebanon any longer. They are PROHIBITED from doing so by the U.S.A. Enough is enough!!!" Netanyahu faces backlash. Axios: progress on 3-page MOU — $20B cash-for-uranium deal considered. Trump: "very close to making a deal" — both sides may meet this weekend. US blockade of Iranian ports remains (10,000+ personnel). Lebanon ceasefire Day 1: thousands flood south, fireworks in Beirut. Lebanon health ministry: 2,294 killed (up from 2,124). HRANA: 1,701 civilians (254 children) — unchanged. Ceasefire expires Apr 21 — 4 days left.' },
  { date: 'Apr 18', event: 'Day 50 — IRAN RE-CLOSES HORMUZ: Iran reverses Hormuz opening after US refuses to lift naval blockade (Guardian/NPR/CNN/Al Jazeera). IRGC says Hormuz closed "until US lifts blockade" — restored to "previous status" under "strict management and control by the armed forces." IRGC gunboats fire on tanker 20 NM NE of Oman — no radio warning. Crew safe (UKMTO). Indian-flagged crude oil vessel also attacked (Reuters). Ships reverse course, hundreds waiting in both directions. Only ~8 tankers passed in brief window before re-closure. Ghalibaf: talks made "progress but there is still a big distance between us." Trump warns against "blackmail" over Hormuz. Oil rebounds on re-closure news. Israel: 1 soldier killed, 9 wounded in south Lebanon combat. IDF establishes "Yellow Line" demarcation. Iran internet blackout Day 50.' },
  { date: 'Apr 19', event: 'Day 51 — VANCE HEADING TO PAKISTAN — IRAN REFUSES DELEGATION: Trump announces VP Vance, Witkoff, and Kushner traveling to Islamabad for Round 2 talks (CBS/NYT/White House). Iran\'s Tasnim: "no decision by Iran to send a negotiating delegation to Pakistan as long as there is a naval blockade." Ceasefire expires Tuesday April 21 — same day as planned talks — 2 days left. Trump accuses Iran of "serious violation" of ceasefire. Trump threatens bridges and power plants. Trump: "NO MORE MR. NICE GUY!" UN Ambassador Waltz: civilian infrastructure "absolutely a legitimate target." USS Ford + 2 destroyers moved to Red Sea via Suez. Hochstein: "Iranians now have a card they never had" — gas over $4/gallon. Pope Leo XIV calls Lebanon ceasefire "cause for hope." HRANA: 1,701 civilians (254 children) — unchanged. Lebanon: 2,294 killed. US: 13 KIA. Oil ~$90-95/bbl.' },
  { date: 'Apr 20', event: 'Day 52 — USS SPRUANCE SEIZES TOUSKA — BOTH SIDES HEADING TO ISLAMABAD: USS Spruance fires on and seizes Iranian-flagged cargo ship M/V Touska in Gulf of Oman — Marines searching 5,000 containers. Iran calls it "piracy." Both sides planning Islamabad talks. Only 3 ships crossed Hormuz Monday. Oil ~$95-96/bbl. Ceasefire expires TOMORROW.' },
  { date: 'Apr 21', event: 'Day 53 — CEASEFIRE EXPIRES — TRUMP WON\'T EXTEND — TANKER SEIZED — TALKS IN LIMBO: Trump tells CNBC he does NOT want to extend ceasefire, military "raring to go," "expects to be bombing." Navy SEALs board MT Tifani oil tanker (~2M barrels Iranian crude) near Sri Lanka (Pentagon/DoD video). CENTCOM: 28 ships turned back. Iran FM condemns Touska as "piracy." Vance\'s Pakistan departure DELAYED for White House meetings. Iran hasn\'t confirmed Round 2 — Ghalibaf: won\'t attend "under shadow of threats" — but privately, delegation making plans. Xi Jinping demands Hormuz reopened (first time). France: war costing €4-6B. IEA: "biggest energy crisis in history." Oil ~$95.75/bbl. HRANA: 1,701 civilians (254 children) — unchanged. Lebanon: 2,294 killed. US: 13 KIA, 520+ wounded.' },
  { date: 'Apr 22', event: 'Day 54 — TRUMP EXTENDS CEASEFIRE INDEFINITELY — BLOCKADE REMAINS — IRAN: "ACT OF WAR" — IRAN SEIZES 2 SHIPS: Trump extends ceasefire indefinitely via Truth Social — "until such time as their leaders and representatives can come up with a unified proposal." US naval blockade REMAINS — Trump says lifting it would make deal impossible. Iran FM Araghchi calls blockade an "act of war." Ghalibaf: won\'t accept ceasefire with continued blockade. Iran seizes 2 ships in Strait of Hormuz (Guardian). CENTCOM: 29 ships turned back. MT Tifani boarding confirmed as first outside Middle East. DCAS: 400 US wounded (271 Army, 64 Navy, 19 Marines, 46 Air Force). 13 KIA unchanged. US intelligence: Iran retains ~50% ballistic missiles, ~60% IRGC Navy, ~66% air force — more capable than Pentagon admits (CBS). IRGC threatens Gulf oil production. Sen. Graham: blockade "could become global soon." New US/EU sanctions. Pezeshkian: blockade and threats "main obstacles to genuine negotiations." Iran acknowledges ceasefire extension but does NOT confirm new talks. Lebanon: 2,454 killed, 7,658 injured. PM Salam: needs $587M. Israeli settlers kill 2 in West Bank. Israeli strikes wound civilians in south Lebanon despite ceasefire. Trump approval: 33% (AP/NORC).' },
  { date: 'Apr 23', event: 'Day 55 — TRUMP: "SHOOT AND KILL" BOATS LAYING MINES — IRGC SEIZES 2 SHIPS — ISRAEL "WAITING FOR GREEN LIGHT": Trump orders Navy to "shoot and kill any boat" laying mines in Hormuz — most aggressive escalation since blockade began. IRGC seizes 2 foreign vessels in Hormuz, fires on a third. US seizes tanker Majestic X in Indian Ocean — second seizure this week. CENTCOM: 31 ships turned back. BIMCO: mine clearance could take weeks. Strait remains FULLY CLOSED. Israel defense minister Katz: "waiting for green light" from US to resume war — "targets are marked." Senate kills 5th War Powers resolution 46-51 (Rand Paul only R yes, Fetterman votes with Rs). Navy Secretary Phelan fired — 34th senior official removed under Trump. Ghalibaf: Hormuz stays closed while blockade remains. Israeli airstrike kills journalist Amal Khalil despite ceasefire — 5 killed across Lebanon on Wednesday. Zelenskyy signs "Drone Deal" with Saudi/Qatar/UAE. Erdogan: war "starting to weaken Europe." Oil ~$103/barrel. Lebanon: 2,454 killed. US: 13 KIA, 400 wounded. No talks scheduled.' },
  { date: 'Apr 24', event: 'Day 56 — HEGSETH: BLOCKADE "GROWING AND GOING GLOBAL" — 3RD CARRIER — LEBANON CEASEFIRE EXTENDED 3 WEEKS: Hegseth says blockade will last "as long as it takes." 3rd carrier (USS George HW Bush) arrives — 3 carrier strike groups deployed. CENTCOM: 34 ships turned back. 2 dark fleet ships seized in Indo-Pacific. Israel-Lebanon ceasefire extended 3 weeks — Hezbollah: "meaningless" — fires rockets. Israel strikes south Lebanon despite ceasefire. Iran FM Araghchi heading to Islamabad. Pentagon threatens suspending Spain from NATO. US used 1,000+ Tomahawks — threatens Taiwan readiness (WSJ). IEA: "biggest energy security threat in history." Oil ~$107. Lebanon: 2,454 killed. US: 15 KIA, 538 wounded.' },
]

const costProjections = [
  { scenario: 'Air Campaign Only (4 weeks)', cost: '$50–55B', note: 'Pentagon confirmed $11.3B for first 6 days ($1.88B/day). At this rate: $50B+ for full month.' },
  { scenario: 'Extended Air Campaign (3 months)', cost: '$25–50B', note: 'Including carrier group deployments, refueling, ammunition resupply.' },
  { scenario: 'Limited Ground Operation', cost: '$100–200B', note: 'Seizing ports or oil facilities. Requires 50,000+ troops.' },
  { scenario: 'Full Occupation (Iraq-style)', cost: '$1–3 trillion', note: 'Iran is 4× the size of Iraq with 3× the population.' },
  { scenario: 'Hormuz Closure (economic cost)', cost: '$50–100B/month', note: 'Global oil disruption, shipping rerouting, insurance costs, GDP impact.' },
  { scenario: 'Reconstruction (if attempted)', cost: '$500B+', note: 'Iraq reconstruction cost $220B and mostly failed. Iran would be far more expensive.' },
]

const iranArticles = [
  { href: '/analysis/iran-2026', title: 'Whose War Is This? Full Analysis', desc: 'The complete story from October 7 to Operation Epic Fury.' },
  { href: '/analysis/iran-day-by-day', title: 'Day-by-Day War Diary', desc: 'Verified casualties, costs, and events — updated daily.' },
  { href: '/analysis/iran-cost-per-second', title: 'The $21,800-Per-Second War', desc: '$11.3B in 6 days — Pentagon confirmed. Every dollar broken down.' },
  { href: '/analysis/iran-civilian-cost', title: 'The Civilian Cost', desc: '3,461+ killed, 3,229+ wounded, 228+ children — the human toll.' },
  { href: '/analysis/iran-regional-war', title: '12+ Countries, 13 Days', desc: 'How the war spread across the entire Middle East.' },
  { href: '/analysis/lebanon-burns', title: 'While Lebanon Burns', desc: 'America\'s $22B blank check for Israel\'s Lebanon front.' },
  { href: '/analysis/iran-russia-shadow-war', title: 'Russia\'s Shadow War', desc: 'Moscow is sharing US military positions with Tehran.' },
  { href: '/analysis/hormuz-crisis', title: 'The Hormuz Crisis', desc: '21 million barrels/day halted. The global economic fallout.' },
]

export default function IranWar2026Page() {
  return (
    <div className="bg-stone-900 min-h-screen text-stone-300 -mt-4 -mx-4 px-4 pt-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto py-8">
        <Breadcrumbs items={[{ label: 'Conflicts', href: '/conflicts' }, { label: 'Iran War 2026' }]} />

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-red-700 text-white font-semibold">⚓ BLOCKADE IN EFFECT</span>
          <span className="text-stone-500 text-sm">Last updated: April 19, 2026</span>
        </div>

        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-4">
          Iran War 2026: Operation Epic Fury
        </h1>

        <p className="text-lg text-stone-300 max-w-3xl mb-2">
          On February 28, 2026, the United States launched <strong className="text-red-400">Operation Epic Fury</strong> —
          a massive air campaign against Iran conducted without congressional authorization. Supreme Leader Khamenei
          was killed. Iran closed the Strait of Hormuz. The war continues.
        </p>

        <ShareButtons title="Iran War 2026 — Operation Epic Fury: Live Tracker" />

        {/* Live Dashboard */}
        <IranWarDashboard />

        {/* All Iran Coverage */}
        <div className="bg-stone-800 border border-red-600/30 rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">
            📊 Full Coverage — 7 In-Depth Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {iranArticles.map(a => (
              <Link key={a.href} href={a.href} className="bg-stone-700/50 hover:bg-stone-700 rounded-lg p-3 border border-stone-600 transition">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-white text-sm">{a.title}</h3>
                <p className="text-stone-400 text-xs mt-1">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* What Happened */}
        <div className="bg-stone-800 border border-red-600/30 rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">
            What Happened?
          </h2>
          <p className="text-stone-300 mb-3">
            After months of escalation — including a 37-hour strike on Iran&apos;s nuclear facilities in June 2025,
            massive Iranian protests in December 2025, and a brutal government crackdown that killed thousands —
            the US launched a full-scale air campaign against Iran&apos;s military and political leadership on
            February 28, 2026. The strikes came just one day after diplomatic talks in Geneva showed &ldquo;good
            progress,&rdquo; and hours after Oman&apos;s foreign minister pleaded with VP Vance for more time.
          </p>
          <p className="text-stone-300">
            Iran responded with retaliatory strikes across the entire Middle East, hitting targets in eight countries
            and closing the Strait of Hormuz — through which 20% of global oil flows. The Senate failed to
            invoke the War Powers Act, effectively greenlighting an undeclared war.
          </p>
        </div>

        {/* Timeline */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">
          Timeline of Key Events
        </h2>
        <div className="space-y-4 mb-8">
          {timeline.map((t, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-red-600 mt-1.5 shrink-0" />
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-stone-700" />}
              </div>
              <div className="pb-4">
                <p className="text-red-400 text-sm font-semibold font-[family-name:var(--font-heading)]">{t.date}</p>
                <p className="text-stone-300 text-sm">{t.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hormuz impact */}
        <div className="bg-stone-800 border border-stone-700 rounded-xl p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">
            ⚠️ What&apos;s at Stake: The Strait of Hormuz
          </h2>
          <p className="text-stone-300 text-sm mb-3">
            Iran&apos;s closure of the Strait of Hormuz is potentially the most economically consequential
            event since the 2008 financial crisis. Every day the strait remains closed:
          </p>
          <ul className="space-y-2 text-stone-300 text-sm">
            <li>• <strong className="text-white">21 million barrels/day</strong> of oil cannot transit — 20% of global supply</li>
            <li>• <strong className="text-white">Oil prices</strong> projected to exceed $150+ per barrel</li>
            <li>• <strong className="text-white">LNG shipments</strong> to Asia disrupted — 20% of global supply</li>
            <li>• <strong className="text-white">Insurance premiums</strong> for tankers have tripled; major carriers suspending operations</li>
            <li>• <strong className="text-white">Global GDP impact</strong> estimated at 1–3% if closure extends beyond 30 days</li>
            <li>• <strong className="text-white">Gas prices</strong> heading toward $5–7/gallon in the US</li>
          </ul>
        </div>

        {/* Cost projections */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mt-12 mb-6">
          How Much Will This Cost?
        </h2>
        <div className="space-y-4 mb-8">
          {costProjections.map((c) => (
            <div key={c.scenario} className="bg-stone-800 rounded-lg p-4 border border-stone-700">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-white text-sm">{c.scenario}</h3>
                <span className="text-red-400 font-bold font-[family-name:var(--font-heading)] text-lg shrink-0 ml-4">{c.cost}</span>
              </div>
              <p className="text-stone-500 text-xs">{c.note}</p>
            </div>
          ))}
        </div>

        {/* No authorization callout */}
        <div className="bg-red-900/20 border border-red-600/40 rounded-xl p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-red-400 mb-3">
            No Congressional Authorization
          </h3>
          <p className="text-stone-300 text-sm">
            Operation Epic Fury was launched without a vote in Congress. The War Powers Resolution requires
            the president to notify Congress within 48 hours and withdraw forces within 60 days without
            authorization. When Senators Kaine and Paul introduced a War Powers resolution on March 1, the
            Senate voted it down 53–47. Rand Paul was the only Republican to vote yes.
          </p>
        </div>

        {/* Quick links */}
        <div className="bg-stone-800 rounded-lg p-6 border border-stone-700 mt-12">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Explore More</h3>
          <ul className="space-y-2">
            <li><Link href="/conflicts/iran-2026" className="text-red-400 hover:underline">→ Iran Conflict Data Page</Link></li>
            <li><Link href="/analysis/cost-of-iran" className="text-red-400 hover:underline">→ Projected Full Cost of the Iran War</Link></li>
            <li><Link href="/analysis/aipac-war-machine" className="text-red-400 hover:underline">→ Follow the Money: AIPAC and the Path to War</Link></li>
            <li><Link href="/analysis/congressional-authority" className="text-red-400 hover:underline">→ Who Has the Power to Declare War?</Link></li>
            <li><Link href="/spending" className="text-red-400 hover:underline">→ US Military Spending Over Time</Link></li>
          </ul>
        </div>

        <BackToTop />
      </div>
    </div>
  )
}
