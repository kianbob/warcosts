import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'
import { ChildDeathsChart, ChildSoldiersChart, PTSDChart, DroneChildrenChart } from './ChildrensWarCharts'

export const metadata: Metadata = {
  title: "Children's War: 400,000+ Children Killed in America's Post-9/11 Wars",
  description: '400,000+ children killed. 250,000 child soldiers worldwide. School bombings. Drone strikes on families. 72% PTSD rate in Gaza children. War devours the youngest first.',
  openGraph: {
    title: "Children's War: The Youngest Casualties",
    description: '400,000+ children dead in post-9/11 wars. Child soldiers. School bombings. Drone strikes on families. The war on childhood.',
    url: 'https://www.warcosts.org/analysis/childrens-war',
    type: 'article',
  },
}

const schoolBombings = [
  { event: 'Minab School Bombing, Iran (2026)', children: 108, perpetrator: 'US airstrike', status: 'Pentagon claims "military target nearby"' },
  { event: 'Yemen School Bus, Dahyan (2018)', children: 40, perpetrator: 'Saudi coalition (US bomb)', status: 'Lockheed Martin MK-82 bomb identified' },
  { event: 'Kunduz MSF Hospital (2015)', children: 33, perpetrator: 'US AC-130', status: 'US called it a "mistake" — no one prosecuted' },
  { event: 'Al-Janabi School, Iraq (2003)', children: 26, perpetrator: 'US airstrike', status: 'Classified as "collateral damage"' },
  { event: 'Azizabad, Afghanistan (2008)', children: 60, perpetrator: 'US airstrike on wedding', status: 'US initially denied civilian deaths' },
  { event: 'Baghuz, Syria (2019)', children: 64, perpetrator: 'US airstrike', status: 'Covered up by military, exposed by NYT in 2021' },
  { event: 'Wech Baghtu, Afghanistan (2008)', children: 23, perpetrator: 'US airstrike on wedding', status: 'Military investigation cleared all personnel' },
]

const childrenByTheNumbers = [
  { stat: '400,000+', label: 'Children killed in post-9/11 wars (direct and indirect)', source: 'Brown University Costs of War' },
  { stat: '250,000', label: 'Child soldiers worldwide', source: 'UNICEF' },
  { stat: '13.6M', label: 'Children displaced by the War on Terror', source: 'UNHCR' },
  { stat: '72%', label: 'PTSD rate among children in Gaza', source: 'Save the Children' },
  { stat: '3.5M', label: 'Afghan children who have never known peace', source: 'UNICEF (born after 2001)' },
  { stat: '5M', label: 'Iraqi children orphaned by war', source: 'Iraqi Ministry of Labor' },
  { stat: '0', label: 'US officials prosecuted for killing children in drone strikes', source: 'Public record' },
]

const childCasualtiesByCountry = [
  { country: 'Iraq', directKilled: '46,000+', indirectDeaths: '180,000+', orphans: '5,000,000', displaced: '2.8M', period: '2003-2023' },
  { country: 'Afghanistan', directKilled: '26,000+', indirectDeaths: '120,000+', orphans: '2,300,000', displaced: '2.7M', period: '2001-2021' },
  { country: 'Syria', directKilled: '21,000+', indirectDeaths: '95,000+', orphans: '1,800,000', displaced: '5.6M', period: '2011-2023' },
  { country: 'Yemen', directKilled: '12,000+', indirectDeaths: '85,000+', orphans: '900,000', displaced: '2.2M', period: '2015-2023' },
  { country: 'Libya', directKilled: '3,000+', indirectDeaths: '15,000+', orphans: '200,000', displaced: '400K', period: '2011-2023' },
  { country: 'Pakistan', directKilled: '2,400+', indirectDeaths: '8,000+', orphans: '150,000', displaced: '900K', period: '2004-2023' },
  { country: 'Somalia', directKilled: '1,800+', indirectDeaths: '7,500+', orphans: '130,000', displaced: '1.1M', period: '2007-2023' },
]

const weaponsUsedOnChildren = [
  { weapon: 'Lockheed Martin MK-82 Bombs', childrenKilled: '5,000+', notable: 'Yemen school bus (40 kids), Gaza airstrikes (hundreds)', cost: '$3,200 per bomb' },
  { weapon: 'General Atomics MQ-9 Reaper Drones', childrenKilled: '2,300+', notable: 'Ahmadi family (7 kids), Pakistani weddings', cost: '$17M per drone' },
  { weapon: 'Raytheon Tomahawk Missiles', childrenKilled: '1,800+', notable: 'Syria chemical facility strikes, Iranian targets', cost: '$1.87M per missile' },
  { weapon: 'Boeing Apache Helicopters', childrenKilled: '3,400+', notable: 'Collateral Murder video (2 children wounded)', cost: '$52M per helicopter' },
  { weapon: 'Cluster Munitions (banned by 110 countries)', childrenKilled: '6,500+', notable: 'US has not signed cluster bomb ban, allies use US-made', cost: '$16,000 per bomb' },
  { weapon: 'White Phosphorus (chemical weapon)', childrenKilled: '900+', notable: 'Gaza 2008-09, Iraq 2004', cost: '$5,000 per shell' },
]

const usChildRecruiting = [
  { branch: 'US Army', minAge: '17 with parental consent', recruited2023: '45,700', underAge18: '8,200', targetDemo: 'Poor, rural, minority communities' },
  { branch: 'US Marines', minAge: '17 with parental consent', recruited2023: '31,400', underAge18: '5,900', targetDemo: 'High school dropouts, low-income families' },
  { branch: 'US Navy', minAge: '17 with parental consent', recruited2023: '38,200', underAge18: '6,800', targetDemo: 'Technical training seekers, college-bound poor' },
  { branch: 'US Air Force', minAge: '17 with parental consent', recruited2023: '28,100', underAge18: '4,200', targetDemo: 'STEM-interested, gaming communities' },
]

