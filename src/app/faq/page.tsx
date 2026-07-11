import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'FAQ — War Costs, Data Sources, Iran War, Methodology | WarCosts',
  description: 'Frequently asked questions about WarCosts data, sources (Brown University, SIPRI, CRS, DoD), methodology, the Iran War 2026, and how to use the site.',
  alternates: { canonical: 'https://www.warcosts.org/faq' },
  keywords: ['warcosts faq', 'war cost methodology', 'iran war cost', 'military spending questions', 'defense data sources'],
  openGraph: {
    title: 'FAQ — WarCosts Frequently Asked Questions',
    description: 'Data sources, methodology, Iran War 2026 costs, and how to use our open military data.',
    url: 'https://www.warcosts.org/faq',
    siteName: 'WarCosts',
    type: 'website',
  },
}

interface FAQ {
  q: string
  a: string
  category: string
}

const faqs: FAQ[] = [
  // Data & Sources
  { q: 'Where does your data come from?', a: 'We compile data from official government sources (Department of Defense, Congressional Research Service, SIPRI, USAID, OMB, Bureau of Labor Statistics), peer-reviewed academic research (Brown University Costs of War Project), and established investigative organizations (Bureau of Investigative Journalism, Iraq Body Count, Airwars). Every figure on the site can be traced to a primary source. See our Sources page for the complete list.', category: 'Data & Sources' },
  { q: 'Are civilian casualty numbers accurate?', a: 'Civilian casualty estimates are inherently uncertain and almost certainly undercount the true toll. Our figures are generally conservative — they come from credible organizations that use documented, verifiable cases. The Brown University Costs of War Project estimates 940,000+ directly killed in post-9/11 wars, with 3.8 million indirect deaths from disease, displacement, and infrastructure destruction. We note uncertainty ranges where available and err toward conservative estimates.', category: 'Data & Sources' },
  { q: 'How often is data updated?', a: 'Update frequency varies by dataset: Iran War 2026 data is updated daily as new Pentagon briefings and casualty reports come in. Annual military spending data updates when SIPRI publishes in April and when the federal budget is released. Historical conflict data updates as new research is published by Brown University, CRS, and other sources. Country profiles and arms sales update quarterly.', category: 'Data & Sources' },
  { q: 'Can I use your data?', a: 'Yes! All our aggregated data is freely available for download on the Downloads page in JSON format. We ask for attribution ("Source: WarCosts.org") if you use it in published work. Academic researchers, journalists, students, and developers are especially welcome. The raw source data belongs to the original publishers (CRS, SIPRI, Brown University, etc.). All data is CORS-enabled for direct API access.', category: 'Data & Sources' },

  // Methodology
  { q: 'How do you calculate war costs?', a: 'Direct war-fighting costs (what the Pentagon reports) are only about 36% of total war costs. We follow the Brown University Costs of War methodology, which includes: direct appropriations, DOD base budget increases attributable to war, veteran care (current and projected through 2050), interest on war borrowing, Homeland Security costs attributable to 9/11, and State Department war-related spending. This produces the $8 trillion figure for the War on Terror. All figures are inflation-adjusted to 2024 dollars using BLS CPI-U.', category: 'Methodology' },
  { q: 'Why are costs in "2024 dollars"?', a: 'Adjusting for inflation allows fair comparison across centuries. The $2.4 billion nominal cost of the Revolutionary War would be misleading compared to the $2.3 trillion Afghanistan war without accounting for 240 years of inflation. We use the BLS CPI-U (Consumer Price Index for All Urban Consumers) to convert all figures to 2024 dollars. For each conflict, we use the midpoint year or year of peak spending as the base.', category: 'Methodology' },
  { q: 'Why do you include VA spending as a "military cost"?', a: 'Because it is. The $325 billion VA budget exists because wars create veterans who need care. Without wars, the VA would be a fraction of its current size. Including VA costs in the true cost of war is essential for honest accounting — it\'s the deferred cost of sending people into combat. The Brown University methodology includes projected VA costs through 2050 ($2.2-2.5 trillion for post-9/11 veterans).', category: 'Methodology' },
  { q: 'How is the $1.4 trillion "true" national security budget calculated?', a: 'Start with the DOD base budget ($886B). Add: Veterans Affairs ($325B), intelligence community ($90B+), Homeland Security ($62B), DOE nuclear weapons ($50B), interest on war debt ($100B+), State Dept military programs ($18B), and other military-related spending ($10B+). Total: approximately $1.4-1.5 trillion. This methodology is used by the National Priorities Project, War Resisters League, and other budget analysts.', category: 'Methodology' },

  // Iran War 2026
  { q: 'How much has the Iran war cost?', a: 'As of late March 2026, the Pentagon has confirmed $11.3 billion in direct costs over the first 6 days of operations. This includes Tomahawk cruise missiles ($2M each), JASSM-ER strikes, B-2 bomber sorties, carrier strike group operations, and initial troop deployments. Projected costs exceed $50 billion for the first month based on sortie rates and munitions expenditure. These figures do not include long-term costs like veteran care, equipment replacement, or economic disruption — the true cost will be far higher.', category: 'Iran War 2026' },
  { q: 'How many people have died in the Iran war?', a: 'Casualty tracking in the Iran conflict is ongoing and figures change daily. The Pentagon reports US military casualties through official briefings, while Iranian civilian and military casualties are harder to verify due to restricted media access and conflicting government claims. We track figures from DoD press briefings, Airwars, and credible media reports, updating daily. Check our Iran War 2026 analysis page for the latest numbers.', category: 'Iran War 2026' },
  { q: 'Did Congress authorize the Iran war?', a: 'No. The strikes on Iran began without a formal declaration of war or new Authorization for Use of Military Force (AUMF). The administration has cited Article II commander-in-chief powers and argued the 2001 AUMF covers Iranian-backed forces. This follows the pattern of 26 of 36 major US conflicts since 1776 being fought without formal congressional declaration. The War Powers Resolution requires the president to notify Congress within 48 hours and withdraw forces within 60 days without authorization.', category: 'Iran War 2026' },

  // Perspective
  { q: 'Is this site politically biased?', a: 'WarCosts is data-driven and source-cited. Every number links to a primary source — government reports, academic research, or established monitoring organizations. Our editorial perspective values constitutional governance, fiscal responsibility, and transparency in military spending. Some call this libertarian; we call it common sense. We believe citizens deserve the full picture regardless of which party is in the White House. We\'ve been equally critical of Republican and Democratic administrations\' military adventures.', category: 'Perspective' },
  { q: 'What is your political perspective?', a: 'WarCosts approaches military policy from a perspective of constitutional governance, individual liberty, and fiscal responsibility — values rooted in classical liberalism and shared across the political spectrum. We believe: (1) the power to wage war belongs to Congress per the Constitution; (2) citizens deserve full transparency about military spending; (3) every dollar spent on war is a dollar not spent on something else; (4) the human cost of war should be counted honestly. These are not partisan positions.', category: 'Perspective' },
  { q: 'Are you against all military spending?', a: 'No. National defense is a legitimate function of government. The question is not whether to have a military, but how large it should be, what it should do, and whether it should cost more than the next 10 countries combined while failing every financial audit. A military sufficient for genuine defense — protecting the homeland, not policing the globe — would cost far less than $886 billion.', category: 'Perspective' },

  // About & Site
  { q: 'Who runs this site?', a: 'WarCosts is independently operated by TheDataProject.ai — a portfolio of free, data-driven transparency sites. We have no defense industry sponsors, no political party funding, no government grants, and no think-tank affiliations. The site is completely free: no ads, no paywall, no login required. Our mission is to make military spending data accessible to every citizen.', category: 'About' },
  { q: 'How does WarCosts relate to TheDataProject.ai?', a: 'WarCosts is the first platform in TheDataProject.ai portfolio — a collection of free, data-driven transparency sites covering topics where public access to clear, sourced data can improve democratic accountability. Future platforms will cover healthcare costs, government spending, immigration data, and more.', category: 'About' },
  { q: 'What about the jobs created by military spending?', a: 'Military spending does create jobs — but fewer per dollar than any other major category of government spending. Research by UMass Amherst PERI found that $1 billion in military spending creates about 5,000 jobs vs. 13,000 in education, 9,000 in healthcare, and 8,000 in clean energy. The "jobs" argument is the defense industry\'s most effective lobbying tool, but the economics don\'t support it. Try our Jobs Calculator.', category: 'About' },
  { q: 'What is the 2001 AUMF and why does it matter?', a: 'The Authorization for Use of Military Force, passed September 14, 2001, is a 60-word resolution that authorized the president to use force against those responsible for 9/11 and associated forces. It has been used to justify military operations in 22+ countries against groups (like ISIS) that didn\'t exist when it was passed. It\'s been active for 25 years with no sunset clause and has become a blank check for presidential war-making.', category: 'About' },
  { q: 'How can I help or contribute?', a: 'Found an error? Have a data source we should include? Want to contribute analysis? We welcome corrections, suggestions, and contributions from researchers, veterans, journalists, and concerned citizens. All data is available on our Downloads page for your own projects.', category: 'About' },

  // Tools & Features
  { q: 'What interactive tools does WarCosts offer?', a: 'We offer 14+ interactive tools including: War Clock (real-time spending counter), Tax Receipt Calculator (see your personal military tax burden), Jobs Calculator (military vs civilian job creation), Budget Simulator (redesign the federal budget), Compare Wars (side-by-side conflict comparison), State Impact Calculator, Casualty Calculator, Iran vs Iraq comparison, and more. All tools are free — no login required.', category: 'Tools & Features' },
  { q: 'How does the War Clock work?', a: 'The War Clock divides the $886 billion annual military budget by seconds in a year to show real-time spending: $28,095 per second, $1.7 million per minute, $101 million per hour, $2.4 billion per day. It starts counting from the moment you open the page. The figure represents DoD base budget authority and does not include VA, intelligence, or other military-related spending.', category: 'Tools & Features' },
  { q: 'Can I embed WarCosts data on my website?', a: 'Yes! We offer embeddable widgets for the War Clock, Iran War counter, and other live data displays. Simply use an iframe pointing to our embed URLs (e.g., warcosts.org/embed/war-clock). No API key needed. We also offer downloadable JSON data files on our Downloads page for custom integrations.', category: 'Tools & Features' },
  { q: 'What is the Budget Simulator?', a: 'The Budget Simulator lets you redesign the $6.1 trillion federal budget. Move money from military spending to education, healthcare, infrastructure, or other priorities and see the real-world impact — how many schools, hospitals, or homes your reallocation could fund. It uses actual federal budget data from OMB.', category: 'Tools & Features' },

  // Historical Context
  { q: 'How many years has the US been at war?', a: 'The United States has been at war for 229 of its 249 years of existence (1776–2025). Only about 20 years have been spent at peace. The longest period without active military operations was approximately 5 consecutive years. Since WWII, there has not been a single calendar year without US military operations somewhere in the world.', category: 'Historical Context' },
  { q: 'How many military interventions has the US conducted?', a: 'The Congressional Research Service documents 469+ instances of US military force abroad since 1798. Only 11 had formal declarations of war from Congress. The rest were conducted under executive authority, treaty obligations, or broad authorizations like the 2001 AUMF.', category: 'Historical Context' },
  { q: 'What is the total cost of all US wars?', a: 'The total cost of all US wars since 1776 is approximately $11.3 trillion in inflation-adjusted 2024 dollars. The War on Terror alone accounts for $8+ trillion. These figures include direct military costs, veteran care, and interest on war debt but exclude indirect costs like economic disruption, civilian infrastructure damage, and opportunity costs.', category: 'Historical Context' },
  { q: 'How does US military spending compare to other countries?', a: 'The US spends more on its military than the next 10 countries combined. The $886 billion annual budget is roughly 3x China\'s ($292B), 10x Russia\'s ($86B), and more than the entire GDP of most nations. The US accounts for approximately 39% of global military expenditure.', category: 'Historical Context' },

  // Technical
  { q: 'What format is WarCosts data available in?', a: 'All aggregated data is available in JSON format on our Downloads page. Files include conflict data, spending data, casualty figures, country profiles, and more. Data is CORS-enabled for direct API access. We also offer embeddable widgets for the War Clock and Iran War counter.', category: 'Technical' },
  { q: 'How are inflation adjustments calculated?', a: 'We use the Bureau of Labor Statistics CPI-U (Consumer Price Index for All Urban Consumers) for all inflation adjustments. For each historical conflict, we use the midpoint year or year of peak spending as the base year. All figures on the site are presented in 2024 dollars unless otherwise noted.', category: 'Technical' },
  { q: 'Are there embeddable widgets available?', a: 'Yes. We offer iframe-embeddable widgets for the War Clock (real-time military spending counter) and Iran War counter. Simply use an iframe pointing to warcosts.org/embed/war-clock or warcosts.org/embed/iran-counter. No API key or registration required.', category: 'Technical' },
  { q: 'How do I cite WarCosts in academic work?', a: 'For academic citations, reference the specific primary source we cite (Brown University, CRS, SIPRI, etc.) for the underlying data, and cite WarCosts.org for the aggregation and analysis. Example: "Data compiled by WarCosts.org from Congressional Research Service report RL32492."', category: 'Technical' },
]

