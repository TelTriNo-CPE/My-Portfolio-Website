export type Lang = 'en' | 'th'

export interface Project {
  id: string
  categories: ProjectCategory[]
  title: string
  titleTH: string
  description: string[]
  descriptionTH: string[]
  period?: string
  periodTH?: string
  tech: string[]
  links: ProjectLinks
  featured?: boolean
  isInternship?: boolean
}

export type ProjectCategory = 'web' | 'game' | 'testing' | 'iot' | 'research' | 'data'

export interface ProjectLinks {
  github?: string | string[]
  youtube?: string
  slide?: string
  medium?: string
  notion?: string
  doc?: string
}

export interface ExperienceItem {
  id: string
  period: string
  periodTH: string
  role: string
  roleTH: string
  organization: string
  organizationTH: string
  location?: string
  description: string[]
  descriptionTH: string[]
  type: 'award' | 'work' | 'research' | 'teaching'
  isHighlight?: boolean
  highlightText?: string
  highlightTextTH?: string
}

export interface SkillItem {
  name: string
  icon: string
  color?: string
  note?: string
}

export interface SkillCategory {
  id: string
  name: string
  nameTH: string
  icon: string
  iconColor: string
  skills: SkillItem[]
  isHighlighted?: boolean
  badge?: string
  badgeTH?: string
}
