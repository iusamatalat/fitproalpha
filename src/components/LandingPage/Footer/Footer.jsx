import React from 'react';
import logoUrl from '../../../assets/logo.svg';
import { Zap, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

// --- Custom Social Icons (Lucide V1 replacements) ---
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

const Youtube = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 7.1C2.5 7.1 2.3 5.5 3 4.8 3.9 3.9 5 3.9 5.5 3.8 9 3.5 12 3.5 12 3.5s3 0 6.5.3c.5.1 1.6.1 2.5 1 1.1 1.1 1.3 2.8 1.3 2.8.2 1.4.2 2.8.2 2.8s0 1.4-.2 2.8c0 0-.2 1.6-1.3 2.8-.9.9-2.1.9-2.6 1-3.6.3-6.4.3-6.4.3s-3 0-6.5-.3c-.5-.1-1.6-.1-2.5-1-1.1-1.1-1.3-2.8-1.3-2.8-.2-1.4-.2-2.8-.2-2.8s0-1.4.2-2.8Z" />
    <path d="m9.7 15.6 5.8-3.4-5.8-3.4v6.8Z" />
  </svg>
);

const Linkedin = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- Main Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white relative z-50 overflow-hidden border-t border-white/5 mt-20">
      {/* Background Enhancements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-brand-green/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="container mx-auto px-6 max-w-[1240px] pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">

          {/* Brand Core Column */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-12">
            <div className="flex items-center gap-4 mb-8">
              <img src={logoUrl} alt="Fit Pro Alpha Logo" className="w-16 h-16 object-contain brightness-125 saturate-150 drop-shadow-[0_0_15px_rgba(204,255,0,0.2)]" />
              <div className="flex flex-col">
                <span className="font-montserrat font-black text-3xl uppercase tracking-tighter leading-none">Fit Pro</span>
                <span className="font-montserrat font-black text-2xl text-brand-green uppercase tracking-[0.25em] leading-normal pt-1">Alpha</span>
              </div>
            </div>
            <p className="font-inter text-zinc-400 leading-relaxed max-w-md mb-10 text-lg">
              We engineer ruthless, full-funnel scaling systems exclusively for elite fitness influencers. Total market domination.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Youtube, href: '#', label: 'Youtube' },
                { Icon: Linkedin, href: '#', label: 'Linkedin' },
              ].map((social, idx) => (
                <a key={idx} href={social.href} aria-label={social.label} className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-brand-green hover:border-brand-green hover:text-black hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] transition-all duration-300 hover:-translate-y-1">
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Alpha Insights Opt-in */}
          <div className="lg:col-span-4 lg:col-start-6">
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4 inline-flex">
              <Zap className="w-5 h-5 text-brand-green" />
              <h4 className="font-montserrat font-black text-xl uppercase tracking-widest text-white">Alpha Insights</h4>
            </div>
            <p className="font-inter text-zinc-400 mb-6 text-sm leading-relaxed">
              Join over 5,000+ elite fitness coaches receiving our weekly scaling strategies, market analyses, and pure conversion blueprints.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white font-inter text-sm outline-none focus:border-brand-green/50 focus:bg-white/10 transition-all placeholder:text-zinc-600"
                required
              />
              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-[#bbf000] text-black font-montserrat font-bold uppercase tracking-widest text-sm py-3.5 rounded-xl transition-all shadow-[0_0_15px_rgba(204,255,0,0.1)] hover:shadow-[0_0_25px_rgba(204,255,0,0.3)] flex items-center justify-center gap-2 group"
              >
                <span>Subscribe Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[3]" />
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4 inline-flex">
              <MapPin className="w-5 h-5 text-brand-green" />
              <h4 className="font-montserrat font-black text-xl uppercase tracking-widest text-white">Contact</h4>
            </div>
            <ul className="space-y-4 font-inter">
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-green/30 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green transition-colors">
                  <Phone className="w-4 h-4 text-brand-green group-hover:text-black transition-colors" />
                </div>
                <div>
                  <span className="block text-zinc-500 text-[10px] mb-0.5 uppercase tracking-widest font-black">Call Us Now</span>
                  <a href="tel:1-888-303-8580" className="hover:text-brand-green transition-colors text-white font-bold block text-lg tracking-tight">+92 3XX XXXXXXX</a>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-green/30 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green transition-colors">
                  <Mail className="w-4 h-4 text-brand-green group-hover:text-black transition-colors" />
                </div>
                <div>
                  <span className="block text-zinc-500 text-[10px] mb-0.5 uppercase tracking-widest font-black">Send A Proposal</span>
                  <a href="mailto:scale@fitproalpha.com" className="hover:text-brand-green transition-colors text-white font-bold block">scale@fitproalpha.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Minimalist Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />

        {/* Bottom Copyright Meta Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-inter text-zinc-500 text-sm font-semibold tracking-wide flex items-center gap-2">
            &copy; {new Date().getFullYear()} Fit Pro Alpha. All rights reserved.
          </p>
          <div className="flex items-center gap-8 font-inter text-zinc-500 text-sm font-semibold tracking-wide">
            <a href="#" className="hover:text-brand-green transition-colors group flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-brand-green transition-colors"></span> Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-green transition-colors group flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-brand-green transition-colors"></span> Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;