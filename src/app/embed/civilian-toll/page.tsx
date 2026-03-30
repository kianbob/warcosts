import CivilianTollEmbed from './CivilianTollEmbed'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Civilian Toll Comparison — Iran vs Iraq vs Afghanistan',
  description: 'Comparing civilian casualties at the same stage across US wars in Iran, Iraq, and Afghanistan.',
}

export default function CivilianTollPage() {
  return <CivilianTollEmbed />
}
