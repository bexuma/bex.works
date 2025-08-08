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
        className="inline-flex items-center gap-1 text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
      >
        Open sample document in Kazakh
        <NewTabIcon />
      </a>
      <a
        href="/sample-ru.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
      >
        Open sample document in Russian
        <NewTabIcon />
      </a>
    </div>
  </Card>
)
