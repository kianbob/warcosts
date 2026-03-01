import { Metadata } from 'next'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'What Else Could $8 Trillion Buy?',
  description: 'The War on Terror cost $8 trillion. Here\'s what that money could have funded instead: free college, clean water, ending homelessness, and more.',
}

export default function OpportunityCostPage() {
  const data = loadData('opportunity-costs.json')

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'What Else Could This Buy?' }]} />

      <div className="text-center mb-12">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
          What Else Could <span className="text-red-600">{fmtMoney(data.warOnTerrorTotal)}</span> Buy?
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          The War on Terror alone cost {fmtMoney(data.warOnTerrorTotal)}. That money is gone — spent on wars that killed 929,000 people and destabilized four countries. Here&apos;s what it could have done instead.
        </p>
      </div>

      <ShareButtons title="What Else Could $8 Trillion Buy?" />

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {data.examples.map((e: any) => (
          <div key={e.item} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition">
            <p className="text-4xl font-bold text-red-600 font-[family-name:var(--font-heading)] mb-2">
              {e.units >= 1e9 ? `${(e.units/1e9).toFixed(1)}B` : e.units >= 1e6 ? `${Math.round(e.units/1e6)}M` : fmt(e.units)}×
            </p>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">{e.item}</h3>
            <p className="text-muted">{e.description}</p>
            <p className="text-xs text-muted mt-2">Unit cost: {fmtMoney(e.unitCost)}</p>
          </div>
        ))}
      </div>

      <div className="bg-stone-900 text-white rounded-xl p-8 mt-12 text-center">
        <blockquote className="font-[family-name:var(--font-heading)] text-2xl italic">
          &ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, a theft from those who hunger and are not fed, those who are cold and are not clothed.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-4">— Dwight D. Eisenhower, &ldquo;The Chance for Peace&rdquo; speech, 1953</p>
      </div>
    </div>
  )
}
