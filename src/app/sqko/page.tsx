import {
  HistorySection,
  HighlightsSection,
  ArchitectureSection,
  MiscSection,
  ProjectNameSection,
} from './sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SQKO',
  description: 'University project turned into startup.',
}

const SqkoPage = () => (
  <main className="px-2 pt-2 sm:px-4 sm:pt-4">
    <div className="container mx-auto">
      <ProjectNameSection />
      <HighlightsSection />
      <HistorySection />
      <ArchitectureSection />
      <MiscSection />
    </div>
  </main>
)

export default SqkoPage
