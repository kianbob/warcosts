import { DeathsByConflictChart, CostByConflictChart } from '@/components/charts/SpendingCharts'
import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'


export const metadata: Metadata = {
  title: 'US War Casualties — Over 1M Americans, 5.2M Civilians Dead | WarCosts',
  description: 'Over 1 million Americans and 5.2 million civilians killed in US wars. The human cost by conflict, era, and the veteran aftermath.',
}

const conflictDeathTable = [
  { conflict: 'Civil War', years: '1861-1865', usDeaths: 620000, usWounded: 476000, civilianDeaths: 50000, ratio: '1:0.08', woundedKilled: '0.8:1', note: 'More Americans died than in all other US wars combined until Vietnam.' },
  { conflict: 'World War I', years: '1917-1918', usDeaths: 116516, usWounded: 204002, civilianDeaths: 0, ratio: 'N/A (European theater)', woundedKilled: '1.8:1', note: 'US entered late. Shell shock (PTSD) first widely recognized.' },
  { conflict: 'World War II', years: '1941-1945', usDeaths: 405399, usWounded: 671846, civilianDeaths: 0, ratio: 'N/A (global)', woundedKilled: '1.7:1', note: 'Last "good war." Last time Congress formally declared war.' },
  { conflict: 'Korean War', years: '1950-1953', usDeaths: 36574, usWounded: 103284, civilianDeaths: 2000000, ratio: '55:1', woundedKilled: '2.8:1', note: 'The "Forgotten War." 2M+ Korean civilian deaths. Armistice only — no peace treaty ever signed.' },
  { conflict: 'Vietnam War', years: '1955-1975', usDeaths: 58220, usWounded: 153303, civilianDeaths: 2000000, ratio: '34:1', woundedKilled: '2.6:1', note: '2M Vietnamese civilians killed. Agent Orange. Draft resistance. Entire generation traumatized.' },
  { conflict: 'Gulf War', years: '1991', usDeaths: 383, usWounded: 467, civilianDeaths: 3500, ratio: '9:1', woundedKilled: '1.2:1', note: '100-hour ground war. "Highway of Death." Gulf War Syndrome in 250,000+ veterans.' },
  { conflict: 'Afghanistan', years: '2001-2021', usDeaths: 2461, usWounded: 20752, civilianDeaths: 46319, ratio: '19:1', woundedKilled: '8.4:1', note: '20-year occupation ended with Taliban returning to power. 176,000+ total deaths.' },
  { conflict: 'Iraq War', years: '2003-2011', usDeaths: 4599, usWounded: 32292, civilianDeaths: 300000, ratio: '65:1', woundedKilled: '7.0:1', note: 'Based on fabricated WMD intelligence. Created ISIS. Birth defects from depleted uranium.' },
  { conflict: 'War on Terror (other)', years: '2001-present', usDeaths: 400, usWounded: 2000, civilianDeaths: 387000, ratio: '968:1', woundedKilled: '5:1', note: 'Pakistan, Yemen, Somalia, Libya, Syria drone wars and special operations.' },
]

