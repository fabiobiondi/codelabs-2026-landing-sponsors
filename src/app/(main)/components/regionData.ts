export const regionInfo: Record<
  string,
  {
    city: string
    date: string | null
    url?: string | null
    community: string
    logo?: string
  }
> = {
  IT34: {
    city: 'Vicenza',
    date: '2026-01-23',
    community: 'Confartigianato',
    logo: '/images/communities/confartigianato-vicenza.png',
    url: 'https://evento-2026-vicenza-conf.vercel.app/',
  },
  IT62: { city: 'Roma', date: null, community: 'google group roma' },
  IT75: {
    city: 'Lecce',
    date: '2026-07-06',
    community: 'google group lecce',
    url: null, //'https://gdg.community.dev/gdg-lecce/',
    logo: '/images/communities/gdg-lecce.webp',
  },
  IT82: {
    city: 'Catania',
    date: null,
    community: 'google group catania',
    logo: '/images/communities/gdg-catania.png',
    url: null, // 'https://gdg.community.dev/gdg-catania/',
  },
  IT25: {
    city: 'Milano',
    date: '2026-09-25',
    url: null,
    community: 'google group milano',
    logo: '/images/communities/gdg-milano.png',
  },
  IT72: { city: 'Napoli', date: null, community: 'google group napoli' },
}
