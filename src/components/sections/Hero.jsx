import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Play, Check, ChevronRight, Lock, Sparkles } from 'lucide-react'
import { useEffect } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay },
})

const lessons = [
  { label: 'Activation Functions', status: 'done' },
  { label: 'Loss Functions', status: 'done' },
  { label: 'Backpropagation', status: 'current' },
  { label: 'Optimization Algorithms', status: 'locked' },
]

function LessonItem({ lesson }) {
  return (
    <div
      className={`flex items-center gap-2 text-[10.5px] leading-tight ${
        lesson.status === 'current'
          ? 'text-blue-600 dark:text-brand-400 font-semibold'
          : lesson.status === 'locked'
          ? 'text-gray-400 dark:text-gray-600'
          : 'text-gray-600 dark:text-gray-400'
      }`}
    >
      <div
        className={`w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center ${
          lesson.status === 'done'
            ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400'
            : lesson.status === 'current'
            ? 'bg-blue-100 dark:bg-brand-900/40 text-blue-600 dark:text-brand-400'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-300 dark:text-gray-600'
        }`}
      >
        {lesson.status === 'done' && <Check size={7} strokeWidth={3} />}
        {lesson.status === 'current' && <ChevronRight size={7} strokeWidth={3} />}
        {lesson.status === 'locked' && <Lock size={6} strokeWidth={2.5} />}
      </div>
      {lesson.label}
    </div>
  )
}

function DashboardMockup() {
  const barControls = useAnimation()

  useEffect(() => {
    const t = setTimeout(() => {
      barControls.start({ width: '64%', transition: { duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] } })
    }, 800)
    return () => clearTimeout(t)
  }, [barControls])

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900 w-full select-none">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 dark:bg-gray-900/90 border-b border-gray-200/80 dark:border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1">
          <div className="bg-white dark:bg-gray-800 rounded-md px-3 py-1 flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 max-w-[200px]">
            <div className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 flex-shrink-0" />
            <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono truncate">app.acdyon.com</span>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '110px 1fr 130px', minHeight: '300px' }}>
        <div className="bg-gray-50/70 dark:bg-gray-900/60 border-r border-gray-200/80 dark:border-gray-800 p-3">
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 8L5 2L8 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.2 6H6.8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-gray-800 dark:text-gray-200 font-outfit">AcdyOn</span>
          </div>
          {['Dashboard', 'My Courses', 'Mentors', 'Projects', 'Community'].map((item, i) => (
            <div
              key={item}
              className={`px-2 py-1.5 rounded-lg text-[10px] mb-0.5 cursor-pointer transition-colors font-outfit ${
                i === 1
                  ? 'bg-blue-50 dark:bg-brand-950/70 text-blue-700 dark:text-brand-300 font-semibold'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="p-4 overflow-hidden bg-white dark:bg-gray-900 font-outfit">
          <div className="flex items-center justify-between mb-1">
            <div>
              <div className="text-[11px] font-bold text-gray-900 dark:text-gray-100">ML Engineering Track</div>
              <div className="text-[10px] text-gray-500">Month 3 of 6</div>
            </div>
            <div className="text-[11px] font-bold text-blue-600 dark:text-brand-400">64%</div>
          </div>

          <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-3 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
              initial={{ width: '0%' }}
              animate={barControls}
            />
          </div>

          <div className="bg-slate-900 rounded-xl h-24 mb-3 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 to-indigo-950/80" />
            <div className="relative flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play size={9} className="text-white" style={{ marginLeft: '1px' }} />
              </div>
              <div>
                <div className="text-white text-[10px] font-medium">Neural Networks</div>
                <div className="text-slate-400 text-[9px]">24:35 remaining</div>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-bold text-gray-700 dark:text-gray-300 mb-2">Module 3: Deep Learning</div>
          <div className="space-y-1.5">
            {lessons.map((l) => (
              <LessonItem key={l.label} lesson={l} />
            ))}
          </div>
        </div>

        <div className="border-l border-gray-200/80 dark:border-gray-800 p-3 flex flex-col gap-2 bg-gray-50/50 dark:bg-gray-900/50 font-outfit">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
            <span className="text-[10px] font-semibold text-gray-700 dark:text-gray-300">AI Mentor</span>
          </div>

          <div className="bg-blue-50/80 dark:bg-brand-950/60 rounded-xl p-2 border border-blue-100/50 dark:border-brand-900/40">
            <p className="text-[9.5px] text-blue-900 dark:text-brand-200 leading-relaxed">
              You are ahead of schedule. Let's go deeper on backpropagation before Lesson 4.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-2 self-end w-full border border-gray-200/60 dark:border-gray-700/60 shadow-2xs">
            <p className="text-[9.5px] text-gray-700 dark:text-gray-200 leading-relaxed">
              Can you explain vanishing gradients?
            </p>
          </div>

          <div className="bg-blue-50/80 dark:bg-brand-950/60 rounded-xl p-2.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 typing-dot-1 inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 typing-dot-2 inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 typing-dot-3 inline-block" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-white dark:bg-gray-950 overflow-hidden bg-mesh" id="platform">
      <div
        className="absolute top-[-8%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[5%] left-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div>
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-900 text-blue-700 dark:text-blue-400 text-[13px] font-semibold tracking-wide uppercase mb-6 font-outfit">
                <Sparkles size={13} className="text-blue-600" />
                AI-Powered Learning Ecosystem
              </div>
            </motion.div>

            {/* Main Headline in Poppins (not bold) */}
            <motion.h1
              {...fadeUp(0.08)}
              className="font-poppins font-normal text-[46px] sm:text-[54px] lg:text-[58px] xl:text-[64px] leading-[1.12] tracking-tight text-gray-900 dark:text-white mb-6"
            >
              The Platform for{' '}
              <span className="text-gradient font-medium">Extraordinary</span>
              <br />
              Careers.
            </motion.h1>

            {/* Subtext in Poppins (not bold) */}
            <motion.p
              {...fadeUp(0.16)}
              className="font-poppins font-normal text-[16.5px] leading-[1.75] text-gray-600 dark:text-gray-300 max-w-[520px] mb-9"
            >
              AcdyOn blends AI-personalized curriculum with practitioner-led
              mentorship — helping ambitious learners and professionals build practical
              capabilities and strategic judgment for real-world impact.
            </motion.p>

            <motion.div {...fadeUp(0.22)} className="flex flex-wrap items-center gap-3 font-outfit">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-brand-600 dark:hover:bg-brand-700 rounded-full transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                Book Consultation
                <ArrowRight size={16} />
              </a>
              <a
                href="#platform-preview"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-200"
              >
                <Play size={14} className="text-gray-500 dark:text-gray-400" />
                Explore Platform
              </a>
            </motion.div>

            <motion.p
              {...fadeUp(0.28)}
              className="mt-8 text-[13.5px] text-gray-500 dark:text-gray-400 font-poppins font-normal"
            >
              Tailored for ambitious students, career-switchers, and working professionals.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="relative"
          >
            <DashboardMockup />
            <div
              className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.09), rgba(99,102,241,0.06))' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
