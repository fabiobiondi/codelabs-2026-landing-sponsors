import { Container } from '@/components/Container'

const requirements = [
  {
    title: 'Venue',
    description:
      'Uno spazio che possa ospitare almeno 80-100 partecipanti, con sedie e tavoli per i workshop.',
    icon: '🏢',
  },
  {
    title: 'Connettività Wi-Fi',
    description:
      'Una rete Wi-Fi stabile e performante, indispensabile per i codelab e le attività hands-on.',
    icon: '📡',
  },
  {
    title: 'Proiettore e Audio',
    description:
      'Proiettore o monitor di grandi dimensioni e impianto audio per le sessioni frontali.',
    icon: '🎥',
  },
  {
    title: 'Catering',
    description:
      'Coffee break e/o pranzo leggero per i partecipanti durante la giornata.',
    icon: '☕',
  },
  {
    title: 'Prese elettriche',
    description:
      'Accesso a prese di corrente o ciabatte per permettere ai partecipanti di lavorare sui propri laptop.',
    icon: '🔌',
  },
  {
    title: 'Supporto logistico',
    description:
      "Personale o volontari per accoglienza, registrazione e supporto durante l'evento.",
    icon: '🤝',
  },
]

export function Requirements() {
  return (
    <section id="requirements" className="py-4">
      <Container>
        <div className="mx-auto mb-12 lg:mx-0">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Di cosa abbiamo bisogno
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Per organizzare un Codelab nella tua città, ecco cosa ci serve.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {requirements.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 p-8 transition hover:border-blue-300 hover:shadow-md"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-base tracking-tight text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border-2 border-blue-500 bg-blue-50 p-8 sm:p-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="text-5xl">💰</div>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-blue-900">
                {/* Budget minimo: 2.000 € */}
                Vuoi supportarci come sponsor?
              </h3>
              <p className="mt-2 text-base leading-7 tracking-tight text-slate-700">
                Tu, come sponsor, avrai il tuo spazio e a noi serve un po' di
                budget per coprire i costi di trasferta, gadget per i
                partecipanti, organizzare challenge a premi e una minima
                retribuzione per la preparazione e la conduzione del Codelab.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
