import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'
import { YearlySpending, TroopLevels } from "./charts"

export const metadata: Metadata = {
  title: 'Vietnam War Cost — $1 Trillion, 58,220 US Dead, 2-3 Million Vietnamese | WarCosts',
  description: 'The Vietnam War (1955-1975) cost over $1 trillion in today\'s dollars, killed 58,220 Americans and 2-3 million Vietnamese. Draft resistance, Pentagon Papers, My Lai massacre, Agent Orange. The war that shattered American trust in government.',
  keywords: ['Vietnam war cost', 'Vietnam war casualties', 'Vietnam war deaths', 'Vietnam war timeline', 'Pentagon Papers', 'My Lai massacre', 'Agent Orange', 'Vietnam draft', 'cost of Vietnam war'],
  openGraph: {
    title: 'The Vietnam War — $1T, 58K Dead, Lessons Never Learned',
    description: 'The war that destroyed a generation, exposed government lies, and taught lessons America refused to learn.',
    url: 'https://warcosts.org/vietnam-war',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Total Cost (2024$)', value: '$1 Trillion+' },
  { label: 'US Military Deaths', value: '58,220' },
  { label: 'US Wounded', value: '153,303' },
  { label: 'Vietnamese Dead', value: '2-3 Million' },
  { label: 'Americans Drafted', value: '2.2 Million' },
  { label: 'Outcome', value: 'US Withdrawal' },
]

const costBreakdown = [
  { category: 'Direct Military Spending', amount: 843, desc: 'Congressional appropriations 1955-1975, adjusted to 2024 dollars' },
  { category: 'Veterans Benefits (through 2023)', amount: 100, desc: 'Disability, pensions, healthcare for Vietnam-era veterans' },
  { category: 'Agent Orange Healthcare', amount: 25, desc: 'VA treatment for veterans exposed to herbicides; claims still rising' },
  { category: 'Interest on War Debt', amount: 50, desc: 'Vietnam was partially funded by deficit spending and inflation' },
]

const yearlySpending = [
  { year: 1960, amount: 5 },
  { year: 1962, amount: 10 },
  { year: 1964, amount: 15 },
  { year: 1965, amount: 30 },
  { year: 1966, amount: 70 },
  { year: 1967, amount: 100 },
  { year: 1968, amount: 120 },
  { year: 1969, amount: 110 },
  { year: 1970, amount: 85 },
  { year: 1971, amount: 60 },
  { year: 1972, amount: 45 },
  { year: 1973, amount: 20 },
  { year: 1974, amount: 8 },
  { year: 1975, amount: 3 },
]

const troopLevels = [
  { year: 1960, troops: 900 },
  { year: 1961, troops: 3200 },
  { year: 1962, troops: 11300 },
  { year: 1963, troops: 16300 },
  { year: 1964, troops: 23300 },
  { year: 1965, troops: 184300 },
  { year: 1966, troops: 385300 },
  { year: 1967, troops: 485600 },
  { year: 1968, troops: 536100 },
  { year: 1969, troops: 475200 },
  { year: 1970, troops: 334600 },
  { year: 1971, troops: 156800 },
  { year: 1972, troops: 24200 },
  { year: 1973, troops: 50 },
]

const timeline = [
  { year: '1955-60', title: 'Advisors', desc: 'After the French defeat at Dien Bien Phu (1954), the US backs South Vietnam\'s Ngo Dinh Diem. Sends military "advisors." CIA operations begin. The domino theory drives policy — if Vietnam falls to communism, all of Southeast Asia follows.' },
  { year: '1961-63', title: 'Escalation Under Kennedy', desc: 'JFK increases advisors from 900 to 16,000. Green Berets, helicopter units, and CIA paramilitary. Diem regime is brutal and corrupt. Buddhist monks self-immolate in protest. CIA backs a coup; Diem is assassinated Nov 1963. Three weeks later, Kennedy is assassinated.' },
  { year: '1964', title: 'Gulf of Tonkin', desc: 'Alleged North Vietnamese attack on USS Maddox in the Gulf of Tonkin. Congress passes the Gulf of Tonkin Resolution, giving LBJ unlimited authority to wage war. Later evidence shows the second attack likely never happened. The resolution passes the Senate 88-2.' },
  { year: '1965-66', title: 'Ground War Begins', desc: 'First combat Marines land at Da Nang in March 1965. Rolling Thunder bombing campaign begins. Troop levels surge from 23,000 to 385,000 in 18 months. The draft machinery accelerates. Search-and-destroy missions. Body counts become the metric of "progress."' },
  { year: '1967', title: 'Quagmire', desc: '485,000 US troops in Vietnam. Anti-war movement grows. March on the Pentagon. Muhammad Ali refuses the draft. Martin Luther King Jr. denounces the war at Riverside Church. General Westmoreland tells Congress the US is winning. He requests 200,000 more troops.' },
  { year: 'Jan 1968', title: 'Tet Offensive', desc: 'On the Vietnamese New Year, North Vietnam and the Viet Cong launch coordinated attacks across South Vietnam — hitting the US Embassy in Saigon. Military result: inconclusive. Psychological impact: devastating. Walter Cronkite declares the war a "stalemate." LBJ announces he won\'t seek re-election.' },
  { year: '1968', title: 'My Lai Massacre', desc: 'On March 16, US soldiers from Charlie Company murder between 347 and 504 unarmed Vietnamese civilians — mostly women, children, and elderly — at My Lai. The Army covers it up for over a year. Only Lt. William Calley is convicted; he serves 3.5 years of house arrest.' },
  { year: '1969-70', title: 'Nixon\'s "Peace with Honor"', desc: 'Nixon promises withdrawal while secretly expanding the war into Cambodia and Laos. Kent State shooting (May 1970): Ohio National Guard kills 4 student protesters. The Pentagon Papers leak begins.' },
  { year: '1971', title: 'Pentagon Papers', desc: 'Daniel Ellsberg leaks the Pentagon Papers to The New York Times — classified study showing the government systematically lied about the war for decades. Four administrations knew the war was unwinnable and escalated anyway. Nixon tries to suppress publication; Supreme Court rules for the press.' },
  { year: '1972-73', title: 'Christmas Bombing & Paris Accords', desc: 'Nixon orders massive bombing of Hanoi and Haiphong (Christmas Bombing, Dec 1972) to force negotiations. Paris Peace Accords signed January 1973. Last US troops leave March 1973. POWs return. The war continues between North and South.' },
  { year: 'Apr 1975', title: 'Fall of Saigon', desc: 'North Vietnamese forces capture Saigon on April 30. Iconic images of helicopters evacuating the US Embassy. South Vietnam surrenders unconditionally. Vietnam is reunified under communist rule. Everything the US fought to prevent happens anyway.' },
]

const agentOrange = {
  gallons: '20 million',
  acreage: '4.5 million acres',
  affected: '4.8 million Vietnamese exposed',
  usVets: '2.6 million US veterans exposed',
  effects: 'Cancer, birth defects, neurological damage, diabetes, Parkinson\'s disease',
  generations: 'Birth defects persist in third and fourth generation Vietnamese children',
  accountability: 'Dow Chemical and Monsanto paid zero compensation to Vietnamese victims',
}

const draftStats = [
  { stat: '2.2 million', desc: 'Americans drafted for Vietnam' },
  { stat: '570,000', desc: 'Draft dodgers (estimated)' },
  { stat: '125,000', desc: 'Americans who fled to Canada' },
  { stat: '210,000', desc: 'Accused of draft offenses' },
  { stat: '8,750', desc: 'Convicted of draft violations' },
  { stat: '30%', desc: 'Of combat deaths were draftees' },
]

const faqs = [
  {
    q: 'How much did the Vietnam War cost?',
    a: 'The Vietnam War cost approximately $843 billion in direct military spending (2024 dollars). Including veteran benefits, Agent Orange-related healthcare, and interest on war debt, the total exceeds $1 trillion. At its peak in 1968, the war consumed over 9% of GDP.',
  },
  {
    q: 'How many people died in the Vietnam War?',
    a: '58,220 US military personnel were killed and 153,303 were wounded. Vietnamese casualties were catastrophic: an estimated 2-3 million Vietnamese died, including 1.1 million North Vietnamese/Viet Cong soldiers, 250,000+ South Vietnamese soldiers, and 2+ million civilians. Neighboring Laos and Cambodia suffered hundreds of thousands of additional deaths.',
  },
  {
    q: 'What were the Pentagon Papers?',
    a: 'The Pentagon Papers were a classified Department of Defense study of US political-military involvement in Vietnam from 1945 to 1967. Leaked by Daniel Ellsberg in 1971, they revealed that the government had systematically lied to Congress and the public about the war\'s progress and prospects. Four administrations — Truman, Eisenhower, Kennedy, and Johnson — had expanded the war while knowing it was likely unwinnable.',
  },
  {
    q: 'What was Agent Orange?',
    a: 'Agent Orange was a chemical herbicide sprayed by the US military to destroy jungle cover and crops in Vietnam. Between 1961 and 1971, the US sprayed 20 million gallons of herbicides, including Agent Orange, over 4.5 million acres. The dioxin in Agent Orange causes cancer, birth defects, and neurological damage. An estimated 4.8 million Vietnamese and 2.6 million US veterans were exposed. Birth defects persist in third-generation Vietnamese children.',
  },
  {
    q: 'What lessons did the US learn from Vietnam?',
    a: 'Officially: never fight a land war in Asia without clear objectives, public support, and an exit strategy. In practice: almost nothing. The same patterns — government lies about war progress, mission creep, body counts as metrics, failure to understand local politics, and refusal to acknowledge defeat — repeated in Iraq and Afghanistan. The "Vietnam syndrome" briefly restrained US intervention, but was declared "kicked" by Bush I after the Gulf War.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function VietnamWarPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Vietnam War' }]} />
        <ShareButtons title="Vietnam War — $1 Trillion, 58,220 US Dead, Lessons Never Learned" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Vietnam War
          </h1>
          <p className="text-lg text-stone-500 mb-2">1955–1975 · The War That Broke America&apos;s Trust</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            <strong className="text-[#991b1b]">58,220 Americans</strong> and{' '}
            <strong className="text-[#991b1b]">2-3 million Vietnamese</strong> died in a war the government
            knew was unwinnable. The Pentagon Papers proved they lied. Then they did it all again in Iraq and Afghanistan.
          </p>
        </header>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {keyStats.map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl md:text-2xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Cost: $1 Trillion and Counting
          </h2>
          <p className="text-stone-700 mb-6">
            The Vietnam War was funded through a combination of taxes, deficit spending, and inflation.
            Unlike the post-9/11 wars, Vietnam-era spending contributed to the &ldquo;stagflation&rdquo; of the 1970s.
            Veterans benefits continue to cost billions annually — nearly 50 years after the last combat troops left.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount (2024$)</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">${r.amount}B</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <YearlySpending data={yearlySpending} />
        </section>

        {/* Troop Levels */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Troop Levels: Escalation and Withdrawal
          </h2>
          <p className="text-stone-700 mb-6">
            From 900 advisors to 536,000 combat troops in under a decade. Each escalation was presented as
            the decisive step toward victory. Each failed. The pattern would repeat in Afghanistan 40 years later.
          </p>
          <TroopLevels data={troopLevels} />
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline: Two Decades of War
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
            <div className="space-y-6">
              {timeline.map((event) => (
                <div key={event.year} className="relative pl-10">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#991b1b]" />
                  <div className="text-sm font-mono text-[#991b1b] mb-1">{event.year}</div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-1">{event.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Draft */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Draft: Class Warfare in Uniform
          </h2>
          <p className="text-stone-700 mb-4">
            The Vietnam draft was the most class-discriminatory conscription system in American history.
            College deferments meant that wealthy and middle-class men could avoid service, while working-class
            and minority communities bore a disproportionate burden.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {draftStats.map((d) => (
              <div key={d.desc} className="bg-stone-50 rounded-lg p-3 border border-stone-200 text-center">
                <div className="text-lg font-bold text-[#991b1b]">{d.stat}</div>
                <div className="text-xs text-stone-500 mt-1">{d.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-stone-700">
            Black Americans made up 11% of the US population but 12.5% of Vietnam casualties.
            In the war&apos;s early years, the disparity was even worse — in 1965, Black soldiers accounted for
            nearly 25% of combat deaths. Muhammad Ali&apos;s refusal of the draft (&ldquo;I ain&apos;t got no quarrel with
            them Viet Cong&rdquo;) cost him his heavyweight title and three years of his career.
          </p>
        </section>

        {/* Agent Orange */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Agent Orange: Chemical Warfare Against a Forest
          </h2>
          <p className="text-stone-700 mb-4">
            Operation Ranch Hand (1962-1971) sprayed <strong>20 million gallons</strong> of chemical herbicides —
            primarily Agent Orange — over 4.5 million acres of Vietnamese jungle and farmland. The goal: destroy
            enemy cover and food crops. The result: an ongoing environmental and human health catastrophe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The Numbers</h3>
              <ul className="text-sm text-stone-600 space-y-1">
                <li><strong className="text-[#991b1b]">{agentOrange.gallons}</strong> gallons sprayed</li>
                <li><strong className="text-[#991b1b]">{agentOrange.acreage}</strong> of land affected</li>
                <li><strong className="text-[#991b1b]">{agentOrange.affected}</strong> Vietnamese exposed</li>
                <li><strong className="text-[#991b1b]">{agentOrange.usVets}</strong> US vets exposed</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The Legacy</h3>
              <ul className="text-sm text-stone-600 space-y-1">
                <li><strong>Health effects:</strong> {agentOrange.effects}</li>
                <li><strong>Generational:</strong> {agentOrange.generations}</li>
                <li><strong>Accountability:</strong> {agentOrange.accountability}</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-700 text-sm">
              The VA now recognizes presumptive conditions for Agent Orange exposure — but only for US veterans.
              Vietnamese victims have received almost no compensation. Dow Chemical and Monsanto successfully argued
              in court that they bear no responsibility for how the government used their product.
            </p>
          </div>
        </section>

        {/* My Lai */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            My Lai: The Massacre and the Cover-Up
          </h2>
          <p className="text-stone-700 mb-4">
            On March 16, 1968, soldiers of Charlie Company, 1st Battalion, 20th Infantry Regiment, entered the
            hamlet of My Lai. Over the next four hours, they murdered between 347 and 504 unarmed Vietnamese civilians —
            mostly women, children, and elderly men. Women were raped. Houses burned. Livestock slaughtered.
          </p>
          <p className="text-stone-700 mb-4">
            The massacre was covered up by the Army for over a year. Investigative journalist Seymour Hersh broke
            the story in November 1969. Of 26 officers charged, only Lieutenant William Calley was convicted.
            He was sentenced to life in prison but served only 3.5 years of house arrest before being pardoned.
          </p>
          <p className="text-stone-700">
            Warrant Officer Hugh Thompson, the helicopter pilot who intervened to stop the massacre — ordering his
            crew to fire on American soldiers if they continued killing civilians — was initially shunned and
            received death threats. He wasn&apos;t recognized for his heroism until 30 years later.
          </p>
        </section>

        {/* Pentagon Papers */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Pentagon Papers: Proof of Decades of Lies
          </h2>
          <p className="text-stone-700 mb-4">
            In 1971, Daniel Ellsberg — a former RAND Corporation analyst who had worked on the classified study —
            leaked the Pentagon Papers to The New York Times and The Washington Post. The 7,000-page study revealed
            that four presidential administrations had systematically lied to Congress and the public about the war.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-1">
              &ldquo;The greatest contribution of the Pentagon Papers was that they documented the government&apos;s pattern
              of deception. They showed that the war was not a mistake. It was a deliberate choice, made in the face
              of intelligence saying it would fail.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— Summary of key findings</p>
          </div>
          <p className="text-stone-700">
            Nixon tried to block publication. The Supreme Court ruled 6-3 for the press in <em>New York Times Co. v.
            United States</em> — a landmark First Amendment case. Nixon then authorized the &ldquo;Plumbers&rdquo;
            unit to break into Ellsberg&apos;s psychiatrist&apos;s office, leading directly to the Watergate scandal.
          </p>
        </section>

        {/* Lessons Not Learned */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Lessons Not Learned
          </h2>
          <p className="text-stone-700 mb-4">
            The Vietnam War was supposed to teach America the limits of military power. Instead, each generation
            relearns the same lessons and ignores them again.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Vietnam Lesson</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800">Repeated In Iraq/Afghanistan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Government lied about war progress', 'Afghanistan Papers revealed same pattern of lies'],
                  ['No clear exit strategy', 'Both wars lasted 20+ years with no end state defined'],
                  ['Propped up corrupt local governments', 'Karzai/Ghani in Afghanistan, Maliki in Iraq'],
                  ['Body counts as metrics of success', 'Kill counts, drone strike tallies, "progress" reports'],
                  ['Underestimated local resistance', 'Taliban, Iraqi insurgency, ISIS'],
                  ['Draft/deployment burden fell on poor', 'Stop-loss, backdoor draft, contractor dependence'],
                  ['Anti-war movement dismissed', 'Millions marched against Iraq War — ignored entirely'],
                ].map(([vietnam, repeat]) => (
                  <tr key={vietnam} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{vietnam}</td>
                    <td className="py-2 pl-4 text-stone-500">{repeat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ with JSON-LD */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-stone-200 pb-4">
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/iraq-war', label: 'Iraq War — The Same Mistakes, Worse Outcomes' },
              { href: '/afghanistan-war', label: 'Afghanistan War — 20 Years, Taliban Wins' },
              { href: '/cost-of-war', label: 'Total Cost of US Wars' },
              { href: '/analysis/draft-and-inequality', label: 'The Draft and Inequality' },
              { href: '/civilian-casualties', label: 'Civilian Casualties Across All Wars' },
              { href: '/decades/1960s', label: 'The 1960s — A Decade at War' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-stone-50 hover:bg-stone-100 rounded-lg p-3 border border-stone-200 text-stone-700 hover:text-[#991b1b] transition-colors text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>Congressional Research Service — Costs of Major US Wars</li>
            <li>National Archives — Vietnam War Casualty Statistics</li>
            <li>Pentagon Papers — National Archives and Records Administration</li>
            <li>Agent Orange Record — US Department of Veterans Affairs</li>
            <li>Vietnam Veterans Memorial Fund — Wall of Faces Database</li>
            <li>The Vietnam War: An Intimate History — Geoffrey C. Ward and Ken Burns</li>
            <li>A People&apos;s History of the United States — Howard Zinn</li>
          </ul>
        </section>

        <BackToTop />
      </div>
    </main>
  )
}
