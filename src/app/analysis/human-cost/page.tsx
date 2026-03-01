import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'The Human Cost of War — Beyond the Numbers | WarCosts',
  description: 'Over 1 million Americans killed, 5.2 million civilians dead, 17 veterans commit suicide daily. The human cost of American wars.',
}

export default function HumanCostPage() {
  const stats = loadData('stats.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Human Cost' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">The Human Cost</h1>
      <p className="text-muted mb-6">Every number on this page was a person with a name, a family, and a life. Behind every statistic is someone who will never come home.</p>
      <ShareButtons title="The Human Cost of War" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {[
          { val: fmt(stats.totalUSDeaths), label: 'Americans Killed in War' },
          { val: `${(stats.totalCivilianDeaths/1e6).toFixed(1)}M+`, label: 'Civilians Killed' },
          { val: '17/day', label: 'Veteran Suicides' },
          { val: '38M', label: 'War on Terror Displaced' },
          { val: '1.8M', label: 'US Veterans with PTSD' },
          { val: '530K', label: 'Post-9/11 Veterans with TBI' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-stone max-w-none">
        {/* Vignettes */}
        <h2 className="font-[family-name:var(--font-heading)]">Faces Behind the Numbers</h2>
        <div className="not-prose space-y-4 my-6">
          {[
            { story: 'A 22-year-old Marine from Ohio who joined after 9/11. Two tours in Fallujah. Came home with TBI and PTSD. Waited 9 months for a VA appointment. Took his own life in a VA parking lot in 2014. He was one of 6,200 veterans who die by suicide every year.', label: 'Veteran Suicide' },
            { story: 'A 10-year-old Yemeni girl killed by a Raytheon MK-82 bomb dropped from a Saudi F-15. She was on a school bus with 39 other children. The bomb fragments had "Made in USA" stamped on them. Her name was in no American newspaper.', label: 'Civilian Casualty' },
            { story: 'A family in Kunduz, Afghanistan, sleeping when an AC-130 gunship attacked their hospital. Doctors Without Borders had shared GPS coordinates with the US military. 42 people died, including patients in their beds. The Pentagon called it a "mistake."', label: 'Kunduz Hospital, 2015' },
          ].map(v => (
            <div key={v.label} className="bg-red-50 rounded-lg p-5 border border-red-200">
              <p className="text-xs font-semibold text-red-600 uppercase mb-2">{v.label}</p>
              <p className="text-sm text-stone-700">{v.story}</p>
            </div>
          ))}
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Veteran Suicide</h2>
        <p>Every day, approximately 17 American veterans take their own lives. That&apos;s over 6,200 per year — more than twice the number of troops killed in the entire 20-year Afghanistan war. Since 2001, more veterans have died by suicide than in combat.</p>
        <p>Among post-9/11 veterans, the suicide rate is 1.5× higher than for non-veterans of the same age. Many waited months or years for VA mental health appointments. The VA mental health budget is a fraction of what we spend on a single aircraft carrier ($13B).</p>
        <p>The youngest veterans are at highest risk. For those aged 18-34, the suicide rate is <strong>2.5× the non-veteran rate</strong>.</p>

        <h2 className="font-[family-name:var(--font-heading)]">PTSD: The Invisible Wound</h2>
        <p>An estimated 1.8 million US veterans live with post-traumatic stress disorder. The rates have escalated with each modern war:</p>
        <ul>
          <li><strong>Vietnam veterans:</strong> ~10% PTSD rate (though many were never diagnosed — PTSD wasn&apos;t recognized as a diagnosis until 1980)</li>
          <li><strong>Gulf War veterans:</strong> ~12% PTSD rate</li>
          <li><strong>Iraq/Afghanistan veterans:</strong> 11-29% PTSD rate, depending on combat exposure</li>
        </ul>
        <p>Many self-medicate with alcohol or drugs, leading to addiction, homelessness, and family breakdown. The divorce rate among combat veterans is significantly higher than the general population. Children of veterans with PTSD show higher rates of behavioral problems and secondary trauma.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Traumatic Brain Injury</h2>
        <p>Over 530,000 post-9/11 service members have been diagnosed with traumatic brain injury (TBI), often from IED blasts. TBI is called the &ldquo;signature wound&rdquo; of the Iraq and Afghanistan wars. Many cases go undiagnosed — the true number may be far higher.</p>
        <p>Long-term effects include memory loss, personality changes, depression, chronic headaches, and early-onset dementia. Recent research links repeated blast exposure to Chronic Traumatic Encephalopathy (CTE), the same brain disease found in NFL players.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Veteran Homelessness</h2>
        <p>On any given night, over 37,000 veterans are homeless in America. They served their country and now sleep under bridges. The VA estimates 1.4 million veterans are &ldquo;at risk&rdquo; of homelessness. Contributing factors include PTSD, TBI, substance abuse, difficulty transitioning to civilian employment, and inadequate VA services.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Civilian Deaths</h2>
        <p>For every American killed in war, approximately five civilians in the target country also die. In the War on Terror alone, an estimated 387,000 civilians have been killed directly, with hundreds of thousands more dying from war-related disease, displacement, and infrastructure destruction.</p>
        <p>The drone program, marketed as &ldquo;precision warfare,&rdquo; has killed an estimated 22,000 people — including at least <strong>2,200 children</strong>, according to the Bureau of Investigative Journalism. The Obama administration counted any &ldquo;military-age male&rdquo; killed in a strike zone as a combatant by default.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Agent Orange: Still Killing 50 Years Later</h2>
        <p>The US sprayed 20 million gallons of Agent Orange and other herbicides across Vietnam from 1961-1971 as part of Operation Ranch Hand. The dioxin contamination continues to cause <strong>birth defects, cancer, and neurological damage</strong> in Vietnamese children born decades after the war.</p>
        <p>An estimated 3 million Vietnamese have been affected. The US government has paid compensation to American veterans exposed to Agent Orange but has provided only minimal assistance to Vietnamese victims. In some areas, dioxin levels remain hundreds of times above safe limits.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Depleted Uranium: The Gift That Keeps Giving</h2>
        <p>The US military has used depleted uranium (DU) munitions extensively in Iraq (1991 and 2003) and the Balkans. DU is extremely effective at penetrating armor — and leaves behind radioactive dust that contaminates soil and water for billions of years.</p>
        <p>In Fallujah, Iraq, studies have found a <strong>38× increase in leukemia rates</strong>, a 12× increase in childhood cancer, and a dramatic increase in birth defects — including rates of congenital malformations higher than those reported by survivors of Hiroshima and Nagasaki. The Pentagon denies a connection.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Refugees & Displacement</h2>
        <p>The War on Terror has displaced an estimated 38 million people — more than any conflict since World War II. Entire cities have been destroyed: Mosul, Raqqa, Fallujah, Aleppo. Millions live in refugee camps with no prospect of returning home.</p>
        <p>These displaced people don&apos;t appear in casualty counts. They&apos;ve lost everything — homes, livelihoods, communities — but because they survived, they&apos;re not counted in the official toll.</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Invisible Wounds</h2>
        <p>Beyond the statistics are the families destroyed by war: children growing up without parents, marriages broken by PTSD and deployment cycles, communities hollowed out by the loss of their young people. These costs don&apos;t appear in any budget. They can&apos;t be measured in dollars. But they are real, and they compound across generations.</p>
      </div>

      <div className="bg-stone-900 text-white rounded-xl p-8 mt-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;Only the dead have seen the end of war.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Attributed to Plato</p>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/casualties" className="text-red-800 hover:underline">→ Casualty Data — deaths by conflict</Link></li>
          <li><Link href="/veteran-suicide" className="text-red-800 hover:underline">→ Veteran Suicide — 17 per day</Link></li>
          <li><Link href="/analysis/the-aftermath" className="text-red-800 hover:underline">→ The Aftermath — long-term costs of war</Link></li>
        </ul>
      </div>
    </div>
  )
}
