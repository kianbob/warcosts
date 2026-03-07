import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'Sanctions Warfare — The Weapon That Kills More Than Bombs',
  description: 'Iraq sanctions killed 500,000 children. Cuba\'s 60-year embargo. Iran\'s medicine shortages. Afghanistan\'s frozen $7B. Sanctions are undeclared war against civilians.',
  openGraph: {
    title: 'Sanctions Warfare — The Weapon That Kills More Than Bombs',
    description: 'Economic sanctions are sold as an alternative to war. They\'re really war by another name — against civilians.',
    url: 'https://www.warcosts.org/analysis/sanctions-warfare',
  },
}

const sanctionsRegimes = [
  {
    country: 'Iraq',
    period: '1990–2003',
    type: 'Comprehensive (near-total trade embargo)',
    deaths: '500,000+ children under 5 (UNICEF estimate, 1999)',
    gdpImpact: 'GDP fell from $66B (1989) to $10.8B (1996) — 84% collapse',
    details: 'The most devastating sanctions regime in modern history. The UN Oil-for-Food program was riddled with corruption. Sanctions prohibited import of chlorine (water purification) because it could be used for weapons — leading to cholera and dysentery epidemics. Child mortality doubled. Caloric intake fell to 1,093 calories/day (half of minimum).',
    quote: '"We think the price is worth it." — Madeleine Albright, US Ambassador to the UN, asked about 500,000 dead Iraqi children on 60 Minutes (May 12, 1996)',
    outcome: 'Saddam stayed in power for 13 more years. Sanctions didn\'t prevent the 2003 invasion. The civilian population was devastated while the regime was strengthened — Saddam controlled food distribution, increasing his domestic power.',
  },
  {
    country: 'Iran',
    period: '1979–present (escalated 2012, maximum pressure 2018)',
    type: 'Comprehensive financial, oil, trade sanctions',
    deaths: 'Estimated tens of thousands from medicine shortages (The Lancet, 2019)',
    gdpImpact: 'Oil exports fell from 2.5M bbl/day to 200K bbl/day under Trump. Currency lost 80% of value. Inflation hit 50%+.',
    details: 'Despite "humanitarian exemptions," sanctions devastated Iran\'s healthcare system. Patients with cancer, hemophilia, and epilepsy couldn\'t access critical medicines. Foreign banks refused to process even legal humanitarian transactions for fear of US penalties. The INSTEX mechanism created by Europe to enable legal trade was never functional.',
    quote: '"The exemptions are a myth... No foreign bank will process our transactions." — Iranian physician quoted in The Lancet (2019)',
    outcome: 'Iran accelerated its nuclear program after Trump withdrew from the JCPOA in 2018. Enrichment went from 3.67% to 60%+ — closer to weapons-grade than ever before. Hardliners strengthened; reformists marginalized.',
  },
  {
    country: 'Cuba',
    period: '1962–present (62+ years)',
    type: 'Near-total trade embargo (Helms-Burton Act)',
    deaths: 'Impossible to quantify — chronic shortages of food, medicine, medical equipment for 60+ years',
    gdpImpact: 'Estimated $130 billion+ in cumulative economic damage (Cuban government estimate)',
    details: 'The longest-running sanctions regime in modern history. The US has voted against virtually the entire world at the UN — every year since 1992, the UN General Assembly has voted to condemn the embargo, typically 185-2 (US and Israel). Despite 62 years of sanctions, the Castro regime outlasted 11 US presidents.',
    quote: '"The definition of insanity is doing the same thing over and over and expecting different results." — Attributed to Einstein, but perfectly describes Cuba policy',
    outcome: 'Complete failure by every measure. The Castro/Díaz-Canel government remains in power. The Cuban people suffer. The US is diplomatically isolated on this issue. The embargo has become more about Florida electoral politics than any coherent foreign policy.',
  },
  {
    country: 'Russia',
    period: '2014–present (escalated massively Feb 2022)',
    type: 'SWIFT disconnection, asset freezes, oil price cap, export controls, financial sanctions',
    deaths: 'Indirect — Russian civilians face inflation, shortages; global food crisis in developing nations',
    gdpImpact: 'Russian GDP fell 2.1% in 2022 but grew 3.6% in 2023. Ruble recovered after initial crash. Oil revenue continued through India, China, Turkey.',
    details: 'The most comprehensive sanctions ever imposed on a major economy. $300 billion in Russian central bank reserves frozen. 1,500+ Russian individuals and entities sanctioned. Yet Russia\'s war in Ukraine continued. Oil revenues flowed through workarounds. China and India increased purchases. Russia pivoted trade to Asia.',
    quote: '"We will turn the ruble into rubble." — Unnamed US official (2022). The ruble is currently stronger than before the invasion.',
    outcome: 'The war in Ukraine continued. Russia adapted. The weaponization of SWIFT and the dollar accelerated de-dollarization efforts by BRICS nations. The sanctions may have permanently damaged US financial hegemony — the very tool that makes sanctions possible.',
  },
  {
    country: 'Afghanistan',
    period: '2021–present',
    type: 'Asset freeze, financial system disconnection',
    deaths: 'Millions facing starvation. 95% of population in poverty (UN, 2022). 1 million children at risk of death from malnutrition (UNICEF).',
    gdpImpact: 'GDP collapsed 20% in first year. Banking system froze. Government workers unpaid for months.',
    details: 'After the Taliban takeover in August 2021, the US froze $7 billion in Afghan central bank reserves held at the Federal Reserve Bank of New York. Biden then signed an executive order to split the funds — $3.5B for 9/11 victims, $3.5B for Afghan humanitarian aid. Taking $3.5 billion from a starving nation to compensate for an attack carried out by a Saudi-led terrorist group that the Taliban didn\'t plan.',
    quote: '"You are literally taking money out of the pockets of hungry Afghan children to give to 9/11 families. The Taliban didn\'t fly those planes." — Adam Weinstein, Quincy Institute',
    outcome: 'Afghanistan descended into the world\'s worst humanitarian crisis. Over 20 million people — half the population — face acute food insecurity. The sanctions punish 40 million civilians for the actions of a government they didn\'t choose.',
  },
  {
    country: 'North Korea',
    period: '2006–present',
    type: 'Comprehensive UN and US sanctions',
    deaths: 'Chronic malnutrition widespread. 40% of population food insecure (WFP). Estimated hundreds of thousands dead from famine conditions.',
    gdpImpact: 'GDP estimated at $28–40B (significant but unmeasurable precisely). Trade collapsed 90%+.',
    details: 'The most sanctioned country on Earth. Despite decades of maximum-pressure sanctions, North Korea went from 0 nuclear weapons to an estimated 40-50 warheads and developed ICBMs capable of reaching the US mainland. Sanctions have been comprehensively ineffective at their stated goal.',
    quote: '"Sanctions didn\'t prevent North Korea from getting nuclear weapons. They just made North Korean civilians hungrier." — Doug Bandow, Cato Institute',
    outcome: 'Total failure. North Korea has more nuclear weapons than ever. The regime is stronger, not weaker. Civilians bear all the cost.',
  },
  {
    country: 'Venezuela',
    period: '2017–present',
    type: 'Oil sector sanctions, asset freezes, financial restrictions',
    deaths: 'Humanitarian crisis: 7.7 million refugees (largest in Western Hemisphere history)',
    gdpImpact: 'GDP fell 75% between 2014–2020 (combination of sanctions and Maduro\'s policies). Oil production crashed from 2.4M bbl/day to 400K.',
    details: 'US sanctions targeted Venezuela\'s oil industry — the source of 95% of export revenue. Combined with Maduro\'s catastrophic economic policies, the result was hyperinflation exceeding 1,000,000%, food shortages, medicine shortages, and the largest refugee crisis in the Americas.',
    quote: '"The goal is to make the economy scream." — An echo of Kissinger\'s instructions regarding Chile, 1973',
    outcome: 'Maduro remains in power. The Venezuelan people have suffered catastrophically. 7.7 million have fled the country.',
  },
]

