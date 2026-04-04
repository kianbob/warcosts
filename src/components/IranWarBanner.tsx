import Link from 'next/link'

export default function IranWarBanner() {
  return (
    <div className="bg-red-900 text-white py-2 px-4 text-center text-sm">
      <span className="animate-pulse mr-2">●</span>
      <span className="font-semibold">ACTIVE WAR:</span> Iran War Day 35 —
      <Link href="/iran-war-2026" className="underline hover:text-red-200 ml-1">Live Tracker →</Link>
    </div>
  )
}
