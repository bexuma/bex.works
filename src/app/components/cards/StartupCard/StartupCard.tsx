import { Card } from '@/components'
import Link from 'next/link'

export const StartupCard = () => (
  <Card emoji="📂" heading="Startup">
    <Link href="/sqko" className="text-indigo-600 underline">
      Case Study
    </Link>
  </Card>
)
