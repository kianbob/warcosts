import WarCostTickerEmbed from './WarCostTickerEmbed'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'War Cost Ticker — Compact Embed',
  description: 'Compact single-line war cost ticker for blog sidebars.',
}

export default function WarCostTickerPage() {
  return <WarCostTickerEmbed />
}
