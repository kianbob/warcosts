import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Privacy Policy — WarCosts',
  description: 'WarCosts privacy policy. We collect minimal data and never sell your information.',
  openGraph: {
    title: 'Privacy Policy — WarCosts',
    description: 'WarCosts privacy policy.',
    url: 'https://www.warcosts.org/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      <BreadcrumbSchema items={[{ label: 'Privacy Policy' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-stone-500 text-sm mb-8">Last updated: March 6, 2026</p>

      <div className="prose prose-stone max-w-none space-y-6">
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Overview</h2>
          <p className="text-stone-600">
            WarCosts is a free, ad-free, public interest data platform. We collect minimal data and never sell your information.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">What We Collect</h2>
          <ul className="list-disc pl-6 text-stone-600 space-y-1">
            <li>Basic analytics (page views, referrer) via privacy-respecting analytics</li>
            <li>No cookies for tracking</li>
            <li>No personal data collection</li>
            <li>No advertising trackers</li>
            <li>No third-party data sharing</li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Third-Party Services</h2>
          <p className="text-stone-600">
            We use Vercel for hosting, which may collect basic server logs (IP addresses, timestamps).
            See <a href="https://vercel.com/legal/privacy-policy" className="text-red-700 hover:underline" target="_blank" rel="noopener noreferrer">Vercel&apos;s privacy policy</a>.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Contact</h2>
          <p className="text-stone-600">
            Questions about this policy? Email <a href="mailto:hello@warcosts.org" className="text-red-700 hover:underline">hello@warcosts.org</a>.
          </p>
        </section>
      </div>
    </div>
  )
}
