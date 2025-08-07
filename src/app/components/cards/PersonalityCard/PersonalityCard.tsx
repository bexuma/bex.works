import { Card, List } from '@/components'

export const PersonalityCard = () => (
  <Card emoji="✨" heading="Personality">
    <List
      list={[
        'Core values: freedom, authenticity, potential',
        'CliftonStrengths (top 5): futuristic, learner, responsibility, maximizer, ideation',
        'Big Five: intellectually curious; orderly and principled; highly enthusiastic and assertive; compassionate yet candid; emotionally steady',
        'MBTI: ENFJ',
      ]}
    />
  </Card>
)
