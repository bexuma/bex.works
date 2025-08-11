import { Card, List } from '@/components'

export const FailureCard = () => (
  <Card heading="Failure">
    <div className="space-y-2">
      <p>
        At times, I brought on a co-founder and an apprentice developer with the
        goal of shifting my focus to business development. Despite these
        efforts, I remained heavily involved in the technical day-to-day
        operations.
      </p>
      <div className="space-y-1">
        <p>Still, I achieved significant milestones, including:</p>
        <List
          list={[
            'Tripling the contract value in 2024',
            'Partnering with third-party providers',
            'Building a scalable information system',
          ]}
        />
      </div>
      <p>
        However, the intense demands of the business and the inability to fully
        delegate led to an unsustainable workload. The constant 70-to-95-hour
        workweeks and increased stress ultimately resulted in burnout.
      </p>
    </div>
  </Card>
)
