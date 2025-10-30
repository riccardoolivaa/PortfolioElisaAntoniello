'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Download, X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

// Mock data - in production this would come from CMS
const projectData = {
  'opera-prima': {
    title: 'Opera Prima',
    category: 'Scenic Design',
    year: '2024',
    description: 'Complete stage design for a contemporary opera production at Teatro alla Scala. This project involved creating a minimalist yet impactful set that could transform between acts while maintaining visual coherence throughout the performance.',
    fullDescription: `This ambitious project represented my first complete stage design for a full-scale opera production. Working closely with the director and costume designer, I developed a concept that balanced classical elegance with contemporary sensibilities.

The design featured modular set pieces that could be reconfigured between scenes, creating distinct atmospheres while maintaining visual continuity. Special attention was paid to sightlines, ensuring every audience member had an optimal viewing experience.

Key challenges included managing the technical aspects of quick scene changes and coordinating with the lighting team to ensure the set responded beautifully to different lighting scenarios throughout the performance.`,
    client: 'Teatro alla Scala Academy',
    role: 'Lead Scenic Designer',
    team: ['Director: Marco Rossi', 'Lighting: Sara Bianchi', 'Costumes: Elena Ferri'],
    images: [
      { src: '/images/project-1-1.jpg', caption: 'Act I - Opening scene', downloadable: true },
      { src: '/images/project-1-2.jpg', caption: 'Act II - Transformation', downloadable: true },
      { src: '/images/project-1-3.jpg', caption: 'Technical rehearsal', downloadable: false },
      { src: '/images/project-1-4.jpg', caption: 'Final production', downloadable: true },
    ],
    beforeAfter: {
      enabled: true,
      before: '/images/project-1-before.jpg',
      after: '/images/project-1-after.jpg',
    },
  },
  // More projects would be loaded from CMS
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50);
  
  const project = projectData[params.slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="pt-24 section-padding text-center">
        <h1 className="text-4xl font-serif text-primary-900 mb-4">Project Not Found</h1>
        <Link href="/portfolio" className="btn-primary">Back to Portfolio</Link>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < project.images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleDownload = (imageSrc: string) => {
    // In production, this would add watermark before download
    window.open(imageSrc, '_blank');
  };

  return (
    <div className="pt-24">
      {/* Back Button */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-2 text-accent-light">
              <Tag size={18} />
              {project.category}
            </span>
            <span className="text-white/40">·</span>
            <span className="flex items-center gap-2 text-white/70">
              <Calendar size={18} />
              {project.year}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-warm-gray p-6 rounded-xl">
              <h3 className="text-sm font-semibold text-primary-500 mb-2 uppercase tracking-wide">Client</h3>
              <p className="text-primary-900">{project.client}</p>
            </div>
            <div className="bg-warm-gray p-6 rounded-xl">
              <h3 className="text-sm font-semibold text-primary-500 mb-2 uppercase tracking-wide">My Role</h3>
              <p className="text-primary-900">{project.role}</p>
            </div>
            <div className="bg-warm-gray p-6 rounded-xl">
              <h3 className="text-sm font-semibold text-primary-500 mb-2 uppercase tracking-wide">Year</h3>
              <p className="text-primary-900">{project.year}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-serif text-primary-900 mb-6">Project Overview</h2>
            <div className="text-primary-700 leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </div>

            {project.team && (
              <div className="mt-8">
                <h3 className="text-2xl font-serif text-primary-900 mb-4">Collaborators</h3>
                <ul className="list-disc list-inside text-primary-700 space-y-2">
                  {project.team.map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      {project.beforeAfter?.enabled && (
        <section className="section-padding bg-warm-gray">
          <div className="container-custom">
            <h2 className="text-3xl font-serif text-primary-900 mb-8 text-center">
              Before & After
            </h2>
            <div className="relative max-w-4xl mx-auto h-96 md:h-[600px] rounded-xl overflow-hidden stage-shadow">
              {/* After Image */}
              <Image
                src={project.beforeAfter.after}
                alt="After"
                fill
                className="object-cover"
              />
              {/* Before Image with clip */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - beforeAfterSlider}% 0 0)` }}
              >
                <Image
                  src={project.beforeAfter.before}
                  alt="Before"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Slider Handle */}
              <input
                type="range"
                min="0"
                max="100"
                value={beforeAfterSlider}
                onChange={(e) => setBeforeAfterSlider(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
              />
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                style={{ left: `${beforeAfterSlider}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <ChevronLeft size={16} className="text-primary-900 absolute left-1" />
                  <ChevronRight size={16} className="text-primary-900 absolute right-1" />
                </div>
              </div>
              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                After
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif text-primary-900 mb-8 text-center">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="group relative h-80 rounded-xl overflow-hidden cursor-pointer stage-shadow"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="font-medium">{image.caption}</p>
                    {image.downloadable && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(image.src);
                        }}
                        className="mt-2 text-sm flex items-center gap-2 hover:text-accent-light transition-colors"
                      >
                        <Download size={16} />
                        Download (with watermark)
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-accent transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>
          )}

          {selectedImage < project.images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-accent transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>
          )}

          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            <div className="relative w-full h-[80vh]">
              <Image
                src={project.images[selectedImage].src}
                alt={project.images[selectedImage].caption}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-lg">{project.images[selectedImage].caption}</p>
              <p className="text-sm text-white/60 mt-1">
                {selectedImage + 1} / {project.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
