import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full bg-white hover:bg-white/90 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
      style={{ border: '2px solid #e7c8c8' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="w-6 h-6" style={{ color: '#3F1E42' }} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : -180,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="w-6 h-6" style={{ color: '#3F1E42' }} />
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
