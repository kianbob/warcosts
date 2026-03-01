import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'War Clock — Real-Time US Military Spending | WarCosts',
  description: 'Watch US military spending tick up in real time. $28,095 every second. $101 million every hour. $2.4 billion every day.',
  openGraph: {
    title: 'War Clock — Real-Time US Military Spending | WarCosts',
    description: 'Watch US military spending tick up in real time. $28,095 every second.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
