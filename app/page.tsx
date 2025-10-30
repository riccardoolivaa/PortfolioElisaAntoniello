import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import PortfolioPreview from '@/components/portfolio/PortfolioPreview';
import SkillsSection from '@/components/ui/SkillsSection';

export default function Home() {
  return (
    <div className="cursor-light">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-placeholder.png"
              alt="Scenic Design"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/70" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 animate-slide-up">
            Elisa Antonielo
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 animate-slide-up animate-delay-100">
            Scenic Design Student
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-slide-up animate-delay-200">
            Teatro alla Scala Academy · Lighting · Audio · Photography
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animate-delay-300">
            <a
              href="https://wa.me/3391430692?text=Ciao!%20Vorrei%20avere%20qualche%20informazione."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Contact on WhatsApp
            </a>
            <Link href="/cv" className="btn-secondary flex items-center gap-2">
              <Download size={20} />
              Download CV
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Explore a selection of my work in scenic design, lighting, audio, and photography
            </p>
          </div>
          <PortfolioPreview />
          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-primary inline-flex items-center gap-2">
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Technical and creative competencies developed through academic training and hands-on experience
            </p>
          </div>
          <SkillsSection />
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden stage-shadow">
              <Image
                src="/images/about-preview.jpg"
                alt="Elisa Antonielo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-primary-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-primary-700 mb-6 leading-relaxed">
                I'm a passionate scenic design student at the prestigious Teatro alla Scala Academy in Milan, 
                where I'm developing expertise in stage design, lighting, audio engineering, and theatrical photography.
              </p>
              <p className="text-lg text-primary-700 mb-8 leading-relaxed">
                My work combines technical precision with creative vision, bringing theatrical productions to life 
                through innovative design solutions and attention to detail.
              </p>
              <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
