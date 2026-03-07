import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'

export const metadata: Metadata = {
  title: 'What $11.6 Trillion Could Have Bought Instead of War',
  description: 'America has spent $11.6 trillion on war. That could have paid for universal healthcare for 20 years, free college for 100 years, or clean water for every person on Earth for 400 years.',
  openGraph: {
    title: 'What $11.6 Trillion Could Have Bought Instead of War',
    description: '$11.6T on war. Or: 20 years of universal healthcare. 100 years of free college. 400 years of clean water for Earth.',
    url: 'https://www.warcosts.org/analysis/what-could-we-buy',
  },
}

const alternatives = [
  { item: 'Universal Healthcare', annualCost: '$600B/year (net new spending)', yearsAffordable: '~20 years', icon: '🏥', details: 'Cover every uninsured American. Eliminate medical debt ($220B). Fund Medicare expansion. The US already spends $4.5T/year on healthcare — $11.6T in war spending could have closed the coverage gap for two decades.' },
  { item: 'Free Public College for All', annualCost: '$80B/year', yearsAffordable: '~145 years', icon: '🎓', details: 'Every public university and community college: free tuition for every American student. For 145 years. Total student loan debt is $1.77T — we could have eliminated it 6.5x over.' },
  { item: 'Renewable Energy Transition', totalCost: '$2T (estimated full US transition)', timesAffordable: '5.8x over', icon: '⚡', details: 'Complete transition to renewable energy for the entire US grid — solar, wind, battery storage, grid modernization. We could have done it nearly 6 times. Energy independence. No more wars for oil. No more climate crisis.' },
  { item: 'Clean Water for Every Person on Earth', annualCost: '$28.4B/year (UN estimate)', yearsAffordable: '~408 years', icon: '💧', details: 'The UN estimates it would cost $114B to provide clean water and sanitation to every person on Earth. We spent 101x that amount on war.' },
  { item: 'Eliminate Global Child Poverty', annualCost: '$60B/year (World Bank)', yearsAffordable: '~193 years', icon: '👶', details: 'End extreme poverty for every child on the planet for nearly 200 years. 356 million children live in extreme poverty. $11.6T could have transformed their lives for generations.' },
  { item: 'Rebuild All US Infrastructure', totalCost: '$4.6T (ASCE infrastructure gap)', timesAffordable: '2.5x over', icon: '🌉', details: 'Fix every crumbling bridge, road, dam, water system, school, and power grid in America. The ASCE gives US infrastructure a C- grade. We could have fixed it all and had $7 trillion left over.' },
  { item: 'End Homelessness in America', annualCost: '$20B/year (HUD estimate)', yearsAffordable: '~580 years', icon: '🏠', details: 'House every homeless person in America for 580 years. There are 650,000+ homeless Americans on any given night. The cost of one Tomahawk missile ($2M) could house 100 people for a year.' },
  { item: 'Fund NASA at 10x Current Budget', annualCost: '$250B/year (10x current)', yearsAffordable: '~46 years', icon: '🚀', details: 'Mars colony. Moon base. Asteroid mining. Space telescope fleet. Nearly half a century of a space program 10x larger than today\'s.' },
  { item: 'Eliminate All US Hunger & Food Insecurity', annualCost: '$25B/year (Feeding America estimate)', yearsAffordable: '~464 years', icon: '🍞', details: '38 million Americans face food insecurity, including 12 million children. The entire SNAP program costs $127B/year — we could have funded it for 91 years with war money alone.' },
  { item: 'Fix Every Public School in America', totalCost: '$380B (American Federation of Teachers)', timesAffordable: '30.5x over', icon: '🏫', details: 'Repair and upgrade every K-12 school building in America. New HVAC, technology, science labs, libraries. Do it 30 times over, or maintain perfect schools for centuries.' },
  { item: 'Provide High-Speed Internet to Rural America', totalCost: '$80B (FCC estimate)', timesAffordable: '145x over', icon: '🌐', details: '21 million Americans lack broadband access. The digital divide is economic warfare against rural communities. We could have connected everyone 145 times over.' },
  { item: 'Fund Teacher Salaries for 50 Years', annualCost: '$230B/year (to bring all teachers to $70K average)', yearsAffordable: '~50 years', icon: '👩‍🏫', details: 'Raise every public school teacher in America to a professional salary of $70,000. For half a century. Teaching shortage solved permanently.' },
  { item: 'Cure Cancer (Global Research Fund)', totalCost: '$500B (oncologist estimates for comprehensive cure research)', timesAffordable: '23.2x over', icon: '🔬', details: 'Fund cancer research at 10x current levels until cures are found. Cancer kills 10 million people globally per year. We could have solved it decades ago.' },
  { item: 'Build 23 Million Housing Units', unitCost: '$500K average per home', totalUnits: '23.2M homes', icon: '🏘️', details: 'Address the entire US housing shortage. 23.2 million new homes at $500K each. Every American family could be housed affordably.' },
  { item: 'Give Every American $35,000 Cash', totalCost: '$11.6T ÷ 331M Americans', perPerson: '$35,048', icon: '💵', details: 'Literally hand every man, woman, and child in America $35,000 cash. That\'s how much we spent killing people abroad instead of helping people at home.' },
]

