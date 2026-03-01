import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Modern Wars — America\'s Post-1995 Military Operations | WarCosts',
  description: 'Since 1995, the US has launched 15+ military operations across dozens of countries. Each was supposed to be the last. Total cost: trillions. Total accountability: zero.',
  keywords: ['modern wars', 'us wars 21st century', 'forever wars', 'war on terror', 'us military operations'],
  openGraph: {
    title: 'The Forever Wars — America\'s 21st Century Military Operations',
    description: 'Each war was supposed to be the last. None of them were.',
    url: 'https://warcosts.org/modern-wars',
    type: 'article',
  },
}

const escalationPattern = [
  { year: '1995', conflict: 'Bosnia (Deliberate Force)', promise: '"Limited air campaign to stop ethnic cleansing"', reality: '30,000 US troops deployed as peacekeepers; introduced "humanitarian intervention" doctrine', cost: '$4B+' },
  { year: '1999', conflict: 'Kosovo (Allied Force)', promise: '"78 days of airstrikes, no ground troops"', reality: 'Bombed Yugoslavia without UN authorization; 4,000 US troops remain in Kosovo today', cost: '$5B+' },
  { year: '2001', conflict: 'Afghanistan (Enduring Freedom)', promise: '"Get bin Laden, destroy al-Qaeda"', reality: '20-year nation-building project; Taliban now controls the country again', cost: '$2.3T' },
  { year: '2003', conflict: 'Iraq (Iraqi Freedom)', promise: '"Weeks, not months" — Rumsfeld', reality: '8 years of war, 200,000+ Iraqi deaths, ISIS emerged from the wreckage', cost: '$2.4T' },
  { year: '2011', conflict: 'Libya (Odyssey Dawn)', promise: '"Days, not weeks" — Obama', reality: 'Months of bombing; Gaddafi killed; Libya became a failed state with open slave markets', cost: '$2B+' },
  { year: '2014', conflict: 'Syria (Inherent Resolve)', promise: '"No boots on the ground"', reality: '2,000+ US troops deployed; bombed multiple sides; Assad survived', cost: '$14B+' },
  { year: '2015', conflict: 'Yemen (Saudi Coalition support)', promise: '"Limited advisory and logistics"', reality: 'US-made bombs killed thousands of civilians; 377,000 dead; worst humanitarian crisis', cost: '$5B+' },
  { year: '2024', conflict: 'Red Sea (Prosperity Guardian)', promise: '"Protect shipping from Houthis"', reality: 'Ongoing strikes against Yemen — another war nobody voted for', cost: 'TBD' },
]

