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
        <div style={{ fontSize: 20, color: '#a8a29e', letterSpacing: '4px', marginBottom: 12 }}>THE DATA THEY HIDE</div>
        <div style={{ fontSize: 56, fontWeight: 900, color: '#ffffff', marginBottom: 8 }}>The Price of a Life</div>
        <div style={{ width: 500, height: 3, background: '#dc2626', marginBottom: 40 }} />
        <div style={{ display: 'flex', gap: 60, marginBottom: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 18, color: '#a8a29e' }}>War on Terror</div>
            <div style={{ fontSize: 56, fontWeight: 900, color: '#dc2626' }}>$8.6M</div>
            <div style={{ fontSize: 14, color: '#78716c' }}>per enemy combatant killed</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 18, color: '#a8a29e' }}>Vietnam War</div>
            <div style={{ fontSize: 56, fontWeight: 900, color: '#dc2626' }}>$400K</div>
            <div style={{ fontSize: 14, color: '#78716c' }}>per enemy combatant killed</div>
          </div>
        </div>
        <div style={{ fontSize: 18, color: '#fbbf24', fontWeight: 600 }}>War gets more expensive. Not more effective.</div>
        <div style={{ fontSize: 14, color: '#78716c', marginTop: 20 }}>warcosts.org/cost-per-kill</div>
      </div>
    ),
    { ...size }
  )
}
