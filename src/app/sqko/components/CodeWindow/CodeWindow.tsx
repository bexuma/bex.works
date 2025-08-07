'use client'

import { useMemo, useState } from 'react'
import {
  type FileNameType,
  APPLICATION_FORM_FILES,
  STUDENT_FORM_FILES,
} from './constants'

interface CodeWindowProps {
  code: 'APPLICATION_FORM' | 'STUDENT_FORM'
}

export const CodeWindow = ({ code }: CodeWindowProps) => {
  const [activeFile, setActiveFile] = useState<FileNameType>('data.json')

  const files = useMemo(
    () =>
      code === 'APPLICATION_FORM' ? APPLICATION_FORM_FILES : STUDENT_FORM_FILES,
    [code],
  )

  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 font-mono text-sm">
      <div className="flex shrink-0 flex-row overflow-hidden rounded-t-lg border-b border-[#3c3c3c] bg-[#252526]">
        {Object.keys(files).map((file) => (
          <button
            key={file}
            onClick={() => setActiveFile(file as FileNameType)}
            className={`border-b-2 px-4 py-2 transition-all hover:cursor-pointer ${
              activeFile === file
                ? 'border-[#569CD6] bg-[#1e1e1e] text-white'
                : 'border-transparent text-[#cccccc] hover:bg-[#3c3c3c] hover:text-white'
            }`}
          >
            {file}
          </button>
        ))}
      </div>
      <pre className="flex-1 overflow-y-auto rounded-b-lg bg-[#1e1e1e] p-4 whitespace-pre-wrap text-[#d4d4d4]">
        <code>{files[activeFile]}</code>
      </pre>
    </div>
  )
}
