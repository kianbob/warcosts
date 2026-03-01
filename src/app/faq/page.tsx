import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions | WarCosts',
  description: 'Common questions about WarCosts data, methodology, sources, libertarian perspective, war costs, and how to use the site. 20 comprehensive FAQs.',
  keywords: ['warcosts faq', 'military spending questions', 'war cost methodology', 'defense spending data'],
}

const faqs = [
  { q: 'Where does your data come from?', a: 'We compile data from official government sources (Department of Defense, Congressional Research Service, SIPRI, USAID, OMB), peer-reviewed academic research (Brown University Costs of War Project), and established investigative organizations (Bureau of Investigative Journalism, Iraq Body Count, Airwars). Every figure on the site can be traced to a primary source. See our Sources page for the complete list.' },
  { q: 'Are civilian casualty numbers accurate?', a: 'Civilian casualty estimates are inherently uncertain and almost certainly undercount the true toll. Our figures are generally conservative — they come from credible organizations that use documented, verifiable cases. The Brown University Costs of War Project estimates 940,000+ directly killed in post-9/11 wars, with 3.8 million indirect deaths from disease, displacement, and infrastructure destruction. We note uncertainty ranges where available and err toward conservative estimates.' },
  { q: 'Why are costs in "2024 dollars"?', a: 'Adjusting for inflation allows fair comparison across centuries. The $2.4 billion nominal cost of the Revolutionary War would be misleading compared to the $2.3 trillion Afghanistan war without accounting for 240 years of inflation. We use the BLS CPI-U (Consumer Price Index for All Urban Consumers) to convert all figures to 2024 dollars. For each conflict, we use the midpoint year or year of peak spending as the base.' },
  { q: 'Is this an anti-military site?', a: 'No. This is a transparency site. We believe citizens deserve to know the full cost of their government\'s military decisions — in dollars, lives, and liberty. We have enormous respect for service members. We believe supporting the troops means being honest about what we\'re asking them to do, what it costs, and whether it\'s worth it. Questioning military policy is not the same as disrespecting those who serve.' },
  { q: 'What is your political perspective?', a: 'WarCosts approaches military policy from a perspective of constitutional governance, individual liberty, and fiscal responsibility — values rooted in classical liberalism and shared across the political spectrum. We believe: (1) the power to wage war belongs to Congress per the Constitution; (2) citizens deserve full transparency about military spending; (3) every dollar spent on war is a dollar not spent on something else; (4) the human cost of war should be counted honestly. These are not partisan positions.' },
  { q: 'Why do you call it "libertarian"?', a: 'The skepticism of military overreach has deep roots in classical liberal thought. The Founders — especially Madison, Jefferson, and Washington — warned explicitly against standing armies and foreign entanglements. The modern libertarian critique of the military-industrial complex draws from Eisenhower\'s farewell address, Smedley Butler\'s "War is a Racket," and the Austrian economics tradition. But you don\'t have to be a libertarian to believe in transparency, accountability, and constitutional governance.' },
  { q: 'What does "congressional authorization" mean?', a: 'The US Constitution (Article I, Section 8) gives Congress — not the President — the power to declare war. We track whether each conflict had: (1) a formal declaration of war (only 5 in US history); (2) explicit congressional authorization like an AUMF; (3) UN/NATO authorization only; or (4) presidential authority alone. 26 of 36 major US wars since 1776 were fought without a formal declaration.' },
  { q: 'How do you calculate the "true" cost of war?', a: 'Direct war-fighting costs (what the Pentagon reports) are only about 36% of total war costs. We follow the Brown University Costs of War methodology, which includes: direct appropriations, DOD base budget increases, veteran care (current and projected), interest on war borrowing, Homeland Security costs attributable to 9/11, and State Department war-related spending. This produces the $8 trillion figure for the War on Terror.' },
  { q: 'Why do you include VA spending as a "military cost"?', a: 'Because it is. The $325 billion VA budget exists because wars create veterans who need care. Without wars, the VA would be a fraction of its current size. Including VA costs in the true cost of war is essential for honest accounting — it\'s the deferred cost of sending people into combat. The Brown University methodology includes projected VA costs through 2050 ($2.2-2.5 trillion for post-9/11 veterans).' },
  { q: 'Who funds this?', a: 'WarCosts is independently operated as part of TheDataProject.ai. We have no defense industry sponsors, no political party funding, no government grants, and no think-tank affiliations. The site is completely free with no ads, no paywall, and no login required. We are funded by TheDataProject.ai\'s operating budget.' },
  { q: 'Can I use this data?', a: 'Yes. All our aggregated data is available for download on the Downloads page in JSON and CSV formats. We ask for attribution ("Source: WarCosts.org") if you use it in published work. Academic researchers, journalists, and students are especially welcome to use our data. The raw source data belongs to the original publishers (CRS, SIPRI, Brown University, etc.).' },
  { q: 'How often is the data updated?', a: 'We update data as new reports are published: SIPRI releases annual spending data in April, Brown University publishes cost updates periodically, CRS reports are updated as needed, and we monitor ongoing conflicts for new casualty and cost data. The site reflects data current as of the last update shown on each page.' },
  { q: 'Why don\'t you include [specific conflict]?', a: 'We focus on the 36 most significant military operations — those with meaningful cost, casualty, or geopolitical impact. The US has conducted hundreds of smaller operations, border skirmishes, advisory missions, and CIA covert actions. We include the 469 CRS-documented interventions in our broader data but provide detailed pages only for major conflicts. If you think we\'re missing an important one, let us know.' },
  { q: 'Are you against all military spending?', a: 'No. National defense is a legitimate function of government. The question is not whether to have a military, but how large it should be, what it should do, and whether it should cost more than the next 10 countries combined while failing every financial audit. A military sufficient for genuine defense — protecting the homeland, not policing the globe — would cost far less than $886 billion.' },
  { q: 'What about the jobs created by military spending?', a: 'Military spending does create jobs — but fewer per dollar than any other major category of government spending. Research by UMass Amherst PERI found that $1 billion in military spending creates about 5,000 jobs vs. 13,000 in education, 9,000 in healthcare, and 8,000 in clean energy. The "jobs" argument is the defense industry\'s most effective lobbying tool, but the economics don\'t support it. Try our Jobs Calculator.' },
  { q: 'How is the $1.4 trillion "true" national security budget calculated?', a: 'Start with the DOD base budget ($886B). Add: Veterans Affairs ($325B), intelligence community ($90B+), Homeland Security ($62B), DOE nuclear weapons ($50B), interest on war debt ($100B+), State Dept military programs ($18B), and other military-related spending ($10B+). Total: approximately $1.4-1.5 trillion. This methodology is used by the National Priorities Project, War Resisters League, and other budget analysts.' },
  { q: 'What is the 2001 AUMF and why does it matter?', a: 'The Authorization for Use of Military Force, passed September 14, 2001, is a 60-word resolution that authorized the president to use force against those responsible for 9/11. It has been used to justify military operations in 22+ countries against groups (like ISIS) that didn\'t exist when it was passed. It\'s been active for 24 years with no sunset clause and has become a blank check for presidential war-making.' },
  { q: 'How can I help or contribute?', a: 'Found an error? Have a data source we should include? Want to contribute analysis? We welcome corrections, suggestions, and contributions from researchers, veterans, journalists, and concerned citizens. All data is available on our Downloads page. If you\'re a developer, the site is built with Next.js and we welcome contributions.' },
  { q: 'Is WarCosts available in other languages?', a: 'Currently, WarCosts is available in English only. We hope to add translations in the future. If you\'d like to help translate, please reach out.' },
  { q: 'How does WarCosts relate to TheDataProject.ai?', a: 'WarCosts is the first platform in TheDataProject.ai portfolio — a collection of free, data-driven transparency sites covering topics where public access to clear, sourced data can improve democratic accountability. Future platforms will cover healthcare costs, government spending, immigration data, and more.' },
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
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-stone-500 mb-8 max-w-2xl">
        {faqs.length} questions covering our data, methodology, perspective, and mission.
        Can&apos;t find your answer? See our <Link href="/methodology" className="text-red-800 hover:underline">Methodology</Link> and <Link href="/sources" className="text-red-800 hover:underline">Sources</Link> pages
        for more detail.
      </p>

      {/* Quick jump */}
      <div className="bg-stone-50 rounded-lg border p-4 mb-8">
        <p className="font-bold text-sm mb-2">Jump to:</p>
        <div className="flex flex-wrap gap-2 text-sm">
          {['Data & Sources', 'Methodology', 'Perspective', 'Using the Site'].map(cat => (
            <span key={cat} className="px-2 py-1 bg-white rounded border text-stone-600">{cat}</span>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white rounded-lg border p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">{f.q}</h2>
            <p className="text-stone-600 text-sm leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/methodology" className="text-red-800 hover:underline">→ Methodology — How we calculate these numbers</Link></li>
          <li><Link href="/sources" className="text-red-800 hover:underline">→ Sources — Complete bibliography</Link></li>
          <li><Link href="/about" className="text-red-800 hover:underline">→ About WarCosts — Mission and perspective</Link></li>
          <li><Link href="/downloads" className="text-red-800 hover:underline">→ Downloads — Raw data files</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
