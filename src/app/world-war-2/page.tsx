import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'
import { YearlySpending, TroopLevels, CasualtiesByTheater } from './charts'

export const metadata: Metadata = {
  title: 'World War 2 US Cost — $4.1 Trillion, 405,399 Dead | WarCosts',
  description: 'US involvement in World War II (1941-1945) cost $4.1 trillion in today\'s dollars and killed 405,399 Americans. The war that defeated fascism — and created the permanent military-industrial complex. Complete cost breakdown, casualties, and legacy.',
  keywords: ['World War 2 cost', 'WW2 US casualties', 'how much did WW2 cost', 'World War 2 deaths', 'D-Day', 'atomic bomb cost', 'military industrial complex'],
  openGraph: {
    title: 'World War II — $4.1 Trillion, 405,399 US Dead, The Birth of Empire',
    description: 'The costliest war in human history. America defeated fascism — then built the permanent warfare state that Eisenhower warned about.',
    url: 'https://warcosts.org/world-war-2',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'US Involvement', value: '3 Years, 8 Months' },
  { label: 'Total US Cost (2023 $)', value: '$4.1 Trillion' },
  { label: 'US Military Deaths', value: '405,399' },
  { label: 'US Wounded', value: '671,278' },
  { label: 'Total War Dead (All Nations)', value: '~70-85 Million' },
  { label: 'Peak Military Size', value: '12.2 Million' },
]

const costBreakdown = [
  { category: 'Army & Army Air Forces', amount: 2100, desc: 'Ground operations across two theaters, strategic bombing campaigns' },
  { category: 'Navy & Marines', amount: 1000, desc: 'Pacific naval war, amphibious operations, Atlantic convoy protection' },
  { category: 'War Production / Lend-Lease', amount: 500, desc: '$50B in Lend-Lease aid (2023: ~$500B) to Britain, USSR, China, others' },
  { category: 'Manhattan Project', amount: 30, desc: 'Development of atomic bombs — $2B in 1945 dollars, ~$30B adjusted' },
  { category: 'Veterans Benefits (GI Bill)', amount: 400, desc: 'Education, housing, healthcare for 16 million veterans' },
  { category: 'War Debt Interest', amount: 70, desc: 'National debt peaked at 119% of GDP in 1946' },
]

const yearlySpending = [
  { year: 1940, amount: 50 },
  { year: 1941, amount: 240 },
  { year: 1942, amount: 680 },
  { year: 1943, amount: 1060 },
  { year: 1944, amount: 1160 },
  { year: 1945, amount: 910 },
]

const troopLevels = [
  { year: 1939, troops: 334000 },
  { year: 1940, troops: 458000 },
  { year: 1941, troops: 1800000 },
  { year: 1942, troops: 3900000 },
  { year: 1943, troops: 9000000 },
  { year: 1944, troops: 11500000 },
  { year: 1945, troops: 12200000 },
  { year: 1946, troops: 3000000 },
]

const casualtiesByTheater = [
  { theater: 'Europe (ETO)', deaths: 185 },
  { theater: 'Pacific (PTO)', deaths: 108 },
  { theater: 'Mediterranean', deaths: 55 },
  { theater: 'Other / Training', deaths: 57 },
]

