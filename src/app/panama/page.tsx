import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Panama Invasion — Operation Just Cause, $164M Cost, 23 US Killed, Noriega, El Chorrillo Destroyed | WarCosts',
  description: 'Operation Just Cause: Bush Sr invaded Panama in December 1989. 27,684 troops, 23 US killed, 325 wounded, 500-4,000 Panamanian civilians killed. Noriega — a CIA asset turned target. El Chorrillo burned. Cost $164M ($420M adjusted).',
  keywords: ['Panama invasion', 'Operation Just Cause', 'Noriega Panama', 'El Chorrillo', 'Panama war cost', 'Bush Panama invasion', 'US invasion Panama 1989'],
  openGraph: {
    title: 'Operation Just Cause: Regime Change in 3 Weeks',
    description: 'Bush invaded Panama to arrest a CIA asset. 27,684 troops to grab one man. El Chorrillo burned. 500-4,000 civilians killed. The drug war meets regime change.',
    url: 'https://warcosts.org/panama',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'US Troops Deployed', value: '27,684' },
  { label: 'US Killed', value: '23' },
  { label: 'US Wounded', value: '325' },
  { label: 'Panamanian Civilians Killed', value: '500-4,000' },
  { label: 'Panamanian Military Killed', value: '314' },
  { label: 'Cost (2026 Dollars)', value: '$420 Million' },
]

const costBreakdown = [
  { category: 'Combat Operations', amount: '$80M', adjusted: '$204M', desc: '27,684 troops from 82nd Airborne, Rangers, SEALs, Delta Force, Marines, mechanized infantry' },
  { category: 'Airlift & Logistics', amount: '$35M', adjusted: '$89M', desc: 'Largest US combat airdrop since WWII — C-141s and C-130s from multiple US bases' },
  { category: 'Naval Operations', amount: '$20M', adjusted: '$51M', desc: 'Aircraft carriers, amphibious ships, canal zone security' },
  { category: 'Post-Invasion Stabilization', amount: '$15M', adjusted: '$38M', desc: 'Garrison, reconstruction of El Chorrillo, transition to Endara government' },
  { category: 'Equipment & Munitions', amount: '$14M', adjusted: '$36M', desc: 'First combat use of F-117 Stealth Fighter, Apache helicopters, AC-130 gunships' },
  { category: 'Total', amount: '$164M', adjusted: '$420M', desc: 'Approximate total direct military cost' },
]

const casualties = [
  { group: 'US Military Killed', count: '23', note: '3 SEALs, Rangers, infantry — several from friendly fire' },
  { group: 'US Military Wounded', count: '325', note: 'Including serious injuries from parachute jumps and urban combat' },
  { group: 'Panamanian Defense Forces Killed', count: '314', note: 'PDF soldiers and paramilitary "Dignity Battalions"' },
  { group: 'Panamanian Civilians Killed', count: '500-4,000', note: 'Pentagon says 202. Independent estimates: 500-4,000. Mass graves discovered.' },
  { group: 'Displaced Panamanians', count: '18,000+', note: 'Primarily from El Chorrillo neighborhood, which was destroyed' },
  { group: 'US Civilians Killed', count: '3', note: 'American dependents caught in crossfire near military installations' },
]

