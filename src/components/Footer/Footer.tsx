import { getLatestCommit } from '@/lib/github'

export const Footer = async () => {
  const data = await getLatestCommit()

  if (!data) {
    return (
      <footer className="px-4">
        <div className="container mx-auto flex h-14 items-center justify-center sm:h-16">
          <span className="text-light-border dark:text-dark-border text-sm">
            © 2025 Bexultan Myrzatay
          </span>
        </div>
      </footer>
    )
  }

  const { htmlUrl, shaShort, additions, deletions } = data

  return (
    <footer className="px-4">
      <div className="text-light-border dark:text-dark-border container mx-auto flex h-14 items-center text-sm sm:h-16">
        <div className="basis-8/12 md:ml-auto md:basis-4/12 md:text-center">
          <span>© 2025 Bexultan Myrzatay</span>
        </div>
        <div className="basis-4/12 text-right md:basis-4/12">
          <a
            href={htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="after:bg-light-border dark:after:bg-dark-border relative inline-flex items-center font-mono after:absolute after:right-0 after:bottom-[3px] after:left-0 after:h-[1px] after:opacity-0 hover:cursor-pointer hover:after:opacity-100"
          >
            <span>{shaShort}</span>
            <span className="dark:text-dark-green text-light-green mr-0.5 ml-1 font-mono text-xs font-medium">
              +{additions}
            </span>{' '}
            <span className="dark:text-dark-red text-light-red font-mono text-xs font-medium">
              -{deletions}
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
