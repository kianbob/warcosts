import { Metadata } from 'next'
import FaqJsonLd from '@/components/FaqJsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'
import MediaClient from './MediaClient'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Media Coverage Tracker — The Wars America Forgot About | WarCosts',
  description: 'Iran gets 60% of cable news coverage with 3,461 killed. Yemen gets <1% with 150,000+ dead. Ethiopia: 600,000 killed, 0.1% coverage. The media decides which deaths matter.',
  keywords: ['media coverage war', 'forgotten wars', 'Yemen war coverage', 'media bias war', 'war coverage comparison', 'Iran war media', 'Ethiopia Tigray coverage', 'Syria forgotten war'],
  openGraph: {
    title: 'Media Coverage Tracker — The Wars America Forgot About',
    description: 'Iran: 60% of coverage, 3,461 killed. Ethiopia: 0.1% of coverage, 600,000 killed. The media decides which deaths matter.',
    url: 'https://warcosts.org/media-coverage',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wars America Forgot About',
    description: '600,000 dead in Ethiopia got 0.1% of US media coverage. Iran\'s 3,461 get 60%. Why?',
  },
}

const coverageData = [
  { conflict: 'Iran (2026)', deaths: 3461, coverage: 60.0, minutesPerWeek: 312, color: 'bg-red-500' },
  { conflict: 'Ukraine-Russia (2022–)', deaths: 190000, coverage: 18.5, minutesPerWeek: 96, color: 'bg-blue-500' },
  { conflict: 'Israel-Gaza (2023–)', deaths: 48000, coverage: 14.2, minutesPerWeek: 74, color: 'bg-amber-500' },
  { conflict: 'Sudan Civil War (2023–)', deaths: 24000, coverage: 2.1, minutesPerWeek: 11, color: 'bg-stone-500' },
  { conflict: 'Myanmar Civil War (2021–)', deaths: 55000, coverage: 0.8, minutesPerWeek: 4, color: 'bg-stone-500' },
  { conflict: 'Yemen (2014–)', deaths: 150000, coverage: 0.7, minutesPerWeek: 3.5, color: 'bg-stone-500' },
  { conflict: 'Syria (2011–)', deaths: 500000, coverage: 1.9, minutesPerWeek: 10, color: 'bg-stone-500' },
  { conflict: 'Ethiopia/Tigray (2020–2022)', deaths: 600000, coverage: 0.1, minutesPerWeek: 0.5, color: 'bg-stone-500' },
]

const biasPatterns = [
  {
    pattern: 'Proximity Bias',
    description: 'Conflicts involving the US military or direct US interests get exponentially more coverage regardless of scale.',
    example: 'Iran\'s 3,461 deaths generated 600x more coverage per death than Ethiopia\'s 600,000.',
  },
  {
    pattern: 'Race & Geography Bias',
    description: 'Wars in Europe and the Middle East receive dramatically more attention than those in Africa or Southeast Asia.',
    example: 'CBS News called Ukraine refugees "relatively civilized" vs. Middle Eastern refugees. African conflicts are virtually invisible.',
  },
  {
    pattern: 'Access Bias',
    description: 'Conflicts where Western journalists can safely report get covered. Wars in remote or dangerous regions disappear.',
    example: 'Tigray\'s communications blackout meant no footage, no reporters, no coverage — despite death tolls rivaling WWII battles.',
  },
  {
    pattern: 'Narrative Simplicity Bias',
    description: 'Conflicts with clear "good vs. evil" framing get more coverage than complex multi-party civil wars.',
    example: 'US vs. Iran is simple to frame. Myanmar\'s ethnic conflicts, with dozens of armed groups, are not.',
  },
  {
    pattern: 'Economic Interest Bias',
    description: 'Wars affecting oil prices, trade routes, or Western economic interests are treated as urgent. Others are "regional conflicts."',
    example: 'Iran\'s Strait of Hormuz proximity guaranteed wall-to-wall coverage. Sudan\'s collapse barely registered.',
  },
]

