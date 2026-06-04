export interface EventData {
  city: string
  date: string | null
  dayOfWeek?: string
  url?: string | null
  community: string
  logo?: string
  x: number
  y: number
}

export const regionInfo: EventData[] = [
  {
    city: 'Vicenza',
    date: '2026-01-23',
    dayOfWeek: 'Venerdì',
    community: 'Confartigianato',
    logo: '/images/communities/confartigianato-vicenza.png',
    url: 'https://evento-2026-vicenza-conf.vercel.app/',
    x: 425, // Slightly left of previous to hit the marker
    y: 195, // Lowered to align with the dot
  },
  {
    city: 'Pisa',
    date: '2026-04-18',
    dayOfWeek: 'Sabato',
    community: 'google group pisa',
    logo: '/images/communities/logo-gdg-pisa.png',
    url: 'https://devfest.gdgpisa.it/',
    x: 370,
    y: 310,
  },
  {
    city: 'Lecce',
    date: '2026-06-06',
    dayOfWeek: 'Sabato',
    community: 'google group lecce',
    url: 'https://gdg.community.dev/events/details/google-gdg-lecce-presents-agentic-apps-con-google-gemini-sdk-e-typescript/',
    logo: '/images/communities/gdg-lecce.webp',
    x: 825, // Brought in from 940 to fit the map edge
    y: 580,
  },
  {
    city: 'Catania',
    date: '2026-07-11',
    dayOfWeek: 'Sabato',
    community: 'google group catania',
    logo: '/images/communities/gdg_catania.png',
    url: null,
    x: 645, // Moved left to stay on Sicily
    y: 800,
  },
  {
    city: 'Palermo',
    date: '2026-07-24',
    dayOfWeek: 'Venerdì',
    community: 'google group palermo',
    x: 540,
    y: 760,
  },

  {
    city: 'Milano',
    date: '2026-09-25',
    dayOfWeek: '',
    url: null,
    community: 'google group milano',
    logo: '/images/communities/gdg-milano.png',
    x: 300,
    y: 195,
  },
  {
    city: 'Roma',
    date: null,
    community: 'google group roma',
    x: 500,
    y: 480,
  },
  {
    city: 'Napoli',
    date: null,
    community: 'google group napoli',
    x: 602,
    y: 540,
  },
]
