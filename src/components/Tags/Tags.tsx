interface TagsProps {
  labels: string[]
}

export const Tags = ({ labels }: TagsProps) => (
  <div className="flex flex-wrap gap-2">
    {labels.map((label) => (
      <span
        key={label}
        className="border-light-300 dark:border-dark-300 bg-light-200 dark:bg-dark-200 rounded-2xl border-1 px-3"
      >
        {label}
      </span>
    ))}
  </div>
)
