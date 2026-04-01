export function CoreTracksSection() {
  return (
    <section id="programma" className="bg-surface-container-lowest py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-12">
        <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div>
            <h2 className="mb-4 font-headline text-5xl font-bold tracking-tight uppercase">
              Il programma
            </h2>
            <div className="h-1 w-24 bg-primary-container" />
          </div>
          <p className="font-mono text-sm tracking-tighter text-white/40 uppercase">
            SPEAKER: FABIO BIONDI
          </p>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/5 bg-white/5 md:grid-cols-2">
          {/* Masterclass */}
          <div className="group bg-black p-6 transition-all duration-500 hover:bg-surface-container-low md:p-12">
            <div className="mb-8 flex items-start justify-between">
              <span className="material-symbols-outlined text-5xl font-light text-primary-container">
                school
              </span>
              <span className="border border-white/10 px-3 py-1 font-mono text-xs text-white/30">
                10:00 - 13:00
              </span>
            </div>
            <h3 className="mb-6 font-headline text-3xl font-bold">
              Mattina: Masterclass
            </h3>
            <p className="mb-4 leading-relaxed text-white/60">
              La mattina si apre con una masterclass di 3 ore dedicata
              all&apos;integrazione di Gemini all&apos;interno di applicazioni
              JavaScript sfruttando i più recenti modelli di Google: Google
              Gemini 3, VEO e Nano Banana
            </p>
            <p className="mb-8 leading-relaxed text-white/60">
              Esploreremo casi d&apos;uso reali e strategie di integrazione
              dell&apos;AI nei progetti Frontend e Backend, per capire come
              trasformare applicazioni tradizionali in esperienze davvero
              intelligenti.
            </p>
            <p className="mb-4 font-label text-sm text-white/80">
              Argomenti della Masterclass:
            </p>
            <ul className="space-y-4 font-label text-sm text-white/80">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary-container" />
                <span>
                  <span className="font-bold">
                    Gemini API in JavaScript applications
                  </span>
                  : Generazione di contenuti, prompt multimodali, chatbot,
                  streaming content, output strutturati, analisi risultati e
                  consumi.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary-container" />
                <span>
                  <span className="font-bold">API di VEO e NanoBanana</span>:
                  Esempi pratici di utilizzo delle API di Google Gemini 3 in
                  applicazioni JavaScript per la generazione di contenuti, la
                  creazione di prompt multimodali, create agenti e chat, analisi
                  dei risultati e dei consumi. Creiamo inoltre esempi reali di
                  integrazione delle API di Nano Banana Pro e VEO
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary-container" />
                <span>
                  <span className="font-bold">Function Calling e MCP</span>:
                  Estendere le capacità di un LLM con l&apos;integrazione di API
                  esterne tramite il &apos;Function Calling&apos;,
                  l&apos;integrazione di MCP server di terze parti e la
                  creazione di un MCP server
                </span>
              </li>
            </ul>
          </div>
          {/* Workshop */}
          <div className="group bg-black p-6 transition-all duration-500 hover:bg-surface-container-low md:p-12">
            <div className="mb-8 flex items-start justify-between">
              <span className="material-symbols-outlined text-5xl font-light text-primary-container">
                terminal
              </span>
              <span className="border border-white/10 px-3 py-1 font-mono text-xs text-white/30">
                14:30 - 18:00
              </span>
            </div>
            <h3 className="mb-6 font-headline text-3xl font-bold">
              Pomeriggio: Workshop
            </h3>
            <p className="mb-4 leading-relaxed text-white/60">
              Nel pomeriggio avrai la possibilità di mettere in pratica quanto
              appreso durante la masterclass:
            </p>
            <ul className="mb-8 space-y-4 font-label text-sm text-white/80">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary-container" />
                <span>
                  Utilizzerai <span className="font-bold">AntiGravity</span> e/o{' '}
                  <span className="font-bold">Gemini CLI</span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary-container" />
                <span>
                  Inizierai a creare le prime semplici applicazioni
                  &quot;intelligenti&quot; in TypeScript / NodeJS che integrano
                  funzionalità AI con le API di Gemini
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary-container" />
                <span>
                  Imparerai a configurare e utilizzare l'SDK di Gemini: generare
                  contenuti, streaming, output strutturati, ChatBot,
                  Interactions API, Grounding Tools e molto altro.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary-container" />
                <span>
                  Utilizzerai NodeJS per creare delle API REST in NodeJS che
                  integrano funzionalità AI con Gemini SDK
                </span>
              </li>

              <li className="flex gap-3">
                <span className="bg-primary-contawiner mt-1.5 h-1.5 w-1.5 shrink-0" />
                <span>
                  Effettuerai il deploy su{' '}
                  <span className="font-bold">Google Cloud</span>.
                </span>
              </li>
            </ul>
            <div className="rounded-xl border border-primary-container/30 bg-primary-container/10 p-6">
              <p className="mb-3 leading-relaxed font-bold text-white/90">
                Ogni partecipante riceverà un credito Google Cloud di 5 euro per
                iniziare a sperimentare
              </p>
              <p className="leading-relaxed text-white/80">
                Organizzeremo inoltre una &quot;challenge&quot; per il progetto
                migliore e ci sarà ampio spazio per il networking tra
                sviluppatori e con i nostri sponsor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
