import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'
import ArticleSchema from '@/components/ArticleSchema'
import { TruthDelayChart, DeathsByLieChart, MediaComplicityChart, LieTimelineChart } from './LiesCharts'

export const metadata: Metadata = {
  title: 'Lies That Started Wars: Gulf of Tonkin, WMDs, Nayirah & the Pattern of Deception',
  description: 'Gulf of Tonkin was fabricated. WMDs didn\'t exist. Nayirah\'s testimony was staged. USS Maine was an accident. Every war starts with a lie. The pattern from 1898 to 2003.',
  openGraph: {
    title: 'Lies That Started Wars: From USS Maine to WMDs',
    description: 'Gulf of Tonkin, WMDs, Nayirah testimony, USS Maine, Lusitania — a comprehensive catalog of the lies that sent millions to die.',
    url: 'https://www.warcosts.org/analysis/lies-that-started-wars',
    type: 'article',
  },
}

const keyStats = [
  { stat: '3.4M', label: 'Deaths resulting from the Gulf of Tonkin lie — the Vietnam War\'s fabricated pretext', source: 'Various historical estimates' },
  { stat: '500,000+', label: 'Dead in Iraq — a war built on the lie that Saddam had WMDs', source: 'Brown University Costs of War' },
  { stat: '0', label: 'WMDs found in Iraq after the 2003 invasion', source: 'Iraq Survey Group (Duelfer Report)' },
  { stat: '77', label: 'US Senators who voted for the Iraq War based on fabricated intelligence', source: 'Congressional Record' },
  { stat: '15', label: 'Year-old Kuwaiti girl who lied to Congress about incubator babies — actually the ambassador\'s daughter', source: 'CBC/NY Times investigation' },
  { stat: '100+', label: 'Years of the same pattern: lie → war → truth → no accountability', source: 'Historical record' },
]

