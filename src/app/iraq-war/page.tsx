import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'
import { IraqWarCharts } from './charts'

export const metadata: Metadata = {
  title: 'Iraq War Cost — $3 Trillion, 4,500 US Dead, 200K+ Iraqi Civilians | WarCosts',
  description: 'The Iraq War (2003-2011) cost over $3 trillion, killed 4,500 Americans and over 200,000 Iraqi civilians. Built on WMD lies, it destabilized the Middle East and gave rise to ISIS. Full timeline, cost breakdown, and casualty data.',
  keywords: ['Iraq war cost', 'Iraq war casualties', 'cost of Iraq war', 'Iraq war deaths', 'Iraq war timeline', 'weapons of mass destruction', 'Iraq war WMD', 'Iraq civilian casualties'],
  openGraph: {
    title: 'The Iraq War — $3 Trillion, 200K+ Dead, Zero WMDs',
    description: 'The most catastrophic foreign policy blunder in modern American history. Every dollar. Every death. Every lie.',
    url: 'https://warcosts.org/iraq-war',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'Total Cost', value: '$3+ Trillion' },
  { label: 'US Military Deaths', value: '4,599' },
  { label: 'US Wounded', value: '32,000+' },
  { label: 'Iraqi Civilian Dead', value: '200,000+' },
  { label: 'Refugees Created', value: '9.2 Million' },
  { label: 'WMDs Found', value: 'Zero' },
]

const costBreakdown = [
  { category: 'Direct War Spending', amount: 815, desc: 'Congressional appropriations 2003-2011' },
  { category: 'Veterans Healthcare (projected)', amount: 600, desc: 'Long-term care for 1.5M Iraq vets through 2050' },
  { category: 'Veterans Disability', amount: 400, desc: 'Disability compensation for 400K+ injured veterans' },
  { category: 'Interest on War Debt', amount: 700, desc: 'Wars were funded entirely by borrowing; interest compounds' },
  { category: 'Pentagon Base Budget Increase', amount: 300, desc: 'Permanent increases justified by Iraq War that never reversed' },
  { category: 'State Dept & Reconstruction', amount: 60, desc: 'Rebuilding the country we destroyed — with questionable results' },
  { category: 'Intelligence Surge', amount: 125, desc: 'Expanded CIA, DIA, NSA operations focused on Iraq' },
]

const yearlySpending = [
  { year: 2003, amount: 53 },
  { year: 2004, amount: 76 },
  { year: 2005, amount: 86 },
  { year: 2006, amount: 102 },
  { year: 2007, amount: 133 },
  { year: 2008, amount: 140 },
  { year: 2009, amount: 95 },
  { year: 2010, amount: 72 },
  { year: 2011, amount: 47 },
]

const casualties = [
  { year: 2003, us: 486, iraqi: 12000 },
  { year: 2004, us: 849, iraqi: 16000 },
  { year: 2005, us: 846, iraqi: 20000 },
  { year: 2006, us: 822, iraqi: 34000 },
  { year: 2007, us: 904, iraqi: 24000 },
  { year: 2008, us: 314, iraqi: 9000 },
  { year: 2009, us: 149, iraqi: 5000 },
  { year: 2010, us: 60, iraqi: 4000 },
  { year: 2011, us: 54, iraqi: 4000 },
]

