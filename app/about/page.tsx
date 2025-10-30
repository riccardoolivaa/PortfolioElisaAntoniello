import Image from 'next/image';
import { Download, Theater, Lightbulb, Volume2, Camera } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 animate-fade-in">
            About Me
          </h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fade-in animate-delay-100">
            A passionate scenic design student transforming theatrical visions into reality
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
                  src="/images/about-professional.png"
                  alt="Elisa Antonielo - Professional"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden stage-shadow">
                <Image
                  src="/images/about-backstage.jpg"
                  alt="Elisa at work backstage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bio Text */}
            <div>
              <h2 className="text-3xl font-serif text-primary-900 mb-6">
                Bringing Stories to Life Through Design
              </h2>
              
              <div className="space-y-4 text-lg text-primary-700 leading-relaxed">
                <p>
                  I'm Elisa Antonielo, a scenic design student at the prestigious Teatro alla Scala Academy in Milan, 
                  where I'm pursuing my passion for creating immersive theatrical experiences.
                </p>
                
                <p>
                  My journey in theater combines technical expertise with artistic vision. Through my studies, 
                  I've developed comprehensive skills in stage design, lighting engineering, audio production, 
                  and theatrical photography - all essential elements that come together to create memorable performances.
                </p>
                
                <p>
                  What drives me is the collaborative nature of theater and the challenge of transforming abstract concepts 
                  into tangible, emotional experiences. Each project is an opportunity to push creative boundaries while 
                  maintaining technical precision and practical feasibility.
                </p>
                
                <p>
                  At Teatro alla Scala Academy, I'm not just learning techniques - I'm absorbing centuries of theatrical 
                  tradition while embracing contemporary innovation. This unique environment allows me to experiment, 
                  grow, and contribute to productions that demand excellence at every level.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/cv" className="btn-primary inline-flex items-center gap-2">
                  <Download size={20} />
                  Download Full CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Competencies */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom">
          <h2 className="text-4xl font-serif text-primary-900 mb-12 text-center">
            Technical Competencies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Scenic Design */}
            <div className="bg-white rounded-xl p-8 stage-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Theater size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Scenic Design</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-primary-700">Set Construction</span>
                      <span className="text-accent font-medium">Advanced</span>
                    </div>
                    <div className="w-full bg-primary-100 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '90%' }} />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-primary-700">Spatial Planning</span>
                      <span className="text-accent font-medium">Advanced</span>
                    </div>
                    <div className="w-full bg-primary-100 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lighting Design */}
            <div className="bg-white rounded-xl p-8 stage-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Lighting Design</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-primary-700">Lighting Programming</span>
                      <span className="text-accent font-medium">Proficient</span>
                    </div>
                    <div className="w-full bg-primary-100 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-primary-700">Atmospheric Design</span>
                      <span className="text-accent font-medium">Advanced</span>
                    </div>
                    <div className="w-full bg-primary-100 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '88%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audio Engineering */}
            <div className="bg-white rounded-xl p-8 stage-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Volume2 size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Audio Engineering</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-primary-700">Sound Design</span>
                      <span className="text-accent font-medium">Proficient</span>
                    </div>
                    <div className="w-full bg-primary-100 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }} />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-primary-700">Audio Mixing</span>
                      <span className="text-accent font-medium">Proficient</span>
                    </div>
                    <div className="w-full bg-primary-100 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Photography */}
            <div className="bg-white rounded-xl p-8 stage-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Photography</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-primary-700">Theatrical Photography</span>
                      <span className="text-accent font-medium">Advanced</span>
                    </div>
                    <div className="w-full bg-primary-100 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-primary-700">Post-Production</span>
                      <span className="text-accent font-medium">Proficient</span>
                    </div>
                    <div className="w-full bg-primary-100 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '82%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif mb-6">Let's Create Together</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on a theatrical production or learning more about my work?
          </p>
          <Link href="/contact" className="btn-secondary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
