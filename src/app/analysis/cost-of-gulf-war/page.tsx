import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'The Cost of the Gulf War: The "Cheap War" That Led to a $3 Trillion Sequel',
  description: 'The 1991 Gulf War cost $102 billion — but allies paid most of it. The real costs were Gulf War Syndrome, 12 years of sanctions, and the road to Iraq 2003. The cheap war that wasn\'t.',
  openGraph: {
    title: 'The Gulf War: The "Cheap War" That Led to $3 Trillion in Sequels',
    description: '$102B sticker price, but allies paid 88%. The real costs: 700,000 sick veterans, 500,000 dead Iraqi children, and a $3T sequel.',
    url: 'https://www.warcosts.org/analysis/cost-of-gulf-war',
    type: 'article',
  },
}

const keyStats = [
  { stat: '$102B', label: 'Total cost in 2024 dollars — the "bargain war"', source: 'Congressional Research Service' },
  { stat: '383', label: 'American service members killed — lowest of any major war', source: 'Department of Defense' },
  { stat: '697,000', label: 'US troops deployed — the largest since WWII at that time', source: 'DoD Deployment Records' },
  { stat: '~250,000', label: 'Gulf War Syndrome sufferers — 1 in 3 who served', source: 'VA Research Advisory Committee' },
  { stat: '500,000', label: 'Iraqi children killed by post-war sanctions (Lancet estimate)', source: 'Lancet / UNICEF' },
  { stat: '$3T+', label: 'Cost of the sequel this war made inevitable: Iraq 2003', source: 'Brown University Costs of War' },
]

const costBreakdown = [
  { category: 'US Share of War Costs', amount: '$12.4B', percent: '12.2%', notes: 'The US actually profited — allies paid more than the war cost' },
  { category: 'Saudi Arabia Contribution', amount: '$36.7B', percent: '36.0%', notes: 'Protecting the Saudi kingdom from Saddam — Saudi paid the most' },
  { category: 'Kuwait Contribution', amount: '$16.1B', percent: '15.8%', notes: 'The invaded country — they were paying to get their country back' },
  { category: 'Japan Contribution', amount: '$13.5B', percent: '13.2%', notes: 'Japan\'s "checkbook diplomacy" — paying for a war it couldn\'t fight' },
  { category: 'Germany Contribution', amount: '$6.6B', percent: '6.5%', notes: 'Reunifying Germany paying war dues to maintain alliance credibility' },
  { category: 'UAE & Other Gulf States', amount: '$10.2B', percent: '10.0%', notes: 'Regional states paying to contain Saddam' },
  { category: 'Other Allied Contributions', amount: '$6.5B', percent: '6.4%', notes: 'UK, France, Egypt, and 30+ other coalition members' },
]

const timeline = [
  { date: 'Aug 2, 1990', event: 'Iraq Invades Kuwait', detail: 'Saddam Hussein sends 100,000 troops into Kuwait. The invasion takes 2 days. Oil prices spike 130%.' },
  { date: 'Aug 7, 1990', event: 'Operation Desert Shield', detail: 'Bush deploys troops to Saudi Arabia. Over the next 5 months, 697,000 US troops build up in the region.' },
  { date: 'Nov 29, 1990', event: 'UN Resolution 678', detail: 'The Security Council authorizes "all necessary means" — diplomatic code for war. Deadline: January 15.' },
  { date: 'Jan 12, 1991', event: 'Congress Authorizes Force', detail: 'Senate: 52-47, House: 250-183. One of the closest war votes in history. It almost didn\'t happen.' },
  { date: 'Jan 17, 1991', event: 'Operation Desert Storm Begins', detail: '38 days of the most intense aerial bombardment since WWII. 100,000+ sorties. The "Highway of Death."' },
  { date: 'Feb 24, 1991', event: 'Ground War Begins', detail: 'The ground war lasts 100 hours. Iraqi army collapses. Coalition forces stop short of Baghdad.' },
  { date: 'Feb 28, 1991', event: 'Ceasefire', detail: 'Bush declares victory. Saddam stays in power. 100,000+ Iraqi soldiers and civilians are dead.' },
]

