import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'
import { TruthDelayChart, DeathsByLieChart, MediaComplicityChart, LieTimelineChart } from './LiesCharts'

export const metadata: Metadata = {
  title: 'Lies That Started Wars: Gulf of Tonkin, WMDs, Nayirah & the Pattern of Deception',
  description: 'Gulf of Tonkin was fabricated. WMDs didn\'t exist. Nayirah\'s testimony was staged. USS Maine was an accident. Every war starts with a lie. The pattern from 1898 to 2003.',
  openGraph: {
    title: 'Lies That Started Wars: From USS Maine to WMDs',
    description: 'Gulf of Tonkin, WMDs, Nayirah testimony, USS Maine, Lusitania — a comprehensive catalog of the lies that sent millions to die.',
    url: 'https://www.warcosts.org/analysis/lies-that-started-wars',
    type: 'article',
  },
}

const keyStats = [
  { stat: '3.4M', label: 'Deaths resulting from the Gulf of Tonkin lie — the Vietnam War\'s fabricated pretext', source: 'Various historical estimates' },
  { stat: '500,000+', label: 'Dead in Iraq — a war built on the lie that Saddam had WMDs', source: 'Brown University Costs of War' },
  { stat: '0', label: 'WMDs found in Iraq after the 2003 invasion', source: 'Iraq Survey Group (Duelfer Report)' },
  { stat: '77', label: 'US Senators who voted for the Iraq War based on fabricated intelligence', source: 'Congressional Record' },
  { stat: '15', label: 'Age of "Nayirah," who lied to Congress about incubator babies — actually the ambassador\'s daughter', source: 'CBC/NY Times investigation' },
  { stat: '100+', label: 'Years of the same pattern: lie → war → truth → no accountability', source: 'Historical record' },
  { stat: '22', label: 'Times the New York Times used "WMD" or "weapons of mass destruction" on its front page in 2002-2003', source: 'Media analysis' },
  { stat: '$10.7M', label: 'Paid by Kuwait to Hill & Knowlton PR firm to fabricate the incubator baby story', source: 'Congressional investigation' }
]

const liePattern = [
  { 
    step: '1', 
    title: 'The Incident', 
    desc: 'Something happens (or is fabricated). USS Maine explodes. Torpedo boats "attack." A girl cries about babies. A secretary of state holds up a vial.',
    examples: ['Maine explosion (1898)', 'Gulf of Tonkin "attack" (1964)', 'Nayirah testimony (1990)', 'Powell\'s UN presentation (2003)'],
    keyFactor: 'Timing is critical — incidents occur when public/political support for war is building'
  },
  { 
    step: '2', 
    title: 'Media Amplification', 
    desc: 'The press repeats the claim uncritically. Headlines scream. Dissenting voices are marginalized or ignored. Patriotism becomes the only acceptable position.',
    examples: ['Hearst: "DESTRUCTION OF THE WAR SHIP MAINE WAS THE WORK OF AN ENEMY"', 'NYT: 27 pro-Iraq War editorials, 0 opposing', 'MSNBC fires Phil Donahue for anti-war stance'],
    keyFactor: 'Media acts as stenographers, not journalists. Access journalism prevents critical questioning.'
  },
  { 
    step: '3', 
    title: 'Public Outrage', 
    desc: '"Remember the Maine!" "Support Our Troops!" "You\'re either with us or against us." Manufactured consent turns citizens into war supporters.',
    examples: ['Spanish-American War rallies', 'Vietnam War protests marginalized initially', 'Iraq War: 70% public support at invasion'],
    keyFactor: 'Emotional manipulation overrides rational analysis. Fear and patriotism silence dissent.'
  },
  { 
    step: '4', 
    title: 'Congressional Rubber Stamp', 
    desc: 'Congress authorizes force with near-unanimous votes. Gulf of Tonkin: 504-2. Iraq War: 373-156. Voting against war is political suicide.',
    examples: ['Spanish-American War: Congress declares war', 'Gulf of Tonkin Resolution: 504-2 House, 88-2 Senate', 'Iraq AUMF: 373-156 House, 77-23 Senate'],
    keyFactor: 'Political cowardice. Legislators afraid of being labeled unpatriotic or weak.'
  },
  { 
    step: '5', 
    title: 'The War', 
    desc: 'Troops deploy. Contractors profit. Civilians die. The original justification fades into irrelevance as "supporting the troops" becomes the only argument needed.',
    examples: ['Philippines occupation lasts decades', 'Vietnam escalates for 8+ years', 'Iraq occupation becomes permanent'],
    keyFactor: 'Mission creep. Wars develop their own momentum independent of original objectives.'
  },
  { 
    step: '6', 
    title: 'The Truth Emerges', 
    desc: 'Years or decades later: declassified documents, investigations, whistleblowers. The lie is exposed. The public shrugs. The war is already over (or still going).',
    examples: ['Rickover Report (1976): Maine was accident', 'Pentagon Papers (1971): Gulf of Tonkin fabricated', 'Iraq Survey Group (2004): No WMDs'],
    keyFactor: 'Truth emerges after political consequences are impossible. Wars are fait accompli.'
  },
  { 
    step: '7', 
    title: 'Zero Accountability', 
    desc: 'Nobody is prosecuted. Nobody is impeached. The architects write memoirs and give lectures. The next lie begins.',
    examples: ['McKinley re-elected after Spanish-American War', 'LBJ doesn\'t seek re-election but isn\'t prosecuted', 'Bush administration officials write bestselling memoirs'],
    keyFactor: 'System protects itself. Admitting lies were lies would delegitimize the entire war-making apparatus.'
  }
]

