import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ContactUs() {
  return (
    <a href="mailto:fabio.biondi.developer@gmail.com?subject=Info%20per%20diventare%20sponsor%20di%20un%20Codelab">
      <section id="contact-us" aria-label="Contattaci">
        <Container>
          <div className="relative -mx-4 overflow-hidden bg-blue-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
            <Image
              className="absolute top-0 left-1/2 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
              src={backgroundImage}
              alt=""
              width={919}
              height={1351}
              unoptimized
            />
            <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
              <div>
                <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                  Contattaci
                </p>
                <p className="mt-4 text-lg tracking-tight text-blue-900">
                  Vuoi diventare sponsor di un Codelab nella tua città?
                  <br />
                  <span className="font-bold">
                    Scrivici per saperne di più!
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <Button type="button" className="cursor-pointer">
                    <span className="sr-only sm:not-sr-only">Scrivici</span>
                    <span className="sm:hidden">
                      <ArrowRightIcon className="h-6 w-6" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </a>
  )
}
