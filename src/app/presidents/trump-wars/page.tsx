import { Metadata } from 'next'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Donald Trump: From "End the Wars" to Iran — War Record | WarCosts',
  description:
    'Donald Trump promised to end endless wars, then assassinated Soleimani, escalated Yemen, dropped the MOAB, and launched the 2026 Iran war — the largest US military operation since Iraq. Full war record.',
  openGraph: {
    title: 'Donald Trump: From "End the Wars" to Iran',
    description: 'Campaign promises vs. reality — from MOAB to the Iran war.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Donald Trump: From "End the Wars" to Iran',
  description: 'Comprehensive analysis of Trump\'s war record: Syria strikes, Soleimani assassination, and the 2026 Iran war.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  mainEntityOfPage: 'https://www.warcosts.org/presidents/trump-wars',
}

const FIRST_TERM = [
  {
    name: 'Syria Strikes (2017)',
    date: 'April 7, 2017',
    detail: '59 Tomahawk cruise missiles launched at Shayrat Airbase in response to a chemical weapons attack. No congressional authorization. The airbase was operational again within hours.',
  },
  {
    name: 'MOAB — Afghanistan (2017)',
    date: 'April 13, 2017',
    detail: 'Dropped the GBU-43/B "Mother of All Bombs" — the largest non-nuclear weapon ever used in combat — on an ISIS tunnel complex in Nangarhar Province. Killed 94 ISIS fighters. Cost: $170,000 per bomb.',
  },
  {
    name: 'Syria Strikes (2018)',
    date: 'April 14, 2018',
    detail: 'Joint US-UK-France strike: 105 missiles targeting alleged chemical weapons sites. No congressional authorization. Assad remained in power.',
  },
  {
    name: 'Yemen Escalation',
    detail: 'Expanded US support for Saudi bombing campaign. Conducted more drone strikes in Yemen in his first 2 years than Obama did in 8. Vetoed congressional resolution to end US involvement.',
  },
  {
    name: 'Soleimani Assassination (2020)',
    date: 'January 3, 2020',
    detail: 'Drone strike killed Iranian General Qasem Soleimani at Baghdad International Airport. Iran retaliated with missile strikes on US bases. 109 US troops suffered traumatic brain injuries (initially reported as "headaches" by Trump).',
  },
  {
    name: 'Afghanistan Withdrawal Deal (2020)',
    date: 'February 29, 2020',
    detail: 'Signed Doha Agreement with the Taliban — excluding the Afghan government. Set May 2021 withdrawal date. Released 5,000 Taliban prisoners. Critics called it a surrender agreement; supporters called it ending a forever war.',
  },
]

const IRAN_WAR = {
  startDate: 'February 2026',
  costFirst30Days: '$18B+',
  usKilled: '312+',
  iranianMilitaryKilled: '2,800+',
  civilianCasualties: '349+',
  congressionalAuth: 'None',
  keyEvents: [
    { date: 'Feb 2026', event: 'US launches strikes on Iranian nuclear facilities and military targets across Iran.' },
    { date: 'Feb 2026', event: 'Iran retaliates with ballistic missiles against US bases in Iraq, Qatar, and Bahrain.' },
    { date: 'Feb 2026', event: 'Strait of Hormuz disrupted. Oil prices spike 40% in 48 hours.' },
    { date: 'Mar 2026', event: 'US deploys 45,000+ troops to the region — largest buildup since Iraq 2003.' },
    { date: 'Mar 2026', event: 'Congress debates but does not vote on authorization. War Powers clock ticking.' },
    { date: 'Mar 2026', event: 'Total cost exceeds $18 billion. 3,461+ killed across all parties in 30 days.' },
  ],
}

