export const regionInfo: Record<
  string,
  { city: string; date: string | null; url?: string; community: string }
> = {
  IT34: { city: 'Vicenza', date: '2026-01-23', community: 'Confartigianato' },
  IT62: { city: 'Roma', date: '2026-05-05', community: 'google group roma' },
  IT75: {
    city: 'Lecce',
    date: '2026-07-06',
    community: 'google group lecce',
    url: 'https://gdg.community.dev/gdg-lecce/',
  },
  IT82: { city: 'Catania', date: null, community: 'google group catania' },
  IT25: {
    city: 'Milano',
    date: null,
    url: 'http:/www.google.com',
    community: 'google group milano',
  },
  IT72: { city: 'Napoli', date: null, community: 'google group napoli' },
}
