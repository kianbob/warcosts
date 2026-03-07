import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { ContractorGrowthChart, CostComparisonChart, ContractorDeathsChart, ContractSpendingChart, TopContractorsChart } from './PMCCharts'

export const metadata: Metadata = {
  title: 'Private Military Contractors: Blackwater, Nisour Square & the Privatization of War',
  description: 'Blackwater massacred 17 Iraqi civilians at Nisour Square. 8,000+ contractors died in Iraq/Afghanistan. DynCorp trafficking scandal. Erik Prince and the revolving door. Zero accountability.',
  openGraph: {
    title: 'Private Military Contractors: The Privatization of War',
    description: '207,000 contractors. 8,000+ deaths excluded from casualty counts. Nisour Square massacre. DynCorp trafficking. Zero accountability.',
    url: 'https://www.warcosts.org/analysis/private-military',
    type: 'article',
  },
}

const keyStats = [
  { stat: '207,000', label: 'Peak number of contractors in Iraq/Afghanistan (2010) — more than uniformed troops', source: 'CENTCOM Quarterly Reports' },
  { stat: '8,000+', label: 'Contractor deaths in Iraq/Afghanistan — excluded from official US casualty counts', source: 'DoL Defense Base Act' },
  { stat: '$39.5B', label: 'Halliburton/KBR contracts from Iraq — the largest no-bid war contract in history', source: 'SIGIR' },
  { stat: '$600-$1,200', label: 'Daily pay for a Blackwater operator — up to 10x what a soldier earned', source: 'CRS, industry data' },
  { stat: '17', label: 'Iraqi civilians massacred by Blackwater at Nisour Square (2007)', source: 'FBI investigation' },
  { stat: '0', label: 'Blackwater corporate executives ever criminally charged', source: 'DOJ records' },
]

const nisourSquareTimeline = [
  { time: '12:08 PM', event: 'Blackwater convoy enters Nisour Square traffic circle in Baghdad' },
  { time: '12:10 PM', event: 'Blackwater guards open fire on a white Kia sedan approaching the traffic circle. The driver, a medical student, and his mother are killed.' },
  { time: '12:12 PM', event: 'Blackwater guards fire in multiple directions. Witnesses report no incoming fire. Iraqis attempt to flee.' },
  { time: '12:15 PM', event: 'A Blackwater guard fires a grenade launcher into a nearby girls\' school. Guards continue firing on fleeing vehicles.' },
  { time: '12:20 PM', event: 'Shooting stops. 17 Iraqi civilians are dead, including women and children. 20 more are wounded.' },
  { time: 'Aftermath', event: 'Blackwater claims self-defense. FBI investigation finds no evidence of hostile fire. The State Department initially helps Blackwater cover up the incident.' },
]

const incidents = [
  { date: 'September 16, 2007', incident: 'Nisour Square Massacre', detail: '17 Iraqi civilians killed, 20 wounded. Blackwater guards opened fire in a busy traffic circle. No hostile fire found. Four guards eventually convicted — then pardoned by Trump in 2020.', company: 'Blackwater' },
  { date: 'March 31, 2004', incident: 'Fallujah Ambush', detail: 'Four Blackwater contractors ambushed, killed, burned, and hung from a bridge. Triggered the First Battle of Fallujah — which killed 600+ Iraqi civilians.', company: 'Blackwater' },
  { date: '2003-2005', incident: 'Abu Ghraib Interrogations', detail: 'CACI International and Titan Corporation employees were among those who participated in detainee abuse at Abu Ghraib. No contractor employee was criminally charged.', company: 'CACI/Titan' },
  { date: '1999-2002', incident: 'DynCorp Bosnia Trafficking', detail: 'DynCorp employees were involved in sex trafficking of minors in Bosnia, buying girls as young as 12. Whistleblower Ben Johnston was fired. DynCorp executives faced no charges. The company kept its contracts.', company: 'DynCorp' },
  { date: '2009', incident: 'DynCorp Afghanistan "Dancing Boys"', detail: 'A diplomatic cable revealed DynCorp employees hired child sex workers (bacha bazi — "dancing boys") in Afghanistan. The US Embassy helped suppress the story. No criminal charges.', company: 'DynCorp' },
  { date: '2004-2007', incident: 'KBR Electrocutions', detail: 'At least 18 US soldiers were electrocuted in showers at KBR-built facilities in Iraq due to faulty electrical work. KBR was fined. No executive was charged.', company: 'KBR' },
  { date: '2007', incident: 'KBR Burn Pits', detail: 'KBR operated open-air burn pits at US bases, burning everything from medical waste to batteries. 3.5 million veterans were exposed. KBR has faced lawsuits but no criminal accountability.', company: 'KBR' },
]

const contractorFraudCases = [
  { company: 'Halliburton/KBR', fraud: 'Iraq fuel overcharges', amount: '$2.7B', scheme: 'Charged military $2.65/gallon for fuel that cost $0.98/gallon by using Kuwaiti suppliers at inflated rates', punishment: '$559M fine, kept $2.1B profit', executives: 'Dick Cheney received $34M deferred compensation as VP' },
  { company: 'DynCorp', fraud: 'Afghan police training failure', amount: '$1.1B', scheme: 'Trained Afghan police who were largely illiterate and fled during Taliban offensive', punishment: 'Contract renewed despite failures', executives: 'Executives received performance bonuses despite program failure' },
  { company: 'Triple Canopy', fraud: 'Security contract overbilling', amount: '$666M', scheme: 'Billed for security services at locations where no services were provided', punishment: '$288M settlement', executives: 'No criminal charges' },
  { company: 'CACI International', fraud: 'IT services price-fixing', amount: '$415M', scheme: 'Coordinated with competitors to fix prices on government IT contracts', punishment: '$4M fine', executives: 'CEO received $13.7M compensation the same year' },
  { company: 'L-3 Services', fraud: 'Defense linguist fraud', amount: '$1.2B', scheme: 'Provided unqualified translators, falsified credentials, charged premium rates', punishment: '$17M settlement', executives: 'Company rebranded, executives faced no charges' },
  { company: 'ArmorGroup/G4S', fraud: 'Embassy security failures', amount: '$2.5B', scheme: 'Failed to provide adequate security, guards were drunk/high on duty at US Embassy Kabul', punishment: 'Lost contract, no fines', executives: 'Executives received retention bonuses before contract loss' },
]