export default function ModernWarsPage() {
  const conflicts = loadData('conflicts.json')
  const stats = loadData('stats.json')

  const modern = conflicts
    .filter((c: any) => c.startYear >= 1995)
    .sort((a: any, b: any) => b.startYear - a.startYear)

  const totalCost = modern.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalUSDeaths = modern.reduce((s: number, c: any) => s + (c.usCasualties?.deaths || 0), 0)
  const totalCivDeaths = modern.reduce((s: number, c: any) => s + (c.civilianDeaths || 0), 0)
  const ongoingCount = modern.filter((c: any) => !c.endYear).length
  const countriesSet = new Set<string>()
  modern.forEach((c: any) => c.countries?.forEach((x: string) => countriesSet.add(x)))
  const noAuth = modern.filter((c: any) => !c.congressionalAuth).length

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Forever Wars — America\'s Post-1995 Military Operations',
    url: 'https://warcosts.org/modern-wars',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-01-01',
    dateModified: '2025-03-01',
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-stone-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-red-500 font-semibold tracking-wide uppercase text-sm mb-4">1995 – Present</p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            The Forever Wars
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            America&apos;s 21st Century Military Operations
          </p>
          <p className="text-stone-500 max-w-2xl mx-auto mb-12">
            Since 1995, the United States has launched {modern.length} military operations across {countriesSet.size} countries.
            {ongoingCount} are still ongoing. {noAuth} were never authorized by Congress.
            Each one was supposed to be the last.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{fmtMoney(totalCost)}</p>
              <p className="text-stone-400 text-sm mt-1">Total Cost Since 1995</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{fmt(totalUSDeaths + totalCivDeaths)}</p>
              <p className="text-stone-400 text-sm mt-1">Total Deaths</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{ongoingCount}</p>
              <p className="text-stone-400 text-sm mt-1">Ongoing Operations</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{countriesSet.size}</p>
              <p className="text-stone-400 text-sm mt-1">Countries Involved</p>
            </div>
          </div>

          <ShareButtons title="The Forever Wars — America's 21st Century Military Operations" />

          <div className="bg-red-900/30 border border-red-800 rounded-xl p-6 max-w-3xl mx-auto mt-8">
            <p className="text-red-400 font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">
              {stats.undeclaredWars} of {stats.totalConflicts} US wars were never declared by Congress
            </p>
            <p className="text-stone-400 text-sm">
              The Constitution requires congressional authorization. Presidents have ignored this for nearly every conflict since WWII.
            </p>
          </div>
        </div>
      </section>

      {/* War on Terror callout */}
      <section className="bg-red-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-3">
            Since September 11, 2001
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">{fmtMoney(stats.warOnTerrorCost)}</p>
              <p className="text-red-200 text-sm">War on Terror cost</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">{fmt(stats.warOnTerrorDeaths)}</p>
              <p className="text-red-200 text-sm">Directly killed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">{stats.counterterrorCountries}</p>
              <p className="text-red-200 text-sm">Countries with operations</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">{(stats.warOnTerrorDisplaced / 1e6).toFixed(0)}M</p>
              <p className="text-red-200 text-sm">People displaced</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/analysis/war-on-terror" className="text-red-200 hover:text-white underline text-sm">Full War on Terror Analysis →</Link>
            <Link href="/analysis/forever-wars" className="text-red-200 hover:text-white underline text-sm">How 60 Words Enabled It All →</Link>
          </div>
        </div>
      </section>

      {/* Escalation pattern */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">The Pattern of Escalation</h2>
        <p className="text-stone-600 mb-8 max-w-3xl">
          Every modern US military operation follows the same arc: limited goals, bold promises,
          gradual escalation, and no exit strategy. Kosovo was the model. Afghanistan was the warning.
          Iraq was the catastrophe. And still, the pattern repeats.
        </p>

        <div className="space-y-6">
          {escalationPattern.map(e => (
            <div key={e.year} className="bg-white rounded-xl border p-6">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-red-800 font-bold font-[family-name:var(--font-heading)] text-xl">{e.year}</span>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">{e.conflict}</h3>
                <span className="text-red-800 font-semibold text-sm ml-auto">{e.cost}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <p className="text-green-800 text-xs font-semibold uppercase mb-1">What they promised</p>
                  <p className="text-green-900 text-sm">{e.promise}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <p className="text-red-800 text-xs font-semibold uppercase mb-1">What actually happened</p>
                  <p className="text-red-900 text-sm">{e.reality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deep analysis */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-3xl mx-auto px-4 prose text-stone-600">
          <h2 className="font-[family-name:var(--font-heading)]">How Modern Wars Are Fought Differently</h2>
          <p>
            Modern American wars bear little resemblance to the mass-mobilization conflicts of the 20th century.
            No draft. No war bonds. No rationing. No shared sacrifice. Instead, wars are fought by a small
            professional military (less than 1% of the population), supplemented by private contractors,
            enabled by drones and special operations forces, and financed entirely through borrowing.
          </p>
          <p>
            This transformation has profound consequences for democratic accountability:
          </p>
          <ul>
            <li>
              <strong>No draft = no accountability.</strong> When the sons and daughters of senators and
              CEOs aren&apos;t at risk, there is no political cost to war. The all-volunteer force, created
              after Vietnam specifically to avoid antiwar protests, has succeeded: Americans barely notice
              when their country is at war.
            </li>
            <li>
              <strong>Drones remove the human face of war.</strong> When a pilot in Nevada kills a family in
              Yemen via joystick, there is no body bag, no grieving hometown, no TV coverage. Drone warfare
              makes killing feel like a video game — for the operators and for the public.
            </li>
            <li>
              <strong>Special operations forces operate in the shadows.</strong> US special forces are deployed
              in 70–80 countries at any given time, training foreign forces, conducting raids, and carrying
              out missions the public knows nothing about. When a Green Beret dies in Niger, Americans are
              shocked to learn we have troops there at all.
            </li>
            <li>
              <strong>Private contractors outnumber soldiers.</strong> In Iraq, contractors outnumbered US
              troops at peak deployment. They perform security, logistics, intelligence, and even interrogation.
              When contractors die, they don&apos;t appear in casualty counts. When they kill civilians, they
              operate in a legal gray zone.
            </li>
            <li>
              <strong>Debt financing hides the cost.</strong> Every post-9/11 war has been funded through
              borrowing — and taxes were actually <em>cut</em> during wartime. Americans feel no financial
              pinch from war because the bill is pushed to the future. The interest alone will exceed $3
              trillion by 2050.
            </li>
          </ul>

          <blockquote className="border-l-4 border-red-800">
            &ldquo;A people that values its privileges above its principles soon loses both.&rdquo;
            <br />— Dwight D. Eisenhower
          </blockquote>

          <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
            <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
            <p className="text-amber-800">
              During the peak of the Iraq War, there were <strong>more private military contractors</strong> (180,000)
              in Iraq than US soldiers (157,000). Blackwater (now Academi) alone had over 1,000 armed operatives.
              When four Blackwater contractors were killed in Fallujah in 2004, the US launched a devastating
              assault on the city that killed an estimated 800 civilians.
            </p>
          </div>

          <h2 className="font-[family-name:var(--font-heading)]">The Civilian Casualty Trend</h2>
          <p>
            Despite advances in &ldquo;precision&rdquo; weapons, the ratio of civilian-to-combatant deaths in
            modern wars has <strong>worsened dramatically</strong> over the past century:
          </p>
          <ul>
            <li><strong>World War I:</strong> Roughly 50% civilian deaths</li>
            <li><strong>World War II:</strong> Roughly 67% civilian deaths</li>
            <li><strong>Korean War:</strong> Roughly 70% civilian deaths</li>
            <li><strong>Vietnam War:</strong> Roughly 65% civilian deaths</li>
            <li><strong>Iraq War:</strong> Over 80% civilian deaths</li>
            <li><strong>War on Terror (all theaters):</strong> Over 85% civilian deaths</li>
            <li><strong>Gaza (2023–24):</strong> Over 90% civilian deaths (per health ministry data)</li>
          </ul>
          <p>
            &ldquo;Precision&rdquo; weapons have not made war more humane — they have made it easier to wage,
            which means it is waged more often, in more places, with less accountability. When you can drop a
            bomb from 30,000 feet and call it &ldquo;surgical,&rdquo; war becomes acceptable to publics that
            would revolt at footage of ground combat. The distance between the killer and the killed insulates
            both from moral reckoning.
          </p>

          <h2 className="font-[family-name:var(--font-heading)]">The &ldquo;Indispensable Nation&rdquo; Myth</h2>
          <p>
            In 1998, Secretary of State Madeleine Albright declared: &ldquo;If we have to use force, it is
            because we are America. We are the indispensable nation.&rdquo; This belief — that America has a
            unique right and obligation to use military force anywhere in the world — has been the ideological
            engine of every post-Cold War intervention.
          </p>
          <p>
            The record does not support the myth. Bosnia: relative success, but Europe could have handled it.
            Kosovo: NATO won the air war but created a weak, corrupt state. Afghanistan: 20 years, $2.3 trillion,
            and the Taliban is back. Iraq: destabilized the entire Middle East and gave birth to ISIS. Libya:
            created a failed state. Syria: achieved nothing. Yemen: made the world&apos;s worst humanitarian
            crisis worse.
          </p>
          <p>
            In each case, the US intervened believing it could reshape foreign societies through military force.
            In each case, it couldn&apos;t. The &ldquo;indispensable nation&rdquo; has spent trillions of dollars
            and hundreds of thousands of lives learning — and refusing to learn — that military power cannot
            build nations, cannot impose democracy, and cannot resolve the political, ethnic, and religious
            conflicts that drive most wars.
          </p>

          <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
            <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
            <p className="text-amber-800">
              The 2001 Authorization for Use of Military Force (AUMF) — just <strong>60 words</strong> —
              has been used to justify military operations in at least <strong>22 countries</strong> across
              two decades. It was passed with a single dissenting vote (Barbara Lee, D-CA), who warned:
              &ldquo;Let us not become the evil we deplore.&rdquo; She was right.
            </p>
          </div>

          <h2 className="font-[family-name:var(--font-heading)]">Each War Creates the Next</h2>
          <p>
            The most insidious feature of modern American warfare is its self-perpetuating nature:
          </p>
          <ul>
            <li>The Gulf War (1991) left US bases in Saudi Arabia → which radicalized Osama bin Laden → which caused 9/11</li>
            <li>Afghanistan (2001) destabilized Pakistan → which became a safe haven for terror groups → which justified more operations</li>
            <li>Iraq (2003) destroyed state institutions → which created ISIS → which required intervention in Syria</li>
            <li>Libya (2011) created a failed state → which flooded weapons across North Africa → which destabilized the Sahel</li>
            <li>Yemen support (2015) empowered Houthis as resistance figures → which led to Red Sea attacks → which requires new strikes (2024)</li>
          </ul>
          <p>
            Each intervention produces blowback that becomes the justification for the next intervention.
            The cycle is self-sustaining — and enormously profitable for the defense industry that fuels it.
            There is always a new threat, always a new enemy, always a new reason to spend another trillion dollars.
            The wars never end because they were never meant to.
          </p>

          <blockquote className="border-l-4 border-red-800">
            &ldquo;We have been the cowards, lobbing cruise missiles from 2,000 miles away.
            That&apos;s cowardly. Staying in the airplane when it hits the building — say what you
            want about it, it&apos;s not cowardly.&rdquo;
            <br />— Bill Maher, September 17, 2001 (fired for saying it)
          </blockquote>

          <blockquote className="border-l-4 border-red-800">
            &ldquo;They that can give up essential liberty to obtain a little temporary safety
            deserve neither liberty nor safety.&rdquo;
            <br />— Benjamin Franklin
          </blockquote>
        </div>
      </section>

      {/* Conflicts list */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <Breadcrumbs items={[{ label: 'Modern Wars' }]} />
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">All Post-1995 Operations</h2>

        <div className="space-y-6">
          {modern.map((c: any) => {
            const isOngoing = !c.endYear
            return (
              <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-xl border hover:shadow-lg transition p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  {isOngoing && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold animate-pulse">● ONGOING</span>
                  )}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    c.congressionalAuth ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>{c.congressionalAuth ? 'Authorized' : 'No Authorization'}</span>
                  <span className="text-xs text-stone-500">{c.type?.replace(/_/g, ' ')}</span>
                </div>
                <div className="md:flex md:justify-between md:items-start">
                  <div className="mb-3 md:mb-0">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{c.name}</h3>
                    <p className="text-stone-500 text-sm">{c.startYear}–{c.endYear || 'Present'} · {c.region} · {c.countries?.join(', ')}</p>
                    <p className="text-stone-500 text-sm mt-1 max-w-2xl">{c.description?.slice(0, 200)}...</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center shrink-0">
                    <div>
                      <p className="font-bold text-red-800 font-[family-name:var(--font-heading)]">{fmtMoney(c.costInflationAdjusted)}</p>
                      <p className="text-xs text-stone-500">Cost</p>
                    </div>
                    <div>
                      <p className="font-bold text-red-800 font-[family-name:var(--font-heading)]">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) : '—'}</p>
                      <p className="text-xs text-stone-500">US Deaths</p>
                    </div>
                    <div>
                      <p className="font-bold text-red-800 font-[family-name:var(--font-heading)]">{c.civilianDeaths ? fmt(c.civilianDeaths) : '—'}</p>
                      <p className="text-xs text-stone-500">Civilians</p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">The wars continue. The costs grow.</h2>
          <p className="text-stone-400 mb-8">
            At {fmtMoney(stats.costPerSecond)} per second, every minute you spend on this page costs taxpayers {fmtMoney(stats.costPerMinute)}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools/cost-calculator" className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Calculate Your Personal War Cost →
            </Link>
            <Link href="/analysis/forever-wars" className="border border-stone-600 hover:border-stone-400 text-white px-6 py-3 rounded-lg font-semibold transition">
              How 60 Words Changed Everything →
            </Link>
            <Link href="/analysis/iran-2026" className="border border-red-700 hover:border-red-500 text-red-400 px-6 py-3 rounded-lg font-semibold transition">
              What&apos;s Next: Iran? →
            </Link>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-stone-50 rounded-lg p-6 border">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
          <ul className="space-y-2">
            <li><Link href="/conflicts" className="text-red-800 hover:underline">→ All Conflicts — Every US war since 1776</Link></li>
            <li><Link href="/analysis/forever-wars" className="text-red-800 hover:underline">→ Forever Wars — The 60 words that enabled it all</Link></li>
            <li><Link href="/analysis/iran-2026" className="text-red-800 hover:underline">→ Iran 2026 — Is the next war already planned?</Link></li>
            <li><Link href="/analysis/drone-wars" className="text-red-800 hover:underline">→ Drone Wars — Killing by remote control</Link></li>
            <li><Link href="/veteran-suicide" className="text-red-800 hover:underline">→ Veteran Suicide — The war that follows them home</Link></li>
            <li><Link href="/cost-of-war" className="text-red-800 hover:underline">→ Cost of War — $11.3 trillion and counting</Link></li>
          </ul>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