const lies = [
  {
    title: 'USS Maine: "Remember the Maine!" (1898)',
    war: 'Spanish-American War',
    deathToll: '~500,000 (including Philippine-American War)',
    cost: '$250M (1898) / ~$8B (2024)',
    lie: 'The battleship USS Maine exploded in Havana Harbor on February 15, 1898, killing 266 American sailors. The US blamed Spain — William Randolph Hearst\'s newspapers ran the headline "DESTRUCTION OF THE WAR SHIP MAINE WAS THE WORK OF AN ENEMY" before any investigation. The Navy\'s official board of inquiry concluded it was an external mine, despite no evidence of Spanish involvement.',
    truth: 'Multiple investigations — including a 1976 study by Admiral Hyman Rickover — concluded the explosion was almost certainly an internal accident, likely a coal bunker fire that ignited the ammunition magazine. The 1898 Navy investigation was fundamentally flawed: they didn\'t examine the ship\'s coal bunkers, ignored the pattern of hull damage, and were under political pressure to find Spanish culpability. Modern naval engineering analysis shows the damage pattern is consistent with internal explosion, not external mining.',
    consequence: 'The Spanish-American War. The US seized Cuba, Puerto Rico, the Philippines, and Guam. In the Philippines alone, the subsequent occupation killed 200,000–1,000,000 Filipino civilians in what is now called the Philippine-American War. The war cost $250 million (equivalent to $8 billion today) and established the US as a global imperial power.',
    delay: '78 years to definitive debunking',
    keyFigures: ['William Randolph Hearst (media mogul)', 'Joseph Pulitzer (media mogul)', 'Theodore Roosevelt (Asst. Secretary of Navy)', 'President William McKinley'],
    documents: 'Rickover Report (1976), Spanish archives, contemporaneous naval engineering studies',
    mediaRole: 'Hearst and Pulitzer used the Maine incident to sell newspapers. "Yellow journalism" at its peak. Hearst allegedly said: "You furnish the pictures, I\'ll furnish the war."',
    modernParallels: 'WMD intelligence was similarly flawed, with investigators under political pressure to find evidence supporting predetermined conclusions.',
    followUp: 'The US occupied the Philippines for 48 years (1898-1946). The insurgency killed more Americans than the Spanish-American War itself. Cuba became a US protectorate until the Cuban Revolution.',
    whoKnew: 'Spanish officials immediately denied responsibility and offered to submit to international arbitration. This offer was ignored. Some US naval officers expressed private doubts about the mine theory but were overruled.',
    whoProfited: 'Sugar companies, steel companies, shipping interests, and naval contractors. The "Splendid Little War" opened new markets and required a larger navy.'
  },
  {
    title: 'The Lusitania: "Innocent Civilian Ship" (1915)',
    war: 'World War I (justification for US entry)',
    deathToll: '116,516 Americans + 8.5M total WWI',
    cost: '$32B (WWI total for US)',
    lie: 'The British ocean liner RMS Lusitania was torpedoed by a German U-boat on May 7, 1915, killing 1,198 passengers including 128 Americans. The sinking was used to build public support for US entry into World War I. The Lusitania was presented as an innocent passenger ship — a victim of barbaric German aggression.',
    truth: 'The Lusitania was carrying 4.2 million rounds of rifle ammunition and 1,248 cases of shrapnel shells — making it a legitimate military target under the laws of war. The British Admiralty knew U-boats were operating in the area and failed to provide an escort. In 2008, divers confirmed munitions in the wreck. Germany had taken out newspaper ads warning Americans not to sail on the ship.',
    consequence: 'Helped shift US public opinion toward intervention in WWI. The US entered the war in 1917. 116,516 Americans died. The Treaty of Versailles — shaped by the war\'s outcome — created the conditions for WWII.',
    delay: '93 years to diver confirmation of munitions',
    keyFigures: ['President Woodrow Wilson', 'Winston Churchill (First Lord of the Admiralty)', 'Captain William Turner (Lusitania)', 'Walther Schwieger (U-20 commander)'],
    documents: 'Admiralty archives, German U-boat logs, dive reports (2008), passenger manifests',
    mediaRole: 'British and American press portrayed the sinking as unprovoked murder. German warnings and ammunition cargo were downplayed or ignored.',
    modernParallels: 'Similar to claims that Iran attacked "innocent" tankers in the Strait of Hormuz, when many were carrying military supplies.',
    followUp: 'The Lusitania case was used to justify unrestricted submarine warfare restrictions, but the ship was legitimately carrying military supplies.',
    whoKnew: 'The British Admiralty knew the ship was carrying munitions. German intelligence also knew. The passengers did not.',
    whoProfited: 'Arms manufacturers, shipping companies, and eventually the entire US military-industrial complex that grew from WWI.'
  },
  {
    title: 'Gulf of Tonkin: The Incident That Never Happened (1964)',
    war: 'Vietnam War',
    deathToll: '58,220 Americans + 2-3.4M Vietnamese',
    cost: '$120B (1975) / ~$800B (2024)',
    lie: 'On August 4, 1964, the USS Maddox reported being attacked by North Vietnamese torpedo boats in the Gulf of Tonkin — the second alleged attack in three days. President Lyndon Johnson used the incident to push the Gulf of Tonkin Resolution through Congress, giving him authority to escalate the Vietnam War without a formal declaration of war.',
    truth: 'The August 4 attack never happened. NSA documents declassified in 2005 proved that signals intelligence was manipulated to support the administration\'s narrative. Secretary of Defense Robert McNamara later admitted doubts. The NSA\'s own internal history called it a fabrication. The first attack (August 2) was provoked by covert US operations against North Vietnam — operations Congress wasn\'t told about.',
    consequence: 'The Gulf of Tonkin Resolution passed 416-0 in the House and 88-2 in the Senate. It authorized the Vietnam War without a declaration of war. 58,220 Americans died. An estimated 2-3.4 million Vietnamese died. 2.7 million tons of bombs were dropped — more than in all of WWII.',
    delay: '7 years (Pentagon Papers, 1971) to 41 years (NSA declassification, 2005)',
    keyFigures: ['President Lyndon Johnson', 'Secretary of Defense Robert McNamara', 'NSA Director John Morrison', 'Captain John Herrick (USS Maddox)'],
    documents: 'Pentagon Papers (1971), NSA historical studies (2005), SIGINT reports, Navy incident reports',
    mediaRole: 'Major newspapers reported the "attacks" without questioning the evidence. Only a few journalists like I.F. Stone expressed skepticism.',
    modernParallels: 'Similar intelligence manipulation occurred with Iraq WMDs — raw intelligence was selectively presented to support predetermined conclusions.',
    followUp: 'The Pentagon Papers, published by the New York Times in 1971, revealed the systematic lying about Vietnam. Daniel Ellsberg was prosecuted under the Espionage Act.',
    whoKnew: 'LBJ and McNamara knew the August 4 attack was questionable within days. The NSA analysts who wrote the intelligence reports had doubts but were overruled.',
    whoProfited: 'Defense contractors made billions. Dow Chemical (napalm), Monsanto (Agent Orange), aircraft manufacturers, and weapons producers.'
  },
  {
    title: 'Nayirah Testimony: Babies Pulled from Incubators (1990)',
    war: 'Gulf War (1991)',
    deathToll: '148 Americans + 100,000-200,000 Iraqis',
    cost: '$61B (1991) / ~$120B (2024)',
    lie: 'On October 10, 1990, a tearful 15-year-old girl identified only as "Nayirah" testified before the Congressional Human Rights Caucus that she had witnessed Iraqi soldiers removing babies from incubators in a Kuwaiti hospital and leaving them to die on the cold floor. The testimony was cited by six US senators as justification for the Gulf War — a war authorized by just five votes in the Senate.',
    truth: 'Nayirah was Nayirah al-Ṣabaḥ — the daughter of the Kuwaiti ambassador to the United States. Her testimony was organized by the PR firm Hill & Knowlton, which was paid $10.7 million by the Kuwaiti government to build support for military intervention. Investigations by Amnesty International, Human Rights Watch, and journalists found no evidence that the incubator story was true. The entire thing was fabricated war propaganda.',
    consequence: 'The Gulf War. "Operation Desert Storm" killed an estimated 100,000-200,000 Iraqi soldiers and civilians in 42 days. The subsequent sanctions regime killed an estimated 500,000 Iraqi children over the next decade — a number Secretary of State Madeleine Albright said was "worth it."',
    delay: '2 years (CBC investigation, 1992)',
    keyFigures: ['Nayirah al-Ṣabaḥ', 'Saud Nasir al-Sabah (Kuwaiti ambassador/father)', 'Craig Fuller (Hill & Knowlton VP)', 'Lauri Fitz-Pegado (Hill & Knowlton)'],
    documents: 'Hill & Knowlton contracts, Congressional Human Rights Caucus transcripts, CBC investigation files, Amnesty International reports',
    mediaRole: 'The testimony was broadcast live on CNN and replayed endlessly. Few journalists investigated Nayirah\'s identity or the story\'s veracity until after the war.',
    modernParallels: 'Social media has made propaganda easier to spread but also easier to debunk. The "White Helmets" in Syria served a similar propaganda function.',
    followUp: 'Hill & Knowlton went on to represent other controversial clients including the Church of Scientology and tobacco companies. The firm faced no consequences.',
    whoKnew: 'Hill & Knowlton, the Kuwaiti government, and likely some members of Congress. The American public was completely deceived.',
    whoProfited: 'Hill & Knowlton ($10.7M fee), defense contractors (Gulf War weapons sales), oil companies (Kuwait liberation, Iraq weakening)'
  },
  {
    title: 'WMDs in Iraq: The Lie That Killed 500,000 (2002-2003)',
    war: 'Iraq War',
    deathToll: '4,431 Americans + 500,000+ Iraqis',
    cost: '$2.4T total cost',
    lie: 'The Bush administration claimed that Saddam Hussein possessed weapons of mass destruction — chemical, biological, and potentially nuclear weapons — that posed an imminent threat to the United States. Secretary of State Colin Powell presented "evidence" to the UN Security Council on February 5, 2003, including satellite photos, intercepted communications, and testimony from "Curveball" — an Iraqi defector. VP Cheney said: "There is no doubt that Saddam Hussein now has weapons of mass destruction." Bush claimed Iraq could attack the US within 45 minutes. Condoleezza Rice warned that "we don\'t want the smoking gun to be a mushroom cloud."',
    truth: 'There were no WMDs. The Iraq Survey Group — 1,400 inspectors spending $1 billion over 18 months — found nothing. "Curveball" (Rafid Ahmed Alwan al-Janabi) later admitted he fabricated the entire biological weapons story to get asylum in Germany. The aluminum tubes were for conventional rockets, not uranium enrichment centrifuges — this was known by experts at the time. The satellite photos showed routine maintenance of facilities, not weapons production. The "mobile biological weapons labs" were hydrogen generators for weather balloons, exactly as Iraq claimed. The Niger yellowcake uranium documents were crude forgeries that the CIA and State Department knew were fake. Every single piece of evidence presented to the UN was wrong, and intelligence analysts had expressed doubts about much of it before Powell\'s presentation.',
    consequence: 'The Iraq War. $2.4+ trillion in costs (Brown University estimate). 4,431 Americans dead, 32,000+ wounded. 500,000+ Iraqis dead (conservative estimate). 5 million refugees and internally displaced persons. ISIS emerged from the chaos of the occupation and de-Baathification policies. Iran was empowered as Iraq\'s Sunni counterbalance was destroyed. Sectarian civil war lasted for years. Colin Powell called it a "blot" on his record but faced no consequences. The war created the conditions for the next two decades of Middle East instability, including the Syrian civil war, the rise of ISIS, and the current Iran crisis.',
    delay: '1 year (Iraq Survey Group preliminary report, 2004)',
    keyFigures: ['George W. Bush', 'Colin Powell', 'Dick Cheney', 'Donald Rumsfeld', 'Condoleezza Rice', 'Doug Feith', 'Paul Wolfowitz', '"Curveball" (Rafid al-Janabi)'],
    documents: 'Iraq Survey Group Report (Duelfer Report), Senate Intelligence Committee Report, Powell\'s UN presentation, Niger documents, Downing Street Memos',
    mediaRole: 'Judith Miller (NY Times) published numerous false WMD stories. Washington Post ran 27 pro-war editorials, 0 opposing. MSNBC fired Phil Donahue for anti-war stance.',
    modernParallels: 'Iran nuclear program claims follow similar pattern — selective intelligence, worst-case assumptions, dismissal of inspectors\' findings.',
    followUp: 'No one was prosecuted for the WMD lies. Bush officials wrote bestselling memoirs. Judith Miller works at Fox News. The weapons inspectors who were right were ignored.',
    whoKnew: 'Intelligence analysts at CIA, DIA, State, and Energy Department expressed doubts about specific claims. UN weapons inspectors found no evidence. Bush administration officials ignored dissenting views.',
    whoProfited: 'Defense contractors ($138B in Iraq contracts), oil companies (Iraq oil access), private military contractors (Blackwater, Halliburton), reconstruction companies.'
  },
  {
    title: 'The Domino Theory: If One Falls, They All Fall (1950s–1975)',
    war: 'Cold War interventions (Korea, Vietnam, Latin America, Africa)',
    deathToll: 'Millions across multiple conflicts',
    cost: 'Trillions over decades',
    lie: 'The "domino theory" — that if one country in a region fell to communism, its neighbors would follow like dominoes — was the intellectual foundation for US intervention in Korea, Vietnam, Laos, Cambodia, Indonesia, and countless covert operations across the developing world. Eisenhower articulated it in 1954. It remained the core justification for the Vietnam War throughout.',
    truth: 'The theory was wrong. Vietnam fell to communism in 1975. The dominoes did not fall. Thailand, Malaysia, Singapore, Indonesia, and the Philippines did not become communist. In fact, communist countries fought each other — China invaded Vietnam in 1979, and Vietnam invaded Cambodia. The theory treated communism as a monolithic force when it was actually fractured by nationalism, ethnic conflict, and competing interests.',
    consequence: 'The domino theory justified: the Korean War (36,574 American dead), the Vietnam War (58,220 American dead), the Secret War in Laos (making it the most bombed country per capita in history), the Cambodian bombing campaign (that helped create the Khmer Rouge), covert operations in Indonesia (500,000-1,000,000 killed in anti-communist purges the CIA supported), and interventions across Latin America, Africa, and Asia.',
    delay: '~30 years (fall of Saigon proved it wrong)',
    keyFigures: ['President Dwight Eisenhower', 'Secretary of State John Foster Dulles', 'Defense Secretary Robert McNamara', 'CIA Director Allen Dulles'],
    documents: 'NSC-68, Pentagon Papers, Church Committee reports, CIA historical studies',
    mediaRole: 'Mainstream media accepted domino theory uncritically. Maps showing communist "expansion" were standard in news coverage, implying coordination that didn\'t exist.',
    modernParallels: 'War on Terror uses similar logic — "fight them there so we don\'t have to fight them here." Iran is portrayed as controlling a "Shia crescent."',
    followUp: 'After Vietnam fell, no Southeast Asian dominoes fell to communism. Communist countries in the region fought each other more than they cooperated.',
    whoKnew: 'Intelligence analysts understood communist movements were nationalist, not monolithic. Academic experts on Asia and Latin America disputed the theory.',
    whoProfited: 'Military-industrial complex, CIA, foreign policy establishment. Cold War created permanent war economy and national security state.'
  },
  {
    title: 'Iranian Nuclear "Breakout" Capability (2010-Present)',
    war: 'Ongoing Iran crisis (2026)',
    deathToll: 'TBD',
    cost: 'TBD ($5-15T projected)',
    lie: 'Iran is portrayed as being "weeks away" from nuclear weapons capability since at least 2010. Israeli and American officials have claimed Iran is on the verge of "breakout" — enriching enough uranium for a nuclear weapon — justifying military action to prevent an Iranian bomb.',
    truth: 'Iran has maintained uranium enrichment below weapons-grade levels (90% U-235) and has submitted to extensive international inspections. The IAEA has verified Iranian compliance with nuclear agreements when they existed. Iran\'s enrichment to 60% U-235 (still below weapons grade) began only after Trump withdrew from the JCPOA and reimposed sanctions. Intelligence assessments consistently show Iran has NOT made the decision to build nuclear weapons.',
    consequence: 'Extensive sanctions regime that has killed thousands of Iranians through medical shortages. Sabotage operations including assassination of Iranian scientists. Multiple threatened military strikes. Current war began February 28, 2026.',
    delay: 'Ongoing — truth will emerge after war begins or ends',
    keyFigures: ['Benjamin Netanyahu', 'John Bolton', 'Mike Pompeo', 'Donald Trump', 'Various IAEA officials'],
    documents: 'IAEA reports, US intelligence assessments, JCPOA agreement text, Israeli intelligence "presentations"',
    mediaRole: 'Media repeats "weeks away" claims uncritically. IAEA inspectors\' findings receive less coverage than politicians\' claims.',
    modernParallels: 'Similar to Iraq WMD claims — worst-case assumptions presented as facts, inspectors\' findings ignored, timeline always "urgent."',
    followUp: 'Pattern repeats every few years: "Iran close to bomb" → sanctions/threats → Iran compliance verified → repeat.',
    whoKnew: 'IAEA inspectors, intelligence analysts understand Iran has not decided to build weapons. Politicians and media amplify threat.',
    whoProfited: 'Defense contractors, Israeli military aid, sanctions enforcement industry, think tanks promoting confrontation.'
  }
]

