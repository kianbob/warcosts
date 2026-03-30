// @ts-nocheck
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The $32 Trillion Receipt — Every US War Itemized | WarCosts',
  description: 'The United States has spent $32.1 trillion on war since 1776. Your share: ~$97,000. Here is the itemized receipt.',
  keywords: ['total cost of us wars', 'war spending receipt', 'how much has us spent on war', 'war costs total', 'taxpayer war cost'],
  openGraph: {
    title: 'The $32 Trillion Receipt — Your Share: ~$97,000',
    description: 'Every US war, itemized like a store receipt. $32.1 trillion total. Paid by you.',
    url: 'https://warcosts.org/the-receipt',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your War Receipt: $97,000',
    description: '$32.1 trillion in wars since 1776. Itemized. No refunds.',
  },
}

const lineItems = [
  { name: 'Revolutionary War', cost: '$101B' },
  { name: 'War of 1812', cost: '$45B' },
  { name: 'Mexican-American', cost: '$38B' },
  { name: 'Civil War', cost: '$130B' },
  { name: 'Spanish-American', cost: '$15B' },
  { name: 'WWI', cost: '$5.5T' },
  { name: 'WWII', cost: '$6.2T' },
  { name: 'Korea', cost: '$4.1T' },
  { name: 'Vietnam', cost: '$5.2T' },
  { name: 'Gulf War', cost: '$250B' },
  { name: 'Afghanistan', cost: '$2.3T' },
  { name: 'Iraq', cost: '$1.9T' },
  { name: 'War on Terror (other)', cost: '$800B' },
  { name: 'Iran 2026 (ongoing)', cost: '$18B+' },
  { name: 'All Other Wars', cost: '$500B' },
]

