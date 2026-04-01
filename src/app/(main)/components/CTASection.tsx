export function CTASection() {
  return (
    <section id="cta" className="relative py-40">
      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-12 text-center">
        <h2 className="mb-8 font-headline text-3xl leading-tight font-black md:text-6xl md:text-7xl">
          Vuoi <span className="text-primary-container">supportare</span> la
          community?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-xl text-white/50">
          Sponsorizza l'evento e connettiti con i più promettenti sviluppatori
          italiani. Posti limitati per il tour 2026.
        </p>

        <a href="mailto:info@fabiobiondi.dev?subject=Info%20per%20diventare%20sponsor%20di%20un%20Codelab">
          <button className="mx-auto flex cursor-pointer items-center gap-4 bg-primary-container px-12 py-6 text-xl font-black tracking-tight text-on-primary-container transition-all hover:shadow-[0_0_50px_rgba(255,0,255,0.6)]">
            Diventa sponsor
            <span className="material-symbols-outlined">rocket_launch</span>
          </button>
        </a>
      </div>
      <div className="absolute top-1/2 left-1/2 h-[1px] w-[80%] -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-transparent via-primary-container/30 to-transparent" />
    </section>
  )
}
