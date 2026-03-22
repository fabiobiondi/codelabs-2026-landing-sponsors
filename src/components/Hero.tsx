import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import logo from '@/images/logos/logo.png'
export function Hero() {
  return (
    <div className="relative mt-12">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          {/* <h1 className="font-display text-5xl font-thin tracking-tighter text-blue-600 sm:text-7xl">
            <span className="text-black font-bold">AI</span> Playground
          </h1> */}
          {/* <Image src={logo} alt="AI Playground Conference Logo" width={1000} height={1000} /> */}
          <h1 className="text-5xl font-bold">Google CodeLabs</h1>
          <h1 className="text-3xl">
            Agentic Apps con Google Gemini SDK e TypeScript
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Una giornata gratuita per sviluppatori con l’obiettivo di
              apprendere{' '}
              <span className="font-bold">
                le fondamenta per lo sviluppo di applicazioni agentiche con
                Google Gemini in applicazioni JavaScript
              </span>{' '}
              <br />
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 rounded-3xl border bg-gradient-to-r from-indigo-800 to-purple-900 p-4 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
              {[
                ['Mattina', 'Masterclass'],
                ['Pomeriggio', 'Workshop'],
                ['Tecnologia', 'Google Gemini'],
                ['Linguaggio', 'TypeScript'],
              ].map(([name, value]) => (
                <div key={name}>
                  <dt className="font-mono text-sm text-white">{name}</dt>
                  <dd className="mt-0.5 text-lg font-semibold tracking-tight text-white sm:text-2xl">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <h1 className="pt-6 text-4xl">
              Mattina: <span className="font-bold">Masterclass</span>
            </h1>
            <p>
              La mattina si apre con una{' '}
              <span className="font-bold">
                {' '}
                masterclass di 3 ore dedicata all'integrazione di Gemini
                all'interno di applicazioni JavaScript sfruttando i più recenti
                modelli di Google: Google Gemini 3, VEO e Nano Banana
              </span>
            </p>

            <p>
              Esploreremo casi d’uso reali e strategie di integrazione dell’AI
              nei progetti Frontend e Backend, per capire come{' '}
              <span className="font-bold">
                {' '}
                trasformare applicazioni tradizionali in esperienze davvero
                intelligenti.
              </span>
            </p>
            <p>
              <span className="pt-6 text-2xl">
                Argomenti della Masterclass:
              </span>{' '}
              <ul className="pl-12">
                <li className="list-disc">
                  <span className="font-bold">
                    Gemini API in JavaScript applications
                  </span>
                  : Generazione di contenuti, prompt multimodali, chatbot,
                  streaming content, output strutturati, analisi risultati e
                  consumi.
                </li>
                <li className="list-disc">
                  <span className="font-bold">API di VEO e NanoBanana</span>:
                  Esempi pratici di utilizzo delle API di Google Gemini 3 in
                  applicazioni JavaScript per la generazione di contenuti, la
                  creazione di prompt multimodali, create agenti e chat, analisi
                  dei risultati e dei consumi. Creiamo inoltre esempi reali di
                  integrazione delle API di Nano Banana Pro e VEO
                </li>
                <li className="list-disc">
                  <span className="font-bold">Function Calling e MCP</span>:
                  Estendere le capacità di un LLM con l'integrazione di API
                  esterne tramite il 'Function Calling' , l'integrazione di MCP
                  server di terze parti e la creazione di un MCP server
                </li>
              </ul>
            </p>
            <div className="rounded-3xl border p-3 shadow-xl">
              Durante le sessioni utilizzeremo sia{' '}
              <span className="font-bold"> Gemini CLI</span> che{' '}
              <span className="font-bold">
                AntiGravity, il nuovo IDE "AI-Powered" di Google
              </span>
              , utilissimi strumenti per farvi assistere durante la creazione di
              codice.
            </div>

            <h1 className="pt-6 text-4xl">
              Pomeriggio: <span className="font-bold">Workshop</span>
            </h1>
            <p>
              <span className="font-bold">
                Nel pomeriggio avrai la possibilità di mettere in pratica quanto
                appreso durante la masterclass:
              </span>{' '}
              <ul className="pl-12">
                <li className="list-disc">
                  Utilizzerai <span className="font-bold">AntiGravity</span> e/o{' '}
                  <span className="font-bold">Gemini CLI</span>
                </li>
                <li className="list-disc">
                  Inizierai a creare le prime semplici{' '}
                  <span className="font-bold">
                    applicazioni"intelligenti" in TypeScript / NodeJS{' '}
                  </span>
                  che integrano funzionalità AI con le API di Gemini
                </li>
                <li className="list-disc">
                  Utilizzerai NodeJS per{' '}
                  <span className="font-bold">
                    creare delle API REST in NodeJS che integrano funzionalità
                    AI con Gemini SDK
                  </span>
                </li>
                <li className="list-disc">
                  Effettuerai il deploy su{' '}
                  <span className="font-bold">Google Cloud</span>.
                </li>
              </ul>
            </p>

            <p className="font-bold">
              Ogni partecipante riceverà un credito Google Cloud di 5 euro per
              iniziare a sperimentare
            </p>
            <p>
              Organizzeremo inoltre una "challenge" per il progetto migliore e
              ci sarà ampio spazio per il networking tra sviluppatori e con i
              nostri sponsor.
            </p>
          </div>
          {/* <Button href="#" className="mt-10 w-full sm:hidden">
            Iscriviti ora
          </Button> */}
        </div>
      </Container>
    </div>
  )
}
