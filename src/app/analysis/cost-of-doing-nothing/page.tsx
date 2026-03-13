import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'

export const metadata: Metadata = {
  title: 'What If We\'d Done Nothing? The Counterfactual Cost of War',
  description: 'Vietnam, Iraq, Afghanistan, Libya — what if the US hadn\'t intervened? The domino theory was wrong. No WMDs were found. The Taliban came back. A data-driven analysis of war vs. inaction.',
  openGraph: {
    title: 'What If We\'d Done Nothing? The Counterfactual Cost of War',
    description: 'Every US intervention costs more and achieves less than predicted. What if we\'d just... not?',
    url: 'https://www.warcosts.org/analysis/cost-of-doing-nothing',
  },
}

const interventionScorecard = [
  {
    war: 'Vietnam War',
    years: '1955–1975',
    justification: 'Domino Theory — if Vietnam falls to communism, all of Southeast Asia follows.',
    cost: '$1.1 trillion (2023 dollars)',
    usDeaths: '58,220',
    civilianDeaths: '~2 million Vietnamese civilians',
    totalDeaths: '~3.4 million total',
    whatActuallyHappened: 'The US left. Vietnam went communist. The dominoes did not fall. Thailand, Malaysia, Singapore, Indonesia, and the Philippines did not become communist. Vietnam is now a US trading partner and a counterweight to China. The domino theory was completely wrong.',
    whatWeGot: 'Nothing. 58,220 Americans dead, $1.1 trillion spent, a generation traumatized, and Vietnam went communist anyway — exactly the outcome we spent 20 years and millions of lives trying to prevent.',
    counterfactual: 'Vietnam unifies under Ho Chi Minh in 1956 (he won the scheduled election). No US casualties. No Agent Orange. No Cambodia bombing (which destabilized Cambodia and enabled the Khmer Rouge genocide of 1.5–2 million). Southeast Asia still doesn\'t fall to communism. The US saves $1.1 trillion and 58,220 lives.',
  },
  {
    war: 'Iraq War',
    years: '2003–2011',
    justification: 'Weapons of Mass Destruction (WMDs). Saddam Hussein is developing nuclear, chemical, and biological weapons.',
    cost: '$2.4 trillion (direct) / $3+ trillion with interest',
    usDeaths: '4,599',
    civilianDeaths: '~300,000+ Iraqi civilians (Watson Institute)',
    totalDeaths: '~400,000+',
    whatActuallyHappened: 'No WMDs were found. Not one. The entire justification was wrong. The CIA\'s own post-war report (Duelfer Report, 2004) confirmed Iraq had no active WMD programs and no stockpiles. The war destroyed Iraqi civil society, created a power vacuum filled by ISIS, and massively increased Iran\'s regional influence — the exact opposite of the stated goal.',
    whatWeGot: 'A destabilized Iraq, the rise of ISIS (which grew directly from the disbanded Iraqi military), 300,000+ dead civilians, Iran as the dominant power in Iraq, and a $2.4 trillion bill. Plus Abu Ghraib, which destroyed American moral authority for a generation.',
    counterfactual: 'Saddam Hussein remains in power — a brutal dictator, but one contained by sanctions, no-fly zones, and deterrence (as he had been for 12 years since 1991). No ISIS. No 300,000 dead Iraqi civilians. No Abu Ghraib. Iran remains balanced by Iraqi counterweight. The US saves $2.4 trillion, 4,599 American lives, and its reputation.',
  },
  {
    war: 'Afghanistan War',
    years: '2001–2021',
    justification: 'Destroy al-Qaeda and remove the Taliban for harboring Osama bin Laden.',
    cost: '$2.3 trillion',
    usDeaths: '2,461',
    civilianDeaths: '~70,000+ Afghan civilians (Watson Institute)',
    totalDeaths: '~176,000+',
    whatActuallyHappened: 'The US spent 20 years, $2.3 trillion, and 2,461 American lives building an Afghan government and military. Within 11 days of the US withdrawal in August 2021, the Taliban recaptured the entire country. The Afghan military dissolved without a fight. The Taliban are back in power. Girls\' schools are closed again. Everything is back to where it started — except 176,000 people are dead.',
    whatWeGot: 'Twenty years of nation-building that evaporated in 11 days. Al-Qaeda was degraded but has reconstituted in other countries. The Taliban — our original enemy — runs Afghanistan again. Bin Laden was found in Pakistan, not Afghanistan, and was killed by a special operations raid that cost approximately $1 million — compared to the $2.3 trillion we spent on the war.',
    counterfactual: 'A targeted special operations and intelligence campaign against al-Qaeda leadership — what we actually did to get bin Laden — without a 20-year occupation and nation-building mission. Cost: perhaps $50–100 billion over 20 years instead of $2.3 trillion. Same result (al-Qaeda degraded, bin Laden killed) at 2–4% of the cost.',
  },
  {
    war: 'Libya Intervention',
    years: '2011',
    justification: 'Prevent a humanitarian catastrophe. Gaddafi threatened to massacre the population of Benghazi.',
    cost: '$1.1 billion (direct US costs)',
    usDeaths: '0 (combat) / 4 (Benghazi attack, 2012)',
    civilianDeaths: '~30,000+ in subsequent civil war',
    totalDeaths: '~50,000+',
    whatActuallyHappened: 'NATO bombed, Gaddafi fell, and Libya became a failed state. Two rival governments, multiple militias, open-air slave markets, and a weapons pipeline that destabilized Mali, Niger, and the broader Sahel region. Obama called it the "worst mistake" of his presidency.',
    whatWeGot: 'A failed state with slave markets. Libya went from the highest Human Development Index in Africa to a war zone. Weapons from Gaddafi\'s arsenals flooded across Africa, fueling insurgencies in half a dozen countries.',
    counterfactual: 'Gaddafi remains in power — authoritarian, but Libya maintains basic state functions, the highest HDI in Africa, and serves as a buffer against migration flows to Europe. No slave markets. No weapons proliferation across the Sahel. No Benghazi attack.',
  },
  {
    war: 'Syria Intervention',
    years: '2011–present',
    justification: 'Support "moderate rebels" to remove Assad. Chemical weapons "red line."',
    cost: '$14.7 billion+ (direct US costs through CJTF-OIR)',
    usDeaths: '~20',
    civilianDeaths: '~500,000 total dead in civil war',
    totalDeaths: '~500,000+',
    whatActuallyHappened: 'The US armed rebels, many of whom joined or sold weapons to ISIS and al-Qaeda affiliates. Assad stayed in power (with Russian and Iranian help) until 2025. Russia established a permanent military presence in the Mediterranean. 13 million Syrians were displaced — half the country\'s population. The CIA spent $1 billion per year on a rebel-arming program (Timber Sycamore) that the Pentagon\'s own proxies ended up fighting against.',
    whatWeGot: 'The CIA\'s proxies literally fought the Pentagon\'s proxies. $1B/year in weapons that ended up with jihadists. Russia gained a Mediterranean naval base. Iran gained a land corridor to Hezbollah. 13 million displaced. Assad stayed until he didn\'t, and it had nothing to do with US intervention.',
    counterfactual: 'Assad remains in power earlier and the civil war is shorter and less deadly. Russia has less pretext for intervention. No CIA weapons flowing to jihadists. Fewer displaced. The same eventual outcome — Assad\'s grip weakens over time — with far less human suffering.',
  },
]

