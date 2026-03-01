import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'
import { AftermathCards } from '@/components/charts/AftermathCharts'

export const metadata: Metadata = {
  title: 'The Aftermath — War Doesn\'t End When Troops Come Home | WarCosts',
  description: 'Veteran care through 2050: $2.5 trillion. 17 veteran suicides per day. PTSD, TBI, environmental contamination. The true long-term costs of war.',
}

export default function AftermathPage() {
  const stats = loadData('stats.json')
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Aftermath' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">The Aftermath</h1>
      <p className="text-stone-500 mb-2">Wars don&apos;t end when the troops come home.</p>
      <ShareButtons title="The Aftermath — The True Long-Term Costs of War" />

      <AftermathCards />

      <div className="prose text-stone-600 mt-8">
        <p className="text-lg">
          The fighting may stop, but the costs compound for decades. Veteran care for post-9/11 wars
          alone will cost an estimated <strong>{fmtMoney(stats.veteranCareFutureCost)} through 2050</strong>. The War on Terror
          displaced <strong>{fmt(stats.warOnTerrorDisplaced / 1e6)}M people</strong> and caused an
          estimated <strong>{(stats.warOnTerrorIndirectDeaths / 1e6).toFixed(1)}M indirect deaths</strong> from
          disease, displacement, and loss of infrastructure. The human toll is incalculable.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Mental Health Crisis</h2>
        <ul>
          <li><strong>29%</strong> of Iraq/Afghanistan veterans suffer from PTSD</li>
          <li><strong>22%</strong> of post-9/11 veterans have experienced traumatic brain injury (TBI)</li>
          <li><strong>17 veterans</strong> die by suicide every single day</li>
          <li>Suicide is the <strong>#2 cause of death</strong> for post-9/11 veterans</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">The Financial Burden</h2>
        <p>
          The peak costs of caring for veterans historically come <strong>30-40 years after a conflict ends</strong>.
          We are still paying for Vietnam. We will be paying for Iraq and Afghanistan until 2070 and beyond.
        </p>
        <ul>
          <li>Projected veteran care (post-9/11): <strong>$2.5 trillion</strong></li>
          <li>Current VA budget: <strong>$325 billion/year</strong> (and growing)</li>
          <li>Disability claims from Iraq/Afghanistan: <strong>1.8 million</strong></li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Environmental Contamination</h2>
        <p>
          War poisons the land. Burn pits in Iraq and Afghanistan exposed over 3.5 million service members
          to toxic fumes — causing respiratory illness, cancer, and death. Agent Orange in Vietnam
          continues to cause birth defects three generations later. Depleted uranium munitions contaminate
          Iraqi soil to this day.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Bases That Never Close</h2>
        <p>
          The US maintains 750 military bases in 80 countries. Many were established during conflicts
          that ended decades ago. Germany: 119 bases (WWII ended 80 years ago). Japan: 120 bases.
          South Korea: 73 bases. The annual cost: over $55 billion.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Moral Injury</h2>
        <p>
          Beyond PTSD, researchers now recognize &ldquo;moral injury&rdquo; — the psychological damage
          from participating in or witnessing acts that violate one&apos;s moral beliefs. Drone operators
          who kill from thousands of miles away. Soldiers who discover the &ldquo;enemy combatant&rdquo;
          was a child. These wounds don&apos;t heal with medication.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The soldier above all other people prays for peace, for he must suffer and bear the
          deepest wounds and scars of war.&rdquo;
          <br />— Douglas MacArthur
        </blockquote>

        <p><Link href="/veteran-suicide">→ Read more about veteran suicide</Link></p>
        <p><Link href="/analysis/human-cost">→ The Human Cost of War</Link></p>
        <p><Link href="/casualties">→ Full casualty data by conflict</Link></p>
      </div>

      <BackToTop />
    </div>
  )
}
