import { Metadata } from 'next'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Joe Biden: Afghanistan's Chaotic End — War Record | WarCosts",
  description:
    'Biden ended America\'s longest war in a chaotic withdrawal, then funded the largest proxy war since the Cold War. 13 Marines killed at Abbey Gate, $175B+ to Ukraine.',
  openGraph: {
    title: "Joe Biden: Afghanistan's Chaotic End",
    description: 'The withdrawal, Abbey Gate, and the Ukraine proxy war.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Joe Biden: Afghanistan's Chaotic End — War Record",
  description: 'Biden\'s war record: Afghanistan withdrawal, Ukraine proxy war, and continued Middle East operations.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  mainEntityOfPage: 'https://www.warcosts.org/presidents/biden-wars',
}

const TIMELINE = [
  { year: '2021', month: 'Apr', event: 'Biden announces full withdrawal from Afghanistan by September 11, 2021.' },
  { year: '2021', month: 'Jul', event: 'Taliban offensive accelerates. Provincial capitals fall daily.' },
  { year: '2021', month: 'Aug 15', event: 'Kabul falls. President Ghani flees. Taliban take control.' },
  { year: '2021', month: 'Aug 26', event: 'ISIS-K suicide bombing at Abbey Gate kills 13 US Marines and 170 Afghan civilians.' },
  { year: '2021', month: 'Aug 29', event: 'US drone strike kills 10 Afghan civilians including 7 children — initially called a "righteous strike."' },
  { year: '2021', month: 'Aug 30', event: 'Last US troops leave Afghanistan. 20-year war ends.' },
  { year: '2022', month: 'Feb', event: 'Russia invades Ukraine. Biden begins massive military aid program.' },
  { year: '2022', month: 'May', event: '$40 billion Ukraine aid package signed — more than most countries\' entire defense budgets.' },
  { year: '2023', month: '', event: 'Total Ukraine aid passes $100B. US provides HIMARS, Patriot missiles, Abrams tanks.' },
  { year: '2023', month: '', event: 'Continued airstrikes in Syria, Iraq, and Somalia against ISIS and al-Shabaab.' },
  { year: '2024', month: 'Jan', event: 'US strikes Houthi targets in Yemen after Red Sea shipping attacks.' },
  { year: '2024', month: '', event: 'Ukraine aid total exceeds $175B. No US combat troops deployed.' },
  { year: '2025', month: 'Jan', event: 'Biden leaves office. Troops remain in Syria and Iraq.' },
]

const ABBEY_GATE_FALLEN = [
  'SSgt. Darin Taylor Hoover (31)', 'Sgt. Johanny Rosario Pichardo (25)',
  'Sgt. Nicole L. Gee (23)', 'Cpl. Hunter Lopez (22)',
  'Cpl. Daegan W. Page (23)', 'Cpl. Humberto A. Sanchez (22)',
  'LCpl. David L. Espinoza (20)', 'LCpl. Jared M. Schmitz (20)',
  'LCpl. Rylee J. McCollum (20)', 'LCpl. Dylan R. Merola (20)',
  'LCpl. Kareem M. Nikoui (20)', 'Cpl. Maxton W. Soviak (22)',
  'SSgt. Ryan C. Knauss (23)',
]

