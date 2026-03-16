import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The Families Left Behind — The Hidden Cost of War',
  description: '7,057 troops killed. 30,177 veteran suicides. 52,000+ wounded. Military divorce, child trauma, spouse unemployment. 1% serve; 99% have no skin in the game.',
  openGraph: {
    title: 'The Families Left Behind: The Hidden Cost of War',
    description: '30,177 veteran suicides since 9/11 — 4x combat deaths. The cost nobody counts.',
    url: 'https://warcosts.org/analysis/military-families',
    type: 'article',
  },
}

const casualties = [
  { category: 'Killed in action (post-9/11)', count: '7,057', detail: '2,461 in Afghanistan. 4,431 in Iraq. 165 in other operations. Each number is a family destroyed.' },
  { category: 'Wounded in action', count: '52,000+', detail: 'Many with traumatic brain injury (TBI), amputations, severe burns. Modern body armor means soldiers survive injuries that would have been fatal in previous wars — but survival often means a lifetime of disability.' },
  { category: 'Traumatic brain injury (TBI)', count: '400,000+', detail: 'The "signature wound" of the post-9/11 wars. IED blasts cause brain damage that may not be diagnosed for years. Symptoms: memory loss, personality changes, chronic headaches, seizures. Many veterans don\'t know they have TBI.' },
  { category: 'PTSD diagnoses', count: '1.8M+', detail: '29% of Iraq/Afghanistan veterans diagnosed with PTSD. Symptoms: nightmares, hypervigilance, emotional numbness, substance abuse. PTSD rates increase over time — many don\'t seek help for years.' },
  { category: 'Veteran suicides (post-9/11)', count: '30,177', detail: 'Four times the number killed in combat. 17 veterans die by suicide every day. The VA counts only veterans in its system — the true number is likely higher. Suicide rate is 1.5x the civilian rate.' },
  { category: 'Military sexual trauma', count: '1 in 4 women / 1 in 100 men', detail: 'Reported to the VA. Actual rates are believed to be far higher due to underreporting. Military culture discourages reporting. Perpetrators are rarely prosecuted.' },
]

const familyImpact = [
  { issue: 'Military divorce rate', data: '3.1% annually (vs. ~2.3% civilian)', detail: 'Multiple deployments are the primary driver. Couples who experienced deployment divorce at 62% higher rate. The longer and more frequent the deployments, the higher the rate. Combat deployments are worse than non-combat.' },
  { issue: 'Child behavioral problems', data: '2x civilian rate during deployment', detail: 'Children of deployed parents show significantly higher rates of anxiety, depression, behavioral disorders, and academic problems. "Cycles of deployment" mean children experience repeated parental absence during formative years. 2 million children had a parent deployed post-9/11.' },
  { issue: 'Spouse unemployment/underemployment', data: '22% unemployment rate', detail: 'Military spouses face 22% unemployment — 4x the national average. Frequent relocations (every 2-3 years) make career development nearly impossible. Professional licenses don\'t transfer across states. Employers are reluctant to hire someone who may move in 18 months.' },
  { issue: 'Financial hardship', data: '40% of junior enlisted on food assistance', detail: 'E-1 to E-4 enlisted families (the majority of combat troops) often qualify for SNAP, WIC, and free school lunches. The people we send to fight our wars can\'t afford to feed their families.' },
  { issue: 'Domestic violence', data: '3x civilian rate', detail: 'Military families experience domestic violence at 3x the civilian rate. Combat veterans with PTSD are even higher. Base commanders historically handled cases internally. Victims on military bases have fewer options — their housing, healthcare, and community are all tied to the military.' },
  { issue: 'Caregiver burden', data: '1.1 million caregivers', detail: 'Spouses and parents caring for wounded veterans — often for the rest of their lives. Average caregiver provides 40+ hours/week of unpaid care. 70% report depression. 50% report their own health declining. Many give up careers entirely.' },
]

