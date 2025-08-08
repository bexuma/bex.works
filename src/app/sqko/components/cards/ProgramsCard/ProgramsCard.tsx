import { Card, Tags } from '@/components'
import { PROGRAMS } from './constants'

export const ProgramsCard = () => (
  <Card heading="Programs" centerHeading minPadding>
    <Tags labels={PROGRAMS} />
  </Card>
)
