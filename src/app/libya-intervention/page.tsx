import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Libya Intervention Cost — NATO Bombing, Gaddafi Killed, Failed State Created | WarCosts',
  description: 'The 2011 Libya intervention cost $1.1 billion in US military operations, killed Gaddafi, destroyed the state, enabled weapons proliferation across Africa, and created a failed state with open slave markets. Another "humanitarian" war that made everything worse.',
  keywords: ['Libya intervention cost', 'Libya war 2011', 'Gaddafi killed', 'Benghazi', 'NATO Libya', 'Libya failed state', 'Libya weapons proliferation', 'Hillary Clinton Libya'],
  openGraph: {
    title: 'Libya Intervention — Killed Gaddafi, Created a Failed State, Opened Slave Markets',
    description: 'The 2011 NATO bombing of Libya: a "humanitarian" intervention that destroyed a functioning state and created chaos across North Africa.',
    url: 'https://warcosts.org/libya-intervention',
    type: 'article',
  },
}

const keyStats = [
  { label: 'US Cost', value: '$1.1 Billion' },
  { label: 'NATO Cost (total)', value: '$3+ Billion' },
  { label: 'US Combat Deaths', value: '0' },
  { label: 'Libyan Deaths (2011)', value: '~30,000' },
  { label: 'Duration (bombing)', value: '7 Months' },
  { label: 'Current State', value: 'Failed State' },
]

const costBreakdown = [
  { category: 'US Military Operations', amount: '$1.1B', desc: 'Tomahawk missiles ($1.4M each), aerial refueling, surveillance, drone strikes' },
  { category: 'NATO Operations (non-US)', amount: '$2B+', desc: 'UK, France, Italy, and others; 26,000+ sorties' },
  { category: 'Humanitarian Aid', amount: '$300M+', desc: 'Refugee assistance, post-conflict stabilization (largely ineffective)' },
  { category: 'Ongoing Regional Costs', amount: 'Incalculable', desc: 'Weapons proliferation, Mali crisis, Libya civil war, migrant crisis, ISIS expansion' },
]

const timeline = [
  { year: 'Feb 2011', title: 'Arab Spring Reaches Libya', desc: 'Inspired by revolutions in Tunisia and Egypt, protests erupt in eastern Libya (Benghazi). Gaddafi responds with force. Opposition groups form the National Transitional Council. The situation escalates from protest to civil war within weeks.' },
  { year: 'Mar 17, 2011', title: 'UN Resolution 1973', desc: 'The UN Security Council authorizes a no-fly zone and "all necessary measures" to protect civilians. Russia and China abstain rather than veto — a decision both later regret when the resolution is used to justify regime change. The authorization is for civilian protection, not regime change.' },
  { year: 'Mar 19, 2011', title: 'Operation Odyssey Dawn', desc: 'US, UK, and French forces launch cruise missiles and airstrikes against Libyan air defenses and government forces. President Obama acts without Congressional authorization, citing the War Powers Resolution\'s 60-day window. He later argues the intervention doesn\'t constitute "hostilities" — a claim even his own legal advisors reject.' },
  { year: 'Mar-Oct 2011', title: 'NATO Air Campaign', desc: 'NATO flies 26,000+ sorties, including 9,600 strike sorties. The "no-fly zone" quickly becomes close air support for rebel forces. NATO acts as the rebel air force — far exceeding the civilian protection mandate. Gaddafi\'s forces are systematically destroyed.' },
  { year: 'Aug 2011', title: 'Fall of Tripoli', desc: 'Rebel forces, backed by NATO airpower and special forces from multiple countries (including Qatari and Emirati troops on the ground), capture Tripoli. Gaddafi flees. The National Transitional Council takes over — but has no plan for governance and limited control outside of Benghazi.' },
  { year: 'Oct 20, 2011', title: 'Gaddafi Killed', desc: 'Gaddafi is captured near Sirte, beaten, sodomized with a bayonet, and killed by rebel fighters. Video of his death goes viral. Secretary of State Hillary Clinton, informed during a TV interview, laughs: "We came, we saw, he died." No trial, no accountability, no rule of law.' },
  { year: 'Sep 11, 2012', title: 'Benghazi Attack', desc: 'Islamist militants attack the US consulate and CIA annex in Benghazi, killing Ambassador Chris Stevens and three other Americans. The attack exposes the security vacuum created by the intervention. The annex was allegedly involved in transferring Libyan weapons to Syrian rebels.' },
  { year: '2014-present', title: 'Second Civil War & Failed State', desc: 'Libya descends into a second civil war. Two rival governments claim legitimacy. ISIS establishes a foothold in Sirte. Weapons from Gaddafi\'s arsenals flood across Africa, fueling conflicts in Mali, Niger, Nigeria, and Syria. Open-air slave markets operate in Libya. It is, by every measure, a catastrophe.' },
]

