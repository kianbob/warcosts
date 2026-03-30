import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px dashed #78716c', borderRadius: '16px', padding: '40px 60px', background: 'rgba(255,255,255,0.03)' }}>
          <div style={{ fontSize: 20, color: '#a8a29e', letterSpacing: '4px', marginBottom: 8 }}>YOUR TAXPAYER</div>
          <div style={{ fontSize: 52, fontWeight: 800, color: '#ffffff', marginBottom: 4 }}>WAR RECEIPT</div>
          <div style={{ width: 400, height: 2, background: '#dc2626', marginBottom: 24 }} />
          <div style={{ fontSize: 18, color: '#a8a29e', marginBottom: 8 }}>GRAND TOTAL (ALL US WARS)</div>
          <div style={{ fontSize: 72, fontWeight: 900, color: '#dc2626', marginBottom: 16 }}>$32.1 TRILLION</div>
          <div style={{ display: 'flex', gap: 40, marginBottom: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 14, color: '#78716c' }}>YOUR SHARE</div>
              <div style={{ fontSize: 36, fontWeight: 700, color: '#fbbf24' }}>~$97,000</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 14, color: '#78716c' }}>PER SECOND</div>
              <div style={{ fontSize: 36, fontWeight: 700, color: '#fbbf24' }}>$28,095</div>
            </div>
          </div>
          <div style={{ fontSize: 16, color: '#78716c' }}>warcosts.org/the-receipt</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