const detailedBreakdowns = [
  {
    category: 'Healthcare',
    items: [
      { item: 'Medicare for All (10-year cost)', cost: '$34T', warEquivalent: '$11.6T = 34% of M4A', notes: 'Sanders/Warren estimates. War money covers 1/3 of universal healthcare for a decade.' },
      { item: 'Eliminate medical bankruptcy', cost: '$200B/year', warEquivalent: '58 years funded', notes: '530,000 Americans file for bankruptcy due to medical bills annually' },
      { item: 'Mental health treatment for all veterans', cost: '$15B/year', warEquivalent: '773 years funded', notes: '22 veterans commit suicide daily. Treatment underfunded while wars create more trauma.' },
      { item: 'Cure diabetes research (intensive)', cost: '$100B', warEquivalent: '116x over', notes: '37.3 million Americans have diabetes. Annual treatment costs: $327B' },
      { item: 'Free insulin for all diabetics (lifetime)', cost: '$50B', warEquivalent: '232x over', notes: 'Insulin costs $6 to produce, sells for $300. Corporate price-gouging kills Americans daily.' },
    ]
  },
  {
    category: 'Education',
    items: [
      { item: 'Eliminate all student loan debt', cost: '$1.77T', warEquivalent: '6.6x over', notes: '45 million borrowers trapped in debt slavery. Average debt: $37,000 per graduate' },
      { item: 'Free community college for 50 years', cost: '$80B/year x 50', warEquivalent: 'Exactly funded', notes: 'Biden\'s plan: $80B/year. We could have funded it for half a century.' },
      { item: 'Rebuild every rural school', cost: '$200B', warEquivalent: '58x over', notes: 'Rural schools are America\'s most underfunded. Close achievement gaps permanently.' },
      { item: 'Free pre-K for every child (25 years)', cost: '$200B/year x 25', warEquivalent: 'Exactly funded', notes: 'Universal pre-K would transform generational poverty. We chose bombs over babies.' },
      { item: 'Fund vocational training programs', cost: '$50B/year x 40 years', warEquivalent: 'Exactly funded', notes: 'Skills training for non-college careers. Rebuild the working class.' },
    ]
  },
  {
    category: 'Infrastructure', 
    items: [
      { item: 'Fix all US bridges (structurally deficient)', cost: '$125B', warEquivalent: '92.8x over', notes: '45,000 bridges rated structurally deficient. People die when bridges collapse.' },
      { item: 'Replace all lead water pipes', cost: '$60B', warEquivalent: '193x over', notes: '10 million homes have lead service lines. Poisoning our own children.' },
      { item: 'Modernize the electrical grid', cost: '$2T', warEquivalent: '5.8x over', notes: 'Grid failures cause blackouts, economic losses. Texas froze while we bombed deserts.' },
      { item: 'Build high-speed rail network', cost: '$1T', warEquivalent: '11.6x over', notes: 'America has no high-speed rail. China built 25,000 miles while we built bombs.' },
      { item: 'Repair all US dams', cost: '$70B', warEquivalent: '165x over', notes: 'Over 2,000 dams rated "high hazard." Dam failures kill communities downstream.' },
    ]
  },
  {
    category: 'Environmental',
    items: [
      { item: 'Install solar panels on every US home', cost: '$1.4T', warEquivalent: '8.3x over', notes: '130 million housing units x $10,800 average system. Energy independence forever.' },
      { item: 'Clean up every Superfund site', cost: '$400B', warEquivalent: '29x over', notes: '1,340 toxic waste sites poisoning communities. EPA underfunded for decades.' },
      { item: 'Restore all US wetlands', cost: '$80B', warEquivalent: '145x over', notes: 'Wetlands prevent flooding, purify water, store carbon. We destroyed them for development.' },
      { item: 'Plant 50 billion trees (climate action)', cost: '$50B', warEquivalent: '232x over', notes: 'Massive reforestation project. Combat climate change naturally.' },
      { item: 'Convert all school buses to electric', cost: '$50B', warEquivalent: '232x over', notes: '480,000 school buses run on diesel. Kids breathe toxic fumes daily.' },
    ]
  }
]

const historicalComparisons = [
  { program: 'Manhattan Project (1939-1946)', inflationAdjusted: '$28B', warPercentage: '0.24%', impact: 'Developed nuclear weapons. Changed history. Took 0.24% of our total war spending.' },
  { program: 'Apollo Program (1961-1975)', inflationAdjusted: '$257B', warPercentage: '2.2%', impact: 'Put humans on the moon. Inspired a generation. Took 2.2% of our war spending.' },
  { program: 'Interstate Highway System (1956-1992)', inflationAdjusted: '$600B', warPercentage: '5.2%', impact: 'Connected America. Enabled economic growth. Took 5.2% of our war spending.' },
  { program: 'Social Security (first 85 years, 1935-2020)', inflationAdjusted: '$25T', warPercentage: '215%', impact: 'Eliminated elderly poverty. We spent half as much on war as we did caring for seniors.' },
  { program: 'GI Bill (1944-present)', inflationAdjusted: '$1.5T', warPercentage: '12.9%', impact: 'Educated returning veterans. Created middle class. Took 13% of war spending.' },
  { program: 'Marshall Plan (1948-1951)', inflationAdjusted: '$150B', warPercentage: '1.3%', impact: 'Rebuilt Europe after WWII. Created lasting allies. Took 1.3% of war spending.' },
  { program: 'Civil Rights Act enforcement (1965-2025)', inflationAdjusted: '$200B', warPercentage: '1.7%', impact: 'Enforced racial equality. We spent 1.7% of war money on civil rights.' },
]

