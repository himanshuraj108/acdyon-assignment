import { useState, useEffect, useRef } from 'react'
import { Menu, X, Sun, Moon, ChevronDown, ChevronRight, Sparkles } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const programItems = [
  {
    title: 'Agentic AI & Automation Mastery',
    description: 'Build AI agents, automate workflows, and deploy real projects.',
    href: '#programs',
  },
  {
    title: 'Cybersecurity & AI Mastery',
    description: 'Industry-focused cybersecurity training with career acceleration.',
    href: '#programs',
  },
  {
    title: 'AI for Business Leaders',
    description: 'Strategic AI decision-making for executives and founders.',
    href: '#programs',
  },
  {
    title: 'Corporate Training',
    description: 'Custom AI and leadership learning for organisations.',
    href: '#programs',
  },
]

const doctoralCategories = [
  {
    id: 'dba',
    name: 'DBA',
    programs: [
      {
        title: 'Kennedy University DBA',
        description: 'US-based prestigious DBA programme.',
      },
      {
        title: 'Dunster Business School DBA',
        description: 'Swiss QS 4-Star DBA with international reach.',
      },
      {
        title: 'LSMT DBA',
        description: 'London-based research-driven DBA programme.',
      },
      {
        title: 'EIMT DBA',
        description: 'Swiss innovation-focused DBA for executives.',
      },
      {
        title: 'Birchwood DBA',
        description: 'Accelerated 2-year US executive DBA.',
      },
    ],
  },
  {
    id: 'phd',
    name: 'PhD',
    programs: [
      {
        title: 'Executive PhD in Computer Science',
        description: 'Advanced research in machine learning and distributed systems.',
      },
      {
        title: 'PhD in Management & Innovation',
        description: 'Doctoral research for senior industry leaders and strategists.',
      },
    ],
  },
  {
    id: 'honorary',
    name: 'Honorary Doctorate',
    programs: [
      {
        title: 'Distinguished Leadership Award',
        description: 'Recognition for exemplary contributions to global industry.',
      },
      {
        title: 'Honorary Fellowship in AI',
        description: 'Honorary doctorate in recognition of pioneering tech leadership.',
      },
    ],
  },
  {
    id: 'overview',
    name: 'Overview',
    programs: [
      {
        title: 'Pathway Consultation',
        description: 'Comprehensive guided evaluation of your academic eligibility.',
      },
      {
        title: 'Accreditation & Recognition',
        description: 'Global recognition details across US, UK, and European frameworks.',
      },
    ],
  },
  {
    id: 'upgrad-leadership',
    name: 'upGrad: Leadership & AI',
    programs: [
      {
        title: 'Global Leadership Certificate',
        description: 'Executive leadership with integrated applied AI strategy.',
      },
    ],
  },
  {
    id: 'upgrad-doctorate',
    name: 'upGrad: Doctorate (DBA)',
    programs: [
      {
        title: 'upGrad Dual DBA Pathway',
        description: 'Globally recognized terminal degree for working executives.',
      },
    ],
  },
]

const universityItems = [
  {
    title: 'Partner Universities',
    description: 'Explore the global academic network.',
    href: '#platform',
  },
  {
    title: 'Academic Recognition',
    description: 'Understanding international positioning and fit.',
    href: '#platform',
  },
  {
    title: 'Global Network',
    description: 'Geographic reach and regional pathways.',
    href: '#platform',
  },
]

const resourceItems = [
  {
    title: 'Blogs',
    description: 'Insights on AI, education, and academic advancement.',
    href: '#',
  },
  {
    title: 'Brochures',
    description: 'Detailed program brochures and guides.',
    href: '#',
  },
  {
    title: 'Events',
    description: 'Webinars, open days, and information sessions.',
    href: '#',
  },
  {
    title: 'Scholarship Calculator',
    description: 'Estimate your indicative scholarship and net fee.',
    href: '#',
  },
]

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 group select-none">
      <div className="w-9 h-9 rounded-xl bg-[#090d1a] border border-gray-800/80 flex items-center justify-center shadow-sm group-hover:border-blue-500/50 transition-colors">
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 6L7 24H11.5L16 14.5L20.5 24H25L16 6Z" fill="url(#navBrandGrad)" />
          <path d="M12 20.5H20" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="16" cy="10.5" r="1.5" fill="#60a5fa" />
          <defs>
            <linearGradient id="navBrandGrad" x1="7" y1="6" x2="25" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60a5fa" />
              <stop offset="0.5" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex items-baseline">
        <span className="font-heading font-extrabold text-gray-900 dark:text-white text-[19px] tracking-tight">
          Acdy<span className="text-blue-600 dark:text-blue-400">On</span>
        </span>
      </div>
    </a>
  )
}

