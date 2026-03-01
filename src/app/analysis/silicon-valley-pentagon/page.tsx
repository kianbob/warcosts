import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Silicon Valley & the Pentagon — The New Military-Industrial Complex | WarCosts',
  description: 'Big Tech is the new defense industry. Google, Amazon, Microsoft, Palantir, and Anduril are reshaping warfare with AI, autonomous weapons, and surveillance tech.',
  keywords: ['silicon valley pentagon', 'military tech', 'project maven', 'palantir military', 'anduril', 'autonomous weapons', 'AI warfare'],
  openGraph: {
    title: 'Silicon Valley & the Pentagon',
    description: 'How Big Tech is becoming the new military-industrial complex.',
    url: 'https://warcosts.org/analysis/silicon-valley-pentagon',
    type: 'article',
  },
}

const techContracts = [
  { company: 'Microsoft', contract: 'IVAS (HoloLens)', value: '$22B', desc: 'Augmented reality headsets for Army combat' },
  { company: 'Amazon (AWS)', contract: 'JWCC Cloud', value: '$10B', desc: 'Cloud infrastructure for DOD and intelligence' },
  { company: 'Palantir', contract: 'Multiple DOD/IC', value: '$2.8B+', desc: 'Intelligence analysis, targeting, and surveillance' },
  { company: 'Google', contract: 'Project Maven / JEDI', value: '$1.2B+', desc: 'AI analysis of drone footage; cloud services' },
  { company: 'Anduril', contract: 'Counter-drone / autonomous', value: '$1B+', desc: 'Autonomous drones, surveillance towers, AI weapons' },
  { company: 'Shield AI', contract: 'Autonomous aircraft', value: '$500M+', desc: 'AI pilots for fighter jets and drones' },
]