const hiddenCasualties = [
  { category: 'Contractor Deaths', number: '~8,000', period: '2001-2021', details: 'Private military contractors (Blackwater/Academi, DynCorp, KBR, etc.) who died in Iraq and Afghanistan are excluded from official US casualty counts. At the peak of the Iraq War, there were more contractors than US troops. Their deaths are tracked by the Department of Labor, not the Department of Defense — a deliberate accounting choice that keeps the "official" death toll lower.' },
  { category: 'Veteran Suicides', number: '120,000+', period: '2001-2024', details: '17 veterans kill themselves every day — over 6,200 per year. Since 2001, roughly 120,000 veterans have died by suicide, dwarfing the ~7,000 combat deaths in Iraq and Afghanistan combined. Suicide is now the leading cause of death for post-9/11 veterans. Wait times for VA mental health appointments average 3-6 months.' },
  { category: 'PTSD Cases', number: '1.8M+', period: 'All eras', details: 'An estimated 1.8 million US veterans suffer from PTSD. Among Iraq/Afghanistan veterans, rates range from 11-29%. PTSD leads to substance abuse, domestic violence, divorce, homelessness, and suicide. The VA treats roughly 600,000 PTSD patients per year — meaning over 1 million go untreated.' },
  { category: 'Traumatic Brain Injuries', number: '530,000+', period: '2000-2024', details: 'Over 530,000 TBI diagnoses among post-9/11 service members, mostly from IED blasts. Called the "signature wound" of the War on Terror. Long-term effects include memory loss, personality changes, depression, chronic pain, and early-onset dementia. Many cases go undiagnosed — the true number is likely much higher.' },
  { category: 'Agent Orange Victims (US)', number: '300,000+', period: '1962-present', details: 'The US sprayed 20 million gallons of Agent Orange and other herbicides over Vietnam (Operation Ranch Hand, 1962-1971). An estimated 300,000+ American veterans were exposed. Effects include cancer, diabetes, Parkinson\'s disease, heart disease, and birth defects in their children and grandchildren. The VA didn\'t recognize Agent Orange claims until 1991 — 20 years after spraying ended.' },
  { category: 'Agent Orange Victims (Vietnamese)', number: '3M+', period: '1962-present', details: '3 million Vietnamese civilians exposed to Agent Orange. Effects continue today: babies born in areas sprayed 50+ years ago still exhibit horrific birth defects — missing limbs, fused organs, neural tube defects. The US has spent $400M on cleanup (dioxin remediation) — a fraction of the cost. Vietnam estimates 150,000 children have been born with Agent Orange-related defects.' },
  { category: 'Gulf War Syndrome', number: '250,000+', period: '1991-present', details: 'Up to one-third of the 700,000 US troops deployed in the 1991 Gulf War developed "Gulf War Illness" — chronic fatigue, muscle pain, cognitive problems, gastrointestinal issues. Causes may include exposure to depleted uranium, oil well fires, pesticides, nerve agent pills, and sarin gas from the Khamisiyah demolition. The VA was slow to recognize the condition; many veterans spent years being told their symptoms were psychological.' },
  { category: 'Displaced Persons', number: '38M+', period: '2001-2022', details: 'The War on Terror has displaced 38 million people — more than any conflict since WWII. This includes 26 million who returned home but lost everything, and 12 million who remain displaced. These are people whose homes, neighborhoods, and cities were destroyed by American bombs, invasions, and the civil wars that followed. Most receive no compensation.' },
]

const woundedToKilledRatios = [
  { war: 'Civil War', ratio: '0.8:1', explanation: 'Primitive medicine. Amputations by candlelight. Most wounded died of infection.' },
  { war: 'World War I', ratio: '1.8:1', explanation: 'Better field hospitals. But trench warfare and chemical weapons created horrific injuries.' },
  { war: 'World War II', ratio: '1.7:1', explanation: 'Blood transfusions, penicillin, MASH units. Still high mortality from wounds.' },
  { war: 'Korean War', ratio: '2.8:1', explanation: 'MASH hospitals reduced time from injury to surgery. Helicopter evacuation introduced.' },
  { war: 'Vietnam', ratio: '2.6:1', explanation: 'Medevac helicopters. "Golden hour" concept. But booby traps caused devastating injuries.' },
  { war: 'Iraq/Afghanistan', ratio: '7-8:1', explanation: 'Body armor, IED-resistant vehicles, rapid medevac, advanced trauma surgery. Soldiers survive injuries that would have been fatal in Vietnam — but often with devastating, lifelong wounds: amputations, TBI, burns, PTSD.' },
]

