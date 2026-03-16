import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Civil War Cost — $5.2 Trillion, 620K-750K Dead, America\'s Deadliest War | WarCosts',
  description: 'The American Civil War (1861-1865) cost $5.2 trillion in today\'s dollars and killed 620,000-750,000 Americans — more than all other US wars combined until Vietnam. Economic devastation, Reconstruction, and a legacy that still divides the nation.',
  keywords: ['Civil War cost', 'Civil War casualties', 'Civil War deaths', 'Civil War timeline', 'Reconstruction', 'slavery', 'American Civil War', 'deadliest US war'],
  openGraph: {
    title: 'The Civil War — $5.2T, 750K Dead, America\'s Deadliest War',
    description: 'More Americans died in the Civil War than all other wars combined. The war ended slavery but left wounds that never fully healed — and a Reconstruction that was abandoned.',
    url: 'https://warcosts.org/civil-war',
    type: 'article',
  },
}

const keyStats = [
  { label: 'Total Cost (2024$)', value: '$5.2 Trillion' },
  { label: 'Total Dead', value: '620K-750K' },
  { label: 'Union Dead', value: '~365,000' },
  { label: 'Confederate Dead', value: '~290,000' },
  { label: 'Wounded (both sides)', value: '~476,000' },
  { label: 'Duration', value: '4 Years' },
]

const costBreakdown = [
  { category: 'Union Military Operations', amount: '$2.3T', desc: 'Federal Army/Navy, equipment, logistics, pay for 2.1 million soldiers' },
  { category: 'Confederate Military Operations', amount: '$1.0T', desc: 'Confederate Army, blockade runners, limited industrial base' },
  { category: 'Property Destruction (South)', amount: '$800B', desc: 'Destroyed infrastructure, railroads, industry, agriculture' },
  { category: 'Economic Value of Emancipation', amount: '$700B', desc: 'Enslaved people were the South\'s largest "asset" — their liberation was economically transformative' },
  { category: 'Veterans Benefits & Pensions', amount: '$250B', desc: 'Union pensions alone — Confederates received nothing from the federal government' },
  { category: 'Reconstruction Costs', amount: '$150B', desc: 'Federal spending on rebuilding Southern infrastructure and institutions' },
]

