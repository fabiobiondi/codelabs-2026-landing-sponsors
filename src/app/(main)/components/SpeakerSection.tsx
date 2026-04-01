import Image from 'next/image'
import fabioBiondiImg from '@/images/avatars/fabiobiondi.png'

export function SpeakerSection() {
  return (
    <section id="istruttore" className="relative overflow-hidden py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-16 px-12 md:flex-row">
        <div className="group relative w-full md:w-1/3">
          <div className="absolute -inset-4 bg-primary-container opacity-10 blur-xl transition-opacity group-hover:opacity-20" />
          <Image
            alt="Fabio Biondi"
            className="relative z-10 aspect-[4/5] w-full border border-white/10 object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            src={fabioBiondiImg}
            quality={80}
            priority
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <div className="absolute bottom-4 left-4 z-20 bg-primary-container px-4 py-1">
            <span className="font-black tracking-tighter text-black italic">
              GOOGLE EXPERT
            </span>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="mb-2 font-headline text-5xl font-black tracking-tight">
            Fabio Biondi
          </h2>
          <p className="mb-8 font-mono text-sm text-white/40">
            Formazione FrontEnd | Google Developer Expert in Angular | Fondatore
            di LearnByDo.ing
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-white/70">
              Freelance developer con oltre 20 anni di esperienza nello sviluppo
              software, Google Developer Expert in Angular, (ex Microsoft MVP) e
              formatore FrontEnd.
              <br />
              Speaker abituale in moltissime conferenze, unisce la passione per
              UI/UX e sviluppo frontend con un forte interesse per
              l&apos;intelligenza artificiale applicata allo sviluppo software.
            </p>
            <p className="text-lg leading-relaxed text-white/70">
              Fondatore di diverse community e creatore della piattaforma di
              formazione{' '}
              <a
                href="https://www.learnbydo.ing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                LearnByDo.ing
              </a>
              ,{' '}
              <span className="text-white">
                {' '}
                il suo core business è la formazione FrontEnd (principalmente su
                tutto ciò che ruota attorno ad Angular e React), Web
                Technologies e AI Generativa.
              </span>
            </p>
          </div>
          <div className="mt-12 flex gap-4">
            <div className="group relative">
              <a
                className="inline-block border border-white/10 p-3 transition-colors hover:border-primary-container hover:text-primary-container"
                href="https://t.me/fabiobiondi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined block">send</span>
              </a>
              <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 bg-primary-container px-2 py-1 text-[10px] font-bold tracking-widest whitespace-nowrap text-black uppercase opacity-0 transition-opacity group-hover:opacity-100">
                Telegram
              </span>
            </div>

            <div className="group relative">
              <a
                className="inline-block border border-white/10 p-3 transition-colors hover:border-primary-container hover:text-primary-container"
                href="https://www.linkedin.com/in/fabiobiondi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined block">link</span>
              </a>
              <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 bg-primary-container px-2 py-1 text-[10px] font-bold tracking-widest whitespace-nowrap text-black uppercase opacity-0 transition-opacity group-hover:opacity-100">
                Linkedin
              </span>
            </div>

            <div className="group relative">
              <a
                className="inline-block border border-white/10 p-3 transition-colors hover:border-primary-container hover:text-primary-container"
                href="https://www.fabiobiondi.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined block">public</span>
              </a>
              <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 bg-primary-container px-2 py-1 text-[10px] font-bold tracking-widest whitespace-nowrap text-black uppercase opacity-0 transition-opacity group-hover:opacity-100">
                Sito Web
              </span>
            </div>

            <div className="group relative">
              <a
                className="inline-block border border-white/10 p-3 transition-colors hover:border-primary-container hover:text-primary-container"
                href="https://www.fabiobiondi.training/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined block">school</span>
              </a>
              <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 bg-primary-container px-2 py-1 text-[10px] font-bold tracking-widest whitespace-nowrap text-black uppercase opacity-0 transition-opacity group-hover:opacity-100">
                Formazione
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
