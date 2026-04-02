import React from 'react';
// --- Custom Failsafe SVGs ---
const Facebook = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
import logoUrl from '../../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 font-inter relative z-50 overflow-hidden">
      
      {/* Immersive Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-20"></div>
         <div className="absolute -bottom-[20%] right-[-10%] w-[800px] h-[800px] bg-brand-green/10 blur-[200px] mix-blend-screen" />
         <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-zinc-800/10 blur-[150px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 max-w-[1240px] relative z-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-8 border-b border-zinc-900/50 pb-16">
          
          {/* Left Column - Brand & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-10">
            {/* Logo Row */}
            <div className="flex items-center gap-3 mb-8">
              <img src={logoUrl} alt="Fit Pro Alpha Logo" className="w-10 h-10 object-contain brightness-125 saturate-150 drop-shadow-[0_0_10px_rgba(204,255,0,0.2)]" />
              <div className="flex items-baseline gap-1">
                <span className="font-montserrat font-black text-2xl uppercase tracking-tighter">Fit</span>
                <span className="font-montserrat font-black text-2xl uppercase tracking-tighter text-brand-green">Pro</span>
                <span className="font-montserrat font-black text-2xl uppercase tracking-[0.1em] ml-1">Alpha</span>
              </div>
            </div>

            {/* Taglines */}
            <h3 className="font-montserrat font-bold text-lg md:text-xl text-white leading-snug mb-5">
              Beautifully designed conversion systems, hand-crafted for elite fitness coaches.
            </h3>
            <p className="text-zinc-500 text-[13px] mb-8 max-w-sm leading-relaxed">
              Receive updates, tutorials, discounts and scaling resources sent straight to your inbox every month.
            </p>

            {/* Input Row */}
            <form className="flex w-full max-w-sm h-11 mb-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email" 
                required
                className="flex-1 bg-white border border-white focus:border-brand-green text-black px-4 font-inter text-sm outline-none placeholder:text-zinc-400 rounded-none w-full shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all"
              />
              <button 
                type="submit" 
                className="bg-brand-green hover:bg-[#bbf000] text-black font-black text-xs uppercase tracking-widest px-6 transition-all shadow-[0_0_20px_rgba(204,255,0,0.15)] shrink-0"
              >
                Subscribe
              </button>
            </form>
            <p className="text-zinc-600 text-[10px]">
              You can unsubscribe at any time.
            </p>
          </div>

          {/* Right Columns - Links */}
          <div className="lg:col-span-7 flex flex-wrap sm:grid sm:grid-cols-3 gap-10 lg:gap-4 pt-4 lg:pl-10">
            
            {/* ECOSYSTEM */}
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-widest text-zinc-300 mb-6 font-montserrat">Ecosystem</h4>
              <ul className="space-y-4 text-[13px] text-zinc-500 font-medium">
                <li><a href="/playbook" className="hover:text-brand-green transition-transform transform hover:translate-x-1 block duration-300">The Playbook</a></li>
                <li><a href="/free-community" className="hover:text-brand-green transition-transform transform hover:translate-x-1 block duration-300">Free Community</a></li>
                <li><a href="/premium-community" className="hover:text-brand-green transition-transform transform hover:translate-x-1 flex items-center duration-300">Alpha Elite <span className="ml-2 bg-brand-green text-black px-1.5 py-[1px] rounded text-[8px] font-black uppercase tracking-wider inline-block">Pro</span></a></li>
                <li><a href="/alpha-elite" className="hover:text-brand-green transition-transform transform hover:translate-x-1 block duration-300">Mastermind</a></li>
                <li><a href="#" className="hover:text-brand-green transition-transform transform hover:translate-x-1 block duration-300">Methodology</a></li>
              </ul>
            </div>

            {/* PLATFORM */}
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-widest text-zinc-300 mb-6 font-montserrat">Platform</h4>
              <ul className="space-y-4 text-[13px] text-zinc-500 font-medium">
                <li><a href="#" className="hover:text-brand-green transition-transform transform hover:translate-x-1 flex items-center duration-300">Marketing Vault <span className="ml-2 bg-emerald-500 text-white px-1.5 py-[1px] rounded text-[8px] font-bold uppercase inline-block">New</span></a></li>
                <li><a href="#" className="hover:text-brand-green transition-transform transform hover:translate-x-1 block duration-300">Brand Assets</a></li>
                <li><a href="#" className="hover:text-brand-green transition-transform transform hover:translate-x-1 block duration-300">Testimonials</a></li>
                <li><a href="#" className="hover:text-brand-green transition-transform transform hover:translate-x-1 block duration-300">Video Hub</a></li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-widest text-zinc-300 mb-6 font-montserrat">Company</h4>
              <ul className="space-y-4 text-[13px] text-zinc-500 font-medium">
                <li><a href="#" className="hover:text-brand-green transition-transform transform hover:translate-x-1 block duration-300">Success Stories</a></li>
                <li><a href="#" className="hover:text-brand-green transition-transform transform hover:translate-x-1 block duration-300">Affiliates</a></li>
                <li><a href="#" className="hover:text-brand-green transition-transform transform hover:translate-x-1 flex items-center duration-300">Changelog <span className="ml-2 bg-amber-500 text-black px-1 py-[1px] rounded text-[8px] font-black uppercase inline-block">Updated</span></a></li>
                <li><a href="#" className="hover:text-brand-green transition-transform transform hover:translate-x-1 block mt-8 lg:mt-6 duration-300">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons standalone at the very end */}
        <div className="flex justify-end pt-2">
          <div className="flex gap-6 items-center">
            <span className="font-montserrat font-bold text-[10px] uppercase text-zinc-600 tracking-widest mr-2">Follow</span>
            <a href="#" className="text-zinc-600 hover:text-brand-green transition-all transform hover:-translate-y-1 block duration-300" aria-label="Twitter">
              <Twitter className="w-[18px] h-[18px] fill-current stroke-0" />
            </a>
            <a href="#" className="text-zinc-600 hover:text-brand-green transition-all transform hover:-translate-y-1 block duration-300" aria-label="Facebook">
              <Facebook className="w-[18px] h-[18px] fill-current stroke-0" />
            </a>
            <a href="#" className="text-zinc-600 hover:text-brand-green transition-all transform hover:-translate-y-1 block duration-300" aria-label="Instagram">
              <Instagram className="w-[18px] h-[18px] stroke-2" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;