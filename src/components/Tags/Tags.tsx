interface TagsProps {
  labels: string[]
}

export const Tags = ({ labels }: TagsProps) => (
  <div className="flex flex-wrap gap-2">
    {labels.map((label) => (
      <span key={label} className="rounded-2xl border-1 border-black px-3">
        {label}
      </span>
    ))}
  </div>
)
