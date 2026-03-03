import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Analysis — Data-Driven Perspectives on US Wars',
  description: 'In-depth analysis of American military policy: the War on Terror, congressional authority, blowback, the military-industrial complex, and more.',
  openGraph: {
    title: '60+ Analysis Articles — WarCosts',
    description: 'In-depth analysis of US military spending, interventions, and their consequences. From the War on Terror to the military-industrial complex.',
    url: 'https://www.warcosts.org',
    siteName: 'WarCosts',
    type: 'website',
  },
  alternates: { canonical: 'https://www.warcosts.org/analysis' },
}

const sections = [
  {
    theme: 'Modern Warfare',
    articles: [
      { slug: 'cyber-warfare', title: 'Cyber Warfare: The Invisible Battlefield', desc: 'Stuxnet, SolarWinds, NotPetya. $11B Cyber Command budget. No Geneva Convention, no rules, no accountability.' },
      { slug: 'sanctions-warfare', title: 'Sanctions Warfare: The Weapon That Kills More Than Bombs', desc: 'Iraq sanctions killed 500,000 children. Cuba\'s 60-year embargo. $7B frozen from starving Afghanistan.' },
      { slug: 'shadow-wars', title: 'Shadow Wars: America\'s Secret Wars in 134+ Countries', desc: 'JSOC in 134+ countries. 70,000 special operators. Kill lists. Classified budgets. No congressional vote.' },
      { slug: 'ai-weapons', title: 'AI Weapons: Autonomous Killing Machines', desc: 'Lavender AI marked 37,000 Palestinians for assassination. Kargu-2 may have killed without human input.' },
      { slug: 'surveillance-state', title: 'The Surveillance State', desc: 'NSA collects ALL phone metadata. 278K warrantless FBI searches. $80B+ intelligence budget. The 4th Amendment is dead.' },
    ],
  },
  {
    theme: 'Recent Conflicts',
    articles: [
      { slug: 'iran-day-by-day', title: 'Iran 2026: A Day-by-Day Account', desc: 'A factual chronological war diary. Verified casualties, running cost estimate, countries drawn in — updated daily.' },
      { slug: 'iran-2026', title: 'Iran 2026: Another Undeclared War?', desc: 'The US launches strikes on Iran with no congressional vote. History repeats.' },
      { slug: 'cost-of-iran', title: 'What Will Iran Cost?', desc: 'Projecting the price of Operation Epic Fury — from $20B air campaign to $5T+ occupation.' },
      { slug: 'hormuz-crisis', title: 'The Strait of Hormuz Crisis', desc: 'How one 21-mile waterway could crash the global economy. Iran closed it. Now what?' },
      { slug: 'aipac-war-machine', title: 'Follow the Money: AIPAC and the Path to War', desc: '$221M in political spending. The lobby that killed the Iran deal and shaped the path to war.' },
      { slug: 'war-profiteering', title: 'War Is a Racket: Who Gets Rich', desc: 'Defense stocks up 1,200%+ since 9/11. CEO pay vs soldier pay. The revolving door.' },
      { slug: 'what-could-we-buy', title: 'What $11.6 Trillion Could Have Bought', desc: 'Universal healthcare, free college, clean water for Earth — all cheaper than America\'s wars.' },
      { slug: 'forever-wars', title: 'The Forever Wars: How 60 Words Changed Everything', desc: 'The 2001 AUMF — 60 words that enabled 25 years of global war across 78 countries.' },
      { slug: 'ukraine-proxy', title: '$66.9 Billion: America\'s Proxy War in Ukraine', desc: 'The largest military aid since WWII Lend-Lease. European security on the American tab.' },
      { slug: 'war-on-terror', title: 'The War on Terror: $8 Trillion Later', desc: '929,000 dead. Four countries destabilized. Two decades of endless war. Was any of it worth it?' },
      { slug: 'drone-wars', title: 'Drone Wars', desc: 'Obama 563 strikes vs Bush 57. 10,000-17,000 killed. Signature strikes. Remote-control killing.' },
      { slug: 'drones-kill-list', title: 'The Kill List: How America Decides Who Dies by Drone', desc: '14,000+ drone strikes. Signature strikes, double-tap bombings, Terror Tuesdays. 910-2,200 civilians killed.' },
      { slug: 'israel-lobby', title: 'The Israel Lobby: How One Country Captured US Foreign Policy', desc: '$310B+ in aid. $221M in lobbying. Wars fought on their behalf. The most consequential foreign influence operation in American history.' },
      { slug: 'sanctions-dont-work', title: 'Sanctions Don\'t Work', desc: 'Economic sanctions punish populations, rarely change regimes, and often backfire.' },
      { slug: 'undeclared-wars', title: 'Undeclared Wars', desc: 'How presidents wage war without a vote. The erosion of congressional war powers.' },
      { slug: '911-to-forever-war', title: 'From 9/11 to Forever War', desc: 'How 60 words in the 2001 AUMF enabled 25 years of global war across dozens of countries.' },
      { slug: 'military-families', title: 'Military Families', desc: 'The hidden cost of war: broken families, PTSD, poverty, and the communities left behind.' },
      { slug: 'china-pivot', title: 'The China Pivot', desc: 'From the War on Terror to Great Power Competition. The next forever war?' },
    ],
  },
  {
    theme: 'Military-Industrial Complex',
    articles: [
      { slug: 'military-industrial-complex', title: 'The Military-Industrial Complex', desc: 'Eisenhower warned us in 1961. We didn\'t listen. Defense contractors now receive $400B+ per year.' },
      { slug: 'silicon-valley-pentagon', title: 'Silicon Valley & the Pentagon', desc: 'How Big Tech is transforming the military-industrial complex. AI weapons, surveillance, autonomous killing.' },
      { slug: 'jobs-vs-war', title: 'Jobs vs. War', desc: 'Military spending creates 5 jobs per $1M — fewer than education (13), healthcare (9), or clean energy (8).' },
      { slug: 'empire-of-bases', title: 'Empire of Bases', desc: '750 military bases in 80 countries. $55 billion per year. More bases than any empire in human history.' },
      { slug: 'base-nation', title: 'Base Nation: Why 750 Overseas Bases?', desc: 'Diego Garcia, Okinawa, AFRICOM. The human cost of America\'s global military footprint.' },
    ],
  },
  {
    theme: 'Constitutional Issues',
    articles: [
      { slug: 'congressional-authority', title: '19 Wars Without Congress', desc: 'The Constitution gives Congress the power to declare war. Presidents have ignored that 19 times out of 28.' },
      { slug: 'presidents-at-war', title: 'Presidents at War', desc: 'Which presidents waged the most wars and spent the most? The expansion of executive war powers.' },
      { slug: 'the-469', title: '469 Military Interventions', desc: '469 instances of US armed forces deployed abroad since 1798. 251 since 1991 alone.' },
    ],
  },
  {
    theme: 'Modern Warfare',
    articles: [
      { slug: 'information-warfare', title: 'Information Warfare', desc: 'Pentagon PR budget: $4.7B. Russian troll farms reached 126M Americans. Deepfakes, psyops, and the death of independent war reporting.' },
      { slug: 'space-warfare', title: 'Space Warfare', desc: 'Space Force: $26B budget. ASAT tests creating thousands of debris pieces. Starlink as a weapon. Weaponizing the final frontier.' },
      { slug: 'private-armies', title: 'Private Armies', desc: 'Blackwater, Wagner Group, DynCorp. 50,000+ contractors in Iraq. 8,000 deaths excluded from official counts. Mercenaries serve whoever pays.' },
      { slug: 'hybrid-warfare', title: 'Hybrid Warfare', desc: 'Russia\'s "little green men." China\'s artificial islands. Iran\'s proxy network. When war and peace blur beyond recognition.' },
      { slug: 'economic-warfare', title: 'Economic Warfare', desc: '$300B frozen Russian assets. SWIFT weaponization. Chip bans. The weaponized dollar — and the de-dollarization backlash.' },
    ],
  },
  {
    theme: 'Deep Dives',
    articles: [
      { slug: 'americas-wars-by-the-numbers', title: "America's Wars By The Numbers", desc: 'Every US war ranked by cost, deaths, and duration. The definitive statistical reference with interactive charts.' },
      { slug: 'cost-of-doing-nothing', title: "What If We'd Done Nothing?", desc: 'Vietnam, Iraq, Afghanistan, Libya — what if the US hadn\'t intervened? The data says inaction was almost always cheaper.' },
      { slug: 'war-economy', title: 'The War Economy', desc: 'How war built — and trapped — the American economy. WW2 ended the Depression. Cold War R&D gave us the internet. $886B/year is the economy now.' },
      { slug: 'media-and-war', title: 'Manufacturing Consent: How Media Sells Every War', desc: 'Gulf of Tonkin was a lie. WMDs didn\'t exist. Incubator babies were staged. Every war starts with a media campaign. The pattern from 1898 to 2026.' },
      { slug: 'refugee-crisis', title: 'We Break It, They Flee, We Say No', desc: '38 million displaced by the War on Terror. America creates refugees, then refuses them. Lebanon hosts 27% refugees; the US: 0.1%.' },
      { slug: 'nuclear-close-calls', title: 'Minutes from Midnight: Nuclear Close Calls', desc: 'At least 22 times, the world came within minutes of nuclear war. Stanislav Petrov. Vasili Arkhipov. Able Archer 83. We survived by luck.' },
      { slug: 'cost-of-secrecy', title: 'The Black Budget: $23 Trillion Unaccounted', desc: '6 failed audits. $23T in missing transactions. $90B+ black budget. CIA black sites. Classification as a weapon against accountability.' },
    ],
  },
  {
    theme: 'The Invisible Casualties',
    articles: [
      { slug: 'womens-war', title: "Women's War: The Invisible Casualties", desc: "20,000+ military sexual assaults annually. 50,000 women raped in Bosnia. Agent Orange birth defects. War widows at 26. The war women fight on every front." },
      { slug: 'childrens-war', title: "Children's War: 400,000+ Killed", desc: "400,000+ children killed in post-9/11 wars. 250,000 child soldiers worldwide. School bombings. Drone strikes on families. An entire generation with PTSD." },
      { slug: 'veterans-betrayed', title: "Veterans Betrayed", desc: "17 suicides/day. 37,000+ homeless. VA wait times. Agent Orange denial. Burn pit denial. America sends them to war and forgets them." },
      { slug: 'environmental-cost', title: "The Environmental Cost of War", desc: "3.5M veterans exposed to burn pits. Depleted uranium. Agent Orange still killing. The Pentagon is the world's largest polluter." },
      { slug: 'pentagon-waste', title: "Pentagon Waste: Trillions Unaccounted For", desc: "6 failed audits. $1.7T F-35. $43M gas station. $640 toilet seats. $6.6B in cash lost in Iraq. The most expensive incompetence in history." },
    ],
  },
  {
    theme: 'Power & Inequality',
    articles: [
      { slug: 'allies-and-enemies', title: 'Allies & Enemies: How America Arms Its Future Wars', desc: 'Saddam was a CIA asset. Bin Laden was funded. Noriega was on the payroll. The Taliban were armed. The pattern: arm today\'s ally, fight tomorrow\'s enemy.' },
      { slug: 'war-and-civil-liberties', title: 'War & Civil Liberties: Every War Shrinks Freedom', desc: 'Sedition Acts, Japanese internment, McCarthyism, COINTELPRO, PATRIOT Act, NSA mass surveillance. The ratchet only turns one way.' },
      { slug: 'forgotten-wars', title: 'Forgotten Wars: The Conflicts Americans Don\'t Remember', desc: 'Korean War (36K dead), Philippine-American War (1M civilians), Laotian Secret War (most bombed country per capita). Wars that disappeared from memory.' },
      { slug: 'draft-and-inequality', title: 'The Draft & Inequality: Who Fights America\'s Wars?', desc: '80% of Vietnam combatants from poor families. McNamara\'s Project 100,000. The poverty draft. Rural overrepresentation. Those who vote for war don\'t fight it.' },
      { slug: 'cost-of-empire', title: 'The Cost of Empire: $1.3 Trillion/Year', desc: '750+ bases, $1.3T/year true cost, more than the next 15 nations combined. Opportunity cost: free college, ending homelessness, and more — for a fraction.' },
    ],
  },
  {
    theme: 'Accountability & Truth',
    articles: [
      { slug: 'torture-program', title: "America's Torture Program", desc: "119+ detainees in CIA black sites. 266 waterboardings. Rectal feeding. Senate confirmed zero useful intelligence. Nobody prosecuted. Architects promoted." },
      { slug: 'oil-and-war', title: 'Oil & War: Every Middle East War Is About Oil', desc: "Carter Doctrine. Gulf War. Iraq no-bid Halliburton contracts. Petrodollar system. Pipeline politics. America fights for oil it no longer needs." },
      { slug: 'private-military', title: 'Private Military Contractors', desc: "Blackwater, Nisour Square massacre, 8,000+ contractor deaths. DynCorp trafficking scandal. Erik Prince's revolving door. 207,000 contractors at peak." },
      { slug: 'lies-that-started-wars', title: 'Lies That Started Wars', desc: "Gulf of Tonkin fabricated. WMDs didn't exist. Incubator babies staged. USS Maine was an accident. 100+ years of the same pattern." },
      { slug: 'what-victory-looks-like', title: 'What Victory Looks Like', desc: "Iraq: ISIS, 500K dead. Afghanistan: Taliban back in 11 days. Libya: slave markets. Vietnam: communist anyway. What did $8T achieve?" },
    ],
  },
  {
    theme: 'Human Cost',
    articles: [
      { slug: 'human-cost', title: 'The Human Cost', desc: 'Beyond the statistics: PTSD, veteran suicide (17/day), refugee displacement, and the lives destroyed by war.' },
      { slug: 'cost-per-life', title: 'The Price of a Life', desc: 'The cost per American death has skyrocketed from $96K to $935M. Modern wars cost 100× more per death than WWII.' },
      { slug: 'the-aftermath', title: 'The Aftermath', desc: 'Wars don\'t end when troops come home. $2.5T in veteran care. 17 suicides per day. Environmental contamination.' },
      { slug: 'blowback', title: 'Blowback: How Interventions Create Enemies', desc: 'The CIA\'s term for unintended consequences. Iran 1953 → 1979. Afghanistan mujahideen → Taliban → Al-Qaeda.' },
      { slug: 'pentagon-climate', title: 'The Pentagon\'s Carbon Bootprint', desc: 'If the US military were a country, it would be the 55th largest carbon emitter on Earth.' },
    ],
  },
]

