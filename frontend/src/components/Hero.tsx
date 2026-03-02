import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';
import AnimatedSection from './AnimatedSection';

const WHATSAPP = 'https://wa.me/919690417361';
const INSTAGRAM = 'https://www.instagram.com/imagine_unisexsalon';

const slides = [
  { src: '/assets/generated/hero-haircut-1.dim_1920x1080.jpg', label: 'Precision Haircuts' },
  { src: '/assets/generated/hero-beard-1.dim_1920x1080.jpg', label: 'Expert Beard Styling' },
  { src: '/assets/generated/hero-coloring-1.dim_1920x1080.jpg', label: 'Vibrant Hair Coloring' },
  { src: '/assets/generated/hero-bridal-1.dim_1920x1080.jpg', label: 'Bridal Makeup' },
  { src: '/assets/generated/hero-facial-1.dim_1920x1080.jpg', label: 'Luxury Facials' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.src}
            alt={slide.label}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <AnimatedSection direction="up" delay={100}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
              {slides[current].label}
            </span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-2">
            IMAGINE
          </h1>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-gold tracking-[0.15em] mb-6">
            UNISEX SALON
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={300}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gold/60" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gold/60" />
          </div>
          <p className="text-cream/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Premium Hair &amp; Beauty Services for Men &amp; Women
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={scrollToBooking}
              className="px-8 py-3.5 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold/90 transition-all duration-300 shadow-gold text-sm tracking-wide uppercase"
            >
              Book Appointment
            </button>
            <button
              onClick={scrollToServices}
              className="px-8 py-3.5 border border-cream/40 text-cream font-medium rounded-full hover:border-gold hover:text-gold transition-all duration-300 text-sm tracking-wide uppercase"
            >
              Our Services
            </button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-green-600/80 hover:bg-green-600 text-white rounded-full transition-colors text-sm font-medium"
            >
              <SiWhatsapp className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-pink-600/80 hover:bg-pink-600 text-white rounded-full transition-colors text-sm font-medium"
            >
              <SiInstagram className="w-4 h-4" />
              Follow Us
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-cream/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/60 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
