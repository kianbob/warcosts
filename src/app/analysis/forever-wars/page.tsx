import { Metadata } from 'next'
import Link from 'next/link'
import { loadData } from '@/lib/server-utils'
import { fmtMoney, fmt } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'The Forever Wars: How 60 Words Changed Everything',
  description: 'The 2001 Authorization for Use of Military Force — just 60 words — has been used to justify 25 years of global war across 78 countries.',
}

export default function ForeverWarsPage() {
  const stats = loadData('stats.json')

  const aumfText = `That the President is authorized to use all necessary and appropriate force against those nations, organizations, or persons he determines planned, authorized, committed, or aided the terrorist attacks that occurred on September 11, 2001, or harbored such organizations or persons, in order to prevent any future acts of international terrorism against the United States by such nations, organizations or persons.`

  const aumfCountries = [
    'Afghanistan', 'Iraq', 'Syria', 'Yemen', 'Somalia', 'Libya', 'Pakistan',
    'Niger', 'Cameroon', 'Chad', 'Mali', 'Tunisia', 'Kenya', 'Djibouti',
    'Jordan', 'Philippines', 'Georgia', 'Uzbekistan', 'Kyrgyzstan', 'Tajikistan',
  ]

  const stretchedUses = [
    { year: 2001, target: 'Al-Qaeda / Taliban', location: 'Afghanistan', note: 'Original intent of the AUMF' },
    { year: 2002, target: 'Abu Sayyaf', location: 'Philippines', note: 'Stretched to cover affiliate groups' },
    { year: 2007, target: 'Al-Shabaab', location: 'Somalia', note: 'Group didn\'t exist on 9/11' },
    { year: 2014, target: 'ISIS', location: 'Iraq & Syria', note: 'ISIS was an enemy of Al-Qaeda' },
    { year: 2016, target: 'ISIS affiliates', location: 'Libya', note: 'Second intervention in Libya' },
    { year: 2017, target: 'ISIS-linked militants', location: 'Niger', note: 'Most Americans didn\'t know troops were in Niger' },
    { year: 2023, target: 'Houthi rebels', location: 'Yemen / Red Sea', note: 'No connection to 9/11 whatsoever' },
    { year: 2026, target: 'Iranian proxies / Iran', location: 'Middle East', note: 'Developing — no new authorization sought' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Analysis', href: '/analysis' }, { label: 'The Forever Wars' }]} />

      {/* Hero */}
      <div className="bg-stone-900 text-white rounded-xl p-8 md:p-12 mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Analysis</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
          The Forever Wars: How 60 Words Changed Everything
        </h1>
        <p className="text-stone-400 text-lg">
          On September 14, 2001, Congress passed the Authorization for Use of Military Force.
          It was 60 words long. It has been used to justify 25 years of global war.
        </p>
      </div>

      <ShareButtons title="The Forever Wars: How 60 Words Changed Everything" />

      {/* The 60 words */}
      <div className="bg-red-50 border-l-4 border-red-700 rounded-r-xl p-6 md:p-8 my-8">
        <p className="text-sm font-semibold text-red-800 mb-3">The Authorization for Use of Military Force (S.J.Res.23)</p>
        <blockquote className="text-stone-800 italic leading-relaxed">
          &ldquo;{aumfText}&rdquo;
        </blockquote>
        <p className="text-stone-500 text-sm mt-3">Passed September 14, 2001. One dissenting vote: Rep. Barbara Lee (D-CA).</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{stats.counterterrorCountries}</p>
          <p className="text-xs text-muted">Countries with operations</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmtMoney(stats.warOnTerrorCost)}</p>
          <p className="text-xs text-muted">Total cost</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{fmt(stats.warOnTerrorDeaths)}</p>
          <p className="text-xs text-muted">Directly killed</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
          <p className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{(stats.warOnTerrorDisplaced / 1e6).toFixed(0)}M</p>
          <p className="text-xs text-muted">Displaced</p>
        </div>
      </div>

      {/* Barbara Lee */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Lone &ldquo;No&rdquo; Vote</h2>
        <blockquote className="border-l-4 border-stone-300 pl-4 italic text-stone-600 mb-3">
          &ldquo;However difficult this vote may be, some of us must urge the use of restraint. Our country is in a state of mourning.
          Some of us must say, let&apos;s step back for a moment. Let&apos;s just pause for a minute and think through the implications of our actions today
          so that this does not spiral out of control.&rdquo;
        </blockquote>
        <p className="text-muted text-sm">— Rep. Barbara Lee, September 14, 2001. She received death threats for her vote. She was right.</p>
      </div>

      {/* Timeline of stretching */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">How the AUMF Was Stretched</h2>
        <p className="text-muted mb-6">
          The AUMF authorized force against those responsible for 9/11. Here&apos;s how it was expanded to cover groups
          and countries that had nothing to do with it:
        </p>
        <div className="space-y-4">
          {stretchedUses.map((u, i) => (
            <div key={i} className="flex items-start gap-4 border-l-2 border-red-200 pl-4">
              <span className="text-red-700 font-bold font-[family-name:var(--font-heading)] shrink-0">{u.year}</span>
              <div>
                <p className="font-semibold">{u.target} — {u.location}</p>
                <p className="text-muted text-sm">{u.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Countries map (text-based) */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
          Countries Where AUMF Has Been Invoked
        </h2>
        <p className="text-stone-400 text-sm mb-4">
          The US has conducted counterterrorism operations in at least {stats.counterterrorCountries} countries under the AUMF. Here are some:
        </p>
        <div className="flex flex-wrap gap-2">
          {aumfCountries.map(c => (
            <span key={c} className="bg-red-900/50 border border-red-800 text-red-300 text-sm px-3 py-1 rounded-full">{c}</span>
          ))}
          <span className="bg-red-900/50 border border-red-800 text-red-300 text-sm px-3 py-1 rounded-full">+ {stats.counterterrorCountries - aumfCountries.length} more</span>
        </div>
      </div>

      {/* Constitutional analysis */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">The Constitutional Problem</h2>
        <div className="space-y-4 text-stone-700">
          <p>
            Article I, Section 8 of the Constitution grants Congress — not the President — the power to declare war.
            The Founders deliberately placed this power with the legislature because they feared executive tyranny
            and the tendency of rulers to wage war for personal glory.
          </p>
          <p>
            The AUMF effectively transferred this power to the executive branch indefinitely. No sunset clause.
            No geographic limitation. No requirement to return to Congress. Three presidents have used it to
            wage war in countries that had nothing to do with 9/11, against groups that didn&apos;t exist in 2001.
          </p>
          <p>
            From a constitutional perspective, this is perhaps the most consequential erosion of congressional
            war powers in American history. A single vote, cast in the emotional aftermath of a terrorist attack,
            has been used to justify a quarter-century of undeclared global war.
          </p>
        </div>
      </div>

      {/* Libertarian perspective */}
      <div className="bg-stone-900 text-white rounded-xl p-6 mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Perspective</h2>
        <p className="text-stone-300 italic">
          The AUMF represents everything the Founders warned against: a blank check for war, unchecked executive power,
          and a permanent state of conflict that enriches defense contractors while draining the treasury and
          destroying lives abroad and at home. The &ldquo;War on Terror&rdquo; has cost {fmtMoney(stats.warOnTerrorCost)},
          killed {fmt(stats.warOnTerrorDeaths)} people, displaced {(stats.warOnTerrorDisplaced / 1e6).toFixed(0)} million,
          and made America less safe — not more. The solution isn&apos;t reform. It&apos;s repeal.
        </p>
      </div>

      {/* Cross-links */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/analysis/war-on-terror" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">The War on Terror: $8 Trillion Later →</h3>
          <p className="text-muted text-sm">Full analysis of costs and consequences</p>
        </Link>
        <Link href="/modern-wars" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">All Modern Wars →</h3>
          <p className="text-muted text-sm">Every post-1995 military operation</p>
        </Link>
        <Link href="/analysis/the-469" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">469 Military Interventions →</h3>
          <p className="text-muted text-sm">The full history of US military force abroad</p>
        </Link>
        <Link href="/analysis/congressional-authority" className="bg-white rounded-lg border p-4 hover:shadow-md transition">
          <h3 className="font-semibold">Wars Without Congress →</h3>
          <p className="text-muted text-sm">How presidents bypassed the Constitution</p>
        </Link>
      </div>
    </div>
  )
}
