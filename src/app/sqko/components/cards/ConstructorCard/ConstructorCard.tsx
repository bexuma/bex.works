import { Card } from '@/components'
import Image from 'next/image'
import { SectionHeading } from '../../SectionHeading'

export const ConstructorCard = () => (
  <Card heading="Business logic contructor">
    <div className="space-y-2">
      <p>
        Even with a single client, the platform required managing multiple
        services, each with unique signers, documents, and business logic.
        Adding flexibility alone was insufficient; updating the elements of the
        application lifecycle became a scripting nightmare. I solved this by
        building a custom WYSIWYG business logic constructor.
      </p>
      <div>
        <SectionHeading
          isMedium
          heading="Certificate of Enrollment Lifecycle"
        />
        <Image
          src="/contructor.webp"
          alt=""
          width={1600}
          height={972}
          className="h-auto w-full rounded-lg border border-gray-200 object-contain"
        />
      </div>
      <p>
        This single-panel tool allowed for the complete configuration of every
        element, from stages and transitions to documents, signers, labels,
        modals, and button styles. It proved particularly useful when we needed
        to deploy an incomplete service, which enabled students to apply for a
        dormitory prematurely.
        {/* As a builder, I take immense pride in the elegance of this solution. */}
      </p>
      <div>
        <SectionHeading
          isMedium
          heading="Premature Dorm Application Deployment"
        />
        <Image
          src="/contructor-dorm.webp"
          alt=""
          width={1600}
          height={972}
          className="h-auto w-full rounded-lg border border-gray-200 object-contain"
        />
      </div>
    </div>
  </Card>
)
