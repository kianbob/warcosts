import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { ToxicSitesChart, BurnPitChart, MilitaryEmissionsChart, AgentOrangeChart } from './EnvironmentCharts'

export const metadata: Metadata = {
  title: "The Environmental Cost of War: Burn Pits, Depleted Uranium & the Pentagon's Toxic Legacy",
  description: '3.5M veterans exposed to burn pits. Depleted uranium in Iraq. Agent Orange still killing in Vietnam. The Pentagon is the world\'s largest institutional polluter.',
  openGraph: {
    title: "War's Environmental Destruction",
    description: 'Burn pits, depleted uranium, Agent Orange, nuclear testing. The Pentagon is the world\'s largest polluter.',
    url: 'https://www.warcosts.org/analysis/environmental-cost',
    type: 'article',
  },
}

const burnPitSubstances = [
  { substance: 'Medical waste (bloody bandages, amputated limbs)', toxins: 'Pathogens, dioxins', health: 'Respiratory disease, infections' },
  { substance: 'Plastics (bottles, packaging, electronics)', toxins: 'Dioxins, furans, hydrogen cyanide', health: 'Cancer, neurological damage' },
  { substance: 'Batteries and electronics', toxins: 'Lead, cadmium, mercury, lithium', health: 'Kidney damage, cancer, neurological effects' },
  { substance: 'Tires and rubber', toxins: 'Benzene, toluene, PAHs', health: 'Leukemia, lymphoma' },
  { substance: 'Paint and solvents', toxins: 'VOCs, heavy metals', health: 'Liver damage, cancer' },
  { substance: 'Human waste and animal carcasses', toxins: 'Pathogens, ammonia', health: 'Respiratory infections' },
  { substance: 'Unexploded ordnance', toxins: 'TNT, RDX, perchlorate', health: 'Thyroid disorders, cancer' },
  { substance: 'Jet fuel (used as accelerant)', toxins: 'JP-8 (naphthalene, benzene)', health: 'Blood cancers, respiratory disease' },
]

const nuclearTestSites = [
  { location: 'Marshall Islands (Bikini Atoll)', tests: 67, yield: '108 Mt total', status: 'Uninhabitable. Radiation persists. Marshallese diaspora.' },
  { location: 'Nevada Test Site', tests: 928, yield: '~1 Mt total', status: '340,000+ "downwinders" exposed. Cancer clusters documented.' },
  { location: 'Johnston Atoll', tests: 12, yield: 'Various', status: 'Agent Orange and nuclear waste stored. Contamination ongoing.' },
  { location: 'Amchitka, Alaska', tests: 3, yield: '5 Mt', status: 'Radioactive contamination of marine ecosystem.' },
  { location: 'Christmas Island', tests: 24, yield: 'Various', status: 'British tests with US support. Veterans denied compensation.' },
]

