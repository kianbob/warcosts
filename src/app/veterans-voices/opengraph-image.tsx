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
        <div style={{ fontSize: 64, fontWeight: 700, textAlign: 'center', maxWidth: 900, lineHeight: 1.2 }}>Veterans&#39; Voices</div>
        <div style={{ fontSize: 28, color: '#a8a29e', marginTop: 30, textAlign: 'center' }}>The people who fought speak</div>
        <div style={{ display: 'flex', gap: 40, marginTop: 40 }}>
          <div style={{ width: 60, height: 2, background: '#dc2626' }}></div>
          <div style={{ width: 60, height: 2, background: '#dc2626' }}></div>
          <div style={{ width: 60, height: 2, background: '#dc2626' }}></div>
        </div>
      </div>
    ),
    { ...size }
  )
}
