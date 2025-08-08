import { Card } from '@/components'

export const DocumentCard = () => (
  <Card heading="Digital documents">
    <p className="mb-2">
      Upon final signature, the system automatically generated a verifiable,
      finalized digital document.
    </p>
    <iframe
      title="card"
      src="/card.pdf"
      // type="application/pdf"
      className="border-light-300 dark:border-dark-300 h-[450px] w-full min-w-[290px] rounded-lg border sm:h-[450px] md:h-[570px] xl:h-[520px] 2xl:h-[570px]"
    ></iframe>
  </Card>
)
