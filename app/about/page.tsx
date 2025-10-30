import Image from 'next/image';
import { Download, Theater, Lightbulb, Volume2, Camera, Wrench } from 'lucide-react';
import Link from 'next/link';
import { getAboutPage, getSiteImages, getSiteSettings } from '@/lib/cms';
import ReactMarkdown from 'react-markdown';

const iconMap: Record<string, any> = {
  Theater,
  Lightbulb,
  Volume2,
  Camera,
  Wrench,
};

const colorMap: Record<string, { text: string; bg: string }> = {
  bronze: { text: 'text-bronze-600', bg: 'bg-bronze-50' },
  moss: { text: 'text-moss-600', bg: 'bg-moss-50' },
  brick: { text: 'text-brick-600', bg: 'bg-brick-50' },
  stone: { text: 'text-stone-600', bg: 'bg-stone-50' },
};

export default function About() {
  const aboutData = getAboutPage();
  const images = getSiteImages();
  const settings = getSiteSettings();

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-cream text-black">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 animate-fade-in">
            {aboutData.title || 'Chi Sono'}
          </h1>
          <p className="text-xl text-black/80 max-w-3xl animate-fade-in animate-delay-100">
            {aboutData.tagline || 'Una studentessa appassionata di allestimento scenico che trasforma visioni teatrali in realtà'}
          </p>
        </div>
      </section>

      {/* Main Biography */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Professional Photo */}
            <div className="space-y-6">
              <div className="relative h-[500px] rounded-2xl overflow-hidden stage-shadow">
                <Image
                  src={images.aboutProfessional}
                  alt="Elisa Antoniello - Professionale"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden stage-shadow">
                <Image
                  src={images.aboutBackstage}
                  alt="Elisa al lavoro dietro le quinte"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bio Text */}
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-6">
                Dare Vita alle Storie Attraverso il Design
              </h2>
              
              <div className="prose prose-stone prose-lg max-w-none">
                {aboutData.bio ? (
                  <ReactMarkdown>{aboutData.bio}</ReactMarkdown>
                ) : (
                  <p>
                    Studentessa di allestimento scenico presso l'Accademia Teatro alla Scala di Milano, 
                    dove perseguo la mia passione per la creazione di esperienze teatrali immersive.
                  </p>
                )}
                {aboutData.content && <ReactMarkdown>{aboutData.content}</ReactMarkdown>}
              </div>

              <div className="mt-8">
                <Link href="/cv" className="btn-primary inline-flex items-center gap-2">
                  <Download size={20} />
                  Scarica CV Completo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Competencies */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <h2 className="text-4xl font-serif text-stone-900 mb-12 text-center">
            Competenze Tecniche
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {aboutData.skills && aboutData.skills.length > 0 ? (
              aboutData.skills.map((skill: any, index: number) => {
                const Icon = iconMap[skill.icon] || Theater;
                const colors = colorMap[skill.color] || colorMap.bronze;
                
                return (
                  <div key={index} className="bg-cream rounded-xl p-8 stage-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-stone-900 mb-3">{skill.name}</h3>
                        <p className="text-stone-600 text-sm mb-3">{skill.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-stone-700 text-sm">Competenza</span>
                            <span className="text-bronze-600 font-medium">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-stone-200 rounded-full h-2">
                            <div 
                              className="bg-bronze-500 h-2 rounded-full transition-all duration-500" 
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              // Fallback skills se non presenti nel CMS
              <>
                <div className="bg-cream rounded-xl p-8 stage-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-bronze-50 text-bronze-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Theater size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-stone-900 mb-3">Allestimento Scenico</h3>
                      <p className="text-stone-600 text-sm mb-3">
                        Progettazione e costruzione di scenografie teatrali
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-stone-700">Costruzione Set</span>
                          <span className="text-bronze-600 font-medium">Avanzato</span>
                        </div>
                        <div className="w-full bg-stone-200 rounded-full h-2">
                          <div className="bg-bronze-500 h-2 rounded-full" style={{ width: '90%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bronze-500 text-cream">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif mb-6">Creiamo Insieme</h2>
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Interessato a collaborare su una produzione teatrale o a saperne di più sul mio lavoro?
          </p>
          <Link href="/contact" className="bg-cream text-bronze-700 px-8 py-3 rounded-lg font-medium hover:bg-cream-100 transition-all duration-300 inline-block">
            Contattami
          </Link>
        </div>
      </section>
    </div>
  );
}