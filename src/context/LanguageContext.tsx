import { createContext, useContext, useState, ReactNode } from 'react'
import type { Lang } from '../types'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (en: string, th: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (en) => en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const t = (en: string, th: string) => (lang === 'en' ? en : th)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
