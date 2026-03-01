import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Veteran Suicide — 17 Per Day, 6,000+ Per Year',
  description: '17 veterans die by suicide every day in America — 4x more than die in combat. Detailed statistics by era, age, gender, branch. PTSD, TBI, moral injury, Agent Orange, burn pits. 988 crisis info.',
  keywords: ['veteran suicide', 'veteran suicide rate', 'veteran suicide statistics', 'PTSD veterans', 'veteran mental health', '22 a day', 'veteran crisis line', 'veteran PTSD'],
  openGraph: {
    title: 'Veteran Suicide — 17 Per Day',
    description: 'More veterans die by suicide than in combat. This is America\'s hidden war.',
    url: 'https://warcosts.org/veteran-suicide',
    type: 'article',
  },
}

const riskFactors = [
  { factor: 'PTSD', prevalence: '11–20% of post-9/11 vets', desc: 'Persistent re-experiencing of trauma, hypervigilance, emotional numbing' },
  { factor: 'Traumatic Brain Injury', prevalence: '430,000+ diagnosed since 2000', desc: 'The "signature wound" of Iraq/Afghanistan; linked to depression & impulsivity' },
  { factor: 'Moral Injury', prevalence: 'Unmeasured — widespread', desc: 'Guilt from killing, witnessing atrocities, or following orders that violated personal morality' },
  { factor: 'Chronic Pain', prevalence: '66% of post-9/11 vets', desc: 'Musculoskeletal injuries, often treated with opioids; pain × addiction = crisis' },
  { factor: 'Military Sexual Trauma', prevalence: '1 in 3 women, 1 in 50 men', desc: 'Sexual assault or harassment during service; independently predicts suicide' },
  { factor: 'Social Isolation', prevalence: 'Epidemic levels', desc: 'Loss of unit cohesion, difficulty reintegrating, civilian-military divide' },
  { factor: 'Substance Abuse', prevalence: '2x civilian rate for alcohol', desc: 'Self-medication for untreated PTSD, pain, and trauma' },
  { factor: 'Access to Firearms', prevalence: '70% of veteran suicides use firearms', desc: 'Military familiarity with weapons combined with crisis = lethal combination' },
  { factor: 'Homelessness', prevalence: '33,000+ on any given night', desc: 'Veterans are 50% more likely to become homeless than civilians' },
  { factor: 'Financial Distress', prevalence: '1 in 5 post-9/11 vets', desc: 'Difficulty transitioning to civilian employment; VA disability claim delays worsen financial stress' },
]

const demographics = [
  { group: 'Age 18–34', rate: 'Highest risk', detail: '2.5x the suicide rate of same-age civilians' },
  { group: 'Age 35–54', rate: '1.8x civilians', detail: 'Peak PTSD symptom period; career and relationship stress compounds trauma' },
  { group: 'Age 55–74', rate: '1.4x civilians', detail: 'Vietnam-era veterans; late-onset PTSD, Agent Orange health effects' },
  { group: 'Age 75+', rate: 'Elevated but declining', detail: 'Korea/WWII veterans; declining population but persistent trauma' },
  { group: 'Women Veterans', rate: '2.2x civilian women', detail: 'Rate increased 166% since 2001; fastest-growing group. MST is major driver.' },
  { group: 'National Guard/Reserve', rate: 'Equal to active duty', detail: 'Less access to VA services; "weekend warrior" stigma delays care' },
  { group: 'Combat-deployed', rate: '41% higher', detail: 'Direct combat exposure is the strongest predictor' },
  { group: 'Rural veterans', rate: '25% higher than urban', detail: 'Fewer mental health providers; higher gun ownership; greater isolation' },
]

const byBranch = [
  { branch: 'Army', rate: 'Highest absolute numbers', note: 'Largest branch, most ground combat exposure. Accounts for ~65% of all veteran suicides.' },
  { branch: 'Marine Corps', rate: 'Highest rate per capita', note: 'Highest combat intensity per service member. "Every Marine a rifleman" culture resists help-seeking.' },
  { branch: 'Navy', rate: 'Moderate', note: 'Submarine service, long deployments create unique stressors. SEALs face extreme PTSD rates.' },
  { branch: 'Air Force', rate: 'Lowest of traditional branches', note: 'But drone operators face unique moral injury from remote killing.' },
  { branch: 'Special Operations (all branches)', rate: 'Extremely high', note: 'Repeated high-intensity deployments. SOF community has lost more to suicide than combat since 2001.' },
]

