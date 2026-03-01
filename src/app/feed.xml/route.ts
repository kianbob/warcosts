export async function GET() {
  const base = 'https://www.warcosts.org'
  const articles = [
    { slug: 'war-on-terror', title: 'The War on Terror: $8 Trillion Later', desc: '929,000 dead. Four countries destabilized. Was it worth it?' },
    { slug: 'congressional-authority', title: '19 Wars Without Congress', desc: 'How presidents bypassed the Constitution to wage war.' },
    { slug: 'blowback', title: 'Blowback: How Interventions Create Enemies', desc: 'The CIA\'s term for unintended consequences — and it keeps happening.' },
    { slug: 'military-industrial-complex', title: 'The Military-Industrial Complex', desc: 'Eisenhower warned us. We didn\'t listen.' },
    { slug: 'human-cost', title: 'The Human Cost', desc: '17 veterans take their own lives every day.' },
    { slug: 'empire-of-bases', title: 'Empire of Bases', desc: '750 bases in 80 countries. More than any empire in history.' },
    { slug: 'cost-per-life', title: 'The Price of a Life', desc: 'A single American death in Afghanistan cost $935 million.' },
    { slug: 'presidents-at-war', title: 'Presidents at War', desc: 'Which presidents waged the most wars and spent the most?' },
    { slug: 'the-aftermath', title: 'The Aftermath', desc: 'Wars don\'t end when troops come home. $2.5T in veteran care.' },
    { slug: 'pentagon-climate', title: 'The Pentagon\'s Carbon Bootprint', desc: 'If the US military were a country, it would be the 55th largest emitter.' },
    { slug: 'jobs-vs-war', title: 'Jobs vs. War', desc: 'Military spending creates fewer jobs than education, healthcare, or clean energy.' },
    { slug: 'the-469', title: '469 Military Interventions', desc: '469 instances of US armed forces deployed abroad since 1798.' },
    { slug: 'drone-wars', title: 'Drone Wars', desc: 'Obama 563 strikes vs Bush 57. Remote-control killing.' },
    { slug: 'silicon-valley-pentagon', title: 'Silicon Valley & the Pentagon', desc: 'How Big Tech is transforming the military-industrial complex.' },
    { slug: 'forever-wars', title: 'The Forever Wars: How 60 Words Changed Everything', desc: 'The 2001 AUMF enabled 25 years of global war across 78 countries.' },
    { slug: 'ukraine-proxy', title: '$66.9 Billion: America\'s Proxy War in Ukraine', desc: 'The largest military aid since WWII Lend-Lease.' },
    { slug: 'iran-2026', title: 'Iran 2026: Another Undeclared War?', desc: 'The US launches strikes on Iran with no congressional vote. History repeats.' },
    { slug: 'israel-lobby', title: 'The Israel Lobby: How One Country Captured US Foreign Policy', desc: '$310B+ in aid. $221M in lobbying. Wars fought on their behalf.' },
    { slug: 'information-warfare', title: 'Information Warfare', desc: 'Pentagon PR: $4.7B. Russian troll farms reached 126M Americans. Deepfakes, psyops, and government propaganda.' },
    { slug: 'space-warfare', title: 'Space Warfare', desc: 'Space Force: $26B budget. ASAT tests. Starlink as weapon. Weaponizing the final frontier.' },
    { slug: 'private-armies', title: 'Private Armies', desc: 'Blackwater, Wagner, DynCorp. 50,000+ contractors in Iraq. 8,000 deaths excluded from counts.' },
    { slug: 'hybrid-warfare', title: 'Hybrid Warfare', desc: 'Russia\'s little green men. China\'s artificial islands. Iran\'s proxy network. War without declaration.' },
    { slug: 'economic-warfare', title: 'Economic Warfare', desc: '$300B frozen Russian assets. SWIFT weaponization. Chip bans. The weaponized dollar.' },
    { slug: 'cyber-warfare', title: 'Cyber Warfare: The Invisible Battlefield With No Rules', desc: 'Stuxnet, SolarWinds, NotPetya. $11B Cyber Command budget. No Geneva Convention for cyberspace.' },
    { slug: 'sanctions-warfare', title: 'Sanctions Warfare: The Weapon That Kills More Than Bombs', desc: 'Iraq sanctions killed 500,000 children. Sanctions are undeclared war against civilians.' },
    { slug: 'shadow-wars', title: 'Shadow Wars: America\'s Secret Wars in 134+ Countries', desc: 'JSOC in 134+ countries. 70,000 special operators. Kill lists with no congressional oversight.' },
    { slug: 'ai-weapons', title: 'AI Weapons: Autonomous Killing Machines', desc: 'Lavender AI, Kargu-2 drones, Replicator initiative. Machines deciding who dies.' },
    { slug: 'surveillance-state', title: 'The Surveillance State', desc: 'NSA collects ALL phone metadata. 278K warrantless FBI searches. The 4th Amendment is dead.' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>WarCosts — Analysis</title>
    <link>${base}</link>
    <description>Data-driven analysis of American wars, military spending, and foreign policy.</description>
    <language>en-us</language>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
    ${articles.map(a => `<item>
      <title>${a.title}</title>
      <link>${base}/analysis/${a.slug}</link>
      <description>${a.desc}</description>
      <guid>${base}/analysis/${a.slug}</guid>
    </item>`).join('\n    ')}
  </channel>
</rss>`

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