const timeline = [
  { year: 'Nov 1860', title: 'Lincoln Elected', desc: 'Abraham Lincoln wins the presidency without a single Southern electoral vote. He carries only 40% of the popular vote in a four-way race. South Carolina calls a secession convention before he even takes office.' },
  { year: 'Dec 1860-Feb 1861', title: 'Secession', desc: 'Seven Deep South states secede before Lincoln\'s inauguration: South Carolina, Mississippi, Florida, Alabama, Georgia, Louisiana, Texas. They form the Confederate States of America. The stated reason, in their own declarations of secession: the preservation of slavery.' },
  { year: 'Apr 12, 1861', title: 'Fort Sumter', desc: 'Confederate forces bombard Fort Sumter in Charleston Harbor. No one is killed in the bombardment itself. Lincoln calls for 75,000 volunteers; four more states secede (Virginia, Arkansas, Tennessee, North Carolina). The war begins.' },
  { year: 'Jul 1861', title: 'First Bull Run', desc: 'Both armies are inexperienced. Washington socialites bring picnic baskets to watch what they expect will be a quick Union victory. Instead, the Union army routs. The war will not be short. Congress authorizes 500,000 volunteers.' },
  { year: '1862', title: 'Year of Blood', desc: 'Shiloh (April): 23,746 casualties in two days — more than all previous American wars combined. Antietam (September 17): 22,717 casualties in a single day — the bloodiest day in American history. Fredericksburg (December): disastrous Union assault. The scale of killing is unprecedented.' },
  { year: 'Jan 1, 1863', title: 'Emancipation Proclamation', desc: 'Lincoln declares all enslaved people in Confederate territory "forever free." The proclamation doesn\'t immediately free anyone (it applies only to territory the Union doesn\'t control), but it transforms the war\'s purpose. 180,000 Black soldiers will eventually serve in the Union Army.' },
  { year: 'Jul 1-3, 1863', title: 'Gettysburg', desc: 'The war\'s turning point. Three days, 51,000 casualties. Pickett\'s Charge on Day 3 — 12,500 Confederate soldiers march across open ground into Union artillery. It is slaughter. Lee retreats. He will never invade the North again. Lincoln\'s Gettysburg Address redefines the war and the nation.' },
  { year: 'Jul 4, 1863', title: 'Vicksburg Falls', desc: 'Grant captures Vicksburg after a 47-day siege, splitting the Confederacy in half. Control of the Mississippi is Union. Combined with Gettysburg the day before, this is the week the war is decided.' },
  { year: '1864', title: 'Grant\'s War of Attrition', desc: 'Grant, now commanding all Union armies, adopts a strategy of relentless pressure. The Overland Campaign (May-June) produces horrific casualties — 55,000 Union losses in one month. Cold Harbor: 7,000 Union casualties in minutes. Grant is called a "butcher," but his strategy works.' },
  { year: 'Nov 1864-Apr 1865', title: 'Sherman\'s March & Total War', desc: 'Sherman marches through Georgia and the Carolinas, destroying everything of military value — and much that isn\'t. "War is hell," he says, and proves it. The March to the Sea devastates the Southern economy and breaks Confederate morale.' },
  { year: 'Apr 9, 1865', title: 'Lee Surrenders at Appomattox', desc: 'Lee surrenders the Army of Northern Virginia to Grant at Appomattox Court House. Grant offers generous terms. The remaining Confederate armies surrender over the following weeks. Four years and 620,000-750,000 dead.' },
  { year: 'Apr 14, 1865', title: 'Lincoln Assassinated', desc: 'John Wilkes Booth shoots Lincoln at Ford\'s Theatre. Lincoln dies the next morning. The man who might have guided a just Reconstruction is gone. Andrew Johnson, a Southern Democrat who opposed secession but not white supremacy, becomes president.' },
  { year: '1865-1877', title: 'Reconstruction', desc: 'The 13th, 14th, and 15th Amendments abolish slavery, guarantee equal protection, and establish voting rights. Black Americans are elected to Congress. But white supremacist violence (the KKK), economic exploitation (sharecropping), and Northern exhaustion end Reconstruction. The Compromise of 1877 withdraws federal troops from the South. Jim Crow follows.' },
]

const casualtyComparison = [
  { war: 'Civil War', dead: '620,000-750,000', note: 'Both sides combined' },
  { war: 'World War II', dead: '405,399', note: 'US deaths only' },
  { war: 'World War I', dead: '116,516', note: 'US deaths only' },
  { war: 'Vietnam War', dead: '58,220', note: 'US deaths only' },
  { war: 'Korean War', dead: '36,574', note: 'US deaths only' },
  { war: 'All other US wars', dead: '~35,000', note: 'Combined' },
]

const keyFigures = [
  { name: 'Abraham Lincoln', role: 'President (Union)', desc: 'Preserved the Union and ended slavery. Navigated impossible political terrain — radical abolitionists, border state slaveholders, peace Democrats. Assassinated five days after Lee\'s surrender. The closest thing to an indispensable man in American history.' },
  { name: 'Ulysses S. Grant', role: 'Commanding General (Union)', desc: 'Won the war through relentless attrition and strategic brilliance. Called a "butcher" by critics, he understood that the Union\'s numerical advantage was decisive only if applied continuously. Later a two-term president who fought the KKK.' },
  { name: 'Robert E. Lee', role: 'Commanding General (Confederacy)', desc: 'Brilliant tactician who chose his state over his country. Won stunning victories at Fredericksburg and Chancellorsville, but his strategic decisions — invading the North twice, Pickett\'s Charge — were costly failures. Mythologized after the war as part of the "Lost Cause."' },
  { name: 'William T. Sherman', role: 'General (Union)', desc: '"War is hell." His March to the Sea broke the Confederate economy and will to fight. Pioneered total war against civilian infrastructure. Reviled in the South, credited in the North with ending the war faster.' },
  { name: 'Frederick Douglass', role: 'Abolitionist / Advisor', desc: 'Former enslaved person who became the war\'s moral voice. Pushed Lincoln toward emancipation and Black military service. "Once let the black man get upon his person the brass letters, U.S... and there is no power on earth which can deny that he has earned the right to citizenship."' },
]