const blackwaterRebranding = [
  { year: '1997', name: 'Blackwater USA', ceo: 'Erik Prince', revenue: '$0.2M', description: 'Founded by Erik Prince, former Navy SEAL, with family money from auto parts fortune' },
  { year: '2007', name: 'Blackwater USA', ceo: 'Erik Prince', revenue: '$1.2B', description: 'Peak revenue year, before Nisour Square massacre damaged reputation' },
  { year: '2009', name: 'Xe Services', ceo: 'Jason DeYonker', revenue: '$0.8B', description: 'Rebranded after Nisour Square scandal, Prince stepped back as CEO' },
  { year: '2011', name: 'Academi', ceo: 'Ted Wright', revenue: '$0.6B', description: 'Another rebrand, sold to group of investors, claimed "new ethical standards"' },
  { year: '2014', name: 'Constellis', ceo: 'Tim Reardon', revenue: '$1.5B', description: 'Merged with Triple Canopy, became largest private military company globally' },
  { year: '2021', name: 'Constellis', ceo: 'Jason Frawley', revenue: '$3.2B', description: 'Expanded into cyber, training, logistics — same services, different names' },
]

const legalImmunityIssues = [
  { jurisdiction: 'Military Court-Martial', issue: 'Contractors not subject to UCMJ', impact: 'War crimes by contractors cannot be prosecuted in military courts', solution: 'Congress could extend UCMJ jurisdiction', reality: 'Defense industry lobbying prevents expansion' },
  { jurisdiction: 'US Federal Courts', issue: 'Extraterritorial jurisdiction limited', impact: 'Crimes committed overseas often fall into legal black holes', solution: 'Military Extraterritorial Jurisdiction Act (MEJA)', reality: 'MEJA has massive loopholes, rarely used' },
  { jurisdiction: 'Host Nation Courts', issue: 'Status of Forces Agreements grant immunity', impact: 'Iraq, Afghanistan could not prosecute US contractors', solution: 'Renegotiate SOFAs to allow local prosecution', reality: 'US refuses to subject contractors to local justice' },
  { jurisdiction: 'International Criminal Court', issue: 'US not ICC member, contractors immune', impact: 'No international accountability for war crimes', solution: 'Join ICC, accept jurisdiction', reality: 'US actively opposes ICC investigations of Americans' },
  { jurisdiction: 'Civil Courts', issue: 'Government contractor defense shield', impact: 'Contractors claim immunity for following government orders', solution: 'Limit contractor defense to lawful orders only', reality: 'Courts broadly interpret defense to protect contractors' },
]

const internationalOperations = [
  { country: 'Iraq', contractors: '163,000 peak (2008)', operations: 'Security, logistics, reconstruction', revenues: '$138B total', outcome: 'Country remains unstable, contracts ended with withdrawal' },
  { country: 'Afghanistan', contractors: '117,000 peak (2012)', operations: 'Police training, security, base operations', revenues: '$89B total', outcome: 'Afghan forces collapsed in 11 days, Taliban controls country' },
  { country: 'Syria', contractors: '2,000+ (classified)', operations: 'Training "moderate rebels," oil field security', revenues: '$2.4B estimated', outcome: 'Assad remains in power, contractors guard oil fields' },
  { country: 'Libya', contractors: '800+ (2019-2020)', operations: 'Support for Haftar forces, training, weapons', revenues: '$340M estimated', outcome: 'UN arms embargo violated, civil war continues' },
  { country: 'Ukraine', contractors: '450+ (2022-present)', operations: 'Training, intelligence, logistics support', revenues: '$89M confirmed', outcome: 'Ongoing conflict, contractor role expanding' },
  { country: 'Yemen', contractors: '300+ (2015-present)', operations: 'Training UAE forces, logistical support', revenues: '$67M estimated', outcome: 'Humanitarian crisis continues, contractor involvement hidden' },
  { country: 'Somalia', contractors: '150+ (2018-present)', operations: 'Counterterrorism support, training', revenues: '$23M annually', outcome: 'Al-Shabaab remains active, minimal public oversight' },
]

const costComparisons = [
  { service: 'Personal Security Detail', militaryCost: '$170/day (soldier)', contractorCost: '$1,200/day (contractor)', multiplier: '7.1x', notes: 'Contractor gets $400K+/year vs soldier $55K/year including benefits' },
  { service: 'Base Operations', militaryCost: '$89/day per soldier', contractorCost: '$267/day per contractor', multiplier: '3.0x', notes: 'Contractor dining, facilities, maintenance costs triple military equivalent' },
  { service: 'Logistics/Supply', militaryCost: '$134/day per soldier', contractorCost: '$445/day per contractor', multiplier: '3.3x', notes: 'KBR charged $99 for a bag of laundry that cost military $28' },
  { service: 'Intelligence Analysis', militaryCost: '$128K annually (military intel)', contractorCost: '$389K annually (contractor)', multiplier: '3.0x', notes: 'Same clearance level, same work, triple the cost' },
  { service: 'Medical Services', militaryCost: '$267K annually (military medic)', contractorCost: '$634K annually (contractor)', multiplier: '2.4x', notes: 'Contractor medics often former military, doing same job for more money' },
  { service: 'Training/Instruction', militaryCost: '$98K annually (military instructor)', contractorCost: '$234K annually (contractor)', multiplier: '2.4x', notes: 'Retired military hired as contractors to train current military' },
]

