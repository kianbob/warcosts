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
    votes: 'House: 420-1 (Barbara Lee dissented). Senate: 98-0. Total debate time: ~3 hours. No amendments allowed.',
    cost: 'Total cost of operations under 2001 AUMF: $8+ trillion (2001-2024, Costs of War Project)',
  },
  {
    name: 'Section 1202 Authority',
    passed: '2018 NDAA',
    text: 'Authorizes DOD to provide support to "foreign forces, irregular forces, groups, or individuals" engaged in operations supporting US special operations.',
    scope: 'Creates a legal framework for the US to support proxy forces and paramilitaries worldwide with minimal congressional notification.',
    uses: 'Classified. The exact operations conducted under Section 1202 are not publicly known. Reporting requirements to Congress are minimal — 15-day notification, classified briefing.',
    votes: 'Passed as part of larger defense bill with minimal debate. Most members unaware of Section 1202\'s implications.',
    cost: 'Budget allocation classified. Estimated $3-5 billion annually (Stephanie Savell, Brown University)',
  },
  {
    name: 'Article II Commander-in-Chief Authority',
    passed: 'Constitutional',
    text: 'Presidents claim inherent constitutional authority to deploy military forces for short-term operations, self-defense, and protection of US nationals.',
    scope: 'Essentially unlimited as interpreted by modern presidents. Used to justify everything from Libya bombing to Syria strikes to Iranian general assassinations.',
    uses: 'Every president since Truman has used Article II authority to conduct military operations without congressional authorization. The War Powers Resolution (1973) was supposed to check this — it has been ignored by every president since.',
    votes: 'Constitutional provision. War Powers Resolution passed in 1973 over Nixon\'s veto.',
    cost: 'Impossible to calculate — encompasses most military operations since 1950',
  },
  {
    name: 'Title 50 Covert Action Authority',
    passed: 'National Security Act of 1947, amended',
    text: 'Authorizes the CIA to conduct covert actions abroad as directed by the president through a signed "finding."',
    scope: 'CIA operations are classified by definition. Oversight is limited to the "Gang of Eight" — the top 4 leaders of each chamber and the chairs/ranking members of the intelligence committees.',
    uses: 'CIA paramilitary operations, drone strikes (pre-2013), arming insurgent groups, regime change operations. By definition, the US government denies these activities exist.',
    votes: 'Original National Security Act passed 253-136 in House, 47-36 in Senate. Amendments classified.',
    cost: 'CIA budget classified. Total intelligence community: $98.2 billion (FY2023)',
  },
  {
    name: 'Section 1208 Authority',
    passed: '2005 NDAA',
    text: 'Authorizes SOCOM to provide support to "foreign forces, irregular forces, or groups or individuals" supporting US counterterrorism operations.',
    scope: 'Predecessor to Section 1202. Allows US special forces to arm, train, and support foreign paramilitaries and militias.',
    uses: 'Used to support Kurdish peshmerga in Iraq, Syrian Democratic Forces, various African militias, Colombian paramilitaries, and other proxy forces.',
    votes: 'Passed as part of defense authorization with minimal congressional awareness or debate.',
    cost: '$1.2 billion annually at peak (2015-2018). Funding through OCO and classified accounts.',
  },
  {
    name: 'War Powers Resolution of 1973',
    passed: 'November 7, 1973',
    text: 'Requires the President to notify Congress within 48 hours of committing armed forces and withdraw them within 60 days unless Congress authorizes continued use.',
    scope: 'Intended to reassert congressional war powers after Vietnam. Has been systematically ignored by every president since passage.',
    uses: 'Presidents claim it\'s unconstitutional. Have consistently refused to comply with notification or withdrawal requirements. Military operations routinely exceed 60-day limit without congressional authorization.',
    votes: 'House: 284-135, Senate: 75-18. Passed over Nixon\'s veto.',
    cost: 'Compliance cost: $0. No president has ever fully complied with the resolution.',
  },
]

