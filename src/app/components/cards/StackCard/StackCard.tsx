import { Card, Tags } from '@/components'
import { SNAP_STACK } from './constants'

export const StackCard = () => (
  <Card emoji="⚡️" heading="Snap stack">
    <Tags labels={SNAP_STACK} textSm />
  </Card>
)
