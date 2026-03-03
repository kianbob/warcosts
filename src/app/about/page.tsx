import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackToTop from '@/components/BackToTop'

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

      <div className="bg-stone-900 text-white rounded-xl p-8 mb-8">
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

      <BackToTop />
    </div>
  )
}
