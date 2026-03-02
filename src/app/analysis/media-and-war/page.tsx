import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import { MediaWarCharts } from './MediaWarCharts'

export const metadata: Metadata = {
  title: 'Manufacturing Consent: How Media Sells Every War',
  description: 'Gulf of Tonkin was a lie. WMDs in Iraq were a lie. Every war starts with a media campaign. From yellow journalism to TikTok — how consent for war is manufactured.',
  openGraph: {
    title: 'Manufacturing Consent: How Media Sells Every War',
    description: 'Every war starts with a media campaign. The pattern from 1898 to 2026.',
    url: 'https://www.warcosts.org/analysis/media-and-war',
  },
}

const mediaLies = [
  {
    war: 'Spanish-American War (1898)',
    lie: '"Remember the Maine!"',
    media: 'Hearst & Pulitzer newspapers',
    reality: 'USS Maine likely exploded due to internal coal fire, not Spanish attack. No evidence Spain was responsible.',
    consequence: 'US invaded Cuba, Philippines, Puerto Rico, Guam. Acquired colonial empire. 200,000+ Filipino civilians killed in subsequent occupation.',
    famousQuote: '"You furnish the pictures and I\'ll furnish the war." — William Randolph Hearst (attributed)',
  },
  {
    war: 'World War I (1917)',
    lie: 'Lusitania was a civilian ship / Belgian atrocity stories',
    media: 'Committee on Public Information (Creel Committee)',
    reality: 'Lusitania was carrying munitions. Many atrocity stories were fabricated British propaganda. The US government created the first modern propaganda agency.',
    consequence: '116,000 Americans killed. Treaty of Versailles set conditions for WW2. Government learned propaganda works.',
    famousQuote: '"The first casualty when war comes is truth." — Senator Hiram Johnson, 1917',
  },
  {
    war: 'Vietnam War (1964)',
    lie: 'Gulf of Tonkin Incident',
    media: 'All major networks and newspapers repeated Pentagon claims uncritically',
    reality: 'The August 4, 1964 "attack" never happened. NSA documents declassified in 2005 confirmed the second incident was fabricated. Defense Secretary McNamara later admitted doubts.',
    consequence: 'Congress passed the Gulf of Tonkin Resolution, giving LBJ unlimited war authority. 58,220 Americans and 2-3 million Vietnamese killed over the next decade.',
    famousQuote: '"We didn\'t think it happened, and it probably didn\'t happen." — NSA historian Robert Hanyok on the second Tonkin incident',
  },
  {
    war: 'Gulf War (1990)',
    lie: '"Babies pulled from incubators" testimony',
    media: 'All major networks broadcast the Congressional testimony',
    reality: 'The tearful testimony of "Nayirah" — describing Iraqi soldiers pulling babies from incubators — was fabricated. "Nayirah" was the daughter of the Kuwaiti ambassador. Her testimony was coached by PR firm Hill & Knowlton, paid $10.8M by the Kuwaiti government.',
    consequence: 'Swung public opinion to support the Gulf War. Amnesty International and members of Congress cited the testimony. The PR firm was never held accountable.',
    famousQuote: '"I saw the Iraqi soldiers come into the hospital with guns. They took the babies out of the incubators... and left the children to die on the cold floor." — "Nayirah" (coached fabrication)',
  },
  {
    war: 'Iraq War (2003)',
    lie: 'Weapons of Mass Destruction',
    media: 'NYT (Judith Miller), Washington Post, CNN, all networks',
    reality: 'Iraq had no WMDs. No nuclear program. No connection to 9/11. Colin Powell\'s UN presentation used fabricated intelligence from "Curveball" (a source the CIA knew was unreliable). The aluminum tubes were for rockets, not centrifuges.',
    consequence: '4,599 Americans killed. 300,000+ Iraqi civilians killed. $2.4 trillion spent. ISIS emerged from the chaos. Powell later called his UN speech a "blot" on his record.',
    famousQuote: '"We don\'t want the smoking gun to be a mushroom cloud." — Condoleezza Rice, September 8, 2002',
  },
  {
    war: 'Libya (2011)',
    lie: '"Gaddafi is massacring civilians" / "Viagra for mass rape"',
    media: 'CNN, BBC, Al Jazeera amplified rebel claims uncritically',
    reality: 'An Amnesty International investigation found no evidence of mass rape or systematic massacres in areas before NATO intervention. The claims were rebel propaganda amplified by Western media.',
    consequence: 'NATO bombed Libya into a failed state. Open slave markets emerged. Country became a hub for ISIS and human trafficking. No accountability.',
    famousQuote: '"We came, we saw, he died." — Hillary Clinton, laughing, on Gaddafi\'s brutal killing',
  },
  {
    war: 'Iran (2026)',
    lie: '"Imminent threat" / Hormuz provocation framing',
    media: 'Cable news, major newspapers largely echoed administration framing',
    reality: 'The narrative of Iranian aggression in the Strait of Hormuz mirrors the pattern of every previous war: an incident (sometimes real, sometimes fabricated) is amplified into an existential threat requiring immediate military response. Congress was not consulted.',
    consequence: 'Ongoing. Operation Epic Fury launched without congressional authorization. The media cycle — from "threat" to "strikes" — took weeks, not months.',
    famousQuote: '"The media\'s the most powerful entity on earth. They have the power to make the innocent guilty and to make the guilty innocent." — Malcolm X',
  },
]

