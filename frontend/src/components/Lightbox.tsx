import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('lightbox-open');
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('lightbox-open');
    };
  }, [handleKeyDown]);

  const image = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center animate-fade-in"
      style={{ background: 'rgba(0,0,0,0.95)' }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold/60 transition-all duration-300 bg-black/50"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 font-sans text-cream/50 text-xs tracking-widest">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold/60 transition-all duration-300 bg-black/50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[85vh] object-contain shadow-elegant-xl animate-zoom-in"
          style={{ borderBottom: '2px solid oklch(0.78 0.12 75 / 0.4)' }}
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold/60 transition-all duration-300 bg-black/50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 flex-wrap justify-center max-w-xs">
        {images.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-4 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-cream/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
