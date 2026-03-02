import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { DetaineeChart, TortureTimelineChart, TechniqueChart, AccountabilityChart, BlackSitesTable } from './TortureCharts'

export const metadata: Metadata = {
  title: 'America\'s Torture Program: Black Sites, Waterboarding & Zero Accountability',
  description: 'The CIA tortured at least 119 detainees across black sites in Poland, Thailand, Romania, and beyond. 266 waterboardings. Rectal feeding. The Senate confirmed it produced zero useful intelligence. Nobody was prosecuted.',
  openGraph: {
    title: 'America\'s Torture Program: Black Sites, Waterboarding & Zero Accountability',
    description: '119+ detainees tortured. Black sites in 7+ countries. Zero prosecutions. The Senate Torture Report confirmed it was all for nothing.',
    url: 'https://www.warcosts.org/analysis/torture-program',
    type: 'article',
  },
}

const keyStats = [
  { stat: '119+', label: 'Detainees held in CIA black sites — at least 26 were wrongfully detained', source: 'Senate Intelligence Committee' },
  { stat: '266', label: 'Waterboarding sessions on just 3 detainees (KSM: 183, Zubaydah: 83)', source: 'CIA Inspector General' },
  { stat: '0', label: 'Senior officials prosecuted for authorizing or conducting torture', source: 'DOJ records' },
  { stat: '54', label: 'Countries that participated in the CIA rendition and detention program', source: 'Open Society Justice Initiative' },
  { stat: '6,700', label: 'Pages in the full Senate Torture Report — only 525 released', source: 'SSCI' },
  { stat: '$300M+', label: 'Paid to psychologists James Mitchell and Bruce Jessen to design the program', source: 'Senate Torture Report' },
]

const legalMemos = [
  { author: 'John Yoo & Jay Bybee', date: 'August 1, 2002', memo: 'Torture Memo I', content: 'Redefined torture to require pain "equivalent to organ failure or death." Gave legal cover for waterboarding, stress positions, sleep deprivation up to 180 hours, and confinement in small boxes.' },
  { author: 'John Yoo', date: 'August 1, 2002', memo: 'Torture Memo II', content: 'Argued the President\'s commander-in-chief powers override the federal torture statute and international law. Congress cannot limit presidential authority during war.' },
  { author: 'Jay Bybee', date: 'August 1, 2002', memo: 'Standards of Conduct', content: 'Narrowed the definition of "severe" pain so drastically that nearly any technique could be justified. Created the euphemism "enhanced interrogation techniques."' },
  { author: 'Steven Bradbury', date: 'May 2005', memo: 'Combined Techniques Memo', content: 'Authorized using multiple techniques simultaneously — waterboarding combined with sleep deprivation, stress positions, and dietary manipulation. Concluded this still wasn\'t torture.' },
  { author: 'Daniel Levin', date: 'December 2004', memo: 'Replacement Memo', content: 'After Yoo/Bybee withdrawal, replaced the memo but still found ways to authorize "enhanced" techniques. Called torture "abhorrent" while authorizing it.' },
]

const victims = [
  { name: 'Abu Zubaydah', detail: 'Waterboarded 83 times. Confined in a coffin-sized box for 266 hours. Lost his left eye in US custody. Never charged with a crime. Still at Guantánamo in 2025 — 23 years without trial.' },
  { name: 'Khalid Sheikh Mohammed', detail: 'Waterboarded 183 times in one month. Sleep deprived for over a week. The 9/11 mastermind — but his torture contaminated evidence so thoroughly that his trial is still in pre-trial 23 years later.' },
  { name: 'Gul Rahman', detail: 'Died of hypothermia at the Salt Pit black site in Afghanistan after being chained to a cold concrete floor, half-naked, in freezing temperatures. The CIA officer in charge was recommended for a $2,500 bonus.' },
  { name: 'Maher Arar', detail: 'Canadian citizen rendered by the CIA to Syria where he was tortured for a year. He was innocent. Canada paid him $10.5M in compensation. The US never apologized.' },
  { name: 'Khaled El-Masri', detail: 'German citizen mistakenly abducted by the CIA, held in Afghanistan for 5 months, tortured, then dumped on a road in Albania when they realized they had the wrong person.' },
  { name: 'Dilawar', detail: 'Afghan taxi driver, 22 years old. Beaten to death at Bagram in 2002. His legs were so pulverized they would have required amputation. He was innocent — picking up passengers near the wrong checkpoint.' },
]

