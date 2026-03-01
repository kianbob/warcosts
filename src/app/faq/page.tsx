import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description: 'Common questions about WarCosts data, methodology, and mission.',
}

const faqs = [
  { q: 'Where does your data come from?', a: 'We compile data from official government sources (DoD, CRS, SIPRI, USAID), academic research (Brown University Costs of War Project), and investigative journalism (Bureau of Investigative Journalism, Iraq Body Count). See our Methodology page for details.' },
  { q: 'Are civilian casualty numbers accurate?', a: 'Civilian casualty estimates are inherently uncertain. Our figures are generally conservative — they come from credible organizations that use documented, verifiable cases. The true numbers are likely higher. We note uncertainty ranges where available.' },
  { q: 'Why are costs in "2023 dollars"?', a: 'Adjusting for inflation allows fair comparison across centuries. The $2.4 billion cost of the Revolutionary War would be misleading compared to the $2.3 trillion Afghanistan war without accounting for 240 years of inflation.' },
  { q: 'Is this an anti-military site?', a: 'No. This is a transparency site. We believe citizens deserve to know the full cost of their government\'s military decisions. Supporting the troops means being honest about what we\'re asking them to do — and what it costs.' },
  { q: 'What does "congressional authorization" mean?', a: 'The US Constitution gives Congress — not the President — the power to declare war. We track whether each conflict had a formal declaration of war or explicit congressional authorization (like the AUMFs for Afghanistan and Iraq). Many conflicts were waged on presidential authority alone.' },
  { q: 'Who funds this?', a: 'WarCosts is independently operated as part of TheDataProject.ai. We have no defense industry sponsors, no political party funding, and no government grants. The site is free with no ads or paywalls.' },
  { q: 'Can I use this data?', a: 'Yes. All our aggregated data is available for download on the Downloads page. We ask for attribution if you use it in published work.' },
  { q: 'Why don\'t you include [specific conflict]?', a: 'We focus on significant military operations. The US has conducted hundreds of smaller operations, border skirmishes, and advisory missions. We aim to include all conflicts with meaningful cost, casualty, or geopolitical impact. If you think we\'re missing an important one, let us know.' },
]

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: 'FAQ' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white rounded-lg border p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">{f.q}</h2>
            <p className="text-muted">{f.a}</p>
          </div>
        ))}
      </div>

      <BackToTop />
    </div>
  )
}
