import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'
import RelatedArticles from '@/components/RelatedArticles'

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
  { substance: 'Asbestos insulation', toxins: 'Asbestos fibers', health: 'Mesothelioma, lung cancer' },
  { substance: 'Chemical weapons stockpiles', toxins: 'Mustard gas, nerve agents', health: 'Neurological damage, cancers' },
  { substance: 'Contaminated soil and debris', toxins: 'Heavy metals, radioactive particles', health: 'Multiple organ damage' },
]

const nuclearTestSites = [
  { location: 'Marshall Islands (Bikini Atoll)', tests: 67, yield: '108 Mt total', status: 'Uninhabitable. Radiation persists. Marshallese diaspora.', compensation: '$150M (far below damage)' },
  { location: 'Nevada Test Site', tests: 928, yield: '~1 Mt total', status: '340,000+ "downwinders" exposed. Cancer clusters documented.', compensation: '$2.4B (RECA - expired 2024)' },
  { location: 'Johnston Atoll', tests: 12, yield: 'Various', status: 'Agent Orange and nuclear waste stored. Contamination ongoing.', compensation: '$0' },
  { location: 'Amchitka, Alaska', tests: 3, yield: '5 Mt', status: 'Radioactive contamination of marine ecosystem.', compensation: 'Minimal' },
  { location: 'Christmas Island', tests: 24, yield: 'Various', status: 'British tests with US support. Veterans denied compensation.', compensation: '$0 (US), limited (UK)' },
  { location: 'Atmospheric tests (Pacific)', tests: 215, yield: '153 Mt total', status: 'Global fallout contamination. Strontium-90 in milk worldwide.', compensation: 'None' },
]

const superfundSites = [
  { base: 'McClellan Air Force Base, CA', contaminant: 'TCE, PCE, heavy metals', cleanup: '$2.1B', status: 'Ongoing since 1987. Groundwater still contaminated.' },
  { base: 'Naval Weapons Station Concord, CA', contaminant: 'Heavy metals, explosives', cleanup: '$500M+', status: 'Soil contamination persists. Community health concerns.' },
  { base: 'Camp Lejeune, NC', contaminant: 'TCE, PCE, benzene', cleanup: '$2.2B', status: '35 years of exposure. 1M people affected. Cleanup ongoing.' },
  { base: 'Fort Ord, CA', contaminant: 'Explosives, heavy metals', cleanup: '$500M', status: 'Unexploded ordnance remains. Restricted land use.' },
  { base: 'Lowry Air Force Base, CO', contaminant: 'TCE, jet fuel, heavy metals', cleanup: '$300M+', status: 'Residential development on contaminated land.' },
  { base: 'Hanscom Air Force Base, MA', contaminant: 'PFAS, jet fuel, solvents', cleanup: '$250M+', status: 'PFAS plume affecting nearby communities.' },
  { base: 'Naval Air Station Alameda, CA', contaminant: 'PCE, heavy metals, fuel', cleanup: '$1B+', status: 'Partial cleanup. Developer liability questions.' },
  { base: 'Robins Air Force Base, GA', contaminant: 'TCE, PCE, heavy metals', cleanup: '$400M+', status: 'Largest groundwater contamination plume in Georgia.' },
]

const pfasContamination = [
  { location: 'Widespread military bases', sites: '385+ bases', level: 'Exceeds EPA health advisory', impact: 'Cancer, liver damage, immune system effects', cost: '$39B estimated cleanup' },
  { location: 'Pease Air Force Base, NH', sites: '1 base', level: '1,590 ppt (EPA advisory: 70 ppt)', impact: 'Community water supply contaminated', cost: '$200M+' },
  { location: 'Warminster, PA (Naval Air Warfare Center)', sites: '1 base', level: '4,360 ppt total PFAS', impact: '70,000+ residents affected', cost: '$150M+' },
  { location: 'Colorado Springs, CO (Air Force Academy)', sites: '1 base', level: '1,000+ ppt in groundwater', impact: 'Fountain creek contamination', cost: '$100M+' },
  { location: 'Tucson, AZ (Davis-Monthan AFB)', sites: '1 base', level: '3,400 ppt in wells', impact: 'Municipal water supply threatened', cost: '$50M+' },
  { location: 'Oscoda, MI (former Wurtsmith AFB)', sites: '1 base', level: '85,000 ppt (1,200x EPA limit)', impact: 'Entire community affected', cost: '$300M+' },
]

const militaryEmissions = [
  { category: 'Total US Military', emissions: '59 Mt CO2e annually', comparison: 'Larger than 140 countries', detail: 'Includes operations, facilities, supply chain' },
  { category: 'US Air Force', emissions: '25.3 Mt CO2e', comparison: 'Larger than Denmark', detail: 'Jet fuel accounts for 86% of emissions' },
  { category: 'US Navy', emissions: '15.8 Mt CO2e', comparison: 'Larger than Norway', detail: 'Ships and aviation fuel primary sources' },
  { category: 'US Army', emissions: '12.4 Mt CO2e', comparison: 'Larger than Finland', detail: 'Diesel fuel and facilities' },
  { category: 'Single B-52 bomber', emissions: '21 tons CO2/hour', comparison: 'Average US home: 16 tons/year', detail: '3,334 gallons fuel/hour' },
  { category: 'Aircraft carrier', emissions: '5,200 tons CO2/day', comparison: 'Small city', detail: '100,000 gallons fuel/day' },
  { category: 'F-35 fighter jet', emissions: '28 tons CO2/hour', comparison: '1.8 average cars/year', detail: '5,600 lbs fuel/hour' },
]

