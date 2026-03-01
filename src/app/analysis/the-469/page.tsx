import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '469 Military Interventions Since 1798 — The Full Accounting | WarCosts',
  description: 'The Congressional Research Service documents 469 instances of US armed forces deployed abroad. Only 5 were declared wars. 251 since 1991 alone. The acceleration of American interventionism.',
  openGraph: {
    title: '469 Military Interventions Since 1798',
    description: '469 interventions. 5 declared wars. The acceleration of American empire.',
    url: 'https://warcosts.org/analysis/the-469',
    type: 'article',
  },
}

export default function The469Page() {
  const stats = loadData('stats.json')
  const conflicts = loadData('conflicts.json')

  const byCentury = [
    { era: '1798–1899', count: 100, years: 102, rate: '~1/year', label: 'Manifest Destiny & gunboat diplomacy' },
    { era: '1900–1945', count: 50, years: 45, rate: '~1.1/year', label: 'Two World Wars and banana republics' },
    { era: '1946–1990', count: 68, years: 44, rate: '~1.5/year', label: 'Cold War containment' },
    { era: '1991–2025', count: 251, years: 34, rate: '~7.4/year', label: 'The unipolar moment' },
  ]

  const byRegion = [
    { region: 'Latin America & Caribbean', count: 96, note: 'Banana wars, regime changes, drug wars' },
    { region: 'Middle East & North Africa', count: 87, note: 'Oil, Israel, terrorism' },
    { region: 'East Asia & Pacific', count: 72, note: 'Philippines, Korea, Vietnam, China seas' },
    { region: 'Europe', count: 56, note: 'WWI, WWII, Balkans, NATO operations' },
    { region: 'Sub-Saharan Africa', count: 48, note: 'AFRICOM, counterterrorism, evacuations' },
    { region: 'Central & South Asia', count: 38, note: 'Afghanistan, Pakistan, India-Pakistan tensions' },
    { region: 'Global / Multi-region', count: 72, note: 'Naval operations, global counterterrorism' },
  ]

  const mostIntervened = [
    { country: 'Cuba', count: 12, note: 'Spanish-American War, Bay of Pigs, Guantanamo, embargo enforcement' },
    { country: 'Haiti', count: 8, note: '1891, 1914-34 occupation, 1994, 2004, and more' },
    { country: 'Nicaragua', count: 8, note: '1853-1933 (multiple), Contras 1980s' },
    { country: 'Panama', count: 7, note: 'Canal Zone control through 1989 invasion' },
    { country: 'Iraq', count: 7, note: 'Gulf War, no-fly zones, 2003 invasion, ISIS, ongoing' },
    { country: 'Libya', count: 6, note: '1801-05 (Barbary), 1986 bombing, 2011 intervention, ongoing' },
    { country: 'Somalia', count: 6, note: '1992, Black Hawk Down, ongoing AFRICOM operations' },
    { country: 'China', count: 6, note: 'Boxer Rebellion, WWII, Taiwan Strait crises' },
    { country: 'Dominican Republic', count: 6, note: '1903, 1914, 1916-24 occupation, 1965' },
    { country: 'Honduras', count: 5, note: 'Banana wars, Contra base, drug interdiction' },
  ]

  const blowback = [
    { intervention: 'CIA coup in Iran (1953)', consequence: 'Installed Shah → 1979 Islamic Revolution → Iran hostage crisis → US-Iran enmity to this day → Iran 2026' },
    { intervention: 'Arming mujahideen in Afghanistan (1979-89)', consequence: 'Created the networks that became al-Qaeda → 9/11 → War on Terror → $8 trillion' },
    { intervention: 'Support for Saddam Hussein (1980s)', consequence: 'Armed Iraq against Iran → Gulf War (1991) → Iraq War (2003) → ISIS' },
    { intervention: 'Iraq War (2003)', consequence: 'Destroyed Iraqi state → power vacuum → al-Qaeda in Iraq → ISIS → Syria civil war → European refugee crisis' },
    { intervention: 'Libya intervention (2011)', consequence: 'Toppled Gaddafi → failed state → weapons flooded Sahel → Boko Haram, Mali crisis, Niger instability' },
    { intervention: 'Yemen support (2015-present)', consequence: 'Backed Saudi bombing campaign → humanitarian catastrophe → Houthi radicalization → Red Sea shipping attacks' },
    { intervention: 'Vietnam War (1964-75)', consequence: 'Destabilized Cambodia → Khmer Rouge genocide → 2 million dead' },
    { intervention: 'Chile coup (1973)', consequence: 'Installed Pinochet → 17 years of dictatorship → 3,000+ killed → lasting anti-American sentiment across Latin America' },
  ]

  const presidentialCounts = [
    { name: 'Obama', count: 42, note: '7 countries bombed' },
    { name: 'Bush Jr.', count: 38, note: 'Afghanistan, Iraq, global GWOT' },
    { name: 'Clinton', count: 35, note: 'Bosnia, Kosovo, Haiti, Iraq no-fly zones' },
    { name: 'Reagan', count: 28, note: 'Lebanon, Grenada, Libya, Iran-Contra' },
    { name: 'Trump (1st term)', count: 24, note: 'Soleimani, Syria, Yemen, Somalia' },
    { name: 'Biden', count: 20, note: 'Afghanistan withdrawal, Syria, Yemen, Red Sea' },
    { name: 'Bush Sr.', count: 16, note: 'Panama, Gulf War, Somalia' },
    { name: 'Nixon', count: 12, note: 'Vietnam, Cambodia, Chile' },
    { name: 'Johnson', count: 10, note: 'Vietnam escalation, Dominican Republic' },
    { name: 'Eisenhower', count: 9, note: 'Iran coup, Guatemala coup, Lebanon' },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '469 Military Interventions Since 1798',
    description: 'The Congressional Research Service documents 469 instances of US armed forces deployed abroad since 1798.',
    author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-03-01',
    dateModified: '2026-03-01',
    mainEntityOfPage: 'https://warcosts.org/analysis/the-469',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The 469' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The 469
        </h1>
        <p className="text-stone-400 text-lg">
          The Congressional Research Service — Congress&apos;s own nonpartisan research arm — maintains
          a document titled &ldquo;Instances of Use of United States Armed Forces Abroad.&rdquo;
          It lists every known deployment of US military forces since 1798. The count: <strong>469</strong>.
          Only 5 were declared wars. Most Americans can&apos;t name more than half a dozen.
        </p>
      </div>

      <ShareButtons title="469 Military Interventions Since 1798" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-red-50 rounded-xl p-6 border border-red-200 text-center">
          <p className="text-5xl font-bold text-red-800 font-[family-name:var(--font-heading)]">469</p>
          <p className="text-stone-600 text-sm">Total interventions</p>
        </div>
        <div className="bg-red-50 rounded-xl p-6 border border-red-200 text-center">
          <p className="text-5xl font-bold text-red-800 font-[family-name:var(--font-heading)]">5</p>
          <p className="text-stone-600 text-sm">Declared wars</p>
        </div>
        <div className="bg-red-50 rounded-xl p-6 border border-red-200 text-center">
          <p className="text-5xl font-bold text-red-800 font-[family-name:var(--font-heading)]">251</p>
          <p className="text-stone-600 text-sm">Since 1991 alone</p>
        </div>
        <div className="bg-red-50 rounded-xl p-6 border border-red-200 text-center">
          <p className="text-5xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{stats.counterterrorCountries}</p>
          <p className="text-stone-600 text-sm">Active countries today</p>
        </div>
      </div>

      {/* The acceleration */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Acceleration</h2>
        <p className="text-muted mb-6">
          The rate of American military intervention has increased dramatically — especially since the Cold War ended:
        </p>
        <div className="space-y-4">
          {byCentury.map((c, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm font-mono text-muted w-24 shrink-0">{c.era}</span>
              <div className="flex-1">
                <div className="bg-stone-100 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="bg-red-700 h-full rounded-full flex items-center pl-3"
                    style={{ width: `${(c.count / 260) * 100}%` }}
                  >
                    <span className="text-white text-sm font-bold">{c.count}</span>
                  </div>
                </div>
                <p className="text-xs text-muted mt-1">{c.label} — {c.rate}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted text-sm mt-6">
          Since the Cold War ended — when America was supposed to enjoy a &ldquo;peace dividend&rdquo; —
          the rate of military intervention has increased <strong>nearly 6×</strong>. More than half of all
          US military interventions in 228 years have occurred in just the last 34 years.
        </p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <p>
          The acceleration defies the narrative that the end of the Cold War would bring peace. Without
          a superpower rival, the US didn&apos;t reduce its military posture — it expanded it. The
          absence of a nuclear-armed adversary didn&apos;t constrain American force; it <em>unleashed</em> it.
          Every regional conflict, every humanitarian crisis, every terrorist attack became an
          opportunity — or an obligation — for military intervention.
        </p>
      </div>

      {/* By Region */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Interventions by Region</h2>
        <div className="space-y-3">
          {byRegion.map((r, i) => (
            <div key={i} className="flex items-center justify-between border-b border-stone-700 pb-2">
              <div>
                <p className="font-semibold">{r.region}</p>
                <p className="text-stone-500 text-xs">{r.note}</p>
              </div>
              <span className="text-red-400 font-bold font-[family-name:var(--font-heading)] text-xl">{r.count}</span>
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-4">
          Latin America leads the count — a century of Monroe Doctrine enforcement, banana wars,
          Cold War regime changes, and drug wars. The Middle East has surged since 1990.
        </p>
      </div>

      {/* Most intervened countries */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Most Intervened-In Countries</h2>
        <div className="space-y-3">
          {mostIntervened.map((c, i) => (
            <div key={i} className="flex items-center gap-4 border-b border-stone-100 pb-3">
              <span className="text-red-700 font-bold font-[family-name:var(--font-heading)] text-2xl w-8">{i + 1}</span>
              <div className="flex-1">
                <p className="font-semibold">{c.country} <span className="text-muted font-normal">— {c.count} interventions</span></p>
                <p className="text-muted text-sm">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interventions per president */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Interventions per President (Post-WWII)</h2>
        <p className="text-muted mb-4">Which presidents deployed military force abroad most frequently:</p>
        <div className="space-y-3">
          {presidentialCounts.map((p, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm font-semibold w-32 shrink-0">{p.name}</span>
              <div className="flex-1 bg-stone-100 rounded-full h-6 relative overflow-hidden">
                <div
                  className="bg-red-700 h-full rounded-full flex items-center justify-end pr-2"
                  style={{ width: `${(p.count / 45) * 100}%` }}
                >
                  <span className="text-white text-xs font-bold">{p.count}</span>
                </div>
              </div>
              <span className="text-xs text-muted w-48 shrink-0">{p.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* The constitutional question */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Constitutional Crisis: 5 out of 469</h2>
        <p>
          The Constitution is explicit: only Congress can declare war. Of 469 military interventions,
          Congress has formally declared war exactly <strong>5 times</strong>:
        </p>
        <ol>
          <li>War of 1812 (against Britain)</li>
          <li>Mexican-American War (1846)</li>
          <li>Spanish-American War (1898)</li>
          <li>World War I (1917)</li>
          <li>World War II (1941)</li>
        </ol>
        <p>
          That means <strong>464 out of 469 interventions — 98.9% — were conducted without a declaration
          of war</strong>. Some had congressional authorizations (AUMFs). Many had nothing at all. The
          constitutional requirement of a congressional declaration has become the exception so rare
          as to be effectively extinct. The last declared war ended in 1945. Every military action since
          — Korea, Vietnam, Lebanon, Grenada, Panama, Gulf War, Somalia, Bosnia, Kosovo, Afghanistan,
          Iraq, Libya, Syria, Yemen, Niger, and dozens more — was undeclared.
        </p>
      </div>

      <div className="bg-stone-100 rounded-xl p-6 my-8 border">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
          &ldquo;Allow the President to invade a neighboring nation whenever he shall deem it necessary
          to repel an invasion... and you allow him to make war at pleasure. Kings had always been
          involving and impoverishing their people in wars, pretending generally, if not always, that
          the good of the people was the object.&rdquo;
        </blockquote>
        <p className="text-muted mt-3">— Abraham Lincoln, 1848</p>
      </div>

      {/* Blowback */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Blowback: How Interventions Create Future Enemies</h2>
        <p className="text-stone-400 mb-6">
          Many of America&apos;s most dangerous enemies were created — directly or indirectly — by
          previous American interventions. The CIA calls this &ldquo;blowback.&rdquo;
        </p>
        <div className="space-y-4">
          {blowback.map((b, i) => (
            <div key={i} className="border-l-2 border-red-500 pl-4">
              <p className="font-bold text-red-400">{b.intervention}</p>
              <p className="text-stone-400 text-sm">→ {b.consequence}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-6">
          The pattern is clear: intervention creates instability. Instability creates enemies.
          New enemies justify new interventions. The cycle is self-perpetuating. Each entry on the
          CRS list isn&apos;t just a historical fact — it&apos;s a seed planted for future conflict.
        </p>
      </div>

      {/* What this looks like from the other side */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">What 469 Looks Like from the Other Side</h2>
        <p>
          Americans tend to see each intervention as an isolated event — a response to a specific threat,
          a humanitarian mission, a brief deployment. But from the perspective of the countries on the
          receiving end, the picture is very different.
        </p>
        <p>
          If you&apos;re Cuban, you&apos;ve experienced 12 US military interventions, a 60-year embargo,
          and an attempted invasion. If you&apos;re Haitian, the US occupied your country for 19 years
          (1915-34), then intervened four more times. If you&apos;re Nicaraguan, the US funded a brutal
          civil war against your government. If you&apos;re Iranian, the US overthrew your democratically
          elected government, installed a dictator, supported your enemy in a war that killed a million
          of your people, and is now bombing you.
        </p>
        <p>
          From outside America, 469 interventions in 228 years doesn&apos;t look like &ldquo;defense.&rdquo;
          It looks like empire. The United States has used military force on the territory of other nations
          more frequently than any power in modern history. When Americans wonder &ldquo;why do they
          hate us?&rdquo; the CRS list provides 469 answers.
        </p>
      </div>

      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <blockquote className="italic text-stone-700 text-lg">
          &ldquo;They don&apos;t hate us for our freedom. They hate us for our foreign policy.&rdquo;
        </blockquote>
        <p className="text-muted text-sm mt-2">— Ron Paul, Republican Presidential Debate, 2007</p>
      </div>

      {/* What counts */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">What the CRS List Doesn&apos;t Count</h2>
        <p>
          The 469 figure almost certainly undercounts actual US military activity abroad. The CRS list
          includes reported deployments of the regular military. It does <em>not</em> include:
        </p>
        <ul>
          <li><strong>CIA covert operations</strong> — coups, assassinations, paramilitary operations, arms transfers</li>
          <li><strong>Drone strikes</strong> in countries where the US isn&apos;t officially at war</li>
          <li><strong>Cyber operations</strong> — including Stuxnet and other offensive cyber attacks</li>
          <li><strong>Private military contractors</strong> — Blackwater, DynCorp, and hundreds of others</li>
          <li><strong>Arms sales</strong> that enable other countries to wage war on America&apos;s behalf</li>
          <li><strong>Training and advising</strong> foreign militaries in combat zones</li>
          <li><strong>Classified special operations</strong> in dozens of countries</li>
        </ul>
        <p>
          If all forms of US military and paramilitary activity abroad were counted, the true number
          would likely be several times higher than 469.
        </p>
      </div>

      {/* Conflicts from JSON */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
          Major US Conflicts Tracked by WarCosts
        </h2>
        <p className="text-muted mb-4">
          Of the 469 interventions, WarCosts tracks detailed cost and casualty data for {conflicts.length} major conflicts:
        </p>
        <div className="grid md:grid-cols-2 gap-2">
          {conflicts.slice(0, 20).map((c: any) => (
            <Link
              key={c.id}
              href={`/conflicts/${c.id}`}
              className="flex justify-between items-center bg-stone-50 rounded-lg border p-3 hover:shadow-sm transition text-sm"
            >
              <span className="font-semibold">{c.shortName || c.name}</span>
              <span className="text-muted">{c.startYear}–{c.endYear || 'present'}</span>
            </Link>
          ))}
        </div>
        <p className="text-muted text-sm mt-4">
          <Link href="/conflicts" className="text-red-800 hover:underline">→ See all {conflicts.length} tracked conflicts</Link>
        </p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The US has conducted <strong>469 military interventions</strong> since 1798 but formally declared war only <strong>5 times</strong> — a 98.9% rate of undeclared military action.</li>
          <li>• <strong>251 of the 469 interventions</strong> (53%) have occurred since 1991 — in just 14% of the time period.</li>
          <li>• The US has intervened in <strong>Cuba 12 times</strong> — more than any other country.</li>
          <li>• The last time Congress formally declared war was <strong>1942</strong> (against Bulgaria, Hungary, and Romania). Every military action since has been undeclared.</li>
          <li>• Most Americans cannot name more than <strong>5 or 6</strong> US wars. The actual number of military interventions is nearly 100 times that.</li>
          <li>• The CIA&apos;s 1953 coup in Iran set in motion a chain of events that led directly to the <strong>Iran crisis of 2026</strong> — 73 years of blowback from a single covert operation.</li>
          <li>• US military interventions in the Middle East have <strong>displaced 38 million people</strong> — more than any event since World War II.</li>
          <li>• President Obama authorized military interventions in <strong>42 instances</strong> — more than any other president — despite campaigning as the anti-war candidate.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <Link href="/conflicts" className="text-red-800 hover:underline block">→ All tracked conflicts with cost data</Link>
          <Link href="/analysis/congressional-authority" className="text-red-800 hover:underline block">→ Wars Without Congress</Link>
          <Link href="/analysis/blowback" className="text-red-800 hover:underline block">→ Blowback — how interventions create enemies</Link>
          <Link href="/analysis/presidents-at-war" className="text-red-800 hover:underline block">→ Presidents at War — who waged the most</Link>
          <Link href="/covert" className="text-red-800 hover:underline block">→ Covert Operations</Link>
          <Link href="/analysis/forever-wars" className="text-red-800 hover:underline block">→ The Forever Wars</Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