const droneStrikesByCountry = [
  {
    country: 'Pakistan',
    period: '2004-2018',
    strikes: '431 strikes',
    killed: '4,024-10,076 people',
    civilians: '424-969 civilians',
    children: '172-207 children',
    peakYear: '2010: 128 strikes under Obama',
    legalBasis: '2001 AUMF (Al-Qaeda), CIA Title 50 authority',
    notes: 'Stopped after Pakistan formally objected in 2018. Operated from Shamsi Airbase until 2011.',
  },
  {
    country: 'Yemen',
    period: '2002-2024',
    strikes: '400+ strikes',
    killed: '1,500-2,400 people',
    civilians: '200-400+ civilians',
    children: '50+ children',
    peakYear: '2017: 130 strikes under Trump',
    legalBasis: '2001 AUMF (AQAP), self-defense against Houthis',
    notes: 'Ongoing. Strikes increased 300% under Trump. Al-Awlaki family killed here.',
  },
  {
    country: 'Somalia',
    period: '2007-2024',
    strikes: '280+ strikes',
    killed: '1,200-1,750 people',
    civilians: '50-100+ civilians',
    children: '10+ children',
    peakYear: '2020: 54 strikes under Trump',
    legalBasis: '2001 AUMF (Al-Shabaab allegedly tied to AQ)',
    notes: 'Longest-running drone campaign. "Areas of active hostilities" designation removes civilian protections.',
  },
  {
    country: 'Libya',
    period: '2011-2020',
    strikes: '600+ strikes',
    killed: '600-1,000 people',
    civilians: '50-100+ civilians',
    children: '15+ children',
    peakYear: '2016: 496 strikes under Obama',
    legalBasis: 'Initially humanitarian intervention, later counter-ISIS',
    notes: 'Massive escalation after Gaddafi\'s fall. Country remains in chaos.',
  },
  {
    country: 'Syria',
    period: '2014-2024',
    strikes: '17,000+ strikes',
    killed: '15,000+ ISIS fighters',
    civilians: '1,600+ civilians (Airwars)',
    children: '300+ children',
    peakYear: '2017: 12,192 strikes under Trump',
    legalBasis: 'Collective self-defense of Iraq (disputed)',
    notes: 'No congressional authorization. US troops remain illegally under international law.',
  },
  {
    country: 'Iraq',
    period: '2014-2024',
    strikes: '16,000+ strikes',
    killed: '20,000+ ISIS fighters',
    civilians: '1,200+ civilians',
    children: '250+ children',
    peakYear: '2017: 7,968 strikes',
    legalBasis: '2001 AUMF (ISIS), Iraqi government invitation',
    notes: 'Resumed bombing after 2011 withdrawal. Mosul campaign devastated city.',
  },
]

const soccomEvolution = [
  {
    year: '1980',
    personnel: '11,200',
    budget: '$441M',
    countries: '10-15',
    event: 'SOCOM doesn\'t exist yet. Operation Eagle Claw (Iran hostage rescue) fails catastrophically, spurring special operations reform.',
  },
  {
    year: '1987',
    personnel: '25,000',
    budget: '$1.2B',
    countries: '20-25',
    event: 'SOCOM established by Congress after Goldwater-Nichols Act. Centralizes special operations under single command.',
  },
  {
    year: '2001',
    personnel: '37,000',
    budget: '$3.1B',
    countries: '30-40',
    event: 'September 11 attacks. SOCOM begins rapid expansion. 2001 AUMF provides legal framework for global operations.',
  },
  {
    year: '2008',
    personnel: '54,000',
    budget: '$6.9B',
    countries: '75-85',
    event: 'McChrystal transforms JSOC into "industrial counterterrorism killing machine." Peak Iraq surge operations.',
  },
  {
    year: '2012',
    personnel: '66,000',
    budget: '$10.4B',
    countries: '100-110',
    event: 'Obama\'s "light footprint" warfare. Drone strikes peak. Kill list formalized. Libya intervention.',
  },
  {
    year: '2016',
    personnel: '69,700',
    budget: '$11.9B',
    countries: '120-130',
    event: 'Counter-ISIS campaign at peak. SOCOM operates on every continent except Antarctica.',
  },
  {
    year: '2020',
    personnel: '72,000',
    budget: '$13.6B',
    countries: '134+',
    event: 'Trump removes civilian casualty restrictions. SOCOM budget exceeds State Department entire budget.',
  },
  {
    year: '2024',
    personnel: '70,000+',
    budget: '$13.1B',
    countries: '134+',
    event: 'Biden continues expansion despite Afghanistan withdrawal. New focus on "great power competition" with China and Russia.',
  },
]