const faqs = [
  {
    q: 'How much did the Civil War cost?',
    a: 'The Civil War cost approximately $5.2 trillion in 2024 dollars — including $2.3 trillion for Union military operations, $1 trillion for Confederate operations, $800 billion in property destruction (mostly in the South), $700 billion in the economic value of emancipation, $250 billion in veterans\' pensions, and $150 billion in Reconstruction. The Southern economy was devastated and didn\'t recover for decades.',
  },
  {
    q: 'How many people died in the Civil War?',
    a: 'Between 620,000 and 750,000 Americans died — more than all other US wars combined until Vietnam. Recent demographic research by J. David Hacker suggests the higher figure is more accurate. Union deaths: ~365,000 (including ~40,000 Black soldiers). Confederate deaths: ~290,000. Two-thirds of all deaths were from disease, not combat. Additionally, an unknown number of civilians died — particularly in the South.',
  },
  {
    q: 'What caused the Civil War?',
    a: 'Slavery. The Confederate states said so themselves. Mississippi\'s declaration of secession: "Our position is thoroughly identified with the institution of slavery — the greatest material interest of the world." South Carolina cited Northern opposition to slavery. Confederate VP Alexander Stephens called slavery the Confederacy\'s "cornerstone." The "states\' rights" argument is a post-war invention to obscure this reality.',
  },
  {
    q: 'Was the Civil War worth it?',
    a: 'The emancipation of 4 million enslaved people was worth any cost. But the failure of Reconstruction — the abandonment of Black Americans to Jim Crow, sharecropping, and white supremacist terror for nearly a century — means the war\'s promise was broken. The Civil War ended legal slavery; it did not achieve racial justice. That fight continues.',
  },
  {
    q: 'What happened during Reconstruction?',
    a: 'Reconstruction (1865-1877) attempted to rebuild the South and integrate formerly enslaved people into American democracy. The 13th, 14th, and 15th Amendments were ratified. Black Americans were elected to Congress and state legislatures. But the Freedmen\'s Bureau was underfunded, the KKK terrorized Black communities, and the Compromise of 1877 withdrew federal troops. Jim Crow laws, convict leasing, and segregation followed — a second form of unfreedom that lasted until the Civil Rights Movement.',
  },
]

