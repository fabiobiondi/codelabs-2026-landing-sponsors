'use client'

import { useEffect, useState } from 'react'
import { Container } from '@/components/Container'

interface EventLocation {
  name: string
  lat: number
  lng: number
  date?: string
  sponsor?: string
  description?: string
}

const pastEvents: EventLocation[] = [
  {
    name: 'Vicenza',
    lat: 45.5455,
    lng: 11.5354,
    date: '23 gennaio 2026',
    sponsor: 'Confartigianato Vicenza e DIH',
    description: 'Quasi 200 partecipanti',
  },
]

const futureEvents: EventLocation[] = [
  { name: 'Milano', lat: 45.4642, lng: 9.19 },
  { name: 'Roma', lat: 41.9028, lng: 12.4964 },
  { name: 'Napoli', lat: 40.8518, lng: 14.2681 },
  // { name: 'Torino', lat: 45.0703, lng: 7.6869 },
  { name: 'Bologna', lat: 44.4949, lng: 11.3426 },
  { name: 'Firenze', lat: 43.7696, lng: 11.2558 },
  { name: 'Bari', lat: 41.1171, lng: 16.8719 },
  { name: 'Palermo', lat: 38.1157, lng: 13.3615 },
  { name: 'Cagliari', lat: 39.2238, lng: 9.1217 },
  { name: 'Lecce', lat: 40.3516, lng: 18.175 },
  { name: 'Catania', lat: 37.5079, lng: 15.083 },
]

function MapInner() {
  const [ready, setReady] = useState(false)
  const [modules, setModules] = useState<{
    MapContainer: any
    TileLayer: any
    Marker: any
    Popup: any
    L: any
  } | null>(null)

  useEffect(() => {
    Promise.all([import('react-leaflet'), import('leaflet')]).then(
      ([rl, L]) => {
        setModules({
          MapContainer: rl.MapContainer,
          TileLayer: rl.TileLayer,
          Marker: rl.Marker,
          Popup: rl.Popup,
          L: L.default || L,
        })
        setReady(true)
      },
    )
  }, [])

  if (!ready || !modules) {
    return (
      <div className="h-[500px] w-full animate-pulse rounded-2xl bg-slate-100" />
    )
  }

  const { MapContainer, TileLayer, Marker, Popup, L } = modules

  const pastIcon = new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

  const futureIcon = new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

  return (
    <MapContainer
      center={[42.5, 12.5]}
      zoom={5}
      scrollWheelZoom={false}
      className="z-0 h-[500px] w-full rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pastEvents.map((event) => (
        <Marker
          key={event.name}
          position={[event.lat, event.lng]}
          icon={pastIcon}
        >
          <Popup>
            <strong>{event.name}</strong>
            {event.date && (
              <>
                <br />
                📅 {event.date}
              </>
            )}
            {event.sponsor && (
              <>
                <br />
                🏢 {event.sponsor}
              </>
            )}
            {event.description && (
              <>
                <br />
                {event.description}
              </>
            )}
            {!event.description && (
              <>
                <br />
                Evento già realizzato ✅
              </>
            )}
          </Popup>
        </Marker>
      ))}
      {futureEvents.map((event) => (
        <Marker
          key={event.name}
          position={[event.lat, event.lng]}
          icon={futureIcon}
        >
          <Popup>
            <strong>{event.name}</strong>
            {event.date && (
              <>
                <br />
                📅 {event.date}
              </>
            )}
            {event.sponsor && (
              <>
                <br />
                🏢 {event.sponsor}
              </>
            )}
            {event.description ? (
              <>
                <br />
                {event.description}
              </>
            ) : (
              <>
                <br />
                Cerchiamo sponsor! 🤝
              </>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export function EventMap() {
  return (
    <section id="event-map" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto mb-12 max-w-4xl lg:mx-0">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Le nostre tappe
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Scopri dove si è già svolto l&apos;evento e dove vorremmo portarlo
            prossimamente. <br />
            <span className="font-bold">
              Aiutaci a raggiungere più persone e diventa sponsor!
            </span>
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-block h-4 w-4 rounded-full bg-green-500" />
            <span className="text-sm text-slate-700">
              Evento già realizzato
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-4 w-4 rounded-full bg-orange-500" />
            <span className="text-sm text-slate-700">Cerchiamo sponsor</span>
          </div>
        </div>

        <MapInner />
      </Container>
    </section>
  )
}
