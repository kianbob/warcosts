import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Presidents at War — Every Commander-in-Chief\'s Conflicts | WarCosts',
  description: 'Every US president ranked by wars fought, money spent, and lives lost. From Washington to today.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
