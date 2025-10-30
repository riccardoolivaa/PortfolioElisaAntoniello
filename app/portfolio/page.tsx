'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Scenic Design', 'Lighting', 'Audio', 'Photography'];

const projects = [
  {
    id: 1,
    title: 'Opera Prima',
    category: 'Scenic Design',
    year: '2024',
    description: 'Complete stage design for a contemporary opera production at Teatro alla Scala.',
    image: '/images/project-1.jpg',
    slug: 'opera-prima',
  },
  {
    id: 2,
    title: 'Light Symphony',
    category: 'Lighting',
    year: '2024',
    description: 'Innovative lighting design creating atmospheric depth for classical ballet.',
    image: '/images/project-2.jpg',
    slug: 'light-symphony',
  },
  {
    id: 3,
    title: 'Acoustic Waves',
    category: 'Audio',
    year: '2023',
    description: 'Audio engineering and sound design for immersive theater experience.',
    image: '/images/project-3.jpg',
    slug: 'acoustic-waves',
  },
  {
    id: 4,
    title: 'Backstage Stories',
    category: 'Photography',
    year: '2023',
    description: 'Documentary photography series capturing the unseen moments of production.',
    image: '/images/project-4.jpg',
    slug: 'backstage-stories',
  },
  {
    id: 5,
    title: 'Shakespeare Reimagined',
    category: 'Scenic Design',
    year: '2024',
    description: 'Modern minimalist approach to classic Shakespearean stage design.',
    image: '/images/project-5.jpg',
    slug: 'shakespeare-reimagined',
  },
  {
    id: 6,
    title: 'Neon Dreams',
    category: 'Lighting',
    year: '2023',
    description: 'Bold neon lighting installation for contemporary dance performance.',
    image: '/images/project-6.jpg',
    slug: 'neon-dreams',
  },
  {
    id: 7,
    title: 'Symphony No. 9',
    category: 'Audio',
    year: '2024',
    description: 'Acoustic optimization and live sound mixing for orchestral performance.',
    image: '/images/project-7.jpg',
    slug: 'symphony-no-9',
  },
  {
    id: 8,
    title: 'Stage Portraits',
    category: 'Photography',
    year: '2024',
    description: 'Character and costume photography for theater production archive.',
    image: '/images/project-8.jpg',
    slug: 'stage-portraits',
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 animate-fade-in">
            Portfolio
          </h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fade-in animate-delay-100">
            A curated collection of my work in scenic design, lighting, audio engineering, and theatrical photography
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
                    ? 'bg-accent text-white stage-shadow'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group project-card animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-accent-light mb-2">
                      <span className="text-sm font-medium">{project.category}</span>
                      <span className="text-sm">·</span>
                      <span className="text-sm">{project.year}</span>
                    </div>
                    <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="text-white" size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-primary-500 text-lg">
                No projects found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif text-primary-900 mb-6">
            Want to See More?
          </h2>
          <p className="text-xl text-primary-600 mb-8 max-w-2xl mx-auto">
            Explore the full gallery of images and videos from my theatrical journey
          </p>
          <Link href="/gallery" className="btn-primary inline-flex items-center gap-2">
            Visit Gallery
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
