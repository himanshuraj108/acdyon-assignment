import { motion } from 'framer-motion'
import { Zap, Users, Target, Code2 } from 'lucide-react'

const features = [
  {
    icon: Zap,
    color: 'indigo',
    title: 'AI-Personalized Curriculum',
    description:
      'Your learning path adapts to how fast you grow — not to a fixed syllabus. AcdyOn reads your progress and reshapes the next lesson in real time.',
  },
  {
    icon: Users,
    color: 'violet',
    title: 'Practitioner Mentorship',
    description:
      'Learn from people who have shipped real products, not just taught about them. Every mentor is a working professional in the field you are studying.',
  },
  {
    icon: Target,
    color: 'cyan',
    title: 'Outcome-Driven Paths',
    description:
      'Every lesson, project, and module connects to a skill the industry is actively hiring for. No filler, no padding — only what moves your career forward.',
  },
  {
    icon: Code2,
    color: 'emerald',
    title: 'Real-World Projects',
    description:
      'Graduate with a portfolio of work you actually shipped. Not a stack of certificates — a body of work that speaks louder than any degree.',
  },
]

const colorMap = {
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/40',
    icon: 'text-indigo-600 dark:text-indigo-400',
    border: 'hover:border-indigo-200 dark:hover:border-indigo-800',
  },
  violet: {
    bg: 'bg-violet-50 dark:bg-violet-950/40',
    icon: 'text-violet-600 dark:text-violet-400',
    border: 'hover:border-violet-200 dark:hover:border-violet-800',
  },
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-950/40',
    icon: 'text-cyan-600 dark:text-cyan-400',
    border: 'hover:border-cyan-200 dark:hover:border-cyan-800',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    icon: 'text-emerald-600 dark:text-emerald-400',
    border: 'hover:border-emerald-200 dark:hover:border-emerald-800',
  },
}

function FeatureCard({ feature, index }) {
  const c = colorMap[feature.color]
  const Icon = feature.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`bg-white dark:bg-gray-800/60 rounded-2xl p-7 border border-gray-200 dark:border-gray-700/80 ${c.border} transition-all duration-200 shadow-card hover:shadow-card-hover cursor-default font-outfit`}
    >
      <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>
        <Icon size={20} className={c.icon} strokeWidth={1.75} />
      </div>
      <h3 className="font-heading font-semibold text-[17.5px] text-gray-900 dark:text-white mb-3 leading-snug">
        {feature.title}
      </h3>
      <p className="text-[14.5px] text-gray-500 dark:text-gray-400 leading-relaxed font-normal">{feature.description}</p>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50/60 dark:bg-gray-900 section-divider font-outfit" id="platform">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3"
          >
            Why AcdyOn
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="font-heading font-semibold text-[38px] sm:text-[44px] text-gray-900 dark:text-white leading-tight mb-5 tracking-tight"
          >
            Learning that keeps up
            <br className="hidden sm:block" /> with you.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-[16px] text-gray-500 dark:text-gray-400 leading-relaxed font-normal"
          >
            Traditional education moves on a fixed schedule. AcdyOn moves with
            you — adapting every layer of the experience to how you actually learn.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
