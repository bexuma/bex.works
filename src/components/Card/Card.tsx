interface CardProps {
  heading: string
  centerHeading?: boolean
  emoji?: string
  isMain?: boolean
  children?: React.ReactNode
}

export const Card = ({
  heading,
  centerHeading = false,
  emoji,
  isMain = false,
  children,
}: CardProps) => (
  <div
    className={`flex h-full flex-col ${
      isMain ? 'justify-center text-center' : 'space-y-2'
    } rounded-2xl border-1 border-b-gray-500 bg-amber-50 p-4`}
  >
    <h4
      className={`${emoji ? 'self-start' : 'self-center'} text-lg font-semibold capitalize ${isMain || centerHeading ? 'sm:self-center' : 'sm:self-start'}`}
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
