import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Modern Wars — America\'s Post-1995 Military Operations',
  description: 'Since 1995, the US has launched 15+ military operations across dozens of countries including Kosovo, Afghanistan, Iraq, Libya, Syria, Yemen, and Iran. Each was supposed to be the last. Total cost: trillions. Drones, special ops, proxy wars, AUMF abuse.',
  alternates: { canonical: 'https://www.warcosts.org/modern-wars' },
  keywords: ['modern wars', 'us wars 21st century', 'forever wars', 'war on terror', 'us military operations', 'us wars list current'],
  openGraph: {
    title: 'The Forever Wars — America\'s 21st Century Military Operations',
    description: 'Each war was supposed to be the last. None of them were.',
    url: 'https://warcosts.org/modern-wars',
    type: 'article',
  },
}

const escalationPattern = [
  { year: '1995', conflict: 'Bosnia (Deliberate Force)', promise: '"Limited air campaign to stop ethnic cleansing"', reality: '30,000 US troops deployed as peacekeepers; introduced "humanitarian intervention" doctrine', cost: '$4B+' },
  { year: '1999', conflict: 'Kosovo (Allied Force)', promise: '"78 days of airstrikes, no ground troops"', reality: 'Bombed Yugoslavia without UN authorization; 4,000 US troops remain in Kosovo today, 26 years later', cost: '$5B+' },
  { year: '2001', conflict: 'Afghanistan (Enduring Freedom)', promise: '"Get bin Laden, destroy al-Qaeda"', reality: '20-year nation-building project; $2.3 trillion spent; Taliban now controls the country again', cost: '$2.3T' },
  { year: '2003', conflict: 'Iraq (Iraqi Freedom)', promise: '"Weeks, not months" — Rumsfeld; WMDs', reality: '8 years of war, 200,000+ Iraqi deaths, no WMDs found, ISIS emerged from the wreckage', cost: '$2.4T' },
  { year: '2004', conflict: 'Somalia (AFRICOM)', promise: '"Advisory and counterterrorism support"', reality: '20+ years of drone strikes and special ops; al-Shabaab still operational; ~900 airstrikes', cost: '$5B+' },
  { year: '2011', conflict: 'Libya (Odyssey Dawn)', promise: '"Days, not weeks" — Obama', reality: 'Months of bombing; Gaddafi killed; Libya became a failed state with open slave markets', cost: '$2B+' },
  { year: '2014', conflict: 'Syria (Inherent Resolve)', promise: '"No boots on the ground"', reality: '2,000+ US troops deployed; bombed multiple sides; Assad survived; Russia and Iran filled vacuum', cost: '$14B+' },
  { year: '2014', conflict: 'ISIS Campaign (Iraq/Syria)', promise: '"Degrade and ultimately destroy ISIS"', reality: 'ISIS territorial defeat but ideology survived; cells active across Africa and Asia', cost: '$100B+' },
  { year: '2015', conflict: 'Yemen (Saudi Coalition support)', promise: '"Limited advisory and logistics"', reality: 'US-made bombs killed thousands of civilians; 377,000 dead; worst humanitarian crisis on Earth', cost: '$5B+' },
  { year: '2017', conflict: 'Niger (SOF deployment)', promise: '"Training and advising"', reality: '4 US soldiers killed in ambush America didn\'t know about; troops in 15+ African nations', cost: '$500M+' },
  { year: '2022', conflict: 'Ukraine (proxy support)', promise: '"Support Ukraine sovereignty"', reality: '$175B+ in aid; largest proxy war since Cold War; no exit strategy; escalation risk with nuclear power', cost: '$175B+' },
  { year: '2024', conflict: 'Red Sea (Prosperity Guardian)', promise: '"Protect shipping from Houthis"', reality: 'Ongoing strikes against Yemen; $1B+ in missiles fired at one of the poorest countries on Earth', cost: '$2B+' },
  { year: '2026', conflict: 'Iran (developing)', promise: '"Prevent nuclear capability"', reality: 'US strikes on Iranian nuclear and military facilities; no congressional authorization; escalation risk', cost: 'TBD' },
]

