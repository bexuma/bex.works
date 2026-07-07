import { Card } from '@/components'
import Link from 'next/link'

export const HistoryCard = () => (
  <Card emoji="🌟" heading="Latest history">
    <ul className="space-y-1">
      <li className="before:mr-1 before:content-['–']">
        Designed a single-source-of-truth spec system for AgrOS, a seven-app
        AgTech platform, ensuring consistent requirements across all apps
      </li>
      <li className="before:mr-1 before:content-['–']">
        Founded, operated, and successfully commercialized a university SaaS
        platform —{' '}
        <Link
          href="/sqko"
          className="text-light-link dark:text-dark-link underline"
        >
          case study
        </Link>
      </li>
      <li className="before:mr-1 before:content-['–']">
        Led Frontend Development of new products pivotal to securing Series A
        funding at Sequencing
      </li>
    </ul>
  </Card>
)
