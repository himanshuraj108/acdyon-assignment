import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What exactly is an honorary doctorate?',
    answer:
      'An honorary doctorate is a prestigious recognition awarded by globally accredited universities to individuals who have made extraordinary contributions to their field, industry, or society, without requiring a traditional dissertation thesis.',
  },
  {
    question: 'Am I eligible for an honorary doctorate or DBA?',
    answer:
      'Eligibility is assessed based on your professional track record, leadership impact, industry contributions, and career achievements. Our guided eligibility consultation evaluates your credentials against partner university standards.',
  },
  {
    question: 'How is an honorary doctorate different from a regular doctorate?',
    answer:
      'A regular doctorate (like a PhD or DBA) requires multi-year structured academic coursework and research. An honorary doctorate is granted in recognition of real-world accomplishments and leadership distinction.',
  },
  {
    question: 'Can I use the title "Dr." with an honorary doctorate?',
    answer:
      'Yes, recipients are customarily addressed with the honorary title "Dr. (h.c.)" in professional and ceremonial contexts according to the issuing institution’s guidelines and regional protocol.',
  },
  {
    question: 'How long does the recognition process take?',
    answer:
      'The verification, university committee review, and conferral process typically takes between 4 to 8 weeks depending on document validation and the university graduation calendar.',
  },
  {
    question: 'Do I need a university degree to be eligible?',
    answer:
      'While a prior undergraduate or master’s degree is advantageous, extensive leadership experience and substantial industry impact can also form the basis of eligibility assessment.',
  },
  {
    question: 'Which institution should I choose?',
    answer:
      'The choice depends on your geographic focus, career trajectory, and academic alignment. Our admissions advisors will map your profile to US, UK, or European accredited institutions.',
  },
  {
    question: 'Is an honorary doctorate recognized internationally?',
    answer:
      'Yes, all partner institutions are officially accredited and recognized under their respective national education frameworks and international cross-border agreements.',
  },
]

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-gray-900/90 shadow-2xs hover:border-gray-300 dark:hover:border-gray-700 transition-all"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors cursor-pointer group"
      >
        <span className="font-heading font-semibold text-[16px] sm:text-[17px] text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/60 group-hover:text-blue-600 transition-colors"
        >
          <ChevronDown size={17} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-5 sm:px-6 pb-6 pt-1 text-[14.5px] text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800/80">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-24 lg:py-32 bg-gray-50/50 dark:bg-gray-950 section-divider" id="faq">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-900 text-blue-700 dark:text-blue-400 text-[12.5px] font-semibold tracking-wider uppercase mb-4 font-outfit"
          >
            <HelpCircle size={13} className="text-blue-600" />
            Common Questions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-heading font-black text-[36px] sm:text-[44px] text-gray-900 dark:text-white leading-tight mb-4 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[16px] text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
          >
            Everything you need to know about academic pathways and honorary recognition before beginning your journey.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
