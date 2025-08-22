import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../theme/ThemeProvider.jsx'

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  const toggle = () => setTheme(isDark ? 'light' : 'dark')
  return (
    <button onClick={toggle} aria-label="Toggle theme" className="relative inline-flex h-9 w-16 items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors p-1">
      <motion.span layout transition={{ type: 'spring', stiffness: 500, damping: 30 }} className={`h-7 w-7 rounded-full grid place-items-center bg-white dark:bg-slate-900 shadow-sm ${isDark ? 'translate-x-7' : ''}`}>
        {isDark ? <FiMoon className="text-yellow-200" /> : <FiSun className="text-amber-500" />}
      </motion.span>
    </button>
  )
}


