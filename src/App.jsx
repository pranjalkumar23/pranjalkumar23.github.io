import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { Eye, MouseTracker } from './Eye'
import { Background } from './Background'
import './App.css'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

const PROJECTS = [
  {
    slug: 'incigraph',
    title: 'InciGraph',
    tag: 'AI / Data Graph',
    description:
      'Chemical supply-chain traceability graph with a natural-language query interface — ask who supplies or uses a chemical.',
    details:
      'InciGraph maps relationships between chemicals, the products that use them, the brands behind those products, and who supplies them. Instead of clicking through filters, you type a question — "who sells titanium dioxide", "products using parabens" — and a natural-language parser resolves it into a graph query and renders the connected nodes live.',
    stack: ['Node.js', 'Vanilla JS', 'Rule-based NLU', 'Force-directed graph'],
    repo: 'https://github.com/pranjalkumar23/incigraph',
    demo: 'https://incigraph.pranjal.ai/',
    demoLabel: 'Live demo →',
    note: null,
  },
  {
    slug: 'traveldeals',
    title: 'TravelDeals',
    tag: 'Automation',
    description:
      'Tracks flight and cruise prices and only surfaces genuine drops against each route’s own history — no bookings, just alerts.',
    details:
      'A multi-service pipeline: dedicated ingest workers pull flight and cruise fares on a schedule, a detector service compares each new price against that specific route’s own historical baseline, and only publishes a deal when it clears a quality bar. It never touches payments or bookings — every deal links straight out to the airline, cruise line, or OTA.',
    stack: ['Node.js services', 'Postgres', 'Scheduled ingestion', 'Next.js web app'],
    repo: 'https://github.com/pranjalkumar23/travel-deals',
    demo: 'https://traveldeals.pranjal.ai/',
    demoLabel: 'Static preview →',
    note: 'Preview only — the live deal feed needs Postgres plus scheduled ingest/detector services, which can’t run on GitHub Pages.',
  },
  {
    slug: 'swapkaro',
    title: 'SwapKaro',
    tag: 'Marketplace',
    description:
      'Full-stack barter marketplace — list items, propose swaps, match with other traders, and track proposals end to end.',
    details:
      'A complete barter marketplace: list what you have, browse a "wanted" board for what others are after, propose a swap, and track it through a matches dashboard with city-proximity-aware matching. Built with Next.js Server Actions, cookie-based sessions, and Zod validation.',
    stack: ['Next.js', 'Server Actions', 'Zod', 'Session auth'],
    repo: 'https://github.com/pranjalkumar23/swapkaro',
    demo: 'https://swapkaro.pranjal.ai/',
    demoLabel: 'Static preview →',
    note: 'Preview only — Next.js Server Actions need a Node server, which GitHub Pages can’t run.',
  },
  {
    slug: 'tuneglobe',
    title: 'TuneGlobe',
    tag: 'Web App',
    description:
      'Explore and stream live radio stations from anywhere in the world on an interactive map, backed by Firebase.',
    details:
      'Drop a pin anywhere on the world map and stream that region’s live radio instantly. Accounts, favorites, and station data are backed by Firebase Auth and Firestore, with Cloud Functions handling server-side logic like payment verification for premium features.',
    stack: ['Firebase Auth', 'Firestore', 'Cloud Functions', 'Interactive map UI'],
    repo: 'https://github.com/pranjalkumar23/tuneglobe',
    demo: 'https://tuneglobe.netlify.app/',
    demoLabel: 'Live site →',
    note: null,
  },
  {
    slug: 'kundali',
    title: 'Kundali',
    tag: 'Mockup',
    description:
      'Vedic astrology mockup — Panchang timing and Kundali matching explained in plain Hindi or English.',
    details:
      'A design mockup for a Vedic astrology product: Panchang timing lookups and Kundali (birth chart) matching, written to feel rooted in tradition rather than gimmicky — plain-language explanations in Hindi or English with a clear verdict instead of vague mysticism.',
    stack: ['Static HTML/CSS/JS'],
    repo: 'https://github.com/pranjalkumar23/kundali',
    demo: 'https://kundali.pranjal.ai/',
    demoLabel: 'Live demo →',
    note: null,
  },
  {
    slug: 'central-house-homestay',
    title: 'The Central House',
    tag: 'Hospitality',
    description:
      'Booking site for a vegetarian homestay in Bhowali, Uttarakhand, near Kainchi Dham and Nainital.',
    details:
      'A multi-page marketing and booking site for a real vegetarian homestay in Shyamkhet, Bhowali — rooms, photo gallery, and a direct contact/enquiry flow, built to read as calm and trustworthy for travelers researching a stay near Kainchi Dham and Nainital.',
    stack: ['Static HTML/CSS/JS'],
    repo: 'https://github.com/pranjalkumar23/central-house-homestay',
    demo: 'https://thecentralhouse.in/',
    demoLabel: 'Live site →',
    note: null,
  },
  {
    slug: 'itowers-exente',
    title: 'iTowers Exente',
    tag: 'Community',
    description:
      'Resident portal for a 438-home gated community in Bengaluru — amenities, announcements, and access info.',
    details:
      'The official resident-facing site for iTowers Exente, a 438-home Kolte-Patil gated community in Electronic City, Bengaluru — amenity info (rooftop pool, gym, clubhouse, tennis and basketball courts), announcements, and general access information for residents and prospective buyers.',
    stack: ['React', 'Static build'],
    repo: 'https://github.com/pranjalkumar23/itowers-exente',
    demo: 'https://itowersexente.com/',
    demoLabel: 'Live site →',
    note: null,
  },
  {
    slug: 'wind-chime-studio',
    title: 'Wind Chime Studio',
    tag: 'Design Exploration',
    description:
      'Three creative directions for one product — temple chimes in India, a poetic Hindi wind bell, and bronze-and-jade Japanese chimes.',
    details:
      'The same product — a wind chime — explored through three completely different creative lenses: devotional temple-chime branding for an Indian audience, a poetic Hindi "curtain of verse" wind bell, and a minimal bronze-and-jade aesthetic drawn from Japanese furin. A study in how tone and visual language change the same idea.',
    stack: ['Static HTML/CSS/JS', 'Typography-led design'],
    repo: 'https://github.com/pranjalkumar23/wind-chime-studio',
    demo: 'https://windchime.pranjal.ai/',
    demoLabel: 'Live demo →',
    note: null,
  },
  {
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    tag: 'Android / On-device',
    description:
      'Reads bank SMS alerts on-device to categorize spending and surface monthly patterns — no server, no cloud.',
    details:
      'A fully on-device Android app: it reads bank and card SMS alerts, buckets spending into categories (savings, credit card, UPI, other), and generates monthly reports with spending patterns and reduction recommendations. No server, no cloud, no account — everything stays on the phone.',
    stack: ['Android', 'On-device parsing', 'No backend'],
    repo: 'https://github.com/pranjalkumar23/expense-tracker',
    demo: null,
    demoLabel: null,
    note: 'Android app — no web demo.',
  },
]

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.5 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

