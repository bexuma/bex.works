import { Card } from '@/components'

export const BusinessCard = () => (
  <Card isMain heading="SQKO">
    <div className="space-y-1 sm:space-y-0">
      <p className="text-base capitalize sm:text-lg">
        university project turned into startup
      </p>
      <p className="text-light-border dark:text-dark-border text-sm sm:text-base">
        January 2019 — March 2025
      </p>
    </div>
  </Card>
)
