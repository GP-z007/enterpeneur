import React from 'react';
import { useTheme } from './ThemeContext';
import { Moon, Sun, Rocket } from 'lucide-react';

interface NavbarProps {
  onNavClick: (page: 'landing' | 'dashboard') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="glass-panel sticky top-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => onNavClick('landing')}
      >
        <div className="bg-primary-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
          <Rocket className="text-white w-6 h-6" />
        </div>
        <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400">
          Startup Forge
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={() => onNavClick('dashboard')}
          className="text-sm font-medium hover:text-primary-500 transition-colors hidden sm:block"
        >
          Dashboard
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};
