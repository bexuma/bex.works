interface SectionHeadingProps {
  heading: string
  isMedium?: boolean
}

export const SectionHeading = ({
  heading,
  isMedium = false,
}: SectionHeadingProps) => (
  <div
    className={`${isMedium ? 'my-2' : 'my-4 sm:my-6'} flex items-center gap-2 sm:gap-4`}
  >
    <div className="border-light-300 dark:border-dark-300 flex-grow border-t-2" />
    <h2
      className={`text-light-400 dark:text-dark-400 text-center ${isMedium ? 'text-lg' : 'text-xl font-medium sm:text-2xl'}`}
    >
      {heading}
    </h2>
    <div className="border-light-300 dark:border-dark-300 flex-grow border-t-2" />
  </div>
)
