import { Card, List } from '@/components'
import { REPOSITORY_LIST } from './constants'

export const OverviewCard = () => (
  <Card heading="Core components">
    <List list={REPOSITORY_LIST} />
  </Card>
)