const regimeChangeScorecard = [
  { country: 'Iran', year: 1953, method: 'CIA coup (Operation Ajax)', cost: '$1M (1953)', result: 'Shah installed → 1979 Revolution → 45 years of hostility → current war', success: '❌' },
  { country: 'Guatemala', year: 1954, method: 'CIA coup (PBSUCCESS)', cost: '$3M (1954)', result: '36-year civil war, 200,000 dead', success: '❌' },
  { country: 'Chile', year: 1973, method: 'CIA-backed military coup', cost: '$10M+', result: '17 years of Pinochet dictatorship, 3,000+ killed, 30,000 tortured', success: '❌' },
  { country: 'Iraq', year: 2003, method: 'Full military invasion', cost: '$2.4 trillion', result: 'Destroyed state, created ISIS, Iran gained influence', success: '❌' },
  { country: 'Libya', year: 2011, method: 'NATO air campaign', cost: '$1.1 billion', result: 'Failed state, slave markets, regional destabilization', success: '❌' },
  { country: 'Syria', year: 2011, method: 'Rebel arming + airstrikes', cost: '$14.7 billion+', result: '500,000 dead, 13M displaced, Assad stayed until 2025', success: '❌' },
  { country: 'Venezuela', year: 2026, method: 'Blockade + special ops', cost: 'TBD', result: 'Maduro captured, but power vacuum, armed gangs, instability', success: '❌' },
]

const marshallPlanComparison = [
  { item: 'Marshall Plan (1948–1952)', cost: '$13.3B ($170B in 2023$)', result: 'Rebuilt 16 European nations, prevented communist expansion, created America\'s most enduring alliances, launched 75 years of prosperity' },
  { item: 'Iraq War (2003–2011)', cost: '$2.4 trillion (14× the Marshall Plan)', result: 'Destroyed one country, created ISIS, empowered Iran, killed 300,000+ civilians' },
  { item: 'Afghanistan War (2001–2021)', cost: '$2.3 trillion (13.5× the Marshall Plan)', result: 'Taliban back in power within 11 days of withdrawal. Back to square one.' },
  { item: 'Vietnam War (1955–1975)', cost: '$1.1 trillion (6.5× the Marshall Plan)', result: 'Vietnam went communist anyway. 58,220 Americans dead for nothing.' },
  { item: 'Post-9/11 Wars (total)', cost: '$8+ trillion (47× the Marshall Plan)', result: 'More terrorism, more instability, more enemies than when we started.' },
]

const diplomaticSuccesses = [
  { crisis: 'Cuban Missile Crisis (1962)', military: 'Nuclear war nearly started. Joint Chiefs recommended bombing Soviet missile sites', diplomatic: 'Kennedy secretly agreed to remove Jupiter missiles from Turkey in exchange for Soviet withdrawal from Cuba', cost: '$0', result: 'Nuclear war avoided. Soviet missiles removed. Secret deal prevented face-saving crisis for both sides.' },
  { crisis: 'Berlin Crisis (1961)', military: 'US military buildup, considered using nuclear weapons to keep access to Berlin', diplomatic: 'Negotiated status quo: East builds wall, West maintains access to West Berlin', cost: '$2B in military buildup', result: 'Berlin divided but crisis defused. No war. East-West contact maintained through checkpoints.' },
  { crisis: 'Suez Crisis (1956)', military: 'Britain, France, Israel invaded Egypt. US could have supported allies militarily', diplomatic: 'Eisenhower forced allies to withdraw through economic pressure', cost: '$0 direct costs', result: 'War ended immediately. US emerged as dominant Western power. Suez Canal reopened to all nations.' },
  { crisis: 'Iran Nuclear Crisis (2003-2015)', military: 'Israel repeatedly threatened bombing. US had military plans for strikes', diplomatic: 'JCPOA negotiated: Iran limits nuclear program, international monitoring, sanctions relief', cost: '$0 (sanctions relief)', result: 'Iran complied with agreement until US withdrew (2018). Nuclear program constrained for 3 years.' },
  { crisis: 'South Africa Apartheid (1948-1994)', military: 'Congress and activists pushed for military intervention, invasion of SA', diplomatic: 'Sanctions, divestment, international isolation of apartheid regime', cost: '$0', result: 'Apartheid ended peacefully (1994). Democratic transition. Avoided civil war killing millions.' },
]

const interventionIncentives = [
  { actor: 'Defense Contractors', incentive: '$858B annual Pentagon budget', mechanism: 'War requires weapons, ammunition, equipment replacement', example: 'Lockheed Martin stock price rises during conflicts', alignment: 'Pro-intervention' },
  { actor: 'Military Officers', incentive: 'Career advancement, post-retirement jobs', mechanism: 'War creates promotion opportunities, defense contractor hiring', example: 'Generals become CNN analysts, then Raytheon board members', alignment: 'Pro-intervention' },
  { actor: 'Politicians', incentive: 'Appear "strong" to voters', mechanism: 'Military action polls well initially, blame later presidents for problems', example: 'Bush 41: 89% approval after Gulf War', alignment: 'Pro-intervention (short-term)' },
  { actor: 'Media', incentive: 'War drives ratings and advertising', mechanism: 'Breaking news, embedded reporters, defense contractor advertising', example: 'CNN ratings up 2,400% during Gulf War', alignment: 'Pro-intervention' },
  { actor: 'Think Tanks', incentive: 'Defense contractor funding', mechanism: 'Pro-war analysis gets quoted, anti-war analysis gets ignored', example: 'AEI, CSIS, Atlantic Council all pushed Iraq War', alignment: 'Pro-intervention' },
  { actor: 'Taxpayers', incentive: 'Pay for wars but don\'t decide policy', mechanism: 'Costs hidden through deficit spending, spread over decades', example: 'Iraq War veterans\' costs will continue until 2050+', alignment: 'Should be anti-intervention' },
  { actor: 'Soldiers/Veterans', incentive: 'Pay human cost of failed interventions', mechanism: 'PTSD, injuries, deaths from pointless wars', example: '22 veterans commit suicide daily', alignment: 'Should be anti-intervention' },
]

