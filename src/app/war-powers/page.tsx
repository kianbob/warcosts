import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { WarPowersTimeline } from '@/components/charts/WarPowersTimeline'

export const metadata: Metadata = {
  title: 'War Powers — Congress Hasn\'t Declared War Since 1942 | WarCosts',
  description: 'Congress has not formally declared war since 1942. From the Korean War to Syria, every US military action since WWII has bypassed the constitutional war power. AUMFs, War Powers Resolution, and the death of democratic accountability.',
  openGraph: {
    title: 'War Powers — Congress Hasn\'t Declared War Since 1942',
    description: 'Every US military action since WWII has bypassed constitutional war powers.',
    url: 'https://warcosts.org/war-powers',
    type: 'article',
  },
}

const declarations = [
  { name: 'War of 1812', year: 1812, type: 'declared' },
  { name: 'Mexican-American War', year: 1846, type: 'declared' },
  { name: 'Spanish-American War', year: 1898, type: 'declared' },
  { name: 'World War I', year: 1917, type: 'declared' },
  { name: 'World War II', year: 1941, type: 'declared' },
]

const undeclaredActions = [
  { name: 'Korean War', year: 1950, president: 'Truman', casualties: '36,574 US / 2M+ civilian', authorization: 'UN Resolution (no congressional vote)', details: 'Truman called it a "police action." Set the precedent that presidents could wage major wars without Congress.' },
  { name: 'Lebanon (1958)', year: 1958, president: 'Eisenhower', casualties: '1 US', authorization: 'Eisenhower Doctrine', details: '14,000 Marines deployed to stabilize a pro-Western government. No congressional authorization sought.' },
  { name: 'Bay of Pigs', year: 1961, president: 'Kennedy', casualties: '~100 CIA-backed', authorization: 'None (CIA covert)', details: 'CIA-organized invasion of Cuba. Complete disaster. Congress not consulted.' },
  { name: 'Vietnam War', year: 1964, president: 'Johnson/Nixon', casualties: '58,220 US / 2M+ civilian', authorization: 'Gulf of Tonkin Resolution', details: 'Based on fabricated intelligence. The resolution passed 98-2 in the Senate after a likely fictional attack.' },
  { name: 'Dominican Republic', year: 1965, president: 'Johnson', casualties: '47 US', authorization: 'None', details: '42,000 troops deployed to prevent "another Cuba." No congressional authorization.' },
  { name: 'Cambodia Bombing', year: 1969, president: 'Nixon', casualties: '100,000+ civilian', authorization: 'None (secret)', details: 'Operation Menu: 3,875 secret bombing sorties over 14 months. Congress and the public were not told.' },
  { name: 'Grenada', year: 1983, president: 'Reagan', casualties: '19 US', authorization: 'None', details: 'Invasion of a sovereign nation to "rescue" medical students. Congress notified after the fact.' },
  { name: 'Libya Bombing (1986)', year: 1986, president: 'Reagan', casualties: '~100 Libyan', authorization: 'None', details: 'Retaliatory strikes on Tripoli and Benghazi. Gaddafi\'s adopted daughter killed.' },
  { name: 'Panama', year: 1989, president: 'Bush Sr.', casualties: '23 US / 500+ civilian', authorization: 'None', details: 'Operation Just Cause. Invaded to arrest Manuel Noriega — a former CIA asset.' },
  { name: 'Somalia', year: 1992, president: 'Bush Sr./Clinton', casualties: '43 US / 1,000+ Somali', authorization: 'UN Resolution', details: 'Mission creep from humanitarian aid to urban warfare. Black Hawk Down.' },
  { name: 'Haiti', year: 1994, president: 'Clinton', casualties: '4 US', authorization: 'None', details: '20,000 troops deployed to restore elected president. No congressional vote.' },
  { name: 'Bosnia/Kosovo', year: 1995, president: 'Clinton', casualties: '32 US', authorization: 'NATO mandate', details: '78-day bombing campaign of Serbia. House vote failed 213-213 — bombing continued anyway.' },
  { name: 'Afghanistan (2001 AUMF)', year: 2001, president: 'Bush Jr.', casualties: '2,461 US / 46,000+ civilian', authorization: '2001 AUMF', details: 'Authorization for Use of Military Force — 60 words that launched 20+ years of global war. Passed 420-1 (House), 98-0 (Senate). Barbara Lee was the lone dissenter.' },
  { name: 'Iraq War (2002 AUMF)', year: 2003, president: 'Bush Jr.', casualties: '4,599 US / 200,000+ civilian', authorization: '2002 AUMF', details: 'Based on fabricated WMD intelligence. Not a declaration of war — an "authorization." Congress outsourced the war decision to the president.' },
  { name: 'Libya (2011)', year: 2011, president: 'Obama', casualties: '0 US / 1,100+ civilian', authorization: 'None (NATO)', details: 'Obama argued bombing a country for 7 months wasn\'t "hostilities" under the War Powers Resolution. Congress did nothing.' },
  { name: 'Syria (2014–present)', year: 2014, president: 'Obama/Trump/Biden', casualties: '~20 US / 12,000+ civilian', authorization: '2001 AUMF (stretched)', details: 'The 2001 AUMF — written for al-Qaeda — was used to justify war against ISIS in Syria, a group that didn\'t exist in 2001.' },
  { name: 'Yemen (support)', year: 2015, president: 'Obama/Trump/Biden', casualties: '150,000+ Yemeni civilian', authorization: 'None', details: 'US provided bombs, targeting intel, and mid-air refueling for Saudi Arabia\'s war. Congress passed a resolution to end it — Trump vetoed it.' },
  { name: 'Iran (Soleimani)', year: 2020, president: 'Trump', casualties: '1 Iranian general', authorization: 'None', details: 'Assassination of Iran\'s top general nearly started a major war. Congress was notified after the strike.' },
]

