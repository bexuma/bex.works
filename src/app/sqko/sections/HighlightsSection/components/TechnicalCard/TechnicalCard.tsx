import { Card, List } from '@/components'

export const TechnicalCard = () => (
  <Card heading="Technical evolution">
    <div className="space-y-2">
      <p>
        The platform’s architecture evolved from a simpler client-server setup
        to a microservice-based system, driven by continuous technical
        modernization.
      </p>
      <div className="space-y-1">
        <p>Transformations included:</p>
        <List
          list={[
            'Migrating from Bootstrap to custom components to MUI, from class to functional components, and upgrading to TypeScript',
            'Replacing dynamic PDF generation on the front end with a dedicated microservice responsible for document generation and storage',
            'Splitting a single SPA into multiple specialized applications to improve code clarity and maintainability',
          ]}
        />
      </div>
      <p>
        Throughout iterations, by retiring features like the Application Time
        Machine and shutting down the mobile app development, I learned to not
        overcomplicate the product and to focus on key features.
      </p>
    </div>
  </Card>
)
