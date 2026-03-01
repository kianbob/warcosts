import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'US-Backed Regime Changes — Coups, Invasions & Their Consequences | WarCosts',
  description: 'From Iran 1953 to Libya 2011, the US has overthrown or attempted to overthrow governments in 20+ countries. See the full list and the devastating blowback.',
}

const regimeChanges = [
  {
    id: 'iran-1953', country: 'Iran', year: 1953, flag: '🇮🇷',
    method: 'CIA coup (Operation TPAJAX / Ajax)',
    leader: 'PM Mohammad Mossadegh → Shah Mohammad Reza Pahlavi',
    reason: 'Mossadegh nationalized British-Iranian oil (now BP). US/UK feared Soviet influence.',
    blowback: '1979 Islamic Revolution. 444-day hostage crisis. 45+ years of US-Iran hostility. Nuclear standoff. Regional proxy wars.',
    details: 'Mossadegh was democratically elected and wildly popular. He nationalized the Anglo-Iranian Oil Company (later BP) because Iran received only 16% of oil profits. The CIA spent $1M bribing Iranian military officers and orchestrating street protests. After the coup, the Shah ruled for 26 years with SAVAK — a secret police trained by the CIA and Mossad — that tortured and killed thousands of dissidents. The blowback was the 1979 revolution that created the Islamic Republic of Iran, America\'s primary adversary in the Middle East ever since. Every dollar spent on Iranian sanctions, every warship deployed to the Persian Gulf, every proxy conflict with Iranian-backed groups traces back to this single CIA operation.',
    cost: '$1M (1953 dollars) → trillions in consequences',
    civilianImpact: 'SAVAK killed an estimated 3,000-10,000 political prisoners under the Shah. Post-revolution Iran-Iraq War (1980-88) killed 500,000+.',
  },
  {
    id: 'guatemala-1954', country: 'Guatemala', year: 1954, flag: '🇬🇹',
    method: 'CIA coup (Operation PBSUCCESS)',
    leader: 'President Jacobo Árbenz → Colonel Carlos Castillo Armas',
    reason: 'Árbenz\'s land reform threatened United Fruit Company (now Chiquita). CIA Director Allen Dulles and Secretary of State John Foster Dulles both had financial ties to United Fruit.',
    blowback: '36-year civil war (1960-1996). 200,000+ dead, mostly indigenous Maya. UN-designated genocide. Ongoing instability driving migration to the US.',
    details: 'Árbenz was democratically elected and implemented modest land reform, redistributing unused land from the United Fruit Company (which owned 42% of Guatemala\'s arable land but cultivated only 5%) to 100,000 peasant families. The CIA branded him a communist, armed and trained 480 exiles in Honduras, and used psychological warfare (fake radio broadcasts) to simulate a larger invasion. The coup installed a military dictatorship that began decades of repression. A 1999 UN truth commission found that US-backed forces committed acts of genocide against the Maya people, with 83% of victims being indigenous. The Guatemalan civil war produced waves of refugees to the US — the very migration crisis that American politicians now decry.',
    cost: '$2.7M CIA budget → 200,000+ lives lost',
    civilianImpact: '200,000 killed, 45,000 "disappeared," 1 million displaced. 626 massacres documented by the truth commission.',
  },
  {
    id: 'congo-1961', country: 'Congo (DRC)', year: 1960, flag: '🇨🇩',
    method: 'CIA assassination plot + Belgian collaboration',
    leader: 'PM Patrice Lumumba → Joseph Mobutu (later Mobutu Sese Seko)',
    reason: 'Lumumba sought Soviet assistance when the West refused to help against Belgian-backed secessionists. Cold War paranoia.',
    blowback: '32 years of Mobutu dictatorship. $5B embezzled. Country renamed Zaire. Collapsed into civil wars after Mobutu\'s fall — 5.4 million dead in the Congo Wars (1996-2003).',
    details: 'Patrice Lumumba was the Congo\'s first democratically elected prime minister. CIA station chief Larry Devlin received orders to assassinate him. While the CIA\'s specific poison plot was never carried out, the agency actively supported Mobutu\'s coup and Lumumba was captured and murdered by Katangan separatists with Belgian and likely CIA complicity. Mobutu ruled for 32 years as one of Africa\'s most brutal kleptocrats, embezzling an estimated $5 billion while his people starved. He was a reliable Cold War ally, receiving billions in US aid. After his fall in 1997, the country collapsed into the deadliest conflict since WWII. The Congo remains one of the poorest countries on earth despite sitting on $24 trillion in mineral wealth — including the cobalt in your phone battery.',
    cost: 'CIA budget classified → 5.4M+ dead in subsequent Congo Wars',
    civilianImpact: '5.4 million dead in Congo Wars (1996-2003), the deadliest conflict since WWII. Ongoing violence has killed hundreds of thousands more.',
  },
  {
    id: 'bay-of-pigs', country: 'Cuba', year: 1961, flag: '🇨🇺',
    method: 'CIA-organized invasion at Bay of Pigs',
    leader: 'Target: Fidel Castro (failed)',
    reason: 'Castro nationalized American-owned businesses including sugar plantations, oil refineries, and casinos.',
    blowback: 'Pushed Cuba firmly into Soviet orbit. Led directly to Cuban Missile Crisis (1962) — closest humanity came to nuclear annihilation. 60+ years of failed embargo.',
    details: 'The CIA trained and armed 1,400 Cuban exiles (Brigade 2506) for an amphibious invasion at the Bay of Pigs. Kennedy withdrew air support at the last minute. The invasion was crushed in 72 hours — 114 killed, 1,189 captured. The humiliation pushed Castro deeper into the Soviet embrace, directly leading to the placement of Soviet nuclear missiles in Cuba and the October 1962 Missile Crisis. The US then spent 60+ years on an embargo that has failed to remove Castro\'s government but has impoverished Cuban civilians. The CIA also launched Operation Mongoose — at least 8 assassination attempts against Castro, including the infamous exploding cigar and poisoned wetsuit. Castro died of natural causes in 2016 at age 90.',
    cost: '$46M (1961) → 60+ years of failed policy',
    civilianImpact: 'Cuban embargo has cost Cuba an estimated $130B in economic damage. 11 million Cubans affected by shortages of food, medicine, and basic goods.',
  },
  {
    id: 'dominican-republic-1965', country: 'Dominican Republic', year: 1965, flag: '🇩🇴',
    method: 'Military invasion (Operation Power Pack)',
    leader: 'Constitutionalist forces → US-backed junta → Joaquín Balaguer',
    reason: 'LBJ feared "another Cuba" when constitutionalists tried to restore democratically elected President Juan Bosch.',
    blowback: 'Decades of authoritarian rule under Balaguer. Set precedent for Cold War interventions across Latin America.',
    details: 'When a popular uprising sought to restore democratically elected President Juan Bosch — who had been overthrown by a military coup in 1963 — LBJ sent 42,000 US troops to prevent it. The invasion killed over 3,000 Dominican civilians. Johnson publicly claimed he was protecting American lives, but privately told aides he was preventing "another Cuba." The US installed Joaquín Balaguer, a former puppet of the assassinated dictator Trujillo, who ruled on and off for 22 years. This was the first US military intervention in Latin America since the "Good Neighbor Policy" of 1933 — and it signaled to Latin American nations that democracy was only acceptable when it produced US-friendly results.',
    cost: '$200M+ military operation',
    civilianImpact: '3,000+ Dominican civilians killed. Decades of authoritarian suppression of democratic movements.',
  },
  {
    id: 'south-vietnam-1963', country: 'South Vietnam', year: 1963, flag: '🇻🇳',
    method: 'CIA-backed military coup',
    leader: 'President Ngo Dinh Diem → Military junta',
    reason: 'Diem\'s repression of Buddhists was embarrassing the US. Kennedy administration gave tacit approval for coup.',
    blowback: 'Succession of unstable military governments. Deepened US commitment to Vietnam War. 58,220 Americans and 2M+ Vietnamese civilians killed.',
    details: 'Diem was America\'s hand-picked leader — installed in 1955 with CIA backing. But by 1963, his violent repression of Buddhist monks (including self-immolations broadcast worldwide) became a political liability. The CIA gave South Vietnamese generals a green light to overthrow him. Diem and his brother were murdered in the back of an armored personnel carrier. Kennedy was reportedly shocked, but the US had signaled it would not oppose the coup. The result was chaos: South Vietnam went through seven governments in two years, each more unstable than the last. This instability drew the US deeper into direct military involvement, leading to the full-scale war that killed 58,220 Americans, an estimated 2 million Vietnamese civilians, and ended in American defeat in 1975.',
    cost: 'Direct cost minimal → led to $1T Vietnam War',
    civilianImpact: 'The Vietnam War that followed killed 2M+ civilians, displaced millions, and left lasting Agent Orange contamination.',
  },
  {
    id: 'brazil-1964', country: 'Brazil', year: 1964, flag: '🇧🇷',
    method: 'US-supported military coup (Operation Brother Sam)',
    leader: 'President João Goulart → Military dictatorship',
    reason: 'Goulart proposed land reform and nationalization of oil refineries. LBJ administration feared leftward drift.',
    blowback: '21 years of military dictatorship (1964-1985). Systematic torture, disappearances, censorship. Operation Condor participation.',
    details: 'The US provided logistical support (Operation Brother Sam positioned a carrier task force off Brazil\'s coast) and political encouragement for the Brazilian military to overthrow the democratically elected President Goulart. The resulting military dictatorship lasted 21 years, during which thousands were imprisoned and tortured, hundreds "disappeared," and basic civil liberties were suspended. Brazil\'s military regime became a key participant in Operation Condor — the US-backed network of South American dictatorships that coordinated the kidnapping, torture, and murder of political opponents across borders. The dictatorship\'s economic policies also deepened Brazil\'s massive inequality, effects that persist today.',
    cost: 'Military/intelligence support → 21 years of dictatorship',
    civilianImpact: '434 killed or disappeared. Thousands tortured. Millions deprived of civil liberties for 21 years.',
  },
  {
    id: 'chile-1973', country: 'Chile', year: 1973, flag: '🇨🇱',
    method: 'CIA-supported military coup',
    leader: 'President Salvador Allende → General Augusto Pinochet',
    reason: 'Allende was a democratically elected socialist. Nixon told CIA Director Helms to "make the economy scream."',
    blowback: '17-year dictatorship. 3,200+ killed. 40,000 tortured. 200,000 exiled. Operation Condor hub.',
    details: 'Salvador Allende was the world\'s first democratically elected Marxist head of state. Nixon and Kissinger were determined to prevent a "second Cuba." The CIA spent $8M destabilizing Allende\'s government — funding opposition media, encouraging trucker strikes, and cultivating military contacts. On September 11, 1973, the military bombed the presidential palace. Allende died (officially by suicide). General Pinochet seized power and unleashed a reign of terror: 3,200+ people murdered, 40,000 tortured (including electric shock, sexual violence, and mock executions), and 200,000 forced into exile. Chile became the hub of Operation Condor. Pinochet also became the testing ground for Milton Friedman\'s "Chicago Boys" — radical free-market economics imposed under military dictatorship, a model later exported to other countries.',
    cost: '$8M CIA destabilization budget → 17 years of state terror',
    civilianImpact: '3,200+ murdered, 40,000 tortured, 200,000 exiled. Caravan of Death killed 97 prisoners in its first weeks.',
  },
  {
    id: 'grenada-1983', country: 'Grenada', year: 1983, flag: '🇬🇩',
    method: 'Full-scale military invasion (Operation Urgent Fury)',
    leader: 'PM Maurice Bishop (assassinated by hardliners) → US-installed government',
    reason: 'Reagan administration cited threat to American medical students. Real concern: Cuban-built airport, leftist government.',
    blowback: 'Minimal lasting consequences. Viewed as Reagan\'s easy PR win. Set precedent for unilateral interventions.',
    details: 'Grenada is a Caribbean island smaller than Detroit with a population of 91,000. After a Marxist internal coup killed Prime Minister Bishop, Reagan invaded with 7,600 troops — outnumbering the entire Grenadian military 10:1. The administration claimed American medical students were in danger; the students themselves said they weren\'t. The real target was a Cuban-built airport that the US claimed (without evidence) would serve as a Soviet military base. The invasion was condemned by the UN General Assembly 108-9. Britain — America\'s closest ally — was not informed and was furious (Grenada is a Commonwealth nation). The operation was a military success against negligible opposition but set an important precedent: the US could invade a sovereign nation based on manufactured threats with minimal domestic opposition.',
    cost: '$135M military operation',
    civilianImpact: '24 civilians killed. 19 American servicemembers killed (many by friendly fire). 45 Grenadian soldiers killed.',
  },
  {
    id: 'panama-1989', country: 'Panama', year: 1989, flag: '🇵🇦',
    method: 'Full-scale military invasion (Operation Just Cause)',
    leader: 'Manuel Noriega → Guillermo Endara',
    reason: 'Noriega — a former CIA asset — became an embarrassment over drug trafficking. Also: Panama Canal control.',
    blowback: 'Civilian casualties disputed (300 to 3,000+). Noriega replaced by US-friendly government.',
    details: 'Manuel Noriega had been on the CIA payroll since the 1960s, receiving $100,000+ per year. He was a key US ally during the Contra wars, allowing the US to use Panama as a staging ground. But when Noriega became too independent — and too publicly linked to drug trafficking — he became a liability. Bush invaded with 27,684 troops. The US military used the Stealth fighter in combat for the first time, dropped bombs on the densely populated El Chorrillo neighborhood (destroying 4,000 homes), and blasted Noriega\'s refuge with rock music until he surrendered. The Panamanian Defense Forces were overwhelmed. Civilian casualties were heavily disputed: the US claimed 202; Panamanian human rights groups documented over 3,000 deaths. The UN General Assembly condemned the invasion 75-20. The irony: America invaded to arrest a man it had employed for decades.',
    cost: '$164M military operation',
    civilianImpact: '202 to 3,000+ civilian deaths (disputed). El Chorrillo neighborhood destroyed — 15,000 displaced.',
  },
  {
    id: 'haiti-1991', country: 'Haiti', year: '1991 / 2004', flag: '🇭🇹',
    method: 'Support for coups + military intervention (1994) + forced exile (2004)',
    leader: 'Aristide ousted twice, restored once',
    reason: 'Aristide was a leftist priest who threatened elite interests. 1994 intervention restored him; 2004 intervention removed him again.',
    blowback: 'Haiti remains the poorest country in the Western Hemisphere. Political instability continues to this day.',
    details: 'Jean-Bertrand Aristide, Haiti\'s first democratically elected president, was overthrown in a 1991 military coup. The coup leaders had connections to the CIA. After 3 years of brutal military rule that killed 3,000-5,000 Haitians, Clinton sent 20,000 troops to restore Aristide in 1994. But when Aristide was re-elected in 2000 and began pursuing policies the US opposed, including demanding France repay the $21 billion (inflation-adjusted) it extorted from Haiti for the crime of ending slavery, the US supported his removal again in 2004. Aristide was flown out of the country on a US plane — he says he was kidnapped. Haiti has never recovered from the cycle of intervention. It remains the poorest country in the Western Hemisphere, with 60% of the population living on less than $2/day.',
    cost: '$2B+ for 1994 intervention alone',
    civilianImpact: '3,000-5,000 killed during 1991-94 military rule. Ongoing political violence and humanitarian crisis.',
  },
  {
    id: 'iraq-war', country: 'Iraq', year: 2003, flag: '🇮🇶',
    method: 'Full-scale invasion and 8-year occupation',
    leader: 'Saddam Hussein → Sectarian chaos → ISIS → Fragile democracy',
    reason: 'Alleged WMDs (none found). Alleged Al-Qaeda connection (none existed). Neoconservative agenda for Middle East transformation.',
    blowback: 'ISIS. Sectarian civil war. Iran empowered. 300,000+ civilian deaths. $2 trillion spent. Regional destabilization.',
    details: 'The Iraq War was launched on the basis of intelligence that the Bush administration knew was dubious or fabricated. There were no weapons of mass destruction. There was no connection to 9/11 or Al-Qaeda. The Downing Street Memo revealed that intelligence was being "fixed around the policy" of invasion. The war killed over 300,000 Iraqi civilians, displaced 9.2 million, destroyed the country\'s infrastructure, disbanded the Iraqi army (creating 400,000 unemployed, armed, trained men), and ignited a sectarian civil war. The disbanded army became the backbone of ISIS. Iran — the very country the US had been trying to contain — became the dominant regional power in Iraq\'s vacuum. Twenty years later, Iraq remains unstable, its oil wealth largely controlled by foreign companies, and a generation of Iraqis knows nothing but war. The architects of the war — Bush, Cheney, Rumsfeld, Wolfowitz — faced no consequences.',
    cost: '$2.0 trillion and counting (with long-term VA costs)',
    civilianImpact: '300,000+ civilians killed. 9.2 million displaced. Millions of children with PTSD. Birth defects from depleted uranium in Fallujah.',
  },
  {
    id: 'libya', country: 'Libya', year: 2011, flag: '🇱🇾',
    method: 'NATO bombing campaign (Operation Unified Protector)',
    leader: 'Muammar Gaddafi → State collapse',
    reason: 'Ostensibly to protect civilians during Arab Spring uprising. Quickly became regime change.',
    blowback: 'Failed state. Open-air slave markets. ISIS stronghold. Weapons flooded across Africa. European migration crisis.',
    details: 'The intervention began as a UN-authorized no-fly zone to "protect civilians" but immediately became a regime change operation. NATO flew 26,500 sorties and dropped thousands of bombs. Gaddafi was captured by rebels, sodomized with a bayonet, and killed — Hillary Clinton laughed on camera: "We came, we saw, he died." Libya had the highest Human Development Index in Africa under Gaddafi. After his fall, it became a failed state with open-air slave markets where sub-Saharan African migrants are bought and sold. Gaddafi\'s massive weapons stockpiles were looted and spread across Africa, fueling conflicts in Mali, Niger, Nigeria, and beyond. Libya became an ISIS stronghold and a primary departure point for the Mediterranean migration crisis that destabilized European politics. Obama later called the failure to plan for post-Gaddafi Libya the "worst mistake" of his presidency.',
    cost: '$1.1B US military costs (NATO total much higher)',
    civilianImpact: '10,000-50,000 killed in the civil war. Ongoing violence has killed thousands more. Slave markets. 700,000 migrants trapped in horrific conditions.',
  },
  {
    id: 'syria-intervention', country: 'Syria', year: 2011, flag: '🇸🇾',
    method: 'CIA program to arm rebels (Timber Sycamore) + direct military intervention vs. ISIS',
    leader: 'Target: Bashar al-Assad (still in power as of 2024)',
    reason: 'Assad\'s crackdown on Arab Spring protesters. Strategic goal to weaken Iran\'s ally.',
    blowback: 'Civil war killed 500,000+. Displaced 13 million. ISIS gained territory. Russian military intervention. Refugee crisis destabilized Europe.',
    details: 'The CIA spent $1 billion per year on Timber Sycamore, a program to arm and train Syrian rebels. Many of those weapons ended up with jihadist groups including Al-Qaeda\'s Syrian affiliate (al-Nusra Front). Pentagon-trained rebels were captured and their weapons taken by extremists. In one notorious case, a Pentagon-backed group and a CIA-backed group fought each other. The US also directly intervened militarily against ISIS, dropping over 30,000 bombs on Syria. The city of Raqqa was leveled in the anti-ISIS campaign, killing thousands of civilians. Assad remained in power with Russian and Iranian support. The war produced 6.8 million refugees (the largest refugee crisis since WWII at the time), destabilized European politics, and contributed to the rise of far-right movements across the continent.',
    cost: '$1B+/yr CIA program + billions in military operations',
    civilianImpact: '500,000+ killed. 6.8 million refugees. 6.9 million internally displaced. Chemical weapons attacks.',
  },
  {
    id: 'honduras-2009', country: 'Honduras', year: 2009, flag: '🇭🇳',
    method: 'US tacitly supported military coup',
    leader: 'President Manuel Zelaya → Roberto Micheletti',
    reason: 'Zelaya aligned with Venezuela\'s Hugo Chávez and proposed a constitutional referendum.',
    blowback: 'Honduras became the murder capital of the world. Massive migration to US. Berta Cáceres, indigenous activist, assassinated in 2016.',
    details: 'When the Honduran military kidnapped President Zelaya at gunpoint and flew him out of the country in his pajamas, the Obama administration notably refused to call it a "coup" — because doing so would have legally required cutting off US military aid. Secretary of State Hillary Clinton worked behind the scenes to prevent Zelaya\'s return and legitimize the new government. In the years following the coup, Honduras became one of the most violent countries in the world, with homicide rates exceeding those of active war zones. Environmental activists, journalists, and indigenous leaders were systematically murdered. The resulting instability drove the migration "caravans" to the US border that became a political flashpoint in American politics. Once again, US intervention created the very crisis it later decried.',
    cost: 'Continued $100M+/yr in military/security aid post-coup',
    civilianImpact: 'Honduras became murder capital of the world. Berta Cáceres and hundreds of activists killed.',
  },
  {
    id: 'venezuela-2019', country: 'Venezuela', year: 2019, flag: '🇻🇪',
    method: 'Attempted regime change via recognition of opposition leader + sanctions',
    leader: 'Target: Nicolás Maduro. US recognized Juan Guaidó as president.',
    reason: 'Maduro\'s authoritarian government and socialist economic policies. Oil interests.',
    blowback: 'Failed. Maduro remains in power. Sanctions devastated civilian economy. 7 million+ Venezuelan refugees.',
    details: 'In January 2019, the US recognized opposition leader Juan Guaidó as Venezuela\'s legitimate president — despite Guaidó never winning a presidential election. The strategy relied on military defections that never materialized. A bizarre 2020 private military operation (Operation Gideon), involving former US Green Berets, attempted to capture Maduro and was defeated by Venezuelan fishermen. Meanwhile, US sanctions — among the harshest ever imposed — devastated the civilian economy. A 2019 study estimated sanctions contributed to 40,000 deaths from lack of medicine and food. Venezuelan oil production collapsed from 2.5 million barrels/day to under 400,000. Over 7 million Venezuelans fled the country, creating the largest refugee crisis in Latin American history. Guaidó was eventually sidelined by his own opposition coalition. Maduro remains firmly in power.',
    cost: 'Sanctions cost Venezuela an estimated $38B in oil revenue',
    civilianImpact: '40,000+ deaths attributed to sanctions. 7 million refugees. Economic collapse.',
  },
]

