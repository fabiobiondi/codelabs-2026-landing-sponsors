export function SupportSection() {
  const items = [
    {
      icon: 'laptop',
      title: 'Un laptop',
      description:
        'Porta il tuo computer portatile già carico. In alcune location potresti non avere la possibilità di caricarlo durante il workshop',
    },
    {
      icon: 'mail',
      title: 'Un account GMail personale',
      description:
        'Un account GMail personale (no business o workspace). Fondamentale per attivare i crediti gratuiti che ti forniremo',
    },
    {
      icon: 'nodejs',
      title: 'Node v. 24',
      description: 'Assicurati di avere la versione 24 di Node già installato.',
    },

    {
      icon: 'code',
      title: 'Text Editor / IDE',
      description:
        'Potresti anche usare Notepad 😅  ma ti consigliamo Antigravity, Visual Studio Code, Webstorm o simili',
    },
    {
      icon: 'terminal',
      title: 'Terminale',
      description:
        "Conoscenza base dell'utilizzo del Terminale: esterno o integrato nell'ID",
    },
    {
      icon: 'wifi',
      title: 'Wifi / 4G',
      description: 'Avremo una Wifi ma ti consigliamo un hotspot personale 4G.',
    },
  ]

  return (
    <section id="requisiti" className="py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-12">
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-headline text-5xl font-black">
            <span className="text-primary-container">Cosa portare</span> al
            workshop
          </h2>
          <div className="mx-auto max-w-4xl text-white/40">
            Per seguire la masterclass (mattina) non è necessario nulla, porta
            solo la tua curiosità e la voglia di imparare!{' '}
            <div className="text-white">
              Per partecipare al workshop (pomeriggio) sono necessari alcuni
              requisiti, elencati di seguito.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="group border border-white/5 bg-surface-container p-6 transition-all hover:border-primary-container md:p-10"
            >
              <span className="material-symbols-outlined mb-6 inline-block text-4xl text-[#FF00FF] transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <h4 className="mb-4 text-xl font-bold">{item.title}</h4>
              <p className="text-sm text-white/50">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
