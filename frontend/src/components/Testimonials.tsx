import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    name: 'Priya Sharma',
    initials: 'PS',
    service: 'Bridal Makeup',
    rating: 5,
    text: 'Absolutely stunning work! The team at Imagine Unisex Salon made me look like a dream on my wedding day. The bridal makeup was flawless and lasted all day. Highly recommend!',
  },
  {
    name: 'Rahul Verma',
    initials: 'RV',
    service: 'Haircut & Beard Grooming',
    rating: 5,
    text: 'Best salon in Rudrapur! The haircut and beard grooming was perfect. The staff is professional, the ambiance is luxurious, and the results speak for themselves. Will definitely return.',
  },
  {
    name: 'Anjali Singh',
    initials: 'AS',
    service: 'Hair Coloring',
    rating: 5,
    text: 'I got a balayage done here and I am absolutely in love with the results! The colorist understood exactly what I wanted and delivered beyond my expectations. Premium quality service.',
  },
  {
    name: 'Deepak Kumar',
    initials: 'DK',
    service: 'Facial Treatment',
    rating: 5,
    text: 'The facial treatment was incredibly relaxing and my skin has never looked better. The products used are top quality and the therapist was very knowledgeable. A true luxury experience.',
  },
  {
    name: 'Neha Gupta',
    initials: 'NG',
    service: 'Hair Treatment',
    rating: 5,
    text: 'My hair was severely damaged and after the keratin treatment at Imagine Salon, it is silky smooth and healthy. The transformation is unbelievable. Worth every rupee!',
  },
  {
    name: 'Amit Rawat',
    initials: 'AR',
    service: 'Nail Services',
    rating: 5,
    text: 'The nail art here is exceptional! The nail technician is incredibly talented and the gel manicure has lasted for weeks without chipping. The salon is clean, modern, and very welcoming.',
  },
  {
    name: 'Sunita Bisht',
    initials: 'SB',
    service: 'Haircut & Styling',
    rating: 5,
    text: 'I have been coming to Imagine Salon for over a year now and every visit is a wonderful experience. The stylists are skilled, the atmosphere is premium, and the results are always perfect.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'oklch(0.14 0.01 45)' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            oklch(0.78 0.12 75) 0px,
            oklch(0.78 0.12 75) 1px,
            transparent 1px,
            transparent 80px
          )`,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center mb-16">
          <p className="font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Client Stories
          </p>
          <h2 className="font-serif text-cream text-4xl md:text-5xl font-medium mb-5">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/50" />
          </div>
        </AnimatedSection>

        {/* Testimonial Card */}
        <div className="relative">
          <div
            className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="bg-white/5 border border-white/10 p-8 sm:p-12 text-center relative">
              {/* Quote icon */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-gold">
                <Quote className="w-4 h-4 text-charcoal" strokeWidth={1.5} />
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6 mt-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Review text */}
              <p className="font-serif text-cream/90 text-lg sm:text-xl italic leading-relaxed mb-8 max-w-2xl mx-auto">
                "{t.text}"
              </p>

              {/* Client info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <span className="font-serif text-gold font-medium text-sm">{t.initials}</span>
                </div>
                <div className="text-left">
                  <p className="font-serif text-cream font-medium">{t.name}</p>
                  <p className="font-sans text-gold/70 text-xs tracking-wider uppercase">{t.service}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold/50 transition-all duration-300 bg-black/30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold/50 transition-all duration-300 bg-black/30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'w-6 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-cream/30 hover:bg-cream/60'
              }`}
            />
          ))}
        </div>

        {/* Summary stats */}
        <AnimatedSection direction="up" delay={200} className="mt-16 grid grid-cols-3 gap-6 text-center border-t border-white/10 pt-12">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '5★', label: 'Average Rating' },
            { value: '8+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-gold text-3xl sm:text-4xl font-medium mb-1">{stat.value}</p>
              <p className="font-sans text-cream/50 text-xs tracking-[0.2em] uppercase">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
