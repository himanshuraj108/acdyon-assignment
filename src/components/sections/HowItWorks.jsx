import { motion } from 'framer-motion'
import { Compass, BookOpen, Zap } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Compass,
    title: 'Map Your Path',
    description:
      "Share your goals, current skills, and where you want to be in 12 months. AcdyOn's AI builds a personalized roadmap from day one — not a generic curriculum.",
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Learn With Intention',
    description:
      'AI-curated lessons that adapt in real time, practitioner mentors who have done the work, and projects that build your portfolio while you learn.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Build and Apply',
    description:
      'Ship real projects. Receive feedback from mentors who work in the industry. Graduate with the skills, judgment, and portfolio that actually get you hired.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50/60 dark:bg-gray-900 section-divider" id="mentors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-3"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="font-heading font-black text-[38px] sm:text-[44px] text-gray-900 dark:text-white leading-tight mb-4"
          >
            Three steps to the career
            <br /> you are building toward.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-[16px] text-gray-500 dark:text-gray-400 leading-relaxed"
          >
            A simple structure, an ambitious outcome. AcdyOn is designed to get
            you from where you are to where you want to be — without the noise.
          </motion.p>
        </div>

        <div className="relative">
          <div
            className="absolute top-[52px] left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] h-px hidden lg:block"
            style={{
              backgroundImage:
                'linear-gradient(to right, transparent, #e5e7eb 10%, #e5e7eb 90%, transparent)',
            }}
          />
          <div
            className="absolute top-[52px] left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] h-px hidden lg:dark:block"
            style={{
              backgroundImage:
                'linear-gradient(to right, transparent, rgba(55,65,81,0.8) 10%, rgba(55,65,81,0.8) 90%, transparent)',
            }}
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.12 }}
                  className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-card flex items-center justify-center">
                      <Icon size={22} className="text-brand-600 dark:text-brand-400" strokeWidth={1.75} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center">
                      <span className="font-heading font-black text-[9px] text-white">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-[20px] text-gray-900 dark:text-white mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[14.5px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