const byEra = [
  { era: 'Post-9/11 (OEF/OIF/OND)', ptsdRate: '11–20%', tbiRate: '430,000+ diagnosed', suicideRate: '2.5x civilians (age 18–34)', note: 'Multiple deployments, IED exposure, counterinsurgency warfare. Highest TBI rates in history.' },
  { era: 'Gulf War (1990–1991)', ptsdRate: '10–12%', tbiRate: 'Moderate', suicideRate: '1.5x civilians', note: 'Gulf War Syndrome: unexplained chronic fatigue, pain, cognitive issues. Depleted uranium exposure.' },
  { era: 'Vietnam (1955–1975)', ptsdRate: '10–31% (lifetime)', tbiRate: 'Not tracked', suicideRate: '1.4x civilians', note: '2.7M served. Agent Orange exposure linked to cancers, birth defects. Social stigma compounded trauma.' },
  { era: 'Korea (1950–1953)', ptsdRate: '~10% (estimated)', tbiRate: 'Not tracked', suicideRate: 'Elevated', note: 'The "Forgotten War." Extreme cold, brutal combat, POW camps. Little mental health support on return.' },
  { era: 'World War II (1941–1945)', ptsdRate: '~8% (called "combat fatigue")', tbiRate: 'Not tracked', suicideRate: 'Lower than later eras', note: '16M served. "Greatest Generation" narrative masked severe trauma. Many self-medicated with alcohol.' },
]

const historicalTreatment = [
  { event: 'Bonus Army (1932)', desc: 'WWI veterans marched on Washington demanding promised bonus payments. Army Chief of Staff Douglas MacArthur ordered tanks and tear gas against them. 2 veterans killed, 1,000+ injured. Their shantytown was burned.' },
  { event: 'Agent Orange denial (1960s–1990s)', desc: 'The VA denied Agent Orange health claims for 30 years. An estimated 300,000 veterans suffered cancers, birth defects, and other ailments. The VA finally acknowledged the link in 1991 — after tens of thousands had died.' },
  { event: 'Gulf War Syndrome denial (1990s–2000s)', desc: 'Veterans reported chronic fatigue, cognitive issues, and pain. The DOD insisted it was psychological. It took 18 years for a federal panel to acknowledge Gulf War Illness as a real physical condition.' },
  { event: 'Walter Reed Scandal (2007)', desc: 'The Washington Post revealed deplorable conditions at Walter Reed Army Medical Center: mold, rodents, cockroaches, and months-long waits for treatment. Wounded warriors from Iraq and Afghanistan were living in squalor.' },
  { event: 'VA Wait-Time Scandal (2014)', desc: 'At least 40 veterans died waiting for care at the Phoenix VA. Employees falsified records to hide wait times of up to 115 days. The scandal led to the resignation of VA Secretary Shinseki — but systemic problems persist.' },
  { event: 'Burn Pit Exposure Denial (2001–2022)', desc: 'Hundreds of thousands of troops were exposed to toxic burn pit fumes in Iraq and Afghanistan. The VA denied claims for over a decade. The PACT Act (2022) finally acknowledged the harm — after Jon Stewart\'s advocacy and thousands of deaths.' },
]

