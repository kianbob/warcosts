import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import FaqJsonLd from '@/components/FaqJsonLd'

export const metadata: Metadata = {
  title: 'Military Suicide Epidemic: More Die Than in Combat',
  description: 'The "22 a day" stat is wrong — it\'s 17.5. Still more than combat deaths most years. 30,000+ veteran suicides since 9/11.',
  openGraph: {
    title: 'The Military Suicide Epidemic: 30,000+ Dead Since 9/11',
    description: 'More veterans die by suicide than in combat. 17.5 per day. $15B+ spent on prevention. The rate hasn\'t dropped. What\'s actually happening.',
    url: 'https://www.warcosts.org/analysis/military-suicide-epidemic',
    type: 'article',
  },
}

const keyStats = [
  { stat: '17.5', label: 'Veteran suicides per day — not 22, but still devastating', source: 'VA 2023 National Veteran Suicide Prevention Report' },
  { stat: '30,177', label: 'Post-9/11 veteran suicides since 2001 — 4x combat deaths', source: 'Brown University Costs of War' },
  { stat: '6,392', label: 'Total veteran suicides in 2021 (most recent complete data)', source: 'VA NSPR 2023' },
  { stat: '70%', label: 'Of veteran suicides are NOT enrolled in VA healthcare', source: 'VA NSPR 2023' },
  { stat: '$15.8B', label: 'VA spending on suicide prevention since 2007 — rate unchanged', source: 'VA Budget Office' },
  { stat: '1.57x', label: 'Veteran suicide rate vs. civilian rate (age/sex adjusted)', source: 'VA NSPR 2023' },
]

const the22Myth = [
  { claim: '"22 veterans commit suicide every day"', reality: 'The 22/day figure came from a 2012 VA report that used data from only 21 states (excluding California and Texas). The actual rate has been 17-18/day since the VA began using complete data in 2016.', why: 'The "22" figure went viral because it\'s memorable and shocking. Advocacy groups and politicians repeated it. Nobody fact-checked it. When the VA corrected the number, nobody updated their messaging.' },
  { claim: '"It\'s getting worse"', reality: 'The veteran suicide RATE has been roughly flat since 2006. The COUNT has declined slightly because the veteran population is shrinking (Vietnam-era veterans are aging out). The rate among younger veterans (18-34) is rising.', why: 'Headlines about rising numbers conflate rates and counts. The population of living veterans shrinks every year. Fewer veterans ≠ fewer suicides per veteran.' },
  { claim: '"PTSD is the main cause"', reality: 'PTSD is a risk factor but not the primary driver. Financial stress, relationship problems, chronic pain, traumatic brain injury (TBI), access to firearms, and military sexual trauma all play larger roles in aggregate.', why: 'PTSD is the narrative the public understands. The real causes — financial ruin, divorce, chronic pain, brain damage — are systemic failures, not dramatic stories.' },
  { claim: '"Combat veterans are most at risk"', reality: '70% of veteran suicides are among veterans NOT enrolled in VA care — many never saw combat. National Guard, Reserve, and rear-echelon veterans die at alarming rates too.', why: 'The assumption that suicide = combat trauma ignores the toxic effects of military culture itself: hazing, sexual assault, meaninglessness, identity loss after discharge.' },
]

const suicideByDemographic = [
  { group: 'Male veterans (all ages)', rate: '38.3 per 100K', civilianRate: '26.3 per 100K', ratio: '1.46x', trend: 'Stable since 2018' },
  { group: 'Female veterans (all ages)', rate: '16.8 per 100K', civilianRate: '6.5 per 100K', ratio: '2.58x', trend: 'Rising since 2016' },
  { group: 'Veterans 18-34', rate: '45.9 per 100K', civilianRate: '19.4 per 100K', ratio: '2.37x', trend: 'Rising — fastest-growing group' },
  { group: 'Veterans 35-54', rate: '33.6 per 100K', civilianRate: '20.3 per 100K', ratio: '1.66x', trend: 'Stable' },
  { group: 'Veterans 55-74', rate: '34.2 per 100K', civilianRate: '22.7 per 100K', ratio: '1.51x', trend: 'Declining slightly (Vietnam cohort aging)' },
  { group: 'Veterans 75+', rate: '42.8 per 100K', civilianRate: '41.3 per 100K', ratio: '1.04x', trend: 'Nearly identical to civilian rate at this age' },
  { group: 'National Guard/Reserve', rate: '39.7 per 100K', civilianRate: 'N/A', ratio: 'N/A', trend: 'Rising fastest of any component' },
]

