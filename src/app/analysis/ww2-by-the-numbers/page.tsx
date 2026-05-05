import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'WWII By the Numbers: $4.1T & 405,000 US Dead',
  description: '$4.1T in 2024 dollars. 405,399 US dead. 70-85M worldwide. The war that built the American century and made us an empire.',
  openGraph: {
    title: 'WWII By the Numbers: The Most Expensive War in History',
    description: '$4.1 trillion. 405,399 US dead. 70-85 million worldwide. The war that built and broke the American century.',
    url: 'https://www.warcosts.org/analysis/ww2-by-the-numbers',
    type: 'article',
  },
}

const keyStats = [
  { stat: '$4.1T', label: 'Total US cost in 2024 dollars — 40% of GDP at peak spending', source: 'Congressional Research Service' },
  { stat: '405,399', label: 'American service members killed', source: 'National WWII Museum' },
  { stat: '670,846', label: 'Americans wounded — many catastrophically', source: 'Department of Defense' },
  { stat: '70-85M', label: 'Total worldwide deaths — 3% of the global population', source: 'National WWII Museum' },
  { stat: '16.1M', label: 'Americans who served — 12% of the total US population', source: 'VA Records' },
  { stat: '40%', label: 'Share of US GDP consumed by military spending at peak (1944)', source: 'Bureau of Economic Analysis' },
]

const costByYear = [
  { year: 1941, spending: '$73B', gdpShare: '8.6%', troops: '1.8M', note: 'Pearl Harbor (Dec 7). War production begins.' },
  { year: 1942, spending: '$425B', gdpShare: '27.8%', troops: '3.9M', note: 'Full mobilization. Detroit stops making cars, starts making tanks.' },
  { year: 1943, spending: '$762B', gdpShare: '37.0%', troops: '9.0M', note: 'North Africa, Sicily, Italy. Peak production begins.' },
  { year: 1944, spending: '$912B', gdpShare: '39.8%', troops: '11.5M', note: 'D-Day, island-hopping, strategic bombing at maximum intensity.' },
  { year: 1945, spending: '$831B', gdpShare: '35.8%', troops: '12.1M', note: 'Iwo Jima, Okinawa, Berlin, Manhattan Project, atomic bombs.' },
  { year: '1946-50', spending: '$1.1T', gdpShare: 'N/A', troops: 'Demob', note: 'Demobilization, GI Bill, Marshall Plan, occupation costs.' },
]

const costByCategory = [
  { category: 'Army Ground Forces', amount: '$1.34T', percent: '32.7%', notes: '11.2M soldiers, 89 divisions, campaigns across 3 continents' },
  { category: 'Army Air Forces', amount: '$845B', percent: '20.6%', notes: '158,000 aircraft produced. Strategic bombing campaigns destroyed 67 Japanese and 80 German cities.' },
  { category: 'Navy & Marines', amount: '$623B', percent: '15.2%', notes: '6,768 ships built. Pacific island-hopping campaign. Largest naval battles in history.' },
  { category: 'Manhattan Project', amount: '$30B', percent: '0.7%', notes: '$28B in 2024 dollars for two bombs. 125,000 workers. Three secret cities.' },
  { category: 'Lend-Lease & Allied Aid', amount: '$195B', percent: '4.8%', notes: '$50.1B to 30+ countries. USSR received 400,000 trucks, 14,000 aircraft, 13,000 tanks.' },
  { category: 'Veterans Benefits (GI Bill)', amount: '$308B', percent: '7.5%', notes: '7.8M veterans used education benefits. Created the American middle class.' },
  { category: 'Occupation & Reconstruction', amount: '$412B', percent: '10.0%', notes: 'Marshall Plan ($160B), Japan occupation, Germany occupation through 1955.' },
  { category: 'War Debt Interest', amount: '$343B', percent: '8.4%', notes: 'National debt rose from $49B to $259B. Interest payments continued for decades.' },
]

