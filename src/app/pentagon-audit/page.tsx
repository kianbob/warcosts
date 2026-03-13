import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pentagon Audit Failures: 8 Consecutive Failed Audits (2018-2025) | WarCosts',
  description: 'Track the Pentagon\'s unprecedented audit failure streak. $3.8 trillion in assets, 63% unaccounted for. $2.5 trillion taxpayer dollars with no receipts. Any private company would be shut down.',
  keywords: ['pentagon audit', 'pentagon audit failure', 'department of defense audit', 'pentagon accountability', 'military spending accountability'],
  openGraph: {
    title: 'Pentagon Audit Failures: 8 Consecutive Failed Audits (2018-2025)',
    description: '$3.8 trillion in assets. 63% unaccounted for. 8 consecutive audit failures. This is the government you\'re trusting with your money.',
    url: 'https://warcosts.org/pentagon-audit',
    type: 'article',
  },
}

const auditResults = [
  {
    year: 2018,
    result: 'Failed',
    rating: 'Disclaimer of Opinion',
    unaccountedAssets: '$2.7 trillion',
    percentUnaccounted: 61,
    notes: 'First-ever Pentagon audit. Failed spectacularly. Could not account for 61% of $2.7 trillion in assets.',
    quote: 'We failed the audit, but we never expected to pass it.'
  },
  {
    year: 2019,
    result: 'Failed',
    rating: 'Disclaimer of Opinion',
    unaccountedAssets: '$2.8 trillion',
    percentUnaccounted: 62,
    notes: 'Second consecutive failure. Slightly worse than 2018. Pentagon claimed "progress."',
    quote: 'The DoD has never had a clean audit opinion.'
  },
  {
    year: 2020,
    result: 'Failed',
    rating: 'Disclaimer of Opinion',
    unaccountedAssets: '$3.0 trillion',
    percentUnaccounted: 61,
    notes: 'Third failure. During COVID while Americans struggled, Pentagon couldn\'t track $3 trillion.',
    quote: 'Audit readiness is a journey, not a destination.'
  },
  {
    year: 2021,
    result: 'Failed',
    rating: 'Disclaimer of Opinion',
    unaccountedAssets: '$3.2 trillion',
    percentUnaccounted: 62,
    notes: 'Fourth consecutive failure. Assets grew, accountability didn\'t.',
    quote: 'We\'re making steady progress on financial management.'
  },
  {
    year: 2022,
    result: 'Failed',
    rating: 'Disclaimer of Opinion',
    unaccountedAssets: '$3.5 trillion',
    percentUnaccounted: 63,
    notes: 'Fifth failure. Worst percentage yet. Pentagon spent more on consultants to explain why they can\'t account for money.',
    quote: 'The audit process is helping us identify areas for improvement.'
  },
  {
    year: 2023,
    result: 'Failed',
    rating: 'Disclaimer of Opinion',
    unaccountedAssets: '$3.6 trillion',
    percentUnaccounted: 63,
    notes: 'Sixth consecutive failure. No improvement. $100 billion in assets unaccounted for increased.',
    quote: 'We are committed to achieving a clean audit opinion.'
  },
  {
    year: 2024,
    result: 'Failed',
    rating: 'Disclaimer of Opinion',
    unaccountedAssets: '$3.7 trillion',
    percentUnaccounted: 63,
    notes: 'Seventh failure. Same excuses. Same promises. Same failures.',
    quote: 'Financial management reform remains a top priority.'
  },
  {
    year: 2025,
    result: 'Failed',
    rating: 'Disclaimer of Opinion',
    unaccountedAssets: '$3.8 trillion',
    percentUnaccounted: 63,
    notes: 'Eighth consecutive failure. Pentagon claims "momentum is on our side" — while failing.',
    quote: 'Momentum is on our side. We are making meaningful progress.'
  }
]

const alternatives = [
  { item: 'Free college for every American for 10 years', cost: '$800 billion' },
  { item: 'End homelessness permanently (buy/build housing for all 650,000 homeless)', cost: '$30 billion' },
  { item: 'Repair every bridge in America rated "structurally deficient"', cost: '$164 billion' },
  { item: 'Provide clean drinking water infrastructure for entire developing world', cost: '$150 billion' },
  { item: 'Fund NASA at current levels for 312 years', cost: '$2.5 trillion' },
  { item: 'Give every American family $19,230 in cash', cost: '$2.5 trillion' },
  { item: 'Build 12.5 million affordable housing units', cost: '$2.5 trillion' },
  { item: 'Eliminate all student loan debt in America (with $2.8 trillion left over)', cost: '$1.7 trillion' }
]