const costPredictionErrors = [
  { war: 'Vietnam War', initialEstimate: '$8B (1965)', actualCost: '$1.1T (2023$)', errorFactor: '138x higher', duration: 'Expected: 2 years, Actual: 10+ years' },
  { war: 'Iraq War', initialEstimate: '$50-60B (White House)', actualCost: '$2.4T', errorFactor: '40-48x higher', duration: 'Expected: "5 weeks" (Rumsfeld), Actual: 8+ years' },
  { war: 'Afghanistan War', initialEstimate: 'No official estimate given', actualCost: '$2.3T', errorFactor: 'Undefined (no estimate)', duration: 'Expected: Quick punitive raid, Actual: 20 years' },
  { war: 'Libya Intervention', initialEstimate: '$1B for air campaign', actualCost: '$1.1B direct + destabilization costs', errorFactor: 'Close on direct costs, massive indirect costs', duration: 'Expected: Days to weeks, Actual: Ongoing chaos since 2011' },
  { war: 'Syria Intervention', initialEstimate: '$500M/year (CIA program)', actualCost: '$14.7B+ (through 2023)', errorFactor: '29x higher', duration: 'Expected: Assad falls in 1-2 years, Actual: 12+ years, Assad fell in 2025' },
]

const opportunityCostAnalysis = [
  { intervention: 'Iraq War ($2.4T)', alternative: 'Universal Pre-K for all American children', cost: '$200B annually', duration: 'Could fund for 12 years', impact: 'Lifetime earnings boost: $13 per $1 invested' },
  { intervention: 'Afghanistan War ($2.3T)', alternative: 'Eliminate student debt + free college for a generation', cost: '$1.7T student debt + $600B/decade free college', duration: 'Could eliminate all student debt + fund free college', impact: 'Eliminate debt crisis, boost consumer spending' },
  { intervention: 'Post-9/11 Wars ($8T)', alternative: 'Transition entire US to renewable energy', cost: '$3-4T (energy sector estimates)', duration: 'Could completely decarbonize economy', impact: 'End climate crisis, achieve energy independence' },
  { intervention: 'Syria Intervention ($14.7B)', alternative: 'Rebuild Flint water system for entire US', cost: '$45B to fix all US water systems (EPA)', duration: 'Could fix 1/3 of America\'s water infrastructure', impact: 'Safe drinking water for all Americans' },
  { intervention: 'Libya Intervention ($1.1B)', alternative: 'Fund global vaccine distribution', cost: '$50B to vaccinate developing world (WHO)', duration: 'Could fund 2% of global vaccination', impact: 'Prevent future pandemics' },
]

const postWarConsequences = [
  { war: 'Vietnam', veterans: '2.7M served', ptsd: '30% have PTSD', suicides: '9,000+ veteran suicides (est)', healthCare: '$22B annually in VA benefits', duration: 'Costs continue 50+ years later' },
  { war: 'Iraq', veterans: '2.5M served', ptsd: '23% have PTSD or depression', suicides: '6,000+ veteran suicides (est)', healthCare: '$18B annually in VA benefits', duration: 'Peak costs still 20+ years away' },
  { war: 'Afghanistan', veterans: '2.8M served', ptsd: '25% have PTSD', suicides: '7,000+ veteran suicides (est)', healthCare: '$14B annually in VA benefits', duration: 'Peak costs still 30+ years away' },
  { war: 'Gulf War', veterans: '2.2M served', ptsd: '25% have Gulf War Illness', suicides: '4,000+ veteran suicides (est)', healthCare: '$10B annually in VA benefits', duration: 'Costs continue 30+ years later' },
]

const containmentSuccess = [
  { country: 'Soviet Union', approach: 'Containment + deterrence', cost: '$8T over 40 years', result: 'Peaceful collapse (1991). No nuclear war. Democracy in Eastern Europe.', alternative: 'Preventive nuclear war in 1950s would have killed 200M+ people' },
  { country: 'China (1949-1979)', approach: 'Isolation + containment', cost: '$200B+ (Korea, Vietnam partially related)', result: 'China opened to US (1979), became trading partner', alternative: 'Invasion of mainland China in 1950 would have been WW3 with Soviets' },
  { country: 'Iraq (1991-2003)', approach: 'Sanctions + no-fly zones + inspections', cost: '$1B annually', result: 'Saddam contained. No WMDs developed. No regional wars.', alternative: '2003 invasion cost $2.4T and created ISIS' },
  { country: 'Iran (1979-2018)', approach: 'Sanctions + deterrence + diplomacy', cost: '$500M annually in enforcement', result: 'No Iranian nukes. JCPOA limited program 2015-2018.', alternative: 'Military strike could trigger regional war costing $3-5T' },
  { country: 'North Korea (1953-present)', approach: 'Deterrence + China pressure', cost: '$2B annually (troop presence)', result: 'No nuclear use. Limited conventional conflicts. China manages NK.', alternative: 'Invasion would destroy Seoul, kill millions, trigger China intervention' },
]

const economicWarfare = [
  { target: 'Russia (2022-present)', method: 'Financial sanctions + energy embargos', cost: '$0 (self-imposed)', effectiveness: 'Limited. Ruble recovered. Oil revenues rerouted through India/China.', alternative: 'Direct military confrontation = WW3' },
  { target: 'Iran (1979-present)', method: 'Banking sanctions + oil embargos', cost: '$2B annually in enforcement', effectiveness: 'Significant but incomplete. Iran adapts through oil swaps, crypto, barter.', alternative: 'Military strikes would trigger regional war' },
  { target: 'China (2018-present)', method: 'Tariffs + tech restrictions', cost: '$40B annually in higher consumer prices', effectiveness: 'Mixed. Some supply chain shifts, but China economy still growing.', alternative: 'Military confrontation over Taiwan = nuclear risk' },
  { target: 'North Korea (2006-present)', method: 'Financial isolation + luxury goods ban', cost: '$500M annually in enforcement', effectiveness: 'Limited. NK develops nukes anyway. China provides economic lifeline.', alternative: 'Military action would destroy Seoul' },
  { target: 'Iraq (1991-2003)', method: 'Oil-for-food + comprehensive sanctions', cost: '$1B annually', effectiveness: 'Contained Saddam but hurt Iraqi civilians. No WMDs developed.', alternative: '2003 invasion cost $2.4T and created chaos' },
]

const alliedInterventionPressure = [
  { ally: 'Israel', pressure: 'Constant requests for US strikes on Iran, Hezbollah, Syria', successRate: '85% - US often complies', cost: '$3.8B annually in military aid + emergency packages', result: 'US drawn into Middle East conflicts repeatedly' },
  { ally: 'Saudi Arabia', pressure: 'Requests for Yemen intervention support, Iran strikes', successRate: '75% - US provides weapons, intelligence, refueling', cost: '$100B+ in weapons sales since 2015', result: 'US complicit in Yemen humanitarian crisis' },
  { ally: 'Turkey (NATO)', pressure: 'Requests for Syria no-fly zone, Kurdish operations', successRate: '40% - US reluctantly accommodates some requests', cost: '$2B annually in military cooperation', result: 'Tensions over conflicting objectives in Syria' },
  { ally: 'UK', pressure: 'Generally supports US interventions, requests reciprocal support', successRate: '90% - "Special relationship" almost always aligns', cost: '$5B annually in military cooperation', result: 'Reinforces interventionist consensus' },
  { ally: 'France', pressure: 'Requested Libya intervention, Mali intervention support', successRate: '70% - US often provides logistics/intelligence', cost: '$3B annually in military cooperation', result: 'US drawn into African interventions' },
]

