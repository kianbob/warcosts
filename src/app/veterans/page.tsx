import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Veterans Crisis — Broken Promises, Broken Lives | WarCosts',
  description: '22 million living veterans. 17 suicides per day. 500K+ with PTSD. 37K+ homeless. From the Bonus Army to burn pits — America\'s history of betraying those it sends to war.',
  keywords: ['veteran crisis', 'veteran suicide', 'veteran PTSD', 'VA scandal', 'burn pits', 'Agent Orange', 'veteran homelessness', 'military sexual trauma', 'Gulf War Syndrome', 'Walter Reed scandal'],
  openGraph: {
    title: 'Veterans Crisis — Broken Promises, Broken Lives',
    description: 'The government sends them to war. Then it abandons them.',
    url: 'https://warcosts.org/veterans',
    type: 'article',
  },
}

const veteranStats = [
  { label: 'Living US veterans', value: '18.6 million', source: 'VA 2023' },
  { label: 'Post-9/11 veterans', value: '4.1 million', source: 'VA 2023' },
  { label: 'Vietnam-era veterans', value: '5.9 million', source: 'VA 2023' },
  { label: 'Gulf War-era veterans', value: '4.7 million', source: 'VA 2023' },
  { label: 'Women veterans', value: '2.1 million', source: 'VA 2023' },
  { label: 'VA healthcare enrollees', value: '9.1 million', source: 'VA FY2023' },
  { label: 'VA annual budget', value: '$325 billion (FY2024)', source: 'VA Budget' },
  { label: 'VA employees', value: '412,000+', source: 'VA 2023' },
]

const crisisNumbers = [
  { crisis: 'Suicides per day', value: '17.5', context: '6,400+ per year. More than all post-9/11 combat deaths combined since 2001.' },
  { crisis: 'PTSD diagnoses', value: '500,000+', context: '11–20% of post-9/11 veterans. 10–31% of Vietnam veterans over their lifetime.' },
  { crisis: 'Traumatic Brain Injury', value: '450,000+', context: 'The "signature wound" of Iraq and Afghanistan. Linked to depression, impulsivity, early-onset dementia.' },
  { crisis: 'Homeless on any night', value: '35,574', context: 'HUD 2023 Point-in-Time Count. Veterans are 50% more likely to become homeless than civilians.' },
  { crisis: 'Awaiting disability claims', value: '800,000+', context: 'Average processing time: 150+ days. Some claims take years. Veterans die waiting.' },
  { crisis: 'Military sexual trauma', value: '1 in 3 women, 1 in 50 men', context: 'Sexual assault or harassment during service. Independently predicts PTSD and suicide.' },
  { crisis: 'Substance abuse disorders', value: '2× civilian rate', context: 'Alcohol abuse is the most common. Opioid prescriptions from VA peaked at millions of prescriptions/year.' },
  { crisis: 'Burn pit exposure', value: '3.5 million', context: 'Troops exposed to toxic open-air burn pits in Iraq and Afghanistan. Respiratory cancers, rare brain cancers.' },
]

