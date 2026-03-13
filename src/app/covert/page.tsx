import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'US Covert Operations & Secret Wars — CIA Coups, Black Sites, MK-Ultra',
  description: 'CIA coups, covert operations, assassination plots, MK-Ultra, extraordinary rendition, and secret wars — from Iran 1953 to the global drone campaign.',
  alternates: { canonical: 'https://www.warcosts.org/covert' },
}

const narratives: Record<string, string> = {
  'iran-1953': 'Operation TPAJAX: The CIA and MI6 overthrew Iran\'s democratically elected Prime Minister Mohammad Mossadegh after he nationalized British oil interests. The coup installed Shah Pahlavi, whose brutal 26-year dictatorship created the conditions for the 1979 Islamic Revolution — and 45+ years of US-Iran hostility. The entire modern Middle East crisis traces partly back to this single covert operation.',
  'guatemala-1954': 'Operation PBSUCCESS: The CIA overthrew Guatemala\'s democratically elected President Jacobo Árbenz because his land reform threatened United Fruit Company profits. The coup installed a military dictatorship that began a 36-year civil war, killing 200,000 people — mostly indigenous Maya — in what a UN truth commission later called genocide.',
  'bay-of-pigs': 'The CIA trained and armed 1,400 Cuban exiles to invade Cuba and overthrow Fidel Castro. The invasion was a catastrophic failure — most invaders were captured within 72 hours. The humiliation pushed Cuba closer to the Soviet Union, directly leading to the 1962 Missile Crisis that brought the world to the brink of nuclear war.',
  'chile-1973': 'The CIA supported the military coup that overthrew Chile\'s democratically elected President Salvador Allende. General Augusto Pinochet seized power and ruled for 17 years — 3,200 people were murdered, 40,000 tortured, and 200,000 exiled. Declassified documents confirm extensive CIA involvement in destabilizing Allende\'s government.',
  'congo-1961': 'The CIA was involved in the plot to assassinate Patrice Lumumba, the first democratically elected leader of the Congo. His murder paved the way for the dictator Mobutu Sese Seko, who ruled for 32 years, embezzled $5 billion, and left the country in ruins. The Congo has never recovered.',
}

