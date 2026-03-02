import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { OilPriceChart, HalliburtonChart, USProductionChart, MilitaryOilSpendingChart } from './OilCharts'

export const metadata: Metadata = {
  title: 'Oil & War: Every Middle East War Is About Oil',
  description: 'The Carter Doctrine. Gulf War for Kuwait oil. Iraq War no-bid Halliburton contracts. Petrodollar system. Pipeline politics. America fights for oil it no longer needs.',
  openGraph: {
    title: 'Oil & War: Every Middle East War Is About Oil',
    description: 'Carter Doctrine, Gulf War, Iraq invasion, petrodollar system. Follow the oil and you find every war.',
    url: 'https://www.warcosts.org/analysis/oil-and-war',
    type: 'article',
  },
}

const keyStats = [
  { stat: '$3T+', label: 'Total cost of the Iraq War — fought in the world\'s second-largest oil reserve', source: 'Brown University Costs of War' },
  { stat: '$39.5B', label: 'Halliburton/KBR contracts from Iraq — largest no-bid contract in US history', source: 'SIGIR' },
  { stat: '60%', label: 'Of global proven oil reserves located in the Middle East', source: 'BP Statistical Review' },
  { stat: '$81B/yr', label: 'Estimated US military spending to protect Persian Gulf oil flows', source: 'RAND Corporation' },
  { stat: '$34M', label: 'Dick Cheney\'s deferred compensation from Halliburton while VP', source: 'Congressional Research Service' },
  { stat: '13.2M', label: 'Barrels per day — US oil production in 2024, world\'s #1 producer', source: 'EIA' },
]

const warOilConnections = [
  { war: 'Iran Coup (1953)', oil: 'British-Iranian Oil Company (now BP) nationalized by Mossadegh. CIA/MI6 overthrew him. Oil access restored.', consequence: 'Installed the Shah → Iranian Revolution (1979) → 45 years of hostility' },
  { war: 'Gulf War (1990-91)', oil: 'Saddam invaded Kuwait — 10% of world oil reserves. OPEC oil supply threatened.', consequence: 'US deployed 700,000 troops in 5 months. Fastest mobilization since WWII. Oil was the explicit reason.' },
  { war: 'Iraq War (2003-11)', oil: 'Iraq has 145B barrels of proven reserves. No-bid contracts went to US/UK firms.', consequence: '$3T cost. 500,000+ dead. ISIS emerged. Iran empowered. Oil firms got access.' },
  { war: 'Libya (2011)', oil: 'Africa\'s largest oil reserves. Gaddafi threatened to price oil in gold dinars.', consequence: 'NATO intervention. Failed state. Slave markets. Oil production collapsed then recovered under chaos.' },
  { war: 'Syria (2011-present)', oil: 'Pipeline routes (Qatar-Turkey vs Iran-Iraq-Syria). US troops guard Syrian oil fields.', consequence: 'Trump admitted: "We\'re keeping the oil." 900 US troops remain near oil fields in 2025.' },
]

const petrodollarTimeline = [
  { year: '1944', event: 'Bretton Woods: Dollar pegged to gold, becomes world reserve currency' },
  { year: '1971', event: 'Nixon ends gold standard — dollar needs a new anchor' },
  { year: '1973', event: 'Arab oil embargo. Oil quadruples in price.' },
  { year: '1974', event: 'Kissinger-Saudi deal: Oil priced exclusively in USD. Saudis buy US Treasury bonds. US provides military protection.' },
  { year: '1979', event: 'Carter Doctrine: US will use military force to protect Persian Gulf oil' },
  { year: '2000', event: 'Saddam switches Iraq oil sales from dollars to euros' },
  { year: '2003', event: 'Iraq invaded. Oil sales switched back to dollars immediately.' },
  { year: '2011', event: 'Gaddafi proposes gold dinar for African oil trade. NATO intervention follows.' },
  { year: '2023', event: 'Saudi Arabia considers accepting yuan for Chinese oil purchases' },
  { year: '2024', event: 'Saudi-US petrodollar agreement (1974) expires. Not renewed.' },
]

