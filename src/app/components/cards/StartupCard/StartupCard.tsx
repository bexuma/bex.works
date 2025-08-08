import { Card } from '@/components'
import Link from 'next/link'

export const StartupCard = () => (
  <Card emoji="📂" heading="Startup">
    <Link href="/sqko" className="text-light-600 dark:text-dark-600 underline">
      Case Study
    </Link>
  </Card>
)
