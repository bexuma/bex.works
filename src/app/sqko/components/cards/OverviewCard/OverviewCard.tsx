import { Card, List } from '@/components'
import { REPOSITORY_LIST } from './constants'

export const OverviewCard = () => (
  <Card heading="Overview">
    {/* <p>
      The final version of the product was organized into multiple repositories:
    </p> */}
    <List list={REPOSITORY_LIST} />
  </Card>
)
