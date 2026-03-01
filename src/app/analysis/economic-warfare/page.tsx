import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'Economic Warfare — Sanctions, SWIFT, and the Weaponized Dollar',
  description: 'CHIPS Act: $52B. Frozen Russian assets: $300B. SWIFT weaponization. Dollar hegemony. De-dollarization. Crypto as sanctions evasion. Economic coercion is still coercion.',
  openGraph: {
    title: 'Economic Warfare — Sanctions, SWIFT, and the Weaponized Dollar',
    description: '$300B in frozen Russian assets. $52B CHIPS Act. 80% of global trade in dollars. Economic weapons may be more destructive than bombs.',
    url: 'https://www.warcosts.org/analysis/economic-warfare',
  },
}

const frozenAssets = [
  { country: 'Russia', amount: '$300B+', year: '2022', detail: 'Central bank reserves frozen by US, EU, and allies after Ukraine invasion. Largest asset freeze in history. Debate ongoing about seizing (not just freezing) the assets — EU approved using interest (~$3B/year) for Ukraine. Full seizure would set unprecedented precedent that terrifies every country holding reserves in Western banks.' },
  { country: 'Afghanistan', amount: '$7B', year: '2021', detail: 'Afghan central bank reserves in the New York Fed frozen after Taliban takeover. Biden tried to split: $3.5B for 9/11 victims (sued Afghan government), $3.5B for humanitarian aid. Meanwhile, Afghanistan faces mass starvation. Economists estimated freezing caused more civilian harm than 20 years of war.' },
  { country: 'Venezuela', amount: '$1B+ (gold)', year: '2019', detail: 'Bank of England refused to return Venezuelan gold reserves held in London. US recognized Juan Guaidó as president, giving him nominal control of Venezuelan assets abroad. Maduro couldn\'t access his own country\'s gold. Guaidó had no democratic mandate (never won a presidential election).' },
  { country: 'Iran', amount: '$100B+ (estimated)', year: '2018 (re-imposed)', detail: 'Iranian assets frozen since 1979 revolution. JCPOA (2015) unfroze some; Trump re-froze them. Iran can\'t access dollars for international trade. Forced to use barter, yuan, and cryptocurrency. Obama sent $1.7B in cash on pallets — it was Iran\'s own money being returned.' },
  { country: 'Libya', amount: '$67B', year: '2011', detail: 'Gaddafi\'s sovereign wealth fund frozen during NATO intervention. After his overthrow and murder, much of the money disappeared into competing Libyan factions. An entire country\'s savings — confiscated and lost.' },
  { country: 'Syria', amount: 'Unknown', year: '2011+', detail: 'Comprehensive sanctions froze Syrian government assets. Caesar Act (2020) imposed secondary sanctions on anyone doing business with Syria. Even humanitarian organizations struggle to operate. Aid workers can\'t transfer money for food and medicine.' },
]

const chipWar = [
  { action: 'CHIPS Act (Aug 2022)', cost: '$52.7B', detail: 'Subsidies for semiconductor manufacturing in the US. TSMC, Samsung, Intel building fabs on American soil. Goal: reduce dependence on Taiwan (which produces 90% of advanced chips). But it takes 3-5 years to build a fab and trained workforce doesn\'t exist yet.' },
  { action: 'October 2022 Export Controls', cost: 'Incalculable', detail: 'Banned export of advanced AI chips (NVIDIA A100/H100) and chip-making equipment to China. Biden administration official called it "strangling with an intent to kill" China\'s AI industry. Most aggressive tech restriction since Cold War COCOM controls.' },
  { action: 'ASML Restrictions', cost: 'Multi-billion', detail: 'US pressured Netherlands to ban ASML — the world\'s only maker of EUV lithography machines ($150M+ each) — from selling to China. Without EUV, China can\'t manufacture chips below 7nm. A single Dutch company became a chokepoint in great power competition.' },
  { action: 'China\'s Response', cost: '$150B+ in subsidies', detail: 'China launched massive domestic chip investment (Big Fund I & II). Huawei\'s Mate 60 Pro (2023) surprised analysts with a domestically produced 7nm chip — cruder than TSMC but functional. Sanctions accelerated the timeline for Chinese self-sufficiency.' },
  { action: 'Japan & South Korea Restrictions', cost: 'Billions in lost trade', detail: 'US pressured allies to restrict chip-related exports. Japan restricted 23 categories of semiconductor equipment (2023). South Korea limited chip technology transfers. The free trade system being dismantled in real-time.' },
]

