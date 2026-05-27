import { useState, useEffect } from 'react'

export function useTypewriter(
  words: string[],
  typingSpeed = 110,
  deletingSpeed = 55,
  pauseDuration = 2200,
) {
  const [displayText, setDisplayText]   = useState('')
  const [wordIdx, setWordIdx]           = useState(0)
  const [charIdx, setCharIdx]           = useState(0)
  const [isDeleting, setIsDeleting]     = useState(false)
  const [isPaused, setIsPaused]         = useState(false)

  useEffect(() => {
    if (!words.length) return

    const word = words[wordIdx]

    if (isPaused) {
      const t = setTimeout(() => { setIsPaused(false); setIsDeleting(true) }, pauseDuration)
      return () => clearTimeout(t)
    }

    if (!isDeleting) {
      if (charIdx < word.length) {
        const t = setTimeout(() => {
          setDisplayText(word.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, typingSpeed)
        return () => clearTimeout(t)
      } else {
        setIsPaused(true)
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayText(word.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        }, deletingSpeed)
        return () => clearTimeout(t)
      } else {
        setIsDeleting(false)
        setWordIdx(i => (i + 1) % words.length)
      }
    }
  }, [words, wordIdx, charIdx, isDeleting, isPaused, typingSpeed, deletingSpeed, pauseDuration])

  return displayText
}
