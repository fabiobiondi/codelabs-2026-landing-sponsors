'use client'

import { ItalyMap } from './ItalyMap'
import { regionInfo } from './regionData'

const tourDates = Object.values(regionInfo)

export function HeroSection() {
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
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-[#FF00FF] blur-[160px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-secondary-container blur-[200px]" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-16 px-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-sm border border-outline-variant/20 bg-surface-container-high px-3 py-1">
            <span className="h-2 w-2 animate-ping rounded-full bg-primary-container" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
              Dal vivo!
            </span>
          </div>
          <h1 className="font-headline text-5xl leading-[1] font-black tracking-tighter text-white md:text-7xl">
            Agentic Apps con{' '}
            <span className="text-primary-container [text-shadow:0_0_15px_rgba(255,0,255,0.4)]">
              Google Gemini SDK
            </span>{' '}
            e TypeScript
          </h1>
          <p className="max-w-xl text-xl leading-relaxed font-light text-white/60 md:text-2xl">
            Un'intera giornata{' '}
            <span className="text-white underline">gratuita</span> per
            sviluppatori con l&apos;obiettivo di apprendere{' '}
            <span className="font-semibold text-white">
              le fondamenta per lo sviluppo di applicazioni agentiche con Google
              Gemini in applicazioni TypeScript
            </span>
            <br />
            <span className="mt-8 text-sm font-semibold">
              Organizzato da{' '}
              <span className="text-primary-container">Fabio Biondi</span> e dai{' '}
              <span className="text-primary-container">
                Google Developer Groups
              </span>{' '}
              locali
            </span>
          </p>
          <div className="mt-8">
            <button
              onClick={() => scrollToSection('date')}
              className="group cursor-pointer border-t border-white/10 pt-12 text-left transition-all hover:border-primary-container"
            >
              <p className="mb-2 text-[10px] tracking-widest text-white/80 uppercase transition-colors group-hover:text-primary-container">
                Prossime Tappe
              </p>
              <p className="font-headline font-bold text-white italic transition-all group-hover:text-primary-container">
                {tourDates.map((info, index) => {
                  const isPassed =
                    info.date && new Date(info.date) < new Date()
                  return (
                    <span key={info.city}>
                      <span
                        className={
                          isPassed
                            ? 'text-white/30 line-through decoration-white/40'
                            : ''
                        }
                      >
                        {info.city.toUpperCase()}
                      </span>
                      {index < tourDates.length - 1 && (
                        <span className="mx-2 not-italic text-white/20">•</span>
                      )}
                    </span>
                  )
                })}
              </p>
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-lg border border-white/5 bg-surface-container-lowest p-8 shadow-2xl">
            <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-primary-container to-transparent opacity-50" />
            <ItalyMap />
          </div>
        </div>
      </div>
    </section>
  )
}
