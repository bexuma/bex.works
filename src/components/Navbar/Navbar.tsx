import Link from 'next/link'
import { NewTabIcon } from '../NewTabIcon'
import ThemeToggle from './ThemeToggle'

export const Navbar = () => (
  <nav className="bg-light-100 dark:bg-dark-100 border-light-300 dark:border-dark-300 sticky top-0 flex border-b-1 px-4 font-sans">
    <div className="relative container mx-auto flex h-14 flex-row items-center justify-between sm:h-16">
      <ThemeToggle />
      <Link
        href="/"
        className="text-light-400 dark:text-dark-400 absolute left-1/2 -translate-x-1/2 p-2 text-lg font-semibold"
      >
        bex!
      </Link>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        className="text-light-600 dark:text-dark-400 inline-flex items-center gap-1 text-sm underline sm:text-base"
        href="/resume.pdf"
      >
        Resume
        <NewTabIcon />
      </Link>
    </div>
  </nav>
)
