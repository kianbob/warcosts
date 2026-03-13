import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleSchema from '@/components/ArticleSchema'
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

const blackSitesData = [
  {
    codename: 'Blue',
    country: 'Thailand',
    location: 'Near Bangkok',
    operated: 'March 2002 - December 2002',
    detainees: '2+ known',
    cost: '$1.2M construction, $300K monthly operations',
    details: 'First CIA black site. Housed Abu Zubaydah. Closed after Thai government concerns about discovery.',
    status: 'Demolished 2003',
  },
  {
    codename: 'Green',
    country: 'Poland',
    location: 'Stare Kiejkuty, Szymany Airport',
    operated: 'December 2002 - September 2003',
    detainees: '8+ known including KSM',
    cost: '$2.3M construction and operations',
    details: 'Primary high-value detainee site. KSM waterboarded 183 times here. Poland paid €230,000 compensation per detainee in 2014.',
    status: 'EU human rights violation confirmed',
  },
  {
    codename: 'Bright Light',
    country: 'Romania',
    location: 'Bucharest area',
    operated: 'September 2003 - November 2005',
    detainees: '5+ known',
    cost: '$1.8M operations',
    details: 'Secondary site after Poland closure. Romania also found liable by European Court of Human Rights.',
    status: 'EU human rights violation confirmed',
  },
  {
    codename: 'Orange',
    country: 'Afghanistan',
    location: 'Kabul area (suspected)',
    operated: '2002-2004',
    detainees: '20+ suspected',
    cost: 'Unknown (classified)',
    details: 'Possibly same as "Salt Pit" where Gul Rahman died of hypothermia.',
    status: 'Existence disputed by CIA',
  },
  {
    codename: 'Cobalt (Salt Pit)',
    country: 'Afghanistan',
    location: 'North of Kabul',
    operated: '2002-2008',
    detainees: '100+ over 6 years',
    cost: '$8.5M construction and operations',
    details: 'Notorious site. Gul Rahman died here. Detainees chained to floors, kept naked in freezing conditions.',
    status: 'Confirmed by Senate Report',
  },
  {
    codename: 'Violet',
    country: 'Lithuania',
    location: 'Antaviliai, near Vilnius',
    operated: '2005-2006',
    detainees: '2+ known',
    cost: '$400K operations',
    details: 'Used briefly before program shutdown. Lithuania found liable by EU courts.',
    status: 'EU human rights violation confirmed',
  },
  {
    codename: 'Gray',
    country: 'Morocco',
    location: 'Temara (suspected)',
    operated: '2002-2004 (estimated)',
    detainees: '10+ suspected',
    cost: 'Unknown',
    details: 'Suspected site based on detainee testimonies. Morocco officially denies but evidence suggests otherwise.',
    status: 'Not officially confirmed',
  },
]

const financialCosts = [
  {
    category: 'Black Site Construction & Operations',
    amount: '$15+ million',
    details: 'Physical infrastructure, security, staff housing, equipment for 7+ sites',
    source: 'Senate Torture Report estimate',
  },
  {
    category: 'Mitchell & Jessen Psychologist Fees',
    amount: '$81 million',
    details: 'Total contract value paid to psychologists who designed torture techniques',
    source: 'Senate Torture Report',
  },
  {
    category: 'CIA Personnel & Overhead',
    amount: '$150+ million annually',
    details: 'Staff salaries, training, medical care, security clearances for program personnel',
    source: 'CIA Inspector General estimate',
  },
  {
    category: 'Legal Defense & Settlements',
    amount: '$45+ million',
    details: 'Legal representation for CIA officers, some victim settlements',
    source: 'DOJ and State Department records',
  },
  {
    category: 'Document Review & Classification',
    amount: '$30+ million',
    details: 'Cost of reviewing 6+ million documents for Senate investigation and FOIA responses',
    source: 'SSCI budget documents',
  },
  {
    category: 'International Compensation',
    amount: '$8+ million',
    details: 'EU court-ordered payments to victims. Poland: €100K-€230K per victim. Italy: €70K-€115K per case.',
    source: 'European Court of Human Rights',
  },
  {
    category: 'Guantanamo Continued Detention',
    amount: '$540+ million annually',
    details: '$13M per detainee annually. Many torture victims still imprisoned without trial.',
    source: 'DOD budget documents, 2024',
  },
]