const operationCondorCountries = [
  { country: 'Argentina', years: '1976-1983', deaths: '30,000 "disappeared"', note: 'Military junta\'s "Dirty War." Death flights threw drugged prisoners from planes into the ocean.' },
  { country: 'Chile', years: '1973-1990', deaths: '3,200+ killed, 40,000 tortured', note: 'Pinochet regime. National Stadium used as concentration camp.' },
  { country: 'Brazil', years: '1964-1985', deaths: '434+ killed/disappeared', note: '21-year military dictatorship with US support.' },
  { country: 'Uruguay', years: '1973-1985', deaths: '200+ killed, 6,000 imprisoned', note: 'Highest per-capita rate of political prisoners in the world at its peak.' },
  { country: 'Paraguay', years: '1954-1989', deaths: '3,000-4,000 killed', note: 'Stroessner dictatorship lasted 35 years.' },
  { country: 'Bolivia', years: '1971-1978', deaths: '200+ killed', note: 'Banzer dictatorship with CIA/Brazilian support.' },
]

export default function RegimeChangesPage() {
  const conflicts = loadData('conflicts.json')
  const stats = loadData('stats.json')

  const totalRegimeChanges = regimeChanges.length
  const totalCountries = new Set(regimeChanges.map(r => r.country)).size

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Regime Changes' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US-Backed Regime Changes</h1>
      <p className="text-muted mb-6 max-w-3xl">
        Since 1953, the United States has overthrown or attempted to overthrow at least {totalCountries} governments through coups, invasions, bombings, sanctions, and covert operations. The pattern is consistent: democracies toppled, dictators installed, blowback ignored — until it arrives decades later at a cost of trillions and millions of lives.
      </p>
      <ShareButtons title="US-Backed Regime Changes — Coups and Their Consequences" />

      {/* AI Overview */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-blue-900 mb-3">🧠 Key Insights</h3>
        <ul className="space-y-2 text-sm text-blue-900">
          <li>• <strong>Not a single US regime change since WWII has produced a stable, lasting democracy</strong> — the track record across {totalCountries} countries and 70+ years is 0 for {totalRegimeChanges}. The blowback has cost trillions.</li>
          <li>• <strong>The US has overthrown more democracies than any country in modern history</strong> — Iran, Guatemala, Congo, Brazil, Chile, and Haiti all had democratically elected leaders replaced by US-backed dictators.</li>
          <li>• <strong>Every major US foreign policy crisis traces to prior regime changes</strong> — the 1953 Iran coup created the Islamic Republic; the 1980s Afghan operation created Al-Qaeda; the 2003 Iraq invasion created ISIS.</li>
          <li>• <strong>Central American migration to the US border traces directly to US interventions</strong> — coups and death squads in Guatemala, Honduras, and El Salvador created the instability that American politicians now decry.</li>
          <li>• <strong>Operation Condor killed 60,000–80,000 people across South America</strong> — a US-backed network of military dictatorships that coordinated cross-border kidnapping, torture, and murder with CIA intelligence support.</li>
        </ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: String(totalRegimeChanges), label: 'Regime Changes / Attempts' },
          { val: String(totalCountries), label: 'Countries Targeted' },
          { val: '0', label: 'Lasting Democracies Created' },
          { val: '70+ Years', label: 'Of Regime Change Policy' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;Why do they hate us? Let me count the coups.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Common paraphrase of the blowback thesis</p>
      </div>

      {/* The Pattern */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">The Pattern</h2>
        <p>American regime change operations follow a remarkably consistent script:</p>
        <ol>
          <li><strong>A foreign leader acts against US corporate or strategic interests</strong> — nationalizing resources, aligning with the &ldquo;wrong&rdquo; side, or pursuing independent policies.</li>
          <li><strong>The US labels the leader a communist, terrorist, or dictator</strong> — even when they were democratically elected.</li>
          <li><strong>The CIA or military overthrows or destabilizes the government</strong> — through coups, armed proxies, economic warfare, or direct invasion.</li>
          <li><strong>A US-friendly regime is installed</strong> — typically a military dictatorship willing to open markets and host US bases.</li>
          <li><strong>The new regime brutalizes its population</strong> — with US weapons, training, and diplomatic cover.</li>
          <li><strong>Blowback arrives years or decades later</strong> — revolution, terrorism, civil war, refugee crises — and the US spends trillions dealing with the consequences of its own actions.</li>
        </ol>
        <p>Not a single US regime change operation since WWII has produced a stable, lasting democracy. Not one.</p>
      </div>

      {/* Scorecard */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">📊 The Regime Change Scorecard</h2>
        <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
          <div className="bg-white rounded-lg p-4 border">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{totalRegimeChanges}</p>
            <p className="text-muted">Governments Overthrown or Targeted</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">0</p>
            <p className="text-muted">Stable Democracies Produced</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">Millions</p>
            <p className="text-muted">Lives Lost in the Aftermath</p>
          </div>
        </div>
        <p className="text-sm text-stone-600 mt-4 text-center">
          The track record speaks for itself. Every regime change operation created more problems than it solved — often catastrophically so.
        </p>
      </div>

      {/* Full List */}
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">The Complete Record</h2>
      <div className="space-y-8">
        {regimeChanges.map(r => (
          <div key={r.id} className="bg-white rounded-lg border p-6 hover:shadow-md transition">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-3xl">{r.flag}</span>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{r.country}</h2>
              <span className="text-lg text-muted font-mono">{r.year}</span>
              <Link href={`/conflicts/${r.id}`} className="text-xs text-red-700 hover:underline ml-auto">View full conflict page →</Link>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <p className="font-semibold text-stone-700">Method</p>
                <p className="text-muted">{r.method}</p>
              </div>
              <div>
                <p className="font-semibold text-stone-700">Leadership Change</p>
                <p className="text-muted">{r.leader}</p>
              </div>
              <div>
                <p className="font-semibold text-stone-700">US Justification</p>
                <p className="text-muted">{r.reason}</p>
              </div>
              <div>
                <p className="font-semibold text-stone-700">Estimated Cost</p>
                <p className="text-muted">{r.cost}</p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg p-4 mb-3">
              <p className="text-sm text-stone-700">{r.details}</p>
            </div>

            <div className="bg-red-50 rounded-lg p-3 mb-3">
              <p className="text-sm font-semibold text-red-700">⚠️ Blowback: {r.blowback}</p>
            </div>

            <p className="text-xs text-muted"><strong>Civilian Impact:</strong> {r.civilianImpact}</p>
          </div>
        ))}
      </div>

      {/* Operation Condor */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">🦅 Operation Condor: Continental State Terror</h2>
        <p className="text-stone-300 mb-6">In the 1970s and 1980s, the US backed a network of South American military dictatorships that coordinated the kidnapping, torture, and murder of political opponents across borders. Known as Operation Condor, this network was supported by the CIA and operated with the knowledge of Henry Kissinger. An estimated 60,000-80,000 people were killed.</p>
        <div className="space-y-3">
          {operationCondorCountries.map(c => (
            <div key={c.country} className="bg-stone-800 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white">{c.country} <span className="font-normal text-stone-400">({c.years})</span></h3>
                  <p className="text-stone-400 text-sm">{c.note}</p>
                </div>
                <p className="text-red-400 font-bold text-sm">{c.deaths}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-6">Total Operation Condor victims: an estimated 60,000-80,000 killed or disappeared across South America. The US provided intelligence, training, and diplomatic cover.</p>
      </div>

      {/* The "Who Lost X?" Pattern */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">🔄 The &ldquo;Who Lost X?&rdquo; Pattern</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>A recurring pattern in American foreign policy: the US intervenes in a country, installs a client regime, and when that regime inevitably collapses, domestic politicians ask &ldquo;Who lost X?&rdquo; — as though the country was America&apos;s to lose.</p>
          <ul>
            <li><strong>&ldquo;Who lost China?&rdquo;</strong> (1949) — Led to McCarthyism and purges of State Department Asia experts, making competent policy impossible.</li>
            <li><strong>&ldquo;Who lost Iran?&rdquo;</strong> (1979) — The Shah&apos;s fall led to the Iran hostage crisis, contributing to Carter&apos;s defeat and Reagan&apos;s election.</li>
            <li><strong>&ldquo;Who lost Afghanistan?&rdquo;</strong> (2021) — The Taliban takeover triggered fierce blame games, despite 20 years of warnings that the Afghan government was a house of cards.</li>
            <li><strong>&ldquo;Who lost Iraq?&rdquo;</strong> — The rise of ISIS was blamed on Obama&apos;s withdrawal, not on the invasion that created the conditions for ISIS.</li>
          </ul>
          <p>The question itself reveals the imperial mindset: other nations are possessions to be &ldquo;lost&rdquo; or &ldquo;kept,&rdquo; not sovereign countries with their own agency. This framing traps the US in an endless cycle: intervene → fail → blame the withdrawal → intervene again.</p>
        </div>
      </div>

      {/* Democracies Overthrown */}
      <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-red-800">🗳️ Democracies Overthrown by the &ldquo;Leader of the Free World&rdquo;</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          {[
            { country: 'Iran (1953)', leader: 'PM Mossadegh — democratically elected', replaced: 'Shah\'s dictatorship' },
            { country: 'Guatemala (1954)', leader: 'President Árbenz — democratically elected', replaced: 'Military junta → 36-year civil war' },
            { country: 'Congo (1960)', leader: 'PM Lumumba — democratically elected', replaced: 'Mobutu\'s 32-year kleptocracy' },
            { country: 'Brazil (1964)', leader: 'President Goulart — democratically elected', replaced: '21-year military dictatorship' },
            { country: 'Chile (1973)', leader: 'President Allende — democratically elected', replaced: 'Pinochet\'s 17-year dictatorship' },
            { country: 'Haiti (2004)', leader: 'President Aristide — democratically elected', replaced: 'Political chaos → failed state' },
          ].map(d => (
            <div key={d.country} className="bg-white rounded-lg p-3 border">
              <p className="font-bold text-red-700">{d.country}</p>
              <p className="text-muted text-xs">{d.leader}</p>
              <p className="text-xs text-stone-500">Replaced with: {d.replaced}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• The CIA coined the term <strong>&ldquo;blowback&rdquo;</strong> in a classified 1953 report on the Iran coup — to describe the unintended consequences of covert operations.</li>
          <li>• The US has overthrown more democracies than any other country in modern history.</li>
          <li>• In Guatemala, the CIA literally wrote the <strong>&ldquo;Assassination Manual&rdquo;</strong> — a training document on how to kill political opponents. It was declassified in 1997.</li>
          <li>• The 2003 Iraq invasion was the <strong>first US regime change based on entirely fabricated intelligence</strong> — setting a precedent for fact-free foreign policy.</li>
          <li>• Every refugee crisis at the US southern border — from Honduras, Guatemala, El Salvador — traces directly to US regime changes and Cold War interventions.</li>
          <li>• Manuel Noriega was on the <strong>CIA payroll for 30 years</strong> before the US invaded Panama to arrest him.</li>
          <li>• Saddam Hussein received US military aid throughout the 1980s, including <strong>satellite intelligence used in chemical weapons attacks</strong> against Iran.</li>
          <li>• The number of countries with US military bases (80) is larger than the number of countries that have <strong>ever had a US-backed regime change</strong>.</li>
        </ul>
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;We have no eternal allies, and we have no perpetual enemies. Our interests are eternal and perpetual, and those interests it is our duty to follow.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— Lord Palmerston (quoted by Henry Kissinger to justify regime change)</p>
      </div>

      {/* Current Consequences */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Current Consequences</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>The consequences of regime change operations are not historical curiosities — they are <strong>active, ongoing crises</strong>:</p>
          <ul>
            <li><strong>Iran:</strong> The 1953 coup led directly to the Islamic Revolution, 45 years of hostility, a nuclear crisis, and proxy wars across the Middle East that cost trillions.</li>
            <li><strong>Guatemala/Honduras/El Salvador:</strong> US-backed coups and death squads created the instability driving Central American migration — the very &ldquo;border crisis&rdquo; that dominates US politics.</li>
            <li><strong>Iraq:</strong> The 2003 invasion created ISIS, empowered Iran, destabilized the region, and will cost trillions in VA benefits for decades to come.</li>
            <li><strong>Libya:</strong> The 2011 intervention created a failed state with open-air slave markets and fueled the European migration crisis.</li>
            <li><strong>Congo:</strong> The assassination of Lumumba and support for Mobutu set the stage for conflicts that have killed over 5 million people — and the mineral conflicts (cobalt, coltan) continue today.</li>
            <li><strong>Afghanistan:</strong> CIA funding of the mujahideen in the 1980s created the Taliban and Al-Qaeda, leading to 9/11 and the $2.3 trillion war that ended exactly where it started.</li>
          </ul>
          <p>Every major foreign policy crisis the US faces today is, in significant part, blowback from its own prior interventions.</p>
        </div>
      </div>

      {/* The Libertarian Case */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">⚖️ The Non-Interventionist Case</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>The historical record makes the non-interventionist case almost irrefutable:</p>
          <ul>
            <li><strong>Regime change doesn&apos;t work.</strong> Not a single operation since WWII has produced a stable, lasting democracy.</li>
            <li><strong>It creates enemies.</strong> The 1953 Iran coup created the Islamic Republic. The 1980s Afghan operation created Al-Qaeda. The 2003 Iraq invasion created ISIS.</li>
            <li><strong>It costs trillions.</strong> The War on Terror alone — largely a response to blowback from prior interventions — cost $8 trillion.</li>
            <li><strong>It kills millions.</strong> Civilians bear the overwhelming burden — in Iraq, Guatemala, Congo, Vietnam, and everywhere the US has intervened.</li>
            <li><strong>It undermines American values.</strong> A country that overthrows democracies cannot credibly claim to champion democracy.</li>
            <li><strong>It concentrates power.</strong> Every intervention expands executive authority at the expense of Congress and the Constitution.</li>
          </ul>
          <p>The Founders warned against &ldquo;entangling alliances&rdquo; and foreign adventures. Two centuries of evidence prove they were right.</p>
        </div>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/covert" className="text-red-800 hover:underline">→ Covert Operations — CIA secret wars and coups</Link></li>
          <li><Link href="/analysis/blowback" className="text-red-800 hover:underline">→ Blowback — how US interventions create future enemies</Link></li>
          <li><Link href="/analysis/congressional-authority" className="text-red-800 hover:underline">→ 19 Wars Without Congress — the constitutional crisis</Link></li>
          <li><Link href="/timeline" className="text-red-800 hover:underline">→ Timeline — every US war and intervention</Link></li>
          <li><Link href="/casualties" className="text-red-800 hover:underline">→ Casualties — the human cost of intervention</Link></li>
        </ul>
      </div>
    </div>
  )
}
