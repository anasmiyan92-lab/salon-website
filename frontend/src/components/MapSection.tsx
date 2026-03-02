import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const SALON_ADDRESS = 'Radhe Complex, Kashipur Bypass Rd, Adarsh Colony, Rudrapur, Uttarakhand';
const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Radhe+Complex+Kashipur+Bypass+Rd+Adarsh+Colony+Rudrapur+Uttarakhand&output=embed&z=15';
const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Radhe+Complex+Kashipur+Bypass+Rd+Adarsh+Colony+Rudrapur+Uttarakhand';

export default function MapSection() {
  return (
    <section id="location" className="py-24 lg:py-32 bg-cream-dark dark:bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center mb-16">
          <p className="font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-serif text-foreground text-4xl md:text-5xl font-medium mb-5">
            Our Location
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/50" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Address Info */}
          <AnimatedSection direction="left" className="space-y-8">
            <div>
              <h3 className="font-serif text-foreground text-2xl font-medium mb-6">
                Visit Imagine Unisex Salon
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/20">
                    <MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-muted-foreground text-xs tracking-widest uppercase mb-1">Address</p>
                    <p className="font-sans text-foreground text-sm leading-relaxed">
                      {SALON_ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/20">
                    <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-muted-foreground text-xs tracking-widest uppercase mb-1">Phone</p>
                    <a
                      href="tel:+919030504422"
                      className="font-sans text-foreground text-sm hover:text-gold transition-colors"
                    >
                      +91 90305 04422
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/20">
                    <Clock className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-muted-foreground text-xs tracking-widest uppercase mb-1">Hours</p>
                    <div className="font-sans text-foreground text-sm leading-relaxed space-y-0.5">
                      <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
                      <p>Sunday: 10:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-gold text-charcoal font-sans font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5"
            >
              <Navigation className="w-4 h-4" strokeWidth={2} />
              Get Directions
            </a>

            {/* Decorative quote */}
            <div className="border-l-2 border-gold/40 pl-5 py-2">
              <p className="font-serif text-muted-foreground text-base italic leading-relaxed">
                "Your beauty destination in the heart of Rudrapur."
              </p>
            </div>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection direction="right">
            <div className="relative overflow-hidden shadow-elegant-xl border border-border/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold z-10" />
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Imagine Unisex Salon Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