const mediaFailures = [
  {
    war: 'Spanish-American War (1898)',
    mediaRole: 'Yellow journalism',
    keyFigures: ['William Randolph Hearst', 'Joseph Pulitzer'],
    failures: [
      'Reported Maine explosion as Spanish attack before investigation',
      'Used emotional, sensationalist language to drive war fever',
      'Ignored Spanish offers of arbitration and peace negotiations',
      'Created false narrative of Spanish atrocities in Cuba'
    ],
    quote: '"You furnish the pictures, I\'ll furnish the war." — Hearst (possibly apocryphal)',
    consequences: 'Established media as war propaganda tool. "If it bleeds, it leads" mentality.',
    neverLearned: 'Same pattern repeated in every subsequent war'
  },
  {
    war: 'World War I (1917)',
    mediaRole: 'Propaganda amplifier',
    keyFigures: ['Committee on Public Information (Creel Committee)'],
    failures: [
      'Portrayed Lusitania as innocent passenger ship',
      'Amplified atrocity stories later proven false',
      'Suppressed anti-war voices through Espionage Act',
      'Created "Hun" stereotype through propaganda posters'
    ],
    quote: '"The conscious and intelligent manipulation of the organized habits and opinions of the masses." — Edward Bernays',
    consequences: 'Government-media propaganda partnership institutionalized.',
    neverLearned: 'Bernays\' techniques became standard for all future wars'
  },
  {
    war: 'Vietnam War (1964-1975)',
    mediaRole: 'Stenographer to power',
    keyFigures: ['TV news anchors', 'Pentagon correspondents'],
    failures: [
      'Reported Gulf of Tonkin "attacks" without verification',
      'Accepted military casualty figures and progress reports uncritically',
      'Marginalized anti-war voices until very late in conflict',
      'Failed to investigate covert operations in Laos, Cambodia'
    ],
    quote: '"I was a conduit for the government\'s message." — Military correspondent, later admission',
    consequences: 'TV war coverage became standard. "Credibility gap" emerged.',
    neverLearned: 'Media promised to be more skeptical but repeated same errors in Iraq'
  },
  {
    war: 'Gulf War (1991)',
    mediaRole: 'Propaganda partner',
    keyFigures: ['CNN', 'Peter Arnett', 'Hill & Knowlton PR'],
    failures: [
      'Broadcast Nayirah testimony without investigating her identity',
      'Accepted military censorship in exchange for access',
      'Used Pentagon-supplied footage without verification',
      'Portrayed "surgical strikes" without showing civilian casualties'
    ],
    quote: '"This will not be another Vietnam." — Military officials to reporters',
    consequences: 'Embedded journalism model created. PR firms became war tools.',
    neverLearned: 'Lessons about investigating sources ignored'
  },
  {
    war: 'Iraq War (2003)',
    mediaRole: 'Active war promoter',
    keyFigures: ['Judith Miller (NY Times)', 'Washington Post editorial board', 'TV news anchors'],
    failures: [
      'Judith Miller published false WMD stories based on Chalabi sources',
      'Washington Post ran 27 pro-war editorials, zero opposing',
      'MSNBC fired Phil Donahue for anti-war stance',
      'Networks gave platforms to war advocates, marginalized skeptics'
    ],
    quote: '"We were all wrong." — David Kay, Iraq Survey Group leader',
    consequences: 'Media credibility destroyed. Alternative media grew. Trust collapsed.',
    neverLearned: 'Same journalists who promoted Iraq War still have platforms'
  },
  {
    war: 'Iran Crisis (2026)',
    mediaRole: 'Repeating history',
    keyFigures: ['Cable news hosts', 'Foreign policy correspondents', 'Think tank experts'],
    failures: [
      'Repeating "weeks away from nuclear bomb" claims without verification',
      'Accepting intelligence claims uncritically after Iraq WMD disaster',
      'Platforming war advocates while marginalizing diplomacy supporters',
      'Using government-supplied footage and casualty figures without verification'
    ],
    quote: '"All options are on the table." — Repeated uncritically by media',
    consequences: 'TBD — but pattern suggests total media failure again',
    neverLearned: 'Media has learned nothing from Iraq, Afghanistan, Libya failures'
  }
]