export default function EnvironmentalCostPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Environmental Cost' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Environmental Cost of War
        </h1>
        <p className="text-xl text-stone-300 mb-4">Burn Pits, Depleted Uranium &amp; the Pentagon&apos;s Toxic Legacy</p>
        <p className="text-stone-400 text-lg">
          At Joint Base Balad in Iraq, a burn pit the size of 10 acres burned 24 hours a day, 7 days a week, 
          for years. It burned everything: medical waste, batteries, tires, plastics, paint, unexploded ordnance, 
          amputated body parts, and human waste — all doused in jet fuel. The smoke drifted across the base where 
          25,000 service members slept, ate, and exercised. The Pentagon knew it was toxic. It did nothing. 
          3.5 million veterans were exposed to burn pits. The military is the world&apos;s largest institutional 
          polluter — responsible for more toxic contamination than the top five chemical companies combined. And 
          the damage doesn&apos;t stay on the battlefield. It comes home in veterans&apos; lungs, contaminates 
          communities around bases, and persists in soil and water for generations.
        </p>
      </div>

      <ShareButtons title="The Environmental Cost of War: Burn Pits, Depleted Uranium & the Pentagon's Toxic Legacy" />

      {/* Key Findings */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-3">Key Findings</h2>
        <ul className="space-y-2 text-stone-300">
          <li>• <strong className="text-white">3.5 million veterans</strong> exposed to burn pits at 230+ locations in Iraq and Afghanistan</li>
          <li>• <strong className="text-white">385 US military bases</strong> contaminated with PFAS &ldquo;forever chemicals&rdquo;</li>
          <li>• <strong className="text-white">141 military sites</strong> on the EPA Superfund list — more than any other entity</li>
          <li>• <strong className="text-white">20 million gallons</strong> of Agent Orange sprayed in Vietnam — effects persist 60+ years later</li>
          <li>• <strong className="text-white">350 million tonnes CO₂</strong> per year — more than most countries on Earth</li>
          <li>• <strong className="text-white">Camp Lejeune:</strong> 1 million people exposed to contaminated water for 35 years</li>
          <li>• <strong className="text-white">1,032 nuclear tests</strong> by the US, contaminating sites from Nevada to the Marshall Islands</li>
        </ul>
      </div>

      <ToxicSitesChart />

      {/* Section: Burn Pits */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Burn Pits: The New Agent Orange
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          From 2001 to 2019, the US military operated open-air burn pits at over <strong>230 locations</strong> 
          across Iraq, Afghanistan, and other countries. Rather than build proper waste disposal facilities — 
          which would have cost a fraction of the war budget — the military chose to burn everything in open pits 
          doused with JP-8 jet fuel.
        </p>

        <BurnPitChart />

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">What Was Burned</th>
                <th className="px-4 py-3 text-left">Toxic Emissions</th>
                <th className="px-4 py-3 text-left">Health Effects</th>
              </tr>
            </thead>
            <tbody>
              {burnPitSubstances.map((row) => (
                <tr key={row.substance} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3">{row.substance}</td>
                  <td className="px-4 py-3 text-red-800 font-medium">{row.toxins}</td>
                  <td className="px-4 py-3 text-sm">{row.health}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The PACT Act: Too Little, Too Late</h3>
          <p className="text-stone-700 mb-3">
            The Sergeant First Class Heath Robinson Honoring our Promise to Address Comprehensive Toxics (PACT) Act 
            was signed in August 2022 — more than <strong>20 years</strong> after burn pit exposure began. The bill 
            was named after a veteran who died of cancer at age 39 after exposure to burn pits at Joint Base Balad.
          </p>
          <p className="text-stone-700 mb-3">
            Before the PACT Act, the VA denied <strong>70% of burn pit disability claims</strong>. Veterans had to 
            prove a direct causal link between their specific burn pit exposure and their specific cancer — an 
            impossible standard given that the military kept no records of what was burned or who was exposed.
          </p>
          <p className="text-stone-700">
            The PACT Act creates a presumption of service connection for 23 conditions. But by the time it passed, 
            thousands of veterans had already died. And the law only covers US veterans — the Iraqi and Afghan 
            civilians who lived near burn pits for years have no recourse at all.
          </p>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">KBR &amp; Halliburton: Paid to Poison</h3>
          <p className="text-stone-300 mb-3">
            The burn pits were operated by <strong>KBR (Kellogg, Brown &amp; Root)</strong>, a subsidiary of 
            Halliburton — the company formerly run by Vice President Dick Cheney. KBR received <strong>$39.5 billion</strong> 
            in government contracts for logistics in Iraq and Afghanistan, including waste management.
          </p>
          <p className="text-stone-300">
            Rather than build incinerators (which would have cost more), KBR used open-air burn pits — maximizing 
            profit at the expense of troop health. When veterans sued KBR, the company argued it was immune from 
            liability because it was working under government contract. The case was dismissed. KBR made $39.5 billion. 
            3.5 million veterans were poisoned.
          </p>
        </div>
      </section>

      {/* Section: Agent Orange */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Agent Orange: 60 Years of Poison
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Between 1962 and 1971, the US military sprayed <strong>20 million gallons</strong> of Agent Orange 
          and other herbicides over 4.5 million acres of Vietnam, Laos, and Cambodia in Operation Ranch Hand. 
          The goal was defoliation — stripping the jungle canopy to expose Viet Cong positions. The chemical 
          contained dioxin (TCDD), one of the most toxic substances ever created.
        </p>

        <AgentOrangeChart />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-950/10 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">US Veterans</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>2.6 million</strong> US troops served in sprayed areas</li>
              <li>• VA recognizes 14 diseases linked to Agent Orange</li>
              <li>• <strong>300,000+ veterans</strong> have received disability compensation</li>
              <li>• The VA denied the link for <strong>20 years</strong> (1971–1991)</li>
              <li>• Veterans&apos; children: elevated rates of spina bifida and birth defects</li>
              <li>• Dow Chemical and Monsanto settled for <strong>$180 million</strong> in 1984 — roughly $70 per affected veteran</li>
            </ul>
          </div>
          <div className="bg-red-950/10 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">Vietnamese Victims</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>3 million</strong> Vietnamese affected (government estimate)</li>
              <li>• <strong>150,000+ children</strong> born with birth defects</li>
              <li>• Effects now in the <strong>3rd generation</strong></li>
              <li>• Dioxin persists in soil at former US bases (Bien Hoa: 365x safe levels)</li>
              <li>• The US has paid <strong>$0</strong> in compensation to Vietnamese victims</li>
              <li>• A 2004 lawsuit by Vietnamese victims was dismissed by US courts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Depleted Uranium */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Depleted Uranium: Radioactive Battlefields
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The US military fired an estimated <strong>300 tonnes</strong> of depleted uranium (DU) ammunition 
          in the 1991 Gulf War and <strong>170 tonnes</strong> in the 2003 Iraq War. DU is used in armor-piercing 
          rounds because of its extreme density. When a DU round hits a target, it aerosolizes into fine 
          radioactive dust that can be inhaled, ingested, or absorbed through wounds.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Fallujah: The Cancer Capital</h3>
          <p className="text-stone-700 mb-3">
            After the two US sieges of Fallujah in 2004, researchers documented a <strong>38-fold increase</strong> 
            in leukemia, a <strong>10-fold increase</strong> in breast cancer, and infant mortality rates that 
            exceeded those recorded in Hiroshima. The birth defect rate was <strong>14 times</strong> the normal rate.
          </p>
          <p className="text-stone-700">
            The Pentagon has consistently denied any link between DU and health effects. A 2013 WHO study 
            (partially funded by the Iraqi government) found &ldquo;no clear increase in birth defects&rdquo; — 
            but the study was criticized for excluding the most affected neighborhoods and relying on 
            hospital records in a city where most births happen at home.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Gulf War Syndrome</h3>
          <p className="text-stone-700 mb-3">
            250,000 Gulf War veterans — <strong>one-third</strong> of all who served — report chronic symptoms: 
            fatigue, pain, cognitive problems, skin rashes, respiratory issues. The VA spent decades denying 
            &ldquo;Gulf War Syndrome&rdquo; existed. A 2008 congressional report finally confirmed it was real 
            and likely caused by exposure to nerve agents, pesticides, DU dust, and oil well fire smoke.
          </p>
          <p className="text-stone-700">
            Thirty-five years later, the VA still classifies many Gulf War illness claims as &ldquo;undiagnosed 
            illness&rdquo; — a category that receives lower disability ratings and fewer benefits.
          </p>
        </div>
      </section>

      {/* Section: Military as Polluter */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The World&apos;s Largest Polluter
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The US Department of Defense is the world&apos;s largest institutional consumer of fossil fuels and 
          the world&apos;s largest institutional producer of greenhouse gases. The Pentagon uses 
          <strong> 100 million barrels of oil per year</strong> — more than most countries. A single B-52 
          bomber burns 3,334 gallons of fuel per hour. An aircraft carrier burns 100,000 gallons per day.
        </p>

        <MilitaryEmissionsChart />

        <div className="bg-stone-900 text-white rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Exempted from Climate Agreements</h3>
          <p className="text-stone-300 mb-3">
            At US insistence, military emissions were <strong>exempted from the Kyoto Protocol</strong> (1997). 
            While the Paris Agreement (2015) technically includes military emissions, reporting is voluntary — 
            and the US does not fully report. The Pentagon&apos;s climate impact is essentially invisible in 
            international climate accounting.
          </p>
          <p className="text-stone-300">
            Brown University researchers estimate the US military&apos;s total carbon footprint — including 
            supply chain — at approximately <strong>350 million tonnes of CO₂ per year</strong>. This would 
            make the US military the 55th largest emitter in the world — larger than Portugal, Sweden, or Denmark.
          </p>
        </div>
      </section>

      {/* Section: Camp Lejeune */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Camp Lejeune: Poisoning Our Own
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          From 1953 to 1987 — <strong>35 years</strong> — the drinking water at Marine Corps Base Camp Lejeune, 
          North Carolina was contaminated with industrial solvents, benzene, and other carcinogens at levels 
          up to <strong>3,400 times</strong> the safe limit. An estimated <strong>1 million people</strong> — 
          Marines, their families, and civilian workers — were exposed.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-950/10 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">What Was in the Water</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>Trichloroethylene (TCE)</strong> — industrial degreaser. 3,400x safe levels.</li>
              <li>• <strong>Perchloroethylene (PCE)</strong> — dry cleaning solvent. 40x safe levels.</li>
              <li>• <strong>Benzene</strong> — known carcinogen. From fuel leaks.</li>
              <li>• <strong>Vinyl chloride</strong> — TCE breakdown product. Causes liver cancer.</li>
              <li>• An off-base dry cleaner dumped solvents directly into the groundwater for decades</li>
            </ul>
          </div>
          <div className="bg-red-950/10 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">The Cover-Up</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• The Marine Corps <strong>knew about contamination in 1980</strong> but didn&apos;t close the wells until 1985</li>
              <li>• Affected families were <strong>not notified until 1999</strong> — 19 years later</li>
              <li>• The Camp Lejeune Justice Act wasn&apos;t passed until <strong>2022</strong> — 42 years after discovery</li>
              <li>• Former Marine Jerry Ensminger spent <strong>25 years fighting</strong> for justice after his daughter died of leukemia at age 9</li>
              <li>• As of 2025, over 200,000 claims have been filed; fewer than 100 have been paid</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Nuclear Testing */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Nuclear Testing: Sacrificed Lands, Sacrificed People
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The United States conducted <strong>1,032 nuclear tests</strong> between 1945 and 1992 — more than any 
          other country. The fallout contaminated land, water, and people across the Pacific, the American West, 
          and Alaska. The communities affected were disproportionately indigenous and Pacific Islander.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-right">Tests</th>
                <th className="px-4 py-3 text-left">Total Yield</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {nuclearTestSites.map((row) => (
                <tr key={row.location} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.location}</td>
                  <td className="px-4 py-3 text-right font-bold">{row.tests}</td>
                  <td className="px-4 py-3">{row.yield}</td>
                  <td className="px-4 py-3 text-sm text-stone-600">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Marshall Islands: America&apos;s Nuclear Colony</h3>
          <p className="text-stone-700 mb-3">
            Between 1946 and 1958, the US detonated <strong>67 nuclear weapons</strong> at Bikini and Enewetak 
            Atolls in the Marshall Islands. The total yield was equivalent to 1.6 Hiroshima bombs detonated 
            <strong>every day for 12 years</strong>. The Castle Bravo test (1954) was 1,000 times more powerful 
            than Hiroshima.
          </p>
          <p className="text-stone-700 mb-3">
            The Marshallese people were forcibly relocated. They were told they could return. They never could. 
            Bikini Atoll remains uninhabitable. Women on nearby islands gave birth to what they called 
            &ldquo;jellyfish babies&rdquo; — infants born without bones, translucent, barely human in appearance. 
            Thyroid cancer rates are <strong>100 times</strong> the global average.
          </p>
          <p className="text-stone-700">
            The US paid a total of <strong>$150 million</strong> in compensation — for the permanent destruction 
            of an entire nation&apos;s homeland. The Marshallese government estimates the true damage at 
            <strong>$3.4 billion</strong>. The nuclear waste dome on Runit Island — a concrete cap over 
            radioactive debris — is now cracking and leaking into the Pacific due to rising sea levels caused 
            by climate change.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Downwinders: America&apos;s Own Radiation Victims</h3>
          <p className="text-stone-700 mb-3">
            The 928 nuclear tests at the Nevada Test Site sent radioactive fallout across Utah, Nevada, and Arizona. 
            An estimated <strong>340,000 &ldquo;downwinders&rdquo;</strong> — mostly rural, mostly Mormon, mostly 
            trusting of the government — were exposed to significant radiation. Cancer clusters appeared within years. 
            Thyroid cancer, leukemia, and breast cancer rates soared.
          </p>
          <p className="text-stone-700">
            The Radiation Exposure Compensation Act (RECA) was passed in 1990 — but limited payments to $50,000 
            and covered only specific counties. The act expired in June 2024 after Congress failed to reauthorize 
            an expanded version. Thousands of downwinders died waiting for compensation that never came.
          </p>
        </div>
      </section>

      {/* Section: Oil Well Fires */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Oil Well Fires &amp; Environmental Warfare
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          During the 1991 Gulf War, retreating Iraqi forces set fire to <strong>700 Kuwaiti oil wells</strong>. 
          The fires burned for 10 months, releasing an estimated <strong>2 billion barrels of oil</strong> into 
          the atmosphere and creating oil lakes covering 50 square kilometers. The smoke plume was visible from 
          space and deposited soot as far as the Himalayas.
        </p>
        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <p className="text-stone-700 mb-3">
            500,000 US troops were exposed to the smoke. The combination of oil well fire particulates, DU 
            dust, nerve agent demolitions, and pesticide exposure created the toxic cocktail that would later 
            be known as Gulf War Syndrome. The environmental destruction took years to remediate and the 
            contamination of Kuwait&apos;s soil and groundwater persists today.
          </p>
          <p className="text-stone-700">
            In Iraq, the 2003 invasion and subsequent conflict destroyed water treatment plants, sewage systems, 
            and industrial facilities. Raw sewage flowed into the Tigris and Euphrates rivers. Drinking water 
            contamination caused a cholera outbreak in 2007. The environmental infrastructure that took decades 
            to build was destroyed in weeks — and has never been fully restored.
          </p>
        </div>
      </section>

      {/* Bottom line */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-stone-300 text-lg mb-4">
            The Pentagon is the world&apos;s largest polluter. It has contaminated 385 military bases with forever 
            chemicals. It poisoned 1 million people at Camp Lejeune and hid it for 19 years. It exposed 3.5 million 
            veterans to burn pits and denied their claims for two decades. It sprayed 20 million gallons of Agent 
            Orange and paid $0 to Vietnamese victims. It irradiated Pacific Islanders and American downwinders 
            and let the compensation act expire.
          </p>
          <p className="text-stone-300 text-lg mb-4">
            The environmental cost of war is never included in the Pentagon&apos;s budget. It&apos;s not in the 
            $886 billion. It&apos;s not in the congressional debates. It&apos;s in the cancer wards, the birth 
            defect clinics, the contaminated aquifers, and the uninhabitable atolls. It&apos;s in the lungs of 
            veterans and the DNA of children who haven&apos;t been born yet.
          </p>
          <p className="text-stone-300 text-lg">
            War doesn&apos;t just destroy people. It destroys the land, the water, and the air. And the destruction 
            outlasts the war by generations.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li>• Brown University Costs of War Project, &ldquo;Pentagon Fuel Use, Climate Change, and the Costs of War&rdquo; (2019)</li>
          <li>• DOD Burn Pit Registry, Airborne Hazards and Open Burn Pit Registry (2024)</li>
          <li>• GAO, &ldquo;DOD PFAS Contamination at Military Installations&rdquo; (2023)</li>
          <li>• EPA Superfund National Priorities List — Federal Facilities</li>
          <li>• VA Agent Orange Registry, Claims Data (2024)</li>
          <li>• Busby C, et al. &ldquo;Cancer, Infant Mortality and Birth Sex-Ratio in Fallujah, Iraq&rdquo; (2010)</li>
          <li>• ATSDR, &ldquo;Camp Lejeune: Past Water Contamination&rdquo; (2023)</li>
          <li>• Nuclear Claims Tribunal, Republic of the Marshall Islands</li>
          <li>• National Cancer Institute, &ldquo;Radiation Exposure from Nuclear Testing&rdquo;</li>
          <li>• PACT Act Implementation Report, VA (2024)</li>
          <li>• Congressional Research Service, &ldquo;Depleted Uranium Use by the US Military&rdquo; (2022)</li>
        </ul>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/analysis/pentagon-climate" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Pentagon&apos;s Carbon Bootprint</h3>
            <p className="text-sm text-stone-500">If the military were a country, it&apos;d be the 55th largest emitter.</p>
          </Link>
          <Link href="/analysis/veterans-betrayed" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Veterans Betrayed</h3>
            <p className="text-sm text-stone-500">17 suicides/day. 37,000 homeless. The VA backlog.</p>
          </Link>
          <Link href="/analysis/the-aftermath" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">The Aftermath</h3>
            <p className="text-sm text-stone-500">Wars don&apos;t end when the troops come home.</p>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
