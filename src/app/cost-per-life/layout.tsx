import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Price of a Life — Cost Per Death by Conflict | WarCosts',
  description: 'How much does America spend for each life lost in war? A single death in Afghanistan cost $935 million. In WWII, it was $12 million.',
  openGraph: {
    title: 'The Price of a Life — Cost Per Death by Conflict | WarCosts',
    description: 'How much does America spend for each life lost in war?',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
