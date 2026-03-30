import { Metadata } from 'next'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Barack Obama: The Drone President — War Record | WarCosts',
  description:
    'Barack Obama conducted 563 drone strikes (10x Bush), intervened in Libya without Congress, continued Afghanistan/Iraq, and expanded the surveillance state. The full war record.',
  openGraph: {
    title: 'Barack Obama: The Drone President',
    description: '563 drone strikes, Libya intervention, and the expansion of secret wars.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Barack Obama: The Drone President — War Record',
  description: 'Comprehensive analysis of Obama\'s war record: drone strikes, Libya, Syria, and the expansion of covert warfare.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  mainEntityOfPage: 'https://www.warcosts.org/presidents/obama-wars',
}

const DRONE_STATS = [
  { region: 'Pakistan', strikes: 375, civiliansKilled: '324–969', period: '2009–2017' },
  { region: 'Yemen', strikes: 154, civiliansKilled: '65–101', period: '2009–2017' },
  { region: 'Somalia', strikes: 34, civiliansKilled: '7–15', period: '2009–2017' },
]

const CONFLICTS = [
  {
    name: 'Afghanistan (Continued)',
    years: '2009–2017',
    detail: 'Obama inherited 34,000 troops in Afghanistan and surged to 100,000 by 2010. Despite the surge, the Taliban was not defeated. By the end of his presidency, 8,400 troops remained. During Obama\'s tenure, 1,758 US service members were killed — more than under Bush.',
    cost: '$680B+',
  },
  {
    name: 'Libya (Operation Unified Protector)',
    years: '2011',
    detail: 'NATO intervention to overthrow Muammar Gaddafi. Obama bypassed the War Powers Act, calling it "kinetic military action" rather than war. Libya collapsed into civil war, became a failed state, and opened a weapons pipeline to jihadists across North Africa.',
    cost: '$1.1B',
  },
  {
    name: 'Syria/Iraq (Operation Inherent Resolve)',
    years: '2014–2017',
    detail: 'Air campaign against ISIS. Obama authorized 15,000+ airstrikes and deployed 5,000 troops. The CIA\'s Timber Sycamore program armed Syrian rebels — many of whom fought alongside al-Qaeda affiliates. The program cost $1 billion per year.',
    cost: '$14.3B+',
  },
  {
    name: 'Yemen (Support for Saudi Coalition)',
    years: '2015–2017',
    detail: 'Obama supported Saudi Arabia\'s bombing campaign in Yemen with intelligence, refueling, and weapons sales. The campaign created the world\'s worst humanitarian crisis — 377,000 deaths by 2022, including 150,000+ from starvation and disease.',
    cost: '$Billions in arms sales',
  },
  {
    name: 'Somalia (Expanded Operations)',
    years: '2009–2017',
    detail: 'Obama dramatically expanded military operations in Somalia, conducting drone strikes and special operations raids against al-Shabaab. US forces grew from a handful of advisors to hundreds of troops on the ground.',
    cost: 'Classified',
  },
]

const TIMELINE = [
  { year: '2009', event: 'Inaugurated promising to close Guantánamo (still open in 2026) and end Iraq War.' },
  { year: '2009', event: 'Orders Afghanistan surge: 17,000 troops, then 30,000 more in December.' },
  { year: '2009', event: 'Awarded Nobel Peace Prize — while planning troop surge. Global irony peaks.' },
  { year: '2010', event: '100,000 US troops in Afghanistan. Drone strikes in Pakistan intensify.' },
  { year: '2011', event: 'May 2: Osama bin Laden killed in Abbottabad, Pakistan. SEALs raid compound.' },
  { year: '2011', event: 'March: Libya intervention begins. No congressional authorization sought.' },
  { year: '2011', event: 'October: Gaddafi killed. Libya descends into chaos.' },
  { year: '2011', event: 'December: Last US troops leave Iraq.' },
  { year: '2012', event: 'September 11: Benghazi attack kills Ambassador Stevens and 3 others.' },
  { year: '2013', event: '"Red line" on Syria chemical weapons. Obama backs down from strikes after public opposition.' },
  { year: '2014', event: 'ISIS captures Mosul. Obama orders airstrikes in Iraq and Syria.' },
  { year: '2015', event: 'Saudi coalition begins bombing Yemen with US support.' },
  { year: '2016', event: 'US drops 26,171 bombs across 7 countries. Obama authorizes drone "kill list" every Tuesday.' },
  { year: '2017', event: 'Leaves office with troops in Afghanistan, Iraq, Syria, and active operations in Yemen, Somalia, Libya.' },
]

