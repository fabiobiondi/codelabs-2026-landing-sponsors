import { ContactUs } from '@/components/ContactUs'
import { EventMap } from '@/components/EventMap'
import { Requirements } from '@/components/Requirements'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { PhotoGallery } from '@/components/PhotoGallery'
import { Schedule } from '@/components/Schedule'
import { Speaker } from '@/components/Speaker'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Speakers /> */}
      <Speaker />
      {/* <Schedule /> */}
      <EventMap />
      <Requirements />
      <PhotoGallery />
      <Sponsors />
      <ContactUs />
      {/* <Newsletter /> */}
    </>
  )
}