const gulfWarSyndrome = [
  { factor: 'Depleted Uranium (DU) Exposure', affected: '~200,000', detail: '782,000 DU rounds fired. Veterans who entered destroyed Iraqi vehicles inhaled DU dust. The DoD denied risks for decades.' },
  { factor: 'Oil Well Fire Smoke', affected: '~400,000', detail: 'Saddam set 600+ oil wells on fire. Troops breathed toxic smoke for months. No respiratory protection provided.' },
  { factor: 'Pesticide Exposure (DEET overdose)', affected: '~250,000', detail: 'Troops overused pesticides in desert conditions. Combined with anti-nerve agent pills, created neurotoxic cocktail.' },
  { factor: 'Pyridostigmine Bromide (PB) Pills', affected: '~250,000', detail: 'Anti-nerve agent pills given to all troops. VA later acknowledged they caused neurological damage.' },
  { factor: 'Sarin/Cyclosarin Exposure (Khamisiyah)', affected: '~100,000', detail: 'US troops demolished Iraqi weapons depot at Khamisiyah. The CIA later confirmed sarin nerve agent was released. The DoD initially denied it.' },
  { factor: 'Experimental Vaccines', affected: '~150,000', detail: 'Anthrax and botulinum toxoid vaccines given without proper consent. Some batches were experimental and unapproved.' },
]

const sanctionsConsequences = [
  { period: '1991-1995', effect: 'Iraqi Civilian Infrastructure Collapse', detail: 'Sanctions destroyed water treatment, sewage, electrical grid. Cholera, typhoid, and dysentery epidemics. Child mortality doubled.' },
  { period: '1995-1996', effect: 'Oil-for-Food Program (Failure)', detail: '$65B in oil sold, but only $46B reached Iraq. Corruption at the UN. Saddam manipulated the system. Civilians still starved.' },
  { period: '1996-2003', effect: 'Madeleine Albright\'s "Worth It"', detail: 'Asked on 60 Minutes if 500,000 dead Iraqi children was "worth it," Albright said: "We think the price is worth it." The quote radicalized a generation.' },
  { period: '1991-2003', effect: 'Total Humanitarian Cost', detail: 'UNICEF estimated 500,000 excess child deaths. The Lancet study confirmed. The sanctions killed more Iraqis than the war — and didn\'t remove Saddam.' },
]

const roadToIraq2003 = [
  { step: 'Saddam Stays in Power', detail: 'Bush Sr. chose not to march on Baghdad. His reasoning was sound: occupation would be a quagmire. His son ignored this lesson.' },
  { step: 'No-Fly Zones (12 Years)', detail: 'From 1991-2003, the US enforced no-fly zones over northern and southern Iraq. Cost: $12B+ per year. Constant low-level combat.' },
  { step: 'Operation Desert Fox (1998)', detail: 'Clinton bombed Iraq for 4 days over weapons inspections. Republicans accused him of "wagging the dog." The same Republicans later started Iraq 2003.' },
  { step: 'Neoconservative Strategy', detail: 'PNAC (Project for a New American Century) called for removing Saddam in 1998. Signatories: Cheney, Rumsfeld, Wolfowitz. They got their chance on 9/11.' },
  { step: '9/11 and the Iraq Connection That Wasn\'t', detail: '15 of 19 hijackers were Saudi. Zero were Iraqi. But within hours of 9/11, Rumsfeld asked for plans to hit Iraq. The Gulf War\'s "unfinished business" became a pretext for invasion.' },
  { step: 'The $3 Trillion Sequel', detail: 'Iraq 2003 cost $3T+, killed 4,431 Americans and ~300,000 Iraqis, created ISIS, and destabilized the entire Middle East. None of it would have happened without the Gulf War.' },
]

const veteranHealthCosts = [
  { condition: 'Gulf War Illness (multi-symptom)', claimsFiled: '280,000+', approvalRate: '43%', annualCost: '$4.2B', notes: 'Chronic fatigue, joint pain, cognitive problems, GI disorders. VA denied for 20+ years.' },
  { condition: 'PTSD', claimsFiled: '45,000', approvalRate: '62%', annualCost: '$680M', notes: '"Highway of Death" trauma. Burying alive of Iraqi troops. Friendly fire incidents.' },
  { condition: 'Respiratory Conditions', claimsFiled: '89,000', approvalRate: '38%', annualCost: '$1.1B', notes: 'Oil well fire exposure. Desert dust. Burn pit precursors.' },
  { condition: 'Cancer (DU-related)', claimsFiled: '34,000', approvalRate: '29%', annualCost: '$520M', notes: 'Depleted uranium exposure. The VA resisted the connection until 2021.' },
  { condition: 'ALS/Neurological', claimsFiled: '12,000', approvalRate: '67%', annualCost: '$340M', notes: 'Gulf War veterans have 2x the ALS rate. Linked to neurotoxin exposure.' },
]

