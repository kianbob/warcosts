import { Metadata } from 'next'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Ronald Reagan: Cold War's Covert Commander — War Record | WarCosts",
  description:
    'Reagan invaded Grenada, lost 241 Marines in Lebanon, ran the Iran-Contra scandal, funded death squads in Central America, and spent $2.8 trillion on defense in 8 years.',
  openGraph: {
    title: "Ronald Reagan: Cold War's Covert Commander",
    description: 'Grenada, Lebanon, Iran-Contra, and the $2.8 trillion defense buildup.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Ronald Reagan: Cold War's Covert Commander",
  description: 'Reagan\'s war record: Grenada, Lebanon, Iran-Contra, Central American proxy wars, and the massive defense buildup.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  mainEntityOfPage: 'https://www.warcosts.org/presidents/reagan-wars',
}

const CONFLICTS = [
  {
    name: 'Lebanon Deployment (1982–1984)',
    deaths: '241 Marines killed (Beirut bombing, Oct 23, 1983)',
    cost: '$2B+',
    detail: 'Reagan deployed Marines as "peacekeepers" during the Lebanese Civil War. On October 23, 1983, a truck bomb destroyed the Marine barracks at Beirut International Airport — the deadliest single-day loss for the Marine Corps since Iwo Jima. Reagan withdrew forces four months later. The mission accomplished nothing.',
  },
  {
    name: 'Grenada Invasion (Operation Urgent Fury)',
    deaths: '19 US killed, 45 Grenadian civilians',
    cost: '$135M',
    detail: 'October 25, 1983 — two days after the Beirut bombing. Reagan invaded the tiny Caribbean island (population: 91,000) to overthrow a Marxist government and rescue American medical students who were never in danger. The invasion was condemned by the UN General Assembly 108–9. It lasted three days.',
  },
  {
    name: 'Iran-Contra Affair (1985–1987)',
    deaths: '30,000+ Nicaraguan civilians killed by Contras',
    cost: 'Illegal arms sales',
    detail: 'The Reagan administration secretly sold weapons to Iran (violating an arms embargo) and used the profits to fund the Contras in Nicaragua (violating the Boland Amendment). The Contras committed widespread atrocities — murder, torture, rape — documented by human rights organizations. 14 administration officials were indicted.',
  },
  {
    name: 'Central America Proxy Wars',
    deaths: '300,000+ civilians killed across region',
    cost: '$6B+ in military aid',
    detail: 'Reagan funded military governments and death squads across Central America in the name of anti-communism. In El Salvador, US-trained troops massacred 800+ civilians at El Mozote (1981). In Guatemala, US-backed forces committed genocide against Mayan indigenous communities. These wars created the refugee crises that persist today.',
  },
  {
    name: 'Libya Bombing (Operation El Dorado Canyon)',
    deaths: '60+ Libyan civilians including Gaddafi\'s adopted daughter',
    cost: '$Classified',
    detail: 'April 15, 1986: US bombed Tripoli and Benghazi in retaliation for a Berlin disco bombing. Gaddafi survived. His 15-month-old adopted daughter was killed. The strike was conducted without congressional authorization.',
  },
]

const DEFENSE_BUILDUP = [
  { year: '1981', spending: 258, note: 'Reagan takes office. Defense spending: $258B' },
  { year: '1982', spending: 293, note: 'Major buildup begins' },
  { year: '1983', spending: 325, note: 'Star Wars (SDI) announced' },
  { year: '1984', spending: 344, note: '600-ship Navy program' },
  { year: '1985', spending: 370, note: 'Peak Cold War spending' },
  { year: '1986', spending: 382, note: 'B-1 bomber, MX missile programs' },
  { year: '1987', spending: 393, note: 'INF Treaty signed with Gorbachev' },
  { year: '1988', spending: 399, note: 'Reagan leaves. Total 8-year spending: $2.8T' },
]

