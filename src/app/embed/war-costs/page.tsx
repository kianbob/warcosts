import { loadData } from '@/lib/server-utils'
import WarCostsChart from './WarCostsChart'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Costliest US Wars — Embeddable Chart',
  description: 'Horizontal bar chart of the top 10 most expensive US wars, inflation-adjusted.',
}

interface Conflict {
  name: string
  shortName?: string
  costInflationAdjusted: number | null
}

export default function WarCostsPage() {
  const conflicts: Conflict[] = loadData('conflicts.json')
  const top10 = conflicts
    .filter((c) => c.costInflationAdjusted && c.costInflationAdjusted > 0)
    .sort((a, b) => (b.costInflationAdjusted ?? 0) - (a.costInflationAdjusted ?? 0))
    .slice(0, 10)
    .map((c) => ({ name: c.shortName || c.name, cost: c.costInflationAdjusted! }))

  return <WarCostsChart data={top10} />
}
