import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'Information Warfare — When Your Government Is the Propagandist',
  description: 'Pentagon PR budget: $4.7 billion. Russian troll farms reached 126M Americans on Facebook. Deepfakes, psyops, embedded journalism, and the death of independent war reporting.',
  openGraph: {
    title: 'Information Warfare — When Your Government Is the Propagandist',
    description: 'The Pentagon spends $4.7B/year on PR. Russia spent $1.25M/month on troll farms. Social media is the new battlefield.',
    url: 'https://www.warcosts.org/analysis/information-warfare',
  },
}

const propagandaTimeline = [
  { year: '1917', event: 'Committee on Public Information (CPI)', detail: 'Woodrow Wilson created the CPI under George Creel to sell WWI to a skeptical American public. 75,000 "Four Minute Men" gave pro-war speeches in movie theaters. Created iconic "Uncle Sam Wants You" posters. Pioneered modern government propaganda — and it worked. Public opinion flipped from isolationist to interventionist in months.' },
  { year: '1942', event: 'Office of War Information (OWI)', detail: 'FDR established OWI to coordinate wartime messaging. Controlled what journalists could report from the front. Hollywood became a propaganda arm — the Bureau of Motion Pictures reviewed scripts. Voice of America began broadcasting. Set the template for government-media cooperation that persists today.' },
  { year: '1948', event: 'Smith-Mundt Act', detail: 'Congress recognized the danger of government propaganda aimed at its own citizens. The Smith-Mundt Act authorized the State Department to conduct public diplomacy abroad but explicitly BANNED domestic dissemination of those materials. For 64 years, this was the firewall between foreign propaganda and American citizens.' },
  { year: '1950s', event: 'CIA Operation Mockingbird', detail: 'The CIA recruited journalists at major outlets — Washington Post, Time, Newsweek, CBS — to plant stories favorable to US foreign policy. At its peak, the CIA had influence over 25+ newspapers and wire services. Journalist Carl Bernstein exposed the program in a 1977 Rolling Stone article: "The CIA and the Media."' },
  { year: '1983', event: 'Grenada Media Blackout', detail: 'Reagan invaded Grenada and banned all journalists from the island for the first 2 days. The military controlled every image and narrative. No independent verification of government claims was possible. The template for "managed" war coverage was born.' },
  { year: '1991', event: 'Gulf War — The CNN War', detail: 'Pentagon created the "pool system" — only approved journalists with military escorts could report. Smart bomb footage played on loop (only 7% of munitions were precision-guided, but 100% of footage showed them). Press conferences became the story. War became television entertainment.' },
  { year: '2003', event: 'Iraq War — Embedded Journalism', detail: '775 reporters were "embedded" with military units. Studies found embedded reporters produced coverage that was 90% positive toward the military. Independent journalists were sidelined or killed — Reuters cameraman Mazen Dana shot by US tank, Al Jazeera offices bombed. Jessica Lynch rescue was staged for cameras.' },
  { year: '2012', event: 'Smith-Mundt Modernization Act', detail: 'Buried inside the 2013 NDAA, Congress quietly repealed the domestic propaganda ban. The US government could now legally direct propaganda at its own citizens. Representative Mac Thornberry called it a "modernization." Critics called it legalizing government lies to Americans.' },
  { year: '2016', event: 'Russian Internet Research Agency', detail: 'A St. Petersburg troll farm with a $1.25 million/month budget ran a massive influence operation targeting the US election. Created fake American personas, organized real protests on both sides, and reached an estimated 126 million Americans through Facebook alone. 3,500+ Facebook ads. 10+ million tweets.' },
  { year: '2018', event: 'Cambridge Analytica Scandal', detail: 'Harvested data from 87 million Facebook users without consent. Used psychographic profiling to micro-target political ads. Worked for the Trump campaign and the Brexit campaign. CEO Alexander Nix caught on hidden camera offering to use Ukrainian sex workers to entrap political opponents.' },
  { year: '2020s', event: 'Deepfakes & AI Propaganda', detail: 'AI-generated video can now put words in anyone\'s mouth. Pentagon awarded contracts for deepfake detection — and creation. In 2023, a deepfake image of a Pentagon explosion briefly caused the stock market to dip. The era of "seeing is believing" is over.' },
]

