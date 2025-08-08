import { Card, Tags } from '@/components'
import { STACK } from './constants'
import { SectionHeading } from '../../SectionHeading'
import { StackCategoryType } from '.'

interface StackCategoryProps {
  category: StackCategoryType
}

const StackCategory = ({ category }: StackCategoryProps) => (
  <div>
    <SectionHeading isMedium heading={category} />
    <Tags labels={STACK[category]} />
  </div>
)

export const StackCard = () => (
  <Card heading="Stack" centerHeading noSpacing>
    <div className="flex flex-col gap-2 sm:gap-4 md:grid md:grid-cols-12">
      <div className="md:col-span-12 lg:col-span-6">
        <StackCategory category="Backend" />
      </div>
      <div className="md:col-span-12 lg:col-span-6">
        <StackCategory category="Frontend" />
      </div>
      <div className="col-span-12">
        <StackCategory category="JS Libraries" />
      </div>
      <div className="col-span-12">
        <StackCategory category="DevOps" />
      </div>
      <div className="col-span-6 col-start-1">
        <StackCategory category="ThirdParty" />
      </div>
      <div className="col-span-6 col-start-1">
        <StackCategory category="Protocols" />
      </div>
      <div className="col-span-6 col-start-1">
        <StackCategory category="DevDependencies" />
      </div>
      <div className="col-span-6 col-start-7 md:row-start-5 lg:row-start-4">
        <StackCategory category="Design" />
      </div>
      <div className="col-span-6 col-start-7 md:row-start-6 lg:row-start-5">
        <StackCategory category="Analytics" />
      </div>
      <div className="col-span-6 col-start-7">
        <StackCategory category="Project Management" />
      </div>
    </div>
  </Card>
)