const agentOrangeLegacy = [
  { country: 'Vietnam', affected: '3M+ people', compensation: '$0 from US', detail: 'Dioxin contamination persists at former US bases. 3rd generation birth defects documented.' },
  { country: 'United States', affected: '300K+ veterans', compensation: '$13.7B paid', detail: 'VA recognizes 14 Agent Orange diseases. Veterans\' children also affected.' },
  { country: 'Laos', affected: '50K+ estimated', compensation: '$0', detail: 'Secret bombing campaign. Agent Orange use denied until 2013.' },
  { country: 'Cambodia', affected: '10K+ estimated', compensation: '$0', detail: 'Border spraying operations. Minimal documentation of health effects.' },
  { country: 'South Korea (DMZ)', affected: '20K+ veterans', compensation: 'Ongoing litigation', detail: 'Agent Orange used along DMZ. South Korean and US veteran claims.' },
  { country: 'Thailand', affected: 'Unknown', compensation: '$0', detail: 'Herbicide testing at military bases. Thai workers exposed.' },
]

const depletedUraniumImpact = [
  { conflict: '1991 Gulf War', amount: '300 tonnes DU fired', affected: '250K+ veterans (Gulf War Syndrome)', detail: 'Tank busters, bunker penetrators. DU dust inhalation.' },
  { conflict: '1999 Kosovo/Serbia', amount: '10 tonnes DU fired', affected: 'NATO peacekeepers, civilians', detail: 'A-10 aircraft DU rounds. Italian soldiers\' cancer cluster.' },
  { conflict: '2003 Iraq War', amount: '170 tonnes DU fired', affected: 'Unknown civilian count', detail: 'Urban warfare. Fallujah cancer rates 38x normal leukemia.' },
  { conflict: 'Afghanistan', amount: 'Unknown amounts', affected: 'Veterans, civilians', detail: 'DU use acknowledged but amounts classified.' },
]

const cleanupCosts = [
  { category: 'Nuclear weapons sites cleanup', cost: '$109B spent since 1989', remaining: '$377B needed', timeframe: '75+ years remaining', details: 'Hanford, Savannah River, Rocky Flats, Los Alamos. Most expensive environmental cleanup in history.' },
  { category: 'PFAS remediation (military)', cost: '$39B estimated total', remaining: 'Most unspent', timeframe: 'Decades', details: '385+ bases contaminated. No proven cleanup technology for groundwater.' },
  { category: 'Superfund military sites', cost: '$20B+ spent', remaining: '$30B+ estimated', timeframe: 'Ongoing', details: '141 military sites on NPL. Average 30+ years per site.' },
  { category: 'Unexploded ordnance removal', cost: '$4.7B (2010-2020)', remaining: 'Unknown billions', timeframe: 'Century+', details: '15M acres of US land contaminated. 36M munitions estimated.' },
  { category: 'Agent Orange cleanup (Vietnam)', cost: '$500M+ pledged', remaining: 'Billions needed', timeframe: 'Ongoing', details: 'Dioxin cleanup at former US bases. 60+ years after spraying.' },
  { category: 'Base closure environmental', cost: '$25B+ (1988-2005)', remaining: '$15B+ estimated', timeframe: '20+ years', details: 'BRAC cleanup. Many bases still contaminated decades later.' },
]

