import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'
import RelatedArticles from '@/components/RelatedArticles'

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
  { country: 'North Korea', amount: '$2B+ (estimated)', year: '2006+', detail: 'Multiple rounds of asset freezes and banking restrictions. Banco Delta Asia incident (2005) froze $25M in North Korean accounts — but the precedent scared other banks from dealing with North Korea. Financial isolation forces reliance on cash smuggling and crypto theft.' },
  { country: 'Myanmar', amount: '$1B+ (estimated)', year: '2021', detail: 'Military coup triggered asset freezes on central bank reserves and state enterprises. Facebook banned Myanmar military-linked entities. Oil and gas revenues ($1.5B annually) became key funding source as other revenue streams were cut.' },
]

const chipWar = [
  { action: 'CHIPS Act (Aug 2022)', cost: '$52.7B', detail: 'Subsidies for semiconductor manufacturing in the US. TSMC, Samsung, Intel building fabs on American soil. Goal: reduce dependence on Taiwan (which produces 90% of advanced chips). But it takes 3-5 years to build a fab and trained workforce doesn\'t exist yet.' },
  { action: 'October 2022 Export Controls', cost: 'Incalculable', detail: 'Banned export of advanced AI chips (NVIDIA A100/H100) and chip-making equipment to China. Biden administration official called it "strangling with an intent to kill" China\'s AI industry. Most aggressive tech restriction since Cold War COCOM controls.' },
  { action: 'ASML Restrictions', cost: 'Multi-billion', detail: 'US pressured Netherlands to ban ASML — the world\'s only maker of EUV lithography machines ($150M+ each) — from selling to China. Without EUV, China can\'t manufacture chips below 7nm. A single Dutch company became a chokepoint in great power competition.' },
  { action: 'China\'s Response', cost: '$150B+ in subsidies', detail: 'China launched massive domestic chip investment (Big Fund I & II). Huawei\'s Mate 60 Pro (2023) surprised analysts with a domestically produced 7nm chip — cruder than TSMC but functional. Sanctions accelerated the timeline for Chinese self-sufficiency.' },
  { action: 'Japan & South Korea Restrictions', cost: 'Billions in lost trade', detail: 'US pressured allies to restrict chip-related exports. Japan restricted 23 categories of semiconductor equipment (2023). South Korea limited chip technology transfers. The free trade system being dismantled in real-time.' },
  { action: 'Huawei Entity List (2019)', cost: '$30B+ revenue loss', detail: 'Huawei cut off from US suppliers including Google (Android), Qualcomm (chips), Intel. Revenue dropped from $136B (2019) to $92B (2021). Forced to sell Honor phone brand. Accelerated China\'s push for tech independence.' },
  { action: 'TikTok Threats & Bans', cost: 'Unknown', detail: 'Trump tried to ban TikTok (2020), blocked by courts. Biden required ByteDance to sell or face ban (2024). Montana banned TikTok statewide (struck down by federal court). India banned TikTok permanently (2020) — 200M users lost.' },
]

const dollarWeapon = [
  { aspect: 'Reserve currency status', data: '~58% of global reserves held in dollars (down from 71% in 2000)', detail: 'The dollar\'s reserve status means the US can borrow cheaply, run persistent deficits, and fund its military. It\'s America\'s greatest economic asset — and weaponizing it threatens to destroy it.' },
  { aspect: 'SWIFT system', data: '11,000+ financial institutions, 200+ countries', detail: 'SWIFT (Society for Worldwide Interbank Financial Telecommunication) is the messaging system for international money transfers. Not technically American-controlled (headquartered in Belgium) but the US has effective veto power. Cutting a country off SWIFT is a financial death sentence.' },
  { aspect: 'Trade invoicing', data: '~80% of global trade invoiced in dollars', detail: 'Even when the US isn\'t involved in a transaction, it\'s often denominated in dollars — which means it flows through US-regulated banks and is subject to US law. This gives the US extraterritorial jurisdiction over essentially all international commerce.' },
  { aspect: 'Correspondent banking', data: 'Nearly all dollar transactions clear through New York', detail: 'When a bank in Germany pays a bank in Japan in dollars, the transaction clears through correspondent banks in New York. The US Treasury can see — and block — virtually any dollar transaction on Earth.' },
  { aspect: 'Petrodollar system', data: 'Oil priced in dollars since 1974 Saudi agreement', detail: 'Nixon ended gold convertibility (1971). Kissinger negotiated with Saudi Arabia: oil priced in dollars, Saudis buy US Treasury bonds, US provides military protection. This creates artificial dollar demand and funds US deficits.' },
  { aspect: 'Eurodollar markets', data: '$13+ trillion in offshore dollar deposits', detail: 'Dollars held outside the US banking system but still subject to US jurisdiction. Banks in London, Singapore, Hong Kong hold dollars — but US regulators can freeze them. Creates global dependence on dollar liquidity.' },
]

