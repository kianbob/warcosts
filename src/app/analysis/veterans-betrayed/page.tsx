import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
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

export default function VeteransBetrayedPage() {
  const stats = loadData('stats.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Veterans Betrayed' }]} />

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
          <li>• VA National Suicide Data Report (2024)</li>
          <li>• HUD Annual Homeless Assessment Report — Veterans Supplement (2024)</li>
          <li>• VA Office of Inspector General, &ldquo;Phoenix VA Wait Time Investigation&rdquo; (2014)</li>
          <li>• Brown University Costs of War Project, &ldquo;Post-9/11 Veteran Suicides&rdquo; (2023)</li>
          <li>• Congressional Research Service, &ldquo;VA Disability Claims Backlog&rdquo; (2024)</li>
          <li>• GAO, &ldquo;VA Electronic Health Records Modernization&rdquo; (2023)</li>
          <li>• PACT Act Implementation Report, VA (2024)</li>
          <li>• VA Agent Orange Claims Data (2024)</li>
          <li>• Research Advisory Committee on Gulf War Veterans&apos; Illnesses, Final Report (2008)</li>
          <li>• ATSDR, Camp Lejeune Water Contamination Study (2023)</li>
          <li>• RAND Corporation, &ldquo;Invisible Wounds of War&rdquo; (2008)</li>
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

      <BackToTop />
    </div>
  )
}
