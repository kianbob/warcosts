// @ts-nocheck
import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import FaqJsonLd from '@/components/FaqJsonLd'
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

          {/* The Compounding Problem */}
          <div className="bg-stone-900 text-white rounded-xl p-8 mt-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Compounding Problem</h2>
            <div className="space-y-3 text-stone-300 text-sm">
              <p>
                War costs don&apos;t add up linearly — they compound. The $200B+ in annual interest on war debt
                generates its own interest. VA healthcare costs rise faster than inflation as treatments improve
                and veterans age. Disability claims increase as awareness of conditions like TBI and burn pit
                exposure grows.
              </p>
              <p>
                The Brown University Costs of War Project estimates that <strong className="text-white">interest
                payments alone</strong> on post-9/11 war debt will total $6.5 trillion by 2050. That&apos;s more
                than the direct cost of fighting the wars themselves.
              </p>
              <p>
                This is the hidden architecture of war finance: by borrowing instead of taxing, the government
                hides the true cost from voters. But compound interest doesn&apos;t care about politics.
                The bill comes due regardless.
              </p>
            </div>
          </div>

          {/* The Vietnam Lesson */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-12">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-amber-900 mb-3">Case Study: Vietnam’s Tail Costs</h2>
            <div className="space-y-3 text-stone-700 text-sm">
              <p>
                Vietnam combat ended in 1975 — over 50 years ago. Yet the US still spends <strong>$22 billion per year</strong> on
                Vietnam-era veteran benefits. Agent Orange disability claims continue to rise as veterans age.
                VA healthcare costs for Vietnam veterans peaked in the 2010s and remain near peak levels today.
              </p>
              <p>
                The total cost of veteran care for Vietnam — paid <em>after</em> the war ended — now exceeds the
                cost of fighting the war itself. This is the pattern that will repeat for Afghanistan, Iraq, and Iran.
              </p>
              <p className="font-bold text-amber-800">
                The lesson: the true cost of war is not known until the last veteran dies. For Vietnam, that won&apos;t
                happen until roughly 2045. For Iraq and Afghanistan, not until 2070+. For Iran, not until 2090.
              </p>
            </div>
          </div>

          {/* What Could We Do Instead */}
          <div className="mt-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900 mb-4">What $8–12 Trillion Could Buy Instead</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { item: 'Free college', desc: 'For every American student for 40+ years', cost: '$80B/yr' },
                { item: 'Universal pre-K', desc: 'For every 3- and 4-year-old for 50+ years', cost: '$30B/yr' },
                { item: 'End homelessness', desc: 'Housing-first for every homeless American, permanently', cost: '$20B/yr' },
                { item: 'Clean water', desc: 'For every community in America, including lead pipe replacement', cost: '$45B one-time' },
                { item: 'Renewable energy transition', desc: 'Full grid conversion to renewables', cost: '$4.5T total' },
                { item: 'National high-speed rail', desc: 'Connecting every major US city', cost: '$2T total' },
              ].map((o, i) => (
                <div key={i} className="bg-white border rounded-lg p-4">
                  <h3 className="font-bold text-stone-900">{o.item}</h3>
                  <p className="text-stone-600 text-sm">{o.desc}</p>
                  <p className="text-red-700 text-sm font-semibold mt-1">Cost: {o.cost}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="mt-12 bg-white rounded-lg p-6 border">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related</h3>
            <ul className="space-y-2">
              <li><Link href="/the-receipt" className="text-red-800 hover:underline">→ The $32 Trillion Receipt</Link></li>
              <li><Link href="/cost-per-kill" className="text-red-800 hover:underline">→ Cost Per Kill — The price of a life</Link></li>
              <li><Link href="/war-calendar" className="text-red-800 hover:underline">→ War Calendar — 229 years at war</Link></li>
              <li><Link href="/analysis/aftermath" className="text-red-800 hover:underline">→ Aftermath — The human cost of war</Link></li>
              <li><Link href="/veterans-voices" className="text-red-800 hover:underline">→ Veterans&apos; Voices — Real stories from those who served</Link></li>
              <li><Link href="/decades" className="text-red-800 hover:underline">→ Spending by Decade — The ratchet effect</Link></li>
            </ul>
          </div>
        </div>
      </section>

          {/* Methodology Note */}
          <div className="mt-8 text-stone-500 text-xs border-t pt-4">
            <p>
              <strong>Methodology:</strong> Present value calculations use a 3% discount rate applied to projected annual
              costs through 2060. VA cost projections are based on Brown University Costs of War methodology and VA
              budget trend data. Interest calculations assume current debt levels remain constant (no additional
              borrowing). Nuclear arsenal costs based on CBO&apos;s 2023 projection of the nuclear modernization program.
              Low/high ranges reflect uncertainty in veteran claim rates, healthcare cost inflation, and interest rate
              assumptions. See our <Link href="/methodology" className="text-red-800 hover:underline">Methodology page</Link> for
              complete details.
            </p>
          </div>

      <FaqJsonLd faqs={[
        { q: 'How much would the US still owe if every war ended today?', a: 'Even if every US war ended tomorrow, the country would still owe $8-12 trillion in future obligations: VA healthcare ($3.6T+), disability payments ($4.5T+), interest on war debt ($6T+), nuclear arsenal maintenance ($1.5T+), and environmental cleanup ($50B+).' },
        { q: 'Why do war costs continue after wars end?', a: 'War creates long-term obligations: veteran healthcare peaks 30-40 years after service, disability payments continue for life, war debt accumulates interest indefinitely, nuclear weapons require permanent maintenance, and environmental contamination takes decades to clean up.' },
        { q: 'How much does the US spend on veteran care?', a: 'The US currently spends approximately $270 billion per year on veteran care through the VA ($120B healthcare + $150B disability payments). These costs are expected to remain above $200B/yr through at least 2060 as post-9/11 veterans age.' },
        { q: 'How much interest does the US pay on war debt?', a: 'The US pays over $200 billion per year in interest on debt attributable to war spending. Unlike other tail costs, interest compounds indefinitely until the principal is repaid. Total war-related interest is projected to exceed $6 trillion.' },
        { q: 'When will post-9/11 veteran care costs peak?', a: 'VA healthcare costs for post-9/11 veterans are projected to peak in the 2040s-2050s, when these veterans are in their 60s-70s and dealing with the accumulated effects of service including PTSD, TBI, burn pit exposure, and aging-related conditions.' },
      ]} />

      {/* Key Insight Callout */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-900 mb-3">The Bottom Line</h3>
          <p className="text-stone-700">
            War is the only government program that keeps costing money for 50+ years after it ends.
            When politicians vote for war, they are committing not just current budgets but the budgets
            of future generations who will have no say in the decision.
          </p>
          <p className="text-stone-600 text-sm mt-3">
            The $8–12 trillion in future obligations from past wars is money that cannot be spent on
            education, healthcare, infrastructure, or climate change. These are not hypothetical costs —
            they are legally binding commitments that the US government must pay.
          </p>
        </div>
      </div>

      <RelatedArticles articles={[{"slug":"us-military-budget-explained","title":"Military Budget Explained","desc":"Where $886B goes."},{"slug":"military-spending-vs-education","title":"Military vs Education","desc":"Where the money really goes."},{"slug":"pentagon-waste","title":"Pentagon Waste","desc":"Failed audits and trillions lost."},{"slug":"what-could-we-buy","title":"What $11.6T Could Buy","desc":"What we could have had instead."}]} />
      <BackToTop />
    </div>
  )
}
