export { APPLICATION_FORM_FILES } from './APPLICATION_FORM_FILES'
export { STUDENT_FORM_FILES } from './STUDENT_FORM_FILES'

export type FileNameType = 'seed.ts' | 'types.ts' | 'data.json'

export type FilesType = Partial<{
  [key in FileNameType]: string
}>
