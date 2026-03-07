import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Contact — WarCosts',
  description: 'Get in touch with the WarCosts team. Report data errors, suggest corrections, or ask questions.',
  openGraph: {
    title: 'Contact — WarCosts',
    description: 'Get in touch with the WarCosts team.',
    url: 'https://www.warcosts.org/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Contact' }]} />
      <BreadcrumbSchema items={[{ label: 'Contact' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Contact</h1>
      <p className="text-stone-600 mb-8">
        WarCosts is a project of <a href="https://thedataproject.ai" className="text-red-700 hover:underline">TheDataProject.ai</a>.
        We welcome corrections, suggestions, and questions.
      </p>

      <div className="space-y-6">
        <div className="bg-stone-50 border rounded-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Report a Data Error</h2>
          <p className="text-stone-600 text-sm">
            Found incorrect data? We take accuracy seriously. Please email us at{' '}
            <a href="mailto:corrections@warcosts.org" className="text-red-700 hover:underline">corrections@warcosts.org</a>{' '}
            with the page URL and the specific error.
          </p>
        </div>

        <div className="bg-stone-50 border rounded-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">General Inquiries</h2>
          <p className="text-stone-600 text-sm">
            For general questions, media inquiries, or partnership proposals:{' '}
            <a href="mailto:hello@warcosts.org" className="text-red-700 hover:underline">hello@warcosts.org</a>
          </p>
        </div>

        <div className="bg-stone-50 border rounded-lg p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Data & API Access</h2>
          <p className="text-stone-600 text-sm">
            All our data is freely available on the <a href="/downloads" className="text-red-700 hover:underline">Downloads</a> page.
            For API access or bulk data requests, email{' '}
            <a href="mailto:data@warcosts.org" className="text-red-700 hover:underline">data@warcosts.org</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
