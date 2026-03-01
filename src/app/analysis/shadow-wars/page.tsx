import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'Shadow Wars — America\'s Secret Wars in 134+ Countries',
  description: 'JSOC operates in 134+ countries. 70,000 special operators. Classified budgets. Kill lists. Signature strikes. Secret wars the Founders never authorized.',
  openGraph: {
    title: 'Shadow Wars — America\'s Secret Wars in 134+ Countries',
    description: 'The US fights wars in over 100 countries with no congressional vote, no public debate, and no accountability.',
    url: 'https://www.warcosts.org/analysis/shadow-wars',
  },
}

const shadowWarCountries = [
  {
    region: 'Africa',
    countries: 'Somalia, Niger, Mali, Libya, Tunisia, Cameroon, Chad, Nigeria, Kenya, Djibouti, Uganda, Central African Republic, South Sudan, Burkina Faso, Mauritania',
    operations: '~6,000 special operators across the continent. Camp Lemonnier (Djibouti): $600M base, 4,000+ personnel. Drone bases in Niger ($110M), Somalia, Kenya.',
    incidents: 'Tongo Tongo ambush (Niger, Oct 4, 2017): 4 Green Berets killed in a country most Americans didn\'t know had US troops. Took 48 hours for military to recover Sgt. La David Johnson\'s body. Investigation revealed mission had been unauthorized at the level conducted.',
    note: 'AFRICOM conducted 36 named operations in Africa in 2020 alone. Most received zero media coverage.',
  },
  {
    region: 'Middle East',
    countries: 'Syria, Iraq, Yemen, Lebanon, Jordan, Saudi Arabia (training), UAE, Bahrain, Qatar, Oman, Kuwait',
    operations: 'Ongoing counterterrorism operations in Syria and Iraq. Support for Saudi-led coalition in Yemen (until 2022). Special operations raids. Drone strikes.',
    incidents: 'US forces remain in Syria with ~900 troops — no congressional authorization, no AUMF applicability, no clear legal basis. In Iraq, ~2,500 troops remain under "advise and assist" mission.',
    note: 'The 2001 AUMF, which authorized force against those responsible for 9/11, has been stretched to justify operations against groups that didn\'t exist in 2001, in countries that had nothing to do with 9/11.',
  },
  {
    region: 'Southeast Asia / Pacific',
    countries: 'Philippines, Indonesia, Thailand, Malaysia, Australia, Japan, South Korea, Singapore',
    operations: 'Operation Pacific Eagle (Philippines) — 300+ special operators assisting Philippine forces against Abu Sayyaf and ISIS-affiliated groups. Joint training across region.',
    incidents: 'Battle of Marawi (Philippines, 2017): US special forces and surveillance aircraft supported Philippine military in 5-month siege. US role minimally reported.',
    note: 'The "Pacific pivot" has expanded special operations presence across the Indo-Pacific, often under "training" and "advisory" authorities that avoid congressional oversight.',
  },
  {
    region: 'Central/South America',
    countries: 'Colombia, Honduras, El Salvador, Guatemala, Peru, Mexico (limited)',
    operations: 'Counter-narcotics operations. Training and advisory missions. Intelligence sharing. Joint Task Force Bravo (Honduras): 500+ US personnel.',
    incidents: 'DEA agents directly participated in firefights in Honduras. US-trained special forces units in Colombia and Honduras linked to human rights abuses.',
    note: 'Much of this activity occurs under Title 10 (military) and Title 50 (intelligence) authorities that have minimal reporting requirements.',
  },
]

