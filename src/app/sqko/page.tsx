import { Card } from '@/components'
import {
  CareerCard,
  BusinessCard,
  ConstructorCard,
  DocumentFactoryCard,
  OverviewCard,
  FailureCard,
  FormCard,
  ResultsCard,
  InsightsCard,
  InternationalizationCard,
  ProgramsCard,
  TechnicalCard,
  SectionHeading,
  SkillsCard,
  UniversityCard,
  StackCard,
  TransitionCard,
  ProjectCard,
  DocumentCard,
  ApplicationVideo,
} from './components'

const SqkoPage = () => (
  <main className="px-2 pt-2 sm:px-4 sm:pt-4">
    <div className="container mx-auto">
      <section>
        <BusinessCard />
      </section>
      <section>
        {/* HISTORY
            default (12/12)
            |              University             |
            |              Transition             |
            |               Failure               |
            |                Career               |

            sm (12/12)
            |              University             |
            |              Transition             |
            |               Failure               |
            |                Career               |

            md (7/12, 5/12)
            |       University       | Transition | 670 590 | 67 59 | 69 60 | 23 20
            |        Failure         |   Career   | 410 510 | 41 51 | 42 51 | 14 17
                                                    +20       +2
            lg (8/12, 4/12)
            |       University       | Transition | 6 5
            |        Failure         |   Career   | 3 4

            xl (6/12, 6/12)
            |    University    |    Transition    |
            |                  |     Failure      |
            |               Career                |

            2xl (6/12, 6/12)
            |    University    |    Transition    |
            |                  | Failure | Career |
        */}
        <SectionHeading heading="History" />
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
      </section>
      <section>
        {/* HIGHLIGHTS
            default (12/12)
            |              ProjectCard            |
            |              ResultsCard            |
            |             InsightsCard            |
            |             TechnicalCard           |

            sm (5/12, 7/12)
            | ProjectCard  |     ResultsCard      |
            |             InsightsCard            |
            |             TechnicalCard           |

            md (5/12, 7/12)
            | ProjectCard  |    InsightsCard      |
            | ResultsCard  |                      |
            |             TechnicalCard           |

            lg (5/12, 7/12)
            | ProjectCard  |    InsightsCard      |
            | ResultsCard  |                      |
            |             TechnicalCard           |

            xl (5/12, 7/12)
            | ProjectCard  |    InsightsCard      |
            | ResultsCard  |                      |
            |             TechnicalCard           |

            2xl (8(3/5)/12, 4/12)
            |ProjectCard|ResultsCard |InsightsCard|
            |        TechnicalCard   |            |
        */}
        <SectionHeading heading="Highlights" />
        <div className="flex flex-col gap-2 sm:grid sm:grid-cols-12 sm:grid-rows-none sm:gap-4">
          <div className="sm:col-span-5 2xl:col-span-3">
            <ProjectCard />
          </div>
          <div className="sm:col-span-7 md:col-span-5 md:row-start-2 2xl:col-start-4 2xl:row-start-1">
            <ResultsCard />
          </div>
          <div className="sm:col-span-12 md:col-span-7 md:col-start-6 md:row-span-2 2xl:col-span-4 2xl:col-start-9">
            <InsightsCard />
          </div>
          <div className="sm:col-span-12 2xl:col-span-8">
            <TechnicalCard />
          </div>
        </div>
      </section>
      <section>
        {/* Architecture
            default
            |              Overview               |
            |                I18n                 |
            |               Factory               |
            |             Constructor             |
            |                Form                 |
            |               Document              |
            |                App-n                |

            sm (12/12)
            |              Overview               |
            |                I18n                 |
            |               Factory               |
            |             Constructor             |
            |                Form                 |
            |            Document           |App-n|

            md (12/12)
            |              Overview               |
            |                I18n                 |
            |               Factory               |
            |             Constructor             |
            |                Form                 |
            |            Document           |App-n|
                                                  
            lg (8/12, 4/12)
            |         Overview        |    I18n   |
            |               Factory               |
            |             Constructor             |
            |                Form                 |
            |App-n|            Document           |

            xl (6/12, 6/12)
            |      Overview    |      Factory     | 478 | 702  | 48 70  | 10 14
            |        I18n      |       Form       | 238 | 1883 | 24 188 | 5  38
            |    Constructor   |                  | 1147       | 115    | 23
            |App-n|  Document  |                  | 700        | 70     | 14

            2xl (4/12, 8/12), (6/12, 6/12)
            |  Overview  |         Factory        |
            |    I18n    |                        |
            |    Constructor   |       Form       |
            |App-n|  Document  |                  |
        */}
        <SectionHeading heading="Architecture" />
        <div className="flex flex-col gap-2 sm:gap-4 lg:grid lg:grid-cols-12 xl:grid-rows-52 2xl:grid-rows-none">
          <div className="lg:col-span-8 xl:col-span-6 xl:row-span-10 2xl:col-span-4 2xl:row-span-1">
            <OverviewCard />
          </div>
          <div className="lg:col-span-4 xl:col-span-6 xl:col-start-1 xl:row-span-5 2xl:col-span-4 2xl:row-span-1 2xl:row-start-2">
            <InternationalizationCard />
          </div>
          <div className="lg:col-span-12 xl:col-span-6 xl:col-start-7 xl:row-span-14 xl:row-start-1 2xl:col-span-8 2xl:row-span-2">
            <DocumentFactoryCard />
          </div>
          <div className="lg:col-span-12 xl:col-span-6 xl:col-start-1 xl:row-span-23 2xl:col-span-6 2xl:row-span-1">
            <ConstructorCard />
          </div>
          <div className="lg:col-span-12 xl:col-span-6 xl:col-start-7 xl:row-span-38 xl:row-start-15 2xl:col-span-6 2xl:row-span-2">
            <FormCard />
          </div>
          <div className="lg:col-span-12 xl:col-span-6 xl:row-span-14 2xl:col-span-6 2xl:row-span-1">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 lg:flex-row-reverse">
              <div className="flex-auto sm:flex-1">
                <DocumentCard />
              </div>
              <div className="sm:basis-auto">
                <ApplicationVideo />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SectionHeading heading="Misc" />
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
      </section>
    </div>
  </main>
)

export default SqkoPage
