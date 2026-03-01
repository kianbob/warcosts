import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'The Human Cost of War — Every Number Was a Person | WarCosts',
  description: 'Over 1 million Americans killed, 5.2 million civilians dead, 17 veterans commit suicide daily, 37 million displaced. The human cost America ignores.',
  openGraph: {
    title: 'The Human Cost of War — Every Number Was a Person',
    description: '17 veteran suicides per day. 37 million displaced. Agent Orange still killing 50 years later.',
    url: 'https://www.warcosts.org/analysis/human-cost',
  },
}

const civilianDeathRatios = [
  { conflict: 'World War I', period: '1914–1918', civilian: '40%', military: '60%', note: 'Marked the beginning of mass civilian targeting' },
  { conflict: 'World War II', period: '1939–1945', civilian: '67%', military: '33%', note: 'Firebombing, Holocaust, atomic bombs, 40M+ civilian dead' },
  { conflict: 'Korean War', period: '1950–1953', civilian: '70%', military: '30%', note: '2-3 million Korean civilians killed; carpet bombing destroyed 85% of buildings in North' },
  { conflict: 'Vietnam War', period: '1955–1975', civilian: '65%', military: '35%', note: '2 million Vietnamese civilians. Agent Orange. Napalm. My Lai.' },
  { conflict: 'Iraq War', period: '2003–2011', civilian: '77%', military: '23%', note: 'IEDs, sectarian violence, US airstrikes. 200,000+ civilians.' },
  { conflict: 'War on Terror (overall)', period: '2001–2025', civilian: '~71%', military: '~29%', note: '387,000+ civilians killed directly. Millions more indirectly.' },
  { conflict: 'Drone Wars', period: '2004–2025', civilian: '~90%+', military: '~10%', note: 'BIJ data: vast majority are unidentified targets in signature strikes.' },
]

