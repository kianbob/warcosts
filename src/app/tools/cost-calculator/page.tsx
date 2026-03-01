import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import CostCalcClient from './CostCalcClient'

export const metadata: Metadata = {
  title: 'Your Personal War Cost — Calculator',
  description: 'How much has the US spent on war during YOUR lifetime? Enter your state and birth year to find out your personal share of military spending.',
}

export default function CostCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Tools', href: '/tools/tax-receipt' }, { label: 'Cost Calculator' }]} />

      <div className="text-center mb-12">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
          Your Personal <span className="text-red-700">War Cost</span>
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          How much has the United States spent on wars and military operations during your lifetime?
          Enter your state and birth year to find out.
        </p>
      </div>

      <CostCalcClient />
    </div>
  )
}
