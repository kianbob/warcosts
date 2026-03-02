import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'History of US War Propaganda — From WWI Posters to Social Media | WarCosts',
  description: 'How the US government manufactured consent for war: WWI posters, WWII Hollywood, Cold War Red Scare, Vietnam credibility gap, Gulf War CNN, Iraq WMDs, and the social media era.',
  openGraph: {
    title: 'History of US War Propaganda — Manufacturing Consent',
    description: 'From Uncle Sam to social media: how Americans were sold every war.',
    url: 'https://warcosts.org/war-propaganda',
    type: 'article',
  },
}

const eras = [
  {
    era: 'World War I (1917–1918)',
    subtitle: 'The Birth of State Propaganda',
    color: 'bg-amber-50 border-amber-200',
    accentColor: 'text-amber-800',
    content: [
      { type: 'context', text: 'The American public was deeply isolationist. Woodrow Wilson won re-election in 1916 on "He Kept Us Out of War." Five months later, he needed to reverse public opinion entirely.' },
      { type: 'key', label: 'Committee on Public Information (CPI)', text: 'Created by executive order in April 1917. Led by journalist George Creel. The CPI was the first systematic government propaganda agency in US history — the prototype for all that followed.' },
      { type: 'tactic', label: 'The "Four Minute Men"', text: '75,000 volunteer speakers gave 755,190 speeches in movie theaters, churches, and public gatherings — 4-minute patriotic talks before films. Total audience: ~314 million impressions in 18 months.' },
      { type: 'tactic', label: 'Poster Campaigns', text: 'James Montgomery Flagg\'s "I Want YOU" Uncle Sam poster. Anti-German propaganda depicting "Huns" as subhuman barbarians. "Beat Back the Hun with Liberty Bonds." These images shaped American identity for a century.' },
      { type: 'tactic', label: 'Espionage & Sedition Acts', text: 'Made it illegal to criticize the war, the draft, or the government. Eugene Debs got 10 years in prison for an anti-war speech. Over 2,000 people prosecuted. Free speech didn\'t apply to war dissent.' },
      { type: 'result', text: 'Public opinion flipped from 73% anti-war to 73% pro-war in under a year. The template was set: create an agency, demonize the enemy, criminalize dissent, flood every channel.' },
    ],
  },
  {
    era: 'World War II (1941–1945)',
    subtitle: 'Hollywood Goes to War',
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-blue-800',
    content: [
      { type: 'context', text: 'After Pearl Harbor, public opinion didn\'t need manufacturing — it was already there. But the government still invested heavily in controlling the narrative, the imagery, and the home front morale.' },
      { type: 'key', label: 'Office of War Information (OWI)', text: 'Successor to CPI. Controlled all government messaging, censored war photography (no images of dead Americans until 1943), and coordinated with Hollywood studios.' },
      { type: 'tactic', label: 'Hollywood Partnership', text: 'Frank Capra\'s "Why We Fight" series (7 films, mandatory viewing for troops). Disney made propaganda films. Studios submitted scripts to OWI for approval. The line between entertainment and propaganda disappeared.' },
      { type: 'tactic', label: 'Censorship of Casualties', text: 'For the first two years, no images of dead Americans were published. The government feared it would weaken resolve. When photos were finally released in 1943, they were carefully curated to show "noble sacrifice," not horror.' },
      { type: 'tactic', label: 'Japanese Internment Propaganda', text: '120,000 Japanese Americans were imprisoned. Propaganda portrayed them as potential saboteurs. Newspapers, radio, and film all reinforced the "enemy within" narrative. No evidence of sabotage was ever found.' },
      { type: 'tactic', label: 'War Bonds & Rationing', text: 'Celebrities sold war bonds. Rationing was framed as patriotic sacrifice. "Rosie the Riveter" mobilized women. Every aspect of daily life became a propaganda opportunity.' },
      { type: 'result', text: 'WWII created the template of the "good war" — the idea that American wars are inherently righteous. This mythology has been used to justify every conflict since, despite the moral complexity of firebombing Tokyo and nuking Hiroshima.' },
    ],
  },
  {
    era: 'Cold War (1947–1991)',
    subtitle: 'Fear as Foreign Policy',
    color: 'bg-purple-50 border-purple-200',
    accentColor: 'text-purple-800',
    content: [
      { type: 'context', text: 'The Cold War required permanent fear without active combat (mostly). The enemy was an ideology, not a country — which meant propaganda had to permeate culture itself.' },
      { type: 'key', label: 'CIA & Cultural Warfare', text: 'The CIA secretly funded literary magazines (Encounter, Partisan Review), art exhibitions (Abstract Expressionism as "freedom"), concerts, and academic conferences through the Congress for Cultural Freedom. Revealed in the 1960s.' },
      { type: 'tactic', label: 'Red Scare Films', text: '"I Was a Communist for the FBI" (1951), "Invasion of the Body Snatchers" (1956, allegory for communist infiltration), "Red Dawn" (1984). Hollywood produced 40+ anti-communist films in the 1950s alone.' },
      { type: 'tactic', label: 'McCarthyism', text: 'Senator Joseph McCarthy\'s hearings destroyed careers and lives based on accusation alone. The Hollywood blacklist banned 300+ writers, directors, and actors. Self-censorship became the norm.' },
      { type: 'tactic', label: 'Duck and Cover', text: 'Civil defense propaganda taught children to hide under desks during nuclear attacks — psychologically normalizing the possibility of nuclear war while doing nothing to protect them.' },
      { type: 'tactic', label: 'Domino Theory', text: 'The idea that if one country "fell" to communism, neighbors would follow like dominoes. Used to justify intervention in Korea, Vietnam, Guatemala, Chile, Nicaragua, and dozens of other countries. The theory was never proven.' },
      { type: 'result', text: 'The Cold War embedded militarism into American culture so deeply that questioning defense spending became "unpatriotic." The military-industrial complex Eisenhower warned about became permanent — and propaganda was its oxygen.' },
    ],
  },
  {
    era: 'Vietnam War (1964–1975)',
    subtitle: 'The Credibility Gap',
    color: 'bg-green-50 border-green-200',
    accentColor: 'text-green-800',
    content: [
      { type: 'context', text: 'Vietnam was the first "television war" — and the first time American war propaganda met sustained, effective resistance from the public and press.' },
      { type: 'key', label: 'Gulf of Tonkin Incident', text: 'On August 4, 1964, the US claimed North Vietnamese boats attacked the USS Maddox a second time. This second attack almost certainly never happened. But it was used to pass the Gulf of Tonkin Resolution (98-2 in the Senate), giving LBJ a blank check for war.' },
      { type: 'tactic', label: '"Light at the End of the Tunnel"', text: 'Military briefings in Saigon — nicknamed the "Five O\'Clock Follies" — consistently claimed progress while the war was being lost. Body counts were inflated. Territory "secured" was abandoned. The credibility gap between official statements and reality grew until it was unbridgeable.' },
      { type: 'tactic', label: 'Pentagon Papers', text: 'Daniel Ellsberg leaked 7,000 pages proving the government had systematically lied about Vietnam for decades. Published by the NYT and Washington Post in 1971 despite government attempts to block publication (landmark First Amendment case).' },
      { type: 'tactic', label: 'Television Changes Everything', text: 'Walter Cronkite\'s 1968 editorial ("it is increasingly clear... that we are mired in stalemate") shifted public opinion overnight. Footage of the Tet Offensive, napalm strikes, and the My Lai massacre could not be sanitized for TV.' },
      { type: 'result', text: 'Vietnam taught the military-propaganda complex a critical lesson: never let journalists roam freely in a war zone again. Every conflict since has featured tighter media control — embedded journalists, restricted access, managed narratives.' },
    ],
  },
  {
    era: 'Gulf War (1990–1991)',
    subtitle: 'The CNN War',
    color: 'bg-orange-50 border-orange-200',
    accentColor: 'text-orange-800',
    content: [
      { type: 'context', text: 'After Vietnam, the Pentagon developed a comprehensive media management strategy. The Gulf War was its first test — and a propaganda masterpiece.' },
      { type: 'key', label: 'Nayirah Testimony', text: 'A 15-year-old girl testified before Congress that Iraqi soldiers pulled babies from incubators in Kuwait. It was a lie — she was the Kuwaiti ambassador\'s daughter, coached by PR firm Hill & Knowlton (paid $10.7M by the Kuwaiti government). The testimony helped swing the Senate vote for war.' },
      { type: 'tactic', label: '"Smart Bomb" Videos', text: 'The Pentagon released carefully selected footage of precision-guided munitions hitting targets — creating the illusion of a clean, surgical war. In reality, 93% of bombs dropped were unguided. The "smart bomb" mythology persists to this day.' },
      { type: 'tactic', label: 'Pool System', text: 'Journalists were restricted to military-escorted "pools." Independent reporting was banned. The military controlled what reporters saw, who they talked to, and when they could file. Vietnam\'s lesson, learned and applied.' },
      { type: 'tactic', label: 'CNN as Propaganda Channel', text: '24-hour cable news coverage turned war into entertainment. Green-tinted night vision footage became iconic. Generals became TV analysts. The war was "live" but completely managed.' },
      { type: 'result', text: 'The Gulf War restored American faith in military power after Vietnam. 90%+ approval rating. The template: control the media, provide spectacular visuals, keep casualties low, and the public will support anything. Iraq 2003 followed the same playbook.' },
    ],
  },
  {
    era: 'Iraq War (2003–2011)',
    subtitle: 'The WMD Lie',
    color: 'bg-red-50 border-red-200',
    accentColor: 'text-red-800',
    content: [
      { type: 'context', text: 'The Iraq War represents the most consequential propaganda campaign in modern American history — a deliberate, systematic effort to fabricate a justification for invading a sovereign nation.' },
      { type: 'key', label: 'Colin Powell\'s UN Presentation', text: 'February 5, 2003: Secretary of State Colin Powell presented "evidence" of Iraqi WMDs to the UN Security Council — satellite photos, intercepted communications, a vial of fake anthrax. Every major claim was false. Powell later called it a "blot" on his record.' },
      { type: 'tactic', label: 'Office of Special Plans', text: 'A Pentagon unit created by Douglas Feith and overseen by Paul Wolfowitz to produce "intelligence" supporting the case for war. They cherry-picked, distorted, and fabricated evidence that the CIA and DIA considered unreliable.' },
      { type: 'tactic', label: '"Curveball"', text: 'A single Iraqi defector (codenamed "Curveball") was the primary source for claims about mobile biological weapons labs. German intelligence warned he was unreliable. The CIA used his claims anyway. He later admitted he lied.' },
      { type: 'tactic', label: 'Embedded Journalists', text: '775 reporters were "embedded" with military units. They saw what the military showed them. The embed system produced sympathetic coverage by design — journalists bonded with the soldiers they traveled with.' },
      { type: 'tactic', label: 'Jessica Lynch & Pat Tillman', text: 'The military fabricated a heroic rescue story for POW Jessica Lynch (she said there was no battle). They covered up the friendly-fire death of Pat Tillman, telling his family he died in combat. Both stories were propaganda.' },
      { type: 'tactic', label: 'Media Complicity', text: 'The New York Times published Judith Miller\'s WMD stories on the front page — sourced from the same Iraqi exiles feeding the Pentagon. The paper later issued a partial correction. No editor was fired.' },
      { type: 'result', text: '4,599 Americans and 200,000+ Iraqi civilians dead. No WMDs found. No accountability for the lies. The credibility of US intelligence and media was shattered — but the architects (Cheney, Rumsfeld, Wolfowitz, Bolton) remained in public life.' },
    ],
  },
  {
    era: 'Social Media Era (2010–Present)',
    subtitle: 'Everyone Is a Propagandist',
    color: 'bg-stone-100 border-stone-300',
    accentColor: 'text-stone-800',
    content: [
      { type: 'context', text: 'Social media broke the government\'s monopoly on war narratives — but it also created new forms of manipulation, misinformation, and manufactured consent that are harder to identify and counter.' },
      { type: 'key', label: 'Pentagon Social Media Operations', text: 'The US military runs the largest institutional social media presence in the world. CENTCOM was caught operating fake social media accounts (Operation Earnest Voice) to influence overseas populations. The line between "public affairs" and information warfare is gone.' },
      { type: 'tactic', label: 'Drone Strike Sanitization', text: 'Drone warfare is presented as clean, precise, and risk-free. No American casualties. "Surgical strikes." The reality — wedding bombings, signature strikes, double-taps — is documented by journalists but rarely penetrates mainstream discourse.' },
      { type: 'tactic', label: 'Algorithmic Amplification', text: 'Social media algorithms amplify outrage and fear — the same emotions war propaganda has always exploited. Pro-war content gets engagement. Anti-war content gets buried. The algorithm is the new censor.' },
      { type: 'tactic', label: 'Citizen Journalism vs. Disinformation', text: 'Smartphones enabled real-time documentation of war crimes (Syria\'s White Helmets, Palestine\'s citizen journalists). But states also flood the zone with disinformation to make truth indistinguishable from lies.' },
      { type: 'tactic', label: 'Think Tank Pipeline', text: 'Defense-funded think tanks (CNAS, AEI, Hudson Institute) produce "expert analysis" that is laundered through mainstream media as objective commentary. The analysts are often former Pentagon officials or defense company board members.' },
      { type: 'result', text: 'The old propaganda model (government → media → public) has fragmented. But new models may be more effective: algorithm-driven fear, think tank laundering, and the overwhelming volume of information make critical analysis nearly impossible for average citizens.' },
    ],
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'History of US War Propaganda — From WWI Posters to Social Media',
  description: 'How the US government manufactured consent for war across seven eras.',
  author: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
  datePublished: '2026-03-01',
  mainEntityOfPage: 'https://warcosts.org/war-propaganda',
}

export default function WarPropagandaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'War Propaganda' }]} />

      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Manufacturing Consent</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          A History of US War Propaganda
        </h1>
        <p className="text-stone-400 text-lg">
          Every American war was sold to the public. From WWI&apos;s &ldquo;Four Minute Men&rdquo; to Iraq&apos;s fabricated WMDs,
          the machinery of consent has evolved — but the purpose never changed: make killing popular.
        </p>
      </div>

      <ShareButtons title="History of US War Propaganda — Manufacturing Consent" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">7</p>
          <p className="text-sm text-stone-500">Propaganda Eras</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">109</p>
          <p className="text-sm text-stone-500">Years of State Propaganda</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">0</p>
          <p className="text-sm text-stone-500">Officials Held Accountable</p>
        </div>
        <div className="bg-red-50 rounded-lg p-5 border border-red-200 text-center">
          <p className="text-3xl font-bold text-red-700 font-[family-name:var(--font-heading)]">∞</p>
          <p className="text-sm text-stone-500">Lies Told</p>
        </div>
      </div>

      {/* Era Sections */}
      {eras.map((section, idx) => (
        <section key={idx} className="my-12">
          <div className={`${section.color} border rounded-xl p-6 md:p-8`}>
            <p className={`${section.accentColor} font-semibold text-sm uppercase tracking-wide mb-2`}>Era {idx + 1}</p>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-1">{section.era}</h2>
            <p className={`${section.accentColor} text-lg mb-6`}>{section.subtitle}</p>

            <div className="space-y-4">
              {section.content.map((item, i) => (
                <div key={i} className={`bg-white/70 rounded-lg p-4 ${item.type === 'result' ? 'border-l-4 border-red-600' : ''}`}>
                  {item.type === 'context' && (
                    <p className="text-stone-600 italic">{item.text}</p>
                  )}
                  {item.type === 'key' && (
                    <>
                      <h4 className="font-bold text-stone-800 mb-1">🔑 {item.label}</h4>
                      <p className="text-sm text-stone-700">{item.text}</p>
                    </>
                  )}
                  {item.type === 'tactic' && (
                    <>
                      <h4 className="font-bold text-stone-700 mb-1">{item.label}</h4>
                      <p className="text-sm text-stone-600">{item.text}</p>
                    </>
                  )}
                  {item.type === 'result' && (
                    <>
                      <h4 className="font-bold text-red-800 mb-1">Result</h4>
                      <p className="text-sm text-stone-700">{item.text}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Key Takeaway */}
      <section className="my-12 bg-stone-900 text-white rounded-xl p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Pattern</h2>
        <div className="space-y-3 text-stone-300 text-sm">
          <p>1. <strong className="text-white">Create urgency</strong> — an imminent threat that demands immediate action (Lusitania, Pearl Harbor, Gulf of Tonkin, 9/11, WMDs)</p>
          <p>2. <strong className="text-white">Demonize the enemy</strong> — they are subhuman, evil, an existential threat to civilization</p>
          <p>3. <strong className="text-white">Control the information</strong> — censorship, embedded reporters, classification, "national security"</p>
          <p>4. <strong className="text-white">Criminalize dissent</strong> — Espionage Act, McCarthyism, "you\'re either with us or against us"</p>
          <p>5. <strong className="text-white">Rewrite history</strong> — the war was necessary, the deaths were unavoidable, we meant well</p>
        </div>
        <p className="text-stone-400 mt-4 text-sm italic">Every era thinks its propaganda is different. It never is.</p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/analysis/media-and-war" className="text-red-700 hover:underline">→ Media and War Analysis</Link>
        <Link href="/analysis/information-warfare" className="text-red-700 hover:underline">→ Information Warfare</Link>
        <Link href="/war-powers" className="text-red-700 hover:underline">→ War Powers</Link>
      </div>

      <BackToTop />
    </div>
  )
}
