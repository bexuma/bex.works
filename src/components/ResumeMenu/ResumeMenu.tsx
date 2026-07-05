'use client'

import { useEffect, useRef, useState } from 'react'
import { NewTabIcon } from '../NewTabIcon'
import { RESUME_OPTIONS } from './constants'

interface ResumeMenuProps {
  align?: 'left' | 'right'
  triggerClassName?: string
}

export const ResumeMenu = ({
  align = 'left',
  triggerClassName,
}: ResumeMenuProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`text-light-link dark:text-dark-link inline-flex items-center gap-1 underline hover:cursor-pointer ${triggerClassName ?? ''}`}
      >
        Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div
          role="menu"
          className={`border-light-300 dark:border-dark-300 bg-light-100 dark:bg-dark-100 absolute top-full z-30 mt-2 min-w-[150px] overflow-hidden rounded-xl border py-1 whitespace-nowrap shadow-lg ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          {RESUME_OPTIONS.map((option) => (
            <a
              key={option.href}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="hover:bg-light-200 dark:hover:bg-dark-200 text-light-text dark:text-dark-text flex items-center justify-between gap-3 px-3 py-2 text-sm transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true">{option.flag}</span>
                {option.label}
              </span>
              <NewTabIcon className="h-3.5 w-3.5 opacity-50" />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
