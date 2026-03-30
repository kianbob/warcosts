import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Military Family Impact — The Hidden Casualties of War | WarCosts',
  description: '17 veterans die by suicide per day. 22% military spouse unemployment. 450,000+ traumatic brain injuries. 33,000+ homeless veterans. The real cost of war comes home with the troops.',
  keywords: ['military families', 'veteran PTSD', 'military divorce rate', 'veteran suicide', 'military spouse unemployment', 'veteran homelessness', 'TBI veterans', 'military sexual assault', 'VA healthcare wait times', 'military children impact'],
  openGraph: {
    title: 'Military Family Impact — The Hidden Casualties of War',
    description: '17 veterans die by suicide per day. 22% spouse unemployment. 450K+ brain injuries. The war doesn\'t end when they come home.',
    url: 'https://warcosts.org/military-families-impact',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Military Family Impact — The Hidden Casualties',
    description: '17 veteran suicides per day. 22% spouse unemployment. 450K+ TBIs. The aftermath America ignores.',
  },
}

const statCards = [
  { value: '17/day', label: 'Veterans die by suicide', sublabel: '6,200+ per year — more than all post-9/11 combat deaths combined', color: 'bg-red-600' },
  { value: '57.3', label: 'Veteran suicide rate per 100K', sublabel: 'vs 16.1 per 100K for civilians — 3.5x higher', color: 'bg-red-700' },
  { value: '450,000+', label: 'Traumatic brain injuries since 2000', sublabel: 'The "signature wound" of Iraq & Afghanistan', color: 'bg-red-800' },
  { value: '20%', label: 'Post-9/11 veterans with PTSD', sublabel: '11–20% in any given year (VA National Center for PTSD)', color: 'bg-red-900' },
  { value: '22%', label: 'Military spouse unemployment', sublabel: 'vs ~3.5% national rate — 6x higher', color: 'bg-stone-800' },
  { value: '33,000+', label: 'Homeless veterans on any given night', sublabel: 'Veterans are 50% more likely to become homeless', color: 'bg-stone-900' },
  { value: '2M+', label: 'Children had a parent deployed', sublabel: '30% show anxiety symptoms, 2x behavioral issues vs civilian kids', color: 'bg-red-600' },
  { value: '1 in 4', label: 'Women in military report sexual assault', sublabel: 'DoD SAPRO data — and most cases go unreported', color: 'bg-red-700' },
  { value: '2x', label: 'Veteran accidental overdose death rate', sublabel: 'Self-medication for untreated PTSD, chronic pain', color: 'bg-red-800' },
  { value: '30+ days', label: 'Average VA healthcare wait', sublabel: 'In many regions — some veterans wait 90+ days', color: 'bg-stone-800' },
]

const comparisonData = [
  { category: 'Suicide Rate (per 100K)', military: '57.3', civilian: '16.1', ratio: '3.5x' },
  { category: 'Divorce Rate (annual)', military: '3.1%', civilian: '2.3%', ratio: '1.3x' },
  { category: 'Divorce After 3+ Deployments', military: '12%', civilian: '2.3%', ratio: '5.2x' },
  { category: 'PTSD Prevalence', military: '11–20%', civilian: '3.5%', ratio: '3–6x' },
  { category: 'Unemployment (spouses)', military: '22%', civilian: '3.5%', ratio: '6.3x' },
  { category: 'Homelessness Risk', military: '50% higher', civilian: 'Baseline', ratio: '1.5x' },
  { category: 'Child Anxiety/Depression', military: '30–32%', civilian: '15%', ratio: '2x' },
  { category: 'Child Behavioral Issues', military: '25%', civilian: '12%', ratio: '2.1x' },
  { category: 'Substance Abuse (overdose death)', military: '2x civilian rate', civilian: 'Baseline', ratio: '2x' },
  { category: 'Sexual Assault (women)', military: '25%', civilian: '~5%', ratio: '5x' },
]

