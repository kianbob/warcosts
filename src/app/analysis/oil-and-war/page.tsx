import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'
import { OilPriceChart, HalliburtonChart, USProductionChart, MilitaryOilSpendingChart } from './OilCharts'

export const metadata: Metadata = {
  title: 'Oil & War: Every Middle East War Is About Oil',
  description: 'The Carter Doctrine. Gulf War for Kuwait oil. Iraq War no-bid Halliburton contracts. Petrodollar system. Pipeline politics. America fights for oil it no longer needs.',
  openGraph: {
    title: 'Oil & War: Every Middle East War Is About Oil',
    description: 'Carter Doctrine, Gulf War, Iraq invasion, petrodollar system. Follow the oil and you find every war.',
    url: 'https://www.warcosts.org/analysis/oil-and-war',
    type: 'article',
  },
}

const keyStats = [
  { stat: '$3T+', label: 'Total cost of the Iraq War — fought in the world\'s second-largest oil reserve', source: 'Brown University Costs of War' },
  { stat: '$39.5B', label: 'Halliburton/KBR contracts from Iraq — largest no-bid contract in US history', source: 'SIGIR' },
  { stat: '60%', label: 'Of global proven oil reserves located in the Middle East', source: 'BP Statistical Review' },
  { stat: '$81B/yr', label: 'Estimated US military spending to protect Persian Gulf oil flows', source: 'RAND Corporation' },
  { stat: '$34M', label: 'Dick Cheney\'s deferred compensation from Halliburton while VP', source: 'Congressional Research Service' },
  { stat: '13.2M', label: 'Barrels per day — US oil production in 2024, world\'s #1 producer', source: 'EIA' },
]

const warOilConnections = [
  { war: 'Iran Coup (1953)', oil: 'British-Iranian Oil Company (now BP) nationalized by Mossadegh. CIA/MI6 overthrew him. Oil access restored.', consequence: 'Installed the Shah → Iranian Revolution (1979) → 45 years of hostility' },
  { war: 'Gulf War (1990-91)', oil: 'Saddam invaded Kuwait — 10% of world oil reserves. OPEC oil supply threatened.', consequence: 'US deployed 700,000 troops in 5 months. Fastest mobilization since WWII. Oil was the explicit reason.' },
  { war: 'Iraq War (2003-11)', oil: 'Iraq has 145B barrels of proven reserves. No-bid contracts went to US/UK firms.', consequence: '$3T cost. 500,000+ dead. ISIS emerged. Iran empowered. Oil firms got access.' },
  { war: 'Libya (2011)', oil: 'Africa\'s largest oil reserves. Gaddafi threatened to price oil in gold dinars.', consequence: 'NATO intervention. Failed state. Slave markets. Oil production collapsed then recovered under chaos.' },
  { war: 'Syria (2011-present)', oil: 'Pipeline routes (Qatar-Turkey vs Iran-Iraq-Syria). US troops guard Syrian oil fields.', consequence: 'Trump admitted: "We\'re keeping the oil." 900 US troops remain near oil fields in 2025.' },
]

const petrodollarTimeline = [
  { year: '1944', event: 'Bretton Woods: Dollar pegged to gold, becomes world reserve currency' },
  { year: '1971', event: 'Nixon ends gold standard — dollar needs a new anchor' },
  { year: '1973', event: 'Arab oil embargo. Oil quadruples in price.' },
  { year: '1974', event: 'Kissinger-Saudi deal: Oil priced exclusively in USD. Saudis buy US Treasury bonds. US provides military protection.' },
  { year: '1979', event: 'Carter Doctrine: US will use military force to protect Persian Gulf oil' },
  { year: '2000', event: 'Saddam switches Iraq oil sales from dollars to euros' },
  { year: '2003', event: 'Iraq invaded. Oil sales switched back to dollars immediately.' },
  { year: '2011', event: 'Gaddafi proposes gold dinar for African oil trade. NATO intervention follows.' },
  { year: '2023', event: 'Saudi Arabia considers accepting yuan for Chinese oil purchases' },
  { year: '2024', event: 'Saudi-US petrodollar agreement (1974) expires. Not renewed.' },
]

const oilCompanyProfits = [
  { company: 'ExxonMobil', warProfits: '$45B (2003-2012)', preWar: 'Excluded from Iraq under sanctions', postWar: 'West Qurna 1 field contract', currentRevenue: '$413B (2023)' },
  { company: 'Chevron', warProfits: '$32B (2003-2015)', preWar: 'No access to Iraqi fields', postWar: 'Multiple field development contracts', currentRevenue: '$200B (2023)' },
  { company: 'BP (British Petroleum)', warProfits: '$58B (2003-2018)', preWar: 'Lost Iraq access 1972', postWar: 'Rumaila field (1.4M bbl/day)', currentRevenue: '$242B (2023)' },
  { company: 'Royal Dutch Shell', warProfits: '$41B (2003-2016)', preWar: 'No Iraq presence', postWar: 'Majnoon field development', currentRevenue: '$315B (2023)' },
  { company: 'Total (France)', warProfits: '$28B (2005-2017)', preWar: 'Limited Iraq access', postWar: 'Halfaya field contract', currentRevenue: '$184B (2023)' },
]

const militaryOilProtection = [
  { region: 'Persian Gulf', forces: '25,000+ troops', facilities: '8 major bases', annualCost: '$81B', oilProtected: '20% of global supply' },
  { region: 'Iraq', forces: '2,500 troops (2024)', facilities: '3 bases', annualCost: '$2.1B', oilProtected: '145B barrel reserves' },
  { region: 'Syria', forces: '900 troops', facilities: '4 bases near oil fields', annualCost: '$1.3B', oilProtected: '2.5B barrel reserves' },
  { region: 'Kuwait', forces: '13,500 troops', facilities: '6 major facilities', annualCost: '$4.2B', oilProtected: '101.5B barrel reserves' },
  { region: 'Saudi Arabia', forces: '3,000+ troops', facilities: '2 air bases', annualCost: '$8.7B', oilProtected: '297.7B barrel reserves' },
]

