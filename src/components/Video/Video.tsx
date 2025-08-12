interface VideoProps {
  fileName: string
  autoHeight?: boolean
}

export const Video = ({ fileName, autoHeight = false }: VideoProps) => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className={`border-light-300 dark:border-dark-300 w-auto overflow-hidden rounded-lg border sm:min-h-0`}
    style={{
      height: autoHeight ? 'auto' : '100%',
      display: 'block',
      maxHeight: '100%',
      objectFit: 'cover',
    }}
  >
    <source src={`/${fileName}.webm`} type="video/webm" />
    <source src={`/${fileName}.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)
