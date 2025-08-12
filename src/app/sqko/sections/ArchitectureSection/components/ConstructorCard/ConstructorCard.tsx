import { Card, SectionHeading } from '@/components'
import Image from 'next/image'

export const ConstructorCard = () => (
  <Card heading="Business logic constructor">
    <p>
      Even with a single client, the platform required managing multiple
      services, each with unique signers, documents, and business logic. Adding
      flexibility alone was insufficient; updating the elements of the
      application lifecycle became a scripting nightmare. I solved this by
      building a custom WYSIWYG business logic constructor.
    </p>
    <div>
      <SectionHeading isMedium heading="Certificate of Enrollment Lifecycle" />
      <Image
        src="/constructor.webp"
        alt=""
        width={1600}
        height={972}
        priority
        className="border-light-300 dark:border-dark-300 h-auto w-full rounded-lg border object-contain"
      />
    </div>

    <p>
      This single-panel tool allowed for the complete configuration of every
      element, from stages and transitions to documents, signers, labels,
      modals, and button styles. It proved particularly useful when we needed to
      deploy an incomplete service, which enabled students to apply for a
      dormitory prematurely.
      {/* As a builder, I take immense pride in the elegance of this solution. */}
    </p>
    <div>
      <SectionHeading
        isMedium
        heading="Premature Dorm Application Deployment"
      />
      <Image
        src="/constructor-dorm.webp"
        alt=""
        width={1600}
        height={972}
        priority
        className="border-light-300 dark:border-dark-300 h-auto w-full rounded-lg border object-contain"
      />
    </div>
  </Card>
)
