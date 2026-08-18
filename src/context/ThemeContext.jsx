import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Always initialize in pristine Light Mode by default
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('theme-transitioning')

    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    const timer = setTimeout(() => {
      root.classList.remove('theme-transitioning')
    }, 400)

    return () => clearTimeout(timer)
  }, [dark])

  const toggle = () => {
    setDark((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
