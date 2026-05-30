import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Timeline of American Empire: 1776 to Present',
  description:
    'Every US military action from the Revolution to today. 13 colonies to 750+ overseas bases. The pattern of expansion, year by year.',
  keywords: [
    'US military timeline', 'American empire', 'US military history', 'overseas bases',
    'American expansion', 'US interventions', 'military actions chronology',
  ],
  openGraph: {
    title: 'Timeline of American Empire — 250 Years of Military Expansion',
    description:
      'From 13 colonies to 750+ overseas bases. Every US military action mapped chronologically. The pattern is unmistakable.',
    url: 'https://warcosts.org/analysis/timeline-of-american-empire',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Timeline of American Empire — Every US Military Action, 1776 to Present',
  description:
    'A comprehensive chronological overview of every US military action from independence to the present day.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
  datePublished: '2026-03-16',
  dateModified: '2026-03-16',
  url: 'https://warcosts.org/analysis/timeline-of-american-empire',
  mainEntityOfPage: 'https://warcosts.org/analysis/timeline-of-american-empire',
}

/* ── Era Data ────────────────────────────────────────────────── */
interface TimelineEvent {
  year: string
  name: string
  type: 'war' | 'intervention' | 'occupation' | 'covert' | 'base' | 'expansion'
  description: string
  cost2024?: string
  deaths?: string
  link?: string
}

interface Era {
  name: string
  years: string
  color: string
  summary: string
  keyStats: { label: string; value: string }[]
  events: TimelineEvent[]
}

