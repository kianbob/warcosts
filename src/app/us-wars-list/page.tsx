import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Wars List — Every American War & Military Intervention Since 1776 | WarCosts',
  description: 'Complete list of all 36 major US wars plus 469 total military interventions. Only 5 were declared by Congress. The US has been at war for 229 of its 249 years.',
  keywords: ['us wars list', 'how many wars has the us been in', 'american wars', 'list of us wars', 'us military interventions'],
  openGraph: {
    title: 'Every US War Since 1776',
    description: '36 major wars. 469 interventions. 5 declared by Congress.',
    url: 'https://warcosts.org/us-wars-list',
    type: 'article',
  },
}

const eraBreakdown = [
  { era: 'Founding & Expansion (1775–1860)', wars: 5, interventions: 42, note: 'Revolution, 1812, Mexican-American, Indian Wars, Barbary' },
  { era: 'Civil War & Reconstruction (1861–1898)', wars: 2, interventions: 28, note: 'Civil War, Spanish-American; plus Latin American interventions' },
  { era: 'Imperial Era (1898–1940)', wars: 3, interventions: 48, note: 'Philippine-American, WWI, Banana Wars; US becomes global power' },
  { era: 'World War II & Cold War (1941–1990)', wars: 8, interventions: 100, note: 'WWII, Korea, Vietnam, plus dozens of covert ops and proxy wars' },
  { era: 'Post-Cold War (1991–2000)', wars: 4, interventions: 60, note: 'Gulf War, Somalia, Bosnia, Kosovo; the "New World Order"' },
  { era: 'War on Terror (2001–Present)', wars: 14, interventions: 191, note: 'Afghanistan, Iraq, Libya, Syria, Yemen, Somalia, and more' },
]

const declaredWars = [
  { name: 'War of 1812', year: 1812, opponent: 'United Kingdom' },
  { name: 'Mexican-American War', year: 1846, opponent: 'Mexico' },
  { name: 'Spanish-American War', year: 1898, opponent: 'Spain' },
  { name: 'World War I', year: 1917, opponent: 'Germany, Austria-Hungary' },
  { name: 'World War II', year: 1941, opponent: 'Japan, Germany, Italy' },
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
    description: '36 major wars, 469 total military interventions, and only 5 declared by Congress.',
    url: 'https://warcosts.org/us-wars-list',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-01-01',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'US Wars List' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">Every US War Since 1776</h1>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        The United States has fought <strong className="text-stone-800">{stats.totalConflicts} major wars</strong> and
        conducted <strong className="text-stone-800">{stats.totalInterventions} total military interventions</strong> since
        its founding. Only <strong className="text-stone-800">5</strong> were formally declared by Congress as the
        Constitution requires. The US has been at war for <strong className="text-stone-800">229 of its 249 years</strong>.
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
            of peace was 1935–1940, just five years before Pearl Harbor.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The 5 Declared Wars</h2>
        <p>
          Article I, Section 8 of the Constitution grants Congress — and only Congress — the power to declare
          war. In 249 years, Congress has exercised this power exactly 5 times:
        </p>
      </div>

      <div className="max-w-3xl mx-auto my-6 grid md:grid-cols-5 gap-3">
        {declaredWars.map(w => (
          <div key={w.name} className="bg-white rounded-lg border p-4 text-center">
            <p className="font-bold text-red-800 font-[family-name:var(--font-heading)] text-2xl">{w.year}</p>
            <p className="font-medium text-sm">{w.name}</p>
            <p className="text-stone-500 text-xs">{w.opponent}</p>
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
            was passed with a single dissenting vote (Barbara Lee, D-CA).
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
          has treated it as <strong>advisory, not binding</strong>. Obama bombed Libya for seven months without
          congressional authorization. Trump struck Syria without a vote. Biden bombed Yemen Houthis for months.
        </p>
        <p>
          The result: a permanent state of undeclared war, fought by a professional military in distant countries,
          funded by borrowed money, authorized by legal fictions, and largely invisible to the American public.
        </p>
      </div>

      {/* Complete wars list */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mt-12 mb-6">All {stats.totalConflicts} Major US Wars</h2>

      <div className="mb-4 flex flex-wrap gap-2 text-sm">
        <span className="px-2 py-1 bg-stone-100 rounded text-stone-600">Total cost: <strong className="text-red-800">{fmtMoney(totalCost)}</strong></span>
        <span className="px-2 py-1 bg-stone-100 rounded text-stone-600">Total US deaths: <strong className="text-red-800">{fmt(totalDeaths)}</strong></span>
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
                <span className="text-stone-400 text-sm">{c.years}</span>
                {isOngoing && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold animate-pulse">● ONGOING</span>
                )}
                {isDeclared && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Declared</span>
                )}
                {!c.congressionalAuth && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600">No Auth</span>
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
          industries that feed it.
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
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
