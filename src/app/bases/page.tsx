import { BasesChart, TroopsChart } from '@/components/charts/SpendingCharts'
import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'


export const metadata: Metadata = {
  title: 'US Overseas Military Bases — 750 Bases in 80 Countries | WarCosts',
  description: 'The US maintains 750 military bases in 80 countries with 173,000 troops deployed overseas. Annual cost: $55 billion. More than any empire in history.',
}

const regionMap: Record<string, string> = {
  'Japan': 'East Asia & Pacific', 'South Korea': 'East Asia & Pacific', 'Australia': 'East Asia & Pacific', 'Diego Garcia': 'East Asia & Pacific',
  'Germany': 'Europe', 'Italy': 'Europe', 'United Kingdom': 'Europe', 'Spain': 'Europe', 'Turkey': 'Europe', 'Poland': 'Europe',
  'Bahrain': 'Middle East', 'Kuwait': 'Middle East', 'Qatar': 'Middle East',
  'Djibouti': 'Africa',
}

const fullBaseList = [
  { region: 'East Asia & Pacific', countries: ['Japan (120 bases)', 'South Korea (73 bases)', 'Guam (major naval/air base)', 'Australia (rotational)', 'Philippines (EDCA sites)', 'Singapore (naval logistics)', 'Diego Garcia (B-52 base, signals intelligence)', 'Marshall Islands (missile testing)', 'Palau (compact of free association)', 'Wake Island', 'American Samoa'] },
  { region: 'Europe', countries: ['Germany (119 bases)', 'Italy (44 bases)', 'United Kingdom (25 bases)', 'Spain (4 bases)', 'Turkey (Incirlik & Izmir)', 'Poland (rotational armored brigade)', 'Romania (Deveselu missile defense)', 'Greece (Souda Bay)', 'Belgium (NATO HQ)', 'Netherlands (nuclear weapons storage)', 'Norway (rotational Marines)', 'Bulgaria (Novo Selo)', 'Kosovo (Camp Bondsteel)', 'Iceland (Keflavik)', 'Portugal (Azores/Lajes Field)'] },
  { region: 'Middle East', countries: ['Bahrain (5th Fleet HQ)', 'Kuwait (Camp Arifjan, 13,000 troops)', 'Qatar (Al Udeid — largest US base in Middle East)', 'UAE (Al Dhafra Air Base)', 'Oman (multiple access agreements)', 'Jordan (training bases)', 'Iraq (advisory presence)', 'Syria (~900 troops, no authorization)', 'Saudi Arabia (periodic deployments)'] },
  { region: 'Africa', countries: ['Djibouti (Camp Lemonnier — 4,000+ troops)', 'Niger ($110M drone base — expelled after 2023 coup)', 'Somalia (rotational)', 'Kenya (Manda Bay)', 'Chad (periodic)', 'Cameroon (counter-Boko Haram)', 'Ghana, Senegal, Gabon, Uganda (small contingents)'] },
  { region: 'Americas', countries: ['Guantánamo Bay, Cuba (since 1903 — against Cuba\'s wishes)', 'Honduras (Soto Cano Air Base)', 'Colombia (counter-narcotics)', 'El Salvador (Comalapa)', 'Curaçao (counter-drug)', 'Aruba (counter-drug)', 'Puerto Rico (various)'] },
]