const timeline = [
  { year: '1966-1981', title: 'Noriega: CIA Asset', desc: 'Manuel Noriega has been on the CIA payroll since 1966. He provides intelligence on leftist movements in Latin America, facilitates US operations, and helps the US monitor Fidel Castro. By 1976, CIA Director George H.W. Bush is personally briefed on Noriega. The US knows Noriega is involved in drug trafficking. They don\'t care — he\'s useful.' },
  { year: '1977', title: 'Panama Canal Treaties', desc: 'Carter signs treaties transferring the Panama Canal to Panama by December 31, 1999. The treaties are deeply unpopular with American conservatives. Reagan campaigns against them. The Canal Zone becomes a neuralgic political issue — Panama controls a chokepoint of global commerce, and many Americans resent giving it up.' },
  { year: '1981-1983', title: 'Noriega Rises to Power', desc: 'After the death of Omar Torrijos (suspicious plane crash), Noriega consolidates power as head of the Panamanian Defense Forces. He becomes the de facto ruler of Panama. The Reagan administration increases payments to Noriega to $200,000/year. He\'s helping the Contras in Nicaragua and providing intelligence on Cuba. His drug trafficking accelerates — but he\'s Washington\'s drug trafficker.' },
  { year: '1986', title: 'The Relationship Sours', desc: 'Seymour Hersh exposes Noriega\'s drug trafficking, money laundering, and involvement in the murder of dissident Hugo Spadafora (who was found decapitated). The Senate passes resolutions calling for Noriega\'s removal. The CIA cuts official payments. But Noriega has leverage — he knows about US operations in Central America, including arms-for-drugs schemes.' },
  { year: 'Feb 1988', title: 'Federal Indictments', desc: 'Two federal grand juries in Miami and Tampa indict Noriega on drug trafficking, racketeering, and money laundering charges. A sitting head of state is indicted by the country that put him in power and knew about his crimes for 20 years. Reagan tries economic sanctions and covert operations to remove Noriega. All fail.' },
  { year: 'May 1989', title: 'Stolen Election', desc: 'Noriega\'s candidate loses the presidential election to Guillermo Endara by a 3-to-1 margin. Noriega annuls the results. His Dignity Battalion thugs beat Endara and vice-presidential candidate Guillermo Ford bloody in the streets — photos of Ford covered in blood make international news. Bush calls for Noriega\'s removal but takes no action.' },
  { year: 'Oct 3, 1989', title: 'Failed Coup', desc: 'Panamanian military officers attempt a coup against Noriega. They request US help. The Bush administration, caught off-guard, provides minimal support. The coup fails. Noriega executes the plotters. Bush is humiliated — accused of weakness by Democrats and Republicans alike. The failed coup makes military intervention almost inevitable.' },
  { year: 'Dec 15, 1989', title: 'Noriega Declares War', desc: 'Panama\'s rubber-stamp National Assembly declares a "state of war" with the United States and names Noriega "Maximum Leader." This is largely rhetorical, but the Bush administration seizes on it as justification. The same day, a US Marine lieutenant, Robert Paz, is shot and killed at a PDF checkpoint. Another US officer and his wife are detained and she is threatened with sexual assault.' },
  { year: 'Dec 20, 1989', title: 'H-Hour: Operation Just Cause', desc: 'At 1:00 AM, 27,684 US troops launch simultaneous assaults across Panama. It is the largest US combat operation since Vietnam. Rangers parachute onto Torrijos International Airport and Rio Hato airfield. SEALs attack Noriega\'s private jet and a patrol boat at Paitilla Airport — the SEALs are ambushed, 4 killed. Delta Force raids the Modelo Prison. The 82nd Airborne secures key objectives. AC-130 gunships devastate PDF positions.' },
  { year: 'Dec 20-24', title: 'El Chorrillo Burns', desc: 'The El Chorrillo neighborhood — a dense, poor, predominantly Black neighborhood near PDF headquarters — is devastated by US firepower. AC-130 gunships, helicopter gunships, and ground forces assault the area. Wooden buildings catch fire. Between 300 and 3,000 civilians die (accounts vary wildly). 18,000 residents are displaced. The neighborhood is essentially destroyed. The US military refuses to allow journalists into the area for days.' },
  { year: 'Dec 20, 1989', title: 'Endara Sworn In on US Base', desc: 'Guillermo Endara — the legitimate winner of the May election — is sworn in as president on a US military base during the invasion. The symbolism is not subtle: a new government installed by American troops. Endara is widely seen as legitimate (he won the election) but his inauguration under American guns undermines his sovereignty from Day 1.' },
  { year: 'Dec 24, 1989', title: 'Noriega Flees to Vatican Embassy', desc: 'After days in hiding, Noriega seeks refuge in the Vatican Nunciature (embassy). US forces surround the building and, in one of the most bizarre military operations in history, blast rock music at maximum volume 24 hours a day — Van Halen, Guns N\' Roses, "I Fought the Law." The psychological operation draws international ridicule.' },
  { year: 'Jan 3, 1990', title: 'Noriega Surrenders', desc: 'After 10 days in the Vatican embassy, Noriega surrenders to US forces. He is flown to Miami and arraigned on drug trafficking charges. He will be convicted in 1992 and spend 17 years in US prison, 7 in French prison, and die in Panamanian prison in 2017. The man the CIA paid, protected, and promoted for 20 years ends his life in a cell.' },
  { year: 'Jan 31, 1990', title: 'Organized Resistance Ends', desc: 'The last PDF holdouts surrender. US forces begin drawing down. A garrison remains through 1999 (Canal handover). Operation Just Cause is declared a success. But the mass graves, the destroyed neighborhoods, and the civilian death toll — deliberately minimized by the Pentagon — will haunt the operation for decades.' },
]

