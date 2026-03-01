import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The Forever Wars: How 60 Words Authorized 25 Years of Global War | WarCosts',
  description: 'The 2001 AUMF — just 60 words — has been used to justify military operations in 78+ countries, costing $8 trillion and killing nearly a million people. Why they never end.',
  openGraph: {
    title: 'The Forever Wars: How 60 Words Changed Everything',
    description: 'The 2001 AUMF has been used to justify 25 years of global war across 78 countries.',
    url: 'https://warcosts.org/analysis/forever-wars',
    type: 'article',
  },
}

export default function ForeverWarsPage() {
  const stats = loadData('stats.json')

  const aumfText = `That the President is authorized to use all necessary and appropriate force against those nations, organizations, or persons he determines planned, authorized, committed, or aided the terrorist attacks that occurred on September 11, 2001, or harbored such organizations or persons, in order to prevent any future acts of international terrorism against the United States by such nations, organizations or persons.`

  const aumfCountries = [
    'Afghanistan', 'Iraq', 'Syria', 'Yemen', 'Somalia', 'Libya', 'Pakistan',
    'Niger', 'Cameroon', 'Chad', 'Mali', 'Tunisia', 'Kenya', 'Djibouti',
    'Jordan', 'Philippines', 'Georgia', 'Uzbekistan', 'Kyrgyzstan', 'Tajikistan',
    'Ethiopia', 'Eritrea',
  ]

  const stretchedUses = [
    { year: 2001, target: 'Al-Qaeda / Taliban', location: 'Afghanistan', note: 'Original intent of the AUMF' },
    { year: 2002, target: 'Abu Sayyaf', location: 'Philippines', note: 'Stretched to cover "affiliate" groups' },
    { year: 2003, target: 'Al-Qaeda in Iraq (AQI)', location: 'Iraq', note: 'AQI formed after the invasion' },
    { year: 2007, target: 'Al-Shabaab', location: 'Somalia', note: 'Group didn\'t exist on 9/11' },
    { year: 2009, target: 'AQAP', location: 'Yemen', note: 'Regional franchise, different leadership' },
    { year: 2011, target: 'AQIM', location: 'Libya / North Africa', note: 'Loose affiliation at best' },
    { year: 2014, target: 'ISIS', location: 'Iraq & Syria', note: 'ISIS was an enemy of Al-Qaeda' },
    { year: 2016, target: 'ISIS affiliates', location: 'Libya', note: 'Second intervention in Libya' },
    { year: 2017, target: 'ISIS-linked militants', location: 'Niger', note: 'Most Americans didn\'t know troops were in Niger' },
    { year: 2019, target: 'Al-Shabaab', location: 'Kenya', note: 'Expanded AFRICOM operations' },
    { year: 2023, target: 'Houthi rebels', location: 'Yemen / Red Sea', note: 'No connection to 9/11 whatsoever' },
    { year: 2026, target: 'Iranian proxies / Iran', location: 'Middle East', note: 'Developing — no new authorization sought' },
  ]

  const costByYear = [
    { year: '2001', cost: 20, cumulative: 20 },
    { year: '2003', cost: 150, cumulative: 270 },
    { year: '2005', cost: 180, cumulative: 630 },
    { year: '2007', cost: 200, cumulative: 1030 },
    { year: '2009', cost: 190, cumulative: 1410 },
    { year: '2011', cost: 175, cumulative: 1760 },
    { year: '2013', cost: 140, cumulative: 2040 },
    { year: '2015', cost: 110, cumulative: 2260 },
    { year: '2017', cost: 120, cumulative: 2500 },
    { year: '2019', cost: 100, cumulative: 2700 },
    { year: '2021', cost: 80, cumulative: 2860 },
    { year: '2023', cost: 90, cumulative: 3040 },
    { year: '2025', cost: 95, cumulative: 3230 },
  ]

  const repealAttempts = [
    { year: 2007, sponsor: 'Rep. Barbara Lee (D-CA)', result: 'Failed in committee' },
    { year: 2011, sponsor: 'Rep. Barbara Lee (D-CA)', result: 'Amendment rejected 187-234' },
    { year: 2013, sponsor: 'Sen. Rand Paul (R-KY)', result: 'Failed to advance' },
    { year: 2017, sponsor: 'House Appropriations Committee', result: 'Passed committee, then stripped by leadership' },
    { year: 2019, sponsor: 'House (bipartisan)', result: 'Passed House, died in Senate' },
    { year: 2021, sponsor: 'House 268-161', result: 'Passed House, Senate took no action' },
    { year: 2023, sponsor: 'Senate (bipartisan)', result: 'Repealed 2002 Iraq AUMF only — 2001 AUMF untouched' },
  ]

  const empireCollapses = [
    { empire: 'Roman Empire', cause: 'Military overextension across three continents, economic drain of maintaining frontiers', duration: '~500 years of expansion before collapse' },
    { empire: 'Spanish Empire', cause: 'Endless wars in Netherlands, Americas, Mediterranean bankrupted the treasury', duration: 'Multiple state bankruptcies (1557, 1575, 1596, 1607)' },
    { empire: 'British Empire', cause: 'WWI and WWII made colonial maintenance economically impossible', duration: 'Decolonization 1945-1970' },
    { empire: 'Soviet Union', cause: 'Afghanistan (1979-89), arms race, global military commitments vs stagnant economy', duration: 'Collapsed 1991' },
    { empire: 'American Empire?', cause: '$8 trillion on War on Terror, $886B/year defense budget, 750 bases in 80 countries', duration: 'Ongoing' },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Forever Wars: How 60 Words Authorized 25 Years of Global War',
    description: 'The 2001 AUMF has been used to justify military operations in 78+ countries, costing $8 trillion.',
    author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-03-01',
    dateModified: '2026-03-01',
    mainEntityOfPage: 'https://warcosts.org/analysis/forever-wars',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Forever Wars' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Forever Wars: How 60 Words Changed Everything
        </h1>
        <p className="text-stone-400 text-lg">
          On September 14, 2001, Congress passed the Authorization for Use of Military Force.
          It was 60 words long. It has been used to justify 25 years of global war across {stats.counterterrorCountries} countries,
          costing {fmtMoney(stats.warOnTerrorCost)}, killing {fmt(stats.warOnTerrorDeaths)} people,
          and displacing {(stats.warOnTerrorDisplaced / 1e6).toFixed(0)} million more. It has never been repealed.
        </p>
      </div>

      <ShareButtons title="The Forever Wars: How 60 Words Changed Everything" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{stats.counterterrorCountries}</p>
          <p className="text-xs text-muted">Countries with operations</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(stats.warOnTerrorCost)}</p>
          <p className="text-xs text-muted">Total cost</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(stats.warOnTerrorDeaths)}</p>
          <p className="text-xs text-muted">Directly killed</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{(stats.warOnTerrorDisplaced / 1e6).toFixed(0)}M</p>
          <p className="text-xs text-muted">Displaced</p>
        </div>
      </div>

      {/* The 60 words */}
      <div className="bg-red-50 border-l-4 border-red-700 rounded-r-xl p-6 md:p-8 my-8">
        <p className="text-sm font-semibold text-red-800 mb-3">The Authorization for Use of Military Force (S.J.Res.23) — The Full Text</p>
        <blockquote className="text-stone-800 italic leading-relaxed text-lg">
          &ldquo;{aumfText}&rdquo;
        </blockquote>
        <p className="text-stone-500 text-sm mt-3">
          That&apos;s it. Sixty words. No geographic limitation. No sunset clause. No requirement to return
          to Congress. No definition of who &ldquo;aided&rdquo; the attacks or what &ldquo;harbored&rdquo; means.
          No expiration date. This single sentence has authorized more military action than any law in
          American history.
        </p>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">How 60 Words Became a Blank Check for Global War</h2>
        <p>
          The AUMF was drafted in haste and passed in trauma. Three days after the worst attack on American
          soil since Pearl Harbor, with the ruins of the World Trade Center still smoldering, Congress gave
          the President unlimited military authority against anyone connected to 9/11. The vote was 98-0 in
          the Senate and 420-1 in the House.
        </p>
        <p>
          The key phrase is &ldquo;he determines.&rdquo; The President — not Congress, not the courts, not
          the public — decides who &ldquo;aided&rdquo; the 9/11 attacks or &ldquo;harbored&rdquo; those who
          did. This subjective determination has been stretched to cover organizations that didn&apos;t exist
          in 2001, in countries that had nothing to do with 9/11, against enemies that are themselves
          enemies of al-Qaeda.
        </p>
        <p>
          The phrase &ldquo;in order to prevent any future acts of international terrorism&rdquo; is even
          more elastic. Since terrorism can theoretically come from anywhere, this clause has been used to
          justify preemptive military action against any group, in any country, that the President labels
          a potential terrorist threat. The authorization has no meaningful boundary.
        </p>
      </div>

      {/* Barbara Lee */}
      <div className="bg-white rounded-xl border-2 border-stone-300 p-8 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Lone &ldquo;No&rdquo; Vote</h2>
        <blockquote className="border-l-4 border-red-700 pl-4 italic text-stone-600 mb-3 text-lg">
          &ldquo;However difficult this vote may be, some of us must urge the use of restraint. Our country
          is in a state of mourning. Some of us must say, let&apos;s step back for a moment. Let&apos;s just
          pause for a minute and think through the implications of our actions today so that this does not
          spiral out of control... As we act, let us not become the evil that we deplore.&rdquo;
        </blockquote>
        <p className="text-muted text-sm mb-4">— Rep. Barbara Lee (D-CA), September 14, 2001</p>
        <p className="text-stone-600">
          Lee voted no because she understood what a blank check for war would become. She warned it would
          &ldquo;spiral out of control.&rdquo; She received death threats and needed a bodyguard for months.
          The <em>Wall Street Journal</em> called it the most irresponsible vote since the last congressman
          voted against WWII. Twenty-five years and {stats.counterterrorCountries} countries later, she has been
          proven right on every count.
        </p>
      </div>

      {/* Timeline of stretching */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">How the AUMF Was Stretched: A Timeline</h2>
        <p className="text-muted mb-6">
          The AUMF authorized force against those responsible for 9/11. Here&apos;s how four presidents
          expanded it to cover the entire globe:
        </p>
        <div className="space-y-4">
          {stretchedUses.map((u, i) => (
            <div key={i} className="flex items-start gap-4 border-l-2 border-red-200 pl-4">
              <span className="text-red-700 font-bold font-[family-name:var(--font-heading)] shrink-0">{u.year}</span>
              <div>
                <p className="font-semibold">{u.target} — {u.location}</p>
                <p className="text-muted text-sm">{u.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The absurdity of ISIS under 2001 AUMF */}
      <div className="bg-stone-100 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The ISIS Absurdity</h2>
        <div className="prose prose-stone max-w-none">
          <p>
            In 2014, the Obama administration used the 2001 AUMF to justify military operations against ISIS
            in Iraq and Syria. This was legally absurd for a simple reason: <strong>ISIS was at war with
            al-Qaeda</strong>. The two organizations had publicly split. ISIS had been expelled from al-Qaeda&apos;s
            network. They were killing each other.
          </p>
          <p>
            The legal theory was that ISIS had &ldquo;evolved from&rdquo; al-Qaeda in Iraq (AQI), which was
            itself an affiliate of al-Qaeda — even though AQI didn&apos;t exist until <em>after</em> the US
            invaded Iraq in 2003, two years after 9/11. The chain of logic: the 2001 AUMF authorized force
            against 9/11 perpetrators → al-Qaeda → AQI (which formed after the invasion the AUMF was used to
            justify) → ISIS (which split from al-Qaeda and became its enemy).
          </p>
          <p>
            By this reasoning, the AUMF authorized force against the enemies of the people it was written to
            target. It had eaten itself. And no one in Congress objected loudly enough to matter.
          </p>
        </div>
      </div>

      {/* Cost accumulation */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Cost Accumulation: Year by Year</h2>
        <p className="text-muted mb-4">Direct war spending under the AUMF, in billions (2025 dollars):</p>
        <div className="space-y-2">
          {costByYear.map(y => (
            <div key={y.year} className="flex items-center gap-3">
              <span className="text-sm font-mono text-muted w-12">{y.year}</span>
              <div className="flex-1 bg-stone-100 rounded-full h-6 relative overflow-hidden">
                <div
                  className="bg-red-700 h-full rounded-full"
                  style={{ width: `${(y.cumulative / 3300) * 100}%` }}
                />
              </div>
              <span className="text-sm font-bold text-stone-700 w-20 text-right">${y.cumulative}B</span>
            </div>
          ))}
        </div>
        <p className="text-muted text-sm mt-4">
          Note: These are direct war appropriations only. Total costs including veteran care, interest on
          war debt, and homeland security bring the total to {fmtMoney(stats.warOnTerrorCost)}.
        </p>
      </div>

      {/* How "temporary" became permanent */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">How &ldquo;Temporary&rdquo; Became Permanent</h2>
        <p>
          The AUMF was passed as an emergency measure. Three days after 9/11, in a moment of national trauma,
          Congress acted with understandable urgency. The assumption — stated and unstated — was that this was
          temporary. The US would find those responsible, bring them to justice, and the authorization would
          become moot.
        </p>
        <p>
          But temporary authorizations become permanent through a simple mechanism: <strong>political incentives
          favor continuation</strong>. Every president benefits from having unlimited military authority.
          No president has ever asked Congress to repeal an AUMF. Meanwhile, most members of Congress prefer
          not to vote on war — a &ldquo;yes&rdquo; vote can haunt you if the war goes badly; a &ldquo;no&rdquo;
          vote can end your career if there&apos;s a terrorist attack. The path of least resistance is to do
          nothing, and that&apos;s exactly what Congress has done for 25 years.
        </p>
        <p>
          The forever wars also became self-perpetuating through blowback. US military operations create new
          enemies. New enemies justify continued operations. Each intervention destabilizes a region, creating
          power vacuums that extremist groups fill — which then become targets for the next intervention.
          Afghanistan created al-Qaeda in Iraq. The Iraq War created ISIS. The Libya intervention created
          a failed state that became a hub for arms trafficking across the Sahel. The cycle never ends
          because the cycle feeds itself.
        </p>
      </div>

      {/* The revolving door */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Revolving Door That Sustains Them</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">{stats.revolvingDoorOfficials}+</p>
            <p className="text-stone-400 text-sm">Former officials now at defense contractors</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">${stats.defenseLobbying2023}M</p>
            <p className="text-stone-400 text-sm">Defense lobbying spending (2023)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">${stats.campaignContributions}M</p>
            <p className="text-stone-400 text-sm">Campaign contributions from defense sector</p>
          </div>
        </div>
        <p className="text-stone-400">
          Forever wars aren&apos;t an accident. They&apos;re a business model. Pentagon officials retire
          to defense contractor boards. Defense contractors fund congressional campaigns. Congress funds
          the Pentagon. The cycle generates {fmtMoney(stats.pentagonContractors2020_2024)} in contracts every
          five years. For the people who profit from war, the AUMF isn&apos;t a bug — it&apos;s a feature.
        </p>
      </div>

      {/* Why nobody notices */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">Why Americans Don&apos;t Notice</h2>
        <p>
          The forever wars have been deliberately designed to be invisible to the American public. Three
          mechanisms make this possible:
        </p>
        <h3 className="font-[family-name:var(--font-heading)]">1. No Draft</h3>
        <p>
          The Vietnam War ended partly because the draft meant every American family had skin in the game.
          The all-volunteer military ensures that only a tiny fraction of Americans — disproportionately
          from poor and rural communities — bear the burden of combat. In 2024, less than 1% of Americans
          served in the military. For the other 99%, war is an abstraction.
        </p>
        <h3 className="font-[family-name:var(--font-heading)]">2. Deficit Spending</h3>
        <p>
          Unlike WWII, which was partly funded by war bonds and tax increases, the post-9/11 wars have been
          funded entirely through borrowing. There has been no war tax, no rationing, no economic sacrifice
          asked of the public. The costs are pushed onto future generations through debt. When war costs
          nothing <em>now</em>, there&apos;s no political pressure to stop it.
        </p>
        <h3 className="font-[family-name:var(--font-heading)]">3. Remote Warfare</h3>
        <p>
          Drones, special forces, proxy militias, and cyber operations have replaced large-scale deployments.
          The US can wage war in a country without most Americans — or most members of Congress — even knowing
          about it. When four US soldiers were killed in Niger in 2017, most Americans and many senators
          were stunned to learn that US troops were operating there at all.
        </p>
      </div>

      {/* Public opinion */}
      <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">📊 What Americans Actually Think</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• <strong>62%</strong> of Americans say the wars in Iraq and Afghanistan were &ldquo;not worth fighting&rdquo; (Pew, 2023)</li>
          <li>• <strong>57%</strong> support withdrawing US troops from the Middle East (Chicago Council on Global Affairs, 2023)</li>
          <li>• <strong>73%</strong> of veterans say the Iraq War was not worth fighting (Pew, 2023)</li>
          <li>• <strong>65%</strong> of Americans say Congress should vote before the President sends troops into combat (YouGov, 2024)</li>
          <li>• <strong>77%</strong> support repealing the 2001 AUMF and requiring new authorization (Data for Progress, 2021)</li>
          <li>• Despite this overwhelming opposition, <strong>nothing has changed</strong>. The wars continue. The AUMF stands.</li>
        </ul>
      </div>

      {/* Repeal attempts */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Every Attempt to Repeal the AUMF Has Failed</h2>
        <div className="space-y-3">
          {repealAttempts.map((a, i) => (
            <div key={i} className="flex items-center gap-4 border-b border-stone-100 pb-3">
              <span className="text-red-700 font-bold font-[family-name:var(--font-heading)] shrink-0">{a.year}</span>
              <div className="flex-1">
                <p className="font-semibold text-sm">{a.sponsor}</p>
                <p className="text-muted text-sm">{a.result}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted text-sm mt-4">
          The most revealing moment came in 2017, when the House Appropriations Committee voted to repeal
          the AUMF. House Republican leadership then stripped the provision from the bill before it reached
          the floor. The message was clear: even when Congress musters the courage to act, leadership blocks it.
        </p>
      </div>

      {/* Empires that collapsed */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Empires That Collapsed from Overextension</h2>
        <p className="text-stone-400 mb-6">
          Every great power that maintained a global military presence eventually went bankrupt or collapsed.
          The pattern is remarkably consistent:
        </p>
        <div className="space-y-4">
          {empireCollapses.map((e, i) => (
            <div key={i} className={`border-l-2 pl-4 ${e.empire.includes('American') ? 'border-red-500' : 'border-stone-600'}`}>
              <p className={`font-bold ${e.empire.includes('American') ? 'text-red-400' : 'text-white'}`}>{e.empire}</p>
              <p className="text-stone-400 text-sm">{e.cause}</p>
              <p className="text-stone-500 text-xs">{e.duration}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none mb-8">
        <p>
          Historian Paul Kennedy documented this pattern in <em>The Rise and Fall of the Great Powers</em>:
          empires expand their military commitments beyond their economic capacity to sustain them. The
          military spending that once protected trade routes becomes a drain on the treasury. The security
          establishment becomes a self-perpetuating bureaucracy that demands ever-larger budgets. Eventually,
          the cost of maintaining the empire exceeds the benefits it provides.
        </p>
      </div>

      <div className="bg-stone-100 rounded-xl p-6 my-8 border">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic text-stone-700">
          &ldquo;Of all the enemies to public liberty, war is, perhaps, the most to be dreaded, because
          it comprises and develops the germ of every other. War is the parent of armies; from these
          proceed debts and taxes; and armies, and debts, and taxes are the known instruments for
          bringing the many under the domination of the few.&rdquo;
        </blockquote>
        <p className="text-muted mt-3">— James Madison, &ldquo;Political Observations,&rdquo; 1795</p>
      </div>

      {/* Countries map */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
          Countries Where the AUMF Has Been Invoked
        </h2>
        <p className="text-stone-400 text-sm mb-4">
          The US has conducted counterterrorism operations in at least {stats.counterterrorCountries} countries:
        </p>
        <div className="flex flex-wrap gap-2">
          {aumfCountries.map(c => (
            <span key={c} className="bg-red-900/50 border border-red-800 text-red-300 text-sm px-3 py-1 rounded-full">{c}</span>
          ))}
          <span className="bg-red-900/50 border border-red-800 text-red-300 text-sm px-3 py-1 rounded-full">+ {stats.counterterrorCountries - aumfCountries.length} more</span>
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The 2001 AUMF is only <strong>60 words</strong> long — shorter than most text messages. It has authorized more military action than any law in American history.</li>
          <li>• The AUMF has been used against <strong>ISIS</strong>, even though ISIS was <em>expelled from al-Qaeda</em> and the two groups were actively fighting each other.</li>
          <li>• When 4 US soldiers were killed in <strong>Niger in 2017</strong>, Senator Lindsey Graham — a member of the Armed Services Committee — said he &ldquo;didn&apos;t know there were 1,000 troops in Niger.&rdquo;</li>
          <li>• The US has spent <strong>{fmtMoney(stats.warOnTerrorCost)}</strong> on the War on Terror — more than the GDP of every country except the US and China.</li>
          <li>• There are now soldiers deploying to Afghanistan&apos;s successor missions who were <strong>not yet born</strong> when the AUMF was passed.</li>
          <li>• <strong>77%</strong> of Americans support requiring new congressional authorization for military operations, but Congress refuses to vote.</li>
          <li>• The War on Terror has <strong>displaced 38 million people</strong> — more than any conflict since WWII.</li>
        </ul>
      </div>

      {/* The solution */}
      <div className="bg-red-50 border-l-4 border-red-700 rounded-r-xl p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 text-red-800">The Solution Is Simple</h2>
        <div className="prose prose-stone max-w-none">
          <p>
            Repeal the 2001 AUMF. Require the President to come to Congress for specific, time-limited,
            geographically bounded authorization before using military force. Include automatic sunset
            clauses. Enforce the War Powers Resolution. This is what the Constitution already requires.
            It&apos;s not radical — it&apos;s originalist.
          </p>
          <p>
            The AUMF represents everything the Founders warned against: a blank check for war, unchecked
            executive power, and a permanent state of conflict that enriches defense contractors while
            draining the treasury and destroying lives abroad and at home. The War on Terror has cost
            {' '}{fmtMoney(stats.warOnTerrorCost)}, killed {fmt(stats.warOnTerrorDeaths)} people,
            displaced {(stats.warOnTerrorDisplaced / 1e6).toFixed(0)} million, and made America less
            safe — not more.
          </p>
        </div>
      </div>

      {/* Cross-links */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/analysis/war-on-terror" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The War on Terror: $8 Trillion Later →</h3>
          <p className="text-muted text-sm">Full analysis of costs and consequences</p>
        </Link>
        <Link href="/analysis/congressional-authority" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Wars Without Congress →</h3>
          <p className="text-muted text-sm">How presidents bypassed the Constitution</p>
        </Link>
        <Link href="/analysis/the-469" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">469 Military Interventions →</h3>
          <p className="text-muted text-sm">The full history of US military force abroad</p>
        </Link>
        <Link href="/tools/tax-receipt" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Your War Tax Receipt →</h3>
          <p className="text-muted text-sm">See how much of your taxes fund war</p>
        </Link>
        <Link href="/analysis/iran-2026" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Iran 2026 →</h3>
          <p className="text-muted text-sm">The latest chapter in the forever wars</p>
        </Link>
        <Link href="/analysis/blowback" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Blowback →</h3>
          <p className="text-muted text-sm">How interventions create future enemies</p>
        </Link>
      </div>

      <BackToTop />
    </div>
  )
}
