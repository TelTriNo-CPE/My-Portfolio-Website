import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLang } from '../context/LanguageContext'
import { skillCategories } from '../data/content'
import type { SkillItem } from '../types'

function SkillIcon({ skill }: { skill: SkillItem }) {
  const isDevicon = skill.icon.startsWith('devicon')
  const isFa      = skill.icon.startsWith('fa-')

  return (
    <div className="group flex flex-col items-center gap-2 p-3 rounded-xl
                    hover:bg-white/5 transition-all duration-200 cursor-default"
         title={skill.name}>
      {isDevicon ? (
        <i
          className={`${skill.icon} skill-icon text-3xl`}
          style={skill.color ? { color: skill.color } : {}}
        />
      ) : isFa ? (
        <i
          className={`${skill.icon} skill-icon text-2xl`}
          style={skill.color ? { color: skill.color } : { color: '#94a3b8' }}
        />
      ) : (
        <span className="text-2xl">{skill.icon}</span>
      )}
      <span className="text-slate-400 text-[10px] font-mono text-center leading-tight
                       group-hover:text-slate-200 transition-colors">
        {skill.name}
      </span>
    </div>
  )
}

export default function Skills() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 relative bg-navy">
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-96 h-96 orb bg-purple-500/5 orb-2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`mb-16 ${isVisible ? 'anim-visible' : 'anim-hidden'}`}
             style={{ transition: 'all 0.7s ease' }}>
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">
            {lang === 'en' ? '// technical skills' : '// ทักษะทางเทคนิค'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2 mb-4">
            {lang === 'en' ? 'Skills' : 'ทักษะ'}
          </h2>
          <div className="w-16 h-0.5 section-line rounded" />
        </div>

        {/* Skill category grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={`
                glass-card rounded-2xl p-6 transition-all duration-300
                ${isVisible ? 'anim-visible' : 'anim-hidden'}
                ${cat.isHighlighted
                  ? 'border border-emerald-400/30 bg-emerald-400/3 hover:border-emerald-400/50'
                  : 'glass-card-hover'}
              `}
              style={{ transition: `all 0.7s ease ${0.1 * i}s`, ...(isVisible ? {} : { opacity: 0, transform: 'translateY(30px)' }) }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                                   ${cat.isHighlighted ? 'bg-emerald-400/10' : 'bg-white/5'}`}>
                    <i className={`${cat.icon} ${cat.iconColor} text-lg`} />
                  </div>
                  <div>
                    <h3 className="text-slate-100 font-semibold text-sm leading-tight">
                      {lang === 'en' ? cat.name : cat.nameTH}
                    </h3>
                    {cat.isHighlighted && cat.badge && (
                      <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full
                                       bg-emerald-400/15 text-emerald-400 text-[10px] font-mono font-bold
                                       border border-emerald-400/30">
                        <i className="fa-solid fa-check-circle text-[8px]" />
                        {lang === 'en' ? cat.badge : cat.badgeTH}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-slate-600 text-xs font-mono">{cat.skills.length} skills</span>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-4 gap-1">
                {cat.skills.map(skill => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`mt-10 text-center ${isVisible ? 'anim-visible' : 'anim-hidden'}`}
             style={{ transition: 'all 0.7s ease 0.6s' }}>
          <p className="text-slate-500 text-sm font-mono">
            {lang === 'en'
              ? '// Always learning · Currently exploring: Cyber Security'
              : '// เรียนรู้ตลอดเวลา · กำลังศึกษา: Cyber Security'}
          </p>
        </div>
      </div>
    </section>
  )
}
