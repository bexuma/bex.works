export { StackCard } from './StackCard'

export type StackCategoryType =
  | 'Backend'
  | 'Frontend'
  | 'JS Libraries'
  | 'DevDependencies'
  | 'DevOps'
  | 'Protocols'
  | 'ThirdParty'
  | 'Design'
  | 'Analytics'
  | 'Project Management'

export type StackType = {
  [keys in StackCategoryType]: string[]
}
