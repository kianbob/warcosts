export async function GET() {
  const base = 'https://www.warcosts.org'
  const articles = [
    { slug: 'war-on-terror', title: 'The War on Terror: $8 Trillion Later', desc: '929,000 dead. Four countries destabilized. Was it worth it?' },
    { slug: 'congressional-authority', title: '19 Wars Without Congress', desc: 'How presidents bypassed the Constitution to wage war.' },
    { slug: 'blowback', title: 'Blowback: How Interventions Create Enemies', desc: 'The CIA\'s term for unintended consequences — and it keeps happening.' },
    { slug: 'military-industrial-complex', title: 'The Military-Industrial Complex', desc: 'Eisenhower warned us. We didn\'t listen.' },
    { slug: 'human-cost', title: 'The Human Cost', desc: '22 veterans take their own lives every day.' },
    { slug: 'empire-of-bases', title: 'Empire of Bases', desc: '750 bases in 80 countries. More than any empire in history.' },
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