const legalAuthorities = [
  {
    name: '2001 AUMF (Authorization for Use of Military Force)',
    passed: 'September 14, 2001',
    text: '"The President is authorized to use all necessary and appropriate force against those nations, organizations, or persons he determines planned, authorized, committed, or aided the terrorist attacks that occurred on September 11, 2001."',
    scope: '60 words. Intended to authorize force against Al-Qaeda and the Taliban. Has been stretched to justify operations in 22+ countries against groups that didn\'t exist on 9/11.',
    uses: 'Used to justify operations against ISIS (founded 2013), Al-Shabaab (Somalia), AQAP (Yemen), ISIS-K (Afghanistan), and dozens of other groups with tenuous or no connection to 9/11.',
  },
  {
    name: 'Section 1202 Authority',
    passed: '2018 NDAA',
    text: 'Authorizes DOD to provide support to "foreign forces, irregular forces, groups, or individuals" engaged in operations supporting US special operations.',
    scope: 'Creates a legal framework for the US to support proxy forces and paramilitaries worldwide with minimal congressional notification.',
    uses: 'Classified. The exact operations conducted under Section 1202 are not publicly known. Reporting requirements to Congress are minimal — 15-day notification, classified briefing.',
  },
  {
    name: 'Article II Commander-in-Chief Authority',
    passed: 'Constitutional',
    text: 'Presidents claim inherent constitutional authority to deploy military forces for short-term operations, self-defense, and protection of US nationals.',
    scope: 'Essentially unlimited as interpreted by modern presidents. Used to justify everything from Libya bombing to Syria strikes to Iranian general assassinations.',
    uses: 'Every president since Truman has used Article II authority to conduct military operations without congressional authorization. The War Powers Resolution (1973) was supposed to check this — it has been ignored by every president since.',
  },
  {
    name: 'Title 50 Covert Action Authority',
    passed: 'National Security Act of 1947, amended',
    text: 'Authorizes the CIA to conduct covert actions abroad as directed by the president through a signed "finding."',
    scope: 'CIA operations are classified by definition. Oversight is limited to the "Gang of Eight" — the top 4 leaders of each chamber and the chairs/ranking members of the intelligence committees.',
    uses: 'CIA paramilitary operations, drone strikes (pre-2013), arming insurgent groups, regime change operations. By definition, the US government denies these activities exist.',
  },
]

const killListTimeline = [
  { year: '2001', event: 'Bush authorizes CIA to kill or capture Al-Qaeda leaders. First "kill list" is informal — a deck of playing cards.' },
  { year: '2002', event: 'First drone strike outside Afghanistan: CIA Predator kills 6 people in Yemen, including a US citizen (Kamal Derwish). No judicial review.' },
  { year: '2009', event: 'Obama inherits the kill list and formalizes it. Develops the "disposition matrix" — a database of suspects with recommended actions (capture, kill, monitor).' },
  { year: '2010', event: 'ACLU sues to challenge the government\'s authority to kill US citizens without trial. Court dismisses the case, ruling the father of target Anwar al-Awlaki lacks standing.' },
  { year: '2011', event: 'September 30: CIA drone strike kills US citizen Anwar al-Awlaki in Yemen. No indictment, no trial, no due process. Two weeks later: a second strike kills his 16-year-old US citizen son, Abdulrahman. White House Press Secretary Robert Gibbs suggests the boy should have "had a more responsible father."' },
  { year: '2012', event: 'NY Times reveals Obama personally reviews the kill list every "Terror Tuesday" in the Oval Office. The president of the United States is choosing who lives and who dies based on intelligence briefings, with no judicial oversight.' },
  { year: '2013', event: 'DOJ "White Paper" leaked: claims the president can order the killing of a US citizen if an "informed, high-level official" determines the target poses an "imminent threat" — but redefines "imminent" to not require evidence of a specific planned attack.' },
  { year: '2017', event: 'Trump revokes Obama-era Presidential Policy Guidance requiring high-level approval for strikes. Authority delegated to field commanders. Drone strikes triple in Somalia.' },
  { year: '2020', event: 'January 3: US drone strike kills Iranian General Qasem Soleimani at Baghdad airport. No congressional notification. Brought the US to the brink of war with Iran.' },
  { year: '2021', event: 'August 29: US drone strike in Kabul kills Zemari Ahmadi, a humanitarian aid worker, and 9 family members including 7 children. Pentagon initially claims it was a "righteous strike" against ISIS-K. Investigation reveals the target was loading water containers, not explosives. No one punished.' },
]