const consequences = [
  { area: 'Libya', desc: 'Failed state with rival governments, militias controlling territory, and no functioning central authority. GDP collapsed. Infrastructure destroyed. Open slave markets for African migrants documented by CNN in 2017.' },
  { area: 'Mali & West Africa', desc: 'Libyan weapons and Tuareg fighters destabilized Mali, leading to a 2012 coup and French military intervention. The Sahel region remains in crisis.' },
  { area: 'ISIS Expansion', desc: 'ISIS established a significant presence in post-Gaddafi Libya, controlling Sirte until 2016. Libya became a base for ISIS recruitment and operations targeting Europe.' },
  { area: 'European Migrant Crisis', desc: 'Libya was the primary departure point for Mediterranean migration to Europe. Gaddafi had been controlling migration flows; his removal opened the floodgates. Thousands drowned.' },
  { area: 'Weapons Proliferation', desc: 'Gaddafi\'s massive weapons stockpiles — including 20,000+ MANPADS (shoulder-fired anti-aircraft missiles) — were looted and trafficked across Africa and the Middle East.' },
  { area: 'Nuclear Nonproliferation', desc: 'Gaddafi had voluntarily given up his nuclear program in 2003 in exchange for normalization. His killing after disarming taught every dictator: never give up your weapons. North Korea explicitly cited Libya as the reason.' },
]

const keyFigures = [
  { name: 'Barack Obama', role: 'President', desc: 'Authorized the intervention reluctantly, then called Libya the "worst mistake" of his presidency. The "lead from behind" strategy was supposed to minimize American involvement; it succeeded in minimizing accountability while maximizing chaos.' },
  { name: 'Hillary Clinton', role: 'Secretary of State', desc: 'The intervention\'s strongest advocate within the administration. Her "we came, we saw, he died" comment became infamous. Later faced years of Congressional investigation over the Benghazi attack.' },
  { name: 'Samantha Power', role: 'NSC Senior Director', desc: 'Author of "A Problem from Hell" about genocide prevention. Pushed for intervention on humanitarian grounds. The Libya outcome demonstrated the limits of humanitarian intervention ideology.' },
  { name: 'Muammar Gaddafi', role: 'Libyan Leader (1969-2011)', desc: 'Authoritarian ruler for 42 years. Erratic, brutal, but had maintained stability and used oil wealth to provide one of Africa\'s highest standards of living. His removal created a vacuum that nothing has filled.' },
  { name: 'Nicolas Sarkozy', role: 'French President', desc: 'Led the push for intervention, possibly motivated by personal and French commercial interests in Libya. Later investigated for receiving Libyan campaign financing from Gaddafi.' },
]

const faqs = [
  {
    q: 'How much did the Libya intervention cost?',
    a: 'US military operations cost approximately $1.1 billion. Total NATO costs exceeded $3 billion. But the true cost is incalculable: a failed state, weapons proliferation across Africa, the European migrant crisis, ISIS expansion, and the destruction of nuclear nonproliferation incentives. The direct costs were low; the indirect costs are catastrophic and ongoing.',
  },
  {
    q: 'Was the Libya intervention legal?',
    a: 'Internationally, UN Security Council Resolution 1973 authorized a no-fly zone and civilian protection — but not regime change. NATO far exceeded this mandate. Domestically, Obama never received Congressional authorization. He argued the bombing didn\'t constitute "hostilities" under the War Powers Resolution — a claim rejected by the Office of Legal Counsel and the Pentagon\'s own lawyers. Obama overruled both.',
  },
  {
    q: 'What happened after Gaddafi was killed?',
    a: 'Libya collapsed into a failed state. Two rival governments emerged. Hundreds of militias carved up territory. ISIS established a presence. Weapons flooded across Africa, destabilizing Mali, Niger, and the broader Sahel region. Open slave markets appeared. The European migrant crisis accelerated. Obama called it the "worst mistake" of his presidency.',
  },
  {
    q: 'Did the Libya intervention affect nuclear nonproliferation?',
    a: 'Devastatingly. Gaddafi voluntarily dismantled his nuclear weapons program in 2003 in exchange for normalization with the West. Eight years later, NATO helped kill him. The lesson for every dictator: giving up nuclear weapons gets you killed. North Korea explicitly cited Libya as the reason it would never denuclearize. The intervention may have doomed nuclear nonproliferation efforts for a generation.',
  },
  {
    q: 'What is the situation in Libya today?',
    a: 'Libya remains a fragmented, failed state. Rival governments compete for legitimacy. Armed militias control territory and resources. Oil production (Libya\'s only significant revenue source) fluctuates with the conflict. International efforts at unification have repeatedly failed. The humanitarian situation is dire, particularly for African migrants trapped in Libya. It is one of the most complete state failures in modern history.',
  },
]

