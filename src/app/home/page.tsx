import { HeroSection } from './components/HeroSection'
import { CoreTracksSection } from './components/CoreTracksSection'
import { SpeakerSection } from './components/SpeakerSection'
import { LocationsSection } from './components/LocationsSection'
import { SupportSection } from './components/SupportSection'
import { PastEventsSection } from './components/PastEventsSection'
import { SponsorsSection } from './components/SponsorsSection'
import { CTASection } from './components/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoreTracksSection />
      <SpeakerSection />
      <LocationsSection />
      <SupportSection />
      <PastEventsSection />
      <SponsorsSection />
      <CTASection />
    </>
  )
}