const eras: Era[] = [
  {
    name: 'The Founding Wars',
    years: '1775–1815',
    color: 'bg-amber-600',
    summary:
      'The new republic fights for survival, establishing independence, expanding westward, and projecting naval power across the Atlantic. In just 40 years, the US goes from revolution to sending warships to North Africa.',
    keyStats: [
      { label: 'Major Conflicts', value: '5' },
      { label: 'Cost (2024$)', value: '$25B+' },
      { label: 'US Deaths', value: '~30,000' },
      { label: 'Territory Gained', value: '828,000 sq mi' },
    ],
    events: [
      { year: '1775–1783', name: 'American Revolutionary War', type: 'war', description: '13 colonies fight for independence from Britain. 25,000 Americans die. France\'s critical alliance tips the balance.', cost2024: '$4B+', deaths: '~25,000', link: '/american-revolutionary-war' },
      { year: '1785–1795', name: 'Northwest Indian Wars', type: 'war', description: 'The new nation fights a coalition of Native American tribes for control of the Ohio Valley. St. Clair\'s Defeat is the worst loss the US Army will ever suffer to Native forces.', deaths: '~1,000', link: '/indian-wars' },
      { year: '1798–1800', name: 'Quasi-War with France', type: 'war', description: 'Undeclared naval war with France. 54 warships deployed. Sets the precedent for presidential war-making without Congressional declaration.', cost2024: '$200M+', deaths: '~82', link: '/quasi-war' },
      { year: '1801–1805', name: 'First Barbary War', type: 'war', description: 'Jefferson sends the Navy to North Africa to fight Tripoli. Marines march "to the shores of Tripoli." First US overseas military victory.', cost2024: '$300M+', deaths: '~35', link: '/barbary-wars' },
      { year: '1803', name: 'Louisiana Purchase', type: 'expansion', description: 'The US doubles in size overnight, buying 828,000 square miles from France for $15 million ($400M today). The purchase includes land belonging to dozens of Indigenous nations who were not consulted.' },
      { year: '1812–1815', name: 'War of 1812', type: 'war', description: 'The US invades Canada, Britain burns Washington DC. The war resolves nothing but produces the national anthem and Andrew Jackson\'s fame.', cost2024: '$2B+', deaths: '~15,000', link: '/war-of-1812' },
      { year: '1815', name: 'Second Barbary War', type: 'war', description: 'Three-month naval campaign ends 30+ years of tribute payments to North African states.', cost2024: '$50M+', deaths: '~4', link: '/barbary-wars' },
    ],
  },
  {
    name: 'Continental Expansion',
    years: '1816–1860',
    color: 'bg-yellow-700',
    summary:
      'Manifest Destiny drives expansion from the Atlantic to the Pacific. The US fights Mexico, forcibly removes Indigenous peoples, and opens Japan at gunpoint. By 1860, the US spans a continent.',
    keyStats: [
      { label: 'Major Conflicts', value: '8+' },
      { label: 'Cost (2024$)', value: '$30B+' },
      { label: 'US Deaths', value: '~20,000' },
      { label: 'Territory Gained', value: '1.2M+ sq mi' },
    ],
    events: [
      { year: '1817–1818', name: 'First Seminole War', type: 'war', description: 'Andrew Jackson invades Spanish Florida without authorization, attacks Seminole and Creek villages, executes two British citizens, and seizes Spanish forts.', deaths: '~30', link: '/indian-wars' },
      { year: '1819', name: 'Adams-Onís Treaty', type: 'expansion', description: 'Spain cedes Florida after Jackson\'s unauthorized invasion makes it clear the US will take it by force if necessary.' },
      { year: '1830s–1850s', name: 'Indian Removal / Trail of Tears', type: 'war', description: 'The US forcibly relocates 60,000+ Native Americans from the Southeast. Thousands die on forced marches. The Seminole Wars (1835-1842) are the most expensive Indian War in US history.', cost2024: '$1.5B+', deaths: '~1,500 soldiers', link: '/indian-wars' },
      { year: '1832', name: 'First Sumatran Expedition', type: 'intervention', description: 'USS Potomac bombards Kuala Batee, Sumatra, without Congressional knowledge. One of the first US military actions in Southeast Asia.' },
      { year: '1838', name: 'Second Sumatran Expedition', type: 'intervention', description: 'Return to Sumatra to bombard the town of Muckie in retaliation for attacks on American traders.' },
      { year: '1846–1848', name: 'Mexican-American War', type: 'war', description: 'Polk provokes Mexico into firing first, then seizes half of Mexico\'s territory. Ulysses Grant later calls it "one of the most unjust ever waged by a stronger against a weaker nation."', cost2024: '$3B+', deaths: '~13,283', link: '/mexican-american-war' },
      { year: '1848', name: 'Treaty of Guadalupe Hidalgo', type: 'expansion', description: 'Mexico cedes 525,000 square miles — present-day California, Nevada, Utah, Arizona, New Mexico, Colorado, Wyoming. Mexico loses 55% of its territory.' },
      { year: '1853–1854', name: 'Perry Opens Japan', type: 'intervention', description: 'Commodore Perry\'s "Black Ships" force Japan to end 200 years of isolation at gunpoint. Sets Japan on the path to Pearl Harbor.' },
      { year: '1854', name: 'Bombardment of Greytown', type: 'intervention', description: 'USS Cyane destroys entire Nicaraguan town. Court ruling affirms presidential war power without Congress.' },
      { year: '1855–1858', name: 'Fiji Expeditions', type: 'intervention', description: 'US Navy bombards Fijian villages in reprisal for attacks on American traders.' },
      { year: '1856–1860', name: 'Bleeding Kansas / Border Wars', type: 'war', description: 'Pro-slavery and anti-slavery forces fight a guerrilla war in Kansas Territory. Prelude to the Civil War.' },
      { year: '1858–1859', name: 'Paraguay Expedition', type: 'intervention', description: '19 warships sent to South America to extract an apology from Paraguay — largest US naval deployment to the hemisphere to that date.' },
    ],
  },
  {
    name: 'Civil War & Reconstruction',
    years: '1861–1877',
    color: 'bg-stone-700',
    summary:
      'The bloodiest war in American history, fought over slavery and union. 750,000 die. The nation is rebuilt, then Reconstruction is abandoned, leaving the unfinished work of racial justice for another century.',
    keyStats: [
      { label: 'Major Conflicts', value: '1 (+ Indian Wars)' },
      { label: 'Cost (2024$)', value: '$100B+' },
      { label: 'US Deaths', value: '~750,000' },
      { label: 'Duration', value: '4 years combat' },
    ],
    events: [
      { year: '1861–1865', name: 'American Civil War', type: 'war', description: 'The deadliest war in American history. 750,000 dead — more than all other US wars combined until Vietnam. The Union prevails, slavery is abolished, but Reconstruction fails.', cost2024: '$100B+', deaths: '~750,000', link: '/civil-war' },
      { year: '1863–1864', name: 'Bombardment of Shimonoseki', type: 'intervention', description: 'Even during the Civil War, the US Navy participates in a multinational bombardment of Japanese forts. First US joint operation with European powers in Asia.' },
      { year: '1864–1868', name: 'Great Sioux War of 1864', type: 'war', description: 'Colorado militia massacres Cheyenne at Sand Creek. Escalates into Red Cloud\'s War, the only war the US arguably lost to Native Americans.', link: '/indian-wars' },
      { year: '1867', name: 'Alaska Purchase', type: 'expansion', description: 'US buys Alaska from Russia for $7.2 million. Mocked as "Seward\'s Folly" until gold is discovered.' },
      { year: '1867', name: 'Formosa Expedition', type: 'intervention', description: '181 Marines land on Taiwan. One of the few US punitive expeditions to fail in its objective.' },
      { year: '1871', name: 'Korean Expedition', type: 'intervention', description: '650 Marines storm Korean forts, kill 243 Korean soldiers. Korea refuses to open to trade anyway. First US military action in Korea.' },
    ],
  },
  {
    name: 'Imperial Expansion',
    years: '1878–1917',
    color: 'bg-red-800',
    summary:
      'The US abandons continental limits and builds an overseas empire. The Spanish-American War yields colonies in the Caribbean and Pacific. The Banana Wars begin. The Philippines become America\'s first major counterinsurgency.',
    keyStats: [
      { label: 'Major Conflicts', value: '10+' },
      { label: 'Cost (2024$)', value: '$30B+' },
      { label: 'US Deaths', value: '~6,000' },
      { label: 'Colonies Acquired', value: '7' },
    ],
    events: [
      { year: '1876', name: 'Great Sioux War / Little Bighorn', type: 'war', description: 'Custer\'s Last Stand — 268 soldiers killed. But the Sioux ultimately lose their lands. Gold in the Black Hills seals their fate.', link: '/indian-wars' },
      { year: '1886', name: 'Geronimo Surrenders', type: 'war', description: '5,000 troops deployed to capture 36 Apache warriors. Geronimo\'s surrender effectively ends the Indian Wars.', link: '/indian-wars' },
      { year: '1887–1889', name: 'Samoan Crisis', type: 'intervention', description: 'US, Britain, and Germany nearly go to war over Samoa. A hurricane destroys most of the competing warships, forcing a diplomatic solution.' },
      { year: '1893', name: 'Hawaiian Overthrow', type: 'covert', description: 'US Marines support American plantation owners in overthrowing Queen Liliuokalani. Hawaii is annexed in 1898.' },
      { year: '1898', name: 'Spanish-American War', type: 'war', description: '"A splendid little war." The US defeats Spain in four months, acquiring Cuba, Puerto Rico, Guam, and the Philippines. American empire goes global.', cost2024: '$10B+', deaths: '~2,446', link: '/spanish-american-war' },
      { year: '1898–1902', name: 'First Occupation of Cuba', type: 'occupation', description: 'US military government rules Cuba. The Platt Amendment gives the US the right to intervene at will. Guantánamo Bay is established.' },
      { year: '1899–1902', name: 'Philippine-American War', type: 'war', description: 'The US fights a brutal counterinsurgency against Filipino independence. 200,000-1,000,000 Filipino civilians die. Concentration camps, torture, village burning.', cost2024: '$10B+', deaths: '~4,200', link: '/philippine-american-war' },
      { year: '1899–1901', name: 'Boxer Rebellion', type: 'war', description: '5,000 US troops join eight-nation coalition to relieve besieged embassies in Beijing. China pays $333M indemnity.', cost2024: '$500M+', deaths: '~53', link: '/boxer-rebellion' },
      { year: '1903', name: 'Panama Canal Zone', type: 'intervention', description: 'US backs Panamanian rebellion against Colombia, then takes permanent control of the Canal Zone. Roosevelt: "I took the canal."' },
      { year: '1906–1909', name: 'Second Occupation of Cuba', type: 'occupation', description: 'Marines return to Cuba for three more years of military government.' },
      { year: '1909–1933', name: 'Banana Wars Begin', type: 'occupation', description: 'Systematic military interventions across Latin America to protect US corporate interests. Nicaragua, Honduras, Haiti, Dominican Republic, Cuba — all occupied.', link: '/banana-wars' },
      { year: '1914', name: 'Occupation of Veracruz', type: 'intervention', description: '800 Marines seize Mexico\'s largest port over a diplomatic incident. Seven months of occupation.' },
      { year: '1915–1934', name: 'Occupation of Haiti', type: 'occupation', description: '19-year occupation. Parliament dissolved at gunpoint. Constitution rewritten. Forced labor imposed. ~15,000 Haitians killed.' },
      { year: '1916–1917', name: 'Punitive Expedition into Mexico', type: 'war', description: '10,000 troops chase Pancho Villa into Mexico for 11 months. First use of aircraft in US combat. Never catch Villa.' },
      { year: '1916–1924', name: 'Occupation of Dominican Republic', type: 'occupation', description: 'Eight-year military occupation creates the National Guard that Trujillo uses to seize power.' },
    ],
  },
  {
    name: 'World Wars',
    years: '1917–1945',
    color: 'bg-red-700',
    summary:
      'The US enters both world wars as an emerging power and exits as a superpower. Combined cost: $5+ trillion (2024$). Combined deaths: 521,000. The world order is redrawn around American military and economic dominance.',
    keyStats: [
      { label: 'Major Conflicts', value: '2 (+ Russia, Latin America)' },
      { label: 'Cost (2024$)', value: '$5T+' },
      { label: 'US Deaths', value: '~521,000' },
      { label: 'Bases Built', value: 'Hundreds worldwide' },
    ],
    events: [
      { year: '1917–1918', name: 'World War I', type: 'war', description: 'Wilson takes the US into the "war to end all wars." 2 million troops deployed. 116,516 die. The Treaty of Versailles plants seeds for WWII.', cost2024: '$400B+', deaths: '~116,516', link: '/world-war-1' },
      { year: '1918–1920', name: 'Russian Civil War Intervention', type: 'intervention', description: '13,000 US troops sent to Russia to fight the Bolsheviks. The "Polar Bear Expedition" fights in Arctic conditions. 424 die. Soviets never forget.', cost2024: '$2B+', deaths: '~424', link: '/russian-civil-war' },
      { year: '1918–1920', name: 'Continued Banana Wars', type: 'occupation', description: 'US occupations of Haiti, Dominican Republic, and Nicaragua continue through the world wars. Marine garrisons remain in place.', link: '/banana-wars' },
      { year: '1927–1933', name: 'Nicaragua — War Against Sandino', type: 'war', description: 'Marines fight a guerrilla war against Augusto Sandino. First use of dive bombing in combat. Sandino is assassinated after US withdrawal.' },
      { year: '1941–1945', name: 'World War II', type: 'war', description: 'The defining war of the 20th century. 16 million Americans serve. 405,399 die. The US emerges as the world\'s dominant superpower. Atomic bombs dropped on Japan.', cost2024: '$4.7T+', deaths: '~405,399', link: '/world-war-2' },
      { year: '1945', name: 'Global Base Network Established', type: 'base', description: 'At war\'s end, the US has bases on every continent. Most are never given up. The permanent global military presence begins.' },
    ],
  },
  {
    name: 'Cold War',
    years: '1946–1991',
    color: 'bg-blue-800',
    summary:
      'The US fights communism everywhere — through proxy wars, covert operations, coups, and direct military intervention. Korea, Vietnam, and dozens of smaller conflicts. The CIA overthrows governments on four continents.',
    keyStats: [
      { label: 'Major Conflicts', value: '15+' },
      { label: 'Cost (2024$)', value: '$15T+' },
      { label: 'US Deaths', value: '~95,000' },
      { label: 'Coups / Regime Changes', value: '20+' },
    ],
    events: [
      { year: '1947', name: 'Truman Doctrine / Marshall Plan', type: 'base', description: 'The US commits to containing communism globally. Permanent military presence in Europe and Asia begins.' },
      { year: '1950–1953', name: 'Korean War', type: 'war', description: 'The "Forgotten War." 36,574 Americans die. The war ends in stalemate, with Korea still divided. 28,500 US troops remain in South Korea today.', cost2024: '$400B+', deaths: '~36,574', link: '/korean-war' },
      { year: '1953', name: 'CIA Coup in Iran', type: 'covert', description: 'The CIA overthrows Iran\'s democratically elected Prime Minister Mossadegh. Installs the Shah. Leads directly to the 1979 revolution and 45+ years of hostility.' },
      { year: '1954', name: 'CIA Coup in Guatemala', type: 'covert', description: 'The CIA overthrows Guatemala\'s democratic government to protect United Fruit Company interests. Triggers 36 years of civil war and 200,000 deaths.' },
      { year: '1958', name: 'Lebanon Crisis', type: 'intervention', description: '14,000 troops land in Lebanon. First large-scale US deployment to the Middle East. Marines land on tourist beaches.' },
      { year: '1961', name: 'Bay of Pigs', type: 'covert', description: 'CIA-trained Cuban exiles invade Cuba. The operation fails catastrophically. Humiliates the Kennedy administration.' },
      { year: '1964–1973', name: 'Vietnam War', type: 'war', description: 'The defining trauma of a generation. 58,220 Americans die. 2-3 million Vietnamese die. The US drops more bombs than all of WWII combined. The war is lost.', cost2024: '$1T+', deaths: '~58,220', link: '/vietnam-war' },
      { year: '1964–1973', name: 'Secret War in Laos', type: 'covert', description: 'The CIA runs a secret war in Laos, making it the most heavily bombed country in history per capita. 270 million cluster munitions dropped. Bombs still kill people today.' },
      { year: '1965–1966', name: 'Dominican Republic Intervention', type: 'intervention', description: '42,000 US troops invade to prevent a return to democracy. Largest Latin American intervention since the Banana Wars.' },
      { year: '1969–1973', name: 'Secret Bombing of Cambodia', type: 'covert', description: 'Nixon secretly bombs Cambodia with 2.7 million tons of ordnance. Destabilizes the country and helps the Khmer Rouge rise to power.' },
      { year: '1973', name: 'CIA Coup in Chile', type: 'covert', description: 'CIA backs military coup against democratically elected Allende. General Pinochet takes power, kills 3,000+ and tortures 40,000.' },
      { year: '1980', name: 'Operation Eagle Claw (Iran)', type: 'intervention', description: 'Hostage rescue attempt fails in the Iranian desert. 8 Americans die. Leads to creation of SOCOM.' },
      { year: '1982–1984', name: 'Beirut Deployment', type: 'intervention', description: 'Marines deployed as "peacekeepers." Truck bomb kills 241 Marines in the 1983 barracks bombing — deadliest day for Marines since Iwo Jima.' },
      { year: '1983', name: 'Invasion of Grenada', type: 'war', description: '7,600 troops invade an island of 91,000. First post-Vietnam military victory. UN condemns it 108-9.' },
      { year: '1986', name: 'Bombing of Libya', type: 'intervention', description: 'Reagan bombs Tripoli and Benghazi. Gaddafi\'s adopted daughter killed. He later funds the Lockerbie bombing in retaliation.' },
      { year: '1987–1988', name: 'Tanker War (Persian Gulf)', type: 'intervention', description: 'US Navy escorts tankers and clashes with Iran. USS Vincennes shoots down Iranian civilian airliner, killing 290. US never formally apologizes.' },
      { year: '1989', name: 'Invasion of Panama', type: 'war', description: '27,684 troops to overthrow Noriega, a former CIA asset. El Chorrillo neighborhood devastated. Largest US military action since Vietnam.' },
      { year: '1991', name: 'Gulf War', type: 'war', description: '700,000 US troops expel Iraq from Kuwait in 100 hours. 148 Americans die. The "Highway of Death" kills thousands of retreating Iraqis.', cost2024: '$100B+', deaths: '148', link: '/gulf-war' },
    ],
  },
  {
    name: 'Sole Superpower',
    years: '1992–2000',
    color: 'bg-purple-800',
    summary:
      'With the Soviet Union gone, the US is the world\'s only superpower. It intervenes in Somalia, Bosnia, Kosovo, Haiti, and Iraq. The "peace dividend" never materializes — military spending stays near Cold War levels.',
    keyStats: [
      { label: 'Major Interventions', value: '6+' },
      { label: 'Cost (2024$)', value: '$100B+' },
      { label: 'US Deaths', value: '~80' },
      { label: 'Countries Bombed', value: '5+' },
    ],
    events: [
      { year: '1992–1995', name: 'Somalia Intervention', type: 'intervention', description: 'Humanitarian mission becomes a manhunt. "Black Hawk Down" kills 18 Americans. Images of dragged soldiers cause withdrawal. Clinton avoids Rwanda as a result.' },
      { year: '1994', name: 'Haiti Intervention', type: 'intervention', description: '20,000 troops restore ousted president Aristide. The third time the US has occupied Haiti.' },
      { year: '1995', name: 'Bosnia — Operation Deliberate Force', type: 'intervention', description: 'NATO bombs Bosnian Serb positions. Leads to Dayton Accords. US peacekeepers remain in Bosnia for a decade.' },
      { year: '1998', name: 'Cruise Missile Strikes (Sudan & Afghanistan)', type: 'intervention', description: 'Clinton bombs a Sudanese pharmaceutical factory and al-Qaeda camps in Afghanistan after embassy bombings. The factory turns out to produce medicine.' },
      { year: '1998–1999', name: 'Operation Desert Fox (Iraq)', type: 'intervention', description: 'Four days of bombing Iraq over weapons inspections. Saddam remains in power.' },
      { year: '1999', name: 'Kosovo War', type: 'war', description: 'NATO bombs Serbia for 78 days. 23,000 bombs dropped. Zero US combat deaths. Chinese embassy accidentally bombed. Establishes "humanitarian intervention" doctrine.' },
    ],
  },
  {
    name: 'War on Terror',
    years: '2001–Present',
    color: 'bg-red-600',
    summary:
      'September 11 launches the longest period of continuous warfare in American history. Afghanistan (20 years), Iraq (ongoing), and operations in at least 85 countries. Cost: $8+ trillion. The "forever wars" era.',
    keyStats: [
      { label: 'Countries with US Operations', value: '85+' },
      { label: 'Cost (2024$)', value: '$8T+' },
      { label: 'US Deaths', value: '~7,074' },
      { label: 'Overseas Bases', value: '750+' },
    ],
    events: [
      { year: '2001', name: 'Invasion of Afghanistan', type: 'war', description: 'America\'s longest war begins. 20 years, $2.3 trillion, 2,461 US deaths. The Taliban return to power in 2021 within weeks of US withdrawal.', cost2024: '$2.3T', deaths: '2,461', link: '/afghanistan-war' },
      { year: '2002', name: 'Philippines — Operation Enduring Freedom', type: 'intervention', description: 'US Special Forces deploy to the Philippines to fight Abu Sayyaf. Operations continue for 14+ years.' },
      { year: '2003', name: 'Invasion of Iraq', type: 'war', description: 'Based on false claims of WMDs, the US invades Iraq. 4,599 Americans die. 200,000-1,000,000 Iraqis die. Cost: $3 trillion. ISIS emerges from the chaos.', cost2024: '$3T+', deaths: '4,599', link: '/iraq-war' },
      { year: '2004–present', name: 'Drone Wars Begin', type: 'covert', description: 'CIA and military begin systematic drone strikes in Pakistan, Yemen, Somalia, and beyond. Thousands killed, including hundreds of civilians.' },
      { year: '2007', name: 'AFRICOM Established', type: 'base', description: 'US Africa Command created. US military operations in Africa expand dramatically — from 1 base to 29+ outposts across the continent.' },
      { year: '2011', name: 'Libya Intervention', type: 'war', description: 'NATO bombs Libya for seven months to overthrow Gaddafi. Libya collapses into civil war and becomes a failed state. Obama later calls it his "worst mistake."', link: '/libya-intervention' },
      { year: '2011', name: 'Osama bin Laden Killed', type: 'covert', description: 'Navy SEALs raid bin Laden\'s compound in Pakistan. The raid violates Pakistani sovereignty without notification.' },
      { year: '2014–present', name: 'War Against ISIS', type: 'war', description: 'US leads coalition against ISIS in Iraq and Syria. 11,000+ airstrikes. US troops return to Iraq. Mosul largely destroyed in the fighting.' },
      { year: '2014–present', name: 'Yemen — Support for Saudi Coalition', type: 'intervention', description: 'US provides weapons, intelligence, and refueling for Saudi bombing campaign. 150,000+ Yemenis killed. "Worst humanitarian crisis in the world."' },
      { year: '2017–present', name: 'Syria — US Occupation of Northeast', type: 'occupation', description: 'US troops occupy roughly one-third of Syria, including its oil fields. No Congressional authorization. No exit strategy.' },
      { year: '2017–present', name: 'Niger / West Africa', type: 'intervention', description: 'Four US soldiers killed in Niger ambush reveals extensive US military operations across West Africa that most Americans didn\'t know existed.' },
      { year: '2021', name: 'Afghanistan Withdrawal', type: 'war', description: 'Chaotic withdrawal ends America\'s longest war. Taliban retake the country in 11 days. 13 US service members killed at Abbey Gate. $85 billion in equipment left behind.' },
      { year: '2022–present', name: 'Ukraine — Proxy War Support', type: 'intervention', description: 'US provides $175B+ in military and economic aid to Ukraine. No US troops on the ground, but the largest proxy war since the Cold War.' },
      { year: '2023–present', name: 'Red Sea / Houthi Operations', type: 'intervention', description: 'US Navy engages in combat with Houthi forces in Yemen, striking targets across the country in the largest US naval combat operations in decades.' },
      { year: '2026', name: 'Present Day', type: 'base', description: 'The US maintains 750+ military bases in 80+ countries. 170,000+ troops stationed overseas. Annual military budget exceeds $900 billion. Operations continue in at least 85 countries.' },
    ],
  },
]