const casualtiesByTheater = [
  { theater: 'European Theater', usKilled: '185,924', usWounded: '498,948', enemyKilled: '~4.5M (Germany)', civilianDead: '~30M', majorBattles: 'D-Day, Bulge, Hürtgen Forest, Market Garden, Berlin' },
  { theater: 'Pacific Theater', usKilled: '111,606', usWounded: '253,142', enemyKilled: '~2.1M (Japan)', civilianDead: '~26M', majorBattles: 'Midway, Guadalcanal, Iwo Jima, Okinawa, Philippines' },
  { theater: 'Mediterranean/N. Africa', usKilled: '18,558', usWounded: '66,538', enemyKilled: '~620K', civilianDead: '~1.5M', majorBattles: 'Torch, Kasserine, Sicily, Anzio, Monte Cassino' },
  { theater: 'China-Burma-India', usKilled: '5,384', usWounded: '17,170', enemyKilled: '~1.2M (Japan)', civilianDead: '~15-20M', majorBattles: 'Merrill\'s Marauders, the Hump, Burma Road' },
  { theater: 'Other/At Sea', usKilled: '83,927', usWounded: '~35,000', enemyKilled: '~500K', civilianDead: 'N/A', majorBattles: 'Battle of the Atlantic, convoy escorts, POW deaths' },
]

const globalDeathToll = [
  { country: 'Soviet Union', militaryDead: '8.7-11.4M', civilianDead: '12.7-14.6M', totalDead: '24-27M', popPercent: '14%' },
  { country: 'China', militaryDead: '3-4M', civilianDead: '7-16M', totalDead: '15-20M', popPercent: '3-4%' },
  { country: 'Germany', militaryDead: '5.3M', civilianDead: '1.5-3M', totalDead: '6.9-8.8M', popPercent: '8-10%' },
  { country: 'Poland', militaryDead: '240K', civilianDead: '5.6M', totalDead: '5.8M', popPercent: '17%' },
  { country: 'Japan', militaryDead: '2.1-2.3M', civilianDead: '550K-800K', totalDead: '2.6-3.1M', popPercent: '3-4%' },
  { country: 'Yugoslavia', militaryDead: '446K', civilianDead: '581K', totalDead: '1.0M', popPercent: '6.3%' },
  { country: 'United States', militaryDead: '405K', civilianDead: '~12K', totalDead: '419K', popPercent: '0.32%' },
  { country: 'United Kingdom', militaryDead: '384K', civilianDead: '67K', totalDead: '451K', popPercent: '0.94%' },
]

const industrialMobilization = [
  { item: 'Aircraft produced', quantity: '297,000', rate: '~167/day at peak', comparison: 'More than Germany and Japan combined' },
  { item: 'Tanks & armored vehicles', quantity: '102,351', rate: '~57/day at peak', comparison: 'Sherman production alone exceeded all German tanks' },
  { item: 'Ships built', quantity: '6,768', rate: 'One Liberty Ship every 42 days (avg)', comparison: 'More tonnage than all other nations combined' },
  { item: 'Military vehicles', quantity: '2.4 million', rate: '~1,300/day at peak', comparison: 'Trucks won the war — Soviets ran on American Studebakers' },
  { item: 'Bullets manufactured', quantity: '41.4 billion', rate: '~23M/day', comparison: 'Enough to kill every person on Earth 17 times over' },
  { item: 'Bombs dropped', quantity: '2.7 million tons', rate: 'N/A', comparison: 'More than all bombs in all previous wars in history combined' },
  { item: 'Food produced for military', quantity: '22 billion pounds', rate: '~12M lbs/day', comparison: 'US fed its own military AND most allied armies' },
]

const economicTransformation = [
  { metric: 'US GDP', before: '$1.0T (1939)', after: '$2.2T (1945)', change: '+120%', lasting: 'Permanent. US became world\'s dominant economy.' },
  { metric: 'Unemployment', before: '17.2% (1939)', after: '1.2% (1944)', change: '-93%', lasting: 'Post-war full employment lasted until 1950s.' },
  { metric: 'Women in workforce', before: '26% (1940)', after: '36% (1945)', change: '+38%', lasting: 'Never fully reversed. Sparked long-term gender revolution.' },
  { metric: 'National debt', before: '$40.4B (1939)', after: '$260B (1945)', change: '+543%', lasting: '119% of GDP. Took until 1980 to get ratio below 35%.' },
  { metric: 'Federal spending as % GDP', before: '10% (1939)', after: '41% (1945)', change: '+310%', lasting: 'Never returned to pre-war levels. Government permanently grew.' },
  { metric: 'Tax revenue', before: '$5.4B (1939)', after: '$44.5B (1945)', change: '+724%', lasting: 'Income tax went from elite to universal. Withholding invented.' },
  { metric: 'Research & Development', before: '$83M federal (1940)', after: '$1.6B (1945)', change: '+1,827%', lasting: 'Permanent. Created the military-industrial-academic complex.' },
]

