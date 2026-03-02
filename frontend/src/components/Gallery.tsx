import { useState } from 'react';
import { Eye } from 'lucide-react';
import Lightbox from './Lightbox';
import AnimatedSection from './AnimatedSection';

const galleryImages = [
  { src: '/assets/generated/gallery-1.dim_1080x1080.jpg', alt: 'Premium salon styling' },
  { src: '/assets/generated/gallery-1.dim_600x750.png', alt: 'Elegant hair transformation' },
  { src: '/assets/generated/gallery-2.dim_600x750.png', alt: 'Balayage hair coloring' },
  { src: '/assets/generated/gallery-3.dim_600x750.png', alt: 'Luxury nail services' },
  { src: '/assets/generated/gallery-4.dim_600x750.png', alt: 'Professional hair styling' },
  { src: '/assets/generated/gallery-5.dim_600x750.png', alt: 'Premium hair care products' },
  { src: '/assets/generated/gallery-6.dim_600x750.png', alt: 'Relaxing facial treatment' },
  { src: '/assets/generated/service-haircut.dim_800x800.jpg', alt: 'Expert haircut' },
  { src: '/assets/generated/service-coloring.dim_800x800.jpg', alt: 'Hair coloring artistry' },
  { src: '/assets/generated/service-facial.dim_800x800.jpg', alt: 'Skin care treatment' },
  { src: '/assets/generated/service-beard.dim_800x800.jpg', alt: 'Beard grooming' },
  { src: '/assets/generated/service-bridal.dim_800x800.jpg', alt: 'Bridal makeup' },
  { src: '/assets/generated/service-treatment.dim_800x800.jpg', alt: 'Hair treatment' },
  { src: '/assets/generated/service-nails.dim_800x800.jpg', alt: 'Nail art services' },
  { src: '/assets/generated/hero-haircut-1.dim_1920x1080.jpg', alt: 'Cinematic haircut' },
  { src: '/assets/generated/hero-coloring-1.dim_1920x1080.jpg', alt: 'Cinematic coloring' },
  { src: '/assets/generated/hero-bridal-1.dim_1920x1080.jpg', alt: 'Bridal beauty' },
  { src: '/assets/generated/hero-beard-1.dim_1920x1080.jpg', alt: 'Beard artistry' },
  { src: '/assets/generated/hero-facial-1.dim_1920x1080.jpg', alt: 'Facial glow' },
  { src: '/assets/generated/salon-interior-1.dim_1920x1080.jpg', alt: 'Salon interior' },
  { src: '/assets/generated/salon-interior-2.dim_1920x1080.jpg', alt: 'Salon ambiance' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : 0));

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center mb-16">
          <p className="font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Our Portfolio
          </p>
          <h2 className="font-serif text-foreground text-4xl md:text-5xl font-medium mb-5">
            Premium Gallery
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <p className="font-sans text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            A glimpse into the artistry and transformations that happen every day at Imagine Unisex Salon.
          </p>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {galleryImages.map((image, index) => (
            <AnimatedSection
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 40}
            >
              <div
                className="group relative overflow-hidden cursor-pointer bg-charcoal aspect-square"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
                {/* Gold border */}
                <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
                {/* View icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full border border-cream/60 flex items-center justify-center bg-black/30">
                    <Eye className="w-5 h-5 text-cream" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
