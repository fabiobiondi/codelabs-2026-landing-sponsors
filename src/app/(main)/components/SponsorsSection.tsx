/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import CameraCommercio from '@/images/logos/camera-commercio-vicenza.png'
import Conf from '@/images/logos/confartigianato-vicenza.png'
import DIH from '@/images/logos/DIH-vicenza.png'
import ebav from '@/images/logos/ebav.png'
import learn from '@/images/logos/logo-light-mode@3x.png'
import fb from '@/images/logos/fb.png'
import edgemony from '@/images/logos/sicily/edgemony.png'
import elcaLogoNero from '@/images/logos/sicily/elca_logonero.png'

export function SponsorsSection() {
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
    /*   {
      name: 'Edgemony',
      logo: edgemony,
      url: 'https://www.edgemony.com/',
    },
    {
      name: 'Elca',
      logo: elcaLogoNero,
      url: 'https://www.elca.ch/',
    }, */
    {
      name: 'LearnByDo.ing',
      logo: learn,
      url: 'https://www.learnbydo.ing/',
    },
    {
      name: 'Fabio Biondi',
      logo: fb,
      url: 'https://www.fabiobiondi.dev/',
    },
  ]

  return (
    <section id="sponsors" className="py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-12">
        <p className="mb-16 text-center text-xs tracking-[0.4em] text-white/30 uppercase">
          Ci hanno gia supportato
        </p>
        <div className="grid grid-cols-2 items-center gap-6 opacity-80 md:grid-cols-4 lg:grid-cols-6">
          {sponsors.map((sponsor, i) => (
            <a
              key={i}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-24 items-center justify-center rounded-2xl bg-white/80 p-6 transition-transform hover:scale-105"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-full w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
