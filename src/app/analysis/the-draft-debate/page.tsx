import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'The Draft Debate: Conscription, the All-Volunteer Force, and Who Really Fights America\'s Wars',
  description: 'From Civil War conscription riots to Vietnam draft inequality to today\'s all-volunteer force, the question of who fights has always been a question of who has power and who doesn\'t.',
  openGraph: {
    title: 'The Draft Debate: Who Fights America\'s Wars?',
    description: 'Vietnam deferments for the wealthy. An all-volunteer force drawn from the poorest counties. The draft question reveals who America values.',
    url: 'https://www.warcosts.org/analysis/the-draft-debate',
    type: 'article',
  },
}

const keyStats = [
  { stat: '0.4%', label: 'Share of the US population that has served in the post-9/11 wars', source: 'Pew Research Center' },
  { stat: '80%', label: 'Of military recruits come from families with a history of military service', source: 'DoD demographics report' },
  { stat: '2/3', label: 'Of Vietnam draftees came from low-income or working-class families', source: 'Christian Appy, Working-Class War' },
  { stat: '$15,000', label: 'Median household income difference between recruits\' ZIP codes and national median', source: 'CNA Military Advisory Board' },
  { stat: '1973', label: 'Year the draft ended and the All-Volunteer Force began', source: 'Gates Commission' },
  { stat: '16M', label: 'Men registered with Selective Service as of 2024 — draft infrastructure remains', source: 'Selective Service System' },
]

const draftHistory = [
  { era: 'Revolutionary War (1775–1783)', system: 'State militias with mandatory service', details: 'Each colony required able-bodied men to serve in local militias. Service was mandatory but unevenly enforced. Wealthy men hired substitutes or paid fines. Washington complained constantly about militia unreliability.', inequality: 'Wealthy could hire substitutes. Poor served or faced punishment. Enslaved people excluded but sometimes served for broken promises of freedom.' },
  { era: 'Civil War (1861–1865)', system: 'First federal draft — Enrollment Act of 1863', details: 'Union enacted first federal conscription. All men 20–45 eligible. You could hire a substitute for $300 (a year\'s income for a laborer). Confederacy had the "Twenty Negro Law" exempting slaveholders.', inequality: '"Rich man\'s war, poor man\'s fight." NYC Draft Riots (July 1863) killed 120+ people — deadliest civil disturbance in US history.' },
  { era: 'World War I (1917–1918)', system: 'Selective Service Act of 1917', details: '24 million registered, 2.8 million drafted. No substitutes. Local draft boards had wide discretion. 337,000 classified as "draft evaders."', inequality: 'Draft boards were all-white, all-male. Black soldiers drafted disproportionately but segregated into labor units. Conscientious objectors jailed.' },
  { era: 'World War II (1941–1945)', system: 'Selective Training and Service Act of 1940', details: '50 million registered, 10 million drafted. Broad compliance after Pearl Harbor. Celebrity enlistments reinforced shared sacrifice.', inequality: 'Closest to equitable, but agricultural deferments favored some. Black soldiers in segregated units. Japanese Americans interned while sons fought in Europe.' },
  { era: 'Korean War (1950–1953)', system: 'Universal Military Training and Service Act of 1951', details: '1.5 million drafted. College deferments expanded. Truman desegregated military by executive order (1948).', inequality: 'College deferments began skewing drafted population toward working class. Elite university students largely exempt.' },
  { era: 'Vietnam War (1965–1975)', system: 'Selective Service — most contested draft in US history', details: '2.2 million drafted out of 27 million eligible. Lottery introduced 1969. 570,000 classified as "draft offenders." 8,750 convicted.', inequality: 'Defining example of draft inequality. College deferments, medical exemptions, National Guard slots, bone spurs — all available to the wealthy.' },
  { era: 'All-Volunteer Force (1973–present)', system: 'Gates Commission — end the draft', details: 'Nixon ended draft in 1973 to defuse anti-war movement. Military shrank from 3.5M (1968) to 1.3M (2024). Selective Service registration continues.', inequality: 'Eliminated overt deferment inequality but military became institution of the working class. Wealthy stopped serving entirely.' },
]