/* ── Base Expansion Data ─────────────────────────────────────── */
const baseExpansion = [
  { year: '1789', bases: 0, description: 'No permanent overseas military presence' },
  { year: '1850', bases: 2, description: 'Naval stations in Pacific' },
  { year: '1898', bases: 5, description: 'Spanish-American War gains — Cuba, Philippines, Guam, Puerto Rico, Hawaii' },
  { year: '1918', bases: 30, description: 'WWI — Temporary bases in France, expanded Pacific presence' },
  { year: '1945', bases: 2000, description: 'WWII peak — bases on every continent, 12 million troops overseas' },
  { year: '1955', bases: 800, description: 'Cold War buildup — NATO bases, Korea, Japan, Pacific rim' },
  { year: '1968', bases: 1000, description: 'Vietnam era peak — massive Southeast Asia footprint' },
  { year: '1989', bases: 850, description: 'Late Cold War — extensive European and Asian network' },
  { year: '2001', bases: 725, description: 'Pre-9/11 — post-Cold War "peace dividend" drawdown' },
  { year: '2006', bases: 800, description: 'War on Terror expansion — new bases in Middle East, Africa, Central Asia' },
  { year: '2026', bases: 750, description: 'Present day — 750+ bases in 80+ countries' },
]

const typeColors: Record<string, string> = {
  war: 'bg-red-100 text-red-700',
  intervention: 'bg-orange-100 text-orange-700',
  occupation: 'bg-amber-100 text-amber-700',
  covert: 'bg-purple-100 text-purple-700',
  base: 'bg-blue-100 text-blue-700',
  expansion: 'bg-green-100 text-green-700',
}

