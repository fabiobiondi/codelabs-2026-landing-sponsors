import { regionInfo } from './regionData'

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
          {Object.entries(regionInfo).map(([id, event]) => (
            <div
              key={id}
              className="group flex flex-col justify-between border border-white/10 bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-container md:p-8"
            >
              <div>
                <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-0">
                  <h4 className="text-2xl font-bold">{event.city}</h4>
                  <span className="border border-primary-container/20 bg-primary-container/10 px-4 py-2 font-headline text-lg font-bold text-white">
                    {event.date
                      ? new Date(event.date)
                          .toLocaleDateString('it-IT', {
                            day: 'numeric',
                            month: 'short',
                          })
                          .toUpperCase()
                      : 'PRESTO DISPONIBILE'}
                  </span>
                </div>
                <p className="mb-8 text-sm tracking-widest text-white/50 uppercase">
                  {event.community}
                </p>
              </div>

              {event.url && (
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-container-light inline-flex items-center gap-2 font-bold text-primary-container transition-colors"
                >
                  BIGLIETTI
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
