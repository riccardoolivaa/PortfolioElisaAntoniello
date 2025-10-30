import { getAllGalleryImages } from '@/lib/cms';
import GalleryClient from '@/components/gallery/GalleryClient';

export default function Gallery() {
  // Carica le immagini dal CMS (lato server)
  const allGalleryImages = getAllGalleryImages();

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-900 text-black">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 animate-fade-in">
            Galleria
          </h1>
          <p className="text-xl text-black/80 max-w-3xl animate-fade-in animate-delay-100">
            Documentazione visiva del mio percorso teatrale - dai concept alle produzioni finite
          </p>
        </div>
      </section>

      {/* Gallery Client Component */}
      <GalleryClient images={allGalleryImages} />
    </div>
  );
}