const whoSaidNo = [
  {
    name: 'Senator Wayne Morse (Oregon)',
    war: 'Vietnam War',
    stance: 'One of only two senators to vote against the Gulf of Tonkin Resolution',
    quote: '"I believe that history will record that we have made a great mistake in subverting and circumventing the Constitution."',
    consequence: 'Lost reelection in 1968 after being targeted for his anti-war stance',
    vindicated: 'Pentagon Papers (1971) proved him right about Gulf of Tonkin fabrication',
    currentStatus: 'Died 1974. Oregon named a scholarship after him in 2019.'
  },
  {
    name: 'Senator Ernest Gruening (Alaska)',
    war: 'Vietnam War',
    stance: 'The other senator to vote against Gulf of Tonkin Resolution',
    quote: '"All Vietnam is not worth the life of a single American boy."',
    consequence: 'Lost reelection in 1968 primary. Called a communist sympathizer.',
    vindicated: 'Vietnam War ended in strategic defeat, exactly as he predicted',
    currentStatus: 'Died 1974. Alaska has no major memorials to him.'
  },
  {
    name: 'Daniel Ellsberg',
    war: 'Vietnam War',
    stance: 'Leaked the Pentagon Papers exposing systematic lying about Vietnam',
    quote: '"The public had been lied to for years about the progress of the war."',
    consequence: 'Charged under Espionage Act. Case dismissed due to government misconduct.',
    vindicated: 'Pentagon Papers revealed extent of government deception',
    currentStatus: 'Died 2023. Considered a hero by many, traitor by others.'
  },
  {
    name: 'Hans Blix',
    war: 'Iraq War',
    stance: 'UN weapons inspector who found no evidence of WMDs in Iraq',
    quote: '"Iraq appears not to have come to a genuine acceptance of disarmament."',
    consequence: 'Dismissed as naive. US invaded 6 weeks into his inspection.',
    vindicated: 'Iraq Survey Group found no WMDs, exactly as Blix suspected',
    currentStatus: 'Lives in Sweden. Wrote memoirs about Iraq deception.'
  },
  {
    name: 'Scott Ritter',
    war: 'Iraq War',
    stance: 'Former UN weapons inspector who publicly stated Iraq had no WMDs',
    quote: '"Iraq is not a threat to the United States or its neighbors."',
    consequence: 'Smeared with personal attacks. Media ignored his expertise.',
    vindicated: 'No WMDs found in Iraq',
    currentStatus: 'Continued writing/speaking. Later legal troubles used to discredit him.'
  },
  {
    name: 'Valerie Plame',
    war: 'Iraq War',
    stance: 'CIA operative whose cover was blown in retaliation for husband\'s Niger uranium debunking',
    quote: '"My name and identity were carelessly and recklessly abused by senior government officials."',
    consequence: 'Career destroyed. Husband Joe Wilson also targeted.',
    vindicated: 'Niger yellowcake documents were crude forgeries',
    currentStatus: 'Wrote memoirs, ran for Congress unsuccessfully (2019).'
  },
  {
    name: 'Barbara Lee (California)',
    war: 'War on Terror',
    stance: 'Only member of Congress to vote against the 2001 AUMF',
    quote: '"Let us step back for a moment and think through the implications of our actions."',
    consequence: 'Received death threats. Called a traitor on House floor.',
    vindicated: 'AUMF has been used to justify military action in 22+ countries over 23 years',
    currentStatus: 'Still serves in Congress. The "Barbara Lee Principle" advocates for diplomacy first.'
  },
  {
    name: 'Senator Russ Feingold (Wisconsin)',
    war: 'War on Terror',
    stance: 'Only senator to vote against the USA PATRIOT Act',
    quote: '"Preserving our freedom is one of the main reasons we are now engaged in this new war."',
    consequence: 'Called unpatriotic. Lost reelection in 2010.',
    vindicated: 'Edward Snowden revelations showed massive surveillance overreach',
    currentStatus: 'Teaches at Stanford. Still advocates for civil liberties.'
  },
  {
    name: 'General Eric Shinseki',
    war: 'Iraq War',
    stance: 'Testified that Iraq occupation would require "several hundred thousand troops"',
    quote: '"Something on the order of several hundred thousand soldiers."',
    consequence: 'Forced to retire early by Rumsfeld. Called wildly off the mark.',
    vindicated: 'Iraq required 180,000+ troops and still failed',
    currentStatus: 'Later served as VA Secretary under Obama (2009-2014).'
  }
]

