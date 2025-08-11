import { Card, NewTabIcon } from '@/components'

export const DocumentCard = () => (
  <Card heading="Digital documents">
    <p className="mb-2">
      Upon final signature, the system automatically generated a verifiable,
      finalized digital document.
    </p>
    <div className="hidden sm:block">
      <iframe
        title="card"
        src="/sample-ru.pdf"
        className="border-light-300 dark:border-dark-300 h-[450px] w-full min-w-[290px] rounded-lg border sm:h-[450px] md:h-[570px] xl:h-[520px] 2xl:h-[570px]"
      ></iframe>
    </div>
    <div className="flex flex-col gap-1 sm:hidden">
      <a
        href="/sample-kk.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-light-link dark:text-dark-link inline-flex items-center gap-1 underline"
      >
        Open sample document in Kazakh
        <NewTabIcon />
      </a>
      <a
        href="/sample-ru.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-light-link dark:text-dark-link inline-flex items-center gap-1 underline"
      >
        Open sample document in Russian
        <NewTabIcon />
      </a>
    </div>
  </Card>
)
