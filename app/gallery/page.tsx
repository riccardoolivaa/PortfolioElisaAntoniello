'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const galleryImages = [
  { id: 1, src: '/images/gallery-1.jpg', alt: 'Scenic design detail', category: 'scenic' },
  { id: 2, src: '/images/gallery-2.jpg', alt: 'Lighting atmosphere', category: 'lighting' },
  { id: 3, src: '/images/gallery-3.jpg', alt: 'Audio equipment setup', category: 'audio' },
  { id: 4, src: '/images/gallery-4.jpg', alt: 'Backstage portrait', category: 'photography' },
  { id: 5, src: '/images/gallery-5.jpg', alt: 'Stage construction', category: 'scenic' },
  { id: 6, src: '/images/gallery-6.jpg', alt: 'Spotlight detail', category: 'lighting' },
  { id: 7, src: '/images/gallery-7.jpg', alt: 'Sound mixing console', category: 'audio' },
  { id: 8, src: '/images/gallery-8.jpg', alt: 'Performance shot', category: 'photography' },
  { id: 9, src: '/images/gallery-9.jpg', alt: 'Set model', category: 'scenic' },
  { id: 10, src: '/images/gallery-10.jpg', alt: 'Lighting rig', category: 'lighting' },
  { id: 11, src: '/images/gallery-11.jpg', alt: 'Microphone array', category: 'audio' },
  { id: 12, src: '/images/gallery-12.jpg', alt: 'Costume detail', category: 'photography' },
];

const categories = ['all', 'scenic', 'lighting', 'audio', 'photography'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState(12);

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const displayedImages = filteredImages.slice(0, visibleImages);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const loadMore = () => {
    setVisibleImages((prev) => prev + 12);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-900 text-black">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl text-black/80 max-w-3xl animate-fade-in animate-delay-100">
            Visual documentation of my theatrical journey - from design concepts to final productions
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleImages(12);
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 capitalize ${
                  selectedCategory === category
                    ? 'bg-accent text-bronze-600 stage-shadow'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg stage-shadow animate-fade-in"
                style={{ animationDelay: `${index * 30}ms` }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-center px-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleImages < filteredImages.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="btn-primary"
              >
                Load More
              </button>
            </div>
          )}

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-primary-500 text-lg">
                No images found in this category.
              </p>
            </div>
          )}
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

          {selectedImage < filteredImages.length - 1 && (
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
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-lg">{filteredImages[selectedImage].alt}</p>
              <p className="text-sm text-white/60 mt-1">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
