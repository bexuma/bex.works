import {
  InsightsCard,
  ProjectCard,
  ResultsCard,
  TechnicalCard,
} from './components'
import { Section } from '../../components'

export const HighlightsSection = () => (
  <Section heading="Highlights">
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
  </Section>
)