const riskFactors = [
  { factor: 'Access to Firearms', weight: 'Primary', detail: '69.4% of veteran suicides are by firearm (vs. 50% civilian). Veterans are trained with weapons, own them at higher rates, and complete suicide attempts more often because of method lethality.', intervention: 'Lethal means restriction is the most effective suicide prevention tool. The VA barely promotes it.' },
  { factor: 'Chronic Pain', weight: 'High', detail: '60% of post-9/11 veterans have chronic pain conditions. Opioid prescriptions were standard for years. Pain leads to depression, disability, opioid dependence, and suicide.', intervention: 'VA has reduced opioid prescriptions but hasn\'t adequately expanded alternative pain management.' },
  { factor: 'Traumatic Brain Injury (TBI)', weight: 'High', detail: '430,000+ post-9/11 veterans diagnosed with TBI. Blast exposure causes neurological damage that increases suicide risk 2-3x. Many TBIs are undiagnosed.', intervention: 'TBI screening is improving but treatment options remain limited.' },
  { factor: 'Financial Stress', weight: 'High', detail: 'Veterans transitioning to civilian life face unemployment, underemployment, and the loss of military housing/healthcare. Financial crisis is a top precipitant.', intervention: 'Transition assistance programs are ineffective. VA economic support is minimal.' },
  { factor: 'Military Sexual Trauma (MST)', weight: 'High', detail: '1 in 4 women and 1 in 100 men experienced MST. MST survivors have 2x the suicide rate. 86% of MST goes unreported.', intervention: 'VA MST screening exists but treatment access varies wildly by location.' },
  { factor: 'Moral Injury', weight: 'Medium-High', detail: 'Guilt from killing, participating in torture, following immoral orders, or witnessing atrocities. Different from PTSD — it\'s not fear-based, it\'s conscience-based.', intervention: 'The VA has no formal treatment for moral injury. Chaplains and therapists are untrained in it.' },
  { factor: 'Identity Loss', weight: 'Medium', detail: 'Military service provides identity, purpose, community. Discharge removes all three simultaneously. "Who am I if I\'m not a Marine?" — this question kills.', intervention: 'Peer support programs help but are underfunded. Most veterans find community on their own or not at all.' },
  { factor: 'Burn Pit Exposure', weight: 'Emerging', detail: '3.5M+ veterans exposed to burn pits. Respiratory disease, cancer, and the despair of chronic illness. PACT Act expanded coverage, but many claims still denied.', intervention: 'PACT Act is helping but implementation is slow and VA backlogs persist.' },
]

