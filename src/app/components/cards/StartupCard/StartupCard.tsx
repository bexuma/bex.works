import { Card } from '@/components'
import Link from 'next/link'

export const StartupCard = () => (
  <Card emoji="📂" heading="Startup">
    <Link
      href="/sqko"
      className="text-light-link dark:text-dark-link underline"
    >
      Case Study
    </Link>
  </Card>
)