const majorCIAPrograms = [
  {
    name: 'MK-Ultra (1953-1973)',
    description: 'The CIA\'s mind control program — one of the most disturbing operations in American history. Over 150 experiments were conducted on unwitting subjects, including psychiatric patients, prisoners, and even CIA employees.',
    details: [
      'Subjects were given LSD, barbiturates, mescaline, heroin, and other drugs without their knowledge or consent.',
      'Dr. Donald Ewen Cameron at McGill University used "psychic driving" — locking patients in drug-induced comas for weeks while playing taped messages. Many were permanently damaged.',
      'Frank Olson, a CIA biochemist, was given LSD without his knowledge and fell from a hotel window 9 days later. The government initially ruled it suicide; a 1994 exhumation found evidence of homicide.',
      'Operation Midnight Climax: CIA-run safe houses in San Francisco and New York where sex workers lured men to be unknowingly dosed with LSD while agents watched through one-way mirrors.',
      'CIA Director Richard Helms ordered all MK-Ultra files destroyed in 1973. Only 20,000 pages survived because they were misfiled. We know about MK-Ultra purely by accident.',
      'An estimated 7,000 US military personnel were also subjected to chemical and biological experiments without informed consent (Project SHAD/Project 112).',
    ],
  },
  {
    name: 'Operation Condor (1968-1989)',
    description: 'A US-backed network of South American military dictatorships that coordinated cross-border kidnapping, torture, and murder of political opponents. An estimated 60,000-80,000 people were killed.',
    details: [
      'Participating countries: Argentina, Chile, Brazil, Uruguay, Paraguay, Bolivia — all with US-backed military governments.',
      'The CIA provided intelligence, communications equipment, and training. Henry Kissinger was aware of and supported the operation.',
      'Methods included "death flights" (drugging prisoners and dropping them from planes into the ocean), electric shock torture, sexual assault, and disappearances.',
      'Argentina\'s "Dirty War" alone killed an estimated 30,000 people, including pregnant women whose babies were stolen and given to military families.',
      'Condor operations extended to the US: Chilean DINA agents assassinated Orlando Letelier, a former Chilean ambassador, with a car bomb in Washington, DC in 1976.',
      'Declassified documents show the CIA tracked Condor operations in real time and shared intelligence with the participating regimes.',
    ],
  },
  {
    name: 'Phoenix Program (1965-1972)',
    description: 'A CIA-run counterinsurgency operation in Vietnam that targeted the Viet Cong\'s civilian infrastructure through interrogation, torture, and assassination.',
    details: [
      'Official figures: 26,369 Viet Cong "neutralized" (killed). Vietnamese government figures: 40,994.',
      'Many victims were not actually Viet Cong — they were targeted based on informant tips that were often motivated by personal vendettas, land disputes, or coercion.',
      'Interrogation methods included electric shock, water torture, beatings, and sexual assault. Provincial Interrogation Centers operated in every South Vietnamese province.',
      'CIA officer Barton Osborn testified to Congress that Phoenix involved "the most brutal, malicious tortures imaginable" and that he never saw anyone survive interrogation.',
      'The program was exposed during the 1971 congressional hearings, contributing to public opposition to the Vietnam War.',
      'William Colby, who ran Phoenix, later became CIA Director. He defended the program as "an effective and responsible program" that was "subject to abuse."',
    ],
  },
  {
    name: 'Extraordinary Rendition & Black Sites (2001-present)',
    description: 'After 9/11, the CIA operated a global network of secret prisons ("black sites") where detainees were held without charge and subjected to "enhanced interrogation techniques" — i.e., torture.',
    details: [
      'At least 119 individuals were held in CIA black sites in Poland, Romania, Lithuania, Thailand, Afghanistan, and elsewhere.',
      '"Enhanced interrogation" included waterboarding (simulated drowning), sleep deprivation for up to 180 hours, stress positions, rectal feeding, confinement in coffin-sized boxes, and walling (slamming detainees against walls).',
      'Abu Zubaydah was waterboarded 83 times in one month. He lost an eye during detention. He has been held for 22+ years without charge.',
      'Khalid Sheikh Mohammed was waterboarded 183 times. Intelligence officials later admitted much of the information extracted was unreliable.',
      'The Senate Intelligence Committee\'s 2014 Torture Report (6,700 pages, only 500 released) concluded that CIA torture was "not effective" and that the CIA systematically lied to Congress about the program.',
      'At least 26 detainees were later determined to have been wrongly held — innocent people subjected to years of torture.',
      'No CIA official has ever been prosecuted for torture. The officer who destroyed the interrogation tapes received no criminal charges.',
    ],
  },
  {
    name: 'CIA Drug Connections',
    description: 'The CIA has repeatedly been linked to drug trafficking operations, using drug money to fund covert operations and protecting drug-trafficking allies.',
    details: [
      'Air America (1950s-1970s): CIA-operated airline in Southeast Asia transported opium from Hmong allies in Laos. The Golden Triangle heroin trade flourished under CIA protection.',
      'Iran-Contra (1985-1987): The CIA facilitated arms sales to Iran (despite an embargo) and funneled profits to Nicaraguan Contras. Contra-linked planes carried cocaine into the US. Senator John Kerry\'s 1989 investigation found "it is clear that individuals who provided support for the Contras were involved in drug trafficking."',
      'Gary Webb\'s "Dark Alliance" series (1996) documented CIA-connected Contra suppliers flooding Los Angeles with cheap crack cocaine in the 1980s. Webb was attacked by mainstream media and later committed suicide. The CIA\'s own Inspector General later confirmed many of his central findings.',
      'Afghanistan: Afghan opium production, negligible under the Taliban in 2001, surged to 90% of the world\'s supply during the US occupation. The CIA tolerated drug trafficking by Afghan allies because they were needed for counter-terrorism.',
    ],
  },
]

