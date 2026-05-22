import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiSend } from 'react-icons/fi'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'amirsslem679@gmail.com', href: 'mailto:amirsslem679@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'Remote / Worldwide', href: null },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    // Simulate form submission — replace with EmailJS or API call
    await new Promise(r => setTimeout(r, 1500))

    setLoading(false)
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="section-container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <p className="section-label">Let's talk</p>
            <h2 className="section-title">Get In Touch</h2>
            <div className="w-16 h-[2px] bg-gradient-hero mx-auto mb-4" />
            <p className="text-slate-600 dark:text-muted max-w-xl mx-auto">
              Have a project in mind, want to collaborate, or just say hello?
              I'd love to hear from you — my inbox is always open.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              {/* Info cards */}
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="glass-card p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-code uppercase tracking-widest mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="text-gray-900 dark:text-white hover:text-primary transition-colors text-sm">{value}</a>
                      : <p className="text-gray-900 dark:text-white text-sm">{value}</p>
                    }
                  </div>
                </div>
              ))}

              {/* Availability banner */}
              <div className="glass-card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 font-code text-sm font-medium">Available for freelance</span>
                </div>
                <p className="text-slate-600 dark:text-muted text-sm">
                  Currently taking on select projects. Response time: under 24 hours.
                </p>
              </div>

              {/* Social links */}
              <div className="glass-card p-5">
                <p className="text-muted text-xs font-code uppercase tracking-widest mb-4">Find me on</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 flex items-center justify-center rounded-md border border-[rgba(59,130,246,0.2)] text-muted hover:text-primary hover:border-primary/60 transition-all duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-code uppercase tracking-widest text-muted mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/[0.04] dark:bg-white/[0.04] border border-[rgba(59,130,246,0.15)] rounded-md px-4 py-3 text-gray-900 dark:text-white placeholder-slate-400 dark:placeholder-muted focus:outline-none focus:border-primary/60 focus:bg-blue-50/50 dark:focus:bg-white/[0.06] transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-code uppercase tracking-widest text-muted mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/[0.04] dark:bg-white/[0.04] border border-[rgba(59,130,246,0.15)] rounded-md px-4 py-3 text-gray-900 dark:text-white placeholder-slate-400 dark:placeholder-muted focus:outline-none focus:border-primary/60 focus:bg-blue-50/50 dark:focus:bg-white/[0.06] transition-all duration-200 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-code uppercase tracking-widest text-muted mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry, collaboration, etc."
                    className="w-full bg-white/[0.04] border border-[rgba(59,130,246,0.15)] rounded-md px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-primary/60 focus:bg-white/[0.06] transition-all duration-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-code uppercase tracking-widest text-muted mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/[0.04] dark:bg-white/[0.04] border border-[rgba(59,130,246,0.15)] rounded-md px-4 py-3 text-gray-900 dark:text-white placeholder-slate-400 dark:placeholder-muted focus:outline-none focus:border-primary/60 focus:bg-blue-50/50 dark:focus:bg-white/[0.06] transition-all duration-200 text-sm resize-none"
                  />
                </div>

                {/* Status */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-md bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-code"
                  >
                    ✅ Message sent! I'll get back to you within 24 hours.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
