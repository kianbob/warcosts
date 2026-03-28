import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Strait of Hormuz: CLOSED — 20% of Global Oil Blocked'
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
        <div style={{ display: 'flex', fontSize: 24, color: '#dc2626', marginBottom: 24, letterSpacing: 3, textTransform: 'uppercase' as const, fontWeight: 700 }}>
          ⚠ Global Energy Crisis
        </div>
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, color: '#ffffff', marginBottom: 8 }}>
          Strait of Hormuz
        </div>
        <div style={{ display: 'flex', fontSize: 80, fontWeight: 800, color: '#dc2626', marginBottom: 32 }}>
          CLOSED
        </div>
        <div style={{ display: 'flex', gap: 60 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: '#dc2626' }}>20%</div>
            <div style={{ fontSize: 20, color: '#9ca3af' }}>of Global Oil Blocked</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: '#dc2626' }}>$108</div>
            <div style={{ fontSize: 20, color: '#9ca3af' }}>Oil per Barrel</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: '#dc2626' }}>21 mi</div>
            <div style={{ fontSize: 20, color: '#9ca3af' }}>Wide — No Detour</div>
          </div>
        </div>
        <div style={{ display: 'flex', position: 'absolute', bottom: 40, fontSize: 24, color: '#6b7280' }}>
          warcosts.org
        </div>
      </div>
    ),
    { ...size }
  )
}
