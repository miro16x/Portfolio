import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-md border border-[rgba(59,130,246,0.2)] text-muted hover:text-white hover:border-primary/50 transition-all duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
      </motion.div>
    </motion.button>
  )
}
