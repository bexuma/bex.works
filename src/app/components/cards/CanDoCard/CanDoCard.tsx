import { Card, List } from '@/components'

export const CanDoCard = () => (
  <Card emoji="🪄" heading="Things I can do" hFullOff>
    <List
      list={[
        'Understand the problem → research, ideate and present solutions → deliver',
        'Roadmap, develop, set up analytics and deploy web and mobile applications',
        'Listen, mentor, coordinate and lead',
      ]}
    />
  </Card>
)
