import { Card, List, Video, SectionHeading, CodeWindow } from '@/components'
import { FORM_FEATURE_LIST } from './constants'

export const FormCard = () => (
  <Card heading="Dynamic forms">
    <div className="space-y-2">
      <p>
        Initially, form implementations were hardcoded on the frontend,
        requiring manual updates for every change or new file creations for a
        new service. Recognizing the need for flexibility and scalability, I
        designed and implemented a dynamic form engine decoupling form logic
        from the frontend.
      </p>
      <p>
        The solution leverages a server-driven JSON schema to define form
        fields, validation rules, conditional logic, and default values. On the
        frontend, React Hook Form efficiently manages state and validation,
        dynamically rendering forms based on the backend configuration.
      </p>
      <div className="space-y-1">
        <p>Key Benefits & Features:</p>
        <List list={FORM_FEATURE_LIST} />
      </div>
      <p>
        This approach significantly reduced development overhead while improving
        adaptability, allowing rapid iteration to meet evolving business needs.
      </p>
    </div>
    <div className="mt-2">
      <SectionHeading isMedium heading="Application Form" />
      <div className="flex h-auto flex-col gap-4 sm:h-[600px] sm:flex-row lg:h-[700px] xl:h-[600px] 2xl:h-[700px]">
        <Video fileName="application-form" />
        <div className="flex-1">
          <CodeWindow code="APPLICATION_FORM" />
        </div>
      </div>
    </div>
    <div className="mt-2">
      <SectionHeading isMedium heading="Student Form" />
      <div className="flex h-auto flex-col gap-4 sm:h-[600px] sm:flex-row lg:h-[700px] xl:h-[600px] 2xl:h-[700px]">
        <Video fileName="student-form" />
        <div className="flex-1">
          <CodeWindow code="STUDENT_FORM" />
        </div>
      </div>
    </div>
  </Card>
)