const keyFigures = [
  { name: 'George H.W. Bush', role: 'President', desc: 'As CIA Director (1976), Bush oversaw the agency\'s relationship with Noriega. As Vice President (1981-89), he was briefed on Noriega\'s drug trafficking. As President, he ordered the invasion to remove the man he\'d helped empower. Bush claimed the invasion was about protecting American lives, defending democracy, and combating drug trafficking. None of these reasons withstand scrutiny — the US tolerated all of Noriega\'s crimes when he was useful.' },
  { name: 'Manuel Noriega', role: 'Dictator / CIA Asset', desc: 'On the CIA payroll since 1966. Paid up to $200,000/year. Facilitated CIA operations in Central America while simultaneously trafficking cocaine with the Medellín Cartel. Protected by the US until he became inconvenient. His story is the definitive case study in CIA blowback: the asset becomes the enemy, and the taxpayer pays to create him and then pays again to destroy him.' },
  { name: 'Colin Powell', role: 'Chairman, Joint Chiefs of Staff', desc: 'Oversaw the military planning of Just Cause. The operation was Powell\'s first major test as Chairman. He applied the lessons of Grenada\'s failures (thanks to Goldwater-Nichols) and Vietnam\'s overcommitment: overwhelming force, clear military objectives, rapid execution. The "Powell Doctrine" was born in Panama.' },
  { name: 'Dick Cheney', role: 'Secretary of Defense', desc: 'Approved the invasion plan. His first major decision as SecDef. Cheney\'s experience with Panama — quick, decisive, minimal political fallout — shaped his later approach to Iraq. The lesson he took: regime change works when you apply enough force. The lesson he missed: Panama was an aberration, not a template.' },
  { name: 'Guillermo Endara', role: 'Installed President', desc: 'Won the May 1989 election by a landslide, was beaten bloody by Noriega\'s thugs, then sworn in as president on a US military base during the invasion. A genuinely elected leader whose legitimacy was permanently compromised by the manner of his installation. His presidency was largely ineffective.' },
]

const whatWeGot = [
  { label: 'Noriega Captured', value: 'Yes', desc: 'The CIA\'s own asset arrested and imprisoned. It took 27,684 troops to apprehend one man the US had created, funded, and protected for two decades.' },
  { label: 'Democracy Restored', value: 'Partially', desc: 'The legitimate election winner was installed. Panama has remained democratic since. But the invasion destroyed the institutions it claimed to protect.' },
  { label: 'Drug Flow Stopped', value: 'No', desc: 'Drug trafficking through Panama increased after the invasion. The Medellín Cartel simply shifted routes. The War on Drugs remained as futile as ever.' },
  { label: 'Canal Security', value: 'Unchanged', desc: 'The Canal was never actually threatened. It was transferred to Panama on schedule in 1999.' },
  { label: 'Precedent Set', value: 'Catastrophic', desc: 'Grenada was tiny. Panama was a real country. The invasion normalized unilateral regime change — a straight line runs from Panama to Iraq.' },
  { label: 'Civilian Cost', value: 'Hidden', desc: 'The Pentagon claimed 202 civilian deaths. Independent investigations found 500-4,000. Mass graves were discovered. El Chorrillo was erased. The true toll remains disputed.' },
]

const domesticComparison = [
  { item: 'Fund the DEA for 1 year', cost: '$164M', note: 'To actually fight drugs instead of invading countries over them' },
  { item: 'Build 3,000 affordable housing units', cost: '$164M', note: 'At 1989 construction costs — replace what was destroyed in El Chorrillo' },
  { item: 'Fund 16,400 college scholarships', cost: '$164M', note: 'At $10,000 per student, 1989 tuition levels' },
  { item: 'Double the US drug treatment budget', cost: '$164M', note: 'Demand reduction vs. supply-side military intervention' },
]

