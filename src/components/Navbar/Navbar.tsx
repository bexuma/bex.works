import Link from 'next/link'
import { NewTabIcon } from '../NewTabIcon'

export const Navbar = () => (
  <nav className="bg-light-100 dark:bg-dark-100 sticky top-0 flex px-4 font-sans shadow-sm">
    <div className="container mx-auto flex h-16 flex-row items-center justify-between">
      <Link
        href="/"
        className="text-light-400 dark:text-dark-400 ml-[-16px] p-4 font-bold"
      >
        Bex!
      </Link>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        className="text-light-400 dark:text-dark-400 inline-flex items-center gap-1 underline"
        href="/resume.pdf"
      >
        Resume
        <NewTabIcon />
      </Link>
    </div>
  </nav>
)