export default function HumanCostPage() {
  const stats = loadData('stats.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd title="The Human Cost of War — Every Number Was a Person" description="17 veteran suicides per day. 37 million displaced. Agent Orange. Depleted uranium. The human cost America ignores." slug="human-cost" />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Human Cost' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          The Human Cost
        </h1>
        <p className="text-xl text-stone-300 mb-4">Every Number Was a Person</p>
        <p className="text-stone-400 text-lg">
          War is discussed in abstractions — &ldquo;national security,&rdquo; &ldquo;strategic interests,&rdquo;
          &ldquo;collateral damage.&rdquo; These words exist to hide what war actually is: a 22-year-old veteran
          putting a gun to his head in a VA parking lot. A 10-year-old girl in Yemen vaporized by a missile
          with &ldquo;Made in USA&rdquo; stamped on its fragments. A family in Fallujah whose children are born
          with deformities from depleted uranium 20 years after the battle. This page is about them.
        </p>
      </div>

      <ShareButtons title="The Human Cost of War" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {[
          { val: fmt(stats.totalUSDeaths), label: 'Americans Killed in War', sub: 'All conflicts — Revolutionary War to present' },
          { val: `${(stats.totalCivilianDeaths / 1e6).toFixed(1)}M+`, label: 'Civilians Killed', sub: 'In conflicts involving the US military' },
          { val: '17/day', label: 'Veteran Suicides', sub: '6,200+ per year — more than combat deaths' },
          { val: '37M+', label: 'Displaced by War on Terror', sub: 'More than any conflict since WWII' },
          { val: '1.8M', label: 'Veterans with PTSD', sub: 'Many untreated or undertreated' },
          { val: '530K+', label: 'Post-9/11 Veterans with TBI', sub: 'The "signature wound" of modern war' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Vignettes */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Faces Behind the Numbers</h2>
        <p className="text-stone-500 text-sm mb-4">Every statistic on this page represents a real person. Here are a few of them.</p>
        <div className="space-y-4">
          <div className="bg-red-50 rounded-lg p-5 border border-red-200">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">Veteran Suicide — Daniel Somers</p>
            <p className="text-sm text-stone-700">
              Daniel Somers served two tours in Iraq with the 1st Cavalry Division. He was a translator and
              intelligence analyst who processed hundreds of detainee interrogations. He came home with severe PTSD
              and traumatic brain injury. The VA gave him medication. He asked for more intensive treatment.
              He waited. On June 10, 2013, he wrote a letter to his family: <em>&ldquo;My body has become nothing
              but a cage, a source of pain and constant problems. The damage done to my body and mind by the
              war is irreparable. I am left with basically nothing.&rdquo;</em> He took his own life that day.
              He was 30 years old. His letter went viral, read by millions — but nothing changed. The VA wait
              times remained. The suicides continued. 17 every day.
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-5 border border-red-200">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">Civilian Casualty — A Wedding in Yemen</p>
            <p className="text-sm text-stone-700">
              On December 12, 2013, a US drone strike hit a wedding procession in Radaa, Yemen. The convoy
              was traveling to the groom&apos;s village. 12 people were killed and 15 wounded — all members
              of two families celebrating a wedding. The youngest victim was 18. The US government initially
              claimed all those killed were &ldquo;al-Qaeda militants.&rdquo; Yemeni investigators, journalists,
              and Human Rights Watch all confirmed they were civilians. The US government eventually admitted
              the strike may have killed civilians and offered condolence payments of $100,000 per victim —
              roughly the cost of a single Hellfire missile.
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-5 border border-red-200">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">Hospital Strike — Kunduz, Afghanistan, 2015</p>
            <p className="text-sm text-stone-700">
              On October 3, 2015, a US AC-130 gunship attacked a Doctors Without Borders (MSF) hospital in
              Kunduz, Afghanistan. The hospital&apos;s GPS coordinates had been shared with the US military.
              MSF staff called the US military during the attack, desperately reporting that their hospital
              was being bombed. The attack continued for <strong>30 minutes after being notified</strong>.
              42 people died — including patients in their beds and staff trying to save them. Patients in the
              ICU burned alive. The Pentagon called it a &ldquo;mistake.&rdquo; No one was criminally charged.
              Several military personnel received administrative reprimands — the equivalent of a written warning.
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-5 border border-red-200">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">A Child in Yemen — School Bus, August 2018</p>
            <p className="text-sm text-stone-700">
              On August 9, 2018, a Saudi airstrike hit a school bus in Dahyan, Yemen, as it drove through a crowded
              market. <strong>40 children</strong> were killed, along with 11 adults. The children were returning from
              a summer camp. The youngest was 6. Investigators found the bomb was a US-made <strong>MK-82</strong> guided
              bomb, dropped from a US-made F-15 fighter jet, using US-provided targeting intelligence. CNN found the
              bomb fragments with Lockheed Martin markings. The US called for an investigation. Saudi Arabia&apos;s
              investigation cleared Saudi Arabia. American weapons. American intelligence. Dead children. No accountability.
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-5 border border-red-200">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">Fallujah — A Family&apos;s Nightmare</p>
            <p className="text-sm text-stone-700">
              After the two US assaults on Fallujah in 2004, the city became a symbol of war&apos;s long-term horror.
              The US military used white phosphorus and depleted uranium munitions extensively. Years later,
              researchers from the University of Michigan found rates of cancer, leukemia, and infant mortality
              in Fallujah that <strong>exceeded those of Hiroshima and Nagasaki survivors</strong>. Parents in Fallujah
              stopped asking &ldquo;is it a boy or a girl?&rdquo; and started asking &ldquo;is it normal?&rdquo;
              Birth defects — missing limbs, brain deformities, heart defects — became so common that doctors
              stopped keeping records. The Pentagon denied any connection. The people of Fallujah are still living it.
            </p>
          </div>
        </div>
      </div>

      {/* Veteran suicide deep dive */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Veteran Suicide: The War After the War</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">17/day</p>
            <p className="text-xs text-muted">Veteran suicides</p>
            <p className="text-[10px] text-stone-400">VA National Suicide Prevention Report</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">6,261</p>
            <p className="text-xs text-muted">Veteran suicides per year</p>
            <p className="text-[10px] text-stone-400">More than all post-9/11 combat deaths</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">2.5×</p>
            <p className="text-xs text-muted">Suicide rate vs non-veterans (18-34)</p>
            <p className="text-[10px] text-stone-400">Youngest veterans at highest risk</p>
          </div>
        </div>
        <p className="text-stone-700 mb-4">
          Since 2001, <strong>more veterans have died by suicide than in all post-9/11 combat operations combined</strong>.
          Every day, approximately 17 American veterans take their own lives — 6,261 per year. Among post-9/11
          veterans, the suicide rate is 1.5× higher than for non-veterans of the same age. For those aged 18-34,
          it&apos;s <strong>2.5× the non-veteran rate</strong>.
        </p>
        <p className="text-stone-700 mb-4">
          The epidemic has multiple causes: PTSD from combat trauma, traumatic brain injury from IED blasts,
          moral injury from participating in operations that violated their conscience, the difficulty of
          transitioning to civilian life, chronic pain, substance abuse, and — critically — an overwhelmed
          VA system with wait times that can stretch months for mental health appointments.
        </p>
        <p className="text-stone-700 mb-4">
          The VA mental health budget is a fraction of what the Pentagon spends on a single aircraft carrier ($13 billion).
          We fund the weapons that create trauma but not the treatment for the trauma they create.
        </p>
        <div className="bg-stone-900 text-white rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2">Moral Injury: The Wound That Won&apos;t Heal</p>
          <p className="text-stone-300 text-sm">
            &ldquo;Moral injury&rdquo; is a concept developed by VA psychiatrist Jonathan Shay to describe the
            damage done when soldiers are asked to do things that violate their moral code — kill civilians,
            follow unjust orders, watch atrocities without intervening. Unlike PTSD, which is a fear-based
            response to danger, moral injury is a <em>guilt-based</em> response to participation in immoral acts.
            Veterans with moral injury don&apos;t just feel afraid — they feel <em>ashamed</em>. They believe
            they are bad people for what they did. And that shame is what drives many to take their own lives.
          </p>
        </div>
        <p className="text-xs text-stone-500 mt-3"><Link href="/veteran-suicide" className="text-red-800 hover:underline">→ Veteran Suicide — full data and analysis</Link></p>
      </div>

      {/* PTSD and TBI */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">PTSD and Traumatic Brain Injury</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">PTSD: The Invisible Wound</h3>
            <p className="text-sm text-stone-700 mb-2">
              An estimated <strong>1.8 million US veterans</strong> live with post-traumatic stress disorder.
              Rates have escalated with each modern war:
            </p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• <strong>Vietnam:</strong> ~10% (often undiagnosed — PTSD not recognized until 1980)</li>
              <li>• <strong>Gulf War:</strong> ~12%</li>
              <li>• <strong>Iraq/Afghanistan:</strong> 11–29% depending on combat exposure</li>
            </ul>
            <p className="text-sm text-stone-700 mt-2">
              Many self-medicate with alcohol or drugs, leading to addiction, homelessness, and family breakdown.
              The divorce rate among combat veterans is significantly higher than the general population. Children
              of veterans with PTSD show higher rates of behavioral problems and secondary trauma.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">TBI: The Signature Wound</h3>
            <p className="text-sm text-stone-700 mb-2">
              Over <strong>530,000 post-9/11 service members</strong> have been diagnosed with traumatic brain
              injury, often from IED blasts. TBI is the &ldquo;signature wound&rdquo; of Iraq and Afghanistan.
              Many cases go undiagnosed — the true number may be far higher.
            </p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• Memory loss and cognitive impairment</li>
              <li>• Personality changes and emotional instability</li>
              <li>• Chronic headaches and sensitivity to light/sound</li>
              <li>• Depression and increased suicide risk</li>
              <li>• Early-onset dementia and CTE</li>
            </ul>
            <p className="text-sm text-stone-700 mt-2">
              Recent research links repeated blast exposure to Chronic Traumatic Encephalopathy (CTE) — the same
              brain disease found in NFL players. Veterans are developing dementia in their 40s and 50s.
            </p>
          </div>
        </div>
      </div>

      {/* Veteran homelessness */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Veteran Homelessness</h2>
        <p className="text-stone-700 mb-4">
          On any given night, over <strong>37,000 veterans</strong> are homeless in America. They served their
          country and now sleep under bridges, in shelters, or in their cars. The VA estimates <strong>1.4 million
          veterans</strong> are &ldquo;at risk&rdquo; of homelessness.
        </p>
        <p className="text-stone-700 mb-4">
          Contributing factors form a devastating chain: PTSD and TBI make civilian employment difficult.
          Substance abuse develops as self-medication. Relationships collapse. Financial stability disappears.
          The VA system is overwhelmed. And the society that sent them to war looks away.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm font-semibold text-blue-800 mb-1">💡 Did You Know?</p>
          <p className="text-sm text-stone-700">
            The US spends approximately <strong>$440 billion per year</strong> on the VA — and the system is still
            overwhelmed. Meanwhile, the annual military budget is <strong>$886 billion</strong>. We spend twice as
            much creating veterans as we do caring for them.
          </p>
        </div>
      </div>

      {/* Civilian death ratios */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Civilian Death Ratio: War&apos;s Dirty Secret</h2>
        <p className="text-stone-700 mb-4">
          The most disturbing trend in modern warfare: civilians make up an ever-larger share of casualties.
          In World War I, roughly 40% of deaths were civilian. By the time of the drone wars, that number
          approaches 90%.
        </p>
        <div className="space-y-3 mb-4">
          {civilianDeathRatios.map(c => (
            <div key={c.conflict} className="flex items-center gap-3">
              <span className="w-44 text-sm font-medium text-right shrink-0">{c.conflict}</span>
              <div className="flex-1 h-6 bg-stone-200 rounded-full overflow-hidden flex">
                <div className="h-full bg-red-600 flex items-center justify-center" style={{ width: c.civilian }}>
                  <span className="text-[10px] text-white font-bold">{c.civilian}</span>
                </div>
                <div className="h-full bg-stone-400 flex items-center justify-center" style={{ width: c.military }}>
                  <span className="text-[10px] text-white font-bold">{c.military}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 text-xs text-stone-500">
            <span className="w-44" />
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-600 rounded" /> Civilian</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-stone-400 rounded" /> Military</span>
            </div>
          </div>
        </div>
        <p className="text-stone-700">
          This trend reflects the shift from battlefield warfare to urban warfare, aerial bombing, counterinsurgency
          operations, and drone strikes. Modern war isn&apos;t fought between armies on fields — it&apos;s fought in
          cities, neighborhoods, and markets where civilians live and work. The people who pay the highest
          price are the people who had no say in starting the war.
        </p>
      </div>

      {/* Agent Orange */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">Agent Orange: Still Killing 50 Years Later</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">20M</p>
            <p className="text-xs text-muted">Gallons sprayed</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">3M+</p>
            <p className="text-xs text-muted">Vietnamese affected</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">150K+</p>
            <p className="text-xs text-muted">Birth defects</p>
          </div>
        </div>
        <p className="text-stone-700 mb-4">
          From 1961 to 1971, the US military sprayed <strong>20 million gallons of Agent Orange</strong> and other
          herbicides across Vietnam as part of Operation Ranch Hand — the largest chemical warfare campaign in
          history. The goal was defoliation: strip the jungle canopy to deny cover to the Viet Cong.
        </p>
        <p className="text-stone-700 mb-4">
          Agent Orange contained <strong>dioxin (TCDD)</strong> — one of the most toxic substances known to science.
          The contamination didn&apos;t end when the spraying stopped. Dioxin persists in soil and water for
          decades. It enters the food chain. It causes cancer, diabetes, heart disease, and — most devastatingly —
          birth defects that appear in children and grandchildren of those exposed.
        </p>
        <p className="text-stone-700 mb-4">
          An estimated <strong>3 million Vietnamese</strong> have been affected, including <strong>150,000 children
          born with birth defects</strong> — missing limbs, blindness, cognitive disabilities, organ deformities.
          In some areas of Vietnam, dioxin levels remain <strong>hundreds of times above safe limits</strong>
          more than 50 years after the last drop was sprayed.
        </p>
        <p className="text-stone-700 mb-4">
          The US has paid compensation to <strong>American veterans</strong> exposed to Agent Orange — eventually,
          after decades of denial. But it has provided only minimal assistance to Vietnamese victims. Dow Chemical
          and Monsanto (the manufacturers) settled with US veterans for $180 million in 1984 but have never
          compensated a single Vietnamese victim. The Vietnamese government&apos;s lawsuit was dismissed by US courts.
        </p>
        <p className="text-stone-700">
          American veterans are still dying from Agent Orange exposure. New conditions are being added to the
          VA&apos;s presumptive list as evidence accumulates. The last generation of Vietnam veterans is now
          in their 70s and 80s — and the dioxin is still killing them.
        </p>
      </div>

      {/* Depleted uranium */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Depleted Uranium: The Gift That Keeps Giving</h2>
        <p className="text-stone-700 mb-4">
          The US military has used depleted uranium (DU) munitions extensively in Iraq (1991 and 2003) and the
          Balkans. DU is 1.7× denser than lead, making it devastatingly effective at penetrating armor. It also
          leaves behind <strong>radioactive dust</strong> that contaminates soil and water for <em>billions</em> of years.
        </p>
        <p className="text-stone-700 mb-4">
          The consequences in Fallujah, Iraq, are staggering. Studies by researchers at the University of Michigan
          and peer-reviewed medical journals have found:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            { stat: '38×', label: 'Increase in leukemia rates' },
            { stat: '12×', label: 'Increase in childhood cancer' },
            { stat: '10×', label: 'Increase in birth defects' },
            { stat: '> Hiroshima', label: 'Congenital malformation rates exceed Hiroshima/Nagasaki survivors' },
          ].map(s => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-3 text-center border">
              <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.stat}</p>
              <p className="text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700 mb-4">
          Parents in Fallujah stopped asking &ldquo;is it a boy or a girl?&rdquo; and started asking
          &ldquo;is it normal?&rdquo; Doctors reported babies born with two heads, missing eyes, missing limbs,
          and organs outside their bodies. The Pentagon denies a connection between DU use and these health effects,
          despite peer-reviewed studies establishing a link.
        </p>
        <p className="text-stone-700">
          DU contamination doesn&apos;t just affect Iraq. US veterans who handled DU munitions report higher
          rates of cancer and birth defects in their children. A 2001 study of Gulf War veterans found uranium
          in their urine <strong>10 years after exposure</strong>. The VA has been slow to recognize DU-related
          conditions.
        </p>
      </div>

      {/* Medical costs */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Cost of Caring (or Not Caring)</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$300B+</p>
            <p className="text-xs text-muted">Annual VA healthcare spending</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$2.2T+</p>
            <p className="text-xs text-muted">Projected lifetime veteran care costs (War on Terror)</p>
          </div>
        </div>
        <p className="text-stone-700 mb-4">
          The Costs of War Project at Brown University estimates that long-term veteran healthcare and disability
          costs from the War on Terror will exceed <strong>$2.2 trillion</strong>. And the peak hasn&apos;t
          arrived yet — Vietnam-era VA costs peaked <strong>40 years after that war ended</strong>. The true
          cost of Iraq and Afghanistan won&apos;t be known until the 2060s.
        </p>
        <p className="text-stone-700">
          This is the cost America doesn&apos;t budget for. When Congress votes for war, it votes for the
          missiles and the deployment. It doesn&apos;t vote for the 50 years of VA care, prosthetics, mental
          health treatment, disability payments, and suicide prevention that follow. The human cost is an
          IOU written in blood, payable for generations.
        </p>
      </div>

      {/* Refugees */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">37 Million Displaced: The Invisible Victims</h2>
        <p className="text-stone-700 mb-4">
          The War on Terror has displaced an estimated <strong>37 million people</strong> — more than any conflict
          since World War II. These are people who lost everything: homes, livelihoods, communities, schools,
          hospitals. They fled with what they could carry and many will never return.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">Displacement by Country</p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• <strong>Syria:</strong> 13 million (half the population)</li>
              <li>• <strong>Iraq:</strong> 9.2 million</li>
              <li>• <strong>Afghanistan:</strong> 5.9 million</li>
              <li>• <strong>Yemen:</strong> 4.4 million</li>
              <li>• <strong>Somalia:</strong> 4.2 million</li>
              <li>• <strong>Libya, Pakistan, Philippines:</strong> millions more</li>
            </ul>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-red-600 uppercase mb-2">What Displacement Means</p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• Children out of school for years — a lost generation</li>
              <li>• Families separated, sometimes permanently</li>
              <li>• Refugees exploited by smugglers and traffickers</li>
              <li>• Host countries destabilized — fueling anti-immigrant politics</li>
              <li>• Entire cities destroyed — Mosul, Raqqa, Aleppo, Fallujah</li>
              <li>• Many displaced people will never return home</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700">
          These displaced people don&apos;t appear in casualty counts. Because they survived, they&apos;re not
          counted in the official toll. But they&apos;ve lost everything — and many live in refugee camps with
          no prospect of returning home, no legal status, no path forward. They are the invisible victims of
          wars fought in their name.
        </p>
      </div>

      {/* Burn Pits */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">Burn Pits: Poisoned by Their Own Military</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">3.5M</p>
            <p className="text-xs text-muted">Service members exposed</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">250+</p>
            <p className="text-xs text-muted">Burn pit sites (Iraq & Afghanistan)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">23</p>
            <p className="text-xs text-muted">Conditions covered by PACT Act</p>
          </div>
        </div>
        <p className="text-stone-700 mb-4">
          For over a decade, the US military&apos;s primary method of waste disposal at bases across Iraq
          and Afghanistan was to burn it in open-air pits. Everything went in: <strong>plastics, batteries,
          medical waste, human waste, chemicals, ammunition, paint, tires, pesticides, and electronics</strong>.
          The pits burned 24/7, creating toxic plumes that blanketed bases and surrounding areas.
        </p>
        <p className="text-stone-700 mb-4">
          Joint Base Balad in Iraq — nicknamed &ldquo;Camp Anaconda&rdquo; — operated a burn pit the size
          of <strong>10 acres</strong>, burning an estimated 147 tons of waste per day. Service members
          reported black smoke so thick they couldn&apos;t see across the base. They slept, ate, and
          exercised in this air. For months and years.
        </p>
        <p className="text-stone-700 mb-4">
          The health consequences have been devastating: rare cancers (glioblastoma, pancreatic cancer,
          lymphomas), constrictive bronchiolitis (permanent lung damage), autoimmune disorders, and
          neurological symptoms. Many veterans were in their 20s and 30s when diagnosed. The VA&apos;s
          burn pit registry has recorded over <strong>300,000 veterans</strong> reporting exposure.
        </p>
        <p className="text-stone-700 mb-4">
          The military knew the pits were toxic. A 2006 memo from the Air Force noted that burn pit
          emissions included &ldquo;ichlorodioxin, particulate matter, volatile organic compounds,
          carbon monoxide, hexachlorobenzene&rdquo; and other carcinogens. They used the pits anyway
          because they were cheap and convenient. Contractor KBR was paid billions to provide base
          services — and chose burn pits over incinerators to save money.
        </p>
        <p className="text-stone-700">
          The <strong>PACT Act of 2022</strong> — passed after comedian Jon Stewart publicly shamed
          Congress — finally expanded VA coverage for burn pit exposure. It was the largest expansion
          of veteran health benefits in decades. But thousands of veterans had already died waiting.
          The military that poisoned them spent years denying the connection.
        </p>
      </div>

      {/* Camp Lejeune */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Camp Lejeune: 30 Years of Poisoned Water</h2>
        <p className="text-stone-700 mb-4">
          From the 1950s through the 1980s, up to <strong>1 million Marines, their families, and civilian
          employees</strong> at Camp Lejeune, North Carolina were exposed to drinking water contaminated
          with industrial solvents, benzene, trichloroethylene (TCE), and other toxic chemicals — at levels
          <strong>240 to 3,400 times above safe limits</strong>.
        </p>
        <p className="text-stone-700 mb-4">
          The contamination came from leaking underground storage tanks, industrial spills, and an off-base
          dry cleaning company. The Marine Corps knew about the contamination as early as 1982 — and continued
          using the water supply until 1987. Internal documents show that Marine Corps officials were aware
          of the contamination and failed to act for years.
        </p>
        <p className="text-stone-700 mb-4">
          Health effects include: adult leukemia, aplastic anemia, bladder cancer, kidney cancer, liver
          cancer, multiple myeloma, non-Hodgkin lymphoma, Parkinson&apos;s disease, and birth defects
          in children conceived or born during the contamination period. Babies born at Camp Lejeune
          had elevated rates of spina bifida, cardiac defects, and childhood cancers.
        </p>
        <p className="text-stone-700">
          The <strong>Camp Lejeune Justice Act of 2022</strong> finally allowed victims to file lawsuits
          against the government — four decades after the contamination was discovered. As of 2025, over
          <strong>200,000 claims</strong> have been filed. Many of the original victims have already died.
        </p>
      </div>

      {/* Gulf War Syndrome */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Gulf War Syndrome: 35 Years of Denial</h2>
        <p className="text-stone-700 mb-4">
          Of the 700,000 US troops deployed to the 1991 Gulf War, an estimated <strong>250,000 — more than
          one in three</strong> — developed a cluster of chronic, unexplained symptoms collectively known as
          &ldquo;Gulf War Illness&rdquo;: chronic fatigue, joint pain, cognitive problems, gastrointestinal
          issues, skin rashes, and neurological symptoms.
        </p>
        <p className="text-stone-700 mb-4">
          For decades, the VA dismissed Gulf War Illness as psychosomatic — &ldquo;stress&rdquo; or
          &ldquo;unexplained illness.&rdquo; A landmark 2008 federal report by the Research Advisory
          Committee on Gulf War Veterans&apos; Illnesses finally concluded that the illness was
          <strong>real and likely caused by exposure to pyridostigmine bromide</strong> (anti-nerve-agent
          pills troops were ordered to take) and pesticides used extensively during the war. The report
          stated that &ldquo;the extensive body of scientific research now available consistently indicates
          that Gulf War illness is a real condition.&rdquo;
        </p>
        <p className="text-stone-700">
          Other suspected causes include exposure to depleted uranium, oil well fire smoke, multiple
          vaccinations given simultaneously, and low-level exposure to sarin nerve gas from the
          destruction of Iraqi munitions at Khamisiyah. Thirty-five years later, the exact mechanism
          remains debated — but the suffering of 250,000 veterans is undeniable.
        </p>
      </div>

      {/* Military Sexual Trauma */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Military Sexual Trauma</h2>
        <p className="text-stone-700 mb-4">
          Military Sexual Trauma (MST) — sexual assault or repeated sexual harassment during military
          service — is a widespread crisis the military has failed to address for decades:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            { stat: '1 in 3', label: 'Women veterans screened positive for MST', source: 'VA data' },
            { stat: '1 in 50', label: 'Men veterans screened positive for MST', source: 'VA data (likely underreported)' },
            { stat: '20,000+', label: 'Sexual assaults estimated annually in military', source: 'DOD SAPRO 2023' },
            { stat: '< 8%', label: 'Of reported cases result in conviction', source: 'DOD data' },
          ].map(s => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 border text-center">
              <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.stat}</p>
              <p className="text-sm font-medium">{s.label}</p>
              <p className="text-[10px] text-stone-400">{s.source}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700 mb-4">
          For decades, sexual assault cases in the military were handled within the chain of command —
          meaning victims had to report assaults to the same commanders who controlled their careers,
          their evaluations, and their daily lives. Retaliation was rampant: a 2019 DOD survey found
          that <strong>64% of women who reported sexual assault experienced retaliation</strong>.
        </p>
        <p className="text-stone-700 mb-4">
          Senator Kirsten Gillibrand fought for years to remove sexual assault prosecution from the
          chain of command. The reform finally passed in 2021 as part of the NDAA, establishing
          independent military prosecutors for sexual assault cases. But the cultural problem remains:
          the military&apos;s hierarchical structure, its emphasis on unit cohesion over individual
          rights, and the power imbalance inherent in the command structure create conditions where
          sexual violence thrives and accountability fails.
        </p>
        <p className="text-stone-700">
          MST is a leading cause of PTSD among women veterans and a significant factor in veteran
          suicide. Women veterans die by suicide at <strong>2.2 times the rate of civilian women</strong>.
          For many, the trauma they carry has nothing to do with combat — and everything to do with what
          their own comrades and commanders did to them.
        </p>
      </div>

      {/* War casualties by conflict */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">American War Dead by Conflict</h2>
        <p className="text-stone-500 text-sm mb-4">Every war produces a bill in human lives.</p>
        <div className="space-y-2">
          {[
            { war: 'Civil War (1861-1865)', dead: '620,000', bar: 100 },
            { war: 'World War II (1941-1945)', dead: '405,399', bar: 65 },
            { war: 'World War I (1917-1918)', dead: '116,516', bar: 19 },
            { war: 'Vietnam War (1955-1975)', dead: '58,220', bar: 9 },
            { war: 'Korean War (1950-1953)', dead: '36,574', bar: 6 },
            { war: 'Revolutionary War (1775-1783)', dead: '25,000', bar: 4 },
            { war: 'War of 1812 (1812-1815)', dead: '15,000', bar: 2 },
            { war: 'War on Terror (2001-present)', dead: '7,075', bar: 1 },
            { war: 'Spanish-American War (1898)', dead: '2,446', bar: 0.4 },
          ].map(w => (
            <div key={w.war} className="flex items-center gap-3">
              <span className="w-52 text-sm text-right shrink-0">{w.war}</span>
              <div className="flex-1 bg-stone-100 rounded-full h-5 overflow-hidden">
                <div className="h-full rounded-full bg-red-600" style={{ width: `${Math.max(w.bar, 1)}%` }} />
              </div>
              <span className="w-20 text-sm font-semibold text-right">{w.dead}</span>
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-4">
          Note: War on Terror combat deaths appear low compared to earlier wars because modern military
          medicine saves lives that would have been lost in earlier eras. However, the number of
          <strong> wounded</strong> is proportionally much higher (over 52,000), and veteran suicides
          (~130,000 since 2001) dwarf combat deaths. The nature of casualties has changed — fewer die
          on the battlefield, more die slowly at home.
        </p>
      </div>

      {/* The Libertarian Case */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-amber-800">The Libertarian Case: Every Life Has a Cost the State Ignores</h2>
        <p className="text-stone-700 mb-4">
          The human cost of war represents the ultimate failure of centralized government decision-making.
          A handful of people in Washington — the President, a few advisors, pliant members of Congress —
          make decisions that destroy millions of lives. The people who bear the consequences — soldiers,
          civilians, veterans, families — have no meaningful say in the decision.
        </p>
        <blockquote className="border-l-4 border-amber-700 pl-4 text-stone-600 italic mb-4">
          &ldquo;It is not the function of our Government to keep the citizen from falling into error; it
          is the function of the citizen to keep the Government from falling into error.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Justice Robert H. Jackson, Nuremberg prosecutor</span>
        </blockquote>
        <blockquote className="border-l-4 border-amber-700 pl-4 text-stone-600 italic mb-4">
          &ldquo;War is never economically beneficial except for those in position to profit from war
          expenditures.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Ron Paul</span>
        </blockquote>
        <p className="text-stone-700">
          From a liberty perspective, war is the health of the state. It expands government power,
          justifies surveillance and conscription, generates debt that future generations must pay,
          and — most fundamentally — treats human beings as expendable instruments of state policy.
          The veteran sleeping under a bridge, the child in Fallujah born with birth defects, the
          family in Yemen vaporized by a Hellfire missile — they are all products of a system that
          concentrates the power to destroy in the hands of the few while distributing the suffering
          to the many.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources &amp; Further Reading</h2>
        <div className="space-y-2 text-sm text-stone-600">
          <p>• <strong>VA National Suicide Prevention Annual Report</strong> — Primary source for veteran suicide data.</p>
          <p>• <strong>Costs of War Project</strong>, Watson Institute, Brown University — Casualty data, displacement data, veteran care cost projections.</p>
          <p>• <strong>Defense Casualty Analysis System (DCAS)</strong> — Official DOD casualty statistics for all US conflicts.</p>
          <p>• <strong>Iraq Body Count</strong> — Documented civilian deaths from violence in Iraq.</p>
          <p>• <strong>SIGAR</strong> — Special Inspector General for Afghanistan Reconstruction.</p>
          <p>• University of Michigan / Busby, Chris et al. — Studies on cancer and birth defect rates in Fallujah, Iraq.</p>
          <p>• <strong>ATSDR (Agency for Toxic Substances and Disease Registry)</strong> — Camp Lejeune contamination data.</p>
          <p>• <strong>DOD Sexual Assault Prevention and Response Office (SAPRO)</strong> — Annual reports on military sexual assault.</p>
          <p>• <strong>VA Burn Pit Registry</strong> — Self-reported exposure data from veterans.</p>
          <p>• Jon Stewart — Congressional testimony on burn pit legislation (2019, 2022). Available on C-SPAN.</p>
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• Since 2001, more veterans have died by <strong>suicide (130,000+)</strong> than in all post-9/11 combat operations (~7,000).</li>
          <li>• The US has spent more on <strong>air conditioning for troops</strong> in Iraq and Afghanistan than the entire VA mental health budget.</li>
          <li>• A single Tomahawk missile costs <strong>$2 million</strong>. A year of VA mental health treatment for one veteran costs about $8,000.</li>
          <li>• In Fallujah, birth defect rates <strong>exceed those of Hiroshima and Nagasaki</strong> — from a war fought over weapons of mass destruction that didn&apos;t exist.</li>
          <li>• The <strong>youngest</strong> Vietnam veterans are now in their late 60s. Agent Orange is still killing them.</li>
          <li>• There are more <strong>military recruiters</strong> in American high schools than college counselors in some states.</li>
          <li>• The US military is the <strong>single largest employer</strong> in the world — 3.4 million people, including active duty, reserves, and civilians.</li>
        </ul>
      </div>

      {/* Quotes */}
      <div className="space-y-6 mb-8">
        <div className="bg-stone-900 text-white rounded-xl p-6">
          <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
            &ldquo;Only the dead have seen the end of war.&rdquo;
          </blockquote>
          <p className="text-stone-400 mt-3">— Attributed to Plato (often misattributed to George Santayana)</p>
        </div>
        <div className="bg-stone-100 rounded-xl p-6 border">
          <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
            &ldquo;I am tired and sick of war. Its glory is all moonshine. It is only those who have neither
            fired a shot nor heard the shrieks and groans of the wounded who cry aloud for blood, for vengeance,
            for desolation. War is hell.&rdquo;
          </blockquote>
          <p className="text-muted mt-3">— General William Tecumseh Sherman, 1879</p>
        </div>
        <div className="bg-stone-900 text-white rounded-xl p-6">
          <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
            &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense,
            a theft from those who hunger and are not fed, those who are cold and are not clothed.&rdquo;
          </blockquote>
          <p className="text-stone-400 mt-3">— President Dwight D. Eisenhower, 1953</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-stone-300 mb-4">
          The human cost of war cannot be captured in numbers — but the numbers are staggering enough to demand
          attention. {fmt(stats.totalUSDeaths)} Americans killed. {(stats.totalCivilianDeaths / 1e6).toFixed(1)} million civilians dead. 17 veterans dying
          by suicide every day. 37 million people displaced. Children in Fallujah born with deformities. Children
          in Vietnam poisoned by Agent Orange sprayed before their parents were born.
        </p>
        <p className="text-stone-300 mb-4">
          These are not abstract statistics. Every one of them was a person — with a name, a family, a story, and
          a life that was cut short or irreparably damaged by decisions made in conference rooms thousands of miles
          away by people who would never bear the consequences.
        </p>
        <p className="text-white font-semibold text-lg">
          The next time someone talks about war as &ldquo;national security&rdquo; or &ldquo;strategic necessity,&rdquo;
          ask them: security for whom? At whose cost? And who pays the price when it&apos;s over?
        </p>
      </div>

      {/* Related */}
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/veteran-suicide" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Veteran Suicide →</h3>
          <p className="text-stone-500 text-sm">17 per day — the war after the war</p>
        </Link>
        <Link href="/casualties" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Casualty Data →</h3>
          <p className="text-stone-500 text-sm">Deaths by conflict, country, and year</p>
        </Link>
        <Link href="/analysis/drone-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Drone Wars →</h3>
          <p className="text-stone-500 text-sm">Remote-control killing and civilian casualties</p>
        </Link>
        <Link href="/analysis/war-on-terror" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The War on Terror →</h3>
          <p className="text-stone-500 text-sm">$8 trillion. 900,000+ dead. 37 million displaced.</p>
        </Link>
        <Link href="/analysis/blowback" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Blowback →</h3>
          <p className="text-stone-500 text-sm">How interventions create the next generation of victims</p>
        </Link>
        <Link href="/analysis/the-aftermath" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The Aftermath →</h3>
          <p className="text-stone-500 text-sm">Long-term costs that outlast the wars themselves</p>
        </Link>
      </div>

      <BackToTop />
    </div>
  )
}
