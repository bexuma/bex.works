import { Card } from '@/components'

export const InternationalizationCard = () => (
  <Card heading="Internationalization">
    <p>
      I found the manual process of updating{' '}
      <span className="inline-code">translation.json</span> files to be an
      incredibly draining task. To solve this, I pivoted to a datalight-driven
      internationalization (i18n) approach, using PostgreSQL to store
      translation labels as JSON arrays within the database models. This
      architectural shift simplified label management and the addition of new
      languages, requiring no-to-minimal server-side work. It also dramatically
      reduced the frontend boilerplate, with the final file for the SQKO Student
      app containing just over 100 lines.
    </p>
  </Card>
)
