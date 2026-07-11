import Link from 'next/link'

export default function IranWarBanner() {
  return (
    <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🕊️</span>
          <div>
            <span className="font-bold text-lg">PEACE DEAL SIGNED — June 14, 2026</span>
            <p className="text-green-200 text-sm">108 days of conflict. $42B+ spent. 15 US KIA. Thousands of lives lost. It&apos;s over.</p>
          </div>
        </div>
        <div className="flex gap-3 text-sm">
          <Link href="/analysis/true-cost-iran-peace-deal" className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded font-semibold transition">What It Cost →</Link>
          <Link href="/iran-war-2026" className="border border-green-400 hover:bg-green-600 px-4 py-2 rounded transition">Full Timeline →</Link>
          <Link href="/what-did-the-iran-war-cost" className="border border-green-400 hover:bg-green-600 px-4 py-2 rounded transition">Final Accounting →</Link>
        </div>
      </div>
    </div>
  )
}
