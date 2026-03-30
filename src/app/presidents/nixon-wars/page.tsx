import { Metadata } from 'next'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Richard Nixon: Secret Wars and "Peace with Honor" — War Record | WarCosts',
  description:
    'Nixon secretly bombed Cambodia for 14 months, expanded Vietnam while promising peace, oversaw 21,000+ US deaths, and made Laos the most bombed country per capita in history.',
  openGraph: {
    title: 'Richard Nixon: Secret Wars and "Peace with Honor"',
    description: 'Cambodia secret bombing, Vietnam withdrawal, and the Madman Theory.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Richard Nixon: Secret Wars and "Peace with Honor"',
  description: 'Nixon\'s war record: secret Cambodia bombing, Vietnam escalation and withdrawal, Laos, and the Madman Theory.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  mainEntityOfPage: 'https://www.warcosts.org/presidents/nixon-wars',
}

const TIMELINE = [
  { year: '1969', event: 'Inaugurated promising "peace with honor." 536,000 US troops in Vietnam.' },
  { year: '1969', event: 'March: Secret bombing of Cambodia begins (Operation Menu). Congress not informed.' },
  { year: '1969', event: 'November: My Lai massacre revealed publicly (occurred March 1968 under LBJ).' },
  { year: '1969', event: 'First draft lottery held December 1. Anti-war movement intensifies.' },
  { year: '1970', event: 'April 30: Nixon announces Cambodia ground invasion. Campuses erupt.' },
  { year: '1970', event: 'May 4: Kent State — National Guard kills 4 students. Jackson State: 2 killed.' },
  { year: '1970', event: 'Pentagon Papers leaked to the New York Times by Daniel Ellsberg.' },
  { year: '1971', event: 'Operation Lam Son 719: ARVN invasion of Laos fails catastrophically.' },
  { year: '1972', event: 'Easter Offensive: North Vietnam attacks. Nixon responds with massive bombing.' },
  { year: '1972', event: 'December: "Christmas Bombings" — 12 days of B-52 strikes on Hanoi/Haiphong.' },
  { year: '1973', event: 'January 27: Paris Peace Accords signed. "Peace with honor" declared.' },
  { year: '1973', event: 'Last US troops leave Vietnam. POWs released. Bombing of Cambodia continues.' },
  { year: '1973', event: 'War Powers Resolution passed over Nixon\'s veto — Congress tries to reclaim war power.' },
  { year: '1974', event: 'August 9: Nixon resigns over Watergate. War crimes never prosecuted.' },
]

const BOMBING_STATS = [
  { country: 'Vietnam (under Nixon)', tonnage: '4.0 million tons', note: 'More than all of WWII combined' },
  { country: 'Cambodia (secret)', tonnage: '2.7 million tons', note: '14 months before Congress told' },
  { country: 'Laos', tonnage: '2.0+ million tons', note: 'Most bombed country per capita in history' },
]

