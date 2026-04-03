import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import bgVideo from '../../../assets/bg.mp4';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-brand-black text-white text-center">
      {/* Background Video (now inherently covers the entire dynamic section including spacer) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Black Overlays (Lightened to make video more prominent) */}
      <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.85)_100%)] z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(187,246,0,0.1)_0%,transparent_50%)] pointer-events-none z-0" />

      {/* Primary Flex Container structured securely to exactly 100vh to ensure perfect user entrance visibility bounds */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center min-h-screen pt-24 pb-12 w-full max-w-5xl">

        {/* Main Content */}
        <h1 className="font-montserrat font-black text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] leading-[0.95] tracking-tighter mb-8 uppercase text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] mt-12">
          We Multiply <br />
          Your <span className="text-brand-green drop-shadow-[0_0_25px_rgba(187,246,0,0.4)]">Revenue</span>
        </h1>

        <p className="font-inter text-zinc-300 antialiased text-lg md:text-xl lg:text-[1.35rem] max-w-3xl mb-12 leading-relaxed">
          We build elite client-acquisition systems exclusively for health and fitness coaches. Stop chasing unqualified leads, and start scaling your online business predictably.
        </p>

        {/* Email Capture & CTA */}
        {/* Email Capture CTA (Complete Button) */}
        {/* Hero CTA Button */}
        <div className="w-full max-w-3xl mx-auto mb-8 mt-6">
          <button className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-brand-green text-black font-inter font-black uppercase tracking-widest text-sm md:text-lg lg:text-xl px-10 md:px-16 py-4 md:py-6 rounded-full shadow-[0_10px_40px_rgba(187,246,0,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_50px_rgba(187,246,0,0.55)] active:scale-[0.97] overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Book Your Free Strategy Call Now
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1.5 stroke-[3]" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out z-0 pointer-events-none" />
          </button>
        </div>

        {/* Trust Indicators underneath */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl mx-auto px-4 text-[10px] md:text-xs text-zinc-400 font-inter tracking-wide uppercase gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            
          </div>
        </div>

      </div>

      {/* Massive explicit spacer to swallow the identical negative margin from the HeroMessageBorder */}
      <div className="h-[60px] md:h-[120px] lg:h-[180px] w-full bg-transparent pointer-events-none" />

    </section>
  );
};

export default Hero;
