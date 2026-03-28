import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: '17 Veterans Die by Suicide Every Day: The Crisis Nobody Talks About | WarCosts.org',
  description: 'An average of 17 veterans die by suicide every day — a rate 57% higher than non-veterans. 6,146 veteran suicides in 2022. PTSD, TBI, moral injury, and a failing system.',
  openGraph: {
    title: '17 Veterans Die by Suicide Every Day: The Crisis Nobody Talks About',
    description: '6,146 veteran suicides in 2022. 57% higher than non-veterans. 60% never seek help. The hidden cost of war.',
    url: 'https://www.warcosts.org/analysis/veteran-suicide-crisis',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/veteran-suicide-crisis',
  },
}

const yearlyData = [
  { year: 2005, suicides: 5765, perDay: 15.8 },
  { year: 2008, suicides: 6032, perDay: 16.5 },
  { year: 2010, suicides: 5929, perDay: 16.2 },
  { year: 2012, suicides: 6025, perDay: 16.5 },
  { year: 2014, suicides: 5981, perDay: 16.4 },
  { year: 2016, suicides: 6079, perDay: 16.7 },
  { year: 2018, suicides: 6139, perDay: 16.8 },
  { year: 2020, suicides: 6146, perDay: 16.8 },
  { year: 2022, suicides: 6146, perDay: 16.8 },
]

const riskFactors = [
  { factor: 'PTSD', prevalence: '11–20%', detail: 'Post-Traumatic Stress Disorder affects 11-20% of Iraq/Afghanistan veterans, compared to ~6% of the general population. Combat exposure, IEDs, and moral injury are primary causes.' },
  { factor: 'Traumatic Brain Injury (TBI)', prevalence: '22%', detail: '414,000+ post-9/11 service members diagnosed with TBI — often from IED blasts. TBI increases suicide risk 2-3x and causes chronic pain, cognitive issues, and personality changes.' },
  { factor: 'Moral Injury', prevalence: 'Unknown', detail: 'The psychological damage of witnessing or participating in acts that violate deeply held moral beliefs. Drone operators, interrogators, and combat veterans are most affected. No formal diagnosis exists.' },
  { factor: 'Substance Abuse', prevalence: '11%', detail: '1 in 10 veterans has a substance use disorder. Self-medication for pain, PTSD, and insomnia. VA prescribes more opioids per capita than civilian systems.' },
  { factor: 'Chronic Pain', prevalence: '66%', detail: 'Two-thirds of veterans report chronic pain, often from combat injuries, blast exposure, or heavy gear. Pain is a leading driver of both substance abuse and suicide.' },
  { factor: 'Social Isolation', prevalence: 'Widespread', detail: 'Military service creates bonds that civilian life rarely replaces. Loss of identity, purpose, and community after discharge is a major risk factor, especially for combat veterans.' },
  { factor: 'Access to Firearms', prevalence: '70% of vet suicides', detail: 'Approximately 70% of veteran suicides involve firearms — compared to 50% in the general population. Military familiarity with weapons and higher gun ownership rates are contributing factors.' },
]

const whatsFailing = [
  { problem: 'Wait Times', detail: 'Average wait for a new mental health appointment at VA: 36 days. In crisis, that\'s a death sentence. Some facilities report waits of 60+ days.' },
  { problem: 'Stigma', detail: '60% of veterans who need mental health care never seek it. Military culture teaches that asking for help is weakness. This message persists long after discharge.' },
  { problem: 'Rural Access', detail: '4.7 million veterans live in rural areas with limited or no VA facilities. Telehealth has helped, but internet access in rural America is often unreliable.' },
  { problem: 'Discharge Status', detail: 'Veterans with "other-than-honorable" discharges — often given for behavioral issues caused by PTSD or TBI — are largely ineligible for VA care. An estimated 500,000+ fall in this gap.' },
  { problem: 'Staffing Crisis', detail: 'VA has 47,000+ unfilled positions, including mental health providers. Some VA facilities have a 1:1,000+ psychologist-to-veteran ratio.' },
  { problem: 'Burn Pit Registry', detail: '3.5 million service members exposed to toxic burn pits. PACT Act expanded coverage, but claims processing is slow and many don\'t know they\'re eligible.' },
]

export default function VeteranSuicideCrisisPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '17 Veterans Die by Suicide Every Day: The Crisis Nobody Talks About',
        description: '6,146 veteran suicides in 2022. A rate 57% higher than non-veterans. The hidden cost of America\'s wars.',
        url: 'https://www.warcosts.org/analysis/veteran-suicide-crisis',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-28',
        dateModified: '2026-03-28',
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Veteran Suicide Crisis' }]} />

      {/* Crisis note */}
      <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 mb-6">
        <p className="text-blue-900 text-sm">
          <strong>If you or a veteran you know is in crisis:</strong> Call the Veterans Crisis Line at{' '}
          <strong>988 (then press 1)</strong>, text 838255, or chat at{' '}
          <a href="https://www.veteranscrisisline.net" className="underline" target="_blank" rel="noopener noreferrer">VeteransCrisisLine.net</a>.
          Free, confidential, 24/7.
        </p>
      </div>

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Veterans Crisis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          17 Veterans Die by Suicide Every Day
        </h1>
        <p className="text-xl text-stone-300 mb-4">
          6,146 veteran suicides in 2022. A rate 57% higher than non-veterans. The crisis nobody talks about.
        </p>
        <p className="text-stone-400 text-lg">
          We send them to war. We thank them for their service. Then we let them die. An average of 17 veterans
          take their own lives every day in America — one every 85 minutes. Since 9/11, more than four times as
          many veterans have died by suicide than were killed in combat in Iraq and Afghanistan combined. This is
          the hidden cost of war that no budget ever accounts for.
        </p>
      </div>

      <ShareButtons title="17 Veterans Die by Suicide Every Day: The Crisis Nobody Talks About" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '16.8', label: 'Suicides Per Day', sub: 'VA National Report, 2022 data' },
          { val: '57%', label: 'Higher Than Civilians', sub: 'Age/sex-adjusted suicide rate' },
          { val: '30K+', label: 'Post-9/11 Vet Suicides', sub: 'More than 4x combat deaths (7,057)' },
          { val: '60%', label: 'Never Seek Help', sub: 'Of those who need mental health care' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Year over year */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Numbers: Year After Year</h2>
        <p className="text-stone-700 mb-6">
          Despite billions spent on prevention programs, veteran suicide rates have remained stubbornly high
          for nearly two decades. The number has barely changed.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-semibold">Year</th>
                <th className="text-right p-3 font-semibold">Veteran Suicides</th>
                <th className="text-right p-3 font-semibold">Per Day</th>
              </tr>
            </thead>
            <tbody>
              {yearlyData.map(y => (
                <tr key={y.year} className="border-t">
                  <td className="p-3 font-mono">{y.year}</td>
                  <td className="p-3 text-right text-red-700 font-mono font-semibold">{y.suicides.toLocaleString()}</td>
                  <td className="p-3 text-right font-mono">{y.perDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400 mt-3">Source: Department of Veterans Affairs, <em>National Veteran Suicide Prevention Annual Report</em>, 2024</p>
      </section>

      {/* Comparison */}
      <section className="mb-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Suicide vs. Combat: The Real Toll</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-5">
              <p className="text-4xl font-bold text-red-400">30,177+</p>
              <p className="text-stone-300 mt-2">Post-9/11 veterans who died by suicide</p>
              <p className="text-stone-500 text-sm">(2001–2022, VA data)</p>
            </div>
            <div className="bg-white/10 rounded-lg p-5">
              <p className="text-4xl font-bold text-stone-400">7,057</p>
              <p className="text-stone-300 mt-2">US service members killed in combat</p>
              <p className="text-stone-500 text-sm">(Iraq + Afghanistan combined)</p>
            </div>
          </div>
          <p className="text-stone-400 text-sm mt-4">
            For every service member killed in combat during the War on Terror, roughly four veterans have
            died by their own hand. The war at home is deadlier than the war abroad.
          </p>
        </div>
      </section>

      {/* Risk factors */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Why Veterans Are at Higher Risk</h2>
        <div className="space-y-4">
          {riskFactors.map(rf => (
            <div key={rf.factor} className="bg-white border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-stone-900">{rf.factor}</h3>
                <span className="text-red-700 font-bold text-sm whitespace-nowrap ml-4">{rf.prevalence}</span>
              </div>
              <p className="text-sm text-stone-600">{rf.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VA spending vs results */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">$325 Billion Budget, 17 Deaths a Day</h2>
        <p className="text-stone-700 mb-4">
          The Department of Veterans Affairs has a $325 billion annual budget and employs 420,000 people —
          making it the second-largest federal agency. It treats 2 million+ veterans for mental health
          conditions each year. And yet, the suicide rate hasn&apos;t budged.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-2">What VA Does Well</h3>
            <ul className="text-sm text-stone-600 space-y-1">
              <li>• Veterans Crisis Line: 2.4M+ calls handled in 2023</li>
              <li>• 2M+ veterans in mental health treatment</li>
              <li>• Evidence-based PTSD treatment (CPT, PE)</li>
              <li>• PACT Act expanding toxic exposure care</li>
              <li>• Telehealth expansion to 2.5M+ appointments/year</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-semibold text-red-900 mb-2">What&apos;s Failing</h3>
            <ul className="text-sm text-stone-600 space-y-1">
              <li>• 36-day average wait for new mental health appointment</li>
              <li>• 47,000+ unfilled positions including providers</li>
              <li>• 60% of at-risk veterans never contact VA</li>
              <li>• 500,000+ veterans excluded by discharge status</li>
              <li>• Rural veterans have limited access</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What's failing in detail */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Why the System Fails</h2>
        <div className="space-y-4">
          {whatsFailing.map(item => (
            <div key={item.problem} className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-1">{item.problem}</h3>
              <p className="text-sm text-stone-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The 22 myth */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The &ldquo;22 a Day&rdquo; Number: Context Matters</h2>
        <div className="bg-stone-50 border rounded-xl p-6">
          <p className="text-stone-700 mb-3">
            The widely-cited &ldquo;22 veterans a day&rdquo; statistic comes from a 2012 VA study. The current
            VA figure is 16.8 per day (2022 data). The difference isn&apos;t because things improved — it&apos;s
            because the methodology changed.
          </p>
          <p className="text-stone-700 mb-3">
            Important context: the 16.8 figure only counts confirmed veteran suicides in states that report
            to the VA. Some researchers believe the actual number is higher because:
          </p>
          <ul className="text-sm text-stone-600 space-y-1 list-disc pl-5 mb-3">
            <li>Not all states report veteran status on death certificates</li>
            <li>Drug overdoses that may be suicides are often classified as accidental</li>
            <li>Single-vehicle crashes are rarely investigated as potential suicides</li>
            <li>National Guard and Reserve suicides are sometimes miscounted</li>
          </ul>
          <p className="text-stone-700">
            Whether the number is 17 or 22 is less important than the fact that it has barely changed in
            two decades despite massive increases in VA funding and suicide prevention programs.
          </p>
        </div>
      </section>

      {/* What could be done */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Experts Say Would Actually Work</h2>
        <div className="space-y-3">
          {[
            { action: 'Lethal Means Safety', detail: 'Temporary voluntary firearms storage programs could prevent the 70% of veteran suicides that involve guns. Some states have passed safe storage laws; VA has piloted gun lock distribution programs.' },
            { action: 'Same-Day Mental Health Access', detail: 'Replace 36-day waits with same-day walk-in mental health clinics at every VA facility. Fund community partnerships so any veteran can access care at any clinic, not just VA.' },
            { action: 'Fix Discharge Status Exclusion', detail: 'Grant VA eligibility to all veterans regardless of discharge characterization. Many "bad paper" discharges were given for behavior caused by PTSD, TBI, or military sexual trauma.' },
            { action: 'Peer Support Networks', detail: 'Veterans respond better to other veterans than to clinicians. Fund peer support specialists in every VA facility and community. Programs like Team Red White & Blue show promise.' },
            { action: 'Address Root Causes', detail: 'Stop sending people to wars that don\'t need to be fought. The single best suicide prevention strategy is not creating combat veterans in the first place.' },
          ].map(item => (
            <div key={item.action} className="bg-white border rounded-lg p-4">
              <h3 className="font-semibold text-stone-900 mb-1">{item.action}</h3>
              <p className="text-sm text-stone-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <div className="bg-stone-100 border rounded-xl p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">The War That Never Ends</h2>
          <p className="text-stone-700 mb-3">
            For 17 veterans every day, the war never ended. They survived combat only to lose the battle at home.
            America spends $886 billion a year preparing for war but can&apos;t seem to take care of the people
            it sends to fight them.
          </p>
          <p className="text-stone-700">
            This is not a failure of individual veterans. It is a failure of the nation that made them veterans.
            Until we treat the veteran suicide crisis with the same urgency we treat military threats abroad,
            we will continue to lose more veterans to suicide than to enemy fire.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources & Citations</h2>
        <ul className="text-sm text-stone-600 space-y-1 list-disc pl-5">
          <li>Department of Veterans Affairs, <em>National Veteran Suicide Prevention Annual Report</em>, 2024 (2022 data)</li>
          <li>Brown University Costs of War Project, &ldquo;High Suicide Rates among United States Service Members and Veterans of the Post-9/11 Wars&rdquo;</li>
          <li>Congressional Research Service, &ldquo;Military and Veteran Suicide Prevention: Background and Issues,&rdquo; updated 2024</li>
          <li>RAND Corporation, &ldquo;Improving Mental Health Care for Veterans,&rdquo; 2023</li>
          <li>Government Accountability Office, &ldquo;Veteran Suicide: VA Needs to Better Ensure Access to Mental Health Services,&rdquo; 2023</li>
          <li>VA Office of Inspector General, <em>Mental Health Care Staffing and Wait Time Reports</em></li>
          <li>Thomas Suitt, &ldquo;Costs of War: High Suicide Rates,&rdquo; Watson Institute, Brown University, 2023</li>
          <li>Veterans Crisis Line: <strong>988, press 1</strong> | Text: 838255 | Chat: VeteransCrisisLine.net</li>
        </ul>
      </section>

      <div className="text-center text-sm text-stone-500 mb-8">
        <p>Last updated: March 2026</p>
        <Link href="/analysis" className="text-red-700 hover:underline">← Back to All Analysis</Link>
      </div>

      <BackToTop />
    </div>
  )
}
