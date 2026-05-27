import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLang } from '../context/LanguageContext'
import { projects } from '../data/content'
import type { ProjectCategory, ProjectLinks } from '../types'

type Filter = 'all' | ProjectCategory

const filters: { id: Filter; en: string; th: string; icon: string }[] = [
  { id: 'all',      en: 'All',      th: 'ทั้งหมด',   icon: 'fa-solid fa-border-all' },
  { id: 'web',      en: 'Web',      th: 'เว็บ',        icon: 'fa-solid fa-globe' },
  { id: 'game',     en: 'Game',     th: 'เกม',         icon: 'fa-solid fa-gamepad' },
  { id: 'testing',  en: 'Testing',  th: 'ทดสอบ',       icon: 'fa-solid fa-vial' },
  { id: 'iot',      en: 'IoT',      th: 'IoT',         icon: 'fa-solid fa-microchip' },
  { id: 'research', en: 'Research', th: 'วิจัย',        icon: 'fa-solid fa-flask' },
  { id: 'data',     en: 'Data',     th: 'ข้อมูล',       icon: 'fa-solid fa-chart-line' },
]

const catColors: Record<ProjectCategory, string> = {
  web:      'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  game:     'text-purple-400 bg-purple-400/10 border-purple-400/20',
  testing:  'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  iot:      'text-orange-400 bg-orange-400/10 border-orange-400/20',
  research: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  data:     'text-lime-400 bg-lime-400/10 border-lime-400/20',
}

const catGradients: Record<ProjectCategory, string> = {
  web:      'from-cyan-500/20 to-blue-500/10',
  game:     'from-purple-500/20 to-pink-500/10',
  testing:  'from-emerald-500/20 to-teal-500/10',
  iot:      'from-orange-500/20 to-red-500/10',
  research: 'from-violet-500/20 to-indigo-500/10',
  data:     'from-lime-500/20 to-green-500/10',
}

function LinkButton({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20
                 text-slate-300 hover:text-slate-100 text-xs font-mono
                 transition-all duration-200 hover:scale-105"
      onClick={e => e.stopPropagation()}
    >
      <i className={`${icon} text-[11px]`} />
      {label}
    </a>
  )
}

function ProjectLinks({ links }: { links: ProjectLinks }) {
  const githubs = links.github
    ? Array.isArray(links.github) ? links.github : [links.github]
    : []

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {githubs.map((url, i) => (
        <LinkButton
          key={i}
          href={url}
          icon="fa-brands fa-github"
          label={githubs.length > 1 ? (i === 0 ? 'Frontend' : 'Backend') : 'GitHub'}
        />
      ))}
      {links.youtube && (
        <LinkButton href={links.youtube} icon="fa-brands fa-youtube" label="Demo" />
      )}
      {links.slide && (
        <LinkButton href={links.slide} icon="fa-solid fa-presentation-screen" label="Slides" />
      )}
      {links.medium && (
        <LinkButton href={links.medium} icon="fa-brands fa-medium" label="Medium" />
      )}
      {links.notion && (
        <LinkButton href={links.notion} icon="fa-solid fa-n" label="Notion" />
      )}
      {links.doc && (
        <LinkButton href={links.doc} icon="fa-solid fa-file-pdf" label="Document" />
      )}
    </div>
  )
}

function ProjectCard({ project, isVisible, index }: {
  project: typeof projects[0]
  isVisible: boolean
  index: number
}) {
  const { lang } = useLang()
  const primaryCat = project.categories[0]
  const gradient  = catGradients[primaryCat]

  return (
    <div
      className={`project-card glass-card rounded-2xl overflow-hidden flex flex-col
                  ${isVisible ? 'anim-visible' : 'anim-hidden'}`}
      style={{ transition: `all 0.7s ease ${index * 0.08}s` }}
    >
      {/* Card top gradient strip */}
      <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

      {/* Card header with gradient */}
      <div className={`relative px-5 pt-5 pb-4 bg-gradient-to-br ${gradient}`}>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-slate-100 font-bold text-base leading-snug">
            {lang === 'en' ? project.title : project.titleTH}
          </h3>
          <div className="flex flex-wrap gap-1 flex-shrink-0">
            {project.categories.map(cat => (
              <span
                key={cat}
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold
                            border ${catColors[cat]}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
        {project.isInternship && (
          <span className="inline-flex items-center gap-1 mt-1.5 text-[10px] font-mono text-amber-400">
            <i className="fa-solid fa-briefcase" />
            {lang === 'en' ? 'Internship Project' : 'โปรเจกต์ฝึกงาน'}
          </span>
        )}
        {project.featured && (
          <span className="inline-flex items-center gap-1 mt-1.5 text-[10px] font-mono text-cyan-400">
            <i className="fa-solid fa-star" />
            {lang === 'en' ? 'Featured' : 'แนะนำ'}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="px-5 pb-5 flex flex-col flex-1">
        {project.period && (
          <p className="text-slate-500 text-xs font-mono mt-3">
            {lang === 'en' ? project.period : (project.periodTH ?? project.period)}
          </p>
        )}
        <ul className="space-y-1.5 mt-3 flex-1">
          {(lang === 'en' ? project.description : project.descriptionTH).map((d, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <i className="fa-solid fa-chevron-right text-[9px] mt-1.5 flex-shrink-0 text-cyan-400/50" />
              {d}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono
                         bg-white/5 text-slate-400 border border-white/8"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <ProjectLinks links={project.links} />
      </div>
    </div>
  )
}

export default function Projects() {
  const { lang } = useLang()
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter))

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 bg-navy relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 orb bg-purple-500/5 orb-3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`mb-10 ${isVisible ? 'anim-visible' : 'anim-hidden'}`}
             style={{ transition: 'all 0.7s ease' }}>
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">
            {lang === 'en' ? '// selected work' : '// ผลงานที่คัดสรร'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2 mb-4">
            {lang === 'en' ? 'Projects' : 'โปรเจกต์'}
          </h2>
          <div className="w-16 h-0.5 section-line rounded" />
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap gap-2 mb-10 ${isVisible ? 'anim-visible' : 'anim-hidden'}`}
             style={{ transition: 'all 0.7s ease 0.1s' }}>
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`filter-btn flex items-center gap-2 px-4 py-2 rounded-full
                         border text-sm font-mono transition-all duration-200
                         ${activeFilter === f.id
                           ? 'active border-transparent text-white'
                           : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200 bg-white/3'
                         }`}
            >
              <i className={`${f.icon} text-xs`} />
              {lang === 'en' ? f.en : f.th}
              {activeFilter === f.id && (
                <span className="ml-0.5 px-1.5 py-0.5 rounded-full bg-white/20 text-[10px]">
                  {filtered.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              isVisible={isVisible}
              index={i}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-mono">
            <i className="fa-solid fa-folder-open text-4xl mb-4 block opacity-30" />
            {lang === 'en' ? 'No projects in this category.' : 'ไม่มีโปรเจกต์ในหมวดหมู่นี้'}
          </div>
        )}
      </div>
    </section>
  )
}