const oilPriceManipulation = [
  { event: 'Iraq-Kuwait War Threat (1990)', oilPrice: '$21 → $41/barrel', duration: '3 months', trigger: 'Iraqi invasion threat', result: 'US military buildup justified by oil price spike' },
  { event: 'Iraq Invasion (2003)', oilPrice: '$31 → $55/barrel', duration: '6 months', trigger: 'Supply disruption fears', result: '$24/barrel premium funded war preparations' },
  { event: 'Iran Nuclear Crisis (2012)', oilPrice: '$84 → $128/barrel', duration: '8 months', trigger: 'Strait of Hormuz closure threats', result: 'Sanctions and military buildup funded by price spike' },
  { event: 'Libya Intervention (2011)', oilPrice: '$85 → $113/barrel', duration: '4 months', trigger: 'Civil war supply disruptions', result: 'NATO intervention "protected" oil infrastructure' },
  { event: 'Iran Operations (2026)', oilPrice: '$72 → $145/barrel', duration: 'Ongoing', trigger: 'Hormuz closure + supply disruption', result: 'Oil companies profit while taxpayers fund war' },
]

const halliburtonTimeline = [
  { year: '1995-2000', event: 'Dick Cheney CEO of Halliburton', details: 'Expanded international operations, government contracts' },
  { year: '2001', event: 'Cheney becomes VP, gets $34M severance', details: 'Deferred compensation continued through VP term' },
  { year: '2003', event: 'Iraq invasion, Halliburton gets LOGCAP contract', details: '$7B no-bid contract for Iraq reconstruction' },
  { year: '2004', event: 'KBR overcharges exposed', details: '$61M in dining hall overcharges, $200M fuel overcharges' },
  { year: '2005', event: 'Whistleblower lawsuits filed', details: 'Former employees expose systematic fraud' },
  { year: '2006', event: 'Congressional investigations begin', details: 'Waxman Committee documents extensive waste' },
  { year: '2009', event: 'Halliburton pays $559M settlement', details: 'Admits to Foreign Corrupt Practices Act violations' },
  { year: '2024', event: 'Total Iraq contracts: $39.5B', details: 'Largest war contractor in US history' },
]

const energyIndependenceMyth = [
  { year: '2008', production: '5.0M bbl/day', imports: '57% of consumption', narrative: 'US "addicted to foreign oil" justifies Middle East intervention' },
  { year: '2012', production: '6.5M bbl/day', imports: '40% of consumption', narrative: 'Fracking revolution begins, but "energy security" still requires military presence' },
  { year: '2018', production: '10.9M bbl/day', imports: '19% of consumption', narrative: 'US becomes net oil exporter, but Middle East wars continue' },
  { year: '2024', production: '13.2M bbl/day', imports: '8% of consumption', narrative: 'US #1 global producer, but $81B/year still spent "protecting" Persian Gulf oil' },
]

const pipelinePolitics = [
  { pipeline: 'Trans-Afghanistan (TAPI)', route: 'Turkmenistan → Afghanistan → Pakistan → India', status: 'Stalled', usInvolvement: '$2.3T Afghanistan War to secure route', result: 'Taliban controls route, China may fund completion' },
  { pipeline: 'Iraq-Turkey', route: 'Kirkuk → Ceyhan, Turkey', status: 'Operating', usInvolvement: 'Secured by Iraq invasion, $150B spent protecting', result: '400,000 bbl/day to European markets' },
  { pipeline: 'Qatar-Turkey (proposed)', route: 'Qatar → Saudi → Jordan → Syria → Turkey', status: 'Blocked', usInvolvement: 'Syrian intervention partly motivated by pipeline access', result: 'Assad blocked route, supporting Iranian pipeline instead' },
  { pipeline: 'EastMed (Israel-Greece)', route: 'Israel → Cyprus → Greece → Italy', status: 'Under construction', usInvolvement: '$3.8B annual Israel military aid partly protects energy infrastructure', result: 'Reduces European dependence on Russian gas' },
]

const oilExecutiveGovernment = [
  { name: 'Rex Tillerson', company: 'ExxonMobil CEO', position: 'Secretary of State (2017-2018)', stockHoldings: '$180M ExxonMobil stock', conflict: 'Negotiated with countries where Exxon had operations' },
  { name: 'Dick Cheney', company: 'Halliburton CEO', position: 'Vice President (2001-2009)', stockHoldings: '$34M deferred compensation', conflict: 'Halliburton received $39.5B in Iraq contracts' },
  { name: 'Spencer Abraham', company: 'Energy consultant', position: 'Energy Secretary (2001-2005)', stockHoldings: 'Multiple energy investments', conflict: 'Advocated for Iraq invasion while holding energy stocks' },
  { name: 'Ryan Zinke', company: 'Oil/gas consultant', position: 'Interior Secretary (2017-2019)', stockHoldings: 'ConocoPhillips, Halliburton stocks', conflict: 'Opened federal lands for drilling while holding stocks' },
  { name: 'Condoleezza Rice', company: 'Chevron Board (1991-2001)', position: 'National Security Advisor (2001-2005), Secretary of State (2005-2009)', stockHoldings: 'Chevron named oil tanker "SS Condoleezza Rice"', conflict: 'Pushed Iraq invasion while former Chevron exec' },
  { name: 'James Baker III', company: 'Carlyle Group (energy/defense)', position: 'Secretary of State (1989-1992)', stockHoldings: 'Major defense/energy portfolio', conflict: 'Iraq Study Group recommended opening Iraqi oil to US companies' },
  { name: 'George W. Bush', company: 'Arbusto Energy/Harken Energy', position: 'President (2001-2009)', stockHoldings: 'Family oil fortune', conflict: 'Started Iraq War; family connections to Saudi royal family' },
  { name: 'Mike Pompeo', company: 'Thayer Aerospace (defense/energy)', position: 'CIA Director (2017-2018), Secretary of State (2018-2021)', stockHoldings: 'Defense and energy investments', conflict: 'Iran sanctions benefited oil companies while holding energy stocks' },
]

