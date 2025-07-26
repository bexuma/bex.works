import { Card } from '@/components'
import Link from 'next/link'

export const StartupCard = () => (
  <Card emoji="🦄" heading="Case Study">
    <Link
      href="/"
      className="rounded-lg border-1 border-black bg-white px-3 py-1 text-xs"
    >
      Startup Showcase (WIP)
    </Link>
  </Card>
)
