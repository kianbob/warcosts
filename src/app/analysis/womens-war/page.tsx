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

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Syria: Rape Dungeons &amp; Chemical Torture</h3>
          <p className="text-stone-700 mb-3">
            Syrian government forces operated a systematic torture and sexual violence program in Assad&apos;s 
            prisons. The Association of Detainees and Missing Persons in Sednaya Prison estimates <strong>17,000 
            people were tortured to death</strong> in Sednaya alone — including thousands of women. Amnesty 
            International documented systematic rape, sexual torture, and forced nudity.
          </p>
          <p className="text-stone-700">
            Women prisoners were subjected to &ldquo;sexual torture&rdquo; — rape with objects, electric shocks 
            to genitals, and forced nudity in front of male guards. Chemical weapons attacks deliberately targeted 
            pregnant women and children. The Syrian Network for Human Rights documented 222 chemical attacks that 
            killed 1,514 civilians — 26% of them women and children. The international response was limited to rhetoric.
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Myanmar: Genocidal Rape</h3>
          <p className="text-stone-700 mb-3">
            During Myanmar&apos;s 2017 military campaign against the Rohingya, UN investigators documented systematic 
            rape as a tool of genocide. Over <strong>1 million Rohingya</strong> were forced to flee to Bangladesh. 
            Médecins Sans Frontières estimated that in one month alone, Myanmar security forces killed at least 
            9,000 Rohingya — including 1,000 children under 5.
          </p>
          <p className="text-stone-700">
            Women survivors testified to gang rape by soldiers, rape with objects, and being forced to watch family 
            members being killed. Children as young as 8 were raped. Pregnant women were tortured. The UN called it 
            &ldquo;a textbook example of ethnic cleansing.&rdquo; No Myanmar military officials have been prosecuted.
          </p>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          These are not isolated incidents or cultural anomalies. They represent a <strong>systematic military 
          strategy</strong> — rape as a weapon of war. The goal is not sexual gratification. It&apos;s terror. 
          Humiliation. Social destruction. The message is clear: we can do anything to you, and no one will stop us. 
          And tragically, they&apos;re usually right.
        </p>
      </section>

      {/* Section: International Legal Failure */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          International Justice: 13 Convictions for 641,000 Rapes
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The international legal system has utterly failed to protect women from wartime sexual violence. Since 
          the International Criminal Court was established in 2002, it has issued <strong>13 convictions for 
          crimes involving sexual violence</strong>. Conservative UN estimates suggest over 641,000 women have 
          been raped in major conflicts since 1990. That&apos;s one conviction for every 49,000 rapes.
        </p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">ICC: Toothless Justice</h3>
          <div className="space-y-3 text-stone-300">
            <div>
              <p><span className="text-white font-bold">Cases opened:</span> 32 situations, 30 cases</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Indictments issued:</span> 52 individuals</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Convictions:</span> 10 individuals</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Sexual violence convictions:</span> 13 charges across all cases</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Countries that comply with arrest warrants:</span> ~30 of 123 member states</p>
            </div>
            <div>
              <p><span className="text-white font-bold">US cooperation:</span> Zero — US is not a member, actively opposes ICC</p>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          The problem is jurisdictional and political. The ICC can only prosecute cases where countries refer 
          themselves (unlikely for sexual violence), where the UN Security Council refers a case (Russia and 
          China block most resolutions), or where non-member states accept jurisdiction (rare). <strong>The US 
          actively opposes the ICC</strong> and passed a law authorizing military force to free any American 
          held by the court.
        </p>

        <p className="text-stone-700 text-lg mb-4">
          Regional courts fare no better. The International Criminal Tribunal for the former Yugoslavia took 
          <strong>8 years</strong> to prosecute its first rape case. The International Criminal Tribunal for 
          Rwanda initially failed to charge sexual violence despite evidence that 250,000-500,000 women were 
          raped during the 1994 genocide. The European Court of Human Rights has never ordered reparations 
          for wartime sexual violence.
        </p>
      </section>

      {/* Section: Women Peacekeepers */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Women Peacekeepers: Assaulted by Their Own
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          UN peacekeepers are supposed to protect civilians, especially women and children in conflict zones. 
          Instead, many have become perpetrators themselves. The UN has documented <strong>2,000+ allegations 
          of sexual exploitation and abuse</strong> by peacekeepers since 2000. The majority of victims are 
          women and girls in the communities peacekeepers were sent to protect.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">UN&apos;s Sexual Abuse Crisis</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-stone-800 mb-2">Central African Republic (2014-2016)</h4>
              <ul className="text-stone-700 text-sm space-y-1">
                <li>• 108 allegations of sexual abuse by peacekeepers</li>
                <li>• Victims included children as young as 7</li>
                <li>• French Sangaris forces paid children for sex</li>
                <li>• UN whistleblower Anders Kompass was retaliated against</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800 mb-2">Democratic Republic of Congo (2004-2017)</h4>
              <ul className="text-stone-700 text-sm space-y-1">
                <li>• 850+ allegations of sexual exploitation</li>
                <li>• Pakistani peacekeepers ran a child sex ring</li>
                <li>• Uruguayan peacekeepers traded food for sex</li>
                <li>• Zero prosecutions by contributing countries</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800 mb-2">Haiti (2004-2017)</h4>
              <ul className="text-stone-700 text-sm space-y-1">
                <li>• 265+ documented cases of sexual abuse</li>
                <li>• Sri Lankan peacekeepers exploited street children</li>
                <li>• Hundreds of &ldquo;peacekeeper babies&rdquo; abandoned</li>
                <li>• Cholera outbreak killed 10,000+ due to UN negligence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800 mb-2">Bosnia (1995-2002)</h4>
              <ul className="text-stone-700 text-sm space-y-1">
                <li>• UN police were customers of sex traffickers</li>
                <li>• DynCorp employees bought women and girls</li>
                <li>• Whistleblower Kathryn Bolkovac was fired</li>
                <li>• Movie &ldquo;The Whistleblower&rdquo; tells her story</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          The UN&apos;s response to these scandals has been institutional ass-covering. When Anders Kompass, a 
          UN human rights official, tried to alert French authorities about their soldiers&apos; child abuse 
          in CAR, <strong>the UN suspended him for &ldquo;breach of protocol.&rdquo;</strong> The UN spent more 
          energy investigating the leak than investigating the child rape.
        </p>

        <p className="text-stone-700 text-lg mb-4">
          Contributing countries — the nations that provide peacekeeping troops — have prosecuted fewer than 
          <strong>20 peacekeepers</strong> for sexual abuse since 2000. Most allegations are simply ignored. 
          The UN has no authority to prosecute peacekeepers itself. The message is clear: you can rape with 
          impunity as long as you&apos;re wearing a blue helmet.
        </p>
      </section>

      {/* Section: Refugee Women */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          84 Million Displaced, 50% Are Women
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Wars create refugees. Of the world&apos;s <strong>84 million forcibly displaced people</strong>, 
          roughly half are women and girls. They face violence during flight, in refugee camps, and in 
          host communities. Women refugees are 5 times more likely to experience sexual violence than 
          women in stable communities.
        </p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">The Journey of Trauma</h3>
          <div className="space-y-3 text-stone-300">
            <div>
              <p><span className="text-white font-bold">During Flight:</span> Checkpoint rape, trafficking, exploitation by smugglers and border guards</p>
            </div>
            <div>
              <p><span className="text-white font-bold">In Camps:</span> Unsafe latrines, lack of lighting, sexual violence by camp security and other refugees</p>
            </div>
            <div>
              <p><span className="text-white font-bold">In Host Communities:</span> Economic exploitation, &ldquo;survival sex,&rdquo; discrimination, lack of legal protection</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Children:</span> Unaccompanied minors face trafficking, child marriage, and sexual exploitation</p>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Syrian Refugee Crisis: 13 Million Displaced</h3>
          <p className="text-stone-700 mb-3">
            The Syrian war has displaced over 13 million people — the largest refugee crisis since WWII. 
            <strong>6.8 million are women and children.</strong> In Jordan&apos;s Zaatari camp — which housed 
            80,000 people at its peak — UNICEF documented widespread child marriage. Girls as young as 12 
            were married off by families desperate to reduce the number of mouths to feed.
          </p>
          <p className="text-stone-700 mb-3">
            In Lebanon, Syrian refugee women report widespread sexual harassment and assault. A 2016 survey 
            found that <strong>90% of Syrian refugee women</strong> experienced sexual harassment by employers, 
            landlords, or aid workers. Many cannot report the abuse because they lack legal status and fear deportation.
          </p>
          <p className="text-stone-700">
            The international response has been woefully inadequate. The UN&apos;s Syrian refugee appeal is 
            only 37% funded. Women and children bear the cost of this funding gap through reduced protection, 
            limited healthcare, and cuts to food assistance that force families into survival prostitution.
          </p>
        </div>
      </section>

      {/* Section: Women Veterans Healthcare */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Healthcare Designed for Men, Delivered to Women
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The VA healthcare system was designed for male veterans of conventional wars. Today, <strong>2.2 
          million women</strong> are veterans, but many VA facilities still lack basic gynecological care. 
          Mental health screening tools are designed around male experiences. The assumption that veterans 
          are men is killing women.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Gender Gaps in VA Care</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Physical Health</h4>
              <ul className="text-stone-700 text-sm space-y-1">
                <li>• 37% of VA facilities lack on-site gynecological care</li>
                <li>• Women veterans wait 25% longer for specialty appointments</li>
                <li>• Breast and cervical cancer screening rates below civilian standards</li>
                <li>• Higher rates of autoimmune diseases (often undiagnosed)</li>
                <li>• Gulf War Syndrome affects 25% of women veterans vs 15% of men</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Mental Health</h4>
              <ul className="text-stone-700 text-sm space-y-1">
                <li>• PTSD screening tools miss female-specific trauma symptoms</li>
                <li>• Women veterans are 2.5x more likely to commit suicide than civilian women</li>
                <li>• MST survivors often misdiagnosed with personality disorders</li>
                <li>• Higher rates of depression and anxiety (often untreated)</li>
                <li>• Homelessness among women veterans increased 40% (2010-2019)</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          The VA&apos;s Military Sexual Trauma program theoretically provides specialized care for MST survivors. 
          In practice, many facilities lack trained staff. A 2020 GAO report found that <strong>40% of 
          designated MST coordinators</strong> had no specialized training in sexual trauma. Some facilities 
          assign MST coordination as a part-time duty to staff who also handle other responsibilities.
        </p>

        <p className="text-stone-700 text-lg mb-4">
          Women veterans face a Catch-22 when seeking care: prove you were in combat to qualify for PTSD 
          treatment, but accept that women weren&apos;t officially in combat until 2015. Many women veterans 
          receive less-than-honorable discharges — often after reporting sexual assault — which disqualifies 
          them from most VA benefits. They served their country. Their country failed them. Then it abandoned them.
        </p>
      </section>

      {/* Section: Economic Impact */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Economic War on Women
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          War doesn&apos;t just kill women — it impoverishes them. In every conflict zone, women&apos;s economic 
          opportunities disappear. Schools close (girls are pulled out first). Markets shut down (women lose 
          informal sector jobs). Healthcare collapses (maternal mortality spikes). And when peace comes, 
          women are excluded from reconstruction jobs that go to men.
        </p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">Afghanistan: 20 Years of False Promises</h3>
          <div className="space-y-3 text-stone-300">
            <div>
              <p><span className="text-white font-bold">2001 Promise:</span> &ldquo;Afghan women will be liberated from Taliban oppression&rdquo;</p>
            </div>
            <div>
              <p><span className="text-white font-bold">2021 Reality:</span> Taliban back in power, women banned from education and work</p>
            </div>
            <div>
              <p><span className="text-white font-bold">$2.3 trillion spent</span> on war, ~$200 million total on women&apos;s programs (0.009%)</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Female literacy:</span> Rose from 12% to 17% over 20 years — now back to 0% in rural areas</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Maternal mortality:</span> Remains among world&apos;s highest at 638 deaths per 100,000 births</p>
            </div>
            <div>
              <p><span className="text-white font-bold">Girls in school:</span> 2.5 million in 2020 — now zero above age 12</p>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          In Iraq, women made up 25% of the workforce before 2003. By 2015, it had fallen to 14%. Violence 
          against women increased dramatically after the US invasion — honor killings, kidnappings, and 
          forced marriages spiked. The &ldquo;liberation&rdquo; of Iraq made women prisoners in their own homes.
        </p>

        <p className="text-stone-700 text-lg mb-4">
          Post-conflict reconstruction systematically excludes women. In Iraq, <strong>less than 1%</strong> 
          of reconstruction contracts went to women-owned businesses. In Afghanistan, women were explicitly 
          banned from working on most US-funded projects — because of &ldquo;cultural sensitivities.&rdquo; 
          The same women who were supposedly being liberated were prohibited from participating in their 
          countries&apos; reconstruction.
        </p>
      </section>

      {/* Section: Women in Peace Negotiations */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Excluded from Peace: When Wars End, Women Are Forgotten
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Despite bearing the brunt of war&apos;s violence, women are systematically excluded from peace 
          negotiations. Of the 1,168 peace agreements signed between 1992 and 2019, only <strong>299 
          included women as negotiators, mediators, or signatories</strong> (25%). Only 6% had women 
          as chief mediators. The men who start wars also control how they end.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Major Peace Processes: Male-Only Clubs</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-stone-800">Dayton Accords (Bosnia, 1995)</h4>
              <p className="text-stone-700 text-sm">
                <strong>Women negotiators: 0</strong> | Despite systematic rape being a central war crime, no women 
                were included in peace talks. The agreement made no mention of sexual violence, war crimes prosecutions, 
                or women&apos;s rights. Women&apos;s groups had to lobby for years to be included in implementation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800">Oslo Accords (Israel-Palestine, 1993)</h4>
              <p className="text-stone-700 text-sm">
                <strong>Women negotiators: 0</strong> | Secret negotiations included no women. The agreement 
                ignored women&apos;s rights, education access, and economic participation. Palestinian and 
                Israeli women&apos;s peace groups were actively excluded from the process.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800">Good Friday Agreement (Northern Ireland, 1998)</h4>
              <p className="text-stone-700 text-sm">
                <strong>Women negotiators: 2 of 10 parties</strong> | The Northern Ireland Women&apos;s Coalition 
                secured seats at the table only through grassroots mobilization. They successfully pushed for 
                integrated education and mixed housing — provisions that male negotiators had ignored.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800">Doha Agreement (Afghanistan, 2020)</h4>
              <p className="text-stone-700 text-sm">
                <strong>Women negotiators: 0</strong> | The US-Taliban agreement was negotiated entirely by men. 
                Afghan women&apos;s rights were not protected. Within months of the Taliban&apos;s return to power, 
                women were banned from education and work. The negotiators knew this would happen.
              </p>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          Research consistently shows that peace agreements with women&apos;s participation are more likely 
          to last. A study of 40 peace processes found that agreements with women&apos;s involvement had a 
          <strong>64% higher probability of lasting 15+ years</strong>. But the international community 
          continues to treat women&apos;s participation as optional, not essential.
        </p>

        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">UN Resolution 1325: 23 Years of Empty Promises</h3>
          <p className="text-stone-300 mb-3">
            In 2000, the UN Security Council passed Resolution 1325, calling for women&apos;s participation 
            in peace processes. It was groundbreaking — the first time the Security Council recognized women 
            as essential to peace and security.
          </p>
          <p className="text-stone-300 mb-3">
            <strong>23 years later:</strong> Women&apos;s participation in peace processes has barely improved. 
            The UN has adopted 10 additional resolutions on women, peace, and security. Implementation remains 
            minimal. Words are cheap. Action is expensive.
          </p>
          <div className="text-stone-300">
            <p className="font-semibold text-white">Key failures:</p>
            <ul className="space-y-1 ml-4">
              <li>• No enforcement mechanisms or penalties for excluding women</li>
              <li>• Funding for women&apos;s peace organizations remains &lt;1% of peace building budgets</li>
              <li>• Security Council members routinely violate their own resolutions</li>
              <li>• &ldquo;Cultural sensitivity&rdquo; is used to justify excluding women from negotiations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Solutions */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Solutions: What It Would Take to End Women&apos;s War
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Ending the war on women requires more than resolutions and rhetoric. It requires structural change 
          in how wars are conducted, how peace is negotiated, and how justice is delivered. The solutions 
          exist — what&apos;s missing is political will.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Military Reforms</h3>
          <ul className="space-y-2 text-stone-700">
            <li><strong>1. Independent military justice system:</strong> Remove sexual assault cases from chain of command entirely</li>
            <li><strong>2. Mandatory prosecution:</strong> Commanders who fail to report MST lose rank and benefits</li>
            <li><strong>3. Victim support guarantee:</strong> No discharge or punishment for reporting assault</li>
            <li><strong>4. Public accountability:</strong> Annual public reporting of sexual assault rates by unit and base</li>
            <li><strong>5. Cultural transformation:</strong> Zero tolerance for misogyny, racism, and sexual harassment</li>
          </ul>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">International Justice</h3>
          <ul className="space-y-2 text-stone-700">
            <li><strong>1. Universal ICC jurisdiction:</strong> All UN member states must accept ICC authority for sexual violence crimes</li>
            <li><strong>2. Hybrid courts:</strong> Create special courts in conflict zones with international/local judges</li>
            <li><strong>3. Victim compensation fund:</strong> International fund providing reparations for sexual violence survivors</li>
            <li><strong>4. Sanctions enforcement:</strong> Economic sanctions on countries that use rape as a weapon of war</li>
            <li><strong>5. Corporate accountability:</strong> Hold contractors liable for sex trafficking and exploitation</li>
          </ul>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 my-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Peace Building</h3>
          <ul className="space-y-2 text-stone-700">
            <li><strong>1. 50% representation requirement:</strong> All peace negotiations must include equal women&apos;s participation</li>
            <li><strong>2. Women&apos;s rights veto:</strong> Peace agreements cannot remove existing women&apos;s rights protections</li>
            <li><strong>3. Economic inclusion mandate:</strong> Post-conflict reconstruction must reserve 30% of contracts for women</li>
            <li><strong>4. Education protection:</strong> Attacks on girls&apos; schools classified as war crimes</li>
            <li><strong>5. Transitional justice inclusion:</strong> Truth commissions must document gender-based violence</li>
          </ul>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          But the most important solution is the hardest: <strong>stop starting wars</strong>. Every war creates 
          new victims. Every intervention generates new refugees. Every &ldquo;humanitarian&rdquo; bombing 
          campaign spawns new widows. As long as powerful men can start wars without counting the cost to 
          women, women will continue to pay that cost.
        </p>
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
