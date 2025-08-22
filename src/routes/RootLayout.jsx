import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import ThemeToggleButton from '../ui/ThemeToggleButton.jsx'

function DarkModeToggle() { return <ThemeToggleButton /> }

function Navbar() {
  const linkClass = ({ isActive }) => `px-3 py-2 rounded-full transition-colors ${isActive ? 'bg-[color:var(--chip-bg)]' : 'hover:bg-[color:var(--chip-bg)]'}`
  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm" style={{ backgroundColor: 'var(--nav-bg)', color: 'var(--nav-text)', transition: 'background-color .3s, color .3s' }}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-semibold" style={{ color: 'var(--nav-text)' }}>
          <FiMapPin className="text-[--color-primary]" />
          <span>Travel Tours</span>
        </div>
        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/trips" className={linkClass}>Trips</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
        
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Travel Tours. All rights reserved.</p>
        <p className="opacity-80">Made with love and wanderlust.</p>
      </div>
    </footer>
  )
}

export default function RootLayout() {
  const location = useLocation()
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="flex-1">
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}


