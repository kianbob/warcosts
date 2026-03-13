import { SpendingAreaChart, GdpChart } from '@/components/charts/SpendingCharts'
import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ShareButtons from '@/components/ShareButtons'


export const metadata: Metadata = {
  title: 'US Military Spending — $886B/Year, More Than Next 10 Countries Combined',
  description: 'Track US military spending from WWII to today. Currently $886 billion per year — more than the next 10 countries combined. Pentagon never passed an audit.',
  openGraph: {
    title: 'US Military Spending — $886B and Counting',
    description: 'Track every dollar of US military spending from 1949 to 2024. SIPRI data, GDP percentages, decade trends, and what the money could have bought instead.',
    url: 'https://www.warcosts.org',
    siteName: 'WarCosts',
    type: 'website',
  },
  alternates: { canonical: 'https://www.warcosts.org/spending' },
}

const globalComparison = [
  { country: 'United States', amount: 886, color: 'bg-red-600' },
  { country: 'China', amount: 292, color: 'bg-red-400' },
  { country: 'Russia', amount: 109, color: 'bg-stone-400' },
  { country: 'India', amount: 83, color: 'bg-stone-300' },
  { country: 'Saudi Arabia', amount: 75, color: 'bg-stone-300' },
  { country: 'UK', amount: 75, color: 'bg-stone-300' },
  { country: 'Germany', amount: 68, color: 'bg-stone-300' },
  { country: 'France', amount: 56, color: 'bg-stone-200' },
  { country: 'Japan', amount: 50, color: 'bg-stone-200' },
  { country: 'South Korea', amount: 46, color: 'bg-stone-200' },
  { country: 'Australia', amount: 32, color: 'bg-stone-200' },
]

const decadeBreakdown = [
  { decade: '1940s', peak: '$1.1T (1945)', avgPctGdp: '25-42%', context: 'WWII mobilization. Peak spending hit 41.9% of GDP in 1945. 16M Americans served. The entire economy was a war machine.', keyEvents: 'Pearl Harbor, D-Day, atomic bombs, WWII victory' },
  { decade: '1950s', peak: '$600B (1953)', avgPctGdp: '10-15%', context: 'Korean War spending spike. NATO established. Nuclear arms race begins. Defense spending never returned to pre-WWII levels — the permanent war economy was born.', keyEvents: 'Korean War, NATO founding, hydrogen bomb, Sputnik' },
  { decade: '1960s', peak: '$550B (1968)', avgPctGdp: '8-10%', context: 'Vietnam escalation drove spending upward. Kennedy\'s missile gap myth led to massive nuclear buildup. McNamara\'s "systems analysis" promised efficiency but delivered cost overruns.', keyEvents: 'Bay of Pigs, Cuban Missile Crisis, Vietnam escalation, Apollo program' },
  { decade: '1970s', peak: '$420B (1970)', avgPctGdp: '5-8%', context: 'Post-Vietnam drawdown — the only sustained reduction in military spending since WWII. Nixon Doctrine shifted burden to allies. But spending began climbing again by 1978.', keyEvents: 'Vietnam withdrawal, Nixon Doctrine, détente, Camp David Accords' },
  { decade: '1980s', peak: '$580B (1987)', avgPctGdp: '6-7%', context: 'Reagan\'s "Peace Through Strength" buildup. Defense budget increased 40% in real terms. Star Wars (SDI) program proposed. 600-ship Navy. Debt exploded.', keyEvents: 'Reagan buildup, Star Wars/SDI, Grenada invasion, Iran-Contra, Cold War end' },
  { decade: '1990s', peak: '$425B (1991)', avgPctGdp: '3.5-5%', context: 'The "peace dividend" — brief period of declining budgets after Soviet collapse. Base closures (BRAC). But Gulf War I and Balkans interventions prevented deeper cuts.', keyEvents: 'Soviet collapse, Gulf War I, Somalia, Bosnia, Kosovo, BRAC rounds' },
  { decade: '2000s', peak: '$770B (2008)', avgPctGdp: '4-5.5%', context: 'Post-9/11 explosion. Wars in Afghanistan and Iraq, plus massive homeland security spending. Pentagon budget nearly doubled in real terms. "Supplemental" budgets hid true war costs.', keyEvents: '9/11, Afghanistan invasion, Iraq invasion, surge, DHS created' },
  { decade: '2010s', peak: '$720B (2010)', avgPctGdp: '3.5-4.5%', context: 'Sequestration briefly constrained growth (2013). But "Overseas Contingency Operations" (OCO) slush fund bypassed caps. Wars continued in 7+ countries.', keyEvents: 'Libya intervention, Syria civil war, ISIS campaign, sequestration, OCO abuse' },
  { decade: '2020s', peak: '$886B (2024)', avgPctGdp: '3.4-3.5%', context: 'Ukraine aid, China "pivot," and inflation pushed budgets to all-time nominal highs. AUKUS submarine deal. Record peacetime spending despite no declared wars.', keyEvents: 'Afghanistan withdrawal, Ukraine war, AUKUS, China tensions, AI weapons' },
]

