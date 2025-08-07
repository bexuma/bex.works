import { Card } from '@/components'
import Link from 'next/link'

export const HistoryCard = () => (
  <Card emoji="🌟" heading="Latest history">
    <ul className="space-y-1">
      <li className="before:mr-1 before:content-['–']">
        Founded a SaaS startup with an EDMS for universities;{' '}
        <Link href="/sqko" className="text-indigo-600 underline">
          sunsetted to pursue a full-time career
        </Link>
      </li>
      <li className="before:mr-1 before:content-['–']">
        Led Frontend Development of new products pivotal to securing Series A
        funding at Sequencing
      </li>
      <li className="before:mr-1 before:content-['–']">
        Architected and led Frontend of a CMS for Astana International
        Airport&apos;s web and mobile apps
      </li>
    </ul>
  </Card>
)
