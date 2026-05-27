import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

const navItems = [
  { id: 'about',      en: 'About',      th: 'เกี่ยวกับ' },
  { id: 'skills',     en: 'Skills',     th: 'ทักษะ' },
  { id: 'experience', en: 'Experience', th: 'ประสบการณ์' },
  { id: 'projects',   en: 'Projects',   th: 'โปรเจกต์' },
  { id: 'contact',    en: 'Contact',    th: 'ติดต่อ' },
]

export default function Navbar() {
  const { lang, setLang } = useLang()
  const [scrolled, setScrolled]   = useState(false)
  const [active,   setActive]     = useState('')
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracking
  useEffect(() => {
    const sections = navItems.map(n => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.4 },
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          Natanan.T
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-link text-sm font-medium transition-colors duration-200 ${
                active === item.id ? 'text-cyan-400 active' : 'text-slate-300 hover:text-slate-100'
              }`}
            >
              {lang === 'en' ? item.en : item.th}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* EN/TH Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10
                       bg-white/5 hover:bg-white/10 hover:border-cyan-400/40
                       text-xs font-mono font-semibold text-slate-300 hover:text-cyan-400
                       transition-all duration-200"
            aria-label="Toggle language"
          >
            <span className={lang === 'en' ? 'text-cyan-400' : 'text-slate-400'}>EN</span>
            <span className="text-slate-600">/</span>
            <span className={lang === 'th' ? 'text-cyan-400' : 'text-slate-400'}>TH</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(m => !m)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 text-slate-300 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-navy/95 backdrop-blur-xl border-b border-white/5`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left text-sm font-medium transition-colors ${
                active === item.id ? 'text-cyan-400' : 'text-slate-300'
              }`}
            >
              {lang === 'en' ? item.en : item.th}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
