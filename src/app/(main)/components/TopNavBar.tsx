'use client'

import { useEffect, useState } from 'react'
import { MainNavigation } from './MainNavigation'

export function TopNavBar() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Consideriamo "top" se lo scroll è inferiore a 50px
      setIsAtTop(window.scrollY < 50)
    }

    // Inizializza lo stato
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Adjust based on header height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/40 bg-linear-to-b from-surface-container-low to-transparent shadow-[0_0_30px_rgba(255,0,255,0.1)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-6 md:px-12">
        <div
          className={`font-headline text-2xl font-bold tracking-tighter transition-colors duration-300 ${
            isAtTop ? 'text-primary-container' : 'text-white'
          }`}
        >
          Gemini CodeLabs #1
        </div>
        <MainNavigation isAtTop={isAtTop} />
        <div className="flex hidden items-center gap-4 sm:block">
          <button
            onClick={() => scrollToSection('sponsors')}
            className="border border-transparent bg-primary-container px-6 py-2 font-bold text-on-primary-container transition-all duration-300 hover:border-[#FF00FF] hover:bg-[#FF00FF]/10 hover:text-white active:scale-95"
          >
            Sponsor Now
          </button>
        </div>
      </div>
    </nav>
  )
}
