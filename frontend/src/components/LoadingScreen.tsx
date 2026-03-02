import { useEffect, useState } from 'react';
import { Scissors } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 800);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: 'oklch(0.12 0.01 45)' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            oklch(0.78 0.12 75) 0px,
            oklch(0.78 0.12 75) 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      {/* Spinning ring */}
      <div className="relative mb-10">
        <div
          className="w-28 h-28 rounded-full border border-gold/20 animate-spin-slow"
          style={{ borderTopColor: 'oklch(0.78 0.12 75)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
            <Scissors className="w-7 h-7 text-gold" strokeWidth={1.2} />
          </div>
        </div>
      </div>

      {/* Salon name */}
      <div className="text-center mb-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <p className="font-sans text-gold/60 text-xs tracking-[0.5em] uppercase mb-3">
          Welcome to
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-wide mb-1 gold-shimmer">
          Imagine
        </h1>
        <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-cream/80">
          Unisex Salon
        </h2>
      </div>

      {/* Tagline */}
      <p
        className="font-sans text-cream/40 text-xs tracking-[0.3em] uppercase mt-4 mb-10 animate-fade-in"
        style={{ animationDelay: '0.6s' }}
      >
        Luxury Beauty & Grooming
      </p>

      {/* Progress bar */}
      <div className="w-48 h-px bg-cream/10 relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-gold transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="font-sans text-cream/30 text-xs mt-3 tracking-widest">
        {progress}%
      </p>
    </div>
  );
}
