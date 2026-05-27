import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLang } from '../context/LanguageContext'
import { experiences } from '../data/content'
import type { ExperienceItem } from '../types'

const typeConfig = {
  award:    { icon: 'fa-solid fa-trophy',      bg: 'bg-amber-400/10',   border: 'border-amber-400/40',  dot: 'bg-amber-400',   text: 'text-amber-400'  },
  work:     { icon: 'fa-solid fa-briefcase',   bg: 'bg-cyan-400/10',    border: 'border-cyan-400/30',   dot: 'bg-cyan-400',    text: 'text-cyan-400'   },
  research: { icon: 'fa-solid fa-flask',       bg: 'bg-violet-400/10',  border: 'border-violet-400/30', dot: 'bg-violet-400',  text: 'text-violet-400' },
  teaching: { icon: 'fa-solid fa-chalkboard',  bg: 'bg-emerald-400/10', border: 'border-emerald-400/30',dot: 'bg-emerald-400', text: 'text-emerald-400'},
}

function ExperienceCard({ item, index, isVisible }: { item: ExperienceItem; index: number; isVisible: boolean }) {
  const { lang } = useLang()
  const cfg = typeConfig[item.type]

  const desc   = lang === 'en' ? item.description   : item.descriptionTH
  const period = lang === 'en' ? item.period         : item.periodTH
  const role   = lang === 'en' ? item.role           : item.roleTH
  const org    = lang === 'en' ? item.organization   : item.organizationTH
  const hl     = lang === 'en' ? item.highlightText  : item.highlightTextTH

  return (
    <div
      className={`relative flex gap-6 md:gap-8 ${isVisible ? 'anim-visible' : 'anim-hidden'}`}
      style={{ transition: `all 0.7s ease ${index * 0.15}s` }}
    >
      {/* Timeline dot */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className={`
          relative z-10 w-10 h-10 rounded-full flex items-center justify-center
          ${item.isHighlight ? 'ieee-card glow-gold' : cfg.bg}
          border ${item.isHighlight ? 'border-amber-400/50' : cfg.border}
          ${item.isHighlight ? 'animate-timeline-pulse' : ''}
        `}>
          <i className={`${cfg.icon} text-sm ${item.isHighlight ? 'text-amber-400' : cfg.text}`} />
        </div>
        {/* Connector line */}
        <div className="flex-1 w-0.5 mt-2 timeline-line min-h-[40px]" />
      </div>

      {/* Content */}
      <div className={`flex-1 pb-10 ${item.isHighlight ? 'mb-2' : ''}`}>
        {item.isHighlight ? (
          /* ── IEEE Special Card ──────────────────── */
          <div className="ieee-card rounded-2xl p-6 relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent
                           -translate-x-full hover:translate-x-full transition-transform duration-1000" />

            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-amber-400/70 uppercase tracking-wider">
                    {period}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
                  <span className="text-xs font-mono text-amber-400/70">
                    {item.organization}
                  </span>
                </div>
                <h3 className="text-xl font-bold gradient-text-gold">{role}</h3>
              </div>
              {hl && (
                <div className="flex-shrink-0 px-4 py-2 rounded-xl
                               bg-gradient-to-r from-amber-400/20 to-yellow-400/10
                               border border-amber-400/40">
                  <span className="text-amber-300 font-bold text-sm font-mono">{hl}</span>
                </div>
              )}
            </div>

            <ul className="space-y-2">
              {desc.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-amber-100/70">
                  <i className="fa-solid fa-star text-amber-400/60 text-[10px] mt-1.5 flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          /* ── Regular Card ───────────────────────── */
          <div className={`glass-card glass-card-hover rounded-2xl p-5 border ${cfg.border}`}>
            <div className="flex flex-wrap gap-2 items-center mb-1">
              <span className={`text-xs font-mono ${cfg.text} uppercase tracking-wider`}>
                {period}
              </span>
              {item.location && (
                <>
                  <span className="text-slate-700">·</span>
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <i className="fa-solid fa-location-dot text-[10px]" />
                    {item.location}
                  </span>
                </>
              )}
            </div>
            <h3 className="text-slate-100 font-bold text-lg mb-0.5">{role}</h3>
            <p className={`text-sm mb-3 font-medium ${cfg.text}`}>{org}</p>
            <ul className="space-y-1.5">
              {desc.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                  <i className={`${cfg.icon} text-[9px] mt-1.5 flex-shrink-0 ${cfg.text} opacity-60`} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 section-alt" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 orb bg-cyan-500/5" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className={`mb-16 ${isVisible ? 'anim-visible' : 'anim-hidden'}`}
             style={{ transition: 'all 0.7s ease' }}>
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">
            {lang === 'en' ? '// experience & achievements' : '// ประสบการณ์ & ความสำเร็จ'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2 mb-4">
            {lang === 'en' ? 'Experience' : 'ประสบการณ์'}
          </h2>
          <div className="w-16 h-0.5 section-line rounded" />
        </div>

        {/* Timeline */}
        <div>
          {experiences.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
