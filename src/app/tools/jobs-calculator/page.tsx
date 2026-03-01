import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import JobsCalcClient from './JobsCalcClient'

export const metadata: Metadata = {
  title: 'Jobs Calculator — Military vs Education Spending | WarCosts',
  description: 'Move money from military to education, healthcare, or clean energy and see the net job gain. Military spending creates fewer jobs than any other sector.',
}

export default function JobsCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Tools', href: '/tools/tax-receipt' }, { label: 'Jobs Calculator' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Jobs Calculator</h1>
      <p className="text-stone-500 mb-2 max-w-2xl">
        Military spending creates the <em>fewest</em> jobs per dollar of any major sector.
        Use the slider to see what happens when you redirect military dollars elsewhere.
      </p>
      <ShareButtons title="Jobs Calculator — Military vs Education Spending" />
      <JobsCalcClient />

      <blockquote className="border-l-4 border-red-800 pl-4 italic text-stone-400 mt-12">
        &ldquo;War is a racket. It always has been. It is possibly the oldest, easily the most profitable,
        surely the most vicious.&rdquo;
        <br /><span className="not-italic text-stone-500">— Major General Smedley Butler, 1935</span>
      </blockquote>
      <BackToTop />
    </div>
  )
}
