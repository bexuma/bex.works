import { ListItemType } from '@/components/List'

export const REPOSITORY_LIST: ListItemType[] = [
  {
    heading: 'SQKO Student',
    body: 'a client for students for applying and receiving university services',
  },
  {
    heading: 'SQKO Officer',
    body: 'a client for officers to review applications, e-sign documents, verify payments and manage dormitory check-ins, reservations, and leave services',
  },
  {
    heading: 'SQKO Admin',
    body: 'an internal tool for managing officers and configuring services via a GUI',
  },
  {
    heading: 'SQKO Qujat',
    body: 'a public-facing client for verifying the authenticity of issued digital documents',
  },
  {
    heading: 'SQKO Server',
    body: 'a GraphQL backend with resolvers namespaced by a dedicated client (e.g., officerGetApplication, studentGetApplication)',
  },
  {
    heading: 'SQKO Document Factory',
    body: 'a microservice responsible for generating PDF documents and uploading them to the cloud',
  },
  {
    heading: 'SQKO Qoima',
    body: 'a secure S3 storage for generated and student-uploaded documents, with private and time-limited access',
  },
  {
    heading: 'SQKO Scripts',
    body: 'a standalone scripts repository for utility, data seeding, and one-off scripts, with filenames matching JIRA tickets, allowed for controlled and trackable fixes',
  },
]
