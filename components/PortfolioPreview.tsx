'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Lightbulb, Music, Camera, Palette } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: 'La Traviata',
    category: 'Allestimento',
    year: '2024',
    image: '/images/traviata.jpg',
    icon: Palette,
    description: 'Allestimento completo per la produzione della Scala'
  },
  {
    id: 2,
    title: 'Illuminazione Aida',
    category: 'Illuminotecnica',
    year: '2024',
    image: '/images/aida.jpg',
    icon: Lightbulb,
    description: 'Design luci per la nuova produzione'
  },
  {
    id: 3,
    title: 'Sound Design Otello',
    category: 'Audio',
    year: '2023',
    image: '/images/otello.jpg',
    icon: Music,
    description: 'Progettazione audio e effetti sonori'
  },
  {
    id: 4,
    title: 'Backstage Tosca',
    category: 'Fotografia',
    year: '2023',
    image: '/images/tosca.jpg',
    icon: Camera,
    description: 'Documentazione fotografica del processo creativo'
  },
]

const PortfolioPreview = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4 text-neutral-900">Portfolio</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Una selezione dei miei progetti più recenti in allestimento scenico, 
            illuminotecnica e design teatrale.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                href={`/portfolio/${item.id}`}
                className="group relative"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative aspect-[4/5] bg-neutral-200 rounded-xl overflow-hidden spotlight-effect">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`} />

                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-theater-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 ${
                    hoveredItem === item.id ? 'translate-y-0' : 'translate-y-4'
                  }`}>
                    <p className="text-white/80 text-sm mb-1">{item.category} • {item.year}</p>
                    <h3 className="text-white text-xl font-medium mb-2">{item.title}</h3>
                    <p className={`text-white/90 text-sm transition-opacity duration-300 ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-theater-500 hover:text-theater-600 font-medium transition-colors duration-200"
          >
            Vedi tutti i progetti
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioPreview
