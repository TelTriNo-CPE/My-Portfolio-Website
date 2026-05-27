import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { lang } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & copyright */}
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold gradient-text text-lg">Natanan.T</span>
            <span className="text-slate-700">·</span>
            <span className="text-slate-500 text-sm">
              {lang === 'en'
                ? `© ${year} All rights reserved.`
                : `© ${year} สงวนลิขสิทธิ์`}
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/TelTriNo-CPE"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-300 transition-colors text-lg"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/natanan-tatanan-167a90340/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors text-lg"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://www.facebook.com/titlenattanan.tatanandana"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors text-lg"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook" />
            </a>
          </div>

          {/* Built with */}
          <p className="text-slate-600 text-xs font-mono">
            {lang === 'en'
              ? 'Built with React + TypeScript + Tailwind'
              : 'สร้างด้วย React + TypeScript + Tailwind'}
          </p>
        </div>
      </div>
    </footer>
  )
}
