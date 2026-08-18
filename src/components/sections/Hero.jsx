import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Play, Check, ChevronRight, Lock } from 'lucide-react'
import { useEffect } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
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
      className={`flex items-center gap-2 text-[10px] leading-tight ${
        lesson.status === 'current'
          ? 'text-brand-600 font-semibold'
          : lesson.status === 'locked'
          ? 'text-gray-300'
          : 'text-gray-500'
      }`}
    >
      <div
        className={`w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center ${
          lesson.status === 'done'
            ? 'bg-emerald-100 text-emerald-600'
            : lesson.status === 'current'
            ? 'bg-brand-100 text-brand-600'
            : 'bg-gray-100 text-gray-300'
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
    }, 900)
    return () => clearTimeout(t)
  }, [barControls])

  return (
    <div className="rounded-2xl overflow-hidden shadow-mockup border border-gray-200/80 bg-white w-full select-none">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1">
          <div className="bg-white rounded-md px-3 py-1 flex items-center gap-1.5 border border-gray-200 max-w-[200px]">
            <div className="w-2 h-2 rounded-full border border-gray-400 flex-shrink-0" />
            <span className="text-[10px] text-gray-500 font-mono truncate">app.acdyon.com</span>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '110px 1fr 130px', minHeight: '300px' }}>
        <div className="bg-gray-50/80 border-r border-gray-200 p-3">
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-brand-600 to-violet-700 flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 8L5 2L8 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.2 6H6.8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[11px] font-semibold text-gray-800">Acdyon</span>
          </div>
          {['Dashboard', 'My Courses', 'Mentors', 'Projects', 'Community'].map((item, i) => (
            <div
              key={item}
              className={`px-2 py-1.5 rounded-lg text-[10px] mb-0.5 cursor-pointer transition-colors ${
                i === 1
                  ? 'bg-brand-50 text-brand-700 font-semibold'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="p-4 overflow-hidden">
          <div className="flex items-center justify-between mb-1">
            <div>
              <div className="text-[11px] font-semibold text-gray-800">ML Engineering Track</div>
              <div className="text-[10px] text-gray-500">Month 3 of 6</div>
            </div>
            <div className="text-[11px] font-bold text-brand-600">64%</div>
          </div>

          <div className="h-1.5 bg-gray-100 rounded-full mb-3 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-500"
              initial={{ width: '0%' }}
              animate={barControls}
            />
          </div>

          <div className="bg-gray-900 rounded-xl h-24 mb-3 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-900/60 to-violet-900/60" />
            <div className="relative flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play size={9} className="text-white" style={{ marginLeft: '1px' }} />
              </div>
              <div>
                <div className="text-white text-[10px] font-medium">Neural Networks</div>
                <div className="text-gray-400 text-[9px]">24:35 remaining</div>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-semibold text-gray-600 mb-2">Module 3: Deep Learning</div>
          <div className="space-y-1.5">
            {lessons.map((l) => (
              <LessonItem key={l.label} lesson={l} />
            ))}
          </div>
        </div>

        <div className="border-l border-gray-200 p-3 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
            <span className="text-[10px] font-semibold text-gray-700">AI Mentor</span>
          </div>

          <div className="bg-brand-50 rounded-xl p-2">
            <p className="text-[9px] text-brand-800 leading-relaxed">
              You are ahead of schedule. Let's go deeper on backpropagation before Lesson 4.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-2 self-end w-full">
            <p className="text-[9px] text-gray-700 leading-relaxed">
              Can you explain vanishing gradients?
            </p>
          </div>

          <div className="bg-brand-50 rounded-xl p-2.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 typing-dot-1 inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 typing-dot-2 inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 typing-dot-3 inline-block" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden bg-mesh" id="platform">
      <div
        className="absolute top-[-10%] right-[-5%] w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          <div>
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-[13px] font-medium mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
                AI-Powered Learning Platform
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="font-heading text-[48px] sm:text-[56px] lg:text-[60px] xl:text-[66px] font-black leading-[1.04] tracking-tight text-gray-900 mb-6"
            >
              The Platform for{' '}
              <span className="text-gradient">Extraordinary</span>
              <br />
              Careers.
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="text-[17px] leading-[1.7] text-gray-500 max-w-[500px] mb-10"
            >
              AcdyOn blends AI-personalized curriculum with practitioner-led
              mentorship — so you don't just learn skills, you build the judgment
              to use them at the highest level.
            </motion.p>

            <motion.div {...fadeUp(0.22)} className="flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-px"
              >
                Start Free Trial
                <ArrowRight size={16} />
              </a>
              <a
                href="#platform-preview"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200"
              >
                <Play size={14} className="text-gray-500" />
                See It in Action
              </a>
            </motion.div>

            <motion.p
              {...fadeUp(0.28)}
              className="mt-8 text-[13px] text-gray-400 font-medium"
            >
              Designed for working professionals, career-changers, and ambitious students.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="relative animate-float"
          >
            <DashboardMockup />
            <div
              className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(124,58,237,0.06))' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