const atomicBomb = [
  { aspect: 'Manhattan Project Cost', detail: '$28 billion in 2024 dollars. Three secret cities (Oak Ridge, Hanford, Los Alamos). 125,000 workers, most of whom didn\'t know what they were building.' },
  { aspect: 'Hiroshima (Aug 6, 1945)', detail: 'Little Boy — 15 kilotons. 80,000 killed instantly, 60,000 more by year\'s end. 90% of buildings destroyed within 1 mile.' },
  { aspect: 'Nagasaki (Aug 9, 1945)', detail: 'Fat Man — 21 kilotons. 40,000 killed instantly, 40,000 more by year\'s end. Nagasaki was the backup target; clouds obscured Kokura.' },
  { aspect: 'Long-term casualties', detail: 'Over 200,000 total dead by 1950. Radiation sickness, leukemia, and cancer killed survivors for decades. Hibakusha (survivors) faced discrimination.' },
  { aspect: 'The debate that never ends', detail: 'Truman said it saved 1 million American lives. Historians dispute this. Japan was already negotiating surrender through the Soviets. The bombs may have been aimed more at Moscow than Tokyo.' },
  { aspect: 'The legacy', detail: 'Two bombs. $28 billion. The beginning of an arms race that would cost $12+ trillion over the next 80 years and bring humanity to the brink of extinction multiple times.' },
]

const aftermathCosts = [
  { program: 'Marshall Plan (European Recovery)', cost: '$160B (2024$)', duration: '1948-1952', outcome: 'Rebuilt Western Europe, prevented communist expansion. Possibly the best investment in US history.' },
  { program: 'Japan Occupation & Reconstruction', cost: '$45B (2024$)', duration: '1945-1952', outcome: 'Created a democratic, pacifist Japan that became world\'s 3rd-largest economy.' },
  { program: 'Germany Occupation', cost: '$52B (2024$)', duration: '1945-1955', outcome: 'Divided Germany, then rebuilt West Germany into Europe\'s industrial powerhouse.' },
  { program: 'GI Bill (Servicemen\'s Readjustment Act)', cost: '$308B (2024$)', duration: '1944-1956', outcome: '7.8M veterans educated. Created American middle class. $7 in economic return per $1 spent.' },
  { program: 'Veterans Disability & Healthcare', cost: '$620B+ (2024$)', duration: '1945-present', outcome: 'Last WWII disability payment projected: ~2040. Last WWII veteran\'s death: ~2045.' },
  { program: 'Nuclear Weapons Development (post-war)', cost: '$500B+ (through 1950s)', duration: '1946-1960', outcome: 'Hydrogen bomb, massive nuclear arsenal, creation of permanent nuclear state.' },
]

const warAndRace = [
  { fact: '1 million Black Americans served', detail: 'In segregated units with white officers. Black soldiers liberated concentration camps while unable to eat at lunch counters at home.' },
  { fact: 'Japanese American Internment', detail: '120,000 Japanese Americans imprisoned in concentration camps. 62% were US citizens. Property losses: $6.2B (2024$). The Supreme Court upheld it in Korematsu v. US.' },
  { fact: 'The Double V Campaign', detail: 'Black newspapers pushed "Victory Abroad, Victory at Home." WWII service became a catalyst for the civil rights movement. Veterans like Medgar Evers returned unwilling to accept Jim Crow.' },
  { fact: 'GI Bill Inequality', detail: 'Black veterans were systematically denied GI Bill benefits. White suburbs were built with GI Bill mortgages that Black veterans couldn\'t access. The wealth gap widened.' },
  { fact: 'Native American Code Talkers', detail: 'Navajo, Choctaw, and other Native Americans created unbreakable codes. They returned to reservations with no voting rights and no GI Bill access in many states.' },
]

