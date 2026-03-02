import { Scissors, Sparkles, Palette, Smile, Wand2, Star, Brush } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: Scissors,
    name: 'Haircut',
    description: 'Precision cuts tailored to your face shape and style preferences by expert stylists.',
    image: '/assets/generated/service-haircut.dim_800x800.jpg',
  },
  {
    icon: Star,
    name: 'Beard Styling',
    description: 'Expert beard shaping, trimming, and grooming for a sharp, polished look.',
    image: '/assets/generated/service-beard.dim_800x800.jpg',
  },
  {
    icon: Wand2,
    name: 'Hair Styling',
    description: 'Creative styling for any occasion — from everyday looks to special events.',
    image: '/assets/generated/service-haircut.dim_800x800.jpg',
  },
  {
    icon: Smile,
    name: 'Facial',
    description: 'Rejuvenating facial treatments using premium products for glowing, healthy skin.',
    image: '/assets/generated/service-facial.dim_800x800.jpg',
  },
  {
    icon: Palette,
    name: 'Hair Coloring',
    description: 'Vibrant, long-lasting color treatments from subtle highlights to bold transformations.',
    image: '/assets/generated/service-coloring.dim_800x800.jpg',
  },
  {
    icon: Sparkles,
    name: 'Keratin Treatment',
    description: 'Smooth, frizz-free hair with our professional keratin smoothing treatments.',
    image: '/assets/generated/service-treatment.dim_800x800.jpg',
  },
  {
    icon: Brush,
    name: 'Makeup',
    description: 'Professional makeup artistry for weddings, events, and everyday glamour.',
    image: '/assets/generated/service-bridal.dim_800x800.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">What We Offer</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal mt-2 mb-4">
              Our Services
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gold/60" />
              <div className="w-2 h-2 rounded-full bg-gold" />
              <div className="h-px w-12 bg-gold/60" />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.name} direction="up" delay={index * 80}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-gold transition-all duration-500 cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-9 h-9 rounded-full bg-gold/90 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-charcoal" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-bold text-charcoal mb-1 group-hover:text-gold transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{service.description}</p>
                    <div className="mt-3 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-500 rounded-full" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