const betrayals = [
  {
    year: 1932,
    event: 'The Bonus Army',
    detail: 'In 1932, 43,000 WWI veterans and their families marched on Washington, D.C. to demand early payment of bonus certificates promised for their service. They built a shantytown on the Anacostia Flats. President Hoover ordered the Army to evict them. General Douglas MacArthur — exceeding his orders — sent infantry, cavalry, and six tanks against unarmed veterans and their families. Soldiers used bayonets and tear gas. Two veterans were killed. A baby died from tear gas exposure. The shantytown was burned to the ground. MacArthur called the veterans "a bad-looking mob animated by the essence of revolution."',
    aftermath: 'The Bonus Bill was eventually passed in 1936, four years later. MacArthur faced no consequences.',
  },
  {
    year: 1947,
    event: 'Atomic Veterans Silenced',
    detail: 'Between 1945 and 1962, approximately 400,000 US military personnel were exposed to nuclear radiation during atmospheric nuclear tests and the occupations of Hiroshima and Nagasaki. These "atomic veterans" were ordered to march toward ground zero, fly through mushroom clouds, and scrub contaminated ships — often with no protective equipment. They were then sworn to secrecy under penalty of imprisonment and told never to discuss their exposure, even with doctors.',
    aftermath: 'The secrecy order was not lifted until 1996. By then, tens of thousands had died of radiation-related cancers. Compensation has been minimal.',
  },
  {
    year: 1962,
    event: 'Agent Orange (Vietnam)',
    detail: 'Between 1962 and 1971, the US military sprayed 20 million gallons of herbicides — primarily Agent Orange, contaminated with the dioxin TCDD — over 4.5 million acres of Vietnam. An estimated 2.6 million US troops served in areas sprayed with Agent Orange. The manufacturer (Dow Chemical, Monsanto) and the military knew about the health risks. Troops were told it was harmless.',
    aftermath: 'The VA denied Agent Orange health claims for 30 years. An estimated 300,000 veterans suffered cancers, birth defects in children, diabetes, Parkinson\'s, and heart disease. The VA didn\'t acknowledge the link until 1991, and the list of presumptive conditions has been expanded repeatedly through 2024. Many veterans died before their claims were approved.',
  },
  {
    year: 1991,
    event: 'Gulf War Syndrome',
    detail: 'After the 1991 Gulf War, nearly 250,000 of the 700,000 deployed troops reported unexplained chronic symptoms: fatigue, cognitive problems, widespread pain, gastrointestinal issues, skin rashes. The DOD insisted for years that the symptoms were psychological — "stress" or malingering. Veterans were told they were imagining it.',
    aftermath: 'It took 18 years (2008) for a congressionally mandated panel to conclude that Gulf War Illness is a real physical condition, likely caused by exposure to pesticides, nerve agent prophylaxis pills (pyridostigmine bromide), and possibly depleted uranium or oil well fire smoke. The VA still denies many GWI claims.',
  },
  {
    year: 2001,
    event: 'Burn Pits (Iraq & Afghanistan)',
    detail: 'For over a decade, the US military burned everything — medical waste, batteries, tires, plastics, human waste, ammunition, and chemicals — in massive open-air burn pits on bases across Iraq and Afghanistan. KBR (a Halliburton subsidiary) operated many of these pits. An estimated 3.5 million service members were exposed to toxic fumes daily.',
    aftermath: 'Veterans reported respiratory cancers, constrictive bronchiolitis, and rare brain cancers at elevated rates. The VA denied claims for over a decade. The PACT Act, signed in August 2022 after advocacy by Jon Stewart and veteran groups, finally created presumptive coverage for 23 conditions and authorized $280 billion in new VA funding over 10 years. Thousands of veterans died before the law passed.',
  },
  {
    year: 2007,
    event: 'Walter Reed Scandal',
    detail: 'The Washington Post revealed deplorable conditions at Walter Reed Army Medical Center — the flagship military hospital. Wounded warriors from Iraq and Afghanistan were living in rooms with mold, rodents, cockroaches, and rotting walls. Outpatient soldiers, many with amputations and brain injuries, waited months for treatment while lost in bureaucratic limbo. Building 18, an outpatient facility, was described as a "dungeon."',
    aftermath: 'The Secretary of the Army and the Walter Reed commander were fired. The hospital was eventually closed and relocated. But investigations revealed the conditions were symptoms of systemic neglect across the military healthcare system.',
  },
  {
    year: 2014,
    event: 'VA Wait-Time Scandal',
    detail: 'Whistleblowers revealed that the Phoenix VA Health Care System had maintained secret wait lists to hide the fact that veterans were waiting months — up to 115 days — for medical appointments. At least 40 veterans died while waiting for care at the Phoenix facility alone. Employees had been instructed to falsify records to make wait times appear acceptable.',
    aftermath: 'VA Secretary Eric Shinseki resigned. The scandal was found to be systemic, not limited to Phoenix — similar practices were uncovered at VA facilities nationwide. The Veterans Access, Choice, and Accountability Act (2014) was passed, but problems persisted. The VA inspector general found the manipulation of wait time data continued at some facilities even after the scandal.',
  },
  {
    year: 2017,
    event: 'Camp Lejeune Water Contamination',
    detail: 'From 1953 to 1987, Marines, their families, and civilian workers at Camp Lejeune, North Carolina were exposed to drinking water contaminated with industrial solvents, benzene, and other toxic chemicals at levels 240 to 3,400 times permitted by safety standards. An estimated 1 million people were exposed over the 34-year period. The Marine Corps knew about the contamination as early as 1982 and continued using the water sources.',
    aftermath: 'The Camp Lejeune Justice Act (2022) finally allowed affected individuals to file claims. Cancers, birth defects, Parkinson\'s, and other conditions have been documented. The VA has been criticized for slow processing of Camp Lejeune claims — as of 2024, only a tiny fraction have been resolved.',
  },
]