const dollarWeapon = [
  { aspect: 'Reserve currency status', data: '~58% of global reserves held in dollars (down from 71% in 2000)', detail: 'The dollar\'s reserve status means the US can borrow cheaply, run persistent deficits, and fund its military. It\'s America\'s greatest economic asset — and weaponizing it threatens to destroy it.' },
  { aspect: 'SWIFT system', data: '11,000+ financial institutions, 200+ countries', detail: 'SWIFT (Society for Worldwide Interbank Financial Telecommunication) is the messaging system for international money transfers. Not technically American-controlled (headquartered in Belgium) but the US has effective veto power. Cutting a country off SWIFT is a financial death sentence.' },
  { aspect: 'Trade invoicing', data: '~80% of global trade invoiced in dollars', detail: 'Even when the US isn\'t involved in a transaction, it\'s often denominated in dollars — which means it flows through US-regulated banks and is subject to US law. This gives the US extraterritorial jurisdiction over essentially all international commerce.' },
  { aspect: 'Correspondent banking', data: 'Nearly all dollar transactions clear through New York', detail: 'When a bank in Germany pays a bank in Japan in dollars, the transaction clears through correspondent banks in New York. The US Treasury can see — and block — virtually any dollar transaction on Earth.' },
]

const deDollarization = [
  { actor: 'BRICS (Brazil, Russia, India, China, South Africa + new members)', action: 'New Development Bank, discussions of common currency or settlement system', status: 'Added 6 new members in 2024 (Egypt, Ethiopia, Iran, Saudi Arabia, UAE). Combined GDP (PPP) exceeds G7. But internal disagreements and the dollar\'s network effects make a BRICS currency unlikely near-term.' },
  { actor: 'China-Saudi Arabia', action: 'Yuan-denominated oil contracts', status: 'First yuan-settled oil trade in 2023 (via Shanghai Petroleum Exchange). Tiny fraction of total oil trade but symbolically significant — the "petrodollar" system that has underpinned dollar hegemony since 1974.' },
  { actor: 'Russia-China bilateral trade', action: 'Shifted to yuan and ruble settlement', status: '90%+ of Russia-China trade now settled in yuan or rubles (up from ~30% pre-2022). Russia forced to de-dollarize by sanctions; China gaining leverage over Russia as a result.' },
  { actor: 'India-Russia', action: 'Rupee-ruble trade for oil', status: 'India buys discounted Russian oil in non-dollar currencies. Challenges: Russia doesn\'t want rupees (limited utility), India doesn\'t want to accumulate rubles. Bilateral currency trade is clunky without the dollar as lubricant.' },
  { actor: 'Central Bank Digital Currencies', action: '130+ countries exploring CBDCs', status: 'China\'s digital yuan (e-CNY) is the most advanced. mBridge project connects central banks of China, Thailand, UAE, Hong Kong for cross-border CBDC settlement — bypassing SWIFT entirely.' },
]

const energyWeapon = [
  { event: 'Arab Oil Embargo (1973)', detail: 'OPEC cut oil production and embargoed the US over support for Israel. Oil prices quadrupled. Gas lines, recession, inflation. Demonstrated that energy could be a weapon. Led to the creation of the Strategic Petroleum Reserve and petrodollar system.' },
  { event: 'Russia-Ukraine gas disputes (2006, 2009, 2014)', detail: 'Russia cut gas supplies to Ukraine — affecting downstream European customers. Europe depended on Russian gas transiting Ukraine. Each dispute demonstrated Europe\'s energy vulnerability and Russia\'s willingness to use it.' },
  { event: 'Nord Stream 1 & 2', detail: 'Nord Stream 1 (2011): Direct pipeline from Russia to Germany, bypassing Ukraine. Nord Stream 2: $11B pipeline completed 2021, never opened. Germany\'s dependence on Russian gas (55% of supply) constrained its response to Russian aggression for years.' },
  { event: 'Nord Stream sabotage (Sept 2022)', detail: 'Explosions destroyed 3 of 4 Nord Stream pipeline segments. Swedish, Danish, and German investigations opened. Seymour Hersh reported US responsibility. German report implicated a Ukrainian team. No official culprit identified. The largest act of energy infrastructure sabotage in history — and nobody has been held accountable.' },
  { event: 'Russia weaponizes gas (2022)', detail: 'After Ukraine invasion, Russia cut gas supplies to Europe. Prices spiked 1,000%+ (from ~€20/MWh to €340/MWh). European industry faced closure. Emergency LNG imports from US cost 3-4× pipeline gas. Europe spent ~€800B on energy crisis (2022-2023).' },
]

