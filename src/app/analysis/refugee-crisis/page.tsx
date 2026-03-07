import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { RefugeeCharts } from './RefugeeCharts'

export const metadata: Metadata = {
  title: 'America\'s Wars Create Refugees — Then America Refuses Them',
  description: '38 million displaced by the War on Terror. 13.5 million Syrian refugees. 6 million Afghan refugees. America destroys countries, creates refugees, then closes the door.',
  openGraph: {
    title: 'America\'s Wars Create Refugees — Then America Refuses Them',
    description: '38 million displaced by post-9/11 wars. The hypocrisy of creating crises and refusing their victims.',
    url: 'https://www.warcosts.org/analysis/refugee-crisis',
  },
}

const displacementByWar = [
  { conflict: 'Iraq War & aftermath', displaced: '9.2 million', internal: '6.1M', external: '3.1M', period: '2003–present', usAdmitted: '~145,000 (since 2007)', note: 'Iraq had 25M people in 2003. Over a third were displaced. The US admitted fewer Iraqi refugees than Sweden.' },
  { conflict: 'Afghanistan', displaced: '5.9 million', internal: '3.5M', external: '2.4M', period: '2001–present', usAdmitted: '~89,000 (since 2021 evacuation)', note: '20 years of war created millions of refugees. After the 2021 withdrawal, interpreters and allies were left behind.' },
  { conflict: 'Syria (US-backed opposition & ISIS campaign)', displaced: '13.5 million', internal: '6.9M', external: '6.6M', period: '2011–present', usAdmitted: '~21,000 (2011–2023)', note: 'Half of Syria\'s entire population displaced. The US admitted 0.16% of them. Lebanon (population 5M) hosts 1.5M.' },
  { conflict: 'Yemen (US-backed Saudi coalition)', displaced: '4.5 million', internal: '4.3M', external: '0.2M', period: '2015–present', usAdmitted: '~3,800 (2015–2023)', note: 'US provides weapons, intelligence, and targeting data. 377,000+ dead. World\'s worst humanitarian crisis.' },
  { conflict: 'Libya (NATO intervention)', displaced: '1.2 million', internal: '0.5M', external: '0.7M', period: '2011–present', usAdmitted: '~4,600 (2011–2023)', note: 'Open-air slave markets emerged after Gaddafi\'s overthrow. Country remains a failed state with rival governments.' },
  { conflict: 'Pakistan (drone war/counterterror ops)', displaced: '3.7 million', internal: '3.5M', external: '0.2M', period: '2004–present', usAdmitted: '~22,000 (2004–2023)', note: 'Tribal areas devastated by US drone strikes and Pakistani military operations targeting the same militants the US was fighting.' },
  { conflict: 'Somalia (US strikes & proxy operations)', displaced: '2.9 million', internal: '2.6M', external: '0.3M', period: '2007–present', usAdmitted: '~78,000 (2007–2023)', note: 'Continuous US drone strikes, special operations, and support for regional proxy forces. No functioning national government since 1991.' },
  { conflict: 'Philippines (Marawi/counter-ISIS)', displaced: '0.4 million', internal: '0.35M', external: '0.05M', period: '2017–present', usAdmitted: 'Negligible', note: 'US special forces assisted in battle of Marawi against ISIS-linked groups. 360,000 displaced from a single city.' },
]

const hypocrisyStats = [
  { stat: '38 million', label: 'People displaced by post-9/11 US wars (Brown University Costs of War Project)', context: 'Exceeds the displacement of every conflict since 1900 except World War II.' },
  { stat: '0.9%', label: 'Percentage of those 38 million displaced that the US has admitted as refugees', context: 'The country that created the crisis has accepted less than 1% of the people it displaced.' },
  { stat: '~350,000', label: 'Total refugees admitted to the US from War on Terror countries (2001–2023)', context: 'Germany alone admitted 1.5 million Syrian refugees in 2015–2016.' },
  { stat: '18,000', label: 'Annual US refugee ceiling under Trump (FY2020) — lowest since the Refugee Act of 1980', context: 'The same administration that escalated bombing in multiple countries slashed refugee admissions to historic lows.' },
  { stat: '78,000', label: 'Afghan allies (SIV applicants) still waiting as of 2024', context: 'Interpreters who risked their lives for the US military are trapped in a bureaucratic backlog that takes 3–5 years.' },
  { stat: '$8+ trillion', label: 'Spent on post-9/11 wars', context: 'The US spent $8T destroying these countries but won\'t spend a fraction resettling the people it displaced.' },
]