const perHousehold = [
  { war: 'Post-9/11 Wars (2001–2026)', totalCost: '$8T+', households: '131M', perHousehold: '$61,000+', notes: 'Brown University Costs of War Project. Includes direct spending, veteran care, and interest.' },
  { war: 'All US Wars (cumulative)', totalCost: '$11.6T', households: '131M', perHousehold: '$88,500+', notes: 'Total inflation-adjusted cost of all American wars from Revolution to Iran.' },
  { war: 'Iran (projected, 10-year)', totalCost: '$3-5T', households: '131M', perHousehold: '$23,000-38,000', notes: 'Conservative estimate if conflict extends to occupation. Every family pays.' },
]

const warVsDomestic = [
  { warItem: '1 Tomahawk missile', warCost: '$2,000,000', domesticItem: '1 teacher\'s salary for 30 years', domesticCost: '$2,000,000', ratio: '1 missile = 30 years of education' },
  { warItem: '1 F-35 fighter jet', warCost: '$80,000,000', domesticItem: '1,600 four-year college scholarships', domesticCost: '$80,000,000', ratio: '1 jet = 1,600 educated Americans' },
  { warItem: '1 day of 3 carrier groups', warCost: '$19,500,000', domesticItem: 'Clean water for 686,000 people for a year', domesticCost: '$19,500,000', ratio: '1 day of naval power = a year of water' },
  { warItem: '1 B-2 bomber', warCost: '$2,100,000,000', domesticItem: 'Flint, MI water crisis fix (14x over)', domesticCost: '$150,000,000', ratio: '1 bomber = fix Flint 14 times' },
  { warItem: 'Iraq War (total)', warCost: '$2,400,000,000,000', domesticItem: 'US infrastructure gap (ASCE)', domesticCost: '$4,600,000,000,000', ratio: 'Iraq + Afghanistan ≈ fix all US infrastructure' },
  { warItem: 'Afghanistan War (total)', warCost: '$2,300,000,000,000', domesticItem: 'Eliminate all student loan debt', domesticCost: '$1,770,000,000,000', ratio: 'Afghanistan alone could have freed every student' },
  { warItem: 'Post-9/11 wars (total)', warCost: '$8,000,000,000,000', domesticItem: 'Universal healthcare for 13 years', domesticCost: '$8,000,000,000,000', ratio: 'War on Terror = healthcare for a generation' },
]

const denmarkComparison = [
  { metric: 'Defense spending', us: '$886B/year (3.4% of GDP)', denmark: '$8.5B/year (1.4% of GDP)', notes: 'US spends 104x more than Denmark' },
  { metric: 'Healthcare', us: 'No universal coverage. 27M uninsured. Medical bankruptcy is leading cause of bankruptcy.', denmark: 'Universal coverage. Free at point of service. Zero medical bankruptcies.', notes: 'Denmark spends less per capita on healthcare AND covers everyone' },
  { metric: 'Education', us: '$1.77T in student debt. Average graduate owes $37K.', denmark: 'Free university tuition. Students receive $1,000/month stipend to study.', notes: 'Danish students get PAID to learn. American students go into debt.' },
  { metric: 'Happiness ranking', us: '#23 (World Happiness Report 2025)', denmark: '#2', notes: 'Denmark is consistently among the happiest countries on Earth' },
  { metric: 'Life expectancy', us: '77.5 years', denmark: '81.5 years', notes: 'Danes live 4 years longer despite spending a fraction on defense' },
  { metric: 'Child poverty rate', us: '16.9%', denmark: '3.7%', notes: 'US child poverty rate is 4.6x Denmark\'s' },
  { metric: 'Incarceration rate', us: '531 per 100K (highest in the world)', denmark: '72 per 100K', notes: 'US locks up 7.4x more people per capita' },
  { metric: 'Homicide rate', us: '6.3 per 100K (2021)', denmark: '0.8 per 100K', notes: 'Americans are 7.9x more likely to be murdered' },
  { metric: 'Suicide rate', us: '14.2 per 100K (2021)', denmark: '11.8 per 100K', notes: 'Despite military "strength," Americans kill themselves more often' },
  { metric: 'Income inequality (Gini)', us: '0.434 (high inequality)', denmark: '0.281 (low inequality)', notes: 'War spending concentrates wealth. Denmark distributes it.' },
  { metric: 'Social mobility', us: 'Rank #27 globally', denmark: 'Rank #2 globally', notes: 'Danish children escape poverty. American children inherit it.' },
  { metric: 'Infrastructure grade', us: 'C- (ASCE)', denmark: 'A- (World Economic Forum)', notes: 'Denmark maintains infrastructure. America lets it crumble.' },
]