const sanctionsPrograms = [
  { target: 'Iran', start: '1979', scope: 'Comprehensive', cost: '$200B+ GDP loss', details: 'Started after hostage crisis. Expanded under Bush (axis of evil), partially lifted by Obama (JCPOA), re-imposed by Trump. Targets oil, banking, technology. Iran\'s economy 15-20% smaller due to sanctions.' },
  { target: 'North Korea', start: '1950 (Korean War)', scope: 'Comprehensive', cost: 'Unknown', details: 'Longest-running sanctions program. Multiple UN Security Council resolutions. Targets nuclear program, luxury goods, coal, textiles. North Korea adapts through cyber theft, illicit coal exports via China.' },
  { target: 'Cuba', start: '1960', scope: 'Comprehensive', cost: '$130B+ (Cuban govt estimate)', details: 'Trade embargo since 1960. Tightened by Helms-Burton Act (1996) with secondary sanctions on foreign companies. Obama relaxed, Trump tightened. Biden maintains Trump-era restrictions.' },
  { target: 'Russia', start: '2014 (Crimea)', scope: 'Sectoral &amp; comprehensive', cost: '$50B+ annually', details: 'Started with Crimea annexation. Escalated after Ukraine invasion (2022) to near-comprehensive. Oil price cap, SWIFT exclusions, central bank freeze. Russia adapts via China trade, sanctions evasion.' },
  { target: 'Venezuela', start: '2015', scope: 'Targeted &amp; sectoral', cost: '$30B+ oil revenue loss', details: 'Started with officials, expanded to PDVSA (state oil company), gold, central bank. Worsened economic collapse. Juan Guaidó recognized as interim president (2019-2023) to justify asset seizures.' },
  { target: 'Syria', start: '2004', scope: 'Comprehensive (Caesar Act 2020)', details: 'Started with modest measures, expanded after civil war. Caesar Act imposes secondary sanctions on reconstruction aid. Exemptions for humanitarian aid often ignored by banks fearing penalties.' },
  { target: 'Myanmar', start: '1988', scope: 'Targeted (expanded 2021)', details: 'Military junta sanctions since 1988. Lifted during democratic transition (2016). Re-imposed after 2021 coup. Targets military leaders, state enterprises, gems. Limited impact due to China trade.' },
  { target: 'Afghanistan (Taliban)', start: '1999', scope: 'Targeted &amp; comprehensive', details: 'UN sanctions since 1999. US expanded after 9/11. Taliban return (2021) triggered central bank freeze. Humanitarian exemptions in practice often blocked by overcompliant banks.' },
]

const deDollarization = [
  { actor: 'BRICS (Brazil, Russia, India, China, South Africa + new members)', action: 'New Development Bank, discussions of common currency or settlement system', status: 'Added 6 new members in 2024 (Egypt, Ethiopia, Iran, Saudi Arabia, UAE, Argentina). Combined GDP (PPP) exceeds G7. But internal disagreements and the dollar\'s network effects make a BRICS currency unlikely near-term.' },
  { actor: 'China-Saudi Arabia', action: 'Yuan-denominated oil contracts', status: 'First yuan-settled oil trade in 2023 (via Shanghai Petroleum Exchange). Tiny fraction of total oil trade but symbolically significant — the "petrodollar" system that has underpinned dollar hegemony since 1974.' },
  { actor: 'Russia-China bilateral trade', action: 'Shifted to yuan and ruble settlement', status: '90%+ of Russia-China trade now settled in yuan or rubles (up from ~30% pre-2022). Russia forced to de-dollarize by sanctions; China gaining leverage over Russia as a result.' },
  { actor: 'India-Russia', action: 'Rupee-ruble trade for oil', status: 'India buys discounted Russian oil in non-dollar currencies. Challenges: Russia doesn\'t want rupees (limited utility), India doesn\'t want to accumulate rubles. Bilateral currency trade is clunky without the dollar as lubricant.' },
  { actor: 'Central Bank Digital Currencies', action: '130+ countries exploring CBDCs', status: 'China\'s digital yuan (e-CNY) is the most advanced. mBridge project connects central banks of China, Thailand, UAE, Hong Kong for cross-border CBDC settlement — bypassing SWIFT entirely.' },
  { actor: 'Iran-Turkey trade', action: 'Gold-for-gas arrangements', status: 'Turkey bought Iranian gas, paid in gold (2012-2018). US threatened sanctions, forced Turkey to stop. Showed both the possibility and limits of dollar alternatives under US pressure.' },
  { actor: 'EU-Iran trade mechanism', action: 'INSTEX (Instrument in Support of Trade Exchanges)', status: 'Created 2019 to facilitate EU-Iran trade without US banking system. Barely functioned — only processed small humanitarian transactions. European banks too afraid of US penalties to participate.' },
]

