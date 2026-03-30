import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: '100%',
        background: 'linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)',
        fontFamily: 'serif', color: 'white', padding: 60,
      }}>
        <div style={{ fontSize: 28, color: '#dc2626', fontWeight: 700, marginBottom: 20 }}>warcosts.org</div>
        <div style={{ fontSize: 56, fontWeight: 700, textAlign: 'center', maxWidth: 900, lineHeight: 1.2 }}>Congress &amp; War Powers</div>
        <div style={{ display: 'flex', gap: 60, marginTop: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: '#dc2626' }}>5</div>
            <div style={{ fontSize: 20, color: '#a8a29e' }}>Declared Wars</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: '#dc2626' }}>469+</div>
            <div style={{ fontSize: 20, color: '#a8a29e' }}>Interventions</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: '#dc2626' }}>0</div>
            <div style={{ fontSize: 20, color: '#a8a29e' }}>Authorization for Iran</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