const propagandaEvolution = [
  {
    era: '1898-1920',
    methods: ['Yellow journalism', 'Sensationalist headlines', 'Illustrated propaganda posters', 'Telegraph/newspaper coordination'],
    effectiveness: 'High - limited information sources',
    examples: ['Maine explosion coverage', 'WWI atrocity stories', 'Anti-German propaganda'],
    weaknesses: 'Slow information spread, limited reach'
  },
  {
    era: '1920-1960',
    methods: ['Radio broadcasts', 'Newsreels in theaters', 'Government propaganda films', 'Expert testimonies'],
    effectiveness: 'Very high - mass media centralized',
    examples: ['War of the Worlds broadcast', 'WWII propaganda films', 'Cold War documentaries'],
    weaknesses: 'Some alternative sources, eventual fact-checking'
  },
  {
    era: '1960-1990',
    methods: ['Television coverage', 'Embedded reporting', 'Expert talking heads', 'Congressional testimonies'],
    effectiveness: 'High but declining - TV dominance but credibility gaps',
    examples: ['Gulf of Tonkin coverage', 'Nayirah testimony', 'CNN Gulf War coverage'],
    weaknesses: 'Vietnam Syndrome, investigative journalism growth'
  },
  {
    era: '1990-2010',
    methods: ['24-hour news cycle', 'Think tank experts', 'Intelligence leaks', 'Access journalism'],
    effectiveness: 'Very high - media consolidation, post-9/11 patriotism',
    examples: ['Iraq WMD coverage', 'Afghanistan "progress" stories', 'Terror alert levels'],
    weaknesses: 'Internet alternative sources emerging, blogosphere'
  },
  {
    era: '2010-Present',
    methods: ['Social media manipulation', 'Influencer networks', 'Leaked documents', 'Real-time propaganda'],
    effectiveness: 'Mixed - more tools but more skepticism',
    examples: ['Libya intervention coverage', 'Syria chemical weapons', 'Iran nuclear threat'],
    weaknesses: 'Information fragmentation, deep skepticism, fact-checkers'
  }
]

const economicCosts = [
  { lie: 'USS Maine explosion', directCost: '$250M (1898)', adjustedCost: '$8B (2024)', additionalCosts: 'Philippine occupation: $400M over 48 years', totalImpact: '$12B+ (2024 dollars)' },
  { lie: 'Lusitania attack', directCost: '$32B US WWI cost', adjustedCost: '$450B (2024)', additionalCosts: 'Post-war reconstruction aid, veteran care', totalImpact: '$600B+ (2024 dollars)' },
  { lie: 'Gulf of Tonkin attack', directCost: '$120B (1975)', adjustedCost: '$800B (2024)', additionalCosts: 'Veteran care: $300B+, Agent Orange: $50B+', totalImpact: '$1.2T+ (2024 dollars)' },
  { lie: 'Incubator babies testimony', directCost: '$61B Gulf War', adjustedCost: '$120B (2024)', additionalCosts: 'Sanctions enforcement, no-fly zones', totalImpact: '$200B+ (2024 dollars)' },
  { lie: 'Iraq WMDs', directCost: '$1.1T (combat)', adjustedCost: '$1.5T (2024)', additionalCosts: 'Veteran care: $1T+, regional instability costs', totalImpact: '$3T+ (2024 dollars)' },
  { lie: 'Iranian nuclear breakout', directCost: '$200B+ (sanctions)', adjustedCost: '$200B+ (current)', additionalCosts: 'War costs: $5-15T projected', totalImpact: '$5-15T+ (projected)' }
]

