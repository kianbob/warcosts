import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { VietnamDraftChart, Project100kChart, GeographicChart, IncomeChart, CongressKidsChart, ContractorChart } from './DraftCharts'

export const metadata: Metadata = {
  title: 'The Draft & Inequality: Who Fights America\'s Wars? | WarCosts',
  description: '80% of Vietnam combatants came from poor/working-class families. McNamara\'s Project 100,000 sent men with low test scores to die at twice the rate. Today\'s "all-volunteer" military is a poverty draft by another name.',
  openGraph: {
    title: 'The Draft & Inequality: Who Fights America\'s Wars?',
    description: 'Vietnam draft inequity, Project 100,000, the poverty draft, and who actually bears the cost of war.',
    url: 'https://www.warcosts.org/analysis/draft-and-inequality',
    type: 'article',
  },
}

const draftStats = [
  { stat: '80%', label: 'Of Vietnam combatants from poor/working-class families', source: 'Christian Appy, Working-Class War' },
  { stat: '354,000', label: 'Men with low test scores drafted under Project 100,000 — died at 2x the rate', source: 'McNamara\'s Folly, Hamilton Gregory' },
  { stat: '<1%', label: 'Of Congress members had children serving during Iraq/Afghanistan', source: 'Congressional Research Service' },
  { stat: '44%', label: 'Of military recruits from rural areas (15% of population)', source: 'DoD Demographics Report' },
  { stat: '8%', label: 'Of enlistees from the wealthiest 20% of households', source: 'Heritage Foundation / CNA Military Advisory Board' },
  { stat: '50,000+', label: 'Private contractors in Iraq at peak — excluded from casualty counts', source: 'Congressional Budget Office' },
]

const wealthyDodgers = [
  { name: 'Donald Trump', dodging: '5 deferments (4 college, 1 medical for bone spurs)', irony: 'Later claimed military school gave him "military training." Called military service members "suckers and losers."' },
  { name: 'Dick Cheney', dodging: '5 deferments: "I had other priorities in the \'60s than military service"', irony: 'As Defense Secretary and VP, sent others to fight wars he avoided. Net worth: $90M+.' },
  { name: 'George W. Bush', dodging: 'Texas Air National Guard (skipped physical, went AWOL)', irony: 'Started Iraq War. Guard unit never deployed to Vietnam. Father\'s connections got him in.' },
  { name: 'Bill Clinton', dodging: 'College deferment, law school, promised to join ROTC (never did)', irony: 'Bombed Iraq, Kosovo, Sudan, Afghanistan. "Loathed the military" per own letter.' },
  { name: 'Joe Biden', dodging: '5 deferments (4 college, 1 asthma — played football/baseball)', irony: 'Voted for Iraq War, Afghanistan escalation. Son served but he sent other people\'s kids.' },
  { name: 'Mitt Romney', dodging: 'Mormon mission deferment, college deferments', irony: '2012: called Russia greatest threat, wanted military buildup. Never faced combat himself.' },
  { name: 'Ted Nugent', dodging: 'Pooped himself for a week before draft physical (by his own account)', irony: 'Right-wing hawk, NRA board member. Calls himself "patriot" while dodging service.' },
  { name: 'Rush Limbaugh', dodging: 'Medical deferment for pilonidal cyst (infected hair follicle)', irony: 'Decades of attacking "draft dodgers" on radio. Called military service members heroes while avoiding it.' },
]

const socioeconomicData = [
  { category: 'Household Income <$30K', enlistment: '34%', population: '18%', multiplier: '1.9x overrepresented' },
  { category: 'Household Income $30-50K', enlistment: '28%', population: '22%', multiplier: '1.3x overrepresented' },
  { category: 'Household Income $50-75K', enlistment: '22%', population: '24%', multiplier: '0.9x (proportional)' },
  { category: 'Household Income $75-100K', enlistment: '11%', population: '16%', multiplier: '0.7x underrepresented' },
  { category: 'Household Income >$100K', enlistment: '5%', population: '20%', multiplier: '0.25x (drastically underrepresented)' },
]

