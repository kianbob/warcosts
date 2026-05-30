// @ts-nocheck
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { TailCostChart } from './TailCostChart'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: "If We Stopped Every War Today: What We'd Owe",
  description: 'Even if every US war ended tomorrow, we\'d still owe $8-12T in future obligations. VA care, disability, interest, cleanup for decades.',
  keywords: ['war tail costs', 'veteran care costs', 'future war obligations', 'war debt interest', 'cost after war ends'],
  openGraph: {
    title: "If We Stopped Every War Today, Here's What We'd Still Owe",
    description: '$400-500B/year for decades. $8-12T in future obligations. War doesn\'t end when the shooting stops.',
    url: 'https://warcosts.org/analysis/if-we-stopped-today',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Every War Today. Still Owe $8-12 Trillion.',
    description: 'VA care, disability, interest, nuclear maintenance, cleanup. The bill keeps coming.',
  },
}

const tailCosts = [
  { category: 'VA Healthcare', annual: '$120B', years: '30+', total: '$3.6T+', desc: 'Medical care for 18M+ veterans. Costs peak 30-40 years after conflict as veterans age.' },
  { category: 'Disability Payments', annual: '$150B', years: '30+', total: '$4.5T+', desc: 'Growing as post-9/11 veterans file claims. Average age of Vietnam vets now 75+.' },
  { category: 'Interest on War Debt', annual: '$200B+', years: 'Indefinite', total: '$6T+', desc: 'Wars were financed with debt. The interest compounds forever until principal is repaid.' },
  { category: 'Base Maintenance/Decommission', annual: '$25B', years: '10-20', total: '$250-500B', desc: '750+ overseas bases. Closing them costs billions in environmental remediation and logistics.' },
  { category: 'Environmental Cleanup', annual: 'Variable', years: '20-50', total: '$50B+', desc: 'Depleted uranium in Iraq, burn pits in Afghanistan, chemical contamination at domestic bases.' },
  { category: 'Nuclear Arsenal Maintenance', annual: '$52B', years: 'Indefinite', total: '$1.5T+', desc: 'The nuclear triad requires constant maintenance, modernization, and security. Cannot be "turned off."' },
  { category: 'Veteran Mental Health/Suicide Prevention', annual: '$15B', years: '30+', total: '$450B+', desc: '17 veteran suicides per day. PTSD, TBI, substance abuse — costs that grow over time.' },
]

const projectionData = [
  { year: 2026, low: 490, high: 520 },
  { year: 2028, low: 475, high: 510 },
  { year: 2030, low: 460, high: 505 },
  { year: 2032, low: 440, high: 495 },
  { year: 2034, low: 425, high: 480 },
  { year: 2036, low: 400, high: 465 },
  { year: 2038, low: 380, high: 450 },
  { year: 2040, low: 355, high: 430 },
  { year: 2042, low: 330, high: 410 },
  { year: 2044, low: 310, high: 395 },
  { year: 2046, low: 290, high: 375 },
  { year: 2048, low: 270, high: 355 },
  { year: 2050, low: 250, high: 340 },
  { year: 2052, low: 235, high: 320 },
  { year: 2054, low: 220, high: 305 },
  { year: 2056, low: 210, high: 290 },
  { year: 2058, low: 200, high: 280 },
  { year: 2060, low: 195, high: 270 },
]