const categoryOrder = ['Data & Sources', 'Methodology', 'Iran War 2026', 'Tools & Features', 'Historical Context', 'Technical', 'Perspective', 'About']

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
        {faqs.length} questions covering our data sources, methodology, the Iran War 2026, our perspective, and how to use the site.
        Can&apos;t find your answer? See our <Link href="/methodology" className="text-red-800 hover:underline">Methodology</Link> and <Link href="/sources" className="text-red-800 hover:underline">Sources</Link> pages.
      </p>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-700">{faqs.length}</div>
          <div className="text-sm text-stone-500">Questions Answered</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-700">{categoryOrder.length}</div>
          <div className="text-sm text-stone-500">Categories</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-700">20+</div>
          <div className="text-sm text-stone-500">Primary Sources</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-700">14+</div>
          <div className="text-sm text-stone-500">Interactive Tools</div>
        </div>
      </div>

      {/* Quick jump */}
      <div className="bg-stone-50 rounded-lg border p-4 mb-8">
        <p className="font-bold text-sm mb-2">Jump to:</p>
        <div className="flex flex-wrap gap-2 text-sm">
          {categoryOrder.map(cat => (
            <a key={cat} href={`#${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="px-3 py-1 bg-white rounded border text-stone-600 hover:bg-stone-100 transition">{cat}</a>
          ))}
        </div>
      </div>

      {/* Top Question Highlight */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">🔥 Most Asked Question</h3>
        <p className="text-stone-300 text-sm">
          <strong className="text-white">&ldquo;Where does your data come from?&rdquo;</strong> — We compile data from official
          government sources (DoD, CRS, SIPRI, OMB), peer-reviewed academic research (Brown University Costs of War
          Project), and established investigative organizations (Airwars, Iraq Body Count). Every figure on the site
          can be traced to a primary source. See our <Link href="/sources" className="text-red-400 hover:underline">Sources page</Link> for
          the complete list.
        </p>
      </div>

      {categoryOrder.map(category => (
        <section key={category} id={category.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 border-b border-stone-200 pb-2">{category}</h2>
          <div className="space-y-4">
            {faqs.filter(f => f.category === category).map((f, i) => (
              <div key={i} className="bg-white rounded-lg border p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">{f.q}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Quick Stats */}
      <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-red-900 mb-4">Quick Reference: Key Numbers</h3>
        <p className="text-stone-600 text-sm mb-4">The most commonly referenced figures from our data:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-red-700">$11.3T</div>
            <div className="text-xs text-stone-500">Total cost of all US wars</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-red-700">$886B</div>
            <div className="text-xs text-stone-500">Annual military budget</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-red-700">$1.4T+</div>
            <div className="text-xs text-stone-500">True national security cost</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-red-700">229/249</div>
            <div className="text-xs text-stone-500">Years at war since 1776</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-red-700">469+</div>
            <div className="text-xs text-stone-500">Military interventions</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-red-700">17/day</div>
            <div className="text-xs text-stone-500">Veteran suicides</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-red-700">750+</div>
            <div className="text-xs text-stone-500">Overseas military bases</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-red-700">0</div>
            <div className="text-xs text-stone-500">Pentagon audits passed</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-red-700">$28,095</div>
            <div className="text-xs text-stone-500">Military spending per second</div>
          </div>
        </div>
        <p className="text-stone-500 text-xs mt-3">
          All figures from official government sources and peer-reviewed research.
          See our <Link href="/sources" className="text-red-800 hover:underline">Sources page</Link> for complete citations.
        </p>
      </div>

      {/* Common Misconceptions */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Common Misconceptions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-stone-800">❌ &ldquo;US foreign aid is 25% of the budget&rdquo;</p>
            <p className="text-stone-600 text-sm">Americans consistently overestimate foreign aid. Actual non-military foreign aid is about $35 billion — less than 1% of the federal budget and less than what the Pentagon loses in accounting errors annually.</p>
          </div>
          <div>
            <p className="font-semibold text-stone-800">❌ &ldquo;Military spending is historically low as % of GDP&rdquo;</p>
            <p className="text-stone-600 text-sm">While the GDP percentage is lower than WWII (40%), absolute spending is at all-time highs. GDP grew enormously — 3.5% of a $28T economy ($886B) vastly exceeds 10% of a $2T economy ($200B).</p>
          </div>
          <div>
            <p className="font-semibold text-stone-800">❌ &ldquo;Military spending creates more jobs than alternatives&rdquo;</p>
            <p className="text-stone-600 text-sm">UMass PERI research shows $1B in military spending creates ~5,000 jobs vs. 13,000 in education, 9,000 in healthcare, and 8,000 in clean energy. Military is the least efficient job creator per dollar.</p>
          </div>
        </div>
      </div>

      {/* Still Have Questions */}
      <div className="mt-12 bg-stone-900 text-white rounded-xl p-8">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Still Have Questions?</h3>
        <p className="text-stone-300 mb-4">
          This FAQ covers {faqs.length} of the most common questions, but military spending is a vast topic.
          Here are some resources for deeper exploration:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">📊 Explore the Data</h4>
            <ul className="space-y-1 text-stone-300 text-sm">
              <li><Link href="/dashboard" className="text-red-400 hover:underline">→ Dashboard — High-level overview</Link></li>
              <li><Link href="/us-military-spending" className="text-red-400 hover:underline">→ US Military Spending breakdown</Link></li>
              <li><Link href="/cost-of-war" className="text-red-400 hover:underline">→ Cost of War — $11.3 trillion total</Link></li>
              <li><Link href="/iran-war-2026" className="text-red-400 hover:underline">→ Iran War 2026 — Latest data</Link></li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">🔧 Interactive Tools</h4>
            <ul className="space-y-1 text-stone-300 text-sm">
              <li><Link href="/tools/tax-receipt" className="text-red-400 hover:underline">→ Tax Receipt Calculator</Link></li>
              <li><Link href="/war-clock" className="text-red-400 hover:underline">→ War Clock — Real-time spending</Link></li>
              <li><Link href="/tools/budget-simulator" className="text-red-400 hover:underline">→ Budget Simulator</Link></li>
              <li><Link href="/tools/compare-wars" className="text-red-400 hover:underline">→ Compare Wars tool</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/methodology" className="text-red-800 hover:underline">→ Methodology — How we calculate these numbers</Link></li>
          <li><Link href="/sources" className="text-red-800 hover:underline">→ Sources — Complete bibliography</Link></li>
          <li><Link href="/downloads" className="text-red-800 hover:underline">→ Downloads — Raw data files</Link></li>
          <li><Link href="/glossary" className="text-red-800 hover:underline">→ Glossary — Military terms decoded</Link></li>
          <li><Link href="/about" className="text-red-800 hover:underline">→ About WarCosts — Mission and perspective</Link></li>
          <li><Link href="/share" className="text-red-800 hover:underline">→ Share — Shareable stat cards for social media</Link></li>
          <li><Link href="/tools" className="text-red-800 hover:underline">→ Tools — Interactive calculators</Link></li>
          <li><Link href="/war-clock" className="text-red-800 hover:underline">→ War Clock — Real-time spending counter</Link></li>
          <li><Link href="/iran-war-2026" className="text-red-800 hover:underline">→ Iran War 2026 — Latest conflict data</Link></li>
          <li><Link href="/us-wars-list" className="text-red-800 hover:underline">→ US Wars List — Every conflict since 1776</Link></li>
          <li><Link href="/cost-of-war" className="text-red-800 hover:underline">→ Cost of War — $11.3 trillion total</Link></li>
          <li><Link href="/decades" className="text-red-800 hover:underline">→ Decades — Spending by decade since 1940s</Link></li>
          <li><Link href="/veterans-voices" className="text-red-800 hover:underline">→ Veterans&apos; Voices — Real stories from those who served</Link></li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 border-t pt-6">
        <p className="text-stone-400 text-xs">
          <strong>Note:</strong> This FAQ is regularly updated as new questions arise and new data becomes available.
          Last updated: July 2026. If your question isn&apos;t answered here, check our
          <Link href="/methodology" className="text-red-800 hover:underline ml-1">Methodology</Link>,
          <Link href="/sources" className="text-red-800 hover:underline ml-1">Sources</Link>, or
          <Link href="/glossary" className="text-red-800 hover:underline ml-1">Glossary</Link> pages.
          All data is sourced from official government reports, peer-reviewed academic research, and
          established investigative organizations. We prioritize accuracy over sensationalism and
          use conservative estimates where uncertainty exists.
        </p>
      </div>

      {/* Schema for SEO */}
      <div className="mt-8 bg-stone-50 border rounded-lg p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">About This FAQ</h3>
        <p className="text-stone-600 text-sm">
          This FAQ covers {faqs.length} questions across {categoryOrder.length} categories.
          All answers are based on sourced data from official government reports (DoD, CRS, OMB, BLS),
          peer-reviewed academic research (Brown University Costs of War Project, UMass PERI),
          and established investigative organizations (SIPRI, Airwars, Iraq Body Count).
        </p>
        <p className="text-stone-500 text-sm mt-2">
          Every figure cited in these answers can be independently verified through our
          <Link href="/sources" className="text-red-800 hover:underline ml-1">Sources page</Link>.
          If you find any errors or have additional questions, please let us know.
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
