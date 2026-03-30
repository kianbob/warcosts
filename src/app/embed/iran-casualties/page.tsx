import IranCasualtiesEmbed from './IranCasualtiesEmbed'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iran War Casualties — Live Counter',
  description: 'Live ticking counter of estimated casualties in the 2026 Iran war.',
}

export default function IranCasualtiesPage() {
  return <IranCasualtiesEmbed />
}
