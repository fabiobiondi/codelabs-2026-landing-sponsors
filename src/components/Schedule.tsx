'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

interface Day {
  when: string
  subtitle: string
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots2?: any
  timeSlots: Array<{
    name: string
    title: string
    description: string | null
    start: string
    end: string
  }>
}



const schedule: Array<Day> = [
  {
    when: 'Mattina: MasterClass',
    subtitle: 'JavaScript & Google AI',
    date: '',
    dateTime: '2022-04-04',
    summary:
      "Una masterclass sull'utilizzo di Google Gemini in applicazioni JavaScript con teoria e sessioni di live coding.",
    timeSlots: [
      {
        title: 'Google Gemini 3, Gemini CLI e AntiGravity',
        name: 'Fabio Biondi',
        description: 'Una panoramica sulle API di Google Gemini 3 e sui vantaggi di una loro integrazione in applicazioni web. Vedremo inoltre come poter sfruttare Gemini CLI e AntiGravity, il nuovo IDE di Google, come Code Assistant, e li utilizzeremo anche durante le sessioni successive con esempi pratici e casi d\'uso',
        start: '09:45',
        end: '10:30',
      },
      {
        title: 'Gemini API in JavaScript applications',
        name: 'Fabio Biondi',
        description: "Esempi pratici di utilizzo delle API di Google Gemini 3 in applicazioni JavaScript per la generazione di contenuti, la creazione di prompt multimodali, create agenti e chat, analisi dei risultati e dei consumi. Creiamo inoltre esempi reali di integrazione delle API di Nano Banana Pro e VEO",
        start: '10:30',
        end: '11:15',
      },
      {
        title: 'Coffee Break',
        name: '',
        description: "Momento di relax, discussioni e networking",
        start: '11:15',
        end: '11:45',
      },

      {
        title: 'Function Calling e MCP',
        name: 'Fabio Biondi',
        description: "Estendere le capacità di un LLM con l'integrazione di API esterne tramite il 'Function Calling' , l'integrazione di MCP server di terze parti e la creazione di un MCP server",
        start: '11:45',
        end: '13:00',
      },

    ],
  },
  {
    when: 'Pomeriggio',
    subtitle: 'Talks',
    date: '',
    dateTime: '2022-04-05',
    summary:
      'Il pomeriggio sarà dedicato a talk tecnici su come integrare l\'intelligenza artificiale nello sviluppo frontend moderno.',
    timeSlots: [
      {
        name: 'Giorgio Boa - Egen',
        title: 'Firebase & Genkit:<br /> Come rivoluzionare la tua applicazione con l\'AI',
        description: 'Preparati a vedere come l\'AI semplifica il tuo flusso di lavoro, rendendolo più dinamico e produttivo. Con Genkit, il tool open-source di punta di Google, vedrai come creare funzionalità avanzate e coinvolgenti, in un battito di ciglia.',
        start: '14:30',
        end: '15:15',
      },
      {
        name: 'Matteo Ronchi - WorkWave',
        title: 'Spec Driven Development',
        description: 'Basta un prompt... cosa ci vuole? Manuale di sopravvivenza per chi vuole scrivere il proprio codice usando AI ma restando in controllo. Scopriremo SDD, cos’è e come può diventare uno strumento per velocizzare il nostro lavoro quotidiano. Vedremo alcuni dei principali framework disponibili e anche come farne a meno!',
        start: '15:15',
        end: '16:15',
      },
      {
        name: 'Coffee Break',
        title: '',
        description: "Momento di relax, discussioni e networking",
        start: '16:15',
        end: '16:45',
      },
      {
        name: 'Andrea Saltarello - Improve',
        title: 'Chat GPT under the hood',
        description: 'Cosa rende ChatGPT (l\'app)... ChatGPT? Perchè, a parità di modello, ChatGPT spesso risponde "meglio" di Copilot? Diamo una occhiata sotto al cofano, e capiamo come e perchè il modello è solo una parte della soluzione',
        start: '16:45',
        end: '17.30',
      },
      {
        name: 'Gilberto Cocchi - Google',
        title: 'Chrome DevTools (MCP) for your AI agent ',
        description: `
        Your AI assistant helps you write code, but it may lack access to information about how that code would run on a real browser from the IDE context.
Join us to see how chrome-devtools-mcp changes the game by giving your agent direct access to Chrome DevTools for reliable automation, in-depth debugging, and performance analysis.
Learn how to troubleshoot stating pages, making your AI workflow significantly smarter and faster.
`,
        start: '17:30',
        end: '18:00',
      },
      {
        name: 'Panel con MC',
        title: 'Tutti gli speaker',
        description: 'Una discussione in cui si parla di AI, Vibe Coding e di come integrare l\'intelligenza artificiale nello sviluppo frontend moderno.',
        start: '18:00',
        end: '18:30',
      }
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pr-8 sm:pb-0 sm:pl-0">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime + dayIndex}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="data-selected:not-data-focus:outline-hidden">
                        <span className="absolute inset-0" />
                        {day.date}
                        <span ></span>
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day, dayIndex) => (
          <TabPanel
            key={day.dateTime + dayIndex}
            className="data-selected:not-data-focus:outline-hidden"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900 text-center">
        <div>
          <time dateTime={day.dateTime}>{day.when}</time>
          <div className="text-3xl" dangerouslySetInnerHTML={{ __html: day.subtitle || '' }}></div>
        </div>
        {/*<div className="text-3xl" dangerouslySetInnerHTML={{__html: day.date?.toString() || ''}}></div>*/}
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900 text-center p-3">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur-sm',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlotIndex}
          aria-label={`${timeSlot.title} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}+01:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}+01:00`}>
              {timeSlot.end}
            </time>
          </p>
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900" dangerouslySetInnerHTML={{ __html: timeSlot.title }}>
          </h4>

          <div>{timeSlot.name}</div>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}

        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8">
      {schedule.map((day, dayIndex) => (
        <section key={dayIndex} className="mb-12 lg:mb-4">
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-5" />
        </section>
      ))
      }
    </div >
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Una MasterClass di 3 ore e 4 Talks
          </h2>
          <ol className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Un’intera giornata di pura energia tech:
            <li>• La mattina si parte con una <span className="font-bold"> masterclass di tre ore</span> tenuta da Fabio Biondi, tra teoria, codice ed esempi pratici:
              dall'integrazione delle <span className="font-bold">API di Google Gemini v.3</span> al Vibe Coding con <span className="font-bold">Gemini CLI</span> e <span className="font-bold">Antigravity</span>

            </li>
            <li>• Il pomeriggio invece si accende con <span className="font-bold">talk sul mondo AI tenuti da sviluppatori esperti</span></li>

          </ol>
          <p className="mt-4 font-display font-bold text-2xl tracking-tight text-blue-900">
            La scaletta è ancora in fase di definizione
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-top-40 -bottom-32" />
        <Container className="relative">
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