const modernWarfareFeatures = [
  { feature: 'Drone Warfare', detail: 'Obama authorized 563 drone strikes (10× more than Bush). Trump removed transparency rules. Estimated 1,700+ civilians killed by drones. Operators in Nevada kill people in Yemen via joystick.', stat: `${563 + 57}+ strikes (2004–2020)` },
  { feature: 'Special Operations', detail: 'US SOF deployed to 70–80 countries at any time. Conduct raids, train foreign forces, carry out kill/capture missions. When Green Berets died in Niger (2017), Americans were shocked to learn troops were there.', stat: '70+ countries' },
  { feature: 'Private Contractors', detail: 'In Iraq, contractors (180,000) outnumbered US troops (157,000) at peak. Blackwater massacre in Nisour Square killed 17 Iraqi civilians. Contractors don\'t appear in casualty counts.', stat: '180,000 peak in Iraq' },
  { feature: 'Proxy Warfare', detail: 'US arms and funds allies to fight on its behalf. Saudi Arabia in Yemen. Various factions in Syria. Ukraine against Russia. Allows war without US casualties but with US weapons and money.', stat: '$175B+ to Ukraine alone' },
  { feature: 'Cyber Warfare', detail: 'Stuxnet (US/Israel) destroyed Iranian centrifuges. US Cyber Command conducts offensive operations. Budget is classified. The new domain of warfare is invisible.', stat: 'Budget classified' },
  { feature: 'AI & Autonomous Weapons', detail: 'DOD investing billions in AI-powered targeting, autonomous drones, and decision support. "Project Maven" uses AI to identify drone strike targets. Raises fundamental ethical questions.', stat: '$2B+/year in DOD AI' },
  { feature: 'Debt-Financed Wars', detail: 'Every post-9/11 war funded by borrowing, not taxes. Taxes were actually CUT during wartime — unprecedented in US history. Interest alone will exceed $3 trillion by 2050.', stat: '$1.1T+ in interest' },
  { feature: 'AUMF Abuse', detail: 'The 60-word 2001 AUMF has been used to justify operations in 22+ countries against groups that didn\'t exist when it was passed. Congress has refused to update or repeal it for 24 years.', stat: '22+ countries under 60 words' },
]