const vietnamInequality = [
  { category: 'Harvard Class of 1970', served: '~2%', detail: 'Fewer than 25 out of ~1,200 graduates served in Vietnam. Future senators, CEOs, and media figures — almost none served.' },
  { category: 'Working-class towns', served: '25–35%', detail: 'In towns like South Boston, 25+ of every 100 eligible men served. In some Appalachian counties, the rate exceeded 35%.' },
  { category: 'African Americans', served: '11% of population, 16% of draftees', detail: 'Black men were drafted at significantly higher rates and assigned to combat units disproportionately. 12.5% of Vietnam deaths were Black soldiers — vs. 11% of population.' },
  { category: 'College students', served: 'Effectively 0% while enrolled', detail: 'The II-S deferment allowed continuous enrollment to avoid the draft. Graduate school deferments were added. Staying in school meant staying alive.' },
  { category: 'National Guard / Reserves', served: 'Minimal combat deployment', detail: 'Guard/Reserve slots were a well-known way to avoid Vietnam. Waiting lists were long and connected families got priority. George W. Bush served in the Texas Air National Guard.' },
  { category: 'Medical exemptions', served: 'Varied wildly by income', detail: 'Wealthy families\' private doctors provided exemptions for conditions that military doctors would have cleared. Donald Trump received a bone spur diagnosis. Bill Clinton got a Rhodes Scholarship deferment.' },
  { category: 'Total deferments/exemptions', served: '15.4 million', detail: 'Out of 27 million draft-eligible men, 15.4 million received deferments or exemptions. Only 2.2 million were actually drafted. The system was designed to have escape hatches.' },
]

const famousDraftDodgers = [
  { name: 'Donald Trump', method: 'Medical deferment — bone spurs (diagnosed by podiatrist who was tenant of Trump\'s father)', war: 'Vietnam', laterRole: '45th President. Sent troops to Syria, Iraq, Afghanistan, Somalia.' },
  { name: 'Dick Cheney', method: 'Five deferments — student (4) and married with child (1). Said he had "other priorities."', war: 'Vietnam', laterRole: 'VP. Principal architect of Iraq War that killed 4,431 Americans.' },
  { name: 'George W. Bush', method: 'Texas Air National Guard — secured slot through family connections. Spotty attendance record.', war: 'Vietnam', laterRole: '43rd President. Started two wars. 7,000+ Americans killed.' },
  { name: 'Bill Clinton', method: 'Rhodes Scholarship, ROTC deferment, then high lottery number', war: 'Vietnam', laterRole: '42nd President. Bombed Yugoslavia, Iraq, Sudan, Afghanistan.' },
  { name: 'Joe Biden', method: 'Five student deferments, then medical (asthma) — though he was a football player and lifeguard', war: 'Vietnam', laterRole: '46th President. Oversaw Afghanistan withdrawal.' },
  { name: 'Mitt Romney', method: 'Mormon missionary deferment (France), then student deferments, then high lottery number', war: 'Vietnam', laterRole: 'Senator, presidential candidate. Supported Iraq War.' },
  { name: 'Rush Limbaugh', method: 'Medical deferment — pilonidal cyst', war: 'Vietnam', laterRole: 'Loudest pro-war voice in media for 30 years. Never served a day.' },
  { name: 'Ted Nugent', method: 'Claims he stopped bathing and defecated in his pants at the physical to get a 4-F classification', war: 'Vietnam', laterRole: 'Vocal pro-military activist. Called draft dodgers "cowards."' },
  { name: 'John Bolton', method: 'Enlisted in National Guard to avoid Vietnam. Later said he "had no desire to die in a Southeast Asian rice paddy."', war: 'Vietnam', laterRole: 'National Security Advisor. Advocated for wars with Iraq, Iran, North Korea, Libya.' },
]