const lies = [
  {
    title: 'USS Maine: "Remember the Maine!" (1898)',
    lie: 'The battleship USS Maine exploded in Havana Harbor on February 15, 1898, killing 266 American sailors. The US blamed Spain — William Randolph Hearst\'s newspapers ran the headline "DESTRUCTION OF THE WAR SHIP MAINE WAS THE WORK OF AN ENEMY" before any investigation. The Navy\'s official board of inquiry concluded it was an external mine, despite no evidence of Spanish involvement.',
    truth: 'Multiple investigations — including a 1976 study by Admiral Hyman Rickover — concluded the explosion was almost certainly an internal accident, likely a coal bunker fire that ignited the ammunition magazine. The 1898 Navy investigation was fundamentally flawed: they didn\'t examine the ship\'s coal bunkers, ignored the pattern of hull damage, and were under political pressure to find Spanish culpability. Modern naval engineering analysis shows the damage pattern is consistent with internal explosion, not external mining.',
    consequence: 'The Spanish-American War. The US seized Cuba, Puerto Rico, the Philippines, and Guam. In the Philippines alone, the subsequent occupation killed 200,000–1,000,000 Filipino civilians in what is now called the Philippine-American War. The war cost $250 million (equivalent to $8 billion today) and established the US as a global imperial power.',
    delay: '73 years to definitive debunking',
    deaths: '~500,000 (including Philippine-American War)',
    cost: '$250M (1898) / ~$8B (2024)',
    keyFigures: ['William Randolph Hearst', 'Joseph Pulitzer', 'Theodore Roosevelt', 'McKinley'],
    documents: 'Rickover Report (1976), Spanish archives, contemporaneous naval engineering studies',
  },
  {
    title: 'The Lusitania: "Innocent Civilian Ship" (1915)',
    lie: 'The British ocean liner RMS Lusitania was torpedoed by a German U-boat on May 7, 1915, killing 1,198 passengers including 128 Americans. The sinking was used to build public support for US entry into World War I. The Lusitania was presented as an innocent passenger ship — a victim of barbaric German aggression.',
    truth: 'The Lusitania was carrying 4.2 million rounds of rifle ammunition and 1,248 cases of shrapnel shells — making it a legitimate military target under the laws of war. The British Admiralty knew U-boats were operating in the area and failed to provide an escort. In 2008, divers confirmed munitions in the wreck. Germany had taken out newspaper ads warning Americans not to sail on the ship.',
    consequence: 'Helped shift US public opinion toward intervention in WWI. The US entered the war in 1917. 116,516 Americans died. The Treaty of Versailles — shaped by the war\'s outcome — created the conditions for WWII.',
    delay: '93 years to diver confirmation of munitions',
  },
  {
    title: 'Gulf of Tonkin: The Incident That Never Happened (1964)',
    lie: 'On August 4, 1964, the USS Maddox reported being attacked by North Vietnamese torpedo boats in the Gulf of Tonkin — the second alleged attack in three days. President Lyndon Johnson used the incident to push the Gulf of Tonkin Resolution through Congress, giving him authority to escalate the Vietnam War without a formal declaration of war.',
    truth: 'The August 4 attack never happened. NSA documents declassified in 2005 proved that signals intelligence was manipulated to support the administration\'s narrative. Secretary of Defense Robert McNamara later admitted doubts. The NSA\'s own internal history called it a fabrication. The first attack (August 2) was provoked by covert US operations against North Vietnam — operations Congress wasn\'t told about.',
    consequence: 'The Gulf of Tonkin Resolution passed 416-0 in the House and 88-2 in the Senate. It authorized the Vietnam War without a declaration of war. 58,220 Americans died. An estimated 2-3.4 million Vietnamese died. 2.7 million tons of bombs were dropped — more than in all of WWII.',
    delay: '7 years (Pentagon Papers, 1971) to 41 years (NSA declassification, 2005)',
  },
  {
    title: 'Nayirah Testimony: Babies Pulled from Incubators (1990)',
    lie: 'On October 10, 1990, a tearful 15-year-old girl identified only as "Nayirah" testified before the Congressional Human Rights Caucus that she had witnessed Iraqi soldiers removing babies from incubators in a Kuwaiti hospital and leaving them to die on the cold floor. The testimony was cited by six US senators as justification for the Gulf War — a war authorized by just five votes.',
    truth: 'Nayirah was Nayirah al-Ṣabaḥ — the daughter of the Kuwaiti ambassador to the United States. Her testimony was organized by the PR firm Hill & Knowlton, which was paid $10.7 million by the Kuwaiti government to build support for military intervention. Investigations by Amnesty International, Human Rights Watch, and journalists found no evidence that the incubator story was true. The entire thing was fabricated war propaganda.',
    consequence: 'The Gulf War. "Operation Desert Storm" killed an estimated 100,000 Iraqi soldiers and 3,500 civilians in 42 days. The subsequent sanctions regime killed an estimated 500,000 Iraqi children over the next decade — a number Secretary of State Madeleine Albright said was "worth it."',
    delay: '2 years (CBC investigation, 1992)',
  },
  {
    title: 'WMDs in Iraq: The Lie That Killed 500,000 (2003)',
    lie: 'The Bush administration claimed that Saddam Hussein possessed weapons of mass destruction — chemical, biological, and potentially nuclear weapons — that posed an imminent threat to the United States. Secretary of State Colin Powell presented "evidence" to the UN Security Council on February 5, 2003, including satellite photos, intercepted communications, and testimony from "Curveball" — an Iraqi defector. VP Cheney said: "There is no doubt that Saddam Hussein now has weapons of mass destruction." Bush claimed Iraq could attack the US within 45 minutes. Condoleezza Rice warned that "we don\'t want the smoking gun to be a mushroom cloud."',
    truth: 'There were no WMDs. The Iraq Survey Group — 1,400 inspectors spending $1 billion over 18 months — found nothing. "Curveball" (Rafid Ahmed Alwan al-Janabi) later admitted he fabricated the entire biological weapons story to get asylum in Germany. The aluminum tubes were for conventional rockets, not uranium enrichment centrifuges — this was known by experts at the time. The satellite photos showed routine maintenance of facilities, not weapons production. The "mobile biological weapons labs" were hydrogen generators for weather balloons, exactly as Iraq claimed. The Niger yellowcake uranium documents were crude forgeries that the CIA and State Department knew were fake. Every single piece of evidence presented to the UN was wrong, and intelligence analysts had expressed doubts about much of it before Powell\'s presentation.',
    consequence: 'The Iraq War. $3 trillion in costs (Brown University estimate). 4,600 Americans dead, 32,000+ wounded. 500,000+ Iraqis dead (conservative estimate). 5 million refugees and internally displaced persons. ISIS emerged from the chaos of the occupation and de-Baathification policies. Iran was empowered as Iraq\'s Sunni counterbalance was destroyed. Sectarian civil war lasted for years. Colin Powell called it a "blot" on his record but faced no consequences. The war created the conditions for the next two decades of Middle East instability, including the Syrian civil war, the rise of ISIS, and the current Iran crisis.',
    delay: '1 year (Iraq Survey Group preliminary report, 2004)',
    deaths: '500,000+ (Iraq Body Count, Lancet study estimates higher)',
    cost: '$3 trillion (Brown University Costs of War)',
    keyFigures: ['George W. Bush', 'Colin Powell', 'Dick Cheney', 'Donald Rumsfeld', 'Condoleezza Rice', 'Doug Feith', 'Paul Wolfowitz'],
    documents: 'Iraq Survey Group Report (Duelfer Report), Senate Intelligence Committee Report, Powell\'s UN presentation, Niger documents',
  },
  {
    title: 'The Domino Theory: If One Falls, They All Fall (1950s–1975)',
    lie: 'The "domino theory" — that if one country in a region fell to communism, its neighbors would follow like dominoes — was the intellectual foundation for US intervention in Korea, Vietnam, Laos, Cambodia, Indonesia, and countless covert operations across the developing world. Eisenhower articulated it in 1954. It remained the core justification for the Vietnam War throughout.',
    truth: 'The theory was wrong. Vietnam fell to communism in 1975. The dominoes did not fall. Thailand, Malaysia, Singapore, Indonesia, and the Philippines did not become communist. In fact, communist countries fought each other — China invaded Vietnam in 1979, and Vietnam invaded Cambodia. The theory treated communism as a monolithic force when it was actually fractured by nationalism, ethnic conflict, and competing interests.',
    consequence: 'The domino theory justified: the Korean War (36,574 American dead), the Vietnam War (58,220 American dead), the Secret War in Laos (making it the most bombed country per capita in history), the Cambodian bombing campaign (that helped create the Khmer Rouge), covert operations in Indonesia (500,000-1,000,000 killed in anti-communist purges the CIA supported), and interventions across Latin America, Africa, and Asia.',
    delay: '~30 years (fall of Saigon proved it wrong)',
  },
]

