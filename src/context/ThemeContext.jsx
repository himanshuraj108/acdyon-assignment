import { createContext, useContext, useState, useEffect } from 'react'
import { flushSync } from 'react-dom'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem('acdyon-theme')
      if (stored === 'dark') return true
      if (stored === 'light') return false
    } catch {}
    return true
  })

  // Synchronize on mount
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggle = (event) => {
    // Exact click coordinates on the viewport
    let x = window.innerWidth - 80
    let y = 36

    if (event) {
      if (typeof event.clientX === 'number' && event.clientX > 0) {
        x = Math.round(event.clientX)
        y = Math.round(event.clientY)
      } else if (event.nativeEvent && typeof event.nativeEvent.clientX === 'number') {
        x = Math.round(event.nativeEvent.clientX)
        y = Math.round(event.nativeEvent.clientY)
      } else {
        const btn = event.currentTarget || event.target?.closest?.('button')
        if (btn) {
          const rect = btn.getBoundingClientRect()
          x = Math.round(rect.left + rect.width / 2)
          y = Math.round(rect.top + rect.height / 2)
        }
      }
    }

    const nextDark = !dark

    // Fallback if View Transitions not supported
    const isSupported =
      typeof document !== 'undefined' &&
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isSupported) {
      setDark(nextDark)
      if (nextDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      try {
        localStorage.setItem('acdyon-theme', nextDark ? 'dark' : 'light')
      } catch {}
      return
    }

    // Maximum diagonal distance from (x, y) to any screen corner
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    // Execute View Transition with synchronous React state update
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setDark(nextDark)
        if (nextDark) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      })
      try {
        localStorage.setItem('acdyon-theme', nextDark ? 'dark' : 'light')
      } catch {}
    })

    // Animate incoming theme view expanding in a circle from exact cursor click point
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 700,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
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
