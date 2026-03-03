import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import LastUpdated from '@/components/LastUpdated'
import FaqJsonLd from '@/components/FaqJsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Wars List — Every American War & Military Intervention Since 1776',
  description: 'Complete list of all 36 major US wars plus 469 total military interventions. Only 5 were declared by Congress. The US has been at war for 229 of its 249 years. Sortable by cost, casualties, and era.',
  keywords: ['us wars list', 'how many wars has the us been in', 'american wars', 'list of us wars', 'us military interventions', 'us wars timeline'],
  openGraph: {
    title: 'Every US War Since 1776',
    description: '36 major wars. 469 interventions. 5 declared by Congress. 229 years at war.',
    url: 'https://warcosts.org/us-wars-list',
    type: 'article',
  },
}

const eraBreakdown = [
  { era: 'Founding & Expansion (1775–1860)', wars: 5, interventions: 42, note: 'Revolution, 1812, Mexican-American, Indian Wars, Barbary Wars' },
  { era: 'Civil War & Reconstruction (1861–1898)', wars: 2, interventions: 28, note: 'Civil War, Spanish-American; plus Latin American interventions' },
  { era: 'Imperial Era (1898–1940)', wars: 3, interventions: 48, note: 'Philippine-American, WWI, Banana Wars; US becomes global power' },
  { era: 'World War II & Cold War (1941–1990)', wars: 8, interventions: 100, note: 'WWII, Korea, Vietnam, plus dozens of covert ops and proxy wars' },
  { era: 'Post-Cold War (1991–2000)', wars: 4, interventions: 60, note: 'Gulf War, Somalia, Bosnia, Kosovo; the "New World Order"' },
  { era: 'War on Terror (2001–Present)', wars: 14, interventions: 191, note: 'Afghanistan, Iraq, Libya, Syria, Yemen, Somalia, and more' },
]

const declaredWars = [
  { name: 'War of 1812', year: 1812, opponent: 'United Kingdom', deaths: 20000, cost: '$1.8B (2024$)' },
  { name: 'Mexican-American War', year: 1846, opponent: 'Mexico', deaths: 13283, cost: '$3.1B (2024$)' },
  { name: 'Spanish-American War', year: 1898, opponent: 'Spain', deaths: 2446, cost: '$9.6B (2024$)' },
  { name: 'World War I', year: 1917, opponent: 'Germany, Austria-Hungary', deaths: 116516, cost: '$334B (2024$)' },
  { name: 'World War II', year: 1941, opponent: 'Japan, Germany, Italy', deaths: 405399, cost: '$4.7T (2024$)' },
]

const warTypes = [
  { type: 'Declared Wars', count: 5, pct: '14%', desc: 'Congress formally declared war per Article I, Section 8. Last declaration: WWII (1941).' },
  { type: 'Authorized by Congress (AUMF/Resolution)', count: 5, pct: '14%', desc: 'Congress passed an authorization for use of military force. Gulf of Tonkin, 2001 AUMF, 2002 Iraq AUMF.' },
  { type: 'UN/NATO Authorization Only', count: 4, pct: '11%', desc: 'Korea (UN), Bosnia/Kosovo (NATO). No congressional vote, or only informal authorization.' },
  { type: 'Presidential Authority Alone', count: 15, pct: '42%', desc: 'President ordered military action without congressional authorization. Most post-Cold War operations.' },
  { type: 'Covert/Undisclosed', count: 7, pct: '19%', desc: 'CIA or special operations forces conducting operations that were not publicly acknowledged.' },
]

const outcomeBreakdown = [
  { outcome: 'Victory/Objectives Met', count: 13, wars: 'Revolution, 1812, Mexican-American, Civil War, Spanish-American, WWI, WWII, Gulf War, Kosovo, Panama, Grenada, Libya intervention, Bosnia' },
  { outcome: 'Defeat/Objectives Not Met', count: 5, wars: 'Vietnam, Somalia (1993), Afghanistan, Iraq (failed to stabilize), Libya (state collapse)' },
  { outcome: 'Inconclusive/Stalemate', count: 13, wars: 'Korea (armistice), War on Terror (ongoing), multiple interventions with unclear outcomes' },
  { outcome: 'Ongoing', count: 5, wars: 'War on Terror (global), Syria, Yemen, Somalia (AFRICOM), Red Sea (Prosperity Guardian)' },
]

