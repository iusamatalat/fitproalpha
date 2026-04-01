import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoUrl from '../../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-5 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-black border-b border-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-black/90 to-transparent border-b border-transparent'
      }`}
    >
      {/* Left Side: Logo */}
      <Link to="/" className="flex items-center cursor-pointer group relative z-[102]">
        <img 
          src={logoUrl} 
          alt="Fit Pro Alpha Logo" 
          className="h-[40px] sm:h-[50px] md:h-[60px] shrink-0 transition-transform duration-500 group-hover:scale-105" 
          style={{ filter: 'brightness(0) saturate(100%) invert(88%) sepia(85%) saturate(3061%) hue-rotate(24deg) brightness(109%) contrast(98%)' }} 
        />
      </Link>

      {/* Right Side: Navigation Options (Desktop) */}
      <div className="hidden md:flex items-center gap-10">
        
        {/* Communities Dropdown */}
        <div 
          className="relative group h-full py-2"
          ref={desktopDropdownRef}
        >
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 text-white font-inter font-semibold text-sm lg:text-base uppercase tracking-wider transition-colors duration-300 hover:text-brand-green bg-transparent border-none cursor-pointer p-0"
          >
            Communities
            <ChevronDown className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-brand-green' : ''}`} />
          </button>

          {/* Animated Dropdown Menu */}
          <div 
            className={`absolute top-full left-0 mt-4 min-w-[240px] bg-black border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-300 origin-top flex flex-col overflow-hidden ${
              isDropdownOpen 
                ? 'opacity-100 translate-y-0 visible scale-y-100' 
                : 'opacity-0 -translate-y-4 invisible scale-y-95 pointer-events-none'
            }`}
          >
            {/* Top Border Accent */}
            <div className="h-1 w-full bg-brand-green" />
            
            <Link 
              to="/free-community" 
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center px-6 py-5 text-zinc-300 font-inter font-bold uppercase tracking-widest text-sm hover:text-black hover:bg-brand-green transition-all duration-300"
            >
              Free Community
            </Link>
            <div className="h-px w-full bg-zinc-900" />
            <Link 
              to="/premium-community" 
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center px-6 py-5 text-zinc-300 font-inter font-bold uppercase tracking-widest text-sm hover:text-black hover:bg-brand-green transition-all duration-300"
            >
              Inner Circle
            </Link>
            <div className="h-px w-full bg-zinc-900" />
            <Link 
              to="/alpha-elite" 
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center px-6 py-5 text-zinc-300 font-inter font-bold uppercase tracking-widest text-sm hover:text-black hover:bg-brand-green transition-all duration-300"
            >
              Alpha Elite
            </Link>
          </div>
        </div>

        {/* Case Studies Link */}
        <a 
          href="#case-studies" 
          className="text-white font-inter font-semibold text-sm lg:text-base uppercase tracking-wider transition-all duration-300 hover:text-brand-green relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-brand-green hover:after:w-full after:transition-all after:duration-300"
        >
          Case Studies
        </a>

        {/* Playbook Button */}
        <Link 
          to="/playbook" 
          className="group relative inline-flex items-center justify-center bg-brand-green px-6 py-3 lg:px-8 lg:py-3.5 text-black font-inter font-black uppercase tracking-widest text-sm lg:text-base overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_5px_20px_rgba(187,246,0,0.2)] hover:shadow-[0_10px_30px_rgba(187,246,0,0.4)]"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:skew-x-[-5deg]">Playbook</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300 z-0 pointer-events-none" />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center gap-4 cursor-pointer group relative z-[102]">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-transparent border-none p-0 cursor-pointer flex items-center justify-center text-white group-hover:text-brand-green transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8 stroke-[1.5]" />
          ) : (
            <Menu className="w-8 h-8 stroke-[1.5]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-black z-[101] transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-32 px-8 pb-12 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-10">
          
          {/* Mobile Communities Menu */}
          <div className="flex flex-col border-b border-zinc-900 pb-6 w-full">
            <button 
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex justify-between items-center text-white font-montserrat font-black text-2xl uppercase tracking-widest hover:text-brand-green transition-colors duration-300 w-full text-left"
            >
              Communities
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180 text-brand-green' : ''}`} />
            </button>
            
            <div 
              className={`flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
                isMobileDropdownOpen ? 'max-h-[300px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0 pt-0'
              }`}
            >
              <Link 
                to="/free-community" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-400 font-inter font-bold uppercase tracking-wider text-sm hover:text-white transition-colors pl-4 border-l-2 border-zinc-800 hover:border-brand-green"
              >
                Free Community
              </Link>
              <Link 
                to="/premium-community" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-400 font-inter font-bold uppercase tracking-wider text-sm hover:text-white transition-colors pl-4 border-l-2 border-zinc-800 hover:border-brand-green"
              >
                Inner Circle
              </Link>
              <Link 
                to="/alpha-elite" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-400 font-inter font-bold uppercase tracking-wider text-sm hover:text-white transition-colors pl-4 border-l-2 border-zinc-800 hover:border-brand-green"
              >
                Alpha Elite
              </Link>
            </div>
          </div>

          {/* Mobile Case Studies */}
          <div className="border-b border-zinc-900 pb-6">
            <a 
              href="#case-studies" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white font-montserrat font-black text-2xl uppercase tracking-widest hover:text-brand-green transition-colors duration-300 w-full"
            >
              Case Studies
            </a>
          </div>

          {/* Mobile Playbook Button */}
          <div className="pt-4 w-full">
            <Link 
              to="/playbook" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center bg-brand-green py-5 text-black font-inter font-black uppercase tracking-widest text-lg w-full shadow-[0_5px_20px_rgba(187,246,0,0.2)] active:scale-[0.98] transition-all duration-300 hover:bg-[#d7ff00]"
            >
              Playbook
            </Link>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