const assassinationPlots = [
  { target: 'Fidel Castro (Cuba)', attempts: '8+ confirmed', method: 'Exploding cigars, poisoned wetsuits, botulinum toxin pills, Mafia hitmen, pen syringes', outcome: 'All failed. Castro died of natural causes at 90.' },
  { target: 'Patrice Lumumba (Congo)', attempts: '1 (plus support for coup)', method: 'CIA sent a "lethal agent" (possibly cobra venom). Local assets killed him first.', outcome: 'Lumumba assassinated 1961. Mobutu\'s 32-year dictatorship followed.' },
  { target: 'Rafael Trujillo (Dominican Republic)', attempts: '1', method: 'CIA supplied weapons to dissidents who assassinated him.', outcome: 'Killed 1961. Decades of instability followed.' },
  { target: 'Ngo Dinh Diem (South Vietnam)', attempts: '1 (tacit approval)', method: 'CIA gave green light to South Vietnamese generals. Killed during coup.', outcome: 'Killed 1963. Vietnam War escalated dramatically.' },
  { target: 'Salvador Allende (Chile)', attempts: 'Destabilization leading to coup', method: 'CIA spent $8M on destabilization. Pinochet\'s coup led to Allende\'s death.', outcome: 'Died 1973 during coup. 17-year dictatorship.' },
  { target: 'Muammar Gaddafi (Libya)', attempts: '1 (1986 bombing)', method: 'Reagan ordered bombing of Gaddafi\'s compound. Missed Gaddafi, killed his adopted daughter.', outcome: 'Eventually killed by rebels in 2011 NATO campaign.' },
]

const churchCommitteeFindings = [
  'The CIA plotted to assassinate at least 5 foreign leaders, including Castro, Lumumba, and Trujillo.',
  'The NSA intercepted the communications of American citizens without warrants (Operation SHAMROCK — every telegram entering/leaving the US from 1945-1975).',
  'The CIA opened over 200,000 pieces of Americans\' mail and photographed 2.7 million envelope exteriors (Operation HT/LINGUAL).',
  'The FBI\'s COINTELPRO program targeted civil rights leaders, anti-war activists, and political dissidents. The FBI sent Martin Luther King Jr. an anonymous letter attempting to blackmail him into suicide.',
  'The CIA maintained files on 1.5 million Americans (Operation CHAOS).',
  'The CIA conducted drug experiments on unwitting American citizens (MK-Ultra).',
  'The CIA attempted to develop assassination devices including poison dart guns, contaminated diving suits, and exploding seashells.',
  'The CIA had relationships with over 50 US journalists and media organizations (Operation Mockingbird), using them to plant propaganda.',
  'The military tested chemical and biological agents on American cities without public knowledge (Project SHAD).',
]

