import { Card, List } from '@/components'

export const TechnicalCard = () => (
  <Card heading="Technical evolution">
    <div className="space-y-2">
      <p>
        The platform’s architecture evolved from a simpler client-server setup
        to a microservice-based system, driven by a complete technical
        modernization.
      </p>
      <div className="space-y-1">
        <p>Transformations included:</p>
        <List
          list={[
            'Migrating from Bootstrap to custom components to MUI, from class to functional components, and upgrading to TypeScript',
            'Splitting a single SPA into multiple specialized applications to improve code clarity and maintainability',
            'Migrating dynamic PDF generation from the front end to a dedicated microservice enabling digital document signing',
          ]}
        />
      </div>
      <p>
        Throughout this evolution, by retiring features like the Application
        Time Machine and shutting down the mobile app development, I learned to
        not overcomplicate the product and to focus on core features instead.
      </p>
    </div>
  </Card>
)
