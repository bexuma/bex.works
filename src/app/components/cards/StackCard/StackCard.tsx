import { Card } from '@/components'
import { SNAP_STACK } from './constants'

export const StackCard = () => (
  <Card emoji="⚡️" heading="Snap stack">
    <p>{SNAP_STACK.join(', ')}</p>
  </Card>
)
