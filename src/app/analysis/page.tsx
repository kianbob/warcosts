import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Analysis — Data-Driven Perspectives on US Wars',
  description: 'In-depth analysis of American military policy: the War on Terror, congressional authority, blowback, the military-industrial complex, and more.',
}

const articles = [
  { slug: 'war-on-terror', title: 'The War on Terror: $8 Trillion Later', desc: '929,000 dead. Four countries destabilized. Two decades of endless war. Was any of it worth it?' },
  { slug: 'congressional-authority', title: '19 Wars Without Congress', desc: 'The Constitution gives Congress the power to declare war. Presidents have ignored that 19 times out of 28.' },
  { slug: 'blowback', title: 'Blowback: How Interventions Create Enemies', desc: 'The CIA\'s term for unintended consequences. Iran 1953 → 1979. Afghanistan mujahideen → Taliban → Al-Qaeda.' },
  { slug: 'military-industrial-complex', title: 'The Military-Industrial Complex', desc: 'Eisenhower warned us in 1961. We didn\'t listen. Defense contractors now receive $400B+ per year.' },
  { slug: 'human-cost', title: 'The Human Cost', desc: 'Beyond the statistics: PTSD, veteran suicide (22/day), refugee displacement, and the lives destroyed by war.' },
  { slug: 'empire-of-bases', title: 'Empire of Bases', desc: '750 military bases in 80 countries. $55 billion per year. More bases than any empire in human history.' },
  { slug: 'cost-per-life', title: 'The Price of a Life', desc: 'The cost per American death has skyrocketed from $96K to $935M. Modern wars cost 100× more per death than WWII.' },
  { slug: 'presidents-at-war', title: 'Presidents at War', desc: 'Which presidents waged the most wars and spent the most? The expansion of executive war powers.' },
  { slug: 'the-aftermath', title: 'The Aftermath', desc: 'Wars don\'t end when troops come home. $2.5T in veteran care. 17 suicides per day. Environmental contamination.' },
  { slug: 'pentagon-climate', title: 'The Pentagon\'s Carbon Bootprint', desc: 'If the US military were a country, it would be the 55th largest carbon emitter on Earth.' },
  { slug: 'jobs-vs-war', title: 'Jobs vs. War', desc: 'Military spending creates 5 jobs per $1M — fewer than education (13), healthcare (9), or clean energy (8).' },
  { slug: 'the-469', title: '469 Military Interventions', desc: '469 instances of US armed forces deployed abroad since 1798. 251 since 1991 alone.' },
  { slug: 'drone-wars', title: 'Drone Wars', desc: 'Obama 563 strikes vs Bush 57. 10,000-17,000 killed. Signature strikes. Remote-control killing.' },
  { slug: 'silicon-valley-pentagon', title: 'Silicon Valley & the Pentagon', desc: 'How Big Tech is transforming the military-industrial complex. AI weapons, surveillance, autonomous killing.' },
]

export default function AnalysisPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-8">Analysis</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {articles.map(a => (
          <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-white rounded-lg border p-6 hover:shadow-md transition">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">{a.title}</h2>
            <p className="text-muted">{a.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