const strategicPetroleumReserve = [
  { year: '1975', action: 'SPR created after Arab oil embargo', amount: 'Planned 1B barrels', cost: '$21B initial investment', purpose: 'Buffer against oil supply disruptions' },
  { year: '2005', action: 'SPR filled to 727M barrels', amount: '727M barrels peak', cost: '$75B total investment', purpose: '60-day supply buffer for US consumption' },
  { year: '2022', action: 'Biden releases 180M barrels during Ukraine war', amount: '180M barrels released', cost: 'Sold at $95/barrel avg', purpose: 'Counter oil price spike from Russia sanctions' },
  { year: '2024', action: 'SPR at 363M barrels (lowest since 1984)', amount: '363M barrels remaining', cost: 'Half depleted', purpose: 'Less than 30-day supply buffer remaining' },
  { year: '2025', action: 'Congress debates refilling vs permanent drawdown', amount: 'Refill cost: $35B+', cost: '$100+/barrel repurchase', purpose: 'Energy independence vs fiscal constraints' },
]

const oilSanctionsWeapons = [
  { target: 'Iran (1979-present)', mechanism: 'Banking sanctions, SWIFT exclusion', oilImpact: '2.5M bbl/day lost exports', effect: 'Drove oil prices up $15-25/barrel during peak sanctions', winner: 'Saudi Arabia, Russia increased market share' },
  { target: 'Iraq (1990-2003)', mechanism: 'UN Oil-for-Food program', oilImpact: '2.0M bbl/day restricted exports', effect: 'Oil prices stayed elevated, Iraq infrastructure decayed', winner: 'Kuwait, Saudi Arabia captured Iraqi market share' },
  { target: 'Libya (2011)', mechanism: 'Asset freezes, export controls', oilImpact: '1.6M bbl/day lost production', effect: 'Oil spiked to $127/barrel in 2012', winner: 'Algeria, Nigeria increased exports to Europe' },
  { target: 'Russia (2022-present)', mechanism: 'Price caps, shipping sanctions', oilImpact: '2.3M bbl/day diverted from Europe', effect: 'Russian oil sells at $20 discount to Brent', winner: 'India, China buy discounted Russian crude' },
  { target: 'Venezuela (2019-present)', mechanism: 'PDVSA sanctions, refining bans', oilImpact: '1.8M bbl/day production collapse', effect: 'Venezuelan heavy crude replaced by Canadian oil sands', winner: 'US refineries import more Canadian crude' },
]

const oilFieldSecuritization = [
  { country: 'Iraq', usProtection: '2,500 troops guard Rumaila, West Qurna fields', annualCost: '$2.1B', beneficiary: 'BP, ExxonMobil, PetroChina', productionSecured: '4.2M bbl/day' },
  { country: 'Syria', usProtection: '900 troops control Al-Omar, Conoco fields', annualCost: '$1.3B', beneficiary: 'Kurdish SDF sells oil, revenue unclear', productionSecured: '0.1M bbl/day' },
  { country: 'Libya', usProtection: 'Naval patrols, drone surveillance', annualCost: '$0.4B', beneficiary: 'ENI (Italy), Total (France), ConocoPhillips', productionSecured: '1.2M bbl/day' },
  { country: 'Saudi Arabia', usProtection: 'Patriot missiles, 3,000 troops, 5th Fleet', annualCost: '$8.7B', beneficiary: 'Aramco (Saudi), Chevron joint ventures', productionSecured: '11M bbl/day' },
  { country: 'Nigeria', usProtection: 'AFRICOM maritime security, training', annualCost: '$1.1B', beneficiary: 'ExxonMobil, Chevron, Shell offshore', productionSecured: '1.8M bbl/day' },
  { country: 'Chad', usProtection: 'French bases supported by US logistics', annualCost: '$0.2B', beneficiary: 'ExxonMobil Chad-Cameroon pipeline', productionSecured: '0.12M bbl/day' },
]

const climateOilWarNexus = [
  { issue: 'Arctic drilling', militaryAngle: 'US Navy Ice Patrol, Coast Guard icebreakers', oilAccess: 'Shell, BP Arctic drilling rights', climateCost: '90B barrels potential Arctic reserves', warRisk: 'Russia, China, US territorial disputes' },
  { issue: 'Melting ice opens shipping', militaryAngle: 'Arctic Command established, new bases', oilAccess: 'Shortened shipping routes reduce transport costs', climateCost: 'Accelerated Arctic warming', warRisk: 'Russia militarizes Arctic, claims Northern Sea Route' },
  { issue: 'Climate refugee displacement', militaryAngle: 'Border militarization, deployment to Africa/Central America', oilAccess: 'Resource scarcity increases value of remaining reserves', climateCost: '1.2B climate migrants by 2050', warRisk: 'Water wars, resource conflicts over remaining arable land' },
  { issue: 'Sea level rise threatens oil infrastructure', militaryAngle: 'Navy bases relocating, port hardening', oilAccess: '$15B coastal refinery flood protection', climateCost: 'Gulf Coast refineries at flood risk', warRisk: 'Resource wars as coastal areas flood' },
]

