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
        <div style={{ fontSize: 20, color: '#a8a29e', letterSpacing: '4px', marginBottom: 12 }}>EXPOSED</div>
        <div style={{ fontSize: 56, fontWeight: 900, color: '#ffffff', marginBottom: 8 }}>War Is Good Business</div>
        <div style={{ width: 500, height: 3, background: '#dc2626', marginBottom: 32 }} />
        <div style={{ display: 'flex', gap: 48, marginBottom: 32 }}>
          {[
            { company: 'Lockheed Martin', gain: '+1,236%' },
            { company: 'Raytheon', gain: '+894%' },
            { company: 'Northrop Grumman', gain: '+1,042%' },
          ].map((c) => (
            <div key={c.company} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 16, color: '#a8a29e' }}>{c.company}</div>
              <div style={{ fontSize: 40, fontWeight: 800, color: '#22c55e' }}>{c.gain}</div>
              <div style={{ fontSize: 12, color: '#78716c' }}>stock since 9/11</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 18, color: '#dc2626', fontWeight: 600 }}>They profit. You pay. Soldiers die.</div>
        <div style={{ fontSize: 14, color: '#78716c', marginTop: 16 }}>warcosts.org/war-profiteers</div>
      </div>
    ),
    { ...size }
  )
}
