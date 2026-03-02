import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { MSTChart, MSTPrevalenceChart, WomenInMilitaryChart, ConflictSexualViolenceTable } from './WomensWarCharts'

export const metadata: Metadata = {
  title: "Women's War: Sexual Violence, Military Assault & the Invisible Casualties",
  description: '20,000+ military sexual assaults annually. 50,000 women raped in Bosnia. Agent Orange birth defects spanning generations. War widows raising children alone. The war women fight on every front.',
  openGraph: {
    title: "Women's War: The Casualties Nobody Counts",
    description: '1 in 4 women in the military experience sexual trauma. Wartime rape as systematic weapon. Agent Orange birth defects. The invisible war.',
    url: 'https://www.warcosts.org/analysis/womens-war',
    type: 'article',
  },
}

const warWidowStats = [
  { war: 'World War II', widows: '~300,000', support: 'GI Bill benefits, pension', notes: 'Relatively well-supported due to national consensus' },
  { war: 'Korean War', widows: '~36,000', support: 'Survivor benefits', notes: 'The "Forgotten War" — families also forgotten' },
  { war: 'Vietnam War', widows: '~58,000', support: 'DIC, limited services', notes: 'Many also dealing with Agent Orange effects on children' },
  { war: 'Gulf War', widows: '~383', support: 'DIC, TRICARE', notes: 'Gulf War Syndrome affected children of veterans' },
  { war: 'Post-9/11 Wars', widows: '~7,000', support: 'DIC ($1,612/mo), TAPS', notes: 'Average widow age: 26. Most have children under 5.' },
]

const birthDefects = [
  { cause: 'Agent Orange (Vietnam)', affected: '150,000+ Vietnamese children', usVeterans: '~2,500 US veteran children', defects: 'Spina bifida, cleft palate, missing limbs, cognitive disabilities', timeline: '1962–present (3rd generation)' },
  { cause: 'Depleted Uranium (Iraq)', affected: '~14,000 in Fallujah alone', usVeterans: 'Unknown — DOD denies link', defects: 'Leukemia, heart defects, neural tube defects, 14x cancer rate in Fallujah', timeline: '1991–present' },
  { cause: 'Burn Pits (Post-9/11)', affected: 'Under study', usVeterans: '3.5M veterans exposed', defects: 'Elevated birth defect rates reported but not officially tracked', timeline: '2001–present' },
  { cause: 'Nuclear Testing (Marshall Islands)', affected: '~10,000 Marshallese', usVeterans: 'Thousands of "atomic veterans"', defects: '"Jellyfish babies" — boneless, translucent births. Thyroid cancer. Leukemia.', timeline: '1946–present' },
]

