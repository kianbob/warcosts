import IranTickerEmbed from './IranTickerEmbed'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iran War Cost Ticker — Live Embed',
  description: 'Live ticking counter of the estimated cost of the 2026 Iran war.',
}

export default function IranCostTickerPage() {
  return <IranTickerEmbed />
}
