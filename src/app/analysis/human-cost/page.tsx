import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'The Human Cost of War — Beyond the Numbers',
  description: 'Over 1 million Americans killed, 5.2 million civilians dead, 17 veterans commit suicide daily. The human cost of American wars.',
}

export default function HumanCostPage() {
  const stats = loadData('stats.json')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Human Cost' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">The Human Cost</h1>
      <p className="text-muted mb-6">Every number on this page was a person with a name, a family, and a life.</p>
      <ShareButtons title="The Human Cost of War" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {[
          { val: fmt(stats.totalUSDeaths), label: 'Americans Killed in War' },
          { val: `${(stats.totalCivilianDeaths/1e6).toFixed(1)}M+`, label: 'Civilians Killed' },
          { val: '17/day', label: 'Veteran Suicides' },
          { val: '37M', label: 'War on Terror Displaced' },
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
        <h2 className="font-[family-name:var(--font-heading)]">Veteran Suicide</h2>
        <p>Every day, approximately 17 American veterans take their own lives. That&apos;s over 6,200 per year — more than twice the number of troops killed in the entire 20-year Afghanistan war.</p>
        <p>Among post-9/11 veterans, the suicide rate is 1.5 times higher than for non-veterans of the same age. Many waited months or years for VA mental health appointments. The VA mental health budget is a fraction of what we spend on a single aircraft carrier.</p>

        <h2 className="font-[family-name:var(--font-heading)]">PTSD</h2>
        <p>An estimated 1.8 million US veterans live with post-traumatic stress disorder. Among Iraq and Afghanistan veterans, PTSD rates range from 11% to 20%. Many self-medicate with alcohol or drugs, leading to addiction, homelessness, and family breakdown.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Traumatic Brain Injury</h2>
        <p>Over 530,000 post-9/11 service members have been diagnosed with traumatic brain injury (TBI), often from IED blasts. Many cases go undiagnosed. Long-term effects include memory loss, personality changes, depression, and early-onset dementia.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Civilian Deaths</h2>
        <p>For every American killed in war, approximately five civilians in the target country also die. In the War on Terror alone, an estimated 387,000 civilians have been killed directly, with hundreds of thousands more dying from war-related disease, displacement, and infrastructure destruction.</p>
        <p>The drone program, marketed as &ldquo;precision warfare,&rdquo; has killed an estimated 22,000 people — including at least 2,200 children, according to the Bureau of Investigative Journalism.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Refugees & Displacement</h2>
        <p>The War on Terror has displaced an estimated 37 million people — more than any conflict since World War II. Entire cities have been destroyed. Millions live in refugee camps with no prospect of returning home.</p>

        <h2 className="font-[family-name:var(--font-heading)]">The Invisible Wounds</h2>
        <p>Beyond the statistics are the families destroyed by war: children growing up without parents, marriages broken by PTSD and deployment cycles, communities hollowed out by the loss of their young people. These costs don&apos;t appear in any budget.</p>
      </div>

      <div className="bg-stone-900 text-white rounded-xl p-8 mt-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;Only the dead have seen the end of war.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Attributed to Plato</p>
      </div>
    </div>
  )
}