export default function ObamaWarsPage() {
  const totalStrikes = DRONE_STATS.reduce((s, d) => s + d.strikes, 0)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Presidents at War', href: '/presidents' },
          { label: 'Barack Obama', href: '/presidents/obama' },
          { label: 'War Record' },
        ]} />

        {/* Hero */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 mt-4">
          <p className="text-red-400 font-medium text-sm uppercase tracking-wider mb-2">Presidential War Record</p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            Barack Obama: The Drone President
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl mb-8">
            The constitutional law professor who bypassed Congress to bomb Libya. The Nobel Peace
            Prize winner who conducted 563 drone strikes. The anti-war candidate who left office
            with troops in more countries than when he started.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{totalStrikes}</div>
              <div className="text-stone-400 text-sm mt-1">Drone Strikes</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">7</div>
              <div className="text-stone-400 text-sm mt-1">Countries Bombed</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">300–800</div>
              <div className="text-stone-400 text-sm mt-1">Drone Civilian Deaths</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">26,171</div>
              <div className="text-stone-400 text-sm mt-1">Bombs Dropped (2016 alone)</div>
            </div>
          </div>
          <ShareButtons title="Barack Obama: The Drone President" />
        </div>

        {/* The Drone War */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">🎯 The Drone War</h2>
          <p className="text-stone-600 mb-6">
            Obama conducted 10 times more drone strikes than Bush. Every Tuesday, he personally
            reviewed a &ldquo;kill list&rdquo; — choosing targets for extrajudicial assassination,
            including at least one American citizen (Anwar al-Awlaki, killed September 2011, and
            his 16-year-old son two weeks later).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-stone-300 text-left">
                  <th className="py-3 pr-4">Region</th>
                  <th className="py-3 pr-4">Period</th>
                  <th className="py-3 pr-4 text-right">Strikes</th>
                  <th className="py-3 text-right">Civilians Killed</th>
                </tr>
              </thead>
              <tbody>
                {DRONE_STATS.map((d, i) => (
                  <tr key={i} className="border-b border-stone-200">
                    <td className="py-3 pr-4 font-medium">{d.region}</td>
                    <td className="py-3 pr-4 text-stone-500">{d.period}</td>
                    <td className="py-3 pr-4 text-right font-bold text-red-800">{d.strikes}</td>
                    <td className="py-3 text-right text-red-800">{d.civiliansKilled}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-stone-300 font-bold">
                  <td className="py-3 pr-4">Total</td>
                  <td />
                  <td className="py-3 pr-4 text-right text-red-800">{totalStrikes}</td>
                  <td className="py-3 text-right text-red-800">396–1,085</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
            <p className="text-amber-900 font-medium">
              📊 Source: Bureau of Investigative Journalism, New America Foundation. The Obama
              administration counted any military-age male in a strike zone as a
              &ldquo;combatant&rdquo; — artificially deflating civilian casualty numbers.
            </p>
          </div>
        </section>

        {/* Conflicts */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">⚔️ Conflicts</h2>
          <div className="space-y-6">
            {CONFLICTS.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border p-6 hover:shadow-md transition">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{c.name}</h3>
                  <span className="text-xs bg-stone-100 px-2 py-1 rounded-full text-stone-600">{c.years}</span>
                  <span className="text-xs bg-red-100 px-2 py-1 rounded-full text-red-700">{c.cost}</span>
                </div>
                <p className="text-stone-700 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Libya: Bypassing Congress */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">⚖️ Libya: &ldquo;Kinetic Military Action&rdquo;</h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <blockquote className="border-l-4 border-red-700 pl-4 mb-6">
              <p className="text-xl italic">
                &ldquo;I don&apos;t even have to get to the constitutional question. We are not
                engaged in hostilities.&rdquo;
              </p>
              <footer className="text-stone-400 mt-2">
                — Obama administration legal position on Libya (while dropping bombs for 7 months)
              </footer>
            </blockquote>
            <div className="space-y-4 text-stone-300">
              <p>
                When Obama intervened in Libya in March 2011, he did not seek congressional
                authorization. When the War Powers Act 60-day clock expired, his lawyers invented a
                new legal theory: since US forces weren&apos;t facing &ldquo;hostilities&rdquo;
                (because they were killing from the air, not being shot at), the War Powers Act
                didn&apos;t apply.
              </p>
              <p>
                This reasoning — that you can bomb a country for months without it being
                &ldquo;war&rdquo; — was rejected by the Office of Legal Counsel and the Pentagon&apos;s
                own lawyers. Obama overruled them both.
              </p>
              <p>
                The result: Gaddafi was overthrown. Libya became a failed state with rival
                governments, open slave markets, and a weapons pipeline that fueled conflicts across
                North Africa and the Sahel.
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
                Barack Obama proved that even anti-war presidents become war presidents. He
                campaigned against Bush&apos;s wars and won a Nobel Peace Prize, then expanded the
                US military footprint to seven countries, conducted 563 drone strikes, and bypassed
                Congress to overthrow a sovereign government.
              </p>
              <p>
                His innovation was making war invisible. Drones replaced boots on the ground. Special
                operations replaced conventional forces. &ldquo;Kinetic military action&rdquo;
                replaced &ldquo;war.&rdquo; Americans stopped paying attention because Americans
                stopped dying — even as thousands of foreign civilians did.
              </p>
              <p>
                The surveillance state Bush built, Obama expanded. The Guantánamo he promised to
                close remained open. The troops he promised to bring home were still deployed when he
                left office. The lesson: the machinery of war outlasts any single president.
              </p>
              <p className="text-white font-medium">
                Obama didn&apos;t end the War on Terror. He industrialized it.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <Link href="/presidents/bush-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">← Previous</p>
            <p className="font-bold text-lg">Bush: $5.8 Trillion in War</p>
            <p className="text-sm text-stone-600">The wars Obama inherited</p>
          </Link>
          <Link href="/presidents/trump-wars" className="bg-white rounded-xl border p-6 hover:shadow-md transition">
            <p className="text-xs text-stone-500">Next →</p>
            <p className="font-bold text-lg">Trump: From &ldquo;End the Wars&rdquo; to Iran</p>
            <p className="text-sm text-stone-600">Campaign promises vs. reality</p>
          </Link>
        </div>

        <BackToTop />
      </div>
    </>
  )
}