export default function EnvironmentalCostPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd
        title="The Environmental Cost of War: Burn Pits, Depleted Uranium & the Pentagon's Toxic Legacy"
        description="3.5M veterans exposed to burn pits. Depleted uranium in Iraq. Agent Orange still killing in Vietnam. The Pentagon is the world's largest institutional polluter."
        slug="environmental-cost"
      />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Environmental Cost' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">In-Depth Analysis</p>
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

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '3.5M', label: 'Veterans Exposed to Burn Pits', sub: 'At 230+ locations worldwide' },
          { val: '385', label: 'Bases with PFAS Contamination', sub: '"Forever chemicals" in groundwater' },
          { val: '141', label: 'Military Superfund Sites', sub: 'More than any other entity' },
          { val: '$663B', label: 'Environmental Cleanup Costs', sub: 'Spent and estimated remaining' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Key Findings */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-3">Key Findings</h2>
        <div className="grid md:grid-cols-2 gap-4 text-stone-300">
          <ul className="space-y-2">
            <li>• <strong className="text-white">3.5 million veterans</strong> exposed to burn pits at 230+ locations</li>
            <li>• <strong className="text-white">385 US military bases</strong> contaminated with PFAS "forever chemicals"</li>
            <li>• <strong className="text-white">1 million people</strong> poisoned at Camp Lejeune for 35 years</li>
            <li>• <strong className="text-white">20 million gallons</strong> of Agent Orange sprayed — effects persist 60+ years</li>
            <li>• <strong className="text-white">1,032 nuclear tests</strong> contaminating sites from Nevada to Marshall Islands</li>
          </ul>
          <ul className="space-y-2">
            <li>• <strong className="text-white">59 million tonnes CO₂</strong> annually — larger than 140 countries</li>
            <li>• <strong className="text-white">470 tonnes depleted uranium</strong> fired in Iraq — radioactive battlefields</li>
            <li>• <strong className="text-white">141 military Superfund sites</strong> — average 30+ years to clean</li>
            <li>• <strong className="text-white">$663B total cleanup costs</strong> — most expensive in history</li>
            <li>• <strong className="text-white">15 million acres</strong> of US land contaminated with unexploded ordnance</li>
          </ul>
        </div>
      </div>

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

        <div className="bg-stone-50 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-stone-900 mb-2">The Scale of Exposure</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-700">230+</p>
              <p className="text-sm text-stone-600">Burn pit locations</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-700">3.5M</p>
              <p className="text-sm text-stone-600">Veterans exposed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-700">18 Years</p>
              <p className="text-sm text-stone-600">Duration (2001-2019)</p>
            </div>
          </div>
        </div>

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
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Joint Base Balad: "Mortaritaville"</h3>
          <p className="text-stone-700 mb-3">
            The burn pit at Joint Base Balad (also called Logistics Support Area Anaconda) was the size of 
            <strong>10 acres</strong> — roughly 8 football fields. It burned 24/7 from 2003 to 2011. At peak, 
            <strong>25,000 service members</strong> were stationed there. The base was nicknamed "Mortaritaville" 
            because of frequent mortar attacks, but the burn pit may have been deadlier than enemy fire.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">Daily Burn Volume</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• <strong>200+ tons</strong> of waste burned daily</li>
                <li>• Medical waste from combat casualties</li>
                <li>• 100+ vehicles and aircraft parts monthly</li>
                <li>• Thousands of batteries and electronics</li>
                <li>• Human waste from 25,000 people</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Wind Patterns</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Prevailing winds carried smoke across base</li>
                <li>• Living areas directly downwind</li>
                <li>• Dining facilities affected daily</li>
                <li>• Physical training areas in smoke path</li>
                <li>• No air quality monitoring until 2006</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm">
            KBR (Kellogg Brown &amp; Root) operated the burn pit under a $39.5 billion logistics contract. 
            Internal emails later revealed KBR employees complained about health effects but were told to 
            keep burning. The Pentagon knew building incinerators would reduce emissions but never funded them.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The PACT Act: Too Little, Too Late</h3>
          <p className="text-stone-700 mb-3">
            The Sergeant First Class Heath Robinson Honoring our Promise to Address Comprehensive Toxics (PACT) Act 
            was signed in August 2022 — more than <strong>21 years</strong> after burn pit exposure began. The bill 
            was named after a veteran who died of stage 4 cancer at age 39 after multiple deployments to Iraq.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">Before PACT Act</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• <strong>70% denial rate</strong> for burn pit claims</li>
                <li>• Veterans required to prove direct causation</li>
                <li>• No military records of exposure kept</li>
                <li>• Average claim processing: 4+ years</li>
                <li>• Thousands died waiting for approval</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">After PACT Act</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Presumptive conditions for 23 diseases</li>
                <li>• Automatic eligibility for exposed veterans</li>
                <li>• $280B in benefits over 10 years</li>
                <li>• 1M+ veterans newly eligible</li>
                <li>• Still processing backlog of old claims</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm">
            The law only covers US veterans. Iraqi and Afghan civilians who lived near burn pits for years 
            — including children who played in the smoke — have no recourse. The law also doesn't cover 
            contractors, including many KBR employees who operated the pits.
          </p>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">KBR &amp; Halliburton: Paid to Poison</h3>
          <p className="text-stone-300 mb-3">
            KBR (Kellogg, Brown &amp; Root), a subsidiary of Halliburton, received <strong>$39.5 billion</strong> 
            in LOGCAP (Logistics Civil Augmentation Program) contracts. Dick Cheney was Halliburton's CEO 
            from 1995-2000 before becoming Vice President. KBR's profits from the Iraq War: <strong>$2.3 billion</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-stone-300">
            <div>
              <h4 className="font-semibold mb-2 text-white">The Business Model</h4>
              <ul className="space-y-1 text-sm">
                <li>• Cost-plus contracts: more spending = more profit</li>
                <li>• Burn pits cheaper than building incinerators</li>
                <li>• No liability for health effects (government contractor defense)</li>
                <li>• No requirement to track exposures</li>
                <li>• No EPA oversight in war zones</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">The Legal Shield</h4>
              <ul className="space-y-1 text-sm">
                <li>• Government contractor immunity defense</li>
                <li>• Veterans' lawsuits dismissed (2013)</li>
                <li>• Feres doctrine bars military personnel lawsuits</li>
                <li>• Political question doctrine cited</li>
                <li>• No criminal charges filed</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-300 text-sm">
            When veterans sued KBR for knowingly exposing them to toxic burn pit smoke, federal courts 
            dismissed the cases. KBR argued it was following government directions and couldn't be held liable. 
            The company made billions; veterans got cancer. The system worked perfectly — for KBR.
          </p>
        </div>
      </section>

      {/* Section: PFAS Contamination */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          PFAS: Forever Chemicals at Forever Bases
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Per- and polyfluoroalkyl substances (PFAS) are called "forever chemicals" because they don't break 
          down naturally. The military has used PFAS-based firefighting foam at <strong>385+ bases</strong> 
          since the 1970s. The contamination has spread to groundwater, drinking water, and the blood of 
          nearby residents. Cleanup costs are estimated at <strong>$39 billion</strong> — and rising.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left">Sites Affected</th>
                <th className="px-4 py-3 text-left">Contamination Level</th>
                <th className="px-4 py-3 text-left">Health Impact</th>
                <th className="px-4 py-3 text-left">Cleanup Cost</th>
              </tr>
            </thead>
            <tbody>
              {pfasContamination.map((row, index) => (
                <tr key={index} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.location}</td>
                  <td className="px-4 py-3">{row.sites}</td>
                  <td className="px-4 py-3 text-red-800 font-medium">{row.level}</td>
                  <td className="px-4 py-3 text-sm">{row.impact}</td>
                  <td className="px-4 py-3 text-sm font-semibold">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Oscoda, Michigan: The Worst Case</h3>
          <p className="text-stone-700 mb-3">
            The former Wurtsmith Air Force Base in Oscoda, Michigan closed in 1993. The PFAS contamination 
            discovered there is <strong>1,200 times</strong> the EPA health advisory level. The entire 
            community of 6,500 people has been affected. Wells test at <strong>85,000 ppt</strong> for PFAS 
            — making it one of the most contaminated sites on Earth.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">The Contamination</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• KC-135 tanker aircraft based there (1959-1993)</li>
                <li>• PFAS foam used for fuel fire training</li>
                <li>• Contamination spread through Au Sable River</li>
                <li>• Fish consumption advisories issued</li>
                <li>• Groundwater plume expanding</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">The Health Crisis</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Elevated cancer rates in community</li>
                <li>• Children with learning disabilities</li>
                <li>• Immune system suppression</li>
                <li>• Liver damage cases</li>
                <li>• Property values collapsed</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm">
            The Air Force knew about PFAS contamination in the 1990s but didn't inform the community until 
            2010. Residents drank contaminated water for 20+ years. The cleanup is expected to take decades 
            and cost $300+ million — if cleanup technology even works.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Cleanup Problem</h3>
          <p className="text-stone-700 mb-3">
            PFAS chemicals are virtually indestructible. They don't biodegrade, don't break down with heat 
            or chemicals, and bioaccumulate in living tissue. Current "cleanup" methods mostly move PFAS 
            around rather than destroying it:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Pump &amp; Treat</h4>
              <p className="text-sm text-stone-700 mb-2">
                Pump contaminated groundwater, filter out PFAS, reinject clean water. But PFAS-loaded 
                filters must be disposed of — usually incineration at 1,000°C+.
              </p>
              <p className="text-xs text-stone-500"><strong>Cost:</strong> $5-50M per site. <strong>Time:</strong> Decades</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Soil Excavation</h4>
              <p className="text-sm text-stone-700 mb-2">
                Remove contaminated soil and dispose in hazardous waste landfills. But PFAS can leach 
                from landfills into groundwater elsewhere.
              </p>
              <p className="text-xs text-stone-500"><strong>Cost:</strong> $1-10M per acre. <strong>Problem:</strong> Just moves it</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Containment</h4>
              <p className="text-sm text-stone-700 mb-2">
                Build barriers to prevent PFAS migration. Doesn't remove contamination but limits spread. 
                Requires perpetual monitoring.
              </p>
              <p className="text-xs text-stone-500"><strong>Cost:</strong> $1-5M per site. <strong>Duration:</strong> Forever</p>
            </div>
          </div>
          <p className="text-stone-700 text-sm mt-3">
            The Pentagon's own estimate: <strong>$39 billion</strong> to clean up PFAS at all contaminated bases. 
            But that assumes cleanup technology works — which it often doesn't. The real cost could be double.
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

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Country</th>
                <th className="px-4 py-3 text-left">People Affected</th>
                <th className="px-4 py-3 text-left">US Compensation</th>
                <th className="px-4 py-3 text-left">Current Status</th>
              </tr>
            </thead>
            <tbody>
              {agentOrangeLegacy.map((row) => (
                <tr key={row.country} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.country}</td>
                  <td className="px-4 py-3">{row.affected}</td>
                  <td className="px-4 py-3 text-red-800 font-medium">{row.compensation}</td>
                  <td className="px-4 py-3 text-sm">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Bien Hoa Air Base: The Most Contaminated Spot on Earth</h3>
          <p className="text-stone-700 mb-3">
            Bien Hoa Air Base, 20 miles northeast of Ho Chi Minh City, was the main storage and mixing site 
            for Agent Orange during the Vietnam War. Dioxin levels in the soil are <strong>365 times</strong> 
            the international safety standard — making it one of the most toxic places on Earth.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">The Contamination</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• 80+ million liters of herbicide stored</li>
                <li>• Spills and leaks contaminated 500+ acres</li>
                <li>• Dioxin levels: 365x WHO safe limit</li>
                <li>• Contamination depth: 4+ meters underground</li>
                <li>• Affects Dong Nai River system</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">The Human Cost</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• 500,000+ people in contaminated area</li>
                <li>• Birth defects in 3rd generation</li>
                <li>• 5,000+ families directly affected</li>
                <li>• Fish and vegetables still contaminated</li>
                <li>• Cancer clusters documented</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm">
            The US has pledged $500 million for Agent Orange cleanup in Vietnam — spread over decades. 
            Cleanup at Bien Hoa alone will cost $265 million and take 10+ years. Meanwhile, Vietnamese 
            children are still being born with Agent Orange-related birth defects 60+ years later.
          </p>
        </div>

        <div className="bg-red-950/10 border border-red-200 rounded-lg p-6 my-6">
          <h3 className="font-bold text-red-800 text-lg mb-2">The Monsanto Papers</h3>
          <p className="text-stone-700 mb-3">
            Internal Monsanto documents revealed the company knew Agent Orange contained dangerous levels 
            of dioxin but hid this from the government and public. A 1965 Monsanto memo stated: 
            "We are not making sales to the government on the basis of their specifications. We are making 
            sales to the government on the basis of what we can manufacture."
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• Monsanto knew dioxin caused birth defects in animals (1965)</li>
            <li>• Company hid chloracne cases in its own workers</li>
            <li>• Internal studies showed liver damage, immune suppression</li>
            <li>• Monsanto argued herbicides were safe for military use</li>
            <li>• Documents only released during litigation in 1980s</li>
          </ul>
          <p className="text-stone-700 text-sm mt-3">
            Monsanto and other chemical companies settled with US veterans for $180 million in 1984 — 
            roughly $70 per affected veteran. Vietnamese victims received nothing and have been denied 
            standing in US courts.
          </p>
        </div>
      </section>

      {/* Section: Depleted Uranium */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Depleted Uranium: Radioactive Battlefields
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The US military has fired an estimated <strong>470 tonnes</strong> of depleted uranium (DU) ammunition 
          in conflicts since 1991. DU is 40% less radioactive than natural uranium but 1.7 times denser than lead, 
          making it ideal for armor-piercing rounds. When DU impacts armor, it creates radioactive dust that can 
          be inhaled, creating internal radiation exposure.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Conflict</th>
                <th className="px-4 py-3 text-left">DU Amount</th>
                <th className="px-4 py-3 text-left">People Affected</th>
                <th className="px-4 py-3 text-left">Health Impact</th>
              </tr>
            </thead>
            <tbody>
              {depletedUraniumImpact.map((row) => (
                <tr key={row.conflict} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.conflict}</td>
                  <td className="px-4 py-3 text-red-800 font-medium">{row.amount}</td>
                  <td className="px-4 py-3">{row.affected}</td>
                  <td className="px-4 py-3 text-sm">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Fallujah: The Cancer Capital of Iraq</h3>
          <p className="text-stone-700 mb-3">
            After the two US sieges of Fallujah in 2004, researchers documented dramatic increases in cancer, 
            birth defects, and infant mortality. A 2010 study found cancer rates <strong>38 times higher</strong> 
            than normal for leukemia, and birth defect rates <strong>14 times</strong> the normal rate.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">Cancer Increases</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Leukemia: <strong>38x normal</strong></li>
                <li>• Breast cancer: <strong>10x normal</strong></li>
                <li>• Brain tumors: <strong>7x normal</strong></li>
                <li>• Lymphoma: <strong>9x normal</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Birth Defects</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Spina bifida</li>
                <li>• Heart defects</li>
                <li>• Limb deformities</li>
                <li>• Neurological disorders</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Infant Mortality</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• <strong>80/1,000 births</strong> (2005-2010)</li>
                <li>• Higher than Hiroshima/Nagasaki</li>
                <li>• Sex ratio skewed toward girls</li>
                <li>• Stillbirth rates elevated</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm">
            The Pentagon denies any link between DU and health effects, citing a 2013 WHO study that found 
            "no clear increase in birth defects." However, the WHO study excluded the most affected neighborhoods 
            and relied on hospital records in a city where most births happen at home due to security concerns.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Gulf War Syndrome: The Cover-Up</h3>
          <p className="text-stone-700 mb-3">
            Of the 700,000 US troops who served in the 1991 Gulf War, approximately <strong>250,000</strong> — 
            more than one-third — report chronic health problems collectively known as Gulf War Syndrome. 
            For decades, the Pentagon and VA claimed the symptoms were psychological.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">The Symptoms</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Chronic fatigue syndrome</li>
                <li>• Fibromyalgia and joint pain</li>
                <li>• Cognitive dysfunction ("brain fog")</li>
                <li>• Skin rashes and respiratory issues</li>
                <li>• Gastrointestinal disorders</li>
                <li>• Sleep disturbances</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Suspected Causes</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Depleted uranium dust inhalation</li>
                <li>• Oil well fire smoke exposure</li>
                <li>• Nerve agent exposure (Khamisiyah depot)</li>
                <li>• Pesticide overuse (DEET, permethrin)</li>
                <li>• Pyridostigmine bromide pills (nerve agent protection)</li>
                <li>• Multiple chemical sensitivity</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm">
            A 2008 congressional report finally acknowledged Gulf War Syndrome as a real condition caused by 
            toxic exposures. But by then, thousands of veterans had died without receiving proper care. 
            The VA continues to classify many cases as "undiagnosed illness" with reduced disability ratings.
          </p>
        </div>
      </section>

      {/* Section: Military as Climate Polluter */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The World&apos;s Largest Polluter
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The US Department of Defense is the world&apos;s largest institutional consumer of fossil fuels and 
          producer of greenhouse gases. If the US military were a country, it would be the <strong>55th largest 
          emitter</strong> in the world — larger than Portugal, Sweden, or Denmark.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Military Branch/Platform</th>
                <th className="px-4 py-3 text-left">Annual Emissions</th>
                <th className="px-4 py-3 text-left">Comparison</th>
                <th className="px-4 py-3 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {militaryEmissions.map((row) => (
                <tr key={row.category} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.category}</td>
                  <td className="px-4 py-3 text-red-800 font-bold">{row.emissions}</td>
                  <td className="px-4 py-3">{row.comparison}</td>
                  <td className="px-4 py-3 text-sm">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Exempted from Climate Agreements</h3>
          <p className="text-stone-300 mb-3">
            At US insistence, military emissions were <strong>exempted from the Kyoto Protocol</strong> (1997). 
            The Pentagon argued that climate restrictions would compromise "national security." While the Paris 
            Agreement (2015) technically includes military emissions, reporting is voluntary — and the US does 
            not fully report.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-stone-300">
            <div>
              <h4 className="font-semibold mb-2 text-white">Hidden Emissions</h4>
              <ul className="space-y-1 text-sm">
                <li>• War-related emissions not counted in national totals</li>
                <li>• Overseas base emissions often unreported</li>
                <li>• Contractor emissions excluded</li>
                <li>• Supply chain emissions ignored</li>
                <li>• Weapons manufacturing emissions separate</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">Climate Hypocrisy</h4>
              <ul className="space-y-1 text-sm">
                <li>• Pentagon calls climate change a "threat multiplier"</li>
                <li>• Military bases affected by sea level rise</li>
                <li>• Climate refugees create security challenges</li>
                <li>• Yet military exempt from emissions limits</li>
                <li>• Biofuel programs greenwash massive emissions</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-300 text-sm">
            Brown University researchers estimate the US military's total carbon footprint at approximately 
            <strong>59 million tonnes of CO₂ equivalent per year</strong> — and that's just direct emissions. 
            Including the full supply chain (weapons manufacturing, military construction, war-induced emissions), 
            the total could exceed 100 million tonnes annually.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Cost of Moving the Military</h3>
          <p className="text-stone-700 mb-3">
            The Pentagon uses <strong>100 million barrels of oil per year</strong> — more than the entire 
            country of Greece. Transportation accounts for 70% of military energy use, with aviation fuel 
            being the largest component.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">By Platform</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Aircraft: <strong>75%</strong> of fuel use</li>
                <li>• Ships: <strong>15%</strong> of fuel use</li>
                <li>• Ground vehicles: <strong>10%</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Fuel Intensity</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• B-52: 3,334 gal/hour</li>
                <li>• F-16: 800 gal/hour</li>
                <li>• KC-135 tanker: 2,650 gal/hour</li>
                <li>• Aircraft carrier: 100,000 gal/day</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">War Logistics</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Iraq/Afghanistan: 22 gallons fuel per soldier per day</li>
                <li>• WWII: 1 gallon fuel per soldier per day</li>
                <li>• Modern warfare 22x more fuel-intensive</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm mt-3">
            The Pentagon's fuel bill: <strong>$17+ billion annually</strong>. That's more than the entire 
            budget of many federal agencies. And it doesn't count the environmental cost of burning all that fuel.
          </p>
        </div>
      </section>

      {/* Section: Superfund Sites */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Military Superfund Sites: America&apos;s Most Polluted Places
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The military has more sites on the EPA's Superfund list than any other entity — <strong>141 sites</strong> 
          and counting. These are places so contaminated they pose an imminent threat to human health and the 
          environment. The average Superfund site takes 30+ years to clean up.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Base</th>
                <th className="px-4 py-3 text-left">Primary Contaminant</th>
                <th className="px-4 py-3 text-left">Cleanup Cost</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {superfundSites.map((row) => (
                <tr key={row.base} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.base}</td>
                  <td className="px-4 py-3 text-red-800">{row.contaminant}</td>
                  <td className="px-4 py-3 font-semibold">{row.cleanup}</td>
                  <td className="px-4 py-3 text-sm">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Camp Lejeune: Poisoning Our Own</h3>
          <p className="text-stone-700 mb-3">
            From 1953 to 1987 — <strong>34 years</strong> — the drinking water at Marine Corps Base Camp Lejeune 
            was contaminated with industrial solvents at levels up to <strong>3,400 times</strong> the safe limit. 
            An estimated <strong>1 million people</strong> were exposed, including pregnant women and children.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">What Was in the Water</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• <strong>Trichloroethylene (TCE):</strong> 3,400x safe levels</li>
                <li>• <strong>Perchloroethylene (PCE):</strong> 40x safe levels</li>
                <li>• <strong>Benzene:</strong> Known carcinogen from fuel leaks</li>
                <li>• <strong>Vinyl chloride:</strong> TCE breakdown product</li>
                <li>• Source: On-base dry cleaner dumping solvents</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">The Cover-Up Timeline</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• <strong>1980:</strong> Marine Corps knew about contamination</li>
                <li>• <strong>1985:</strong> Wells finally closed (5 years later)</li>
                <li>• <strong>1999:</strong> Families notified (19 years later)</li>
                <li>• <strong>2022:</strong> Camp Lejeune Justice Act passed</li>
                <li>• <strong>2024:</strong> &gt;300,000 claims filed</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm">
            Marine Jerry Ensminger fought for justice after his daughter Janey died of leukemia at age 9. 
            It took him 25 years to get the government to admit responsibility. As of 2024, over 300,000 
            claims have been filed under the Camp Lejeune Justice Act. Fewer than 1,000 have been paid.
          </p>
        </div>
      </section>

      {/* Section: Nuclear Testing Legacy */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Nuclear Testing: Sacrificed Lands, Sacrificed People
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The United States conducted <strong>1,032 nuclear tests</strong> between 1945 and 1992. The fallout 
          contaminated vast areas of the Pacific, the American West, and Alaska. The communities affected were 
          disproportionately indigenous and Pacific Islander — people with the least political power to resist.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-right">Tests</th>
                <th className="px-4 py-3 text-left">Total Yield</th>
                <th className="px-4 py-3 text-left">Current Status</th>
                <th className="px-4 py-3 text-left">Compensation</th>
              </tr>
            </thead>
            <tbody>
              {nuclearTestSites.map((row) => (
                <tr key={row.location} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.location}</td>
                  <td className="px-4 py-3 text-right font-bold text-red-700">{row.tests}</td>
                  <td className="px-4 py-3">{row.yield}</td>
                  <td className="px-4 py-3 text-sm">{row.status}</td>
                  <td className="px-4 py-3 text-sm">{row.compensation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Marshall Islands: America&apos;s Nuclear Colony</h3>
          <p className="text-stone-700 mb-3">
            The Marshall Islands bore the brunt of US nuclear testing. Between 1946 and 1958, the US detonated 
            <strong>67 nuclear weapons</strong> there — equivalent to 1.6 Hiroshima bombs <strong>every day 
            for 12 years</strong>. The Castle Bravo test (1954) was 1,000 times more powerful than Hiroshima.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">The Devastation</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Bikini Atoll: permanently uninhabitable</li>
                <li>• Enewetak Atoll: partially cleaned, still restricted</li>
                <li>• Rongelap: evacuated, some resettlement</li>
                <li>• Utrik: exposed to fallout, health monitoring</li>
                <li>• 23 atolls contaminated to some degree</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">The Human Cost</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Thyroid cancer: 100x global average</li>
                <li>• "Jellyfish babies": translucent, boneless births</li>
                <li>• Forced relocation of entire communities</li>
                <li>• Loss of traditional fishing/farming</li>
                <li>• Cultural destruction of island peoples</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm mb-3">
            The US paid <strong>$150 million</strong> total compensation to the Marshall Islands — for the 
            permanent destruction of an entire nation's homeland. The Marshallese government estimates actual 
            damages at <strong>$3.4 billion</strong>.
          </p>
          <p className="text-stone-700 text-sm">
            The Runit Dome — a concrete cap containing 111,000 cubic yards of radioactive soil — is now 
            cracking due to climate change and rising seas. The very environmental crisis partly caused by 
            US emissions is now threatening to release stored nuclear waste into the Pacific Ocean.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Downwinders: Irradiating Americans</h3>
          <p className="text-stone-700 mb-3">
            Atmospheric nuclear testing at the Nevada Test Site sent radioactive fallout across Utah, Nevada, 
            and Arizona. The 928 tests exposed an estimated <strong>340,000 "downwinders"</strong> to significant 
            radiation. They were mostly rural, mostly Mormon, and trusted their government. That trust was betrayed.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">The Deception</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• AEC claimed tests were "safe"</li>
                <li>• Radiation monitors showed dangerous levels</li>
                <li>• Public health officials told not to warn residents</li>
                <li>• Sheep deaths blamed on "malnutrition"</li>
                <li>• Cancer clusters dismissed as coincidence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">The Health Crisis</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Thyroid cancer rates 7x national average</li>
                <li>• Leukemia clusters in children</li>
                <li>• Breast cancer epidemics</li>
                <li>• Multiple cancer families common</li>
                <li>• Birth defects in livestock and humans</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm">
            The Radiation Exposure Compensation Act (RECA) was finally passed in 1990 — but payments were 
            limited to $50,000 and covered only specific counties. The act expired in June 2024 after Congress 
            failed to reauthorize an expanded version. Thousands of downwinders died waiting for justice.
          </p>
        </div>
      </section>

      {/* Section: Cleanup Costs */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Bill Comes Due: Environmental Cleanup Costs
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Environmental cleanup is the bill for decades of military pollution. The Pentagon has spent over 
          <strong>$200 billion</strong> on environmental remediation since 1975 — and estimates suggest 
          <strong>$400+ billion</strong> more is needed. This is the most expensive environmental cleanup 
          in human history.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Spent</th>
                <th className="px-4 py-3 text-left">Remaining</th>
                <th className="px-4 py-3 text-left">Timeline</th>
                <th className="px-4 py-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {cleanupCosts.map((row) => (
                <tr key={row.category} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.category}</td>
                  <td className="px-4 py-3 text-green-700 font-semibold">{row.cost}</td>
                  <td className="px-4 py-3 text-red-700 font-semibold">{row.remaining}</td>
                  <td className="px-4 py-3">{row.timeframe}</td>
                  <td className="px-4 py-3 text-sm">{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Hanford Nuclear Reservation: America&apos;s Chernobyl</h3>
          <p className="text-stone-700 mb-3">
            The Hanford Nuclear Reservation in Washington state produced plutonium for nuclear weapons from 
            1943-1987. It's now the most contaminated site in the Western Hemisphere. Cleanup costs have 
            reached <strong>$124 billion</strong> and are projected to reach <strong>$300+ billion</strong> 
            over 75 years.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">The Contamination</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• 53 million gallons of radioactive waste</li>
                <li>• 80 square miles of contaminated groundwater</li>
                <li>• Contamination reaching Columbia River</li>
                <li>• 149 single-shell tanks leaking</li>
                <li>• Some waste remains dangerous for 10,000+ years</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">The Challenge</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• No proven technology for some waste types</li>
                <li>• Waste treatment plant 20+ years behind schedule</li>
                <li>• Cost overruns in billions annually</li>
                <li>• Worker safety concerns</li>
                <li>• Political battles over cleanup standards</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm">
            Hanford employed 50,000+ people at its peak. The Columbia River was knowingly contaminated with 
            radioactive materials for decades. Cancer clusters appeared in downstream communities, but the 
            connection was denied for years. Cleanup will continue into the 22nd century.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-800 mb-2">The Economics of Environmental Destruction</h3>
          <p className="text-stone-800 text-sm mb-3">
            Environmental cleanup costs are never included in war budgets. They're externalized — pushed 
            onto future generations, local communities, and the environment itself. Consider the economics:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• <strong>Prevention cost:</strong> Building proper waste disposal facilities would have cost millions</li>
            <li>• <strong>Cleanup cost:</strong> Environmental remediation costs billions</li>
            <li>• <strong>Health cost:</strong> Medical care for affected populations costs billions more</li>
            <li>• <strong>Lost productivity:</strong> Sick veterans and civilians can't work</li>
            <li>• <strong>Property damage:</strong> Contaminated land loses value permanently</li>
            <li>• <strong>Litigation cost:</strong> Legal battles cost hundreds of millions</li>
          </ul>
          <p className="text-stone-800 text-sm mt-3">
            The Pentagon privatizes the profits (through contractors) and socializes the costs (through 
            taxpayer-funded cleanup). It's the ultimate moral hazard: those who profit from environmental 
            destruction don't pay for the consequences.
          </p>
        </div>
      </section>

      {/* Libertarian Analysis */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-900">
          The Libertarian Case: Environmental Destruction Is Aggression
        </h2>
        <div className="space-y-4 text-stone-700">
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Pollution Is Aggression</h3>
            <p className="text-sm">
              Murray Rothbard argued that pollution is a form of aggression — invading someone else's property 
              (their air, water, or land) without consent. The military has committed environmental aggression 
              on an unprecedented scale: poisoning veterans' lungs, contaminating communities' water, and 
              irradiating entire populations. This violates the non-aggression principle that libertarians 
              hold sacred.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Government Immunity From Liability</h3>
            <p className="text-sm">
              In a free market, companies that poison their customers go bankrupt. But the government exempts 
              itself from environmental liability. The Feres Doctrine bars military personnel from suing for 
              injuries. Government contractor immunity protects companies like KBR. Sovereign immunity shields 
              federal agencies. The normal market mechanisms that punish environmental destruction don't apply 
              to the military-industrial complex.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Moral Hazard and Externalized Costs</h3>
            <p className="text-sm">
              When costs are externalized, overconsumption is inevitable. The Pentagon burns 100 million barrels 
              of oil per year because it doesn't pay the environmental cost. Contractors use burn pits instead 
              of incinerators because they don't pay the health costs. The cleanup bill — $663+ billion and 
              counting — is paid by taxpayers, not the decision-makers who created the mess. This is moral hazard 
              at civilizational scale.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">The Knowledge Problem in Central Planning</h3>
            <p className="text-sm">
              Environmental protection requires local knowledge that central planners can't possess. Marshallese 
              islanders knew their atolls intimately — but weren't consulted before nuclear testing. Ranchers 
              downwind of Nevada knew their sheep were dying — but were ignored by AEC officials in Washington. 
              Local communities bear the environmental costs but have no voice in military decisions. This is 
              the knowledge problem inherent in all central planning.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Property Rights and Environmental Protection</h3>
            <p className="text-sm">
              The strongest environmental protection comes from clearly defined property rights. If landowners 
              owned the air above their property, they could sue polluters. If communities owned their groundwater, 
              they could prevent contamination. But the military operates on government land with government 
              immunity, creating a tragedy of the commons. The solution is privatization and strong liability 
              rules, not more regulations.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">War vs. Environment</h3>
            <p className="text-sm">
              Environmental destruction is inherent to war. You can't fight modern war without burning fossil 
              fuels, creating toxic waste, and destroying ecosystems. The Pentagon's attempts at "green war" 
              — solar panels on bases, biofuels for jets — are absurd window dressing. A B-52 burns 3,334 
              gallons per hour regardless of whether the fuel is petroleum or plant-based. The only truly 
              sustainable military is one that stays home.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Individual vs. Collective Rights</h3>
            <p className="text-sm">
              Environmental collectivism sacrifices individuals for abstract causes. Nuclear testing was 
              justified as "national security" — but the individuals who paid the price (Marshallese islanders, 
              American downwinders) never consented. Vietnamese peasants didn't consent to Agent Orange. Iraqi 
              children didn't consent to depleted uranium. Environmental protection means protecting individual 
              property rights, not subordinating individuals to collective goals.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">The Market Solution</h3>
            <p className="text-sm">
              Free markets internalize environmental costs through liability, insurance, and reputation. A 
              private military contractor that poisoned its own employees would lose customers and face unlimited 
              liability. But government contractors like KBR are shielded from consequences. The solution is 
              to end government immunity, allow unlimited liability for environmental damage, and let market 
              forces punish polluters. Environmental destruction stops when the destroyers pay the full cost.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-stone-300 text-lg mb-4">
            The Pentagon is the world&apos;s largest institutional polluter. It has contaminated 385 military 
            bases with forever chemicals that will persist for millennia. It poisoned 1 million people at 
            Camp Lejeune and hid it for decades. It exposed 3.5 million veterans to burn pits and denied 
            their claims for 20+ years. It sprayed 20 million gallons of Agent Orange in Vietnam and paid 
            zero compensation to Vietnamese victims.
          </p>
          <p className="text-stone-300 text-lg mb-4">
            The military has conducted 1,032 nuclear tests, turning entire Pacific atolls into uninhabitable 
            wastelands. It has fired 470 tonnes of depleted uranium ammunition, creating radioactive 
            battlefields from Iraq to Kosovo. It emits 59 million tonnes of CO₂ annually — more than 140 
            countries — while claiming exemption from climate agreements.
          </p>
          <p className="text-stone-300 text-lg mb-4">
            The environmental cost of war is never included in the Pentagon&apos;s budget. It&apos;s not in the 
            $886 billion Congress appropriates. It&apos;s not in the cost-of-war analyses. It&apos;s externalized 
            onto veterans, their families, local communities, and future generations who will inherit contaminated 
            land, poisoned water, and a destabilized climate.
          </p>
          <p className="text-stone-300 text-lg mb-4">
            Cleanup costs have already reached $200+ billion, with $400+ billion more needed. The Hanford 
            Nuclear Reservation alone will cost $300+ billion over 75 years. PFAS remediation could cost $39 
            billion — if the technology even works. Some contamination will persist for 10,000+ years.
          </p>
          <p className="text-stone-300 text-lg">
            War doesn&apos;t just destroy people and buildings. It destroys the land, the water, the air, and 
            the climate itself. The environmental cost of the military-industrial complex may be its most 
            enduring legacy — outlasting empires, outlasting governments, outlasting the civilizations that 
            created it.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <div className="bg-stone-50 rounded-xl border p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Sources &amp; Further Reading</h2>
          <div className="grid md:grid-cols-2 gap-4 text-stone-600 text-sm">
            <div>
              <h3 className="font-bold text-stone-800 mb-2">Government Reports &amp; Data</h3>
              <ul className="space-y-1">
                <li>• DoD, "Environmental Restoration Program Annual Report" (2024)</li>
                <li>• EPA, "Superfund National Priorities List — Federal Facilities"</li>
                <li>• GAO, "DOD PFAS Contamination at Military Installations" (2023)</li>
                <li>• VA, "Agent Orange Registry and Claims Data" (2024)</li>
                <li>• DOD Burn Pit Registry, "Airborne Hazards and Open Burn Pit Registry"</li>
                <li>• ATSDR, "Camp Lejeune: Past Water Contamination" (2023)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-stone-800 mb-2">Academic Research</h3>
              <ul className="space-y-1">
                <li>• Brown University Costs of War Project, "Pentagon Fuel Use and Climate Change" (2019)</li>
                <li>• Busby C, et al. "Cancer, Infant Mortality and Birth Sex-Ratio in Fallujah, Iraq" (2010)</li>
                <li>• National Cancer Institute, "Radiation Exposure from Nuclear Testing"</li>
                <li>• Environmental Health Perspectives, "PFAS and Military Bases"</li>
                <li>• Journal of Environmental Monitoring, "Depleted Uranium Health Effects"</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-stone-800 mb-2">Legal Documents &amp; Investigations</h3>
              <ul className="space-y-1">
                <li>• PACT Act Implementation Reports, Department of Veterans Affairs</li>
                <li>• Camp Lejeune Justice Act case filings and settlements</li>
                <li>• Nuclear Claims Tribunal, Republic of the Marshall Islands</li>
                <li>• Monsanto Papers - Agent Orange litigation documents</li>
                <li>• Congressional investigations into Gulf War Syndrome</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-stone-800 mb-2">Books &amp; Investigative Reports</h3>
              <ul className="space-y-1">
                <li>• David Vine, "Base Nation: How U.S. Military Bases Abroad Harm America and the World"</li>
                <li>• Barry Sanders, "The Green Zone: The Environmental Costs of Militarism"</li>
                <li>• Seth Shulman, "The Threat at Home: Confronting the Toxic Legacy of the U.S. Military"</li>
                <li>• ProPublica investigations into military environmental contamination</li>
                <li>• USA Today investigations into PFAS contamination at military bases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <RelatedArticles 
        articles={[
          {
            slug: 'cost-per-life',
            title: 'The Cost Per Life',
            desc: 'What does each death cost in America\'s wars? The moral calculus of modern warfare.'
          },
          {
            slug: 'war-profiteering',
            title: 'War Profiteering',
            desc: 'Defense contractor profits and stock prices during major conflicts'
          },
          {
            slug: 'economic-warfare',
            title: 'Economic Warfare',
            desc: 'Sanctions, SWIFT, and the weaponized dollar'
          }
        ]}
      />

      <div className="text-center text-stone-500 text-sm mt-8 mb-4">
        <p>
          <Link href="/analysis/economic-warfare" className="text-red-600 hover:underline">← Economic Warfare</Link>
          {' · '}
          <Link href="/analysis" className="text-red-600 hover:underline">All Analysis</Link>
          {' · '}
          <Link href="/analysis/space-warfare" className="text-red-600 hover:underline">Space Warfare →</Link>
        </p>
      </div>

      <BackToTop />
    </div>
  )
}