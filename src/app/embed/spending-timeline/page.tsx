import { loadData } from '@/lib/server-utils'
import SpendingTimelineChart from './SpendingTimelineChart'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'US Military Spending Timeline — Embeddable Chart',
  description: 'Interactive chart of US military spending over time, inflation-adjusted.',
}

export default function SpendingTimelinePage() {
  const data = loadData('yearly-spending.json')
  return <SpendingTimelineChart data={data} />
}
