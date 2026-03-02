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
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
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

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-6">
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
          Until the people who start wars bear the same risk as the people who fight them, this will not 
          change. A draft that applied equally — with no deferments for wealth, education, or connections — 
          would make war politically impossible. Which is exactly why it will never happen.
        </p>
        <p className="text-stone-600 font-semibold">
          The all-volunteer force isn&apos;t a triumph of freedom. It&apos;s a system that ensures the 
          costs of war fall on those with the least power to refuse — and the least power to stop it.
        </p>
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
          <Link href="/analysis/veterans-betrayed" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Veterans Betrayed</h3>
            <p className="text-stone-500 text-sm">17 suicides/day, 37,000 homeless — what happens after they serve.</p>
          </Link>
          <Link href="/analysis/private-armies" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Private Armies</h3>
            <p className="text-stone-500 text-sm">Blackwater, contractors, and the privatization of war.</p>
          </Link>
          <Link href="/analysis/military-families" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Military Families</h3>
            <p className="text-stone-500 text-sm">The hidden cost of war on families left behind.</p>
          </Link>
          <Link href="/analysis/war-and-civil-liberties" className="bg-white rounded-lg border p-5 hover:shadow-md transition">
            <h3 className="font-bold mb-1">War &amp; Civil Liberties</h3>
            <p className="text-stone-500 text-sm">Every war shrinks freedom at home.</p>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
