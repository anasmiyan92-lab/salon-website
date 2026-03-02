import { Phone } from 'lucide-react';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';

const WHATSAPP = 'https://wa.me/919690417361';
const PHONE_TEL = 'tel:+919690417361';
const INSTAGRAM = 'https://www.instagram.com/imagine_unisexsalon';

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      {/* Instagram */}
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on Instagram"
        className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <SiInstagram className="w-5 h-5 text-white" />
      </a>

      {/* WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <SiWhatsapp className="w-5 h-5 text-white" />
      </a>

      {/* Call */}
      <a
        href={PHONE_TEL}
        aria-label="Call us"
        className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-200"
      >
        <Phone className="w-5 h-5 text-charcoal" />
      </a>
    </div>
  );
}