const timeline = [
  { year: 'Sep 1939', title: 'War Begins in Europe', desc: 'Germany invades Poland. Britain and France declare war. The US is officially neutral but FDR begins maneuvering toward involvement. The "Arsenal of Democracy" policy supplies Britain with war materiel through increasingly creative workarounds of neutrality laws.' },
  { year: 'Mar 1941', title: 'Lend-Lease Act', desc: 'Congress passes Lend-Lease, providing $50 billion ($500B adjusted) in military aid to Allied nations — primarily Britain and the Soviet Union. The US is now financing the war while technically not fighting it. Lend-Lease effectively ends American neutrality.' },
  { year: 'Dec 7, 1941', title: 'Pearl Harbor', desc: 'Japan attacks Pearl Harbor, killing 2,403 Americans and destroying much of the Pacific Fleet. Congress declares war on Japan the next day (388-1; the lone dissenter is Jeannette Rankin, who also voted against WWI). Germany declares war on the US on December 11. America is now fighting a two-front global war.' },
  { year: '1942', title: 'The Dark Year', desc: 'Japan conquers the Philippines, Singapore, Dutch East Indies, and much of the Pacific. The Bataan Death March: 75,000 Allied POWs forced to march 65 miles; 10,000 die. But the tide begins to turn: Midway (June), Guadalcanal (August). In Europe, the US invades North Africa (November). At home, 120,000 Japanese-Americans are forced into internment camps.' },
  { year: '1943', title: 'Turning the Tide', desc: 'Allied victory in North Africa, invasion of Sicily and Italy. The Italian campaign bogs down into brutal mountain warfare. In the Pacific, island-hopping begins — Tarawa, where 1,000 Marines die in 76 hours. The strategic bombing campaign against Germany intensifies. The Schweinfurt raids cost the USAAF 25% casualties.' },
  { year: 'Jun 6, 1944', title: 'D-Day', desc: 'The largest amphibious invasion in history: 156,000 Allied troops land on five Normandy beaches. On Omaha Beach alone, 2,400 Americans are killed or wounded in a single day. The invasion opens the Western Front. By end of August, Paris is liberated.' },
  { year: 'Dec 1944', title: 'Battle of the Bulge', desc: 'Germany\'s last major offensive catches the Allies off guard in the Ardennes. 19,000 Americans killed, 47,500 wounded in 6 weeks — the bloodiest battle for US forces in World War II. The offensive fails, and the German army has spent its last reserves.' },
  { year: 'Feb 1945', title: 'Iwo Jima', desc: '6,800 Marines die taking an 8-square-mile volcanic island. The raising of the flag on Mount Suribachi becomes the war\'s most iconic image. The ferocity of Japanese resistance — 21,000 defenders, only 216 surrender — foreshadows the expected cost of invading the Japanese home islands.' },
  { year: 'Apr 1945', title: 'Okinawa and Germany\'s Fall', desc: 'The 82-day Battle of Okinawa: 12,520 US dead, 110,000+ Japanese military and 100,000+ Okinawan civilians killed. Hitler commits suicide April 30. Germany surrenders May 8 (V-E Day).' },
  { year: 'Aug 6-9, 1945', title: 'Atomic Bombs', desc: 'The US drops atomic bombs on Hiroshima (Aug 6, ~80,000 immediate dead) and Nagasaki (Aug 9, ~40,000 immediate dead). Total deaths from both bombs, including radiation effects: 200,000+. The moral debate continues: did the bombs prevent a costly invasion, or were they used on an already-defeated nation primarily to intimidate the Soviet Union?' },
  { year: 'Sep 2, 1945', title: 'Japan Surrenders', desc: 'V-J Day. The most destructive war in human history ends. 70-85 million dead worldwide. The US emerges as the world\'s dominant power — with the atomic bomb, the strongest economy, and military bases spanning the globe. The question: will the wartime mobilization be demobilized? The answer: not entirely. Never again.' },
]

const keyFigures = [
  { name: 'Franklin D. Roosevelt', role: 'US President (1933-1945)', desc: 'Guided America from neutrality to belligerency through Lend-Lease and other measures before Pearl Harbor. Led the wartime alliance with Churchill and Stalin. Approved the Manhattan Project. Died April 12, 1945, weeks before victory. Also ordered the internment of 120,000 Japanese-Americans.' },
  { name: 'Dwight D. Eisenhower', role: 'Supreme Allied Commander, Europe', desc: 'Commanded D-Day and the liberation of Western Europe. As president, he warned of the "military-industrial complex" — the permanent warfare state that WWII created and that he knew from the inside was a threat to democracy.' },
  { name: 'Douglas MacArthur', role: 'Supreme Commander, Pacific', desc: 'Lost the Philippines, returned to liberate them. Commanded the island-hopping campaign. Accepted Japan\'s surrender. Later governed occupied Japan and oversaw its reconstruction — one of America\'s few genuinely successful post-war rebuilding efforts.' },
  { name: 'Harry S. Truman', role: 'US President (1945-1953)', desc: 'Made the decision to use atomic weapons on Hiroshima and Nagasaki. Whether this was necessary to end the war or was primarily aimed at the Soviet Union remains one of history\'s great moral debates.' },
  { name: 'Curtis LeMay', role: 'Commander, Strategic Bombing', desc: 'Architect of the firebombing campaign against Japan that killed an estimated 330,000-900,000 civilians. The March 10, 1945 firebombing of Tokyo killed 100,000 people in a single night. LeMay later acknowledged that had the US lost, he would have been tried as a war criminal.' },
]

