import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'How Many US Soldiers Died in War? Every Conflict',
  description: '1.03 million combat deaths from the Revolution to the War on Terror. A complete accounting of every war, every number.',
  openGraph: {
    title: 'How Many US Soldiers Have Died in War? Every Conflict Counted',
    description: '1.03 million combat deaths. From the Revolution to the War on Terror. Every war. Every number.',
    url: 'https://www.warcosts.org/analysis/how-many-us-soldiers-died',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.warcosts.org/analysis/how-many-us-soldiers-died',
  },
}

const warDeaths = [
  { war: 'American Revolution', years: '1775–1783', combatDeaths: 6824, otherDeaths: 18500, wounded: 8445, total: 25324, population: '2.5M', perCapita: '1.0%', note: 'Disease killed far more than combat' },
  { war: 'War of 1812', years: '1812–1815', combatDeaths: 2260, otherDeaths: 15000, wounded: 4505, total: 17260, population: '7.6M', perCapita: '0.2%', note: 'Including Battle of New Orleans' },
  { war: 'Mexican-American War', years: '1846–1848', combatDeaths: 1733, otherDeaths: 11550, wounded: 4152, total: 13283, population: '21M', perCapita: '0.06%', note: '87% of deaths from disease' },
  { war: 'Civil War (Union)', years: '1861–1865', combatDeaths: 140414, otherDeaths: 224097, wounded: 281881, total: 364511, population: '22M (North)', perCapita: '1.7%', note: 'Bloodiest war in US history' },
  { war: 'Civil War (Confederate)', years: '1861–1865', combatDeaths: 74524, otherDeaths: 184000, wounded: 137000, total: 258524, population: '9M (South)', perCapita: '2.9%', note: 'Estimated — records incomplete' },
  { war: 'Spanish-American War', years: '1898', combatDeaths: 385, otherDeaths: 2061, wounded: 1662, total: 2446, population: '76M', perCapita: '<0.01%', note: '5x more died of disease than combat' },
  { war: 'World War I', years: '1917–1918', combatDeaths: 53402, otherDeaths: 63114, wounded: 204002, total: 116516, population: '103M', perCapita: '0.11%', note: 'US entered late; 19 months of combat' },
  { war: 'World War II', years: '1941–1945', combatDeaths: 291557, otherDeaths: 113842, wounded: 670846, total: 405399, population: '133M', perCapita: '0.30%', note: 'Deadliest war for US in absolute terms' },
  { war: 'Korean War', years: '1950–1953', combatDeaths: 33739, otherDeaths: 2835, wounded: 103284, total: 36574, population: '151M', perCapita: '0.02%', note: 'The "Forgotten War"' },
  { war: 'Vietnam War', years: '1955–1975', combatDeaths: 47434, otherDeaths: 10786, wounded: 153303, total: 58220, population: '205M', perCapita: '0.03%', note: '304,000 wounded total (inc. non-hostile)' },
  { war: 'Gulf War (Desert Storm)', years: '1990–1991', combatDeaths: 148, otherDeaths: 145, wounded: 467, total: 293, population: '249M', perCapita: '<0.01%', note: '100-hour ground war' },
  { war: 'Afghanistan', years: '2001–2021', combatDeaths: 1922, otherDeaths: 539, wounded: 20744, total: 2461, population: '310M', perCapita: '<0.01%', note: 'America\'s longest war (20 years)' },
  { war: 'Iraq War', years: '2003–2011', combatDeaths: 3519, otherDeaths: 912, wounded: 32292, total: 4431, population: '297M', perCapita: '<0.01%', note: 'Plus ~3,500 contractor deaths' },
  { war: 'War on Terror (other)', years: '2001–present', combatDeaths: 130, otherDeaths: 35, wounded: 350, total: 165, population: '335M', perCapita: '<0.01%', note: 'Syria, Yemen, Somalia, Niger, etc.' },
]

