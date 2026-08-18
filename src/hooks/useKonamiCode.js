import { useState, useEffect, useCallback } from 'react'

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

export function useKonamiCode() {
  const [activated, setActivated] = useState(false)
  const [progress, setProgress] = useState(0)

  const reset = useCallback(() => {
    setProgress(0)
    setActivated(false)
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === KONAMI[progress]) {
        const next = progress + 1
        if (next === KONAMI.length) {
          setActivated(true)
          setProgress(0)
        } else {
          setProgress(next)
        }
      } else {
        setProgress(e.key === KONAMI[0] ? 1 : 0)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [progress])

  return { activated, reset }
}
