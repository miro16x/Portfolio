import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { experience, education, skillCategories } from '../data/skills'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export default function Resume() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Amir_Resume.pdf'
    link.click()
  }

  return (
    <section id="resume" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="section-container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="section-label">My background</p>
            <h2 className="section-title">Resume</h2>
            <div className="w-16 h-[2px] bg-gradient-hero mx-auto mb-6" />
            <motion.button
              onClick={handleDownload}
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiDownload size={18} />
              Download PDF Resume
            </motion.button>
          </motion.div>

          {/* Resume card */}
          <motion.div variants={itemVariants} className="glass-card p-8 lg:p-12 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center border-b border-[rgba(59,130,246,0.12)] pb-8 mb-8">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center font-heading font-bold text-3xl mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
              >
                A
              </div>
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-1">Amir</h3>
              <p className="text-primary font-code">Full-Stack Developer & Designer</p>
              <div className="flex flex-wrap justify-center gap-4 mt-3 text-muted text-sm">
                <span>amirsslem679@gmail.com</span>
                <span>github.com/amir</span>
                <span>linkedin.com/in/amir</span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h4 className="font-heading font-bold text-gray-900 dark:text-white text-lg mb-3 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-primary" />
                Summary
              </h4>
              <p className="text-slate-600 dark:text-muted leading-relaxed">
                Full-stack developer with 5+ years of experience building scalable web applications.
                Specializes in React, Node.js, and cloud architecture. Proven track record delivering
                high-impact products that serve 50,000+ users with 99.9% uptime. Passionate about
                clean code, performance optimization, and mentoring.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h4 className="font-heading font-bold text-gray-900 dark:text-white text-lg mb-5 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-primary" />
                Experience
              </h4>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.role}>
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                      <h5 className="font-semibold text-gray-900 dark:text-white">{exp.role}</h5>
                      <span className="font-code text-xs text-accent">{exp.period}</span>
                    </div>
                    <p className="text-primary text-sm mb-2">{exp.company}</p>
                    <p className="text-slate-600 dark:text-muted text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h4 className="font-heading font-bold text-gray-900 dark:text-white text-lg mb-5 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-secondary" />
                Education & Certifications
              </h4>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="flex flex-wrap justify-between gap-2">
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm">{edu.degree}</h5>
                      <p className="text-secondary text-sm">{edu.institution}</p>
                    </div>
                    <span className="font-code text-xs text-accent">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills summary */}
            <div>
              <h4 className="font-heading font-bold text-gray-900 dark:text-white text-lg mb-5 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-accent" />
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillCategories.flatMap(cat => cat.skills).map(skill => (
                  <span
                    key={skill.name}
                    className="text-xs px-3 py-1 rounded-full font-code text-primary bg-primary/10 border border-primary/20"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
