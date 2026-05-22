import { motion } from 'framer-motion'

export default function SkillBar({ skill, delay = 0, inView }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-gray-800 dark:text-white/80 font-medium">{skill.name}</span>
        <span className="text-xs font-code text-accent">{skill.level}%</span>
      </div>
      <div className="h-[6px] rounded-full bg-white/[0.07] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
            boxShadow: '0 0 8px rgba(59,130,246,0.5)',
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  )
}