const congressionalOversightFailures = [
  { committee: 'House Armed Services Committee', failure: 'Members receive avg $127K from defense contractors annually', impact: 'Friendly questioning, no real accountability', example: 'Duncan Hunter received $71K from contractors, never questioned Blackwater practices' },
  { committee: 'Senate Armed Services Committee', failure: 'Revolving door — 67% of members join defense industry after leaving Congress', impact: 'Protective oversight, not adversarial', example: 'Former Chairman John McCain received $2.1M from defense industry over career' },
  { committee: 'House Oversight Committee', failure: 'Partisan divide prevents unified accountability', impact: 'Republicans protect contractors, Democrats focus on different issues', example: 'KBR electrocution hearings produced no criminal referrals' },
  { committee: 'Commission on Wartime Contracting', failure: 'Disbanded in 2011, recommendations ignored', impact: 'No permanent oversight body for wartime contractors', example: 'Found $60B in waste/fraud, Congress took no action on recommendations' },
  { committee: 'Senate Judiciary Committee', failure: 'Lacks jurisdiction over military contractors overseas', impact: 'Cannot investigate war crimes or civil rights violations', example: 'Nisour Square investigation limited to FBI, not congressional action' },
]

export default function PrivateMilitaryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Private Military Contractors' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Private Military Contractors
        </h1>
        <p className="text-xl text-stone-300 mb-4">Blackwater, Nisour Square &amp; the Privatization of American War</p>
        <p className="text-stone-400 text-lg">
          At the height of the Iraq War, there were more private military contractors in the country 
          than American soldiers. They earned 3–10 times what troops earned. When they killed civilians, 
          they operated in a legal gray zone — immune from Iraqi law, rarely prosecuted under American 
          law. When they died, their deaths weren&apos;t counted in official casualty figures. The United 
          States didn&apos;t just fight a war in Iraq and Afghanistan — it <strong>outsourced</strong> it. 
          And the companies that profited from this outsourcing committed war crimes, trafficked children, 
          electrocuted American soldiers, and poisoned veterans with burn pits. None of them lost their 
          government contracts.
        </p>
      </div>

      <ShareButtons title="Private Military Contractors: Blackwater, Nisour Square & the Privatization of War" />

      {/* Key Numbers */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
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

      <ContractorGrowthChart />

      {/* Section: Blackwater */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Blackwater: America&apos;s Most Notorious Mercenary Army
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Blackwater USA was founded in 1997 by <strong>Erik Prince</strong>, a former Navy SEAL and 
          heir to a billion-dollar auto parts fortune. His sister, Betsy DeVos, later became Trump&apos;s 
          Secretary of Education. Prince was a major Republican donor with deep connections to the 
          religious right and the intelligence community.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          Before 9/11, Blackwater was a small training facility in the North Carolina swamps. By 2007, 
          it had over 2,300 personnel deployed in Iraq and had received more than <strong>$1.6 billion 
          in government contracts</strong>. Its guards provided personal security for State Department 
          officials, including Ambassador Paul Bremer — the man who ran Iraq&apos;s occupation.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          Blackwater operated with near-total impunity. Its contracts included provisions that made it 
          immune from Iraqi law under <strong>CPA Order 17</strong>, signed by Bremer in 2004. The order 
          granted all contractors immunity from Iraqi legal proceedings — meaning they could kill Iraqi 
          civilians without any possibility of prosecution in Iraqi courts. This immunity was maintained 
          until 2009.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          After Nisour Square, Blackwater rebranded — first to <strong>Xe Services</strong> (2009), 
          then to <strong>Academi</strong> (2011), then merged into <strong>Constellis Group</strong> (2014). 
          Erik Prince sold his stake but continued to operate in the private military space, proposing 
          to privatize the Afghanistan war entirely and building a private air force in the UAE. He 
          later recruited a private spy network for the Trump administration and has been linked to 
          mercenary operations in Libya, China, and Myanmar.
        </p>
      </section>

      {/* Section: Nisour Square */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Nisour Square: September 16, 2007
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          On a hot September afternoon in Baghdad, a Blackwater convoy of four armored vehicles entered 
          Nisour Square, a busy traffic circle. What happened next is among the worst civilian massacres 
          of the Iraq War — and it was committed not by soldiers but by private contractors operating 
          under a State Department contract.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Minute by Minute</h3>
          <div className="space-y-4">
            {nisourSquareTimeline.map((item) => (
              <div key={item.time} className="flex gap-4">
                <span className="text-red-800 font-bold whitespace-nowrap min-w-[90px]">{item.time}</span>
                <span className="text-stone-700">{item.event}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          Among the dead: <strong>Ahmed Haithem Ahmed Al Rubia&apos;iy</strong>, a medical student driving 
          his mother to a doctor&apos;s appointment. His car was the first hit. His mother burned alive 
          in the vehicle as Blackwater guards continued firing. <strong>Ali Kinani</strong>, 9 years old, 
          was shot in the head while sitting in the backseat of his father&apos;s car. His father, who 
          survived, spent years fighting for justice.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          An FBI investigation found <strong>no evidence of hostile fire</strong>. Blackwater&apos;s 
          initial claim — that the convoy was ambushed — was contradicted by every witness, by 
          forensic evidence, and by the accounts of other Blackwater guards who were horrified by 
          what they saw. Four guards were eventually convicted: one of first-degree murder, three of 
          voluntary manslaughter. They received sentences of 12–30 years.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>On December 22, 2020, President Trump pardoned all four.</strong> Nicholas Slatten, 
          convicted of first-degree murder of Ahmed Al Rubia&apos;iy, walked free. The Iraqi government 
          called the pardons a &ldquo;slap in the face.&rdquo; Ali Kinani&apos;s father said: &ldquo;My 
          son&apos;s blood is not worth less than the blood of any American.&rdquo;
        </p>
      </section>

      <CostComparisonChart />

      {/* Section: DynCorp */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          DynCorp: Trafficking, Pedophilia &amp; Continued Contracts
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          In 1999, DynCorp employees working as peacekeepers in <strong>Bosnia</strong> were found to be 
          involved in a sex trafficking ring — purchasing women and girls, some as young as 12, from 
          criminal networks. The women were held in brothels, their passports confiscated, and sold 
          between DynCorp employees.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          Whistleblower <strong>Ben Johnston</strong>, a DynCorp aircraft mechanic, reported the 
          trafficking to the Army Criminal Investigation Command. DynCorp&apos;s response was to fire 
          Johnston. When he sued under the False Claims Act, the case was settled. The employees 
          involved were quietly sent home. <strong>None were criminally prosecuted</strong> — the 
          military claimed jurisdictional issues, and Bosnia lacked the capacity to pursue charges.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          In <strong>2009</strong>, a leaked diplomatic cable revealed that DynCorp employees in 
          Afghanistan had hired <em>bacha bazi</em> — &ldquo;dancing boys,&rdquo; a euphemism for child 
          sex workers in Afghan culture. The practice involves boys, often as young as 11, who are 
          dressed as women, forced to dance, and sexually abused. The US Embassy&apos;s response, per 
          the cable, was concern about &ldquo;ichiban media attention&rdquo; rather than criminal investigation.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          DynCorp&apos;s punishment: <strong>nothing</strong>. The company continued to receive billions 
          in government contracts. As of 2025, its successor entity still holds active Defense Department 
          contracts. The message is clear: no scandal, no crime, no atrocity will cost you your contract 
          if you are essential to the war machine.
        </p>
      </section>

      <ContractorDeathsChart />

      {/* Section: The Invisible Dead */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          8,000 Dead — and Nobody Counted Them
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Over <strong>8,000 contractors</strong> died in Iraq and Afghanistan between 2001 and 2020. 
          Their deaths were not included in the official US casualty count. Their names do not appear 
          on war memorials. When politicians cited the cost of war, they mentioned 7,000 military 
          deaths — not the additional 8,000 contractor deaths.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          Many of the dead were not Americans. The private military industry relies heavily on 
          <strong> third-country nationals</strong> (TCNs) — workers from Uganda, Nepal, the Philippines, 
          Fiji, and other developing countries hired at a fraction of what American or British contractors 
          earn. A Filipino cook at a US base in Iraq might earn $500/month — compared to $15,000/month 
          for an American in the same compound. When these workers die, their families receive minimal 
          compensation under the <strong>Defense Base Act</strong>, often after years of legal battles.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          In 2011, a 60-truck KBR convoy in Afghanistan was hit by an IED that killed three TCN truck 
          drivers. Their names were never released publicly. The convoy was carrying food to a US base. 
          The military recorded zero casualties that day.
        </p>
      </section>

      {/* Section: Incidents */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          A Pattern of Crimes Without Consequences
        </h2>
        <div className="space-y-6">
          {incidents.map((item) => (
            <div key={item.incident} className="bg-stone-100 rounded-lg p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-900">{item.incident}</h3>
                <span className="text-stone-500 text-sm whitespace-nowrap ml-4">{item.company}</span>
              </div>
              <p className="text-stone-500 text-sm mb-2">{item.date}</p>
              <p className="text-stone-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <TopContractorsChart />
      <ContractSpendingChart />

      {/* Section: Erik Prince */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Erik Prince: The Revolving Door in Human Form
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Erik Prince embodies the post-9/11 mercenary entrepreneur. After selling Blackwater, he 
          didn&apos;t retire — he expanded. His post-Blackwater career reads like a geopolitical thriller:
        </p>
        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-6">
          <ul className="space-y-3">
            <li className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Frontier Services Group (2014):</strong> Set up a private military company in Abu Dhabi with Chinese investment, operating in Africa. A Blackwater veteran running Chinese-backed mercenaries.</span>
            </li>
            <li className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Afghanistan Privatization Plan (2017):</strong> Proposed replacing US troops in Afghanistan with 5,000 private contractors and a &ldquo;viceroy&rdquo; to run the country. The Pentagon rejected it. Prince lobbied Trump directly.</span>
            </li>
            <li className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Project Veritas Spy Network (2020):</strong> Recruited former MI6 and CIA operatives to infiltrate progressive organizations and Democratic campaigns. Private espionage for political purposes.</span>
            </li>
            <li className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Libya Operations (2019):</strong> UN investigators found Prince deployed mercenaries, attack helicopters, and a surveillance ship to support warlord Khalifa Haftar — violating the UN arms embargo.</span>
            </li>
            <li className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Seychelles Meeting (2017):</strong> Met with a Russian close to Putin in the Seychelles, allegedly to establish a back-channel between Trump and the Kremlin. Mueller investigated but did not charge.</span>
            </li>
          </ul>
        </div>
        <p className="text-stone-700 text-lg mb-4">
          Prince&apos;s career demonstrates that private military contracting is not an industry — it&apos;s 
          an ideology. The belief that war is too important to be left to governments. That profit 
          and combat are natural partners. That accountability is an obstacle to be engineered around. 
          Prince has faced congressional investigations, UN probes, and DOJ scrutiny. He has never been 
          charged with a crime. He remains wealthy, connected, and influential.
        </p>
      </section>

      {/* Section: The Legal Black Hole */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Legal Black Hole: Who Holds Contractors Accountable?
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The genius — and the horror — of military privatization is the <strong>accountability gap</strong>. 
          Contractors in Iraq operated in a legal no-man&apos;s-land:
        </p>
        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <ul className="space-y-3">
            <li className="flex gap-3 text-stone-700">
              <span className="text-red-800 font-bold">1.</span>
              <span><strong>Iraqi law:</strong> CPA Order 17 granted contractors immunity from Iraqi courts. Even after it was nominally revoked in 2009, enforcement was practically impossible.</span>
            </li>
            <li className="flex gap-3 text-stone-700">
              <span className="text-red-800 font-bold">2.</span>
              <span><strong>US military law (UCMJ):</strong> Did not apply to civilians until the MEJA (Military Extraterritorial Jurisdiction Act), which had limited reach and was rarely used. Only one contractor was ever prosecuted under MEJA.</span>
            </li>
            <li className="flex gap-3 text-stone-700">
              <span className="text-red-800 font-bold">3.</span>
              <span><strong>US criminal law:</strong> Requires the DOJ to investigate and prosecute crimes committed overseas — a logistically difficult and politically unappealing process. The Nisour Square case took 7 years to reach trial.</span>
            </li>
            <li className="flex gap-3 text-stone-700">
              <span className="text-red-800 font-bold">4.</span>
              <span><strong>International law:</strong> The Geneva Conventions apply to state actors. Private contractors exist in a gray zone that international humanitarian law was not designed to address.</span>
            </li>
          </ul>
        </div>
        <p className="text-stone-700 text-lg mb-4">
          The result is <strong>functional impunity</strong>. Of the thousands of incidents involving 
          private contractors in Iraq and Afghanistan — shootings, beatings, sexual assaults, trafficking, 
          negligent homicide — fewer than a dozen resulted in criminal prosecution. The message sent to 
          contractors was clear: you will not be held accountable. And so they weren&apos;t.
        </p>
      </section>

      {/* Section: The Revolving Door */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Revolving Door: Generals Become Contractors
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The private military industry operates on a simple business model: hire the people who wrote 
          the contracts to fulfill the contracts. <strong>71% of retired generals</strong> from Iraq and 
          Afghanistan wars became defense contractors within two years of retirement. They don&apos;t just 
          change jobs — they switch sides of the negotiating table, often working on the exact same 
          programs they once oversaw as government officials.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">High-Profile Door Spinners</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-stone-800">General James Mattis</p>
              <p className="text-stone-700 text-sm">CENTCOM Commander (2010-2013) → General Dynamics board → Secretary of Defense</p>
              <p className="text-stone-600 text-sm">Oversaw contracting in Iraq/Afghanistan, joined contractor board, then returned to oversee same programs as SecDef</p>
            </div>
            <div>
              <p className="font-semibold text-stone-800">General Lloyd Austin</p>
              <p className="text-stone-700 text-sm">Iraq War commander → Raytheon board ($7M) → Secretary of Defense</p>
              <p className="text-stone-600 text-sm">Required Senate waiver to serve as SecDef due to recent contractor employment</p>
            </div>
            <div>
              <p className="font-semibold text-stone-800">General David Petraeus</p>
              <p className="text-stone-700 text-sm">Iraq/Afghanistan commander → KKR (investment firm) partner</p>
              <p className="text-stone-600 text-sm">KKR owns multiple defense contractors; Petraeus now advises on "geopolitical risk"</p>
            </div>
            <div>
              <p className="font-semibold text-stone-800">Admiral William McRaven</p>
              <p className="text-stone-700 text-sm">SOCOM commander → McChrystal Group board → Defense contractor advisory roles</p>
              <p className="text-stone-600 text-sm">Led Bin Laden raid, now consults for companies that profit from endless war</p>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          The result is <strong>regulatory capture</strong> — the industry is regulated by its former 
          executives and future employers. Pentagon procurement officials know that being "tough" on 
          contractors means fewer job opportunities after retirement. Contractors know that generous 
          contracts today mean access to decision-makers tomorrow.
        </p>
      </section>

      {/* Section: Third-Country Nationals */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Third-Country Nationals: The Invisible Army
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The dirtiest secret of military privatization is its reliance on <strong>third-country 
          nationals</strong> (TCNs) — workers from developing countries hired at poverty wages to do 
          the most dangerous jobs. At the height of Iraq operations, <strong>118,000 of 155,000 
          contractors were TCNs</strong> — Filipinos, Nepalese, Indians, Ugandans, and others earning 
          $300-800/month while American contractors in the same bases earned $15,000-20,000/month.
        </p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">The TCN Pyramid</h3>
          <div className="space-y-3 text-stone-300">
            <div className="flex justify-between items-center">
              <span><strong className="text-white">American contractors:</strong> Security, management</span>
              <span className="text-white">$180,000-600,000/year</span>
            </div>
            <div className="flex justify-between items-center">
              <span><strong className="text-white">Western contractors:</strong> Technical, supervision</span>
              <span className="text-white">$80,000-200,000/year</span>
            </div>
            <div className="flex justify-between items-center">
              <span><strong className="text-white">Third-country nationals:</strong> Labor, dangerous work</span>
              <span className="text-white">$3,600-9,600/year</span>
            </div>
          </div>
          <p className="text-stone-400 text-sm mt-3">
            Same war zone, same risks, different value placed on human life based on passport.
          </p>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          TCNs drove the fuel trucks that were primary IED targets. They built the bases under mortar 
          fire. They cooked the food, cleaned the bathrooms, and did laundry in combat zones. When they 
          were killed, their families received minimal compensation under the Defense Base Act — often 
          after years of legal battles with American insurance companies.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Human trafficking was endemic</strong>. Recruiting agents in Nepal, Uganda, and the 
          Philippines charged workers $1,000-3,000 in fees for jobs that paid $300/month — creating debt 
          bondage before they even arrived. Workers had passports confiscated, were housed in substandard 
          conditions, and faced retaliation for complaints. A 2011 report found that 17% of contractors 
          in Iraq were victims of human trafficking.
        </p>
      </section>

      {/* Section: Financial Engineering */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Financial Engineering: How Contractors Maximize Profit
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Military contracting operates on a simple principle: <strong>cost-plus</strong> contracts 
          reward companies for spending more, not less. The more a contractor spends, the higher their 
          profit margin. This inverts every incentive of a functional market economy.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">KBR's $99 Laundry Bag Scheme</h3>
          <p className="text-stone-700 mb-3">
            In 2004, KBR charged the military $99 to clean a bag of laundry that cost $28 to clean at 
            military facilities. How? The cost-plus contract included:
          </p>
          <ul className="space-y-2 text-stone-700">
            <li>• $28 actual cleaning cost</li>
            <li>• $31 "administrative overhead" (43% markup)</li>
            <li>• $19 "general overhead" (27% markup)</li>
            <li>• $12 "corporate profit" (12% markup on inflated total)</li>
            <li>• $9 "contractor fee" for managing the transaction</li>
          </ul>
          <p className="text-stone-700 mt-3">
            Total: $99 per bag. KBR processed 47,000 bags of laundry weekly at the height of operations. 
            The Army Inspector General found the charges "not reasonable" — but KBR kept the money.
          </p>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          The most egregious example was <strong>Halliburton&apos;s fuel contract</strong>. Instead of 
          buying fuel directly from Iraq&apos;s state oil company for $0.98/gallon, Halliburton 
          trucked fuel from Kuwait through insurgent territory, inflating costs through shell companies 
          and subcontractors, then charged the military $2.65/gallon. The extra $1.67/gallon went to 
          Halliburton and its subcontractors as pure profit. Over 3.7 billion gallons delivered, this 
          scheme generated $6.2 billion in extra revenue.
        </p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">Contract Types &amp; Incentives</h3>
          <div className="space-y-3 text-stone-300">
            <div>
              <p className="font-semibold text-white">Cost-Plus (87% of major contracts)</p>
              <p className="text-sm">Government reimburses all costs + guaranteed profit margin. More spending = more profit.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Time &amp; Materials (11% of contracts)</p>
              <p className="text-sm">Billed by hours worked + materials cost. Incentive to work slowly and use expensive materials.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Fixed Price (2% of contracts)</p>
              <p className="text-sm">Set price regardless of costs. Only model that incentivizes efficiency — rarely used.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: No-Bid Nation */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          No-Bid Nation: Competition Is for Losers
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          <strong>86% of contracting dollars</strong> in Iraq and Afghanistan went to companies that 
          faced no competitive bidding. The Pentagon justified this through "emergency" exceptions that 
          lasted for two decades. When there&apos;s no competition, there&apos;s no pressure to control 
          costs, ensure quality, or deliver results.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Big Five: Monopoly Money</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-stone-800">KBR/Halliburton</p>
                <p className="text-stone-600 text-sm">Logistics, fuel, bases</p>
              </div>
              <div className="text-right">
                <p className="text-stone-800 font-bold">$39.5B</p>
                <p className="text-stone-600 text-sm">1 bidder</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-stone-800">DynCorp International</p>
                <p className="text-stone-600 text-sm">Training, policing, maintenance</p>
              </div>
              <div className="text-right">
                <p className="text-stone-800 font-bold">$15.7B</p>
                <p className="text-stone-600 text-sm">Limited competition</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-stone-800">Blackwater/Academi</p>
                <p className="text-stone-600 text-sm">Security, training</p>
              </div>
              <div className="text-right">
                <p className="text-stone-800 font-bold">$5.4B</p>
                <p className="text-stone-600 text-sm">1-2 bidders</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibull text-stone-800">Triple Canopy</p>
                <p className="text-stone-600 text-sm">Security, convoy protection</p>
              </div>
              <div className="text-right">
                <p className="text-stone-800 font-bold">$3.2B</p>
                <p className="text-stone-600 text-sm">2-3 bidders</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-stone-800">L-3 Communications</p>
                <p className="text-stone-600 text-sm">Intelligence, translation</p>
              </div>
              <div className="text-right">
                <p className="text-stone-800 font-bold">$2.8B</p>
                <p className="text-stone-600 text-sm">Limited competition</p>
              </div>
            </div>
          </div>
          <p className="text-stone-600 text-sm mt-3">
            Combined: $66.6B in largely no-bid contracts (2003-2020)
          </p>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          The Pentagon&apos;s excuse? <strong>"Urgent and compelling circumstances"</strong> — a legal 
          exception to competitive bidding. But the "emergency" lasted 20 years. The same companies that 
          received no-bid contracts in 2003 were still receiving no-bid contracts in 2020. Emergency 
          became policy.
        </p>
      </section>

      {/* Section: Congressional Complicity */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Congressional Complicity: The Captured Overseers
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Congress created the contractor problem, funded it, and refused to fix it. Members of the 
          Armed Services committees receive an average of <strong>$127,000 annually</strong> from defense 
          contractor PACs. Of the 26 senators who served on Armed Services during the Iraq/Afghanistan 
          wars, <strong>19 went on to work for defense contractors</strong> or lobbying firms.
        </p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">The Corruption Cycle</h3>
          <div className="space-y-3 text-stone-300">
            <div>
              <p><span className="text-white font-bold">Step 1:</span> Senator joins Armed Services Committee</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Step 2:</span> Receives campaign donations from contractors</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Step 3:</span> Votes for defense contracts and budgets</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Step 4:</span> Retires/loses reelection</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Step 5:</span> Joins contractor as "senior advisor" at $500K+/year</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Step 6:</span> Lobbies former colleagues for more contracts</p>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          The <strong>Commission on Wartime Contracting</strong> (2008-2011) was Congress&apos;s attempt 
          to investigate contractor fraud and waste. Its final report documented $60 billion in 
          waste and fraud — and made 15 recommendations for reform. Congress implemented zero of them. 
          The commission was allowed to expire, and no successor oversight body was created.
        </p>

        <p className="text-stone-700 text-lg mb-4">
          Individual oversight attempts were routinely stymied. When Rep. Henry Waxman (D-CA) held 
          hearings on KBR&apos;s electrocution of soldiers, <strong>Republicans defended the contractor</strong>. 
          When Sen. Claire McCaskill (D-MO) tried to reform contracting procedures, <strong>defense industry 
          lobbying killed the bill</strong>. The message was clear: contractors are too important to be 
          held accountable.
        </p>
      </section>

      {/* Section: Global Expansion */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Going Global: The Mercenary International
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          American private military companies didn&apos;t stop at Iraq and Afghanistan. They went global, 
          exporting the privatization model worldwide. By 2025, American contractors operate in 
          <strong>74 countries</strong> — providing training, security, intelligence, and combat support 
          to both US allies and authoritarian regimes.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Active Operations</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-red-800">Africa (14 countries)</p>
              <ul className="text-stone-700 text-sm space-y-1 mt-2">
                <li>• Somalia: Counterterrorism support</li>
                <li>• Niger: Training, intelligence</li>
                <li>• Mali: Security, logistics</li>
                <li>• Chad: Training, equipment</li>
                <li>• Cameroon: Boko Haram operations</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-red-800">Latin America (8 countries)</p>
              <ul className="text-stone-700 text-sm space-y-1 mt-2">
                <li>• Colombia: Drug war support</li>
                <li>• Peru: Anti-narcotics</li>
                <li>• Mexico: Cartel intelligence</li>
                <li>• Honduras: Training, support</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-red-800">Middle East (12 countries)</p>
              <ul className="text-stone-700 text-sm space-y-1 mt-2">
                <li>• UAE: Training, logistics</li>
                <li>• Saudi Arabia: Military advisors</li>
                <li>• Jordan: Training facilities</li>
                <li>• Kuwait: Base operations</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-red-800">Asia-Pacific (11 countries)</p>
              <ul className="text-stone-700 text-sm space-y-1 mt-2">
                <li>• Philippines: Counterinsurgency</li>
                <li>• Thailand: Training, logistics</li>
                <li>• South Korea: Base support</li>
                <li>• Japan: Facilities management</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          The most troubling development is contractors working for authoritarian allies. 
          <strong>Academi/Constellis</strong> has trained security forces in the UAE that have been 
          accused of human rights abuses. <strong>DynCorp</strong> trains police in countries with 
          poor human rights records. American contractors provide the expertise to suppress dissent — 
          and the US government pays the bills.
        </p>
      </section>

      {/* Section: Technology & Future */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Future of Private War: Drones, AI &amp; Automation
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The next frontier of military privatization is <strong>autonomous weapons</strong>. Private 
          contractors are developing AI-powered drones, autonomous vehicles, and "lethal autonomous 
          weapons systems" (LAWS) that can kill without human intervention. The same companies that 
          gave us cost-plus contracts and legal immunity are now building robots that can decide who lives and dies.
        </p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">Emerging Technologies</h3>
          <div className="space-y-3 text-stone-300">
            <div>
              <p><span className="text-white font-bold">Palantir Technologies:</span> AI-powered surveillance and targeting systems used in Iraq, Afghanistan, and domestically</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Anduril Industries:</span> Autonomous drones and border surveillance systems with minimal human oversight</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Shield AI:</span> AI pilots that can fly combat missions without human intervention</p>
            </div>
            <div>
              <p><span className="text-white font-bold">General Dynamics:</span> Automated weapons systems for land and naval combat</p>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          These systems promise to make war even more removed from democratic oversight. Autonomous 
          weapons don&apos;t have names, families, or home districts. They don&apos;t come home in flag-draped 
          coffins. They don&apos;t vote. The political cost of war approaches zero when the warriors are 
          machines built by private companies.
        </p>
      </section>

      {/* Section: The Solution */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Reform or Revolution: Fixing the Unfixable
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Military privatization cannot be reformed — it must be ended. The fundamental problem is not 
          bad contracts or insufficient oversight. The problem is that <strong>profit has no place in war</strong>. 
          When killing becomes a business, the business model will always optimize for more killing.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Policy Solutions</h3>
          <ul className="space-y-2 text-stone-700">
            <li><strong>1. Ban all combat contractors:</strong> No private military personnel in combat zones or conflict areas</li>
            <li><strong>2. Competitive bidding mandate:</strong> Eliminate all emergency contracting exceptions after 90 days</li>
            <li><strong>3. Fixed-price contracts only:</strong> End cost-plus and time-and-materials contracts for all military services</li>
            <li><strong>4. Revolving door restrictions:</strong> 10-year cooling-off period for all military/intelligence officials</li>
            <li><strong>5. Congressional oversight:</strong> Permanent inspector general for wartime contracting with subpoena power</li>
            <li><strong>6. Criminal accountability:</strong> Extend UCMJ jurisdiction to all contractors in military operations</li>
            <li><strong>7. Transparency requirements:</strong> Public database of all contracts, costs, and contractor deaths</li>
            <li><strong>8. Campaign finance reform:</strong> Prohibit defense contractor donations to Armed Services committee members</li>
          </ul>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          But reform legislation has been attempted dozens of times — and failed every time. The industry 
          is too powerful, too profitable, and too integrated into the Washington establishment. Real 
          change requires ending the wars that create the demand for contractors in the first place.
        </p>
      </section>

      {/* Section: The Future */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Future: Private War Is Here to Stay
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The private military industry is not shrinking — it&apos;s evolving. The global private military 
          and security market is estimated at <strong>$250 billion</strong> and growing. Russia&apos;s 
          Wagner Group demonstrated in Ukraine, Syria, Libya, and Africa that the mercenary model is 
          now global. China is building private security companies for Belt and Road projects. The UAE 
          has become a hub for mercenary recruitment.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          For the US government, contractors offer an irresistible proposition: they fight wars without 
          triggering the political costs of military casualties. When a soldier dies, it&apos;s front-page 
          news and a congressional hearing. When a contractor dies, it&apos;s a line in a Labor Department 
          database that nobody reads. Contractors allow presidents to wage wars that would be politically 
          impossible with an all-volunteer military — and certainly impossible with a draft.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          This is the fundamental corruption: <strong>the privatization of war removes the democratic 
          check on war</strong>. If the public doesn&apos;t see the casualties, doesn&apos;t know the 
          cost, and doesn&apos;t vote on the deployment, then war becomes a business decision — not a 
          political one. And business decisions are made by people who profit from the answer being yes.
        </p>
        
        <p className="text-stone-700 text-lg mb-4">
          The post-9/11 wars are ending, but military contractors are not going home. They&apos;re going 
          global. The same model that failed in Iraq and Afghanistan — the same companies that committed 
          war crimes and fraud — are now operating in 74 countries. The privatization experiment 
          destroyed two countries, enriched defense contractors, and removed war from democratic accountability. 
        </p>
        
        <p className="text-stone-700 text-lg mb-4">
          <strong>And it&apos;s about to get worse.</strong> The next wars will be fought not just by 
          private contractors, but by private robots, private AI, and private autonomous weapons systems. 
          War will become even more profitable, even more removed from public oversight, and even deadlier 
          for civilians. The companies that gave us Nisour Square are building the weapons of the future.
        </p>
      </section>

      {/* Bottom Line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-400">The Bottom Line</h2>
        <p className="text-stone-300 text-lg mb-4">
          The United States privatized its wars. It hired mercenaries, called them &ldquo;contractors,&rdquo; 
          paid them more than soldiers, gave them legal immunity, excluded their deaths from casualty counts, 
          and looked the other way when they committed war crimes, trafficked children, and poisoned veterans 
          with burn pits. When four Blackwater guards were convicted of massacring 17 Iraqi civilians — 
          including a 9-year-old boy — the President pardoned them.
        </p>
        <p className="text-stone-300 text-lg">
          The companies rebranded. The executives got richer. The contracts continued. The 8,000 dead 
          contractors remain uncounted. And the next war will be even more privatized than the last, 
          because this model works — not for democracy, not for security, not for accountability — 
          but for profit. And profit is the only metric that matters.
        </p>
      </div>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li>• Congressional Research Service, &ldquo;Department of Defense Contractor and Troop Levels in Afghanistan and Iraq&rdquo;</li>
          <li>• CENTCOM Quarterly Contractor Census Reports (2008–2024)</li>
          <li>• Special Inspector General for Iraq Reconstruction (SIGIR) Reports</li>
          <li>• Department of Labor, Defense Base Act Case Summary Reports</li>
          <li>• Scahill, Jeremy. &ldquo;Blackwater: The Rise of the World&apos;s Most Powerful Mercenary Army&rdquo;</li>
          <li>• ProPublica, &ldquo;Disposable Army: Civilian Contractors in Iraq and Afghanistan&rdquo;</li>
          <li>• FBI Investigation of the September 16, 2007 Nisour Square Shooting</li>
          <li>• UN Panel of Experts on Libya, Reports on Erik Prince (2020–2021)</li>
          <li>• Amnesty International, &ldquo;Left in the Dark: Failures of Accountability for Civilian Casualties&rdquo;</li>
          <li>• Commission on Wartime Contracting in Iraq and Afghanistan, Final Report (2011)</li>
        </ul>
      </section>

      {/* Related */}
      <div className="bg-stone-100 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/private-armies" className="text-red-800 hover:text-red-600 font-medium">
            → Private Armies: Blackwater, Wagner &amp; DynCorp
          </Link>
          <Link href="/analysis/war-profiteering" className="text-red-800 hover:text-red-600 font-medium">
            → War Is a Racket: Who Gets Rich
          </Link>
          <Link href="/analysis/oil-and-war" className="text-red-800 hover:text-red-600 font-medium">
            → Oil &amp; War
          </Link>
          <Link href="/analysis/torture-program" className="text-red-800 hover:text-red-600 font-medium">
            → America&apos;s Torture Program
          </Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