const environmentalDamage = [
  { location: 'Okinawa, Japan', issue: 'PFAS contamination', details: 'PFAS "forever chemicals" from firefighting foam have contaminated water supplies near bases. Okinawa\'s water supply serves 450,000 people. The US military initially refused to allow Japanese inspectors onto bases. PFAS levels near Kadena Air Base measured at 13× Japan\'s safety standards.' },
  { location: 'Guam', issue: 'Ordnance contamination', details: 'Decades of bombing practice contaminated soil and water. Guam has one of the highest cancer rates in the Pacific. Cleanup efforts are decades behind schedule. A new Marine base threatens the habitat of endangered species.' },
  { location: 'Camp Lejeune, NC (US)', issue: 'Water contamination', details: 'Toxic chemicals in drinking water from 1953-1987 exposed up to 1 million Marines and families. Linked to cancers, birth defects, and neurological disorders. The VA denied claims for decades. The PACT Act (2022) finally allowed lawsuits.' },
  { location: 'Clark Air Base, Philippines', issue: 'Toxic waste', details: 'When the US abandoned Clark after the 1991 eruption of Mt. Pinatubo, it left behind massive toxic waste dumps. Local communities have reported elevated cancer rates and birth defects for decades.' },
  { location: 'Diego Garcia', issue: 'Forced displacement', details: 'The UK forcibly removed the entire Chagossian population (over 1,500 people) between 1968-1973 to make way for a US military base. Residents were loaded onto cargo ships and dumped in Mauritius. Their dogs were gassed. The Chagossians have fought for the right to return for 50+ years. In 2024, the UK agreed to return sovereignty — but the base stays.' },
  { location: 'Subic Bay, Philippines', issue: 'Toxic waste', details: 'Decades of US Navy operations left toxic contamination including heavy metals, asbestos, and petroleum products. The cleanup remains incomplete 30 years after the US departed.' },
  { location: 'Vieques, Puerto Rico', issue: 'Bombing range contamination', details: 'The Navy used Vieques as a bombing range for 60 years (1941-2003). Residents have cancer rates 27% above the Puerto Rican average. Heavy metals, napalm residue, and depleted uranium contaminate the soil and water.' },
  { location: 'Ramstein, Germany', issue: 'Drone relay & noise', details: 'Ramstein serves as the critical relay for US drone strikes in the Middle East and Africa. Without Ramstein, most drone operations would be impossible. German courts have questioned the legality of this under German and international law. Additionally, constant military air traffic generates severe noise pollution for surrounding communities.' },
]

const baseCostEstimates = [
  { item: 'Camp Humphreys, South Korea', cost: '$10.7B', note: 'Largest US overseas base. Construction cost $10.7B. 36,000 personnel.' },
  { item: 'Al Udeid Air Base, Qatar', cost: '$1B+', note: 'Largest US base in the Middle East. 11,000 personnel. Air operations hub.' },
  { item: 'Camp Lemonnier, Djibouti', cost: '$70M/yr rent + operations', note: 'Only "permanent" US base in Africa. Rent alone: $70M/year. Used for drone strikes across the Horn of Africa.' },
  { item: 'Thule Air Base, Greenland', cost: '$200M/yr', note: 'Missile early warning radar. Built in 1951. The indigenous Inughuit people were forcibly relocated without consultation.' },
  { item: 'Niger Drone Base (Agadez)', cost: '$110M construction', note: 'One of the most expensive US military construction projects in history. Niger expelled US forces after a 2023 coup.' },
  { item: 'Kadena Air Base, Okinawa', cost: '$2B+ annually', note: 'Largest US Air Force base in the Pacific. Okinawans have protested since 1945.' },
]

const hostCountryPayments = [
  { country: 'Japan', pays: '$1.8B/yr', note: '"Sympathy budget" — Japan pays ~75% of local costs for US bases. 53,000 troops.' },
  { country: 'South Korea', pays: '$1.1B/yr', note: 'Under the Special Measures Agreement. Trump demanded $5B, was refused.' },
  { country: 'Germany', pays: '$1.0B/yr', note: 'Covers about 28% of non-personnel costs. Trump threatened withdrawal over payments.' },
  { country: 'Qatar', pays: 'Base built at Qatar\'s expense', note: 'Al Udeid was built by Qatar at a cost of $1B+. The US pays minimal rent.' },
  { country: 'Djibouti', pays: 'US pays $70M/yr rent', note: 'Strategic chokepoint. Small country, huge leverage. Rent has increased 5× since 2001.' },
  { country: 'Bahrain', pays: 'Subsidized', note: 'Home of US 5th Fleet. Bahrain provides the port; US provides regime security.' },
]

