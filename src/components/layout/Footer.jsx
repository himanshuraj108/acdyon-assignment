import { Twitter, Linkedin, Github } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'Features', href: '#platform' },
    { label: 'Dashboard', href: '#platform-preview' },
    { label: 'AI Mentor', href: '#platform-preview' },
    { label: 'Progress Tracking', href: '#platform-preview' },
  ],
  Programs: [
    { label: 'AI & ML', href: '#programs' },
    { label: 'Software Engineering', href: '#programs' },
    { label: 'Product Strategy', href: '#programs' },
    { label: 'Data & Analytics', href: '#programs' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
}

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-14">
          <div className="sm:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-4 group select-none">
              <div className="w-9 h-9 rounded-xl bg-[#090d1a] border border-gray-800/80 flex items-center justify-center shadow-sm group-hover:border-blue-500/50 transition-colors">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6L7 24H11.5L16 14.5L20.5 24H25L16 6Z" fill="url(#footerBrandGrad)" />
                  <path d="M12 20.5H20" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="16" cy="10.5" r="1.5" fill="#60a5fa" />
                  <defs>
                    <linearGradient id="footerBrandGrad" x1="7" y1="6" x2="25" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#60a5fa" />
                      <stop offset="0.5" stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-heading font-extrabold text-gray-900 dark:text-white text-[19px] tracking-tight">
                Acdy<span className="text-blue-600 dark:text-blue-400">On</span>
              </span>
            </a>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-[280px] mb-6 font-normal">
              A next-generation learning ecosystem for people who want to build
              extraordinary careers.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-150"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-heading font-semibold text-[13px] text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-normal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 pt-6 sm:pt-7 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 font-normal text-center sm:text-left">
          <p className="text-[13px] text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} AcdyOn Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[13px] text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[13px] text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
