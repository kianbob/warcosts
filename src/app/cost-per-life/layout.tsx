import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Price of a Life — Cost Per Death by Conflict | WarCosts',
  description: 'How much does each American death "cost" per conflict? From $96K in WWII to $935M in Afghanistan.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