const impactStories = [
  {
    title: 'The Deployment That Never Ended',
    story: 'When Sergeant First Class Marcus returned from his third deployment to Afghanistan, his wife Sarah said she barely recognized him. He couldn\'t sleep without the lights on, flinched at every loud noise, and stopped playing with their two kids. Sarah quit her job to become his full-time caretaker. They lost their home within a year. Marcus waited 47 days for his first VA mental health appointment.',
    stats: 'Marcus is one of 450,000+ TBI cases and one of millions waiting for VA care.',
  },
  {
    title: 'Military Spouse: Invisible Sacrifice',
    story: 'Jessica moved 8 times in 12 years of her husband\'s Army career. Each move meant starting over — new state license for her nursing credentials, new schools for the kids, new doctors, new friends. She was unemployed for 14 months total across moves. When her husband came back from Iraq with PTSD, the VA offered him treatment but nothing for her. "I\'m a casualty too," she says, "but I don\'t count."',
    stats: 'Military spouses face 22% unemployment. 6–9 moves per career. Zero VA benefits for themselves.',
  },
  {
    title: 'The Children Left Behind',
    story: 'Emma was 6 when her father deployed to Iraq. She was 7 when he came home in a flag-draped coffin. She was 8 when her mother started drinking. She was 12 when she was placed in foster care. By 16, she\'d been diagnosed with anxiety, depression, and PTSD — a condition she inherited not from war, but from its aftermath. There are 7,500 children like Emma from the post-9/11 wars alone.',
    stats: '7,500+ children lost a parent in post-9/11 wars. 2M+ had a parent deployed.',
  },
  {
    title: '22 Became 17 — But Even That\'s Wrong',
    story: 'The "22 a day" statistic became a rallying cry for veteran suicide awareness. The VA revised it to 17 per day in 2023. But even this number excludes veterans who didn\'t use VA services, those whose deaths weren\'t reported as suicide, and active-duty deaths. The real number may be higher. Every 82 minutes, a veteran takes their own life. The system that sent them to war cannot save them from its consequences.',
    stats: '17 per day (VA 2023). True number likely higher. 70% use firearms.',
  },
]

const aftermathCosts = [
  { category: 'VA Healthcare (projected 2001–2050)', amount: '$300B+', detail: 'Long-term care for PTSD, TBI, chronic conditions, burn pit illnesses' },
  { category: 'VA Disability Compensation', amount: '$150B+/year by 2030', detail: '5.6M veterans receive disability payments; PACT Act adds millions more' },
  { category: 'Veteran Homelessness Services', amount: '$7.4B', detail: 'HUD-VASH, SSVF, Grant and Per Diem — still not enough' },
  { category: 'Suicide Prevention Programs', amount: '$17B (2022–2032)', detail: 'VA spending on mental health and crisis services' },
  { category: 'Military Family Support Programs', amount: '$8.5B/year', detail: 'Childcare, spouse employment, relocation allowances' },
  { category: 'Lost Economic Productivity', amount: 'Incalculable', detail: 'Spouse unemployment, veteran disability, caregiver burden' },
  { category: 'PACT Act (burn pit claims)', amount: '$280B over 10 years', detail: '23 new presumptive conditions, millions newly eligible' },
  { category: 'Total Projected Aftermath Cost', amount: '$1T+', detail: 'Over the next 30 years — and this is a conservative estimate' },
]

export default function MilitaryFamiliesImpactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Military Family Impact — The Hidden Casualties of War',
        description: '17 veterans die by suicide per day. 22% military spouse unemployment. 450,000+ traumatic brain injuries. The real cost of war comes home.',
        url: 'https://warcosts.org/military-families-impact',
        publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
        datePublished: '2026-03-30',
        dateModified: '2026-03-30',
        mainEntityOfPage: 'https://warcosts.org/military-families-impact',
      }) }} />

      {/* Dark Hero */}
      <section className="bg-stone-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Veterans', href: '/veterans' },
            { label: 'Military Family Impact' },
          ]} />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold mt-6 mb-4">
            The Hidden Casualties<br />
            <span className="text-red-500">of American War</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 max-w-3xl mb-6">
            The bombs stop falling. The troops come home. But the war doesn&apos;t end — it moves into
            living rooms, marriages, childhoods, and VA waiting rooms. These are the casualties
            America doesn&apos;t count.
          </p>
          <p className="text-stone-500 text-sm">
            Sources: VA National Center for PTSD, DoD SAPRO, Brown University Costs of War Project, RAND Corporation, VA 2023 National Veteran Suicide Prevention Report
          </p>
        </div>
      </section>

      {/* Stat Cards Grid */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            By the Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {statCards.map((card, i) => (
              <div key={i} className={`${card.color} text-white rounded-xl p-5 flex flex-col`}>
                <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-1">{card.value}</div>
                <div className="text-sm font-semibold mb-2">{card.label}</div>
                <div className="text-xs text-white/70 mt-auto">{card.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table: Military vs Civilian */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            Military vs. Civilian: The Gap
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Serving in the military doesn&apos;t just risk your life in combat — it reshapes every aspect of life for service members and their families.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-stone-300">
                  <th className="py-3 px-4 text-stone-900 font-bold">Category</th>
                  <th className="py-3 px-4 text-red-700 font-bold">Military</th>
                  <th className="py-3 px-4 text-stone-600 font-bold">Civilian</th>
                  <th className="py-3 px-4 text-stone-900 font-bold">Ratio</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={`border-b border-stone-200 ${i % 2 === 0 ? 'bg-stone-50' : 'bg-white'}`}>
                    <td className="py-3 px-4 font-medium text-stone-900">{row.category}</td>
                    <td className="py-3 px-4 text-red-700 font-semibold">{row.military}</td>
                    <td className="py-3 px-4 text-stone-600">{row.civilian}</td>
                    <td className="py-3 px-4 font-bold text-red-600">{row.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deep Dives */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            The Human Cost: Impact Stories
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl text-sm italic">
            These composites are based on real patterns documented in VA, DoD, and academic studies. Names are fictional; the experiences are not.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {impactStories.map((story, i) => (
              <div key={i} className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-stone-900 mb-3">{story.title}</h3>
                <p className="text-stone-700 mb-4 leading-relaxed">{story.story}</p>
                <div className="bg-red-50 border-l-4 border-red-500 px-4 py-2 text-sm text-red-800">{story.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PTSD & TBI Deep Dive */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            PTSD & Traumatic Brain Injury
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-700 mb-4">PTSD by the Numbers</h3>
              <ul className="space-y-3 text-stone-700">
                <li className="flex gap-3"><span className="text-red-500 font-bold">→</span> <span><strong>20%</strong> of Iraq/Afghanistan veterans develop PTSD (VA data)</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">→</span> <span><strong>11–20%</strong> of post-9/11 veterans have PTSD in any given year</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">→</span> <span><strong>30%</strong> of Vietnam veterans experienced PTSD in their lifetime</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">→</span> <span>Only <strong>~50%</strong> of veterans with PTSD seek treatment</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">→</span> <span>Average time from symptoms to treatment: <strong>12+ years</strong></span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">→</span> <span>PTSD <strong>triples</strong> the risk of suicide</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-700 mb-4">TBI: The Signature Wound</h3>
              <ul className="space-y-3 text-stone-700">
                <li className="flex gap-3"><span className="text-red-500 font-bold">→</span> <span><strong>450,000+</strong> diagnosed TBIs since 2000</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">→</span> <span><strong>82%</strong> classified as "mild" — but "mild" TBI still causes lasting cognitive damage</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">→</span> <span>Linked to <strong>early-onset dementia</strong>, depression, impulsivity</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">→</span> <span>IED blasts cause unique <strong>"blast TBI"</strong> — different from sports concussions</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">→</span> <span><strong>30%</strong> of TBI patients also have PTSD — compounding effects</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">→</span> <span>Many go <strong>undiagnosed</strong> — troops return to duty after blast exposure</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Suicide Section */}
      <section className="bg-stone-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-3">
            Veteran Suicide: <span className="text-red-500">17 Per Day</span>
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl">
            Every 82 minutes, a veteran takes their own life. More veterans have died by suicide since 2001 than in all post-9/11 combat operations.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-stone-900 rounded-xl p-5 border border-stone-700">
              <div className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">57.3</div>
              <div className="text-sm text-stone-400">Veteran suicide rate per 100K</div>
              <div className="text-xs text-stone-600 mt-1">vs 16.1 civilian rate</div>
            </div>
            <div className="bg-stone-900 rounded-xl p-5 border border-stone-700">
              <div className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">70%</div>
              <div className="text-sm text-stone-400">Use firearms</div>
              <div className="text-xs text-stone-600 mt-1">Military familiarity + crisis = lethal</div>
            </div>
            <div className="bg-stone-900 rounded-xl p-5 border border-stone-700">
              <div className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">18–34</div>
              <div className="text-sm text-stone-400">Highest risk age group</div>
              <div className="text-xs text-stone-600 mt-1">2.5x the rate of same-age civilians</div>
            </div>
            <div className="bg-stone-900 rounded-xl p-5 border border-stone-700">
              <div className="text-3xl font-bold text-red-500 font-[family-name:var(--font-heading)]">166%</div>
              <div className="text-sm text-stone-400">Increase in women veteran suicide since 2001</div>
              <div className="text-xs text-stone-600 mt-1">Fastest growing group</div>
            </div>
          </div>
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-6">
            <p className="text-lg font-semibold mb-2">If you or someone you know is in crisis:</p>
            <p className="text-stone-300">
              <strong className="text-white">Veterans Crisis Line: 988 (press 1)</strong> · Text 838255 · Chat at <a href="https://www.veteranscrisisline.net" className="text-red-400 underline hover:text-red-300">VeteransCrisisLine.net</a>
            </p>
          </div>
        </div>
      </section>

      {/* Children Impact */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            The Smallest Casualties: Military Children
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Over 2 million American children have had a parent deployed to a war zone. They serve too — without choosing to.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-stone-100 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-red-600 font-[family-name:var(--font-heading)]">2M+</div>
              <div className="text-sm text-stone-700">Children had a parent deployed</div>
            </div>
            <div className="bg-stone-100 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-red-600 font-[family-name:var(--font-heading)]">30%</div>
              <div className="text-sm text-stone-700">Show anxiety symptoms</div>
            </div>
            <div className="bg-stone-100 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-red-600 font-[family-name:var(--font-heading)]">2x</div>
              <div className="text-sm text-stone-700">Behavioral issues vs civilian rate</div>
            </div>
            <div className="bg-stone-100 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-red-600 font-[family-name:var(--font-heading)]">7,500+</div>
              <div className="text-sm text-stone-700">Lost a parent in post-9/11 wars</div>
            </div>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-6">
            <h3 className="font-bold text-stone-900 mb-3">What Deployment Does to Children</h3>
            <ul className="space-y-2 text-stone-700">
              <li>• <strong>6–9 school changes</strong> during a parent&apos;s military career — each move disrupts friendships, academics, stability</li>
              <li>• Children of deployed parents are <strong>2x more likely</strong> to see a mental health counselor</li>
              <li>• <strong>Sleep disorders</strong> affect 30% of military children (vs 14% civilian)</li>
              <li>• When a parent returns with PTSD, children absorb the trauma — <strong>secondary traumatic stress</strong></li>
              <li>• Military kids report feeling &quot;invisible&quot; — their sacrifice is never acknowledged</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sexual Assault */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            Military Sexual Trauma
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            The enemy isn&apos;t always overseas. For many service members, the greatest threat wears the same uniform.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-stone-200 p-6">
              <div className="text-4xl font-bold text-red-600 font-[family-name:var(--font-heading)] mb-2">1 in 4</div>
              <div className="text-stone-900 font-semibold mb-2">Women report sexual assault</div>
              <div className="text-sm text-stone-600">DoD SAPRO annual report. Most experts believe true rates are higher due to underreporting.</div>
            </div>
            <div className="bg-white rounded-xl border border-stone-200 p-6">
              <div className="text-4xl font-bold text-red-600 font-[family-name:var(--font-heading)] mb-2">1 in 50</div>
              <div className="text-stone-900 font-semibold mb-2">Men report sexual assault</div>
              <div className="text-sm text-stone-600">Due to the larger number of men, male MST victims actually outnumber female victims in absolute terms.</div>
            </div>
            <div className="bg-white rounded-xl border border-stone-200 p-6">
              <div className="text-4xl font-bold text-red-600 font-[family-name:var(--font-heading)] mb-2">&lt;5%</div>
              <div className="text-stone-900 font-semibold mb-2">Cases result in conviction</div>
              <div className="text-sm text-stone-600">Victims who report face retaliation 62% of the time. The chain of command historically controlled prosecution.</div>
            </div>
          </div>
        </div>
      </section>

      {/* VA Wait Times & Homelessness */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-4">
                VA Healthcare: The Wait That Kills
              </h2>
              <ul className="space-y-3 text-stone-700">
                <li className="flex gap-3"><span className="text-red-500 font-bold text-xl">→</span> <span>Average wait: <strong>30+ days</strong> in many VA regions</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold text-xl">→</span> <span>Mental health appointments: <strong>36-day average wait</strong></span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold text-xl">→</span> <span>2014 Phoenix VA scandal: <strong>40+ veterans died</strong> waiting for care</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold text-xl">→</span> <span>Rural veterans drive <strong>2+ hours</strong> to reach a VA facility</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold text-xl">→</span> <span>Disability claims backlog: <strong>200,000+</strong> pending over 125 days</span></li>
              </ul>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-stone-900 mb-4">
                Veteran Homelessness
              </h2>
              <ul className="space-y-3 text-stone-700">
                <li className="flex gap-3"><span className="text-red-500 font-bold text-xl">→</span> <span><strong>33,000+</strong> homeless veterans on any given night</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold text-xl">→</span> <span>Veterans are <strong>50% more likely</strong> to become homeless than civilians</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold text-xl">→</span> <span><strong>37%</strong> of homeless veterans are Black (vs 13% of veteran population)</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold text-xl">→</span> <span>Women veterans: <strong>fastest growing</strong> homeless population</span></li>
                <li className="flex gap-3"><span className="text-red-500 font-bold text-xl">→</span> <span>PTSD + substance abuse + no family support = <strong>homelessness pipeline</strong></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of the Aftermath */}
      <section className="bg-stone-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-3">
            The Cost of the Aftermath: <span className="text-red-500">$1 Trillion+</span>
          </h2>
          <p className="text-stone-400 mb-8 max-w-3xl">
            The Pentagon budget covers the war. But the aftermath — healthcare, disability, homelessness, broken families — 
            that bill arrives for decades after the last shot is fired. And it&apos;s growing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aftermathCosts.map((cost, i) => (
              <div key={i} className="bg-stone-900 rounded-xl p-5 border border-stone-700">
                <div className="text-xl md:text-2xl font-bold text-red-500 font-[family-name:var(--font-heading)] mb-1">{cost.amount}</div>
                <div className="text-sm font-semibold text-white mb-2">{cost.category}</div>
                <div className="text-xs text-stone-500">{cost.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            The War Doesn&apos;t End When They Come Home
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto mb-8">
            Every war vote is a vote for decades of aftermath. Every deployment creates ripples through families, 
            communities, and generations. The true cost of war isn&apos;t measured in dollars — it&apos;s measured in 
            broken homes, lost childhoods, and empty chairs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/veteran-suicide" className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Veteran Suicide Data →
            </Link>
            <Link href="/military-families" className="px-6 py-3 bg-stone-800 text-white rounded-lg font-semibold hover:bg-stone-900 transition-colors">
              Military Family Data →
            </Link>
            <Link href="/veterans" className="px-6 py-3 bg-stone-800 text-white rounded-lg font-semibold hover:bg-stone-900 transition-colors">
              Veterans Overview →
            </Link>
            <Link href="/cost-of-war" className="px-6 py-3 bg-stone-800 text-white rounded-lg font-semibold hover:bg-stone-900 transition-colors">
              Total Cost of War →
            </Link>
          </div>
          <ShareButtons title="Military Family Impact — The Hidden Casualties of War" />
        </div>
      </section>

      <BackToTop />
    </>
  )
}