const faqItems = [
  {
    question: 'Why do politicians keep lying about wars if they always get exposed?',
    answer: 'Because the lies work in the short term, and by the time the truth emerges, the wars are fait accompli. Politicians need wars to start, so they lie to get public and Congressional support. Once troops are deployed, "supporting the troops" becomes the only politically acceptable position. The truth comes out years later when it\'s too late to stop anything. And crucially, no one faces consequences for lying about war.'
  },
  {
    question: 'How can the media keep falling for the same lies?',
    answer: 'They\'re not falling for anything — they\'re complicit. Media companies profit from war coverage (ratings boost) and maintain access to government sources by being stenographers rather than journalists. Challenging war narratives means losing access and being labeled unpatriotic. It\'s easier and more profitable to repeat government talking points than to do actual investigative journalism.'
  },
  {
    question: 'What would happen if the public stopped believing war lies?',
    answer: 'Wars would become much harder to start. Public skepticism is democracy\'s immune system against war propaganda. That\'s why so much effort goes into manufacturing consent. The Vietnam Syndrome (public skepticism of military intervention) lasted for decades and prevented many wars. The establishment worked very hard to overcome it, and largely succeeded after 9/11.'
  },
  {
    question: 'Are there any wars that were started honestly?',
    answer: 'World War II comes closest — Pearl Harbor was a real attack, Nazi Germany did pose an existential threat, and the Holocaust was real. But even then, FDR may have provoked Japan and certainly withheld information from Congress and the public. The pattern holds: even "good" wars involve deception to build public support.'
  },
  {
    question: 'Why doesn\'t Congress investigate war lies more thoroughly?',
    answer: 'Because most members of Congress voted for the wars based on the lies. Thorough investigation would expose their own gullibility or complicity. The Church Committee in the 1970s did investigate CIA abuses, but it was an exception. Most war investigations are designed to provide political cover, not uncover truth.'
  },
  {
    question: 'How do you tell the difference between a real threat and war propaganda?',
    answer: 'Ask: Who benefits from military action? What do independent sources (not government or defense contractors) say? Are inspectors or negotiators being given time to work? Is the timeline suspiciously urgent? Are dissenting voices being marginalized or ignored? Is the threat presented in emotional rather than analytical terms? If yes to most, it\'s probably propaganda.'
  },
  {
    question: 'What about humanitarian interventions - aren\'t some wars necessary to stop atrocities?',
    answer: 'The "humanitarian intervention" label is often propaganda too. Libya was sold as protecting civilians - it became a slave market. Iraq was sold as liberating Iraqis from Saddam - it killed 500,000+ Iraqis. Real humanitarian interventions would prioritize diplomatic solutions, refugee aid, and post-conflict planning. Most "humanitarian" wars are geopolitical power plays wrapped in moral language.'
  },
  {
    question: 'Could something like the Iraq WMD lie happen again?',
    answer: 'It\'s happening right now with Iran. The same pattern: urgent timeline ("weeks away" from nuclear weapons), dismissal of inspectors\' findings, worst-case assumptions presented as facts, emotional appeals ("mushroom cloud"), marginalization of diplomatic alternatives. The only difference is some people recognize the pattern this time.'
  }
]