export default function CivilWarPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Civil War' }]} />
        <ShareButtons title="The Civil War — $5.2 Trillion, 750K Dead, America's Deadliest War" />

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The American Civil War
          </h1>
          <p className="text-lg text-stone-500 mb-2">1861–1865 · The Deadliest War in American History</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            <strong className="text-[#991b1b]">620,000-750,000 Americans</strong> killed — more than all
            other US wars combined. <strong className="text-[#991b1b]">$5.2 trillion</strong> in costs.
            The war ended slavery and preserved the Union, but Reconstruction was abandoned, Jim Crow followed,
            and the wounds of the war still shape American politics 160 years later.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {keyStats.map((s) => (
            <div key={s.label} className="bg-stone-50 rounded-lg p-4 text-center border border-stone-200">
              <div className="text-xl md:text-2xl font-bold text-[#991b1b]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            The Cost: $5.2 Trillion and a Destroyed Economy
          </h2>
          <p className="text-stone-700 mb-6">
            The Civil War was the most economically destructive event in American history. The South&apos;s
            economy was obliterated — infrastructure destroyed, labor system abolished, capital wiped out.
            Southern per-capita income didn&apos;t recover to pre-war levels until the 20th century. The North
            boomed, creating the industrial economy that would dominate the Gilded Age.
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

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Casualties: America&apos;s Deadliest War
          </h2>
          <p className="text-stone-700 mb-6">
            The Civil War killed more Americans than every other war in US history — combined. The scale of
            death was incomprehensible to a nation of 31 million. The equivalent today would be 7.5 million dead.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 font-semibold text-stone-800">War</th>
                  <th className="text-right py-2 font-semibold text-stone-800">American Dead</th>
                  <th className="text-left py-2 pl-4 font-semibold text-stone-800">Note</th>
                </tr>
              </thead>
              <tbody>
                {casualtyComparison.map((r) => (
                  <tr key={r.war} className="border-b border-stone-100">
                    <td className="py-2 text-stone-700 font-semibold">{r.war}</td>
                    <td className="py-2 text-right font-mono text-[#991b1b]">{r.dead}</td>
                    <td className="py-2 pl-4 text-stone-500 text-sm">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline: Four Years of Slaughter
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

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Key Figures</h2>
          <div className="space-y-4">
            {keyFigures.map((f) => (
              <div key={f.name} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="font-semibold text-stone-800">{f.name} <span className="text-sm text-stone-500 font-normal">— {f.role}</span></div>
                <p className="text-sm text-stone-600 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Legacy: The War That Never Ended
          </h2>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-1">
              &ldquo;The slave went free; stood a brief moment in the sun; then moved back again toward slavery.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— W.E.B. Du Bois, Black Reconstruction (1935)</p>
          </div>
          <p className="text-stone-700 mb-4">
            The Civil War answered the question of whether a state could leave the Union (no) and whether
            human beings could be property (no). But the abandonment of Reconstruction in 1877 meant that
            the promise of equality was deferred for nearly a century.
          </p>
          <p className="text-stone-700 mb-4">
            The &ldquo;Lost Cause&rdquo; mythology — which rewrites the war as being about &ldquo;states&apos;
            rights&rdquo; rather than slavery, and portrays Confederate leaders as noble rather than treasonous —
            took root immediately and persists today. Confederate monuments, most built during the Jim Crow era
            or the Civil Rights era, remain in public spaces across the South.
          </p>
          <p className="text-stone-700">
            From a libertarian perspective, the Civil War contains a deep tension. The war centralized federal
            power in ways that would have horrified the founders. The income tax, military conscription, suspension
            of habeas corpus — all products of the war emergency that became permanent features of American
            governance. But slavery was the most extreme violation of individual liberty imaginable. The war that
            ended slavery and the war that expanded government power are the same war. That contradiction is
            American history in miniature.
          </p>
        </section>

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

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/mexican-american-war', label: 'Mexican-American War — The War That Made the Civil War' },
              { href: '/casualties', label: 'US War Casualties — Every Conflict' },
              { href: '/us-wars-list', label: 'Complete List of US Wars' },
              { href: '/analysis/draft-and-inequality', label: 'The Draft and Inequality' },
              { href: '/veterans', label: 'Veterans — The Aftermath of Service' },
              { href: '/cost-of-war', label: 'Total Cost of All US Wars' },
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

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">Sources</h2>
          <ul className="text-sm text-stone-500 space-y-1 list-disc pl-5">
            <li>Congressional Research Service — Costs of Major US Wars</li>
            <li>J. David Hacker — &ldquo;A Census-Based Count of the Civil War Dead&rdquo; (Civil War History, 2011)</li>
            <li>Battle Cry of Freedom — James McPherson (1988)</li>
            <li>Black Reconstruction in America — W.E.B. Du Bois (1935)</li>
            <li>National Park Service — Civil War Battlefields and Sites</li>
            <li>Confederate States of America — Declarations of Secession</li>
            <li>Personal Memoirs of Ulysses S. Grant (1885)</li>
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
            headline: 'The American Civil War: $5.2 Trillion, 750K Dead, America\'s Deadliest War',
            description: 'Comprehensive analysis of the Civil War (1861-1865) — costs, casualties, timeline, and the legacy of America\'s most destructive conflict.',
            url: 'https://warcosts.org/civil-war',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-15',
            dateModified: '2025-03-15',
          }),
        }}
      />
    </main>
  )
}
