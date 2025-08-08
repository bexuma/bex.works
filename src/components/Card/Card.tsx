interface CardProps {
  heading: string
  centerHeading?: boolean
  emoji?: string
  isMain?: boolean
  noSpacing?: boolean
  children?: React.ReactNode
}

export const Card = ({
  heading,
  centerHeading = false,
  emoji,
  isMain = false,
  noSpacing = false,
  children,
}: CardProps) => (
  <div
    className={`text-light-400 dark:text-dark-400 flex h-full flex-col ${
      isMain && 'justify-center text-center'
    } ${noSpacing || isMain ? 'space-y-0' : 'space-y-2'} bg-light-100 dark:bg-dark-100 border-light-300 dark:border-dark-300 rounded-2xl border-1 p-4`}
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
