import {
  CanDoCard,
  CareerPlanCard,
  ContactCard,
  ExpertCard,
  HistoryCard,
  LearnCard,
  NameCard,
  PersonalityCard,
  StackCard,
  StartupCard,
} from './cards'

export const Gallery = () => (
  <div className="px-4">
    <div className="container mx-auto lg:max-w-screen-lg">
      <div className="mb-4 flex flex-col gap-4 md:flex-row">
        <div className="md:basis-4/12 lg:basis-3/12">
          <NameCard />
        </div>
        <div className="md:basis-8/12 lg:basis-9/12">
          <HistoryCard />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row-reverse">
        <div className="flex flex-col gap-4 sm:basis-4/12">
          <CanDoCard />
          <PersonalityCard />
        </div>
        <div className="flex flex-col gap-4 sm:basis-8/12">
          <CareerPlanCard />
          <StackCard />
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:basis-6/12">
              <ExpertCard />
            </div>
            <div className="md:basis-6/12">
              <LearnCard />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="sm:basis-auto">
              <StartupCard />
            </div>
            <div className="sm:flex-1">
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
