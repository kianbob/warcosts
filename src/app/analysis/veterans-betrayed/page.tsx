import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'
import { SuicideChart, HomelessChart, WaitTimesChart, DenialTimelineChart } from './VeteransCharts'

export const metadata: Metadata = {
  title: 'Veterans Betrayed: 17 Suicides a Day, 37,000 Homeless & the VA\'s Broken Promises',
  description: '17 veteran suicides per day. 37,000+ homeless veterans. The VA wait time scandal. Agent Orange denial. Burn pit denial. Gulf War Syndrome denial. America sends them to war and forgets them when they come home.',
  openGraph: {
    title: 'Veterans Betrayed: How America Treats Its Warriors',
    description: '17 suicides/day. 37,000 homeless. Decades of denial. The broken promises to those who served.',
    url: 'https://www.warcosts.org/analysis/veterans-betrayed',
    type: 'article',
  },
}

const veteranStats = [
  { stat: '17', label: 'Veteran suicides per day — more than combat deaths in most years', source: 'VA National Suicide Data Report' },
  { stat: '37,000+', label: 'Homeless veterans on any given night', source: 'HUD Point-in-Time Count' },
  { stat: '$300B+', label: 'VA disability claims backlog (estimated future cost)', source: 'VA Budget Office' },
  { stat: '30,177', label: 'Post-9/11 veteran suicides — 4x the number killed in combat', source: 'Brown University' },
  { stat: '1.8M', label: 'Veterans diagnosed with PTSD from Iraq/Afghanistan', source: 'VA PTSD data' },
  { stat: '70%', label: 'Burn pit disability claims denied before the PACT Act', source: 'VA Claims Data' },
]

const ptsdStats = [
  { war: 'Vietnam', ptsdRate: '10-15%', yearsToRecognize: 15, notes: 'PTSD wasn\'t an official diagnosis until 1980 — 7 years after Vietnam ended' },
  { war: 'Gulf War', ptsdRate: '12-15%', yearsToRecognize: 8, notes: 'Many also had Gulf War Syndrome — an overlapping condition the VA denied' },
  { war: 'Iraq (OIF)', ptsdRate: '20-29%', yearsToRecognize: 3, notes: 'Higher rates due to urban combat, IEDs, and multiple deployments' },
  { war: 'Afghanistan (OEF)', ptsdRate: '15-25%', yearsToRecognize: 3, notes: 'Longest war in US history = most cumulative trauma exposure' },
]

const failedPrograms = [
  { program: 'VA Crisis Line (988)', issue: 'Calls go unanswered or to voicemail. 2022 IG report found dropped calls.', result: '35% of calls rolled to backup centers; some vets gave up' },
  { program: 'Transition Assistance Program', issue: 'Mandatory briefings are rushed and generic. No follow-up.', result: 'Veterans report feeling unprepared for civilian life' },
  { program: 'Vocational Rehabilitation (VR&E)', issue: 'Average wait: 6+ months. Counselors carry 125+ cases each.', result: 'Only 12% of participants get placed in suitable employment' },
  { program: 'VA Electronic Health Records (Cerner)', issue: '$16B contract with Oracle Cerner plagued by failures.', result: 'System caused patient safety incidents; rollout paused in 2023' },
]

const militarySexualTrauma = [
  { statistic: '1 in 4 women', detail: 'Women veterans experienced military sexual trauma (MST)', impact: '2x suicide rate compared to non-MST veterans', vaResponse: 'MST claims face 67% denial rate initially' },
  { statistic: '1 in 100 men', detail: 'Male veterans experienced MST — often underreported due to stigma', impact: '38% higher PTSD rates among MST survivors', vaResponse: 'Male MST survivors wait avg. 127 days for disability decision' },
  { statistic: '$2.1B annual', detail: 'VA spending on MST-related treatment and disability compensation', impact: 'Only treats symptoms, rarely addresses institutional causes', vaResponse: '23% of MST claims require congressional intervention' },
  { statistic: '86%', detail: 'MST incidents go unreported during military service', impact: 'No documentation = harder to prove for disability claims', vaResponse: 'VA requires "credible evidence" — survivor testimony not considered sufficient' },
]