export default function WomensWarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: "Women's War" }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Women&apos;s War
        </h1>
        <p className="text-xl text-stone-300 mb-4">Sexual Violence, Military Assault &amp; the Invisible Casualties</p>
        <p className="text-stone-400 text-lg">
          In Bosnia, Serbian soldiers held women in &ldquo;rape camps&rdquo; — systematic, organized, 
          documented. At least 50,000 women were raped as a deliberate tool of ethnic cleansing. In the 
          Democratic Republic of Congo, armed groups have raped an estimated 200,000 women since 1998. 
          In Iraq, ISIS enslaved 7,000 Yazidi women. And in the United States military itself, 20,000+ 
          service members are sexually assaulted every year — by their own colleagues. One in four women 
          who serve report military sexual trauma. War doesn&apos;t just kill women. It uses them. It 
          breaks them. And then it forgets them.
        </p>
      </div>

      <ShareButtons title="Women's War: Sexual Violence, Military Assault & the Invisible Casualties" />

      {/* AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-red-400 mb-3">Key Findings</h2>
        <ul className="space-y-2 text-stone-300">
          <li>• <strong className="text-white">20,000+ military sexual assaults annually</strong> — DOD estimates only ~7,000 are reported. The military investigates itself.</li>
          <li>• <strong className="text-white">641,000+ women raped</strong> as a weapon of war in major conflicts since 1990 (conservative UN estimates)</li>
          <li>• <strong className="text-white">150,000+ Vietnamese children</strong> born with Agent Orange birth defects — US has never compensated them</li>
          <li>• <strong className="text-white">18.1% of the US military is female</strong> — but women are still fighting for equal treatment, safety, and recognition</li>
          <li>• <strong className="text-white">Average age of a post-9/11 war widow: 26</strong> — most have children under 5 and receive $1,612/month</li>
          <li>• <strong className="text-white">Depleted uranium in Fallujah</strong> caused a 14x increase in childhood cancer and birth defects rivaling Hiroshima</li>
        </ul>
      </div>

      {/* Section: Sexual Violence as Weapon */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          &ldquo;Rape Is Cheaper Than Bullets&rdquo;
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Sexual violence in war is not an unfortunate side effect. It is a weapon — deployed strategically, 
          systematically, and with devastating effectiveness. The UN Security Council didn&apos;t even recognize 
          wartime rape as a crime against humanity until 2008. For most of human history, it was considered a 
          soldier&apos;s &ldquo;spoils of war.&rdquo;
        </p>

        <ConflictSexualViolenceTable />

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Bosnia: The Rape Camps</h3>
          <p className="text-stone-700 mb-3">
            During the Bosnian War (1992-1995), Serbian forces operated organized rape camps where Muslim women 
            were held captive, repeatedly assaulted, and deliberately impregnated. The International Criminal 
            Tribunal for the former Yugoslavia (ICTY) estimated <strong>20,000–50,000 women</strong> were raped. 
            Many were held for months. Some were killed when they became pregnant. Others were forced to carry 
            children of their rapists to term — a form of ethnic cleansing through forced reproduction.
          </p>
          <p className="text-stone-700">
            The ICTY became the first international court to classify systematic wartime rape as a crime against 
            humanity. It took until 2001. The trauma continues today — thousands of &ldquo;children of war&rdquo; 
            in Bosnia live with the knowledge of how they were conceived.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Congo: The Rape Capital of the World</h3>
          <p className="text-stone-700 mb-3">
            The Democratic Republic of Congo has been called &ldquo;the rape capital of the world&rdquo; by the UN. 
            Since 1998, an estimated <strong>200,000 women and girls</strong> have been raped by armed groups — 
            militias, rebel forces, and the Congolese army itself. In the eastern provinces of North and South Kivu, 
            rape rates are <strong>48 women per hour</strong>.
          </p>
          <p className="text-stone-700">
            Sexual violence is used to terrorize communities, destroy social bonds, and control territory. Fistula — 
            a devastating internal injury caused by violent rape — affects tens of thousands. Many victims are children. 
            The youngest documented survivor was <strong>3 years old</strong>. The international community&apos;s 
            response has been largely limited to reports and resolutions.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Iraq &amp; ISIS: Slavery as Policy</h3>
          <p className="text-stone-700 mb-3">
            When ISIS captured northern Iraq in 2014, they enslaved an estimated <strong>7,000 Yazidi women and girls</strong>. 
            ISIS published theological justifications for slavery and rape. Women were bought and sold in markets. 
            Prices were posted online. Girls as young as 9 were sold as &ldquo;wives.&rdquo;
          </p>
          <p className="text-stone-700">
            Nadia Murad, a Yazidi survivor who won the Nobel Peace Prize, testified that she was raped repeatedly, 
            sold multiple times, and tortured for months. Thousands of Yazidi women remain missing. The Sinjar region 
            still holds mass graves containing women who were killed when they were no longer &ldquo;useful.&rdquo;
          </p>
        </div>
      </section>

      {/* Section: Military Sexual Assault */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Enemy Within: Military Sexual Assault
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          You don&apos;t have to go to a war zone to be assaulted. For thousands of women — and men — in the 
          US military, the threat comes from their own ranks. The Department of Defense estimates <strong>20,500 
          sexual assaults</strong> occur each year within the military. Fewer than 7,000 are reported. Of those, 
          fewer than 500 result in conviction. The system protects perpetrators.
        </p>

        <MSTChart />
        <MSTPrevalenceChart />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-950/10 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">The Reporting Problem</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• Only <strong>~35% of assaults are reported</strong> (DOD anonymous survey vs. filed reports)</li>
              <li>• <strong>62% of women who report</strong> face retaliation (DOD Inspector General)</li>
              <li>• Until 2022, unit commanders controlled prosecution — they could (and did) dismiss cases involving friends</li>
              <li>• <strong>Conviction rate: ~7%</strong> of reported cases result in conviction</li>
              <li>• The military justice system has no independent judiciary — judges are military officers</li>
            </ul>
          </div>
          <div className="bg-red-950/10 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 text-lg mb-2">The Aftermath</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• MST survivors are <strong>9x more likely</strong> to develop PTSD than other veterans</li>
              <li>• <strong>71% of women with MST</strong> also have depression (VA data)</li>
              <li>• MST survivors have <strong>2x the suicide rate</strong> of other veterans</li>
              <li>• Many receive less-than-honorable discharges — losing VA benefits — after reporting assault</li>
              <li>• <strong>24,000 service members</strong> were discharged with personality disorder diagnoses after reporting MST (2001-2010)</li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Senator Kirsten Gillibrand&apos;s Fight</h3>
          <p className="text-stone-300 mb-3">
            Senator Gillibrand introduced the Military Justice Improvement Act in 2013 to remove sexual assault 
            prosecution from the chain of command. The Pentagon fought it aggressively. Generals testified that 
            commanders needed to retain authority. The bill was blocked repeatedly.
          </p>
          <p className="text-stone-300">
            A watered-down version finally passed in 2021 — nearly a decade later. Even now, implementation has 
            been slow. The military&apos;s culture of silence, retaliation, and institutional self-protection 
            remains largely intact. In 2023, the DOD admitted that sexual assault rates had <strong>increased</strong> 
            since reforms began.
          </p>
        </div>
      </section>

      {/* Section: Women Soldiers */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          18% of the Force, 0% of the Recognition
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Women make up 18.1% of the US military — over 238,000 active duty service members. They serve as 
          fighter pilots, Special Operations enablers, combat medics, and intelligence officers. They&apos;ve 
          fought in every post-9/11 war. And yet the military didn&apos;t officially allow women in combat roles 
          until <strong>2015</strong> — even though women had been fighting, bleeding, and dying in combat for decades.
        </p>

        <WomenInMilitaryChart />

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Combat Exclusion Fiction</h3>
          <p className="text-stone-700 mb-3">
            The &ldquo;combat exclusion policy&rdquo; — which banned women from combat roles until 2015 — was always a fiction. 
            In Iraq and Afghanistan, there were no &ldquo;front lines.&rdquo; Women drove supply convoys through IED-laden roads. 
            They manned checkpoints. They conducted raids as part of Cultural Support Teams attached to Special Operations.
          </p>
          <p className="text-stone-700 mb-3">
            <strong>168 women died in Iraq and Afghanistan.</strong> Over 1,000 were wounded in action. Specialist 
            Monica Lin Brown received the Silver Star for shielding wounded soldiers with her body during a mortar attack 
            in Afghanistan. Sergeant Leigh Ann Hester became the first woman since WWII to receive the Silver Star for 
            direct combat action.
          </p>
          <p className="text-stone-700">
            Despite their service, women veterans face unique challenges: VA facilities that lack gynecological care, 
            PTSD screening tools designed for men, a culture that still doesn&apos;t believe women were &ldquo;really&rdquo; 
            in combat, and a public that asks &ldquo;Did you actually see combat?&rdquo; when they mention their service.
          </p>
        </div>
      </section>

      {/* Section: Birth Defects */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Poisoned Wombs: Agent Orange, Depleted Uranium &amp; the Next Generation
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          War doesn&apos;t just kill the people who fight it. It deforms their children. It poisons breast milk. 
          It writes itself into DNA. The chemicals America deploys in war zones come home in the bodies of veterans — 
          and emerge in the bodies of their children, born years or decades later.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Toxic Exposure</th>
                <th className="px-4 py-3 text-right">Affected Population</th>
                <th className="px-4 py-3 text-left">US Veterans</th>
                <th className="px-4 py-3 text-left">Birth Defects</th>
                <th className="px-4 py-3 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              {birthDefects.map((row) => (
                <tr key={row.cause} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.cause}</td>
                  <td className="px-4 py-3 text-right text-red-800 font-bold">{row.affected}</td>
                  <td className="px-4 py-3">{row.usVeterans}</td>
                  <td className="px-4 py-3 text-sm">{row.defects}</td>
                  <td className="px-4 py-3">{row.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Agent Orange: Three Generations and Counting</h3>
          <p className="text-stone-700 mb-3">
            Between 1962 and 1971, the US military sprayed <strong>20 million gallons</strong> of Agent Orange 
            over Vietnam. The herbicide contained dioxin — one of the most toxic substances known to science. 
            The Vietnamese government estimates <strong>3 million people</strong> have been affected, including 
            150,000 children born with birth defects.
          </p>
          <p className="text-stone-700 mb-3">
            The US government denied any link between Agent Orange and health effects for decades. It took until 
            1991 — twenty years — for Congress to pass the Agent Orange Act. Even then, coverage was limited. 
            Vietnamese victims have received <strong>nothing</strong> from the US government. A 2004 lawsuit was dismissed.
          </p>
          <p className="text-stone-700">
            The effects continue into the third generation. Grandchildren of Agent Orange victims in Vietnam are 
            being born with the same defects. This is what war does to women: it poisons their ability to create life. 
            And the country responsible refuses to pay for what it did.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Fallujah: Worse Than Hiroshima</h3>
          <p className="text-stone-700 mb-3">
            After two brutal US sieges of Fallujah, Iraq in 2004, something began happening to the babies. 
            Birth defects spiked to <strong>14 times the normal rate</strong>. Childhood cancer rates exceeded 
            those seen in Hiroshima and Nagasaki. Women in Fallujah began refusing to have children.
          </p>
          <p className="text-stone-700">
            Studies by Iraqi and international researchers found elevated levels of uranium, lead, and mercury in 
            hair and soil samples. The US military used depleted uranium ammunition and white phosphorus during the 
            sieges. The Pentagon has never acknowledged responsibility. Fallujah&apos;s women — the ones who survived — 
            now watch their children die of cancers that didn&apos;t exist before the Americans came.
          </p>
        </div>
      </section>

      {/* Section: War Widows */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          War Widows: $1,612 Per Month to Raise a Family
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          When a service member dies, their spouse receives Dependency and Indemnity Compensation (DIC) — 
          $1,612 per month. For a 26-year-old widow with two children — which is the average profile of a 
          post-9/11 war widow — that&apos;s $19,344 per year. Below the poverty line.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">War</th>
                <th className="px-4 py-3 text-right">Estimated Widows</th>
                <th className="px-4 py-3 text-left">Support</th>
                <th className="px-4 py-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {warWidowStats.map((row) => (
                <tr key={row.war} className="border-t border-stone-200 even:bg-stone-50">
                  <td className="px-4 py-3 font-medium">{row.war}</td>
                  <td className="px-4 py-3 text-right font-bold">{row.widows}</td>
                  <td className="px-4 py-3">{row.support}</td>
                  <td className="px-4 py-3 text-sm text-stone-600">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-red-950/10 border border-red-200 rounded-lg p-6 my-6">
          <h3 className="font-bold text-red-800 text-lg mb-2">The &ldquo;Widow Tax&rdquo;</h3>
          <p className="text-stone-700 mb-3">
            Until 2021, military widows who also received Survivor Benefit Plan (SBP) payments had their DIC 
            offset dollar-for-dollar — effectively eliminating one benefit. This was called the &ldquo;widow tax.&rdquo; 
            Surviving spouses paid premiums their entire career for a benefit that was then taken away.
          </p>
          <p className="text-stone-700">
            Congress knew about the widow tax for <strong>47 years</strong> before finally eliminating it. During 
            those 47 years, hundreds of thousands of military widows lost benefits they had been promised. Many 
            lived in poverty. The government that asked their spouses to die for their country couldn&apos;t be 
            bothered to fix a billing error for half a century.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Invisible Widows</h3>
          <p className="text-stone-700 mb-3">
            The 7,000 post-9/11 war widows get some recognition — they at least receive a folded flag. But what 
            about the wives of the 30,177 veterans who killed themselves? They receive no DIC. No folded flag. 
            No gold star. The VA doesn&apos;t classify veteran suicide as a service-connected death unless the 
            family fights for it — a process that can take years.
          </p>
          <p className="text-stone-700">
            And what about the widows in Iraq, Afghanistan, Syria, Yemen, Somalia, Libya, and Pakistan? The 
            estimated 929,000 people killed in America&apos;s post-9/11 wars left behind millions of widows. 
            They receive nothing from the country that killed their husbands. There is no DIC for the other side.
          </p>
        </div>
      </section>

      {/* Bottom line */}
      <section className="my-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-stone-300 text-lg mb-4">
            Women are not bystanders to war. They are its targets, its survivors, its unrecognized soldiers, 
            and its generational victims. They are raped as a weapon, assaulted by their own military, widowed 
            at 26, and poisoned through their pregnancies. Their children are born deformed by chemicals deployed 
            decades ago.
          </p>
          <p className="text-stone-300 text-lg mb-4">
            And when the war ends — if it ever ends — women are expected to rebuild. To raise the children alone. 
            To care for the wounded veteran. To mourn quietly. To be grateful for $1,612 a month.
          </p>
          <p className="text-stone-300 text-lg">
            The cost of war is always counted in dollars and deaths. It should also be counted in rapes, in birth 
            defects, in children who never knew their fathers, in women who were told to be silent about what was 
            done to them. Until we count those costs, we are lying about the price of war.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li>• Department of Defense Sexual Assault Prevention and Response Office (SAPRO), Annual Reports 2004–2024</li>
          <li>• VA Military Sexual Trauma Screening Data, 2000–2024</li>
          <li>• International Criminal Tribunal for the former Yugoslavia (ICTY), Foca Case Proceedings</li>
          <li>• UN Women, &ldquo;Sexual Violence in Conflict&rdquo; (2023)</li>
          <li>• Physicians for Human Rights, &ldquo;War-Related Sexual Violence&rdquo; (2022)</li>
          <li>• DOD Demographics: Profile of the Military Community (2024)</li>
          <li>• Vietnamese Association for Victims of Agent Orange/Dioxin (VAVA)</li>
          <li>• Busby C, et al. &ldquo;Cancer, Infant Mortality and Birth Sex-Ratio in Fallujah, Iraq 2005-2009&rdquo; (2010)</li>
          <li>• Congressional Research Service, &ldquo;Military Survivor Benefits&rdquo; (2023)</li>
          <li>• Tragedy Assistance Program for Survivors (TAPS), Annual Survey</li>
          <li>• Brown University Costs of War Project, &ldquo;Human Cost of Post-9/11 Wars&rdquo; (2023)</li>
          <li>• Nadia Murad, &ldquo;The Last Girl&rdquo; (2017)</li>
        </ul>
      </section>

      {/* Related */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/analysis/military-families" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">Military Families</h3>
            <p className="text-sm text-stone-500">The families left behind — PTSD, poverty, and broken homes.</p>
          </Link>
          <Link href="/analysis/human-cost" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">The Human Cost</h3>
            <p className="text-sm text-stone-500">Beyond statistics: the lives destroyed by war.</p>
          </Link>
          <Link href="/analysis/the-aftermath" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
            <h3 className="font-bold mb-1">The Aftermath</h3>
            <p className="text-sm text-stone-500">Wars don&apos;t end when the troops come home.</p>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
