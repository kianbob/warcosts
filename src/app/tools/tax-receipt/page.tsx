import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import TaxReceiptClient from './TaxReceiptClient'

export const metadata: Metadata = {
  title: 'Your Military Tax Receipt — See Where Your Tax Dollars Go | WarCosts',
  description: 'Enter your income and see exactly how much of your federal taxes fund the military. ~24% of income tax goes to defense spending.',
}

export default function TaxReceiptPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Tools', href: '/tools/tax-receipt' }, { label: 'Tax Receipt' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Your Military Tax Receipt</h1>
      <p className="text-stone-500 mb-2 max-w-2xl">
        How much of <em>your</em> money funds the war machine? Enter your income below to find out.
        Approximately 24 cents of every federal income tax dollar goes to military spending.
      </p>
      <ShareButtons title="Your Military Tax Receipt — WarCosts" />
      <TaxReceiptClient />

      <div className="mt-12 text-stone-500 text-sm space-y-2 max-w-2xl">
        <p>
          <strong>Methodology:</strong> We calculate your estimated federal income tax using 2024 brackets,
          then apply the ~24% military share based on analysis of federal discretionary and mandatory spending
          by the National Priorities Project and War Resisters League.
        </p>
        <blockquote className="border-l-4 border-red-800 pl-4 italic text-stone-400 my-4">
          &ldquo;Taxation without representation is tyranny. Taxation for wars of choice is something worse.&rdquo;
        </blockquote>
      </div>
      <BackToTop />
    </div>
  )
}