const modernInequalities = [
  { inequality: 'Military Recruitment Targeting', description: 'Pentagon spends $666M annually on recruitment, heavily targeting low-income schools. High-income schools get college recruiters; poor schools get military recruiters.', impact: 'Creates pipeline from poverty to combat.' },
  { inequality: 'Student Loan Crisis', description: 'Average student debt: $37,000. Military offers up to $65,000 in loan forgiveness. College unaffordable → military "choice."', impact: 'Economic conscription through educational debt.' },
  { inequality: 'Healthcare Access', description: 'Military offers free healthcare to families. 27 million Americans uninsured. Military service becomes healthcare access.', impact: 'Medical necessity drives enlistment.' },
  { inequality: 'Stop-Loss Policy', description: 'Military extended deployments for 185,000 soldiers (2001-2009). "Backdoor draft" — involuntary service extensions during wartime.', impact: 'Voluntary service becomes involuntary conscription.' },
  { inequality: 'National Guard Deployment', description: '700,000+ Guard/Reserve deployments to Iraq/Afghanistan. "Weekend warriors" became full-time soldiers with civilian jobs/families.', impact: 'Part-time commitment became multiple combat tours.' },
  { inequality: 'Geographic Isolation', description: 'Rural communities have fewer economic opportunities. Military becomes primary path to middle class. Urban elite communities have multiple pathways.', impact: 'Geographic inequality drives military service.' },
]

const historicalComparisons = [
  { war: 'Civil War (1861-1865)', policy: '$300 substitution fee', impact: 'Rich could buy their way out. NYC Draft Riots killed 120+ people protesting inequality.', lesson: 'Open class warfare over military service.' },
  { war: 'World War I (1917-1918)', policy: 'College deferments rare; draft applied broadly', impact: '24 million men registered, 2.8M drafted. More egalitarian than later wars.', lesson: 'When draft applied broadly, war had broader support.' },
  { war: 'World War II (1941-1945)', policy: 'Broader draft, but still deferments', impact: '10M drafted, 6M volunteered. 88% of Congress had children serving.', lesson: 'Shared sacrifice created shared support.' },
  { war: 'Korea (1950-1953)', policy: 'College deferments expanded', impact: 'Class divisions emerged. College students stayed home, working class went to war.', lesson: 'Beginning of modern inequality pattern.' },
  { war: 'Vietnam (1964-1973)', policy: 'Extensive deferment system', impact: '80% of combatants from poor/working families. Massive anti-war protests.', lesson: 'Elite exemption created elite opposition.' },
  { war: 'Iraq/Afghanistan (2001-2021)', policy: 'All-volunteer + poverty draft', impact: '<1% of Americans served. Public indifference to 20-year wars.', lesson: 'When only poor people fight, public doesn\'t care.' },
]

const recruitmentTactics = [
  { tactic: 'School Access (No Child Left Behind)', details: 'Military gets student contact info, equal access to public schools. Private/elite schools can opt out.', target: 'Public school students in low-income areas' },
  { tactic: 'Video Game Recruitment', details: '$32M on "America\'s Army" video game, esports tournaments, Twitch streaming. Gaming targets young males.', target: 'Teenagers 13-17, predominantly male' },
  { tactic: 'Economic Incentives', details: '$40,000 signing bonuses, college tuition, healthcare, housing, steady paycheck in economic uncertainty.', target: 'Economic desperation, student debt crisis' },
  { tactic: 'Delayed Entry Program', details: 'Sign contract at 17, delayed entry at 18. Locks in minors before they can fully understand consequences.', target: 'High school juniors/seniors' },
  { tactic: 'JROTC Programs', details: '$365M annually for high school military programs. 1,731 high schools with JROTC programs, predominantly low-income.', target: '14-18 year olds in struggling schools' },
  { tactic: 'Community College Targeting', details: 'Recruiters stationed at community colleges where working-class students attend. Less presence at elite universities.', target: 'Working-class college students with debt' },
]

