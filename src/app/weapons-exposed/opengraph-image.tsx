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
        <div style={{ fontSize: 20, color: '#a8a29e', letterSpacing: '4px', marginBottom: 12 }}>WEAPONS DATABASE</div>
        <div style={{ fontSize: 56, fontWeight: 900, color: '#ffffff', marginBottom: 8 }}>Every Weapon. Every Dollar.</div>
        <div style={{ width: 500, height: 3, background: '#dc2626', marginBottom: 32 }} />
        <div style={{ fontSize: 72, fontWeight: 900, color: '#dc2626', marginBottom: 8 }}>$34.8 Billion</div>
        <div style={{ fontSize: 22, color: '#a8a29e', marginBottom: 32 }}>in weapons fired during the War on Terror</div>
        <div style={{ display: 'flex', gap: 48 }}>
          {[
            { label: 'Tomahawks', count: '2,500+' },
            { label: 'JDAM Bombs', count: '30,000+' },
            { label: 'Drone Strikes', count: '14,000+' },
          ].map((w) => (
            <div key={w.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#fbbf24' }}>{w.count}</div>
              <div style={{ fontSize: 14, color: '#78716c' }}>{w.label}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 14, color: '#78716c', marginTop: 24 }}>warcosts.org/weapons-exposed</div>
      </div>
    ),
    { ...size }
  )
}