const globalPeaceComparisons = [
  { country: '🇨🇭 Switzerland', defense: '$5.8B (0.7% GDP)', healthcare: 'Universal', education: 'Free/low-cost', happiness: '#8', notes: 'Armed neutrality. High defense capability, low offense spending.' },
  { country: '🇸🇪 Sweden', defense: '$7.2B (1.2% GDP)', healthcare: 'Universal', education: 'Free + stipend', happiness: '#7', notes: 'Non-NATO until 2024. Prospered without endless wars.' },
  { country: '🇳🇴 Norway', defense: '$8.2B (1.7% GDP)', healthcare: 'Universal', education: 'Free + support', happiness: '#5', notes: 'NATO member, but focuses on defense, not offense.' },
  { country: '🇫🇮 Finland', defense: '$5.9B (2.0% GDP)', healthcare: 'Universal', education: 'Free through PhD', happiness: '#1', notes: 'Shared border with Russia. Defends smartly, doesn\'t invade.' },
  { country: '🇳🇱 Netherlands', defense: '$15.6B (1.3% GDP)', healthcare: 'Universal', education: 'Low-cost', happiness: '#6', notes: 'Tiny military, massive prosperity.' },
  { country: '🇨🇦 Canada', defense: '$26.9B (1.3% GDP)', healthcare: 'Universal', education: 'Provincial systems', happiness: '#13', notes: 'World\'s longest undefended border. Prosperity through peace.' },
  { country: '🇺🇸 United States', defense: '$886B (3.4% GDP)', healthcare: '27M uninsured', education: '$1.77T debt', happiness: '#23', notes: 'Highest military spending. Worst outcomes among developed nations.' },
]

const whatIranWillCost = [
  { scenario: 'Limited Strikes (2-3 months)', cost: '$200-400B', equivalent: 'Fix all US bridges 3x over, or fund NASA for 8 years', timeline: 'Q1 2026' },
  { scenario: 'Extended Bombing Campaign (1 year)', cost: '$800B-1.2T', equivalent: 'Free college for everyone for 15 years, or universal pre-K for 50 years', timeline: '2026-2027' },
  { scenario: 'Ground Invasion + Occupation (5 years)', cost: '$3-5T', equivalent: 'Medicare for All for 18 months, or rebuild all US infrastructure', timeline: '2026-2031' },
  { scenario: 'Full Regime Change + Nation Building (15 years)', cost: '$8-12T', equivalent: 'Our entire war spending budget again. Double the debt.', timeline: '2026-2041' },
  { scenario: 'Regional War (Iran + proxies + Israel)', cost: '$10-20T', equivalent: 'More than we spent on all wars in US history combined', timeline: 'Generational' },
]

