import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Analysis — Data-Driven Perspectives on US Wars',
  description: 'In-depth analysis of American military policy: the War on Terror, congressional authority, blowback, the military-industrial complex, and more.',
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
      { slug: 'iran-2026', title: 'Iran 2026: Another Undeclared War?', desc: 'The US launches strikes on Iran with no congressional vote. History repeats.' },
      { slug: 'forever-wars', title: 'The Forever Wars: How 60 Words Changed Everything', desc: 'The 2001 AUMF — 60 words that enabled 25 years of global war across 78 countries.' },
      { slug: 'ukraine-proxy', title: '$66.9 Billion: America\'s Proxy War in Ukraine', desc: 'The largest military aid since WWII Lend-Lease. European security on the American tab.' },
      { slug: 'war-on-terror', title: 'The War on Terror: $8 Trillion Later', desc: '929,000 dead. Four countries destabilized. Two decades of endless war. Was any of it worth it?' },
      { slug: 'drone-wars', title: 'Drone Wars', desc: 'Obama 563 strikes vs Bush 57. 10,000-17,000 killed. Signature strikes. Remote-control killing.' },
      { slug: 'israel-lobby', title: 'The Israel Lobby: How One Country Captured US Foreign Policy', desc: '$310B+ in aid. $221M in lobbying. Wars fought on their behalf. The most consequential foreign influence operation in American history.' },
    ],
  },
  {
    theme: 'Military-Industrial Complex',
    articles: [
      { slug: 'military-industrial-complex', title: 'The Military-Industrial Complex', desc: 'Eisenhower warned us in 1961. We didn\'t listen. Defense contractors now receive $400B+ per year.' },
      { slug: 'silicon-valley-pentagon', title: 'Silicon Valley & the Pentagon', desc: 'How Big Tech is transforming the military-industrial complex. AI weapons, surveillance, autonomous killing.' },
      { slug: 'jobs-vs-war', title: 'Jobs vs. War', desc: 'Military spending creates 5 jobs per $1M — fewer than education (13), healthcare (9), or clean energy (8).' },
      { slug: 'empire-of-bases', title: 'Empire of Bases', desc: '750 military bases in 80 countries. $55 billion per year. More bases than any empire in human history.' },
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
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-8">Analysis</h1>

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
