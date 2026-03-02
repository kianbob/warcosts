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

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/human-cost">The Human Cost of War</Link></li>
          <li><Link href="/analysis/the-aftermath">The Aftermath: When Troops Come Home</Link></li>
          <li><Link href="/analysis/what-could-we-buy">What $11.6 Trillion Could Have Bought Instead</Link></li>
          <li><Link href="/analysis/war-on-terror">The War on Terror: $8 Trillion Later</Link></li>
          <li><Link href="/analysis/media-and-war">Manufacturing Consent: How Media Sells Every War</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