const decadeBreakdown = [
  { decade: '1770s–1780s', conflicts: 'Revolutionary War', interventions: 1, usdead: 25000 },
  { decade: '1790s', conflicts: 'Quasi-War (France), Barbary Wars', interventions: 5, usdead: 500 },
  { decade: '1800s–1810s', conflicts: 'War of 1812, Barbary Wars', interventions: 8, usdead: 20000 },
  { decade: '1820s–1830s', conflicts: 'Indian Wars, Seminole Wars', interventions: 12, usdead: 2000 },
  { decade: '1840s', conflicts: 'Mexican-American War', interventions: 6, usdead: 13283 },
  { decade: '1850s', conflicts: 'Indian Wars, border conflicts', interventions: 8, usdead: 1000 },
  { decade: '1860s', conflicts: 'Civil War', interventions: 4, usdead: 750000 },
  { decade: '1870s–1880s', conflicts: 'Indian Wars, labor unrest interventions', interventions: 15, usdead: 2000 },
  { decade: '1890s', conflicts: 'Spanish-American War, Philippine-American War begins', interventions: 12, usdead: 5000 },
  { decade: '1900s–1910s', conflicts: 'Philippine-American War, Banana Wars, WWI', interventions: 25, usdead: 125000 },
  { decade: '1920s–1930s', conflicts: 'Banana Wars (Nicaragua, Haiti, Dominican Republic)', interventions: 15, usdead: 500 },
  { decade: '1940s', conflicts: 'World War II, Greek Civil War (support)', interventions: 10, usdead: 405399 },
  { decade: '1950s', conflicts: 'Korean War, Lebanon intervention, CIA coups (Iran, Guatemala)', interventions: 18, usdead: 37000 },
  { decade: '1960s', conflicts: 'Vietnam escalation, Bay of Pigs, Dominican Republic', interventions: 15, usdead: 35000 },
  { decade: '1970s', conflicts: 'Vietnam (end), Cambodia bombing', interventions: 10, usdead: 25000 },
  { decade: '1980s', conflicts: 'Lebanon, Grenada, Panama, Libya (bombing), Iran-Contra', interventions: 20, usdead: 500 },
  { decade: '1990s', conflicts: 'Gulf War, Somalia, Bosnia, Kosovo, Iraq no-fly zones', interventions: 40, usdead: 600 },
  { decade: '2000s', conflicts: 'Afghanistan, Iraq, Global War on Terror', interventions: 65, usdead: 5500 },
  { decade: '2010s', conflicts: 'Libya, Syria, ISIS, Yemen, Somalia, Niger', interventions: 70, usdead: 1500 },
  { decade: '2020s', conflicts: 'Afghanistan (withdrawal), Red Sea, Iran 2026', interventions: 30, usdead: 200 },
]