const medicalEffects = [
  {
    technique: 'Waterboarding',
    physicalEffects: 'Oxygen deprivation, lung damage, broken capillaries, panic attacks, cardiac stress',
    psychologicalEffects: 'PTSD, chronic anxiety, claustrophobia, panic disorder, depression',
    longTermConsequences: 'Permanent brain damage from oxygen deprivation, inability to be near water, chronic nightmares',
    survivors: 'Abu Zubaydah (83x), KSM (183x), Abd al-Rahim al-Nashiri (multiple times)',
  },
  {
    technique: 'Sleep Deprivation',
    physicalEffects: 'Hallucinations, immune system breakdown, motor function impairment, weight loss',
    psychologicalEffects: 'Psychosis, paranoia, memory loss, emotional dysregulation',
    longTermConsequences: 'Chronic insomnia, cognitive impairment, increased suicide risk',
    survivors: 'Up to 180 hours documented in multiple cases',
  },
  {
    technique: 'Temperature Extremes',
    physicalEffects: 'Hypothermia, frostbite, heat exhaustion, organ damage',
    psychologicalEffects: 'Heightened fear responses, anticipatory anxiety',
    longTermConsequences: 'Chronic temperature sensitivity, circulation problems',
    survivors: 'Gul Rahman (died from hypothermia), multiple documented cases',
  },
  {
    technique: 'Sexual Humiliation',
    physicalEffects: 'Exposure injuries, infections from unsanitary conditions',
    psychologicalEffects: 'Severe PTSD, shame, sexual dysfunction, self-harm ideation',
    longTermConsequences: 'Inability to form intimate relationships, chronic depression, cultural/religious trauma',
    survivors: 'Abu Ghraib victims, multiple black site detainees',
  },
  {
    technique: 'Confinement in Small Spaces',
    physicalEffects: 'Muscle atrophy, circulation problems, joint damage, vitamin D deficiency',
    psychologicalEffects: 'Claustrophobia, panic attacks, disorientation, learned helplessness',
    longTermConsequences: 'Inability to tolerate enclosed spaces, chronic joint problems',
    survivors: 'Abu Zubaydah (266 hours in coffin-sized box)',
  },
  {
    technique: 'Forced Nudity',
    physicalEffects: 'Exposure to elements, infections, hygiene-related health issues',
    psychologicalEffects: 'Humiliation, cultural/religious trauma, loss of dignity',
    longTermConsequences: 'Body dysmorphia, social withdrawal, religious crisis',
    survivors: 'Widespread at Abu Ghraib, multiple black sites',
  },
]

