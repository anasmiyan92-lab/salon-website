import { useState, useEffect } from 'react';
import { Menu, X, Phone, Scissors } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

const PHONE = '+91 96904 17361';
const PHONE_TEL = 'tel:+919690417361';
const INSTAGRAM = 'https://www.instagram.com/imagine_unisexsalon';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Now', href: '#booking' },
  { label: 'Contact', href: '#booking' },
];

interface NavigationProps {
  onAdminClick?: () => void;
}

export default function Navigation({ onAdminClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'services', 'pricing', 'gallery', 'booking'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-elegant border-b border-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('#home')}>
            <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
              <Scissors className="w-4 h-4 text-gold" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-cream tracking-wide">IMAGINE</span>
              <span className="block text-[10px] text-gold tracking-[0.2em] uppercase -mt-1">Unisex Salon</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gold ${
                  activeSection === link.href.replace('#', '') ? 'text-gold' : 'text-cream/80'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold/20 transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="w-4 h-4 text-gold" />
            </a>
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-gold text-sm font-medium hover:bg-gold/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {PHONE}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-cream p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-charcoal/98 backdrop-blur-md border-t border-gold/20 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left text-cream/80 hover:text-gold py-2 text-sm font-medium tracking-wide transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-gold/20 flex items-center gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold/20 transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="w-4 h-4 text-gold" />
            </a>
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-gold text-sm font-medium hover:bg-gold/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {PHONE}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
