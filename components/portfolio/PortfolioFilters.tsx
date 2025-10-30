'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Project {
  id?: number;
  title: string;
  category: string;
  year: string;
  description?: string;
  excerpt?: string;
  coverImage: string;
  slug: string;
}

interface PortfolioFiltersProps {
  projects: Project[];
  categories: string[];
  categoryLabels: Record<string, string>;
}

export default function PortfolioFilters({ 
  projects, 
  categories,
  categoryLabels 
}: PortfolioFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState('Tutti');

  const filteredProjects =
    selectedCategory === 'Tutti'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
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
                {categoryLabels[category] || category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
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
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-black transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 text-accent-light mb-2">
                        <span className="text-sm font-medium">
                          {categoryLabels[project.category] || project.category}
                        </span>
                        <span className="text-sm">·</span>
                        <span className="text-sm">{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                      <p className="text-black/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description || project.excerpt}
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="text-black" size={20} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-primary-500 text-lg">
                Nessun progetto trovato in questa categoria.
              </p>
              <p className="text-primary-400 mt-2">
                Aggiungi nuovi progetti dalla sezione CMS.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
