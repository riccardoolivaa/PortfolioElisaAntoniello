'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'Opera Prima',
    category: 'Scenic Design',
    year: '2024',
    image: '/images/project-1.jpg',
    slug: 'opera-prima',
  },
  {
    id: 2,
    title: 'Light Symphony',
    category: 'Lighting Design',
    year: '2024',
    image: '/images/project-2.jpg',
    slug: 'light-symphony',
  },
  {
    id: 3,
    title: 'Acoustic Waves',
    category: 'Audio Design',
    year: '2023',
    image: '/images/project-3.jpg',
    slug: 'acoustic-waves',
  },
  {
    id: 4,
    title: 'Backstage Stories',
    category: 'Photography',
    year: '2023',
    image: '/images/project-4.jpg',
    slug: 'backstage-stories',
  },
];

export default function PortfolioPreview() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredProjects.map((project, index) => (
        <Link
          key={project.id}
          href={`/portfolio/${project.slug}`}
          className="group project-card animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative h-72 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-accent-light mb-2">
                  <span className="text-sm font-medium">{project.category}</span>
                  <span className="text-sm">·</span>
                  <span className="text-sm">{project.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                  <ArrowRight className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm text-accent mb-2">{project.category}</div>
            <h3 className="text-lg font-semibold text-primary-900 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-primary-600 mt-1">{project.year}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
