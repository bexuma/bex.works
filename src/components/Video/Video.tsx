interface VideoProps {
  fileName: string
}

export const Video = ({ fileName }: VideoProps) => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="border-light-300 dark:border-dark-300 h-full w-full overflow-hidden rounded-lg border object-contain"
  >
    <source src={`/${fileName}.webm`} type="video/webm" />
    <source src={`/${fileName}.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)
