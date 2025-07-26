interface CardProps {
  heading: string
  emoji: string
  children: React.ReactNode
}

export const Card = ({ heading, emoji, children }: CardProps) => (
  <div className="h-full space-y-2 rounded-2xl border-1 border-b-gray-500 bg-amber-50 p-4">
    <h4 className="text-lg font-semibold">
      <span className="mr-[6px]">{emoji}</span>
      {heading}
    </h4>
    <div className="text-md space-y-1">{children}</div>
  </div>
)
