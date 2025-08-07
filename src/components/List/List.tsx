import { ListItemType } from '.'

export const List = ({ list }: { list: ListItemType[] | string[] }) => {
  if (list.length === 0) return null

  return (
    <ul className="space-y-1">
      {list.map((item, index) => (
        <li key={index} className="before:mr-1 before:content-['–']">
          {typeof item === 'string' ? (
            item
          ) : (
            <>
              <span className="font-semibold">{item.heading}</span>: {item.body}
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