const abuGhraibFacts = [
  'Detainees stripped naked, stacked in human pyramids, photographed by laughing soldiers',
  'Dogs used to terrorize naked, hooded prisoners',
  'Prisoners forced to simulate sexual acts while guards took trophy photos',
  'Detainees beaten, dragged across floors, urinated on',
  'One detainee (Manadel al-Jamadi) beaten to death during interrogation — body packed in ice and photographed with thumbs-up soldier',
  'Only 11 low-ranking soldiers prosecuted — maximum sentence: 10 years. Most served less than 3.',
  'No officer above the rank of colonel was punished. Rumsfeld, who approved the techniques, faced zero consequences.',
  'An estimated 1,800 photos remain classified — Congress saw them, the public never will',
]

export default function TortureProgramPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'America\'s Torture Program' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          America&apos;s Torture Program
        </h1>
        <p className="text-xl text-stone-300 mb-4">Black Sites, Waterboarding &amp; the Death of American Moral Authority</p>
        <p className="text-stone-400 text-lg">
          After September 11, 2001, the United States of America — the country that prosecuted Japanese soldiers 
          for waterboarding and helped write the Geneva Conventions — built a global network of secret prisons, 
          tortured at least 119 people, waterboarded detainees hundreds of times, and then, when the Senate 
          confirmed it had produced <strong className="text-red-400">zero useful intelligence</strong>, prosecuted 
          nobody. The architects were promoted. The psychologists who designed the program were paid $81 million. 
          The detainees — many of whom were innocent — remain imprisoned or broken. This is what America did in 
          your name.
        </p>
      </div>

      <ShareButtons title="America's Torture Program: Black Sites, Waterboarding & Zero Accountability" />

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

      <DetaineeChart />

      {/* Section: How It Started */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          How America Legalized Torture
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Within weeks of 9/11, Vice President Dick Cheney told <em>Meet the Press</em> that the US would need to 
          work &ldquo;the dark side.&rdquo; The CIA requested authority to use &ldquo;enhanced interrogation techniques&rdquo; — 
          a euphemism borrowed from the Gestapo&apos;s <em>Verschärfte Vernehmung</em>. The Office of Legal Counsel, 
          led by John Yoo and Jay Bybee, obliged with memos that redefined torture so narrowly that almost 
          anything short of organ failure was permissible.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The legal reasoning was breathtaking in its cynicism. Yoo argued that for pain to constitute torture, 
          it must be &ldquo;equivalent in intensity to the pain accompanying serious physical injury, such as organ failure, 
          impairment of bodily function, or even death.&rdquo; By this definition, waterboarding — which causes the 
          sensation of drowning and has been prosecuted as torture for centuries — was perfectly legal.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          Jay Bybee, who signed the memos, was rewarded with a lifetime appointment to the Ninth Circuit Court 
          of Appeals. John Yoo returned to his tenured professorship at UC Berkeley. Neither faced any legal 
          consequence. The DOJ&apos;s Office of Professional Responsibility found they had committed &ldquo;professional 
          misconduct,&rdquo; but a senior official overruled the finding, downgrading it to &ldquo;poor judgment.&rdquo;
        </p>

        {/* Legal Memos */}
        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Torture Memos</h3>
          <div className="space-y-4">
            {legalMemos.map((memo) => (
              <div key={memo.memo} className="border-l-4 border-red-800 pl-4">
                <p className="font-bold text-stone-900">{memo.memo} — {memo.date}</p>
                <p className="text-stone-600 text-sm">Author: {memo.author}</p>
                <p className="text-stone-700 text-sm mt-1">{memo.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TortureTimelineChart />

      {/* Section: The Techniques */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          &ldquo;Enhanced Interrogation&rdquo;: What They Actually Did
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The CIA&apos;s &ldquo;enhanced interrogation techniques&rdquo; were reverse-engineered from the military&apos;s 
          SERE program — which was designed to train American soldiers to <em>resist</em> torture by 
          enemy states. Psychologists James Mitchell and Bruce Jessen, who had zero interrogation 
          experience, were paid <strong>$81 million</strong> to turn a resistance-training program into 
          an offensive torture program.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Waterboarding</strong> involves strapping a person to a board, covering their face 
          with cloth, and pouring water to simulate drowning. The sensation triggers an involuntary 
          panic response — the body believes it is dying. Khalid Sheikh Mohammed was waterboarded 
          183 times in a single month. Abu Zubaydah was waterboarded 83 times. After WWII, the 
          United States prosecuted Japanese soldiers for waterboarding American POWs and sentenced 
          them to 15 years of hard labor.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Rectal feeding</strong> — the forced infusion of nutrients through the rectum — was 
          used on at least five detainees. The Senate report found this had no medical necessity and 
          was used as a means of &ldquo;behavior control.&rdquo; In any other context, this would be 
          called sexual assault.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Sleep deprivation</strong> was used for up to 180 hours (7.5 days). Detainees were 
          kept awake by being shackled in standing positions, doused with cold water, and subjected 
          to constant noise and light. After 96 hours without sleep, humans begin to hallucinate. 
          The CIA used this on over 50 detainees.
        </p>

        <TechniqueChart />
      </section>

      {/* Section: Black Sites */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The CIA&apos;s Global Network of Secret Prisons
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The CIA operated &ldquo;black sites&rdquo; — secret prisons — in at least seven countries. 
          Detainees were transported on unmarked planes through a network of shell companies. The 
          European Court of Human Rights later found that Poland, Romania, and Lithuania violated 
          fundamental human rights by hosting these sites. Fifty-four countries participated in the 
          CIA&apos;s &ldquo;extraordinary rendition&rdquo; program — kidnapping suspects and transporting 
          them to countries known for torture.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The first black site, codenamed &ldquo;Cat&apos;s Eye,&rdquo; opened in Thailand in 2002. 
          Abu Zubaydah was its first prisoner. When Thai officials grew nervous, the CIA moved 
          operations to Poland (codename &ldquo;Quartz&rdquo;), then Romania (&ldquo;Bright Light&rdquo;), 
          and Lithuania (&ldquo;Violet&rdquo;). The Salt Pit in Afghanistan — a facility so cold that 
          a detainee froze to death — was run by a CIA officer with no interrogation training who 
          was later recommended for a cash bonus.
        </p>

        <BlackSitesTable />
      </section>

      {/* Section: Abu Ghraib */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Abu Ghraib: The Photos America Can&apos;t Unsee
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          In April 2004, CBS&apos;s <em>60 Minutes II</em> broadcast photographs from Abu Ghraib prison 
          in Iraq that shocked the world. American soldiers — grinning, giving thumbs up — posed with 
          naked, hooded Iraqi prisoners who had been stacked in human pyramids, forced to simulate 
          sexual acts, terrorized with dogs, beaten, and humiliated. One iconic image showed a hooded 
          man standing on a box with electrical wires attached to his hands.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The Bush administration called it the work of &ldquo;a few bad apples.&rdquo; But the Schlesinger 
          Report and subsequent investigations found that the abuse was systemic, that interrogation 
          techniques approved by Secretary Rumsfeld for Guantánamo had migrated to Iraq, and that 
          military intelligence had directed guards to &ldquo;soften up&rdquo; detainees for questioning.
        </p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-4">What Happened at Abu Ghraib</h3>
          <ul className="space-y-3">
            {abuGhraibFacts.map((fact, i) => (
              <li key={i} className="flex gap-3 text-stone-300">
                <span className="text-red-500 mt-1">▸</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section: Victims */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The People America Tortured
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The Senate Torture Report confirmed that at least <strong>26 of the 119 CIA detainees</strong> were 
          wrongfully held — they had no connection to terrorism. The CIA&apos;s own records showed that 
          interrogators frequently had no idea who they were torturing or what information they were 
          seeking. Some detainees were handed over by Afghan warlords for bounties — the US distributed 
          leaflets offering $5,000 per &ldquo;terrorist&rdquo; delivered.
        </p>

        <div className="space-y-6 my-8">
          {victims.map((v) => (
            <div key={v.name} className="bg-stone-100 rounded-lg p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-900 mb-2">{v.name}</h3>
              <p className="text-stone-700">{v.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Senate Torture Report */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Senate Torture Report: The Truth, Buried
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          In December 2014, after a six-year investigation, the Senate Intelligence Committee released 
          a 525-page executive summary of its 6,700-page study on the CIA&apos;s detention and interrogation 
          program. The full report has never been released — the CIA and successive administrations have 
          fought to keep it classified.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The report&apos;s findings were devastating:
        </p>
        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <ul className="space-y-3">
            <li className="flex gap-3 text-stone-700">
              <span className="text-red-800 font-bold">1.</span>
              <span><strong>The CIA&apos;s techniques were not effective.</strong> The program did not produce unique intelligence that stopped terrorist plots. In every case where the CIA claimed success, the information had already been obtained through other means.</span>
            </li>
            <li className="flex gap-3 text-stone-700">
              <span className="text-red-800 font-bold">2.</span>
              <span><strong>The CIA repeatedly lied</strong> to Congress, the White House, and the public about the program&apos;s effectiveness, the techniques used, and the number of detainees held.</span>
            </li>
            <li className="flex gap-3 text-stone-700">
              <span className="text-red-800 font-bold">3.</span>
              <span><strong>The techniques were far more brutal</strong> than the CIA disclosed. Sleep deprivation lasted up to 180 hours. Detainees were rectally fed. One died of hypothermia.</span>
            </li>
            <li className="flex gap-3 text-stone-700">
              <span className="text-red-800 font-bold">4.</span>
              <span><strong>At least 26 detainees were wrongfully held.</strong> The CIA&apos;s own records showed they did not meet the standard for detention.</span>
            </li>
            <li className="flex gap-3 text-stone-700">
              <span className="text-red-800 font-bold">5.</span>
              <span><strong>The program damaged US standing worldwide</strong> and created significant diplomatic problems with allies who participated.</span>
            </li>
          </ul>
        </div>
        <p className="text-stone-700 text-lg mb-4">
          Senator Dianne Feinstein, who led the investigation, said: &ldquo;The report exposes brutality 
          that stands in stark contrast to our values as a nation.&rdquo; The CIA fought the investigation 
          at every step — including <strong>hacking into Senate staffers&apos; computers</strong> to monitor 
          their work. CIA Director John Brennan initially denied the hacking, then admitted it and 
          apologized. He faced no consequences.
        </p>
      </section>

      <AccountabilityChart />

      {/* Section: Guantánamo */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Guantánamo Bay: The Prison That Won&apos;t Close
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The detention facility at Guantánamo Bay, Cuba was deliberately placed outside US territory 
          to avoid constitutional protections. At its peak, it held 780 detainees. Of those, only 
          <strong> 8 were ever convicted</strong> of any crime. The majority — over 700 — were released 
          without charge, many after years of detention. As of 2025, approximately 15 detainees remain.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Force feeding</strong> became routine at Guantánamo as detainees went on hunger strikes 
          to protest their indefinite detention. The procedure involves strapping a person to a chair, 
          forcing a tube through their nose into their stomach, and pumping in liquid nutrients. The 
          UN has called force-feeding of competent prisoners a form of torture. The US military performed 
          it daily for years.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The cost of Guantánamo is staggering: approximately <strong>$13 million per detainee per year</strong>, 
          making it the most expensive prison on Earth. The total cost exceeds $7 billion. For comparison, 
          a federal supermax prison costs about $78,000 per inmate per year. Every president since Bush has 
          promised to close it. None have.
        </p>
      </section>

      {/* Section: Zero Intelligence */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          It Didn&apos;t Even Work
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          This is the final indictment: <strong>it didn&apos;t work</strong>. The entire justification 
          for the torture program was that it produced &ldquo;unique, otherwise unobtainable intelligence&rdquo; 
          that prevented terrorist attacks. The Senate investigation reviewed 20 of the CIA&apos;s most 
          frequently cited examples and found that in every single case, the information attributed to 
          &ldquo;enhanced interrogation&rdquo; was either fabricated by detainees, already known from other sources, 
          or did not lead to any actionable intelligence.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The CIA&apos;s claim that torture helped find Osama bin Laden — dramatized in the film <em>Zero 
          Dark Thirty</em> — was specifically debunked by the Senate report. The key intelligence that led 
          to bin Laden&apos;s courier came from conventional intelligence methods, not from tortured detainees. 
          In fact, KSM — waterboarded 183 times — actively misled interrogators about the courier.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          Professional interrogators — including the FBI&apos;s Ali Soufan, who had been successfully 
          interrogating Abu Zubaydah using rapport-based techniques before the CIA took over — have 
          consistently testified that torture produces unreliable information. People being tortured will 
          say anything to make it stop. This is not a novel finding. It has been known for centuries. 
          The United States chose to ignore it.
        </p>
      </section>

      {/* Section: Zero Accountability */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Zero Accountability
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          No senior official has ever been prosecuted for the US torture program. Not the lawyers 
          who authorized it. Not the CIA directors who oversaw it. Not the psychologists who designed 
          it. Not the interrogators who carried it out. Not the president who approved it.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Promotions</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-red-800 pl-4">
              <p className="font-bold text-stone-900">Gina Haspel</p>
              <p className="text-stone-600">Ran the Thailand black site where Abu Zubaydah was waterboarded. Ordered the destruction of 92 interrogation videotapes. <strong>Promoted to CIA Director</strong> in 2018.</p>
            </div>
            <div className="border-l-4 border-red-800 pl-4">
              <p className="font-bold text-stone-900">Jay Bybee</p>
              <p className="text-stone-600">Signed the torture memos that authorized waterboarding and other techniques. <strong>Appointed to the Ninth Circuit Court of Appeals</strong> — a lifetime position.</p>
            </div>
            <div className="border-l-4 border-red-800 pl-4">
              <p className="font-bold text-stone-900">John Yoo</p>
              <p className="text-stone-600">Wrote the legal framework for torture. <strong>Returned to UC Berkeley</strong> as a tenured law professor. Published books. Appeared on cable news as a legal expert.</p>
            </div>
            <div className="border-l-4 border-red-800 pl-4">
              <p className="font-bold text-stone-900">James Mitchell &amp; Bruce Jessen</p>
              <p className="text-stone-600">Psychologists who designed the torture program with zero interrogation experience. <strong>Paid $81 million.</strong> Lawsuit by ACLU resulted in a settlement — not a criminal prosecution.</p>
            </div>
            <div className="border-l-4 border-red-800 pl-4">
              <p className="font-bold text-stone-900">The Salt Pit Officer</p>
              <p className="text-stone-600">Oversaw a black site where Gul Rahman froze to death. <strong>Recommended for a $2,500 cash bonus.</strong> Never identified publicly. Never charged.</p>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          In 2009, Attorney General Eric Holder appointed a special prosecutor to investigate the CIA&apos;s 
          treatment of detainees. In 2012, the investigation was closed without any charges — even in the 
          cases where detainees died in custody. President Obama&apos;s stated position: &ldquo;We need to look 
          forward as opposed to looking backwards.&rdquo;
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The only people punished for Abu Ghraib were 11 low-ranking soldiers. Specialist Charles Graner 
          received the longest sentence: 10 years (served 6.5). Lynndie England, the woman in the most 
          infamous photos, served 521 days. The officers and officials who created the conditions for 
          abuse — Rumsfeld, who approved the techniques; General Sanchez, who authorized their use in 
          Iraq; the military intelligence officers who directed guards to &ldquo;soften up&rdquo; prisoners — 
          faced nothing.
        </p>
      </section>

      {/* Section: The Legacy */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Legacy: America Lost Its Moral Authority
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Before the War on Terror, the United States could credibly lecture other nations about human 
          rights. It had prosecuted Nazi war criminals at Nuremberg. It had condemned Soviet gulags. It 
          had championed the Universal Declaration of Human Rights and the Geneva Conventions. That 
          credibility is gone.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          When the US criticizes China for Xinjiang, Beijing points to Abu Ghraib and Guantánamo. When 
          it condemns Russia&apos;s treatment of prisoners in Ukraine, Moscow cites the Senate Torture 
          Report. When it lectures any country on human rights, the answer is the same: <em>you waterboarded 
          people 183 times and promoted the woman who ran the black site to CIA Director.</em>
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The torture program also served as a recruiting tool for extremists. Abu Ghraib photos appeared 
          in ISIS propaganda. Former Guantánamo detainees — radicalized by their treatment — joined 
          militant groups after release. The program didn&apos;t make America safer. It created new enemies, 
          destroyed alliances, contaminated legal proceedings, and permanently damaged the idea that the 
          United States stands for something better than the regimes it fights against.
        </p>
      </section>

      {/* Bottom Line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-400">The Bottom Line</h2>
        <p className="text-stone-300 text-lg mb-4">
          The United States of America tortured people. Not rogue agents. Not &ldquo;a few bad apples.&rdquo; 
          The government — from the President to the CIA Director to the lawyers at the Department of 
          Justice — designed, authorized, implemented, and defended a systematic program of torture 
          across a global network of secret prisons. The Senate confirmed it produced no useful intelligence. 
          Nobody was prosecuted. The architects were promoted.
        </p>
        <p className="text-stone-300 text-lg">
          As of 2025, Abu Zubaydah is still at Guantánamo. He has been imprisoned for 23 years without 
          trial. He lost an eye in US custody. He was waterboarded 83 times. The full Senate Torture 
          Report remains classified. And the United States continues to call itself the leader of the 
          free world.
        </p>
      </div>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li>• Senate Select Committee on Intelligence, &ldquo;Committee Study of the CIA&apos;s Detention and Interrogation Program,&rdquo; December 2014</li>
          <li>• Open Society Justice Initiative, &ldquo;Globalizing Torture: CIA Secret Detention and Extraordinary Rendition,&rdquo; 2013</li>
          <li>• CIA Inspector General, &ldquo;Special Review: Counterterrorism Detention and Interrogation Activities,&rdquo; 2004</li>
          <li>• The Constitution Project, &ldquo;Report of the Task Force on Detainee Treatment,&rdquo; 2013</li>
          <li>• European Court of Human Rights: Husayn (Abu Zubaydah) v. Poland (2014), Al Nashiri v. Romania (2018), Abu Zubaydah v. Lithuania (2018)</li>
          <li>• Department of Justice Office of Professional Responsibility, Investigation of Yoo/Bybee Memoranda, 2009</li>
          <li>• Schlesinger Report on Abu Ghraib, August 2004</li>
          <li>• Ali Soufan, &ldquo;The Black Banners: The Inside Story of 9/11 and the War Against al-Qaeda,&rdquo; 2011</li>
          <li>• ACLU FOIA documents on CIA Rendition, Detention and Interrogation Program</li>
        </ul>
      </section>

      {/* Related */}
      <div className="bg-stone-100 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/war-on-terror" className="text-red-800 hover:text-red-600 font-medium">
            → The War on Terror: $8 Trillion Later
          </Link>
          <Link href="/analysis/war-and-civil-liberties" className="text-red-800 hover:text-red-600 font-medium">
            → War &amp; Civil Liberties
          </Link>
          <Link href="/analysis/lies-that-started-wars" className="text-red-800 hover:text-red-600 font-medium">
            → Lies That Started Wars
          </Link>
          <Link href="/analysis/cost-of-secrecy" className="text-red-800 hover:text-red-600 font-medium">
            → The Black Budget: $23 Trillion Unaccounted
          </Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