const tortureMemoTimeline = [
  {
    date: 'September 25, 2001',
    event: 'Bush signs classified directive authorizing CIA to capture and detain terrorists',
    author: 'President Bush',
    significance: 'First legal step toward torture program',
  },
  {
    date: 'February 7, 2002',
    event: 'Bush memo declares Geneva Conventions don\'t apply to Taliban or Al-Qaeda',
    author: 'President Bush',
    significance: 'Removes international law protections from detainees',
  },
  {
    date: 'March 28, 2002',
    event: 'Abu Zubaydah captured in Pakistan, first high-value detainee',
    author: 'CIA/Pakistani ISI',
    significance: 'Triggers development of "enhanced" interrogation program',
  },
  {
    date: 'August 1, 2002',
    event: 'John Yoo/Jay Bybee "Torture Memos" issued',
    author: 'DOJ Office of Legal Counsel',
    significance: 'Provides legal justification for torture, redefines torture to near-impossibility',
  },
  {
    date: 'August 6, 2002',
    event: 'First waterboarding session of Abu Zubaydah',
    author: 'CIA interrogators',
    significance: 'Torture program becomes operational',
  },
  {
    date: 'March 2003',
    event: 'KSM capture and transfer to black site',
    author: 'CIA',
    significance: 'Leads to 183 waterboarding sessions in one month',
  },
  {
    date: 'May 2004',
    event: 'Abu Ghraib photos leak to media',
    author: 'CBS 60 Minutes',
    significance: 'First major public exposure of torture program',
  },
  {
    date: 'December 30, 2004',
    event: 'Daniel Levin memo replaces Bybee memo but continues to authorize torture',
    author: 'DOJ Office of Legal Counsel',
    significance: 'Cosmetic changes but torture continues under new legal framework',
  },
  {
    date: 'May 10, 2005',
    event: 'Steven Bradbury memos authorize "combined techniques"',
    author: 'DOJ Office of Legal Counsel',
    significance: 'Explicitly authorizes multiple torture techniques simultaneously',
  },
  {
    date: 'September 2006',
    event: 'Bush acknowledges black sites exist, transfers 14 detainees to Guantanamo',
    author: 'President Bush',
    significance: 'First official acknowledgment of secret prison network',
  },
  {
    date: 'January 22, 2009',
    event: 'Obama executive order bans torture, orders closure of black sites',
    author: 'President Obama',
    significance: 'Official end of torture program (though effects continue)',
  },
  {
    date: 'August 24, 2009',
    event: 'Attorney General Holder announces investigation into torture',
    author: 'DOJ',
    significance: 'Investigation ultimately results in zero prosecutions',
  },
  {
    date: 'December 9, 2014',
    event: 'Senate Torture Report (executive summary) released',
    author: 'Senate Intelligence Committee',
    significance: 'Confirms torture was systematic, widespread, and produced no useful intelligence',
  },
]

