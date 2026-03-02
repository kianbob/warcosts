// @ts-nocheck
'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'

interface OpinionShift {
  war: string
  preMedia: string
  postMedia: string
  mediaCampaign: string
  timeToWar: string
}

export function MediaWarCharts({ data }: { data: OpinionShift[] }) {
  const chartData = data.map(d => ({
    name: d.war.length > 20 ? d.war.slice(0, 18) + '…' : d.war,
    before: parseInt(d.preMedia.replace(/[^0-9]/g, '')),
    after: parseInt(d.postMedia.replace(/[^0-9]/g, '')),
  }))

  return (
    <div className="bg-stone-800 rounded-lg p-6 my-8">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
        Public Opinion: Before vs. After Media Campaign
      </h3>
      <p className="text-stone-400 text-sm mb-4">
        Every war shows the same pattern: media saturation shifts public opinion from opposition to support.
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" domain={[0, 100]} stroke="#a8a29e" tickFormatter={(v: number) => `${v}%`} tick={{ fontSize: 12 }} />
          <YAxis dataKey="name" type="category" width={130} stroke="#a8a29e" tick={{ fontSize: 11 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1c1917', border: '1px solid #44403c', color: '#fff' }}
            formatter={(v: number) => [`${v}%`]}
          />
          <Legend />
          <Bar dataKey="before" name="Before Media Campaign" fill="#525252" />
          <Bar dataKey="after" name="After Media Campaign" fill="#991b1b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