export default function WhatCouldWeBuyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'What Could We Buy' }]} />
      <ArticleSchema title="What $11.6 Trillion Could Have Bought Instead of War" description="America has spent $11.6 trillion on war. That could have paid for universal healthcare for 20 years, free college for 100 years, or clean water for every person" url="/analysis/what-could-we-buy" />
      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Opportunity Cost</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          What {fmtMoney(11_600_000_000_000)} Could Have Bought Instead of War
        </h1>
        <p className="text-xl text-stone-300 mb-4">The True Cost of American Military Adventurism</p>
        <p className="text-stone-400 text-lg">
          Since its founding, the United States has spent approximately {fmtMoney(11_600_000_000_000)} on war (inflation-adjusted).
          Since 9/11 alone, the bill exceeds {fmtMoney(8_000_000_000_000)}. That money is gone. It bought destroyed cities,
          dead children, failed states, and eternal enemies. Here is what it could have bought instead.
        </p>
      </div>

      <ShareButtons title="What $11.6 Trillion Could Have Bought" />

      {/* AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">AI Overview — Key Data</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 Total US war spending (all time, inflation-adjusted): <strong className="text-white">{fmtMoney(11_600_000_000_000)}</strong></li>
          <li>📊 Post-9/11 wars alone: <strong className="text-white">{fmtMoney(8_000_000_000_000)}+</strong> — that&apos;s <strong className="text-white">$61,000+ per American household</strong></li>
          <li>📊 {fmtMoney(11_600_000_000_000)} = <strong className="text-white">20 years</strong> of universal healthcare, or <strong className="text-white">145 years</strong> of free college, or <strong className="text-white">408 years</strong> of clean water for every person on Earth</li>
          <li>📊 One {fmtMoney(2_000_000)} Tomahawk missile = <strong className="text-white">1 teacher&apos;s salary for 30 years</strong></li>
          <li>📊 US infrastructure gap: <strong className="text-white">{fmtMoney(4_600_000_000_000)}</strong> — less than the cost of Iraq + Afghanistan combined</li>
        </ul>
      </div>

      {/* Alternatives */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">What {fmtMoney(11_600_000_000_000)} Could Buy</h2>
        <div className="space-y-4">
          {alternatives.map(a => (
            <div key={a.item} className="border border-stone-700 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{a.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{a.item}</h3>
                    <span className="text-red-400 font-bold shrink-0 ml-2">
                      {a.yearsAffordable || `${a.timesAffordable}`}
                    </span>
                  </div>
                  <p className="text-stone-300 text-sm mt-1">{a.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">$61,000 Per Household — And Counting</h2>
        <p>
          Brown University&apos;s Costs of War Project estimates that post-9/11 wars have cost over {fmtMoney(8_000_000_000_000)}.
          There are approximately 131 million households in America. That&apos;s <strong>over $61,000 per household</strong> spent on
          war since 2001 — money taken from American families through taxes and debt to fight wars in countries most
          Americans can&apos;t find on a map.
        </p>
        <p>
          And it&apos;s not over. The wars aren&apos;t paid for. Much of the spending was financed with borrowed money. The interest
          on war debt will continue accumulating for decades. Your grandchildren will still be paying for Iraq and
          Afghanistan. Now add Iran.
        </p>
      </div>

      {/* Per Household */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Cost Per American Household</h2>
        <div className="space-y-3">
          {perHousehold.map(w => (
            <div key={w.war} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{w.war}</h3>
                <span className="text-red-400 font-bold text-xl">{w.perHousehold}</span>
              </div>
              <p className="text-stone-300 text-sm mt-1">Total: {w.totalCost} ÷ {w.households} households</p>
              <p className="text-stone-400 text-sm">{w.notes}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Teachers vs. Tomahawks</h2>
        <p>
          The most visceral way to understand opportunity cost is to compare specific military expenditures to specific
          domestic investments. One Tomahawk cruise missile costs $2 million. A teacher&apos;s average career earnings over
          30 years is approximately $2 million. Every missile fired at Iran is 30 years of a child&apos;s education that
          doesn&apos;t happen.
        </p>
        <p>
          On Day 1 of Operation Epic Fury, the US launched an estimated 500+ Tomahawk missiles. That&apos;s $1 billion in
          missiles — or 15,000 years of teaching. In two days. For a country that says it can&apos;t afford to pay teachers
          a living wage.
        </p>
      </div>

      {/* War vs Domestic Grid */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">War Costs vs. Domestic Investment</h2>
        <div className="space-y-4">
          {warVsDomestic.map(w => (
            <div key={w.warItem} className="border border-stone-700 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <span className="text-stone-400 text-sm">Military Expense</span>
                  <p className="text-white font-semibold">{w.warItem}</p>
                  <p className="text-red-400 font-bold">{fmtMoney(parseInt(w.warCost))}</p>
                </div>
                <div className="flex items-center justify-center text-stone-500 text-2xl">=</div>
                <div>
                  <span className="text-stone-400 text-sm">What It Could Buy</span>
                  <p className="text-white font-semibold">{w.domesticItem}</p>
                  <p className="text-green-400 font-bold">{fmtMoney(parseInt(w.domesticCost))}</p>
                </div>
              </div>
              <p className="text-stone-400 text-sm mt-2 text-center italic">{w.ratio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Denmark Comparison</h2>
        <p>
          Denmark spends $8.5 billion per year on defense — roughly 0.96% of what the United States spends. In return,
          Danish citizens get: universal healthcare (free at point of service), free university education (students
          receive a $1,000/month stipend to study), virtually zero child poverty, one of the highest life expectancies
          in the world, and consistent ranking as one of the happiest countries on Earth.
        </p>
        <p>
          America, spending 104x more on defense, has: 27 million uninsured, $1.77 trillion in student debt, a child
          poverty rate of 16.9%, declining life expectancy, and a happiness ranking of #23. The tradeoff is not abstract.
          It is measured in lives, in suffering, in potential unrealized.
        </p>
      </div>

      {/* Denmark Comparison */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">United States vs. Denmark</h2>
        <div className="space-y-3">
          {denmarkComparison.map(d => (
            <div key={d.metric} className="border border-stone-700 rounded-lg p-4">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-2">{d.metric}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-stone-400 text-sm">🇺🇸 United States</span>
                  <p className="text-stone-300 text-sm">{d.us}</p>
                </div>
                <div>
                  <span className="text-stone-400 text-sm">🇩🇰 Denmark</span>
                  <p className="text-green-400 text-sm">{d.denmark}</p>
                </div>
              </div>
              <p className="text-stone-500 text-xs mt-2">{d.notes}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Peace Dividend Comparison */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Peace Dividend: How Other Nations Prosper</h2>
        <div className="space-y-3">
          {globalPeaceComparisons.map(c => (
            <div key={c.country} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{c.country}</h3>
                <span className="text-green-400 text-sm">{c.happiness}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
                <div>
                  <span className="text-stone-400">Defense</span>
                  <p className="text-stone-300">{c.defense}</p>
                </div>
                <div>
                  <span className="text-stone-400">Healthcare</span>
                  <p className="text-green-400">{c.healthcare}</p>
                </div>
                <div>
                  <span className="text-stone-400">Education</span>
                  <p className="text-green-400">{c.education}</p>
                </div>
                <div>
                  <span className="text-stone-400">Happiness Rank</span>
                  <p className="text-white">{c.happiness}</p>
                </div>
              </div>
              <p className="text-stone-500 text-xs mt-2">{c.notes}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Detailed Breakdown: What $11.6T Could Buy by Category</h2>
        <p>
          The raw numbers are staggering, but the category-by-category breakdown reveals the true scope of what America
          sacrificed for empire. Every sector that defines a civilized society — healthcare, education, infrastructure,
          environment — could have been revolutionized with war money.
        </p>
      </div>

      {/* Detailed Category Breakdowns */}
      {detailedBreakdowns.map(category => (
        <div key={category.category} className="bg-stone-800 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">
            💰 {category.category} — What War Money Could Have Bought
          </h3>
          <div className="space-y-3">
            {category.items.map(item => (
              <div key={item.item} className="border border-stone-700 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-white">{item.item}</h4>
                  <div className="text-right">
                    <span className="text-red-400 font-bold text-lg block">{item.cost}</span>
                    <span className="text-green-400 text-sm">{item.warEquivalent}</span>
                  </div>
                </div>
                <p className="text-stone-400 text-sm mt-1">{item.notes}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Historical Perspective: What America Built vs. What It Destroyed</h2>
        <p>
          Previous generations of Americans built remarkable things with far less money than we&apos;ve spent on war.
          The Manhattan Project cost $28 billion (inflation-adjusted) — just 0.24% of our total war spending. The Apollo
          Program that put humans on the moon cost $257 billion — 2.2% of war spending. The Interstate Highway System
          that connected America cost $600 billion — 5.2% of war spending.
        </p>
        <p>
          We could have built all three — nuclear energy, space exploration, and national infrastructure — 23 times over
          with the money we spent destroying other countries. Instead, we have crumbling roads, abandoned space programs,
          and aging nuclear plants.
        </p>
      </div>

      {/* Historical Comparisons */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">America&apos;s Greatest Projects vs. War Spending</h2>
        <div className="space-y-3">
          {historicalComparisons.map(program => (
            <div key={program.program} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{program.program}</h3>
                <div className="text-right">
                  <span className="text-green-400 font-bold">{program.inflationAdjusted}</span>
                  <span className="text-stone-400 text-sm block">{program.warPercentage} of war spending</span>
                </div>
              </div>
              <p className="text-stone-300 text-sm mt-1">{program.impact}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">What Iran Will Cost — And What That Could Buy Instead</h2>
        <p>
          The war with Iran isn&apos;t theoretical anymore. It&apos;s budgeted. The Pentagon is already planning for scenarios
          ranging from "limited strikes" to full occupation and regime change. Each scenario has a price tag — and each
          price tag represents opportunity costs at home.
        </p>
        <p>
          Even the "limited" option — 2-3 months of airstrikes — will cost $200-400 billion. That&apos;s enough to fix
          every structurally deficient bridge in America three times over. A full ground invasion and 5-year occupation
          could cost $3-5 trillion — enough money to provide Medicare for All for 18 months, or rebuild American infrastructure
          from the ground up.
        </p>
      </div>

      {/* Iran War Cost Projections */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">⚡ Iran War Scenarios — Cost Projections</h2>
        <div className="space-y-4">
          {whatIranWillCost.map(scenario => (
            <div key={scenario.scenario} className="border border-red-800/50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{scenario.scenario}</h3>
                <span className="text-stone-400 text-sm">{scenario.timeline}</span>
              </div>
              <div className="mb-2">
                <span className="text-red-400 font-bold text-xl">{scenario.cost}</span>
              </div>
              <p className="text-green-400 text-sm font-semibold">Could buy instead: {scenario.equivalent}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-red-900/20 rounded">
          <p className="text-red-300 text-sm">
            💀 <strong>Historical note:</strong> Every war costs 3-10x more than initial estimates. Iraq was projected at $50-200B.
            Final cost: $2.4T+. Afghanistan was supposed to be over by 2003. Final cost: $2.3T over 20 years.
            Iran will follow the same pattern.
          </p>
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Infrastructure We Don&apos;t Have</h2>
        <p>
          The American Society of Civil Engineers (ASCE) gives US infrastructure a grade of <strong>C-</strong>. The
          estimated cost to bring American roads, bridges, water systems, dams, schools, airports, and power grids to
          acceptable condition is <strong>{fmtMoney(4_600_000_000_000)}</strong>.
        </p>
        <p>
          That&apos;s less than the cost of Iraq and Afghanistan combined. America chose to rebuild Kabul and Baghdad —
          and failed — instead of rebuilding Baltimore and Detroit. Flint, Michigan still doesn&apos;t have clean water
          infrastructure fully restored. The full fix costs approximately $150 million. One B-2 bomber costs $2.1 billion.
          We could fix Flint 14 times for the price of one plane.
        </p>
        <p>
          45,000 bridges in America are rated &ldquo;structurally deficient.&rdquo; The cost to repair them: approximately
          $125 billion. That&apos;s roughly what the US will spend on the first 2-3 months of operations against Iran.
          Bridges at home crumble while bombs fall abroad.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What War Buys vs. What Peace Buys</h2>
        <p>
          Military spending creates approximately <strong>5 jobs per $1 million</strong> invested. The same $1 million creates:
        </p>
        <ul>
          <li><strong>Education:</strong> 13 jobs per $1M (2.6x more than defense)</li>
          <li><strong>Healthcare:</strong> 9 jobs per $1M (1.8x more)</li>
          <li><strong>Clean energy:</strong> 8 jobs per $1M (1.6x more)</li>
          <li><strong>Infrastructure:</strong> 7 jobs per $1M (1.4x more)</li>
        </ul>
        <p>
          Every dollar diverted from defense to education creates 2.6 times as many American jobs. The argument that
          defense spending is a jobs program is not just morally bankrupt — it is economically illiterate.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, a theft
          from those who hunger and are not fed, those who are cold and are not clothed. This world in arms is not
          spending money alone. It is spending the sweat of its laborers, the genius of its scientists, the hopes of
          its children.&rdquo;</p>
          <footer>— President Dwight D. Eisenhower, &ldquo;Chance for Peace&rdquo; speech, April 16, 1953</footer>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line</h2>
        <p>
          {fmtMoney(11_600_000_000_000)} could have given every American universal healthcare for 20 years, free college for
          145 years, or clean water for every person on Earth for 400 years. Instead, it bought: failed states in Iraq
          and Afghanistan, the rise of ISIS, a refugee crisis that destabilized Europe, 929,000 dead, 38 million displaced,
          and now a war with Iran that could cost trillions more.
        </p>
        <p>
          The money is gone. The opportunity is gone. The only question now is whether we&apos;ll keep spending. Whether
          Iran will cost another $3 trillion, $5 trillion, $10 trillion. Whether your children will inherit a country
          with crumbling bridges, unaffordable healthcare, and crushing debt — but the most expensive military in human history.
        </p>
        <p>
          Every Tomahawk missile is a choice. Every carrier group is a choice. Every trillion dollars is a choice.
          And we keep choosing war.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Psychology of Misplaced Priorities</h2>
        <p>
          When Congress votes on military spending, it passes overwhelmingly and without debate. The 2026 National Defense Authorization Act —
          $886 billion — passed the House 281-140 and the Senate 88-11. When Congress votes on healthcare, education, or infrastructure,
          every dollar is scrutinized, debated, and often rejected as "too expensive."
        </p>
        <p>
          This is not an accident. It is the result of 75 years of conditioning. The military-industrial complex has convinced Americans
          that spending on weapons is "investing in security" while spending on people is "wasteful government spending." The opposite
          is true. A healthy, educated, housed population is more secure than any nuclear weapon.
        </p>
        <p>
          <strong>Consider this:</strong> In 2021, President Biden proposed $400 billion for elder care and child care over 8 years.
          Congress called it "unaffordable." The same Congress had just voted to spend $778 billion on defense — in one year.
          We can afford to kill, but we cannot afford to care.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Generational Theft</h2>
        <p>
          The $11.6 trillion in war spending is not just money taken from domestic programs. Much of it was borrowed money —
          debt that will be paid by future generations who had no say in the wars that created it. A child born today inherits
          approximately <strong>$98,000</strong> in federal debt, much of it war-related.
        </p>
        <p>
          That child will spend their working life paying interest on wars fought before they were born. Meanwhile, they will
          attend underfunded schools, drive on crumbling roads, and face a climate crisis that could have been prevented with
          the renewable energy investments we could have made instead of Iraq and Afghanistan.
        </p>
        <p>
          This is generational theft on an unprecedented scale. We stole from our children to pay for empire, and we gave them
          nothing in return but debt and a more dangerous world.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Eisenhower Warning — Unheeded</h2>
        <p>
          President Dwight Eisenhower, five-star general and Supreme Allied Commander, warned America about exactly this tradeoff
          in his farewell address on January 17, 1961:
        </p>
        
        <blockquote className="border-l-4 border-red-600 my-6">
          <p>&ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or
          unsought, by the military-industrial complex. The potential for the disastrous rise of misplaced power exists and will persist.&rdquo;</p>
          <footer>— President Dwight D. Eisenhower, January 17, 1961</footer>
        </blockquote>

        <p>
          Eisenhower saw what was coming: an economy addicted to war spending, a political system captured by defense contractors,
          and a country that would sacrifice its domestic wellbeing for military empire. He tried to warn us. We didn&apos;t listen.
        </p>
        <p>
          <Link href="/analysis/cost-of-empire" className="text-red-400 hover:text-red-300">The cost of maintaining global empire</Link> now
          consumes $1.3 trillion annually — more than the entire GDP of most countries. We have become exactly what Eisenhower feared:
          a garrison state that measures strength by how much it can destroy rather than how much it can create.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Path Not Taken</h2>
        <p>
          Imagine if, after 9/11, America had chosen a different path. Instead of invading Afghanistan and Iraq, imagine we had spent
          $8 trillion on:
        </p>
        <ul className="list-disc list-inside space-y-2 my-4">
          <li>Energy independence through renewable infrastructure</li>
          <li>World-class education system from pre-K through university</li>
          <li>Universal healthcare that covers every American</li>
          <li>High-speed rail connecting every major city</li>
          <li>Massive investment in scientific research and development</li>
          <li>International development aid to address poverty and extremism at its roots</li>
        </ul>
        <p>
          We would be the most advanced, healthiest, most educated society in human history. We would have no enemies because we would
          have eliminated the conditions that create terrorism. We would be more secure than any military could ever make us.
        </p>
        <p>
          Instead, we chose empire. We chose to be feared rather than respected, to be militarily strong rather than economically
          resilient, to control the world rather than improve it. The $11.6 trillion is the price of that choice.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What Happens Next</h2>
        <p>
          The war machine will not stop itself. <Link href="/analysis/war-profiteering" className="text-red-400 hover:text-red-300">
          The corporations that profit from war</Link> have too much invested in continued conflict. <Link href="/analysis/aipac-war-machine" 
          className="text-red-400 hover:text-red-300">The lobby groups that push for war</Link> have too much influence over Congress.
          <Link href="/analysis/undeclared-wars" className="text-red-400 hover:text-red-300">The presidents who start wars</Link> face
          no meaningful constraints.
        </p>
        <p>
          Iran will cost trillions. After Iran, there will be another enemy, another threat, another war. The pattern will continue
          until Americans decide it must stop — or until the country collapses under the weight of its own militarism.
        </p>
        <p>
          The choice is still ours. We can keep choosing war and accept a future of managed decline — crumbling infrastructure,
          declining life expectancy, social dysfunction, and economic stagnation. Or we can choose to be the country we could
          have been: prosperous, peaceful, and free.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/cost-of-empire" className="text-red-400 hover:text-red-300">Cost of Empire: $1.3 Trillion Per Year</Link></li>
          <li><Link href="/analysis/war-profiteering" className="text-red-400 hover:text-red-300">War Profiteering: Who Gets Rich From Death</Link></li>
          <li><Link href="/analysis/aipac-war-machine" className="text-red-400 hover:text-red-300">AIPAC and the War Machine</Link></li>
          <li><Link href="/analysis/undeclared-wars" className="text-red-400 hover:text-red-300">Undeclared Wars: Constitutional Crisis</Link></li>
          <li><Link href="/analysis/base-nation" className="text-red-400 hover:text-red-300">Base Nation: 800+ Military Bases Worldwide</Link></li>
          <li><Link href="/analysis/refugee-crisis" className="text-red-400 hover:text-red-300">Refugee Crisis: 38 Million Displaced by US Wars</Link></li>
          <li><Link href="/analysis/draft-and-inequality" className="text-red-400 hover:text-red-300">The Draft and Class Warfare</Link></li>
          <li><Link href="/analysis/war-and-civil-liberties" className="text-red-400 hover:text-red-300">How War Destroys Civil Liberties</Link></li>
          <li><Link href="/conflicts/" className="text-red-400 hover:text-red-300">Conflicts Database: Every US War Since 1775</Link></li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">Take Action</h2>
        <p>
          Knowledge without action is complicity. If this analysis angers you, <strong>do something about it:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 my-4">
          <li>Contact your representatives. Tell them to vote NO on war funding.</li>
          <li>Support anti-war candidates who pledge to cut military spending.</li>
          <li>Join organizations working for peace: Veterans For Peace, CodePink, Quincy Institute.</li>
          <li>Share this information. Most Americans have no idea how much war actually costs.</li>
          <li>Divest from war profiteers. Don&apos;t let your retirement fund finance death.</li>
        </ul>
        <p>
          The $11.6 trillion is gone. The infrastructure it could have built will never exist. The lives it could have saved
          are lost forever. But the next trillion is not yet spent. The next war has not yet begun. The choice is still ours.
        </p>

        <div className="bg-stone-900 border border-stone-700 rounded-lg p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-4">💡 The Bottom Line</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <div>
                <p className="text-stone-300">
                  <strong className="text-white">$11.6 trillion</strong> spent on war since 1775. That money could have:
                  transformed American society, eliminated poverty, provided universal healthcare and education,
                  rebuilt infrastructure, and made America the most prosperous nation in history.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📉</span>
              <div>
                <p className="text-stone-300">
                  Instead: <strong className="text-white">27 million uninsured</strong>, <strong className="text-white">$1.77T student debt</strong>,
                  <strong className="text-white">C- infrastructure grade</strong>, <strong className="text-white">#23 happiness ranking</strong>,
                  and declining life expectancy. We chose empire over prosperity.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⏰</span>
              <div>
                <p className="text-stone-300">
                  The next war (Iran) will cost <strong className="text-white">$3-12 trillion more</strong>. Every dollar spent
                  on war is a dollar not spent on healing America. The choice is still ours — if we act now.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-6 my-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-200 mb-4">🚨 Urgent: What Iran Will Cost Your Family</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">If you&apos;re a household earning $75,000/year:</h3>
              <ul className="space-y-1 text-red-200 text-sm">
                <li>• Limited Iran strikes: <strong>$1,500</strong> in taxes/debt</li>
                <li>• Extended bombing: <strong>$6,100</strong> in taxes/debt</li>
                <li>• Ground invasion: <strong>$23,000</strong> in taxes/debt</li>
                <li>• Full occupation: <strong>$61,000</strong> in taxes/debt</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">That money could instead provide your family:</h3>
              <ul className="space-y-1 text-green-200 text-sm">
                <li>• Healthcare for 5 years</li>
                <li>• Your child&apos;s full college tuition</li>
                <li>• New roof, solar panels, electric car</li>
                <li>• Down payment on a house</li>
              </ul>
            </div>
          </div>
          <p className="text-red-300 text-sm mt-4">
            <strong>Historical fact:</strong> Every war costs 5-10x initial estimates. Budget accordingly.
          </p>
        </div>
      </div>

      <RelatedArticles articles={[
        {"slug":"cost-of-empire","title":"Cost of Empire","desc":"$1.3 trillion per year to maintain global dominance."},
        {"slug":"war-profiteering","title":"War Profiteering","desc":"Who gets rich while Americans die."},
        {"slug":"aipac-war-machine","title":"AIPAC & War Machine","desc":"How lobbying drives America to war."},
        {"slug":"base-nation","title":"Base Nation","desc":"800+ military bases spanning the globe."},
        {"slug":"undeclared-wars","title":"Undeclared Wars","desc":"Constitutional crisis in war-making."},
        {"slug":"refugee-crisis","title":"Refugee Crisis","desc":"38 million displaced by US wars."}
      ]} />

        <BackToTop />
    </div>
  )
}