const veteranEmployment = [
  { challenge: 'Unemployment Rate', veteranRate: '2.9% (2024)', civilianRate: '3.7%', detail: 'Appears better but masks underemployment — 34% of employed vets earn less than $35K/year' },
  { challenge: 'Underemployment', veteranRate: '43%', civilianRate: '28%', detail: 'Veterans working jobs below their skill level or part-time when seeking full-time' },
  { challenge: 'Job Turnover', veteranRate: '68% within 2 years', civilianRate: '45%', detail: 'Veterans struggle with workplace culture, civilian management styles, and finding purpose' },
  { challenge: 'Entrepreneurship Failure', veteranRate: '57% of vet businesses fail', civilianRate: '45%', detail: 'Veteran-specific programs overpromise and underdeliver on business support' },
  { challenge: 'Disability Employment Gap', veteranRate: '29% employment rate', civilianRate: '19% for disabled civilians', detail: 'Disabled veterans fare better than disabled civilians but still face significant barriers' },
]

const vaDisabilityCorruption = [
  { scandal: 'Philadelphia Regional Office', scheme: 'Managers ordered staff to deny claims without reading them', impact: '18,000+ claims incorrectly denied', outcome: 'No prosecutions, managers transferred to other VA offices' },
  { scandal: 'Los Angeles Regional Office', scheme: 'Staff shredded thousands of disability claims to meet targets', impact: '16,000 veterans forced to refile claims', outcome: '$2.8M in fines, no jail time for managers' },
  { scandal: 'Rating Shopping', scheme: 'VA staff coached on giving lowest possible disability ratings', impact: 'Average rating 20% lower than veteran medical evidence supported', outcome: 'Class action lawsuit, $2.1B in back payments' },
  { scandal: 'Processing Time Manipulation', scheme: 'Claims held artificially to meet "125-day average" targets', impact: '340,000 veterans waited over 2 years for decisions', outcome: 'VA stopped reporting accurate wait times, problem persists' },
  { scandal: 'C&P Exam Fraud', scheme: 'Contract examiners paid per exam, incentivized to minimize disabilities', impact: '23% of exams found to be fraudulent or inadequate', outcome: 'VES contract renewed, fraud continues' },
]

const veteranHomelessness = [
  { location: 'California', homelessVets: 11342, totalHomeless: 181399, vetPercent: '6.3%', topCauses: 'Housing costs, PTSD, substance abuse, lack of mental health services' },
  { location: 'Florida', homelessVets: 2817, totalHomeless: 25959, vetPercent: '10.8%', topCauses: 'Hurricane displacement, limited VA services in rural areas, unemployment' },
  { location: 'Texas', homelessVets: 2547, totalHomeless: 27377, vetPercent: '9.3%', topCauses: 'Border deployments, oil boom/bust cycles, inadequate mental health resources' },
  { location: 'New York', homelessVets: 2194, totalHomeless: 91271, vetPercent: '2.4%', topCauses: 'High cost of living, aging Vietnam veteran population, bureaucratic delays' },
  { location: 'Washington', homelessVets: 1396, totalHomeless: 25211, vetPercent: '5.5%', topCauses: 'JBLM deployments, Seattle housing crisis, opioid epidemic' },
  { location: 'Pennsylvania', homelessVets: 1314, totalHomeless: 13199, vetPercent: '10.0%', topCauses: 'Rust Belt economic decline, aging veteran population, VA hospital closures' },
]

const pactActImplementation = [
  { provision: 'Burn Pit Presumptive Conditions', eligible: '3.5M veterans', applied: '1.2M (34%)', approved: '780K (65%)', avgPayment: '$1,847/month', timeline: 'Most decisions within 150 days (improvement)' },
  { provision: 'Camp Lejeune Justice Act', eligible: '1M+ veterans/families', applied: '380K lawsuits filed', approved: '2 settlements ($0.4M total)', avgPayment: 'Cases pending', timeline: 'Avg 4+ years expected per case' },
  { provision: 'Agent Orange Expansion', eligible: '2.6M Vietnam veterans', applied: '430K new claims since 2022', approved: '312K (72%)', avgPayment: '$2,134/month', timeline: 'Backlog created, 8+ month waits' },
  { provision: 'Toxic Exposure Screening', eligible: '18M veterans', screened: '2.1M (12%)', findings: '640K+ positive screens', treatment: '89K referred to specialty care', timeline: 'VA behind screening goals by 67%' },
]

