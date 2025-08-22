import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext({ theme: 'light', setTheme: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  // Initialize from storage or system
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const preferred = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    applyTheme(preferred)
  }, [])

  const applyTheme = (next) => {
    setTheme(next)
    const root = document.documentElement
    const body = document.body
    root.classList.toggle('dark', next === 'dark')
    body.classList.toggle('dark', next === 'dark')
    root.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
    try { console.log('[theme]', next, 'html.dark?', root.classList.contains('dark')) } catch {}
  }

  const value = useMemo(() => ({ theme, setTheme: applyTheme }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}


