'use client'
import useTheme from './useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-light-200 dark:hover:bg-dark-200 ml-[-8px] rounded-full p-2 hover:cursor-pointer"
    >
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="text-light-400 dark:text-dark-400 h-5 w-5"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 1.906V.97m4.309 2.722.663-.663M14.094 8h.937m-2.722 4.309.663.663M8 14.094v.937M3.691 12.31l-.663.663M1.906 8H.97M3.69 3.691l-.663-.663M3.781 8a4.219 4.219 0 1 0 8.438 0A4.219 4.219 0 0 0 3.78 8"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="text-light-400 dark:text-dark-400 h-5 w-5"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.99 2.844h2.813M9.397 1.438V4.25m2.812 1.406h1.875m-.937-.937v1.875m-1.875 3.75a6.096 6.096 0 0 1-5.828-7.875 6.091 6.091 0 1 0 8.375 7.313 6.06 6.06 0 0 1-2.547.562"
          ></path>
        </svg>
      )}
    </button>
  )
}