export default function ReaganWarsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Presidents at War', href: '/presidents' },
          { label: 'Ronald Reagan', href: '/presidents/reagan' },
          { label: 'War Record' },
        ]} />

        {/* Hero */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 mt-4">
          <p className="text-red-400 font-medium text-sm uppercase tracking-wider mb-2">Presidential War Record</p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            Ronald Reagan: Cold War&apos;s Covert Commander
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl mb-8">
            He won the Cold War, they say. He also funded death squads, sold weapons to Iran,
            lost 241 Marines in a pointless deployment, invaded a country to distract from it,
            and spent $2.8 trillion on the military in eight years.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">$2.8T</div>
              <div className="text-stone-400 text-sm mt-1">Defense Spending (8 years)</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">241</div>
              <div className="text-stone-400 text-sm mt-1">Marines Killed (Beirut)</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">300K+</div>
              <div className="text-stone-400 text-sm mt-1">Central America Deaths</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">14</div>
              <div className="text-stone-400 text-sm mt-1">Officials Indicted (Iran-Contra)</div>
            </div>
          </div>
          <ShareButtons title="Ronald Reagan: Cold War's Covert Commander" />
        </div>

        {/* Conflicts */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">⚔️ Military Operations</h2>
          <div className="space-y-6">
            {CONFLICTS.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">{c.name}</h3>
                <div className="flex flex-wrap gap-4 mb-3 text-sm">
                  <span className="text-red-800 font-medium">☠️ {c.deaths}</span>
                  <span className="text-stone-600">💰 {c.cost}</span>
                </div>
                <p className="text-stone-700 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Iran-Contra Deep Dive */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🔒 Iran-Contra: The Constitutional Crisis</h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <blockquote className="border-l-4 border-red-700 pl-4 mb-6">
              <p className="text-xl italic">
                &ldquo;A few months ago I told the American people I did not trade arms for hostages.
                My heart and my best intentions still tell me that&apos;s true, but the facts and the
                evidence tell me it is not.&rdquo;
              </p>
              <footer className="text-stone-400 mt-2">— Ronald Reagan, March 4, 1987</footer>
            </blockquote>
            <div className="space-y-4 text-stone-300">
              <p>
                Congress explicitly banned US aid to the Contras via the Boland Amendment. The Reagan
                administration did it anyway — funding them through secret arms sales to Iran and
                off-the-books fundraising from Saudi Arabia and other allies.
              </p>
              <p>
                Oliver North ran the operation from the White House basement. When exposed, North
                shredded documents. Reagan claimed he didn&apos;t remember. 14 officials were
                indicted; 11 were convicted. George H.W. Bush pardoned six of them.
              </p>
              <p>
                The Contras — Reagan&apos;s &ldquo;freedom fighters&rdquo; — committed systematic
                murder, rape, and torture documented by Human Rights Watch and the World Court.
                The International Court of Justice ruled the US had violated international law.
                The US ignored the ruling.
              </p>
            </div>
          </div>
        </section>

        {/* Defense Buildup */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">📊 The $2.8 Trillion Buildup</h2>
          <div className="space-y-3">
            {DEFENSE_BUILDUP.map((d, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold text-stone-500 w-12">{d.year}</span>
                <div className="flex-1 bg-stone-100 rounded-full h-6 overflow-hidden">
                  <div
                    className="bg-red-700 h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${(d.spending / 400) * 100}%` }}
                  >
                    <span className="text-white text-xs font-bold">${d.spending}B</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
            <p className="text-amber-900">
              💡 Reagan&apos;s Strategic Defense Initiative (&ldquo;Star Wars&rdquo;) promised a
              space-based missile defense shield. It cost $30 billion before being scaled back. It
              never worked, but it helped convince Soviet leadership they couldn&apos;t keep pace
              with US military spending — contributing to the Cold War&apos;s end.
            </p>
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🗽 The Assessment</h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <div className="space-y-4 text-stone-300 leading-relaxed">
              <p>
                Reagan&apos;s defenders credit him with winning the Cold War through military
                strength. His critics point to the human cost: 300,000+ dead in Central America from
                US-funded wars, 241 Marines killed in a pointless Lebanon deployment, and the
                constitutional violations of Iran-Contra.
              </p>
              <p>
                The truth is both. Reagan&apos;s military buildup and diplomatic engagement with
                Gorbachev contributed to the Soviet Union&apos;s collapse. But the proxy wars he
                funded produced atrocities — massacres, torture, genocide — that America has never
                fully reckoned with.
              </p>
              <p>
                The Central American refugees at the US border today are, in significant part, the
                legacy of Reagan&apos;s wars. The countries we destabilized never recovered. The
                death squads we trained, the democracies we undermined, the economies we destroyed —
                these consequences persist four decades later.
              </p>
              <p className="text-white font-medium">
                Reagan proved that you can win the Cold War and commit war crimes at the same time.
                History should record both.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <Link href="/presidents/nixon-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">← Vietnam Era</p>
            <p className="font-bold text-lg">Nixon: Secret Wars and &ldquo;Peace with Honor&rdquo;</p>
            <p className="text-sm text-stone-600">Cambodia bombing, Watergate, and the Vietnam endgame</p>
          </Link>
          <Link href="/presidents/bush-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">Post-Cold War →</p>
            <p className="font-bold text-lg">Bush: $5.8 Trillion in War</p>
            <p className="text-sm text-stone-600">The War on Terror that Reagan&apos;s era seeded</p>
          </Link>
        </div>

        <BackToTop />
      </div>
    </>
  )
}