const vaFailures = [
  { program: 'Veterans Crisis Line (988)', budget: '$800M+', issue: 'Calls go to voicemail or backup centers. 2022 IG found dropped calls, long wait times. 35% of calls rolled over.', result: 'Rebranded from 1-800-273-8255 to 988. Infrastructure improved slightly. Still understaffed.' },
  { program: 'REACH VET (Predictive Analytics)', budget: '$45M', issue: 'Algorithm identifies at-risk veterans, but clinicians don\'t have time or protocols to intervene. Flags without action.', result: '82% of flagged veterans received contact. But contact ≠ treatment ≠ saved lives.' },
  { program: 'Community Care Referrals', budget: '$4.2B (mental health)', issue: 'Wait times for VA mental health: 42 days avg. Community care referral takes 30 more days. Total wait: 72 days.', result: 'A suicidal veteran cannot wait 72 days. The system is designed for scheduling, not emergencies.' },
  { program: 'Staff-to-Patient Ratios', budget: 'N/A', issue: 'VA mental health providers carry 35-50% more patients than private sector peers. Burnout rate: 41%.', result: 'Therapists have 15-minute med check appointments. There\'s no time for actual therapy.' },
  { program: 'Firearms Safety Counseling', budget: '$12M', issue: 'VA providers avoid talking about gun safety because of political sensitivity. Only 22% of suicidal veterans were asked about firearm access.', result: 'The single most effective intervention — lethal means counseling — is barely practiced.' },
]

const whatWorks = [
  { intervention: 'Lethal Means Restriction', evidence: 'Strong', detail: 'Temporarily separating suicidal people from firearms reduces suicide by 50-80%. Gun locks, safe storage, voluntary temporary transfers.', barrier: 'Gun culture and 2nd Amendment politics make this the hardest intervention to implement despite the strongest evidence.' },
  { intervention: 'Peer Support Programs', evidence: 'Moderate-Strong', detail: 'Veterans supporting veterans. Programs like Team Red White & Blue, The Mission Continues, and peer specialist roles in the VA.', barrier: 'Underfunded. VA peer specialists earn $35-45K. Turnover is high. But veterans trust peers more than clinicians.' },
  { intervention: 'Cognitive Processing Therapy (CPT)', evidence: 'Strong', detail: '12-session PTSD treatment with 50-60% success rate for PTSD symptom reduction. Gold standard evidence-based treatment.', barrier: 'Wait times. Only 23% of VA PTSD patients receive evidence-based treatment (CPT or PE). Most get medication only.' },
  { intervention: 'Same-Day Mental Health Access', evidence: 'Moderate', detail: 'Walk-in mental health clinics at VA facilities. No appointment needed.', barrier: 'Only available at 30% of VA facilities. Rural veterans (40% of veteran pop) have zero access.' },
  { intervention: 'Economic Support', evidence: 'Moderate', detail: 'Financial counseling, emergency funds, employment assistance. Financial stress is a top suicide precipitant.', barrier: 'VA doesn\'t do financial counseling. Vets call the crisis line for housing, not therapy. The system isn\'t designed for it.' },
]

const suicideVsCombatDeaths = [
  { year: '2001-2005', combatDeaths: '2,381', veteranSuicides: '~28,000 (est)', ratio: '~12:1' },
  { year: '2006-2010', combatDeaths: '3,012', veteranSuicides: '~32,500', ratio: '~11:1' },
  { year: '2011-2015', combatDeaths: '524', veteranSuicides: '~33,000', ratio: '~63:1' },
  { year: '2016-2021', combatDeaths: '143', veteranSuicides: '~38,000', ratio: '~266:1' },
  { year: 'Total since 9/11', combatDeaths: '7,074', veteranSuicides: '~131,000+', ratio: '~19:1' },
]

const activeDutySuicide = [
  { branch: 'Army', rate2015: '20.2', rate2021: '36.2', change: '+79%', notes: 'Highest absolute numbers and fastest rate of increase' },
  { branch: 'Marine Corps', rate2015: '19.3', rate2021: '31.1', change: '+61%', notes: 'Highest per-capita rate of any branch historically' },
  { branch: 'Navy', rate2015: '15.2', rate2021: '22.4', change: '+47%', notes: 'Submarine and surface deployment stress' },
  { branch: 'Air Force', rate2015: '18.5', rate2021: '25.1', change: '+36%', notes: 'Drone operators have elevated PTSD and moral injury rates' },
  { branch: 'Space Force', rate2015: 'N/A', rate2021: '18.3', change: 'N/A', notes: 'New branch, small sample size, but already tracking above civilian' },
]

export default function MilitarySuicideEpidemicPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqJsonLd faqs={[{"q":"Why is military suicide so high?","a":"Military suicide rates are driven by multiple factors: PTSD from combat exposure, traumatic brain injuries, difficulty transitioning to civilian life, military sexual trauma, access to firearms, inadequate mental health support, and the moral injury of participating in wars many veterans came to question."},{"q":"How many soldiers die by suicide vs combat?","a":"Since 9/11, approximately 30,000 post-9/11 veterans have died by suicide compared to roughly 7,000 killed in combat — a ratio of more than 4 to 1."}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The Military Suicide Epidemic: More Die by Suicide Than in Combat',
        description: 'The "22 a day" stat is wrong — it\'s 17.5. But that\'s still more than combat deaths. 30,000+ veteran suicides since 9/11. The VA has spent billions and the rate hasn\'t dropped.',
        url: 'https://www.warcosts.org/analysis/military-suicide-epidemic',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-15',
        dateModified: '2026-03-15'
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Military Suicide Epidemic' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The War After the War
        </h1>
        <p className="text-xl text-stone-300 mb-4">17.5 Veterans Per Day. 30,000+ Since 9/11. More Than Combat Will Ever Kill.</p>
        <p className="text-stone-400 text-lg">
          The most lethal weapon in the American military arsenal is not a bomb, a drone, or a rifle. 
          It&apos;s what happens when the uniform comes off. Since September 11, 2001, approximately 7,074 
          American service members have been killed in combat. In the same period, over 30,000 veterans 
          have killed themselves. That&apos;s a ratio of more than 4 to 1. The war at home is deadlier than 
          the war abroad. The VA has spent over $15 billion on suicide prevention since 2007. The rate has 
          not dropped. The programs aren&apos;t working. The money isn&apos;t reaching the people who are 
          dying. And every day, 17 more Americans who served their country die — not because an enemy killed 
          them, but because their own country couldn&apos;t help them.
        </p>
      </div>

      <ShareButtons title="The Military Suicide Epidemic: 17.5 Veterans Per Day" />

      {/* Key Numbers */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">By the Numbers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {keyStats.map((item) => (
            <div key={item.label} className="flex gap-3">
              <span className="text-2xl font-bold text-white whitespace-nowrap">{item.stat}</span>
              <div>
                <p className="text-stone-300 text-sm">{item.label}</p>
                <p className="text-stone-500 text-xs">{item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The 22 Myth */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The &ldquo;22 a Day&rdquo; Myth — And Why It Matters
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          You&apos;ve seen the number everywhere: &ldquo;22 veterans commit suicide every day.&rdquo; 
          It&apos;s on bumper stickers, t-shirts, wristbands, and Instagram posts. It&apos;s repeated by 
          politicians, celebrities, and advocacy groups. It&apos;s also wrong — and the error matters more 
          than you think.
        </p>

        <div className="space-y-4">
          {the22Myth.map((item) => (
            <div key={item.claim} className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <h3 className="font-bold text-red-600 mb-2">{item.claim}</h3>
              <p className="text-stone-900 font-medium text-sm mb-2">Reality: {item.reality}</p>
              <p className="text-stone-500 text-sm">Why the myth persists: {item.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Suicide vs Combat Deaths */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Suicide vs. Combat Deaths: The War at Home Is Deadlier
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Period</th>
                <th className="text-right py-3 font-semibold text-stone-900">Combat Deaths</th>
                <th className="text-right py-3 font-semibold text-stone-900">Veteran Suicides</th>
                <th className="text-right py-3 font-semibold text-stone-900">Ratio</th>
              </tr>
            </thead>
            <tbody>
              {suicideVsCombatDeaths.map((row) => (
                <tr key={row.year} className={`border-b border-stone-100 ${row.year.includes('Total') ? 'bg-red-50 font-bold' : ''}`}>
                  <td className="py-3 text-stone-900">{row.year}</td>
                  <td className="text-right py-3">{row.combatDeaths}</td>
                  <td className="text-right py-3 text-red-600 font-semibold">{row.veteranSuicides}</td>
                  <td className="text-right py-3 text-stone-500">{row.ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Demographics */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Who Is Dying: Suicide by Demographic
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Group</th>
                <th className="text-right py-3 font-semibold text-stone-900">Veteran Rate</th>
                <th className="text-right py-3 font-semibold text-stone-900">Civilian Rate</th>
                <th className="text-right py-3 font-semibold text-stone-900">Ratio</th>
                <th className="text-left py-3 font-semibold text-stone-900 pl-4">Trend</th>
              </tr>
            </thead>
            <tbody>
              {suicideByDemographic.map((row) => (
                <tr key={row.group} className="border-b border-stone-100">
                  <td className="py-3 font-medium text-stone-900">{row.group}</td>
                  <td className="text-right py-3 text-red-600 font-semibold">{row.rate}</td>
                  <td className="text-right py-3">{row.civilianRate}</td>
                  <td className="text-right py-3 font-semibold">{row.ratio}</td>
                  <td className="py-3 text-stone-600 text-xs pl-4">{row.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
          <h3 className="font-bold text-red-800 text-lg mb-2">Women Veterans: The Hidden Crisis</h3>
          <p className="text-stone-700 text-sm">
            Female veterans are <strong>2.58 times more likely</strong> to die by suicide than civilian women — 
            the highest gap of any demographic group. Military sexual trauma, combat exposure, and the isolation 
            of being a minority within the military all contribute. The VA has historically designed its mental 
            health services for male combat veterans. Women veterans are an afterthought.
          </p>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Why They Die: The Real Risk Factors
        </h2>
        <div className="space-y-4">
          {riskFactors.map((item) => (
            <div key={item.factor} className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-bold text-stone-900">{item.factor}</h3>
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  item.weight === 'Primary' ? 'bg-red-100 text-red-700' :
                  item.weight === 'High' ? 'bg-orange-100 text-orange-700' :
                  item.weight === 'Emerging' ? 'bg-blue-100 text-blue-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>{item.weight} risk factor</span>
              </div>
              <p className="text-stone-700 text-sm mb-2">{item.detail}</p>
              <p className="text-stone-500 text-xs"><strong>Intervention status:</strong> {item.intervention}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Active Duty */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Active Duty Suicide: It Starts Before They Leave
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Suicide isn&apos;t just a veteran problem — it&apos;s an active-duty problem. Active-duty suicide 
          rates have increased 41% since 2015 across all branches. The military creates the conditions for 
          suicide — isolation, moral injury, TBI, toxic leadership — and then acts surprised when it happens.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Branch</th>
                <th className="text-right py-3 font-semibold text-stone-900">2015 Rate</th>
                <th className="text-right py-3 font-semibold text-stone-900">2021 Rate</th>
                <th className="text-right py-3 font-semibold text-stone-900">Change</th>
                <th className="text-left py-3 font-semibold text-stone-900 pl-4">Notes</th>
              </tr>
            </thead>
            <tbody>
              {activeDutySuicide.map((row) => (
                <tr key={row.branch} className="border-b border-stone-100">
                  <td className="py-3 font-medium text-stone-900">{row.branch}</td>
                  <td className="text-right py-3">{row.rate2015}</td>
                  <td className="text-right py-3 text-red-600 font-semibold">{row.rate2021}</td>
                  <td className="text-right py-3 text-red-600">{row.change}</td>
                  <td className="py-3 text-stone-600 text-xs pl-4">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* VA Failures */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          $15 Billion Spent. Zero Improvement. Why the VA Is Failing.
        </h2>
        <div className="space-y-4">
          {vaFailures.map((item) => (
            <div key={item.program} className="bg-red-50 border border-red-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-bold text-red-800">{item.program}</h3>
                <span className="text-red-600 font-bold text-sm">{item.budget}</span>
              </div>
              <p className="text-stone-700 text-sm mb-1"><strong>Problem:</strong> {item.issue}</p>
              <p className="text-stone-500 text-sm"><strong>Result:</strong> {item.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Works */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          What Actually Works (And Why We Don&apos;t Do It)
        </h2>
        <div className="space-y-4">
          {whatWorks.map((item) => (
            <div key={item.intervention} className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-bold text-stone-900">{item.intervention}</h3>
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  item.evidence === 'Strong' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>Evidence: {item.evidence}</span>
              </div>
              <p className="text-stone-700 text-sm mb-2">{item.detail}</p>
              <p className="text-stone-500 text-xs"><strong>Barrier:</strong> {item.barrier}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Systemic View */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">
            The Systemic Failure
          </h2>
          <p className="text-stone-300 mb-4">
            The military suicide epidemic is not a mental health crisis. It&apos;s a systems failure. The 
            military recruits young people, trains them to suppress emotion, exposes them to trauma, gives 
            them brain injuries, teaches them to use lethal weapons, and then discharges them into a civilian 
            world that doesn&apos;t understand them, with a VA system that can&apos;t see them for 42 days.
          </p>
          <p className="text-stone-300 mb-4">
            The solution isn&apos;t more crisis lines. It&apos;s fewer wars. Every veteran who kills 
            themselves was, at some point, a healthy 18-year-old who signed a contract with the United States 
            government. The government sent them to war, broke them, and handed them back. The suicide is the 
            last injury. The first one was the deployment order.
          </p>
          <p className="text-stone-300">
            A country that spends $886 billion on its military and cannot prevent 17 suicides a day among 
            the people who served in it has its priorities exactly backwards.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="my-12 bg-red-50 border border-red-200 rounded-lg p-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-800 mb-4">
          If You or Someone You Know Needs Help
        </h2>
        <div className="space-y-2 text-stone-700">
          <p><strong>Veterans Crisis Line:</strong> 988 (then press 1) | Text: 838255</p>
          <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
          <p><strong>National Suicide Prevention Lifeline:</strong> 988</p>
          <p><strong>Vet Center (confidential):</strong> 1-877-WAR-VETS (1-877-927-8387)</p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>VA National Veteran Suicide Prevention Annual Report (2023)</li>
          <li>Brown University Costs of War Project, &ldquo;High Suicide Rates among United States Service Members and Veterans&rdquo;</li>
          <li>DoD Annual Suicide Report (2022)</li>
          <li>VA Inspector General, &ldquo;Veterans Crisis Line Audit&rdquo; (2022)</li>
          <li>RAND Corporation, &ldquo;Improving Suicide Prevention in the Military&rdquo;</li>
          <li>Thomas Joiner, <em>Myths About Suicide</em> (Harvard, 2010)</li>
          <li>David Finkel, <em>Thank You for Your Service</em> (Farrar, Straus, 2013)</li>
          <li>VA Office of Mental Health and Suicide Prevention, Budget Justification Documents</li>
          <li>CDC National Vital Statistics Reports, Suicide Data</li>
          <li>GAO, &ldquo;VA Health Care: Actions Needed to Better Understand and Reduce Veteran Suicides&rdquo;</li>
        </ul>
      </section>

      <RelatedArticles articles={[
        { slug: 'veterans-betrayed', title: 'Veterans Betrayed', desc: '17 suicides/day. 37,000+ homeless. The VA\'s broken promises.' },
        { slug: 'human-cost', title: 'The Human Cost', desc: 'Beyond statistics: PTSD, displacement, and lives destroyed.' },
        { slug: 'the-aftermath', title: 'The Aftermath', desc: 'Wars don\'t end when troops come home. $2.5T in veteran care.' },
        { slug: 'military-families', title: 'Military Families', desc: 'The hidden cost: broken families, PTSD, poverty.' },
      ]} />

      <BackToTop />
    </div>
  )
}