export default function WW2ByTheNumbersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'WWII By the Numbers: $4.1 Trillion, 405,000 Dead & the War That Made America an Empire',
        description: 'World War II cost the United States $4.1 trillion in 2024 dollars, killed 405,399 Americans, and transformed the country from a republic into a global military empire.',
        url: 'https://www.warcosts.org/analysis/ww2-by-the-numbers',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-15',
        dateModified: '2026-03-15'
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'WWII By the Numbers' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Most Expensive War in Human History
        </h1>
        <p className="text-xl text-stone-300 mb-4">$4.1 Trillion. 405,399 Americans Dead. 70-85 Million Worldwide.</p>
        <p className="text-stone-400 text-lg">
          World War II was the most destructive event in human history. It killed between 70 and 85 million 
          people — 3% of the world&apos;s population. It cost the United States $4.1 trillion in 2024 dollars 
          and consumed 40% of GDP at peak spending. It drafted 16.1 million Americans — 12% of the total 
          population. It transformed the United States from a continental republic that minded its own business 
          into a global military empire with bases on every continent. The &ldquo;Good War&rdquo; was necessary. 
          It was also the event that made permanent global military dominance seem normal — the event that made 
          every war since seem possible.
        </p>
      </div>

      <ShareButtons title="WWII By the Numbers: $4.1 Trillion & the War That Changed Everything" />

      {/* Key Numbers */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 my-8">
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

      {/* Cost by Year */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Price Tag, Year by Year
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          In 1939, the United States spent 1.4% of GDP on its military. By 1944, it was 40%. No nation in 
          history had ever mobilized its economy so completely, so fast. The entire civilian economy was 
          conscripted: car factories made tanks, appliance factories made ammunition, clothing companies 
          made uniforms. Civilian car production was banned from 1942 to 1945. Meat, sugar, gasoline, and 
          rubber were rationed. The entire country became a war machine.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Year</th>
                <th className="text-right py-3 font-semibold text-stone-900">Spending (2024$)</th>
                <th className="text-right py-3 font-semibold text-stone-900">% of GDP</th>
                <th className="text-right py-3 font-semibold text-stone-900">Troops</th>
                <th className="text-left py-3 font-semibold text-stone-900 pl-4">Note</th>
              </tr>
            </thead>
            <tbody>
              {costByYear.map((row) => (
                <tr key={row.year} className="border-b border-stone-100">
                  <td className="py-3 font-medium text-stone-900">{row.year}</td>
                  <td className="text-right py-3 text-red-600 font-semibold">{row.spending}</td>
                  <td className="text-right py-3">{row.gdpShare}</td>
                  <td className="text-right py-3 text-stone-500">{row.troops}</td>
                  <td className="py-3 text-stone-600 text-xs pl-4">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cost by Category */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          Where $4.1 Trillion Went
        </h2>
        <div className="space-y-3">
          {costByCategory.map((item) => (
            <div key={item.category} className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-bold text-stone-900">{item.category}</h3>
                <div className="flex gap-4 text-sm">
                  <span className="text-red-600 font-bold">{item.amount}</span>
                  <span className="text-stone-500">{item.percent}</span>
                </div>
              </div>
              <p className="text-stone-600 text-sm">{item.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Casualties */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Human Cost: 70-85 Million Dead
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          No war in history killed more people. The number is so large — between 70 and 85 million — that it 
          becomes abstract. It helps to break it down: that&apos;s roughly the entire population of modern 
          Germany. Or the combined populations of California, Texas, and Florida. Three percent of every human 
          being alive in 1939 was dead by 1945.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">US Casualties by Theater</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Theater</th>
                <th className="text-right py-3 font-semibold text-stone-900">US Killed</th>
                <th className="text-right py-3 font-semibold text-stone-900">US Wounded</th>
                <th className="text-left py-3 font-semibold text-stone-900 pl-4">Major Battles</th>
              </tr>
            </thead>
            <tbody>
              {casualtiesByTheater.map((row) => (
                <tr key={row.theater} className="border-b border-stone-100">
                  <td className="py-3 font-medium text-stone-900">{row.theater}</td>
                  <td className="text-right py-3 text-red-600 font-semibold">{row.usKilled}</td>
                  <td className="text-right py-3">{row.usWounded}</td>
                  <td className="py-3 text-stone-600 text-xs pl-4">{row.majorBattles}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Global Death Toll by Country</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Country</th>
                <th className="text-right py-3 font-semibold text-stone-900">Military Dead</th>
                <th className="text-right py-3 font-semibold text-stone-900">Civilian Dead</th>
                <th className="text-right py-3 font-semibold text-stone-900">Total</th>
                <th className="text-right py-3 font-semibold text-stone-900">% of Pop</th>
              </tr>
            </thead>
            <tbody>
              {globalDeathToll.map((row) => (
                <tr key={row.country} className={`border-b border-stone-100 ${row.country === 'United States' ? 'bg-red-50' : ''}`}>
                  <td className="py-3 font-medium text-stone-900">{row.country}</td>
                  <td className="text-right py-3">{row.militaryDead}</td>
                  <td className="text-right py-3">{row.civilianDead}</td>
                  <td className="text-right py-3 font-bold text-red-600">{row.totalDead}</td>
                  <td className="text-right py-3 text-stone-500">{row.popPercent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
          <h3 className="font-bold text-red-800 text-lg mb-2">The American Exception</h3>
          <p className="text-stone-700 text-sm">
            The United States lost 0.32% of its population — tragic, but nothing compared to the Soviet 
            Union (14%), Poland (17%), or Yugoslavia (6.3%). America fought the war largely on other 
            people&apos;s soil. No American city was bombed. No American civilians were massacred. This 
            geographic immunity shaped the American view of war as something that happens &ldquo;over 
            there&rdquo; — a view that enabled every intervention that followed.
          </p>
        </div>
      </section>

      {/* Industrial Mobilization */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Arsenal of Democracy: Industrial Mobilization
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The United States didn&apos;t just outfight the Axis — it outproduced them. American factories 
          built more ships, tanks, aircraft, and trucks than every other nation in the war combined. 
          Ford&apos;s Willow Run plant produced a B-24 bomber every 63 minutes. Henry Kaiser&apos;s shipyards 
          built a Liberty Ship in as little as 4 days. The war was won on assembly lines as much as on 
          battlefields.
        </p>

        <div className="space-y-3">
          {industrialMobilization.map((item) => (
            <div key={item.item} className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-bold text-stone-900">{item.item}</h3>
                <span className="text-red-600 font-bold">{item.quantity}</span>
              </div>
              <div className="flex flex-col md:flex-row md:gap-6 text-sm text-stone-600">
                <span>Rate: {item.rate}</span>
                <span>{item.comparison}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Economic Transformation */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          How War Transformed the American Economy
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          WWII ended the Great Depression, created the middle class (via the GI Bill), established 
          America as the world&apos;s dominant economy, invented the military-industrial complex, and 
          permanently expanded the federal government. The America that existed before December 7, 1941 
          and the America that existed after August 15, 1945 were fundamentally different countries.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-3 font-semibold text-stone-900">Metric</th>
                <th className="text-right py-3 font-semibold text-stone-900">Before</th>
                <th className="text-right py-3 font-semibold text-stone-900">After</th>
                <th className="text-right py-3 font-semibold text-stone-900">Change</th>
                <th className="text-left py-3 font-semibold text-stone-900 pl-4">Lasting Impact</th>
              </tr>
            </thead>
            <tbody>
              {economicTransformation.map((row) => (
                <tr key={row.metric} className="border-b border-stone-100">
                  <td className="py-3 font-medium text-stone-900">{row.metric}</td>
                  <td className="text-right py-3 text-stone-600">{row.before}</td>
                  <td className="text-right py-3 text-stone-600">{row.after}</td>
                  <td className="text-right py-3 text-red-600 font-semibold">{row.change}</td>
                  <td className="py-3 text-stone-600 text-xs pl-4">{row.lasting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Atomic Bomb */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Atomic Bomb: $28 Billion That Changed Everything
        </h2>
        <div className="space-y-4">
          {atomicBomb.map((item) => (
            <div key={item.aspect} className="bg-stone-50 border-l-4 border-red-600 p-5">
              <h3 className="font-bold text-stone-900 mb-2">{item.aspect}</h3>
              <p className="text-stone-700 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Aftermath */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Aftermath: Costs That Kept Climbing
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          The $4.1 trillion figure covers only direct wartime costs. The aftermath — occupation, reconstruction, 
          veteran care, nuclear development — added trillions more. The Marshall Plan alone cost $160 billion 
          in 2024 dollars, though it may have been the most cost-effective foreign policy program in American 
          history, rebuilding Europe as a democratic, capitalist bulwark against Soviet expansion.
        </p>

        <div className="space-y-3">
          {aftermathCosts.map((item) => (
            <div key={item.program} className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-bold text-stone-900">{item.program}</h3>
                <span className="text-red-600 font-bold">{item.cost}</span>
              </div>
              <p className="text-stone-600 text-sm">{item.outcome}</p>
              <p className="text-stone-400 text-xs">{item.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Race and WWII */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The &ldquo;Good War&rdquo; and Race in America
        </h2>
        <p className="text-stone-700 text-lg mb-6">
          WWII is remembered as America&apos;s finest hour — the &ldquo;good war&rdquo; against fascism. But 
          America fought fascism with a segregated military, while imprisoning its own citizens based on race, 
          and then denied the GI Bill&apos;s benefits to the Black soldiers who helped win it. The war&apos;s 
          legacy on race is more complicated than the mythology suggests.
        </p>

        <div className="space-y-4">
          {warAndRace.map((item) => (
            <div key={item.fact} className="bg-stone-50 border-l-4 border-red-600 p-5">
              <h3 className="font-bold text-stone-900 mb-2">{item.fact}</h3>
              <p className="text-stone-700 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Legacy */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
          The Permanent War State
        </h2>
        <p className="text-stone-700 text-lg mb-4">
          Before WWII, the United States had no permanent military-industrial complex. It had no overseas 
          bases (outside colonial possessions). It had no intelligence agency. It had no nuclear weapons. It 
          spent 1.4% of GDP on defense. After the war, it had all of these things and never gave them up.
        </p>
        <p className="text-stone-700 text-lg mb-4">
          The &ldquo;temporary&rdquo; wartime state became permanent. The Pentagon, built in 1943 as a 
          temporary wartime headquarters, is still there. The intelligence agencies created during the war 
          became the CIA, NSA, and DIA. The nuclear weapons became an arsenal of 70,000 warheads at peak. 
          The overseas bases became a global empire of 750+ installations in 80 countries.
        </p>

        <div className="bg-stone-900 text-white rounded-lg p-6 mt-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-red-400 mb-3">
            Eisenhower Knew
          </h3>
          <p className="text-stone-300">
            &ldquo;In the councils of government, we must guard against the acquisition of unwarranted 
            influence, whether sought or unsought, by the military-industrial complex. The potential for 
            the disastrous rise of misplaced power exists and will persist.&rdquo; — Dwight D. Eisenhower, 
            the general who won WWII, warning America about what it had become. January 17, 1961. 
            Nobody listened.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="my-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>Congressional Research Service, &ldquo;Costs of Major U.S. Wars&rdquo; (2024)</li>
          <li>National WWII Museum, &ldquo;Research Starters&rdquo; — Casualty and Production Data</li>
          <li>Bureau of Economic Analysis, Historical GDP and Federal Spending Tables</li>
          <li>Department of Defense, WWII Casualty Statistics</li>
          <li>Williamson Murray &amp; Allan R. Millett, <em>A War to Be Won</em> (Belknap, 2000)</li>
          <li>John Keegan, <em>The Second World War</em> (Penguin, 1990)</li>
          <li>Richard Overy, <em>Why the Allies Won</em> (W.W. Norton, 1996)</li>
          <li>Ira Katznelson, <em>When Affirmative Action Was White</em> (W.W. Norton, 2005)</li>
          <li>Alex Wellerstein, <em>Restricted Data: The History of Nuclear Secrecy</em> (U of Chicago, 2021)</li>
          <li>VA Budget Office, Historical Veterans Benefits Data</li>
        </ul>
      </section>

      <RelatedArticles articles={[
        { slug: 'americas-wars-by-the-numbers', title: 'America\'s Wars By the Numbers', desc: 'Every US war ranked by cost, deaths, and duration.' },
        { slug: 'cost-of-korean-war', title: 'The Cost of the Korean War', desc: '$389B, 36,574 dead — the template for every war that followed.' },
        { slug: 'nuclear-close-calls', title: 'Nuclear Close Calls', desc: 'At least 22 times, the world came within minutes of nuclear war.' },
        { slug: 'war-economy', title: 'The War Economy', desc: 'How WWII built the American economy — and trapped it.' },
      ]} />

      <BackToTop />
    </div>
  )
}
