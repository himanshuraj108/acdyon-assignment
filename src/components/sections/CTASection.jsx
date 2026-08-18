import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const benefits = [
  'AI-personalized learning path from day one',
  'One-on-one sessions with a practitioner mentor',
  'Access to every program and project lab',
  'Portfolio review and career support',
]

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-[#090d1a] dark:bg-gray-950 relative overflow-hidden section-divider font-outfit" id="cta">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(at 20% 40%, rgba(37,99,235,0.18) 0px, transparent 55%), radial-gradient(at 80% 60%, rgba(99,102,241,0.14) 0px, transparent 55%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-semibold text-blue-400 uppercase tracking-widest mb-4"
        >
          Join AcdyOn
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="font-heading font-semibold text-[40px] sm:text-[50px] lg:text-[56px] text-white leading-tight tracking-tight mb-6"
        >
          Ready to build the career
          <br /> you were meant for?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-[16px] text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto font-normal"
        >
          Join the next cohort and experience a learning ecosystem built for
          ambitious people who want more than average outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-2 text-[13.5px] text-gray-300 font-normal">
              <CheckCircle size={14} className="text-blue-400 flex-shrink-0" />
              {b}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.22 }}
        >
          {submitted ? (
            <div className="inline-flex items-center gap-3 bg-blue-950/60 dark:bg-blue-900/30 border border-blue-800 dark:border-blue-800 rounded-2xl px-6 py-4">
              <CheckCircle size={20} className="text-emerald-400" />
              <div className="text-left">
                <div className="text-white font-semibold text-[15px]">
                  You are on the list.
                </div>
                <div className="text-gray-400 text-[13px]">
                  We will be in touch before the next cohort opens.
                </div>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work or personal email"
                required
                className="flex-1 px-4 py-3.5 rounded-full bg-white/10 dark:bg-white/5 border border-white/15 dark:border-white/10 text-white placeholder-gray-400 text-[14px] focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14px] transition-colors flex-shrink-0 shadow-md cursor-pointer"
              >
                Join the Waitlist
                <ArrowRight size={15} />
              </button>
            </form>
          )}
          <p className="mt-4 text-[12.5px] text-gray-400 font-normal">
            No spam. No sales calls. Just a heads-up when your cohort opens.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
