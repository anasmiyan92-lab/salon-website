import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="w-9 h-9 rounded-full flex items-center justify-center border border-cream/20 text-cream/70 hover:text-gold hover:border-gold/50 transition-all duration-300 hover:bg-gold/10"
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4" strokeWidth={1.5} />
      ) : (
        <Sun className="w-4 h-4" strokeWidth={1.5} />
      )}
    </button>
  );
}
