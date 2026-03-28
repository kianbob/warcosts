import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Iran War 2026 — Day 28 Live Tracker'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0c0f1a 0%, #1a1e2e 100%)',
          padding: '60px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ display: 'flex', width: 16, height: 16, borderRadius: '50%', background: '#dc2626' }} />
          <div style={{ fontSize: 24, color: '#dc2626', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' as const }}>
            ACTIVE WAR
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 800, color: '#ffffff', marginBottom: 16 }}>
          Iran War 2026 — Day 28
        </div>
        <div style={{ display: 'flex', fontSize: 56, fontWeight: 700, color: '#dc2626', marginBottom: 32 }}>
          ~$50 Billion+ and Counting
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#d1d5db', marginBottom: 40 }}>
          15 US Dead • 3,300+ Iranian Dead • Oil $108/barrel
        </div>
        <div style={{ display: 'flex', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 700, color: '#dc2626' }}>10,000+</div>
            <div style={{ fontSize: 18, color: '#9ca3af' }}>Targets Struck</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 700, color: '#dc2626' }}>1,110+</div>
            <div style={{ fontSize: 18, color: '#9ca3af' }}>Killed in Lebanon</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 700, color: '#dc2626' }}>$200B</div>
            <div style={{ fontSize: 18, color: '#9ca3af' }}>Pentagon Demands</div>
          </div>
        </div>
        <div style={{ display: 'flex', position: 'absolute', bottom: 40, fontSize: 24, color: '#6b7280' }}>
          warcosts.org — Live War Tracking
        </div>
      </div>
    ),
    { ...size }
  )
}