const militarySexualTrauma = {
  stats: [
    'DOD estimates 20,000+ sexual assaults per year in the military (FY2022 estimate: 29,000)',
    '1 in 3 women veterans and 1 in 50 men report MST to the VA',
    'Only 7,700 reports were filed in FY2022 — the vast majority go unreported',
    'Conviction rate: approximately 4% of reported cases',
    'Until 2022, commanders — not independent prosecutors — decided whether to prosecute',
    'MST is an independent risk factor for PTSD, depression, substance abuse, and suicide',
    'Women who report MST are 14× more likely to develop PTSD than those without MST',
  ],
  reforms: 'The Military Justice Improvement and Increasing Prevention Act (2021) removed sexual assault prosecution authority from commanders and gave it to independent military prosecutors. Implementation has been slow, and advocates argue the reforms don\'t go far enough.',
}

const opioidCrisis = {
  stats: [
    'VA prescribed opioids to 679,000 veterans in a single year (FY2012 peak)',
    'Veterans receive opioid prescriptions at 2× the civilian rate',
    'Chronic pain affects 66% of post-9/11 veterans',
    'Opioid overdose deaths among VA patients: 5× increase from 2000 to 2016',
    'VA was among the largest institutional prescribers of opioids in the country',
    'Many veterans transitioned from VA-prescribed opioids to heroin when prescriptions were cut',
  ],
  context: 'The VA\'s opioid prescribing practices were driven by the same forces as the broader opioid epidemic: aggressive pharmaceutical marketing (particularly by Purdue Pharma), a culture that treated pain as a "vital sign," and a system overwhelmed by chronic pain patients from two simultaneous wars. The VA has significantly reduced opioid prescriptions since 2012, but the damage was done — addiction, overdose deaths, and shattered lives.',
}

