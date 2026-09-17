import React, { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, mounted } = useContext(ThemeContext);

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        aria-label="Theme toggle"
        className="p-2 rounded-lg text-slate-700 transition-colors"
      >
        <Sun className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-semibold shadow-sm hover:bg-slate-50 active:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-brand-600"
    >
      {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
      <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
};
