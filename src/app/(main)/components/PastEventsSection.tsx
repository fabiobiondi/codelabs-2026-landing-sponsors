/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import photo1 from '@/images/photo-gallery/vicenza-2026/1769162460239.jpg'
import photo2 from '@/images/photo-gallery/vicenza-2026/IMG_6299.jpg'
import photo3 from '@/images/photo-gallery/vicenza-2026/IMG_6305.jpg'
import pisa1 from '@/images/photo-gallery/pisa-2026/IMG_7065.jpg'
import pisa2 from '@/images/photo-gallery/pisa-2026/IMG_7066.jpg'
import pisa3 from '@/images/photo-gallery/pisa-2026/IMG_7099.jpg'

export function PastEventsSection() {
  return (
    <section id="past-events" className="bg-surface-container-lowest py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-12">
        <div className="mb-16 flex items-center justify-between">
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            Edizioni Precedenti
          </h2>
        </div>
        
        <div className="my-16 flex items-center justify-between">
          <span className="font-mono tracking-tighter text-primary-container">
            PISA 2026 // MARZO
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:h-[600px] md:grid-cols-12 md:grid-rows-2">
          <div className="group relative col-span-1 aspect-4/3 overflow-hidden md:col-span-8 md:row-span-2 md:aspect-auto">
            <Image
              src={pisa1}
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              alt="Large lecture hall filled with engaged developers"
              fill
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/80 to-transparent p-4 md:p-8">
              <div>
                <p className="font-bold text-primary">
                  Pisa | GDG Pisa
                </p>
                <p className="text-sm text-white/60">
                  Workshop
                </p>
              </div>
            </div>
          </div>
          <div className="group relative col-span-1 aspect-16/9 overflow-hidden md:col-span-4 md:row-span-1 md:aspect-auto">
            <Image
              src={pisa2}
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              alt="Developer working on a laptop with code"
              fill
            />
          </div>
          <div className="group relative col-span-1 aspect-16/9 overflow-hidden md:col-span-4 md:row-span-1 md:aspect-auto">
            <Image
              src={pisa3}
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              alt="Developers networking during a coffee break"
              fill
            />
          </div>
        </div>

        <div className="my-16 flex items-center justify-between">
          <span className="font-mono tracking-tighter text-primary-container">
            VICENZA 2026 // GENNAIO
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:h-[600px] md:grid-cols-12 md:grid-rows-2">
          <div className="group relative col-span-1 aspect-4/3 overflow-hidden md:col-span-8 md:row-span-2 md:aspect-auto">
            <Image
              src={photo1}
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              alt="Large lecture hall filled with engaged developers"
              fill
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/80 to-transparent p-4 md:p-8">
              <div>
                <p className="font-bold text-primary">
                  Vicenza | Confartigianato | DIH
                </p>
                <p className="text-sm text-white/60">
                  Quasi 200 partecipanti alla masterclass su Gemini
                </p>
              </div>
            </div>
          </div>
          <div className="group relative col-span-1 aspect-16/9 overflow-hidden md:col-span-4 md:row-span-1 md:aspect-auto">
            <Image
              src={photo2}
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              alt="Developer working on a laptop with code"
              fill
            />
          </div>
          <div className="group relative col-span-1 aspect-16/9 overflow-hidden md:col-span-4 md:row-span-1 md:aspect-auto">
            <Image
              src={photo3}
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              alt="Developers networking during a coffee break"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  )
}
