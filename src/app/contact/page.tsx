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

      <div className="bg-stone-50 border rounded-lg p-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Get in Touch</h2>
        <p className="text-stone-600">
          For data corrections, general questions, media inquiries, or partnership proposals, email us at:{' '}
        </p>
        <p className="mt-3">
          <a href="mailto:info@thedataproject.ai" className="text-red-700 hover:underline text-lg font-semibold">info@thedataproject.ai</a>
        </p>
      </div>
    </div>
  )
}