export default function CovertPage() {
  const conflicts = loadData('conflicts.json')
  const covert = conflicts.filter((c: any) => c.type === 'covert_operation' || c.type === 'coup')
  const totalCost = covert.reduce((s: number, c: any) => s + (c.costInflationAdjusted || 0), 0)
  const totalCivDeaths = covert.reduce((s: number, c: any) => s + (c.civilianDeaths || 0), 0)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Covert Operations' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Covert Operations</h1>
      <p className="text-muted mb-6 max-w-3xl">Secret wars, CIA coups, torture programs, assassination plots, drug experiments on American citizens, and covert campaigns across the globe — none authorized by Congress, most hidden from the American public for decades. These are the operations that toppled democracies, installed dictators, tortured innocents, and created the enemies America would later spend trillions fighting.</p>
      <ShareButtons title="US Covert Operations & Secret Wars" />

      {/* AI Overview */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-blue-900 mb-3">🧠 Key Insights</h3>
        <ul className="space-y-2 text-sm text-blue-900">
          <li>• <strong>The CIA coined the term &ldquo;blowback&rdquo;</strong> in a classified 1953 report on the Iran coup — every major US foreign policy crisis (Iran, Afghanistan, ISIS) traces back to prior covert operations.</li>
          <li>• <strong>The FISA court approved 99.97% of surveillance requests from 1979–2019</strong> — rejecting only 12 out of 42,000+ applications, making it functionally a rubber stamp for secret government power.</li>
          <li>• <strong>MK-Ultra experimented on unwitting American citizens with LSD and torture</strong> — and the CIA Director ordered all files destroyed. Only 20,000 pages survived by accident, misfiled in a financial cabinet.</li>
          <li>• <strong>At least 7 of 9 African coups since 2008 were led by US-trained military officers</strong> — the CIA&apos;s annual budget ($15B+) is larger than the GDP of 60+ countries, with zero meaningful oversight.</li>
          <li>• <strong>The CIA tortured at least 26 people later determined to be innocent</strong> — the 6,700-page Senate Torture Report concluded the program produced no unique intelligence, and the CIA lied to Congress about it. No one was prosecuted.</li>
        </ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: String(covert.length), label: 'Covert Operations' },
          { val: fmtMoney(totalCost), label: 'Known Cost' },
          { val: totalCivDeaths > 0 ? fmt(totalCivDeaths) + '+' : 'Unknown', label: 'Civilian Deaths' },
          { val: '$15B+/yr', label: 'Est. CIA Budget' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="bg-stone-50 text-stone-900 rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;We have about 50% of the world&apos;s wealth but only 6.3% of its population... Our real task in the coming period is to maintain this position of disparity without positive detriment to our national security.&rdquo;
        </blockquote>
        <p className="text-stone-500 mt-3">— George Kennan, US State Department Policy Planning Staff, 1948 (Classified memo PPS/23, declassified 1974)</p>
      </div>

      {/* Context */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Pattern</h2>
        <p>The pattern is remarkably consistent: a foreign government acts against American corporate interests or aligns with the &ldquo;wrong&rdquo; side in the Cold War. The CIA engineers a coup, installs a friendly dictator, and the new regime opens its economy to American business. Decades later, the blowback arrives — revolution, civil war, terrorism, or migration — and America spends trillions dealing with the consequences of its own covert actions.</p>
        <p>The 1975 <strong>Church Committee</strong> investigation revealed the scope of CIA covert operations for the first time: assassination plots against foreign leaders, domestic surveillance of American citizens, drug experiments on unwitting subjects, and covert wars in countries most Americans couldn&apos;t find on a map.</p>
        <p>The CIA&apos;s budget is classified, but estimates place it at <strong>$15 billion+ per year</strong>. The total &ldquo;black budget&rdquo; for all 17 intelligence agencies is approximately <strong>$71 billion</strong>. Former CIA Director William Colby testified that the agency had conducted over 900 major covert operations and several thousand smaller ones between 1961 and 1975 alone.</p>
      </div>

      {/* Church Committee */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">⚖️ The Church Committee (1975): What They Found</h2>
        <p className="text-sm text-stone-600 mb-4">In 1975, Senator Frank Church led a Senate investigation into intelligence abuses. What they uncovered shocked the nation and led to new oversight laws — most of which have since been circumvented or ignored.</p>
        <div className="space-y-2">
          {churchCommitteeFindings.map((f, i) => (
            <div key={i} className="bg-white rounded-lg p-3 border flex items-start gap-2">
              <span className="text-red-600 font-bold text-sm">•</span>
              <p className="text-sm text-stone-700">{f}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-white rounded-lg p-4 border">
          <p className="text-sm text-stone-600"><strong>The aftermath:</strong> The Church Committee led to the creation of the Senate and House Intelligence Committees, the Foreign Intelligence Surveillance Act (FISA), and Executive Order 12333 banning assassinations. But all of these safeguards have been weakened or circumvented: FISA courts became rubber stamps (approving 99.97% of surveillance requests), the assassination ban was reinterpreted to allow &ldquo;targeted killings,&rdquo; and intelligence committees became more protective of agencies than critical of them.</p>
        </div>
      </div>

      {/* Major CIA Programs */}
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">Major CIA Programs</h2>
      <div className="space-y-8 mb-12">
        {majorCIAPrograms.map(p => (
          <div key={p.name} className="bg-white rounded-lg border p-6 shadow-sm">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">{p.name}</h3>
            <p className="text-muted mb-4">{p.description}</p>
            <div className="space-y-2">
              {p.details.map((d, i) => (
                <div key={i} className="bg-stone-50 rounded-lg p-3 border-l-4 border-red-300">
                  <p className="text-sm text-stone-700">{d}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Assassination Plots */}
      <div className="bg-stone-50 text-stone-900 rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🎯 CIA Assassination Plots</h2>
        <p className="text-stone-500 mb-6">The Church Committee confirmed CIA involvement in assassination plots against at least 5 foreign leaders. These are the documented cases:</p>
        <div className="space-y-4">
          {assassinationPlots.map(a => (
            <div key={a.target} className="bg-white border border-stone-200 rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-stone-900 mb-1">{a.target}</h3>
              <p className="text-stone-500 text-sm"><strong>Attempts:</strong> {a.attempts}</p>
              <p className="text-stone-500 text-sm"><strong>Methods:</strong> {a.method}</p>
              <p className="text-stone-600 text-sm"><strong>Outcome:</strong> {a.outcome}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Congressional Oversight Failures */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">📋 Congressional Oversight: A Failure</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>Congress is supposed to oversee intelligence operations. In practice, oversight has been a systematic failure:</p>
          <ul>
            <li><strong>The CIA lied to Congress about torture.</strong> The 2014 Senate Torture Report documented that the CIA misrepresented the nature and effectiveness of &ldquo;enhanced interrogation&rdquo; to Congress in at least 20 instances.</li>
            <li><strong>The CIA spied on Congress.</strong> In 2014, CIA Director John Brennan admitted that CIA officers had searched Senate Intelligence Committee computers that were being used to investigate the torture program. No criminal charges were filed.</li>
            <li><strong>The CIA destroyed evidence.</strong> In 2005, CIA officer Jose Rodriguez destroyed 92 videotapes of interrogation sessions. A special prosecutor investigated and declined to press charges.</li>
            <li><strong>Intelligence committees are captured.</strong> Members of the intelligence committees receive campaign contributions from defense and intelligence contractors. They often become advocates for the agencies they&apos;re supposed to oversee.</li>
            <li><strong>Classification as a weapon.</strong> The CIA classifies information not to protect national security but to prevent embarrassment. Members of Congress who learn classified details cannot share them publicly without facing prosecution.</li>
            <li><strong>The FISA court is a rubber stamp.</strong> From 1979-2019, the Foreign Intelligence Surveillance Court approved 99.97% of all surveillance requests — rejecting only 12 out of over 42,000 applications.</li>
          </ul>
          <p>Senator Church himself warned: &ldquo;The United States government has perfected a technological capability that enables us to monitor the messages that go through the air... That capability at any time could be turned around on the American people, and no American would have any privacy left.&rdquo; That was 1975 — 38 years before Edward Snowden proved him right.</p>
        </div>
      </div>

      {/* Operations */}
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Covert Operations by Conflict</h2>
      <div className="space-y-6">
        {covert.map((c: any) => (
          <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-lg border p-6 hover:shadow-md transition">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">{c.name}</h2>
              <span className="text-sm text-muted">{c.startYear}{c.endYear !== c.startYear ? `–${c.endYear}` : ''}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">No Authorization</span>
            </div>
            <p className="text-muted mb-3">{c.description}</p>
            {narratives[c.id] && (
              <p className="text-sm text-stone-600 mb-3 bg-stone-50 rounded p-3">{narratives[c.id]}</p>
            )}
            <div className="flex gap-6 text-sm">
              <span><strong className="text-primary">{fmtMoney(c.costInflationAdjusted)}</strong> cost</span>
              {c.civilianDeaths > 0 && <span><strong className="text-primary">{fmt(c.civilianDeaths)}</strong> civilian deaths</span>}
              <span>Outcome: <strong>{c.outcome}</strong></span>
            </div>
            {c.libertarianNote && <p className="text-sm italic text-muted mt-3">{c.libertarianNote}</p>}
          </Link>
        ))}
      </div>

      {/* CIA Admissions */}
      <div className="bg-amber-50 rounded-xl p-8 mt-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">🗣️ In Their Own Words</h2>
        <div className="space-y-6">
          <div>
            <blockquote className="text-sm italic text-stone-700">&ldquo;It is an act of insanity and national humiliation to have a law prohibiting the President from ordering assassination.&rdquo;</blockquote>
            <p className="text-xs text-muted mt-1">— Henry Kissinger, National Security Advisor</p>
          </div>
          <div>
            <blockquote className="text-sm italic text-stone-700">&ldquo;We&apos;ll know our disinformation program is complete when everything the American public believes is false.&rdquo;</blockquote>
            <p className="text-xs text-muted mt-1">— William Casey, CIA Director (reportedly, 1981)</p>
          </div>
          <div>
            <blockquote className="text-sm italic text-stone-700">&ldquo;I never would have agreed to the formulation of the Central Intelligence Agency back in forty-seven, if I had known it would become the American Gestapo.&rdquo;</blockquote>
            <p className="text-xs text-muted mt-1">— Harry Truman, 1961 (the president who created the CIA)</p>
          </div>
          <div>
            <blockquote className="text-sm italic text-stone-700">&ldquo;The United States government has perfected a technological capability that enables us to monitor the messages that go through the air... That capability at any time could be turned around on the American people, and no American would have any privacy left.&rdquo;</blockquote>
            <p className="text-xs text-muted mt-1">— Senator Frank Church, 1975 (38 years before Snowden)</p>
          </div>
          <div>
            <blockquote className="text-sm italic text-stone-700">&ldquo;We tortured some folks.&rdquo;</blockquote>
            <p className="text-xs text-muted mt-1">— President Barack Obama, 2014 (no one was prosecuted)</p>
          </div>
        </div>
      </div>

      {/* The Libertarian Case */}
      <div className="bg-stone-50 rounded-xl p-8 mt-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">⚖️ The Case Against Covert Power</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>The existence of a secret agency with a classified budget, no meaningful oversight, and the power to overthrow governments, torture prisoners, and assassinate foreign leaders is fundamentally incompatible with a free society. The Founders would have been horrified.</p>
          <ul>
            <li><strong>It undermines democracy at home.</strong> An agency that operates in secret cannot be held accountable by citizens. MK-Ultra experimented on Americans. COINTELPRO targeted civil rights leaders. Operation CHAOS surveilled anti-war activists. The CIA spied on the Senate committee investigating it.</li>
            <li><strong>It undermines democracy abroad.</strong> The CIA has overthrown more democracies than any other organization in history. Iran, Guatemala, Congo, Chile, Brazil — all democratically elected governments toppled.</li>
            <li><strong>It creates blowback.</strong> The term was literally coined by the CIA. Every major foreign policy crisis America faces — Iran, Afghanistan, ISIS — traces back to prior covert operations.</li>
            <li><strong>It concentrates power in the executive.</strong> Covert operations bypass Congress entirely. The president (or the CIA itself) makes life-and-death decisions affecting millions without democratic input.</li>
            <li><strong>It corrupts everything it touches.</strong> The CIA&apos;s involvement in drug trafficking, torture, domestic surveillance, and media manipulation demonstrates that secret power inevitably leads to abuse.</li>
          </ul>
          <p>James Madison wrote: &ldquo;The means of defence against foreign danger have been always the instruments of tyranny at home.&rdquo; The CIA has proven him right.</p>
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The CIA funded the Mujahideen in Afghanistan with <strong>$3+ billion</strong> in the 1980s. Those weapons and fighters later formed the Taliban and Al-Qaeda.</li>
          <li>• The term <strong>&ldquo;blowback&rdquo;</strong> was coined by the CIA itself in a classified report on the 1953 Iran coup.</li>
          <li>• The Church Committee found that the CIA had opened over <strong>200,000 pieces of Americans&apos; mail</strong> and maintained files on 1.5 million citizens.</li>
          <li>• Operation Mockingbird: the CIA cultivated relationships with over <strong>400 American journalists</strong> to plant propaganda in US media.</li>
          <li>• MK-Ultra files were ordered destroyed. Only <strong>20,000 pages survived by accident</strong> — misfiled in a financial records cabinet.</li>
          <li>• The FISA court approved <strong>99.97% of surveillance requests</strong> from 1979-2019 — making it functionally a rubber stamp.</li>
          <li>• The CIA tortured at least <strong>26 people later determined to be innocent</strong>. None received compensation.</li>
          <li>• At least <strong>7 of 9 African coups since 2008</strong> were led by military officers trained by the United States.</li>
          <li>• The CIA&apos;s annual budget ($15B+) is larger than the GDP of <strong>60+ countries</strong>.</li>
          <li>• Gary Webb, the journalist who exposed CIA-Contra cocaine connections, was found dead with <strong>two gunshot wounds to the head</strong>. It was ruled a suicide.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/regime-changes" className="text-red-800 hover:underline">→ Regime Changes — the complete list</Link></li>
          <li><Link href="/analysis/blowback" className="text-red-800 hover:underline">→ Blowback — how US interventions create future enemies</Link></li>
          <li><Link href="/analysis/congressional-authority" className="text-red-800 hover:underline">→ 19 Wars Without Congress</Link></li>
          <li><Link href="/analysis/drone-wars" className="text-red-800 hover:underline">→ Drone Wars — the new covert war</Link></li>
          <li><Link href="/timeline" className="text-red-800 hover:underline">→ Timeline of All US Wars & Interventions</Link></li>
        </ul>
      </div>
    </div>
  )
}
