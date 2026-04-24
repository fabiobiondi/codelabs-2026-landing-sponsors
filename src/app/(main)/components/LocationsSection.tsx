'use client'
import Image from 'next/image'
import { regionInfo } from './regionData'

const TODAY = new Date('2026-04-20')
export function LocationsSection() {
  return (
    <section id="date" className="bg-surface-container-lowest py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-12">
        <div className="mb-16">
          <h2 className="mb-6 font-headline text-4xl font-bold tracking-tight">
            Tour 2026
          </h2>
          <p className="max-w-2xl text-white/50">
            Iscriviti ai prossimi eventi.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regionInfo.map((event, index) => {
            const isPast = event.date && new Date(event.date) < TODAY
            return (
              <div
                key={index}
                className="group flex flex-col justify-between border border-white/10 bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-container md:p-8"
              >
                <div>
                  <p className="mb-2 font-headline text-2xl font-bold text-primary-container">
                    {event.date
                      ? new Date(event.date).toLocaleDateString('it-IT', {
                          day: 'numeric',
                          month: 'long',
                        })
                      : 'COMING SOON'}
                  </p>
                  <h4 className="mb-6 text-4xl font-bold">{event.city}</h4>

                  <div className="my-6 h-px w-full bg-white/10" />

                  <p className="mb-3 text-xs tracking-widest text-white/50 uppercase">
                    In collaborazione con:
                  </p>
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold tracking-wide text-white uppercase">
                      {event.community}
                    </p>
                    {event.logo && (
                      <Image
                        src={event.logo}
                        alt={event.community}
                        width={64}
                        height={64}
                        className="h-16 w-16 shrink-0 rounded-xl object-contain"
                      />
                    )}
                  </div>
                </div>

                {event.url ? (
                  isPast ? (
                    <span className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-md bg-white/5 px-6 py-3 font-bold text-white/30">
                      TERMINATO
                    </span>
                  ) : (
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary-container px-6 py-3 font-bold text-black shadow-lg shadow-primary-container/30 transition-all hover:bg-primary-container-light hover:shadow-primary-container/50"
                    >
                      BIGLIETTI
                      <span className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </a>
                  )
                ) : (
                  <span className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-md bg-white/5 px-6 py-3 font-bold text-white/30">
                    BIGLIETTI PROSSIMAMENTE
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
