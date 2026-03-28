import type { Metadata } from 'next'
import EmbedsClient from './EmbedsClient'

export const metadata: Metadata = {
  title: 'Embeddable Charts & Widgets',
  description: 'Free embeddable military data charts and war cost widgets for journalists, bloggers, and researchers. Iframe-ready military spending, casualty, and cost visualizations.',
  keywords: ['military data embed', 'war cost chart embed', 'embeddable military chart', 'war data widget', 'defense spending embed'],
}

export default function EmbedsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] text-stone-100 mb-4">
        Embeddable Charts &amp; Widgets
      </h1>
      <p className="text-stone-400 mb-10 max-w-2xl">
        Free embeddable visualizations for journalists, bloggers, and researchers. Copy the embed code below any chart to add it to your site via iframe.
      </p>
      <EmbedsClient />
    </main>
  )
}