const patternSteps = [
  { step: '1', title: 'The Incident', desc: 'Something happens (or is fabricated). USS Maine explodes. Torpedo boats "attack." A girl cries about babies. A secretary of state holds up a vial.' },
  { step: '2', title: 'Media Amplification', desc: 'The press repeats the claim uncritically. Headlines scream. Dissenting voices are marginalized or ignored. Patriotism becomes the only acceptable position.' },
  { step: '3', title: 'Public Outrage', desc: '"Remember the Maine!" "Support Our Troops!" "You\'re either with us or against us." Manufactured consent turns citizens into war supporters.' },
  { step: '4', title: 'Congressional Rubber Stamp', desc: 'Congress authorizes force with near-unanimous votes. Gulf of Tonkin: 504-2. Iraq War: 373-156. Voting against war is political suicide.' },
  { step: '5', title: 'The War', desc: 'Troops deploy. Contractors profit. Civilians die. The original justification fades into irrelevance as "supporting the troops" becomes the only argument needed.' },
  { step: '6', title: 'The Truth Emerges', desc: 'Years or decades later: declassified documents, investigations, whistleblowers. The lie is exposed. The public shrugs. The war is already over (or still going).' },
  { step: '7', title: 'Zero Accountability', desc: 'Nobody is prosecuted. Nobody is impeached. The architects write memoirs and give lectures. The next lie begins.' },
]

