import { useRef } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

export default function CardSwiper({ items }) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-150, 0, 150], [-8, 0, 8])
  const opacity = useTransform(x, [-150, 0, 150], [0.6, 1, 0.6])

  return (
    <div className="relative h-[420px] w-full select-none">
      <div className="absolute inset-0 grid place-items-center">
        <AnimatePresence initial={false}>
          {items.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              style={{ x: idx === 0 ? x : 0, rotate: idx === 0 ? rotate : 0, opacity: idx === 0 ? opacity : 0.7 }}
              drag={idx === 0 ? 'x' : false}
              dragConstraints={{ left: -150, right: 150 }}
              className={`absolute aspect-[4/5] w-64 sm:w-72 rounded-3xl overflow-hidden shadow-lg border border-slate-200/70 dark:border-slate-800/70 bg-white dark:bg-slate-900 ${idx === 0 ? 'z-30' : idx === 1 ? 'z-20 scale-95' : 'z-10 scale-90'}`}
            >
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}


