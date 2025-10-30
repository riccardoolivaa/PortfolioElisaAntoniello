'use client'

import Link from 'next/link'
import { Lightbulb, Music, Camera, Palette, Settings, Users } from 'lucide-react'

const skills = [
  {
    icon: Palette,
    title: 'Allestimento Scenico',
    description: 'Progettazione e realizzazione di scenografie teatrali',
    level: 90,
  },
  {
    icon: Lightbulb,
    title: 'Illuminotecnica',
    description: 'Design luci e programmazione consolle',
    level: 85,
  },
  {
    icon: Music,
    title: 'Audio',
    description: 'Sound design e gestione tecnica audio',
    level: 75,
  },
  {
    icon: Camera,
    title: 'Fotografia',
    description: 'Documentazione teatrale e ritratti di scena',
    level: 80,
  },
  {
    icon: Settings,
    title: 'Macchinistica',
    description: 'Movimentazione scenica e sistemi meccanici',
    level: 70,
  },
  {
    icon: Users,
    title: 'Coordinamento',
    description: 'Gestione team e organizzazione produzione',
    level: 85,
  },
]

const Skills = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4 text-neutral-900">Competenze</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Le mie aree di specializzazione nel mondo del teatro e dello spettacolo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className="card group hover:border-theater-200 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-theater-50 rounded-lg flex items-center justify-center group-hover:bg-theater-100 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-theater-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-neutral-900 mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      {skill.description}
                    </p>

                    {/* Skill Level Bar */}
                    <div className="relative">
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-theater-400 to-theater-500 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            transform: 'scaleX(0)',
                            animation: 'scaleIn 1s ease-out forwards',
                            animationDelay: `${index * 100 + 500}ms`,
                          }}
                        />
                      </div>
                      <span className="absolute -top-6 right-0 text-xs text-neutral-500">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* About CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/about" 
            className="inline-block text-theater-500 hover:text-theater-600 font-medium transition-colors duration-200"
          >
            Scopri di più su di me →
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
