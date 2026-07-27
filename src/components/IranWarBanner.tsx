import Link from 'next/link'

export default function IranWarBanner() {
  return (
    <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔴</span>
          <div>
            <span className="font-bold text-lg">IRAN WAR ONGOING — Day 150+</span>
            <p className="text-red-200 text-sm">Ceasefire collapsed July 8. $113B+ spent. 20+ US KIA. 8,000+ killed. No congressional vote. No end in sight.</p>
          </div>
        </div>
        <div className="flex gap-3 text-sm">
          <Link href="/analysis/iran-2026" className="bg-red-700 hover:bg-red-600 px-4 py-2 rounded font-semibold transition">Full Coverage →</Link>
          <Link href="/iran-war-2026" className="border border-red-400 hover:bg-red-700 px-4 py-2 rounded transition">Timeline →</Link>
          <Link href="/analysis/iran-war-113b-cost" className="border border-red-400 hover:bg-red-700 px-4 py-2 rounded transition">Cost Tracker →</Link>
        </div>
      </div>
    </div>
  )
}
