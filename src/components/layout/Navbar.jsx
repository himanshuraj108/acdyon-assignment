import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Programs', href: '#programs' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Community', href: '#community' },
]

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 group">
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-600 to-violet-700 flex items-center justify-center shadow-sm">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 13.5L8.5 3.5L13.5 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 10H11.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <span className="font-heading font-bold text-gray-900 text-[17px] tracking-tight">
        Acdyon
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-100/80 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[68px]">
            <Logo />

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-[14px] font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100/70 transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#"
                className="px-4 py-2 text-[14px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Sign in
              </a>
              <a
                href="#cta"
                className="px-4 py-2 text-[14px] font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-colors shadow-sm"
              >
                Get Started
              </a>
            </div>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-[68px] left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-lg md:hidden"
            >
              <div className="px-5 py-5 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 text-[15px] font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 mt-3 border-t border-gray-100 flex flex-col gap-2">
                  <a
                    href="#"
                    className="block px-4 py-3 text-[15px] font-medium text-gray-600 hover:text-gray-900 rounded-xl transition-colors"
                  >
                    Sign in
                  </a>
                  <a
                    href="#cta"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 text-[15px] font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl text-center transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
