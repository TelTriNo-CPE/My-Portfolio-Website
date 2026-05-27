import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLang } from '../context/LanguageContext'

export default function Contact() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null)

  const copy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 section-alt" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy opacity-60" />
      <div className="absolute bottom-20 right-10 w-64 h-64 orb bg-cyan-500/6 orb-2" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className={`mb-16 ${isVisible ? 'anim-visible' : 'anim-hidden'}`}
             style={{ transition: 'all 0.7s ease' }}>
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">
            {lang === 'en' ? '// get in touch' : '// ติดต่อผม'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2 mb-4">
            {lang === 'en' ? 'Contact' : 'ติดต่อ'}
          </h2>
          <div className="w-16 h-0.5 section-line rounded" />
        </div>

        <div className={`${isVisible ? 'anim-visible' : 'anim-hidden'}`}
             style={{ transition: 'all 0.7s ease 0.15s' }}>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            {lang === 'en'
              ? "I am currently seeking full-time opportunities where I can apply my expertise in software engineering or IoT. Whether you have a specific role in mind, a challenging project, or simply want to connect—I would love to hear from you!"
              : 'ผมกำลังมองหาโอกาสในการทำงานประจำ เพื่อนำความรู้และความเชี่ยวชาญด้าน Software Engineering หรือ IoT ไปร่วมพัฒนาองค์กร ไม่ว่าคุณจะมีตำแหน่งงานที่เหมาะสม มีโปรเจกต์ที่ท้าทาย หรือเพียงแค่ต้องการพูดคุยแลกเปลี่ยนไอเดีย สามารถติดต่อผมมาได้ตลอดเลยครับ!'}
          </p>

          <div className="space-y-4">
            {/* Email */}
            <div className="glass-card rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-envelope text-cyan-400 text-lg" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-0.5">
                  {lang === 'en' ? 'Email' : 'อีเมล'}
                </p>
                <p className="text-slate-200 text-sm font-medium truncate">
                  natanan.tatanan@gmail.com
                </p>
              </div>
              <button
                onClick={() => copy('natanan.tatanan@gmail.com', 'email')}
                className="p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300
                           transition-all text-sm flex-shrink-0"
                title="Copy email"
              >
                <i className={copied === 'email' ? 'fa-solid fa-check text-emerald-400' : 'fa-regular fa-copy'} />
              </button>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-phone text-purple-400 text-lg" />
              </div>
              <div className="flex-1">
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-0.5">
                  {lang === 'en' ? 'Phone' : 'โทรศัพท์'}
                </p>
                <p className="text-slate-200 text-sm font-medium">080-9922525</p>
              </div>
              <button
                onClick={() => copy('0809922525', 'phone')}
                className="p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300
                           transition-all text-sm flex-shrink-0"
                title="Copy phone"
              >
                <i className={copied === 'phone' ? 'fa-solid fa-check text-emerald-400' : 'fa-regular fa-copy'} />
              </button>
            </div>

            {/* Location */}
            <div className="glass-card rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-location-dot text-emerald-400 text-lg" />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-0.5">
                  {lang === 'en' ? 'Location' : 'ที่อยู่'}
                </p>
                <p className="text-slate-200 text-sm font-medium">
                  {lang === 'en' ? 'Chiang Mai, Thailand' : 'เชียงใหม่ ประเทศไทย'}
                </p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/TelTriNo-CPE"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl glass-card flex items-center justify-center
                         text-slate-400 hover:text-slate-100 hover:border-white/20
                         transition-all duration-200 text-lg hover:scale-110"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/natanan-tatanan-167a90340/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl glass-card flex items-center justify-center
                         text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30
                         transition-all duration-200 text-lg hover:scale-110"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
