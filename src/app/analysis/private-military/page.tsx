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
