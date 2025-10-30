import Link from 'next/link'
import { Instagram, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-theater-500"
              >
                <path
                  d="M16 2L4 8V16C4 23.5 9 27.5 16 30C23 27.5 28 23.5 28 16V8L16 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 10V22M11 16H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-semibold text-lg">Elisa Antoniello</span>
            </div>
            <p className="text-sm text-neutral-600">
              Studentessa di Allestimento Scenico presso l'Accademia Teatro alla Scala
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-neutral-900 mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-sm text-neutral-600 hover:text-theater-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-neutral-600 hover:text-theater-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/cv" className="text-sm text-neutral-600 hover:text-theater-500 transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-sm text-neutral-600 hover:text-theater-500 transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-neutral-900 mb-4">Contatti</h3>
            <div className="space-y-3">
              <a
                href="https://instagram.com/elisaantoniello"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-theater-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @elisaantoniello
              </a>
              <a
                href="mailto:elisa.antoniello@example.com"
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-theater-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                elisa.antoniello@example.com
              </a>
              <a
                href="tel:+393901234567890"
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-theater-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +39 390 123 4567
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
          <p className="text-sm text-neutral-500">
            © {currentYear} Elisa Antoniello. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
