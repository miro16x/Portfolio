import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects, categories } from '../data/projects'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
  exit:   { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <p className="section-label">What I've built</p>
            <h2 className="section-title">Featured Projects</h2>
            <div className="w-16 h-[2px] bg-gradient-hero mx-auto mb-8" />

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium font-code capitalize transition-all duration-200 ${
                    activeCategory === cat
                      ? 'text-white bg-gradient-hero shadow-glow-blue'
                      : 'text-muted border border-[rgba(59,130,246,0.2)] hover:border-primary/50 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {cat === 'all' ? 'All Projects' : cat === 'app' ? 'Apps' : 'Websites'}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Project grid */}
          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardVariants}
      layout
      className="glass-card overflow-hidden group flex flex-col"
    >
      {/* Thumbnail */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative text-center">
          <div className="text-5xl mb-2 opacity-60">
            {project.category === 'app' ? '⚡' : '🌐'}
          </div>
          <span className="font-code text-xs text-white/60 uppercase tracking-widest">
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/50 text-xs font-code text-accent border border-accent/30">
            Featured
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-muted text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded font-code text-primary bg-primary/10 border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted hover:text-gray-900 dark:hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <FiGithub size={15} />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <FiExternalLink size={15} />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