const warPowersResolution = {
  year: 1973,
  description: 'Passed over Nixon\'s veto after the Cambodia bombing scandal. Requires the president to notify Congress within 48 hours of deploying troops and withdraw within 60 days without congressional authorization.',
  failures: [
    'Every president since Nixon has called it unconstitutional',
    'No president has ever been forced to withdraw under the 60-day clock',
    'Presidents routinely re-label operations to reset or avoid the clock',
    'Congress has never enforced it — enforcement would require political courage',
    'The 60-day window actually legitimizes short wars without any vote at all',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'War Powers — Congress Hasn\'t Declared War Since 1942',
  description: 'Every US military action since WWII has bypassed constitutional war powers.',
  author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  datePublished: '2026-03-01',
  mainEntityOfPage: 'https://warcosts.org/war-powers',
}

export default function WarPowersPage() {
  const timelineData = [
    ...declarations.map(d => ({ name: d.name, year: d.year, type: d.type })),
    ...undeclaredActions.map(a => ({ name: a.name, year: a.year, type: a.authorization.includes('AUMF') ? 'aumf' : 'undeclared' })),
  ].sort((a, b) => a.year - b.year)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'War Powers' }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Constitutional Crisis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Congress Hasn&apos;t Declared War Since 1942
        </h1>
        <p className="text-stone-400 text-lg">
          Article I, Section 8 of the Constitution gives Congress — and Congress alone — the power to declare war.
          Since World War II, every single US military action has bypassed this power. {undeclaredActions.length} undeclared wars.
          Millions dead. Zero accountability.
        </p>
      </div>

      <ShareButtons title="War Powers — Congress Hasn't Declared War Since 1942" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">5</p>
          <p className="text-sm text-stone-500">Declared Wars (Total)</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{undeclaredActions.length}</p>
          <p className="text-sm text-stone-500">Undeclared Since 1945</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">80+</p>
          <p className="text-sm text-stone-500">Years Since Last Declaration</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">0</p>
          <p className="text-sm text-stone-500">WPR Enforcements</p>
        </div>
      </div>

      {/* Timeline Chart */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Interactive Timeline: Declared vs. Undeclared</h2>
        <p className="text-stone-500 text-sm mb-4">
          <span className="inline-block w-3 h-3 bg-green-600 rounded mr-1" /> Declared War &nbsp;
          <span className="inline-block w-3 h-3 bg-amber-500 rounded mr-1" /> AUMF &nbsp;
          <span className="inline-block w-3 h-3 bg-red-800 rounded mr-1" /> No Authorization
        </p>
        <WarPowersTimeline data={timelineData} />
      </section>

      {/* The 5 Declared Wars */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Last Time Congress Did Its Job</h2>
        <p className="text-stone-600 mb-6">Congress has formally declared war only 5 times in American history. The last was June 5, 1942 — against Bulgaria, Hungary, and Romania (as part of WWII). Every conflict since has been fought under presidential authority, UN resolutions, NATO mandates, or the sweeping AUMFs.</p>
        <div className="space-y-3">
          {declarations.map(d => (
            <div key={d.year} className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-lg p-4">
              <span className="text-2xl font-bold text-green-700 font-[family-name:var(--font-heading)] w-16">{d.year}</span>
              <span className="font-semibold text-stone-800">{d.name}</span>
              <span className="ml-auto text-green-700 text-sm font-medium">✓ Declared</span>
            </div>
          ))}
        </div>
      </section>

      {/* Undeclared Actions */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Every Military Action Without a Declaration Since WWII</h2>
        <div className="space-y-6">
          {undeclaredActions.map(a => (
            <div key={a.year + a.name} className="bg-stone-50 border border-stone-200 rounded-xl p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{a.year}</span>
                <h3 className="text-lg font-bold text-stone-800">{a.name}</h3>
                <span className="ml-auto text-xs px-2 py-1 rounded bg-red-100 text-red-700 font-medium">{a.authorization}</span>
              </div>
              <p className="text-sm text-stone-500 mb-2">President: {a.president} · Casualties: {a.casualties}</p>
              <p className="text-stone-700 text-sm">{a.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* War Powers Resolution */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The War Powers Resolution (1973)</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
          <p className="text-stone-700 mb-4">{warPowersResolution.description}</p>
          <h4 className="font-bold text-amber-800 mb-2">Why It Failed:</h4>
          <ul className="space-y-2">
            {warPowersResolution.failures.map((f, i) => (
              <li key={i} className="text-sm text-stone-700">• {f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* AUMFs */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The AUMFs: Blank Checks for War</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">2001 AUMF</h3>
            <p className="text-sm text-stone-700 mb-3">60 words that authorized unlimited global war. Passed September 14, 2001 — three days after 9/11. One dissenting vote: Rep. Barbara Lee (D-CA).</p>
            <p className="text-sm text-stone-700 mb-2">Used to justify operations in: Afghanistan, Iraq, Syria, Yemen, Somalia, Libya, Niger, Cameroon, and at least 14 other countries.</p>
            <p className="text-sm font-semibold text-red-700">Still in effect as of 2026.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">2002 AUMF (Iraq)</h3>
            <p className="text-sm text-stone-700 mb-3">Authorized the invasion of Iraq based on fabricated WMD intelligence. Passed 296-133 (House), 77-23 (Senate).</p>
            <p className="text-sm text-stone-700 mb-2">Senators who voted yes and later ran for president: Hillary Clinton, John Kerry, Joe Biden, John Edwards.</p>
            <p className="text-sm font-semibold text-red-700">Repealed in 2023 — 21 years after passage, 12 years after the war &ldquo;ended.&rdquo;</p>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="my-12 bg-stone-900 text-white rounded-xl p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Constitutional Text</h2>
        <blockquote className="text-stone-300 italic text-lg mb-4 border-l-4 border-red-600 pl-4">
          &ldquo;The Congress shall have Power... To declare War, grant Letters of Marque and Reprisal, and make Rules concerning Captures on Land and Water.&rdquo;
        </blockquote>
        <p className="text-stone-400 text-sm">— Article I, Section 8, Clause 11, United States Constitution</p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/analysis/congressional-authority" className="text-red-700 hover:underline">→ Congressional Authority Analysis</Link>
        <Link href="/casualties" className="text-red-700 hover:underline">→ Casualty Data</Link>
        <Link href="/civilian-casualties" className="text-red-700 hover:underline">→ Civilian Casualties</Link>
      </div>

      <BackToTop />
    </div>
  )
}
