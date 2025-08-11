import { NewTabIcon } from '@/components'
import Link from 'next/link'
import { ContactLinkType } from '../..'

interface ContactLinkProps {
  link: ContactLinkType
}

export const ContactLink = ({ link }: ContactLinkProps) => (
  <div className="basis-1/3 text-center sm:basis-auto sm:text-start">
    {link.isStaticFile ? (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-light-link dark:text-dark-link inline-flex items-center gap-1 underline"
      >
        {link.label}
        <div className="block sm:hidden">
          <NewTabIcon />
        </div>
      </a>
    ) : (
      <Link
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-light-link dark:text-dark-link inline-flex items-center gap-1 underline"
      >
        {link.label}
        <div className="block sm:hidden">
          <NewTabIcon />
        </div>
      </Link>
    )}
  </div>
)
