import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Aftermath — War Doesn\'t End When Troops Come Home',
  description: 'Veteran care through 2050: $2.5 trillion. 17 veteran suicides per day. 500K+ with PTSD. 380K+ TBI. 3.5M exposed to burn pits. The true cost of war.',
  openGraph: {
    title: 'The Aftermath — War Doesn\'t End When Troops Come Home',
    description: '17 veteran suicides per day. $2.5 trillion in future care costs. The war after the war.',
    url: 'https://warcosts.org/analysis/the-aftermath',
    type: 'article',
  },
}

export default function AftermathPage() {
  const stats = loadData('stats.json')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Aftermath — War Doesn\'t End When Troops Come Home',
    description: 'The true long-term costs of war: veteran suicide, PTSD, TBI, burn pits, and a VA system that can\'t keep up.',
    author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-03-01',
    dateModified: '2026-03-01',
    mainEntityOfPage: 'https://warcosts.org/analysis/the-aftermath',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Aftermath' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Aftermath
        </h1>
        <p className="text-stone-400 text-lg">
          Wars don&apos;t end when the troops come home. For millions of veterans, the war never ends.
          The fighting stops, but the dying continues — 17 veterans every day, more than 6,000 a year,
          more than died in 20 years of combat in Afghanistan and Iraq combined.
        </p>
      </div>

      <ShareButtons title="The Aftermath — The True Long-Term Costs of War" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">17/day</p>
          <p className="text-muted text-sm">Veteran suicides</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">500K+</p>
          <p className="text-muted text-sm">Diagnosed with PTSD</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">380K+</p>
          <p className="text-muted text-sm">Traumatic brain injuries</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{fmtMoney(stats.veteranCareFutureCost)}</p>
          <p className="text-muted text-sm">Future care costs</p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <p className="text-lg">
          The fighting may stop, but the costs compound for decades. Veteran care for post-9/11 wars
          alone will cost an estimated <strong>{fmtMoney(stats.veteranCareFutureCost)} through 2050</strong>.
          The peak costs of caring for veterans historically come <strong>30-40 years after a conflict
          ends</strong>. We are still paying for Vietnam. We will be paying for Iraq and Afghanistan
          until 2070 and beyond.
        </p>
      </div>

      {/* Veteran Suicide Deep Dive */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Suicide Epidemic</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <p className="text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">17</p>
            <p className="text-stone-400">Veterans per day</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">6,200+</p>
            <p className="text-stone-400">Per year</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-red-500 font-[family-name:var(--font-heading)]">124,000+</p>
            <p className="text-stone-400">Since 9/11 (est.)</p>
          </div>
        </div>
        <div className="space-y-4 text-stone-300">
          <p>
            More veterans have died by suicide since 9/11 than died in 20 years of combat in Afghanistan
            and Iraq combined. That number bears repeating: <strong>more veterans killed themselves after
            coming home than were killed by the enemy</strong>.
          </p>
          <p>
            The VA&apos;s own data shows that veterans are 1.5 times more likely to die by suicide than
            non-veterans. For women veterans, the rate is 2.2 times higher. For veterans aged 18-34, the
            rate is devastating. Suicide is the #2 cause of death for post-9/11 veterans.
          </p>
          <p>
            The causes are complex: PTSD, traumatic brain injury, chronic pain, substance abuse, difficulty
            reintegrating into civilian life, moral injury, relationship breakdown. But the root cause is
            simple: we sent them to war and didn&apos;t take care of them when they came home.
          </p>
        </div>
      </div>

      <div className="bg-stone-100 rounded-xl p-6 my-8 border">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
          &ldquo;The willingness with which our young people are likely to serve in any war, no matter
          how justified, shall be directly proportional to how they perceive veterans of earlier wars
          were treated and appreciated by our nation.&rdquo;
        </blockquote>
        <p className="text-muted mt-3">— George Washington (attributed)</p>
      </div>

      {/* PTSD */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">PTSD: The Invisible Wound</h2>
        <p>
          Post-traumatic stress disorder affects an estimated <strong>500,000+ post-9/11 veterans</strong> —
          and that&apos;s only those who&apos;ve been diagnosed. The VA estimates that 29% of Iraq and
          Afghanistan veterans develop PTSD, compared to roughly 10% of Vietnam veterans (though Vietnam-era
          PTSD was likely vastly underdiagnosed).
        </p>
        <p>
          PTSD manifests as hypervigilance, nightmares, flashbacks, emotional numbness, difficulty maintaining
          relationships, explosive anger, and avoidance of anything that triggers memories. Veterans describe
          being unable to sit in restaurants with their backs to the door. Flinching at fireworks. Unable
          to sleep without the lights on. Checking the perimeter of their suburban homes.
        </p>
        <p>
          The VA treats roughly 700,000 PTSD patients annually. Wait times for mental health appointments
          average 36 days for new patients — and that&apos;s the official number. Many veterans report
          waiting months. Many others never seek treatment at all, either because of stigma, distrust of
          the system, or because they don&apos;t recognize their symptoms.
        </p>
      </div>

      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <blockquote className="italic text-stone-700 text-lg">
          &ldquo;I can&apos;t turn it off. I&apos;m still there. Every car backfire is an IED. Every
          crowd is an ambush. I came home three years ago but my brain never left Fallujah.&rdquo;
        </blockquote>
        <p className="text-muted text-sm mt-2">— Anonymous Iraq War veteran, 2023 VA survey</p>
      </div>

      {/* TBI */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">Traumatic Brain Injury: The Signature Wound</h2>
        <p>
          TBI has been called the &ldquo;signature wound&rdquo; of the Iraq and Afghanistan wars. The
          Defense Department reports <strong>380,000+ TBI diagnoses since 2000</strong> — more than any
          previous conflict. The prevalence is driven by IEDs (improvised explosive devices), which became
          the primary weapon against US forces.
        </p>
        <p>
          The blast wave from an IED can cause brain damage even without visible injury. Many service
          members experienced multiple blast exposures. The cumulative effect is devastating: chronic
          headaches, memory loss, difficulty concentrating, personality changes, depression, and increased
          risk of neurodegenerative diseases later in life, including early-onset dementia and CTE
          (chronic traumatic encephalopathy).
        </p>
        <p>
          When Iran fired ballistic missiles at US bases in Iraq in January 2020 — in retaliation for the
          Soleimani assassination — over 100 service members suffered TBI. President Trump initially
          dismissed the injuries as &ldquo;headaches.&rdquo; Many of those service members continue to
          suffer debilitating symptoms years later.
        </p>
      </div>

      {/* VA System */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The VA Healthcare System: Overwhelmed and Underfunded</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-stone-50 rounded-lg p-4 text-center border">
            <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">9.1M</p>
            <p className="text-muted text-sm">Veterans enrolled</p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4 text-center border">
            <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">$325B</p>
            <p className="text-muted text-sm">Annual budget</p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4 text-center border">
            <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">1.8M</p>
            <p className="text-muted text-sm">Disability claims (post-9/11)</p>
          </div>
        </div>
        <div className="prose prose-stone max-w-none">
          <p>
            The VA is the largest healthcare system in the United States, serving over 9 million veterans.
            It operates 1,298 healthcare facilities, including 171 medical centers. Its annual budget has
            grown from $73 billion in 2009 to over $325 billion today — and it&apos;s still not enough.
          </p>
          <p>
            In 2014, the VA waitlist scandal revealed that veterans were dying while waiting for appointments.
            At the Phoenix VA alone, at least 40 veterans died while on a secret waitlist. Investigations
            found that VA facilities across the country were falsifying data to hide wait times that
            stretched months or longer.
          </p>
          <p>
            Congress responded with the VA Mission Act, allowing veterans to seek private care. But the
            fundamental problem remains: we keep creating new veterans faster than we can care for the
            existing ones. Each new conflict adds decades of future obligations.
          </p>
        </div>
      </div>

      {/* Veteran Homelessness */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">Veteran Homelessness</h2>
        <p>
          On any given night in America, approximately <strong>37,000 veterans are homeless</strong>. They
          make up roughly 8% of all homeless adults, despite comprising only 6% of the population.
          Post-9/11 veterans are the fastest-growing segment of the homeless veteran population.
        </p>
        <p>
          The pathway from combat to homelessness is tragically predictable: PTSD and TBI make employment
          difficult. Substance abuse develops as self-medication. Relationships break down. The VA system
          is overwhelmed. Mental health services are inadequate. A veteran who was willing to die for
          their country ends up sleeping under a bridge because their country wasn&apos;t willing to
          care for them.
        </p>
      </div>

      <div className="bg-stone-100 rounded-xl p-6 my-8 border">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
          &ldquo;The soldier above all other people prays for peace, for he must suffer and bear the
          deepest wounds and scars of war.&rdquo;
        </blockquote>
        <p className="text-muted mt-3">— General Douglas MacArthur</p>
      </div>

      {/* Substance Abuse & Family Breakdown */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">Substance Abuse and Family Breakdown</h2>
        <p>
          An estimated <strong>1 in 10 post-9/11 veterans</strong> struggle with substance use disorder.
          Alcohol abuse rates are significantly higher among combat veterans. Opioid prescriptions for
          chronic pain — often from combat injuries — have contributed to addiction. Between 2001 and 2009,
          opioid prescriptions from VA physicians quadrupled.
        </p>
        <p>
          The toll on families is devastating. Divorce rates among post-9/11 veterans are significantly
          higher than the national average. Domestic violence rates are 2-3 times higher in military
          families than civilian families. Children of deployed parents show higher rates of anxiety,
          depression, and behavioral problems. The war comes home in ways that shatter households.
        </p>
      </div>

      {/* Moral Injury */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Moral Injury: The Wound That Doesn&apos;t Heal</h2>
        <div className="space-y-4 text-stone-300">
          <p>
            Beyond PTSD, researchers now recognize &ldquo;moral injury&rdquo; — the deep psychological
            damage from participating in, witnessing, or failing to prevent acts that violate one&apos;s
            moral beliefs. Unlike PTSD, which is a fear-based response, moral injury is a
            <em> shame-based</em> response. It&apos;s not &ldquo;I&apos;m afraid this will happen
            again&rdquo; — it&apos;s &ldquo;I did something unforgivable.&rdquo;
          </p>
          <p>
            Drone operators who kill from 7,000 miles away, then drive home to have dinner with their
            families. Soldiers who discover the &ldquo;enemy combatant&rdquo; they killed was a child.
            Marines who followed orders they knew were wrong. Medics who couldn&apos;t save their friends.
            Veterans who came home to realize the war they fought was based on lies.
          </p>
          <p>
            Moral injury doesn&apos;t respond well to traditional PTSD treatment. It&apos;s not a
            clinical disorder — it&apos;s an existential crisis. The veteran knows what they did. No
            amount of therapy can make them un-know it. Many veterans describe moral injury as worse
            than the physical wounds of combat.
          </p>
        </div>
      </div>

      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <blockquote className="italic text-stone-700 text-lg">
          &ldquo;I can deal with being shot at. I can deal with the nightmares. What I can&apos;t
          deal with is knowing that we destroyed a country for no reason, and I helped do it. That&apos;s
          what keeps me up at night. Not the fear — the guilt.&rdquo;
        </blockquote>
        <p className="text-muted text-sm mt-2">— Iraq War veteran, 2022 interview, Costs of War Project</p>
      </div>

      {/* Burn Pits */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">Burn Pits: Poisoned by Your Own Military</h2>
        <p>
          For over a decade, the US military disposed of waste in open-air &ldquo;burn pits&rdquo; at
          bases across Iraq and Afghanistan. Everything went in: plastics, batteries, medical waste,
          human waste, chemicals, ammunition, paint, pesticides. An estimated <strong>3.5 million
          service members</strong> were exposed to toxic fumes from these pits.
        </p>
        <p>
          The health consequences have been catastrophic: rare cancers, respiratory diseases,
          constrictive bronchiolitis, neurological symptoms, and autoimmune disorders. Veterans report
          chronic breathing problems, tumors, and cancers that appeared years after deployment. Many
          were in their 20s and 30s when diagnosed with cancers typically seen in the elderly.
        </p>
        <p>
          For years, the VA denied that burn pit exposure caused these conditions. Veterans filed claims
          and were rejected. They appealed and were rejected again. The military that poisoned them
          refused to acknowledge it.
        </p>
        <p>
          The <strong>PACT Act of 2022</strong> finally expanded VA healthcare eligibility for burn pit
          exposure, covering 23 conditions presumed to be related. It was the largest expansion of
          veteran healthcare in decades. But it came after thousands had already died — and after
          comedian Jon Stewart publicly shamed Congress into acting.
        </p>
      </div>

      <div className="bg-stone-100 rounded-xl p-6 my-8 border">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
          &ldquo;I&apos;m sick of having to explain to you the suffering our veterans endure because
          the powerful refuse to treat them with the respect and dignity they deserve. If this is the
          best America can do for its veterans, this ain&apos;t the America I believe in.&rdquo;
        </blockquote>
        <p className="text-muted mt-3">— Jon Stewart, testimony before Congress on burn pit legislation, 2022</p>
      </div>

      {/* Agent Orange / Gulf War / Lejeune */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Long Tail of Contamination</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-bold text-lg">Agent Orange — 50+ Years Later</h3>
            <p className="text-stone-600 mt-2">
              Between 1962 and 1971, the US military sprayed 20 million gallons of Agent Orange across
              Vietnam, Laos, and Cambodia. The herbicide contained dioxin — one of the most toxic
              substances known. Over 2.8 million US troops served in Vietnam. Hundreds of thousands
              developed cancers, diabetes, Parkinson&apos;s disease, and heart disease. Their children
              and grandchildren suffer elevated rates of birth defects <strong>three generations later</strong>.
              In Vietnam, an estimated 3 million people continue to suffer from Agent Orange exposure,
              including 150,000 children born with birth defects.
            </p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-bold text-lg">Gulf War Syndrome</h3>
            <p className="text-stone-600 mt-2">
              Up to 250,000 of the 700,000 US troops deployed in the 1991 Gulf War developed a cluster
              of unexplained symptoms: chronic fatigue, joint pain, cognitive problems, gastrointestinal
              issues. For decades, the VA dismissed &ldquo;Gulf War Illness&rdquo; as psychosomatic. A 2008
              federal report finally confirmed it was real, likely caused by exposure to pesticides and
              anti-nerve-agent pills troops were ordered to take. Thirty-five years later, many are still sick.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-lg">Camp Lejeune Water Contamination</h3>
            <p className="text-stone-600 mt-2">
              From the 1950s through the 1980s, up to 1 million Marines and family members at Camp
              Lejeune, North Carolina were exposed to drinking water contaminated with industrial solvents,
              benzene, and other toxic chemicals — at levels 240 to 3,400 times above safe limits. The
              contamination caused cancers, birth defects, and neurological damage. The Marine Corps knew
              about the contamination for years before acting. The Camp Lejeune Justice Act of 2022 finally
              allowed victims to file claims — four decades after the exposure.
            </p>
          </div>
        </div>
      </div>

      {/* Broken promises */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Broken Promises: What They Said vs. What Happened</h2>
        <p className="text-stone-700 mb-4">
          Every war begins with promises. Every aftermath reveals them as lies:
        </p>
        <div className="space-y-3 mb-4">
          {[
            { promise: '"The war will pay for itself through Iraqi oil revenues."', who: 'Deputy Secretary Paul Wolfowitz, 2003', reality: 'Cost: $2.4 trillion. Iraqi oil revenue covered a tiny fraction. American taxpayers paid for everything.' },
            { promise: '"We will be greeted as liberators."', who: 'Vice President Dick Cheney, 2003', reality: 'Insurgency within months. Civil war by 2006. 300,000+ Iraqi civilians killed.' },
            { promise: '"Weeks, not months."', who: 'Secretary Donald Rumsfeld, on the Iraq War timeline', reality: '20+ years. US troops still in Iraq in 2025.' },
            { promise: '"Mission Accomplished."', who: 'Banner on USS Abraham Lincoln, May 2003', reality: '4,431 of the 4,599 US deaths in Iraq occurred after the "Mission Accomplished" declaration.' },
            { promise: '"We will rebuild Afghanistan into a stable democracy."', who: 'Multiple administrations, 2001-2021', reality: 'Taliban returned to power in 11 days. Girls banned from school. Humanitarian crisis.' },
            { promise: '"The Afghan security forces are capable of defending their country."', who: 'Pentagon assessments through 2021', reality: '300,000 troops (on paper) collapsed in 11 days. $83B in equipment abandoned.' },
            { promise: '"We\'re turning the corner in Afghanistan."', who: 'Said by officials in 2003, 2005, 2007, 2009, 2011, 2013, 2015, 2017, 2019', reality: 'The Afghanistan Papers revealed officials knew they were losing throughout.' },
          ].map(p => (
            <div key={p.promise} className="bg-stone-50 rounded-lg p-4">
              <p className="text-sm italic text-stone-700">{p.promise}</p>
              <p className="text-xs text-stone-500">— {p.who}</p>
              <p className="text-xs text-red-600 mt-1"><strong>Reality:</strong> {p.reality}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Political instability after intervention */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Political Instability: War Exports Chaos</h2>
        <p className="text-stone-700 mb-4">
          The aftermath of war doesn&apos;t stay in the war zone. It radiates outward, destabilizing entire
          regions and reshaping the politics of distant countries:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">The Syrian Refugee Crisis → European Far-Right</h3>
            <p className="text-sm text-stone-700">
              The US-involved Syrian conflict produced 6.8 million refugees. Millions fled to Europe, triggering
              the 2015 migration crisis. This fueled the rise of far-right, anti-immigrant parties across Europe:
              Brexit in the UK. Le Pen in France. AfD in Germany. Orbán in Hungary. The Meloni government in Italy.
              The political map of Europe was redrawn by the aftermath of a war in which the US armed rebels,
              bombed ISIS, and refused to accept significant numbers of the resulting refugees.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Libyan Weapons → Sahel Insurgencies</h3>
            <p className="text-sm text-stone-700">
              After the 2011 NATO bombing of Libya, Gaddafi&apos;s massive weapons stockpiles — including
              anti-aircraft missiles, RPGs, and heavy weapons — flooded across the Sahel. These weapons
              fueled insurgencies in Mali (2012 coup), Niger, Burkina Faso, and Nigeria (Boko Haram). France
              deployed troops. The US deployed special operations forces. An entirely new theater of the
              War on Terror was created by the aftermath of the previous intervention.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Iraq → Iran&apos;s Regional Dominance</h3>
            <p className="text-sm text-stone-700">
              The invasion of Iraq removed Iran&apos;s primary regional enemy (Saddam) and installed a
              Shia-majority government aligned with Tehran. Iran now exerts enormous influence over Iraq&apos;s
              government, military, and economy — through militias, political parties, and economic ties.
              The US spent $2.4 trillion and over 4,500 American lives to hand Iraq to the very country
              it was supposedly containing.
            </p>
          </div>
        </div>
      </div>

      {/* The pattern */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Pattern: Expose, Deny, Delay, Concede</h2>
        <p>
          The government&apos;s response to veteran health crises follows a depressingly consistent pattern:
        </p>
        <ol>
          <li><strong>Expose:</strong> Service members are exposed to toxic substances during their service</li>
          <li><strong>Deny:</strong> When veterans get sick, the government denies any connection to their service</li>
          <li><strong>Delay:</strong> For years or decades, veterans fight for recognition and treatment while dying</li>
          <li><strong>Concede:</strong> Eventually, after enough veterans have died and enough public pressure builds, the government acknowledges responsibility — and the cycle begins again with the next generation</li>
        </ol>
        <p>
          Agent Orange: 40 years from exposure to full recognition. Gulf War Syndrome: 17 years. Burn pits:
          20 years. Camp Lejeune: 40 years. The pattern never changes because the incentive structure never
          changes. Acknowledging harm means paying for it. So the government delays until enough veterans
          have died that the cost is reduced.
        </p>
      </div>

      {/* Reconstruction costs */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Reconstruction: Breaking It Is Cheaper Than Fixing It</h2>
        <p className="text-stone-700 mb-4">
          The cost of destroying a country is always dwarfed by the cost of rebuilding it — and the US has a
          dismal track record of following through on reconstruction promises:
        </p>
        <div className="space-y-3 mb-4">
          {[
            { country: 'Iraq', destroy: '$2.4T', rebuild: '$220B attempted', result: 'Much of Iraq\'s infrastructure still worse than pre-invasion. ISIS destroyed what was rebuilt. Electricity still inconsistent in much of the country. 2.8M remain internally displaced.' },
            { country: 'Afghanistan', destroy: '$2.3T', rebuild: '$145B attempted', result: 'SIGAR documented systematic waste. Taliban inherited or destroyed most infrastructure. Girls banned from school again. Country now in humanitarian crisis.' },
            { country: 'Libya', destroy: '$1.1B (NATO campaign)', rebuild: '~$0', result: 'No reconstruction plan. Failed state. Two rival governments. Open-air slave markets. Weapons flowed across the Sahel. Obama called it his "worst mistake."' },
            { country: 'Vietnam', destroy: '$1T (adjusted)', rebuild: 'Minimal', result: 'Agent Orange still killing 50 years later. 3 million Vietnamese affected. US has spent ~$400M on cleanup — for $1 trillion in destruction.' },
          ].map(c => (
            <div key={c.country} className="bg-stone-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bold text-primary">{c.country}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">Spent: {c.destroy}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">Rebuild: {c.rebuild}</span>
              </div>
              <p className="text-sm text-stone-600">{c.result}</p>
            </div>
          ))}
        </div>
        <blockquote className="border-l-4 border-red-700 pl-4 text-stone-600 italic">
          &ldquo;You break it, you own it.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Secretary of State Colin Powell to President Bush before the Iraq invasion (the &ldquo;Pottery Barn rule&rdquo;). America broke it. Then walked away.</span>
        </blockquote>
      </div>

      {/* Refugee crises */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Refugee Crises: The People Who Have to Leave</h2>
        <p className="text-stone-700 mb-4">
          The War on Terror has displaced an estimated <strong>38 million people</strong> — more than any
          conflict since World War II. These are people who lost homes, livelihoods, communities, and futures:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            { country: 'Syria', displaced: '13 million', pct: '~60% of population', note: 'Half fled the country entirely. Largest refugee crisis in 21st century. Triggered European migration crisis → far-right politics.' },
            { country: 'Iraq', displaced: '9.2 million', pct: '~23% of population', note: 'Multiple waves: 2003 invasion, 2006 civil war, 2014 ISIS, 2016 Mosul battle. 2.8M still internally displaced.' },
            { country: 'Afghanistan', displaced: '5.9 million', pct: '~15% of population', note: 'Decades of displacement. 2021 Taliban takeover triggered new wave. Many interpreters/allies stranded.' },
            { country: 'Yemen', displaced: '4.4 million', pct: '~14% of population', note: 'US-backed Saudi bombing campaign. "World\'s worst humanitarian crisis" per UN.' },
            { country: 'Somalia', displaced: '4.2 million', pct: '~25% of population', note: '30+ years of instability. Climate change + conflict. Many in refugee camps for decades.' },
            { country: 'Pakistan', displaced: '3.7 million', pct: 'Tribal areas devastated', note: 'Military operations in FATA. Drone strikes. Millions displaced from ancestral lands.' },
          ].map(c => (
            <div key={c.country} className="bg-stone-50 rounded-lg p-4 border">
              <p className="font-bold text-primary">{c.country}: <span className="text-red-700">{c.displaced}</span></p>
              <p className="text-xs text-stone-500">{c.pct}</p>
              <p className="text-sm text-stone-600 mt-1">{c.note}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700">
          These millions of displaced people don&apos;t appear in casualty counts. They survived — but lost
          everything. Many live in refugee camps with no prospect of returning home, no legal status, no
          education for their children, and no path forward. They are the invisible cost of war — unseen
          because they are still alive, uncounted because they are not dead.
        </p>
      </div>

      {/* Environmental devastation */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Environmental Devastation: Wars That Poison the Land</h2>
        <p className="text-stone-700 mb-4">
          War doesn&apos;t just kill people — it poisons the environment for generations:
        </p>
        <div className="space-y-4 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Depleted Uranium (Iraq, Balkans)</h3>
            <p className="text-sm text-stone-700">
              The US fired <strong>300+ tons of depleted uranium munitions</strong> in Iraq in 1991 and
              2003. DU remains radioactive for <strong>4.5 billion years</strong>. Cancer and birth defect
              rates in Fallujah, Basra, and other heavily bombarded areas exceed those of Hiroshima and
              Nagasaki survivors. The contamination is permanent.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Agent Orange (Vietnam, Laos, Cambodia)</h3>
            <p className="text-sm text-stone-700">
              20 million gallons sprayed. 3 million Vietnamese affected. 150,000+ children born with birth
              defects. Dioxin persists in soil and water supply 50+ years later. Cleanup began in 2012 —
              41 years after spraying ended.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Unexploded Ordnance (Laos, Vietnam, Cambodia, Iraq)</h3>
            <p className="text-sm text-stone-700">
              <strong>Laos</strong> is the most heavily bombed country per capita in history. The US dropped
              <strong>2 million tons of bombs</strong> from 1964-1973 — more than was dropped on Germany and
              Japan in WWII combined. Up to 30% failed to detonate. An estimated <strong>80 million cluster
              bomblets</strong> remain in Laos. They continue to kill approximately 50 people per year —
              52 years after the bombing ended. Many victims are children who mistake the bomblets for toys.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Kuwait Oil Fires (1991)</h3>
            <p className="text-sm text-stone-700">
              Iraqi forces set fire to over <strong>600 oil wells</strong> during the Gulf War. The fires
              burned for 10 months, releasing massive quantities of toxic smoke, soot, and pollutants. The
              environmental damage affected air quality across the region. Veterans exposed to the smoke
              report chronic respiratory problems decades later.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">The Pentagon&apos;s Carbon Footprint</h3>
            <p className="text-sm text-stone-700">
              The US military is the <strong>single largest institutional consumer of fossil fuels</strong> on
              Earth. If the DOD were a country, it would be the 47th largest carbon emitter in the world — more
              than 140 individual nations. Military operations in Iraq and Afghanistan burned through billions
              of gallons of jet fuel.
            </p>
          </div>
        </div>
      </div>

      {/* Generational trauma */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Generational Trauma: The Wound That Passes Down</h2>
        <p className="text-stone-700 mb-4">
          War trauma doesn&apos;t end with the individual. It passes through generations — through behavior,
          through biology, and through the destruction of social structures:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Children of Veterans</h3>
            <p className="text-sm text-stone-700">
              Children of veterans with PTSD show higher rates of anxiety, depression, behavioral problems,
              and secondary traumatization. Studies of Vietnam veterans&apos; children found elevated rates
              of psychological distress lasting decades. Post-9/11 veterans&apos; children show similar patterns.
              The war comes home through the parent who can&apos;t sleep, who erupts in anger, who self-medicates.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Epigenetic Transmission</h3>
            <p className="text-sm text-stone-700">
              Emerging research suggests trauma can be transmitted <strong>epigenetically</strong> — through
              changes in gene expression that pass from parent to child. Studies of Holocaust survivors&apos;
              children found altered cortisol levels. Research on Agent Orange-exposed veterans found elevated
              rates of birth defects and health problems in their children and grandchildren — even those
              conceived after exposure.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">War Zone Children</h3>
            <p className="text-sm text-stone-700">
              An estimated <strong>14 million children</strong> in Syria, Iraq, Yemen, and Afghanistan have been
              directly affected by conflict — displaced from homes, separated from parents, exposed to violence,
              denied education. Many show symptoms of PTSD, anxiety, and depression. This is a lost generation
              whose psychological scars will shape the politics and stability of the region for decades.
            </p>
          </div>
        </div>
      </div>

      {/* Failed states */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Failed States: What America Leaves Behind</h2>
        <p className="text-stone-700 mb-4">
          The aftermath of US military intervention consistently produces failed or failing states:
        </p>
        <div className="space-y-3 mb-4">
          {[
            { country: 'Libya (2011→)', status: 'Two rival governments. Militias control territory. Open-air slave markets. Arms trafficking hub. Ranked among world\'s most fragile states.' },
            { country: 'Iraq (2003→)', status: 'Sectarian government. Iranian influence dominant. ISIS devastated the north. Corruption endemic. Millions displaced. Infrastructure still damaged.' },
            { country: 'Afghanistan (2001→2021)', status: 'Taliban returned to power. Girls banned from school. Economic collapse. Humanitarian crisis. $83B in US equipment abandoned.' },
            { country: 'Somalia (1992→)', status: 'Al-Shabaab controls large areas. Famine recurring. No effective central government for 30+ years. Ranked #1 on Failed States Index.' },
            { country: 'Yemen (2015→)', status: '"World\'s worst humanitarian crisis." 150,000+ dead. 4.4M displaced. Cholera outbreaks. Famine. US-backed Saudi bombing continues.' },
          ].map(c => (
            <div key={c.country} className="border-l-4 border-red-200 pl-4">
              <p className="font-semibold text-primary">{c.country}</p>
              <p className="text-sm text-stone-600">{c.status}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700">
          The pattern: the US intervenes, removes a regime, provides no viable alternative, and leaves behind
          a power vacuum that is filled by extremists, warlords, or rival governments. The failed state then
          becomes a new &ldquo;threat&rdquo; that justifies continued intervention. It is a self-perpetuating
          cycle of destruction that has never, in any case, produced the stable democratic outcome promised.
        </p>
      </div>

      {/* Economic impacts on war zones */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Economic Destruction: Decades of Lost Development</h2>
        <p className="text-stone-700 mb-4">
          War doesn&apos;t just destroy buildings — it destroys economies for generations:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            { stat: '-40%', label: 'Average GDP decline during major conflict', source: 'World Bank' },
            { stat: '20 years', label: 'Average time to return to pre-war GDP', source: 'IMF analysis' },
            { stat: '80%', label: 'Of Iraq\'s industrial infrastructure destroyed by 2006', source: 'UNDP' },
            { stat: '$400B', label: 'Syria\'s GDP loss (2011-2023)', source: 'World Bank' },
          ].map(s => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border">
              <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.stat}</p>
              <p className="text-sm font-medium">{s.label}</p>
              <p className="text-[10px] text-stone-400">{s.source}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700">
          Iraq&apos;s GDP per capita was <strong>$3,600 in 2002</strong> (pre-invasion). By 2007, it had fallen
          to $1,900. It didn&apos;t recover to pre-invasion levels until 2013 — a decade lost. Syria&apos;s
          economy contracted by <strong>60%</strong> during the civil war. Afghanistan&apos;s GDP collapsed
          after the Taliban takeover. These aren&apos;t abstract numbers — they represent closed businesses,
          lost livelihoods, children who couldn&apos;t afford school, and families who couldn&apos;t afford food.
        </p>
      </div>

      {/* The Libertarian Case */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-amber-800">The Libertarian Case: Count the Full Cost Before You Start</h2>
        <p className="text-stone-700 mb-4">
          War is the single most destructive thing a government can do — to its own citizens, to foreign
          populations, to economies, to the environment, and to the constitutional order itself. The aftermath
          proves this in every case:
        </p>
        <blockquote className="border-l-4 border-amber-700 pl-4 text-stone-600 italic mb-4">
          &ldquo;When you go to war, you don&apos;t just pay the cost of the bombs. You pay the cost for
          50 years of veteran care, 50 years of debt interest, and 50 years of blowback. The politicians
          who start wars will be long gone. The bill is paid by people who weren&apos;t born yet.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Ron Paul</span>
        </blockquote>
        <p className="text-stone-700 mb-4">
          Libertarians argue that war should be an absolute last resort — defensive only — because the
          full cost can never be accurately predicted, always exceeds estimates, and falls on people who
          had no say in the decision. The $8 trillion War on Terror was launched with estimates of $50-200
          billion. The Iraq War was promised to &ldquo;pay for itself&rdquo; through oil revenue. Every
          cost estimate was wrong by orders of magnitude.
        </p>
        <p className="text-stone-700">
          If the full cost of war — including 50 years of veteran care, interest on war debt, reconstruction,
          blowback, and the economic destruction inflicted on target countries — were calculated and presented
          to the public before the first bomb dropped, democratic support for most wars would evaporate. That&apos;s
          precisely why it&apos;s never done.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources &amp; Further Reading</h2>
        <div className="space-y-2 text-sm text-stone-600">
          <p>• <strong>Costs of War Project</strong>, Watson Institute — Veteran care costs, displacement data, long-term cost projections.</p>
          <p>• <strong>VA National Suicide Prevention Annual Report</strong> — Published annually with veteran suicide data.</p>
          <p>• <strong>SIGAR</strong> — Special Inspector General for Afghanistan Reconstruction. Quarterly and final reports.</p>
          <p>• <strong>World Bank</strong> — Country-level economic impact assessments for conflict-affected nations.</p>
          <p>• <strong>UNHCR</strong> — Global displacement data and refugee statistics.</p>
          <p>• Stiglitz, Joseph & Bilmes, Linda — <em>The Three Trillion Dollar War</em> (2008). Long-term cost analysis.</p>
          <p>• <strong>Legacies of War</strong> — UXO data for Laos. <Link href="https://legaciesofwar.org" className="text-red-800 hover:underline">legaciesofwar.org</Link></p>
          <p>• <strong>ATSDR</strong> — Toxic exposure data for military bases and conflict zones.</p>
          <p>• Ron Paul — <em>Swords into Plowshares</em> (2015). The full cost of war from a libertarian perspective.</p>
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• <strong>More veterans have died by suicide since 9/11</strong> (~124,000) than were killed in combat in Afghanistan, Iraq, and all other post-9/11 operations combined (~7,075).</li>
          <li>• The peak cost of caring for veterans historically comes <strong>30-40 years after a conflict</strong>. VA spending on WWI veterans peaked in 1969. WWII veterans peaked in 1986. Vietnam is peaking now.</li>
          <li>• <strong>3.5 million service members</strong> were exposed to burn pit toxins. The military knew the pits were toxic and used them anyway because they were cheap and convenient.</li>
          <li>• Agent Orange continues to cause birth defects in Vietnamese children — <strong>three generations</strong> after the spraying ended.</li>
          <li>• The VA&apos;s disability claims backlog regularly exceeds <strong>200,000+ claims</strong> waiting more than 125 days for a decision.</li>
          <li>• Women veterans die by suicide at <strong>2.2 times</strong> the rate of civilian women — and are the fastest-growing segment of the veteran population.</li>
          <li>• An estimated <strong>37,000 veterans</strong> are homeless on any given night. The nation that asks them to die for it can&apos;t house them.</li>
          <li>• Jon Stewart&apos;s viral testimony before Congress in 2022 is widely credited with shaming legislators into passing the PACT Act for burn pit victims.</li>
        </ul>
      </div>

      {/* The debt burden */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Debt Burden: Wars Paid For With Borrowed Money</h2>
        <p className="text-stone-700 mb-4">
          Unlike World War II — which was partly funded through war bonds, tax increases, and rationing —
          the post-9/11 wars have been funded <strong>entirely through borrowing</strong>. The Bush
          administration cut taxes <em>while</em> launching two wars — the first time in American history
          a president reduced taxes during wartime.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {[
            { stat: '$1.1T+', label: 'Interest paid on war borrowing to date', source: 'Costs of War Project' },
            { stat: '$6.5T', label: 'Projected interest payments through 2050', source: 'Watson Institute' },
            { stat: '~$0', label: 'War taxes imposed on current generation', source: 'All costs pushed to future taxpayers' },
          ].map(s => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border">
              <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.stat}</p>
              <p className="text-sm font-medium">{s.label}</p>
              <p className="text-[10px] text-stone-400">{s.source}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700 mb-4">
          The interest on war borrowing alone — <strong>$1.1 trillion already, $6.5 trillion projected</strong> —
          will eventually exceed the direct cost of the wars themselves. Future generations will be paying
          interest on wars that were fought before they were born, for objectives that were never achieved,
          based on intelligence that was wrong.
        </p>
        <blockquote className="border-l-4 border-red-700 pl-4 text-stone-600 italic">
          &ldquo;It is incumbent on every generation to pay its own debts as it goes. A principle which if
          acted on, would save one-half the wars of the world.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— Thomas Jefferson, 1820</span>
        </blockquote>
      </div>

      {/* The veteran care timeline */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The 50-Year Tail: Why War Costs Keep Growing</h2>
        <p className="text-stone-700 mb-4">
          The long-term cost pattern of veteran care follows a predictable but devastating timeline:
        </p>
        <div className="space-y-2 mb-4">
          {[
            { war: 'World War I (1917-1918)', peak: 'VA costs peaked in 1969 — 51 years later', note: 'Last WWI veteran died in 2011, age 110' },
            { war: 'World War II (1941-1945)', peak: 'VA costs peaked in 1986 — 41 years later', note: 'WWII veterans still receiving VA care into the 2020s' },
            { war: 'Korean War (1950-1953)', peak: 'Costs peaked ~1995', note: 'Korean War veterans average age: 88' },
            { war: 'Vietnam War (1955-1975)', peak: 'VA costs peaking NOW', note: 'Agent Orange claims still growing. 6 million Vietnam-era vets still alive' },
            { war: 'Gulf War (1990-1991)', peak: 'Gulf War Illness costs still rising', note: '250,000 affected. Recognition delayed decades.' },
            { war: 'War on Terror (2001-present)', peak: 'Peak costs projected: 2050s-2060s', note: 'Youngest veterans won\'t reach peak care needs for 30+ years' },
          ].map(w => (
            <div key={w.war} className="flex gap-3 border-b border-stone-100 pb-2">
              <div className="flex-1">
                <p className="text-sm font-semibold">{w.war}</p>
                <p className="text-xs text-red-600">{w.peak}</p>
                <p className="text-[10px] text-stone-400">{w.note}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-stone-700">
          The pattern is clear and inescapable: <strong>the peak cost of caring for veterans comes 30-50 years
          after a war ends</strong>. War on Terror veterans are currently in their 20s through 50s. Their
          healthcare needs — PTSD treatment, TBI management, prosthetics, chronic pain, cancer screening for
          burn pit exposure — will increase as they age. The true cost of Iraq and Afghanistan won&apos;t be
          known until the 2060s. America won&apos;t stop paying for these wars until the last veteran dies,
          likely around 2090.
        </p>
      </div>

      {/* What other countries got wrong */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Lessons Never Learned: The Same Mistakes, Every Time</h2>
        <p className="text-stone-700 mb-4">
          The British Empire learned in Afghanistan. The Soviet Union learned in Afghanistan. The US
          refused to learn:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Britain: 3 Afghan Wars (1839, 1878, 1919)</h3>
            <p className="text-sm text-stone-700">
              Britain invaded Afghanistan three times, losing each time. The First Anglo-Afghan War (1839-1842)
              resulted in the destruction of an entire British army — 16,500 soldiers and camp followers.
              One survivor reached Jalalabad. Britain eventually concluded that Afghanistan could not be
              conquered. America did not read the memo.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">Soviet Union: Afghanistan (1979-1989)</h3>
            <p className="text-sm text-stone-700">
              The Soviet Union spent 10 years in Afghanistan, lost 15,000 soldiers, killed approximately
              1.5 million Afghans, and withdrew in defeat. The experience contributed to the collapse of
              the Soviet Union itself. American officials who witnessed the Soviet debacle then repeated
              it — with a 20-year war that produced the same result: withdrawal, Taliban victory, nothing
              accomplished.
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-1">France: Indochina → America: Vietnam</h3>
            <p className="text-sm text-stone-700">
              France fought and lost in Indochina (1946-1954). The decisive defeat at Dien Bien Phu led to
              French withdrawal. America immediately stepped in, eventually committing 536,000 troops and
              losing 58,220 Americans in a war that ended in the same result: communist victory. The US
              learned nothing from France&apos;s experience.
            </p>
          </div>
        </div>
        <blockquote className="border-l-4 border-red-700 pl-4 text-stone-600 italic">
          &ldquo;Those who cannot remember the past are condemned to repeat it.&rdquo;
          <span className="block text-sm text-stone-500 mt-1 not-italic">— George Santayana</span>
        </blockquote>
      </div>

      {/* The real cost */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Real Cost of War</h2>
        <div className="space-y-4 text-stone-300">
          <p>
            When politicians debate the cost of war, they talk about appropriations bills and defense budgets.
            They rarely talk about the 40-year tail of veteran care. They never talk about the marriages that
            end, the children who grow up without a functioning parent, the communities that lose their
            best and brightest to suicide and addiction.
          </p>
          <p>
            The {fmtMoney(stats.veteranCareFutureCost)} in projected veteran care costs through 2050 is a
            number. Behind that number are millions of individual human tragedies — each one preventable, if
            we had chosen not to send them to war, or if we had taken care of them when they came home.
          </p>
          <p>
            We did neither.
          </p>
        </div>
      </div>

      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <blockquote className="italic text-stone-700 text-lg">
          &ldquo;In war, there are no unwounded soldiers.&rdquo;
        </blockquote>
        <p className="text-muted text-sm mt-2">— José Narosky</p>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <Link href="/veteran-suicide" className="text-red-800 hover:underline block">→ Veteran Suicide — the crisis in detail</Link>
          <Link href="/analysis/human-cost" className="text-red-800 hover:underline block">→ The Human Cost of War</Link>
          <Link href="/casualties" className="text-red-800 hover:underline block">→ Full casualty data by conflict</Link>
          <Link href="/analysis/iran-2026" className="text-red-800 hover:underline block">→ Iran 2026 — the next generation of veterans</Link>
          <Link href="/analysis/forever-wars" className="text-red-800 hover:underline block">→ The Forever Wars — why they never end</Link>
          <Link href="/tools/tax-receipt" className="text-red-800 hover:underline block">→ Your War Tax Receipt</Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
