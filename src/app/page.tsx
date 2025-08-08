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
} from './components'

const HomePage = () => (
  <main className="flex min-h-[calc(100vh-113px)] flex-col justify-center px-2 pt-2 sm:min-h-[calc(100vh-129px)] sm:px-4 sm:pt-4">
    <div className="container mx-auto space-y-2 sm:space-y-4 lg:max-w-screen-lg">
      <div className="flex flex-col gap-2 sm:gap-4 md:flex-row">
        <div className="md:basis-4/12 lg:basis-3/12">
          <NameCard />
        </div>
        <div className="md:basis-8/12 lg:basis-9/12">
          <HistoryCard />
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:gap-4 lg:flex-row-reverse">
        <div className="flex flex-col gap-2 sm:basis-4/12 sm:gap-4">
          <CanDoCard />
          <PersonalityCard />
        </div>
        <div className="flex flex-col gap-2 sm:basis-8/12 sm:gap-4">
          <CareerPlanCard />
          <StackCard />
          <div className="flex flex-col gap-2 sm:gap-4 md:flex-row">
            <div className="md:basis-6/12">
              <ExpertCard />
            </div>
            <div className="md:basis-6/12">
              <LearnCard />
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-4 md:flex-row">
            <div className="md:basis-auto">
              <StartupCard />
            </div>
            <div className="md:flex-1">
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
)

export default HomePage
