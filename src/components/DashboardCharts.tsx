// @ts-nocheck
'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const COLORS = ['#991b1b', '#dc2626', '#ef4444', '#b91c1c', '#7f1d1d', '#f87171', '#450a0a', '#fca5a5', '#78716c', '#a8a29e', '#57534e', '#d6d3d1']

const CustomTooltipStyle = {
  backgroundColor: '#fff',
  border: '1px solid #e7e5e4',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

function fmtDollarB(v: number): string {
  if (v >= 1e12) return `$${(v / 1e12).toFixed(1)}T`
  if (v >= 1e9) return `$${(v / 1e9).toFixed(0)}B`
  if (v >= 1e6) return `$${(v / 1e6).toFixed(0)}M`
  return `$${v.toFixed(0)}`
}

export function SpendingPieChart({ data }: { data: { name: string; cost: number }[] }) {
  if (!data?.length) return null
  return (
    <ResponsiveContainer width="100%" height={450}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={150}
          innerRadius={60}
          dataKey="cost"
          nameKey="name"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          labelLine={{ strokeWidth: 1 }}
          fontSize={11}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={CustomTooltipStyle}
          formatter={(v: number) => [fmtDollarB(v), 'Cost (2023 $)']}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export function WarTimeline({ conflicts }: { conflicts: { name: string; startYear: number; endYear?: number; costInflationAdjusted: number }[] }) {
  if (!conflicts?.length) return null
  const minYear = Math.min(...conflicts.map(c => c.startYear))
  const maxYear = 2026
  const range = maxYear - minYear

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Year markers */}
        <div className="flex justify-between text-xs text-stone-500 mb-2 px-1">
          {[1775, 1800, 1850, 1900, 1950, 2000, 2026].map(y => (
            <span key={y}>{y}</span>
          ))}
        </div>
        <div className="relative bg-stone-100 rounded-lg h-2 mb-4">
          <div className="absolute inset-0 bg-stone-200 rounded-lg" />
        </div>
        <div className="space-y-1.5">
          {conflicts.map((c, i) => {
            const left = ((c.startYear - minYear) / range) * 100
            const width = Math.max(((( c.endYear || 2026) - c.startYear) / range) * 100, 0.5)
            return (
              <div key={i} className="relative h-6 group">
                <div
                  className="absolute h-5 rounded-sm bg-red-700 hover:bg-red-600 transition-colors cursor-pointer flex items-center overflow-hidden"
                  style={{ left: `${left}%`, width: `${width}%`, minWidth: '4px' }}
                  title={`${c.name}: ${c.startYear}–${c.endYear || 'Present'} (${fmtDollarB(c.costInflationAdjusted)})`}
                >
                  {width > 5 && (
                    <span className="text-white text-[10px] px-1 truncate font-medium">{c.name}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
