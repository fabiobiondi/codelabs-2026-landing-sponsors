import { ItalyMap } from './ItalyMap'
import { regionInfo } from './regionData'

const tourDates = Object.values(regionInfo)

export function HeroSection() {
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
              Google CodeLabs
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
            Un'intera giornata gratuita per sviluppatori con l&apos;obiettivo di
            apprendere{' '}
            <span className="font-semibold text-white">
              le fondamenta per lo sviluppo di applicazioni agentiche con Google
              Gemini in applicazioni TypeScript
            </span>
          </p>
          <div className="flex items-center gap-6 border-t border-white/10 pt-12">
            <div>
              <p className="mb-2 text-[10px] tracking-widest text-white/40 uppercase">
                Upcoming Tour
              </p>
              <p className="font-headline font-bold text-white italic">
                {tourDates.map((info) => info.city.toUpperCase()).join(' • ')}
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="aspect-square overflow-hidden rounded-lg border border-white/5 bg-surface-container-lowest p-8 shadow-2xl">
            <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-primary-container to-transparent opacity-50" />
            <ItalyMap />
          </div>
        </div>
      </div>
    </section>
  )
}