export default function LiesThatStartedWarsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Lies That Started Wars' }]} />
      <ArticleSchema 
        title="Lies That Started Wars: Gulf of Tonkin, WMDs, Nayirah & the Pattern of Deception" 
        description="Gulf of Tonkin was fabricated. WMDs didn't exist. Nayirah's testimony was staged. USS Maine was an accident. Every war starts with a lie."
        url="/analysis/lies-that-started-wars" 
      />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Deep Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Lies That Started Wars
        </h1>
        <p className="text-xl text-stone-300 mb-4">Gulf of Tonkin. WMDs. Incubator Babies. The Same Pattern for 125+ Years.</p>
        <p className="text-stone-400 text-lg">
          The USS Maine exploded — Spain was blamed — America got an empire. The Gulf of Tonkin was 
          &ldquo;attacked&rdquo; — it wasn&apos;t — 3.4 million died in Vietnam. A 15-year-old cried 
          about incubator babies — she was the ambassador&apos;s daughter — the Gulf War began. 
          Colin Powell held up a vial at the UN — the WMDs didn&apos;t exist — 500,000 Iraqis died. 
          The pattern is 125+ years old and it has never failed: <strong>fabricate a pretext, 
          amplify through media, rush to war, discover the truth decades later, hold nobody 
          accountable, repeat</strong>. The Iran crisis follows the exact same script.
        </p>
      </div>

      <ShareButtons title="Lies That Started Wars: Gulf of Tonkin, WMDs & the Pattern of Deception" />

      {/* Key Numbers */}
      <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400">AI Overview — Key Data</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {keyStats.map((item) => (
            <div key={item.label} className="flex gap-3">
              <span className="text-2xl font-bold text-white whitespace-nowrap font-[family-name:var(--font-heading)]">{item.stat}</span>
              <div>
                <p className="text-stone-300 text-sm">{item.label}</p>
                <p className="text-stone-500 text-xs">{item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LieTimelineChart />

      {/* The Pattern */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Seven-Step Pattern: It Never Changes
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Every war lie follows the same playbook. It worked in 1898 and it worked in 2003. 
          It&apos;s working again in 2026. The only defense is pattern recognition.
        </p>
        <div className="space-y-6">
          {liePattern.map((item) => (
            <details key={item.step} className="border border-stone-300 rounded-lg">
              <summary className="p-4 cursor-pointer bg-stone-100 hover:bg-stone-200 rounded-lg">
                <div className="flex gap-4">
                  <span className="text-red-800 font-bold text-2xl font-[family-name:var(--font-heading)]">{item.step}</span>
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg">{item.title}</h3>
                    <p className="text-stone-700 text-sm">{item.desc}</p>
                  </div>
                </div>
              </summary>
              <div className="p-4 bg-stone-50 space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Historical Examples:</h4>
                  <ul className="text-stone-700 text-sm space-y-1">
                    {item.examples.map((example, i) => (
                      <li key={i}>• {example}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded p-3">
                  <h4 className="font-semibold text-red-900 mb-1">Key Factor:</h4>
                  <p className="text-red-800 text-sm">{item.keyFactor}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <DeathsByLieChart />

      {/* Economic Cost of Lies */}
      <div className="bg-stone-900 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Price of Lies: Economic Cost by War</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left text-white pb-2">War Lie</th>
                <th className="text-right text-white pb-2">Direct Cost</th>
                <th className="text-right text-white pb-2">2024 Adjusted</th>
                <th className="text-right text-white pb-2">Total Impact</th>
                <th className="text-left text-stone-400 pb-2">Additional Costs</th>
              </tr>
            </thead>
            <tbody className="text-stone-300">
              {economicCosts.map((cost, i) => (
                <tr key={i} className="border-b border-stone-800">
                  <td className="py-2 font-semibold">{cost.lie}</td>
                  <td className="text-right py-2">{cost.directCost}</td>
                  <td className="text-right py-2 text-yellow-400">{cost.adjustedCost}</td>
                  <td className="text-right py-2 text-red-400 font-bold">{cost.totalImpact}</td>
                  <td className="py-2 text-xs">{cost.additionalCosts}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-stone-600 font-bold">
                <td className="py-3 text-white">Total Cost of War Lies</td>
                <td className="text-right py-3"></td>
                <td className="text-right py-3"></td>
                <td className="text-right py-3 text-red-400 text-lg">$25T+</td>
                <td className="py-3 text-xs">Conservative estimate, 2024 dollars</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-stone-400 text-xs mt-4">
          This excludes opportunity costs — the schools, hospitals, infrastructure, and scientific research not built because money was spent on wars based on lies.
        </p>
      </div>

      {/* Each Major Lie - Detailed Analysis */}
      {lies.map((lie) => (
        <section key={lie.title} className="my-12">
          <div className="not-prose bg-stone-900 text-white rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">{lie.title}</h2>
                <p className="text-stone-300 text-sm"><strong>War:</strong> {lie.war}</p>
              </div>
              <div className="text-right">
                <p className="text-red-400 font-bold">{lie.cost}</p>
                <p className="text-stone-400 text-sm">{lie.deathToll} deaths</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm"><strong>Truth delayed:</strong> {lie.delay}</p>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-3 text-lg">The Lie</h3>
              <p className="text-stone-800 leading-relaxed">{lie.lie}</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-900 mb-3 text-lg">The Truth</h3>
              <p className="text-stone-800 leading-relaxed">{lie.truth}</p>
            </div>

            <div className="bg-stone-900 rounded-lg p-6">
              <h3 className="font-bold text-white mb-3 text-lg">The Consequence</h3>
              <p className="text-stone-300 leading-relaxed">{lie.consequence}</p>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-100 rounded-lg p-4">
                <h4 className="font-semibold text-stone-900 mb-2">Key Figures</h4>
                <ul className="text-stone-700 text-sm space-y-1">
                  {lie.keyFigures.map((figure, i) => (
                    <li key={i}>• {figure}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-100 rounded-lg p-4">
                <h4 className="font-semibold text-stone-900 mb-2">Key Documents</h4>
                <p className="text-stone-700 text-sm">{lie.documents}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Media&apos;s Role</h4>
                <p className="text-blue-800 text-sm">{lie.mediaRole}</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-2">Who Knew the Truth</h4>
                <p className="text-yellow-800 text-sm">{lie.whoKnew}</p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Who Profited</h4>
                <p className="text-purple-800 text-sm">{lie.whoProfited}</p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-2">Modern Parallels</h4>
                <p className="text-orange-800 text-sm">{lie.modernParallels}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <TruthDelayChart />

      {/* Media Evolution */}
      <div className="bg-stone-900 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Evolution of War Propaganda</h2>
        <p className="text-stone-300 text-sm mb-6">
          Propaganda techniques have evolved with technology, but the core manipulation remains the same.
        </p>
        <div className="space-y-4">
          {propagandaEvolution.map((era, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-white font-semibold text-lg">{era.era}</h3>
                <span className={`px-2 py-1 text-xs rounded ${
                  era.effectiveness.includes('Very high') ? 'bg-red-600 text-white' :
                  era.effectiveness.includes('High') ? 'bg-orange-600 text-white' :
                  'bg-yellow-600 text-black'
                }`}>
                  {era.effectiveness}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <div>
                  <h4 className="text-stone-400 text-sm font-semibold mb-1">Methods</h4>
                  <ul className="text-stone-300 text-sm">
                    {era.methods.map((method, j) => (
                      <li key={j}>• {method}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-stone-400 text-sm font-semibold mb-1">Examples</h4>
                  <ul className="text-stone-300 text-sm">
                    {era.examples.map((example, j) => (
                      <li key={j}>• {example}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-stone-800 rounded p-3">
                <h4 className="text-stone-400 text-sm font-semibold mb-1">Weaknesses</h4>
                <p className="text-stone-300 text-sm">{era.weaknesses}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MediaComplicityChart />

      {/* Media Failures by War */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Media Failures: Stenographers, Not Journalists</h2>
        <p className="text-stone-300 text-sm mb-6">
          Every war lie requires media amplification to work. And every time, the American press has 
          obliged — repeating government claims uncritically, marginalizing dissent, and wrapping 
          propaganda in the language of objective journalism.
        </p>
        
        <div className="space-y-6">
          {mediaFailures.map((failure, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-white font-semibold">{failure.war}</h3>
                  <p className="text-stone-400 text-sm">Role: {failure.mediaRole}</p>
                </div>
                <div className="text-right">
                  <p className="text-stone-500 text-xs">Key Figures:</p>
                  <p className="text-stone-300 text-sm">{failure.keyFigures.join(', ')}</p>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded p-3 mb-3">
                <h4 className="text-red-400 font-semibold text-sm mb-2">Media Failures:</h4>
                <ul className="text-stone-300 text-sm space-y-1">
                  {failure.failures.map((fail, j) => (
                    <li key={j}>• {fail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-stone-900 rounded p-3 mb-3">
                <p className="text-stone-300 text-sm italic">&ldquo;{failure.quote}&rdquo;</p>
              </div>
              
              <div className="flex justify-between text-xs">
                <p className="text-stone-500"><strong>Consequences:</strong> {failure.consequences}</p>
                <p className="text-red-400"><strong>Lessons learned:</strong> {failure.neverLearned}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* People Who Said No */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The People Who Said No — And Were Punished
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          In every war, some people see through the lies and speak truth. They are marginalized, 
          attacked, and destroyed. Years later, history vindicates them. But by then, the wars 
          are over and the liars have moved on to the next conflict.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {whoSaidNo.map((person, i) => (
            <div key={i} className="bg-stone-100 rounded-lg p-4 border-l-4 border-red-600">
              <h3 className="font-bold text-stone-900 mb-1">{person.name}</h3>
              <p className="text-stone-600 text-sm mb-2"><strong>War:</strong> {person.war}</p>
              <p className="text-stone-700 text-sm mb-3">{person.stance}</p>
              
              <blockquote className="bg-stone-200 rounded p-3 mb-3">
                <p className="text-stone-800 text-sm italic">&ldquo;{person.quote}&rdquo;</p>
              </blockquote>
              
              <div className="space-y-2 text-xs">
                <p className="text-red-700"><strong>Consequence:</strong> {person.consequence}</p>
                <p className="text-green-700"><strong>Vindicated:</strong> {person.vindicated}</p>
                <p className="text-stone-600"><strong>Current status:</strong> {person.currentStatus}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Pattern: Iran */}
      <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">2026: The Pattern Repeats with Iran</h2>
        <p className="text-stone-300 mb-4">
          The Iran crisis follows the exact same script as Iraq, Vietnam, and the Gulf War. 
          Every element of the seven-step pattern is visible in real time:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-stone-900 rounded p-4">
              <h3 className="text-red-400 font-semibold text-sm mb-2">✓ Step 1: The Incident</h3>
              <p className="text-stone-300 text-sm">Iran "weeks away" from nuclear bomb. Missile attacks on tankers. IRGC designated terrorist organization.</p>
            </div>
            
            <div className="bg-stone-900 rounded p-4">
              <h3 className="text-red-400 font-semibold text-sm mb-2">✓ Step 2: Media Amplification</h3>
              <p className="text-stone-300 text-sm">Cable news repeats "imminent threat" claims. Intelligence leaks to friendly reporters. Critics marginalized.</p>
            </div>
            
            <div className="bg-stone-900 rounded p-4">
              <h3 className="text-red-400 font-semibold text-sm mb-2">✓ Step 3: Public Outrage</h3>
              <p className="text-stone-300 text-sm">"Iran threatens America." "Support our troops." Anti-war voices called Iranian sympathizers.</p>
            </div>
            
            <div className="bg-stone-900 rounded p-4">
              <h3 className="text-red-400 font-semibold text-sm mb-2">✓ Step 4: Congressional Rubber Stamp</h3>
              <p className="text-stone-300 text-sm">AUMF expansion passed. Military funding approved. Voting against Iran action = political suicide.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-stone-900 rounded p-4">
              <h3 className="text-orange-400 font-semibold text-sm mb-2">→ Step 5: The War</h3>
              <p className="text-stone-300 text-sm">Operation Epic Fury launched Feb 28, 2026. Contractors profit. Mission creep inevitable.</p>
            </div>
            
            <div className="bg-stone-800 rounded p-4">
              <h3 className="text-stone-400 font-semibold text-sm mb-2">? Step 6: Truth Emerges</h3>
              <p className="text-stone-300 text-sm">In 5-15 years: Iran had no weapons program. Intelligence was manipulated. Inspectors were right.</p>
            </div>
            
            <div className="bg-stone-800 rounded p-4">
              <h3 className="text-stone-400 font-semibold text-sm mb-2">? Step 7: Zero Accountability</h3>
              <p className="text-stone-300 text-sm">In 10-20 years: War architects write memoirs. No prosecutions. Next lie begins.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-red-900/20 rounded-lg">
          <h3 className="text-red-400 font-semibold mb-2">The Only Difference This Time</h3>
          <p className="text-stone-300 text-sm">
            Some people recognize the pattern. The Iraq WMD disaster created lasting skepticism. 
            Alternative media provides counter-narratives. But the same basic script is playing out 
            because it works — until enough people refuse to believe it.
          </p>
        </div>
      </div>

      {/* Libertarian Analysis */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Libertarian Reality: War Is the Health of the State
        </h2>
        <div className="prose prose-stone max-w-none">
          <p>
            Randolph Bourne wrote in 1918: "War is the health of the state." He was right. Every war expands 
            government power, increases spending, reduces civil liberties, and enriches connected interests. 
            The lies that start wars aren&apos;t bugs in the system — they&apos;re features.
          </p>
          
          <p>
            Consider who benefits from war lies:
          </p>
          
          <ul>
            <li><strong>Politicians</strong> get to sound tough, distract from domestic failures, and rally voters around the flag</li>
            <li><strong>Defense contractors</strong> get guaranteed profits from taxpayer-funded weapons sales</li>
            <li><strong>Media companies</strong> get higher ratings from war coverage and maintain government access</li>
            <li><strong>Intelligence agencies</strong> get bigger budgets and expanded surveillance authorities</li>
            <li><strong>Military leaders</strong> get promotions, medals, and post-retirement consulting contracts</li>
          </ul>
          
          <p>
            Now consider who pays:
          </p>
          
          <ul>
            <li><strong>Taxpayers</strong> fund wars they never voted for with money borrowed in their names</li>
            <li><strong>Soldiers</strong> die and are maimed fighting for objectives that change or disappear</li>
            <li><strong>Foreign civilians</strong> are killed by weapons they had no role in designing or deploying</li>
            <li><strong>Future generations</strong> inherit debt and instability from wars they never supported</li>
          </ul>
          
          <p>
            The pattern persists because the benefits are concentrated among elites while the costs are 
            distributed across society. Defense contractor profits are immediate and visible on quarterly 
            reports. Dead soldiers and debt payments are diffuse and often delayed.
          </p>
          
          <p>
            This is why the Founding Fathers gave Congress — not the president — the power to declare war. 
            They understood that executives have incentives to start wars (glory, distraction from domestic 
            problems, expanded power) while bearing few of the costs. Congressional war declarations force 
            public debate and democratic accountability.
          </p>
          
          <p>
            But Congress hasn&apos;t declared war since 1942. Instead, we have "police actions," 
            "humanitarian interventions," and "kinetic military actions." These euphemisms allow wars 
            to start without democratic debate or constitutional authority. The AUMF from 2001 — passed 
            to fight al-Qaeda after 9/11 — has been used to justify military action in 22+ countries, 
            most of which had nothing to do with 9/11.
          </p>
          
          <p>
            The Iran war represents the ultimate failure of constitutional government: an undeclared war, 
            funded by borrowed money, based on disputed intelligence, against a country that hasn&apos;t 
            attacked America, conducted by an executive branch that has been systematically lying about 
            war for 125 years.
          </p>
          
          <blockquote className="border-l-4 border-red-600">
            <p>&ldquo;The executive has no right, in any case, to decide the question, whether there is or 
            is not cause for declaring war.&rdquo;</p>
            <footer>— James Madison, father of the Constitution</footer>
          </blockquote>
          
          <p>
            The solution isn&apos;t better intelligence or more honest politicians. The solution is 
            structural: require congressional declarations of war, funded by current taxes (not debt), 
            with clear objectives and exit strategies. Make war costly for the people who start them, 
            not just the people who fight them.
          </p>
          
          <p>
            Until then, the pattern will continue: lie, invade, occupy, fail, repeat. The names change, 
            the countries change, but the script remains the same. The only question is whether enough 
            Americans will recognize it before the next war begins.
          </p>
        </div>
      </section>

      {/* Bottom Line */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-400">The Bottom Line</h2>
        <div className="prose prose-stone max-w-none text-stone-300">
          <p className="text-lg mb-4">
            The United States has started or escalated wars based on fabricated pretexts at least six 
            times in the last 125 years. The combined death toll exceeds 8 million people. The economic 
            cost exceeds $25 trillion (2024 dollars). In every case, the truth eventually emerged. In no 
            case was anyone held accountable. The people who told the lies were promoted. The people who 
            told the truth were punished.
          </p>
          <p className="text-lg mb-4">
            This is not ancient history. Colin Powell held up his vial of "anthrax" at the UN in 2003. 
            The New York Times amplified the WMD lie on its front page. Senators who knew better voted 
            for war because opposing it was politically dangerous. And 500,000 people died for weapons 
            that didn&apos;t exist.
          </p>
          <p className="text-lg">
            The Iran crisis follows the exact same script: urgent timeline, dismissal of inspectors, 
            worst-case assumptions presented as facts, emotional appeals, marginalization of diplomatic 
            alternatives. The next lie is already being prepared. The only question is whether you&apos;ll 
            recognize it this time.
          </p>
        </div>
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
              <p className="text-stone-300 text-sm mt-2 pl-4 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources & Documentation</h2>
        <div className="bg-stone-100 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-stone-900 mb-3">Primary Sources</h3>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li>• National Security Archive (nsarchive.gwu.edu)</li>
                <li>• Pentagon Papers (1971), Daniel Ellsberg</li>
                <li>• NSA Declassified Gulf of Tonkin Documents (2005)</li>
                <li>• Iraq Survey Group, "Comprehensive Report on WMD" (Duelfer Report, 2004)</li>
                <li>• Senate Intelligence Committee, "Report on Pre-War Intelligence on Iraq" (2004, 2008)</li>
                <li>• CBC Fifth Estate, "To Sell a War" (Nayirah investigation, 1992)</li>
                <li>• Rickover, H.G. "How the Battleship Maine Was Destroyed" (1976)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 mb-3">Books & Analysis</h3>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li>• Herman, Edward & Chomsky, Noam. <em>Manufacturing Consent</em> (1988)</li>
                <li>• Ellsberg, Daniel. <em>Secrets: A Memoir of Vietnam and the Pentagon Papers</em> (2002)</li>
                <li>• Rich, Frank. <em>The Greatest Story Ever Sold</em> (2006)</li>
                <li>• Bamford, James. <em>A Pretext for War</em> (2004)</li>
                <li>• Miller, David. <em>Tell Me Lies: Propaganda and Media Distortion in the Attack on Iraq</em> (2004)</li>
                <li>• FAIR (Fairness & Accuracy in Reporting), Iraq War media studies</li>
                <li>• New York Times, "The Times and Iraq" (Editor&apos;s Note, May 26, 2004)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles articles={[
        {slug: "cost-of-iran", title: "What Will Iran Cost?", desc: "Projecting the price of Operation Epic Fury."},
        {slug: "nuclear-close-calls", title: "Nuclear Close Calls", desc: "How close we've come to the end of the world."},
        {slug: "military-families", title: "The Families Left Behind", desc: "The hidden cost of war."}
      ]} />

      <BackToTop />
    </div>
  )
}