function ThemeToggle() {
  const { dark, toggle } = useTheme()
  return (
    <button
      onClick={(e) => toggle(e)}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all shadow-sm cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={dark ? 'dark' : 'light'}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
        >
          {dark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-gray-700" />}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeDoctoralCategory, setActiveDoctoralCategory] = useState(doctoralCategories[0])

  const timeoutRef = useRef(null)

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 180)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-outfit ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/80 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">
            <Logo />

            <nav className="hidden md:flex items-center gap-1">
              <a
                href="#"
                className="px-3 py-2 text-[14.5px] font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                Home
              </a>

              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('programs')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'programs' ? null : 'programs')}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-[14.5px] font-medium rounded-lg transition-all ${
                    activeDropdown === 'programs'
                      ? 'text-blue-600 dark:text-white bg-blue-50/60 dark:bg-gray-800'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  Programs
                  <motion.span
                    animate={{ rotate: activeDropdown === 'programs' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={14} className="opacity-70" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'programs' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute top-[calc(100%+6px)] left-0 w-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-gray-900 z-[100]"
                    >
                      <div className="bg-[#090d1a] dark:bg-[#070913] p-5 border-b border-gray-800/80">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles size={14} className="text-amber-400" />
                          <span className="text-[12px] font-extrabold uppercase tracking-widest text-amber-400 font-heading">
                            Programs
                          </span>
                        </div>
                        <p className="text-[13px] text-gray-300 leading-relaxed">
                          Executive education, AI mastery, and professional development programmes.
                        </p>
                      </div>

                      <div className="p-2 space-y-1 bg-white dark:bg-gray-900">
                        {programItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-all group"
                          >
                            <div className="font-heading font-bold text-[14.5px] text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[12.5px] text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5 font-normal">
                              {item.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Doctoral 2-Column Nested Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('doctoral')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'doctoral' ? null : 'doctoral')}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-[14.5px] font-medium rounded-lg transition-all ${
                    activeDropdown === 'doctoral'
                      ? 'text-blue-600 dark:text-white bg-blue-50/60 dark:bg-gray-800'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  Doctoral
                  <motion.span
                    animate={{ rotate: activeDropdown === 'doctoral' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={14} className="opacity-70" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'doctoral' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute top-[calc(100%+6px)] left-[-100px] w-[580px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-gray-900 z-[100]"
                    >
                      <div className="bg-[#090d1a] dark:bg-[#070913] p-5 border-b border-gray-800/80">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles size={14} className="text-amber-400" />
                          <span className="text-[12px] font-extrabold uppercase tracking-widest text-amber-400 font-heading">
                            Doctoral
                          </span>
                        </div>
                        <p className="text-[13px] text-gray-300 leading-relaxed">
                          Doctoral pathways and honorary recognition from globally accredited institutions.
                        </p>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] divide-x divide-gray-100 dark:divide-gray-800 min-h-[290px] bg-white dark:bg-gray-900">
                        <div className="p-2 space-y-1 bg-gray-50/50 dark:bg-gray-900/50">
                          {doctoralCategories.map((cat) => {
                            const isActive = activeDoctoralCategory.id === cat.id
                            return (
                              <button
                                key={cat.id}
                                onMouseEnter={() => setActiveDoctoralCategory(cat)}
                                onClick={() => setActiveDoctoralCategory(cat)}
                                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13.5px] font-semibold text-left transition-all ${
                                  isActive
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/70'
                                }`}
                              >
                                <span>{cat.name}</span>
                                <ChevronRight size={13} className={isActive ? 'text-white' : 'text-gray-400'} />
                              </button>
                            )
                          })}
                        </div>

                        <div className="p-3 space-y-1 bg-white dark:bg-gray-900 overflow-y-auto max-h-[320px]">
                          {activeDoctoralCategory.programs.map((item) => (
                            <a
                              key={item.title}
                              href="#programs"
                              onClick={() => setActiveDropdown(null)}
                              className="block p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-all group"
                            >
                              <div className="font-heading font-bold text-[14px] text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {item.title}
                              </div>
                              <div className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5 font-normal">
                                {item.description}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Universities Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('universities')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'universities' ? null : 'universities')}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-[14.5px] font-medium rounded-lg transition-all ${
                    activeDropdown === 'universities'
                      ? 'text-blue-600 dark:text-white bg-blue-50/60 dark:bg-gray-800'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  Universities
                  <motion.span
                    animate={{ rotate: activeDropdown === 'universities' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={14} className="opacity-70" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'universities' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute top-[calc(100%+6px)] left-[-60px] w-[360px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-gray-900 z-[100]"
                    >
                      <div className="bg-[#090d1a] dark:bg-[#070913] p-5 border-b border-gray-800/80">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles size={14} className="text-amber-400" />
                          <span className="text-[12px] font-extrabold uppercase tracking-widest text-amber-400 font-heading">
                            Universities
                          </span>
                        </div>
                        <p className="text-[13px] text-gray-300 leading-relaxed">
                          International pathways, verification, and academic clarity.
                        </p>
                      </div>

                      <div className="p-2 space-y-1 bg-white dark:bg-gray-900">
                        {universityItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-all group"
                          >
                            <div className="font-heading font-bold text-[14.5px] text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[12.5px] text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5 font-normal">
                              {item.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-[14.5px] font-medium rounded-lg transition-all ${
                    activeDropdown === 'resources'
                      ? 'text-blue-600 dark:text-white bg-blue-50/60 dark:bg-gray-800'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  Resources
                  <motion.span
                    animate={{ rotate: activeDropdown === 'resources' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={14} className="opacity-70" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute top-[calc(100%+6px)] left-[-80px] w-[360px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-gray-900 z-[100]"
                    >
                      <div className="bg-[#090d1a] dark:bg-[#070913] p-5 border-b border-gray-800/80">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles size={14} className="text-amber-400" />
                          <span className="text-[12px] font-extrabold uppercase tracking-widest text-amber-400 font-heading">
                            Resources
                          </span>
                        </div>
                        <p className="text-[13px] text-gray-300 leading-relaxed">
                          Insights, guides, and tools for navigating your learning journey.
                        </p>
                      </div>

                      <div className="p-2 space-y-1 bg-white dark:bg-gray-900">
                        {resourceItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-all group"
                          >
                            <div className="font-heading font-bold text-[14.5px] text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[12.5px] text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5 font-normal">
                              {item.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#mentors"
                className="px-3 py-2 text-[14.5px] font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                About
              </a>
              <a
                href="#cta"
                className="px-3 py-2 text-[14.5px] font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#"
                className="px-4 py-2 text-[14.5px] font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                Sign in
              </a>
              <a
                href="#cta"
                className="px-5 py-2.5 text-[14px] font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-brand-600 dark:hover:bg-brand-700 rounded-full transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/30"
              >
                Book Consultation &rarr;
              </a>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-[72px] left-0 right-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 shadow-xl md:hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="px-5 py-5 space-y-1">
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 text-[15px] font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
                >
                  Home
                </a>

                {/* Mobile Programs List */}
                <div className="py-2">
                  <div className="px-4 py-1 text-[12px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Programs
                  </div>
                  {programItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 text-[14px] font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>

                {/* Mobile Universities List */}
                <div className="py-2">
                  <div className="px-4 py-1 text-[12px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Universities
                  </div>
                  {universityItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 text-[14px] font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>

                {/* Mobile Resources List */}
                <div className="py-2">
                  <div className="px-4 py-1 text-[12px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Resources
                  </div>
                  {resourceItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 text-[14px] font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>

                <a
                  href="#faq"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 text-[15px] font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="#mentors"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 text-[15px] font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
                >
                  About
                </a>

                <div className="pt-3 mt-3 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2">
                  <a
                    href="#"
                    className="block px-4 py-3 text-[15px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-xl transition-colors"
                  >
                    Sign in
                  </a>
                  <a
                    href="#cta"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 text-[15px] font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-brand-600 rounded-full text-center transition-colors shadow-md"
                  >
                    Book Consultation &rarr;
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