export default function SiliconValleyPentagonPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Silicon Valley & the Pentagon — The New Military-Industrial Complex',
    description: 'Big Tech is reshaping warfare with AI, autonomous weapons, and surveillance.',
    url: 'https://warcosts.org/analysis/silicon-valley-pentagon',
    publisher: { '@type': 'Organization', name: 'WarCosts', url: 'https://warcosts.org' },
    datePublished: '2025-01-20',
    dateModified: '2025-03-01',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'Silicon Valley & Pentagon' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          Silicon Valley &amp; the Pentagon
        </h1>
        <p className="text-stone-400 text-lg">
          Eisenhower warned about the military-industrial complex. He never imagined it would merge with
          the companies that know everything about everyone.
        </p>
      </div>

      <ShareButtons title="Silicon Valley & the Pentagon" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { value: '$36B+', label: 'Tech company DOD contracts' },
          { value: '25%', label: 'Annual growth in tech-DOD deals' },
          { value: '500+', label: 'DOD officials turned tech execs' },
          { value: '0', label: 'International laws on autonomous weapons' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg p-5 shadow-sm border text-center">
            <p className="text-3xl font-bold text-red-800 font-[family-name:var(--font-heading)]">{s.value}</p>
            <p className="text-stone-500 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto text-stone-600">
        <p className="text-lg">
          When Dwight Eisenhower warned America about the military-industrial complex in 1961, the power
          players were companies like General Dynamics, Boeing, and Lockheed. They built planes, tanks, and
          missiles. The new military-industrial complex builds something far more dangerous: the algorithms
          that decide who lives and who dies.
        </p>
        <p>
          Amazon, Google, Microsoft, Palantir, and Anduril are not replacing traditional defense contractors —
          they&apos;re layering on top of them, creating a surveillance-warfare apparatus that Eisenhower
          could never have imagined. The companies that know your search history, read your emails, and track
          your location are now building the tools of war.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The Major Contracts</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 my-8 max-w-3xl mx-auto">
        {techContracts.map(c => (
          <div key={c.company + c.contract} className="bg-white rounded-lg border p-5">
            <p className="font-bold text-stone-800 font-[family-name:var(--font-heading)]">{c.company}</p>
            <p className="text-red-800 font-semibold text-lg">{c.value}</p>
            <p className="text-stone-700 font-medium text-sm">{c.contract}</p>
            <p className="text-stone-500 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl mx-auto text-stone-600">
        <h2 className="font-[family-name:var(--font-heading)]">Project Maven: Where It All Began</h2>
        <p>
          In April 2017, the Pentagon quietly launched Project Maven — officially the &ldquo;Algorithmic Warfare
          Cross-Functional Team.&rdquo; The mission: use machine learning to analyze the massive volume of drone
          surveillance footage pouring in from war zones. The Pentagon was drowning in data; AI was the solution.
        </p>
        <p>
          Google won the initial contract. The company&apos;s TensorFlow AI framework would analyze drone footage,
          identify objects, track movements, and flag targets. Google engineers were, in effect, building the
          targeting system for America&apos;s drone assassination program.
        </p>
        <p>
          When the contract leaked internally, the reaction was explosive. Over <strong>4,000 Google employees</strong> signed
          a letter demanding the company withdraw. &ldquo;We believe that Google should not be in the business
          of war,&rdquo; they wrote. A dozen engineers resigned. Google eventually announced it would not renew
          the contract — and published a set of &ldquo;AI principles&rdquo; that excluded lethal autonomous weapons.
        </p>
        <p>
          But the story didn&apos;t end there. Google quietly continued other DOD work, and Project Maven&apos;s
          contract moved to other companies willing to do what Google publicly disavowed. The technology didn&apos;t
          disappear — it just changed hands.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;Google should not be in the business of war.&rdquo;
          <br />— Open letter signed by 4,000+ Google employees, 2018
        </blockquote>

        <h2 className="font-[family-name:var(--font-heading)]">Palantir: Surveillance as a Business Model</h2>
        <p>
          Co-founded by Peter Thiel with seed funding from the CIA&apos;s venture capital arm (In-Q-Tel),
          Palantir Technologies has built its empire on military and intelligence contracts. With over
          <strong> $2.8 billion in federal contracts</strong>, Palantir&apos;s software is embedded in
          virtually every US intelligence agency and military branch.
        </p>
        <p>
          Palantir&apos;s Gotham platform integrates data from multiple intelligence sources — signals
          intelligence, satellite imagery, financial records, social media — into a single interface that
          allows analysts to track individuals, map networks, and identify targets. It&apos;s the backbone of
          America&apos;s surveillance state, and increasingly, its targeting apparatus.
        </p>
        <p>
          The company has also provided technology to ICE for immigration enforcement, to police departments
          for predictive policing, and to foreign governments including the UK&apos;s National Health Service
          and the Israeli military. Palantir&apos;s CEO Alex Karp has been unusually candid about the company&apos;s
          role: &ldquo;If we are going to ask someone to put themselves in harm&apos;s way, we should back them
          up with the best technology we have.&rdquo;
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            Peter Thiel, Palantir&apos;s co-founder, was one of Trump&apos;s earliest and largest Silicon Valley
            supporters. His protégés — including JD Vance (now Vice President) — have built an entire political
            movement around the fusion of tech libertarianism and military power. Thiel personally invested in
            Anduril, SpaceX, and multiple defense-tech startups.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">Anduril: The Startup Arms Dealer</h2>
        <p>
          Founded in 2017 by Palmer Luckey — the 24-year-old who sold Oculus VR to Facebook for $3 billion before
          being ousted over political controversies — Anduril Industries represents the purest expression of the
          Silicon Valley-to-Pentagon pipeline. Named after Aragorn&apos;s sword in <em>Lord of the Rings</em>,
          Anduril builds autonomous surveillance towers, AI-powered counter-drone systems, and unmanned combat vehicles.
        </p>
        <p>
          Valued at over <strong>$14 billion</strong>, Anduril has attracted investment from Andreessen Horowitz,
          Founders Fund (Peter Thiel), and other top-tier VC firms. Its pitch is seductive: move fast, build
          cheap, disrupt the legacy defense contractors with Silicon Valley speed and innovation. Its Lattice
          AI platform serves as the &ldquo;operating system&rdquo; for autonomous warfare — fusing sensor data,
          identifying threats, and coordinating autonomous responses.
        </p>
        <p>
          Anduril&apos;s Altius family of autonomous munitions — essentially kamikaze drones that can identify
          and strike targets independently — represents a new category of weapon that blurs the line between
          human decision-making and machine autonomy.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Microsoft&apos;s $22 Billion Army Deal</h2>
        <p>
          In 2021, Microsoft won a contract worth up to <strong>$22 billion over 10 years</strong> to provide the
          US Army with its Integrated Visual Augmentation System (IVAS) — a modified version of the HoloLens
          augmented reality headset. The system overlays tactical information, night vision, thermal imaging,
          and target identification onto soldiers&apos; field of view.
        </p>
        <p>
          Like Google before it, Microsoft faced internal dissent. Over 100 employees signed a letter demanding
          the company cancel the contract: &ldquo;We did not sign up to develop weapons, and we demand a say
          in how our work is used.&rdquo; Microsoft CEO Satya Nadella dismissed the concerns, saying the company
          would not &ldquo;withhold technology from institutions that we have elected in democracies to protect
          the freedoms we enjoy.&rdquo;
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">AI Targeting in Gaza: Lavender and Gospel</h2>
        <p>
          The most alarming real-world application of AI warfare emerged in 2023–2024, when Israeli journalists
          and intelligence sources revealed that the Israeli military was using AI systems called
          <strong> Lavender</strong> and <strong>Gospel</strong> to generate bombing targets in Gaza at
          unprecedented speed and scale.
        </p>
        <p>
          Lavender, according to reporting by +972 Magazine and Local Call, compiled a database of
          <strong> 37,000 suspected militants</strong> using machine learning — analyzing phone data, social
          connections, and behavioral patterns. The system assigned a rating to each individual, and Israeli
          officers were given as little as <strong>20 seconds to review</strong> each AI-generated target before
          approving a strike. In practice, according to sources within the Israeli intelligence community,
          the human review was a rubber stamp.
        </p>
        <p>
          Gospel handled targeting for buildings and infrastructure, generating targets at a pace that far
          outstripped human intelligence capacity. Together, these systems enabled the Israeli military to
          bomb Gaza at a rate that previous wars would have taken months or years to achieve.
        </p>
        <p>
          The implications extend far beyond Israel. The technology powering Lavender and Gospel — machine
          learning, big data analytics, behavioral prediction — was largely developed in Silicon Valley. The
          underlying AI frameworks, cloud infrastructure, and data processing tools come from the same companies
          building products for American consumers. Gaza is a proving ground for the future of AI warfare.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The machine did it coldly. And when you go from 50 targets a year to 100 targets a day,
          it changes the nature of war.&rdquo;
          <br />— Israeli intelligence source, speaking to +972 Magazine, April 2024
        </blockquote>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <p className="font-bold text-amber-900 font-[family-name:var(--font-heading)] text-lg mb-2">💡 Did You Know?</p>
          <p className="text-amber-800">
            The US DOD&apos;s &ldquo;Replicator&rdquo; initiative, launched in 2023, aims to field
            <strong> thousands of autonomous weapons systems</strong> within 18–24 months — explicitly to counter
            China. The program bypasses traditional procurement to move at &ldquo;startup speed.&rdquo; The era
            of mass autonomous warfare is not a future concern — it&apos;s being built right now.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-heading)]">The Kill Chain Question</h2>
        <p>
          The central ethical question of AI warfare is deceptively simple: <strong>who decides to kill?</strong>
        </p>
        <p>
          The traditional &ldquo;kill chain&rdquo; in military operations involves a human decision-maker at
          every step: identify target, verify target, approve engagement, execute. AI is compressing this chain —
          from hours to minutes to seconds. At some point, the human in the loop becomes a formality. The
          machine identifies, the machine recommends, the human approves in 20 seconds, the machine executes.
        </p>
        <p>
          The next step — removing the human entirely — is already technically possible. Autonomous weapons that
          can select and engage targets without any human intervention exist in various stages of development.
          The question is not whether they will be deployed, but when. And when an autonomous weapon kills a
          civilian — and it will — who is responsible? The programmer? The commander who deployed it? The CEO
          of the company that built it? The algorithm itself?
        </p>
        <p>
          No international law, treaty, or framework addresses this question. The UN has debated autonomous
          weapons for over a decade without producing binding regulations. The US, Russia, China, Israel,
          and other major military powers have consistently blocked meaningful restrictions.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">The New Revolving Door</h2>
        <p>
          The original revolving door — between the Pentagon and traditional defense contractors — has been
          well-documented. Generals retire and join Lockheed Martin. Pentagon officials become lobbyists.
          The new revolving door adds a third node: Silicon Valley.
        </p>
        <ul>
          <li><strong>Eric Schmidt</strong> (former Google CEO) — chaired the Defense Innovation Board and the National Security Commission on AI; invested in multiple defense-tech startups</li>
          <li><strong>Ash Carter</strong> (former SecDef) — created the Defense Innovation Unit (DIU) in Silicon Valley; later joined Apple&apos;s board and MIT</li>
          <li><strong>Mike Brown</strong> (former DIU director) — moved between venture capital and Pentagon innovation</li>
          <li><strong>Palmer Luckey</strong> (Oculus founder) — from Facebook VR to Anduril autonomous weapons</li>
          <li><strong>Keith Alexander</strong> (former NSA director) — founded IronNet Cybersecurity, valued at $3.4B at peak</li>
        </ul>
        <p>
          The pattern is clear: government service builds relationships and security clearances, then the
          private sector monetizes them. The incentive structure ensures that the people shaping military
          technology policy are the same people who profit from its expansion.
        </p>

        <h2 className="font-[family-name:var(--font-heading)]">Compared to the Old MIC</h2>
        <p>
          The traditional military-industrial complex — Lockheed Martin, RTX (Raytheon), Northrop Grumman,
          Boeing, General Dynamics — still dominates defense spending, collectively receiving over
          <strong> $150 billion per year</strong> in DOD contracts. But the tech companies are growing faster,
          and their products are more transformative.
        </p>
        <p>
          Lockheed builds the F-35. But Palantir decides which building to hit. Amazon hosts the classified
          data. Microsoft puts targeting information in soldiers&apos; goggles. Anduril builds the autonomous
          drone that carries out the strike. Google trained the AI that identifies the target in the first place.
        </p>
        <p>
          The old MIC built the weapons. The new MIC builds the brain.
        </p>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;In the councils of government, we must guard against the acquisition of unwarranted influence,
          whether sought or unsought, by the military-industrial complex.&rdquo;
          <br />— Dwight D. Eisenhower, 1961
        </blockquote>

        <blockquote className="border-l-4 border-red-800">
          &ldquo;The real danger is not that computers will begin to think like men,
          but that men will begin to think like computers.&rdquo;
          <br />— Sydney J. Harris
        </blockquote>
      </div>

      {/* Related */}
      <div className="mt-12 bg-stone-50 rounded-lg p-6 border max-w-3xl mx-auto">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Related Analysis</h3>
        <ul className="space-y-2">
          <li><Link href="/analysis/military-industrial-complex" className="text-red-800 hover:underline">→ The Military-Industrial Complex — Follow the money</Link></li>
          <li><Link href="/analysis/drone-wars" className="text-red-800 hover:underline">→ Drone Wars — Killing by remote control</Link></li>
          <li><Link href="/contractors" className="text-red-800 hover:underline">→ Top Defense Contractors</Link></li>
          <li><Link href="/defense-budget" className="text-red-800 hover:underline">→ The $886B Defense Budget</Link></li>
          <li><Link href="/analysis/forever-wars" className="text-red-800 hover:underline">→ Forever Wars — How 60 words changed everything</Link></li>
        </ul>
      </div>

      <BackToTop />
    </div>
  )
}