export default function HowManyUSSoldiersDiedPage() {
  const totalCombat = warDeaths.reduce((sum, w) => sum + w.combatDeaths, 0)
  const totalOther = warDeaths.reduce((sum, w) => sum + w.otherDeaths, 0)
  const totalWounded = warDeaths.reduce((sum, w) => sum + w.wounded, 0)
  const totalAll = warDeaths.reduce((sum, w) => sum + w.total, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How Many US Soldiers Have Died in War? Every Conflict Counted',
        description: 'A complete accounting of American military deaths across every major war — over 1 million combat deaths from the Revolution to the present.',
        url: 'https://www.warcosts.org/analysis/how-many-us-soldiers-died',
        author: { '@type': 'Organization', name: 'WarCosts.org' },
        publisher: { '@type': 'Organization', name: 'WarCosts.org' },
        datePublished: '2026-03-28',
        dateModified: '2026-03-28',
      })}} />

      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'US Soldiers Killed in Every War' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">Complete Accounting</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          How Many US Soldiers Have Died in War?
        </h1>
        <p className="text-xl text-stone-300 mb-4">
          Every conflict counted. {totalCombat.toLocaleString()} combat deaths. {totalAll.toLocaleString()} total deaths. 250 years of war.
        </p>
        <p className="text-stone-400 text-lg">
          Since the first shots of the American Revolution in 1775, over one million American service members
          have been killed in combat. Hundreds of thousands more died from disease, accidents, and other causes
          during wartime. Over 1.5 million have been wounded. Each number represents a person who never came home.
        </p>
      </div>

      <ShareButtons title="How Many US Soldiers Have Died in War? Every Conflict Counted" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: totalCombat.toLocaleString(), label: 'Combat Deaths', sub: 'Killed in action across all wars' },
          { val: totalAll.toLocaleString(), label: 'Total Deaths', sub: 'Including disease, accidents, other' },
          { val: totalWounded.toLocaleString(), label: 'Wounded', sub: 'Survived but injured in combat' },
          { val: '14+', label: 'Major Wars', sub: 'From 1775 to present' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Main table */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Every War, Every Number</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-semibold">War</th>
                <th className="text-left p-3 font-semibold">Years</th>
                <th className="text-right p-3 font-semibold">Combat Deaths</th>
                <th className="text-right p-3 font-semibold">Other Deaths</th>
                <th className="text-right p-3 font-semibold">Total Deaths</th>
                <th className="text-right p-3 font-semibold">Wounded</th>
              </tr>
            </thead>
            <tbody>
              {warDeaths.map(w => (
                <tr key={`${w.war}-${w.years}`} className="border-t hover:bg-stone-50">
                  <td className="p-3 font-semibold">{w.war}</td>
                  <td className="p-3 text-stone-500 font-mono text-xs">{w.years}</td>
                  <td className="p-3 text-right text-red-700 font-mono">{w.combatDeaths.toLocaleString()}</td>
                  <td className="p-3 text-right text-stone-500 font-mono">{w.otherDeaths.toLocaleString()}</td>
                  <td className="p-3 text-right font-bold font-mono">{w.total.toLocaleString()}</td>
                  <td className="p-3 text-right text-amber-700 font-mono">{w.wounded.toLocaleString()}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-red-300 bg-red-50 font-bold">
                <td className="p-3" colSpan={2}>TOTAL (All Wars)</td>
                <td className="p-3 text-right text-red-700 font-mono">{totalCombat.toLocaleString()}</td>
                <td className="p-3 text-right font-mono">{totalOther.toLocaleString()}</td>
                <td className="p-3 text-right font-mono">{totalAll.toLocaleString()}</td>
                <td className="p-3 text-right text-amber-700 font-mono">{totalWounded.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400 mt-3">
          Sources: Congressional Research Service, &ldquo;American War and Military Operations Casualties,&rdquo; updated 2024;
          Department of Defense Personnel and Readiness; National Archives; Department of Veterans Affairs
        </p>
      </section>

      {/* Context cards */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">War by War: Key Context</h2>
        <div className="space-y-4">
          {warDeaths.filter(w => w.total > 10000).map(w => (
            <div key={`${w.war}-detail`} className="bg-white border rounded-lg p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-stone-900">{w.war}</h3>
                  <span className="text-stone-400 text-sm">{w.years}</span>
                </div>
                <span className="text-red-700 font-bold text-lg">{w.total.toLocaleString()} dead</span>
              </div>
              <p className="text-sm text-stone-600 mb-2">{w.note}</p>
              <div className="flex gap-4 text-xs text-stone-500">
                <span>US Population: {w.population}</span>
                <span>Deaths as % of population: {w.perCapita}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Civil War dominates */}
      <section className="mb-12">
        <div className="bg-stone-900 text-white rounded-xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Civil War: America&apos;s Bloodiest Conflict</h2>
          <p className="text-stone-300 mb-4">
            The Civil War accounts for more American deaths than all other wars <em>combined</em>. When you
            count both Union and Confederate dead, approximately 620,000–750,000 Americans died in just four years.
            Recent scholarship suggests the total may be as high as 850,000.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-2xl font-bold text-red-400">~750,000</p>
              <p className="text-stone-400 text-sm">Total dead (Union + Confederate)</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-2xl font-bold text-red-400">2.4%</p>
              <p className="text-stone-400 text-sm">Of total US population killed</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-2xl font-bold text-red-400">~7.5M</p>
              <p className="text-stone-400 text-sm">Equivalent in today&apos;s population</p>
            </div>
          </div>
          <p className="text-stone-400 text-sm mt-4">
            If the same percentage of Americans died in a war today, it would be 7.5 million people —
            the entire population of Washington state.
          </p>
        </div>
      </section>

      {/* MIA/POW */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Missing in Action & Prisoners of War</h2>
        <p className="text-stone-700 mb-4">
          Tens of thousands of Americans are still officially missing from past wars. Their remains have never been
          recovered, and their families never received closure.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { war: 'World War II', mia: '72,647', note: 'Largest number of MIAs — many lost at sea or in Pacific jungles' },
            { war: 'Korean War', mia: '7,608', note: 'Many believed held in North Korea/China; 5,300 in North Korea' },
            { war: 'Vietnam War', mia: '1,582', note: 'POW/MIA issue dominated politics for decades' },
            { war: 'Cold War', mia: '126', note: 'Reconnaissance flights shot down, submarine losses' },
            { war: 'Gulf Wars / War on Terror', mia: '6', note: 'Modern technology reduced but didn\'t eliminate MIAs' },
            { war: 'Total Still Missing', mia: '81,900+', note: 'DPAA working to identify ~200 individuals per year' },
          ].map(item => (
            <div key={item.war} className="bg-stone-50 border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-stone-900">{item.war}</h3>
                <span className="text-red-700 font-bold">{item.mia}</span>
              </div>
              <p className="text-xs text-stone-500 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3">Source: Defense POW/MIA Accounting Agency (DPAA), updated 2024</p>
      </section>

      {/* The changing face of war */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Changing Nature of Military Deaths</h2>
        <div className="space-y-4">
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-semibold text-stone-900 mb-2">Disease Killed More Than Bullets (Until the 20th Century)</h3>
            <p className="text-sm text-stone-600">
              In every American war before World War I, disease killed more soldiers than combat. In the Civil War,
              two-thirds of deaths were from disease — typhoid, dysentery, pneumonia, and malaria. In the
              Spanish-American War, the ratio was 5:1. Modern medicine, sanitation, and antibiotics reversed this
              trend by World War II.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-semibold text-stone-900 mb-2">The Survival Revolution</h3>
            <p className="text-sm text-stone-600">
              In World War II, if you were wounded, you had about a 70% chance of survival. In Vietnam, it improved
              to 76%. In Iraq and Afghanistan, survival rates reached <strong>90%+</strong> thanks to body armor,
              MedEvac helicopters, combat medics, and advanced trauma surgery. This means more survivors — but also
              more veterans living with severe injuries, amputations, traumatic brain injuries, and PTSD.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-semibold text-stone-900 mb-2">Suicide: The Post-War Casualty</h3>
            <p className="text-sm text-stone-600">
              Over 30,000 post-9/11 veterans have died by suicide — more than four times the 7,057 killed in
              combat. If you include Vietnam-era veteran suicides, the number is likely over 100,000.
              The war doesn&apos;t end when the shooting stops.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <div className="bg-stone-100 border rounded-xl p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">The Weight of a Number</h2>
          <p className="text-stone-700 mb-3">
            Over one million Americans have died in combat. Each was someone&apos;s child. Many were someone&apos;s
            parent, sibling, spouse. The numbers are staggering, but they are not abstract — they represent
            real people who were sent to war by their government and never came home.
          </p>
          <p className="text-stone-700">
            These numbers should make us think carefully about when and why we send Americans into harm&apos;s way.
            Every war has a cost in lives. Before the next one begins, we owe it to those we&apos;ve already lost
            to ask: Is it worth it? Is there another way?
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Sources & Citations</h2>
        <ul className="text-sm text-stone-600 space-y-1 list-disc pl-5">
          <li>Congressional Research Service, &ldquo;American War and Military Operations Casualties: Lists and Statistics,&rdquo; updated January 2024</li>
          <li>Department of Defense, <em>Defense Casualty Analysis System (DCAS)</em></li>
          <li>National Archives, <em>Statistical Information about Fatal Casualties of the Vietnam War</em></li>
          <li>Defense POW/MIA Accounting Agency (DPAA), <em>Personnel Accounting: Past Conflicts</em></li>
          <li>J. David Hacker, &ldquo;A Census-Based Count of the Civil War Dead,&rdquo; <em>Civil War History</em>, December 2011</li>
          <li>Department of Veterans Affairs, <em>National Veteran Suicide Prevention Annual Report</em>, 2024</li>
          <li>Watson Institute, Brown University, &ldquo;Costs of War: US Military Personnel&rdquo;</li>
          <li>iCasualties.org, <em>Operation Iraqi Freedom / Operation Enduring Freedom casualty database</em></li>
        </ul>
      </section>

      <div className="text-center text-sm text-stone-500 mb-8">
        <p>Last updated: March 2026</p>
        <Link href="/analysis" className="text-red-700 hover:underline">← Back to All Analysis</Link>
      </div>

      <BackToTop />
    </div>
  )
}