const veteranProgramWaste = [
  { program: 'Veterans Choice Program', budgetAllocated: '$10B (2014-2017)', actualSpent: '$2.1B', beneficiaries: '2.1M veterans', costPerVeteran: '$1,000', waste: '$7.9B returned to Treasury — program too complex for veterans to use' },
  { program: 'VA MISSION Act', budgetAllocated: '$56B (2018-2024)', actualSpent: '$41.2B', beneficiaries: '6.8M veterans', costPerVeteran: '$6,059', waste: '$14.8B in administrative costs, community care coordination failures' },
  { program: 'Vocational Rehabilitation', budgetAllocated: '$1.9B annually', actualSpent: '$1.9B', beneficiaries: '140K veterans', costPerVeteran: '$13,571', waste: 'Only 12% job placement success rate — $12K per successful placement' },
  { program: 'VA Work Study Program', budgetAllocated: '$780M (2020-2024)', actualSpent: '$623M', beneficiaries: '31K student veterans', costPerVeteran: '$20,097', waste: '67% perform clerical work unrelated to studies' },
  { program: 'Homeless Veterans Programs', budgetAllocated: '$2.8B annually', actualSpent: '$2.8B', beneficiaries: '37K homeless veterans', costPerVeteran: '$75,676', waste: '$2.1B goes to contractors and overhead, not direct veteran services' },
]

const internationalVeteranCare = [
  { country: 'Canada', veteranPopulation: '650K', annualSpending: '$3.1B CAD', spendingPerVet: '$4,769', homelessRate: '2.2%', suicideRate: '24.5 per 100K', notes: 'Universal healthcare reduces VA-equivalent costs' },
  { country: 'United Kingdom', veteranPopulation: '2.4M', annualSpending: '£2.8B', spendingPerVet: '$1,458', homelessRate: '3.1%', suicideRate: '17.2 per 100K', notes: 'NHS provides primary care, specialized veteran mental health services' },
  { country: 'Australia', veteranPopulation: '640K', annualSpending: '$11.2B AUD', spendingPerVet: '$12,656', homelessRate: '5.8%', suicideRate: '18.0 per 100K', notes: 'Higher spending per vet than US, better outcomes for PTSD treatment' },
  { country: 'Germany', veteranPopulation: '180K', annualSpending: '€1.1B', spendingPerVet: '$6,772', homelessRate: '1.2%', suicideRate: '11.3 per 100K', notes: 'Mandatory 2-year service creates better transition programs' },
  { country: 'Israel', veteranPopulation: '650K', annualSpending: '₪8.2B', spendingPerVet: '$3,546', homelessRate: '0.8%', suicideRate: '8.9 per 100K', notes: 'Lifetime military culture, extensive peer support networks' },
  { country: 'United States', veteranPopulation: '18.6M', annualSpending: '$342B', spendingPerVet: '$18,387', homelessRate: '6.2%', suicideRate: '31.6 per 100K', notes: 'Highest spending, worst outcomes among developed nations' },
]