export default function ShadowWarsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd title="Shadow Wars — America's Secret Wars in 134+ Countries" description="JSOC operates in 134+ countries with classified budgets, kill lists, and no congressional oversight. The Founders gave war power to Congress — presidents took it back." slug="shadow-wars" />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Shadow Wars' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          Shadow Wars
        </h1>
        <p className="text-xl text-stone-300 mb-4">America&apos;s Secret Wars in 134+ Countries</p>
        <p className="text-stone-400 text-lg">
          On October 4, 2017, four US soldiers were killed in an ambush in Niger. Most Americans — including
          senior members of Congress — didn&apos;t know the US had troops in Niger. Senator Lindsey Graham,
          a member of the Armed Services Committee, admitted: <em>&ldquo;I didn&apos;t know there was 1,000
          troops in Niger.&rdquo;</em> This is American warfare in the 21st century: fought in the shadows,
          in countries most citizens can&apos;t find on a map, under legal authorities most lawyers can&apos;t
          explain, funded by budgets that are literally classified. The Founders gave Congress the power to
          declare war. That power has been stolen.
        </p>
      </div>

      <ShareButtons title="Shadow Wars — America's Secret Wars" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '134+', label: 'Countries with US SOF', sub: '70% of the world\'s nations' },
          { val: '70,000+', label: 'Special Operators', sub: 'Largest SOF in world history' },
          { val: '$13.1B', label: 'SOCOM Budget (FY2023)', sub: 'Plus classified supplements' },
          { val: '22+', label: 'Countries Under 2001 AUMF', sub: 'From 60 words written for Al-Qaeda' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* What are shadow wars */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Are Shadow Wars?</h2>
        <p className="text-stone-700 mb-4">
          Shadow wars are military operations conducted with minimal public knowledge, congressional oversight,
          or media scrutiny. They include special operations raids, drone strikes, covert CIA paramilitary
          operations, &ldquo;training and advisory&rdquo; missions that involve combat, proxy warfare through
          local forces, and cyber operations. They are the default mode of American warfare in the 21st century.
        </p>
        <p className="text-stone-700 mb-4">
          The US Special Operations Command (SOCOM) has grown from 37,000 personnel on 9/11 to over
          <strong> 70,000 today</strong> — the largest special operations force in world history. Special
          operators deployed to <strong>134 countries</strong> in 2021, according to the Costs of War Project
          at Brown University — roughly 70% of the nations on Earth. In any given week, US special forces are
          conducting operations on every continent except Antarctica.
        </p>
        <p className="text-stone-700 mb-4">
          The appeal of shadow wars is obvious: they&apos;re politically cheap. No large troop deployments
          that generate public opposition. No body bags on the nightly news (usually). No congressional
          votes that force politicians to take a position. No declarations of war that trigger legal
          obligations. The president can wage war in dozens of countries simultaneously and most Americans
          will never know.
        </p>
        <p className="text-stone-700">
          That&apos;s exactly the problem. Democracy requires informed consent. The American public cannot
          consent to wars it doesn&apos;t know about, in countries it can&apos;t find on a map, against
          enemies it&apos;s never heard of, under legal authorities it doesn&apos;t understand. Shadow wars
          are, by design, wars without democratic accountability.
        </p>
      </div>

      {/* JSOC */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">JSOC: The President&apos;s Secret Army</h2>
        <p className="text-stone-300 mb-4">
          The Joint Special Operations Command (JSOC) is the most elite and secretive military command in
          the US armed forces. Its existence was classified until the 1990s. Its budget is still classified.
          Its operations are almost never acknowledged publicly.
        </p>
        <p className="text-stone-300 mb-4">
          JSOC commands the military&apos;s most elite units: <strong>Delta Force</strong> (1st Special Forces
          Operational Detachment-Delta, Army), <strong>DEVGRU</strong> (SEAL Team Six, Navy), the <strong>24th
          Special Tactics Squadron</strong> (Air Force), and the <strong>Intelligence Support Activity</strong>
          (ISA — a classified intelligence unit whose very name changes regularly to avoid detection).
        </p>
        <p className="text-stone-300 mb-4">
          Under the command of General Stanley McChrystal (2003–2008) and later Admiral William McRaven,
          JSOC was transformed from a hostage rescue force into a global <strong>manhunting machine</strong>.
          At its peak in Iraq, JSOC was conducting <strong>300 raids per month</strong> — ten per night —
          a pace of killing and capturing that was industrial in scale. McChrystal described the model as a
          &ldquo;network to fight a network.&rdquo;
        </p>
        <p className="text-stone-300 mb-4">
          JSOC reports directly to the Secretary of Defense and the President, bypassing normal military
          chains of command. This gives the White House a private military force that can conduct lethal
          operations worldwide with extraordinary speed and minimal bureaucratic friction — and minimal
          congressional oversight.
        </p>
        <p className="text-stone-300">
          As journalist Jeremy Scahill documented in <em>Dirty Wars</em>, JSOC operates under a &ldquo;find,
          fix, finish, exploit, analyze&rdquo; (F3EA) cycle that turns intelligence into killing at
          unprecedented speed. A target is identified, located, killed, the site is exploited for
          intelligence, and that intelligence generates new targets — an assembly line of death that
          operates 24/7/365 across multiple continents.
        </p>
      </div>

      {/* Geographic breakdown */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Where America Is Secretly Fighting</h2>
        <div className="space-y-6">
          {shadowWarCountries.map(region => (
            <div key={region.region} className="border rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">{region.region}</h3>
              <div className="bg-stone-50 rounded p-3 mb-3">
                <p className="text-[10px] text-stone-400 uppercase font-semibold">Countries</p>
                <p className="text-sm text-stone-700">{region.countries}</p>
              </div>
              <p className="text-sm text-stone-600 mb-2"><strong>Operations:</strong> {region.operations}</p>
              <p className="text-sm text-stone-600 mb-2"><strong>Key incidents:</strong> {region.incidents}</p>
              <p className="text-xs text-stone-500 italic">{region.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Somalia */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">Somalia: America&apos;s Longest Shadow War</h2>
        <p className="text-stone-700 mb-4">
          The US has been conducting strikes in Somalia continuously since <strong>2007</strong> — making it
          one of America&apos;s longest-running military campaigns. Most Americans have no idea.
        </p>
        <p className="text-stone-700 mb-4">
          Under the 2001 AUMF (written for the perpetrators of 9/11), the US wages war against Al-Shabaab —
          a group that didn&apos;t formally exist until 2006 and has no capability to attack the US homeland.
          The legal justification: Al-Shabaab has ties to Al-Qaeda. By this logic, the 60 words of the
          2001 AUMF authorize force against any group, anywhere, that has any association with any group
          that has any association with Al-Qaeda — potentially forever.
        </p>
        <p className="text-stone-700 mb-4">
          <strong>By the numbers:</strong> The US conducted approximately 280+ airstrikes in Somalia between
          2007 and 2024. Under Trump, who revoked Obama-era civilian protection rules and designated parts
          of Somalia as &ldquo;areas of active hostilities,&rdquo; strikes tripled. Biden initially paused
          strikes, then resumed them. At least 1,200–1,750 people have been killed.
        </p>
        <p className="text-stone-700">
          In May 2022, Biden reauthorized a persistent US military presence in Somalia after Trump had
          ordered troops withdrawn. Approximately 500 US special operators now rotate through the country.
          None of this was debated or voted on by Congress. No war was declared. The American public
          was barely informed.
        </p>
      </div>

      {/* The kill list */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Terror Tuesdays: The President&apos;s Kill List</h2>
        <p className="text-stone-700 mb-6">
          In 2012, the New York Times revealed that President Obama personally maintained a &ldquo;kill
          list&rdquo; — a roster of suspected terrorists designated for assassination by drone strike or
          special operations raid. Every Tuesday, in the Oval Office, the president reviewed the list with
          his national security team, studying the &ldquo;baseball cards&rdquo; (intelligence profiles) of
          each target and deciding who would live and who would die.
        </p>
        <div className="space-y-3">
          {killListTimeline.map(item => (
            <div key={item.year} className="flex gap-4 items-start">
              <span className="text-sm font-bold text-red-700 shrink-0 w-12">{item.year}</span>
              <p className="text-sm text-stone-600">{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Signature strikes */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Signature Strikes: Killing the Unknown</h2>
        <p className="text-stone-300 mb-4">
          Beyond the &ldquo;personality strikes&rdquo; that target named individuals, the US conducts
          <strong> &ldquo;signature strikes&rdquo;</strong> — attacks on people whose identity is unknown
          but whose <em>behavior</em> matches patterns associated with terrorism. A group of military-age
          men loading a truck. People exercising in a formation. Vehicles traveling in convoy near a border.
        </p>
        <p className="text-stone-300 mb-4">
          The most chilling aspect: under Obama-era counting rules, <strong>any military-age male killed
          in a strike zone was classified as a combatant unless posthumously proven otherwise</strong>.
          This means every man between roughly 15 and 65 killed in a signature strike was automatically
          counted as a militant — even though the government didn&apos;t know who he was when it killed him.
          The dead cannot prove their innocence.
        </p>
        <p className="text-stone-300 mb-4">
          This accounting trick dramatically understates civilian casualties. When the government reports
          that a strike killed &ldquo;12 militants and 0 civilians,&rdquo; what it often means is:
          &ldquo;We killed 12 people we can&apos;t identify, and since they were military-age males in
          a strike zone, we&apos;re calling them militants.&rdquo;
        </p>
        <p className="text-stone-300">
          The Bureau of Investigative Journalism, Airwars, and other independent monitors consistently
          find civilian casualty figures many times higher than official US numbers. A 2017 Columbia Law
          School study found the US government&apos;s civilian casualty count was likely <strong>underestimated
          by a factor of 4 to 12</strong>.
        </p>
      </div>

      {/* Legal authorities */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">The Legal Framework: How Secret Wars Are &ldquo;Authorized&rdquo;</h2>
        <div className="space-y-4">
          {legalAuthorities.map(auth => (
            <div key={auth.name} className="border rounded-lg p-4">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-bold text-lg">{auth.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">{auth.passed}</span>
              </div>
              <div className="bg-stone-900 text-stone-300 rounded p-3 mb-3 text-sm italic">
                {auth.text}
              </div>
              <p className="text-sm text-stone-600 mb-2"><strong>Scope:</strong> {auth.scope}</p>
              <p className="text-sm text-stone-600"><strong>Used for:</strong> {auth.uses}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Niger ambush */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2 text-amber-800">💡 Did You Know: The Tongo Tongo Ambush</h3>
        <p className="text-stone-700 mb-3">
          On October 4, 2017, a 12-man US Army Special Forces team (ODA 3212) was ambushed by an estimated
          50+ ISIS-affiliated fighters near the village of Tongo Tongo in southwestern Niger. Four American
          soldiers were killed: Staff Sgt. Bryan Black, Staff Sgt. Jeremiah Johnson, Staff Sgt. Dustin
          Wright, and Sgt. La David Johnson.
        </p>
        <p className="text-stone-700 mb-3">
          The ambush exposed what the American public didn&apos;t know: the US had approximately <strong>800
          troops in Niger</strong>, operating from a $110 million drone base (Air Base 201 near Agadez).
          Even members of the Senate Armed Services Committee were shocked.
        </p>
        <p className="text-stone-700 mb-3">
          The Pentagon investigation revealed systemic failures: the mission had exceeded its authorized
          scope, the team had inadequate training and equipment for the threat environment, intelligence
          was flawed, and the chain of command had approved a mission profile beyond what was sanctioned.
          It took 48 hours to recover Sgt. La David Johnson&apos;s body — French and Nigerien forces
          eventually found him.
        </p>
        <p className="text-stone-700">
          No senior officer was held accountable. The incident briefly made headlines, then disappeared.
          US operations in Africa continued and expanded. The pattern held: Americans fight and die in
          secret wars, the public finds out by accident, there&apos;s brief outrage, then nothing changes.
        </p>
      </div>

      {/* The disposition matrix */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Disposition Matrix: Industrialized Killing</h2>
        <p className="text-stone-700 mb-4">
          The &ldquo;disposition matrix,&rdquo; revealed by the Washington Post in 2012, is a database
          maintained by the National Counterterrorism Center (NCTC) that contains the names of suspected
          terrorists and the recommended method of &ldquo;disposition&rdquo; — capture, kill, or continued
          surveillance. It is, in essence, a permanent kill list designed to extend beyond any single
          presidential administration.
        </p>
        <p className="text-stone-700 mb-4">
          The matrix integrates intelligence from the CIA, NSA, JSOC, FBI, and foreign partner agencies.
          For each target, it includes biographical information, intelligence assessments, network analysis,
          and the recommended course of action. For &ldquo;kill&rdquo; recommendations, it includes the
          preferred method (drone strike, special operations raid, or partner force operation) and the
          assessed civilian casualty risk.
        </p>
        <p className="text-stone-700 mb-4">
          The disposition matrix was designed to be <strong>self-perpetuating</strong>. When a target is
          killed, the intelligence gathered from the strike (phone records, documents, digital media) is
          fed back into the system to generate new targets. Each killing produces new intelligence that
          identifies new targets that are added to the matrix — an ever-expanding cycle of targeted killing
          with no natural endpoint.
        </p>
        <p className="text-stone-700">
          As one senior Obama administration official told the Post: <em>&ldquo;We can&apos;t possibly kill
          everyone who wants to harm us... but we&apos;ve built an infrastructure to keep killing them for
          the foreseeable future.&rdquo;</em> The phrase &ldquo;for the foreseeable future&rdquo; is the
          quiet part said loud — this system is designed to operate forever.
        </p>
      </div>

      {/* Budget */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Black Budget: Money You Can&apos;t Track</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[
            { val: '$13.1B', label: 'SOCOM official budget (FY2023)' },
            { val: '$71.7B', label: 'National Intelligence Program (FY2023)' },
            { val: '$26.6B', label: 'Military Intelligence Program (FY2023)' },
            { val: '$886B', label: 'Total DOD budget (FY2024)' },
            { val: 'Classified', label: 'JSOC operational budget' },
            { val: 'Classified', label: 'CIA paramilitary budget' },
          ].map(s => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
              <p className="text-[10px] text-stone-500">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-700 mb-4">
          SOCOM&apos;s official budget of $13.1 billion (FY2023) does not include the cost of operations
          funded through other accounts — Overseas Contingency Operations (OCO), CIA paramilitary funds,
          classified intelligence programs, and host-nation support. The true cost of America&apos;s shadow
          wars is unknowable by design.
        </p>
        <p className="text-stone-700">
          The &ldquo;black budget&rdquo; — the combined classified budgets of all 18 intelligence agencies —
          was approximately $98 billion in FY2023. This money is appropriated by Congress but its
          allocation is known only to a handful of committee members. The public — whose taxes fund
          these operations — has no idea how the money is spent, or on what.
        </p>
      </div>

      {/* Libertarian analysis */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Libertarian Case: Secret Wars Are the Death of Democracy</h2>
        <p className="text-stone-300 mb-4">
          The Founders understood, with painful clarity born of experience, that the power to wage war is
          the most dangerous power a government can possess. That is why they gave it to Congress — the
          branch closest to the people, the branch that must face voters, the branch designed for deliberation
          and debate. James Madison wrote: <em>&ldquo;The Constitution supposes, what the History of all
          Governments demonstrates, that the Executive is the branch of power most interested in war, and
          most prone to it. It has accordingly with studied care vested the question of war in the Legislature.&rdquo;</em>
        </p>
        <p className="text-stone-300 mb-4">
          Today, the President of the United States can order the killing of any person on Earth — including
          American citizens — without a trial, without a warrant, without congressional authorization, and
          without public knowledge. Special operations forces wage war in 134+ countries under classified
          orders. The CIA conducts paramilitary operations that are officially denied. Drone strikes eliminate
          people whose identities are unknown based on behavioral patterns observed from 10,000 feet.
        </p>
        <p className="text-stone-300 mb-4">
          This is not what the Founders envisioned. It is the precise opposite. Secret wars concentrate
          the most lethal power in the hands of the executive — exactly what the Constitution was designed
          to prevent. A government that can kill in secret, with no accountability, is not a democracy.
          It is a tyranny with better PR.
        </p>
        <p className="text-stone-300 mb-4">
          The 2001 AUMF — 60 words drafted in the panic after 9/11 — has become the legal basis for a
          permanent global war. Congress has abdicated its most solemn responsibility. Presidents of both
          parties have eagerly seized the power Congress surrendered. And the American people, kept in the
          dark about where their troops are fighting and dying, cannot exercise the informed consent that
          democracy requires.
        </p>
        <p className="text-stone-300">
          The solution is straightforward: repeal the 2001 AUMF. Require congressional authorization for
          any military deployment longer than 30 days. Declassify SOCOM operations. Subject the &ldquo;kill
          list&rdquo; to judicial review. And remember what the Founders knew: that a government trusted
          with the power to wage secret wars will wage them forever, against ever-expanding lists of
          enemies, until the republic itself is consumed.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources</h2>
        <ul className="text-xs text-stone-600 space-y-1">
          <li>• Jeremy Scahill, <em>Dirty Wars: The World Is a Battlefield</em> (2013)</li>
          <li>• Nick Turse, <em>Tomorrow&apos;s Battlefield: US Proxy Wars and Secret Ops in Africa</em> (2015)</li>
          <li>• Brown University Costs of War Project, &ldquo;US Counterterrorism Operations 2018–2020&rdquo;</li>
          <li>• New York Times, &ldquo;Secret &apos;Kill List&apos; Proves a Test of Obama&apos;s Principles and Will&rdquo; (May 29, 2012)</li>
          <li>• Washington Post, &ldquo;Plan for Hunting Terrorists Signals US Intends to Keep Adding Names to Kill Lists&rdquo; (Oct 23, 2012)</li>
          <li>• DOD Africa Command (AFRICOM) posture statements and testimony</li>
          <li>• Congressional Research Service, &ldquo;US Special Operations Forces&rdquo; (2023)</li>
          <li>• Bureau of Investigative Journalism, drone strike databases</li>
          <li>• Pentagon investigation into Tongo Tongo ambush (2018)</li>
          <li>• Senate Armed Services Committee hearings on SOCOM (2020–2024)</li>
          <li>• Stephanie Savell, &ldquo;The Costs of United States Post-9/11 &apos;Security Assistance&apos;&rdquo; (Brown University, 2023)</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-12 pt-8 border-t">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { slug: 'drone-wars', title: 'Drone Wars', desc: '14,000+ strikes. Remote-control killing with no accountability.' },
            { slug: 'congressional-authority', title: '19 Wars Without Congress', desc: 'How presidents stole the war power the Constitution gave to Congress.' },
            { slug: 'forever-wars', title: 'The Forever Wars', desc: '60 words that authorized 25 years of global war across 78 countries.' },
          ].map(a => (
            <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">{a.title}</h3>
              <p className="text-sm text-muted">{a.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
