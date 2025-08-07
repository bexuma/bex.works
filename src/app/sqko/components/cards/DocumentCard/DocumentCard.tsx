import { Card } from '@/components'

export const DocumentCard = () => (
  <Card heading="Digital documents">
    <p>
      Upon final signature, the system automatically generated a verifiable,
      finalized digital document.
    </p>
    <iframe
      title="card"
      src="/card.pdf"
      className="h-[450px] w-full rounded-lg border border-gray-200 sm:h-[450px] md:h-[570px] xl:h-[520px] 2xl:h-[570px]"
    ></iframe>
  </Card>
)
