import { Metadata } from 'next'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'George W. Bush: $5.8 Trillion in War — The Full Record | WarCosts',
  description:
    'George W. Bush launched the War on Terror: Afghanistan, Iraq, and global operations costing $5.8 trillion, 7,000+ US military killed, and 300,000+ civilian deaths. The complete war record.',
  openGraph: {
    title: 'George W. Bush: $5.8 Trillion in War',
    description:
      'Afghanistan, Iraq, and the Global War on Terror — the most expensive military campaign since WWII.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'George W. Bush: $5.8 Trillion in War — The Full Record',
  description:
    'Comprehensive analysis of George W. Bush\'s war record: Afghanistan, Iraq, and the Global War on Terror.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  mainEntityOfPage: 'https://www.warcosts.org/presidents/bush-wars',
}

const CONFLICTS = [
  {
    name: 'Afghanistan (Operation Enduring Freedom)',
    years: '2001–2021',
    cost: '$2.3 trillion',
    usDeaths: '2,461',
    civilianDeaths: '46,319+',
    summary:
      'Launched October 7, 2001 in response to 9/11. Initial campaign toppled the Taliban in weeks, but the 20-year occupation that followed became America\'s longest war. The Taliban returned to power in August 2021.',
  },
  {
    name: 'Iraq War (Operation Iraqi Freedom)',
    years: '2003–2011',
    cost: '$2.0 trillion',
    usDeaths: '4,599',
    civilianDeaths: '200,000+',
    summary:
      'Launched March 20, 2003 based on false claims of weapons of mass destruction and fabricated links between Saddam Hussein and al-Qaeda. No WMDs were ever found. The invasion destabilized the entire Middle East and gave rise to ISIS.',
  },
  {
    name: 'Global War on Terror (Worldwide Operations)',
    years: '2001–present',
    cost: '$1.5 trillion',
    usDeaths: '300+',
    civilianDeaths: '50,000+',
    summary:
      'Military operations across 80+ countries including the Philippines, Horn of Africa, Trans-Sahara, and covert operations worldwide. Expanded executive war powers to a global, borderless battlefield with no defined end.',
  },
]

const TIMELINE = [
  { year: '2001', event: 'September 11 attacks kill 2,977 people. Bush declares "War on Terror."' },
  { year: '2001', event: 'October 7: Afghanistan invasion begins. Taliban toppled by December.' },
  { year: '2001', event: 'USA PATRIOT Act signed, expanding surveillance powers dramatically.' },
  { year: '2002', event: '"Axis of Evil" speech (Iraq, Iran, North Korea). War drums begin.' },
  { year: '2002', event: 'Authorization for Use of Military Force (AUMF) against Iraq passes Congress.' },
  { year: '2003', event: 'Colin Powell presents fabricated WMD evidence to the UN.' },
  { year: '2003', event: 'March 20: Iraq invasion begins with "Shock and Awe" bombing.' },
  { year: '2003', event: 'May 1: "Mission Accomplished" banner. War continues for 8 more years.' },
  { year: '2004', event: 'Abu Ghraib torture photos published. Global outrage.' },
  { year: '2004', event: 'No WMDs found in Iraq. The stated reason for war was a lie.' },
  { year: '2005', event: 'Iraqi insurgency intensifies. Sectarian civil war begins.' },
  { year: '2006', event: 'Saddam Hussein executed. Violence in Iraq reaches peak levels.' },
  { year: '2007', event: '"The Surge" — 20,000 additional troops sent to Iraq.' },
  { year: '2008', event: 'Status of Forces Agreement sets 2011 withdrawal date for Iraq.' },
]

