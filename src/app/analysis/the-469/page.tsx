import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '469 Military Interventions Since 1798 — The Full Accounting',
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
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
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
      <div className="not-prose bg-stone-900 text-white rounded-xl p-6 mb-8">
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
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 my-8">
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

      {/* The cost of 469 */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Cumulative Cost: 228 Years of Intervention</h2>
        <p>
          The 469 interventions have not been free. While the CRS report doesn&apos;t include cost data,
          aggregating data from the Congressional Budget Office, the Congressional Research Service, and
          Brown University&apos;s Costs of War Project yields a staggering picture:
        </p>
        <ul>
          <li><strong>Total cost of all major US wars (inflation-adjusted):</strong> Over $20 trillion</li>
          <li><strong>Total American military deaths:</strong> Over 1.4 million across all conflicts</li>
          <li><strong>Total foreign civilian deaths:</strong> Conservatively 12-15 million since 1900</li>
          <li><strong>Total refugees and displaced persons:</strong> Over 60 million created by US-involved conflicts since 1945</li>
          <li><strong>Countries with ongoing US military presence:</strong> 85+ as of 2025</li>
          <li><strong>Active military bases abroad:</strong> ~750 in 80 countries</li>
          <li><strong>Countries bombed since 1945:</strong> At least 30</li>
        </ul>
        <p>
          The United States has spent more on its military than any nation in human history. The current
          defense budget of $886 billion exceeds the combined military spending of the next 10 countries.
          The national debt — now $38 trillion — is substantially attributable to war spending. The Brown
          University Costs of War Project estimates that interest payments on war debt from the post-9/11
          wars alone will exceed <strong>$6.5 trillion by 2050</strong>.
        </p>
        <p>
          Every one of the 469 interventions cost money, required personnel, consumed resources, and had
          consequences — intended and unintended. The aggregate effect has been the creation of a permanent
          warfare state that consumes approximately 55% of federal discretionary spending and has produced
          a military-industrial complex that Eisenhower warned about but could never have imagined.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Domestic Cost: What Empire Does at Home</h2>
        <p>
          The 469 interventions haven&apos;t just affected the countries on the receiving end. They&apos;ve
          profoundly shaped American society:
        </p>
        <ul>
          <li><strong>Civil liberties:</strong> Every major war has produced domestic repression — the Alien
          and Sedition Acts (1798), suspension of habeas corpus (Civil War), Palmer Raids (WWI), Japanese
          internment (WWII), McCarthyism (Cold War), COINTELPRO (Vietnam era), PATRIOT Act and mass
          surveillance (War on Terror). War is the health of the state — and the enemy of liberty.</li>
          <li><strong>Fiscal health:</strong> War spending has been the single largest contributor to
          the national debt throughout American history. The current $38 trillion debt is overwhelmingly
          attributable to military spending and its long-term consequences (veteran care, debt interest).</li>
          <li><strong>Opportunity cost:</strong> Every dollar spent on intervention is a dollar not spent
          on infrastructure, education, healthcare, or deficit reduction. The $8 trillion spent on the
          War on Terror could have rebuilt every bridge, highway, and water system in America — twice.</li>
          <li><strong>Veterans:</strong> 469 interventions have produced millions of veterans requiring
          care — an estimated 18 million living veterans today. The VA healthcare system is chronically
          underfunded and overwhelmed. An average of 17 veterans die by suicide every day.</li>
          <li><strong>Democratic erosion:</strong> The concentration of war power in the executive branch
          has fundamentally altered the constitutional balance. The president now commands a global military
          empire with virtually no congressional constraint. The republic designed by the Founders has been
          replaced by an imperial presidency.</li>
        </ul>
      </div>

      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <blockquote className="italic text-stone-700 text-lg">
          &ldquo;Of all the enemies to public liberty, war is, perhaps, the most to be dreaded, because
          it comprises and develops the germ of every other. War is the parent of armies; from these proceed
          debts and taxes; and armies, and debts, and taxes are the known instruments for bringing the many
          under the domination of the few.&rdquo;
        </blockquote>
        <p className="text-muted text-sm mt-2">— James Madison, &ldquo;Political Observations,&rdquo; April 20, 1795</p>
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

      {/* Categorizing the 469 */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Categorizing the 469: Types of Intervention</h2>
        <p className="text-muted mb-4">Not all interventions are the same. They fall into distinct categories that reveal the true priorities behind American military power:</p>
        <div className="space-y-4">
          {[
            { type: 'Protecting Commerce & Property', count: '~95', pct: '20%', desc: 'The original justification. From the Barbary Wars (1801) to protecting United Fruit Company assets in Central America to escorting oil tankers through the Persian Gulf. The through-line: American commerce must flow, and the military exists to ensure it.', era: '1798–present' },
            { type: 'Regime Change & Political Manipulation', count: '~45', pct: '10%', desc: 'Overthrowing governments that displease Washington. Iran (1953), Guatemala (1954), Chile (1973), Panama (1989), Iraq (2003), Libya (2011). The track record: uniformly catastrophic. Every regime change has produced instability, blowback, or both.', era: '1893–present' },
            { type: 'Counterterrorism / GWOT', count: '~85', pct: '18%', desc: 'The post-9/11 explosion. Special operations, drone strikes, training missions, and advisory deployments across 85+ countries. The 2001 AUMF — 60 words — has been used to justify military action in at least 22 countries.', era: '2001–present' },
            { type: 'Occupation & Peacekeeping', count: '~40', pct: '9%', desc: 'Long-term military presence: Philippines (1899-1946), Haiti (1915-34), Dominican Republic (1916-24), Germany (1945-present), Japan (1945-present), Korea (1950-present), Iraq (2003-2011). Some occupations lasted decades.', era: '1898–present' },
            { type: 'Naval Demonstrations / Gunboat Diplomacy', count: '~65', pct: '14%', desc: 'Parking warships off a country\'s coast to intimidate. The classic 19th-century tactic, but still used today — carrier strike groups deployed to the Taiwan Strait, Persian Gulf, and Mediterranean as "signals of resolve."', era: '1798–present' },
            { type: 'Evacuation / Protection of Citizens', count: '~55', pct: '12%', desc: 'Deploying troops to evacuate American citizens from danger zones. Often legitimate, but frequently used as a pretext for broader military involvement. The "protect American lives" justification has preceded nearly every major intervention.', era: '1798–present' },
            { type: 'Humanitarian Intervention', count: '~30', pct: '6%', desc: 'Somalia (1992), Bosnia (1995), Kosovo (1999), Haiti (2010). Ostensibly motivated by humanitarian concerns, but often entangled with strategic interests. Kosovo was also about NATO credibility. Somalia became Black Hawk Down.', era: '1898–present' },
            { type: 'Drug War / Interdiction', count: '~35', pct: '7%', desc: 'Military operations against drug traffickers in Colombia, Bolivia, Peru, Honduras, Mexico, and the Caribbean. Plan Colombia alone cost $10 billion. Cocaine is still flowing. The war on drugs abroad has been as unsuccessful as the one at home.', era: '1970–present' },
            { type: 'Covert / Classified', count: 'Unknown', pct: '?%', desc: 'CIA paramilitary operations, classified special operations deployments, cyber operations. By definition, these are not included in the CRS count of 469. The actual number of US military and paramilitary operations is certainly much higher.', era: '1947–present' },
          ].map((t, i) => (
            <div key={i} className="border-l-4 border-red-200 pl-4">
              <div className="flex items-center justify-between mb-1">
                <p className="font-bold">{t.type}</p>
                <span className="text-red-700 font-bold font-[family-name:var(--font-heading)]">{t.count}</span>
              </div>
              <p className="text-muted text-xs mb-1">{t.era} • ~{t.pct} of total</p>
              <p className="text-sm text-stone-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decade by decade acceleration */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Decade-by-Decade Acceleration</h2>
        <p className="text-stone-400 mb-6">The pace of intervention has accelerated dramatically over 228 years:</p>
        <div className="space-y-3">
          {[
            { decade: '1800s–1840s', count: 28, note: 'Barbary Wars, Indian wars, Mexican-American War' },
            { decade: '1850s–1890s', count: 72, note: 'Civil War era, Manifest Destiny, Spanish-American War' },
            { decade: '1900s–1910s', count: 25, note: 'Banana Wars begin, WWI' },
            { decade: '1920s–1930s', count: 12, note: 'Interwar period, relatively quiet' },
            { decade: '1940s', count: 13, note: 'WWII and immediate aftermath' },
            { decade: '1950s', count: 15, note: 'Korea, CIA coups (Iran, Guatemala), Lebanon' },
            { decade: '1960s', count: 18, note: 'Vietnam escalation, Dominican Republic, Congo' },
            { decade: '1970s', count: 14, note: 'Vietnam wind-down, Cambodia, Mayaguez' },
            { decade: '1980s', count: 21, note: 'Reagan buildup: Grenada, Lebanon, Libya, Central America' },
            { decade: '1990s', count: 72, note: 'Post-Cold War explosion: Gulf War, Somalia, Bosnia, Kosovo, Haiti' },
            { decade: '2000s', count: 85, note: 'War on Terror: Afghanistan, Iraq, global GWOT operations' },
            { decade: '2010s', count: 65, note: 'Libya, Syria, Yemen, ISIS, Africa expansion' },
            { decade: '2020s (5 years)', count: 29, note: 'Afghanistan withdrawal, Ukraine support, Red Sea, Iran' },
          ].map((d, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm font-mono text-stone-500 w-28 shrink-0">{d.decade}</span>
              <div className="flex-1 bg-stone-800 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-red-600 h-full rounded-full flex items-center pl-2"
                  style={{ width: `${(d.count / 90) * 100}%` }}
                >
                  <span className="text-white text-xs font-bold">{d.count}</span>
                </div>
              </div>
              <span className="text-stone-500 text-xs w-56 shrink-0">{d.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* The War Powers Resolution */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The War Powers Resolution: A Dead Letter</h2>
        <p>
          In 1973, Congress passed the War Powers Resolution over Nixon&apos;s veto, attempting to reassert
          its constitutional authority over military deployments. The law requires the president to:
        </p>
        <ol>
          <li>Notify Congress within 48 hours of deploying armed forces</li>
          <li>Withdraw forces within 60 days (extendable to 90) unless Congress authorizes continued deployment</li>
          <li>Withdraw forces at any time if Congress passes a concurrent resolution demanding it</li>
        </ol>
        <p>
          In the 52 years since its passage, <strong>every single president</strong> has declared the War Powers
          Resolution unconstitutional. None has complied with it in full. Presidents have routinely deployed
          forces and either ignored the 60-day clock entirely or argued that their particular military action
          doesn&apos;t constitute &ldquo;hostilities&rdquo; under the law.
        </p>
        <p>
          Obama&apos;s Libya intervention is the most egregious example. When US bombing of Libya exceeded the
          60-day limit in 2011, Obama&apos;s legal team argued that dropping bombs from aircraft, firing cruise
          missiles, and conducting drone strikes didn&apos;t constitute &ldquo;hostilities&rdquo; within the
          meaning of the War Powers Resolution — because no American ground troops were at risk. His own Office
          of Legal Counsel disagreed. He overruled them.
        </p>
        <p>
          The War Powers Resolution was Congress&apos;s one serious attempt to reclaim its constitutional war
          power. It has been a complete failure. The 469 interventions since 1798 include hundreds conducted
          after 1973 — and the pace has only accelerated. The law is a dead letter, ignored by every president
          and unenforced by every Congress.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The AUMF Problem: 60 Words That Changed Everything</h2>
        <p>
          On September 14, 2001 — three days after 9/11 — Congress passed the Authorization for Use of
          Military Force (AUMF) with a single dissenting vote (Barbara Lee, D-CA). The operative clause
          is just 60 words:
        </p>
      </div>

      <div className="bg-stone-100 rounded-xl p-6 my-8 border">
        <blockquote className="font-mono text-sm text-stone-700 leading-relaxed">
          &ldquo;That the President is authorized to use all necessary and appropriate force against those
          nations, organizations, or persons he determines planned, authorized, committed, or aided the
          terrorist attacks that occurred on September 11, 2001, or harbored such organizations or persons,
          in order to prevent any future acts of international terrorism against the United States by such
          nations, organizations or persons.&rdquo;
        </blockquote>
        <p className="text-muted text-sm mt-3">— Authorization for Use of Military Force, Public Law 107-40, September 18, 2001</p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <p>
          These 60 words have been used to justify military action in at least <strong>22 countries</strong>
          across four presidencies and 25 years. They were written to target al-Qaeda and the Taliban.
          They have been stretched to cover ISIS (which didn&apos;t exist until 2014), al-Shabaab in Somalia,
          various militias in Syria, Houthi rebels in Yemen, and groups in West Africa with tenuous or
          nonexistent connections to 9/11.
        </p>
        <p>
          The 2001 AUMF is the closest thing America has to a permanent authorization of global war. It has
          no geographic limitation, no time limit, and no requirement for the president to demonstrate that
          the target has any connection to the 9/11 attacks. It is, in practice, a blank check for endless
          war — and it remains in effect today, 25 years after the attacks it was written to address.
        </p>
        <p>
          Representative Barbara Lee — the sole &ldquo;no&rdquo; vote — warned from the floor of the House:
          &ldquo;Let us not become the evil that we deplore.&rdquo; Her warning was prophetic.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Libertarian Case: Empire Is the Enemy of Liberty</h2>
        <p>
          The libertarian critique of 469 military interventions is not a policy disagreement — it&apos;s a
          constitutional and philosophical one. The Founders explicitly designed a system where war-making
          power was divided, checked, and constrained. They did this because they understood — from centuries
          of European history — that executive war power is the greatest threat to liberty.
        </p>
        <p>
          James Madison wrote in 1795: &ldquo;Of all the enemies to public liberty, war is, perhaps, the most
          to be dreaded, because it comprises and develops the germ of every other. War is the parent of
          armies; from these proceed debts and taxes; and armies, and debts, and taxes are the known
          instruments for bringing the many under the domination of the few.&rdquo;
        </p>
        <p>
          The 469 interventions represent the systematic destruction of that constitutional design. The war
          power has migrated from Congress to the president. The standing army the Founders feared has become
          a global military empire. The debts and taxes Madison warned about have reached $38 trillion. And
          the liberties he sought to protect have been eroded by the surveillance state, the national security
          apparatus, and the culture of permanent emergency that 469 interventions have created.
        </p>
        <p>
          From a libertarian perspective, the CRS list is an indictment not just of interventionism but of the
          concentration of state power. Every intervention expanded executive authority. Every war created new
          bureaucracies. Every crisis justified new surveillance. The 469 aren&apos;t just military actions —
          they&apos;re 469 expansions of government power, each one ratcheting up the state&apos;s authority
          and ratcheting down individual liberty.
        </p>
        <p>
          As Ron Paul has argued for decades: you cannot have a republic and an empire. The 469 prove it.
          America has chosen empire — and the republic has suffered accordingly.
        </p>
      </div>

      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <blockquote className="italic text-stone-700 text-lg">
          &ldquo;A standing military force, with an overgrown Executive will not long be safe companions
          to liberty. The means of defence against foreign danger have been always the instruments of
          tyranny at home.&rdquo;
        </blockquote>
        <p className="text-muted text-sm mt-2">— James Madison, Constitutional Convention, June 29, 1787</p>
      </div>

      {/* The CRS Report */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">About the CRS Report: R42738</h2>
        <p>
          The Congressional Research Service report &ldquo;Instances of Use of United States Armed Forces
          Abroad, 1798–2024&rdquo; (report number R42738) is the primary source for the 469 figure. The CRS
          is Congress&apos;s nonpartisan research arm — it works exclusively for members of Congress and is
          generally considered the gold standard for policy research.
        </p>
        <p>
          The report has been updated regularly since its original publication. Each entry includes:
        </p>
        <ul>
          <li>Date and duration of the deployment</li>
          <li>Geographic location</li>
          <li>Brief description of the action</li>
          <li>Whether congressional authorization was obtained</li>
          <li>Legal authority cited by the president</li>
        </ul>
        <p>
          The CRS list is not comprehensive — it includes only reported deployments of the regular military
          and does not cover CIA operations, private contractors, cyber operations, or classified special
          operations. The true number of American military and paramilitary actions abroad is certainly
          much higher.
        </p>
        <p>
          The report is publicly available and can be accessed through the CRS website or
          EveryCRSReport.com. Every American should read it. It is perhaps the most important document most
          Americans have never heard of — a 228-year record of their government&apos;s addiction to war.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources &amp; Further Reading</h2>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>• Congressional Research Service. &ldquo;Instances of Use of United States Armed Forces Abroad, 1798–2024.&rdquo; Report R42738 (updated regularly)</li>
          <li>• Vine, David. <em>The United States of War</em>. University of California Press (2020)</li>
          <li>• Johnson, Chalmers. <em>Blowback: The Costs and Consequences of American Empire</em>. Metropolitan Books (2000)</li>
          <li>• Bacevich, Andrew. <em>The Age of Illusions: How America Squandered Its Cold War Victory</em>. Metropolitan Books (2020)</li>
          <li>• Paul, Ron. <em>A Foreign Policy of Freedom</em>. Foundation for Rational Economics and Education (2007)</li>
          <li>• Brown University Costs of War Project. <em>Multiple research papers</em> (2010-2024)</li>
          <li>• Kinzer, Stephen. <em>Overthrow: America&apos;s Century of Regime Change</em>. Times Books (2006)</li>
          <li>• Fisher, Louis. <em>Presidential War Power</em>. University Press of Kansas (3rd ed., 2013)</li>
          <li>• Madison, James. &ldquo;Political Observations.&rdquo; (1795)</li>
          <li>• Eisenhower, Dwight D. &ldquo;Farewell Address.&rdquo; January 17, 1961</li>
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
          <Link href="/analysis/iran-2026" className="text-red-800 hover:underline block">→ Iran 2026 — intervention #470</Link>
          <Link href="/analysis/ukraine-proxy" className="text-red-800 hover:underline block">→ Ukraine — $175B proxy war</Link>
          <Link href="/analysis/cost-per-life" className="text-red-800 hover:underline block">→ Cost Per Life — the price of each death</Link>
          <Link href="/analysis/jobs-vs-war" className="text-red-800 hover:underline block">→ Jobs vs War — military spending creates fewest jobs</Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
