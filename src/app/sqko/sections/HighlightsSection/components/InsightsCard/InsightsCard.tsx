import { Card, List } from '@/components'
import { INSIGHT_LIST } from './constants'

export const InsightsCard = () => (
  <Card heading="First-hand insights">
    <div className="space-y-1">
      <p>
        My entrepreneurial journey taught me a number of critical strategic and
        operational lessons:
      </p>
      <List list={INSIGHT_LIST} />
    </div>
  </Card>
)
