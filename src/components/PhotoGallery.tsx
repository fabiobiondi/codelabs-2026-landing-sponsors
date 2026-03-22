import Image from 'next/image'
import { Container } from '@/components/Container'
import photo1 from '@/images/photo-gallery/1769162460239.jpg'
import photo2 from '@/images/photo-gallery/IMG_6299.jpg'
import photo3 from '@/images/photo-gallery/IMG_6305.jpg'
import photo4 from '@/images/photo-gallery/IMG_6311.jpg'
import photo5 from '@/images/photo-gallery/IMG_6322.jpg'
import photo6 from '@/images/photo-gallery/IMG_6327.jpg'
import photo7 from '@/images/photo-gallery/IMG_6342.jpg'
import photo8 from '@/images/photo-gallery/IMG_6343.jpg'
import photo9 from '@/images/photo-gallery/IMG_6297.jpg'

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo9,
  //photo5,
  //photo6,
  photo7,
  // photo8,
]

export function PhotoGallery() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <h2 className="mb-12 font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
          Eventi precedenti (vicenza 2026)
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-4xl bg-gray-100 shadow-lg"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={photo}
                  alt={`Gallery photo ${index + 1}`}
                  className="object-cover transition duration-300 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