export default function EconomicWarfarePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd
        title="Economic Warfare — Sanctions, SWIFT, and the Weaponized Dollar"
        description="$300B frozen Russian assets. $52B CHIPS Act. The dollar as a weapon — and what happens when countries fight back."
        slug="economic-warfare"
      />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Economic Warfare' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          Economic Warfare
        </h1>
        <p className="text-xl text-stone-300 mb-4">Sanctions, SWIFT, and the Weaponized Dollar</p>
        <p className="text-stone-400 text-lg">
          In February 2022, the United States froze <strong className="text-white">$300 billion</strong> in
          Russian central bank reserves — the largest asset seizure in history. It cut Russia from SWIFT,
          the global financial messaging system. It banned exports of advanced semiconductors.
          Every country on Earth watched and thought the same thing: &quot;If they can do this to Russia,
          they can do this to me.&quot; The dollar is America&apos;s most powerful weapon — and every time
          Washington fires it, more countries start building bunkers.
        </p>
      </div>

      <ShareButtons title="Economic Warfare — Sanctions, SWIFT, and the Weaponized Dollar" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '$300B+', label: 'Frozen Russian Assets', sub: 'Largest asset freeze in history' },
          { val: '$52.7B', label: 'CHIPS Act', sub: 'Subsidies to counter China\'s chip industry' },
          { val: '~58%', label: 'Global Reserves in Dollars', sub: 'Down from 71% in 2000' },
          { val: '39', label: 'Countries Under US Sanctions', sub: 'Covering ~1/3 of global population' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* SWIFT Section */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          SWIFT: The Financial Nuclear Option
        </h2>
        <p className="text-stone-700 mb-4">
          SWIFT (Society for Worldwide Interbank Financial Telecommunication) connects 11,000+ financial
          institutions in 200+ countries. It&apos;s not a payment system — it&apos;s the messaging system
          that tells banks where to send money. Being cut off from SWIFT means being cut off from the
          global financial system.
        </p>
        <div className="bg-stone-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-stone-900 mb-2">The Russia Precedent</h3>
          <p className="text-stone-700 text-sm mb-3">
            In February 2022, the US and EU cut major Russian banks from SWIFT. The results — and limits —
            were instructive:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span><strong>Immediate impact:</strong> Russian banks couldn&apos;t process international transactions. The ruble crashed 50% in days. Russian stock market closed for a month.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span><strong>Adaptation:</strong> Russia shifted trade to yuan, rubles, and barter. India bought Russian oil in dirhams. Turkey became a sanctions evasion hub. China&apos;s CIPS (Cross-Border Interbank Payment System) saw usage surge.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span><strong>Exceptions:</strong> Energy transactions were exempt (Europe needed Russian gas). Gazprombank stayed connected to SWIFT. The weapon was powerful but applied selectively to avoid self-harm.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span><strong>Unintended consequence:</strong> Every country watching began diversifying away from dollar dependence. China accelerated CIPS development. BRICS explored alternative payment systems. The precedent may have done more long-term damage to dollar hegemony than to Russia.</span>
            </li>
          </ul>
        </div>
        <div className="bg-stone-50 rounded-lg p-4">
          <h3 className="font-bold text-stone-900 mb-2">Previous Uses</h3>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• <strong>Iran (2012, 2018):</strong> First country disconnected from SWIFT. Iranian banks cut off, oil exports dropped 50%+, economy contracted sharply. Reinstated briefly under JCPOA, re-imposed by Trump.</li>
            <li>• <strong>North Korea:</strong> Effectively excluded from global finance. Forces reliance on cash smuggling, cryptocurrency, and Chinese intermediaries.</li>
            <li>• <strong>Threat alone is powerful:</strong> The mere threat of SWIFT disconnection pressured countries to comply with sanctions even when they disagreed with the policy.</li>
          </ul>
        </div>
      </div>

      {/* Frozen Assets */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Frozen Assets: When Saving in Dollars Becomes a Trap
        </h2>
        <p className="text-stone-700 mb-4">
          Countries hold foreign reserves — typically in dollars, euros, or gold in Western banks — as a
          financial safety net. Freezing those reserves is like padlocking someone&apos;s savings account.
          The US has done it to multiple countries.
        </p>
        <div className="space-y-4">
          {frozenAssets.map(item => (
            <div key={item.country} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-bold text-stone-900">{item.country}</h3>
                <span className="text-red-700 font-bold">{item.amount}</span>
                <span className="text-stone-500 text-sm">({item.year})</span>
              </div>
              <p className="text-stone-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <p className="text-stone-800 text-sm">
            <strong>The trust problem:</strong> International reserves work because countries trust that their
            money is safe in Western banks. Every time the US freezes assets, that trust erodes. If your savings
            can be confiscated for political reasons, why save in dollars? This is why central banks bought more
            gold in 2022-2023 than any year since 1967 — gold can&apos;t be frozen by executive order.
          </p>
        </div>
      </div>

      {/* Dollar as Weapon */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Weaponized Dollar
        </h2>
        <p className="text-stone-700 mb-4">
          The US dollar&apos;s dominance in global trade and reserves gives Washington extraordinary power
          over the world economy. It&apos;s not just that America is rich — it&apos;s that the plumbing
          of global finance runs through American-regulated banks.
        </p>
        <div className="space-y-4">
          {dollarWeapon.map(item => (
            <div key={item.aspect} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-bold text-stone-900">{item.aspect}</h3>
                <span className="text-red-700 font-bold text-sm">{item.data}</span>
              </div>
              <p className="text-stone-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chip War */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Chip War: Semiconductors as Strategic Weapons
        </h2>
        <p className="text-stone-700 mb-4">
          Semiconductors are the oil of the 21st century. Advanced chips power AI, weapons systems,
          communications, and virtually every modern technology. The US has decided that China must not
          have access to cutting-edge chips — and it&apos;s willing to shatter the global free trade
          system to enforce that.
        </p>
        <div className="space-y-4">
          {chipWar.map(item => (
            <div key={item.action} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-bold text-stone-900">{item.action}</h3>
                <span className="text-red-700 font-bold">{item.cost}</span>
              </div>
              <p className="text-stone-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-50 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-900 mb-2">The Taiwan Chokepoint</h3>
          <p className="text-stone-700 text-sm">
            Taiwan Semiconductor Manufacturing Company (TSMC) produces <strong>90%+ of the world&apos;s
            most advanced chips</strong> (sub-7nm). This makes Taiwan the most strategically important
            island on Earth. A Chinese invasion or blockade of Taiwan would cripple the global tech
            industry — iPhones, AI training, military systems, automotive, medical devices — everything
            stops. This is why the US is spending $52B to build domestic fabs and why some analysts call
            Taiwan&apos;s chip industry a &quot;silicon shield&quot; against Chinese invasion.
          </p>
        </div>
      </div>

      {/* De-dollarization */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          De-Dollarization: The World Builds Alternatives
        </h2>
        <p className="text-stone-700 mb-4">
          Every time the US weaponizes the dollar, more countries seek alternatives. De-dollarization is
          slow and the dollar remains dominant — but the trend is accelerating.
        </p>
        <div className="space-y-4">
          {deDollarization.map(item => (
            <div key={item.actor} className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 mb-1">{item.actor}</h3>
              <p className="text-stone-700 text-sm mb-1"><strong>Action:</strong> {item.action}</p>
              <p className="text-stone-600 text-sm">{item.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Energy as Weapon */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Energy as a Weapon
        </h2>
        <p className="text-stone-700 mb-4">
          Energy has been weaponized since the 1973 oil embargo. But the scale has grown — and the most
          dramatic act of energy warfare in history remains officially unsolved.
        </p>
        <div className="space-y-4">
          {energyWeapon.map(item => (
            <div key={item.event} className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 mb-1">{item.event}</h3>
              <p className="text-stone-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rare Earths */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Rare Earth Dependencies: China&apos;s Hidden Leverage
        </h2>
        <p className="text-stone-700 mb-4">
          China controls 60%+ of rare earth mining and 85%+ of rare earth processing. These minerals
          are essential for smartphones, electric vehicles, wind turbines, and military weapons systems
          (F-35 fighters require 920 lbs of rare earth materials each).
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">China&apos;s Dominance</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• <strong>60%+</strong> of global rare earth mining</li>
              <li>• <strong>85%+</strong> of rare earth processing and refining</li>
              <li>• <strong>90%+</strong> of rare earth magnet production</li>
              <li>• Deliberately built dominance over decades with subsidies and low environmental standards</li>
              <li>• Briefly restricted exports to Japan in 2010 over territorial dispute — prices spiked 10×</li>
            </ul>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Military Dependencies</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• F-35 fighter: <strong>920 lbs</strong> of rare earth materials</li>
              <li>• Virginia-class submarine: <strong>9,200 lbs</strong></li>
              <li>• Precision-guided munitions, night vision, radar — all require rare earths</li>
              <li>• Irony: US military depends on Chinese supply chains for weapons aimed at deterring China</li>
            </ul>
          </div>
        </div>
        <p className="text-stone-700 text-sm mt-4">
          In 2023, China restricted exports of gallium and germanium (critical for chips and solar panels)
          in response to US chip export controls. The tit-for-tat escalation of supply chain weaponization
          is accelerating — with no clear endgame.
        </p>
      </div>

      {/* Crypto as Sanctions Evasion */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Cryptocurrency: The Sanctions Escape Hatch
        </h2>
        <p className="text-stone-700 mb-4">
          Cryptocurrency was designed to operate outside government control. Sanctioned nations have noticed:
        </p>
        <ul className="space-y-3 text-stone-700">
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>North Korea:</strong> Stole an estimated $1.7 billion in cryptocurrency in 2022 alone (Chainalysis). Lazarus Group hacking operations fund missile programs. $3 billion+ stolen total since 2017.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>Iran:</strong> Uses Bitcoin mining (powered by subsidized electricity) to generate revenue outside the dollar system. Estimated 4.5% of global Bitcoin mining at peak. Also uses crypto for oil trade settlement.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>Russia:</strong> After SWIFT disconnection, explored crypto for international trade. Russian firms reportedly used stablecoins (USDT/Tether) for cross-border transactions. The irony: evading dollar sanctions using a dollar-pegged stablecoin.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>Venezuela:</strong> Launched the Petro (state cryptocurrency backed by oil reserves) in 2018. Failed — nobody trusted it. But individual Venezuelans use Bitcoin to preserve savings and transact outside the collapsed bolivar.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>The dilemma:</strong> The US government wants to maintain sanctions effectiveness, which requires financial surveillance. Cryptocurrency undermines that surveillance. This creates pressure to regulate or ban crypto — which conflicts with financial freedom and innovation.</span>
          </li>
        </ul>
      </div>

      {/* Libertarian Analysis */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-900">
          The Libertarian Case: Free Trade, Not Financial Warfare
        </h2>
        <div className="space-y-4 text-stone-700">
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Economic Coercion Is Still Coercion</h3>
            <p className="text-sm">
              Libertarians oppose the initiation of force — and sanctions are force by another name. When the US
              freezes a country&apos;s assets, bans its trade, or cuts it from financial systems, the results
              are real: shortages, poverty, death. A Lancet study estimated 40,000 excess deaths in Venezuela
              from 2017-2018 sanctions alone. Afghan children starved when the US froze $7 billion in reserves.
              The weapon is invisible but the victims are real people.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Sanctions Punish Populations, Not Regimes</h3>
            <p className="text-sm">
              Cuba has been under sanctions for 60+ years. The Castros died in power. Iran has been sanctioned
              since 1979. The regime is still there. North Korea has been sanctioned since 1950. The Kim dynasty
              is on its third generation. Sanctions don&apos;t topple governments — they impoverish populations
              while giving regimes an external enemy to blame. The people who suffer most are always ordinary
              citizens, not the leaders sanctions supposedly target.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Weaponizing the Dollar Risks America&apos;s Greatest Asset</h3>
            <p className="text-sm">
              The dollar&apos;s reserve status lets the US borrow at lower rates, run persistent deficits, and
              fund its military. It&apos;s worth trillions in economic advantage. Every time Washington weaponizes
              the dollar — freezing assets, cutting SWIFT access, imposing secondary sanctions — it incentivizes
              the world to build alternatives. De-dollarization is slow but accelerating. If the dollar loses
              reserve status, the US loses the ability to run deficits, interest rates spike, and the economic
              foundation of American power crumbles. Sanctions may win battles but lose the war.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Free Trade Is the Best Peace Guarantee</h3>
            <p className="text-sm">
              Bastiat wrote: &quot;When goods don&apos;t cross borders, soldiers will.&quot; The chip war proves
              it. The US banned chip exports to China; China restricted rare earth exports in response. Both
              countries are now spending billions on autarky (self-sufficiency) that free trade provided cheaply.
              The CHIPS Act alone costs $52.7 billion — for chips that TSMC was already making at market prices.
              Economic warfare makes everyone poorer and increases the risk of actual warfare.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Cryptocurrency Is Financial Self-Defense</h3>
            <p className="text-sm">
              From a libertarian perspective, cryptocurrency represents financial freedom — the ability to transact
              without government permission. Yes, sanctioned regimes use crypto. But so do dissidents in
              authoritarian countries, refugees, and anyone excluded from the banking system. The government
              response — regulate, surveil, restrict — is the same playbook used against every technology that
              threatens state control. Banning crypto to enforce sanctions means sacrificing financial freedom
              for the ability to wage economic war.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-stone-300 mb-4">
          Economic warfare has become America&apos;s weapon of choice — arguably more destructive than
          bombs. The US has frozen over $400 billion in sovereign assets, sanctioned 39 countries, cut nations
          from SWIFT, banned technology exports, and weaponized the dollar system that 80% of global trade
          depends on.
        </p>
        <p className="text-stone-300 mb-4">
          In the short term, it works. Russia&apos;s economy was damaged. Iran&apos;s oil exports dropped.
          China&apos;s chip industry was set back years. But every use of economic weapons accelerates the
          search for alternatives. BRICS is expanding. De-dollarization is accelerating. China is building
          parallel financial infrastructure. Central banks are hoarding gold.
        </p>
        <p className="text-stone-300">
          The dollar&apos;s reserve status is America&apos;s single greatest economic asset — worth more than
          any weapon system. Every sanctions package, every asset freeze, every SWIFT disconnection chips away
          at the trust that makes dollar dominance possible. We&apos;re spending our greatest strategic advantage
          to punish countries we could engage through trade. Bastiat was right: when goods don&apos;t cross
          borders, soldiers will.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Sources &amp; Further Reading</h2>
        <ul className="space-y-1 text-stone-600 text-sm">
          <li>• Chris Miller, &quot;Chip War: The Fight for the World&apos;s Most Critical Technology&quot; (2022)</li>
          <li>• Nicholas Mulder, &quot;The Economic Weapon: The Rise of Sanctions as a Tool of Modern War&quot; (2022)</li>
          <li>• Treasury Department, Office of Foreign Assets Control (OFAC) sanctions programs</li>
          <li>• IMF, Currency Composition of Official Foreign Exchange Reserves (COFER) data</li>
          <li>• Chainalysis, &quot;The 2023 Crypto Crime Report&quot; — North Korean theft data</li>
          <li>• Congressional Research Service, &quot;The CHIPS Act&quot; (2023)</li>
          <li>• Atlantic Council, Dollar Dominance Monitor (2024)</li>
          <li>• Seymour Hersh, &quot;How America Took Out the Nord Stream Pipeline&quot; (2023)</li>
          <li>• Lancet, &quot;Economic Sanctions, Health, and Access to Humanitarian Assistance in Venezuela&quot; (2019)</li>
          <li>• Frédéric Bastiat, &quot;Economic Harmonies&quot; — on trade and peace (1850)</li>
        </ul>
      </div>

      <div className="text-center text-stone-500 text-sm mt-8 mb-4">
        <p>
          <Link href="/analysis/hybrid-warfare" className="text-red-600 hover:underline">← Hybrid Warfare</Link>
          {' · '}
          <Link href="/analysis" className="text-red-600 hover:underline">All Analysis</Link>
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