const casualtyTrends = [
  { conflict: 'World War II', usDead: 405399, civDead: 50000000, ratio: '~120:1 civilian-to-US', civPct: '67%' },
  { conflict: 'Korea', usDead: 36574, civDead: 2000000, ratio: '~55:1', civPct: '70%' },
  { conflict: 'Vietnam', usDead: 58220, civDead: 2000000, ratio: '~34:1', civPct: '65%' },
  { conflict: 'Gulf War', usDead: 383, civDead: 3500, ratio: '~9:1', civPct: '60%' },
  { conflict: 'Iraq', usDead: 4599, civDead: 200000, ratio: '~43:1', civPct: '80%+' },
  { conflict: 'Afghanistan', usDead: 2461, civDead: 70000, ratio: '~28:1', civPct: '70%' },
  { conflict: 'War on Terror (all)', usDead: 7074, civDead: 940000, ratio: '~133:1', civPct: '85%+' },
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
          Iraq was the catastrophe. And still, the pattern repeats — now with Iran.
        </p>

        <div className="space-y-6">
          {escalationPattern.map(e => (
            <div key={e.year + e.conflict} className="bg-white rounded-xl border p-6">
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

      {/* How modern wars are different */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">How Modern Wars Are Fought Differently</h2>
          <p className="text-stone-600 mb-8 max-w-3xl">
            Modern American wars bear little resemblance to the mass-mobilization conflicts of the 20th century.
            No draft. No war bonds. No rationing. No shared sacrifice. Instead: drones, special ops, contractors,
            proxy forces, and debt. This transformation has made war invisible — and therefore permanent.
          </p>

          <div className="space-y-4">
            {modernWarfareFeatures.map(f => (
              <div key={f.feature} className="bg-white rounded-lg border p-5">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold">{f.feature}</h3>
                  <span className="text-red-800 font-semibold text-sm">{f.stat}</span>
                </div>
                <p className="text-stone-500 text-sm">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep analysis */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose text-stone-600">
          <h2 className="font-[family-name:var(--font-heading)]">The Five Reasons Modern Wars Never End</h2>
          <ol>
            <li>
              <strong>No draft = no accountability.</strong> When the sons and daughters of senators and
              CEOs aren&apos;t at risk, there is no political cost to war. The all-volunteer force, created
              after Vietnam specifically to avoid antiwar protests, has succeeded: Americans barely notice
              when their country is at war. Less than 1% of Americans serve — the lowest proportion in
              the nation&apos;s history.
            </li>
            <li>
              <strong>Drones remove the human face of war.</strong> When a pilot in Nevada kills a family in
              Yemen via joystick, there is no body bag, no grieving hometown, no TV coverage. Obama authorized
              563 drone strikes. Trump removed the requirement to report civilian casualties. The strikes
              continue under every administration because they are politically costless.
            </li>
            <li>
              <strong>Debt financing hides the cost.</strong> Every post-9/11 war has been funded through
              borrowing — and taxes were actually <em>cut</em> during wartime. Americans feel no financial
              pinch from war because the bill is pushed to the future. The interest alone will exceed $3
              trillion by 2050.
            </li>
            <li>
              <strong>The military-industrial complex profits from perpetual war.</strong> The top five defense
              contractors received {fmtMoney(stats.defenseContractorSpending)} in Pentagon contracts from 2020–2024.
              They employ {fmt(stats.revolvingDoorOfficials)}+ former senior DOD officials as lobbyists and consultants.
              Peace is bad for business. The system has no incentive to end wars and every incentive to start new ones.
            </li>
            <li>
              <strong>Each war creates the next.</strong> Gulf War → US bases in Saudi Arabia → bin Laden radicalized → 9/11.
              Afghanistan → Pakistan destabilized → safe havens persist. Iraq → state collapse → ISIS.
              Libya → weapons flood Sahel → Niger, Mali. Yemen → Houthis empowered → Red Sea attacks.
              The cycle is self-perpetuating.
            </li>
          </ol>

          <blockquote className="border-l-4 border-red-800">
            &ldquo;A people that values its privileges above its principles soon loses both.&rdquo;
            <br />— Dwight D. Eisenhower
          </blockquote>

          <h2 className="font-[family-name:var(--font-heading)]">The Civilian Casualty Trend</h2>
          <p>
            Despite advances in &ldquo;precision&rdquo; weapons, the ratio of civilian deaths in modern wars
            has <strong>worsened dramatically</strong>:
          </p>
        </div>
      </section>

      {/* Casualty trends table */}
      <section className="max-w-3xl mx-auto px-4 pb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-100">
              <tr>
                <th className="text-left p-3 font-[family-name:var(--font-heading)]">Conflict</th>
                <th className="text-right p-3 font-[family-name:var(--font-heading)]">US Dead</th>
                <th className="text-right p-3 font-[family-name:var(--font-heading)]">Civilian Dead</th>
                <th className="text-right p-3 font-[family-name:var(--font-heading)]">Ratio</th>
                <th className="text-right p-3 font-[family-name:var(--font-heading)]">Civilian %</th>
              </tr>
            </thead>
            <tbody>
              {casualtyTrends.map(c => (
                <tr key={c.conflict} className="border-t border-stone-200">
                  <td className="p-3 font-medium">{c.conflict}</td>
                  <td className="p-3 text-right">{fmt(c.usDead)}</td>
                  <td className="p-3 text-red-800 font-semibold text-right">{fmt(c.civDead)}</td>
                  <td className="p-3 text-stone-500 text-right text-xs">{c.ratio}</td>
                  <td className="p-3 text-stone-500 text-right">{c.civPct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-stone-50 py-16">
        <div className="max-w-3xl mx-auto px-4 prose text-stone-600">
          <p>
            &ldquo;Precision&rdquo; weapons have not made war more humane — they have made it easier to wage,
            which means it is waged more often, in more places, with less accountability. When you can drop a
            bomb from 30,000 feet and call it &ldquo;surgical,&rdquo; war becomes acceptable to publics that
            would revolt at footage of ground combat. The distance between the killer and the killed insulates
            both from moral reckoning.
          </p>

          <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
            <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
            <p className="text-amber-800">
              During the peak of the Iraq War, there were <strong>more private military contractors</strong> (180,000)
              in Iraq than US soldiers (157,000). Blackwater (now Academi) alone had over 1,000 armed operatives.
              In 2007, Blackwater guards killed 17 Iraqi civilians in Nisour Square, Baghdad. Four guards were
              convicted — then pardoned by President Trump in 2020.
            </p>
          </div>

          <h2 className="font-[family-name:var(--font-heading)]">The &ldquo;Indispensable Nation&rdquo; Myth</h2>
          <p>
            In 1998, Secretary of State Madeleine Albright declared: &ldquo;If we have to use force, it is
            because we are America. We are the indispensable nation.&rdquo; This belief has been the ideological
            engine of every post-Cold War intervention. The record:
          </p>
          <ul>
            <li><strong>Bosnia:</strong> Relative success — but Europe could have handled it</li>
            <li><strong>Kosovo:</strong> NATO won the air war but created a weak, corrupt state</li>
            <li><strong>Afghanistan:</strong> 20 years, $2.3T, Taliban is back</li>
            <li><strong>Iraq:</strong> Destabilized the entire Middle East, birthed ISIS</li>
            <li><strong>Libya:</strong> Created a failed state with open slave markets</li>
            <li><strong>Syria:</strong> Achieved nothing; Assad survived; Russia and Iran won</li>
            <li><strong>Yemen:</strong> Made the world&apos;s worst humanitarian crisis worse</li>
            <li><strong>Somalia:</strong> 20+ years of strikes, al-Shabaab still operational</li>
          </ul>
          <p>
            Military power cannot build nations, cannot impose democracy, and cannot resolve the political,
            ethnic, and religious conflicts that drive most wars. America has spent trillions learning this
            lesson — and keeps refusing to learn it.
          </p>

          <h2 className="font-[family-name:var(--font-heading)]">Iran 2026: The Pattern Repeats</h2>
          <p>
            In early 2026, the United States launched military strikes against Iranian nuclear and military
            facilities — without congressional authorization. The justification: preventing Iran from
            developing nuclear weapons capability. The pattern is familiar:
          </p>
          <ul>
            <li><strong>Threat inflation:</strong> Iran&apos;s nuclear program framed as existential threat to US</li>
            <li><strong>No congressional vote:</strong> President cited Article II authority and 2002 Iraq AUMF</li>
            <li><strong>Promise of limited scope:</strong> &ldquo;Targeted strikes, not regime change&rdquo;</li>
            <li><strong>Escalation risk:</strong> Iran has allies throughout the region; Hezbollah, Iraqi militias, Houthis</li>
            <li><strong>No exit strategy:</strong> What happens after the strikes? Nobody can say.</li>
          </ul>
          <p>
            Whether Iran becomes the next Iraq or remains &ldquo;limited&rdquo; is an open question. But the
            pattern — promise limits, escalate, get stuck — has repeated too many times to ignore.
          </p>

          <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
            <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
            <p className="text-amber-800">
              The 2001 Authorization for Use of Military Force (AUMF) — just <strong>60 words</strong> —
              has been used to justify military operations in at least <strong>22 countries</strong> across
              two decades. It was passed with a single dissenting vote (Barbara Lee, D-CA), who warned:
              &ldquo;Let us not become the evil we deplore.&rdquo; Twenty-four years later, it remains the
              legal basis for America&apos;s global war.
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
            <li>Iran strikes (2026) risk regional escalation → which could involve Hezbollah, Iraq, Yemen → which would require... more war</li>
          </ul>
          <p>
            The cycle is self-sustaining — and enormously profitable for the defense industry. There is always a new threat,
            always a new enemy, always a new reason to spend another trillion dollars. The wars never end because
            they were never meant to.
          </p>

          <blockquote className="border-l-4 border-red-800">
            &ldquo;They that can give up essential liberty to obtain a little temporary safety
            deserve neither liberty nor safety.&rdquo;
            <br />— Benjamin Franklin
          </blockquote>

          <blockquote className="border-l-4 border-red-800">
            &ldquo;War is a racket. It always has been. It is the only one in which the profits are
            reckoned in dollars and the losses in lives.&rdquo;
            <br />— Major General Smedley Butler, USMC, 1935
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
              What&apos;s Next: Iran 2026 →
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
            <li><Link href="/analysis/iran-2026" className="text-red-800 hover:underline">→ Iran 2026 — The newest forever war</Link></li>
            <li><Link href="/analysis/drone-wars" className="text-red-800 hover:underline">→ Drone Wars — Killing by remote control</Link></li>
            <li><Link href="/analysis/blowback" className="text-red-800 hover:underline">→ Blowback — How interventions create new enemies</Link></li>
            <li><Link href="/veteran-suicide" className="text-red-800 hover:underline">→ Veteran Suicide — The war that follows them home</Link></li>
            <li><Link href="/cost-of-war" className="text-red-800 hover:underline">→ Cost of War — $11.3 trillion and counting</Link></li>
            <li><Link href="/analysis/ukraine-proxy" className="text-red-800 hover:underline">→ Ukraine — The $175B proxy war</Link></li>
          </ul>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
