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

      {/* Black Overlays */}
      <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.95)_100%)] z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(187,246,0,0.08)_0%,transparent_50%)] pointer-events-none z-0" />

      {/* Primary Flex Container structured securely to exactly 100vh to ensure perfect user entrance visibility bounds */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center min-h-screen pt-24 pb-12 w-full max-w-5xl">

        {/* Main Content */}
        <h1 className="font-montserrat font-black text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] leading-[0.95] tracking-tighter mb-8 uppercase text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] mt-12">
          We Multiply <br />
          Your <span className="text-brand-green drop-shadow-[0_0_25px_rgba(187,246,0,0.4)]">Revenue</span>
        </h1>

        <p className="font-inter text-zinc-300 antialiased text-lg md:text-xl lg:text-[1.35rem] max-w-3xl mb-12 leading-relaxed">
          We guarantee our results. If we don’t hit the targets we set for your campaign, we work for free until we do.
        </p>

        {/* Email Capture & CTA */}
        <div className="w-full max-w-[45rem] mx-auto mb-4">
          <form className="relative flex flex-row items-stretch w-full bg-[#efefef] rounded-full shadow-2xl overflow-hidden h-12 md:h-14 mt-6">
            <div className="flex-1 flex items-center px-4 md:px-6 h-full">
              <span className="text-base md:text-xl mr-2 md:mr-3">👋</span>
              <input
                type="email"
                placeholder="Enter your email here and we'll send you some 'magic'..."
                className="w-full bg-transparent text-zinc-800 font-inter placeholder-zinc-600 focus:outline-none text-sm md:text-lg outline-none h-full truncate"
                required
              />
            </div>
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-1 md:gap-2 bg-brand-green text-black font-inter font-black tracking-tight text-base md:text-xl px-6 md:px-8 h-full transition-colors duration-300 hover:brightness-95 shrink-0"
            >
              Do it
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1 stroke-[2.5]" />
            </button>
          </form>
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
