import { Card, List } from '@/components'
import { INSIGHT_LIST } from './constants'

export const InsightsCard = () => (
  <Card heading="First-hand insights">
    <div className="space-y-1">
      <p>
        The entrepreneurial journey provided a number of critical lessons, both
        strategic and operational:
      </p>
      <List list={INSIGHT_LIST} />
    </div>
  </Card>
)
