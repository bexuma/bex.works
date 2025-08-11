import { Card } from '@/components'
import { StackCard, SkillsCard, ProgramsCard } from './components'
import { Section } from '../../components'

export const MiscSection = () => (
  <Section heading="Misc">
    <div className="flex grid-cols-12 flex-col gap-2 sm:gap-4 lg:grid">
      <div className="md:col-span-12 xl:col-span-8">
        <StackCard />
      </div>
      <div className="md:col-span-12 xl:col-span-4">
        <div className="flex h-full flex-col gap-2 sm:gap-4">
          <SkillsCard />
          <ProgramsCard />
          <Card isMain heading="Thank you for reading! ❤️" />
        </div>
      </div>
    </div>
  </Section>
)
