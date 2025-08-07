import Link from 'next/link'
import { NewTabIcon } from '../NewTabIcon'

export const Navbar = () => (
  <nav className="sticky top-0 flex bg-white px-4 font-sans shadow-sm">
    <div className="container mx-auto flex h-16 flex-row items-center justify-between">
      <Link href="/" className="ml-[-16px] p-4 font-bold">
        Bex!
      </Link>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        className="inline-flex items-center gap-1 underline"
        href="/resume.pdf"
      >
        Resume
        <NewTabIcon />
      </Link>
    </div>
  </nav>
)