const suicideData = [
  { year: '2005', count: 87, rate: 18.7 },
  { year: '2008', count: 268, rate: 22.1 },
  { year: '2010', count: 468, rate: 25.3 },
  { year: '2012', count: 841, rate: 28.9 },
  { year: '2014', count: 1208, rate: 30.1 },
  { year: '2016', count: 1589, rate: 30.5 },
  { year: '2018', count: 1963, rate: 31.6 },
  { year: '2020', count: 2412, rate: 33.9 },
  { year: '2022', count: 2891, rate: 34.2 },
  { year: '2024', count: 3450, rate: 35.1 },
]

export default function MilitaryFamiliesPage() {
  const stats = loadData('stats.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Military Families' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Families Left Behind
        </h1>
        <p className="text-xl text-stone-300 mb-4">The Hidden Cost of War</p>
        <p className="text-stone-400 text-lg">
          When a soldier dies in combat, a car pulls up to a house. Two officers in dress uniforms
          knock on the door. A flag is folded into a triangle and handed to a spouse, a parent,
          a child. The cameras leave. The politicians move on to the next news cycle. And then a
          family — 7,057 families — is left to figure out how to survive. That&apos;s just the
          deaths. Another 30,177 veterans have killed themselves since 9/11 — four times the number
          who died in combat. Another 52,000 came home wounded. Another 400,000 with traumatic brain
          injuries. Another 1.8 million with PTSD. Behind every one of those numbers is a family
          that was never the same.
        </p>
      </div>

      <ShareButtons title="The Families Left Behind: The Hidden Cost of War" />

      {/* AI Overview */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3">🤖 AI Overview</h2>
        <p className="text-stone-300 mb-3">
          The human cost of war extends far beyond the battlefield. For every soldier killed or wounded,
          there is a family bearing invisible wounds — divorce, suicide, PTSD, financial ruin, and
          children growing up without a parent.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">7,057</p>
            <p className="text-xs text-stone-400">Troops killed</p>
          </div>
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">30,177</p>
            <p className="text-xs text-stone-400">Veteran suicides</p>
          </div>
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">52K+</p>
            <p className="text-xs text-stone-400">Wounded</p>
          </div>
          <div className="bg-stone-900/50 rounded p-3 text-center">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{stats.veteranSuicidePerDay}/day</p>
            <p className="text-xs text-stone-400">Veterans dying by suicide</p>
          </div>
        </div>
      </div>

      {/* The Numbers */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Casualties Nobody Counts</h2>
        <div className="space-y-4">
          {casualties.map(c => (
            <div key={c.category} className="border-b border-stone-700 pb-3">
              <div className="flex items-center justify-between mb-1">
                <p className="text-white font-semibold text-sm">{c.category}</p>
                <span className="text-red-400 font-bold font-[family-name:var(--font-heading)]">{c.count}</span>
              </div>
              <p className="text-sm text-stone-400">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Suicide Crisis */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Suicide Epidemic</h2>
        <p className="text-stone-300 mb-4">
          More veterans have killed themselves since 9/11 than were killed in all post-9/11 combat
          operations combined. The ratio isn&apos;t close: <strong className="text-red-400">30,177
          suicides vs. 7,057 combat deaths</strong>. For every soldier killed by the enemy,
          four more are killed by the war&apos;s aftermath.
        </p>

        <div className="bg-slate-800 rounded-lg p-4 mb-4">
          <p className="text-xs text-stone-500 uppercase mb-2 font-semibold">Cumulative veteran suicides since 9/11 (selected years)</p>
          <div className="space-y-2">
            {suicideData.map(s => (
              <div key={s.year} className="flex items-center gap-3">
                <span className="text-xs font-mono text-stone-400 w-10 shrink-0">{s.year}</span>
                <div className="flex-1 bg-stone-700/50 rounded h-5 relative overflow-hidden">
                  <div
                    className="bg-red-600 h-full rounded"
                    style={{ width: `${(s.count / 3500) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-red-400 w-16 text-right">{s.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="prose max-w-none">
          <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic">
            &ldquo;We talk about supporting the troops, but what we really mean is supporting the wars.
            When the troops come home broken, we look away. It&apos;s easier to put a yellow ribbon
            on your car than to fund the VA.&rdquo;
            <span className="block text-sm text-stone-500 mt-1 not-italic">— Sebastian Junger, <em>Tribe</em></span>
          </blockquote>
        </div>

        <p className="text-stone-300 mt-4">
          The VA estimates it would cost {fmtMoney(stats.veteranCareFutureCost)} in future obligations to
          properly care for post-9/11 veterans. Congress has never fully funded these obligations.
          The same legislators who voted for war consistently vote against veteran care funding.
        </p>
      </div>

      {/* Family Impact */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Ripple Effect: Families</h2>
        <p className="text-stone-300 mb-4">
          War doesn&apos;t just damage soldiers. It damages everyone connected to them:
        </p>
        <div className="space-y-4">
          {familyImpact.map(f => (
            <div key={f.issue} className="bg-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-white font-semibold text-sm">{f.issue}</h3>
                <span className="text-red-400 text-sm font-semibold">{f.data}</span>
              </div>
              <p className="text-sm text-stone-400">{f.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gold Star Families */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">After the Flag Is Folded</h2>
        <p className="text-stone-300 mb-4">
          Gold Star families — those who lost a loved one in service — receive a folded flag,
          a letter from the President, and a $100,000 death gratuity. Then the government largely
          moves on. The family doesn&apos;t.
        </p>
        <div className="space-y-3">
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold text-sm mb-1">Financial Devastation</h3>
            <p className="text-sm text-stone-400">
              Survivor benefits are complex and often inadequate. SGLI pays $400,000 — but the
              surviving spouse loses housing, healthcare (after 3 years), and community overnight.
              If the deceased was a junior enlisted making $25,000/year, the family was already
              struggling. Now they&apos;re struggling alone.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold text-sm mb-1">The Children</h3>
            <p className="text-sm text-stone-400">
              An estimated 7,000+ children lost a parent in post-9/11 wars. Studies show these
              children have significantly higher rates of depression, behavioral problems, substance
              abuse, and their own military enlistment — perpetuating the cycle. Many were infants
              or toddlers when their parent deployed and have no memories of them at all.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold text-sm mb-1">Grief Without Closure</h3>
            <p className="text-sm text-stone-400">
              Many families never fully understand why their loved one died. The objectives shift.
              The rationale changes. Wars end without victory. Afghanistan fell to the Taliban
              weeks after the last American left. For a parent who lost a child there, the
              question is unbearable: what was it for?
            </p>
          </div>
        </div>
      </div>

      {/* The 1% */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The 1% Who Fight</h2>
        <p className="text-stone-300 mb-4">
          Less than 1% of the American population has served in the post-9/11 wars. The other 99%
          experienced these wars as news. No draft. No war tax. No rationing. No sacrifice.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-800 rounded p-4">
            <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)] mb-1">&lt;1%</p>
            <p className="text-white text-sm font-semibold">of Americans served post-9/11</p>
            <p className="text-stone-400 text-xs mt-1">~2.7 million deployed out of 330 million</p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <p className="text-3xl font-bold text-red-400 font-[family-name:var(--font-heading)] mb-1">0</p>
            <p className="text-white text-sm font-semibold">members of Congress with children in combat</p>
            <p className="text-stone-400 text-xs mt-1">The people who vote for war don&apos;t fight in them</p>
          </div>
        </div>
        <p className="text-stone-300 mb-4">
          This civil-military divide has profound consequences. When 99% of the country has no personal
          stake in war, wars can continue indefinitely without political cost. Afghanistan lasted 20
          years because most Americans never felt it. The burden fell on a tiny, increasingly isolated
          military community — often from small towns, rural areas, and military families where
          service is a multi-generational tradition.
        </p>

        <div className="prose max-w-none">
          <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic">
            &ldquo;We&apos;ve created a system where the benefits of war are socialized — every
            politician gets to talk tough — and the costs are privatized — a tiny number of families
            bear all the suffering. That&apos;s not a democracy at war. That&apos;s an empire with
            a volunteer army.&rdquo;
            <span className="block text-sm text-stone-500 mt-1 not-italic">— Andrew Bacevich, <em>Breach of Trust</em></span>
          </blockquote>
        </div>

        <p className="text-stone-400 text-sm mt-4">
          Andrew Bacevich is a retired Army colonel and Boston University professor. His son,
          First Lieutenant Andrew Bacevich Jr., was killed in action in Iraq in 2007. He writes
          from both perspectives — the academic and the Gold Star father.
        </p>
      </div>

      {/* The VA */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The VA: Promises Made, Promises Broken</h2>
        <div className="space-y-3">
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-red-400 font-semibold text-sm mb-1">Claims Backlog</h3>
            <p className="text-sm text-stone-400">
              Average wait time for a disability claim: 150+ days. At peak (2013), the backlog
              exceeded 600,000 claims. Veterans die waiting for care they were promised.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-red-400 font-semibold text-sm mb-1">Mental Health Access</h3>
            <p className="text-sm text-stone-400">
              VA mental health appointments: average wait time 30+ days. In rural areas: 60+ days
              or unavailable. 60% of veterans who die by suicide were not receiving VA care.
              The system fails those who need it most.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-red-400 font-semibold text-sm mb-1">Burn Pit Exposure</h3>
            <p className="text-sm text-stone-400">
              3.5 million+ service members exposed to toxic burn pits in Iraq and Afghanistan.
              The PACT Act (2022) expanded coverage — but only after years of veterans dying
              from cancers the VA refused to connect to their service. The military burned
              everything — batteries, medical waste, jet fuel, plastics — in open pits, and
              troops breathed the smoke for months or years.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-red-400 font-semibold text-sm mb-1">Homelessness</h3>
            <p className="text-sm text-stone-400">
              On any given night, 33,000+ veterans are homeless. Veterans are 50% more likely
              to become homeless than other Americans. The number has decreased from a peak of
              74,000 (2010) but remains a national disgrace for a country that spends {fmtMoney(stats.currentAnnualBudget)}/year
              on defense.
            </p>
          </div>
        </div>
      </div>

      {/* Moral Injury */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Moral Injury: The Wound That Doesn&apos;t Show</h2>
        <p className="text-stone-300 mb-4">
          Beyond PTSD, researchers have identified a related but distinct condition: <strong>moral injury</strong>.
          It occurs when a person participates in, witnesses, or fails to prevent events that violate
          their moral beliefs. Unlike PTSD (a fear-based response), moral injury is a shame-and-guilt
          based wound.
        </p>
        <div className="space-y-2 mb-4">
          {[
            'Killing civilians — even accidentally — and living with that knowledge forever',
            'Following orders that felt wrong and being unable to speak up',
            'Watching friends die for objectives that later proved meaningless',
            'Coming home and realizing the war they fought was based on lies (Iraq WMDs)',
            'Being thanked for their service by people who have no idea what the service involved',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-red-400 mt-0.5">•</span>
              <p className="text-stone-300 text-sm">{item}</p>
            </div>
          ))}
        </div>
        <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic">
          &ldquo;Don&apos;t thank me for my service. I didn&apos;t serve you. I served Halliburton,
          Raytheon, and Lockheed Martin. I just didn&apos;t know it at the time.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Anonymous veteran, Reddit, 2023</span>
        </blockquote>
      </div>

      {/* Intergenerational Trauma */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Intergenerational Trauma: The Cycle That Never Ends</h2>
        <p className="text-stone-300 mb-4">
          The damage doesn&apos;t stop with the veteran. Research consistently shows that combat trauma
          transmits across generations — through parenting behavior, family dynamics, and even epigenetic
          changes. Children of combat veterans with PTSD are significantly more likely to develop
          anxiety disorders, depression, and behavioral problems — even if the veteran never discusses
          their experiences.
        </p>
        <div className="space-y-3">
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold text-sm mb-1">Vietnam Veterans&apos; Children</h3>
            <p className="text-sm text-stone-400">
              Studies of Vietnam veterans&apos; families — now spanning 50+ years — show elevated rates
              of substance abuse, relationship difficulties, and mental health problems in the second
              generation. The National Vietnam Veterans Readjustment Study (NVVRS) found that 30.9% of
              male Vietnam veterans had PTSD at some point. Their children grew up with a parent who was
              emotionally unavailable, hypervigilant, and prone to anger — even if the family never knew
              the clinical name for what was happening.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold text-sm mb-1">The Epigenetic Evidence</h3>
            <p className="text-sm text-stone-400">
              Emerging research from Mount Sinai and other institutions suggests that trauma can alter
              gene expression in ways that are passed to offspring. Studies of Holocaust survivors
              and their children found measurable epigenetic changes in stress-response genes. Similar
              research is underway with combat veterans. The implication is profound: war doesn&apos;t
              just damage the person who fights it. It can literally alter the biology of their children.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold text-sm mb-1">Military Brats: Growing Up in the System</h3>
            <p className="text-sm text-stone-400">
              An estimated 1.7 million children currently have at least one parent in the US military.
              These &ldquo;military brats&rdquo; move an average of 6-9 times during a school-age period.
              Each move means lost friendships, new schools, and starting over. Studies show military
              children are resilient in many ways but also carry unique burdens: the constant anxiety
              of deployment, the social isolation of frequent moves, and the pressure of a culture that
              values stoicism over emotional expression.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-white font-semibold text-sm mb-1">The Recruiting Pipeline</h3>
            <p className="text-sm text-stone-400">
              Children of military families enlist at significantly higher rates than the general population.
              Studies estimate that 25-30% of new recruits have a parent who served. This creates a
              self-perpetuating cycle: families that bear the cost of war produce the next generation of
              warriors. The military relies on this pipeline — particularly from rural areas, small towns,
              and communities with limited economic opportunities. It&apos;s not patriotism that drives
              most enlistment. It&apos;s economic necessity and family tradition.
            </p>
          </div>
        </div>
      </div>

      {/* Comparative Analysis */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">How Other Countries Treat Their Veterans</h2>
        <p className="text-stone-300 mb-4">
          The United States is not the only country that sends its citizens to war. But it is unique in
          the gap between its rhetoric of support and the reality of its care.
        </p>
        <div className="space-y-3">
          {[
            { country: 'United Kingdom', detail: 'The UK\'s Armed Forces Covenant pledges that veterans should face no disadvantage compared to civilians in accessing services. NHS provides priority treatment for service-related conditions. Housing assistance for veterans. Still imperfect — but the principle of a binding social contract exists in law.' },
            { country: 'Canada', detail: 'Veterans Affairs Canada provides lifetime disability pensions, career transition programs, and guaranteed access to mental health care. The Veterans Well-being Act (2019) consolidated benefits. Canada spends approximately $4.4 billion CAD annually on 600,000 veterans — proportionally more per veteran than the US.' },
            { country: 'Australia', detail: 'The Department of Veterans\' Affairs (DVA) provides comprehensive healthcare, rehabilitation, and transition services. The Veterans\' Entitlements Act covers mental health with no cost-sharing. Australia\'s Royal Commission into Defence and Veteran Suicide (2021-2024) conducted the most thorough investigation of veteran suicide by any country.' },
            { country: 'Israel', detail: 'Israel\'s universal conscription means veteran issues are everyone\'s issues. The Disabled Veterans Organization (Zahal) has significant political power. Rehabilitation services are extensive. The societal connection to military service is fundamentally different when 2/3 of the population has served.' },
          ].map(c => (
            <div key={c.country} className="bg-slate-800 rounded p-4">
              <h3 className="text-white font-semibold text-sm mb-1">{c.country}</h3>
              <p className="text-sm text-stone-400">{c.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4">
          The common thread in countries that treat veterans better: either universal service (so everyone
          has skin in the game) or a binding legal framework that turns rhetoric into obligation. The US
          has neither. Its all-volunteer force means 99% of the population is disconnected from the consequences
          of war, and &ldquo;supporting the troops&rdquo; remains a bumper sticker rather than a budget line.
        </p>
      </div>

      {/* The Economics of Veteran Care */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Economics: Deferred Costs</h2>
        <p className="text-stone-300 mb-4">
          The true cost of war includes decades of veteran care — but these costs are deliberately excluded
          from war budgets. When Congress votes for war, it votes for the deployment. The medical bills,
          disability payments, and mental health care for the next 50 years are someone else&apos;s problem.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-800 rounded p-4">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)] mb-1">$2.5T</p>
            <p className="text-white text-sm font-semibold">Estimated future veteran care obligations</p>
            <p className="text-stone-400 text-xs mt-1">Brown University Costs of War, 2023 estimate</p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)] mb-1">$301B</p>
            <p className="text-white text-sm font-semibold">VA annual budget (FY2024)</p>
            <p className="text-stone-400 text-xs mt-1">Second-largest federal agency after DoD</p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)] mb-1">4.7M</p>
            <p className="text-white text-sm font-semibold">Post-9/11 veterans receiving VA care</p>
            <p className="text-stone-400 text-xs mt-1">Number growing as aging veterans develop conditions</p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <p className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)] mb-1">Peak: 2048</p>
            <p className="text-white text-sm font-semibold">When post-9/11 veteran care costs are projected to peak</p>
            <p className="text-stone-400 text-xs mt-1">CBO estimate — 25+ years after most combat ended</p>
          </div>
        </div>
        <p className="text-stone-300 mb-4">
          Linda Bilmes of Harvard&apos;s Kennedy School has documented this pattern across every major US war.
          Veteran care costs peak 30-40 years after combat ends. The peak cost year for Vietnam veterans
          was approximately 2010 — 35 years after the war ended. For Iraq and Afghanistan, peak costs
          won&apos;t arrive until the 2040s. The politicians who voted for these wars will be long gone.
          The bill will remain.
        </p>
        <blockquote className="border-l-4 border-red-600 pl-4 text-stone-300 italic">
          &ldquo;Every war is really two wars — the one that&apos;s fought, and the one that&apos;s
          paid for afterward. The second war is always longer, always more expensive, and always
          invisible.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Linda Bilmes, Harvard Kennedy School</span>
        </blockquote>
      </div>

      {/* Spouse and Partner Stories */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Invisible Service Members: Military Spouses</h2>
        <p className="text-stone-300 mb-4">
          Military spouses serve without the uniform, the benefits, or the recognition. They hold families
          together through deployments, manage households as single parents for months or years at a time,
          relocate across the country (or world) every 2-3 years, and absorb the emotional fallout when
          their partner returns changed from combat.
        </p>
        <div className="space-y-3">
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-red-400 font-semibold text-sm mb-1">Career Sacrifice</h3>
            <p className="text-sm text-stone-400">
              Military spouses earn 26.8% less than their civilian counterparts, according to the
              Blue Star Families annual survey. Over a career, this amounts to hundreds of thousands
              in lost earnings. Professional licenses — nursing, law, teaching, real estate — often
              don&apos;t transfer across state lines. Despite recent legislation, only 38 states have
              adopted license portability for military spouses, and implementation is inconsistent.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-red-400 font-semibold text-sm mb-1">Secondary PTSD</h3>
            <p className="text-sm text-stone-400">
              Partners of veterans with PTSD develop their own trauma symptoms at alarming rates.
              Studies show 30-40% of partners exhibit &ldquo;secondary traumatic stress&rdquo; —
              hypervigilance, sleep disturbance, emotional withdrawal. They walk on eggshells around
              triggers. They manage medications. They become therapist, nurse, and buffer between
              their partner and the world — all without training, without pay, and often without
              anyone asking how they&apos;re doing.
            </p>
          </div>
          <div className="bg-slate-800 rounded p-4">
            <h3 className="text-red-400 font-semibold text-sm mb-1">The Deployment Paradox</h3>
            <p className="text-sm text-stone-400">
              Research reveals a counterintuitive pattern: many military marriages are most strained
              not during deployment, but during reintegration. Spouses develop independence and routines
              during absence. Returning veterans expect to resume their prior role. Children have bonded
              more closely with the home parent. The homecoming — celebrated in viral videos — is often
              the beginning of the hardest phase.
            </p>
          </div>
        </div>
      </div>

      {/* What Would Actually Help */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">What Would Actually Help</h2>
        <p className="text-stone-300 mb-4">
          The solutions are not mysterious. They are simply not priorities for a political class
          that profits from war but never fights in one:
        </p>
        <div className="space-y-2">
          {[
            'Mandatory cost accounting: Every war authorization must include a 50-year veteran care cost estimate, scored by CBO, before the vote',
            'Universal license portability for military spouses — not state-by-state, but federal preemption',
            'Eliminate the VA claims backlog by presuming service connection for conditions common to deployed veterans (as the PACT Act partially does)',
            'Fund caregiver support at levels commensurate with the burden: 40+ hours/week of care is a full-time job and should be compensated as one',
            'Reinstate the draft — or at minimum, require children of voting members of Congress to register for selective service with priority deployment. Nothing would end forever wars faster than shared sacrifice',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-red-400 mt-0.5">•</span>
              <p className="text-stone-300 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Sources</h2>
        <ul className="space-y-1 text-sm text-stone-400">
          <li>• Brown University Costs of War Project — veteran casualty and care cost estimates</li>
          <li>• VA National Veteran Suicide Prevention Annual Report (2023)</li>
          <li>• Department of Defense — Defense Casualty Analysis System (DCAS)</li>
          <li>• Blue Star Families — Military Family Lifestyle Survey (annual)</li>
          <li>• RAND Corporation — &ldquo;Invisible Wounds of War&rdquo; (2008)</li>
          <li>• Congressional Budget Office (CBO) — &ldquo;Long-Term Costs of the Administration&apos;s Health Proposal&rdquo;</li>
          <li>• Linda Bilmes, &ldquo;The Three Trillion Dollar War&rdquo; (with Joseph Stiglitz, 2008)</li>
          <li>• Sebastian Junger, &ldquo;Tribe: On Homecoming and Belonging&rdquo; (2016)</li>
          <li>• Andrew Bacevich, &ldquo;Breach of Trust: How Americans Failed Their Soldiers and Their Country&rdquo; (2013)</li>
          <li>• National Vietnam Veterans Readjustment Study (NVVRS)</li>
          <li>• Government Accountability Office (GAO) — VA claims processing reports</li>
          <li>• PACT Act implementation data (2022-present)</li>
          <li>• Yehuda, Rachel et al. — epigenetic studies of intergenerational trauma, Mount Sinai</li>
          <li>• Royal Commission into Defence and Veteran Suicide, Australia (2024)</li>
        </ul>
      </div>

      {/* Related */}
      <div className="bg-stone-900 rounded-xl border border-stone-800 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { href: '/analysis/human-cost', label: 'The Human Cost of War' },
            { href: '/analysis/911-to-forever-war', label: 'From 9/11 to Forever War' },
            { href: '/analysis/cost-per-life', label: 'What Is a Life Worth?' },
            { href: '/analysis/what-could-we-buy', label: 'What Could We Buy Instead?' },
            { href: '/analysis/the-aftermath', label: 'The Aftermath' },
            { href: '/analysis/veterans-betrayed', label: 'Veterans Betrayed' },
            { href: '/analysis/draft-and-inequality', label: 'The Draft and Inequality' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-red-400 hover:text-red-800 text-sm hover:underline">
              → {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-stone-300 text-lg mb-4">
          America asks less than 1% of its population to fight its wars. Those who serve come home
          to a system that under-funds their care, delays their claims, and loses track of them
          entirely once they leave the military. Their families absorb the cost — divorce, poverty,
          behavioral problems, and a grief that never fully resolves because the wars never fully end
          and the reasons for them keep changing.
        </p>
        <p className="text-stone-300 text-lg mb-4">
          Thirty thousand veterans have killed themselves. That number will keep growing because
          the wars keep continuing, the deployments keep cycling, and the country that sent them
          to fight has already moved on. &ldquo;Thank you for your service&rdquo; costs nothing.
          Actual service costs everything.
        </p>
        <p className="text-stone-300 text-lg mb-4">
          The most damning statistic is the simplest one: zero members of Congress had children
          serving in combat zones during the post-9/11 wars. The people who vote for war bear none
          of its consequences. Their children attend elite universities. Military families&apos; children
          attend funerals. Until the cost of war is shared equally, it will continue to be borne
          by the few — and ignored by the many.
        </p>
        <blockquote className="border-l-4 border-red-500 pl-4 text-stone-400 italic">
          &ldquo;It is forbidden to kill; therefore all murderers are punished unless they kill in
          large numbers and to the sound of trumpets.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Voltaire</span>
        </blockquote>
      </div>

      <BackToTop />
    </div>
  )
}
