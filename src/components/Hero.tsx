import { useLang } from '../context/LanguageContext'
import { useTypewriter } from '../hooks/useTypewriter'

const rolesEN = ['Full-Stack Developer', 'Software Tester', 'IoT Engineer']
const rolesTH = ['Full-Stack Developer', 'นักทดสอบซอฟต์แวร์', 'วิศวกร IoT']

// Floating particle component
const Particle = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
    style={{ animation: 'particleDrift 8s ease-in infinite', ...style }}
  />
)

// Abstract NT Avatar
const AvatarGraphic = () => (
  <div className="relative flex items-center justify-center">
    {/* Outer glow ring */}
    <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full
                    bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl animate-pulse" />

    {/* Rotating gradient border */}
    <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-[3px]
                    bg-gradient-to-br from-cyan-400 via-purple-500 to-cyan-400
                    animate-float glow-cyan">
      <div className="w-full h-full rounded-full bg-navy flex items-center justify-center overflow-hidden
                      relative">
        {/* Background mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
        <div className="absolute inset-0"
             style={{
               backgroundImage: `radial-gradient(circle at 30% 30%, rgba(6,182,212,0.15) 0%, transparent 60%),
                                 radial-gradient(circle at 70% 70%, rgba(139,92,246,0.15) 0%, transparent 60%)`,
             }} />

        {/* Circuit line decoration */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
          <line x1="20" y1="100" x2="80" y2="100" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="80" cy="100" r="3" fill="#06b6d4" />
          <line x1="80" y1="100" x2="80" y2="60" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="80" cy="60" r="3" fill="#8b5cf6" />
          <line x1="120" y1="100" x2="180" y2="100" stroke="#8b5cf6" strokeWidth="1" />
          <circle cx="120" cy="100" r="3" fill="#8b5cf6" />
          <line x1="120" y1="100" x2="120" y2="140" stroke="#8b5cf6" strokeWidth="1" />
          <circle cx="120" cy="140" r="3" fill="#06b6d4" />
        </svg>

        {/* Profile photo */}
        <img
          src="/Resume_pic.png"
          alt="Natanan Tatanan"
          className="relative z-10 w-full h-full object-cover rounded-full"
        />
      </div>
    </div>

    {/* Orbiting decorative dots */}
    <div className="absolute w-72 h-72 rounded-full border border-cyan-400/10 animate-spin"
         style={{ animationDuration: '20s' }}>
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full" />
    </div>
    <div className="absolute w-80 h-80 rounded-full border border-purple-500/10 animate-spin"
         style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full" />
    </div>

    {/* Tech badges floating */}
    <div className="absolute -top-4 -right-6 px-3 py-1.5 rounded-full bg-surface-card
                    border border-cyan-400/30 text-cyan-400 text-xs font-mono
                    shadow-lg animate-float-slow" style={{ animationDelay: '1s' }}>
      &lt;Full-Stack /&gt;
    </div>
    <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full bg-surface-card
                    border border-purple-500/30 text-purple-400 text-xs font-mono
                    shadow-lg animate-float-slow" style={{ animationDelay: '3s' }}>
      IoT &amp; HW
    </div>
  </div>
)

export default function Hero() {
  const { lang } = useLang()
  const roles   = lang === 'en' ? rolesEN : rolesTH
  const typed   = useTypewriter(roles)

  const summaryEN = `A First-Class Honors Computer Engineering graduate driven by a passion for inclusive and accessible web development. Proven experience in delivering enterprise-grade projects, including SCMC’s AssetManager and CCTV systems, alongside 'SkillBridge'—a platform empowering the elderly and disabled with equitable career opportunities. Seeking a Web Services Administrator to apply my expertise in building robust frontend and backend architectures and executing rigorous software testing to deliver highly efficient and reliable technical solutions.`

  const summaryTH = `บัณฑิตวิศวกรรมคอมพิวเตอร์เกียรตินิยมอันดับ 1 ผู้มีความหลงใหลในการพัฒนาเว็บไซต์ที่ทุกคนสามารถเข้าถึงและใช้งานได้อย่างเท่าเทียม มีประสบการณ์ในการส่งมอบโปรเจกต์ระดับองค์กร เช่น ระบบ AssetManager และระบบ CCTV ของศูนย์ SCMC รวมถึงโปรเจกต์ 'SkillBridge' ซึ่งเป็นแพลตฟอร์มที่ช่วยสร้างโอกาสทางอาชีพอย่างเท่าเทียมให้กับผู้สูงอายุและผู้พิการ กำลังมองหาโอกาสในตำแหน่ง Web Services Administrator เพื่อนำความเชี่ยวชาญด้านการสร้างสถาปัตยกรรม Frontend และ Backend ที่แข็งแกร่ง รวมทั้งการทดสอบซอฟต์แวร์อย่างเข้มข้น มาประยุกต์ใช้เพื่อส่งมอบโซลูชันทางเทคนิคที่มีประสิทธิภาพสูงและเชื่อถือได้`

  return (
    <section
      id="home"
      className="hero-bg relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 orb bg-cyan-500/8"    style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 right-1/6 w-80 h-80 orb orb-2 bg-purple-500/8" />
      <div className="absolute top-2/3 left-1/3 w-64 h-64 orb orb-3 bg-cyan-500/5"  />

      {/* Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Particle
          key={i}
          style={{
            left:           `${10 + i * 7}%`,
            top:            `${20 + (i % 5) * 15}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${6 + i * 0.5}s`,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)`,
             backgroundSize: '60px 60px',
           }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">

          {/* ── Text Column ─────────────────────────────── */}
          <div className="order-2 md:order-1 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                            border border-cyan-400/30 bg-cyan-400/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-mono">
                {lang === 'en' ? 'Available for opportunities' : 'พร้อมรับโอกาสใหม่'}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight mb-3">
              {lang === 'en' ? 'Hi, I\'m' : 'สวัสดีครับ ผมชื่อ'}{' '}
              <span className="gradient-text">Natanan Tatanan</span>
            </h1>

            {/* Typewriter */}
            <div className="h-10 flex items-center mb-6">
              <span className="text-xl md:text-2xl font-mono text-cyan-400 font-medium">
                {typed}
              </span>
              <span className="typewriter-cursor ml-0.5" />
            </div>

            {/* Summary */}
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg
                          font-sans">
              {lang === 'en' ? summaryEN : summaryTH}
            </p>

            {/* Education badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8
                            bg-gradient-to-r from-amber-500/10 to-orange-500/10
                            border border-amber-500/20">
              <i className="fa-solid fa-graduation-cap text-amber-400 text-sm" />
              <span className="text-amber-300 text-sm font-medium">
                {lang === 'en'
                  ? 'First-Class Honors · Computer Engineering · CMU'
                  : 'เกียรตินิยมอันดับหนึ่ง · วิศวกรรมคอมพิวเตอร์ · มช.'}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="public/Resume - Natanan Tatanan.pdf"
                download
                className="btn-glow flex items-center gap-2 px-6 py-3 rounded-xl
                           bg-gradient-to-r from-cyan-500 to-cyan-400
                           text-navy font-semibold text-sm
                           hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <i className="fa-solid fa-download" />
                {lang === 'en' ? 'Download CV' : 'ดาวน์โหลด CV'}
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-glow-purple flex items-center gap-2 px-6 py-3 rounded-xl
                           border border-purple-500/50 text-purple-300
                           hover:bg-purple-500/10 hover:border-purple-400
                           font-semibold text-sm transition-all duration-300"
              >
                <i className="fa-solid fa-envelope" />
                {lang === 'en' ? 'Contact Me' : 'ติดต่อผม'}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5">
              <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">
                {lang === 'en' ? 'Find me on' : 'ติดตามได้ที่'}
              </span>
              <a
                href="https://github.com/TelTriNo-CPE"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-100 transition-colors text-xl hover:scale-110
                           duration-200"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/natanan-tatanan-167a90340/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-xl hover:scale-110
                           duration-200"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a
                href="https://www.facebook.com/titlenattanan.tatanandana"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors text-xl hover:scale-110
                           duration-200"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook" />
              </a>
            </div>
          </div>

          {/* ── Avatar Column ────────────────────────────── */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end
                          animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <AvatarGraphic />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                        animate-float opacity-60">
          <span className="text-slate-500 text-xs font-mono tracking-widest uppercase">scroll</span>
          <div className="w-6 h-10 rounded-full border border-slate-600 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
