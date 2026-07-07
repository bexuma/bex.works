import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: '#1c2536',
        color: '#c9dae8',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', fontSize: 56 }}>🌟</div>
      <div
        style={{
          display: 'flex',
          marginTop: 24,
          fontSize: 72,
          fontWeight: 700,
          color: '#e8f0f7',
        }}
      >
        Bexultan Myrzatay
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 12,
          fontSize: 36,
          color: '#8fdc8f',
        }}
      >
        Product Manager
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 32,
          fontSize: 28,
          maxWidth: 900,
          lineHeight: 1.5,
        }}
      >
        Product Manager with an engineering foundation and founder experience.
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 48,
          fontSize: 28,
          color: '#7f8d98',
        }}
      >
        bex.works
      </div>
    </div>,
    { ...size },
  )
}