const timeline = [
  { year: '2001', title: 'The Groundwork', desc: 'Within hours of 9/11, Defense Secretary Rumsfeld asks aides to look for links to Saddam Hussein. Deputy Secretary Wolfowitz pushes for Iraq invasion at Camp David meeting, despite zero evidence connecting Iraq to 9/11.' },
  { year: '2002', title: 'The Propaganda Campaign', desc: 'Bush administration launches systematic campaign to build case for war. "Smoking gun / mushroom cloud" rhetoric. CIA pressured to produce intelligence supporting WMD claims. UN inspectors find nothing. Bush gets congressional authorization for use of force (296-133 in House, 77-23 in Senate).' },
  { year: 'Feb 2003', title: 'Powell\'s UN Speech', desc: 'Secretary of State Colin Powell presents fabricated intelligence to the UN Security Council — mobile bioweapons labs, aluminum tubes, uranium from Niger. All later proven false. Powell later calls it a "blot" on his record.' },
  { year: 'Mar 2003', title: '"Shock and Awe"', desc: 'US invades Iraq on March 20 without UN authorization. Massive aerial bombardment of Baghdad. Coalition forces advance rapidly to Baghdad. Bush declares "Mission Accomplished" on May 1. The insurgency has barely begun.' },
  { year: '2003–04', title: 'Occupation and Insurgency', desc: 'CPA under Paul Bremer dissolves Iraqi army (400K soldiers), fires Ba\'ath party members (85K). These decisions create a massive armed, unemployed population with grievances. Looting of Baghdad. No WMDs found. Abu Ghraib torture scandal breaks.' },
  { year: '2004', title: 'Abu Ghraib & Fallujah', desc: 'Photos of US soldiers torturing Iraqi prisoners at Abu Ghraib shock the world. Two brutal battles of Fallujah. Marines level much of the city. Muqtada al-Sadr\'s militia uprising. The war that was supposed to take weeks is now a quagmire.' },
  { year: '2005–06', title: 'Sectarian Civil War', desc: 'Bombing of the Al-Askari mosque in Samarra triggers full-scale sectarian war between Sunni and Shia. Death squads roam Baghdad. 3,400 Iraqi civilians killed per month at peak. The US military is caught in the middle of a civil war it created.' },
  { year: '2007', title: 'The Surge', desc: 'Bush sends 30,000 additional troops. Violence decreases partly due to the surge, partly because sectarian cleansing has already separated communities, and partly because Sunni tribes are paid to stop fighting (Anbar Awakening). Cost: $33B for the surge alone.' },
  { year: '2008–11', title: 'Drawdown', desc: 'Obama elected partly on anti-war platform. Status of Forces Agreement signed with Iraq. Gradual withdrawal. Last US troops leave December 2011. They leave behind a fragile government, sectarian tensions, and 200,000+ dead Iraqis.' },
  { year: '2014', title: 'ISIS Rises', desc: 'The Islamic State — born from the remnants of al-Qaeda in Iraq, fueled by Sunni disenfranchisement, led by former Iraqi military officers fired by Bremer — conquers Mosul and declares a caliphate. The US returns to Iraq for airstrikes. The consequences of the invasion continue.' },
]

const noContracts = [
  { contractor: 'KBR (Halliburton)', amount: '$39.5B', desc: 'Logistics, base operations, oil field repairs. Halliburton\'s former CEO: Dick Cheney, the Vice President who championed the war.' },
  { contractor: 'DynCorp', amount: '$4.1B', desc: 'Police training, security. Multiple fraud allegations.' },
  { contractor: 'Blackwater (Academi)', amount: '$2.0B', desc: 'Private military. Nisour Square massacre (17 Iraqi civilians). Guards later pardoned by Trump.' },
  { contractor: 'Bechtel', amount: '$2.3B', desc: 'Infrastructure reconstruction. Most projects never completed or quickly deteriorated.' },
  { contractor: 'Parsons', amount: '$1.0B', desc: 'Construction of police stations, health clinics. Inspectors found most work substandard.' },
]

