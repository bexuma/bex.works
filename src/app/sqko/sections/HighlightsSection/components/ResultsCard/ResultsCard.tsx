import { Card, List } from '@/components'

export const ResultsCard = () => (
  <Card heading="End results">
    <div className="space-y-1">
      <p>
        The project had a significant impact on university operations. By
        automating and digitizing key processes, the solution had:
      </p>
      <List
        list={[
          'Processed over 30,000 applications, reducing office costs by 80%',
          'Generated over 2,500 digital documents without the need for manual printing',
          'Made visiting the office of Student Service Center obsolete',
        ]}
      />
    </div>
  </Card>
)
