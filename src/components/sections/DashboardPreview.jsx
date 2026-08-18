import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Check, ChevronRight, Lock, MessageSquare, BarChart3, BookOpen } from 'lucide-react'

const sidebarItems = ['Dashboard', 'My Courses', 'Mentors', 'Projects', 'Analytics', 'Settings']

const modules = [
  { name: 'Python Foundations', done: true },
  { name: 'Data Structures', done: true },
  { name: 'Machine Learning Core', done: true },
  { name: 'Neural Networks', current: true },
  { name: 'Production Systems', locked: true },
  { name: 'Capstone Project', locked: true },
]

const chatMessages = [
  { from: 'ai', text: 'Your last quiz score puts you in the top 12% of this cohort. Ready to level up?' },
  { from: 'user', text: 'Yes — what should I focus on first in neural networks?' },
  { from: 'ai', text: 'Start with the math behind backpropagation. I have a 20-minute explainer built for your learning style.' },
]

function ModuleRow({ mod }) {
  return (
    <div
      className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-[11px] ${
        mod.current
          ? 'bg-blue-50 dark:bg-brand-950/50 border border-blue-100 dark:border-brand-900/60'
          : mod.locked
          ? 'opacity-40'
          : ''
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
            mod.done
              ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400'
              : mod.current
              ? 'bg-blue-100 dark:bg-brand-900/40 text-blue-600 dark:text-brand-400'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-300 dark:text-gray-600'
          }`}
        >
          {mod.done && <Check size={8} strokeWidth={3} />}
          {mod.current && <ChevronRight size={8} strokeWidth={3} />}
          {mod.locked && <Lock size={7} strokeWidth={2.5} />}
        </div>
        <span
          className={`font-medium ${
            mod.current
              ? 'text-blue-700 dark:text-brand-300'
              : mod.done
              ? 'text-gray-600 dark:text-gray-400'
              : 'text-gray-400 dark:text-gray-600'
          }`}
        >
          {mod.name}
        </span>
      </div>
      {mod.current && (
        <span className="text-[9px] font-semibold text-blue-600 dark:text-brand-400 bg-blue-50 dark:bg-brand-950/60 px-1.5 py-0.5 rounded-full border border-blue-100 dark:border-brand-900">
          In Progress
        </span>
      )}
      {mod.done && (
        <span className="text-[9px] font-medium text-emerald-600 dark:text-emerald-400">Done</span>
      )}
    </div>
  )
}

function ChatMessage({ msg, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 + index * 0.15, duration: 0.4 }}
      className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[85%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed ${
          msg.from === 'ai'
            ? 'bg-blue-50 dark:bg-brand-950/50 text-blue-900 dark:text-brand-300 rounded-tl-sm'
            : 'bg-gray-900 dark:bg-gray-700 text-white rounded-tr-sm'
        }`}
      >
        {msg.text}
      </div>
    </motion.div>
  )
}

export default function DashboardPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const barControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      barControls.start({
        width: '72%',
        transition: { duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 },
      })
    }
  }, [isInView, barControls])

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-gray-950 section-divider font-outfit" id="platform-preview">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[13px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3"
            >
              The Platform
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="font-heading font-semibold text-[38px] sm:text-[44px] text-gray-900 dark:text-white leading-tight mb-5 tracking-tight"
            >
              A learning environment
              <br />built for{' '}
              <span className="text-gradient font-semibold">deep focus.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-[16px] text-gray-500 dark:text-gray-400 leading-relaxed mb-8 font-normal"
            >
              No distractions. No bloated course catalogues. AcdyOn surfaces exactly
              what you need next, gives you an AI mentor who knows where you are,
              and tracks your progress against the outcomes that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="space-y-4"
            >
              {[
                { icon: BarChart3, label: 'Live progress tracking across every module' },
                { icon: MessageSquare, label: 'AI mentor available at every step, not just office hours' },
                { icon: BookOpen, label: 'Curriculum that adjusts based on what you actually understand' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-[14.5px] text-gray-600 dark:text-gray-400 font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900 select-none">
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="bg-white dark:bg-gray-700 rounded-md px-3 py-1 flex items-center gap-2 border border-gray-200 dark:border-gray-600 max-w-[220px]">
                    <div className="w-2.5 h-2.5 rounded-full border border-gray-300 dark:border-gray-500" />
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">app.acdyon.com/courses</span>
                  </div>
                </div>
              </div>

              <div className="grid" style={{ gridTemplateColumns: '130px 1fr 180px' }}>
                <div className="bg-gray-50/80 dark:bg-gray-800/60 border-r border-gray-200 dark:border-gray-700 p-3.5">
                  <div className="flex items-center gap-1.5 mb-5">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 9.5L6 2.5L9.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.8 7.2H8.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-[12px] font-semibold text-gray-800 dark:text-gray-200">AcdyOn</span>
                  </div>
                  {sidebarItems.map((item, i) => (
                    <div
                      key={item}
                      className={`px-2.5 py-2 rounded-lg text-[11px] mb-0.5 cursor-pointer transition-colors ${
                        i === 1
                          ? 'bg-blue-50 dark:bg-brand-950/60 text-blue-700 dark:text-brand-300 font-semibold'
                          : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="p-4">
                  <div className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 mb-0.5">ML Engineering</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-500 mb-3">6 modules · 48 lessons · 3 projects</div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-gray-500 dark:text-gray-500">Overall Progress</span>
                    <span className="text-[10px] font-semibold text-blue-600 dark:text-brand-400">72%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full mb-4 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                      initial={{ width: '0%' }}
                      animate={barControls}
                    />
                  </div>
                  <div className="space-y-1">
                    {modules.map((mod) => (
                      <ModuleRow key={mod.name} mod={mod} />
                    ))}
                  </div>
                </div>

                <div className="border-l border-gray-200 dark:border-gray-700 flex flex-col">
                  <div className="px-3.5 py-3 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300">AI Mentor</span>
                  </div>
                  <div className="flex-1 p-3 space-y-2.5 overflow-hidden">
                    {chatMessages.map((msg, i) => (
                      <ChatMessage key={i} msg={msg} index={i} />
                    ))}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                      className="flex justify-start"
                    >
                      <div className="bg-blue-50 dark:bg-brand-950/50 rounded-2xl rounded-tl-sm px-3 py-2 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 typing-dot-1 inline-block" />
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 typing-dot-2 inline-block" />
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 typing-dot-3 inline-block" />
                      </div>
                    </motion.div>
                  </div>
                  <div className="px-3 py-2.5 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl px-3 py-2">
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 flex-1">Ask your mentor...</span>
                      <div className="w-5 h-5 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <ChevronRight size={10} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-5 -left-5 -z-10 w-full h-full rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.06), rgba(79,70,229,0.04))' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
