import Link from 'next/link'

export default function IranWarBanner() {
  return (
    <div className="bg-amber-800 text-white py-2 px-4 text-center text-sm">
      <span className="mr-2">🕊️</span>
      <span className="font-semibold">CEASEFIRE:</span> Iran War Day 40 — 2-Week Pause Announced —
      <Link href="/iran-war-2026" className="underline hover:text-amber-200 ml-1">Live Tracker →</Link>
    </div>
  )
}