/* ---------- Intro curtain: wipes away on load ---------- */
function IntroCurtain() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="curtain"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            className="curtain-mark"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            PK
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Nav({ active }) {
  return (
    <motion.nav
      className="nav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
    >
      <a href="#top" className="nav-mark">
        PK
      </a>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} className={active === link.id ? 'active' : ''}>
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="nav-pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="nav-label">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

const letterVariants = {
  hidden: { y: '110%' },
  visible: (i) => ({
    y: '0%',
    transition: { duration: 0.7, delay: 1.0 + i * 0.04, ease: [0.16, 1, 0.3, 1] },
  }),
}

function AnimatedWord({ word, startIndex }) {
  return (
    <span className="letters">
      {word.split('').map((char, i) => (
        <span className="letter-mask" key={`${char}-${i}`}>
          <motion.span
            className="letter"
            custom={startIndex + i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div className="hero-inner" style={{ y, opacity }}>
        <h1 className="sr-only">Pranjal Kumar</h1>
        <div className="hero-title" aria-hidden="true">
          <span className="hero-line">
            <AnimatedWord word="PRANJAL" startIndex={0} />
            <motion.span
              className="eye-wrap"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4, ease: 'backOut' }}
            >
              <Eye />
            </motion.span>
          </span>
        </div>
        <motion.div
          className="marquee"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 1.5, ease: 'easeOut' }}
        >
          <div className="marquee-track">
            <span>FULL-STACK DEVELOPER • BUILDER • PROBLEM SOLVER • SHIPPING PROJECTS •</span>
            <span aria-hidden="true">
              FULL-STACK DEVELOPER • BUILDER • PROBLEM SOLVER • SHIPPING PROJECTS •
            </span>
          </div>
        </motion.div>
        <div className="hero-title" aria-hidden="true">
          <span className="hero-line hero-line-right">
            <motion.span
              className="eye-wrap"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6, ease: 'backOut' }}
            >
              <Eye />
            </motion.span>
            <AnimatedWord word="KUMAR" startIndex={7} />
          </span>
        </div>
      </motion.div>
      <motion.a
        href="#work"
        className="hero-scroll"
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2, duration: 0.6 }, y: { duration: 2, repeat: Infinity } }}
      >
        ⌄
      </motion.a>
    </section>
  )
}

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

