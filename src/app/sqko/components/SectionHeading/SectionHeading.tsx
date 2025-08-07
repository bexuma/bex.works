interface SectionHeading {
  heading: string
  isMedium?: boolean
}

export const SectionHeading = ({
  heading,
  isMedium = false,
}: SectionHeading) => (
  <div
    className={`${isMedium ? 'my-2' : 'my-6'} flex items-center gap-2 sm:gap-4`}
  >
    <div className="flex-grow border-t border-gray-300" />
    <h2 className={`text-center ${isMedium ? 'text-lg' : 'text-2xl'}`}>
      {heading}
    </h2>
    <div className="flex-grow border-t border-gray-300" />
  </div>
)
