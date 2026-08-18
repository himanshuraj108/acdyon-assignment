import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Terminal } from 'lucide-react'
import { useKonamiCode } from '../../hooks/useKonamiCode'

const lines = [
  '> initializing developer mode...',
  '> loading unreleased features...',
  '> bypassing waitlist...',
  '> access granted.',
  '',
  'Nice. You actually know the Konami code.',
  'We like you already.',
]

export default function EasterEgg() {
  const { activated, reset } = useKonamiCode()

  useEffect(() => {
    if (activated) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activated])

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(10, 10, 20, 0.96)' }}
          onClick={reset}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#0d0d1a', border: '1px solid rgba(99,102,241,0.3)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ backgroundColor: '#161628', borderBottom: '1px solid rgba(99,102,241,0.2)' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-1.5 text-indigo-400">
                  <Terminal size={13} />
                  <span className="text-xs font-mono font-medium">acdyon — developer terminal</span>
                </div>
              </div>
              <button
                onClick={reset}
                className="text-gray-600 hover:text-gray-400 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-6 font-mono text-sm space-y-2">
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.3 }}
                  className={
                    line.startsWith('>')
                      ? 'text-indigo-400'
                      : line === ''
                      ? 'h-3'
                      : 'text-gray-200 font-sans'
                  }
                >
                  {line || '\u00A0'}
                </motion.p>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: lines.length * 0.12 + 0.2 }}
                className="pt-4 border-t flex items-center justify-between"
                style={{ borderColor: 'rgba(99,102,241,0.2)' }}
              >
                <span className="text-xs text-gray-600 font-sans">Press anywhere to close</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-indigo-500 font-medium">KONAMI UNLOCKED</span>
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse-dot" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