function About() {
  return (
    <section id="about" className="about">
      <motion.h2
        className="about-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={revealUp}
      >
        AB
        <motion.span
          className="eye-wrap"
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'backOut' }}
        >
          <Eye className="eye--heading" />
        </motion.span>
        UT
      </motion.h2>
      <div className="about-copy">
        {[
          "Hi, I'm Pranjal Kumar.",
          "I build full-stack products end to end — from AI-powered graphs and autonomous agents to marketplaces, booking sites, and mobile tools. I like taking an idea from a blank file to something real people can use.",
          "Take a look at what I've been building lately.",
        ].map((line, i) => (
          <motion.p
            key={i}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={revealUp}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isOpen, onToggle }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      type="button"
      className={`project-card ${isOpen ? 'project-card--active' : ''}`}
      style={{ '--hue': `${(index * 47) % 360}`, rotateX, rotateY, transformPerspective: 600 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onToggle(project.slug)}
      aria-expanded={isOpen}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="project-tag">{project.tag}</span>
      <span className="project-title">{project.title}</span>
      <span className="project-desc">{project.description}</span>
    </motion.button>
  )
}

function ProjectDetail({ project }) {
  return (
    <motion.div
      className="project-detail"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-detail-inner">
        <div className="project-detail-header">
          <span className="project-tag">{project.tag}</span>
          <h3>{project.title}</h3>
        </div>
        <p className="project-detail-copy">{project.details}</p>
        <ul className="project-stack">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-detail-links">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="project-link">
              View source →
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
              {project.demoLabel || 'Live demo →'}
            </a>
          )}
          {project.note && <span className="project-note">{project.note}</span>}
        </div>
      </div>
    </motion.div>
  )
}

function Work() {
  const scrollerRef = useRef(null)
  const [openSlug, setOpenSlug] = useState(null)

  const scrollBy = (amount) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  const handleToggle = (slug) => {
    setOpenSlug((current) => (current === slug ? null : slug))
  }

  const openProject = PROJECTS.find((p) => p.slug === openSlug)

  return (
    <section id="work" className="work">
      <motion.h2
        className="work-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={revealUp}
      >
        PR
        <motion.span
          className="eye-wrap"
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'backOut' }}
        >
          <Eye className="eye--heading" />
        </motion.span>
        JECTS
      </motion.h2>
      <div className="work-scroller" ref={scrollerRef}>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            project={project}
            index={i}
            key={project.slug}
            isOpen={openSlug === project.slug}
            onToggle={handleToggle}
          />
        ))}
      </div>
      <motion.div
        className="work-controls"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => scrollBy(-360)} aria-label="Scroll left">
          ←
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => scrollBy(360)} aria-label="Scroll right">
          →
        </motion.button>
      </motion.div>
      <AnimatePresence mode="wait">
        {openProject && <ProjectDetail project={openProject} key={openProject.slug} />}
      </AnimatePresence>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.h2
        className="contact-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={revealUp}
      >
        LET'S C
        <motion.span
          className="eye-wrap"
          initial={{ scale: 0, rotate: 20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'backOut' }}
        >
          <Eye className="eye--heading" />
        </motion.span>
        NNECT
      </motion.h2>
      <motion.p
        className="contact-copy"
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={revealUp}
      >
        Have a project in mind, or just want to say hi? Reach me at{' '}
        <motion.a
          href="mailto:pranjalkumar23@gmail.com"
          className="contact-link"
          whileHover={{ letterSpacing: '0.02em' }}
        >
          pranjalkumar23@gmail.com
        </motion.a>
        .
      </motion.p>
    </section>
  )
}

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-links">
        <a href="https://github.com/pranjalkumar23" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/pranjal-k/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <p>© Pranjal Kumar {new Date().getFullYear()}</p>
    </motion.footer>
  )
}

function App() {
  const active = useActiveSection(['top', 'about', 'work', 'contact'])

  return (
    <MouseTracker>
      <Background />
      <IntroCurtain />
      <Nav active={active} />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </MouseTracker>
  )
}

export default App