const CIVIL_LIBERTIES = [
  {
    title: 'USA PATRIOT Act (2001)',
    detail:
      'Passed 45 days after 9/11 with almost no debate. Authorized warrantless surveillance, "sneak and peek" searches, and mass collection of phone and internet metadata. Most provisions remain in effect.',
  },
  {
    title: 'NSA Warrantless Wiretapping',
    detail:
      'The Bush administration secretly authorized the NSA to monitor international phone calls and emails of US citizens without court warrants, violating FISA. Revealed by the New York Times in 2005.',
  },
  {
    title: 'CIA Torture Program ("Enhanced Interrogation")',
    detail:
      'The CIA tortured at least 119 detainees using waterboarding, stress positions, rectal feeding, sleep deprivation, and confinement in coffin-sized boxes. The 2014 Senate report concluded torture produced no actionable intelligence.',
  },
  {
    title: 'Abu Ghraib Prison Abuse',
    detail:
      'US soldiers tortured and sexually humiliated Iraqi prisoners at Abu Ghraib. Photographs published in 2004 destroyed America\'s moral standing worldwide. Only low-ranking soldiers were prosecuted.',
  },
  {
    title: 'Guantánamo Bay Detention',
    detail:
      'Established January 2002 to hold "enemy combatants" outside US legal jurisdiction. At peak, held 780 detainees. Many held for years without charges. Still operating in 2026.',
  },
  {
    title: 'Extraordinary Rendition',
    detail:
      'The CIA kidnapped suspects worldwide and transferred them to countries known to practice torture — including Egypt, Syria, and secret "black sites" in Poland, Romania, and Thailand.',
  },
]

