import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import BackToTop from '@/components/BackToTop'
import baseIndex from '../../../../public/data/base-index.json'
import baseStats from '../../../../public/data/base-stats.json'
import DirectoryClient from './DirectoryClient'

export const metadata: Metadata = {
  title: 'Complete U.S. Military Base Directory — 1,518 Installations Worldwide | WarCosts',
  description: 'Browse every known U.S. military installation worldwide. 824 domestic bases and 694 overseas installations across 113 countries. Search, filter, and explore.',
  alternates: { canonical: 'https://www.warcosts.org/bases/directory' },
}

export default function BasesDirectoryPage() {
  const stats = baseStats as any
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Bases', href: '/bases' }, { label: 'Directory' }]} />
      <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] text-red-800 mb-4">
        U.S. Military Base Directory
      </h1>
      <p className="text-lg text-stone-600 mb-8 max-w-3xl">
        A complete searchable directory of {stats.totalBases.toLocaleString()} known U.S. military installations
        worldwide — {stats.domesticBases.toLocaleString()} domestic bases and {stats.overseasBases.toLocaleString()} overseas
        bases across {stats.countries} countries.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Installations', value: stats.totalBases.toLocaleString() },
          { label: 'Domestic Bases', value: stats.domesticBases.toLocaleString() },
          { label: 'Overseas Bases', value: stats.overseasBases.toLocaleString() },
          { label: 'Countries', value: stats.countries },
        ].map(s => (
          <div key={s.label} className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-800">{s.value}</div>
            <div className="text-sm text-stone-500">{s.label}</div>
          </div>
        ))}
      </div>

      <DirectoryClient bases={baseIndex as any[]} />

      <div className="mt-12 prose max-w-none">
        <h2>About This Data</h2>
        <p>
          Domestic base data comes from the Pentagon&apos;s FY2024 Base Structure Report via the National Transportation
          Atlas Database (NTAD). Overseas base data is compiled from David Vine&apos;s comprehensive research at
          American University, cross-referenced with the Pentagon&apos;s Base Structure Report.
        </p>
        <p>
          The U.S. maintains the largest network of military bases in world history. No other nation has more than
          a handful of overseas military installations. This global footprint costs taxpayers hundreds of billions
          annually and enables the projection of military force to every corner of the planet.
        </p>
        <h3>Related Pages</h3>
        <ul>
          <li><Link href="/bases">Overseas Bases Overview</Link></li>
          <li><Link href="/bases/countries">Bases by Country</Link></li>
          <li><Link href="/bases/states">Bases by State</Link></li>
          <li><Link href="/analysis/empire-of-bases">Analysis: Empire of Bases</Link></li>
          <li><Link href="/spending">Military Spending</Link></li>
        </ul>
      </div>

      <ShareButtons title="U.S. Military Base Directory" />
      <BackToTop />
    </main>
  )
}
