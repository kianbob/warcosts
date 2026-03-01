'use client'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { fmtMoney, fmt } from '@/lib/utils'

const ANALYSIS_ARTICLES = [
  { slug: 'war-on-terror', title: 'The War on Terror: $8 Trillion Later', desc: '929,000 dead. Four countries destabilized.' },
  { slug: 'congressional-authority', title: '19 Wars Without Congress', desc: 'How presidents bypassed the Constitution.' },
  { slug: 'blowback', title: 'Blowback: How Interventions Create Enemies', desc: 'The CIA\'s term for unintended consequences.' },
  { slug: 'military-industrial-complex', title: 'The Military-Industrial Complex', desc: 'Eisenhower warned us. We didn\'t listen.' },
  { slug: 'human-cost', title: 'The Human Cost', desc: 'PTSD, veteran suicide (17/day), displacement.' },
  { slug: 'empire-of-bases', title: 'Empire of Bases', desc: '750 bases in 80 countries.' },
  { slug: 'cost-per-life', title: 'The Price of a Life', desc: '$935M per death in Afghanistan.' },
  { slug: 'presidents-at-war', title: 'Presidents at War', desc: 'Which presidents waged the most wars?' },
  { slug: 'the-aftermath', title: 'The Aftermath', desc: '$2.5T in veteran care. 17 suicides per day.' },
  { slug: 'pentagon-climate', title: 'The Pentagon\'s Carbon Bootprint', desc: '55th largest emitter on Earth.' },
  { slug: 'jobs-vs-war', title: 'Jobs vs. War', desc: 'Military spending creates fewer jobs.' },
  { slug: 'the-469', title: '469 Military Interventions', desc: '469 deployments since 1798.' },
  { slug: 'drone-wars', title: 'Drone Wars', desc: 'Obama 563 strikes vs Bush 57.' },
  { slug: 'silicon-valley-pentagon', title: 'Silicon Valley & the Pentagon', desc: 'Big Tech meets the military.' },
  { slug: 'forever-wars', title: 'The Forever Wars', desc: '60 words that enabled 25 years of war.' },
  { slug: 'ukraine-proxy', title: 'America\'s Proxy War in Ukraine', desc: '$66.9B — largest aid since WWII.' },
  { slug: 'iran-2026', title: 'Iran 2026: Another Undeclared War?', desc: 'US strikes Iran without Congress.' },
]

const PAGES = [
  { href: '/spending', title: 'Military Spending', desc: 'Annual US defense budget data' },
  { href: '/casualties', title: 'Casualty Data', desc: 'Deaths by conflict' },
  { href: '/bases', title: 'Overseas Bases', desc: '750 bases in 80 countries' },
  { href: '/presidents', title: 'Presidents at War', desc: 'War scorecard by president' },
  { href: '/contractors', title: 'Defense Contractors', desc: 'Who profits from war' },
  { href: '/arms-sales', title: 'Arms Sales', desc: 'US weapons exports' },
  { href: '/timeline', title: 'Timeline', desc: '1775 to present' },
  { href: '/war-clock', title: 'War Clock', desc: 'Real-time spending counter' },
  { href: '/tools/tax-receipt', title: 'Tax Receipt Calculator', desc: 'Your personal military tax' },
  { href: '/tools/jobs-calculator', title: 'Jobs Calculator', desc: 'Military vs civilian jobs' },
  { href: '/tools/cost-calculator', title: 'Cost Calculator', desc: 'State-by-state war cost' },
  { href: '/opportunity-cost', title: 'Opportunity Cost', desc: 'What else could this buy?' },
  { href: '/downloads', title: 'Downloads', desc: 'Raw data downloads' },
  { href: '/dashboard', title: 'Dashboard', desc: 'Overview of all data' },
]