export default function BushWarsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Presidents at War', href: '/presidents' },
            { label: 'George W. Bush', href: '/presidents/bush-jr' },
            { label: 'War Record' },
          ]}
        />

        {/* Hero */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-10 mt-4">
          <p className="text-red-400 font-medium text-sm uppercase tracking-wider mb-2">
            Presidential War Record
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            George W. Bush: $5.8 Trillion in War
          </h1>
          <p className="text-stone-400 text-lg max-w-3xl mb-8">
            Two wars launched on false pretenses. A global surveillance state erected in the name of
            freedom. The most expensive military campaign since World War II — and the civil
            liberties catastrophe that came with it.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">
                $5.8T
              </div>
              <div className="text-stone-400 text-sm mt-1">Total War Cost</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">
                7,060+
              </div>
              <div className="text-stone-400 text-sm mt-1">US Military Killed</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">
                300,000+
              </div>
              <div className="text-stone-400 text-sm mt-1">Civilian Deaths</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)]">
                3
              </div>
              <div className="text-stone-400 text-sm mt-1">Major Conflicts</div>
            </div>
          </div>
          <ShareButtons title="George W. Bush: $5.8 Trillion in War" />
        </div>

        {/* Cost Breakdown */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
            💰 Cost Breakdown by Conflict
          </h2>
          <div className="space-y-6">
            {CONFLICTS.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border p-6 hover:shadow-md transition">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                    {c.name}
                  </h3>
                  <span className="text-xs bg-stone-100 px-2 py-1 rounded-full text-stone-600">
                    {c.years}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-2xl font-bold text-red-800">{c.cost}</p>
                    <p className="text-xs text-stone-500">Estimated Cost (2026$)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-800">{c.usDeaths}</p>
                    <p className="text-xs text-stone-500">US Military Killed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-800">{c.civilianDeaths}</p>
                    <p className="text-xs text-stone-500">Civilian Deaths</p>
                  </div>
                </div>
                <p className="text-stone-700 leading-relaxed">{c.summary}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-6">
            <p className="text-red-900 font-medium">
              📊 Source: Brown University&apos;s Costs of War Project estimates the total budgetary
              cost of post-9/11 wars at $8 trillion through FY2022. The $5.8 trillion figure
              represents costs directly attributable to Bush-era decisions, including long-term
              veterans&apos; care and interest on war borrowing.
            </p>
          </div>
        </section>

        {/* The WMD Lie */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
            🎭 The WMD Lie
          </h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <blockquote className="border-l-4 border-red-700 pl-4 mb-6">
              <p className="text-xl italic">
                &ldquo;The British government has learned that Saddam Hussein recently sought
                significant quantities of uranium from Africa.&rdquo;
              </p>
              <footer className="text-stone-400 mt-2">
                — George W. Bush, 2003 State of the Union (the &ldquo;16 words&rdquo; — later
                proven false)
              </footer>
            </blockquote>
            <div className="space-y-4 text-stone-300">
              <p>
                The case for invading Iraq was built on lies. The Bush administration claimed Saddam
                Hussein possessed weapons of mass destruction and had ties to al-Qaeda. Neither claim
                was true.
              </p>
              <p>
                On February 5, 2003, Secretary of State Colin Powell presented fabricated evidence to
                the United Nations Security Council — satellite photos of &ldquo;mobile biological
                weapons labs&rdquo; (which were weather balloon stations), aluminum tubes for
                &ldquo;nuclear centrifuges&rdquo; (which were conventional rocket casings), and
                intelligence from &ldquo;Curveball&rdquo; — a source the CIA knew was unreliable.
              </p>
              <p>
                The Iraq Survey Group, tasked with finding WMDs after the invasion, concluded in 2004
                that Iraq had no weapons of mass destruction and no active programs to develop them.
                Iraq had destroyed its stockpiles in the 1990s.
              </p>
              <p>
                Powell later called the UN presentation &ldquo;a blot&rdquo; on his record. The
                invasion proceeded anyway — costing $2 trillion, 4,599 American lives, and over
                200,000 Iraqi civilian deaths.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
            📅 Timeline: The Bush Wars
          </h2>
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

        {/* Civil Liberties */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
            🔒 Civil Liberties Destroyed
          </h2>
          <p className="text-stone-600 mb-6">
            The War on Terror wasn&apos;t just fought abroad. At home, the Bush administration
            constructed a surveillance state and authorized torture — fundamentally altering the
            relationship between Americans and their government.
          </p>
          <div className="space-y-4">
            {CIVIL_LIBERTIES.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border p-6">
                <h3 className="font-bold text-lg text-red-900 mb-2">{item.title}</h3>
                <p className="text-stone-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
            🗽 The Assessment
          </h2>
          <div className="bg-stone-900 text-white rounded-xl p-8">
            <div className="space-y-4 text-stone-300 leading-relaxed">
              <p>
                George W. Bush&apos;s &ldquo;War on Terror&rdquo; was the most consequential — and
                most catastrophic — use of American military power since Vietnam. Two wars launched,
                one based on fabricated evidence. A global surveillance apparatus erected. Torture
                programs authorized at the highest levels of government.
              </p>
              <p>
                The human cost: more than 7,000 US service members killed, over 50,000 wounded, and
                an estimated 300,000+ civilians dead across Iraq, Afghanistan, and associated
                operations. The financial cost: $5.8 trillion and counting — more than the
                inflation-adjusted cost of World War II.
              </p>
              <p>
                The strategic result: the Taliban returned to power in Afghanistan. Iraq descended
                into chaos and birthed ISIS. Iran emerged as the dominant regional power. The
                surveillance state remains intact. Guantánamo is still open.
              </p>
              <p className="text-white font-medium">
                Twenty-five years later, the question is not whether the War on Terror was a
                failure — that much is clear. The question is whether we&apos;ve learned anything
                from it.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <Link
            href="/presidents/obama-wars"
            className="bg-white rounded-xl border p-6 hover:shadow-md transition"
          >
            <p className="text-xs text-stone-500">Next →</p>
            <p className="font-bold text-lg">Obama: The Drone President</p>
            <p className="text-sm text-stone-600">
              Inherited Bush&apos;s wars, expanded drone strikes 10x
            </p>
          </Link>
          <Link
            href="/presidents/bush-jr"
            className="bg-white rounded-xl border p-6 hover:shadow-md transition"
          >
            <p className="text-xs text-stone-500">Data Profile →</p>
            <p className="font-bold text-lg">Bush: Full Stats &amp; Data</p>
            <p className="text-sm text-stone-600">Spending charts, conflict details, and more</p>
          </Link>
        </div>

        <BackToTop />
      </div>
    </>
  )
}
