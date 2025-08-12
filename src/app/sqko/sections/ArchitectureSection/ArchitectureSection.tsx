import {
  ApplicationVideo,
  ConstructorCard,
  DocumentCard,
  DocumentFactoryCard,
  FormCard,
  InternationalizationCard,
  OverviewCard,
} from './components'
import { Section } from '../../components'

export const ArchitectureSection = () => (
  <Section heading="Architecture">
    <div className="flex flex-col gap-2 sm:gap-4 lg:grid lg:grid-cols-12 xl:grid-rows-81 2xl:grid-rows-none">
      <div className="lg:col-span-8 xl:col-span-6 xl:row-span-17 2xl:col-span-4 2xl:row-span-1">
        <OverviewCard />
      </div>
      <div className="lg:col-span-4 xl:col-span-6 xl:col-start-1 xl:row-span-8 2xl:col-span-4 2xl:row-span-1 2xl:row-start-2">
        <InternationalizationCard />
      </div>
      <div className="lg:col-span-12 xl:col-span-6 xl:col-start-7 xl:row-span-22 xl:row-start-1 2xl:col-span-8 2xl:row-span-2">
        <DocumentFactoryCard />
      </div>
      <div className="lg:col-span-12 xl:col-span-6 xl:col-start-1 xl:row-span-36 2xl:col-span-6 2xl:row-span-1">
        <ConstructorCard />
      </div>
      <div className="lg:col-span-12 xl:col-span-6 xl:col-start-7 xl:row-span-59 xl:row-start-23 2xl:col-span-6 2xl:row-span-2">
        <FormCard />
      </div>
      <div className="lg:col-span-12 xl:col-span-6 xl:row-span-20 2xl:col-span-6 2xl:row-span-1">
        <div className="flex h-full flex-col gap-2 sm:flex-row sm:gap-4 lg:flex-row-reverse">
          <div className="flex-auto sm:flex-1">
            <DocumentCard />
          </div>
          <div className="sm:basis-auto">
            <ApplicationVideo />
          </div>
        </div>
      </div>
    </div>
  </Section>
)
