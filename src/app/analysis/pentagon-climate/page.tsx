import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The Pentagon\'s Carbon Bootprint — World\'s Largest Institutional Polluter | WarCosts',
  description: 'The US military emits 56 million metric tons of CO₂ per year, burns 4.6 billion gallons of fuel, and has contaminated 700+ bases with PFAS. War is environmental destruction.',
  keywords: ['pentagon climate', 'military pollution', 'military carbon footprint', 'DOD emissions', 'burn pits', 'PFAS military'],
  openGraph: {
    title: 'The Pentagon\'s Carbon Bootprint',
    description: 'If the US military were a country, it would be the 55th largest CO₂ emitter on Earth.',
    url: 'https://warcosts.org/analysis/pentagon-climate',
    type: 'article',
  },
}

export default function PentagonClimatePage() {
  const stats = loadData('stats.json')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Pentagon\'s Carbon Bootprint — World\'s Largest Institutional Polluter',
    description: 'The US military emits 56 million metric tons of CO₂ per year — more than most countries.',
    url: 'https://warcosts.org/analysis/pentagon-climate',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-01-15',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Pentagon & Climate' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Pentagon&apos;s Carbon Bootprint
        </h1>
        <p className="text-stone-400 text-lg">
          The US Department of Defense is the world&apos;s single largest institutional consumer of fossil fuels —
          and the single largest institutional producer of greenhouse gases on Earth.
        </p>
      </div>

      <ShareButtons title="The Pentagon's Carbon Bootprint" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { value: '56M', unit: 'metric tons', label: 'CO₂ per year' },
          { value: '4.6B', unit: 'gallons', label: 'Fuel burned annually' },
          { value: `#${stats.pentagonCO2Rank}`, unit: '', label: 'If it were a country' },
          { value: '700+', unit: 'bases', label: 'Contaminated with PFAS' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            {s.unit && <p className="text-stone-500 text-xs">{s.unit}</p>}
            <p className="text-stone-500 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto text-stone-600">
        <p className="text-lg">
          If the US Department of Defense were a nation-state, its annual carbon emissions would rank it as
          the <strong>55th largest emitter on Earth</strong> — ahead of Portugal, Sweden, Denmark, and over
          140 other countries. This isn&apos;t an accident. It&apos;s the logical consequence of maintaining
          an empire of 750 bases across 80 countries, flying the world&apos;s largest fleet of aircraft,
          and sailing a navy that consumes fuel measured in the billions of gallons.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Scale of Consumption</h2>
        <p>
          The Pentagon burns approximately <strong>4.6 billion gallons of fuel per year</strong>. To put that in
          perspective: that&apos;s roughly 12.6 million gallons per day, or 527,000 gallons per hour. Every hour
          of every day, the US military consumes more fuel than most mid-sized cities use in a week.
        </p>
        <p>
          According to research by Neta Crawford at Brown University&apos;s Costs of War Project, the DOD&apos;s
          total greenhouse gas emissions — including direct fuel consumption, electricity, and supply chain —
          amount to approximately <strong>56 million metric tons of CO₂ equivalent per year</strong>. That&apos;s
          more than the total emissions of entire industrialized nations like Sweden (50.8M), Switzerland (46.2M),
          or Norway (49.3M).
        </p>

        {/* Did You Know? */}
        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The US Air Force is the single largest consumer of jet fuel in the world. It burns through
            approximately <strong>2.4 billion gallons of aviation fuel</strong> per year — roughly 10% of
            all jet fuel consumed on Earth.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Fuel Consumption by Weapon System</h2>
        <p>
          Military vehicles are not designed for efficiency. They&apos;re designed for lethality, speed, and
          survivability — fuel economy is an afterthought, if it&apos;s considered at all. The numbers are staggering:
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          {[
            { system: 'M1 Abrams Tank', consumption: '0.6 miles per gallon', note: '10 gallons to go 6 miles' },
            { system: 'F-35A Lightning II', consumption: '1 gallon every 1.3 seconds', note: '2,760 gallons per hour' },
            { system: 'B-52 Stratofortress', consumption: '3,334 gallons per hour', note: '47,000 gallons per mission' },
            { system: 'Aircraft Carrier Group', consumption: '5,600 gallons per hour', note: '100,000 gallons per day' },
            { system: 'F-15 Eagle', consumption: '1,580 gallons per hour', note: 'Burns more in 1 hour than a car in 1 year' },
            { system: 'C-5 Galaxy Transport', consumption: '4,900 gallons per hour', note: '150,000-gallon capacity' },
          ].map(v => (
            <div key={v.system} className="bg-stone-50 rounded-lg p-4 border">
              <p className="font-bold text-stone-800 font-[family-name:var(--font-heading)]">{v.system}</p>
              <p className="text-red-800 font-semibold">{v.consumption}</p>
              <p className="text-stone-500 text-sm">{v.note}</p>
            </div>
          ))}
        </div>

        <p>
          During the Iraq War, the US military consumed approximately <strong>1 million barrels of oil per day</strong> at
          peak operations — an amount comparable to the total daily consumption of entire nations like Bangladesh or Greece.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Burn Pits: Poisoning Our Own Troops</h2>
        <p>
          At bases across Iraq and Afghanistan, the US military disposed of waste by burning it in open-air pits — everything
          from medical waste and batteries to unexploded ordnance, plastics, and human remains. An estimated
          <strong> 3.5 million service members</strong> were exposed to toxic burn pit smoke.
        </p>
        <p>
          The smoke contained dioxins, volatile organic compounds, heavy metals, and carcinogens. Veterans began
          developing rare cancers, respiratory diseases, and neurological conditions at alarming rates. For years,
          the VA denied claims, insisting there was &ldquo;insufficient evidence&rdquo; linking burn pit exposure to illness.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;I&apos;m not going to forget. We have a sacred obligation to equip those we send into harm&apos;s way
          and to care for them and their families when they come home.&rdquo;
          <br />— President Joe Biden, signing the PACT Act, August 2022
        </blockquote>

        <p>
          The 2022 PACT Act — named for Sergeant First Class Heath Robinson, who died of cancer linked to burn pit
          exposure — finally expanded VA healthcare eligibility for 3.5 million exposed veterans. But the damage
          was already done. Thousands had died waiting. The burn pit registry, established in 2014, has recorded
          over 300,000 veterans — but experts believe the true number of affected individuals is far higher.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">PFAS: The Forever Chemical Crisis</h2>
        <p>
          Per- and polyfluoroalkyl substances (PFAS) — known as &ldquo;forever chemicals&rdquo; because they
          never break down in the environment — have contaminated groundwater at <strong>more than 700 military
          installations</strong> across the United States. The primary culprit: aqueous film-forming foam (AFFF),
          used for decades in firefighting training exercises at military airfields.
        </p>
        <p>
          PFAS exposure is linked to cancer, thyroid disease, immune system disorders, reproductive problems,
          and developmental issues in children. Communities near military bases — from Tucson, Arizona to
          Fayetteville, North Carolina — have discovered dangerously elevated PFAS levels in their drinking water,
          sometimes at concentrations <strong>hundreds of times above safe limits</strong>.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The DOD has identified <strong>$31 billion</strong> in estimated cleanup costs for PFAS contamination
            at military bases — and that figure is likely to grow as more contamination is discovered. The Pentagon
            knew about the risks of AFFF as early as the 1970s but continued using it for decades.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Environmental Destruction as a Weapon</h2>
        <p>
          The military doesn&apos;t just pollute as a side effect of operations — environmental destruction has
          been deliberately used as a weapon of war throughout American history:
        </p>
        <ul>
          <li>
            <strong>Agent Orange (1961–1971):</strong> The US sprayed 20 million gallons of herbicide over Vietnam,
            defoliating 5 million acres of forest and cropland. An estimated 3 million Vietnamese and 300,000
            American veterans suffered health effects including cancer, birth defects, and neurological damage.
            The dioxin contamination persists to this day.
          </li>
          <li>
            <strong>Depleted Uranium (1991–Present):</strong> DU munitions — used for their armor-piercing
            properties — have been fired across Iraq, Kosovo, Afghanistan, and Syria. Depleted uranium has a
            half-life of 4.5 billion years. Iraqi doctors have reported dramatic increases in birth defects and
            childhood leukemia in areas where DU was used heavily, particularly in Basra and Fallujah.
          </li>
          <li>
            <strong>Kuwait Oil Fires (1991):</strong> Retreating Iraqi forces set 700 oil wells ablaze during
            the Gulf War, burning for 10 months and releasing an estimated 2 billion barrels of oil into the
            environment. But it was American-led bombing that damaged much of the oil infrastructure in the first place.
          </li>
          <li>
            <strong>White Phosphorus (2004–Present):</strong> Used in Fallujah, Gaza, and elsewhere, white phosphorus
            burns at 1,500°F and cannot be extinguished with water. Its use in populated areas constitutes a war crime
            under international humanitarian law — yet the US and its allies continue to deploy it.
          </li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">The Climate Exemption</h2>
        <p>
          At US insistence, military emissions were explicitly exempted from the Kyoto Protocol in 1997. The logic
          was grimly circular: the military needed to be excluded from climate agreements so it could operate freely
          to protect national security — including security threats caused by climate change.
        </p>
        <p>
          While the Paris Agreement (2015) technically includes military emissions, reporting is voluntary. The
          Pentagon consistently underreports its emissions, using accounting methods that exclude significant
          sources — supply chain emissions, overseas operations, and contractors. Independent researchers estimate
          that actual DOD emissions may be <strong>60–70% higher</strong> than officially reported figures.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The Department of Defense sees climate change as a present security threat, not strictly a future
          threat. We are already observing the impacts of climate change in shocks and stressors to vulnerable
          nations and communities.&rdquo;
          <br />— 2014 DOD Climate Change Adaptation Roadmap
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Supreme Irony: Climate Wars</h2>
        <p>
          Here&apos;s the bitter irony that defines the Pentagon&apos;s relationship with climate change: the
          Department of Defense is simultaneously the <strong>largest institutional contributor</strong> to climate
          change and its most vocal military planner. The Pentagon has published dozens of reports identifying
          climate change as a &ldquo;threat multiplier&rdquo; — a force that destabilizes nations, creates
          resource conflicts, and generates mass migration.
        </p>
        <p>
          The DOD&apos;s own projections warn that climate change will:
        </p>
        <ul>
          <li>Create <strong>1.2 billion climate refugees</strong> by 2050, destabilizing entire regions</li>
          <li>Increase competition for water, food, and arable land — triggering new conflicts</li>
          <li>Threaten <strong>1,700+ US military installations</strong> worldwide through sea-level rise, extreme weather, and desertification</li>
          <li>Force more military &ldquo;humanitarian interventions&rdquo; in climate-ravaged areas — which will burn more fuel, creating more emissions, accelerating more climate change</li>
        </ul>
        <p>
          We are, in essence, burning the planet to fuel the military that plans for the consequences of a burning
          planet. It is the most expensive feedback loop in human history.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The fuel supply chain for military operations in Afghanistan cost taxpayers up to <strong>$400 per gallon</strong> when
            fully accounting for the cost of transporting fuel to remote forward operating bases — compared to
            about $3 per gallon at a US gas station. A single military base in Afghanistan could consume
            22,000 gallons of fuel per day.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The Numbers in Context</h2>
        <p>
          To understand the scale of Pentagon pollution, consider what 56 million metric tons of CO₂ actually means:
        </p>
        <ul>
          <li>Equivalent to the annual emissions of <strong>12 million cars</strong></li>
          <li>More CO₂ than the entire nation of <strong>Portugal</strong> produces (49.9M tons)</li>
          <li>Roughly equal to the combined emissions of <strong>Sweden and Switzerland</strong></li>
          <li>The War on Terror alone (2001–2023) produced an estimated <strong>1.2 billion metric tons</strong> of CO₂ — equivalent to the annual emissions of 257 million cars</li>
        </ul>

        <h2 className="font-[family-name:var(--font-heading)]">What Could Change</h2>
        <p>
          The Pentagon has announced modest &ldquo;climate resilience&rdquo; initiatives — hybrid vehicles for
          non-combat fleets, solar panels on some domestic bases, and climate scenario planning. But these efforts
          are marginal compared to the scale of the problem. You cannot install solar panels on an aircraft carrier.
          You cannot make an F-35 fuel-efficient. The fundamental incompatibility between environmental sustainability
          and global military dominance remains unresolved — and largely undiscussed.
        </p>
        <p>
          The only meaningful way to reduce the Pentagon&apos;s carbon footprint is to reduce the Pentagon&apos;s
          footprint. Fewer bases. Fewer wars. Fewer deployments. Fewer weapons systems. In other words: the one
          option that is never on the table.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;War is the greatest single source of environmental destruction on Earth. If you want to save the
          planet, start by ending the wars.&rdquo;
          <br />— Barry Sanders, <em>The Green Zone: The Environmental Costs of Militarism</em>
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;You cannot simultaneously prevent and prepare for war.&rdquo;
          <br />— Albert Einstein
        </blockquote>
      </div>

      {/* Related */}
      <div className="mt-12 bg-stone-50 rounded-lg p-6 border max-w-3xl mx-auto">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline">→ The Military-Industrial Complex</Link></li>
          <li><Link href="/analysis/the-aftermath" className="text-red-800 hover:underline">→ The Aftermath — What war leaves behind</Link></li>
          <li><Link href="/analysis/empire-of-bases" className="text-red-800 hover:underline">→ Empire of Bases — 750 bases in 80 countries</Link></li>
          <li><Link href="/defense-budget" className="text-red-800 hover:underline">→ The $886B Defense Budget</Link></li>
          <li><Link href="/veteran-suicide" className="text-red-800 hover:underline">→ Veteran Suicide — 17 per day</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