const embeddedJournalism = [
  { aspect: 'Journalists "embedded" with US military units', proGov: true, detail: 'Reporters live, eat, and travel with troops. Natural psychological bonding occurs. Journalists depend on the military for safety, food, and access.' },
  { aspect: 'Military controls information flow', proGov: true, detail: 'Embedded reporters see what the military shows them. They cannot independently verify claims. Stories are reviewed before transmission in many cases.' },
  { aspect: 'Dissenting journalists lose access', proGov: true, detail: 'Peter Arnett (fired from NBC for giving interview to Iraqi TV), Geraldo Rivera (expelled for drawing troop positions), Chris Hedges (forced from NYT for anti-war speech).' },
  { aspect: 'Pentagon Military Analyst Program', proGov: true, detail: 'Exposed in 2008: Pentagon recruited 75 retired military officers as "independent" TV analysts. They were fed talking points and given access in exchange for promoting the war. None disclosed the arrangement.' },
  { aspect: 'Unilateral reporters targeted', proGov: true, detail: 'Non-embedded journalists in Iraq faced dangers from all sides. The Palestine Hotel (journalist hub) was struck by US tank fire in 2003, killing 2 journalists. Al Jazeera offices bombed in both Kabul and Baghdad.' },
]

const publicOpinionShifts = [
  { war: 'Spanish-American War', preMedia: '~30% support', postMedia: '~72% support', mediaCampaign: '2 months of yellow journalism', timeToWar: '10 weeks' },
  { war: 'World War I entry', preMedia: '~25% support', postMedia: '~73% support', mediaCampaign: 'Creel Committee + Lusitania', timeToWar: '2 years (of propaganda)' },
  { war: 'Vietnam (Tonkin)', preMedia: '~42% support escalation', postMedia: '~85% support', mediaCampaign: 'One fabricated incident', timeToWar: '48 hours' },
  { war: 'Gulf War', preMedia: '~47% support', postMedia: '~79% support', mediaCampaign: 'Incubator testimony + CNN effect', timeToWar: '5 months' },
  { war: 'Iraq War', preMedia: '~52% support', postMedia: '~72% support', mediaCampaign: '18 months of WMD claims', timeToWar: '18 months' },
  { war: 'Libya', preMedia: '~38% support', postMedia: '~47% support', mediaCampaign: '"Humanitarian" framing', timeToWar: '3 weeks' },
  { war: 'Iran (2026)', preMedia: '~35% support', postMedia: '~51% support', mediaCampaign: 'Hormuz crisis + threat inflation', timeToWar: 'Weeks' },
]

