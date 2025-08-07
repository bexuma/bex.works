import { Card } from '@/components'
import { ContactLink } from './components'
import { LINKS } from './constants'

export const ContactCard = () => (
  <Card emoji="🌐" heading="Contact">
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="flex flex-row gap-4">
        {LINKS.slice(0, 3).map((link) => (
          <ContactLink key={link.label} link={link} />
        ))}
      </div>
      <div className="flex flex-row gap-4">
        {LINKS.slice(3, 6).map((link) => (
          <ContactLink key={link.label} link={link} />
        ))}
      </div>
    </div>
  </Card>
)
