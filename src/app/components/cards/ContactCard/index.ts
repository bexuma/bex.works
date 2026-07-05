export { ContactCard } from './ContactCard'

export type ContactLinkType =
  | {
      label: string
      variant?: 'link'
      url: string
      isStaticFile?: boolean
    }
  | {
      label: string
      variant: 'menu'
    }