export default function TrumpWarsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Presidents at War', href: '/presidents' },
          { label: 'Donald Trump', href: '/presidents/trump' },
          { label: 'War Record' },
        ]} />

        {/* Hero */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 mt-4">
          <p className="text-red-400 font-medium text-sm uppercase tracking-wider mb-2">Presidential War Record</p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            Donald Trump: From &ldquo;End the Wars&rdquo; to Iran
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl mb-8">
            &ldquo;Great nations do not fight endless wars,&rdquo; he said. Then he launched the
            largest US military operation since the 2003 Iraq invasion — without asking Congress.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">$18B+</div>
              <div className="text-stone-400 text-sm mt-1">Iran War (30 days)</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">3,461+</div>
              <div className="text-stone-400 text-sm mt-1">Killed (all parties, 30d)</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">0</div>
              <div className="text-stone-400 text-sm mt-1">Congressional Votes</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">45,000+</div>
              <div className="text-stone-400 text-sm mt-1">Troops Deployed</div>
            </div>
          </div>
          <ShareButtons title='Donald Trump: From "End the Wars" to Iran' />
        </div>

        {/* Promise vs Reality */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🎭 Promise vs. Reality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-800 text-lg mb-3">What He Said</h3>
              <ul className="space-y-2 text-green-900">
                <li className="flex gap-2"><span>🗣️</span>&ldquo;Great nations do not fight endless wars.&rdquo;</li>
                <li className="flex gap-2"><span>🗣️</span>&ldquo;We will stop racing to topple foreign regimes.&rdquo;</li>
                <li className="flex gap-2"><span>🗣️</span>&ldquo;I will bring our troops back home.&rdquo;</li>
                <li className="flex gap-2"><span>🗣️</span>&ldquo;The Iraq war was a big, fat mistake.&rdquo;</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-800 text-lg mb-3">What He Did</h3>
              <ul className="space-y-2 text-red-900">
                <li className="flex gap-2"><span>💣</span>Launched Iran war — largest operation since Iraq</li>
                <li className="flex gap-2"><span>💣</span>Assassinated Iranian general, risking full-scale war</li>
                <li className="flex gap-2"><span>💣</span>Dropped MOAB, struck Syria twice without Congress</li>
                <li className="flex gap-2"><span>💣</span>Expanded drone strikes, reduced transparency</li>
              </ul>
            </div>
          </div>
        </section>

        {/* First Term */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">⚔️ First Term Military Actions (2017–2021)</h2>
          <div className="space-y-4">
            {FIRST_TERM.map((a, i) => (
              <div key={i} className="bg-white rounded-xl border p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  {a.date && <span className="text-xs bg-stone-100 px-2 py-1 rounded-full text-stone-600">{a.date}</span>}
                </div>
                <p className="text-stone-700 leading-relaxed">{a.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Iran War */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🔥 The Iran War (2026)</h2>
          <div className="bg-red-900 text-white rounded-xl p-8 mb-6">
            <blockquote className="border-l-4 border-red-400 pl-4 mb-6">
              <p className="text-xl italic">
                The largest US military operation since the 2003 Iraq invasion — launched without
                a single vote in Congress.
              </p>
            </blockquote>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-300">{IRAN_WAR.costFirst30Days}</div>
                <div className="text-red-200 text-xs">Cost (first 30 days)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-300">{IRAN_WAR.usKilled}</div>
                <div className="text-red-200 text-xs">US Killed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-300">{IRAN_WAR.civilianCasualties}</div>
                <div className="text-red-200 text-xs">Civilian Casualties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-300">{IRAN_WAR.congressionalAuth}</div>
                <div className="text-red-200 text-xs">Congressional Authorization</div>
              </div>
            </div>
            <div className="space-y-3">
              {IRAN_WAR.keyEvents.map((e, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-red-300 font-mono text-sm shrink-0 w-20">{e.date}</span>
                  <p className="text-red-100">{e.event}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-amber-900">
              ⚠️ <strong>This war is ongoing.</strong> Figures are preliminary and will be updated
              as verified data becomes available. The Iran war has no congressional authorization —
              the administration cites the 2001 AUMF (designed for 9/11) and Article II commander-in-chief
              powers.
            </p>
          </div>
        </section>

        {/* Drone Transparency */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🔒 Drone Strike Secrecy</h2>
          <div className="bg-white rounded-xl border p-6">
            <p className="text-stone-700 leading-relaxed mb-4">
              In March 2019, Trump revoked Obama&apos;s executive order requiring annual reporting of
              civilian casualties from drone strikes outside war zones. The result: the US continued
              killing people from the sky, but stopped telling the public about it.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Airwars estimates Trump authorized more drone strikes in his first two years than Obama
              did in eight — but exact numbers are impossible to verify because the administration
              classified the data.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Transparency is not optional in a democracy. When a president can kill people in secret,
              with no congressional oversight and no public accounting, the constitutional framework
              for war has collapsed entirely.
            </p>
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🗽 The Assessment</h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <div className="space-y-4 text-stone-300 leading-relaxed">
              <p>
                Donald Trump ran as the anti-war candidate. He called Iraq &ldquo;a big, fat
                mistake.&rdquo; He promised to bring troops home and stop toppling foreign regimes.
                His supporters believed him.
              </p>
              <p>
                Instead, he dropped the largest non-nuclear bomb in history, struck Syria twice
                without Congress, assassinated a foreign general, escalated drone strikes while
                hiding the numbers, vetoed a bipartisan resolution to end the Yemen war, and in
                2026 launched the largest US military operation since Iraq — against Iran, without
                a single congressional vote.
              </p>
              <p>
                The Afghanistan withdrawal deal was real — the one genuinely anti-war action of his
                presidency. But it was overshadowed by everything else. The pattern is now familiar:
                anti-war rhetoric gets votes; war gets launched anyway.
              </p>
              <p className="text-white font-medium">
                The Iran war is Trump&apos;s Iraq. The question is whether America will take another
                20 years to admit it.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <Link href="/presidents/obama-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">← Previous</p>
            <p className="font-bold text-lg">Obama: The Drone President</p>
            <p className="text-sm text-stone-600">563 drone strikes and &ldquo;kinetic military action&rdquo;</p>
          </Link>
          <Link href="/presidents/biden-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">Next →</p>
            <p className="font-bold text-lg">Biden: Afghanistan&apos;s Chaotic End</p>
            <p className="text-sm text-stone-600">The withdrawal and Ukraine proxy war</p>
          </Link>
        </div>

        <BackToTop />
      </div>
    </>
  )
}
