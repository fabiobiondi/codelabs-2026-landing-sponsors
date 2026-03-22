import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          {/*<Logo className="h-12 w-auto text-slate-900" />*/}
        </div>
        <div className="text-black-600 order-first -mx-4 flex flex-auto basis-full overflow-x-auto border-b border-blue-600/10 py-4 text-sm font-bold whitespace-nowrap sm:-mx-6 lg:order-0 lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <a
            href="#event-map"
            className="mx-auto flex items-center gap-4 rounded-full bg-indigo-600 px-4 py-1 text-base text-white transition hover:bg-indigo-700 sm:text-2xl"
          >
            <div>
              <p className="">Cerchiamo sponsors</p>
            </div>
          </a>
        </div>
        <div className="mt-10 flex justify-center lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          {/*       <Button
            target="_blank"
            href="https://www.eventbrite.it/e/biglietti-ai-playground-1963262637398?aff=oddtdtcreator"
          >
            Iscriviti ora
          </Button> */}
        </div>
      </Container>
    </header>
  )
}
