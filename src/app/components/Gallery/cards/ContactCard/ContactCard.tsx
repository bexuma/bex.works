import Link from 'next/link'
import { LINKS } from './constants'
import { Card } from '@/components'

export const ContactCard = () => (
  <Card emoji="🌐" heading="Contact">
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="flex flex-row space-x-4">
        {LINKS.slice(0, 3).map((link) => (
          <Link
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 underline"
          >
            {link.label}
            {/* <NewTabIcon /> */}
          </Link>
        ))}
      </div>
      <div className="flex flex-row space-x-4">
        {LINKS.slice(3, 6).map((link) => (
          <Link
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 underline"
          >
            {link.label}
            {/* <NewTabIcon /> */}
          </Link>
        ))}
      </div>
    </div>
  </Card>
)