const typeLabels: Record<string, string> = {
  war: 'War',
  intervention: 'Intervention',
  occupation: 'Occupation',
  covert: 'Covert',
  base: 'Base/Presence',
  expansion: 'Expansion',
}

export default function TimelineOfAmericanEmpirePage() {
  const totalEvents = eras.reduce((s, e) => s + e.events.length, 0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Analysis', href: '/analysis' },
            { label: 'Timeline of American Empire' },
          ]}
        />

        {/* Hero */}
        <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
          <p className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-2">
            Deep Analysis
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold leading-tight mb-4">
            Timeline of American Empire
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl">
            From 13 colonies clinging to the Atlantic coast to 750+ military bases spanning the
            globe. Every US military action, mapped chronologically. 250 years. {totalEvents}+
            military actions. The pattern is unmistakable.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Years of Existence', value: '250' },
              { label: 'Years at Peace', value: '~16' },
              { label: 'Overseas Bases', value: '750+' },
              { label: 'Total War Cost (2024$)', value: '$20T+' },
            ].map((s) => (
              <div key={s.label} className="bg-stone-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500">{s.value}</div>
                <div className="text-stone-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <section className="prose prose-stone max-w-none mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">
            The Arc of Empire
          </h2>
          <p>
            The United States has been at war for approximately{' '}
            <strong>93% of its existence</strong>. Of its 250 years as a nation, only about 16
            have passed without American soldiers fighting somewhere in the world.
          </p>
          <p>
            This isn&apos;t an accident or a series of unfortunate events. It&apos;s a pattern —
            one that began before the Constitution was ratified and continues to this day. From
            the Indian Wars to the War on Terror, from gunboat diplomacy to drone strikes, the
            through-line is consistent: the continuous expansion of American military power,
            justified by an evolving set of rationales but driven by the same underlying logic
            of empire.
          </p>
          <p>
            This timeline documents every major US military action from 1775 to the present,
            organized by era. Each entry includes the conflict, its cost, its casualties, and
            its lasting consequences. Read it straight through and the pattern becomes impossible
            to ignore.
          </p>
        </section>

        {/* Legend */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(typeLabels).map(([key, label]) => (
            <span
              key={key}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[key]}`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Base Expansion */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">
            Growth of Overseas Military Bases
          </h2>
          <p className="text-stone-600 mb-6">
            The number of US military bases overseas tells the story of empire more clearly than
            any list of wars. What began as zero permanent overseas bases in 1789 grew to over
            2,000 at the peak of WWII, and remains at 750+ today.
          </p>
          <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-stone-700">Year</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Overseas Bases</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Context</th>
                  </tr>
                </thead>
                <tbody>
                  {baseExpansion.map((row) => (
                    <tr key={row.year} className="border-t border-stone-100 hover:bg-stone-50">
                      <td className="p-3 font-semibold text-stone-900">{row.year}</td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-4 bg-red-500 rounded"
                            style={{ width: `${Math.max(2, (row.bases / 2000) * 200)}px` }}
                          />
                          <span className="font-bold text-red-600">
                            {row.bases.toLocaleString()}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 text-stone-600">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Era Sections */}
        {eras.map((era, eraIdx) => (
          <section key={eraIdx} className="mb-16">
            {/* Era Header */}
            <div className={`${era.color} text-white rounded-xl p-6 md:p-8 mb-6`}>
              <div className="text-white/70 text-sm font-semibold tracking-wider uppercase mb-1">
                Era {eraIdx + 1} of {eras.length}
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-2">
                {era.name}
                <span className="text-white/70 text-lg ml-3 font-normal">{era.years}</span>
              </h2>
              <p className="text-white/80 max-w-3xl">{era.summary}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                {era.keyStats.map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold">{s.value}</div>
                    <div className="text-white/60 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Events */}
            <div className="relative pl-6 border-l-2 border-stone-200 space-y-4">
              {era.events.map((event, i) => (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[calc(1.5rem+5px)] w-3 h-3 bg-red-500 rounded-full border-2 border-white" />

                  <div className="bg-white border border-stone-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="text-stone-500 text-sm font-mono font-bold">
                        {event.year}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${typeColors[event.type]}`}
                      >
                        {typeLabels[event.type]}
                      </span>
                      {event.cost2024 && (
                        <span className="text-red-600 text-xs font-semibold">
                          {event.cost2024}
                        </span>
                      )}
                      {event.deaths && (
                        <span className="text-stone-500 text-xs">
                          {event.deaths} US deaths
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-stone-900 mb-1">
                      {event.link ? (
                        <Link
                          href={event.link}
                          className="hover:text-red-600 transition-colors"
                        >
                          {event.name}
                        </Link>
                      ) : (
                        event.name
                      )}
                    </h3>
                    <p className="text-stone-600 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* The Pattern */}
        <section className="mb-12">
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              The Pattern
            </h2>
            <p className="text-stone-400 mb-6">
              Read the timeline above and certain patterns emerge — not as conspiracy theory,
              but as observable, documented history:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Expansion Never Stops',
                  desc: 'From 13 colonies to a continent to a global network of 750+ bases. Every era expands the footprint. Even "peace dividends" are temporary.',
                },
                {
                  title: 'Congress Becomes Irrelevant',
                  desc: 'Only 5 of 400+ military actions were declared wars. Presidential war-making expanded steadily from the Quasi-War to the drone program.',
                },
                {
                  title: 'Today\'s Intervention Creates Tomorrow\'s Crisis',
                  desc: 'The Iran coup (1953) → Iranian Revolution (1979). Arming the mujahideen (1980s) → al-Qaeda → 9/11. Iraq War (2003) → ISIS. The cycle repeats.',
                },
                {
                  title: 'The "Small" Wars Add Up',
                  desc: 'Individually, most forgotten interventions seem minor. In aggregate, they represent a permanent state of war that costs trillions and shapes global politics.',
                },
                {
                  title: 'Economic Motives Are Consistent',
                  desc: 'From protecting merchant ships in 1798 to securing oil fields in 2003, economic interests drive military action — even when the public justification is ideological.',
                },
                {
                  title: 'The Military Budget Only Goes Up',
                  desc: 'Each crisis ratchets military spending higher. It never fully returns to pre-crisis levels. The Cold War baseline became the post-Cold War floor.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-stone-800/50 rounded-lg p-4">
                  <h3 className="text-red-500 font-semibold mb-1">{item.title}</h3>
                  <p className="text-stone-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* By The Numbers Summary */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">
            250 Years in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: '400+', label: 'Military Actions Abroad' },
              { stat: '5', label: 'Declared Wars' },
              { stat: '70+', label: 'Countries Bombed' },
              { stat: '750+', label: 'Overseas Bases Today' },
              { stat: '~1.3M', label: 'US Military Deaths' },
              { stat: '$20T+', label: 'Total War Costs (2024$)' },
              { stat: '93%', label: 'Years at War' },
              { stat: '170K+', label: 'Troops Overseas Today' },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-white border border-stone-200 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-red-600">{item.stat}</div>
                <div className="text-stone-600 text-xs mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">
            Explore Further
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "America's Forgotten Wars",
                desc: 'Deep dives into the conflicts most Americans have never heard of.',
                href: '/analysis/americas-forgotten-wars',
              },
              {
                title: 'Presidents & War Record',
                desc: 'Every commander-in-chief ranked by wars, spending, and casualties.',
                href: '/analysis/presidents-war-record',
              },
              {
                title: 'Empire of Bases',
                desc: 'The 750+ US military installations spanning 80+ countries.',
                href: '/analysis/empire-of-bases',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white border border-stone-200 rounded-xl p-5 hover:border-red-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-stone-900 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
                <span className="text-red-600 text-sm font-semibold mt-2 inline-block">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">
            Sources
          </h2>
          <div className="bg-stone-50 rounded-xl p-6 text-sm text-stone-600 space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              <li>Congressional Research Service, &ldquo;Instances of Use of United States Armed Forces Abroad, 1798-2024&rdquo;</li>
              <li>David Vine, <em>Base Nation: How US Military Bases Abroad Harm America and the World</em> (2015)</li>
              <li>Neta Crawford, &ldquo;Costs of War&rdquo; project, Brown University Watson Institute</li>
              <li>Department of Defense Base Structure Reports (annual)</li>
              <li>Max Boot, <em>The Savage Wars of Peace</em> (2002)</li>
              <li>Stephen Kinzer, <em>Overthrow</em> (2006)</li>
              <li>Andrew Bacevich, <em>The New American Militarism</em> (2005)</li>
              <li>Chalmers Johnson, <em>Blowback</em> (2000), <em>The Sorrows of Empire</em> (2004)</li>
              <li>William Blum, <em>Killing Hope</em> (2003)</li>
              <li>National Priorities Project, federal budget analysis</li>
            </ul>
          </div>
        </section>

        {/* Share */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200 pt-8">
          <ShareButtons
            title="Timeline of American Empire — Every US Military Action, 1776 to Present"
          />
          <Link
            href="/analysis"
            className="text-stone-500 hover:text-red-600 transition-colors text-sm"
          >
            ← Back to Analysis
          </Link>
        </div>

        
      <RelatedArticles articles={[{"slug":"empire-of-bases","title":"Empire of Bases","desc":"750 installations in 80 countries."},{"slug":"base-nation","title":"Base Nation","desc":"750 military bases overseas."},{"slug":"us-military-bases-worldwide","title":"750 US Military Bases","desc":"The map of American empire."},{"slug":"cost-of-empire","title":"Cost of Empire","desc":"$1.3 trillion per year."}]} />
      <BackToTop />
      </div>
    </>
  )
}