const privateCompanyComparisons = [
  {
    company: 'Enron',
    year: 2001,
    issue: 'Accounting fraud, off-books debt',
    outcome: 'Bankruptcy, executives imprisoned',
    note: 'Failed to account for $74 billion. Company dissolved.'
  },
  {
    company: 'WorldCom',
    year: 2002,
    issue: 'Inflated assets by $11 billion',
    outcome: 'Bankruptcy, CEO got 25 years in prison',
    note: 'Accounting fraud of $11 billion led to criminal prosecution.'
  },
  {
    company: 'Lehman Brothers',
    year: 2008,
    issue: 'Hid $50 billion in risky assets',
    outcome: 'Bankruptcy, global financial crisis',
    note: 'Repo 105 transactions hid $50 billion in toxic assets.'
  },
  {
    company: 'Wells Fargo',
    year: 2016,
    issue: 'Created millions of fake accounts',
    outcome: '$3 billion in fines, executives fired',
    note: 'CEO resigned, company paid massive fines to regulators.'
  }
]

export default function PentagonAuditPage() {
  const totalUnaccounted = 2500 // $2.5 trillion
  const totalAssets = 3800 // $3.8 trillion

  return (
    <div className="min-h-screen bg-slate-900 text-stone-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name: 'Pentagon Audit Failures 2018-2025',
            description: 'Complete tracking of Pentagon audit failures from 2018-2025. Documents $3.8 trillion in unaccounted assets across 8 consecutive failed audits.',
            url: 'https://warcosts.org/pentagon-audit',
            publisher: {
              '@type': 'Organization',
              name: 'WarCosts',
              url: 'https://warcosts.org'
            },
            datePublished: '2025-12-15',
            dateModified: new Date().toISOString().split('T')[0],
            keywords: 'pentagon audit, military accountability, defense spending oversight'
          }),
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Breadcrumbs items={[{ label: 'Pentagon Audit Tracker' }]} />
        
        <header className="mb-12">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-red-400 mb-4 leading-tight">
            Pentagon Audit <span className="text-red-600">Failures</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-6">
            8 consecutive failed audits (2018–2025). $3.8 trillion in assets, 63% unaccounted for.
          </p>
          <p className="text-lg text-stone-400 mb-8">
            This is the government you're trusting with your money. Any private company with this record would be shut down immediately.
          </p>
          <ShareButtons title="Pentagon Audit Failures: 8 Consecutive Failed Audits" />
        </header>

        {/* Key Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">8</div>
              <div className="text-sm text-stone-300">Consecutive Failed Audits</div>
              <div className="text-xs text-stone-500 mt-2">2018–2025</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">63%</div>
              <div className="text-sm text-stone-300">Assets Unaccounted</div>
              <div className="text-xs text-stone-500 mt-2">$2.4T of $3.8T</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">$2.5T</div>
              <div className="text-sm text-stone-300">Taxpayer Dollars</div>
              <div className="text-xs text-stone-500 mt-2">No receipts, no accountability</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">0</div>
              <div className="text-sm text-stone-300">Consequences</div>
              <div className="text-xs text-stone-500 mt-2">No resignations, no prosecutions</div>
            </div>
          </div>
        </section>

        {/* The Failure Streak */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The 8-Year Failure Streak</h2>
          <p className="text-lg text-stone-300 mb-8">
            In 2018, the Pentagon conducted its first-ever audit. It failed spectacularly. Then it failed again. And again. 
            And again. Eight consecutive years of failure, each with the same excuse: "We're making progress."
          </p>

          <div className="space-y-6">
            {auditResults.map((audit, index) => (
              <div key={audit.year} className="bg-slate-800/50 border border-red-800/30 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center mb-2 md:mb-0">
                    <span className="text-2xl font-bold text-red-400 mr-4">{audit.year}</span>
                    <span className="bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                      FAILED #{index + 1}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-stone-300">{audit.unaccountedAssets} unaccounted</div>
                    <div className="text-sm text-stone-500">{audit.percentUnaccounted}% of total assets</div>
                  </div>
                </div>
                <p className="text-stone-300 mb-3">{audit.notes}</p>
                <blockquote className="border-l-4 border-red-600 pl-4 text-stone-400 italic">
                  "{audit.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </section>

        {/* What $2.5 Trillion Could Buy Instead */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">
            What $2.5 Trillion Could Buy Instead
          </h2>
          <p className="text-lg text-stone-300 mb-8">
            The Pentagon can't tell you where $2.5 trillion of your tax dollars went. But we can tell you what that 
            money could have accomplished if it wasn't lost in the Pentagon's black hole of incompetence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {alternatives.map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
                <h3 className="font-semibold text-stone-200 mb-2">{item.item}</h3>
                <div className="text-red-400 font-bold text-lg">{item.cost}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-900/20 border border-slate-700 rounded-lg">
            <h3 className="font-bold text-red-300 mb-3">Put it in perspective:</h3>
            <p className="text-stone-300">
              The Pentagon's unaccounted $2.5 trillion could give every American family $19,230 in cash. 
              Or provide free college for every American for a decade. Or end homelessness 83 times over.
              Instead, it's just... gone. With no explanation. No accountability. No consequences.
            </p>
          </div>
        </section>

        {/* Corporate Comparison */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">
            If This Were a Private Company...
          </h2>
          <p className="text-lg text-stone-300 mb-8">
            When private companies fail their audits or can't account for assets, there are consequences. 
            Real consequences. Executives go to prison. Companies go bankrupt. Shareholders lose everything.
          </p>

          <div className="space-y-4 mb-8">
            {privateCompanyComparisons.map((company, index) => (
              <div key={index} className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-bold text-stone-200 text-lg">{company.company} ({company.year})</h3>
                  <div className="text-red-400 font-medium">{company.outcome}</div>
                </div>
                <p className="text-stone-300 mb-2">Issue: {company.issue}</p>
                <p className="text-stone-400 text-sm">{company.note}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-900/30 border border-red-700 rounded-lg p-6">
            <h3 className="font-bold text-red-300 mb-3 text-xl">Pentagon: $2.5 trillion unaccounted</h3>
            <p className="text-stone-300 mb-3">
              <strong>Outcome:</strong> Nothing. No resignations. No prosecutions. No consequences whatsoever.
            </p>
            <p className="text-red-300 font-medium">
              The Pentagon has failed 8 consecutive audits with 2,500x more unaccounted money than Enron, 
              yet nobody has faced any consequences. This is what government accountability looks like.
            </p>
          </div>
        </section>

        {/* Congressional Quotes */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">What Congress Says</h2>
          
          <div className="space-y-6">
            <blockquote className="bg-slate-800/50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <p className="text-lg text-stone-300 mb-4">
                "The Pentagon has never — not once — passed an audit. Yet we keep writing them bigger and bigger checks. 
                This is insanity. Any private company CEO would be in federal prison by now."
              </p>
              <footer className="text-stone-400">
                — Rep. Tim Burchett (R-TN), House Oversight Committee
              </footer>
            </blockquote>

            <blockquote className="bg-slate-800/50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <p className="text-lg text-stone-300 mb-4">
                "We're talking about $2.5 trillion that just disappeared into thin air. That's not 'accounting challenges' — 
                that's criminal negligence. The American people deserve answers, not excuses."
              </p>
              <footer className="text-stone-400">
                — Rep. Ralph Norman (R-SC), House Budget Committee
              </footer>
            </blockquote>
          </div>
        </section>

        {/* The Excuses */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The Excuses Never Change</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-6">
              <h3 className="font-bold text-red-300 mb-4">What They Say Every Year:</h3>
              <ul className="space-y-2 text-stone-300">
                <li>• "We're making steady progress"</li>
                <li>• "The audit process is helping us improve"</li>
                <li>• "Financial management reform is a priority"</li>
                <li>• "We never expected to pass the first audit"</li>
                <li>• "Momentum is on our side"</li>
                <li>• "This is a journey, not a destination"</li>
              </ul>
            </div>

            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
              <h3 className="font-bold text-red-300 mb-4">The Reality:</h3>
              <ul className="space-y-2 text-stone-300">
                <li>• 8 consecutive failures</li>
                <li>• Percentage unaccounted got WORSE (61% → 63%)</li>
                <li>• Total unaccounted money INCREASED by $1.1 trillion</li>
                <li>• Zero officials held accountable</li>
                <li>• Same promises every year</li>
                <li>• No meaningful reform implemented</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700 rounded-lg p-6">
            <h3 className="font-bold text-red-300 mb-3">December 2025: "Momentum is on our side"</h3>
            <p className="text-stone-300 mb-3">
              After the 8th consecutive failure, Pentagon Comptroller Mike McCord declared "momentum is on our side." 
              This is what passes for accountability in government: claiming victory while failing spectacularly.
            </p>
            <p className="text-red-300 font-medium">
              They've had 8 years to figure this out. Any private sector CFO would have been fired after year one.
            </p>
          </div>
        </section>

        {/* The Bigger Picture */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">The Bigger Picture</h2>
          
          <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-8">
            <h3 className="font-bold text-stone-200 text-xl mb-4">This isn't just accounting</h3>
            <p className="text-lg text-stone-300 mb-6">
              The Pentagon's audit failures represent something far more troubling than sloppy bookkeeping. 
              This is systematic, institutional incompetence enabled by a complete lack of accountability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">$858B</div>
                <div className="text-sm text-stone-300">Annual Pentagon Budget (2023)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">63%</div>
                <div className="text-sm text-stone-300">Assets They Can't Account For</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">0%</div>
                <div className="text-sm text-stone-300">Budget Cuts Due to Failures</div>
              </div>
            </div>

            <p className="text-stone-300 mb-4">
              Congress keeps increasing the Pentagon's budget despite these failures. The 2024 defense budget was 
              $858 billion — a $28 billion increase from 2023. This rewards incompetence and ensures it continues.
            </p>

            <p className="text-red-300 font-medium">
              Until there are real consequences for these failures, nothing will change. The Pentagon will keep 
              failing audits, losing trillions of dollars, and facing zero accountability. This is your government 
              at work.
            </p>
          </div>
        </section>

        {/* Editorial Perspective */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">
            This Is The Government You're Trusting With Your Money
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              For eight consecutive years, the Pentagon has failed to account for trillions of taxpayer dollars. 
              If you ran a business this way, you'd be in federal prison. If you filed taxes this way, the IRS 
              would destroy your life. But when the government does it? Nothing happens.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              This isn't just incompetence — it's institutionalized theft. Every dollar the Pentagon can't account 
              for is a dollar stolen from taxpayers who work hard to fund government operations. Yet year after year, 
              Congress rewards this theft with bigger budgets.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              The Pentagon's excuse machine is remarkable in its consistency. "We're making progress." "This is a journey." 
              "Momentum is on our side." These are the words of people who know they'll never face consequences for failure, 
              so they have no incentive to succeed.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Consider what $2.5 trillion represents: that's $19,230 for every family in America. It's free college 
              for a decade. It's ending homelessness permanently dozens of times over. Instead, it's just gone — 
              vanished into the Pentagon's bureaucratic black hole with no explanation.
            </p>

            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              This is what government accountability looks like in practice. While private companies face bankruptcy 
              and executives face prison for far smaller accounting failures, the Pentagon faces... nothing. 
              No budget cuts. No fired officials. No real consequences of any kind.
            </p>

            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 my-8">
              <p className="text-lg text-red-300 font-medium">
                The next time someone tells you we need to trust government with more power, more money, or more 
                control over our lives, show them this page. This is what government "accountability" looks like 
                when they think no one is watching.
              </p>
            </div>

            <p className="text-lg text-stone-300 leading-relaxed">
              The Pentagon will fail its 9th audit in 2026. Then its 10th. They'll keep making the same excuses, 
              Congress will keep writing bigger checks, and taxpayers will keep funding this institutionalized theft. 
              The only question is: how long will we let them get away with it?
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="font-playfair text-3xl font-bold text-red-400 mb-8">Related Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/cost-overruns" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Weapons Cost Overruns</h3>
              <p className="text-stone-400 text-sm">See how weapons programs consistently exceed budgets by hundreds of billions</p>
            </Link>
            <Link href="/revolving-door" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Defense Industry Revolving Door</h3>
              <p className="text-stone-400 text-sm">Track how Pentagon officials cash out with defense contractors</p>
            </Link>
            <Link href="/tools/cost-calculator" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">War Cost Calculator</h3>
              <p className="text-stone-400 text-sm">Calculate what military spending could buy instead</p>
            </Link>
            <Link href="/us-wars-list" className="bg-slate-800/50 border border-stone-700 rounded-lg p-6 hover:border-red-600 transition-colors">
              <h3 className="font-bold text-stone-200 mb-2">Complete US Wars List</h3>
              <p className="text-stone-400 text-sm">Every American war and military intervention since 1776</p>
            </Link>
          </div>
        </section>

        <BackToTop />
      </div>
    </div>
  )
}