const faqs = [
  {
    q: 'Why did the US invade Panama?',
    a: 'The official reasons: protecting American lives, defending democracy, combating drug trafficking, and protecting the Panama Canal. The real reasons: Noriega had become an embarrassment. A CIA asset indicted for drug trafficking could expose US complicity in Central American narcotics operations. The May 1989 stolen election and the October coup failure made Bush look weak. The December killing of a US Marine provided the final pretext. It was about cleaning up the CIA\'s mess and Bush\'s political image.',
  },
  {
    q: 'How many civilians died in the Panama invasion?',
    a: 'This is one of the most contested numbers in modern military history. The Pentagon initially claimed 202 civilian deaths. The US Southern Command later revised this to 314 military and 202 civilian — a number widely considered fraudulent. Independent investigations by human rights organizations estimate 500 to 4,000 civilian deaths. Mass graves were discovered in the months after the invasion. The El Chorrillo neighborhood was essentially destroyed, with 18,000 residents displaced. The true number will likely never be known because the US military controlled access to the affected areas and refused independent investigation.',
  },
  {
    q: 'Was Noriega really a CIA asset?',
    a: 'Yes, definitively. Noriega was on the CIA payroll from 1966 to 1986, earning up to $200,000 per year. He was recruited as a young intelligence officer and rose through the ranks with US support. CIA Director George H.W. Bush was personally briefed on Noriega in 1976. The CIA knew about Noriega\'s drug trafficking as early as the mid-1970s but continued the relationship because he was valuable for anti-communist operations in Central America. Noriega also provided intelligence to Cuba and sold secrets to multiple countries simultaneously.',
  },
  {
    q: 'What happened to El Chorrillo?',
    a: 'El Chorrillo was a poor, predominantly Afro-Panamanian neighborhood adjacent to Noriega\'s PDF headquarters (the Comandancia). On the night of the invasion, US forces attacked the Comandancia with AC-130 gunships, helicopter gunships, and ground troops. The dense wooden structures of El Chorrillo caught fire. Thousands of homes were destroyed. Between 300 and 3,000 residents were killed (estimates vary). 18,000 were displaced. The US military blocked journalist access for days. The neighborhood was essentially rebuilt from scratch — critics call it gentrification by gunship.',
  },
  {
    q: 'Did the Panama invasion stop drug trafficking?',
    a: 'No. Drug trafficking through Panama increased after the invasion. With Noriega gone, the drug cartels simply diversified their routes and bribed new officials. Panama remained a major money laundering center. The invasion demonstrated a fundamental truth about the War on Drugs: you cannot stop drug trafficking by removing individual leaders. The economics of the drug trade ensure that new routes and new leaders emerge immediately.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function PanamaPage() {
  return (
    <main className="min-h-screen">
      {/* ── Dark Hero ─────────────────────────────────────────── */}
      <section className="bg-stone-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'US Wars', href: '/us-wars-list' }, { label: 'Panama' }]} />
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] mt-6 mb-4 leading-tight">
            Operation Just Cause:<br />
            <span className="text-[#dc2626]">Regime Change in 3 Weeks</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-3xl">
            On December 20, 1989, George H.W. Bush sent <strong className="text-[#dc2626]">27,684 troops</strong>{' '}
            to arrest one man — a man the CIA had paid, protected, and promoted for{' '}
            <strong className="text-white">23 years</strong>. Manuel Noriega was America&apos;s drug-trafficking
            dictator until he wasn&apos;t. The invasion killed <strong className="text-[#dc2626]">23 Americans</strong>{' '}
            and somewhere between <strong className="text-[#dc2626]">500 and 4,000 Panamanian civilians</strong>.
            The El Chorrillo neighborhood was burned to the ground. Cost:{' '}
            <strong className="text-[#dc2626]">$164 million</strong>. Drug trafficking through Panama{' '}
            <em>increased</em> afterward.
          </p>
          <ShareButtons title="Operation Just Cause: Regime Change in 3 Weeks" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {keyStats.map((s) => (
              <div key={s.label} className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700">
                <div className="text-xl md:text-2xl font-bold text-[#dc2626]">{s.value}</div>
                <div className="text-xs text-stone-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Light Content ─────────────────────────────────────── */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-4">

          {/* Cost Breakdown */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-2">
              The Cost: $164 Million to Arrest a Former Employee
            </h2>
            <p className="text-stone-600 mb-6">
              The United States spent $164 million ($420 million in 2026 dollars) to capture a man it had
              been paying $200,000 a year. The return on investment of creating and then destroying your
              own asset is, to put it mildly, poor.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-stone-300">
                    <th className="text-left py-3 font-semibold text-stone-800">Category</th>
                    <th className="text-right py-3 font-semibold text-stone-800">1989 $</th>
                    <th className="text-right py-3 font-semibold text-stone-800">2026 $</th>
                    <th className="text-left py-3 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((r) => (
                    <tr key={r.category} className="border-b border-stone-200">
                      <td className="py-3 text-stone-700">{r.category}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626] font-semibold">{r.amount}</td>
                      <td className="py-3 text-right font-mono text-stone-500">{r.adjusted}</td>
                      <td className="py-3 pl-4 text-stone-500 hidden md:table-cell text-xs">{r.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Casualty Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-2">
              The Human Cost: The Numbers They Don&apos;t Want You to See
            </h2>
            <p className="text-stone-600 mb-6">
              The Pentagon claims 202 Panamanian civilians died. Human rights organizations say 500 to 4,000.
              Mass graves were found. The US military controlled access to the devastated areas and prevented
              independent counts. We may never know the real number.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-stone-300">
                    <th className="text-left py-3 font-semibold text-stone-800">Group</th>
                    <th className="text-right py-3 font-semibold text-stone-800">Count</th>
                    <th className="text-left py-3 pl-4 font-semibold text-stone-800 hidden md:table-cell">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {casualties.map((c) => (
                    <tr key={c.group} className="border-b border-stone-200">
                      <td className="py-3 text-stone-700">{c.group}</td>
                      <td className="py-3 text-right font-mono text-[#dc2626] font-semibold">{c.count}</td>
                      <td className="py-3 pl-4 text-stone-500 hidden md:table-cell text-xs">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-6">
              Timeline: From CIA Asset to Prisoner
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-300" />
              <div className="space-y-8">
                {timeline.map((event) => (
                  <div key={event.year} className="relative pl-10">
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-[#dc2626]" />
                    <div className="text-sm font-mono text-[#dc2626] mb-1">{event.year}</div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-1">{event.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Figures */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-6">Key Figures</h2>
            <div className="space-y-4">
              {keyFigures.map((f) => (
                <div key={f.name} className="bg-white rounded-lg p-5 border border-stone-200 shadow-sm">
                  <div className="font-semibold text-stone-800">{f.name} <span className="text-sm text-stone-500 font-normal">— {f.role}</span></div>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Got */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-2">
              What We Got
            </h2>
            <p className="text-stone-600 mb-6">
              We spent $164 million to arrest one man, killed hundreds or thousands of civilians,
              destroyed a neighborhood, and drug trafficking <em>increased</em>.
            </p>
            <div className="space-y-4">
              {whatWeGot.map((item) => (
                <div key={item.label} className="bg-white rounded-lg p-5 border border-stone-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-stone-800">{item.label}</span>
                    <span className={`text-sm font-mono px-2 py-0.5 rounded ${
                      item.value === 'Catastrophic' || item.value === 'No' || item.value === 'Hidden' ? 'bg-red-100 text-[#dc2626]' :
                      item.value === 'Partially' || item.value === 'Unchanged' ? 'bg-amber-100 text-amber-700' :
                      'bg-green-100 text-green-700'
                    }`}>{item.value}</span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Domestic Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-2">
              What $164 Million Could Have Bought Instead
            </h2>
            <p className="text-stone-600 mb-6">
              If the goal was fighting drugs, the money would have been better spent on literally anything else.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {domesticComparison.map((item) => (
                <div key={item.item} className="bg-white rounded-lg p-4 border border-stone-200 shadow-sm">
                  <div className="text-lg font-bold text-[#dc2626]">{item.cost}</div>
                  <div className="text-sm font-semibold text-stone-800 mt-1">{item.item}</div>
                  <div className="text-xs text-stone-500 mt-1">{item.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lasting Consequences */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-4">
              Lasting Consequences
            </h2>
            <div className="bg-[#dc2626]/5 border-l-4 border-[#dc2626] p-5 rounded-r-lg mb-6">
              <p className="text-stone-700 text-sm leading-relaxed">
                Panama was the bridge between Grenada and Iraq. It proved that the US could conduct full-scale
                regime change, install a new government, and face minimal political consequences. The operational
                template — overwhelming force, media control, installed government — was replicated in Iraq in 2003.
              </p>
            </div>
            <div className="space-y-4 text-stone-700">
              <p>
                <strong className="text-stone-900">1. Regime change was normalized.</strong>{' '}
                Grenada was a tiny island. Panama was a real country with a real military. The invasion proved
                that the US could overthrow a government, install a replacement, and move on with minimal
                domestic political cost. The straight line from Panama to Baghdad runs through this precedent.
              </p>
              <p>
                <strong className="text-stone-900">2. The CIA accountability problem.</strong>{' '}
                Noriega was the CIA&apos;s man. The US paid him, protected him, tolerated his crimes, and then
                invaded his country to arrest him when he became inconvenient. No one at the CIA was held
                accountable for creating Noriega. No policy review examined why the US keeps creating the
                enemies it later has to destroy. The pattern repeats: Saddam Hussein, the Afghan mujahideen,
                and dozens of other assets-turned-adversaries.
              </p>
              <p>
                <strong className="text-stone-900">3. The War on Drugs is a fraud.</strong>{' '}
                The stated justification was combating drug trafficking. Drug trafficking through Panama
                increased after the invasion. The $164 million spent on military action did nothing to reduce
                drug supply or demand. If drug policy were the actual goal, the money would have been spent on
                treatment, education, and demand reduction. But the War on Drugs was never about drugs — it was
                about power.
              </p>
              <p>
                <strong className="text-stone-900">4. Civilian casualties don&apos;t matter politically.</strong>{' '}
                Somewhere between 500 and 4,000 Panamanians died. The US military blocked independent
                investigations. The media barely covered it. There were no consequences. This lesson — that
                foreign civilian casualties carry zero domestic political cost — was internalized by every
                subsequent administration.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-stone-200 pb-4">
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">{faq.q}</h3>
                  <p className="text-stone-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: faqs.map((f) => ({
                    '@type': 'Question',
                    name: f.q,
                    acceptedAnswer: { '@type': 'Answer', text: f.a },
                  })),
                }),
              }}
            />
          </div>

          {/* Related Pages */}
          <div className="mb-16">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-4">Related Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { href: '/grenada', label: 'Grenada — The Precedent That Started It' },
                { href: '/iraq-war', label: 'Iraq War — Panama\'s Template Writ Large' },
                { href: '/congress-and-war', label: 'Congress & War — Who Decides?' },
                { href: '/us-wars-list', label: 'Complete List of US Wars' },
                { href: '/analysis/cia-blowback', label: 'CIA Blowback — Creating Our Own Enemies' },
                { href: '/analysis/undeclared-wars', label: 'Undeclared Wars — Fighting Without Authorization' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white hover:bg-stone-100 rounded-lg p-3 border border-stone-200 text-stone-700 hover:text-[#dc2626] transition-colors text-sm shadow-sm"
                >
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div className="mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-heading)] text-stone-900 mb-4">Sources</h2>
            <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
              <li>Congressional Research Service — &ldquo;Panama: US Military Operations&rdquo; (1990)</li>
              <li>Americas Watch / Human Rights Watch — &ldquo;The Laws of War and the Conduct of the Panama Invasion&rdquo; (1990)</li>
              <li>Independent Commission of Inquiry on the US Invasion of Panama (1991)</li>
              <li>John Dinges, &ldquo;Our Man in Panama&rdquo; (1990)</li>
              <li>Frederick Kempe, &ldquo;Divorcing the Dictator&rdquo; (1990)</li>
              <li>US Southern Command After Action Report — Operation Just Cause (1990)</li>
              <li>Senate Foreign Relations Committee — Drugs, Law Enforcement and Foreign Policy (Kerry Committee Report, 1989)</li>
            </ul>
          </div>

          <BackToTop />
        </div>
      </section>

      {/* ── JSON-LD ───────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Operation Just Cause: Regime Change in 3 Weeks — Panama Invasion Cost & Consequences',
            description: 'Bush invaded Panama with 27,684 troops to arrest CIA asset Noriega. 23 US killed, 500-4,000 civilians killed. $164M cost. Drug trafficking increased.',
            url: 'https://warcosts.org/panama',
            datePublished: '2026-03-30',
            dateModified: '2026-03-30',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            author: { '@type': 'Organization', name: 'WarCosts.org' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://warcosts.org' },
              { '@type': 'ListItem', position: 2, name: 'US Wars', item: 'https://warcosts.org/us-wars-list' },
              { '@type': 'ListItem', position: 3, name: 'Panama', item: 'https://warcosts.org/panama' },
            ],
          }),
        }}
      />
    </main>
  )
}