const historicalExamples = [
  {
    event: 'Vietnam War — The "Living Room War"',
    year: '1965–1975',
    impact: 'First war broadcast on TV. Graphic footage of the Tet Offensive and My Lai massacre shifted public opinion against the war, contributing to withdrawal. Showed that uncensored media coverage can end wars.',
  },
  {
    event: 'Gulf War — The "Video Game War"',
    year: '1991',
    impact: 'Pentagon pioneered media management with embedded reporters and precision-strike footage. Coverage sanitized war into green-tinted night vision clips. Public support stayed at 80%+ throughout.',
  },
  {
    event: 'Rwanda Genocide — The War Nobody Covered',
    year: '1994',
    impact: '800,000 killed in 100 days with minimal Western media coverage. Major networks pulled reporters out as the killing accelerated. The absence of coverage removed public pressure for intervention.',
  },
  {
    event: 'Iraq War — Embedded & Managed',
    year: '2003',
    impact: 'Media largely repeated WMD claims without scrutiny. NYT later apologized for its pre-war coverage. Embedded journalist program gave access but limited independence.',
  },
  {
    event: 'Syria — Fatigue Sets In',
    year: '2011–present',
    impact: 'Alan Kurdi\'s photo briefly spiked coverage and refugee policy. But 500,000 deaths generated declining coverage year over year — a textbook case of "compassion fatigue."',
  },
]

