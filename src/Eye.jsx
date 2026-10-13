import { createContext, useContext, useCallback, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

const MouseContext = createContext(null)

export function MouseTracker({ children }) {
  const pos = useRef({ x: 0, y: 0 })
  const listeners = useRef(new Set())

  useEffect(() => {
    const handler = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      listeners.current.forEach((fn) => fn(e.clientX, e.clientY))
    }
    window.addEventListener('pointermove', handler)
    return () => window.removeEventListener('pointermove', handler)
  }, [])

  // Stable identity so Eye's subscribing effect never tears down/re-runs on
  // unrelated re-renders of MouseTracker (e.g. nav active-section changes).
  const subscribe = useCallback((fn) => {
    listeners.current.add(fn)
    return () => listeners.current.delete(fn)
  }, [])

  return <MouseContext.Provider value={subscribe}>{children}</MouseContext.Provider>
}

/** Occasional blink — closes for ~120ms every few seconds, like a living eye. */
function useBlink() {
  const [blinking, setBlinking] = useState(false)

  useEffect(() => {
    let openTimer
    let closeTimer

    const scheduleNext = () => {
      const delay = 2600 + Math.random() * 4200
      openTimer = setTimeout(() => {
        setBlinking(true)
        closeTimer = setTimeout(() => {
          setBlinking(false)
          scheduleNext()
        }, 120)
      }, delay)
    }

    scheduleNext()
    return () => {
      clearTimeout(openTimer)
      clearTimeout(closeTimer)
    }
  }, [])

  return blinking
}

/**
 * A pill with a pupil that tracks the cursor — the "eye" motif, stands in for
 * a round letter (the "O" in ABOUT/PROJECTS/CONTACT) or as a standalone accent.
 * Tracks in both X and Y relative to each eye's own position on screen,
 * clamped to an ellipse so the pupil never leaves the sclera, plus an
 * occasional blink and a fixed glint for a more lifelike feel.
 */
export function Eye({ className = '' }) {
  const subscribe = useContext(MouseContext)
  const ref = useRef(null)
  const blinking = useBlink()

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springConfig = { stiffness: 170, damping: 16, mass: 0.35 }
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)

  useEffect(() => {
    const update = (mx, my) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.width < 1 || rect.height < 1) return
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const travelX = rect.width * 0.24
      const travelY = rect.height * 0.2

      let nx = (mx - cx) / travelX
      let ny = (my - cy) / travelY
      const mag = Math.hypot(nx, ny)
      if (mag > 1) {
        nx /= mag
        ny /= mag
      }
      rawX.set(nx * travelX)
      rawY.set(ny * travelY)
    }
    return subscribe(update)
  }, [subscribe, rawX, rawY])

  return (
    <motion.span
      className={`eye ${className}`}
      ref={ref}
      animate={{ scaleY: blinking ? 0.08 : 1 }}
      transition={{ duration: blinking ? 0.07 : 0.1, ease: 'easeInOut' }}
    >
      <motion.span className="eye-pupil" style={{ x, y }}>
        <span className="eye-glint" />
      </motion.span>
    </motion.span>
  )
}