const healthEffects = [
  { condition: 'Agent Orange (Vietnam)', affected: '300,000+ veterans', effects: 'Cancers (prostate, lung, bladder, lymphoma), Type 2 diabetes, heart disease, Parkinson\'s, birth defects in children', status: 'VA presumptive conditions list expanded multiple times. Many claims still denied.' },
  { condition: 'Burn Pits (Iraq/Afghanistan)', affected: '3.5 million exposed', effects: 'Respiratory cancers, constrictive bronchiolitis, rare brain cancers, chronic respiratory disease', status: 'PACT Act (2022) added 23 presumptive conditions. $280B in new VA funding over 10 years.' },
  { condition: 'Depleted Uranium (Gulf War/Iraq)', affected: 'Unknown — thousands', effects: 'Kidney damage, lung cancer, birth defects. Contamination persists in Iraqi soil.', status: 'DOD denies significant health risk. VA offers monitoring but no presumptive coverage.' },
  { condition: 'PFAS Contamination (US bases)', affected: 'Hundreds of bases, millions exposed', effects: 'Cancer, thyroid disease, immune suppression, reproductive harm', status: 'DOD identified 700+ bases with PFAS contamination. Cleanup barely started.' },
  { condition: 'TBI (all post-9/11)', affected: '430,000+ diagnosed', effects: 'Cognitive decline, depression, impulsivity, chronic headaches, early-onset dementia', status: 'Called the "signature wound" of Iraq/Afghanistan. Long-term effects still being studied.' },
  { condition: 'Hearing Loss/Tinnitus', affected: '#1 and #2 VA disability claims', effects: 'Permanent hearing damage, chronic ringing. Affects sleep, concentration, mental health.', status: 'Most common service-connected disabilities. 3M earplug lawsuit settled for $6B.' },
]