const pentagonPR = [
  { category: 'Public Affairs Officers', amount: '$2.1B', detail: '27,000+ personnel dedicated to managing the military\'s public image' },
  { category: 'Recruitment Advertising', amount: '$1.4B', detail: 'Including $100M+ on esports, Twitch streams, and gaming sponsorships' },
  { category: 'Hollywood Liaison Office', amount: 'Undisclosed', detail: 'Script review and equipment access for favorable portrayals — Top Gun, Transformers, Marvel' },
  { category: 'Military Bands & Ceremonial', amount: '$437M', detail: 'More than the entire budget of the National Endowment for the Arts ($167M)' },
  { category: 'Stars & Stripes Newspaper', amount: '$15.5M', detail: 'Military-funded newspaper that Congress must repeatedly save from Pentagon defunding attempts' },
  { category: 'Sports Marketing', amount: '$53M', detail: 'Paid patriotism — NFL flyovers, anthem ceremonies, and "hometown hero" segments' },
  { category: 'Social Media Operations', amount: '$250M+', detail: 'Managing official accounts, monitoring sentiment, and undisclosed influence operations' },
]

const trollFarmData = [
  { operation: 'Russian IRA (2016)', budget: '$1.25M/month', reach: '126M Americans on Facebook', platforms: 'Facebook, Twitter, Instagram, YouTube, Reddit', tactics: 'Fake American personas, organized real-world protests on both sides, targeted African American voters with suppression messages, created 470 Facebook pages' },
  { operation: 'Chinese 50 Cent Army', budget: '$0.08/post (estimated)', reach: '488M fabricated social media posts/year', platforms: 'Weibo, WeChat, global platforms', tactics: 'Government employees post pro-CCP comments to "guide public opinion." Named for alleged payment of 50 cents (yuan) per post. Estimated 2 million+ participants.' },
  { operation: 'Pentagon Info Ops', budget: '$4.7B total PR budget', reach: 'Unknown — classified', platforms: 'Twitter, Facebook, Arabic-language platforms', tactics: 'In 2022, Meta and Twitter removed fake accounts linked to US military CENTCOM. Used fake personas to push pro-US narratives in Middle East and Central Asia.' },
  { operation: 'Israeli Act.IL App', budget: 'Government-funded', reach: '15,000+ volunteers', platforms: 'Twitter, Facebook, TikTok', tactics: 'App sends "missions" to volunteers to like, share, or report specific content. Used to mass-report Palestinian accounts and boost pro-Israel content.' },
  { operation: 'Saudi Arabia', budget: '$3.5B (estimated info ops)', reach: 'Thousands of accounts', platforms: 'Twitter (heavy), YouTube', tactics: 'Army of Twitter bots pushing pro-MBS content. Recruited Twitter employee as spy. Linked to Khashoggi assassination monitoring.' },
]

const militaryEntertainment = [
  { title: 'Top Gun: Maverick (2022)', support: 'Full Pentagon cooperation', impact: 'Navy recruitment inquiries surged 500% after the first Top Gun (1986). Sequel got $150M+ in free military equipment access. Navy set up recruitment booths in theaters.' },
  { title: 'Marvel Cinematic Universe', support: 'Scripts reviewed by DoD', impact: 'The Avengers, Captain Marvel, and others received military support in exchange for favorable portrayal. When scripts weren\'t sufficiently pro-military (Hulk, Iron Man), support was withdrawn.' },
  { title: 'Call of Duty franchise', support: 'Military advisors, marketing partnerships', impact: 'Billions in revenue. Normalizes military operations for millions of young gamers. Army esports team recruited directly through gaming platforms until Congress intervened in 2020.' },
  { title: 'Zero Dark Thirty (2012)', support: 'CIA cooperation — leaked classified info', impact: 'CIA gave filmmakers access to classified briefings about the bin Laden raid. Senate investigation found the CIA shaped the narrative to credit enhanced interrogation (torture) for finding bin Laden. This was disputed by Senate Intelligence Committee.' },
  { title: 'Transformers franchise', support: 'Full military cooperation', impact: 'Michael Bay given access to aircraft carriers, fighter jets, tanks. Films are essentially recruitment ads with special effects. Combined gross: $4.8 billion worldwide.' },
]