const pentagonPR = [
  { item: 'Pentagon PR/Communications Budget', amount: '$4.7 billion/year', note: 'Larger than the entire budget of most federal agencies' },
  { item: 'Military entertainment liaison offices', amount: '5 offices (Army, Navy, AF, Marines, DoD)', note: 'Approve scripts for movies/TV in exchange for military equipment. Top Gun, Transformers, Marvel films all vetted.' },
  { item: 'Films shaped by Pentagon', amount: '2,500+ since 1947', note: 'Including Top Gun, Iron Man, Captain Marvel, Black Hawk Down, American Sniper, Zero Dark Thirty' },
  { item: 'Pentagon social media accounts', amount: '4,000+', note: 'Active across Twitter, Instagram, TikTok, YouTube, Facebook' },
  { item: 'Military eSports/gaming teams', amount: 'All 5 branches', note: 'US Army had Twitch streaming team until public backlash in 2020 over banning viewers who asked about war crimes' },
  { item: 'Paid NFL patriotism deals', amount: '$6.8M (2012-2015)', note: 'Pentagon paid NFL teams for "patriotic displays" — troop salutes, flag ceremonies. Exposed as paid propaganda in 2015.' },
]

export default function MediaAndWarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Media & War' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2">Deep Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Manufacturing Consent
        </h1>
        <p className="text-xl text-stone-300 mb-4">How Media Sells Every American War</p>
        <p className="text-stone-400 text-lg">
          The Gulf of Tonkin incident was fabricated. Iraqi WMDs didn&apos;t exist. Kuwaiti incubator babies were a PR stunt.
          Every American war of the last 125 years has been preceded by a media campaign that manufactured public
          support through exaggeration, omission, or outright lies. The pattern is not a conspiracy theory — it is
          documented history.
        </p>
      </div>

      <ShareButtons title="Manufacturing Consent: How Media Sells Every War" />

      {/* AI Overview */}
      <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 my-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">AI Overview — Key Data</h2>
        </div>
        <ul className="space-y-2 text-stone-300">
          <li>📊 Pentagon PR budget: <strong className="text-white">$4.7 billion/year</strong> — larger than most federal agencies&apos; entire budgets.</li>
          <li>📊 <strong className="text-white">2,500+ films</strong> shaped by Pentagon entertainment liaison since 1947 (Top Gun, Iron Man, Black Hawk Down).</li>
          <li>📊 Pentagon recruited <strong className="text-white">75 retired officers</strong> as &ldquo;independent&rdquo; TV analysts — secretly fed talking points (2008 NYT exposé).</li>
          <li>📊 Public support for Iraq War jumped from <strong className="text-white">52% → 72%</strong> after 18 months of WMD media saturation.</li>
          <li>📊 Gulf of Tonkin &ldquo;attack&rdquo; — basis for Vietnam War authority — <strong className="text-white">never happened</strong> (confirmed by NSA documents, 2005).</li>
          <li>📊 &ldquo;Nayirah&rdquo; incubator testimony was <strong className="text-white">staged by a $10.8M PR firm</strong> hired by Kuwait.</li>
        </ul>
      </div>

      <MediaWarCharts data={publicOpinionShifts} />

      {/* The Pattern */}
      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The Pattern: Every War Starts with a Lie</h2>
        <p>
          In 1988, Noam Chomsky and Edward Herman published <em>Manufacturing Consent: The Political Economy of
          the Mass Media</em>. Their thesis was simple: the mass media in a democratic society functions not to inform
          citizens, but to manufacture support for elite agendas — especially war. The mechanisms include reliance
          on official sources, self-censorship, ideological filters, and the economics of advertising-dependent media.
        </p>
        <p>
          Thirty-eight years later, the thesis has been validated by every war the United States has fought. The
          specific lie changes — sinking ships, chemical weapons, nuclear programs, humanitarian crises — but the
          structure is identical:
        </p>
        <ol>
          <li><strong>An incident or threat is identified</strong> (real, exaggerated, or fabricated)</li>
          <li><strong>Government officials make dramatic claims</strong> to media</li>
          <li><strong>Media amplifies the claims uncritically</strong> — dissenting voices are marginalized or silenced</li>
          <li><strong>Public opinion shifts</strong> from opposition to support</li>
          <li><strong>Congress authorizes force</strong> (or the president acts unilaterally)</li>
          <li><strong>War begins</strong></li>
          <li><strong>Years later, the original claims are debunked</strong> — but the war has already happened</li>
        </ol>
        <p>
          This pattern has repeated for 125 years without exception. Not once has the mainstream American media
          prevented a war by aggressively challenging government claims before the shooting started.
        </p>
      </div>

      {/* War-by-War lies */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Lie That Started Each War</h2>
        <div className="space-y-4">
          {mediaLies.map(w => (
            <div key={w.war} className="border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">{w.war}</h3>
              </div>
              <div className="mt-2 space-y-2">
                <div>
                  <span className="text-red-400 text-sm font-semibold">The Lie:</span>
                  <span className="text-white text-sm ml-2">{w.lie}</span>
                </div>
                <div>
                  <span className="text-stone-400 text-sm font-semibold">Media Vehicle:</span>
                  <span className="text-stone-300 text-sm ml-2">{w.media}</span>
                </div>
                <div>
                  <span className="text-stone-400 text-sm font-semibold">Reality:</span>
                  <span className="text-stone-300 text-sm ml-2">{w.reality}</span>
                </div>
                <div>
                  <span className="text-stone-400 text-sm font-semibold">Consequence:</span>
                  <span className="text-stone-300 text-sm ml-2">{w.consequence}</span>
                </div>
              </div>
              <p className="text-stone-500 text-sm mt-3 italic border-l-2 border-stone-600 pl-3">{w.famousQuote}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Judith Miller and the WMD Hoax</h2>
        <p>
          The Iraq War media failure deserves special attention because it is the most thoroughly documented case of
          media complicity in manufacturing a war. At the center was <strong>Judith Miller</strong> of the <em>New York
          Times</em>, whose front-page stories about Iraq&apos;s alleged WMD programs — based almost entirely on sources
          provided by Ahmed Chalabi&apos;s Iraqi National Congress and the Office of Special Plans — provided the
          journalistic cover for the Bush administration&apos;s case for war.
        </p>
        <p>
          The mechanism was circular: administration officials would leak claims to Miller. Miller would publish them
          on the front page of the <em>Times</em>. Administration officials would then cite the <em>Times</em> stories
          as independent confirmation of their claims. Dick Cheney appeared on <em>Meet the Press</em> and cited a
          Miller story that was based on information his own office had leaked to her.
        </p>
        <p>
          The <em>Times</em> later published an extraordinary editors&apos; note acknowledging that its coverage had been
          &ldquo;not as rigorous as it should have been&rdquo; and that &ldquo;information that was controversial then,
          and target-specific today, was insufficiently qualified or allowed to stand unchallenged.&rdquo; Miller was
          eventually pushed out of the paper. But the war had already killed thousands and cost trillions.
        </p>
        <p>
          The <em>Washington Post</em> was barely better. Its editorial page aggressively promoted the war. Reporter
          Walter Pincus, who wrote skeptical pieces, saw them buried deep in the paper while pro-war stories ran on
          the front page. Post media critic Howard Kurtz later admitted the paper had failed its readers.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Embedded Journalism: Captured by Design</h2>
        <p>
          The embedding system, introduced for the 2003 Iraq invasion, was designed by the Pentagon to solve a
          problem: independent journalists in Vietnam had shown the public what war actually looked like, and public
          support had collapsed. The solution was to make journalists dependent on the military.
        </p>
      </div>

      {/* Embedded journalism */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">How Embedding Captures Journalists</h2>
        <div className="space-y-3">
          {embeddedJournalism.map((item, i) => (
            <div key={i} className="border border-stone-700 rounded-lg p-4">
              <h3 className="text-white font-semibold text-sm">{item.aspect}</h3>
              <p className="text-stone-400 text-sm mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">The CNN Effect and the 24-Hour War Cycle</h2>
        <p>
          The rise of 24-hour cable news in the 1990s created what scholars call the &ldquo;CNN Effect&rdquo; — the
          ability of dramatic, real-time television coverage to drive public opinion and policy. Live footage from the
          Gulf War — precision-guided munitions hitting targets in green-tinted night vision — made war look clean,
          surgical, and even entertaining.
        </p>
        <p>
          The CNN Effect works in both directions. Graphic footage can turn public opinion against a war (Somalia,
          1993 — the &ldquo;Black Hawk Down&rdquo; images). But more often, the 24-hour news cycle amplifies government
          narratives by filling airtime with retired generals, Pentagon briefings, and dramatic graphics. There is no
          time for investigative journalism in a format that needs content every minute. The easiest content is official
          sources — and official sources have an agenda.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Pentagon&apos;s PR Machine</h2>
        <p>
          The Department of Defense operates the largest public relations apparatus in the world. It is not an
          exaggeration to say that the Pentagon spends more on propaganda than most countries spend on their entire
          military.
        </p>
      </div>

      {/* Pentagon PR */}
      <div className="bg-stone-800 rounded-lg p-6 my-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">The Pentagon PR Machine</h2>
        <div className="space-y-3">
          {pentagonPR.map(item => (
            <div key={item.item} className="flex justify-between items-start border-b border-stone-700 pb-3">
              <div>
                <span className="text-white font-semibold">{item.item}</span>
                <p className="text-stone-400 text-sm">{item.note}</p>
              </div>
              <span className="text-red-400 font-bold shrink-0 ml-4">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-stone max-w-none">
        <h2 className="font-[family-name:var(--font-heading)]">Hollywood: The Pentagon&apos;s Soft Power</h2>
        <p>
          Since 1947, the Pentagon has maintained entertainment liaison offices that offer filmmakers a deal: we provide
          access to military equipment, bases, and personnel — worth millions in production value — and in exchange,
          we review and approve the script. Films that portray the military negatively don&apos;t get the deal. Films
          that portray it positively get aircraft carriers, fighter jets, and thousands of uniformed extras for free.
        </p>
        <p>
          <em>Top Gun</em> (1986) is the most famous example. The Navy set up recruiting booths outside theaters.
          Enlistment applications surged 500%. The Pentagon provided F-14 Tomcats, the USS Enterprise, and full
          cooperation — in exchange for script approval. The original script had Tom Cruise&apos;s character questioning
          military authority. That was removed.
        </p>
        <p>
          <em>Top Gun: Maverick</em> (2022) continued the tradition. The Navy provided F/A-18s, an aircraft carrier,
          and extensive technical support. The film grossed $1.5 billion worldwide. It was, by any measure, the most
          effective military recruitment advertisement ever produced — and the audience paid to watch it.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Social Media Era: Cracks in the Machine</h2>
        <p>
          For the first time in American history, the government&apos;s ability to control the war narrative is being
          seriously challenged — not by institutional media, which remains largely captured, but by social media,
          citizen journalism, and a generation that grew up distrusting institutions.
        </p>
        <p>
          The Gaza conflict demonstrated this shift dramatically. While mainstream Western media largely adopted Israeli
          government framing, TikTok and Instagram were flooded with unfiltered footage from Palestinian civilians.
          The disconnect between what CNN showed and what social media showed was stark — and a generation of young
          Americans noticed.
        </p>
        <p>
          The pattern is continuing with Iran. While cable news features retired generals explaining why strikes are
          necessary, social media is full of Iranian civilians sharing their reality, anti-war veterans pushing back,
          and historical parallels to Iraq that mainstream media refuses to make.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The TikTok Generation&apos;s Skepticism</h2>
        <p>
          Polling data shows a dramatic generational divide on war support. Americans under 30 are significantly less
          likely to support military intervention than any previous generation at the same age. This is not pacifism —
          it is learned skepticism. This generation watched the Iraq WMD lie unfold in real time (or learned about it
          in school). They saw Libya turn into a failed state. They watched 20 years in Afghanistan end in the same
          Taliban government the war was supposed to topple.
        </p>
        <p>
          The government response to this skepticism has been revealing. In 2024, Congress attempted to force a TikTok
          sale or ban, citing &ldquo;national security.&rdquo; Critics noted that TikTok was the primary platform where
          young Americans encountered information challenging official narratives on Gaza and military spending. The
          coincidence was not lost on the generation targeted.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">What Would Happen If Media Did Its Job?</h2>
        <p>
          It is worth asking: what would happen if the American media treated government war claims with the same
          skepticism it applies to, say, a corporation&apos;s earnings report? What if &ldquo;senior officials say&rdquo;
          were treated as a claim requiring evidence rather than a fact requiring amplification?
        </p>
        <p>
          We have exactly one case study: Vietnam. When journalists like David Halberstam, Neil Sheehan, and Seymour
          Hersh challenged official narratives — when CBS&apos;s Walter Cronkite declared the war unwinnable after Tet —
          public opinion shifted and the war eventually ended. Aggressive, independent journalism is the only proven
          mechanism for ending wars that the public would not support if given accurate information.
        </p>
        <p>
          The lesson the government took from Vietnam was not &ldquo;don&apos;t lie&rdquo; — it was &ldquo;control the
          media better.&rdquo; Every war since Vietnam has featured tighter information control, more sophisticated
          propaganda, and more compliant media. The embedding system, the PR machine, the Hollywood partnerships,
          the paid analysts — all are lessons learned from Vietnam about how to prevent the media from doing its job.
        </p>

        <blockquote className="border-l-4 border-red-600">
          <p>&ldquo;The duty of a journalist is to comfort the afflicted and afflict the comfortable. When it comes
          to war, American journalism does the opposite — it comforts the powerful and afflicts the powerless.&rdquo;</p>
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">The Bottom Line</h2>
        <p>
          Every American war of the last 125 years has been accompanied by a media campaign that manufactured consent.
          The specific lie varies — an exploding ship, a fabricated attack, nonexistent weapons, incubator babies,
          humanitarian crises — but the structure is always the same: the government makes claims, the media amplifies
          them, dissent is marginalized, and by the time the truth emerges, the war has already been fought.
        </p>
        <p>
          The media is not a passive victim in this process. Journalists who challenge official narratives face real
          consequences — loss of access, career damage, public vilification. But those who amplify official narratives
          face no consequences at all. Judith Miller was wrong about everything and it took two years for the
          <em> New York Times</em> to acknowledge it. The reporters who were right about Iraq — like Knight Ridder&apos;s
          Jonathan Landay and Warren Strobel — were ignored in real time and vindicated too late.
        </p>
        <p>
          The first casualty of war is truth. The media is the weapon that kills it.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Related Analysis</h2>
        <ul>
          <li><Link href="/analysis/information-warfare">Information Warfare</Link></li>
          <li><Link href="/analysis/surveillance-state">The Surveillance State</Link></li>
          <li><Link href="/analysis/iran-2026">Iran 2026: Another Undeclared War?</Link></li>
          <li><Link href="/analysis/war-profiteering">War Is a Racket: Who Gets Rich</Link></li>
          <li><Link href="/analysis/cost-of-secrecy">The Black Budget and Classified Spending</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
