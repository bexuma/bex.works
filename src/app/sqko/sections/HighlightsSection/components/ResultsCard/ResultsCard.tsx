import { Card, List } from '@/components'

export const ResultsCard = () => (
  <Card heading="End results">
    <div className="space-y-1">
      <p>
        The project had a significant impact on university operations. By
        automating and digitizing key processes, the solution was able to:
      </p>
      <List
        list={[
          'Process over 30,000 applications, cutting administrative costs by 80%',
          'Generate over 2,500 digital documents without the need for manual printing',
          'Make visiting the office of Student Service Center obsolete',
        ]}
      />
    </div>
  </Card>
)