const covertOperationsHistory = [
  {
    operation: 'Operation Cyclone',
    period: '1979-1989',
    country: 'Afghanistan/Pakistan',
    cost: '$3.2 billion (largest CIA operation in history)',
    description: 'CIA arms and trains mujahideen to fight Soviet occupation. Creates networks that later become Taliban and Al-Qaeda.',
    outcome: 'Soviet withdrawal, but Afghanistan remains in chaos. Many US weapons end up with anti-American fighters.',
    blowback: 'Osama bin Laden and much of Al-Qaeda leadership trained and equipped by CIA. 9/11 attacks partially result of this operation.',
  },
  {
    operation: 'Operation Phoenix',
    period: '1967-1971',
    country: 'South Vietnam',
    cost: '$1+ billion',
    description: 'CIA program to identify and "neutralize" Viet Cong infrastructure through assassination, torture, and imprisonment.',
    outcome: '26,369 alleged Viet Cong killed, 33,358 captured. Many innocent civilians murdered. Did not prevent US defeat.',
    blowback: 'Torture techniques developed in Phoenix later used in Central America, Iraq, and Afghanistan.',
  },
  {
    operation: 'Iran-Contra',
    period: '1981-1987',
    country: 'Nicaragua/Iran',
    cost: '$47+ million illegally diverted',
    description: 'Reagan administration illegally sells weapons to Iran to fund Nicaraguan Contras after Congress banned aid.',
    outcome: 'Congressional hearings, multiple convictions (later pardoned). Nicaragua remains impoverished.',
    blowback: 'Constitutional crisis. Contras engaged in drug trafficking. Iranian weapons used against US forces.',
  },
  {
    operation: 'Bay of Pigs Invasion',
    period: '1961',
    country: 'Cuba',
    cost: '$46 million',
    description: 'CIA-trained Cuban exiles attempt to overthrow Castro government.',
    outcome: 'Complete failure. 118 killed, 1,202 captured. Castro consolidates power.',
    blowback: 'Pushes Cuba into Soviet sphere. Leads to Cuban Missile Crisis (1962). Failed assassination attempts on Castro.',
  },
  {
    operation: 'Operation Condor',
    period: '1975-1983',
    country: 'South America',
    cost: 'Unknown (classified)',
    description: 'US supports network of South American dictatorships conducting transnational assassinations and disappearances.',
    outcome: '60,000+ killed or disappeared. Democracy destroyed across the region.',
    blowback: 'Mass refugee flows to US. Drug cartels fill power vacuum. Anti-American sentiment throughout region.',
  },
  {
    operation: 'Timber Sycamore',
    period: '2012-2017',
    country: 'Syria',
    cost: '$1+ billion annually',
    description: 'CIA program to arm and train Syrian rebels to overthrow Assad government.',
    outcome: 'Program shut down after rebels fight each other and join jihadist groups. Assad remains in power.',
    blowback: 'US weapons end up with ISIS and Al-Qaeda affiliates. Prolonged Syrian civil war, massive refugee crisis.',
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
              <p className="text-sm text-stone-600 mb-2"><strong>Used for:</strong> {auth.uses}</p>
              {auth.votes && <p className="text-xs text-stone-500 mb-1"><strong>Congressional vote:</strong> {auth.votes}</p>}
              {auth.cost && <p className="text-xs text-stone-500"><strong>Cost:</strong> {auth.cost}</p>}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded-lg">
          <h3 className="font-bold text-amber-800 mb-2">💡 The Legal Absurdity</h3>
          <p className="text-sm text-stone-700">
            These six legal authorities allow the President to wage war anywhere on Earth, against any group,
            for any reason tangentially related to &ldquo;terrorism&rdquo; or &ldquo;national security.&rdquo;
            The 2001 AUMF — written for Al-Qaeda — is now used to bomb ISIS (formed 2013), Al-Shabaab (2006),
            and dozens of other groups that didn&apos;t exist on September 11. By this elastic logic, the
            60 words passed three days after 9/11 could theoretically authorize military action forever,
            against anyone, anywhere. See our full analysis: <Link href="/analysis/congressional-authority" className="text-red-700 underline">19 Wars Without Congress</Link>.
          </p>
        </div>
      </div>

      {/* SOCOM evolution */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">The Growth of America&apos;s Secret Army: 1980-2024</h2>
        <div className="space-y-3 mb-6">
          {soccomEvolution.map(year => (
            <div key={year.year} className="flex gap-4 items-start border-l-2 border-red-300 pl-4">
              <div className="shrink-0">
                <span className="text-lg font-bold text-red-700 font-[family-name:var(--font-heading)]">{year.year}</span>
                <div className="text-xs text-stone-500 mt-1">
                  <div>{year.personnel} personnel</div>
                  <div>{year.budget} budget</div>
                  <div>{year.countries} countries</div>
                </div>
              </div>
              <p className="text-sm text-stone-700">{year.event}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-stone-50 rounded-lg p-4">
          <div className="text-center">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">89%</p>
            <p className="text-xs text-stone-600">Personnel growth since 9/11</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">323%</p>
            <p className="text-xs text-stone-600">Budget growth since 9/11</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">335%</p>
            <p className="text-xs text-stone-600">Country presence growth</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">100%</p>
            <p className="text-xs text-stone-600">Of presidents who expanded this</p>
          </div>
        </div>
      </div>

      {/* Drone strikes by country */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Death From Above: Drone Strikes by Country</h2>
        <div className="space-y-4">
          {droneStrikesByCountry.map(strike => (
            <div key={strike.country} className="border border-stone-700 rounded-lg p-4">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-bold text-xl text-red-400">{strike.country}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-stone-700 text-stone-300">{strike.period}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                <div>
                  <p className="text-stone-400 text-xs">Total Strikes</p>
                  <p className="font-bold text-white">{strike.strikes}</p>
                </div>
                <div>
                  <p className="text-stone-400 text-xs">People Killed</p>
                  <p className="font-bold text-red-400">{strike.killed}</p>
                </div>
                <div>
                  <p className="text-stone-400 text-xs">Civilians</p>
                  <p className="font-bold text-yellow-400">{strike.civilians}</p>
                </div>
                <div>
                  <p className="text-stone-400 text-xs">Children</p>
                  <p className="font-bold text-orange-400">{strike.children}</p>
                </div>
              </div>
              <p className="text-sm text-stone-300 mb-2"><strong>Peak year:</strong> {strike.peakYear}</p>
              <p className="text-sm text-stone-300 mb-2"><strong>Legal basis:</strong> {strike.legalBasis}</p>
              <p className="text-xs text-stone-400 italic">{strike.notes}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-stone-800 rounded-lg">
          <h3 className="font-bold text-red-400 mb-2">The Human Cost</h3>
          <p className="text-sm text-stone-300">
            Total confirmed minimum: <strong>47,000+ people killed</strong> in drone and air strikes since 2001. 
            Conservative estimates of civilian casualties: <strong>7,500+ civilians killed</strong>, including 
            <strong>1,800+ children</strong>. These numbers are likely vast underestimates due to classification,
            remote locations, and the US government&apos;s practice of counting all military-age males as combatants.
            For detailed cost analysis, see: <Link href="/analysis/cost-per-life" className="text-red-400 underline">Cost Per Life</Link>.
          </p>
        </div>
      </div>

      {/* Covert operations history */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">CIA Covert Operations: A History of Blowback</h2>
        <p className="text-stone-700 mb-6">
          The CIA has conducted thousands of covert operations since 1947. Most remain classified. Here are six
          major operations that illustrate a consistent pattern: short-term tactical gains that create long-term
          strategic disasters. The common thread: actions taken in secret, without democratic oversight, that
          ultimately harm American security and global stability.
        </p>
        <div className="space-y-6">
          {covertOperationsHistory.map(op => (
            <div key={op.operation} className="border rounded-lg p-5 bg-stone-50">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-bold text-lg text-stone-900">{op.operation}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700">{op.period}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-stone-200 text-stone-600">{op.country}</span>
              </div>
              <div className="mb-3">
                <p className="text-sm font-semibold text-red-700">Cost: {op.cost}</p>
              </div>
              <p className="text-sm text-stone-700 mb-2"><strong>Operation:</strong> {op.description}</p>
              <p className="text-sm text-stone-700 mb-2"><strong>Outcome:</strong> {op.outcome}</p>
              <p className="text-sm text-stone-600"><strong>Blowback:</strong> {op.blowback}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded-lg">
          <h3 className="font-bold text-red-800 mb-2">The Pattern: Covert Action Creates More Enemies</h3>
          <p className="text-sm text-stone-700">
            Every major CIA covert operation since 1947 has followed the same trajectory: initial success,
            unintended consequences, and eventual blowback that harms US security. The 9/11 attacks were
            largely the result of Operation Cyclone — the CIA&apos;s arming of mujahideen in Afghanistan.
            ISIS emerged from the chaos of the Iraq War. The refugee crisis in Europe stems partly from
            US interventions in Libya and Syria. Secret operations inevitably produce public disasters.
            Related analysis: <Link href="/analysis/lies-that-started-wars" className="text-red-700 underline">Lies That Started Wars</Link>.
          </p>
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
        <p className="text-stone-700 mb-4">
          As one senior Obama administration official told the Post: <em>&ldquo;We can&apos;t possibly kill
          everyone who wants to harm us... but we&apos;ve built an infrastructure to keep killing them for
          the foreseeable future.&rdquo;</em> The phrase &ldquo;for the foreseeable future&rdquo; is the
          quiet part said loud — this system is designed to operate forever.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 bg-stone-50 rounded-lg p-4">
          <div className="text-center">
            <p className="text-lg font-bold text-red-700 font-[family-name:var(--font-heading)]">40,000+</p>
            <p className="text-xs text-stone-600">Names in disposition matrix (est. 2016)</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-red-700 font-[family-name:var(--font-heading)]">18</p>
            <p className="text-xs text-stone-600">Intelligence agencies contributing</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-red-700 font-[family-name:var(--font-heading)]">7,500+</p>
            <p className="text-xs text-stone-600">People killed from matrix (est.)</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-red-700 font-[family-name:var(--font-heading)]">24/7/365</p>
            <p className="text-xs text-stone-600">Operating hours</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-red-700 font-[family-name:var(--font-heading)]">∞</p>
            <p className="text-xs text-stone-600">Planned end date</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-red-700 font-[family-name:var(--font-heading)]">0</p>
            <p className="text-xs text-stone-600">Congressional oversight</p>
          </div>
        </div>
      </div>

      {/* Congressional oversight failure */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">Congressional Oversight: Missing in Action</h2>
        <p className="text-stone-700 mb-4">
          The Constitution gives Congress the power to declare war, raise armies, and regulate military spending.
          In practice, Congress has abdicated all three responsibilities when it comes to shadow wars. The
          result: the world&apos;s most powerful military operates with virtually no legislative oversight.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border">
            <h3 className="font-bold text-red-700 mb-2">What Congress Doesn&apos;t Know</h3>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• JSOC&apos;s classified budget and operations</li>
              <li>• CIA paramilitary activities worldwide</li>
              <li>• Drone strike target selection and approval</li>
              <li>• Special operations casualty figures</li>
              <li>• Partner force activities and civilian casualties</li>
              <li>• Section 1202 and 1208 program details</li>
              <li>• Intelligence sharing with foreign militaries</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <h3 className="font-bold text-red-700 mb-2">What Congress Pretends Not to Know</h3>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• US troops fighting in Syria, Somalia, Niger</li>
              <li>• Proxy wars in Yemen, Libya, multiple African countries</li>
              <li>• Support for Saudi coalition bombing Yemen</li>
              <li>• Training foreign forces that commit atrocities</li>
              <li>• Arms sales to regimes that sponsor terrorism</li>
              <li>• Intelligence operations leading to civilian deaths</li>
              <li>• War crimes by US partners using American weapons</li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-4 mb-4">
          <h3 className="font-bold text-red-400 mb-2">The Gang of Eight: Oversight Theater</h3>
          <p className="text-sm text-stone-300 mb-3">
            The most sensitive intelligence operations are reported only to the &ldquo;Gang of Eight&rdquo; —
            the Speaker and Minority Leader of the House, the Majority and Minority Leaders of the Senate,
            and the chairs and ranking members of the intelligence committees. In practice, this creates
            a system where eight members of Congress know what the other 527 don&apos;t.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div>
              <p className="text-red-400 font-semibold">House Leadership</p>
              <p>Speaker, Minority Leader</p>
            </div>
            <div>
              <p className="text-red-400 font-semibold">Senate Leadership</p>
              <p>Majority, Minority Leaders</p>
            </div>
            <div>
              <p className="text-red-400 font-semibold">House Intel</p>
              <p>Chair, Ranking Member</p>
            </div>
            <div>
              <p className="text-red-400 font-semibold">Senate Intel</p>
              <p>Chair, Ranking Member</p>
            </div>
          </div>
          <p className="text-xs text-stone-400 mt-3">
            Gang of Eight members cannot discuss classified briefings with staff, colleagues, or the public.
            They cannot take notes. They cannot consult lawyers. They can only listen — and they cannot
            stop operations they object to.
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 border">
          <h3 className="font-bold text-red-700 mb-2">Case Study: Senator Lindsey Graham&apos;s Niger Moment</h3>
          <p className="text-sm text-stone-700 mb-2">
            On October 21, 2017, Senator Lindsey Graham — a member of the Armed Services Committee for 15 years —
            appeared on Meet the Press after the Niger ambush that killed four US soldiers. Host Chuck Todd
            asked if he knew there were US troops in Niger.
          </p>
          <div className="bg-stone-50 rounded p-3 text-sm italic text-stone-700 mb-2">
            <p><strong>Graham:</strong> &ldquo;I didn&apos;t know there was 1,000 troops in Niger.&rdquo;</p>
            <p><strong>Todd:</strong> &ldquo;You sit on the Armed Services Committee. How is it that you don&apos;t know?&rdquo;</p>
            <p><strong>Graham:</strong> &ldquo;They&apos;re doing a lot of things I don&apos;t know about.&rdquo;</p>
          </div>
          <p className="text-sm text-stone-700">
            Graham&apos;s admission crystallized the problem: even senior members of relevant committees don&apos;t
            know where American soldiers are fighting and dying. If Congress doesn&apos;t know, how can the
            American people? And if the people don&apos;t know, how is this a democracy?
          </p>
        </div>
      </div>

      {/* Military-industrial complex and shadow wars */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">The Shadow War Economy: Who Profits From Secret Operations</h2>
        <p className="text-stone-300 mb-4">
          Shadow wars are big business. The companies that build the drones, satellites, and specialized
          equipment for covert operations have strong incentives to keep the machinery of secret warfare
          running. Unlike conventional wars that generate public opposition, shadow wars can continue
          indefinitely with minimal political cost — a contractor&apos;s dream scenario.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-stone-800 rounded-lg p-4">
            <h3 className="font-bold text-red-400 mb-3">Top Shadow War Contractors</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>General Atomics (Predator/Reaper drones)</span>
                <span className="text-green-400">$2.8B/year</span>
              </div>
              <div className="flex justify-between">
                <span>Lockheed Martin (satellites, missiles)</span>
                <span className="text-green-400">$65.4B total</span>
              </div>
              <div className="flex justify-between">
                <span>Boeing (surveillance aircraft)</span>
                <span className="text-green-400">$26.9B defense</span>
              </div>
              <div className="flex justify-between">
                <span>Raytheon (precision missiles)</span>
                <span className="text-green-400">$29.2B total</span>
              </div>
              <div className="flex justify-between">
                <span>Northrop Grumman (Global Hawk)</span>
                <span className="text-green-400">$39.6B total</span>
              </div>
            </div>
          </div>
          <div className="bg-stone-800 rounded-lg p-4">
            <h3 className="font-bold text-red-400 mb-3">Private Military Contractors</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>DynCorp (training, logistics)</span>
                <span className="text-green-400">$3.1B/year</span>
              </div>
              <div className="flex justify-between">
                <span>CACI (interrogation, intelligence)</span>
                <span className="text-green-400">$1.8B/year</span>
              </div>
              <div className="flex justify-between">
                <span>Booz Allen Hamilton (cyber, intel)</span>
                <span className="text-green-400">$4.1B gov&apos;t</span>
              </div>
              <div className="flex justify-between">
                <span>MPRI/L3Harris (training)</span>
                <span className="text-green-400">$18.2B total</span>
              </div>
              <div className="flex justify-between">
                <span>Academi (Blackwater successor)</span>
                <span className="text-green-400">~$1B/year</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-stone-300 mb-4">
          The revolving door between the Pentagon, CIA, and defense contractors is particularly pronounced
          in the shadow war sector. Former SOCOM commanders routinely join drone manufacturers. Ex-CIA
          officials start consulting firms. NSA alumni found cybersecurity companies. The people who plan
          secret wars profit from them after leaving government.
        </p>

        <div className="bg-red-900 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-red-200 mb-2">The Hellfire Missile Economy</h3>
          <p className="text-sm text-stone-300 mb-2">
            Each Hellfire missile costs approximately <strong>$115,000</strong>. The US has fired an estimated
            <strong>14,000+ Hellfire missiles</strong> in targeted killings since 2001 — roughly <strong>$1.6
            billion</strong> in missiles alone, not counting the drones, satellites, bases, personnel, and
            intelligence apparatus required to deliver them.
          </p>
          <p className="text-sm text-stone-300">
            Lockheed Martin, which makes Hellfire missiles, earned approximately <strong>$184 million annually</strong>
            from drone-launched missile sales at the peak of the targeted killing program (2010-2016). Each
            &ldquo;precision strike&rdquo; represents a $115,000 purchase order. From an accountant&apos;s
            perspective, peace is bad for business.
          </p>
        </div>

        <p className="text-stone-300">
          Related reading: <Link href="/analysis/private-armies" className="text-red-400 underline">Private Armies</Link> examines the role of contractors in modern warfare, while <Link href="/analysis/silicon-valley-pentagon" className="text-red-400 underline">Silicon Valley and the Pentagon</Link> explores how tech companies profit from surveillance and cyber warfare.
        </p>
      </div>

      {/* International law violations */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Violating International Law: America&apos;s Legal Exceptionalism</h2>
        <p className="text-stone-700 mb-4">
          Under international law, military force on another nation&apos;s territory is legal only in three
          circumstances: (1) with that nation&apos;s consent, (2) in collective self-defense under Article 51
          of the UN Charter, or (3) with UN Security Council authorization. Most US shadow wars violate all three.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-red-300 rounded-lg p-4">
            <h3 className="font-bold text-red-700 mb-2">Legal Operations (Per Int&apos;l Law)</h3>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• <strong>Iraq (2014-):</strong> Iraqi government invitation</li>
              <li>• <strong>Afghanistan (2001-2021):</strong> UN authorization post-9/11</li>
              <li>• <strong>Djibouti:</strong> Base agreements, government consent</li>
            </ul>
          </div>
          <div className="border border-red-300 rounded-lg p-4">
            <h3 className="font-bold text-red-700 mb-2">Illegal Operations (Per Int&apos;l Law)</h3>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• <strong>Syria (2014-):</strong> No government consent, dubious self-defense claim</li>
              <li>• <strong>Pakistan (2004-2018):</strong> Covert strikes without formal consent</li>
              <li>• <strong>Yemen:</strong> Limited government consent, massive civilian casualties</li>
              <li>• <strong>Somalia:</strong> Weak government, elastic self-defense justification</li>
              <li>• <strong>Libya (2011, 2014-2020):</strong> Exceeded UN mandate, no government</li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-stone-900 mb-2">The &ldquo;Unwilling or Unable&rdquo; Doctrine</h3>
          <p className="text-sm text-stone-700 mb-2">
            To justify strikes in countries like Pakistan and Yemen, the US invokes the &ldquo;unwilling or
            unable&rdquo; doctrine — claiming the right to use force in a state that is &ldquo;unwilling or
            unable&rdquo; to prevent terrorist attacks from its territory. Problem: this doctrine doesn&apos;t
            exist in international law.
          </p>
          <p className="text-sm text-stone-700">
            The doctrine is purely a US invention, rejected by most international legal scholars and never
            endorsed by the UN or International Court of Justice. It essentially claims the US can bomb any
            country if it decides that country isn&apos;t doing enough to stop terrorism — a recipe for
            permanent global war.
          </p>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-4">
          <h3 className="font-bold text-red-400 mb-2">War Crimes and Shadow Operations</h3>
          <p className="text-sm text-stone-300 mb-2">
            Several aspects of shadow wars may constitute war crimes under the Geneva Conventions and Rome Statute:
          </p>
          <ul className="text-sm text-stone-300 space-y-1">
            <li>• <strong>Targeting civilians:</strong> Signature strikes on unknown individuals</li>
            <li>• <strong>Excessive force:</strong> Hellfire missiles against unconfirmed combatants</li>
            <li>• <strong>Medical facilities:</strong> Kunduz hospital (2015), multiple Yemen facilities</li>
            <li>• <strong>Schools and mosques:</strong> Regular targets in Pakistan, Afghanistan, Somalia</li>
            <li>• <strong>Weddings and funerals:</strong> At least 12 wedding parties bombed since 2001</li>
            <li>• <strong>Double-tap strikes:</strong> Follow-up strikes targeting rescuers</li>
          </ul>
          <p className="text-xs text-stone-400 mt-3">
            The US is not a party to the International Criminal Court, so American officials enjoy effective
            immunity from war crimes prosecution. This legal impunity enables the continuation of operations
            that would be prosecuted if conducted by smaller nations.
          </p>
        </div>
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
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources & Further Reading</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-sm mb-2">Books & Investigations</h3>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• Jeremy Scahill, <em>Dirty Wars: The World Is a Battlefield</em> (2013)</li>
              <li>• Nick Turse, <em>Tomorrow&apos;s Battlefield: US Proxy Wars and Secret Ops in Africa</em> (2015)</li>
              <li>• Dana Priest & William Arkin, <em>Top Secret America</em> (2011)</li>
              <li>• Mark Mazzetti, <em>The Way of the Knife: The CIA, a Secret Army, and a War at the Ends of the Earth</em> (2013)</li>
              <li>• Daniel Klaidman, <em>Kill or Capture: The War on Terror and the Soul of the Obama Presidency</em> (2012)</li>
              <li>• Charlie Savage, <em>Power Wars: Inside Obama&apos;s Post-9/11 Presidency</em> (2015)</li>
              <li>• Steve Coll, <em>Directorate S: The C.I.A. and America&apos;s Secret Wars in Afghanistan and Pakistan</em> (2018)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm mb-2">Government & Academic Sources</h3>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• Brown University Costs of War Project, &ldquo;US Counterterrorism Operations 2018–2020&rdquo;</li>
              <li>• Congressional Research Service, &ldquo;US Special Operations Forces&rdquo; (2023)</li>
              <li>• DOD Africa Command (AFRICOM) posture statements and testimony (2020-2024)</li>
              <li>• Pentagon investigation into Tongo Tongo ambush (Army AR 15-6, 2018)</li>
              <li>• Senate Armed Services Committee hearings on SOCOM budget and operations</li>
              <li>• Stephanie Savell, &ldquo;The Costs of United States Post-9/11 &apos;Security Assistance&apos;&rdquo; (Brown University, 2023)</li>
              <li>• Watson Institute for International and Public Affairs, &ldquo;Summary of Findings&rdquo; (2021)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-sm mb-2">Journalism & Reporting</h3>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• New York Times, &ldquo;Secret &apos;Kill List&apos; Proves a Test of Obama&apos;s Principles and Will&rdquo; (May 29, 2012)</li>
              <li>• Washington Post, &ldquo;Plan for Hunting Terrorists Signals US Intends to Keep Adding Names to Kill Lists&rdquo; (Oct 23, 2012)</li>
              <li>• Bureau of Investigative Journalism, comprehensive drone strike databases</li>
              <li>• Airwars civilian casualty monitoring project</li>
              <li>• The Intercept, &ldquo;The Drone Papers&rdquo; series (2015)</li>
              <li>• ProPublica investigations into special operations and civilian casualties</li>
              <li>• Associated Press, &ldquo;American Hostage&rdquo; investigation into CIA torture program</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-2">Legal & Policy Analysis</h3>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• Columbia Law School Human Rights Clinic, &ldquo;The Civilian Impact of Drones&rdquo; (2017)</li>
              <li>• Stanford/NYU Law Schools, &ldquo;Living Under Drones&rdquo; (2012)</li>
              <li>• American Civil Liberties Union, &ldquo;A License to Kill&rdquo; legal analysis (2020)</li>
              <li>• International Committee of the Red Cross, &ldquo;Direct Participation in Hostilities&rdquo; (2009)</li>
              <li>• UN Special Rapporteur reports on extrajudicial executions (Alston, Heyns, Callamard)</li>
              <li>• Council on Foreign Relations, &ldquo;Reforming U.S. Drone Strike Policies&rdquo; (2018)</li>
              <li>• Cato Institute, &ldquo;Drone Wars&rdquo; policy analysis series</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded-lg">
          <h3 className="font-bold text-amber-800 mb-2">💡 Want Real-Time Data?</h3>
          <p className="text-sm text-stone-700">
            For live tracking of US military operations and costs, visit our <Link href="/analysis/iran-cost-per-second" className="text-red-700 underline">Iran Cost Per Second</Link> page.
            Historical analysis of war authorizations is available at <Link href="/analysis/congressional-authority" className="text-red-700 underline">19 Wars Without Congress</Link>.
            Specific conflict data can be found on our <Link href="/conflicts" className="text-red-700 underline">Conflicts database</Link>.
          </p>
        </div>
      </div>

      {/* Related */}
      <div className="mt-12 pt-8 border-t">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { slug: 'surveillance-state', title: 'The Surveillance State', desc: 'NSA, mass surveillance, and the death of privacy after 9/11.' },
            { slug: 'torture-program', title: 'Torture Program', desc: 'Enhanced interrogation, black sites, and systematic torture.' },
            { slug: 'congressional-authority', title: '19 Wars Without Congress', desc: 'How presidents stole the war power the Constitution gave to Congress.' },
          ].map(a => (
            <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">{a.title}</h3>
              <p className="text-sm text-muted">{a.desc}</p>
            </Link>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { slug: 'private-armies', title: 'Private Armies', desc: 'Mercenaries, contractors, and the privatization of war.' },
            { slug: 'sanctions-warfare', title: 'Sanctions Warfare', desc: 'Economic weapons that kill more than bombs.' },
            { slug: 'cost-per-life', title: 'Cost Per Life', desc: 'What America spends to kill each person in each war.' },
          ].map(a => (
            <Link key={a.slug} href={`/analysis/${a.slug}`} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-1">{a.title}</h3>
              <p className="text-sm text-muted">{a.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-6 p-4 bg-stone-100 rounded-lg">
          <h3 className="font-bold text-stone-800 mb-2">🌍 Explore Specific Conflicts</h3>
          <p className="text-sm text-stone-700 mb-3">
            For detailed analysis of current conflicts, cost tracking, and historical context:
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link href="/conflicts/afghanistan" className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">Afghanistan</Link>
            <Link href="/conflicts/iraq" className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">Iraq</Link>
            <Link href="/conflicts/syria" className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">Syria</Link>
            <Link href="/conflicts/yemen" className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">Yemen</Link>
            <Link href="/conflicts/somalia" className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">Somalia</Link>
            <Link href="/conflicts/libya" className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">Libya</Link>
            <Link href="/analysis/iran-day-by-day" className="px-2 py-1 bg-orange-100 text-orange-700 rounded hover:bg-orange-200">Iran Timeline</Link>
            <Link href="/analysis/ukraine-proxy" className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Ukraine Proxy War</Link>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