const allVolunteerDemographics = [
  { metric: 'Household income of recruits', military: 'Median ~$45,000 (recruit ZIP code)', national: 'Median ~$60,000', gap: 'Military recruits come from households earning 25% less than the national median.' },
  { metric: 'Rural vs. urban', military: '44% from rural areas', national: '14% live in rural areas', gap: 'Rural Americans serve at 3x their population share. Some counties have sent 10x the national per-capita rate.' },
  { metric: 'Southern states', military: '44% of recruits', national: '38% of population', gap: 'The South is overrepresented. States like Georgia, Texas, and North Carolina provide disproportionate numbers.' },
  { metric: 'African Americans', military: '17% of enlisted', national: '13.4% of population', gap: 'Black Americans overrepresented in enlisted ranks, underrepresented in officer corps.' },
  { metric: 'Hispanic Americans', military: '17% of enlisted', national: '18.7% of population', gap: 'Roughly proportional overall but overrepresented in combat roles.' },
  { metric: 'Members of Congress with military service', military: '17% (2024)', national: '6.4% of adult population are veterans', gap: 'Congressional military service was 75% in 1970. Now 17%. Those who send others to war increasingly haven\'t served.' },
  { metric: 'Ivy League ROTC enrollment', military: '~100 total across 8 schools', national: 'N/A', gap: 'Elite universities produce almost no military officers. Some Ivy campuses had no ROTC for decades (returned post-9/11).' },
  { metric: 'Military families', military: '80% of recruits have a parent or sibling who served', national: '7% of adults are veterans', gap: 'Military service is becoming hereditary — a warrior caste that the rest of America barely knows exists.' },
]

const recruitingReality = [
  { tactic: 'Targeting low-income schools', detail: 'Military recruiters are assigned quotas and concentrate on schools in poor neighborhoods. The No Child Left Behind Act (2001) required schools to give recruiters access to student contact information or lose federal funding.', impact: 'Students in wealthy suburbs rarely see recruiters. Students in poor neighborhoods are recruited aggressively starting at age 16.' },
  { tactic: 'Economic incentives', detail: 'Enlistment bonuses up to $50,000. GI Bill (college funding). Housing allowance. Healthcare. In communities with no jobs and no college prospects, the military is the only employer offering benefits.', impact: 'The "volunteer" military is volunteer in name. For many recruits, the choice is enlist or stay in poverty. This is a draft by economic coercion.' },
  { tactic: 'Esports and gaming', detail: 'The Army spent $5M+ on esports teams and Twitch streaming. Recruiters embedded in gaming communities targeting teenagers. FTC complaints filed for deceptive practices.', impact: 'Targeting children through entertainment to normalize military service and build a recruitment pipeline.' },
  { tactic: 'JROTC programs', detail: '3,400+ JROTC programs in US high schools, heavily concentrated in schools serving low-income and minority students. 500,000+ students enrolled. 40–50% later enlist.', impact: 'JROTC is effectively a military recruitment program disguised as a school activity. It\'s in poor schools, not prep schools.' },
  { tactic: 'Medical and education waivers', detail: 'When recruiting numbers fall, the military lowers standards. During the Iraq surge (2006-2007), the Army doubled the number of "moral waivers" for felony convictions. Education requirements were relaxed.', impact: 'When not enough volunteers exist, standards drop. The people who suffer are the recruits themselves and the civilians in war zones.' },
  { tactic: 'Delayed Entry Program', detail: 'Recruits can sign up at 17 (with parental consent) and ship to basic training after graduation. Contracts are binding. Recruits who try to back out are told (often falsely) that they will face legal consequences.', impact: '17-year-olds signing binding military contracts before they can vote, drink, or rent a car.' },
]