const faqs = [
  {
    q: 'How much did the Iraq War cost?',
    a: 'The Iraq War cost over $3 trillion when factoring in direct spending ($815B), veteran care ($1T+), interest on war debt ($700B+), and other costs. The direct congressional appropriations alone were $815 billion. Long-term costs including veteran healthcare through 2050 push the total well past $3 trillion.',
  },
  {
    q: 'How many people died in the Iraq War?',
    a: '4,599 US military personnel were killed and over 32,000 wounded. Iraqi civilian deaths are estimated between 200,000 and 300,000, with some estimates (including the Lancet study) suggesting much higher figures. An additional 9.2 million Iraqis were displaced from their homes.',
  },
  {
    q: 'Were weapons of mass destruction found in Iraq?',
    a: 'No. Despite being the primary justification for the invasion, no weapons of mass destruction were ever found in Iraq. The intelligence was either fabricated, cherry-picked, or based on unreliable sources like "Curveball," an Iraqi defector later proven to be a liar. The Senate Intelligence Committee concluded that the intelligence community\'s assessments were not supported by the evidence.',
  },
  {
    q: 'Did Iraq have anything to do with 9/11?',
    a: 'No. Iraq had no connection to the 9/11 attacks. The Bush administration repeatedly implied a connection between Saddam Hussein and al-Qaeda, but multiple investigations found no collaborative relationship. The 9/11 Commission explicitly stated there was no evidence of Iraqi involvement.',
  },
  {
    q: 'Did the Iraq War create ISIS?',
    a: 'Yes, directly. ISIS (the Islamic State) emerged from al-Qaeda in Iraq, which itself was formed in response to the US invasion. The disbanding of the Iraqi army put 400,000 armed, trained soldiers on the street. Many became insurgents and later ISIS leaders. Abu Bakr al-Baghdadi was radicalized in a US detention facility. Without the Iraq War, ISIS would not have existed.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function IraqWarPage() {
  const totalCost = costBreakdown.reduce((s, r) => s + r.amount, 0)

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Iraq War' }]} />
        <ShareButtons title="Iraq War — $3 Trillion, 4,500 US Dead, Zero WMDs" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Iraq War
          </h1>
          <p className="text-lg text-stone-500 mb-2">2003–2011 (consequences ongoing)</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            A war launched on <strong className="text-[#991b1b]">fabricated intelligence</strong>, sold with fear,
            and paid for with <strong className="text-[#991b1b]">$3 trillion</strong> and the lives of over{' '}
            <strong className="text-[#991b1b]">200,000 people</strong>. No WMDs were ever found.
          </p>
        </header>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {keyStats.map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl md:text-2xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* The Lie */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Built on a Lie
          </h2>
          <p className="text-stone-700 mb-4">
            The Iraq War was justified by two central claims: that Saddam Hussein possessed weapons of mass destruction,
            and that he had operational ties to al-Qaeda and the 9/11 attacks. <strong>Both were false.</strong>
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-2">
              &ldquo;We don&apos;t want the smoking gun to be a mushroom cloud.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— Condoleezza Rice, September 8, 2002</p>
          </div>
          <p className="text-stone-700 mb-4">
            The Bush administration systematically pressured intelligence agencies to produce evidence supporting
            predetermined conclusions. When the CIA&apos;s analysis wasn&apos;t alarming enough, the Pentagon created its own
            intelligence shop — the Office of Special Plans — to cherry-pick raw intelligence and feed it directly to
            policymakers and the press.
          </p>
          <p className="text-stone-700">
            Key claims — mobile bioweapons labs, aluminum tubes for centrifuges, uranium purchases from Niger —
            were all debunked before the invasion by experts within the intelligence community. Their objections were
            buried or overruled. Colin Powell&apos;s February 2003 UN presentation, which he later called a &ldquo;blot&rdquo;
            on his record, relied on sources the CIA had already flagged as unreliable.
          </p>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The $3 Trillion Price Tag
          </h2>
          <p className="text-stone-700 mb-6">
            Before the invasion, the Bush administration estimated the war would cost $50-60 billion.
            Economic advisor Lawrence Lindsey was fired for suggesting it might reach $200 billion.
            The actual cost: <strong>${totalCost}+ billion</strong> — over 50 times the original estimate.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">${r.amount}B</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-stone-400 font-bold">
                  <td className="py-2 text-stone-900">Total</td>
                  <td className="py-2 text-right font-mono text-[#991b1b]">${totalCost}B+</td>
                  <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">$3+ trillion and still growing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <IraqWarCharts.YearlySpending data={yearlySpending} />
        </section>

        {/* Casualties */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Human Cost
          </h2>
          <p className="text-stone-700 mb-4">
            The numbers tell only part of the story. Behind each statistic is a family destroyed, a community shattered,
            a life that will never be lived.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">American Losses</h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li><strong className="text-[#991b1b]">4,599</strong> US military killed</li>
                <li><strong className="text-[#991b1b]">32,000+</strong> US military wounded</li>
                <li><strong className="text-[#991b1b]">300,000+</strong> veterans with PTSD or TBI</li>
                <li><strong className="text-[#991b1b]">30,000+</strong> veteran suicides since 2003</li>
                <li><strong className="text-[#991b1b]">3,500+</strong> US contractor deaths</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">Iraqi Losses</h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li><strong className="text-[#991b1b]">200,000–300,000</strong> Iraqi civilians killed</li>
                <li><strong className="text-[#991b1b]">9.2 million</strong> Iraqis displaced</li>
                <li><strong className="text-[#991b1b]">4.7 million</strong> refugees fled the country</li>
                <li><strong className="text-[#991b1b]">2.8 million</strong> Iraqi children orphaned</li>
                <li><strong className="text-[#991b1b]">Destroyed</strong> infrastructure, healthcare, education</li>
              </ul>
            </div>
          </div>
          <IraqWarCharts.CasualtiesByYear data={casualties} />
          <p className="text-sm text-stone-500 mt-3">
            Iraqi civilian figures are conservative estimates. The Lancet study (2006) estimated 654,000 excess deaths;
            the ORB survey (2007) estimated over 1 million. Exact numbers may never be known.
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline of the Iraq War
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
            <div className="space-y-6">
              {timeline.map((event) => (
                <div key={event.year} className="relative pl-10">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#991b1b]" />
                  <div className="text-sm font-mono text-[#991b1b] mb-1">{event.year}</div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-1">{event.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Abu Ghraib */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Abu Ghraib: America&apos;s Shame
          </h2>
          <p className="text-stone-700 mb-4">
            In April 2004, photographs surfaced showing US soldiers torturing and humiliating Iraqi prisoners at
            Abu Ghraib prison. Detainees were stripped naked, stacked in human pyramids, attacked by dogs,
            and subjected to sexual abuse. Soldiers posed smiling next to the abuse.
          </p>
          <p className="text-stone-700 mb-4">
            The Bush administration framed it as the actions of &ldquo;a few bad apples.&rdquo; Investigations revealed
            that interrogation techniques approved at the highest levels — by Secretary Rumsfeld and the Justice Department&apos;s
            &ldquo;torture memos&rdquo; — had created the conditions for systematic abuse. Similar abuse was documented at
            Bagram Air Base in Afghanistan and at CIA &ldquo;black sites&rdquo; worldwide.
          </p>
          <p className="text-stone-700">
            Eleven low-ranking soldiers were convicted. No senior official was held accountable.
            The architects of the torture program — John Yoo, Jay Bybee, Alberto Gonzales — faced no consequences.
          </p>
        </section>

        {/* War Profiteering */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            No-Bid Contracts & War Profiteering
          </h2>
          <p className="text-stone-700 mb-6">
            The Iraq War was the most privatized war in American history. At peak, there were more private contractors
            in Iraq than US soldiers. The largest beneficiary: Halliburton/KBR, whose former CEO was Vice President Dick Cheney.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Contractor</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Value</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {noContracts.map((c) => (
                  <tr key={c.contractor} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{c.contractor}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">{c.amount}</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{c.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ISIS */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Iraq War Created ISIS
          </h2>
          <p className="text-stone-700 mb-4">
            The Islamic State was a direct consequence of the Iraq invasion. The causal chain is clear:
          </p>
          <ol className="list-decimal pl-6 text-stone-700 space-y-2 mb-4">
            <li>The US invasion destroyed Iraq&apos;s government and security forces</li>
            <li>Paul Bremer disbanded the Iraqi army, putting 400,000 armed men on the street</li>
            <li>De-Ba&apos;athification purged Sunnis from government, creating mass grievances</li>
            <li>Al-Qaeda in Iraq formed in response to the occupation (it didn&apos;t exist before)</li>
            <li>US detention facilities like Camp Bucca became radicalization factories</li>
            <li>Abu Bakr al-Baghdadi, the future ISIS leader, was radicalized at Camp Bucca</li>
            <li>Sectarian governance by the Maliki government alienated Sunni populations</li>
            <li>Former Iraqi military officers provided ISIS with its military expertise</li>
            <li>ISIS conquered Mosul in 2014, declared a caliphate, and terrorized the region</li>
          </ol>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-700 text-sm">
              The war launched to &ldquo;fight terrorism&rdquo; created the most brutal terrorist organization in modern history.
              The war to &ldquo;bring democracy&rdquo; destabilized the entire Middle East. The war to &ldquo;protect Americans&rdquo;
              created a generation of enemies.
            </p>
          </div>
        </section>

        {/* FAQ with JSON-LD */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
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
        </section>

        {/* Who Voted */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Who Voted for This War
          </h2>
          <p className="text-stone-700 mb-4">
            On October 11, 2002, Congress authorized the use of military force against Iraq. The vote:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">Senate: 77-23</h3>
              <p className="text-sm text-stone-600">
                Notable Yes votes: Hillary Clinton, Joe Biden, John Kerry, Chuck Schumer.
                Notable No votes: Bernie Sanders (House), Robert Byrd, Ted Kennedy, Russ Feingold.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">House: 296-133</h3>
              <p className="text-sm text-stone-600">
                81 House Democrats voted Yes. 6 House Republicans voted No.
                The Authorization for Use of Military Force (AUMF) remains technically active today.
              </p>
            </div>
          </div>
          <p className="text-stone-600 text-sm">
            Not a single senior government official has been held accountable for the false intelligence,
            the torture program, or the catastrophic decision to invade. No one was fired.
            No one was prosecuted. The architects were promoted, awarded medals, and hired by think tanks.
          </p>
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Related Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/afghanistan-war', label: 'Afghanistan War — The 20-Year Failure' },
              { href: '/cost-of-war', label: 'Total Cost of US Wars' },
              { href: '/analysis/war-on-terror', label: 'The War on Terror' },
              { href: '/analysis/war-profiteering', label: 'War Profiteering' },
              { href: '/civilian-casualties', label: 'Civilian Casualties' },
              { href: '/veterans', label: 'Veterans — The Aftermath' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-stone-50 hover:bg-stone-100 rounded-lg p-3 border border-stone-200 text-stone-700 hover:text-[#991b1b] transition-colors text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>Costs of War Project, Watson Institute, Brown University</li>
            <li>Congressional Research Service — The Cost of Iraq, Afghanistan, and Other Global War on Terror Operations Since 9/11</li>
            <li>Iraq Body Count (IBC) Project</li>
            <li>The Lancet — Mortality after the 2003 invasion of Iraq (2006)</li>
            <li>Senate Select Committee on Intelligence — Report on Pre-War Intelligence</li>
            <li>Special Inspector General for Iraq Reconstruction (SIGIR) Final Report</li>
            <li>Department of Defense — Casualty Statistics</li>
          </ul>
        </section>

        <BackToTop />
      </div>
    </main>
  )
}
