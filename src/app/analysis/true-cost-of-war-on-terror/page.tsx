import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The True Cost of the War on Terror: $8 Trillion and Counting | WarCosts.org',
  description: 'Brown University\'s Costs of War Project tallies $8 trillion spent on the War on Terror, 929,000+ killed, and 38 million displaced. Here\'s the full accounting.',
  openGraph: {
    title: 'The True Cost of the War on Terror: $8 Trillion and Counting',
    description: '$8 trillion. 929,000 dead. 38 million displaced. The hidden costs of America\'s longest war.',
    url: 'https://www.warcosts.org/analysis/true-cost-of-war-on-terror',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/true-cost-of-war-on-terror',
  },
}

const costBreakdown = [
  { category: 'Afghanistan (direct war costs)', amount: 2300, note: 'Military operations, reconstruction, Afghan security forces 2001–2021' },
  { category: 'Iraq (direct war costs)', amount: 1100, note: 'Invasion, occupation, counter-insurgency, reconstruction 2003–2021' },
  { category: 'Homeland Security (post-9/11)', amount: 1100, note: 'DHS creation, TSA, border security, domestic surveillance programs' },
  { category: 'Veterans Care (obligated)', amount: 2200, note: 'Projected lifetime medical and disability costs for 4M+ post-9/11 veterans' },
  { category: 'Interest on War Borrowing', amount: 1100, note: 'All post-9/11 wars funded by borrowing, not taxes. Interest compounds.' },
  { category: 'Pakistan, Syria, Africa & Other', amount: 400, note: 'Drone campaigns, special operations, military aid in 80+ countries' },
]

const humanCost = [
  { category: 'US Military Deaths', count: '7,057', note: 'Iraq: 4,431 | Afghanistan: 2,461 | Other: 165' },
  { category: 'US Contractor Deaths', count: '8,189', note: 'More contractors died than soldiers — a hidden toll' },
  { category: 'Allied Military Deaths', count: '14,880', note: 'Coalition and allied Afghan/Iraqi forces' },
  { category: 'Civilian Deaths (direct violence)', count: '387,000+', note: 'Iraq, Afghanistan, Pakistan, Syria, Yemen, Somalia, Libya' },
  { category: 'Opposition Fighter Deaths', count: '301,000+', note: 'Insurgents, militants, and combatants across all theaters' },
  { category: 'Journalists & Media Workers', count: '363+', note: 'Killed covering US war zones since 2001' },
  { category: 'Humanitarian & NGO Workers', count: '1,188+', note: 'Aid workers killed in conflict zones' },
  { category: 'Total Direct Deaths', count: '929,000+', note: 'Watson Institute at Brown University, 2024 estimate' },
]

const displacementData = [
  { region: 'Afghanistan & Pakistan', displaced: '5.9M', note: 'Largest displacement since Taliban fell' },
  { region: 'Iraq', displaced: '9.2M', note: 'Many displaced multiple times since 2003' },
  { region: 'Syria', displaced: '12.0M', note: 'US-backed opposition, airstrikes, ISIS campaign' },
  { region: 'Yemen', displaced: '4.6M', note: 'US-backed Saudi coalition war since 2015' },
  { region: 'Somalia', displaced: '3.7M', note: 'US drone campaign and proxy war since 2007' },
  { region: 'Libya & Other', displaced: '2.6M', note: 'NATO intervention and aftermath' },
]

const hiddenCosts = [
  {
    title: 'Veteran Care: $2.2 Trillion',
    description: 'The US is obligated to provide lifetime care for 4+ million post-9/11 veterans. Traumatic brain injuries, PTSD, burn pit exposure, and combat wounds will require care for 50+ more years. These costs haven\'t peaked yet — they won\'t until approximately 2048.',
  },
  {
    title: 'Interest on Borrowing: $1.1 Trillion',
    description: 'Unlike every previous major war, the War on Terror was funded entirely by borrowing — not taxes. Congress never raised taxes to pay for Iraq or Afghanistan. The result: over $1 trillion in interest payments so far, with $6.5 trillion more projected through 2050.',
  },
  {
    title: 'Indirect Deaths: 3.6–3.7 Million',
    description: 'For every person killed directly by violence, several more die from destroyed hospitals, contaminated water, collapsed food systems, and displacement. Brown University estimates 3.6–3.7 million indirect deaths — roughly 4x the direct toll.',
  },
  {
    title: 'Mental Health Crisis',
    description: 'An estimated 30% of post-9/11 veterans have PTSD or depression. Over 30,000 post-9/11 veterans have died by suicide — more than four times the number killed in combat. The suicide rate among veterans is 57% higher than the general population.',
  },
]