const faqs = [
  {
    q: 'How much did World War 2 cost the United States?',
    a: 'World War II cost the United States approximately $4.1 trillion in inflation-adjusted 2023 dollars — making it by far the most expensive war in American history. At its peak, military spending consumed 40% of GDP. The national debt rose from $49 billion in 1941 to $259 billion in 1945, reaching 119% of GDP. The war was financed through war bonds, taxes (top rate: 94%), and borrowing.',
  },
  {
    q: 'How many Americans died in World War 2?',
    a: '405,399 American military personnel died during WWII — 291,557 in combat and 113,842 from other causes. An additional 671,278 were wounded. At peak, 12.2 million Americans were in uniform — roughly 9% of the population. The war affected virtually every American family.',
  },
  {
    q: 'How many total people died in World War 2?',
    a: 'Estimates range from 70 to 85 million dead — roughly 3% of the world\'s 1940 population. This includes the Holocaust (6 million Jews and 5-6 million others), Soviet losses (~27 million), Chinese losses (~15-20 million), and massive civilian casualties from strategic bombing, siege, famine, and disease. It was the deadliest conflict in human history.',
  },
  {
    q: 'Was the atomic bombing of Japan justified?',
    a: 'This remains one of history\'s most debated moral questions. Proponents argue it prevented a costly invasion that could have killed millions. Critics note that Japan was already seeking surrender terms, that the Soviet declaration of war may have been the decisive factor, and that the bombs were partly used to demonstrate nuclear capability to the Soviet Union. Several top US military leaders — including Eisenhower, MacArthur, and Admiral Leahy — later said the bombs were unnecessary.',
  },
  {
    q: 'What was the military-industrial complex?',
    a: 'President Eisenhower coined the term in his 1961 farewell address, warning that the permanent alliance between the military establishment and defense industry — born during WWII and sustained by the Cold War — posed a threat to democracy. The defense budget never returned to pre-war levels. The revolving door between Pentagon, Congress, and contractors became permanent. Every warning Eisenhower issued has come true.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function WorldWar2Page() {
  const totalCost = costBreakdown.reduce((s, r) => s + r.amount, 0)

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'World War II' }]} />
        <ShareButtons title="World War II — $4.1 Trillion, 405,399 US Dead" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            World War II
          </h1>
          <p className="text-lg text-stone-500 mb-2">US involvement: December 1941 – September 1945</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            The most expensive war in American history:{' '}
            <strong className="text-[#991b1b]">$4.1 trillion</strong>,{' '}
            <strong className="text-[#991b1b]">405,399 American dead</strong>,{' '}
            <strong className="text-[#991b1b]">70-85 million dead worldwide</strong>.
            America defeated fascism — then built the permanent warfare state that Eisenhower warned would
            threaten democracy itself.
          </p>
        </header>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {keyStats.map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl md:text-2xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The War That Changed Everything
          </h2>
          <p className="text-stone-700 mb-4">
            World War II is widely considered the most justified war in American history — a necessary fight
            against genuine evil. Unlike most wars on this site, the case for US involvement is strong: Japan
            attacked American territory, Germany declared war on the US, and both Axis powers were committing
            atrocities on an industrial scale.
          </p>
          <p className="text-stone-700 mb-4">
            But even justified wars have costs that must be honestly reckoned. And WWII&apos;s legacy is deeply
            paradoxical: the war that defeated totalitarianism also created the permanent national security state,
            the military-industrial complex, and the global network of bases and alliances that has kept
            America at war — somewhere — for every year since.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-800 italic mb-2">
              &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence,
              whether sought or unsought, by the military-industrial complex. The potential for the disastrous
              rise of misplaced power exists and will persist.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— President Dwight D. Eisenhower, Farewell Address, January 17, 1961</p>
          </div>
        </section>

        {/* Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The $4.1 Trillion Price Tag
          </h2>
          <p className="text-stone-700 mb-6">
            At its peak, WWII consumed 40% of America&apos;s GDP — a mobilization without parallel in the nation&apos;s
            history. The entire economy was restructured for war production. Auto factories built tanks.
            The government rationed food, fuel, and rubber. 16 million Americans served in uniform.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">${r.amount}B</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-stone-400 font-bold">
                  <td className="py-2 text-stone-900">Total</td>
                  <td className="py-2 text-right font-mono text-[#991b1b]">${(totalCost / 1000).toFixed(1)}T</td>
                  <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">2023 inflation-adjusted dollars</td>
                </tr>
              </tbody>
            </table>
          </div>
          <YearlySpending data={yearlySpending} />
          <p className="text-sm text-stone-500 mt-3">
            Annual spending in 2023-adjusted billions. Peak: $1.16 trillion in 1944 — more than double the
            current entire defense budget.
          </p>
        </section>

        {/* Troop Levels */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Mobilization: From 334K to 12.2 Million
          </h2>
          <TroopLevels data={troopLevels} />
          <p className="text-sm text-stone-500 mt-3">
            The US military grew from 334,000 in 1939 to 12.2 million at peak — a 36x increase.
            10 million were drafted. After the war, the military shrank but never returned to pre-war levels.
          </p>
        </section>

        {/* Casualties */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Human Cost
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">American Losses</h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li><strong className="text-[#991b1b]">405,399</strong> US military deaths</li>
                <li><strong className="text-[#991b1b]">291,557</strong> killed in combat</li>
                <li><strong className="text-[#991b1b]">113,842</strong> non-combat deaths</li>
                <li><strong className="text-[#991b1b]">671,278</strong> wounded</li>
                <li><strong className="text-[#991b1b]">124,079</strong> prisoners of war</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">Global Losses</h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li><strong className="text-[#991b1b]">~27 million</strong> Soviet deaths</li>
                <li><strong className="text-[#991b1b]">~15-20 million</strong> Chinese deaths</li>
                <li><strong className="text-[#991b1b]">~6 million</strong> Holocaust victims</li>
                <li><strong className="text-[#991b1b]">~5-6 million</strong> other genocide victims</li>
                <li><strong className="text-[#991b1b]">70-85 million</strong> total dead worldwide</li>
              </ul>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-stone-800 mb-3">US Deaths by Theater</h3>
          <CasualtiesByTheater data={casualtiesByTheater} />
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
            <div className="space-y-6">
              {timeline.map((event) => (
                <div key={event.year} className="relative pl-10">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#991b1b]" />
                  <div className="text-sm font-mono text-[#991b1b] mb-1">{event.year}</div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-1">{event.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark chapters */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Dark Chapters
          </h2>
          <div className="space-y-4">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">Japanese-American Internment</h3>
              <p className="text-sm text-stone-600">
                Executive Order 9066 forced 120,000 Japanese-Americans — two-thirds of them US citizens — into
                internment camps. They lost homes, businesses, and property worth billions. No Japanese-American
                was ever found guilty of espionage or sabotage. In 1988, the US formally apologized and paid
                $20,000 to each surviving internee — a fraction of what was stolen.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">Strategic Bombing of Civilians</h3>
              <p className="text-sm text-stone-600">
                The US firebombing campaign against Japan killed an estimated 330,000-900,000 civilians.
                The March 10, 1945 firebombing of Tokyo killed ~100,000 people in a single night — more than
                either atomic bomb. 67 Japanese cities were firebombed. In Europe, the USAAF conducted area
                bombing that killed tens of thousands of German civilians. Curtis LeMay acknowledged these
                attacks would be considered war crimes if the US had lost.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">Hiroshima and Nagasaki</h3>
              <p className="text-sm text-stone-600">
                The atomic bombings killed approximately 200,000+ people, most of them civilians. Whether they
                were necessary to end the war is debated: Japan was already seeking peace terms, the Soviet entry
                into the Pacific War may have been decisive, and several top US commanders later said the bombs
                were unnecessary. What is certain: they inaugurated the nuclear age and an arms race that
                brought humanity to the brink of annihilation multiple times.
              </p>
            </div>
          </div>
        </section>

        {/* Key Figures */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Key Figures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFigures.map((fig) => (
              <div key={fig.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <h3 className="font-semibold text-stone-800">{fig.name}</h3>
                <p className="text-xs text-[#991b1b] mb-2">{fig.role}</p>
                <p className="text-sm text-stone-600">{fig.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: The Birth of the American Empire
          </h2>
          <div className="space-y-4">
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The Military-Industrial Complex</h3>
              <p className="text-sm text-stone-600">
                Before WWII, the US had no permanent arms industry. The war created one — and it never went away.
                Defense companies that built tanks and bombers became permanent institutions, lobbying Congress for
                continued spending. The revolving door between Pentagon, Congress, and defense contractors became
                the defining feature of American governance. Eisenhower saw it from the inside and warned the nation.
                The nation didn&apos;t listen.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">800+ Military Bases Worldwide</h3>
              <p className="text-sm text-stone-600">
                WWII bases in Germany, Japan, Italy, and the UK were never closed. They became the foundation
                of a global military empire — 800+ bases in 80+ countries. The temporary wartime presence became
                permanent. Annual cost: hundreds of billions. No other nation in history has maintained such a
                global military footprint.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The Nuclear Age</h3>
              <p className="text-sm text-stone-600">
                The Manhattan Project opened Pandora&apos;s box. The nuclear arms race with the Soviet Union consumed
                trillions of dollars, brought humanity to the brink of extinction multiple times, and created
                an arsenal of 70,000+ warheads at peak. The US has spent an estimated $10+ trillion on nuclear
                weapons since 1945 — a direct consequence of WWII&apos;s final chapter.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-2">The Good War Myth</h3>
              <p className="text-sm text-stone-600">
                WWII became the template against which all subsequent wars were (favorably) compared. Every enemy
                became &ldquo;the next Hitler.&rdquo; Every intervention was framed as a fight against evil.
                The myth of the Good War made it easier to sell Korea, Vietnam, Iraq, and every war since.
                The reality — that WWII was uniquely justified and that most wars are not — was lost.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-stone-200 pb-4">
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/world-war-1', label: 'World War I — The Prequel' },
              { href: '/how-much-did-ww2-cost', label: 'WWII Cost Deep Dive' },
              { href: '/korean-war', label: 'Korean War — The Cold War Begins' },
              { href: '/nuclear', label: 'Nuclear Arsenal — The WWII Legacy' },
              { href: '/analysis/military-industrial-complex', label: 'The Military-Industrial Complex' },
              { href: '/us-military-bases-around-the-world', label: '800+ Bases Worldwide' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-stone-50 hover:bg-stone-100 rounded-lg p-3 border border-stone-200 text-stone-700 hover:text-[#991b1b] transition-colors text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>Congressional Research Service — Costs of Major U.S. Wars</li>
            <li>National WWII Museum — By the Numbers</li>
            <li>Department of Defense — WWII Casualty Statistics</li>
            <li>U.S. Bureau of the Budget — Federal Budget Historical Tables</li>
            <li>John Dower — <em>War Without Mercy</em> (1986)</li>
            <li>Gar Alperovitz — <em>The Decision to Use the Atomic Bomb</em> (1995)</li>
          </ul>
        </section>

        <BackToTop />
      </div>
    </main>
  )
}
