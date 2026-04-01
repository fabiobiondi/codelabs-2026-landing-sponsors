import Link from 'next/link'
import type { Metadata } from 'next'
import { TopNavBar } from './components/TopNavBar'

export const metadata: Metadata = {
  other: {
    'material-symbols':
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
  },
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-black font-body text-white selection:bg-primary-container selection:text-white">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <TopNavBar />

      <main>{children}</main>

      {/* Footer */}
      <footer className="w-full border-t border-[#FF00FF]/10 bg-surface-container-lowest font-body text-sm tracking-wide">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 px-12 py-16 md:flex-row">
          <div className="text-lg font-black text-white/50">
            Gemini Workshop
            <br />
            <span className="font-normal">Fabio Biondi</span>
          </div>

          <div className="flex gap-8">
            {/*    <Link
              className="text-white/40 hover:text-tertiary transition-colors"
              href="#"
            >
              Sponsorship
            </Link>
            <Link
              className="text-white/40 hover:text-tertiary transition-colors"
              href="#"
            >
              Contact Info
            </Link>
            <Link
              className="text-white/40 hover:text-tertiary transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-white/40 hover:text-tertiary transition-colors"
              href="#"
            >
              Terms of Service
            </Link> */}
          </div>
          <div className="text-center text-white/40 md:text-right">
            &copy; {new Date().getFullYear()} Google CodeLabs. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