export default function NixonWarsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Presidents at War', href: '/presidents' },
          { label: 'Richard Nixon', href: '/presidents/nixon' },
          { label: 'War Record' },
        ]} />

        {/* Hero */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 mt-4">
          <p className="text-red-400 font-medium text-sm uppercase tracking-wider mb-2">Presidential War Record</p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            Richard Nixon: Secret Wars and &ldquo;Peace with Honor&rdquo;
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl mb-8">
            He promised to end Vietnam, then expanded the war into Cambodia and Laos — bombing
            them in secret. His pursuit of &ldquo;peace with honor&rdquo; produced more death
            and destruction than the war itself.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">21,194</div>
              <div className="text-stone-400 text-sm mt-1">US Killed (Nixon era)</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">600K+</div>
              <div className="text-stone-400 text-sm mt-1">Vietnamese Killed</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">8.7M</div>
              <div className="text-stone-400 text-sm mt-1">Tons of Bombs Dropped</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">3</div>
              <div className="text-stone-400 text-sm mt-1">Countries Bombed in Secret</div>
            </div>
          </div>
          <ShareButtons title='Richard Nixon: Secret Wars and "Peace with Honor"' />
        </div>

        {/* The Secret Bombing */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">💣 The Secret Bombing of Cambodia</h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <blockquote className="border-l-4 border-red-700 pl-4 mb-6">
              <p className="text-xl italic">
                &ldquo;I want them to believe I&apos;ve reached the point where I might do anything.&rdquo;
              </p>
              <footer className="text-stone-400 mt-2">— Richard Nixon, describing the &ldquo;Madman Theory&rdquo;</footer>
            </blockquote>
            <div className="space-y-4 text-stone-300">
              <p>
                On March 18, 1969 — less than two months after taking office — Nixon began secretly
                bombing Cambodia. Operation Menu dropped 2.7 million tons of bombs on a neutral
                country, killing an estimated 100,000–150,000 Cambodian civilians.
              </p>
              <p>
                Congress was not informed. The bombing was hidden through falsified military records —
                dual reporting systems that logged the strikes as occurring in Vietnam. When the New
                York Times reported the bombing in May 1969, Nixon ordered wiretaps on reporters
                and government officials to find the leaker.
              </p>
              <p>
                The bombing destabilized Cambodia, driving civilians toward the Khmer Rouge. When the
                Khmer Rouge took power in 1975, they committed genocide — killing 1.5 to 2 million
                people. The secret bombing of Cambodia was a direct contributing factor.
              </p>
            </div>
          </div>
        </section>

        {/* Bombing stats */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">📊 The Bombing Record</h2>
          <div className="space-y-4">
            {BOMBING_STATS.map((b, i) => (
              <div key={i} className="bg-white rounded-xl border p-6">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <h3 className="font-bold text-lg">{b.country}</h3>
                  <span className="text-red-800 font-bold">{b.tonnage}</span>
                </div>
                <p className="text-stone-600 text-sm">{b.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-6">
            <p className="text-red-900">
              <strong>Laos:</strong> Between 1964 and 1973, the US dropped over 2 million tons of
              ordnance on Laos — more bombs than were dropped on Germany and Japan in WWII combined.
              Up to 30% of the bombs didn&apos;t detonate. Unexploded ordnance still kills and
              maims Laotians today — more than 50 years later.
            </p>
          </div>
        </section>

        {/* Vietnam: The Numbers */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">⚔️ Vietnam Under Nixon</h2>
          <div className="bg-white rounded-xl border p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-800">536,000</div>
                <div className="text-xs text-stone-500">Troops at inauguration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">0</div>
                <div className="text-xs text-stone-500">Troops at Paris Accords</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-800">21,194</div>
                <div className="text-xs text-stone-500">US killed under Nixon</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-800">4 years</div>
                <div className="text-xs text-stone-500">Time to withdraw</div>
              </div>
            </div>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                Nixon inherited 536,000 troops in Vietnam and a war that had already killed 36,000
                Americans. He pursued &ldquo;Vietnamization&rdquo; — gradually transferring combat
                responsibility to South Vietnamese forces while withdrawing US troops.
              </p>
              <p>
                But &ldquo;gradually&rdquo; meant four more years of war. 21,194 more Americans
                killed. Hundreds of thousands more Vietnamese, Cambodians, and Laotians dead. The
                Paris Peace Accords of January 1973 produced essentially the same terms that were
                available in 1969.
              </p>
              <p>
                Nixon&apos;s own defense secretary, Melvin Laird, later suggested that Kissinger
                delayed peace to serve political purposes. 21,000 Americans may have died for an
                &ldquo;honorable interval&rdquo; between US withdrawal and South Vietnam&apos;s
                inevitable fall.
              </p>
            </div>
          </div>
        </section>

        {/* Pentagon Papers & War Powers */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">📜 The Pentagon Papers & War Powers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-3">Pentagon Papers (1971)</h3>
              <p className="text-stone-700 leading-relaxed">
                Daniel Ellsberg leaked 7,000 pages of classified documents revealing that the
                government had systematically lied about the Vietnam War for decades. Four
                administrations — Truman, Eisenhower, Kennedy, Johnson — had deceived Congress and
                the public. Nixon tried to suppress publication and created the &ldquo;Plumbers&rdquo;
                unit to stop leaks — which led directly to Watergate.
              </p>
            </div>
            <div className="bg-white rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-3">War Powers Resolution (1973)</h3>
              <p className="text-stone-700 leading-relaxed">
                Passed over Nixon&apos;s veto in November 1973, the War Powers Resolution was
                Congress&apos;s attempt to reclaim its constitutional war-making authority. It
                requires presidents to notify Congress within 48 hours of committing forces and
                limits deployments to 60 days without authorization. Every president since has
                ignored or circumvented it.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">📅 Timeline</h2>
          <div className="space-y-4">
            {TIMELINE.map((t, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-16 shrink-0 text-right">
                  <span className="text-sm font-mono font-bold text-red-800">{t.year}</span>
                </div>
                <div className="w-px bg-red-200 shrink-0" />
                <p className="text-stone-700 pb-2">{t.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🗽 The Assessment</h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <div className="space-y-4 text-stone-300 leading-relaxed">
              <p>
                Richard Nixon promised peace and delivered four more years of war, plus secret wars
                in two additional countries. 21,000 more Americans died. Hundreds of thousands more
                Southeast Asians died. Cambodia was destabilized into genocide.
              </p>
              <p>
                His &ldquo;Madman Theory&rdquo; — the deliberate projection of irrational
                unpredictability — treated nuclear annihilation as a negotiating tactic. The
                Christmas Bombings of 1972, which killed over 1,600 Vietnamese civilians, were
                designed to show he would &ldquo;do anything.&rdquo;
              </p>
              <p>
                Watergate consumed Nixon&apos;s legacy. But Watergate was trivial compared to the
                secret bombing of Cambodia, the falsification of military records, the illegal
                wiretapping of journalists, and the human cost of four years of unnecessary war.
              </p>
              <p className="text-white font-medium">
                Nixon&apos;s real crime wasn&apos;t Watergate. It was Cambodia.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <Link href="/presidents/lbj-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">← Previous</p>
            <p className="font-bold text-lg">LBJ: Vietnam&apos;s Architect</p>
            <p className="text-sm text-stone-600">Gulf of Tonkin and the escalation to 536,000 troops</p>
          </Link>
          <Link href="/presidents/reagan-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">Next →</p>
            <p className="font-bold text-lg">Reagan: Cold War&apos;s Covert Commander</p>
            <p className="text-sm text-stone-600">Iran-Contra, Grenada, and the $2.8T buildup</p>
          </Link>
        </div>

        <BackToTop />
      </div>
    </>
  )
}
