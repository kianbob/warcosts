// @ts-nocheck
'use client'

export function ConflictStatsGrid({ computed }: { computed: any }) {
  if (!computed) return null

  // Only show civilian:military ratio here — costPerDay and costPerUSdeath
  // are already displayed in the secondary stats row above.
  if (computed.civilianToMilitaryRatio == null) return null

  return (
    <div className="grid grid-cols-1 gap-4 my-6 max-w-sm mx-auto">
      <div className="bg-stone-50 rounded-lg p-4 border text-center">
        <p className="text-xl font-bold text-red-800 font-[family-name:var(--font-heading)]">
          {computed.civilianToMilitaryRatio.toFixed(1)}:1
        </p>
        <p className="text-xs text-stone-500 mt-1">Civilian:Military Death Ratio</p>
      </div>
    </div>
  )
}
