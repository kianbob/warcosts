import { Metadata } from 'next'
import Link from 'next/link'
import { fmtMoney } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

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
]

export default function WhatCouldWeBuyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'What Could We Buy' }]} />

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

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/cost-of-iran">What Will Iran Cost?</Link></li>
          <li><Link href="/analysis/jobs-vs-war">Jobs vs. War</Link></li>
          <li><Link href="/analysis/war-profiteering">War Is a Racket: Who Gets Rich</Link></li>
          <li><Link href="/analysis/military-industrial-complex">The Military-Industrial Complex</Link></li>
          <li><Link href="/analysis/human-cost">The Human Cost</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
