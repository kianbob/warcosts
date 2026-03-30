import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'War Clock — Real-Time US Military Spending | WarCosts',
  description: 'Watch US military spending tick up in real time. $28,095 per second. $101M per hour. $2.4B per day.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
