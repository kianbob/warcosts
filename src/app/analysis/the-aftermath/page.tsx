import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Aftermath — War Doesn\'t End When Troops Come Home | WarCosts',
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
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
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
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
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
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
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

      {/* The real cost */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
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
