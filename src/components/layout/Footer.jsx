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
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-600 to-violet-700 flex items-center justify-center">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path
                    d="M3.5 13.5L8.5 3.5L13.5 13.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M5.5 10H11.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-heading font-bold text-gray-900 text-[17px] tracking-tight">
                Acdyon
              </span>
            </a>
            <p className="text-[14px] text-gray-500 leading-relaxed max-w-[260px] mb-6">
              A next-generation learning ecosystem for people who want to build
              extraordinary careers.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-150"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-heading font-semibold text-[13px] text-gray-900 uppercase tracking-wider mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-7 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-gray-400">
            &copy; {new Date().getFullYear()} Acdyon Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[13px] text-gray-400 hover:text-gray-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[13px] text-gray-400 hover:text-gray-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
