import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/miro16x', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/amir-salem-b91365381', label: 'LinkedIn' },
  { icon: FaHandshake, href: 'https://app.joinhandshake.com/profiles/a5grz3', label: 'Handshake' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative isolate min-h-screen flex items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 pt-24 lg:pt-0">
        {/* Left — Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(59,130,246,0.25)] bg-[rgba(59,130,246,0.06)] text-sm font-medium text-primary font-code">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.03em' }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Amir</span>
            <br />
            <span className="text-gray-800 dark:text-white/90">I build digital</span>
            <br />
            <span className="text-gray-800 dark:text-white/90">experiences</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            variants={itemVariants}
            className="font-code text-lg text-accent mb-6 h-8"
          >
            <TypeAnimation
              sequence={[
                'CS Student @ Gannon University',
                2000,
                'Web Developer & Designer',
                2000,
                'Sales & Communications Leader',
                2000,
                'Digital Content Creator',
                2000,
              ]}
              repeat={Infinity}
              cursor={true}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-muted text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
          >
            Driven Computer Science student with a background in web development, sales management,
            and digital content creation. Passionate about building impactful digital experiences
            and leading teams to success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <motion.button
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
              <HiArrowRight />
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-md border border-[rgba(59,130,246,0.2)] text-muted hover:text-primary hover:border-primary/60 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Avatar */}
        <motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-20 blur-2xl scale-110" />

            {/* Avatar container */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full neon-border overflow-hidden">
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Placeholder avatar — replace with actual image */}
                <div className="text-center">
                  <div
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-full mx-auto mb-3 flex items-center justify-center font-heading font-bold text-5xl lg:text-6xl"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                    }}
                  >
                    A
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -right-4 top-8 glass-card px-3 py-2 flex items-center gap-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-lg">💼</span>
              <div>
                <div className="text-xs font-semibold text-gray-900 dark:text-white">3+ Years</div>
                <div className="text-xs text-muted">Leadership</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-4 bottom-12 glass-card px-3 py-2 flex items-center gap-2"
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-lg">🎓</span>
              <div>
                <div className="text-xs font-semibold text-gray-900 dark:text-white">CS @ Gannon</div>
                <div className="text-xs text-muted">Class of 2027</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-code tracking-widest">SCROLL</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