export default function MediaCoveragePage() {
  return (
    <>
      <FaqJsonLd faqs={[
        { q: 'Which wars get the most US media coverage?', a: 'The Iran War (2026) receives approximately 60% of US cable news war coverage despite having 3,461 deaths, while the Ethiopia/Tigray war with 600,000 deaths received only 0.1% of coverage. Conflicts involving direct US military involvement get exponentially more attention.' },
        { q: 'Why does the media ignore some wars?', a: 'Media bias patterns include proximity bias (US-involved conflicts get more coverage), racial bias (European conflicts get more coverage than African/Asian ones), access bias (Pentagon-embedded journalists cover US wars), and commercial bias (networks cover what generates ratings).' },
        { q: 'How many people died in the Ethiopia Tigray war?', a: 'An estimated 600,000 people were killed in the Ethiopia/Tigray conflict (2020-2022), making it one of the deadliest wars of the 21st century. Yet it received only 0.1% of US media coverage — about 0.5 minutes per week on cable news.' },
        { q: 'What is the most underreported war?', a: 'Yemen is among the most underreported conflicts relative to its death toll. With over 150,000 dead, it receives less than 1% of US media coverage. The war in Myanmar (55,000+ dead) and Sudan civil war (24,000+ dead) are similarly ignored.' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Media Coverage Tracker — The Wars America Forgot About',
        description: 'How much media coverage each conflict gets relative to casualties — exposing the absurd mismatch between attention and human suffering.',
        url: 'https://warcosts.org/media-coverage',
        publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
        datePublished: '2026-03-30',
        dateModified: '2026-04-20',
        mainEntityOfPage: 'https://warcosts.org/media-coverage',
      }) }} />

      {/* Dark Hero */}
      <section className="bg-stone-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Analysis', href: '/analysis' },
            { label: 'Media Coverage Tracker' },
          ]} />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold mt-6 mb-4">
            The Wars America<br />
            <span className="text-red-500">Forgot About</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 max-w-3xl mb-6">
            600,000 killed in Ethiopia. 500,000 in Syria. 150,000 in Yemen. Combined media coverage: less than 2%.
            Iran&apos;s 3,461 dead get 60%. The media doesn&apos;t report wars — it chooses which deaths count.
          </p>
          <p className="text-stone-500 text-sm">
            Coverage estimates based on cable news airtime analysis, Tyndall Report data, GDELT Project media monitoring, and academic media studies.
          </p>
          <ShareButtons title="Media Coverage Tracker — The Wars America Forgot About" />
        </div>
      </section>

      {/* Coverage vs Deaths Data Section */}
      <section className="bg-stone-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-2">
            Coverage vs. Casualties
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl">
            The relationship between how many people die in a conflict and how much media coverage it receives
            is essentially random. What predicts coverage is US involvement, not human suffering.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-stone-400 uppercase bg-stone-800/50 border-b border-stone-700">
                <tr>
                  <th className="px-4 py-3">Conflict</th>
                  <th className="px-4 py-3 text-right">Deaths</th>
                  <th className="px-4 py-3 text-right">US Cable News Share</th>
                  <th className="px-4 py-3 text-right">Minutes/Week</th>
                  <th className="px-4 py-3 text-right">Minutes per 1,000 Deaths</th>
                </tr>
              </thead>
              <tbody>
                {coverageData.map((row) => {
                  const minsPer1k = (row.minutesPerWeek / (row.deaths / 1000)).toFixed(1)
                  return (
                    <tr key={row.conflict} className="border-b border-stone-800 text-stone-300 hover:bg-stone-800/30">
                      <td className="px-4 py-3 font-medium text-white">{row.conflict}</td>
                      <td className="px-4 py-3 text-right">{row.deaths.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-24 bg-stone-700 rounded-full h-2">
                            <div className={`${row.color} h-2 rounded-full`} style={{ width: `${row.coverage}%` }} />
                          </div>
                          <span className="w-12 text-right">{row.coverage}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">{row.minutesPerWeek}</td>
                      <td className="px-4 py-3 text-right font-mono text-xs">{minsPer1k}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-red-950/30 border border-red-900/50 rounded-lg p-4">
            <p className="text-red-300 text-sm font-medium">
              💡 Iran receives <strong>90.1 minutes per week per 1,000 deaths</strong>. Ethiopia received
              <strong> 0.0008 minutes per 1,000 deaths</strong>. That&apos;s a 112,000x disparity in coverage per casualty.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Component */}
      <MediaClient />

      {/* Media Bias Patterns */}
      <section className="bg-stone-900 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-2">
            Why Some Wars Disappear
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl">
            Media coverage isn&apos;t random — it follows predictable patterns of bias that determine
            which conflicts get attention and which are ignored.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {biasPatterns.map((bp) => (
              <div key={bp.pattern} className="bg-stone-800/50 rounded-lg p-5 border border-stone-700">
                <h3 className="text-lg font-semibold text-white mb-2">{bp.pattern}</h3>
                <p className="text-stone-400 text-sm mb-3">{bp.description}</p>
                <p className="text-stone-500 text-xs italic">&quot;{bp.example}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Examples */}
      <section className="bg-stone-950 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-2">
            When Media Changed the War
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl">
            Media coverage doesn&apos;t just reflect reality — it shapes it. These historical examples show
            how coverage (or its absence) directly influenced policy and public opinion.
          </p>
          <div className="space-y-4">
            {historicalExamples.map((ex) => (
              <div key={ex.event} className="bg-stone-900 rounded-lg p-6 border border-stone-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{ex.event}</h3>
                  <span className="text-xs text-stone-500 mt-1 md:mt-0">{ex.year}</span>
                </div>
                <p className="text-stone-400 text-sm">{ex.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-stone-900 py-16 border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4">
            The Antidote Is Independent Information
          </h2>
          <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">
            If the media decides which deaths count, the only counter is information that doesn&apos;t depend
            on cable news editors. Open-source data, independent journalism, and projects like this one
            exist to fill the gaps.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-stone-800/50 rounded-lg p-5 border border-stone-700">
              <h3 className="text-white font-semibold mb-2">📊 Follow the Data</h3>
              <p className="text-stone-400 text-sm">
                ACLED, UCDP, and GDELT provide open conflict data. When media ignores a war,
                the data doesn&apos;t. Use sources that count every death, not just the ones with footage.
              </p>
            </div>
            <div className="bg-stone-800/50 rounded-lg p-5 border border-stone-700">
              <h3 className="text-white font-semibold mb-2">📰 Read Beyond Cable</h3>
              <p className="text-stone-400 text-sm">
                The Intercept, Bellingcat, OCCRP, and regional outlets like Middle East Eye or
                The East African cover what CNN won&apos;t. Diversify your sources.
              </p>
            </div>
            <div className="bg-stone-800/50 rounded-lg p-5 border border-stone-700">
              <h3 className="text-white font-semibold mb-2">🔗 Share What Matters</h3>
              <p className="text-stone-400 text-sm">
                Every share of a forgotten conflict is a small correction to the imbalance.
                Algorithms respond to engagement. Make the invisible visible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-stone-950 py-8 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs text-stone-500 max-w-3xl">
            Coverage share estimates are based on Tyndall Report network news tracking, GDELT Project
            media volume analysis, Media Cloud open-source media analysis, and academic studies from the
            Shorenstein Center on Media, Politics and Public Policy. Death tolls are sourced from ACLED,
            UCDP, UN OCHA, and conflict-specific monitoring organizations. Data through April 2026.
          </p>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
