import { Card, Tags } from '@/components'
import { SKILLS } from './constants'

export const SkillsCard = () => (
  <Card heading="Skills" centerHeading>
    <Tags labels={SKILLS} />
  </Card>
)