export default function SearchClient() {
  const [query, setQuery] = useState('')
  const [conflicts, setConflicts] = useState<any[]>([])
  const [presidents, setPresidents] = useState<any[]>([])

  useEffect(() => {
    fetch('/data/conflicts.json').then(r => r.json()).then(setConflicts)
    fetch('/data/presidents.json').then(r => r.json()).then(setPresidents).catch(() => {})
  }, [])

  const q = query.toLowerCase().trim()

  const results = useMemo(() => {
    if (!q) return { conflicts: [], articles: [], pages: [], presidents: [] }

    const matchedConflicts = conflicts.filter(c =>
      c.name.toLowerCase().includes(q) ||
      (c.shortName || '').toLowerCase().includes(q) ||
      c.era.toLowerCase().includes(q) ||
      (c.countries || []).some((co: string) => co.toLowerCase().includes(q)) ||
      c.region.toLowerCase().includes(q) ||
      (c.description || '').toLowerCase().includes(q)
    )

    const matchedArticles = ANALYSIS_ARTICLES.filter(a =>
      a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q) || a.slug.includes(q)
    )

    const matchedPages = PAGES.filter(p =>
      p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    )

    const matchedPresidents = presidents.filter(p =>
      p.name.toLowerCase().includes(q)
    )

    return { conflicts: matchedConflicts, articles: matchedArticles, pages: matchedPages, presidents: matchedPresidents }
  }, [q, conflicts, presidents])

  const totalResults = results.conflicts.length + results.articles.length + results.pages.length + results.presidents.length

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search conflicts, analysis, presidents, tools..."
        className="w-full p-4 border rounded-lg text-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {query && <p className="text-muted mb-4">{totalResults} result{totalResults !== 1 ? 's' : ''}</p>}

      {!query && (
        <div className="space-y-8">
          <p className="text-muted">Search across {conflicts.length} conflicts, 167 country profiles, 28 analysis articles, {presidents.length} presidents, 1,500+ military bases, 52 weapons systems, 35 arms buyer countries, and more</p>
          <div>
            <h2 className="font-semibold text-lg mb-3">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {['Vietnam', 'Iraq', 'Afghanistan', 'World War II', 'Korea', 'War on Terror', 'Iran', 'drone', 'CIA'].map(term => (
                <button key={term} onClick={() => setQuery(term)} className="bg-stone-100 hover:bg-stone-200 rounded-full px-4 py-2 text-sm transition">{term}</button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-3">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'All Conflicts', href: '/conflicts' },
                { label: 'Analysis', href: '/analysis' },
                { label: 'Presidents', href: '/presidents' },
                { label: 'Tools', href: '/tools' },
                { label: 'Spending', href: '/spending' },
                { label: 'Casualties', href: '/casualties' },
                { label: 'Countries', href: '/countries' },
                { label: 'Dashboard', href: '/dashboard' },
              ].map(c => (
                <Link key={c.href} href={c.href} className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition font-medium">{c.label}</Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Conflicts */}
      {results.conflicts.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Conflicts ({results.conflicts.length})</h2>
          <div className="space-y-3">
            {results.conflicts.map(c => (
              <Link key={c.id} href={`/conflicts/${c.id}`} className="block bg-white rounded-lg border p-4 hover:shadow-md transition">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{c.shortName || c.name}</h3>
                    <p className="text-muted text-sm">{c.startYear}–{c.endYear || 'Present'} · {c.era} · {c.region}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{fmtMoney(c.costInflationAdjusted)}</p>
                    <p className="text-muted text-sm">{c.usCasualties?.deaths ? fmt(c.usCasualties.deaths) + ' deaths' : c.type?.replace(/_/g, ' ')}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Presidents */}
      {results.presidents.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Presidents ({results.presidents.length})</h2>
          <div className="space-y-3">
            {results.presidents.map((p: any) => (
              <Link key={p.name} href="/presidents" className="block bg-white rounded-lg border p-4 hover:shadow-md transition">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-muted text-sm">{p.conflicts.join(', ')} · {fmtMoney(p.totalCost)}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Analysis */}
      {results.articles.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Analysis ({results.articles.length})</h2>
          <div className="space-y-3">
            {results.articles.map(a => (
              <Link key={a.slug} href={`/analysis/${a.slug}`} className="block bg-white rounded-lg border p-4 hover:shadow-md transition">
                <h3 className="font-semibold">{a.title}</h3>
                <p className="text-muted text-sm">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Pages */}
      {results.pages.length > 0 && (
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">Pages ({results.pages.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {results.pages.map(p => (
              <Link key={p.href} href={p.href} className="bg-white rounded-lg border p-4 hover:shadow-md transition">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-muted text-sm">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
