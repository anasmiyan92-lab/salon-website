import { Scissors, Phone, MapPin, Heart } from 'lucide-react';
import { SiInstagram, SiWhatsapp, SiFacebook } from 'react-icons/si';

const PHONE = '+91 96904 17361';
const PHONE_TEL = 'tel:+919690417361';
const WHATSAPP = 'https://wa.me/919690417361';
const INSTAGRAM = 'https://www.instagram.com/imagine_unisexsalon';
const ADDRESS = 'Radhe Complex, Kashipur Bypass Rd, Rudrapur, Uttarakhand, India';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Now', href: '#booking' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || 'imagine-unisex-salon');

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
              Premium hair &amp; beauty services for men and women in Rudrapur, Uttarakhand.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500/40 transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4 text-gold hover:text-pink-400" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center hover:bg-green-600/20 hover:border-green-600/40 transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-4 h-4 text-gold" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-600/40 transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-cream font-semibold mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-cream/50 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-cream font-semibold mb-4 text-sm tracking-wide uppercase">Services</h4>
            <ul className="space-y-2.5">
              {['Haircut', 'Beard Styling', 'Hair Styling', 'Facial', 'Hair Coloring', 'Keratin Treatment', 'Makeup'].map((s) => (
                <li key={s}>
                  <span className="text-cream/50 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-cream font-semibold mb-4 text-sm tracking-wide uppercase">Contact</h4>
            <div className="space-y-3">
              <a href={PHONE_TEL} className="flex items-start gap-2.5 group">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/50 group-hover:text-gold text-sm transition-colors">{PHONE}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/50 text-sm leading-relaxed">{ADDRESS}</span>
              </div>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 group"
              >
                <SiInstagram className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/50 group-hover:text-gold text-sm transition-colors">@imagine_unisexsalon</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-3">
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