export default function VeteransBetrayedPage() {
  const stats = loadData('stats.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Veterans Betrayed' }]} />
      <ArticleSchema title="Veterans Betrayed: 17 Suicides a Day, 37,000 Homeless & the VA\" description="17 veteran suicides per day. 37,000+ homeless veterans. The VA wait time scandal. Agent Orange denial. Burn pit denial. Gulf War Syndrome denial. America sends " url="/analysis/veterans-betrayed" />
      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Veterans Betrayed
        </h1>
        <p className="text-xl text-stone-300 mb-4">17 Suicides a Day, 37,000 Homeless &amp; a Nation That Doesn&apos;t Care</p>
        <p className="text-stone-400 text-lg">
          America loves its veterans in speeches. It puts &ldquo;Support Our Troops&rdquo; bumper stickers 
          on SUVs. It claps when soldiers walk through airports. It thanks them for their service. And then 
          it lets {stats.veteranSuicidePerDay} of them kill themselves every single day. It lets 37,000 of 
          them sleep on the street. It denies their disability claims for decades. It poisons them with burn 
          pits and Agent Orange and then fights them in court when they ask for help. The United States 
          spends {fmtMoney(stats.currentAnnualBudget)} per year on its military. It cannot manage to take 
          care of the people it breaks.
        </p>
      </div>

      <ShareButtons title="Veterans Betrayed: 17 Suicides a Day & America's Broken Promises" />

      {/* Key Numbers */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">By the Numbers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {veteranStats.map((item) => (
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

      {/* Section: Suicide */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          17 Per Day: The Suicide Epidemic
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Every day, approximately <strong>17 veterans</strong> die by suicide. That&apos;s one every 85 minutes. 
          In the time it takes to watch a movie, another veteran is dead. Since 9/11, more than 
          <strong> 30,177 post-9/11 veterans</strong> have killed themselves — four times the number killed in 
          combat. The war kills more people after they come home than while they&apos;re deployed.
        </p>

        <SuicideChart />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-950/10 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">Who Is Dying</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>70%</strong> of veteran suicides are veterans NOT in VA care — the system doesn&apos;t reach them</li>
              <li>• <strong>18-34 year olds</strong> have the highest rate — the post-9/11 generation</li>
              <li>• Veterans who experienced <strong>military sexual trauma</strong> are 2x more likely to die by suicide</li>
              <li>• <strong>Rural veterans</strong> have a 25% higher suicide rate than urban veterans — fewer VA facilities</li>
              <li>• <strong>Women veterans</strong> have a suicide rate 2.5x that of civilian women</li>
              <li>• <strong>National Guard/Reserve</strong> members have the fastest-growing suicide rate</li>
            </ul>
          </div>
          <div className="bg-red-950/10 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">What Isn&apos;t Working</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• The VA has spent <strong>$1B+ on suicide prevention</strong> since 2007 — the rate hasn&apos;t dropped</li>
              <li>• The <strong>Veterans Crisis Line</strong> has been plagued by dropped calls and long wait times</li>
              <li>• <strong>Stigma</strong> remains the #1 barrier — 60% of veterans with mental health issues don&apos;t seek help</li>
              <li>• <strong>Wait times for mental health</strong> appointments average 42 days at the VA</li>
              <li>• Many veterans receive <strong>medication only</strong> — not therapy, not community support</li>
              <li>• The VA counts only veterans in its system — <strong>the true number may be higher</strong></li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Moral Injury</h3>
          <p className="text-stone-300 mb-3">
            PTSD is a response to fear. Moral injury is a response to guilt. Many veterans who take their lives 
            are not haunted by what was done to them — they are haunted by <strong>what they did</strong>. Killing 
            civilians. Following orders they knew were wrong. Participating in a war they came to believe was unjust.
          </p>
          <p className="text-stone-300">
            Moral injury doesn&apos;t respond to traditional PTSD treatments. You can&apos;t do exposure therapy 
            for guilt. The VA has only recently begun to recognize moral injury as a distinct condition — and there 
            are almost no evidence-based treatments for it. Veterans are dying of a wound the system can&apos;t see.
          </p>
        </div>
      </section>

      {/* Section: Homelessness */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          37,000 Homeless: Sleeping on the Streets They Defended
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          On any given night, approximately <strong>37,000 veterans</strong> are homeless in America. They sleep 
          under bridges, in shelters, in cars, and in parks — in the same country that spent {fmtMoney(stats.warOnTerrorCost)} 
          on the wars they fought. Veterans make up <strong>8% of the homeless population</strong> despite being 
          only 6% of the adult population.
        </p>

        <HomelessChart />

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Pipeline to Homelessness</h3>
          <p className="text-stone-700 mb-3">
            The path from service to street is tragically predictable. A veteran returns from deployment with 
            untreated PTSD. They self-medicate with alcohol or opioids. Their marriage falls apart. They lose 
            their job. They can&apos;t navigate the VA system. They run out of savings. They end up on the street.
          </p>
          <p className="text-stone-700">
            The transition from military to civilian life is a critical vulnerability window. The military provides 
            housing, food, healthcare, community, and purpose. On discharge day, all of that disappears. The 
            Transition Assistance Program (TAP) — a mandatory series of briefings — is widely regarded as 
            inadequate. Veterans report being rushed through PowerPoint presentations about resume writing while 
            dealing with the psychological impact of what they&apos;ve experienced.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Veteran Homelessness by State</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-stone-800 text-white">
                <tr>
                  <th className="text-left py-2 px-3">State</th>
                  <th className="text-center py-2 px-3">Homeless Veterans</th>
                  <th className="text-center py-2 px-3">% of Total Homeless</th>
                  <th className="text-left py-2 px-3">Primary Causes</th>
                </tr>
              </thead>
              <tbody>
                {veteranHomelessness.map((state) => (
                  <tr key={state.location} className="border-t border-stone-200 even:bg-stone-50">
                    <td className="py-2 px-3 font-medium text-red-800">{state.location}</td>
                    <td className="py-2 px-3 text-center font-bold">{state.homelessVets.toLocaleString()}</td>
                    <td className="py-2 px-3 text-center text-red-700">{state.vetPercent}</td>
                    <td className="py-2 px-3 text-stone-600 text-xs">{state.topCauses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section: Military Sexual Trauma */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Military Sexual Trauma: The War Crime We Don't Talk About
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          <strong>1 in 4 women veterans and 1 in 100 male veterans</strong> experienced Military Sexual Trauma (MST) 
          — rape, sexual assault, or repeated sexual harassment during military service. That's approximately 
          <strong>500,000 veterans</strong> who were attacked not by the enemy, but by their fellow soldiers, 
          often their commanders. MST survivors have double the suicide rate of other veterans, yet their 
          disability claims face a 67% initial denial rate.
        </p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-red-400">Military Sexual Trauma by the Numbers</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {militarySexualTrauma.map((stat) => (
              <div key={stat.statistic} className="border-l-4 border-red-600 pl-4">
                <h4 className="font-bold text-white text-lg">{stat.statistic}</h4>
                <p className="text-stone-300 text-sm mb-2">{stat.detail}</p>
                <p className="text-red-400 text-sm"><strong>Impact:</strong> {stat.impact}</p>
                <p className="text-stone-400 text-sm"><strong>VA Response:</strong> {stat.vaResponse}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          <strong>The military justice system fails MST survivors systematically.</strong> Only 7% of military 
          sexual assault cases result in conviction. Survivors who report are often retaliated against, forced 
          to serve alongside their attackers, and pushed out of the military through "administrative separation." 
          Many don't report until years later when seeking VA disability benefits — and the VA demands "credible 
          evidence" beyond survivor testimony.
        </p>

        <p className="text-stone-700 text-lg mb-4">
          <strong>Senator Kirsten Gillibrand has spent a decade</strong> fighting to remove sexual assault cases 
          from the military chain of command. The military leadership has opposed it every step, claiming it would 
          undermine unit cohesion. The same unit cohesion that allows 1 in 4 women to be sexually assaulted by 
          their fellow service members. In 2022, Congress finally passed limited reforms — but commanders still 
          control the process for most cases.
        </p>
      </section>

      {/* Section: VA Scandal */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The VA Wait Time Scandal
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          In 2014, a whistleblower at the Phoenix VA Medical Center revealed that at least 
          <strong> 40 veterans had died</strong> waiting for appointments that never came. Administrators had 
          created secret wait lists to hide delays. Veterans were waiting <strong>115+ days</strong> for primary 
          care appointments while the official statistics showed wait times of 24 days. The scandal wasn&apos;t 
          limited to Phoenix — it was systemic.
        </p>

        <WaitTimesChart />

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Aftermath of the Scandal</h3>
          <p className="text-stone-700 mb-3">
            VA Secretary Eric Shinseki resigned. Congress passed the Veterans Access, Choice, and Accountability 
            Act. Wait times improved — but the fundamental problems persist. The VA system serves <strong>9.1 
            million veterans</strong> with chronic staffing shortages. As of 2024, the VA has <strong>49,000 
            unfilled positions</strong> — including 3,000+ mental health provider vacancies.
          </p>
          <p className="text-stone-700">
            The $16 billion electronic health records modernization — contracted to Oracle Cerner — has been a 
            catastrophe. Patient safety incidents were reported at every site where it was deployed. The system 
            was so bad that the VA paused the rollout in 2023 after spending <strong>$6 billion</strong> with 
            little to show for it.
          </p>
        </div>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Program</th>
                <th className="px-4 py-3 text-left">Issue</th>
                <th className="px-4 py-3 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              {failedPrograms.map((row) => (
                <tr key={row.program} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.program}</td>
                  <td className="px-4 py-3">{row.issue}</td>
                  <td className="px-4 py-3 text-sm text-stone-600">{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: Decades of Denial */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Pattern: Deny, Delay, Until They Die
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The government&apos;s response to veteran health crises follows a pattern so consistent it 
          must be considered policy: <strong>Deny the problem exists. Fight veterans in court. Wait for 
          them to die. Then, decades later, acknowledge it and claim credit for fixing it.</strong>
        </p>

        <DenialTimelineChart />

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Condition</th>
                <th className="px-4 py-3 text-right">Years of Denial</th>
                <th className="px-4 py-3 text-left">First Exposed</th>
                <th className="px-4 py-3 text-left">Recognized</th>
                <th className="px-4 py-3 text-right">Veterans Affected</th>
              </tr>
            </thead>
            <tbody>
              {[
                { condition: 'Agent Orange', yearsOfDenial: 20, yearExposed: '1962', yearRecognized: '1991', affectedVets: '2.6M' },
                { condition: 'Gulf War Syndrome', yearsOfDenial: 17, yearExposed: '1991', yearRecognized: '2008', affectedVets: '250K' },
                { condition: 'Burn Pits', yearsOfDenial: 21, yearExposed: '2001', yearRecognized: '2022', affectedVets: '3.5M' },
                { condition: 'Camp Lejeune Water', yearsOfDenial: 42, yearExposed: '1953', yearRecognized: '2022', affectedVets: '1M' },
                { condition: 'Atomic Veterans', yearsOfDenial: 42, yearExposed: '1946', yearRecognized: '1988', affectedVets: '400K' },
              ].map((row) => (
                <tr key={row.condition} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.condition}</td>
                  <td className="px-4 py-3 text-right font-bold text-red-800">{row.yearsOfDenial} years</td>
                  <td className="px-4 py-3">{row.yearExposed}</td>
                  <td className="px-4 py-3">{row.yearRecognized}</td>
                  <td className="px-4 py-3 text-right font-bold">{row.affectedVets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">PTSD: The Condition They Had to Invent</h3>
          <p className="text-stone-700 mb-3">
            When Vietnam veterans came home with nightmares, flashbacks, hypervigilance, and emotional numbness, 
            the military called them weak. The VA called them malingerers. There was no diagnosis for what they 
            had. &ldquo;Shell shock&rdquo; from WWI and &ldquo;combat fatigue&rdquo; from WWII were considered 
            temporary conditions. Veterans were expected to &ldquo;get over it.&rdquo;
          </p>
          <p className="text-stone-700 mb-3">
            It took until <strong>1980</strong> — seven years after the last troops left Vietnam — for the 
            American Psychiatric Association to include Post-Traumatic Stress Disorder in the DSM-III. Vietnam 
            veterans had to <strong>fight for the recognition that their suffering was real</strong> — while 
            simultaneously suffering from it.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
              <thead className="bg-stone-200">
                <tr>
                  <th className="px-4 py-2 text-left">War</th>
                  <th className="px-4 py-2 text-right">PTSD Rate</th>
                  <th className="px-4 py-2 text-right">Years to Recognize</th>
                  <th className="px-4 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {ptsdStats.map((row) => (
                  <tr key={row.war} className="border-t border-stone-200 even:bg-stone-50">
                    <td className="px-4 py-2 font-medium">{row.war}</td>
                    <td className="px-4 py-2 text-right font-bold">{row.ptsdRate}</td>
                    <td className="px-4 py-2 text-right">{row.yearsToRecognize} years</td>
                    <td className="px-4 py-2 text-xs text-stone-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section: The Disability Claims Nightmare */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The $300 Billion Backlog
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          As of 2024, the VA has a pending disability claims backlog of over <strong>300,000 claims</strong>, 
          with an average processing time of <strong>152 days</strong>. If a claim is denied and appealed — 
          which happens frequently — the appeal takes an average of <strong>540 days</strong>. Many veterans 
          die before their claims are resolved.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-950/10 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">The Claims Process</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• Veterans must <strong>prove</strong> their condition is service-connected — the burden is on the veteran</li>
              <li>• Military medical records are often incomplete, lost, or classified</li>
              <li>• C&amp;P (Compensation &amp; Pension) exams are conducted by contract doctors who spend an average of <strong>20 minutes</strong></li>
              <li>• The rating system is opaque — identical conditions receive wildly different ratings</li>
              <li>• Veterans who hire lawyers get <strong>3x higher ratings</strong> on average — a system that punishes those who can&apos;t afford help</li>
            </ul>
          </div>
          <div className="bg-red-950/10 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">The Future Cost</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• Estimated <strong>$300B+ in future veteran care costs</strong> for post-9/11 wars alone</li>
              <li>• PACT Act added <strong>23 new presumptive conditions</strong> — millions of new eligible claims</li>
              <li>• Peak veteran care costs historically arrive <strong>30-40 years after a war</strong></li>
              <li>• Vietnam veteran care costs are <strong>still rising</strong> — 50 years later</li>
              <li>• The VA budget (${Math.round(stats.veteranCareFutureCost / 1e9)}B lifetime) is never included in the &ldquo;cost of war&rdquo;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Veteran Employment Crisis */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Employment Lie: "Veterans Make Great Employees"
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Corporate America loves to hire veterans — for public relations. The unemployment rate for veterans 
          (2.9%) looks better than the civilian rate (3.7%), but this masks a deeper crisis: <strong>43% of 
          veterans are underemployed</strong>, working jobs below their skill level or unable to find full-time 
          work. Veterans have the skills to do complex jobs but struggle with workplace culture that doesn't 
          reward the military values they've internalized.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Veteran vs. Civilian Employment Challenges</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-stone-800 text-white">
                <tr>
                  <th className="text-left py-2 px-3">Challenge</th>
                  <th className="text-center py-2 px-3">Veteran Rate</th>
                  <th className="text-center py-2 px-3">Civilian Rate</th>
                  <th className="text-left py-2 px-3">Details</th>
                </tr>
              </thead>
              <tbody>
                {veteranEmployment.map((challenge) => (
                  <tr key={challenge.challenge} className="border-t border-stone-200 even:bg-stone-50">
                    <td className="py-2 px-3 font-medium text-red-800">{challenge.challenge}</td>
                    <td className="py-2 px-3 text-center font-bold text-red-700">{challenge.veteranRate}</td>
                    <td className="py-2 px-3 text-center text-stone-700">{challenge.civilianRate}</td>
                    <td className="py-2 px-3 text-stone-600 text-xs">{challenge.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section: PACT Act Implementation */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The PACT Act: Too Little, Too Late, Too Slow
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          In August 2022, after <strong>Jon Stewart shamed Congress on national television</strong>, the PACT Act 
          became law — expanding VA benefits to veterans exposed to burn pits, Agent Orange, and other toxic 
          substances. It was the largest expansion of veteran benefits in 30 years. It was also 21 years after 
          the first burn pits started poisoning troops in Iraq and Afghanistan.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">PACT Act Implementation Progress (2024)</h3>
          <div className="space-y-4">
            {pactActImplementation.map((provision) => (
              <div key={provision.provision} className="border border-stone-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-red-800">{provision.provision}</h4>
                  <span className="text-stone-600 text-sm">{provision.eligible}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-stone-700">Applied:</span> {provision.applied} |
                    <span className="font-medium text-stone-700"> Approved:</span> {provision.approved}
                  </div>
                  <div>
                    <span className="font-medium text-stone-700">Avg Payment:</span> {provision.avgPayment} |
                    <span className="font-medium text-stone-700"> Timeline:</span> {provision.timeline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          <strong>The PACT Act is a perfect example of how government "fixes" work:</strong> Deny the problem 
          for decades. Fight veterans in court. Wait for most of them to die. Then pass legislation that helps 
          the survivors while claiming credit for being compassionate. The survivors get help, but the majority 
          who died waiting get nothing.
        </p>
      </section>

      {/* Bottom line */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-stone-300 text-lg mb-4">
            The United States asks young men and women to fight its wars — wars that cost {fmtMoney(stats.warOnTerrorCost)} 
            and counting. It gives defense contractors {fmtMoney(stats.currentAnnualBudget)} per year. It pays CEO 
            salaries of $30 million. And then it lets the people who actually fought — the ones who lost limbs, 
            who got PTSD, who were poisoned by burn pits, who can&apos;t sleep, who can&apos;t hold a job, who 
            can&apos;t stop seeing the faces of people they killed — sleep on the street and kill themselves at 
            a rate of 17 per day.
          </p>
          <p className="text-stone-300 text-lg mb-4">
            &ldquo;Thank you for your service&rdquo; costs nothing. It&apos;s the cheapest thing in the military 
            budget. Actually taking care of veterans — that costs money the country claims it can&apos;t afford, 
            while spending $886 billion on the next war.
          </p>
          <p className="text-stone-300 text-lg">
            The pattern is deny, delay, and hope they die before the bill comes due. Agent Orange: 20 years. 
            Gulf War Syndrome: 17 years. Burn pits: 21 years. Camp Lejeune: 42 years. By the time the government 
            admits it broke you, you&apos;re already dead. That is how America treats its veterans.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li><strong>Official VA &amp; Government Reports:</strong></li>
          <li>• VA National Suicide Data Report (2024) &amp; Annual Reports (2018-2024)</li>
          <li>• HUD Annual Homeless Assessment Report — Veterans Supplement (2024)</li>
          <li>• VA Office of Inspector General, Phoenix VA Wait Time Investigation (2014) &amp; Follow-up Reports</li>
          <li>• Congressional Research Service, "VA Disability Claims Backlog" &amp; "Veteran Benefits" Series</li>
          <li>• Government Accountability Office (GAO), "VA Electronic Health Records," "Veterans Benefits," &amp; Healthcare Reports</li>
          <li>• PACT Act Implementation Reports, VA Office of Public &amp; Intergovernmental Affairs (2022-2024)</li>
          <li>• VA Agent Orange, Gulf War Illness &amp; Environmental Hazards Claims Data (Annual)</li>
          <li>• Department of Labor, Bureau of Labor Statistics, "Employment Situation of Veterans" (Annual)</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Academic &amp; Research Institution Sources:</strong></li>
          <li>• Brown University Watson Institute, Costs of War Project: "Post-9/11 Veteran Suicides" (2023)</li>
          <li>• RAND Corporation, "Invisible Wounds of War" (2008) &amp; "Veteran Employment" Studies</li>
          <li>• Research Advisory Committee on Gulf War Veterans' Illnesses, Reports (2008-2024)</li>
          <li>• Institute of Medicine (National Academies), Veterans &amp; Agent Orange Update Series</li>
          <li>• Harvard T.H. Chan School of Public Health, "Veteran Mental Health" Studies</li>
          <li>• American Psychological Association, "Military Psychology" &amp; PTSD Research</li>
          <li>• Journal of Traumatic Stress, Military Medicine, &amp; Journal of Veteran Studies (Various)</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Health &amp; Environmental Sources:</strong></li>
          <li>• Agency for Toxic Substances &amp; Disease Registry (ATSDR), Camp Lejeune Studies (2023)</li>
          <li>• Centers for Disease Control &amp; Prevention (CDC), Veteran Health Surveys</li>
          <li>• National Cancer Institute, "Agent Orange &amp; Cancer" Studies</li>
          <li>• Department of Defense, Millennium Cohort Study &amp; Health Surveillance Reports</li>
          <li>• American Journal of Public Health, Military Environmental Health Studies</li>
          <li>• Environmental Health Perspectives, Military Toxic Exposure Research</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Legal &amp; Advocacy Sources:</strong></li>
          <li>• National Veterans Legal Services Program (NVLSP), Case Law &amp; Policy Reports</li>
          <li>• Veterans for Common Sense, Litigation Documents &amp; Policy Studies</li>
          <li>• Disabled American Veterans (DAV), Legislative &amp; Benefits Reports</li>
          <li>• Iraq and Afghanistan Veterans of America (IAVA), Policy Research</li>
          <li>• Court Records: Class Action Lawsuits against VA (Public PACER Filings)</li>
          <li>• Department of Justice, False Claims Act Cases involving VA Contractors</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>International Comparison Sources:</strong></li>
          <li>• Veterans Affairs Canada, Annual Reports &amp; Statistical Releases</li>
          <li>• UK Ministry of Defence, "UK Armed Forces Mental Health" Annual Reports</li>
          <li>• Australian Department of Veterans' Affairs, "Veteran Wellbeing" Studies</li>
          <li>• German Federal Ministry of Defence, Veteran Care Reports</li>
          <li>• Israel Defense Forces, Medical Corps &amp; Veteran Studies</li>
          <li>• NATO Joint Medical Committee, "Military Mental Health" Comparative Studies</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Military Sexual Trauma Sources:</strong></li>
          <li>• Department of Defense, Annual Report on Sexual Assault in the Military (2018-2024)</li>
          <li>• VA Military Sexual Trauma Support Team, Annual Data Reports</li>
          <li>• Senate Armed Services Committee, Military Sexual Assault Hearings (2013-2024)</li>
          <li>• RAND Corporation, "Sexual Assault &amp; Sexual Harassment in the U.S. Military" (2018)</li>
          <li>• Protect Our Defenders, MST Survivor Testimonies &amp; Legal Cases</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Employment &amp; Economic Sources:</strong></li>
          <li>• Bureau of Labor Statistics, "Employment Situation of Veterans" Monthly Reports</li>
          <li>• Small Business Administration, "Veteran Entrepreneurship" Studies</li>
          <li>• Corporate Gray, "Veteran Employment" Industry Reports</li>
          <li>• Military Family Life Counselors, Transition Studies</li>
          <li>• Federal Employment Statistics for Veterans (OPM Annual Reports)</li>
        </ul>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/analysis/military-families" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Military Families</h3>
            <p className="text-sm text-stone-500">The families left behind — divorce, poverty, and broken homes.</p>
          </Link>
          <Link href="/analysis/environmental-cost" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Environmental Cost</h3>
            <p className="text-sm text-stone-500">Burn pits, Agent Orange, and the Pentagon&apos;s toxic legacy.</p>
          </Link>
          <Link href="/analysis/the-aftermath" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">The Aftermath</h3>
            <p className="text-sm text-stone-500">$2.5T in veteran care. The war that never ends.</p>
          </Link>
        </div>
      </section>

      <RelatedArticles articles={[{"slug":"human-cost","title":"The Human Cost","desc":"Beyond the statistics."},{"slug":"the-aftermath","title":"The Aftermath","desc":"Wars don't end when troops come home."},{"slug":"environmental-cost","title":"Environmental Cost","desc":"Burn pits, depleted uranium, Agent Orange."}]} />

        <BackToTop />
    </div>
  )
}