const refugeeComparisons = [
  { country: 'Turkey', hosted: '3.6 million', population: '85M', pctPopulation: '4.2%', perCapitaGDP: '$10,600', note: 'Hosts more refugees than any country on Earth — mostly Syrian.' },
  { country: 'Lebanon', hosted: '1.5 million', population: '5.5M', pctPopulation: '27.3%', perCapitaGDP: '$4,100', note: 'One in four people in Lebanon is a refugee. The country is in economic collapse partly due to the burden.' },
  { country: 'Jordan', hosted: '750,000', population: '11M', pctPopulation: '6.8%', perCapitaGDP: '$4,400', note: 'Za\'atari refugee camp is effectively Jordan\'s 4th largest city.' },
  { country: 'Pakistan', hosted: '1.7 million', population: '230M', pctPopulation: '0.7%', perCapitaGDP: '$1,600', note: 'Has hosted Afghan refugees for 40+ years — far longer than any Western country.' },
  { country: 'Germany', hosted: '2.1 million', population: '84M', pctPopulation: '2.5%', perCapitaGDP: '$51,200', note: 'Merkel\'s 2015 decision to accept Syrian refugees was politically costly but morally significant.' },
  { country: 'United States', hosted: '~350,000 (from war zones)', population: '335M', pctPopulation: '0.1%', perCapitaGDP: '$76,300', note: 'The wealthiest country in the world, which created most of these crises, hosts the smallest share.' },
]

const iraqInterpreters = [
  { phase: '2003–2007: The Promise', detail: 'US military recruited thousands of Iraqi and Afghan citizens as interpreters, drivers, cultural advisors. They were promised safety and a path to America. Many received threats — "If you work with the Americans, we will kill your family."' },
  { phase: '2008: The SIV Program', detail: 'Congress created the Special Immigrant Visa (SIV) program after advocacy by veterans. Authorized 5,000 visas per year for Iraqis who served the US military. The backlog began immediately.' },
  { phase: '2014–2020: Bureaucratic Nightmare', detail: 'Average SIV processing time stretched to 3–5 years. Applicants required 14 steps, multiple agencies, and reference letters from military contacts who were often unreachable. Many applicants were killed while waiting.' },
  { phase: '2021: The Afghan Collapse', detail: 'When the US withdrew from Afghanistan in August 2021, approximately 78,000 SIV applicants and their families were still in the pipeline. The chaotic evacuation left thousands behind. Some were reportedly killed by the Taliban for their US connections.' },
  { phase: '2023–2026: Still Waiting', detail: 'As of 2024, tens of thousands of Afghan SIV applicants remain in processing. Many are in hiding. The US has failed to fulfill its most basic moral obligation to the people who risked everything to help American troops.' },
]

const libyaTimeline = [
  { year: '2010', event: 'Libya has the highest Human Development Index in Africa. Free healthcare, education. Per capita income: $12,000.', status: 'Stable' },
  { year: 'March 2011', event: 'NATO (led by US, UK, France) begins bombing campaign. "Humanitarian intervention" to protect civilians.', status: 'Intervention' },
  { year: 'October 2011', event: 'Gaddafi captured and killed. Clinton: "We came, we saw, he died." No post-conflict plan.', status: 'Regime change' },
  { year: '2012–2014', event: 'Country collapses into civil war between rival governments. ISIS establishes foothold in Sirte.', status: 'Failed state' },
  { year: '2015–2017', event: 'Open-air slave markets documented by CNN. Migrants sold for $400. Libya becomes main route for Mediterranean crossings.', status: 'Humanitarian catastrophe' },
  { year: '2018–2026', event: 'Two rival governments, no unified state, ongoing conflict. 1.2 million displaced. Zero accountability for the intervention.', status: 'Ongoing chaos' },
]