const realCostOfOilWars = [
  { conflict: 'Persian Gulf Protection (1979-2024)', directCost: '$3.6T', oilCompanyProfits: '$2.8T', taxpayerCost: '$3,600 per barrel protected', actualBenefit: 'US now energy independent, protection unnecessary' },
  { conflict: 'Iraq War (2003-2011)', directCost: '$2.4T', oilCompanyProfits: '$847B', taxpayerCost: '$16.5M per Iraqi oil well', actualBenefit: 'Oil companies got access, taxpayers got debt' },
  { conflict: 'Libya Intervention (2011)', directCost: '$1.1B', oilCompanyProfits: '$78B (2011-2020)', taxpayerCost: '$1.4M per oil facility protected', actualBenefit: 'European oil companies benefited, US paid bills' },
  { conflict: 'Syria Operations (2014-present)', directCost: '$18.7B', oilCompanyProfits: '$12B (oil field revenues)', taxpayerCost: '$20.8M per oil field secured', actualBenefit: 'Trump: "We\'re keeping the oil"' },
  { conflict: 'Afghanistan TAPI Pipeline Security', directCost: '$2.3T total war cost', oilCompanyProfits: '$0 (pipeline never completed)', taxpayerCost: '$3.8B per mile of proposed pipeline', actualBenefit: 'China may now fund pipeline completion' },
  { conflict: 'African oil security (AFRICOM)', directCost: '$45B (2008-2024)', oilCompanyProfits: '$234B West African production', taxpayerCost: '$2.1M per thousand barrels/day secured', actualBenefit: 'US oil companies maintain African market access' },
  { conflict: 'Venezuela intervention preparations', directCost: '$8.7B (sanctions enforcement, military readiness)', oilCompanyProfits: '$0 (sanctions block US access)', taxpayerCost: 'Infinite (spending money to block oil access)', actualBenefit: 'Negative (reduced global oil supply increases prices)' },
]