export default function InformationWarfarePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ArticleJsonLd
        title="Information Warfare — When Your Government Is the Propagandist"
        description="Pentagon PR budget: $4.7 billion. Russian troll farms reached 126M Americans. The battle for your mind."
        slug="information-warfare"
      />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Information Warfare' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">In-Depth Analysis</span>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 mt-2">
          Information Warfare
        </h1>
        <p className="text-xl text-stone-300 mb-4">When Your Government Is the Propagandist</p>
        <p className="text-stone-400 text-lg">
          The Pentagon spends <strong className="text-white">$4.7 billion per year</strong> on public relations —
          more than the combined budgets of NPR, PBS, the National Endowment for the Arts, and the National
          Endowment for the Humanities. Russia&apos;s Internet Research Agency spent just{' '}
          <strong className="text-white">$1.25 million per month</strong> and reached 126 million Americans.
          In 2012, Congress quietly repealed the law banning the US government from directing propaganda at
          its own citizens. The battlefield is your mind, and you don&apos;t even know you&apos;re under fire.
        </p>
      </div>

      <ShareButtons title="Information Warfare — When Your Government Is the Propagandist" />

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { val: '$4.7B', label: 'Pentagon PR Budget', sub: 'Annual — more than most news orgs combined' },
          { val: '126M', label: 'Americans Reached', sub: 'By Russian IRA on Facebook alone' },
          { val: '27,000+', label: 'Military PR Personnel', sub: 'More than all US journalists covering the Pentagon' },
          { val: '2012', label: 'Domestic Propaganda Legalized', sub: 'Smith-Mundt Act repealed' },
        ].map(s => (
          <div key={s.label} className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
            <p className="text-xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
            <p className="text-xs text-muted">{s.label}</p>
            <p className="text-[10px] text-stone-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Propaganda Timeline */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
          A Century of Government Propaganda
        </h2>
        <p className="text-stone-700 mb-6">
          Government propaganda isn&apos;t new. What&apos;s new is the scale, the technology, and the fact
          that the legal barriers have been removed. Here&apos;s how we got here.
        </p>
        <div className="space-y-6">
          {propagandaTimeline.map(item => (
            <div key={item.year} className="border-l-4 border-red-600 pl-4">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-red-700 font-bold font-[family-name:var(--font-heading)] text-lg">{item.year}</span>
                <h3 className="font-bold text-stone-900">{item.event}</h3>
              </div>
              <p className="text-stone-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pentagon PR Breakdown */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Pentagon&apos;s $4.7 Billion PR Machine
        </h2>
        <p className="text-stone-700 mb-6">
          The Department of Defense is the largest employer of public relations personnel in the world. A 2009
          Associated Press investigation found the Pentagon employed 27,000 people for recruitment, advertising,
          and public relations — spending $4.7 billion per year. That&apos;s more than the GDP of some countries,
          all dedicated to shaping how Americans think about war.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-stone-300">
                <th className="text-left py-2 pr-4">Category</th>
                <th className="text-right py-2 pr-4">Annual Spending</th>
                <th className="text-left py-2">Detail</th>
              </tr>
            </thead>
            <tbody>
              {pentagonPR.map(row => (
                <tr key={row.category} className="border-b border-stone-200">
                  <td className="py-3 pr-4 font-medium">{row.category}</td>
                  <td className="py-3 pr-4 text-right text-red-700 font-bold">{row.amount}</td>
                  <td className="py-3 text-stone-600">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-stone-500 text-xs mt-4">
          Source: Associated Press investigation, 2009. Current spending likely higher but Pentagon resists disclosure.
        </p>
      </div>

      {/* Embedded Journalism */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Death of Independent War Reporting
        </h2>
        <p className="text-stone-700 mb-4">
          In Vietnam, journalists roamed freely. Their uncensored reporting — napalm girl, My Lai massacre,
          the Tet Offensive — turned public opinion against the war. The Pentagon learned a lesson from Vietnam,
          but it wasn&apos;t &quot;don&apos;t commit atrocities.&quot; It was &quot;don&apos;t let journalists see.&quot;
        </p>

        <div className="bg-stone-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-stone-900 mb-2">The Embedding System</h3>
          <p className="text-stone-700 text-sm mb-3">
            In 2003, the Pentagon offered 775 reporter slots &quot;embedded&quot; with military units in Iraq.
            It seemed like unprecedented access. In reality, it was unprecedented control:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span><strong>Stockholm syndrome by design:</strong> Reporters who ate, slept, and faced danger with troops developed loyalty to them. A Cardiff University study found embedded reporters were 90% positive in their coverage.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span><strong>Narrowed perspective:</strong> Embedded reporters saw the war through a soda straw — their unit&apos;s experience. They couldn&apos;t see civilian casualties, strategic failures, or the big picture.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span><strong>Non-embedded reporters targeted:</strong> Journalists operating independently in Iraq were killed at alarming rates. Reuters cameraman Mazen Dana was shot by a US tank. Al Jazeera offices were bombed in Kabul and Baghdad. The Palestine Hotel — known journalist base — was shelled by US forces, killing two cameramen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span><strong>Military approval required:</strong> Stories were reviewed before publication for &quot;operational security.&quot; Reporters who filed unfavorable stories were dis-embedded — sent home.</span>
            </li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-stone-800 text-sm italic">
            &quot;The embedding system is a brilliant, insidious corruption of the press. You cannot be objective
            about people who are saving your life.&quot;
          </p>
          <p className="text-stone-500 text-xs mt-2">— Chris Hedges, Pulitzer Prize-winning war correspondent</p>
        </div>
      </div>

      {/* Social Media Battlefield */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Social Media: The New Battlefield
        </h2>
        <p className="text-stone-700 mb-6">
          The Internet Research Agency in St. Petersburg, Russia, operated with a monthly budget of just
          $1.25 million — less than the cost of a single Tomahawk cruise missile ($1.87M). Yet it arguably
          had more strategic impact than billions in conventional military spending. Every major power now
          runs information operations on social media.
        </p>
        <div className="space-y-4">
          {trollFarmData.map(op => (
            <div key={op.operation} className="bg-stone-50 rounded-lg p-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-bold text-stone-900">{op.operation}</h3>
                <span className="text-red-700 font-bold text-sm">{op.budget}</span>
              </div>
              <p className="text-stone-700 text-sm mb-2"><strong>Reach:</strong> {op.reach}</p>
              <p className="text-stone-700 text-sm mb-2"><strong>Platforms:</strong> {op.platforms}</p>
              <p className="text-stone-600 text-sm">{op.tactics}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Russian IRA Deep Dive */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Russian IRA Operation: A Case Study
        </h2>
        <p className="text-stone-700 mb-4">
          The Internet Research Agency, funded by oligarch Yevgeny Prigozhin (who later founded the Wagner
          Group), ran the most documented foreign influence operation in US history. Here&apos;s what the
          Mueller investigation and Senate Intelligence Committee found:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            { val: '3,500+', label: 'Facebook ads purchased', detail: 'Spending ~$100,000 total. Micro-targeted by race, location, and political leaning.' },
            { val: '470', label: 'Facebook pages created', detail: 'Mimicking American grassroots organizations on all sides of the political spectrum.' },
            { val: '126M', label: 'Americans reached on Facebook', detail: 'More than voted in the 2016 election (136.7M). Organic reach dwarfed paid ads.' },
            { val: '10M+', label: 'Tweets from IRA accounts', detail: '3,814 Twitter accounts identified. Many had tens of thousands of American followers.' },
            { val: '1,000+', label: 'YouTube videos', detail: 'Totaling hundreds of thousands of hours of watch time.' },
            { val: '187M', label: 'Instagram engagements', detail: 'Instagram was actually the most effective platform — more engagement than Facebook.' },
          ].map(s => (
            <div key={s.label} className="bg-red-50 rounded-lg p-4 border border-red-100">
              <p className="text-2xl font-bold text-red-700 font-[family-name:var(--font-heading)]">{s.val}</p>
              <p className="text-sm font-medium text-stone-800">{s.label}</p>
              <p className="text-xs text-stone-500 mt-1">{s.detail}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-50 rounded-lg p-4">
          <h3 className="font-bold text-stone-900 mb-2">The Most Insidious Tactic: Real Protests, Fake Organizers</h3>
          <p className="text-stone-700 text-sm">
            The IRA didn&apos;t just post content — it organized real-world events. In one case, a Russian-created
            Facebook page called &quot;Heart of Texas&quot; (253,000 followers) organized an anti-Islamic protest
            outside a Houston mosque on the same day another Russian page, &quot;United Muslims of America,&quot;
            organized a counter-protest at the same location. Real Americans showed up to both. Russian trolls in
            St. Petersburg watched on social media as Americans they&apos;d manipulated screamed at each other in
            the streets of Houston. Total cost to Russia: a few hundred dollars in Facebook ads.
          </p>
        </div>
      </div>

      {/* Cambridge Analytica */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Cambridge Analytica: Weaponizing Your Data
        </h2>
        <p className="text-stone-700 mb-4">
          While Russian operations were crude but effective, Cambridge Analytica represented a more sophisticated
          form of information warfare — one funded and developed by Western political operatives.
        </p>
        <ul className="space-y-3 text-stone-700">
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>Data harvested:</strong> 87 million Facebook profiles collected via a personality quiz app. Users who took the quiz unknowingly gave access to all their friends&apos; data too.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>Psychographic profiling:</strong> Users categorized by OCEAN personality traits (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism). Ads were tailored to psychological vulnerabilities.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>Military origins:</strong> Parent company SCL Group had contracts with the UK Ministry of Defence and NATO for &quot;behavioral change&quot; programs — psychological operations rebranded for the private sector.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>Global interference:</strong> Operated in elections across 68 countries including Nigeria, Kenya, Trinidad &amp; Tobago, India, and the Philippines. Not just a US story.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>Steve Bannon connection:</strong> Bannon was vice president and board member of Cambridge Analytica. He saw its potential for political warfare and brought it to the Trump campaign.</span>
          </li>
        </ul>
      </div>

      {/* 4th PSYOP Group */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The 4th Psychological Operations Group: America&apos;s Mind Warriors
        </h2>
        <p className="text-stone-700 mb-4">
          The US military maintains dedicated psychological operations units. The largest is the 4th Psychological
          Operations Group (Airborne), based at Fort Liberty (formerly Fort Bragg), North Carolina. In 2022, they
          released a recruitment video on social media that went viral — a slick, cinematic production with the
          tagline &quot;Ghosts in the Machine&quot; that openly advertised their mission: &quot;Have you ever
          wondered who&apos;s pulling the strings?&quot;
        </p>
        <div className="bg-stone-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-stone-900 mb-2">PSYOP Capabilities</h3>
          <ul className="space-y-2 text-sm text-stone-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span><strong>Tactical PSYOP:</strong> Leaflets, loudspeakers, radio broadcasts in combat zones. In Iraq, dropped 31 million leaflets before the 2003 invasion.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span><strong>Military Information Support Operations (MISO):</strong> Renamed from PSYOP in 2010 (rebranded back in 2017). Social media manipulation, website creation, content production.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span><strong>Trans-Regional Web Initiative:</strong> Network of Pentagon-funded &quot;news&quot; websites posing as independent media in Middle Eastern and Central Asian countries. Exposed by Reuters in 2022.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span><strong>CENTCOM fake accounts:</strong> In 2022, Meta and Twitter took down accounts linked to US Central Command that used fake personas to push pro-US narratives. The Pentagon was caught doing exactly what it accused Russia of doing.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Military-Entertainment Complex */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          The Military-Entertainment Complex
        </h2>
        <p className="text-stone-700 mb-4">
          The Pentagon maintains entertainment liaison offices for every branch of the military. Hollywood
          studios that want access to aircraft carriers, fighter jets, or military bases must submit scripts
          for Pentagon review. Changes are demanded. Scripts that portray the military negatively don&apos;t
          get support — and without military equipment, many action films simply can&apos;t be made. The result
          is decades of films that function as recruitment propaganda.
        </p>
        <div className="space-y-4">
          {militaryEntertainment.map(film => (
            <div key={film.title} className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-bold text-stone-900 mb-1">{film.title}</h3>
              <p className="text-stone-700 text-sm mb-1"><strong>Pentagon support:</strong> {film.support}</p>
              <p className="text-stone-600 text-sm">{film.impact}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <p className="text-stone-800 text-sm">
            <strong>By the numbers:</strong> Research by Tom Secker and Matthew Alford found that the Pentagon
            and CIA have influenced over <strong>2,500 films and TV shows</strong> since 2000. This includes
            not just action movies but reality TV, documentaries, talk shows, and even game shows.
          </p>
        </div>
      </div>

      {/* Media Consolidation */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Media Consolidation &amp; Defense Industry Ownership
        </h2>
        <p className="text-stone-700 mb-4">
          In 1983, 50 companies owned 90% of American media. Today, just 6 companies control over 90%:
          Comcast (NBC/MSNBC), Disney (ABC), Paramount (CBS), Fox, Warner Bros. Discovery (CNN), and
          the New York Times Company. The concentration gets worse when you look at who sits on their boards.
        </p>
        <div className="bg-stone-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-stone-900 mb-2">The Defense-Media Revolving Door</h3>
          <ul className="space-y-2 text-sm text-stone-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span>CNN, MSNBC, and Fox News hired dozens of retired generals and admirals as &quot;military analysts&quot; during the Iraq War. A 2008 NYT investigation revealed many still had financial ties to defense contractors — and the Pentagon was coaching them on talking points.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span>General Electric owned NBC until 2013. GE was simultaneously one of the largest defense contractors — making engines for F/A-18 fighters, Apache helicopters, and Abrams tanks. NBC covered wars that made GE money.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">▸</span>
              <span>Board members of major media companies frequently overlap with defense industry boards. The Intercept found that virtually every major media outlet had board connections to companies that profit from war.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Military on TikTok */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Military Influencers: TikTok, Twitch, and the New Recruitment
        </h2>
        <p className="text-stone-700 mb-4">
          As traditional recruitment declined, the Pentagon turned to social media influencers and gaming
          platforms to reach Gen Z. The results have been both effective and controversial.
        </p>
        <ul className="space-y-3 text-stone-700">
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>Army esports team:</strong> The US Army created an esports team that streamed on Twitch, attracting young viewers with gaming content. When viewers asked about war crimes in the chat, they were banned. In 2020, the ACLU sued, and Congress barred the military from using Twitch for recruiting minors.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>Military TikTok:</strong> Active-duty service members create viral content showing military life — workouts, deployments, weapons. Some are organic; others are coordinated through official channels. The line between personal content and recruitment propaganda is intentionally blurred.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>$100M+ on gaming:</strong> The military spent over $100 million on esports partnerships, gaming sponsorships, and virtual recruitment events. They targeted 17-24 year olds — the same demographic most susceptible to propaganda.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">▸</span>
            <span><strong>Paid patriotism in sports:</strong> Between 2012-2015, the Pentagon paid $53 million to professional sports teams for &quot;patriotic displays&quot; — flyovers, color guards, on-field tributes. What looked like spontaneous patriotism was taxpayer-funded advertising.</span>
          </li>
        </ul>
      </div>

      {/* Deepfakes */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Deepfakes &amp; AI: The End of &quot;Seeing Is Believing&quot;
        </h2>
        <p className="text-stone-700 mb-4">
          Artificial intelligence has fundamentally changed information warfare. Deepfake technology can now
          create convincing video of anyone saying anything. The implications for military propaganda and
          disinformation are staggering.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Military Applications</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• DARPA&apos;s MediFor program: $68M to detect deepfakes — but detection always lags creation</li>
              <li>• Special Operations Command (SOCOM) requested deepfake capabilities for &quot;influence operations&quot;</li>
              <li>• AI-generated voices can now clone anyone from 3 seconds of audio</li>
              <li>• Pentagon contracts with AI firms for &quot;synthetic media&quot; generation</li>
            </ul>
          </div>
          <div className="bg-stone-50 rounded-lg p-4">
            <h3 className="font-bold text-stone-900 mb-2">Already Happening</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>• March 2022: Deepfake of Zelensky telling Ukrainian troops to surrender circulated on social media</li>
              <li>• May 2023: AI-generated image of Pentagon explosion caused brief stock market dip</li>
              <li>• AI bots can now generate thousands of unique propaganda posts per hour</li>
              <li>• &quot;Dead internet theory&quot;: growing percentage of online content is AI-generated</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Smith-Mundt Repeal */}
      <div className="bg-red-50 rounded-xl border border-red-200 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-red-900">
          The Smith-Mundt Repeal: Legalizing Propaganda Against Americans
        </h2>
        <p className="text-stone-700 mb-4">
          For 64 years, the Smith-Mundt Act of 1948 prohibited the US government from directing propaganda
          at American citizens. The law recognized a fundamental principle: a government that propagandizes
          its own people cannot be held accountable by them.
        </p>
        <p className="text-stone-700 mb-4">
          In 2012, the Smith-Mundt Modernization Act was quietly inserted into the National Defense
          Authorization Act (NDAA). It passed with minimal debate and almost no media coverage. The law
          allowed the State Department and Broadcasting Board of Governors to disseminate materials
          &quot;within the United States&quot; that had previously been restricted to foreign audiences.
        </p>
        <div className="bg-white rounded-lg p-4 mb-4">
          <h3 className="font-bold text-stone-900 mb-2">What Changed</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-bold text-stone-800 mb-1">Before 2012:</p>
              <ul className="space-y-1 text-stone-700">
                <li>• Voice of America, Radio Free Europe/Asia content banned domestically</li>
                <li>• Government-produced media for foreign audiences couldn&apos;t reach Americans</li>
                <li>• Clear legal firewall between foreign propaganda and domestic audience</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-stone-800 mb-1">After 2012:</p>
              <ul className="space-y-1 text-stone-700">
                <li>• All government-produced content can now be disseminated domestically</li>
                <li>• No requirement to label content as government-produced</li>
                <li>• Combined with social media, government can push narratives anonymously</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Libertarian Analysis */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 text-amber-900">
          The Libertarian Case: Free Press as the Check on Power
        </h2>
        <p className="text-stone-700 mb-4">
          The Founders didn&apos;t put freedom of the press in the First Amendment by accident. They understood
          that a government powerful enough to wage war is powerful enough to lie about it — and that an
          informed citizenry is the only check on that power.
        </p>
        <div className="space-y-4 text-stone-700">
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Government Propaganda Violates the Social Contract</h3>
            <p className="text-sm">
              In a democratic republic, the government derives its legitimacy from the informed consent of the
              governed. When the government spends $4.7 billion per year shaping what citizens think about war,
              that consent is manufactured, not earned. Every dollar spent on Pentagon PR is a dollar spent
              undermining the democratic process that supposedly legitimizes the government&apos;s authority.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">The Smith-Mundt Repeal Was an Assault on Liberty</h3>
            <p className="text-sm">
              The 1948 law recognized that a government directing propaganda at its own citizens is incompatible
              with freedom. Its repeal wasn&apos;t &quot;modernization&quot; — it was the removal of a safeguard
              that existed for good reason. When your government can legally lie to you, every justification for
              war becomes suspect.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">The Free Market of Ideas Requires a Level Playing Field</h3>
            <p className="text-sm">
              Libertarians believe in the free market of ideas. But when one participant — the government — has
              a $4.7 billion budget, 27,000 PR employees, and the legal right to propagandize its citizens,
              the marketplace isn&apos;t free. It&apos;s rigged. Every embedded journalist, every Pentagon-reviewed
              script, every paid patriotism event distorts the information citizens need to make decisions about
              war and peace.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-stone-900 mb-1">Both Parties Are Complicit</h3>
            <p className="text-sm">
              The Smith-Mundt repeal passed with bipartisan support. Democrats and Republicans both benefit from
              a citizenry that accepts war without question. The military-media complex serves the interests of
              the state, not the people. As Randolph Bourne wrote in 1918: &quot;War is the health of the state.&quot;
              Information warfare ensures the state stays healthy.
            </p>
          </div>
        </div>
      </div>

      {/* What You Can Do */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
          Defending Yourself Against Information Warfare
        </h2>
        <p className="text-stone-700 mb-4">
          In an age of weaponized information, media literacy is a survival skill. Here&apos;s what individuals
          can do:
        </p>
        <ul className="space-y-2 text-stone-700 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-stone-400 mt-0.5">1.</span>
            <span><strong>Check who&apos;s paying:</strong> When you see a &quot;military analyst&quot; on TV, check if they have defense industry ties. They almost always do.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-stone-400 mt-0.5">2.</span>
            <span><strong>Read international sources:</strong> BBC, Al Jazeera, Reuters, and AP provide perspectives absent from American media. Not because they&apos;re unbiased — because their biases are different from ours.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-stone-400 mt-0.5">3.</span>
            <span><strong>Be suspicious of viral content:</strong> If it makes you angry, that&apos;s the point. Emotional manipulation is the primary tool of information warfare.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-stone-400 mt-0.5">4.</span>
            <span><strong>Support independent journalism:</strong> The Intercept, ProPublica, the Bureau of Investigative Journalism, and local newspapers still do the work. They need funding.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-stone-400 mt-0.5">5.</span>
            <span><strong>Demand transparency:</strong> Push for reinstatement of the Smith-Mundt domestic propaganda ban. Demand that all government-produced content be clearly labeled.</span>
          </li>
        </ul>
      </div>

      {/* Bottom line */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-stone-300 mb-4">
          Information warfare is the cheapest and most effective form of modern conflict. Russia spent
          $1.25 million per month and arguably influenced an American election. The Pentagon spends
          $4.7 billion per year ensuring Americans support the wars it wants to fight.
        </p>
        <p className="text-stone-300 mb-4">
          Since 2012, it has been legal for the US government to direct propaganda at its own citizens.
          The military reviews Hollywood scripts. Pentagon-funded &quot;news&quot; websites pose as independent
          media. Retired generals with defense industry paychecks appear on cable news as &quot;objective
          analysts.&quot; Military influencers target teenagers on TikTok.
        </p>
        <p className="text-stone-300">
          The Founders understood that an informed citizenry is the only real check on government power.
          That&apos;s why they put press freedom in the First Amendment. Information warfare — whether waged by
          Russia, China, or our own government — is an assault on that principle. And you are the target.
        </p>
      </div>

      {/* Sources */}
      <div className="bg-stone-50 rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">Sources &amp; Further Reading</h2>
        <ul className="space-y-1 text-stone-600 text-sm">
          <li>• Associated Press, &quot;Pentagon Spending Billions on PR&quot; (2009)</li>
          <li>• Senate Intelligence Committee, Report on Russian Active Measures (2019)</li>
          <li>• Mueller Report, Vol. I: Russian Interference in the 2016 Presidential Election</li>
          <li>• Bureau of Investigative Journalism — ongoing drone strike tracking</li>
          <li>• Tom Secker &amp; Matthew Alford, &quot;National Security Cinema&quot; (2017)</li>
          <li>• Carl Bernstein, &quot;The CIA and the Media,&quot; Rolling Stone (1977)</li>
          <li>• New York Times, &quot;Behind Analysts, the Pentagon&apos;s Hidden Hand&quot; (2008)</li>
          <li>• The Intercept, &quot;Pentagon Ran Secret Anti-Vax Campaign&quot; (2024)</li>
          <li>• Reuters, &quot;Pentagon Ran Covert Social Media Influence Campaign&quot; (2022)</li>
          <li>• Randolph Bourne, &quot;War Is the Health of the State&quot; (1918)</li>
          <li>• Smith-Mundt Modernization Act of 2012, Section 1078, NDAA FY2013</li>
        </ul>
      </div>

      <div className="text-center text-stone-500 text-sm mt-8 mb-4">
        <p>
          <Link href="/analysis" className="text-red-600 hover:underline">← Back to Analysis</Link>
          {' · '}
          <Link href="/analysis/space-warfare" className="text-red-600 hover:underline">Space Warfare →</Link>
        </p>
      </div>

      <BackToTop />
    </div>
  )
}