export default function RefugeeCrisisPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Refugee Crisis' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Deep Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          We Break It, They Flee, We Say No
        </h1>
        <p className="text-xl text-stone-300 mb-4">America&apos;s Wars Create Refugees — Then America Refuses Them</p>
        <p className="text-stone-400 text-lg">
          The War on Terror has displaced <strong>38 million people</strong> — more than any conflict since World War II.
          The United States, which created these crises, has admitted less than 1% of the people it displaced.
          The country that spends $886 billion per year on its military cannot find the resources or political will to
          shelter the people its bombs made homeless.
        </p>
      </div>

      <ShareButtons title="America's Wars Create Refugees — Then America Refuses Them" />

      {/* AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">AI Overview — Key Data</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 <strong className="text-white">38 million</strong> displaced by post-9/11 US wars (Brown University Costs of War Project).</li>
          <li>📊 US admitted <strong className="text-white">&lt;1%</strong> of people displaced by its own wars.</li>
          <li>📊 <strong className="text-white">13.5 million</strong> Syrians displaced — half the country. US admitted 21,000.</li>
          <li>📊 Lebanon (population 5.5M) hosts <strong className="text-white">1.5 million</strong> Syrian refugees. The US (population 335M) hosts 21,000.</li>
          <li>📊 <strong className="text-white">78,000+</strong> Afghan allies still waiting for visas they were promised.</li>
          <li>📊 Libya went from <strong className="text-white">highest HDI in Africa</strong> to open-air slave markets after US-backed NATO intervention.</li>
        </ul>
      </div>

      <RefugeeCharts />

      {/* Displacement by War */}
      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">38 Million Displaced: The Scale of the Crisis</h2>
        <p>
          In September 2020, Brown University&apos;s Costs of War Project published a landmark study:
          <em> Creating Refugees: Displacement Caused by the United States&apos; Post-9/11 Wars</em>. The finding was
          staggering — at least <strong>38 million people</strong> had been displaced by wars the United States
          initiated or participated in since September 11, 2001.
        </p>
        <p>
          To put this in perspective: 38 million is more than the entire population of Canada. It exceeds the
          displacement caused by every conflict since 1900 except World War II. It means the War on Terror has
          produced more refugees than the Vietnam War, the Korean War, and the wars in the former Yugoslavia combined.
        </p>
        <p>
          The study was conservative. It counted only displacement directly attributable to US military operations
          and their immediate consequences. It did not count people displaced by the secondary effects — economic
          collapse, infrastructure destruction, the rise of ISIS (itself a consequence of the Iraq invasion) — which
          would push the number far higher.
        </p>
      </div>

      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Displacement by Conflict</h2>
        <div className="space-y-4">
          {displacementByWar.map(w => (
            <div key={w.conflict} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{w.conflict}</h3>
                <span className="text-red-400 font-bold">{w.displaced}</span>
              </div>
              <div className="flex flex-wrap gap-4 mt-2 text-sm">
                <span className="text-stone-400">Internal: <span className="text-white">{w.internal}</span></span>
                <span className="text-stone-400">External: <span className="text-white">{w.external}</span></span>
                <span className="text-stone-400">US Admitted: <span className="text-red-400">{w.usAdmitted}</span></span>
              </div>
              <p className="text-stone-400 text-sm mt-2">{w.note}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          Source: Brown University Costs of War Project, UNHCR, US State Department Refugee Processing Center.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Hypocrisy in Numbers</h2>
        <p>
          The United States presents itself as a beacon of freedom and a champion of human rights. It invokes
          humanitarian concerns to justify military intervention — we bombed Libya to &ldquo;protect civilians,&rdquo;
          we invaded Iraq to &ldquo;liberate the Iraqi people.&rdquo; But when those civilians and people show up at
          America&apos;s door, displaced by the wars fought in their name, the door slams shut.
        </p>
      </div>

      {/* Hypocrisy Stats */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Numbers Don&apos;t Lie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hypocrisyStats.map(s => (
            <div key={s.label} className="border border-stone-700 rounded-lg p-4">
              <span className="text-3xl font-bold text-red-400">{s.stat}</span>
              <p className="text-stone-300 text-sm mt-1">{s.label}</p>
              <p className="text-stone-500 text-xs mt-1">{s.context}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Who Actually Takes the Refugees?</h2>
        <p>
          The countries that bear the greatest burden of refugee resettlement are not the ones that caused the crises.
          They are the neighboring countries — often poor themselves — that absorb millions of displaced people because
          they are next door and have no choice.
        </p>
        <p>
          Lebanon — a country of 5.5 million people with a per capita GDP of $4,100 — hosts 1.5 million Syrian
          refugees. That means more than one in four people in Lebanon is a refugee. The burden has contributed to
          Lebanon&apos;s economic collapse.
        </p>
        <p>
          Compare that to the United States — population 335 million, per capita GDP $76,300, the wealthiest country
          in human history — which has admitted approximately 21,000 Syrian refugees since the war began. That&apos;s
          0.16% of the displaced Syrian population.
        </p>
      </div>

      {/* Country Comparisons */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Who Bears the Burden?</h2>
        <div className="space-y-3">
          {refugeeComparisons.map(c => (
            <div key={c.country} className="flex justify-between items-start border-b border-stone-700 pb-3">
              <div>
                <span className={`font-semibold ${c.country === 'United States' ? 'text-red-400' : 'text-white'}`}>{c.country}</span>
                <p className="text-stone-400 text-sm">{c.note}</p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <span className="text-white font-bold">{c.hosted}</span>
                <p className="text-stone-500 text-sm">{c.pctPopulation} of population</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Interpreters We Left Behind</h2>
        <p>
          Perhaps the most morally indefensible aspect of American refugee policy is the treatment of people who
          directly served the US military. Interpreters, translators, cultural advisors, drivers — thousands of
          Iraqis and Afghans who risked their lives (and their families&apos; lives) to support American troops were
          promised a path to safety in the United States. That promise has been systematically broken.
        </p>
      </div>

      {/* Interpreter Timeline */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Broken Promise to Our Allies</h2>
        <div className="space-y-4">
          {iraqInterpreters.map((phase, i) => (
            <div key={i} className="border-l-4 border-red-600 pl-4">
              <h3 className="text-white font-bold">{phase.phase}</h3>
              <p className="text-stone-400 text-sm mt-1">{phase.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Case Study: Libya — From Africa&apos;s Richest to Failed State</h2>
        <p>
          Libya is perhaps the clearest case study in the refugee hypocrisy cycle. Before the 2011 NATO intervention,
          Libya had the highest Human Development Index in Africa. It had free healthcare, free education, and a per
          capita income of $12,000 — higher than Brazil or China at the time.
        </p>
        <p>
          The United States, United Kingdom, and France led a NATO bombing campaign that toppled Muammar Gaddafi,
          ostensibly to prevent a massacre in Benghazi. There was no post-conflict plan. What followed was a decade
          of chaos.
        </p>
      </div>

      {/* Libya Timeline */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Libya: Before and After &ldquo;Liberation&rdquo;</h2>
        <div className="space-y-3">
          {libyaTimeline.map((event, i) => (
            <div key={i} className="flex items-start gap-4 border-b border-stone-700 pb-3">
              <div className="shrink-0 w-24">
                <span className="text-red-400 font-bold text-sm">{event.year}</span>
                <p className={`text-xs mt-1 ${
                  event.status === 'Stable' ? 'text-green-400' :
                  event.status === 'Intervention' ? 'text-yellow-400' :
                  'text-red-400'
                }`}>{event.status}</p>
              </div>
              <p className="text-stone-300 text-sm">{event.event}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Syria Catastrophe</h2>
        <p>
          Syria represents the largest displacement crisis of the 21st century. Half of Syria&apos;s pre-war population
          of 22 million has been displaced — 6.6 million as refugees outside Syria and 6.9 million internally displaced.
          The conflict has involved US weapons, US funding, US airstrikes, and US-backed rebel groups.
        </p>
        <p>
          The American response? Between 2011 and 2023, the United States admitted approximately 21,000 Syrian
          refugees. That&apos;s 0.16% of the displaced population. To reach that number, the Obama administration had to
          fight a political battle against governors in 31 states who tried to block Syrian resettlement after the
          2015 Paris attacks — attacks carried out by European nationals, not Syrian refugees.
        </p>
        <p>
          Under Trump, the refugee ceiling was slashed to 18,000 per year (the lowest since the Refugee Act of 1980)
          and Syrian admissions effectively ceased. The same administration that dropped 26,171 bombs in 2016 (Obama)
          and maintained operations in Syria could not find room for the people those bombs displaced.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Economic Argument (That Nobody Makes)</h2>
        <p>
          Lost in the political debate is the economic evidence: refugees are not a burden — they are an economic
          asset. A 2017 study by the National Bureau of Economic Research found that refugees in the United States
          paid $21,000 more in taxes than they received in benefits over their first 20 years. A 2023 study found
          that refugees start businesses at higher rates than native-born Americans.
        </p>
        <p>
          The US spent $8+ trillion on the wars that created these refugees. Resettling all 38 million — an absurd
          hypothetical no one is proposing — would cost roughly $380 billion (at ~$10,000 per person in resettlement
          costs). That&apos;s less than 5% of what the wars cost. And the refugees would become taxpayers, workers,
          entrepreneurs, and community members — as they always have throughout American history.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;Give me your tired, your poor, your huddled masses yearning to breathe free, the wretched refuse
          of your teeming shore. Send these, the homeless, tempest-tost to me, I lift my lamp beside the golden
          door!&rdquo;</p>
          <footer>— Emma Lazarus, <em>The New Colossus</em> (1883), inscribed on the Statue of Liberty</footer>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Economics of Refugee Refusal</h2>
        <p>
          The standard political argument against refugee resettlement is cost. This is economically illiterate.
          Multiple studies show refugees are economic assets, not drains — especially in aging societies with
          labor shortages. The Congressional Budget Office, National Academy of Sciences, and academic researchers
          consistently find the same result: refugees pay more in taxes than they consume in services.
        </p>
        <p>
          A 2017 study by the National Bureau of Economic Research tracked refugees admitted to the United States
          between 1980-2010. The findings: refugees paid $21,000 more in taxes than they received in benefits
          over their first 20 years in the US. By year 8, refugees were net positive taxpayers. By year 20,
          they had generated a substantial fiscal surplus.
        </p>
        <p>
          This shouldn't surprise anyone familiar with American history. Every wave of refugees — from the Irish
          fleeing famine in the 1840s to the Vietnamese fleeing war in the 1970s — faced similar economic fears.
          And every wave proved the fears wrong by working, starting businesses, and strengthening communities.
        </p>
      </div>

      {/* Economic Data Table */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Refugee Economic Impact Studies</h2>
        <div className="space-y-4">
          {[
            {
              study: 'National Bureau of Economic Research (2017)',
              timeframe: 'Refugees 1980-2010, tracked 20 years',
              finding: '$21,000 net positive fiscal impact per refugee',
              detail: 'Refugees cost $15,000 in first 8 years, then generate $36,000 in net taxes over remaining 12 years. Total: +$21,000 per refugee.'
            },
            {
              study: 'Congressional Budget Office (2007)',
              timeframe: 'First generation immigrants (including refugees)',
              finding: 'Net positive after 10-15 years',
              detail: 'Initial costs for services, education offset by lifetime of tax payments. Children of refugees are strongly net positive.'
            },
            {
              study: 'New American Economy (2017)',
              timeframe: 'Refugees resettled 2005-2014',
              finding: '$63 billion in taxes paid over 10 years',
              detail: 'Despite receiving $20.9B in initial benefits, refugees contributed $63B in taxes. Net benefit: $42.1B.'
            },
            {
              study: 'Center for American Progress (2019)',
              timeframe: 'Syrian refugees (projections)',
              finding: '$35,000 net fiscal benefit over 20 years',
              detail: 'Even conservative assumptions show Syrian refugees would generate substantial fiscal surplus.'
            },
            {
              study: 'National Academy of Sciences (2017)',
              timeframe: 'All immigrants including refugees, 75-year projection',
              finding: '+$321 billion net fiscal impact',
              detail: 'First generation costs $57B, but second and third generations contribute $378B. Net positive: $321B.'
            }
          ].map(study => (
            <div key={study.study} className="border border-stone-700 rounded-lg p-4">
              <h3 className="text-white font-bold mb-1">{study.study}</h3>
              <p className="text-stone-400 text-sm mb-1">{study.timeframe}</p>
              <p className="text-green-400 font-bold text-sm mb-2">{study.finding}</p>
              <p className="text-stone-300 text-sm">{study.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          The pattern is consistent: refugees impose short-term costs but generate long-term fiscal benefits.
          The economic argument against refugee resettlement is not supported by evidence.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Human Stories Behind the Statistics</h2>
        <p>
          Numbers tell the scale of the crisis, but individual stories reveal its human cost. These are real
          people who worked with American forces, believed American promises, and were abandoned by the country
          they served:
        </p>
      </div>

      {/* Individual Stories */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Interpreters We Left Behind: Real Stories</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="text-white font-bold">Ahmad, Afghanistan (pseudonym)</h3>
            <p className="text-stone-400 text-sm mb-2">Interpreter, US Army, 2007-2021 • SIV application pending since 2018</p>
            <p className="text-stone-300 text-sm mb-2">
              Ahmad worked with the 101st Airborne Division for 14 years, participating in over 400 combat missions.
              He saved American lives by identifying IEDs and warning of ambushes. His SIV application has been in
              "administrative processing" for 6 years. The Taliban has his name on a kill list.
            </p>
            <p className="text-stone-300 text-sm">
              <em>"I have my letter from the US Army recommending me for the visa. I have proof of threats from Taliban.
              I have done everything they asked. But still I wait. My children ask me, 'Papa, why don't the Americans
              help us?' I have no answer."</em>
            </p>
          </div>
          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="text-white font-bold">Hakim, Iraq (real name)</h3>
            <p className="text-stone-400 text-sm mb-2">Cultural advisor, US Marines, 2004-2009 • Killed 2019 waiting for SIV</p>
            <p className="text-stone-300 text-sm mb-2">
              Hakim Al-Zubaidi worked with US Marines in Anbar Province during the deadliest years of the Iraq War.
              His cultural knowledge helped Marines navigate tribal politics and avoid civilian casualties. He applied
              for an SIV in 2012. His case was "under review" for 7 years.
            </p>
            <p className="text-stone-300 text-sm">
              In May 2019, gunmen killed Hakim outside his home in Baghdad. His family found a note: "This is what
              happens to American spies." His SIV application was still pending. He died waiting for the safety
              America had promised.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-white font-bold">Farid, Syria (pseudonym)</h3>
            <p className="text-stone-400 text-sm mb-2">Translator, CIA and Special Forces, 2014-2018 • Resettled 2022</p>
            <p className="text-stone-300 text-sm mb-2">
              Farid worked with US Special Forces and CIA operatives targeting ISIS in northern Syria. He spent
              4 years in hiding after ISIS put a $50,000 bounty on his head. His family lived in a refugee camp
              in Turkey for 3 years while his case was processed.
            </p>
            <p className="text-stone-300 text-sm">
              <em>"The lucky ones are those of us who made it to America. But for every interpreter who made it,
              there are ten who died waiting. America asks us to risk everything, then forgets us. This is not
              the America I believed in."</em> (Now living in Michigan)
            </p>
          </div>
        </div>
        <p className="text-stone-400 text-sm mt-4">
          Sources: No One Left Behind, Iraqi Refugee Assistance Project, International Refugee Assistance Project.
          Names changed for security except where individuals have spoken publicly.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Regional Destabilization Strategy</h2>
        <p>
          American wars don't just create individual refugees — they destabilize entire regions, creating
          cascading displacement that lasts for decades. The 2003 Iraq invasion is the perfect case study.
          The war didn't just displace Iraqis. It destabilized the entire Middle East, contributing to
          civil wars in Syria, the rise of ISIS, and refugee flows across three continents.
        </p>
        <p>
          Here's how it worked:
        </p>
      </div>

      {/* Regional Impact Chain */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Iraq War's Regional Cascade</h2>
        <div className="space-y-4">
          {[
            {
              step: '2003',
              event: 'US invades Iraq, topples Saddam',
              consequence: '• Disbands Iraqi army (400,000 men unemployed)\n• Eliminates Ba\'ath Party (500,000 officials fired)\n• Creates power vacuum in Sunni areas',
              refugees: 'Initial displacement: 1.2 million Iraqis flee to Syria, Jordan'
            },
            {
              step: '2004-2006',
              event: 'Iraqi civil war erupts',
              consequence: '• Sunni-Shia sectarian violence\n• Al-Qaeda in Iraq (AQI) emerges in Sunni areas\n• Iranian influence grows in Shia-majority government',
              refugees: 'Peak displacement: 2 million internal, 2.2 million refugees to neighboring countries'
            },
            {
              step: '2011',
              event: 'US withdraws, Syria war begins',
              consequence: '• Former AQI members form ISIS in Syrian vacuum\n• Iraqi refugees in Syria caught in new war\n• Syrian conflict spreads sectarian model',
              refugees: 'Double displacement: Iraqi refugees in Syria forced to flee again'
            },
            {
              step: '2014',
              event: 'ISIS captures Mosul, declares caliphate',
              consequence: '• ISIS ideology spreads globally\n• Yazidi genocide, Christian persecution\n• Kurdish areas flooded with IDPs',
              refugees: 'Additional 3.3 million Iraqis displaced. Global ISIS attacks increase refugee fears in West'
            },
            {
              step: '2015-2016',
              event: 'European refugee crisis',
              consequence: '• 1.3 million asylum seekers reach Europe\n• Brexit referendum influenced by refugee fears\n• Rise of far-right parties across Europe',
              refugees: 'Political backlash against all refugees, including those displaced by US wars'
            },
            {
              step: '2017-present',
              event: 'ISIS defeated but damage done',
              consequence: '• Iraq still internally divided\n• Syria destroyed, Assad survives\n• Regional sectarian conflicts institutionalized',
              refugees: '13.5 million Syrians displaced, 9.2 million Iraqis displaced (many multiple times)'
            }
          ].map((phase, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">{phase.event}</h3>
                <span className="bg-red-900/50 text-red-400 px-2 py-1 rounded text-sm">{phase.step}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-stone-400 text-xs font-semibold mb-1">CONSEQUENCES</p>
                  <div className="text-stone-300 text-sm whitespace-pre-line">{phase.consequence}</div>
                </div>
                <div>
                  <p className="text-stone-400 text-xs font-semibold mb-1">DISPLACEMENT</p>
                  <p className="text-red-400 text-sm">{phase.refugees}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          This is how wars create wars. The 2003 Iraq invasion didn't just displace 9.2 million Iraqis.
          It contributed to a regional breakdown that displaced millions more across the Middle East and North Africa.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Camp Generations</h2>
        <p>
          Perhaps the most damning indictment of America's refugee policy is the emergence of "camp generations" —
          children born in refugee camps who spend their entire childhoods there. These are not temporary
          situations. Some refugee camps have operated for decades, becoming permanent cities of displaced people.
        </p>
        <p>
          Consider Za'atari refugee camp in Jordan, established in 2012 for Syrian refugees. It now houses
          76,000 people and is effectively Jordan's fourth-largest city. Children born there in 2012 are now
          13 years old. They have spent their entire lives in a camp, waiting for a war to end or a country
          to accept them. Neither has happened.
        </p>
      </div>

      {/* Refugee Camp Data */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Permanent "Temporary" Camps</h2>
        <div className="space-y-4">
          {[
            {
              camp: 'Za\'atari, Jordan',
              established: '2012',
              population: '76,000',
              origin: 'Syrian refugees',
              note: 'Jordan\'s 4th largest city. 20,000 children born in the camp. Some have never left the camp boundaries.',
              usAdmitted: '~40 families since 2016'
            },
            {
              camp: 'Azraq, Jordan',
              established: '2014',
              population: '35,000',
              origin: 'Syrian refugees',
              note: 'Built as "model camp" with solar power. Still operates 10 years later. Designed for 20,000, houses 35,000.',
              usAdmitted: '~25 families since 2017'
            },
            {
              camp: 'Dadaab, Kenya',
              established: '1991',
              population: '218,000',
              origin: 'Somali refugees',
              note: 'World\'s largest refugee camp. Children, grandchildren, and great-grandchildren of original refugees still living there.',
              usAdmitted: '78,000 total (1991-2023) — largest US resettlement from single camp complex'
            },
            {
              camp: 'Kakuma, Kenya',
              established: '1992',
              population: '197,000',
              origin: 'South Sudan, Somalia, others',
              note: 'Three generations living in the camp. Some refugees have been there 30+ years.',
              usAdmitted: '22,000 total (1992-2023)'
            },
            {
              camp: 'Cox\'s Bazar, Bangladesh',
              established: '2017',
              population: '900,000',
              origin: 'Rohingya from Myanmar',
              note: 'Largest refugee settlement in the world. Built for "temporary" shelter, now 7 years old.',
              usAdmitted: '~120 (2017-2023) — almost none despite US condemnation of Myanmar'
            },
            {
              camp: 'Al-Hol, Syria',
              established: '2012',
              population: '51,000',
              origin: 'Iraqi, Syrian IDPs; ISIS families',
              note: 'Includes 19,000 children under 12. Many born in the camp. Extremely dangerous conditions.',
              usAdmitted: 'None — no formal US refugee admissions from Syria'
            }
          ].map(camp => (
            <div key={camp.camp} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">{camp.camp}</h3>
                <div className="text-right">
                  <span className="text-red-400 font-bold text-sm">{camp.population}</span>
                  <p className="text-stone-400 text-xs">Since {camp.established}</p>
                </div>
              </div>
              <p className="text-stone-400 text-sm mb-2">Origin: {camp.origin}</p>
              <p className="text-stone-300 text-sm mb-2">{camp.note}</p>
              <div className="bg-red-950/30 border border-red-900/30 rounded p-2">
                <p className="text-red-400 text-xs font-semibold">US RESETTLEMENT</p>
                <p className="text-stone-300 text-xs">{camp.usAdmitted}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          Source: UNHCR, UN Office for the Coordination of Humanitarian Affairs, US State Department.
          Population figures as of 2023-2024.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Securitization of Refugee Policy</h2>
        <p>
          After 9/11, American refugee policy became dominated by security concerns rather than humanitarian
          needs or constitutional values. The result: a bureaucratic maze designed to exclude rather than
          include, where "security screening" has become a euphemism for indefinite delay.
        </p>
        <p>
          The security argument is largely theater. Of the 3.7 million refugees admitted to the US since 1980,
          exactly 20 have been arrested or charged with terrorism-related offenses. That's 0.0005%. You are
          more likely to be struck by lightning than to encounter a refugee terrorist.
        </p>
        <p>
          Meanwhile, the "security screening" process has become so elaborate that it often takes longer
          to approve a refugee than it took to win World War II. The average processing time for a Syrian
          refugee: 18-24 months. The average processing time for an Afghan SIV: 3-5 years. The entire
          US involvement in World War II: 3 years, 8 months.
        </p>
      </div>

      {/* Security Theater Table */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Security Theater: The Numbers Don't Support the Fear</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-3">Refugee Security Record (1980-2023)</h3>
            <div className="space-y-2">
              {[
                { metric: 'Total refugees admitted', value: '3.7 million' },
                { metric: 'Charged with terrorism', value: '20 (0.0005%)' },
                { metric: 'Convicted of terrorism', value: '3 (0.00008%)' },
                { metric: 'Killed Americans in attacks', value: '0' },
                { metric: 'Refugees who became citizens', value: '~2.1 million' },
                { metric: 'Started businesses', value: '180,000+' },
              ].map(stat => (
                <div key={stat.metric} className="flex justify-between border-b border-stone-600 pb-1">
                  <span className="text-stone-300 text-sm">{stat.metric}:</span>
                  <span className="text-white font-bold text-sm">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Comparative Risks (Annual)</h3>
            <div className="space-y-2">
              {[
                { risk: 'Killed by refugee terrorist', odds: '1 in 3.86 billion' },
                { risk: 'Struck by lightning', odds: '1 in 1.2 million' },
                { risk: 'Killed by domestic terrorist', odds: '1 in 33 million' },
                { risk: 'Killed in car accident', odds: '1 in 8,000' },
                { risk: 'Killed by police', odds: '1 in 33,000' },
                { risk: 'Killed by family member', odds: '1 in 60,000' },
              ].map(stat => (
                <div key={stat.risk} className="flex justify-between border-b border-stone-600 pb-1">
                  <span className="text-stone-300 text-sm">{stat.risk}:</span>
                  <span className={`font-bold text-sm ${stat.risk.includes('refugee') ? 'text-green-400' : 'text-red-400'}`}>{stat.odds}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-stone-400 text-sm mt-4">
          Sources: Cato Institute, National Consortium for the Study of Terrorism, CDC, FBI crime statistics.
          You are 3,220 times more likely to be struck by lightning than killed by a refugee terrorist.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">What $380 Billion Could Do</h2>
        <p>
          Resettling all 38 million people displaced by US wars would cost approximately $380 billion —
          assuming $10,000 per person in resettlement costs (housing, services, language training, job
          placement). That sounds expensive until you realize it's less than 5% of what the wars themselves cost.
        </p>
        <p>
          Put differently: the US spent $8 trillion breaking these countries and displacing these people.
          It would cost $380 billion to resettle them — less than the Pentagon spends in a typical year.
          The country that can afford $886 billion per year for its military cannot afford $380 billion
          once to house the people that military displaced.
        </p>
      </div>

      {/* Cost Comparison */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Cost of Decency vs. The Cost of War</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-950/30 border border-red-800 rounded p-4">
            <h3 className="text-red-400 font-bold mb-3">Cost of Creating the Crisis</h3>
            <div className="space-y-2">
              {[
                { item: 'Iraq War (2003-2011)', cost: '$2.4 trillion' },
                { item: 'Afghanistan War (2001-2021)', cost: '$2.3 trillion' },
                { item: 'Syria operations (2014-present)', cost: '$100+ billion' },
                { item: 'Libya intervention (2011)', cost: '$1.1 billion' },
                { item: 'Yemen support (2015-present)', cost: '$10.7 billion' },
                { item: 'Somalia operations (2007-present)', cost: '$5+ billion' },
              ].map(war => (
                <div key={war.item} className="flex justify-between border-b border-stone-600 pb-1">
                  <span className="text-stone-300 text-sm">{war.item}:</span>
                  <span className="text-red-400 font-bold text-sm">{war.cost}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-red-800">
                <div className="flex justify-between">
                  <span className="text-white font-bold">TOTAL WAR COSTS:</span>
                  <span className="text-red-400 font-bold">$8+ trillion</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-950/30 border border-green-800 rounded p-4">
            <h3 className="text-green-400 font-bold mb-3">Cost of Fixing the Crisis</h3>
            <div className="space-y-2">
              {[
                { item: 'Resettle 38M displaced @ $10K each', cost: '$380 billion' },
                { item: 'As % of total war costs', cost: '4.75%' },
                { item: 'vs. 2024 Pentagon budget', cost: '43% (less than half)' },
                { item: 'vs. 2017 GOP tax cuts', cost: '25%' },
                { item: 'vs. COVID stimulus spending', cost: '6%' },
                { item: 'Per American taxpayer', cost: '$2,300' },
              ].map(solution => (
                <div key={solution.item} className="flex justify-between border-b border-stone-600 pb-1">
                  <span className="text-stone-300 text-sm">{solution.item}:</span>
                  <span className="text-green-400 font-bold text-sm">{solution.cost}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-green-800">
                <div className="flex justify-between">
                  <span className="text-white font-bold">TOTAL RESETTLEMENT:</span>
                  <span className="text-green-400 font-bold">$380 billion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-stone-400 text-sm mt-4">
          The math is simple: we spent 21 times more money creating the refugee crisis than it would cost to solve it.
          This is not a resource problem. It's a priority problem.
        </p>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line</h2>
        <p>
          The United States has spent $8+ trillion destroying countries in the name of freedom, democracy, and human
          rights. Those wars have displaced 38 million people — more than any conflict since World War II. And the
          United States has admitted less than 1% of the people it displaced.
        </p>
        <p>
          We bomb their countries. We destroy their infrastructure. We topple their governments. We create the
          conditions for civil war, famine, and chaos. And when the survivors — the people who lost their homes, their
          livelihoods, their families — arrive at our border asking for help, we say no.
        </p>
        <p>
          The interpreters who risked their lives for American troops are trapped in a bureaucratic backlog. The
          children born in refugee camps will spend their entire childhoods there. The countries next door — Turkey,
          Lebanon, Jordan, Pakistan — shoulder a burden that the richest country in the world refuses to share.
        </p>
        <p>
          This is not a failure of resources. It is a failure of moral imagination. A country that can find $886
          billion for its military can find room for the people that military displaced. It simply chooses not to.
        </p>
        <p>
          In 1939, the United States turned away the MS St. Louis, a ship carrying 937 Jewish refugees fleeing Nazi Germany.
          More than 250 of those refugees later died in the Holocaust. Today, that decision is universally condemned
          as a moral failure. Future generations will judge America's refusal of War on Terror refugees the same way.
        </p>
        <p>
          The difference is this time, we know better. We have the resources, the infrastructure, and the evidence
          that refugee resettlement works. We simply lack the political will to do what is both economically rational
          and morally necessary. History will not forgive this choice.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/undeclared-wars">America's Undeclared Wars: How Presidents Bypassed Congress</Link></li>
          <li><Link href="/analysis/cost-of-empire">The $886 Billion War Machine</Link></li>
          <li><Link href="/analysis/base-nation">750+ Bases in 80 Countries</Link></li>
          <li><Link href="/analysis/allies-and-enemies">How Our Allies Become Our Enemies</Link></li>
          <li><Link href="/analysis/nuclear-close-calls">How Close We've Come to Nuclear War</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
