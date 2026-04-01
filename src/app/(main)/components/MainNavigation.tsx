'use client'

import { useEffect, useState, useRef } from 'react'

const navItems = [
  { label: 'IL PROGRAMMA', id: 'programma' },
  { label: 'SPEAKER', id: 'istruttore' },
  { label: 'DATE', id: 'date' },
  { label: 'REQUISITI', id: 'requisiti' },
]

export function MainNavigation({ isAtTop }: { isAtTop?: boolean }) {
  const [activeId, setActiveId] = useState('')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const currentActiveId = isAtTop ? '' : activeId

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      },
    )

    const allSections = [
      ...navItems.map((item) => item.id),
      'past-events',
      'sponsors',
      'cta',
    ]
    allSections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const activeRef = navRefs.current[currentActiveId]
    if (activeRef) {
      setIndicatorStyle({
        left: activeRef.offsetLeft,
        width: activeRef.offsetWidth,
      })
    } else {
      setIndicatorStyle({ left: 0, width: 0 })
    }
  }, [currentActiveId])

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
    <div className="relative hidden items-center gap-8 font-headline text-sm font-bold tracking-tight uppercase md:flex">
      {navItems.map((item) => (
        <button
          key={item.id}
          ref={(el) => {
            navRefs.current[item.id] = el
          }}
          onClick={() => scrollToSection(item.id)}
          className={`relative pb-1 transition-colors duration-300 ${
            currentActiveId === item.id
              ? 'text-primary-container'
              : 'text-white/60 hover:text-white'
          }`}
        >
          {item.label}
        </button>
      ))}
      <div
        className="absolute bottom-0 h-0.5 bg-primary-container transition-all duration-300 ease-in-out"
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
          opacity: indicatorStyle.width > 0 ? 1 : 0,
        }}
      />
    </div>
  )
}