export default function DraftAndInequalityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Draft & Inequality' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Draft &amp; Inequality
        </h1>
        <p className="text-xl text-stone-300 mb-4">Who Fights America&apos;s Wars?</p>
        <p className="text-stone-400 text-lg">
          In theory, military service is shared sacrifice. In practice, it never has been. During Vietnam, 
          the wealthy got college deferments while the poor got drafted. Today, the &ldquo;all-volunteer&rdquo; 
          force recruits overwhelmingly from rural poverty and working-class communities. The people who 
          vote for war don&apos;t fight it. The people who profit from war don&apos;t die in it. And the 
          people who die in it rarely had much choice.
        </p>
      </div>

      <ShareButtons title="The Draft & Inequality: Who Fights America's Wars?" />

      {/* Key Numbers */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="text-red-400 font-bold text-lg mb-4">By the Numbers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {draftStats.map((item) => (
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

      <VietnamDraftChart />

      {/* Vietnam Draft */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Vietnam: The Rich Man&apos;s War, the Poor Man&apos;s Fight</h2>
        <p className="text-stone-600 mb-4">
          Between 1964 and 1973, 2.2 million Americans were drafted to fight in Vietnam. The system 
          was theoretically random — but in practice, it was a class filter. College deferments protected 
          the wealthy. Medical deferments could be bought with a cooperative family doctor. National Guard 
          slots — which rarely deployed to Vietnam — were reserved for the well-connected.
        </p>
        <p className="text-stone-600 mb-4">
          The result: 80% of the 2.5 million Americans who served in Vietnam came from working-class or 
          poor families. The average infantryman was 19 years old, white, and from a household earning 
          below the median income. Meanwhile, future presidents (George W. Bush, Bill Clinton), future 
          vice presidents (Dick Cheney, who received five deferments), and future hawks in Congress 
          found ways to avoid service.
        </p>

        <div className="bg-stone-50 rounded-lg p-5 my-6">
          <h3 className="font-bold mb-3">The Deferment Machine</h3>
          <div className="space-y-3">
            {[
              { type: 'College Deferment (2-S)', count: '15.4 million', note: 'Available to anyone enrolled in college — meaning anyone who could afford it. Working-class 18-year-olds went to war; middle-class 18-year-olds went to college.' },
              { type: 'Medical Deferment (4-F)', count: '6.4 million', note: 'Wealthy families hired private doctors to diagnose bone spurs, bad backs, and psychological conditions. Donald Trump received a medical deferment for bone spurs — the examining doctor was a tenant of Trump\'s father.' },
              { type: 'National Guard / Reserves', count: '1 million+', note: 'Guard units rarely deployed to Vietnam. Getting in required connections. George W. Bush jumped a waiting list of 500 to enter the Texas Air National Guard.' },
              { type: 'Fled to Canada', count: '125,000', note: 'Required the means and knowledge to relocate internationally — again favoring the privileged.' },
            ].map(d => (
              <div key={d.type} className="border-l-2 border-red-800 pl-4">
                <p className="font-bold text-sm">{d.type} — <span className="text-red-800">{d.count}</span></p>
                <p className="text-stone-600 text-sm">{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project 100,000 */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">McNamara&apos;s Morons: Project 100,000</h2>
        <p className="text-stone-600 mb-4">
          In 1966, Secretary of Defense Robert McNamara launched &ldquo;Project 100,000&rdquo; — a program 
          that lowered military entrance standards to draft 354,000 men who had previously been rejected 
          for low scores on the Armed Forces Qualification Test. McNamara sold it as social uplift: these 
          men would receive training and discipline that would help them in civilian life.
        </p>
        <p className="text-stone-600 mb-4">
          The reality was monstrous. These men — disproportionately Black, poor, and poorly educated — 
          were sent to the front lines at double the rate of regular enlistees. They were given the most 
          dangerous assignments with the least preparation. They were killed at twice the rate. Those who 
          survived received minimal training benefits and were discharged with few skills.
        </p>
        <p className="text-stone-600 mb-4">
          The soldiers themselves called it &ldquo;McNamara&apos;s Morons&rdquo; — a cruel name for a 
          cruel program. 5,478 of them were killed. Many had IQs below 70 and couldn&apos;t read their 
          own orders. McNamara never publicly acknowledged the program&apos;s failures. In his 1995 memoir, 
          he expressed regret about Vietnam — but didn&apos;t mention Project 100,000 at all.
        </p>
      </section>

      <Project100kChart />

      {/* Wealthy Draft Dodgers */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Chickenhawk Hall of Fame</h2>
        <p className="text-stone-600 mb-6">
          The most shameless aspect of military inequality is how many of America&apos;s biggest war advocates are men who 
          dodged service themselves. These &ldquo;chickenhawks&rdquo; — people who advocate for wars they&apos;re too old, 
          too rich, or too cowardly to fight — dominate American politics. They love war as long as someone else is dying.
        </p>
        <div className="space-y-4">
          {wealthyDodgers.map((dodger) => (
            <div key={dodger.name} className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-2">{dodger.name}</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-red-400 font-semibold">How He Avoided Service:</span>
                  <p className="text-stone-300 mt-1">{dodger.dodging}</p>
                </div>
                <div>
                  <span className="text-red-400 font-semibold">The Irony:</span>
                  <p className="text-stone-300 mt-1">{dodger.irony}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-stone-100 rounded-lg p-4 mt-6">
          <p className="text-stone-600 text-sm">
            <strong>Pattern:</strong> The men most eager to send others to war are often those who found ways to avoid going themselves. 
            They understand the risks — which is exactly why they dodged. But they&apos;re happy to let poor kids take those risks for them.
          </p>
        </div>
      </section>

      {/* Modern Socioeconomic Breakdown */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Poverty Draft: By the Numbers</h2>
        <p className="text-stone-600 mb-6">
          The &ldquo;all-volunteer&rdquo; military is anything but. It&apos;s a poverty draft that systematically recruits 
          from communities with the fewest economic alternatives. The numbers tell the story:
        </p>
        <div className="bg-stone-800 rounded-lg p-6 mb-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">Military Enlistment by Household Income</h3>
          <div className="space-y-3">
            {socioeconomicData.map((data) => (
              <div key={data.category} className="flex justify-between items-center">
                <div className="flex-1">
                  <span className="text-stone-300">{data.category}</span>
                </div>
                <div className="text-right">
                  <span className="text-white font-bold">{data.enlistment}</span>
                  <span className="text-stone-400 text-sm ml-2">of military</span>
                </div>
                <div className="text-right ml-4">
                  <span className="text-stone-400 text-sm">{data.population} of pop</span>
                </div>
                <div className="text-right ml-4 min-w-[100px]">
                  <span className={`font-bold ${data.multiplier.includes('over') ? 'text-red-400' : data.multiplier.includes('under') ? 'text-green-400' : 'text-stone-300'}`}>
                    {data.multiplier}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-stone-600 text-sm">
          <strong>Translation:</strong> If military service were truly &ldquo;voluntary&rdquo; and not driven by economic necessity, 
          enlistment would mirror population demographics. Instead, the poorest 18% of Americans provide 34% of soldiers — nearly 
          double their population share. The wealthiest 20% provide just 5% of soldiers — one-quarter of their population share.
        </p>
      </section>

      {/* Modern Inequalities */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">How the System Works Today</h2>
        <p className="text-stone-600 mb-6">
          The modern military doesn&apos;t need a draft because it&apos;s created structural inequalities that do the drafting for it. 
          Here&apos;s how economic desperation gets channeled into military service:
        </p>
        <div className="space-y-4">
          {modernInequalities.map((item) => (
            <div key={item.inequality} className="bg-stone-100 border-l-4 border-red-600 p-5 rounded-r-lg">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">{item.inequality}</h3>
              <p className="text-stone-600 text-sm mb-3">{item.description}</p>
              <div className="bg-red-100 p-3 rounded">
                <span className="text-red-800 font-semibold text-sm">Impact: </span>
                <span className="text-red-700 text-sm">{item.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruitment Tactics */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Targeting the Vulnerable: Military Recruitment Tactics</h2>
        <p className="text-stone-600 mb-6">
          The Pentagon spends <strong>$666 million annually</strong> on recruitment — but not equally across all communities. 
          Military recruiters saturate low-income schools while elite institutions remain largely untouched. It&apos;s not accident; 
          it&apos;s strategy.
        </p>
        <div className="space-y-4">
          {recruitmentTactics.map((tactic) => (
            <div key={tactic.tactic} className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{tactic.tactic}</h3>
                <span className="text-red-400 text-sm">{tactic.target}</span>
              </div>
              <p className="text-stone-300 text-sm">{tactic.details}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-100 rounded-lg p-4 mt-6">
          <h3 className="font-bold mb-2">The Contrast</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">Low-Income Public Schools:</span>
              <ul className="text-stone-600 mt-1 space-y-1">
                <li>• Military recruiters have offices on campus</li>
                <li>• JROTC programs in hallways</li>
                <li>• Military-themed career fairs</li>
                <li>• Recruiters at lunch tables</li>
                <li>• Access to all student contact information</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold">Elite Private Schools:</span>
              <ul className="text-stone-600 mt-1 space-y-1">
                <li>• Can deny recruiter access</li>
                <li>• Focus on Ivy League college prep</li>
                <li>• Career counselors steer toward finance/law</li>
                <li>• Military service seen as backup option</li>
                <li>• Alumni networks provide alternatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Pattern */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Historical Pattern: When Wars Are Shared vs. When They&apos;re Not</h2>
        <p className="text-stone-600 mb-6">
          American military history shows a clear pattern: when sacrifice is shared, wars have public support and end relatively quickly. 
          When sacrifice falls only on the poor, wars drag on indefinitely because the public doesn&apos;t care enough to stop them.
        </p>
        <div className="space-y-4">
          {historicalComparisons.map((war) => (
            <div key={war.war} className="bg-stone-100 rounded-lg p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">{war.war}</h3>
                <span className="text-stone-500 text-sm">{war.policy}</span>
              </div>
              <p className="text-stone-600 text-sm mb-2"><strong>Impact:</strong> {war.impact}</p>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-green-800 text-sm font-semibold"><strong>Lesson:</strong> {war.lesson}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Poverty Draft */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Poverty Draft: &ldquo;Volunteer&rdquo; in Name Only</h2>
        <p className="text-stone-600 mb-4">
          The draft ended in 1973, replaced by the &ldquo;All-Volunteer Force.&rdquo; The name implies 
          free choice. The reality is economic coercion. Military recruiters target schools in low-income 
          areas. They offer signing bonuses, college tuition, healthcare, and housing — basic needs that 
          wealthy communities take for granted but poor communities can&apos;t access otherwise.
        </p>
        <p className="text-stone-600 mb-4">
          The No Child Left Behind Act (2002) required public schools to give military recruiters the same 
          access as college recruiters — including student contact information. Private schools were exempt. 
          The result: recruiters saturate public schools in poor areas while elite prep schools remain 
          untouched. It&apos;s not a draft. It&apos;s something more insidious — a system where economic 
          desperation does the work that conscription used to do.
        </p>
      </section>

      <GeographicChart />
      <IncomeChart />

      {/* Geographic Patterns */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Geography of Sacrifice</h2>
        <p className="text-stone-600 mb-4">
          Rural America bears a wildly disproportionate share of military service. Counties with fewer than 
          25,000 people produce 44% of military recruits despite comprising just 15% of the US population. 
          The reasons are structural: fewer economic opportunities, stronger military traditions, aggressive 
          recruiting in small-town schools, and the military&apos;s appeal as an escape from communities 
          with no other pathway to the middle class.
        </p>
        <p className="text-stone-600 mb-4">
          The top recruiting states per capita are consistently the poorest: Mississippi, Alabama, Georgia, 
          South Carolina, and Kentucky. The bottom states are the wealthiest: Massachusetts, Connecticut, 
          New Jersey, and New York. The correlation between state poverty rates and military enlistment 
          rates is nearly perfect.
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-6">
          <h3 className="text-red-400 font-bold text-lg mb-3">The Two Americas of Military Service</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-bold mb-2">Communities That Fight</h4>
              <ul className="text-stone-400 text-sm space-y-1">
                <li>• Average household income: $42,000</li>
                <li>• College attendance rate: 35%</li>
                <li>• Military recruitment: 3x national average</li>
                <li>• Veteran population: 12%</li>
                <li>• Communities where &ldquo;everyone knows someone who served&rdquo;</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Communities That Don&apos;t</h4>
              <ul className="text-stone-400 text-sm space-y-1">
                <li>• Average household income: $95,000+</li>
                <li>• College attendance rate: 80%+</li>
                <li>• Military recruitment: 0.5x national average</li>
                <li>• Veteran population: 3%</li>
                <li>• Communities where military service is &ldquo;what other people do&rdquo;</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CongressKidsChart />

      {/* Congress */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Those Who Vote for War Don&apos;t Fight It</h2>
        <p className="text-stone-600 mb-4">
          In World War II, 88% of Congress members had children in uniform. The people voting for war had 
          skin in the game. By Vietnam, it was 10%. During Iraq and Afghanistan — the longest wars in 
          American history — fewer than 1% of Congress members had children serving.
        </p>
        <p className="text-stone-600 mb-4">
          This isn&apos;t coincidental. When the people making war decisions bear no personal cost, war 
          becomes abstract — a policy option rather than a life-and-death decision. The 2002 vote to 
          authorize the Iraq War was 296-133 in the House and 77-23 in the Senate. Of the 373 members 
          who voted yes, exactly 1 had a child who served in Iraq.
        </p>
      </section>

      {/* Racial Disparities */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Racial Disparities</h2>
        <p className="text-stone-600 mb-4">
          In Vietnam, Black soldiers made up 11% of the US population but 12.4% of combat deaths — and in 
          the early years of the war (1965-1966), they accounted for 25% of combat deaths. Martin Luther 
          King Jr. called Vietnam &ldquo;a white man&apos;s war, a Black man&apos;s fight.&rdquo;
        </p>
        <p className="text-stone-600 mb-4">
          Today, Black Americans are 13% of the population and 17% of the military — with overrepresentation 
          concentrated in the enlisted ranks rather than the officer corps. Black service members are 
          disproportionately in support roles, but during active combat, they bear an outsized share of 
          frontline duty. The promise of equal opportunity in the military masks persistent inequalities 
          in assignment, promotion, and post-service outcomes.
        </p>
        <p className="text-stone-600 mb-4">
          Hispanic Americans are also overrepresented in frontline combat roles. As of 2024, Hispanic 
          soldiers make up 18% of the military but hold fewer than 8% of senior officer positions — 
          suggesting they do the fighting but don&apos;t rise to the decision-making.
        </p>
      </section>

      <ContractorChart />

      {/* The Contractor Loophole */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Contractor Loophole</h2>
        <p className="text-stone-600 mb-4">
          The rise of private military contractors created a new underclass of war workers. At the peak of 
          the Iraq War, there were more contractors (180,000+) than uniformed troops. These contractors — 
          truck drivers, cooks, security guards, interrogators — came overwhelmingly from poor communities, 
          often recruited with promises of $80,000-$120,000 salaries.
        </p>
        <p className="text-stone-600 mb-4">
          When contractors die, they don&apos;t appear in official casualty counts. At least 8,000 
          contractors have been killed in Iraq and Afghanistan — deaths that never made the evening news, 
          never lowered a flag to half-staff, and never generated the political pressure that might have 
          shortened the wars. It&apos;s the ultimate inequality: dying in the same war, for the same 
          country, in the same place — but not counting.
        </p>
        <p className="text-stone-600 mb-4">
          Many contractors were recruited from developing countries — Ugandans, Filipinos, Nepalis — paid 
          a fraction of what American contractors earned, working in the same combat zones. A Ugandan 
          security guard earning $1,000/month worked alongside American counterparts earning $15,000/month. 
          Even the exploitation is stratified.
        </p>
      </section>

      {/* Quote */}
      <blockquote className="border-l-4 border-red-800 pl-6 my-8 italic text-stone-600 text-lg">
        &ldquo;I ain&apos;t got no quarrel with them Vietcong. No Vietcong ever called me n*****.&rdquo;
        <span className="block text-sm not-italic text-stone-500 mt-2">
          — Muhammad Ali, refusing the draft, 1966 (stripped of his title and sentenced to 5 years in prison)
        </span>
      </blockquote>

      {/* The Psychology of Inequality */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Psychology of Acceptable Sacrifice</h2>
        <p className="text-stone-600 mb-4">
          Why does America tolerate a system where the poor fight wars for the rich? The answer lies in how society 
          constructs narratives around military service. The dominant narrative frames military service as:
        </p>
        <ul className="text-stone-600 mb-4 space-y-2">
          <li>• <strong>&ldquo;Voluntary service&rdquo;</strong> — ignoring economic coercion</li>
          <li>• <strong>&ldquo;Patriotic duty&rdquo;</strong> — making criticism seem unpatriotic</li>
          <li>• <strong>&ldquo;Character building&rdquo;</strong> — suggesting the poor benefit from war</li>
          <li>• <strong>&ldquo;Professional military&rdquo;</strong> — implying expertise rather than exploitation</li>
          <li>• <strong>&ldquo;All-volunteer force&rdquo;</strong> — the biggest lie of all</li>
        </ul>
        <p className="text-stone-600 mb-4">
          These narratives obscure the fundamental reality: America operates a class-based military system where economic 
          desperation does the work that legal conscription used to do. The poor don&apos;t &ldquo;choose&rdquo; military service 
          any more than they &ldquo;choose&rdquo; minimum-wage jobs. They select the best option from a constrained set of bad options.
        </p>
        <p className="text-stone-600 mb-4">
          Meanwhile, the wealthy construct alternative narratives for themselves: their children are &ldquo;building careers,&rdquo; 
          &ldquo;pursuing education,&rdquo; or &ldquo;starting businesses.&rdquo; Military service is fine for other people&apos;s children, 
          but their own are too valuable for cannon fodder.
        </p>
      </section>

      {/* Iran War Predictions */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Who Will Fight the Iran War?</h2>
        <p className="text-stone-600 mb-4">
          If the current conflict with Iran escalates to full war, the inequality patterns will repeat — but potentially 
          on an even larger scale. Here&apos;s what to expect:
        </p>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Iran War Class Breakdown (Predicted)</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-red-400 font-semibold">Who Will Fight:</h4>
              <ul className="text-stone-300 text-sm space-y-1 mt-2">
                <li>• Rural working-class men and women aged 18-25</li>
                <li>• Urban minorities seeking economic advancement</li>
                <li>• College graduates crushed by student debt</li>
                <li>• Immigrants seeking citizenship pathways</li>
                <li>• National Guard/Reserve members activated involuntarily</li>
                <li>• Private contractors recruited from poor communities globally</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-red-400 font-semibold">Who Won&apos;t Fight:</h4>
              <ul className="text-stone-300 text-sm space-y-1 mt-2">
                <li>• Children of Congress members, Wall Street executives, tech billionaires</li>
                <li>• Elite university students (graduate school deferments)</li>
                <li>• Corporate executive trainees ("essential to national economy")</li>
                <li>• Media personalities and pundits who advocate for war</li>
                <li>• Defense contractor executives who profit from war</li>
                <li>• Anyone with family wealth exceeding $1 million</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-stone-600 mb-4">
          If Iran requires ground invasion and occupation (as <Link href="/analysis/aipac-war-machine" className="text-red-600 hover:text-red-700">AIPAC advocates suggest</Link>), 
          the military may need to dramatically expand. This could mean:
        </p>
        <ul className="text-stone-600 mb-4 space-y-1">
          <li>• Massive recruitment drives targeting high school seniors</li>
          <li>• Enhanced economic incentives ($100K+ signing bonuses)</li>
          <li>• Immigration pathway recruitment (citizenship for service)</li>
          <li>• Stop-loss policies trapping current soldiers</li>
          <li>• Possible reinstatement of the draft (with deferments for the wealthy)</li>
        </ul>
      </section>

      {/* Global Perspective */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">How Other Countries Handle Military Service</h2>
        <p className="text-stone-600 mb-6">
          America&apos;s class-based military system is not inevitable. Other developed nations have found more equitable approaches:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              country: '🇨🇭 Switzerland',
              system: 'Universal conscription with alternatives',
              details: 'All men serve or pay 3% income tax for 11 years. No class exemptions. Wealthy bankers serve alongside working-class farmers.',
              outcome: 'Military service is shared sacrifice, not class-based exploitation.'
            },
            {
              country: '🇮🇱 Israel',
              system: 'Universal conscription (including women)',
              details: 'Nearly all citizens serve 2-3 years. Ultra-Orthodox exemptions are controversial. Elite and poor serve together.',
              outcome: 'Shared military service creates shared investment in avoiding unnecessary wars.'
            },
            {
              country: '🇰🇷 South Korea',
              system: 'Universal male conscription',
              details: 'All men serve ~18 months. K-pop stars, Samsung heirs, poor farmers — everyone serves. Very limited exemptions.',
              outcome: 'Military decisions have broad public buy-in because everyone has skin in the game.'
            },
            {
              country: '🇫🇮 Finland',
              system: 'Universal conscription or civil service',
              details: 'Men serve in military or do civil service. Women can volunteer. Shared obligation regardless of class.',
              outcome: 'High public trust in military because it represents all of society, not just the poor.'
            },
            {
              country: '🇩🇪 Germany',
              system: 'Abolished conscription (2011)',
              details: 'Now professional military with strict civilian control. No major foreign wars since WWII.',
              outcome: 'Professional military focused on defense, not global intervention.'
            },
            {
              country: '🇺🇸 United States',
              system: 'Poverty draft disguised as "volunteer"',
              details: 'Poor communities provide soldiers; wealthy communities provide nothing. Endless wars with no public cost.',
              outcome: 'Wars continue indefinitely because costs fall on powerless minority.'
            }
          ].map((country) => (
            <div key={country.country} className="bg-stone-100 rounded-lg p-5">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">{country.country}</h3>
              <div className="mb-3">
                <span className="font-semibold text-stone-700">System:</span>
                <p className="text-stone-600 text-sm">{country.system}</p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-stone-700">Details:</span>
                <p className="text-stone-600 text-sm">{country.details}</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <span className="font-semibold text-green-800">Outcome:</span>
                <p className="text-green-700 text-sm">{country.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Solution */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Solution: True Equality or No War</h2>
        <p className="text-stone-600 mb-4">
          There are only two morally defensible approaches to military service in a democracy:
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-green-800 mb-2">Option 1: Universal Service</h3>
            <p className="text-green-700 text-sm mb-3">
              True draft equality: no deferments for college, wealth, or connections. If America needs soldiers, 
              everyone&apos;s children are equally eligible. Rich and poor serve side by side.
            </p>
            <p className="text-green-600 text-sm">
              <strong>Result:</strong> Wars would become politically impossible because voters&apos; own children would be at risk.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-blue-800 mb-2">Option 2: Peace</h3>
            <p className="text-blue-700 text-sm mb-3">
              End the wars. Close the overseas bases. Focus the military on actual defense rather than global domination. 
              A smaller military eliminates the need for a poverty draft.
            </p>
            <p className="text-blue-600 text-sm">
              <strong>Result:</strong> <Link href="/analysis/cost-of-empire" className="text-blue-600 hover:text-blue-700">$1.3T annually</Link> could 
              be redirected to education, healthcare, and infrastructure — eliminating the poverty that drives military recruitment.
            </p>
          </div>
        </div>
        <p className="text-stone-600 mb-4">
          What&apos;s morally indefensible is the current system: a democracy where the poor fight wars for the rich, 
          where shared sacrifice is a lie, and where the people who start wars never bear their consequences.
        </p>
        <p className="text-stone-600 mb-4">
          <Link href="/analysis/war-profiteering" className="text-red-600 hover:text-red-700">The corporations that profit from war</Link> will 
          resist both options. A universal draft would make their wars politically impossible. Peace would eliminate their profits entirely. 
          They prefer the current system: endless wars fought by poor people for rich people&apos;s benefit.
        </p>
      </section>

      {/* Conclusion */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Fundamental Inequality</h2>
        <p className="text-stone-600 mb-4">
          Wars are declared by the privileged and fought by the poor. This has been true in every American 
          conflict since the Civil War, when wealthy men could pay $300 (a year&apos;s wages) to send a 
          substitute. The mechanism has changed — from bought substitutes to college deferments to the 
          poverty draft — but the outcome hasn&apos;t.
        </p>
        <p className="text-stone-600 mb-4">
          <Link href="/analysis/undeclared-wars" className="text-red-600 hover:text-red-700">Presidents can start wars</Link> without congressional 
          approval. <Link href="/analysis/what-could-we-buy" className="text-red-600 hover:text-red-700">The costs are enormous</Link> but 
          borne by future generations through debt. <Link href="/analysis/refugee-crisis" className="text-red-600 hover:text-red-700">The human suffering</Link> is 
          immense but falls on foreigners and the American poor.
        </p>
        <p className="text-stone-600 mb-4">
          Until the people who start wars bear the same risk as the people who fight them, this will not 
          change. A draft that applied equally — with no deferments for wealth, education, or connections — 
          would make war politically impossible. Which is exactly why it will never happen.
        </p>
        <p className="text-stone-600 font-semibold">
          The all-volunteer force isn&apos;t a triumph of freedom. It&apos;s a system that ensures the 
          costs of war fall on those with the least power to refuse — and the least power to stop it.
        </p>
        
        <div className="bg-stone-900 border border-stone-700 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">💡 The Bottom Line</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <p className="text-stone-300">
                  <strong className="text-white">Class warfare in uniform:</strong> 80% of Vietnam combatants were poor/working-class.
                  Today&apos;s military recruits overwhelmingly from families earning under $50K while the wealthy avoid service entirely.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="text-stone-300">
                  <strong className="text-white">Targeted exploitation:</strong> Pentagon spends $666M targeting poor schools with recruiters
                  while elite schools deny access. It&apos;s economic conscription disguised as "choice."
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👔</span>
              <div>
                <p className="text-stone-300">
                  <strong className="text-white">Chickenhawks rule:</strong> The biggest war advocates (Trump, Cheney, Bush) are draft dodgers
                  who love sending others to fight wars they avoided. &lt;1% of Congress had kids serving in Iraq/Afghanistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <div className="bg-stone-50 rounded-lg p-6 text-sm text-stone-600 space-y-2">
          <p>• <strong>Vietnam class composition:</strong> Appy, Christian. <em>Working-Class War: American Combat Soldiers and Vietnam</em></p>
          <p>• <strong>Project 100,000:</strong> Gregory, Hamilton. <em>McNamara&apos;s Folly</em>; DoD Project 100,000 data</p>
          <p>• <strong>Draft deferments:</strong> Selective Service System records; Congressional Research Service</p>
          <p>• <strong>Modern recruitment demographics:</strong> DoD Population Representation Reports; CNA Military Advisory Board</p>
          <p>• <strong>Geographic patterns:</strong> DoD accession data by ZIP code; Census Bureau population data</p>
          <p>• <strong>Racial disparities:</strong> DoD Demographics Reports; Congressional Black Caucus Foundation research</p>
          <p>• <strong>Contractor data:</strong> Congressional Budget Office; Commission on Wartime Contracting; SIGIR reports</p>
          <p>• <strong>Congress members&apos; children:</strong> Congressional Research Service; military records analysis</p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/war-profiteering" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">War Profiteering</h3>
            <p className="text-stone-500 text-sm">Who gets rich while the poor fight and die.</p>
          </Link>
          <Link href="/analysis/cost-of-empire" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Cost of Empire</h3>
            <p className="text-stone-500 text-sm">$1.3T/year maintaining global dominance.</p>
          </Link>
          <Link href="/analysis/undeclared-wars" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Undeclared Wars</h3>
            <p className="text-stone-500 text-sm">Presidents start wars without congressional approval.</p>
          </Link>
          <Link href="/analysis/aipac-war-machine" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">AIPAC & War Machine</h3>
            <p className="text-stone-500 text-sm">How lobbying drives America to war.</p>
          </Link>
          <Link href="/analysis/what-could-we-buy" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">What Could We Buy</h3>
            <p className="text-stone-500 text-sm">$11.6T on war vs. universal healthcare/education.</p>
          </Link>
          <Link href="/analysis/refugee-crisis" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Refugee Crisis</h3>
            <p className="text-stone-500 text-sm">38 million displaced by US wars.</p>
          </Link>
          <Link href="/analysis/war-and-civil-liberties" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">War &amp; Civil Liberties</h3>
            <p className="text-stone-500 text-sm">Every war shrinks freedom at home.</p>
          </Link>
          <Link href="/conflicts/" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Conflicts Database</h3>
            <p className="text-stone-500 text-sm">Every US war since 1775.</p>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
