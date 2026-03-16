import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Boxer Rebellion — US Role in China\'s 1899-1901 Crisis, Eight-Nation Alliance, $333M Indemnity | WarCosts',
  description: 'The US sent 2,500 troops to China during the Boxer Rebellion (1899-1901). Part of the Eight-Nation Alliance, Americans fought in the Siege of Peking. 33 US soldiers killed. The $333M Boxer Indemnity shaped US-China relations for decades.',
  keywords: ['Boxer Rebellion', 'Boxer Uprising', 'Siege of Peking', 'Eight-Nation Alliance', 'Boxer Indemnity', 'US China 1900', 'Open Door Policy', 'Marines Beijing'],
  openGraph: {
    title: 'The Boxer Rebellion — America in the Eight-Nation Alliance',
    description: '2,500 US troops in China, 33 killed, and a $333M indemnity that shaped a century of US-China relations. The forgotten intervention.',
    url: 'https://warcosts.org/boxer-rebellion',
    type: 'article',
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const keyStats = [
  { label: 'US Troops Deployed', value: '2,500' },
  { label: 'US Killed', value: '33' },
  { label: 'US Wounded', value: '159' },
  { label: 'Boxer Indemnity (Total)', value: '$333 Million' },
  { label: 'US Share of Indemnity', value: '$25 Million' },
  { label: 'Chinese Killed', value: '100,000+' },
]

const costBreakdown = [
  { category: 'Military Operations', amount: '$50M', desc: 'Deployment and combat operations of 2,500 US troops, naval vessels, and supply' },
  { category: 'US Share of Boxer Indemnity', amount: '$650M', desc: '$25M (1901 dollars) extracted from China; half later returned for Chinese students\' education' },
  { category: 'Naval Operations (Asia Station)', amount: '$30M', desc: 'US Navy Asiatic Squadron support and patrol operations' },
  { category: 'Garrison & Legation Guard', amount: '$20M', desc: 'Post-conflict legation guard maintained in Peking until 1941' },
]

const timeline = [
  { year: '1839-1899', title: 'Century of Humiliation', desc: 'China endures decades of foreign exploitation. The Opium Wars (1839-42, 1856-60) force open Chinese ports. The Treaty of Nanking cedes Hong Kong to Britain. Foreign powers carve China into "spheres of influence." By the 1890s, Britain, France, Germany, Russia, and Japan all control territory within China. The Qing Dynasty, once the world\'s greatest empire, is a dying state being dismembered by foreign powers.' },
  { year: '1899', title: 'The Open Door Policy', desc: 'Secretary of State John Hay announces the "Open Door" policy — demanding equal commercial access to China for all foreign powers. The US frames this as protecting Chinese sovereignty; in reality, it\'s protecting American commercial interests. Having arrived late to the imperialist scramble, the US wants to ensure it isn\'t locked out by European and Japanese spheres of influence.' },
  { year: '1899-1900', title: 'The Boxers Rise', desc: 'The "Society of Righteous and Harmonious Fists" (called "Boxers" by Westerners) emerges in northern China. Originally anti-Qing, the movement turns against foreigners — missionaries, diplomats, Chinese Christians, and the symbols of foreign domination. Boxers believe ritual practices make them invulnerable to bullets. They begin attacking foreign nationals and Chinese converts. The movement has genuine popular support rooted in decades of foreign exploitation.' },
  { year: 'Jun 1900', title: 'Siege of the Legations', desc: 'Boxers, tacitly supported by Empress Dowager Cixi, besiege the Foreign Legation Quarter in Peking (Beijing). Approximately 900 foreign civilians, 400 soldiers (including 56 US Marines under Captain John T. Myers), and 2,800 Chinese Christians shelter behind barricades. The siege lasts 55 days. The German minister, Clemens von Ketteler, is murdered on the street by a Qing soldier.' },
  { year: 'Jun 10, 1900', title: 'Seymour Expedition Fails', desc: 'British Admiral Edward Seymour leads 2,000 troops from eight nations (including 112 Americans) toward Peking to relieve the legations. The expedition is halted by Boxer and Imperial Chinese forces at Langfang and forced to retreat. The failure demonstrates that a much larger force is needed.' },
  { year: 'Jun 17, 1900', title: 'Capture of Taku Forts', desc: 'Eight-nation naval forces capture the Taku Forts guarding the approach to Tianjin. The Qing court, seeing the foreign attack on Chinese fortifications, officially supports the Boxers and declares war on all foreign powers simultaneously. It is perhaps the most suicidal declaration of war in history.' },
  { year: 'Jul 13-14, 1900', title: 'Battle of Tientsin', desc: 'Allied forces, including the US 9th Infantry Regiment and US Marines, assault Tientsin (Tianjin). The city falls after fierce fighting. US Marine Private Dan Daly — later one of only two Marines to earn two Medals of Honor — distinguishes himself. The 9th Infantry, a Buffalo Soldier regiment, fights alongside troops from seven other nations. Approximately 800 Chinese defenders are killed.' },
  { year: 'Aug 4-14, 1900', title: 'March to Peking', desc: 'A multinational force of approximately 20,000 (including 2,500 Americans under General Adna Chaffee) advances from Tientsin to Peking. The force fights several engagements along the way. The US contingent, drawn from Philippine-American War forces, is battle-hardened and effective. The alliance is fractious — Russia, Japan, Britain, and France all have competing imperial ambitions in China.' },
  { year: 'Aug 14, 1900', title: 'Relief of the Legations', desc: 'The allied force reaches Peking and fights into the city. The US 14th Infantry scales the walls near the Tung Pien gate. The British reach the legations first, ending the 55-day siege. The Empress Dowager flees disguised as a peasant. Peking falls to the foreign alliance. What follows is an orgy of looting by all eight nations — soldiers and diplomats alike strip the Forbidden City and imperial palaces of treasures.' },
  { year: 'Sep 1901', title: 'Boxer Protocol', desc: 'The Boxer Protocol imposes devastating terms on China: execution of officials who supported the Boxers, destruction of Chinese forts, foreign troops permanently stationed in China, and an indemnity of $333 million (approximately $10 billion today) — to be paid over 39 years at interest. The indemnity is larger than China\'s annual tax revenue. It ensures China\'s subjugation to foreign powers for decades to come.' },
]

const eightNations = [
  { nation: 'Japan', troops: '8,000', note: 'Largest contingent; used the crisis to expand influence in Manchuria' },
  { nation: 'Russia', troops: '4,800', note: 'Used the crisis to occupy Manchuria — refused to leave, leading to the Russo-Japanese War (1904-05)' },
  { nation: 'Britain', troops: '3,000', note: 'Largest imperial power in China; protected Hong Kong and Yangtze Valley interests' },
  { nation: 'United States', troops: '2,500', note: 'Drawn from Philippine-American War forces; advocated "Open Door" commercial access' },
  { nation: 'France', troops: '800', note: 'Protected Indochina interests and Catholic missions' },
  { nation: 'Germany', troops: '900', note: 'Kaiser Wilhelm II urged troops to "act like Huns"; revenge for murdered minister von Ketteler' },
  { nation: 'Austria-Hungary', troops: '75', note: 'Minimal contribution; participated primarily for prestige' },
  { nation: 'Italy', troops: '53', note: 'Smallest contingent; seeking colonial concessions' },
]

const keyFigures = [
  { name: 'John Hay', role: 'US Secretary of State', desc: 'Architect of the "Open Door" policy. Hay framed US involvement as protecting Chinese sovereignty and equal commercial access — a cover for ensuring American business interests in China. The Open Door became the foundation of US China policy for decades and was cited as a cause of US-Japan tensions leading to WWII.' },
  { name: 'Adna Chaffee', role: 'General, US Forces China', desc: 'Commanded the 2,500-man American contingent. A veteran of the Civil War and Indian Wars, Chaffee was transferred from the Philippines for the China operation. He tried to restrain allied looting — with limited success. His troops were among the more disciplined forces in Peking.' },
  { name: 'Empress Dowager Cixi', role: 'De Facto Ruler of China', desc: 'Threw the Qing Dynasty\'s support behind the Boxers after initially hedging. Her decision to declare war on eight foreign powers simultaneously was catastrophic. Fled Peking disguised as a peasant. Returned in 1902 and implemented reforms — too little, too late. The Qing Dynasty fell in 1912.' },
  { name: 'Dan Daly', role: 'USMC Private', desc: 'Earned the first of his two Medals of Honor defending the legation quarter during the siege. Later earned a second in Haiti (1915). One of only two Marines to receive two Medals of Honor for separate actions (the other was Smedley Butler, who also served in the Boxer campaign).' },
  { name: 'Herbert Hoover', role: 'Mining Engineer (Future President)', desc: 'The future 31st President was a young mining engineer in Tientsin during the Boxer Rebellion. He and his wife Lou helped organize food distribution during the siege. Hoover guided US Marines through the city. The experience shaped his later career in humanitarian relief.' },
]

const faqs = [
  {
    q: 'What was the Boxer Rebellion?',
    a: 'The Boxer Rebellion (1899-1901) was an anti-foreign, anti-Christian uprising in China led by the "Society of Righteous and Harmonious Fists" (called "Boxers" by Westerners). The Boxers, supported by elements of the Qing Dynasty government, besieged foreign legations in Peking and attacked foreign nationals throughout northern China. An Eight-Nation Alliance (including the US) intervened militarily, relieving the siege and imposing harsh terms on China through the Boxer Protocol.',
  },
  {
    q: 'How many Americans were involved in the Boxer Rebellion?',
    a: 'Approximately 2,500 US troops participated, drawn primarily from forces already deployed in the Philippines. The contingent included the 9th and 14th Infantry Regiments and elements of the US Marine Corps. 33 Americans were killed and 159 wounded. The US also maintained a legation guard of 56 Marines during the 55-day siege of Peking.',
  },
  {
    q: 'What was the Boxer Indemnity?',
    a: 'The Boxer Protocol (1901) imposed a $333 million indemnity on China (approximately $10 billion today), payable over 39 years with interest. The US share was approximately $25 million. In 1908, the US began returning its excess indemnity funds (about half) to China, earmarked for educating Chinese students in America. This "returned indemnity" funded Tsinghua University and generations of Chinese scholars — and was a remarkably effective soft power investment.',
  },
  {
    q: 'Why did the US get involved in the Boxer Rebellion?',
    a: 'Three reasons: (1) Protecting American citizens and diplomats besieged in Peking, (2) enforcing the "Open Door" policy — ensuring US commercial access to Chinese markets, and (3) maintaining great-power status. The US had just acquired the Philippines and was establishing itself as a Pacific power. Staying out of the China crisis would have marginalized American influence in Asia.',
  },
  {
    q: 'What happened to China after the Boxer Rebellion?',
    a: 'The Boxer Protocol devastated China financially and politically. The massive indemnity, combined with foreign troops permanently stationed on Chinese soil, deepened the "Century of Humiliation" that remains central to Chinese national consciousness. The Qing Dynasty fell in 1912. The humiliations of the Boxer era are still invoked by Chinese leaders to justify assertive foreign policy and resistance to Western pressure.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function BoxerRebellionPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Boxer Rebellion' }]} />
        <ShareButtons title="The Boxer Rebellion — America in China, 1900" />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Boxer Rebellion
          </h1>
          <p className="text-lg text-stone-500 mb-2">1899–1901 · US Role in the Eight-Nation Alliance</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            <strong className="text-[#991b1b]">2,500 US troops</strong> sent to China.{' '}
            <strong className="text-[#991b1b]">33 killed</strong>. Part of an eight-nation invasion force
            that crushed the Boxer uprising, looted Peking, and imposed a{' '}
            <strong className="text-[#991b1b]">$333 million indemnity</strong> on a dying empire. The forgotten
            intervention that shaped a century of US-China relations — and still echoes in Beijing today.
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

        {/* Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Cost: Measured in Humiliation
          </h2>
          <p className="text-stone-700 mb-6">
            The financial cost to the US was modest. The cost to China was catastrophic — and the
            geopolitical cost is still being paid. The Boxer Protocol&apos;s indemnity and terms of
            foreign occupation humiliated China for decades and remain a foundational grievance in
            Chinese national consciousness.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Category</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Amount (2024$)</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800 hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((r) => (
                  <tr key={r.category} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700">{r.category}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">{r.amount}</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline: From Humiliation to Intervention
          </h2>
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

        {/* Eight Nations */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Eight-Nation Alliance
          </h2>
          <p className="text-stone-700 mb-6">
            The alliance was united only by the immediate goal of relieving the legations. Every member
            had competing imperial ambitions in China, and the alliance nearly fractured multiple times
            over looting, territorial claims, and post-war concessions.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">Nation</th>
                  <th className="text-right py-2 font-semibold text-stone-800">Troops</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800">Role & Motives</th>
                </tr>
              </thead>
              <tbody>
                {eightNations.map((n) => (
                  <tr key={n.nation} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700 font-medium">{n.nation}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b]">{n.troops}</td>
                    <td className="py-2 pl-4 text-stone-500 text-sm">{n.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Figures */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Key Figures
          </h2>
          <div className="space-y-4">
            {keyFigures.map((f) => (
              <div key={f.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="font-semibold text-stone-800">{f.name} <span className="text-sm text-stone-500 font-normal">— {f.role}</span></div>
                <p className="text-sm text-stone-600 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Indemnity */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Boxer Indemnity: Punishment and Soft Power
          </h2>
          <p className="text-stone-700 mb-4">
            The Boxer Protocol imposed a $333 million indemnity on China — approximately $10 billion in
            today&apos;s dollars. At 4% interest over 39 years, the total payment would reach nearly
            $1 billion. The indemnity exceeded China&apos;s annual tax revenue and was explicitly designed
            to keep China financially subordinate to foreign powers.
          </p>
          <p className="text-stone-700 mb-4">
            The US share was approximately $25 million. In 1908, President Theodore Roosevelt began
            returning the excess (the US had over-claimed). The returned funds were used to establish
            the Boxer Indemnity Scholarship Program, which sent thousands of Chinese students to American
            universities. Tsinghua University — today one of China&apos;s most prestigious institutions —
            was founded with returned indemnity funds.
          </p>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg">
            <p className="text-stone-700 text-sm">
              The indemnity return was simultaneously one of the most cynical and effective acts of American
              foreign policy. Cynical because the US had extracted the money through military force in the
              first place. Effective because the resulting scholarships created a generation of
              American-educated Chinese elites who shaped US-China relations for decades. It proved that
              soft power was a better investment than gunboat diplomacy — a lesson the US has periodically
              learned and forgotten ever since.
            </p>
          </div>
        </section>

        {/* Editorial */}
        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: The Memory That Won&apos;t Fade
          </h2>
          <p className="text-stone-700 mb-4">
            The Boxer Rebellion is largely forgotten in America. In China, it is unforgettable. The
            &ldquo;Century of Humiliation&rdquo; — from the First Opium War (1839) through the Boxer
            Protocol (1901) and beyond — is a cornerstone of Chinese national identity and a central
            element of Chinese Communist Party legitimacy.
          </p>
          <p className="text-stone-700 mb-4">
            When Chinese leaders resist Western pressure on trade, Taiwan, the South China Sea, or human
            rights, they are operating within the framework of the Century of Humiliation. The memory of
            foreign troops marching through Peking, looting the imperial palaces, and imposing crushing
            terms — this memory is taught in every Chinese school. It shapes policy. It shapes rhetoric.
            It shapes the determination to never be humiliated again.
          </p>
          <p className="text-stone-700">
            Understanding the Boxer Rebellion is essential to understanding modern China. The nation that
            was carved up by eight foreign powers in 1900 is now the world&apos;s second-largest economy
            and a nuclear-armed superpower. The transformation is driven, in part, by the determination to
            reverse the humiliations that began with the Opium Wars and culminated in the Boxer Protocol.
            Americans may have forgotten they sent troops to China in 1900. The Chinese have not.
          </p>
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
              { href: '/spanish-american-war', label: 'Spanish-American War — America Goes Imperial' },
              { href: '/banana-wars', label: 'Banana Wars — Interventions Continue' },
              { href: '/russian-civil-war', label: 'Russian Civil War Intervention' },
              { href: '/analysis/americas-forgotten-wars', label: 'America\'s Forgotten Wars' },
              { href: '/analysis/china-pivot', label: 'The China Pivot' },
              { href: '/analysis/timeline-of-american-empire', label: 'Timeline of American Empire' },
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
            <li>Diana Preston — The Boxer Rebellion: The Dramatic Story of China&apos;s War on Foreigners (2000)</li>
            <li>David Silbey — The Boxer Rebellion and the Great Game in China (2012)</li>
            <li>Robert Bickers — The Scramble for China: Foreign Devils in the Qing Empire (2011)</li>
            <li>Michael Hunt — The Making of a Special Relationship: The US and China to 1914 (1983)</li>
            <li>Naval History and Heritage Command — US Naval Operations, Boxer Rebellion</li>
            <li>Army Center of Military History — The Boxer Rebellion, 1900</li>
          </ul>
        </section>

        <BackToTop />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Boxer Rebellion: US Role in the 1899-1901 China Crisis',
            description: 'Comprehensive analysis of American involvement in the Boxer Rebellion — the Eight-Nation Alliance, Siege of Peking, and the $333M Boxer Indemnity.',
            url: 'https://warcosts.org/boxer-rebellion',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-16',
            dateModified: '2025-03-16',
          }),
        }}
      />
    </main>
  )
}