const draftArguments = {
  forDraft: [
    { argument: 'Shared sacrifice prevents forever wars', detail: 'If every family faced the possibility of their children being drafted, wars would be shorter, rarer, and better justified. The Vietnam draft generated the anti-war movement that ended the war. The all-volunteer force enabled 20-year wars with no public pressure to stop.' },
    { argument: 'Democratic accountability', detail: 'When 0.4% of the population fights, the other 99.6% can ignore the wars entirely. A draft makes war a national concern, not a problem for "other people\'s kids."' },
    { argument: 'Class equity', detail: 'The current system is a poverty draft. Bringing back conscription — without deferments — would force wealthy families to have skin in the game for the first time since 1973.' },
    { argument: 'Civil-military gap', detail: 'The gap between military and civilian America is wider than at any point in modern history. Most Americans don\'t know anyone in the military. A draft would rebuild the connection between the military and the society it serves.' },
    { argument: 'Historical precedent', detail: 'Most democracies have had some form of national service. Israel, South Korea, Switzerland, and many others maintain conscription. The all-volunteer force is historically unusual.' },
  ],
  againstDraft: [
    { argument: 'Forced labor is immoral', detail: 'Conscription is involuntary servitude. The 13th Amendment prohibits it except as punishment for crime. Forcing people to kill or be killed against their will is a fundamental violation of individual liberty.' },
    { argument: 'Professional military is more effective', detail: 'Volunteers fight better than conscripts. Training retention is higher. Unit cohesion is stronger. Every military study shows that professional forces outperform drafted ones.' },
    { argument: 'The draft was never equal', detail: 'Every draft in US history has been riddled with class-based exemptions. The wealthy always find a way out. Reinstating the draft would just create new loopholes for the connected.' },
    { argument: 'The real problem is foreign policy', detail: 'The solution to unnecessary wars is not to conscript more people into them — it\'s to stop fighting them. A draft treats the symptom (too few soldiers) instead of the disease (too many wars).' },
    { argument: 'Government power', detail: 'Giving the government the power to compel military service is one of the most dangerous expansions of state authority imaginable. The draft is the ultimate expression of the state\'s claim to own its citizens\' bodies.' },
  ],
}

const congressionalService = [
  { congress: '91st (1969–1971)', veterans: '73%', context: 'Vietnam era. Most members had served in WWII or Korea. They knew war firsthand.' },
  { congress: '97th (1981–1983)', veterans: '64%', context: 'Reagan era. Still heavily populated by WWII and Korea vets.' },
  { congress: '107th (2001–2003)', veterans: '31%', context: 'Authorized War on Terror. Less than a third had military experience.' },
  { congress: '112th (2011–2013)', veterans: '24%', context: 'Wars in full swing. Congressional military experience at historic low.' },
  { congress: '118th (2023–2025)', veterans: '17%', context: 'All-time low. 83% of members voting on war have never worn a uniform.' },
]

const selectiveServiceToday = [
  { fact: 'Registration is still mandatory', detail: 'All male US citizens and immigrants must register with Selective Service within 30 days of their 18th birthday. Failure to register is a felony punishable by up to 5 years in prison and $250,000 fine.' },
  { fact: 'Women are still exempt', detail: 'Despite women serving in all combat roles since 2015, the Supreme Court has not required women to register. Multiple bills to include women have failed in Congress.' },
  { fact: 'Enforcement is through benefits denial', detail: 'Non-registrants are barred from federal student aid, federal employment, and citizenship (for immigrants). In practice, no one has been prosecuted for failure to register since 1986.' },
  { fact: 'The infrastructure is maintained', detail: 'Selective Service maintains the ability to implement a draft within 193 days of congressional authorization. Local draft boards can be activated. The lottery system is ready.' },
  { fact: 'Annual budget: $26 million', detail: 'Taxpayers spend $26 million per year maintaining a draft system that hasn\'t been used in 50 years. The agency has 124 full-time employees and 11,000 volunteer board members.' },
  { fact: 'Abolition efforts have failed', detail: 'Multiple attempts to abolish Selective Service have died in committee. Both parties maintain it as "insurance." The National Commission on Military, National, and Public Service (2020) recommended keeping it.' },
]