export default function TortureProgramPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'America\'s Torture Program' }]} />
      <ArticleSchema title="America\" description="The CIA tortured at least 119 detainees across black sites in Poland, Thailand, Romania, and beyond. 266 waterboardings. Rectal feeding. The Senate confirmed it" url="/analysis/torture-program" />
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
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
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

      {/* Black Sites Global Network */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">The Global Torture Network: CIA Black Sites</h2>
        <p className="text-stone-700 mb-6">
          The CIA operated a network of secret prisons in at least <strong>7 countries</strong> across four continents.
          These "black sites" were designed to be beyond the reach of US courts, international monitoring, and the
          Geneva Conventions. Detainees were "rendered" (kidnapped) and flown on CIA aircraft to these sites where
          they were tortured in complete secrecy. The full scope may never be known — the CIA destroyed videotapes
          of interrogations and classified the locations of additional sites.
        </p>
        <div className="space-y-4">
          {blackSitesData.map(site => (
            <div key={site.codename} className="border rounded-lg p-4 bg-stone-50">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-bold text-lg text-red-700">Site "{site.codename}"</h3>
                <span className="text-sm px-3 py-1 bg-red-100 text-red-800 rounded-full">{site.country}</span>
                <span className="text-xs px-2 py-1 bg-stone-200 text-stone-700 rounded">{site.operated}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3 text-sm">
                <div>
                  <p className="text-stone-500 text-xs uppercase font-semibold">Location</p>
                  <p className="text-stone-700">{site.location}</p>
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase font-semibold">Detainees</p>
                  <p className="text-stone-700">{site.detainees}</p>
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase font-semibold">Cost</p>
                  <p className="text-stone-700">{site.cost}</p>
                </div>
              </div>
              <p className="text-sm text-stone-700 mb-2">{site.details}</p>
              <p className="text-xs text-stone-500 italic"><strong>Current status:</strong> {site.status}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded-lg">
          <h3 className="font-bold text-red-800 mb-2">🌍 International Legal Consequences</h3>
          <p className="text-sm text-stone-700">
            The European Court of Human Rights has ruled that Poland, Romania, and Lithuania violated human rights
            laws by hosting CIA black sites. These countries have been ordered to pay compensation to victims and
            conduct criminal investigations. However, the CIA officers and US officials who designed and operated
            these sites have faced no consequences. The US government refuses to extradite anyone for prosecution.
          </p>
        </div>
      </div>

      {/* Financial Cost of Torture */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">The Cost of Torture: $400+ Million and Counting</h2>
        <p className="text-stone-300 mb-6">
          The torture program was expensive. Beyond the obvious moral and strategic costs, it consumed hundreds of
          millions of taxpayer dollars to build, operate, and cover up a program that the Senate confirmed produced
          zero useful intelligence. The money could have funded schools, hospitals, or legitimate intelligence
          gathering. Instead, it paid for waterboards and coffin-sized boxes.
        </p>
        <div className="space-y-4">
          {financialCosts.map(cost => (
            <div key={cost.category} className="flex justify-between items-start border-b border-stone-700 pb-3">
              <div className="flex-1">
                <h3 className="font-bold text-red-400">{cost.category}</h3>
                <p className="text-sm text-stone-300 mt-1">{cost.details}</p>
                <p className="text-xs text-stone-500 mt-1">Source: {cost.source}</p>
              </div>
              <div className="text-right ml-4">
                <p className="text-xl font-bold text-green-400">{cost.amount}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-stone-800 rounded-lg">
          <h3 className="font-bold text-red-400 mb-2">The Hidden Costs</h3>
          <p className="text-sm text-stone-300">
            These figures represent only documented, unclassified costs. The true price includes: damaged US credibility
            worldwide, compromised legal cases against terrorists, radicalization of victims and communities, loss of
            intelligence cooperation from allies, and the psychological treatment for US personnel who participated.
            Conservative total estimate: <strong>$1+ billion</strong> for a program that produced no useful intelligence.
            Related analysis: <Link href="/analysis/cost-per-life" className="text-red-400 underline">Cost Per Life</Link>.
          </p>
        </div>
      </div>

      {/* Medical and Psychological Effects */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Torture&apos;s Medical Legacy: Permanent Damage by Design</h2>
        <p className="text-stone-700 mb-6">
          The torture techniques were deliberately chosen to inflict maximum psychological damage while leaving minimal
          physical evidence. Psychologists James Mitchell and Bruce Jessen, paid $81 million by the CIA, designed
          methods based on research into learned helplessness and psychological breakdown. The effects on survivors
          are permanent and devastating.
        </p>
        <div className="space-y-6">
          {medicalEffects.map(effect => (
            <div key={effect.technique} className="border rounded-lg p-5">
              <h3 className="font-bold text-lg text-red-700 mb-3">{effect.technique}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-sm text-stone-800 mb-1">Physical Effects</h4>
                  <p className="text-xs text-stone-600">{effect.physicalEffects}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-stone-800 mb-1">Psychological Effects</h4>
                  <p className="text-xs text-stone-600">{effect.psychologicalEffects}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-stone-800 mb-1">Long-Term Consequences</h4>
                  <p className="text-xs text-stone-600">{effect.longTermConsequences}</p>
                </div>
              </div>
              <div className="bg-stone-50 rounded p-3">
                <p className="text-xs text-stone-500"><strong>Documented survivors:</strong> {effect.survivors}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded-lg">
          <h3 className="font-bold text-amber-800 mb-2">💊 Medical Professionals&apos; Participation</h3>
          <p className="text-sm text-stone-700 mb-2">
            Doctors and psychologists didn&apos;t just treat torture victims — they helped design and monitor the torture.
            Medical professionals at black sites:
          </p>
          <ul className="text-sm text-stone-700 space-y-1">
            <li>• Monitored vital signs to keep detainees alive during waterboarding</li>
            <li>• Designed calorie restriction and sleep deprivation schedules</li>
            <li>• Documented the effectiveness of different torture techniques</li>
            <li>• Provided medical clearance for continued torture despite injuries</li>
            <li>• Administered drugs to enhance interrogations</li>
          </ul>
          <p className="text-xs text-stone-600 mt-2">
            This violated the Hippocratic Oath ("First, do no harm") and international medical ethics codes.
            No medical professional has been prosecuted or had their license revoked.
          </p>
        </div>
      </div>

      {/* Torture Memo Timeline */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Timeline: How Torture Became Legal</h2>
        <p className="text-stone-300 mb-6">
          Torture didn&apos;t happen by accident. It required a systematic dismantling of legal, moral, and institutional
          safeguards. Here&apos;s how Bush administration lawyers transformed the United States from a nation that
          prosecuted war criminals to one that employed them.
        </p>
        <div className="space-y-4">
          {tortureMemoTimeline.map(item => (
            <div key={item.date} className="flex gap-4 items-start border-l-2 border-red-400 pl-4">
              <div className="shrink-0">
                <span className="text-sm font-bold text-red-400 block">{item.date}</span>
                <span className="text-xs text-stone-400 block mt-1">{item.author}</span>
              </div>
              <div>
                <p className="text-sm text-white font-medium mb-1">{item.event}</p>
                <p className="text-xs text-stone-400">{item.significance}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-stone-800 rounded-lg">
          <h3 className="font-bold text-red-400 mb-2">The Legal Theory: Presidential Power Knows No Bounds</h3>
          <p className="text-sm text-stone-300 mb-2">
            The core legal argument was simple: during wartime, the President&apos;s commander-in-chief powers override
            all other laws — congressional statutes, international treaties, even the Constitution itself. John Yoo&apos;s
            memos argued that Congress could not limit presidential authority to order torture, because the President&apos;s
            war powers are absolute and exclusive.
          </p>
          <p className="text-sm text-stone-300">
            This theory would have made the President a legal dictator during any military conflict. It was rejected
            by the Supreme Court in Hamdi v. Rumsfeld (2004) and Hamdan v. Rumsfeld (2006), but not before enabling
            years of torture. Related: <Link href="/analysis/surveillance-state" className="text-red-400 underline">The Surveillance State</Link>.
          </p>
        </div>
      </div>

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

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
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

      {/* International Comparison and Historical Context */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">Historical Context: America&apos;s Reversal</h2>
        <p className="text-stone-700 mb-4">
          The United States built its post-World War II moral authority on the prosecution of war criminals
          and the establishment of international law. The same techniques now used by the CIA were once crimes
          for which America executed enemy soldiers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border">
            <h3 className="font-bold text-green-700 mb-2">What America Once Condemned</h3>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• <strong>Tokyo War Crimes Trial (1946):</strong> US executed Japanese officers for waterboarding American POWs</li>
              <li>• <strong>Nuremberg Principles:</strong> "Following orders" is not a defense for war crimes</li>
              <li>• <strong>Geneva Conventions (1949):</strong> US led effort to prohibit torture and inhumane treatment</li>
              <li>• <strong>UN Torture Convention (1987):</strong> US ratified treaty requiring prosecution of torturers</li>
              <li>• <strong>McCain Amendment (2005):</strong> Banned cruel, inhuman, degrading treatment by US forces</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <h3 className="font-bold text-red-700 mb-2">What America Now Does</h3>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• <strong>Waterboarding:</strong> 266 times on 3 detainees (same technique we executed Japanese for)</li>
              <li>• <strong>Sexual humiliation:</strong> Systematic use at Abu Ghraib and other sites</li>
              <li>• <strong>Temperature extremes:</strong> Hypothermia death at Salt Pit, extreme heat elsewhere</li>
              <li>• <strong>Sleep deprivation:</strong> Up to 180 hours, causing hallucinations and psychosis</li>
              <li>• <strong>Prolonged isolation:</strong> Years of solitary confinement, now recognized as torture</li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-4">
          <h3 className="font-bold text-red-400 mb-2">The Nuremberg Standard</h3>
          <p className="text-sm text-stone-300 mb-2">
            At Nuremberg, the US established that state officials cannot escape responsibility for war crimes by
            claiming they were following orders or acting under domestic law that conflicted with international law.
            Supreme Court Justice Robert Jackson, chief US prosecutor at Nuremberg, stated:
          </p>
          <blockquote className="text-sm italic text-stone-300 border-l-2 border-red-400 pl-3 my-2">
            "The ultimate step in avoiding periodic wars, which are inevitable in a system of international
            lawlessness, is to make statesmen responsible to law."
          </blockquote>
          <p className="text-xs text-stone-400">
            By this standard, every official who authorized, implemented, or covered up torture should be prosecuted.
            None have been. The Nuremberg principles apply to everyone except Americans.
          </p>
        </div>
      </div>

      {/* Zero Accountability Section */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Zero Accountability: Promotions for Torturers</h2>
        <p className="text-stone-700 mb-6">
          Not only were no senior officials prosecuted for torture — many were promoted. The message was clear:
          torture is rewarded, whistleblowing is punished, and accountability is for other countries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h3 className="font-bold text-red-700 mb-3">Promoted After Torture</h3>
            <ul className="text-sm text-stone-700 space-y-2">
              <li>• <strong>Gina Haspel:</strong> Ran Thai black site, destroyed torture tapes → CIA Director (2018)</li>
              <li>• <strong>John Yoo:</strong> Wrote torture memos → Berkeley law professor, conservative media pundit</li>
              <li>• <strong>Jay Bybee:</strong> Signed torture memos → Federal appeals court judge (lifetime tenure)</li>
              <li>• <strong>David Addington:</strong> Cheney&apos;s counsel, torture advocate → Heritage Foundation fellow</li>
              <li>• <strong>John Rizzo:</strong> CIA General Counsel during torture years → lucrative private practice</li>
              <li>• <strong>Jose Rodriguez:</strong> Ordered destruction of torture tapes → no consequences, wrote book</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h3 className="font-bold text-green-700 mb-3">Punished for Opposing Torture</h3>
            <ul className="text-sm text-stone-700 space-y-2">
              <li>• <strong>FBI agents:</strong> Refused to participate in torture → removed from Guantanamo</li>
              <li>• <strong>Military interrogators:</strong> Objected to techniques → reassigned or disciplined</li>
              <li>• <strong>CIA officers:</strong> Expressed concerns → sidelined from career advancement</li>
              <li>• <strong>State Department officials:</strong> Opposed program → excluded from decision-making</li>
              <li>• <strong>Military lawyers:</strong> Argued for Geneva Conventions → career derailed</li>
              <li>• <strong>Congressional staff:</strong> Investigated torture → faced political retaliation</li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-4 mb-4">
          <h3 className="font-bold text-red-400 mb-2">The Torture Impunity Model</h3>
          <p className="text-sm text-stone-300 mb-2">
            The complete lack of accountability for torture established a dangerous precedent: US officials can
            commit war crimes without consequences. This impunity model has been replicated in other areas:
          </p>
          <ul className="text-sm text-stone-300 space-y-1">
            <li>• <strong>NSA mass surveillance:</strong> No prosecutions despite violating Constitution</li>
            <li>• <strong>Drone assassinations:</strong> Killing US citizens without trial, zero accountability</li>
            <li>• <strong>Financial crimes:</strong> Wall Street fraud, no executives prosecuted</li>
            <li>• <strong>War profiteering:</strong> Billions in Iraq/Afghanistan fraud, minimal prosecutions</li>
          </ul>
          <p className="text-xs text-stone-400 mt-2">
            Related analysis: <Link href="/analysis/surveillance-state" className="text-red-400 underline">The Surveillance State</Link> and
            <Link href="/analysis/shadow-wars" className="text-red-400 underline"> Shadow Wars</Link>.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
          <h3 className="font-bold text-amber-800 mb-2">💡 John Durham&apos;s Investigation: Theater of Accountability</h3>
          <p className="text-sm text-stone-700 mb-2">
            In 2008, Attorney General Eric Holder appointed prosecutor John Durham to investigate CIA torture.
            The investigation lasted 3 years, cost millions of dollars, and resulted in... zero prosecutions.
            Not even for the cases where detainees were murdered.
          </p>
          <p className="text-sm text-stone-700">
            Durham&apos;s mandate was deliberately narrow — he could only prosecute CIA officers who exceeded
            the torture techniques authorized by the Justice Department. Since the memos authorized almost
            anything, virtually no conduct was prosecutable. The investigation was designed to fail.
          </p>
        </div>
      </div>

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

        <div className="bg-stone-100 rounded-lg p-6 mt-6">
          <h3 className="font-bold text-stone-900 mb-3">The Propaganda Gift That Keeps Giving</h3>
          <p className="text-sm text-stone-700 mb-3">
            US torture has been referenced by authoritarian governments worldwide to deflect criticism:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-stone-700">
            <div>
              <p><strong>China:</strong> "The US has no right to lecture us about human rights after Abu Ghraib and Guantanamo."</p>
              <p><strong>Russia:</strong> "American torture in black sites is worse than anything we do."</p>
              <p><strong>Iran:</strong> "The Great Satan preaches human rights while waterboarding prisoners."</p>
            </div>
            <div>
              <p><strong>Syria:</strong> "Assad may be bad, but Americans torture too — what's the difference?"</p>
              <p><strong>Saudi Arabia:</strong> "Our partner America also uses enhanced interrogation techniques."</p>
              <p><strong>North Korea:</strong> "The US operates torture camps just like they accuse us of."</p>
            </div>
          </div>
          <p className="text-xs text-stone-600 mt-3">
            Every authoritarian regime now has a ready-made response to American human rights criticism.
            This is the strategic cost of torture: it neutered America&apos;s most powerful diplomatic weapon.
          </p>
        </div>
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
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources & Further Reading</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-sm mb-3">Official Government Reports</h3>
            <ul className="space-y-1 text-stone-600 text-xs">
              <li>• Senate Select Committee on Intelligence, "Committee Study of the CIA's Detention and Interrogation Program" (2014)</li>
              <li>• CIA Inspector General, "Special Review: Counterterrorism Detention and Interrogation Activities" (2004)</li>
              <li>• FBI emails released under FOIA regarding torture observations at Guantanamo (2004-2005)</li>
              <li>• Department of Justice Office of Professional Responsibility, "Investigation of Yoo/Bybee Memoranda" (2009)</li>
              <li>• Schlesinger Report on Abu Ghraib Investigation (August 2004)</li>
              <li>• Fay-Jones Report on Abu Ghraib (August 2004)</li>
              <li>• Taguba Report on Abu Ghraib (classified, partially released)</li>
              <li>• Pentagon Inspector General reports on detainee operations (2006-2008)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-3">International & Legal Sources</h3>
            <ul className="space-y-1 text-stone-600 text-xs">
              <li>• European Court of Human Rights: Husayn (Abu Zubaydah) v. Poland (2014)</li>
              <li>• Al Nashiri v. Romania, European Court of Human Rights (2018)</li>
              <li>• Abu Zubaydah v. Lithuania, European Court of Human Rights (2018)</li>
              <li>• Open Society Justice Initiative, "Globalizing Torture: CIA Secret Detention" (2013)</li>
              <li>• International Committee of the Red Cross, "ICRC Report on the Treatment of Fourteen 'High Value Detainees'" (2007)</li>
              <li>• UN Special Rapporteur on Torture reports (Nowak, Méndez)</li>
              <li>• Amnesty International, "USA: Human Dignity Denied" (2004-2014)</li>
              <li>• Human Rights Watch, "No Blood, No Foul: Soldiers' Accounts of Detainee Abuse" (2006)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-sm mb-3">Books & Investigative Journalism</h3>
            <ul className="space-y-1 text-stone-600 text-xs">
              <li>• Ali Soufan, "The Black Banners: The Inside Story of 9/11 and the War Against al-Qaeda" (2011)</li>
              <li>• Jane Mayer, "The Dark Side: The Inside Story of How the War on Terror Turned into a War on American Ideals" (2008)</li>
              <li>• Mark Danner, "Torture and Truth: America, Abu Ghraib, and the War on Terror" (2004)</li>
              <li>• Seymour Hersh, "Chain of Command: The Road from 9/11 to Abu Ghraib" (2004)</li>
              <li>• Karen Greenberg, "The Torture Debate in America" (2005)</li>
              <li>• Philippe Sands, "Torture Team: Rumsfeld's Memo and the Betrayal of American Values" (2008)</li>
              <li>• Mohamedou Ould Slahi, "Guantanamo Diary" (2015)</li>
              <li>• James Mitchell, "Enhanced Interrogation: Inside the Minds and Motives of the Islamic Terrorists" (2016)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-3">Legal Documents & FOIA Materials</h3>
            <ul className="space-y-1 text-stone-600 text-xs">
              <li>• ACLU FOIA documents on CIA Rendition, Detention and Interrogation Program</li>
              <li>• Yoo-Bybee "Torture Memos" (August 1, 2002)</li>
              <li>• Bradbury memos authorizing combined techniques (May 2005)</li>
              <li>• Presidential Policy Directive 28 on electronic surveillance (January 2014)</li>
              <li>• Detainee Treatment Act of 2005 (McCain Amendment)</li>
              <li>• Military Commissions Act of 2006 and 2009</li>
              <li>• Executive Order 13491: Ensuring Lawful Interrogations (Obama, 2009)</li>
              <li>• Guantanamo detainee files released by WikiLeaks (2011)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-stone-100 rounded-lg">
          <h3 className="font-bold text-stone-800 mb-2">🔍 Still Classified</h3>
          <p className="text-sm text-stone-700">
            The full Senate Torture Report contains <strong>6,700 pages</strong> — only 525 pages (executive summary)
            have been released. The classified version contains detailed accounts of specific torture sessions, victim
            identities, black site locations, and the roles of foreign governments. Congress has the full report but
            the public may never see it. The CIA has also destroyed or classified thousands of photos from Abu Ghraib
            and other detention sites.
          </p>
        </div>
      </section>

      {/* Related Analysis */}
      <div className="mt-12 pt-8 border-t">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { slug: 'shadow-wars', title: 'Shadow Wars', desc: 'Secret wars, black sites, and operations in 134+ countries.' },
            { slug: 'surveillance-state', title: 'The Surveillance State', desc: 'NSA mass surveillance and the death of privacy.' },
            { slug: 'congressional-authority', title: '19 Wars Without Congress', desc: 'How presidents stole the war power from Congress.' },
          ].map(a => (
            <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">{a.title}</h3>
              <p className="text-sm text-muted">{a.desc}</p>
            </Link>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { slug: 'lies-that-started-wars', title: 'Lies That Started Wars', desc: 'WMDs in Iraq, Gulf of Tonkin, and other fabrications.' },
            { slug: 'cost-per-life', title: 'Cost Per Life', desc: 'What America spends to kill each person in each war.' },
            { slug: 'private-armies', title: 'Private Armies', desc: 'Mercenaries and contractors in the War on Terror.' },
          ].map(a => (
            <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">{a.title}</h3>
              <p className="text-sm text-muted">{a.desc}</p>
            </Link>
          ))}
        </div>

        <div className="p-4 bg-stone-100 rounded-lg">
          <h3 className="font-bold text-stone-800 mb-2">🌍 Explore Specific Conflicts</h3>
          <p className="text-sm text-stone-700 mb-3">
            For detailed analysis of torture&apos;s role in specific conflicts and ongoing costs:
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link href="/conflicts/afghanistan" className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">Afghanistan</Link>
            <Link href="/conflicts/iraq" className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">Iraq</Link>
            <Link href="/conflicts/guantanamo" className="px-2 py-1 bg-orange-100 text-orange-700 rounded hover:bg-orange-200">Guantanamo Bay</Link>
            <Link href="/analysis/pentagon-climate" className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200">Pentagon Climate Impact</Link>
            <Link href="/analysis/israel-lobby" className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Israel Lobby</Link>
            <Link href="/analysis/sanctions-warfare" className="px-2 py-1 bg-purple-100 text-purple-700 rounded hover:bg-purple-200">Sanctions Warfare</Link>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