export default function BidenWarsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Presidents at War', href: '/presidents' },
          { label: 'Joe Biden', href: '/presidents/biden' },
          { label: 'War Record' },
        ]} />

        {/* Hero */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 mt-4">
          <p className="text-red-400 font-medium text-sm uppercase tracking-wider mb-2">Presidential War Record</p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            Joe Biden: Afghanistan&apos;s Chaotic End
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl mb-8">
            He ended America&apos;s longest war — the right decision, catastrophically executed.
            Then he funded the largest proxy war since the Cold War. The pattern holds: end one
            conflict, enable another.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">13</div>
              <div className="text-stone-400 text-sm mt-1">Marines Killed at Abbey Gate</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">$175B+</div>
              <div className="text-stone-400 text-sm mt-1">Ukraine Military Aid</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-green-400 font-[family-name:var(--font-heading)]">20 yrs</div>
              <div className="text-stone-400 text-sm mt-1">Afghanistan War Ended</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">4+</div>
              <div className="text-stone-400 text-sm mt-1">Active Operations</div>
            </div>
          </div>
          <ShareButtons title="Joe Biden: Afghanistan's Chaotic End" />
        </div>

        {/* Afghanistan Withdrawal */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🇦🇫 The Afghanistan Withdrawal</h2>
          <div className="bg-white rounded-xl border p-6 mb-6">
            <p className="text-stone-700 leading-relaxed mb-4">
              On August 15, 2021, Kabul fell to the Taliban as Afghan government forces — trained and
              equipped by the US for 20 years at a cost of $88 billion — collapsed in days. President
              Ghani fled the country with suitcases of cash. The US-backed government ceased to exist.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              What followed was the most chaotic military evacuation since Saigon. Desperate Afghans
              clung to departing aircraft and fell to their deaths. 124,000 people were airlifted in
              17 days — a logistical feat overshadowed by the catastrophic planning failures that
              made it necessary.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Biden defended the withdrawal: &ldquo;I was not going to extend this forever war.&rdquo;
              He was right about that. But the execution — particularly the failure to evacuate Afghan
              allies and interpreters — was a moral and strategic disaster.
            </p>
          </div>

          {/* Abbey Gate */}
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              Abbey Gate: August 26, 2021
            </h3>
            <p className="text-stone-300 mb-6">
              An ISIS-K suicide bomber detonated at Abbey Gate outside Kabul airport, killing 13 US
              service members and approximately 170 Afghan civilians. They were the last Americans
              killed in America&apos;s longest war. Their average age was 22.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {ABBEY_GATE_FALLEN.map((name, i) => (
                <div key={i} className="flex items-center gap-2 text-stone-300">
                  <span className="text-red-400">▸</span>
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
            <p className="text-stone-500 text-sm mt-4 italic">
              Three days later, a US drone strike targeting ISIS-K killed 10 Afghan civilians — 7 of
              them children — and zero terrorists. The Pentagon initially called it a &ldquo;righteous
              strike.&rdquo; No one was disciplined.
            </p>
          </div>
        </section>

        {/* Ukraine */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🇺🇦 The Ukraine Proxy War</h2>
          <div className="bg-white rounded-xl border p-6">
            <blockquote className="border-l-4 border-blue-600 pl-4 mb-6">
              <p className="text-lg italic text-stone-700">
                &ldquo;We will support Ukraine for as long as it takes.&rdquo;
              </p>
              <footer className="text-stone-500 mt-1">— Joe Biden (repeated 2022–2024)</footer>
            </blockquote>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-800">$175B+</div>
                <div className="text-xs text-blue-600">Total US Aid</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-800">0</div>
                <div className="text-xs text-blue-600">US Combat Troops</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-800">500,000+</div>
                <div className="text-xs text-blue-600">Estimated Casualties (both sides)</div>
              </div>
            </div>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                Biden&apos;s administration provided Ukraine with the most advanced US weapons systems
                short of nuclear arms: HIMARS, Patriot air defense, Abrams tanks, F-16 support, and
                vast quantities of ammunition and intelligence.
              </p>
              <p>
                The administration carefully avoided calling it a proxy war. It was, by every
                historical definition, a proxy war — the US funding, arming, training, and providing
                intelligence to one side of an armed conflict against a nuclear power.
              </p>
              <p>
                Whether this was the right policy is debatable. What is not debatable: $175 billion
                is more than the US spends annually on education, and it was appropriated with far
                less public debate than any comparable expenditure in American history.
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
                <div className="w-20 shrink-0 text-right">
                  <span className="text-sm font-mono font-bold text-red-800">{t.year} {t.month}</span>
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
                Joe Biden did what three predecessors couldn&apos;t or wouldn&apos;t: he ended the
                Afghanistan war. For that he deserves credit. The decision to leave was correct — the
                20-year mission had failed, and no amount of additional time would change that.
              </p>
              <p>
                But the execution was a disaster. The failure to plan for the Afghan government&apos;s
                collapse, the abandonment of Afghan allies, the Abbey Gate bombing, the drone strike
                that killed children — these were not inevitable. They were failures of planning,
                intelligence, and leadership.
              </p>
              <p>
                And even as he ended one war, Biden enabled another. $175 billion to Ukraine
                represents an enormous commitment of American resources to a conflict with no clear
                end state, no treaty obligations, and significant escalation risks against a nuclear
                power.
              </p>
              <p className="text-white font-medium">
                Biden&apos;s legacy is the American presidential pattern in miniature: end one war,
                fund the next one. The machinery never stops.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <Link href="/presidents/trump-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">← Previous</p>
            <p className="font-bold text-lg">Trump: From &ldquo;End the Wars&rdquo; to Iran</p>
            <p className="text-sm text-stone-600">The Afghanistan deal and the Iran war</p>
          </Link>
          <Link href="/presidents/reagan-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">Cold War →</p>
            <p className="font-bold text-lg">Reagan: Cold War&apos;s Covert Commander</p>
            <p className="text-sm text-stone-600">Grenada, Iran-Contra, and the $2.8T buildup</p>
          </Link>
        </div>

        <BackToTop />
      </div>
    </>
  )
}
