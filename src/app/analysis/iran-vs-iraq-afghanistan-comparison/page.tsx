import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'How the Iran War Compares to Iraq and Afghanistan at Day 49 — WarCosts.org',
  description: 'At Day 49, the Iran war has already cost more than the entire first year of Iraq. Here\'s how Operation Epic Fury stacks up against America\'s 21st-century wars.',
  keywords: ['iran war comparison', 'iran vs iraq cost', 'iran vs afghanistan', 'war cost comparison 2026', 'operation epic fury vs iraq'],
  openGraph: {
    title: 'How the Iran War Compares to Iraq and Afghanistan at Day 49',
    description: '$92B in 49 days vs $53B for Iraq\'s entire first year. The Iran war is on a different scale entirely.',
    url: 'https://www.warcosts.org/analysis/iran-vs-iraq-afghanistan-comparison',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iran vs Iraq vs Afghanistan: War Cost Comparison at Day 49',
    description: 'Iran has cost more in 7 weeks than Iraq cost in its first year. The numbers tell the story.',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/iran-vs-iraq-afghanistan-comparison',
  },
}

const comparisonData = [
  {
    metric: 'Cost Through Day 49',
    iran: '$92B+',
    iraq: '~$12B',
    afghanistan: '~$6B',
    note: 'Iran\'s air campaign is vastly more munitions-intensive than either predecessor.',
  },
  {
    metric: 'Cost — First Year (Projected)',
    iran: '$300–500B (est.)',
    iraq: '$53B',
    afghanistan: '$20B',
    note: 'Iraq and Afghanistan costs escalated over years. Iran front-loaded spending.',
  },
  {
    metric: 'Daily Burn Rate',
    iran: '$1.88B/day',
    iraq: '$200–350M/day',
    afghanistan: '$100–200M/day',
    note: 'Iran\'s rate is 5–10× higher due to precision munitions and air defense costs.',
  },
  {
    metric: 'US Troops Deployed',
    iran: '~45,000 (naval/air)',
    iraq: '~150,000 (ground)',
    afghanistan: '~10,000 (initial)',
    note: 'Iran is primarily an air/naval war — fewer troops but more expensive per capita.',
  },
  {
    metric: 'Congressional Authorization',
    iran: 'None (2001 AUMF cited)',
    iraq: 'Yes (Oct 2002 AUMF)',
    afghanistan: 'Yes (Sept 2001 AUMF)',
    note: 'The Iran war is the most expensive unauthorized military action in history.',
  },
  {
    metric: 'Oil Price Impact',
    iran: '+100% ($70 → $150 peak)',
    iraq: '+40% ($25 → $35)',
    afghanistan: 'Minimal',
    note: 'Hormuz closure caused the worst oil shock since 1973.',
  },
  {
    metric: 'Public Support at ~Day 50',
    iran: '24% "worth it"',
    iraq: '72% approval',
    afghanistan: '88% approval',
    note: 'Iran started with the lowest public support of any modern US war.',
  },
]

export default function IranVsIraqAfghanistanPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How the Iran War Compares to Iraq and Afghanistan at Day 49',
            description: 'A data-driven comparison of America\'s three 21st-century wars at the same point in their timelines.',
            datePublished: '2026-04-17T00:00:00Z',
            dateModified: '2026-04-17T00:00:00Z',
            author: { '@type': 'Organization', name: 'WarCosts.org' },
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://www.warcosts.org' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.warcosts.org/analysis/iran-vs-iraq-afghanistan-comparison' },
          }),
        }}
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Iran vs Iraq & Afghanistan' }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Comparative Analysis — April 17, 2026</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Iran vs. Iraq vs. Afghanistan
        </h1>
        <p className="text-xl text-stone-300 mb-4">How America&apos;s Wars Compare at Day 49</p>
        <p className="text-stone-400 text-lg">
          Every new war is compared to the last one. But the Iran war isn&apos;t tracking like Iraq
          or Afghanistan — it&apos;s on a completely different cost trajectory.
        </p>
      </div>

      <ShareButtons title="How the Iran War Compares to Iraq and Afghanistan at Day 49" />

      {/* The Headline Comparison */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Headline Number
        </h2>
        <div className="bg-stone-900 border border-red-900/60 rounded-xl p-6 mb-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-sm text-stone-400 mb-1">Iran (49 days)</div>
              <div className="text-3xl md:text-4xl font-bold text-red-400">$92B+</div>
            </div>
            <div>
              <div className="text-sm text-stone-400 mb-1">Iraq (first year)</div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400">$53B</div>
            </div>
            <div>
              <div className="text-sm text-stone-400 mb-1">Afghanistan (first year)</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">$20B</div>
            </div>
          </div>
          <p className="text-stone-500 text-xs mt-4 text-center">
            The Iran war has cost more in 7 weeks than Iraq cost in its entire first year.
          </p>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Side-by-Side: Every Metric
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-stone-300">
                <th className="text-left py-3 pr-4 text-stone-900 font-bold">Metric</th>
                <th className="text-center py-3 px-3 text-red-600 font-bold">Iran 2026</th>
                <th className="text-center py-3 px-3 text-amber-600 font-bold">Iraq 2003</th>
                <th className="text-center py-3 px-3 text-blue-600 font-bold">Afghanistan 2001</th>
              </tr>
            </thead>
            <tbody className="text-stone-600">
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-stone-200">
                  <td className="py-3 pr-4 font-medium text-stone-900">{row.metric}</td>
                  <td className="py-3 px-3 text-center font-semibold">{row.iran}</td>
                  <td className="py-3 px-3 text-center">{row.iraq}</td>
                  <td className="py-3 px-3 text-center">{row.afghanistan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Iran Is More Expensive */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Why Iran Is So Much More Expensive
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-stone-900 text-lg mb-2">1. Precision Munitions Are Expensive</h3>
            <p className="text-stone-600">
              Iraq in 2003 relied heavily on conventional ground forces. The Iran campaign is almost entirely
              precision-guided munitions — Tomahawks ($2.5M each), JASSM-ERs ($1.5M), GBU-57 bunker busters ($3.5M),
              and B-2/B-21 sorties ($135M+ per mission). When you strike 10,000+ targets exclusively with precision
              weapons, the bill runs up fast.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-stone-900 text-lg mb-2">2. Air Defense Is a Money Pit</h3>
            <p className="text-stone-600">
              Neither Iraq nor Afghanistan could seriously threaten US forces with missile barrages. Iran launched
              2,500+ drones and missiles in its first retaliatory wave alone. Each SM-3 interceptor costs $36 million.
              The defensive side of this war may cost as much as the offensive side — a dynamic that never existed
              in Iraq or Afghanistan.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-stone-900 text-lg mb-2">3. The Hormuz Multiplier</h3>
            <p className="text-stone-600">
              Iraq&apos;s 2003 invasion barely moved oil prices (a 40% spike that quickly reversed). Iran&apos;s closure
              of the Strait of Hormuz disrupted 20% of global oil supply, triggering a 100%+ price surge and
              economic shockwaves that dwarfed the direct military costs. Neither Iraq nor Afghanistan had
              this kind of global economic leverage.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-stone-900 text-lg mb-2">4. No Ground War (Yet) — But No Cheap Option Either</h3>
            <p className="text-stone-600">
              The absence of a ground invasion might seem like a cost saver. In reality, air-only campaigns
              are extraordinarily expensive per strike. Iraq&apos;s ground forces were relatively cheap to deploy
              (soldiers cost less than Tomahawks). The Iran war has all the costs of a high-tech air war
              with none of the &quot;boots on the ground&quot; cost efficiencies that paradoxically make ground wars
              cheaper on a per-day basis — even if they last longer.
            </p>
          </div>
        </div>
      </section>

      {/* The Long-Term Warning */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          The Long-Term Warning: Where This Goes
        </h2>
        <p className="text-stone-600 mb-6">
          The Watson Institute at Brown University found that post-9/11 wars ultimately cost 5–10 times
          their initial price tags when you include veterans&apos; care, interest on war debt, and long-term
          economic impacts:
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-white border border-stone-200 rounded-lg p-4 flex justify-between items-center">
            <span className="text-stone-900 font-medium">Afghanistan (initial est.)</span>
            <span className="text-stone-600">$20B/year → <span className="text-red-600 font-bold">$2.3 trillion total</span></span>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 flex justify-between items-center">
            <span className="text-stone-900 font-medium">Iraq (initial est.)</span>
            <span className="text-stone-600">$53B first year → <span className="text-red-600 font-bold">$3 trillion total</span></span>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 flex justify-between items-center">
            <span className="text-stone-900 font-medium">Iran (if pattern holds)</span>
            <span className="text-stone-600">$92B in 49 days → <span className="text-red-600 font-bold">$1–5 trillion total?</span></span>
          </div>
        </div>

        <p className="text-stone-600">
          The range is enormous because no one knows what happens next. A short war that ends with the
          ceasefire might &quot;only&quot; cost $500 billion when all obligations are counted. A prolonged conflict
          or ground invasion could easily hit the multi-trillion mark. The CBO hasn&apos;t even published
          a formal estimate yet — and history says their first estimate will be too low anyway.
        </p>
      </section>

      {/* Public Opinion Divergence */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-6">
          Public Opinion: A Different War in a Different Era
        </h2>
        <p className="text-stone-600 mb-6">
          Perhaps the starkest difference isn&apos;t cost — it&apos;s support. After 9/11, 88% of Americans backed
          the Afghanistan invasion. Iraq launched with 72% approval. The Iran war? Just 24% say it&apos;s been
          worth it at the 49-day mark.
        </p>
        <p className="text-stone-600 mb-6">
          It took Iraq <strong>three years</strong> to reach majority opposition. It took Afghanistan nearly a decade.
          Iran hit majority opposition within weeks. Americans learned from the last two decades of war — they
          know the initial cost estimates are always wrong, the &quot;quick war&quot; never is, and the bill always
          comes due.
        </p>
        <div className="bg-stone-100 border border-stone-200 rounded-lg p-5">
          <p className="text-stone-700 italic">
            &quot;A majority say they are concerned for U.S. military personnel and have a negative outlook
            for their personal finances as energy prices soar.&quot;
          </p>
          <p className="text-stone-500 text-sm mt-2">— Reuters/Ipsos poll, April 3, 2026</p>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Pattern</h2>
          <p className="text-stone-300 text-lg mb-4">
            Every American war since 2001 has followed the same pattern: underestimated costs, overestimated
            timelines, and public support that erodes as the bill comes due. The Iran war is following
            this pattern — but at 5–10× the speed and cost of its predecessors.
          </p>
          <p className="text-stone-300 text-lg">
            At Day 49 of Iraq, the statue had just fallen and &quot;Mission Accomplished&quot; was a month away.
            At Day 49 of Iran, we&apos;re already negotiating a ceasefire and Americans have already decided
            it wasn&apos;t worth it. Maybe that&apos;s progress. Or maybe it just means the next chapter is worse.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { slug: '49-days-in', title: '49 Days In: What It\'s Cost', desc: 'The comprehensive cost breakdown at Day 49.' },
            { slug: 'iran-war-cost-breakdown', title: 'Iran War Cost: Day-by-Day', desc: 'The original cost tracker with daily spending.' },
            { slug: 'ceasefire-economy', title: 'The Ceasefire Economy', desc: 'Oil, markets, and the cost of peace.' },
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
