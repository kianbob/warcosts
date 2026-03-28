import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '$21,759 Per Second — Iran War Cost Tracker'
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
        <div style={{ display: 'flex', fontSize: 24, color: '#9ca3af', marginBottom: 24, letterSpacing: 3, textTransform: 'uppercase' as const }}>
          Iran War 2026 — Cost Per Second
        </div>
        <div style={{ display: 'flex', fontSize: 96, fontWeight: 800, color: '#dc2626', marginBottom: 16 }}>
          $21,759
        </div>
        <div style={{ display: 'flex', fontSize: 48, color: '#ffffff', fontWeight: 700, marginBottom: 40 }}>
          Per Second
        </div>
        <div style={{ display: 'flex', gap: 60 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 42, fontWeight: 700, color: '#dc2626' }}>$1.88B</div>
            <div style={{ fontSize: 20, color: '#9ca3af' }}>Per Day</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 42, fontWeight: 700, color: '#dc2626' }}>$2.5M</div>
            <div style={{ fontSize: 20, color: '#9ca3af' }}>Per Tomahawk</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 42, fontWeight: 700, color: '#dc2626' }}>$36M</div>
            <div style={{ fontSize: 20, color: '#9ca3af' }}>Per SM-3 Interceptor</div>
          </div>
        </div>
        <div style={{ display: 'flex', position: 'absolute', bottom: 40, fontSize: 22, color: '#6b7280' }}>
          warcosts.org — Pentagon confirmed. Every dollar tracked.
        </div>
      </div>
    ),
    { ...size }
  )
}
