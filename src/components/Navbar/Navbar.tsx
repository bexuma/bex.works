import Link from 'next/link'
import { ResumeMenu } from '../ResumeMenu'
import ThemeToggle from './ThemeToggle'

export const Navbar = () => (
  <nav className="bg-light-100 dark:bg-dark-100 border-light-300 dark:border-dark-300 sticky top-0 z-10 flex border-b-1 px-4 shadow-xs sm:shadow-none dark:shadow-none">
    <div className="relative container mx-auto flex h-14 flex-row items-center justify-between sm:h-16">
      <ThemeToggle />
      <Link
        href="/"
        className="absolute left-1/2 z-20 flex -translate-x-1/2 cursor-pointer flex-col items-center justify-center gap-1 px-5 py-1 font-semibold sm:gap-1.5"
      >
        <span className="text-light-text dark:text-dark-text text-lg leading-none">
          bex!
        </span>
        <span className="text-light-link dark:text-dark-link text-[9px] leading-none uppercase">
          Open to work
        </span>
      </Link>
      <ResumeMenu align="right" triggerClassName="text-sm sm:text-base" />
    </div>
  </nav>
)
