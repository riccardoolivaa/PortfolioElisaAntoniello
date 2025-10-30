'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Download, MessageCircle } from 'lucide-react'

const Hero = () => {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const rect = spotlightRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        spotlightRef.current.style.setProperty('--mouse-x', `${x}%`)
        spotlightRef.current.style.setProperty('--mouse-y', `${y}%`)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={spotlightRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden spotlight-effect"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-white -z-10" />
      
      {/* Theatrical curtain effect */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_50px,rgba(139,64,64,0.1)_50px,rgba(139,64,64,0.1)_100px)]" />
      </div>

      <div className="container-custom py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title with animation */}
          <h1 className="text-5xl md:text-7xl font-light mb-6 animate-fade-up">
            <span className="block text-neutral-900">Elisa Antoniello</span>
            <span className="block text-2xl md:text-3xl mt-4 text-neutral-600">
              Allestimento Scenico
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Studentessa presso l'Accademia Teatro alla Scala di Milano.
            Specializzata in illuminotecnica, scenografia e allestimento teatrale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
            <Link 
              href="https://wa.me/3901234567890" 
              target="_blank"
              className="button-primary flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contattami su WhatsApp
            </Link>
            <Link 
              href="/cv" 
              className="button-secondary flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Scarica CV
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
