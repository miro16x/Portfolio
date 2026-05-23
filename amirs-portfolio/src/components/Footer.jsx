import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/miro16x', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/amir-salem-b91365381', label: 'LinkedIn' },
  { icon: FaHandshake, href: 'https://app.joinhandshake.com/profiles/a5grz3', label: 'Handshake' },
]

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-[rgba(59,130,246,0.08)] py-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-heading font-bold text-xl gradient-text mb-3">&lt;Amir /&gt;</div>
            <p className="text-slate-600 dark:text-muted text-sm leading-relaxed max-w-xs">
              CS Student & Web Developer crafting digital experiences with precision, leadership, and passion.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="text-muted hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-[rgba(59,130,246,0.2)] text-muted hover:text-primary hover:border-primary/50 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <a
              href="mailto:salem009@gannon.edu"
              className="text-muted hover:text-primary text-sm transition-colors"
            >
              salem009@gannon.edu
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(59,130,246,0.08)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted text-xs font-code">
            © {new Date().getFullYear()} Amir's Portfolio. All rights reserved.
          </p>
          <p className="text-muted text-xs flex items-center gap-1.5">
            Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FiHeart className="text-primary" size={12} />
            </motion.span>
            using React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
