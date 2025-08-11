import {
  CareerCard,
  FailureCard,
  TransitionCard,
  UniversityCard,
} from './components'
import { Section } from '../../components'

export const HistorySection = () => (
  <Section heading="History">
    <div className="flex flex-col gap-2 sm:gap-4 md:grid md:grid-cols-12 md:grid-rows-37 lg:grid-rows-9 xl:grid-rows-none">
      <div className="md:col-span-7 md:row-span-23 lg:col-span-8 lg:row-span-6 xl:col-span-6 xl:row-span-2 2xl:row-span-2">
        <UniversityCard />
      </div>
      <div className="md:col-span-5 md:row-span-20 lg:col-span-4 lg:row-span-5 xl:col-span-6 xl:row-span-1 2xl:col-start-7 2xl:row-span-1">
        <TransitionCard />
      </div>
      <div className="md:col-span-7 md:row-span-14 md:row-start-24 lg:col-span-8 lg:row-span-3 lg:row-start-7 xl:col-span-6 xl:row-span-1 2xl:col-span-3 2xl:col-start-7 2xl:row-span-1 2xl:row-start-2">
        <FailureCard />
      </div>
      <div className="md:col-span-5 md:row-span-17 md:row-start-21 lg:col-span-4 lg:col-start-9 lg:row-span-4 lg:row-start-6 xl:col-span-12 xl:row-span-1 2xl:col-span-3 2xl:col-start-10 2xl:row-span-1 2xl:row-start-2">
        <CareerCard />
      </div>
    </div>
  </Section>
)