const hiddenCosts = [
  { category: 'Veterans Affairs (VA)', amount: '$301B', note: 'Healthcare, disability, education benefits for 18M+ veterans. This is a DIRECT cost of past wars that doesn\'t appear in the "defense" budget. VA spending has tripled since 2001.' },
  { category: 'Nuclear Weapons (DOE)', amount: '$51B', note: 'Maintained by the Department of Energy, not the Pentagon. Includes warhead production, nuclear submarine reactors, and cleanup of contaminated sites. Conveniently excluded from "defense" totals.' },
  { category: 'Homeland Security (DHS)', amount: '$62B', note: 'Created after 9/11. Includes TSA, CBP, Coast Guard, FEMA, ICE, and Secret Service. A direct consequence of the War on Terror that\'s never counted as "defense spending."' },
  { category: 'Intelligence Community', amount: '$71B', note: 'CIA ($15B+), NSA ($12B+), NRO, NGA, and 13 other agencies. The "black budget" — classified until Edward Snowden\'s leaks revealed the total. Actual spending may be higher.' },
  { category: 'Interest on War Debt', amount: '$145B+/yr', note: 'Wars since 2001 were funded entirely by borrowing — not taxes. The interest payments alone now exceed $145B per year and will total $1.1 trillion by 2030. Your grandchildren will still be paying for Iraq and Afghanistan.' },
  { category: 'State Department (Military-Related)', amount: '$28B', note: 'Foreign Military Financing, International Military Education, peacekeeping operations, and counter-terrorism programs run through State rather than Defense.' },
  { category: 'War Spending (OCO/Supplementals)', amount: '$40-80B/yr', note: 'The "Overseas Contingency Operations" fund is a budget trick that allows war spending to bypass normal budget caps. Congress treats it as a slush fund for anything the Pentagon wants.' },
]

const domesticComparison = [
  { agency: 'Department of Education', budget: '$79B', comparison: 'Pentagon spends this every 33 days' },
  { agency: 'Environmental Protection Agency', budget: '$9.0B', comparison: 'Pentagon spends this every 4 days' },
  { agency: 'National Science Foundation', budget: '$9.5B', comparison: 'Less than the cost of one aircraft carrier' },
  { agency: 'Centers for Disease Control', budget: '$8.7B', comparison: 'Pentagon spends this every 3.5 days' },
  { agency: 'NASA', budget: '$25B', comparison: 'Less than 3% of the defense budget' },
  { agency: 'National Institutes of Health', budget: '$48B', comparison: 'Less than the intelligence "black budget"' },
  { agency: 'School Lunch Program', budget: '$28B', comparison: 'Cost of ~350 F-35 fighters' },
  { agency: 'Head Start', budget: '$12B', comparison: 'Pentagon lobbying alone is $130M/yr' },
  { agency: 'Federal Housing Programs (HUD)', budget: '$73B', comparison: 'Less than VA + intelligence combined' },
  { agency: 'Amtrak Subsidy', budget: '$2.6B', comparison: 'Pentagon spends this every day' },
]

