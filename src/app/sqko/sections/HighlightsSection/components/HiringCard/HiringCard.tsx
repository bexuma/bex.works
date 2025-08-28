import { Card, List } from '@/components'

export const HiringCard = () => (
  <Card heading="Hiring experience">
    <div className="space-y-1">
      <p>
        Once I started treating the project as a startup, I realized that with a
        packed roadmap, I lacked the time for both sales and development. This
        led me to shift my focus to hiring and team building:
      </p>
      <List
        list={[
          'Attempted to convert a freelance developer who had built the mobile app into a co-founder, though the demands of a startup were higher than they could contribute at the time',
          'Hired and trained a smart and honest extraverted person with a desire to switch careers (turned out those traits were enough) and no coding background into a full-stack developer. After a one-month apprenticeship, they were assigned to work on the Document Factory microservice and gradually contributed across projects. Following their time with me, they have already worked in two medium-sized local companies, first as a QA and then as a Frontend Developer',
          'Organized and led a one-month internship for a high school graduate who worked on frontend tasks',
        ]}
      />
    </div>
  </Card>
)
