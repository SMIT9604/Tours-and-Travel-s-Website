import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../lib/utils'

export default function CardCarousel({ items = [], intervalMs = 3000 }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (items.length <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), intervalMs)
    return () => clearInterval(id)
  }, [items.length, intervalMs])

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/70 shadow-sm">
      <div className="aspect-[16/9]">
        <AnimatePresence mode="wait">
          <motion.img
            key={items[index]?.src || index}
            src={items[index]?.src}
            alt={items[index]?.alt || ''}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/40 to-transparent text-white">
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <div key={i} className={cn('h-1 rounded-full transition-all duration-300', i === index ? 'w-8 bg-white' : 'w-4 bg-white/50')} />
          ))}
        </div>
      </div>
    </div>
  )
}


