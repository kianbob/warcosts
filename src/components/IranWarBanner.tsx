import Link from 'next/link'

export default function IranWarBanner() {
  return (
    <div className="bg-green-800 text-white py-2 px-4 text-center text-sm">
      <span className="mr-2">✅</span>
      <span className="font-semibold">PEACE DEAL SIGNED:</span> Iran War ended June 14, 2026 — 108 days, $42B+ —
      <Link href="/iran-war-2026" className="underline hover:text-green-200 ml-1">Full Record →</Link>
    </div>
  )
}
