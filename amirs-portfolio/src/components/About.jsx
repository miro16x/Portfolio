import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { skillCategories, experience, education } from '../data/skills'
import SkillBar from './SkillBar'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="section-label">Get to know me</p>
            <h2 className="section-title">About Me</h2>
            <div className="w-16 h-[2px] bg-gradient-hero mx-auto" />
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="glass-card p-8 mb-16 max-w-3xl mx-auto text-center">
            <p className="text-slate-600 dark:text-muted text-lg leading-relaxed mb-4">
              I'm a driven <span className="text-primary font-semibold">Computer Science student</span> at Gannon University with a strong background in web development, sales management, and digital content creation.
              I thrive at the intersection of technology, leadership, and communication.
            </p>
            <p className="text-slate-600 dark:text-muted leading-relaxed">
              Outside of class, I work as a Communications Assistant at Erie's Black Wall Street NP, managing social media and community outreach. I've also led sales teams at Luxe Fragrances and Urban Luxe, building long-term client relationships and driving growth through strong communication and mentorship.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white text-center mb-10">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((cat) => (
                <motion.div
                  key={cat.title}
                  className="glass-card p-6"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{cat.icon}</span>
                    <h4 className="font-heading font-bold text-gray-900 dark:text-white">{cat.title}</h4>
                  </div>
                  <div className="space-y-4">
                    {cat.skills.map((skill, i) => (
                      <SkillBar key={skill.name} skill={skill} delay={i * 0.1} inView={inView} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience + Education */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="text-primary">💼</span> Experience
              </h3>
              <div className="relative space-y-6 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-primary before:to-secondary/20">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.role}
                    className="pl-10 relative"
                    variants={itemVariants}
                    custom={i}
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="glass-card p-5">
                      <div className="flex flex-wrap justify-between items-start mb-1 gap-2">
                        <h4 className="font-heading font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                        <span className="font-code text-xs text-accent">{exp.period}</span>
                      </div>
                      <p className="text-primary text-sm font-medium mb-2">{exp.company}</p>
                      <p className="text-slate-600 dark:text-muted text-sm leading-relaxed mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map(t => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded font-code text-accent bg-accent/10 border border-accent/20">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="text-secondary">🎓</span> Education
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.degree} className="glass-card p-6">
                    <div className="flex flex-wrap justify-between items-start mb-1 gap-2">
                      <h4 className="font-heading font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <span className="font-code text-xs text-accent">{edu.period}</span>
                    </div>
                    <p className="text-secondary text-sm font-medium mb-2">{edu.institution}</p>
                    <p className="text-slate-600 dark:text-muted text-sm leading-relaxed">{edu.description}</p>
                  </div>
                ))}

                {/* Stats */}
                <div className="glass-card p-6">
                  <h4 className="font-heading font-semibold text-gray-900 dark:text-white mb-4">By the numbers</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '3+', label: 'Years Sales XP' },
                      { value: '2027', label: 'Graduation' },
                      { value: '3', label: 'Roles Held' },
                      { value: '2', label: 'Universities' },
                    ].map(stat => (
                      <div key={stat.label} className="text-center py-3 rounded-md bg-white/[0.03] border border-white/5">
                        <div className="font-heading font-bold text-2xl gradient-text">{stat.value}</div>
                        <div className="text-muted text-xs mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
