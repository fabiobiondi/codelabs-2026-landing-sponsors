import Image from 'next/image'
import { Container } from '@/components/Container'
import FabioBiondi from '@/images/avatars/fabiobiondi.png'

export function Speaker() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-10 lg:grid-cols-2">
          <div className="group relative mx-auto h-80 w-80 transform overflow-hidden rounded-4xl">
            <div className="absolute inset-0 rounded-4xl border border-blue-300 transition duration-300 group-hover:scale-95" />
            <div className="absolute inset-0 bg-indigo-50 rounded-4xl overflow-hidden">
              <Image
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                src={FabioBiondi}
                alt="Fabio Biondi"
                quality={80}
                priority
                sizes="(min-width: 640px) 20rem, 100vw"
              />
            </div>
          </div>
          <div>
            <h3 className="font-display text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
              Fabio Biondi
            </h3>
            <p className="mt-2 text-lg font-semibold tracking-tight text-slate-700">
              Freelance | Google Expert Angular | LearnByDo.ing
            </p>
            <p className="mt-4 text-base leading-7 tracking-tight text-slate-600">
              Fabio Biondi è un freelance developer, Google Developer Expert in Angular,
              Microsoft MVP e trainer con oltre 20 anni di esperienza nello sviluppo software.
              Fondatore della community LearnByDo.ing, è speaker in conferenze nazionali e
              internazionali e creatore di corsi online su Angular, React e tecnologie web moderne.
              È appassionato di UI/UX, sviluppo frontend e intelligenza artificiale applicata
              allo sviluppo software.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