export default function CasualtiesPage() {
  const conflicts = loadData('conflicts.json')
  const stats = loadData('stats.json')

  const deathData = conflicts
    .filter((c: any) => (c.usCasualties?.deaths || 0) + (c.civilianDeaths || 0) > 0)
    .sort((a: any, b: any) => (b.usCasualties?.deaths || 0) - (a.usCasualties?.deaths || 0))
    .map((c: any) => ({
      name: c.shortName || c.name,
      usDeaths: c.usCasualties?.deaths || 0,
      civilianDeaths: c.civilianDeaths || 0,
    }))

  const costData = conflicts
    .sort((a: any, b: any) => b.costInflationAdjusted - a.costInflationAdjusted)
    .slice(0, 15)
    .map((c: any) => ({
      name: c.shortName || c.name,
      cost: c.costInflationAdjusted,
    }))

  // Era comparison
  const eraStats = conflicts.reduce((acc: any, c: any) => {
    const era = c.era || 'Unknown'
    if (!acc[era]) acc[era] = { deaths: 0, civDeaths: 0, cost: 0, count: 0 }
    acc[era].deaths += c.usCasualties?.deaths || 0
    acc[era].civDeaths += c.civilianDeaths || 0
    acc[era].cost += c.costInflationAdjusted || 0
    acc[era].count++
    return acc
  }, {})

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Casualty Data' }]} />

      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">The Human Cost of War</h1>
      <p className="text-muted mb-6 max-w-3xl">Every number on this page was a human being — someone&apos;s child, parent, sibling, friend. {fmt(stats.totalUSDeaths)} Americans. Over {(stats.totalCivilianDeaths/1e6).toFixed(1)} million civilians. Behind each statistic is a name that someone still mourns.</p>
      <ShareButtons title="US War Casualties — The Human Cost" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmt(stats.totalUSDeaths), label: 'Americans Killed' },
          { val: `${(stats.totalCivilianDeaths / 1e6).toFixed(1)}M+`, label: 'Civilians Killed' },
          { val: fmtMoney(stats.totalCostInflationAdjusted), label: 'Total Cost' },
          { val: '5:1', label: 'Civilian to US Death Ratio' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Narrative */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">What the Numbers Mean</h2>
        <p>{fmt(stats.totalUSDeaths)} Americans killed in war. That&apos;s more than the entire population of San Francisco. If you held a minute of silence for each American killed, you&apos;d be silent for <strong>two years straight</strong>.</p>
        <p>But American deaths are only part of the story. For every US soldier killed in Iraq, approximately <strong>65 Iraqi civilians also died</strong>. In the War on Terror broadly, the ratio of civilian to US military deaths exceeds 50:1. These civilians didn&apos;t choose war. They were farmers, teachers, children, doctors — people living their lives when American bombs fell on their neighborhoods.</p>

        <h2 className="font-[family-name:var(--font-heading)]">Civilian Casualties: Getting Worse Over Time</h2>
        <p>Modern wars kill civilians at vastly higher rates than historical ones:</p>
        <ul>
          <li><strong>Civil War (1861-1865):</strong> ~50,000 civilian deaths. Ratio roughly 1:13 (civilian:military).</li>
          <li><strong>World War II (1941-1945):</strong> Millions of civilians, but the US homeland was untouched.</li>
          <li><strong>Vietnam (1955-1975):</strong> ~2 million Vietnamese civilians killed — 35× the US military deaths.</li>
          <li><strong>Iraq War (2003-2011):</strong> ~300,000 civilians killed — 65× the US military deaths.</li>
          <li><strong>War on Terror (2001-present):</strong> ~940,000 direct deaths, including 387,000+ civilians.</li>
        </ul>
        <p>The trend is unmistakable: as wars become more &ldquo;precise&rdquo; and technology more advanced, civilian death ratios have gotten <em>worse</em>, not better. The drone program, marketed as surgical precision, has killed an estimated 2,200 children.</p>
      </div>

      {/* Per-Conflict Death Table */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Casualties by Conflict</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-2 px-2">Conflict</th>
                <th className="py-2 px-2">Years</th>
                <th className="py-2 px-2 text-right">US Deaths</th>
                <th className="py-2 px-2 text-right">US Wounded</th>
                <th className="py-2 px-2 text-right">Civilian Deaths</th>
                <th className="py-2 px-2 text-right">Civ:US Ratio</th>
                <th className="py-2 px-2 text-right">W:K Ratio</th>
              </tr>
            </thead>
            <tbody>
              {conflictDeathTable.map(c => (
                <tr key={c.conflict} className="border-b border-stone-200 hover:bg-stone-100">
                  <td className="py-2 px-2 font-semibold">{c.conflict}</td>
                  <td className="py-2 px-2 text-muted font-mono text-xs">{c.years}</td>
                  <td className="py-2 px-2 text-right font-bold">{fmt(c.usDeaths)}</td>
                  <td className="py-2 px-2 text-right">{fmt(c.usWounded)}</td>
                  <td className="py-2 px-2 text-right text-red-600 font-bold">{c.civilianDeaths > 0 ? fmt(c.civilianDeaths) : '—'}</td>
                  <td className="py-2 px-2 text-right text-muted">{c.ratio}</td>
                  <td className="py-2 px-2 text-right text-muted">{c.woundedKilled}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-4">W:K Ratio = Wounded-to-Killed ratio. Higher ratios in modern wars reflect better battlefield medicine — soldiers survive injuries that would have been fatal in earlier conflicts, but often with devastating, lifelong wounds.</p>
      </div>

      {/* Wounded-to-Killed Ratio Evolution */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">📊 The Paradox of Survival</h2>
        <p className="text-sm text-stone-600 mb-4">Modern medicine means soldiers survive injuries that would have killed them in previous wars. The wounded-to-killed ratio has improved from 0.8:1 in the Civil War to 7-8:1 in Iraq/Afghanistan. This sounds like progress — until you realize it means tens of thousands of veterans living with catastrophic injuries: triple amputations, severe burns, TBI, and PTSD.</p>
        <div className="space-y-3">
          {woundedToKilledRatios.map(w => (
            <div key={w.war} className="bg-white rounded-lg p-3 border flex items-start gap-3">
              <span className="text-xl font-bold text-primary font-[family-name:var(--font-heading)] min-w-[50px]">{w.ratio}</span>
              <div>
                <p className="font-bold text-sm">{w.war}</p>
                <p className="text-muted text-xs">{w.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Deaths by Conflict</h2>
        <div style={{ width: '100%', minHeight: 500 }}>
          <DeathsByConflictChart data={deathData} />
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Cost by Conflict (2023 Dollars)</h2>
        <div style={{ width: '100%', minHeight: 500 }}>
          <CostByConflictChart data={costData} />
        </div>
      </div>

      {/* Hidden Casualties */}
      <div className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-2">The Casualties They Don&apos;t Count</h2>
        <p className="text-muted mb-6">Official casualty figures dramatically undercount the true human toll. These categories are systematically excluded or downplayed.</p>
        <div className="space-y-6">
          {hiddenCasualties.map(h => (
            <div key={h.category} className="bg-white rounded-lg border p-6 shadow-sm">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{h.category}</h3>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{h.number}</p>
                  <p className="text-muted text-xs">{h.period}</p>
                </div>
              </div>
              <p className="text-sm text-stone-600">{h.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Veteran Aftermath */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">The War Comes Home: Veteran Aftermath</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { val: '17/day', label: 'Veteran Suicides' },
            { val: '1.8M', label: 'Veterans with PTSD' },
            { val: '530K', label: 'Traumatic Brain Injuries' },
            { val: '37K+', label: 'Homeless Veterans' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-lg p-4 border text-center">
              <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
              <p className="text-muted text-xs">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="prose prose-stone max-w-none text-sm">
          <p><strong>Suicide:</strong> 17 American veterans kill themselves every day — over 6,200 per year. That&apos;s more than twice the total American combat deaths in 20 years of Afghanistan. Many waited months for VA mental health appointments. The VA budget for mental health is a fraction of the cost of a single aircraft carrier ($13B).</p>
          <p><strong>PTSD:</strong> Among Iraq and Afghanistan veterans, PTSD rates range from 11% to 29%. An estimated 1.8 million US veterans live with PTSD. Many self-medicate with alcohol and drugs, leading to addiction, family breakdown, and homelessness.</p>
          <p><strong>Traumatic Brain Injury:</strong> Over 530,000 post-9/11 service members have been diagnosed with TBI, often from IED blasts. Long-term effects include memory loss, personality changes, depression, and early-onset dementia. Many cases go undiagnosed.</p>
          <p><strong>Homelessness:</strong> On any given night, over 37,000 veterans are homeless. They served their country and now sleep under bridges. The VA estimates that 1.4 million veterans are at risk of homelessness.</p>
          <p><strong>Substance Abuse:</strong> Roughly 1 in 10 veterans returning from Iraq and Afghanistan develop a substance use disorder. Opioid prescriptions for VA patients tripled between 2001 and 2013, contributing to the broader opioid epidemic.</p>
          <p><strong>Domestic Violence:</strong> PTSD and TBI are strongly correlated with domestic violence. Studies show that combat veterans with PTSD are 2-3× more likely to commit intimate partner violence. The wars come home to families.</p>
        </div>
      </div>

      {/* Depleted Uranium & Birth Defects */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">☢️ Depleted Uranium: The Poison That Keeps Killing</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>The US military used depleted uranium (DU) munitions extensively in Iraq — particularly during the 1991 Gulf War and the 2003 invasion. DU is used in armor-piercing rounds because of its extreme density. When it hits a target, it creates a fine radioactive dust that contaminates soil and water.</p>
          <p>In <strong>Fallujah, Iraq</strong>, which was heavily bombarded in 2004, studies have documented:</p>
          <ul>
            <li>A <strong>38× increase in leukemia</strong> rates compared to pre-war levels</li>
            <li>A <strong>17× increase in breast cancer</strong></li>
            <li><strong>Birth defect rates exceeding those of Hiroshima</strong> survivors</li>
            <li>Babies born with <strong>congenital heart defects, neural tube defects, missing limbs, and fused organs</strong></li>
            <li>Miscarriage rates 45% above normal in heavily bombarded areas</li>
          </ul>
          <p>The US military has consistently denied any link between DU and health effects, despite studies by the World Health Organization, the Royal Society, and Iraqi medical researchers documenting the correlation. An estimated <strong>1,000-2,000 metric tons</strong> of DU were used in Iraq across both wars.</p>
          <p>American veterans exposed to DU also report elevated rates of cancer, kidney disease, and birth defects in their children.</p>
        </div>
      </div>

      {/* Cluster Munitions & Landmines */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">💣 Cluster Munitions & Landmines: Killing for Decades</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p><strong>Cluster munitions</strong> scatter hundreds of submunitions (bomblets) over a wide area. Between 10-40% fail to explode on impact, becoming de facto landmines that kill and maim civilians for decades after a conflict ends.</p>
          <ul>
            <li><strong>Laos:</strong> The US dropped 270 million cluster bombs on Laos during the Vietnam War — making it the most heavily bombed country per capita in history. An estimated 80 million unexploded bomblets remain. They still kill 50+ Laotians per year, over 50 years later. 40% of victims are children.</li>
            <li><strong>Cambodia:</strong> US bombing from 1969-1973 left millions of unexploded munitions. Over 64,000 Cambodians have been killed or injured by unexploded ordnance since 1979.</li>
            <li><strong>Iraq:</strong> The US used cluster munitions in both Gulf Wars. An estimated 1.2 million unexploded submunitions remained after the 2003 invasion.</li>
            <li><strong>Ukraine (2023):</strong> The Biden administration controversially provided cluster munitions to Ukraine, despite 111 countries having signed the Convention on Cluster Munitions banning their use.</li>
          </ul>
          <p>The United States has <strong>not signed</strong> the Convention on Cluster Munitions (2008) or the Ottawa Treaty banning landmines (1997). It remains one of the few developed nations that refuses to join either treaty — alongside Russia and China.</p>
        </div>
      </div>

      {/* How Casualties Are Undercounted */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">How the US Undercounts Civilian Deaths</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>The US military has developed multiple methods to minimize reported civilian casualties:</p>
          <ul>
            <li><strong>&ldquo;Military-age male&rdquo; reclassification:</strong> Under the Obama administration&apos;s drone program, any male between 18-65 killed in a strike zone was automatically counted as a &ldquo;combatant&rdquo; unless posthumously proven otherwise. This single policy likely reclassified thousands of civilian deaths.</li>
            <li><strong>No body counts:</strong> Unlike Vietnam (where body counts were infamously inflated), the military in Iraq and Afghanistan simply stopped counting. General Tommy Franks said: &ldquo;We don&apos;t do body counts.&rdquo; If you don&apos;t count, the number is always zero.</li>
            <li><strong>Limited investigations:</strong> Civilian casualty allegations are investigated by the unit that caused them — an obvious conflict of interest. Most investigations conclude with &ldquo;no evidence of civilian casualties.&rdquo;</li>
            <li><strong>Classification:</strong> Reports on drone strikes and special operations are classified. The public relies on leaks, FOIA requests, and independent investigators to piece together the truth.</li>
            <li><strong>Contractor exclusion:</strong> The ~8,000 private military contractor deaths in Iraq and Afghanistan are tracked by the Department of Labor, not the Pentagon, keeping them out of DoD casualty reports.</li>
          </ul>
          <p>Independent organizations like the Brown University Costs of War Project, Iraq Body Count, and Airwars consistently document civilian death tolls <strong>3-10× higher</strong> than US military claims.</p>
        </div>
      </div>

      {/* Era Comparison */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Deaths by Era</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-300 text-left">
                <th className="py-2 px-3">Era</th>
                <th className="py-2 px-3 text-right">US Deaths</th>
                <th className="py-2 px-3 text-right">Civilian Deaths</th>
                <th className="py-2 px-3 text-right">Total Cost</th>
                <th className="py-2 px-3 text-right">Conflicts</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(eraStats).map(([era, s]: [string, any]) => (
                <tr key={era} className="border-b border-stone-200">
                  <td className="py-2 px-3 font-semibold">{era}</td>
                  <td className="py-2 px-3 text-right">{fmt(s.deaths)}</td>
                  <td className="py-2 px-3 text-right text-red-600">{s.civDeaths > 0 ? fmt(s.civDeaths) : '—'}</td>
                  <td className="py-2 px-3 text-right text-primary">{fmtMoney(s.cost)}</td>
                  <td className="py-2 px-3 text-right">{s.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* The Cost Per Life */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Cost Per Life</h2>
        <p className="text-sm text-muted mb-4">How much has the US spent per life lost in each major conflict?</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { war: 'Civil War', costPerDeath: '$47,000', note: '(2023 dollars) — cheapest per death due to massive casualties' },
            { war: 'World War II', costPerDeath: '$3.9M', note: 'Total cost $4.1T ÷ 1.05M deaths (US + allied)' },
            { war: 'Vietnam', costPerDeath: '$17M', note: '$1T cost ÷ 58,220 US deaths' },
            { war: 'Iraq War', costPerDeath: '$435M', note: '$2T cost ÷ 4,599 US deaths' },
            { war: 'Afghanistan', costPerDeath: '$935M', note: '$2.3T cost ÷ 2,461 US deaths' },
            { war: 'War on Terror (total)', costPerDeath: '$1.1B per US death', note: '$8T ÷ ~7,400 US combat deaths' },
          ].map(w => (
            <div key={w.war} className="bg-white rounded-lg p-4 border text-center">
              <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{w.costPerDeath}</p>
              <p className="font-bold text-sm">{w.war}</p>
              <p className="text-muted text-xs mt-1">{w.note}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-4 text-center">Note: These calculations use US military deaths only. Including civilian deaths would dramatically lower the cost-per-death figures — which only makes the case against these wars more damning.</p>
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;War is a racket. It always has been. It is possibly the oldest, easily the most profitable, surely the most vicious. It is the only one in which the profits are reckoned in dollars and the losses in lives.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Major General Smedley Butler, 1935</p>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• More veterans have died by suicide since 2001 than were killed in combat during the entire War on Terror.</li>
          <li>• The War on Terror has displaced <strong>38 million people</strong> — more than any conflict since WWII.</li>
          <li>• The US military counts &ldquo;military-age males&rdquo; killed in drone strikes as combatants by default — artificially lowering civilian death counts.</li>
          <li>• Agent Orange, used in Vietnam, continues to cause <strong>birth defects in Vietnamese children today</strong> — 50 years later.</li>
          <li>• Depleted uranium munitions used in Iraq are linked to a <strong>38× increase in leukemia</strong> rates in Fallujah.</li>
          <li>• The US dropped <strong>270 million cluster bombs</strong> on Laos — they still kill 50+ people per year, over 50 years later.</li>
          <li>• <strong>8,000+ private military contractors</strong> died in Iraq and Afghanistan — not counted in official US casualty figures.</li>
          <li>• The average cost per US combat death in the War on Terror exceeds <strong>$1 billion</strong>.</li>
          <li>• 1 in 3 Gulf War veterans developed <strong>Gulf War Illness</strong> — the military denied it was real for over a decade.</li>
          <li>• An Iraqi child born in Fallujah in 2005 is more likely to have <strong>birth defects than a child born in Hiroshima</strong> after the atomic bomb.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/human-cost" className="text-red-800 hover:underline">→ The Human Cost of War — beyond the numbers</Link></li>
          <li><Link href="/analysis/the-aftermath" className="text-red-800 hover:underline">→ The Aftermath — long-term costs</Link></li>
          <li><Link href="/analysis/drone-wars" className="text-red-800 hover:underline">→ Drone Wars — remote-control killing</Link></li>
          <li><Link href="/analysis/cost-per-life" className="text-red-800 hover:underline">→ Cost Per Life — the economics of death</Link></li>
          <li><Link href="/opportunity-cost" className="text-red-800 hover:underline">→ What else could $8 trillion buy?</Link></li>
        </ul>
      </div>
    </div>
  )
}
