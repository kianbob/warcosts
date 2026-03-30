import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import QuizHardClient from './QuizHardClient'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Advanced War Facts Quiz — Can You Guess? | WarCosts',
  description: '20 hard questions about US wars, military spending, and the human cost of conflict. Timed, multiple choice, shareable results. How much do you really know?',
  keywords: ['war quiz', 'military spending quiz', 'US war facts', 'defense budget trivia', 'war costs quiz', 'military knowledge test'],
  openGraph: {
    title: 'Advanced War Facts Quiz — Can You Guess?',
    description: '20 hard questions. 15 seconds each. How much do you really know about America\'s wars?',
    url: 'https://warcosts.org/tools/war-quiz-hard',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced War Facts Quiz — Can You Guess?',
    description: '20 hard questions. 15 seconds each. How much do you really know about America\'s wars?',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Advanced War Facts Quiz',
  description: '20-question timed quiz about US wars, military spending, and the human cost of conflict.',
  url: 'https://warcosts.org/tools/war-quiz-hard',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function WarQuizHardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }, { label: 'Advanced War Quiz' }]} dark />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4">
            Can You <span className="text-red-500">Guess?</span>
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl">
            The advanced war facts quiz. 20 questions. 15 seconds each. No Googling.
            Most people score under 50%. <strong className="text-white">Can you do better?</strong>
          </p>
          <ShareButtons title="Can You Guess? — Advanced War Facts Quiz" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <QuizHardClient />

        <div className="mt-12 bg-stone-50 rounded-lg p-6 border">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">More to Explore</h3>
          <ul className="space-y-2">
            <li><Link href="/tools/war-quiz" className="text-red-800 hover:underline">→ Standard War Quiz — Start with the basics</Link></li>
            <li><Link href="/tools/inflation-calculator" className="text-red-800 hover:underline">→ Inflation Calculator — What did past wars really cost?</Link></li>
            <li><Link href="/tools/budget-simulator" className="text-red-800 hover:underline">→ Budget Simulator — Redesign the defense budget</Link></li>
          </ul>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