const whoFightsMap = [
  { state: 'Georgia', enlistmentRate: '1.6x national average', medianIncome: '$65,000', notes: 'Fort Moore (Benning), multiple bases. Military culture deeply embedded.' },
  { state: 'South Carolina', enlistmentRate: '1.5x national average', medianIncome: '$59,000', notes: 'Parris Island, Joint Base Charleston. One of the poorest states with highest service rates.' },
  { state: 'Alaska', enlistmentRate: '1.7x national average', medianIncome: '$77,000', notes: 'Joint Base Elmendorf-Richardson. Frontier culture, limited job market.' },
  { state: 'Maine', enlistmentRate: '1.4x national average', medianIncome: '$61,000', notes: 'Bath Iron Works (naval shipbuilding). Rural poverty drives recruitment.' },
  { state: 'Massachusetts', enlistmentRate: '0.5x national average', medianIncome: '$89,000', notes: 'Highest income, lowest enlistment. Wealth provides alternatives to military service.' },
  { state: 'Connecticut', enlistmentRate: '0.5x national average', medianIncome: '$83,000', notes: 'Defense contractors employ residents — building weapons, not carrying them.' },
  { state: 'New Jersey', enlistmentRate: '0.6x national average', medianIncome: '$87,000', notes: 'Suburban, wealthy, education-focused. Military is rarely the first career option.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Draft Debate: Conscription, the All-Volunteer Force, and Who Really Fights America\'s Wars',
  description: 'From Civil War riots to Vietnam inequality to today\'s poverty draft, the question of who fights America\'s wars has always been a question of class, race, and power.',
  author: { '@type': 'Organization', name: 'WarCosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
  datePublished: '2025-03-15',
  url: 'https://www.warcosts.org/analysis/the-draft-debate',
}

export default function TheDraftDebate() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Analysis', href: '/analysis' },
        { label: 'The Draft Debate' },
      ]} />

      {/* Dark Hero Section */}
      <section className="bg-stone-900 text-white rounded-lg p-8 mb-8 -mx-4 md:mx-0">
        <div className="max-w-3xl">
          <span className="text-red-400 text-sm font-bold uppercase tracking-wider">Analysis</span>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-2 mb-4">
            The Draft Debate
          </h1>
          <p className="text-stone-300 text-xl mb-6">
            Only 0.4% of Americans have served in the post-9/11 wars. They come disproportionately from 
            poor, rural, Southern communities. Eighty percent come from military families. The other 99.6% 
            of America watches war on television, if they watch at all.
          </p>
          <p className="text-stone-400 text-base">
            The draft ended in 1973. What replaced it was not an all-volunteer force — it was a poverty 
            draft, a hereditary warrior class, and a civil-military gap so wide that most Americans don&apos;t 
            know anyone in uniform. This is the story of who fights, who doesn&apos;t, and what that means 
            for democracy.
          </p>
        </div>
      </section>

      <ShareButtons title="The Draft Debate: Who Really Fights America's Wars?" />

      {/* Key Statistics */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          By the Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyStats.map((item) => (
            <div key={item.label} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="text-3xl font-bold text-red-600 mb-1">{item.stat}</div>
              <p className="text-stone-700 text-sm mb-1">{item.label}</p>
              <p className="text-stone-400 text-xs">{item.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History of the Draft */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          A History of Conscription in America
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The story of the draft is the story of American inequality in miniature. In every era, the same 
          pattern repeats: the government calls for soldiers, and the wealthy find a way out. The mechanism 
          changes — substitutes, deferments, bone spurs — but the result is always the same: poor men fight, 
          rich men watch.
        </p>

        <div className="space-y-4">
          {draftHistory.map((item) => (
            <div key={item.era} className="bg-white border border-stone-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-bold text-stone-900">{item.era}</h3>
                <span className="text-red-600 text-sm font-semibold">{item.system}</span>
              </div>
              <p className="text-stone-700 text-sm mb-2">{item.details}</p>
              <p className="text-red-700 text-sm font-medium"><span className="font-bold">Inequality:</span> {item.inequality}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vietnam Inequality Deep Dive */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Vietnam: The Draft That Broke America
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The Vietnam draft was the most unequal in American history — and the most consequential. It 
          destroyed public trust in the military, fueled the anti-war movement, ended a presidency, and 
          ultimately led to the abolition of conscription. The inequality was not a bug; it was a feature 
          designed to protect the children of the powerful.
        </p>

        <div className="space-y-3">
          {vietnamInequality.map((item) => (
            <div key={item.category} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-semibold text-stone-900">{item.category}</h3>
                <span className="text-red-600 font-bold">{item.served}</span>
              </div>
              <p className="text-stone-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Famous Draft Avoiders */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Chickenhawks: Draft Avoiders Who Became War Hawks
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Some of America&apos;s most vocal advocates for military intervention avoided service when it was 
          their turn. The pattern is striking: the people most eager to send others to war are often the 
          ones who made sure they never had to go themselves.
        </p>

        <div className="space-y-3">
          {famousDraftDodgers.map((person) => (
            <div key={person.name} className="bg-white border border-stone-200 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 mb-1">{person.name}</h3>
              <p className="text-stone-700 text-sm mb-1"><span className="text-stone-500">How avoided:</span> {person.method}</p>
              <p className="text-red-700 text-sm"><span className="text-stone-500">Later:</span> {person.laterRole}</p>
            </div>
          ))}
        </div>
      </section>

      {/* All-Volunteer Force Demographics */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The &ldquo;Volunteer&rdquo; Force: Who Actually Serves
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The All-Volunteer Force was supposed to create a professional military free from the inequities of 
          the draft. Instead, it created a military drawn almost exclusively from the working class and 
          military families — a self-perpetuating warrior caste that the rest of America barely knows exists.
        </p>

        <div className="space-y-3">
          {allVolunteerDemographics.map((item) => (
            <div key={item.metric} className="bg-white border border-stone-200 rounded-lg p-4">
              <h3 className="font-semibold text-stone-900 mb-2">{item.metric}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-2">
                <div><span className="text-stone-500">Military:</span> <span className="text-stone-700">{item.military}</span></div>
                <div><span className="text-stone-500">National:</span> <span className="text-stone-700">{item.national}</span></div>
              </div>
              <p className="text-red-700 text-sm">{item.gap}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recruiting Reality */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Poverty Draft: How America Recruits Its Military
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The term &ldquo;all-volunteer force&rdquo; implies free choice. But when the military is the 
          only employer offering healthcare, education, and a living wage in your community, the 
          &ldquo;choice&rdquo; to enlist is not really a choice at all. This is the poverty draft — 
          conscription by economic coercion.
        </p>

        <div className="space-y-4">
          {recruitingReality.map((item) => (
            <div key={item.tactic} className="bg-white border border-stone-200 rounded-lg p-5">
              <h3 className="font-bold text-stone-900 mb-2">{item.tactic}</h3>
              <p className="text-stone-700 text-sm mb-2">{item.detail}</p>
              <p className="text-red-700 text-sm font-medium">{item.impact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who in Congress Has Served */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Congress: Sending Others to War
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          In 1971, 73% of Congress had served in the military. They knew what war meant. Today, 83% of 
          Congress has never worn a uniform. The people voting to send Americans to war are overwhelmingly 
          people who have never experienced it themselves.
        </p>

        <div className="space-y-2">
          {congressionalService.map((item) => (
            <div key={item.congress} className="flex items-center gap-4 bg-white border border-stone-200 rounded-lg p-3">
              <span className="text-stone-900 font-bold text-sm w-40">{item.congress}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="bg-red-600 rounded h-4" style={{ width: `${parseInt(item.veterans)}%` }} />
                  <span className="text-red-600 font-bold text-sm">{item.veterans} veterans</span>
                </div>
              </div>
              <p className="text-stone-500 text-xs hidden md:block w-64">{item.context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Geographic Disparity */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Geography of Sacrifice
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Military service is not evenly distributed across America. It is concentrated in the South, 
          in rural areas, and in communities with lower household incomes. The states that send the most 
          people to war are not the states that benefit most from the defense industry.
        </p>

        <div className="space-y-3">
          {whoFightsMap.map((item) => (
            <div key={item.state} className="bg-white border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-bold text-stone-900">{item.state}</h3>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-red-600 font-bold">{item.enlistmentRate}</span>
                  <span className="text-stone-400">|</span>
                  <span className="text-stone-500">Median income: {item.medianIncome}</span>
                </div>
              </div>
              <p className="text-stone-600 text-sm">{item.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selective Service Today */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Selective Service: The Draft That Never Died
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The draft ended in 1973, but Selective Service registration never did. Every male American must 
          register at 18 or face felony charges. The infrastructure to reinstate the draft exists, is 
          maintained, and is funded by taxpayers every year. The government insists it&apos;s &ldquo;just 
          in case.&rdquo;
        </p>

        <div className="space-y-3">
          {selectiveServiceToday.map((item) => (
            <div key={item.fact} className="bg-white border border-stone-200 rounded-lg p-4">
              <h3 className="font-semibold text-stone-900 mb-1">{item.fact}</h3>
              <p className="text-stone-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Debate */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Should America Bring Back the Draft?
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The draft debate is not really about military manpower. It is about democratic accountability: 
          whether a democracy can sustain wars that only 0.4% of its population fights, and whether the 
          absence of shared sacrifice enables forever wars.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-stone-900 text-lg mb-3 text-center">Arguments For the Draft</h3>
            <div className="space-y-3">
              {draftArguments.forDraft.map((item) => (
                <div key={item.argument} className="bg-white border border-stone-200 rounded-lg p-4">
                  <h4 className="font-semibold text-stone-900 mb-1 text-sm">{item.argument}</h4>
                  <p className="text-stone-600 text-xs">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-lg mb-3 text-center">Arguments Against the Draft</h3>
            <div className="space-y-3">
              {draftArguments.againstDraft.map((item) => (
                <div key={item.argument} className="bg-white border border-stone-200 rounded-lg p-4">
                  <h4 className="font-semibold text-stone-900 mb-1 text-sm">{item.argument}</h4>
                  <p className="text-stone-600 text-xs">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Libertarian Case */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">
            The Libertarian Paradox
          </h2>
          <p className="text-stone-300 mb-4">
            Libertarians face a genuine dilemma on the draft. On one hand, conscription is forced labor — 
            the most extreme form of government coercion short of execution. The state compelling citizens 
            to kill and die violates every principle of individual liberty. On this ground, the draft is 
            indefensible.
          </p>
          <p className="text-stone-300 mb-4">
            On the other hand, the all-volunteer force has enabled precisely the kind of unlimited executive 
            war-making that libertarians most fear. Without a draft, wars carry no political cost. Without 
            political cost, there is no check on the war power. The result is 20-year wars, $8 trillion in 
            debt, and an imperial presidency that wages war without congressional approval or public consent.
          </p>
          <p className="text-stone-300 mb-4">
            The resolution is not to reinstate the draft — it is to actually enforce the Constitution. 
            Article I gives Congress alone the power to declare war. If that provision were enforced, the 
            question of who fights would be answered by democratic deliberation, not by economic desperation.
          </p>
          <p className="text-stone-300">
            The real draft debate is not about conscription. It is about whether America is a republic where 
            war requires the consent of the governed, or an empire where war is waged by a professional 
            warrior class on behalf of a population that neither fights nor pays nor cares. The Founders 
            feared standing armies for exactly this reason. They were right.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>Christian G. Appy, <em>Working-Class War: American Combat Soldiers and Vietnam</em> (University of North Carolina Press, 1993)</li>
          <li>Beth Bailey, <em>America&apos;s Army: Making the All-Volunteer Force</em> (Harvard University Press, 2009)</li>
          <li>Selective Service System, Annual Report to Congress (2023)</li>
          <li>Pew Research Center, &ldquo;The Military-Civilian Gap: War and Sacrifice in the Post-9/11 Era&rdquo; (2011)</li>
          <li>Congressional Research Service, &ldquo;American War and Military Operations Casualties&rdquo;</li>
          <li>DoD Demographics Report, Population Representation in the Military Services (2022)</li>
          <li>National Commission on Military, National, and Public Service, Final Report (2020)</li>
          <li>Andrew Bacevich, <em>Breach of Trust: How Americans Failed Their Soldiers and Their Country</em> (Metropolitan Books, 2013)</li>
          <li>James Fallows, &ldquo;The Tragedy of the American Military&rdquo; (<em>The Atlantic</em>, 2015)</li>
          <li>CNA Military Advisory Board, Population Representation in the Military Services</li>
          <li>Gates Commission (President&apos;s Commission on an All-Volunteer Armed Force), Report (1970)</li>
          <li>Lawrence Baskir &amp; William Strauss, <em>Chance and Circumstance: The Draft, the War, and the Vietnam Generation</em> (Knopf, 1978)</li>
        </ul>
      </section>

      <RelatedArticles articles={[
        { slug: 'draft-and-inequality', title: 'The Draft and Inequality', desc: 'Who served, who didn\'t, and who decided.' },
        { slug: 'who-fights', title: 'Who Fights America\'s Wars?', desc: '0.4% of Americans. Mostly poor. Mostly rural.' },
        { slug: 'military-families', title: 'Military Families', desc: 'The hidden cost borne by those who serve and those who wait.' },
        { slug: 'congressional-authority', title: 'Congressional War Authority', desc: 'Congress hasn\'t declared war since 1942.' },
      ]} />

      <BackToTop />
    </div>
  )
}
