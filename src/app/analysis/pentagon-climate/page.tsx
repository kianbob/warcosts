import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'The Pentagon\'s Carbon Bootprint — World\'s Largest Institutional Polluter',
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

        <h2 className="font-[family-name:var(--font-heading)]">The 750-Base Empire: A Pollution Network</h2>
        <p>
          The United States maintains approximately <strong>750 military bases in 80 countries</strong> around the world —
          more foreign military bases than any empire in history. Each base is a node of environmental destruction:
          fuel storage, vehicle maintenance, wastewater discharge, hazardous material handling, and in many cases,
          live-fire training that contaminates soil and groundwater.
        </p>
        <p>
          On the island of Okinawa, Japan — home to 32 US military facilities — decades of contamination have
          produced <strong>PFAS levels 13.7× the Japanese safety standard</strong> in local water supplies. Residents
          near Kadena Air Base have documented elevated cancer rates, and the Japanese government has pressed the
          US for cleanup. Under the Status of Forces Agreement (SOFA), the US is not legally obligated to remediate
          contamination on Japanese soil. It hasn&apos;t.
        </p>
        <p>
          In South Korea, US bases at Yongsan, Camp Carroll, and others have contaminated surrounding areas with
          Agent Orange (stored and buried in the 1960s-70s), PFAS, and industrial solvents. In 2011, US veterans
          testified that they had buried hundreds of barrels of Agent Orange at Camp Carroll in 1978. The Army
          initially denied it, then confirmed trace contamination.
        </p>
        <p>
          In Germany, PFAS contamination from US air bases at Ramstein, Spangdahlem, and others has contaminated
          local groundwater. German authorities have documented contamination levels exceeding EU limits by
          <strong> hundreds of times</strong>. Cleanup costs are estimated in the billions — and it&apos;s unclear
          who will pay.
        </p>
        <p>
          The pattern repeats across every continent: Guam, Diego Garcia, Puerto Rico (Vieques), the Philippines,
          Iceland, Greenland, Italy. American military bases leave a trail of contamination that persists for
          decades after the bases close. Host nations bear the health consequences. American taxpayers bear the
          cleanup costs — when cleanup happens at all.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Vieques: 60 Years of Bombing a Caribbean Island</h2>
        <p>
          From 1941 to 2003, the US Navy used the island of <strong>Vieques, Puerto Rico</strong> as a live-fire
          bombing range — for 62 years. The Navy dropped an estimated <strong>22,000 bombs per year</strong> on
          the eastern portion of the island, contaminating it with heavy metals, depleted uranium, napalm,
          white phosphorus, and unexploded ordnance.
        </p>
        <p>
          The 9,300 residents of Vieques have a cancer rate <strong>27% higher</strong> than the Puerto Rican
          mainland. Rates of liver disease, diabetes, and respiratory illness are dramatically elevated. The
          soil contains lead at 500× safe levels. Mercury, arsenic, cadmium, and uranium contaminate the
          groundwater.
        </p>
        <p>
          After decades of protests — including civil disobedience by thousands of Puerto Ricans, celebrity
          involvement, and the jailing of protesters — the Navy finally ceased operations in 2003. The EPA
          designated Vieques a Superfund site. Cleanup is expected to take <strong>until at least 2032</strong>
          and cost over $400 million. Much of the island remains fenced off as a contaminated zone. The people
          of Vieques — American citizens — were bombed for 62 years and will live with the consequences for
          generations more.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">War Zone Environmental Destruction: Iraq, Afghanistan, Vietnam</h2>
        <p>
          The environmental destruction in actual war zones dwarfs the contamination at bases:
        </p>
        <ul>
          <li><strong>Iraq:</strong> An estimated <strong>400-800 tons of depleted uranium</strong> were fired
          during the 1991 and 2003 wars. DU contamination is concentrated in Basra, Fallujah, and Baghdad.
          Iraqi doctors in Fallujah reported a <strong>12× increase in childhood cancer</strong> and a dramatic
          rise in birth defects — including anencephaly, heart defects, and skeletal abnormalities — following
          the 2004 US assault. A 2010 study in the International Journal of Environmental Research and Public
          Health found cancer rates in Fallujah exceeding those of Hiroshima survivors.</li>
          <li><strong>Afghanistan:</strong> 20 years of conflict produced an estimated <strong>31 million
          metric tons of CO₂</strong> from military operations alone. Burn pits operated at every major base.
          The Bagram Air Base burn pit — the largest — operated for nearly 10 years, burning 100+ tons of
          waste per day within 1,000 feet of troop quarters. The landscape is littered with unexploded
          cluster munitions that will kill Afghan children for decades.</li>
          <li><strong>Vietnam:</strong> 20 million gallons of herbicide defoliated 5 million acres. The dioxin
          in Agent Orange has a half-life of 7-11 years in soil and persists in sediments indefinitely.
          Vietnam estimates <strong>3 million citizens</strong> continue to suffer from Agent Orange exposure,
          including a third generation born with birth defects. The US has contributed approximately $400 million
          to cleanup and victim assistance — roughly 1/50th of 1% of the war&apos;s total cost.</li>
        </ul>

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

      <div className="prose max-w-3xl mx-auto text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Nuclear Testing: The Pacific Legacy</h2>
        <p>
          Between 1946 and 1962, the United States conducted <strong>67 nuclear weapons tests</strong> in
          the Marshall Islands — including the 15-megaton Castle Bravo test on Bikini Atoll, the largest
          US nuclear detonation ever, which was <strong>1,000 times more powerful</strong> than the Hiroshima bomb.
        </p>
        <p>
          The Bikini Islanders were relocated — told the move was &ldquo;for the good of mankind&rdquo; —
          and have never been able to return. Radiation contamination persists to this day, over 60 years later.
          Background radiation on Bikini Atoll remains <strong>2-10× higher</strong> than normal levels.
          Enewetak Atoll, another major test site, was &ldquo;cleaned up&rdquo; by mixing contaminated soil
          with cement and pouring it into a bomb crater sealed with a concrete dome — the Runit Dome, now
          cracking and leaking as sea levels rise.
        </p>
        <p>
          The Marshallese people have experienced dramatically elevated rates of cancer, thyroid disorders,
          birth defects, and miscarriages for three generations. The US has paid approximately
          <strong> $600 million in compensation</strong> — a fraction of the estimated damages. A nuclear claims
          tribunal awarded $2.3 billion to the Marshallese, but the US has never paid the full amount.
        </p>
        <p>
          The domestic nuclear testing legacy is equally devastating. Over 900 nuclear tests at the Nevada
          Test Site exposed &ldquo;downwinders&rdquo; across Utah, Nevada, and Arizona to fallout. The Radiation
          Exposure Compensation Act has paid $2.6 billion to over 40,000 claimants — but eligibility criteria
          exclude many exposed communities, and the program has repeatedly been allowed to lapse.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Military Superfund Sites: America&apos;s Toxic Legacy</h2>
        <p>
          The Pentagon is responsible for more Superfund toxic waste sites than any other entity in the United
          States. The DOD has identified <strong>39,000 contaminated sites</strong> at 4,800 facilities across
          all 50 states. Of these, <strong>141 are listed on the EPA&apos;s National Priorities List</strong> —
          the most contaminated sites in the country.
        </p>
        <p>
          The contamination includes:
        </p>
        <ul>
          <li><strong>Trichloroethylene (TCE):</strong> A degreasing solvent used extensively at military
          maintenance facilities, contaminating groundwater at hundreds of bases. TCE is a known carcinogen
          linked to kidney cancer, liver cancer, and non-Hodgkin lymphoma.</li>
          <li><strong>Perchlorate:</strong> A component of rocket fuel that has contaminated drinking water
          near missile testing and production facilities. Disrupts thyroid function, particularly dangerous
          for pregnant women and infants.</li>
          <li><strong>Heavy metals:</strong> Lead, mercury, arsenic, and chromium from munitions production,
          firing ranges, and industrial operations.</li>
          <li><strong>Unexploded ordnance (UXO):</strong> An estimated <strong>10 million acres</strong> of
          former US military land may contain UXO — making it dangerous or unusable for any civilian purpose.</li>
        </ul>
        <p>
          The estimated cost of cleaning up all military contamination: <strong>$50+ billion</strong> over
          multiple decades. Progress has been glacially slow — some sites have been on the cleanup list since
          the 1980s and remain contaminated. Communities near military bases continue to drink contaminated
          water and breathe contaminated air.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Libertarian Case: You Can&apos;t Police the World and Save It</h2>
        <p>
          The Pentagon&apos;s environmental record presents a uniquely libertarian dilemma. Libertarians are
          generally skeptical of environmental regulation — but they are absolutely opposed to government
          entities that poison citizens&apos; land, water, and air with impunity. The military&apos;s
          environmental destruction represents the worst kind of government failure: an institution that
          claims sovereign immunity while destroying the property and health of the citizens it claims to protect.
        </p>
        <p>
          The fundamental problem is structural. A military establishment with 750 bases in 80 countries, a
          fleet of 13,000+ aircraft, 500+ ships, and hundreds of thousands of vehicles will inevitably be a
          massive polluter. The only way to significantly reduce the Pentagon&apos;s environmental footprint
          is to reduce the Pentagon&apos;s footprint — fewer bases, fewer weapons, fewer wars, fewer deployments.
        </p>
        <p>
          This is not an argument against national defense. It&apos;s an argument against empire. A military
          sized for the defense of the United States — rather than the policing of the world — would consume a
          fraction of the fuel, produce a fraction of the emissions, and contaminate a fraction of the land.
          The environmental case against empire is as strong as the fiscal case, the constitutional case, and
          the moral case.
        </p>
        <p>
          The irony compounds: the Pentagon identifies climate change as a &ldquo;threat multiplier&rdquo; that
          will destabilize nations and create new conflicts — requiring more military intervention, which will
          burn more fuel, which will accelerate climate change, which will create more instability, which will
          require more military intervention. The feedback loop is not a bug. For the defense industry, it&apos;s
          a feature — an infinite market for an infinite war against a problem that military spending makes worse.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The government solution to a problem is usually as bad as the problem, and very often
          makes the problem worse.&rdquo;
          <br />— Milton Friedman
        </blockquote>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8 max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources &amp; Further Reading</h2>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>• Crawford, Neta. &ldquo;Pentagon Fuel Use, Climate Change, and the Costs of War.&rdquo; Brown University Costs of War Project (2019)</li>
          <li>• Sanders, Barry. <em>The Green Zone: The Environmental Costs of Militarism</em>. AK Press (2009)</li>
          <li>• Vine, David. <em>Base Nation: How U.S. Military Bases Abroad Harm America and the World</em>. Metropolitan Books (2015)</li>
          <li>• Government Accountability Office. &ldquo;PFAS Contamination at DOD Installations.&rdquo; GAO-22-105138 (2022)</li>
          <li>• EPA. National Priorities List — Military Facilities (updated annually)</li>
          <li>• PACT Act (2022). Public Law 117-168 — Sergeant First Class Heath Robinson PACT Act</li>
          <li>• Radiation Exposure Compensation Act. DOJ annual reports (1990-present)</li>
          <li>• DOD Climate Adaptation Plan. &ldquo;Climate Risk Analysis.&rdquo; (2021)</li>
          <li>• Kyoto Protocol exemption negotiations. COP3 documents (1997)</li>
          <li>• SIPRI. &ldquo;Military Expenditure and Environmental Sustainability.&rdquo; (2022)</li>
        </ul>
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
          <li><Link href="/analysis/the-469" className="text-red-800 hover:underline">→ 469 Military Interventions</Link></li>
          <li><Link href="/analysis/cost-per-life" className="text-red-800 hover:underline">→ The Price of a Life</Link></li>
          <li><Link href="/analysis/jobs-vs-war" className="text-red-800 hover:underline">→ Jobs vs War — opportunity cost</Link></li>
          <li><Link href="/analysis/iran-2026" className="text-red-800 hover:underline">→ Iran 2026</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