export default function VeteransPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Veterans Crisis — Broken Promises, Broken Lives',
    description: 'America\'s history of betraying those it sends to war. 17 suicides per day, 500K+ with PTSD, and a pattern of denial.',
    url: 'https://warcosts.org/veterans',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-03-01',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Veterans Crisis' }]} />

      {/* 988 Crisis Banner */}
      <div className="bg-red-900 text-white rounded-xl p-6 mb-8 text-center">
        <p className="font-bold text-xl mb-2">If you or a veteran you know is in crisis</p>
        <p className="text-5xl font-bold font-[family-name:var(--font-heading)] mb-2">988</p>
        <p className="text-lg">Suicide &amp; Crisis Lifeline — Veterans press 1</p>
        <p className="text-red-200 text-sm mt-2">Call or text 988 · Chat at VeteransCrisisLine.net · Available 24/7/365</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="tel:988" className="bg-white text-red-900 px-6 py-2 rounded-lg font-bold hover:bg-red-50 transition">
            📞 Call 988
          </a>
          <a href="sms:838255" className="bg-white text-red-900 px-6 py-2 rounded-lg font-bold hover:bg-red-50 transition">
            💬 Text 838255
          </a>
        </div>
      </div>

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">Veterans Crisis</h1>
      <p className="text-red-800 font-bold text-xl mb-4">The government sends them to war. Then it abandons them.</p>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        The United States has a long, documented history of failing the men and women it sends to fight its wars.
        From the Bonus Army of 1932 to the burn pit crisis of today, the pattern is the same: expose service members
        to danger and toxins, deny the consequences, delay care, and let veterans suffer and die while the bureaucracy
        grinds on.
      </p>
      <ShareButtons title="Veterans Crisis — Broken Promises, Broken Lives" />

      {/* AI Overview */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-blue-900 mb-3">🧠 Key Insights</h3>
        <ul className="space-y-2 text-sm text-blue-900">
          <li>• <strong>17 veterans kill themselves every day — over 6,400 per year</strong> — more than twice the total combat deaths in 20 years of Afghanistan. The true number may be 20–24/day due to undercounting.</li>
          <li>• <strong>3.5 million troops were exposed to toxic burn pits</strong> — the VA denied claims for over a decade. Thousands died before the PACT Act (2022) finally created presumptive coverage, authorizing $280B — just 3.2% of the $8.6T war cost.</li>
          <li>• <strong>800,000+ disability claims are pending with 150+ day average processing</strong> — an estimated 1,500+ veterans die per month with unresolved claims. The VA hired 12,000 processors but still can&apos;t keep pace.</li>
          <li>• <strong>The pattern repeats across generations: expose, deny, delay, acknowledge after thousands die</strong> — from atomic veterans (1945), to Agent Orange (30 years denied), to Gulf War Syndrome (18 years), to burn pits (20+ years).</li>
          <li>• <strong>The VA budget is $325B — larger than the GDP of most countries — yet 35,000+ veterans sleep on streets</strong> — if the government can&apos;t keep faith with those it sends to fight, it has no moral authority to create new veterans.</li>
        </ul>
      </div>

      {/* Key crisis stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { value: '17/day', label: 'Veteran suicides' },
          { value: '500K+', label: 'PTSD diagnoses' },
          { value: '450K+', label: 'Traumatic brain injuries' },
          { value: '35K+', label: 'Homeless veterans' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
            <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-600 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: '18.6M', label: 'Living US veterans' },
          { value: '800K+', label: 'Pending disability claims' },
          { value: '3.5M', label: 'Exposed to burn pits' },
          { value: '$325B', label: 'VA annual budget' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-4 shadow-sm border text-center">
            <p className="text-2xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Libertarian framing */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-10">
        <p className="text-lg italic leading-relaxed">
          &ldquo;When the government sends a citizen to war, it enters into the most profound contract a state can make:
          we will risk your life, and in return, we will care for you. America has broken this contract again and again —
          with the Bonus Army, with Agent Orange veterans, with Gulf War Syndrome sufferers, with burn pit victims.
          The pattern is always the same: deny, delay, and let the veteran die before the claim is processed.
          A government that cannot keep faith with those it sends to kill and die has no moral authority to send anyone.&rdquo;
        </p>
      </div>

      <div className="prose max-w-3xl text-stone-600">
        {/* The Crisis in Numbers */}
        <h2 className="font-[family-name:var(--font-heading)]">The Crisis in Numbers</h2>
        <p>
          The scope of the veterans crisis is staggering. These are not abstract statistics — each number represents
          a human being who served their country and was failed by the system that sent them to war.
        </p>
      </div>

      {/* Crisis numbers cards */}
      <div className="space-y-3 my-8">
        {crisisNumbers.map(item => (
          <div key={item.crisis} className="bg-white rounded-lg p-5 border shadow-sm">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-2xl font-bold text-red-800 font-[family-name:var(--font-heading)] whitespace-nowrap">{item.value}</span>
              <span className="font-semibold text-stone-800">{item.crisis}</span>
            </div>
            <p className="text-stone-500 text-sm">{item.context}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 The Real Suicide Number</p>
          <p className="text-amber-800">
            The commonly cited &ldquo;22 a day&rdquo; figure comes from a 2012 VA study using data from only 21 states. The
            revised figure of ~17 per day is based on more comprehensive data. However, this number only counts veterans
            who are identified in death records and VA systems. Former service members who received other-than-honorable
            discharges, those whose veteran status isn&rsquo;t recorded on death certificates, and National Guard/Reserve
            members who never activated may not be counted. Some researchers estimate the true number could be
            <strong> 20–24 per day</strong>. See our <Link href="/veteran-suicide">detailed veteran suicide page</Link> for
            full breakdown by age, era, branch, and demographics.
          </p>
        </div>

        {/* Veteran Population */}
        <h2 className="font-[family-name:var(--font-heading)]">America&rsquo;s Veterans: Who Are They?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-8">
        {veteranStats.map(stat => (
          <div key={stat.label} className="bg-white rounded-lg p-4 border">
            <div className="flex justify-between items-center">
              <span className="text-stone-700 font-medium">{stat.label}</span>
              <span className="font-bold text-stone-900 font-[family-name:var(--font-heading)]">{stat.value}</span>
            </div>
            <p className="text-stone-400 text-xs mt-1">Source: {stat.source}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        {/* A History of Betrayal */}
        <h2 className="font-[family-name:var(--font-heading)]">A History of Betrayal</h2>
        <p>
          The failures are not isolated incidents. They form a pattern spanning nearly a century — each time the
          government exposes service members to harm, denies the consequences, fights the evidence, and eventually
          (sometimes decades later) acknowledges what veterans knew all along. By then, many have died.
        </p>
      </div>

      {/* Betrayal timeline */}
      <div className="space-y-6 my-8">
        {betrayals.map(item => (
          <div key={item.event} className="bg-white rounded-xl shadow-sm border-l-4 border-red-500 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-red-100 text-red-800 text-sm font-bold px-3 py-1 rounded-full">{item.year}</span>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-800">{item.event}</h3>
            </div>
            <p className="text-stone-600 text-sm mb-3">{item.detail}</p>
            <p className="text-red-700 text-sm font-semibold">Aftermath: {item.aftermath}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <div className="not-prose bg-stone-900 text-white rounded-xl p-6 my-8">
          <p className="text-lg italic leading-relaxed">
            &ldquo;Notice the pattern: the government exposes troops to harm — radiation, herbicides, nerve agents,
            burn pits, contaminated water. Then it denies the connection for years or decades. Then it fights the
            evidence. Then it grudgingly acknowledges the truth — but only after thousands have died without
            compensation. And then it does it again. This is not a series of mistakes. It is a system that
            treats soldiers as disposable and accountability as optional.&rdquo;
          </p>
        </div>

        {/* Military Sexual Trauma */}
        <h2 className="font-[family-name:var(--font-heading)]">Military Sexual Trauma</h2>
        <p>
          Military sexual trauma (MST) — sexual assault or sexual harassment during military service — is one of
          the least discussed and most devastating crises facing veterans. The Department of Defense&rsquo;s own estimates
          suggest the problem is far larger than reported cases indicate.
        </p>

        <ul>
          {militarySexualTrauma.stats.map((stat, i) => (
            <li key={i}><strong>{stat}</strong></li>
          ))}
        </ul>

        <p>{militarySexualTrauma.reforms}</p>

        <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-6 my-8">
          <p className="font-bold text-red-900 font-[family-name:var(--font-heading)] text-lg mb-2">⚠️ The Command Problem</p>
          <p className="text-red-800">
            For decades, military commanders — not independent prosecutors — decided whether to investigate and
            prosecute sexual assault cases within their units. This created an obvious conflict of interest: the
            commander&rsquo;s career depends on unit performance metrics, and sexual assault cases are bad for metrics.
            The result was a system that structurally protected predators and punished victims who reported.
            While recent reforms have moved prosecution authority to independent military prosecutors, implementation
            has been slow and the cultural legacy remains deeply embedded.
          </p>
        </div>

        {/* Opioid Crisis */}
        <h2 className="font-[family-name:var(--font-heading)]">Veterans and the Opioid Crisis</h2>
        <p>
          The VA&rsquo;s role in the opioid epidemic is one of the most damaging chapters in recent veteran care history.
          Veterans returning from Iraq and Afghanistan with severe chronic pain were prescribed opioids at alarming rates.
        </p>

        <ul>
          {opioidCrisis.stats.map((stat, i) => (
            <li key={i}>{stat}</li>
          ))}
        </ul>

        <p>{opioidCrisis.context}</p>

        {/* Homelessness */}
        <h2 className="font-[family-name:var(--font-heading)]">Veteran Homelessness</h2>
        <p>
          On any given night, over <strong>35,000 veterans</strong> are homeless in America. Veterans are 50% more
          likely to become homeless than civilians, and the factors are compounding: PTSD, substance abuse, traumatic
          brain injury, difficulty transitioning to civilian employment, and a VA system that often can&rsquo;t respond
          fast enough.
        </p>
        <ul>
          <li>HUD 2023 Point-in-Time Count: <strong>35,574 homeless veterans</strong></li>
          <li>Approximately <strong>1.4 million veterans</strong> are at risk of homelessness (doubled up, in shelters, or unstable housing)</li>
          <li>Post-9/11 veteran homelessness is <strong>increasing</strong> even as overall veteran homelessness has decreased</li>
          <li>Women veterans are the <strong>fastest-growing homeless population</strong></li>
          <li>Black veterans are disproportionately affected — representing 33% of homeless veterans but 12% of the veteran population</li>
          <li>Over 50% of homeless veterans have a mental health condition; 70% have a substance use disorder</li>
        </ul>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 The VA Budget Paradox</p>
          <p className="text-amber-800">
            The VA&rsquo;s budget is <strong>$325 billion in FY2024</strong> — larger than the GDP of most countries. Yet
            veterans still wait months for appointments, disability claims take years, and 35,000+ sleep on the streets.
            The VA is the second-largest federal department (after DOD) with 412,000+ employees. The problem isn&rsquo;t
            just money — it&rsquo;s a government monopoly on veteran care with all the inefficiencies that monopolies produce.
            Libertarians argue that giving veterans direct healthcare vouchers to use at any provider would be more effective
            than funneling everything through a massive, scandal-prone bureaucracy.
          </p>
        </div>

        {/* The Disability Claims Backlog */}
        <h2 className="font-[family-name:var(--font-heading)]">The Disability Claims Backlog</h2>
        <p>
          As of 2024, the VA has over <strong>800,000 pending disability claims</strong>, with an average processing time
          exceeding 150 days. For complex claims involving multiple conditions — common among combat veterans — the
          wait can stretch to years. The PACT Act, while expanding coverage for burn pit and toxic exposure veterans,
          has also added hundreds of thousands of new claims to the system.
        </p>
        <ul>
          <li>Total pending claims: <strong>800,000+</strong> (2024)</li>
          <li>Average processing time: <strong>150+ days</strong></li>
          <li>Appeals can take <strong>3–7 years</strong></li>
          <li>An estimated <strong>1,500+ veterans die per month</strong> with pending disability claims</li>
          <li>PACT Act added <strong>4.4 million</strong> newly eligible veterans</li>
          <li>The VA hired 12,000 additional claims processors in 2023 but still cannot keep pace</li>
        </ul>

        {/* VA Healthcare: The Monopoly Problem */}
        <h2 className="font-[family-name:var(--font-heading)]">VA Healthcare: A Government Monopoly</h2>
        <p>
          The VA operates the largest integrated healthcare system in the United States: 1,321 healthcare facilities,
          including 171 VA Medical Centers and 1,138 outpatient clinics. For many veterans — especially those in rural
          areas — the VA is the only realistic option for care.
        </p>
        <p>
          The VA does some things well. VA healthcare consistently scores high on quality metrics for primary care,
          mental health treatment, and certain specialties. The VA&rsquo;s electronic health records system was once
          considered state-of-the-art. VA research has produced major medical advances, including the implantable
          cardiac pacemaker, the CT scan, and treatments for PTSD.
        </p>
        <p>
          But the system also suffers from the pathologies of any large government monopoly: bureaucratic inertia,
          resistance to accountability, wait time manipulation, and a culture that sometimes prioritizes institutional
          reputation over patient care. The 2014 wait-time scandal revealed these problems to the public, but
          insiders say many of the underlying issues persist.
        </p>

        <div className="not-prose bg-stone-900 text-white rounded-xl p-6 my-8">
          <p className="text-lg italic leading-relaxed">
            &ldquo;The libertarian position on veteran care is not that veterans should receive less — it is that
            they should receive <em>better</em>. A veteran with a voucher can choose any doctor, any hospital,
            any specialist. They don&rsquo;t wait 150 days. They don&rsquo;t beg a bureaucracy for permission.
            They make their own healthcare decisions, like every other citizen. The idea that the same government
            that couldn&rsquo;t prevent the Walter Reed scandal, the wait-time scandal, and decades of toxic exposure
            denial is the <em>only</em> entity qualified to provide veteran healthcare defies logic and evidence.&rdquo;
          </p>
        </div>

        {/* What Would Actually Help */}
        <h2 className="font-[family-name:var(--font-heading)]">What Would Actually Help</h2>
        <p>
          Veteran advocacy organizations and policy researchers have identified interventions that could meaningfully
          reduce veteran suffering:
        </p>
        <ul>
          <li><strong>Healthcare choice:</strong> Expand the MISSION Act to give all veterans access to private healthcare, not just those who meet distance or wait-time thresholds</li>
          <li><strong>Immediate processing of toxic exposure claims:</strong> Presume service connection for all veterans who served in known contamination zones, rather than requiring individual proof</li>
          <li><strong>Lethal means counseling:</strong> 70% of veteran suicides involve firearms. Voluntary secure storage programs and crisis counseling about lethal means access could save thousands of lives</li>
          <li><strong>Peer support networks:</strong> Veterans trust other veterans. Peer counselors with lived experience are more effective than many clinical interventions for PTSD and suicidal ideation</li>
          <li><strong>Housing First:</strong> Provide housing immediately, without preconditions like sobriety. Research consistently shows this approach is more effective than &ldquo;treatment first&rdquo; models</li>
          <li><strong>Transition assistance:</strong> Start transition planning 2 years before separation, not 2 months. Include financial literacy, career counseling, and mental health screening</li>
          <li><strong>Other-than-honorable discharge reform:</strong> Veterans with OTH discharges (often related to PTSD or MST) are currently denied most VA benefits. This punishes the wounded.</li>
        </ul>

        {/* The Moral Test */}
        <h2 className="font-[family-name:var(--font-heading)]">The Moral Test</h2>
        <p>
          How a nation treats its veterans is the most honest measure of whether it meant what it said when it
          sent them to war. By this measure, the United States has failed — not once, but systematically, across
          generations, under both parties, through both war and peace.
        </p>
        <p>
          The government spent <strong>$8.6 trillion</strong> on the post-9/11 wars (Brown University Costs of War Project).
          It authorized <strong>$280 billion</strong> for the PACT Act — 3.2% of the war cost — only after years of advocacy
          and only after thousands of burn pit veterans had already died. The Pentagon&rsquo;s budget for new weapons exceeds
          the entire VA budget every year. We always find money for the next war. We never fully fund the costs of the last one.
        </p>

        <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-6 my-8">
          <p className="font-bold text-red-900 font-[family-name:var(--font-heading)] text-lg mb-2">⚠️ The Core Libertarian Argument</p>
          <p className="text-red-800">
            If a government cannot care for its veterans — if it systematically breaks the most sacred promise it makes —
            then it has forfeited the moral authority to create new veterans. Every vote for war is a promise to fund
            the aftermath. Every budget that fully funds weapons but underfunds veteran care is a broken promise.
            The libertarian position is simple: <strong>if you can&rsquo;t afford the veterans, you can&rsquo;t afford the war.</strong>
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Sources</h2>
        <ul className="text-sm">
          <li>VA National Veteran Suicide Prevention Annual Report (2023)</li>
          <li>HUD Annual Homeless Assessment Report to Congress (2023)</li>
          <li>Brown University Costs of War Project</li>
          <li>Government Accountability Office, VA disability claims processing reports</li>
          <li>DOD Annual Report on Sexual Assault in the Military (FY2022)</li>
          <li>Congressional Research Service, Agent Orange and burn pits reports</li>
          <li>VA Budget Request for FY2024</li>
          <li>Research Advisory Committee on Gulf War Veterans&rsquo; Illnesses (2008 report)</li>
          <li>Washington Post, &ldquo;The Other Walter Reed&rdquo; (2007)</li>
          <li>VA Office of Inspector General, wait-time reports (2014–2024)</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Related Pages</h2>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {[
            { href: '/veteran-suicide', label: 'Veteran Suicide Deep Dive', desc: 'Detailed stats by age, era, branch, demographics' },
            { href: '/casualties', label: 'Casualties', desc: 'The full human cost of America\'s wars' },
            { href: '/cost-of-war', label: 'Cost of War', desc: '$8.6 trillion for post-9/11 wars alone' },
            { href: '/nuclear', label: 'Nuclear Weapons', desc: '$10T+ on weapons while veterans suffer' },
            { href: '/intelligence', label: 'Intelligence Agencies', desc: 'The shadow state that starts the wars' },
            { href: '/spending', label: 'Military Spending', desc: 'Where the money actually goes' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="block bg-white rounded-lg p-4 border hover:shadow-md transition">
              <p className="font-semibold text-blue-800">{link.label}</p>
              <p className="text-stone-500 text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