export default function TheReceiptPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[{ label: 'The Receipt' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Article',
        headline: 'The $32 Trillion Receipt — Every US War Itemized',
        description: '$32.1 trillion on war since 1776. Your share: ~$97,000.',
        url: 'https://www.warcosts.org/the-receipt',
        datePublished: '2026-03-30', dateModified: '2026-03-30',
        publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://www.warcosts.org' },
      }) }} />

      {/* Hero */}
      <section className="bg-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'The Receipt' }]} dark />
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
            The $32 Trillion Receipt
          </h1>
          <p className="text-xl text-stone-300">
            Every war. Itemized. Your share: <span className="text-red-500 font-bold">~$97,000</span>.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ShareButtons title="The $32 Trillion War Receipt — Your Share: $97,000" />

          {/* The Receipt */}
          <div className="my-8 mx-auto max-w-md">
            <div className="bg-[#fffef5] border-2 border-dashed border-stone-300 rounded-sm p-6 md:p-8 shadow-lg font-mono text-sm leading-relaxed"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(0,0,0,0.03) 27px, rgba(0,0,0,0.03) 28px)',
              }}
            >
              <div className="text-center text-xs tracking-widest text-stone-400 mb-4">
                ================================
              </div>
              <div className="text-center font-bold text-stone-800 text-base mb-0">
                UNITED STATES OF AMERICA
              </div>
              <div className="text-center font-bold text-stone-800 text-sm mb-0">
                WAR DEPARTMENT RECEIPT
              </div>
              <div className="text-center text-stone-500 text-xs mb-4">
                1776 — 2026
              </div>
              <div className="text-center text-xs tracking-widest text-stone-400 mb-4">
                ================================
              </div>

              {/* Line items */}
              <div className="space-y-1">
                {lineItems.map(item => (
                  <div key={item.name} className="flex justify-between">
                    <span className="text-stone-700 truncate mr-2">{item.name}</span>
                    <span className="text-stone-900 font-bold whitespace-nowrap">{item.cost}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-stone-400 my-4" />

              <div className="flex justify-between font-bold">
                <span className="text-stone-700">SUBTOTAL WAR COSTS</span>
                <span className="text-stone-900">$27.1T</span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-stone-600">VA/Veterans Care</span>
                <span className="text-stone-800 font-semibold">$3.2T</span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-stone-600">Interest on War Debt</span>
                <span className="text-stone-800 font-semibold">$1.8T</span>
              </div>

              <div className="border-t border-dashed border-stone-400 my-4" />

              <div className="flex justify-between text-lg font-black">
                <span className="text-red-800">GRAND TOTAL</span>
                <span className="text-red-800">$32.1T</span>
              </div>

              <div className="text-center text-xs tracking-widest text-stone-400 my-4">
                ================================
              </div>

              <div className="space-y-1 text-stone-600 text-xs">
                <div className="flex justify-between">
                  <span>PAID BY:</span>
                  <span className="font-bold text-stone-800">U.S. Taxpayers</span>
                </div>
                <div className="flex justify-between">
                  <span>METHOD:</span>
                  <span className="font-bold text-stone-800">National Debt + Taxes</span>
                </div>
                <div className="flex justify-between">
                  <span>YOUR SHARE:</span>
                  <span className="font-bold text-red-800">~$97,000</span>
                </div>
              </div>

              <div className="text-center text-xs tracking-widest text-stone-400 my-4">
                ================================
              </div>

              <div className="text-center text-stone-500 text-xs">
                <p className="font-bold">THANK YOU FOR YOUR SERVICE</p>
                <p className="mt-1 italic">(Terms: No refunds. No returns.)</p>
              </div>
            </div>
          </div>

          {/* Context & Analysis */}
          <div className="prose max-w-none mt-12 text-stone-600">
            <h2 className="font-[family-name:var(--font-heading)] text-stone-900">What This Receipt Means</h2>
            <p>
              <strong>$32.1 trillion</strong>. That&apos;s the total cost of American wars from the Revolution
              through the current Iran operations, including direct military spending, veterans&apos; care, and
              interest on war-related debt. All figures adjusted to 2026 dollars.
            </p>
            <p>
              Divided among roughly 330 million Americans, that&apos;s about <strong>$97,000 per person</strong>.
              For a family of four: $388,000. That&apos;s a house. That&apos;s college for every child. That&apos;s
              a lifetime of healthcare.
            </p>

            <h2 className="font-[family-name:var(--font-heading)] text-stone-900">Where the Money Went</h2>
            <p>
              The two World Wars account for the largest share — roughly $11.7 trillion combined. But the
              post-9/11 wars are catching up: Afghanistan, Iraq, and the broader War on Terror have already
              cost over $5 trillion, and the meter is still running.
            </p>
            <p>
              The &ldquo;hidden&rdquo; costs are staggering. Veterans&apos; care ($3.2T) and interest on war debt ($1.8T)
              add $5 trillion that never appears in Pentagon budgets. These costs continue for decades after
              the last shot is fired.
            </p>

            <h2 className="font-[family-name:var(--font-heading)] text-stone-900">What $32 Trillion Could Buy</h2>
            <ul>
              <li>Free college for every American for the next 120 years</li>
              <li>Universal healthcare for 50 years</li>
              <li>Complete elimination of the national debt (with change)</li>
              <li>A $97,000 check to every man, woman, and child in America</li>
              <li>Complete transition to renewable energy — ten times over</li>
            </ul>

            <blockquote className="border-l-4 border-red-800">
              &ldquo;It is part of the general pattern of misguided policy that our country is now geared to
              an arms economy which was bred in an artificially induced psychosis of war hysteria and
              nurtured upon an incessant propaganda of fear.&rdquo;
              <br />— Douglas MacArthur, 1957
            </blockquote>
          </div>

          {/* Related */}
          <div className="mt-12 bg-white rounded-lg p-6 border">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related</h3>
            <ul className="space-y-2">
              <li><a href="/cost-per-kill" className="text-red-800 hover:underline">→ Cost Per Kill — The price of each enemy life</a></li>
              <li><a href="/war-calendar" className="text-red-800 hover:underline">→ War Calendar — 229 years at war</a></li>
              <li><a href="/analysis/if-we-stopped-today" className="text-red-800 hover:underline">→ If We Stopped Today — The tail costs</a></li>
              <li><a href="/cost-of-war" className="text-red-800 hover:underline">→ Cost of War — Live counter</a></li>
            </ul>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