export default function LiesThatStartedWarsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Lies That Started Wars' }]} />
      <ArticleSchema title="Lies That Started Wars: Gulf of Tonkin, WMDs, Nayirah & the Pattern of Deception" description="Gulf of Tonkin was fabricated. WMDs didn\" url="/analysis/lies-that-started-wars" />
      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Lies That Started Wars
        </h1>
        <p className="text-xl text-stone-300 mb-4">Gulf of Tonkin. WMDs. Incubator Babies. The Same Pattern for 100+ Years.</p>
        <p className="text-stone-400 text-lg">
          The USS Maine exploded — Spain was blamed — America got an empire. The Gulf of Tonkin was 
          &ldquo;attacked&rdquo; — it wasn&apos;t — 3.4 million died in Vietnam. A 15-year-old cried 
          about incubator babies — she was the ambassador&apos;s daughter — the Gulf War began. 
          Colin Powell held up a vial at the UN — the WMDs didn&apos;t exist — 500,000 Iraqis died. 
          The pattern is 100+ years old and it has never failed: <strong>fabricate a pretext, 
          amplify through media, rush to war, discover the truth decades later, hold nobody 
          accountable</strong>.
        </p>
      </div>

      <ShareButtons title="Lies That Started Wars: Gulf of Tonkin, WMDs & the Pattern of Deception" />

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

      <LieTimelineChart />

      {/* The Pattern */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Pattern: It Never Changes
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          Every war lie follows the same seven-step playbook. It worked in 1898 and it worked in 2003. 
          It will work again — unless enough people recognize the pattern.
        </p>
        <div className="space-y-4">
          {patternSteps.map((item) => (
            <div key={item.step} className="flex gap-4 bg-stone-100 rounded-lg p-4">
              <span className="text-red-800 font-bold text-2xl">{item.step}</span>
              <div>
                <h3 className="font-bold text-stone-900">{item.title}</h3>
                <p className="text-stone-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DeathsByLieChart />

      {/* Each Lie */}
      {lies.map((item) => (
        <section key={item.title} className="my-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
            {item.title}
          </h2>
          <div className="space-y-4">
            <div className="bg-stone-100 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-2">The Lie</h3>
              <p className="text-stone-700">{item.lie}</p>
            </div>
            <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6">
              <h3 className="font-bold text-red-400 mb-2">The Truth</h3>
              <p className="text-stone-300">{item.truth}</p>
            </div>
            <div className="bg-stone-900 rounded-lg p-6">
              <h3 className="font-bold text-white mb-2">The Consequence</h3>
              <p className="text-stone-300">{item.consequence}</p>
              <p className="text-stone-500 text-sm mt-2">Time to truth: {item.delay}</p>
            </div>
          </div>
        </section>
      ))}

      <TruthDelayChart />

      {/* Section: The Smaller Lies */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Smaller Lies: Pat Tillman, Jessica Lynch &amp; the Propaganda Machine
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The lies don&apos;t stop at starting wars. The military actively fabricates stories during wars 
          to maintain public support:
        </p>
        <div className="space-y-6 my-6">
          <div className="bg-stone-100 rounded-lg p-6">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-900 mb-2">Jessica Lynch: The Fabricated Rescue (2003)</h3>
            <p className="text-stone-700 mb-2">
              The military told the press that PFC Jessica Lynch had been captured after a heroic firefight 
              in which she emptied her weapon, was shot and stabbed, and then rescued in a dramatic Special 
              Forces raid from an Iraqi hospital. The story was on every front page.
            </p>
            <p className="text-stone-700">
              The truth: Lynch&apos;s weapon jammed without her firing a shot. She was injured in a vehicle 
              accident. The Iraqi medical staff treated her well and tried to return her to American forces. 
              The &ldquo;rescue&rdquo; was staged — the hospital was unguarded. Lynch herself later testified 
              to Congress: &ldquo;I am still confused as to why they chose to lie.&rdquo;
            </p>
          </div>
          <div className="bg-stone-100 rounded-lg p-6">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-900 mb-2">Pat Tillman: The Friendly Fire Cover-Up (2004)</h3>
            <p className="text-stone-700 mb-2">
              NFL star Pat Tillman left a $3.6 million contract to enlist after 9/11. When he was killed 
              in Afghanistan in April 2004, the military told his family and the public that he died 
              heroically in an enemy ambush. He was awarded the Silver Star and used as a recruiting tool.
            </p>
            <p className="text-stone-700">
              The truth: Tillman was killed by friendly fire. His own platoon shot him. The military knew 
              this within 24 hours but concealed it for five weeks — through his nationally televised 
              memorial service. They burned his uniform and body armor to destroy evidence. His family 
              wasn&apos;t told the truth until an investigation forced disclosure. No one was charged.
            </p>
          </div>
        </div>
      </section>

      <MediaComplicityChart />

      {/* Section: Media's Role */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Media: Stenographers, Not Journalists
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Every war lie requires media amplification to work. And every time, the American press has 
          obliged — repeating government claims uncritically, marginalizing dissent, and wrapping 
          propaganda in the language of objective journalism.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          In the lead-up to the Iraq War, the <em>New York Times</em>&apos; Judith Miller published 
          story after story about Iraq&apos;s WMD programs, sourced almost entirely from Ahmed Chalabi 
          and &ldquo;anonymous intelligence officials&rdquo; — the same people pushing for the invasion. 
          Her stories appeared on the front page, were cited by administration officials on Sunday talk 
          shows, and then cited back by the <em>Times</em> as independent confirmation. It was a 
          closed loop of propaganda.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The <em>Washington Post</em> ran 27 editorials supporting the invasion between September 2002 
          and February 2003 — and zero opposing it. MSNBC fired Phil Donahue, its highest-rated host, 
          because an internal memo warned he would be a &ldquo;difficult public face for NBC in a time 
          of war.&rdquo; The Dixie Chicks were blacklisted for criticizing the president. The marketplace 
          of ideas was closed for business.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The <em>Times</em> eventually published a quasi-apology in May 2004 — buried on page A10 — 
          acknowledging that its WMD coverage was &ldquo;not as rigorous as it should have been.&rdquo; 
          By then, the war had been raging for 14 months. Nobody was fired over the editorial failures. 
          Judith Miller left the paper in 2005 but was later hired by Fox News.
        </p>
      </section>

      {/* Section: The People Who Said No */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The People Who Said No — And Were Punished
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-red-800 pl-4">
            <p className="font-bold text-stone-900">Senator Wayne Morse (Oregon)</p>
            <p className="text-stone-600">One of only two senators to vote against the Gulf of Tonkin Resolution. Called it &ldquo;an undeclared war.&rdquo; Lost his reelection in 1968. History proved him right.</p>
          </div>
          <div className="border-l-4 border-red-800 pl-4">
            <p className="font-bold text-stone-900">Daniel Ellsberg</p>
            <p className="text-stone-600">Leaked the Pentagon Papers in 1971, exposing the government&apos;s systematic lying about Vietnam. Charged under the Espionage Act. Case dismissed due to government misconduct (illegal wiretapping).</p>
          </div>
          <div className="border-l-4 border-red-800 pl-4">
            <p className="font-bold text-stone-900">Hans Blix</p>
            <p className="text-stone-600">UN weapons inspector who told the Security Council there was no evidence of WMDs in Iraq. The US invaded anyway, 6 weeks into his inspection. He was smeared as naive and incompetent. He was right.</p>
          </div>
          <div className="border-l-4 border-red-800 pl-4">
            <p className="font-bold text-stone-900">Scott Ritter</p>
            <p className="text-stone-600">Former UN weapons inspector and Marine who publicly stated Iraq had no WMDs. Was smeared with unrelated personal attacks. The media ignored his expertise because it contradicted the narrative.</p>
          </div>
          <div className="border-l-4 border-red-800 pl-4">
            <p className="font-bold text-stone-900">Valerie Plame</p>
            <p className="text-stone-600">CIA operative whose cover was blown by the Bush administration in retaliation for her husband Joe Wilson&apos;s op-ed debunking the Niger yellowcake claim. Scooter Libby was convicted — and pardoned by Trump.</p>
          </div>
          <div className="border-l-4 border-red-800 pl-4">
            <p className="font-bold text-stone-900">Barbara Lee (California)</p>
            <p className="text-stone-600">The only member of Congress to vote against the 2001 AUMF. Received death threats. Called a traitor. The AUMF she opposed has been used to justify military action in 22 countries over 24 years.</p>
          </div>
        </div>
      </section>

      {/* Section: Will It Work Again */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Will It Work Again?
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Of course it will. It already has. The pattern is not a bug — it&apos;s a feature of how 
          democracies go to war. The public must be convinced. The truth is inconvenient. So lies 
          are manufactured, amplified, and consumed. By the time the truth emerges, the war has 
          already served its purpose — for the people who wanted it.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The only defense is recognition. If you know the pattern — incident, amplification, outrage, 
          rubber stamp, war, truth, impunity — you can see it happening in real time. You can ask the 
          questions the press won&apos;t: Where&apos;s the evidence? Who benefits? What are the 
          dissenting voices saying? Why is this being rushed?
        </p>
        <p className="text-stone-700 text-lg mb-4">
          Every war on this list could have been prevented — or at least debated honestly — if enough 
          people had demanded evidence before blood. They didn&apos;t. And when the truth came out, 
          they shrugged. The liars wrote memoirs. The dead stayed dead. And the next lie began.
        </p>
      </section>

      {/* Bottom Line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-400">The Bottom Line</h2>
        <p className="text-stone-300 text-lg mb-4">
          The United States has started or escalated wars based on fabricated pretexts at least six 
          times in the last 125 years. The combined death toll exceeds 8 million. In every case, the 
          truth eventually emerged. In no case was anyone held accountable. The people who told the 
          lies were promoted. The people who told the truth were punished.
        </p>
        <p className="text-stone-300 text-lg">
          This is not ancient history. Colin Powell held up his vial of &ldquo;anthrax&rdquo; at the 
          UN in 2003. The New York Times amplified the WMD lie on its front page. Senators who knew 
          better voted for war because opposing it was politically dangerous. And 500,000 people died 
          for weapons that didn&apos;t exist. The next lie is already being prepared. The only question 
          is whether you&apos;ll recognize it this time.
        </p>
      </div>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li>• NSA Declassified Gulf of Tonkin Documents (2005)</li>
          <li>• Pentagon Papers (1971), Daniel Ellsberg</li>
          <li>• Iraq Survey Group, &ldquo;Comprehensive Report on WMD&rdquo; (Duelfer Report, 2004)</li>
          <li>• Senate Intelligence Committee, &ldquo;Report on Pre-War Intelligence on Iraq&rdquo; (2004, 2008)</li>
          <li>• CBC Fifth Estate, &ldquo;To Sell a War&rdquo; (Nayirah investigation, 1992)</li>
          <li>• Rickover, H.G. &ldquo;How the Battleship Maine Was Destroyed&rdquo; (1976)</li>
          <li>• Preston, Diana. &ldquo;Lusitania: An Epic Tragedy&rdquo; (2002)</li>
          <li>• FAIR (Fairness &amp; Accuracy in Reporting), Iraq War media studies</li>
          <li>• New York Times, &ldquo;The Times and Iraq&rdquo; (Editor&apos;s Note, May 26, 2004)</li>
          <li>• Krakauer, Jon. &ldquo;Where Men Win Glory: The Odyssey of Pat Tillman&rdquo;</li>
          <li>• Lynch, Jessica. Congressional Testimony, April 24, 2007</li>
        </ul>
      </section>

      {/* Related */}
      <div className="bg-stone-100 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/media-and-war" className="text-red-800 hover:text-red-600 font-medium">
            → Manufacturing Consent: How Media Sells War
          </Link>
          <Link href="/analysis/torture-program" className="text-red-800 hover:text-red-600 font-medium">
            → America&apos;s Torture Program
          </Link>
          <Link href="/analysis/what-victory-looks-like" className="text-red-800 hover:text-red-600 font-medium">
            → What Victory Looks Like
          </Link>
          <Link href="/analysis/war-on-terror" className="text-red-800 hover:text-red-600 font-medium">
            → The War on Terror: $8 Trillion Later
          </Link>
        </div>
      </div>

      <RelatedArticles articles={[{"slug":"media-and-war","title":"Manufacturing Consent","desc":"How media sells every war."},{"slug":"war-on-terror","title":"War on Terror: $8T Later","desc":"The most expensive campaign in history."},{"slug":"blowback","title":"Blowback","desc":"How interventions create enemies."}]} />

        <BackToTop />
    </div>
  )
}
