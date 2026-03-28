import { loadData } from '@/lib/server-utils'
import DeathsByWarChart from './DeathsByWarChart'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'US Deaths by War — Embeddable Chart',
  description: 'Horizontal bar chart of US military deaths by war.',
}

interface Conflict {
  name: string
  shortName?: string
  usCasualties: { deaths: number } | null
}

export default function DeathsByWarPage() {
  const conflicts: Conflict[] = loadData('conflicts.json')
  const top10 = conflicts
    .filter((c) => c.usCasualties?.deaths && c.usCasualties.deaths > 0)
    .sort((a, b) => (b.usCasualties?.deaths ?? 0) - (a.usCasualties?.deaths ?? 0))
    .slice(0, 10)
    .map((c) => ({ name: c.shortName || c.name, deaths: c.usCasualties!.deaths }))

  return <DeathsByWarChart data={top10} />
}