const energyWeapon = [
  { event: 'Arab Oil Embargo (1973)', detail: 'OPEC cut oil production and embargoed the US over support for Israel. Oil prices quadrupled. Gas lines, recession, inflation. Demonstrated that energy could be a weapon. Led to the creation of the Strategic Petroleum Reserve and petrodollar system.' },
  { event: 'Russia-Ukraine gas disputes (2006, 2009, 2014)', detail: 'Russia cut gas supplies to Ukraine — affecting downstream European customers. Europe depended on Russian gas transiting Ukraine. Each dispute demonstrated Europe\'s energy vulnerability and Russia\'s willingness to use it.' },
  { event: 'Nord Stream 1 & 2', detail: 'Nord Stream 1 (2011): Direct pipeline from Russia to Germany, bypassing Ukraine. Nord Stream 2: $11B pipeline completed 2021, never opened. Germany\'s dependence on Russian gas (55% of supply) constrained its response to Russian aggression for years.' },
  { event: 'Nord Stream sabotage (Sept 2022)', detail: 'Explosions destroyed 3 of 4 Nord Stream pipeline segments. Swedish, Danish, and German investigations opened. Seymour Hersh reported US responsibility. German report implicated a Ukrainian team. No official culprit identified. The largest act of energy infrastructure sabotage in history — and nobody has been held accountable.' },
  { event: 'Russia weaponizes gas (2022)', detail: 'After Ukraine invasion, Russia cut gas supplies to Europe. Prices spiked 1,000%+ (from ~€20/MWh to €340/MWh). European industry faced closure. Emergency LNG imports from US cost 3-4× pipeline gas. Europe spent ~€800B on energy crisis (2022-2023).' },
  { event: 'Iran Strait of Hormuz threats', detail: '20% of global oil transits Strait of Hormuz. Iran repeatedly threatens closure during sanctions escalation. 2019: tanker attacks attributed to Iran. US-Iran near-war after Soleimani assassination (Jan 2020). Military escort required for shipping.' },
  { event: 'Saudi-Yemen oil infrastructure attacks', detail: 'Houthi drones hit Saudi Aramco facilities (Sept 2019), cutting 5% of global oil supply. Oil prices spiked 20% in hours. Showed vulnerability of Gulf infrastructure. Saudi retaliation hit Yemeni ports, worsening humanitarian crisis.' },
]

const cryptoSanctionsEvasion = [
  { actor: 'North Korea (Lazarus Group)', amount: '$1.7B stolen (2022)', method: 'DeFi protocol hacks, exchange breaches', impact: 'Funds missile program. Ronin Bridge hack ($625M), Harmony Bridge hack ($100M). Converts to Bitcoin, Monero via mixing services.' },
  { actor: 'Iran', amount: '4.5% of global Bitcoin mining (peak)', method: 'Subsidized electricity, Bitcoin sales', impact: 'Evades sanctions via crypto mining. Uses stablecoins for trade. Government crackdown when electrical grid strained.' },
  { actor: 'Russia', amount: 'Unknown billions', method: 'P2P trading, stablecoins, mining', impact: 'Post-SWIFT cutoff, individuals and companies use crypto. Tether (USDT) popular despite being dollar-pegged. Irony: evading dollar sanctions with dollar-backed stablecoin.' },
  { actor: 'Venezuela', amount: '$3.3B (Petro failure)', method: 'State cryptocurrency, individual adoption', impact: 'Petro (state crypto) failed — nobody trusted it. Individuals use Bitcoin to preserve savings amid hyperinflation. LocalBitcoins trading volume spiked during crisis.' },
  { actor: 'Ransomware groups', amount: '$4.1B in payments (2021)', method: 'Bitcoin, Monero payments', impact: 'Colonial Pipeline, JBS, Kaseya attacks. Often Russian-speaking but government tolerance unclear. Crypto enables instant, pseudonymous payments across borders.' },
  { actor: 'Taliban', amount: 'Unknown', method: 'Hawala + crypto hybrid', impact: 'Traditional hawala system combined with crypto for international transfers. Afghanistan central bank freeze forces alternative systems. Humanitarian aid also relies on crypto.' },
]