export default function VeteranSuicidePage() {
  const stats = loadData('stats.json')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Veteran Suicide — 17 Per Day, 6,000+ Per Year',
    description: 'More veterans die by suicide than in combat. Comprehensive statistics by era, age, gender, and branch. America\'s hidden war.',
    url: 'https://warcosts.org/veteran-suicide',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-01-01',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Veteran Suicide' }]} />

      {/* 988 Crisis Banner - PROMINENT */}
      <div className="bg-red-900 text-white rounded-xl p-6 mb-8 text-center">
        <p className="font-bold text-xl mb-2">If you or someone you know is in crisis</p>
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

      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">Veteran Suicide</h1>
      <p className="text-red-800 font-bold text-xl mb-4">17 veterans die by suicide every single day in America.</p>
      <p className="text-stone-500 mb-2 max-w-3xl text-lg">
        More American veterans have died by suicide since 9/11 than were killed in the entire War on Terror.
        An estimated <strong className="text-stone-800">130,000+ veterans</strong> have taken their own lives
        since 2001. This is not a statistic — it is a national emergency treated as an afterthought.
      </p>
      <ShareButtons title="Veteran Suicide — 17 Per Day" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { value: '17', label: 'Veterans lost per day' },
          { value: '6,200+', label: 'Per year' },
          { value: '4×', label: 'More die by suicide than combat' },
          { value: '57%', label: 'Higher rate than civilians' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
            <p className="text-4xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-600 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Additional stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: '130,000+', label: 'Veteran suicides since 2001' },
          { value: '70%', label: 'Involve firearms' },
          { value: '166%', label: 'Increase in female vet suicides' },
          { value: '50%', label: 'Don\'t seek treatment' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-4 shadow-sm border text-center">
            <p className="text-2xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <p className="text-lg">
          More American veterans have died by suicide since 9/11 than were killed in the entire War on Terror —
          in combat, by IEDs, in accidents, all of it combined. We send young men and women to war, expose them
          to unimaginable trauma, and then fail them so profoundly that they end their own lives at a rate that
          dwarfs the casualties of the wars themselves.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 About the Numbers: 22 vs 17</p>
          <p className="text-amber-800">
            The commonly cited figure of &ldquo;22 veterans a day&rdquo; comes from a 2012 VA report that used
            limited data from only 21 states. The number has been revised to approximately <strong>17 per day</strong> based
            on more comprehensive data (2021 National Veteran Suicide Prevention Annual Report, covering all 50
            states). However, this figure only counts veterans who are identified in death records and VA systems.
            The true number, including unregistered veterans and those whose veteran status is not recorded on
            death certificates, may still be higher than 17. Some researchers estimate the actual figure could be
            <strong> 20–24 per day</strong>.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The Numbers in Detail</h2>
        <ul>
          <li>Over <strong>6,200 veteran suicides per year</strong> — one every 85 minutes</li>
          <li>Veteran suicide rate is <strong>57% higher</strong> than non-veteran adults (after adjusting for age and sex)</li>
          <li>Female veteran suicide rate has <strong>increased 166%</strong> since 2001</li>
          <li>Women veterans die by suicide at <strong>2.2× the rate</strong> of civilian women</li>
          <li>Veterans aged 18–34 have the <strong>highest rate</strong> of any age group (2.5× civilians)</li>
          <li><strong>70%</strong> of veteran suicides involve firearms (vs. 50% in general population)</li>
          <li>Only <strong>50%</strong> of veterans needing mental health care seek treatment</li>
          <li>Of those who seek care, <strong>30%</strong> drop out before completing treatment</li>
          <li>Since 2001, an estimated <strong>130,000+ veterans</strong> have died by suicide — vs. ~7,000 killed in combat</li>
          <li>Veteran suicide accounts for <strong>14% of all US adult suicides</strong> despite veterans being only 6% of the adult population</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Who Is Most at Risk</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        {demographics.map(d => (
          <div key={d.group} className="bg-white rounded-lg border p-5">
            <p className="font-bold text-stone-800 font-[family-name:var(--font-heading)]">{d.group}</p>
            <p className="text-red-800 font-semibold">{d.rate}</p>
            <p className="text-stone-500 text-sm">{d.detail}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">By Service Branch</h2>
      </div>

      <div className="space-y-3 my-8">
        {byBranch.map(b => (
          <div key={b.branch} className="bg-white rounded-lg border p-4">
            <div className="flex justify-between items-start gap-2">
              <h3 className="font-[family-name:var(--font-heading)] font-bold">{b.branch}</h3>
              <span className="text-red-800 text-sm font-semibold">{b.rate}</span>
            </div>
            <p className="text-stone-500 text-xs mt-1">{b.note}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">PTSD and Suicide by War Era</h2>
        <p>
          Each generation of veterans faces different wounds, but the pattern is consistent: the government
          sends them to war and then fails to provide adequate care when they return.
        </p>
      </div>

      <div className="space-y-4 my-8">
        {byEra.map(e => (
          <div key={e.era} className="bg-white rounded-lg border p-5">
            <h3 className="font-[family-name:var(--font-heading)] font-bold mb-2">{e.era}</h3>
            <div className="grid grid-cols-3 gap-4 text-center mb-2">
              <div>
                <p className="text-red-800 font-bold">{e.ptsdRate}</p>
                <p className="text-stone-500 text-xs">PTSD Rate</p>
              </div>
              <div>
                <p className="text-red-800 font-bold">{e.tbiRate}</p>
                <p className="text-stone-500 text-xs">TBI</p>
              </div>
              <div>
                <p className="text-red-800 font-bold">{e.suicideRate}</p>
                <p className="text-stone-500 text-xs">Suicide vs Civilians</p>
              </div>
            </div>
            <p className="text-stone-500 text-xs">{e.note}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The Risk Factors</h2>
        <p>
          Veteran suicide is not caused by a single factor. It&apos;s the product of multiple overlapping
          traumas that compound over time — PTSD, traumatic brain injury, moral injury, chronic pain, isolation,
          and a system that fails to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        {riskFactors.map(r => (
          <div key={r.factor} className="bg-stone-50 rounded-lg p-4 border">
            <p className="font-bold text-stone-800 font-[family-name:var(--font-heading)]">{r.factor}</p>
            <p className="text-red-800 text-sm font-semibold">{r.prevalence}</p>
            <p className="text-stone-500 text-xs mt-1">{r.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Moral Injury: The Wound Nobody Talks About</h2>
        <p>
          PTSD is widely recognized. Moral injury is not — but it may be the more devastating wound. Moral
          injury occurs when a person participates in, witnesses, or fails to prevent acts that violate their
          deeply held moral beliefs. Killing a combatant. Discovering the &ldquo;combatant&rdquo; was a child.
          Following orders to bomb a building full of civilians. Watching a friend die for a mission that was
          later deemed pointless.
        </p>
        <p>
          Unlike PTSD — which is a fear-based response — moral injury is a <strong>guilt and shame-based
          wound</strong>. Veterans with moral injury don&apos;t just relive the event; they carry the weight
          of believing they are fundamentally damaged, that they violated who they are. Standard PTSD
          treatments (exposure therapy, EMDR) are less effective for moral injury. Many veterans suffer
          in silence because the military culture of toughness makes it impossible to say: &ldquo;I did
          something terrible, and I can&apos;t live with it.&rdquo;
        </p>
        <p>
          Drone operators face a unique form of moral injury. They kill from thousands of miles away, watch
          the aftermath in high-definition video, and then drive home to their families. The cognitive
          dissonance — being a warrior and a suburbanite simultaneously — creates psychological wounds
          that the military is only beginning to understand. Studies show drone operators have PTSD rates
          comparable to combat-deployed troops.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;It&apos;s not that I can&apos;t forget what happened. It&apos;s that I can&apos;t forgive
          myself for what I did.&rdquo;
          <br />— Anonymous veteran, interviewed by the Costs of War Project
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">Toxic Exposure: Agent Orange, Burn Pits, and Beyond</h2>
        <p>
          Beyond psychological wounds, veterans face a litany of physical health effects from toxic exposures
          during military service. The government&apos;s pattern is consistent: deny, delay, deny again, then
          finally acknowledge decades later when many have already died:
        </p>
      </div>

      <div className="space-y-4 my-8">
        {healthEffects.map(h => (
          <div key={h.condition} className="bg-white rounded-lg border p-5">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <h3 className="font-[family-name:var(--font-heading)] font-bold">{h.condition}</h3>
              <span className="text-red-800 text-sm font-semibold">{h.affected}</span>
            </div>
            <p className="text-stone-600 text-sm mb-1"><strong>Effects:</strong> {h.effects}</p>
            <p className="text-stone-500 text-xs"><strong>Status:</strong> {h.status}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Historical Veteran Treatment: A Pattern of Betrayal</h2>
        <p>
          The mistreatment of veterans is not new. It follows a depressingly predictable cycle: during wartime,
          veterans are heroes. Afterward, they become an inconvenient expense. The government that asked them to
          sacrifice everything then fights to minimize its obligations to them.
        </p>
      </div>

      <div className="space-y-4 my-8">
        {historicalTreatment.map(h => (
          <div key={h.event} className="bg-stone-50 rounded-lg border p-5">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-red-800">{h.event}</h3>
            <p className="text-stone-600 text-sm mt-1">{h.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">The VA Crisis</h2>
        <p>
          The Department of Veterans Affairs operates the largest healthcare system in the United States,
          serving over 9 million enrolled veterans. It is also one of the most chronically underfunded and
          overwhelmed agencies in the federal government.
        </p>
        <ul>
          <li><strong>Wait times:</strong> The average wait for a mental health appointment is 36 days. In some regions, it&apos;s 60–90 days. Veterans in crisis cannot wait 36 days.</li>
          <li><strong>Staffing shortages:</strong> The VA has 49,000+ vacant positions, including psychiatrists, psychologists, and social workers in the most critical mental health roles.</li>
          <li><strong>Geographic barriers:</strong> 4.7 million veterans live in rural areas with limited or no VA facilities. Telehealth has helped but is not a substitute for in-person crisis care.</li>
          <li><strong>Bureaucratic trauma:</strong> Filing a VA disability claim takes an average of 150+ days. Appeals can take years. The bureaucracy itself becomes a source of despair and re-traumatization.</li>
          <li><strong>Cultural barriers:</strong> Military culture teaches self-reliance, stoicism, and the suppression of emotion. Asking for help is perceived as weakness. 50% of veterans who need care don&apos;t seek it.</li>
          <li><strong>Claims backlog:</strong> Despite promises, the VA disability claims backlog routinely exceeds 300,000+. The PACT Act created a new surge of 3.5 million potentially eligible veterans.</li>
          <li><strong>Community care failures:</strong> The MISSION Act (2018) was supposed to expand veterans&apos; access to private healthcare. In practice, many private providers don&apos;t understand military culture, and care coordination between VA and private systems is poor.</li>
        </ul>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The 2014 VA wait-time scandal revealed that at least <strong>40 veterans died</strong> while waiting
            for care at the Phoenix VA. Employees had been falsifying records to hide wait times of up to
            <strong> 115 days</strong>. A subsequent investigation found the problem was systemic — not limited
            to Phoenix. The scandal led to the resignation of VA Secretary Eric Shinseki, criminal charges
            against several employees, and the Veterans Access, Choice, and Accountability Act. A decade
            later, systemic wait-time problems persist.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The PACT Act: Progress, But Not Enough</h2>
        <p>
          The Sergeant First Class Heath Robinson Honoring our Promise to Address Comprehensive Toxics (PACT)
          Act, signed in August 2022, was the most significant expansion of VA benefits in decades:
        </p>
        <ul>
          <li>Expanded VA healthcare eligibility for <strong>3.5 million</strong> veterans exposed to burn pits</li>
          <li>Added 23 conditions (including multiple cancers) as presumptive service-connected for burn pit exposure</li>
          <li>Extended the enrollment window from 5 to 10 years for combat veterans</li>
          <li>Provided $280 billion in new VA spending over 10 years</li>
          <li>Created a framework for future toxic exposure recognition</li>
        </ul>
        <p>
          The PACT Act was a victory won largely through the advocacy of Jon Stewart and veteran service
          organizations who publicly shamed Congress when Senate Republicans initially blocked the bill. But it
          addressed a specific population (burn pit-exposed veterans) rather than the systemic crisis. The VA
          still lacks the staffing, infrastructure, and cultural transformation needed to serve 18 million veterans.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The 988 Veterans Crisis Line: What You Need to Know</h2>
        <p>
          In July 2022, the national suicide prevention number was changed from a 10-digit number to simply
          <strong> 988</strong>. Veterans who call 988 and press 1 are connected to the Veterans Crisis Line,
          staffed by VA responders trained in military culture:
        </p>
        <ul>
          <li><strong>Call:</strong> 988 (press 1 for Veterans)</li>
          <li><strong>Text:</strong> 838255</li>
          <li><strong>Chat:</strong> VeteransCrisisLine.net</li>
          <li><strong>Available:</strong> 24/7/365, including holidays</li>
          <li><strong>Confidential:</strong> Does not appear on military or VA records</li>
          <li><strong>For anyone:</strong> Veterans, service members, National Guard, Reserves, and their families</li>
        </ul>
        <p>
          Since its creation in 2007, the Veterans Crisis Line has answered over <strong>7 million calls</strong> and
          dispatched emergency services to over 200,000 veterans in imminent danger. In 2023, the line received
          over 900,000 calls — a significant increase that may reflect both the worsening crisis and greater
          awareness of the resource.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What Works — And What Doesn&apos;t</h2>
        <p>
          Research shows that certain approaches are effective at reducing veteran suicide:
        </p>
        <ul>
          <li><strong>Peer support:</strong> Veterans helping veterans. Programs that connect recent veterans with trained peers who&apos;ve walked the same path show the strongest outcomes.</li>
          <li><strong>Community integration:</strong> Employment, housing stability, and social connections reduce isolation — the biggest risk multiplier.</li>
          <li><strong>Lethal means restriction:</strong> Because 70% of veteran suicides involve firearms, voluntary gun storage programs during crisis periods save lives. The VA&apos;s &ldquo;Lock to Live&rdquo; program distributes free cable locks.</li>
          <li><strong>Same-day mental health access:</strong> VA facilities that offer walk-in crisis care — no appointments, no paperwork — see dramatically better outcomes.</li>
          <li><strong>Psychedelic-assisted therapy:</strong> Emerging research on MDMA-assisted therapy for PTSD and psilocybin for treatment-resistant depression shows remarkable promise. Some veterans are traveling abroad for legal treatment.</li>
          <li><strong>Transition support:</strong> Programs that begin 2+ years before discharge and provide employment, housing, and social support during the civilian transition reduce suicide risk by up to 50%.</li>
        </ul>
        <p>
          What doesn&apos;t work: awareness campaigns without resources, one-size-fits-all treatment protocols,
          outsourcing care to private providers unfamiliar with military culture, and treating symptoms without
          addressing root causes like homelessness, unemployment, and isolation.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Other Countries Do Better</h2>
        <p>
          The US veteran suicide crisis is not inevitable. Other nations with combat-deployed veterans have
          implemented systems that produce better outcomes:
        </p>
        <ul>
          <li><strong>UK:</strong> National Health Service provides universal mental health coverage; Combat Stress charity offers specialized veteran treatment; transition programs begin 2 years before discharge</li>
          <li><strong>Australia:</strong> Open Arms counseling available to all veterans and families regardless of service history; no means-testing; same-day crisis access</li>
          <li><strong>Canada:</strong> Transition Group provides 2 years of support during military-to-civilian transition; universal healthcare means no veteran lacks access</li>
          <li><strong>Israel:</strong> Universal military service creates a society-wide understanding of military trauma; mandatory decompression periods after combat; robust peer networks</li>
        </ul>
        <p>
          The common thread: these countries treat veteran care as a <strong>societal obligation</strong>, not
          a bureaucratic afterthought. And none of them ask veterans to navigate a 150-day disability claim
          process to access the care they earned.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Bitter Irony</h2>
        <p>
          The United States will spend <strong>$886 billion</strong> this year on its military — creating the
          next generation of veterans. It will spend a fraction of that on caring for the veterans it already
          has. We have an unlimited budget for sending people to war and a limited budget for healing them
          when they return. The defense budget grows every year by bipartisan consensus. The VA budget grows
          only after scandals, lawsuits, and public outrage.
        </p>
        <p>
          For every dollar the Pentagon spends on recruiting a new soldier, it should spend a dollar preparing
          to care for them when they come home broken. It doesn&apos;t. It never has. And 17 veterans per day
          is the result.
        </p>
        <p>
          Every flag-waving speech, every &ldquo;thank you for your service,&rdquo; every Veterans Day parade
          is hollow if it is not backed by the resources, care, and commitment these men and women were promised.
          17 veterans per day is not an acceptable number. It is a betrayal.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The willingness with which our young people are likely to serve in any war, no matter how
          justified, shall be directly proportional to how they perceive veterans of earlier wars were treated
          and appreciated by our nation.&rdquo;
          <br />— George Washington
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;A nation that continues year after year to spend more money on military defense than on programs
          of social uplift is approaching spiritual death.&rdquo;
          <br />— Martin Luther King Jr., 1967
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;It is from numberless diverse acts of courage and belief that human history is shaped. Each
          time a man stands up for an ideal, or acts to improve the lot of others, or strikes out against
          injustice, he sends forth a tiny ripple of hope.&rdquo;
          <br />— Robert F. Kennedy, 1966
        </blockquote>
      </div>

      {/* Crisis resources - repeated */}
      <div className="bg-stone-100 rounded-xl p-8 border my-12 max-w-3xl mx-auto">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-center">Crisis Resources</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">988</p>
            <p className="font-medium">Call or Text</p>
            <p className="text-stone-500 text-sm">Veterans press 1</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">838255</p>
            <p className="font-medium">Text Line</p>
            <p className="text-stone-500 text-sm">24/7 crisis text support</p>
          </div>
          <div>
            <p className="text-lg font-bold text-red-800">VeteransCrisisLine.net</p>
            <p className="font-medium">Online Chat</p>
            <p className="text-stone-500 text-sm">Confidential support</p>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-stone-600">
          <p>Additional resources: <strong>Crisis Text Line:</strong> Text HOME to 741741 · <strong>SAMHSA Helpline:</strong> 1-800-662-4357</p>
          <p className="mt-1"><strong>Veterans in immediate danger:</strong> Call 911</p>
        </div>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border max-w-3xl mx-auto">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/human-cost" className="text-red-800 hover:underline">→ The Human Cost of War</Link></li>
          <li><Link href="/analysis/the-aftermath" className="text-red-800 hover:underline">→ The Aftermath — War doesn&apos;t end when troops come home</Link></li>
          <li><Link href="/casualties" className="text-red-800 hover:underline">→ Casualty data by conflict</Link></li>
          <li><Link href="/analysis/pentagon-climate" className="text-red-800 hover:underline">→ Pentagon & Climate — Burn pits and toxic exposure</Link></li>
          <li><Link href="/cost-of-war" className="text-red-800 hover:underline">→ Cost of War — The true price, beyond dollars</Link></li>
          <li><Link href="/analysis/drone-wars" className="text-red-800 hover:underline">→ Drone Wars — Moral injury from remote killing</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