export default function SpendingPage() {
  const spending = loadData('military-spending.json')
  const stats = loadData('stats.json')
  const restTotal = globalComparison.slice(1).reduce((s, c) => s + c.amount, 0)

  const trueTotalNational = 886 + 301 + 51 + 62 + 71 + 145 + 28
  const trueTotalFormatted = `$${(trueTotalNational / 1000).toFixed(1)}T`

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Military Spending' }]} />
      <BreadcrumbSchema items={[{ label: "Military Spending", href: "/spending" }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Military Spending</h1>
      <p className="text-muted mb-6 max-w-3xl">
        The United States spends {fmtMoney(stats.currentAnnualBudget)} per year on defense — {stats.pctGdp}% of GDP, more than the next 10 countries combined, and ${fmt(stats.costPerSecond)} every single second. But the official number is a lie. When you include veterans&apos; care, nuclear weapons, intelligence, homeland security, and interest on war debt, the true cost exceeds <strong>{trueTotalFormatted} per year</strong>. The Pentagon has never passed an audit.
      </p>
      <ShareButtons title="US Military Spending — $886B/Year" />

      {/* AI Overview */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-blue-900 mb-3">🧠 Key Insights</h3>
        <ul className="space-y-2 text-sm text-blue-900">
          <li>• <strong>The US spends more on defense than the next 10 countries combined</strong> — yet the Pentagon has failed 7 consecutive audits and cannot account for $1.9 trillion in adjustments.</li>
          <li>• <strong>At $28,095/second, the military burns through more per minute than the median American earns in a year</strong> — and Congress regularly appropriates more than the Pentagon even requests.</li>
          <li>• <strong>The official $886B budget is a lie</strong> — when you include VA, nuclear weapons, intelligence, homeland security, and war debt interest, true national security spending exceeds $1.5T/yr ($11,700 per household).</li>
          <li>• <strong>Military spending accounts for ~53% of federal discretionary spending</strong> — more than education, EPA, NASA, NIH, CDC, and school lunches combined ($295B total).</li>
          <li>• <strong>The ratchet never reverses</strong> — spending spiked for WWII, Korea, Vietnam, the Cold War, and 9/11, but never returned to pre-crisis levels. Each crisis creates a new, higher floor.</li>
        </ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmtMoney(stats.currentAnnualBudget), label: 'Official Budget (FY2024)' },
          { val: trueTotalFormatted, label: 'TRUE Annual Cost' },
          { val: '$' + fmt(stats.costPerSecond) + '/sec', label: 'Cost Per Second' },
          { val: '7 Failures', label: 'Consecutive Audit Failures' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* True Cost of National Security */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2 text-red-800">The True Cost of National Security</h2>
        <p className="text-sm text-stone-600 mb-6">The &ldquo;defense budget&rdquo; of $886B is only the Pentagon&apos;s share. The real cost of America&apos;s military empire is scattered across multiple agencies to make the total look smaller.</p>
        <div className="space-y-3">
          {hiddenCosts.map(c => (
            <div key={c.category} className="bg-white rounded-lg p-4 border">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-stone-800">{c.category}</h4>
                <span className="text-red-700 font-bold font-[family-name:var(--font-heading)]">{c.amount}</span>
              </div>
              <p className="text-muted text-xs">{c.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center bg-red-100 rounded-lg p-4">
          <p className="text-sm text-red-800 font-semibold">Combined True National Security Spending</p>
          <p className="text-4xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{trueTotalFormatted}/year</p>
          <p className="text-xs text-red-600 mt-1">That&apos;s roughly <strong>$11,700 per household</strong>, or <strong>53% of all federal discretionary spending</strong>.</p>
        </div>
      </div>

      {/* More than next 10 combined */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">More Than the Next 10 Countries Combined</h2>
        <div className="space-y-2">
          {globalComparison.map(c => {
            const pct = (c.amount / 886) * 100
            return (
              <div key={c.country} className="flex items-center gap-3">
                <span className="w-28 text-sm font-medium text-right">{c.country}</span>
                <div className="flex-1 bg-stone-100 rounded-full h-6 overflow-hidden">
                  <div className={`h-full rounded-full ${c.color}`} style={{ width: `${pct}%` }} />
                </div>
                <span className="w-16 text-sm text-right font-semibold">${c.amount}B</span>
              </div>
            )
          })}
        </div>
        <p className="text-sm text-muted mt-4 text-center">US: ${globalComparison[0].amount}B vs. next 10 combined: ${restTotal}B</p>
        <p className="text-xs text-stone-500 mt-2 text-center">And if you include the hidden costs? The US spends more on national security than <strong>every other country on earth combined</strong>.</p>
      </div>

      {/* Smedley Butler Section */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🎖️ &ldquo;War Is a Racket&rdquo;</h2>
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic mb-4">
          &ldquo;War is a racket. It always has been. It is possibly the oldest, easily the most profitable, surely the most vicious. It is the only one international in scope. It is the only one in which the profits are reckoned in dollars and the losses in lives.&rdquo;
        </blockquote>
        <p className="text-stone-400 mb-4">— Major General Smedley Butler, USMC, 1935</p>
        <div className="text-stone-600 text-sm space-y-3">
          <p>Smedley Darlington Butler was, at the time of his death, the most decorated Marine in US history — two Medals of Honor, the Brevet Medal, and the Marine Corps Brevet Medal. He served 34 years and fought in the Philippines, China, Central America, the Caribbean, and France during WWI.</p>
          <p>After retiring, Butler wrote <em>War Is a Racket</em> (1935), exposing how wars are fought for corporate profit. He described his career with brutal honesty:</p>
          <blockquote className="border-l-2 border-stone-600 pl-4 italic text-stone-400">
            &ldquo;I spent 33 years and four months in active military service... And during that period I spent most of my time as a high-class muscle man for Big Business, for Wall Street and the bankers. In short, I was a racketeer, a gangster for capitalism. I helped make Mexico safe for American oil interests in 1914. I helped make Haiti and Cuba a decent place for the National City Bank boys to collect revenues in. I helped in the raping of half a dozen Central American republics for the benefit of Wall Street. I helped purify Nicaragua for the International Banking House of Brown Brothers in 1902-1912. I brought light to the Dominican Republic for the American sugar interests in 1916. I helped make Honduras right for the American fruit companies in 1903.&rdquo;
          </blockquote>
          <p>Butler also exposed the <strong>Business Plot of 1933</strong> — a conspiracy by wealthy industrialists to overthrow FDR and install a fascist dictatorship. Butler was recruited to lead the coup but instead reported it to Congress. The Congressional investigation confirmed the plot but no one was prosecuted.</p>
          <p className="text-stone-500">Butler&apos;s proposed solutions: (1) Take the profit out of war by limiting military industry profits to the same level as soldiers&apos; pay. (2) Let soldiers vote on whether to go to war — only those who risk their lives should decide. (3) Limit the military to a purely defensive force that cannot operate beyond 200 miles from the coast. Nearly 90 years later, none of these proposals have been adopted.</p>
        </div>
      </div>

      {/* Eisenhower Quote */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise of misplaced power exists and will persist.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Dwight D. Eisenhower, Farewell Address, 1961</p>
        <p className="text-stone-500 text-sm mt-3">Eisenhower originally wrote &ldquo;military-industrial-<strong>congressional</strong> complex&rdquo; but removed the word &ldquo;congressional&rdquo; to avoid alienating allies in Congress. The full phrase is more accurate — Congress is a willing participant in the spending machine.</p>
      </div>

      {/* Charts */}
      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Military Spending Over Time (Billions $)</h2>
        <SpendingAreaChart data={spending} />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Spending as % of GDP</h2>
        <GdpChart data={spending} />
      </div>

      {/* Decade-by-Decade Breakdown */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Decade-by-Decade Breakdown</h2>
        <div className="space-y-6">
          {decadeBreakdown.map(d => (
            <div key={d.decade} className="bg-white rounded-lg p-5 border">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{d.decade}</h3>
                <div className="text-right">
                  <p className="text-primary font-bold">{d.peak}</p>
                  <p className="text-muted text-xs">{d.avgPctGdp} of GDP</p>
                </div>
              </div>
              <p className="text-sm text-stone-600 mb-2">{d.context}</p>
              <p className="text-xs text-muted"><strong>Key events:</strong> {d.keyEvents}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Ratchet Effect */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Ratchet Effect</h2>
        <p>Military spending follows an iron pattern: it spikes during wars, then <strong>never fully returns to pre-war levels</strong>.</p>
        <ul>
          <li><strong>Pre-WWII baseline:</strong> ~1.5% of GDP</li>
          <li><strong>WWII peak:</strong> 41.9% of GDP (1945)</li>
          <li><strong>Post-WWII &ldquo;normal&rdquo;:</strong> 5-10% of GDP (never returned to 1.5%)</li>
          <li><strong>Post-Cold War &ldquo;peace dividend&rdquo;:</strong> Briefly dipped to 3% of GDP in late 1990s</li>
          <li><strong>Post-9/11:</strong> Ratcheted back up to 4.5%+ and has never come down</li>
        </ul>
        <p>Each crisis creates a new baseline. Each baseline becomes the floor for the next increase. The Pentagon is the world&apos;s largest employer with 3.2 million employees, and every one of those jobs is a constituency that makes cuts politically dangerous. Defense contractors strategically distribute subcontracts across all 435 congressional districts — ensuring every member of Congress has a financial incentive to vote for more spending.</p>
      </div>

      {/* Budget Tricks */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">🎭 Budget Tricks: How the Pentagon Hides True Costs</h2>
        <div className="space-y-4 text-sm">
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="font-bold text-stone-800">Supplemental Appropriations</h4>
            <p className="text-muted">War costs were funded through &ldquo;emergency supplementals&rdquo; that bypassed normal budget processes. From 2001-2010, over $1.1 trillion in war spending was kept off the regular defense budget — making the base budget look smaller than reality.</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="font-bold text-stone-800">OCO Slush Fund</h4>
            <p className="text-muted">The Overseas Contingency Operations (OCO) fund replaced supplementals in 2010. It was supposed to be for war costs only, but the Pentagon and Congress used it to fund anything they wanted without budget caps. In some years, $30B+ in OCO spending had nothing to do with overseas operations. It was eliminated in 2022 — but the spending was simply absorbed into the base budget.</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="font-bold text-stone-800">Cross-Agency Scattering</h4>
            <p className="text-muted">Nuclear weapons costs are in the DOE budget. Veterans&apos; costs are in the VA budget. Homeland security has its own department. Intelligence is classified. By scattering military-related spending across a dozen agencies, the true cost is invisible to anyone not looking very carefully.</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="font-bold text-stone-800">Borrowing Instead of Taxing</h4>
            <p className="text-muted">Every war since 2001 has been funded entirely by borrowing. Unlike WWII (which had war bonds and income tax increases), Americans paid no direct tax for Iraq or Afghanistan. This hides the cost — until the interest payments come due. The interest alone on War on Terror debt will exceed <strong>$1.1 trillion by 2030</strong>.</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="font-bold text-stone-800">Long-Term VA Costs Deferred</h4>
            <p className="text-muted">The peak cost of caring for veterans comes 30-40 years after a war ends. WWII veterans&apos; benefits peaked in the 1980s. Vietnam benefits peaked in the 2000s. Iraq/Afghanistan VA costs are projected to total <strong>$2.2 trillion</strong> through 2050 — none of which appears in current &ldquo;defense spending&rdquo; figures.</p>
          </div>
        </div>
      </div>

      {/* Where the money goes */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Where the Money Goes</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            { cat: 'Operations & Maintenance', pct: '35%', amt: '$310B', note: 'Day-to-day operations, fuel, supplies, maintenance. Includes $20B+ for contractor services.' },
            { cat: 'Military Personnel', pct: '25%', amt: '$222B', note: 'Pay and benefits for 1.3M active duty, 800K reserve. A private earns $26K/yr — a defense CEO earns $25M.' },
            { cat: 'Procurement', pct: '22%', amt: '$195B', note: 'Weapons, vehicles, ships, aircraft purchases. F-35: $80M each. Aircraft carrier: $13B. Virginia-class sub: $3.4B.' },
            { cat: 'Research & Development', pct: '11%', amt: '$97B', note: 'Next-gen weapons, AI, hypersonics, space, cyber. More than the entire NIH budget ($48B) for health research.' },
            { cat: 'Military Construction', pct: '2%', amt: '$18B', note: 'Base construction and renovation worldwide. Includes projects in all 50 states — political insurance against cuts.' },
            { cat: 'Other (Nuclear/DOE)', pct: '5%', amt: '$44B', note: 'Nuclear weapons (DOE), defense agencies, classified programs. The stuff they don\'t want you to see.' },
          ].map(c => (
            <div key={c.cat} className="bg-white rounded-lg p-4 border">
              <div className="flex justify-between">
                <h4 className="font-bold">{c.cat}</h4>
                <span className="text-primary font-bold">{c.pct} · {c.amt}</span>
              </div>
              <p className="text-muted text-xs mt-1">{c.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Domestic Spending Comparison */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What America Prioritizes</h2>
        <p className="text-sm text-muted mb-4">The federal discretionary budget tells you what a government truly values. Here&apos;s how military spending compares to everything else:</p>
        <div className="space-y-2">
          {domesticComparison.map(d => (
            <div key={d.agency} className="flex items-center gap-3 bg-white rounded-lg p-3 border text-sm">
              <span className="w-52 font-medium">{d.agency}</span>
              <span className="w-20 text-right font-bold text-primary">{d.budget}</span>
              <span className="flex-1 text-muted text-xs">{d.comparison}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-500 mt-4 text-center">
          The Pentagon&apos;s $886B is more than the budgets of Education, EPA, NSF, CDC, NASA, NIH, school lunches, Head Start, HUD, and Amtrak <strong>combined</strong> ($295B).
        </p>
      </div>

      {/* Per Capita */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">Per Capita Military Spending</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            { country: 'United States', amount: '$2,650/person' },
            { country: 'Saudi Arabia', amount: '$2,100/person' },
            { country: 'Israel', amount: '$2,400/person' },
            { country: 'Russia', amount: '$750/person' },
            { country: 'China', amount: '$205/person' },
            { country: 'UK', amount: '$1,100/person' },
            { country: 'India', amount: '$60/person' },
            { country: 'World Average', amount: '$280/person' },
          ].map(c => (
            <div key={c.country} className="bg-white rounded-lg p-3 border">
              <p className={`font-bold ${c.country === 'United States' ? 'text-red-700 text-lg' : 'text-stone-700'}`}>{c.amount}</p>
              <p className="text-muted text-xs">{c.country}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted mt-4 text-center">Every American man, woman, and child effectively pays $2,650/yr for the official defense budget — nearly 10× the global average. When you include hidden costs, it&apos;s over <strong>$4,600 per person</strong>.</p>
      </div>

      {/* What Taxpayers Actually Pay */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">💸 What You Actually Pay</h2>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-lg p-4 border">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$60,000</p>
            <p className="text-muted text-sm">Your household&apos;s share of War on Terror costs</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">$11,700/yr</p>
            <p className="text-muted text-sm">Annual true national security cost per household</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">~24¢</p>
            <p className="text-muted text-sm">Of every tax dollar goes to defense (official). True number: ~38¢.</p>
          </div>
        </div>
        <p className="text-sm text-stone-600 mt-4 text-center">
          <Link href="/tools/tax-receipt" className="text-red-800 font-semibold hover:underline">→ Calculate your personal war tax receipt</Link>
        </p>
      </div>

      {/* Cold War Spending Explosion */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Cold War: When the Permanent War Economy Was Born</h2>
        <p>Before WWII, the United States had a tiny peacetime military. The standing army was smaller than Portugal&apos;s. Military spending was under 2% of GDP. The Founders explicitly warned against standing armies.</p>
        <p>WWII changed everything. Spending hit 42% of GDP. After the war, instead of demobilizing as the US had after every previous conflict, the new &ldquo;Cold War&rdquo; framework required permanent military readiness. NSC-68 (1950), a classified National Security Council document, argued that the US needed to massively increase defense spending indefinitely. It recommended tripling the defense budget — and the Korean War provided the pretext.</p>
        <p>The result was the <strong>permanent war economy</strong>: a system in which military spending became a structural feature of American capitalism. Defense contractors, military bases, and procurement programs were distributed across every congressional district, creating a self-reinforcing political constituency for ever-higher budgets.</p>
        <p>The nuclear arms race added another dimension. At its peak, the US maintained over <strong>31,000 nuclear warheads</strong> — enough to destroy human civilization several times over. The total cost of the US nuclear program from 1940-1996 was <strong>$5.5 trillion</strong> (in 1996 dollars). A single Trident submarine carries more destructive power than was used in all of WWII combined, including both atomic bombs.</p>
      </div>

      {/* Post-9/11 Surge */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Post-9/11 Surge</h2>
        <p>September 11, 2001 triggered the largest increase in military spending since the Korean War. The Pentagon base budget nearly doubled in real terms between 2001 and 2010 — from $316B to $556B. On top of that, war spending through supplementals and OCO added another $150-190B per year at the peak.</p>
        <p>Key facts about post-9/11 spending:</p>
        <ul>
          <li>The wars in Afghanistan and Iraq cost a combined <strong>$2.2 trillion in direct appropriations</strong>.</li>
          <li>Including long-term VA costs and interest, the total War on Terror cost exceeds <strong>$8 trillion</strong> (Brown University Costs of War Project).</li>
          <li>None of this spending was funded by taxes — it was all borrowed, adding to the national debt.</li>
          <li>The 2001 AUMF — 60 words — authorized operations in <strong>22+ countries</strong> for <strong>20+ years</strong>.</li>
          <li>Annual defense spending has <strong>never returned to pre-9/11 levels</strong>, even after withdrawing from both wars.</li>
        </ul>
        <p>The ratchet turned again. The &ldquo;peace dividend&rdquo; of the 1990s is gone. The new baseline is $886B and climbing.</p>
      </div>

      {/* Pentagon Audit */}
      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-red-800">📊 Pentagon Has Never Passed an Audit</h3>
        <p className="text-sm text-stone-600 mb-4">The Department of Defense is the only federal agency that has never passed a comprehensive financial audit. It has failed every year since audits became mandatory in 2018 — <strong>seven consecutive failures</strong>.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-center text-sm">
          <div className="bg-white rounded-lg p-3 border">
            <p className="font-bold text-red-700">$3.8T</p>
            <p className="text-muted text-xs">Assets Under Management</p>
          </div>
          <div className="bg-white rounded-lg p-3 border">
            <p className="font-bold text-red-700">$1.9T</p>
            <p className="text-muted text-xs">Unresolved Adjustments (2023)</p>
          </div>
          <div className="bg-white rounded-lg p-3 border">
            <p className="font-bold text-red-700">$220B</p>
            <p className="text-muted text-xs">Unsupported Adjustments</p>
          </div>
          <div className="bg-white rounded-lg p-3 border">
            <p className="font-bold text-red-700">0</p>
            <p className="text-muted text-xs">Officials Fired for Audit Failure</p>
          </div>
        </div>
        <p className="text-sm text-stone-600">The Pentagon manages $3.8 trillion in assets but cannot account for where the money goes. If any other organization failed an audit 7 years in a row, there would be consequences. The Pentagon gets a budget increase.</p>
      </div>

      {/* Historical Peaks */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Historical Peak Spending Years</h2>
        <div className="space-y-3">
          {[
            { year: '1945', amount: '$1.1T (2023$)', pctGdp: '41.9%', context: 'WWII peak. 12 million Americans in uniform. Entire economy mobilized.' },
            { year: '1953', amount: '$600B (2023$)', pctGdp: '14.2%', context: 'Korean War peak. Cold War buildup. Eisenhower would later warn of the military-industrial complex.' },
            { year: '1968', amount: '$550B (2023$)', pctGdp: '9.4%', context: 'Vietnam War peak. 549,000 troops in Southeast Asia. Anti-war movement growing.' },
            { year: '1987', amount: '$580B (2023$)', pctGdp: '6.1%', context: 'Reagan buildup peak. Star Wars program. 600-ship Navy. National debt tripled.' },
            { year: '2010', amount: '$720B (2023$)', pctGdp: '4.7%', context: 'Wars in Iraq and Afghanistan at peak. Surge strategies in both countries. 200,000+ troops deployed.' },
            { year: '2024', amount: '$886B', pctGdp: '3.4%', context: 'All-time nominal high during "peacetime." No declared wars. China and Russia cited as justifications.' },
          ].map(p => (
            <div key={p.year} className="flex items-start gap-4 bg-white rounded-lg p-4 border">
              <span className="text-lg font-mono font-bold text-primary min-w-[50px]">{p.year}</span>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-bold">{p.amount}</span>
                  <span className="text-muted text-sm">{p.pctGdp} of GDP</span>
                </div>
                <p className="text-muted text-xs mt-1">{p.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The US spends more on defense than China, Russia, India, Saudi Arabia, UK, Germany, France, Japan, South Korea, and Australia <strong>combined</strong>.</li>
          <li>• Military spending accounts for roughly <strong>half of all federal discretionary spending</strong>.</li>
          <li>• The Pentagon spends roughly <strong>{fmtMoney(stats.costPerDay)} per day</strong> — about {fmtMoney(stats.costPerHour)} per hour.</li>
          <li>• WWII peak spending was over $1 trillion in today&apos;s dollars (41.9% of GDP).</li>
          <li>• The F-35 program alone will cost <strong>$1.7 trillion</strong> over its lifetime — more than the GDP of Canada.</li>
          <li>• The US nuclear arsenal cost <strong>$5.5 trillion</strong> to build (1940-1996) and costs $51B/yr to maintain.</li>
          <li>• The US has 11 nuclear aircraft carriers. The rest of the world combined has 2 (France and China).</li>
          <li>• It costs <strong>$2.5 million per soldier per year</strong> to maintain a troop in Afghanistan — over 40× what that soldier earns.</li>
          <li>• The Pentagon employs <strong>3.2 million people</strong> — making it the largest employer in the world, ahead of the Chinese army and Walmart.</li>
          <li>• Congress regularly appropriates <strong>more money than the Pentagon requests</strong>. In 2023, Congress added $45B the Pentagon didn&apos;t ask for.</li>
        </ul>
      </div>

      {/* Year-by-Year and Global Links */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Explore Spending Data</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <Link href="/global-spending" className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition">🌍 Global Spending Comparison</Link>
          <Link href="/spending/2024" className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition">📊 2024 Detail</Link>
        </div>
        <p className="text-sm text-stone-600 mb-2">Year-by-year spending detail (1949–2024):</p>
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: 76 }, (_, i) => 1949 + i).map(y => (
            <Link key={y} href={`/spending/${y}`} className="text-xs bg-stone-100 hover:bg-red-100 px-2 py-1 rounded transition text-stone-700 hover:text-red-800">{y}</Link>
          ))}
        </div>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline">→ The Military-Industrial Complex</Link></li>
          <li><Link href="/contractors" className="text-red-800 hover:underline">→ Defense Contractors — who profits</Link></li>
          <li><Link href="/analysis/jobs-vs-war" className="text-red-800 hover:underline">→ Jobs vs. War — military spending creates the fewest jobs</Link></li>
          <li><Link href="/opportunity-cost" className="text-red-800 hover:underline">→ What else could $8 trillion buy?</Link></li>
          <li><Link href="/tools/tax-receipt" className="text-red-800 hover:underline">→ Calculate your personal war tax receipt</Link></li>
        </ul>
      </div>
    </div>
  )
}
