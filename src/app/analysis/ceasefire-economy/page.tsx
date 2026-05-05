import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The Ceasefire Economy: Oil, Markets & Peace',
  description: 'Oil hit $150/barrel. Gas at $4/gallon. Hormuz was closed. The ceasefire opened it — but for how long? The economic fallout.',
  keywords: ['iran ceasefire economy', 'oil price iran war', 'strait of hormuz 2026', 'gas prices iran war', 'iran war economic impact'],
  openGraph: {
    title: 'The Ceasefire Economy: Oil, Markets, and the Cost of Peace',
    description: '$150 oil, $4 gas, Hormuz closure, and a ceasefire that expires April 22. The economic story of the Iran war.',
    url: 'https://www.warcosts.org/analysis/ceasefire-economy',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ceasefire Economy: Oil, Markets, and the Cost of Peace',
    description: 'The Iran war shattered oil\'s price compass. The ceasefire is a band-aid. Here\'s the economic damage.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/ceasefire-economy',
  },
}

export default function CeasefireEconomyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Ceasefire Economy: Oil, Markets, and the Cost of Peace',
            description: 'The economic fallout of the Iran war — oil shocks, market chaos, and a ceasefire on borrowed time.',
            datePublished: '2026-04-17T00:00:00Z',
            dateModified: '2026-04-17T00:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/ceasefire-economy' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Ceasefire Economy' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Economic Analysis — April 17, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Ceasefire Economy
        </h1>
        <p className="text-xl text-stone-300 mb-4">Oil, Markets, and the Cost of Peace</p>
        <p className="text-stone-400 text-lg">
          The bombs stopped on April 8. The economic shockwaves didn&apos;t. Oil traded near $150 a barrel,
          gas hit $4 a gallon, airlines rerouted across three continents, and the IMF rewrote its
          global forecast. Now the ceasefire expires in 5 days — and nobody knows what comes next.
        </p>
      </div>

      <ShareButtons title="The Ceasefire Economy: Oil, Markets, and the Cost of Peace" />

      {/* Key Numbers */}
      <div className="bg-stone-900 border border-red-900/60 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3 mb-5">
          <span className="text-2xl">📊</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">The Economic Toll</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$150</div>
            <div className="text-stone-400 text-sm">Peak Oil (per barrel)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">$4.00</div>
            <div className="text-stone-400 text-sm">Gas Price (per gallon)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">20%</div>
            <div className="text-stone-400 text-sm">Global Oil Supply Disrupted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">30%</div>
            <div className="text-stone-400 text-sm">IMF Forecast Revision</div>
          </div>
        </div>
        <p className="text-stone-500 text-xs mt-4">Sources: IEA (Apr 14), Reuters (Apr 16), IMF forecast revision (Apr 15), Wikipedia economic impact data</p>
      </div>

      {/* The Hormuz Effect */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Hormuz Effect: 21 Miles That Shook the Global Economy
        </h2>
        <p className="text-stone-600 mb-6">
          The Strait of Hormuz is 21 miles wide at its narrowest point. Through it passes roughly
          20% of the world&apos;s oil supply and significant liquefied natural gas (LNG) volumes. When
          Iran closed it in early March, the effect was immediate and devastating.
        </p>
        <p className="text-stone-600 mb-6">
          Brent crude surged 10–13% to $80–82 per barrel within 48 hours of the war starting on
          February 28. As the Hormuz blockade tightened, prices spiraled to what the IEA described as
          &quot;near record highs of $150 a barrel.&quot; Reuters reported on April 16 that the war has
          &quot;shattered oil&apos;s price compass&quot; — the normal pricing models simply don&apos;t work anymore.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">Timeline of the Oil Shock</h3>
            <div className="space-y-2 text-sm text-stone-600">
              <div className="flex items-start gap-3">
                <span className="text-stone-400 font-mono whitespace-nowrap">Feb 28</span>
                <span>War begins. Oil at ~$70. Initial 10–13% spike to $80–82.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-stone-400 font-mono whitespace-nowrap">Mar 2–5</span>
                <span>Iran closes Strait of Hormuz. 20% of global supply offline. Oil crosses $100.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-stone-400 font-mono whitespace-nowrap">Mar 10–15</span>
                <span>Bahrain refinery ablaze. Force majeure declared. Cargoes trading near $150.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-stone-400 font-mono whitespace-nowrap">Mar 31</span>
                <span>US gas prices hit $4.00/gallon — a 30% surge from pre-war levels.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-stone-400 font-mono whitespace-nowrap">Apr 8</span>
                <span>Ceasefire. Iran declares Hormuz &quot;completely open.&quot; Oil dips but stays elevated.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-stone-400 font-mono whitespace-nowrap">Apr 15</span>
                <span>IMF raises 2026 oil forecast 30% to $82/barrel. IEA warns of supply cuts and demand shrinkage.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Consumer Impact */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Your Wallet: What the War Costs You Personally
        </h2>
        <p className="text-stone-600 mb-6">
          Pentagon spending is abstract. Gas prices are not. Here&apos;s how the Iran war is hitting
          American households right now.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">🚗 At the Pump</h3>
            <p className="text-stone-600 text-sm">
              Gas prices surged 30% to <strong>$4.00/gallon</strong> by March 31. The average American
              household uses about 1,000 gallons per year. That&apos;s an extra <strong>$900–1,000 annually</strong>.
              For families in rural areas driving more, the hit is worse.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">✈️ Air Travel</h3>
            <p className="text-stone-600 text-sm">
              Airlines rerouted flights across three continents as Middle East airspace closed.
              Longer routes mean higher fuel costs, passed directly to consumers. International
              flights from the US to Asia and Africa are up 15–25% in price.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">🛒 Groceries & Goods</h3>
            <p className="text-stone-600 text-sm">
              Oil prices flow through the entire economy. Transportation costs affect everything
              from food to Amazon deliveries. Economists estimate a sustained $30/barrel oil
              increase adds 0.5–1.0% to consumer price inflation within 3–6 months.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">📉 Your 401(k)</h3>
            <p className="text-stone-600 text-sm">
              Market volatility spiked in March. Energy stocks surged while everything else sold off.
              The S&P 500 dropped 8% in the first two weeks of the war before partially recovering
              during the ceasefire. Uncertainty is the market&apos;s worst enemy — and the ceasefire
              expiration is the biggest uncertainty on the calendar.
            </p>
          </div>
        </div>
      </section>

      {/* The Ceasefire Premium */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Ceasefire Premium: How Much Is Peace Worth?
        </h2>
        <p className="text-stone-600 mb-6">
          When the April 8 ceasefire was announced, oil dipped and markets rallied. Iran declared the
          Strait of Hormuz &quot;completely open.&quot; But the relief was muted — because everyone knows
          this ceasefire could collapse.
        </p>
        <p className="text-stone-600 mb-6">
          Analysts have been pricing in what they call a &quot;ceasefire premium&quot; — the gap between where
          oil would be if peace were assured versus where it trades with the threat of resumed hostilities.
          Reuters estimates this premium at <strong>$15–25 per barrel</strong>. That translates to roughly
          <strong> 35–60 cents per gallon</strong> at the pump that Americans are paying purely for uncertainty.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 my-6">
          <p className="text-amber-800 font-semibold mb-2">💡 The April 22 Cliff</p>
          <p className="text-stone-600 text-sm">
            The ceasefire expires April 22. Trump told ABC News on April 14 that he&apos;s &quot;not considering
            extending&quot; it. ISW reports Iran is using the pause to &quot;reorganize and regenerate its ballistic
            missile forces.&quot; If fighting resumes, Goldman Sachs projects oil at $170+ per barrel.
            That would push gas toward $5/gallon in the US.
          </p>
        </div>
      </section>

      {/* Global Ripple Effects */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Global Ripple Effects
        </h2>

        <div className="space-y-4">
          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">🌍 Developing Nations Hit Hardest</h3>
            <p className="text-stone-600 text-sm">
              Countries that import oil and food are being devastated. The IEA warned that the oil shock
              will simultaneously cut supply and shrink demand — a stagflationary combination that
              hammers the poorest nations. Pakistan (which is mediating the ceasefire) faces its own
              energy crisis from the disruption.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">🏭 LNG Markets in Chaos</h3>
            <p className="text-stone-600 text-sm">
              It&apos;s not just oil. Significant liquefied natural gas volumes flow through Hormuz.
              European countries still weaning off Russian gas are now facing a second supply crisis.
              LNG spot prices in Asia hit multi-year highs in March.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-5">
            <h3 className="font-bold text-stone-900 mb-2">📉 The IMF Rewrites the Forecast</h3>
            <p className="text-stone-600 text-sm">
              On April 15, the IMF raised its base-case oil price forecast for 2026 by <strong>30%</strong> to
              $82/barrel. That&apos;s the largest mid-year revision in recent memory. Global GDP growth
              forecasts have been cut. The fund warned of &quot;significant downside risks&quot; if the
              ceasefire collapses.
            </p>
          </div>
        </div>
      </section>

      {/* The Defense Budget Angle */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The $1.5 Trillion Question
        </h2>
        <p className="text-stone-600 mb-6">
          On April 3, the White House proposed a <strong>$1.5 trillion FY2027 defense budget</strong> —
          a 40% increase funded by 10% cuts to domestic programs. The war created the political
          conditions to push through the largest defense budget in history.
        </p>
        <p className="text-stone-600 mb-6">
          This is how wars reshape economies. The direct military spending is one line item. The
          real transformation happens in the budget — priorities permanently shifted, domestic
          programs permanently cut, and a new spending baseline that never goes back down. The
          post-9/11 defense budget doubled and never returned to pre-war levels. The Iran war
          is accelerating the same dynamic at warp speed.
        </p>
        <div className="bg-stone-100 border border-stone-200 rounded-lg p-5">
          <p className="text-stone-700 italic">
            &quot;U.S. defense budget surges 40% for Iran war effort. White House seeks $1.5 trillion
            funding, cuts domestic programs 10% amid debt concerns.&quot;
          </p>
          <p className="text-stone-500 text-sm mt-2">— Chosun Ilbo, April 4, 2026</p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Three Scenarios for What Comes Next
        </h2>

        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-800 mb-2">🟢 Ceasefire Extended → Permanent Deal</h3>
            <p className="text-stone-600 text-sm">
              Talks succeed. Ceasefire extended beyond April 22. Hormuz stays open. Oil settles to $80–90.
              Gas drifts back toward $3.50. Markets stabilize. Total war cost stays under $150B direct.
              <strong> Probability: 25–30%</strong>
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="font-bold text-amber-800 mb-2">🟡 Ceasefire Collapses → Limited Resumption</h3>
            <p className="text-stone-600 text-sm">
              Fighting resumes but at lower intensity. Hormuz partially disrupted. Oil spikes to $120–140.
              Gas hits $4.50–5.00. Another ceasefire within 2–4 weeks. Total cost: $200–400B direct.
              <strong> Probability: 40–45%</strong>
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h3 className="font-bold text-red-800 mb-2">🔴 Full Escalation → Regional War</h3>
            <p className="text-stone-600 text-sm">
              Ceasefire collapses. Iran retaliates massively. Hormuz fully closed. Lebanon ceasefire collapses.
              Oil hits $170–200. Gas exceeds $5.50. Possible US ground deployment. Total cost: $500B–$2T+.
              <strong> Probability: 20–25%</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-stone-300 text-lg mb-4">
            The Iran war has already caused the worst oil shock since 1973. The ceasefire provided
            temporary relief, but markets remain priced for conflict. Every American is paying a &quot;war
            tax&quot; of $900–1,000 per year in higher energy costs — and that&apos;s before counting the
            $92 billion in direct military spending that comes out of federal revenue.
          </p>
          <p className="text-stone-300 text-lg">
            The ceasefire expires in 5 days. The next round of talks begins Monday in Pakistan.
            The entire global economy is watching a ticking clock.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { slug: '49-days-in', title: '49 Days In: What It\'s Cost', desc: 'The comprehensive cost breakdown at Day 49.' },
            { slug: 'oil-price-shock-2026', title: '$116 Oil and Counting', desc: 'The oil price shock hitting your wallet.' },
            { slug: 'hormuz-crisis', title: 'The Strait of Hormuz Crisis', desc: 'How one waterway could crash the global economy.' },
          ].map(a => (
            <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-white border border-stone-200 rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-stone-900 text-sm mb-1">{a.title}</h3>
              <p className="text-stone-500 text-xs">{a.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
