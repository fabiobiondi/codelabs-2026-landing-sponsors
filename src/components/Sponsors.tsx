import clsx from 'clsx'
import Image from 'next/image'

import { Container } from '@/components/Container'

import CameraCommercio from '@/images/logos/camera-commercio-vicenza.png'
import Conf from '@/images/logos/confartigianato-vicenza.png'
import DIH from '@/images/logos/DIH-vicenza.png'
import ebav from '@/images/logos/ebav.png'
import learn from '@/images/logos/logo-light-mode@3x.png'
import fb from '@/images/logos/fb.png'
import edgemony from '@/images/logos/sicily/edgemony.png'
import elcaLogoNero from '@/images/logos/sicily/elca_logonero.png'

const sponsors = [
  {
    name: 'Confartigianato Vicenza',
    logo: Conf,
    url: 'https://www.confartigianatovicenza.it/',
  },
  {
    name: 'Camera di Commercio Vicenza',
    logo: CameraCommercio,
    url: 'https://www.vi.camcom.it/',
  },
  {
    name: 'Digital Innovation Hub Vicenza',
    logo: DIH,
    url: 'https://www.dihvicenza.it/',
  },
  {
    name: 'Ente Bilaterale Artigianato Veneto',
    logo: ebav,
    url: 'https://www.ebav.it/',
  },

  {
    name: 'Edgemony',
    logo: edgemony,
    halfSize: false,
    url: 'https://www.edgemony.com/',
  },
  {
    name: 'Elca',
    logo: elcaLogoNero,
    halfSize: false,
    url: 'https://www.elca.ch/',
  },
  { name: 'LearnByDo.ing', logo: learn, url: 'https://www.learnbydo.ing/' },
  {
    name: 'Fabio Biondi',
    logo: fb,
    halfSize: true,
    url: 'https://www.fabiobiondi.dev/',
  },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          I nostri sponsors
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xl tracking-tight text-blue-900">
          Gli sponsor che hanno già collaborato con noi
        </p>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-items-center gap-x-32 gap-y-12 sm:grid-cols-2 md:grid-cols-4 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className={clsx(
                // The flex classes are no longer needed here,
                // as place-items-center on the parent handles it.
                { 'max-w-48': !sponsor.halfSize },
                { 'max-w-24': sponsor.halfSize },
              )}
            >
              {sponsor.url ? (
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                  <Image src={sponsor.logo} alt={sponsor.name} />
                </a>
              ) : (
                <Image src={sponsor.logo} alt={sponsor.name} />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
