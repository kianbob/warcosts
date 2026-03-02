import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
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

export default function ChildrensWarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: "Children's War" }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
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
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
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

        <div className="bg-stone-900 text-white rounded-lg p-6 my-6">
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

      {/* Bottom line */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
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

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li>• Brown University Costs of War Project, &ldquo;Human Cost of Post-9/11 Wars&rdquo; (2023)</li>
          <li>• UNICEF, &ldquo;Children in Armed Conflict&rdquo; Annual Reports (2018–2024)</li>
          <li>• Save the Children, &ldquo;Trapped: Gaza&apos;s Children&rdquo; (2023)</li>
          <li>• Bureau of Investigative Journalism, Drone Strike Database</li>
          <li>• New York Times, &ldquo;How a U.S. Drone Strike Killed the Wrong Person in Kabul&rdquo; (2021)</li>
          <li>• Airwars, Civilian Casualty Assessments (2014–2024)</li>
          <li>• UN Office of the Special Representative for Children and Armed Conflict, Annual Reports</li>
          <li>• RAND Corporation, &ldquo;Drone Strikes and Terrorist Recruitment&rdquo; (2015)</li>
          <li>• Iraqi Ministry of Labor and Social Affairs, Orphan Survey (2018)</li>
          <li>• WHO, &ldquo;Mental Health of Children in Conflict Zones&rdquo; (2023)</li>
          <li>• Congressional Research Service, &ldquo;Child Soldiers Prevention Act: Waivers and Exceptions&rdquo; (2023)</li>
          <li>• CNN, &ldquo;Yemen School Bus Bomb Made by Lockheed Martin&rdquo; (2018)</li>
        </ul>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/analysis/womens-war" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Women&apos;s War</h3>
            <p className="text-sm text-stone-500">Sexual violence, military assault, and the invisible casualties.</p>
          </Link>
          <Link href="/analysis/drones-kill-list" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">The Kill List</h3>
            <p className="text-sm text-stone-500">How America decides who dies by drone.</p>
          </Link>
          <Link href="/analysis/refugee-crisis" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">The Refugee Crisis</h3>
            <p className="text-sm text-stone-500">38 million displaced — then refused entry.</p>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
