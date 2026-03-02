import { SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const instagramImages = [
  { src: '/assets/generated/gallery-1.dim_1080x1080.jpg', alt: 'Salon styling' },
  { src: '/assets/generated/service-haircut.dim_800x800.jpg', alt: 'Haircut artistry' },
  { src: '/assets/generated/service-coloring.dim_800x800.jpg', alt: 'Hair coloring' },
  { src: '/assets/generated/service-bridal.dim_800x800.jpg', alt: 'Bridal look' },
  { src: '/assets/generated/service-beard.dim_800x800.jpg', alt: 'Beard grooming' },
  { src: '/assets/generated/service-facial.dim_800x800.jpg', alt: 'Facial glow' },
  { src: '/assets/generated/service-nails.dim_800x800.jpg', alt: 'Nail art' },
  { src: '/assets/generated/service-treatment.dim_800x800.jpg', alt: 'Hair treatment' },
  { src: '/assets/generated/gallery-1.dim_600x750.png', alt: 'Salon transformation' },
  { src: '/assets/generated/gallery-2.dim_600x750.png', alt: 'Balayage beauty' },
  { src: '/assets/generated/gallery-3.dim_600x750.png', alt: 'Nail perfection' },
  { src: '/assets/generated/gallery-4.dim_600x750.png', alt: 'Styling session' },
];

export default function InstagramGallery() {
  return (
    <section id="instagram" className="py-24 lg:py-32 bg-cream-dark dark:bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <SiInstagram className="w-6 h-6 text-[#E1306C]" />
            <p className="font-sans text-gold text-xs tracking-[0.4em] uppercase">
              Follow Our Journey
            </p>
          </div>
          <h2 className="font-serif text-foreground text-4xl md:text-5xl font-medium mb-5">
            Instagram Gallery
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <p className="font-sans text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Stay inspired with our latest looks, transformations, and behind-the-scenes moments.
          </p>
        </AnimatedSection>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 mb-10">
          {instagramImages.map((image, index) => (
            <AnimatedSection
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 50}
            >
              <a
                href="https://instagram.com/imagineunisexsalon"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden aspect-square bg-charcoal"
                aria-label={`View ${image.alt} on Instagram`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    <SiInstagram className="w-7 h-7 text-white" />
                    <Heart className="w-5 h-5 text-[#E1306C] fill-[#E1306C]" />
                  </div>
                </div>
                {/* Instagram gradient border on hover */}
                <div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-[#E1306C]/60 transition-all duration-500"
                />
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Follow Button */}
        <AnimatedSection direction="up" className="text-center">
          <a
            href="https://instagram.com/imagineunisexsalon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-sans font-semibold text-sm tracking-[0.15em] uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elegant-lg"
            style={{
              background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
            }}
          >
            <SiInstagram className="w-5 h-5" />
            Follow on Instagram
          </a>
          <p className="font-sans text-muted-foreground text-xs mt-3 tracking-wider">
            @imagineunisexsalon
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