export default function IfWeStoppedTodayPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[{ label: 'Analysis', href: '/analysis' }, { label: 'If We Stopped Today' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Article',
        headline: "If We Stopped Every War Today, Here's What We'd Still Owe",
        description: '$400-500B/year for decades. $8-12T in present value of future obligations.',
        url: 'https://www.warcosts.org/analysis/if-we-stopped-today',
        datePublished: '2026-03-30', dateModified: '2026-03-30',
        publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
      }) }} />

      {/* Hero */}
      <section className="bg-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'If We Stopped Today' }]} dark />
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
            If We Stopped Every War Today
          </h1>
          <p className="text-xl text-stone-300">
            Here&apos;s what we&apos;d still owe: <span className="text-red-500 font-bold">$8–12 trillion</span> in
            future obligations. <span className="text-red-500 font-bold">$400–500 billion per year</span> for decades.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ShareButtons title="If We Stopped Every War Today — What We'd Still Owe" />

          <p className="text-stone-600 my-6 text-lg">
            Imagine every gun fell silent tomorrow. Every soldier came home. Every base closed. Every drone
            grounded. <strong>The bill would keep coming for decades.</strong> War doesn&apos;t end when the
            shooting stops — the financial obligations extend 30, 40, even 50 years into the future.
          </p>

          {/* Cost breakdown */}
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mt-10 mb-4">
            The Tail Costs of War
          </h2>

          <div className="space-y-4">
            {tailCosts.map(c => (
              <div key={c.category} className="bg-white rounded-xl border p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="font-bold text-stone-900 text-lg">{c.category}</h3>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-red-50 text-red-800 px-3 py-1 rounded-full font-bold">{c.annual}/yr</span>
                    <span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full">{c.years}</span>
                    <span className="bg-red-100 text-red-900 px-3 py-1 rounded-full font-bold">{c.total}</span>
                  </div>
                </div>
                <p className="text-stone-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mt-8 text-center">
            <p className="text-stone-600 text-sm uppercase tracking-wider font-semibold">Present Value of Future Obligations</p>
            <p className="text-5xl font-black text-red-800 font-[family-name:var(--font-heading)] my-2">$8–12 Trillion</p>
            <p className="text-stone-500">Even if every war ended today.</p>
          </div>

          {/* Projection chart */}
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mt-12 mb-4">
            Projected Annual Tail Costs, 2026–2060
          </h2>
          <p className="text-stone-500 text-sm mb-4">
            Low and high estimates of annual war-related obligations assuming all active conflicts cease in 2026.
          </p>
          <TailCostChart data={projectionData} />

          {/* Analysis */}
          <div className="prose max-w-none mt-12 text-stone-600">
            <h2 className="font-[family-name:var(--font-heading)] text-stone-900">Why the Costs Don&apos;t Stop</h2>
            <p>
              The single largest ongoing cost is <strong>veterans&apos; care</strong>. The US has roughly 18 million
              living veterans. Peak healthcare costs for any war come 30-40 years after the conflict — when veterans
              are elderly and dealing with the accumulated effects of service: Agent Orange, burn pit exposure,
              traumatic brain injuries, PTSD.
            </p>
            <p>
              Vietnam veterans are now in their 70s and 80s. Their healthcare costs are at peak levels. Post-9/11
              veterans are just entering their 40s and 50s — their peak cost years are still ahead, in the 2040s
              and 2050s.
            </p>
            <p>
              <strong>Interest on war debt</strong> is the silent killer. The United States financed most of its wars
              through borrowing. That debt accumulates interest — currently over $200 billion per year attributable
              to war spending. Unlike veterans who eventually pass away, debt interest compounds indefinitely until
              the principal is repaid.
            </p>
            <p>
              The <strong>nuclear arsenal</strong> is perhaps the most permanent cost. The US maintains roughly 5,500
              nuclear warheads. The current modernization program alone costs $1.7 trillion over 30 years. These
              weapons require constant maintenance, security, and upgrades — a cost that never ends as long as the
              weapons exist.
            </p>

            <h2 className="font-[family-name:var(--font-heading)] text-stone-900">The Human Toll That Money Can&apos;t Capture</h2>
            <p>
              Seventeen veterans take their own lives every day. That&apos;s more than all combat deaths in the
              War on Terror combined — every single year. The VA spends $15 billion annually on mental health,
              but veteran suicide rates have not meaningfully decreased in a decade.
            </p>
            <p>
              Environmental contamination from military operations — depleted uranium in Iraq, burn pits in
              Afghanistan, PFAS at domestic bases — will require cleanup lasting generations. Some contamination,
              like depleted uranium, has a half-life of 4.5 billion years.
            </p>

            <blockquote className="border-l-4 border-red-800">
              &ldquo;The true cost of war is not counted in dollars or even in blood. It is counted in the
              shattered lives of those who survive, in the communities that never recover, and in the futures
              that are never lived.&rdquo;
            </blockquote>
          </div>

          {/* Related */}
          <div className="mt-12 bg-white rounded-lg p-6 border">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related</h3>
            <ul className="space-y-2">
              <li><a href="/the-receipt" className="text-red-800 hover:underline">→ The $32 Trillion Receipt</a></li>
              <li><a href="/cost-per-kill" className="text-red-800 hover:underline">→ Cost Per Kill — The price of a life</a></li>
              <li><a href="/war-calendar" className="text-red-800 hover:underline">→ War Calendar — 229 years at war</a></li>
              <li><a href="/analysis/aftermath" className="text-red-800 hover:underline">→ Aftermath — The human cost of war</a></li>
            </ul>
          </div>
        </div>
      </section>

      
      <RelatedArticles articles={[{"slug":"us-military-budget-explained","title":"Military Budget Explained","desc":"Where $886B goes."},{"slug":"military-spending-vs-education","title":"Military vs Education","desc":"Where the money really goes."},{"slug":"pentagon-waste","title":"Pentagon Waste","desc":"Failed audits and trillions lost."},{"slug":"what-could-we-buy","title":"What $11.6T Could Buy","desc":"What we could have had instead."}]} />
      <BackToTop />
    </div>
  )
}