export default function TrueCostOfWarOnTerrorPage() {
  const totalCost = costBreakdown.reduce((sum, c) => sum + c.amount, 0)
  const totalDisplaced = 38

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The True Cost of the War on Terror: $8 Trillion and Counting',
        description: 'Brown University\'s Costs of War Project tallies $8 trillion spent, 929,000+ killed, and 38 million displaced across 85 countries.',
        url: 'https://www.warcosts.org/analysis/true-cost-of-war-on-terror',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-28',
        dateModified: '2026-03-28',
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'True Cost of the War on Terror' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Comprehensive Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          The True Cost of the War on Terror: ${totalCost / 1000} Trillion and Counting
        </h1>
        <p className="text-xl text-stone-300 mb-4">
          929,000+ killed. {totalDisplaced} million displaced. 85 countries. 25 years. No end in sight.
        </p>
        <p className="text-stone-400 text-lg">
          When Congress authorized military force three days after September 11, 2001, the expectation was a
          targeted campaign against al-Qaeda in Afghanistan. Twenty-five years later, the War on Terror has
          spread to 85 countries, cost $8 trillion, killed nearly a million people, and displaced 38 million more.
          The Brown University Costs of War Project — the most comprehensive accounting ever conducted — reveals
          a price tag that most Americans have never been told.
        </p>
      </div>

      <ShareButtons title="The True Cost of the War on Terror: $8 Trillion and Counting" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '$8T+', label: 'Total Cost', sub: 'Including interest & veteran care' },
          { val: '929K+', label: 'People Killed', sub: 'Direct deaths from violence' },
          { val: '38M', label: 'Displaced', sub: 'More than any conflict since WWII' },
          { val: '85', label: 'Countries', sub: 'With US counter-terror operations' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Cost breakdown */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Where $8 Trillion Went</h2>
        <p className="text-stone-700 mb-6">
          The headline number — $8 trillion — comes from the Costs of War Project at Brown University&apos;s Watson
          Institute. It includes not just direct military spending, but also veteran care obligations, homeland
          security costs, and interest on the money borrowed to fight these wars.
        </p>
        <div className="space-y-3">
          {costBreakdown.map(item => (
            <div key={item.category} className="bg-white border rounded-lg p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-stone-900">{item.category}</h3>
                <span className="text-red-700 font-bold whitespace-nowrap ml-4">${item.amount >= 1000 ? `${(item.amount / 1000).toFixed(1)}T` : `${item.amount}B`}</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2 mb-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: `${(item.amount / totalCost) * 100}%` }} />
              </div>
              <p className="text-sm text-stone-600">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 mt-4">
          <p className="text-red-900 font-bold text-lg">Total: ~${(totalCost / 1000).toFixed(1)} Trillion</p>
          <p className="text-sm text-red-800">Every dollar was borrowed. None of these wars were funded by tax increases.</p>
        </div>
        <p className="text-xs text-stone-400 mt-3">Source: Neta C. Crawford, &ldquo;The U.S. Budgetary Costs of the Post-9/11 Wars,&rdquo; Costs of War Project, Brown University, September 2024</p>
      </section>

      {/* Human cost */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Human Cost: 929,000+ Killed</h2>
        <p className="text-stone-700 mb-6">
          The death toll of the War on Terror — counting only <em>direct deaths from violence</em> — exceeds
          929,000 people. This does not include indirect deaths from destroyed infrastructure, disease, and
          displacement, which Brown University estimates at an additional 3.6–3.7 million.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-semibold">Category</th>
                <th className="text-right p-3 font-semibold">Deaths</th>
                <th className="text-left p-3 font-semibold">Detail</th>
              </tr>
            </thead>
            <tbody>
              {humanCost.map(row => (
                <tr key={row.category} className={row.category.includes('Total') ? 'bg-red-50 font-semibold border-t-2 border-red-300' : 'border-t'}>
                  <td className="p-3">{row.category}</td>
                  <td className="p-3 text-right text-red-700 font-mono">{row.count}</td>
                  <td className="p-3 text-stone-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400 mt-3">Source: Watson Institute, &ldquo;Human Cost of Post-9/11 Wars,&rdquo; Costs of War Project, 2024 update</p>
      </section>

      {/* Displacement */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">38 Million Displaced: The Largest Displacement Since WWII</h2>
        <p className="text-stone-700 mb-6">
          The US-led War on Terror has displaced at least 38 million people — more than any conflict since
          World War II. Most will never return to their homes.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {displacementData.map(d => (
            <div key={d.region} className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-stone-900">{d.region}</h3>
                <span className="text-amber-800 font-bold">{d.displaced}</span>
              </div>
              <p className="text-xs text-stone-500 mt-1">{d.note}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3">Source: David Vine et al., &ldquo;Creating Refugees: Displacement Caused by the United States&apos; Post-9/11 Wars,&rdquo; Costs of War Project, 2020</p>
      </section>

      {/* Hidden costs */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Hidden Costs Nobody Talks About</h2>
        <div className="space-y-4">
          {hiddenCosts.map(cost => (
            <div key={cost.title} className="bg-stone-50 border rounded-lg p-5">
              <h3 className="font-semibold text-stone-900 mb-2">{cost.title}</h3>
              <p className="text-sm text-stone-700">{cost.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Iraq vs Afghanistan */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Iraq vs. Afghanistan: Two Wars, One Pattern</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold text-lg text-stone-900 mb-3">🇮🇶 Iraq</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li><strong>Duration:</strong> 2003–2011 (officially), ongoing presence</li>
              <li><strong>Direct cost:</strong> $1.1 trillion</li>
              <li><strong>US deaths:</strong> 4,431</li>
              <li><strong>Iraqi deaths:</strong> 275,000–306,000+</li>
              <li><strong>Displaced:</strong> 9.2 million</li>
              <li><strong>Justification:</strong> WMDs (none found) and al-Qaeda ties (didn&apos;t exist)</li>
              <li><strong>Outcome:</strong> ISIS. Sectarian chaos. Iran&apos;s influence expanded.</li>
            </ul>
          </div>
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-bold text-lg text-stone-900 mb-3">🇦🇫 Afghanistan</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li><strong>Duration:</strong> 2001–2021 (20 years)</li>
              <li><strong>Direct cost:</strong> $2.3 trillion</li>
              <li><strong>US deaths:</strong> 2,461</li>
              <li><strong>Afghan deaths:</strong> 176,000+</li>
              <li><strong>Displaced:</strong> 5.9 million</li>
              <li><strong>Justification:</strong> Al-Qaeda safe haven after 9/11</li>
              <li><strong>Outcome:</strong> Taliban retook the entire country in 11 days.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The borrowing problem */}
      <section className="mb-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Fought on a Credit Card</h2>
          <p className="text-stone-300 mb-4">
            Every previous major US war involved tax increases to fund it. The War on Terror is the first major
            war in American history funded entirely by borrowing. In fact, Congress <em>cut</em> taxes during the
            wars — twice.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              { war: 'World War I', funding: 'Income tax increased to 77%' },
              { war: 'World War II', funding: 'Top rate raised to 94%; war bonds' },
              { war: 'Korean War', funding: 'Revenue Act of 1950 raised taxes' },
              { war: 'Vietnam War', funding: 'Revenue and Expenditure Control Act, 10% surcharge' },
              { war: 'War on Terror', funding: 'Bush tax cuts of 2001 & 2003 — taxes went DOWN' },
              { war: 'Result', funding: '$1.1T+ in interest payments and counting' },
            ].map(w => (
              <div key={w.war} className={`rounded-lg p-3 ${w.war === 'Result' ? 'bg-red-900/50' : 'bg-white/10'}`}>
                <p className="font-semibold text-white text-sm">{w.war}</p>
                <p className="text-stone-400 text-xs mt-1">{w.funding}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <div className="bg-stone-100 border rounded-xl p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">25 Years Later</h2>
          <p className="text-stone-700 mb-3">
            The War on Terror was launched to make America safer. Twenty-five years later, the State Department
            counts more terrorist organizations in the world than existed on September 11, 2001. Global terrorism
            deaths have <em>increased</em> since the war began. Al-Qaeda still exists. ISIS was created by the
            power vacuum of the Iraq invasion. The Taliban rule Afghanistan again.
          </p>
          <p className="text-stone-700 mb-3">
            The $8 trillion cost is not a final number. Veteran care costs won&apos;t peak until the 2040s.
            Interest on war debt continues to compound. The true final cost may exceed $12 trillion — for wars
            that achieved none of their stated objectives.
          </p>
          <p className="text-stone-700">
            This is the most expensive failure in American history. And Americans are still paying for it.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources & Citations</h2>
        <ul className="text-sm text-stone-600 space-y-1 list-disc pl-5">
          <li>Neta C. Crawford, &ldquo;The U.S. Budgetary Costs of the Post-9/11 Wars,&rdquo; <em>Costs of War Project</em>, Watson Institute, Brown University, September 2024</li>
          <li>&ldquo;Human Cost of Post-9/11 Wars: Direct War Deaths,&rdquo; Watson Institute, Brown University, updated 2024</li>
          <li>David Vine et al., &ldquo;Creating Refugees: Displacement Caused by the United States&apos; Post-9/11 Wars,&rdquo; Costs of War Project, 2020</li>
          <li>Congressional Research Service, &ldquo;Costs of Major U.S. Wars,&rdquo; updated 2023</li>
          <li>Special Inspector General for Afghanistan Reconstruction (SIGAR), <em>What We Need to Learn</em>, 2021</li>
          <li>Iraq Body Count, <em>Documented Civilian Deaths from Violence</em>, ongoing database</li>
          <li>Authorization for Use of Military Force, Public Law 107-40, September 18, 2001</li>
          <li>Department of Veterans Affairs, <em>National Veteran Suicide Prevention Annual Report</em>, 2024</li>
        </ul>
      </section>

      <div className="text-center text-sm text-stone-500 mb-8">
        <p>Last updated: March 2026</p>
        <Link href="/analysis" className="text-red-700 hover:underline">← Back to All Analysis</Link>
      </div>

      <BackToTop />
    </div>
  )
}
