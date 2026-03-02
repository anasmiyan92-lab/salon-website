import { Scissors, Phone, MapPin, Clock, Heart } from 'lucide-react';
import { SiInstagram, SiWhatsapp, SiFacebook } from 'react-icons/si';

const PHONE = '+91 9917417861';
const PHONE_TEL = 'tel:+919917417861';
const WHATSAPP = 'https://wa.me/919917417861';
const INSTAGRAM = 'https://www.instagram.com/imagine_unisexsalon';
const ADDRESS = 'Radhe Complex, Kashipur Bypass Rd, Rudrapur, Uttarakhand, India';
const HOURS = 'Mon–Sat: 9:00 AM – 8:00 PM';
const HOURS2 = 'Sun: 10:00 AM – 6:00 PM';

const services = [
  'Haircut & Styling',
  'Beard Grooming',
  'Hair Coloring',
  'Keratin Treatment',
  'Facial & Skincare',
  'Bridal Makeup',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'imagine-unisex-salon');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                <Scissors className="w-4 h-4 text-gold" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-cream tracking-wide">IMAGINE</span>
                <span className="block text-[10px] text-gold tracking-[0.2em] uppercase -mt-1">Unisex Salon</span>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed mb-5">
              Premium hair &amp; beauty services for men and women. Experience luxury grooming in the heart of Rudrapur.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/30 flex items-center justify-center hover:from-pink-500/30 hover:to-purple-600/30 transition-all"
              >
                <SiInstagram className="w-4 h-4 text-pink-400" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center hover:bg-green-500/20 transition-all"
              >
                <SiWhatsapp className="w-4 h-4 text-green-400" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/20 transition-all"
              >
                <SiFacebook className="w-4 h-4 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-base font-bold text-cream mb-4 tracking-wide">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-cream/50 hover:text-gold text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-cream mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Services', id: 'services' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Book Appointment', id: 'booking' },
                { label: 'Contact Us', id: 'booking' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-cream/50 hover:text-gold text-sm transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-bold text-cream mb-4 tracking-wide">Contact Us</h4>
            <div className="space-y-3">
              <a href={PHONE_TEL} className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/50 text-sm group-hover:text-gold transition-colors">{PHONE}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/50 text-sm">{ADDRESS}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream/50 text-sm">{HOURS}</p>
                  <p className="text-cream/50 text-sm">{HOURS2}</p>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 px-4 py-2.5 bg-green-600/20 border border-green-500/30 text-green-400 rounded-full text-sm font-medium hover:bg-green-600/30 transition-colors w-full justify-center"
            >
              <SiWhatsapp className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/30 text-xs">
            © {year} Imagine Unisex Salon. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-gold fill-gold" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
