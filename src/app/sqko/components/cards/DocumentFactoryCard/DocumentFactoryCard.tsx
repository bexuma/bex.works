import { Card } from '@/components'
import Image from 'next/image'
import { SectionHeading } from '../../SectionHeading'

export const DocumentFactoryCard = () => (
  <Card heading="Document factory">
    <p>
      In the initial version of the app, documents were dynamically created on
      the frontend. I later streamlined this process by setting up a
      microservice that generated documents from templates and uploaded them
      directly to an EDMS. This new architecture, built on a clear folder
      hierarchy of{' '}
      <span className="inline-code">
        university-code/service-code/document-code/language-code/file
      </span>
      , simplified template management and enabled easy previewing directly
      through Postman. As we received feedback and encountered issues with
      templates, we started suffixing ticket numbers to the files, which
      resulted in the creation of a clear versioning and bug-tracking system.
    </p>
    <div>
      <SectionHeading isMedium heading="Postman Workspace" />
      <Image
        src="/postman.webp"
        alt=""
        width={1600}
        height={972}
        className="h-auto w-full rounded-lg border border-gray-200 object-contain"
      />
    </div>
  </Card>
)