export default function AnalysisPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis' }]} />
      <BreadcrumbSchema items={[{ label: "Analysis" }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-2">Analysis</h1>
      <p className="text-stone-500 mb-8">{sections.reduce((s, sec) => s + sec.articles.length, 0)} in-depth articles on US military policy, wars, and their consequences.</p>

      {/* Featured */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-red-800 mb-4">📌 Featured</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { slug: 'iran-day-by-day', title: 'Iran 2026: Day-by-Day', tag: 'LIVE' },
            { slug: 'war-on-terror', title: 'The War on Terror: $8T Later', tag: 'DEEP DIVE' },
            { slug: 'lies-that-started-wars', title: 'Lies That Started Wars', tag: 'EDITORIAL' },
          ].map(f => (
            <Link key={f.slug} href={`/analysis/${f.slug}`} className="bg-white rounded-lg border border-red-200 p-4 hover:shadow-md transition">
              <span className="text-xs font-bold text-red-600 uppercase">{f.tag}</span>
              <h3 className="font-[family-name:var(--font-heading)] font-bold mt-1">{f.title}</h3>
            </Link>
          ))}
        </div>
      </div>

      {sections.map(section => (
        <div key={section.theme} className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-stone-700">{section.theme}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {section.articles.map(a => (
              <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-white rounded-lg border p-6 hover:shadow-md transition">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">{a.title}</h3>
                <p className="text-muted">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <BackToTop />
    </div>
  )
}