export default function BasesPage() {
  const presence = loadData('overseas-presence.json')
  const basesData = presence.topDeployments.map((d: any) => ({ country: d.country, bases: d.bases }))
  const troopsData = presence.topDeployments.map((d: any) => ({ country: d.country, troops: d.troops }))

  // Group by region
  const regions: Record<string, any[]> = {}
  presence.topDeployments.forEach((d: any) => {
    const region = regionMap[d.country] || 'Other'
    if (!regions[region]) regions[region] = []
    regions[region].push(d)
  })

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Overseas Bases' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">US Overseas Military Bases</h1>
      <p className="text-muted mb-6 max-w-3xl">The United States maintains {fmt(presence.totalBases)} military bases in {presence.totalCountries} countries — more than any empire in history. Annual cost: {fmtMoney(presence.annualBaseCost)}. Many of these bases were established during wars that ended decades ago. The troops stayed. The bases expanded. The bill keeps growing.</p>
      <ShareButtons title="US Overseas Military Bases — 750 in 80 Countries" />

      {/* AI Overview */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-blue-900 mb-3">🧠 Key Insights</h3>
        <ul className="space-y-2 text-sm text-blue-900">
          <li>• <strong>The US has ~750 overseas bases — the UK has 16, Russia 15, China 1</strong> — more foreign bases than every other country on Earth combined, exceeding even the British Empire at its peak.</li>
          <li>• <strong>Many bases were built to counter the Soviet Union, which dissolved 34 years ago</strong> — the Pentagon estimates 20% excess capacity (~150 unneeded bases), but Congress blocks every closure attempt.</li>
          <li>• <strong>Camp Humphreys cost $10.7 billion to build</strong> — and the Niger drone base ($110M) was abandoned after a 2023 coup. Taxpayers fund bases that serve no lasting purpose.</li>
          <li>• <strong>The US military is the world&apos;s single largest institutional polluter</strong> — producing more greenhouse gas emissions than 140 countries, with PFAS contamination poisoning water supplies near bases from Okinawa to Camp Lejeune.</li>
          <li>• <strong>The Chagossian people were forcibly expelled and their dogs gassed</strong> to make room for the Diego Garcia base — one of many communities displaced by America&apos;s base network without consent or compensation.</li>
        </ul>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 my-8">
        {[
          { val: fmt(presence.totalBases), label: 'Overseas Bases' },
          { val: String(presence.totalCountries), label: 'Countries' },
          { val: fmt(presence.totalOverseasTroops), label: 'Troops Deployed' },
          { val: fmtMoney(presence.annualBaseCost) + '/yr', label: 'Annual Cost' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-muted text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="bg-stone-900 text-white rounded-xl p-8 my-8">
        <blockquote className="font-[family-name:var(--font-heading)] text-xl italic">
          &ldquo;Unlike any other nation in history, the United States stations its legions not to defend its own borders, but to project power — and the costs are borne by people who have no say in the matter.&rdquo;
        </blockquote>
        <p className="text-stone-400 mt-3">— David Vine, <em>Base Nation</em>, 2015</p>
      </div>

      {/* Historical Context */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">From Wartime Occupation to Permanent Presence</h2>
        <p>The US overseas base network has its origins in World War II. As American forces liberated Europe and occupied Japan, they built hundreds of military installations. When the war ended, the bases were supposed to be temporary. They weren&apos;t.</p>
        <p>The Cold War provided the justification for a permanent global military presence. NATO bases in Europe, forward-deployed forces in Asia, and naval bases around the world were all framed as essential to containing the Soviet Union. The Soviet Union dissolved in 1991 — <strong>34 years ago</strong> — but the bases remain.</p>
        <p>After the Cold War, instead of closing bases, the US found new justifications: humanitarian intervention (1990s), the War on Terror (2000s), and great power competition with China (2020s). Each era produces new bases while the old ones never close. It&apos;s the military version of the ratchet effect.</p>
        <p>Today, the US maintains more overseas bases than all other countries on earth <strong>combined</strong>. The British Empire at its height had garrisons in about 36 countries. The Roman Empire had legions in roughly 25 regions. The US has troops in 80 countries — and special forces in 134.</p>
      </div>

      {/* Comparison */}
      <div className="bg-amber-50 rounded-xl p-6 my-8 border border-amber-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-amber-800">🌍 No Other Country Comes Close</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm">
          {[
            { country: 'United States', bases: '~750', color: 'text-red-700 font-bold text-xl' },
            { country: 'United Kingdom', bases: '~16', color: 'text-stone-700' },
            { country: 'Russia', bases: '~15', color: 'text-stone-700' },
            { country: 'France', bases: '~10', color: 'text-stone-700' },
            { country: 'China', bases: '1', color: 'text-stone-700' },
          ].map(c => (
            <div key={c.country}>
              <p className={`font-[family-name:var(--font-heading)] ${c.color}`}>{c.bases}</p>
              <p className="text-muted">{c.country}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Bases by Country</h2>
          <BasesChart data={basesData} />
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Troops by Country</h2>
          <TroopsChart data={troopsData} />
        </div>
      </div>

      {/* Full Countries List */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Countries with US Military Presence</h2>
        <div className="space-y-6">
          {fullBaseList.map(r => (
            <div key={r.region}>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">{r.region}</h3>
              <div className="flex flex-wrap gap-2">
                {r.countries.map(c => (
                  <span key={c} className="bg-white rounded-lg px-3 py-1 border text-sm">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grouped by Region */}
      {Object.entries(regions).map(([region, deployments]) => (
        <div key={region} className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">{region}</h2>
          <div className="space-y-4">
            {deployments.map((d: any) => {
              const yearsPresent = 2025 - d.since
              return (
                <div key={d.country} className="bg-white rounded-lg border p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">{d.country}</h3>
                      <p className="text-muted text-sm">Since {d.since} · <strong>{yearsPresent} years</strong> · {d.bases} base{d.bases > 1 ? 's' : ''}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{fmt(d.troops)} troops</p>
                      <p className="text-muted text-sm">{fmtMoney(d.annualCost)}/yr</p>
                    </div>
                  </div>
                  <p className="text-muted text-sm mt-2">{d.note}</p>
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Base Cost Estimates */}
      <div className="bg-stone-50 rounded-xl p-8 my-8 border">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Major Base Costs</h2>
        <div className="space-y-3">
          {baseCostEstimates.map(b => (
            <div key={b.item} className="bg-white rounded-lg p-4 border flex justify-between items-start">
              <div>
                <h4 className="font-bold">{b.item}</h4>
                <p className="text-muted text-xs">{b.note}</p>
              </div>
              <span className="text-primary font-bold font-[family-name:var(--font-heading)] whitespace-nowrap ml-4">{b.cost}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Host Country Payments */}
      <div className="bg-amber-50 rounded-xl p-8 my-8 border border-amber-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-800">💰 Who Pays? Host Nation Support</h2>
        <p className="text-sm text-stone-600 mb-4">Some host countries subsidize US bases through &ldquo;burden sharing&rdquo; agreements. But the subsidy rarely covers the full cost — and the US presence serves US strategic interests, not the host nation&apos;s.</p>
        <div className="space-y-3">
          {hostCountryPayments.map(h => (
            <div key={h.country} className="bg-white rounded-lg p-4 border flex justify-between items-start">
              <div>
                <h4 className="font-bold">{h.country}</h4>
                <p className="text-muted text-xs">{h.note}</p>
              </div>
              <span className="text-amber-700 font-bold whitespace-nowrap ml-4">{h.pays}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BRAC Politics */}
      <div className="prose prose-stone max-w-none mb-8">
        <h2 className="font-[family-name:var(--font-heading)]">Why Bases Never Close: BRAC Politics</h2>
        <p>The Base Realignment and Closure (BRAC) process was created in 1988 because Congress found it politically impossible to close unneeded bases through normal legislation. Every base is in someone&apos;s district, and no member of Congress wants to be the one who &ldquo;lost&rdquo; a military base — even if it&apos;s redundant.</p>
        <p>BRAC has conducted five rounds (1988, 1991, 1993, 1995, 2005), closing approximately 350 installations and saving an estimated $12 billion per year. But the last round was in <strong>2005 — twenty years ago</strong>. Congress has blocked every attempt to authorize a new BRAC round since, despite the Pentagon repeatedly requesting one.</p>
        <p>The Pentagon&apos;s own studies estimate it has <strong>20% excess base capacity</strong> — that&apos;s roughly 150 bases that serve no military purpose but remain open because of political pressure. Each is a jobs program disguised as national security.</p>
        <p>Overseas, the dynamics are similar but involve diplomatic relationships. Closing a base in Japan or Germany would be interpreted as a diplomatic signal, creating foreign policy complications that policymakers use as an excuse to maintain the status quo.</p>
      </div>

      {/* Local Opposition */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">✊ Local Opposition</h2>
        <div className="prose prose-stone max-w-none text-sm">
          <p>US military bases are frequently unwelcome in their host communities. Some of the longest-running protests include:</p>
          <ul>
            <li><strong>Okinawa, Japan:</strong> 70% of US bases in Japan are crammed onto this one island (0.6% of Japan&apos;s land area). A 2019 referendum showed 72% of Okinawans opposed new base construction. Both governments ignored the result. The Okinawan anti-base movement is the longest-running in the world. Sexual assaults by US military personnel — including the 1995 rape of a 12-year-old girl by three Marines — have fueled decades of outrage. Environmental contamination from PFAS chemicals has polluted local water supplies.</li>
            <li><strong>Vicenza, Italy:</strong> Massive protests against the expansion of Camp Ederle. Residents organized under the slogan &ldquo;No Dal Molin&rdquo; — the base was built anyway.</li>
            <li><strong>Ramstein, Germany:</strong> Annual protests against the base&apos;s role as a relay station for US drone strikes in the Middle East and Africa. German courts have ruled the government must ensure US operations from German soil comply with international law.</li>
            <li><strong>Jeju Island, South Korea:</strong> Villagers protested for years against construction of a naval base. The base was built over community opposition, destroying centuries-old volcanic rock formations and a UNESCO-recognized biosphere.</li>
            <li><strong>Diego Garcia:</strong> The Chagossian people were forcibly expelled from their homeland to make way for a US military base. They were dumped in Mauritius with nothing. Their dogs were gassed. They have been fighting for the right to return for over 50 years.</li>
          </ul>
        </div>
      </div>

      {/* Environmental Damage */}
      <div className="bg-red-50 rounded-xl p-8 my-8 border border-red-200">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-800">☣️ Environmental Contamination</h2>
        <p className="text-sm text-stone-600 mb-4">US military bases are among the most polluted sites on earth. From PFAS chemicals in drinking water to depleted uranium in soil, the environmental damage is vast and ongoing.</p>
        <div className="space-y-4">
          {environmentalDamage.map(e => (
            <div key={e.location} className="bg-white rounded-lg p-4 border">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-stone-800">{e.location}</h4>
                <span className="text-red-600 text-xs font-semibold px-2 py-0.5 bg-red-100 rounded-full">{e.issue}</span>
              </div>
              <p className="text-sm text-stone-600">{e.details}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-stone-600 mt-4">The US military is the world&apos;s single largest institutional polluter. Its global operations produce more greenhouse gas emissions than <strong>140 countries</strong>. The Pentagon was specifically exempted from the Kyoto Protocol&apos;s emissions requirements at US insistence.</p>
      </div>

      {/* Cost Context */}
      <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-200">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 text-blue-800">💡 Did You Know?</h3>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>• {fmtMoney(presence.annualBaseCost)}/yr on overseas bases is <strong>more than the entire budget of the Department of Education</strong> ($79B).</li>
          <li>• It costs roughly <strong>$50,000-$150,000 per troop per year</strong> to maintain overseas deployments — including housing, food, transport, and facilities.</li>
          <li>• Many bases were built to counter the Soviet Union. The Soviet Union dissolved <strong>34 years ago</strong>.</li>
          <li>• The US military&apos;s overseas base network produces more <strong>CO₂ than 140 countries</strong>.</li>
          <li>• The Pentagon estimates it has <strong>20% excess base capacity</strong> — about 150 unneeded bases — but Congress refuses to close them.</li>
          <li>• The last BRAC round was in <strong>2005 — 20 years ago</strong>. Congress has blocked every attempt since.</li>
          <li>• The Chagossian people of Diego Garcia were <strong>forcibly expelled and their dogs gassed</strong> to make room for a US military base.</li>
          <li>• Camp Humphreys in South Korea cost <strong>$10.7 billion</strong> to build — the most expensive overseas base ever.</li>
          <li>• US bases in Okinawa occupy <strong>15% of the island</strong>, leaving less land for the 1.5 million Okinawan residents.</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-8 bg-stone-50 rounded-lg p-6 border">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/empire-of-bases" className="text-red-800 hover:underline">→ Empire of Bases — analysis of America&apos;s global military footprint</Link></li>
          <li><Link href="/deployments" className="text-red-800 hover:underline">→ Troop Deployments — where US troops are stationed</Link></li>
          <li><Link href="/spending" className="text-red-800 hover:underline">→ Military Spending — $886B/yr and counting</Link></li>
          <li><Link href="/analysis/pentagon-climate" className="text-red-800 hover:underline">→ Pentagon & Climate — the military&apos;s environmental footprint</Link></li>
          <li><Link href="/opportunity-cost" className="text-red-800 hover:underline">→ What else could $55B/yr buy?</Link></li>
        </ul>
      </div>
    </div>
  )
}