export default function LibyaInterventionPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Libya Intervention' }]} />
        <ShareButtons title="Libya Intervention — Killed Gaddafi, Created a Failed State" />

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4 leading-tight">
            The Libya Intervention
          </h1>
          <p className="text-lg text-stone-500 mb-2">2011 · &ldquo;We Came, We Saw, He Died&rdquo;</p>
          <p className="text-xl text-stone-600 leading-relaxed">
            A <strong className="text-[#991b1b]">$1.1 billion</strong> &ldquo;humanitarian intervention&rdquo; that
            killed Gaddafi, destroyed a functioning state, opened <strong className="text-[#991b1b]">slave markets</strong>,
            flooded Africa with weapons, accelerated the European migrant crisis, helped ISIS expand, and destroyed
            nuclear nonproliferation incentives. Obama called it his{' '}
            <strong className="text-[#991b1b]">&ldquo;worst mistake.&rdquo;</strong> He was right.
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
            The Cost: Cheap to Bomb, Impossible to Fix
          </h2>
          <p className="text-stone-700 mb-6">
            The Libya intervention was sold as a low-cost, low-risk operation — no ground troops, shared NATO
            burden, quick results. The bombing was indeed cheap. The consequences are incalculable.
          </p>
          <div className="overflow-x-auto">
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
                    <td className="py-2 text-right font-mono text-[#991b1b] font-semibold">{r.amount}</td>
                    <td className="py-2 pl-4 text-stone-500 hidden md:table-cell">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-6">
            Timeline: From Arab Spring to Failed State
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
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[#1c1917] mb-4">
            Consequences: Everything Got Worse
          </h2>
          <p className="text-stone-700 mb-6">
            The Libya intervention is the single best case study for why &ldquo;we have to do something&rdquo;
            is the most dangerous phrase in foreign policy. Every consequence was predictable; none was prevented.
          </p>
          <div className="space-y-4">
            {consequences.map((c) => (
              <div key={c.area} className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <h3 className="font-semibold text-[#991b1b] mb-1">{c.area}</h3>
                <p className="text-sm text-stone-600">{c.desc}</p>
              </div>
            ))}
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
            Editorial: The Humanitarian War Myth
          </h2>
          <div className="bg-[#991b1b]/5 border-l-4 border-[#991b1b] p-4 rounded-r-lg mb-4">
            <p className="text-stone-800 italic mb-1">
              &ldquo;We came, we saw, he died.&rdquo;
            </p>
            <p className="text-stone-500 text-sm">— Secretary of State Hillary Clinton, October 2011</p>
          </div>
          <p className="text-stone-700 mb-4">
            Libya is the perfect case study for the bankruptcy of &ldquo;humanitarian intervention.&rdquo; Every
            argument for the war was framed in moral terms: Gaddafi was going to massacre civilians, we had a
            &ldquo;responsibility to protect,&rdquo; this time would be different. It wasn&apos;t different.
          </p>
          <p className="text-stone-700 mb-4">
            The intervention succeeded spectacularly at its unstated goal (regime change) and failed completely
            at its stated goal (protecting civilians). More Libyans have died in the post-Gaddafi chaos than
            would have died had Gaddafi retaken Benghazi. The slave markets that now operate in Libya represent
            a human rights catastrophe far worse than anything Gaddafi was accused of planning.
          </p>
          <p className="text-stone-700">
            The lesson Libya teaches — and that Washington refuses to learn — is that destroying a government
            is easy. Building one is nearly impossible. The US has demonstrated this in Iraq, Afghanistan, and
            Libya. The humanitarian case for war always sounds compelling in the moment. The humanitarian
            consequences of war are always worse than predicted.
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
              { href: '/syria-intervention', label: 'Syria Intervention — The Next "Humanitarian" War' },
              { href: '/iraq-war', label: 'Iraq War — Same Playbook, Bigger Disaster' },
              { href: '/analysis/blowback', label: 'Blowback — Consequences of Intervention' },
              { href: '/analysis/regime-changes', label: 'US Regime Changes' },
              { href: '/analysis/the-aftermath', label: 'The Aftermath — What Happens After We Leave' },
              { href: '/drone-strikes', label: 'Drone Strikes — The New Way of War' },
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
            <li>Department of Defense — Operation Odyssey Dawn/Unified Protector Cost Reports</li>
            <li>Congressional Research Service — Libya: Transition and US Policy (2022)</li>
            <li>House Foreign Affairs Committee — Libya Investigation Reports</li>
            <li>UN Panel of Experts — Libya Arms Embargo Reports</li>
            <li>CNN — &ldquo;People for Sale&rdquo; Libya Slave Markets Investigation (2017)</li>
            <li>The Atlantic — &ldquo;The Obama Doctrine&rdquo; (2016)</li>
            <li>UK Parliament — Libya: Examination of Intervention (Foreign Affairs Committee, 2016)</li>
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
            headline: 'The Libya Intervention: Killed Gaddafi, Created a Failed State',
            description: 'Comprehensive analysis of the 2011 Libya intervention — costs, timeline, consequences, and the failure of humanitarian war.',
            url: 'https://warcosts.org/libya-intervention',
            publisher: { '@type': 'Organization', name: 'WarCosts.org', url: 'https://warcosts.org' },
            datePublished: '2025-03-15',
            dateModified: '2025-03-15',
          }),
        }}
      />
    </main>
  )
}
