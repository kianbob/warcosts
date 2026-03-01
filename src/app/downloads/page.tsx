import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Downloads — Raw Data Files',
  description: 'Download raw WarCosts data files: conflicts, military spending, foreign aid, overseas presence, arms sales, and opportunity costs.',
}

const files = [
  { name: 'conflicts.json', desc: '36 US conflicts with costs, casualties, outcomes, and analysis — including 8 new modern conflicts (Kosovo, Somalia ongoing, Ukraine support, Red Sea/Houthis, Iran 2026, Niger/Sahel, ISIS, post-9/11 global)', size: '~25KB' },
  { name: 'military-spending.json', desc: 'Annual US military spending 1940–2024 with % GDP', size: '~3KB' },
  { name: 'foreign-aid.json', desc: 'Top foreign aid recipients since 2001', size: '~2KB' },
  { name: 'overseas-presence.json', desc: 'US military bases and troop deployments by country', size: '~2KB' },
  { name: 'arms-sales.json', desc: 'Top US arms sales buyers', size: '~1KB' },
  { name: 'opportunity-costs.json', desc: 'What $8 trillion could have bought instead', size: '~2KB' },
  { name: 'stats.json', desc: 'Aggregate statistics', size: '~1KB' },
]

export default function DownloadsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Downloads' }]} />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-4">Downloads</h1>
      <p className="text-muted mb-8">All WarCosts data is freely available. We ask for attribution if used in published work.</p>

      <div className="space-y-4">
        {files.map(f => (
          <a key={f.name} href={`/data/${f.name}`} download className="block bg-white rounded-lg border p-5 hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-primary">{f.name}</p>
                <p className="text-muted text-sm">{f.desc}</p>
              </div>
              <div className="text-right">
                <p className="text-muted text-sm">{f.size}</p>
                <p className="text-primary text-sm font-semibold">Download ↓</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
