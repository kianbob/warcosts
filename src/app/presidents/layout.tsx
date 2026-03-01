import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Presidents at War — Who Spent the Most? | WarCosts',
  description: 'Which US presidents started the most wars and spent the most on conflict? War scorecard for every commander-in-chief from Washington to Biden.',
  openGraph: {
    title: 'Presidents at War — Who Spent the Most? | WarCosts',
    description: 'Which US presidents started the most wars and spent the most on conflict?',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