const contractorProfitsFromChildDeaths = [
  { company: 'Lockheed Martin', childRelatedRevenue: '$8.7B annually', products: 'F-35, Hellfire missiles, HIMARS', childDeathsLinked: '7,000+' },
  { company: 'Raytheon', childRelatedRevenue: '$6.2B annually', products: 'Tomahawks, Patriot, drone sensors', childDeathsLinked: '4,500+' },
  { company: 'General Dynamics', childRelatedRevenue: '$4.8B annually', products: 'Artillery shells, tank rounds', childDeathsLinked: '3,200+' },
  { company: 'Boeing', childRelatedRevenue: '$4.1B annually', products: 'Apache helicopters, JDAM bombs', childDeathsLinked: '5,100+' },
  { company: 'Northrop Grumman', childRelatedRevenue: '$3.9B annually', products: 'Global Hawk drones, B-2 bombers', childDeathsLinked: '2,800+' },
]

const opportunityCostAnalysis = [
  { killed: '400,000 children', warCost: '$8 trillion (post-9/11)', alternativeUse: 'Could have built 800,000 schools worldwide', perChild: '$20,000 per child killed' },
  { killed: '46,000 Iraqi children', warCost: '$2.4 trillion (Iraq)', alternativeUse: 'Could have provided clean water to 2.4 billion people', perChild: '$52 million per Iraqi child' },
  { killed: '26,000 Afghan children', warCost: '$2.3 trillion (Afghanistan)', alternativeUse: 'Could have eliminated extreme poverty globally for 23 years', perChild: '$88 million per Afghan child' },
  { killed: '21,000 Syrian children', warCost: '$500 billion (US involvement)', alternativeUse: 'Could have built 50,000 hospitals', perChild: '$24 million per Syrian child' },
]

const childHealthImpacts = [
  { condition: 'Severe Acute Malnutrition', affected: '3.2M children', regions: 'Afghanistan, Yemen, Somalia', treatmentCost: '$200 per child', preventable: 'Yes - food aid' },
  { condition: 'PTSD/Trauma Disorders', affected: '8.7M children', regions: 'All war zones', treatmentCost: '$3,000 per child/year', preventable: 'Yes - no war' },
  { condition: 'Preventable Diseases (no vaccines)', affected: '2.1M children', regions: 'Destroyed healthcare systems', treatmentCost: '$50 per child', preventable: 'Yes - functioning hospitals' },
  { condition: 'Birth Defects from Depleted Uranium', affected: '140,000+ children', regions: 'Iraq, Afghanistan', treatmentCost: '$50,000+ per child', preventable: 'Yes - ban DU weapons' },
  { condition: 'Amputations from Cluster Bombs', affected: '78,000+ children', regions: 'Laos, Vietnam, Iraq, Afghanistan', treatmentCost: '$25,000+ per prosthetic', preventable: 'Yes - ban cluster bombs' },
]

const allyComplicity = [
  { ally: 'Saudi Arabia', childrenKilled: '12,000+ (Yemen)', usSupport: '$100B in weapons sales 2017-2023', accountability: 'Zero. US blocks UN investigations.' },
  { ally: 'Israel', childrenKilled: '5,600+ (Gaza, West Bank)', usSupport: '$3.8B annually + $14B emergency 2024', accountability: 'Zero. US vetoes UN resolutions.' },
  { ally: 'UAE', childrenKilled: '2,800+ (Yemen)', usSupport: '$23B in weapons sales 2021-2023', accountability: 'Zero. Designated "Major Defense Partner."' },
  { ally: 'Egypt', childrenKilled: '1,200+ (Sinai)', usSupport: '$1.3B annually in military aid', accountability: 'Zero. Aid continues despite human rights violations.' },
]

const generationalTrauma = [
  { generation: 'Afghan Gen Z (born 2001-2021)', traumaRate: '89%', characteristics: 'Never knew peace, normalized violence, 60% want to leave country' },
  { generation: 'Iraqi Millennials (born 1990-2003)', traumaRate: '76%', characteristics: 'Witnessed invasion as children, lost decade of education, high unemployment' },
  { generation: 'Syrian children (born 2010-2023)', traumaRate: '84%', characteristics: 'Born into war, 2.4M never attended school, malnutrition endemic' },
  { generation: 'Yemeni children (born 2015-2023)', traumaRate: '71%', characteristics: 'Cholera epidemics, starvation, zero functioning hospitals in many areas' },
  { generation: 'Gazan Gen Alpha (born 2010-2023)', traumaRate: '72%', characteristics: 'Survived 5+ major bombardments, 95% have nightmares, learning disabilities widespread' },
]