export default function OilAndWarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Oil & War' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Oil &amp; War
        </h1>
        <p className="text-xl text-stone-300 mb-4">Every Middle East War Is About Oil. They Just Don&apos;t Say It.</p>
        <p className="text-stone-400 text-lg">
          In 1980, President Jimmy Carter declared that any attempt to control the Persian Gulf would be 
          &ldquo;repelled by any means necessary, including military force.&rdquo; It was the most honest 
          statement an American president has ever made about why the US fights in the Middle East. Every 
          war since — the Gulf War, Iraq, Libya, Syria — follows the same pattern: oil is threatened, 
          America intervenes, contractors get rich, and a generation pays the price. The US is now the 
          world&apos;s largest oil producer. It doesn&apos;t need Middle Eastern oil. It keeps fighting 
          for it anyway.
        </p>
      </div>

      <ShareButtons title="Oil & War: Every Middle East War Is About Oil" />

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

      <OilPriceChart />

      {/* Section: Carter Doctrine */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Carter Doctrine: Oil Is Worth Dying For
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          On January 23, 1980, President Jimmy Carter — the peanut farmer from Georgia, the born-again 
          Christian, the human rights advocate — declared that the United States would use <strong>military 
          force</strong> to protect oil supplies in the Persian Gulf. This was not subtext. This was 
          not implied. He said it plainly in his State of the Union address:
        </p>
        <blockquote className="border-l-4 border-red-800 pl-6 my-6 text-stone-600 italic text-lg">
          &ldquo;An attempt by any outside force to gain control of the Persian Gulf region will be 
          regarded as an assault on the vital interests of the United States of America, and such an 
          assault will be repelled by any means necessary, including military force.&rdquo;
        </blockquote>
        <p className="text-stone-700 text-lg mb-4">
          The Carter Doctrine created the Rapid Deployment Joint Task Force, which became US Central 
          Command (CENTCOM) — the military command responsible for every American war in the Middle 
          East since. It was the explicit declaration that oil was worth American lives. Every president 
          since has operated under this doctrine, even as they denied that oil had anything to do with 
          their wars.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The doctrine was triggered by the Soviet invasion of Afghanistan and the Iranian Revolution — 
          both of which threatened the stability of the oil-producing Gulf states. The US responded by 
          building a permanent military infrastructure in the region: bases in Saudi Arabia, Bahrain, 
          Qatar, Kuwait, the UAE, and Oman. The Fifth Fleet, based in Bahrain, patrols the Strait of 
          Hormuz — through which 21% of global oil passes daily.
        </p>
      </section>

      {/* Section: Gulf War */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Gulf War: The Most Honest Oil War
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          When Saddam Hussein invaded Kuwait on August 2, 1990, Secretary of State James Baker was 
          unusually frank about why the US would respond with military force: &ldquo;To bring it down 
          to the American people, it&apos;s <strong>jobs</strong>.&rdquo; He meant oil. Kuwait controlled 
          10% of global oil reserves. Combined with Iraq&apos;s reserves, Saddam would have controlled 
          20% of the world&apos;s oil supply and been positioned to threaten Saudi Arabia — another 17%.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The US deployed 700,000 troops in five months — the fastest military mobilization since World War II. 
          The war lasted 42 days. Kuwait was liberated. Oil flows were restored. The war was sold to the 
          American public with the <Link href="/analysis/lies-that-started-wars" className="text-red-800 hover:underline">Nayirah testimony</Link> — 
          the fabricated story of Iraqi soldiers pulling babies from incubators — but the real motivation was 
          never seriously disguised. This was a war for oil, and everyone knew it.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The Gulf War established the template: oil threatened → massive US military response → quick 
          victory declared → permanent military presence established. After the war, the US maintained 
          bases in Saudi Arabia (which, in turn, became Osama bin Laden&apos;s primary grievance against the 
          US, leading directly to 9/11).
        </p>
      </section>

      {/* Section: Iraq War */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Iraq 2003: The War They Swore Wasn&apos;t About Oil
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          &ldquo;The oil of Iraq belongs to the Iraqi people,&rdquo; President Bush declared. Defense Secretary 
          Rumsfeld called the oil accusation &ldquo;nonsense.&rdquo; The war was about WMDs (which didn&apos;t exist) 
          and democracy (which didn&apos;t materialize). It was definitely, absolutely, not about oil.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          Except that Iraq sits on <strong>145 billion barrels</strong> of proven oil reserves — the fifth largest 
          in the world. Except that before the invasion, Iraqi oil contracts had been awarded to French, 
          Russian, and Chinese firms. After the invasion, those contracts were cancelled and replaced 
          with deals for <strong>ExxonMobil, Chevron, BP, and Shell</strong>. Except that Saddam had 
          switched Iraq&apos;s oil sales from US dollars to euros in 2000 — threatening the petrodollar 
          system — and one of the first acts of the US occupation was switching them back.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          And except that Dick Cheney — the Vice President who was the primary architect of the 
          invasion — had been CEO of <strong>Halliburton</strong> from 1995 to 2000, and Halliburton&apos;s 
          subsidiary KBR received the first <strong>no-bid contract</strong> for Iraq reconstruction, 
          eventually totaling over $39.5 billion. Cheney received $34 million in deferred compensation 
          from Halliburton while serving as Vice President.
        </p>

        <HalliburtonChart />

        <p className="text-stone-700 text-lg mb-4">
          The <strong>Iraq Study Group</strong>, a bipartisan panel led by James Baker (who had been so 
          honest about oil in the Gulf War), recommended in 2006 that the US help Iraq pass a new oil 
          law that would open its reserves to foreign investment. The proposed law — drafted with 
          significant US and UK input — would have given international oil companies unprecedented 
          access to Iraqi reserves through production sharing agreements. Iraqi unions and parliament 
          members opposed it as a giveaway. It never passed, but the pressure revealed the priority.
        </p>
      </section>

      {/* Section: Petrodollar */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Petrodollar: Oil as the Foundation of American Power
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Understanding why the US fights oil wars requires understanding the <strong>petrodollar system</strong>. 
          In 1971, Nixon ended the gold standard, severing the dollar&apos;s link to a physical commodity. 
          The dollar needed a new anchor to maintain its status as the world&apos;s reserve currency. 
          That anchor became oil.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          In 1974, Secretary of State Henry Kissinger struck a deal with Saudi Arabia: the Saudis would 
          price all oil sales exclusively in US dollars and invest their surplus revenue in US Treasury bonds. 
          In exchange, the US would provide military protection to the Saudi regime. Other OPEC nations 
          followed. Virtually overnight, every country on Earth needed US dollars to buy oil — creating 
          permanent global demand for the dollar.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          This system gives the United States an extraordinary privilege: it can print money to fund 
          deficits because the world needs dollars. It can impose financial sanctions because the global 
          financial system runs on dollars. It can borrow at artificially low rates because foreign 
          governments hold trillions in dollar reserves. The petrodollar system is the invisible foundation 
          of American economic power — and it is maintained by military force.
        </p>

        <div className="bg-stone-100 rounded-lg p-6 my-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">The Petrodollar Timeline</h3>
          <div className="space-y-3">
            {petrodollarTimeline.map((item) => (
              <div key={item.year} className="flex gap-4">
                <span className="text-red-800 font-bold whitespace-nowrap">{item.year}</span>
                <span className="text-stone-700">{item.event}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-stone-700 text-lg mb-4">
          Notice the pattern: <strong>every leader who threatened to price oil in a currency other than 
          the dollar was removed by force</strong>. Saddam switched to euros in 2000 — invaded in 2003. 
          Gaddafi proposed a gold dinar for African oil — NATO bombed Libya in 2011. Iran opened an 
          oil bourse trading in euros and yuan — sanctioned and threatened with military action. This 
          is not a conspiracy theory. It is the documented intersection of monetary policy and military policy.
        </p>
      </section>

      {/* Section: Pipeline Politics */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Pipeline Politics: Syria, Afghanistan &amp; the Wars They Don&apos;t Explain
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Syria:</strong> The civil war that began in 2011 is often explained through the lens 
          of Arab Spring protests and Assad&apos;s brutality. Less discussed is the pipeline competition: 
          Qatar proposed a natural gas pipeline through Saudi Arabia, Jordan, Syria, and Turkey to Europe — 
          which would have broken Russia&apos;s energy stranglehold on Europe. Assad refused the pipeline, 
          preferring an alternative route from Iran through Iraq and Syria. The states backing the 
          &ldquo;rebels&rdquo; (Qatar, Saudi Arabia, Turkey, US) aligned perfectly with the states that 
          wanted the Qatar pipeline. The states backing Assad (Russia, Iran) aligned with the alternative route.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Afghanistan:</strong> In the 1990s, the US negotiated with the Taliban for a natural 
          gas pipeline from Turkmenistan through Afghanistan to Pakistan and India (TAPI). Unocal, a 
          US energy company, lobbied aggressively. A Taliban delegation visited Houston in 1997. 
          Negotiations collapsed. After the 2001 invasion and installation of a US-friendly government, 
          the TAPI pipeline agreement was signed in 2010. Construction began in 2018. The Taliban retook 
          Afghanistan in 2021. The pipeline&apos;s future is uncertain.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          <strong>Trump said the quiet part out loud</strong> in 2019 when he deployed troops to guard 
          Syrian oil fields: &ldquo;We&apos;re keeping the oil. We have the oil. The oil is secure. We 
          left troops behind only for the oil.&rdquo; As of 2025, approximately 900 US troops remain in 
          northeastern Syria — guarding oil fields that produce about 100,000 barrels per day. The oil 
          is sold by Kurdish-led forces, with revenue ostensibly going to the Syrian Democratic Forces. 
          The legality under international law is questionable at best.
        </p>
      </section>

      {/* War-Oil Connection Table */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Every War, Every Time: The Oil Connection
        </h2>
        <div className="space-y-6">
          {warOilConnections.map((item) => (
            <div key={item.war} className="bg-stone-100 rounded-lg p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-900 mb-2">{item.war}</h3>
              <p className="text-stone-700 mb-2"><strong>The oil angle:</strong> {item.oil}</p>
              <p className="text-stone-600 text-sm"><strong>The consequence:</strong> {item.consequence}</p>
            </div>
          ))}
        </div>
      </section>

      <MilitaryOilSpendingChart />

      {/* Section: Energy Independence Paradox */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Paradox: Energy Independence, Endless War
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Here is the most damning fact of all: <strong>the United States no longer needs Middle Eastern 
          oil</strong>. Thanks to the fracking revolution, US oil production has more than doubled since 
          2010. In 2018, the US surpassed both Saudi Arabia and Russia to become the world&apos;s 
          largest oil producer at over 13 million barrels per day. The US is now a net energy exporter.
        </p>

        <USProductionChart />

        <p className="text-stone-700 text-lg mb-4">
          Yet the military infrastructure built to protect oil remains fully operational. The Fifth Fleet 
          patrols the Strait of Hormuz. CENTCOM operates from bases across the Gulf. 900 troops guard 
          Syrian oil fields. The Carter Doctrine — written when the US imported 40% of its oil from the 
          Middle East — still governs US military posture in a world where the US imports almost none.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The reason is that the war infrastructure has become self-sustaining. Defense contractors who 
          built their businesses on Middle East deployments have no incentive to leave. The petrodollar 
          system still requires Gulf state cooperation. Saudi Arabia remains the linchpin — and the US 
          continues to sell it <Link href="/analysis/war-profiteering" className="text-red-800 hover:underline">hundreds of billions in weapons</Link> to 
          maintain the relationship. The original purpose (oil security) has been achieved by other means 
          (fracking). The military apparatus remains because it serves other interests: weapons sales, 
          strategic positioning against China, and the sheer momentum of an empire that doesn&apos;t know 
          how to stop.
        </p>
      </section>

      {/* Section: Who Benefits */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Follow the Money: Who Benefits from Oil Wars
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          The beneficiaries of oil wars are remarkably consistent:
        </p>
        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-6">
          <div className="space-y-4">
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Oil companies:</strong> ExxonMobil&apos;s revenue rose from $213B (2002) to $394B (2008) during the Iraq War. Shell, BP, and Chevron all hit record profits during peak conflict years.</span>
            </div>
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Defense contractors:</strong> Halliburton stock price went from $10 (2003) to $51 (2008). Lockheed Martin, Raytheon, and Boeing all saw record revenues during Iraq and Afghanistan.</span>
            </div>
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">The revolving door:</strong> Dick Cheney (Halliburton CEO → VP). Condoleezza Rice (Chevron board → National Security Advisor — they named an oil tanker after her). Rex Tillerson (ExxonMobil CEO → Secretary of State).</span>
            </div>
            <div className="flex gap-3 text-stone-300">
              <span className="text-red-500 mt-1">▸</span>
              <span><strong className="text-white">Gulf monarchies:</strong> Saudi Arabia, UAE, Qatar, and Kuwait maintain their power through US military protection. In exchange, they buy US weapons, price oil in dollars, and invest in US bonds.</span>
            </div>
          </div>
        </div>
        <p className="text-stone-700 text-lg mb-4">
          The losers are equally consistent: the 500,000+ dead in Iraq. The millions of refugees. The 
          veterans with PTSD and traumatic brain injuries. The American taxpayers who funded $3 trillion 
          for Iraq and $8 trillion for the War on Terror. The people who live on top of the oil that 
          other people decided to fight for.
        </p>
      </section>

      {/* Bottom Line */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-400">The Bottom Line</h2>
        <p className="text-stone-300 text-lg mb-4">
          The pattern is clear. When a country threatens oil supplies or the petrodollar system, the 
          United States intervenes militarily. When it doesn&apos;t threaten oil — Rwanda, Myanmar, 
          Darfur — the US watches. Oil doesn&apos;t explain every foreign policy decision, but it 
          explains the ones that involve aircraft carriers, ground invasions, and regime change.
        </p>
        <p className="text-stone-300 text-lg">
          The US is now energy independent. It produces more oil than it consumes. The original strategic 
          rationale for Middle East wars no longer exists. The wars continue anyway — because the 
          infrastructure of empire, once built, serves the interests of those who profit from it, not 
          the people who pay for it.
        </p>
      </div>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-stone-600 text-sm">
          <li>• US Energy Information Administration (EIA), Annual Energy Review</li>
          <li>• BP Statistical Review of World Energy, 2024</li>
          <li>• RAND Corporation, &ldquo;Imported Oil and U.S. National Security&rdquo;</li>
          <li>• Special Inspector General for Iraq Reconstruction (SIGIR), Final Report</li>
          <li>• Congressional Research Service, &ldquo;Halliburton/KBR Iraq Contracts&rdquo;</li>
          <li>• Brown University Costs of War Project</li>
          <li>• Yergin, Daniel. &ldquo;The Prize: The Epic Quest for Oil, Money &amp; Power&rdquo;</li>
          <li>• Bacevich, Andrew. &ldquo;America&apos;s War for the Greater Middle East&rdquo;</li>
          <li>• Iraq Study Group Report, 2006</li>
          <li>• Carter, Jimmy. State of the Union Address, January 23, 1980</li>
        </ul>
      </section>

      {/* Related */}
      <div className="bg-stone-100 rounded-lg p-6 my-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Related Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/analysis/war-profiteering" className="text-red-800 hover:text-red-600 font-medium">
            → War Is a Racket: Who Gets Rich
          </Link>
          <Link href="/analysis/lies-that-started-wars" className="text-red-800 hover:text-red-600 font-medium">
            → Lies That Started Wars
          </Link>
          <Link href="/analysis/private-military" className="text-red-800 hover:text-red-600 font-medium">
            → Private Military Contractors
          </Link>
          <Link href="/analysis/what-could-we-buy" className="text-red-800 hover:text-red-600 font-medium">
            → What $11.6 Trillion Could Have Bought
          </Link>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
