interface CardProps {
  heading: string
  centerHeading?: boolean
  emoji?: string
  isMain?: boolean
  minPadding?: boolean
  noSpacing?: boolean
  children?: React.ReactNode
}

export const Card = ({
  heading,
  centerHeading = false,
  emoji,
  isMain = false,
  minPadding = false,
  noSpacing = false,
  children,
}: CardProps) => (
  <div
    className={`${
      isMain && 'justify-center text-center'
    } ${noSpacing || isMain ? 'space-y-0' : 'space-y-2'} ${
      minPadding ? 'px-2 py-4' : 'p-4'
    } text-light-400 dark:text-dark-400 bg-light-100 dark:bg-dark-100 border-light-300 dark:border-dark-300 flex h-full flex-col rounded-2xl border-1 shadow-xs sm:shadow-none dark:shadow-none`}
  >
    <h4
      className={`${emoji ? 'self-start' : 'self-center'} text-lg font-medium capitalize sm:font-semibold ${isMain || centerHeading ? 'sm:self-center' : 'sm:self-start'}`}
    >
      {emoji && <span className="mr-[6px]">{emoji}</span>}
      {heading}
    </h4>
    {children && (
      <div
        className={`flex flex-col justify-between ${isMain ? 'h-auto' : 'h-full'}`}
      >
        {children}
      </div>
    )}
  </div>
)
