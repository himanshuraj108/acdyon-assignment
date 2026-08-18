import { motion } from 'framer-motion'
import { ArrowRight, Brain, Code2, Lightbulb, BarChart3 } from 'lucide-react'

const programs = [
  {
    icon: Brain,
    category: 'AI & Machine Learning',
    description:
      'Build the skills at the foundation of every modern product. From core ML to production-grade model deployment.',
    duration: '6 months',
    level: 'Intermediate',
    color: 'indigo',
  },
  {
    icon: Code2,
    category: 'Software Engineering',
    description:
      'From fundamentals to scalable systems. Learn to ship software that holds up under real-world conditions.',
    duration: '5 months',
    level: 'All levels',
    color: 'violet',
  },
  {
    icon: Lightbulb,
    category: 'Product Strategy',
    description:
      "Learn to think like the people building what's next. Strategy, roadmapping, and the craft of product decisions.",
    duration: '4 months',
    level: 'Intermediate',
    color: 'amber',
  },
  {
    icon: BarChart3,
    category: 'Data & Analytics',
    description:
      'Turn data into decisions that move organizations forward. Practical analytics, visualization, and business impact.',
    duration: '4 months',
    level: 'Beginner-friendly',
    color: 'emerald',
  },
]

const colorMap = {
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/40',
    icon: 'text-indigo-600 dark:text-indigo-400',
    tag: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-400',
  },
  violet: {
    bg: 'bg-violet-50 dark:bg-violet-950/40',
    icon: 'text-violet-600 dark:text-violet-400',
    tag: 'bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-400',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-950/40',
    icon: 'text-amber-600 dark:text-amber-400',
    tag: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    icon: 'text-emerald-600 dark:text-emerald-400',
    tag: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400',
  },
}

function ProgramCard({ program, index }) {
  const c = colorMap[program.color]
  const Icon = program.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-gray-800/60 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/80 hover:border-gray-300 dark:hover:border-gray-600 shadow-card hover:shadow-card-hover transition-all duration-200 group cursor-default flex flex-col font-outfit"
    >
      <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center mb-5 flex-shrink-0`}>
        <Icon size={20} className={c.icon} strokeWidth={1.75} />
      </div>

      <div className="flex-1">
        <h3 className="font-heading font-semibold text-[17px] text-gray-900 dark:text-white mb-2 leading-snug">
          {program.category}
        </h3>
        <p className="text-[13.5px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5 font-normal">
          {program.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${c.tag}`}>
            {program.duration}
          </span>
          <span className="text-[11px] text-gray-400 dark:text-gray-600 font-normal">{program.level}</span>
        </div>
        <div className="flex items-center gap-1 text-[13px] font-medium text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all duration-200">
          Explore
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  )
}

export default function Programs() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-gray-950 section-divider font-outfit" id="programs">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[13px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3"
            >
              Programs
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="font-heading font-semibold text-[38px] sm:text-[44px] text-gray-900 dark:text-white leading-tight tracking-tight"
            >
              What you can build
              <br /> at AcdyOn.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm lg:text-right font-normal"
          >
            Every program is built around outcomes. You leave with skills the
            industry is actively hiring for — not a certificate that sits in a drawer.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((program, i) => (
            <ProgramCard key={program.category} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