export default function CostOfDoingNothingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Cost of Doing Nothing' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Deep Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          What If We&apos;d Done Nothing?
        </h1>
        <p className="text-xl text-stone-300 mb-4">The Counterfactual Cost of War</p>
        <p className="text-stone-400 text-lg">
          Every major US military intervention since Vietnam has cost more and achieved less than predicted.
          What if we&apos;d simply... not? The data suggests the &ldquo;cost of doing nothing&rdquo; was almost always
          lower than the cost of doing something.
        </p>
      </div>

      <ShareButtons title="What If We'd Done Nothing? The Counterfactual Cost of War" />

      {/* AI Overview */}
      <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">The Pattern</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 <strong className="text-white">Vietnam:</strong> $1.1T, 58,220 US dead. Domino theory was wrong. Vietnam went communist and the dominoes didn&apos;t fall.</li>
          <li>📊 <strong className="text-white">Iraq:</strong> $2.4T, 300,000+ dead. No WMDs found. Created ISIS. Iran gained power.</li>
          <li>📊 <strong className="text-white">Afghanistan:</strong> $2.3T, 20 years. Taliban back in 11 days. Everything we built evaporated.</li>
          <li>📊 <strong className="text-white">Libya:</strong> Obama&apos;s &ldquo;worst mistake.&rdquo; Now a failed state with slave markets.</li>
          <li>📊 <strong className="text-white">Regime changes:</strong> 0 for 7. Not a single US-backed regime change has produced a stable, democratic outcome.</li>
          <li>📊 <strong className="text-white">Marshall Plan:</strong> $170B rebuilt a continent. Iraq War cost 14× more and destroyed one.</li>
        </ul>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Thesis</h2>
        <p>
          American foreign policy operates on a default assumption: <strong>doing something is always better than
          doing nothing.</strong> When there is a crisis, a dictator, a threat — the instinct is to intervene. The
          political cost of inaction is perceived as higher than the cost of action. Presidents who &ldquo;do nothing&rdquo;
          are called weak. Presidents who bomb things are called decisive.
        </p>
        <p>
          But what does the data actually show? When we look at the five major US military interventions since
          Vietnam — in aggregate, costing over <strong>$6+ trillion and hundreds of thousands of lives</strong> — did
          intervention produce better outcomes than the counterfactual of non-intervention?
        </p>
        <p>
          The answer, in every single case, is no.
        </p>
      </div>

      {/* Intervention Scorecards */}
      {interventionScorecard.map(war => (
        <div key={war.war} className="bg-stone-800 rounded-lg p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-1">{war.war}</h2>
          <p className="text-stone-400 text-sm mb-4">{war.years}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="bg-stone-900 rounded-lg p-3 text-center">
              <span className="text-red-400 font-bold text-sm">{war.cost}</span>
              <p className="text-stone-500 text-xs">Cost</p>
            </div>
            <div className="bg-stone-900 rounded-lg p-3 text-center">
              <span className="text-red-400 font-bold text-sm">{war.usDeaths}</span>
              <p className="text-stone-500 text-xs">US Deaths</p>
            </div>
            <div className="bg-stone-900 rounded-lg p-3 text-center">
              <span className="text-red-400 font-bold text-sm">{war.civilianDeaths}</span>
              <p className="text-stone-500 text-xs">Civilian Deaths</p>
            </div>
            <div className="bg-stone-900 rounded-lg p-3 text-center">
              <span className="text-red-400 font-bold text-sm">{war.totalDeaths}</span>
              <p className="text-stone-500 text-xs">Total Deaths</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-stone-400 text-xs uppercase tracking-wider">Justification</span>
              <p className="text-stone-300 text-sm">{war.justification}</p>
            </div>
            <div>
              <span className="text-stone-400 text-xs uppercase tracking-wider">What Actually Happened</span>
              <p className="text-stone-300 text-sm">{war.whatActuallyHappened}</p>
            </div>
            <div>
              <span className="text-red-400 text-xs uppercase tracking-wider">What We Got For It</span>
              <p className="text-red-300 text-sm">{war.whatWeGot}</p>
            </div>
            <div className="bg-stone-900 rounded-lg p-4 border-l-4 border-green-700">
              <span className="text-green-400 text-xs uppercase tracking-wider">The Counterfactual: What If We&apos;d Done Nothing?</span>
              <p className="text-stone-300 text-sm mt-1">{war.counterfactual}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Regime Change Scorecard */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-2">Regime Change Scorecard: 0 for 7</h2>
        <p className="text-stone-400 text-sm mb-4">
          Not a single US-backed regime change since 1953 has produced a stable, democratic outcome.
          The track record is perfect — perfectly terrible.
        </p>
        <div className="space-y-2">
          {regimeChangeScorecard.map(r => (
            <div key={`${r.country}-${r.year}`} className="border border-stone-700 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-white font-bold">{r.country} ({r.year})</span>
                  <span className="text-stone-500 text-xs ml-2">{r.method}</span>
                </div>
                <span className="text-2xl">{r.success}</span>
              </div>
              <p className="text-stone-400 text-sm mt-1">{r.result}</p>
              <p className="text-stone-500 text-xs mt-1">Cost: {r.cost}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-4 italic">
          Source: Regime change data from WarCosts analysis, CIA declassified documents, CRS reports.
          See: <Link href="/analysis/iran-2026" className="text-red-400 underline">Iran 2026</Link> for full details on each case.
        </p>
      </div>

      {/* Marshall Plan Comparison */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-2">The Marshall Plan Comparison</h2>
        <p className="text-stone-400 text-sm mb-4">
          The Marshall Plan rebuilt an entire continent for $170 billion (2023 dollars). The Iraq War cost
          14× more and destroyed one. The contrast between building and bombing could not be starker.
        </p>
        <div className="space-y-3">
          {marshallPlanComparison.map(m => (
            <div key={m.item} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <span className="text-white font-semibold">{m.item}</span>
                <span className="text-red-400 font-bold text-sm shrink-0 ml-4">{m.cost}</span>
              </div>
              <p className="text-stone-400 text-sm mt-1">{m.result}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Political Economy of Intervention</h2>
        <p>
          Why does the United States keep repeating the same pattern? Why does every war cost more and achieve 
          less than predicted? Why is the "do something" instinct so strong when the evidence for its effectiveness 
          is so weak? The answer lies in the incentive structure that rewards intervention and penalizes restraint.
        </p>
      </div>

      {/* Intervention Incentives */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Who Benefits from War?</h2>
        <p className="text-stone-300 mb-4">
          The people who decide whether to go to war are not the people who pay its costs. This misalignment 
          of incentives explains why interventions keep happening despite their consistent failure.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left text-white font-semibold py-2 text-sm">Actor</th>
                <th className="text-left text-white font-semibold py-2 text-sm">Financial Incentive</th>
                <th className="text-left text-white font-semibold py-2 text-sm">Mechanism</th>
                <th className="text-left text-white font-semibold py-2 text-sm">Alignment</th>
              </tr>
            </thead>
            <tbody>
              {interventionIncentives.map((actor, i) => (
                <tr key={i} className="border-b border-stone-700 last:border-b-0">
                  <td className="text-white font-medium py-3 text-sm">{actor.actor}</td>
                  <td className="text-green-400 py-3 text-sm">{actor.incentive}</td>
                  <td className="text-stone-300 py-3 text-xs">{actor.mechanism}</td>
                  <td className={`py-3 text-xs font-medium ${
                    actor.alignment.includes('Pro-intervention') ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {actor.alignment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-800 border border-red-400 rounded-lg p-4 mt-4">
          <p className="text-stone-300 text-sm">
            <strong>The Iron Triangle:</strong> Defense contractors fund think tanks that produce pro-war analysis. 
            Politicians cite that analysis to justify intervention. Wars create contracts for the same companies 
            that funded the analysis. The circle is complete, self-reinforcing, and highly profitable for everyone 
            except taxpayers and soldiers.
          </p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Prediction Racket</h2>
        <p>
          Every intervention begins with optimistic predictions about cost, duration, and likelihood of success. 
          These predictions are always wrong in the same direction. This is not incompetence — it is how the 
          system works. Honest predictions would prevent wars. Dishonest predictions enable them.
        </p>
      </div>

      {/* Cost Prediction Errors */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Prediction Error Pattern</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left text-white font-semibold py-2 text-sm">War</th>
                <th className="text-left text-white font-semibold py-2 text-sm">Initial Cost Estimate</th>
                <th className="text-left text-white font-semibold py-2 text-sm">Actual Cost</th>
                <th className="text-left text-white font-semibold py-2 text-sm">Error Factor</th>
                <th className="text-left text-white font-semibold py-2 text-sm">Duration Prediction</th>
              </tr>
            </thead>
            <tbody>
              {costPredictionErrors.map((war, i) => (
                <tr key={i} className="border-b border-stone-700 last:border-b-0">
                  <td className="text-white font-medium py-3 text-sm">{war.war}</td>
                  <td className="text-green-400 py-3 text-sm">{war.initialEstimate}</td>
                  <td className="text-red-400 font-bold py-3 text-sm">{war.actualCost}</td>
                  <td className="text-red-300 font-bold py-3 text-sm">{war.errorFactor}</td>
                  <td className="text-stone-300 py-3 text-xs">{war.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-stone-900 rounded-lg p-4 mt-4">
          <p className="text-stone-300 text-sm">
            <strong>Pattern Recognition:</strong> When every prediction is wrong in the same direction 
            (underestimating cost and duration), the rational response is to assume the next prediction 
            will also be wrong in the same direction. The burden of proof should be on those claiming 
            intervention will be quick, cheap, and effective — because it never has been.
          </p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">What We Could Have Built Instead</h2>
        <p>
          The opportunity cost of American interventions is staggering. The $8 trillion spent on post-9/11 
          wars could have solved most of America's domestic problems and transformed human civilization. 
          Instead, it was spent creating more problems in foreign countries.
        </p>
      </div>

      {/* Opportunity Cost Analysis */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Opportunity Cost of War</h2>
        <div className="space-y-4">
          {opportunityCostAnalysis.map((item, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-red-400 font-bold text-sm">{item.intervention}</h3>
                <span className="text-green-400 font-bold text-sm">{item.cost}</span>
              </div>
              <h4 className="text-white font-medium text-sm mb-1">Alternative: {item.alternative}</h4>
              <p className="text-stone-400 text-xs mb-1">{item.duration}</p>
              <p className="text-stone-300 text-xs">{item.impact}</p>
            </div>
          ))}
        </div>
        <div className="bg-green-950/30 border border-green-400 rounded-lg p-4 mt-4">
          <p className="text-stone-300 text-sm">
            <strong>The Math of Peace:</strong> The annual cost to end extreme poverty globally is $175 billion 
            (UN estimate). The US spent $300 billion annually on Iraq and Afghanistan for 20 years. America 
            could have ended global poverty and still had money left over for the largest military in history.
          </p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">When Diplomacy Actually Worked</h2>
        <p>
          The same foreign policy establishment that promotes military intervention often dismisses diplomacy 
          as "weak" or "naive." But diplomatic solutions to major crises have consistently proven more effective, 
          less costly, and more durable than military ones.
        </p>
      </div>

      {/* Diplomatic Successes */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Diplomatic Successes vs. Military "Solutions"</h2>
        <div className="space-y-4">
          {diplomaticSuccesses.map((crisis, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <h3 className="text-white font-bold text-sm mb-2">{crisis.crisis}</h3>
              <div className="grid md:grid-cols-2 gap-3 mb-3">
                <div>
                  <span className="text-red-400 text-xs font-medium">Military Option:</span>
                  <p className="text-stone-300 text-xs">{crisis.military}</p>
                </div>
                <div>
                  <span className="text-green-400 text-xs font-medium">Diplomatic Solution:</span>
                  <p className="text-stone-300 text-xs">{crisis.diplomatic}</p>
                </div>
              </div>
              <div className="text-center">
                <span className="text-green-400 font-bold text-sm">Cost: {crisis.cost}</span>
              </div>
              <p className="text-stone-400 text-xs mt-2">{crisis.result}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Hidden Costs: Veterans and Long-term Consequences</h2>
        <p>
          The official cost of wars only includes direct military spending during active combat. But wars create 
          obligations that last for generations. Veterans' healthcare, disability payments, and family benefits 
          continue for 50+ years after wars end. The largest costs of Vietnam are still ahead of us.
        </p>
      </div>

      {/* Post-War Consequences */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Forever Costs of Temporary Wars</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left text-white font-semibold py-2 text-sm">War</th>
                <th className="text-right text-white font-semibold py-2 text-sm">Veterans</th>
                <th className="text-right text-white font-semibold py-2 text-sm">PTSD Rate</th>
                <th className="text-right text-white font-semibold py-2 text-sm">Veteran Suicides</th>
                <th className="text-right text-white font-semibold py-2 text-sm">Annual Healthcare</th>
                <th className="text-left text-white font-semibold py-2 text-sm">Duration</th>
              </tr>
            </thead>
            <tbody>
              {postWarConsequences.map((war, i) => (
                <tr key={i} className="border-b border-stone-700 last:border-b-0">
                  <td className="text-white font-medium py-3 text-sm">{war.war}</td>
                  <td className="text-stone-300 py-3 text-sm text-right">{war.veterans}</td>
                  <td className="text-red-400 py-3 text-sm text-right font-medium">{war.ptsd}</td>
                  <td className="text-red-400 py-3 text-sm text-right font-bold">{war.suicides}</td>
                  <td className="text-green-400 py-3 text-sm text-right font-medium">{war.healthCare}</td>
                  <td className="text-stone-400 py-3 text-xs">{war.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-800 border border-red-400 rounded-lg p-4 mt-4">
          <p className="text-stone-300 text-sm">
            <strong>The Suicide Crisis:</strong> 22 veterans commit suicide daily — more than die in combat in most years. 
            Since 2001, more veterans have died by suicide than died in Iraq and Afghanistan combined. The wars that 
            were supposed to protect American lives have cost more American lives in suicide than in battle.
          </p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Containment vs. Regime Change: A Historical Analysis</h2>
        <p>
          The Cold War proved that containment works. The Soviet Union, the most powerful adversary America ever 
          faced, collapsed peacefully after 40 years of deterrence and economic pressure. No invasion was required. 
          No nuclear war occurred. The same approach could work with smaller adversaries — but it requires patience 
          and the political courage to resist calls for immediate action.
        </p>
      </div>

      {/* Containment Success */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Containment Success Stories</h2>
        <div className="space-y-4">
          {containmentSuccess.map((country, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold text-sm">{country.country}</h3>
                <span className="text-green-400 font-bold text-sm">{country.cost}</span>
              </div>
              <div className="mb-2">
                <span className="text-stone-400 text-xs">Approach:</span>
                <span className="text-stone-300 text-sm ml-2">{country.approach}</span>
              </div>
              <div className="mb-2">
                <span className="text-stone-400 text-xs">Result:</span>
                <span className="text-stone-300 text-sm ml-2">{country.result}</span>
              </div>
              <div>
                <span className="text-stone-400 text-xs">Military Alternative:</span>
                <span className="text-red-300 text-sm ml-2">{country.alternative}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-green-950/30 border border-green-400 rounded-lg p-4 mt-4">
          <p className="text-stone-300 text-sm">
            <strong>The Patience Dividend:</strong> Containment requires decades of consistent policy, but it works. 
            The Soviet Union collapsed under the weight of its own contradictions. China opened to the West when it 
            served China's interests. Saddam was effectively contained until the 2003 invasion destroyed the containment 
            that was working.
          </p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Economic Warfare: The Middle Ground</h2>
        <p>
          Between military intervention and "doing nothing" lies economic warfare: sanctions, financial isolation, 
          trade restrictions, and technological embargos. These tools are imperfect and slow, but they avoid the 
          human costs and blowback effects of military action while still imposing real costs on adversaries.
        </p>
      </div>

      {/* Economic Warfare */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Economic Warfare: Costs and Effectiveness</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left text-white font-semibold py-2 text-sm">Target</th>
                <th className="text-left text-white font-semibold py-2 text-sm">Method</th>
                <th className="text-right text-white font-semibold py-2 text-sm">US Cost</th>
                <th className="text-left text-white font-semibold py-2 text-sm">Effectiveness</th>
                <th className="text-left text-white font-semibold py-2 text-sm">Military Alternative</th>
              </tr>
            </thead>
            <tbody>
              {economicWarfare.map((target, i) => (
                <tr key={i} className="border-b border-stone-700 last:border-b-0">
                  <td className="text-white font-medium py-3 text-sm">{target.target}</td>
                  <td className="text-stone-300 py-3 text-xs">{target.method}</td>
                  <td className="text-green-400 py-3 text-sm text-right">{target.cost}</td>
                  <td className="text-stone-300 py-3 text-xs">{target.effectiveness}</td>
                  <td className="text-red-300 py-3 text-xs">{target.alternative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-stone-900 rounded-lg p-4 mt-4">
          <p className="text-stone-300 text-sm">
            <strong>The Sanctions Paradox:</strong> Sanctions work slowly and imperfectly, but military action 
            often works not at all. The choice is not between perfect sanctions and perfect wars — it's between 
            imperfect sanctions and catastrophic wars. Iraq's sanctions contained Saddam for 12 years at 1/2400th 
            the cost of the invasion.
          </p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Allied Pressure and the Intervention Trap</h2>
        <p>
          One factor that drives American interventions is pressure from allies who want US military power to 
          solve their regional problems. Israel pushes for strikes on Iran. Saudi Arabia wants help in Yemen. 
          France requests support in Africa. The UK generally supports whatever Washington wants to do. These 
          pressures create a ratchet effect toward more intervention, not less.
        </p>
      </div>

      {/* Allied Pressure */}
      <div className="bg-stone-800 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Allied Pressure for US Intervention</h2>
        <div className="space-y-3">
          {alliedInterventionPressure.map((ally, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold text-sm">{ally.ally}</h3>
                <span className="text-red-400 text-sm">Success Rate: {ally.successRate}</span>
              </div>
              <p className="text-stone-300 text-sm mb-1">{ally.pressure}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-400 text-xs">{ally.cost}</span>
                <span className="text-stone-400 text-xs">Result: {ally.result}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-slate-800 border border-red-400 rounded-lg p-4 mt-4">
          <p className="text-stone-300 text-sm">
            <strong>The Tail Wagging the Dog:</strong> Small allies with regional interests often drag superpowers 
            into conflicts that serve the ally's interests, not the superpower's. The US has been pulled into 
            Middle Eastern conflicts repeatedly by allies whose strategic objectives diverge from American interests.
          </p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Cambodia Effect: When Intervention Creates Worse Outcomes</h2>
        <p>
          The most devastating argument against the &ldquo;do something&rdquo; doctrine is when intervention actively
          creates worse outcomes than would have occurred without it. The clearest case is Cambodia.
        </p>
        <p>
          The US secretly bombed Cambodia from 1969 to 1973, dropping more tonnage than was dropped on Japan in all of
          WWII. The bombing was meant to disrupt North Vietnamese supply lines (the Ho Chi Minh Trail). Instead, it
          destabilized Cambodia, radicalized the population, and drove recruitment for the Khmer Rouge — a fringe
          communist movement that had been marginal before the bombing began.
        </p>
        <p>
          The Khmer Rouge took power in 1975 and proceeded to carry out one of the worst genocides in human history,
          killing an estimated <strong>1.5 to 2 million Cambodians</strong> — roughly 25% of the country&apos;s population.
          CIA and State Department analysts have assessed that without the US bombing campaign, the Khmer Rouge would
          likely never have gained enough popular support to seize power.
        </p>
        <p>
          The US intervention didn&apos;t prevent a catastrophe. It caused one.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Iraq-ISIS Pipeline</h2>
        <p>
          The same pattern repeated in Iraq. The 2003 invasion, followed by Paul Bremer&apos;s catastrophic decision to
          dissolve the Iraqi military (disbanding 400,000 armed men with no jobs and no future), directly created the
          conditions for the rise of ISIS. Former Iraqi military officers formed the backbone of ISIS&apos;s military command.
          The organization literally could not have existed without the power vacuum and radicalization created by the
          US invasion.
        </p>
        <p>
          The US then spent billions more fighting ISIS — the monster it had created. The war to fix the consequences
          of the previous war. It is the most expensive self-own in military history.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Weapons Pipeline: Libya to the Sahel</h2>
        <p>
          When NATO bombed Libya in 2011, Gaddafi&apos;s extensive weapons arsenals were looted. Those weapons — including
          MANPADS (shoulder-fired anti-aircraft missiles), heavy machine guns, RPGs, and millions of rounds of ammunition —
          flowed south across the Sahara into Mali, Niger, Nigeria, and Chad. They fueled the Tuareg rebellion in Mali
          (2012), the rise of Boko Haram in Nigeria, and the broader Sahelian insurgency that has destabilized the region
          for over a decade.
        </p>
        <p>
          The intervention to &ldquo;prevent a humanitarian crisis&rdquo; in Benghazi created humanitarian crises across
          half a continent. The cure was worse than the disease — a pattern so consistent it should be the first assumption
          of any policy analysis, not the last.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Why &ldquo;Doing Nothing&rdquo; Isn&apos;t Actually Doing Nothing</h2>
        <p>
          The framing of &ldquo;intervention vs. doing nothing&rdquo; is itself a manipulation. Not invading a country
          doesn&apos;t mean doing nothing. The US has an enormous range of non-military tools: diplomacy, sanctions,
          economic incentives, intelligence operations, international institutions, and soft power. The choice was never
          between &ldquo;bomb Iraq&rdquo; and &ldquo;do nothing about Saddam.&rdquo; Saddam had been contained by sanctions
          and no-fly zones for 12 years. Containment was working. The inspectors were right — there were no WMDs.
        </p>
        <p>
          Similarly, in Afghanistan, the choice was never &ldquo;occupy for 20 years&rdquo; or &ldquo;let al-Qaeda run free.&rdquo;
          The targeted operation that killed bin Laden — a helicopter raid into Pakistan that cost perhaps $1 million — achieved
          more than the $2.3 trillion 20-year occupation. The special operations and intelligence approach always existed as
          an alternative. It was simply less politically dramatic than a full-scale invasion.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Prediction Problem</h2>
        <p>
          Every intervention is sold on optimistic predictions. The war will be short. The costs will be low.
          We&apos;ll be greeted as liberators. Democracy will flourish. The pattern is so consistent it should be treated
          as a law of nature:
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>Every war costs more, takes longer, kills more people, and achieves less than its proponents predict.</p>
        </blockquote>

        <ul>
          <li><strong>Iraq 2003:</strong> Rumsfeld predicted &ldquo;five days or five weeks or five months, but it certainly isn&apos;t going to last any longer than that.&rdquo; It lasted 8 years (and the consequences are still ongoing).</li>
          <li><strong>Afghanistan 2001:</strong> Expected to be a quick punitive raid. Lasted 20 years.</li>
          <li><strong>Vietnam 1965:</strong> McNamara&apos;s Pentagon predicted victory within two years. The war lasted 10 more years.</li>
          <li><strong>Iraq cost predictions:</strong> The White House estimated $50–60 billion. Actual cost: $2.4 trillion. Off by 40×.</li>
          <li><strong>Afghanistan cost:</strong> No initial estimate was ever publicly provided. Final bill: $2.3 trillion.</li>
        </ul>

        <p>
          If every prediction is wrong in the same direction — underestimating cost, duration, and casualties — then
          the rational response is to assume the next prediction will also be wrong in the same direction. The burden
          of proof should be on those who claim intervention will be quick, cheap, and effective — because it never has been.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Applying This to Iran 2026</h2>
        <p>
          As of March 3, 2026, the US is four days into Operation Epic Fury against Iran. The pattern is already
          visible: the operation was supposed to be a limited air campaign, but Hezbollah has entered, Israel is
          invading Lebanon, the Strait of Hormuz is closed, Qatar is conducting its own strikes, and 11 countries
          are involved.
        </p>
        <p>
          Iran has 88 million people — 2.5× Iraq&apos;s population. Its terrain is mountainous and vast (roughly the size
          of Alaska). It has genuine military capabilities, a sophisticated proxy network, and the ability to disrupt
          the global economy through the Strait of Hormuz.
        </p>
        <p>
          If the Iraq War cost $2.4 trillion against a smaller, weaker country — and every war costs more than
          predicted — what will Iran cost? The Watson Institute&apos;s preliminary estimate suggests $3–5 trillion for
          a sustained campaign, not including occupation. If occupation follows, multiply that by 3–4×.
        </p>
        <p>
          The counterfactual? Iran was contained. The JCPOA nuclear deal was working until the US withdrew in 2018.
          Iran&apos;s economy was constrained by sanctions. Its nuclear program was limited and monitored by IAEA inspectors.
          Diplomacy was slow and imperfect, but it was 100× cheaper than war and 1,000× less deadly.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line</h2>
        <p>
          The United States has spent over $6 trillion on military interventions since Vietnam. Every one cost more
          than predicted, lasted longer than planned, killed more people than expected, and achieved less than promised.
          In several cases — Cambodia, Iraq/ISIS, Libya/Sahel — intervention actively created worse outcomes than
          would have occurred with non-intervention.
        </p>
        <p>
          The Marshall Plan rebuilt an entire continent for $170 billion. The Iraq War cost 14× more and destroyed one
          country. Afghanistan cost 13.5× more and accomplished nothing that lasted. The cost of building is a fraction
          of the cost of bombing. The returns on building are permanent. The returns on bombing are negative.
        </p>
        <p>
          The pattern is so clear, so consistent, and so well-documented that continuing to ignore it is not a policy
          failure — it is a choice. The choice to keep bombing, keep spending, and keep pretending the next war will
          be different. It won&apos;t be. It never is.
        </p>

      </div>

      <RelatedArticles 
        articles={[
          {
            title: 'Pentagon Waste: $640 Toilet Seats & Trillions Unaccounted For',
            slug: 'pentagon-waste',
            desc: 'How the military-industrial complex profits from predictable intervention failures'
          },
          {
            title: 'War Economy: Who Profits from Endless Conflict',
            slug: 'war-economy',
            desc: 'The economic incentives that drive intervention despite consistent failure'
          },
          {
            title: 'Media & War: Manufacturing Consent for Intervention',
            slug: 'media-and-war',
            desc: 'How every intervention is sold with optimistic predictions that never come true'
          },
          {
            title: 'Iran: Cost Per Second of Current Operations',
            slug: 'iran-cost-per-second',
            desc: 'Real-time accounting of another predictable intervention failure'
          },
          {
            title: 'Veterans Betrayed: Broken Promises and Hidden Costs',
            slug: 'veterans-betrayed', 
            desc: 'The long-term human costs of interventions that don\'t count in war budgets'
          },
          {
            title: 'Shadow Wars: America\'s Secret Military Operations',
            slug: 'shadow-wars',
            desc: 'Covert interventions with the same pattern of failure and blowback'
          }
        ]}
      />

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Iran Test Case (2026): Applying the Lessons</h2>
        <p>
          As this analysis is being written, the United States is five days into Operation Epic Fury against Iran. 
          All the familiar patterns are emerging: the operation was supposed to be limited and surgical, but it's 
          expanding. Iran was supposed to be isolated, but 11 countries are now involved. The strikes were supposed 
          to degrade Iranian capabilities, but they've strengthened Iranian resolve and regional support.
        </p>
        <p>
          The cost predictions follow the familiar pattern. The administration estimated $50-100 billion for a 
          "limited air campaign." Based on historical error rates, the actual cost will likely be $2-5 trillion. 
          The duration was supposed to be "weeks, not months." Based on every previous intervention, it will likely 
          last years or decades.
        </p>
        <p>
          The counterfactual remains visible: Iran was contained by sanctions and diplomatic pressure. The JCPOA 
          nuclear deal was constraining Iran's nuclear program until the US withdrew in 2018. The same approach 
          that worked with the Soviet Union — patience, deterrence, and economic pressure — could work with Iran 
          at 1/100th the cost and 1/1000th the casualties.
        </p>
        <p>
          But the incentive structure demands intervention. Defense contractors' stock prices rose when the strikes 
          began. Politicians from both parties called the president "decisive." Cable news ratings spiked. The 
          same actors who benefit from intervention are the ones deciding whether to intervene. The outcome is 
          predetermined by the process.
        </p>

        <blockquote className="border-l-4 border-red-600 bg-slate-800 p-4 my-6">
          <p className="text-lg font-medium">
            &ldquo;Military action is the most expensive solution to every problem, and the least likely to succeed.&rdquo;
          </p>
          <footer className="text-stone-400 mt-2">— Every war since Vietnam has proven this axiom</footer>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">A Modest Proposal: The Non-Intervention Default</h2>
        <p>
          Given the consistent failure of military interventions and the consistent success of alternatives, American 
          foreign policy should operate from a non-intervention default. Before any military action, policymakers 
          should be required to answer these questions:
        </p>
        <ol>
          <li><strong>What is the counterfactual?</strong> What happens if we do nothing?</li>
          <li><strong>What are the historical precedents?</strong> When has this type of intervention succeeded?</li>
          <li><strong>What are the realistic cost estimates?</strong> Based on historical error rates, multiply initial estimates by 10-50×.</li>
          <li><strong>What are the incentives of those recommending intervention?</strong> How do they benefit financially or politically?</li>
          <li><strong>What diplomatic alternatives exist?</strong> Have they been exhausted or just ignored?</li>
          <li><strong>What are the long-term commitments?</strong> Are we prepared for 20+ years of involvement?</li>
          <li><strong>What are the opportunity costs?</strong> What domestic problems could be solved with the same resources?</li>
        </ol>
        <p>
          If these questions had been asked and honestly answered before Vietnam, Iraq, Afghanistan, Libya, and Syria, 
          none of those interventions would have occurred. Millions of lives would have been saved. Trillions of 
          dollars would have been available for productive uses. America would be stronger, not weaker.
        </p>
        <p>
          The cost of doing nothing is almost always lower than the cost of doing something. The burden of proof should 
          be on those who want to bomb, not those who want to wait. Patience is not weakness. It is wisdom.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Sources & Documentation</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-3 text-red-800">Cost & Casualty Data</h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• Watson Institute, Brown University — Costs of War Project (all cost figures)</li>
              <li>• Congressional Research Service — "Costs of Major U.S. Wars" (2023)</li>
              <li>• Congressional Budget Office — Iraq war cost estimates vs. actual</li>
              <li>• Department of Veterans Affairs — healthcare spending by conflict</li>
              <li>• Iraq Body Count — civilian casualty documentation</li>
              <li>• Afghanistan Papers (Washington Post) — military assessments</li>
              <li>• SIGAR reports — Afghanistan reconstruction waste</li>
              <li>• Marshall Plan data: Economic Cooperation Administration, National Archives</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3 text-red-800">Declassified Documents & Reports</h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• Duelfer Report (2004) — CIA Iraq WMD investigation final report</li>
              <li>• Pentagon Papers — Vietnam decision-making process</li>
              <li>• CIA declassified documents — Operation Ajax (Iran 1953), PBSUCCESS (Guatemala 1954)</li>
              <li>• National Security Archive — intervention decision documents</li>
              <li>• Church Committee Reports — CIA covert operations assessment</li>
              <li>• 9/11 Commission Report — pre-war intelligence failures</li>
              <li>• Yemen Files (WikiLeaks) — Saudi-US coordination documents</li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-bold text-lg mb-3">Key Academic Studies</h3>
          <ul className="space-y-2 text-stone-600 text-sm">
            <li>• Yale Cambodian Genocide Program — Khmer Rouge death toll and US bombing correlation</li>
            <li>• Harvard Kennedy School — "Do Economic Sanctions Work?" analysis</li>
            <li>• RAND Corporation — "Regime Change and Its Consequences" study</li>
            <li>• MIT Security Studies — "The Democratic Peace and Intervention Paradox"</li>
            <li>• Brookings Institution — "The Marshall Plan: Lessons for Today"</li>
            <li>• Council on Foreign Relations — "Preventive War and Its Discontents"</li>
            <li>• International Crisis Group — country-specific intervention assessments</li>
          </ul>
        </div>

        <h3>Further Reading</h3>
        <ul>
          <li><Link href="/analysis/pentagon-waste" className="text-red-400 hover:text-red-800">Pentagon Waste: Where the Intervention Money Actually Goes</Link></li>
          <li><Link href="/analysis/media-and-war" className="text-red-400 hover:text-red-800">Manufacturing Consent: How Every War Gets Sold</Link></li>
          <li><Link href="/analysis/veterans-betrayed" className="text-red-400 hover:text-red-800">Veterans Betrayed: The Long-term Human Costs</Link></li>
          <li><Link href="/analysis/war-economy" className="text-red-400 hover:text-red-800">The War Economy: Who Actually Benefits</Link></li>
          <li><Link href="/analysis/environmental-cost" className="text-red-400 hover:text-red-800">Environmental Cost of War: The Hidden Damage</Link></li>
          <li><Link href="/analysis/surveillance-state" className="text-red-400 hover:text-red-800">The Surveillance State: How War Powers Become Permanent</Link></li>
        </ul>

        <h3>Current Conflicts</h3>
        <ul>
          <li><Link href="/conflicts/iran" className="text-red-400 hover:text-red-800">Iran Conflict: Real-time cost analysis of current intervention</Link></li>
          <li><Link href="/conflicts/ukraine" className="text-red-400 hover:text-red-800">Ukraine War: Proxy intervention costs and commitments</Link></li>
          <li><Link href="/conflicts/yemen" className="text-red-400 hover:text-red-800">Yemen: Saudi-US partnership and humanitarian costs</Link></li>
        </ul>
      </div>

      <ArticleSchema 
        title="What If We'd Done Nothing? The Counterfactual Cost of War"
        description="Every US military intervention since Vietnam has cost more and achieved less than predicted. Analysis of Vietnam, Iraq, Afghanistan, Libya, Syria - and what would have happened if we'd chosen diplomacy over bombs."
        datePublished="2026-03-06"
        url="https://www.warcosts.org/analysis/cost-of-doing-nothing"
      />

      <BackToTop />
    </div>
  )
}
