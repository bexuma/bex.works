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
    className={`${autoHeight ? 'h-auto' : 'h-full'} border-light-300 dark:border-dark-300 w-auto overflow-hidden rounded-lg border`}
  >
    <source src={`/${fileName}.webm`} type="video/webm" />
    <source src={`/${fileName}.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)