export default function SanctionsWarfarePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd title="Sanctions Warfare — The Weapon That Kills More Than Bombs" description="Iraq sanctions killed 500,000 children. Cuba's 60-year embargo. Afghanistan's frozen $7B. Sanctions are undeclared war against civilians." slug="sanctions-warfare" />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Sanctions Warfare' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          Sanctions Warfare
        </h1>
        <p className="text-xl text-stone-300 mb-4">The Weapon That Kills More Than Bombs</p>
        <p className="text-stone-400 text-lg">
          On May 12, 1996, journalist Lesley Stahl asked US Ambassador Madeleine Albright about reports that
          sanctions on Iraq had killed 500,000 children — more than died in Hiroshima. Albright&apos;s response:
          <em>&ldquo;We think the price is worth it.&rdquo;</em> That sentence tells you everything you need to
          know about economic sanctions: they are war by another name, waged against the most vulnerable people
          on Earth, sold to the American public as a &ldquo;humane alternative&rdquo; to military action.
          They are nothing of the sort.
        </p>
      </div>

      <ShareButtons title="Sanctions Warfare — The Weapon That Kills More Than Bombs" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '500,000+', label: 'Iraqi Children Killed', sub: 'UNICEF estimate, 1990s sanctions' },
          { val: '62+ Years', label: 'Cuba Embargo Duration', sub: 'Longest in modern history' },
          { val: '$7 Billion', label: 'Afghan Assets Frozen', sub: 'While 20M face starvation' },
          { val: '~30', label: 'Countries Under US Sanctions', sub: 'Affecting 1/3 of humanity' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* What sanctions really are */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">What Sanctions Really Are</h2>
        <p className="text-stone-700 mb-4">
          Economic sanctions are often described as a &ldquo;middle ground&rdquo; between diplomacy and military
          action — a way to pressure governments without bloodshed. This is a lie. Comprehensive sanctions are
          <strong> siege warfare</strong> applied to entire nations. They cut off food, medicine, fuel, and
          financial services from civilian populations while the targeted regime almost always has the resources
          to insulate itself.
        </p>
        <p className="text-stone-700 mb-4">
          The US currently maintains sanctions programs against approximately 30 countries and thousands
          of individuals and entities. The Office of Foreign Assets Control (OFAC), a small agency within
          the Treasury Department, administers these programs — effectively wielding the power of economic
          life and death over billions of people with virtually no congressional oversight and no judicial review.
        </p>
        <p className="text-stone-700 mb-4">
          The scale of US sanctions power is unique in human history. Because the US dollar is the world&apos;s
          reserve currency and the US financial system is the backbone of global commerce, American sanctions
          have <strong>extraterritorial reach</strong> — they don&apos;t just prohibit Americans from doing
          business with sanctioned countries, they prohibit <em>anyone in the world</em> from doing so if
          they want access to the US financial system. A European company trading legally with Iran under
          European law can still be crushed by US sanctions.
        </p>
        <p className="text-stone-700">
          This is not a &ldquo;peaceful alternative.&rdquo; When you cut off a country&apos;s ability to import
          medicine and food, people die. When you freeze a nation&apos;s foreign reserves, hospitals close.
          When you disconnect a country from the global financial system, the currency collapses, savings
          evaporate, and the most vulnerable — children, the elderly, the chronically ill — suffer first and worst.
        </p>
      </div>

      {/* Country-by-country */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Sanctions Regimes: The Human Cost</h2>
        <p className="text-stone-500 text-sm mb-6">Sources: UNICEF, The Lancet, UN OCHA, World Food Programme, World Bank, Congressional Research Service.</p>
        <div className="space-y-6">
          {sanctionsRegimes.map(regime => (
            <div key={regime.country} className="border rounded-lg p-5">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-bold text-lg">{regime.country}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">{regime.period}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">{regime.type}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-3">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-[10px] text-red-400 uppercase font-semibold">Human Cost</p>
                  <p className="text-sm text-red-800">{regime.deaths}</p>
                </div>
                <div className="bg-stone-50 rounded p-3">
                  <p className="text-[10px] text-stone-400 uppercase font-semibold">Economic Impact</p>
                  <p className="text-sm text-stone-700">{regime.gdpImpact}</p>
                </div>
              </div>
              <p className="text-sm text-stone-600 mb-3">{regime.details}</p>
              <div className="bg-stone-900 text-stone-300 rounded p-3 mb-3 text-sm italic">
                {regime.quote}
              </div>
              <p className="text-sm text-stone-600"><strong>Outcome:</strong> {regime.outcome}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Iraq deep dive */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Iraq: The Sanctions That Killed a Generation</h2>
        <p className="text-stone-300 mb-4">
          The Iraq sanctions (1990–2003) represent the most devastating use of economic warfare in modern
          history. After Saddam Hussein invaded Kuwait in August 1990, the UN Security Council imposed
          comprehensive sanctions that essentially cut Iraq off from the global economy. The US, which
          controlled the sanctions committee, blocked or delayed the import of virtually everything —
          including items with no conceivable military use.
        </p>
        <p className="text-stone-300 mb-4">
          The sanctions prohibited the import of <strong>chlorine</strong> for water purification (dual-use
          chemical weapon precursor), leading to epidemics of cholera, typhoid, and dysentery. They blocked
          <strong> pencils</strong> (graphite could theoretically be used in weapons). They delayed or blocked
          medical equipment, ambulance parts, and vaccines. Iraq&apos;s sewage treatment plants, destroyed in
          the 1991 bombing, could not be repaired because the necessary parts were embargoed.
        </p>
        <p className="text-stone-300 mb-4">
          A 1999 UNICEF survey found that the under-five mortality rate in south/central Iraq had more than
          doubled — from 56 per 1,000 live births (1984–1989) to 131 per 1,000 (1994–1999). This translated
          to approximately <strong>500,000 excess deaths of children under five</strong> during the sanctions
          period. Some researchers dispute the exact number, but even the most conservative estimates put
          excess child deaths in the hundreds of thousands.
        </p>
        <p className="text-stone-300 mb-4">
          Denis Halliday, the UN Humanitarian Coordinator in Iraq, resigned in protest in 1998, calling the
          sanctions &ldquo;genocide.&rdquo; His successor, Hans von Sponeck, also resigned in 2000, calling
          the sanctions a violation of the UN&apos;s own charter. Jutta Burghardt, head of the World Food
          Programme in Iraq, resigned the same day. Three senior UN officials resigned over the same policy —
          an unprecedented act of institutional conscience.
        </p>
        <p className="text-stone-300">
          Saddam Hussein, meanwhile, lived in palaces, ate lavishly, and used control over food distribution
          (via the Oil-for-Food program) to increase his domestic power. The sanctions strengthened the
          regime while destroying the civilian population — the exact opposite of their stated purpose.
          Osama bin Laden cited the suffering of Iraqi civilians under sanctions as a primary justification
          for the 9/11 attacks.
        </p>
      </div>

      {/* Do sanctions work? */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Do Sanctions Actually Work? The Evidence Says No.</h2>
        <p className="text-stone-700 mb-4">
          The academic literature on sanctions effectiveness is remarkably consistent: <strong>sanctions
          rarely achieve their stated foreign policy objectives</strong>.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <h4 className="font-bold text-sm text-amber-800 mb-2">The Research</h4>
            <ul className="text-xs text-stone-700 space-y-2">
              <li>• <strong>Hufbauer et al. (Peterson Institute):</strong> Studied 204 sanctions cases from 1914–2000. Found sanctions achieved their stated goals only about 34% of the time — and this drops to under 5% for regime change objectives.</li>
              <li>• <strong>Pape (1997, International Security):</strong> Re-analyzed Hufbauer&apos;s data and found the actual success rate was closer to 5%.</li>
              <li>• <strong>Drezner (1999):</strong> Found sanctions work best against allies on minor issues — exactly the cases where they&apos;re least needed.</li>
              <li>• <strong>Neuenkirch &amp; Neumeier (2015):</strong> Found UN sanctions reduce GDP growth by 2.3–3.5 percentage points per year, with effects lasting a decade.</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h4 className="font-bold text-sm text-red-800 mb-2">The Track Record</h4>
            <ul className="text-xs text-stone-700 space-y-2">
              <li>• <strong>Cuba (62 years):</strong> Communist government still in power.</li>
              <li>• <strong>North Korea (18 years):</strong> More nuclear weapons than ever.</li>
              <li>• <strong>Iran (45 years):</strong> Nuclear program more advanced than ever.</li>
              <li>• <strong>Russia (10 years):</strong> War in Ukraine continues. GDP growing.</li>
              <li>• <strong>Venezuela (7 years):</strong> Maduro still in power. 7.7M refugees.</li>
              <li>• <strong>Syria (13 years):</strong> Assad survived (fell to rebels, not sanctions).</li>
              <li>• <strong>Iraq (13 years):</strong> Saddam stayed in power until military invasion.</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700 mb-4">
          The pattern is unmistakable: sanctions devastate civilian populations while leaving authoritarian
          regimes intact or even strengthened. Dictators control resource distribution; sanctions give them
          a scapegoat for economic failure; nationalist backlash rallies the population around the regime.
          The civilians who suffer most are precisely the people least responsible for the policies the
          sanctions are meant to change.
        </p>
        <p className="text-stone-700">
          As economist Bryan Caplan has argued: sanctions are collective punishment, full stop. Holding an
          entire population economically hostage for the actions of their government is morally identical
          to holding civilians hostage in conventional warfare — a war crime under the Geneva Conventions.
          But because sanctions kill slowly and invisibly, with malnutrition rather than missiles, the
          moral outrage never materializes.
        </p>
      </div>

      {/* Dollar weaponization */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-red-800">Weaponizing the Dollar: Cutting Your Own Throat</h2>
        <p className="text-stone-700 mb-4">
          The US dollar&apos;s status as the world&apos;s reserve currency is arguably America&apos;s greatest
          strategic asset — more valuable than any aircraft carrier or nuclear warhead. It allows the US to
          borrow cheaply, run massive deficits, and project financial power globally. And the US government
          is systematically destroying it through sanctions overuse.
        </p>
        <p className="text-stone-700 mb-4">
          Every time the US weaponizes the dollar — freezing central bank reserves, disconnecting countries
          from SWIFT, imposing secondary sanctions on third-party nations — it sends a clear message to
          every government on Earth: <strong>holding dollars is a strategic vulnerability</strong>. The
          rational response is to diversify away from the dollar, and that&apos;s exactly what&apos;s happening.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="font-bold text-sm mb-2">De-Dollarization Trends</h4>
            <ul className="text-xs text-stone-700 space-y-1">
              <li>• Dollar share of global reserves: 72% (2000) → 58% (2024)</li>
              <li>• China-Russia trade: 95% non-dollar (was 0% in 2014)</li>
              <li>• Saudi Arabia considering yuan oil sales</li>
              <li>• BRICS exploring common settlement currency</li>
              <li>• India paying for Russian oil in rupees</li>
              <li>• China&apos;s CIPS processed $14.5T in 2023 (SWIFT alternative)</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="font-bold text-sm mb-2">What Dollar Loss Means</h4>
            <ul className="text-xs text-stone-700 space-y-1">
              <li>• Higher borrowing costs for US government</li>
              <li>• Reduced ability to run trade deficits</li>
              <li>• Weakened sanctions power (self-defeating cycle)</li>
              <li>• Higher inflation for American consumers</li>
              <li>• Loss of the &ldquo;exorbitant privilege&rdquo;</li>
              <li>• Potential fiscal crisis if reserve shift accelerates</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700">
          The $300 billion freeze of Russian central bank reserves in February 2022 was a watershed moment.
          Every central bank in the world watched the US government seize another nation&apos;s sovereign
          reserves held in Western financial institutions. The message was unmistakable: your reserves
          are only yours as long as you do what Washington says. China, holding $800+ billion in US
          Treasuries, took notice. The result may be the most consequential self-inflicted wound in
          American economic history.
        </p>
      </div>

      {/* SWIFT weaponization */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">SWIFT: The Financial Nuclear Option</h2>
        <p className="text-stone-700 mb-4">
          SWIFT (Society for Worldwide Interbank Financial Telecommunication) is a Belgian cooperative that
          processes over 42 million financial messages per day between 11,000+ banks in 200+ countries. It
          was designed as neutral financial infrastructure — the plumbing of global commerce. The US
          has turned it into a weapon.
        </p>
        <p className="text-stone-700 mb-4">
          In 2012, Iranian banks were disconnected from SWIFT — the first time the system had been weaponized
          against a country. In February 2022, after Russia invaded Ukraine, major Russian banks were similarly
          cut off. The effect is devastating: without SWIFT, a country cannot easily send or receive
          international payments. Trade grinds to a halt. Businesses can&apos;t pay suppliers. Workers
          can&apos;t receive remittances from abroad.
        </p>
        <p className="text-stone-700 mb-4">
          But each use of the SWIFT weapon accelerates the development of alternatives. Russia developed
          SPFS (System for Transfer of Financial Messages) in 2014 after the first round of sanctions.
          China&apos;s CIPS (Cross-Border Interbank Payment System) processed $14.5 trillion in 2023 and
          is growing rapidly. India&apos;s UPI is expanding internationally. These systems are not yet
          competitors to SWIFT, but they&apos;re growing — and every US sanctions escalation accelerates
          their adoption.
        </p>
        <p className="text-stone-700">
          The paradox: the more the US uses its financial weapons, the less effective they become.
          Sanctions work because of US financial dominance. But using sanctions aggressively erodes
          that dominance. It&apos;s the geopolitical equivalent of strip-mining — maximizing short-term
          extraction while destroying the long-term resource.
        </p>
      </div>

      {/* Humanitarian exemptions myth */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2 text-amber-800">💡 Did You Know: &ldquo;Humanitarian Exemptions&rdquo; Are a Myth</h3>
        <p className="text-stone-700 mb-3">
          Every US sanctions regime includes official &ldquo;humanitarian exemptions&rdquo; for food and
          medicine. In practice, these exemptions are nearly useless. Banks and shipping companies,
          terrified of accidentally violating sanctions and facing massive fines, simply refuse to process
          any transactions with sanctioned countries — a phenomenon called <strong>&ldquo;overcompliance&rdquo;
          or &ldquo;de-risking.&rdquo;</strong>
        </p>
        <p className="text-stone-700 mb-3">
          In Iran, despite humanitarian exemptions, patients with cancer, hemophilia, epidermolysis bullosa,
          and other diseases could not access critical medicines because no foreign bank would process the
          transactions. The Treasury Department can issue all the licenses it wants — but if JPMorgan and
          HSBC won&apos;t touch the transaction (and they won&apos;t, because BNP Paribas was fined $8.9
          billion for sanctions violations in 2014), the exemption is meaningless.
        </p>
        <p className="text-stone-700">
          This is not an accident. The US government knows that &ldquo;overcompliance&rdquo; magnifies the
          impact of sanctions far beyond their legal scope. The humanitarian exemptions exist for PR
          purposes — so officials can claim &ldquo;we don&apos;t sanction food and medicine&rdquo; while
          knowing full well that the financial architecture makes it nearly impossible to deliver them.
        </p>
      </div>

      {/* Collective punishment */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Collective Punishment: The Moral Bankruptcy of Sanctions</h2>
        <p className="text-stone-300 mb-4">
          Article 33 of the Fourth Geneva Convention states: <em>&ldquo;No protected person may be punished
          for an offence he or she has not personally committed. Collective penalties... are prohibited.&rdquo;</em>
        </p>
        <p className="text-stone-300 mb-4">
          Comprehensive economic sanctions are, by definition, collective punishment. They target entire
          populations — including children, the elderly, the disabled, political dissidents, and
          opponents of the sanctioned regime — for the actions of a government they may oppose and
          cannot control.
        </p>
        <p className="text-stone-300 mb-4">
          An Iraqi child who died of dysentery in 1995 because sanctions blocked chlorine imports bore
          no responsibility for Saddam&apos;s invasion of Kuwait. An Iranian cancer patient who can&apos;t
          access chemotherapy has no influence over Iran&apos;s nuclear program. An Afghan family starving
          because the US froze their country&apos;s reserves didn&apos;t choose Taliban rule.
        </p>
        <p className="text-stone-300 mb-4">
          If a foreign power blockaded an American city, cutting off food, medicine, and financial services
          until the city&apos;s government changed its policies, every American would correctly identify that
          as an act of war — and a war crime. When the US does the same thing to entire nations, it&apos;s
          called &ldquo;smart policy.&rdquo;
        </p>
        <p className="text-stone-300">
          Joy Gordon, author of <em>Invisible War: The United States and the Iraq Sanctions</em>, argues
          that comprehensive sanctions meet the legal definition of genocide under the UN Convention — the
          deliberate infliction of conditions of life calculated to bring about the physical destruction
          of a national group. Three senior UN officials agreed with this assessment when they resigned
          over Iraq. The international community looked away.
        </p>
      </div>

      {/* Who benefits */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Who Benefits? Follow the Money</h2>
        <p className="text-stone-700 mb-4">
          If sanctions rarely achieve their stated goals and cause immense human suffering, why do governments
          keep imposing them? Because sanctions aren&apos;t really about changing foreign behavior — they&apos;re
          about <strong>domestic politics and institutional power</strong>.
        </p>
        <p className="text-stone-700 mb-4">
          Sanctions allow politicians to appear &ldquo;tough&rdquo; on an adversary without the political
          cost of military action. They create the illusion of &ldquo;doing something&rdquo; while avoiding
          the risks of diplomacy or war. No American soldier dies. No dramatic footage appears on CNN.
          The suffering happens slowly, invisibly, in hospitals and homes far from American cameras.
        </p>
        <p className="text-stone-700 mb-4">
          The Treasury Department&apos;s OFAC has become one of the most powerful agencies in the US
          government — a shadow foreign policy apparatus that can economically destroy individuals,
          companies, and countries with minimal oversight. OFAC&apos;s budget has grown from $25 million
          (2004) to over $60 million (2024), and its sanctions designations have exploded from about 6,000
          entries to over 12,000.
        </p>
        <p className="text-stone-700">
          The compliance industry is a multi-billion dollar business. Law firms, consulting companies,
          and fintech firms have built empires on sanctions compliance. They have every incentive to
          support the expansion of sanctions regimes — more sanctions mean more business. The
          revolving door between OFAC, the State Department, and private compliance firms mirrors
          the military-industrial complex perfectly.
        </p>
      </div>

      {/* The Sanctions-Industrial Complex */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Sanctions-Industrial Complex: A Multi-Billion Dollar Business</h2>
        <p className="text-stone-700 mb-4">
          Just as the military-industrial complex profits from war, the sanctions-industrial complex
          profits from economic warfare. A vast ecosystem of law firms, consulting companies, compliance
          software vendors, and financial institutions has built lucrative business models around
          sanctions enforcement and evasion.
        </p>
        <div className="space-y-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">The Compliance Industry</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>Law firms:</strong> Baker McKenzie, Sullivan & Cromwell, and other white-shoe firms charge $1,000+/hour for sanctions advice. Partner-level rates can reach $2,500/hour.</li>
              <li>• <strong>Consulting firms:</strong> Deloitte, PwC, KPMG, and EY have built massive sanctions compliance practices. Annual revenue in the billions.</li>
              <li>• <strong>Software vendors:</strong> Companies like Thomson Reuters, LexisNexis, and Comply Advantage sell sanctions screening software. Market size: $1.2+ billion annually.</li>
              <li>• <strong>Due diligence firms:</strong> Kroll, Control Risks, and others perform "know your customer" investigations. Fees range from $10,000 to $500,000 per investigation.</li>
              <li>• <strong>Financial services:</strong> Banks spend $10-20 billion annually on anti-money laundering and sanctions compliance systems.</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-bold text-red-900 mb-2">The Revolving Door</h3>
            <p className="text-stone-700 text-sm mb-3">
              The same pattern that governs the military-industrial complex applies to sanctions:
            </p>
            <ul className="space-y-1 text-stone-700 text-sm">
              <li>• <strong>Adam Szubin:</strong> Former OFAC director → Sullivan & Cromwell partner → senior Treasury official → back to private practice</li>
              <li>• <strong>John Smith:</strong> Former OFAC director → Morrison & Foerster partner</li>
              <li>• <strong>Andrea Gacki:</strong> Former OFAC director → joins Akin Gump law firm</li>
              <li>• <strong>Stuart Levey:</strong> Former Treasury Undersecretary → HSBC compliance chief → Dechert law firm</li>
              <li>• <strong>David Cohen:</strong> Former Treasury Undersecretary → CIA Deputy Director → WilmerHale law firm</li>
            </ul>
            <p className="text-stone-700 text-sm mt-3">
              Officials design sanctions programs, leave government, and then make millions helping clients navigate the systems they created. The incentives favor complexity and expansion — simple rules don&apos;t require expensive lawyers.
            </p>
          </div>
        </div>
      </div>

      {/* Secondary sanctions: extraterritorial overreach */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Secondary Sanctions: Imperial Overreach Goes Global</h2>
        <p className="text-stone-700 mb-4">
          The most egregious aspect of US sanctions policy is <strong>secondary sanctions</strong> — 
          prohibitions on third-party countries and companies doing business with sanctioned entities. 
          These sanctions claim jurisdiction over the entire world based solely on the dollar&apos;s 
          role in international finance.
        </p>
        <div className="space-y-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">How Secondary Sanctions Work</h3>
            <p className="text-stone-700 text-sm mb-3">
              Secondary sanctions target non-US entities that do business with sanctioned countries or individuals. The mechanism:
            </p>
            <ul className="space-y-1 text-stone-700 text-sm">
              <li>• US sanctions Country A</li>
              <li>• Company B (located in Country C) trades legally with Country A under local law</li>
              <li>• US threatens to sanction Company B for its trade with Country A</li>
              <li>• Company B faces choice: trade with Country A OR access US financial system</li>
              <li>• Most companies choose US access, effectively making US sanctions global</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-bold text-red-900 mb-2">Major Secondary Sanctions Cases</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>BNP Paribas (2014):</strong> $8.9 billion fine for processing transactions with Sudan, Cuba, and Iran — all legal under French and EU law</li>
              <li>• <strong>HSBC (2012):</strong> $1.9 billion fine for money laundering and sanctions violations</li>
              <li>• <strong>Standard Chartered (2019):</strong> $1.1 billion fine for Iran sanctions violations</li>
              <li>• <strong>Huawei CFO Meng Wanzhou (2018-2021):</strong> Arrested in Canada on US warrant for alleged Iran sanctions violations. Created major diplomatic crisis.</li>
              <li>• <strong>Nord Stream 2 (2019-2021):</strong> US sanctioned European companies building gas pipeline from Russia to Germany — despite opposition from Germany and EU</li>
              <li>• <strong>European companies in Iran (2018-2021):</strong> Total, Airbus, BMW, Mercedes, and others withdrew from Iran not because of EU sanctions, but fear of US secondary sanctions</li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-amber-900 mb-2">Legal and Political Implications</h3>
          <p className="text-stone-700 text-sm">
            Secondary sanctions effectively make US law global law. A German company trading legally with Iran under German and EU law can be prosecuted by the US government, fined billions of dollars, and have its executives arrested when traveling through countries with US extradition treaties. This extraterritorial application of US law has created enormous tensions with allies and accelerated efforts to build alternative financial systems outside US control.
          </p>
        </div>
      </div>

      {/* The Afghanistan case study */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Afghanistan: The Most Morally Bankrupt Sanctions in History</h2>
        <p className="text-stone-300 mb-4">
          The US sanctions on Afghanistan represent the moral nadir of economic warfare. After 20 years of military occupation failed to create a stable government, the US response to the Taliban takeover was to freeze the country&apos;s central bank reserves and cut off the banking system — ensuring that 40 million civilians would face starvation and economic collapse.
        </p>
        <div className="space-y-4">
          <div className="bg-stone-800 rounded-lg p-4">
            <h3 className="font-bold text-white mb-2">The Mechanics of Destruction</h3>
            <ul className="space-y-2 text-stone-300 text-sm">
              <li>• <strong>$7 billion frozen:</strong> Afghanistan&apos;s central bank reserves held at the Federal Reserve Bank of New York</li>
              <li>• <strong>Banking system collapse:</strong> Afghan banks disconnected from international payment systems</li>
              <li>• <strong>Currency freefall:</strong> Afghan afghani lost 30% of its value in weeks</li>
              <li>• <strong>Salary crisis:</strong> Government employees, teachers, doctors unpaid for months</li>
              <li>• <strong>Humanitarian catastrophe:</strong> 95% of population in poverty; 20+ million facing acute food insecurity</li>
            </ul>
          </div>
          <div className="bg-red-900 border border-red-700 rounded-lg p-4">
            <h3 className="font-bold text-red-100 mb-2">Biden&apos;s $3.5 Billion Theft</h3>
            <p className="text-stone-300 text-sm mb-3">
              In February 2022, President Biden signed an executive order to split Afghanistan&apos;s $7 billion:
            </p>
            <ul className="space-y-1 text-stone-300 text-sm">
              <li>• $3.5 billion: Set aside for 9/11 victims and families (lawsuit settlement)</li>
              <li>• $3.5 billion: Held for "future humanitarian aid" to Afghanistan</li>
            </ul>
            <p className="text-stone-300 text-sm mt-3">
              This means taking money from one of the poorest countries on Earth — where children are dying of malnutrition — to compensate victims of an attack carried out by a Saudi-led terrorist group that the Taliban didn&apos;t plan, fund, or execute. Even by the standards of US foreign policy, it&apos;s breathtakingly cruel and illogical.
            </p>
          </div>
          <div className="bg-stone-800 rounded-lg p-4">
            <h3 className="font-bold text-white mb-2">The Human Cost</h3>
            <ul className="space-y-1 text-stone-300 text-sm">
              <li>• <strong>22.8 million people</strong> facing acute food insecurity (55% of population)</li>
              <li>• <strong>1.1 million children</strong> at risk of severe malnutrition death (UNICEF)</li>
              <li>• <strong>97% of families</strong> cannot afford enough food (World Food Programme)</li>
              <li>• <strong>Healthcare collapse:</strong> 70% of health facilities lack basic supplies</li>
              <li>• <strong>Education crisis:</strong> Teachers unpaid, schools without supplies</li>
              <li>• <strong>Winter deaths:</strong> Families burning furniture for heat, selling children for food</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-300 mt-4">
          The Afghanistan sanctions accomplish nothing. The Taliban remains in power. No policy has changed. 
          The only result is mass civilian suffering — 40 million people punished for living under a 
          government they didn&apos;t choose, imposed by a military defeat the US government caused. It&apos;s 
          collective punishment for America&apos;s own foreign policy failure.
        </p>
      </div>

      {/* Sanctions evasion and unintended consequences */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sanctions Evasion: The $100 Billion Cat-and-Mouse Game</h2>
        <p className="text-stone-700 mb-4">
          Every sanctions regime creates a parallel economy of evasion. Sanctioned countries and companies 
          develop sophisticated methods to circumvent restrictions — often with the help of the same 
          financial institutions that publicly comply with sanctions laws.
        </p>
        <div className="space-y-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Common Evasion Methods</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>Shell companies:</strong> Creating complex ownership structures across multiple jurisdictions to hide beneficial ownership</li>
              <li>• <strong>Ship-to-ship transfers:</strong> Iranian and Russian oil transferred between tankers at sea to disguise origin</li>
              <li>• <strong>Trade-based laundering:</strong> Over- or under-invoicing legitimate trade to transfer value</li>
              <li>• <strong>Cryptocurrency:</strong> Digital assets to bypass traditional banking systems (though limited for state-level transactions)</li>
              <li>• <strong>Third-country routing:</strong> Transactions routed through non-sanctioned countries (China, UAE, Turkey)</li>
              <li>• <strong>Barter trade:</strong> Direct exchange of goods without financial transactions</li>
              <li>• <strong>Alternative currencies:</strong> Trading in yuan, rubles, rupees to avoid dollar-based sanctions</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-bold text-amber-900 mb-2">Iran&apos;s &quot;Ghost Fleet&quot;</h3>
            <p className="text-stone-700 text-sm mb-3">
              Iran has built one of the world&apos;s largest &quot;ghost fleets&quot; — oil tankers that 
              operate with turned-off transponders, falsified documentation, and complex ownership 
              structures to evade sanctions:
            </p>
            <ul className="space-y-1 text-stone-700 text-sm">
              <li>• <strong>200+ vessels</strong> in Iran&apos;s shadow fleet</li>
              <li>• <strong>Ship-to-ship transfers</strong> in international waters</li>
              <li>• <strong>Flag-hopping:</strong> Vessels changing flags and names mid-voyage</li>
              <li>• <strong>$50+ billion</strong> in Iranian oil exports (2022-2023) despite sanctions</li>
              <li>• <strong>Chinese buyers</strong> purchase Iranian oil at 10-15% discount</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-bold text-red-900 mb-2">Russia&apos;s Sanctions Workarounds</h3>
            <p className="text-stone-700 text-sm mb-3">
              Despite unprecedented sanctions, Russia has maintained much of its international trade through adaptation and circumvention:
            </p>
            <ul className="space-y-1 text-stone-700 text-sm">
              <li>• <strong>Energy pivot to Asia:</strong> Oil and gas sales to China, India increased 50%+</li>
              <li>• <strong>Price cap circumvention:</strong> Russian oil sold above $60/barrel cap through complex pricing mechanisms</li>
              <li>• <strong>Alternative payment systems:</strong> SPFS and bilateral currency agreements</li>
              <li>• <strong>Trade through intermediaries:</strong> Kazakhstan, Armenia, Kyrgyzstan as transit countries</li>
              <li>• <strong>Technology imports:</strong> Western components reaching Russia through Central Asia and China</li>
              <li>• <strong>Financial system adaptation:</strong> Domestic card networks, expanded BRICS cooperation</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700 mt-4">
          The result is a massive underground economy that enriches sanctions-evaders, creates new 
          international criminal networks, and often involves corruption of the same Western financial 
          institutions that are supposed to enforce sanctions. The evasion industry generates an estimated 
          $100 billion+ annually in illicit trade — money that could fund terrorism, organized crime, 
          and further sanctions evasion.
        </p>
      </div>

      {/* Alternative systems */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Rise of Alternative Financial Systems</h2>
        <p className="text-stone-700 mb-4">
          Every US sanctions escalation accelerates the development of dollar alternatives. Countries 
          that might have been content operating within the US-dominated financial system are now 
          actively building parallel infrastructure to reduce their vulnerability to economic warfare.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Payment Systems</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>China&apos;s CIPS:</strong> Cross-Border Interbank Payment System processed $14.5T in 2023. 1,300+ financial institutions in 100+ countries.</li>
              <li>• <strong>Russia&apos;s SPFS:</strong> System for Transfer of Financial Messages. 400+ participants domestically, expanding internationally.</li>
              <li>• <strong>India&apos;s UPI:</strong> Unified Payments Interface expanding to UAE, Singapore, France for cross-border payments.</li>
              <li>• <strong>EU&apos;s INSTEX:</strong> Created to facilitate trade with Iran (never became functional due to US pressure).</li>
              <li>• <strong>Central bank digital currencies:</strong> 130+ countries exploring or implementing CBDCs to reduce dollar dependence.</li>
            </ul>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Trade Mechanisms</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>Currency swap agreements:</strong> Bilateral trade in local currencies. China has $3.7T+ in swap agreements.</li>
              <li>• <strong>Barter systems:</strong> Iran trades oil for goods directly with India, China, Turkey.</li>
              <li>• <strong>Regional trade blocs:</strong> BRICS, Shanghai Cooperation Organization, EAEU reducing dollar use.</li>
              <li>• <strong>Commodity-backed currencies:</strong> Russia&apos;s gold-backed ruble proposal; discussions of oil-backed currencies.</li>
              <li>• <strong>Banking alternatives:</strong> Asian Infrastructure Investment Bank, New Development Bank as World Bank alternatives.</li>
            </ul>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-red-900 mb-2">The Strategic Cost</h3>
          <p className="text-stone-700 text-sm">
            Each successful development of these alternative systems permanently reduces US financial 
            leverage. Unlike military weapons that become obsolete, financial infrastructure is 
            self-reinforcing — the more countries use non-dollar systems, the more useful they become 
            to everyone. The US is essentially financing the creation of its own strategic competitors 
            by overusing sanctions.
          </p>
        </div>
      </div>

      {/* Global resistance to US sanctions */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Global Resistance: The World Votes Against US Sanctions</h2>
        <p className="text-stone-700 mb-4">
          The international community has repeatedly and overwhelmingly condemned US sanctions overreach. 
          Yet American foreign policy establishments ignore this global opposition, treating it as irrelevant 
          to US interests.
        </p>
        <div className="space-y-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">UN General Assembly Votes on Cuba Embargo</h3>
            <p className="text-stone-700 text-sm mb-3">
              Every year since 1992, the UN General Assembly has voted on a resolution calling for an end to 
              the US embargo of Cuba. The results show America&apos;s complete diplomatic isolation:
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <h4 className="font-bold mb-1">Recent Votes Against Embargo:</h4>
                <ul className="space-y-1 text-stone-600">
                  <li>• 2023: 187 for, 2 against (US, Israel)</li>
                  <li>• 2022: 185 for, 2 against (US, Israel)</li>
                  <li>• 2021: 184 for, 2 against (US, Israel)</li>
                  <li>• 2019: 187 for, 3 against (US, Israel, Brazil)</li>
                  <li>• 2018: 189 for, 2 against (US, Israel)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-1">What This Means:</h4>
                <ul className="space-y-1 text-stone-600">
                  <li>• 98% of the world opposes the embargo</li>
                  <li>• Even close US allies vote against</li>
                  <li>• Only Israel consistently supports US</li>
                  <li>• Diplomatic cost is enormous</li>
                  <li>• US ignores global opinion completely</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-bold text-amber-900 mb-2">European Resistance to Extraterritorial Sanctions</h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• <strong>EU Blocking Statute (1996):</strong> Prohibits European companies from complying with US extraterritorial sanctions. Rarely enforced due to fear of US retaliation.</li>
              <li>• <strong>INSTEX mechanism (2019):</strong> European attempt to facilitate legal trade with Iran. Failed due to bank fear of US secondary sanctions.</li>
              <li>• <strong>Nord Stream 2 dispute:</strong> Germany, France, Austria strongly opposed US sanctions on European energy infrastructure.</li>
              <li>• <strong>WTO complaints:</strong> EU, China, Russia have filed multiple WTO cases against US sanctions, arguing they violate international trade law.</li>
              <li>• <strong>Joint statements:</strong> EU-China, Russia-China joint statements regularly condemn "unilateral sanctions" and "economic coercion."</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700 mt-4">
          The pattern is clear: the vast majority of the world sees US sanctions as illegitimate exercises 
          of imperial power. This opposition isn&apos;t just moral posturing — it&apos;s translating into 
          concrete efforts to build alternative systems and reduce dependence on US-controlled infrastructure.
        </p>
      </div>

      {/* The psychological war aspect */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Psychological Warfare: Breaking the Will to Resist</h2>
        <p className="text-stone-300 mb-4">
          Beyond their economic effects, sanctions are designed as psychological warfare — to demoralize 
          civilian populations and turn them against their governments. The theory is that economic 
          suffering will create political pressure for policy change. In practice, sanctions often 
          produce the opposite effect.
        </p>
        <div className="space-y-4">
          <div className="bg-stone-800 rounded-lg p-4">
            <h3 className="font-bold text-white mb-2">The "Rally Around the Flag" Effect</h3>
            <ul className="space-y-2 text-stone-300 text-sm">
              <li>• <strong>External threat:</strong> Sanctions provide authoritarian leaders with an external enemy to blame for domestic problems</li>
              <li>• <strong>Nationalism:</strong> Economic warfare often increases national solidarity rather than decreasing it</li>
              <li>• <strong>Regime legitimacy:</strong> Leaders portray sanctions as proof of their importance/threat to enemies</li>
              <li>• <strong>Opposition marginalization:</strong> Pro-Western voices discredited as foreign agents or traitors</li>
              <li>• <strong>Historical examples:</strong> Cuba (62 years), North Korea (18 years), Iran (45 years) — all regimes strengthened</li>
            </ul>
          </div>
          <div className="bg-red-900 border border-red-700 rounded-lg p-4">
            <h3 className="font-bold text-red-100 mb-2">The Siege Mentality</h3>
            <p className="text-stone-300 text-sm mb-3">
              Comprehensive sanctions create a siege mentality that often strengthens authoritarian control:
            </p>
            <ul className="space-y-1 text-stone-300 text-sm">
              <li>• Rationing systems increase government control over daily life</li>
              <li>• Black market dependence makes citizens complicit in evasion networks</li>
              <li>• Professional classes emigrate, reducing domestic opposition capacity</li>
              <li>• Military/security services prioritized over civilian needs</li>
              <li>• International isolation breeds conspiracy thinking and extremism</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-300 mt-4">
          The psychological warfare aspect reveals the fundamental cruelty of sanctions policy: they 
          deliberately inflict suffering on civilians to achieve political goals. Even if this strategy 
          worked (which it rarely does), it would be morally indistinguishable from terrorism — using 
          violence against innocent people to intimidate governments.
        </p>
      </div>

      {/* Libertarian analysis */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Libertarian Case: Free Trade, Not Economic War</h2>
        <p className="text-stone-300 mb-4">
          From a libertarian perspective, economic sanctions are indefensible on every level — moral,
          practical, and constitutional.
        </p>
        <p className="text-stone-300 mb-4">
          <strong>Morally:</strong> Sanctions are collective punishment of civilians for the actions of
          their government. Libertarians reject collective guilt. An individual Iranian, Cuban, or
          Russian citizen has the same natural right to engage in voluntary trade as any American.
          Prohibiting that trade — under threat of imprisonment — violates the fundamental liberty
          of both parties.
        </p>
        <p className="text-stone-300 mb-4">
          <strong>Practically:</strong> Sanctions almost never achieve their stated goals. They strengthen
          authoritarian regimes, punish civilians, accelerate de-dollarization, and generate blowback.
          The 62-year Cuba embargo is the definitive case study: six decades of economic warfare that
          accomplished nothing except immiserating the Cuban people and making the US look foolish.
        </p>
        <p className="text-stone-300 mb-4">
          <strong>Constitutionally:</strong> Sanctions are undeclared war. They cause mass death and
          suffering without any congressional vote, without any judicial oversight, and often without
          any public debate. The Treasury Department — an executive agency — can effectively wage
          economic war on any country, company, or individual on Earth with a stroke of a pen.
          The Founders gave the war power to Congress precisely to prevent this kind of unilateral
          executive action.
        </p>
        <p className="text-stone-300 mb-4">
          <strong>Free trade is the greatest force for peace in human history.</strong> Countries that
          trade with each other have powerful incentives not to fight. Sanctions sever those ties,
          creating economic isolation that breeds hostility, nationalism, and conflict. As Frédéric
          Bastiat wrote in 1848: <em>&ldquo;When goods don&apos;t cross borders, soldiers will.&rdquo;</em>
        </p>
        <p className="text-stone-300 mb-4">
          <strong>The hypocrisy test:</strong> Would Americans accept foreign sanctions that prevented 
          their children from getting cancer treatment? Would they tolerate foreign powers freezing 
          US bank reserves held abroad? Would they consider a blockade that cut off food imports an 
          act of war? The answer is obvious — which makes US sanctions policy obviously hypocritical.
        </p>
        <p className="text-stone-300">
          The libertarian alternative: engage, don&apos;t isolate. Trade freely, travel freely, and let
          the soft power of commerce and culture do what embargoes and asset freezes never have — change
          minds and open societies. The Berlin Wall didn&apos;t fall because of sanctions on East Germany;
          it fell because East Germans could see, hear, and eventually taste what freedom looked like on
          the other side.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources</h2>
        <ul className="text-xs text-stone-600 space-y-1">
          <li>• Joy Gordon, <em>Invisible War: The United States and the Iraq Sanctions</em> (2010)</li>
          <li>• Hufbauer, Schott, Elliott &amp; Oegg, <em>Economic Sanctions Reconsidered</em>, 3rd ed. (2007)</li>
          <li>• Robert Pape, &ldquo;Why Economic Sanctions Do Not Work,&rdquo; <em>International Security</em> (1997)</li>
          <li>• UNICEF, &ldquo;Child Mortality in Iraq&rdquo; (1999)</li>
          <li>• The Lancet, &ldquo;The Effect of Economic Sanctions on Health&rdquo; (2019)</li>
          <li>• UN OCHA, Afghanistan Humanitarian Needs Overview (2022–2024)</li>
          <li>• Congressional Research Service, &ldquo;The Economic Effects of Sanctions on Russia&rdquo; (2024)</li>
          <li>• Treasury Department, OFAC Annual Reports</li>
          <li>• World Bank Development Indicators</li>
          <li>• 60 Minutes, Madeleine Albright interview (May 12, 1996)</li>
          <li>• Nicholas Mulder, <em>The Economic Weapon: The Rise of Sanctions as a Tool of Modern War</em> (2022)</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-12 pt-8 border-t">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { slug: 'blowback', title: 'Blowback', desc: 'How interventions create enemies. Iraq sanctions fueled Al-Qaeda recruitment.' },
            { slug: 'shadow-wars', title: 'Shadow Wars', desc: 'America\'s secret wars in 134+ countries — no votes, no debate, no accountability.' },
            { slug: 'forever-wars', title: 'The Forever Wars', desc: 'How 60 words authorized 25 years of global war.' },
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
