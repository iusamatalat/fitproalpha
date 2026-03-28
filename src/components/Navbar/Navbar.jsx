import React, { useState, useEffect } from 'react';
import { Phone, Menu } from 'lucide-react';
import logoUrl from '../../assets/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-5 transition-all duration-300 ${isScrolled
          ? 'bg-brand-black border-b border-zinc-900'
          : 'bg-gradient-to-b from-black/80 to-transparent border-b border-transparent'
        }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center text-brand-green">
          <Phone className="w-5 h-5 md:w-6 md:h-6 fill-current origin-center -rotate-12" />
        </div>
        <a
          href="tel:1-888-303-8580"
          className="hidden md:block text-white text-lg md:text-xl font-medium font-inter hover:text-brand-green transition-colors duration-300"
        >
          +92 3XX XXXXXXX
        </a>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
        <img src={logoUrl} alt="Fit Pro Alpha Logo" className="h-[40px] sm:h-[50px] md:h-[65px] shrink-0" style={{ filter: 'brightness(0) saturate(100%) invert(88%) sepia(85%) saturate(3061%) hue-rotate(24deg) brightness(109%) contrast(98%)' }} />
      </div>

      <div className="flex items-center gap-4 cursor-pointer group">
        <span className="hidden sm:block text-white text-lg font-semibold font-inter group-hover:text-brand-green transition-colors duration-300">
          menu
        </span>
        <button
          className="bg-transparent border-none p-0 cursor-pointer flex items-center justify-center text-white group-hover:text-brand-green transition-colors duration-300"
          aria-label="Menu"
        >
          <Menu className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5]" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