const tradeWarCosts = [
  { measure: 'Trump China tariffs', coverage: '$370B in Chinese goods', rate: '7.4% to 21% average tariff', cost: '$51B paid by US consumers (Tax Foundation)', impact: 'China retaliated on $185B US exports. Soybean farmers devastated. Manufacturing employment fell in tariff-protected industries.' },
  { measure: 'Steel & aluminum tariffs (Section 232)', coverage: 'Global steel (25%), aluminum (10%)', cost: '$9B annually in higher prices', impact: 'Protected 8,700 steel jobs. Cost 75,000+ jobs in steel-using industries. Net negative employment effect.' },
  { measure: 'China\'s retaliation', coverage: '$185B in US exports', rate: '5% to 25% retaliatory tariffs', impact: 'Targeted Trump-voting agricultural states. Soybean exports to China fell 85%. Required $28B in farm bailouts.' },
  { measure: 'USMCA renegotiation', coverage: 'Replaced NAFTA', cost: '$68B in compliance costs', impact: 'Modest improvements to labor standards. Required 75% North American content for auto tariff exemption. Trade creation minimal.' },
  { measure: 'Export controls on China', coverage: 'Semiconductors, AI, quantum', cost: 'Unknown billions', impact: 'US chip equipment sales to China fell 85%. Accelerated Chinese indigenous development. ASML (Dutch) sales restricted under US pressure.' },
  { measure: 'Biden "Buy American" rules', coverage: 'Federal procurement', cost: '$15B+ in higher costs', impact: 'Infrastructure spending must use domestic materials. 20-30% price premiums typical. Slower project completion.' },
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
          <h3 className="font-bold text-stone-900 mb-2">How SWIFT Works</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">Technical Structure</h4>
              <ul className="text-sm text-stone-700 space-y-1">
                <li>• Headquarters in Belgium, legally neutral</li>
                <li>• Governed by representatives from member banks</li>
                <li>• Processes 40+ million messages daily</li>
                <li>• Uses standardized MT (Message Type) formats</li>
                <li>• Operates three data centers (US, EU, Switzerland)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">US Control Mechanisms</h4>
              <ul className="text-sm text-stone-700 space-y-1">
                <li>• US banks are largest SWIFT users</li>
                <li>• Dollar transactions must clear through US banks</li>
                <li>• Treasury can pressure SWIFT via financial system access</li>
                <li>• Congress can sanction SWIFT itself if non-compliant</li>
                <li>• National security letters can demand transaction data</li>
              </ul>
            </div>
          </div>
        </div>
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

      {/* Comprehensive Sanctions Programs */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          America&apos;s Sanctions Empire: 39 Countries and Counting
        </h2>
        <p className="text-stone-700 mb-4">
          The United States currently maintains sanctions programs against 39 countries and jurisdictions —
          covering roughly one-third of the world&apos;s population. These range from targeted sanctions on
          specific individuals to comprehensive economic warfare that effectively blockades entire nations.
        </p>
        <div className="space-y-4">
          {sanctionsPrograms.map(item => (
            <div key={item.target} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-bold text-stone-900">{item.target}</h3>
                <span className="text-stone-500 text-sm">Started: {item.start}</span>
                <span className="text-red-700 font-bold text-sm">{item.scope}</span>
                {item.cost && <span className="text-red-700 font-semibold text-sm">{item.cost}</span>}
              </div>
              <p className="text-stone-600 text-sm">{item.details}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <p className="text-stone-800 text-sm">
            <strong>The sanctions industrial complex:</strong> OFAC (Office of Foreign Assets Control) employs
            200+ people and manages sanctions affecting 1/3 of humanity. The Specially Designated Nationals
            (SDN) list contains 11,000+ individuals and entities. Compliance costs for global banks exceed
            $10 billion annually — costs that are passed on to consumers worldwide.
          </p>
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
          <h3 className="font-bold text-stone-800 mb-2">The Legal Precedent Problem</h3>
          <p className="text-stone-800 text-sm mb-3">
            Asset freezes are typically justified as &quot;preserving the status quo&quot; pending resolution.
            But they create a new status quo where might makes right. Consider the contradictions:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• <strong>Venezuela:</strong> US doesn&apos;t recognize Maduro but recognizes Guaidó (who lost elections). Guaidó gets the gold.</li>
            <li>• <strong>Afghanistan:</strong> US doesn&apos;t recognize Taliban but seizes Afghan money to pay 9/11 victims. The Taliban didn&apos;t do 9/11.</li>
            <li>• <strong>Iran:</strong> US withdrew from JCPOA unilaterally but kept Iranian assets frozen. Iran had complied with the agreement.</li>
            <li>• <strong>Russia:</strong> Largest asset seizure in history. Debate about whether to use interest earnings or seize principal. Either sets precedent that terrifies every central bank.</li>
          </ul>
          <p className="text-stone-800 text-sm mt-3">
            <strong>The trust problem:</strong> International reserves work because countries trust that their
            money is safe in Western banks. Every freeze erodes that trust. Central banks bought more
            gold in 2022-2023 than any year since 1967 — physical gold can&apos;t be frozen by executive order.
          </p>
        </div>
      </div>

      {/* Dollar as Weapon */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Weaponized Dollar: How Currency Dominance Became Financial Control
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
        
        <div className="bg-stone-50 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-900 mb-2">The Exorbitant Privilege</h3>
          <p className="text-stone-700 text-sm mb-3">
            French Finance Minister Valéry Giscard d&apos;Estaing called the dollar&apos;s status America&apos;s 
            &quot;exorbitant privilege&quot; (1965). The benefits are massive:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• <strong>Seigniorage:</strong> The US can print dollars and buy real goods. Other countries must earn dollars through exports.</li>
            <li>• <strong>Low borrowing costs:</strong> Dollar demand keeps US interest rates low. Treasury bonds are the world&apos;s safe haven.</li>
            <li>• <strong>Trade deficits without consequences:</strong> The US runs persistent trade deficits, funded by foreign dollar demand.</li>
            <li>• <strong>Inflation export:</strong> When the US prints money, some inflation is exported to countries holding dollars.</li>
            <li>• <strong>Policy autonomy:</strong> Other countries must consider dollar effects; the US doesn&apos;t consider effects on others.</li>
          </ul>
          <p className="text-stone-700 text-sm mt-3">
            <strong>The weaponization risk:</strong> Every use of dollar dominance for political goals 
            weakens the economic foundation that makes dominance possible. It&apos;s the monetary equivalent 
            of burning your own house down to smoke out the neighbor.
          </p>
        </div>
      </div>

      {/* Trade Wars */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Trade Wars: When Commerce Becomes Combat
        </h2>
        <p className="text-stone-700 mb-4">
          &quot;Trade wars are good, and easy to win,&quot; Donald Trump tweeted in 2018. The results suggest otherwise.
          Trade wars make everyone poorer, protect the well-connected, and typically escalate beyond their original scope.
        </p>
        <div className="space-y-4">
          {tradeWarCosts.map((item, index) => (
            <div key={index} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-bold text-stone-900">{item.measure}</h3>
                <span className="text-red-700 font-bold text-sm">{item.coverage}</span>
                {item.rate && <span className="text-stone-500 text-sm">{item.rate}</span>}
              </div>
              {item.cost && <p className="text-red-700 font-semibold text-sm mb-2">{item.cost}</p>}
              <p className="text-stone-600 text-sm">{item.impact}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-stone-50 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-900 mb-2">The Economics of Trade Wars</h3>
          <p className="text-stone-700 text-sm mb-3">
            Trade economics 101: tariffs are taxes paid by domestic consumers, not foreign producers. But trade wars persist because:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• <strong>Concentrated benefits, diffuse costs:</strong> Protected industries gain a lot; consumers each pay a little.</li>
            <li>• <strong>Political visibility:</strong> Factory closures make headlines; slightly higher prices don&apos;t.</li>
            <li>• <strong>Zero-sum thinking:</strong> Trade is seen as competition, not mutual benefit.</li>
            <li>• <strong>Retaliation cycles:</strong> Once started, politically difficult to back down without looking weak.</li>
            <li>• <strong>Economic nationalism:</strong> &quot;America First&quot; resonates even when America pays first.</li>
          </ul>
          <p className="text-stone-700 text-sm mt-3">
            <strong>The reality:</strong> Trump&apos;s China tariffs cost US consumers $51 billion annually while 
            protecting a net negative number of American jobs. Manufacturing employment fell in tariff-protected 
            industries due to higher input costs.
          </p>
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
          <p className="text-stone-700 text-sm mb-3">
            Taiwan Semiconductor Manufacturing Company (TSMC) produces <strong>90%+ of the world&apos;s
            most advanced chips</strong> (sub-7nm). This makes Taiwan the most strategically important
            island on Earth. Consider the dependencies:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Military Systems</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• F-35 fighter jets: 300+ semiconductors each</li>
                <li>• Patriot missile systems: 180+ chips each</li>
                <li>• Modern tanks: 1,000+ chips each</li>
                <li>• Naval combat systems: 10,000+ chips each</li>
                <li>• Satellite systems: 100+ specialized chips</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Civilian Critical Infrastructure</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• 5G network equipment: 90% from TSMC</li>
                <li>• Automotive chips: 60% Asian production</li>
                <li>• Medical devices: 70% chip dependence</li>
                <li>• Financial trading systems: 100% chip-dependent</li>
                <li>• Electric grid controls: 80+ chip dependence</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm mt-3">
            A Chinese invasion or blockade of Taiwan would cripple the global tech industry. This is why the US 
            is spending $52B to build domestic fabs and why some analysts call Taiwan&apos;s chip industry a 
            &quot;silicon shield&quot; against Chinese invasion.
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
          slow and the dollar remains dominant — but the trend is accelerating. The question isn&apos;t
          if, but when alternative systems reach critical mass.
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
        
        <div className="bg-stone-50 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-900 mb-2">The Network Effects Problem</h3>
          <p className="text-stone-700 text-sm mb-3">
            The dollar benefits from network effects: it&apos;s useful because others use it. But network effects 
            can shift suddenly when alternatives reach critical mass. Historical precedents:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• <strong>Pound to Dollar (1920s-1940s):</strong> UK debt from WWI, rise of US economy, Bretton Woods. Took 25 years but the shift accelerated in crisis.</li>
            <li>• <strong>Gold to Dollar (1971):</strong> Nixon shock ended convertibility instantly. Countries had no choice but to accept floating dollars.</li>
            <li>• <strong>Telegraph to telephone:</strong> Telegraph was dominant for decades, then disappeared rapidly when telephone networks reached scale.</li>
            <li>• <strong>Physical mail to email:</strong> Network effect tipping point occurred in the 1990s; physical mail volumes collapsed.</li>
          </ul>
          <p className="text-stone-700 text-sm mt-3">
            <strong>The risk:</strong> Dollar displacement might happen slowly, then suddenly. Once enough 
            countries trade in alternatives, the marginal value of dollar reserves falls. The US would lose 
            its ability to run deficits, interest rates would spike, and the economic foundation of American 
            power would crumble.
          </p>
        </div>
      </div>

      {/* Energy as Weapon */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Energy as a Weapon: From Oil Embargoes to Pipeline Sabotage
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
        
        <div className="bg-stone-50 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-900 mb-2">The Economics of Energy Warfare</h3>
          <p className="text-stone-700 text-sm mb-3">
            Energy warfare works because energy is essential and supply chains are vulnerable. Key vulnerabilities:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Chokepoints</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• <strong>Strait of Hormuz:</strong> 20% of global oil transit</li>
                <li>• <strong>Strait of Malacca:</strong> 25% of traded goods</li>
                <li>• <strong>Suez Canal:</strong> 12% of global trade</li>
                <li>• <strong>Turkish Straits:</strong> Russian oil &amp; gas to Europe</li>
                <li>• <strong>Panama Canal:</strong> 6% of global trade</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Infrastructure Targets</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Pipelines: thousands of miles, impossible to guard</li>
                <li>• Refineries: concentrated, high-value targets</li>
                <li>• LNG terminals: explosive, near population centers</li>
                <li>• Power plants: grid interdependencies multiply damage</li>
                <li>• Underwater cables: 95% of internet traffic, unguarded</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-700 text-sm mt-3">
            <strong>The Nord Stream lesson:</strong> The largest act of energy infrastructure sabotage in history 
            destroyed $10+ billion in assets, ended Europe&apos;s energy relationship with Russia, and forced 
            Germany to import expensive US LNG. No one has been held accountable. The precedent is terrifying.
          </p>
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
        <div className="bg-stone-50 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-900 mb-2">The 2023 Retaliation</h3>
          <p className="text-stone-700 text-sm">
            In July 2023, China restricted exports of gallium and germanium (critical for chips and solar panels)
            in response to US chip export controls. Prices spiked 20%+ overnight. The tit-for-tat escalation
            of supply chain weaponization is accelerating — with no clear endgame. Both sides are now 
            spending billions on supply chain independence that free trade provided cheaply.
          </p>
        </div>
      </div>

      {/* Crypto as Sanctions Evasion */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Cryptocurrency: The Sanctions Escape Hatch
        </h2>
        <p className="text-stone-700 mb-4">
          Cryptocurrency was designed to operate outside government control. Sanctioned nations have noticed.
          The arms race between financial surveillance and financial privacy is accelerating.
        </p>
        <div className="space-y-4">
          {cryptoSanctionsEvasion.map(item => (
            <div key={item.actor} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-bold text-stone-900">{item.actor}</h3>
                <span className="text-red-700 font-bold text-sm">{item.amount}</span>
              </div>
              <p className="text-stone-700 text-sm mb-1"><strong>Method:</strong> {item.method}</p>
              <p className="text-stone-600 text-sm">{item.impact}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-stone-50 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-stone-900 mb-2">The Government Response</h3>
          <p className="text-stone-700 text-sm mb-3">
            Governments face a dilemma: maintain sanctions effectiveness (requires financial surveillance) 
            vs. preserve financial freedom and innovation. Current approach:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• <strong>Regulatory pressure:</strong> KYC/AML requirements, travel rule, reporting obligations</li>
            <li>• <strong>Exchange oversight:</strong> Centralized exchanges must comply or face exclusion from banking</li>
            <li>• <strong>Blockchain analysis:</strong> Chainalysis and similar firms track crypto flows for governments</li>
            <li>• <strong>Tornado Cash precedent:</strong> US sanctioned a smart contract (2022) — unprecedented extension of sanctions law</li>
            <li>• <strong>CBDC development:</strong> Government digital currencies designed for surveillance, not privacy</li>
          </ul>
          <p className="text-stone-700 text-sm mt-3">
            <strong>The irony:</strong> Many sanctioned countries evade dollar sanctions using dollar-pegged 
            stablecoins (USDT/Tether). They&apos;re escaping the dollar system while still depending on dollars.
          </p>
        </div>
      </div>

      {/* Secondary Sanctions */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Secondary Sanctions: Globalizing American Law
        </h2>
        <p className="text-stone-700 mb-4">
          Secondary sanctions punish third parties who do business with sanctioned entities — even when both 
          parties are outside US jurisdiction. It&apos;s how the US extends its law globally.
        </p>
        <div className="bg-stone-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-stone-900 mb-2">How Secondary Sanctions Work</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Mechanisms</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Dollar transactions &rarr; US jurisdiction</li>
                <li>• US person involvement &rarr; US jurisdiction</li>
                <li>• US technology use &rarr; US jurisdiction</li>
                <li>• US subsidiary involvement &rarr; US jurisdiction</li>
                <li>• Correspondence banking &rarr; US jurisdiction</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Consequences</h4>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Cut off from US banking system</li>
                <li>• Asset freezes in US jurisdiction</li>
                <li>• Criminal penalties for executives</li>
                <li>• Reputational damage</li>
                <li>• Loss of correspondent banking</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-stone-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-stone-900 mb-2">Case Studies</h3>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>• <strong>BNP Paribas (2014):</strong> $8.9B fine for processing transactions for sanctioned countries (Cuba, Iran, Sudan). French bank, but used dollars.</li>
            <li>• <strong>Standard Chartered (2019):</strong> $1.1B in penalties for Iran sanctions violations. British bank, but cleared through New York.</li>
            <li>• <strong>Meng Wanzhou (2018):</strong> Huawei CFO arrested in Canada on US warrant for Iran sanctions violations. Extradition fight lasted 3 years.</li>
            <li>• <strong>Nord Stream 2 (2021):</strong> US sanctioned German companies building Russian pipeline. Germany called it &quot;extraterritorial&quot; — but complied.</li>
            <li>• <strong>Rusal (2018):</strong> Russian aluminum giant sanctioned; global aluminum prices spiked 40%. European smelters faced closure. Sanctions partially lifted after Oleg Deripaska reduced ownership.</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-stone-800 mb-2">The Sovereignty Problem</h3>
          <p className="text-stone-800 text-sm">
            Secondary sanctions globalize US law by threatening exclusion from the dollar system. Foreign 
            governments increasingly view this as economic imperialism. The EU created a &quot;blocking regulation&quot; 
            (1996) that forbids European companies from complying with US secondary sanctions — but it&apos;s 
            rarely used because the costs of exclusion from the dollar system exceed the costs of compliance.
          </p>
        </div>
      </div>

      {/* Economic Impact Assessment */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Economic Impact: Who Really Pays?
        </h2>
        <p className="text-stone-700 mb-4">
          Economic warfare creates winners and losers — but they&apos;re not always who you&apos;d expect. 
          The costs are often borne by ordinary citizens, while the benefits flow to well-connected interests.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-2">The Losers</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• <strong>Consumers:</strong> Pay higher prices for protected goods</li>
              <li>• <strong>Downstream industries:</strong> Face higher input costs from tariffs</li>
              <li>• <strong>Export industries:</strong> Suffer from retaliation</li>
              <li>• <strong>Developing countries:</strong> Cut off from global finance</li>
              <li>• <strong>Small businesses:</strong> Can&apos;t afford compliance costs</li>
              <li>• <strong>Ordinary citizens:</strong> In sanctioned countries suffer shortages</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-800 mb-2">The Winners</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• <strong>Protected industries:</strong> Higher prices, less competition</li>
              <li>• <strong>Compliance firms:</strong> $10B+ annual compliance spending</li>
              <li>• <strong>Sanctions lawyers:</strong> Specialized legal services</li>
              <li>• <strong>Defense contractors:</strong> &quot;Economic security&quot; spending</li>
              <li>• <strong>Financial surveillance firms:</strong> Government contracts</li>
              <li>• <strong>Political cronies:</strong> Exemptions and special treatment</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-2">The Adapters</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• <strong>Sanctions evaders:</strong> Turkey, UAE as intermediaries</li>
              <li>• <strong>Commodity traders:</strong> Profit from complexity</li>
              <li>• <strong>Crypto exchanges:</strong> Outside traditional finance</li>
              <li>• <strong>Alternative payment systems:</strong> CIPS, SPFS gain users</li>
              <li>• <strong>Gold dealers:</strong> Central banks buying physical assets</li>
              <li>• <strong>Black markets:</strong> Fill gaps left by legal trade</li>
            </ul>
          </div>
        </div>
        <div className="bg-stone-50 rounded-lg p-4">
          <h3 className="font-bold text-stone-900 mb-2">Compliance Costs: The Hidden Tax</h3>
          <p className="text-stone-700 text-sm">
            Global banks spend $10+ billion annually on sanctions compliance. JPMorgan Chase employs 
            13,000+ people in compliance (more than many banks&apos; total workforce). These costs are passed 
            on to consumers through fees, higher lending rates, and reduced financial access. Small banks 
            often exit international markets entirely rather than navigate the complexity — reducing competition 
            and increasing costs for everyone.
          </p>
        </div>
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
          <div>
            <h3 className="font-bold text-stone-900 mb-1">The Precedent Problem</h3>
            <p className="text-sm">
              Every power granted to government in crisis becomes permanent. Asset freezes were once rare, 
              used only against pariah states. Now they&apos;re routine. Secondary sanctions were once 
              exceptional. Now they&apos;re standard. The infrastructure of financial control built to fight 
              foreign adversaries will inevitably be turned on domestic dissidents. Canada froze truckers&apos; 
              bank accounts (2022). The UK froze accounts of COVID lockdown protesters. The tools of economic 
              warfare abroad become tools of political control at home.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">The Market Solution</h3>
            <p className="text-sm">
              The ultimate answer to economic warfare is economic freedom: sound money, free trade, and 
              technological innovation that routes around state control. Bitcoin, decentralized exchanges, 
              mesh networks, and other cryptographic tools make financial warfare increasingly difficult 
              and expensive. The state&apos;s comparative advantage is violence. The market&apos;s comparative 
              advantage is voluntary cooperation. In the long run, cooperation beats coercion.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-stone-300 mb-4">
          Economic warfare has become America&apos;s weapon of choice — arguably more destructive than
          bombs. The US has frozen over $400 billion in sovereign assets, sanctioned 39 countries covering
          one-third of humanity, cut nations from SWIFT, banned technology exports, imposed secondary sanctions
          on third parties, and weaponized the dollar system that 80% of global trade depends on.
        </p>
        <p className="text-stone-300 mb-4">
          In the short term, it works. Russia&apos;s economy was damaged. Iran&apos;s oil exports dropped.
          China&apos;s chip industry was set back years. North Korea remains isolated. But every use of economic 
          weapons accelerates the search for alternatives. BRICS is expanding. De-dollarization is accelerating. 
          China is building parallel financial infrastructure. Central banks are hoarding gold instead of dollars.
        </p>
        <p className="text-stone-300 mb-4">
          The costs compound. Global compliance spending exceeds $10 billion annually. Trade wars reduce 
          efficiency and increase prices. Secondary sanctions force foreign countries to choose between 
          sovereignty and market access. Financial surveillance infrastructure built for foreign adversaries 
          gets turned on domestic dissidents.
        </p>
        <p className="text-stone-300">
          The dollar&apos;s reserve status is America&apos;s single greatest economic asset — worth more than
          any weapon system. Every sanctions package, every asset freeze, every SWIFT disconnection chips away
          at the trust that makes dollar dominance possible. We&apos;re spending our greatest strategic advantage
          to punish countries we could engage through trade. Bastiat was right: when goods don&apos;t cross
          borders, soldiers will. We&apos;re choosing economic warfare over economic cooperation — and we may
          get actual warfare as a result.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Sources &amp; Further Reading</h2>
        <div className="grid md:grid-cols-2 gap-4 text-stone-600 text-sm">
          <div>
            <h3 className="font-bold text-stone-800 mb-2">Books &amp; Reports</h3>
            <ul className="space-y-1">
              <li>• Chris Miller, &quot;Chip War: The Fight for the World&apos;s Most Critical Technology&quot; (2022)</li>
              <li>• Nicholas Mulder, &quot;The Economic Weapon: The Rise of Sanctions as a Tool of Modern War&quot; (2022)</li>
              <li>• Juan Zarate, &quot;Treasury&apos;s War: The Unleashing of a New Era of Financial Warfare&quot; (2013)</li>
              <li>• Richard Nephew, &quot;The Art of Sanctions: A View from the Field&quot; (2017)</li>
              <li>• Gary Hufbauer, &quot;Economic Sanctions Reconsidered&quot; (4th ed, 2023)</li>
              <li>• Barry Eichengreen, &quot;Golden Fetters: The Gold Standard and the Great Depression&quot;</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-stone-800 mb-2">Data Sources</h3>
            <ul className="space-y-1">
              <li>• Treasury Department, Office of Foreign Assets Control (OFAC)</li>
              <li>• IMF, Currency Composition of Official Foreign Exchange Reserves (COFER)</li>
              <li>• BIS Triennial Central Bank Survey</li>
              <li>• Atlantic Council, Dollar Dominance Monitor</li>
              <li>• Chainalysis, &quot;The 2024 Crypto Crime Report&quot;</li>
              <li>• Congressional Research Service sanctions reports</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-stone-800 mb-2">Investigative Reporting</h3>
            <ul className="space-y-1">
              <li>• Seymour Hersh, &quot;How America Took Out the Nord Stream Pipeline&quot; (2023)</li>
              <li>• Reuters investigation into Tornado Cash sanctions</li>
              <li>• Wall Street Journal chip war coverage</li>
              <li>• Financial Times sanctions evasion reporting</li>
              <li>• ICIJ Pandora Papers (sanctions evasion methods)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-stone-800 mb-2">Academic Studies</h3>
            <ul className="space-y-1">
              <li>• Lancet, &quot;Economic Sanctions and Health in Venezuela&quot; (2019)</li>
              <li>• NBER, &quot;The Costs of Trade Wars&quot; (Fajgelbaum et al, 2021)</li>
              <li>• Tax Foundation, tariff impact analyses</li>
              <li>• Peterson Institute sanctions effectiveness studies</li>
              <li>• Brookings Institution SWIFT research</li>
            </ul>
          </div>
        </div>
      </div>

      <RelatedArticles 
        articles={[
          {
            slug: 'ukraine-proxy',
            title: 'Ukraine: $175B Proxy War',
            desc: 'How much has the US spent on Ukraine, and what are the escalation risks?'
          },
          {
            slug: 'china-pivot',
            title: 'The China Pivot',
            desc: 'Pacific militarization, AUKUS, Taiwan risk, and Cold War 2.0 costs'
          },
          {
            slug: 'war-profiteering',
            title: 'War Profiteering',
            desc: 'Defense contractor profits and stock prices during major conflicts'
          }
        ]}
      />

      <div className="text-center text-stone-500 text-sm mt-8 mb-4">
        <p>
          <Link href="/analysis/hybrid-warfare" className="text-red-600 hover:underline">← Hybrid Warfare</Link>
          {' · '}
          <Link href="/analysis" className="text-red-600 hover:underline">All Analysis</Link>
          {' · '}
          <Link href="/analysis/environmental-cost" className="text-red-600 hover:underline">Environmental Cost →</Link>
        </p>
      </div>

      <BackToTop />
    </div>
  )
}