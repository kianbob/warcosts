import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Contact — WarCosts',
  description: 'Get in touch with the WarCosts team. Report data errors, press inquiries, or general feedback.',
  openGraph: {
    title: 'Contact — WarCosts',
    description: 'Get in touch with the WarCosts team.',
    url: 'https://www.warcosts.org/contact',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact WarCosts',
  url: 'https://www.warcosts.org/contact',
  description: 'Get in touch with the WarCosts team for press inquiries, data corrections, or general feedback.',
  mainEntity: {
    '@type': 'Organization',
    name: 'TheDataProject.ai',
    url: 'https://thedataproject.ai',
    email: 'info@thedataproject.ai',
  },
}

const categories = [
  {
    icon: '📰',
    title: 'Press Inquiries',
    desc: 'Media requests, interview scheduling, and press resources.',
    email: 'info@thedataproject.ai',
    subject: 'Press Inquiry — WarCosts',
  },
  {
    icon: '🔧',
    title: 'Data Corrections',
    desc: 'Found an error? Help us keep our data accurate. Include the page URL and the correction needed.',
    email: 'info@thedataproject.ai',
    subject: 'Data Correction — WarCosts',
  },
  {
    icon: '💬',
    title: 'General Feedback',
    desc: 'Questions, suggestions, partnership proposals, or just want to say hello.',
    email: 'info@thedataproject.ai',
    subject: 'Feedback — WarCosts',
  },
]

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Contact' }]} />
      <BreadcrumbSchema items={[{ label: 'Contact' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-stone-600 mb-8">
        WarCosts is a project of <a href="https://thedataproject.ai" className="text-red-700 hover:underline">TheDataProject.ai</a>.
        We welcome corrections, suggestions, and inquiries.
      </p>

      <div className="grid gap-6 mb-10">
        {categories.map(cat => (
          <div key={cat.title} className="bg-stone-50 border rounded-lg p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-1">
              {cat.icon} {cat.title}
            </h2>
            <p className="text-stone-600 mb-3">{cat.desc}</p>
            <a
              href={`mailto:${cat.email}?subject=${encodeURIComponent(cat.subject)}`}
              className="inline-block bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-800 transition-colors"
            >
              Email Us →
            </a>
          </div>
        ))}
      </div>

      <div className="text-center text-stone-500 text-sm border-t pt-6">
        <p>General email: <a href="mailto:info@thedataproject.ai" className="text-red-700 hover:underline font-semibold">info@thedataproject.ai</a></p>
        <p className="mt-2">We typically respond within 48 hours.</p>
      </div>
    </div>
  )
}
