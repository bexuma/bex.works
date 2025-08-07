import { Card, List } from '@/components'

export const HistoryCard = () => (
  <Card emoji="🌟" heading="Latest history">
    <List
      list={[
        'Founded a SaaS startup with an EDMS for universities; sunsetted to pursue a full-time career',
        'Led Frontend Development of new products pivotal to securing Series A funding at Sequencing',
        "Architected and led Frontend of a CMS for Astana International Airport's web and mobile apps",
      ]}
    />
  </Card>
)