export default function ChildrensWarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: "Children's War" }]} />

      {/* Hero */}
      <div className="not-prose bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Children&apos;s War
        </h1>
        <p className="text-xl text-stone-300 mb-4">400,000+ Children Killed &amp; the World Looked Away</p>
        <p className="text-stone-400 text-lg">
          On August 9, 2018, a school bus carrying children on a summer field trip was hit by a 
          Saudi coalition airstrike in Dahyan, Yemen. Forty children died. They were between 6 and 11 
          years old. The bomb was a Lockheed Martin MK-82, sold to Saudi Arabia by the United States. 
          CNN found the bomb fragment with the manufacturer&apos;s markings still legible. The Pentagon 
          called the strike &ldquo;consistent with international law.&rdquo; In January 2026, a US 
          airstrike hit a school in Minab, Iran — 108 children killed. They are not the first. They 
          will not be the last. In America&apos;s wars since 9/11, over 400,000 children have been killed. 
          Each one had a name.
        </p>
      </div>

      <ShareButtons title="Children's War: 400,000+ Killed in America's Post-9/11 Wars" />

      {/* Key Numbers */}
      <div className="not-prose bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-4">By the Numbers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {childrenByTheNumbers.map((item) => (
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

      {/* Section: The Death Toll */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          400,000 Children
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Brown University&apos;s Costs of War Project — the most rigorous accounting of post-9/11 war deaths — 
          estimates that <strong>over 400,000 children</strong> have been killed in America&apos;s wars since 2001. 
          This includes children killed directly by violence (bombings, crossfire, drone strikes) and indirectly 
          through the destruction of hospitals, water systems, and food supply chains.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          To understand the scale: 400,000 children is the equivalent of every child in the city of Cleveland, 
          Ohio. It is more children than were killed in the bombing of Hiroshima and Nagasaki combined. It is 
          100 times the number of Americans killed on 9/11. These children died in response to an attack carried 
          out by 19 men.
        </p>

        <ChildDeathsChart />

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Iraq: 5 Million Orphans</h3>
          <p className="text-stone-700 mb-3">
            The Iraqi Ministry of Labor estimates that the US invasion and subsequent civil war created 
            <strong> 5 million orphans</strong>. That is roughly 1 in 6 Iraqi children. Many live on the streets. 
            Many were recruited by militias — including, eventually, ISIS. A generation of Iraqi children grew up 
            knowing only violence, occupation, and loss.
          </p>
          <p className="text-stone-700">
            UNICEF reported in 2007 that <strong>1 in 4 Iraqi children</strong> suffered from chronic malnutrition 
            — a direct result of destroyed infrastructure, collapsed healthcare, and economic devastation caused by 
            the invasion. Before the 2003 invasion, Iraq had one of the best healthcare systems in the Middle East. 
            The US destroyed it in weeks.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Afghanistan: Children Who Never Knew Peace</h3>
          <p className="text-stone-700 mb-3">
            A child born in Afghanistan in 2001 — the year the US invaded — turned 20 before the US withdrew 
            in 2021. <strong>3.5 million Afghan children</strong> have never known a day without war. UNICEF 
            reports that Afghanistan has the highest child mortality rate among conflict-affected countries: 
            <strong>1 in 5 Afghan children</strong> dies before age 5.
          </p>
          <p className="text-stone-700">
            After the US withdrawal in August 2021, the situation worsened catastrophically. The US froze $7 billion 
            in Afghan central bank reserves. International aid collapsed. By 2022, UNICEF reported that 
            <strong>1 million Afghan children</strong> were at risk of dying from acute malnutrition. The US spent 
            $2.3 trillion on the war in Afghanistan, then froze the country&apos;s money while its children starved.
          </p>
        </div>
      </section>

      {/* Section: School Bombings */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Schools Are Not Military Targets
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          International humanitarian law prohibits attacking schools. The Geneva Conventions specifically protect 
          educational facilities. And yet, in every major US military operation since 2001, schools have been bombed. 
          The justification is always the same: &ldquo;military target in the vicinity,&rdquo; &ldquo;human shields,&rdquo; 
          or &ldquo;collateral damage.&rdquo;
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Event</th>
                <th className="px-4 py-3 text-right">Children Killed</th>
                <th className="px-4 py-3 text-left">Perpetrator</th>
                <th className="px-4 py-3 text-left">Accountability</th>
              </tr>
            </thead>
            <tbody>
              {schoolBombings.map((row) => (
                <tr key={row.event} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.event}</td>
                  <td className="px-4 py-3 text-right font-bold text-red-800">{row.children}</td>
                  <td className="px-4 py-3">{row.perpetrator}</td>
                  <td className="px-4 py-3 text-sm text-stone-600">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-red-950/10 border border-red-200 rounded-lg p-6 my-6">
          <h3 className="font-bold text-red-800 text-lg mb-2">Minab, Iran — January 2026</h3>
          <p className="text-stone-700 mb-3">
            On January 15, 2026, during Operation Epic Fury, a US airstrike hit the Shahid Motahhari 
            school in Minab, Iran. <strong>108 children were killed</strong>. The Pentagon initially claimed 
            the target was a &ldquo;military command center adjacent to the school.&rdquo; Satellite imagery 
            later showed no military facility within 500 meters.
          </p>
          <p className="text-stone-700">
            The Iranian government published the names and photographs of all 108 children. The youngest was 
            4 years old. The oldest was 14. The strike occurred during morning classes — the building was full. 
            No US investigation has been opened. No officer has been disciplined. The Pentagon&apos;s official 
            position remains that the strike was &ldquo;conducted in accordance with the laws of armed conflict.&rdquo;
          </p>
        </div>
      </section>

      {/* Section: Child Soldiers */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          250,000 Children Carrying Guns
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The UN estimates that <strong>250,000–300,000 children</strong> are serving as soldiers in armed 
          conflicts worldwide. Some are as young as 7. They are used as fighters, suicide bombers, spies, 
          sex slaves, and human shields. The countries that produce the most child soldiers — DRC, Somalia, 
          South Sudan, Myanmar, Syria — are all countries destabilized by war, many with direct US involvement.
        </p>

        <ChildSoldiersChart />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-stone-100 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">How Children Become Soldiers</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>Abduction:</strong> LRA in Uganda abducted 66,000+ children. Many were forced to kill family members as initiation.</li>
              <li>• <strong>Poverty:</strong> When war destroys livelihoods, armed groups are the only employer. ISIS paid child soldiers $100/month.</li>
              <li>• <strong>Revenge:</strong> Children who watched parents killed often seek revenge — armed groups channel this.</li>
              <li>• <strong>Orphanhood:</strong> Iraq&apos;s 5 million war orphans were prime recruitment targets for ISIS and Shia militias.</li>
              <li>• <strong>Ideology:</strong> Taliban madrassas, ISIS training camps — children are indoctrinated before they can think critically.</li>
            </ul>
          </div>
          <div className="bg-stone-100 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">US Complicity</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• The <strong>Child Soldiers Prevention Act</strong> (2008) bans US military aid to countries using child soldiers.</li>
              <li>• <strong>Every president since has waived it.</strong> Obama waived it for Yemen, South Sudan, DRC, and Somalia.</li>
              <li>• Trump waived it for the same countries plus Nigeria and Mali.</li>
              <li>• Biden waived it for DRC, Somalia, and Yemen.</li>
              <li>• The law exists. The waivers ensure it is never enforced. Military partnerships take priority over children.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: PTSD in Children */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          An Entire Generation with PTSD
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          A child in Gaza has a <strong>72% chance of having PTSD</strong>. In Syria, it&apos;s 65%. In Yemen, 61%. 
          These are not children who experienced a single traumatic event. They live inside the trauma. The bombs 
          fall every day. Their homes are destroyed. Their parents are killed. Their schools are rubble. And there 
          are no therapists, no counselors, no quiet rooms — because those were bombed too.
        </p>

        <PTSDChart />

        <div className="not-prose bg-stone-900 text-white rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">What PTSD Looks Like in a 6-Year-Old</h3>
          <p className="text-stone-300 mb-3">
            PTSD in children doesn&apos;t look like PTSD in adults. Children don&apos;t talk about flashbacks 
            or hypervigilance. They stop speaking entirely. They wet the bed. They have night terrors. They draw 
            pictures of bombs. They flinch at every sound. They cling to parents and scream when separated.
          </p>
          <p className="text-stone-300 mb-3">
            Save the Children surveyed 2,000 children in Gaza and found: <strong>95% reported feelings of grief 
            and despair. 80% reported increased nightmares and fear. 79% reported bedwetting. 59% reported 
            self-harm thoughts.</strong> These are children under 12.
          </p>
          <p className="text-stone-300">
            There is no &ldquo;post&rdquo; in their PTSD. The trauma is not in the past. It is happening 
            right now, every day, with no end in sight. And when these traumatized children grow up — if they 
            grow up — the cycle of violence continues. This is how wars create the next generation of wars.
          </p>
        </div>
      </section>

      {/* Section: Drone Strikes on Families */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Drone Strikes: &ldquo;Bug Splat&rdquo;
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          US drone operators use the term &ldquo;bug splat&rdquo; to describe the projected kill radius of a 
          missile strike. The term refers to the pattern of body parts spread across the ground. When the target 
          is a family compound — which it often is, because &ldquo;targets&rdquo; live with their families — the 
          bug splat includes children.
        </p>

        <DroneChildrenChart />

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Ahmadi Family</h3>
          <p className="text-stone-700 mb-3">
            On August 29, 2021 — during the chaotic US withdrawal from Kabul — a US drone strike hit a white 
            Toyota Corolla. The Pentagon initially claimed it had destroyed a &ldquo;ISIS-K vehicle-borne IED.&rdquo; 
            The New York Times investigation revealed the target was <strong>Zemari Ahmadi</strong>, an aid worker 
            for a US-based NGO. He was loading water containers into his car.
          </p>
          <p className="text-stone-700 mb-3">
            The strike killed <strong>10 members of his family</strong>, including <strong>7 children</strong>. 
            The youngest was <strong>2 years old</strong>. The Pentagon admitted the strike was a &ldquo;tragic 
            mistake.&rdquo; No one was disciplined. No one was prosecuted. The military investigated itself and 
            found no violation of law.
          </p>
          <p className="text-stone-700">
            This is the pattern. A drone strike kills children. The military calls it lawful. An investigation 
            clears everyone. A &ldquo;condolence payment&rdquo; — typically $2,500 — is offered. And the next 
            strike happens.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Signature Strikes: Killing by Pattern</h3>
          <p className="text-stone-700 mb-3">
            The Obama administration introduced &ldquo;signature strikes&rdquo; — drone attacks authorized not 
            against named individuals but against patterns of behavior that looked &ldquo;suspicious.&rdquo; 
            A group of men loading a truck? Strike. A gathering of military-age males? Strike. Men doing jumping 
            jacks? Strike (this actually happened in Yemen).
          </p>
          <p className="text-stone-700">
            The problem: in rural tribal areas of Pakistan, Yemen, and Somalia, large family gatherings are 
            common — weddings, funerals, community meetings. These gatherings look like &ldquo;suspicious 
            patterns&rdquo; from 30,000 feet. At least <strong>8 wedding parties</strong> have been hit by US 
            airstrikes since 2001. Each one included children.
          </p>
        </div>
      </section>

      {/* The Orphan Pipeline */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Orphan-to-Extremist Pipeline
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Kill a man&apos;s father with a drone strike. His village is destroyed. His school is rubble. He grows 
          up in a refugee camp or on the streets. An armed group offers food, purpose, and revenge. He joins. 
          Now he&apos;s a &ldquo;militant.&rdquo; Now there&apos;s a drone with his name on it too.
        </p>
        <div className="bg-red-950/10 border border-red-200 rounded-lg p-6 my-6">
          <p className="text-stone-700 mb-3">
            This is not speculation. This is documented. A <strong>2015 study by the RAND Corporation</strong> found 
            that drone strikes in Yemen correlated with <strong>increased</strong> recruitment for Al-Qaeda in the 
            Arabian Peninsula (AQAP). Every strike that killed civilians — especially children — generated new recruits.
          </p>
          <p className="text-stone-700 mb-3">
            <strong>Faisal bin Ali Jaber</strong>, a Yemeni engineer whose nephew and brother-in-law were killed 
            in a US drone strike, testified to Congress: &ldquo;The strike that killed my family members did not 
            make America safer. It made AQAP stronger. My village, which had rejected AQAP, now had a reason to 
            listen to them.&rdquo;
          </p>
          <p className="text-stone-700">
            America creates the enemies it claims to be fighting. The 400,000 children it has killed have 
            siblings, cousins, friends, and communities. The math of revenge is simple and infinite.
          </p>
        </div>
      </section>

      {/* Detailed Country Breakdown */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Children Killed by Country: The Full Scope
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The 400,000+ child death toll spans multiple countries and conflicts. Each represents a deliberate choice 
          by the US government to prioritize military objectives over civilian protection. The numbers below are 
          conservative estimates — the true toll is likely much higher.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-3 py-3 text-left text-xs">Country</th>
                <th className="px-3 py-3 text-right text-xs">Direct Deaths</th>
                <th className="px-3 py-3 text-right text-xs">Indirect Deaths</th>
                <th className="px-3 py-3 text-right text-xs">Orphans Created</th>
                <th className="px-3 py-3 text-right text-xs">Displaced</th>
                <th className="px-3 py-3 text-left text-xs">Period</th>
              </tr>
            </thead>
            <tbody>
              {childCasualtiesByCountry.map((country, i) => (
                <tr key={i} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-3 py-3 font-bold text-red-800">{country.country}</td>
                  <td className="px-3 py-3 text-right font-medium text-red-700">{country.directKilled}</td>
                  <td className="px-3 py-3 text-right font-medium text-red-600">{country.indirectDeaths}</td>
                  <td className="px-3 py-3 text-right font-medium text-orange-700">{country.orphans}</td>
                  <td className="px-3 py-3 text-right font-medium text-orange-600">{country.displaced}</td>
                  <td className="px-3 py-3 text-xs text-stone-600">{country.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-800 border border-red-300 rounded-lg p-6 my-6">
          <h3 className="font-bold text-red-800 text-lg mb-2">Direct vs. Indirect Deaths</h3>
          <p className="text-stone-700 mb-3">
            <strong>Direct deaths</strong> are children killed by bombs, bullets, and drone strikes. 
            <strong>Indirect deaths</strong> are children who died because war destroyed hospitals, 
            water treatment plants, food distribution, and healthcare systems. A child who dies of 
            cholera because US bombing destroyed the water plant is a war casualty.
          </p>
          <p className="text-stone-700">
            The distinction matters legally but not morally. When you destroy a country's infrastructure, 
            you know children will die from disease and starvation. The Pentagon's war planners 
            include these "excess deaths" in their casualty projections. They bomb anyway.
          </p>
        </div>
      </section>

      {/* Weapons Used Against Children */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Weapons That Kill Children
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          American defense contractors profit from every child death. The bombs that hit schools, 
          the drones that strike families, the missiles that destroy hospitals — they all have 
          corporate logos and profit margins. Lockheed Martin's annual revenue is $67 billion. 
          How much is blood money?
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-3 py-3 text-left text-xs">Weapon System</th>
                <th className="px-3 py-3 text-right text-xs">Children Killed</th>
                <th className="px-3 py-3 text-left text-xs">Notable Child Casualties</th>
                <th className="px-3 py-3 text-right text-xs">Cost Per Unit</th>
              </tr>
            </thead>
            <tbody>
              {weaponsUsedOnChildren.map((weapon, i) => (
                <tr key={i} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-3 py-3 font-medium text-xs">{weapon.weapon}</td>
                  <td className="px-3 py-3 text-right font-bold text-red-700 text-xs">{weapon.childrenKilled}</td>
                  <td className="px-3 py-3 text-xs text-stone-600">{weapon.notable}</td>
                  <td className="px-3 py-3 text-right font-medium text-green-700 text-xs">{weapon.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-stone-100 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">Cluster Bombs: Weapons Designed to Kill Children</h3>
            <p className="text-stone-700 text-sm mb-3">
              Cluster bombs are designed to spread smaller bomblets over wide areas. Many fail to 
              explode on impact, becoming de facto land mines. Children are naturally curious about 
              shiny objects. <strong>98% of cluster bomb victims are civilians, 40% are children.</strong>
            </p>
            <p className="text-stone-700 text-sm mb-3">
              110 countries have banned cluster bombs under the Convention on Cluster Munitions (2008). 
              The United States has not signed. US allies continue using American-made cluster munitions 
              in Yemen, killing children decades after the initial strikes.
            </p>
            <p className="text-stone-700 text-sm">
              <strong>Estimated children killed by US cluster bombs since 2001: 6,500+</strong>
            </p>
          </div>
          <div className="bg-stone-100 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">Depleted Uranium: Poisoning Generations</h3>
            <p className="text-stone-700 text-sm mb-3">
              The US military has fired over 750 tons of depleted uranium (DU) ammunition in Iraq and 
              Afghanistan. DU is a radioactive heavy metal that causes cancer, birth defects, and 
              genetic damage. It has a half-life of 4.5 billion years.
            </p>
            <p className="text-stone-700 text-sm mb-3">
              Iraqi doctors report a 400% increase in birth defects and childhood cancers in areas 
              where DU weapons were used. The WHO refused to publish a 2013 study showing the link 
              between DU and birth defects, citing "political sensitivities."
            </p>
            <p className="text-stone-700 text-sm">
              <strong>Children with birth defects linked to DU: 140,000+</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Profits from Child Deaths */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Corporate Profits from Dead Children
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Every child killed in America's wars generates profit for defense contractors. The bombs 
          must be replaced. The drones must be refueled. The missiles must be reordered. The military-industrial 
          complex has a vested interest in creating enemies — and child casualties create enemies.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-3 py-3 text-left text-xs">Company</th>
                <th className="px-3 py-3 text-right text-xs">War Revenue/Year</th>
                <th className="px-3 py-3 text-left text-xs">Child-Killing Products</th>
                <th className="px-3 py-3 text-right text-xs">Child Deaths Linked</th>
              </tr>
            </thead>
            <tbody>
              {contractorProfitsFromChildDeaths.map((company, i) => (
                <tr key={i} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-3 py-3 font-bold text-xs">{company.company}</td>
                  <td className="px-3 py-3 text-right font-bold text-green-700 text-xs">{company.childRelatedRevenue}</td>
                  <td className="px-3 py-3 text-xs text-stone-600">{company.products}</td>
                  <td className="px-3 py-3 text-right font-bold text-red-700 text-xs">{company.childDeathsLinked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-800 border border-red-300 rounded-lg p-6 my-6">
          <h3 className="font-bold text-red-800 text-lg mb-2">The Revolving Door</h3>
          <p className="text-stone-700 mb-3">
            Defense contractors employ former Pentagon officials who approved weapons purchases. 
            Pentagon officials take jobs with contractors after retiring. The same people rotate 
            between roles — sometimes approving the use of weapons that kill children, sometimes 
            profiting from their sale.
          </p>
          <p className="text-stone-700 mb-3">
            <strong>Examples:</strong> General Lloyd Austin went from Raytheon board member to Defense 
            Secretary. General James Mattis went from Defense Secretary to Theranos board. General 
            David Petraeus went from CIA Director to KKR (private equity firm investing in defense).
          </p>
          <p className="text-stone-700">
            These officials never ask: "Will this weapon kill children?" They ask: "Will this weapon 
            kill the enemy?" When children are killed, they are reclassified as "enemy combatants" 
            or "human shields" or "collateral damage."
          </p>
        </div>
      </section>

      {/* US Military Recruiting Children */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          America's Own Child Soldiers
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The United States condemns other countries for using child soldiers while recruiting 
          17-year-olds into its own military. In 2023, over <strong>25,000 American children under 18</strong> 
          were recruited into the US military. They cannot vote, cannot drink, cannot sign contracts — 
          but they can sign up to kill and die for their country.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-3 py-3 text-left text-xs">Military Branch</th>
                <th className="px-3 py-3 text-left text-xs">Min Age</th>
                <th className="px-3 py-3 text-right text-xs">Total Recruited 2023</th>
                <th className="px-3 py-3 text-right text-xs">Under 18</th>
                <th className="px-3 py-3 text-left text-xs">Target Demographics</th>
              </tr>
            </thead>
            <tbody>
              {usChildRecruiting.map((branch, i) => (
                <tr key={i} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-3 py-3 font-bold text-xs">{branch.branch}</td>
                  <td className="px-3 py-3 text-xs">{branch.minAge}</td>
                  <td className="px-3 py-3 text-right font-medium text-xs">{branch.recruited2023}</td>
                  <td className="px-3 py-3 text-right font-bold text-orange-700 text-xs">{branch.underAge18}</td>
                  <td className="px-3 py-3 text-xs text-stone-600">{branch.targetDemo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-bold text-lg mb-3">Targeting Poor Children</h3>
          <p className="text-stone-700 text-sm mb-3">
            US military recruiting explicitly targets poor communities, minority neighborhoods, and 
            failing schools. Recruiting stations are disproportionately located in low-income areas. 
            The "economic draft" pushes children into military service as their only escape from poverty.
          </p>
          <p className="text-stone-700 text-sm mb-3">
            The military spends <strong>$830 million annually</strong> on recruiting advertising, much 
            of it targeted at children through video games, social media, and school programs. The Army 
            has an eSports team. The Navy sponsors NASCAR. The Air Force advertises on Twitch.
          </p>
          <p className="text-stone-700 text-sm">
            Children from military families are <strong>3x more likely</strong> to enlist — creating 
            a hereditary warrior class where the children of veterans fight the wars that create more 
            veterans' children.
          </p>
        </div>
      </section>

      {/* Opportunity Cost Analysis */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          What We Could Have Built Instead
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The $8 trillion spent on post-9/11 wars could have transformed human civilization. Instead, 
          it was used to kill 400,000 children. Below is what that money could have accomplished if 
          directed toward life instead of death.
        </p>

        <div className="space-y-4 my-8">
          {opportunityCostAnalysis.map((item, i) => (
            <div key={i} className="border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-red-800">{item.killed}</h3>
                <span className="font-bold text-green-700 text-sm">{item.warCost}</span>
              </div>
              <p className="text-stone-700 text-sm mb-2">{item.alternativeUse}</p>
              <p className="text-stone-600 text-xs"><strong>Cost per child killed:</strong> {item.perChild}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-950/20 border border-green-400 rounded-lg p-6 my-6">
          <h3 className="font-bold text-green-800 text-lg mb-2">The Math of Peace</h3>
          <p className="text-stone-700 mb-3">
            The annual global cost to end extreme poverty: <strong>$175 billion</strong> (UN estimate). 
            The annual US military budget: <strong>$858 billion</strong>. America could end extreme 
            poverty worldwide and still have the largest military budget in history.
          </p>
          <p className="text-stone-700 mb-3">
            The cost to provide clean water to every person on Earth: <strong>$150 billion</strong> 
            (WHO estimate). The cost of the F-35 fighter jet program: <strong>$1.7 trillion</strong>. 
            One weapons program costs more than clean water for humanity.
          </p>
          <p className="text-stone-700">
            We have the resources to solve every human problem. We choose to spend them on creating 
            new problems instead.
          </p>
        </div>
      </section>

      {/* Long-term Health Impacts */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Health Crisis We Created
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          War doesn't just kill children — it creates lifelong health crises for survivors. Malnutrition, 
          PTSD, birth defects, missing limbs, preventable diseases. The healthcare costs of America's wars 
          will continue for generations. But these costs are borne by the victims, not the perpetrators.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-3 py-3 text-left text-xs">Health Condition</th>
                <th className="px-3 py-3 text-right text-xs">Children Affected</th>
                <th className="px-3 py-3 text-left text-xs">Primary Regions</th>
                <th className="px-3 py-3 text-right text-xs">Treatment Cost</th>
                <th className="px-3 py-3 text-left text-xs">Preventable?</th>
              </tr>
            </thead>
            <tbody>
              {childHealthImpacts.map((condition, i) => (
                <tr key={i} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-3 py-3 font-medium text-xs">{condition.condition}</td>
                  <td className="px-3 py-3 text-right font-bold text-red-700 text-xs">{condition.affected}</td>
                  <td className="px-3 py-3 text-xs text-stone-600">{condition.regions}</td>
                  <td className="px-3 py-3 text-right font-medium text-green-700 text-xs">{condition.treatmentCost}</td>
                  <td className="px-3 py-3 text-xs text-green-800">{condition.preventable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-bold text-lg mb-3">Birth Defects and Genetic Damage</h3>
          <p className="text-stone-700 text-sm mb-3">
            Children born in Iraq after 2003 show dramatically higher rates of birth defects, cancers, 
            and genetic abnormalities. Studies link these to depleted uranium weapons, chemical exposure 
            from bombed facilities, and environmental contamination from military operations.
          </p>
          <p className="text-stone-700 text-sm mb-3">
            <strong>Fallujah, Iraq:</strong> Birth defects increased 400% after the 2004 US assault. 
            Pediatric cancer rates increased 1,200%. The city was hit with white phosphorus and depleted 
            uranium. The contamination will persist for generations.
          </p>
          <p className="text-stone-700 text-sm">
            American soldiers who served in Iraq also report higher rates of birth defects in their 
            children. The difference: US veterans get VA healthcare. Iraqi children get nothing.
          </p>
        </div>
      </section>

      {/* Ally Complicity */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          US Allies: Partners in Child Killing
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          America doesn't kill children alone. It arms, funds, and provides intelligence to allied 
          governments that kill children with US weapons. Then it blocks international investigations 
          and vetoes UN resolutions calling for accountability. The US is the indispensable nation — 
          indispensable to war crimes.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-3 py-3 text-left text-xs">US Ally</th>
                <th className="px-3 py-3 text-right text-xs">Children Killed</th>
                <th className="px-3 py-3 text-right text-xs">US Military Support</th>
                <th className="px-3 py-3 text-left text-xs">US Protection from Accountability</th>
              </tr>
            </thead>
            <tbody>
              {allyComplicity.map((ally, i) => (
                <tr key={i} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-3 py-3 font-bold text-xs">{ally.ally}</td>
                  <td className="px-3 py-3 text-right font-bold text-red-700 text-xs">{ally.childrenKilled}</td>
                  <td className="px-3 py-3 text-right font-medium text-green-700 text-xs">{ally.usSupport}</td>
                  <td className="px-3 py-3 text-xs text-stone-600">{ally.accountability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-800 border border-red-300 rounded-lg p-6 my-6">
          <h3 className="font-bold text-red-800 text-lg mb-2">The Saudi-US Child Killing Partnership</h3>
          <p className="text-stone-700 mb-3">
            Since 2015, the US-backed Saudi coalition has killed over <strong>12,000 Yemeni children</strong>. 
            The weapons are American. The targets are chosen using US intelligence. The planes are refueled 
            by US tankers. When the UN tried to investigate, the US blocked it.
          </p>
          <p className="text-stone-700 mb-3">
            <strong>Yemen school bus bombing (2018):</strong> 40 children killed by a US-made bomb. CNN 
            found the bomb fragments with Lockheed Martin serial numbers. The Pentagon said the strike 
            was "legitimate" because the bus was in a "military zone" (a market).
          </p>
          <p className="text-stone-700">
            Congress passed resolutions to end US support for the Yemen war. Trump vetoed them. Biden 
            promised to end support, then approved $650 million in new weapons sales to Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Generational Trauma */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Entire Generations Traumatized
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          America's wars have created entire generations of children who know only violence, displacement, 
          and trauma. These children will become adults. They will have children of their own. Trauma is 
          inherited. The psychological damage of war echoes through generations.
        </p>

        <div className="space-y-4 my-8">
          {generationalTrauma.map((gen, i) => (
            <div key={i} className="border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-red-800">{gen.generation}</h3>
                <span className="font-bold text-red-600 text-sm">Trauma Rate: {gen.traumaRate}</span>
              </div>
              <p className="text-stone-700 text-sm">{gen.characteristics}</p>
            </div>
          ))}
        </div>

        <div className="not-prose bg-stone-900 text-white rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Science of Inherited Trauma</h3>
          <p className="text-stone-300 mb-3">
            Epigenetic research shows that trauma can be passed to children through changes in gene 
            expression. Children of Holocaust survivors show genetic markers of their parents' trauma. 
            Children of 9/11 survivors show similar markers. The children of America's war zones will 
            carry these scars in their DNA.
          </p>
          <p className="text-stone-300 mb-3">
            But inherited trauma is not just genetic — it's cultural. Children who grow up in war zones 
            learn that violence is normal. That authority cannot be trusted. That the world is dangerous. 
            These lessons shape how they raise their own children.
          </p>
          <p className="text-stone-300">
            America has created multiple generations of traumatized children who will become traumatized 
            adults who will raise traumatized children. The psychological damage of the War on Terror 
            will echo for centuries.
          </p>
        </div>
      </section>

      {/* Bottom line */}
      <section className="my-12">
        <div className="not-prose bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-stone-300 text-lg mb-4">
            400,000 children are dead. Not combatants. Not threats. Not collateral damage. Children. They were 
            in schools, in homes, in markets, in hospital beds, in their mothers&apos; arms. They were killed by 
            the most technologically advanced military in human history — a military that can put a missile through 
            a car window from 30,000 feet but somehow keeps hitting schools.
          </p>
          <p className="text-stone-300 text-lg mb-4">
            No US official has ever been prosecuted for killing children in a military strike. Not one. In 25 years 
            of continuous war. Not one court martial, not one prison sentence, not one career ended. The Pentagon 
            investigates itself, clears itself, and moves on. The children remain dead.
          </p>
          <p className="text-stone-300 text-lg">
            When you hear the phrase &ldquo;collateral damage,&rdquo; remember: it means a 4-year-old in Minab. 
            A 6-year-old on a school bus in Yemen. A 2-year-old in a white Toyota in Kabul. Collateral damage 
            is a word we invented so we don&apos;t have to say what we actually did.
          </p>
        </div>
      </section>

      <RelatedArticles 
        articles={[
          {
            title: 'Women\'s War: The Gender Casualties of Military Empire',
            slug: 'womens-war',
            desc: 'Sexual violence, military assault, and the invisible casualties of war'
          },
          {
            title: 'Drones Kill List: America\'s Assassination Program',
            slug: 'drones-kill-list',
            desc: 'How America decides who dies by drone - including entire families'
          },
          {
            title: 'The Pentagon\'s Torture Program',
            slug: 'torture-program',
            desc: 'Systematic abuse hidden from oversight - including child prisoners'
          },
          {
            title: 'Environmental Cost of War',
            slug: 'environmental-cost',
            desc: 'How military operations poison the environments where children live'
          },
          {
            title: 'Pentagon Waste: Trillions Unaccounted For',
            slug: 'pentagon-waste',
            desc: 'Money that could have saved children spent on weapons that kill them'
          },
          {
            title: 'Veterans Betrayed: Broken Promises',
            slug: 'veterans-betrayed',
            desc: 'How the US treats its own child soldiers after they grow up'
          }
        ]}
      />

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources & Documentation</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-3 text-red-800">Primary Sources</h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• Brown University Costs of War Project, "Human Cost of Post-9/11 Wars" (2023)</li>
              <li>• UNICEF, "Children in Armed Conflict" Annual Reports (2018–2024)</li>
              <li>• UN Office for Children and Armed Conflict, Country Reports</li>
              <li>• Save the Children, "Trapped: Gaza's Children" (2023)</li>
              <li>• Iraqi Ministry of Labor and Social Affairs, Orphan Survey (2018)</li>
              <li>• WHO, "Mental Health of Children in Conflict Zones" (2023)</li>
              <li>• Defense Department Casualty Reports (FOIA releases)</li>
              <li>• Congressional Research Service Reports on Child Soldiers Prevention Act</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3 text-red-800">Investigative Journalism</h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• New York Times, "How a U.S. Drone Strike Killed the Wrong Person in Kabul" (2021)</li>
              <li>• CNN, "Yemen School Bus Bomb Made by Lockheed Martin" (2018)</li>
              <li>• Bureau of Investigative Journalism, Drone Strike Database (2004-2024)</li>
              <li>• Airwars, Civilian Casualty Assessments (2014–2024)</li>
              <li>• The Intercept, "The Drone Papers" (2015)</li>
              <li>• Washington Post, "At war with the truth" Pentagon Papers analysis</li>
              <li>• Associated Press, "Child casualties in US airstrikes" investigations</li>
              <li>• Reuters, "Depleted uranium and birth defects in Iraq" studies</li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-bold text-lg mb-3">Key Academic Studies</h3>
          <ul className="space-y-2 text-stone-600 text-sm">
            <li>• RAND Corporation, "Drone Strikes and Terrorist Recruitment" (2015)</li>
            <li>• Harvard School of Public Health, "Iraqi Child Mortality Study" (2013)</li>
            <li>• Johns Hopkins Bloomberg School, "Excess Deaths in Iraq War" (2006, 2013)</li>
            <li>• Columbia University, "PTSD in Palestinian Children" longitudinal study (2019-2023)</li>
            <li>• American Journal of Public Health, "Depleted Uranium Health Effects" (2020)</li>
            <li>• Lancet, "Health consequences of war on children" meta-analysis (2022)</li>
            <li>• Child Development Perspectives, "Intergenerational trauma transmission" (2021)</li>
          </ul>
        </div>

        <div className="bg-slate-800 border border-red-300 rounded-lg p-6 my-6">
          <p className="text-stone-700 text-sm mb-3">
            <strong>Note on Casualty Counting:</strong> All child death figures in this analysis are 
            conservative estimates from peer-reviewed sources. The true toll is likely much higher. 
            Many deaths in remote areas go unrecorded. Many indirect deaths (from disease, malnutrition, 
            lack of medical care) are not attributed to military operations.
          </p>
          <p className="text-stone-700 text-sm">
            <strong>Pentagon Classification:</strong> The US military often classifies all males over 
            16 as "military-age males" and potential combatants. This inflates enemy casualty counts 
            and deflates civilian casualties, including children who may be classified as adults.
          </p>
        </div>
      </section>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Further Reading</h2>
        <h3>Analysis Articles</h3>
        <ul>
          <li><Link href="/analysis/media-and-war" className="text-red-400 hover:text-red-800">Manufacturing Consent: How Media Sells Every War</Link></li>
          <li><Link href="/analysis/surveillance-state" className="text-red-400 hover:text-red-800">The Surveillance State: War Powers Turned Inward</Link></li>
          <li><Link href="/analysis/war-economy" className="text-red-400 hover:text-red-800">The War Economy: Who Profits from Endless Conflict</Link></li>
          <li><Link href="/analysis/cost-of-doing-nothing" className="text-red-400 hover:text-red-800">The Cost of Doing Nothing: Why Peace is "Unaffordable"</Link></li>
          <li><Link href="/analysis/oil-and-war" className="text-red-400 hover:text-red-800">Blood for Oil: Resource Wars and Energy Empire</Link></li>
          <li><Link href="/analysis/private-military" className="text-red-400 hover:text-red-800">Private Military Companies: Mercenaries and Accountability</Link></li>
          <li><Link href="/analysis/shadow-wars" className="text-red-400 hover:text-red-800">Shadow Wars: America's Secret Military Operations</Link></li>
        </ul>

        <h3>Current Conflicts</h3>
        <ul>
          <li><Link href="/conflicts/iran" className="text-red-400 hover:text-red-800">Iran Conflict: Child casualties in current operations</Link></li>
          <li><Link href="/conflicts/gaza" className="text-red-400 hover:text-red-800">Gaza: US weapons and child deaths</Link></li>
          <li><Link href="/conflicts/yemen" className="text-red-400 hover:text-red-800">Yemen War: Saudi-US partnership targeting children</Link></li>
        </ul>

        <blockquote className="border-l-4 border-red-600 bg-slate-800 p-4 my-6">
          <p className="text-lg font-medium">
            &ldquo;A child miseducated is a child lost.&rdquo;
          </p>
          <footer className="text-stone-400 mt-2">— John F. Kennedy</footer>
          <p className="text-sm text-stone-600 mt-2">
            <em>400,000 children weren't miseducated. They were murdered. By us.</em>
          </p>
        </blockquote>
      </div>

      <ArticleSchema 
        title="Children's War: 400,000+ Children Killed in America's Post-9/11 Wars"
        description="400,000+ children killed in American wars since 9/11. School bombings, drone strikes on families, child soldiers, and generations traumatized. The hidden cost of empire."
        datePublished="2026-03-06"
        url="https://www.warcosts.org/analysis/childrens-war"
      />

      <BackToTop />
    </div>
  )
}
