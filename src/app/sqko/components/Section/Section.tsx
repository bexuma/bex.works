import { SectionHeading } from '@/components'

interface SectionProps {
  heading?: string
  children: React.ReactNode
}

export const Section = ({ heading, children }: SectionProps) => (
  <section>
    {heading && <SectionHeading heading={heading} />}
    {children}
  </section>
)
