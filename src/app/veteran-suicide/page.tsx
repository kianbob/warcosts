import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Veteran Suicide — 17 Per Day, 6,000+ Per Year | WarCosts',
  description: '17 veterans die by suicide every day in America — 4x more than die in combat. The VA is underfunded, wait times are months, and the crisis is getting worse.',
  keywords: ['veteran suicide', 'veteran suicide rate', 'veteran suicide statistics', 'PTSD veterans', 'veteran mental health', '22 a day'],
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
]

const demographics = [
  { group: 'Age 18–34', rate: 'Highest risk', detail: '2.5x the suicide rate of same-age civilians' },
  { group: 'Women Veterans', rate: '2.2x civilian women', detail: 'Rate increased 166% since 2001; fastest-growing group' },
  { group: 'National Guard/Reserve', rate: 'Equal to active duty', detail: 'Less access to VA services; "weekend warrior" stigma delays care' },
  { group: 'Combat-deployed', rate: '41% higher', detail: 'Direct combat exposure is the strongest predictor' },
  { group: 'Rural veterans', rate: '25% higher than urban', detail: 'Fewer mental health providers; higher gun ownership; greater isolation' },
]

export default function VeteranSuicidePage() {
  const stats = loadData('stats.json')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Veteran Suicide — 17 Per Day, 6,000+ Per Year',
    description: 'More veterans die by suicide than in combat. America\'s hidden war.',
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

      <div className="prose max-w-3xl text-stone-600">
        <p className="text-lg">
          More American veterans have died by suicide since 9/11 than were killed in the entire War on Terror —
          in combat, by IEDs, in accidents, all of it combined. We send young men and women to war, expose them
          to unimaginable trauma, and then fail them so profoundly that they end their own lives at a rate that
          dwarfs the casualties of the wars themselves. This is not a statistic. It is a <strong>national
          emergency</strong> that has been treated as an afterthought.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The commonly cited figure of &ldquo;22 veterans a day&rdquo; comes from a 2012 VA report. The number
            has been revised to approximately <strong>17 per day</strong> based on more recent data (2021 National
            Veteran Suicide Prevention Annual Report). But this figure only counts veterans who are registered
            in the VA system — the true number, including unregistered veterans, may still be higher.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The Numbers</h2>
        <ul>
          <li>Over <strong>6,200 veteran suicides per year</strong> — one every 85 minutes</li>
          <li>Veteran suicide rate is <strong>57% higher</strong> than non-veteran adults</li>
          <li>Female veteran suicide rate has <strong>increased 166%</strong> since 2001</li>
          <li>Women veterans die by suicide at <strong>2.2× the rate</strong> of civilian women</li>
          <li>Veterans aged 18–34 have the <strong>highest rate</strong> of any age group</li>
          <li><strong>70%</strong> of veteran suicides involve firearms</li>
          <li>Only <strong>50%</strong> of veterans needing mental health care seek treatment</li>
          <li>Of those who seek care, <strong>30%</strong> drop out before completing treatment</li>
          <li>Since 2001, an estimated <strong>130,000+ veterans</strong> have died by suicide</li>
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

        <blockquote className="border-l-4 border-red-800">
          &ldquo;It&apos;s not that I can&apos;t forget what happened. It&apos;s that I can&apos;t forgive
          myself for what I did.&rdquo;
          <br />— Anonymous veteran, interviewed by the Costs of War Project
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">PTSD by War Era</h2>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-white rounded-lg border p-5">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{stats.veteranPTSDrateIraqAfghan}%</p>
            <p className="text-stone-600">Iraq/Afghanistan veterans with PTSD</p>
          </div>
          <div className="bg-white rounded-lg border p-5">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{stats.veteranPTSDrateVietnam}%</p>
            <p className="text-stone-600">Vietnam veterans with PTSD (lifetime)</p>
          </div>
        </div>

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
        </ul>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The 2014 VA wait-time scandal revealed that at least <strong>40 veterans died</strong> while waiting
            for care at the Phoenix VA. Employees had been falsifying records to hide wait times of up to
            <strong> 115 days</strong>. The scandal led to the resignation of VA Secretary Eric Shinseki — but
            systemic wait-time problems persist a decade later.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The PACT Act: Progress, But Not Enough</h2>
        <p>
          The Sergeant First Class Heath Robinson Honoring our Promise to Address Comprehensive Toxics (PACT)
          Act, signed in August 2022, was the most significant expansion of VA benefits in decades. Named for
          a National Guard sergeant who died of cancer linked to burn pit exposure, the PACT Act:
        </p>
        <ul>
          <li>Expanded VA healthcare eligibility for <strong>3.5 million</strong> veterans exposed to burn pits</li>
          <li>Added 23 conditions (including cancers) as presumptive service-connected for burn pit exposure</li>
          <li>Extended the enrollment window from 5 to 10 years for combat veterans</li>
          <li>Provided $280 billion in new VA spending over 10 years</li>
        </ul>
        <p>
          The PACT Act was a victory — but it addressed a specific population (burn pit-exposed veterans)
          rather than the systemic crisis. The VA still lacks the staffing, infrastructure, and cultural
          transformation needed to serve 18 million veterans, a growing number of whom carry invisible wounds
          that standard medical models are poorly equipped to treat.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What Works — And What Doesn&apos;t</h2>
        <p>
          Research shows that certain approaches are effective at reducing veteran suicide:
        </p>
        <ul>
          <li><strong>Peer support:</strong> Veterans helping veterans. Programs that connect recent veterans with trained peers who&apos;ve walked the same path show the strongest outcomes.</li>
          <li><strong>Community integration:</strong> Employment, housing stability, and social connections reduce isolation — the biggest risk multiplier.</li>
          <li><strong>Lethal means restriction:</strong> Because 70% of veteran suicides involve firearms, voluntary gun storage programs during crisis periods save lives.</li>
          <li><strong>Same-day mental health access:</strong> VA facilities that offer walk-in crisis care — no appointments, no paperwork — see dramatically better outcomes.</li>
          <li><strong>Psychedelic-assisted therapy:</strong> Emerging research on MDMA-assisted therapy for PTSD and psilocybin for treatment-resistant depression shows remarkable promise. Some veterans are traveling abroad for treatment illegal in the US.</li>
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
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