const militaryStats = [
  { metric: 'Sorties flown', value: '100,000+', context: 'More sorties in 38 days than some air forces fly in a decade' },
  { metric: 'Bombs dropped', value: '88,500 tons', context: 'Including 9,300 precision-guided munitions (10% of total)' },
  { metric: 'Iraqi tanks destroyed', value: '3,300+', context: 'Out of Iraq\'s ~5,000 tank force — 66% destroyed' },
  { metric: 'Iraqi aircraft destroyed', value: '324', context: '35 in air-to-air, 289 on the ground. Zero US aircraft lost in air combat.' },
  { metric: 'Iraqi soldiers killed', value: '20,000-35,000', context: 'Official US estimate. Independent estimates: 100,000+' },
  { metric: 'Iraqi soldiers surrendered', value: '86,743', context: 'Many surrendered to journalists, drones, and even a group of Italian soldiers' },
  { metric: 'Friendly fire US deaths', value: '35 (24% of combat deaths)', context: 'The highest friendly fire rate in modern US history' },
]

export default function CostOfGulfWarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The Cost of the Gulf War: The "Cheap War" That Led to a $3 Trillion Sequel',
        description: 'The 1991 Gulf War cost $102 billion — but allies paid most. The real costs: Gulf War Syndrome, sanctions that killed 500,000 children, and the road to Iraq 2003.',
        url: 'https://www.warcosts.org/analysis/cost-of-gulf-war',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-15',
        dateModified: '2026-03-15'
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Cost of the Gulf War' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Cheap War That Wasn&apos;t
        </h1>
        <p className="text-xl text-stone-300 mb-4">$102 Billion on Paper. 250,000 Sick Veterans. 500,000 Dead Children. A $3 Trillion Sequel.</p>
        <p className="text-stone-400 text-lg">
          The 1991 Gulf War is remembered as the &ldquo;good&rdquo; war — quick, decisive, cheap. Only 383 
          Americans killed. Allies paid 88% of the bill. A 100-hour ground campaign. CNN showed smart bombs 
          going through windows, and Americans cheered. It looked like war had been perfected: fast, clean, 
          affordable. It was none of those things. The &ldquo;cheap&rdquo; war poisoned 250,000 of its own 
          soldiers with depleted uranium, nerve agents, and experimental vaccines. The sanctions that followed 
          killed an estimated 500,000 Iraqi children. And the decision to leave Saddam in power led directly 
          — inevitably — to the 2003 invasion that cost $3 trillion and destroyed Iraq entirely. The Gulf War 
          wasn&apos;t cheap. It was a down payment.
        </p>
      </div>

      <ShareButtons title="The Gulf War: The Cheap War That Led to a $3 Trillion Sequel" />

      {/* Key Numbers */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">By the Numbers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {keyStats.map((item) => (
            <div key={item.label} className="flex gap-3">
              <span className="text-2xl font-bold text-white whitespace-nowrap">{item.stat}</span>
              <div>
                <p className="text-stone-300 text-sm">{item.label}</p>
                <p className="text-stone-500 text-xs">{item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who Paid */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Who Actually Paid for the Gulf War
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The Gulf War is the only war in American history where the US actually made money. Allied 
          contributions totaled $89.6 billion — $12 billion more than the war cost. The United States 
          fought, and the Saudis, Kuwaitis, Japanese, and Germans wrote the checks. It was the ultimate 
          mercenary arrangement, though nobody called it that at the time.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Contributor</th>
                <th className="text-right py-3 font-semibold text-stone-900">Amount (2024$)</th>
                <th className="text-right py-3 font-semibold text-stone-900">Share</th>
                <th className="text-left py-3 font-semibold text-stone-900 pl-4">Notes</th>
              </tr>
            </thead>
            <tbody>
              {costBreakdown.map((row) => (
                <tr key={row.category} className={`border-b border-stone-100 ${row.category.includes('US Share') ? 'bg-red-50' : ''}`}>
                  <td className="py-3 font-medium text-stone-900">{row.category}</td>
                  <td className="text-right py-3 text-red-600 font-semibold">{row.amount}</td>
                  <td className="text-right py-3 text-stone-500">{row.percent}</td>
                  <td className="py-3 text-stone-600 text-xs pl-4">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
          <h3 className="font-bold text-red-800 text-lg mb-2">The Illusion of a Free War</h3>
          <p className="text-stone-700 text-sm">
            The ally-funded model created a dangerous illusion: that war could be waged at no cost to the 
            American taxpayer. This illusion shaped public attitudes toward the 2003 Iraq War, which was 
            launched with the assumption that Iraqi oil revenue would pay for reconstruction. It didn&apos;t. 
            That war cost $3 trillion, all of it borrowed. The Gulf War&apos;s &ldquo;free war&rdquo; model 
            has never been replicated.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Seven Months, Three Phases
        </h2>
        <div className="space-y-4">
          {timeline.map((item) => (
            <div key={item.date} className="flex gap-4 items-start">
              <div className="w-28 shrink-0 text-red-600 font-bold text-sm">{item.date}</div>
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 flex-1">
                <h3 className="font-bold text-stone-900">{item.event}</h3>
                <p className="text-stone-700 text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Military Stats */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Military Campaign: Shock and Awe Before the Phrase Existed
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {militaryStats.map((item) => (
            <div key={item.metric} className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <span className="text-red-600 font-bold text-lg">{item.value}</span>
              <p className="font-medium text-stone-900 text-sm">{item.metric}</p>
              <p className="text-stone-500 text-xs">{item.context}</p>
            </div>
          ))}
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-6 mt-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">
            The Highway of Death
          </h3>
          <p className="text-stone-300">
            On February 26-27, 1991, retreating Iraqi forces and civilians fleeing Kuwait City were caught 
            on Highway 80. US aircraft bombed the front and rear of the convoy, trapping thousands, then 
            systematically destroyed everything between. The images — miles of charred vehicles and bodies — 
            were so disturbing that they influenced Bush&apos;s decision to stop the war. A journalist who 
            witnessed it said: &ldquo;It was like shooting fish in a barrel.&rdquo; The death toll remains 
            classified, but estimates range from 1,000 to 10,000.
          </p>
        </div>
      </section>

      {/* Gulf War Syndrome */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Gulf War Syndrome: The Real Price Tag
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The Gulf War was supposed to have been clean — few casualties, quick victory. But within months 
          of returning home, veterans began reporting a constellation of symptoms: chronic fatigue, joint 
          pain, memory loss, headaches, gastrointestinal problems. The VA denied it was real. The Pentagon 
          denied exposure to toxins. It took <strong>17 years</strong> for a federal report to acknowledge 
          that Gulf War Illness was a real, physiological condition caused by toxic exposures. By then, 
          250,000 veterans were sick.
        </p>

        <div className="space-y-3">
          {gulfWarSyndrome.map((item) => (
            <div key={item.factor} className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-bold text-red-800">{item.factor}</h3>
                <span className="text-red-600 font-bold">~{item.affected} exposed</span>
              </div>
              <p className="text-stone-700 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mt-8 mb-4">Veteran Health Costs</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Condition</th>
                <th className="text-right py-3 font-semibold text-stone-900">Claims Filed</th>
                <th className="text-right py-3 font-semibold text-stone-900">Approval Rate</th>
                <th className="text-right py-3 font-semibold text-stone-900">Annual Cost</th>
              </tr>
            </thead>
            <tbody>
              {veteranHealthCosts.map((row) => (
                <tr key={row.condition} className="border-b border-stone-100">
                  <td className="py-3">
                    <span className="font-medium text-stone-900">{row.condition}</span>
                    <br />
                    <span className="text-stone-500 text-xs">{row.notes}</span>
                  </td>
                  <td className="text-right py-3">{row.claimsFiled}</td>
                  <td className="text-right py-3">{row.approvalRate}</td>
                  <td className="text-right py-3 text-red-600 font-semibold">{row.annualCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sanctions */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Sanctions: 500,000 Dead Children
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          After the war, the UN (at US insistence) maintained the most comprehensive sanctions regime in 
          history against Iraq. The sanctions destroyed Iraq&apos;s civilian infrastructure — water treatment, 
          hospitals, electrical grid — while Saddam&apos;s regime remained unaffected. The result: mass civilian 
          death on a scale that rivaled the war itself.
        </p>

        <div className="space-y-4">
          {sanctionsConsequences.map((item) => (
            <div key={item.period} className="bg-stone-50 border-l-4 border-red-600 p-5">
              <div className="flex gap-3 mb-2">
                <span className="text-red-600 font-bold text-sm">{item.period}</span>
                <h3 className="font-bold text-stone-900">{item.effect}</h3>
              </div>
              <p className="text-stone-700 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-950/5 border border-red-200 rounded-lg p-6 mt-6">
          <p className="text-stone-700 italic">
            &ldquo;We have heard that half a million children have died. I mean, that&apos;s more children 
            than died in Hiroshima. And, you know, is the price worth it?&rdquo;
          </p>
          <p className="text-stone-700 font-semibold mt-2">
            &ldquo;I think this is a very hard choice, but the price — we think the price is worth it.&rdquo;
          </p>
          <p className="text-stone-500 text-sm mt-2">
            — Secretary of State Madeleine Albright, 60 Minutes, May 12, 1996
          </p>
        </div>
      </section>

      {/* Road to 2003 */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Road to Iraq 2003: How the &ldquo;Cheap War&rdquo; Created the Expensive One
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The Gulf War didn&apos;t end in 1991. It paused. Everything about the 2003 invasion — the 
          neoconservative fixation on Iraq, the &ldquo;unfinished business&rdquo; narrative, the sanctions 
          that bred radicalism, the intelligence infrastructure built for regime monitoring — flowed directly 
          from decisions made during and after the Gulf War.
        </p>

        <div className="space-y-4">
          {roadToIraq2003.map((item) => (
            <div key={item.step} className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <h3 className="font-bold text-stone-900 mb-2">{item.step}</h3>
              <p className="text-stone-700 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Real Cost */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Real Cost: A Reckoning
        </h2>

        <div className="bg-stone-900 text-white rounded-lg p-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-4">
            Total Gulf War Complex Cost (1990-2026)
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-stone-700 pb-2">
              <span className="text-stone-300">Gulf War direct costs (1990-91)</span>
              <span className="text-white font-bold">$102B</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-700 pb-2">
              <span className="text-stone-300">No-fly zone enforcement (1991-2003)</span>
              <span className="text-white font-bold">$144B</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-700 pb-2">
              <span className="text-stone-300">Gulf War veteran healthcare (1991-present)</span>
              <span className="text-white font-bold">$98B+</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-700 pb-2">
              <span className="text-stone-300">Iraq War 2003 (direct consequence)</span>
              <span className="text-white font-bold">$3T+</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-700 pb-2">
              <span className="text-stone-300">Rise of ISIS (consequence of 2003 war)</span>
              <span className="text-white font-bold">$120B+</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-red-400 font-bold text-lg">Total</span>
              <span className="text-red-400 font-bold text-lg">~$3.5 Trillion</span>
            </div>
          </div>
          <p className="text-stone-400 text-sm mt-4">
            The &ldquo;cheap war&rdquo; that cost $102 billion triggered a chain of consequences totaling 
            $3.5 trillion. The sticker price was a lie. The real price was everything that followed.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>Congressional Research Service, &ldquo;Costs of Major U.S. Wars&rdquo; and &ldquo;Allied Contributions to the Gulf War&rdquo;</li>
          <li>Brown University Costs of War Project, Iraq War Cost Estimates</li>
          <li>VA Research Advisory Committee on Gulf War Veterans&apos; Illnesses (2008 Report)</li>
          <li>UNICEF, &ldquo;Situation Analysis of Children and Women in Iraq&rdquo; (1997)</li>
          <li>The Lancet, Iraqi Child Mortality Studies</li>
          <li>Rick Atkinson, <em>Crusade: The Untold Story of the Persian Gulf War</em> (Houghton Mifflin, 1993)</li>
          <li>Michael Gordon &amp; Bernard Trainor, <em>The Generals&apos; War</em> (Little, Brown, 1995)</li>
          <li>60 Minutes, &ldquo;Punishing Saddam&rdquo; (May 12, 1996)</li>
          <li>Department of Defense, Gulf War Deployment and Casualty Statistics</li>
          <li>Project for a New American Century (PNAC), &ldquo;Rebuilding America&apos;s Defenses&rdquo; (2000)</li>
        </ul>
      </section>

      <RelatedArticles articles={[
        { slug: 'war-on-terror', title: 'The War on Terror: $8 Trillion Later', desc: 'The Gulf War was the prologue. The War on Terror was the epic.' },
        { slug: 'sanctions-warfare', title: 'Sanctions Warfare', desc: 'Iraq sanctions killed 500,000 children. Cuba\'s 60-year embargo.' },
        { slug: 'lies-that-started-wars', title: 'Lies That Started Wars', desc: 'The incubator baby hoax that helped sell the Gulf War.' },
        { slug: 'veterans-betrayed', title: 'Veterans Betrayed', desc: 'Gulf War Syndrome was denied for 17 years. The VA\'s longest betrayal.' },
      ]} />

      <BackToTop />
    </div>
  )
}