export default function OilAndWarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Oil & War' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Oil &amp; War
        </h1>
        <p className="text-xl text-stone-300 mb-4">Every Middle East War Is About Oil. They Just Don&apos;t Say It.</p>
        <p className="text-stone-400 text-lg">
          In 1980, President Jimmy Carter declared that any attempt to control the Persian Gulf would be 
          &ldquo;repelled by any means necessary, including military force.&rdquo; It was the most honest 
          statement an American president has ever made about why the US fights in the Middle East. Every 
          war since — the Gulf War, Iraq, Libya, Syria — follows the same pattern: oil is threatened, 
          America intervenes, contractors get rich, and a generation pays the price. The US is now the 
          world&apos;s largest oil producer. It doesn&apos;t need Middle Eastern oil. It keeps fighting 
          for it anyway.
        </p>
      </div>

      <ShareButtons title="Oil & War: Every Middle East War Is About Oil" />

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

      <OilPriceChart />

      {/* Section: Carter Doctrine */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Carter Doctrine: Oil Is Worth Dying For
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          On January 23, 1980, President Jimmy Carter — the peanut farmer from Georgia, the born-again 
          Christian, the human rights advocate — declared that the United States would use <strong>military 
          force</strong> to protect oil supplies in the Persian Gulf. This was not subtext. This was 
          not implied. He said it plainly in his State of the Union address:
        </p>
        <blockquote className="border-l-4 border-red-800 pl-6 my-6 text-stone-600 italic text-lg">
          &ldquo;An attempt by any outside force to gain control of the Persian Gulf region will be 
          regarded as an assault on the vital interests of the United States of America, and such an 
          assault will be repelled by any means necessary, including military force.&rdquo;
        </blockquote>
        <p className="text-stone-700 text-lg mb-4">
          The Carter Doctrine created the Rapid Deployment Joint Task Force, which became US Central 
          Command (CENTCOM) — the military command responsible for every American war in the Middle 
          East since. It was the explicit declaration that oil was worth American lives. Every president 
          since has operated under this doctrine, even as they denied that oil had anything to do with 
          their wars.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The doctrine was triggered by the Soviet invasion of Afghanistan and the Iranian Revolution — 
          both of which threatened the stability of the oil-producing Gulf states. The US responded by 
          building a permanent military infrastructure in the region: bases in Saudi Arabia, Bahrain, 
          Qatar, Kuwait, the UAE, and Oman. The Fifth Fleet, based in Bahrain, patrols the Strait of 
          Hormuz — through which 21% of global oil passes daily.
        </p>
      </section>

      {/* Section: Gulf War */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Gulf War: The Most Honest Oil War
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          When Saddam Hussein invaded Kuwait on August 2, 1990, Secretary of State James Baker was 
          unusually frank about why the US would respond with military force: &ldquo;To bring it down 
          to the American people, it&apos;s <strong>jobs</strong>.&rdquo; He meant oil. Kuwait controlled 
          10% of global oil reserves. Combined with Iraq&apos;s reserves, Saddam would have controlled 
          20% of the world&apos;s oil supply and been positioned to threaten Saudi Arabia — another 17%.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The US deployed 700,000 troops in five months — the fastest military mobilization since World War II. 
          The war lasted 42 days. Kuwait was liberated. Oil flows were restored. The war was sold to the 
          American public with the <Link href="/analysis/lies-that-started-wars" className="text-red-800 hover:underline">Nayirah testimony</Link> — 
          the fabricated story of Iraqi soldiers pulling babies from incubators — but the real motivation was 
          never seriously disguised. This was a war for oil, and everyone knew it.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The Gulf War established the template: oil threatened → massive US military response → quick 
          victory declared → permanent military presence established. After the war, the US maintained 
          bases in Saudi Arabia (which, in turn, became Osama bin Laden&apos;s primary grievance against the 
          US, leading directly to 9/11).
        </p>
      </section>

      {/* Section: Iraq War */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Iraq 2003: The War They Swore Wasn&apos;t About Oil
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          &ldquo;The oil of Iraq belongs to the Iraqi people,&rdquo; President Bush declared. Defense Secretary 
          Rumsfeld called the oil accusation &ldquo;nonsense.&rdquo; The war was about WMDs (which didn&apos;t exist) 
          and democracy (which didn&apos;t materialize). It was definitely, absolutely, not about oil.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          Except that Iraq sits on <strong>145 billion barrels</strong> of proven oil reserves — the fifth largest 
          in the world. Except that before the invasion, Iraqi oil contracts had been awarded to French, 
          Russian, and Chinese firms. After the invasion, those contracts were cancelled and replaced 
          with deals for <strong>ExxonMobil, Chevron, BP, and Shell</strong>. Except that Saddam had 
          switched Iraq&apos;s oil sales from US dollars to euros in 2000 — threatening the petrodollar 
          system — and one of the first acts of the US occupation was switching them back.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          And except that Dick Cheney — the Vice President who was the primary architect of the 
          invasion — had been CEO of <strong>Halliburton</strong> from 1995 to 2000, and Halliburton&apos;s 
          subsidiary KBR received the first <strong>no-bid contract</strong> for Iraq reconstruction, 
          eventually totaling over $39.5 billion. Cheney received $34 million in deferred compensation 
          from Halliburton while serving as Vice President.
        </p>

        <HalliburtonChart />

        <p className="text-stone-700 text-lg mb-4">
          The <strong>Iraq Study Group</strong>, a bipartisan panel led by James Baker (who had been so 
          honest about oil in the Gulf War), recommended in 2006 that the US help Iraq pass a new oil 
          law that would open its reserves to foreign investment. The proposed law — drafted with 
          significant US and UK input — would have given international oil companies unprecedented 
          access to Iraqi reserves through production sharing agreements. Iraqi unions and parliament 
          members opposed it as a giveaway. It never passed, but the pressure revealed the priority.
        </p>
      </section>

      {/* Section: Petrodollar */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Petrodollar: Oil as the Foundation of American Power
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Understanding why the US fights oil wars requires understanding the <strong>petrodollar system</strong>. 
          In 1971, Nixon ended the gold standard, severing the dollar&apos;s link to a physical commodity. 
          The dollar needed a new anchor to maintain its status as the world&apos;s reserve currency. 
          That anchor became oil.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          In 1974, Secretary of State Henry Kissinger struck a deal with Saudi Arabia: the Saudis would 
          price all oil sales exclusively in US dollars and invest their surplus revenue in US Treasury bonds. 
          In exchange, the US would provide military protection to the Saudi regime. Other OPEC nations 
          followed. Virtually overnight, every country on Earth needed US dollars to buy oil — creating 
          permanent global demand for the dollar.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          This system gives the United States an extraordinary privilege: it can print money to fund 
          deficits because the world needs dollars. It can impose financial sanctions because the global 
          financial system runs on dollars. It can borrow at artificially low rates because foreign 
          governments hold trillions in dollar reserves. The petrodollar system is the invisible foundation 
          of American economic power — and it is maintained by military force.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Petrodollar Timeline</h3>
          <div className="space-y-3">
            {petrodollarTimeline.map((item) => (
              <div key={item.year} className="flex gap-4">
                <span className="text-red-800 font-bold whitespace-nowrap">{item.year}</span>
                <span className="text-stone-700">{item.event}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          Notice the pattern: <strong>every leader who threatened to price oil in a currency other than 
          the dollar was removed by force</strong>. Saddam switched to euros in 2000 — invaded in 2003. 
          Gaddafi proposed a gold dinar for African oil — NATO bombed Libya in 2011. Iran opened an 
          oil bourse trading in euros and yuan — sanctioned and threatened with military action. This 
          is not a conspiracy theory. It is the documented intersection of monetary policy and military policy.
        </p>
      </section>

      {/* Section: Pipeline Politics */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Pipeline Politics: Syria, Afghanistan &amp; the Wars They Don&apos;t Explain
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Syria:</strong> The civil war that began in 2011 is often explained through the lens 
          of Arab Spring protests and Assad&apos;s brutality. Less discussed is the pipeline competition: 
          Qatar proposed a natural gas pipeline through Saudi Arabia, Jordan, Syria, and Turkey to Europe — 
          which would have broken Russia&apos;s energy stranglehold on Europe. Assad refused the pipeline, 
          preferring an alternative route from Iran through Iraq and Syria. The states backing the 
          &ldquo;rebels&rdquo; (Qatar, Saudi Arabia, Turkey, US) aligned perfectly with the states that 
          wanted the Qatar pipeline. The states backing Assad (Russia, Iran) aligned with the alternative route.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Afghanistan:</strong> In the 1990s, the US negotiated with the Taliban for a natural 
          gas pipeline from Turkmenistan through Afghanistan to Pakistan and India (TAPI). Unocal, a 
          US energy company, lobbied aggressively. A Taliban delegation visited Houston in 1997. 
          Negotiations collapsed. After the 2001 invasion and installation of a US-friendly government, 
          the TAPI pipeline agreement was signed in 2010. Construction began in 2018. The Taliban retook 
          Afghanistan in 2021. The pipeline&apos;s future is uncertain.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Trump said the quiet part out loud</strong> in 2019 when he deployed troops to guard 
          Syrian oil fields: &ldquo;We&apos;re keeping the oil. We have the oil. The oil is secure. We 
          left troops behind only for the oil.&rdquo; As of 2025, approximately 900 US troops remain in 
          northeastern Syria — guarding oil fields that produce about 100,000 barrels per day. The oil 
          is sold by Kurdish-led forces, with revenue ostensibly going to the Syrian Democratic Forces. 
          The legality under international law is questionable at best.
        </p>
      </section>

      {/* War-Oil Connection Table */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Every War, Every Time: The Oil Connection
        </h2>
        <div className="space-y-6">
          {warOilConnections.map((item) => (
            <div key={item.war} className="bg-stone-100 rounded-lg p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-900 mb-2">{item.war}</h3>
              <p className="text-stone-700 mb-2"><strong>The oil angle:</strong> {item.oil}</p>
              <p className="text-stone-600 text-sm"><strong>The consequence:</strong> {item.consequence}</p>
            </div>
          ))}
        </div>
      </section>

      <MilitaryOilSpendingChart />

      {/* Section: Energy Independence Paradox */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Paradox: Energy Independence, Endless War
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Here is the most damning fact of all: <strong>the United States no longer needs Middle Eastern 
          oil</strong>. Thanks to the fracking revolution, US oil production has more than doubled since 
          2010. In 2018, the US surpassed both Saudi Arabia and Russia to become the world&apos;s 
          largest oil producer at over 13 million barrels per day. The US is now a net energy exporter.
        </p>

        <USProductionChart />

        <p className="text-stone-700 text-lg mb-4">
          Yet the military infrastructure built to protect oil remains fully operational. The Fifth Fleet 
          patrols the Strait of Hormuz. CENTCOM operates from bases across the Gulf. 900 troops guard 
          Syrian oil fields. The Carter Doctrine — written when the US imported 40% of its oil from the 
          Middle East — still governs US military posture in a world where the US imports almost none.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The reason is that the war infrastructure has become self-sustaining. Defense contractors who 
          built their businesses on Middle East deployments have no incentive to leave. The petrodollar 
          system still requires Gulf state cooperation. Saudi Arabia remains the linchpin — and the US 
          continues to sell it <Link href="/analysis/war-profiteering" className="text-red-800 hover:underline">hundreds of billions in weapons</Link> to 
          maintain the relationship. The original purpose (oil security) has been achieved by other means 
          (fracking). The military apparatus remains because it serves other interests: weapons sales, 
          strategic positioning against China, and the sheer momentum of an empire that doesn&apos;t know 
          how to stop.
        </p>
      </section>

      {/* Section: Strategic Petroleum Reserve */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Strategic Petroleum Reserve: Insurance Policy or Political Tool?
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Created in 1975 after the Arab oil embargo, the Strategic Petroleum Reserve (SPR) was designed 
          to provide a 90-day buffer against oil supply disruptions. At its peak in 2005, the SPR held 
          727 million barrels stored in underground salt caverns along the Gulf Coast. It was the 
          world's largest emergency oil stockpile — and it has been systematically depleted to 
          manipulate oil prices for political gain.
        </p>
        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">SPR Timeline: From Strategic Asset to Political Piggy Bank</h3>
          <div className="space-y-3">
            {strategicPetroleumReserve.map((item) => (
              <div key={item.year} className="border-l-2 border-red-200 pl-4">
                <span className="text-red-800 font-bold">{item.year}:</span>
                <span className="text-stone-700 font-medium"> {item.action}</span>
                <div className="text-stone-600 text-sm mt-1">
                  <span className="font-medium">Amount:</span> {item.amount} | 
                  <span className="font-medium"> Cost:</span> {item.cost} | 
                  <span className="font-medium"> Purpose:</span> {item.purpose}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-stone-700 text-lg mb-4">
          The Biden administration's 2022 release of 180 million barrels — ostensibly to counter oil 
          price spikes from the Ukraine war — had an obvious political benefit: lowering gasoline prices 
          before the midterm elections. The oil was sold at an average of $95 per barrel and will need 
          to be repurchased at current prices above $80 per barrel, costing taxpayers billions while 
          leaving America's energy security reserves at their lowest level since 1984.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>The SPR has become a mechanism for transferring wealth from taxpayers to oil companies.</strong> 
          When prices are high (due to wars or sanctions the US government created), officials release 
          oil to lower prices for consumers. When prices normalize, taxpayers buy oil back at higher 
          prices to refill the reserve. The delta between sale and repurchase prices represents a 
          direct subsidy to oil markets funded by taxpayers.
        </p>
      </section>

      {/* Section: Oil as Sanctions Weapon */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Oil Sanctions: Economic Warfare by Other Means
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The US uses oil sanctions as a weapon of war without firing a shot. By controlling global 
          financial systems and threatening secondary sanctions, the US can effectively remove millions 
          of barrels per day from global markets. This drives up oil prices, hurts targeted countries, 
          but also benefits US oil companies and allied producers who capture market share.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Oil Sanctions: Who Pays, Who Benefits</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-red-200">
                  <th className="text-left py-2">Target Country</th>
                  <th className="text-left py-2">Mechanism</th>
                  <th className="text-left py-2">Oil Impact</th>
                  <th className="text-left py-2">Price Effect</th>
                  <th className="text-left py-2">Who Benefits</th>
                </tr>
              </thead>
              <tbody>
                {oilSanctionsWeapons.map((item) => (
                  <tr key={item.target} className="border-b border-red-100">
                    <td className="py-3 font-medium text-red-800">{item.target}</td>
                    <td className="py-3 text-stone-600">{item.mechanism}</td>
                    <td className="py-3 text-stone-700">{item.oilImpact}</td>
                    <td className="py-3 text-stone-700">{item.effect}</td>
                    <td className="py-3 text-stone-600">{item.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Iran sanctions demonstrate the pattern perfectly:</strong> The US imposed comprehensive 
          sanctions on Iran's oil sector in 2012, removing 2.5 million barrels per day from global 
          markets. Oil prices rose from $85 to $128 per barrel, costing American consumers an estimated 
          $0.25 per gallon at the pump. Meanwhile, Saudi Arabia increased production to capture Iran's 
          lost market share, earning an estimated $47 billion in additional revenue from higher prices 
          and volumes.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The US Treasury's Office of Foreign Assets Control (OFAC) maintains a list of over 1,000 
          individuals and entities subject to oil and energy sanctions. Compliance costs for global 
          energy companies exceed $10 billion annually — costs passed directly to consumers. The 
          sanctions regime has created a parallel financial system where energy transactions must 
          be cleared through US-controlled mechanisms, giving America veto power over global energy flows.
        </p>
      </section>

      {/* Section: Oil Field Securitization */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Securitizing Oil Fields: The Military-Petroleum Complex
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          American military forces don't just fight for oil — they provide ongoing security for oil 
          infrastructure around the world. This "securitization" of energy assets represents a massive 
          subsidy to oil companies, paid for by taxpayers and enforced by soldiers.
        </p>
        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">US Military Protection of Global Oil Assets</h3>
          <div className="space-y-4">
            {oilFieldSecuritization.map((item) => (
              <div key={item.country} className="bg-white border border-stone-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-red-800">{item.country}</h4>
                  <span className="text-stone-600 text-sm">{item.productionSecured}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-stone-700">Protection:</span>
                    <p className="text-stone-600">{item.usProtection}</p>
                  </div>
                  <div>
                    <span className="font-medium text-stone-700">Annual Cost:</span>
                    <p className="text-stone-600">{item.annualCost}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="font-medium text-stone-700 text-sm">Primary Beneficiary:</span>
                  <p className="text-stone-600 text-sm">{item.beneficiary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-stone-700 text-lg mb-4">
          <strong>The numbers are staggering:</strong> The US spends approximately $14.1 billion annually 
          protecting oil infrastructure that generates revenues of over $2 trillion per year for oil 
          companies. This represents a 700:1 return on military investment — but the profits flow to 
          private companies while taxpayers pay the security costs.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Syria provides the most blatant example:</strong> US troops control oil fields in 
          northeastern Syria, openly selling the oil and transferring revenues to Kurdish-led forces. 
          Under international law, this constitutes theft of sovereign resources. Trump was unusually 
          honest about it: "We're keeping the oil. We have the oil. The oil is secure. We left troops 
          behind only for the oil." As of 2025, this operation continues under Biden.
        </p>
      </section>

      {/* Section: Climate Change and Oil Wars */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Climate Change: The Next Phase of Oil Wars
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Climate change is not ending oil wars — it's transforming them. As traditional reserves become 
          harder to access, the military is being used to secure new sources (Arctic drilling) and 
          protect existing infrastructure (coastal refineries) from climate impacts. Meanwhile, climate 
          migration and resource scarcity are creating new conflicts over remaining fossil fuel reserves.
        </p>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-red-400">Climate-Oil-War Nexus</h3>
          <div className="space-y-4">
            {climateOilWarNexus.map((item) => (
              <div key={item.issue} className="border-l-4 border-red-600 pl-4">
                <h4 className="font-bold text-white mb-1">{item.issue}</h4>
                <div className="text-stone-300 text-sm space-y-1">
                  <p><span className="text-red-400">Military angle:</span> {item.militaryAngle}</p>
                  <p><span className="text-red-400">Oil access:</span> {item.oilAccess}</p>
                  <p><span className="text-red-400">Climate cost:</span> {item.climateCost}</p>
                  <p><span className="text-red-400">War risk:</span> {item.warRisk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-stone-700 text-lg mb-4">
          <strong>The Arctic represents the next great oil war theater.</strong> As Arctic ice melts, 
          an estimated 90 billion barrels of oil become accessible. The US Navy has established Arctic 
          Command, Russia has militarized its Arctic territories, and China declares itself a "near-Arctic state" 
          with interests in the region. All three nations are positioning for potential conflict over 
          resources that, if burned, would guarantee catastrophic climate change.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The Pentagon's own climate assessments project that by 2050, climate migration could displace 
          1.2 billion people, creating resource conflicts and "water wars" that will require military 
          intervention. The Department of Defense is simultaneously planning to secure fossil fuel 
          infrastructure against climate impacts while preparing to fight wars caused by climate change 
          — a perfect example of the military-industrial complex creating problems it then profits from solving.
        </p>
      </section>

      {/* Section: Who Benefits */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Follow the Money: Who Benefits from Oil Wars
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The beneficiaries of oil wars are remarkably consistent:
        </p>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-6">
          <div className="space-y-4">
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Oil companies:</strong> ExxonMobil&apos;s revenue rose from $213B (2002) to $394B (2008) during the Iraq War. Shell, BP, and Chevron all hit record profits during peak conflict years.</span>
            </div>
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Defense contractors:</strong> Halliburton stock price went from $10 (2003) to $51 (2008). Lockheed Martin, Raytheon, and Boeing all saw record revenues during Iraq and Afghanistan.</span>
            </div>
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">The revolving door:</strong> Dick Cheney (Halliburton CEO → VP). Condoleezza Rice (Chevron board → National Security Advisor — they named an oil tanker after her). Rex Tillerson (ExxonMobil CEO → Secretary of State).</span>
            </div>
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Gulf monarchies:</strong> Saudi Arabia, UAE, Qatar, and Kuwait maintain their power through US military protection. In exchange, they buy US weapons, price oil in dollars, and invest in US bonds.</span>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Revolving Door: Oil Executives in Government</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Oil Company</th>
                  <th className="text-left py-2">Government Position</th>
                  <th className="text-left py-2">Financial Interest</th>
                  <th className="text-left py-2">Conflict</th>
                </tr>
              </thead>
              <tbody>
                {oilExecutiveGovernment.map((person) => (
                  <tr key={person.name} className="border-b border-stone-100">
                    <td className="py-3 font-medium text-red-800">{person.name}</td>
                    <td className="py-3 text-stone-700">{person.company}</td>
                    <td className="py-3 text-stone-700">{person.position}</td>
                    <td className="py-3 text-stone-600 text-xs">{person.stockHoldings}</td>
                    <td className="py-3 text-stone-600 text-xs">{person.conflict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-600 text-xs mt-4">
            <strong>Pattern:</strong> Each person advocated for policies that directly benefited their 
            former (or future) employers while holding government positions responsible for those same policy areas.
          </p>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          The losers are equally consistent: the 500,000+ dead in Iraq. The millions of refugees. The 
          veterans with PTSD and traumatic brain injuries. The American taxpayers who funded $3 trillion 
          for Iraq and $8 trillion for the War on Terror. The people who live on top of the oil that 
          other people decided to fight for.
        </p>
      </section>

      {/* Bottom Line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-400">The Bottom Line</h2>
        <p className="text-stone-300 text-lg mb-4">
          The pattern is clear. When a country threatens oil supplies or the petrodollar system, the 
          United States intervenes militarily. When it doesn&apos;t threaten oil — Rwanda, Myanmar, 
          Darfur — the US watches. Oil doesn&apos;t explain every foreign policy decision, but it 
          explains the ones that involve aircraft carriers, ground invasions, and regime change.
        </p>
        <p className="text-stone-300 text-lg">
          The US is now energy independent. It produces more oil than it consumes. The original strategic 
          rationale for Middle East wars no longer exists. The wars continue anyway — because the 
          infrastructure of empire, once built, serves the interests of those who profit from it, not 
          the people who pay for it.
        </p>
      </div>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li><strong>Government Sources:</strong></li>
          <li>• US Energy Information Administration (EIA), Annual Energy Review &amp; Petroleum Supply Monthly</li>
          <li>• US Department of Energy, Strategic Petroleum Reserve Quarterly Reports</li>
          <li>• Special Inspector General for Iraq Reconstruction (SIGIR), Final Report &amp; Quarterly Reports</li>
          <li>• Congressional Research Service, "Halliburton/KBR Iraq Contracts" &amp; "Strategic Petroleum Reserve"</li>
          <li>• US Treasury Office of Foreign Assets Control (OFAC), Sanctions Reports</li>
          <li>• Government Accountability Office (GAO), "Military Operations: DOD's Reported Cost of Operations"</li>
          <li>• Defense Contract Audit Agency, "Questioned and Unsupported Costs" Reports</li>
          <li>• US Central Command (CENTCOM), Contractor Census Reports</li>
          <li>• Iraq Study Group Report, James A. Baker III Institute, 2006</li>
          <li>• Carter, Jimmy. State of the Union Address, January 23, 1980 (Carter Doctrine)</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Academic &amp; Research Institutions:</strong></li>
          <li>• Brown University Watson Institute, Costs of War Project</li>
          <li>• RAND Corporation, "Imported Oil and U.S. National Security" &amp; "Persian Gulf Security"</li>
          <li>• Brookings Institution, "Energy Security and Climate Change" Reports</li>
          <li>• Council on Foreign Relations, "The Economics of Energy Security"</li>
          <li>• Carnegie Endowment, "Energy Security in the Persian Gulf"</li>
          <li>• Center for Strategic and International Studies (CSIS), Energy &amp; National Security Program</li>
          <li>• Harvard Kennedy School Belfer Center, "Oil Security Metrics Model"</li>
          <li>• MIT Center for Energy and Environmental Policy Research</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Industry &amp; International Sources:</strong></li>
          <li>• BP Statistical Review of World Energy, 2024 &amp; Historical Data</li>
          <li>• International Energy Agency (IEA), World Energy Outlook &amp; Oil Market Reports</li>
          <li>• Organization of Petroleum Exporting Countries (OPEC), Annual Statistical Bulletin</li>
          <li>• ExxonMobil, Chevron, Shell, BP - Annual Reports (2003-2024)</li>
          <li>• Halliburton/KBR SEC Filings and Annual Reports</li>
          <li>• Wood Mackenzie, "Global Oil and Gas Research"</li>
          <li>• Platts Oil Price Information Service</li>
          <li>• Oxford Institute for Energy Studies</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Books &amp; Historical Sources:</strong></li>
          <li>• Yergin, Daniel. "The Prize: The Epic Quest for Oil, Money &amp; Power" (1991)</li>
          <li>• Yergin, Daniel. "The Quest: Energy, Security, and the Remaking of the Modern World" (2011)</li>
          <li>• Klare, Michael T. "Blood and Oil: The Dangers and Consequences of America's Growing Petroleum Dependency" (2004)</li>
          <li>• Bacevich, Andrew. "America's War for the Greater Middle East" (2016)</li>
          <li>• Engdahl, F. William. "A Century of War: Anglo-American Oil Politics and the New World Order" (1992)</li>
          <li>• Maugeri, Leonardo. "The Age of Oil: The Mythology, History, and Future of the World's Most Controversial Resource" (2006)</li>
          <li>• Mitchell, Timothy. "Carbon Democracy: Political Power in the Age of Oil" (2011)</li>
          <li>• Le Billon, Philippe. "Wars of Plunder: Conflicts, Profits and the Politics of Resources" (2012)</li>
        </ul>
        <ul className="space-y-2 text-stone-600 text-sm mt-4">
          <li><strong>Financial &amp; Corporate Data:</strong></li>
          <li>• Securities and Exchange Commission (SEC) 10-K Forms for major oil companies</li>
          <li>• Federal Procurement Data System (FPDS.gov), Defense Contract Awards</li>
          <li>• Center for Responsive Politics (OpenSecrets.org), Oil &amp; Gas Political Contributions</li>
          <li>• Bloomberg Terminal, Oil Price &amp; Company Financial Data</li>
          <li>• Thomson Reuters, Energy Markets Analysis</li>
          <li>• Fortune 500 Corporate Revenue Data</li>
        </ul>
      </section>

      {/* Related */}
      <div className="bg-stone-100 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/war-profiteering" className="text-red-800 hover:text-red-600 font-medium">
            → War Is a Racket: Who Gets Rich
          </Link>
          <Link href="/analysis/lies-that-started-wars" className="text-red-800 hover:text-red-600 font-medium">
            → Lies That Started Wars
          </Link>
          <Link href="/analysis/private-military" className="text-red-800 hover:text-red-600 font-medium">
            → Private Military Contractors
          </Link>
          <Link href="/analysis/what-could-we-buy" className="text-red-800 hover:text-red-600 font-medium">
            → What $11.6 Trillion Could Have Bought
          </Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