export default function USWarsListPage() {
  const conflicts = loadData('conflicts.json')
  const stats = loadData('stats.json')

  const totalCost = conflicts.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalDeaths = conflicts.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Every US War Since 1776 — Complete List',
    description: '36 major wars, 469 total military interventions, and only 5 declared by Congress. The US has been at war 229 of 249 years.',
    url: 'https://warcosts.org/us-wars-list',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-01-01',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FaqJsonLd faqs={[
        { q: 'How many wars has the US been in?', a: 'The US has fought 36 major wars and conducted 469 total military interventions since 1776. Only 5 wars were formally declared by Congress: the War of 1812, the Mexican-American War, the Spanish-American War, World War I, and World War II.' },
        { q: 'How many years has the US been at war?', a: 'The United States has been at war for approximately 229 of its 249 years of existence — about 92% of its history.' },
        { q: 'How many US wars were declared by Congress?', a: 'Only 5 out of 36 major wars were formally declared by Congress. The remaining 31 were fought under presidential authority, UN resolutions, or congressional authorizations short of a declaration.' },
        { q: 'What is the US military win/loss record?', a: 'Of 36 major conflicts, the US record is approximately 13 victories, 5 defeats, and 13 inconclusive outcomes, with 5 still ongoing.' },
      ]} />
      <Breadcrumbs items={[{ label: 'US Wars List' }]} />
      <LastUpdated />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">Every US War Since 1776</h1>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        The United States has fought <strong className="text-stone-800">{stats.totalConflicts} major wars</strong> and
        conducted <strong className="text-stone-800">{stats.totalInterventions} total military interventions</strong> since
        its founding. Only <strong className="text-stone-800">5</strong> were formally declared by Congress as the
        Constitution requires. The US has been at war for <strong className="text-stone-800">229 of its 249 years</strong> —
        roughly 92% of its existence. Total cost: <strong className="text-stone-800">{fmtMoney(totalCost)}</strong>.
        Total American deaths: <strong className="text-stone-800">{fmt(totalDeaths)}</strong>.
      </p>
      <ShareButtons title="US Wars List — Every American War Since 1776" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8">
        {[
          { value: stats.totalConflicts, label: 'Major Wars' },
          { value: stats.totalInterventions, label: 'Total Interventions' },
          { value: '5', label: 'Declared by Congress' },
          { value: stats.undeclaredWars, label: 'Undeclared Wars' },
          { value: '229', label: 'Years at War (of 249)' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Additional stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: fmtMoney(totalCost), label: 'Total Cost (all wars)' },
          { value: fmt(totalDeaths), label: 'Total US Deaths' },
          { value: `${(stats.totalCivilianDeaths / 1e6).toFixed(1)}M+`, label: 'Civilian Deaths' },
          { value: `${stats.victories}W–${stats.defeats}L–${stats.inconclusive}I`, label: 'Win/Loss/Inconclusive' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 border border-red-200 text-center">
            <p className="text-xl md:text-2xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-8 text-stone-600">
        <p className="text-lg">
          The question &ldquo;How many wars has the US been in?&rdquo; is surprisingly hard to answer — because
          it depends on what you count. The Congressional Research Service (CRS) documents <strong>469 instances</strong> of
          the use of US armed forces abroad since 1798. Of those, 36 are commonly classified as major conflicts.
          Only 5 received a formal declaration of war from Congress. The rest were authorized through resolutions,
          executive orders, or — in many cases — no authorization at all.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The United States has been at war or in armed conflict for <strong>229 out of 249 years</strong> since
            its founding — roughly <strong>92% of its existence</strong>. There have been fewer than 20 calendar
            years in which the US was not engaged in some form of military action abroad. The longest period
            of peace was 1935–1940, just five years before Pearl Harbor. Since WWII, there has not been a
            single year without US military forces in active combat somewhere in the world.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">War Types: How US Conflicts Are Categorized</h2>
        <p>
          Not all wars are created equal in constitutional terms. The Founders intended war to require
          the most solemn deliberation by the people&apos;s representatives. In practice, the vast majority
          of US military actions have bypassed this requirement:
        </p>
      </div>

      <div className="max-w-3xl mx-auto my-8 space-y-3">
        {warTypes.map(w => (
          <div key={w.type} className="bg-white rounded-lg border p-5">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
              <h3 className="font-[family-name:var(--font-heading)] font-bold">{w.type}</h3>
              <div className="flex gap-3">
                <span className="text-red-800 font-bold">{w.count} wars</span>
                <span className="text-stone-500">({w.pct})</span>
              </div>
            </div>
            <p className="text-stone-500 text-sm">{w.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-8 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The 5 Declared Wars</h2>
        <p>
          Article I, Section 8 of the Constitution grants Congress — and only Congress — the power to declare
          war. In 249 years, Congress has exercised this power exactly 5 times:
        </p>
      </div>

      <div className="max-w-3xl mx-auto my-6 space-y-3">
        {declaredWars.map(w => (
          <div key={w.name} className="bg-white rounded-lg border p-4 flex flex-wrap justify-between items-center gap-2">
            <div>
              <span className="font-bold text-red-800 font-[family-name:var(--font-heading)] text-xl mr-3">{w.year}</span>
              <span className="font-medium">{w.name}</span>
              <p className="text-stone-500 text-xs">vs. {w.opponent}</p>
            </div>
            <div className="text-right">
              <span className="text-red-800 font-bold">{w.cost}</span>
              <p className="text-stone-500 text-xs">{fmt(w.deaths)} US deaths</p>
            </div>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-8 text-stone-600">
        <p>
          Every other US military action — including Korea (36,574 deaths), Vietnam (58,220 deaths),
          Iraq (4,599 deaths), and Afghanistan (2,461 deaths) — was fought without a formal declaration of war.
          The Korean War was authorized by the UN. Vietnam was escalated through the Gulf of Tonkin Resolution.
          The War on Terror operates under the 2001 AUMF — 60 words written three days after 9/11 that have been
          used to justify military operations in <strong>over 80 countries</strong> across two decades.
        </p>
        <p>
          The last time Congress declared war was <strong>December 8, 1941</strong> — over 83 years ago.
          Since then, more than <strong>100,000 Americans</strong> have been killed in wars that Congress
          never declared. The constitutional requirement has become a dead letter.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Outcomes: America&apos;s Win-Loss Record</h2>
        <p>
          Despite spending more on its military than any nation in history, America&apos;s war record since
          World War II is decidedly mixed:
        </p>
      </div>

      <div className="max-w-3xl mx-auto my-8 space-y-3">
        {outcomeBreakdown.map(o => (
          <div key={o.outcome} className="bg-white rounded-lg border p-5">
            <div className="flex justify-between items-start gap-2 mb-1">
              <h3 className="font-[family-name:var(--font-heading)] font-bold">{o.outcome}</h3>
              <span className="text-red-800 font-bold text-xl">{o.count}</span>
            </div>
            <p className="text-stone-500 text-xs">{o.wars}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-8 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">469 Interventions: The Acceleration</h2>
        <p>
          The CRS data reveals a striking pattern: US military interventions have <strong>accelerated
          dramatically</strong> since World War II, and especially since the Cold War ended:
        </p>
      </div>

      {/* Era breakdown */}
      <div className="max-w-3xl mx-auto my-8 space-y-3">
        {eraBreakdown.map(e => (
          <div key={e.era} className="bg-white rounded-lg border p-5">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <h3 className="font-[family-name:var(--font-heading)] font-bold">{e.era}</h3>
              <div className="flex gap-4">
                <span className="text-red-800 font-bold">{e.wars} wars</span>
                <span className="text-stone-500">{e.interventions} interventions</span>
              </div>
            </div>
            <p className="text-stone-500 text-sm">{e.note}</p>
            <div className="h-2 bg-stone-200 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-red-800 rounded-full" style={{ width: `${(e.interventions / 191) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto my-8 text-stone-600">
        <p>
          The numbers tell a clear story: <strong>251 of 469 interventions</strong> — over half — have occurred
          since 1991. In the 30+ years since the Cold War ended and the supposed &ldquo;peace dividend&rdquo;
          was declared, the United States has intervened militarily abroad more frequently than in all previous
          eras combined. The end of the Cold War didn&apos;t bring peace — it removed the last check on
          American interventionism.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Decade-by-Decade Breakdown</h2>
        <p>
          A more granular view shows how military activity has evolved over 250 years:
        </p>
      </div>

      <div className="overflow-x-auto my-8 max-w-3xl mx-auto">
        <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
          <thead className="bg-stone-100">
            <tr>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Decade</th>
              <th className="text-left p-3 font-[family-name:var(--font-heading)]">Major Conflicts</th>
              <th className="text-right p-3 font-[family-name:var(--font-heading)]">Interventions</th>
              <th className="text-right p-3 font-[family-name:var(--font-heading)]">US Dead</th>
            </tr>
          </thead>
          <tbody>
            {decadeBreakdown.map(d => (
              <tr key={d.decade} className="border-t border-stone-200">
                <td className="p-3 font-medium text-xs">{d.decade}</td>
                <td className="p-3 text-stone-500 text-xs">{d.conflicts}</td>
                <td className="p-3 text-red-800 font-semibold text-right">{d.interventions}</td>
                <td className="p-3 text-stone-600 text-right">{fmt(d.usdead)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose max-w-3xl mx-auto my-8 text-stone-600">
        <blockquote className="border-l-4 border-red-800">
          &ldquo;Of all the enemies to public liberty, war is, perhaps, the most to be dreaded, because it
          comprises and develops the germ of every other.&rdquo;
          <br />— James Madison
        </blockquote>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            In 2023, the US was conducting counterterrorism operations in <strong>{stats.counterterrorCountries} countries</strong> simultaneously.
            Most Americans cannot name more than two or three of them. Most members of Congress have never
            voted to authorize them. The 2001 AUMF — still the legal basis for most of these operations —
            was passed with a single dissenting vote (Barbara Lee, D-CA), who warned: &ldquo;Let us not become
            the evil we deplore.&rdquo;
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Congressional Authority: A Dead Letter</h2>
        <p>
          The Founders were explicit: the power to go to war belongs to Congress, not the President. James Madison
          wrote that &ldquo;the executive is the department of power most distinguished by its propensity to war;
          hence it is the practice of all states, in proportion as they are free, to disarm this propensity of
          its influence.&rdquo;
        </p>
        <p>
          In practice, Congress has abdicated this responsibility almost entirely. The War Powers Resolution of
          1973 — passed in response to Vietnam — requires presidents to notify Congress within 48 hours of
          military action and limits deployments to 60 days without authorization. Every president since Nixon
          has treated it as <strong>advisory, not binding</strong>:
        </p>
        <ul>
          <li><strong>Reagan:</strong> Invaded Grenada (1983) and bombed Libya (1986) without congressional votes</li>
          <li><strong>Clinton:</strong> Bombed Yugoslavia for 78 days (1999) without authorization</li>
          <li><strong>Obama:</strong> Bombed Libya for 7 months (2011) without a congressional vote</li>
          <li><strong>Trump:</strong> Struck Syria twice (2017, 2018) without authorization</li>
          <li><strong>Biden:</strong> Bombed Yemen Houthis for months (2024) with no new authorization</li>
        </ul>
        <p>
          The result: a permanent state of undeclared war, fought by a professional military in distant countries,
          funded by borrowed money, authorized by legal fictions, and largely invisible to the American public.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The 2001 AUMF: 60 Words That Changed Everything</h2>
        <p>
          The Authorization for Use of Military Force, passed on September 14, 2001 — three days after 9/11 —
          contains just 60 words:
        </p>
        <blockquote className="border-l-4 border-red-800 italic">
          &ldquo;The President is authorized to use all necessary and appropriate force against those nations,
          organizations, or persons he determines planned, authorized, committed, or aided the terrorist attacks
          that occurred on September 11, 2001, or harbored such organizations or persons.&rdquo;
        </blockquote>
        <p>
          These 60 words have been used to justify military operations in at least <strong>22 countries</strong> over
          two decades — far beyond anything the authors intended. The AUMF has been stretched to cover:
        </p>
        <ul>
          <li>The Afghanistan War (the clear intent)</li>
          <li>Operations in Pakistan, Yemen, Somalia, Libya, Syria, Iraq, Niger, Cameroon, and more</li>
          <li>The war against ISIS — a group that didn&apos;t exist in 2001 and is actually at war <em>with</em> al-Qaeda</li>
          <li>Detention of suspects at Guantanamo Bay indefinitely</li>
          <li>NSA mass surveillance programs</li>
        </ul>
        <p>
          Multiple attempts to repeal or update the 2001 AUMF have failed. It remains the legal foundation for
          a global war that has now lasted longer than any conflict in American history.
        </p>
      </div>

      {/* Complete wars list */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-6">All {stats.totalConflicts} Major US Wars</h2>

      <div className="mb-4 flex flex-wrap gap-2 text-sm">
        <span className="px-2 py-1 bg-stone-100 rounded text-stone-600">Total cost: <strong className="text-red-800">{fmtMoney(totalCost)}</strong></span>
        <span className="px-2 py-1 bg-stone-100 rounded text-stone-600">Total US deaths: <strong className="text-red-800">{fmt(totalDeaths)}</strong></span>
        <span className="px-2 py-1 bg-stone-100 rounded text-stone-600">Record: <strong className="text-red-800">{stats.victories}W–{stats.defeats}L–{stats.inconclusive}I</strong></span>
      </div>

      <div className="space-y-3 my-8">
        {conflicts.map((c: any, i: number) => {
          const isOngoing = !c.endYear
          const isDeclared = c.congressionalAuth && c.congressionalAuth === 'declaration'
          return (
            <Link key={c.id} href={`/conflicts/${c.id}`}
              className="flex flex-col md:flex-row md:items-center justify-between bg-white rounded-lg border p-4 hover:shadow-md transition gap-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-stone-400 text-sm font-mono w-6">{i + 1}.</span>
                <span className="font-medium">{c.name}</span>
                <span className="text-stone-400 text-sm">{c.startYear}–{c.endYear || 'Present'}</span>
                {isOngoing && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold animate-pulse">● ONGOING</span>
                )}
                {isDeclared && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Declared</span>
                )}
                {!c.congressionalAuth && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600">No Auth</span>
                )}
                {c.outcome && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    c.outcome.includes('Victory') ? 'bg-green-50 text-green-700' :
                    c.outcome.includes('Defeat') ? 'bg-red-50 text-red-700' :
                    c.outcome === 'Ongoing' ? 'bg-yellow-50 text-yellow-700' :
                    'bg-stone-50 text-stone-600'
                  }`}>{c.outcome}</span>
                )}
              </div>
              <div className="flex gap-4 text-right shrink-0 ml-9 md:ml-0">
                <span className="text-red-800 font-bold">{fmtMoney(c.costInflationAdjusted)}</span>
                <span className="text-stone-400 text-sm w-24">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) + ' deaths' : '—'}</span>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="prose max-w-3xl mx-auto my-12 text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Pattern</h2>
        <p>
          Look at the list above and a pattern emerges. Wars that begin with clear objectives and public support
          gradually expand, lose focus, and become indefinite commitments. Korea was supposed to be a &ldquo;police
          action&rdquo; — 73 years later, 28,500 US troops remain. Vietnam was going to be quick. Afghanistan
          was supposed to be about al-Qaeda — it became a 20-year nation-building exercise. The War on Terror
          was launched against the perpetrators of 9/11 — it has expanded to operations in 85+ countries with
          no defined endpoint.
        </p>
        <p>
          Each war creates the conditions for the next. Intervention breeds instability, which breeds extremism,
          which breeds more intervention. The cycle is self-perpetuating — and enormously profitable for the
          industries that feed it. This is not a conspiracy theory. It is the documented, predictable consequence
          of an empire that has been at war for 92% of its existence.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Ongoing Conflicts (as of 2025)</h2>
        <p>
          As of early 2025, the United States is actively engaged in military operations in multiple theaters:
        </p>
        <ul>
          <li><strong>Global War on Terror:</strong> Counterterrorism operations in {stats.counterterrorCountries} countries under the 2001 AUMF</li>
          <li><strong>Syria:</strong> ~900 US troops in northeastern Syria, ostensibly fighting ISIS remnants</li>
          <li><strong>Somalia:</strong> AFRICOM conducting airstrikes against al-Shabaab</li>
          <li><strong>Yemen/Red Sea:</strong> Operation Prosperity Guardian — strikes against Houthi forces</li>
          <li><strong>Iraq:</strong> ~2,500 US troops in advisory/counterterrorism role</li>
          <li><strong>Iran 2026:</strong> Developing — US strikes on Iranian nuclear and military facilities</li>
        </ul>
        <p>
          None of these operations have received a specific congressional authorization. All rely on the
          2001 AUMF, the 2002 Iraq AUMF, or presidential authority under Article II. The American public
          is largely unaware that these operations are occurring.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The executive has no right, in any case, to decide the question, whether there is or is not
          cause for declaring war.&rdquo;
          <br />— James Madison, 1793
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;Allow the President to invade a neighboring nation whenever he shall deem it necessary, and
          you allow him to make war at pleasure.&rdquo;
          <br />— Abraham Lincoln, 1848
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The constitution vests the power of declaring war in Congress; therefore no offensive
          expedition of importance can be undertaken until after they shall have deliberated upon the subject
          and authorized such a measure.&rdquo;
          <br />— George Washington, 1793
        </blockquote>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border max-w-3xl mx-auto">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related</h3>
        <ul className="space-y-2">
          <li><Link href="/conflicts" className="text-red-800 hover:underline">→ All Conflicts — Detailed data for each war</Link></li>
          <li><Link href="/analysis/the-469" className="text-red-800 hover:underline">→ The 469 — Every US military intervention since 1798</Link></li>
          <li><Link href="/analysis/congressional-authority" className="text-red-800 hover:underline">→ Congressional War Powers — The dead letter</Link></li>
          <li><Link href="/analysis/forever-wars" className="text-red-800 hover:underline">→ Forever Wars — How 60 words changed everything</Link></li>
          <li><Link href="/cost-of-war" className="text-red-800 hover:underline">→ Cost of War — $11.3 trillion and counting</Link></li>
          <li><Link href="/modern-wars" className="text-red-800 hover:underline">→ Modern Wars — Post-1995 operations</Link></li>
          <li><Link href="/timeline" className="text-red-800 hover:underline">→ Timeline — Interactive chronological view</Link></li>
          <li><Link href="/presidents" className="text-red-800 hover:underline">→ Presidents at War — Who fought what</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
