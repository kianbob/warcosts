import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'
import FaqJsonLd from '@/components/FaqJsonLd'

export const metadata: Metadata = {
  title: 'About WarCosts — Free, Open, Data-Driven Military Transparency',
  description: 'WarCosts is a free, data-driven platform documenting every US war, military intervention, and covert operation since 1776. Sourced from Brown University, CRS, SIPRI, and Pentagon reports. A TheDataProject.ai platform.',
  alternates: { canonical: 'https://www.warcosts.org/about' },
  keywords: ['about warcosts', 'military transparency', 'war cost data', 'defense spending transparency'],
}

const dataSources = [
  { name: 'Brown University Costs of War Project', what: 'Post-9/11 war costs, casualties, displacement — the most comprehensive War on Terror accounting', url: 'https://watson.brown.edu/costsofwar/' },
  { name: 'Congressional Research Service (CRS)', what: 'Official reports on American casualties, war costs, military operations, and defense policy', url: 'https://crsreports.congress.gov/' },
  { name: 'SIPRI', what: 'Global military spending data since 1949; arms transfers database', url: 'https://www.sipri.org/' },
  { name: 'Department of Defense', what: 'Budget documents, Base Structure Reports, DMDC casualty records', url: 'https://www.defense.gov/' },
  { name: 'Office of Management and Budget', what: 'Historical federal budget tables including defense spending', url: 'https://www.whitehouse.gov/omb/' },
  { name: 'Bureau of Labor Statistics', what: 'CPI-U data for all inflation adjustments', url: 'https://www.bls.gov/' },
  { name: 'USAID Foreign Aid Explorer', what: 'US foreign aid disbursements by country, year, and sector', url: 'https://explorer.usaid.gov/' },
  { name: 'Bureau of Investigative Journalism', what: 'Drone strike casualty tracking', url: 'https://www.thebureauinvestigates.com/' },
  { name: 'Iraq Body Count', what: 'Documented civilian deaths from violence in Iraq', url: 'https://www.iraqbodycount.org/' },
  { name: 'Airwars', what: 'Civilian harm tracking from international airstrikes', url: 'https://airwars.org/' },
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'About' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-6">About WarCosts</h1>

      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 mb-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;The first casualty of war is truth.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Attributed to Hiram Johnson, US Senator, 1917</p>
      </div>

      <div className="prose prose-stone max-w-none">
        <p className="text-lg">
          WarCosts is a free, open, data-driven platform documenting every American war, military intervention,
          and covert operation since 1776 — the cost in dollars, lives, and liberty. We believe the public
          deserves to see the full picture, not just the version that fits a political narrative.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Mission Statement</h2>
        <p>
          <strong>To make the costs of American military power visible, measurable, and undeniable</strong> —
          through accurate data, honest analysis, and free public access.
        </p>
        <p>
          We believe that a democratic republic cannot function without an informed citizenry. When the
          government wages war — the most consequential action any state can take — citizens have an absolute
          right to know: How much does it cost? How many people die? Who profits? And was it worth it?
        </p>
        <p>
          These questions are not asked enough. The defense budget passes every year with bipartisan
          supermajorities and minimal public debate. Wars begin with bold promises and never seem to end.
          The Pentagon has never passed an audit. Veteran suicide claims 17 lives every day. And most Americans
          cannot name a single country where US forces are currently deployed.
        </p>
        <p>
          WarCosts exists to change that — not through opinion or ideology, but through data.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Why This Matters</h2>
        <p>
          Since 1776, the United States has spent over <strong>$11.3 trillion</strong> on wars. Over
          <strong> 1 million Americans</strong> have been killed. Over <strong>5 million civilians</strong> in
          other countries have died in American wars. The US has been at war for <strong>229 of its 249 years</strong>.
        </p>
        <p>
          These are not abstract numbers. They represent real people, real communities, and real choices.
          Every dollar spent on a missile is a dollar not spent on a school. Every soldier killed in an
          undeclared war is a constitutional failure. Every veteran who dies by suicide is a broken promise.
        </p>
        <p>
          The Founders understood this. James Madison warned that &ldquo;of all the enemies to public liberty,
          war is, perhaps, the most to be dreaded.&rdquo; Eisenhower warned about the military-industrial
          complex. Smedley Butler called war a racket. These warnings went unheeded. The data on this site
          shows why they were right.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Perspective</h2>
        <p>
          WarCosts approaches military policy from a perspective of <strong>constitutional governance and
          individual liberty</strong>. We believe:
        </p>
        <ul>
          <li>The power to wage war belongs to Congress, as the Constitution requires — not to the President, not to 60 words written in 2001</li>
          <li>Citizens deserve full transparency about military spending and operations — including classified programs and hidden costs</li>
          <li>Every dollar spent on war is a dollar taken from citizens by force and not spent on schools, infrastructure, healthcare, or tax relief</li>
          <li>The human cost of war — on all sides — should be counted honestly, including civilian deaths, veteran suicide, displacement, and environmental destruction</li>
          <li>The military-industrial complex is real, its influence is documented, and its interests are not the same as the national interest</li>
          <li>A military sufficient for genuine national defense would cost far less than one designed to police the globe</li>
        </ul>
        <p>
          These values are rooted in the classical liberal tradition and shared by thinkers from Thomas
          Jefferson to Dwight Eisenhower to Ron Paul. But you don&apos;t have to share our perspective to
          use our data. The numbers speak for themselves.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">How to Use This Site</h2>
        <p>
          WarCosts is designed for researchers, journalists, students, educators, policymakers, veterans,
          and anyone who wants to understand the true cost of American military power:
        </p>
        <ul>
          <li><strong><Link href="/dashboard">Dashboard</Link></strong> — Start here for a high-level overview</li>
          <li><strong><Link href="/us-military-spending">US Military Spending</Link></strong> — The $886B annual budget in context</li>
          <li><strong><Link href="/cost-of-war">Cost of War</Link></strong> — $11.3 trillion across all conflicts</li>
          <li><strong><Link href="/us-wars-list">US Wars List</Link></strong> — Every war and intervention since 1776</li>
          <li><strong><Link href="/modern-wars">Modern Wars</Link></strong> — Post-1995 operations</li>
          <li><strong><Link href="/conflicts">Conflicts</Link></strong> — Detailed data for each war</li>
          <li><strong><Link href="/analysis">Analysis</Link></strong> — Deep dives into the military-industrial complex, blowback, and more</li>
          <li><strong><Link href="/tools/tax-receipt">Tools</Link></strong> — Interactive calculators for your personal war cost</li>
          <li><strong><Link href="/downloads">Downloads</Link></strong> — Raw data files for your own research</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Data Sources</h2>
        <p>
          Our data comes from official government sources, peer-reviewed academic research, and established
          investigative organizations. We prioritize accuracy over sensationalism and use conservative
          estimates where uncertainty exists:
        </p>
      </div>

      <div className="space-y-3 my-8">
        {dataSources.map(s => (
          <div key={s.name} className="bg-white rounded-lg border p-4">
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-red-800 hover:underline">{s.name}</a>
            <p className="text-stone-500 text-sm mt-1">{s.what}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-stone max-w-none">
        <p>
          For complete source details, see our <Link href="/sources">Sources page</Link>. For how we process
          and present this data, see our <Link href="/methodology">Methodology page</Link>.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What We Cover</h2>
        <p>
          WarCosts covers the full spectrum of American military activity:
        </p>
        <ul>
          <li><strong>Every war since 1776</strong> — from the Revolution to Iran 2026, with cost, casualty, and duration data for each</li>
          <li><strong>469+ military interventions</strong> — including covert operations, regime changes, and undeclared conflicts</li>
          <li><strong>Annual military spending</strong> — not just the DoD budget, but the true $1.4T+ national security cost</li>
          <li><strong>Foreign military aid</strong> — who receives US weapons, under what conditions, and what happens when those conditions are waived</li>
          <li><strong>Arms sales</strong> — the $200B+ global arms trade and America’s dominant role in it</li>
          <li><strong>Defense contractors</strong> — who profits from war and how the revolving door works</li>
          <li><strong>Human costs</strong> — casualties, veteran suicide, displacement, PTSD, and the long tail of war</li>
          <li><strong>Nuclear weapons</strong> — the $1.7 trillion modernization program and the permanent cost of maintaining the arsenal</li>
          <li><strong>Global military footprint</strong> — 750+ overseas bases in 80 countries</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">What Makes Us Different</h2>
        <p>
          There are many organizations that track military spending or war costs. What makes WarCosts unique:
        </p>
        <ul>
          <li><strong>Comprehensive scope</strong> — We cover all US wars since 1776, not just recent conflicts. The full historical context reveals patterns invisible when looking at individual wars.</li>
          <li><strong>Interactive tools</strong> — 14+ calculators and visualizations that make abstract budget numbers personal and tangible. See your personal tax receipt, simulate budget tradeoffs, compare wars side-by-side.</li>
          <li><strong>Real-time data</strong> — Our Iran War 2026 tracker updates daily. The War Clock shows spending in real time. Cost counters tick up as you watch.</li>
          <li><strong>No paywall</strong> — Every page, every tool, every data file is free. No login. No ads. No tracking. Data should be accessible to everyone.</li>
          <li><strong>Downloadable data</strong> — All our aggregated datasets are available in JSON format for researchers, journalists, and developers.</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">No Paywall, No Ads, No Agenda</h2>
        <p>
          WarCosts is completely free. No login required. No ads. No paywall. No tracking. We have no defense
          industry sponsors, no political party affiliation, no think-tank funding, and no agenda beyond
          transparency. The data is the point.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">A TheDataProject.ai Platform</h2>
        <p>
          WarCosts is the first platform in the <a href="https://thedataproject.ai" className="text-red-800 hover:underline">TheDataProject.ai</a> portfolio —
          a collection of free, data-driven transparency platforms covering topics where public access to
          clear, sourced data can improve democratic accountability. The thesis is simple: when citizens can
          see the numbers, they make better decisions.
        </p>
        <p>Planned future platforms include:</p>
        <ul>
          <li><strong>Healthcare costs</strong> — Making the true cost of American healthcare visible</li>
          <li><strong>Government spending</strong> — Where every federal dollar goes</li>
          <li><strong>Immigration data</strong> — Facts and figures, not rhetoric</li>
          <li><strong>Criminal justice</strong> — The cost of mass incarceration</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Our Methodology</h2>
        <p>
          Every number on this site follows a rigorous methodology:
        </p>
        <ul>
          <li><strong>Conservative estimates</strong> — When sources provide ranges, we use the lower or midpoint figure</li>
          <li><strong>Inflation adjustment</strong> — All historical dollars are converted to 2024 dollars using BLS CPI-U</li>
          <li><strong>Source citation</strong> — Every figure links to its primary source document</li>
          <li><strong>Cross-referencing</strong> — Major figures are verified across multiple independent sources</li>
          <li><strong>Transparency about uncertainty</strong> — We note when estimates are uncertain and explain which figure we use and why</li>
          <li><strong>Regular updates</strong> — Iran War data daily; SIPRI data annually; CRS reports as published</li>
        </ul>
        <p>
          For full details, see our <Link href="/methodology">Methodology page</Link>.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Contact & Contribute</h2>
        <p>
          Found an error? Have a data source we should include? Want to contribute analysis? We welcome
          corrections, suggestions, and contributions from researchers, veterans, journalists, and concerned
          citizens. Accuracy matters more than anything — if we got something wrong, we want to know.
        </p>
        <p>
          All data is available for download on our <Link href="/downloads">Downloads page</Link>. We ask
          for attribution if used in published work.
        </p>
      </div>

      {/* Key Numbers */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">The Numbers That Matter</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { stat: '$11.3T', label: 'Total cost of all US wars', note: 'Since 1776, inflation-adjusted' },
            { stat: '1M+', label: 'American service members killed', note: 'All conflicts' },
            { stat: '229/249', label: 'Years at war', note: 'Only ~20 years of peace' },
            { stat: '$886B', label: 'Annual military budget', note: 'More than next 10 nations combined' },
            { stat: '469+', label: 'Military interventions', note: 'Only 11 with declarations of war' },
            { stat: '750+', label: 'Overseas military bases', note: 'In 80+ countries' },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-400 font-[family-name:var(--font-heading)]">{s.stat}</div>
              <div className="text-stone-300 text-sm mt-1">{s.label}</div>
              <div className="text-stone-500 text-xs mt-1">{s.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Pages */}
      <div className="bg-stone-50 rounded-lg p-6 border my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Explore WarCosts</h3>
        <div className="grid md:grid-cols-2 gap-2">
          <ul className="space-y-2">
            <li><Link href="/dashboard" className="text-red-800 hover:underline">→ Dashboard — Start here</Link></li>
            <li><Link href="/us-military-spending" className="text-red-800 hover:underline">→ US Military Spending</Link></li>
            <li><Link href="/cost-of-war" className="text-red-800 hover:underline">→ Cost of War</Link></li>
            <li><Link href="/iran-war-2026" className="text-red-800 hover:underline">→ Iran War 2026</Link></li>
            <li><Link href="/tools" className="text-red-800 hover:underline">→ Interactive Tools</Link></li>
          </ul>
          <ul className="space-y-2">
            <li><Link href="/sources" className="text-red-800 hover:underline">→ Sources — Complete bibliography</Link></li>
            <li><Link href="/methodology" className="text-red-800 hover:underline">→ Methodology — How we calculate</Link></li>
            <li><Link href="/downloads" className="text-red-800 hover:underline">→ Downloads — Raw data files</Link></li>
            <li><Link href="/faq" className="text-red-800 hover:underline">→ FAQ — Common questions</Link></li>
            <li><Link href="/share" className="text-red-800 hover:underline">→ Share — Stat cards for social media</Link></li>
          </ul>
        </div>
      </div>

      {/* Timeline */}
      <div className="my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">WarCosts Timeline</h2>
        <div className="space-y-3">
          {[
            { date: 'March 2026', event: 'WarCosts.org launches with comprehensive data on all US wars since 1776' },
            { date: 'March 2026', event: 'Iran War 2026 tracking begins — daily updates on costs, casualties, and developments' },
            { date: 'April 2026', event: '14+ interactive tools launched: War Clock, Budget Simulator, Compare Wars, and more' },
            { date: 'May 2026', event: 'Downloads section opens — all aggregated data freely available in JSON format' },
            { date: 'June 2026', event: 'Iran War peace deal coverage — 108-day conflict fully documented day by day' },
            { date: 'Ongoing', event: 'Continuous data updates, new analysis articles, and tool improvements' },
          ].map((t, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="text-sm font-bold text-red-700 w-28 shrink-0">{t.date}</div>
              <div className="text-stone-600 text-sm">{t.event}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Principles */}
      <div className="prose prose-stone max-w-none my-8">
        <h2 className="font-[family-name:var(--font-heading)]">Our Principles</h2>
        <ol>
          <li><strong>Data over opinion</strong> — Every claim is backed by cited data from primary sources</li>
          <li><strong>Transparency over secrecy</strong> — Our methodology, sources, and data are all publicly available</li>
          <li><strong>Conservative estimates</strong> — When in doubt, we undercount rather than overcount</li>
          <li><strong>Non-partisan analysis</strong> — We criticize all administrations equally based on the data</li>
          <li><strong>Free access</strong> — Information about how public money is spent should never be behind a paywall</li>
          <li><strong>Accuracy above all</strong> — If we get something wrong, we correct it immediately and transparently</li>
        </ol>
      </div>

      <FaqJsonLd faqs={[
        { q: 'What is WarCosts?', a: 'WarCosts is a free, open, data-driven platform documenting every American war, military intervention, and covert operation since 1776. It tracks the cost in dollars, lives, and liberty using data from Brown University, CRS, SIPRI, DoD, and other primary sources.' },
        { q: 'Who runs WarCosts?', a: 'WarCosts is independently operated by TheDataProject.ai — a portfolio of free, data-driven transparency sites. It has no defense industry sponsors, no political party funding, no government grants, and no think-tank affiliations.' },
        { q: 'Is WarCosts politically biased?', a: 'WarCosts is data-driven and source-cited. Our perspective values constitutional governance, fiscal responsibility, and transparency. Every number links to a primary source. We\'ve been equally critical of Republican and Democratic administrations\' military adventures.' },
        { q: 'Is WarCosts free to use?', a: 'Yes, completely free. No login required, no ads, no paywall, no tracking. All data is downloadable in JSON format. We ask only for attribution if used in published work.' },
        { q: 'How can I contribute to WarCosts?', a: 'We welcome corrections, data source suggestions, and analysis contributions from researchers, veterans, journalists, and concerned citizens. All data is available on our Downloads page for your own projects.' },
      ]} />

      <BackToTop />
    </div>
  )
}
