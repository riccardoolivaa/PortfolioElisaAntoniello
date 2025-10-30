'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Scenic Design', 'Lighting', 'Audio', 'Photography', 'Allestimento'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Carica i progetti
    async function loadProjects() {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data.projects || []);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-900 text-black">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 animate-fade-in">
            Portfolio
          </h1>
          <p className="text-xl text-black/80 max-w-3xl animate-fade-in animate-delay-100">
            Una collezione curata del mio lavoro in allestimento scenico, illuminotecnica, ingegneria audio e fotografia teatrale
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-bronze-600 stage-shadow'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
              >
                {category === 'All' ? 'Tutti' : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="text-center py-20">
              <p className="text-primary-500 text-lg">Caricamento progetti...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group project-card animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.coverImage || '/images/project-placeholder.jpg'}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-black transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 text-accent-light mb-2">
                        <span className="text-sm font-medium">{project.category}</span>
                        <span className="text-sm">·</span>
                        <span className="text-sm">{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                      <p className="text-black/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.excerpt}
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="text-black" size={20} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-primary-500 text-lg">
                Nessun progetto trovato in questa categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif text-primary-900 mb-6">
            Vuoi Vederne di Più?
          </h2>
          <p className="text-xl text-primary-600 mb-8 max-w-2xl mx-auto">
            Esplora la galleria completa di immagini e video del mio percorso teatrale
          </p>
          <Link href="/gallery" className="btn-primary inline-flex items-center gap-2">
            Visita la Galleria
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}